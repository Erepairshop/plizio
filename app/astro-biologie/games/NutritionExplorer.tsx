"use client";
// NutritionExplorer.tsx — Bio Island i9: Táplálkozás (K5)
// Topics: 1) Tápanyagok 2) Emésztés 3) Táplálékpiramis 4) Víz és Vitaminok 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { NutritionPyramidSvg, DigestiveSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-45" y="10" fontSize="35" textAnchor="middle">🥩</text>
        <text x="0" y="10" fontSize="35" textAnchor="middle">🥖</text>
        <text x="45" y="10" fontSize="35" textAnchor="middle">🥑</text>
        <path d="M -25,0 L -15,0 M 15,0 L 25,0" stroke="#D97706" strokeWidth="4" strokeDasharray="3 3" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-35" y="15" fontSize="45" textAnchor="middle">💧</text>
        <text x="35" y="15" fontSize="40" textAnchor="middle">🍋</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🍎</text>
        <text x="20" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Helyes Táplálkozás",
    // T1: Tápanyagok
    t1_title: "A három fő tápanyag",
    t1_text: "Az ételeink három fő tápanyagcsoportból állnak: fehérjékből, szénhidrátokból és zsírokból. Mindegyiknek más a feladata a testünkben.",
    t1_b1: "Fehérjék: a testünk építőkövei (pl. hús, tojás, tej).",
    t1_b2: "Szénhidrátok: a gyors energia forrásai (pl. kenyér, tészta).",
    t1_b3: "Zsírok: tartalék energia és hőszigetelés (pl. olaj, vaj).",
    t1_inst: "Párosítsd a tápanyagot a feladatával!",
    t1_l1: "Fehérje", t1_r1: "Építőanyag (izomzat)",
    t1_l2: "Szénhidrát", t1_r2: "Gyors energia",
    t1_l3: "Zsír", t1_r3: "Tartalék energia",
    t1_q: "Melyik tápanyag a testünk legfontosabb építőköve?",
    t1_q_a: "Fehérje", t1_q_b: "Szénhidrát", t1_q_c: "Zsír", t1_q_d: "Cukor",

    // T2: Emésztés
    t2_title: "Az emésztés útja",
    t2_text: "Az emésztés során a szervezetünk lebontja az ételt apró darabokra, hogy a sejtek fel tudják venni a tápanyagokat.",
    t2_b1: "Száj: rágás és a nyál elkezdi a bontást.",
    t2_b2: "Gyomor: savakkal bontja a fehérjéket.",
    t2_b3: "Vékonybél: a tápanyagok felszívódnak a vérbe.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "gyomor", t2_w3: "megemészti", t2_w4: "a", t2_w5: "táplálékot.",
    t2_q: "Hol szívódnak fel a tápanyagok a vérbe?",
    t2_q_a: "A vékonybélben", t2_q_b: "A gyomorban", t2_q_c: "A szájüregben", t2_q_d: "A nyelőcsőben",

    // T3: Táplálékpiramis
    t3_title: "A táplálékpiramis",
    t3_text: "A táplálékpiramis megmutatja, miből mennyit érdemes ennünk. A piramis alapját azok az ételek alkotják, amikből a legtöbbet kell fogyasztanunk.",
    t3_b1: "Alap (legtöbb): víz, zöldségek, gyümölcsök, teljes kiőrlésű gabonák.",
    t3_b2: "Közép (mérsékelten): tejtermékek, húsok, halak.",
    t3_b3: "Csúcs (legkevesebb): édességek, cukros üdítők, zsírok.",
    t3_inst: "Egészséges vagy egészségtelen mindennapi fogyasztásra? Válogasd szét!",
    t3_bucket_jo: "Egészséges (Sokat)",
    t3_bucket_rossz: "Kerülendő (Kevés)",
    t3_item_j1: "Alma és répa", t3_item_j2: "Víz",
    t3_item_r1: "Cukros kóla", t3_item_r2: "Chips",
    t3_q: "Miből érdemes a legkevesebbet fogyasztani a piramis szerint?",
    t3_q_a: "Édességek és zsírok", t3_q_b: "Zöldségek", t3_q_c: "Gyümölcsök", t3_q_d: "Víz",

    // T4: Víz és Vitaminok
    t4_title: "Víz és vitaminok",
    t4_text: "A testünk több mint fele víz! A vitaminok és ásványi anyagok pedig elengedhetetlenek az immunrendszerünk működéséhez.",
    t4_b1: "Víz: szállítja a tápanyagokat és hűti a testet (izzadás).",
    t4_b2: "C-vitamin: védi az immunrendszert (citrusfélék, paprika).",
    t4_b3: "Kalcium: erősíti a csontokat és a fogakat (tejtermékek).",
    t4_inst: "Miből áll testünk legnagyobb része?",
    t4_gap_sentence: "A testünk nagy része {gap} áll.",
    t4_c1: "vízből", t4_c2: "cukorból", t4_c3: "csontból",
    t4_q: "Miért fontos a víz a testünk számára?",
    t4_q_a: "Szállítja a tápanyagokat", t4_q_b: "Energiát ad futáshoz", t4_q_c: "Zsírt épít fel", t4_q_d: "Csontot növeszt",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a helyes táplálkozásról!",
    t5_b1: "Fehérje épít, szénhidrát energiát ad.",
    t5_b2: "Sok zöldség, kevés édesség.",
    t5_b3: "A víz elengedhetetlen az élethez.",
    t5_inst: "Mit tartalmaznak a zöldségek és gyümölcsök?",
    t5_gap_sentence2: "A zöldségek és gyümölcsök sok {gap} tartalmaznak.",
    t5_c51: "vitamint", t5_c52: "zsírt", t5_c53: "kólát",
    t5_q: "Melyik állítás IGAZ az egészséges táplálkozásra?",
    t5_q_a: "Sok zöldséget és elegendő vizet kell fogyasztani.", t5_q_b: "Csak szénhidrátokat szabad enni.", t5_q_c: "A zsírok a test legfőbb építőkövei.", t5_q_d: "A cukor a legegészségesebb étel.",
  },
  en: {
    explorer_title: "Healthy Nutrition",
    t1_title: "The Three Main Nutrients", t1_text: "Our food consists of three main nutrient groups: proteins, carbohydrates, and fats. Each has a different role in our body.",
    t1_b1: "Proteins: building blocks of our body (e.g., meat, eggs, milk).", t1_b2: "Carbohydrates: quick energy sources (e.g., bread, pasta).", t1_b3: "Fats: backup energy and insulation (e.g., oil, butter).",
    t1_inst: "Match the nutrient to its function!",
    t1_l1: "Protein", t1_r1: "Building material (muscles)", t1_l2: "Carbohydrate", t1_r2: "Quick energy", t1_l3: "Fat", t1_r3: "Backup energy",
    t1_q: "Which nutrient is the most important building block of our body?", t1_q_a: "Protein", t1_q_b: "Carbohydrate", t1_q_c: "Fat", t1_q_d: "Sugar",

    t2_title: "The Path of Digestion", t2_text: "During digestion, our body breaks down food into tiny pieces so our cells can absorb the nutrients.",
    t2_b1: "Mouth: chewing and saliva start breaking it down.", t2_b2: "Stomach: uses acids to break down proteins.", t2_b3: "Small intestine: nutrients are absorbed into the blood.",
    t2_inst: "Put the words in order!",
    t2_w1: "The", t2_w2: "stomach", t2_w3: "digests", t2_w4: "the", t2_w5: "food.",
    t2_q: "Where are nutrients absorbed into the blood?", t2_q_a: "In the small intestine", t2_q_b: "In the stomach", t2_q_c: "In the mouth", t2_q_d: "In the esophagus",

    t3_title: "The Food Pyramid", t3_text: "The food pyramid shows what and how much we should eat. The base consists of foods we should eat the most.",
    t3_b1: "Base (most): water, vegetables, fruits, whole grains.", t3_b2: "Middle (moderate): dairy, meat, fish.", t3_b3: "Top (least): sweets, sugary drinks, fats.",
    t3_inst: "Healthy or unhealthy for daily consumption? Sort them!",
    t3_bucket_jo: "Healthy (More)", t3_bucket_rossz: "Avoid (Less)",
    t3_item_j1: "Apple and carrot", t3_item_j2: "Water", t3_item_r1: "Sugary cola", t3_item_r2: "Chips",
    t3_q: "What should we consume the least of according to the pyramid?", t3_q_a: "Sweets and fats", t3_q_b: "Vegetables", t3_q_c: "Fruits", t3_q_d: "Water",

    t4_title: "Water and Vitamins", t4_text: "More than half of our body is water! Vitamins and minerals are essential for our immune system to work.",
    t4_b1: "Water: transports nutrients and cools the body (sweat).", t4_b2: "Vitamin C: protects the immune system (citrus, bell peppers).", t4_b3: "Calcium: strengthens bones and teeth (dairy).",
    t4_inst: "What makes up the largest part of our body?", t4_gap_sentence: "Our body is mostly made of {gap}.",
    t4_c1: "water", t4_c2: "sugar", t4_c3: "bone",
    t4_q: "Why is water important for our body?", t4_q_a: "It transports nutrients", t4_q_b: "It gives energy for running", t4_q_c: "It builds fat", t4_q_d: "It grows bones",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about healthy nutrition!",
    t5_b1: "Protein builds, carbs give energy.", t5_b2: "Lots of veggies, few sweets.", t5_b3: "Water is essential for life.",
    t5_inst: "What do vegetables and fruits contain?", t5_gap_sentence2: "Vegetables and fruits contain many {gap}.",
    t5_c51: "vitamins", t5_c52: "fats", t5_c53: "colas",
    t5_q: "Which statement is TRUE about healthy nutrition?", t5_q_a: "You must eat many vegetables and drink enough water.", t5_q_b: "You should only eat carbohydrates.", t5_q_c: "Fats are the main building blocks.", t5_q_d: "Sugar is the healthiest food.",
  },
  de: {
    explorer_title: "Gesunde Ernährung",
    t1_title: "Die drei Hauptnährstoffe", t1_text: "Unsere Nahrung besteht aus drei Hauptgruppen: Proteine, Kohlenhydrate und Fette. Jede hat eine andere Aufgabe.",
    t1_b1: "Proteine (Eiweiß): Bausteine des Körpers (z.B. Fleisch, Ei, Milch).", t1_b2: "Kohlenhydrate: schnelle Energie (z.B. Brot, Nudeln).", t1_b3: "Fette: Reserveenergie und Isolierung (z.B. Öl, Butter).",
    t1_inst: "Verbinde den Nährstoff mit seiner Aufgabe!",
    t1_l1: "Protein", t1_r1: "Baumaterial (Muskeln)", t1_l2: "Kohlenhydrat", t1_r2: "Schnelle Energie", t1_l3: "Fett", t1_r3: "Reserveenergie",
    t1_q: "Welcher Nährstoff ist der wichtigste Baustein unseres Körpers?", t1_q_a: "Protein (Eiweiß)", t1_q_b: "Kohlenhydrat", t1_q_c: "Fett", t1_q_d: "Zucker",

    t2_title: "Der Weg der Verdauung", t2_text: "Bei der Verdauung zerlegt der Körper das Essen in winzige Teile, damit die Zellen die Nährstoffe aufnehmen können.",
    t2_b1: "Mund: Kauen und Speichel beginnen die Zerlegung.", t2_b2: "Magen: spaltet Proteine mit Säure.", t2_b3: "Dünndarm: Nährstoffe werden ins Blut aufgenommen.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Der", t2_w2: "Magen", t2_w3: "verdaut", t2_w4: "die", t2_w5: "Nahrung.",
    t2_q: "Wo werden die Nährstoffe ins Blut aufgenommen?", t2_q_a: "Im Dünndarm", t2_q_b: "Im Magen", t2_q_c: "Im Mund", t2_q_d: "In der Speiseröhre",

    t3_title: "Die Ernährungspyramide", t3_text: "Die Pyramide zeigt, was und wie viel wir essen sollten. Die Basis bilden Lebensmittel, von denen wir am meisten essen sollen.",
    t3_b1: "Basis (am meisten): Wasser, Gemüse, Obst, Vollkornprodukte.", t3_b2: "Mitte (mäßig): Milchprodukte, Fleisch, Fisch.", t3_b3: "Spitze (am wenigsten): Süßigkeiten, zuckerhaltige Getränke, Fette.",
    t3_inst: "Gesund oder ungesund? Sortiere!",
    t3_bucket_jo: "Gesund (Viel)", t3_bucket_rossz: "Vermeiden (Wenig)",
    t3_item_j1: "Apfel und Karotte", t3_item_j2: "Wasser", t3_item_r1: "Süße Cola", t3_item_r2: "Chips",
    t3_q: "Wovon sollten wir laut der Pyramide am wenigsten essen?", t3_q_a: "Süßigkeiten und Fette", t3_q_b: "Gemüse", t3_q_c: "Obst", t3_q_d: "Wasser",

    t4_title: "Wasser und Vitamine", t4_text: "Unser Körper besteht zu mehr als der Hälfte aus Wasser! Vitamine und Mineralstoffe sind für das Immunsystem unerlässlich.",
    t4_b1: "Wasser: transportiert Nährstoffe und kühlt (Schwitzen).", t4_b2: "Vitamin C: schützt das Immunsystem (Zitrusfrüchte).", t4_b3: "Calcium: stärkt Knochen und Zähne (Milchprodukte).",
    t4_inst: "Woraus besteht der größte Teil unseres Körpers?", t4_gap_sentence: "Unser Körper besteht größtenteils aus {gap}.",
    t4_c1: "Wasser", t4_c2: "Zucker", t4_c3: "Knochen",
    t4_q: "Warum ist Wasser für den Körper so wichtig?", t4_q_a: "Es transportiert Nährstoffe", t4_q_b: "Es gibt Energie zum Rennen", t4_q_c: "Es baut Fett auf", t4_q_d: "Es lässt Knochen wachsen",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über gesunde Ernährung!",
    t5_b1: "Protein baut auf, Kohlenhydrate geben Energie.", t5_b2: "Viel Gemüse, wenig Süßes.", t5_b3: "Wasser ist lebensnotwendig.",
    t5_inst: "Was enthalten Gemüse und Obst?", t5_gap_sentence2: "Gemüse und Obst enthalten viele {gap}.",
    t5_c51: "Vitamine", t5_c52: "Fette", t5_c53: "Colas",
    t5_q: "Welche Aussage über gesunde Ernährung ist WAHR?", t5_q_a: "Man sollte viel Gemüse essen und genug Wasser trinken.", t5_q_b: "Man darf nur Kohlenhydrate essen.", t5_q_c: "Fette sind die Hauptbausteine des Körpers.", t5_q_d: "Zucker ist das gesündeste Essen.",
  },
  ro: {
    explorer_title: "Nutriție Sănătoasă",
    t1_title: "Cei trei Nutrienți Principali", t1_text: "Hrana noastră este formată din trei grupe de nutrienți: proteine, carbohidrați și grăsimi. Fiecare are un rol diferit.",
    t1_b1: "Proteine: cărămizile corpului (ex. carne, ouă, lapte).", t1_b2: "Carbohidrați: surse rapide de energie (ex. pâine, paste).", t1_b3: "Grăsimi: energie de rezervă și izolare (ex. ulei, unt).",
    t1_inst: "Potrivește nutrientul cu rolul său!",
    t1_l1: "Proteine", t1_r1: "Material de construcție (mușchi)", t1_l2: "Carbohidrați", t1_r2: "Energie rapidă", t1_l3: "Grăsimi", t1_r3: "Energie de rezervă",
    t1_q: "Care nutrient este cel mai important material de construcție al corpului?", t1_q_a: "Proteina", t1_q_b: "Carbohidratul", t1_q_c: "Grăsimea", t1_q_d: "Zahărul",

    t2_title: "Drumul Digestiei", t2_text: "În timpul digestiei, corpul descompune hrana în bucăți mici, astfel încât celulele să poată absorbi nutrienții.",
    t2_b1: "Gura: mestecatul și saliva încep descompunerea.", t2_b2: "Stomacul: folosește acizi pentru a descompune proteinele.", t2_b3: "Intestinul subțire: nutrienții sunt absorbiți în sânge.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Stomacul", t2_w2: "digeră", t2_w3: "toată", t2_w4: "hrana", t2_w5: "consumată.",
    t2_q: "Unde sunt absorbiți nutrienții în sânge?", t2_q_a: "În intestinul subțire", t2_q_b: "În stomac", t2_q_c: "În cavitatea bucală", t2_q_d: "În esofag",

    t3_title: "Piramida Alimentară", t3_text: "Piramida arată ce și cât ar trebui să mâncăm. Baza este formată din alimentele din care ar trebui să consumăm cel mai mult.",
    t3_b1: "Baza (cel mai mult): apă, legume, fructe, cereale integrale.", t3_b2: "Mijloc (moderat): lactate, carne, pește.", t3_b3: "Vârful (cel mai puțin): dulciuri, sucuri, grăsimi.",
    t3_inst: "Sănătos sau nesănătos pentru consum zilnic? Sortează-le!",
    t3_bucket_jo: "Sănătos (Mult)", t3_bucket_rossz: "De evitat (Puțin)",
    t3_item_j1: "Măr și morcov", t3_item_j2: "Apă", t3_item_r1: "Suc dulce", t3_item_r2: "Chipsuri",
    t3_q: "Din ce ar trebui să consumăm cel mai puțin conform piramidei?", t3_q_a: "Dulciuri și grăsimi", t3_q_b: "Legume", t3_q_c: "Fructe", t3_q_d: "Apă",

    t4_title: "Apa și Vitaminele", t4_text: "Peste jumătate din corpul nostru este apă! Vitaminele și mineralele sunt esențiale pentru funcționarea sistemului imunitar.",
    t4_b1: "Apa: transportă nutrienții și răcește corpul (transpirație).", t4_b2: "Vitamina C: protejează imunitatea (citrice, ardei).", t4_b3: "Calciu: întărește oasele și dinții (lactate).",
    t4_inst: "Din ce este formată cea mai mare parte a corpului nostru?", t4_gap_sentence: "Corpul nostru este format majoritar din {gap}.",
    t4_c1: "apă", t4_c2: "zahăr", t4_c3: "oase",
    t4_q: "De ce este importantă apa pentru corpul nostru?", t4_q_a: "Transportă nutrienții", t4_q_b: "Ne dă energie pentru alergat", t4_q_c: "Construiește grăsimea", t4_q_d: "Face să crească oasele",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre nutriția sănătoasă!",
    t5_b1: "Proteinele construiesc, carbohidrații dau energie.", t5_b2: "Multe legume, puține dulciuri.", t5_b3: "Apa este esențială pentru viață.",
    t5_inst: "Ce conțin legumele și fructele?", t5_gap_sentence2: "Legumele și fructele conțin multe {gap}.",
    t5_c51: "vitamine", t5_c52: "grăsimi", t5_c53: "sucuri",
    t5_q: "Care afirmație este ADEVĂRATĂ despre nutriția sănătoasă?", t5_q_a: "Trebuie să mănânci multe legume și să bei suficientă apă.", t5_q_b: "Trebuie să mănânci doar carbohidrați.", t5_q_c: "Grăsimile sunt principalele cărămizi ale corpului.", t5_q_d: "Zahărul este cea mai sănătoasă mâncare.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
    svg: (lang) => <DigestiveSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
      instruction: "t2_inst",
      hint1: "t2_b2",
      hint2: "t2_b3",
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
    svg: (lang) => <NutritionPyramidSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "jo", label: "t3_bucket_jo" },
        { id: "rossz", label: "t3_bucket_rossz" },
      ],
      items: [
        { text: "t3_item_j1", bucketId: "jo" },
        { text: "t3_item_r1", bucketId: "rossz" },
        { text: "t3_item_j2", bucketId: "jo" },
        { text: "t3_item_r2", bucketId: "rossz" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b3",
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0,
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b2",
      hint2: "t5_b1",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🍎",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const NutritionExplorer = memo(function NutritionExplorer({
  color = "#F59E0B", // Borostyánsárga az ételek, energia, vitaminok miatt
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={5} 
      explorerId="bio_k5_nutrition" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default NutritionExplorer;
