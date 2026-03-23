// ─── PHYSICS GENERATORS K7: MAGNETISM ─────────────────────────────────────
// "Magnetismus" theme — Magnetic fields, Earth's field, electromagnets, induction
// Grade 7 (13-14 years old)
//
// Generates 32-35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Magnetic field: B measured in Tesla (T)
// Electromagnet: F = N × I × A / (2π r)
// Faraday's law: ε = -N × dΦ/dt (voltage = rate of flux change)

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) | 0;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumMCQ {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return {
    type: "mcq" as const,
    topic,
    subtopic,
    question,
    options,
    correct: options.indexOf(correct),
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing" as const,
    topic,
    subtopic,
    question,
    answer,
  };
}

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

// ─── MAGNETIC BASICS ──────────────────────────────────────────────────────

function generateBasicsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Magnetic field definition (6 questions)
  for (let i = 0; i < 6; i++) {
    const property = pick([
      q4("Magnetfeld ist Raum um Magnet mit Magnetkraft", "Magnetic field is space around magnet with force", "Mágneses tér a mágnes körüli tér mágneses erővel", "Câmp magnetic este spațiu în jurul magnetului cu forță", lang),
      q4("Feldlinien fließen von Nord zu Südpol", "Field lines flow from North to South pole", "Erővonalak az Északi-tól a Dél-pólus felé folynak", "Liniile câmpului curg de la polul Nord la Sud", lang),
      q4("Magnetfeld kann durch ferromagnetische Stoffe dringen", "Magnetic field can penetrate ferromagnetic materials", "Mágneses tér áthatol ferromágneses anyagokon", "Câmp magnetic poate penetra materiale feromagnetice", lang),
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "basics",
        q4(
          "Eigenschaft des Magnetfelds?",
          "Property of magnetic field?",
          "A mágneses tér tulajdonsága?",
          "Proprietate a câmpului magnetic?",
          lang
        ),
        property,
        [
          q4("Magnetfeld ist sichtbar", "Magnetic field is visible", "Mágneses tér látható", "Câmp magnetic este vizibil", lang),
          q4("Magnetfeld hat nur einen Pol", "Magnetic field has single pole", "Mágneses térnek csak egy pólusa van", "Câmp magnetic are un singur pol", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Magnetic poles (6 questions)
  const poles = [
    { de: "Nordpol", en: "North pole", hu: "Északi pólus", ro: "Pol Nord", attraction: "zieht Südpole an" },
    { de: "Südpol", en: "South pole", hu: "Déli pólus", ro: "Pol Sud", attraction: "zieht Nordpole an" },
  ];

  for (const pole of poles) {
    questions.push(
      createMCQ(
        "magnetism",
        "basics",
        q4(
          `${q4(pole.de, pole.en, pole.hu, pole.ro, lang)}: Was tut es?`,
          `${pole.en}: What does it do?`,
          `${q4(pole.de, pole.en, pole.hu, pole.ro, lang)}: Mit tesz?`,
          `${q4(pole.de, pole.en, pole.hu, pole.ro, lang)}: Ce face?`,
          lang
        ),
        q4(pole.attraction, pole.attraction, pole.attraction, pole.attraction, lang),
        [
          q4("Stößt alle Pole ab", "Repels all poles", "Taszítja az összes pólust", "Respinge toți polii", lang),
          q4("Hat keine Kraft", "Has no force", "Nincs ereje", "Nu are putere", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Magnetic field units (7 questions)
  for (let i = 0; i < 7; i++) {
    const magnitude = pick([
      { de: "Erdmagnetfeld", en: "Earth's magnetic field", hu: "Föld mágneses tere", ro: "Câmpul magnetic al Pământului", value: "~30-50 μT" },
      { de: "Stabmagnet", en: "Bar magnet", hu: "Rúdmágnes", ro: "Magnet de bară", value: "~1-10 mT" },
      { de: "Starker Labormag", en: "Strong lab magnet", hu: "Erős labormágnes", ro: "Magnet lab puternic", value: "~1-5 T" },
      { de: "MRI Scanner", en: "MRI scanner", hu: "MRI szkenner", ro: "Scanner RMN", value: "~1.5-3 T" },
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "basics",
        q4(
          `${q4(magnitude.de, magnitude.en, magnitude.hu, magnitude.ro, lang)}: Feldstärke?`,
          `${magnitude.en}: Field strength?`,
          `${q4(magnitude.de, magnitude.en, magnitude.hu, magnitude.ro, lang)}: Térerősség?`,
          `${q4(magnitude.de, magnitude.en, magnitude.hu, magnitude.ro, lang)}: Putere câmp?`,
          lang
        ),
        q4(magnitude.value, magnitude.value, magnitude.value, magnitude.value, lang),
        [
          "~100 T",
          "~0.1 nT",
        ],
        rng
      )
    );
  }

  // Template 4: Magnetic force on moving charge (5 questions)
  for (let i = 0; i < 5; i++) {
    const fact = pick([
      q4("Kraft auf bewegte Ladung in Magnetfeld: F = q×v×B", "Force on moving charge: F = q×v×B", "Erő mozgó töltésre: F = q×v×B", "Forță pe sarcină în mișcare: F = q×v×B", lang),
      q4("Richtung der Kraft: rechte-Hand-Regel", "Force direction: right-hand rule", "Erő iránya: jobb-kéz szabály", "Direcția forței: regula mâinii drepte", lang),
      q4("Kraft ist maximal wenn v ⊥ B", "Force maximum when v ⊥ B", "Erő maximális ha v ⊥ B", "Forță maximă când v ⊥ B", lang),
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "basics",
        q4(
          "Magnetkraft auf bewegte Ladung?",
          "Magnetic force on moving charge?",
          "Mágneses erő mozgó töltésre?",
          "Forță magnetică pe sarcină în mișcare?",
          lang
        ),
        fact,
        [
          q4("Kraft ist immer Null", "Force is always zero", "Erő mindig nulla", "Forță este întotdeauna zero", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Ferromagnetic vs. non-magnetic (4 questions)
  const materials = [
    { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier", ferroma: true },
    { de: "Nickel", en: "Nickel", hu: "Nikkel", ro: "Nichel", ferroma: true },
    { de: "Papier", en: "Paper", hu: "Papír", ro: "Hârtie", ferroma: false },
    { de: "Kunststoff", en: "Plastic", hu: "Műanyag", ro: "Plastic", ferroma: false },
  ];

  for (const mat of materials) {
    questions.push(
      createMCQ(
        "magnetism",
        "basics",
        q4(
          `${q4(mat.de, mat.en, mat.hu, mat.ro, lang)}: Ferromagnetisch?`,
          `${mat.en}: Ferromagnetic?`,
          `${q4(mat.de, mat.en, mat.hu, mat.ro, lang)}: Ferromágneses?`,
          `${q4(mat.de, mat.en, mat.hu, mat.ro, lang)}: Feromagnetic?`,
          lang
        ),
        mat.ferroma ? "ja" : "nein",
        mat.ferroma ? ["nein"] : ["ja"],
        rng
      )
    );
  }

  return questions;
}

function generateBasicsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "magnetism",
      "basics",
      q4(
        "Definition: Magnetfeld",
        "Definition: Magnetic field",
        "Definíció: Mágneses tér",
        "Definiție: Câmp magnetic",
        lang
      ),
      [
        q4(
          "Raum um einen Magnet in dem magnetische Kräfte wirken; Feldlinien zeigen Richtung von Nord zu Südpol",
          "Space around magnet where magnetic forces act; field lines show direction from North to South",
          "Tér egy mágnes körül ahol mágneses erők hatnak; erővonalak az Északi-tól a Dél-felé mutatnak",
          "Spațiu în jurul unui magnet în care acționează forțe magnetice; liniile arată direcția N→S",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "basics",
      q4(
        "Magnetische Pole und ihre Eigenschaften",
        "Magnetic poles and properties",
        "Mágneses pólusok és tulajdonságaik",
        "Poli magnetici și proprietățile lor",
        lang
      ),
      [
        q4(
          "Nordpol (N) und Südpol (S); gleiche Pole stoßen ab (N-N, S-S), ungleiche ziehen an (N-S)",
          "North (N) and South (S) poles; like poles repel (N-N, S-S), opposite attract (N-S)",
          "Északi (N) és Déli (S) pólus; azonos pólusok taszítják egymást (N-N, S-S), ellentétes vonzzák (N-S)",
          "Pol Nord (N) și Pol Sud (S); poli identici se resping (N-N, S-S), poli opuși se atrag (N-S)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "basics",
      q4(
        "Tesla Einheit und typische Feldstärken",
        "Tesla unit and typical field strengths",
        "Tesla egység és tipikus térerősségek",
        "Unitatea Tesla și puterea tipică a câmpurilor",
        lang
      ),
      [
        q4(
          "1 T = 10⁴ Gauss; Erdfeld ~30-50 μT, Labormagnet ~1-10 mT, MRI ~1.5-3 T",
          "1 T = 10⁴ Gauss; Earth ~30-50 μT, lab magnet ~1-10 mT, MRI ~1.5-3 T",
          "1 T = 10⁴ Gauss; Föld ~30-50 μT, labmágnes ~1-10 mT, MRI ~1.5-3 T",
          "1 T = 10⁴ Gauss; Pământ ~30-50 μT, magnet lab ~1-10 mT, RMN ~1.5-3 T",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "basics",
      q4(
        "Lorentzkraft auf bewegte Ladung: Formel und Richtung",
        "Lorentz force on moving charge: formula and direction",
        "Lorentz-erő mozgó töltésre: képlet és irány",
        "Forța Lorentz pe sarcină în mișcare: formulă și direcție",
        lang
      ),
      [
        q4(
          "F = q × v × B; Richtung: Rechte-Hand-Regel (Daumen=v, Finger=B, Handfläche=F)",
          "F = q × v × B; Direction: Right-hand rule (thumb=v, fingers=B, palm=F)",
          "F = q × v × B; Irány: Jobb-kéz szabály (hüvelyk=v, ujjak=B, tenyér=F)",
          "F = q × v × B; Direcție: Regula mâinii drepte (deget mare=v, degete=B, palmă=F)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "basics",
      q4(
        "Ferromagnetische Stoffe Beispiele",
        "Ferromagnetic materials examples",
        "Ferromágneses anyagok példái",
        "Exemple de materiale feromagnetice",
        lang
      ),
      [
        q4(
          "Eisen (Fe), Nickel (Ni), Kobalt (Co), Gadolinium (Gd); können permanent magnetisiert werden",
          "Iron (Fe), Nickel (Ni), Cobalt (Co), Gadolinium (Gd); can be permanently magnetized",
          "Vas (Fe), Nikkel (Ni), Kobalt (Co), Gadolínium (Gd); véglegesen mágnesesíthetők",
          "Fier (Fe), Nichel (Ni), Cobalt (Co), Gadolinium (Gd); pot fi permanent magnetizate",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── EARTH'S MAGNETIC FIELD ───────────────────────────────────────────────

function generateEarthMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Earth's field properties (6 questions)
  for (let i = 0; i < 6; i++) {
    const property = pick([
      { de: "Entsteht im flüssigen äußeren Kern", en: "Originates in liquid outer core", hu: "A folyékony külső magból keletkezik", ro: "Originează din miezul extern lichid" },
      { de: "Feldstärke ~30-50 μT an Oberfläche", en: "Field strength ~30-50 μT at surface", hu: "Térerősség ~30-50 μT a felszínen", ro: "Putere câmp ~30-50 μT la suprafață" },
      { de: "Schützt vor Sonnenwind", en: "Protects from solar wind", hu: "Véd a napszélből", ro: "Protejează de vântul solar" },
      { de: "Magnetpole verschieben sich ständig", en: "Magnetic poles shift constantly", hu: "Mágneses pólusok folyamatosan eltolódnak", ro: "Polii magnetici se schimbă constant" },
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "earth",
        q4(
          "Eigenschaft des Erdmagnetfelds?",
          "Property of Earth's magnetic field?",
          "A Föld mágneses terének tulajdonsága?",
          "Proprietate a câmpului magnetic terestru?",
          lang
        ),
        q4(property.de, property.en, property.hu, property.ro, lang),
        [
          q4("Entsteht in Erde-Kruste", "Originates in Earth's crust", "A Föld kérgéből keletkezik", "Originează din scoarță terestră", lang),
          q4("Feldstärke ~1 T überall", "Field strength ~1 T everywhere", "Térerősség ~1 T mindenütt", "Putere câmp ~1 T peste tot", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Compass and declination (7 questions)
  for (let i = 0; i < 7; i++) {
    const declination = pick([
      q4("Magnetische Deklination ist Winkel zwischen magnetischem und wahrem Norden", "Magnetic declination is angle between magnetic and true North", "Mágneses deklináció a mágneses és igaz Észak közötti szög", "Declinația magnetică este unghi între Nord magnetic și adevărat", lang),
      q4("Deklination variiert je nach Standort (0° bis ±30°)", "Declination varies by location (0° to ±30°)", "Deklináció helytől függ (0° és ±30° között)", "Declinația variază după locație (0° la ±30°)", lang),
      q4("Kompass zeigt auf magnetischen Nordpol, nicht auf wahren Pol", "Compass points to magnetic North Pole, not true North", "Iránytű a mágneses Északi-pólus felé mutat, nem igaz Északra", "Busola indică polul Nord magnetic, nu pe adevăratul Pol", lang),
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "earth",
        q4(
          "Magnetische Deklination?",
          "Magnetic declination?",
          "Mágneses deklináció?",
          "Declinație magnetică?",
          lang
        ),
        declination,
        [
          q4("Ändert sich stündlich", "Changes hourly", "Óránként változik", "Se schimbă orar", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Compass navigation (6 questions)
  for (let i = 0; i < 6; i++) {
    const scenario = pick([
      { de: "Kompass zeigt Nord, Karte zeigt auch Nord → Lesen Karte direkt", en: "Compass North = Map North → Read map directly", hu: "Iránytű Észak = Térkép Észak → Térképet közvetlenül olvassa", ro: "Busola Nord = Hartă Nord → Citește hartă direct" },
      { de: "Kompass zeigt Magnet-Nord, Karte wahren Nord → Deklination addieren", en: "Compass = Mag-North, Map = True North → Add declination", hu: "Iránytű = Mágneses-Észak, Térkép = Igaz Észak → Declinációt adjon", ro: "Busola = Nord Magnetic, Hartă = Nord Adevărat → Adăugați declinație" },
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "earth",
        q4(
          "Navigation mit Kompass und Karte?",
          "Navigation with compass and map?",
          "Navigáció iránytűvel és térképpel?",
          "Navigație cu busola și hartă?",
          lang
        ),
        q4(scenario.de, scenario.en, scenario.hu, scenario.ro, lang),
        [
          q4("Kompass-Richtung immer = Karten-Richtung", "Compass direction always = map direction", "Iránytű-irány mindig = térkép-irány", "Direcția busola = direcția hartă", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Geomagnetic phenomena (6 questions)
  for (let i = 0; i < 6; i++) {
    const phenomenon = pick([
      { de: "Aurora (Nordlicht)", en: "Aurora (Northern lights)", hu: "Sark (Sarki fény)", ro: "Aurora (Lumini polare)", cause: "Solarwind ioniziert Atmosphäre" },
      { de: "Magnetischer Sturm", en: "Magnetic storm", hu: "Mágneses vihar", ro: "Furtună magnetică", cause: "Solarwind verstärkt sich" },
      { de: "Strahlungsgürtel", en: "Radiation belts", hu: "Sugárzási öv", ro: "Centuri de radiație", cause: "Gefangene Partikel in Magnetfeld" },
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "earth",
        q4(
          `${q4(phenomenon.de, phenomenon.en, phenomenon.hu, phenomenon.ro, lang)}: Ursache?`,
          `${phenomenon.en}: Cause?`,
          `${q4(phenomenon.de, phenomenon.en, phenomenon.hu, phenomenon.ro, lang)}: Oka?`,
          `${q4(phenomenon.de, phenomenon.en, phenomenon.hu, phenomenon.ro, lang)}: Cauza?`,
          lang
        ),
        q4(phenomenon.cause, phenomenon.cause, phenomenon.cause, phenomenon.cause, lang),
        [
          q4("Mondwind", "Moon wind", "Holdszél", "Vânt lunar", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateEarthTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "magnetism",
      "earth",
      q4(
        "Ursprung des Erdmagnetfelds (vereinfacht)",
        "Origin of Earth's magnetic field (simplified)",
        "A Föld mágneses terének eredete (egyszerűsítve)",
        "Originea câmpului magnetic terestru (simplificat)",
        lang
      ),
      [
        q4(
          "Entstammt konvektiven Strömungen im flüssigen äußeren Kern (aus Eisen/Nickel); Bewegung erzeugter Strom → Magnetfeld",
          "Arises from convective currents in liquid outer core (iron/nickel); moving charges create current → magnetic field",
          "Konvektív áramlások a folyékony külső magban (vas/nikkel); mozgó töltések áramot hoznak létre → mágneses tér",
          "Provine din curente convective în miezul extern lichid (fier/nichel); sarcini în mișcare creează curent → câmp magnetic",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "earth",
      q4(
        "Magnet-Deklination und Navigation",
        "Magnetic declination and navigation",
        "Mágneses deklináció és navigáció",
        "Declinație magnetică și navigație",
        lang
      ),
      [
        q4(
          "Deklination = Winkel zwischen magnetischem Norden (Kompass) und wahren Norden (geografisch); für genaue Karten-Navigation berücksichtigen",
          "Declination = angle between magnetic north (compass) and true north (geographic); must account for accurate navigation",
          "Deklináció = a mágneses észak (iránytű) és igaz észak (földrajzi) közötti szög; pontos navigációhoz figyelembe kell venni",
          "Declinație = unghi între nord magnetic (busola) și nord adevărat (geografic); trebuie luat în considerare pentru navigație precisă",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "earth",
      q4(
        "Wie schützt das Erdmagnetfeld Leben?",
        "How does Earth's magnetic field protect life?",
        "Hogyan véd az Föld mágneses tere az életet?",
        "Cum protejează câmpul magnetic terestru viața?",
        lang
      ),
      [
        q4(
          "Lenkt geladene Partikel aus Sonnenwind ab → verhindert direkte Bestrahlung; Van-Allen-Gürtel fängt Partikel; Schicht der Ozonosphäre auch",
          "Deflects charged particles from solar wind → prevents direct radiation; Van Allen belts trap particles; ozone layer also shields",
          "Eltéríti a napszélből származó töltött részecskéket → megakadályozza a közvetlen sugárzást; Van Allen öv csapdázza a részecskéket",
          "Deviază particulele încărcate din vântul solar → previne radiație directă; ceintura Van Allen captează particule; ozonul protejează",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "earth",
      q4(
        "Aurora (Nordlicht): Ursache und Farben",
        "Aurora (Northern lights): cause and colors",
        "Aurora (Sarki fény): oka és színei",
        "Aurora (Lumini polare): cauza și culori",
        lang
      ),
      [
        q4(
          "Solarwind-Partikel treffen Atmosph. Moleküle → Ionisierung; Grün (O2), Rot (O), Blau (N2); hauptsächlich in Polargegenden",
          "Solar wind particles hit atmospheric molecules → ionization; Green (O2), Red (O), Blue (N2); mainly at poles",
          "Napszél-részecskék ütköznek az atmoszféra molekuláival → ionizáció; Zöld (O2), Vörös (O), Kék (N2); főleg a pólusok közelében",
          "Particule vânt solar lovesc molecule atmosferice → ionizare; Verde (O2), Roșu (O), Albastru (N2); mai mult la poli",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "earth",
      q4(
        "Magnetische Polwechsel (Inversionen)",
        "Magnetic pole reversals (inversions)",
        "Mágneses pólus-fordulatok (inverziók)",
        "Inversiuni ale polilor magnetici",
        lang
      ),
      [
        q4(
          "Im Laufe der Erdgeschichte wechseln Pole mehrfach; Normal-Epoche (~780.000 Jahre), Reversed; letzte Umkehrung vor ~780 ka",
          "Throughout Earth's history poles flip multiple times; Normal epoch (~780k years), then Reversed; last reversal ~780ka ago",
          "Az Föld történetében a pólusok többször fordulnak; Normál korszak (~780k év), majd Fordított; utolsó fordulás ~780k évvel ezelőtt",
          "De-a lungul istoriei Pământului polii se răstoarnă de mai multe ori; Epocă Normală (~780k ani), apoi Inversă; ultima inversare ~780ka",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── ELECTROMAGNETS ────────────────────────────────────────────────────────

function generateElectromagnetsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Electromagnet definition (6 questions)
  for (let i = 0; i < 6; i++) {
    const property = pick([
      q4("Elektromagnet entsteht durch Strom in Spule", "Electromagnet created by current in coil", "Elektromágnes a tekercsben áramló áram által jön létre", "Electromagnet creat de curent în bobină", lang),
      q4("Magnetfeld kann ein- und ausgeschaltet werden", "Magnetic field can be switched on/off", "Mágneses tér be- és kikapcsolható", "Câmp magnetic poate fi pornit/oprit", lang),
      q4("Feldstärke proportional zu Strom und Windungszahl", "Field strength proportional to current and coil turns", "Térerősség arányos az árammal és tekercs fordulataival", "Putere câmp proporțională cu curent și ture bobină", lang),
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "electromagnets",
        q4(
          "Eigenschaft des Elektromagnets?",
          "Property of electromagnet?",
          "Az elektromágnes tulajdonsága?",
          "Proprietate a electromagnetului?",
          lang
        ),
        property,
        [
          q4("Hat permanente Magnetkraft", "Has permanent magnetic force", "Végleges mágneses ereje van", "Are forță magnetică permanentă", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Electromagnet strength factors (7 questions)
  const factors = [
    { de: "Stromstärke", en: "Current", hu: "Áram erőssége", ro: "Intensitate curent", effect: "Mehr Strom → stärkeres Feld" },
    { de: "Windungszahl", en: "Number of coils", hu: "Tekercs fordulatok száma", ro: "Numărul de spire", effect: "Mehr Windungen → stärkeres Feld" },
    { de: "Spulenkern", en: "Coil core", hu: "Tekercs mag", ro: "Miez bobină", effect: "Eisenkern → viel stärkeres Feld" },
  ];

  for (const factor of factors) {
    questions.push(
      createMCQ(
        "magnetism",
        "electromagnets",
        q4(
          `${q4(factor.de, factor.en, factor.hu, factor.ro, lang)}: Effekt auf Feldstärke?`,
          `${factor.en}: Effect on field strength?`,
          `${q4(factor.de, factor.en, factor.hu, factor.ro, lang)}: Hatása a térerősségre?`,
          `${q4(factor.de, factor.en, factor.hu, factor.ro, lang)}: Efect asupra puterii câmpului?`,
          lang
        ),
        q4(factor.effect, factor.effect, factor.effect, factor.effect, lang),
        [
          q4("Keine Auswirkung", "No effect", "Nincs hatása", "Fără efect", lang),
          q4("Schwächt das Feld", "Weakens field", "Gyengíti a teret", "Slăbește câmpul", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Solenoid calculations (7 questions)
  for (let i = 0; i < 7; i++) {
    const N = pick([10, 50, 100, 500], rng);
    const I = pick([0.5, 1, 2, 5], rng);
    const product = N * I;

    questions.push(
      createMCQ(
        "magnetism",
        "electromagnets",
        q4(
          `Elektromagnet: ${N} Windungen × ${I}A → Feldstärke proportional zu?`,
          `Electromagnet: ${N} coils × ${I}A → field proportional to?`,
          `Elektromágnes: ${N} tekercs × ${I}A → tér arányos?`,
          `Electromagnet: ${N} spire × ${I}A → câmp proporțional la?`,
          lang
        ),
        N * I + " (N×I)",
        [
          (N + I).toString(),
          (N / I).toString(),
        ],
        rng
      )
    );
  }

  // Template 4: Practical electromagnets (6 questions)
  const applications = [
    { de: "Türklingel", en: "Doorbell", hu: "Csengő", ro: "Sonerie ușă", use: "Elektromagnet zieht Hammer → Klingel" },
    { de: "Relais", en: "Relay", hu: "Relé", ro: "Releu", use: "Elektromagnet schaltet Strom um" },
    { de: "Lokomotive", en: "Electric motor", hu: "Elektromos motor", ro: "Motor electric", use: "Elektromagnet erzeugt Kraft für Bewegung" },
    { de: "MRI-Gerät", en: "MRI machine", hu: "MRI gép", ro: "Aparat RMN", use: "Supramag-Elektromagnet erzeugt 1.5-3 T" },
  ];

  for (const app of applications) {
    questions.push(
      createMCQ(
        "magnetism",
        "electromagnets",
        q4(
          `${q4(app.de, app.en, app.hu, app.ro, lang)}: Elektromagnet-Rolle?`,
          `${app.en}: Electromagnet role?`,
          `${q4(app.de, app.en, app.hu, app.ro, lang)}: Elektromágnes szerepe?`,
          `${q4(app.de, app.en, app.hu, app.ro, lang)}: Rol electromagnet?`,
          lang
        ),
        q4(app.use, app.use, app.use, app.use, lang),
        [
          q4("Keine Nutzung", "No use", "Nincs használat", "Fără utilizare", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateElectromagnetsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "magnetism",
      "electromagnets",
      q4(
        "Definition: Elektromagnet",
        "Definition: Electromagnet",
        "Definíció: Elektromágnes",
        "Definiție: Electromagnet",
        lang
      ),
      [
        q4(
          "Magnet erzeugt durch Strom in Spule; Feldstärke abhängig von Stromstärke und Windungszahl",
          "Magnet created by electric current in coil; field strength depends on current and number of coils",
          "Mágnes amelyet tekercsben áram hoz létre; térerősség az áramtól és tekercs fordulataival függ",
          "Magnet creat de curent electric în bobină; puterea câmpului depinde de curent și numărul de spire",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "electromagnets",
      q4(
        "Was ist eine Solenoid?",
        "What is a solenoid?",
        "Mi az szolenoida?",
        "Ce este un solenoid?",
        lang
      ),
      [
        q4(
          "Spiralförmig gewickelte Spule; wenn Strom fließt erzeugt homogenes Magnetfeld innen; N-S Pole an Enden",
          "Helical coil of wire; when current flows creates uniform magnetic field inside; N-S poles at ends",
          "Spirálisan csavart tekercs; áram folyásakor egyenletes mágneses teret hoz létre belül; N-S pólusok a végeken",
          "Bobină în spirală; cu curent crea câmp magnetic uniform în interior; poli N-S la capete",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "electromagnets",
      q4(
        "Faktoren die Elektromagnet-Kraft beeinflussen",
        "Factors affecting electromagnet strength",
        "Elektromágnes erőt befolyásoló tényezők",
        "Factori care influențează forța electromagnetului",
        lang
      ),
      [
        q4(
          "Stromstärke I (mehr Strom = stärkeres Feld), Windungszahl N (mehr Windungen = stärkeres Feld), Kernmaterial (Eisen >> Luft)",
          "Current I (more current = stronger field), coil turns N (more turns = stronger), core (iron >> air)",
          "Áramstrèg I (több áram = erősebb tér), tekercs fordulatok N (több = erősebb), mag anyag (vas >> levegő)",
          "Intensitate curent I (mai mult = mai puternic), spire bobină N (mai mult = mai puternic), miez (fier >> aer)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "electromagnets",
      q4(
        "Praktische Anwendung: Relais",
        "Practical application: Relay",
        "Gyakorlati alkalmazás: Relé",
        "Aplicație practică: Releu",
        lang
      ),
      [
        q4(
          "Elektromagnet wird durch schwachen Strom aktiviert → zieht Schalter → schaltet starken Strom um; Verwendung: Startermotoren, Türöffner",
          "Electromagnet activated by weak current → pulls switch → activates strong current; used in car starters, door openers",
          "Elektromágnes gyenge árammal aktiválódik → elmozdítja a kapcsolót → erős áramot kapcsol; autóstarter, kapunyitó",
          "Electromagnet activat de curent slab → trage comutator → activează curent puternic; utilizat în startere auto, deschizători ușă",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "electromagnets",
      q4(
        "MRI Scanner: Elektromagnet-Einsatz",
        "MRI scanner: electromagnet use",
        "MRI szkenner: elektromágnes alkalmazás",
        "Scanner RMN: utilizare electromagnet",
        lang
      ),
      [
        q4(
          "Supraleitende Elektromagnete erzeugen 1.5-3 Tesla Feldstärke; rotiern Atomkerne im Körper; Radiowellen messen Resonanz",
          "Superconducting electromagnets create 1.5-3 T field; align nuclear spins in body; radio waves measure resonance",
          "Szupravezető elektromágnesek 1.5-3 T térerőt hoznak létre; atommagok spinjeinek orientálása; rádióhullámok mérik a rezonanciát",
          "Electromagneti supraconductori creează câmp 1.5-3 T; aliniază spinii nucleari în corp; unde radio măsoară rezonanța",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── ELECTROMAGNETIC INDUCTION ─────────────────────────────────────────────

function generateInductionMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Faraday's law concepts (6 questions)
  for (let i = 0; i < 6; i++) {
    const concept = pick([
      q4("Induktion: Magnetfeld ändert sich → erzeugt Spannung", "Induction: changing magnetic field → creates voltage", "Indukció: mágneses tér változik → feszültséget hoz létre", "Inducție: câmp magnetic se schimbă → creează tensiune", lang),
      q4("Magnetfluss Änderung erzeugt EMF", "Changing magnetic flux creates EMF", "Mágneses fluxus változása EMF-et hoz létre", "Schimbare flux magnetic crează FEM", lang),
      q4("Lenz-Regel: induzierte Spannung opponiiert der Änderung", "Lenz's rule: induced voltage opposes change", "Lenz-szabály: indukált feszültség ellentmond a változásnak", "Regula Lenz: tensiune indusă se opune schimbării", lang),
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "induction",
        q4(
          "Elektromagnetische Induktion?",
          "Electromagnetic induction?",
          "Elektromágneses indukció?",
          "Inducție electromagnetică?",
          lang
        ),
        concept,
        [
          q4("Magnet-Bewegung erzeugt immer Strom", "Magnet movement always creates current", "Mágnes mozgása mindig áramot hoz létre", "Mișcarea magnetului creează întotdeauna curent", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Faraday's law formula (6 questions)
  for (let i = 0; i < 6; i++) {
    const dPhi = pick([0.1, 0.5, 1, 2], rng);
    const dt = pick([0.1, 0.2, 1, 2], rng);
    const N = pick([50, 100, 500], rng);
    const emf = (N * dPhi / dt).toFixed(1);

    questions.push(
      createMCQ(
        "magnetism",
        "induction",
        q4(
          `ε = -N × dΦ/dt: ${N} W, ${dPhi} Wb in ${dt}s → ε = ?`,
          `ε = -N × dΦ/dt: ${N} coils, ${dPhi} Wb in ${dt}s → ε = ?`,
          `ε = -N × dΦ/dt: ${N} W, ${dPhi} Wb ${dt}s-ben → ε = ?`,
          `ε = -N × dΦ/dt: ${N} spire, ${dPhi} Wb în ${dt}s → ε = ?`,
          lang
        ),
        emf + " V",
        [
          (parseFloat(emf) / 2).toFixed(1) + " V",
          (parseFloat(emf) * 2).toFixed(1) + " V",
        ],
        rng
      )
    );
  }

  // Template 3: Generator principle (7 questions)
  for (let i = 0; i < 7; i++) {
    const genFact = pick([
      q4("Generator: Spule rotiert im Magnetfeld → induzierte Spannung", "Generator: coil rotates in magnetic field → induced voltage", "Generátor: tekercs forog a mágneses térben → indukált feszültség", "Generator: bobină se rotește în câmp magnetic → tensiune indusă", lang),
      q4("Magnetfluss durch Spule ändert periodisch", "Magnetic flux through coil changes periodically", "Mágneses fluxus a tekercsben periodikusan változik", "Flux magnetic prin bobină se schimbă periodic", lang),
      q4("Wechselspannung: Spannung oszilliert (sin oder cos)", "AC voltage: voltage oscillates (sine wave)", "Váltóáram: feszültség oszcillál (szinuszos hullám)", "Tensiune AC: oscilează (undă sinusoidală)", lang),
    ], rng);

    questions.push(
      createMCQ(
        "magnetism",
        "induction",
        q4(
          "Generator Funktionsweise?",
          "Generator principle?",
          "Generátor működése?",
          "Principiu generator?",
          lang
        ),
        genFact,
        [
          q4("Magnet rotiert, Spule bleibt still", "Magnet rotates, coil fixed", "Mágnes forog, tekercs fixen", "Magnet se rotește, bobină fixa", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Transformer basics (6 questions)
  for (let i = 0; i < 6; i++) {
    const N1 = pick([100, 200, 500], rng);
    const N2 = pick([50, 100, 1000], rng);
    const V1 = pick([100, 220, 230], rng);
    const V2 = (V1 * N2 / N1).toFixed(1);

    questions.push(
      createMCQ(
        "magnetism",
        "induction",
        q4(
          `Trafo: ${N1} zu ${N2} Windungen, ${V1}V → V₂?`,
          `Transformer: ${N1} to ${N2} coils, ${V1}V → V₂?`,
          `Transzformátor: ${N1}-ről ${N2} tekercse, ${V1}V → V₂?`,
          `Transformator: ${N1} la ${N2} spire, ${V1}V → V₂?`,
          lang
        ),
        V2 + " V",
        [
          ((parseFloat(V2) / 2).toFixed(1)) + " V",
          ((parseFloat(V2) * 2).toFixed(1)) + " V",
        ],
        rng
      )
    );
  }

  // Template 5: Lenz's law examples (4 questions)
  const lenzExamples = [
    q4("Magnet fällt in Kupferrohr → induzierter Strom bremst Magnet", "Magnet falls through copper tube → induced current slows magnet", "Mágnes esik a rézcső-ben → indukált áram lassítja a mágnest", "Magnet cade prin tub cupru → curent indus încetinește magnetul", lang),
    q4("Trafo-Primär hochfahren → induzierter Strom in Sekundär opponiiert", "Transformer primary powers up → secondary current opposes", "Transzformátor primer felpörögve → szekunder áram opponiál", "Transformator primar pornit → curent secundar se opune", lang),
  ];

  for (const ex of lenzExamples) {
    questions.push(
      createMCQ(
        "magnetism",
        "induction",
        q4(
          "Lenz-Regel Beispiel?",
          "Lenz's rule example?",
          "Lenz-szabály példa?",
          "Exemplu Regula Lenz?",
          lang
        ),
        ex,
        [
          q4("Induzierter Strom unterstützt Änderung", "Induced current supports change", "Indukált áram támogatja a változást", "Curent indus susține schimbarea", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateInductionTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "magnetism",
      "induction",
      q4(
        "Definition: Elektromagnetische Induktion",
        "Definition: Electromagnetic induction",
        "Definíció: Elektromágneses indukció",
        "Definiție: Inducție electromagnetică",
        lang
      ),
      [
        q4(
          "Erzeugung von Spannung durch Änderung eines Magnetfeldes; Magnetfluss-Änderung durch Bewegung oder Feldänderung",
          "Creation of voltage by changing magnetic field; flux change through motion or field change",
          "Feszültség-termelés mágneses tér megváltoztatásával; mágneses fluxus-változás mozgáson vagy térmegváltozáson keresztül",
          "Crearea tensiunii prin schimbarea câmpului magnetic; schimbare flux prin mișcare sau schimbare câmp",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "induction",
      q4(
        "Faraday-Gesetz (Faraday's Law): Formel und Bedeutung",
        "Faraday's Law: formula and meaning",
        "Faraday-törvény: képlet és jelentése",
        "Legea Faraday: formulă și semnificație",
        lang
      ),
      [
        q4(
          "ε = -N × dΦ/dt; ε = induzierte EMF (Volt), N = Windungen, dΦ = Flussänderung, dt = Zeitänderung; '-' = Lenz-Regel",
          "ε = -N × dΦ/dt; ε = induced EMF (volts), N = coils, dΦ = flux change, dt = time change; '-' = Lenz's rule",
          "ε = -N × dΦ/dt; ε = indukált EMF (volt), N = tekercs, dΦ = fluxus-változás, dt = idő-változás; '-' = Lenz-szabály",
          "ε = -N × dΦ/dt; ε = EMF indusă (volți), N = spire, dΦ = schimbare flux, dt = schimbare timp; '-' = regula Lenz",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "induction",
      q4(
        "Lenz-Regel Definition",
        "Lenz's Rule definition",
        "Lenz-szabály meghatározása",
        "Definiția Regulii Lenz",
        lang
      ),
      [
        q4(
          "Induzierter Strom erzeugt Magnetfeld das der Änderung entgegenwirkt; Natur opponiiert Änderung",
          "Induced current creates magnetic field opposing the change; nature opposes change",
          "Indukált áram mágneses teret hoz létre amely a változásnak ellenáll; a természet opponiál a változásnak",
          "Curent indus creează câmp magnetic opunând se schimbării; natura se opune schimbării",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "induction",
      q4(
        "Generator: wie wandelt Bewegung in Elektrizität um?",
        "Generator: how does it convert motion to electricity?",
        "Generátor: hogyan alakít mozgást elektromossággá?",
        "Generator: cum convertește mișcarea în electricitate?",
        lang
      ),
      [
        q4(
          "Spule rotiert im Magnetfeld → Magnetfluss durch Spule ändert periodisch → Induktion → AC-Spannung (ε = N × B × A × ω × sin(ωt))",
          "Coil rotates in magnetic field → flux through coil changes periodically → induction → AC voltage (ε = N×B×A×ω×sin(ωt))",
          "Tekercs forog mágneses térben → mágneses fluxus periodikusan változik → indukció → AC-feszültség",
          "Bobină se rotește în câmp magnetic → flux se schimbă periodic → inducție → tensiune AC",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "magnetism",
      "induction",
      q4(
        "Transformer: Primär und Sekundär Wicklung",
        "Transformer: primary and secondary coils",
        "Transzformátor: primer és szekunder tekercs",
        "Transformator: bobina primară și secundară",
        lang
      ),
      [
        q4(
          "Primär: Eingangsspule (wechselnde Spannungs-input); Sekundär: Ausgangsspule; Magneteinkopplung zwischen Wicklungen; V₂/V₁ = N₂/N₁",
          "Primary: input coil (AC voltage input); Secondary: output coil; magnetic coupling; V₂/V₁ = N₂/N₁",
          "Primer: bemeneti tekercs (AC feszültség bemenet); Szekunder: kimeneti tekercs; mágneses csatolás; V₂/V₁ = N₂/N₁",
          "Primar: bobina de intrare (tensiune AC); Secundar: bobina de ieșire; cuplare magnetică; V₂/V₁ = N₂/N₁",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── EXPORTS ──────────────────────────────────────────────────────────────

export const K7_MAGNETISM_GENERATORS = {
  basics: {
    combined: (lang = "en", seed = 0) => [
      ...generateBasicsMCQ(lang, seed),
      ...generateBasicsTyping(lang, seed),
    ],
    _mcq: generateBasicsMCQ,
    _typing: generateBasicsTyping,
  },
  earth: {
    combined: (lang = "en", seed = 0) => [
      ...generateEarthMCQ(lang, seed),
      ...generateEarthTyping(lang, seed),
    ],
    _mcq: generateEarthMCQ,
    _typing: generateEarthTyping,
  },
  electromagnets: {
    combined: (lang = "en", seed = 0) => [
      ...generateElectromagnetsMCQ(lang, seed),
      ...generateElectromagnetsTyping(lang, seed),
    ],
    _mcq: generateElectromagnetsMCQ,
    _typing: generateElectromagnetsTyping,
  },
  induction: {
    combined: (lang = "en", seed = 0) => [
      ...generateInductionMCQ(lang, seed),
      ...generateInductionTyping(lang, seed),
    ],
    _mcq: generateInductionMCQ,
    _typing: generateInductionTyping,
  },
};
