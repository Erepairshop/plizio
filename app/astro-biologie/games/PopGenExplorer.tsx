"use client";
// PopGenExplorer — Island i8: Population Genetics (Populationsgenetik) Grade 8
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Gene pool, Hardy-Weinberg, genetic drift, speciation

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Gene Pool
    r1_title: "Gene Pool & Allele Frequency",
    r1_text: "A population's gene pool contains all the alleles (versions) of all genes. Allele frequency tells us how common each allele is in the population.",
    r1_fact1: "Gene pool = all alleles of all genes in a population",
    r1_fact2: "Allele frequency = % of an allele among all alleles for that gene",
    r1_fact3: "Tracking allele frequencies shows if a population is evolving",
    r1_fact4: "Example: A flower color gene has red (A) and white (a) alleles",

    // Round 2: Hardy-Weinberg
    r2_title: "Hardy-Weinberg Equilibrium",
    r2_text: "The Hardy-Weinberg principle states that allele frequencies stay constant in populations with no mutation, migration, natural selection, genetic drift, or non-random mating.",
    r2_fact1: "Five conditions needed: no mutation, no migration, random mating, large population, no selection",
    r2_fact2: "If these conditions are met: allele frequencies STAY the same = NO evolution",
    r2_fact3: "p² + 2pq + q² = 1 (equation for genotype frequencies)",
    r2_fact4: "Most real populations DO violate these conditions → evolution happens!",

    // Round 3: Genetic Drift
    r3_title: "Genetic Drift: Random Changes",
    r3_text: "Genetic drift is random change in allele frequencies, especially strong in small populations. Includes bottleneck and founder effects.",
    r3_fact1: "Bottleneck effect: population shrinks → random alleles lost forever",
    r3_fact2: "Founder effect: small group colonizes new area → alleles differ from original population",
    r3_fact3: "Genetic drift is stronger in SMALL populations (random chance matters more)",
    r3_fact4: "Large populations resist drift due to dilution effect",

    // Round 4: Speciation
    r4_title: "Speciation: Birth of New Species",
    r4_text: "Speciation occurs when populations become geographically isolated, accumulate genetic differences, and can no longer interbreed even if they meet again.",
    r4_fact1: "Geographic isolation = separate populations (mountains, rivers, distance)",
    r4_fact2: "Different selection pressures = different adaptations in each population",
    r4_fact3: "Genetic drift continues in small isolated populations",
    r4_fact4: "Eventually: reproductive isolation → new species! (cannot produce viable offspring together)",

    // Round 5: Quiz
    r5_title: "Population Genetics Review",

    // Quiz Questions
    q1_q: "What is a population's gene pool?",
    q1_all: "All alleles of all genes in the population",
    q1_seq: "The DNA sequence of dominant alleles only",
    q1_ind: "The genetic makeup of one individual",
    q1_env: "Environmental factors affecting genes",

    q2_q: "Which is NOT a Hardy-Weinberg condition?",
    q2_mut: "Mutation occurs regularly",
    q2_mig: "No migration",
    q2_sel: "No natural selection",
    q2_mat: "Random mating",

    q3_q: "In a small population, which effect dominates evolution?",
    q3_drift: "Genetic drift (random change)",
    q3_select: "Natural selection only",
    q3_mut: "Mutation pressure",
    q3_mig: "Migration only",
  },
  de: {
    r1_title: "Genpool & Allelhäufigkeit",
    r1_text: "Der Genpool einer Population enthält alle Allele (Versionen) aller Gene. Die Allelhäufigkeit sagt uns, wie häufig jedes Allel in der Population ist.",
    r1_fact1: "Genpool = alle Allele aller Gene in einer Population",
    r1_fact2: "Allelhäufigkeit = % eines Allels unter allen Allelen für dieses Gen",
    r1_fact3: "Verfolgung von Allelhäufigkeiten zeigt, ob sich eine Population entwickelt",
    r1_fact4: "Beispiel: Ein Blütenfarb-Gen hat rote (A) und weiße (a) Allele",

    r2_title: "Hardy-Weinberg-Gleichgewicht",
    r2_text: "Das Hardy-Weinberg-Prinzip besagt, dass Allelhäufigkeiten konstant bleiben in Populationen ohne Mutation, Migration, natürliche Auslese, Gendrift oder nicht-zufällige Paarung.",
    r2_fact1: "Fünf Bedingungen nötig: keine Mutation, keine Migration, zufällige Paarung, große Population, keine Auslese",
    r2_fact2: "Wenn diese Bedingungen erfüllt: Allelhäufigkeiten BLEIBEN gleich = KEINE Evolution",
    r2_fact3: "p² + 2pq + q² = 1 (Gleichung für Genotyp-Häufigkeiten)",
    r2_fact4: "Die meisten echten Populationen VERLETZEN diese Bedingungen → Evolution geschieht!",

    r3_title: "Gendrift: Zufällige Veränderungen",
    r3_text: "Gendrift ist zufällige Veränderung in Allelhäufigkeiten, besonders stark in kleinen Populationen. Umfasst Engpass- und Gründereffekt.",
    r3_fact1: "Engpass-Effekt: Population schrumpft → zufällige Allele gehen für immer verloren",
    r3_fact2: "Gründer-Effekt: kleine Gruppe besiedelt neues Gebiet → Allele unterscheiden sich von Original-Population",
    r3_fact3: "Gendrift ist stärker in KLEINEN Populationen (Zufall zählt mehr)",
    r3_fact4: "Große Populationen widerstehen Drift durch Verdünnungseffekt",

    r4_title: "Artbildung: Geburt neuer Arten",
    r4_text: "Artbildung tritt auf, wenn Populationen geografisch isoliert werden, genetische Unterschiede ansammeln und nicht mehr interbrüten können, selbst wenn sie sich wiedertreffen.",
    r4_fact1: "Geografische Isolation = separate Populationen (Berge, Flüsse, Entfernung)",
    r4_fact2: "Verschiedene Selektionsdrücke = verschiedene Anpassungen in jeder Population",
    r4_fact3: "Gendrift setzt sich in kleinen isolierten Populationen fort",
    r4_fact4: "Schließlich: Reproduktive Isolation → neue Art! (können zusammen keine lebensfähigen Nachkommen zeugen)",

    r5_title: "Populationsgenetik Überblick",

    q1_q: "Was ist der Genpool einer Population?",
    q1_all: "Alle Allele aller Gene in der Population",
    q1_seq: "Die DNA-Sequenz nur von dominanten Allelen",
    q1_ind: "Die genetische Zusammensetzung eines Individuums",
    q1_env: "Umweltfaktoren, die Gene beeinflussen",

    q2_q: "Welche ist KEINE Hardy-Weinberg-Bedingung?",
    q2_mut: "Mutation tritt regelmäßig auf",
    q2_mig: "Keine Migration",
    q2_sel: "Keine natürliche Auslese",
    q2_mat: "Zufällige Paarung",

    q3_q: "In einer kleinen Population, welcher Effekt dominiert die Evolution?",
    q3_drift: "Gendrift (zufällige Veränderung)",
    q3_select: "Nur natürliche Auslese",
    q3_mut: "Nur Mutationsdruck",
    q3_mig: "Nur Migration",
  },
  hu: {
    r1_title: "Génkészlet és allélfrekvencia",
    r1_text: "Egy populáció génkészlete tartalmazza egy populáció összes génjének összes alléljét (verzióját). Az allélfrekvencia megmutatja, milyen gyakori az egyes allél a populációban.",
    r1_fact1: "Génkészlet = egy populáció összes génjének összes allélja",
    r1_fact2: "Allélfrekvencia = egy allél %-a az adott gén összes allélja között",
    r1_fact3: "Az allélfrekvenciák nyomon követése megmutatja, hogy egy populáció fejlődik-e",
    r1_fact4: "Példa: Egy virág szín gén vörös (A) és fehér (a) allélokkal rendelkezik",

    r2_title: "Hardy-Weinberg egyensúly",
    r2_text: "A Hardy-Weinberg elv azt állítja, hogy az allélfrekvenciák állandóak maradnak olyan populációkban, ahol nincs mutáció, migráció, természetes szelekció, genetikai drift vagy nem véletlenszerű párosodás.",
    r2_fact1: "Öt feltétel szükséges: nincs mutáció, nincs migráció, véletlen párosodás, nagy populáció, nincs szelekció",
    r2_fact2: "Ha teljesülnek ezek a feltételek: allélfrekvenciák MARADNAK ugyanazok = NINCS evolúció",
    r2_fact3: "p² + 2pq + q² = 1 (genotípus frekvenciák egyenlete)",
    r2_fact4: "A legtöbb valódi populáció MEGSÉRTÍ ezeket a feltételeket → evolúció történik!",

    r3_title: "Genetikai drift: Véletlenszerű változások",
    r3_text: "A genetikai drift az allélfrekvenciák véletlenszerű változása, különösen erős a kis populációkban. Tartalmazza a szűk keresztmetszetet és az alapító hatást.",
    r3_fact1: "Szűk keresztmetszet hatás: populáció csökken → véletlen allélok véglegesen elvesznek",
    r3_fact2: "Alapító hatás: kis csoport új területet kolonizál → allélok különböznek az eredeti populációtól",
    r3_fact3: "A genetikai drift ERŐSEBB a KICSI populációkban (a véletlen fontosabb)",
    r3_fact4: "A nagy populációk ellenállnak a driftnek a hígítási hatás miatt",

    r4_title: "Fajképzés: Új fajok születése",
    r4_text: "A fajképzés akkor következik be, amikor a populációk földrajzilag elszigetelődnek, genetikai különbségeket halmoznak fel, és még ha újra találkoznak is, már nem tudnak kereszteződni.",
    r4_fact1: "Földrajzi elszigetelődés = külön populációk (hegyek, folyók, távolság)",
    r4_fact2: "Különböző szelekciós nyomás = különböző adaptációk az egyes populációkban",
    r4_fact3: "A genetikai drift folytatódik a kicsi izolált populációkban",
    r4_fact4: "Végül: reproduktív elszigetelődés → új faj! (nem tudnak életképes utódokat termelni együtt)",

    r5_title: "Populációgenetika áttekintés",

    q1_q: "Mi egy populáció génkészlete?",
    q1_all: "A populáció összes génjének összes allélja",
    q1_seq: "Az csak a domináns allélok DNS szekvenciája",
    q1_ind: "Egy egyed genetikai összetétele",
    q1_env: "A géneket befolyásoló környezeti tényezők",

    q2_q: "Melyik NEM Hardy-Weinberg feltétel?",
    q2_mut: "Mutáció rendszeresen előfordul",
    q2_mig: "Nincs migráció",
    q2_sel: "Nincs természetes szelekció",
    q2_mat: "Véletlen párosodás",

    q3_q: "Egy kis populációban, melyik hatás dominál az evolúcióban?",
    q3_drift: "Genetikai drift (véletlenszerű változás)",
    q3_select: "Csak természetes szelekció",
    q3_mut: "Csak mutagén nyomás",
    q3_mig: "Csak migráció",
  },
  ro: {
    r1_title: "Fondul genetic și frecvența alelelor",
    r1_text: "Fondul genetic al unei populații conține toate alelele (versiunile) tuturor genelor. Frecvența alelelor ne spune cât de comune sunt alelele în populație.",
    r1_fact1: "Fond genetic = toate alelele tuturor genelor într-o populație",
    r1_fact2: "Frecvență alelă = % de o alelă dintre toate alelele pentru acel gen",
    r1_fact3: "Urmărirea frecvențelor alelelor arată dacă o populație evoluează",
    r1_fact4: "Exemplu: Un gen al culorii florilor are alele roșu (A) și alb (a)",

    r2_title: "Echilibrul Hardy-Weinberg",
    r2_text: "Principiul Hardy-Weinberg afirmă că frecvențele alelelor rămân constante în populații fără mutație, migrație, selecție naturală, drift genetic sau împerechere non-aleatorie.",
    r2_fact1: "Cinci condiții necesare: fără mutație, fără migrație, împerechere aleatorie, populație mare, fără selecție",
    r2_fact2: "Dacă sunt îndeplinite aceste condiții: frecvențele alelelor RĂMÂN la fel = FĂRĂ evoluție",
    r2_fact3: "p² + 2pq + q² = 1 (ecuația frecvențelor genotip)",
    r2_fact4: "Majoritatea populațiilor reale ÎNCALCĂ aceste condiții → evoluția se întâmplă!",

    r3_title: "Drift genetic: Schimbări aleatorii",
    r3_text: "Drift-ul genetic este schimbare aleatorie în frecvențele alelelor, deosebit de puternică în populații mici. Include efectul gâtului de sticlă și efectul fondatorului.",
    r3_fact1: "Efectul gâtului de sticlă: populație se micșorează → alele aleatorii se pierd pentru totdeauna",
    r3_fact2: "Efectul fondatorului: grup mic colonizează o nouă zonă → alele diferă de populația originală",
    r3_fact3: "Drift-ul genetic este mai puternic în populații MICI (șansa contează mai mult)",
    r3_fact4: "Populațiile mari rezistă drift-ului datorită efectului de diluare",

    r4_title: "Speciație: Nașterea speciilor noi",
    r4_text: "Speciația apare atunci când populațiile sunt izolate din punct de vedere geografic, acumulează diferențe genetice și nu pot mai interfecunda chiar dacă se întâlnesc din nou.",
    r4_fact1: "Izolare geografică = populații separate (munți, râuri, distanță)",
    r4_fact2: "Presiuni de selecție diferite = adaptări diferite în fiecare populație",
    r4_fact3: "Drift-ul genetic continuă în populații mici izolate",
    r4_fact4: "În sfârșit: izolare reproductivă → specie nouă! (nu pot produce descendenți viabili împreună)",

    r5_title: "Genetica populației - Recapitulare",

    q1_q: "Ce este fondul genetic al unei populații?",
    q1_all: "Toate alelele tuturor genelor din populație",
    q1_seq: "Doar secvența ADN a alelelor dominante",
    q1_ind: "Componența genetică a unui individ",
    q1_env: "Factori ambientali care afectează genele",

    q2_q: "Care NU este o condiție Hardy-Weinberg?",
    q2_mut: "Mutația apare în mod regulat",
    q2_mig: "Fără migrație",
    q2_sel: "Fără selecție naturală",
    q2_mat: "Împerechere aleatorie",

    q3_q: "Într-o populație mică, care efect domină evoluția?",
    q3_drift: "Drift genetic (schimbare aleatorie)",
    q3_select: "Doar selecție naturală",
    q3_mut: "Doar presiunea mutației",
    q3_mig: "Doar migrație",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function SvgRound1(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <circle cx="60" cy="80" r="8" fill="#FF6B6B" opacity="0.7" />
      <circle cx="120" cy="80" r="8" fill="#4ECDC4" opacity="0.7" />
      <circle cx="180" cy="80" r="8" fill="#95E1D3" opacity="0.7" />
      <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white">Gene Pool</text>
    </svg>
  );
}

function SvgRound2(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <rect x="40" y="40" width="160" height="80" rx="8" fill="rgba(255,107,107,0.2)" stroke="#FF6B6B" strokeWidth="2" />
      <text x="120" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">p² + 2pq + q² = 1</text>
      <text x="120" y="100" textAnchor="middle" fontSize="11" fill="white/80">(Hardy-Weinberg)</text>
    </svg>
  );
}

function SvgRound3(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <circle cx="80" cy="80" r="45" fill="rgba(78,205,196,0.3)" stroke="#4ECDC4" strokeWidth="2" />
      <text x="80" y="85" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">Large</text>
      <circle cx="200" cy="80" r="25" fill="rgba(255,107,107,0.3)" stroke="#FF6B6B" strokeWidth="2" />
      <text x="200" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Small</text>
      <text x="120" y="150" textAnchor="middle" fontSize="11" fill="white/70">Drift stronger ↓</text>
    </svg>
  );
}

function SvgRound4(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <circle cx="80" cy="80" r="30" fill="rgba(149,225,211,0.3)" stroke="#95E1D3" strokeWidth="2" />
      <text x="80" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Pop A</text>
      <circle cx="200" cy="80" r="30" fill="rgba(78,205,196,0.3)" stroke="#4ECDC4" strokeWidth="2" />
      <text x="200" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Pop B</text>
      <line x1="110" y1="80" x2="170" y2="80" stroke="white" strokeWidth="1" strokeDasharray="4 2" />
      <text x="140" y="110" textAnchor="middle" fontSize="10" fill="white/70">Isolated</text>
    </svg>
  );
}

function SvgRound5(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <circle cx="80" cy="60" r="20" fill="#FF6B6B" opacity="0.6" />
      <circle cx="120" cy="60" r="20" fill="#4ECDC4" opacity="0.6" />
      <circle cx="160" cy="60" r="20" fill="#95E1D3" opacity="0.6" />
      <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white">Review</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function PopGenExplorer({
  lang = "en",
  color = "#D35400",
  onDone,
}: {
  lang?: string;
  color?: string;
  onDone?: (score: number, total: number) => void;
}) {
  const labels = LABELS[(lang as keyof typeof LABELS) || "en"] || LABELS.en;

  const def: ExplorerDef = {
    labels: LABELS,
    rounds: [
      {
        type: "info",
        infoTitle: "r1_title",
        infoText: "r1_text",
        svg: SvgRound1,
        bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      },
      {
        type: "info",
        infoTitle: "r2_title",
        infoText: "r2_text",
        svg: SvgRound2,
        bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      },
      {
        type: "info",
        infoTitle: "r3_title",
        infoText: "r3_text",
        svg: SvgRound3,
        bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      },
      {
        type: "info",
        infoTitle: "r4_title",
        infoText: "r4_text",
        svg: SvgRound4,
        bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      },
      {
        type: "mcq",
        infoTitle: "r5_title",
        infoText: "r5_title",
        svg: SvgRound5,
        questions: [
          {
            question: "q1_q",
            choices: ["q1_all", "q1_seq", "q1_ind", "q1_env"],
            answer: "q1_all",
          },
          {
            question: "q2_q",
            choices: ["q2_mut", "q2_mig", "q2_sel", "q2_mat"],
            answer: "q2_mut",
          },
          {
            question: "q3_q",
            choices: ["q3_drift", "q3_select", "q3_mut", "q3_mig"],
            answer: "q3_drift",
          },
        ],
      },
    ],
  };

  return <ExplorerEngine def={def} color={color} lang={lang} onDone={onDone} />;
}
