// lib/explorerPools/deutschK2.ts
// ═══════════════════════════════════════════════════════════════════════════════
// ASTRODEUTSCH K2 — Pool data for all 9 islands (Klasse 2)
// Pure TypeScript — no JSX here!
// LANGUAGE: nur Deutsch (de) — kein en/hu/ro!
// POOL SIZE: 7-10 topics per island
// DIFFICULTY: easy / medium / hard
//
// ── SVG TYPES (TopicSvgRenderer kezeli automatikusan) ──────────────────────
//
// { type: "letter-circles", letters: ["A","B"], color: "#FF2D78" }
//   → Körök betűkkel. MAX 1-2 karakter/kör! Teljes szavak NEM illenek bele.
//   → Jó: magánhangzók, mássalhangzók, rövid tagok (ck, tz, sp)
//
// { type: "two-groups", left: { items: ["der","die"], bg: "#FEE2E2", border: "#EF4444" },
//                       right: { items: ["das"], bg: "#DBEAFE", border: "#3B82F6" } }
//   → Két doboz osztályozáshoz. items[]: max 4 elem/oldal.
//   → Jó: Nomen/Verb, Groß/Klein, Singular/Plural
//
// { type: "letter-pairs", pairs: [["ck","k"], ["tz","z"]], color: "#7C3AED" }
//   → Párokat mutat (bal: nagy/fontos, jobb: kisebb).
//   → Jó: helyesírási párok, betűkapcsolatok
//
// { type: "text-bubbles", items: [{ text: "der", emoji: "🔵", color: "#1E40AF", bg: "#DBEAFE" }] }
//   → Színes buborékok szöveggel + opcionális emoji.
//   → Jó: névelők (der/die/das), mondatfajták (?, !, .)
//   → text: max 8-10 karakter!
//
// { type: "icon-grid", items: [{ emoji: "🐶", label: "Hund" }] }
//   → Emoji rács opcionális szöveggel. Max 6 elem.
//   → Jó: szókincs, szócsaládok, képes feladatok
//
// { type: "rhyme-pair", word1: "Maus", word2: "Haus", emoji1: "🐭", emoji2: "🏠", color: "#FFD700" }
//   → Két rímszó egymás mellett.
//
// { type: "word-display", word: "Schule", highlightChars: ["S"], color: "#FF6B9D" }
//   → Egy szó megjelenítve, opcionális betűkiemeléssel (pl. nagy kezdőbetű).
//
// { type: "compound-word", word1: "Schul", word2: "tasche", result: "Schultasche", color: "#10B981" }
//   → Összetett szó: szó1 + szó2 = eredmény
//
// { type: "sentence-display", words: ["Die","Katze","schläft","."], highlightIndices: [3], color: "#B44DFF" }
//   → Mondat szavakra bontva, opcionális szókiemeléssel.
//
// { type: "simple-icon", icon: "🏆", title: "Große Prüfung!", bg: "#FEF3C7" }
//   → Nagy emoji + opcionális cím. Jó: review, záróvizsga, intro képernyő.
//
// ── INTERACTIVE TYPES — K2 AJÁNLOTT KOMBINÁCIÓ ────────────────────────────────
//
// K2-ben (7-8 évesek) ezeket használd — variáld témánként!
//
// highlight-text: szavak/tokenek kiemelése (kattintással)
//   → Jó: Nomen keresés mondatban, igék megjelölése, helyesírás
//   tokens: ["t_w1","t_w2",...] — label key-ek
//   correctIndices: [0, 2] — melyik indexek helyesek
//
// drag-to-bucket: elemek húzása vödrökbe
//   → Jó: der/die/das szétválasztás, Nomen/Verb/Adjektiv, nagy/kisbetű
//   buckets: [{ id: "noun", label: "t_b_noun" }, { id: "verb", label: "t_b_verb" }]
//   items: [{ text: "t_i1", bucketId: "noun" }, ...]
//
// match-pairs: bal-jobb párosítás
//   → Jó: szó↔kép, singular↔plural, Infinitiv↔konjugiert
//   pairs: [{ left: "t_l1", right: "t_r1" }, ...]
//
// gap-fill: mondatkiegészítés (4 opció) ← ÚJ K2-BEN!
//   → Jó: névelő-kiegészítés (Der ___ läuft.), írásjel, ragozás
//   sentence: "t_sent" — label key, a mondatban "___" a lyuk
//   choices: ["t_c1","t_c2","t_c3","t_c4"]
//   correctIndex: 0
//
// sentence-build: szavak helyes sorrendbe rakása ← ÚJ K2-BEN!
//   → Jó: mondatszerkezet, Verb an zweiter Stelle szabály
//   fragments: ["t_f1","t_f2","t_f3"] — helyes sorrendben!
//
// word-order: szavak drag-drop sorrendbe rakása ← ÚJ K2-BEN!
//   → Jó: összetett szavak, mondatrészek
//   words: ["t_w1","t_w2","t_w3"] — label key-ek
//   correctOrder: [2, 0, 1] — melyik sorrend helyes
//
// TIPP: Egy island 7-10 topicjában legalább 3 különböző interactive type legyen!
//
// ── QUIZ MEZŐ — VEGYES MÓD (generator ajánlott!) ─────────────────────────────
//
// A quiz mező kétféleképpen írható:
//
// 1) GENERATOR (ajánlott — nem kell kézileg kérdéseket írni!):
//    quiz: { generate: "artikel_k2" }
//    → minden session-induláskor új véletlenszerű kérdést kap a generátortól
//
//    Elérhető K2 generátorok (deutschGenerators.ts → GENERATORS map):
//      "artikel_k2"       → der/die/das felismerés (Hund, Katze, Haus...)
//      "nomen_k2"         → Nomen felismerés mondatban
//      "verben_k2"        → Verb felismerés mondatban
//      "zahlen_k2"        → Számok (1-100)
//      "farben_k2"        → Színek
//      "zeit_k2"          → Napszakok, napok, évszakok
//      "berufe_k2"        → Berufe (Lehrer, Arzt...)
//      "gegensaetze_k2"   → Gegensätze (groß↔klein, schnell↔langsam)
//      "plural"           → Singular→Plural
//      "adjektive_gegenteil" → Adjektiv ellentétje
//
//    Elérhető K1 generátorok (K2-ben is használható könnyű témákhoz):
//      "artikel_k1"       → egyszerűbb artikel kérdések
//      "silben"           → szótagolás
//      "satzzeichen_k1"   → írásjelek (. ? !)
//      "tiere_k1"         → állatok szókincse
//      "farben_k2"        → színek
//
// 2) KÉZI (ha nincs megfelelő generátor a témához):
//    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
//    → a label key-eket a LABELS objektumban kell definiálni
//
// SZABÁLY: Használj generátort ahol csak lehet! Kézi quiz csak akkor kell,
//          ha a téma nagyon specifikus (pl. összetett szavak, helyesírási szabályok).
//
// ═══════════════════════════════════════════════════════════════════════════════

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — NomenArtikelInsel
// Thema: Nomen erkennen, der/die/das, Groß-/Kleinschreibung
// SVG tippek: icon-grid (képes főnevek), text-bubbles (der/die/das),
//             two-groups (Nomen/kein Nomen), word-display (nagy kezdőbetű)
// ─────────────────────────────────────────────────────────────────────────────

// export const NOMEN_LABELS: Record<string, Record<string, string>> = {
//   de: {
//     explorer_title: "Nomen & Artikel",
//     t1_title: "Was ist ein Nomen?",
//     t1_text: "Nomen sind Wörter für Dinge, Tiere, Menschen und Orte. Sie schreiben wir immer GROSS! Der Hund, die Katze, das Haus.",
//     t1_b1: "Nomen = Namen für Dinge, Tiere, Menschen",
//     t1_b2: "Nomen schreiben wir immer GROSS!",
//     t1_b3: "Jedes Nomen hat einen Artikel: der, die oder das",
//     t1_inst: "Finde alle Nomen!",
//     t1_h1: "Nomen sind immer großgeschrieben.",
//     t1_h2: "Hund und Katze sind Nomen. schläft und groß sind es nicht.",
//     t1_w1: "Hund", t1_w2: "schläft", t1_w3: "Katze", t1_w4: "groß",
//     t1_q: "Welches Wort ist ein Nomen?",
//     t1_qa: "Baum", t1_qb: "laufen", t1_qc: "klein", t1_qd: "und",
//
//     t2_title: "Der, die oder das?",
//     t2_text: "Jedes Nomen hat einen bestimmten Artikel: der (männlich), die (weiblich) oder das (sächlich). Diese muss man lernen!",
//     t2_b1: "der → männlich (Maskulinum)",
//     t2_b2: "die → weiblich (Femininum)",
//     t2_b3: "das → sächlich (Neutrum)",
//     t2_inst: "Sortiere: der, die oder das?",
//     t2_h1: "Drei Artikel: der, die, das.",
//     t2_h2: "der Hund, die Katze, das Haus",
//     t2_bd: "der 🔵", t2_bdi: "die 🔴", t2_bda: "das 🟢",
//     t2_i1: "Hund", t2_i2: "Katze", t2_i3: "Haus", t2_i4: "Baum", t2_i5: "Blume",
//     // Helyes bucketId-k: "der","die","das","der","die"
//     t2_q: "Welcher Artikel passt zu 'Sonne'?",
//     t2_qa: "die", t2_qb: "der", t2_qc: "das", t2_qd: "ein",
//     // ... t3-t7 ...
//   },
// };
//
// export const NOMEN_POOL: PoolTopicDef[] = [
//   {
//     difficulty: "easy",
//     infoTitle: "t1_title",
//     infoText: "t1_text",
//     svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "der Hund" }, { emoji: "🐱", label: "die Katze" }, { emoji: "🏠", label: "das Haus" }] },
//     bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
//     interactive: {
//       type: "highlight-text",
//       tokens: ["t1_w1","t1_w2","t1_w3","t1_w4"],
//       correctIndices: [0, 2],  // Hund, Katze sind Nomen
//       instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
//     },
//     quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
//   },
//   {
//     difficulty: "easy",
//     infoTitle: "t2_title",
//     infoText: "t2_text",
//     svg: { type: "text-bubbles", items: [
//       { text: "der", emoji: "🔵", color: "#1E40AF", bg: "#DBEAFE" },
//       { text: "die", emoji: "🔴", color: "#991B1B", bg: "#FEE2E2" },
//       { text: "das", emoji: "🟢", color: "#065F46", bg: "#D1FAE5" },
//     ]},
//     bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
//     interactive: {
//       type: "drag-to-bucket",
//       buckets: [{ id: "der", label: "t2_bd" }, { id: "die", label: "t2_bdi" }, { id: "das", label: "t2_bda" }],
//       items: [
//         { text: "t2_i1", bucketId: "der" },   // Hund
//         { text: "t2_i2", bucketId: "die" },   // Katze
//         { text: "t2_i3", bucketId: "das" },   // Haus
//         { text: "t2_i4", bucketId: "der" },   // Baum
//         { text: "t2_i5", bucketId: "die" },   // Blume
//       ],
//       instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
//     },
//     quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
//   },
//   // ... t3-t7 topics...
// ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Verbeninsel
// Thema: Verben erkennen, Grundform (Infinitiv), Konjugation ich/du/er
// SVG tippek: icon-grid (Aktionen mit Emoji), two-groups (Verb/kein Verb),
//             text-bubbles (ich laufe / du läufst / er läuft)
// ─────────────────────────────────────────────────────────────────────────────

// export const VERB_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const VERB_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Adjektivinsel
// Thema: Adjektive erkennen, Gegensätze, Steigerung (groß→größer→am größten)
// SVG tippek: text-bubbles (groß/klein, schnell/langsam),
//             icon-grid (🔴 rot, 🔵 blau), two-groups (Adj/kein Adj)
// ─────────────────────────────────────────────────────────────────────────────

// export const ADJEKTIV_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const ADJEKTIV_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Satzarteninsel
// Thema: Aussagesatz (.), Fragesatz (?), Ausrufesatz (!)
// SVG tippek: text-bubbles (. ? ! buborékok),
//             sentence-display (teljes mondatok kiemelve)
// ─────────────────────────────────────────────────────────────────────────────

// export const SATZART_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const SATZART_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Großschreibungsinsel
// Thema: Nomen groß, Satzanfang groß, Adjektive/Verben klein
// SVG tippek: word-display (highlightChars: ["S"] — nagy betű kiemelve),
//             two-groups (Groß/Klein), letter-circles (max 1-2 karakter: "A","B")
// ─────────────────────────────────────────────────────────────────────────────

// export const GROSS_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const GROSS_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Rechtschreibung1insel (ck, tz, sp, st)
// Thema: Schreibe ich ck oder k? tz oder z? sp/st am Wortanfang
// SVG tippek: letter-pairs (["ck","k"], ["tz","z"]),
//             text-bubbles (["sp","st"] buborékok),
//             two-groups (ck-Wörter / k-Wörter)
// ─────────────────────────────────────────────────────────────────────────────

// export const RECHT1_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const RECHT1_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Rechtschreibung2insel (ie, ei, eu, äu + Doppelkonsonanten)
// Thema: ie vs. ei, eu vs. äu, Doppelkonsonanten (ll, mm, nn, ss, tt)
// SVG tippek: letter-pairs (["ie","ei"], ["eu","äu"]),
//             two-groups (ie-Wörter / ei-Wörter),
//             text-bubbles (["ll","mm","nn"] buborékok)
// ─────────────────────────────────────────────────────────────────────────────

// export const RECHT2_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const RECHT2_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Wortfelderinsel
// Thema: Wortfelder (Oberbegriffe: Tiere, Möbel, Essen), Wortfamilien (backen→Bäcker)
// SVG tippek: icon-grid (🐶🐱🐦 = Tiere), compound-word (Back+ofen=Backofen),
//             two-groups (Obst / Gemüse)
// ─────────────────────────────────────────────────────────────────────────────

// export const WORTFELD_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const WORTFELD_POOL: PoolTopicDef[] = [ ... ];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K2 (Final Review)
// Thema: Wiederholung aller K2-Themen (Nomen, Verb, Adjektiv, Rechtschreibung)
// SVG tippek: simple-icon (🏆), icon-grid (mix), text-bubbles (mix)
// ─────────────────────────────────────────────────────────────────────────────

// export const EXAM2_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const EXAM2_POOL: PoolTopicDef[] = [ ... ];
