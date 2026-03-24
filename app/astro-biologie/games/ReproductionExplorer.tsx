"use client";
// ReproductionExplorer.tsx — Bio Island i4: Szaporodás & Fejlődés (K8)
// Topics: 1) Gametogenezis 2) Megtermékenyítés 3) Embrionális szakasz 4) Magzati fejlődés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ReproductionSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="30" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
        <path d="M -60,10 Q -40,10 -30,0" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M -60,-10 Q -40,-10 -30,0" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="5" fontSize="10" fill="#E11D48" textAnchor="middle">n</text>
        <text x="-50" y="-15" fontSize="10" fill="#64748B" textAnchor="middle">n</text>
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
        <text x="0" y="15" fontSize="45" textAnchor="middle">🍼</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szaporodás és Fejlődés",
    // T1: Gametogenezis (Match-pairs)
    t1_title: "Ivarsejt-képződés",
    t1_text: "A gametogenezis során a szervezet ivarsejteket (spermiumokat és petesejteket) hoz létre. Ezek a sejtek különleges osztódással (meiózis) keletkeznek, és feleannyi DNS-t tartalmaznak, mint a testi sejtek.",
    t1_b1: "Spermium: kicsi, mozgékony, ostora van.",
    t1_b2: "Petesejt: nagy, sok tápanyagot tartalmaz.",
    t1_b3: "Meiózis: a számfelező osztódás, ami biztosítja az utódok variabilitását.",
    t1_inst: "Párosítsd az ivarsejtet a jellemzőjével!",
    t1_l1: "Petesejt", t1_r1: "Nagy, tápanyagban dús",
    t1_l2: "Spermium", t1_r2: "Kicsi, ostorral mozog",
    t1_l3: "Meiózis", t1_r3: "Számfelező osztódás",
    t1_q: "Hány darab DNS készletet (n) tartalmaz egy érett emberi ivarsejt?",
    t1_q_a: "Egyet (félkészlet)", t1_q_b: "Kettőt (teljes készlet)", t1_q_c: "Négyet", t1_q_d: "Nullát",

    // T2: Megtermékenyítés
    t2_title: "A fogantatás pillanata",
    t2_text: "A megtermékenyítéskor a spermium és a petesejt egyesül a petevezetékben. Létrejön a zigóta, az új élet első sejtje.",
    t2_b1: "Helyszín: általában a petevezeték felső harmada.",
    t2_b2: "Zigóta: a megtermékenyített petesejt.",
    t2_b3: "A két félkészlet (n+n) egyesülése visszaállítja a teljes DNS állományt (2n).",
    t2_inst: "Egészítsd ki a hiányzó szót!",
    t2_gap_sentence: "A megtermékenyített petesejtet {gap} hívjuk.",
    t2_c1: "zigótának", t2_c2: "neuronnak", t2_c3: "enzimnek",
    t2_q: "Hol történik a természetes megtermékenyítés a női testben?",
    t2_q_a: "A petevezetékben", t2_q_b: "A méhben", t2_q_c: "A hüvelyben", t2_q_d: "A petefészekben",

    // T3: Embrionális szakasz (Word-order)
    t3_title: "A korai fejlődés",
    t3_text: "A zigóta osztódni kezd (barázdálódik), és elindul a méh felé, ahol beágyazódik. Az első 8 hetet embrionális szakasznak nevezzük.",
    t3_b1: "Hólyagcsíra állapotban ágyazódik be a méhfalba.",
    t3_b2: "Megindul a szervek kialakulása.",
    t3_b3: "Ebben a szakaszban a legérzékenyebb a fejlődés a külső hatásokra.",
    t3_inst: "Tedd sorrendbe a korai fejlődés szakaszait!",
    t3_w1: "Zigóta", t3_w2: "Szederjes állapot", t3_w3: "Hólyagcsíra", t3_w4: "Embrió",
    t3_q: "Melyik állapotban történik meg a beágyazódás a méh nyálkahártyájába?",
    t3_q_a: "Hólyagcsíra", t3_q_b: "Zigóta", t3_q_c: "Megszületett csecsemő", t3_q_d: "Spermium",

    // T4: Magzati fejlődés (Label-diagram)
    t4_title: "A magzat védelme",
    t4_text: "A 9. héttől a születésig tart a magzati szakasz. Ekkor a szervek növekednek és tökéletesednek. A magzatot különleges rendszerek védik és táplálják.",
    t4_b1: "Méhlepény: biztosítja az anyagcserét az anya és a magzat között.",
    t4_b2: "Köldökzsinór: szállítja a tápanyagot és az oxigént.",
    t4_b3: "Magzatvíz: megvédi a fejlődő életet a mechanikai hatásoktól.",
    t4_inst: "Címkézd fel a magzatot körülvevő részeket!",
    t4_area_placenta: "Méhlepény",
    t4_area_cord: "Köldökzsinór",
    t4_area_fluid: "Magzatvíz",
    t4_area_uterus: "Méhfal",
    t4_q: "Melyik szerv felelős az anya és a magzat közötti tápanyagcseréért?",
    t4_q_a: "Méhlepény", t4_q_b: "Gyomor", t4_q_c: "Tüdő", t4_q_d: "Lép",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Sikerült megértened az élet keletkezésének titkait? Lássuk!",
    t5_b1: "Meiózis hozza létre az ivarsejteket.",
    t5_b2: "A zigóta az első testi sejtünk.",
    t5_b3: "A magzat 9 hónapig fejlődik a méhben.",
    t5_inst: "Hány hónapig tart általában az emberi terhesség?",
    t5_gap_sentence2: "Az emberi magzat fejlődése körülbelül {gap} hónapot vesz igénybe.",
    t5_c51: "kilenc", t5_c52: "három", t5_c53: "tizenkettő",
    t5_q: "Melyik állítás IGAZ az ivarsejtekre?",
    t5_q_a: "Feleannyi kromoszómát tartalmaznak, mint a testi sejtek.", t5_q_b: "Ugyanolyanok, mint a hámsejtek.", t5_q_c: "Nem játszanak szerepet a szaporodásban.", t5_q_d: "Ezer évig élnek a levegőben.",
  },
  en: {
    explorer_title: "Reproduction & Development",
    t1_title: "Gametogenesis", t1_text: "Gametogenesis is the production of gametes (sperm and egg cells) through meiosis, containing half the DNA of body cells.",
    t1_b1: "Sperm: small, mobile, has a tail.", t1_b2: "Egg: large, contains many nutrients.", t1_b3: "Meiosis: reductive division ensuring variability.",
    t1_inst: "Match the gamete with its feature!",
    t1_l1: "Egg cell", t1_r1: "Large, nutrient-rich",
    t1_l2: "Sperm cell", t1_r2: "Small, mobile",
    t1_l3: "Meiosis", t1_r3: "Reductive division",
    t1_q: "How many sets of DNA (n) does a mature human gamete contain?",
    t1_q_a: "One (haploid)", t1_q_b: "Two (diploid)", t1_q_c: "Four", t1_q_d: "Zero",

    t2_title: "Fertilization", t2_text: "Fertilization occurs when a sperm and egg unite in the fallopian tube, creating a zygote.",
    t2_b1: "Location: usually the upper part of the fallopian tube.", t2_b2: "Zygote: the fertilized egg cell.", t2_b3: "Union of n+n restores full DNA set (2n).",
    t2_inst: "Fill in the gap!", t2_gap_sentence: "The fertilized egg cell is called a {gap}.",
    t2_c1: "zygote", t2_c2: "neuron", t2_c3: "enzyme",
    t2_q: "Where does natural fertilization happen in the female body?",
    t2_q_a: "Fallopian tube", t2_q_b: "Uterus", t2_q_c: "Vagina", t2_q_d: "Ovary",

    t3_title: "Embryonic Stage", t3_text: "The zygote divides and travels to the uterus for implantation. The first 8 weeks are the embryonic stage.",
    t3_b1: "Implantation occurs at the blastocyst stage.", t3_b2: "Organ formation begins.", t3_b3: "Most sensitive stage to external factors.",
    t3_inst: "Order the early development stages!",
    t3_w1: "Zygote", t3_w2: "Morula", t3_w3: "Blastocyst", t3_w4: "Embryo",
    t3_q: "At which stage does the embryo implant into the uterine wall?",
    t3_q_a: "Blastocyst", t3_q_b: "Zygote", t3_q_c: "Newborn", t3_q_d: "Sperm",

    t4_title: "Fetal Development", t4_text: "From week 9 to birth, organs grow and mature. The fetus is protected by special systems.",
    t4_b1: "Placenta: manages exchange between mother and fetus.", t4_b2: "Umbilical cord: transports nutrients and oxygen.", t4_b3: "Amniotic fluid: protects against mechanical shocks.",
    t4_inst: "Label the parts surrounding the fetus!",
    t4_area_placenta: "Placenta", t4_area_cord: "Umbilical cord", t4_area_fluid: "Amniotic fluid", t4_area_uterus: "Uterine wall",
    t4_q: "Which organ is responsible for nutrient exchange between mother and fetus?",
    t4_q_a: "Placenta", t4_q_b: "Stomach", t4_q_c: "Lungs", t4_q_d: "Spleen",

    t5_title: "Summary Quiz", t5_text: "Did you understand the secrets of new life?",
    t5_b1: "Meiosis creates gametes.", t5_b2: "Zygote is the first cell.", t5_b3: "Fetus develops for 9 months.",
    t5_inst: "How many months does a typical human pregnancy last?",
    t5_gap_sentence2: "Human fetal development takes about {gap} months.",
    t5_c51: "nine", t5_c52: "three", t5_c53: "twelve",
    t5_q: "Which statement is TRUE about gametes?",
    t5_q_a: "They have half the chromosomes of body cells.", t5_q_b: "They are like skin cells.", t5_q_c: "They play no role in reproduction.", t5_q_d: "They live for a thousand years.",
  },
  de: {
    explorer_title: "Fortpflanzung & Entwicklung",
    t1_title: "Gametogenese", t1_text: "Gametogenese ist die Bildung von Keimzellen (Spermien und Eizellen) durch Meiose.",
    t1_b1: "Spermium: klein, beweglich, mit Geißel.", t1_b2: "Eizelle: groß, nährstoffreich.", t1_b3: "Meiose: Reduktionsteilung für Variabilität.",
    t1_inst: "Verbinde Keimzelle und Merkmal!",
    t1_l1: "Eizelle", t1_r1: "Groß, nährstoffreich",
    t1_l2: "Spermium", t1_r2: "Klein, beweglich",
    t1_l3: "Meiose", t1_r3: "Reduktionsteilung",
    t1_q: "Wie viele Chromosomensätze (n) hat eine reife menschliche Keimzelle?",
    t1_q_a: "Einen (haploid)", t1_q_b: "Zwei (diploid)", t1_q_c: "Vier", t1_q_d: "Null",

    t2_title: "Befruchtung", t2_text: "Die Befruchtung erfolgt im Eileiter, wenn Spermium und Eizelle verschmelzen und eine Zygote bilden.",
    t2_b1: "Ort: meist im oberen Drittel des Eileiters.", t2_b2: "Zygote: die befruchtete Eizelle.", t2_b3: "n+n ergibt wieder den vollen Satz (2n).",
    t2_inst: "Ergänze das Wort!", t2_gap_sentence: "Die befruchtete Eizelle nennt man {gap}.",
    t2_c1: "Zygote", t2_c2: "Neuron", t2_c3: "Enzym",
    t2_q: "Wo findet die natürliche Befruchtung im weiblichen Körper statt?",
    t2_q_a: "Im Eileiter", t2_q_b: "In der Gebärmutter", t2_q_c: "In der Vagina", t2_q_d: "Im Eierstock",

    t3_title: "Embryonalphase", t3_text: "Die Zygote teilt sich und wandert zur Gebärmutter. Die ersten 8 Wochen sind die Embryonalphase.",
    t3_b1: "Einnistung im Blastozysten-Stadium.", t3_b2: "Organbildung beginnt.", t3_b3: "Sehr empfindlich gegenüber äußeren Einflüssen.",
    t3_inst: "Bringe die frühen Stadien in Reihenfolge!",
    t3_w1: "Zygote", t3_w2: "Morula", t3_w3: "Blastozyste", t3_w4: "Embryo",
    t3_q: "In welchem Stadium nistet sich der Keim in der Gebärmutter ein?",
    t3_q_a: "Blastozyste", t3_q_b: "Zygote", t3_q_c: "Neugeborenes", t3_q_d: "Spermium",

    t4_title: "Fötalentwicklung", t4_text: "Ab der 9. Woche wachsen die Organe. Der Fötus wird durch spezielle Systeme geschützt.",
    t4_b1: "Plazenta: Stoffaustausch zwischen Mutter und Kind.", t4_b2: "Nabelschnur: transportiert Nährstoffe und Sauerstoff.", t4_b3: "Fruchtwasser: Schutz vor mechanischen Stößen.",
    t4_inst: "Beschrifte die Teile um den Fötus!",
    t4_area_placenta: "Plazenta", t4_area_cord: "Nabelschnur", t4_area_fluid: "Fruchtwasser", t4_area_uterus: "Gebärmutterwand",
    t4_q: "Welches Organ regelt den Stoffaustausch zwischen Mutter und Kind?",
    t4_q_a: "Plazenta", t4_q_b: "Magen", t4_q_c: "Lunge", t4_q_d: "Milz",

    t5_title: "Zusammenfassung", t5_text: "Kennst du die Geheimnisse des neuen Lebens?",
    t5_b1: "Meiose bildet Keimzellen.", t5_b2: "Zygote ist die erste Zelle.", t5_b3: "Fötus wächst 9 Monate.",
    t5_inst: "Wie viele Monate dauert eine Schwangerschaft?",
    t5_gap_sentence2: "Die Entwicklung dauert etwa {gap} Monate.",
    t5_c51: "neun", t5_c52: "drei", t5_c53: "zwölf",
    t5_q: "Was stimmt für Keimzellen?",
    t5_q_a: "Sie haben die Hälfte der Chromosomen.", t5_q_b: "Sie sind wie Hautzellen.", t5_q_c: "Keine Rolle bei Fortpflanzung.", t5_q_d: "Leben tausend Jahre.",
  },
  ro: {
    explorer_title: "Reproducere și Dezvoltare",
    t1_title: "Gametogeneza", t1_text: "Gametogeneza reprezintă producerea celulelor sexuale (spermatozoizi și ovule) prin meioză.",
    t1_b1: "Spermatozoid: mic, mobil, cu flagel.", t1_b2: "Ovul: mare, bogat în nutrienți.", t1_b3: "Meioza: diviziunea reducțională pentru variabilitate.",
    t1_inst: "Potrivește gametul cu trăsătura sa!",
    t1_l1: "Ovul", t1_r1: "Mare, bogat în nutrienți",
    t1_l2: "Spermatozoid", t1_r2: "Mic, mobil",
    t1_l3: "Meioză", t1_r3: "Diviziune reducțională",
    t1_q: "Câte seturi de ADN (n) conține un gamet uman matur?",
    t1_q_a: "Unul (haploid)", t1_q_b: "Două (diploid)", t1_q_c: "Patru", t1_q_d: "Zero",

    t2_title: "Fecundarea", t2_text: "Fecundarea are loc în trompa uterină, când spermatozoidul și ovulul fuzionează pentru a forma zigotul.",
    t2_b1: "Locație: de obicei în treimea superioară a trompei uterine.", t2_b2: "Zigot: ovulul fecundat.", t2_b3: "Unirea n+n restabilește setul complet de ADN (2n).",
    t2_inst: "Completează cuvântul lipsă!", t2_gap_sentence: "Ovulul fecundat se numește {gap}.",
    t2_c1: "zigot", t2_c2: "neuron", t2_c3: "enzimă",
    t2_q: "Unde are loc fecundarea naturală în corpul femeii?",
    t2_q_a: "În trompa uterină", t2_q_b: "În uter", t2_q_c: "În vagin", t2_q_d: "În ovar",

    t3_title: "Etapa Embrionară", t3_text: "Zigotul se divide și călătorește spre uter pentru implantare. Primele 8 săptămâni reprezintă etapa embrionară.",
    t3_b1: "Implantarea are loc în stadiul de blastocist.", t3_b2: "Începe formarea organelor.", t3_b3: "Cea mai sensibilă etapă la factorii externi.",
    t3_inst: "Pune stadiile dezvoltării timpurii în ordine!",
    t3_w1: "Zigot", t3_w2: "Morulă", t3_w3: "Blastocist", t3_w4: "Embrion",
    t3_q: "În ce stadiu se implantează în peretele uterin?",
    t3_q_a: "Blastocist", t3_q_b: "Zigot", t3_q_c: "Nou-născut", t3_q_d: "Spermatozoid",

    t4_title: "Dezvoltarea Fetală", t4_text: "Din săptămâna 9 până la naștere, organele cresc și se maturizează. Fătul este protejat de sisteme speciale.",
    t4_b1: "Placenta: asigură schimbul de materie între mamă și făt.", t4_b2: "Cordonul ombilical: transportă nutrienți și oxigen.", t4_b3: "Lichidul amniotic: protejează împotriva șocurilor mecanice.",
    t4_inst: "Etichetează părțile din jurul fătului!",
    t4_area_placenta: "Placentă", t4_area_cord: "Cordon ombilical", t4_area_fluid: "Lichid amniotic", t4_area_uterus: "Perete uterin",
    t4_q: "Care organ este responsabil de schimbul de nutrienți între mamă și făt?",
    t4_q_a: "Placenta", t4_q_b: "Stomacul", t4_q_c: "Plămânii", t4_q_d: "Splina",

    t5_title: "Recapitulare", t5_text: "Ai înțeles secretele apariției vieții?",
    t5_b1: "Meioza creează gameții.", t5_b2: "Zigotul este prima celulă.", t5_b3: "Fătul se dezvoltă timp de 9 luni.",
    t5_inst: "Câte luni durează de obicei sarcina umană?",
    t5_gap_sentence2: "Dezvoltarea fetală umană durează aproximativ {gap} luni.",
    t5_c51: "nouă", t5_c52: "trei", t5_c53: "doisprezece",
    t5_q: "Care afirmație este ADEVĂRATĂ despre gameți?",
    t5_q_a: "Au jumătate din numărul de cromozomi ai celulelor corpului.", t5_q_b: "Sunt ca celulele pielii.", t5_q_c: "Nu au rol în reproducere.", t5_q_d: "Trăiesc o mie de ani.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ReproductionSvg lang={lang} />, // Gamete view
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
    svg: () => <Topic2Svg />,
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
    svg: (lang) => <ReproductionSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctOrder: [0, 1, 2, 3],
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
    svg: (lang) => <ReproductionSvg lang={lang} />, // Fetal/Womb view
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "placenta", x: 70, y: 30, label: "t4_area_placenta" },
        { id: "cord",     x: 50, y: 55, label: "t4_area_cord" },
        { id: "fluid",    x: 30, y: 65, label: "t4_area_fluid" },
        { id: "uterus",   x: 15, y: 40, label: "t4_area_uterus" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b1",
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
      hint1: "t5_b3",
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
  icon: "🍼",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReproductionExplorer = memo(function ReproductionExplorer({
  color = "#F43F5E", // Rose-500
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
      explorerId="bio_k8_reproduction" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ReproductionExplorer;
