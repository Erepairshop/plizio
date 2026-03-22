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
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="nu_r1_bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
        {/* Bread gradient */}
        <linearGradient id="nu_r1_bread" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#F5D89A" />
          <stop offset="40%" stopColor="#D4A653" />
          <stop offset="100%" stopColor="#92662C" />
        </linearGradient>
        <linearGradient id="nu_r1_crust" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        {/* Meat gradient */}
        <linearGradient id="nu_r1_meat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E87070" />
          <stop offset="30%" stopColor="#CD4545" />
          <stop offset="70%" stopColor="#A82828" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id="nu_r1_fat_streak" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FDE8E8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FDE8E8" stopOpacity="0.2" />
        </linearGradient>
        {/* Oil gradient */}
        <radialGradient id="nu_r1_oil" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#FEF9C3" />
          <stop offset="40%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#CA8A04" />
        </radialGradient>
        <linearGradient id="nu_r1_bottle" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#D4E8D0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#86EFAC" stopOpacity="0.3" />
        </linearGradient>
        {/* Fruit gradients */}
        <radialGradient id="nu_r1_orange" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#C2410C" />
        </radialGradient>
        <radialGradient id="nu_r1_apple" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        {/* Milk gradient */}
        <linearGradient id="nu_r1_glass" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="nu_r1_milk" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <filter id="nu_r1_shadow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#nu_r1_bg)" rx="6" />

      {/* ── CARBOHYDRATES: Bread loaf ── */}
      <g transform="translate(28, 55)">
        {/* Shadow */}
        <ellipse cx="0" cy="28" rx="18" ry="4" fill="rgba(0,0,0,0.2)" filter="url(#nu_r1_shadow)" />
        {/* Bread body */}
        <path d="M -16 10 Q -18 0, -10 -10 Q 0 -18, 10 -10 Q 18 0, 16 10 Q 14 22, 0 24 Q -14 22, -16 10 Z" fill="url(#nu_r1_bread)" />
        {/* Crust top */}
        <path d="M -12 -8 Q 0 -16, 12 -8" fill="url(#nu_r1_crust)" opacity="0.6" />
        {/* Score marks on top */}
        <path d="M -6 -10 Q -4 -6, -2 -10" stroke="#B8860B" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M 2 -12 Q 4 -8, 6 -12" stroke="#B8860B" strokeWidth="0.6" fill="none" opacity="0.5" />
        {/* Highlight */}
        <path d="M -8 -6 Q -4 -12, 4 -10" stroke="#FEF3C7" strokeWidth="0.5" fill="none" opacity="0.4" />
        {/* Bread texture dots */}
        <circle cx="-4" cy="4" r="1" fill="#C9A553" opacity="0.3" />
        <circle cx="5" cy="8" r="0.8" fill="#C9A553" opacity="0.3" />
        <circle cx="-8" cy="12" r="0.8" fill="#C9A553" opacity="0.2" />
        {/* Wheat grain decoration */}
        <ellipse cx="-2" cy="-3" rx="1.5" ry="0.8" fill="#D4A653" opacity="0.4" transform="rotate(-20, -2, -3)" />
      </g>

      {/* ── PROTEINS: Meat steak ── */}
      <g transform="translate(88, 55)">
        <ellipse cx="0" cy="28" rx="18" ry="4" fill="rgba(0,0,0,0.2)" filter="url(#nu_r1_shadow)" />
        {/* Steak shape */}
        <path d="M -16 -5 Q -14 -15, -2 -16 Q 10 -15, 16 -5 Q 18 5, 14 14 Q 8 22, -4 22 Q -14 20, -16 10 Z" fill="url(#nu_r1_meat)" />
        {/* Fat marbling */}
        <path d="M -10 -6 Q -4 -3, 2 -8 Q 8 -4, 12 -2" stroke="url(#nu_r1_fat_streak)" strokeWidth="1.5" fill="none" />
        <path d="M -8 4 Q -2 8, 6 4 Q 10 6, 12 10" stroke="url(#nu_r1_fat_streak)" strokeWidth="1.2" fill="none" />
        <path d="M -12 10 Q -6 14, 2 12" stroke="url(#nu_r1_fat_streak)" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Highlight */}
        <path d="M -10 -10 Q -4 -14, 6 -12" stroke="#FCA5A5" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Bone edge */}
        <path d="M 14 -8 Q 18 -12, 20 -10 Q 22 -8, 18 -4" fill="#FEF3C7" stroke="#D4A574" strokeWidth="0.5" />
      </g>

      {/* ── FATS: Oil bottle ── */}
      <g transform="translate(148, 55)">
        <ellipse cx="0" cy="28" rx="14" ry="3" fill="rgba(0,0,0,0.15)" filter="url(#nu_r1_shadow)" />
        {/* Bottle body */}
        <path d="M -8 -5 L -8 20 Q -8 24, -4 24 L 4 24 Q 8 24, 8 20 L 8 -5 Z" fill="url(#nu_r1_bottle)" stroke="#86EFAC" strokeWidth="0.5" />
        {/* Bottle neck */}
        <rect x="-3" y="-14" width="6" height="10" rx="2" fill="url(#nu_r1_bottle)" stroke="#86EFAC" strokeWidth="0.5" />
        {/* Cap */}
        <rect x="-4" y="-17" width="8" height="4" rx="1.5" fill="#059669" />
        {/* Oil level inside */}
        <path d="M -6 0 L -6 18 Q -6 22, -3 22 L 3 22 Q 6 22, 6 18 L 6 0 Z" fill="url(#nu_r1_oil)" opacity="0.7" />
        {/* Oil shine */}
        <path d="M -4 2 L -4 16" stroke="#FEF9C3" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Droplet on side */}
        <ellipse cx="10" cy="8" rx="2" ry="3" fill="#FDE047" opacity="0.4" />
      </g>

      {/* ── VITAMINS: Fruits cluster ── */}
      <g transform="translate(208, 55)">
        <ellipse cx="0" cy="28" rx="18" ry="4" fill="rgba(0,0,0,0.15)" filter="url(#nu_r1_shadow)" />
        {/* Orange */}
        <circle cx="-6" cy="4" r="10" fill="url(#nu_r1_orange)" />
        <circle cx="-6" cy="4" r="10" fill="none" stroke="#C2410C" strokeWidth="0.3" opacity="0.3" />
        {/* Orange texture dimples */}
        <circle cx="-9" cy="1" r="0.5" fill="#EA580C" opacity="0.3" />
        <circle cx="-4" cy="-2" r="0.5" fill="#EA580C" opacity="0.3" />
        <circle cx="-3" cy="6" r="0.5" fill="#EA580C" opacity="0.3" />
        {/* Orange highlight */}
        <circle cx="-9" cy="-1" r="3" fill="#FDBA74" opacity="0.3" />
        {/* Apple behind */}
        <circle cx="6" cy="-2" r="9" fill="url(#nu_r1_apple)" />
        {/* Apple highlight */}
        <circle cx="3" cy="-5" r="2.5" fill="#FCA5A5" opacity="0.3" />
        {/* Apple stem */}
        <path d="M 6 -11 Q 5 -14, 7 -15" stroke="#78350F" strokeWidth="0.8" fill="none" />
        {/* Leaf */}
        <path d="M 7 -14 Q 11 -16, 12 -13 Q 10 -12, 7 -14 Z" fill="#22C55E" />
        {/* Small green grape cluster hint */}
        <circle cx="-2" cy="16" r="3" fill="#4ADE80" opacity="0.5" />
        <circle cx="2" cy="14" r="2.5" fill="#22C55E" opacity="0.5" />
        <circle cx="0" cy="18" r="2.5" fill="#16A34A" opacity="0.4" />
      </g>

      {/* ── MINERALS: Milk glass ── */}
      <g transform="translate(120, 120)">
        {/* Glass */}
        <path d="M -6 -12 L -8 8 Q -8 12, -4 12 L 4 12 Q 8 12, 8 8 L 6 -12 Z" fill="url(#nu_r1_glass)" stroke="#93C5FD" strokeWidth="0.5" />
        {/* Milk level */}
        <path d="M -7 -4 L -7 6 Q -7 10, -3 10 L 3 10 Q 7 10, 7 6 L 7 -4 Z" fill="url(#nu_r1_milk)" opacity="0.85" />
        {/* Milk surface */}
        <ellipse cx="0" cy="-4" rx="7" ry="2" fill="#fff" opacity="0.5" />
        {/* Glass shine */}
        <line x1="-5" y1="-10" x2="-6" y2="4" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Decorative: connecting arc showing balance */}
      <path d="M 28 90 Q 60 100, 88 90 Q 118 82, 148 90 Q 178 100, 208 90" stroke="#F59E0B" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* Small energy spark decorations */}
      <circle cx="58" cy="95" r="1.5" fill="#FBBF24" opacity="0.3" />
      <circle cx="118" cy="88" r="1.5" fill="#FBBF24" opacity="0.3" />
      <circle cx="178" cy="95" r="1.5" fill="#FBBF24" opacity="0.3" />
    </svg>
  );
}

function SVG_R2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="nu_r2_bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
        {/* Pyramid layer gradients */}
        <linearGradient id="nu_r2_grains" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="nu_r2_vegs" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="nu_r2_fruits" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
        <linearGradient id="nu_r2_protein" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
        <linearGradient id="nu_r2_dairy" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="nu_r2_fats" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="nu_r2_glow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#nu_r2_bg)" rx="6" />

      {/* Pyramid shadow */}
      <polygon points="50,150 190,150 155,148 85,148" fill="rgba(0,0,0,0.15)" filter="url(#nu_r2_glow)" />

      {/* Layer 1: GRAINS — bottom (widest) */}
      <polygon points="50,148 190,148 175,122 65,122" fill="url(#nu_r2_grains)" />
      <polygon points="50,148 190,148 175,122 65,122" fill="none" stroke="#B45309" strokeWidth="0.5" opacity="0.4" />
      {/* Grain texture: wheat stalks */}
      <ellipse cx="90" cy="136" rx="3" ry="1.5" fill="#FEF3C7" opacity="0.2" transform="rotate(-15,90,136)" />
      <ellipse cx="110" cy="132" rx="3" ry="1.5" fill="#FEF3C7" opacity="0.2" transform="rotate(10,110,132)" />
      <ellipse cx="130" cy="138" rx="3" ry="1.5" fill="#FEF3C7" opacity="0.15" transform="rotate(-5,130,138)" />
      <ellipse cx="150" cy="134" rx="3" ry="1.5" fill="#FEF3C7" opacity="0.2" transform="rotate(20,150,134)" />
      {/* Layer highlight */}
      <line x1="68" y1="124" x2="172" y2="124" stroke="#FDE68A" strokeWidth="0.5" opacity="0.2" />

      {/* Layer 2: VEGETABLES — second from bottom */}
      <polygon points="65,122 175,122 160,96 80,96" fill="url(#nu_r2_vegs)" />
      <polygon points="65,122 175,122 160,96 80,96" fill="none" stroke="#047857" strokeWidth="0.5" opacity="0.3" />
      {/* Leaf shapes */}
      <path d="M 100 108 Q 103 104, 108 106 Q 105 110, 100 108 Z" fill="#6EE7B7" opacity="0.25" />
      <path d="M 125 112 Q 128 108, 133 110 Q 130 114, 125 112 Z" fill="#6EE7B7" opacity="0.2" />
      <path d="M 145 106 Q 148 102, 153 104 Q 150 108, 145 106 Z" fill="#6EE7B7" opacity="0.2" />

      {/* Layer 3: FRUITS */}
      <polygon points="80,96 160,96 148,74 92,74" fill="url(#nu_r2_fruits)" />
      <polygon points="80,96 160,96 148,74 92,74" fill="none" stroke="#C2410C" strokeWidth="0.5" opacity="0.3" />
      {/* Fruit dots */}
      <circle cx="110" cy="84" r="2" fill="#FDBA74" opacity="0.25" />
      <circle cx="125" cy="82" r="2.5" fill="#FDBA74" opacity="0.2" />
      <circle cx="140" cy="86" r="1.8" fill="#FDBA74" opacity="0.2" />

      {/* Layer 4: PROTEIN & DAIRY */}
      <polygon points="92,74 148,74 140,56 100,56" fill="url(#nu_r2_protein)" />
      <polygon points="92,74 148,74 140,56 100,56" fill="none" stroke="#991B1B" strokeWidth="0.5" opacity="0.3" />
      {/* Dairy stripe on right side */}
      <polygon points="130,74 148,74 140,56 124,56" fill="url(#nu_r2_dairy)" opacity="0.5" />
      {/* Protein texture */}
      <path d="M 108 64 Q 112 60, 116 64" stroke="#FCA5A5" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Layer 5: FATS — top (smallest) */}
      <polygon points="100,56 140,56 132,40 108,40" fill="url(#nu_r2_fats)" />
      <polygon points="100,56 140,56 132,40 108,40" fill="none" stroke="#B45309" strokeWidth="0.5" opacity="0.3" />
      {/* Oil drop */}
      <ellipse cx="120" cy="48" rx="3" ry="2" fill="#FEF9C3" opacity="0.2" />

      {/* Apex: Water droplet */}
      <path d="M 120 20 Q 115 28, 114 34 Q 114 40, 120 42 Q 126 40, 126 34 Q 126 28, 120 20 Z" fill="#22D3EE" opacity="0.7" />
      <path d="M 120 20 Q 115 28, 114 34 Q 114 40, 120 42 Q 126 40, 126 34 Q 126 28, 120 20 Z" fill="none" stroke="#0891B2" strokeWidth="0.5" />
      {/* Water highlight */}
      <ellipse cx="118" cy="30" rx="2" ry="3" fill="#A5F3FC" opacity="0.4" />

      {/* Side indicators (colored dots showing pyramid order) */}
      <circle cx="28" cy="136" r="3" fill="#FBBF24" opacity="0.5" />
      <circle cx="28" cy="110" r="3" fill="#10B981" opacity="0.5" />
      <circle cx="28" cy="86" r="3" fill="#F97316" opacity="0.5" />
      <circle cx="28" cy="66" r="3" fill="#EF4444" opacity="0.5" />
      <circle cx="28" cy="48" r="3" fill="#FDE047" opacity="0.5" />
      <circle cx="28" cy="32" r="3" fill="#22D3EE" opacity="0.5" />

      {/* Arrows indicating "eat more" at bottom, "eat less" at top */}
      <path d="M 212 140 L 212 30" stroke="#F59E0B" strokeWidth="0.8" fill="none" opacity="0.3" />
      <polygon points="212,30 209,38 215,38" fill="#F59E0B" opacity="0.3" />
    </svg>
  );
}

function SVG_R3(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="nu_r3_bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
        <radialGradient id="nu_r3_body" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FDEBD0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E8C9A0" stopOpacity="0.03" />
        </radialGradient>
        <linearGradient id="nu_r3_mouth" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="50%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
        <linearGradient id="nu_r3_esoph" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FBCFE8" />
          <stop offset="50%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <radialGradient id="nu_r3_stomach" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        <linearGradient id="nu_r3_small" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="50%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="nu_r3_large" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="nu_r3_acid" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1" />
        </linearGradient>
        <filter id="nu_r3_glow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#nu_r3_bg)" rx="6" />

      {/* Body silhouette (torso outline) */}
      <path d="M 85 5 Q 70 10, 60 25 Q 50 40, 48 60 Q 46 80, 50 100 Q 55 120, 65 140 Q 75 155, 90 158 L 150 158 Q 165 155, 175 140 Q 185 120, 190 100 Q 194 80, 192 60 Q 190 40, 180 25 Q 170 10, 155 5 Z" fill="url(#nu_r3_body)" />

      {/* ── MOUTH ── */}
      <g transform="translate(120, 14)">
        {/* Lips */}
        <path d="M -10 0 Q -6 -6, 0 -6 Q 6 -6, 10 0 Q 6 4, 0 5 Q -6 4, -10 0 Z" fill="url(#nu_r3_mouth)" />
        {/* Teeth hint */}
        <path d="M -6 -1 L 6 -1" stroke="#FFF" strokeWidth="0.8" opacity="0.3" />
        {/* Opening */}
        <ellipse cx="0" cy="0" rx="5" ry="2" fill="#9D174D" opacity="0.5" />
      </g>

      {/* ── ESOPHAGUS — tube going down ── */}
      <path d="M 118 20 Q 116 30, 112 40 Q 108 50, 104 58" stroke="url(#nu_r3_esoph)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 118 20 Q 116 30, 112 40 Q 108 50, 104 58" stroke="#F9A8D4" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Peristalsis waves */}
      <circle cx="115" cy="30" r="3" fill="#FBCFE8" opacity="0.15" />
      <circle cx="110" cy="44" r="2.5" fill="#FBCFE8" opacity="0.12" />

      {/* ── STOMACH — J-shaped pouch ── */}
      <g transform="translate(90, 78)">
        {/* Stomach body */}
        <path d="M 0 -20 Q 20 -22, 25 -10 Q 30 5, 22 18 Q 14 28, 0 26 Q -14 24, -16 10 Q -18 -5, -10 -15 Q -5 -20, 0 -20 Z" fill="url(#nu_r3_stomach)" />
        {/* Stomach wall folds (rugae) */}
        <path d="M -8 -10 Q -2 -6, 5 -10 Q 12 -6, 18 -8" stroke="#FCA5A5" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M -10 0 Q -4 4, 4 0 Q 12 4, 20 2" stroke="#FCA5A5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <path d="M -8 10 Q -2 14, 6 10 Q 14 14, 18 12" stroke="#FCA5A5" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Acid bubbles */}
        <circle cx="5" cy="5" r="2" fill="url(#nu_r3_acid)" />
        <circle cx="-4" cy="12" r="1.5" fill="url(#nu_r3_acid)" />
        <circle cx="12" cy="10" r="1.8" fill="url(#nu_r3_acid)" />
        {/* Highlight */}
        <path d="M -4 -16 Q 4 -20, 14 -16" stroke="#FCA5A5" strokeWidth="0.4" fill="none" opacity="0.3" />
      </g>

      {/* Connection stomach → small intestine */}
      <path d="M 112 104 Q 118 112, 128 116" stroke="#F472B6" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round" />

      {/* ── SMALL INTESTINE — coiled loops ── */}
      <g transform="translate(155, 115)">
        {/* Coiled tube */}
        <path d="M -15 -8 Q -8 -16, 0 -10 Q 8 -4, 0 2 Q -8 8, 0 14 Q 8 20, 15 14 Q 22 8, 15 0 Q 8 -8, 15 -14 Q 22 -20, 28 -14" stroke="url(#nu_r3_small)" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Inner texture lines */}
        <path d="M -12 -8 Q -6 -14, 2 -8" stroke="#FBCFE8" strokeWidth="0.4" fill="none" opacity="0.3" />
        <path d="M -5 2 Q 2 8, 8 2" stroke="#FBCFE8" strokeWidth="0.4" fill="none" opacity="0.3" />
        {/* Villi texture (tiny absorption fingers) */}
        <circle cx="-4" cy="-10" r="0.8" fill="#FBCFE8" opacity="0.3" />
        <circle cx="4" cy="-2" r="0.8" fill="#FBCFE8" opacity="0.3" />
        <circle cx="-2" cy="8" r="0.8" fill="#FBCFE8" opacity="0.25" />
        <circle cx="10" cy="14" r="0.8" fill="#FBCFE8" opacity="0.25" />
        {/* Nutrient absorption arrows */}
        <path d="M 20 -10 L 26 -14" stroke="#22C55E" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M 22 0 L 28 -2" stroke="#22C55E" strokeWidth="0.6" fill="none" opacity="0.35" />
      </g>

      {/* ── LARGE INTESTINE — framing shape ── */}
      {/* Ascending */}
      <path d="M 195 130 Q 198 120, 198 108 Q 198 96, 195 88" stroke="url(#nu_r3_large)" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Transverse */}
      <path d="M 195 88 Q 185 82, 170 80 Q 155 78, 145 80" stroke="url(#nu_r3_large)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85" />
      {/* Descending (hint) */}
      <path d="M 145 80 Q 140 85, 138 92" stroke="url(#nu_r3_large)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Haustra (pouching) texture */}
      <path d="M 197 120 Q 200 115, 197 110" stroke="#DDD6FE" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M 197 105 Q 200 100, 197 95" stroke="#DDD6FE" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M 190 84 Q 185 82, 180 84" stroke="#DDD6FE" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Rectum hint */}
      <path d="M 138 92 Q 136 100, 138 108" stroke="#7C3AED" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round" />

      {/* Flow direction arrows */}
      <polygon points="108,56 112,52 112,60" fill="#FBCFE8" opacity="0.3" />
      <polygon points="120,112 124,108 124,116" fill="#F472B6" opacity="0.3" />
      <polygon points="195,95 199,91 191,91" fill="#A855F7" opacity="0.3" />

      {/* Colored indicator dots */}
      <circle cx="120" cy="14" r="2" fill="#F472B6" opacity="0.6" />
      <circle cx="90" cy="78" r="2" fill="#EF4444" opacity="0.6" />
      <circle cx="155" cy="115" r="2" fill="#F472B6" opacity="0.6" />
      <circle cx="195" cy="108" r="2" fill="#A855F7" opacity="0.6" />
    </svg>
  );
}

function SVG_R4(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="nu_r4_bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
        <linearGradient id="nu_r4_water" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="30%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <linearGradient id="nu_r4_glass" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="nu_r4_plate_rim" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <radialGradient id="nu_r4_veg_section" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <radialGradient id="nu_r4_grain_section" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
        <radialGradient id="nu_r4_protein_section" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#B91C1C" />
        </radialGradient>
        <radialGradient id="nu_r4_fruit_section" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#C2410C" />
        </radialGradient>
        <linearGradient id="nu_r4_body" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FDEBD0" />
          <stop offset="100%" stopColor="#C9A87C" />
        </linearGradient>
        <filter id="nu_r4_glow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#nu_r4_bg)" rx="6" />

      {/* ── WATER GLASS — left side ── */}
      <g transform="translate(45, 50)">
        {/* Glass shadow */}
        <ellipse cx="0" cy="52" rx="16" ry="3" fill="rgba(0,0,0,0.15)" filter="url(#nu_r4_glow)" />
        {/* Glass body */}
        <path d="M -12 -20 L -14 42 Q -14 48, -8 48 L 8 48 Q 14 48, 14 42 L 12 -20 Z" fill="url(#nu_r4_glass)" stroke="#93C5FD" strokeWidth="0.6" />
        {/* Water fill */}
        <path d="M -13 5 Q -8 2, 0 4 Q 8 2, 13 5 L 13 40 Q 13 46, 7 46 L -7 46 Q -13 46, -13 40 Z" fill="url(#nu_r4_water)" opacity="0.7" />
        {/* Water surface wave */}
        <path d="M -12 5 Q -6 1, 0 4 Q 6 1, 12 5" stroke="#A5F3FC" strokeWidth="0.8" fill="none" opacity="0.5" />
        {/* Bubbles */}
        <circle cx="-4" cy="18" r="1.5" fill="#A5F3FC" opacity="0.3" />
        <circle cx="3" cy="28" r="1" fill="#A5F3FC" opacity="0.25" />
        <circle cx="-2" cy="36" r="1.2" fill="#A5F3FC" opacity="0.2" />
        {/* Glass highlight */}
        <line x1="-10" y1="-16" x2="-12" y2="36" stroke="#fff" strokeWidth="0.6" opacity="0.25" />
        {/* Water drops outside */}
        <path d="M 16 10 Q 15 14, 17 16 Q 19 14, 18 10 Z" fill="#22D3EE" opacity="0.3" />
        <path d="M -16 22 Q -17 25, -15 27 Q -13 25, -14 22 Z" fill="#22D3EE" opacity="0.25" />
      </g>

      {/* ── BALANCED PLATE — center ── */}
      <g transform="translate(140, 60)">
        {/* Plate shadow */}
        <ellipse cx="0" cy="42" rx="38" ry="6" fill="rgba(0,0,0,0.12)" filter="url(#nu_r4_glow)" />
        {/* Plate rim */}
        <ellipse cx="0" cy="0" rx="38" ry="34" fill="url(#nu_r4_plate_rim)" opacity="0.15" />
        <ellipse cx="0" cy="0" rx="38" ry="34" fill="none" stroke="#94A3B8" strokeWidth="0.8" opacity="0.4" />
        {/* Inner plate */}
        <ellipse cx="0" cy="0" rx="32" ry="28" fill="none" stroke="#CBD5E1" strokeWidth="0.4" opacity="0.3" />

        {/* Vegetable section (top-left quadrant) */}
        <path d="M 0 -28 A 32 28 0 0 0 -32 0 L 0 0 Z" fill="url(#nu_r4_veg_section)" opacity="0.6" />
        {/* Broccoli shapes */}
        <circle cx="-14" cy="-12" r="4" fill="#22C55E" opacity="0.5" />
        <circle cx="-10" cy="-8" r="3.5" fill="#16A34A" opacity="0.4" />
        <circle cx="-18" cy="-6" r="3" fill="#15803D" opacity="0.4" />
        <line x1="-14" y1="-8" x2="-14" y2="-2" stroke="#166534" strokeWidth="0.8" opacity="0.3" />

        {/* Grain section (bottom-left quadrant) */}
        <path d="M -32 0 A 32 28 0 0 0 0 28 L 0 0 Z" fill="url(#nu_r4_grain_section)" opacity="0.5" />
        {/* Rice grains */}
        <ellipse cx="-12" cy="10" rx="2" ry="0.8" fill="#FEF3C7" opacity="0.4" transform="rotate(-20,-12,10)" />
        <ellipse cx="-8" cy="14" rx="2" ry="0.8" fill="#FEF3C7" opacity="0.35" transform="rotate(15,-8,14)" />
        <ellipse cx="-16" cy="16" rx="2" ry="0.8" fill="#FEF3C7" opacity="0.3" transform="rotate(-10,-16,16)" />

        {/* Protein section (bottom-right quadrant) */}
        <path d="M 0 28 A 32 28 0 0 0 32 0 L 0 0 Z" fill="url(#nu_r4_protein_section)" opacity="0.5" />
        {/* Meat slice */}
        <ellipse cx="14" cy="10" rx="8" ry="5" fill="#EF4444" opacity="0.4" />
        <path d="M 10 10 Q 14 8, 18 10" stroke="#FCA5A5" strokeWidth="0.5" fill="none" opacity="0.3" />

        {/* Fruit section (top-right quadrant) */}
        <path d="M 32 0 A 32 28 0 0 0 0 -28 L 0 0 Z" fill="url(#nu_r4_fruit_section)" opacity="0.5" />
        {/* Fruit shapes */}
        <circle cx="12" cy="-10" r="4" fill="#F97316" opacity="0.4" />
        <circle cx="18" cy="-6" r="3" fill="#EF4444" opacity="0.4" />

        {/* Divider lines */}
        <line x1="0" y1="-28" x2="0" y2="28" stroke="#E2E8F0" strokeWidth="0.5" opacity="0.3" />
        <line x1="-32" y1="0" x2="32" y2="0" stroke="#E2E8F0" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* ── EXERCISE FIGURE — right side ── */}
      <g transform="translate(215, 65)">
        {/* Running stick figure */}
        {/* Head */}
        <circle cx="0" cy="-22" r="5" fill="url(#nu_r4_body)" opacity="0.6" />
        {/* Body */}
        <line x1="0" y1="-17" x2="0" y2="0" stroke="url(#nu_r4_body)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        {/* Arms (running pose) */}
        <line x1="0" y1="-12" x2="-8" y2="-4" stroke="url(#nu_r4_body)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="0" y1="-12" x2="8" y2="-18" stroke="url(#nu_r4_body)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        {/* Legs (running stride) */}
        <line x1="0" y1="0" x2="-7" y2="12" stroke="url(#nu_r4_body)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="0" y1="0" x2="7" y2="10" stroke="url(#nu_r4_body)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        {/* Motion lines */}
        <line x1="-12" y1="-18" x2="-16" y2="-18" stroke="#22D3EE" strokeWidth="0.6" opacity="0.3" />
        <line x1="-12" y1="-12" x2="-18" y2="-12" stroke="#22D3EE" strokeWidth="0.6" opacity="0.25" />
        <line x1="-12" y1="-6" x2="-16" y2="-6" stroke="#22D3EE" strokeWidth="0.6" opacity="0.2" />
      </g>

      {/* ── HEALTHY HABITS indicators — bottom strip ── */}
      {/* Sleep — moon */}
      <g transform="translate(30, 130)">
        <circle cx="0" cy="0" r="10" fill="#312E81" opacity="0.2" />
        <path d="M -3 -6 Q -8 -4, -8 2 Q -8 8, -2 8 Q 4 8, 6 4 Q 0 6, -2 2 Q -4 -2, -3 -6 Z" fill="#A5B4FC" opacity="0.5" />
        <circle cx="4" cy="-5" r="0.8" fill="#E0E7FF" opacity="0.4" />
        <circle cx="6" cy="-2" r="0.5" fill="#E0E7FF" opacity="0.3" />
      </g>

      {/* Slow eating — fork & knife */}
      <g transform="translate(80, 130)">
        <circle cx="0" cy="0" r="10" fill="#065F46" opacity="0.2" />
        {/* Fork */}
        <line x1="-4" y1="-6" x2="-4" y2="6" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.5" />
        <line x1="-6" y1="-6" x2="-6" y2="-1" stroke="#6EE7B7" strokeWidth="0.6" opacity="0.4" />
        <line x1="-2" y1="-6" x2="-2" y2="-1" stroke="#6EE7B7" strokeWidth="0.6" opacity="0.4" />
        {/* Knife */}
        <line x1="4" y1="-6" x2="4" y2="6" stroke="#6EE7B7" strokeWidth="1" opacity="0.5" />
        <path d="M 4 -6 Q 6 -4, 6 -1 L 4 -1 Z" fill="#6EE7B7" opacity="0.3" />
      </g>

      {/* Balanced meals — scale */}
      <g transform="translate(130, 130)">
        <circle cx="0" cy="0" r="10" fill="#713F12" opacity="0.2" />
        {/* Scale beam */}
        <line x1="-7" y1="-1" x2="7" y2="-1" stroke="#FDE68A" strokeWidth="1" opacity="0.5" />
        {/* Fulcrum */}
        <polygon points="0,-1 -2,5 2,5" fill="#FDE68A" opacity="0.4" />
        {/* Left pan */}
        <path d="M -8 -1 Q -10 2, -6 2 Z" fill="#FDE68A" opacity="0.4" />
        {/* Right pan */}
        <path d="M 8 -1 Q 10 2, 6 2 Z" fill="#FDE68A" opacity="0.4" />
        {/* Top post */}
        <line x1="0" y1="-6" x2="0" y2="-1" stroke="#FDE68A" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* Exercise — heart */}
      <g transform="translate(180, 130)">
        <circle cx="0" cy="0" r="10" fill="#7F1D1D" opacity="0.2" />
        {/* Heart shape */}
        <path d="M 0 3 Q -6 -1, -6 -4 Q -6 -7, -3 -7 Q 0 -7, 0 -4 Q 0 -7, 3 -7 Q 6 -7, 6 -4 Q 6 -1, 0 3 Z" fill="#EF4444" opacity="0.4" />
      </g>

      {/* Water drops — far right bottom */}
      <g transform="translate(220, 130)">
        <circle cx="0" cy="0" r="10" fill="#164E63" opacity="0.2" />
        <path d="M 0 -6 Q -3 -2, -3 1 Q -3 5, 0 6 Q 3 5, 3 1 Q 3 -2, 0 -6 Z" fill="#22D3EE" opacity="0.4" />
        <ellipse cx="-1" cy="-2" rx="1" ry="1.5" fill="#A5F3FC" opacity="0.3" />
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
