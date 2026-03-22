// ─── PHYSIK GENERATORS (Klasse 5) — Akustik (Sound) ─────────────────────────
// 4 subtopics × 2 (MCQ + Typing) = 8 generátor
// Minden MCQ generátor: 35 kérdés
// Minden Typing generátor: 10 kérdés

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK5GeneratorMap } from "./physikCurriculum5";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

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

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer
  };
}

function q4(de: string, en: string, hu: string, ro: string): string {
  const lang = typeof window !== 'undefined'
    ? localStorage.getItem('language') || 'en'
    : 'en';

  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ─── DATA POOLS ────────────────────────────────────────────────────────────

const SOUND_MEDIUMS = [
  { name: "Luft", type: "gas", speed_ms: 343 },
  { name: "Wasser", type: "liquid", speed_ms: 1480 },
  { name: "Stahl", type: "solid", speed_ms: 5960 },
  { name: "Vakuum", type: "vacuum", speed_ms: 0 },
  { name: "Sand", type: "solid", speed_ms: 4000 },
  { name: "Holz", type: "solid", speed_ms: 4000 },
  { name: "Beton", type: "solid", speed_ms: 3700 },
];

const VIBRATION_SOURCES = [
  { name: "Gitarrensaite", type: "string", freq_hz: 440 },
  { name: "Trommelmembran", type: "membrane", freq_hz: 150 },
  { name: "Stimmgabel", type: "fork", freq_hz: 440 },
  { name: "Stimmband", type: "vocal", freq_hz: 200 },
  { name: "Lautsprechermembran", type: "speaker", freq_hz: 1000 },
  { name: "Klavierseite", type: "string", freq_hz: 400 },
  { name: "Glocke", type: "bell", freq_hz: 800 },
];

const INSTRUMENTS_BY_PITCH = [
  { name: "Piccolo", pitch: "high", freq_range: "4000-7000" },
  { name: "Geige", pitch: "high", freq_range: "200-3000" },
  { name: "Trompete", pitch: "high", freq_range: "165-2500" },
  { name: "Cello", pitch: "low", freq_range: "65-1000" },
  { name: "Tuba", pitch: "low", freq_range: "50-600" },
  { name: "Kontrabass", pitch: "very low", freq_range: "41-250" },
  { name: "Klavier", pitch: "wide", freq_range: "27-4186" },
  { name: "Flöte", pitch: "medium", freq_range: "250-2000" },
];

const DECIBEL_EXAMPLES = [
  { source: "Flüstern", db: 30 },
  { source: "Normale Konversation", db: 60 },
  { source: "Rasenmäher", db: 90 },
  { source: "Rockkonzert", db: 110 },
  { source: "Düsenflugzeug", db: 140 },
  { source: "Raketenstartplatz", db: 180 },
  { source: "Blatt rascheln", db: 10 },
  { source: "Verkehrslärm", db: 80 },
];

const ECHO_FACTS = [
  { distance_m: 17, reflection: "minimum" },
  { distance_m: 34, reflection: "clear" },
  { distance_m: 50, reflection: "very clear" },
  { distance_m: 0, reflection: "no echo" },
];

// ─── 21. SOUND WAVES (MCQ GENERATOR) ────────────────────────────────────────

function generateSoundWavesMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "sound";
  const subtopic = "sound_waves";
  const questions: CurriculumMCQ[] = [];

  // Template 1: What causes sound? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was verursacht Schall?`,
          `What causes sound?`,
          `Mi okozza a hangot?`,
          `Ce cauzează sunetul?`
        ),
        "Vibration",
        ["Licht", "Hitze", "Magnet"],
        rng
      )
    );
  }

  // Template 2: Sound cannot travel through ___ (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Schall kann nicht durch ___ reisen.`,
          `Sound cannot travel through ___ .`,
          `A hang nem tud utazni a ___ által.`,
          `Sunetul nu poate călători prin ___ .`
        ),
        "Vakuum",
        ["Wasser", "Stahl", "Luft"],
        rng
      )
    );
  }

  // Template 3: Which medium allows sound to travel fastest? (7 versions)
  for (let i = 0; i < 7; i++) {
    const fastest = pick(
      SOUND_MEDIUMS.filter(m => m.speed_ms > 3000),
      rng
    );
    const slower = pick(
      SOUND_MEDIUMS.filter(m => m.speed_ms < 3000 && m.speed_ms > 0),
      rng
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `In welchem Medium reist Schall am schnellsten?`,
          `In which medium does sound travel fastest?`,
          `Melyik közegben utazik a hang a leggyorsabban?`,
          `În ce mediu se propagă sunetul cel mai rapid?`
        ),
        fastest.name,
        [slower.name, "Luft", "Wasser"],
        rng
      )
    );
  }

  // Template 4: What does a vibrating object create? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was erzeugt ein vibrierendes Objekt?`,
          `What does a vibrating object create?`,
          `Mit hoz létre egy rezgő tárgy?`,
          `Ce creează un obiect care vibrează?`
        ),
        "Schallwellen",
        ["Lichtwellen", "Wärmewellen", "Magnetfelder"],
        rng
      )
    );
  }

  // Template 5: How does sound reach your ear? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Wie erreicht Schall dein Ohr?`,
          `How does sound reach your ear?`,
          `Hogyan jut el a hang a fülödbe?`,
          `Cum ajunge sunetul la urechea ta?`
        ),
        "Durch Schallwellen in der Luft",
        ["Durch Lichtstrahlen", "Durch unsichtbare Geister", "Direkt aus dem Gehirn"],
        rng
      )
    );
  }

  return questions;
}

// ─── 21. SOUND WAVES (TYPING GENERATOR) ────────────────────────────────────

function generateSoundWavesTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "sound";
  const subtopic = "sound_waves";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ ist notwendig, um Schall zu erzeugen.`,
        `___ is necessary to produce sound.`,
        `A ___ szükséges a hang létrehozásához.`,
        `___ este necesar pentru a produce sunet.`
      ),
      ["Vibration", "Schwingung", "rezgés", "oscilație"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Schall kann nicht durch ein ___ reisen.`,
        `Sound cannot travel through a ___ .`,
        `A hang nem tud utazni a ___ által.`,
        `Sunetul nu poate călători printr-un ___ .`
      ),
      ["Vakuum", "vacuum", "vákuum", "vid"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ ist eine Quelle von Schallvibrationen.`,
        `A ___ is a source of sound vibrations.`,
        `Egy ___ a hangrezgések forrása.`,
        `O ___ este o sursă de vibrații sonore.`
      ),
      ["Stimmgabel", "tuning fork", "hangvilla", "diapason"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Schallwellen sind ___ Wellen.`,
        `Sound waves are ___ waves.`,
        `A hanghullámok ___ hullámok.`,
        `Undele sonore sunt unde ___ .`
      ),
      ["mechanisch", "mechanical", "mechanikai", "mecanice"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine ___ ist das, was vibriert, um Schall zu erzeugen.`,
        `A ___ is what vibrates to produce sound.`,
        `Egy ___ az, ami rezeg és hangot termel.`,
        `O ___ este ceea ce vibrează pentru a produce sunet.`
      ),
      ["Saite", "string", "húr", "coardă"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Schall reist am schnellsten durch einen ___ .`,
        `Sound travels fastest through a ___ .`,
        `A hang a leggyorsabban egy ___ által utazik.`,
        `Sunetul se propagă cel mai rapid printr-un ___ .`
      ),
      ["Festkörper", "solid", "szilárd", "solid"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine ___ ist ein Muster von Verdichtung und Verdünnung in einem Medium.`,
        `A ___ is a pattern of compression and rarefaction in a medium.`,
        `Egy ___ a sűrűsödés és ritkulás mintázata egy közegben.`,
        `O ___ este un model de compresie și rarefacție într-un mediu.`
      ),
      ["Schallwelle", "sound wave", "hanghullám", "undă sonoră"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Schall erfordert ein ___, um sich auszubreiten.`,
        `Sound requires a ___ to propagate.`,
        `A hang egy ___ -et igényel a terjedéshez.`,
        `Sunetul necesită un ___ pentru a se propaga.`
      ),
      ["Medium", "medium", "közeg", "mediu"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Wenn eine Glocke läutet, ___ sie die Luft.`,
        `When a bell rings, it ___ the air.`,
        `Amikor egy harang szól, ___ a levegőt.`,
        `Când o clopot sună, ___ aerul.`
      ),
      ["vibriert", "vibrates", "rezeg", "vibrează"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Das Trommelfell ___ wenn Schallwellen es treffen.`,
        `The eardrum ___ when sound waves hit it.`,
        `A dobhártya ___ amikor hanghullámok érik.`,
        `Timpanul ___ când undele sonore îl lovesc.`
      ),
      ["vibriert", "vibrates", "rezeg", "vibrează"]
    )
  );

  return questions;
}

// ─── 22. PITCH & VOLUME (MCQ GENERATOR) ────────────────────────────────────

function generatePitchVolumeMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "sound";
  const subtopic = "pitch_volume";
  const questions: CurriculumMCQ[] = [];

  // Template 1: What determines pitch? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was bestimmt die Tonhöhe?`,
          `What determines pitch?`,
          `Mi határozza meg a hangmagasságot?`,
          `Ce determină frecvența sunetului?`
        ),
        "Frequenz",
        ["Amplitude", "Luftdruck", "Temperatur"],
        rng
      )
    );
  }

  // Template 2: High frequency means ___ pitch (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Eine hohe Frequenz bedeutet eine ___ Tonhöhe.`,
          `A high frequency means a ___ pitch.`,
          `A magas frekvencia ___ hangmagasságot jelent.`,
          `O frecvență înaltă înseamnă o înălțime ___ .`
        ),
        "hohe",
        ["tiefe", "niedrig", "mittlere"],
        rng
      )
    );
  }

  // Template 3: Which instrument has higher pitch? (7 versions)
  for (let i = 0; i < 7; i++) {
    const highInst = pick(
      INSTRUMENTS_BY_PITCH.filter(i => i.pitch === "high"),
      rng
    );
    const lowInst = pick(
      INSTRUMENTS_BY_PITCH.filter(i => i.pitch === "low" || i.pitch === "very low"),
      rng
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Welches Instrument hat eine höhere Tonhöhe?`,
          `Which instrument has a higher pitch?`,
          `Melyik hangszer rendelkezik magasabb hangmagassággal?`,
          `Care instrument are o înălțime mai mare?`
        ),
        highInst.name,
        [lowInst.name, "Schlagzeug", "Gong"],
        rng
      )
    );
  }

  // Template 4: Loudness is measured in ___ (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Lautstärke wird in ___ gemessen.`,
          `Loudness is measured in ___ .`,
          `A hangerő ___ -ben mérődik.`,
          `Volumul se măsoară în ___ .`
        ),
        "Dezibel",
        ["Hertz", "Meter", "Kilogramm"],
        rng
      )
    );
  }

  // Template 5: Which is quieter? (7 versions)
  for (let i = 0; i < 7; i++) {
    const quiet = pick(DECIBEL_EXAMPLES.filter(d => d.db < 60), rng);
    const loud = pick(DECIBEL_EXAMPLES.filter(d => d.db > 80), rng);
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Welches ist leiser?`,
          `Which is quieter?`,
          `Melyik a csendesebb?`,
          `Care este mai liniștit?`
        ),
        quiet.source,
        [loud.source, "Rockkonzert", "Flugzeug"],
        rng
      )
    );
  }

  return questions;
}

// ─── 22. PITCH & VOLUME (TYPING GENERATOR) ────────────────────────────────

function generatePitchVolumeTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "sound";
  const subtopic = "pitch_volume";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die Tonhöhe hängt von der ___ der Vibration ab.`,
        `Pitch depends on the ___ of vibration.`,
        `A hangmagasság a rezgés ___ -ától függ.`,
        `Frecvența depinde de ___ vibrației.`
      ),
      ["Frequenz", "frequency", "frekvencia", "frecvență"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Lautstärke wird in ___ gemessen.`,
        `Loudness is measured in ___ .`,
        `A hangerő ___ -ben mérődik.`,
        `Volumul se măsoară în ___ .`
      ),
      ["Dezibel", "decibels", "decibel", "decibeli"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine Piccolo hat eine ___ Tonhöhe als eine Tuba.`,
        `A piccolo has a ___ pitch than a tuba.`,
        `A piccolo ___ hangmagasságú, mint a tuba.`,
        `Un piccolo are o înălțime ___ decât un tuba.`
      ),
      ["höhere", "higher", "magasabb", "mai înaltă"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine größere Amplitude bedeutet eine ___ Lautstärke.`,
        `A larger amplitude means a ___ loudness.`,
        `Egy nagyobb amplitúdó ___ hangerőt jelent.`,
        `O amplitudine mai mare înseamnă o zgomot ___ .`
      ),
      ["lautere", "louder", "hangosabb", "mai puternic"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Flüstern hat etwa ___ Dezibel.`,
        `A whisper has about ___ decibels.`,
        `Egy suttogás körülbelül ___ decibel.`,
        `Un șoapte are aproximativ ___ decibeli.`
      ),
      ["30", "trenta", "harminc", "treizeci"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Eine ___ ist die Anzahl der Vibrationen pro Sekunde.`,
        `A ___ is the number of vibrations per second.`,
        `Egy ___ a rezgések száma másodpercenként.`,
        `O ___ este numărul de vibrații pe secundă.`
      ),
      ["Frequenz", "frequency", "frekvencia", "frecvență"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die ___ einer Schallwelle bestimmt die Tonhöhe.`,
        `The ___ of a sound wave determines the pitch.`,
        `A hanghullám ___ -a határozza meg a hangmagasságot.`,
        `___ unei unde sonore determină frecvența.`
      ),
      ["Frequenz", "frequency", "frekvencia", "frecvență"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Konzertsaal hat etwa ___ Dezibel.`,
        `A concert is about ___ decibels.`,
        `Egy koncert körülbelül ___ decibel.`,
        `Un concert are aproximativ ___ decibeli.`
      ),
      ["110", "száztíz", "o sută zece"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die ___ bestimmt, wie laut oder leise ein Laut ist.`,
        `The ___ determines how loud or soft a sound is.`,
        `Az ___ határozza meg, hogy milyen hangos vagy halk egy hang.`,
        `___ determină cât de tare sau ușor este un sunet.`
      ),
      ["Amplitude", "amplitude", "amplitúdó", "amplitudine"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Düsenflugzeug erzeugt etwa ___ Dezibel.`,
        `A jet engine produces about ___ decibels.`,
        `Egy sugármotor körülbelül ___ decibelt produkál.`,
        `Un motor de reacție produce aproximativ ___ decibeli.`
      ),
      ["140", "száznegyven", "o sută patruzeci"]
    )
  );

  return questions;
}

// ─── 23. ECHO (MCQ GENERATOR) ──────────────────────────────────────────────

function generateEchoMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "sound";
  const subtopic = "echo";
  const questions: CurriculumMCQ[] = [];

  // Template 1: What is an echo? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was ist ein Echo?`,
          `What is an echo?`,
          `Mi az a visszhang?`,
          `Ce este un ecou?`
        ),
        "Ein wiederholter Schall durch Reflexion",
        ["Ein sehr lauter Schall", "Ein neuer Schall", "Ein Schallverlust"],
        rng
      )
    );
  }

  // Template 2: Minimum distance for echo (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Welche Mindestentfernung ist notwendig, um ein Echo zu hören?`,
          `What minimum distance is needed to hear an echo?`,
          `Milyen minimális távolságra van szükség a visszhang meghallásához?`,
          `Ce distanță minimă este necesară pentru a auzi un ecou?`
        ),
        "Etwa 17 Meter",
        ["Etwa 5 Meter", "Etwa 50 Meter", "Etwa 1 Meter"],
        rng
      )
    );
  }

  // Template 3: Which animal uses echolocation? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Welches Tier nutzt Echolokation?`,
          `Which animal uses echolocation?`,
          `Melyik állat használja az echololokációt?`,
          `Care animal folosește ecolokația?`
        ),
        "Fledermaus",
        ["Vogel", "Fisch", "Reptil"],
        rng
      )
    );
  }

  // Template 4: How does sonar work? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Wie funktioniert Sonar?`,
          `How does sonar work?`,
          `Hogyan működik a szonár?`,
          `Cum funcționează sonarul?`
        ),
        "Es sendet Schallwellen aus und wartet auf Echos",
        ["Es verwendet Lichtstrahlen", "Es verwendet Magnetfelder", "Es verwendet Wärmewellen"],
        rng
      )
    );
  }

  // Template 5: What surface is needed for echo? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Welche Art von Oberfläche ist notwendig, um ein Echo zu erzeugen?`,
          `What type of surface is needed to produce an echo?`,
          `Milyen felületre van szükség a visszhang létrehozásához?`,
          `Ce tip de suprafață este necesară pentru a produce un ecou?`
        ),
        "Eine harte, reflektierende Oberfläche",
        ["Eine weiche Oberfläche", "Eine feuchte Oberfläche", "Eine bewegliche Oberfläche"],
        rng
      )
    );
  }

  return questions;
}

// ─── 23. ECHO (TYPING GENERATOR) ───────────────────────────────────────────

function generateEchoTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "sound";
  const subtopic = "echo";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Echo ist eine ___ eines Schalls.`,
        `An echo is a ___ of sound.`,
        `A visszhang a hang egy ___ .`,
        `Un ecou este o ___ a sunetului.`
      ),
      ["Wiederholung", "repetition", "ismétlés", "repetare"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Fledermäuse nutzen ___, um sich zu orientieren.`,
        `Bats use ___ to navigate.`,
        `A denevérek ___ -t használnak a navigációhoz.`,
        `Liliecii folosesc ___ pentru a naviga.`
      ),
      ["Echolokation", "echolocation", "echololokáció", "ecolație"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ ist eine Reflexion von Schallwellen.`,
        `An ___ is a reflection of sound waves.`,
        `Egy ___ a hanghullámok visszaverődése.`,
        `Un ___ este o reflexie a undelor sonore.`
      ),
      ["Echo", "echo", "visszhang", "ecou"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ ist eine Technik, die Schallwellen zur Navigation nutzt.`,
        `___ is a technique that uses sound waves for navigation.`,
        `A ___ egy technika, amely hanghullámokat használ a navigációhoz.`,
        `___ este o tehnică care folosește unde sonore pentru navigație.`
      ),
      ["Sonar", "sonar", "szonár", "sonar"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Für ein deutliches Echo brauchst du eine ___ Oberfläche.`,
        `For a clear echo, you need a ___ surface.`,
        `A tiszta visszhanghoz egy ___ felületre van szükséged.`,
        `Pentru un ecou clar, ai nevoie de o suprafață ___ .`
      ),
      ["harte", "hard", "kemény", "dură"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Echo tritt auf, wenn Schallwellen von einer ___ reflektiert werden.`,
        `An echo occurs when sound waves are reflected by a ___ .`,
        `Visszhang lép fel, amikor a hanghullámok egy ___ által visszaverődnek.`,
        `Un ecou apare atunci când undele sonore sunt reflectate de o ___ .`
      ),
      ["Oberfläche", "surface", "felület", "suprafață"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Delfine nutzen ___, um Beute zu lokalisieren.`,
        `Dolphins use ___ to locate prey.`,
        `A delfinek ___ -t használnak a zsákmány megtalálásához.`,
        `Delfinii folosesc ___ pentru a localiza prada.`
      ),
      ["Echolokation", "echolocation", "echololokáció", "ecolație"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ sendet Schallpulse aus und empfängt deren Echos.`,
        `A ___ sends sound pulses and receives their echoes.`,
        `Egy ___ hangpulzusokat küld és fogadja azok visszhangját.`,
        `Un ___ trimite impulsuri sonore și primește ecourile acestora.`
      ),
      ["Sonar", "sonar", "szonár", "sonar"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein ___ ist das Prinzip, auf dem Sonar basiert.`,
        `An ___ is the principle on which sonar is based.`,
        `Egy ___ az az elv, amelyre a szonár alapul.`,
        `O ___ este principiul pe care se bazează sonarul.`
      ),
      ["Echolokation", "echolocation", "echololokáció", "ecolație"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Echo braucht mindestens eine Entfernung von etwa ___ Metern.`,
        `An echo needs a minimum distance of about ___ meters.`,
        `Egy visszhangnak legalább ___ méter távolságra van szüksége.`,
        `Un ecou necesită o distanță minimă de aproximativ ___ metri.`
      ),
      ["17", "diciassette", "tizenöt", "șaptesprezece"]
    )
  );

  return questions;
}

// ─── 24. SPEED OF SOUND (MCQ GENERATOR) ────────────────────────────────────

function generateSpeedOfSoundMCQ(seed?: number): CurriculumMCQ[] {
  const rng = mulberry32(seed || Math.random() * 1000000);
  const topic = "sound";
  const subtopic = "speed_of_sound";
  const questions: CurriculumMCQ[] = [];

  // Template 1: Speed of sound in air (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was ist die Schallgeschwindigkeit in Luft bei 20°C?`,
          `What is the speed of sound in air at 20°C?`,
          `Milyen a hangsebesség levegőben 20°C-on?`,
          `Care este viteza sunetului în aer la 20°C?`
        ),
        "Etwa 343 m/s",
        ["Etwa 150 m/s", "Etwa 500 m/s", "Etwa 1000 m/s"],
        rng
      )
    );
  }

  // Template 2: Sound travels faster in ___ than air (7 versions)
  for (let i = 0; i < 7; i++) {
    const fastMedium = pick(
      SOUND_MEDIUMS.filter(m => m.speed_ms > 500),
      rng
    );
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Schall reist schneller in ___ als in Luft.`,
          `Sound travels faster in ___ than in air.`,
          `A hang gyorsabban utazik ___ -ban, mint levegőben.`,
          `Sunetul se propagă mai rapid în ___ decât în aer.`
        ),
        fastMedium.name,
        ["Schaum", "Nebel", "Rauch"],
        rng
      )
    );
  }

  // Template 3: What is Mach 1? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was ist Mach 1?`,
          `What is Mach 1?`,
          `Mit jelent Mach 1?`,
          `Ce este Mach 1?`
        ),
        "Die Schallgeschwindigkeit",
        ["Doppelte Schallgeschwindigkeit", "Halbe Schallgeschwindigkeit", "Lichtgeschwindigkeit"],
        rng
      )
    );
  }

  // Template 4: Why see lightning before thunder? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Warum sehen wir Blitze vor Donner?`,
          `Why do we see lightning before thunder?`,
          `Miért látjuk a villámot a mennydörgés előtt?`,
          `De ce vedem fulgerul înainte de tunet?`
        ),
        "Licht reist schneller als Schall",
        ["Blitze sind stärker", "Donner braucht Zeit zu bilden", "Blitze sind näher"],
        rng
      )
    );
  }

  // Template 5: What creates a sonic boom? (7 versions)
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        topic,
        subtopic,
        q4(
          `Was erzeugt einen Überschallknall?`,
          `What creates a sonic boom?`,
          `Mit hoz létre a szuperszonikus robbanást?`,
          `Ce creează o bubuitoare sonoră?`
        ),
        "Ein Objekt, das die Schallgeschwindigkeit bricht",
        ["Ein explosives Gerät", "Ein lautes Lautsprecher", "Ein schneller Wind"],
        rng
      )
    );
  }

  return questions;
}

// ─── 24. SPEED OF SOUND (TYPING GENERATOR) ────────────────────────────────

function generateSpeedOfSoundTyping(seed?: number): CurriculumTyping[] {
  const questions: CurriculumTyping[] = [];
  const topic = "sound";
  const subtopic = "speed_of_sound";

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die Schallgeschwindigkeit in Luft beträgt ungefähr ___ m/s.`,
        `The speed of sound in air is approximately ___ m/s.`,
        `A hangsebesség levegőben körülbelül ___ m/s.`,
        `Viteza sunetului în aer este aproximativ ___ m/s.`
      ),
      ["343", "háromszáznegyvenhárom", "trei sute patruzeci și trei"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `In ___ reist Schall schneller als in Luft.`,
        `In ___ , sound travels faster than in air.`,
        `A ___ -ban a hang gyorsabban utazik, mint levegőben.`,
        `În ___ , sunetul se propagă mai rapid decât în aer.`
      ),
      ["Wasser", "water", "víz", "apă"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ ist die Geschwindigkeit des Schalls in einem Medium.`,
        `___ is the speed of sound in a medium.`,
        `A ___ a hang sebessége egy közegben.`,
        `___ este viteza sunetului într-un mediu.`
      ),
      ["Schallgeschwindigkeit", "speed of sound", "hangsebesség", "viteza sunetului"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Düsenjäger, der Mach 2 fliegt, geht ___ mal schneller als Schall.`,
        `A fighter jet flying at Mach 2 goes ___ times faster than sound.`,
        `Egy vadászbombázó, amely Mach 2-vel repül, ___ szer gyorsabban megy, mint a hang.`,
        `Un avion de vânătoare care zboară la Mach 2 merge ___ ori mai repede decât sunetul.`
      ),
      ["zwei", "two", "kétszer", "de două ori"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Überschallknall tritt auf, wenn etwas die ___ bricht.`,
        `A sonic boom occurs when something breaks the ___ .`,
        `Szuperszonikus robbanás lép fel, amikor valami megtöri a ___ -t.`,
        `O bubuitoare sonoră apare atunci când ceva rupe ___ .`
      ),
      ["Schallmauer", "sound barrier", "hangfal", "bariera sonoră"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `In einem ___ reist Schall am schnellsten.`,
        `In a ___ , sound travels fastest.`,
        `Egy ___ -ban a hang a leggyorsabban utazik.`,
        `Într-un ___ , sunetul se propagă cel mai rapid.`
      ),
      ["Festkörper", "solid", "szilárd", "solid"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `___ bestimmt die Schallgeschwindigkeit in einem Medium.`,
        `___ determines the speed of sound in a medium.`,
        `A ___ határozza meg a hangsebesség egy közegben.`,
        `___ determină viteza sunetului într-un mediu.`
      ),
      ["Temperatur", "temperature", "hőmérséklet", "temperatură"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Der Blitz wird ___ beobachtet als Donner.`,
        `Lightning is ___ observed than thunder.`,
        `A villám ___ figyelhető meg, mint a mennydörgés.`,
        `Fulgerul este ___ observat decât tunetul.`
      ),
      ["früher", "earlier", "előbb", "mai devreme"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Die Schallgeschwindigkeit in Wasser beträgt etwa ___ m/s.`,
        `The speed of sound in water is about ___ m/s.`,
        `A hangsebesség vízben körülbelül ___ m/s.`,
        `Viteza sunetului în apă este aproximativ ___ m/s.`
      ),
      ["1480", "ezernégyszáznyolcvan", "o mie patru sute optzeci"]
    )
  );

  questions.push(
    createTyping(
      topic,
      subtopic,
      q4(
        `Ein Überschallflugzeug fliegt schneller als ___ .`,
        `A supersonic aircraft flies faster than ___ .`,
        `Egy szuperszonikus repülőgép gyorsabban repül, mint a ___ .`,
        `Un avion supersonic zboară mai repede decât ___ .`
      ),
      ["Schall", "sound", "hang", "sunet"]
    )
  );

  return questions;
}

// ─── EXPORT GENERATORS ─────────────────────────────────────────────────────

const SOUND_GENERATORS = {
  sound_waves: generateSoundWavesMCQ,
  sound_waves_typing: generateSoundWavesTyping,
  pitch_volume: generatePitchVolumeMCQ,
  pitch_volume_typing: generatePitchVolumeTyping,
  echo: generateEchoMCQ,
  echo_typing: generateEchoTyping,
  speed_of_sound: generateSpeedOfSoundMCQ,
  speed_of_sound_typing: generateSpeedOfSoundTyping,
};

// Register generators
setK5GeneratorMap({
  sound: SOUND_GENERATORS,
});

export { SOUND_GENERATORS };
