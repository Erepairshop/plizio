"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Family Explorer",
    round1Title: "Family Members",
    round1Hint: "Tap each family member to discover who they are!",
    round1Mother: "Mother",
    round1Father: "Father",
    round1Sister: "Sister",
    round1Brother: "Brother",
    round1Grandma: "Grandma",
    round1Grandpa: "Grandpa",
    round2Title: "Who Is This?",
    round2Hint: "Listen to the description and choose the right family member!",
    round2MyMother: "My mother — female parent",
    round2MyFather: "My father — male parent",
    round2MySister: "My sister — female sibling",
    round2MyBrother: "My brother — male sibling",
    round3Title: "House Rooms",
    round3Hint: "Where do we do these activities? Tap the correct room!",
    round3Kitchen: "Kitchen",
    round3Bedroom: "Bedroom",
    round3LivingRoom: "Living Room",
    round3Bathroom: "Bathroom",
    round3Cooking: "Cook",
    round3Sleeping: "Sleep",
    round3Relaxing: "Relax",
    round3Washing: "Wash",
    round4Title: "Polite Behavior",
    round4Hint: "Is this polite or rude?",
    round4Polite: "Polite",
    round4Rude: "Rude",
    round4SayPleaseExample: "Say 'please' when asking",
    round4InterruptExample: "Interrupt while others talk",
    round4ShareExample: "Share toys with friends",
    round4MessExample: "Leave a mess without cleaning",
    round5Title: "Family Rules",
    round5Hint: "What should we do at home?",
    round5ListenToParents: "Listen to parents",
    round5CleanUpToys: "Clean up toys",
    round5BeQuiet: "Be quiet when needed",
    round5HelpAtHome: "Help at home",
    correct: "Correct!",
    wrong: "Try again!",
    next: "Next",
    finish: "Finished!",
  },
  hu: {
    title: "Család felfedező",
    round1Title: "Családtagok",
    round1Hint: "Koppints a családtagokra!",
    round1Mother: "Anya",
    round1Father: "Apa",
    round1Sister: "Nővér",
    round1Brother: "Testvér",
    round1Grandma: "Nagyanya",
    round1Grandpa: "Nagyapa",
    round2Title: "Ki ez?",
    round2Hint: "Hallgasd meg a leírást és válassz!",
    round2MyMother: "Az anyám — női szülő",
    round2MyFather: "Az apám — férfi szülő",
    round2MySister: "A nővérem — női testvér",
    round2MyBrother: "A testvérem — férfi testvér",
    round3Title: "Házszobák",
    round3Hint: "Hol végzünk ezeket a tevékenységeket?",
    round3Kitchen: "Konyha",
    round3Bedroom: "Hálószoba",
    round3LivingRoom: "Nappali",
    round3Bathroom: "Fürdőszoba",
    round3Cooking: "Főzés",
    round3Sleeping: "Alvás",
    round3Relaxing: "Pihenés",
    round3Washing: "Mosás",
    round4Title: "Udvarias viselkedés",
    round4Hint: "Ez udvarias vagy durva?",
    round4Polite: "Udvarias",
    round4Rude: "Durva",
    round4SayPleaseExample: "Mondj 'kérlek'-et",
    round4InterruptExample: "Szakítsd meg mások beszédét",
    round4ShareExample: "Oszd meg a játékokat",
    round4MessExample: "Hagyj rendetlenséget",
    round5Title: "Családi szabályok",
    round5Hint: "Mit kell tenni otthon?",
    round5ListenToParents: "Hallgass szüleidre",
    round5CleanUpToys: "Rendezd fel a játékokat",
    round5BeQuiet: "Légy csendes",
    round5HelpAtHome: "Segíts otthon",
    correct: "Helyes!",
    wrong: "Próbálj újra!",
    next: "Tovább",
    finish: "Vége!",
  },
  de: {
    title: "Familie-Entdecker",
    round1Title: "Familienmitglieder",
    round1Hint: "Tippe auf jedes Familienmitglied!",
    round1Mother: "Mutter",
    round1Father: "Vater",
    round1Sister: "Schwester",
    round1Brother: "Bruder",
    round1Grandma: "Oma",
    round1Grandpa: "Opa",
    round2Title: "Wer ist das?",
    round2Hint: "Höre die Beschreibung und wähle das richtige Familienmitglied!",
    round2MyMother: "Meine Mutter — weiblicher Elternteil",
    round2MyFather: "Mein Vater — männlicher Elternteil",
    round2MySister: "Meine Schwester — weibliches Geschwister",
    round2MyBrother: "Mein Bruder — männliches Geschwister",
    round3Title: "Zimmer im Haus",
    round3Hint: "Wo machen wir diese Aktivitäten?",
    round3Kitchen: "Küche",
    round3Bedroom: "Schlafzimmer",
    round3LivingRoom: "Wohnzimmer",
    round3Bathroom: "Badezimmer",
    round3Cooking: "Kochen",
    round3Sleeping: "Schlafen",
    round3Relaxing: "Ausruhen",
    round3Washing: "Waschen",
    round4Title: "Höfliches Verhalten",
    round4Hint: "Ist das höflich oder unhöflich?",
    round4Polite: "Höflich",
    round4Rude: "Unhöflich",
    round4SayPleaseExample: "Sag 'bitte' wenn du fragst",
    round4InterruptExample: "Unterbreche andere beim Sprechen",
    round4ShareExample: "Teile Spielzeug mit anderen",
    round4MessExample: "Hinterlasse Unordnung",
    round5Title: "Familienregeln",
    round5Hint: "Was sollten wir zu Hause tun?",
    round5ListenToParents: "Auf Eltern hören",
    round5CleanUpToys: "Spielzeug aufräumen",
    round5BeQuiet: "Leise sein",
    round5HelpAtHome: "Zu Hause helfen",
    correct: "Richtig!",
    wrong: "Versuchen Sie es erneut!",
    next: "Weiter",
    finish: "Fertig!",
  },
  ro: {
    title: "Exploratorul familiei",
    round1Title: "Membrii familiei",
    round1Hint: "Atinge fiecare membru al familiei!",
    round1Mother: "Mamă",
    round1Father: "Tată",
    round1Sister: "Soră",
    round1Brother: "Frate",
    round1Grandma: "Bunica",
    round1Grandpa: "Bunicul",
    round2Title: "Cine este?",
    round2Hint: "Ascultă descrierea și alege!",
    round2MyMother: "Mama mea — părinte de sex feminin",
    round2MyFather: "Tatăl meu — părinte de sex masculin",
    round2MySister: "Sora mea — frate de sex feminin",
    round2MyBrother: "Fratele meu — frate de sex masculin",
    round3Title: "Camere din casă",
    round3Hint: "Unde facem aceste activități?",
    round3Kitchen: "Bucătărie",
    round3Bedroom: "Dormitor",
    round3LivingRoom: "Living",
    round3Bathroom: "Baie",
    round3Cooking: "Gătit",
    round3Sleeping: "Dormi",
    round3Relaxing: "Odihnă",
    round3Washing: "Spălare",
    round4Title: "Comportament politicos",
    round4Hint: "Este politicos sau nepoliticos?",
    round4Polite: "Politicos",
    round4Rude: "Nepoliticos",
    round4SayPleaseExample: "Spune 'te rog' când ceri",
    round4InterruptExample: "Întrerupe pe ceilalți",
    round4ShareExample: "Împarte jucării",
    round4MessExample: "Lasă dezordine",
    round5Title: "Reguli familiale",
    round5Hint: "Ce ar trebui să facem acasă?",
    round5ListenToParents: "Ascultă părinții",
    round5CleanUpToys: "Curață jucăriile",
    round5BeQuiet: "Fii liniștit",
    round5HelpAtHome: "Ajută acasă",
    correct: "Corect!",
    wrong: "Încearcă din nou!",
    next: "Înainte",
    finish: "Gata!",
  },
};

const FAMILY_MEMBERS = [
  { id: "mother", emoji: "👩" },
  { id: "father", emoji: "👨" },
  { id: "sister", emoji: "👧" },
  { id: "brother", emoji: "👦" },
  { id: "grandma", emoji: "👵" },
  { id: "grandpa", emoji: "👴" },
];

const ROOMS = [
  { id: "kitchen", label: "kitchen" },
  { id: "bedroom", label: "bedroom" },
  { id: "living", label: "living" },
  { id: "bathroom", label: "bathroom" },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function FamilyExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  // Round 1: Tap family members
  const [discovered, setDiscovered] = useState<Set<string>>(new Set());

  // Round 2: Family description MCQ
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [memberSubmitted, setMemberSubmitted] = useState(false);

  // Round 3: Room-activity matching
  const [roomActivities] = useState([
    { activity: "cooking", correctRoom: "kitchen" },
    { activity: "sleeping", correctRoom: "bedroom" },
    { activity: "relaxing", correctRoom: "living" },
    { activity: "washing", correctRoom: "bathroom" },
  ]);
  const [roomMatches, setRoomMatches] = useState<Record<string, string>>({});

  // Round 4: Polite behavior
  const [selectedBehavior, setSelectedBehavior] = useState<string | null>(null);
  const [behaviorSubmitted, setBehaviorSubmitted] = useState(false);

  // Round 5: Family rules MCQ
  const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [ruleSubmitted, setRuleSubmitted] = useState(false);

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
      setSelectedMember(null);
      setMemberSubmitted(false);
      setSelectedBehavior(null);
      setBehaviorSubmitted(false);
      setSelectedRule(null);
      setRuleSubmitted(false);
    }
  }, [round, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Progress dots */}
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

          {/* ROUND 1: Family members */}
          {round === 0 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
              <div className="flex flex-wrap gap-3 justify-center max-w-sm">
                {FAMILY_MEMBERS.map((m) => (
                  <motion.button key={m.id}
                    onClick={() => setDiscovered(prev => new Set([...prev, m.id]))}
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-5xl transition-colors"
                    style={{
                      background: discovered.has(m.id) ? `${color}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${discovered.has(m.id) ? color : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.95 }}>
                    {m.emoji}
                  </motion.button>
                ))}
              </div>
              {discovered.size > 0 && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 2: Family description MCQ */}
          {round === 1 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "mother", label: lbl.round2MyMother, correct: true },
                  { id: "father", label: lbl.round2MyFather, correct: false },
                  { id: "sister", label: lbl.round2MySister, correct: false },
                  { id: "brother", label: lbl.round2MyBrother, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedMember(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setMemberSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedMember === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedMember === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {memberSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 3: Room matching */}
          {round === 2 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
              <div className="flex flex-col gap-3 w-full max-w-sm">
                {roomActivities.map((ra) => (
                  <div key={ra.activity} className="flex gap-2">
                    <div className="flex-1 py-2 px-3 rounded-lg bg-white/10 border border-white/15 text-white text-sm font-bold flex items-center justify-center">
                      {lbl[`round3${ra.activity.charAt(0).toUpperCase() + ra.activity.slice(1)}` as keyof typeof lbl] || ra.activity}
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      {ROOMS.map((room) => (
                        <motion.button key={room.id}
                          onClick={() => {
                            setRoomMatches(prev => ({ ...prev, [ra.activity]: room.id }));
                            if (room.id !== ra.correctRoom) wrongRef.current++;
                          }}
                          className="py-2 px-3 rounded-lg font-bold text-white text-xs transition-colors"
                          style={{
                            background: roomMatches[ra.activity] === room.id
                              ? room.id === ra.correctRoom ? "#00FF8833" : "#FF2D7833"
                              : "rgba(255,255,255,0.06)",
                            border: `2px solid ${roomMatches[ra.activity] === room.id
                              ? room.id === ra.correctRoom ? "#00FF88" : "#FF2D78"
                              : "rgba(255,255,255,0.15)"}`,
                          }}
                          whileTap={{ scale: 0.95 }}>
                          {lbl[`round3${room.label.charAt(0).toUpperCase() + room.label.slice(1)}` as keyof typeof lbl] || room.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {Object.keys(roomMatches).length === roomActivities.length && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 4: Polite behavior */}
          {round === 3 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "say-please", label: lbl.round4SayPleaseExample, correct: true },
                  { id: "interrupt", label: lbl.round4InterruptExample, correct: false },
                  { id: "share", label: lbl.round4ShareExample, correct: true },
                  { id: "mess", label: lbl.round4MessExample, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedBehavior(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setBehaviorSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedBehavior === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedBehavior === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {behaviorSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 5: Family rules */}
          {round === 4 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "listen", label: lbl.round5ListenToParents },
                  { id: "cleanup", label: lbl.round5CleanUpToys },
                  { id: "quiet", label: lbl.round5BeQuiet },
                  { id: "help", label: lbl.round5HelpAtHome },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedRule(opt.id);
                      setRuleSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedRule === opt.id
                        ? `${color}33`
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedRule === opt.id
                        ? color
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {ruleSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.finish} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(FamilyExplorer);
