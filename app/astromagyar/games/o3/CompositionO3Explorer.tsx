"use client";
// CompositionExplorer.tsx — AstroMagyar Grade 3: i7 Fogalmazás szigete
// Témák: Elbeszélés (történetírás), Leírás (tulajdonságok), Párbeszéd (gondolatjel)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── PLACEHOLDER (SVG helyett) ───────────────────
const PlaceholderSvg = memo(({ emoji, color }: { emoji: string; color: string }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill={color} rx="20" opacity="0.2" />
    <text x="50%" y="60%" textAnchor="middle" fontSize="60">{emoji}</text>
  </svg>
));

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Fogalmazás szigete",
    
    // T1: Elbeszélés (Word Order)
    t1_title: "A történet gerince",
    t1_text: "Minden jó történet három fő részből áll: Bevezetés (kik, hol, mikor?), Tárgyalás (a kaland, a probléma) és Befejezés (a megoldás).",
    t1_inst: "Rakd helyes sorrendbe a történet részeit!",
    t1_w1: "Bevezetés", t1_w2: "Tárgyalás", t1_w3: "Befejezés",
    
    // T2: Leírás (Highlight)
    t2_title: "Fesd le szavakkal!",
    t2_text: "Amikor bemutatunk egy tárgyat vagy állatot, leírást készítünk. Ilyenkor rengeteg melléknevet (Milyen?) használunk, hogy a másik maga elé tudja képzelni.",
    t2_inst: "Jelöld ki a mondatban a tulajdonságot (melléknevet)!",
    t2_tok0: "A", t2_tok1: "kertben", t2_tok2: "egy", t2_tok3: "hatalmas", t2_tok4: "tölgyfa", t2_tok5: "áll.",

    // T3: Párbeszéd (Slingshot)
    t3_title: "Amikor a szereplők beszélnek",
    t3_text: "A mesékben a szereplők gyakran beszélgetnek. Ezt hívjuk párbeszédnek. Amikor valaki megszólal, a mondat elejére egy gondolatjelet (–) teszünk.",
    t3_inst: "Milyen írásjellel kezdődik a szereplő mondata?",
    t3_target_1: "– (gondolatjel)", // Helyes
    t3_target_2: ". (pont)",
    t3_target_3: ", (vessző)",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <PlaceholderSvg emoji="📖" color="#FF9500" />,
    // imageUrl: "/images/islands/k3_i7_robot_scroll.webp",
    interactive: {
      type: "word-order",
      words: ["t1_w1", "t1_w2", "t1_w3"],
      correctOrder: [0, 1, 2],
      instruction: "t1_inst",
      hint1: "Hogyan kezdődik?",
      hint2: "Mi van középen?",
    },
    quiz: {
      question: "Melyik részben történik a legizgalmasabb kaland?",
      choices: ["Tárgyalás", "Bevezetés", "Befejezés", "Cím"],
      answer: "Tárgyalás",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceholderSvg emoji="🎨" color="#FF9500" />,
    interactive: {
      type: "highlight-text",
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4", "t2_tok5"],
      correctIndices: [3], // "hatalmas"
      instruction: "t2_inst",
      hint1: "Milyen fa?",
      hint2: "Keresd a méretét!",
    },
    quiz: {
      question: "Melyik szófajt használjuk a legtöbbször a leírásokban?",
      choices: ["Melléknév", "Ige", "Kötőszó", "Névmás"],
      answer: "Melléknév",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <PlaceholderSvg emoji="💬" color="#FF9500" />,
    interactive: {
      type: "physics-slingshot",
      question: "Lődd le a párbeszédet indító írásjelet!",
      targets: [
        { id: "tgt1", text: "t3_target_1", isCorrect: true },
        { id: "tgt2", text: "t3_target_2", isCorrect: false },
        { id: "tgt3", text: "t3_target_3", isCorrect: false },
      ],
      instruction: "t3_inst",
      hint1: "Vízszintes vonal.",
      hint2: "Nézd meg a szövegben!",
    },
    quiz: {
      question: "Hogy hívják azt a szövegrészt, amikor a szereplők beszélgetnek?",
      choices: ["Párbeszéd", "Leírás", "Elbeszélés", "Monológ"],
      answer: "Párbeszéd",
    },
  },
  {
    infoTitle: "Írópalánta",
    infoText: "Nagyszerű! Most már tudod, hogyan épül fel egy izgalmas történet. Gyűjts be 6 varázstekercset a folytatáshoz!",
    svg: () => <PlaceholderSvg emoji="📜" color="#FF9500" />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "📜", count: 6 },
      instruction: "Kapd el a tekercseket!",
      hint1: "Kattints gyorsan!",
      hint2: "Mindjárt megvan!",
    },
    quiz: {
      question: "Mi a történet utolsó része?",
      choices: ["Befejezés", "Bevezetés", "Tárgyalás", "Első oldal"],
      answer: "Befejezés",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📜",
  topics: TOPICS,
  rounds: [],
};

export default function CompositionExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i7" color="#FF9500" lang={lang} onDone={onDone} />;
}
