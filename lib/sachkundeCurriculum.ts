// ─── SACHKUNDE CURRICULUM — BARREL FILE ────────────────────────────────────────
// Connects the 4 grade generator files (sachkundeGenerators1-4.ts) into
// a unified curriculum structure compatible with LanguageTestEngine.

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import { G1_Generators_Sachkunde } from "./sachkundeGenerators1";
import { G2_Generators_Sachkunde } from "./sachkundeGenerators2";
import { G3_Generators_Sachkunde } from "./sachkundeGenerators3";
import { G4_Generators_Sachkunde, G4_Typing_Generators_Sachkunde } from "./sachkundeGenerators4";

// ─── TOPIC NAMES (German) ───────────────────────────────────────────────────────

const TOPIC_NAMES: Record<string, string> = {
  // Grade 1
  körperteile: "Körperteile",
  sinnesorgane: "Sinnesorgane",
  gesundheit_hygiene: "Gesundheit & Hygiene",
  haustiere: "Haustiere",
  wilde_tiere: "Wilde Tiere",
  tierlaute: "Tierlaute",
  jahreszeiten_natur: "Jahreszeiten & Natur",
  bäume: "Bäume",
  blueten_fruechte: "Blüten & Früchte",
  wetter: "Wetter",
  jahreszeiten_detail: "Jahreszeiten (Detail)",
  monate_tage: "Monate & Tage",
  familie: "Familie",
  zuhause: "Zuhause",
  regeln_verhalten: "Regeln & Verhalten",
  verkehrsmittel: "Verkehrsmittel",
  verkehrsregeln: "Verkehrsregeln",
  sicherheit: "Sicherheit",
  materialien: "Materialien",
  mülltrennung: "Mülltrennung",
  // Grade 2
  ernährung_verdauung: "Ernährung & Verdauung",
  zahngesundheit: "Zahngesundheit",
  bewegung_körperpflege: "Bewegung & Körperpflege",
  schlaf_ruhe: "Schlaf & Ruhe",
  lebensräume: "Lebensräume",
  nahrungsketten: "Nahrungsketten",
  haustiere_pflege: "Haustiere (Pflege)",
  wildtiere_anpassung: "Wildtiere & Anpassung",
  pflanzenteile: "Pflanzenteile",
  wachstum_lebenszyklus: "Wachstum & Lebenszyklus",
  samen_zur_blüte: "Samen zur Blüte",
  nützliche_pflanzen: "Nützliche Pflanzen",
  wasserkreislauf: "Wasserkreislauf",
  aggregatzustände: "Aggregatzustände",
  wasser_im_leben: "Wasser im Leben",
  tag_jahreszeiten: "Tag & Jahreszeiten",
  verschiedene_berufe: "Verschiedene Berufe",
  was_machen_berufe: "Was machen Berufe?",
  familie_rollen: "Familie & Rollen",
  zusammenleben_hilfe: "Zusammenleben & Hilfe",
  unfallprävention: "Unfallprävention",
  verkehrssicherheit: "Verkehrssicherheit",
  erste_hilfe_basics: "Erste Hilfe Basics",
  notsituationen: "Notsituationen",
  magnetismus: "Magnetismus",
  schwimmen_sinken: "Schwimmen & Sinken",
  // Grade 3
  körperaufbau: "Körperaufbau",
  ernährungspyramide: "Ernährungspyramide",
  zahnentwicklung: "Zahnentwicklung",
  bewegung_sport: "Bewegung & Sport",
  tierklassen: "Tierklassen",
  nahrungsnetze: "Nahrungsnetze",
  schmetterlinge_insekten: "Schmetterlinge & Insekten",
  waldtiere_raubtiere: "Waldtiere & Raubtiere",
  haustier_züchtung: "Haustier & Züchtung",
  blüte_bestäubung: "Blüte & Bestäubung",
  photosynthese_einfach: "Photosynthese (einfach)",
  pflanzenvermehrung: "Pflanzenvermehrung",
  waldschichten: "Waldschichten",
  wasserkreislauf_detail: "Wasserkreislauf (Detail)",
  wetter_instrumente: "Wetter-Instrumente",
  jahreszeiten_klima: "Jahreszeiten & Klima",
  gewässer_typen: "Gewässer-Typen",
  einfache_maschinen: "Einfache Maschinen",
  energie_quellen: "Energie-Quellen",
  verkehrsmittel_g3: "Verkehrsmittel",
  berufe: "Berufe & Spezialisierung",
  dorf_stadt: "Dorf vs. Stadt",
  grundbedürfnisse: "Grundbedürfnisse",
  regeln_gesetze: "Regeln & Gesetze",
  umweltschutz_recycling: "Umweltschutz & Recycling",
  kompass_himmelsrichtungen: "Kompass & Himmelsrichtungen",
  kartenlesen: "Kartenlesen",
  // Grade 4
  organe: "Organe",
  ernährung: "Ernährung",
  // bewegung_sport already in G3
  säugetiere: "Säugetiere",
  vögel: "Vögel",
  reptilien_amphibien: "Reptilien & Amphibien",
  insekten: "Insekten",
  pflanzenbau: "Pflanzenbau",
  ökosysteme: "Ökosysteme",
  wetter_klima: "Wetter & Klima",
  // jahreszeiten_natur already in G1
  skelet_muskulatur: "Skelett & Muskulatur",
  wasser: "Wasser",
  luft: "Luft",
  steine_mineral: "Steine & Mineralien",
  energie: "Energie",
  deutsche_bundesländer: "Deutsche Bundesländer",
  europa: "Europa",
  beruf: "Berufe",
  verkehr_sicherheit: "Verkehr & Sicherheit",
  klima: "Klima",
  gesundheit_advanced: "Gesundheit (Vertieft)",
  wald_ökosystem: "Wald-Ökosystem",
  vogel_zug: "Vogelzug",
  ernährungskette: "Ernährungskette",
  stromkreis: "Stromkreis",
};

// ─── THEME DEFINITIONS PER GRADE ────────────────────────────────────────────────

function buildTheme(
  id: string,
  name: string,
  icon: string,
  color: string,
  generators: Record<string, (cc: string) => CurriculumQuestion[]>,
  topicKeys: string[],
  typingGenerators?: Record<string, (cc: string) => CurriculumQuestion[]>,
): CurriculumTheme {
  return {
    id,
    name,
    icon,
    color,
    subtopics: topicKeys.map((key) => {
      const mcqGen = generators[key];
      const typGen = typingGenerators?.[key];
      const questions: CurriculumQuestion[] = [];
      if (mcqGen) questions.push(...mcqGen("DE"));
      if (typGen) questions.push(...typGen("DE"));
      return {
        id: key,
        name: TOPIC_NAMES[key] ?? key,
        questions,
        hasGenerator: true,
      };
    }),
  };
}

// ── Grade 1 themes ──────────────────────────────────────────────────────────────

const G1_THEMES: CurriculumTheme[] = [
  buildTheme("g1_körper", "Mein Körper", "🧍", "#FF6B6B",
    G1_Generators_Sachkunde as any,
    ["körperteile", "sinnesorgane", "gesundheit_hygiene"]),
  buildTheme("g1_tiere", "Tiere", "🐾", "#4ECDC4",
    G1_Generators_Sachkunde as any,
    ["haustiere", "wilde_tiere", "tierlaute"]),
  buildTheme("g1_natur", "Natur & Jahreszeiten", "🌿", "#45B7D1",
    G1_Generators_Sachkunde as any,
    ["jahreszeiten_natur", "bäume", "blueten_fruechte", "wetter", "jahreszeiten_detail", "monate_tage"]),
  buildTheme("g1_zusammenleben", "Zusammenleben", "👨‍👩‍👧", "#96CEB4",
    G1_Generators_Sachkunde as any,
    ["familie", "zuhause", "regeln_verhalten"]),
  buildTheme("g1_verkehr", "Verkehr & Sicherheit", "🚗", "#FFEAA7",
    G1_Generators_Sachkunde as any,
    ["verkehrsmittel", "verkehrsregeln", "sicherheit"]),
  buildTheme("g1_technik", "Materialien & Umwelt", "♻️", "#DDA0DD",
    G1_Generators_Sachkunde as any,
    ["materialien", "mülltrennung"]),
];

// ── Grade 2 themes ──────────────────────────────────────────────────────────────

const G2_THEMES: CurriculumTheme[] = [
  buildTheme("g2_körper", "Mein Körper", "🧍", "#FF6B6B",
    G2_Generators_Sachkunde as any,
    ["ernährung_verdauung", "zahngesundheit", "bewegung_körperpflege", "schlaf_ruhe"]),
  buildTheme("g2_tiere", "Tiere & Lebensräume", "🐾", "#4ECDC4",
    G2_Generators_Sachkunde as any,
    ["lebensräume", "nahrungsketten", "haustiere_pflege", "wildtiere_anpassung"]),
  buildTheme("g2_pflanzen", "Pflanzen", "🌱", "#45B7D1",
    G2_Generators_Sachkunde as any,
    ["pflanzenteile", "wachstum_lebenszyklus", "samen_zur_blüte", "nützliche_pflanzen"]),
  buildTheme("g2_wasser", "Wasser & Zeit", "💧", "#74B9FF",
    G2_Generators_Sachkunde as any,
    ["wasserkreislauf", "aggregatzustände", "wasser_im_leben", "tag_jahreszeiten"]),
  buildTheme("g2_berufe", "Berufe & Familie", "👷", "#FFEAA7",
    G2_Generators_Sachkunde as any,
    ["verschiedene_berufe", "was_machen_berufe", "familie_rollen", "zusammenleben_hilfe"]),
  buildTheme("g2_sicherheit", "Sicherheit", "🛡️", "#FF7675",
    G2_Generators_Sachkunde as any,
    ["unfallprävention", "verkehrssicherheit", "erste_hilfe_basics", "notsituationen"]),
  buildTheme("g2_technik", "Technik & Experimente", "🧲", "#A29BFE",
    G2_Generators_Sachkunde as any,
    ["magnetismus", "schwimmen_sinken"]),
];

// ── Grade 3 themes ──────────────────────────────────────────────────────────────

const G3_THEMES: CurriculumTheme[] = [
  buildTheme("g3_körper", "Körper & Gesundheit", "🧍", "#FF6B6B",
    G3_Generators_Sachkunde as any,
    ["körperaufbau", "ernährungspyramide", "zahnentwicklung", "bewegung_sport"]),
  buildTheme("g3_tiere", "Tiere & Ökosysteme", "🐾", "#4ECDC4",
    G3_Generators_Sachkunde as any,
    ["tierklassen", "nahrungsnetze", "schmetterlinge_insekten", "waldtiere_raubtiere", "haustier_züchtung"]),
  buildTheme("g3_pflanzen", "Pflanzen & Botanik", "🌿", "#45B7D1",
    G3_Generators_Sachkunde as any,
    ["blüte_bestäubung", "photosynthese_einfach", "pflanzenvermehrung", "waldschichten"]),
  buildTheme("g3_wetter", "Wasser, Wetter & Klima", "🌦️", "#74B9FF",
    G3_Generators_Sachkunde as any,
    ["wasserkreislauf_detail", "wetter_instrumente", "jahreszeiten_klima", "gewässer_typen"]),
  buildTheme("g3_technik", "Technik & Erfindungen", "⚙️", "#A29BFE",
    G3_Generators_Sachkunde as any,
    ["einfache_maschinen", "energie_quellen", "verkehrsmittel"]),
  buildTheme("g3_gesellschaft", "Gesellschaft & Geschichte", "🏛️", "#FFEAA7",
    G3_Generators_Sachkunde as any,
    ["berufe", "dorf_stadt", "grundbedürfnisse", "regeln_gesetze"]),
  buildTheme("g3_umwelt", "Umwelt & Navigation", "🧭", "#96CEB4",
    G3_Generators_Sachkunde as any,
    ["umweltschutz_recycling", "kompass_himmelsrichtungen", "kartenlesen"]),
];

// ── Grade 4 themes ──────────────────────────────────────────────────────────────

const G4_THEMES: CurriculumTheme[] = [
  buildTheme("g4_körper", "Körper & Gesundheit", "🧍", "#FF6B6B",
    G4_Generators_Sachkunde as any,
    ["organe", "ernährung", "bewegung_sport", "skelet_muskulatur", "gesundheit_advanced"],
    G4_Typing_Generators_Sachkunde as any),
  buildTheme("g4_tiere", "Tiere", "🐾", "#4ECDC4",
    G4_Generators_Sachkunde as any,
    ["säugetiere", "vögel", "reptilien_amphibien", "insekten", "vogel_zug", "ernährungskette"],
    G4_Typing_Generators_Sachkunde as any),
  buildTheme("g4_pflanzen", "Pflanzen & Ökosysteme", "🌿", "#45B7D1",
    G4_Generators_Sachkunde as any,
    ["pflanzenbau", "ökosysteme", "wald_ökosystem"]),
  buildTheme("g4_wetter", "Wetter & Klima", "🌦️", "#74B9FF",
    G4_Generators_Sachkunde as any,
    ["wetter_klima", "jahreszeiten_natur", "klima"]),
  buildTheme("g4_stoffe", "Stoffe & Energie", "⚡", "#A29BFE",
    G4_Generators_Sachkunde as any,
    ["wasser", "luft", "steine_mineral", "energie", "stromkreis"],
    G4_Typing_Generators_Sachkunde as any),
  buildTheme("g4_geographie", "Geographie", "🗺️", "#FFEAA7",
    G4_Generators_Sachkunde as any,
    ["deutsche_bundesländer", "europa"]),
  buildTheme("g4_gesellschaft", "Gesellschaft & Verkehr", "🚦", "#96CEB4",
    G4_Generators_Sachkunde as any,
    ["beruf", "verkehr_sicherheit"]),
];

// ─── EXPORT: SACHKUNDE_CURRICULUM ──────────────────────────────────────────────

export const SACHKUNDE_CURRICULUM: Record<number, CurriculumTheme[]> = {
  1: G1_THEMES,
  2: G2_THEMES,
  3: G3_THEMES,
  4: G4_THEMES,
};

// ─── GET QUESTIONS ──────────────────────────────────────────────────────────────

export function getSachkundeQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10,
): CurriculumQuestion[] {
  const themes = SACHKUNDE_CURRICULUM[grade] ?? [];
  const pool: CurriculumQuestion[] = [];

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        pool.push(...sub.questions);
      }
    }
  }

  // If pool is too small, cycle through existing questions with shuffled options
  if (pool.length > 0 && pool.length < count) {
    const base = [...pool];
    while (pool.length < count) {
      const q = { ...base[pool.length % base.length] };
      if (q.type === "mcq" && q.options) {
        const opts = [...q.options];
        const correctAnswer = opts[q.correct ?? 0];
        for (let i = opts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [opts[i], opts[j]] = [opts[j], opts[i]];
        }
        q.options = opts;
        q.correct = opts.indexOf(correctAnswer);
      }
      pool.push(q);
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

// ─── GRADING (German system 1–6, same as Deutsch) ──────────────────────────────

export type SachkundeCountry = "DE" | "AT" | "CH";

export function calculateSachkundeMark(pct: number, country: string) {
  if (country === "AT") {
    if (pct >= 87) return { note: 1, label: "Sehr gut",       color: "#FFD700", emoji: "🌟" };
    if (pct >= 73) return { note: 2, label: "Gut",            color: "#00FF88", emoji: "😊" };
    if (pct >= 57) return { note: 3, label: "Befriedigend",   color: "#00D4FF", emoji: "🙂" };
    if (pct >= 40) return { note: 4, label: "Genügend",       color: "#FF6B00", emoji: "😅" };
    return               { note: 5, label: "Nicht genügend", color: "#FF4444", emoji: "😟" };
  }
  if (country === "CH") {
    if (pct >= 92) return { note: 6, label: "Sehr gut",       color: "#FFD700", emoji: "🌟" };
    if (pct >= 81) return { note: 5, label: "Gut",            color: "#00FF88", emoji: "😊" };
    if (pct >= 67) return { note: 4, label: "Genügend",       color: "#00D4FF", emoji: "🙂" };
    if (pct >= 50) return { note: 3, label: "Schwach",        color: "#FF6B00", emoji: "😅" };
    if (pct >= 30) return { note: 2, label: "Sehr schwach",   color: "#FF4444", emoji: "😟" };
    return               { note: 1, label: "Unbrauchbar",    color: "#FF2D78", emoji: "😢" };
  }
  // Germany: 1–6 scale (1=best)
  if (pct >= 92) return { note: 1, label: "Sehr gut",      color: "#FFD700", emoji: "🌟" };
  if (pct >= 81) return { note: 2, label: "Gut",           color: "#00FF88", emoji: "😊" };
  if (pct >= 67) return { note: 3, label: "Befriedigend",  color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: 4, label: "Ausreichend",   color: "#FF6B00", emoji: "😅" };
  if (pct >= 30) return { note: 5, label: "Mangelhaft",    color: "#FF4444", emoji: "😟" };
  return               { note: 6, label: "Ungenügend",    color: "#FF2D78", emoji: "😢" };
}

// ─── SUBTOPIC HINTS ─────────────────────────────────────────────────────────────

export const SACHKUNDE_SUBTOPIC_HINTS: Record<string, string> = {
  // G1
  körperteile: "Kopf, Arm, Bein, Auge, Ohr, Nase, Mund, Hand, Fuß",
  sinnesorgane: "5 Sinne: Sehen (Auge), Hören (Ohr), Riechen (Nase), Schmecken (Zunge), Tasten (Haut)",
  gesundheit_hygiene: "Hände waschen, Zähne putzen, ausreichend schlafen",
  haustiere: "Hund, Katze, Hamster, Kaninchen, Meerschweinchen, Fische",
  wilde_tiere: "Löwe, Elefant, Bär, Wolf, Fuchs, Reh",
  tierlaute: "Hund: bellen, Katze: miauen, Kuh: muhen, Hahn: krähen",
  jahreszeiten_natur: "Frühling, Sommer, Herbst, Winter",
  bäume: "Eiche, Buche, Birke, Tanne, Kiefer, Linde",
  blueten_fruechte: "Blüte → Frucht → Samen → neue Pflanze",
  wetter: "Regen, Schnee, Sonne, Wind, Wolken, Gewitter",
  familie: "Eltern, Geschwister, Großeltern, Tanten, Onkel",
  verkehrsregeln: "Ampel: Rot=Stehen, Grün=Gehen. Zebrastreifen, Helm tragen",
  materialien: "Holz, Metall, Kunststoff, Glas, Stoff, Papier",
  mülltrennung: "Papier (blau), Plastik (gelb), Glas (grün/weiß/braun), Bio (braun), Rest (schwarz)",
  // G2
  ernährung_verdauung: "Ernährungspyramide: Wasser → Gemüse/Obst → Getreide → Milch/Fleisch → Süßes",
  zahngesundheit: "Milchzähne → bleibende Zähne, 2× täglich putzen, Zahnarzt 2× jährlich",
  wasserkreislauf: "Verdunstung → Wolkenbildung → Niederschlag → Versickerung",
  aggregatzustände: "Fest (Eis) → Flüssig (Wasser) → Gasförmig (Dampf)",
  magnetismus: "Magnete ziehen Eisen an. Nord- und Südpol. Gleiche Pole stoßen sich ab.",
  schwimmen_sinken: "Leichte Materialien schwimmen (Holz, Kork), schwere sinken (Stein, Metall)",
  // G3
  tierklassen: "Säugetiere, Vögel, Fische, Reptilien, Amphibien, Insekten",
  photosynthese_einfach: "Pflanze + Licht + Wasser + CO₂ → Zucker + Sauerstoff",
  ernährungspyramide: "Basis: Getränke → Gemüse/Obst → Getreide → Milch/Fleisch → Fette → Süßes",
  kompass_himmelsrichtungen: "N=Norden, S=Süden, O=Osten, W=Westen. Kompassnadel zeigt nach Norden.",
  // G4
  organe: "Herz, Lunge, Leber, Niere, Magen, Darm, Gehirn",
  deutsche_bundesländer: "16 Bundesländer: Bayern, NRW, Baden-Württemberg, Hessen, Sachsen...",
  europa: "EU, Hauptstädte, Nachbarländer Deutschlands",
  stromkreis: "Batterie → Kabel → Verbraucher (Lampe) → zurück zur Batterie",
};
