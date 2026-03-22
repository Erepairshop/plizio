// ─── PHYSICS GENERATORS K7: OPTICS ─────────────────────────────────────────
// "Optik" theme — Light properties, reflection, refraction, lenses, colors
// Grade 7 (13-14 years old)
//
// Generates 32-35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Light speed: c = 3×10⁸ m/s
// Snell's law: n₁sin(θ₁) = n₂sin(θ₂)
// Lens formula: 1/f = 1/do + 1/di

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

// ─── LIGHT ────────────────────────────────────────────────────────────────

function generateLightMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Light properties (6 questions)
  for (let i = 0; i < 6; i++) {
    const property = pick([
      { de: "Lichtwelle ist elektromagnetisch", en: "Light is electromagnetic wave", hu: "Fényhullám elektromágneses", ro: "Lumina este undă electromagnetică" },
      { de: "Licht breitet sich mit c = 3×10⁸ m/s aus", en: "Light travels at c = 3×10⁸ m/s", hu: "A fény c = 3×10⁸ m/s-sel terjed", ro: "Lumina se propagă la c = 3×10⁸ m/s" },
      { de: "Lichtwelle braucht kein Medium", en: "Light needs no medium", hu: "A fény nem igényel közegget", ro: "Lumina nu are nevoie de mediu" },
      { de: "Licht hat endliche Geschwindigkeit", en: "Light has finite speed", hu: "A fény sebessége véges", ro: "Lumina are viteză finită" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "light",
        q4("Welche Aussage über Licht ist wahr?", "Which statement about light is true?", "Melyik állítás igaz a fényről?", "Care afirmație despre lumină este adevărată?", lang),
        q4(property.de, property.en, property.hu, property.ro, lang),
        [
          q4("Licht ist nur Welle", "Light is only wave", "A fény csak hullám", "Lumina este doar undă", lang),
          q4("Licht braucht Medium zum Ausbreiten", "Light needs medium", "A fény közegre van szüksége", "Lumina are nevoie de mediu", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Light speed calculations (6 questions)
  for (let i = 0; i < 6; i++) {
    const scenario = pick([
      { de: "Zeit für Licht Sonne→Erde (150 Mio. km)?", en: "Time for light Sun→Earth (150M km)?", hu: "Fény ideje Nap→Föld (150M km)?", ro: "Timp lumină Soare→Pământ (150M km)?", answer: "~500 s (~8,3 min)" },
      { de: "Entfernung in 1 Sekunde?", en: "Distance in 1 second?", hu: "Távolság 1 másodperc alatt?", ro: "Distanță în 1 secundă?", answer: "3×10⁸ m = 300.000 km" },
      { de: "Zeit für Licht Erde→Mond (384.000 km)?", en: "Time light Earth→Moon (384k km)?", hu: "Fény ideje Föld→Hold (384k km)?", ro: "Timp lumină Pământ→Lună (384k km)?", answer: "~1,28 s" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "light",
        q4(scenario.de, scenario.en, scenario.hu, scenario.ro, lang),
        q4(scenario.answer, scenario.answer, scenario.answer, scenario.answer, lang),
        [
          q4("1 ms", "1 ms", "1 ms", "1 ms", lang),
          q4("10 s", "10 s", "10 s", "10 s", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Wavelength and frequency (7 questions)
  for (let i = 0; i < 7; i++) {
    const lightType = pick([
      { de: "Ultraviolettes Licht", en: "Ultraviolet light", hu: "Ultraibolya fény", ro: "Lumina ultravioletă", range: "~10-400 nm" },
      { de: "Sichtbares Licht", en: "Visible light", hu: "Látható fény", ro: "Lumina vizibilă", range: "~400-700 nm" },
      { de: "Infrarot Strahlung", en: "Infrared radiation", hu: "Infravörös sugárzás", ro: "Radiația infraroșie", range: "~700 nm - 1 mm" },
      { de: "Röntgenstrahlung", en: "X-rays", hu: "Röntgensugárzás", ro: "Raze X", range: "~0,01-10 nm" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "light",
        q4(
          `Wellenlängenbereich ${q4(lightType.de, lightType.en, lightType.hu, lightType.ro, lang)}:`,
          `Wavelength range ${lightType.en}:`,
          `Hullámhossz tartomány ${q4(lightType.de, lightType.en, lightType.hu, lightType.ro, lang)}:`,
          `Interval lungime de undă ${q4(lightType.de, lightType.en, lightType.hu, lightType.ro, lang)}:`,
          lang
        ),
        q4(lightType.range, lightType.range, lightType.range, lightType.range, lang),
        [
          q4("100 nm", "100 nm", "100 nm", "100 nm", lang),
          q4("1 μm", "1 μm", "1 μm", "1 μm", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Dispersion and spectrum (7 questions)
  for (let i = 0; i < 7; i++) {
    const spectrumFact = pick([
      q4("Rotes Licht hat längste Wellenlänge im sichtbaren Spektrum", "Red light has longest wavelength in visible spectrum", "A vörös fénynek a leghosszabb hullámhossza a látható spektrumban", "Lumina roșie are cea mai lungă lungime de undă în spectrul vizibil", lang),
      q4("Violettes Licht hat kürzeste Wellenlänge im sichtbaren Spektrum", "Violet light has shortest wavelength in visible spectrum", "Az ibolya fénynek a legkisebb hullámhossza a látható spektrumban", "Lumina violetă are cea mai scurtă lungime de undă în spectrul vizibil", lang),
      q4("Dispersion spaltet Licht in Regenbogen", "Dispersion splits light into rainbow", "A diszperzió a fényt szivárvánnyá szétválasztja", "Dispersia desparte lumina în curcubeu", lang),
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "light",
        q4("Welche Aussage zur Dispersion ist wahr?", "Which statement about dispersion is true?", "Melyik állítás igaz a diszperzióra?", "Care afirmație despre dispersie este adevărată?", lang),
        spectrumFact,
        [
          q4("Grünes Licht hat höchste Frequenz", "Green light has highest frequency", "A zöld fénynek a legmagasabb frekvenciája van", "Lumina verde are cea mai mare frecvență", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Sources of light (6 questions)
  for (let i = 0; i < 6; i++) {
    const lightSource = pick([
      { de: "Sonne", en: "Sun", hu: "Nap", ro: "Soare", type: "Thermalisch" },
      { de: "Glühbirne", en: "Incandescent bulb", hu: "Izzólámpa", ro: "Bec incandescent", type: "Thermalisch" },
      { de: "LED", en: "LED", hu: "LED", ro: "LED", type: "Lumineszent" },
      { de: "Leuchtstoffröhre", en: "Fluorescent tube", hu: "Fénycsöves lámpa", ro: "Tub fluorescent", type: "Lumineszent" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "light",
        q4(
          `Lichtquelle ${q4(lightSource.de, lightSource.en, lightSource.hu, lightSource.ro, lang)}: Typ?`,
          `Light source ${lightSource.en}: Type?`,
          `Fényforrás ${q4(lightSource.de, lightSource.en, lightSource.hu, lightSource.ro, lang)}: Típus?`,
          `Sursă de lumină ${q4(lightSource.de, lightSource.en, lightSource.hu, lightSource.ro, lang)}: Tip?`,
          lang
        ),
        q4(lightSource.type, lightSource.type, lightSource.type, lightSource.type, lang),
        [
          q4("Radioaktiv", "Radioactive", "Radioaktív", "Radioactiv", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateLightTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Was ist Licht? Erkläre als Welle und Partikel", "What is light? Explain as wave and particle", "Mi a fény? Magyarázd meg hullámként és részecskként", "Ce este lumina? Explică ca undă și particulă", lang),
      [
        q4("Licht ist elektromagnetische Welle (transversal) die sich mit c=3×10⁸ m/s ausbreitet; auch modelierbar als Photonen (Lichtteilchen)", "Light is EM wave (transverse) traveling at c=3×10⁸ m/s; also photons (light particles)", "A fény elektromágneses hullám (transzverzális) amely c=3×10⁸ m/s-sel terjed; fotonokként (fényrészecskék) is modellezhető", "Lumina este undă EM (transversală) care se propagă la c=3×10⁸ m/s; modelabilă și ca fotoni (particule de lumină)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Lichtgeschwindigkeit und ihre Bedeutung?", "Light speed and its significance?", "Fénysebessége és jelentősége?", "Viteza luminii și semnificația sa?", lang),
      [
        q4("c = 3×10⁸ m/s = 299.792.458 m/s; höchste bekannte Geschwindigkeit, Grenze nach Einstein", "c = 3×10⁸ m/s (exact: 299,792,458 m/s); highest known speed, Einstein limit", "c = 3×10⁸ m/s; a legmagasabb ismert sebesség, Einstein határ", "c = 3×10⁸ m/s; cea mai mare viteză cunoscută, limita Einstein", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Elektromagnetisches Spektrum: Ordnung nach Wellenlänge", "EM spectrum: order by wavelength", "Elektromágneses spektrum: sorrendbe rendezés hullámhossz szerint", "Spectrul EM: ordine după lungime de undă", lang),
      [
        q4("Radiowave > Mikrowelle > Infrarot > Sichtbar > Ultraviolett > Röntgen > Gamma; längste bis kürzeste", "Radio > Microwave > Infrared > Visible > UV > X-rays > Gamma; longest to shortest", "Rádió > Mikrohullám > Infravörös > Látható > Ultraibolya > Röntgen > Gamma; leghosszabbtól a legrövidebbre", "Radio > Microundă > Infraroșu > Vizibil > UV > Raze X > Gamma; de la cea mai lungă la cea mai scurtă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Sichtbares Licht Wellenlängenbereiche und Farben?", "Visible light wavelength ranges and colors?", "Látható fény hullámhosszak és színek?", "Lumina vizibilă interval lungimi de undă și culori?", lang),
      [
        q4("Rot ~700 nm, Orange ~620 nm, Gelb ~580 nm, Grün ~530 nm, Blau ~470 nm, Violett ~400 nm", "Red ~700nm, Orange ~620nm, Yellow ~580nm, Green ~530nm, Blue ~470nm, Violet ~400nm", "Vörös ~700 nm, Narancs ~620 nm, Sárga ~580 nm, Zöld ~530 nm, Kék ~470 nm, Ibolya ~400 nm", "Roșu ~700nm, Portocaliu ~620nm, Galben ~580nm, Verde ~530nm, Albastru ~470nm, Violet ~400nm", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Unterschied Wärmestrahlung und Sichtbares Licht?", "Difference heat radiation and visible light?", "Különbség a hősugárzás és a látható fény között?", "Diferența între radiația termică și lumina vizibilă?", lang),
      [
        q4("Wärmestrahlung = Infrarotstrahlung (längere Wellenlänge); Sichtbares Licht = 400-700 nm", "Heat = IR radiation (longer wavelength); Visible = 400-700 nm", "Hősugárzás = Infravörös (hosszabb hullámhossz); Látható = 400-700 nm", "Căldură = radiație IR (lungime de undă mai lungă); Vizibil = 400-700 nm", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Zeit für Licht Sonne zu Erde (150 Mio. km) berechnen?", "Calculate light time Sun to Earth?", "Számítsd ki a fény idejét a Naptól a Földig?", "Calculează timp lumină Soare la Pământ?", lang),
      [
        q4("t = d/c = 150×10⁹ m / 3×10⁸ m/s = 500 s ≈ 8 min 20 sec", "t = 150×10⁹ m / 3×10⁸ m/s = 500 s ≈ 8m20s", "t = 150×10⁹ m / 3×10⁸ m/s = 500 s ≈ 8 min 20 mp", "t = 150×10⁹ m / 3×10⁸ m/s = 500 s ≈ 8m20s", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Dispersion Definition und Beispiel?", "Dispersion definition and example?", "Diszperzió definiciója és példa?", "Definiția dispersiei și exemplu?", lang),
      [
        q4("Dispersion = Aufspaltung von weißem Licht in Spektralfarben durch unterschiedliche Brechung; Beispiel: Prisma, Regenbogen", "Dispersion = splitting white light into spectrum colors by different refraction; Example: prism, rainbow", "Diszperzió = fehér fény spektrumszínekre bontása különböző törés miatt; Példa: prizma, szivárvány", "Dispersie = despărțire a luminii albe în culori spectrale datorită refracției diferite; Exemplu: prismă, curcubeu", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("Warum sehen wir die Sonne nicht wirklich jetzt?", "Why don't we see Sun in real time?", "Miért nem látjuk a Napot valós időben?", "De ce nu vedem Soarele în timp real?", lang),
      [
        q4("Weil Licht ~500 s braucht Sonne→Erde; wir sehen die Sonne vor 8+ Minuten (Lichtlaufzeit)", "Light takes ~500s (8m20s) to travel Sun→Earth; we see 8min delayed image", "Mert a fény ~500 s-et igényel Nap→Föld; a Napot 8+ perccel korábbról látjuk (fénylaufzeit)", "Deoarece lumina durează ~500s Soare→Pământ; vedem imaginea cu întârziere de 8+ minute", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "light",
      q4("UV und IR Strahlung: unsichtbar warum?", "Why can't we see UV and IR radiation?", "Miért nem láthatunk UV és IR sugárzást?", "De ce nu putem vedea radiația UV și IR?", lang),
      [
        q4("UV/IR außerhalb sichtbares Spektrum (400-700 nm); Auge nur für diese Wellenlängen empfindlich", "UV/IR outside visible spectrum (400-700nm); eye only sensitive to these wavelengths", "UV/IR kívül esik a látható spektrumon (400-700 nm); szem csak ezekre a hullámhosszakra érzékeny", "UV/IR în afara spectrului vizibil (400-700nm); ochiul sensibil doar la aceste lungimi de undă", lang),
      ]
    )
  );

  return questions;
}

// ─── REFLECTION ────────────────────────────────────────────────────────────

function generateReflectionMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Reflection law (6 questions)
  for (let i = 0; i < 6; i++) {
    questions.push(
      createMCQ(
        "optics",
        "reflection",
        q4("Reflexionsgesetz: Einfallswinkel = Reflexionswinkel?", "Law of reflection: incident angle = reflected angle?", "Reflexiós törvény: beesési szög = visszaverődési szög?", "Legea reflexiei: unghi de incidență = unghi de reflexie?", lang),
        q4("Ja, wenn gemessen gegen Normalen", "Yes, when measured from normal", "Igen, ha a normálishoz mérve", "Da, dacă măsurat de la normală", lang),
        [
          q4("Nein, doppelt reflektiert", "No, doubles", "Nem, duplázódik", "Nu, se dublează", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Types of reflection (6 questions)
  for (let i = 0; i < 6; i++) {
    const reflectionType = pick([
      { de: "Spiegelnde Reflexion (spekulativ)", en: "Specular reflection", hu: "Tükrös visszaverődés", ro: "Reflexie speculară", desc: "glatte Oberfläche, klares Bild" },
      { de: "Diffuse Reflexion", en: "Diffuse reflection", hu: "Szórt visszaverődés", ro: "Reflexie difuză", desc: "raue Oberfläche, zerstreut Licht" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "reflection",
        q4(
          `${q4(reflectionType.de, reflectionType.en, reflectionType.hu, reflectionType.ro, lang)}: ${reflectionType.desc}`,
          `${reflectionType.en}: ${reflectionType.desc}`,
          `${q4(reflectionType.de, reflectionType.en, reflectionType.hu, reflectionType.ro, lang)}: ${reflectionType.desc}`,
          `${q4(reflectionType.de, reflectionType.en, reflectionType.hu, reflectionType.ro, lang)}: ${reflectionType.desc}`,
          lang
        ),
        q4("Wahr", "True", "Igaz", "Adevărat", lang),
        [q4("Falsch", "False", "Hamis", "Fals", lang)],
        rng
      )
    );
  }

  // Template 3: Mirror types (7 questions)
  for (let i = 0; i < 7; i++) {
    const mirror = pick([
      { de: "Ebenspiegel", en: "Plane mirror", hu: "Sík tükör", ro: "Oglindă plană", focal: "∞", image: "virtuell, aufrecht, gleichgroß" },
      { de: "Konkavspiegei", en: "Concave mirror", hu: "Homorú tükör", ro: "Oglindă concavă", focal: "real", image: "reell/virtuell je nach Position" },
      { de: "Konvexspiegei", en: "Convex mirror", hu: "Domború tükör", ro: "Oglindă convexă", focal: "virtuell hinter Spiegel", image: "immer virtuell, verkleinert" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "reflection",
        q4(
          `${q4(mirror.de, mirror.en, mirror.hu, mirror.ro, lang)}: Bildtyp?`,
          `${mirror.en}: Image type?`,
          `${q4(mirror.de, mirror.en, mirror.hu, mirror.ro, lang)}: Képtípus?`,
          `${q4(mirror.de, mirror.en, mirror.hu, mirror.ro, lang)}: Tip imagine?`,
          lang
        ),
        q4(mirror.image, mirror.image, mirror.image, mirror.image, lang),
        [
          q4("immer reell und vergrößert", "always real and enlarged", "mindig reális és nagyított", "întotdeauna reală și mărită", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Angle of incidence calculations (7 questions)
  for (let i = 0; i < 7; i++) {
    const angleScenario = pick([
      { de: "Einfallswinkel 30°?", en: "Incident angle 30°?", hu: "Beesési szög 30°?", ro: "Unghi de incidență 30°?", reflected: "30°" },
      { de: "Einfallswinkel 45°?", en: "Incident angle 45°?", hu: "Beesési szög 45°?", ro: "Unghi de incidență 45°?", reflected: "45°" },
      { de: "Einfallswinkel 0° (senkrecht)?", en: "Incident angle 0° (perpendicular)?", hu: "Beesési szög 0° (merőleges)?", ro: "Unghi de incidență 0° (perpendicular)?", reflected: "0° (zurück)" },
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "reflection",
        q4(
          `${q4(angleScenario.de, angleScenario.en, angleScenario.hu, angleScenario.ro, lang)} → Reflexionswinkel?`,
          `${angleScenario.en} → Reflected angle?`,
          `${q4(angleScenario.de, angleScenario.en, angleScenario.hu, angleScenario.ro, lang)} → Visszaverődési szög?`,
          `${q4(angleScenario.de, angleScenario.en, angleScenario.hu, angleScenario.ro, lang)} → Unghi de reflexie?`,
          lang
        ),
        q4(angleScenario.reflected, angleScenario.reflected, angleScenario.reflected, angleScenario.reflected, lang),
        [
          q4("90°", "90°", "90°", "90°", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Real-world reflection (6 questions)
  for (let i = 0; i < 6; i++) {
    const reflectionUse = pick([
      q4("Verkehrsspiegel benutzt Konvexspiegel für großes Sichtfeld", "Traffic mirror uses convex for wide view", "Forgalmi tükör domborúat használ széles látótartományhoz", "Oglinda de trafic folosește convexă pentru vedere largă", lang),
      q4("Rückspiegel Auto nutzt Ebenspiegel oder leicht konvex", "Car rear mirror uses plane or slightly convex", "Autó visszapillantó tükre sík vagy enyhe domborút használ", "Oglinda retrovizoare auto folosește plană sau ușor convexă", lang),
      q4("Periscop benutzt zwei Ebenspiegel im 45° Winkel", "Periscope uses two 45° plane mirrors", "Periszkóp két 45°-os síktükröt használ", "Periscopul folosește două oglinzi plane la 45°", lang),
    ], rng);

    questions.push(
      createMCQ(
        "optics",
        "reflection",
        q4("Welche Anwendung der Reflexion ist wahr?", "Which reflection application is true?", "Melyik reflexió alkalmazás igaz?", "Care aplicație a reflexiei este adevărată?", lang),
        reflectionUse,
        [
          q4("Lupen nutzen Plankonkavspiegelung", "Magnifiers use planoconcave", "Nagyítóüvegek plankoncávat használnak", "Lupele folosesc planoconcav", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateReflectionTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Reflexionsgesetz: Erklärung und Formel?", "Law of reflection: explanation and formula?", "Reflexiós törvény: magyarázat és képlet?", "Legea reflexiei: explicație și formulă?", lang),
      [
        q4("θᵢ = θᵣ (Einfallswinkel = Reflexionswinkel, beide von Normalen gemessen)", "θᵢ = θᵣ (incident = reflected angle, both from normal)", "θᵢ = θᵣ (beesési szög = visszaverődési szög, mindkettő a normálistól mérve)", "θᵢ = θᵣ (unghi de incidență = unghi de reflexie, ambele de la normală)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Ebenspiegel (plane mirror): Bildeigenschaften?", "Plane mirror: image properties?", "Síktükör: képtulajdonságok?", "Oglindă plană: proprietăți imagine?", lang),
      [
        q4("Virtuell, aufrecht, gleichgroß wie Objekt, gleiche Tiefe hinter Spiegel", "Virtual, upright, same size as object, same distance behind mirror", "Virtuális, felfelé, egyenlő nagyságú az objektummal, ugyanolyan távolság a tükör mögött", "Virtuală, în sus, aceeași dimensiune ca obiectul, aceeași distanță în spatele oglinzii", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Konkavspiegei (concave mirror): Fokus und Funktion?", "Concave mirror: focal point and function?", "Homorú tükör: fókuszpont és funkció?", "Oglindă concavă: punct focal și funcție?", lang),
      [
        q4("Fokus vor Spiegel; sammelt paralleles Licht zu Fokus; verwendet in Teleskopen, Scheinwerfern", "Focal point in front; converges parallel rays; used in telescopes, headlights", "Fókuszpont előtte; párhuzamos sugarakat konvergál a fókuszba; teleszkópokban, fényszórókban használt", "Punct focal în față; converge raze paralele; folosit în telescoape, faruri", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Konvexspiegei (convex mirror): Fokus und Anwendung?", "Convex mirror: focal point and application?", "Domború tükör: fókuszpont és alkalmazás?", "Oglindă convexă: punct focal și aplicație?", lang),
      [
        q4("Fokus virtuell hinter Spiegel; divergiert Licht; großes Sichtfeld; verwendet in Rückspiegeln, Verkehrsspiegeln", "Focal point virtual behind; diverges rays; wide field; car mirrors, security mirrors", "Fókuszpont virtuális mögött; szétszórja a sugarakat; széles látótartomány; autó visszapillanó, forgalmi tükrök", "Punct focal virtual în spate; diverge raze; câmp larg; oglinzi retrovizoare, oglinzi de siguranță", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Spiegelgleichung: 1/f = 1/do + 1/di Erklärung?", "Mirror equation: 1/f = 1/do + 1/di explanation?", "Tükörlegyenlet: 1/f = 1/do + 1/di magyarázat?", "Ecuația oglinzii: 1/f = 1/do + 1/di explicație?", lang),
      [
        q4("f = brennweite, do = Objektentfernung, di = Bildenfernung; berechnet Bildposition und -größe", "f=focal length, do=object distance, di=image distance; calculates image position and size", "f = gyújtótávolság, do = objektum távolsága, di = kép távolsága; kép pozícióját és méretét számítja", "f = distanță focală, do = distanță obiect, di = distanță imagine; calculează poziția și dimensiunea imaginii", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Spiegelnde vs. diffuse Reflexion: Unterschied?", "Specular vs. diffuse reflection: difference?", "Tükrös vs. szórt visszaverődés: különbség?", "Reflexie speculară vs. difuză: diferență?", lang),
      [
        q4("Spiegelnde: glatte Oberfläche, paralleles Licht bleibt parallel, klares Bild (z.B. Spiegel); Diffuse: raue Oberfläche, Licht verteilt sich, kein klares Bild (z.B. Papier)", "Specular: smooth surface, parallel rays stay parallel, clear image (mirror); Diffuse: rough, scattered rays, no clear image (paper)", "Tükrös: sima felület, párhuzamos fény párhuzamos marad, tiszta kép (tükör); Szórt: durva, szóródott sugarak, nincs tiszta kép (papír)", "Speculară: suprafață netedă, raze paralele rămân paralele, imagine clară (oglindă); Difuză: aspră, raze dispersate, fără imagine clară (hârtie)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Normalen und Winkel in Reflexion erklären?", "Normal and angles in reflection explained?", "Normális és szögek reflexióban magyarázva?", "Normal și unghiuri în reflexie explicate?", lang),
      [
        q4("Normalen = unsichtbare Linie senkrecht zur Spiegelfläche; Einfallswinkel und Reflexionswinkel gemessen von Normalen, nicht von Fläche", "Normal = imaginary line perpendicular to mirror surface; angles measured from normal, not surface", "Normális = egy tükörfelületre merőleges képzeletbeli vonal; szögek a normálistól mérve, nem a felületből", "Normală = linie imaginar perpendiculară pe suprafață; unghiuri măsurate de la normală, nu de la suprafață", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Konkavspiegei Bildkonstruktion bei verschiedenen Objektentfernungen?", "Concave mirror image construction at different object distances?", "Homorú tükör képkészítés különböző objektumtávolságoknál?", "Construcția imaginii oglinzii concave la diferite distanțe de obiecte?", lang),
      [
        q4("do > 2f: reell, invertiert, verkleiner; do = 2f: reell, invertiert, gleichgroß; f < do < 2f: reell, invertiert, vergrößert; do < f: virtuell, aufrecht, vergrößert", "do>2f: real, inverted, reduced; do=2f: real, inverted, equal; f<do<2f: real, inverted, enlarged; do<f: virtual, upright, enlarged", "do > 2f: valós, invertált, kicsinyített; do = 2f: valós, invertált, egyenlő; f < do < 2f: valós, invertált, nagyított; do < f: virtuális, felfelé, nagyított", "do>2f: real, inversat, micșorat; do=2f: real, inversat, egal; f<do<2f: real, inversat, mărit; do<f: virtual, în sus, mărit", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "optics",
      "reflection",
      q4("Periscop: Funktionsweise mit zwei Spiegeln?", "Periscope: how it works with two mirrors?", "Periszkóp: hogyan működik két tükörrel?", "Periscopul: cum funcționează cu două oglinzi?", lang),
      [
        q4("Zwei ebene Spiegel im 45° Winkel angeordnet; Licht von oben wird zwei Mal um 45° abgelenkt → Bild nach unten verlagert; erlaubt über Hindernisse schauen", "Two plane mirrors at 45° angles; light deflected twice by 45° → image displaced downward; allows seeing over obstacles", "Két sík tükör 45°-os szögben elrendezve; fény kétszer 45°-ban elhajlva → kép lefelé eltolva; lehetővé teszi az akadályok feletti nézést", "Două oglinzi plane la unghiuri de 45°; lumină deviată de două ori cu 45° → imagine deplasată în jos; permite a vedea peste obstacole", lang),
      ]
    )
  );

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K7_OPTICS_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  light: (lang = "en", seed = 0) => [...generateLightMCQ(lang, seed), ...generateLightTyping(lang, seed)],
  light_mcq: (lang = "en", seed = 0) => generateLightMCQ(lang, seed),
  light_typing: (lang = "en", seed = 0) => generateLightTyping(lang, seed),

  reflection: (lang = "en", seed = 0) => [...generateReflectionMCQ(lang, seed), ...generateReflectionTyping(lang, seed)],
  reflection_mcq: (lang = "en", seed = 0) => generateReflectionMCQ(lang, seed),
  reflection_typing: (lang = "en", seed = 0) => generateReflectionTyping(lang, seed),
};
