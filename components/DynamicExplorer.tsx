"use client";
// DynamicExplorer.tsx
// Universal pool-based explorer component.
// Receives a PoolTopicDef[] pool, picks topics randomly (per mount),
// converts SvgConfig → JSX via TopicSvgRenderer, then passes to ExplorerEngine.
//
// QUIZ MODES:
//   Manual:    quiz: { question: "t1_q", choices: [...], answer: "t1_qa" }
//   Generator: quiz: { generate: "artikel_k2" }  ← auto from deutschGenerators.ts

import { useEffect, useMemo, useState } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import { getRandomTopicsWithHistory } from "@/lib/explorerUtils";
import { GENERATORS as DEUTSCH_GENERATORS } from "@/lib/deutschGenerators";
import { K5_Generators } from "@/lib/biologieGenerators";
import { K6_Generators } from "@/lib/biologieGenerators6";
import { G1_Generators_Hungarian } from "@/lib/hungarianGenerators";
import { G2_Generators_Hungarian } from "@/lib/hungarianGenerators2";
import { G3_Generators_Hungarian } from "@/lib/hungarianGenerators3";
import { G4_Generators_Hungarian } from "@/lib/hungarianGenerators4";
import { G5_Generators_Hungarian } from "@/lib/hungarianGenerators5";
import { G6_Generators_Hungarian } from "@/lib/hungarianGenerators6";
import { G7_Generators_Hungarian } from "@/lib/hungarianGenerators7";
import { G8_Generators_Hungarian } from "@/lib/hungarianGenerators8";
import { G1_Generators_Sachkunde } from "@/lib/sachkundeGenerators1";
import { G2_Generators_Sachkunde } from "@/lib/sachkundeGenerators2";
import { G3_Generators_Sachkunde } from "@/lib/sachkundeGenerators3";
import { G4_Generators_Sachkunde } from "@/lib/sachkundeGenerators4";
import { G5_Generators_Geschichte } from "@/lib/geschichteGenerators5";
import { G6_Generators_Geschichte } from "@/lib/geschichteGenerators6";
import { G7_Generators_Geschichte } from "@/lib/geschichteGenerators7";
import { G8_Generators_Geschichte } from "@/lib/geschichteGenerators8";
import "@/lib/physikRegistration";
import "@/lib/kemiaRegistration";
import { K5_GENERATOR_MAP } from "@/lib/physikCurriculum5";
import { K6_GENERATOR_MAP } from "@/lib/physikCurriculum6";
import { K7_GENERATOR_MAP } from "@/lib/physikCurriculum7";
import { K8_GENERATOR_MAP } from "@/lib/physikCurriculum8";
import { K5_GENERATOR_MAP as KEMIA_K5_GENERATOR_MAP } from "@/lib/kemiaCurriculum5";
import { K6_GENERATOR_MAP as KEMIA_K6_GENERATOR_MAP } from "@/lib/kemiaCurriculum6";
import { K7_GENERATOR_MAP as KEMIA_K7_GENERATOR_MAP } from "@/lib/kemiaCurriculum7";
import { K8_GENERATOR_MAP as KEMIA_K8_GENERATOR_MAP } from "@/lib/kemiaCurriculum8";
import { K5_GENERATOR_MAP as GEO_K5_GENERATOR_MAP } from "@/lib/geographieCurriculum5";
import { K6_GENERATOR_MAP as GEO_K6_GENERATOR_MAP } from "@/lib/geographieCurriculum6";
import { K7_GENERATOR_MAP as GEO_K7_GENERATOR_MAP } from "@/lib/geographieCurriculum7";
import { K8_GENERATOR_MAP as GEO_K8_GENERATOR_MAP } from "@/lib/geographieCurriculum8";
import "@/lib/geographieRegistration";
import TopicSvgRenderer from "./TopicSvgRenderer";

type ExplorerSubject = "math" | "deutsch" | "romana" | "english" | "biologie" | "sachkunde" | "physik" | "chemie" | "magyar" | "general" | "geographie" | "geschichte" | "informatika";

const BIO_GENERATORS: Record<string, (...args: any[]) => any> = {};
const PHYSIK_GENERATORS: Record<string, (...args: any[]) => any> = {};
const CHEMIE_GENERATORS: Record<string, (...args: any[]) => any> = {};
const GEO_GENERATORS: Record<string, (...args: any[]) => any> = {};
const MAGYAR_GENERATORS: Record<string, (...args: any[]) => any> = {};
const SACHKUNDE_GENERATORS: Record<string, (...args: any[]) => any> = {};
const GESCHICHTE_GENERATORS: Record<string, (...args: any[]) => any> = {};
// Magyar/Hungarian — G1-G8 flat registration
[G1_Generators_Hungarian, G2_Generators_Hungarian, G3_Generators_Hungarian, G4_Generators_Hungarian,
 G5_Generators_Hungarian, G6_Generators_Hungarian, G7_Generators_Hungarian, G8_Generators_Hungarian].forEach((gradeMap) => {
  Object.entries(gradeMap as Record<string, (...args: any[]) => any>).forEach(([key, gen]) => {
    MAGYAR_GENERATORS[key] = gen;
  });
});
// Sachkunde — G1-G4 flat registration
[G1_Generators_Sachkunde, G2_Generators_Sachkunde, G3_Generators_Sachkunde, G4_Generators_Sachkunde].forEach((gradeMap) => {
  Object.entries(gradeMap as Record<string, (...args: any[]) => any>).forEach(([key, gen]) => {
    SACHKUNDE_GENERATORS[key] = gen;
  });
});
// Geschichte — G5-G8 flat registration
[G5_Generators_Geschichte, G6_Generators_Geschichte, G7_Generators_Geschichte, G8_Generators_Geschichte].forEach((gradeMap) => {
  Object.entries(gradeMap as Record<string, (...args: any[]) => any>).forEach(([key, gen]) => {
    GESCHICHTE_GENERATORS[key] = gen;
  });
});
const PHYSIK_SEED_ONLY_KEYS = new Set([
  "sound_waves",
  "sound_waves_typing",
  "pitch_volume",
  "pitch_volume_typing",
  "echo",
  "echo_typing",
  "speed_of_sound",
  "speed_of_sound_typing",
  "magnets",
  "magnets_typing",
  "magnetic_field",
  "magnetic_field_typing",
  "static_electricity",
  "static_electricity_typing",
  "simple_circuits",
  "simple_circuits_typing",
]);
// Flatten K5_Generators for easy access: "category_subtopic"
Object.entries(K5_Generators).forEach(([cat, subs]) => {
  Object.entries(subs).forEach(([sub, gen]) => {
    BIO_GENERATORS[`${cat}_${sub}`] = gen;
  });
});
// Register K6_Generators directly (flat structure, not nested like K5)
// Keys are used directly: "arthropods", "insects", "blood_components", etc.
Object.entries(K6_Generators).forEach(([key, gen]) => {
  BIO_GENERATORS[key] = gen as () => any;
});

[K5_GENERATOR_MAP, K6_GENERATOR_MAP, K7_GENERATOR_MAP, K8_GENERATOR_MAP].forEach((gradeMap) => {
  Object.entries(gradeMap).forEach(([theme, subs]) => {
    Object.entries(subs).forEach(([sub, gen]) => {
      PHYSIK_GENERATORS[sub] = gen;
      PHYSIK_GENERATORS[`${theme}_${sub}`] = gen;
    });
  });
});

[KEMIA_K5_GENERATOR_MAP, KEMIA_K6_GENERATOR_MAP, KEMIA_K7_GENERATOR_MAP, KEMIA_K8_GENERATOR_MAP].forEach((gradeMap) => {
  Object.entries(gradeMap).forEach(([theme, subs]) => {
    Object.entries(subs).forEach(([sub, gen]) => {
      CHEMIE_GENERATORS[sub] = gen;
      CHEMIE_GENERATORS[`${theme}_${sub}`] = gen;
    });
  });
});

[GEO_K5_GENERATOR_MAP, GEO_K6_GENERATOR_MAP, GEO_K7_GENERATOR_MAP, GEO_K8_GENERATOR_MAP].forEach((gradeMap) => {
  Object.entries(gradeMap).forEach(([theme, subs]) => {
    Object.entries(subs).forEach(([sub, gen]) => {
      GEO_GENERATORS[sub] = gen;
      GEO_GENERATORS[`${theme}_${sub}`] = gen;
    });
  });
});

interface Props {
  /** Pool of topic definitions — typically 6-15 items */
  pool: PoolTopicDef[];
  /** Labels object (de/en/hu/ro) for this explorer */
  labels: Record<string, Record<string, string>>;
  /** Label key for the welcome screen title */
  title: string;
  /** Emoji icon shown on welcome screen */
  icon: string;
  /** How many topics to show per session (default 5) */
  count?: number;
  /** Optional difficulty mix — if omitted: fully random */
  mix?: { easy: number; medium: number; hard: number };
  /** Unique ID for progress tracking */
  explorerId: string;
  /** Explicit AI tutor subject override */
  subject?: ExplorerSubject;
  /** Accent color */
  color?: string;
  /** Language code */
  lang?: string;
  /** Grade (1-8) */
  grade?: number;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

/**
 * Resolves a quiz definition:
 * - Manual mode: returns as-is (label keys)
 * - Generator mode: calls the generator, returns actual text directly
 *   (ExplorerEngine's L() falls back to the key itself when not found in labels,
 *    so passing actual text works transparently)
 */
function resolveQuiz(p: PoolTopicDef, lang: string): { question: string; choices: string[]; answer: string } {
  const q = p.quiz;
  if ("generate" in q) {
    const deutschGen = DEUTSCH_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const bioGen = BIO_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const physikGen = PHYSIK_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const chemieGen = CHEMIE_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const geoGen = GEO_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const magyarGen = MAGYAR_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const sachkundeGen = SACHKUNDE_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const geschichteGen = GESCHICHTE_GENERATORS[q.generate] as ((...args: any[]) => any) | undefined;
    const gen = deutschGen || bioGen || physikGen || chemieGen || geoGen || magyarGen || sachkundeGen || geschichteGen;
    if (gen) {
      const seed = Math.floor(Math.random() * 1000000);
      let result;
      if (bioGen) {
        result = gen(seed, lang);
      } else if (chemieGen || geoGen || physikGen || deutschGen) {
        if (PHYSIK_SEED_ONLY_KEYS.has(q.generate)) {
          result = gen(seed);
        } else {
          result = gen(lang, seed);
        }
      } else {
        result = gen(seed);
      }
      const pool = Array.isArray(result) ? result : [result];
      const mcqs = pool.filter((item) => item && item.type === "mcq" && Array.isArray(item.options));
      const qObj = mcqs[Math.floor(Math.random() * Math.max(mcqs.length, 1))];
      if (qObj) {
        const shuffledChoices = [...qObj.options].sort(() => Math.random() - 0.5);
        return {
          question: qObj.question,
          choices:  shuffledChoices,
          answer:   qObj.options[qObj.correct],
        };
      }
    }
    // fallback if generator key unknown — log for dev + show key in UI
    if (typeof console !== "undefined") {
      console.warn(`[DynamicExplorer] Missing generator for key: "${q.generate}" — add to deutsch/bio/physik/chemie/geo/magyar/sachkunde/geschichte generators`);
    }
    return {
      question: `⚠️ Missing generator: ${q.generate}`,
      choices: [`opt-1 (${q.generate})`, `opt-2 (${q.generate})`, `opt-3`, `opt-4`],
      answer: `opt-1 (${q.generate})`,
    };
  }
  return q;
}

export default function DynamicExplorer({
  pool,
  labels,
  title,
  icon,
  count = 5,
  mix,
  explorerId,
  subject,
  color = "#4ECDC4",
  lang = "de",
  grade = 1,
  onDone,
  onClose,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useMemo with [] → randomised once per mount, different each visit
  const def = useMemo<ExplorerDef>(() => {
    if (!mounted) {
      return { labels, title, icon, rounds: [] };
    }
    const selected = getRandomTopicsWithHistory(pool, count, explorerId, mix);

    // Deduplicate by resolved question TEXT (generator variety is limited,
    // same generator can produce identical question strings in one session).
    const usedTitles = new Set(selected.map(p => p.infoTitle));
    const usedQuestions = new Set<string>();
    const deduped = selected.map(p => {
      const quiz = resolveQuiz(p, lang);
      if (usedQuestions.has(quiz.question)) {
        // Try to find a replacement from pool with a unique question text
        const replacement = pool
          .filter(t => !usedTitles.has(t.infoTitle))
          .map(t => ({ t, quiz: resolveQuiz(t, lang) }))
          .find(({ quiz: rq }) => !usedQuestions.has(rq.question));
        if (replacement) {
          usedTitles.delete(p.infoTitle);
          usedTitles.add(replacement.t.infoTitle);
          usedQuestions.add(replacement.quiz.question);
          return { p: replacement.t, quiz: replacement.quiz };
        }
      }
      usedQuestions.add(quiz.question);
      return { p, quiz };
    });

    const topics: TopicDef[] = deduped.map(({ p, quiz }) => ({
      infoTitle:   p.infoTitle,
      infoText:    p.infoText,
      labels:      p.labels,
      svg:         () => <TopicSvgRenderer config={p.svg} lang={lang} />,
      bulletKeys:  p.bulletKeys,
      hintKey:     p.hintKey,
      interactive: p.interactive,
      quiz,
    }));
    return { labels, title, icon, topics, rounds: [] };
  }, [mounted, pool, labels, title, icon, count, mix, explorerId, lang]);

  if (!mounted) {
    return <div className="min-h-screen bg-[#060614]" />;
  }

  return (
    <ExplorerEngine
      def={def}
      grade={grade}
      explorerId={explorerId}
      subject={subject}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
