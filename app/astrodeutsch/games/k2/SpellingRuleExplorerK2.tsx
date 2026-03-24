"use client";
// SpellingRuleExplorerK2 — Island i6: Rechtschreibung 1 (Spelling Rules 1)
// Topics: 1) tz oder z?  2) ck oder k?  3) Doppelvokale (aa, ee, oo)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="spellGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spellGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">🐱</text>
        <text x="-50" y="20" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Ka<tspan fill="#DC2626">tz</tspan>e</text>
        <text x="-50" y="35" fontSize="10" fill="#D97706" textAnchor="middle">kurzes 'a'</text>
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">🕯️</text>
        <text x="50" y="20" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">Ker<tspan fill="#DC2626">z</tspan>e</text>
        <text x="50" y="35" fontSize="10" fill="#D97706" textAnchor="middle">nach 'r'</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="30" textAnchor="middle">🧥</text>
        <text x="-50" y="20" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Ja<tspan fill="#EF4444">ck</tspan>e</text>
        <text x="-50" y="35" fontSize="10" fill="#3B82F6" textAnchor="middle">kurzes 'a'</text>
        
        <text x="50" y="-10" fontSize="30" textAnchor="middle">☁️</text>
        <text x="50" y="20" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Wol<tspan fill="#EF4444">k</tspan>e</text>
        <text x="50" y="35" fontSize="10" fill="#3B82F6" textAnchor="middle">nach 'l'</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="spellGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spellGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="5" fontSize="30" textAnchor="middle">⛵</text>
        <text x="-15" y="0" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">B<tspan fill="#10B981">oo</tspan>t</text>
        
        <text x="60" y="5" fontSize="30" textAnchor="middle">🌊</text>
        <text x="15" y="0" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">M<tspan fill="#10B981">ee</tspan>r</text>
        
        <text x="0" y="40" fontSize="14" fill="#065F46" textAnchor="middle">Lange Vokale: aa, ee, oo</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreibung 1",

    // Topic 1
    t1_title: "tz oder z?",
    t1_text: "Wann schreiben wir 'tz' und wann nur 'z'? Die Regel ist einfach: Nach einem KURZEN Vokal (a, e, i, o, u) schreiben wir 'tz' (wie bei Katze). Nach einem Konsonanten (wie l, n, r) oder einem langen Vokal schreiben wir nur 'z' (wie bei Kerze oder Pilz).",
    t1_b1: "Kurzer Vokal -> tz (Platz, sitzen)",
    t1_b2: "Nach Konsonant (l,n,r) -> z (Holz, Herz)",
    t1_b3: "Nach Doppelvokal (ei, au) -> z (Heizung)",
    t1_inst: "Hat das Wort ein 'tz' oder ein 'z'? Sortiere sie!",
    t1_h1: "Hör gut hin! Sprichst du den Vokal davor kurz oder lang?",
    t1_h2: "Katze und Platz = tz. Kerze und Pilz = z.",
    t1_bucket_tz: "tz (Katze)",
    t1_bucket_z: "z (Kerze)",
    t1_item_katze: "Katze", t1_item_kerze: "Kerze",
    t1_item_platz: "Platz", t1_item_pilz: "Pilz",
    t1_item_sitzen: "sitzen", t1_item_holz: "Holz",
    t1_q: "Welches Wort wird mit 'tz' geschrieben?",
    t1_q_a: "Platz", t1_q_b: "Herz", t1_q_c: "Brezel", t1_q_d: "Salz",

    // Topic 2
    t2_title: "ck oder k?",
    t2_text: "Für 'ck' und 'k' gilt genau die gleiche Regel wie bei 'tz' und 'z'! Nach einem KURZEN Vokal kommt 'ck' (wie bei Jacke oder dick). Nach Konsonanten (l, n, r) oder langen Vokalen kommt nur 'k' (wie bei Wolke oder Schrank).",
    t2_b1: "Kurzer Vokal -> ck (Glocke, backen)",
    t2_b2: "Nach Konsonant -> k (Wolke, stark)",
    t2_b3: "Es gibt kein 'kk' in deutschen Wörtern!",
    t2_inst: "Welche Buchstaben fehlen? 'Der Junge trägt eine dicke Ja___e.'",
    t2_h1: "Das 'a' in Jacke wird kurz gesprochen.",
    t2_h2: "Nach einem kurzen Vokal schreiben wir 'ck'.",
    t2_gap_text: "Der Junge trägt eine Ja{gap}e.",
    t2_opt_ck: "ck", t2_opt_k: "k", t2_opt_kk: "kk",
    t2_q: "Wie schreibt man das Wort 'schaukeln' richtig?",
    t2_q_a: "schaukeln (mit k)", t2_q_b: "schauckeln (mit ck)", t2_q_c: "schaukkeln (mit kk)", t2_q_d: "shaukeln",

    // Topic 3
    t3_title: "Doppelvokale (aa, ee, oo)",
    t3_text: "Manche Wörter haben zwei gleiche Vokale hintereinander: aa, ee oder oo. Dadurch wird der Vokal beim Sprechen ganz lang gezogen! (Das 'uu' oder 'ii' gibt es so gut wie nie).",
    t3_b1: "aa: das Haar, das Paar",
    t3_b2: "ee: das Meer, der Schnee",
    t3_b3: "oo: das Boot, das Moos",
    t3_inst: "Welche Wörter haben einen Doppelvokal? Markiere sie!",
    t3_h1: "Suche nach Wörtern mit aa, ee oder oo.",
    t3_h2: "Die Wörter 'Boot' (oo) und 'Meer' (ee) sind richtig.",
    t3_w1: "Das", t3_w2: "Boot", t3_w3: "fährt", t3_w4: "auf", t3_w5: "dem", t3_w6: "Meer.",
    t3_q: "Welches Wort hat einen Doppelvokal?",
    t3_q_a: "Schnee", t3_q_b: "Baum", t3_q_c: "Haus", t3_q_d: "Regen",
  },
  en: {
    explorer_title: "Spelling Rules 1",
    t1_inst: "Does the word have a 'tz' or a 'z'? Sort them!",
    t1_h1: "Listen carefully! Is the vowel before it short or long?",
    t1_h2: "Katze and Platz = tz. Kerze and Pilz = z.",
    t1_bucket_tz: "tz (Katze)",
    t1_bucket_z: "z (Kerze)",

    t2_inst: "Which letters are missing? 'Der Junge trägt eine dicke Ja___e.' (The boy wears a thick jacket.)",
    t2_h1: "The 'a' in Jacke is pronounced short.",
    t2_h2: "After a short vowel we write 'ck'.",

    t3_inst: "Which words have a double vowel? Highlight them!",
    t3_h1: "Look for words with aa, ee, or oo.",
    t3_h2: "The words 'Boot' (oo) and 'Meer' (ee) are correct.",
  },
  hu: {
    explorer_title: "Helyesírás 1",
    t1_inst: "A szóban 'tz' vagy 'z' van? Válogasd szét őket!",
    t1_h1: "Figyelj jól! A magánhangzó előtte rövid vagy hosszú?",
    t1_h2: "Katze és Platz = tz. Kerze és Pilz = z.",
    t1_bucket_tz: "tz (Katze)",
    t1_bucket_z: "z (Kerze)",

    t2_inst: "Mely betűk hiányoznak? 'Der Junge trägt eine dicke Ja___e.' (A fiú vastag kabátot visel.)",
    t2_h1: "A 'Jacke' szóban az 'a' rövid.",
    t2_h2: "Rövid magánhangzó után 'ck'-t írunk.",

    t3_inst: "Mely szavakban van dupla magánhangzó? Jelöld ki őket!",
    t3_h1: "Keress olyan szavakat, amikben aa, ee vagy oo van.",
    t3_h2: "A 'Boot' (oo) és a 'Meer' (ee) a helyes.",
  },
  ro: {
    explorer_title: "Reguli de scriere 1",
    t1_inst: "Cuvântul are un 'tz' sau un 'z'? Sortează-le!",
    t1_h1: "Ascultă cu atenție! Vocala dinainte este scurtă sau lungă?",
    t1_h2: "Katze și Platz = tz. Kerze și Pilz = z.",
    t1_bucket_tz: "tz (Katze)",
    t1_bucket_z: "z (Kerze)",

    t2_inst: "Ce litere lipsesc? 'Der Junge trägt eine dicke Ja___e.' (Băiatul poartă o jachetă groasă.)",
    t2_h1: "Vocala 'a' din Jacke este scurtă.",
    t2_h2: "După o vocală scurtă scriem 'ck'.",

    t3_inst: "Care cuvinte au o vocală dublă? Bifează-le!",
    t3_h1: "Caută cuvinte cu aa, ee sau oo.",
    t3_h2: "Cuvintele 'Boot' (oo) și 'Meer' (ee) sunt corecte.",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: tz vs z (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "tz", label: "t1_bucket_tz" },
        { id: "z", label: "t1_bucket_z" },
      ],
      items: [
        { text: "t1_item_katze", bucketId: "tz" },
        { text: "t1_item_kerze", bucketId: "z" },
        { text: "t1_item_platz", bucketId: "tz" },
        { text: "t1_item_pilz", bucketId: "z" },
        { text: "t1_item_sitzen", bucketId: "tz" },
        { text: "t1_item_holz", bucketId: "z" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // Platz
    },
  },
  // ── Topic 2: ck vs k (gap-fill) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_text",
      choices: ["t2_opt_ck", "t2_opt_k", "t2_opt_kk"],
      correctIndex: 0, // ck
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // schaukeln (mit k)
    },
  },
  // ── Topic 3: Double Vowels (highlight-text) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], // Das Boot fährt auf dem Meer.
      correctIndices: [1, 5], // Boot, Meer.
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Schnee
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✍️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpellingRuleExplorerK2 = memo(function SpellingRuleExplorerK2({
  color = "#F59E0B",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_spelling1" color={color} lang={lang} onDone={onDone} />;
});

export default SpellingRuleExplorerK2;
