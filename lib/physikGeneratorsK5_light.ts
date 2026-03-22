import {
  createMCQ,
  createTyping,
  mulberry32,
  pick,
  shuffle,
  type CurriculumQuestion,
} from "./physikCurriculum5";

// Helper for 4-language strings
function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ───────────────────────────────────────────────────────────────────
// 16. LIGHT SOURCES & SPEED OF LIGHT
// ───────────────────────────────────────────────────────────────────

function light_sources(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x12345678);

  const naturalSources = [
    { de: "Sonne", en: "Sun", hu: "Nap", ro: "Soare" },
    { de: "Sterne", en: "Stars", hu: "Csillagok", ro: "Stele" },
    { de: "Feuer", en: "Fire", hu: "Tűz", ro: "Foc" },
    { de: "Glühwürmchen", en: "Firefly", hu: "Szentjánosbogár", ro: "Vierme de lumină" },
    { de: "Blitz", en: "Lightning", hu: "Villám", ro: "Fulger" },
  ];

  const artificialSources = [
    { de: "Glühbirne", en: "Light bulb", hu: "Izzólámpa", ro: "Bec" },
    { de: "LED-Leuchte", en: "LED light", hu: "LED lámpa", ro: "LED" },
    { de: "Laser", en: "Laser", hu: "Lézer", ro: "Laser" },
    { de: "Neonröhre", en: "Neon tube", hu: "Neon cső", ro: "Tub neon" },
    { de: "Kerze", en: "Candle", hu: "Gyertya", ro: "Lumânare" },
  ];

  const nonSources = [
    { de: "Mond", en: "Moon", hu: "Hold", ro: "Lună" },
    { de: "Spiegel", en: "Mirror", hu: "Tükör", ro: "Oglindă" },
    { de: "Papier", en: "Paper", hu: "Papír", ro: "Hârtie" },
    { de: "Tisch", en: "Table", hu: "Asztal", ro: "Masă" },
  ];

  const questions: CurriculumQuestion[] = [];

  // MCQ 1-7: Natural vs artificial sources
  for (let i = 0; i < 7; i++) {
    const natural = pick(naturalSources, rng);
    const wrong1 = pick(artificialSources, rng);
    const wrong2 = pick(artificialSources, rng);
    const wrong3 = pick(nonSources, rng);

    questions.push(
      createMCQ(
        q4(
          `Welche ist eine natürliche Lichtquelle?`,
          `Which is a natural light source?`,
          `Melyik egy természetes fényforrás?`,
          `Care este o sursă naturală de lumină?`,
          lang
        ),
        [
          natural[lang as keyof typeof natural],
          wrong1[lang as keyof typeof wrong1],
          wrong2[lang as keyof typeof wrong2],
          wrong3[lang as keyof typeof wrong3],
        ],
        0
      )
    );
  }

  // MCQ 8-14: Artificial sources
  for (let i = 0; i < 7; i++) {
    const artificial = pick(artificialSources, rng);
    const wrong1 = pick(naturalSources, rng);
    const wrong2 = pick(nonSources, rng);
    const wrong3 = pick(nonSources, rng);

    questions.push(
      createMCQ(
        q4(
          `Welche ist eine künstliche Lichtquelle?`,
          `Which is an artificial light source?`,
          `Melyik egy mesterséges fényforrás?`,
          `Care este o sursă artificială de lumină?`,
          lang
        ),
        [
          artificial[lang as keyof typeof artificial],
          wrong1[lang as keyof typeof wrong1],
          wrong2[lang as keyof typeof wrong2],
          wrong3[lang as keyof typeof wrong3],
        ],
        0
      )
    );
  }

  // MCQ 15-21: Speed of light
  const speedOptions = [
    { de: "300.000 km/s", en: "300,000 km/s", hu: "300 000 km/s", ro: "300.000 km/s" },
    { de: "150.000 km/s", en: "150,000 km/s", hu: "150 000 km/s", ro: "150.000 km/s" },
    { de: "1.000 km/s", en: "1,000 km/s", hu: "1 000 km/s", ro: "1.000 km/s" },
    { de: "700.000 km/s", en: "700,000 km/s", hu: "700 000 km/s", ro: "700.000 km/s" },
  ];

  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Wie schnell ist die Lichtgeschwindigkeit ungefähr?`,
          `What is the approximate speed of light?`,
          `Mekkora körülbelül a fény sebessége?`,
          `Care este viteza aproximativă a luminii?`,
          lang
        ),
        shuffle(
          [
            speedOptions[0][lang as keyof typeof speedOptions[0]],
            speedOptions[1][lang as keyof typeof speedOptions[0]],
            speedOptions[2][lang as keyof typeof speedOptions[0]],
            speedOptions[3][lang as keyof typeof speedOptions[0]],
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 22-28: Moon reflection
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Ist der Mond eine Lichtquelle?`,
          `Is the Moon a light source?`,
          `A Hold fényforrás?`,
          `Luna este o sursă de lumină?`,
          lang
        ),
        shuffle(
          [
            q4(`Nein, der Mond reflektiert Sonnenlicht`, `No, it reflects sunlight`, `Nem, visszaveri a napfényt`, `Nu, reflectă lumina soarelui`, lang),
            q4(`Ja, der Mond produziert Licht`, `Yes, it produces light`, `Igen, magából termel fényt`, `Da, produce lumină`, lang),
            q4(`Der Mond ist eine künstliche Quelle`, `The Moon is artificial`, `A Hold mesterséges`, `Luna este artificială`, lang),
            q4(`Der Mond ist transparent`, `The Moon is transparent`, `A Hold átlátszó`, `Luna este transparentă`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 29-35: Material transparency
  const materials = [
    { trans: true, de: "Glas", en: "Glass", hu: "Üveg", ro: "Sticlă" },
    { trans: true, de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" },
    { trans: false, de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" },
    { trans: false, de: "Metall", en: "Metal", hu: "Fém", ro: "Metal" },
  ];

  for (let i = 0; i < 7; i++) {
    const mat = pick(materials, rng);
    const langKey = lang as keyof typeof mat;
    questions.push(
      createMCQ(
        q4(
          `Welches Material ist transparent (Licht geht durch)?`,
          `Which material is transparent (light passes through)?`,
          `Melyik anyag átlátszó (fény menjen keresztül)?`,
          `Care material este transparent (lumina trece)?`,
          lang
        ),
        shuffle(
          [
            mat[langKey],
            pick(materials.filter((m) => m !== mat), rng)[langKey],
            pick(materials.filter((m) => m !== mat), rng)[langKey],
            pick(materials.filter((m) => m !== mat), rng)[langKey],
          ],
          rng
        ),
        0
      )
    );
  }

  return questions;
}

function light_sources_typing(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x87654321);

  const questions: CurriculumQuestion[] = [];

  // Typing 1-5: Speed of light fill-in
  const speedAnswers = ["300000", "300.000", "300,000", "300 000"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Die Lichtgeschwindigkeit ist ungefähr ___ km/s`,
          `The speed of light is approximately ___ km/s`,
          `A fény sebessége körülbelül ___ km/s`,
          `Viteza luminii este aproximativ ___ km/s`,
          lang
        ),
        pick(speedAnswers, rng),
        [
          "300000",
          "300.000",
          "300,000",
          "300 000",
          "dreihundertausend",
          "three hundred thousand",
        ]
      )
    );
  }

  // Typing 6-10: Name a light source
  const sources = [
    { de: "Sonne", en: "Sun", hu: "Nap", ro: "Soare" },
    { de: "Glühbirne", en: "lightbulb", hu: "izzólámpa", ro: "bec" },
    { de: "Kerze", en: "candle", hu: "gyertya", ro: "lumânare" },
    { de: "Feuer", en: "fire", hu: "tűz", ro: "foc" },
    { de: "Stern", en: "star", hu: "csillag", ro: "stea" },
  ];

  for (let i = 0; i < 5; i++) {
    const src = pick(sources, rng);
    questions.push(
      createTyping(
        q4(
          `Nenne eine Lichtquelle.`,
          `Name a light source.`,
          `Nevezz meg egy fényforrást.`,
          `Numește o sursă de lumină.`,
          lang
        ),
        src[lang as keyof typeof src],
        [
          "Sonne",
          "Sun",
          "Nap",
          "Soare",
          "Glühbirne",
          "lightbulb",
          "izzólámpa",
          "bec",
          "Kerze",
          "candle",
          "gyertya",
          "lumânare",
        ]
      )
    );
  }

  return questions;
}

// ───────────────────────────────────────────────────────────────────
// 17. SHADOWS
// ───────────────────────────────────────────────────────────────────

function shadows(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0xABCDEF00);

  const questions: CurriculumQuestion[] = [];

  // MCQ 1-7: Umbra definition
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was ist der dunkelste Teil eines Schattens?`,
          `What is the darkest part of a shadow called?`,
          `Mi az árnyék legsötétebb része?`,
          `Ce este cea mai întunecată parte a unei umbre?`,
          lang
        ),
        shuffle(
          [
            q4(`Umbra`, `Umbra`, `Umbra`, `Umbra`, lang),
            q4(`Penumbra`, `Penumbra`, `Penumbra`, `Penumbra`, lang),
            q4(`Kern`, `Core`, `Mag`, `Nucleu`, lang),
            q4(`Licht-Seite`, `Light side`, `Fény oldal`, `Parte luminoasă`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 8-14: Penumbra definition
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was ist die Penumbra?`,
          `What is the penumbra?`,
          `Mi az félárnyék?`,
          `Ce este penumbra?`,
          lang
        ),
        shuffle(
          [
            q4(`Der helle Teil des Schattens`, `The lighter part of a shadow`, `Az árnyék világosabb része`, `Partea mai luminoasă a unei umbre`, lang),
            q4(`Der dunkelste Teil des Schattens`, `The darkest part of a shadow`, `Az árnyék legsötétebb része`, `Cea mai întunecată parte a unei umbre`, lang),
            q4(`Das Licht selbst`, `The light itself`, `Maga a fény`, `Lumina în sine`, lang),
            q4(`Eine Art Farbe`, `A color type`, `Egy szín típus`, `Un tip de culoare`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 15-21: Shadow size when moving closer
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was passiert mit einem Schatten, wenn man sich der Lichtquelle nähert?`,
          `What happens to a shadow when you move closer to the light source?`,
          `Mi történik az árnyékkal, ha közelebb mész a fényforráshoz?`,
          `Ce se întâmplă cu umbra când te apropii de sursa de lumină?`,
          lang
        ),
        shuffle(
          [
            q4(`Der Schatten wird größer`, `The shadow becomes larger`, `Az árnyék nagyobb lesz`, `Umbra devine mai mare`, lang),
            q4(`Der Schatten wird kleiner`, `The shadow becomes smaller`, `Az árnyék kisebb lesz`, `Umbra devine mai mică`, lang),
            q4(`Der Schatten verschwindet`, `The shadow disappears`, `Az árnyék eltűnik`, `Umbra dispare`, lang),
            q4(`Der Schatten ändert sich nicht`, `The shadow doesn't change`, `Az árnyék nem változik`, `Umbra nu se schimbă`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 22-28: Shadow sharpness with point vs spread source
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Wann hat ein Schatten scharfe Kanten?`,
          `When does a shadow have sharp edges?`,
          `Mikor vannak éles szélei az árnyéknak?`,
          `Când are o umbră margini ascuțite?`,
          lang
        ),
        shuffle(
          [
            q4(`Mit einer Punktlichtquelle`, `With a point light source`, `Pontszerű fényforrással`, `Cu o sursă de lumină punctiformă`, lang),
            q4(`Mit einer großen Lichtquelle`, `With a large light source`, `Nagy fényforrással`, `Cu o sursă de lumină mare`, lang),
            q4(`Immer`, `Always`, `Mindig`, `Întotdeauna`, lang),
            q4(`Niemals`, `Never`, `Soha`, `Niciodată`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 29-35: Eclipse explanation
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was verursacht eine Mondfinsternis?`,
          `What causes a lunar eclipse?`,
          `Mi okozza a holdfogyatkozást?`,
          `Ce provoacă o eclipsă de lună?`,
          lang
        ),
        shuffle(
          [
            q4(`Der Mond befindet sich im Schatten der Erde`, `The Moon enters Earth's shadow`, `A Hold az Föld árnyékába kerül`, `Luna intră în umbra Pământului`, lang),
            q4(`Die Erde befindet sich im Schatten des Mondes`, `Earth enters the Moon's shadow`, `A Föld a Hold árnyékába kerül`, `Pământul intră în umbra Lunii`, lang),
            q4(`Die Sonne explodiert`, `The Sun explodes`, `A Nap felrobban`, `Soarele explodează`, lang),
            q4(`Der Mond zerfällt`, `The Moon breaks apart`, `A Hold szétesik`, `Luna se destramă`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  return questions;
}

function shadows_typing(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0xDEADBEEF);

  const questions: CurriculumQuestion[] = [];

  // Typing 1-5: Umbra definition
  const umbraAnswers = ["Umbra", "umbra", "UMBRA"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Der dunkle Kern eines Schattens heißt ___.`,
          `The dark center of a shadow is called the ___.`,
          `Az árnyék sötét közepét ___ -nak hívják.`,
          `Centrul întunecat al unei umbre se numește ___.`,
          lang
        ),
        pick(umbraAnswers, rng),
        umbraAnswers
      )
    );
  }

  // Typing 6-10: How shadows form
  const shadowFormAnswers = ["Blockiert", "blockiert", "blocks", "blocked", "blokkal", "blocheaza"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Ein Schatten entsteht, wenn Licht ___ wird.`,
          `A shadow forms when light is ___.`,
          `Az árnyék akkor keletkezik, amikor a fény ___.`,
          `O umbră se formează când lumina este ___.`,
          lang
        ),
        pick(
          [
            q4(`blockiert`, `blocked`, `blokkolt`, `blocată`, lang),
            q4(`verdunkelt`, `dimmed`, `elsötétített`, `întunecată`, lang),
          ],
          rng
        ),
        [
          "blockiert",
          "blocked",
          "blokkolt",
          "blocată",
          "verdunkelt",
          "dimmed",
          "elsötétített",
        ]
      )
    );
  }

  return questions;
}

// ───────────────────────────────────────────────────────────────────
// 18. REFLECTION
// ───────────────────────────────────────────────────────────────────

function reflection(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x11223344);

  const questions: CurriculumQuestion[] = [];

  // MCQ 1-7: Law of reflection
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was ist das Reflektionsgesetz?`,
          `What is the law of reflection?`,
          `Mi a visszaverődés törvénye?`,
          `Care este legea reflexiei?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Der Einfallswinkel gleicht dem Reflexionswinkel`,
              `Angle of incidence equals angle of reflection`,
              `A beesési szög egyenlő a visszaverődési szöggel`,
              `Unghiul de incidență este egal cu unghiul de reflexie`,
              lang
            ),
            q4(
              `Licht verschwindet bei der Reflexion`,
              `Light disappears upon reflection`,
              `A fény eltűnik a visszaverődésnél`,
              `Lumina dispare la reflexie`,
              lang
            ),
            q4(
              `Der Einfallswinkel ist immer 90 Grad`,
              `The incidence angle is always 90 degrees`,
              `A beesési szög mindig 90 fok`,
              `Unghiul de incidență este întotdeauna 90 de grade`,
              lang
            ),
            q4(`Licht kann nicht reflektiert werden`, `Light cannot be reflected`, `A fény nem verődhet vissza`, `Lumina nu poate fi reflectată`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 8-14: Best reflecting surface
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Welche Oberfläche reflektiert Licht am besten?`,
          `Which surface reflects light best?`,
          `Melyik felület veri vissza a fényt a legjobban?`,
          `Care suprafață reflectează cel mai bine lumina?`,
          lang
        ),
        shuffle(
          [
            q4(`Polierter Spiegel`, `Polished mirror`, `Csiszolt tükör`, `Oglindă lustruită`, lang),
            q4(`Rauhe Wand`, `Rough wall`, `Érdes fal`, `Perete aspru`, lang),
            q4(`Schwarze Farbe`, `Black paint`, `Fekete festék`, `Vopsea neagră`, lang),
            q4(`Baumrinde`, `Tree bark`, `Fakéreg`, `Scoarță de copac`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 15-21: Mirror types
  const mirrorTypes = [
    { de: "Flacher Spiegel", en: "Plane mirror", hu: "Sík tükör", ro: "Oglindă plană" },
    { de: "Konkaver Spiegel", en: "Concave mirror", hu: "Homorú tükör", ro: "Oglindă concavă" },
    { de: "Konvexer Spiegel", en: "Convex mirror", hu: "Domború tükör", ro: "Oglindă convexă" },
  ];

  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Welcher Spiegel wird in einem Auto-Rückspiegel verwendet?`,
          `Which mirror is used in a car's rearview mirror?`,
          `Melyik tükör használatos az autó visszapillantó tükrében?`,
          `Care oglindă este folosită în oglinda retrovizoare a unei mașini?`,
          lang
        ),
        shuffle(
          [
            mirrorTypes[2][lang as keyof typeof mirrorTypes[2]],
            mirrorTypes[0][lang as keyof typeof mirrorTypes[0]],
            mirrorTypes[1][lang as keyof typeof mirrorTypes[1]],
            q4(`Ein kaputtes Fenster`, `A broken window`, `Egy törött ablak`, `O fereastră spartă`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 22-28: Smooth vs rough reflection
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was ist diffuse Reflexion?`,
          `What is diffuse reflection?`,
          `Mi a diffúz visszaverődés?`,
          `Ce este reflexia difuză?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Reflexion von einer rauen Oberfläche`,
              `Reflection from a rough surface`,
              `Visszaverődés érdes felületről`,
              `Reflexie de la o suprafață aspră`,
              lang
            ),
            q4(
              `Reflexion von einem perfekten Spiegel`,
              `Reflection from a perfect mirror`,
              `Visszaverődés tökéletes tükörről`,
              `Reflexie de la o oglindă perfectă`,
              lang
            ),
            q4(
              `Licht, das durch Glas hindurchgeht`,
              `Light passing through glass`,
              `Fény, amely átmegy az üvegen`,
              `Lumină care trece prin sticlă`,
              lang
            ),
            q4(`Schatten ohne Reflexion`, `Shadow without reflection`, `Árnyék reflexió nélkül`, `Umbră fără reflexie`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 29-35: Applications
  const apps = [
    { de: "Periskop", en: "Periscope", hu: "Periszkóp", ro: "Periscop" },
    { de: "Kaleidoskop", en: "Kaleidoscope", hu: "Kaleidoszkóp", ro: "Caleidoscop" },
    { de: "Reflektor", en: "Reflector", hu: "Reflektor", ro: "Reflector" },
  ];

  for (let i = 0; i < 7; i++) {
    const app = pick(apps, rng);
    questions.push(
      createMCQ(
        q4(
          `Ein ___ ist ein Gerät, das Spiegel zur Reflexion nutzt.`,
          `A ___ is a device that uses mirrors for reflection.`,
          `A ___ egy eszköz, amely tükröket használ a visszaverődéshez.`,
          `Un ___ este un dispozitiv care folosește oglinzi pentru reflexie.`,
          lang
        ),
        shuffle(
          [
            app[lang as keyof typeof app],
            pick(apps.filter((a) => a !== app), rng)[lang as keyof typeof app],
            pick(apps.filter((a) => a !== app), rng)[lang as keyof typeof app],
            q4(`Linse`, `Lens`, `Lencse`, `Lentilă`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  return questions;
}

function reflection_typing(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x55667788);

  const questions: CurriculumQuestion[] = [];

  // Typing 1-5: Law of reflection angle
  const reflexionAnswers = ["Reflexion", "Reflection", "Visszaverődés", "Reflexie"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Der Einfallswinkel ist gleich dem ___ Winkel.`,
          `Angle of incidence equals angle of ___.`,
          `A beesési szög megegyezik a ___ szöggel.`,
          `Unghiul de incidență este egal cu unghiul de ___.`,
          lang
        ),
        q4(`Reflexions`, `reflection`, `visszaverődés`, `reflexie`, lang),
        ["Reflexion", "Reflection", "Zurückwerfung", "Abspegelung"]
      )
    );
  }

  // Typing 6-10: Mirror type
  const mirrorAnswers = ["flach", "flat", "sík", "plană"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Ein ___ Spiegel wird als gewöhnlicher Haushaltsspiegel verwendet.`,
          `A ___ mirror is used as a regular household mirror.`,
          `A ___ tükör a rendes háztartási tükörként használatos.`,
          `O oglindă ___ este folosită ca oglindă obișnuită.`,
          lang
        ),
        q4(`flacher`, `flat`, `sík`, `plană`, lang),
        ["flacher", "flat", "sík", "plána", "plane"]
      )
    );
  }

  return questions;
}

// ───────────────────────────────────────────────────────────────────
// 19. REFRACTION
// ───────────────────────────────────────────────────────────────────

function refraction(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x99AABBCC);

  const questions: CurriculumQuestion[] = [];

  // MCQ 1-7: Straw in water
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Warum sieht ein Strohhalm im Wasser gebogen aus?`,
          `Why does a straw look bent in water?`,
          `Miért tűnik a szívócsö meghajlottnak a vízben?`,
          `De ce pare o paie îndoită în apă?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Licht bricht sich beim Übergang zwischen Wasser und Luft`,
              `Light bends when passing between water and air`,
              `A fény megtörik, amikor átmegy víz és levegő között`,
              `Lumina se refractă când trece între apă și aer`,
              lang
            ),
            q4(
              `Der Strohhalm zerfällt im Wasser`,
              `The straw dissolves in water`,
              `A szívócsö feloldódik a vízben`,
              `Paia se dizolvă în apă`,
              lang
            ),
            q4(
              `Das Wasser dreht sich um den Strohhalm`,
              `The water spins around the straw`,
              `A víz a szívócső körül forog`,
              `Apa se învârte în jurul paiei`,
              lang
            ),
            q4(`Das ist nur eine Illusion`, `That's just an illusion`, `Ez csak egy illúzió`, `Aceasta este doar o iluzie`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 8-14: Refraction definition
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was ist Brechung (Refraktion)?`,
          `What is refraction?`,
          `Mi a törés (refrakció)?`,
          `Ce este refracția?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Die Änderung der Lichtrichtung beim Übergang zwischen Stoffen`,
              `The change in light direction when passing between materials`,
              `A fénysugár irányának változása anyagok között`,
              `Schimbarea direcției luminii la trecerea între materiale`,
              lang
            ),
            q4(`Die Absorption von Licht`, `The absorption of light`, `A fény felszívódása`, `Absorbția luminii`, lang),
            q4(`Die Vergrößerung von Objekten`, `The magnification of objects`, `Az objektumok nagyítása`, `Mărirea obiectelor`, lang),
            q4(`Die Erzeugung neuer Farben`, `The creation of new colors`, `Új színek létrehozása`, `Crearea de culori noi`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 15-21: Prism splitting light
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was passiert, wenn weißes Licht durch ein Prisma geht?`,
          `What happens when white light passes through a prism?`,
          `Mi történik, amikor fehér fény átmegy egy prizman?`,
          `Ce se întâmplă când lumina albă trece printr-o prismă?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Es spaltet sich in die Farben des Regenbogens`,
              `It splits into the colors of the rainbow`,
              `Szétválik a szivárvány színeire`,
              `Se împarte în culorile curcubeului`,
              lang
            ),
            q4(`Es wird absorbiert`, `It is absorbed`, `Felszívódik`, `Se absorbe`, lang),
            q4(`Es wird reflektiert`, `It is reflected`, `Visszaverődik`, `Se reflectă`, lang),
            q4(`Es wird unsichtbar`, `It becomes invisible`, `Láthatatlanná válik`, `Devine invizibil`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 22-28: Rainbow
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was verursacht einen Regenbogen?`,
          `What causes a rainbow?`,
          `Mi okozza a szivárványt?`,
          `Ce provoacă o curcubeu?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Brechung und Reflexion von Sonnenlicht in Wassertropfen`,
              `Refraction and reflection of sunlight in water droplets`,
              `A napfény törése és visszaverődése vízcseppekben`,
              `Refracția și reflexia luminii solare în picături de apă`,
              lang
            ),
            q4(`Eine künstliche Farbmischung`, `An artificial color mix`, `Mesterséges szín keverék`, `Un amestec artificial de culori`, lang),
            q4(`Prismen in den Wolken`, `Prisms in the clouds`, `Prizmaк a felhőkben`, `Prisme în nori`, lang),
            q4(`Die Verdunkelung der Sonne`, `The darkening of the Sun`, `A Nap sötétítése`, `Întunecarea Soarelui`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 29-35: Mirage
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Was ist eine Fata Morgana (Luftspiegelung)?`,
          `What is a mirage?`,
          `Mi az a délibáb?`,
          `Ce este o miraj?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Ein optisches Phänomen durch Lichtbrechung in der Luft`,
              `An optical phenomenon caused by light refraction in air`,
              `Egy optikai jelenség, amelyet a fény törése okoz a levegőben`,
              `Un fenomen optic cauzat de refracția luminii în aer`,
              lang
            ),
            q4(`Ein echtes Gewässer`, `A real body of water`, `Egy igazi víztükör`, `Un adevărat corp de apă`, lang),
            q4(`Eine Halluzination`, `A hallucination`, `Egy hallucináció`, `O halucinație`, lang),
            q4(`Ein Wolkenschatten`, `A cloud shadow`, `Egy felhő árnyéka`, `O umbră de nori`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  return questions;
}

function refraction_typing(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0xDEADCAFE);

  const questions: CurriculumQuestion[] = [];

  // Typing 1-5: Refraction definition
  const refracAnswers = ["Brechung", "Refraction", "Törés", "Refracție"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Die Biegung von Licht beim Übergang zwischen Stoffen ist ___.`,
          `The bending of light when passing between materials is ___.`,
          `A fény meghajlása anyagok között ___.`,
          `Îndoirea luminii la trecerea între materiale este ___.`,
          lang
        ),
        pick(refracAnswers, rng),
        refracAnswers
      )
    );
  }

  // Typing 6-10: Rainbow name
  const rainbowAnswers = ["Spektrum", "Spectrum", "Spektrum", "Spectru"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Ein Prisma trennt Licht in das sichtbare ___.`,
          `A prism separates light into a ___.`,
          `Egy prizma szétválasztja a fényt a látható ___ -ra.`,
          `O prismă separă lumina în ___.`,
          lang
        ),
        q4(`Spektrum`, `spectrum`, `spektrum`, `spectru`, lang),
        ["Spektrum", "spectrum", "Farbspektrum", "spektrum"]
      )
    );
  }

  return questions;
}

// ───────────────────────────────────────────────────────────────────
// 20. COLORS & SPECTRUM
// ───────────────────────────────────────────────────────────────────

function colors_spectrum(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x11111111);

  const questions: CurriculumQuestion[] = [];

  // MCQ 1-7: ROYGBIV
  const roygbiv = [
    { de: "Rot", en: "Red", hu: "Vörös", ro: "Roșu" },
    { de: "Orange", en: "Orange", hu: "Narancssárga", ro: "Portocaliu" },
    { de: "Gelb", en: "Yellow", hu: "Sárga", ro: "Galben" },
    { de: "Grün", en: "Green", hu: "Zöld", ro: "Verde" },
    { de: "Blau", en: "Blue", hu: "Kék", ro: "Albastru" },
    { de: "Indigo", en: "Indigo", hu: "Indigó", ro: "Indigo" },
    { de: "Violett", en: "Violet", hu: "Ibolya", ro: "Violet" },
  ];

  for (let i = 0; i < 7; i++) {
    const correct = pick(roygbiv, rng);
    const remaining = roygbiv.filter((c) => c !== correct);
    const wrong = [
      pick(remaining, rng),
      pick(remaining.filter((c) => c !== remaining[0]), rng),
      { de: "Braun", en: "Brown", hu: "Barna", ro: "Maro" },
    ];

    const langKey = lang as keyof typeof correct;
    const options = [
      correct[langKey],
      wrong[0][langKey],
      wrong[1][langKey],
      wrong[2][langKey],
    ];

    const shuffled = shuffle(options, rng);
    const correctIndex = shuffled.indexOf(wrong[2][langKey]);

    questions.push(
      createMCQ(
        q4(
          `Welche ist KEINE Farbe des Regenbogens (ROYGBIV)?`,
          `Which is NOT a color of the rainbow (ROYGBIV)?`,
          `Melyik NEM a szivárvány színe (ROYGBIV)?`,
          `Care NU este culoare a curcubeului (ROYGBIV)?`,
          lang
        ),
        shuffled,
        correctIndex >= 0 ? correctIndex : 3
      )
    );
  }

  // MCQ 8-14: RGB primary colors
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Welche drei Farben von Licht ergeben Weiß?`,
          `What 3 colors of light make white?`,
          `Mely 3 szín vált fehérré?`,
          `Care 3 culori de lumină fac alb?`,
          lang
        ),
        shuffle(
          [
            q4(`Rot, Grün, Blau`, `Red, Green, Blue`, `Vörös, Zöld, Kék`, `Roșu, Verde, Albastru`, lang),
            q4(`Rot, Gelb, Blau`, `Red, Yellow, Blue`, `Vörös, Sárga, Kék`, `Roșu, Galben, Albastru`, lang),
            q4(`Orange, Grün, Violett`, `Orange, Green, Violet`, `Narancssárga, Zöld, Ibolya`, `Portocaliu, Verde, Violet`, lang),
            q4(`Rot, Blau, Schwarz`, `Red, Blue, Black`, `Vörös, Kék, Fekete`, `Roșu, Albastru, Negru`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 15-21: Color mixing
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Welche Farbe entsteht, wenn man rotes und grünes Licht mischt?`,
          `What color is made by mixing red and green light?`,
          `Milyen szín keletkezik, ha vörös és zöld fényt keverünk?`,
          `Ce culoare se face prin amestecul de lumină roșie și verde?`,
          lang
        ),
        shuffle(
          [
            q4(`Gelb`, `Yellow`, `Sárga`, `Galben`, lang),
            q4(`Orange`, `Orange`, `Narancssárga`, `Portocaliu`, lang),
            q4(`Weiß`, `White`, `Fehér`, `Alb`, lang),
            q4(`Braun`, `Brown`, `Barna`, `Maro`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 22-28: Object color appearance
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Warum sieht eine rote Tomate rot aus?`,
          `Why does a red tomato appear red?`,
          `Miért jelenik meg pirosnak egy piros paradicsom?`,
          `De ce apare roșu o roșie?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Sie absorbiert andere Farben und reflektiert rotes Licht`,
              `It absorbs other colors and reflects red light`,
              `Más szineket abszorbeál és vörös fényt veri vissza`,
              `Absorbe alte culori și reflectă lumina roșie`,
              lang
            ),
            q4(
              `Sie produziert selbst rotes Licht`,
              `It produces red light itself`,
              `Maga termel vörös fényt`,
              `Produce ea însăși lumina roșie`,
              lang
            ),
            q4(
              `Das Licht verändert Farbe im Objekt`,
              `Light changes color in the object`,
              `A fény színe megváltozik az objektumban`,
              `Lumina schimbă culoare în obiect`,
              lang
            ),
            q4(`Das ist einfach eine Frage der Chemie`, `It's just chemistry`, `Ez csak kémia`, `E doar o problemă de chimie`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  // MCQ 29-35: White light composition
  for (let i = 0; i < 7; i++) {
    questions.push(
      createMCQ(
        q4(
          `Woraus besteht weißes Licht?`,
          `What is white light made of?`,
          `Miből áll a fehér fény?`,
          `Din ce este făcută lumina albă?`,
          lang
        ),
        shuffle(
          [
            q4(
              `Aus allen sichtbaren Farben gemischt`,
              `It's all visible colors mixed together`,
              `Az összes látható szín keveréke`,
              `Din toate culorile vizibile amestecate`,
              lang
            ),
            q4(`Aus nur Rot und Blau`, `Only red and blue`, `Csak vörös és kék`, `Doar roșu și albastru`, lang),
            q4(`Eine besondere Farbe ohne Komponenten`, `A special color with no components`, `Speciális szín komponensek nélkül`, `O culoare specială fără componente`, lang),
            q4(`Aus Schwarz und Weiß gemischt`, `Black and white mixed`, `Fekete és fehér keveréke`, `Negru și alb amestecate`, lang),
          ],
          rng
        ),
        0
      )
    );
  }

  return questions;
}

function colors_spectrum_typing(lang: string, seed?: number): CurriculumQuestion[] {
  const rng = mulberry32(seed || 0x22222222);

  const questions: CurriculumQuestion[] = [];

  // Typing 1-5: ROYGBIV mnemonic
  const spectrumAnswers = ["Spektrum", "Spectrum", "Spektrum", "Spectru"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Die 7 Farben des Regenbogens bilden das ___.`,
          `The 7 colors of the rainbow form the ___.`,
          `A szivárvány 7 szína a ___ -t alkotja.`,
          `Cele 7 culori ale curcubeului formează ___.`,
          lang
        ),
        q4(`Spektrum`, `spectrum`, `spektrum`, `spectru`, lang),
        ["Spektrum", "spectrum", "ROYGBIV"]
      )
    );
  }

  // Typing 6-10: White light
  const whiteAnswers = ["Weiß", "White", "Fehér", "Alb"];
  for (let i = 0; i < 5; i++) {
    questions.push(
      createTyping(
        q4(
          `Rot + Grün + Blau Licht = ___ Licht`,
          `Red + Green + Blue light = ___ light`,
          `Vörös + Zöld + Kék fény = ___ fény`,
          `Roșu + Verde + Albastru lumină = ___ lumină`,
          lang
        ),
        pick(whiteAnswers, rng),
        whiteAnswers
      )
    );
  }

  return questions;
}

// ═══════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════

export const LIGHT_GENERATORS = {
  light_sources,
  light_sources_typing,
  shadows,
  shadows_typing,
  reflection,
  reflection_typing,
  refraction,
  refraction_typing,
  colors_spectrum,
  colors_spectrum_typing,
};
