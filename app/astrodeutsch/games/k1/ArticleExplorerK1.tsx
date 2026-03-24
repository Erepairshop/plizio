"use client";
// ArticleExplorerK1 — Island i3: Artikel & Wörter (Articles & Words)
// Topics: 1) der/die/das  2) Missing letters  3) Compound words

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="artGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#artGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        {/* der, die, das pillars */}
        <g transform="translate(-60, 0)">
          <rect x="-25" y="-10" width="50" height="40" rx="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="0" y="15" fontSize="16" fontWeight="900" fill="#1D4ED8" textAnchor="middle">der</text>
          <text x="0" y="-20" fontSize="18" textAnchor="middle">🐶</text>
        </g>
        <g transform="translate(0, 0)">
          <rect x="-25" y="-10" width="50" height="40" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
          <text x="0" y="15" fontSize="16" fontWeight="900" fill="#B91C1C" textAnchor="middle">die</text>
          <text x="0" y="-20" fontSize="18" textAnchor="middle">🐱</text>
        </g>
        <g transform="translate(60, 0)">
          <rect x="-25" y="-10" width="50" height="40" rx="8" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
          <text x="0" y="15" fontSize="16" fontWeight="900" fill="#047857" textAnchor="middle">das</text>
          <text x="0" y="-20" fontSize="18" textAnchor="middle">🏠</text>
        </g>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3F4F6" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-60" y="-20" width="120" height="40" rx="10" fill="white" stroke="#9CA3AF" strokeWidth="2" />
        <text x="-30" y="7" fontSize="24" fontWeight="black" fill="#374151" textAnchor="middle">H</text>
        <line x1="-15" y1="10" x2="5" y2="10" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        <text x="25" y="7" fontSize="24" fontWeight="black" fill="#374151" textAnchor="middle">nd</text>
        
        {/* Flying letter 'u' */}
        <g transform="translate(-5, -25)">
          <circle cx="0" cy="-5" r="12" fill="#FEF08A" />
          <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">u</text>
          <path d="M 0,10 L 0,25" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="2 2" />
        </g>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="artGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#artGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        {/* Puzzle pieces */}
        <path d="M -70,-20 L -10,-20 L -10,-5 A 10,10 0 0,1 -10,15 L -10,30 L -70,30 Z" fill="#60A5FA" />
        <text x="-40" y="10" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Haus</text>
        
        <text x="0" y="12" fontSize="20" fontWeight="bold" fill="#374151" textAnchor="middle">+</text>
        
        <path d="M 10,-20 L 70,-20 L 70,30 L 10,30 L 10,15 A 10,10 0 0,0 10,-5 Z" fill="#F87171" />
        <text x="45" y="10" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Tür</text>
        
        <text x="0" y="-35" fontSize="18" fontWeight="black" fill="#B45309" textAnchor="middle">Haustür 🚪</text>
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Artikel & Wörter",

    // Topic 1
    t1_title: "Der, Die, Das",
    t1_text: "Im Deutschen hat fast jedes Nomen einen Begleiter (Artikel). Es gibt drei bestimmte Artikel: 'der' (männlich), 'die' (weiblich) und 'das' (sächlich).",
    t1_b1: "der Hund 🐶 (blau)",
    t1_b2: "die Katze 🐱 (rot)",
    t1_b3: "das Haus 🏠 (grün)",
    t1_inst: "Sortiere die Wörter in den richtigen Korb: der, die oder das?",
    t1_h1: "Hund und Apfel sind 'der'.",
    t1_h2: "Katze und Sonne sind 'die'. Haus ist 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_apfel: "Apfel",
    t1_item_katze: "Katze", t1_item_sonne: "Sonne",
    t1_item_haus: "Haus", t1_item_auto: "Auto",
    t1_q: "Welcher Artikel gehört zum Wort 'Auto'?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    // Topic 2
    t2_title: "Fehlende Buchstaben",
    t2_text: "Oh nein! Ein paar Buchstaben sind weggeflogen. Kannst du die Wörter wieder reparieren? Achte auf die Vokale (a, e, i, o, u)!",
    t2_b1: "H_nd braucht ein 'u' (Hund)",
    t2_b2: "K_tze braucht ein 'a' (Katze)",
    t2_b3: "Jedes Wort braucht Vokale!",
    t2_inst: "Verbinde das Wort mit dem fehlenden Buchstaben!",
    t2_h1: "H_nd wird zu Hund. M_us wird zu Maus.",
    t2_h2: "B_t wird zu Brot (o). _is wird zu Eis (E).",
    t2_l1: "H__nd 🐶", t2_r1: "u",
    t2_l2: "K__tze 🐱", t2_r2: "a",
    t2_l3: "Br__t 🍞", t2_r3: "o",
    t2_l4: "M__us 🐭", t2_r4: "a",
    t2_q: "Welcher Buchstabe fehlt bei 'Sch_le' (Schule)?",
    t2_q_a: "u", t2_q_b: "a", t2_q_c: "e", t2_q_d: "i",

    // Topic 3
    t3_title: "Zusammengesetzte Wörter",
    t3_text: "Im Deutschen können wir Wörter wie Legosteine zusammenbauen! Aus 'Haus' und 'Tür' wird 'Haustür'. Das neue Wort bekommt den Artikel vom letzten Wort (die Tür -> die Haustür).",
    t3_b1: "Schnee + Mann = Schneemann ⛄",
    t3_b2: "Apfel + Baum = Apfelbaum 🌳",
    t3_b3: "Der letzte Artikel gewinnt!",
    t3_inst: "Baue neue Wörter! Verbinde die passenden Teile.",
    t3_h1: "Was passt zu 'Schnee'? Der Mann! (Schneemann)",
    t3_h2: "Was passt zu 'Haus'? Die Tür! (Haustür)",
    t3_w1_l: "Schnee ❄️", t3_w1_r: "mann ⛄",
    t3_w2_l: "Haus 🏠", t3_w2_r: "tür 🚪",
    t3_w3_l: "Apfel 🍎", t3_w3_r: "baum 🌳",
    t3_w4_l: "Bade 🛁", t3_w4_r: "zimmer 🚿",
    t3_q: "Wenn 'das Haus' und 'die Tür' zusammen 'Haustür' werden, welcher Artikel ist richtig?",
    t3_q_a: "die Haustür", t3_q_b: "das Haustür", t3_q_c: "der Haustür", t3_q_d: "ein Haustür",
  },
  en: {
    explorer_title: "Articles & Words",
    t1_title: "Der, Die, Das",
    t1_text: "In German, almost every noun has an article: 'der' (masculine), 'die' (feminine), and 'das' (neutral).",
    t1_b1: "der Hund 🐶 (blue)",
    t1_b2: "die Katze 🐱 (red)",
    t1_b3: "das Haus 🏠 (green)",
    t1_inst: "Sort the words into the correct bucket: der, die, or das?",
    t1_h1: "Hund and Apfel are 'der'.",
    t1_h2: "Katze and Sonne are 'die'. Haus and Auto are 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_apfel: "Apfel",
    t1_item_katze: "Katze", t1_item_sonne: "Sonne",
    t1_item_haus: "Haus", t1_item_auto: "Auto",
    t1_q: "Which article belongs to the word 'Auto'?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    t2_title: "Missing Letters",
    t2_text: "Oh no! Some letters flew away. Can you fix the words? Pay attention to the vowels (a, e, i, o, u)!",
    t2_b1: "H_nd needs a 'u' (Hund)",
    t2_b2: "K_tze needs an 'a' (Katze)",
    t2_b3: "Every word needs vowels!",
    t2_inst: "Match the word with the missing letter!",
    t2_h1: "H_nd becomes Hund. M_us becomes Maus.",
    t2_h2: "Br_t becomes Brot (o).",
    t2_l1: "H__nd 🐶", t2_r1: "u",
    t2_l2: "K__tze 🐱", t2_r2: "a",
    t2_l3: "Br__t 🍞", t2_r3: "o",
    t2_l4: "M__us 🐭", t2_r4: "a",
    t2_q: "Which letter is missing in 'Sch_le' (school)?",
    t2_q_a: "u", t2_q_b: "a", t2_q_c: "e", t2_q_d: "i",

    t3_title: "Compound Words",
    t3_text: "In German, we can snap words together like Lego bricks! 'Haus' and 'Tür' become 'Haustür' (front door). The new word takes the article of the last word.",
    t3_b1: "Schnee + Mann = Schneemann ⛄",
    t3_b2: "Apfel + Baum = Apfelbaum 🌳",
    t3_b3: "The last article wins!",
    t3_inst: "Build new words! Connect the matching parts.",
    t3_h1: "What goes with 'Schnee'? Mann! (Schneemann)",
    t3_h2: "What goes with 'Haus'? Tür! (Haustür)",
    t3_w1_l: "Schnee ❄️", t3_w1_r: "mann ⛄",
    t3_w2_l: "Haus 🏠", t3_w2_r: "tür 🚪",
    t3_w3_l: "Apfel 🍎", t3_w3_r: "baum 🌳",
    t3_w4_l: "Bade 🛁", t3_w4_r: "zimmer 🚿",
    t3_q: "If 'das Haus' and 'die Tür' make 'Haustür', which article is correct?",
    t3_q_a: "die Haustür", t3_q_b: "das Haustür", t3_q_c: "der Haustür", t3_q_d: "ein Haustür",
  },
  hu: {
    explorer_title: "Névelők és Szavak",
    t1_title: "Der, Die, Das",
    t1_text: "A németben majdnem minden főnévnek van egy névelője: 'der' (hímnem), 'die' (nőnem) és 'das' (semlegesnem). Ezeket a szóval együtt kell megtanulni!",
    t1_b1: "der Hund 🐶 (kék)",
    t1_b2: "die Katze 🐱 (piros)",
    t1_b3: "das Haus 🏠 (zöld)",
    t1_inst: "Húzd a szavakat a megfelelő kosárba: der, die vagy das?",
    t1_h1: "Hund és Apfel -> 'der'.",
    t1_h2: "Katze és Sonne -> 'die'. Haus és Auto -> 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_apfel: "Apfel",
    t1_item_katze: "Katze", t1_item_sonne: "Sonne",
    t1_item_haus: "Haus", t1_item_auto: "Auto",
    t1_q: "Milyen névelő tartozik az 'Auto' (autó) szóhoz?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    t2_title: "Hiányzó betűk",
    t2_text: "Jaj ne! Néhány betű elrepült. Meg tudod javítani a szavakat? Figyelj a magánhangzókra (a, e, i, o, u)!",
    t2_b1: "A H_nd-ba egy 'u' kell (Hund)",
    t2_b2: "A K_tze-be egy 'a' kell (Katze)",
    t2_b3: "Minden szóba kell magánhangzó!",
    t2_inst: "Párosítsd a csonka szót a hiányzó betűvel!",
    t2_h1: "A H_nd-ből Hund lesz. A M_us-ból Maus lesz.",
    t2_h2: "A Br_t-ből Brot (kenyér) lesz.",
    t2_l1: "H__nd 🐶", t2_r1: "u",
    t2_l2: "K__tze 🐱", t2_r2: "a",
    t2_l3: "Br__t 🍞", t2_r3: "o",
    t2_l4: "M__us 🐭", t2_r4: "a",
    t2_q: "Melyik betű hiányzik a 'Sch_le' (iskola) szóból?",
    t2_q_a: "u", t2_q_b: "a", t2_q_c: "e", t2_q_d: "i",

    t3_title: "Összetett szavak",
    t3_text: "A németben a szavakat úgy rakhatjuk össze, mint a legókockákat! A 'Haus' (ház) és a 'Tür' (ajtó) együtt 'Haustür' (bejárati ajtó). Az új szó mindig az utolsó szó névelőjét kapja meg.",
    t3_b1: "Schnee + Mann = Schneemann ⛄",
    t3_b2: "Apfel + Baum = Apfelbaum 🌳",
    t3_b3: "Mindig az utolsó névelő győz!",
    t3_inst: "Építs új szavakat! Kösd össze az összeillő darabokat.",
    t3_h1: "Mi illik a 'Schnee' (hó) szóhoz? A Mann (ember)! (Schneemann)",
    t3_h2: "Mi illik a 'Haus' (ház) szóhoz? A Tür (ajtó)! (Haustür)",
    t3_w1_l: "Schnee ❄️", t3_w1_r: "mann ⛄",
    t3_w2_l: "Haus 🏠", t3_w2_r: "tür 🚪",
    t3_w3_l: "Apfel 🍎", t3_w3_r: "baum 🌳",
    t3_w4_l: "Bade 🛁", t3_w4_r: "zimmer 🚿",
    t3_q: "Ha a 'das Haus' és a 'die Tür' összekapcsolódik (Haustür), mi lesz az új névelő?",
    t3_q_a: "die Haustür", t3_q_b: "das Haustür", t3_q_c: "der Haustür", t3_q_d: "ein Haustür",
  },
  ro: {
    explorer_title: "Articole și Cuvinte",
    t1_title: "Der, Die, Das",
    t1_text: "În limba germană, aproape fiecare substantiv are un articol: 'der' (masculin), 'die' (feminin) și 'das' (neutru). Acestea trebuie învățate împreună cu cuvântul!",
    t1_b1: "der Hund 🐶 (albastru)",
    t1_b2: "die Katze 🐱 (roșu)",
    t1_b3: "das Haus 🏠 (verde)",
    t1_inst: "Sortează cuvintele în coșul corect: der, die sau das?",
    t1_h1: "Hund și Apfel sunt 'der'.",
    t1_h2: "Katze și Sonne sunt 'die'. Haus și Auto sunt 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_apfel: "Apfel",
    t1_item_katze: "Katze", t1_item_sonne: "Sonne",
    t1_item_haus: "Haus", t1_item_auto: "Auto",
    t1_q: "Ce articol aparține cuvântului 'Auto'?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    t2_title: "Litere lipsă",
    t2_text: "Oh nu! Câteva litere au zburat. Poți repara cuvintele? Fii atent la vocale (a, e, i, o, u)!",
    t2_b1: "H_nd are nevoie de un 'u' (Hund)",
    t2_b2: "K_tze are nevoie de un 'a' (Katze)",
    t2_b3: "Fiecare cuvânt are nevoie de vocale!",
    t2_inst: "Potrivește cuvântul incomplet cu litera lipsă!",
    t2_h1: "H_nd devine Hund. M_us devine Maus.",
    t2_h2: "Br_t devine Brot (pâine).",
    t2_l1: "H__nd 🐶", t2_r1: "u",
    t2_l2: "K__tze 🐱", t2_r2: "a",
    t2_l3: "Br__t 🍞", t2_r3: "o",
    t2_l4: "M__us 🐭", t2_r4: "a",
    t2_q: "Ce literă lipsește din 'Sch_le' (școală)?",
    t2_q_a: "u", t2_q_b: "a", t2_q_c: "e", t2_q_d: "i",

    t3_title: "Cuvinte compuse",
    t3_text: "În germană, putem îmbina cuvinte ca pe niște piese Lego! 'Haus' și 'Tür' devin 'Haustür' (ușa de la intrare). Noul cuvânt preia articolul ultimului cuvânt.",
    t3_b1: "Schnee + Mann = Schneemann ⛄",
    t3_b2: "Apfel + Baum = Apfelbaum 🌳",
    t3_b3: "Ultimul articol câștigă!",
    t3_inst: "Construiește cuvinte noi! Conectează părțile care se potrivesc.",
    t3_h1: "Ce se potrivește cu 'Schnee'? Mann! (Schneemann)",
    t3_h2: "Ce se potrivește cu 'Haus'? Tür! (Haustür)",
    t3_w1_l: "Schnee ❄️", t3_w1_r: "mann ⛄",
    t3_w2_l: "Haus 🏠", t3_w2_r: "tür 🚪",
    t3_w3_l: "Apfel 🍎", t3_w3_r: "baum 🌳",
    t3_w4_l: "Bade 🛁", t3_w4_r: "zimmer 🚿",
    t3_q: "Dacă unim 'das Haus' și 'die Tür' (Haustür), care este articolul corect?",
    t3_q_a: "die Haustür", t3_q_b: "das Haustür", t3_q_c: "der Haustür", t3_q_d: "ein Haustür",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: der/die/das (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "der", label: "t1_bucket_der" },
        { id: "die", label: "t1_bucket_die" },
        { id: "das", label: "t1_bucket_das" },
      ],
      items: [
        { text: "t1_item_hund", bucketId: "der" },
        { text: "t1_item_katze", bucketId: "die" },
        { text: "t1_item_haus", bucketId: "das" },
        { text: "t1_item_apfel", bucketId: "der" },
        { text: "t1_item_sonne", bucketId: "die" },
        { text: "t1_item_auto", bucketId: "das" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // das
    },
  },
  // ── Topic 2: Missing letters (match-pairs) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // H__nd -> u
        { left: "t2_l2", right: "t2_r2" }, // K__tze -> a
        { left: "t2_l3", right: "t2_r3" }, // Br__t -> o
        { left: "t2_l4", right: "t2_r4" }, // M__us -> a
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // u
    },
  },
  // ── Topic 3: Compound words (match-pairs) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_w1_l", right: "t3_w1_r" }, // Schnee -> mann
        { left: "t3_w2_l", right: "t3_w2_r" }, // Haus -> tür
        { left: "t3_w3_l", right: "t3_w3_r" }, // Apfel -> baum
        { left: "t3_w4_l", right: "t3_w4_r" }, // Bade -> zimmer
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // die Haustür
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📚",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ArticleExplorerK1 = memo(function ArticleExplorerK1({
  color = "#10B981",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_articles" color={color} lang={lang} onDone={onDone} />;
});

export default ArticleExplorerK1;
