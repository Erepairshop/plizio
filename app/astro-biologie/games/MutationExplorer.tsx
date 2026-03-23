"use client";
// MutationExplorer — Klasse 8: Mutation & Gene Technology (Mutation & Gentechnologie)
// Teaching-first pattern: R1-R4 info rounds with MCQ, R5 review quiz
// Topic: Types of mutations, causes, genetic engineering basics, bioethics

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Types of Mutations
    r1_title: "Types of Mutations",
    r1_text: "A mutation is a change in DNA sequence. There are different types, each affecting genes differently.",
    r1_fact1: "Point mutation: A single nucleotide is replaced with a different one",
    r1_fact2: "Insertion: Extra nucleotides are added to the DNA sequence",
    r1_fact3: "Deletion: Nucleotides are removed from the DNA sequence",
    r1_fact4: "Some mutations have no effect; others change proteins and affect traits",
    r1_q: "What happens in a point mutation?",
    r1_a: "A single nucleotide is replaced",
    r1_b: "Multiple nucleotides are added",
    r1_c: "Nucleotides are removed",
    r1_d: "DNA strands are separated",

    // Round 2: Causes of Mutations
    r2_title: "What Causes Mutations?",
    r2_text: "Mutations can happen naturally or be caused by environmental factors. Some are harmful; others may be beneficial.",
    r2_fact1: "UV radiation from the sun can damage DNA in skin cells",
    r2_fact2: "Chemical substances (like tobacco smoke) can cause DNA damage",
    r2_fact3: "Errors in DNA replication can introduce mutations",
    r2_fact4: "Most mutations are harmless; some are beneficial; a few are harmful",
    r2_q: "Which is NOT a common cause of mutations?",
    r2_uv: "UV radiation",
    r2_chem: "Chemical damage",
    r2_rep: "DNA replication errors",
    r2_gravity: "Gravity",

    // Round 3: Genetic Engineering Basics
    r3_title: "Genetic Engineering: Cutting & Inserting Genes",
    r3_text: "Scientists can now cut DNA and insert it into organisms. This technology creates GMOs (genetically modified organisms).",
    r3_fact1: "Restriction enzymes (scissors) cut DNA at specific locations",
    r3_fact2: "A desired gene can be inserted into another organism's DNA",
    r3_fact3: "Examples: herbicide-resistant crops, disease-resistant plants",
    r3_fact4: "Genetic engineering is used to improve crop yields and create medicines",
    r3_q: "What do restriction enzymes do?",
    r3_scissors: "Cut DNA at specific locations",
    r3_copy: "Copy DNA strands",
    r3_repair: "Repair damaged DNA",
    r3_merge: "Merge two organisms",

    // Round 4: Bioethics & Gene Technology
    r4_title: "Bioethics: Benefits & Risks",
    r4_text: "Genetic technology offers great benefits but also raises important ethical questions.",
    r4_fact1: "Benefits: disease resistance, increased food production, new medicines",
    r4_fact2: "Risks: unknown environmental effects, lab safety concerns, ethical questions",
    r4_fact3: "Cloning raises questions about identity and consent",
    r4_fact4: "Scientists and society must decide how to use this powerful technology responsibly",
    r4_q: "Which is a potential benefit of genetic engineering?",
    r4_res: "Disease-resistant crops",
    r4_unknown: "Unknown mutations everywhere",
    r4_loss: "Loss of all crops",
    r4_harm: "Guaranteed harmful effects",

    // Round 5: Review Quiz
    r5_title: "Mutations & Gene Technology Review",

    // Quiz questions (3 total)
    q1_q: "An insertion mutation means...",
    q1_a: "Extra nucleotides are added to DNA",
    q1_b: "A nucleotide is replaced",
    q1_c: "Nucleotides are removed",
    q1_d: "DNA is copied",

    q2_q: "Which environmental factor can cause mutations?",
    q2_a: "UV radiation from the sun",
    q2_b: "Loud noise",
    q2_c: "Exercise",
    q2_d: "Eating fruits",

    q3_q: "Genetic engineering is useful for creating...",
    q3_a: "Disease-resistant plants and new medicines",
    q3_b: "Identical copies of humans",
    q3_c: "New animal species",
    q3_d: "Artificial organs",
    // SVG labels
    lbl_normal: "Normal",
    lbl_point: "Point",
    lbl_insert: "Insert",
    lbl_delete: "Delete",
  },
  de: {
    // Round 1: Types of Mutations
    r1_title: "Arten von Mutationen",
    r1_text: "Eine Mutation ist eine Veränderung in der DNA-Sequenz. Es gibt verschiedene Arten, von denen jede Gene unterschiedlich beeinflusst.",
    r1_fact1: "Punktmutation: Ein einzelnes Nukleotid wird durch ein anderes ersetzt",
    r1_fact2: "Insertion: Zusätzliche Nukleotide werden zur DNA-Sequenz hinzugefügt",
    r1_fact3: "Deletion: Nukleotide werden aus der DNA-Sequenz entfernt",
    r1_fact4: "Einige Mutationen haben keine Auswirkung; andere verändern Proteine und beeinflussen Merkmale",
    r1_q: "Was passiert bei einer Punktmutation?",
    r1_a: "Ein einzelnes Nukleotid wird ersetzt",
    r1_b: "Mehrere Nukleotide werden hinzugefügt",
    r1_c: "Nukleotide werden entfernt",
    r1_d: "DNA-Stränge werden getrennt",

    // Round 2: Causes of Mutations
    r2_title: "Was verursacht Mutationen?",
    r2_text: "Mutationen können natürlich auftreten oder durch Umweltfaktoren verursacht werden. Einige sind schädlich; andere können vorteilhaft sein.",
    r2_fact1: "UV-Strahlung der Sonne kann DNA in Hautzellen beschädigen",
    r2_fact2: "Chemische Stoffe (wie Tabakrauch) können DNA-Schäden verursachen",
    r2_fact3: "Fehler bei der DNA-Replikation können Mutationen einführen",
    r2_fact4: "Die meisten Mutationen sind harmlos; einige sind vorteilhaft; einige sind schädlich",
    r2_q: "Welches ist KEIN häufiger Grund für Mutationen?",
    r2_uv: "UV-Strahlung",
    r2_chem: "Chemischer Schaden",
    r2_rep: "DNA-Replikationsfehler",
    r2_gravity: "Schwerkraft",

    // Round 3: Genetic Engineering Basics
    r3_title: "Gentechnik: Gene schneiden und einsetzen",
    r3_text: "Wissenschaftler können jetzt DNA schneiden und in Organismen einsetzen. Diese Technologie erzeugt gentechnisch veränderte Organismen.",
    r3_fact1: "Restriktionsendonukleasen (Scheren) schneiden DNA an bestimmten Stellen",
    r3_fact2: "Ein gewünschtes Gen kann in die DNA eines anderen Organismus eingefügt werden",
    r3_fact3: "Beispiele: herbizidresistente Nutzpflanzen, krankheitsresistente Pflanzen",
    r3_fact4: "Gentechnik wird verwendet, um Ernteerträge zu verbessern und Medikamente herzustellen",
    r3_q: "Was tun Restriktionsendonukleasen?",
    r3_scissors: "Schneiden DNA an bestimmten Stellen",
    r3_copy: "Kopieren DNA-Stränge",
    r3_repair: "Reparieren beschädigte DNA",
    r3_merge: "Fusionieren zwei Organismen",

    // Round 4: Bioethics & Gene Technology
    r4_title: "Bioethik: Nutzen & Risiken",
    r4_text: "Gentechnologie bietet große Vorteile, wirft aber auch wichtige ethische Fragen auf.",
    r4_fact1: "Vorteile: Krankheitsresistenz, erhöhte Lebensmittelproduktion, neue Medikamente",
    r4_fact2: "Risiken: unbekannte Umwelteffekte, Laborsicherheitsbedenken, ethische Fragen",
    r4_fact3: "Das Klonen wirft Fragen zu Identität und Zustimmung auf",
    r4_fact4: "Wissenschaftler und Gesellschaft müssen entscheiden, wie diese mächtige Technologie verantwortungsvoll eingesetzt wird",
    r4_q: "Welcher ist ein potenzieller Vorteil der Gentechnik?",
    r4_res: "Krankheitsresistente Nutzpflanzen",
    r4_unknown: "Überall unbekannte Mutationen",
    r4_loss: "Verlust aller Nutzpflanzen",
    r4_harm: "Garantiert schädliche Auswirkungen",

    // Round 5: Review Quiz
    r5_title: "Mutationen & Gentechnologie Wiederholung",

    // Quiz questions (3 total)
    q1_q: "Eine Insertionsmutation bedeutet...",
    q1_a: "Zusätzliche Nukleotide werden zu DNA hinzugefügt",
    q1_b: "Ein Nukleotid wird ersetzt",
    q1_c: "Nukleotide werden entfernt",
    q1_d: "DNA wird kopiert",

    q2_q: "Welcher Umweltfaktor kann Mutationen verursachen?",
    q2_a: "UV-Strahlung der Sonne",
    q2_b: "Laute Geräusche",
    q2_c: "Bewegung",
    q2_d: "Obst essen",

    q3_q: "Gentechnik ist nützlich für die Schaffung von...",
    q3_a: "Krankheitsresistenten Pflanzen und neuen Medikamenten",
    q3_b: "Identischen Kopien von Menschen",
    q3_c: "Neuen Tierarten",
    q3_d: "Künstlichen Organen",
    // SVG labels
    lbl_normal: "Normal",
    lbl_point: "Punkt",
    lbl_insert: "Einfügung",
    lbl_delete: "Deletion",
  },
  hu: {
    // Round 1: Types of Mutations
    r1_title: "A mutációk típusai",
    r1_text: "A mutáció a DNS-szekvencia megváltozása. Különböző típusok vannak, amelyek mindegyike másként befolyásolja a géneket.",
    r1_fact1: "Pontmutáció: Egy DNS bázist másikkal helyettesítenek",
    r1_fact2: "Inserció: További nukleotidok kerülnek a DNS-szekvenciához",
    r1_fact3: "Deléció: Nukleotidok kerülnek eltávolításra a DNS-szekvenciából",
    r1_fact4: "Egyes mutációknak nincs hatása; mások a fehérjéket megváltoztatják és a tulajdonságokat befolyásolják",
    r1_q: "Mi történik egy pontmutációban?",
    r1_a: "Egy nukleotid helyettesítésre kerül",
    r1_b: "Több nukleotid kerül hozzáadásra",
    r1_c: "Nukleotidok kerülnek eltávolításra",
    r1_d: "A DNS szálak szétválnak",

    // Round 2: Causes of Mutations
    r2_title: "Mi okoz mutációkat?",
    r2_text: "A mutációk természetesen fordulhatnak elő vagy környezeti tényezők okozhatják azokat. Néhány ártalmas; más hasznos lehet.",
    r2_fact1: "A nap UV-sugárzása a bőrsejtekben a DNS-t sértheti",
    r2_fact2: "A kémiai anyagok (például a dohányfüst) DNS-sérüléseket okozhatnak",
    r2_fact3: "A DNS-replikáció során fellépő hibák mutációkat vezethetnek be",
    r2_fact4: "A legtöbb mutáció ártalmatlan; néhány hasznos; egy kevés ártalmas",
    r2_q: "Mely NEM a mutációk gyakori oka?",
    r2_uv: "UV-sugárzás",
    r2_chem: "Kémiai sérülés",
    r2_rep: "DNS-replikáció hibák",
    r2_gravity: "Gravitáció",

    // Round 3: Genetic Engineering Basics
    r3_title: "Genetikai mérnökség: Gének vágása és beszúrása",
    r3_text: "A tudósok most már képesek DNS-t vágni és szervezetekbe beszúrni. Ez a technológia genetikailag módosított szervezeteket hoz létre.",
    r3_fact1: "Korlátozó enzimek (olló) a DNS-t meghatározott helyeken vágják",
    r3_fact2: "Egy kívánt gén egy másik szervezet DNS-ébe illeszthető",
    r3_fact3: "Példák: herbicidrezisztens termények, betegségrezisztens növények",
    r3_fact4: "A genetikai mérnökséget a terméshozam növelésére és az orvosságok létrehozására használják",
    r3_q: "Mit teszik a korlátozó enzimek?",
    r3_scissors: "A DNS-t meghatározott helyeken vágják",
    r3_copy: "DNS-szálakat másolnak",
    r3_repair: "Sérült DNS-t javítanak",
    r3_merge: "Két szervezetet egyesítenek",

    // Round 4: Bioethics & Gene Technology
    r4_title: "Bioetika: Előnyök és kockázatok",
    r4_text: "A genetikai technológia nagy előnyöket kínál, de fontos etikai kérdéseket is felvet.",
    r4_fact1: "Előnyök: betegségrezisztencia, megnövekedett élelmiszer-termelés, új gyógyszerek",
    r4_fact2: "Kockázatok: ismeretlen környezeti hatások, laboratóriumi biztonsági aggályok, etikai kérdések",
    r4_fact3: "A klónozás identitás és hozzájárulás kérdéseit veti fel",
    r4_fact4: "A tudósoknak és a társadalomnak el kell dönteniük, hogyan használják ezt az erőteljes technológiát felelősen",
    r4_q: "Mely a genetikai mérnökség potenciális előnye?",
    r4_res: "Betegségrezisztens termények",
    r4_unknown: "Mindenhol ismeretlen mutációk",
    r4_loss: "Összes termény elvesztése",
    r4_harm: "Garantáltan ártalmas hatások",

    // Round 5: Review Quiz
    r5_title: "Mutációk és genetikai technológia ismétlés",

    // Quiz questions (3 total)
    q1_q: "Egy inzerciós mutáció azt jelenti, hogy...",
    q1_a: "További nukleotidok adódnak a DNS-hez",
    q1_b: "Egy nukleotid helyettesítésre kerül",
    q1_c: "Nukleotidok kerülnek eltávolításra",
    q1_d: "A DNS másolódik",

    q2_q: "Mely környezeti tényező okozhat mutációkat?",
    q2_a: "A nap UV-sugárzása",
    q2_b: "Hangos zaj",
    q2_c: "Mozgás",
    q2_d: "Gyümölcsök fogyasztása",

    q3_q: "A genetikai mérnökség hasznos a... létrehozásához",
    q3_a: "Betegségrezisztens növények és új gyógyszerek",
    q3_b: "Emberek azonos másolatainak",
    q3_c: "Új állatfajoknak",
    q3_d: "Mesterséges szerveknek",
    // SVG labels
    lbl_normal: "Normál",
    lbl_point: "Pont",
    lbl_insert: "Beillesztés",
    lbl_delete: "Törlés",
  },
  ro: {
    // Round 1: Types of Mutations
    r1_title: "Tipuri de mutații",
    r1_text: "O mutație este o schimbare în secvența ADN. Există diferite tipuri, fiecare afectând genele în mod diferit.",
    r1_fact1: "Mutație punctiformă: Un singur nucleotid este înlocuit cu altul",
    r1_fact2: "Inserție: Nucleotidele suplimentare sunt adăugate secvenței ADN",
    r1_fact3: "Ștergere: Nucleotidele sunt îndepărtate din secvența ADN",
    r1_fact4: "Unele mutații nu au efect; altele schimbă proteinele și afectează trăsăturile",
    r1_q: "Ce se întâmplă în cazul unei mutații punctiforme?",
    r1_a: "Un nucleotid singular este înlocuit",
    r1_b: "Nucleotidele multiple sunt adăugate",
    r1_c: "Nucleotidele sunt îndepărtate",
    r1_d: "Lanțurile ADN sunt separate",

    // Round 2: Causes of Mutations
    r2_title: "Ce cauzeaza mutații?",
    r2_text: "Mutațiile pot apărea natural sau pot fi cauzate de factori de mediu. Unele sunt dăunătoare; altele pot fi benefice.",
    r2_fact1: "Radiația UV de la soare poate deteriora ADN-ul din celulele pielii",
    r2_fact2: "Substanțele chimice (cum ar fi fumul de tutun) pot cauza daune ADN-ului",
    r2_fact3: "Erorile în replicarea ADN-ului pot introduce mutații",
    r2_fact4: "Majoritatea mutațiilor sunt inofensive; unele sunt benefice; unele sunt dăunătoare",
    r2_q: "Care NU este o cauză comună a mutațiilor?",
    r2_uv: "Radiația UV",
    r2_chem: "Dauna chimică",
    r2_rep: "Erori de replicare ADN",
    r2_gravity: "Gravitație",

    // Round 3: Genetic Engineering Basics
    r3_title: "Ingineria genetică: Tăierea și inserarea genelor",
    r3_text: "Oamenii de știință pot acum tăia ADN-ul și să-l insereze în organisme. Această tehnologie creează organisme modificate genetic.",
    r3_fact1: "Enzimele de restricție (foarfeci) taie ADN-ul la locuri specifice",
    r3_fact2: "Un gen dorit poate fi inserat în ADN-ul unui alt organism",
    r3_fact3: "Exemple: culturi rezistente la erbicide, plante rezistente la boli",
    r3_fact4: "Ingineria genetică este utilizată pentru a îmbunătăți randamentul culturilor și a crea medicamente",
    r3_q: "Ce fac enzimele de restricție?",
    r3_scissors: "Taie ADN-ul la locuri specifice",
    r3_copy: "Copiază lanțurile ADN",
    r3_repair: "Repară ADN-ul deteriorat",
    r3_merge: "Fuzionează doi organisme",

    // Round 4: Bioethics & Gene Technology
    r4_title: "Bioetică: Beneficii și riscuri",
    r4_text: "Tehnologia genetică oferă beneficii mari, dar ridică și întrebări etice importante.",
    r4_fact1: "Beneficii: rezistență la boli, producție alimentară crescută, noi medicamente",
    r4_fact2: "Riscuri: efecte de mediu necunoscute, preocupări de siguranță în laborator, întrebări etice",
    r4_fact3: "Clonarea ridică întrebări despre identitate și consimțământ",
    r4_fact4: "Oamenii de știință și societatea trebuie să decidă cum să utilizeze responsabil această tehnologie puternică",
    r4_q: "Care este un beneficiu potențial al ingineriei genetice?",
    r4_res: "Culturi rezistente la boli",
    r4_unknown: "Mutații necunoscute peste tot",
    r4_loss: "Pierderea tuturor culturilor",
    r4_harm: "Efecte garantat dăunătoare",

    // Round 5: Review Quiz
    r5_title: "Mutații și ingineria genetică - recapitulare",

    // Quiz questions (3 total)
    q1_q: "O mutație de inserție înseamnă...",
    q1_a: "Nucleotidele suplimentare sunt adăugate la ADN",
    q1_b: "Un nucleotid este înlocuit",
    q1_c: "Nucleotidele sunt îndepărtate",
    q1_d: "ADN-ul este copiat",

    q2_q: "Care factor de mediu poate causa mutații?",
    q2_a: "Radiația UV de la soare",
    q2_b: "Zgomot puternic",
    q2_c: "Exercițiu fizic",
    q2_d: "Mâncatul de fructe",

    q3_q: "Ingineria genetică este utilă pentru crearea...",
    q3_a: "Plantelor rezistente la boli și noilor medicamente",
    q3_b: "Copiilor identici ai oamenilor",
    q3_c: "Noilor specii de animale",
    q3_d: "Organelor artificiale",
    // SVG labels
    lbl_normal: "Normal",
    lbl_point: "Punct",
    lbl_insert: "Inserție",
    lbl_delete: "Ștergere",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations (simple colored shapes, no text)
// ─────────────────────────────────────────────────────────────────────────────

const MutationTypes = ({ lang = "en" }: { lang?: string }) => {
  const t = LABELS[lang] || LABELS.en;
  return (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Three DNA sequences showing mutations */}
    {/* Normal DNA */}
    <g>
      <line x1="20" y1="30" x2="20" y2="60" stroke="#10B981" strokeWidth="4" />
      <line x1="50" y1="30" x2="50" y2="60" stroke="#10B981" strokeWidth="4" />
      {[35, 45, 55].map((y) => (
        <line key={y} x1="20" y1={y} x2="50" y2={y} stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
      ))}
    </g>
    {/* Point mutation (one replaced) */}
    <g>
      <line x1="80" y1="30" x2="80" y2="60" stroke="#3B82F6" strokeWidth="4" />
      <line x1="110" y1="30" x2="110" y2="60" stroke="#3B82F6" strokeWidth="4" />
      {[35, 45].map((y) => (
        <line key={y} x1="80" y1={y} x2="110" y2={y} stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
      ))}
      <circle cx="95" cy="55" r="4" fill="#EF4444" />
    </g>
    {/* Insertion (extra added) */}
    <g>
      <line x1="140" y1="30" x2="140" y2="60" stroke="#8B5CF6" strokeWidth="4" />
      <line x1="175" y1="30" x2="175" y2="60" stroke="#8B5CF6" strokeWidth="4" />
      {[35, 45, 55].map((y) => (
        <line key={y} x1="140" y1={y} x2="175" y2={y} stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
      ))}
      <circle cx="157.5" cy="45" r="4" fill="#FCD34D" />
    </g>
    {/* Deletion (one missing) */}
    <g>
      <line x1="200" y1="30" x2="200" y2="60" stroke="#EC4899" strokeWidth="4" />
      <line x1="230" y1="30" x2="230" y2="60" stroke="#EC4899" strokeWidth="4" />
      {[35, 55].map((y) => (
        <line key={y} x1="200" y1={y} x2="230" y2={y} stroke="rgba(236,72,153,0.3)" strokeWidth="2" />
      ))}
      <circle cx="215" cy="45" r="4" fill="#FCD34D" opacity="0.3" />
    </g>
    {/* Legend area */}
    <text x="20" y="85" fontSize="10" fill="#10B981" fontWeight="bold">{t.lbl_normal}</text>
    <text x="70" y="85" fontSize="10" fill="#EF4444" fontWeight="bold">{t.lbl_point}</text>
    <text x="135" y="85" fontSize="10" fill="#FCD34D" fontWeight="bold">{t.lbl_insert}</text>
    <text x="190" y="85" fontSize="10" fill="#EC4899" fontWeight="bold">{t.lbl_delete}</text>
  </svg>
  );
};

const UVRadiation = ({ lang = "en" }: { lang?: string }) => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Sun */}
    <circle cx="120" cy="20" r="15" fill="#FCD34D" />
    {/* UV rays */}
    {[90, 105, 120, 135, 150].map((x) => (
      <line key={x} x1={x} y1="35" x2={x - 5} y2="85" stroke="#FCD34D" strokeWidth="2" opacity="0.6" />
    ))}
    {/* DNA in cell getting hit */}
    <circle cx="110" cy="120" r="30" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" strokeWidth="2" />
    <line x1="95" y1="110" x2="95" y2="130" stroke="#3B82F6" strokeWidth="3" />
    <line x1="125" y1="110" x2="125" y2="130" stroke="#3B82F6" strokeWidth="3" />
    {[115, 125].map((y) => (
      <line key={y} x1="95" y1={y} x2="125" y2={y} stroke="rgba(59,130,246,0.4)" strokeWidth="2" />
    ))}
    {/* Damage mark */}
    <circle cx="110" cy="120" r="12" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="3,2" />
  </svg>
);

const GeneticEngineering = ({ lang = "en" }: { lang?: string }) => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    <defs>
      <linearGradient id="enzymGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    {/* Original DNA */}
    <line x1="30" y1="30" x2="30" y2="70" stroke="#3B82F6" strokeWidth="4" />
    <line x1="60" y1="30" x2="60" y2="70" stroke="#3B82F6" strokeWidth="4" />
    {[40, 50, 60].map((y) => (
      <line key={y} x1="30" y1={y} x2="60" y2={y} stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
    ))}
    {/* Scissors cutting */}
    <g transform="translate(75, 50)">
      <circle cx="0" cy="-8" r="6" fill="url(#enzymGrad)" />
      <circle cx="0" cy="8" r="6" fill="url(#enzymGrad)" />
      <line x1="-2" y1="-8" x2="-2" y2="8" stroke="url(#enzymGrad)" strokeWidth="1" />
    </g>
    {/* Gene to insert (shown as box) */}
    <rect x="100" y="40" width="30" height="20" fill="#10B981" opacity="0.6" rx="2" />
    {/* New DNA with inserted gene */}
    <line x1="150" y1="30" x2="150" y2="70" stroke="#8B5CF6" strokeWidth="4" />
    <line x1="200" y1="30" x2="200" y2="70" stroke="#8B5CF6" strokeWidth="4" />
    {[40, 50, 60].map((y) => (
      <line key={y} x1="150" y1={y} x2="200" y2={y} stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
    ))}
    {/* Inserted segment highlighted */}
    <rect x="165" y="38" width="20" height="24" fill="none" stroke="#10B981" strokeWidth="2" />
    {/* Arrow */}
    <path d="M 135 50 L 145 50" stroke="rgba(100,116,139,0.5)" strokeWidth="2" markerEnd="url(#arrowhead)" />
  </svg>
);

const Bioethics = ({ lang = "en" }: { lang?: string }) => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Left side - benefits (green) */}
    <circle cx="60" cy="80" r="50" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="2" />
    {/* Icons for benefits */}
    <circle cx="45" cy="60" r="8" fill="#10B981" opacity="0.6" />
    <circle cx="75" cy="60" r="8" fill="#10B981" opacity="0.6" />
    <circle cx="45" cy="100" r="8" fill="#10B981" opacity="0.6" />
    <circle cx="75" cy="100" r="8" fill="#10B981" opacity="0.6" />
    {/* Right side - risks (red) */}
    <circle cx="180" cy="80" r="50" fill="rgba(239,68,68,0.1)" stroke="#EF4444" strokeWidth="2" />
    {/* Icons for risks */}
    <circle cx="165" cy="60" r="8" fill="#EF4444" opacity="0.6" />
    <circle cx="195" cy="60" r="8" fill="#EF4444" opacity="0.6" />
    <circle cx="165" cy="100" r="8" fill="#EF4444" opacity="0.6" />
    <circle cx="195" cy="100" r="8" fill="#EF4444" opacity="0.6" />
    {/* Center balance scale */}
    <line x1="120" y1="140" x2="120" y2="20" stroke="rgba(100,116,139,0.4)" strokeWidth="1" />
    <rect x="115" y="20" width="10" height="8" fill="rgba(100,116,139,0.3)" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const MUTATION_EXPLORER: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: (lang: string) => <MutationTypes lang={lang} />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      hintKey: "r1_q",
      questions: [
        {
          question: "r1_q",
          choices: ["r1_a", "r1_b", "r1_c", "r1_d"],
          answer: "r1_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: (lang: string) => <UVRadiation lang={lang} />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      questions: [
        {
          question: "r2_q",
          choices: ["r2_uv", "r2_chem", "r2_rep", "r2_gravity"],
          answer: "r2_gravity",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: (lang: string) => <GeneticEngineering lang={lang} />,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_scissors", "r3_copy", "r3_repair", "r3_merge"],
          answer: "r3_scissors",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: (lang: string) => <Bioethics lang={lang} />,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_res", "r4_unknown", "r4_loss", "r4_harm"],
          answer: "r4_res",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: (lang: string) => <MutationTypes lang={lang} />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_a",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_a",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_a",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────

export default function MutationExplorer({
  color = "#8B5CF6",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={MUTATION_EXPLORER} color={color} lang={lang} onDone={onDone} />;
}
