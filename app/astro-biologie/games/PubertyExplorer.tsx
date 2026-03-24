"use client";
// PubertyExplorer.tsx — Bio Island i8: Pubertás (K6)
// Topics: 1) Hormonok 2) Férfi szaporító szervrendszer 3) Női szaporító szervrendszer 4) Testi változások 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { HormoneSvg, ReproductionSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="45" textAnchor="middle">♀️</text>
        <text x="30" y="15" fontSize="45" textAnchor="middle">🥚</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-45" y="15" fontSize="40" textAnchor="middle">👦</text>
        <path d="M -20,0 L 20,0" stroke="#0284C7" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="45" y="15" fontSize="40" textAnchor="middle">👨</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🧬</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Serdülőkor",
    // T1: Hormonok
    t1_title: "A hormonok szerepe",
    t1_text: "A pubertás a gyermekkorból a felnőttkorba vezető átmenet. Ezt a hormonok indítják be, melyek a vérben keringő kémiai hírvivők.",
    t1_b1: "A változásokat az agyalapi mirigy hormonjai indítják el.",
    t1_b2: "Fiúknál a tesztoszteron felelős a férfias jellegekért.",
    t1_b3: "Lányoknál az ösztrogén felelős a nőies jellegekért.",
    t1_inst: "Mik indítják be a test változásait?",
    t1_gap_sentence: "A hormonok indítják be a {gap} alatti testi változásokat.",
    t1_c1: "pubertás", t1_c2: "fotoszintézis", t1_c3: "emésztés",
    t1_q: "Mik azok a hormonok?",
    t1_q_a: "Kémiai hírvivők a vérben", t1_q_b: "Apró csontok a fejben", t1_q_c: "Izomrostok a karban", t1_q_d: "Baktériumok a gyomorban",

    // T2: Férfi szaporító szervrendszer
    t2_title: "A férfi szaporító szervrendszer",
    t2_text: "A férfi szaporító szervrendszer feladata a hímivarsejtek (spermiumok) termelése és célba juttatása.",
    t2_b1: "A herék termelik a spermiumokat és a tesztoszteron hormont.",
    t2_b2: "A mellékherékben raktározódnak és érnek a hímivarsejtek.",
    t2_b3: "Az ondóvezeték szállítja a hímivarsejteket.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "herék", t2_w3: "termelik", t2_w4: "a", t2_w5: "hímivarsejteket.",
    t2_q: "Milyen hormon termelődik nagy mennyiségben a herékben?",
    t2_q_a: "Tesztoszteron", t2_q_b: "Ösztrogén", t2_q_c: "Inzulin", t2_q_d: "Adrenalin",

    // T3: Női szaporító szervrendszer
    t3_title: "A női szaporító szervrendszer",
    t3_text: "A női szaporító szervrendszer feladata a petesejtek termelése és a fejlődő magzat táplálása a terhesség alatt.",
    t3_b1: "A petefészkek termelik a petesejteket és a női hormonokat.",
    t3_b2: "A petevezeték vezeti a petesejtet a méh felé.",
    t3_b3: "A méh vastag izomfalú szerv, itt fejlődik az embrió.",
    t3_inst: "Párosítsd a szervet a feladatával!",
    t3_l1: "Petefészek", t3_r1: "Petesejteket termel",
    t3_l2: "Méh", t3_r2: "Itt fejlődik a magzat",
    t3_l3: "Here (férfi)", t3_r3: "Hímivarsejteket termel",
    t3_q: "Hol fejlődik a magzat a terhesség alatt?",
    t3_q_a: "A méhben", t3_q_b: "A petefészekben", t3_q_c: "A gyomorban", t3_q_d: "A petevezetékben",

    // T4: Testi változások
    t4_title: "Változások a testben",
    t4_text: "A pubertás alatt a test drasztikusan megváltozik, hogy felkészüljön a felnőttkorra. Vannak fiúkra és lányokra jellemző változások.",
    t4_b1: "Mindkét nemnél: hirtelen növekedés, szőrzet megjelenése, izzadás.",
    t4_b2: "Fiúk: mutálás (mélyülő hang), szakállnövekedés, váll szélesedése.",
    t4_b3: "Lányok: mellnövekedés, csípő szélesedése, menstruáció kezdete.",
    t4_inst: "Fiúkra vagy Lányokra jellemző változás? Válogasd szét!",
    t4_bucket_fiu: "Fiúk",
    t4_bucket_lan: "Lányok",
    t4_item_f1: "Szakáll növekedése", t4_item_f2: "Mélyülő hang (mutálás)",
    t4_item_l1: "Menstruáció", t4_item_l2: "Szélesedő csípő",
    t4_q: "Melyik változás tapasztalható MIND a fiúknál, MIND a lányoknál?",
    t4_q_a: "Hirtelen növekedés és szőrzet megjelenése", t4_q_b: "Mélyülő hang", t4_q_c: "Menstruáció", t4_q_d: "Szakállnövekedés",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a serdülőkor biológiai hátteréről!",
    t5_b1: "Hormonok irányítják a változásokat.",
    t5_b2: "Férfi ivarsejt: spermium. Női ivarsejt: petesejt.",
    t5_b3: "A pubertás a felnőtté válás természetes folyamata.",
    t5_inst: "Hogy nevezzük a női ivarsejtet?",
    t5_gap_sentence2: "A női ivarsejt a {gap}, ami a petefészekben érik.",
    t5_c51: "petesejt", t5_c52: "hímivarsejt", t5_c53: "hormon",
    t5_q: "Melyik állítás IGAZ a hormonokra?",
    t5_q_a: "A vérben keringenek és szabályozzák a test működését.", t5_q_b: "A tüdő termeli őket légzéskor.", t5_q_c: "Csak felnőttkorban jelennek meg.", t5_q_d: "Ezek a csontok építőkövei.",
  },
  en: {
    explorer_title: "Puberty and Growth",
    t1_title: "The Role of Hormones", t1_text: "Puberty is the transition from childhood to adulthood. It is triggered by hormones, which are chemical messengers in the blood.",
    t1_b1: "The changes are initiated by hormones from the pituitary gland.", t1_b2: "In boys, testosterone is responsible for male traits.", t1_b3: "In girls, estrogen is responsible for female traits.",
    t1_inst: "What triggers the changes in the body?", t1_gap_sentence: "Hormones trigger the body changes during {gap}.",
    t1_c1: "puberty", t1_c2: "photosynthesis", t1_c3: "circulation",
    t1_q: "What are hormones?", t1_q_a: "Chemical messengers in the blood", t1_q_b: "Tiny bones in the head", t1_q_c: "Muscle fibers in the arm", t1_q_d: "Bacteria in the stomach",

    t2_title: "Male Reproductive System", t2_text: "The function of the male reproductive system is to produce and deliver sperm cells.",
    t2_b1: "The testes produce sperm and the hormone testosterone.", t2_b2: "Sperm cells are stored and mature in the epididymis.", t2_b3: "The vas deferens transports the sperm cells.",
    t2_inst: "Put the words in order!",
    t2_w1: "The", t2_w2: "testes", t2_w3: "produce", t2_w4: "sperm", t2_w5: "cells.",
    t2_q: "Which hormone is produced in large amounts in the testes?", t2_q_a: "Testosterone", t2_q_b: "Estrogen", t2_q_c: "Insulin", t2_q_d: "Adrenaline",

    t3_title: "Female Reproductive System", t3_text: "The function of the female reproductive system is to produce egg cells and nourish a developing fetus during pregnancy.",
    t3_b1: "The ovaries produce egg cells and female hormones.", t3_b2: "The fallopian tube carries the egg to the uterus.", t3_b3: "The uterus is a thick-walled organ where the embryo develops.",
    t3_inst: "Match the organ with its function!",
    t3_l1: "Ovary", t3_r1: "Produces egg cells", t3_l2: "Uterus", t3_r2: "Where the fetus develops", t3_l3: "Testis (male)", t3_r3: "Produces sperm cells",
    t3_q: "Where does the fetus develop during pregnancy?", t3_q_a: "In the uterus", t3_q_b: "In the ovary", t3_q_c: "In the stomach", t3_q_d: "In the fallopian tube",

    t4_title: "Changes in the Body", t4_text: "During puberty, the body changes drastically to prepare for adulthood. There are specific changes for boys and girls.",
    t4_b1: "Both genders: growth spurt, body hair appears, sweating.", t4_b2: "Boys: voice deepens, beard growth, shoulders widen.", t4_b3: "Girls: breast development, hips widen, menstruation begins.",
    t4_inst: "Typical for Boys or Girls? Sort them!",
    t4_bucket_fiu: "Boys", t4_bucket_lan: "Girls",
    t4_item_f1: "Beard growth", t4_item_f2: "Deepening voice",
    t4_item_l1: "Menstruation", t4_item_l2: "Widening hips",
    t4_q: "Which change is experienced by BOTH boys and girls?", t4_q_a: "Growth spurt and body hair", t4_q_b: "Deepening voice", t4_q_c: "Menstruation", t4_q_d: "Beard growth",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the biology of puberty!",
    t5_b1: "Hormones control the changes.", t5_b2: "Male cell: sperm. Female cell: egg.", t5_b3: "Puberty is a natural process of growing up.",
    t5_inst: "What is the female reproductive cell called?", t5_gap_sentence2: "The female reproductive cell is the {gap}.",
    t5_c51: "egg cell", t5_c52: "sperm cell", t5_c53: "hormone",
    t5_q: "Which statement is TRUE about hormones?", t5_q_a: "They circulate in the blood and regulate body functions.", t5_q_b: "They are produced by the lungs during breathing.", t5_q_c: "They only appear in adulthood.", t5_q_d: "They are the building blocks of bones.",
  },
  de: {
    explorer_title: "Die Pubertät",
    t1_title: "Die Rolle der Hormone", t1_text: "Die Pubertät ist der Übergang von der Kindheit zum Erwachsensein. Sie wird durch Hormone (chemische Botenstoffe im Blut) ausgelöst.",
    t1_b1: "Die Veränderungen werden durch Hormone der Hirnanhangdrüse gestartet.", t1_b2: "Bei Jungen ist Testosteron für männliche Merkmale verantwortlich.", t1_b3: "Bei Mädchen ist Östrogen für weibliche Merkmale verantwortlich.",
    t1_inst: "Was löst die Veränderungen im Körper aus?", t1_gap_sentence: "Hormone lösen die Veränderungen während der {gap} aus.",
    t1_c1: "Pubertät", t1_c2: "Fotosynthese", t1_c3: "Atmung",
    t1_q: "Was sind Hormone?", t1_q_a: "Chemische Botenstoffe im Blut", t1_q_b: "Kleine Knochen im Kopf", t1_q_c: "Muskelfasern im Arm", t1_q_d: "Bakterien im Magen",

    t2_title: "Männliche Fortpflanzungsorgane", t2_text: "Das männliche Fortpflanzungssystem hat die Aufgabe, Spermien (Samenzellen) zu produzieren und zu übertragen.",
    t2_b1: "Die Hoden produzieren Spermien und das Hormon Testosteron.", t2_b2: "In den Nebenhoden werden die Spermien gespeichert und reifen.", t2_b3: "Der Samenleiter transportiert die Spermien.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Die", t2_w2: "Hoden", t2_w3: "produzieren", t2_w4: "die", t2_w5: "Spermien.",
    t2_q: "Welches Hormon wird in großen Mengen in den Hoden produziert?", t2_q_a: "Testosteron", t2_q_b: "Östrogen", t2_q_c: "Insulin", t2_q_d: "Adrenalin",

    t3_title: "Weibliche Fortpflanzungsorgane", t3_text: "Das weibliche Fortpflanzungssystem produziert Eizellen und nährt den sich entwickelnden Fötus während der Schwangerschaft.",
    t3_b1: "Die Eierstöcke produzieren Eizellen und weibliche Hormone.", t3_b2: "Der Eileiter leitet die Eizelle zur Gebärmutter.", t3_b3: "Die Gebärmutter ist ein starker Muskel, in dem der Fötus wächst.",
    t3_inst: "Verbinde das Organ mit seiner Aufgabe!",
    t3_l1: "Eierstock", t3_r1: "Produziert Eizellen", t3_l2: "Gebärmutter", t3_r2: "Hier wächst der Fötus heran", t3_l3: "Hoden (Mann)", t3_r3: "Produziert Spermien",
    t3_q: "Wo entwickelt sich der Fötus während der Schwangerschaft?", t3_q_a: "In der Gebärmutter", t3_q_b: "Im Eierstock", t3_q_c: "Im Magen", t3_q_d: "Im Eileiter",

    t4_title: "Veränderungen des Körpers", t4_text: "In der Pubertät verändert sich der Körper stark, um sich auf das Erwachsensein vorzubereiten. Es gibt typische Veränderungen für Jungen und Mädchen.",
    t4_b1: "Beide Geschlechter: Wachstumsschub, Körperbehaarung, Schwitzen.", t4_b2: "Jungen: Stimmbruch (tiefere Stimme), Bartwuchs, breitere Schultern.", t4_b3: "Mädchen: Brustwachstum, breitere Hüften, Beginn der Menstruation.",
    t4_inst: "Typisch für Jungen oder Mädchen? Sortiere!",
    t4_bucket_fiu: "Jungen", t4_bucket_lan: "Mädchen",
    t4_item_f1: "Bartwuchs", t4_item_f2: "Tiefer werdende Stimme",
    t4_item_l1: "Menstruation", t4_item_l2: "Breiter werdende Hüften",
    t4_q: "Welche Veränderung tritt SOWOHL bei Jungen ALS AUCH bei Mädchen auf?", t4_q_a: "Wachstumsschub und Körperbehaarung", t4_q_b: "Stimmbruch", t4_q_c: "Menstruation", t4_q_d: "Bartwuchs",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die Biologie der Pubertät!",
    t5_b1: "Hormone steuern die Veränderungen.", t5_b2: "Männliche Zelle: Spermium. Weibliche Zelle: Eizelle.", t5_b3: "Die Pubertät ist ein natürlicher Prozess des Erwachsenwerdens.",
    t5_inst: "Wie nennt man die weibliche Fortpflanzungszelle?", t5_gap_sentence2: "Die weibliche Keimzelle ist die {gap}.",
    t5_c51: "Eizelle", t5_c52: "Samenzelle", t5_c53: "Hormon",
    t5_q: "Welche Aussage über Hormone ist WAHR?", t5_q_a: "Sie kreisen im Blut und regulieren Körperfunktionen.", t5_q_b: "Sie werden beim Atmen in der Lunge produziert.", t5_q_c: "Sie treten erst im Erwachsenenalter auf.", t5_q_d: "Sie sind die Bausteine der Knochen.",
  },
  ro: {
    explorer_title: "Pubertatea",
    t1_title: "Rolul Hormonilor", t1_text: "Pubertatea este tranziția de la copilărie la maturitate. Este declanșată de hormoni, care sunt mesageri chimici din sânge.",
    t1_b1: "Schimbările sunt inițiate de hormonii glandei pituitare.", t1_b2: "La băieți, testosteronul este responsabil pentru trăsăturile masculine.", t1_b3: "La fete, estrogenul este responsabil pentru trăsăturile feminine.",
    t1_inst: "Ce declanșează schimbările corpului?", t1_gap_sentence: "Hormonii declanșează schimbările corpului din timpul {gap}.",
    t1_c1: "pubertății", t1_c2: "fotosintezei", t1_c3: "digestiei",
    t1_q: "Ce sunt hormonii?", t1_q_a: "Mesageri chimici în sânge", t1_q_b: "Oase mici în cap", t1_q_c: "Fibre musculare în braț", t1_q_d: "Bacterii în stomac",

    t2_title: "Sistemul Reproducător Masculin", t2_text: "Funcția sistemului reproducător masculin este de a produce și elibera celule spermatice (spermatozoizi).",
    t2_b1: "Testiculele produc spermatozoizii și hormonul testosteron.", t2_b2: "Celulele spermatice se maturizează și sunt stocate în epididim.", t2_b3: "Canalul deferent transportă spermatozoizii.",
    t2_inst: "Pune cuvintele în ordine!",
    t2_w1: "Testiculele", t2_w2: "produc", t2_w3: "celulele", t2_w4: "sexuale", t2_w5: "masculine.",
    t2_q: "Ce hormon se produce în cantități mari în testicule?", t2_q_a: "Testosteron", t2_q_b: "Estrogen", t2_q_c: "Insulină", t2_q_d: "Adrenalină",

    t3_title: "Sistemul Reproducător Feminin", t3_text: "Funcția sistemului reproducător feminin este de a produce ovule și de a hrăni fătul în timpul sarcinii.",
    t3_b1: "Ovarele produc ovulele și hormonii feminini.", t3_b2: "Trompele uterine conduc ovulul spre uter.", t3_b3: "Uterul este organul musculos unde se dezvoltă embrionul.",
    t3_inst: "Potrivește organul cu funcția sa!",
    t3_l1: "Ovar", t3_r1: "Produce ovule", t3_l2: "Uter", t3_r2: "Aici se dezvoltă fătul", t3_l3: "Testicul (bărbat)", t3_r3: "Produce celule spermatice",
    t3_q: "Unde se dezvoltă fătul în timpul sarcinii?", t3_q_a: "În uter", t3_q_b: "În ovar", t3_q_c: "În stomac", t3_q_d: "În trompa uterină",

    t4_title: "Schimbări în Corp", t4_text: "În timpul pubertății, corpul se schimbă drastic pentru a se pregăti de maturitate. Există schimbări specifice pentru băieți și fete.",
    t4_b1: "Ambele sexe: creștere bruscă, apariția părului pe corp, transpirație.", t4_b2: "Băieți: îngroșarea vocii, creșterea bărbii, umerii se lățesc.", t4_b3: "Fete: dezvoltarea sânilor, șoldurile se lățesc, începe menstruația.",
    t4_inst: "Specific pentru Băieți sau Fete? Sortează-le!",
    t4_bucket_fiu: "Băieți", t4_bucket_lan: "Fete",
    t4_item_f1: "Creșterea bărbii", t4_item_f2: "Îngroșarea vocii",
    t4_item_l1: "Menstruația", t4_item_l2: "Lățirea șoldurilor",
    t4_q: "Care schimbare este experimentată ATÂT de băieți CÂT ȘI de fete?", t4_q_a: "Creșterea bruscă și părul pe corp", t4_q_b: "Îngroșarea vocii", t4_q_c: "Menstruația", t4_q_d: "Creșterea bărbii",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre biologia pubertății!",
    t5_b1: "Hormonii controlează schimbările.", t5_b2: "Celula masculină: spermatozoid. Celula feminină: ovul.", t5_b3: "Pubertatea este un proces natural de maturizare.",
    t5_inst: "Cum se numește celula reproducătoare feminină?", t5_gap_sentence2: "Celula reproducătoare feminină este {gap}.",
    t5_c51: "ovulul", t5_c52: "spermatozoidul", t5_c53: "hormonul",
    t5_q: "Care afirmație este ADEVĂRATĂ despre hormoni?", t5_q_a: "Circulă în sânge și reglează funcțiile corpului.", t5_q_b: "Sunt produși de plămâni la respirație.", t5_q_c: "Apar doar la vârsta adultă.", t5_q_d: "Sunt cărămizile de construcție ale oaselor.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <HormoneSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
    svg: (lang) => <ReproductionSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
      instruction: "t2_inst",
      hint1: "t2_b1",
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
    svg: () => <Topic3Svg />,
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
      type: "drag-to-bucket",
      buckets: [
        { id: "fiu", label: "t4_bucket_fiu" },
        { id: "lan", label: "t4_bucket_lan" },
      ],
      items: [
        { text: "t4_item_f1", bucketId: "fiu" },
        { text: "t4_item_l1", bucketId: "lan" },
        { text: "t4_item_f2", bucketId: "fiu" },
        { text: "t4_item_l2", bucketId: "lan" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b3",
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
  icon: "🧬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PubertyExplorer = memo(function PubertyExplorer({
  color = "#9333EA", // Lila árnyalat (Purple-600) a hormonok, biológia és DNS miatt
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
      grade={6} 
      explorerId="bio_k6_puberty" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PubertyExplorer;
