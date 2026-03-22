"use client";
// EcologyExplorer — Klasse 7: Populations, Niches, Competition, Symbiosis
// Teaching-first pattern: R1-R4 info rounds with MCQ, R5 quiz

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Populations
    r1_title: "Populations: Groups of the Same Species",
    r1_text: "A population is all individuals of one species living in the same area. Populations grow, shrink, and change over time based on resources and conditions.",
    r1_fact1: "Population density = number of individuals per unit area",
    r1_fact2: "Factors that increase population: high birth rate, immigration, plenty of resources",
    r1_fact3: "Factors that limit population: predation, disease, starvation, lack of space",
    r1_fact4: "Carrying capacity = maximum population size an environment can support",

    // Round 2: Ecological Niches
    r2_title: "Ecological Niches: Roles in the Ecosystem",
    r2_text: "A niche is the specific role and habitat of an organism. No two species can occupy the exact same niche in the same area.",
    r2_fact1: "Habitat = where an organism lives (forest, ocean, desert)",
    r2_fact2: "Niche = what role it plays (food source, predator, decomposer) + how it uses resources",
    r2_fact3: "Niche includes: diet, shelter, breeding sites, activity times",
    r2_fact4: "Competitive exclusion principle: species with identical niches cannot coexist",

    // Round 3: Competition
    r3_title: "Competition: Organisms Fighting for Resources",
    r3_text: "Competition happens when organisms need the same resources: food, water, space, sunlight. It occurs within and between species.",
    r3_fact1: "Intraspecific competition: among members of the same species (similar needs)",
    r3_fact2: "Interspecific competition: between different species (sharing resources like habitat or food)",
    r3_fact3: "Competition can lead to: resource partitioning, evolution of differences, or one species outcompeting another",
    r3_fact4: "Resource partitioning: species divide resources to reduce competition (different food sources or times of activity)",

    // Round 4: Symbiosis Types
    r4_title: "Symbiosis: Living Together",
    r4_text: "Symbiosis is a close relationship between two different species. The benefits and costs vary for each partner.",
    r4_fact1: "Mutualism (+/+): both species benefit (clownfish & sea anemone, bees & flowers)",
    r4_fact2: "Commensalism (+/0): one benefits, one is unaffected (remora fish on shark, orchid on tree)",
    r4_fact3: "Parasitism (+/-): one benefits, one is harmed (tapeworm in host, mosquito feeding on blood)",
    r4_fact4: "Predation (+/-) is different from parasitism: predator kills prey, parasite weakens host gradually",

    // Round 5: Quiz
    r5_title: "Ecology Review",

    // Quiz Questions
    q1_q: "What is the maximum population size an environment can support?",
    q1_capacity: "Carrying capacity",
    q1_growth: "Population growth",
    q1_density: "Population density",
    q1_rate: "Birth rate",

    q2_q: "A lion and a cheetah hunt different prey in the same savanna. What is this an example of?",
    q2_partition: "Resource partitioning",
    q2_mutualism: "Mutualism",
    q2_competition: "Direct competition",
    q2_parasitism: "Parasitism",

    q3_q: "Which relationship benefits both organisms?",
    q3_mutualism: "Mutualism",
    q3_parasitism: "Parasitism",
    q3_predation: "Predation",
    q3_commensalism: "Commensalism",

    q4_q: "A whale benefits by swimming while small barnacles attach to its body. The barnacles get transportation.",
    q4_a: "Mutualism (both benefit)",
    q4_b: "Commensalism (barnacles benefit only)",
    q4_c: "Parasitism (whale is harmed)",
    q4_d: "Competition (they fight for space)",

    // Round-specific MCQ
    r1_q: "Which factor would decrease a rabbit population?",
    r1_q_more_food: "More food available",
    r1_q_more_foxes: "More fox predators",
    r1_q_more_space: "More grazing area",
    r1_q_less_disease: "Less disease",

    r2_q: "What term describes the specific role and habitat of an organism?",
    r2_q_habitat: "Habitat",
    r2_q_niche: "Niche",
    r2_q_territory: "Territory",
    r2_q_range: "Range",

    r3_q: "What do lions and hyenas experience when hunting the same prey?",
    r3_q_intraspecific: "Intraspecific competition",
    r3_q_interspecific: "Interspecific competition",
    r3_q_mutualism: "Mutualism",
    r3_q_predation: "Predation",

    r4_q: "A tick feeds on a dog's blood, weakening the dog. What is this relationship?",
    r4_q_parasitism: "Parasitism",
    r4_q_mutualism: "Mutualism",
    r4_q_commensalism: "Commensalism",
    r4_q_predation: "Predation",
  },
  de: {
    r1_title: "Populationen: Gruppen derselben Art",
    r1_text: "Eine Population besteht aus allen Individuen einer Art, die im selben Gebiet leben. Populationen wachsen, schrumpfen und verändern sich über die Zeit basierend auf Ressourcen und Bedingungen.",
    r1_fact1: "Populationsdichte = Anzahl der Individuen pro Flächeneinheit",
    r1_fact2: "Faktoren, die die Population erhöhen: hohe Geburtenrate, Zuwanderung, reichlich Ressourcen",
    r1_fact3: "Faktoren, die die Population begrenzen: Raubtiere, Krankheiten, Hunger, Platzmangel",
    r1_fact4: "Umweltkapazität = maximale Populationsgröße, die eine Umgebung unterstützen kann",

    r2_title: "Ökologische Nische: Rollen im Ökosystem",
    r2_text: "Eine Nische ist die spezifische Rolle und der Lebensraum eines Organismus. Keine zwei Arten können die genau gleiche Nische im selben Gebiet besetzen.",
    r2_fact1: "Lebensraum = wo ein Organismus lebt (Wald, Ozean, Wüste)",
    r2_fact2: "Nische = welche Rolle es spielt (Nahrungsquelle, Räuber, Zersetzer) + wie es Ressourcen nutzt",
    r2_fact3: "Nische umfasst: Ernährung, Unterkunft, Brutstätten, Aktivitätszeiten",
    r2_fact4: "Prinzip des Konkurrenzausschlusses: Arten mit identischen Nischen können nicht koexistieren",

    r3_title: "Konkurrenz: Organismen kämpfen um Ressourcen",
    r3_text: "Konkurrenz entsteht, wenn Organismen die gleichen Ressourcen benötigen: Nahrung, Wasser, Platz, Sonnenlicht. Sie tritt innerhalb und zwischen Arten auf.",
    r3_fact1: "Intraspezifische Konkurrenz: zwischen Mitgliedern derselben Art (ähnliche Bedürfnisse)",
    r3_fact2: "Interspezifische Konkurrenz: zwischen verschiedenen Arten (gemeinsame Ressourcen wie Lebensraum oder Nahrung)",
    r3_fact3: "Konkurrenz kann führen zu: Ressourcenteilung, evolutionäre Unterschiede, oder eine Art verdrängt die andere",
    r3_fact4: "Ressourcenteilung: Arten teilen sich Ressourcen, um Konkurrenz zu verringern (unterschiedliche Nahrungsquellen oder Aktivitätszeiten)",

    r4_title: "Symbiose: Gemeinsames Leben",
    r4_text: "Symbiose ist eine enge Beziehung zwischen zwei verschiedenen Arten. Der Nutzen und die Kosten sind unterschiedlich für jeden Partner.",
    r4_fact1: "Mutualismus (+/+): beide Arten profitieren (Clownfisch & Seeanemone, Bienen & Blüten)",
    r4_fact2: "Kommensalismus (+/0): einer profitiert, einer ist unbeeinflusst (Schiffshalter auf Hai, Orchidee auf Baum)",
    r4_fact3: "Parasitismus (+/-): einer profitiert, einer wird geschädigt (Bandwürmer im Wirt, Mücke Blutmahlzeit)",
    r4_fact4: "Raub (+/-) ist anders als Parasitismus: Raubtier tötet Beute, Parasit schwächt den Wirt schrittweise",

    r5_title: "Ökologie Wiederholung",

    q1_q: "Was ist die maximale Populationsgröße, die eine Umgebung unterstützen kann?",
    q1_capacity: "Umweltkapazität",
    q1_growth: "Populationswachstum",
    q1_density: "Populationsdichte",
    q1_rate: "Geburtenrate",

    q2_q: "Ein Löwe und ein Gepard jagen unterschiedliche Beute in der gleichen Savanne. Wofür ist dies ein Beispiel?",
    q2_partition: "Ressourcenteilung",
    q2_mutualism: "Mutualismus",
    q2_competition: "Direkte Konkurrenz",
    q2_parasitism: "Parasitismus",

    q3_q: "Welche Beziehung begünstigt beide Organismen?",
    q3_mutualism: "Mutualismus",
    q3_parasitism: "Parasitismus",
    q3_predation: "Raub",
    q3_commensalism: "Kommensalismus",

    q4_q: "Ein Wal profitiert vom Schwimmen, während kleine Seepocken an seinem Körper anhaften. Die Seepocken bekommen Transport.",
    q4_a: "Mutualismus (beide profitieren)",
    q4_b: "Kommensalismus (nur Seepocken profitieren)",
    q4_c: "Parasitismus (Wal wird geschädigt)",
    q4_d: "Konkurrenz (sie kämpfen um Platz)",

    r1_q: "Welcher Faktor würde eine Kaninchenpopulation verringern?",
    r1_q_more_food: "Mehr Nahrung verfügbar",
    r1_q_more_foxes: "Mehr Fuchsraubtiere",
    r1_q_more_space: "Mehr Weideplatz",
    r1_q_less_disease: "Weniger Krankheit",

    r2_q: "Welcher Begriff beschreibt die spezifische Rolle und den Lebensraum eines Organismus?",
    r2_q_habitat: "Lebensraum",
    r2_q_niche: "Nische",
    r2_q_territory: "Territorium",
    r2_q_range: "Verbreitungsgebiet",

    r3_q: "Was erleben Löwen und Hyänen, wenn sie die gleiche Beute jagen?",
    r3_q_intraspecific: "Intraspezifische Konkurrenz",
    r3_q_interspecific: "Interspezifische Konkurrenz",
    r3_q_mutualism: "Mutualismus",
    r3_q_predation: "Raub",

    r4_q: "Eine Zecke saugt Blut von einem Hund und schwächt den Hund. Was ist diese Beziehung?",
    r4_q_parasitism: "Parasitismus",
    r4_q_mutualism: "Mutualismus",
    r4_q_commensalism: "Kommensalismus",
    r4_q_predation: "Raub",
  },
  hu: {
    r1_title: "Populációk: Azonos Fajok Csoportjai",
    r1_text: "A populáció egy faj összes egyede, amely ugyanabban a területen él. A populációk nőnek, csökkennek és idővel változnak az erőforrások és feltételek alapján.",
    r1_fact1: "Populáció sűrűsége = egyedek száma terület-egységenként",
    r1_fact2: "A populációt növelő tényezők: magas születésarány, bevándorlás, sok erőforrás",
    r1_fact3: "A populációt korlátozó tényezők: ragadozás, betegség, éhezés, hely hiánya",
    r1_fact4: "Eltartó képesség = a maximális populáció nagysága, amit a környezet támogatni tud",

    r2_title: "Ökológiai Niché: Szerepek az Ökoszisztémában",
    r2_text: "A niché a szervezet specifikus szerepe és élőhelye. Nem két faj nem lehet azonos niche-ben ugyanabban a területen.",
    r2_fact1: "Élőhely = ahol az organismus él (erdő, óceán, sivatag)",
    r2_fact2: "Niché = milyen szerepet játszik (élelemforrás, ragadozó, lebontó) + hogyan használja az erőforrásokat",
    r2_fact3: "A niché magában foglalja: táplálkozás, menedék, szaporodási helyek, aktivitás időpontjai",
    r2_fact4: "Versenykizárás elve: azonos niche-ű fajok nem koegzisztálhatnak",

    r3_title: "Versengés: Szervezetek Küzdenek az Erőforrásokért",
    r3_text: "A versengés akkor fordul elő, amikor az organizmok ugyanazokat az erőforrásokat igénylik: táplálék, víz, hely, napfény. A fajok között és belül is előfordul.",
    r3_fact1: "Fajspecifikus versengés: ugyanazon faj tagjai között (hasonló szükségletek)",
    r3_fact2: "Fajok közötti versengés: különböző fajok között (közös erőforrások, mint élőhely vagy élelmiszer)",
    r3_fact3: "A versengés vezethet: erőforrások megosztásához, evolúciós különbségekhez, vagy egy faj kizsákmányolásához",
    r3_fact4: "Erőforrások megosztása: fajok osztanak meg erőforrásokat a versengés csökkentésére (különböző élelemforrások vagy aktivitás időpontjai)",

    r4_title: "Szimbiózis: Közös Élet",
    r4_text: "A szimbiózis szoros kapcsolat két különböző faj között. Az előnyök és költségek eltérőek az egyes partnerek számára.",
    r4_fact1: "Mutualizmus (+/+): mindkét faj profitál (bohóc hal és tengeri anemon, méhek és virágok)",
    r4_fact2: "Kommenzalizmus (+/0): az egyik profitál, az egyik érintett (remora hal a cápa mellett, orchidea a fán)",
    r4_fact3: "Parazitizmus (+/-): az egyik profitál, az egyik sérült (szalagféreg a gazdában, szúnyog a vérszívásban)",
    r4_fact4: "A ragadozás (+/-) különbözik a parazitizmustól: a ragadozó megöli a préda, a parazita lassacskán gyengíti a gazdát",

    r5_title: "Ökológia Áttekintés",

    q1_q: "Mekkora a maximális populáció nagysága, amit a környezet támogatni tud?",
    q1_capacity: "Eltartó képesség",
    q1_growth: "Populáció növekedése",
    q1_density: "Populáció sűrűsége",
    q1_rate: "Születésarány",

    q2_q: "Egy oroszlán és egy gepárd különböző zsákmányt vadász ugyanabban a szavannában. Ez minek a példája?",
    q2_partition: "Erőforrások megosztása",
    q2_mutualism: "Mutualizmus",
    q2_competition: "Közvetlen versengés",
    q2_parasitism: "Parazitizmus",

    q3_q: "Melyik kapcsolat előnye mindkét organizmuson?",
    q3_mutualism: "Mutualizmus",
    q3_parasitism: "Parazitizmus",
    q3_predation: "Ragadozás",
    q3_commensalism: "Kommenzalizmus",

    q4_q: "Egy bálna profitál az úszásból, miközben kis kagylók tapadnak a testére. A kagyló szállítást kap.",
    q4_a: "Mutualizmus (mindketten profitálnak)",
    q4_b: "Kommenzalizmus (csak kagylók profitálnak)",
    q4_c: "Parazitizmus (bálna sérült)",
    q4_d: "Versengés (helyre küzdenek)",

    r1_q: "Melyik tényező csökkentené a nyúl populációt?",
    r1_q_more_food: "Több elélelmiszer elérhető",
    r1_q_more_foxes: "Több róka ragadozó",
    r1_q_more_space: "Több legelőhely",
    r1_q_less_disease: "Kevesebb betegség",

    r2_q: "Melyik kifejezés írja le a szervezet specifikus szerepét és élőhelyét?",
    r2_q_habitat: "Élőhely",
    r2_q_niche: "Niché",
    r2_q_territory: "Terület",
    r2_q_range: "Terjedési terület",

    r3_q: "Mit tapasztalnak az oroszlánok és hiénák, amikor ugyanazt a zsákmányt vadásznak?",
    r3_q_intraspecific: "Fajspecifikus versengés",
    r3_q_interspecific: "Fajok közötti versengés",
    r3_q_mutualism: "Mutualizmus",
    r3_q_predation: "Ragadozás",

    r4_q: "Egy kullancs egy kutya vérét szívja meg, meggyengítve a kutyát. Mi ez a kapcsolat?",
    r4_q_parasitism: "Parazitizmus",
    r4_q_mutualism: "Mutualizmus",
    r4_q_commensalism: "Kommenzalizmus",
    r4_q_predation: "Ragadozás",
  },
  ro: {
    r1_title: "Populații: Grupuri ale Aceleiași Specii",
    r1_text: "O populație este toți indivizii unei specii care trăiesc în aceeași zonă. Populațiile cresc, se micșorează și se schimbă în timp pe baza resurselor și condițiilor.",
    r1_fact1: "Densitatea populației = numărul indivizilor pe unitate de suprafață",
    r1_fact2: "Factori care măresc populația: rată de natalitate ridicată, imigrație, resurse abundente",
    r1_fact3: "Factori care limitează populația: prădare, boli, foamete, lipsă de spațiu",
    r1_fact4: "Capacitatea de suport = dimensiunea maximă a populației pe care o poate susține un mediu",

    r2_title: "Nișa Ecologică: Roluri în Ecosistem",
    r2_text: "O nișă este rolul și habitatul specific al unui organism. Două specii nu pot ocupa exact aceeași nișă în aceeași zonă.",
    r2_fact1: "Habitat = unde trăiește un organism (pădure, ocean, deșert)",
    r2_fact2: "Nișă = ce rol joacă (sursă de hrană, prădător, descompozitor) + cum folosește resursele",
    r2_fact3: "Nișa include: dieta, adăpost, site-uri de reproducere, timpurile de activitate",
    r2_fact4: "Principiul excluderii competitive: speciile cu nișe identice nu pot coexista",

    r3_title: "Competiție: Organisme Luptă pentru Resurse",
    r3_text: "Competiția apare atunci când organizmele au nevoie de aceleași resurse: hrană, apă, spațiu, lumină soarelui. Se întâmplă în și între specii.",
    r3_fact1: "Competiție intraspecie: între membrii aceleiași specii (nevoi similare)",
    r3_fact2: "Competiție interspecie: între specii diferite (resurse partajate, cum ar fi habitat sau hrană)",
    r3_fact3: "Competiția poate duce la: împărțirea resurselor, diferențe evoluționare, sau o specie depășește cealaltă",
    r3_fact4: "Împărțirea resurselor: speciile împart resursele pentru a reduce competiția (surse alimentare diferite sau ori de activitate)",

    r4_title: "Simbioza: Trăind Împreună",
    r4_text: "Simbioza este o relație strânsă între două specii diferite. Beneficiile și costurile variază pentru fiecare partener.",
    r4_fact1: "Mutualism (+/+): ambele specii beneficiază (peștele clovn și sea anemone, albine și flori)",
    r4_fact2: "Comensalism (+/0): una beneficiază, una este neafectată (remora pe rechin, orhidee pe copac)",
    r4_fact3: "Parazitism (+/-): una beneficiază, una este dăunată (teniei în gazdă, țânțar care se alimentează cu sânge)",
    r4_fact4: "Prădarea (+/-) este diferită de parazitism: prădator ucide prada, parazit slăbește gazda treptat",

    r5_title: "Ecologie Recapitulare",

    q1_q: "Care este dimensiunea maximă a populației pe care o poate susține un mediu?",
    q1_capacity: "Capacitatea de suport",
    q1_growth: "Creșterea populației",
    q1_density: "Densitatea populației",
    q1_rate: "Rata de natalitate",

    q2_q: "Un leu și un ghepard vânează prada diferită în aceeași savană. Pentru ce este aceasta un exemplu?",
    q2_partition: "Împărțirea resurselor",
    q2_mutualism: "Mutualism",
    q2_competition: "Competiție directă",
    q2_parasitism: "Parazitism",

    q3_q: "Care relație beneficiază ambele organisme?",
    q3_mutualism: "Mutualism",
    q3_parasitism: "Parazitism",
    q3_predation: "Prădare",
    q3_commensalism: "Comensalism",

    q4_q: "O balenă beneficiază prin înot în timp ce barnacles mici se atașează la corp. Barnacles obține transport.",
    q4_a: "Mutualism (ambii beneficiază)",
    q4_b: "Comensalism (doar barnacles beneficiază)",
    q4_c: "Parazitism (balena este dăunată)",
    q4_d: "Competiție (se luptă pentru spațiu)",

    r1_q: "Ce factor ar micșora o populație de iepuri?",
    r1_q_more_food: "Mai multă hrană disponibilă",
    r1_q_more_foxes: "Mai mulți vulpi prădători",
    r1_q_more_space: "Mai multă suprafață de pășunat",
    r1_q_less_disease: "Mai puțini boli",

    r2_q: "Ce termen descrie rolul specific și habitatul unui organism?",
    r2_q_habitat: "Habitat",
    r2_q_niche: "Nișă",
    r2_q_territory: "Teritoriu",
    r2_q_range: "Gamă",

    r3_q: "Ce experimentează leii și hienele atunci când vânează aceeași pradă?",
    r3_q_intraspecific: "Competiție intraspecie",
    r3_q_interspecific: "Competiție interspecie",
    r3_q_mutualism: "Mutualism",
    r3_q_predation: "Prădare",

    r4_q: "O păduchă se hrănește cu sângele unui câine, slăbind câinele. Ce relație este aceasta?",
    r4_q_parasitism: "Parazitism",
    r4_q_mutualism: "Mutualism",
    r4_q_commensalism: "Comensalism",
    r4_q_predation: "Prădare",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (simple colored shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <rect width="240" height="160" fill="#E8F5E9" />

      {/* Ground/grass */}
      <rect x="0" y="100" width="240" height="60" fill="#81C784" />

      {/* Low population (left): few rabbits */}
      <g>
        <circle cx="30" cy="110" r="8" fill="#8B4513" />
        <circle cx="50" cy="115" r="8" fill="#8B4513" />
        <circle cx="70" cy="108" r="8" fill="#8B4513" />
      </g>

      {/* Arrow showing population growth */}
      <path d="M 100 130 L 140 130" stroke="#666" strokeWidth="2" fill="none" markerEnd="url(#arrowhead1)" />
      <text x="120" y="145" textAnchor="middle" fontSize="10" fill="#666">Growth</text>

      {/* High population (right): many rabbits */}
      <g>
        <circle cx="160" cy="105" r="8" fill="#8B4513" />
        <circle cx="180" cy="110" r="8" fill="#8B4513" />
        <circle cx="200" cy="108" r="8" fill="#8B4513" />
        <circle cx="170" cy="120" r="8" fill="#8B4513" />
        <circle cx="190" cy="125" r="8" fill="#8B4513" />
        <circle cx="210" cy="120" r="8" fill="#8B4513" />
      </g>

      {/* Carrying capacity line (top) */}
      <line x1="0" y1="80" x2="240" y2="80" stroke="#D32F2F" strokeWidth="2" strokeDasharray="5,5" />
      <text x="10" y="75" fontSize="9" fill="#D32F2F">Carrying capacity</text>

      <defs>
        <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#666" />
        </marker>
      </defs>
    </svg>
  );
}

function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <rect width="240" height="160" fill="#FFF8E1" />

      {/* Tree */}
      <rect x="25" y="80" width="10" height="60" fill="#8B6F47" />
      <circle cx="30" cy="70" r="25" fill="#4CAF50" />

      {/* Bird 1 - eating insects (top) */}
      <circle cx="50" cy="50" r="6" fill="#FF6B6B" />
      <ellipse cx="45" cy="48" rx="4" ry="3" fill="#FFE0E0" />

      {/* Bird 2 - nesting (middle) */}
      <circle cx="60" cy="85" r="6" fill="#42A5F5" />
      <rect x="55" y="82" width="10" height="8" rx="2" fill="#D2B48C" />

      {/* Squirrel - eating acorns (side) */}
      <circle cx="25" cy="110" r="5" fill="#FF8A65" />

      {/* Deer - grazing grass (bottom) */}
      <circle cx="70" cy="130" r="8" fill="#795548" />

      {/* Niche labels with colored boxes (no text - just shapes) */}
      <rect x="45" y="45" width="12" height="4" fill="#FF6B6B" opacity="0.3" />
      <rect x="55" y="82" width="12" height="4" fill="#42A5F5" opacity="0.3" />
      <rect x="22" y="108" width="12" height="4" fill="#FF8A65" opacity="0.3" />
      <rect x="68" y="128" width="12" height="4" fill="#795548" opacity="0.3" />

      {/* Arrows showing different niches (food sources) */}
      <circle cx="130" cy="50" r="5" fill="#4CAF50" /> {/* insects */}
      <path d="M 55 48 L 125 48" stroke="#FF6B6B" strokeWidth="1" fill="none" opacity="0.5" />

      <rect x="130" y="80" width="6" height="6" fill="#D2B48C" /> {/* twigs for nest */}
      <path d="M 60 85 L 130 85" stroke="#42A5F5" strokeWidth="1" fill="none" opacity="0.5" />

      <circle cx="130" cy="110" r="4" fill="#C4A000" /> {/* acorns */}
      <path d="M 30 110 L 126 110" stroke="#FF8A65" strokeWidth="1" fill="none" opacity="0.5" />

      <circle cx="130" cy="130" r="5" fill="#81C784" /> {/* grass */}
      <path d="M 75 130 L 125 130" stroke="#795548" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <rect width="240" height="160" fill="#FCE4EC" />

      {/* Resource (food) in center */}
      <circle cx="120" cy="80" r="15" fill="#FFD700" />

      {/* Species 1 (left) - reaching for resource */}
      <circle cx="60" cy="80" r="12" fill="#FF6B6B" />
      <path d="M 72 80 L 105 80" stroke="#FF6B6B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />

      {/* Species 2 (right) - also reaching for resource */}
      <circle cx="180" cy="80" r="12" fill="#42A5F5" />
      <path d="M 168 80 L 135 80" stroke="#42A5F5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />

      {/* Stress/conflict lines */}
      <path d="M 100 65 Q 110 50 120 65" stroke="#FF6B6B" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M 140 65 Q 130 50 120 65" stroke="#42A5F5" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Limiting factor (example: food scarcity indicator) */}
      <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#666">Limited food</text>
      <rect x="85" y="120" width="70" height="2" fill="#C0C0C0" opacity="0.5" />

      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#FF6B6B" />
        </marker>
        <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
          <polygon points="10 0, 0 3, 10 6" fill="#42A5F5" />
        </marker>
      </defs>
    </svg>
  );
}

function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <rect width="240" height="160" fill="#E0F2F1" />

      {/* MUTUALISM (top left) */}
      <g>
        <circle cx="40" cy="40" r="12" fill="#4CAF50" /> {/* flower */}
        <circle cx="60" cy="40" r="10" fill="#FFB74D" /> {/* bee */}
        <path d="M 40 40 L 60 40" stroke="#4CAF50" strokeWidth="1.5" />
        <text x="50" y="65" textAnchor="middle" fontSize="8" fill="#666">+/+</text>
      </g>

      {/* COMMENSALISM (top right) */}
      <g>
        <circle cx="170" cy="40" r="14" fill="#8B4513" /> {/* tree/host */}
        <ellipse cx="185" cy="30" rx="8" ry="6" fill="#FFB74D" /> {/* orchid */}
        <path d="M 175 35 L 180 32" stroke="#999" strokeWidth="1" />
        <text x="180" y="65" textAnchor="middle" fontSize="8" fill="#666">+/0</text>
      </g>

      {/* PARASITISM (bottom left) */}
      <g>
        <circle cx="40" cy="120" r="15" fill="#FF6B6B" /> {/* host */}
        <circle cx="58" cy="115" r="6" fill="#333" /> {/* parasite */}
        <path d="M 50 118 L 58 115" stroke="#333" strokeWidth="1.5" />
        <text x="50" y="150" textAnchor="middle" fontSize="8" fill="#666">+/-</text>
      </g>

      {/* PREDATION (bottom right) */}
      <g>
        <circle cx="185" cy="125" r="10" fill="#42A5F5" /> {/* prey */}
        <circle cx="170" cy="115" r="13" fill="#D32F2F" /> {/* predator */}
        <path d="M 175 118 L 183 122" stroke="#D32F2F" strokeWidth="2" />
        <text x="180" y="150" textAnchor="middle" fontSize="8" fill="#666">+/-</text>
      </g>
    </svg>
  );
}

function SVG_R5(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <rect width="240" height="160" fill="#F3E5F5" />

      {/* Title concept: Ecology web showing all relationships */}
      <circle cx="120" cy="80" r="50" fill="none" stroke="#9C27B0" strokeWidth="1" opacity="0.3" />

      {/* Central sun/energy source */}
      <circle cx="120" cy="80" r="8" fill="#FFD700" />

      {/* Producer (plant) */}
      <circle cx="120" cy="30" r="10" fill="#4CAF50" />
      <path d="M 120 38 L 120 72" stroke="#666" strokeWidth="1" />

      {/* Herbivore */}
      <circle cx="70" cy="80" r="8" fill="#8B4513" />
      <path d="M 112 80 L 78 80" stroke="#666" strokeWidth="1" />

      {/* Carnivore */}
      <circle cx="170" cy="80" r="8" fill="#D32F2F" />
      <path d="M 128 80 L 162 80" stroke="#666" strokeWidth="1" />

      {/* Decomposer */}
      <circle cx="120" cy="130" r="8" fill="#795548" />
      <path d="M 120 122 L 120 88" stroke="#666" strokeWidth="1.5" strokeDasharray="2,2" />

      {/* Cycle arrows connecting */}
      <path d="M 70 72 Q 50 50 70 30" stroke="#999" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 170 72 Q 190 50 170 30" stroke="#999" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      questions: [
        {
          question: "r1_q",
          choices: ["r1_q_more_food", "r1_q_more_foxes", "r1_q_more_space", "r1_q_less_disease"],
          answer: "r1_q_more_foxes",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      questions: [
        {
          question: "r2_q",
          choices: ["r2_q_habitat", "r2_q_niche", "r2_q_territory", "r2_q_range"],
          answer: "r2_q_niche",
        },
      ],
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
          choices: ["r3_q_intraspecific", "r3_q_interspecific", "r3_q_mutualism", "r3_q_predation"],
          answer: "r3_q_interspecific",
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
          choices: ["r4_q_parasitism", "r4_q_mutualism", "r4_q_commensalism", "r4_q_predation"],
          answer: "r4_q_parasitism",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: SVG_R5,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_capacity", "q1_growth", "q1_density", "q1_rate"],
          answer: "q1_capacity",
        },
        {
          question: "q3_q",
          choices: ["q3_mutualism", "q3_parasitism", "q3_predation", "q3_commensalism"],
          answer: "q3_mutualism",
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

export default function EcologyExplorer({ color = "#26A69A", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
