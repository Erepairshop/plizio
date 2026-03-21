// ─── BIOLOGIE GENERATORS (Klasse 7) ───────────────────────────────────────
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK7GeneratorMap } from "./biologieCurriculum7";

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

const CELL_STRUCTURE_QUESTIONS = [
  { q: "Welche Zelltypen haben einen Kern?", a: "Eukaryotische Zellen", w: ["Prokaryotische Zellen", "Bakterien", "Archaeen"] },
  { q: "Wo findet man DNA in eukaryotischen Zellen?", a: "Im Zellkern", w: ["Im Zytoplasma", "In der Mitochondrie", "In der Membran"] },
  { q: "Prokaryotische Zellen haben...", a: "Keine Organellen", w: ["Ein Zellnetzwerk", "Mehrere Kerne", "Große Vakuolen"] },
  { q: "Was ist die Zellmembran?", a: "Eine selektiv durchlässige Schutzschicht", w: ["Nur eine starre Wand", "Eine Struktur mit Poren", "Ein Storage-Organell"] },
  { q: "Welche Strukturen umgeben Pflanzenzellen?", a: "Zellmembran und Zellwand", w: ["Nur Zellmembran", "Chloroplast und Vakuole", "Ribosomen und Lysosom"] },
  { q: "Was ist das Zytoplasma?", a: "Eine gelatinöse Flüssigkeit mit Organellen", w: ["Nur Wasser", "Der Zellkern", "Eine Lipidschicht"] },
  { q: "Wer beschrieb zuerst die Zelltheorie?", a: "Schleiden und Schwann", w: ["Darwin", "Mendel", "Hooke"] },
  { q: "Wie unterscheiden sich Tier- und Pflanzenzellen?", a: "Pflanzen haben Zellwand und Chloroplasten", w: ["Tierzellen haben Chloroplasten", "Beide sind gleich", "Pflanzenzellen haben keinen Kern"] },
];

const ORGANELLE_QUESTIONS = [
  { q: "Welche Organelle produziert Energie in der Zelle?", a: "Mitochondrium", w: ["Chloroplast", "Lysosom", "Ribosom"] },
  { q: "Wo findet Fotosynthese statt?", a: "Im Chloroplast", w: ["In der Mitochondrie", "Im Zellkern", "Im Ribosom"] },
  { q: "Ribosomen sind für... verantwortlich", a: "Proteinproduktion", w: ["ATP-Herstellung", "Fotosynthese", "Zellstoffabbau"] },
  { q: "Lysosomen enthalten...", a: "Verdauungsenzyme", w: ["Chlorophyll", "DNA", "ATP-Moleküle"] },
  { q: "Das endoplasmatische Retikulum ist beteiligt bei...", a: "Proteinsynthese und Transport", w: ["Fotosynthese", "Zellkern-Replikation", "Wasserspeicherung"] },
  { q: "Die Vakuole in Pflanzenzellen speichert...", a: "Wasser, Nährstoffe und Abfallstoffe", w: ["ATP", "Ribosomen", "DNA-Kopien"] },
  { q: "Der Golgi-Apparat...", a: "Modifiziert und verpackt Proteine", w: ["Produziert Energie", "Speichert Wasser", "Synthetisiert Lipide"] },
  { q: "Mitochondrien haben...", a: "Doppelte Membran", w: ["Einfache Membran", "Keine Membran", "Dreifache Membran"] },
  { q: "Das Ribosom besteht aus...", a: "RNA und Proteinen", w: ["Nur Proteinen", "Nur DNA", "Lipiden"] },
  { q: "Die Centrosome sind wichtig für...", a: "Zellteilung und Mikrotubuli", w: ["Energie", "Proteinabbau", "Fotosynthese"] },
];

const MICROSCOPE_QUESTIONS = [
  { q: "Mit welchem Mikroskop kann man Zellen sehen?", a: "Lichtmikroskop", w: ["Lupe", "Teleskop", "Spektroskop"] },
  { q: "Was ist Vergrößerung?", a: "Die Objektgröße wird größer gemacht", w: ["Die Anzahl der Zellen", "Die Klarheit", "Die Farbe"] },
  { q: "Was ist Auflösung?", a: "Die Fähigkeit, Details zu unterscheiden", w: ["Wie weit man sehen kann", "Die Helligkeit", "Die Farbe"] },
  { q: "Das Okular ist...", a: "Die Linse nahe dem Auge", w: ["Die Linse nahe dem Objekt", "Der Objekttisch", "Das Beleuchtungssystem"] },
  { q: "Das Objektiv ist...", a: "Die Linse nahe dem Objekt", w: ["Die Linse nahe dem Auge", "Das Beleuchtungssystem", "Der Fokussiermechanismus"] },
  { q: "Wie tief kann man mit dem Lichtmikroskop sehen?", a: "Etwa ein Mikrometer", w: ["Nanometer", "Ein Millimeter", "Zentimeter"] },
  { q: "Ein Elektronenmikroskop hat...", a: "Höhere Auflösung als Lichtmikroskope", w: ["Niedrigere Auflösung", "Gleiche Auflösung", "Keine Auflösung"] },
  { q: "Welche Strukturen kann man NICHT mit bloßem Auge sehen?", a: "Zellen und Organellen", w: ["Große Blutgefäße", "Muskeln", "Haare"] },
];

const CELL_DIVISION_QUESTIONS = [
  { q: "Mitose produziert wie viele Zellen?", a: "2 identische Zellen", w: ["4 Zellen", "1 Zelle", "8 Zellen"] },
  { q: "Meiose produziert wie viele Zellen?", a: "4 Gameten mit halber DNA", w: ["2 Zellen", "8 Zellen", "1 Zelle"] },
  { q: "Die erste Phase der Mitose ist...", a: "Prophase", w: ["Metaphase", "Anaphase", "Telophase"] },
  { q: "Während der Metaphase...", a: "Chromosomen sind in der Mitte angeordnet", w: ["Chromosomen wandern zu Polen", "Der Kern teilt sich", "Die Zelle teilt sich"] },
  { q: "Anaphase ist wenn...", a: "Chromatiden zu entgegengesetzten Polen wandern", w: ["Chromosomen sich zusammentun", "Die Spindel sich auflöst", "Der Kern entsteht"] },
  { q: "Telophase ist die Phase wo...", a: "Zwei neue Kerne entstehen", w: ["Chromosomen kondensieren", "Die Zelle sich teilt", "DNA repliziert wird"] },
  { q: "Cytokinese ist...", a: "Die Aufteilung des Zytoplasmas", w: ["DNA-Replikation", "Kernmembran-Bildung", "Chromosom-Bewegung"] },
  { q: "Meiose hat wie viele Teilungen?", a: "Zwei Teilungen (Meiose I und II)", w: ["Eine Teilung", "Drei Teilungen", "Vier Teilungen"] },
  { q: "In der S-Phase...", a: "DNA wird verdoppelt", w: ["Zelle teilt sich", "Proteine werden synth.", "Mitochondrien vermehren sich"] },
];

const PHOTOSYNTHESIS_QUESTIONS = [
  { q: "Die Lichtreaktion findet statt in...", a: "Der Thylakoidmembran", w: ["Stroma", "Mitochondrium", "Zellkern"] },
  { q: "Die Dunkelreaktion findet statt in...", a: "Im Stroma", w: ["Thylakoid", "Mitochondrium", "Zellmembran"] },
  { q: "Welches Pigment fängt Licht ein?", a: "Chlorophyll", w: ["Carotin", "Xanthophyll", "Hämoglobin"] },
  { q: "Die Dunkelreaktion ist auch bekannt als...", a: "Calvin-Zyklus", w: ["Krebs-Zyklus", "Glykolyse", "Elektronentransport"] },
  { q: "Photosynthese produziert...", a: "Glukose und Sauerstoff", w: ["ATP und CO2", "Methanol und Stickstoff", "Fette und Wasser"] },
  { q: "Welche Reaktion braucht Licht?", a: "Lichtreaktion", w: ["Calvin-Zyklus", "Beide", "Keine"] },
  { q: "ATP wird hergestellt in...", a: "Der Lichtreaktion", w: ["Calvin-Zyklus", "Glykolyse", "Elektronentransport"] },
  { q: "NADPH wird verwendet in...", a: "Der Dunkelreaktion", w: ["Lichtreaktion", "Glykolyse", "Mitose"] },
  { q: "Wie viele CO2 werden benötigt für ein Glukose-Molekül?", a: "6", w: ["3", "1", "12"] },
];

const RESPIRATION_QUESTIONS = [
  { q: "Aerobe Atmung findet statt in...", a: "Der Mitochondrie", w: ["Chloroplast", "Zellmembran", "Zellkern"] },
  { q: "Glykolyse findet statt in...", a: "Zytoplasma", w: ["Mitochondrium", "Zellkern", "Lysosom"] },
  { q: "Wie viele ATP werden von einer Glucose durch aerobe Atmung gemacht?", a: "30-32 ATP", w: ["2 ATP", "10 ATP", "50 ATP"] },
  { q: "Anaerobe Atmung produziert...", a: "Laktat oder Ethanol", w: ["CO2 und Wasser", "Glukose", "ATP und NADH"] },
  { q: "Der Krebs-Zyklus ist auch bekannt als...", a: "Zitronensäurezyklus", w: ["Glykolyse", "Pentosephosphat", "Elektronenkette"] },
  { q: "Das Endprodukt der aeroben Atmung ist...", a: "CO2 und H2O", w: ["Laktat", "Ethanol", "ATP"] },
  { q: "Aerobe Atmung braucht...", a: "Sauerstoff", w: ["Nur Glukose", "Licht", "Nitrat"] },
  { q: "Wie viele CO2 werden von Glukose in der Atmung freigesetzt?", a: "6", w: ["3", "1", "12"] },
  { q: "NAD+ wird regeneriert zu NADH in...", a: "Der Glykolyse", w: ["Krebs-Zyklus", "Elektronenkette", "Thylakoid"] },
];

const ENERGY_TRANSFER_QUESTIONS = [
  { q: "ATP ist ein...", a: "Energiewährung der Zelle", w: ["Enzym", "Hormone", "Struktur-Protein"] },
  { q: "Wie viele Phosphatgruppen hat ATP?", a: "3", w: ["1", "2", "4"] },
  { q: "Wenn ATP Energie freisetzt, wird es zu...", a: "ADP", w: ["AMP", "GTP", "Phosphat"] },
  { q: "ATP wird hauptsächlich hergestellt in...", a: "Der Mitochondrie", w: ["Chloroplast", "Ribosom", "Zellkern"] },
  { q: "Die Energie in ATP ist gespeichert in...", a: "Phosphodiesterbindungen", w: ["Kohlenstoffbindungen", "Wasserstoffbindungen", "Ionenbindungen"] },
  { q: "Wie lange bleibt ATP stabil in der Zelle?", a: "Wenige Sekunden bis Minuten", w: ["Stunden", "Tage", "Permanent"] },
  { q: "ADP + Phosphat + Energie = ...", a: "ATP", w: ["GTP", "CTP", "AMP"] },
  { q: "Der Zellstoffwechsel benötigt...", a: "Konstante ATP-Produktion", w: ["Nur morgens", "Nur bei Aktivität", "Nur im Schlaf"] },
];

const POPULATION_QUESTIONS = [
  { q: "Was ist eine Population?", a: "Eine Gruppe der gleichen Art am gleichen Ort", w: ["Verschiedene Arten zusammen", "Nur eine Spezies", "Ein Ökosystem"] },
  { q: "Geburtsrate ist...", a: "Neue Individuen pro Zeit", w: ["Todesfälle", "Migration", "Veränderung"] },
  { q: "Was ist die Tragfähigkeit?", a: "Die maximale Populationsgröße", w: ["Minimale Größe", "Durchschnittliche Größe", "Wachstumsrate"] },
  { q: "Wachstumsrate = ...", a: "Geburtsrate - Sterberate", w: ["Geburtsrate + Sterberate", "Nur Geburtsrate", "Tragfähigkeit"] },
  { q: "Wenn Ressourcen knapp werden...", a: "Wachstum verlangsamt sich", w: ["Wachstum beschleunigt sich", "Population wächst exponentiell", "Keine Änderung"] },
  { q: "Einwanderung erhöht...", a: "Die Populationsgröße", w: ["Sterberate", "Auswanderung", "Geburtsrate"] },
  { q: "Was begrenzt Populationswachstum?", a: "Begrenzte Ressourcen", w: ["Nur Raubtiere", "Nur Krankheit", "Nur Alter"] },
  { q: "Ein logistisches Wachstum hat...", a: "Eine flache Phase wenn Tragfähigkeit erreicht wird", w: ["Immer exponentielles Wachstum", "Konstante Rate", "Nur Rückgang"] },
];

const NICHE_QUESTIONS = [
  { q: "Was ist eine ökologische Nische?", a: "Die Rolle einer Art im Ökosystem", w: ["Der Ort wo es lebt", "Die Nahrung", "Die Größe"] },
  { q: "Habitat ist...", a: "Der Ort wo ein Organismus lebt", w: ["Was ein Organismus isst", "Die Rolle im Ökosystem", "Die Populationsgröße"] },
  { q: "Können zwei Arten die gleiche Nische haben?", a: "Nein, eine wird verdrängt", w: ["Ja, immer", "Nur bei Nahrungsmangel", "Nur kleine Arten"] },
  { q: "Ein Specht hat eine Nische als...", a: "Insektenjäger in Bäumen", w: ["Samenfresser", "Fleischfresser", "Algenkonsument"] },
  { q: "Ein Löwe hat eine Nische als...", a: "Großwildjäger in Savannen", w: ["Pflanzenfresser", "Allesfresser", "Insektenfresser"] },
  { q: "Fundamentale Nische ist...", a: "Alle möglichen Rollen ohne Konkurrenz", w: ["Die reale Nische mit Konkurrenz", "Die Reproduktionsrolle", "Der Lebensraum"] },
  { q: "Realisierte Nische ist...", a: "Der tatsächliche Platz mit Konkurrenz", w: ["Ohne andere Arten", "Die maximale Rolle", "Die Fortpflanzungsrolle"] },
];

const SYMBIOSIS_QUESTIONS = [
  { q: "Mutualismus ist wenn...", a: "Beide Arten profitieren", w: ["Eine Art profitiert", "Eine Art leidet", "Keine Auswirkung"] },
  { q: "Parasitismus ist wenn...", a: "Ein Parasit profitiert und ein Wirt leidet", w: ["Beide profitieren", "Keine profitieren", "Nur der Wirt profitiert"] },
  { q: "Kommensalismus ist wenn...", a: "Eine Art profitiert, andere ist neutral", w: ["Beide profitieren", "Eine leidet", "Beide leiden"] },
  { q: "Biene und Blume zeigen...", a: "Mutualismus", w: ["Parasitismus", "Kommensalismus", "Kompetition"] },
  { q: "Floh und Hund zeigen...", a: "Parasitismus", w: ["Mutualismus", "Kommensalismus", "Amensalismus"] },
  { q: "Ein Remora-Fisch auf einem Hai zeigt...", a: "Kommensalismus", w: ["Mutualismus", "Parasitismus", "Konkurrenz"] },
  { q: "Pilze in Wurzeln sind...", a: "Mutualisten (Mykorrhiza)", w: ["Parasiten", "Kommensalen", "Konkurrenten"] },
  { q: "Flechten sind ein Beispiel von...", a: "Mutualismus zwischen Pilz und Alge", w: ["Kommensalismus", "Parasitismus", "Konkurrenz"] },
  { q: "Lice auf Vögeln sind...", a: "Parasiten", w: ["Mutualisten", "Kommensalen", "Prädatoren"] },
];

const IMMUNE_CELLS_QUESTIONS = [
  { q: "Was sind Lymphozyten?", a: "Weiße Blutkörperchen für Immunantwort", w: ["Rote Blutkörperchen", "Blutplättchen", "Zytoplasma"] },
  { q: "B-Zellen produzieren...", a: "Antikörper", w: ["Zytokine", "Enzyme", "Hormone"] },
  { q: "T-Zellen sind verantwortlich für...", a: "Immunantwort regulieren und infizierte Zellen zerstören", w: ["Antikörper-Produktion", "Blutgerinnung", "Sauerstoff-Transport"] },
  { q: "Makrophagen sind...", a: "Phagozyten, die Pathogene aufnehmen", w: ["Antikörper-produzierende Zellen", "Lymphozyten", "Nervenzellen"] },
  { q: "NK-Zellen (Natürliche Killer) bekämpfen...", a: "Virusinfizierte und Krebszellen", w: ["Nur Viren", "Nur Bakterien", "Nur Parasiten"] },
  { q: "Dendritische Zellen sind...", a: "Antigen-präsentierende Zellen", w: ["Nur Antikörper-produzierende Zellen", "Nur Strukturzellen", "Nur Speicher-Zellen"] },
  { q: "Neutrophile sind am wichtigsten für...", a: "Schnelle Reaktion auf Bakterien-Infektionen", w: ["Lange-Zeit-Gedächtnis", "Antikörper", "Hormon-Produktion"] },
];

const IMMUNE_RESPONSE_QUESTIONS = [
  { q: "Angeborene Immunität ist...", a: "Sofort und unspezifisch", w: ["Verzögert und spezifisch", "Nur adaptiv", "Nur mit Antikörpern"] },
  { q: "Adaptive Immunität ist...", a: "Verzögert aber hochspezifisch", w: ["Sofort und unspezifisch", "Nur mit Vakzinen", "Nur mit Antikörpern"] },
  { q: "Was ist ein Antigen?", a: "Ein Stoff der eine Immunreaktion auslöst", w: ["Ein fremdes Objekt", "Ein Krankheitserreger", "Ein Antibody"] },
  { q: "Antikörper sind...", a: "Proteine gegen Antigene", w: ["Zellen", "Hormone", "Lipide"] },
  { q: "Was ist Immungedächtnis?", a: "Die Fähigkeit schneller auf bekannte Antigene zu reagieren", w: ["Langzeit-Speicher im Gehirn", "Nur bei Vakzinen", "Nur bei Tieren"] },
  { q: "Interferone sind...", a: "Proteine die Virenausbreitung hemmen", w: ["Antikörper", "Zellen", "Hormone"] },
  { q: "Komplement ist...", a: "Eine Gruppe von Proteinen die Pathogene markieren", w: ["Ein Antikörper", "Ein Antigen", "Ein Lymphozyt"] },
];

const VACCINATION_QUESTIONS = [
  { q: "Eine Impfung enthält...", a: "Schwaches oder inaktives Antigen", w: ["Starke Pathogene", "Nur Antikörper", "Vollständige Krankheit"] },
  { q: "Wofür ist eine Impfung?", a: "Um Immungedächtnis zu bilden", w: ["Um sofort zu heilen", "Um Krankheit zu behandeln", "Um Symptome zu lindern"] },
  { q: "Was ist Herdenimmunität?", a: "Wenn genug Menschen immun sind, stoppt Ausbreitung", w: ["Wenn alle einzelnen immun sind", "Wenn wenig Menschen immun sind", "Wenn niemand krank ist"] },
  { q: "Wie lange hält Impfschutz?", a: "Von Monaten bis Jahren, je nach Impf", w: ["Nur wenige Stunden", "Dauerhaft für Leben", "Nur ein Tag"] },
  { q: "Was ist eine Auffrischungsimpfung?", a: "Eine zusätzliche Dosis um Immunität zu verstärken", w: ["Die erste Impfung", "Eine Behandlung", "Eine Heilung"] },
  { q: "Sind mRNA-Impfstoffe...", a: "Sicher und wirksam gezeigt", w: ["Gefährlich", "Nicht wirksam", "Neue gefährliche Technologie"] },
  { q: "Wie wirken Lebend-Impfstoffe?", a: "Mit schwachen Live-Viren um Immunität zu stimulieren", w: ["Mit inaktiven Viren", "Mit Antikörpern", "Mit Vitaminen"] },
];

const NEURON_QUESTIONS = [
  { q: "Dendriten empfangen...", a: "Signale von anderen Neuronen", w: ["Signale nur zum Axon", "Sauerstoff", "Glukose"] },
  { q: "Das Axon überträgt...", a: "Signale zu anderen Neuronen", w: ["Signale nur empfangen", "Blut", "Nährstoffe"] },
  { q: "Das Soma ist...", a: "Der Zellkörper mit Zellkern", w: ["Die Spitze des Axons", "Die Dendrite", "Die Synapse"] },
  { q: "Das Axonhügel ist...", a: "Wo das Aktionspotenzial beginnt", w: ["Die Synapsenmembran", "Die Dendrite", "Der Zellkern"] },
  { q: "Myelin ist...", a: "Eine isolierende Hülle um Axone", w: ["Ein Neurotransmitter", "Ein Rezeptor", "Ein Enzym"] },
  { q: "Wie lange sind Nervenfasern in Menschen?", a: "Bis zu 1 Meter lang", w: ["Nur Millimeter", "Zentimeter", "Mehrere Meter"] },
  { q: "Glial-Zellen sind...", a: "Support-Zellen für Neuronen", w: ["Art von Neuronen", "Nur Neurotransmitter", "Nur Rezeptoren"] },
];

const SYNAPSE_QUESTIONS = [
  { q: "Eine Synapse verbindet...", a: "Zwei Neuronen oder Neuro-Muskel", w: ["Nur zwei Dendriten", "Nur zwei Axone", "Ein Axon zum Soma"] },
  { q: "Der synaptische Spalt ist...", a: "Der 20nm Raum zwischen Neuronen", w: ["Das Axonende", "Der Zellkern", "Die Membran"] },
  { q: "Neurotransmitter sind...", a: "Chemische Botenstoffe", w: ["Elektrische Signale", "Proteine", "Hormone"] },
  { q: "Vesikel enthalten...", a: "Neurotransmitter", w: ["DNA", "ATP", "Ribosomen"] },
  { q: "Was passiert beim Aktionspotenzial in der Synapse?", a: "Ca2+ bewirkt Neurotransmitter-Freisetzung", w: ["Mg2+ tritt aus", "K+ tritt ein", "Na+ wird blockiert"] },
  { q: "Dopamin ist ein...", a: "Neurotransmitter", w: ["Hormon", "Protein", "Fett"] },
  { q: "Serotonin beeinflusst...", a: "Stimmung und Schlaf", w: ["Nur Muskelkontraktion", "Nur Verdauung", "Nur Herzschlag"] },
  { q: "Adrenalin ist ein...", a: "Neurotransmitter und Hormon", w: ["Nur Hormon", "Nur Protein", "Nur Antibody"] },
];

const REFLEX_QUESTIONS = [
  { q: "Ein Reflex ist eine...", a: "Automatische schnelle Reaktion", w: ["Bewusste Aktion", "Langsame Reaktion", "Gedachte Handlung"] },
  { q: "Ein monosynaptischer Reflex hat...", a: "Eine Synapse", w: ["Viele Synapsen", "Keine Synapse", "Zehn Synapsen"] },
  { q: "Ein polysynaptischer Reflex hat...", a: "Mehrere Synapsen", w: ["Nur eine Synapse", "Keine Synapse", "Keine Neuronen"] },
  { q: "Der Kniesehnen-Reflex ist ein...", a: "Monosynaptischer Reflex", w: ["Polysynaptischer", "Bewusstsein-abhängiger", "Langsamer Reflex"] },
  { q: "Der Reflex-Bogen folgt...", a: "Sensor → Rückenmark → Muskel", w: ["Sensor → Gehirn → Muskel", "Gehirn → Rückenmark → Muskel", "Direkt Muskel"] },
  { q: "Wieso sind Reflexe schnell?", a: "Wenige Synapsen und direkte Verarbeitung", w: ["Großes Gehirn", "Langsame Signale", "Keine Verarbeitung"] },
  { q: "Der Weg einer Reflexaktion heißt...", a: "Reflex-Bogen", w: ["Nerv-Bahn", "Synaptischer Pfad", "Neuro-Verbindung"] },
  { q: "Können wir Reflexe bewusst unterdrücken?", a: "Schwierig, sie sind automatisch", w: ["Leicht", "Unmöglich", "Nur mit Training"] },
];

const BRAIN_QUESTIONS = [
  { q: "Das Großhirn kontrolliert...", a: "Denken, Sprache, Bewegung", w: ["Nur Herzschlag", "Nur Atmung", "Nur Temperatur"] },
  { q: "Das Kleinhirn ist verantwortlich für...", a: "Bewegungskoordination und Balance", w: ["Denken", "Emotion", "Gedächtnis"] },
  { q: "Der Hirnstamm kontrolliert...", a: "Herzschlag, Atmung, Reflexe", w: ["Denken", "Sehen", "Riechen"] },
  { q: "Die Großhirn-Rinde hat...", a: "Lappen für verschiedene Funktionen", w: ["Nur einen Lappen", "Keine Struktur", "Kein Gehirn"] },
  { q: "Der Thalamus ist wichtig für...", a: "Weiterleitung von Sinnesinfo", w: ["Nur Speicher", "Nur Bewegung", "Nur Emotion"] },
  { q: "Der Hypothalamus regelt...", a: "Hormone, Temperatur, Hunger", w: ["Nur Sehen", "Nur Hören", "Nur Knochen"] },
  { q: "Das limbische System ist für...", a: "Emotion und Gedächtnis", w: ["Nur Bewegung", "Nur Vision", "Nur Sprache"] },
];

const ADAPTATION_QUESTIONS = [
  { q: "Eine strukturelle Anpassung ist...", a: "Körperliche Besonderheit (Schnabel, Fell)", w: ["Gelernte Aktion", "Chemisches Signal", "Laut"] },
  { q: "Eine Verhaltensanpassung ist...", a: "Aktion oder Instinkt (Migration, Jagd)", w: ["Körperliche Eigenschaft", "Chemische Änderung", "Zellveränderung"] },
  { q: "Eine physiologische Anpassung ist...", a: "Interne Prozesse (Giftspeicherung, Wärmeerzeugung)", w: ["Sichtbare Form", "Gelernte Aktion", "Soziales Verhalten"] },
  { q: "Tarnung ist eine...", a: "Strukturelle Anpassung", w: ["Verhaltensanpassung", "Physiologische", "Keine Anpassung"] },
  { q: "Migration ist eine...", a: "Verhaltensanpassung", w: ["Strukturelle", "Physiologische", "Genetische"] },
  { q: "Wofür sind Anpassungen?", a: "Überleben und Fortpflanzung", w: ["Größerwachsen", "Nur Aussehen", "Nur Fortbewegung"] },
  { q: "Kann eine Art mehrere Anpassungen haben?", a: "Ja, immer", w: ["Nein, nur eine", "Vielleicht", "Nur Säugetiere"] },
  { q: "Wie entstand die lange Hals der Giraffe?", a: "Natürliche Auswahl von längeren Hälsen", w: ["Absichtliches Strecken", "Lamarckismus", "Zufälliges Wachstum"] },
];

const NATURAL_SELECTION_QUESTIONS = [
  { q: "Natürliche Auswahl bedeutet...", a: "Überleben der am besten angepassten", w: ["Überleben der Stärksten", "Überleben der intelligentesten", "Zufallsüberleben"] },
  { q: "Mutation erzeugt...", a: "Genetische Vielfalt", w: ["Keine Änderung", "Nur schädliche Effekte", "Umweltänderungen"] },
  { q: "Wer beschrieb natürliche Auswahl?", a: "Charles Darwin", w: ["Lamarck", "Mendel", "Watson"] },
  { q: "Was ist Fitness in Evolution?", a: "Reproduktionserfolg", w: ["Körperliche Stärke", "Körpergröße", "Intelligenz"] },
  { q: "Wie lange dauert Evolution normalerweise?", a: "Viele Generationen", w: ["Sekunden", "Ein Jahr", "Sofort"] },
  { q: "Genetische Drift ist...", a: "Zufällige Frequenzänderungen in kleinen Populationen", w: ["Absichtliche Auswahl", "Nur in großen Populationen", "Nur mit Mutation"] },
  { q: "Genfluss ist...", a: "Bewegung von Genen zwischen Populationen", w: ["Nur Mutation", "Nur Auswahl", "Nur in einen Organismus"] },
];

const FOSSILS_QUESTIONS = [
  { q: "Körperfossilien sind...", a: "Versteinerte Knochen, Skelette", w: ["Fußabdrücke", "Öl und Gas", "Spurenmarken"] },
  { q: "Spurenfossilien sind...", a: "Abdrücke wie Fußspuren", w: ["Skelette", "Chemische Rückstände", "Häute"] },
  { q: "Wie alt können Fossilien sein?", a: "Millionen bis Milliarden Jahre", w: ["Nur tausend Jahre", "Nur tausende Jahre", "Höchstens Millionen"] },
  { q: "Radiokarbondatierung verwendet...", a: "Kohlenstoff-14 Zerfall", w: ["Nur Schätzung", "Nur Vergleich", "Wassermessung"] },
  { q: "Der Fossilienbestand zeigt...", a: "Evolution über Zeit", w: ["Keine Änderung", "Nur Ähnlichkeit", "Nur Vielfalt"] },
  { q: "Fossilisierung geschieht wenn...", a: "Organismus schnell begraben wird unter Sedimenten", w: ["Organismus altert", "Nur Hartteile", "Organismus trocknet"] },
  { q: "Amber Fossilien enthalten...", a: "Prähistorische Insekten in Harz", w: ["Nur Knochen", "Nur Pollen", "Nur Pflanzen"] },
];

const CELL_CYCLE_QUESTIONS = [
  { q: "Die G1 Phase ist...", a: "Zellwachstum und Vorbereitung auf DNA-Replikation", w: ["DNA-Replikation", "Mitose", "Apoptose"] },
  { q: "Die S Phase ist...", a: "DNA wird verdoppelt", w: ["Zellwachstum", "Mitose", "Protein-Synthese"] },
  { q: "Die G2 Phase ist...", a: "Vorbereitung auf Mitose nach S Phase", w: ["DNA-Replikation", "Mitose", "Zellstoff-Abbau"] },
  { q: "Die M Phase ist...", a: "Mitose und Cytokinese", w: ["Zellwachstum", "DNA-Replikation", "Warten"] },
  { q: "Ein Checkpoint ist...", a: "Eine Kontrollstelle um Zellzyklus zu regulieren", w: ["Ein Stopp für immer", "Nur in Prokaryoten", "Nur ein Punkt"] },
  { q: "Wie lange dauert normaler Zellzyklus?", a: "20-30 Stunden", w: ["1 Stunde", "1-2 Tage", "1 Woche"] },
  { q: "Was stoppt den Zellzyklus?", a: "DNA-Beschädigung und Ressourcenmangel", w: ["Normale Aktivität", "Nur bei alten Zellen", "Zufällig"] },
  { q: "Telomere sind...", a: "Schutzkapsel am Ende von Chromosomen", w: ["DNA-Zentrum", "Nur Protein", "Nur RNA"] },
];

const BIOGEOCHEMICAL_QUESTIONS = [
  { q: "Der Kohlenstoffkreislauf umfasst...", a: "CO2 zwischen Atmosphäre, Biota, Boden", w: ["Nur Fotosynthese", "Nur Verbrennung", "Nur Ozeane"] },
  { q: "Der Stickstoffkreislauf umfasst...", a: "N2 Fixation, Nitrifikation, Denitrifikation", w: ["Nur Pflanzenwachstum", "Nur Verwesung", "Nur Luft"] },
  { q: "Der Wasserzyklus umfasst...", a: "Verdampfung, Kondensation, Präzipitation", w: ["Nur Regen", "Nur Verdampfung", "Nur Schnee"] },
  { q: "Wer fixiert Stickstoff?", a: "Bakterien (Stickstoff-fixierende)", w: ["Pflanzen", "Tiere", "Pilze"] },
  { q: "Reservoir für Kohlenstoff ist...", a: "Atmosphäre, Boden, Ozeane", w: ["Nur Luft", "Nur Wald", "Nur Tiere"] },
  { q: "Detritivoren sind wichtig in Biogeochemie weil...", a: "Sie zersetzen Materie und geben Nährstoffe frei", w: ["Sie fressen Tiere", "Sie synthetisieren Protein", "Sie speichern Energie"] },
];

const BEHAVIOR_LEARNING_QUESTIONS = [
  { q: "Ein Instinkt ist...", a: "Angeborenes Verhalten", w: ["Gelerntes Verhalten", "Gedachte Aktion", "Emotionale Reaktion"] },
  { q: "Klassische Konditionierung ist...", a: "Lernen durch Assoziationen", w: ["Angeboren", "Nur Tiere", "Nur Menschen"] },
  { q: "Wer studierte klassische Konditionierung?", a: "Ivan Pavlov", w: ["Skinner", "Darwin", "Mendel"] },
  { q: "Imprinting ist...", a: "Frühe Bindung zu ersten Objekt", w: ["Später Lernprozess", "Nur Menschen", "Nur Vögel"] },
  { q: "Operante Konditionierung nutzt...", a: "Belohnung und Bestrafung", w: ["Assoziationen", "Angeborene Reflexe", "Genetik"] },
  { q: "Können Tiere lernen?", a: "Ja, viele Arten können", w: ["Nein, nur Menschen", "Nur Säugetiere", "Nur Primaten"] },
  { q: "Ein Verhaltensmodifikation ist...", a: "Bewusste Änderung von Verhaltensmustern", w: ["Genetische Änderung", "Evolutionäre Änderung", "Nur Instinkt"] },
  { q: "Insight-Lernen ist...", a: "Plötzliche Erkenntnis der Lösung", w: ["Schrittweises Lernen", "Nur Menschen", "Nur Klassische Konditionierung"] },
];

// ─── K7 GENERATORS ─────────────────────────────────────────────────────────

export const K7_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  cell_structure: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(CELL_STRUCTURE_QUESTIONS, rng);
      questions.push(createMCQ("zellen", "cell_structure", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  cell_structure_typing: (seed?: number) => [
    createTyping("zellen", "cell_structure", "Nenne 2 Zelltypen", ["Prokaryot, Eukaryot"]),
    createTyping("zellen", "cell_structure", "Welche Zellen haben Kern?", ["Eukaryot"]),
    createTyping("zellen", "cell_structure", "Was ist das Zytoplasma?", ["Gelatinöse Flüssigkeit", "Flüssigkeit"]),
    createTyping("zellen", "cell_structure", "Was ist die Zellmembran?", ["Schutzschicht", "Selektiv durchlässig"]),
    createTyping("zellen", "cell_structure", "Wo sitzt die DNA?", ["Kern", "Nukleus"]),
  ],

  cell_organelles: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(ORGANELLE_QUESTIONS, rng);
      questions.push(createMCQ("zellen", "cell_organelles", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  cell_organelles_typing: (seed?: number) => [
    createTyping("zellen", "cell_organelles", "Welche Organelle produziert Energie?", ["Mitochondrium"]),
    createTyping("zellen", "cell_organelles", "Welche macht Fotosynthese?", ["Chloroplast"]),
    createTyping("zellen", "cell_organelles", "Wo wird Protein gemacht?", ["Ribosom"]),
    createTyping("zellen", "cell_organelles", "Was verdaut Lysosomen?", ["Abfallstoffe", "Makromoleküle"]),
    createTyping("zellen", "cell_organelles", "Nenne 3 Organellen", ["Mitochondrium, Chloroplast, Ribosom"]),
  ],

  microscope: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(MICROSCOPE_QUESTIONS, rng);
      questions.push(createMCQ("zellen", "microscope", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  microscope_typing: (seed?: number) => [
    createTyping("zellen", "microscope", "Was ist Vergrößerung?", ["Größer machen", "Objekt vergrößern"]),
    createTyping("zellen", "microscope", "Was ist Auflösung?", ["Detailgenauigkeit", "Detail-Unterscheidung"]),
    createTyping("zellen", "microscope", "Nenne Mikroskoparten", ["Licht, Elektron, Scanning"]),
    createTyping("zellen", "microscope", "Was ist das Okular?", ["Linse zum Auge"]),
    createTyping("zellen", "microscope", "Was ist das Objektiv?", ["Linse zum Objekt"]),
  ],

  cell_division: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(CELL_DIVISION_QUESTIONS, rng);
      questions.push(createMCQ("zellen", "cell_division", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  cell_division_typing: (seed?: number) => [
    createTyping("zellen", "cell_division", "Nenne die Phasen der Mitose", ["Prophase, Metaphase, Anaphase, Telophase"]),
    createTyping("zellen", "cell_division", "Meiose produziert wie viele Zellen?", ["4"]),
    createTyping("zellen", "cell_division", "Wofür ist Meiose?", ["Sexuelle Fortpflanzung"]),
    createTyping("zellen", "cell_division", "Wofür ist Mitose?", ["Wachstum", "Replikation"]),
    createTyping("zellen", "cell_division", "Was ist Cytokinese?", ["Zellteilung", "Zytoplasma-Teilung"]),
  ],

  photosynthesis_detail: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(PHOTOSYNTHESIS_QUESTIONS, rng);
      questions.push(createMCQ("stoffwechsel", "photosynthesis_detail", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  photosynthesis_detail_typing: (seed?: number) => [
    createTyping("stoffwechsel", "photosynthesis_detail", "Nenne die zwei Phasen", ["Licht, Dunkel", "Licht-Dunkel"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Wo finden Lichtreaktionen statt?", ["Thylakoid"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Wo finden Dunkelreaktionen statt?", ["Stroma"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Was ist der Calvin-Zyklus?", ["Dunkelreaktion", "Dunkel-Reaktion"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Welches Pigment ist wichtig?", ["Chlorophyll"]),
  ],

  cellular_respiration: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(RESPIRATION_QUESTIONS, rng);
      questions.push(createMCQ("stoffwechsel", "cellular_respiration", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  cellular_respiration_typing: (seed?: number) => [
    createTyping("stoffwechsel", "cellular_respiration", "Nenne die 3 Stadien", ["Glykolyse, Krebs, Elektronenkette"]),
    createTyping("stoffwechsel", "cellular_respiration", "Wo ist die Glykolyse?", ["Zytoplasma"]),
    createTyping("stoffwechsel", "cellular_respiration", "Was ist der Krebs-Zyklus?", ["Zitronensäurezyklus"]),
    createTyping("stoffwechsel", "cellular_respiration", "Wie viel ATP von Glucose?", ["30-32", "30"]),
    createTyping("stoffwechsel", "cellular_respiration", "Was ist das Endprodukt?", ["CO2, H2O"]),
  ],

  energy_transfer: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(ENERGY_TRANSFER_QUESTIONS, rng);
      questions.push(createMCQ("stoffwechsel", "energy_transfer", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  energy_transfer_typing: (seed?: number) => [
    createTyping("stoffwechsel", "energy_transfer", "Was ist ATP?", ["Adenosintriphosphat"]),
    createTyping("stoffwechsel", "energy_transfer", "Wie viele Phosphate hat ATP?", ["3"]),
    createTyping("stoffwechsel", "energy_transfer", "ADP + Phosphat = ...", ["ATP"]),
    createTyping("stoffwechsel", "energy_transfer", "Wo wird ATP gemacht?", ["Mitochondrium"]),
    createTyping("stoffwechsel", "energy_transfer", "Wie lange hält ATP?", ["Sekunden", "Wenige Sekunden"]),
  ],

  population: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(POPULATION_QUESTIONS, rng);
      questions.push(createMCQ("oekologie", "population", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  population_typing: (seed?: number) => [
    createTyping("oekologie", "population", "Was ist eine Population?", ["Gleiche Art am Ort"]),
    createTyping("oekologie", "population", "Was ist Geburtsrate?", ["Neue Individuen %", "Neue pro Zeit"]),
    createTyping("oekologie", "population", "Was ist Sterberate?", ["Todesfälle %", "Todesfälle pro Zeit"]),
    createTyping("oekologie", "population", "Was ist K (Tragfähigkeit)?", ["Max Population", "Maximale Größe"]),
    createTyping("oekologie", "population", "Nenne Populationsfaktoren", ["Geburts-, Sterberate"]),
  ],

  ecological_niche: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(NICHE_QUESTIONS, rng);
      questions.push(createMCQ("oekologie", "ecological_niche", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  ecological_niche_typing: (seed?: number) => [
    createTyping("oekologie", "ecological_niche", "Was ist eine ökologische Nische?", ["Rolle im Ökosystem"]),
    createTyping("oekologie", "ecological_niche", "Was ist das Habitat?", ["Wo lebt es", "Ort"]),
    createTyping("oekologie", "ecological_niche", "Unterschied Nische & Habitat?", ["Nische = Rolle, Habitat = Ort"]),
    createTyping("oekologie", "ecological_niche", "Können zwei Arten die gleiche Nische haben?", ["Nein"]),
    createTyping("oekologie", "ecological_niche", "Nenne 3 Nischenkomponenten", ["Nahrung, Raum, Zeit"]),
  ],

  competition: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(createMCQ("oekologie", "competition",
        "Konkurrenz zwischen Arten ist um...",
        "Begrenzte Ressourcen",
        ["Territorium", "Paarungsrecht", "Dominanz"],
        rng
      ));
    }
    return questions.slice(0, 30);
  },
  competition_typing: (seed?: number) => [
    createTyping("oekologie", "competition", "Was ist intraspezifische Konkurrenz?", ["Innerhalb Art"]),
    createTyping("oekologie", "competition", "Was ist interspezifische?", ["Zwischen Arten"]),
    createTyping("oekologie", "competition", "Was ist Ausschluss?", ["Eine Art gewinnt", "Kompetitiver Ausschluss"]),
    createTyping("oekologie", "competition", "Folge der Konkurrenz?", ["Anpassung", "Evolution"]),
    createTyping("oekologie", "competition", "Nenne Wettbewerbsarten", ["Raum, Nahrung, Licht"]),
  ],

  symbiosis: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(SYMBIOSIS_QUESTIONS, rng);
      questions.push(createMCQ("oekologie", "symbiosis", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  symbiosis_typing: (seed?: number) => [
    createTyping("oekologie", "symbiosis", "Nenne die 3 Symbiosetypen", ["Mutualismus, Parasitismus, Kommensalismus"]),
    createTyping("oekologie", "symbiosis", "Was ist Mutualismus?", ["Beide profitieren"]),
    createTyping("oekologie", "symbiosis", "Was ist Parasitismus?", ["Einer profitiert, anderer leidet"]),
    createTyping("oekologie", "symbiosis", "Was ist Kommensalismus?", ["Einer profitiert, anderer neutral"]),
    createTyping("oekologie", "symbiosis", "Nenne ein Beispiel", ["Biene & Blume"]),
  ],

  immune_cells: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(IMMUNE_CELLS_QUESTIONS, rng);
      questions.push(createMCQ("immunsystem", "immune_cells", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  immune_cells_typing: (seed?: number) => [
    createTyping("immunsystem", "immune_cells", "Was sind Lymphozyten?", ["Weiße Blutkörperchen"]),
    createTyping("immunsystem", "immune_cells", "Was sind B-Zellen?", ["Antikörperproduzenten"]),
    createTyping("immunsystem", "immune_cells", "Was sind T-Zellen?", ["Immunantwort regulieren", "Infizierte Zellen zerstören"]),
    createTyping("immunsystem", "immune_cells", "Was sind Makrophagen?", ["Phagozyt", "Fresszelle"]),
    createTyping("immunsystem", "immune_cells", "Nenne 3 Immunzellen", ["B-Zelle, T-Zelle, Makrophage"]),
  ],

  immune_response: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(IMMUNE_RESPONSE_QUESTIONS, rng);
      questions.push(createMCQ("immunsystem", "immune_response", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  immune_response_typing: (seed?: number) => [
    createTyping("immunsystem", "immune_response", "Nenne die 2 Immuntypen", ["Innate, Adaptiv"]),
    createTyping("immunsystem", "immune_response", "Was ist Innate Immunität?", ["Sofort, unspezifisch"]),
    createTyping("immunsystem", "immune_response", "Was ist Adaptive?", ["Verzögert, spezifisch"]),
    createTyping("immunsystem", "immune_response", "Was ist Antigen?", ["Stoff der Immunreaktion auslöst", "Fremder Stoff"]),
    createTyping("immunsystem", "immune_response", "Was ist Antikörper?", ["Protein gegen Antigen"]),
  ],

  vaccination: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(VACCINATION_QUESTIONS, rng);
      questions.push(createMCQ("immunsystem", "vaccination", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  vaccination_typing: (seed?: number) => [
    createTyping("immunsystem", "vaccination", "Was ist eine Impfung?", ["Schwaches Antigen"]),
    createTyping("immunsystem", "vaccination", "Worum geht es?", ["Immungedächtnis"]),
    createTyping("immunsystem", "vaccination", "Wie lange wirkt Impfung?", ["Jahre, Jahrzehnte"]),
    createTyping("immunsystem", "vaccination", "Nenne 3 Impfstoffe", ["Masern, Polio, COVID"]),
    createTyping("immunsystem", "vaccination", "Was ist Herdenimmunität?", ["Wenn genug Menschen immun sind, stoppt Ausbreitung", "Genug sind immun"]),
  ],

  neuron: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(NEURON_QUESTIONS, rng);
      questions.push(createMCQ("nervensystem", "neuron", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  neuron_typing: (seed?: number) => [
    createTyping("nervensystem", "neuron", "Nenne die 3 Neuronenteile", ["Dendrit, Soma, Axon"]),
    createTyping("nervensystem", "neuron", "Was ist das Soma?", ["Zellkörper", "Kern-Körper"]),
    createTyping("nervensystem", "neuron", "Welcher Teil empfängt Signal?", ["Dendrit"]),
    createTyping("nervensystem", "neuron", "Welcher sendet Signal?", ["Axon"]),
    createTyping("nervensystem", "neuron", "Was ist das Axonhügel?", ["Signal Ursprung", "Erste Segment"]),
  ],

  synapse: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(SYNAPSE_QUESTIONS, rng);
      questions.push(createMCQ("nervensystem", "synapse", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  synapse_typing: (seed?: number) => [
    createTyping("nervensystem", "synapse", "Was ist eine Synapse?", ["Verbindung zwischen Neuronen"]),
    createTyping("nervensystem", "synapse", "Was ist ein Neurotransmitter?", ["Chemischer Botenstoff"]),
    createTyping("nervensystem", "synapse", "Was sind Vesikel?", ["Transportbläschen"]),
    createTyping("nervensystem", "synapse", "Was ist der Spalt?", ["Raum zwischen Neuronen"]),
    createTyping("nervensystem", "synapse", "Nenne 3 Neurotransmitter", ["Dopamin, Serotonin, Acetylcholin"]),
  ],

  reflex: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(REFLEX_QUESTIONS, rng);
      questions.push(createMCQ("nervensystem", "reflex", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  reflex_typing: (seed?: number) => [
    createTyping("nervensystem", "reflex", "Was ist ein Reflex?", ["Automatische Reaktion"]),
    createTyping("nervensystem", "reflex", "Beispiel für Reflex?", ["Kniesehnen-Reflex"]),
    createTyping("nervensystem", "reflex", "Nenne Reflex-Komponenten", ["Sensor, Neuro, Muskel"]),
    createTyping("nervensystem", "reflex", "Warum schnell?", ["Wenige Synapsen"]),
    createTyping("nervensystem", "reflex", "Was ist der Bogen?", ["Reflex-Weg"]),
  ],

  brain: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(BRAIN_QUESTIONS, rng);
      questions.push(createMCQ("nervensystem", "brain", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  brain_typing: (seed?: number) => [
    createTyping("nervensystem", "brain", "Nenne die 3 Hirnteile", ["Großhirn, Kleinhirn, Hirnstamm"]),
    createTyping("nervensystem", "brain", "Was kontrolliert Großhirn?", ["Bewusstsein, Denken"]),
    createTyping("nervensystem", "brain", "Was macht Kleinhirn?", ["Koordination", "Balance"]),
    createTyping("nervensystem", "brain", "Was regelt Hirnstamm?", ["Herz, Atmung"]),
    createTyping("nervensystem", "brain", "Was ist das Cerebellum?", ["Kleinhirn"]),
  ],

  adaptation: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(ADAPTATION_QUESTIONS, rng);
      questions.push(createMCQ("evolution", "adaptation", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  adaptation_typing: (seed?: number) => [
    createTyping("evolution", "adaptation", "Nenne 3 Adaptationstypen", ["Strukturell, Verhaltens-, Physiologisch"]),
    createTyping("evolution", "adaptation", "Was ist Strukturanpassung?", ["Morphologie", "Körperform"]),
    createTyping("evolution", "adaptation", "Was ist Verhaltensanpassung?", ["Aktionen, Instinkte"]),
    createTyping("evolution", "adaptation", "Wofür sind Anpassungen?", ["Überleben, Reproduktion"]),
    createTyping("evolution", "adaptation", "Nenne 3 Beispiele", ["Schnabel, Migration, Giftresistenz"]),
  ],

  natural_selection: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(NATURAL_SELECTION_QUESTIONS, rng);
      questions.push(createMCQ("evolution", "natural_selection", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  natural_selection_typing: (seed?: number) => [
    createTyping("evolution", "natural_selection", "Was ist natürliche Auswahl?", ["Überleben der am besten angepassten"]),
    createTyping("evolution", "natural_selection", "Wer hat das beschrieben?", ["Darwin"]),
    createTyping("evolution", "natural_selection", "Nenne Mechanismen", ["Mutation, Auswahl, Drift"]),
    createTyping("evolution", "natural_selection", "Was ist Fitness?", ["Reproduktionserfolg"]),
    createTyping("evolution", "natural_selection", "Wie lange dauert Evolution?", ["Viele Generationen"]),
  ],

  fossils: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(FOSSILS_QUESTIONS, rng);
      questions.push(createMCQ("evolution", "fossils", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  fossils_typing: (seed?: number) => [
    createTyping("evolution", "fossils", "Nenne Fossilientypen", ["Körper-, Spur-, Chemisch"]),
    createTyping("evolution", "fossils", "Was ist Körperfossil?", ["Skelett, Knochen"]),
    createTyping("evolution", "fossils", "Was ist Spurenfossil?", ["Fußabdruck, Bau"]),
    createTyping("evolution", "fossils", "Wie alt können Fossilien sein?", ["Millionen Jahre"]),
    createTyping("evolution", "fossils", "Wie datiert man Fossilien?", ["Radiokarbondatierung"]),
  ],

  cell_cycle: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(CELL_CYCLE_QUESTIONS, rng);
      questions.push(createMCQ("zellen", "cell_cycle", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  cell_cycle_typing: (seed?: number) => [
    createTyping("zellen", "cell_cycle", "Nenne die 4 Phasen", ["G1, S, G2, M"]),
    createTyping("zellen", "cell_cycle", "Was ist S Phase?", ["DNA Replikation"]),
    createTyping("zellen", "cell_cycle", "Was ist G1 Phase?", ["Zellwachstum"]),
    createTyping("zellen", "cell_cycle", "Was ist Checkpoint?", ["Kontrollpunkt"]),
    createTyping("zellen", "cell_cycle", "Wie lange dauert Zellzyklus?", ["20-30 Stunden"]),
  ],

  biogeochemical_cycles: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(BIOGEOCHEMICAL_QUESTIONS, rng);
      questions.push(createMCQ("oekologie", "biogeochemical_cycles", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  biogeochemical_cycles_typing: (seed?: number) => [
    createTyping("oekologie", "biogeochemical_cycles", "Nenne 3 Kreisläufe", ["Kohlenstoff, Stickstoff, Wasser"]),
    createTyping("oekologie", "biogeochemical_cycles", "Was ist Kohlenstoffkreislauf?", ["CO2 Austausch"]),
    createTyping("oekologie", "biogeochemical_cycles", "Was ist Stickstoffkreislauf?", ["N2 Fixation"]),
    createTyping("oekologie", "biogeochemical_cycles", "Wo ist das Reservoir?", ["Atmosphäre, Boden, Wasser"]),
    createTyping("oekologie", "biogeochemical_cycles", "Wer sind Produzenten/Konsumenten?", ["Pflanzen/Tiere"]),
  ],

  behavior_learning: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const q = pick(BEHAVIOR_LEARNING_QUESTIONS, rng);
      questions.push(createMCQ("nervensystem", "behavior_learning", q.q, q.a, q.w, rng));
    }
    return questions.slice(0, 30);
  },
  behavior_learning_typing: (seed?: number) => [
    createTyping("nervensystem", "behavior_learning", "Was ist Instinkt?", ["Angeborenes Verhalten"]),
    createTyping("nervensystem", "behavior_learning", "Was ist klassische Konditionierung?", ["Pavlov", "Lernen durch Assoziationen"]),
    createTyping("nervensystem", "behavior_learning", "Was ist Imprinting?", ["Frühe Bindung"]),
    createTyping("nervensystem", "behavior_learning", "Nenne Lerntypen", ["Instinkt, Konditionierung, Insight"]),
    createTyping("nervensystem", "behavior_learning", "Können Tiere lernen?", ["Ja"]),
  ],
};

export const GENERATOR_MAP: Record<string, (seed?: number) => CurriculumQuestion[]> = K7_Generators;

setK7GeneratorMap(GENERATOR_MAP);
