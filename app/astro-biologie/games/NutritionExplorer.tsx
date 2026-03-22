"use client";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion } from "./ExplorerEngine";
import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS (4 languages)
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: ExplorerDef["labels"] = {
  en: {
    // Round 1: Nutrient Groups
    r1_title: "Nutrient Groups",
    r1_text: "Our body needs different nutrients for energy, growth, and health. Each has a special job!",
    r1_carbs: "Carbohydrates",
    r1_carbs_info: "Give you ENERGY 💪",
    r1_protein: "Proteins",
    r1_protein_info: "Build and repair muscles 🦵",
    r1_fats: "Fats",
    r1_fats_info: "Store energy and warmth 🔥",
    r1_vitamins: "Vitamins & Minerals",
    r1_vitamins_info: "Keep you healthy and strong ✨",

    // Round 2: Food Pyramid
    r2_title: "The Food Pyramid",
    r2_text: "A healthy diet has the right amounts of each food group. More vegetables and whole grains at the base!",
    r2_grains: "Grains",
    r2_vegetables: "Vegetables",
    r2_fruits: "Fruits",
    r2_protein_group: "Protein",
    r2_dairy: "Dairy",

    // Round 3: Digestive Tract
    r3_title: "The Digestive Journey",
    r3_text: "Food travels through your body in stages. Each organ does an important job in breaking down and absorbing nutrients.",
    r3_mouth: "Mouth",
    r3_mouth_info: "Chewing + saliva",
    r3_esophagus: "Esophagus",
    r3_esophagus_info: "Sliding down",
    r3_stomach: "Stomach",
    r3_stomach_info: "Acid breaks down food",
    r3_small_intestine: "Small Intestine",
    r3_small_intestine_info: "Absorbs nutrients",
    r3_large_intestine: "Large Intestine",
    r3_large_intestine_info: "Absorbs water",

    // Round 4: Water & Habits
    r4_title: "Water & Healthy Habits",
    r4_text: "Water is essential for digestion, energy, and all body functions. Healthy habits support good nutrition.",
    r4_water: "Water",
    r4_water_info: "8 glasses daily = healthy!",
    r4_slow_eating: "Eat Slowly",
    r4_slow_eating_info: "Better digestion & feeling full",
    r4_balance: "Balanced Meals",
    r4_balance_info: "All food groups included",
    r4_sleep: "Good Sleep",
    r4_sleep_info: "Helps metabolism & healing",

    // Round 1: Nutrient Groups — Question
    r1_q: "Which nutrient gives you ENERGY?",
    r1_q_a: "Carbohydrates 🍞",
    r1_q_b: "Proteins 🥩",
    r1_q_c: "Water 💧",
    r1_q_d: "Minerals 🧂",

    // Round 2: Food Pyramid — Question
    r2_q: "Which food group should be at the BASE of the pyramid?",
    r2_q_a: "Fruits",
    r2_q_b: "Grains",
    r2_q_c: "Proteins",
    r2_q_d: "Dairy",

    // Round 3: Digestive Tract — Question
    r3_q: "Where does digestion start?",
    r3_q_a: "Stomach 🤢",
    r3_q_b: "Mouth 👄",
    r3_q_c: "Small intestine 🌀",
    r3_q_d: "Esophagus 🔽",

    // Round 4: Water & Habits — Question
    r4_q: "How many glasses of water should you drink daily?",
    r4_q_a: "2-3 glasses 💧",
    r4_q_b: "5-6 glasses 💧",
    r4_q_c: "8+ glasses 💧",
    r4_q_d: "As much as you want",

    // Round 5: Quiz
    r5_title: "Nutrition Quiz",
    r5_text: "Test your knowledge about nutrients, digestion, and healthy eating!",

    // Questions
    q_r5_q1: "Which organ absorbs MOST nutrients?",
    q_r5_q1_a: "Mouth 👄",
    q_r5_q1_b: "Stomach 🤢",
    q_r5_q1_c: "Small intestine 🌀",
    q_r5_q1_d: "Large intestine 📦",

    q_r5_q2: "Why should you chew slowly?",
    q_r5_q2_a: "To save time",
    q_r5_q2_b: "Better digestion & eat less 🍽️",
    q_r5_q2_c: "It tastes better",
    q_r5_q2_d: "No real reason",

    q_r5_q3: "What is the most important habit for good nutrition?",
    q_r5_q3_a: "Eating fast",
    q_r5_q3_b: "Eating all the same food",
    q_r5_q3_c: "Eating balanced meals with all food groups",
    q_r5_q3_d: "Not drinking water",
  },

  de: {
    // Round 1: Nutrient Groups
    r1_title: "Nährstoffgruppen",
    r1_text: "Dein Körper braucht verschiedene Nährstoffe für Energie, Wachstum und Gesundheit. Jeder hat eine spezielle Aufgabe!",
    r1_carbs: "Kohlenhydrate",
    r1_carbs_info: "Geben dir ENERGIE 💪",
    r1_protein: "Proteine",
    r1_protein_info: "Bauen Muskeln auf 🦵",
    r1_fats: "Fette",
    r1_fats_info: "Speichern Energie und Wärme 🔥",
    r1_vitamins: "Vitamine & Mineralien",
    r1_vitamins_info: "Halten dich gesund und stark ✨",

    // Round 2: Food Pyramid
    r2_title: "Die Lebensmittelpyramide",
    r2_text: "Eine gesunde Ernährung hat die richtige Menge jeder Lebensmittelgruppe. Mehr Gemüse und Vollkornprodukte an der Basis!",
    r2_grains: "Getreide",
    r2_vegetables: "Gemüse",
    r2_fruits: "Obst",
    r2_protein_group: "Protein",
    r2_dairy: "Milchprodukte",

    // Round 3: Digestive Tract
    r3_title: "Die Verdauungsreise",
    r3_text: "Essen reist in Etappen durch deinen Körper. Jedes Organ hat eine wichtige Aufgabe beim Abbau und Aufnahme von Nährstoffen.",
    r3_mouth: "Mund",
    r3_mouth_info: "Kauen + Speichel",
    r3_esophagus: "Speiseröhre",
    r3_esophagus_info: "Rutscht runter",
    r3_stomach: "Magen",
    r3_stomach_info: "Säure baut Essen auf",
    r3_small_intestine: "Dünndarm",
    r3_small_intestine_info: "Nimmt Nährstoffe auf",
    r3_large_intestine: "Dickdarm",
    r3_large_intestine_info: "Nimmt Wasser auf",

    // Round 4: Water & Habits
    r4_title: "Wasser & gesunde Gewohnheiten",
    r4_text: "Wasser ist wichtig für Verdauung, Energie und alle Körperfunktionen. Gesunde Gewohnheiten unterstützen gute Ernährung.",
    r4_water: "Wasser",
    r4_water_info: "8 Gläser täglich = gesund!",
    r4_slow_eating: "Langsam essen",
    r4_slow_eating_info: "Bessere Verdauung & Sättigung",
    r4_balance: "Ausgewogene Mahlzeiten",
    r4_balance_info: "Alle Lebensmittelgruppen",
    r4_sleep: "Guter Schlaf",
    r4_sleep_info: "Hilft Stoffwechsel & Heilung",

    // Round 1: Nährstoffgruppen — Frage
    r1_q: "Welcher Nährstoff gibt dir ENERGIE?",
    r1_q_a: "Kohlenhydrate 🍞",
    r1_q_b: "Proteine 🥩",
    r1_q_c: "Wasser 💧",
    r1_q_d: "Mineralien 🧂",

    // Round 2: Lebensmittelpyramide — Frage
    r2_q: "Welche Lebensmittelgruppe sollte an der BASIS der Pyramide sein?",
    r2_q_a: "Obst",
    r2_q_b: "Getreide",
    r2_q_c: "Protein",
    r2_q_d: "Milchprodukte",

    // Round 3: Verdauungstrakt — Frage
    r3_q: "Wo beginnt die Verdauung?",
    r3_q_a: "Magen 🤢",
    r3_q_b: "Mund 👄",
    r3_q_c: "Dünndarm 🌀",
    r3_q_d: "Speiseröhre 🔽",

    // Round 4: Wasser & Gewohnheiten — Frage
    r4_q: "Wie viele Gläser Wasser solltest du täglich trinken?",
    r4_q_a: "2-3 Gläser 💧",
    r4_q_b: "5-6 Gläser 💧",
    r4_q_c: "8+ Gläser 💧",
    r4_q_d: "So viel wie du willst",

    // Round 5: Quiz
    r5_title: "Ernährungsquiz",
    r5_text: "Teste dein Wissen über Nährstoffe, Verdauung und gesundes Essen!",

    // Questions
    q_r5_q1: "Welches Organ nimmt die MEISTEN Nährstoffe auf?",
    q_r5_q1_a: "Mund 👄",
    q_r5_q1_b: "Magen 🤢",
    q_r5_q1_c: "Dünndarm 🌀",
    q_r5_q1_d: "Dickdarm 📦",

    q_r5_q2: "Warum solltest du langsam kauen?",
    q_r5_q2_a: "Um Zeit zu sparen",
    q_r5_q2_b: "Bessere Verdauung & weniger essen 🍽️",
    q_r5_q2_c: "Schmeckt besser",
    q_r5_q2_d: "Kein besonderer Grund",

    q_r5_q3: "Was ist die wichtigste Gewohnheit für gute Ernährung?",
    q_r5_q3_a: "Schnell essen",
    q_r5_q3_b: "Immer das gleiche Essen",
    q_r5_q3_c: "Ausgewogene Mahlzeiten mit allen Lebensmittelgruppen",
    q_r5_q3_d: "Kein Wasser trinken",
  },

  hu: {
    // Round 1: Nutrient Groups
    r1_title: "Tápanyag csoportok",
    r1_text: "A testednek különböző tápanyagokra van szüksége az energiához, növekedéshez és egészséghez. Mindegyiknek egy speciális feladata van!",
    r1_carbs: "Szénhidrátok",
    r1_carbs_info: "Adnak neked ENERGIÁT 💪",
    r1_protein: "Fehérjék",
    r1_protein_info: "Felépítik az izomzatot 🦵",
    r1_fats: "Zsírok",
    r1_fats_info: "Tárolják az energiát és a meleget 🔥",
    r1_vitamins: "Vitaminok & Ásványi anyagok",
    r1_vitamins_info: "Tartanak erősen és egészségesen ✨",

    // Round 2: Food Pyramid
    r2_title: "Az élelmiszer piramis",
    r2_text: "Az egészséges táplálkozásnak az egyes élelmiszer-csoportokból megfelelő mennyisége van. Több zöldség és teljes kiőrlésű gabona az alapnál!",
    r2_grains: "Gabona",
    r2_vegetables: "Zöldségek",
    r2_fruits: "Gyümölcsök",
    r2_protein_group: "Fehérje",
    r2_dairy: "Tejtermékek",

    // Round 3: Digestive Tract
    r3_title: "Az emésztési utazás",
    r3_text: "Az étel szakaszokban halad végig a tested. Minden szerv fontos szerepet játszik a lebontásban és a tápanyagok felszívódásában.",
    r3_mouth: "Szájüregből",
    r3_mouth_info: "Rágás + nyál",
    r3_esophagus: "Nyelőcső",
    r3_esophagus_info: "Lecsúszik",
    r3_stomach: "Gyomor",
    r3_stomach_info: "Sav lebontja az ételt",
    r3_small_intestine: "Vékonybél",
    r3_small_intestine_info: "Felszívja a tápanyagokat",
    r3_large_intestine: "Vastagbél",
    r3_large_intestine_info: "Felszívja a vizet",

    // Round 4: Water & Habits
    r4_title: "Víz & egészséges szokások",
    r4_text: "A víz nélkülözhetetlen az emésztéshez, az energiához és az összes testfunkcióhoz. Az egészséges szokások támogatják a helyes táplálkozást.",
    r4_water: "Víz",
    r4_water_info: "Naponta 8 pohár = egészséges!",
    r4_slow_eating: "Lassú étkezés",
    r4_slow_eating_info: "Jobb emésztés & jóllakottság",
    r4_balance: "Kiegyensúlyozott étkezés",
    r4_balance_info: "Minden élelmiszer-csoport",
    r4_sleep: "Jó alvás",
    r4_sleep_info: "Segíti az anyagcserét & gyógyulást",

    // Round 1: Tápanyag csoportok — Kérdés
    r1_q: "Melyik tápanyag ad neked ENERGIÁT?",
    r1_q_a: "Szénhidrátok 🍞",
    r1_q_b: "Fehérjék 🥩",
    r1_q_c: "Víz 💧",
    r1_q_d: "Ásványi anyagok 🧂",

    // Round 2: Élelmiszer piramis — Kérdés
    r2_q: "Melyik élelmiszer-csoport kellene az ALP az piramis?",
    r2_q_a: "Gyümölcsök",
    r2_q_b: "Gabona",
    r2_q_c: "Fehérje",
    r2_q_d: "Tejtermékek",

    // Round 3: Emésztési nyomvonal — Kérdés
    r3_q: "Hol kezdődik az emésztés?",
    r3_q_a: "Gyomor 🤢",
    r3_q_b: "Szájüregből 👄",
    r3_q_c: "Vékonybél 🌀",
    r3_q_d: "Nyelőcső 🔽",

    // Round 4: Víz & szokások — Kérdés
    r4_q: "Hány pohár vizet kellene naponta inni?",
    r4_q_a: "2-3 pohár 💧",
    r4_q_b: "5-6 pohár 💧",
    r4_q_c: "8+ pohár 💧",
    r4_q_d: "Mennyit csak akarsz",

    // Round 5: Quiz
    r5_title: "Táplálkozási kvíz",
    r5_text: "Teszteld tudásodat a tápanyagokról, az emésztésről és az egészséges étkezésről!",

    // Questions
    q_r5_q1: "Melyik szerv szívja fel a LEGTÖBB tápanyagot?",
    q_r5_q1_a: "Szájüregből 👄",
    q_r5_q1_b: "Gyomor 🤢",
    q_r5_q1_c: "Vékonybél 🌀",
    q_r5_q1_d: "Vastagbél 📦",

    q_r5_q2: "Miért kellene lassan rágni?",
    q_r5_q2_a: "Hogy időt takarítsd meg",
    q_r5_q2_b: "Jobb emésztés & kevesebbet ess 🍽️",
    q_r5_q2_c: "Jobban ízlik",
    q_r5_q2_d: "Nincs különös ok",

    q_r5_q3: "Mi a legfontosabb szokás a jó táplálkozáshoz?",
    q_r5_q3_a: "Gyorsan enni",
    q_r5_q3_b: "Mindig ugyanazt az ételt enni",
    q_r5_q3_c: "Kiegyensúlyozott ételek az összes élelmiszer-csoporttal",
    q_r5_q3_d: "Nem inni vizet",
  },

  ro: {
    // Round 1: Nutrient Groups
    r1_title: "Grupuri de nutrienți",
    r1_text: "Corpul tău are nevoie de diferiți nutrienți pentru energie, creștere și sănătate. Fiecare are o sarcină specială!",
    r1_carbs: "Carbohidrați",
    r1_carbs_info: "Îți dau ENERGIE 💪",
    r1_protein: "Proteine",
    r1_protein_info: "Construiesc mușchii 🦵",
    r1_fats: "Grăsimi",
    r1_fats_info: "Stochează energie și căldură 🔥",
    r1_vitamins: "Vitamine & Minerale",
    r1_vitamins_info: "Te ține sănătos și puternic ✨",

    // Round 2: Food Pyramid
    r2_title: "Piramida alimentară",
    r2_text: "O dietă sănătoasă are cantitatea potrivită din fiecare grup alimentar. Mai mult legume și cereale integrale la bază!",
    r2_grains: "Cereale",
    r2_vegetables: "Legume",
    r2_fruits: "Fructe",
    r2_protein_group: "Proteină",
    r2_dairy: "Produse lactate",

    // Round 3: Digestive Tract
    r3_title: "Călătoria digestivă",
    r3_text: "Mâncarea parcurge corpul tău în etape. Fiecare organ joacă un rol important în descompunerea și absorbția nutrienților.",
    r3_mouth: "Gură",
    r3_mouth_info: "Mestecarea + salivă",
    r3_esophagus: "Esofag",
    r3_esophagus_info: "Se coboară",
    r3_stomach: "Stomac",
    r3_stomach_info: "Acidul descompune mâncarea",
    r3_small_intestine: "Intestin subțire",
    r3_small_intestine_info: "Absoarbe nutrienții",
    r3_large_intestine: "Intestin gros",
    r3_large_intestine_info: "Absoarbe apa",

    // Round 4: Water & Habits
    r4_title: "Apă & obiceiuri sănătoase",
    r4_text: "Apa este esențială pentru digestie, energie și toate funcțiile corpului. Obiceiurile sănătoase susțin nutriția bună.",
    r4_water: "Apă",
    r4_water_info: "8 pahare zilnic = sănătos!",
    r4_slow_eating: "Mâncare lentă",
    r4_slow_eating_info: "Digestie mai bună & sățietate",
    r4_balance: "Mese echilibrate",
    r4_balance_info: "Toate grupurile alimentare",
    r4_sleep: "Somn bun",
    r4_sleep_info: "Ajută metabolismul & vindecare",

    // Round 1: Grupuri de nutrienți — Întrebare
    r1_q: "Care nutrient îți dă ENERGIE?",
    r1_q_a: "Carbohidrați 🍞",
    r1_q_b: "Proteine 🥩",
    r1_q_c: "Apă 💧",
    r1_q_d: "Minerale 🧂",

    // Round 2: Piramida alimentară — Întrebare
    r2_q: "Care grup alimentar ar trebui să fie la BAZĂ piramidei?",
    r2_q_a: "Fructe",
    r2_q_b: "Cereale",
    r2_q_c: "Proteină",
    r2_q_d: "Produse lactate",

    // Round 3: Tract digestiv — Întrebare
    r3_q: "Unde începe digestia?",
    r3_q_a: "Stomac 🤢",
    r3_q_b: "Gură 👄",
    r3_q_c: "Intestin subțire 🌀",
    r3_q_d: "Esofag 🔽",

    // Round 4: Apă & obiceiuri — Întrebare
    r4_q: "Câte pahare de apă ar trebui să bei zilnic?",
    r4_q_a: "2-3 pahare 💧",
    r4_q_b: "5-6 pahare 💧",
    r4_q_c: "8+ pahare 💧",
    r4_q_d: "Cât vrei tu",

    // Round 5: Quiz
    r5_title: "Chestionar nutriție",
    r5_text: "Testează-ți cunoștințele despre nutrienți, digestie și mâncare sănătoasă!",

    // Questions
    q_r5_q1: "Care organ absoarbe CEI MAI MULȚI nutrienți?",
    q_r5_q1_a: "Gură 👄",
    q_r5_q1_b: "Stomac 🤢",
    q_r5_q1_c: "Intestin subțire 🌀",
    q_r5_q1_d: "Intestin gros 📦",

    q_r5_q2: "De ce ar trebui să mesteci lent?",
    q_r5_q2_a: "Pentru a economisi timp",
    q_r5_q2_b: "Digestie mai bună & mâncă mai puțin 🍽️",
    q_r5_q2_c: "Gustă mai bine",
    q_r5_q2_d: "Fără motiv special",

    q_r5_q3: "Care este cel mai important obicei pentru nutriția bună?",
    q_r5_q3_a: "Mâncare rapidă",
    q_r5_q3_b: "Mereu mâncare la fel",
    q_r5_q3_c: "Mese echilibrate cu toate grupurile alimentare",
    q_r5_q3_d: "Nu bea apă",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_carbs" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="r1_protein" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
        <linearGradient id="r1_fats" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="r1_vitamins" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Carbohydrates (bread) */}
      <g>
        <rect x="10" y="20" width="45" height="50" rx="8" fill="url(#r1_carbs)" />
        <path d="M 20 30 Q 25 25 30 30 Q 35 25 40 30 Q 45 25 50 30" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
        <text x="32.5" y="75" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#111">🍞</text>
      </g>

      {/* Proteins (meat) */}
      <g>
        <rect x="65" y="20" width="45" height="50" rx="8" fill="url(#r1_protein)" />
        <circle cx="77" cy="40" r="8" fill="rgba(0,0,0,0.15)" />
        <circle cx="92" cy="50" r="6" fill="rgba(0,0,0,0.15)" />
        <text x="87.5" y="75" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#fff">🥩</text>
      </g>

      {/* Fats (butter) */}
      <g>
        <rect x="120" y="20" width="45" height="50" rx="8" fill="url(#r1_fats)" />
        <ellipse cx="142.5" cy="45" rx="18" ry="12" fill="rgba(255,255,255,0.3)" />
        <text x="142.5" y="75" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#111">🧈</text>
      </g>

      {/* Vitamins (fruit) */}
      <g>
        <rect x="175" y="20" width="45" height="50" rx="8" fill="url(#r1_vitamins)" />
        <circle cx="188" cy="42" r="6" fill="rgba(0,0,0,0.15)" />
        <circle cx="200" cy="40" r="7" fill="rgba(0,0,0,0.15)" />
        <text x="197.5" y="75" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#fff">🍊</text>
      </g>

      {/* Labels */}
      <text x="32.5" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">{l.r1_carbs}</text>
      <text x="87.5" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">{l.r1_protein}</text>
      <text x="142.5" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">{l.r1_fats}</text>
      <text x="197.5" y="105" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">{l.r1_vitamins}</text>

      {/* Info lines */}
      <text x="32.5" y="122" fontSize="8" textAnchor="middle" fill="#10B981">{l.r1_carbs_info}</text>
      <text x="87.5" y="122" fontSize="8" textAnchor="middle" fill="#F87171">{l.r1_protein_info}</text>
      <text x="142.5" y="122" fontSize="8" textAnchor="middle" fill="#FBBF24">{l.r1_fats_info}</text>
      <text x="197.5" y="122" fontSize="8" textAnchor="middle" fill="#86EFAC">{l.r1_vitamins_info}</text>
    </svg>
  );
}

function SVG_R2(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_pyramid" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
          <stop offset="100%" stopColor="rgba(37,99,235,0.8)" />
        </linearGradient>
      </defs>

      {/* Pyramid base (grains - bottom) */}
      <polygon points="60,120 180,120 170,95 70,95" fill="url(#r2_pyramid)" stroke="#FCD34D" strokeWidth="2" />
      <text x="120" y="110" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#FCD34D">🌾 {l.r2_grains}</text>

      {/* Second level - vegetables & fruits */}
      <polygon points="75,95 165,95 150,65 90,65" fill="#10B981" stroke="#FBBF24" strokeWidth="2" opacity="0.8" />
      <text x="120" y="85" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">🥦 {l.r2_vegetables} 🍎 {l.r2_fruits}</text>

      {/* Third level - protein & dairy */}
      <polygon points="95,65 145,65 135,40 105,40" fill="#EF4444" stroke="#FBBF24" strokeWidth="2" opacity="0.8" />
      <text x="120" y="56" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#fff">🥩 {l.r2_protein_group}  🥛 {l.r2_dairy}</text>

      {/* Top - water */}
      <circle cx="120" cy="25" r="12" fill="#00D4FF" stroke="#FBBF24" strokeWidth="2" />
      <text x="120" y="28" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#000">💧</text>
    </svg>
  );
}

function SVG_R3(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_organ" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Mouth */}
      <circle cx="40" cy="30" r="15" fill="url(#r3_organ)" stroke="#FBBF24" strokeWidth="2" />
      <text x="40" y="35" fontSize="16" textAnchor="middle">👄</text>

      {/* Arrow down */}
      <path d="M 40 50 L 40 70" stroke="#FBBF24" strokeWidth="2" />
      <polygon points="40,70 35,60 45,60" fill="#FBBF24" />

      {/* Esophagus - narrow tube */}
      <rect x="35" y="75" width="10" height="15" rx="5" fill="url(#r3_organ)" stroke="#FBBF24" strokeWidth="1.5" />

      {/* Arrow down */}
      <path d="M 40 95 L 40 105" stroke="#FBBF24" strokeWidth="2" />
      <polygon points="40,105 35,95 45,95" fill="#FBBF24" />

      {/* Stomach - large pouch */}
      <ellipse cx="50" cy="125" rx="20" ry="18" fill="url(#r3_organ)" stroke="#FBBF24" strokeWidth="2" />
      <text x="50" y="128" fontSize="12" textAnchor="middle" fill="#fff">🤢</text>

      {/* Arrow right */}
      <path d="M 75 125 L 95 125" stroke="#FBBF24" strokeWidth="2" />
      <polygon points="95,125 85,120 85,130" fill="#FBBF24" />

      {/* Small intestine - coiled */}
      <circle cx="125" cy="115" r="18" fill="url(#r3_organ)" stroke="#FBBF24" strokeWidth="2" opacity="0.8" />
      <text x="125" y="120" fontSize="12" textAnchor="middle" fill="#fff">🌀</text>

      {/* Arrow down-right */}
      <path d="M 140 130 L 160 145" stroke="#FBBF24" strokeWidth="2" />
      <polygon points="160,145 150,140 155,150" fill="#FBBF24" />

      {/* Large intestine - wider rectangle */}
      <rect x="155" y="140" width="35" height="12" rx="6" fill="url(#r3_organ)" stroke="#FBBF24" strokeWidth="2" opacity="0.8" />
      <text x="172" y="149" fontSize="11" textAnchor="middle" fill="#fff">📦</text>

      {/* Labels below */}
      <text x="40" y="155" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#A78BFA">{l.r3_mouth}</text>
      <text x="85" y="145" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#A78BFA">{l.r3_esophagus}</text>
      <text x="125" y="155" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#A78BFA">{l.r3_small_intestine}</text>
      <text x="180" y="158" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#A78BFA">{l.r3_large_intestine}</text>
    </svg>
  );
}

function SVG_R4(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_water_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0096C7" />
        </linearGradient>
      </defs>

      {/* Water Glass */}
      <g>
        <path d="M 30 35 L 35 80 Q 35 95 42 95 L 55 95 Q 62 95 62 80 L 67 35 Z" fill="none" stroke="#00D4FF" strokeWidth="2" />
        <path d="M 32 55 Q 32 70 42 75 Q 52 70 52 55" fill="url(#r4_water_gradient)" opacity="0.7" />
        <text x="48.5" y="70" fontSize="14" textAnchor="middle">💧</text>
      </g>

      {/* Healthy Plate - divided circle */}
      <g>
        <circle cx="120" cy="60" r="35" fill="none" stroke="#10B981" strokeWidth="2" />
        {/* Vegetables section */}
        <path d="M 120 25 A 35 35 0 0 0 155 60 L 120 60 Z" fill="#10B981" opacity="0.6" />
        <text x="145" y="35" fontSize="11" fontWeight="bold" fill="#fff">🥦</text>
        {/* Fruits section */}
        <path d="M 155 60 A 35 35 0 0 0 120 95 L 120 60 Z" fill="#F87171" opacity="0.6" />
        <text x="135" y="85" fontSize="11" fontWeight="bold" fill="#fff">🍎</text>
        {/* Grains section */}
        <path d="M 120 95 A 35 35 0 0 0 85 60 L 120 60 Z" fill="#FBBF24" opacity="0.6" />
        <text x="90" y="85" fontSize="11" fontWeight="bold" fill="#111">🌾</text>
        {/* Protein section */}
        <path d="M 85 60 A 35 35 0 0 0 120 25 L 120 60 Z" fill="#EF4444" opacity="0.6" />
        <text x="100" y="35" fontSize="11" fontWeight="bold" fill="#fff">🥩</text>
        {/* Center - dairy circle */}
        <circle cx="120" cy="60" r="10" fill="#87CEEB" opacity="0.8" />
        <text x="120" y="65" fontSize="12" textAnchor="middle">🥛</text>
      </g>

      {/* Habit badges - bottom */}
      <g>
        <rect x="10" y="120" width="50" height="25" rx="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="35" y="133" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#3B82F6">💤 {l.r4_sleep}</text>
      </g>

      <g>
        <rect x="65" y="120" width="50" height="25" rx="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="90" y="133" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#3B82F6">🍽️ {l.r4_slow_eating}</text>
      </g>

      <g>
        <rect x="120" y="120" width="50" height="25" rx="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="145" y="133" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#3B82F6">⚖️ {l.r4_balance}</text>
      </g>

      <g>
        <rect x="175" y="120" width="50" height="25" rx="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="200" y="133" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#3B82F6">💪 {l.r4_water}</text>
      </g>
    </svg>
  );
}

function SVG_R5(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0.2)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#r5_bg)" rx="8" />

      {/* Nutrient icons arranged in circle */}
      <text x="40" y="50" fontSize="28" textAnchor="middle">🍞</text>
      <text x="200" y="50" fontSize="28" textAnchor="middle">🥩</text>
      <text x="120" y="35" fontSize="28" textAnchor="middle">🧈</text>
      <text x="30" y="120" fontSize="28" textAnchor="middle">🥗</text>
      <text x="210" y="120" fontSize="28" textAnchor="middle">💧</text>

      {/* Central brain/quiz */}
      <circle cx="120" cy="85" r="25" fill="#9333EA" opacity="0.4" stroke="#B44DFF" strokeWidth="2" />
      <text x="120" y="92" fontSize="18" textAnchor="middle">❓</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

// R1-R4 Question Pools
const R1_QUESTIONS: MCQQuestion[] = [
  {
    question: "r1_q",
    choices: ["r1_q_a", "r1_q_b", "r1_q_c", "r1_q_d"],
    answer: "r1_q_a",
  },
];

const R2_QUESTIONS: MCQQuestion[] = [
  {
    question: "r2_q",
    choices: ["r2_q_a", "r2_q_b", "r2_q_c", "r2_q_d"],
    answer: "r2_q_b",
  },
];

const R3_QUESTIONS: MCQQuestion[] = [
  {
    question: "r3_q",
    choices: ["r3_q_a", "r3_q_b", "r3_q_c", "r3_q_d"],
    answer: "r3_q_b",
  },
];

const R4_QUESTIONS: MCQQuestion[] = [
  {
    question: "r4_q",
    choices: ["r4_q_a", "r4_q_b", "r4_q_c", "r4_q_d"],
    answer: "r4_q_c",
  },
];

// R5 Review Questions (3 total)
const R5_QUESTIONS: MCQQuestion[] = [
  {
    question: "q_r5_q1",
    choices: ["q_r5_q1_a", "q_r5_q1_b", "q_r5_q1_c", "q_r5_q1_d"],
    answer: "q_r5_q1_c",
  },
  {
    question: "q_r5_q2",
    choices: ["q_r5_q2_a", "q_r5_q2_b", "q_r5_q2_c", "q_r5_q2_d"],
    answer: "q_r5_q2_b",
  },
  {
    question: "q_r5_q3",
    choices: ["q_r5_q3_a", "q_r5_q3_b", "q_r5_q3_c", "q_r5_q3_d"],
    answer: "q_r5_q3_c",
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_carbs_info", "r1_protein_info", "r1_fats_info", "r1_vitamins_info"],
      questions: R1_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_grains", "r2_vegetables", "r2_fruits", "r2_protein_group", "r2_dairy"],
      questions: R2_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_mouth_info", "r3_esophagus_info", "r3_stomach_info", "r3_small_intestine_info", "r3_large_intestine_info"],
      questions: R3_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      bulletKeys: ["r4_water_info", "r4_slow_eating_info", "r4_balance_info", "r4_sleep_info"],
      questions: R4_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: SVG_R5,
      questions: R5_QUESTIONS,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function NutritionExplorer({ color = "#10B981", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
