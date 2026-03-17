// ─── DEUTSCH CURRICULUM — BARREL FILE ────────────────────────────────────────
// Grade data is split into per-grade files under lib/deutsch/ for faster builds.
// This file re-exports all types and assembles the DEUTSCH_CURRICULUM.

// ── Re-export all types ───────────────────────────────────────────────────────
export type {
  DeutschMCQ,
  DeutschTyping,
  DeutschBildWort,
  DeutschAnlautBild,
  DeutschQuestion,
  DeutschSubtopic,
  DeutschTheme,
} from "./deutsch/types";

// ── Import grade data ─────────────────────────────────────────────────────────
import { K1 } from "./deutsch/k1";
import { K2 } from "./deutsch/k2";
import { K3 } from "./deutsch/k3";
import { K4 } from "./deutsch/k4";
import { K5, K5_EXTRA } from "./deutsch/k5";
import { K6 } from "./deutsch/k6";
import { K7 } from "./deutsch/k7";
import { K8, K8_KONJUNKTIV } from "./deutsch/k8";
import type { DeutschTheme, DeutschQuestion } from "./deutsch/types";

// ─── HAUPTEXPORT ──────────────────────────────────────────────────────────────

export const DEUTSCH_CURRICULUM: Record<number, DeutschTheme[]> = {
  1: K1, 2: K2, 3: K3, 4: K4,
  5: [...K5, ...K5_EXTRA], 6: K6, 7: K7,
  8: [...K8, ...K8_KONJUNKTIV],
};

/** Liefert alle Fragen der gewählten Subtopics (zufällig, max. count). */
export function getDeutschQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10
): DeutschQuestion[] {
  const themes = DEUTSCH_CURRICULUM[grade] ?? [];
  const pool: DeutschQuestion[] = [];

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

  return pool;
}

// ─── BENOTUNG (deutsches System 1–6) ─────────────────────────────────────────

export interface DeutschMark {
  note: number;
  label: string;
  color: string;
  emoji: string;
}

export type DeutschCountry = "DE" | "AT" | "CH";

export function calculateDeutschMark(pct: number, country: DeutschCountry = "DE"): DeutschMark {
  if (country === "AT") {
    // Austria: 1-5 scale (1=best)
    if (pct >= 87) return { note: 1, label: "Sehr gut",       color: "#FFD700", emoji: "🌟" };
    if (pct >= 73) return { note: 2, label: "Gut",            color: "#00FF88", emoji: "😊" };
    if (pct >= 57) return { note: 3, label: "Befriedigend",   color: "#00D4FF", emoji: "🙂" };
    if (pct >= 40) return { note: 4, label: "Genügend",       color: "#FF6B00", emoji: "😅" };
    return               { note: 5, label: "Nicht genügend", color: "#FF4444", emoji: "😟" };
  }
  if (country === "CH") {
    // Switzerland: 6-1 scale (6=best)
    if (pct >= 92) return { note: 6, label: "Sehr gut",   color: "#FFD700", emoji: "🌟" };
    if (pct >= 81) return { note: 5, label: "Gut",        color: "#00FF88", emoji: "😊" };
    if (pct >= 67) return { note: 4, label: "Genügend",   color: "#00D4FF", emoji: "🙂" };
    if (pct >= 50) return { note: 3, label: "Schwach",    color: "#FF6B00", emoji: "😅" };
    if (pct >= 30) return { note: 2, label: "Sehr schwach", color: "#FF4444", emoji: "😟" };
    return               { note: 1, label: "Unbrauchbar", color: "#FF2D78", emoji: "😢" };
  }
  // Germany: 1-6 scale (1=best)
  if (pct >= 92) return { note: 1, label: "Sehr gut",      color: "#FFD700", emoji: "🌟" };
  if (pct >= 81) return { note: 2, label: "Gut",           color: "#00FF88", emoji: "😊" };
  if (pct >= 67) return { note: 3, label: "Befriedigend",  color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: 4, label: "Ausreichend",   color: "#FF6B00", emoji: "😅" };
  if (pct >= 30) return { note: 5, label: "Mangelhaft",    color: "#FF4444", emoji: "😟" };
  return               { note: 6, label: "Ungenügend",    color: "#FF2D78", emoji: "😢" };
}

// ─── SUBTOPIC HINTS ──────────────────────────────────────────────────────────
// Shown in the feedback card when the user gives a wrong answer.

export const SUBTOPIC_HINTS: Record<string, string> = {
  // ── Artikel ──────────────────────────────────────────────────────────────
  "artikel_k1":              "der (maskulin) · die (feminin) · das (neutrum)",
  "artikel_k2":              "der (maskulin) · die (feminin) · das (neutrum)",
  "artikel_bestimmt_k2":     "Bestimmter Artikel: der / die / das",
  "artikel_unbestimmt_k2":   "Unbestimmter Artikel: ein / eine / ein",

  // ── Nomen & Plural ───────────────────────────────────────────────────────
  "nomen_k2":                "Nomen schreibt man groß! z.B. der Hund, die Katze",
  "plural_k2":               "Pluralformen: -e, -er, -en, -s oder ohne Endung",
  "plural":                  "Pluralformen: -e, -er, -en, -s oder ohne Endung",

  // ── Personalpronomen & Pronomen ──────────────────────────────────────────
  "personalpronomen_k2":     "ich · du · er/sie/es · wir · ihr · sie/Sie",
  "pronomen":                "Pronomen ersetzen Nomen: er, sie, es, wir, ihr, sie",
  "pronomen_k4":             "Pronomen ersetzen Nomen: er, sie, es, wir, ihr, sie",
  "relativpronomen":         "Relativpronomen: der/die/das · dem/der/dem · den/die/das",

  // ── Verben (Grundformen) ─────────────────────────────────────────────────
  "verben_k2":               "Verbformen: ich spiele · du spielst · er/sie/es spielt",
  "verben_k3":               "Verbstamm + Endung: -e, -st, -t, -en, -t, -en",

  // ── Zeitformen ───────────────────────────────────────────────────────────
  "perfekt":                 "Perfekt: haben/sein + Partizip II (gespielt, gegangen)",
  "praeteritum":             "Präteritum (Vergangenheit): war, hatte, ging, kam, lief",
  "praeteritum_k3":          "sein → war, haben → hatte, kommen → kam, gehen → ging",
  "futur_k4":                "Futur I: werden + Infinitiv (ich werde spielen)",
  "plusquamperfekt_k5":      "Plusquamperfekt: hatte/war + Partizip II (hatte gespielt)",
  "zeit_k2":                 "Zeitformen: Präsens (jetzt), Präteritum (früher), Futur (später)",

  // ── Kasus ────────────────────────────────────────────────────────────────
  "nominativ":               "Nominativ = Wer/Was? (Subjekt) → der/die/das",
  "akkusativ":               "Akkusativ = Wen/Was? (direktes Objekt) → den/die/das",
  "akkusativ_obj":           "Akkusativ = Wen/Was? (direktes Objekt) → den/die/das",
  "dativ":                   "Dativ = Wem? (indirektes Objekt) → dem/der/dem",
  "genitiv":                 "Genitiv = Wessen? → des/der/des · des Vaters, der Mutter",

  // ── Adjektive & Steigerung ───────────────────────────────────────────────
  "adjektive_k2":            "Adjektive beschreiben Nomen: groß, klein, schnell, langsam",
  "adjektive_gegenteil":     "Gegenteil (Antonym): groß ↔ klein, schnell ↔ langsam",
  "adjektivendungen_k4":     "Adjektivendung nach Artikel: der große Hund · ein großer Hund",
  "adjektivdeklination_k5":  "Schwache Deklination nach 'der': der alte Mann, des alten Mannes",
  "steigerung":              "Steigerung: groß → größer → am größten",
  "steigerung_k3":           "Steigerung: schnell → schneller → am schnellsten",
  "adverbien_k5":            "Adverbien modifizieren Verben: schnell, langsam, oft, selten",

  // ── Rechtschreibung ──────────────────────────────────────────────────────
  "gross_klein":             "Nomen & Satzanfang → Großschreibung. Alles andere → klein",
  "grossschreibung_k2":      "Nomen schreibt man immer groß! der Hund, die Schule, das Buch",
  "doppelkonsonanten":       "Kurzvokal vor Doppelkonsonant: Ball, Wasser, Mutter, offen",
  "doppelkonsonanten_k2":    "Kurzer Vokal → Doppelkonsonant: Kanne, Butter, Bett, offen",
  "ck_k":                    "Nach kurzem Vokal: ck (Brücke, Stück). Nach langem: k (Bake)",
  "tz_z":                    "Nach kurzem Vokal: tz (Katze, Hitze). Nach langem: z (Holz)",
  "ss_sz":                   "Nach kurzem Vokal: ss (wissen). Nach langem/Diphthong: ß (Straße, heiß)",
  "ie_ih":                   "Langes i: ie (Liebe, Spiel) oder ih (ihr, ihm, ihn)",
  "doppelvokal":             "Langer Vokal durch Doppelvokal: aa (Saal), ee (See), oo (Boot)",
  "dehnungs_h":              "Dehnungs-h zeigt langen Vokal: fahren, Mehl, Stuhl, wohnen",
  "aeu_eu":                  "äu wenn Verwandtschaft zu 'au': Bäume (Baum), Häuser (Haus)",
  "umlaute_k2":              "Umlaute: a → ä, o → ö, u → ü (Maus → Mäuse, Buch → Bücher)",
  "sp_st_anlaut":            "Am Wortanfang: sp = [schp], st = [scht] (Sprache, Straße)",
  "silben":                  "Silben trennen: je eine Silbe pro Vokal (Fen-ster, Blu-me)",
  "fehlende_buchstaben":     "Achte auf: Doppelkonsonanten, ie/ih, ß/ss, ck/tz",
  "fehlende_woerter_k1":     "Schau auf den Satzanfang (Großschreibung) und das Satzzeichen am Ende",

  // ── Satzzeichen ──────────────────────────────────────────────────────────
  "satzzeichen_k1":          "Am Satzende: Punkt (.) · Fragezeichen (?) · Ausrufezeichen (!)",
  "satzzeichen_k2":          "Punkt = Aussage · ? = Frage · ! = Ausruf oder Aufforderung",
  "komma_aufzaehlung":       "Komma trennt Aufzählungen: Ich kaufe Äpfel, Birnen und Bananen.",
  "komma_nebensatz":         "Komma vor Nebensatz: Er geht, weil er müde ist.",
  "direkte_rede": "Direkte Rede: Er sagte: \"Ich komme morgen.\" (Anführungszeichen!)",
  "direkte_rede_k3": "Direkte Rede: \"Text\", sagte er. / Er sagte: \"Text.\"",
  "doppelpunkt_k6":          "Doppelpunkt vor: direkter Rede, Aufzählung, Erklärung",
  "gedankenstrich_k6":       "Gedankenstrich (–): Einschub, Widerspruch oder Pause im Satz",
  "semikolon_k8":            "Semikolon (;): trennt gleichwertige Hauptsätze (stärker als Komma)",
  "aufforderung_ausruf_k4":  "Ausrufsatz/Aufforderung endet mit ! (Komm her! Sei still!)",
  "aussage_frage_k4":        "Aussagesatz endet mit . · Fragesatz endet mit ?",

  // ── Satzglieder ──────────────────────────────────────────────────────────
  "subjekt":                 "Subjekt = Wer/Was handelt? → Nominativ (der/die/das)",
  "subjekt_praedikat_k4":    "Subjekt (Wer?) + Prädikat (Was tut er?) = Kernsatz",
  "praedikat":               "Prädikat = das Verb im Satz (ist/macht/geht/haben...)",
  "objekte_k4":              "Akkusativobjekt (Wen/Was?) · Dativobjekt (Wem?)",
  "adverbiale_k4":           "Adverbiale Bestimmung: Wo? Wann? Wie? Warum?",
  "wortstellung":            "Im Hauptsatz steht das Verb an 2. Stelle (Subjekt–Verb–Rest)",
  "wortstellung_k2":         "Im Hauptsatz steht das Verb an 2. Stelle (Subjekt–Verb–Rest)",
  "satzarten":               "Aussagesatz (.) · Fragesatz (?) · Aufforderungssatz (!) · Ausrufsatz (!)",
  "satzarten_k2":            "Aussagesatz → Punkt · Fragesatz → ? · Ausrufsatz → !",

  // ── Nebensätze & Konjunktionen ───────────────────────────────────────────
  "nebensatztypen":          "Im Nebensatz steht das Verb am Ende! (weil, dass, wenn, obwohl...)",
  "kausalsatz":              "Kausalsatz (Grund): weil / da + Verb am Ende",
  "kausalsatz_k7":           "weil/da → Verb ans Ende: Er kommt nicht, weil er krank ist.",
  "weil_dass_k4":            "weil (Grund) und dass (Inhalt) leiten Nebensätze ein → Verb am Ende",
  "relativsatz":             "Relativsatz mit der/die/das: Das Buch, das ich lese, ist spannend.",
  "relativsatz_k7":          "Relativpronomen richtet sich nach Genus des Bezugsworts",
  "konditionalsatz_k7":      "Konditionalsatz (Bedingung): wenn/falls + Verb am Ende",
  "temporalsatz_k7":         "Temporalsatz (Zeit): als (einmalig Verg.) / wenn (wiederholt)",
  "finalsatz_k7":            "Finalsatz (Zweck/Ziel): damit + Verb am Ende · um … zu + Infinitiv",
  "konzessivsatz_k7":        "Konzessivsatz (Einschränkung): obwohl/obgleich + Verb am Ende",
  "konjunktionen_k5":        "Koordinierend (kein Komma nötig): und, oder, aber, denn, doch",

  // ── Infinitiv & Partizip ─────────────────────────────────────────────────
  "infinitiv_zu":            "zu + Infinitiv: Es ist schön, zu spielen. (nicht bei Modalverben!)",
  "um_zu_k7":                "um … zu: Er lernt, um gute Noten zu bekommen.",
  "statt_ohne_zu_k7":        "statt/ohne + zu + Infinitiv: Er geht, ohne zu fragen.",
  "partizip_1_k5":           "Partizip I = Infinitiv + d: spielend, laufend, lachend",
  "partizip_2_k5":           "Partizip II: ge- + Stamm + -t/-en (gespielt, gegangen)",
  "partizipial":             "Partizipialkonstruktion ersetzt einen Nebensatz",

  // ── Passiv ───────────────────────────────────────────────────────────────
  "passiv":                  "Passiv: werden + Partizip II (Das Buch wird gelesen.)",
  "werden_passiv":           "Vorgangspassiv: werden + Partizip II (Das Haus wird gebaut.)",
  "sein_passiv":             "Zustandspassiv: sein + Partizip II (Das Haus ist gebaut.)",
  "passiv_praeteritum_k5":   "Passiv Präteritum: wurde + Partizip II (wurde gelesen)",
  "passiv_modal":            "Passiv mit Modal: Das muss gemacht werden.",
  "vorgangspassiv_k5":       "Vorgangspassiv: werden + Partizip II (wird gebaut, wurde gebaut)",

  // ── Konjunktiv ───────────────────────────────────────────────────────────
  "konjunktiv_1":            "Konjunktiv I (indirekte Rede): er sage, er habe, er sei",
  "konjunktiv_2":            "Konjunktiv II (Möglichkeit/Höflichkeit): wäre, hätte, würde",

  // ── Modalverben ──────────────────────────────────────────────────────────
  "modalverben_k6":          "Modalverben: können, müssen, dürfen, sollen, wollen, mögen",

  // ── Trennbare Verben ─────────────────────────────────────────────────────
  "trennbare_verben_k4":     "Trennbares Verb: Präfix ans Ende! (aufmachen → er macht auf)",
  "trennbable_verben_k4":    "Trennbares Verb: Präfix ans Ende! (aufmachen → er macht auf)",

  // ── Präpositionen ────────────────────────────────────────────────────────
  "praepositionen_k5":       "Akkusativ: durch, für, gegen, ohne, um · Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber",

  // ── Wortschatz & Wortbildung ─────────────────────────────────────────────
  "synonyme":                "Synonyme = bedeutungsgleiche Wörter (schön = hübsch, wunderschön)",
  "antonyme":                "Antonyme = Gegenwörter (groß ↔ klein, hell ↔ dunkel)",
  "wortfamilien_k2":         "Wortfamilie: gleicher Wortstamm (fahren, Fahrt, Fahrer, gefahren)",
  "wortfamilien_k3":         "Wortfamilie: gleicher Wortstamm (schreib- → Schrift, Schreiber, schreibt)",
  "komposita_k6":            "Komposita = zusammengesetzte Nomen (Haus + Tür = Haustür)",
  "derivation_k6":           "Ableitung: Wörter durch Vor-/Nachsilben bilden (un-, -heit, -ung)",
  "fremdwoerter":            "Fremdwörter behalten oft ihre Original-Schreibweise",

  // ── Stilmittel ───────────────────────────────────────────────────────────
  "metapher_vergleich":      "Vergleich: wie (Er ist stark wie ein Bär.) · Metapher: Er ist ein Bär.",
  "personifikation":         "Personifikation: Dinge/Tiere bekommen menschliche Eigenschaften",
  "alliteration":            "Alliteration: gleicher Anfangslaut (Milch macht müde Männer munter)",
  "alliteration_personifikation": "Alliteration = gleicher Anlaut · Personifikation = vermenschlicht",
  "hyperbel":                "Hyperbel = starke Übertreibung (Ich habe tausendmal gewartet.)",

  // ── das / dass ───────────────────────────────────────────────────────────
  "das_dass":                "das = Artikel/Pronomen (das Buch) · dass = Konjunktion (Ich glaube, dass...)",

  // ── Textsorten ───────────────────────────────────────────────────────────
  "bericht_erzaehlung":      "Bericht: sachlich, keine Gefühle · Erzählung: lebendig, mit Gefühlen",
  "eroerterung":             "Erörterung: These + Argumente (pro/kontra) + Schluss",
  "inhaltsangabe_k8":        "Inhaltsangabe: Präsens, sachlich, keine eigene Meinung",
  "charakteristik_k8":       "Charakteristik: Eigenschaften + Belege aus dem Text",
  "nominalstil_umformung_k8":"Nominalstil: Verben werden zu Nomen (einführen → die Einführung)",

  // ── Literatur & Sprache ──────────────────────────────────────────────────
  "epochen":                 "Epochen: Mittelalter → Barock → Aufklärung → Romantik → Realismus → Moderne",
  "erzaehlperspektiven":     "Ich-Erzähler · Er-/Sie-Erzähler (auktorial/personal/neutral)",
  "fachsprache_k8":          "Fachsprache: spezifische Begriffe eines Fachgebiets",
  "register_k8":             "Sprachregister: formell (Amtssprache) ↔ informell (Umgangssprache)",

  // ── Sonstiges ────────────────────────────────────────────────────────────
  "aussagen_umf":            "Aussagen umformulieren: Inhalt erhalten, Wörter wechseln",

  // ── Wortschatz & Alltag (K3) ─────────────────────────────────────────────
  "tagesablauf_k3":          "Tagesablauf: morgens → mittags → abends · Aktivitäten im Alltag",
  "berufe_k3":               "Berufe: Arzt, Lehrer, Koch, Bäcker, Ingenieur · Was macht man bei dem Beruf?",
  "essen_k3":                "Essen & Trinken: Obst, Gemüse, Mahlzeiten · gesund vs. ungesund",
  "zuhause_k3":              "Mein Zuhause: Zimmer (Küche, Bad, Wohnzimmer) · Möbel · Haushalt",
  "natur_k3":                "Natur & Tiere: Jahreszeiten · Wetter · Tiere · Pflanzen · Landschaft",
  "schule_k3":               "Schule & Freizeit: Schulfächer · Utensilien · Hobbys · Freizeitaktivitäten",
  "weg_k3":                  "Wegbeschreibung: links/rechts/geradeaus · Kreuzung · Ampel · Verkehrsmittel",
  "synonyme_k3":             "Synonyme & Redewendungen: gleiche Bedeutung · Redensarten · Sprichwörter",
};

export function getSubtopicHint(subtopic?: string): string | null {
  if (!subtopic) return null;
  return SUBTOPIC_HINTS[subtopic] ?? null;
}
