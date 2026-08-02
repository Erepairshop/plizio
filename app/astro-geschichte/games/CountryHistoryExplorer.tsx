"use client";

import { useMemo, useState } from "react";
import type { IslandDef, Lang } from "@/lib/astroGeschichte";
import type { CurriculumMCQ, CurriculumQuestion } from "@/lib/curriculumTypes";
import { getCountryQuestions, getCountrySubtopics } from "@/lib/geschichteCountryContent";
import { getGeschichteVariantProfile } from "@/lib/astroGeschichte";

interface Props {
  island: IslandDef;
  grade: number;
  lang: string;
  color?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

type CountryMissionQuestion = {
  question: CurriculumQuestion;
  topicName: string;
};

const UI: Record<Lang, Record<string, string>> = {
  de: {
    introTitle: "Themen dieser Insel",
    introBody: "Sieh dir die Themen an und beantworte danach die Fragen zu diesem Ländermodul.",
    start: "Mission starten",
    back: "Zurück",
    noContentTitle: "Noch keine Inhalte verfügbar",
    noContentBody: "Für diese Landesvariante sind hier noch keine passenden Geschichtsfragen hinterlegt.",
    questionLabel: "Frage",
    topicLabel: "Thema",
    submit: "Prüfen",
    next: "Weiter",
    finish: "Mission abschliessen",
    wrong: "Nicht ganz richtig",
    placeholder: "Antwort eingeben",
    resultTitle: "Geschafft",
    scoreLabel: "Punkte",
    expected: "Erwartet",
  },
  en: {
    introTitle: "Topics on this island",
    introBody: "Review the topics, then answer the questions for this country-specific history module.",
    start: "Start mission",
    back: "Back",
    noContentTitle: "No content yet",
    noContentBody: "There are no matching history questions here for this country variant yet.",
    questionLabel: "Question",
    topicLabel: "Topic",
    submit: "Check",
    next: "Next",
    finish: "Finish mission",
    wrong: "Not quite",
    placeholder: "Type your answer",
    resultTitle: "Completed",
    scoreLabel: "Score",
    expected: "Expected",
  },
  hu: {
    introTitle: "A sziget témái",
    introBody: "Nézd át a témákat, majd válaszolj az ehhez az országváltozathoz tartozó történelmi kérdésekre.",
    start: "Küldetés indítása",
    back: "Vissza",
    noContentTitle: "Még nincs tartalom",
    noContentBody: "Ehhez az országváltozathoz itt még nincs megfelelő történelmi kérdés.",
    questionLabel: "Kérdés",
    topicLabel: "Téma",
    submit: "Ellenőrzés",
    next: "Tovább",
    finish: "Küldetés befejezése",
    wrong: "Ez most nem pontos",
    placeholder: "Írd be a választ",
    resultTitle: "Sikerült",
    scoreLabel: "Pontszám",
    expected: "Helyes válasz",
  },
  ro: {
    introTitle: "Temele acestei insule",
    introBody: "Parcurge temele, apoi răspunde la întrebările pentru acest modul istoric specific țării.",
    start: "Pornește misiunea",
    back: "Înapoi",
    noContentTitle: "Nu există conținut încă",
    noContentBody: "Nu există încă întrebări istorice potrivite aici pentru această variantă de țară.",
    questionLabel: "Întrebare",
    topicLabel: "Tema",
    submit: "Verifică",
    next: "Continuă",
    finish: "Încheie misiunea",
    wrong: "Nu este chiar corect",
    placeholder: "Scrie răspunsul",
    resultTitle: "Finalizat",
    scoreLabel: "Scor",
    expected: "Răspuns așteptat",
  },
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function isMcq(question: CurriculumQuestion): question is CurriculumMCQ {
  return question.type === "mcq" && Array.isArray((question as CurriculumMCQ).options);
}

export default function CountryHistoryExplorer({
  island,
  grade,
  lang,
  color = "#F59E0B",
  onDone,
  onClose,
}: Props) {
  const resolvedLang = (lang === "de" || lang === "en" || lang === "hu" || lang === "ro" ? lang : "de") as Lang;
  const variant = getGeschichteVariantProfile(resolvedLang);
  const ui = UI[resolvedLang];
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [typingSolved, setTypingSolved] = useState(false);

  const topicNameById = useMemo(() => {
    if (!variant.countryCode) return new Map<string, string>();
    return new Map(
      getCountrySubtopics(variant.countryCode, grade).map((entry) => [
        entry.id,
        entry.names[resolvedLang] ?? entry.names.de ?? entry.id,
      ]),
    );
  }, [grade, resolvedLang, variant.countryCode]);

  const topicNames = useMemo(
    () => island.topicKeys.map((topicKey) => topicNameById.get(topicKey) ?? topicKey),
    [island.topicKeys, topicNameById],
  );

  const questions = useMemo<CountryMissionQuestion[]>(() => {
    if (!variant.countryCode) return [];

    const pool = island.topicKeys.flatMap((topicKey) =>
      getCountryQuestions(variant.countryCode as string, grade, topicKey, 12).map((question) => ({
        question,
        topicName: topicNameById.get(topicKey) ?? topicKey,
      })),
    );

    const unique = new Map<string, CountryMissionQuestion>();
    for (const entry of pool) {
      if (!unique.has(entry.question.question)) {
        unique.set(entry.question.question, entry);
      }
    }

    return shuffle([...unique.values()]).slice(0, 5);
  }, [grade, island.topicKeys, topicNameById, variant.countryCode]);

  const current = questions[index] ?? null;

  const advance = (earnedPoint: boolean) => {
    const nextScore = earnedPoint ? score + 1 : score;
    setScore(nextScore);

    if (index + 1 >= questions.length) {
      setPhase("result");
      return;
    }

    setIndex((value) => value + 1);
    setSelectedChoice(null);
    setTypedAnswer("");
    setTypingSolved(false);
  };

  if (!variant.countryCode || questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#060614] flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <h2 className="text-2xl font-black text-white">{ui.noContentTitle}</h2>
          <p className="mt-3 text-sm text-white/65">{ui.noContentBody}</p>
          {onClose && (
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-2xl px-5 py-3 font-black text-white"
              style={{ background: color }}
            >
              {ui.back}
            </button>
          )}
        </div>
      </div>
    );
  }

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-[#060614] flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">{variant.label[resolvedLang]}</p>
              <h2 className="mt-2 text-3xl font-black text-white">{ui.introTitle}</h2>
            </div>
            <div className="rounded-2xl px-4 py-2 text-sm font-black text-white" style={{ background: `${color}33`, border: `1px solid ${color}` }}>
              {questions.length} / 5
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/70">{ui.introBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {topicNames.map((topicName) => (
              <div key={topicName} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white/90">
                {topicName}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {onClose && (
              <button
                onClick={onClose}
                className="w-full rounded-2xl border border-white/12 bg-white/6 px-5 py-3 font-black text-white/80 sm:w-auto sm:min-w-[140px]"
              >
                {ui.back}
              </button>
            )}
            <button
              onClick={() => setPhase("quiz")}
              className="w-full rounded-2xl px-5 py-3 font-black text-white"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}
            >
              {ui.start}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div className="min-h-screen bg-[#060614] flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-6 text-center">
          <h2 className="text-3xl font-black text-white">{ui.resultTitle}</h2>
          <p className="mt-3 text-sm text-white/65">
            {ui.scoreLabel}: <span className="font-black text-white">{score} / {questions.length}</span>
          </p>
          <button
            onClick={() => onDone(score, questions.length)}
            className="mt-6 w-full rounded-2xl px-5 py-3 font-black text-white"
            style={{ background: color }}
          >
            {ui.finish}
          </button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  const typingAnswers = !isMcq(current.question)
    ? (Array.isArray(current.question.answer) ? current.question.answer : [current.question.answer])
    : [];

  return (
    <div className="min-h-screen bg-[#060614] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">{ui.topicLabel}</p>
            <h2 className="mt-2 text-lg font-black text-white">{current.topicName}</h2>
          </div>
          <div className="rounded-2xl px-4 py-2 text-sm font-black text-white" style={{ background: `${color}33`, border: `1px solid ${color}` }}>
            {ui.questionLabel} {index + 1} / {questions.length}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-[#090919] p-5">
          <p className="text-lg font-bold leading-7 text-white">{current.question.question}</p>
        </div>

        {isMcq(current.question) ? (
          <div className="mt-6 grid gap-3">
            {current.question.options.map((choice) => {
              const isSelected = selectedChoice === choice;
              return (
                <button
                  key={choice}
                  onClick={() => setSelectedChoice(choice)}
                  className="rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition-colors"
                  style={{
                    background: isSelected ? `${color}22` : "rgba(255,255,255,0.04)",
                    borderColor: isSelected ? color : "rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                >
                  {choice}
                </button>
              );
            })}
            <button
              onClick={() => {
                if (!selectedChoice) return;
                advance(selectedChoice === current.question.options[current.question.correct]);
              }}
              disabled={!selectedChoice}
              className="mt-2 rounded-2xl px-5 py-3 font-black text-white disabled:opacity-50"
              style={{ background: color }}
            >
              {index + 1 >= questions.length ? ui.finish : ui.next}
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <input
              value={typedAnswer}
              onChange={(event) => setTypedAnswer(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && typedAnswer.trim()) {
                  const isCorrect = typingAnswers.some((answer) => normalizeAnswer(answer) === normalizeAnswer(typedAnswer));
                  if (isCorrect) {
                    advance(true);
                  } else {
                    setTypingSolved(true);
                  }
                }
              }}
              placeholder={ui.placeholder}
              className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-base font-semibold text-white outline-none"
            />
            <button
              onClick={() => {
                if (!typedAnswer.trim()) return;
                const isCorrect = typingAnswers.some((answer) => normalizeAnswer(answer) === normalizeAnswer(typedAnswer));
                if (isCorrect) {
                  advance(true);
                } else {
                  setTypingSolved(true);
                }
              }}
              disabled={!typedAnswer.trim()}
              className="mt-3 rounded-2xl px-5 py-3 font-black text-white disabled:opacity-50"
              style={{ background: color }}
            >
              {ui.submit}
            </button>
            {typingSolved && (
              <div className="mt-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-white/85">
                <p className="font-black text-red-300">{ui.wrong}</p>
                <p className="mt-2">
                  {ui.expected}: <span className="font-bold">{typingAnswers.join(" / ")}</span>
                </p>
                <button
                  onClick={() => advance(false)}
                  className="mt-3 rounded-xl border border-white/12 bg-white/8 px-4 py-2 font-black text-white"
                >
                  {index + 1 >= questions.length ? ui.finish : ui.next}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
