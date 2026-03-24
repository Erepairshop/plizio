"use client";
// SexDeterminationExplorer.tsx — Bio Island i5: Nemek meghatározása (K8)
// Topics: 1) Nemi kromoszómák 2) Az apa szerepe 3) Nemi jellegek 4) Fogamzásgátlás 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { SexDeterminationSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="40" fontWeight="bold" fill="#2563EB" textAnchor="middle">X</text>
        <text x="0" y="10" fontSize="30" fill="#64748B" textAnchor="middle">&</text>
        <text x="40" y="10" fontSize="40" fontWeight="bold" fill="#E11D48" textAnchor="middle">Y</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#16A34A" strokeWidth="3" />
        <path d="M -20,0 L 20,0 M 0,-20 L 0,20" stroke="#16A34A" strokeWidth="4" />
        <text x="0" y="55" fontSize="14" fill="#15803D" fontWeight="bold" textAnchor="middle">SAFETY</text>
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
        <text x="-15" y="15" fontSize="30" textAnchor="middle">⚖️</text>
        <text x="20" y="5" fontSize="30" textAnchor="middle">🧬</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nemek meghatározása",
    // T1: Nemi kromoszómák (Drag-to-bucket)
    t1_title: "XX és XY",
    t1_text: "Az emberi sejtekben 23 pár kromoszóma van. Az utolsó pár, a 23. határozza meg az egyén biológiai nemét.",
    t1_b1: "Nők: két darab X kromoszómával rendelkeznek (XX).",
    t1_b2: "Férfiak: egy X és egy Y kromoszómával rendelkeznek (XY).",
    t1_b3: "Az Y kromoszóma jelenléte indítja be a férfias fejlődést.",
    t1_inst: "Melyik kombináció melyik nemet jelenti? Válogasd szét!",
    t1_bucket_no: "Biológiai Nő",
    t1_bucket_ferfi: "Biológiai Férfi",
    t1_item_xx: "XX kromoszómapár", t1_item_xy: "XY kromoszómapár",
    t1_q: "Hányadik kromoszómapár felelős a nem meghatározásáért az embernél?",
    t1_q_a: "A 23. pár", t1_q_b: "Az 1. pár", t1_q_c: "Minden pár", t1_q_d: "Egyik sem",

    // T2: Az apa szerepe (Gap-fill)
    t2_title: "Ki dönti el a nemet?",
    t2_text: "A petesejt mindig X kromoszómát tartalmaz. A spermiumok fele X, fele Y kromoszómát hordoz, így a megtermékenyítő hímivarsejten múlik az utód neme.",
    t2_b1: "Anya (XX) -> csak X-et adhat.",
    t2_b2: "Apa (XY) -> X-et vagy Y-t adhat.",
    t2_b3: "X + X = lány, X + Y = fiú.",
    t2_inst: "Egészítsd ki a mondatot!",
    t2_gap_sentence: "Az utód biológiai nemét a megtermékenyítő {gap} típusa határozza meg.",
    t2_c1: "spermium", t2_c2: "petesejt", t2_c3: "hormon",
    t2_q: "Milyen kromoszómát kaphat az utód az édesanyjától?",
    t2_q_a: "Csak X kromoszómát", t2_q_b: "Csak Y kromoszómát", t2_q_c: "X vagy Y kromoszómát", t2_q_d: "Z kromoszómát",

    // T3: Nemi jellegek (Match-pairs)
    t3_title: "Elsődleges és másodlagos jellegek",
    t3_text: "A nemi különbségek két csoportra oszthatók: azokra, amikkel születünk, és azokra, amik a pubertás alatt alakulnak ki.",
    t3_b1: "Elsődleges: a külső és belső ivarszervek.",
    t3_b2: "Másodlagos: arcszőrzet, mellek, mutálás, csípőszélesség.",
    t3_b3: "Ezeket a hormonok (tesztoszteron, ösztrogén) irányítják.",
    t3_inst: "Párosítsd a jelleget a típusával!",
    t3_l1: "Ivarszervek", t3_r1: "Elsődleges nemi jelleg",
    t3_l2: "Szakáll / Mellek", t3_r2: "Másodlagos nemi jelleg",
    t3_l3: "Hormonok", t3_r3: "A fejlődés irányítói",
    t2_q_3: "Melyik szakaszban alakulnak ki a másodlagos nemi jellegek?",
    t3_q_a: "Serdülőkorban (Pubertás)", t3_q_b: "Csecsemőkorban", t3_q_c: "Magzati korban", t3_q_d: "Öregkorban",

    // T4: Fogamzásgátlás
    t4_title: "Felelős családtervezés",
    t4_text: "A fogamzásgátlás célja a nem kívánt terhesség megelőzése. Számos módszer létezik, melyek hatékonysága és működése eltérő.",
    t4_b1: "Mechanikai: pl. óvszer (véd a fertőzésektől is!).",
    t4_b2: "Hormonális: tabletták, amik gátolják a peteérést.",
    t4_b3: "Kémiai: spermicid anyagok.",
    t4_inst: "Melyik eszköz véd a nemi úton terjedő betegségek ellen is?",
    t4_gap_sentence2: "A fertőzések ellen leghatékonyabb védekezés az {gap} használata.",
    t4_c41: "óvszer", t4_c42: "vitamin", t4_c43: "szappan",
    t4_q: "Hogyan működnek a fogamzásgátló tabletták?",
    t4_q_a: "Hormonokkal gátolják a peteérést", t4_q_b: "Elpusztítják a vitaminokat", t4_q_c: "Segítik a beágyazódást", t4_q_d: "Nincs hatásuk",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Átismételtük a nemek genetikáját és a védekezés alapjait. Készen állsz a tesztre?",
    t5_b1: "XX = nő, XY = férfi.",
    t5_b2: "A spermium dönti el az utód nemét.",
    t5_b3: "A biztonságos szex alapja a védekezés.",
    t5_inst: "Melyik kromoszóma 'férfiasító' hatású?",
    t5_gap_sentence3: "A férfiak sejtjeiben az X mellett egy {gap} kromoszóma is található.",
    t5_c51: "Y", t5_c52: "A", t5_c53: "B",
    t5_q: "Melyik állítás IGAZ az óvszerre?",
    t5_q_a: "Véd a terhesség és a nemi betegségek ellen is.", t5_q_b: "Csak a lányok használhatják.", t5_q_c: "Gátolja a növekedést.", t5_q_d: "Egyáltalán nem hatékony.",
  },
  en: {
    explorer_title: "Sex Determination",
    t1_title: "XX and XY", t1_text: "Humans have 23 pairs of chromosomes. The 23rd pair determines the biological sex.",
    t1_b1: "Females: have two X chromosomes (XX).", t1_b2: "Males: have one X and one Y chromosome (XY).", t1_b3: "The Y chromosome triggers male development.",
    t1_inst: "Which combination belongs to which sex? Sort them!",
    t1_bucket_no: "Biological Female", t1_bucket_ferfi: "Biological Male",
    t1_item_xx: "XX pair", t1_item_xy: "XY pair",
    t1_q: "Which chromosome pair is responsible for sex determination in humans?",
    t1_q_a: "The 23rd pair", t1_q_b: "The 1st pair", t1_q_c: "Every pair", t1_q_d: "None",

    t2_title: "The Father's Role", t2_text: "The egg always contains an X. Half of the sperm carry X, half carry Y, so the sperm determines the sex.",
    t2_b1: "Mother (XX) -> can only give X.", t2_b2: "Father (XY) -> can give X or Y.", t2_b3: "X + X = girl, X + Y = boy.",
    t2_inst: "Complete the sentence!", t2_gap_sentence: "The sex of the offspring is determined by the type of {gap}.",
    t2_c1: "sperm", t2_c2: "egg", t2_c3: "hormone",
    t2_q: "What chromosome can the offspring receive from the mother?",
    t2_q_a: "Only X", t2_q_b: "Only Y", t2_q_c: "X or Y", t2_q_d: "Z",

    t3_title: "Sexual Characteristics", t3_text: "Differences are primary (present at birth) or secondary (develop during puberty).",
    t3_b1: "Primary: internal and external reproductive organs.", t3_b2: "Secondary: facial hair, breasts, deepening voice.", t3_b3: "Controlled by testosterone and estrogen.",
    t3_inst: "Match the characteristic with its type!",
    t3_l1: "Reproductive organs", t3_r1: "Primary characteristic",
    t3_l2: "Beard / Breasts", t3_r2: "Secondary characteristic",
    t3_l3: "Hormones", t3_r3: "Controllers of development",
    t3_q: "In which stage do secondary sexual characteristics develop?",
    t3_q_a: "Puberty", t3_q_b: "Infancy", t3_q_c: "Fetal stage", t3_q_d: "Old age",

    t4_title: "Contraception", t4_text: "Contraception aims to prevent unwanted pregnancy. Various methods exist.",
    t4_b1: "Mechanical: e.g., condom (also protects against STIs!).", t4_b2: "Hormonal: pills that inhibit ovulation.", t4_b3: "Chemical: spermicides.",
    t4_inst: "Which tool also protects against STDs?", t4_gap_sentence2: "The most effective protection against infections is the {gap}.",
    t4_c41: "condom", t4_c42: "vitamin", t4_c43: "soap",
    t4_q: "How do contraceptive pills work?",
    t4_q_a: "They inhibit ovulation with hormones", t4_q_b: "They kill vitamins", t4_q_c: "They help implantation", t4_q_d: "No effect",

    t5_title: "Summary Quiz", t5_text: "Ready for the final test on genetics and safety?",
    t5_b1: "XX = female, XY = male.", t5_b2: "Sperm decides the sex.", t5_b3: "Safe sex is based on protection.",
    t5_inst: "Which chromosome is 'masculinizing'?", t5_gap_sentence3: "In males, cells have a {gap} chromosome next to the X.",
    t5_c51: "Y", t5_c52: "A", t5_c53: "B",
    t5_q: "Which statement is TRUE about condoms?",
    t5_q_a: "They protect against both pregnancy and STIs.", t5_q_b: "Only girls can use them.", t5_q_c: "They inhibit growth.", t5_q_d: "They are not effective.",
  },
  de: {
    explorer_title: "Geschlechtsbestimmung",
    t1_title: "XX und XY", t1_text: "Menschen haben 23 Chromosomenpaare. Das 23. Paar bestimmt das biologische Geschlecht.",
    t1_b1: "Frauen: haben zwei X-Chromosomen (XX).", t1_b2: "Männer: haben ein X- und ein Y-Chromosom (XY).", t1_b3: "Das Y-Chromosom löst die männliche Entwicklung aus.",
    t1_inst: "Welche Kombination für welches Geschlecht? Sortiere!",
    t1_bucket_no: "Biologische Frau", t1_bucket_ferfi: "Biologischer Mann",
    t1_item_xx: "XX-Paar", t1_item_xy: "XY-Paar",
    t1_q: "Welches Chromosomenpaar bestimmt beim Menschen das Geschlecht?",
    t1_q_a: "Das 23. Paar", t1_q_b: "Das 1. Paar", t1_q_c: "Jedes Paar", t1_q_d: "Keines",

    t2_title: "Rolle des Vaters", t2_text: "Die Eizelle hat immer ein X. Spermien haben X oder Y. Das Spermium entscheidet.",
    t2_b1: "Mutter (XX) -> gibt nur X.", t2_b2: "Vater (XY) -> gibt X oder Y.", t2_b3: "X + X = Mädchen, X + Y = Junge.",
    t2_inst: "Ergänze den Satz!", t2_gap_sentence: "Das Geschlecht wird durch den Typ des {gap} bestimmt.",
    t2_c1: "Spermiums", t2_c2: "Eis", t2_c3: "Hormons",
    t2_q: "Welches Chromosom kann das Kind von der Mutter erhalten?",
    t2_q_a: "Nur X", t2_q_b: "Nur Y", t2_q_c: "X oder Y", t2_q_d: "Z",

    t3_title: "Geschlechtsmerkmale", t3_text: "Es gibt primäre (ab Geburt) und sekundäre (ab Pubertät) Merkmale.",
    t3_b1: "Primär: Fortpflanzungsorgane.", t3_b2: "Sekundär: Bartwuchs, Brüste, Stimmbruch.", t3_b3: "Gesteuert durch Testosteron und Östrogen.",
    t3_inst: "Verbinde das Merkmal mit dem Typ!",
    t3_l1: "Geschlechtsorgane", t3_r1: "Primäres Merkmal",
    t3_l2: "Bart / Brüste", t3_r2: "Sekundäres Merkmal",
    t3_l3: "Hormone", t3_r3: "Steuern die Entwicklung",
    t3_q: "Wann entwickeln sich sekundäre Geschlechtsmerkmale?",
    t3_q_a: "In der Pubertät", t3_q_b: "Im Säuglingsalter", t3_q_c: "Vor der Geburt", t3_q_d: "Im Alter",

    t4_title: "Verhütung", t4_text: "Verhütung verhindert ungewollte Schwangerschaften.",
    t4_b1: "Mechanisch: z.B. Kondom (schützt auch vor Krankheiten!).", t4_b2: "Hormonell: Pillen verhindern den Eisprung.", t4_b3: "Chemisch: Spermizide.",
    t4_inst: "Was schützt auch vor Geschlechtskrankheiten?", t4_gap_sentence2: "Der beste Schutz vor Infektionen ist das {gap}.",
    t4_c41: "Kondom", t4_c42: "Vitamin", t4_c43: "Seife",
    t4_q: "Wie wirkt die Pille?",
    t4_q_a: "Sie verhindert den Eisprung durch Hormone", t4_q_b: "Tötet Vitamine", t4_q_c: "Hilft der Einnistung", t4_q_d: "Keine Wirkung",

    t5_title: "Abschluss-Quiz", t5_text: "Bereit für den Test?",
    t5_b1: "XX = Frau, XY = Mann.", t5_b2: "Spermium entscheidet das Geschlecht.", t5_b3: "Schutz ist wichtig.",
    t5_inst: "Welches Chromosom macht 'männlich'?", t5_gap_sentence3: "Männer haben neben dem X ein {gap}-Chromosom.",
    t5_c51: "Y", t5_c52: "A", t5_c53: "B",
    t5_q: "Was stimmt für Kondome?",
    t5_q_a: "Schützen vor Schwangerschaft und Krankheiten.", t5_q_b: "Nur für Mädchen.", t5_q_c: "Stoppen das Wachstum.", t5_q_d: "Unwirksam.",
  },
  ro: {
    explorer_title: "Determinarea Sexului",
    t1_title: "XX și XY", t1_text: "Oamenii au 23 de perechi de cromozomi. Perechea 23 determină sexul biologic.",
    t1_b1: "Femei: au doi cromozomi X (XX).", t1_b2: "Bărbați: au un cromozom X și unul Y (XY).", t1_b3: "Cromozomul Y declanșează dezvoltarea masculină.",
    t1_inst: "Care combinație aparține cărui sex? Sortează!",
    t1_bucket_no: "Femeie biologică", t1_bucket_ferfi: "Bărbat biologic",
    t1_item_xx: "Perechea XX", t1_item_xy: "Perechea XY",
    t1_q: "Care pereche de cromozomi este responsabilă pentru sex?",
    t1_q_a: "Perechea 23", t1_q_b: "Perechea 1", t1_q_c: "Toate", t1_q_d: "Niciuna",

    t2_title: "Rolul Tatălui", t2_text: "Ovulul are mereu un X. Spermatozoizii au X sau Y. Spermatozoidul decide sexul.",
    t2_b1: "Mama (XX) -> dă doar X.", t2_b2: "Tata (XY) -> dă X sau Y.", t2_b3: "X + X = fată, X + Y = băiat.",
    t2_inst: "Completează fraza!", t2_gap_sentence: "Sexul este determinat de tipul de {gap}.",
    t2_c1: "spermatozoid", t2_c2: "ovul", t2_c3: "hormon",
    t2_q: "Ce cromozom poate primi urmașul de la mamă?",
    t2_q_a: "Doar X", t2_q_b: "Doar Y", t2_q_c: "X sau Y", t2_q_d: "Z",

    t3_title: "Caractere Sexuale", t3_text: "Există caractere primare (la naștere) și secundare (la pubertate).",
    t3_b1: "Primare: organele reproducătoare.", t3_b2: "Secundare: barba, sânii, vocea îngroșată.", t3_b3: "Controlate de testosteron și estrogen.",
    t3_inst: "Potrivește caracterul cu tipul său!",
    t3_l1: "Organe genitale", t3_r1: "Caracter primar",
    t3_l2: "Barbă / Sâni", t3_r2: "Caracter secundar",
    t3_l3: "Hormoni", t3_r3: "Controlorii dezvoltării",
    t3_q: "Când se dezvoltă caracterele sexuale secundare?",
    t3_q_a: "La pubertate", t3_q_b: "În copilărie", t3_q_c: "În stadiul fetal", t3_q_d: "La bătrânețe",

    t4_title: "Contracepția", t4_text: "Contracepția previne sarcina nedorită.",
    t4_b1: "Mecanică: ex: prezervativul (protejează și de boli!).", t4_b2: "Hormonală: pastile care opresc ovulația.", t4_b3: "Chimică: spermicide.",
    t4_inst: "Ce protejează și contra bolilor venerice?", t4_gap_sentence2: "Cea mai eficientă protecție contra infecțiilor este {gap}.",
    t4_c41: "prezervativul", t4_c42: "vitamina", t4_c43: "săpunul",
    t4_q: "Cum funcționează anticoncepționalele?",
    t4_q_a: "Opresc ovulația prin hormoni", t4_q_b: "Distrug vitaminele", t4_q_c: "Ajută implantarea", t4_q_d: "Niciun efect",

    t5_title: "Test Recapitulativ", t5_text: "Ești gata?",
    t5_b1: "XX = femeie, XY = bărbat.", t5_b2: "Spermatozoidul decide sexul.", t5_b3: "Protecția este vitală.",
    t5_inst: "Care cromozom 'masculinizează'?", t5_gap_sentence3: "Bărbații au un cromozom {gap} lângă cel X.",
    t5_c51: "Y", t5_c52: "A", t5_c53: "B",
    t5_q: "Ce este adevărat despre prezervativ?",
    t5_q_a: "Protejează și de sarcină și de boli.", t5_q_b: "Doar fetele îl pot folosi.", t5_q_c: "Oprește creșterea.", t5_q_d: "Ineficient.",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "no", label: "t1_bucket_no" },
        { id: "ferfi", label: "t1_bucket_ferfi" },
      ],
      items: [
        { text: "t1_item_xx", bucketId: "no" },
        { text: "t1_item_xy", bucketId: "ferfi" },
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
    svg: (lang) => <SexDeterminationSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0,
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
    svg: (lang) => <SexDeterminationSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t2_q_3",
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
      sentence: "t4_gap_sentence2",
      choices: ["t4_c41", "t4_c42", "t4_c43"],
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
      sentence: "t5_gap_sentence3",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
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

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🧬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SexDeterminationExplorer = memo(function SexDeterminationExplorer({
  color = "#EC4899", // Pink-500 a nemekhez és biológiához
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
      grade={8} 
      explorerId="bio_k8_sex_determination" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SexDeterminationExplorer;
