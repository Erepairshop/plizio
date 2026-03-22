"use client";
// PhylogenyExplorer — Island i9: Phylogeny & Conservation (Phylogenie & Naturschutz) Grade 8
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Phylogenetic trees, classification, biodiversity, conservation

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Phylogenetic Trees
    r1_title: "Phylogenetic Trees & Evolution",
    r1_text: "Phylogenetic trees show how species are related through evolution. Branches split when populations diverge, and the shared ancestor is at the branching point.",
    r1_fact1: "Nodes (branch points) = common ancestors",
    r1_fact2: "Branches show evolutionary lineages (species descent)",
    r1_fact3: "Branch length sometimes shows time or genetic distance",
    r1_fact4: "Species at the tips are alive today; nodes represent extinct ancestors",

    // Round 2: Classification
    r2_title: "The Hierarchy of Life",
    r2_text: "All living things are organized into a classification system from largest groups to smallest. The levels are: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species.",
    r2_fact1: "Domain: Archaea, Bacteria, Eukarya (largest category)",
    r2_fact2: "Kingdom: animals, plants, fungi, protists (in Eukarya)",
    r2_fact3: "Species: organisms that can interbreed and produce fertile offspring (smallest category)",
    r2_fact4: "The more levels two species share, the more closely related they are",

    // Round 3: Biodiversity
    r3_title: "Biodiversity: The Variety of Life",
    r3_text: "Biodiversity includes species richness (how many species), genetic diversity (variants within species), and ecosystem diversity (variety of habitats). All are essential for healthy ecosystems.",
    r3_fact1: "Species richness = number of different species in an area",
    r3_fact2: "Genetic diversity = genetic variation within a species",
    r3_fact3: "Ecosystem diversity = different types of habitats (forests, reefs, grasslands, etc.)",
    r3_fact4: "High biodiversity = resilient ecosystems that handle stress better",

    // Round 4: Conservation
    r4_title: "Conservation: Protecting Biodiversity",
    r4_text: "Conservation efforts aim to preserve species and habitats. Main threats include habitat destruction, pollution, climate change, overexploitation, and invasive species.",
    r4_fact1: "Endangered species = very few left in wild (ex: giant pandas)",
    r4_fact2: "Habitat destruction = #1 threat to biodiversity worldwide",
    r4_fact3: "Protected areas (parks, reserves) help conserve species in nature",
    r4_fact4: "Captive breeding programs can prevent extinction (example: Arabian oryx)",

    // Round 5: Quiz
    r5_title: "Phylogeny & Conservation Review",

    // Quiz Questions
    q1_q: "What do nodes (branch points) represent in a phylogenetic tree?",
    q1_anc: "Common ancestors",
    q1_ext: "Extinct species only",
    q1_spe: "Modern species",
    q1_gen: "Genes only",

    q2_q: "What is the smallest category in biological classification?",
    q2_spe: "Species",
    q2_gen: "Genus",
    q2_fam: "Family",
    q2_ord: "Order",

    q3_q: "What is the main cause of biodiversity loss?",
    q3_hab: "Habitat destruction",
    q3_pol: "Pollution only",
    q3_hun: "Hunting only",
    q3_cli: "Climate change only",

    q4_q: "Which is a conservation strategy?",
    q4_pro: "Protected areas and nature reserves",
    q4_dam: "Building more dams",
    q4_dev: "Urban development",
    q4_cut: "Cutting down forests",

    // SVG labels
    phylogeny: "Phylogeny",
    domain: "Domain",
    kingdom: "Kingdom",
    phylum: "Phylum",
    classLabel: "Class",
    order: "Order",
    family: "Family",
    genus: "Genus",
    species: "Species",
    mostRelated: "Most related at bottom",
    genetic: "Genetic",
    ecosystem: "Ecosystem",
    conservation: "Conservation",
    protectedAreas: "Protected Areas",
    breedingPrograms: "Breeding Programs",
    habitatRestoration: "Habitat Restoration",
    review: "Review",
  },
  de: {
    r1_title: "Phylogenetische Bäume & Evolution",
    r1_text: "Phylogenetische Bäume zeigen, wie Arten durch Evolution verwandt sind. Äste spalten sich, wenn sich Populationen auseinander entwickeln, und der gemeinsame Vorfahr ist am Spaltungspunkt.",
    r1_fact1: "Knoten (Verzweigungspunkte) = gemeinsame Vorfahren",
    r1_fact2: "Äste zeigen evolutionäre Linien (Abstammung von Arten)",
    r1_fact3: "Astlänge zeigt manchmal Zeit oder genetischen Abstand an",
    r1_fact4: "Arten an den Spitzen sind heute noch am Leben; Knoten stellen ausgestorbene Vorfahren dar",

    r2_title: "Die Hierarchie des Lebens",
    r2_text: "Alle Lebewesen sind in ein Klassifizierungssystem von den größten Gruppen bis zu den kleinsten organisiert. Die Ebenen sind: Domäne → Reich → Stamm → Klasse → Ordnung → Familie → Gattung → Art.",
    r2_fact1: "Domäne: Archaeen, Bakterien, Eukarya (größte Kategorie)",
    r2_fact2: "Reich: Tiere, Pflanzen, Pilze, Protisten (in Eukarya)",
    r2_fact3: "Art: Organismen, die sich fortpflanzen können und fruchtbare Nachkommen produzieren (kleinste Kategorie)",
    r2_fact4: "Je mehr Ebenen zwei Arten teilen, desto näher verwandt sind sie",

    r3_title: "Biodiversität: Die Vielfalt des Lebens",
    r3_text: "Biodiversität umfasst Artenreichtum (wie viele Arten), genetische Vielfalt (Varianten innerhalb einer Art) und Ökosystem-Vielfalt (Vielfalt von Lebensräumen). Alle sind essentiell für gesunde Ökosysteme.",
    r3_fact1: "Artenreichtum = Anzahl verschiedener Arten in einem Gebiet",
    r3_fact2: "Genetische Vielfalt = genetische Variation innerhalb einer Art",
    r3_fact3: "Ökosystem-Vielfalt = verschiedene Arten von Lebensräumen (Wälder, Riffe, Grasland, etc.)",
    r3_fact4: "Hohe Biodiversität = widerstandsfähige Ökosysteme, die Stress besser bewältigen",

    r4_title: "Naturschutz: Biodiversität schützen",
    r4_text: "Naturschutzmaßnahmen zielen darauf ab, Arten und Lebensräume zu bewahren. Hauptbedrohungen sind Lebensraumzerstörung, Verschmutzung, Klimawandel, Übernutzung und invasive Arten.",
    r4_fact1: "Bedrohte Arten = sehr wenige in der Wildbahn übrig (Bsp: Riesenpandas)",
    r4_fact2: "Lebensraumzerstörung = #1 Bedrohung für Biodiversität weltweit",
    r4_fact3: "Schutzgebiete (Parks, Reservate) helfen Arten in der Natur zu bewahren",
    r4_fact4: "Zuchtprogramme in Gefangenschaft können Aussterben verhindern (Beispiel: Arabische Oryx)",

    r5_title: "Phylogenie & Naturschutz Überblick",

    q1_q: "Was stellen Knoten (Verzweigungspunkte) in einem phylogenetischen Baum dar?",
    q1_anc: "Gemeinsame Vorfahren",
    q1_ext: "Nur ausgestorbene Arten",
    q1_spe: "Moderne Arten",
    q1_gen: "Nur Gene",

    q2_q: "Was ist die kleinste Kategorie in der biologischen Klassifizierung?",
    q2_spe: "Art",
    q2_gen: "Gattung",
    q2_fam: "Familie",
    q2_ord: "Ordnung",

    q3_q: "Was ist die Hauptursache für Biodiversitätsverlust?",
    q3_hab: "Lebensraumzerstörung",
    q3_pol: "Nur Verschmutzung",
    q3_hun: "Nur Jagd",
    q3_cli: "Nur Klimawandel",

    q4_q: "Welche ist eine Naturschutzstrategie?",
    q4_pro: "Schutzgebiete und Naturreservate",
    q4_dam: "Mehr Dämme bauen",
    q4_dev: "Stadtentwicklung",
    q4_cut: "Wälder abholzen",

    phylogeny: "Phylogenie",
    domain: "Domäne",
    kingdom: "Reich",
    phylum: "Stamm",
    classLabel: "Klasse",
    order: "Ordnung",
    family: "Familie",
    genus: "Gattung",
    species: "Art",
    mostRelated: "Am engsten verwandt unten",
    genetic: "Genetisch",
    ecosystem: "Ökosystem",
    conservation: "Naturschutz",
    protectedAreas: "Schutzgebiete",
    breedingPrograms: "Zuchtprogramme",
    habitatRestoration: "Lebensraumwiederherstellung",
    review: "Wiederholung",
  },
  hu: {
    r1_title: "Filogenetikus fák és evolúció",
    r1_text: "A filogenetikus fák azt mutatják, hogy a fajok hogyan kapcsolódnak egymáshoz az evolúción keresztül. Az ágak akkor hasadnak meg, amikor a populációk eltérnek, és a közös ős az elágazási ponton található.",
    r1_fact1: "Csomópontok (elágazási pontok) = közös ősök",
    r1_fact2: "Ágak az evolúciós vonalakat (fajok leszármazottságát) mutatják",
    r1_fact3: "Ág hosszúsága néha időt vagy genetikai távolságot mutat",
    r1_fact4: "A csúcsoknál lévő fajok ma még élnek; a csomópontok kihaladt ősöket képviselnek",

    r2_title: "Az élet hierarchiája",
    r2_text: "Az összes élőlény egy osztályozási rendszerbe van szervezve a legnagyobb csoportoktól a legkisebbig. A szintek: Birodalom → Ország → Törzs → Osztály → Rend → Család → Nemzetség → Faj.",
    r2_fact1: "Birodalom: Archaebaktériumok, Baktériumok, Eukarióták (legnagyobb kategória)",
    r2_fact2: "Ország: állatok, növények, gombák, protozoa (az Eukarióták-ban)",
    r2_fact3: "Faj: olyan szervezetek, amelyek szaporodhatnak és termékenyen utódot termelhetnek (legkisebb kategória)",
    r2_fact4: "Minél több szintet osztanak meg két faj, annál közelebbinek tekintik őket",

    r3_title: "Biodiverzitás: Az élet sokfélesége",
    r3_text: "A biodiverzitás magában foglalja a fajok gazdagságát (hány faj), genetikai diverzitást (variáció egy fajan belül) és ökoszisztéma diverzitást (élőhelyek sokfélesége). Mind elengedhetetlen az egészséges ökoszisztémáknak.",
    r3_fact1: "Fajok gazdagsága = különböző fajok száma egy területen",
    r3_fact2: "Genetikai diverzitás = genetikai variáció egy faj keretén belül",
    r3_fact3: "Ökoszisztéma diverzitás = különféle élőhelyink (erdők, szalagok, füves síkság, stb.)",
    r3_fact4: "Magas biodiverzitás = rugalmas ökoszisztémák, amelyek jobban kezelik a stresszt",

    r4_title: "Természetvédelem: A biodiverzitás védelme",
    r4_text: "A természetvédelmi erőfeszítések a fajok és élőhelyek megőrzésére törekednek. A főbb veszélyek az élőhely megsemmisítése, szennyezés, klímaváltozás, túlhasznosítás és invazív fajok.",
    r4_fact1: "Veszélyeztetett fajok = nagyon kevés maradt a vadonban (pl: óriás pandák)",
    r4_fact2: "Élőhely megsemmisítése = #1 veszély a biodiverzitás számára világszerte",
    r4_fact3: "Védett területek (parkok, rezervátumok) segítenek a fajok természetben történő megőrzésében",
    r4_fact4: "Fogságban nevelt szaporodási programok megakadályozhatják a kihalást (például: Arábia orixja)",

    r5_title: "Filogenetika és természetvédelem áttekintés",

    q1_q: "Mit képviselnek a csomópontok (elágazási pontok) egy filogenetikus fában?",
    q1_anc: "Közös ősök",
    q1_ext: "Csak kihaladt fajok",
    q1_spe: "Modern fajok",
    q1_gen: "Csak gének",

    q2_q: "Mi a legkisebb kategória a biológiai osztályozásban?",
    q2_spe: "Faj",
    q2_gen: "Nemzetség",
    q2_fam: "Család",
    q2_ord: "Rend",

    q3_q: "Mi a biodiverzitás vesztésének fő oka?",
    q3_hab: "Élőhely megsemmisítése",
    q3_pol: "Csak szennyezés",
    q3_hun: "Csak vadászat",
    q3_cli: "Csak klímaváltozás",

    q4_q: "Melyik természetvédelmi stratégia?",
    q4_pro: "Védett területek és természeti rezervátumok",
    q4_dam: "Több gát építése",
    q4_dev: "Városi fejlesztés",
    q4_cut: "Erdők kivágása",

    phylogeny: "Törzsfejlődés",
    domain: "Domén",
    kingdom: "Ország",
    phylum: "Törzs",
    classLabel: "Osztály",
    order: "Rend",
    family: "Család",
    genus: "Nem",
    species: "Faj",
    mostRelated: "Legszorosabb rokonság alul",
    genetic: "Genetikai",
    ecosystem: "Ökoszisztéma",
    conservation: "Természetvédelem",
    protectedAreas: "Védett területek",
    breedingPrograms: "Tenyésztési programok",
    habitatRestoration: "Élőhely-helyreállítás",
    review: "Áttekintés",
  },
  ro: {
    r1_title: "Arbori filogenetici și evoluție",
    r1_text: "Arborii filogenetici arată cum sunt legate speciile prin evoluție. Ramurile se desprind când populațiile diverg, iar strămoșul comun se află la punctul de ramificare.",
    r1_fact1: "Noduri (puncte de ramificare) = strămoși comuni",
    r1_fact2: "Ramuri arată liniile evolutive (descendență specii)",
    r1_fact3: "Lungimea ramului uneori arată timp sau distanță genetică",
    r1_fact4: "Speciile din vârfuri sunt vii astazi; nodurile reprezentă strămoși extincți",

    r2_title: "Ierarhia vieții",
    r2_text: "Toate ființele vii sunt organizate într-un sistem de clasificare de la cele mai mari grupuri la cele mai mici. Nivelurile sunt: Domeniu → Regno → Filon → Clasă → Ordin → Familie → Gen → Specie.",
    r2_fact1: "Domeniu: Archaea, Bacteria, Eukarya (categoria cea mai mare)",
    r2_fact2: "Regno: animale, plante, fungi, protisti (în Eukarya)",
    r2_fact3: "Specie: organisme care se pot reproduc și produce descendenți fertili (cea mai mică categorie)",
    r2_fact4: "Cu cât mai multe niveluri împărtășesc două specii, cu atât sunt mai strâns legate",

    r3_title: "Biodiversitate: Varietatea vieții",
    r3_text: "Biodiversitatea include bogăția speciilor (câte specii), diversitate genetică (variante în specie) și diversitate de ecosisteme (varietate de habitate). Toate sunt esențiale pentru ecosisteme sănătoase.",
    r3_fact1: "Bogăție specii = numărul de specii diferite într-o zonă",
    r3_fact2: "Diversitate genetică = variație genetică în cadrul unei specii",
    r3_fact3: "Diversitate de ecosisteme = diferite tipuri de habitate (păduri, recife, pajiști, etc.)",
    r3_fact4: "Biodiversitate ridicată = ecosisteme reziliente care fac față mai bine stresului",

    r4_title: "Conservare: Protejarea biodiverzității",
    r4_text: "Eforturile de conservare urmăresc să protejeze speciile și habitatele. Amenințările principale includ distrugerea habitatului, poluare, schimbare climatică, supraexploatare și specii invazive.",
    r4_fact1: "Specii în pericol = foarte puține rămase în sălbăticie (ex: urși panda gigant)",
    r4_fact2: "Distrugerea habitatului = #1 amenințare la biodiversitate la nivel mondial",
    r4_fact3: "Arii protejate (parcuri, rezerve) ajută la conservarea speciilor în natură",
    r4_fact4: "Programe de reproducere în captivitate pot preveni extincția (exemplu: orix arab)",

    r5_title: "Filogenie și conservare - Recapitulare",

    q1_q: "Ce reprezintă nodurile (puncte de ramificare) într-un arbore filogjenetic?",
    q1_anc: "Strămoși comuni",
    q1_ext: "Doar specii extinse",
    q1_spe: "Specii moderne",
    q1_gen: "Doar gene",

    q2_q: "Care este cea mai mică categorie în clasificarea biologică?",
    q2_spe: "Specie",
    q2_gen: "Gen",
    q2_fam: "Familie",
    q2_ord: "Ordin",

    q3_q: "Care este cauza principală a pierderii biodiverzității?",
    q3_hab: "Distrugerea habitatului",
    q3_pol: "Doar poluare",
    q3_hun: "Doar vânătoare",
    q3_cli: "Doar schimbare climatică",

    q4_q: "Care este o strategie de conservare?",
    q4_pro: "Arii protejate și rezerve naturale",
    q4_dam: "Construire mai multor barajuri",
    q4_dev: "Dezvoltare urbană",
    q4_cut: "Tăierea pădurilor",

    phylogeny: "Filogenie",
    domain: "Domeniu",
    kingdom: "Regn",
    phylum: "Încrengătură",
    classLabel: "Clasă",
    order: "Ordin",
    family: "Familie",
    genus: "Gen",
    species: "Specie",
    mostRelated: "Cele mai înrudite jos",
    genetic: "Genetic",
    ecosystem: "Ecosistem",
    conservation: "Conservare",
    protectedAreas: "Arii protejate",
    breedingPrograms: "Programe de reproducere",
    habitatRestoration: "Restaurarea habitatului",
    review: "Recapitulare",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function SvgRound1(lang: string) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <polyline points="120,20 120,80 60,140 120,140 180,140" fill="none" stroke="#27AE60" strokeWidth="2" />
      <circle cx="120" cy="80" r="5" fill="#FFD700" />
      <circle cx="60" cy="140" r="4" fill="#4ECDC4" />
      <circle cx="120" cy="140" r="4" fill="#4ECDC4" />
      <circle cx="180" cy="140" r="4" fill="#4ECDC4" />
      <text x="120" y="158" textAnchor="middle" fontSize="11" fill="white">{t.phylogeny}</text>
    </svg>
  );
}

function SvgRound2(lang: string) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <rect x="30" y="15" width="180" height="130" rx="8" fill="rgba(39,174,96,0.15)" stroke="#27AE60" strokeWidth="2" />
      <text x="120" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">{t.domain}</text>
      <text x="120" y="53" textAnchor="middle" fontSize="9" fill="white/80">↓ {t.kingdom} ↓ {t.phylum} ↓ {t.classLabel}</text>
      <text x="120" y="68" textAnchor="middle" fontSize="9" fill="white/80">↓ {t.order} ↓ {t.family} ↓ {t.genus}</text>
      <text x="120" y="83" textAnchor="middle" fontSize="9" fill="white/80">↓ {t.species}</text>
      <text x="120" y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#27AE60">{t.mostRelated}</text>
    </svg>
  );
}

function SvgRound3(lang: string) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <circle cx="70" cy="50" r="25" fill="rgba(39,174,96,0.3)" stroke="#27AE60" strokeWidth="2" />
      <text x="70" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">{t.species}</text>
      <circle cx="170" cy="50" r="25" fill="rgba(78,205,196,0.3)" stroke="#4ECDC4" strokeWidth="2" />
      <text x="170" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">{t.genetic}</text>
      <circle cx="120" cy="120" r="25" fill="rgba(149,225,211,0.3)" stroke="#95E1D3" strokeWidth="2" />
      <text x="120" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">{t.ecosystem}</text>
    </svg>
  );
}

function SvgRound4(lang: string) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <rect x="20" y="40" width="200" height="80" rx="8" fill="rgba(255,107,107,0.2)" stroke="#FF6B6B" strokeWidth="2" />
      <text x="120" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">{t.conservation}</text>
      <text x="120" y="80" textAnchor="middle" fontSize="10" fill="white/80">{t.protectedAreas}</text>
      <text x="120" y="97" textAnchor="middle" fontSize="10" fill="white/80">{t.breedingPrograms}</text>
      <text x="120" y="114" textAnchor="middle" fontSize="10" fill="white/80">{t.habitatRestoration}</text>
    </svg>
  );
}

function SvgRound5(lang: string) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      <polyline points="40,120 80,60 120,100 160,40 200,80" fill="none" stroke="#27AE60" strokeWidth="2" />
      <circle cx="40" cy="120" r="3" fill="#27AE60" />
      <circle cx="80" cy="60" r="3" fill="#27AE60" />
      <circle cx="120" cy="100" r="3" fill="#27AE60" />
      <circle cx="160" cy="40" r="3" fill="#27AE60" />
      <circle cx="200" cy="80" r="3" fill="#27AE60" />
      <text x="120" y="150" textAnchor="middle" fontSize="12" fill="white">{t.review}</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function PhylogenyExplorer({
  lang = "en",
  color = "#27AE60",
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
            choices: ["q1_anc", "q1_ext", "q1_spe", "q1_gen"],
            answer: "q1_anc",
          },
          {
            question: "q2_q",
            choices: ["q2_spe", "q2_gen", "q2_fam", "q2_ord"],
            answer: "q2_spe",
          },
          {
            question: "q3_q",
            choices: ["q3_hab", "q3_pol", "q3_hun", "q3_cli"],
            answer: "q3_hab",
          },
          {
            question: "q4_q",
            choices: ["q4_pro", "q4_dam", "q4_dev", "q4_cut"],
            answer: "q4_pro",
          },
        ],
      },
    ],
  };

  return <ExplorerEngine def={def} color={color} lang={lang} onDone={onDone} />;
}
