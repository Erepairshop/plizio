"use client";
// SentencesExplorer.tsx — AstroMagyar Grade 1: i6 Mondatok szigete
// Témák: 1) Nagybetű az elején 2) Mondatzáró jelek (. ? !) 3) Szórend (Mondatépítés) 4) Kérdés-felelet 5) Jel-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      <g transform="translate(120, 70)">
        {/* Nagy 'A' betű kiemelve egy mondat elején */}
        <rect x="-80" y="-20" width="160" height="40" fill="#065F46" rx="8" />
        <text x="-65" y="10" fontSize="24" fontWeight="black" fill="#34D399">A</text>
        <rect x="-45" y="-5" width="30" height="10" fill="#10B981" rx="2" />
        <rect x="-10" y="-5" width="40" height="10" fill="#10B981" rx="2" />
        <rect x="35" y="-5" width="25" height="10" fill="#10B981" rx="2" />
        <circle cx="70" cy="5" r="4" fill="#34D399" />
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mondatok szigete",
    
    // T1: Nagybetű (Slingshot)
    t1_title: "Hogy kezdjük a mondatot?",
    t1_text: "Minden magyar mondatot nagybetűvel kezdünk! Ez jelzi az olvasónak, hogy új gondolat indul.",
    t1_b1: "Például: 'A kutya fut.' (A nagybetű).",
    t1_b2: "Soha ne felejtsd el az elején!",
    t1_inst: "Lődd le a mondatot, ami HELYESEN (nagybetűvel) kezdődik!",
    t1_target_1: "A cica játszik.", // Helyes
    t1_target_2: "a cica játszik.",
    t1_target_3: "A Cica Játszik.",
    t1_q: "Milyen betűvel kezdjük a mondatokat?",
    t1_q_a: "Nagybetűvel", t1_q_b: "Kisbetűvel", t1_q_c: "Számmal", t1_q_d: "Kérdőjellel",

    // T2: Mondatzáró jelek (Bucket)
    t2_title: "A mondat vége",
    t2_text: "A mondat végére mindig teszünk egy jelet. A pont (.) kijelent, a kérdőjel (?) kérdez, a felkiáltójel (!) pedig parancsol vagy érzelmet fejez ki.",
    t2_b1: "Pont: Elmondok valamit.",
    t2_b2: "Kérdőjel: Választ várok.",
    t2_inst: "Válogasd szét a mondatokat: Kijelentés (.) vagy Kérdés (?)!",
    t2_bucket_dot: "Kijelentés (.)",
    t2_bucket_que: "Kérdés (?)",
    t2_item_d1: "Süt a nap.", t2_item_d2: "Meleg van.",
    t2_item_q1: "Hány óra van?", t2_item_q2: "Hova mész?",
    t2_q: "Milyen jel kell a végére: 'Szereted az almát_'",
    t2_q_a: "?", t2_q_b: ".", t2_q_c: "!", t2_q_d: ",",

    // T3: Szórend (Sentence Build - ez szinkronban van a genMondatRendezés-sel)
    t3_title: "Építsünk mondatot!",
    t3_text: "A mondatban a szavak sorrendje nagyon fontos, hogy értsük, mi történik.",
    t3_b1: "Egy mondatban van egy szereplő és egy cselekvés.",
    t3_b2: "Rakd őket értelmes sorrendbe!",
    t3_inst: "Rakd sorba a szavakat, hogy értelmes mondat legyen!",
    t3_frag1: "A", t3_frag2: "hal", t3_frag3: "úszik", t3_frag4: "a", t3_frag5: "vízben.",
    t3_q: "Melyik egy értelmes magyar mondat?",
    t3_q_a: "A gyerek fut.", t3_q_b: "Fut gyerek a.", t3_q_c: "Gyerek a fut.", t3_q_d: "A fut gyerek.",

    // T4: Keresd a hibát (Highlight - szinkronban a genHibaKeresés-sel)
    t4_title: "Mondat-doktor",
    t4_text: "Néha becsúszik egy hiba a mondatba. Lehet, hogy kisbetű maradt az elején, vagy lemaradt a pont a végéről.",
    t4_b1: "Nézd meg jól a mondatot!",
    t4_b2: "Kattints a hibás részre!",
    t4_inst: "Keresd meg a hibát ebben a mondatban!",
    t4_tok0: "ma", t4_tok1: "nagyon", t4_tok2: "szépen", t4_tok3: "süt", t4_tok4: "a", t4_tok5: "nap.",
    t4_q: "Mi volt a hiba az előző mondatban?",
    t4_q_a: "Kisbetűvel kezdődött.", t4_q_b: "Hiányzott a pont.", t4_q_c: "Rossz volt a szórend.", t4_q_d: "Nem volt benne ige.",

    // T5: Fun Catch
    t5_title: "Mondat Mester",
    t5_text: "Gratulálok! Most már tudod, hogyan kell felépíteni egy szabályos magyar mondatot.",
    t5_b1: "Nagybetű az elején.",
    t5_b2: "Írásjel a végén.",
    t5_inst: "Kapj el 6 írásjelet (💬) a győzelemhez!",
    t5_q: "Melyik írásjel fejezi ki, hogy valaki nagyon csodálkozik vagy kiabál?",
    t5_q_a: "!", t5_q_b: ".", t5_q_c: "?", t5_q_d: ",",
  }
};

// ─── TOPICS ──────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "physics-slingshot",
      question: "t1_inst",
      targets: [
        { id: "t1", text: "t1_target_1", isCorrect: true },
        { id: "t2", text: "t1_target_2", isCorrect: false },
        { id: "t3", text: "t1_target_3", isCorrect: false },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "dot", label: "t2_bucket_dot" },
        { id: "que", label: "t2_bucket_que" },
      ],
      items: [
        { text: "t2_item_d1", bucketId: "dot" },
        { text: "t2_item_q1", bucketId: "que" },
        { text: "t2_item_d2", bucketId: "dot" },
        { text: "t2_item_q2", bucketId: "que" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t3_frag1", "t3_frag2", "t3_frag3", "t3_frag4", "t3_frag5"],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic1Svg />,
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [0], // "ma" -> kisbetűs hiba
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic1Svg />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "💬", count: 6 },
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "💬",
  topics: TOPICS,
  rounds: [],
};

export default function SentencesExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="magyar_o1_i6" 
      color="#10B981" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
