import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";
// Helper for generating multilingual text
const ml = (de: string, en: string, hu: string, ro: string): string => ({ de, en, hu, ro } as unknown as string);


export const PHYSIK_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "ph-5-mc-1",
        title: ml("Energieformen", "Forms of energy", "Energia formái", "Forme de energie"),
        prompt: ml("Fange nur Energieformen ein!", "Capture only forms of energy!", "Csak az energia formáit rögzítse!", "Capturați numai forme de energie!"),
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "kin", label: ml("Kinetische Energie", "Kinetic energy", "Kinetikus energia", "Energie cinetică"), emoji: "⚡" },
          { id: "pot", label: ml("Potenzielle Energie", "Potential energy", "Potenciális energia", "Energie potențială"), emoji: "🧗" },
          { id: "waerme", label: ml("Wärmeenergie", "Heat energy", "Hőenergia", "Energia termică"), emoji: "🔥" },
          { id: "elek", label: ml("Elektrische Energie", "Electrical energy", "Elektromos energia", "Energie mecanică-electrică"), emoji: "💡" },
          { id: "licht", label: ml("Lichtenergie", "Light energy", "Fényenergia", "Energie luminoasă"), emoji: "☀️" },
          { id: "chem", label: ml("Chemische Energie", "Chemical energy", "Kémiai energia", "Energie chimică"), emoji: "🔋" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Dichte", "Density", "Sűrűség", "Densitatea"), emoji: "🧱" },
          { id: "x2", label: ml("Masse", "Mass", "Tömeg", "Mass"), emoji: "⚖️" },
          { id: "x3", label: ml("Volumen", "Volume", "Hangerő", "Volum"), emoji: "📦" }
        ]
      },
      {
        id: "ph-5-mc-2",
        title: ml("Einfache Maschinen", "Simple machines", "Egyszerű gépek", "Mașini simple"),
        prompt: ml("Fange nur einfache Maschinen ein!", "Only capture simple machines!", "Csak egyszerű gépeket rögzítsen!", "Capturați numai mașini simple!"),
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "hebel", label: ml("Hebel", "Levers", "Karok", "Pârghii"), emoji: "🕹️" },
          { id: "rolle", label: ml("Flaschenzug", "Pulley pulley", "Szíjtárcsa", "Fulie de scripete"), emoji: "⛓️" },
          { id: "ebene", label: ml("Schiefe Ebene", "Inclined plane", "Dőléses sík", "Plan înclinat"), emoji: "📐" },
          { id: "keil", label: ml("Keil", "Wedge", "Ék", "Pană"), emoji: "🪓" },
          { id: "rad", label: ml("Rad und Achse", "Wheel and axle", "Kerék és tengely", "Roată și ax"), emoji: "🎡" },
          { id: "schraube", label: ml("Schraube", "Screw", "Csavar", "Îșurub"), emoji: "🔩" }
        ],
        wrongItems: [
          { id: "x4", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru"), emoji: "🌡️" },
          { id: "x5", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋" },
          { id: "x6", label: ml("Magnet", "Magnet", "Mágnes", "Magnet"), emoji: "🧲" },
          { id: "x7", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡" }
        ]
      },
      {
        id: "ph-5-mc-3",
        title: ml("Wärmequellen", "Heat sources", "Hőforrások", "Surse de căldură"),
        prompt: ml("Fange nur Wärmequellen ein!", "Only capture heat sources!", "Csak hőforrásokat fogjon fel!", "Captați doar sursele de căldură!"),
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "sonne", label: ml("Sonne", "Sun", "Nap", "Soare"), emoji: "☀️" },
          { id: "feuer", label: ml("Lagerfeuer", "Campfire", "Tábortűz", "Normal</t44> <t45>Normal"), emoji: "🔥" },
          { id: "heizung", label: ml("Heizkörper", "Radiators", "Radiátorok", "Radiatoare"), emoji: "♨️" },
          { id: "reibung", label: ml("Reibung", "Friction", "Súrlódás", "Fricțiune"), emoji: "👏" },
          { id: "herd", label: ml("Herdplatte", "Stove plate", "Tűzhelylap", "Placă aragaz"), emoji: "🍳" }
        ],
        wrongItems: [
          { id: "x8", label: ml("Eiswürfel", "Ice cubes", "Jégkockák", "Cuburi de gheață"), emoji: "🧊" },
          { id: "x9", label: ml("Schatten", "Shadow", "Árnyék", "Umbră"), emoji: "👤" },
          { id: "x10", label: ml("Spiegel", "Mirror", "Tükör", "Oglindă"), emoji: "🪞" }
        ]
      },
      {
        id: "ph-5-mc-4",
        title: ml("Energieformen (Pro)", "Forms of energy (Pro)", "Az energia formái (Pro)", "Forme de energie (Pro)"),
        prompt: ml("Fange nur Energieformen ein!", "Capture only forms of energy!", "Csak az energia formáit rögzítse!", "Capturați numai forme de energie!"),
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "kin", label: ml("Kinetische Energie", "Kinetic energy", "Kinetikus energia", "Energie cinetică"), emoji: "⚡" },
          { id: "pot", label: ml("Potenzielle Energie", "Potential energy", "Potenciális energia", "Energie potențială"), emoji: "🧗" },
          { id: "waerme", label: ml("Wärmeenergie", "Heat energy", "Hőenergia", "Energia termică"), emoji: "🔥" },
          { id: "elek", label: ml("Elektrische Energie", "Electrical energy", "Elektromos energia", "Energie mecanică-electrică"), emoji: "💡" },
          { id: "licht", label: ml("Lichtenergie", "Light energy", "Fényenergia", "Energie luminoasă"), emoji: "☀️" },
          { id: "chem", label: ml("Chemische Energie", "Chemical energy", "Kémiai energia", "Energie chimică"), emoji: "🔋" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Dichte", "Density", "Sűrűség", "Densitatea"), emoji: "🧱" },
          { id: "x2", label: ml("Masse", "Mass", "Tömeg", "Mass"), emoji: "⚖️" },
          { id: "x3", label: ml("Volumen", "Volume", "Hangerő", "Volum"), emoji: "📦" }
        ]
      },
      {
        id: "ph-5-mc-5",
        title: ml("Einfache Maschinen (Pro)", "Simple machines (Pro)", "Egyszerű gépek (Pro)", "Mașini simple (Pro)"),
        prompt: ml("Fange nur einfache Maschinen ein!", "Only capture simple machines!", "Csak egyszerű gépeket rögzítsen!", "Capturați numai mașini simple!"),
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "hebel", label: ml("Hebel", "Levers", "Karok", "Pârghii"), emoji: "🕹️" },
          { id: "rolle", label: ml("Flaschenzug", "Pulley pulley", "Szíjtárcsa", "Fulie de scripete"), emoji: "⛓️" },
          { id: "ebene", label: ml("Schiefe Ebene", "Inclined plane", "Dőléses sík", "Plan înclinat"), emoji: "📐" },
          { id: "keil", label: ml("Keil", "Wedge", "Ék", "Pană"), emoji: "🪓" },
          { id: "rad", label: ml("Rad und Achse", "Wheel and axle", "Kerék és tengely", "Roată și ax"), emoji: "🎡" },
          { id: "schraube", label: ml("Schraube", "Screw", "Csavar", "Îșurub"), emoji: "🔩" }
        ],
        wrongItems: [
          { id: "x4", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru"), emoji: "🌡️" },
          { id: "x5", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋" },
          { id: "x6", label: ml("Magnet", "Magnet", "Mágnes", "Magnet"), emoji: "🧲" },
          { id: "x7", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-5-os-1",
        title: ml("Kräfte sortieren", "Sort forces", "Erők rendezése", "Forțele de sortare"),
        instruction: ml("Sortiere in Kontakt- oder Fernkraft.", "Sort into contact or Long-distance force.", "Rendezés érintkezési vagy távolsági teljesítmény szerint.", "-P<t16> sau la distanță de contact"),
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "kontakt", label: ml("Kontaktkraft", "Contact force", "Érintkezési erő", "Forța de contact corectă!"), color: "#3b82f6" },
          { id: "fern", label: ml("Fernkraft", "Long Distance Power", "Távolsági teljesítmény", "Putere pe distanțe lungi"), color: "#ef4444" }
        ],
        items: [
          { id: "reib", label: ml("Reibung", "Friction", "Súrlódás", "Fricțiune"), emoji: "🤝", bucketId: "kontakt" },
          { id: "zug", label: ml("Zugkraft", "Tensile force", "Szakítóerő", "Forța de tracțiune"), emoji: "🪢", bucketId: "kontakt" },
          { id: "druck", label: ml("Druckkraft", "Pressure force", "Nyomáserő", "Forța de presiune"), emoji: "👇", bucketId: "kontakt" },
          { id: "luft", label: ml("Luftwiderstand", "Air resistance", "Légellenállás", "Rezistența aerului"), emoji: "💨", bucketId: "kontakt" },
          { id: "schwer", label: ml("Schwerkraft", "Gravity", "Gravitáció", "Gravația"), emoji: "🌍", bucketId: "fern" },
          { id: "magn", label: ml("Magnetismus", "Magnetism", "Mágnesesség", "Magnetism"), emoji: "🧲", bucketId: "fern" },
          { id: "elek", label: ml("Elektrische Kraft", "Electric power", "Elektromos energia", "Putere electrică"), emoji: "⚡", bucketId: "fern" }
        ]
      },
      {
        id: "ph-5-os-2",
        title: ml("Wärmeleiter & Isolatoren", "Heat conductors & insulators", "Hővezetők és szigetelők", "Conductori termici și izolatori"),
        instruction: ml("Sortiere in Wärmeleiter oder Isolator.", "Sort into heat conductor or insulator.", "Rendezés hővezetőre vagy szigetelőre.", "Sortați în conductor de căldură sau izolator."),
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "leiter", label: ml("Wärmeleiter", "Heat conductor", "Hővezető", "Conductor de căldură"), color: "#f59e0b" },
          { id: "isolator", label: ml("Isolator", "Insulator", "Szigetelő", "Izolator"), color: "#8b5cf6" }
        ],
        items: [
          { id: "kupfer", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉", bucketId: "leiter" },
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "leiter" },
          { id: "alu", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫", bucketId: "leiter" },
          { id: "holz", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵", bucketId: "isolator" },
          { id: "plastik", label: ml("Plastik", "Plastic", "Műanyag", "Plastic"), emoji: "🧴", bucketId: "isolator" },
          { id: "wolle", label: ml("Wolle", "Wool", "Gyapjú", "Lână"), emoji: "🧶", bucketId: "isolator" },
          { id: "luft", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨", bucketId: "isolator" }
        ]
      },
      {
        id: "ph-5-os-3",
        title: ml("Energiequellen", "Energy sources", "Energiaforrások", "Surse de energie"),
        instruction: ml("Erneuerbar oder Nicht erneuerbar?", "Renewable or Non-renewable?", "megújuló vagy nem megújuló?", "Regenerabil sau neregenerabil?"),
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "ern", label: ml("Erneuerbar", "Renewable", "Megújuló", "Regenerabile"), color: "#10b981" },
          { id: "nicht", label: ml("Nicht erneuerbar", "Non-renewable", "Nem megújuló", "Nereînnoibilă"), color: "#64748b" }
        ],
        items: [
          { id: "sonne", label: ml("Sonnenenergie", "Solar energy", "Napenergia", "Energie solară"), emoji: "☀️", bucketId: "ern" },
          { id: "wind", label: ml("Windenergie", "Wind energy", "Szélenergia", "Energia eoliană"), emoji: "🌬️", bucketId: "ern" },
          { id: "wasser", label: ml("Wasserkraft", "Hydropower", "Vízenergia", "Hidroenergie"), emoji: "🌊", bucketId: "ern" },
          { id: "kohle", label: ml("Kohle", "Coal", "Szén", "Cărbune"), emoji: "🪨", bucketId: "nicht" },
          { id: "oel", label: ml("Erdöl", "Petroleum", "Ásványolaj", "Petrol"), emoji: "🛢️", bucketId: "nicht" },
          { id: "gas", label: ml("Erdgas", "Natural gas", "Földgáz", "Gaz natural"), emoji: "🔥", bucketId: "nicht" },
          { id: "uran", label: ml("Uran", "Uranium", "Urán", "Uraniu"), emoji: "☢️", bucketId: "nicht" }
        ]
      },
      {
        id: "ph-5-os-4",
        title: ml("Kräfte sortieren (Pro)", "Sorting forces (Pro)", "Rendezési erők (Pro)", "Forțe de sortare (Pro)"),
        instruction: ml("Sortiere in Kontakt- oder Fernkraft.", "Sort into contact or Long-distance force.", "Rendezés érintkezési vagy távolsági teljesítmény szerint.", "-P<t16> sau la distanță de contact"),
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "kontakt", label: ml("Kontaktkraft", "Contact force", "Érintkezési erő", "Forța de contact corectă!"), color: "#3b82f6" },
          { id: "fern", label: ml("Fernkraft", "Long Distance Power", "Távolsági teljesítmény", "Putere pe distanțe lungi"), color: "#ef4444" }
        ],
        items: [
          { id: "reib", label: ml("Reibung", "Friction", "Súrlódás", "Fricțiune"), emoji: "🤝", bucketId: "kontakt" },
          { id: "zug", label: ml("Zugkraft", "Tensile force", "Szakítóerő", "Forța de tracțiune"), emoji: "🪢", bucketId: "kontakt" },
          { id: "druck", label: ml("Druckkraft", "Pressure force", "Nyomáserő", "Forța de presiune"), emoji: "👇", bucketId: "kontakt" },
          { id: "luft", label: ml("Luftwiderstand", "Air resistance", "Légellenállás", "Rezistența aerului"), emoji: "💨", bucketId: "kontakt" },
          { id: "schwer", label: ml("Schwerkraft", "Gravity", "Gravitáció", "Gravația"), emoji: "🌍", bucketId: "fern" },
          { id: "magn", label: ml("Magnetismus", "Magnetism", "Mágnesesség", "Magnetism"), emoji: "🧲", bucketId: "fern" },
          { id: "elek", label: ml("Elektrische Kraft", "Electric power", "Elektromos energia", "Putere electrică"), emoji: "⚡", bucketId: "fern" }
        ]
      },
      {
        id: "ph-5-os-5",
        title: ml("Wärmeleiter & Isolatoren (Pro)", "Heat Conductors & Insulators (Pro)", "Hővezetők és szigetelők (Pro)", "Conductori de căldură și izolatori (Pro)"),
        instruction: ml("Sortiere in Wärmeleiter oder Isolator.", "Sort into heat conductor or insulator.", "Rendezés hővezetőre vagy szigetelőre.", "Sortați în conductor de căldură sau izolator."),
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "leiter", label: ml("Wärmeleiter", "Heat conductor", "Hővezető", "Conductor de căldură"), color: "#f59e0b" },
          { id: "isolator", label: ml("Isolator", "Insulator", "Szigetelő", "Izolator"), color: "#8b5cf6" }
        ],
        items: [
          { id: "kupfer", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉", bucketId: "leiter" },
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "leiter" },
          { id: "alu", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫", bucketId: "leiter" },
          { id: "holz", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵", bucketId: "isolator" },
          { id: "plastik", label: ml("Plastik", "Plastic", "Műanyag", "Plastic"), emoji: "🧴", bucketId: "isolator" },
          { id: "wolle", label: ml("Wolle", "Wool", "Gyapjú", "Lână"), emoji: "🧶", bucketId: "isolator" },
          { id: "luft", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨", bucketId: "isolator" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-5-sr-1",
        title: ml("Physik-Sprint K5 - Kräfte", "Physics Sprint K5 - Forces", "Fizika Sprint K5 - Erők", "Physics Sprint K5 - Forțe"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right one Answer.", "Válassza ki a helyes választ.", "Alegeți răspunsul corect."),
        scenes: [
          {
            id: "ph-5-sr-1-s1",
            title: ml("Kraftmesser", "Dynamometer", "Fékpad", "Dinamometru"),
            prompt: ml("Womit misst man die Kraft?", "How do you measure it Power?", "Hogyan méri a teljesítményt?", "Cum se măsoară puterea?"),
            sceneType: "community",
            visual: { icon: "📏", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Waage", "Balance", "Egyensúly", "Echilibrul") },
              { id: "b", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru") },
              { id: "c", label: ml("Kraftmesser", "Dynamometer", "Fékpad", "Dinamometru") },
              { id: "d", label: ml("Maßband", "Tape measure", "Mérőszalag", "Ronda de măsură") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig! Der Kraftmesser (mit Spiralfeder) misst die Kraft.", "Right! The dynamometer (with spiral spring) measures the force.", "Helyes! A dinamométer (spirálrugóval) méri az erőt.", "Corect! Dinamometrul (cu arc spiralat) măsoară forța."),
            failFeedback: ml("Falsch! Die Kraft wird mit einem Kraftmesser gemessen.", "Wrong! The force is measured with a dynamometer.", "Rossz! Az erőt dinamométerrel mérik.", "Greșit! Forța se măsoară cu un dinamometru.")
          },
          {
            id: "ph-5-sr-1-s2",
            title: ml("Schwerkraft", "Gravity", "Gravitáció", "Gravația"),
            prompt: ml("Welche Kraft zieht uns zur Erde?", "What force pulls us to earth?", "Milyen erő húz a földre?", "Ce forță ne trage pe pământ?"),
            sceneType: "nature",
            visual: { icon: "🌍", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Reibungskraft", "Friction force", "Súrlódási erő", "Forța de frecare") },
              { id: "b", label: ml("Magnetkraft", "Magnetic force", "Mágneses erő", "Forța magnetică") },
              { id: "c", label: ml("Gewichtskraft", "Weight force", "Súlyerő", "Forța de greutate") },
              { id: "d", label: ml("Spannkraft", "Tension force", "Húzóerő", "Forța de tensiune") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Korrekt! Die Gewichtskraft (Schwerkraft) zieht Massen an.", "Correct! The force of weight (gravity) attracts masses.", "Helyes! A súlyerő (gravitáció) vonzza a tömegeket.", "Corect! Forța greutății (gravitația) atrage mase."),
            failFeedback: ml("Nicht ganz. Es ist die Gewichtskraft.", "Not quite. It is the weight.", "Nem egészen. Ez a súly.", "Nu chiar. Este greutatea.")
          },
          {
            id: "ph-5-sr-1-s3",
            title: ml("Einheit", "Unit", "Egység", "Unitate"),
            prompt: ml("In welcher Einheit wird die Kraft angegeben?", "In which unit is the force given?", "Melyik mértékegységben adják meg az erőt?", "În ce unitate este dată forța?"),
            sceneType: "community",
            visual: { icon: "🍎", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Kilogramm (kg)", "Kilogram (kg)", "Kilogramm (kg)", "Kilogram (kg)") },
              { id: "b", label: ml("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)") },
              { id: "c", label: ml("Joule (J)", "Joule (J)", "Joule (J)", "Joule (J)") },
              { id: "d", label: ml("Meter (m)", "Meter (m)", "Méter (m)", "metri (m)") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Stimmt! 1 Newton entspricht der Gewichtskraft von ca. 100g.", "That's right! 1 Newton corresponds to the weight of approx. 100g.", "Úgy van! 1 Newton kb. 100 g.", "Așa este! 1 Newton corespunde greutății de cca. 100 g."),
            failFeedback: ml("Leider falsch. Die Einheit der Kraft ist Newton (N).", "Unfortunately incorrect. The unit of force is Newton (N).", "Sajnos hibás. Az erő mértékegysége Newton (N).", "Din păcate, incorect. Unitatea de măsură a forței este Newton (N).")
          },
          {
            id: "ph-5-sr-1-s4",
            title: ml("Bremsen", "Brakes", "Fékek", "Frâne"),
            prompt: ml("Was bremst einen rollenden Ball auf dem Rasen?", "What slows down a rolling ball on the grass?", "Mi lassítja le a füvön guruló labdát?", "Ce încetinește o minge care rulează pe iarbă?"),
            sceneType: "nature",
            visual: { icon: "⚽", bg: "#78350f", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Luftdruck", "Air pressure", "Légnyomás", "Presiunea aerului") },
              { id: "b", label: ml("Gewichtskraft", "Weight force", "Súlyerő", "Forța de greutate") },
              { id: "c", label: ml("Reibungskraft", "Friction force", "Súrlódási erő", "Forța de frecare") },
              { id: "d", label: ml("Magnetkraft", "Magnetic force", "Mágneses erő", "Forța magnetică") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Perfekt! Die Reibungskraft wirkt der Bewegung entgegen.", "Perfect! The friction force counteracts the movement.", "Tökéletes! A súrlódási erő ellensúlyozza a mozgást.", "Perfect! Forța de frecare contracarează mișcarea."),
            failFeedback: ml("Falsch. Die Reibung bremst den Ball.", "Incorrect. The friction slows down the ball.", "Nem megfelelő. A súrlódás lelassítja a labdát.", "Incorect. Frecarea încetinește mingea.")
          }
        ]
      },
      {
        id: "ph-5-sr-2",
        title: ml("Physik-Sprint K5 - Energie", "Physics Sprint K5 - Energy", "Fizika Sprint K5 - Energia", "Fizica Sprint K5 - Energie"),
        instruction: ml("Wähle die richtige Antwort zur Energie.", "Choose the correct answer about energy.", "Válassza ki a helyes választ az energiával kapcsolatban.", "Alegeți răspunsul corect despre energie."),
        scenes: [
          {
            id: "ph-5-sr-2-s1",
            title: ml("Fahrrad", "Bicycle", "Kerékpár", "Bicicleta"),
            prompt: ml("Welche Energie hat ein fahrendes Fahrrad?", "What energy does a moving bicycle have?", "Milyen energiája van egy mozgó kerékpárnak?", "Ce energie are o bicicletă în mișcare?"),
            sceneType: "community",
            visual: { icon: "🚲", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Lageenergie", "Location energy", "Helyzeti energia", "Energia locației") },
              { id: "b", label: ml("Kinetische Energie", "Kinetic energy", "Kinetikus energia", "Energie cinetică") },
              { id: "c", label: ml("Wärmeenergie", "Heat energy", "Hőenergia", "Energia termică") },
              { id: "d", label: ml("Spannenergie", "Clamping energy", "szorító energia", "Energia de strângere") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Kinetische Energie ist die Bewegungsenergie.", "Correct! Kinetic energy is the energy of movement.", "Helyes! A kinetikus energia a mozgás energiája.", "Corect! Energia cinetică este energia mișcării."),
            failFeedback: ml("Nicht ganz. Bewegung bedeutet Kinetische Energie.", "Not quite. Movement means kinetic energy.", "Nem egészen. A mozgás mozgási energiát jelent.", "Nu chiar. Mișcarea înseamnă energie cinetică.")
          },
          {
            id: "ph-5-sr-2-s2",
            title: ml("Feder", "Spring", "Rugó", "Primăvara"),
            prompt: ml("Welche Energie speichert eine zusammengedrückte Feder?", "What energy does a compressed spring store?", "Mennyi energiát tárol egy összenyomott rugó?", "Câtă energie stochează un arc comprimat?"),
            sceneType: "community",
            visual: { icon: "🌀", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Spannenergie", "Clamping energy", "szorító energia", "Energia de strângere") },
              { id: "b", label: ml("Lichtenergie", "Light energy", "Fényenergia", "Energie luminoasă") },
              { id: "c", label: ml("Chemische Energie", "Chemical energy", "Kémiai energia", "Energie chimică") },
              { id: "d", label: ml("Lageenergie", "Location energy", "Helyzeti energia", "Energia locației") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Korrekt! Die Feder speichert Spannenergie.", "Correct! The spring stores tension energy.", "Helyes! A rugó feszültségi energiát tárol.", "Corect! Arcul stochează energia de tensiune."),
            failFeedback: ml("Falsch, es ist die Spannenergie.", "Wrong, it is the clamping energy.", "Rossz, ez a szorító energia.", "Greșit, este energia de prindere.")
          },
          {
            id: "ph-5-sr-2-s3",
            title: ml("Erhaltung", "Conservation", "Konzerválás", "Conservare"),
            prompt: ml("Was besagt der Energieerhaltungssatz?", "What does the law of conservation of energy say?", "Mit mond az energiamegmaradás törvénye?", "Ce spune legea conservării energiei."),
            sceneType: "nature",
            visual: { icon: "♻️", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Energie wird verbraucht.", "Energy is consumed.", "Energiát fogyaszt.", "Energia este consumată.") },
              { id: "b", label: ml("Energie entsteht aus dem Nichts.", "Energy arises from nothing.", "Az energia a semmiből keletkezik.", "Energia ia naștere din nimic.") },
              { id: "c", label: ml("Energie wird nur umgewandelt.", "Energy is only converted.", "Csak az energia alakul át.", "Energia este doar convertită.") },
              { id: "d", label: ml("Energie verschwindet.", "Energy disappears.", "Az energia eltűnik.", "Energia dispare.") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Genau! Energie geht nie verloren.", "Exactly! Energy is never lost.", "Pontosan! Az energia soha nem vész el.", "Exact! Energia nu se pierde niciodată."),
            failFeedback: ml("Leider falsch. Energie kann nur umgewandelt werden.", "Unfortunately wrong. Energy can only be converted.", "Sajnos rossz. Az energiát csak átalakítani lehet.", "Din păcate, greșit. Energia poate fi convertită numai.")
          },
          {
            id: "ph-5-sr-2-s4",
            title: ml("Einheit", "Unit", "Egység", "Unitate"),
            prompt: ml("In welcher Einheit wird Energie gemessen?", "In what unit is energy measured?", "Milyen mértékegységben mérik az energiát?", "În ce unitate se măsoară energia?"),
            sceneType: "community",
            visual: { icon: "⚡", bg: "#78350f", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Volt", "Volts", "volt", "V <t6>A") },
              { id: "b", label: ml("Newton", "Newton", "Newton", "Newton") },
              { id: "c", label: ml("Pascal", "Pascal", "Pascal", "Pascal") },
              { id: "d", label: ml("Joule", "Joules", "Joule", "Jouli") }
            ],
            correctChoiceId: "d",
            successFeedback: ml("Stimmt! Energie = Joule (J).", "That's right! Energy = Joule (J).", "Úgy van! Energia = Joule (J).", "Așa este! Energie = Joule (J)."),
            failFeedback: ml("Falsch, die Einheit ist Joule (J).", "Incorrect, the unit is Joule (J).", "Rossz, az egység Joule (J).", "Greșit, unitatea este Joule (J).")
          }
        ]
      },
      {
        id: "ph-5-sr-3",
        title: ml("Physik-Sprint K5 - Wärme & Maschinen", "Physics Sprint K5 - Heat & Machines", "Physics Sprint K5 - Heat & Machines", "Physics Sprint K5 - Heat & Machines"),
        instruction: ml("Beantworte Fragen zu Wärme und Maschinen.", "Answer questions about heat and machines.", "Válaszoljon a hővel és a gépekkel kapcsolatos kérdésekre.", "Răspundeți la întrebări despre căldură și mașini."),
        scenes: [
          {
            id: "ph-5-sr-3-s1",
            title: ml("Wippe", "Seesaw", "Likóka", "Balancă"),
            prompt: ml("Eine Wippe auf dem Spielplatz ist ein Beispiel für einen...", "A seesaw on the playground is an example of a...", "A játszótéren lévő libikóka egy példa arra, hogy...", "Un balansoar pe terenul de joacă este un exemplu de..."),
            sceneType: "community",
            visual: { icon: "⚖️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Flaschenzug", "Pulley pulley", "Szíjtárcsa", "Fulie de scripete") },
              { id: "b", label: ml("Zweiseitigen Hebel", "Two-sided lever", "Kétoldalas kar", "Pârghie pe două fețe") },
              { id: "c", label: ml("Einseitigen Hebel", "One-sided lever", "Egyoldalas kar", "Pârghie unilaterală") },
              { id: "d", label: ml("Keil", "Wedge", "Ék", "Pană") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Der Drehpunkt liegt zwischen den Kräften.", "Right! The pivot point lies between the forces.", "Rendben! A forgáspont az erők között van.", "Corect! Punctul de pivot se află între forțe."),
            failFeedback: ml("Nicht ganz, es ist ein zweiseitiger Hebel.", "Not quite, it's a two-sided lever.", "Nem egészen, ez egy kétirányú kar.", "Nu chiar, este o pârghie cu două sensuri.")
          },
          {
            id: "ph-5-sr-3-s2",
            title: ml("Eis", "Ice", "Jég", "Gheaţă"),
            prompt: ml("Bei welcher Temperatur schmilzt Eis (Celsius)?", "At what temperature does ice melt (Celsius)?", "Milyen hőmérsékleten olvad a jég (Celsius)?", "La ce temperatură se topește gheața (Celsius)?"),
            sceneType: "nature",
            visual: { icon: "🧊", bg: "#0891b2", accent: "#22d3ee" },
            choices: [
              { id: "a", label: ml("100°C", "100°C", "100°C", "100°C") },
              { id: "b", label: ml("-10°C", "-10°C", "-10°C", "-10°C") },
              { id: "c", label: ml("0°C", "0°C", "0°C", "0°C") },
              { id: "d", label: ml("50°C", "50°C", "50°C", "50°C") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Korrekt! 0°C ist der Schmelzpunkt von Wasser.", "Correct! 0°C is the melting point of water.", "Helyes! 0°C a víz olvadáspontja.", "Corect! 0°C este punctul de topire al apei."),
            failFeedback: ml("Falsch. Eis schmilzt bei 0°C.", "Incorrect. Ice melts at 0°C.", "Helytelen. A jég 0°C-on olvad.", "Incorect. Gheața se topește la 0°C.")
          },
          {
            id: "ph-5-sr-3-s3",
            title: ml("Ausdehnung", "Extension", "Bővítő", "Extensie"),
            prompt: ml("Was passiert mit den meisten Stoffen, wenn man sie erhitzt?", "What happens to most substances when you heat them?", "Mi történik a legtöbb anyaggal, ha felmelegítjük őket?", "Ce se întâmplă cu majoritatea substanțelor când le încălziți?"),
            sceneType: "community",
            visual: { icon: "🔥", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: ml("Sie dehnen sich aus.", "They expand.", "Kitágulnak.", "Ele se extind.") },
              { id: "b", label: ml("Sie ziehen sich zusammen.", "They contract.", "Összehúzódnak.", "Se contractă.") },
              { id: "c", label: ml("Sie werden schwerer.", "They become heavier.", "Nehezebbé válnak.", "Ele devin mai grele.") },
              { id: "d", label: ml("Sie werden unsichtbar.", "They become invisible.", "Láthatatlanná válnak.", "Ele devin invizibile.") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Genau! Teilchen bewegen sich schneller und brauchen mehr Platz.", "Exactly! Particles move faster and need more space.", "Pontosan! A részecskék gyorsabban mozognak, és több helyet igényelnek.", "Exact! Particulele se mișcă mai repede și au nevoie de mai mult spațiu."),
            failFeedback: ml("Leider falsch. Sie dehnen sich aus.", "Unfortunately wrong. They expand.", "Sajnos rossz. Kitágulnak.", "Din păcate, greșită. Se extind.")
          },
          {
            id: "ph-5-sr-3-s4",
            title: ml("Rolle", "Role", "Szerep", "Rol"),
            prompt: ml("Was ändert eine feste Rolle?", "What does a fixed role change?", "Mit változtat a rögzített szerep?", "Ce se schimbă un rol fix?"),
            sceneType: "community",
            visual: { icon: "🏗️", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Die Größe der Kraft", "The magnitude of the force", "Az erő nagysága", "Mărimea forței") },
              { id: "b", label: ml("Die Richtung der Kraft", "The direction of the force", "Az erő iránya", "Direcția forței") },
              { id: "c", label: ml("Das Gewicht der Last", "The weight of the load", "A rakomány súlya", "Greutatea încărcăturii") },
              { id: "d", label: ml("Die Masse", "The mass", "A tömeg", "Masa") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Stimmt! Sie macht die Arbeit leichter (z.B. nach unten ziehen).", "That's right! It makes the work easier (e.g. pulling down).", "Úgy van! Megkönnyíti a munkát (pl. lehúzás).", "Așa este! Ușurează munca (de exemplu, tragerea în jos)."),
            failFeedback: ml("Falsch, sie ändert nur die Zugrichtung.", "Wrong, it only changes the direction of pull.", "Rossz, csak a húzás irányát változtatja meg.", "Greșit, schimbă doar direcția de tragere.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-5-cb-1",
        title: ml("Kräfte der Natur", "Forces of nature", "természeti erők", "forte ale naturii"),
        instruction: ml("Ordne die Kräfte von der schwächsten zur stärksten (Beispielwerte).", "Order the forces from weakest to strongest (example values).", "Rendezze az erőket a leggyengébbtől a legerősebbig (példaértékek).", "Ordonează forțele de la cel mai slab la cel mai puternic (valori de exemplu)."),
        hint: "Reibung beim Schieben ist meist kleiner als das volle Gewicht.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "reib-p", label: ml("Reibungskraft (Heft auf Tisch)", "Frictional force (booklet on table)", "Súrlódási erő (füzet az asztalon)", "Forța de frecare (broșură pe masă)"), emoji: "🤝" },
          { id: "gewicht-p", label: ml("Gewichtskraft (Auto)", "Weight force (car)", "Súlyerő (autó)", "Forța de greutate (mașină)"), emoji: "⬇️" },
          { id: "feder-p", label: ml("Federkraft (Kugelschreiber)", "Spring force (ballpoint pen)", "Rugóerő (golyóstoll)", "Forța arcului (pix)"), emoji: "🌀" },
          { id: "magnet-p", label: ml("Magnetkraft (Kühlschrank)", "Magnetic force (refrigerator)", "Mágneses erő (hűtőszekrény)", "Forță magnetică (frigider)"), emoji: "🧲" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Schwächste", "1. Weakest", "1. Leggyengébb", "1. Cel mai slab") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Stärkste", "4. Strongest", "4. Legerősebb", "4. Cel mai puternic") }
        ],
        solution: ["feder-p", "reib-p", "magnet-p", "gewicht-p"]
      },
      {
        id: "ph-5-cb-2",
        title: ml("Temperaturen", "Temperatures", "Hőmérséklet", "Temperature"),
        instruction: ml("Ordne von kalt nach heiß.", "Order from cold to hot.", "Rendelés hidegről melegre.", "Comandă de la rece la cald."),
        hint: "Wasser kocht bei 100°C.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "eis", label: ml("Schmelzendes Eis (0°C)", "Melting ice (0°C)", "Olvadó jég (0°C)", "Topirea gheții (0°C)"), emoji: "🧊" },
          { id: "zimmer", label: ml("Zimmertemperatur (20°C)", "Room temperature (20°C)", "Szobahőmérséklet (20°C)", "Temperatura camerei (20°C)"), emoji: "🛋️" },
          { id: "sonne", label: ml("Sonnenoberfläche (5500°C)", "Sun surface (5500°C)", "Napfelület (5500°C)", "Suprafața soarelui (5500°C)"), emoji: "☀️" },
          { id: "kochen", label: ml("Kochendes Wasser (100°C)", "Boiling water (100°C)", "Forrásban lévő víz (100°C)", "Apă clocotită (100°C)"), emoji: "♨️" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Kalt", "1. Cold", "1. Hideg", "1. Frig") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Heiß", "4. Hot", "4. Forró", "4. Fierbinte") }
        ],
        solution: ["eis", "zimmer", "kochen", "sonne"]
      },
      {
        id: "ph-5-cb-3",
        title: ml("Geschwindigkeiten", "Speeds", "sebességek", "viteze"),
        instruction: ml("Ordne die Fortbewegungsmittel von langsam nach schnell.", "Arrange the means of transport from slow to fast.", "A szállítóeszközöket a lassútól a gyorsig rendezze.", "Aranjați mijloacele de transport de la lent la rapid."),
        hint: "Ein Flugzeug ist schneller als ein Auto.",
        theme: { bg: "#0f172a", accent: "#3b82f6", card: "#1c1917" },
        parts: [
          { id: "auto", label: ml("Auto auf Autobahn", "Car on the highway", "Autó az autópályán", "Mașină pe autostradă"), emoji: "🚗" },
          { id: "fuss", label: ml("Fußgänger", "Pedestrian", "Gyalogos", "Pieton"), emoji: "🚶" },
          { id: "flug", label: ml("Verkehrsflugzeug", "Airliner", "Verkehrsflugzeug", "avion de pasageri"), emoji: "✈️" },
          { id: "rad", label: ml("Fahrrad", "Bicycle", "Kerékpár", "Bicicleta"), emoji: "🚲" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Langsamste", "1. Slowest", "1. Leglassabb", "1. Cele mai lente") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Schnellste", "4. Fastest", "4. Leggyorsabb", "4. Cel mai rapid") }
        ],
        solution: ["fuss", "rad", "auto", "flug"]
      },
      {
        id: "ph-5-cb-4",
        title: ml("Kräfte der Natur (Pro)", "Forces of Nature (Pro)", "természetes erők (Pro)", "Forțele naturii (Pro)"),
        instruction: ml("Ordne die Kräfte von der schwächsten zur stärksten (Beispielwerte).", "Order the forces from weakest to strongest (example values).", "Rendezze az erőket a leggyengébbtől a legerősebbig (példaértékek).", "Ordonează forțele de la cel mai slab la cel mai puternic (valori de exemplu)."),
        hint: "Reibung beim Schieben ist meist kleiner als das volle Gewicht.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "reib-p", label: ml("Reibungskraft (Heft auf Tisch)", "Frictional force (booklet on table)", "Súrlódási erő (füzet az asztalon)", "Forța de frecare (broșură pe masă)"), emoji: "🤝" },
          { id: "gewicht-p", label: ml("Gewichtskraft (Auto)", "Weight force (car)", "Súlyerő (autó)", "Forța de greutate (mașină)"), emoji: "⬇️" },
          { id: "feder-p", label: ml("Federkraft (Kugelschreiber)", "Spring force (ballpoint pen)", "Rugóerő (golyóstoll)", "Forța arcului (pix)"), emoji: "🌀" },
          { id: "magnet-p", label: ml("Magnetkraft (Kühlschrank)", "Magnetic force (refrigerator)", "Mágneses erő (hűtőszekrény)", "Forță magnetică (frigider)"), emoji: "🧲" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Schwächste", "1. Weakest", "1. Leggyengébb", "1. Cel mai slab") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Stärkste", "4. Strongest", "4. Legerősebb", "4. Cel mai puternic") }
        ],
        solution: ["feder-p", "reib-p", "magnet-p", "gewicht-p"]
      },
      {
        id: "ph-5-cb-5",
        title: ml("Temperaturen (Pro)", "Temperatures (Pro)", "Hőmérséklet (Pro)", "Temperaturile (Pro)"),
        instruction: ml("Ordne von kalt nach heiß.", "Order from cold to hot.", "Rendelés hidegről melegre.", "Comandă de la rece la cald."),
        hint: "Wasser kocht bei 100°C.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "eis", label: ml("Schmelzendes Eis (0°C)", "Melting ice (0°C)", "Olvadó jég (0°C)", "Topirea gheții (0°C)"), emoji: "🧊" },
          { id: "zimmer", label: ml("Zimmertemperatur (20°C)", "Room temperature (20°C)", "Szobahőmérséklet (20°C)", "Temperatura camerei (20°C)"), emoji: "🛋️" },
          { id: "sonne", label: ml("Sonnenoberfläche (5500°C)", "Sun surface (5500°C)", "Napfelület (5500°C)", "Suprafața soarelui (5500°C)"), emoji: "☀️" },
          { id: "kochen", label: ml("Kochendes Wasser (100°C)", "Boiling water (100°C)", "Forrásban lévő víz (100°C)", "Apă clocotită (100°C)"), emoji: "♨️" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Kalt", "1. Cold", "1. Hideg", "1. Frig") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Heiß", "4. Hot", "4. Forró", "4. Fierbinte") }
        ],
        solution: ["eis", "zimmer", "kochen", "sonne"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-5-mr-1",
        title: ml("Physik-Begriffe merken", "Remember physics terms", "Emlékezzen a fizikai kifejezésekre", "Amintiți-vă termenii de fizică"),
        instruction: ml("Merke dir die Energieformen – wähle sie danach aus!", "Memorize the energy forms - choose them accordingly!", "-", "Amintiți-vă de formele de energie - alegeți-le în consecință!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "kin2", label: ml("Kinetische Energie", "Kinetic energy", "Kinetikus energia", "Energie cinetică"), emoji: "⚡" },
          { id: "pot2", label: ml("Potenzielle Energie", "Potential energy", "Potenciális energia", "Energie potențială"), emoji: "🧗" },
          { id: "waerme2", label: ml("Wärmeenergie", "Heat energy", "Hőenergia", "Energia termică"), emoji: "🔥" },
          { id: "elek2", label: ml("Elektrische Energie", "Electrical energy", "Elektromos energia", "Energie mecanică-electrică"), emoji: "💡" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Dichte", "Density", "Sűrűség", "Densitatea"), emoji: "🧱" },
          { id: "dec2", label: ml("Volumen", "Volume", "Hangerő", "Volum"), emoji: "📦" },
          { id: "dec3", label: ml("Masse", "Mass", "Tömeg", "Mass"), emoji: "⚖️" },
          { id: "dec4", label: ml("Druck", "Pressure", "Nyomás", "Presiune"), emoji: "🔩" },
          { id: "dec5", label: ml("Temperatur", "Temperature", "Hőmérséklet", "Temperatura"), emoji: "🌡️" }
        ]
      },
      {
        id: "ph-5-mr-2",
        title: ml("Maschinen-Radar", "Machine radar", "Gépi radar", "Radar-mașină"),
        instruction: ml("Merke dir die einfachen Maschinen – wähle sie danach aus!", "Note the simple machines - choose them accordingly!", "Jegyezze meg az egyszerű gépeket – ennek megfelelően válassza ki őket!", "Rețineți mașinile simple - alegeți-le în consecință!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#3b82f6", radar: "#1e3a5f" },
        targetItems: [
          { id: "hebel", label: ml("Hebel", "Levers", "Karok", "Pârghii"), emoji: "🕹️" },
          { id: "rolle", label: ml("Feste Rolle", "Fixed role", "Rögzített szerepkör", "Rol fix"), emoji: "🏗️" },
          { id: "schief", label: ml("Schiefe Ebene", "Inclined plane", "Dőléses sík", "Plan înclinat"), emoji: "📐" },
          { id: "keil", label: ml("Keil", "Wedge", "Ék", "Pană"), emoji: "🪓" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Magnet", "Magnet", "Mágnes", "Magnet"), emoji: "🧲" },
          { id: "dec2", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋" },
          { id: "dec3", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru"), emoji: "🌡️" },
          { id: "dec4", label: ml("Kompass", "Compass", "Irtű", "Busola"), emoji: "🧭" },
          { id: "dec5", label: ml("Linse", "Lens", "Lencse", "Lentilă"), emoji: "🔍" }
        ]
      },
      {
        id: "ph-5-mr-3",
        title: ml("Wärmequellen merken", "Note heat sources", "Megjegyzés a hőforrásokra", "Rețineți sursele de căldură"),
        instruction: ml("Merke dir Dinge, die Wärme abgeben!", "Note things that give off heat!", "Emlékezz olyan dolgokra, amelyek hőt bocsátanak ki!", "Amintiți-vă lucrurile care degajă căldură!"),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "sonne", label: ml("Sonne", "Sun", "Nap", "Soare"), emoji: "☀️" },
          { id: "feuer", label: ml("Lagerfeuer", "Campfire", "Tábortűz", "Normal</t44> <t45>Normal"), emoji: "🔥" },
          { id: "heizung", label: ml("Heizkörper", "Radiators", "Radiátorok", "Radiatoare"), emoji: "♨️" },
          { id: "reibung", label: ml("Reibung", "Friction", "Súrlódás", "Fricțiune"), emoji: "👏" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Eiswürfel", "Ice cubes", "Jégkockák", "Cuburi de gheață"), emoji: "🧊" },
          { id: "dec2", label: ml("Spiegel", "Mirror", "Tükör", "Oglindă"), emoji: "🪞" },
          { id: "dec3", label: ml("Schatten", "Shadow", "Árnyék", "Umbră"), emoji: "👤" },
          { id: "dec4", label: ml("Schnee", "Snow", "Hó", "Zăpadă"), emoji: "❄️" },
          { id: "dec5", label: ml("Wind", "Wind", "Szél", "Vântul"), emoji: "🌬️" }
        ]
      },
      {
        id: "ph-5-mr-4",
        title: ml("Physik-Begriffe merken (Pro)", "Memorize physics terms (Pro)", "Memorizálja a fizikai kifejezéseket (Pro)", "Memoriază termenii fizici (Pro)"),
        instruction: ml("Merke dir die Energieformen – wähle sie danach aus!", "Memorize the energy forms - choose them accordingly!", "-", "Amintiți-vă de formele de energie - alegeți-le în consecință!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "kin2", label: ml("Kinetische Energie", "Kinetic energy", "Kinetikus energia", "Energie cinetică"), emoji: "⚡" },
          { id: "pot2", label: ml("Potenzielle Energie", "Potential energy", "Potenciális energia", "Energie potențială"), emoji: "🧗" },
          { id: "waerme2", label: ml("Wärmeenergie", "Heat energy", "Hőenergia", "Energia termică"), emoji: "🔥" },
          { id: "elek2", label: ml("Elektrische Energie", "Electrical energy", "Elektromos energia", "Energie mecanică-electrică"), emoji: "💡" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Dichte", "Density", "Sűrűség", "Densitatea"), emoji: "🧱" },
          { id: "dec2", label: ml("Volumen", "Volume", "Hangerő", "Volum"), emoji: "📦" },
          { id: "dec3", label: ml("Masse", "Mass", "Tömeg", "Mass"), emoji: "⚖️" },
          { id: "dec4", label: ml("Druck", "Pressure", "Nyomás", "Presiune"), emoji: "🔩" },
          { id: "dec5", label: ml("Temperatur", "Temperature", "Hőmérséklet", "Temperatura"), emoji: "🌡️" }
        ]
      },
      {
        id: "ph-5-mr-5",
        title: ml("Maschinen-Radar (Pro)", "Machine radar (Pro)", "Gépi radar (Pro)", "Radar automat (Pro)"),
        instruction: ml("Merke dir die einfachen Maschinen – wähle sie danach aus!", "Note the simple machines - choose them accordingly!", "Jegyezze meg az egyszerű gépeket – ennek megfelelően válassza ki őket!", "Rețineți mașinile simple - alegeți-le în consecință!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#3b82f6", radar: "#1e3a5f" },
        targetItems: [
          { id: "hebel", label: ml("Hebel", "Levers", "Karok", "Pârghii"), emoji: "🕹️" },
          { id: "rolle", label: ml("Feste Rolle", "Fixed role", "Rögzített szerepkör", "Rol fix"), emoji: "🏗️" },
          { id: "schief", label: ml("Schiefe Ebene", "Inclined plane", "Dőléses sík", "Plan înclinat"), emoji: "📐" },
          { id: "keil", label: ml("Keil", "Wedge", "Ék", "Pană"), emoji: "🪓" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Magnet", "Magnet", "Mágnes", "Magnet"), emoji: "🧲" },
          { id: "dec2", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋" },
          { id: "dec3", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru"), emoji: "🌡️" },
          { id: "dec4", label: ml("Kompass", "Compass", "Irtű", "Busola"), emoji: "🧭" },
          { id: "dec5", label: ml("Linse", "Lens", "Lencse", "Lentilă"), emoji: "🔍" }
        ]
      }
    ]
  },
  6: {
    grade: 6,
    meteorCatch: [
      {
        id: "ph-6-mc-1",
        title: ml("Elektrische Leiter", "Electrical conductors", "Villanyvezetők", "Conductori electrici"),
        prompt: ml("Fange nur Stoffe ein, die Strom leiten!", "Only capture substances that conduct electricity!", "Csak az áramot vezető anyagokat fogja fel!", "Captați numai substanțe care conduc electricitatea!"),
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#eab308", accent: "#fde047" },
        correctItems: [
          { id: "kupfer", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "silber", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "gold", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🥇" },
          { id: "alu", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "salz", label: ml("Salzwasser", "Salt water", "Sós víz", "Apă sărată"), emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵" },
          { id: "x2", label: ml("Gummi", "Rubber", "Gumi", "Cauciuc"), emoji: "🛞" },
          { id: "x3", label: ml("Plastik", "Plastic", "Műanyag", "Plastic"), emoji: "🧴" },
          { id: "x4", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🪟" }
        ]
      },
      {
        id: "ph-6-mc-2",
        title: ml("Magnetische Stoffe", "Magnetic substances", "Mágneses anyagok", "Substanțe magnetice"),
        prompt: ml("Fange nur magnetische Materialien ein!", "Capture only magnetic materials!", "Csak mágneses anyagokat rögzítsen!", "Captați numai materiale magnetice!"),
        goal: 4,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "nickel", label: ml("Nickel", "Nickel", "nikkel", "nichel"), emoji: "🪙" },
          { id: "kobalt", label: ml("Kobalt", "Cobalt", "Kobalt", "Cobalt"), emoji: "🪨" },
          { id: "stahl", label: ml("Stahl", "Steel", "Acél", "Oțel"), emoji: "🏗️" }
        ],
        wrongItems: [
          { id: "x5", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "x6", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "x7", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "x8", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🥇" }
        ]
      },
      {
        id: "ph-6-mc-3",
        title: ml("Druck erhöhen", "Increase pressure", "Nyomásnövelés", "Crește presiunea"),
        prompt: ml("Fange Objekte ein, die viel Druck erzeugen!", "Capture objects that create a lot of pressure!", "Rögzítsen olyan objektumokat, amelyek nagy nyomást okoznak!", "Capturați obiecte care creează multă presiune!"),
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#a855f7", accent: "#c084fc" },
        correctItems: [
          { id: "nadel", label: ml("Nadel", "Needle", "tű", "ac"), emoji: "🪡" },
          { id: "messer", label: ml("Scharfes Messer", "Sharp knife", "Éles kés", "Cuțit ascuțit"), emoji: "🔪" },
          { id: "nagel", label: ml("Nagel", "Nail", "Szög", "Cuie"), emoji: "📌" },
          { id: "absatz", label: ml("Stöckelschuh", "High heels", "Magassarkú", "Tocuri înalte"), emoji: "👠" },
          { id: "stift", label: ml("Spitzer Bleistift", "Sharpened pencil", "Kihegyezett ceruza", "Creion ascuțit"), emoji: "✏️" }
        ],
        wrongItems: [
          { id: "x9", label: ml("Schneeschuh", "Snowshoe", "Hócipő", "Racheta de zăpadă"), emoji: "🥾" },
          { id: "x10", label: ml("Breiter Reifen", "Wide tire", "Széles gumiabroncs", "Anvelopa lată"), emoji: "🚜" },
          { id: "x11", label: ml("Skier", "Skis", "Sílécek", "Schiuri"), emoji: "🎿" }
        ]
      },
      {
        id: "ph-6-mc-4",
        title: ml("Elektrische Leiter (Pro)", "Electrical Conductors (Pro)", "Elektromos vezetők (Pro)", "Conductori electrici (Pro)"),
        prompt: ml("Fange nur Stoffe ein, die Strom leiten!", "Only capture substances that conduct electricity!", "Csak az áramot vezető anyagokat fogja fel!", "Captați numai substanțe care conduc electricitatea!"),
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#eab308", accent: "#fde047" },
        correctItems: [
          { id: "kupfer", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "silber", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "gold", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🥇" },
          { id: "alu", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "salz", label: ml("Salzwasser", "Salt water", "Sós víz", "Apă sărată"), emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵" },
          { id: "x2", label: ml("Gummi", "Rubber", "Gumi", "Cauciuc"), emoji: "🛞" },
          { id: "x3", label: ml("Plastik", "Plastic", "Műanyag", "Plastic"), emoji: "🧴" },
          { id: "x4", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🪟" }
        ]
      },
      {
        id: "ph-6-mc-5",
        title: ml("Magnetische Stoffe (Pro)", "Magnetic substances (Pro)", "Mágneses anyagok (Pro)", "Substanțe magnetice (Pro)"),
        prompt: ml("Fange nur magnetische Materialien ein!", "Capture only magnetic materials!", "Csak mágneses anyagokat rögzítsen!", "Captați numai materiale magnetice!"),
        goal: 4,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "nickel", label: ml("Nickel", "Nickel", "nikkel", "nichel"), emoji: "🪙" },
          { id: "kobalt", label: ml("Kobalt", "Cobalt", "Kobalt", "Cobalt"), emoji: "🪨" },
          { id: "stahl", label: ml("Stahl", "Steel", "Acél", "Oțel"), emoji: "🏗️" }
        ],
        wrongItems: [
          { id: "x5", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "x6", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "x7", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "x8", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🥇" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-6-os-1",
        title: ml("Schwimmen oder Sinken", "Swimming or sinking", "Úszás vagy süllyedés", "Înot sau scufundare"),
        instruction: ml("Sortiere, ob der Gegenstand in Wasser schwimmt oder sinkt.", "Sort whether the object floats or sinks in water.", "Válogassa meg, hogy a tárgy lebeg-e vagy süllyed-e a vízben.", "apă în apă"),
        theme: { bg: "#0f172a", orbit: "#3b82f6", accent: "#60a5fa" },
        buckets: [
          { id: "schwimmt", label: ml("Schwimmt", "Floats", "Úszók", "Plutitoare"), color: "#10b981" },
          { id: "sinkt", label: ml("Sinkt", "Sinks", "Süllyesztők", "Se scufundă"), color: "#ef4444" }
        ],
        items: [
          { id: "holz", label: ml("Holzblock", "Wooden block", "Fa tömb", "Bloc de lemn"), emoji: "🪵", bucketId: "schwimmt" },
          { id: "korken", label: ml("Korken", "Cork", "Parafa", "Ptă"), emoji: "🍾", bucketId: "schwimmt" },
          { id: "luft", label: ml("Luftballon", "Air balloon", "Légballon", "Baloane cu aer"), emoji: "🎈", bucketId: "schwimmt" },
          { id: "eisen", label: ml("Eisennagel", "Iron nail", "Vasszeg", "Cui de fier"), emoji: "📌", bucketId: "sinkt" },
          { id: "stein", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨", bucketId: "sinkt" },
          { id: "gold", label: ml("Goldmünze", "Gold coin", "Arany érme", "Moneda de aur"), emoji: "🪙", bucketId: "sinkt" }
        ]
      },
      {
        id: "ph-6-os-2",
        title: ml("Stromkreis-Teile", "Circuit parts", "Árkör/másodperc-frekvencia (", "Părți ale circuitului"),
        instruction: ml("Ist es eine Stromquelle oder ein Verbraucher?", "Is it a power source or a consumer?", "Ez áramforrás vagy fogyasztó?", "Este o sursă de energie sau un consumator?"),
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "quelle", label: ml("Stromquelle", "Power source", "Áramforrás", "Sursa de energie"), color: "#f59e0b" },
          { id: "verbr", label: ml("Verbraucher", "Consumers", "Fogyasztók", "Consumatorii"), color: "#a855f7" }
        ],
        items: [
          { id: "batt", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋", bucketId: "quelle" },
          { id: "akku", label: ml("Akku", "Battery pack", "Akkumulátor", "Pachet de baterii"), emoji: "📱", bucketId: "quelle" },
          { id: "solar", label: ml("Solarzelle", "Solar cell", "Napelem", "Celula solară"), emoji: "☀️", bucketId: "quelle" },
          { id: "lampe", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡", bucketId: "verbr" },
          { id: "motor", label: ml("Elektromotor", "Electric motor", "Elektromos motor", "Motor electric"), emoji: "⚙️", bucketId: "verbr" },
          { id: "heiz", label: ml("Heizspirale", "Heating coil", "Fűtőtekercs", "Bobina de încălzire"), emoji: "♨️", bucketId: "verbr" },
          { id: "led", label: ml("LED", "LED", "Vagy a magas talajnyomást?</t51> <", "LED"), emoji: "🚦", bucketId: "verbr" }
        ]
      },
      {
        id: "ph-6-os-3",
        title: ml("Pole des Magneten", "Pole of the magnet", "A mágnes pólusa", "Polul magnetului"),
        instruction: ml("Ziehen sie sich an oder stoßen sie sich ab?", "Do they attract or repel each other?", "Vonzzák vagy taszítják egymást?", "Se atrag sau se resping reciproc?"),
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "anziehung", label: ml("Ziehen sich an", "Pull yourself", "Húzd ki magad", "Trage-te"), color: "#10b981" },
          { id: "abstoss", label: ml("Stoßen sich ab", "Repel each other", "Taszítják egymást", "Se resping reciproc"), color: "#ef4444" }
        ],
        items: [
          { id: "ns", label: ml("Nord und Süd", "North and south", "Észak és Dél", "Nord și Sud"), emoji: "🧲", bucketId: "anziehung" },
          { id: "sn", label: ml("Süd und Nord", "South and North", "Dél és észak", "Sud și Nord"), emoji: "🧲", bucketId: "anziehung" },
          { id: "nn", label: ml("Nord und Nord", "North and North", "Észak és észak", "Nord și Nord"), emoji: "🛑", bucketId: "abstoss" },
          { id: "ss", label: ml("Süd und Süd", "South and south", "Dél és dél", "Sud și sud"), emoji: "🛑", bucketId: "abstoss" }
        ]
      },
      {
        id: "ph-6-os-4",
        title: ml("Schwimmen oder Sinken (Pro)", "Swim or sink (Pro)", "Úszni vagy süllyedni (Pro)", "Îoată sau scufundă (Pro)"),
        instruction: ml("Sortiere, ob der Gegenstand in Wasser schwimmt oder sinkt.", "Sort whether the object floats or sinks in water.", "Válogassa meg, hogy a tárgy lebeg-e vagy süllyed-e a vízben.", "apă în apă"),
        theme: { bg: "#0f172a", orbit: "#3b82f6", accent: "#60a5fa" },
        buckets: [
          { id: "schwimmt", label: ml("Schwimmt", "Floats", "Úszók", "Plutitoare"), color: "#10b981" },
          { id: "sinkt", label: ml("Sinkt", "Sinks", "Süllyesztők", "Se scufundă"), color: "#ef4444" }
        ],
        items: [
          { id: "holz", label: ml("Holzblock", "Wooden block", "Fa tömb", "Bloc de lemn"), emoji: "🪵", bucketId: "schwimmt" },
          { id: "korken", label: ml("Korken", "Cork", "Parafa", "Ptă"), emoji: "🍾", bucketId: "schwimmt" },
          { id: "luft", label: ml("Luftballon", "Air balloon", "Légballon", "Baloane cu aer"), emoji: "🎈", bucketId: "schwimmt" },
          { id: "eisen", label: ml("Eisennagel", "Iron nail", "Vasszeg", "Cui de fier"), emoji: "📌", bucketId: "sinkt" },
          { id: "stein", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨", bucketId: "sinkt" },
          { id: "gold", label: ml("Goldmünze", "Gold coin", "Arany érme", "Moneda de aur"), emoji: "🪙", bucketId: "sinkt" }
        ]
      },
      {
        id: "ph-6-os-5",
        title: ml("Stromkreis-Teile (Pro)", "Circuit Parts (Pro)", "Az áramkör részei (Pro)", "Piese de circuit (Pro)"),
        instruction: ml("Ist es eine Stromquelle oder ein Verbraucher?", "Is it a power source or a consumer?", "Ez áramforrás vagy fogyasztó?", "Este o sursă de energie sau un consumator?"),
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "quelle", label: ml("Stromquelle", "Power source", "Áramforrás", "Sursa de energie"), color: "#f59e0b" },
          { id: "verbr", label: ml("Verbraucher", "Consumers", "Fogyasztók", "Consumatorii"), color: "#a855f7" }
        ],
        items: [
          { id: "batt", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋", bucketId: "quelle" },
          { id: "akku", label: ml("Akku", "Battery pack", "Akkumulátor", "Pachet de baterii"), emoji: "📱", bucketId: "quelle" },
          { id: "solar", label: ml("Solarzelle", "Solar cell", "Napelem", "Celula solară"), emoji: "☀️", bucketId: "quelle" },
          { id: "lampe", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡", bucketId: "verbr" },
          { id: "motor", label: ml("Elektromotor", "Electric motor", "Elektromos motor", "Motor electric"), emoji: "⚙️", bucketId: "verbr" },
          { id: "heiz", label: ml("Heizspirale", "Heating coil", "Fűtőtekercs", "Bobina de încălzire"), emoji: "♨️", bucketId: "verbr" },
          { id: "led", label: ml("LED", "LED", "Vagy a magas talajnyomást?</t51> <", "LED"), emoji: "🚦", bucketId: "verbr" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-6-sr-1",
        title: ml("Physik-Sprint K6 - Druck", "Physics Sprint K6 - Pressure", "Fizika Sprint K6 - Nyomás", "Physics Sprint K6 - Presiune"),
        instruction: ml("Beantworte Fragen zum Thema Druck.", "Answer questions about pressure.", "Válaszoljon a nyomással kapcsolatos kérdésekre.", "Răspundeți la întrebările despre presiune."),
        scenes: [
          {
            id: "ph-6-sr-1-s1",
            title: ml("Druck berechnen", "Calculate pressure", "Nyomásszámítás", "Calculați presiunea"),
            prompt: ml("Wie lautet die Formel für den Druck (p)?", "What is the formula for the pressure (p)?", "Mi a nyomás (p) képlete?", "Care este formula pentru presiunea (p)?"),
            sceneType: "community",
            visual: { icon: "📐", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("p = F * A", "p = F * A", "p = F * A", "p = F * A") },
              { id: "b", label: ml("p = m / V", "p = m / V", "p = m / V", "p = m / V") },
              { id: "c", label: ml("p = F / A", "p = F / A", "p = F/A", "p = F/A") },
              { id: "d", label: ml("p = m * g", "p = m * g", "p = m * g", "p = m * g") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig! Druck = Kraft geteilt durch Fläche.", "Correct! Pressure = force divided by area.", "Helyes! Nyomás = erő osztva a területtel.", "Corect! Presiune = forța împărțită la suprafață."),
            failFeedback: ml("Nicht ganz. p = F / A.", "Not quite. p = F / A.", "Nem egészen. p = F / A.", "Nu chiar. p = F / A.")
          },
          {
            id: "ph-6-sr-1-s2",
            title: ml("Schneeschuhe", "Snowshoes", "Hócipők", "Rachete de zăpadă"),
            prompt: ml("Warum sinkt man mit Schneeschuhen im Schnee nicht ein?", "Why don't you sink in the snow with snowshoes?", "Miért nem süllyedsz el a hóban hócipővel?", "De ce nu te scufunzi în zăpadă cu rachetele de zăpadă?"),
            sceneType: "nature",
            visual: { icon: "🥾", bg: "#0f766e", accent: "#2dd4bf" },
            choices: [
              { id: "a", label: ml("Weil die Masse kleiner wird.", "Because the mass becomes smaller.", "Mert a tömeg egyre kisebb lesz.", "Pentru că masa devine mai mică.") },
              { id: "b", label: ml("Weil die Fläche größer und der Druck kleiner ist.", "Because the area is larger and the pressure is smaller.", "Mivel nagyobb a terület és kisebb a nyomás.", "Deoarece suprafața este mai mare și presiunea este mai mică.") },
              { id: "c", label: ml("Weil die Schuhe warm sind.", "Because the shoes are warm.", "Mert a cipő meleg.", "Pentru că pantofii sunt caldi.") },
              { id: "d", label: ml("Weil die Kraft größer wird.", "Because the force increases.", "Mert az erő növekszik.", "Pentru că puterea crește.") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Korrekt! Größere Fläche = kleinerer Druck.", "Correct! Larger area = smaller pressure.", "Helyes! Nagyobb terület = kisebb nyomás.", "Corect! Suprafață mai mare = presiune mai mică."),
            failFeedback: ml("Falsch. Die größere Fläche verringert den Druck.", "Incorrect. The larger area reduces the pressure.", "Helytelen. A nagyobb terület csökkenti a nyomást.", "Incorect. Suprafața mai mare reduce presiunea.")
          },
          {
            id: "ph-6-sr-1-s3",
            title: ml("Luftdruck", "Air pressure", "Légnyomás", "Presiunea aerului"),
            prompt: ml("Was misst ein Barometer?", "What does a barometer measure?", "Mit mér a barométer?", "Ce măsoară un barometru?"),
            sceneType: "nature",
            visual: { icon: "🌤️", bg: "#0369a1", accent: "#38bdf8" },
            choices: [
              { id: "a", label: ml("Temperatur", "Temperature", "Hőmérséklet", "Temperatura") },
              { id: "b", label: ml("Luftdruck", "Air pressure", "Légnyomás", "Presiunea aerului") },
              { id: "c", label: ml("Schweredruck", "Gravity pressure", "Gravitációs nyomás", "Presiune gravitațională") },
              { id: "d", label: ml("Windgeschwindigkeit", "Wind speed", "szélsebesség", "viteza vântului") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Genau! Es misst den atmosphärischen Druck.", "Exactly! It measures atmospheric pressure.", "Pontosan! Légköri nyomást mér.", "Exact! Măsoară presiunea atmosferică."),
            failFeedback: ml("Leider falsch. Ein Barometer misst den Luftdruck.", "Unfortunately wrong. A barometer measures the air pressure.", "Sajnos rossz. Barométer méri a légnyomást.", "Din păcate, greșită. Un barometru măsoară presiunea aerului.")
          },
          {
            id: "ph-6-sr-1-s4",
            title: ml("Auftrieb", "Buoyancy", "Felhajtóerő", "Plotibilitate"),
            prompt: ml("Wann schwimmt ein Körper im Wasser?", "When does a body float in water?", "Mikor úszik egy test a vízben?", "Când plutește un corp în apă?"),
            sceneType: "nature",
            visual: { icon: "🚢", bg: "#1e40af", accent: "#60a5fa" },
            choices: [
              { id: "a", label: ml("Wenn Auftrieb = Gewichtskraft", "If buoyancy = weight", "Ha felhajtóerő = súly", "Dacă flotabilitatea = greutatea") },
              { id: "b", label: ml("Wenn Auftrieb < Gewichtskraft", "If buoyancy < weight force", "Ha felhajtóerő < súlyerő", "Dacă flotabilitate <weight force") },
              { id: "c", label: ml("Wenn er keine Masse hat", "If it has no mass", "Ha nincs tömege", "Dacă nu are masă") },
              { id: "d", label: ml("Wenn das Wasser kalt ist", "When the water is cold", "Ha hideg a víz", "Când apa este rece") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Stimmt! Kräftegleichgewicht lässt den Körper schwimmen.", "That's right! Balance of forces allows the body to float.", "Úgy van! Az erők egyensúlya lehetővé teszi a test lebegését.", "Așa este! Echilibrul de forțe permite corpului să plutească."),
            failFeedback: ml("Falsch. Er schwimmt, wenn beide Kräfte gleich groß sind.", "Wrong. It swims when both forces are equal.", "W? Úszik, ha mindkét erő egyenlő.", "Incorect. Înoată când ambele forțe sunt egale.")
          }
        ]
      },
      {
        id: "ph-6-sr-2",
        title: ml("Physik-Sprint K6 - Elektrizität", "Physics Sprint K6 - Electricity", "Fizika Sprint K6 - Villany", "Fizica Sprint K6 - Electricitate"),
        instruction: ml("Beantworte Fragen zur Elektrizitätslehre.", "Answer questions about electricity.", "Válaszoljon az elektromossággal kapcsolatos kérdésekre.", "Răspundeți la întrebări despre electricitate."),
        scenes: [
          {
            id: "ph-6-sr-2-s1",
            title: ml("Stromkreis", "Electric circuit", "Elektromos áramkör", "Circuit electric"),
            prompt: ml("Aus welchen 3 Dingen besteht ein einfacher Stromkreis?", "What 3 things make up a simple circuit?", "Mi 3 dolog alkot egy egyszerű áramkört?", "Care 3 lucruri alcătuiesc un circuit simplu?"),
            sceneType: "community",
            visual: { icon: "🔋", bg: "#854d0e", accent: "#facc15" },
            choices: [
              { id: "a", label: ml("Batterie, Wasser, Schalter", "Battery, water, switch", "Akkumulátor, víz, kapcsoló", "Baterie, apă, comutator") },
              { id: "b", label: ml("Spule, Magnet, Kabel", "Coil, magnet, cable", "Tekercs, mágnes, kábel", "Bobină, magnet, cablu") },
              { id: "c", label: ml("Stromquelle, Leiter, Verbraucher", "Power source, conductor, consumer", "Áramforrás, vezető, fogyasztó", "Sursă de energie, conductor, consumator") },
              { id: "d", label: ml("Lampe, Motor, Heizung", "Lamp, motor, heater", "Lámpa, motor, fűtés", "Lampa, motor, încălzitor") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig! Ohne diese drei gibt es keinen Stromfluss.", "Right! Without these three there is no flow of electricity.", "Rendben! E három nélkül nincs elektromos áram.", "Corect! Fără acestea trei nu există flux de energie electrică."),
            failFeedback: ml("Falsch. Quelle, Leiter und Verbraucher (Lampe) sind nötig.", "Incorrect. Source, conductor and consumer (lamp) are necessary.", "Hibás. Forrás, vezető és fogyasztó (lámpa) szükséges.", "Incorect. Sursa, conductorul și consumatorul (lampa) sunt necesare.")
          },
          {
            id: "ph-6-sr-2-s2",
            title: ml("Spannung", "Voltage", "Feszültség", "Tensiune"),
            prompt: ml("Was gibt die elektrische Spannung an und in welcher Einheit?", "What does the electrical voltage indicate and in which unit?", "Mit jelez az elektromos feszültség és melyik mértékegységben?", "Ce indică tensiunea electrică și în ce unitate?"),
            sceneType: "community",
            visual: { icon: "⚡", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: ml("Den Antrieb des Stroms in Volt (V)", "The drive of the current in volts (V)", "Az áram meghajtása voltban (V)", "Conducerea curentului în volți (V)") },
              { id: "b", label: ml("Die Menge der Elektronen in Ampere (A)", "The amount of electrons in amperes (A)", "Az elektronok mennyisége amperben (A)", "Cantitatea de electroni în amperi (A)") },
              { id: "c", label: ml("Den Widerstand in Ohm (Ω)", "The resistance in ohms (Ω)", "Az ellenállás ohmban (Ω)", "Rezistența în ohmi (Ω)") },
              { id: "d", label: ml("Die Leistung in Watt (W)", "The power in watts (W)", "A teljesítmény wattban (W)", "Puterea în wați (W)") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Korrekt! Volt ist die Einheit der Spannung.", "Correct! Volt is the unit of voltage.", "Helyes! A volt a feszültség mértékegysége.", "Corect! Voltul este unitatea de tensiune."),
            failFeedback: ml("Nicht ganz. Spannung wird in Volt gemessen.", "Not quite. Voltage is measured in volts.", "Nem egészen. A feszültséget voltban mérik.", "Nu chiar. Tensiunea se măsoară în volți.")
          },
          {
            id: "ph-6-sr-2-s3",
            title: ml("Leiter", "Conductor", "vezető", "Conductor"),
            prompt: ml("Welches Material leitet elektrischen Strom besonders gut?", "Which material conducts electricity particularly well?", "Melyik anyag vezeti különösen jól az elektromosságot?", "Care material conduce electricitatea deosebit de bine?"),
            sceneType: "community",
            visual: { icon: "🥉", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Holz", "Wood", "Fa", "Lemn") },
              { id: "b", label: ml("Kupfer", "Copper", "Réz", "Cupru") },
              { id: "c", label: ml("Glas", "Glass", "Üveg", "Sticlă") },
              { id: "d", label: ml("Plastik", "Plastic", "Műanyag", "Plastic") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Genau! Metalle wie Kupfer sind exzellente Leiter.", "Exactly! Metals like copper are excellent conductors.", "Pontosan! Az olyan fémek, mint a réz, kiváló vezetők.", "Exact! Metalele precum cuprul sunt conductori excelenți."),
            failFeedback: ml("Leider falsch. Kupfer ist der gute Leiter.", "Unfortunately wrong. Copper is the good conductor.", "Sajnos rossz. A réz a jó vezető.", "Din păcate, greșit. Cuprul este bunul conductor.")
          },
          {
            id: "ph-6-sr-2-s4",
            title: ml("Schaltung", "Circuit", "Árkör", "Circuit"),
            prompt: ml("Was passiert in einer Reihenschaltung, wenn eine Lampe kaputt geht?", "What happens in a series circuit if a lamp breaks?", "Mi történik soros áramkörben, ha egy lámpa elromlik?", "Ce se întâmplă într-un circuit în serie dacă o lampă se rupe?"),
            sceneType: "community",
            visual: { icon: "💡", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Die anderen leuchten heller.", "The others shine brighter.", "A többi fényesebben világít.", "Ceilalți strălucesc mai puternic.") },
              { id: "b", label: ml("Nichts, sie leuchten weiter.", "Nothing, they continue to glow.", "Semmi, továbbra is világítanak.", "Nimic, continuă să strălucească.") },
              { id: "c", label: ml("Alle Lampen gehen aus.", "All lamps go out.", "Minden lámpa kialszik.", "Toate lămpile se sting.") },
              { id: "d", label: ml("Sie beginnen zu blinken.", "They start flashing.", "Elkezdenek villogni.", "Încep să clipească.") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Stimmt! Der Stromkreis ist dann unterbrochen.", "That's right! The circuit is then interrupted.", "Így van! Az áramkör ekkor megszakad.", "Așa este! Circuitul este apoi întrerupt."),
            failFeedback: ml("Falsch. Der Stromkreis ist unterbrochen, alle gehen aus.", "False. The circuit is broken, everyone goes out.", "Hamis. Az áramkör megszakad, mindenki kialszik.", "Fals. Circuitul este stricat, toată lumea se stinge.")
          }
        ]
      },
      {
        id: "ph-6-sr-3",
        title: ml("Physik-Sprint K6 - Magnetismus", "Physics Sprint K6 - Magnetism", "Fizika Sprint K6 - Mágnesesség", "Physics Sprint K6 - Magnetism"),
        instruction: ml("Beantworte Fragen zu Magneten.", "Answer questions about magnets.", "Válaszoljon a mágnesekkel kapcsolatos kérdésekre.", "Răspundeți la întrebările despre magneți."),
        scenes: [
          {
            id: "ph-6-sr-3-s1",
            title: ml("Pole", "Pole", "Pólus", "Pol"),
            prompt: ml("Was passiert, wenn sich zwei Nordpole nähern?", "What happens when two north poles approach each other?", "Mi történik, ha két északi pólus közeledik egymáshoz?", "Ce se întâmplă când doi poli nordici se apropie unul de celălalt?"),
            sceneType: "community",
            visual: { icon: "🧲", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: ml("Sie ziehen sich an.", "They attract each other.", "Vonzzák egymást.", "Se atrag reciproc.") },
              { id: "b", label: ml("Sie stoßen sich ab.", "They repel each other.", "Taszítják egymást.", "Se resping reciproc.") },
              { id: "c", label: ml("Sie werden entmagnetisiert.", "They are demagnetized.", "Lemágnesezve vannak.", "Sunt demagnetizate.") },
              { id: "d", label: ml("Nichts passiert.", "Nothing happens.", "Nem történik semmi.", "Nu se întâmplă nimic.") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Gleichnamige Pole stoßen sich ab.", "Correct! Poles of the same name repel each other.", "Egyébként! Az azonos nevű lengyelek taszítják egymást.", "Corect! Polii cu același nume se resping reciproc."),
            failFeedback: ml("Falsch. Sie stoßen sich ab.", "Incorrect. They repel each other.", "Hibás. Egymást taszítják.", "Incorect. Se resping reciproc.")
          },
          {
            id: "ph-6-sr-3-s2",
            title: ml("Material", "Material", "Anyag", "Material"),
            prompt: ml("Welches der folgenden Metalle ist magnetisch?", "Which of the following metals is magnetic?", "A következő fémek közül melyik mágneses?", "Care dintre următoarele metale este magnetic?"),
            sceneType: "community",
            visual: { icon: "🔩", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu") },
              { id: "b", label: ml("Kupfer", "Copper", "Réz", "Cupru") },
              { id: "c", label: ml("Eisen", "Iron", "Vas", "Fier") },
              { id: "d", label: ml("Silber", "Silver", "Ezüst", "Argintul") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Korrekt! Eisen, Nickel und Kobalt sind ferromagnetisch.", "Correct! Iron, nickel and cobalt are ferromagnetic.", "Helyes! A vas, a nikkel és a kobalt ferromágnesesek.", "Corect! Fierul, nichelul și cobaltul sunt feromagnetice."),
            failFeedback: ml("Nicht ganz. Eisen ist das magnetische Metall.", "Not quite. Iron is the magnetic metal.", "Nem egészen. A vas a mágneses fém.", "<t13>. Fierul este metalul magnetic.")
          },
          {
            id: "ph-6-sr-3-s3",
            title: ml("Teilen", "Share", "Részesedés", "Share"),
            prompt: ml("Was passiert, wenn man einen Stabmagneten in der Mitte zerbricht?", "What happens if you break a bar magnet in half?", "Mi történik, ha kettétörik egy rúdmágnest?", "Ce se întâmplă dacă rupeți un magnet de bară în jumătate?"),
            sceneType: "community",
            visual: { icon: "⚡", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Man erhält einen Nordpol und einen Südpol.", "You get a north pole and a south pole.", "Kapsz egy északi és egy déli sarkot.", "Obțineți un pol nord și un pol sud.") },
              { id: "b", label: ml("Der Magnet verliert seine Kraft.", "The magnet loses its power.", "A mágnes elveszti erejét.", "Magnetul își pierde puterea.") },
              { id: "c", label: ml("Man erhält zwei neue, vollständige Magnete.", "You get two new, complete magnets.", "Két új, komplett mágnest kap.", "Aveți doi magneți noi, completi.") },
              { id: "d", label: ml("Er wird heiß.", "It gets hot.", "Melegszik.", "Se încălzește.") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Genau! Jeder Teil hat wieder einen Nord- und Südpol.", "Exactly! Each part has a north and south pole.", "Pontosan! Mindegyik résznek van egy északi és déli pólusa.", "Exact! Fiecare parte are un pol nord și un pol sud."),
            failFeedback: ml("Leider falsch. Es entstehen zwei komplette neue Magnete.", "Unfortunately wrong. Two completely new magnets are created.", "Sajnos rosszul. Két teljesen új mágnes készül.", "Din păcate, greșit. Sunt creați doi magneți complet noi.")
          },
          {
            id: "ph-6-sr-3-s4",
            title: ml("Erde", "Earth", "Föld", "Pământ"),
            prompt: ml("Wo befindet sich der magnetische Südpol der Erde?", "Where is the Earth's magnetic south pole?", "Hol van a Föld mágneses déli pólusa?", "Unde este polul sud magnetic al Pământului?"),
            sceneType: "nature",
            visual: { icon: "🌍", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Am Äquator", "At the equator", "Az Egyenlítőn", "La ecuator") },
              { id: "b", label: ml("In der Nähe des geografischen Nordpols", "Near the geographic North Pole", "A földrajzi Északi-sark közelében", "Aproape de Polul Nord geografic") },
              { id: "c", label: ml("In der Nähe des geografischen Südpols", "Near the geographical south pole", "A földrajzi déli pólus közelében", "Aproape de polul sud geografic") },
              { id: "d", label: ml("Im Erdkern", "In the Earth's core", "A Föld magjában", "În miezul Pământului") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Stimmt! Deshalb zeigt die Nord-Nadel des Kompasses dorthin.", "That's right! That's why the north needle of the compass points there.", "Úgy van! Ezért mutat oda az iránytű északi tűje.", "Așa este! De aceea, acul nordic al busolei indică acolo."),
            failFeedback: ml("Falsch. Er ist nahe dem geografischen Nordpol.", "Incorrect. It is near the geographic North Pole.", "Helytelen. A földrajzi Északi-sark közelében található.", "Incorect. Este aproape de Polul Nord geografic.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-6-cb-1",
        title: ml("Dichte von Stoffen", "Density of substances", "Anyagok sűrűsége", "Densitatea substanțelor"),
        instruction: ml("Ordne von der geringsten zur höchsten Dichte.", "Order from least to highest density.", "Rendelés a legkisebbtől a legnagyobb sűrűségig.", "Comandați de la cea mai mică la cea mai mare densitate."),
        hint: "Gold ist extrem schwer für sein Volumen.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "wasser", label: ml("Wasser (1 g/cm³)", "Water (1 g/cm³)", "Víz (1 g/cm³)", "Apă (1 g/cm³)"), emoji: "💧" },
          { id: "gold", label: ml("Gold (19,3 g/cm³)", "Gold (19.3 g/cm³)", "Arany (19,3 g/cm³)", "Aur (19,3 g/cm³)"), emoji: "🪙" },
          { id: "holz", label: ml("Holz (ca. 0,6 g/cm³)", "Wood (approx. 0.6 g/cm³)", "Fa (kb. 0,6 g/cm³)", "Lemn (aproximativ 0,6 g/cm³)"), emoji: "🪵" },
          { id: "eisen", label: ml("Eisen (7,9 g/cm³)", "Iron (7.9 g/cm³)", "Vas (7,9 g/cm³)", "Fier (7,9 g/cm³)"), emoji: "🔩" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Geringste Dichte", "1. Lowest Density", "1. Legalacsonyabb sűrűségű", "1. Cea mai mică densitate") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchste Dichte", "4. Highest density", "4. Legnagyobb sűrűség", "4. Cea mai mare densitate") }
        ],
        solution: ["holz", "wasser", "eisen", "gold"]
      },
      {
        id: "ph-6-cb-2",
        title: ml("Leitfähigkeit", "Conductivity", "Vezetőképesség", "Conductivitate"),
        instruction: ml("Ordne vom schlechtesten zum besten elektrischen Leiter.", "Order from worst to best electrical conductor.", "Rendezés a legrosszabbtól a legjobb elektromos vezetőig.", "Ordonează de la cel mai rău la cel mai bun conductor electric."),
        hint: "Metalle leiten am besten, Gummi isoliert.",
        theme: { bg: "#0f172a", accent: "#8b5cf6", card: "#1c1917" },
        parts: [
          { id: "salz", label: ml("Salzwasser (mäßiger Leiter)", "Salt water (moderate Conductor)", "Sós víz (mérsékelt vezető)", "Apă sărată (conductor moderat)"), emoji: "🌊" },
          { id: "gummi", label: ml("Gummi (Isolator)", "Rubber (Insulator)", "gumi (szigetelő)", "Cauciuc (izolator)"), emoji: "🛞" },
          { id: "eisen", label: ml("Eisen (guter Leiter)", "Iron (good conductor)", "Vas (jó vezető)", "Fier (bun conductor)"), emoji: "🏗️" },
          { id: "kupfer", label: ml("Kupfer (sehr guter Leiter)", "Copper (very good conductor)", "Réz (nagyon jó vezető)", "Cupru (foarte bun conductor)"), emoji: "🥉" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Schlecht (Isolator)", "1. Bad (insulator)", "1. Rossz (szigetelő)", "1. Defect (izolator)") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Bester Leiter", "4. Best conductor", "4. Legjobb vezető", "4. Cel mai bun dirijor") }
        ],
        solution: ["gummi", "salz", "eisen", "kupfer"]
      },
      {
        id: "ph-6-cb-3",
        title: ml("Druck im Alltag", "Pressure in everyday life", "Nyomás a mindennapi életben", "Presiunea în viața de zi cu zi"),
        instruction: ml("Ordne von geringem Druck auf den Boden zu hohem Druck.", "Order low pressure on the ground to high pressure.", "Állítson alacsony talajnyomásról magas nyomásra.", "Aranjați de la presiune scăzută pe sol la presiune ridicată."),
        hint: "Je spitzer, desto höher der Druck.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "nadel", label: ml("Stecknadelspitze", "Pin tip", "Tűs hegy", "Vârf știft"), emoji: "📌" },
          { id: "schnee", label: ml("Schneeschuhe", "Snowshoes", "Hócipők", "Rachete de zăpadă"), emoji: "🥾" },
          { id: "absatz", label: ml("Stöckelschuh", "High heels", "Magassarkú", "Tocuri înalte"), emoji: "👠" },
          { id: "turn", label: ml("Turnschuh", "Sneakers", "Cipők", "Adidași"), emoji: "👟" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Geringster Druck", "1. Lowest Pressure", "1. Legalacsonyabb nyomás", "1. Cea mai scăzută presiune") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchster Druck", "4. Highest pressure", "4. Legmagasabb nyomás", "4. Cea mai mare presiune") }
        ],
        solution: ["schnee", "turn", "absatz", "nadel"]
      },
      {
        id: "ph-6-cb-4",
        title: ml("Dichte von Stoffen (Pro)", "Density of substances (Pro)", "Az anyagok sűrűsége (Pro)", "Densitatea substanțelor (Pro)"),
        instruction: ml("Ordne von der geringsten zur höchsten Dichte.", "Order from least to highest density.", "Rendelés a legkisebbtől a legnagyobb sűrűségig.", "Comandați de la cea mai mică la cea mai mare densitate."),
        hint: "Gold ist extrem schwer für sein Volumen.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "wasser", label: ml("Wasser (1 g/cm³)", "Water (1 g/cm³)", "Víz (1 g/cm³)", "Apă (1 g/cm³)"), emoji: "💧" },
          { id: "gold", label: ml("Gold (19,3 g/cm³)", "Gold (19.3 g/cm³)", "Arany (19,3 g/cm³)", "Aur (19,3 g/cm³)"), emoji: "🪙" },
          { id: "holz", label: ml("Holz (ca. 0,6 g/cm³)", "Wood (approx. 0.6 g/cm³)", "Fa (kb. 0,6 g/cm³)", "Lemn (aproximativ 0,6 g/cm³)"), emoji: "🪵" },
          { id: "eisen", label: ml("Eisen (7,9 g/cm³)", "Iron (7.9 g/cm³)", "Vas (7,9 g/cm³)", "Fier (7,9 g/cm³)"), emoji: "🔩" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Geringste Dichte", "1. Lowest Density", "1. Legalacsonyabb sűrűségű", "1. Cea mai mică densitate") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchste Dichte", "4. Highest density", "4. Legnagyobb sűrűség", "4. Cea mai mare densitate") }
        ],
        solution: ["holz", "wasser", "eisen", "gold"]
      },
      {
        id: "ph-6-cb-5",
        title: ml("Leitfähigkeit (Pro)", "Conductivity (Pro)", "Vezetőképesség (Pro)", "Conductivitate (Pro)"),
        instruction: ml("Ordne vom schlechtesten zum besten elektrischen Leiter.", "Order from worst to best electrical conductor.", "Rendezés a legrosszabbtól a legjobb elektromos vezetőig.", "Ordonează de la cel mai rău la cel mai bun conductor electric."),
        hint: "Metalle leiten am besten, Gummi isoliert.",
        theme: { bg: "#0f172a", accent: "#8b5cf6", card: "#1c1917" },
        parts: [
          { id: "salz", label: ml("Salzwasser (mäßiger Leiter)", "Salt water (moderate Conductor)", "Sós víz (mérsékelt vezető)", "Apă sărată (conductor moderat)"), emoji: "🌊" },
          { id: "gummi", label: ml("Gummi (Isolator)", "Rubber (Insulator)", "gumi (szigetelő)", "Cauciuc (izolator)"), emoji: "🛞" },
          { id: "eisen", label: ml("Eisen (guter Leiter)", "Iron (good conductor)", "Vas (jó vezető)", "Fier (bun conductor)"), emoji: "🏗️" },
          { id: "kupfer", label: ml("Kupfer (sehr guter Leiter)", "Copper (very good conductor)", "Réz (nagyon jó vezető)", "Cupru (foarte bun conductor)"), emoji: "🥉" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Schlecht (Isolator)", "1. Bad (insulator)", "1. Rossz (szigetelő)", "1. Defect (izolator)") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Bester Leiter", "4. Best conductor", "4. Legjobb vezető", "4. Cel mai bun dirijor") }
        ],
        solution: ["gummi", "salz", "eisen", "kupfer"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-6-mr-1",
        title: ml("Magnetische Metalle", "Magnetic metals", "Mágneses fémek", "Metale magnetice"),
        instruction: ml("Merke dir die ferromagnetischen Stoffe!", "Note the ferromagnetic ones Fabrics!", "Emlékezzen a ferromágneses anyagokra!", "Amintiți-vă de substanțele feromagnetice!"),
        flashDurationMs: 4000,
        selectionLimit: 3,
        theme: { bg: "#0f172a", accent: "#8b5cf6", radar: "#4c1d95" },
        targetItems: [
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "nickel", label: ml("Nickel", "Nickel", "nikkel", "nichel"), emoji: "🪙" },
          { id: "kobalt", label: ml("Kobalt", "Cobalt", "Kobalt", "Cobalt"), emoji: "🪨" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "dec2", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "dec3", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🥇" },
          { id: "dec4", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "dec5", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵" }
        ]
      },
      {
        id: "ph-6-mr-2",
        title: ml("Gute Leiter", "Good conductors", "Jó vezetők", "Bun conductori"),
        instruction: ml("Merke dir die guten elektrischen Leiter!", "Remember the good electrical conductors!", "Emlékezz a jó elektromos vezetőkre!", "Amintiți-vă de conductoarele electrice bune!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#facc15", radar: "#854d0e" },
        targetItems: [
          { id: "kupfer", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "alu", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "silber", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "salz", label: ml("Salzwasser", "Salt water", "Sós víz", "Apă sărată"), emoji: "🌊" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Plastik", "Plastic", "Műanyag", "Plastic"), emoji: "🧴" },
          { id: "dec2", label: ml("Gummi", "Rubber", "Gumi", "Cauciuc"), emoji: "🛞" },
          { id: "dec3", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🪟" },
          { id: "dec4", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵" },
          { id: "dec5", label: ml("Papier", "Paper", "Papír", "Hârtie"), emoji: "📄" }
        ]
      },
      {
        id: "ph-6-mr-3",
        title: ml("Hoher Druck", "High pressure", "Magas nyomás</t6>milyen jó az elektromosság", "Presiune înaltă"),
        instruction: ml("Merke dir Gegenstände, die viel Druck auf den Boden ausüben!", "Note objects that exert a lot of pressure on the ground!", "Emlékezzen azokra a tárgyakra, amelyek nagy nyomást gyakorolnak a padlóra!", "Amintiți-vă de obiectele care pun multă presiune pe podea!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "nadel", label: ml("Stecknadel", "Pin", "pin", "pin"), emoji: "📌" },
          { id: "messer", label: ml("Scharfes Messer", "Sharp knife", "Éles kés", "Cuțit ascuțit"), emoji: "🔪" },
          { id: "nagel", label: ml("Eisennagel", "Iron nail", "Vasszeg", "Cui de fier"), emoji: "🔨" },
          { id: "absatz", label: ml("Stöckelschuh", "High heels", "Magassarkú", "Tocuri înalte"), emoji: "👠" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Schneeschuh", "Snowshoe", "Hócipő", "Racheta de zăpadă"), emoji: "🥾" },
          { id: "dec2", label: ml("Traktorreifen", "Tractor tires", "Traktor gumiabroncsok", "Anvelope de tractor"), emoji: "🚜" },
          { id: "dec3", label: ml("Skier", "Skis", "Sílécek", "Schiuri"), emoji: "🎿" },
          { id: "dec4", label: ml("Luftballon", "Air balloon", "Légballon", "Baloane cu aer"), emoji: "🎈" },
          { id: "dec5", label: ml("Kissen", "Cushion", "Milyen energiája van a kerékpárnak egy 2 párnának?</t</t1> <t22>Emelési munka</t22> <t23>Atomépítő elemek</t23> <t24>Sajnos hibás. Mértékegysége watt (W).</t24> <t25>Átlátszó</t25> <t26>Atomhéj</t26> <t27>Mit mér a barométer?</t27> <t28>Lassú oszcilláció</t28> <t29>Jegyezze meg azokat a tárgyakat, amelyek nagy nyomást gyakorolnak a talajra!", "Pernă"), emoji: "🛌" }
        ]
      },
      {
        id: "ph-6-mr-4",
        title: ml("Magnetische Metalle (Pro)", "Magnetic metals (Pro)", "Mágneses fémek (Pro)", "Metale magnetice (Pro)"),
        instruction: ml("Merke dir die ferromagnetischen Stoffe!", "Note the ferromagnetic ones Fabrics!", "Emlékezzen a ferromágneses anyagokra!", "Amintiți-vă de substanțele feromagnetice!"),
        flashDurationMs: 4000,
        selectionLimit: 3,
        theme: { bg: "#0f172a", accent: "#8b5cf6", radar: "#4c1d95" },
        targetItems: [
          { id: "eisen", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "nickel", label: ml("Nickel", "Nickel", "nikkel", "nichel"), emoji: "🪙" },
          { id: "kobalt", label: ml("Kobalt", "Cobalt", "Kobalt", "Cobalt"), emoji: "🪨" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "dec2", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "dec3", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🥇" },
          { id: "dec4", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "dec5", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵" }
        ]
      },
      {
        id: "ph-6-mr-5",
        title: ml("Gute Leiter (Pro)", "Good conductor (Pro)", "Jó vezető (Pro)", "Bun dirijor (Pro)"),
        instruction: ml("Merke dir die guten elektrischen Leiter!", "Remember the good electrical conductors!", "Emlékezz a jó elektromos vezetőkre!", "Amintiți-vă de conductoarele electrice bune!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#facc15", radar: "#854d0e" },
        targetItems: [
          { id: "kupfer", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "alu", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" },
          { id: "silber", label: ml("Silber", "Silver", "Ezüst", "Argintul"), emoji: "🥈" },
          { id: "salz", label: ml("Salzwasser", "Salt water", "Sós víz", "Apă sărată"), emoji: "🌊" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Plastik", "Plastic", "Műanyag", "Plastic"), emoji: "🧴" },
          { id: "dec2", label: ml("Gummi", "Rubber", "Gumi", "Cauciuc"), emoji: "🛞" },
          { id: "dec3", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🪟" },
          { id: "dec4", label: ml("Holz", "Wood", "Fa", "Lemn"), emoji: "🪵" },
          { id: "dec5", label: ml("Papier", "Paper", "Papír", "Hârtie"), emoji: "📄" }
        ]
      }
    ]
  },
  7: {
    grade: 7,
    meteorCatch: [
      {
        id: "ph-7-mc-1",
        title: ml("Lichtquellen", "Light sources", "Fényforrások", "Surse de lumină"),
        prompt: ml("Fange nur selbstleuchtende Lichtquellen ein!", "Only capture self-illuminating light sources!", "Csak az önvilágító fényforrásokat rögzítse!", "Captați doar sursele de lumină cu auto-iluminare!"),
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "sonne", label: ml("Sonne", "Sun", "Nap", "Soare"), emoji: "☀️" },
          { id: "kerze", label: ml("Kerze", "Candle", "Gyertya", "Lumânare"), emoji: "🕯️" },
          { id: "lampe", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡" },
          { id: "stern", label: ml("Stern", "Star", "Csillag", "Start"), emoji: "⭐" },
          { id: "feuer", label: ml("Lagerfeuer", "Campfire", "Tábortűz", "Normal</t44> <t45>Normal"), emoji: "🔥" },
          { id: "led", label: ml("LED-Diode", "LED diode", "LED dióda", "Diodă LED"), emoji: "🚦" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Mond", "Moon", "Hold", "Luna"), emoji: "🌕" },
          { id: "x2", label: ml("Spiegel", "Mirror", "Tükör", "Oglindă"), emoji: "🪞" },
          { id: "x3", label: ml("Buch", "Book", "Könyv", "Rezervați"), emoji: "📖" },
          { id: "x4", label: ml("Reflektor", "Reflector", "reflektor", "reflector"), emoji: "🚲" }
        ]
      },
      {
        id: "ph-7-mc-2",
        title: ml("Schallerzeuger", "Sound generator", "hanggenerátor", "generator de sunet"),
        prompt: ml("Fange nur Dinge ein, die Schall erzeugen!", "Only capture things that produce sound!", "Csak olyan dolgokat rögzítsen, amelyek hangot adnak!", "Captați doar lucruri care produc sunet!"),
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "stimmgabel", label: ml("Stimmgabel", "Tuning fork", "Hangvilla", "Diapazor"), emoji: "🪚" },
          { id: "lautsprecher", label: ml("Lautsprecher", "Speaker", "L Távolság</t1>10 Hangszóró", "Difuzoare"), emoji: "🔊" },
          { id: "gitarre", label: ml("Gitarrensaite", "Guitar string", "Gitárhúr", "Corzi de chitară"), emoji: "🎸" },
          { id: "trommel", label: ml("Trommel", "Drum", "Dob", "Tambur"), emoji: "🥁" },
          { id: "stimme", label: ml("Menschliche Stimme", "Human voice", "Emberi hang", "Float"), emoji: "🗣️" }
        ],
        wrongItems: [
          { id: "x5", label: ml("Vakuum", "Vacuum", "Vákuum", "Vidul"), emoji: "🌌" },
          { id: "x6", label: ml("Lichtstrahl", "Light beam", "Fénysugár", "Fascicul luminos"), emoji: "🔦" },
          { id: "x7", label: ml("Schatten", "Shadow", "Árnyék", "Umbră"), emoji: "👤" }
        ]
      },
      {
        id: "ph-7-mc-3",
        title: ml("Arbeit & Leistung", "Work & Power", "Munka és teljesítmény", "Munca și putere"),
        prompt: ml("Fange nur Einheiten für Arbeit und Leistung ein!", "Capture only units for work and power!", "Csak a munka- és áramforrást rögzítse!", "Captați numai unități pentru muncă și energie!"),
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#10b981", accent: "#34d399" },
        correctItems: [
          { id: "joule", label: ml("Joule (J)", "Joule (J)", "Joule (J)", "Joule (J)"), emoji: "⚡" },
          { id: "watt", label: ml("Watt (W)", "Watt (W)", "Watt (W)", "Watt (W)"), emoji: "🔌" },
          { id: "kilowatt", label: ml("Kilowatt (kW)", "Kilowatt (kW)", "kilowatt (kW)", "kilowați (kW)"), emoji: "🏭" },
          { id: "newtonmeter", label: ml("Newtonmeter (Nm)", "Newton meters (Nm)", "Newtonméter (Nm)", "Newtoni metri (Nm)"), emoji: "📏" }
        ],
        wrongItems: [
          { id: "x8", label: ml("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)"), emoji: "🍎" },
          { id: "x9", label: ml("Volt (V)", "Volt (V)", "Volt (V)", "Volt (V)"), emoji: "🔋" },
          { id: "x10", label: ml("Ampere (A)", "Ampere (A)", "Amper (A)", "Amperi (A)"), emoji: "🌊" }
        ]
      },
      {
        id: "ph-7-mc-4",
        title: ml("Lichtquellen (Pro)", "Light sources (Pro)", "Fényforrások (Pro)", "Surse de lumină (Pro)"),
        prompt: ml("Fange nur selbstleuchtende Lichtquellen ein!", "Only capture self-illuminating light sources!", "Csak az önvilágító fényforrásokat rögzítse!", "Captați doar sursele de lumină cu auto-iluminare!"),
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "sonne", label: ml("Sonne", "Sun", "Nap", "Soare"), emoji: "☀️" },
          { id: "kerze", label: ml("Kerze", "Candle", "Gyertya", "Lumânare"), emoji: "🕯️" },
          { id: "lampe", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡" },
          { id: "stern", label: ml("Stern", "Star", "Csillag", "Start"), emoji: "⭐" },
          { id: "feuer", label: ml("Lagerfeuer", "Campfire", "Tábortűz", "Normal</t44> <t45>Normal"), emoji: "🔥" },
          { id: "led", label: ml("LED-Diode", "LED diode", "LED dióda", "Diodă LED"), emoji: "🚦" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Mond", "Moon", "Hold", "Luna"), emoji: "🌕" },
          { id: "x2", label: ml("Spiegel", "Mirror", "Tükör", "Oglindă"), emoji: "🪞" },
          { id: "x3", label: ml("Buch", "Book", "Könyv", "Rezervați"), emoji: "📖" },
          { id: "x4", label: ml("Reflektor", "Reflector", "reflektor", "reflector"), emoji: "🚲" }
        ]
      },
      {
        id: "ph-7-mc-5",
        title: ml("Schallerzeuger (Pro)", "Sound generator (Pro)", "Hanggenerátor (Pro)", "Generator de sunet (Pro)"),
        prompt: ml("Fange nur Dinge ein, die Schall erzeugen!", "Only capture things that produce sound!", "Csak olyan dolgokat rögzítsen, amelyek hangot adnak!", "Captați doar lucruri care produc sunet!"),
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "stimmgabel", label: ml("Stimmgabel", "Tuning fork", "Hangvilla", "Diapazor"), emoji: "🪚" },
          { id: "lautsprecher", label: ml("Lautsprecher", "Speaker", "L Távolság</t1>10 Hangszóró", "Difuzoare"), emoji: "🔊" },
          { id: "gitarre", label: ml("Gitarrensaite", "Guitar string", "Gitárhúr", "Corzi de chitară"), emoji: "🎸" },
          { id: "trommel", label: ml("Trommel", "Drum", "Dob", "Tambur"), emoji: "🥁" },
          { id: "stimme", label: ml("Menschliche Stimme", "Human voice", "Emberi hang", "Float"), emoji: "🗣️" }
        ],
        wrongItems: [
          { id: "x5", label: ml("Vakuum", "Vacuum", "Vákuum", "Vidul"), emoji: "🌌" },
          { id: "x6", label: ml("Lichtstrahl", "Light beam", "Fénysugár", "Fascicul luminos"), emoji: "🔦" },
          { id: "x7", label: ml("Schatten", "Shadow", "Árnyék", "Umbră"), emoji: "👤" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-7-os-1",
        title: ml("Lichtdurchlässigkeit", "Light transmission", "Fényáteresztés", "Transmisia luminii"),
        instruction: ml("Ist das Material lichtdurchlässig oder undurchlässig?", "Is the material translucent or opaque?", "Az anyag áttetsző vagy átlátszatlan?", "Materialul este translucid sau opac?"),
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "durch", label: ml("Lichtdurchlässig", "Translucent", "Átlátszó", "Translucid"), color: "#3b82f6" },
          { id: "undurch", label: ml("Lichtundurchlässig", "Opaque", "Átlátszatlan", "Opac"), color: "#64748b" }
        ],
        items: [
          { id: "glas", label: ml("Fensterglas", "Window glass", "Ablaküveg", "Sticlă pentru fereastră"), emoji: "🪟", bucketId: "durch" },
          { id: "wasser", label: ml("Klares Wasser", "Clear water", "Tiszta víz", "Apa limpede"), emoji: "💧", bucketId: "durch" },
          { id: "luft", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨", bucketId: "durch" },
          { id: "holz", label: ml("Holzbrett", "Wooden board", "Falap", "Placă de lemn"), emoji: "🪵", bucketId: "undurch" },
          { id: "stein", label: ml("Ziegelstein", "Brick", "Tégla", "Caramida"), emoji: "🧱", bucketId: "undurch" },
          { id: "pappe", label: ml("Karton", "Cardboard", "Karton", "Cartonul"), emoji: "📦", bucketId: "undurch" }
        ]
      },
      {
        id: "ph-7-os-2",
        title: ml("Töne sortieren", "Sort sounds", "Hangok rendezése", "Sortați sunetele"),
        instruction: ml("Gehört die Eigenschaft zu einem hohen oder tiefen Ton?", "Does the property belong to a high or low tone?", "Magas vagy alacsony tónushoz tartozik az ingatlan?", "Aparține proprietatea unui ton înalt sau scăzut?"),
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "hoch", label: ml("Hoher Ton", "High tone", "Magas hangszín", "Ton înalt"), color: "#ec4899" },
          { id: "tief", label: ml("Tiefer Ton", "Low tone", "Mély hangszín", "Ton scăzut"), color: "#3b82f6" }
        ],
        items: [
          { id: "kurz", label: ml("Kurze Schallwellen", "Short sound waves", "Rövid hanghullámok", "Unde sonore scurte"), emoji: "〰️", bucketId: "hoch" },
          { id: "schnell", label: ml("Schnelle Schwingung", "Fast oscillation", "Gyors oszcilláció", "Oscilație rapidă"), emoji: "⚡", bucketId: "hoch" },
          { id: "hfrequenz", label: ml("Hohe Frequenz", "High frequency", "Magas frekvencia", "Frecvență înaltă"), emoji: "📈", bucketId: "hoch" },
          { id: "lang", label: ml("Lange Schallwellen", "Long sound waves", "Hosszú hanghullámok", "Unde sonore lungi"), emoji: "🌊", bucketId: "tief" },
          { id: "langsam", label: ml("Langsame Schwingung", "Slow oscillation", "Lassú oszcilláció", "Oscilatie lentă"), emoji: "🐢", bucketId: "tief" },
          { id: "nfrequenz", label: ml("Niedrige Frequenz", "Low frequency", "Alacsony frekvencia", "Frecvență joasă"), emoji: "📉", bucketId: "tief" }
        ]
      },
      {
        id: "ph-7-os-3",
        title: ml("Arbeit vs. Leistung", "Work vs. Performance", "Munka kontra teljesítmény", "Muncă vs performanță"),
        instruction: ml("Gehört der Begriff zur mechanischen Arbeit oder zur Leistung?", "Does the term belong to mechanical work or performance?", "A kifejezés mechanikai munkára vagy teljesítményre vonatkozik?", "Termenul aparține lucrărilor mecanice sau performanței?"),
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "arbeit", label: ml("Arbeit (W)", "Work (W)", "Munka (W)", "Lucrul (W)"), color: "#f59e0b" },
          { id: "leistung", label: ml("Leistung (P)", "Power (P)", "Teljesítmény (P)", "Putere (P)"), color: "#ef4444" }
        ],
        items: [
          { id: "joule", label: ml("Einheit: Joule (J)", "Unit: Joule (J)", "Mértékegység: Joule (J)", "Unitate: Joule (J)"), emoji: "⚡", bucketId: "arbeit" },
          { id: "kraftweg", label: ml("Kraft mal Weg", "Force times distance", "Erőszer távolság", "Forța ori distanța"), emoji: "📏", bucketId: "arbeit" },
          { id: "hub", label: ml("Hubarbeit", "Lifting work", "Emelési munka", "munca de ridicare"), emoji: "🏗️", bucketId: "arbeit" },
          { id: "watt", label: ml("Einheit: Watt (W)", "Unit: Watt (W)", "Mértékegysége: Watt (W)", "Unitate: Watt (W)"), emoji: "💡", bucketId: "leistung" },
          { id: "arbeittime", label: ml("Arbeit pro Zeit", "Work per time", "Időben működik", "Lucrează pe timp"), emoji: "⏱️", bucketId: "leistung" },
          { id: "schnell", label: ml("Wie schnell Arbeit verrichtet wird", "How quickly work is done", "Milyen gyorsan történik a munka.", "Cât de repede se lucrează"), emoji: "🏃", bucketId: "leistung" }
        ]
      },
      {
        id: "ph-7-os-4",
        title: ml("Lichtdurchlässigkeit (Pro)", "Translucency (Pro)", "Translucencia (Pro)", "Transluciditate (Pro)"),
        instruction: ml("Ist das Material lichtdurchlässig oder undurchlässig?", "Is the material translucent or opaque?", "Az anyag áttetsző vagy átlátszatlan?", "Materialul este translucid sau opac?"),
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "durch", label: ml("Lichtdurchlässig", "Translucent", "Átlátszó", "Translucid"), color: "#3b82f6" },
          { id: "undurch", label: ml("Lichtundurchlässig", "Opaque", "Átlátszatlan", "Opac"), color: "#64748b" }
        ],
        items: [
          { id: "glas", label: ml("Fensterglas", "Window glass", "Ablaküveg", "Sticlă pentru fereastră"), emoji: "🪟", bucketId: "durch" },
          { id: "wasser", label: ml("Klares Wasser", "Clear water", "Tiszta víz", "Apa limpede"), emoji: "💧", bucketId: "durch" },
          { id: "luft", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨", bucketId: "durch" },
          { id: "holz", label: ml("Holzbrett", "Wooden board", "Falap", "Placă de lemn"), emoji: "🪵", bucketId: "undurch" },
          { id: "stein", label: ml("Ziegelstein", "Brick", "Tégla", "Caramida"), emoji: "🧱", bucketId: "undurch" },
          { id: "pappe", label: ml("Karton", "Cardboard", "Karton", "Cartonul"), emoji: "📦", bucketId: "undurch" }
        ]
      },
      {
        id: "ph-7-os-5",
        title: ml("Töne sortieren (Pro)", "Sorting tones (Pro)", "Tónusok rendezése (Pro)", "Sortarea tonurilor (Pro)"),
        instruction: ml("Gehört die Eigenschaft zu einem hohen oder tiefen Ton?", "Does the property belong to a high or low tone?", "Magas vagy alacsony tónushoz tartozik az ingatlan?", "Aparține proprietatea unui ton înalt sau scăzut?"),
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "hoch", label: ml("Hoher Ton", "High tone", "Magas hangszín", "Ton înalt"), color: "#ec4899" },
          { id: "tief", label: ml("Tiefer Ton", "Low tone", "Mély hangszín", "Ton scăzut"), color: "#3b82f6" }
        ],
        items: [
          { id: "kurz", label: ml("Kurze Schallwellen", "Short sound waves", "Rövid hanghullámok", "Unde sonore scurte"), emoji: "〰️", bucketId: "hoch" },
          { id: "schnell", label: ml("Schnelle Schwingung", "Fast oscillation", "Gyors oszcilláció", "Oscilație rapidă"), emoji: "⚡", bucketId: "hoch" },
          { id: "hfrequenz", label: ml("Hohe Frequenz", "High frequency", "Magas frekvencia", "Frecvență înaltă"), emoji: "📈", bucketId: "hoch" },
          { id: "lang", label: ml("Lange Schallwellen", "Long sound waves", "Hosszú hanghullámok", "Unde sonore lungi"), emoji: "🌊", bucketId: "tief" },
          { id: "langsam", label: ml("Langsame Schwingung", "Slow oscillation", "Lassú oszcilláció", "Oscilatie lentă"), emoji: "🐢", bucketId: "tief" },
          { id: "nfrequenz", label: ml("Niedrige Frequenz", "Low frequency", "Alacsony frekvencia", "Frecvență joasă"), emoji: "📉", bucketId: "tief" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-7-sr-1",
        title: ml("Physik-Sprint K7 - Optik", "Physics Sprint K7 - Optics", "Fizika Sprint K7 – Optika", "Physics Sprint K7 - Optics"),
        instruction: ml("Löse Aufgaben zum Licht.", "Solve problems about light.", "Fénnyel kapcsolatos problémák megoldása.", "Rezolvați problemele legate de lumină."),
        scenes: [
          {
            id: "ph-7-sr-1-s1",
            title: ml("Ausbreitung", "Propagation", "Terjedés", "Propagare"),
            prompt: ml("Wie breitet sich Licht im Vakuum aus?", "How does light propagate in a vacuum?", "Hogyan terjed a fény vákuumban?", "Cum se propagă lumina în vid?"),
            sceneType: "nature",
            visual: { icon: "🔦", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("In Kurven", "In curves", "Görbékben", "În curbe") },
              { id: "b", label: ml("Geradlinig", "Straight line", "Egyenes vonal", "Linie dreaptă") },
              { id: "c", label: ml("Gar nicht", "Not at all", "Egyáltalán nem", "Nici deloc") },
              { id: "d", label: ml("Zickzack", "Zigzag", "Cikcakk", "Zigzag") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Lichtstrahlen verlaufen geradlinig.", "Correct! Light rays run in a straight line.", "Helyes! A fénysugarak egyenes vonalban futnak.", "Corecta! Razele de lumină circulă în linie dreaptă."),
            failFeedback: ml("Falsch. Licht breitet sich geradlinig aus.", "Wrong. Light propagates in a straight line.", "Helytelen. A fény egyenes vonalban halad.", "Incorect. Lumina se deplasează în linie dreaptă.")
          },
          {
            id: "ph-7-sr-1-s2",
            title: ml("Reflexion", "Reflection", "Reflexió", "Reflexie"),
            prompt: ml("Wie lautet das Reflexionsgesetz am ebenen Spiegel?", "What is the law of reflection on a plane mirror?", "Mi a visszaverődés törvénye egy síktükörön?", "Care este legea reflexiei pe o oglindă plană?"),
            sceneType: "community",
            visual: { icon: "🪞", bg: "#0891b2", accent: "#22d3ee" },
            choices: [
              { id: "a", label: ml("Einfallswinkel = Ausfallswinkel", "Angle of incidence = angle of reflection", "Beesési szög = visszaverődési szög", "Unghi de incidență = unghi de reflexie") },
              { id: "b", label: ml("Einfallswinkel > Ausfallswinkel", "Angle of incidence > Angle of reflection", "Beesési szög > Visszaverődési szög", "Unghi de incidență > Unghi de reflexie") },
              { id: "c", label: ml("Einfallswinkel < Ausfallswinkel", "Angle of incidence < Angle of reflection", "Beesési szög < Visszaverődési szög", "Unghi de incidență < Unghi de reflexie") },
              { id: "d", label: ml("Es gibt keinen Ausfallswinkel", "There is no angle of reflection", "Nincs visszaverődési szög", "Nu există unghi de reflexie") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Korrekt! α = α'", "Correct! α = α'", "Helyes! α = α'", "Corect! α = α'"),
            failFeedback: ml("Nicht ganz. Beide Winkel sind exakt gleich groß.", "Not quite. Both angles are exactly the same size.", "Nem egészen. Mindkét szög pontosan azonos méretű.", "Nu chiar. Ambele unghiuri au exact aceeași dimensiune.")
          },
          {
            id: "ph-7-sr-1-s3",
            title: ml("Linsen", "Lenses", "Lencsék", "Lentile"),
            prompt: ml("Was macht eine Sammellinse (konvexe Linse)?", "What does a converging lens (convex lens) do?", "Mit csinál a konvergáló lencse (konvex lencse)?", "Ce face o lentilă convergentă (lentila convexă)?"),
            sceneType: "community",
            visual: { icon: "🔍", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Sie streut das Licht.", "It scatters the light.", "Szórja a fényt.", "Imprăștie lumina.") },
              { id: "b", label: ml("Sie bündelt das Licht in einem Brennpunkt.", "It focuses the light in a focal point.", "A fényt egy fókuszpontba fókuszálja.", "Concentrează lumina într-un punct focal.") },
              { id: "c", label: ml("Sie verschluckt das Licht.", "It swallows the light.", "Elnyeli a fényt.", "Înghite lumina.") },
              { id: "d", label: ml("Sie ändert die Farbe des Lichts.", "It changes the color of the light.", "Megváltoztatja a fény színét.", "Se schimbă culoarea luminii.") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Genau! Parallele Strahlen treffen sich im Brennpunkt.", "Exactly! Parallel beams meet at the focal point.", "Pontosan! A gyújtópontban párhuzamos nyalábok találkoznak.", "Exact! Fasciculele paralele se întâlnesc la punctul focal."),
            failFeedback: ml("Leider falsch. Sie bündelt das Licht.", "Unfortunately wrong. It focuses the light.", "Sajnos rossz. Fókuszálja a fényt.", "Din păcate, greșit. Acesta concentrează lumina.")
          },
          {
            id: "ph-7-sr-1-s4",
            title: ml("Brechung", "Refraction", "Refrakció", "Refracție"),
            prompt: ml("Warum sieht ein Strohhalm im Wasserglas 'geknickt' aus?", "Why does a straw in a glass of water look 'kinked'?", "Miért tűnik „megtörtnek” egy szívószál egy pohár vízben?", "De ce un pai într-un pahar cu apă arată „încovoiat”?"),
            sceneType: "community",
            visual: { icon: "🥤", bg: "#0369a1", accent: "#38bdf8" },
            choices: [
              { id: "a", label: ml("Wegen der Lichtbrechung am Übergang Luft/Wasser", "Because of the refraction of light at the air/water transition", "A levegő/víz átmenetnél tapasztalható fénytörés miatt", "Din cauza refracției luminii la tranziția aer/apă") },
              { id: "b", label: ml("Wegen der Lichtreflexion", "Because of light reflection", "Fényvisszaverődés miatt", "Din cauza reflexiei luminii") },
              { id: "c", label: ml("Das Wasser verbiegt ihn", "The water bends it", "A víz meghajlítja", "Apa îl îndoaie") },
              { id: "d", label: ml("Wegen der Streuung", "Because of the scattering", "because!</t1> szórás", "Din cauza împrăștierii") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Stimmt! Licht ändert beim Medium-Wechsel die Richtung.", "That's right! Light changes direction when the medium changes.", "Így van! A fény irányt változtat, ha a közeg megváltozik.", "Așa este! Lumina își schimbă direcția atunci când mediul se schimbă."),
            failFeedback: ml("Falsch. Das Phänomen nennt sich Lichtbrechung.", "Wrong. The phenomenon is called refraction of light.", "Rossz. Ezt a jelenséget fénytörésnek nevezik.", "Greșit. Fenomenul se numește refracția luminii.")
          }
        ]
      },
      {
        id: "ph-7-sr-2",
        title: ml("Physik-Sprint K7 - Akustik", "Physics Sprint K7 - Acoustics", "Fizika Sprint K7 - Akusztika", "Fizica Sprint K7 - Acustica"),
        instruction: ml("Beantworte Fragen zu Schall.", "Answer questions about sound.", "Válaszoljon a hanggal kapcsolatos kérdésekre.", "Răspunde la întrebări despre sunet."),
        scenes: [
          {
            id: "ph-7-sr-2-s1",
            title: ml("Schall", "Sound", "Hang", "Sunet"),
            prompt: ml("Was ist Schall physikalisch gesehen?", "What is sound from a physical point of view?", "Mi a hang fizikai szempontból?", "Ce este sunetul din punct de vedere fizic?"),
            sceneType: "community",
            visual: { icon: "🔊", bg: "#854d0e", accent: "#facc15" },
            choices: [
              { id: "a", label: ml("Ein Magnetfeld", "A magnetic field", "Mágneses mező", "Un câmp magnetic") },
              { id: "b", label: ml("Eine mechanische Schwingung (Welle)", "A mechanical vibration (wave)", "Mechanikus rezgés (hullám)", "O vibrație mecanică (undă)") },
              { id: "c", label: ml("Ein Lichtstrahl", "A Beam of Light", "Egy fénysugár", "Un fascicul de lumină") },
              { id: "d", label: ml("Radioaktivität", "Radioactivity", "Radioaktivitás", "Radioactivitate") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Teilchen stoßen sich gegenseitig an.", "Correct! Particles push each other.", "Helyes! A részecskék lökdösik egymást.", "Corect! Particulele se împing unele pe altele."),
            failFeedback: ml("Falsch. Schall ist eine mechanische Welle.", "Incorrect. Sound is a mechanical wave.", "Hibás. A hang mechanikus hullám.", "Incorect. Sunetul este o undă mecanică.")
          },
          {
            id: "ph-7-sr-2-s2",
            title: ml("Vakuum", "Vacuum", "Vákuum", "Vidul"),
            prompt: ml("Warum hört man im Weltraum (Vakuum) keine Explosionen?", "Why don't you hear explosions in space (vacuum)?", "Miért nem hallasz robbanást az űrben (vákuum)?", "De ce nu auziți explozii în spațiu (vid)?"),
            sceneType: "nature",
            visual: { icon: "🌌", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Weil es zu kalt ist.", "Because it is too cold.", "Mert túl hideg.", "Pentru că este prea frig.") },
              { id: "b", label: ml("Weil Schall ein Medium (z.B. Luft) zur Ausbreitung braucht.", "Because sound needs a medium (e.g. air) to spread.", "Mert a hangnak közegre (pl. levegőre) van szüksége a terjedéshez.", "Deoarece sunetul are nevoie de un mediu (de exemplu, aer) pentru a se răspândi.") },
              { id: "c", label: ml("Weil die Sterne den Schall absorbieren.", "Because the stars absorb the sound.", "Mert a csillagok elnyelik a hangot.", "Pentru că stelele absorb sunetul.") },
              { id: "d", label: ml("Weil der Druck zu hoch ist.", "Because the pressure is too high.", "Mert túl nagy a nyomás.", "Deoarece presiunea este prea mare.") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Korrekt! Ohne Teilchen keine Schallwellen.", "Correct! Without particles, there are no sound waves.", "Helyes! Részecskék nélkül nincsenek hanghullámok.", "Corect! Fără particule, nu există unde sonore."),
            failFeedback: ml("Nicht ganz. Schall benötigt ein Trägermedium.", "Not quite. Sound requires a carrier medium.", "Nem egészen. A hanghoz hordozó közeg szükséges.", "Nu chiar. Sunetul necesită un mediu purtător.")
          },
          {
            id: "ph-7-sr-2-s3",
            title: ml("Frequenz", "Frequency", "Frekvencia", "Frecvență"),
            prompt: ml("Was bestimmt, ob ein Ton hoch oder tief klingt?", "What determines whether a tone sounds high or low?", "Mi határozza meg, hogy egy hang magas vagy halk hangzású?", "Ce determină dacă un sunet sună înalt sau scăzut?"),
            sceneType: "community",
            visual: { icon: "📈", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: ml("Die Frequenz (Schwingungen pro Sekunde)", "The frequency (oscillations per second)", "Frekvencia (oszcilláció másodpercenként)", "Frecvența (oscilații pe secundă)") },
              { id: "b", label: ml("Die Amplitude (Auslenkung)", "The amplitude (deflection)", "Az amplitúdó (elhajlás)", "Amplitudinea (deformarea)") },
              { id: "c", label: ml("Die Temperatur", "The temperature", "A hőmérséklet", "Surse de lumină (T5>t56>T5>") },
              { id: "d", label: ml("Das Gewicht", "The weight", "A tömeg", "Greutatea") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Genau! Hohe Frequenz = hoher Ton.", "Exactly! High frequency = high tone.", "Pontosan! Magas frekvencia = magas hangszín.", "Exact! Frecvență înaltă = ton înalt."),
            failFeedback: ml("Leider falsch. Die Frequenz bestimmt die Tonhöhe.", "Unfortunately wrong. The frequency determines the pitch.", "Sajnos rossz. A frekvencia határozza meg a hangmagasságot.", "Din păcate, greșită. Frecvența determină înălțimea.")
          },
          {
            id: "ph-7-sr-2-s4",
            title: ml("Einheit", "Unit", "Egység", "Unitate"),
            prompt: ml("In welcher Einheit wird die Lautstärke (Schallpegel) gemessen?", "In which unit is the volume (sound level) measured?", "Melyik mértékegységben mérik a térfogatot (hangszintet)?", "În ce unitate se măsoară volumul (nivelul sonor)?"),
            sceneType: "community",
            visual: { icon: "🎧", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Hertz (Hz)", "Hertz (Hz)", "Hertz (Hz)", "Hertzi (Hz)") },
              { id: "b", label: ml("Pascal (Pa)", "Pascal (Pa)", "Pascal (Pa)", "Pascal (Pa)") },
              { id: "c", label: ml("Dezibel (dB)", "Decibels (dB)", "Decibel (dB)", "Decibeli (dB)") },
              { id: "d", label: ml("Watt (W)", "Watt (W)", "Watt (W)", "Watt (W)") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Stimmt! dB ist die Einheit für den Schallpegel.", "That's right! dB is the unit for sound level.", "Igaz! A dB a hangszint mértékegysége.", "! dB este unitatea pentru nivelul sunetului."),
            failFeedback: ml("Falsch. Lautstärke wird in Dezibel (dB) angegeben.", "Incorrect. Volume is measured in decibels (dB).", "Hibás. A hangerőt decibelben (dB) mérik.", "Incorect. Volumul se măsoară în decibeli (dB).")
          }
        ]
      },
      {
        id: "ph-7-sr-3",
        title: ml("Physik-Sprint K7 - Arbeit & Leistung", "Physics Sprint K7 - Work & Performance", "Fizika Sprint K7 – Munka és teljesítmény", "Physics Sprint K7 - Muncă și performanță"),
        instruction: ml("Rechne mit Arbeit und Leistung.", "Calculate work and power.", "A munka és a teljesítmény kiszámítása.", "Calculați munca și puterea."),
        scenes: [
          {
            id: "ph-7-sr-3-s1",
            title: ml("Arbeit", "Work", "Munka", "Lucră"),
            prompt: ml("Wie berechnet man die mechanische Arbeit (W)?", "How do you calculate the mechanical work (W)?", "Hogyan számítja ki a mechanikai munkát (W)?", "Cum se calculează lucrul mecanic (W)?"),
            sceneType: "community",
            visual: { icon: "🏗️", bg: "#0f766e", accent: "#2dd4bf" },
            choices: [
              { id: "a", label: ml("W = m * v", "W = m * v", "W = m * v", "W = m * v") },
              { id: "b", label: ml("W = F * s (Kraft mal Weg)", "W = F * s (force times distance)", "W = F * s (erő szorzó távolság)", "W = F * s (forța ori distanța)") },
              { id: "c", label: ml("W = F / A", "W = F / A", "W = F / A", "W = F / A") },
              { id: "d", label: ml("W = P / t", "W = P / t", "W = P / t", "W = P / t") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Arbeit ist Kraft entlang eines Weges.", "Correct! Work is force along a path.", "Helyes! A munka erő egy úton.", "Corecta! Munca este forță pe o cale."),
            failFeedback: ml("Falsch. Die Formel ist W = F * s.", "Incorrect. The formula is W = F * s.", "Helytelen. A képlet W = F * s.", "Incorect. Formula este W = F * s.")
          },
          {
            id: "ph-7-sr-3-s2",
            title: ml("Leistung", "Performance", "Teljesítmény", "Performanță"),
            prompt: ml("Was gibt die mechanische Leistung (P) an?", "What does the mechanical power (P) indicate?", "Mit jelez a mechanikai teljesítmény (P)?", "Ce indică puterea mecanică (P)?"),
            sceneType: "community",
            visual: { icon: "⏱️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Wie viel Arbeit in einer bestimmten Zeit verrichtet wird", "How much work is done in a certain time", "Mennyi munkát végeznek el egy adott idő alatt", "Câtă muncă se lucrează într-un anumit timp") },
              { id: "b", label: ml("Wie schwer ein Gegenstand ist", "How heavy an item is", "Milyen nehéz egy elem", "Cât de greu este un articol") },
              { id: "c", label: ml("Wie heiß ein Motor wird", "How hot a motor gets", "Mennyire melegszik fel a motor", "Cât de fierbinte se încinge un motor") },
              { id: "d", label: ml("Wie stark die Reibung ist", "How strong the friction is", "Mennyire erős a súrlódás", "Cât de puternică este frecarea") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Korrekt! P = W / t.", "Correct! P = W / t.", "Helyes! P = W / t.", "Corect! P = W / t."),
            failFeedback: ml("Nicht ganz. Leistung ist Arbeit pro Zeit.", "Not quite. Power is work per time.", "Nem egészen. A teljesítmény időnkénti munka.", "Nu chiar. Puterea este muncă pe timp.")
          },
          {
            id: "ph-7-sr-3-s3",
            title: ml("Einheit", "Unit", "Egység", "Unitate"),
            prompt: ml("Welche Einheit hat die Leistung?", "What unit has the power?", "Melyik egység teljesítménye?", "Ce unitate are puterea?"),
            sceneType: "community",
            visual: { icon: "💡", bg: "#78350f", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Newton (N)", "Newton (N)", "Newton (N)", "Newton (N)") },
              { id: "b", label: ml("Joule (J)", "Joule (J)", "Joule (J)", "Joule (J)") },
              { id: "c", label: ml("Watt (W)", "Watt (W)", "Watt (W)", "Watt (W)") },
              { id: "d", label: ml("Meter pro Sekunde (m/s)", "Meters per second (m/s)", "Méter per másodperc (m/s)", "Metri pe secundă (m/s)") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Genau! 1 Watt = 1 Joule pro Sekunde.", "Exactly! 1 watt = 1 joule per second.", "Pontosan! 1 watt = 1 joule másodpercenként.", "Exact! 1 watt = 1 joule pe secundă."),
            failFeedback: ml("Leider falsch. Die Einheit ist Watt (W).", "Unfortunately wrong. The unit is watt (W).", "Sajnos hibás. Mértékegysége watt (W).", "Din păcate, greșit. Unitatea este watt (W).")
          },
          {
            id: "ph-7-sr-3-s4",
            title: ml("Hubarbeit", "Lifting work", "Emelési munka", "munca de ridicare"),
            prompt: ml("Welche Arbeit verrichtest du, wenn du eine Kiste anhebst?", "What work do you do when you lift a box?", "Milyen munkát végez, amikor felemel egy dobozt?", "Ce lucru faci când ridici o cutie?"),
            sceneType: "community",
            visual: { icon: "📦", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Reibungsarbeit", "Frictional work", "Súrlódási munka", "Lucrul de frecare") },
              { id: "b", label: ml("Beschleunigungsarbeit", "Acceleration work", "Gyorsítási munka", "Lucrări de accelerare") },
              { id: "c", label: ml("Spannarbeit", "Tension work", "Befogási munka", "Lucrări de prindere") },
              { id: "d", label: ml("Hubarbeit", "Lifting work", "Emelési munka", "munca de ridicare") }
            ],
            correctChoiceId: "d",
            successFeedback: ml("Stimmt! Du überwindest die Gewichtskraft.", "That's right! You overcome the force of weight.", "Így van! Legyőzi a súly erejét.", "Așa este! Învingeți forța greutății."),
            failFeedback: ml("Falsch. Beim Anheben verrichtet man Hubarbeit.", "Incorrect. When lifting you do lifting work.", "Hibás. Emeléskor emelőmunkát végez.", "Incorect. Când ridici, faci lucrări de ridicare.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-7-cb-1",
        title: ml("Schallfrequenzen", "Sound frequencies", "Hangfrekvenciák", "Frecvențe ale sunetului"),
        instruction: ml("Ordne die Frequenzen von tief (niedrig) nach hoch.", "Order the frequencies from low (low) to high.", "Rendezze a frekvenciákat alacsonyról (alacsony) magasra.", "Ordonează frecvențele de la joasă (scăzută) la mare."),
        hint: "Ultraschall ist höher als das, was wir hören können.",
        theme: { bg: "#0f172a", accent: "#3b82f6", card: "#1c1917" },
        parts: [
          { id: "hoch", label: ml("Menschlicher hoher Ton (z.B. 10.000 Hz)", "Human high-pitched tone (e.g. 10,000 Hz)", "Emberi magas hangmagasság (pl. 10 000 Hz)", "Ton înalt uman (de exemplu, 10.000 Hz)"), emoji: "🎵" },
          { id: "infra", label: ml("Infraschall (< 20 Hz)", "Infrasound (< 20 Hz)", "Infrahang (< 20 Hz)", "Infrasunete (< 20 Hz)"), emoji: "🐘" },
          { id: "ultra", label: ml("Ultraschall (> 20.000 Hz)", "Ultrasound (> 20,000 Hz)", "Ultrahang (> 20 000 Hz)", "Ultrasunete (> 20.000 Hz)"), emoji: "🦇" },
          { id: "tief", label: ml("Menschlicher tiefer Ton (z.B. 100 Hz)", "Human low tone (e.g. 100 Hz)", "Emberi mély hang (pl. 100 Hz)", "Tonul uman scăzut (de exemplu, 100 Hz)"), emoji: "🔈" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Tiefste Frequenz", "1. Lowest Frequency", "1. Legalacsonyabb frekvencia", "1. Frecvența cea mai joasă") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchste Frequenz", "4. Highest frequency", "4. Legmagasabb frekvencia", "4. Cea mai mare frecvență") }
        ],
        solution: ["infra", "tief", "hoch", "ultra"]
      },
      {
        id: "ph-7-cb-2",
        title: ml("Lichtdurchlässigkeit", "Light transmission", "Fényáteresztés", "Transmisia luminii"),
        instruction: ml("Ordne von lichtundurchlässig zu komplett transparent.", "Order from opaque to completely transparent.", "Rendeljen átlátszatlantól a teljesen átlátszóig.", "Comandă de la opac la complet transparent."),
        hint: "Durch ein Milchglas sieht man nur verschwommen.",
        theme: { bg: "#0f172a", accent: "#fbbf24", card: "#1c1917" },
        parts: [
          { id: "klares", label: ml("Fensterglas", "Window glass", "Ablaküveg", "Sticlă pentru fereastră"), emoji: "🪟" },
          { id: "stein", label: ml("Ziegelstein", "Brick", "Tégla", "Caramida"), emoji: "🧱" },
          { id: "vakuum", label: ml("Leerer Raum (Vakuum)", "Empty space (vacuum)", "Üres tér (vákuum)", "Spațiu gol (vid)"), emoji: "🌌" },
          { id: "milch", label: ml("Milchglas / Nebel", "Frosted glass / fog", "Tetüveg / Tetszett üveg / köd 4> Milyen energiát nyom össze a köd", "Sticlă mată/ceață"), emoji: "🌫️" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Undurchlässig", "1. Impermeable", "1. Át nem eresztő", "1. Impermeabil") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Perfekt transparent", "4. Perfectly transparent", "4. Tökéletesen átlátszó", "4. Perfect transparent") }
        ],
        solution: ["stein", "milch", "klares", "vakuum"]
      },
      {
        id: "ph-7-cb-3",
        title: ml("Leistung (Watt)", "Power (Watts)", "Teljesítmény (Watt)", "Putere (Wați)"),
        instruction: ml("Ordne nach mechanischer/elektrischer Leistung aufsteigend.", "Order in ascending order according to mechanical/electrical power.", "Mechanikai/elektromos teljesítmény szerint növekvő sorrendben.", "Ordonați în ordine crescătoare în funcție de puterea mecanică/electrică."),
        hint: "Ein Kraftwerk liefert Millionen von Watt.",
        theme: { bg: "#0f172a", accent: "#10b981", card: "#1c1917" },
        parts: [
          { id: "auto", label: ml("Automotor (ca. 100 kW)", "Car engine (approx. 100 kW)", "Autómotor (kb. 100 kW)", "Motor de mașină (aprox. 100 kW)"), emoji: "🚗" },
          { id: "mensch", label: ml("Gehender Mensch (ca. 100 W)", "Walking human (approx. 100 W)", "Sétáló ember (kb. 100 W)", "Om care merge (aprox. 100 W)"), emoji: "🚶" },
          { id: "kraftwerk", label: ml("Atomkraftwerk (ca. 1000 MW)", "Nuclear power plant (approx. 1000 MW)", "Atomerőmű (kb. 1000 MW)", "Centrală nucleară (aprox. 1000 MW)"), emoji: "🏭" },
          { id: "wind", label: ml("Große Windkraftanlage (ca. 3 MW)", "Large wind turbine (approx. 3 MW)", "Nagy szélturbina (kb. 3 MW)", "Turbină eoliană mare (aprox. 3 MW)"), emoji: "🌬️" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Wenig Leistung", "1. Little power", "1. Kevés erő", "1. Puțină putere") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Viel Leistung", "4. Lots of performance", "4. Sok teljesítmény", "4. Multă performanță") }
        ],
        solution: ["mensch", "auto", "wind", "kraftwerk"]
      },
      {
        id: "ph-7-cb-4",
        title: ml("Schallfrequenzen (Pro)", "Sound Frequencies (Pro)", "Hangfrekvenciák (Pro)", "Frecvențe de sunet (Pro)"),
        instruction: ml("Ordne die Frequenzen von tief (niedrig) nach hoch.", "Order the frequencies from low (low) to high.", "Rendezze a frekvenciákat alacsonyról (alacsony) magasra.", "Ordonează frecvențele de la joasă (scăzută) la mare."),
        hint: "Ultraschall ist höher als das, was wir hören können.",
        theme: { bg: "#0f172a", accent: "#3b82f6", card: "#1c1917" },
        parts: [
          { id: "hoch", label: ml("Menschlicher hoher Ton (z.B. 10.000 Hz)", "Human high-pitched tone (e.g. 10,000 Hz)", "Emberi magas hangmagasság (pl. 10 000 Hz)", "Ton înalt uman (de exemplu, 10.000 Hz)"), emoji: "🎵" },
          { id: "infra", label: ml("Infraschall (< 20 Hz)", "Infrasound (< 20 Hz)", "Infrahang (< 20 Hz)", "Infrasunete (< 20 Hz)"), emoji: "🐘" },
          { id: "ultra", label: ml("Ultraschall (> 20.000 Hz)", "Ultrasound (> 20,000 Hz)", "Ultrahang (> 20 000 Hz)", "Ultrasunete (> 20.000 Hz)"), emoji: "🦇" },
          { id: "tief", label: ml("Menschlicher tiefer Ton (z.B. 100 Hz)", "Human low tone (e.g. 100 Hz)", "Emberi mély hang (pl. 100 Hz)", "Tonul uman scăzut (de exemplu, 100 Hz)"), emoji: "🔈" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Tiefste Frequenz", "1. Lowest Frequency", "1. Legalacsonyabb frekvencia", "1. Frecvența cea mai joasă") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchste Frequenz", "4. Highest frequency", "4. Legmagasabb frekvencia", "4. Cea mai mare frecvență") }
        ],
        solution: ["infra", "tief", "hoch", "ultra"]
      },
      {
        id: "ph-7-cb-5",
        title: ml("Lichtdurchlässigkeit (Pro)", "Translucency (Pro)", "Translucencia (Pro)", "Transluciditate (Pro)"),
        instruction: ml("Ordne von lichtundurchlässig zu komplett transparent.", "Order from opaque to completely transparent.", "Rendeljen átlátszatlantól a teljesen átlátszóig.", "Comandă de la opac la complet transparent."),
        hint: "Durch ein Milchglas sieht man nur verschwommen.",
        theme: { bg: "#0f172a", accent: "#fbbf24", card: "#1c1917" },
        parts: [
          { id: "klares", label: ml("Fensterglas", "Window glass", "Ablaküveg", "Sticlă pentru fereastră"), emoji: "🪟" },
          { id: "stein", label: ml("Ziegelstein", "Brick", "Tégla", "Caramida"), emoji: "🧱" },
          { id: "vakuum", label: ml("Leerer Raum (Vakuum)", "Empty space (vacuum)", "Üres tér (vákuum)", "Spațiu gol (vid)"), emoji: "🌌" },
          { id: "milch", label: ml("Milchglas / Nebel", "Frosted glass / fog", "Tetüveg / Tetszett üveg / köd 4> Milyen energiát nyom össze a köd", "Sticlă mată/ceață"), emoji: "🌫️" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Undurchlässig", "1. Impermeable", "1. Át nem eresztő", "1. Impermeabil") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Perfekt transparent", "4. Perfectly transparent", "4. Tökéletesen átlátszó", "4. Perfect transparent") }
        ],
        solution: ["stein", "milch", "klares", "vakuum"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-7-mr-1",
        title: ml("Optische Instrumente", "Optical instruments", "Optikai műszerek", "Instrumente optice"),
        instruction: ml("Merke dir die optischen Bauteile!", "Note the optical components!", "Jegyezd meg az optikai alkatrészeket!", "Rețineți componentele optice!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#22d3ee", radar: "#083344" },
        targetItems: [
          { id: "linse", label: ml("Sammellinse", "Converging lens", "Konvergáló lencse", "Lentilă convergentă"), emoji: "🔍" },
          { id: "prisma", label: ml("Prisma", "Prism", "Prizma", "Prismă"), emoji: "🔺" },
          { id: "spiegel", label: ml("Ebenerspiegel", "Plane mirror", "Síktükör", "Oglindă plană"), emoji: "🪞" },
          { id: "loch", label: ml("Lochblende", "Pinhole aperture", "Tűlyuknyílás", "Deschidere orificiu"), emoji: "🕳️" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Stimmgabel", "Tuning fork", "Hangvilla", "Diapazor"), emoji: "🪚" },
          { id: "dec2", label: ml("Gitarre", "Guitar", "Gitár", "Chitara"), emoji: "🎸" },
          { id: "dec3", label: ml("Waage", "Balance", "Egyensúly", "Echilibrul"), emoji: "⚖️" },
          { id: "dec4", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru"), emoji: "🌡️" },
          { id: "dec5", label: ml("Kompass", "Compass", "Irtű", "Busola"), emoji: "🧭" }
        ]
      },
      {
        id: "ph-7-mr-2",
        title: ml("Schallerzeuger", "Sound generator", "hanggenerátor", "generator de sunet"),
        instruction: ml("Merke dir die Dinge, die Schall erzeugen!", "Remember the things that produce sound!", "Emlékezzen a hangot keltő dolgokra!", "Ține minte lucrurile care produc sunet!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "stimm", label: ml("Stimmgabel", "Tuning fork", "Hangvilla", "Diapazor"), emoji: "🪚" },
          { id: "laut", label: ml("Lautsprecher", "Speaker", "L Távolság</t1>10 Hangszóró", "Difuzoare"), emoji: "🔊" },
          { id: "trommel", label: ml("Trommel", "Drum", "Dob", "Tambur"), emoji: "🥁" },
          { id: "stimme", label: ml("Menschliche Stimme", "Human voice", "Emberi hang", "Float"), emoji: "🗣️" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Vakuum", "Vacuum", "Vákuum", "Vidul"), emoji: "🌌" },
          { id: "dec2", label: ml("Lichtstrahl", "Light beam", "Fénysugár", "Fascicul luminos"), emoji: "🔦" },
          { id: "dec3", label: ml("Schatten", "Shadow", "Árnyék", "Umbră"), emoji: "👤" },
          { id: "dec4", label: ml("Spiegel", "Mirror", "Tükör", "Oglindă"), emoji: "🪞" },
          { id: "dec5", label: ml("Linse", "Lens", "Lencse", "Lentilă"), emoji: "🔍" }
        ]
      },
      {
        id: "ph-7-mr-3",
        title: ml("Mechanische Einheiten", "Mechanical units", "Mechanikai egységek", "Unități mecanice"),
        instruction: ml("Merke dir die Einheiten der Mechanik und Akustik!", "Remember the units of mechanics and acoustics!", "Emlékezzen a mechanika és az akusztika egységeire!", "Amintiți-vă de unitățile de mecanică și acustică!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#10b981", radar: "#064e3b" },
        targetItems: [
          { id: "joule", label: ml("Joule (Arbeit)", "Joule (work)", "Joule (munka)", "Joule (muncă)"), emoji: "⚡" },
          { id: "watt", label: ml("Watt (Leistung)", "Watt (power)", "Watt (teljesítmény)", "Watt (putere)"), emoji: "💡" },
          { id: "newton", label: ml("Newton (Kraft)", "Newton (force)", "Newton (erő)", "Newton (forță)"), emoji: "🍎" },
          { id: "hertz", label: ml("Hertz (Frequenz)", "Hertz (frequency)", "Hertz (frekvencia)", "Hertz (frecvență)"), emoji: "📈" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Ampere", "Ampere", "erősítő", "Amperetor"), emoji: "🌊" },
          { id: "dec2", label: ml("Volt", "Volts", "volt", "V <t6>A"), emoji: "🔋" },
          { id: "dec3", label: ml("Ohm", "Ohm", "Ohm", "Ohm"), emoji: "🔌" },
          { id: "dec4", label: ml("Coulomb", "Coulomb", "Coulomb", "Coulomb"), emoji: "⚛️" },
          { id: "dec5", label: ml("Lumen", "Lumen", "Lumen", "Lumen"), emoji: "☀️" }
        ]
      },
      {
        id: "ph-7-mr-4",
        title: ml("Optische Instrumente (Pro)", "Optical instruments (Pro)", "Optikai műszerek (Pro)", "Instrumente optice (Pro)"),
        instruction: ml("Merke dir die optischen Bauteile!", "Note the optical components!", "Jegyezd meg az optikai alkatrészeket!", "Rețineți componentele optice!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#22d3ee", radar: "#083344" },
        targetItems: [
          { id: "linse", label: ml("Sammellinse", "Converging lens", "Konvergáló lencse", "Lentilă convergentă"), emoji: "🔍" },
          { id: "prisma", label: ml("Prisma", "Prism", "Prizma", "Prismă"), emoji: "🔺" },
          { id: "spiegel", label: ml("Ebenerspiegel", "Plane mirror", "Síktükör", "Oglindă plană"), emoji: "🪞" },
          { id: "loch", label: ml("Lochblende", "Pinhole aperture", "Tűlyuknyílás", "Deschidere orificiu"), emoji: "🕳️" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Stimmgabel", "Tuning fork", "Hangvilla", "Diapazor"), emoji: "🪚" },
          { id: "dec2", label: ml("Gitarre", "Guitar", "Gitár", "Chitara"), emoji: "🎸" },
          { id: "dec3", label: ml("Waage", "Balance", "Egyensúly", "Echilibrul"), emoji: "⚖️" },
          { id: "dec4", label: ml("Thermometer", "Thermometer", "Hőmérő", "Termometru"), emoji: "🌡️" },
          { id: "dec5", label: ml("Kompass", "Compass", "Irtű", "Busola"), emoji: "🧭" }
        ]
      },
      {
        id: "ph-7-mr-5",
        title: ml("Schallerzeuger (Pro)", "Sound generator (Pro)", "Hanggenerátor (Pro)", "Generator de sunet (Pro)"),
        instruction: ml("Merke dir die Dinge, die Schall erzeugen!", "Remember the things that produce sound!", "Emlékezzen a hangot keltő dolgokra!", "Ține minte lucrurile care produc sunet!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "stimm", label: ml("Stimmgabel", "Tuning fork", "Hangvilla", "Diapazor"), emoji: "🪚" },
          { id: "laut", label: ml("Lautsprecher", "Speaker", "L Távolság</t1>10 Hangszóró", "Difuzoare"), emoji: "🔊" },
          { id: "trommel", label: ml("Trommel", "Drum", "Dob", "Tambur"), emoji: "🥁" },
          { id: "stimme", label: ml("Menschliche Stimme", "Human voice", "Emberi hang", "Float"), emoji: "🗣️" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Vakuum", "Vacuum", "Vákuum", "Vidul"), emoji: "🌌" },
          { id: "dec2", label: ml("Lichtstrahl", "Light beam", "Fénysugár", "Fascicul luminos"), emoji: "🔦" },
          { id: "dec3", label: ml("Schatten", "Shadow", "Árnyék", "Umbră"), emoji: "👤" },
          { id: "dec4", label: ml("Spiegel", "Mirror", "Tükör", "Oglindă"), emoji: "🪞" },
          { id: "dec5", label: ml("Linse", "Lens", "Lencse", "Lentilă"), emoji: "🔍" }
        ]
      }
    ]
  },
  8: {
    grade: 8,
    meteorCatch: [
      {
        id: "ph-8-mc-1",
        title: ml("Atombausteine", "Atomic building blocks", "Atomépítő elemek", "Blocuri atomice"),
        prompt: ml("Fange nur Bausteine des Atoms ein!", "Only capture building blocks of the atom!", "Csak az atom építőköveit ragadja meg!", "Capturați numai blocurile de construcție ale atomului!"),
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#8b5cf6", accent: "#a855f7" },
        correctItems: [
          { id: "proton", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "➕" },
          { id: "neutron", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪" },
          { id: "elektron", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "➖" },
          { id: "atomkern", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), emoji: "⚛️" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Bakterium", "Bacteria", "Baktériumok", "Bacterii"), emoji: "🦠" },
          { id: "x2", label: ml("Zelle", "Cell", "Cell", "Celula"), emoji: "🧬" },
          { id: "x3", label: ml("Lichtjahr", "Light year", "Fényév", "Anul lumină"), emoji: "🌌" },
          { id: "x4", label: ml("Molekül", "Molecule", "Molekula", "Moleculă"), emoji: "🔗" }
        ]
      },
      {
        id: "ph-8-mc-2",
        title: ml("Elektromagnetismus", "Electromagnetism", "Elektromágnesesség", "Electromagnetism"),
        prompt: ml("Fange Bauteile für einen Elektromagneten ein!", "Catch components for an electromagnet on!", "Rögzítse az alkatrészeket elektromágneshez!", "Capturați componente pentru un electromagnet!"),
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "spule", label: ml("Kupferspule", "Copper coil", "Réztekercs", "Bobina de cupru"), emoji: "🧵" },
          { id: "eisenkern", label: ml("Eisenkern", "Iron nucleus", "Vasmag", "Nucleu de fier"), emoji: "🔩" },
          { id: "strom", label: ml("Gleichstrom", "Direct current", "5Tirencia", "Curent continuu"), emoji: "⚡" },
          { id: "batterie", label: ml("Stromquelle", "Power source", "Áramforrás", "Sursa de energie"), emoji: "🔋" },
          { id: "schalter", label: ml("Schalter", "Switch", "Kapcsoló", "Comutator"), emoji: "🕹️" }
        ],
        wrongItems: [
          { id: "x5", label: ml("Prisma", "Prism", "Prizma", "Prismă"), emoji: "🔺" },
          { id: "x6", label: ml("Holzstab", "Wooden rod", "Farúd", "Tijă de lemn"), emoji: "🪵" },
          { id: "x7", label: ml("Plastikrohr", "Plastic pipe", "Műanyag cső", "Teava de plastic"), emoji: "🪈" }
        ]
      },
      {
        id: "ph-8-mc-3",
        title: ml("Erneuerbare Energien", "Renewables Energies", "Megújuló energia", "Energie regenerabile"),
        prompt: ml("Fange klimafreundliche Energiequellen ein!", "Capture climate-friendly energy sources!", "Klímabarát energiaforrások rögzítése!", "Capturați surse de energie ecologice!"),
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#10b981", accent: "#34d399" },
        correctItems: [
          { id: "wind", label: ml("Windkraft", "Wind power", "Szélenergia", "Puterea eoliană"), emoji: "🌬️" },
          { id: "solar", label: ml("Sonnenenergie", "Solar energy", "Napenergia", "Energie solară"), emoji: "☀️" },
          { id: "wasser", label: ml("Wasserkraft", "Hydropower", "Vízenergia", "Hidroenergie"), emoji: "🌊" },
          { id: "geothermie", label: ml("Erdwärme", "Geothermal heat", "Geotermikus hő", "Căldură geotermală"), emoji: "🌋" },
          { id: "biomasse", label: ml("Biomasse", "Biomass", "Biomassza", "Biomasa"), emoji: "🌱" },
          { id: "gezeiten", label: ml("Gezeitenkraft", "Tidal force", "Apályerő", "Forța mareală"), emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x8", label: ml("Kohlekraft", "Coal power", "Szénenergia", "Putere de cărbune"), emoji: "🏭" },
          { id: "x9", label: ml("Erdgas", "Natural gas", "Földgáz", "Gaz natural"), emoji: "🔥" },
          { id: "x10", label: ml("Kernkraft", "Nuclear power", "Atomenergia", "Puterea nucleară"), emoji: "☢️" },
          { id: "x11", label: ml("Erdöl", "Petroleum", "Ásványolaj", "Petrol"), emoji: "🛢️" }
        ]
      },
      {
        id: "ph-8-mc-4",
        title: ml("Atombausteine (Pro)", "Atomic building blocks (Pro)", "Atom építőelemek (Pro)", "Blocuri de construcție atomice (Pro)"),
        prompt: ml("Fange nur Bausteine des Atoms ein!", "Only capture building blocks of the atom!", "Csak az atom építőköveit ragadja meg!", "Capturați numai blocurile de construcție ale atomului!"),
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#8b5cf6", accent: "#a855f7" },
        correctItems: [
          { id: "proton", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "➕" },
          { id: "neutron", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪" },
          { id: "elektron", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "➖" },
          { id: "atomkern", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), emoji: "⚛️" }
        ],
        wrongItems: [
          { id: "x1", label: ml("Bakterium", "Bacteria", "Baktériumok", "Bacterii"), emoji: "🦠" },
          { id: "x2", label: ml("Zelle", "Cell", "Cell", "Celula"), emoji: "🧬" },
          { id: "x3", label: ml("Lichtjahr", "Light year", "Fényév", "Anul lumină"), emoji: "🌌" },
          { id: "x4", label: ml("Molekül", "Molecule", "Molekula", "Moleculă"), emoji: "🔗" }
        ]
      },
      {
        id: "ph-8-mc-5",
        title: ml("Elektromagnetismus (Pro)", "Electromagnetism (Pro)", "Elektromágnesesség (Pro)", "Electromagnetism (Pro)"),
        prompt: ml("Fange Bauteile für einen Elektromagneten ein!", "Catch components for an electromagnet on!", "Rögzítse az alkatrészeket elektromágneshez!", "Capturați componente pentru un electromagnet!"),
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "spule", label: ml("Kupferspule", "Copper coil", "Réztekercs", "Bobina de cupru"), emoji: "🧵" },
          { id: "eisenkern", label: ml("Eisenkern", "Iron nucleus", "Vasmag", "Nucleu de fier"), emoji: "🔩" },
          { id: "strom", label: ml("Gleichstrom", "Direct current", "5Tirencia", "Curent continuu"), emoji: "⚡" },
          { id: "batterie", label: ml("Stromquelle", "Power source", "Áramforrás", "Sursa de energie"), emoji: "🔋" },
          { id: "schalter", label: ml("Schalter", "Switch", "Kapcsoló", "Comutator"), emoji: "🕹️" }
        ],
        wrongItems: [
          { id: "x5", label: ml("Prisma", "Prism", "Prizma", "Prismă"), emoji: "🔺" },
          { id: "x6", label: ml("Holzstab", "Wooden rod", "Farúd", "Tijă de lemn"), emoji: "🪵" },
          { id: "x7", label: ml("Plastikrohr", "Plastic pipe", "Műanyag cső", "Teava de plastic"), emoji: "🪈" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-8-os-1",
        title: ml("Atomkern vs. Atomhülle", "Atomic nucleus vs. atomic shell", "Atommag vs. atomburok", "Nucleu atomic vs. înveliș atomic"),
        instruction: ml("Wo befindet sich das Teilchen oder die Eigenschaft?", "Where is the particle or property located?", "Hol található a részecske vagy tulajdonság?", "Unde se află particula sau proprietatea?"),
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "kern", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), color: "#ef4444" },
          { id: "huelle", label: ml("Atomhülle", "Atomic shell", "Atomhéj", "Înveliș atomic"), color: "#3b82f6" }
        ],
        items: [
          { id: "proton", label: ml("Protonen", "Protons", "Protonok", "Protoni"), emoji: "➕", bucketId: "kern" },
          { id: "neutron", label: ml("Neutronen", "Neutrons", "Neutronok", "Neutroni"), emoji: "⚪", bucketId: "kern" },
          { id: "masse", label: ml("Fast die gesamte Masse", "Almost the entire Mass", "Majdnem a teljes tömeg", "Aproape întreaga liturghie"), emoji: "⚖️", bucketId: "kern" },
          { id: "elektron", label: ml("Elektronen", "Electrons", "Elektronok", "Electroni"), emoji: "➖", bucketId: "huelle" },
          { id: "negativ", label: ml("Negative Ladung", "Negative charge", "Negatív töltés", "Încărcare negativă"), emoji: "⚡", bucketId: "huelle" },
          { id: "volumen", label: ml("Fast das gesamte Volumen", "Almost the entire volume", "Majdnem a teljes kötet", "Aproape întregul volum"), emoji: "🌌", bucketId: "huelle" }
        ]
      },
      {
        id: "ph-8-os-2",
        title: ml("Gleichstrom vs. Wechselstrom", "Direct current vs. alternating current", "Egyenáram vs váltóáram", "Curentul continuu față de curent alternativ"),
        instruction: ml("Gehört die Eigenschaft zu DC (Gleichstrom) oder AC (Wechselstrom)?", "Does the property belong to DC (direct current) or AC (alternating current)?", "A tulajdonság DC (egyenáram) vagy AC (váltakozó áram) kategóriába tartozik?", "Aparține proprietatea DC (curent continuu) sau AC (curent alternativ)?"),
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "dc", label: ml("Gleichstrom (DC)", "Direct current (DC)", "Egyenáram (DC)", "Curentul continuu (DC)"), color: "#10b981" },
          { id: "ac", label: ml("Wechselstrom (AC)", "Alternating current (AC)", "Váltakozó áram (AC)", "Curent alternativ (AC)"), color: "#f59e0b" }
        ],
        items: [
          { id: "batt", label: ml("Batterie liefert es", "Battery supplies it", "Akkumulátor látja el", "Bateria o furnizează"), emoji: "🔋", bucketId: "dc" },
          { id: "richtung1", label: ml("Fließt nur in eine Richtung", "Flows only in one direction", "Csak egy irányban áramlik", "Curge doar într-o singură direcție"), emoji: "➡️", bucketId: "dc" },
          { id: "steckdose", label: ml("Kommt aus der Steckdose", "Comes from the socket", "Az aljzatból származik", "Vine de la priză"), emoji: "🔌", bucketId: "ac" },
          { id: "richtung2", label: ml("Wechselt ständig die Richtung", "Constantly changes direction", "Folyamatosan változtatja az irányt", "Își schimbă în mod constant direcția"), emoji: "🔀", bucketId: "ac" },
          { id: "hertz", label: ml("Hat in Europa 50 Hz", "Has 50 Hz in Europe", "50 Hz-es Európában", "Are 50 Hz în Europa"), emoji: "📈", bucketId: "ac" },
          { id: "trafo", label: ml("Kann gut transformiert werden", "Can be transformed well", "Jól átalakítható", "Poate fi transformați bine"), emoji: "🏗️", bucketId: "ac" }
        ]
      },
      {
        id: "ph-8-os-3",
        title: ml("Strahlungsarten", "Types of radiation", "Sugárzás típusai", "Tipuri de radiații"),
        instruction: ml("Sortiere nach Alpha- oder Betastrahlung.", "Sort by alpha or beta radiation.", "Rendezés alfa- vagy béta-sugárzás szerint.", "Sortați după radiația alfa sau beta."),
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "alpha", label: ml("Alphastrahlung (α)", "Alpha radiation (α)", "Alfa-sugárzás (α)", "Radiția alfa (α)"), color: "#ef4444" },
          { id: "beta", label: ml("Betastrahlung (β)", "Beta radiation (β)", "Béta sugárzás (β)", "Radiația beta (β)"), color: "#3b82f6" }
        ],
        items: [
          { id: "heli", label: ml("Heliumkerne", "Helium nuclei", "Hélium atommagok", "Nuclee de heliu"), emoji: "⚛️", bucketId: "alpha" },
          { id: "papier", label: ml("Wird durch Papier gestoppt", "Stopped by paper", "Megállította a papír", "Oprit de hârtie"), emoji: "📄", bucketId: "alpha" },
          { id: "positiv", label: ml("Positiv geladen", "Positively charged", "Pozitívan feltöltött", "Încărcate pozitiv"), emoji: "➕", bucketId: "alpha" },
          { id: "elektr", label: ml("Schnelle Elektronen", "Fast electrons", "Gyors elektronok", "Electroni rapizi"), emoji: "⚡", bucketId: "beta" },
          { id: "alu", label: ml("Wird durch Aluminium gestoppt", "Stopped by aluminum", "Alumínium megállítja", "Oprit de aluminiu"), emoji: "🥫", bucketId: "beta" },
          { id: "negativ", label: ml("Negativ geladen", "Negatively charged", "Negatív töltés", "Încărcat negativ"), emoji: "➖", bucketId: "beta" }
        ]
      },
      {
        id: "ph-8-os-4",
        title: ml("Atomkern vs. Atomhülle (Pro)", "Atomic core vs. atomic shell (Pro)", "Atommag vs. atomhéj (Pro)", "Miez atomic vs. înveliș atomic (Pro)"),
        instruction: ml("Wo befindet sich das Teilchen oder die Eigenschaft?", "Where is the particle or property located?", "Hol található a részecske vagy tulajdonság?", "Unde se află particula sau proprietatea?"),
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "kern", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), color: "#ef4444" },
          { id: "huelle", label: ml("Atomhülle", "Atomic shell", "Atomhéj", "Înveliș atomic"), color: "#3b82f6" }
        ],
        items: [
          { id: "proton", label: ml("Protonen", "Protons", "Protonok", "Protoni"), emoji: "➕", bucketId: "kern" },
          { id: "neutron", label: ml("Neutronen", "Neutrons", "Neutronok", "Neutroni"), emoji: "⚪", bucketId: "kern" },
          { id: "masse", label: ml("Fast die gesamte Masse", "Almost the entire Mass", "Majdnem a teljes tömeg", "Aproape întreaga liturghie"), emoji: "⚖️", bucketId: "kern" },
          { id: "elektron", label: ml("Elektronen", "Electrons", "Elektronok", "Electroni"), emoji: "➖", bucketId: "huelle" },
          { id: "negativ", label: ml("Negative Ladung", "Negative charge", "Negatív töltés", "Încărcare negativă"), emoji: "⚡", bucketId: "huelle" },
          { id: "volumen", label: ml("Fast das gesamte Volumen", "Almost the entire volume", "Majdnem a teljes kötet", "Aproape întregul volum"), emoji: "🌌", bucketId: "huelle" }
        ]
      },
      {
        id: "ph-8-os-5",
        title: ml("Gleichstrom vs. Wechselstrom (Pro)", "Direct current vs. alternating current (Pro)", "DC vs AC (Pro)", "DC vs. AC (Pro)"),
        instruction: ml("Gehört die Eigenschaft zu DC (Gleichstrom) oder AC (Wechselstrom)?", "Does the property belong to DC (direct current) or AC (alternating current)?", "A tulajdonság DC (egyenáram) vagy AC (váltakozó áram) kategóriába tartozik?", "Aparține proprietatea DC (curent continuu) sau AC (curent alternativ)?"),
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "dc", label: ml("Gleichstrom (DC)", "Direct current (DC)", "Egyenáram (DC)", "Curentul continuu (DC)"), color: "#10b981" },
          { id: "ac", label: ml("Wechselstrom (AC)", "Alternating current (AC)", "Váltakozó áram (AC)", "Curent alternativ (AC)"), color: "#f59e0b" }
        ],
        items: [
          { id: "batt", label: ml("Batterie liefert es", "Battery supplies it", "Akkumulátor látja el", "Bateria o furnizează"), emoji: "🔋", bucketId: "dc" },
          { id: "richtung1", label: ml("Fließt nur in eine Richtung", "Flows only in one direction", "Csak egy irányban áramlik", "Curge doar într-o singură direcție"), emoji: "➡️", bucketId: "dc" },
          { id: "steckdose", label: ml("Kommt aus der Steckdose", "Comes from the socket", "Az aljzatból származik", "Vine de la priză"), emoji: "🔌", bucketId: "ac" },
          { id: "richtung2", label: ml("Wechselt ständig die Richtung", "Constantly changes direction", "Folyamatosan változtatja az irányt", "Își schimbă în mod constant direcția"), emoji: "🔀", bucketId: "ac" },
          { id: "hertz", label: ml("Hat in Europa 50 Hz", "Has 50 Hz in Europe", "50 Hz-es Európában", "Are 50 Hz în Europa"), emoji: "📈", bucketId: "ac" },
          { id: "trafo", label: ml("Kann gut transformiert werden", "Can be transformed well", "Jól átalakítható", "Poate fi transformați bine"), emoji: "🏗️", bucketId: "ac" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-8-sr-1",
        title: ml("Physik-Sprint K8 - Atomphysik", "Physics Sprint K8 - Atomic Physics", "Fizika Sprint K8 – Atomfizika", "Physics Sprint K8 - Atomic Physics"),
        instruction: ml("Wähle die Fakten über Atome.", "Choose the facts about atoms.", "Válassza ki a tényeket az atomokról.", "Alege faptele despre atomi."),
        scenes: [
          {
            id: "ph-8-sr-1-s1",
            title: ml("Ladung", "Charge", "Töltés", "Încărcare"),
            prompt: ml("Welche elektrische Ladung hat ein Proton?", "What electric charge does a Proton?", "Milyen elektromos töltése van egy protonnak?", "Ce sarcină electrică are un proton?"),
            sceneType: "nature",
            visual: { icon: "➕", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: ml("Negativ", "Negative", "Negatív", "Negativ") },
              { id: "b", label: ml("Neutral", "Neutral", "Semleges", "Neutral") },
              { id: "c", label: ml("Positiv", "Positive", "Pozitív", "Pozitiv") },
              { id: "d", label: ml("Wechselnd", "Alternating", "Változás", "Schimbarea") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig! Protonen sind positiv, Elektronen negativ.", "Right! Protons are positive, electrons negative.", "Helyes! A protonok pozitívak, az elektronok negatívak.", "Corect! Protonii sunt pozitivi, electronii negativi."),
            failFeedback: ml("Falsch. Ein Proton ist positiv geladen.", "Wrong. A proton is positively charged.", "Rossz. Egy proton pozitív töltésű.", "Greșit. Un proton este încărcat pozitiv.")
          },
          {
            id: "ph-8-sr-1-s2",
            title: ml("Kern", "Core", "Helyes.", "Miezul"),
            prompt: ml("Woraus besteht der Atomkern?", "What does the atomic nucleus consist of?", "Miből áll az atommag?", "Din ce constă nucleul atomic?"),
            sceneType: "nature",
            visual: { icon: "⚛️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Nur aus Elektronen", "Only from electrons", "Csak elektronok", "Doar electroni") },
              { id: "b", label: ml("Aus Protonen und Neutronen", "From protons and neutrons", "Protonokból és neutronokból", "De la protoni și neutroni") },
              { id: "c", label: ml("Aus Quarks und Photonen", "From quarks and photons", "Kvarkokból és fotonokból", "De la quarci și fotoni") },
              { id: "d", label: ml("Aus Protonen und Elektronen", "Made of protons and electrons", "Protonokból és elektronokból készült", "Făcut din protoni și electroni") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Korrekt! Sie bilden zusammen die Nukleonen im Kern.", "Correct! Together they form the nucleons in the nucleus.", "Helyes! Együtt alkotják az atommag nukleonjait.", "Corect! Împreună formează nucleonii din nucleu."),
            failFeedback: ml("Nicht ganz. Der Kern enthält Protonen und Neutronen.", "Not quite. The nucleus contains protons and neutrons.", "Nem egészen. Az atommag protonokat és neutronokat tartalmaz.", "Nu chiar. Nucleul conține protoni și neutroni.")
          },
          {
            id: "ph-8-sr-1-s3",
            title: ml("Masse", "Mass", "Tömeg", "Mass"),
            prompt: ml("Wo befindet sich fast die gesamte Masse eines Atoms?", "Where is almost the entire mass of an atom?", "Hol van majdnem az atom teljes tömege?", "Unde este aproape întreaga masă a unui atom?"),
            sceneType: "nature",
            visual: { icon: "⚖️", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("In der Atomhülle", "In the atomic shell", "Az atomburokban", "În învelișul atomic") },
              { id: "b", label: ml("Im Atomkern", "In the atomic nucleus", "Az atommagban", "În nucleul atomic") },
              { id: "c", label: ml("Gleichmäßig verteilt", "Evenly distributed", "Egyenletesen elosztva", "Distribuit uniform") },
              { id: "d", label: ml("Außerhalb des Atoms", "Outside the atom", "Az atomon kívül", "În afara atomului") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Genau! Elektronen wiegen fast nichts.", "Exactly! Electrons weigh almost nothing.", "Pontosan! Az elektronok szinte semmit sem nyomnak.", "Exact! Electronii nu cântăresc aproape nimic."),
            failFeedback: ml("Leider falsch. Der winzige Kern enthält über 99% der Masse.", "Unfortunately wrong. The tiny nucleus contains over 99% of the mass.", "Sajnos rossz. Az apró mag tartalmazza a tömeg több mint 99%-át.", "Din păcate, greșit. Nucleul mic conține peste 99% din masă.")
          },
          {
            id: "ph-8-sr-1-s4",
            title: ml("Ordnungszahl", "Atomic number", "Atomszám", "Numărul atomic"),
            prompt: ml("Was gibt die Ordnungszahl im Periodensystem an?", "What does the atomic number in the periodic table indicate?", "Mit jelez a periódusos rendszer rendszáma?", "Ce indică numărul atomic din tabelul periodic?"),
            sceneType: "community",
            visual: { icon: "📋", bg: "#0891b2", accent: "#22d3ee" },
            choices: [
              { id: "a", label: ml("Anzahl der Neutronen", "Number of neutrons", "Neutronok száma", "Numărul de neutroni") },
              { id: "b", label: ml("Das Gewicht des Atoms", "The weight of the atom", "Az atom tömege", "Greutatea atomului") },
              { id: "c", label: ml("Anzahl der Protonen", "Number of protons", "Protonok száma", "Numărul de protoni") },
              { id: "d", label: ml("Anzahl der Schalen", "Number of shells", "A héjak száma", "Numărul de carcase") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Stimmt! Sie bestimmt das chemische Element.", "That's right! It determines the chemical element.", "Úgy van! Meghatározza a kémiai elemet.", "Așa este! Determină elementul chimic."),
            failFeedback: ml("Falsch. Die Ordnungszahl ist gleich der Protonenzahl.", "Wrong. The atomic number is equal to the proton number.", "Rossz. Az atomszám megegyezik a protonszámmal.", "Greșit. Numărul atomic este egal cu numărul protonilor.")
          }
        ]
      },
      {
        id: "ph-8-sr-2",
        title: ml("Physik-Sprint K8 - Elektromagnetismus", "Physics Sprint K8 - Electromagnetism", "Fizika Sprint K8 – Elektromágnesesség", "Physics Sprint K8 - Electromagnetism"),
        instruction: ml("Beantworte Fragen zu Spulen und Induktion.", "Answer questions about coils and induction.", "Válaszoljon a tekercsekkel és az indukcióval kapcsolatos kérdésekre.", "Răspundeți la întrebări despre bobine și inducție."),
        scenes: [
          {
            id: "ph-8-sr-2-s1",
            title: ml("Induktion", "Induction", "Indukció", "Inducție"),
            prompt: ml("Was passiert, wenn sich ein Magnet in einer Spule bewegt?", "What happens when a magnet moves in a coil?", "Mi történik, ha egy mágnes a tekercsben mozog?", "Ce se întâmplă când un magnet se mișcă într-o bobină?"),
            sceneType: "community",
            visual: { icon: "⚡", bg: "#854d0e", accent: "#facc15" },
            choices: [
              { id: "a", label: ml("Die Spule schmilzt", "The coil melts", "A tekercs megolvad", "Bobina se topește") },
              { id: "b", label: ml("Es wird eine elektrische Spannung induziert", "An electrical voltage is induced", "Elektromos feszültség indukálódik", "O tensiune electrică este indusă") },
              { id: "c", label: ml("Der Magnet wird schwerer", "The magnet becomes heavier", "A mágnes nehezebbé válik", "Magnetul devine mai greu") },
              { id: "d", label: ml("Es entsteht Licht", "Light is created", "A fény létrejön", "Lumina este creată") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig! Das ist das Prinzip der elektromagnetischen Induktion.", "Correct! This is the principle of electromagnetic induction.", "Helyes! Ez az elektromágneses indukció elve.", "Corect! Acesta este principiul inducției electromagnetice."),
            failFeedback: ml("Falsch. Es entsteht durch Induktion eine Spannung.", "Incorrect. A voltage is created by induction.", "Hibás. Az indukció feszültséget hoz létre.", "Incorect. O tensiune este creată prin inducție.")
          },
          {
            id: "ph-8-sr-2-s2",
            title: ml("Generator", "Generator", "Generátor", "Generator"),
            prompt: ml("Welche Energieumwandlung findet in einem Generator statt?", "What energy conversion takes place in a generator?", "Milyen energiaátalakítás megy végbe egy generátorban?", "în ce generator are loc conversia de energie?"),
            sceneType: "community",
            visual: { icon: "🏗️", bg: "#0f766e", accent: "#2dd4bf" },
            choices: [
              { id: "a", label: ml("Elektrische in Mechanische Energie", "Electrical to mechanical energy", "Elektromos-mechanikai energia", "Energie electrică până la mecanică *") },
              { id: "b", label: ml("Wärmeenergie in Lichtenergie", "Heat energy into light energy", "Hőenergiából fényenergiává", "Energia de căldură în energie luminoasă") },
              { id: "c", label: ml("Mechanische in Elektrische Energie", "Mechanical to electrical energy", "Mechanikus elektromos energiává", "Energie mecanică în energie electrică") },
              { id: "d", label: ml("Chemische in Elektrische Energie", "Chemical into electrical energy", "Vegyi anyagból elektromos energia", "Chimic în energie electrică") }
            ],
            correctChoiceId: "c",
            successFeedback: ml("Korrekt! Bewegung wird zu Strom (z.B. Windrad).", "Correct! Movement becomes electricity (e.g. wind turbine).", "Helyes! A mozgás elektromossággá válik (pl. szélturbina).", "Corect! Mișcarea devine electricitate (de exemplu, turbină eoliană)."),
            failFeedback: ml("Nicht ganz. Er wandelt Bewegung in Strom um.", "Not quite. It converts movement into electricity.", "Nem egészen. A mozgást elektromos árammá alakítja át.", "Nu chiar. Transformă mișcarea în energie electrică.")
          },
          {
            id: "ph-8-sr-2-s3",
            title: ml("Transformator", "Transformer", "Transformátor", "Transformator"),
            prompt: ml("Wofür nutzt man einen Transformator?", "What do you use a transformer for?", "Mire használnak transzformátort?", "La ce folosești un transformator?"),
            sceneType: "community",
            visual: { icon: "🔌", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Um Gleichstrom zu erzeugen", "To produce direct current", "Egyenáram előállításához", "Pentru a produce curent continuu") },
              { id: "b", label: ml("Um Wechselspannung hoch oder runter zu transformieren", "To transform alternating voltage up or down", "A váltakozó feszültség átalakítása felfelé vagy lefelé", "Pentru a transforma tensiunea alternativă în sus sau în jos") },
              { id: "c", label: ml("Um Strom zu speichern", "To store electricity", "Az áram tárolására", "Pentru a stoca energie electrică") },
              { id: "d", label: ml("Um Widerstand zu messen", "To measure resistance", "Az ellenállás mérése", "Pentru a măsura rezistența") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Genau! Er hat eine Primär- und eine Sekundärspule.", "Exactly! It has a primary and a secondary coil.", "Pontosan! Van egy primer és egy szekunder tekercs.", "Exact! Are o bobină primară și o bobină secundară."),
            failFeedback: ml("Leider falsch. Er ändert die Spannungshöhe.", "Unfortunately wrong. It changes the voltage level.", "Sajnos tévedés. Megváltoztatja a feszültségszintet.", "Din păcate, greșit. Schimbă nivelul tensiunii.")
          },
          {
            id: "ph-8-sr-2-s4",
            title: ml("Motor", "Motor", "Motor", "Motor"),
            prompt: ml("Ein Elektromotor ist vom Prinzip her die Umkehrung von...", "In principle, an electric motor is the reverse of...", "Elvileg egy villanymotor a fordítottja...", "În principiu, un motor electric este inversul..."),
            sceneType: "community",
            visual: { icon: "⚙️", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("Einem Generator", "A generator", "Egy generátor", "Un generator") },
              { id: "b", label: ml("Einem Akku", "A battery", "Akkumulátor", "O baterie") },
              { id: "c", label: ml("Einer Glühlampe", "A light bulb", "Egy villanykörte", "Un bec") },
              { id: "d", label: ml("Einem Thermometer", "A thermometer", "Egy hőmérő", "Un termometru") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Stimmt! Motor: Strom -> Bewegung. Generator: Bewegung -> Strom.", "That's right! Motor: current -> movement. Generator: Movement -> Electricity.", "Így van! Motor: áram -> mozgás. Generátor: Mozgás -> Villamos energia.", "Așa este! Motor: curent -> miscare. Generator: Mișcare -> Electricitate."),
            failFeedback: ml("Falsch. Er ist die Umkehrung des Generators.", "Incorrect. It is the reverse of the generator.", "Helytelen. Ez a generátor fordítottja.", "Incorecte. Este reversul generatorului.")
          }
        ]
      },
      {
        id: "ph-8-sr-3",
        title: ml("Physik-Sprint K8 - Moderne Physik", "Physics Sprint K8 - Modern Physics", "Physics Sprint K8 – Modern fizika", "Physics Sprint K8 - Modern Physics"),
        instruction: ml("Teste dein Wissen zur Kernphysik.", "Test your knowledge of nuclear physics.", "Tegye próbára magfizikai ismereteit.", "Testează-ți cunoștințele de fizică nucleară."),
        scenes: [
          {
            id: "ph-8-sr-3-s1",
            title: ml("Strahlung", "Radiation", "Sugárzás", "Radiția"),
            prompt: ml("Welche Strahlung besteht aus Heliumkernen?", "What radiation consists of helium nuclei?", "Milyen sugárzás áll a héliummagokból?", "Ce radiație constă din nuclee de heliu?"),
            sceneType: "nature",
            visual: { icon: "☢️", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: ml("Röntgenstrahlung", "X-rays", "Röntgensugarak", "Raze X") },
              { id: "b", label: ml("Gammastrahlung", "Gamma radiation", "Gamma-sugárzás", "Radiția gamma") },
              { id: "c", label: ml("Betastrahlung", "Beta radiation", "Béta-sugárzás", "Radiația beta") },
              { id: "d", label: ml("Alphastrahlung", "Alpha radiation", "Alfa sugárzás", "16>Radiția alfa") }
            ],
            correctChoiceId: "d",
            successFeedback: ml("Richtig! Alphateilchen sind positiv geladene Heliumkerne.", "Correct! Alpha particles are positively charged helium nuclei.", "Helyes! Az alfa-részecskék pozitív töltésű héliummagok.", "Corect! Particulele alfa sunt nuclee de heliu încărcate pozitiv."),
            failFeedback: ml("Falsch. Es ist die Alphastrahlung.", "Wrong. It is the alpha radiation.", "Rossz. Ez az alfa-sugárzás.", "Greșit. Este radiația alfa.")
          },
          {
            id: "ph-8-sr-3-s2",
            title: ml("Abschirmung", "Shielding", "árnyékolás", "Ecranarea"),
            prompt: ml("Womit kann man Alphastrahlung bereits stoppen?", "How can you stop alpha radiation?", "Hogyan lehet megállítani az alfa-sugárzást?", "Cum puteți opri radiația alfa?"),
            sceneType: "community",
            visual: { icon: "🛡️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Nur mit dickem Blei", "Only with thick lead", "Csak vastag ólommal", "Numai cu plumb gros") },
              { id: "b", label: ml("Mit einem Blatt Papier", "With a sheet of paper", "Papírlappal", "Cu o foaie de hârtie") },
              { id: "c", label: ml("Mit 10 cm Beton", "With 10 cm of concrete", "10 cm betonnal", "Cu 10 cm de beton") },
              { id: "d", label: ml("Gar nicht", "Not at all", "Egyáltalán nem", "Nici deloc") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Korrekt! Sie hat eine sehr geringe Durchdringungskraft.", "Correct! It has a very low penetrating power.", "Helyesen! Nagyon alacsony behatoló ereje van.", "Corect! Are o putere de penetrare foarte scăzută."),
            failFeedback: ml("Nicht ganz. Ein Blatt Papier reicht oft schon aus.", "Not quite. A sheet of paper is often enough.", "Nem egészen. Gyakran elég egy papírlap is.", "Nu chiar. O foaie de hârtie este deseori suficientă.")
          },
          {
            id: "ph-8-sr-3-s3",
            title: ml("Halbwertszeit", "Half-life", "Felezési idő", "Timp de înjumătățire"),
            prompt: ml("Was beschreibt die Halbwertszeit?", "What describes the half-life?", "Mi jellemzi a felezési időt?", "Ce descrie timpul de înjumătățire?"),
            sceneType: "nature",
            visual: { icon: "⏱️", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Die Zeit, bis die Hälfte der Atomkerne zerfallen ist", "The time until half the Atomic nuclei decay is", "Az atommagok felének lebomlásáig eltelt idő", "m/2)") },
              { id: "b", label: ml("Die Hälfte des Alters der Erde", "Half the age of the Earth", "A Föld korának fele", "Jumătate din vârsta Pământului") },
              { id: "c", label: ml("Die Zeit, bis die Strahlung doppelt so stark ist", "The time until the radiation is twice as strong", "A sugárzás kétszeresére eltelt idő", "Timpul până când radiația este de două ori mai puternică") },
              { id: "d", label: ml("Die Zeit, bis ein Elektron halbiert wird", "The time until an electron is halved", "Az elektron felezéséig eltelt idő", "Timpul până când un electron este înjumătățit") }
            ],
            correctChoiceId: "a",
            successFeedback: ml("Genau! Nach einer Halbwertszeit ist noch 50% des Materials da.", "Exactly! After a half-life, 50% of the material is still there.", "Pontosan! A felezési idő után az anyag 50%-a még mindig ott van.", "Exact! După un timp de înjumătățire, 50% din material este încă acolo."),
            failFeedback: ml("Leider falsch. Sie gibt an, wann die Hälfte zerfallen ist.", "Unfortunately wrong. It indicates when half has disintegrated.", "Sajnos rossz. Azt jelzi, ha a fele szétesett.", "Din păcate, greșit. Indică când jumătate s-a dezintegrat.")
          },
          {
            id: "ph-8-sr-3-s4",
            title: ml("Einstein", "Einstein", "Einstein", "Estein"),
            prompt: ml("Welche berühmte Formel beschreibt die Äquivalenz von Masse und Energie?", "Which famous formula describes the equivalence of mass and energy?", "Melyik híres képlet írja le a tömeg és az energia egyenértékűségét?", "Care formulă celebră descrie echivalența masei și energiei?"),
            sceneType: "community",
            visual: { icon: "🧠", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: ml("F = m * a", "F = m * a", "F = m * a", "F = m * a") },
              { id: "b", label: ml("E = m * c²", "E = m * c²", "E = m * c²", "E = m * c²") },
              { id: "c", label: ml("W = F * s", "W = F * s", "W = F*s", "L = F * s") },
              { id: "d", label: ml("v = s / t", "v = s / t", "v = s / t", "v = s / t") }
            ],
            correctChoiceId: "b",
            successFeedback: ml("Stimmt! Von Albert Einstein.", "That's right! By Albert Einstein.", "Úgy van! Albert Einstein.", "Așa este! De Albert Einstein."),
            failFeedback: ml("Falsch. Es ist E = m * c².", "Incorrect. It is E = m * c².", "Hibás. Ez E = m * c².", "Incorect. Este E = m * c².")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-8-cb-1",
        title: ml("Atomare Größen", "Atomic sizes", "Atomméretek", "Dimensiuni atomice"),
        instruction: ml("Ordne die Strukturen nach ihrer Größe (klein zu groß).", "Order the structures according to their size (small to large).", "Rendezze el a szerkezeteket méretük szerint (kicsitől nagyig).", "Ordonează structurile în funcție de mărimea lor (de la mic la mare)."),
        hint: "Ein Elektron ist viel kleiner als ein ganzes Atom.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "atom", label: ml("Ganzes Atom", "Whole atom", "Egész atom", "Atomul întreg"), emoji: "⚛️" },
          { id: "kern", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), emoji: "🔴" },
          { id: "elektron", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "➖" },
          { id: "molekuel", label: ml("Molekül (z.B. Wasser)", "Molecule (e.g. water)", "Molekula (pl. víz)", "Moleculă (de exemplu, apă)"), emoji: "💧" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Am kleinsten", "1. Smallest", "1. Legkisebb", "1. Cele mai mici") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Am größten", "4. Largest", "4. Legnagyobb", "4. Cel mai mare") }
        ],
        solution: ["elektron", "kern", "atom", "molekuel"]
      },
      {
        id: "ph-8-cb-2",
        title: ml("Elektromagnetisches Spektrum", "Electromagnetic spectrum", "Elektromágneses spektrum", "Spectrul electromagnetic"),
        instruction: ml("Ordne nach Energie der Strahlung (niedrig nach hoch).", "Order according to the energy of the radiation (low to high).", "Rendezés a sugárzás energiája szerint (alacsonytól magasig).", "Ordonează în funcție de energia radiației (de la mic la mare)."),
        hint: "Radiowellen sind harmlos, Gammastrahlung sehr energiereich.",
        theme: { bg: "#0f172a", accent: "#8b5cf6", card: "#1c1917" },
        parts: [
          { id: "licht", label: ml("Sichtbares Licht", "Visible light", "Látható fény", "Lumina vizibilă"), emoji: "💡" },
          { id: "radio", label: ml("Radiowellen", "Radio waves", "Rádióhullámok", "Unde radio"), emoji: "📻" },
          { id: "gamma", label: ml("Gammastrahlung", "Gamma radiation", "Gamma-sugárzás", "Radiția gamma"), emoji: "☢️" },
          { id: "roentgen", label: ml("Röntgenstrahlung", "X-rays", "Röntgensugarak", "Raze X"), emoji: "🩻" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Niedrigste Energie", "1. Lowest energy", "1. A legalacsonyabb energia", "1. Cea mai scăzută energie") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchste Energie", "4. Highest energy", "4. Legnagyobb energia", "4. Cea mai mare energie") }
        ],
        solution: ["radio", "licht", "roentgen", "gamma"]
      },
      {
        id: "ph-8-cb-3",
        title: ml("Durchdringungskraft", "Penetrating power", "Áthatoló erő", "Puterea de penetrare"),
        instruction: ml("Ordne, welches Material welche Strahlung stoppen kann.", "Order which material can stop which radiation.", "Osztályozza, hogy melyik anyag melyik sugárzást képes megállítani.", "Clasificați ce material poate opri ce radiație."),
        hint: "Alpha wird von Papier gestoppt, Gamma braucht Blei/Beton.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "blei", label: ml("Dicker Bleiblock (stoppt Gamma)", "Thick block of lead (stops gamma)", "Vastag ólomtömb (leállítja a gamma-t)", "Blocul gros de plumb (oprește gama)"), emoji: "🧱" },
          { id: "papier", label: ml("Papier (stoppt Alpha)", "Paper (stops alpha)", "Papír (leállítja az alfa-t)", "Hârtie (oprește alfa)"), emoji: "📄" },
          { id: "alu", label: ml("Aluminiumblech (stoppt Beta)", "Aluminium sheet (stops beta)", "Alumínium lemez (leállítja a béta verziót)", "Foaie de aluminiu (oprește beta)"), emoji: "🥫" },
          { id: "nichts", label: ml("Kein Hindernis", "No obstacle", "Nincs akadály", "Fără obstacol"), emoji: "💨" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Hält nichts auf", "1. Nothing stops it", "1. Semmi sem állítja meg", "1. Nimic nu o oprește") },
          { id: "slot-2", label: ml("2. Stoppt schwache Strahlung", "2. Stops weak radiation", "2. Megállítja a gyenge sugárzást", "2. Oprește radiația slabă") },
          { id: "slot-3", label: ml("3. Stoppt mittlere Strahlung", "3. Stops medium radiation", "3. Megállítja a közepes sugárzást", "3. Oprește radiația medie") },
          { id: "slot-4", label: ml("4. Stoppt stärkste Strahlung", "4. Stops the strongest radiation", "4. Megállítja a legerősebb sugárzást", "4. Oprește cele mai puternice radiații") }
        ],
        solution: ["nichts", "papier", "alu", "blei"]
      },
      {
        id: "ph-8-cb-4",
        title: ml("Atomare Größen (Pro)", "Atomic quantities (Pro)", "Atommennyiségek (Pro)", "Mărimi atomice (Pro)"),
        instruction: ml("Ordne die Strukturen nach ihrer Größe (klein zu groß).", "Order the structures according to their size (small to large).", "Rendezze el a szerkezeteket méretük szerint (kicsitől nagyig).", "Ordonează structurile în funcție de mărimea lor (de la mic la mare)."),
        hint: "Ein Elektron ist viel kleiner als ein ganzes Atom.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "atom", label: ml("Ganzes Atom", "Whole atom", "Egész atom", "Atomul întreg"), emoji: "⚛️" },
          { id: "kern", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), emoji: "🔴" },
          { id: "elektron", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "➖" },
          { id: "molekuel", label: ml("Molekül (z.B. Wasser)", "Molecule (e.g. water)", "Molekula (pl. víz)", "Moleculă (de exemplu, apă)"), emoji: "💧" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Am kleinsten", "1. Smallest", "1. Legkisebb", "1. Cele mai mici") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Am größten", "4. Largest", "4. Legnagyobb", "4. Cel mai mare") }
        ],
        solution: ["elektron", "kern", "atom", "molekuel"]
      },
      {
        id: "ph-8-cb-5",
        title: ml("Elektromagnetisches Spektrum (Pro)", "Electromagnetic Spectrum (Pro)", "Elektromágneses spektrum (Pro)", "Spectrul electromagnetic (Pro)"),
        instruction: ml("Ordne nach Energie der Strahlung (niedrig nach hoch).", "Order according to the energy of the radiation (low to high).", "Rendezés a sugárzás energiája szerint (alacsonytól magasig).", "Ordonează în funcție de energia radiației (de la mic la mare)."),
        hint: "Radiowellen sind harmlos, Gammastrahlung sehr energiereich.",
        theme: { bg: "#0f172a", accent: "#8b5cf6", card: "#1c1917" },
        parts: [
          { id: "licht", label: ml("Sichtbares Licht", "Visible light", "Látható fény", "Lumina vizibilă"), emoji: "💡" },
          { id: "radio", label: ml("Radiowellen", "Radio waves", "Rádióhullámok", "Unde radio"), emoji: "📻" },
          { id: "gamma", label: ml("Gammastrahlung", "Gamma radiation", "Gamma-sugárzás", "Radiția gamma"), emoji: "☢️" },
          { id: "roentgen", label: ml("Röntgenstrahlung", "X-rays", "Röntgensugarak", "Raze X"), emoji: "🩻" }
        ],
        slots: [
          { id: "slot-1", label: ml("1. Niedrigste Energie", "1. Lowest energy", "1. A legalacsonyabb energia", "1. Cea mai scăzută energie") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: ml("4. Höchste Energie", "4. Highest energy", "4. Legnagyobb energia", "4. Cea mai mare energie") }
        ],
        solution: ["radio", "licht", "roentgen", "gamma"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-8-mr-1",
        title: ml("Atombausteine", "Atomic building blocks", "Atomépítő elemek", "Blocuri atomice"),
        instruction: ml("Merke dir die Teile des Atoms!", "Remember the parts of the atom!", "Ne felejtsük el az atom részeit!", "Amintiți-vă părțile atomului!"),
        flashDurationMs: 4000,
        selectionLimit: 3,
        theme: { bg: "#0f172a", accent: "#a855f7", radar: "#4c1d95" },
        targetItems: [
          { id: "proton", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "➕" },
          { id: "neutron", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪" },
          { id: "elektron", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "➖" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Bakterium", "Bacteria", "Baktériumok", "Bacterii"), emoji: "🦠" },
          { id: "dec2", label: ml("Zelle", "Cell", "Cell", "Celula"), emoji: "🧬" },
          { id: "dec3", label: ml("Molekül", "Molecule", "Molekula", "Moleculă"), emoji: "💧" },
          { id: "dec4", label: ml("Lichtjahr", "Light year", "Fényév", "Anul lumină"), emoji: "🌌" },
          { id: "dec5", label: ml("Planet", "Planet", "Bolygó", "Planeta"), emoji: "🪐" }
        ]
      },
      {
        id: "ph-8-mr-2",
        title: ml("Kraftwerke", "Power plants", "Erőművek", "Centrale electrice"),
        instruction: ml("Merke dir Energiequellen für Kraftwerke!", "Remember energy sources for power plants!", "Emlékezzen az erőművek energiaforrásaira!", "Amintiți-vă sursele de energie pentru centralele electrice!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#34d399", radar: "#064e3b" },
        targetItems: [
          { id: "wasser", label: ml("Wasserkraft", "Hydropower", "Vízenergia", "Hidroenergie"), emoji: "🌊" },
          { id: "wind", label: ml("Windkraft", "Wind power", "Szélenergia", "Puterea eoliană"), emoji: "🌬️" },
          { id: "kohle", label: ml("Kohle", "Coal", "Szén", "Cărbune"), emoji: "🪨" },
          { id: "kern", label: ml("Kernkraft (Uran)", "Nuclear power (uranium)", "Atomenergia (urán)", "Putere nucleară (uraniu)"), emoji: "☢️" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋" },
          { id: "dec2", label: ml("Transformator", "Transformer", "Transformátor", "Transformator"), emoji: "🏗️" },
          { id: "dec3", label: ml("Elektromotor", "Electric motor", "Elektromos motor", "Motor electric"), emoji: "⚙️" },
          { id: "dec4", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡" },
          { id: "dec5", label: ml("Prisma", "Prism", "Prizma", "Prismă"), emoji: "🔺" }
        ]
      },
      {
        id: "ph-8-mr-3",
        title: ml("Strahlungsarten", "Types of radiation", "Sugárzás típusai", "Tipuri de radiații"),
        instruction: ml("Merke dir die energiereichen Strahlungen!", "Note the high-energy radiation!", "Jegyezze meg a nagyenergiájú sugárzást!", "Rețineți radiația de înaltă energie!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f87171", radar: "#7f1d1d" },
        targetItems: [
          { id: "alpha", label: ml("Alphastrahlung", "Alpha radiation", "Alfa sugárzás", "16>Radiția alfa"), emoji: "☢️" },
          { id: "beta", label: ml("Betastrahlung", "Beta radiation", "Béta-sugárzás", "Radiația beta"), emoji: "⚡" },
          { id: "gamma", label: ml("Gammastrahlung", "Gamma radiation", "Gamma-sugárzás", "Radiția gamma"), emoji: "🌊" },
          { id: "roent", label: ml("Röntgenstrahlung", "X-rays", "Röntgensugarak", "Raze X"), emoji: "🩻" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Infraschall", "Infrasound", "Infrahang", "Infrasunete"), emoji: "🐘" },
          { id: "dec2", label: ml("Ultraschall", "Ultrasound", "Ultrahang", "Ultrasunete"), emoji: "🦇" },
          { id: "dec3", label: ml("Wärmeleitung", "Heat conduction", "Hővezetés", "Conducția căldurii"), emoji: "♨️" },
          { id: "dec4", label: ml("Reibung", "Friction", "Súrlódás", "Fricțiune"), emoji: "🤝" },
          { id: "dec5", label: ml("Schwerkraft", "Gravity", "Gravitáció", "Gravația"), emoji: "🌍" }
        ]
      },
      {
        id: "ph-8-mr-4",
        title: ml("Atombausteine (Pro)", "Atomic building blocks (Pro)", "Atom építőelemek (Pro)", "Blocuri de construcție atomice (Pro)"),
        instruction: ml("Merke dir die Teile des Atoms!", "Remember the parts of the atom!", "Ne felejtsük el az atom részeit!", "Amintiți-vă părțile atomului!"),
        flashDurationMs: 4000,
        selectionLimit: 3,
        theme: { bg: "#0f172a", accent: "#a855f7", radar: "#4c1d95" },
        targetItems: [
          { id: "proton", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "➕" },
          { id: "neutron", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪" },
          { id: "elektron", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "➖" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Bakterium", "Bacteria", "Baktériumok", "Bacterii"), emoji: "🦠" },
          { id: "dec2", label: ml("Zelle", "Cell", "Cell", "Celula"), emoji: "🧬" },
          { id: "dec3", label: ml("Molekül", "Molecule", "Molekula", "Moleculă"), emoji: "💧" },
          { id: "dec4", label: ml("Lichtjahr", "Light year", "Fényév", "Anul lumină"), emoji: "🌌" },
          { id: "dec5", label: ml("Planet", "Planet", "Bolygó", "Planeta"), emoji: "🪐" }
        ]
      },
      {
        id: "ph-8-mr-5",
        title: ml("Kraftwerke (Pro)", "Power plants (Pro)", "Erőművek (Pro)", "Centrale electrice (Pro)"),
        instruction: ml("Merke dir Energiequellen für Kraftwerke!", "Remember energy sources for power plants!", "Emlékezzen az erőművek energiaforrásaira!", "Amintiți-vă sursele de energie pentru centralele electrice!"),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#34d399", radar: "#064e3b" },
        targetItems: [
          { id: "wasser", label: ml("Wasserkraft", "Hydropower", "Vízenergia", "Hidroenergie"), emoji: "🌊" },
          { id: "wind", label: ml("Windkraft", "Wind power", "Szélenergia", "Puterea eoliană"), emoji: "🌬️" },
          { id: "kohle", label: ml("Kohle", "Coal", "Szén", "Cărbune"), emoji: "🪨" },
          { id: "kern", label: ml("Kernkraft (Uran)", "Nuclear power (uranium)", "Atomenergia (urán)", "Putere nucleară (uraniu)"), emoji: "☢️" }
        ],
        decoyItems: [
          { id: "dec1", label: ml("Batterie", "Battery", "Akkumulátor", "baterie"), emoji: "🔋" },
          { id: "dec2", label: ml("Transformator", "Transformer", "Transformátor", "Transformator"), emoji: "🏗️" },
          { id: "dec3", label: ml("Elektromotor", "Electric motor", "Elektromos motor", "Motor electric"), emoji: "⚙️" },
          { id: "dec4", label: ml("Glühlampe", "Light bulb", "Villanykörte", "Bec"), emoji: "💡" },
          { id: "dec5", label: ml("Prisma", "Prism", "Prizma", "Prismă"), emoji: "🔺" }
        ]
      }
    ]
  },
};
