"use client";
// ReproductionExplorer — Island i7: Human Reproduction & Development Grade 8
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Gametes, fertilization, embryonic development, sex determination (educational & age-appropriate)

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Gametes
    r1_title: "Gametes: Sex Cells",
    r1_text: "Sperm and egg cells are specialized sex cells called gametes. They are different from body cells.",
    r1_fact1: "Gametes are haploid: they contain 23 chromosomes (half the normal number)",
    r1_fact2: "Body cells are diploid: they contain 46 chromosomes (23 pairs)",
    r1_fact3: "Sperm cells: small, mobile, produced in millions in the testes",
    r1_fact4: "Egg cells: larger, released monthly from the ovaries, survives 12-24 hours",

    // Round 2: Fertilization
    r2_title: "Fertilization: Two Become One",
    r2_text: "When a sperm cell and egg cell meet, they fuse to form a zygote — the first cell of a new human.",
    r2_fact1: "Fertilization usually happens in the fallopian tube",
    r2_fact2: "Sperm penetrates the egg's membrane and nucleus fuses with the egg nucleus",
    r2_fact3: "The zygote now has 46 chromosomes (diploid) — half from each parent",
    r2_fact4: "Cell division begins immediately after fertilization",

    // Round 3: Embryonic Development
    r3_title: "From Zygote to Fetus: Stages of Growth",
    r3_text: "After fertilization, the zygote undergoes rapid cell division and develops into an embryo, then fetus.",
    r3_fact1: "Zygote: single fertilized cell",
    r3_fact2: "Morula: ball of 16-32 cells (3-4 days after fertilization)",
    r3_fact3: "Blastocyst: hollow sphere with inner cell mass (5-6 days, implants in uterus)",
    r3_fact4: "Embryo: developing organism (weeks 3-8), develops major organs",

    // Round 4: Sex Determination
    r4_title: "Boy or Girl? Chromosomes Decide",
    r4_text: "Your sex is determined by chromosomes inherited from your parents. This is called sex determination.",
    r4_fact1: "Females have two X chromosomes (XX)",
    r4_fact2: "Males have one X and one Y chromosome (XY)",
    r4_fact3: "Egg cells always carry an X chromosome",
    r4_fact4: "Sperm cells carry either X or Y — the father's sperm determines the baby's sex",

    // Round 3 MCQ
    r3_q: "At which stage does the embryo implant in the uterus?",
    r3_q_zygote: "Zygote stage",
    r3_q_embryo: "Blastocyst stage",
    r3_q_blastocyst: "Morula stage",
    r3_q_fetus: "Fetus stage",

    // Round 4 MCQ
    r4_q: "Which parent determines the baby's sex?",
    r4_q_mother: "Mother",
    r4_q_father: "Father",
    r4_q_both: "Both equally",
    r4_q_random: "Random chance",

    // Round 5: Quiz
    r5_title: "Reproduction Review",
    r5_text: "",

    // Quiz Questions (2-3 questions)
    q1_q: "How many chromosomes do gametes (sex cells) have?",
    q1_23: "23 chromosomes",
    q1_46: "46 chromosomes",
    q1_92: "92 chromosomes",
    q1_12: "12 chromosomes",

    q2_q: "What is the name of the fertilized egg cell?",
    q2_zygote: "Zygote",
    q2_embryo: "Embryo",
    q2_blastocyst: "Blastocyst",
    q2_morula: "Morula",

    q3_q: "Which parent determines the baby's sex?",
    q3_mother: "Mother (X chromosome)",
    q3_father: "Father (X or Y chromosome)",
    q3_both: "Both parents equally",
    q3_random: "It's random chance",
  },
  de: {
    r1_title: "Gameten: Geschlechtszellen",
    r1_text: "Spermien- und Eizellen sind spezialisierte Geschlechtszellen namens Gameten. Sie unterscheiden sich von Körperzellen.",
    r1_fact1: "Gameten sind haploid: Sie enthalten 23 Chromosomen (die Hälfte der normalen Anzahl)",
    r1_fact2: "Körperzellen sind diploid: Sie enthalten 46 Chromosomen (23 Paare)",
    r1_fact3: "Spermien: klein, beweglich, werden in Millionen in den Hoden produziert",
    r1_fact4: "Eizellen: größer, monatlich aus den Eierstöcken freigesetzt, überleben 12-24 Stunden",

    r2_title: "Befruchtung: Zwei Werden Eins",
    r2_text: "Wenn sich eine Spermie und eine Eizelle treffen, verschmelzen sie zu einer Zygote — die erste Zelle eines neuen Menschen.",
    r2_fact1: "Die Befruchtung findet normalerweise in der Eileiter statt",
    r2_fact2: "Die Spermie dringt in die Zellmembran der Eizelle ein und ihr Kern verschmilzt mit dem Eizellkern",
    r2_fact3: "Die Zygote hat nun 46 Chromosomen (diploid) — halb von jedem Elternteil",
    r2_fact4: "Die Zellteilung beginnt sofort nach der Befruchtung",

    r3_title: "Von der Zygote zum Fötus: Wachstumsstadien",
    r3_text: "Nach der Befruchtung durchläuft die Zygote schnelle Zellteilungen und entwickelt sich zum Embryo, dann zum Fötus.",
    r3_fact1: "Zygote: einzelne befruchtete Zelle",
    r3_fact2: "Morula: Kugel aus 16-32 Zellen (3-4 Tage nach Befruchtung)",
    r3_fact3: "Blastozyste: hohle Sphäre mit innerer Zellmasse (5-6 Tage, nistet sich in der Gebärmutter ein)",
    r3_fact4: "Embryo: sich entwickelnder Organismus (Wochen 3-8), entwickelt Hauptorgane",

    r4_title: "Junge oder Mädchen? Chromosomen Entscheiden",
    r4_text: "Dein Geschlecht wird durch Chromosomen bestimmt, die du von deinen Eltern erbst. Das nennt sich Geschlechtsbestimmung.",
    r4_fact1: "Frauen haben zwei X-Chromosomen (XX)",
    r4_fact2: "Männer haben ein X- und ein Y-Chromosom (XY)",
    r4_fact3: "Eizellen tragen immer ein X-Chromosom",
    r4_fact4: "Spermien tragen entweder X oder Y — die Spermie des Vaters bestimmt das Geschlecht des Babys",

    // Round 3 MCQ
    r3_q: "In welchem Stadium nistet sich der Embryo in der Gebärmutter ein?",
    r3_q_zygote: "Zygotenstadium",
    r3_q_embryo: "Blastozystenstadium",
    r3_q_blastocyst: "Mulastadium",
    r3_q_fetus: "Fötusstadium",

    // Round 4 MCQ
    r4_q: "Welcher Elternteil bestimmt das Geschlecht des Babys?",
    r4_q_mother: "Mutter",
    r4_q_father: "Vater",
    r4_q_both: "Beide gleich",
    r4_q_random: "Zufälliger Zufall",

    r5_title: "Fortpflanzung Wiederholung",
    r5_text: "",

    q1_q: "Wie viele Chromosomen haben Gameten (Geschlechtszellen)?",
    q1_23: "23 Chromosomen",
    q1_46: "46 Chromosomen",
    q1_92: "92 Chromosomen",
    q1_12: "12 Chromosomen",

    q2_q: "Wie heißt die befruchtete Eizelle?",
    q2_zygote: "Zygote",
    q2_embryo: "Embryo",
    q2_blastocyst: "Blastozyste",
    q2_morula: "Morula",

    q3_q: "Welcher Elternteil bestimmt das Geschlecht des Babys?",
    q3_mother: "Mutter (X-Chromosom)",
    q3_father: "Vater (X- oder Y-Chromosom)",
    q3_both: "Beide Eltern gleich",
    q3_random: "Es ist reiner Zufall",
  },
  hu: {
    r1_title: "Gaméták: Ivarsejtek",
    r1_text: "A spermium és a tojássejt speciális ivarsejtek, amelyeket gamétáknak nevezünk. Eltérnek a test sejtjeitől.",
    r1_fact1: "A gaméták haploid: 23 kromoszómát tartalmaznak (a normális szám fele)",
    r1_fact2: "A testsejtek diploidok: 46 kromoszómát tartalmaznak (23 pár)",
    r1_fact3: "Spermiumok: kicsik, mozgathatóak, milliók után termelődnek a heréekben",
    r1_fact4: "Tojássejtek: nagyobbak, havonta szabadulnak fel a petefészkekből, 12-24 órán belül meghalnak",

    r2_title: "Megtermékenyítés: Kettőből Egy",
    r2_text: "Amikor egy spermium és egy tojássejt találkoznak, összeolvadnak egy zigótává — egy új ember első sejtje.",
    r2_fact1: "A megtermékenyítés általában a petevezetékben történik",
    r2_fact2: "A spermium behatol a tojássejt membránjába, és a magja összeolvad a tojássejt magjával",
    r2_fact3: "A zigóta most 46 kromoszómát tartalmaz (diploid) — fele az egyik szülőtől, fele a másiktól",
    r2_fact4: "A sejtoszlás azonnal megkezdődik a megtermékenyítés után",

    r3_title: "A Zigótától a Magzatig: Növekedési Szakaszok",
    r3_text: "A megtermékenyítés után a zigóta gyors sejtosztálokon megy keresztül, és embrióvá, majd magzattá fejlődik.",
    r3_fact1: "Zigóta: egyetlen megtermékenyített sejt",
    r3_fact2: "Morula: 16-32 sejtből álló gömb (3-4 nappal a megtermékenyítés után)",
    r3_fact3: "Blasztociszta: üreges gömb belső sejttömeggel (5-6 nap, beépül az anyaméhbe)",
    r3_fact4: "Embrió: fejlődő organizmus (3-8 hetek), kifejleszti a főbb szerveket",

    r4_title: "Fiú vagy Lány? A Kromoszómák Döntenek",
    r4_text: "Az ivadod a szüleidtől örökölt kromoszómák határozzák meg. Ezt nemek meghatározásának nevezzük.",
    r4_fact1: "A nők két X-kromoszómát hordoznak (XX)",
    r4_fact2: "A férfiak egy X- és egy Y-kromoszómát hordoznak (XY)",
    r4_fact3: "A tojássejtek mindig X-kromoszómát hordoznak",
    r4_fact4: "A spermiumok vagy X vagy Y-t hordoznak — az apa spermiumja határozza meg a baba nemét",

    // Round 3 MCQ
    r3_q: "Melyik szakaszban ültetődik be az embrió az anyaméhbe?",
    r3_q_zygote: "Zigóta szakasz",
    r3_q_embryo: "Blasztociszta szakasz",
    r3_q_blastocyst: "Morula szakasz",
    r3_q_fetus: "Magzat szakasz",

    // Round 4 MCQ
    r4_q: "Melyik szülő határozza meg a baba nemét?",
    r4_q_mother: "Anya",
    r4_q_father: "Apa",
    r4_q_both: "Mindkettő egyenlően",
    r4_q_random: "Véletlen esély",

    r5_title: "Szaporodás Áttekintés",
    r5_text: "",

    q1_q: "Hány kromoszómát tartalmaznak a gaméták (ivarsejtek)?",
    q1_23: "23 kromoszóma",
    q1_46: "46 kromoszóma",
    q1_92: "92 kromoszóma",
    q1_12: "12 kromoszóma",

    q2_q: "Mi a neve a megtermékenyített tojássejtnek?",
    q2_zygote: "Zigóta",
    q2_embryo: "Embrió",
    q2_blastocyst: "Blasztociszta",
    q2_morula: "Morula",

    q3_q: "Melyik szülő határozza meg a baba nemét?",
    q3_mother: "Anya (X-kromoszóma)",
    q3_father: "Apa (X- vagy Y-kromoszóma)",
    q3_both: "Mindkét szülő egyenlően",
    q3_random: "Ez véletlen esély",
  },
  ro: {
    r1_title: "Gameți: Celule Sexuale",
    r1_text: "Spermatozoizii și celulele de ou sunt celule sexuale specializate numite gameți. Se diferențiază de celulele corpului.",
    r1_fact1: "Gameții sunt haploid: conțin 23 de cromozomi (jumătate din numărul normal)",
    r1_fact2: "Celulele corpului sunt diploid: conțin 46 de cromozomi (23 de perechi)",
    r1_fact3: "Spermatozoizi: mici, mobili, produși în milioane în testiculele",
    r1_fact4: "Celule de ou: mai mari, eliberate lunar din ovar, supraviețuiesc 12-24 de ore",

    r2_title: "Fecundare: Doi Devin Unu",
    r2_text: "Când o celulă de spermă și o celulă de ou se întâlnesc, se fuzionează pentru a forma o zigotă — prima celulă a unui om nou.",
    r2_fact1: "Fecundarea are loc de obicei în trompele uterine",
    r2_fact2: "Spermatozoizii pătrund în membrana celulei de ou și nucleul acestuia se fuzionează cu nucleul oului",
    r2_fact3: "Zigota are acum 46 de cromozomi (diploid) — jumătate de la fiecare părinte",
    r2_fact4: "Diviziunea celulară începe imediat după fecundare",

    r3_title: "De la Zigotă la Făt: Etapele Creșterii",
    r3_text: "După fecundare, zigota suferă diviziuni celulare rapide și se dezvoltă într-un embrion, apoi în făt.",
    r3_fact1: "Zigota: celulă unic fecundată",
    r3_fact2: "Morula: sferă din 16-32 de celule (3-4 zile după fecundare)",
    r3_fact3: "Blastocistă: sferă goală cu masă celulară internă (5-6 zile, se implantează în uter)",
    r3_fact4: "Embrion: organism în dezvoltare (săptămânile 3-8), dezvoltă organe majore",

    r4_title: "Băiat sau Fată? Cromozomii Decid",
    r4_text: "Sexul tău este determinat de cromozomii moștenitori de la părinții tăi. Aceasta se numește determinarea sexului.",
    r4_fact1: "Femeile au doi cromozomi X (XX)",
    r4_fact2: "Bărbații au un cromozom X și un cromozom Y (XY)",
    r4_fact3: "Celulele de ou poartă întotdeauna un cromozom X",
    r4_fact4: "Spermatozoizii poartă fie X, fie Y — sperma tatălui determină sexul copilului",

    // Round 3 MCQ
    r3_q: "În ce etapă se implantează embrionul în uter?",
    r3_q_zygote: "Etapa zigotă",
    r3_q_embryo: "Etapa blastocistă",
    r3_q_blastocyst: "Etapa morula",
    r3_q_fetus: "Etapa făt",

    // Round 4 MCQ
    r4_q: "Care părinte determină sexul copilului?",
    r4_q_mother: "Mama",
    r4_q_father: "Tata",
    r4_q_both: "Ambii în mod egal",
    r4_q_random: "Întâmplare aleatorie",

    r5_title: "Recapitulare Reproducere",
    r5_text: "",

    q1_q: "Câți cromozomi au gameții (celulele sexuale)?",
    q1_23: "23 de cromozomi",
    q1_46: "46 de cromozomi",
    q1_92: "92 de cromozomi",
    q1_12: "12 cromozomi",

    q2_q: "Care este numele celulei fecundate?",
    q2_zygote: "Zigotă",
    q2_embryo: "Embrion",
    q2_blastocyst: "Blastocistă",
    q2_morula: "Morula",

    q3_q: "Care părinte determină sexul copilului?",
    q3_mother: "Mama (cromozom X)",
    q3_father: "Tata (cromozom X sau Y)",
    q3_both: "Ambii părinți în mod egal",
    q3_random: "Este o întâmplare aleatorie",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (placeholder shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

const SVG_R1 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Sperm cell */}
    <circle cx="40" cy="50" r="6" fill="#3B82F6" opacity="0.8" />
    <line x1="46" y1="50" x2="80" y2="50" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
    {/* Egg cell (larger) */}
    <circle cx="160" cy="50" r="20" fill="#EC4899" opacity="0.8" />
    <circle cx="160" cy="50" r="14" fill="#EC4899" opacity="0.4" />
    {/* Chromosome count label area */}
    <text x="40" y="100" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold" opacity="0.7">
      23
    </text>
    <text x="160" y="100" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold" opacity="0.7">
      23
    </text>
  </svg>
);

const SVG_R2 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Sperm approaching egg */}
    <circle cx="30" cy="80" r="5" fill="#3B82F6" opacity="0.8" />
    <line x1="35" y1="80" x2="60" y2="80" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
    {/* Egg cell */}
    <circle cx="140" cy="80" r="25" fill="#EC4899" opacity="0.6" />
    {/* Arrow showing fusion */}
    <path d="M 70 80 L 110 80" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#F59E0B" />
      </marker>
    </defs>
    {/* Result: zygote */}
    <circle cx="190" cy="80" r="22" fill="#10B981" opacity="0.8" />
    <circle cx="190" cy="80" r="16" fill="#10B981" opacity="0.4" />
  </svg>
);

const SVG_R3 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Zygote */}
    <circle cx="30" cy="50" r="8" fill="#3B82F6" opacity="0.7" />
    {/* Arrow 1 */}
    <path d="M 45 50 L 65 50" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.6" />
    {/* Morula (ball of cells) */}
    <circle cx="80" cy="50" r="10" fill="#06B6D4" opacity="0.7" />
    <circle cx="75" cy="45" r="3" fill="#06B6D4" opacity="0.9" />
    <circle cx="85" cy="45" r="3" fill="#06B6D4" opacity="0.9" />
    <circle cx="75" cy="55" r="3" fill="#06B6D4" opacity="0.9" />
    <circle cx="85" cy="55" r="3" fill="#06B6D4" opacity="0.9" />
    {/* Arrow 2 */}
    <path d="M 95 50 L 115 50" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.6" />
    {/* Blastocyst (hollow sphere) */}
    <circle cx="140" cy="50" r="12" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.7" />
    <circle cx="140" cy="50" r="4" fill="#8B5CF6" opacity="0.5" />
    {/* Arrow 3 */}
    <path d="M 155 50 L 175 50" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.6" />
    {/* Embryo (more complex shape) */}
    <circle cx="200" cy="50" r="8" fill="#F59E0B" opacity="0.7" />
    <rect x="195" y="60" width="10" height="8" fill="#F59E0B" opacity="0.5" rx="1" />
  </svg>
);

const SVG_R4 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* XX (Female) */}
    <text x="50" y="60" fontSize="28" fill="#EC4899" fontWeight="bold" textAnchor="middle" opacity="0.8">
      XX
    </text>
    <text x="50" y="90" fontSize="10" fill="#EC4899" textAnchor="middle" opacity="0.6">
      Female
    </text>
    {/* XY (Male) */}
    <text x="190" y="60" fontSize="28" fill="#3B82F6" fontWeight="bold" textAnchor="middle" opacity="0.8">
      XY
    </text>
    <text x="190" y="90" fontSize="10" fill="#3B82F6" textAnchor="middle" opacity="0.6">
      Male
    </text>
    {/* Egg with X */}
    <circle cx="50" cy="120" r="6" fill="#EC4899" opacity="0.6" />
    <text x="50" y="122" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">
      X
    </text>
    {/* Sperm with X and Y */}
    <circle cx="180" cy="115" r="4" fill="#3B82F6" opacity="0.7" />
    <text x="180" y="117" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">
      X
    </text>
    <circle cx="200" cy="125" r="4" fill="#3B82F6" opacity="0.7" />
    <text x="200" y="127" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">
      Y
    </text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const REPRODUCTION_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_q_zygote", "r3_q_embryo", "r3_q_blastocyst", "r3_q_fetus"],
          answer: "r3_q_embryo",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_q_mother", "r4_q_father", "r4_q_both", "r4_q_random"],
          answer: "r4_q_father",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => null,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_23", "q1_46", "q1_92", "q1_12"],
          answer: "q1_23",
        },
        {
          question: "q2_q",
          choices: ["q2_zygote", "q2_embryo", "q2_blastocyst", "q2_morula"],
          answer: "q2_zygote",
        },
        {
          question: "q3_q",
          choices: ["q3_mother", "q3_father", "q3_both", "q3_random"],
          answer: "q3_father",
        },
      ],
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

export default function ReproductionExplorer({ color = "#EC4899", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={REPRODUCTION_DEF} color={color} lang={lang} onDone={onDone} />;
}
