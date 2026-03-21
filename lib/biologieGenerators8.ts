// ─── BIOLOGIE GENERATORS (Klasse 8) ───────────────────────────────────────
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK8GeneratorMap } from "./biologieCurriculum8";

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng?: () => number): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

function createTyping(topic: string, subtopic: string, question: string, answer: string | string[]): CurriculumTyping {
  return { type: "typing", topic, subtopic, question, answer };
}

// ─── DATA POOLS ────────────────────────────────────────────────────────────

const DNA_STRUKTUR_QUESTIONS = [
  { q: "Welche Komponenten bilden das Rückgrat der DNA?", c: "Zucker und Phosphat", w: ["Zucker und Base", "Nur Phosphat", "Protein und Base"] },
  { q: "Wie heißt der Zucker in der DNA?", c: "Deoxyribose", w: ["Ribose", "Glucose", "Fructose"] },
  { q: "Wie viele Basen kommen in der DNA vor?", c: "4 (A, T, G, C)", w: ["3", "5", "6"] },
  { q: "Welche Basen paaren sich in der DNA?", c: "A mit T und G mit C", w: ["A mit G und T mit C", "A mit C und G mit T", "Alle paarweise"] },
  { q: "Wie viele Stränge hat ein DNA-Molekül?", c: "2 (doppelsträngig)", w: ["1", "3", "variabel"] },
  { q: "Was ist die Funktion der DNA?", c: "Speicherung genetischer Information", w: ["Energieproduktion", "Proteintransport", "Zellatmung"] },
  { q: "Wo sitzt die meiste DNA in der Zelle?", c: "Im Zellkern", w: ["Im Mitochondrium", "Im Ribosom", "In der Zellmembran"] },
];

const VERERBUNG_QUESTIONS = [
  { q: "Was beschreibt Mendels Segregationsgesetz?", c: "Allele trennen sich bei der Gametenbildung", w: ["Gene fusionieren miteinander", "Alle Gene werden vererbt", "Dominante Gene verschwinden"] },
  { q: "Was ist ein dominantes Allel?", c: "Ein Allel, das sich im Phänotyp durchsetzt", w: ["Ein seltenes Allel", "Ein rezessives Allel", "Ein Allel vom Vater"] },
  { q: "Was ist ein rezessives Allel?", c: "Ein Allel, das sich nur im homozygoten Zustand zeigt", w: ["Ein Allel vom Vater", "Ein häufiges Allel", "Ein Allel, das verschwindet"] },
  { q: "Was ist der Unterschied zwischen Genotyp und Phänotyp?", c: "Genotyp: genetischer Aufbau; Phänotyp: Erscheinungsbild", w: ["Genotyp ist sichtbar; Phänotyp ist verborgen", "Sie sind identisch", "Genotyp ist nur beim Mann vorhanden"] },
  { q: "Welcher Prozess trennt die Allele bei der Vererbung?", c: "Meiose", w: ["Mitose", "Fertilisation", "Differenzierung"] },
  { q: "Was ist eine heterozygote Genotyp?", c: "Zwei verschiedene Allele für ein Gen", w: ["Zwei gleiche Allele", "Nur ein Allel", "Ein mutiertes Allel"] },
];

const MUTATION_QUESTIONS = [
  { q: "Was ist eine Punktmutation?", c: "Änderung eines einzelnen Basenpaares", w: ["Verlust mehrerer Gene", "Verdopplung eines Chromosoms", "Umkehrung einer DNA-Sequenz"] },
  { q: "Welche Mutation entsteht durch Verlust von DNA-Basen?", c: "Deletion", w: ["Insertion", "Inversion", "Translokation"] },
  { q: "Was ist eine Insertion?", c: "Hinzufügung von DNA-Basen", w: ["Entfernung von Basen", "Verdrehung der DNA", "Austausch ganzer Gene"] },
  { q: "Können Mutationen vorteilhaft sein?", c: "Ja, sie können zu Anpassungen führen", w: ["Nein, alle Mutationen sind schädlich", "Nur in Pflanzen", "Nur bei Viren"] },
  { q: "Was ist eine stille Mutation?", c: "Eine Mutation, die das Protein nicht verändert", w: ["Eine Mutation, die keinen Effekt hat", "Eine Mutation, nur beim Stummen", "Eine Mutation, die immer tödlich ist"] },
  { q: "Was ist eine Inversion?", c: "Umkehrung einer DNA-Sequenz", w: ["Wiederholung einer Sequenz", "Verlust einer Sequenz", "Austausch mit anderer DNA"] },
];

const GENETISCHE_TECHNIK_QUESTIONS = [
  { q: "Wofür wird die PCR verwendet?", c: "Vervielfältigung von DNA-Sequenzen", w: ["Vereinigung von Chromosomen", "Proteinherstellung", "Zellatmung"] },
  { q: "Was bedeutet CRISPR?", c: "Ein Gentechnik-Werkzeug zum Schneiden von DNA", w: ["Ein Vitamin", "Ein Hormon", "Ein Antibiotikum"] },
  { q: "Was ist Genklonen?", c: "Herstellung eines genetisch identischen Organismus", w: ["Kopieren eines Fotos", "Verschiebung von Genen", "Umkehrung der DNA"] },
  { q: "Wer entdeckte die DNA-Struktur?", c: "Watson und Crick (mit Franklin und Wilkins)", w: ["Mendel", "Darwin", "Pasteur"] },
  { q: "Welche Technik wird zur Gensequenzierung verwendet?", c: "DNA-Sequenzierung (z.B. Sanger oder Next-Gen)", w: ["Elektrophorese nur", "PCR allein", "Mikroskopie"] },
  { q: "Was ist eine transgene Organismus?", c: "Organismus mit eingefügtem Gen aus anderer Art", w: ["Mutierter Organismus", "Geklonter Organismus", "Aussterbender Organismus"] },
];

const ENDOKRINE_DRUESEN_QUESTIONS = [
  { q: "Welches Hormon reguliert die Blutzuckerkontrolle?", c: "Insulin (aus der Bauchspeicheldrüse)", w: ["Thyroxin", "Adrenalin", "Oxytocin"] },
  { q: "Wo sitzt die Schilddrüse?", c: "Am Hals, vor der Luftröhre", w: ["Im Gehirn", "In der Brust", "Im Bauch"] },
  { q: "Was produziert die Hypophyse?", c: "Mehrere Hormone (FSH, LH, ADH, etc.)", w: ["Nur Insulin", "Nur Thyroxin", "Nur Adrenalin"] },
  { q: "Welche Funktion hat die Bauchspeicheldrüse?", c: "Produktion von Insulin und Glucagon", w: ["Nur Verdauungsenzyme", "Nur Hormonproduktion", "Nur Urinproduktion"] },
  { q: "Was ist eine endokrine Drüse?", c: "Drüse, die Hormone direkt in die Blutbahn abgibt", w: ["Drüse mit Ausführungsgang", "Drüse in der Haut", "Lymphdrüse"] },
  { q: "Welche Hormon erhöht die Herzfrequenz?", c: "Adrenalin (Epinephrin)", w: ["Insulin", "Thyroxin", "Melatonin"] },
];

const HORMON_QUESTIONS = [
  { q: "Was bewirkt Insulin?", c: "Zellen nehmen Glucose auf und Blutzucker sinkt", w: ["Blutzucker steigt", "Herzfrequenz sinkt", "Körpertemperatur steigt"] },
  { q: "Welches Hormon wird bei Stress ausgeschüttet?", c: "Adrenalin und Cortisol", w: ["Insulin", "Melatonin", "Thyroxin"] },
  { q: "Was ist die Rolle von Oxytocin?", c: "Verursacht Uteruskontraktionen bei Geburt", w: ["Reguliert Blutzucker", "Steuert Schlaf-Wach-Rhythmus", "Regelt Körpertemperatur"] },
  { q: "Wie schnell wirken Hormone?", c: "Minuten bis Stunden", w: ["Sekunden", "Tage", "Wochen"] },
  { q: "Was ist die Funktion von Melatonin?", c: "Reguliert Schlaf-Wach-Rhythmus", w: ["Reguliert Blutzucker", "Steuert Stressreaktion", "Kontrolliert Herzschlag"] },
  { q: "Welches Hormon reguliert den Wassersalt-Haushalt?", c: "ADH (Antidiuretisches Hormon)", w: ["Insulin", "Adrenalin", "Melatonin"] },
];

const FEEDBACK_QUESTIONS = [
  { q: "Was ist Negative Feedback?", c: "Reaktion, die einen Zustand stabilisiert", w: ["Verstärkung eines Zustands", "Umkehrung aller Prozesse", "Hemmung aller Hormone"] },
  { q: "Was ist ein Beispiel für Negative Feedback?", c: "Insulin reguliert Blutzucker nach unten", w: ["Adrenalin bei Angst", "Geburtshormone verstärken sich", "Körpertemperatur steigt immer"] },
  { q: "Was ist Positive Feedback?", c: "Reaktion, die einen Zustand verstärkt", w: ["Stabilisierung eines Zustands", "Blockierung von Hormonen", "Permanent gleichbleibender Zustand"] },
  { q: "Nenne ein Beispiel für Positive Feedback", c: "Oxytocin bei Geburt verstärkt Kontraktionen", w: ["Insulin reguliert Blutzucker", "Körper reguliert Temperatur", "Melatonin verhindert Schlaf"] },
  { q: "Warum ist Feedback wichtig?", c: "Ohne Feedback würden Parameter außer Kontrolle geraten", w: ["Feedback schädigt den Körper", "Feedback ist nicht notwendig", "Feedback verhindert alle Erkrankungen"] },
  { q: "Welcher Hirnbereich kontrolliert das Hormonsystem?", c: "Der Hypothalamus", w: ["Das Cerebellum", "Die Großhirnrinde", "Das Mittelhirn"] },
];

const GAMETOGENESE_QUESTIONS = [
  { q: "Was ist Spermatogenese?", c: "Produktion von Spermien in den Hoden", w: ["Bildung von Eizellen", "Produktion von Hormonen", "Träger von Chromosomen"] },
  { q: "Wie lange dauert Spermatogenese?", c: "Etwa 2-3 Monate", w: ["1 Woche", "6 Monate", "1 Jahr"] },
  { q: "Was ist Oogenese?", c: "Produktion von Eizellen in den Eierstöcken", w: ["Produktion von Spermien", "Reifung von Spermien", "Transport von Gameten"] },
  { q: "Wie viele Spermien entstehen bei einer Ejakulation?", c: "Millionen (100-200 Millionen)", w: ["Hundert", "Tausend", "Eine"] },
  { q: "Wie viele Eizellen werden bei jeder Ovulation freigesetzt?", c: "Eine reife Eizelle", w: ["Mehrere", "Mehrere Tausend", "Keine"] },
  { q: "Was ist Meiose?", c: "Zellteilung, die haploide Gameten erzeugt", w: ["Zellteilung in Körperzellen", "Zellwachstum", "Zellabsterbung"] },
];

const BEFRUCHTUNG_QUESTIONS = [
  { q: "Was ist Befruchtung?", c: "Vereinigung von Spermium und Eizelle", w: ["Implantation in die Gebärmutter", "Geburt des Kindes", "Produktion von Spermien"] },
  { q: "Wo findet Befruchtung statt?", c: "In den Eileiter (Ovidukt)", w: ["In der Gebärmutter", "In den Eierstöcken", "In der Vagina"] },
  { q: "Was ist die Zona Pellucida?", c: "Schutzhülle um die Eizelle", w: ["Ein Hormon", "Eine Blutgefäß", "Ein Chromosom"] },
  { q: "Was verhindert, dass mehrere Spermien eindringen?", c: "Cortical Reaction (Blockade der Zona)", w: ["Das Hormon Progesteron", "Die Vagina", "Der Gebärmutterhals"] },
  { q: "Wie lange dauert die Implantation nach Befruchtung?", c: "6-12 Tage", w: ["1 Tag", "3 Wochen", "2 Monate"] },
  { q: "Wie heißt die befruchtete Eizelle?", c: "Zygote", w: ["Oozyte", "Morula", "Blastula"] },
];

const EMBRYO_QUESTIONS = [
  { q: "Was ist eine Blastula?", c: "Hohle Kugel von Zellen in früher Entwicklung", w: ["Massives Zellklümpchen", "Organ-ähnliche Struktur", "Spermium"] },
  { q: "Was ist Gastrulation?", c: "Einsenkung, die drei Keimblätter bildet", w: ["Bildung von Organen", "Spezialisierung von Zellen", "Wachstum des Embryos"] },
  { q: "Wie lange ist eine normale Schwangerschaft?", c: "Etwa 9 Monate (40 Wochen)", w: ["6 Monate", "12 Monate", "3 Monate"] },
  { q: "Nenne die drei Keimblätter", c: "Ektoderm, Mesoderm, Endoderm", w: ["Außen, Mitte, Innen (falsche Fachbegriffe)", "Nur zwei Blätter", "Vier Blätter"] },
  { q: "In welcher Woche beginnt die Organogenese?", c: "In Woche 4-8", w: ["Woche 1-2", "Woche 10-12", "Woche 20"] },
  { q: "Was ist Differenziation?", c: "Prozess, bei dem Zellen spezialisiert werden", w: ["Zellbewegung", "Zellabbau", "Zellvermehrung"] },
];

const GESCHLECHT_QUESTIONS = [
  { q: "Welches Chromosomenpaar bestimmt das Geschlecht bei Menschen?", c: "Das 23. Chromosomenpaar (XY bei Männern, XX bei Frauen)", w: ["Das 1. Chromosomenpaar", "Das 22. Chromosomenpaar", "Alle Chromosomen zusammen"] },
  { q: "Welches Elternteil bestimmt das Geschlecht?", c: "Der Vater (trägt Y oder X auf Sperma)", w: ["Die Mutter", "Beide gleich", "Umweltfaktoren"] },
  { q: "Was ist ein sex-gekoppeltes Merkmal?", c: "Merkmal kontrolliert durch Gen auf X-Chromosom", w: ["Merkmal des Vaters", "Merkmal der Mutter", "Merkmal aller Organismen"] },
  { q: "In welchem System ist das männliche Tier ZZ?", c: "Im ZW-System (Vögel, manche Insekten)", w: ["Im XY-System", "Im Haplodiploiden System", "In keinem"] },
  { q: "Wie heißt die Form der Geschlechtsbestimmung bei Bienen?", c: "Haplodiploidy (Haploid=männlich, Diploid=weiblich)", w: ["XY-System", "ZW-System", "Umweltabhängig"] },
  { q: "Was ist eine X-gekoppelte Krankheit?", c: "Krankheit durch Gen auf X-Chromosom", w: ["Krankheit am Y-Chromosom", "Angeborene Krankheit", "Virusinfekt"] },
];

const ENZYME_QUESTIONS = [
  { q: "Was ist ein Enzym?", c: "Protein-Katalysator, das biochemische Reaktionen beschleunigt", w: ["Ein Hormon", "Ein Vitamin", "Ein Zucker"] },
  { q: "Was ist das Substrat eines Enzyms?", c: "Der Stoff, auf den das Enzym wirkt", w: ["Das Enzym selbst", "Das Produkt", "Ein Koenzym"] },
  { q: "Wie wirkt ein Enzym?", c: "Senkt die Aktivierungsenergie einer Reaktion", w: ["Erhöht die Temperatur", "Liefert Energie", "Blockiert Reaktionen"] },
  { q: "Was ist Amylase?", c: "Enzym, das Stärke in Zucker spaltet", w: ["Enzyme, das Protein spaltet", "Enzyme, das Fett spaltet", "Koenzym von Magnesium"] },
  { q: "In welchem pH-Bereich arbeitet Pepsin?", c: "Im sauren Bereich (pH ~2)", w: ["Im basischen Bereich", "Im neutralen Bereich", "Bei allen pH-Werten gleich"] },
  { q: "Was ist ein Koenzym?", c: "Nicht-Protein-Helfer des Enzyms (z.B. Vitamine, Metalle)", w: ["Ein zweites Enzym", "Ein Hormon", "Das Substrat"] },
];

const BIOETHIK_QUESTIONS = [
  { q: "Was ist Bioethik?", c: "Ethik der Gentechnik und biologischer Forschung", w: ["Biologie Lehre", "Tierkunde", "Pflanzenanbau"] },
  { q: "Welche Fragen stellt Bioethik zur Gentechnik?", c: "Sicherheit, Gerechtigkeit, Zustimmung, lange Folgen", w: ["Nur wirtschaftliche Fragen", "Nur Geschwindigkeit", "Keine Fragen"] },
  { q: "Ist Klonen von Menschen ethisch zulässig?", c: "Kontrovers; viele Länder verbieten es", w: ["Ja, immer", "Nein, niemals", "Egal, es gibt keine Ethik"] },
  { q: "Welche Bedenken gibt es bei Stammzellforschung?", c: "Moralischer Status des Embryos", w: ["Keine Bedenken", "Nur Kosten", "Nur technische Probleme"] },
  { q: "Was ist Designerbabys?", c: "Babys mit gezielt ausgewählten Genen", w: ["Normale Babys", "Adoptierte Babys", "Geklonte Babys"] },
  { q: "Wer reguliert Gentechnik?", c: "Regierungen, Ethikkomitees, internationale Vereinbarungen", w: ["Niemand", "Nur Wissenschaftler", "Nur Privatunternehmen"] },
];

const BIOTECH_APP_QUESTIONS = [
  { q: "Wofür wird Fermentation verwendet?", c: "Herstellung von Bier, Käse, Joghurt durch Mikroben", w: ["Nur Alkoholproduktion", "Nur Säureproduktion", "Nur Zuckerabbau"] },
  { q: "Was ist Bioremediation?", c: "Abbau von Umweltschadstoffen durch Organismen", w: ["Öl raffinieren", "Fossilien verbrennen", "Chemikalien verwenden"] },
  { q: "Wo wird Insulin durch Gentechnik hergestellt?", c: "In Bakterien (z.B. E. coli)", w: ["In Tieren nur", "In Pflanzen nur", "Wird immer von Bauchspeicheldrüsen gewonnen"] },
  { q: "Was sind GMOs (genetisch veränderte Organismen)?", c: "Organismen mit eingefügtem Gen aus anderer Art", w: ["Mutierte Organismen", "Geklonte Organismen", "Ausgestorbene Arten"] },
  { q: "Welche Kulturpflanzen sind häufig gentechnisch verändert?", c: "Mais, Soja, Baumwolle, Raps", w: ["Nur Getreide", "Nur Obst", "Keine Pflanzen"] },
  { q: "Was ist pharmazeutische Biotechnologie?", c: "Herstellung von Medikamenten durch Gentechnik", w: ["Nur pflanzliche Heilmittel", "Nur chemische Synthese", "Nur Transplantationen"] },
];

const INTEGRATION_QUESTIONS = [
  { q: "Welche zwei Systeme integrieren Körperfunktionen?", c: "Nervensystem und Hormonsystem", w: ["Nur Verdauung", "Nur Kreislauf", "Nur Atmung"] },
  { q: "Welches System reagiert schneller?", c: "Das Nervensystem", w: ["Das Hormonsystem", "Beide gleich schnell", "Keines ist schnell"] },
  { q: "Welches System hat längere Effekte?", c: "Das Hormonsystem", w: ["Das Nervensystem", "Beide gleich", "Keines hat Effekt"] },
  { q: "Nenne 5 wichtige Körpersysteme", c: "Nervös, Hormon, Kreislauf, Atmung, Verdauung", w: ["Nur 2 Systeme", "Nur Bewegung", "Nur Knochen"] },
  { q: "Was ist Homöostase?", c: "Aufrechterhaltung von stabilen inneren Bedingungen", w: ["Veränderung der Körpertemperatur", "Anpassung an Umwelt", "Energie sparen"] },
  { q: "Warum ist Integration wichtig?", c: "Zum Aufrechterhalten von Homöostase", w: ["Zur Beschleunigung von Reaktionen", "Zur Blockierung von Genen", "Zur Speicherung von Energie"] },
];

const HOMEOSTASIS_QUESTIONS = [
  { q: "Wie wird die Körpertemperatur reguliert?", c: "Durch Hypothalamus, Schwitzen, Zittern, Durchblutung", w: ["Nur durch Kleidung", "Nur durch Essen", "Nicht regulierbar"] },
  { q: "Was ist ein Setpoint?", c: "Der Sollwert, auf den der Körper reguliert (z.B. 37°C)", w: ["Der gemessene Wert", "Der maximale Wert", "Der minimale Wert"] },
  { q: "Wie viele Parameter werden homöostatisch reguliert?", c: "Dutzende (Temperatur, pH, Glucose, Wasser, etc.)", w: ["Nur einer", "Nur zwei", "Keine"] },
  { q: "Was ist pH-Pufferung?", c: "Aufrechterhaltung des pH durch Puffersysteme (z.B. Blut-Puffersystem)", w: ["Säure zu Wasser machen", "Basen entfernen", "Säuren hinzufügen"] },
  { q: "Wie reguliert der Körper Blutzucker?", c: "Durch Insulin (senkt) und Glucagon (erhöht)", w: ["Nur durch Essen", "Nur durch Bewegung", "Nicht regulierbar"] },
  { q: "Was passiert, wenn die Osmolalität zu hoch wird?", c: "ADH wird ausgeschüttet, um Wasser zu sparen", w: ["Wasser wird sofort ausgeschieden", "Salz wird ausgeschieden", "Nichts passiert"] },
];

const STOFFWECHSEL_QUESTIONS = [
  { q: "Was ist Katabolismus?", c: "Abbau von Stoffen mit Energiefreisetzung", w: ["Aufbau von Stoffen", "Speicherung von Stoffen", "Transport von Stoffen"] },
  { q: "Was ist Anabolismus?", c: "Aufbau von Stoffen mit Energieverbrauch", w: ["Abbau von Stoffen", "Lagerung von Energie", "Verlust von Energie"] },
  { q: "Was ist aerobe Respiration?", c: "Stoffwechsel mit Sauerstoff (großer ATP-Ertrag)", w: ["Ohne Sauerstoff", "Nur Gärung", "Nur Fermentation"] },
  { q: "Was ist anaerobe Respiration?", c: "Stoffwechsel ohne Sauerstoff (weniger ATP)", w: ["Mit Sauerstoff", "Sehr effizient", "Natürlich"] },
  { q: "Wer hat schnelleren Metabolismus?", c: "Junge, aktive Menschen und kleine Tiere", w: ["Alte Menschen", "Übergewichtige", "Inaktive Menschen"] },
  { q: "Was ist Basal Metabolic Rate (BMR)?", c: "Energieverbrauch in Ruhe", w: ["Energieverbrauch beim Sport", "Verdauungsenergie", "Kalorienaufnahme"] },
];

const POPULATIONSGENETIK_QUESTIONS = [
  { q: "Was ist ein Allel?", c: "Verschiedene Form eines Gens", w: ["Chromosom", "Protein", "Mutation"] },
  { q: "Was ist das Hardy-Weinberg-Gleichgewicht?", c: "Zustand, wenn Allele-Frequenzen konstant bleiben ohne Evolution", w: ["Schnelle Evolution", "Selektion führt", "Mutation dominant"] },
  { q: "Was ist genetischer Drift?", c: "Zufallsänderung der Allele-Frequenz (besonders in kleinen Populationen)", w: ["Natürliche Selektion", "Mutation", "Migration"] },
  { q: "Wie wird Allele-Frequenz berechnet?", c: "Prozentsatz des Allels in der Population", w: ["Nur Anzahl der Individuen", "Nur dominante Allele", "Nur rezessive"] },
  { q: "Was sind Faktoren der Evolution?", c: "Mutation, Selektion, Drift, Migration", w: ["Nur Selektion", "Nur Mutation", "Nur Drift"] },
  { q: "Was ist Gene Flow?", c: "Migration von Allelen zwischen Populationen", w: ["Mutation", "Selektion", "Drift"] },
];

const ARTBILDUNG_QUESTIONS = [
  { q: "Was ist Speziation?", c: "Prozess der Artbildung", w: ["Aussterben", "Anpassung", "Variation"] },
  { q: "Was ist allopatrische Speziation?", c: "Artbildung durch geografische Isolation", w: ["Ohne Isolation", "Schnelle Änderung", "Klimawechsel"] },
  { q: "Was ist sympatrische Speziation?", c: "Artbildung ohne geografische Isolation", w: ["Mit Isolation", "Mit Mutation nur", "Mit Selektion nur"] },
  { q: "Wie lange dauert Speziation?", c: "Tausende bis Millionen Jahre", w: ["Ein Jahr", "Ein Jahrhundert", "Sofort"] },
  { q: "Was ist der Founder Effect?", c: "Gründungspopulation mit geringerer genetischer Variation", w: ["Großer Gene Pool", "Volle Variation", "Homozygotie überall"] },
  { q: "Was ist Peripatrische Speziation?", c: "Artbildung durch Gründungseffekt in isolierter Population", w: ["Schnelle Artbildung", "Langsame Mutation", "Keine Isolation"] },
];

const PHYLOGENIE_QUESTIONS = [
  { q: "Was ist Phylogenie?", c: "Evolutionsgeschichte einer Art oder Gruppe", w: ["Entwicklung eines Individuums", "Taxonomie", "Klassifikation"] },
  { q: "Was ist ein phylogenetischer Baum?", c: "Diagramm der evolutionären Verwandtschaften", w: ["Ein echtes Baum-Fossil", "Stammbaum von Menschen", "Taxonomische Einteilung"] },
  { q: "Was ist Homologie?", c: "Ähnliche Strukturen aus gemeinsamen Ursprung", w: ["Ähnliche Funktion, unterschiedlicher Ursprung", "Keine Beziehung", "Nur bei Menschen"] },
  { q: "Was ist Analogie?", c: "Ähnliche Funktion, aber unterschiedlicher evolutionärer Ursprung", w: ["Gemeinsamer Ursprung", "Homologie", "Verwandtschaft"] },
  { q: "Welche Beweise gibt es für Evolution?", c: "Fossilien, Morphologie, DNA/Protein, Embryologie", w: ["Nur Fossilien", "Nur Beobachtung", "Nur Theorie"] },
  { q: "Was ist eine Mosaikform?", c: "Fossil mit Merkmalen von zwei verschiedenen Gruppen", w: ["Ein lebendiges Fossil", "Ein ausgestorbenes Tier", "Ein hybrid"] },
];

const GENETIC_COUNSELING_QUESTIONS = [
  { q: "Was ist genetische Beratung?", c: "Beratung über genetische Risiken und Erbkrankheiten", w: ["Gentechnik-Diagnose", "Gentherapie", "Klonen-Beratung"] },
  { q: "Was ist eine Erbkrankheit?", c: "Krankheit durch abnormales Gen", w: ["Infektionskrankheit", "Umweltkrankheit", "Verletzung"] },
  { q: "Was ist Mukoviszidose?", c: "Autosomal-rezessive Störung der Lungenherz-Funktion", w: ["Geschlechtsgebunden", "Dominant", "Nicht erblich"] },
  { q: "Was ist Bluterkrankheit (Hämophilie)?", c: "X-gekoppelte rezessive Blutgerinnungsstörung", w: ["Autosomale Dominanz", "Nicht erblich", "Nur bei Frauen"] },
  { q: "Nenne 3 erbliche Störungen", c: "Mukoviszidose, Hämophilie, Huntington, Sichelzellanämie (etc.)", w: ["Nur Infektionen", "Nur Krebs", "Nur Verletzungen"] },
  { q: "Was ist ein Pränataltest?", c: "Test auf genetische Abnormalitäten vor Geburt", w: ["Test nach Geburt", "Test im Erwachsenenalter", "Kein genetischer Test"] },
];

const CONTRACEPTION_QUESTIONS = [
  { q: "Wie wirkt ein Kondom?", c: "Barriere-Methode: verhindert Spermien-Ei-Kontakt", w: ["Hormonale Wirkung", "Temperatur senken", "Spermien töten"] },
  { q: "Wie wirkt die Pille?", c: "Hormonale Methode: verhindert Eisprung", w: ["Barriere", "Spermien-Killer", "Temperatur"] },
  { q: "Was ist ein IUD?", c: "Intrauterines Gerät: verhindert Implantation", w: ["Hormonales Implantat nur", "Spermizid", "Temperatur-Methode"] },
  { q: "Wie sicher ist die Pille?", c: "99% (bei richtiger Anwendung)", w: ["50%", "75%", "80%"] },
  { q: "Wie sicher ist das Kondom?", c: "95% (bei richtigem Gebrauch)", w: ["50%", "80%", "70%"] },
  { q: "Nenne 5 Verhütungsmethoden", c: "Kondom, Pille, IUD, Implantat, Hormonspirale", w: ["Nur zwei", "Nur hormonale", "Keine Wahl"] },
];

const CONSERVATION_QUESTIONS = [
  { q: "Was ist Naturschutz (Conservation)?", c: "Schutz von Arten und Lebensräumen vor Aussterben", w: ["Nur Waldschutz", "Nur Tierschutz", "Nur Wasserschutz"] },
  { q: "Nenne 3 Hauptbedrohungen für Arten", c: "Habitatverlust, Übernutzung, Klimawandel, Umweltgift", w: ["Nur Krankheit", "Nur Predation", "Nur Alter"] },
  { q: "Was ist die Rote Liste?", c: "Internationale Liste bedrohter Arten", w: ["Listen von Gesetzen", "Liste von Pflanzen", "Autopsie-Liste"] },
  { q: "Wie helfen Schutzgebiete?", c: "Bieten Lebensraum und Schutz vor Jagd/Fischerei", w: ["Helfen nicht", "Nur Touristenziel", "Nur wissenschaftlicher Wert"] },
  { q: "Was ist Biodiversität?", c: "Vielfalt von Arten, Genen, Ökosystemen", w: ["Nur Artenzahl", "Nur genetische Vielfalt", "Nur geografische Vielfalt"] },
  { q: "Wie viele Arten sind bedroht?", c: "Millionen (Schätzung: 1 Million bis zum Aussterben)", w: ["Hundert", "Tausend", "Zehn Millionen"] },
];

// ─── K8 GENERATORS ─────────────────────────────────────────────────────────

export const K8_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  dna_struktur: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(DNA_STRUKTUR_QUESTIONS, rng);
      questions.push(createMCQ("genetik", "dna_struktur", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  dna_struktur_typing: (seed?: number) => [
    createTyping("genetik", "dna_struktur", "Was ist das DNA Rückgrat?", ["Zucker-Phosphat"]),
    createTyping("genetik", "dna_struktur", "Nenne die 4 Basen", ["Adenin, Thymin, Guanin, Cytosin", "A, T, G, C"]),
    createTyping("genetik", "dna_struktur", "Wie viele Stränge hat DNA?", ["2"]),
    createTyping("genetik", "dna_struktur", "Was ist Base Pairing?", ["A-T, G-C"]),
    createTyping("genetik", "dna_struktur", "Wo sitzt DNA?", ["Zellkern", "Kern"]),
  ],

  vererbung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(VERERBUNG_QUESTIONS, rng);
      questions.push(createMCQ("genetik", "vererbung", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  vererbung_typing: (seed?: number) => [
    createTyping("genetik", "vererbung", "Was ist Dominanz?", ["Ein Allel stärker", "Allel setzt sich durch"]),
    createTyping("genetik", "vererbung", "Was ist Rezessiv?", ["Verborgen", "Nur bei homozygot sichtbar"]),
    createTyping("genetik", "vererbung", "Was ist Phänotyp?", ["Erscheinungsbild", "Das Aussehen"]),
    createTyping("genetik", "vererbung", "Was ist Genotyp?", ["Genetischer Aufbau", "Die Gene"]),
    createTyping("genetik", "vererbung", "Was ist Mendels Gesetz?", ["Segregation", "Segregation und Independent Assortment"]),
  ],

  mutation: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(MUTATION_QUESTIONS, rng);
      questions.push(createMCQ("genetik", "mutation", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  mutation_typing: (seed?: number) => [
    createTyping("genetik", "mutation", "Was ist Mutation?", ["Genetische Änderung", "DNA-Änderung"]),
    createTyping("genetik", "mutation", "Nenne Mutationstypen", ["Point, Insertion, Deletion", "Punktmutation, Deletion, Insertion"]),
    createTyping("genetik", "mutation", "Können Mutationen hilfreich sein?", ["Ja"]),
    createTyping("genetik", "mutation", "Was verursacht Mutation?", ["Strahlung, Chemikalien", "Strahlung"]),
    createTyping("genetik", "mutation", "Was ist eine stille Mutation?", ["Keine Proteinänderung", "Kein Effekt auf Protein"]),
  ],

  genetische_technik: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(GENETISCHE_TECHNIK_QUESTIONS, rng);
      questions.push(createMCQ("genetik", "genetische_technik", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  genetische_technik_typing: (seed?: number) => [
    createTyping("genetik", "genetische_technik", "Was ist PCR?", ["DNA Vervielfältigung", "Polymerase Chain Reaction"]),
    createTyping("genetik", "genetische_technik", "Was ist CRISPR?", ["Gentechnik Werkzeug", "Gene-cutting tool"]),
    createTyping("genetik", "genetische_technik", "Was ist Klonen?", ["Genetisch identischer Organismus"]),
    createTyping("genetik", "genetische_technik", "Nenne Gentechnik Anwendungen", ["Medizin, Landwirtschaft", "Insulin, Antibiotika"]),
    createTyping("genetik", "genetische_technik", "Wer entdeckte DNA-Struktur?", ["Watson, Crick, Franklin, Wilkins"]),
  ],

  endokrine_druesen: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(ENDOKRINE_DRUESEN_QUESTIONS, rng);
      questions.push(createMCQ("hormone", "endokrine_druesen", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  endokrine_druesen_typing: (seed?: number) => [
    createTyping("hormone", "endokrine_druesen", "Was ist Hypophyse?", ["Hirnanhang", "Pituitary gland"]),
    createTyping("hormone", "endokrine_druesen", "Was ist Schilddrüse?", ["Hals Drüse", "Thyroid"]),
    createTyping("hormone", "endokrine_druesen", "Nenne 5 Endokrinedrüsen", ["Hypophyse, Schilddrüse, Pankreas, Nebenniere, Eierstock"]),
    createTyping("hormone", "endokrine_druesen", "Wo ist Pankreas?", ["Bauch", "Neben Magen"]),
    createTyping("hormone", "endokrine_druesen", "Was macht Nebenniere?", ["Stress Hormone", "Adrenalin, Cortisol"]),
  ],

  hormonstoffwechsel: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(HORMON_QUESTIONS, rng);
      questions.push(createMCQ("hormone", "hormonstoffwechsel", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  hormonstoffwechsel_typing: (seed?: number) => [
    createTyping("hormone", "hormonstoffwechsel", "Was ist Insulin?", ["Glucose Regulator", "Blutzucker Hormon"]),
    createTyping("hormone", "hormonstoffwechsel", "Was ist Adrenalin?", ["Stress Hormon", "Epinephrin"]),
    createTyping("hormone", "hormonstoffwechsel", "Nenne Stress Hormone", ["Adrenalin, Cortisol", "Epinephrin, Cortisol"]),
    createTyping("hormone", "hormonstoffwechsel", "Wo werden Hormone gemacht?", ["Endokrine Drüsen"]),
    createTyping("hormone", "hormonstoffwechsel", "Wie schnell wirken Hormone?", ["Minuten bis Stunden"]),
  ],

  feedback_mechanismen: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(FEEDBACK_QUESTIONS, rng);
      questions.push(createMCQ("hormone", "feedback_mechanismen", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  feedback_mechanismen_typing: (seed?: number) => [
    createTyping("hormone", "feedback_mechanismen", "Was ist Negative Feedback?", ["Stabilisieren", "Gleichgewicht halten"]),
    createTyping("hormone", "feedback_mechanismen", "Was ist Positive Feedback?", ["Verstärken", "Intensivieren"]),
    createTyping("hormone", "feedback_mechanismen", "Nenne ein Beispiel", ["Temperatur, Geburt", "Insulin, Oxytocin"]),
    createTyping("hormone", "feedback_mechanismen", "Warum Feedback?", ["Homöostase", "Inneres Gleichgewicht"]),
    createTyping("hormone", "feedback_mechanismen", "Wer reguliert Hormone?", ["Hypothalamus-Hypophyse", "Hirnanhangdrüse"]),
  ],

  gametogenese: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(GAMETOGENESE_QUESTIONS, rng);
      questions.push(createMCQ("reproduktion", "gametogenese", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  gametogenese_typing: (seed?: number) => [
    createTyping("reproduktion", "gametogenese", "Was ist Spermatogenese?", ["Spermium Produktion", "Spermienzellbildung"]),
    createTyping("reproduktion", "gametogenese", "Was ist Oogenese?", ["Eizelle Produktion", "Eizellbildung"]),
    createTyping("reproduktion", "gametogenese", "Wie lange dauert Spermatogenese?", ["Etwa 2-3 Monate", "2-3 Monate"]),
    createTyping("reproduktion", "gametogenese", "Wie viele Spermien pro Ejakulation?", ["Millionen", "100-200 Millionen"]),
    createTyping("reproduktion", "gametogenese", "Was ist Meiose?", ["Zellteilung zu Gameten", "Haploid-Bildung"]),
  ],

  befruchtung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(BEFRUCHTUNG_QUESTIONS, rng);
      questions.push(createMCQ("reproduktion", "befruchtung", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  befruchtung_typing: (seed?: number) => [
    createTyping("reproduktion", "befruchtung", "Was ist Befruchtung?", ["Spermium + Ei", "Gameten-Vereinigung"]),
    createTyping("reproduktion", "befruchtung", "Nenne die Befruchtungsphasen", ["Penetration, Fusion, Cortical Reaction"]),
    createTyping("reproduktion", "befruchtung", "Was ist Zona Pellucida?", ["Ei Hülle", "Schutzhülle"]),
    createTyping("reproduktion", "befruchtung", "Wo findet Befruchtung statt?", ["Eileiter", "Ovidukt"]),
    createTyping("reproduktion", "befruchtung", "Wie lange bis Implantation?", ["6-12 Tage"]),
  ],

  embryonalentwicklung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(EMBRYO_QUESTIONS, rng);
      questions.push(createMCQ("reproduktion", "embryonalentwicklung", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  embryonalentwicklung_typing: (seed?: number) => [
    createTyping("reproduktion", "embryonalentwicklung", "Nenne die 3 Keimblätter", ["Ektoderm, Mesoderm, Endoderm"]),
    createTyping("reproduktion", "embryonalentwicklung", "Was ist Organogenese?", ["Organbildung", "Organ-Entwicklung"]),
    createTyping("reproduktion", "embryonalentwicklung", "Wie lange ist Schwangerschaft?", ["Etwa 9 Monate", "40 Wochen", "9 Monate oder 40 Wochen"]),
    createTyping("reproduktion", "embryonalentwicklung", "Wann bildet sich Herz?", ["Woche 4"]),
    createTyping("reproduktion", "embryonalentwicklung", "Was ist Differenziation?", ["Zellspezialisierung", "Spezialisierung"]),
  ],

  geschlechtsbestimmung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(GESCHLECHT_QUESTIONS, rng);
      questions.push(createMCQ("reproduktion", "geschlechtsbestimmung", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  geschlechtsbestimmung_typing: (seed?: number) => [
    createTyping("reproduktion", "geschlechtsbestimmung", "Was ist XY System?", ["Männchen XY, Weibchen XX"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Was ist ZW System?", ["Vögel, Schmetterlinge"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Was bestimmt Geschlecht?", ["Vater Chromosom", "Y-Chromosom vom Vater"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Nenne Geschlechtsbestimmungsarten", ["XY, ZW, Haplodiploidy"]),
    createTyping("reproduktion", "geschlechtsbestimmung", "Was ist Sex-linked?", ["Gen auf X Chromosom"]),
  ],

  enzyme: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(ENZYME_QUESTIONS, rng);
      questions.push(createMCQ("biotechnologie", "enzyme", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  enzyme_typing: (seed?: number) => [
    createTyping("biotechnologie", "enzyme", "Was ist Enzym?", ["Protein Katalysator", "Enzym-Protein"]),
    createTyping("biotechnologie", "enzyme", "Was ist Substrat?", ["Was Enzym zerlegt", "Reaktionsstoff"]),
    createTyping("biotechnologie", "enzyme", "Nenne 3 Enzyme", ["Amylase, Protease, Lipase"]),
    createTyping("biotechnologie", "enzyme", "Wie wirken Enzyme?", ["Aktivierungsenergie senken"]),
    createTyping("biotechnologie", "enzyme", "Was ist Koenzym?", ["Enzym Helfer", "Nicht-Protein Helfer"]),
  ],

  bioethik: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(BIOETHIK_QUESTIONS, rng);
      questions.push(createMCQ("biotechnologie", "bioethik", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  bioethik_typing: (seed?: number) => [
    createTyping("biotechnologie", "bioethik", "Was ist Bioethik?", ["Ethik der Gentechnik", "Ethik biologischer Forschung"]),
    createTyping("biotechnologie", "bioethik", "Nenne bioethische Fragen", ["Klonen, Stammzellen, Designerbabys"]),
    createTyping("biotechnologie", "bioethik", "Wer überwacht Gentechnik?", ["Regierungen", "Ethikkomitees"]),
    createTyping("biotechnologie", "bioethik", "Was sind Bedenken?", ["Sicherheit, Gerechtigkeit", "Ethik, Sicherheit"]),
    createTyping("biotechnologie", "bioethik", "Ist Gentechnik erlaubt?", ["Reguliert", "In vielen Ländern ja"]),
  ],

  biotech_anwendungen: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(BIOTECH_APP_QUESTIONS, rng);
      questions.push(createMCQ("biotechnologie", "biotech_anwendungen", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  biotech_anwendungen_typing: (seed?: number) => [
    createTyping("biotechnologie", "biotech_anwendungen", "Was ist Fermentation?", ["Mikrobenkultur", "Gärung"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Nenne Biotech Anwendungen", ["Medizin, Landwirtschaft, Industrie"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Was ist Bioremediation?", ["Abbau Umweltgifte", "Umweltreinigung"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Wo wird Gentechnik benutzt?", ["Insulin, Antibiotika", "Medizin, Landwirtschaft"]),
    createTyping("biotechnologie", "biotech_anwendungen", "Was ist GMO?", ["Genetisch modifiziert", "Gentechnisch verändert"]),
  ],

  integration: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(INTEGRATION_QUESTIONS, rng);
      questions.push(createMCQ("systemische", "integration", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  integration_typing: (seed?: number) => [
    createTyping("systemische", "integration", "Wie integrieren Systeme?", ["Nervös + Hormon"]),
    createTyping("systemische", "integration", "Was ist schneller?", ["Nervös", "Nervensystem"]),
    createTyping("systemische", "integration", "Was ist länger?", ["Hormon", "Hormonsystem"]),
    createTyping("systemische", "integration", "Nenne 5 Körpersysteme", ["Nervös, Hormon, Kreislauf, Atmung, Verdauung"]),
    createTyping("systemische", "integration", "Was ist Homöostase?", ["Stabilitätserhaltung", "Inneres Gleichgewicht"]),
  ],

  homeostasis: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(HOMEOSTASIS_QUESTIONS, rng);
      questions.push(createMCQ("systemische", "homeostasis", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  homeostasis_typing: (seed?: number) => [
    createTyping("systemische", "homeostasis", "Was ist Homöostase?", ["Inneres Gleichgewicht", "Stabilität"]),
    createTyping("systemische", "homeostasis", "Wer reguliert Temperatur?", ["Hypothalamus"]),
    createTyping("systemische", "homeostasis", "Was ist Setpoint?", ["Zielwert", "Sollwert"]),
    createTyping("systemische", "homeostasis", "Nenne 3 regulierte Parameter", ["Temperatur, pH, Glucose"]),
    createTyping("systemische", "homeostasis", "Wie viele Parameter werden reguliert?", ["Dutzend+", "Viele"]),
  ],

  stoffwechseltypologie: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(STOFFWECHSEL_QUESTIONS, rng);
      questions.push(createMCQ("systemische", "stoffwechseltypologie", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  stoffwechseltypologie_typing: (seed?: number) => [
    createTyping("systemische", "stoffwechseltypologie", "Was ist Katabolismus?", ["Abbau", "Energiefreisetzung"]),
    createTyping("systemische", "stoffwechseltypologie", "Was ist Anabolismus?", ["Aufbau", "Energieverbrauch"]),
    createTyping("systemische", "stoffwechseltypologie", "Nenne Stoffwechseltypen", ["Aerob, Anaerob", "Mit/ohne Sauerstoff"]),
    createTyping("systemische", "stoffwechseltypologie", "Wer hat schnelleren Metabolismus?", ["Junge, Aktive", "Kinder, Sportler"]),
    createTyping("systemische", "stoffwechseltypologie", "Was ist BMR?", ["Basal Metabolic Rate", "Ruhe Verbrauch"]),
  ],

  populationsgenetik: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(POPULATIONSGENETIK_QUESTIONS, rng);
      questions.push(createMCQ("evolution_advanced", "populationsgenetik", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  populationsgenetik_typing: (seed?: number) => [
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Allele?", ["Verschiedene Formen eines Gens"]),
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Hardy-Weinberg?", ["Gleichgewicht", "Konstante Allele-Frequenz"]),
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Genetischer Drift?", ["Zufallsänderung", "Zufällige Frequenz-Änderung"]),
    createTyping("evolution_advanced", "populationsgenetik", "Nenne 3 Evolving Faktoren", ["Mutation, Selektion, Drift", "Mutation, Selektion, Drift, Migration"]),
    createTyping("evolution_advanced", "populationsgenetik", "Was ist Allele Frequenz?", ["Prozent Population", "%-Anteil eines Allels"]),
  ],

  artbildung: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(ARTBILDUNG_QUESTIONS, rng);
      questions.push(createMCQ("evolution_advanced", "artbildung", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  artbildung_typing: (seed?: number) => [
    createTyping("evolution_advanced", "artbildung", "Was ist Speziation?", ["Art Bildung", "Artbildung"]),
    createTyping("evolution_advanced", "artbildung", "Nenne Artbildungstypen", ["Allopatrisch, Sympatrisch", "Mit/ohne Isolation"]),
    createTyping("evolution_advanced", "artbildung", "Was ist Allopatrisch?", ["Geografische Isolation"]),
    createTyping("evolution_advanced", "artbildung", "Was ist Sympatrisch?", ["Ohne Isolation", "Ohne geografische Trennung"]),
    createTyping("evolution_advanced", "artbildung", "Wie lange dauert Speziation?", ["Tausende Jahre", "Tausende bis Millionen Jahre"]),
  ],

  phylogenie: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(PHYLOGENIE_QUESTIONS, rng);
      questions.push(createMCQ("evolution_advanced", "phylogenie", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  phylogenie_typing: (seed?: number) => [
    createTyping("evolution_advanced", "phylogenie", "Was ist Phylogenie?", ["Evolutionsgeschichte"]),
    createTyping("evolution_advanced", "phylogenie", "Was ist Phylogenetischer Baum?", ["Verwandtschaft Diagramm", "Stammbaum"]),
    createTyping("evolution_advanced", "phylogenie", "Nenne Phylogenie Beweise", ["Morphologie, Molecular, Fossil"]),
    createTyping("evolution_advanced", "phylogenie", "Was ist Homologie?", ["Gemeinsamer Ursprung", "Verwandte Struktur"]),
    createTyping("evolution_advanced", "phylogenie", "Was ist Analogie?", ["Ähnliche Funktion, anderer Ursprung"]),
  ],

  genetic_counseling: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(GENETIC_COUNSELING_QUESTIONS, rng);
      questions.push(createMCQ("genetik", "genetic_counseling", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  genetic_counseling_typing: (seed?: number) => [
    createTyping("genetik", "genetic_counseling", "Was ist genetische Beratung?", ["Risiko Bewertung", "Beratung über Erbkrankheiten"]),
    createTyping("genetik", "genetic_counseling", "Nenne 3 genetische Störungen", ["Mukoviszidose, Hämophilie, Huntington"]),
    createTyping("genetik", "genetic_counseling", "Was ist Carrier Testing?", ["Träger Prüfung", "Test ob Träger"]),
    createTyping("genetik", "genetic_counseling", "Wer sollte Beratung erhalten?", ["Patienten, Familie", "Betroffene, Risikogruppen"]),
    createTyping("genetik", "genetic_counseling", "Was ist Pränataltest?", ["Schwangerschaft Test", "Test vor Geburt"]),
  ],

  contraception: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(CONTRACEPTION_QUESTIONS, rng);
      questions.push(createMCQ("reproduktion", "contraception", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  contraception_typing: (seed?: number) => [
    createTyping("reproduktion", "contraception", "Nenne 5 Verhütungsmethoden", ["Kondom, Pille, IUD, Implantat, Spermizid"]),
    createTyping("reproduktion", "contraception", "Was ist Kondom?", ["Barriere Methode", "Physische Barriere"]),
    createTyping("reproduktion", "contraception", "Was ist Pille?", ["Hormonale Methode", "Hormonaler Verhütungsstoff"]),
    createTyping("reproduktion", "contraception", "Was ist IUD?", ["Intrauterines Gerät", "Verhütungsspirale"]),
    createTyping("reproduktion", "contraception", "Welche ist am effektivsten?", ["Implantat, IUD", "Implantat oder Spirale"]),
  ],

  conservation_biology: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const item = pick(CONSERVATION_QUESTIONS, rng);
      questions.push(createMCQ("evolution_advanced", "conservation_biology", item.q, item.c, item.w, rng));
    }
    return questions.slice(0, 30);
  },
  conservation_biology_typing: (seed?: number) => [
    createTyping("evolution_advanced", "conservation_biology", "Was ist Naturschutz?", ["Artenschutz", "Schutz von Biodiversität"]),
    createTyping("evolution_advanced", "conservation_biology", "Nenne 3 Bedrohungen", ["Habitatverlust, Überfischung, Klimawandel"]),
    createTyping("evolution_advanced", "conservation_biology", "Was ist Red List?", ["Bedrohte Arten Liste", "Liste gefährdeter Arten"]),
    createTyping("evolution_advanced", "conservation_biology", "Was sind Schutzgebiete?", ["Reservate", "Naturschutzgebiet"]),
    createTyping("evolution_advanced", "conservation_biology", "Wie viele Arten sind bedroht?", ["Millionen", "Etwa 1 Million"]),
  ],
};

export const GENERATOR_MAP: Record<string, (seed?: number) => CurriculumQuestion[]> = K8_Generators;

setK8GeneratorMap(GENERATOR_MAP);
