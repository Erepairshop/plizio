"use client";
// SenseExplorer.tsx — Bio Island i8: Érzékszervek (K5)
// Topics: 1) Látás 2) Hallás 3) Szaglás & Ízlelés 4) Tapintás 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { EyeSvg, EarSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFE4E6" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="45" textAnchor="middle">👃</text>
        <path d="M -5,0 L 5,0" stroke="#E11D48" strokeWidth="4" strokeDasharray="2 4" />
        <text x="30" y="15" fontSize="45" textAnchor="middle">👅</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="15" fontSize="50" textAnchor="middle">✋</text>
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
        <text x="0" y="5" fontSize="25" textAnchor="middle">👁️👂👃✋👅</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#A16207" textAnchor="middle">?</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Érzékszerveink",
    // T1: Látás
    t1_title: "A látás: A szem",
    t1_text: "A szemünk a fényt érzékeli. A fény a pupillán keresztül jut be, a lencse fókuszálja, és a retinán (ideghártyán) jön létre a kép, amit a látóideg visz az agyba.",
    t1_b1: "Pupilla: szabályozza a bejutó fény mennyiségét.",
    t1_b2: "Lencse: élesre állítja a képet.",
    t1_b3: "Retina és látóideg: felfogja és továbbítja a fényt.",
    t1_inst: "Hol jön létre a kép a szemben?",
    t1_gap_sentence: "A fényérzékelő sejtek a szem {gap} találhatók.",
    t1_c1: "retináján", t1_c2: "pupilláján", t1_c3: "lencséjén",
    t1_q: "Mi továbbítja a képet a szemből az agyba?",
    t1_q_a: "A látóideg", t1_q_b: "A pupilla", t1_q_c: "A könnycsatorna", t1_q_d: "A lencse",

    // T2: Hallás
    t2_title: "A hallás: A fül",
    t2_text: "A fülünk fogja fel a hanghullámokat. A dobhártya megrezdül, a hallócsontocskák felerősítik a rezgést, a csiga pedig idegi jelekké alakítja.",
    t2_b1: "Dobhártya: átveszi a hanghullámokat a levegőből.",
    t2_b2: "Hallócsontocskák: felerősítik a rezgéseket a középfülben.",
    t2_b3: "Csiga: a belső fülben található, itt jönnek létre az idegi jelek.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "hanghullámok", t2_w3: "megrezegtetik", t2_w4: "a", t2_w5: "dobhártyát.",
    t2_q: "Mik erősítik fel a hangot a középfülben?",
    t2_q_a: "A hallócsontocskák", t2_q_b: "A csiga", t2_q_c: "A fülkagyló", t2_q_d: "A hallóideg",

    // T3: Szaglás & Ízlelés
    t3_title: "Szaglás és Ízlelés",
    t3_text: "Az orr és a nyelv a kémiai anyagokat érzékeli a levegőben és az ételekben. A két érzékszerv szorosan együttműködik az ízek felismerésében.",
    t3_b1: "Orr: az orrüreg tetején lévő szaglóhám érzékeli a szagokat.",
    t3_b2: "Nyelv: a felületén lévő ízlelőbimbók érzékelik az ízeket.",
    t3_b3: "5 alapíz: édes, sós, savanyú, keserű, umami.",
    t3_inst: "Szaglás vagy Ízlelés? Válogasd szét a szerveket!",
    t3_bucket_orr: "Orr (Szaglás)",
    t3_bucket_nye: "Nyelv (Ízlelés)",
    t3_item_o1: "Szaglóhám", t3_item_o2: "Levegő illatai",
    t3_item_n1: "Ízlelőbimbók", t3_item_n2: "Az 5 alapíz",
    t3_q: "Hol találhatóak az ízlelőbimbók?",
    t3_q_a: "A nyelven", t3_q_b: "Az orrban", t3_q_c: "A fogakon", t3_q_d: "A gyomorban",

    // T4: Tapintás
    t4_title: "A tapintás: A bőr",
    t4_text: "A bőrünk a legnagyobb érzékszervünk. Különböző receptorai vannak a tapintás, a nyomás, a hő és a fájdalom érzékelésére.",
    t4_b1: "Epidermisz (hámréteg): a bőr külső, védő rétege.",
    t4_b2: "Dermisz (irha): a középső réteg, itt találhatók az érzékelők.",
    t4_b3: "Receptorok: felfogják a hideget, meleget, nyomást és fájdalmat.",
    t4_inst: "Párosítsd a bőr részeit a jellemzőjükkel!",
    t4_l1: "Epidermisz", t4_r1: "Külső védő hámréteg",
    t4_l2: "Dermisz", t4_r2: "Középső réteg vérerekkel",
    t4_l3: "Receptorok", t4_r3: "Hő, nyomás, fájdalom érzékelése",
    t4_q: "Melyik rétegben találhatók a tapintó receptorok?",
    t4_q_a: "A dermiszben (irha)", t4_q_b: "Az epidermiszben (hám)", t4_q_c: "A zsírrétegben", t4_q_d: "A csontokban",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod az emberi érzékszervekről!",
    t5_b1: "Látás: lencse, retina, látóideg.",
    t5_b2: "Hallás: dobhártya, hallócsontok, csiga.",
    t5_b3: "Bőr: epidermisz, dermisz, receptorok.",
    t5_inst: "Mik érzékelik a hőt és a fájdalmat a bőrben?",
    t5_gap_sentence2: "A bőrben lévő {gap} érzékelik a környezet ingereit.",
    t5_c51: "receptorok", t5_c52: "lencsék", t5_c53: "ízlelőbimbók",
    t5_q: "Melyik állítás IGAZ az érzékszervekre?",
    t5_q_a: "A szaglóhám az orrban, az ízlelőbimbók a nyelven vannak.", t5_q_b: "A csiga a szemben található.", t5_q_c: "A dobhártya a fényt érzékeli.", t5_q_d: "Az epidermisz a fül része.",
  },
  en: {
    explorer_title: "Our Senses",
    t1_title: "Sight: The Eye", t1_text: "Our eyes detect light. Light enters through the pupil, is focused by the lens, and forms an image on the retina, which the optic nerve carries to the brain.",
    t1_b1: "Pupil: controls the amount of entering light.", t1_b2: "Lens: focuses the image.", t1_b3: "Retina & Optic Nerve: capture and transmit light.",
    t1_inst: "Where is the image formed in the eye?", t1_gap_sentence: "The light-sensitive cells are located on the {gap}.",
    t1_c1: "retina", t1_c2: "pupil", t1_c3: "lens",
    t1_q: "What transmits the image from the eye to the brain?", t1_q_a: "The optic nerve", t1_q_b: "The pupil", t1_q_c: "The tear duct", t1_q_d: "The lens",

    t2_title: "Hearing: The Ear", t2_text: "Our ear catches sound waves. The eardrum vibrates, the ossicles amplify it, and the cochlea turns it into nerve signals.",
    t2_b1: "Eardrum: picks up sound waves from the air.", t2_b2: "Ossicles: amplify the sound in the middle ear.", t2_b3: "Cochlea: located in the inner ear, creates nerve signals.",
    t2_inst: "Put the words in order!",
    t2_w1: "Sound", t2_w2: "waves", t2_w3: "vibrate", t2_w4: "the", t2_w5: "eardrum.",
    t2_q: "What amplifies the sound in the middle ear?", t2_q_a: "The ossicles", t2_q_b: "The cochlea", t2_q_c: "The outer ear", t2_q_d: "The auditory nerve",

    t3_title: "Smell & Taste", t3_text: "The nose and tongue detect chemicals. The olfactory epithelium is in the nose, and taste buds are on the tongue.",
    t3_b1: "Nose: olfactory epithelium detects smells.", t3_b2: "Tongue: taste buds detect flavors.", t3_b3: "5 basic tastes: sweet, salty, sour, bitter, umami.",
    t3_inst: "Smell or Taste? Sort the organs!",
    t3_bucket_orr: "Nose (Smell)", t3_bucket_nye: "Tongue (Taste)",
    t3_item_o1: "Olfactory epithelium", t3_item_o2: "Scents in the air",
    t3_item_n1: "Taste buds", t3_item_n2: "5 basic tastes",
    t3_q: "Where are taste buds located?", t3_q_a: "On the tongue", t3_q_b: "In the nose", t3_q_c: "On the teeth", t3_q_d: "In the stomach",

    t4_title: "Touch: The Skin", t4_text: "The skin is our largest sense organ. It has different receptors for touch, pressure, heat, and pain.",
    t4_b1: "Epidermis: the outer, protective layer.", t4_b2: "Dermis: the middle layer where sensors are located.", t4_b3: "Receptors: detect cold, heat, pressure, and pain.",
    t4_inst: "Match the skin parts with their features!",
    t4_l1: "Epidermis", t4_r1: "Outer protective layer", t4_l2: "Dermis", t4_r2: "Middle layer with blood vessels", t4_l3: "Receptors", t4_r3: "Detect heat, pressure, pain",
    t4_q: "In which layer are the touch receptors located?", t4_q_a: "In the dermis", t4_q_b: "In the epidermis", t4_q_c: "In the fat layer", t4_q_d: "In the bones",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about human sense organs!",
    t5_b1: "Sight: lens, retina, optic nerve.", t5_b2: "Hearing: eardrum, ossicles, cochlea.", t5_b3: "Skin: epidermis, dermis, receptors.",
    t5_inst: "What detects heat and pain in the skin?", t5_gap_sentence2: "The {gap} in the skin detect environmental stimuli.",
    t5_c51: "receptors", t5_c52: "lenses", t5_c53: "taste buds",
    t5_q: "Which statement is TRUE about sense organs?", t5_q_a: "The olfactory epithelium is in the nose, taste buds on the tongue.", t5_q_b: "The cochlea is in the eye.", t5_q_c: "The eardrum detects light.", t5_q_d: "The epidermis is part of the ear.",
  },
  de: {
    explorer_title: "Unsere Sinnesorgane",
    t1_title: "Sehen: Das Auge", t1_text: "Unsere Augen nehmen Licht wahr. Licht tritt durch die Pupille ein, die Linse fokussiert es, und auf der Netzhaut entsteht das Bild.",
    t1_b1: "Pupille: regelt den Lichteinfall.", t1_b2: "Linse: stellt das Bild scharf.", t1_b3: "Netzhaut & Sehnerv: empfangen und leiten das Licht weiter.",
    t1_inst: "Wo entsteht das Bild im Auge?", t1_gap_sentence: "Die Lichtsinneszellen befinden sich auf der {gap}.",
    t1_c1: "Netzhaut", t1_c2: "Pupille", t1_c3: "Linse",
    t1_q: "Was leitet das Bild vom Auge zum Gehirn?", t1_q_a: "Der Sehnerv", t1_q_b: "Die Pupille", t1_q_c: "Der Tränenkanal", t1_q_d: "Die Linse",

    t2_title: "Hören: Das Ohr", t2_text: "Unser Ohr fängt Schallwellen auf. Das Trommelfell vibriert, die Gehörknöchelchen verstärken es, die Schnecke wandelt es um.",
    t2_b1: "Trommelfell: nimmt Schallwellen aus der Luft auf.", t2_b2: "Gehörknöchelchen: verstärken den Schall im Mittelohr.", t2_b3: "Schnecke: im Innenohr, erzeugt die Nervensignale.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Schallwellen", t2_w2: "bringen", t2_w3: "das", t2_w4: "Trommelfell", t2_w5: "zum Vibrieren.",
    t2_q: "Was verstärkt den Schall im Mittelohr?", t2_q_a: "Die Gehörknöchelchen", t2_q_b: "Die Schnecke", t2_q_c: "Die Ohrmuschel", t2_q_d: "Der Hörnerv",

    t3_title: "Riechen & Schmecken", t3_text: "Nase und Zunge erkennen chemische Stoffe. Die Riechschleimhaut ist in der Nase, die Geschmacksknospen auf der Zunge.",
    t3_b1: "Nase: Riechschleimhaut erkennt Gerüche.", t3_b2: "Zunge: Geschmacksknospen erkennen Geschmäcker.", t3_b3: "5 Grundgeschmäcker: süß, salzig, sauer, bitter, umami.",
    t3_inst: "Geruch oder Geschmack? Sortiere die Organe!",
    t3_bucket_orr: "Nase (Riechen)", t3_bucket_nye: "Zunge (Schmecken)",
    t3_item_o1: "Riechschleimhaut", t3_item_o2: "Düfte in der Luft",
    t3_item_n1: "Geschmacksknospen", t3_item_n2: "5 Grundgeschmäcker",
    t3_q: "Wo befinden sich die Geschmacksknospen?", t3_q_a: "Auf der Zunge", t3_q_b: "In der Nase", t3_q_c: "An den Zähnen", t3_q_d: "Im Magen",

    t4_title: "Tasten: Die Haut", t4_text: "Die Haut ist unser größtes Sinnesorgan. Sie hat Rezeptoren für Berührung, Druck, Wärme und Schmerz.",
    t4_b1: "Epidermis (Oberhaut): äußere, schützende Schicht.", t4_b2: "Dermis (Lederhaut): mittlere Schicht, enthält die Sensoren.", t4_b3: "Rezeptoren: erfassen Kälte, Wärme, Druck und Schmerz.",
    t4_inst: "Verbinde die Hautschichten mit ihren Eigenschaften!",
    t4_l1: "Epidermis", t4_r1: "Äußere Schutzschicht", t4_l2: "Dermis", t4_r2: "Mittlere Schicht mit Blutgefäßen", t4_l3: "Rezeptoren", t4_r3: "Erkennen Wärme, Druck, Schmerz",
    t4_q: "In welcher Schicht befinden sich die Tast-Rezeptoren?", t4_q_a: "In der Dermis", t4_q_b: "In der Epidermis", t4_q_c: "In der Fettschicht", t4_q_d: "In den Knochen",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die menschlichen Sinnesorgane!",
    t5_b1: "Sehen: Linse, Netzhaut, Sehnerv.", t5_b2: "Hören: Trommelfell, Gehörknöchelchen, Schnecke.", t5_b3: "Haut: Epidermis, Dermis, Rezeptoren.",
    t5_inst: "Was spürt Wärme und Schmerz in der Haut?", t5_gap_sentence2: "Die {gap} in der Haut nehmen Umweltreize wahr.",
    t5_c51: "Rezeptoren", t5_c52: "Linsen", t5_c53: "Geschmacksknospen",
    t5_q: "Welche Aussage über Sinnesorgane ist WAHR?", t5_q_a: "Die Riechschleimhaut ist in der Nase, Geschmacksknospen auf der Zunge.", t5_q_b: "Die Schnecke befindet sich im Auge.", t5_q_c: "Das Trommelfell nimmt Licht wahr.", t5_q_d: "Die Epidermis ist Teil des Ohres.",
  },
  ro: {
    explorer_title: "Organele Noastre de Simț",
    t1_title: "Văzul: Ochiul", t1_text: "Ochii noștri detectează lumina. Lumina intră prin pupilă, este focalizată de cristalin, iar pe retină se formează imaginea pe care nervul optic o duce la creier.",
    t1_b1: "Pupila: reglează cantitatea de lumină care intră.", t1_b2: "Cristalinul: focalizează imaginea.", t1_b3: "Retina și nervul optic: captează și transmit lumina.",
    t1_inst: "Unde se formează imaginea în ochi?", t1_gap_sentence: "Celulele sensibile la lumină se află pe {gap}.",
    t1_c1: "retină", t1_c2: "pupilă", t1_c3: "cristalin",
    t1_q: "Ce transmite imaginea de la ochi la creier?", t1_q_a: "Nervul optic", t1_q_b: "Pupila", t1_q_c: "Canalul lacrimal", t1_q_d: "Cristalinul",

    t2_title: "Auzul: Urechea", t2_text: "Urechea noastră captează undele sonore. Timpanul vibrează, oscioarele amplifică vibrația, iar cohleea o transformă în semnale nervoase.",
    t2_b1: "Timpanul: preia undele sonore din aer.", t2_b2: "Oscioarele: amplifică sunetul în urechea medie.", t2_b3: "Cohleea: în urechea internă, creează semnale nervoase.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Undele", t2_w2: "sonore", t2_w3: "fac", t2_w4: "timpanul", t2_w5: "să vibreze.",
    t2_q: "Ce amplifică sunetul în urechea medie?", t2_q_a: "Oscioarele", t2_q_b: "Cohleea", t2_q_c: "Urechea externă", t2_q_d: "Nervul auditiv",

    t3_title: "Mirosul și Gustul", t3_text: "Nasul și limba detectează substanțele chimice. Epiteliul olfactiv este în nas, iar papilele gustative sunt pe limbă.",
    t3_b1: "Nasul: epiteliul olfactiv detectează mirosurile.", t3_b2: "Limba: papilele gustative detectează aromele.", t3_b3: "5 gusturi de bază: dulce, sărat, acru, amar, umami.",
    t3_inst: "Miros sau Gust? Sortează organele!",
    t3_bucket_orr: "Nas (Miros)", t3_bucket_nye: "Limbă (Gust)",
    t3_item_o1: "Epiteliu olfactiv", t3_item_o2: "Mirosuri în aer",
    t3_item_n1: "Papile gustative", t3_item_n2: "5 gusturi de bază",
    t3_q: "Unde se află papilele gustative?", t3_q_a: "Pe limbă", t3_q_b: "În nas", t3_q_c: "Pe dinți", t3_q_d: "În stomac",

    t4_title: "Pipăitul: Pielea", t4_text: "Pielea este cel mai mare organ de simț. Are receptori pentru atingere, presiune, căldură și durere.",
    t4_b1: "Epidermă: stratul exterior, protector.", t4_b2: "Dermă: stratul de mijloc unde se află senzorii.", t4_b3: "Receptori: detectează frigul, căldura, presiunea și durerea.",
    t4_inst: "Potrivește părțile pielii cu caracteristicile lor!",
    t4_l1: "Epidermă", t4_r1: "Strat exterior protector", t4_l2: "Dermă", t4_r2: "Strat mijlociu cu vase de sânge", t4_l3: "Receptori", t4_r3: "Detectează căldura, presiunea, durerea",
    t4_q: "În ce strat se află receptorii tactili?", t4_q_a: "În dermă", t4_q_b: "În epidermă", t4_q_c: "În stratul de grăsime", t4_q_d: "În oase",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre organele de simț umane!",
    t5_b1: "Văz: cristalin, retină, nerv optic.", t5_b2: "Auz: timpan, oscioare, cohlee.", t5_b3: "Piele: epidermă, dermă, receptori.",
    t5_inst: "Ce simte căldura și durerea în piele?", t5_gap_sentence2: "{gap} din piele percep stimulii din mediu.",
    t5_c51: "Receptorii", t5_c52: "Cristalinele", t5_c53: "Papilele gustative",
    t5_q: "Care afirmație este ADEVĂRATĂ despre organele de simț?", t5_q_a: "Epiteliul olfactiv e în nas, papilele gustative pe limbă.", t5_q_b: "Cohleea se află în ochi.", t5_q_c: "Timpanul detectează lumina.", t5_q_d: "Epiderma este o parte a urechii.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <EyeSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_b3",
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
    svg: (lang) => <EarSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "orr", label: "t3_bucket_orr" },
        { id: "nye", label: "t3_bucket_nye" },
      ],
      items: [
        { text: "t3_item_o1", bucketId: "orr" },
        { text: "t3_item_n1", bucketId: "nye" },
        { text: "t3_item_o2", bucketId: "orr" },
        { text: "t3_item_n2", bucketId: "nye" },
      ],
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
      ],
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
      hint1: "t5_b3",
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
  icon: "👁️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SenseExplorer = memo(function SenseExplorer({
  color = "#4F46E5", // Indigo szín az idegrendszer/érzékelés tematikájához
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
      explorerId="bio_k5_senses" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SenseExplorer;
