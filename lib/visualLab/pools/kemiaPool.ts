import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";
// Helper for generating multilingual text
const ml = (de: string, en: string, hu: string, ro: string): string => ({ de, en, hu, ro } as unknown as string);


export const KEMIA_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "ke-5-mc-1",
        title: ml("Aggregatzustände: Fest", "States of matter: Solid", "Halmazottak: szilárd", "Stări ale materiei: solid"),
        prompt: ml("Fange alle festen Stoffe!", "Catch all the solid substances!", "Fogja le az összes szilárd anyagot!", "Prin toate substanțele solide!"),
        goal: 5,
        speed: 1.2,
        theme: { sky: "#0f0f1b", glow: "#00f0ff", accent: "#ff007f" },
        correctItems: [
          { id: "mc1-c1", label: ml("Eis", "Ice", "Jég", "Gheață"), emoji: "🧊" },
          { id: "mc1-c2", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "mc1-c3", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" },
          { id: "mc1-c4", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "mc1-c5", label: ml("Salz", "Salt", "Só", "Sare"), emoji: "🧂" }
        ],
        wrongItems: [
          { id: "mc1-w1", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "mc1-w2", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "mc1-w3", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️" },
          { id: "mc1-w4", label: ml("Dampf", "Steam", "Gőz", "Abur"), emoji: "☁️" },
          { id: "mc1-w5", label: ml("Saft", "Juice", "Juice", "Suc"), emoji: "🧃" }
        ]
      },
      {
        id: "ke-5-mc-2",
        title: ml("Aggregatzustände: Flüssig", "Physical states: liquid", "Halmazati állapot: folyékony", "Stări fizice: lichid"),
        prompt: ml("Fange alle flüssigen Stoffe!", "Catch all liquid substances!", "Fogjunk minden folyékony anyagot!", "Prin toate substanțele lichide!"),
        goal: 5,
        speed: 1.5,
        theme: { sky: "#1a0b2e", glow: "#ff007f", accent: "#00f0ff" },
        correctItems: [
          { id: "mc2-c1", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "mc2-c2", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️" },
          { id: "mc2-c3", label: ml("Milch", "Milk", "Tej", "Lapte"), emoji: "🥛" },
          { id: "mc2-c4", label: ml("Saft", "Juice", "Juice", "Suc"), emoji: "🧃" },
          { id: "mc2-c5", label: ml("Honig", "Honey", "Méz", "Miere"), emoji: "🍯" }
        ],
        wrongItems: [
          { id: "mc2-w1", label: ml("Eis", "Ice", "Jég", "Gheață"), emoji: "🧊" },
          { id: "mc2-w2", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" },
          { id: "mc2-w3", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "mc2-w4", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "mc2-w5", label: ml("Dampf", "Steam", "Gőz", "Abur"), emoji: "☁️" }
        ]
      },
      {
        id: "ke-5-mc-3",
        title: ml("Aggregatzustände: Gasförmig", "Physical states: gaseous", "Fizikai állapot: gáz halmazállapotú", "Stări fizice: gazoasă"),
        prompt: ml("Fange alle gasförmigen Stoffe!", "Catch all gaseous substances!", "Fogj be minden gáznemű anyagot!", "Prinți toate substanțele gazoase!"),
        goal: 5,
        speed: 1.8,
        theme: { sky: "#0a192f", glow: "#00ff9d", accent: "#ff007f" },
        correctItems: [
          { id: "mc3-c1", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "mc3-c2", label: ml("Wasserdampf", "Water vapor", "Vízgőz", "Vapori de apă"), emoji: "☁️" },
          { id: "mc3-c3", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
          { id: "mc3-c4", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🫧" },
          { id: "mc3-c5", label: ml("Kohlendioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "🌫️" }
        ],
        wrongItems: [
          { id: "mc3-w1", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "mc3-w2", label: ml("Eis", "Ice", "Jég", "Gheață"), emoji: "🧊" },
          { id: "mc3-w3", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" },
          { id: "mc3-w4", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "mc3-w5", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️" }
        ]
      },
      {
        id: "ke-5-mc-4",
        title: ml("Aggregatzustände: Fest (Pro)", "Aggregate states: Solid (Pro)", "Halmazállapot: szilárd (Pro)", "Stări ale materiei: Solid (Pro)"),
        prompt: ml("Fange alle festen Stoffe!", "Catch all the solid substances!", "Fogja le az összes szilárd anyagot!", "Prin toate substanțele solide!"),
        goal: 5,
        speed: 1.2,
        theme: { sky: "#0f0f1b", glow: "#00f0ff", accent: "#ff007f" },
        correctItems: [
          { id: "mc4-c1", label: ml("Eis", "Ice", "Jég", "Gheață"), emoji: "🧊" },
          { id: "mc4-c2", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "mc4-c3", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" },
          { id: "mc4-c4", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "mc4-c5", label: ml("Salz", "Salt", "Só", "Sare"), emoji: "🧂" }
        ],
        wrongItems: [
          { id: "mc4-w1", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "mc4-w2", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "mc4-w3", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️" },
          { id: "mc4-w4", label: ml("Dampf", "Steam", "Gőz", "Abur"), emoji: "☁️" },
          { id: "mc4-w5", label: ml("Saft", "Juice", "Juice", "Suc"), emoji: "🧃" }
        ]
      },
      {
        id: "ke-5-mc-5",
        title: ml("Aggregatzustände: Flüssig (Pro)", "States of aggregation: liquid (Pro)", "Aggregációs állapotok: folyékony (Pro)", "Stări de agregare: lichid (Pro)"),
        prompt: ml("Fange alle flüssigen Stoffe!", "Catch all liquid substances!", "Fogjunk minden folyékony anyagot!", "Prin toate substanțele lichide!"),
        goal: 5,
        speed: 1.5,
        theme: { sky: "#1a0b2e", glow: "#ff007f", accent: "#00f0ff" },
        correctItems: [
          { id: "mc5-c1", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "mc5-c2", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️" },
          { id: "mc5-c3", label: ml("Milch", "Milk", "Tej", "Lapte"), emoji: "🥛" },
          { id: "mc5-c4", label: ml("Saft", "Juice", "Juice", "Suc"), emoji: "🧃" },
          { id: "mc5-c5", label: ml("Honig", "Honey", "Méz", "Miere"), emoji: "🍯" }
        ],
        wrongItems: [
          { id: "mc5-w1", label: ml("Eis", "Ice", "Jég", "Gheață"), emoji: "🧊" },
          { id: "mc5-w2", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" },
          { id: "mc5-w3", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "mc5-w4", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "mc5-w5", label: ml("Dampf", "Steam", "Gőz", "Abur"), emoji: "☁️" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ke-5-os-1",
        title: ml("Stoffeigenschaften: Magnetisch oder nicht?", "Material properties: magnetic or not?", "Az anyag tulajdonságai: mágneses vagy nem?", "Proprietățile materialului: magnetice sau nu?"),
        instruction: ml("Sortiere die Stoffe nach ihrer magnetischen Eigenschaft.", "Sort the substances according to their magnetic properties.", "Válogassa szét az anyagokat mágneses tulajdonságaik szerint.", "Sortați substanțele în funcție de proprietățile lor magnetice."),
        theme: { bg: "#111111", orbit: "#333333", accent: "#ff007f" },
        buckets: [
          { id: "b-mag", label: ml("Magnetisch", "Magnetic", "Mágneses", "Magnetic"), color: "#ff007f" },
          { id: "b-nonmag", label: ml("Nicht magnetisch", "Not magnetic", "Nem mágneses", "Nu magnetic"), color: "#00f0ff" }
        ],
        items: [
          { id: "os1-i1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "b-mag" },
          { id: "os1-i2", label: ml("Nickel", "Nickel", "Nikkel", "Nichel"), emoji: "🪙", bucketId: "b-mag" },
          { id: "os1-i3", label: ml("Kobalt", "Cobalt", "Kobalt", "Cobalt"), emoji: "🧲", bucketId: "b-mag" },
          { id: "os1-i4", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵", bucketId: "b-nonmag" },
          { id: "os1-i5", label: ml("Plastik", "Plastic", "műanyag", "plastic"), emoji: "🥤", bucketId: "b-nonmag" },
          { id: "os1-i6", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🫙", bucketId: "b-nonmag" }
        ]
      },
      {
        id: "ke-5-os-2",
        title: ml("Wasserlöslichkeit", "Water solubility", "Vízben való oldhatóság", "Solubilitatea în apă"),
        instruction: ml("Sortiere die Stoffe danach, ob sie sich in Wasser lösen.", "Sort the substances according to whether they dissolve in water.", "Válogassa szét az anyagokat aszerint, hogy oldódnak-e vízben.", "Sortați substanțele în funcție de dizolvarea în apă."),
        theme: { bg: "#0a192f", orbit: "#1a365d", accent: "#00f0ff" },
        buckets: [
          { id: "b-sol", label: ml("Löslich", "Soluble", "Oldható", "Solubil"), color: "#00f0ff" },
          { id: "b-insol", label: ml("Unlöslich", "Insoluble", "Oldhatatlan", "Insolubil"), color: "#ff007f" }
        ],
        items: [
          { id: "os2-i1", label: ml("Salz", "Salt", "Só", "Sare"), emoji: "🧂", bucketId: "b-sol" },
          { id: "os2-i2", label: ml("Zucker", "Sugar", "Cukor", "Zahăr"), emoji: "🍬", bucketId: "b-sol" },
          { id: "os2-i3", label: ml("Sand", "Sand", "Homok", "Nisip"), emoji: "🏖️", bucketId: "b-insol" },
          { id: "os2-i4", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️", bucketId: "b-insol" },
          { id: "os2-i5", label: ml("Kaffeepulver", "Coffee powder", "Kávépor", "Pudra de cafea"), emoji: "☕", bucketId: "b-sol" },
          { id: "os2-i6", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨", bucketId: "b-insol" }
        ]
      },
      {
        id: "ke-5-os-3",
        title: ml("Wärmeleitfähigkeit", "Thermal conductivity", "Hővezetőképesség", "Conductivitate termică"),
        instruction: ml("Sortiere die Stoffe nach ihrer Wärmeleitfähigkeit.", "Sort the substances according to their thermal conductivity.", "Válogassa szét az anyagokat hővezető képességük szerint.", "Sortați substanțele în funcție de conductibilitatea lor termică."),
        theme: { bg: "#2d0a0a", orbit: "#5c1a1a", accent: "#ff4500" },
        buckets: [
          { id: "b-cond", label: ml("Guter Leiter", "Good leader", "Jó vezető", "Bun lider"), color: "#ff4500" },
          { id: "b-insul", label: ml("Isolator", "Insulator", "Szigetelő", "Izolator"), color: "#00f0ff" }
        ],
        items: [
          { id: "os3-i1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉", bucketId: "b-cond" },
          { id: "os3-i2", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫", bucketId: "b-cond" },
          { id: "os3-i3", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "b-cond" },
          { id: "os3-i4", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵", bucketId: "b-insul" },
          { id: "os3-i5", label: ml("Styropor", "Styrofoam", "hungarocell", "Styrofoam"), emoji: "📦", bucketId: "b-insul" },
          { id: "os3-i6", label: ml("Wolle", "Wool", "Gyapjú", "Lână"), emoji: "🧶", bucketId: "b-insul" }
        ]
      },
      {
        id: "ke-5-os-4",
        title: ml("Stoffeigenschaften: Magnetisch oder nicht? (Pro)", "Material properties: Magnetic or not? (Pro)", "Anyagtulajdonságok: Mágneses vagy nem? (Pro)", "Proprietăți ale materialului: magnetic sau nu? (Pro)"),
        instruction: ml("Sortiere die Stoffe nach ihrer magnetischen Eigenschaft.", "Sort the substances according to their magnetic properties.", "Válogassa szét az anyagokat mágneses tulajdonságaik szerint.", "Sortați substanțele în funcție de proprietățile lor magnetice."),
        theme: { bg: "#111111", orbit: "#333333", accent: "#ff007f" },
        buckets: [
          { id: "b-mag", label: ml("Magnetisch", "Magnetic", "Mágneses", "Magnetic"), color: "#ff007f" },
          { id: "b-nonmag", label: ml("Nicht magnetisch", "Not magnetic", "Nem mágneses", "Nu magnetic"), color: "#00f0ff" }
        ],
        items: [
          { id: "os4-i1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "b-mag" },
          { id: "os4-i2", label: ml("Nickel", "Nickel", "Nikkel", "Nichel"), emoji: "🪙", bucketId: "b-mag" },
          { id: "os4-i3", label: ml("Kobalt", "Cobalt", "Kobalt", "Cobalt"), emoji: "🧲", bucketId: "b-mag" },
          { id: "os4-i4", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵", bucketId: "b-nonmag" },
          { id: "os4-i5", label: ml("Plastik", "Plastic", "műanyag", "plastic"), emoji: "🥤", bucketId: "b-nonmag" },
          { id: "os4-i6", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🫙", bucketId: "b-nonmag" }
        ]
      },
      {
        id: "ke-5-os-5",
        title: ml("Wasserlöslichkeit (Pro)", "Water solubility (Pro)", "Vízoldhatóság (Pro)", "Solubilitatea în apă (Pro)"),
        instruction: ml("Sortiere die Stoffe danach, ob sie sich in Wasser lösen.", "Sort the substances according to whether they dissolve in water.", "Válogassa szét az anyagokat aszerint, hogy oldódnak-e vízben.", "Sortați substanțele în funcție de dizolvarea în apă."),
        theme: { bg: "#0a192f", orbit: "#1a365d", accent: "#00f0ff" },
        buckets: [
          { id: "b-sol", label: ml("Löslich", "Soluble", "Oldható", "Solubil"), color: "#00f0ff" },
          { id: "b-insol", label: ml("Unlöslich", "Insoluble", "Oldhatatlan", "Insolubil"), color: "#ff007f" }
        ],
        items: [
          { id: "os5-i1", label: ml("Salz", "Salt", "Só", "Sare"), emoji: "🧂", bucketId: "b-sol" },
          { id: "os5-i2", label: ml("Zucker", "Sugar", "Cukor", "Zahăr"), emoji: "🍬", bucketId: "b-sol" },
          { id: "os5-i3", label: ml("Sand", "Sand", "Homok", "Nisip"), emoji: "🏖️", bucketId: "b-insol" },
          { id: "os5-i4", label: ml("Öl", "Oil", "Olaj", "Ulei"), emoji: "🛢️", bucketId: "b-insol" },
          { id: "os5-i5", label: ml("Kaffeepulver", "Coffee powder", "Kávépor", "Pudra de cafea"), emoji: "☕", bucketId: "b-sol" },
          { id: "os5-i6", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨", bucketId: "b-insol" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ke-5-sr-1",
        title: ml("Sicherheit im Labor", "Safety in the laboratory", "Biztonság a laboratóriumban", "Siguranța în laborator"),
        instruction: ml("Triff die richtigen Entscheidungen für die Sicherheit im Labor.", "Make the right decisions for safety in the laboratory.", "Hozza meg a megfelelő döntéseket a laboratóriumi biztonság érdekében.", "Luați deciziile corecte pentru siguranță în laborator."),
        scenes: [
          {
            id: "sr1-s1",
            title: ml("Schutzkleidung", "Protective clothing", "Védőruházat", "Haine de protecție"),
            prompt: ml("Du betrittst das Chemielabor. Was ziehst du an?", "You enter the chemistry laboratory. What are you putting on?", "Belép a kémiai laboratóriumba. Mit veszel fel?", "Intrați în laboratorul de chimie. Cu ce pui?"),
            sceneType: "safety",
            visual: { icon: "🥼", bg: "#1a1a2e", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: ml("Kittel und Schutzbrille", "Smock and Safety glasses", "Smock és védőszemüveg", "Smock și ochelari de protecție") },
              { id: "c2", label: ml("Nur meine normale Kleidung", "Just my normal clothes", "Csak a normál ruháim", "Doar hainele mele normale") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Richtig! Sicherheit geht vor.", "Correct! Safety first.", "Helyes! A biztonság az első.", "Siguranța în primul rând."),
            failFeedback: ml("Falsch! Im Labor brauchst du immer Schutzkleidung.", "Wrong! You always need protective clothing in the laboratory.", "Rossz! A laboratóriumban mindig szüksége van védőruházatra.", "Greșit! Întotdeauna aveți nevoie de îmbrăcăminte de protecție în laborator.")
          },
          {
            id: "sr1-s2",
            title: ml("Geruchsprobe", "Smell test", "Szagteszt", "Testul mirosului"),
            prompt: ml("Wie prüfst du den Geruch einer unbekannten Flüssigkeit?", "How do you check the smell of an unknown liquid?", "Hogyan ellenőrizheti egy ismeretlen folyadék szagát?", "Cum verifici mirosul unui lichid necunoscut?"),
            sceneType: "safety",
            visual: { icon: "👃", bg: "#1a1a2e", accent: "#ff007f" },
            choices: [
              { id: "c1", label: ml("Nase direkt über das Gefäß halten", "Hold your nose directly over the vessel", "Tartsa az orrát közvetlenül az edény fölé.", "Țineți-vă nasul direct deasupra vasului") },
              { id: "c2", label: ml("Den Geruch mit der Hand zufächeln", "Fan the smell with your hand", "Légyeztesd a szagot a kezével", "Alinați mirosul cu mâna") }
            ],
            correctChoiceId: "c2",
            successFeedback: ml("Sehr gut! So schützt du deine Atemwege.", "Very good! This is how you protect your respiratory system.", "Nagyon jó! Így védi légzőrendszerét.", "Foarte bine! Așa vă protejați sistemul respirator."),
            failFeedback: ml("Gefährlich! Dämpfe können ätzend sein.", "Dangerous! Vapors can be corrosive.", "Veszélyes! A gőzök maró hatásúak lehetnek.", "Periculoasă! Vaporii pot fi corozivi.")
          },
          {
            id: "sr1-s3",
            title: ml("Essen und Trinken", "Food and drink", "Étel és ital", "Mâncare și băutură"),
            prompt: ml("Du hast Durst während des Experiments. Was tust du?", "You are thirsty during the experiment. What are you doing?", "A kísérlet során szomjas vagy. Mit csinálsz?", "Îți este sete în timpul experimentului. Ce faci?"),
            sceneType: "safety",
            visual: { icon: "🚫", bg: "#1a1a2e", accent: "#ff007f" },
            choices: [
              { id: "c1", label: ml("Ich trinke aus meiner Wasserflasche", "I drink from my water bottle", "Iszok a kulacsomból", "Bău din sticla mea de apă") },
              { id: "c2", label: ml("Ich warte, bis ich das Labor verlasse", "I'll wait until I leave the laboratory", "Megvárom, amíg elhagyom a laboratóriumot", "Voi aștepta până ies din laborator") }
            ],
            correctChoiceId: "c2",
            successFeedback: ml("Korrekt! Im Labor ist Essen und Trinken verboten.", "Correct! Eating and drinking is prohibited in the laboratory.", "Helyes! A laboratóriumban enni és inni tilos.", "Corect! În laborator este interzis să mănânci și să bei."),
            failFeedback: ml("Falsch! Chemikalien könnten in dein Getränk gelangen.", "Wrong! Chemicals could get into your drink.", "Rossz! Vegyi anyagok kerülhetnek az italba.", "Greșit! Substanțele chimice ar putea intra în băutură.")
          },
          {
            id: "sr1-s4",
            title: ml("Aufräumen", "Cleanup", "Tisztítás", "Curăţare"),
            prompt: ml("Das Experiment ist beendet. Was machst du mit den Resten?", "The experiment is finished. What do you do with the leftovers?", "A kísérlet befejeződött. Mit csinálsz a maradékkal?", "Experimentul este încheiat. Ce faci cu resturile?"),
            sceneType: "safety",
            visual: { icon: "🧹", bg: "#1a1a2e", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: ml("Alles in den Ausguss kippen", "Pour everything down the sink", "Töntse le mindent a mosogatóba", "Toarnă totul în chiuvetă") },
              { id: "c2", label: ml("In die dafür vorgesehenen Sammelbehälter geben", "Place in the designated collection containers", "Tegye a kijelölt gyűjtőedényekbe.", "Puneți în recipientele de colectare desemnate") }
            ],
            correctChoiceId: "c2",
            successFeedback: ml("Perfekt! So schonen wir die Umwelt.", "Perfect! This is how we protect the environment.", "Tökéletes! Így védjük a környezetet.", "Perfect! Așa protejăm mediul."),
            failFeedback: ml("Falsch! Viele Chemikalien dürfen nicht ins Abwasser.", "Wrong! Many chemicals are not allowed into the wastewater.", "Rossz! Számos vegyszer nem kerülhet a szennyvízbe.", "Wrong! Multe substanțe chimice nu sunt permise în apele reziduale.")
          }
        ]
      },
      {
        id: "ke-5-sr-2",
        title: ml("Trennverfahren im Alltag", "Separation processes in everyday life", "Elválasztási folyamatok a mindennapi életben", "Procese de separare în viața de zi cu zi"),
        instruction: ml("Wähle das richtige Trennverfahren für die jeweilige Situation.", "Choose the correct separation method for the respective situation.", "Válassza ki az adott helyzetnek megfelelő elválasztási módszert.", "Alegeți metoda de separare corectă pentru situația respectivă."),
        scenes: [
          {
            id: "sr2-s1",
            title: ml("Nudeln kochen", "Cook the pasta", "Főzze meg a tésztát", "Gătiți pastele"),
            prompt: ml("Wie trennst du die gekochten Nudeln vom Wasser?", "How do you separate the cooked pasta from the water?", "Hogyan választja el a főtt tésztát a víztől?", "Cum separă pastele fierte de apă?"),
            sceneType: "nature",
            visual: { icon: "🍝", bg: "#0f172a", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: ml("Filtrieren (Sieb)", "Filter (sieve)", "Szűrő (szita)", "Filtru (sită)") },
              { id: "c2", label: ml("Verdampfen", "Evaporation", "Párolgás", "Evaporare") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Richtig! Ein Sieb wirkt wie ein Filter.", "Right! A sieve acts like a filter.", "Jó! A szita szűrőként működik.", "Corect! O sită acționează ca un filtru."),
            failFeedback: ml("Falsch! Das würde viel zu lange dauern.", "Wrong! That would take far too long.", "Rossz! Ez túl sokáig tartana.", "Greșit! Asta ar dura mult prea mult.")
          },
          {
            id: "sr2-s2",
            title: ml("Kaffee kochen", "Make coffee", "Kávét főzni", "Pregătiți cafea"),
            prompt: ml("Wie trennst du das Kaffeepulver vom flüssigen Kaffee?", "How do you separate the coffee powder from the liquid coffee?", "Hogyan választja el a kávéport a folyékony kávétól?", "Cum separă praful de cafea de cafeaua lichidă?"),
            sceneType: "nature",
            visual: { icon: "☕", bg: "#0f172a", accent: "#ff007f" },
            choices: [
              { id: "c1", label: ml("Dekantieren", "Decantation", "Dekantálás", "Decantare") },
              { id: "c2", label: ml("Filtrieren (Kaffeefilter)", "Filt (coffee filter)", "Filt (kávészűrő)", "Filtrare (filtru de cafea)") }
            ],
            correctChoiceId: "c2",
            successFeedback: ml("Genau! Der Filter hält die festen Stoffe zurück.", "Exactly! The filter holds back the solid substances.", "Pontosan! A szűrő visszatartja a szilárd anyagokat.", "Exact! Filtrul reține substanțele solide."),
            failFeedback: ml("Falsch! Beim Dekantieren würde Kaffeesatz mitkommen.", "Wrong! When decanting, coffee grounds would come along.", "Rossz! Dekantáláskor kávézacc is jön.", "Greșit! La decantare, zațul de cafea apare.")
          },
          {
            id: "sr2-s3",
            title: ml("Salzgewinnung", "Salt production", "Sótermelés", "Producție de sare"),
            prompt: ml("Wie gewinnt man Salz aus Meerwasser?", "How do you get salt from sea water?", "Hogyan lehet sót nyerni a tengervízből?", "Cum obții sare din apa de mare?"),
            sceneType: "nature",
            visual: { icon: "🧂", bg: "#0f172a", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: ml("Eindampfen", "Evaporation", "Párolgás", "Evaporare") },
              { id: "c2", label: ml("Filtrieren", "Filter", "Szűrés", "Filtrați") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Korrekt! Das Wasser verdunstet, das Salz bleibt zurück.", "Correct! The water evaporates, the salt remains.", "Helyes! A víz elpárolog, a só megmarad.", "Corect! Apa se evaporă, sarea rămâne."),
            failFeedback: ml("Falsch! Salz ist im Wasser gelöst und geht durch den Filter.", "Wrong! Salt is dissolved in the water and goes through the filter.", "Rossz! A só feloldódik a vízben, és átmegy a szűrőn.", "Greșit! Sarea se dizolvă în apă și trece prin filtru.")
          },
          {
            id: "sr2-s4",
            title: ml("Eisenspäne im Sand", "Iron filings in the sand", "Vasreszelék a homokban", "Pilitură de fier în nisip"),
            prompt: ml("Wie trennst du Eisenspäne von Sand?", "How do you separate iron filings from sand?", "Hogyan lehet elkülöníteni a vasreszeléket a homoktól?", "Cum separă pilitura de fier de nisip?"),
            sceneType: "nature",
            visual: { icon: "🧲", bg: "#0f172a", accent: "#ff007f" },
            choices: [
              { id: "c1", label: ml("Mit einem Magneten", "Use a magnet", "Mágnessel", "Cu un magnet") },
              { id: "c2", label: ml("Mit Wasser mischen und filtrieren", "Mix with water and filter", "Keverjük össze vízzel és szűrjük le", "Se amestecă cu apă și se filtrează") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Super! Eisen ist magnetisch, Sand nicht.", "Great! Iron is magnetic, sand is not.", "Remek! A vas mágneses, a homok nem.", "Genial! Fierul este magnetic, nisipul nu."),
            failFeedback: ml("Falsch! Das ist viel zu umständlich.", "Wrong! This is far too complicated.", "Helytelen! Ez túl bonyolult.", "Incorect! Acest lucru este mult prea complicat.")
          }
        ]
      },
      {
        id: "ke-5-sr-3",
        title: ml("Wasser und seine Eigenschaften", "Water and its properties", "A víz és tulajdonságai", "Apa și proprietățile ei"),
        instruction: ml("Beantworte die Fragen rund um das Thema Wasser.", "Answer the questions about water.", "Válaszoljon a vízzel kapcsolatos kérdésekre.", "Răspundeți la întrebările despre apă."),
        scenes: [
          {
            id: "sr3-s1",
            title: ml("Gefrierpunkt", "Freezing point", "fagypont", "punctul de îngheț"),
            prompt: ml("Bei welcher Temperatur gefriert Wasser?", "At what temperature does water freeze?", "Milyen hőmérsékleten fagy meg a víz?", "La ce temperatură îngheață apa?"),
            sceneType: "nature",
            visual: { icon: "🧊", bg: "#001f3f", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: ml("0 °C", "0 °C", "0 °C", "0 °C") },
              { id: "c2", label: ml("100 °C", "100 °C", "100 °C", "100 °C") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Richtig! Bei 0 °C wird Wasser zu Eis.", "Correct! At 0 °C, water turns into ice.", "Helyes! 0 °C-on a víz jéggé alakul.", "Corect! La 0 °C, apa se transformă în gheață."),
            failFeedback: ml("Falsch! Bei 100 °C kocht Wasser.", "Wrong! Water boils at 100 °C.", "Rossz! A víz 100 °C-on forr.", "Greșit! Apa fierbe la 100 °C.")
          },
          {
            id: "sr3-s2",
            title: ml("Siedepunkt", "Boiling point", "forráspont", "punct de fierbere"),
            prompt: ml("Bei welcher Temperatur kocht Wasser?", "At what temperature does water boil?", "Milyen hőmérsékleten forr a víz?", "La ce temperatura fierbe apa?"),
            sceneType: "nature",
            visual: { icon: "♨️", bg: "#001f3f", accent: "#ff007f" },
            choices: [
              { id: "c1", label: ml("100 °C", "100 °C", "100 °C", "100 °C") },
              { id: "c2", label: ml("50 °C", "50 °C", "50 °C", "50 °C") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Genau! Bei 100 °C wird Wasser zu Wasserdampf.", "Exactly! At 100 °C, water turns into water vapor.", "Pontosan! 100 °C-on a víz vízgőzné alakul.", "Exact! La 100 °C, apa se transformă în vapori de apă."),
            failFeedback: ml("Falsch! 50 °C ist nur warmes Wasser.", "Wrong! 50 °C is just warm water.", "Rossz! 50 °C csak meleg víz.", "Greșit! 50 °C este doar apă caldă.")
          },
          {
            id: "sr3-s3",
            title: ml("Dichteanomalie", "Density anomaly", "Sűrűségi anomália", "Anomalia densității"),
            prompt: ml("Warum schwimmt Eis auf Wasser?", "Why does ice float on water?", "Miért úszik a jég a vízen?", "De ce plutește gheața pe apă?"),
            sceneType: "nature",
            visual: { icon: "🧊", bg: "#001f3f", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: ml("Eis hat eine geringere Dichte als flüssiges Wasser", "Ice has a lower density than liquid water", "A jég sűrűsége kisebb, mint a folyékony víz", "Gheața are o densitate mai mică decât apa lichidă") },
              { id: "c2", label: ml("Eis ist schwerer als flüssiges Wasser", "Ice is heavier than liquid water", "A jég nehezebb, mint a folyékony víz", "Gheața este mai grea decât apa lichidă") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Korrekt! Das nennt man die Dichteanomalie des Wassers.", "Correct! This is called the density anomaly of water.", "Helyesen! Ezt a víz sűrűségi anomáliájának nevezik.", "Corect! Aceasta se numește anomalie de densitate a apei."),
            failFeedback: ml("Falsch! Wäre es schwerer, würde es sinken.", "Wrong! If it were heavier, it would sink.", "Rossz! Ha nehezebb lenne, akkor elsüllyedne.", "Greșit! Dacă ar fi mai greu, s-ar scufunda.")
          },
          {
            id: "sr3-s4",
            title: ml("Lösungsmittel", "Solvent", "Oldószer", "Solvent"),
            prompt: ml("Welcher Stoff löst sich NICHT in Wasser?", "Which substance does NOT dissolve in water?", "Melyik anyag NEM oldódik vízben?", "Care substanță NU se dizolvă în apă?"),
            sceneType: "nature",
            visual: { icon: "💧", bg: "#001f3f", accent: "#ff007f" },
            choices: [
              { id: "c1", label: ml("Öl", "Oil", "Olaj", "Ulei") },
              { id: "c2", label: ml("Zucker", "Sugar", "Cukor", "Zahăr") }
            ],
            correctChoiceId: "c1",
            successFeedback: ml("Richtig! Öl und Wasser mischen sich nicht.", "Correct! Oil and water do not mix.", "Helyes! Az olaj és a víz nem keveredik.", "Corect! Uleiul și apa nu se amestecă."),
            failFeedback: ml("Falsch! Zucker löst sich sehr gut in Wasser.", "Wrong! Sugar dissolves very well in water.", "Rossz! A cukor nagyon jól oldódik vízben.", "Greșit! Zahărul se dizolvă foarte bine în apă.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ke-5-cb-1",
        title: ml("Aggregatzustände Übergänge", "Aggregate states transitions", "Aggregált halmazállapot-átmenetek", "Tranziții ale stărilor agregate"),
        instruction: ml("Ordne die Begriffe den richtigen Übergängen zu.", "Assign the terms to the correct transitions.", "A megfelelő átmenetekhez rendelje hozzá a kifejezéseket.", "Atribuiți termenii tranzițiilor corecte."),
        hint: "Denke daran, was passiert, wenn man Eis erhitzt oder Wasser kocht.",
        theme: { bg: "#1a1a2e", accent: "#00f0ff", card: "#2a2a4a" },
        parts: [
          { id: "p1", label: ml("Schmelzen", "Melting", "Olvad", "Topi"), emoji: "🔥" },
          { id: "p2", label: ml("Verdampfen", "Evaporation", "Párolgás", "Evaporare"), emoji: "♨️" },
          { id: "p3", label: ml("Kondensieren", "Condense", "Sűrítés", "Condens"), emoji: "💧" },
          { id: "p4", label: ml("Erstarren", "Freezing", "Fagyás", "Îngheț"), emoji: "❄️" }
        ],
        slots: [
          { id: "s1", label: ml("Fest zu Flüssig", "Solid to liquid", "Szilárdból folyadékba", "Solid până la lichid") },
          { id: "s2", label: ml("Flüssig zu Gasförmig", "Liquid to gaseous", "Folyadékból gáz halmazállapotúvá", "Lichid până la gaz") },
          { id: "s3", label: ml("Gasförmig zu Flüssig", "Gas to liquid", "Gázból folyadékká", "Gaz până la lichid") },
          { id: "s4", label: ml("Flüssig zu Fest", "Liquid to solid", "Folyékonytól szilárdig", "d la solid") }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      },
      {
        id: "ke-5-cb-2",
        title: ml("Trennverfahren zuordnen", "Assign separation process", "Elválasztási folyamat hozzárendelése", "Atribuiți procesul de separare"),
        instruction: ml("Ordne das Trennverfahren dem passenden Gemisch zu.", "Assign the separation process to the appropriate mixture.", "Rögzítsd az elválasztási folyamatot a megfelelő keverékhez.", "Atribuiți procesul de separare amestecului corespunzător."),
        hint: "Überlege, welche Eigenschaften die Stoffe im Gemisch haben.",
        theme: { bg: "#0f172a", accent: "#ff007f", card: "#1e293b" },
        parts: [
          { id: "p1", label: ml("Filtrieren", "Filter", "Szűrés", "Filtrați"), emoji: "☕" },
          { id: "p2", label: ml("Eindampfen", "Evaporation", "Párolgás", "Evaporare"), emoji: "🧂" },
          { id: "p3", label: ml("Magnetscheiden", "Magnetic sheaths", "Mágneses burkolatok", "Teci magnetice"), emoji: "🧲" },
          { id: "p4", label: ml("Dekantieren", "Decantation", "Dekantálás", "Decantare"), emoji: "🫗" }
        ],
        slots: [
          { id: "s1", label: ml("Sand und Wasser", "Sand and water", "Homok és víz", "Nisip și apă") },
          { id: "s2", label: ml("Salz und Wasser", "Salt and water", "Só és víz", "Sare și apă") },
          { id: "s3", label: ml("Eisen und Sand", "Iron and sand", "Vas és homok", "Fier și nisip") },
          { id: "s4", label: ml("Öl und Wasser", "Oil and water", "Olaj és víz", "Ulei și apă") }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      },
      {
        id: "ke-5-cb-3",
        title: ml("Stoffeigenschaften", "Material properties", "Anyagtulajdonságok", "Proprietățile materialelor"),
        instruction: ml("Ordne die Eigenschaft dem passenden Stoff zu.", "Assign the property to the appropriate substance.", "A tulajdonságot rendelje hozzá a megfelelő anyaghoz.", "Atribuiți proprietatea substanței corespunzătoare."),
        hint: "Welcher Stoff ist bekannt für diese Eigenschaft?",
        theme: { bg: "#2d0a0a", accent: "#ff4500", card: "#4a1515" },
        parts: [
          { id: "p1", label: ml("Magnetisch", "Magnetic", "Mágneses", "Magnetic"), emoji: "🧲" },
          { id: "p2", label: ml("Elektrischer Leiter", "Electrical conductor", "Elektromos vezető", "Conductor electric"), emoji: "⚡" },
          { id: "p3", label: ml("Brennbarkeit", "Flammability", "Gyúlékonyság", "Inflamabilitate"), emoji: "🔥" },
          { id: "p4", label: ml("Wasserlöslich", "Water soluble", "Vízben oldódó", "Solubil în apă"), emoji: "💧" }
        ],
        slots: [
          { id: "s1", label: ml("Eisen", "Iron", "Vas", "Fier") },
          { id: "s2", label: ml("Kupfer", "Copper", "Réz", "Cupru") },
          { id: "s3", label: ml("Holz", "Wood", "Fa", "Lemnul") },
          { id: "s4", label: ml("Zucker", "Sugar", "Cukor", "Zahăr") }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      },
      {
        id: "ke-5-cb-4",
        title: ml("Aggregatzustände Übergänge (Pro)", "States of matter transitions (Pro)", "Az anyag átmenetei (Pro)", "Stări ale tranzițiilor materiei (Pro)</t3>r"),
        instruction: ml("Ordne die Begriffe den richtigen Übergängen zu.", "Assign the terms to the correct transitions.", "A megfelelő átmenetekhez rendelje hozzá a kifejezéseket.", "Atribuiți termenii tranzițiilor corecte."),
        hint: "Denke daran, was passiert, wenn man Eis erhitzt oder Wasser kocht.",
        theme: { bg: "#1a1a2e", accent: "#00f0ff", card: "#2a2a4a" },
        parts: [
          { id: "p1", label: ml("Schmelzen", "Melting", "Olvad", "Topi"), emoji: "🔥" },
          { id: "p2", label: ml("Verdampfen", "Evaporation", "Párolgás", "Evaporare"), emoji: "♨️" },
          { id: "p3", label: ml("Kondensieren", "Condense", "Sűrítés", "Condens"), emoji: "💧" },
          { id: "p4", label: ml("Erstarren", "Freezing", "Fagyás", "Îngheț"), emoji: "❄️" }
        ],
        slots: [
          { id: "s1", label: ml("Fest zu Flüssig", "Solid to liquid", "Szilárdból folyadékba", "Solid până la lichid") },
          { id: "s2", label: ml("Flüssig zu Gasförmig", "Liquid to gaseous", "Folyadékból gáz halmazállapotúvá", "Lichid până la gaz") },
          { id: "s3", label: ml("Gasförmig zu Flüssig", "Gas to liquid", "Gázból folyadékká", "Gaz până la lichid") },
          { id: "s4", label: ml("Flüssig zu Fest", "Liquid to solid", "Folyékonytól szilárdig", "d la solid") }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      },
      {
        id: "ke-5-cb-5",
        title: ml("Trennverfahren zuordnen (Pro)", "Assign separation method (Pro)", "Elválasztási módszer hozzárendelése (Pro)", "Atribuiți metoda de separare (Pro)"),
        instruction: ml("Ordne das Trennverfahren dem passenden Gemisch zu.", "Assign the separation process to the appropriate mixture.", "Rögzítsd az elválasztási folyamatot a megfelelő keverékhez.", "Atribuiți procesul de separare amestecului corespunzător."),
        hint: "Überlege, welche Eigenschaften die Stoffe im Gemisch haben.",
        theme: { bg: "#0f172a", accent: "#ff007f", card: "#1e293b" },
        parts: [
          { id: "p1", label: ml("Filtrieren", "Filter", "Szűrés", "Filtrați"), emoji: "☕" },
          { id: "p2", label: ml("Eindampfen", "Evaporation", "Párolgás", "Evaporare"), emoji: "🧂" },
          { id: "p3", label: ml("Magnetscheiden", "Magnetic sheaths", "Mágneses burkolatok", "Teci magnetice"), emoji: "🧲" },
          { id: "p4", label: ml("Dekantieren", "Decantation", "Dekantálás", "Decantare"), emoji: "🫗" }
        ],
        slots: [
          { id: "s1", label: ml("Sand und Wasser", "Sand and water", "Homok és víz", "Nisip și apă") },
          { id: "s2", label: ml("Salz und Wasser", "Salt and water", "Só és víz", "Sare și apă") },
          { id: "s3", label: ml("Eisen und Sand", "Iron and sand", "Vas és homok", "Fier și nisip") },
          { id: "s4", label: ml("Öl und Wasser", "Oil and water", "Olaj és víz", "Ulei și apă") }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      }
    ],
    memoryRadar: [
      {
        id: "ke-5-mr-1",
        title: ml("Finde die Metalle", "Find the metals", "Találd meg a fémeket", "Găsiți metalele"),
        instruction: ml("Merke dir die Metalle und finde sie auf dem Radar wieder.", "Memorize the metals and find them on the radar again.", "Emlékezzen a fémekre, és találja meg őket a radaron.", "Amintiți-vă de metale și găsiți-le pe radar."),
        flashDurationMs: 3000,
        selectionLimit: 3,
        theme: { bg: "#0a192f", accent: "#00f0ff", radar: "#1a365d" },
        targetItems: [
          { id: "t1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "t2", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "t3", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" }
        ],
        decoyItems: [
          { id: "d1", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "d2", label: ml("Plastik", "Plastic", "műanyag", "plastic"), emoji: "🥤" },
          { id: "d3", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🫙" },
          { id: "d4", label: ml("Gummi", "Rubber", "Gumi", "Cauciuc"), emoji: "🛞" },
          { id: "d5", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" }
        ]
      },
      {
        id: "ke-5-mr-2",
        title: ml("Finde die reinen Stoffe", "Find the pure substances", "Keresd meg a tiszta anyagokat", "Găsiți substanțele pure"),
        instruction: ml("Merke dir die reinen Stoffe und finde sie auf dem Radar wieder.", "Note the pure substances and find them on the radar.", "Jegyezze fel a tiszta anyagokat, és keresse meg őket a radaron.", "Notă substanțele pure și găsește-le pe radar."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1a1a2e", accent: "#ff007f", radar: "#2a2a4a" },
        targetItems: [
          { id: "t1", label: ml("Destilliertes Wasser", "Distilled water", "Desztillált víz", "Apa distilată"), emoji: "💧" },
          { id: "t2", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙" },
          { id: "t3", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🫧" },
          { id: "t4", label: ml("Kochsalz", "Salt", "asztali só", "Eliberare de sare</t28>"), emoji: "🧂" }
        ],
        decoyItems: [
          { id: "d1", label: ml("Meerwasser", "Sea water", "Tengervíz", "Apa de mare"), emoji: "🌊" },
          { id: "d2", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "d3", label: ml("Orangensaft", "Orange juice", "Narancslé", "Suc de portocale"), emoji: "🧃" },
          { id: "d4", label: ml("Granit", "Granite", "Gránit", "Granit"), emoji: "🪨" },
          { id: "d5", label: ml("Milch", "Milk", "Tej", "Lapte"), emoji: "🥛" }
        ]
      },
      {
        id: "ke-5-mr-3",
        title: ml("Finde die Laborgeräte", "Find it Laboratory equipment", "Find it Laboratóriumi berendezés", "Găsește-l Echipament de laborator"),
        instruction: ml("Merke dir die Laborgeräte und finde sie auf dem Radar wieder.", "Memorize the laboratory equipment and find it on the radar.", "Jegyezze meg a laboratóriumi berendezést, és keresse meg a radaron.", "Memoriază echipamentul de laborator și găsește-l pe radar."),
        flashDurationMs: 3000,
        selectionLimit: 3,
        theme: { bg: "#111111", accent: "#00ff9d", radar: "#333333" },
        targetItems: [
          { id: "t1", label: ml("Reagenzglas", "Test tube", "Kémcső", "Eprubetă"), emoji: "🧪" },
          { id: "t2", label: ml("Schutzbrille", "Safety glasses", "Védőszemüveg", "Ochelari de protecție"), emoji: "🥽" },
          { id: "t3", label: ml("Mikroskop", "Microscope", "Mikroszkóp", "Microscop"), emoji: "🔬" }
        ],
        decoyItems: [
          { id: "d1", label: ml("Kochtopf", "Cooking pot", "Főzõedény", "Oala de gătit"), emoji: "🍲" },
          { id: "d2", label: ml("Gabel", "Fork", "Villa", "Furculiță"), emoji: "🍴" },
          { id: "d3", label: ml("Hammer", "Hammer", "Kalapács", "Ciocanul"), emoji: "🔨" },
          { id: "d4", label: ml("Besen", "Broom", "Seprű", "Mătură"), emoji: "🧹" },
          { id: "d5", label: ml("Gießkanne", "Watering can", "Öntözőkanna", "Adăpatoare"), emoji: "🚿" }
        ]
      },
      {
        id: "ke-5-mr-4",
        title: ml("Finde die Metalle (Pro)", "Find the metals (Pro)", "Keresse meg a fémeket (Pro)", "Găsiți metalele (Pro)"),
        instruction: ml("Merke dir die Metalle und finde sie auf dem Radar wieder.", "Memorize the metals and find them on the radar again.", "Emlékezzen a fémekre, és találja meg őket a radaron.", "Amintiți-vă de metale și găsiți-le pe radar."),
        flashDurationMs: 3000,
        selectionLimit: 3,
        theme: { bg: "#0a192f", accent: "#00f0ff", radar: "#1a365d" },
        targetItems: [
          { id: "t1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
          { id: "t2", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
          { id: "t3", label: ml("Aluminium", "Aluminum", "Alumínium", "Aluminiu"), emoji: "🥫" }
        ],
        decoyItems: [
          { id: "d1", label: ml("Holz", "Wood", "Fa", "Lemnul"), emoji: "🪵" },
          { id: "d2", label: ml("Plastik", "Plastic", "műanyag", "plastic"), emoji: "🥤" },
          { id: "d3", label: ml("Glas", "Glass", "Üveg", "Sticlă"), emoji: "🫙" },
          { id: "d4", label: ml("Gummi", "Rubber", "Gumi", "Cauciuc"), emoji: "🛞" },
          { id: "d5", label: ml("Stein", "Stone", "Kő", "Piatra"), emoji: "🪨" }
        ]
      },
      {
        id: "ke-5-mr-5",
        title: ml("Finde die reinen Stoffe (Pro)", "Find the pure substances (Pro)", "A tiszta anyagok megkeresése (Pro)", "Găsiți substanțele pure (Pro)"),
        instruction: ml("Merke dir die reinen Stoffe und finde sie auf dem Radar wieder.", "Note the pure substances and find them on the radar.", "Jegyezze fel a tiszta anyagokat, és keresse meg őket a radaron.", "Notă substanțele pure și găsește-le pe radar."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1a1a2e", accent: "#ff007f", radar: "#2a2a4a" },
        targetItems: [
          { id: "t1", label: ml("Destilliertes Wasser", "Distilled water", "Desztillált víz", "Apa distilată"), emoji: "💧" },
          { id: "t2", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙" },
          { id: "t3", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🫧" },
          { id: "t4", label: ml("Kochsalz", "Salt", "asztali só", "Eliberare de sare</t28>"), emoji: "🧂" }
        ],
        decoyItems: [
          { id: "d1", label: ml("Meerwasser", "Sea water", "Tengervíz", "Apa de mare"), emoji: "🌊" },
          { id: "d2", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
          { id: "d3", label: ml("Orangensaft", "Orange juice", "Narancslé", "Suc de portocale"), emoji: "🧃" },
          { id: "d4", label: ml("Granit", "Granite", "Gránit", "Granit"), emoji: "🪨" },
          { id: "d5", label: ml("Milch", "Milk", "Tej", "Lapte"), emoji: "🥛" }
        ]
      }
    ]
  },
  6: {
  grade: 6,
  meteorCatch: [
    {
      id: "ke-6-mc-1",
      title: ml("Elementarteilchen", "Elementary particles", "elemi részecskék", "Particule elementare"),
      prompt: ml("Fange die Bausteine eines Atoms!", "Catch the building blocks of an atom!", "Fogd meg az atom építőköveit!", "Prinți elementele de bază ale unui atom!"),
      goal: 10,
      speed: 3,
      theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "ke-6-mc-1-c1", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "🔴" },
        { id: "ke-6-mc-1-c2", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪" },
        { id: "ke-6-mc-1-c3", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "🔵" }
      ],
      wrongItems: [
        { id: "ke-6-mc-1-w1", label: ml("Zelle", "Cell", "Cell", "Celula"), emoji: "🦠" },
        { id: "ke-6-mc-1-w2", label: ml("Bakterium", "Bacterium", "Baktérium", "Bacterie"), emoji: "🧫" },
        { id: "ke-6-mc-1-w3", label: ml("Virus", "Virus", "Vírus", "Virus"), emoji: "🧬" }
      ]
    },
    {
      id: "ke-6-mc-2",
      title: ml("Metalle", "Metals", "Fémek", "Metale"),
      prompt: ml("Fange nur die Metalle!", "Catch only the metals!", "Csak a fémeket fogja meg!", "Prinți numai metalele!"),
      goal: 12,
      speed: 4,
      theme: { sky: "#1e1b4b", glow: "#fbbf24", accent: "#f59e0b" },
      correctItems: [
        { id: "ke-6-mc-2-c1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-6-mc-2-c2", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙" },
        { id: "ke-6-mc-2-c3", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" }
      ],
      wrongItems: [
        { id: "ke-6-mc-2-w1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "ke-6-mc-2-w2", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
        { id: "ke-6-mc-2-w3", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🪨" }
      ]
    },
    {
      id: "ke-6-mc-3",
      title: ml("Chemische Symbole", "Chemical symbols", "Kémiai szimbólumok", "Simboluri chimice"),
      prompt: ml("Fange die echten chemischen Symbole!", "Catch the real chemical symbols!", "Fogd meg a valódi vegyjeleket!", "Prinți adevăratele simboluri chimice!"),
      goal: 15,
      speed: 5,
      theme: { sky: "#020617", glow: "#10b981", accent: "#34d399" },
      correctItems: [
        { id: "ke-6-mc-3-c1", label: ml("H", "H", "H", "H"), emoji: "💧" },
        { id: "ke-6-mc-3-c2", label: ml("O", "O", "O", "O"), emoji: "💨" },
        { id: "ke-6-mc-3-c3", label: ml("C", "C", "C", "C"), emoji: "🪨" }
      ],
      wrongItems: [
        { id: "ke-6-mc-3-w1", label: ml("Xy", "Xy", "Xy", "Xy"), emoji: "❓" },
        { id: "ke-6-mc-3-w2", label: ml("Zz", "Zz", "Zz", "Zz"), emoji: "❌" },
        { id: "ke-6-mc-3-w3", label: ml("Qq", "Qq", "Qq", "Qq"), emoji: "🚫" }
      ]
    },
      {
      id: "ke-6-mc-4",
      title: ml("Elementarteilchen (Pro)", "Elementary particles (Pro)", "Elemi részecskék (Pro)", "Particule elementare (Pro)"),
      prompt: ml("Fange die Bausteine eines Atoms!", "Catch the building blocks of an atom!", "Fogd meg az atom építőköveit!", "Prinți elementele de bază ale unui atom!"),
      goal: 10,
      speed: 3,
      theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "ke-6-mc-1-c1", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "🔴" },
        { id: "ke-6-mc-1-c2", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪" },
        { id: "ke-6-mc-1-c3", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "🔵" }
      ],
      wrongItems: [
        { id: "ke-6-mc-1-w1", label: ml("Zelle", "Cell", "Cell", "Celula"), emoji: "🦠" },
        { id: "ke-6-mc-1-w2", label: ml("Bakterium", "Bacterium", "Baktérium", "Bacterie"), emoji: "🧫" },
        { id: "ke-6-mc-1-w3", label: ml("Virus", "Virus", "Vírus", "Virus"), emoji: "🧬" }
      ]
    },
      {
      id: "ke-6-mc-5",
      title: ml("Metalle (Pro)", "Metals (Pro)", "Fémek (Pro)", "Metale (Pro)"),
      prompt: ml("Fange nur die Metalle!", "Catch only the metals!", "Csak a fémeket fogja meg!", "Prinți numai metalele!"),
      goal: 12,
      speed: 4,
      theme: { sky: "#1e1b4b", glow: "#fbbf24", accent: "#f59e0b" },
      correctItems: [
        { id: "ke-6-mc-2-c1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-6-mc-2-c2", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙" },
        { id: "ke-6-mc-2-c3", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" }
      ],
      wrongItems: [
        { id: "ke-6-mc-2-w1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "ke-6-mc-2-w2", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
        { id: "ke-6-mc-2-w3", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🪨" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "ke-6-os-1",
      title: ml("Metalle und Nichtmetalle", "Metals and non-metals", "Fémek és nemfémek", "Metale și nemetale"),
      instruction: ml("Sortiere die Elemente in die richtigen Kategorien!", "Sort the elements into the correct categories!", "Rendezd az elemeket a megfelelő kategóriákba!", "Sortați elementele în categoriile corecte!"),
      theme: { bg: "#1e1b4b", orbit: "#6366f1", accent: "#818cf8" },
      buckets: [
        { id: "ke-6-os-1-b1", label: ml("Metalle", "Metals", "Fémek", "Metale"), color: "#fbbf24" },
        { id: "ke-6-os-1-b2", label: ml("Nichtmetalle", "Non-metals", "Nem fémek", "Nemetale"), color: "#34d399" }
      ],
      items: [
        { id: "ke-6-os-1-i1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "ke-6-os-1-b1" },
        { id: "ke-6-os-1-i2", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙", bucketId: "ke-6-os-1-b1" },
        { id: "ke-6-os-1-i3", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨", bucketId: "ke-6-os-1-b2" },
        { id: "ke-6-os-1-i4", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "🪨", bucketId: "ke-6-os-1-b2" }
      ]
    },
    {
      id: "ke-6-os-2",
      title: ml("Kern und Hülle", "Core and shell", "Mag és héj", "Miez și înveliș"),
      instruction: ml("Wo befinden sich diese Teilchen im Atom?", "Where are these particles in the atom?", "Hol vannak ezek a részecskék az atomban?", "Unde sunt aceste particule în atom?"),
      theme: { bg: "#0f172a", orbit: "#ec4899", accent: "#f472b6" },
      buckets: [
        { id: "ke-6-os-2-b1", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), color: "#ef4444" },
        { id: "ke-6-os-2-b2", "label": "Atomhülle", color: "#3b82f6" }
      ],
      items: [
        { id: "ke-6-os-2-i1", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "🔴", bucketId: "ke-6-os-2-b1" },
        { id: "ke-6-os-2-i2", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪", bucketId: "ke-6-os-2-b1" },
        { id: "ke-6-os-2-i3", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "🔵", bucketId: "ke-6-os-2-b2" },
        { id: "ke-6-os-2-i4", label: ml("Valenzelektron", "Valence electron", "Vegyérték elektron", "Electronul de valenţă"), emoji: "⚡", bucketId: "ke-6-os-2-b2" }
      ]
    },
    {
      id: "ke-6-os-3",
      title: ml("Elemente und Verbindungen", "Elements and connections", "Elemek és kapcsolatok", "Elemente și conexiuni"),
      instruction: ml("Unterscheide reine Elemente von chemischen Verbindungen!", "Distinguish pure elements from chemical compounds!", "Megkülönböztesse meg a tiszta elemeket a kémiai vegyületektől!", "Deosebiți elementele pure de compușii chimici!"),
      theme: { bg: "#020617", orbit: "#14b8a6", accent: "#2dd4bf" },
      buckets: [
        { id: "ke-6-os-3-b1", label: ml("Element", "Element", "Elem", "Element"), color: "#eab308" },
        { id: "ke-6-os-3-b2", "label": "Verbindung", color: "#a855f7" }
      ],
      items: [
        { id: "ke-6-os-3-i1", label: ml("Wasserstoff (H)", "Hydrogen (H)", "Hidrogén (H)", "Hidrogenul (H)"), emoji: "🎈", bucketId: "ke-6-os-3-b1" },
        { id: "ke-6-os-3-i2", label: ml("Sauerstoff (O)", "Oxygen (O)", "Oxigén (O)", "Oxigen (O)"), emoji: "💨", bucketId: "ke-6-os-3-b1" },
        { id: "ke-6-os-3-i3", label: ml("Wasser (H2O)", "Water (H2O)", "Víz (H2O)", "Apa (H2O)"), emoji: "💧", bucketId: "ke-6-os-3-b2" },
        { id: "ke-6-os-3-i4", "label": "Kohlenstoffdioxid (CO2)", emoji: "🌫️", bucketId: "ke-6-os-3-b2" }
      ]
    },
      {
      id: "ke-6-os-4",
      title: ml("Metalle und Nichtmetalle (Pro)", "Metals and non-metals (Pro)", "Fémek és nemfémek (Pro)", "Metale și nemetale (Pro)"),
      instruction: ml("Sortiere die Elemente in die richtigen Kategorien!", "Sort the elements into the correct categories!", "Rendezd az elemeket a megfelelő kategóriákba!", "Sortați elementele în categoriile corecte!"),
      theme: { bg: "#1e1b4b", orbit: "#6366f1", accent: "#818cf8" },
      buckets: [
        { id: "ke-6-os-1-b1", label: ml("Metalle", "Metals", "Fémek", "Metale"), color: "#fbbf24" },
        { id: "ke-6-os-1-b2", label: ml("Nichtmetalle", "Non-metals", "Nem fémek", "Nemetale"), color: "#34d399" }
      ],
      items: [
        { id: "ke-6-os-1-i1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "ke-6-os-1-b1" },
        { id: "ke-6-os-1-i2", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙", bucketId: "ke-6-os-1-b1" },
        { id: "ke-6-os-1-i3", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨", bucketId: "ke-6-os-1-b2" },
        { id: "ke-6-os-1-i4", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "🪨", bucketId: "ke-6-os-1-b2" }
      ]
    },
      {
      id: "ke-6-os-5",
      title: ml("Kern und Hülle (Pro)", "Core and shell (Pro)", "Maga és héja (Pro)", "Miez și înveliș (Pro)"),
      instruction: ml("Wo befinden sich diese Teilchen im Atom?", "Where are these particles in the atom?", "Hol vannak ezek a részecskék az atomban?", "Unde sunt aceste particule în atom?"),
      theme: { bg: "#0f172a", orbit: "#ec4899", accent: "#f472b6" },
      buckets: [
        { id: "ke-6-os-2-b1", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), color: "#ef4444" },
        { id: "ke-6-os-2-b2", "label": "Atomhülle", color: "#3b82f6" }
      ],
      items: [
        { id: "ke-6-os-2-i1", label: ml("Proton", "Proton", "Proton", "Proton"), emoji: "🔴", bucketId: "ke-6-os-2-b1" },
        { id: "ke-6-os-2-i2", label: ml("Neutron", "Neutron", "Neutron", "Neutron"), emoji: "⚪", bucketId: "ke-6-os-2-b1" },
        { id: "ke-6-os-2-i3", label: ml("Elektron", "Electron", "Elektron", "Electron"), emoji: "🔵", bucketId: "ke-6-os-2-b2" },
        { id: "ke-6-os-2-i4", label: ml("Valenzelektron", "Valence electron", "Vegyérték elektron", "Electronul de valenţă"), emoji: "⚡", bucketId: "ke-6-os-2-b2" }
      ]
    }
  ],
  signalRunner: [
    {
      id: "ke-6-sr-1",
      title: ml("Sicherheit im Labor", "Safety in the laboratory", "Biztonság a laboratóriumban", "Siguranța în laborator"),
      instruction: ml("Triff die richtigen Entscheidungen für ein sicheres Experiment!", "Make the right decisions for a safe experiment!", "Hozza meg a megfelelő döntéseket a biztonságos kísérlet érdekében!", "Ia deciziile corecte pentru un experiment sigur!"),
      scenes: [
        {
          id: "ke-6-sr-1-s1",
          title: ml("Vorbereitung", "Preparation", "Előkészületek", "Pregătirea"),
          prompt: ml("Du betrittst das Labor. Was machst du zuerst?", "You enter the laboratory. What do you do first?", "Belép a laboratóriumba. Mit csinálsz először?", "Intri în laborator. Ce faci mai întâi?"),
          sceneType: "safety",
          visual: { icon: "🥽", bg: "#171717", accent: "#ef4444" },
          choices: [
            { id: "ke-6-sr-1-s1-c1", label: ml("Schutzbrille aufsetzen", "Put on safety glasses", "Vegyen fel védőszemüveget", "Puneți ochelari de protecție") },
            { id: "ke-6-sr-1-s1-c2", label: ml("Essen auspacken", "Unpack the food", "Csomagolja ki az ételt", "Despachetează mâncarea") },
            { id: "ke-6-sr-1-s1-c3", label: ml("Chemikalien mischen", "Mixing chemicals", "Vegyszerek keverése", "Amestecarea substanțelor chimice") },
            { id: "ke-6-sr-1-s1-c4", label: ml("Fenster öffnen", "Open the window", "Nyissa ki az ablakot", "Deschide fereastra") }
          ],
          correctChoiceId: "ke-6-sr-1-s1-c1",
          successFeedback: ml("Richtig! Die Schutzbrille ist das Wichtigste.", "Correct! The safety glasses are the most important thing.", "Helyes! A védőszemüveg a legfontosabb.", "Corect! Ochelarii de protecție sunt cel mai important lucru."),
          failFeedback: ml("Falsch! Sicherheit geht vor, setze immer zuerst die Schutzbrille auf.", "Wrong! Safety first, always put on the safety glasses first.", "Rossz! Mindenekelőtt a biztonság, először mindig vegye fel a védőszemüveget.", "Greșit! Siguranța în primul rând, îmbrăcați întotdeauna ochelarii de protecție mai întâi.")
        },
        {
          id: "ke-6-sr-1-s2",
          title: ml("Geruchstest", "Smell test", "Szagteszt", "Testul mirosului"),
          prompt: ml("Du sollst den Geruch einer Flüssigkeit prüfen. Wie gehst du vor?", "Thou shalt test the smell of a liquid. How do you proceed?", "Próbáld meg a folyadék szagát. Hogyan tovább?", "Vei testa mirosul unui lichid. Cum procedați?"),
          sceneType: "safety",
          visual: { icon: "👃", bg: "#1e293b", accent: "#3b82f6" },
          choices: [
            { id: "ke-6-sr-1-s2-c1", "label": "Nase direkt ans Gefäß halten" },
            { id: "ke-6-sr-1-s2-c2", "label": "Dämpfe mit der Hand zufecheln" },
            { id: "ke-6-sr-1-s2-c3", "label": "Einen tiefen Atemzug nehmen" },
            { id: "ke-6-sr-1-s2-c4", "label": "Flüssigkeit probieren" }
          ],
          correctChoiceId: "ke-6-sr-1-s2-c2",
          successFeedback: ml("Sehr gut! So schützt du deine Atemwege.", "Very good! This is how you protect your respiratory system.", "Nagyon jó! Így védi légzőrendszerét.", "Foarte bine! Așa vă protejați sistemul respirator."),
          failFeedback: ml("Gefährlich! Niemals direkt an Chemikalien riechen.", "Dangerous! Never smell chemicals directly.", "Veszélyes! Soha ne szagoljon közvetlenül vegyszereket.", "Periculoasă! Nu mirosiți niciodată direct substanțe chimice.")
        },
        {
          id: "ke-6-sr-1-s3",
          title: ml("Erhitzen", "Heating", "Fűtés", "Încălzire"),
          prompt: ml("Du erhitzt eine Flüssigkeit im Reagenzglas. Wohin zeigt die Öffnung?", "You heat a liquid in a test tube. Where does the opening point?", "Folyadékot melegítünk egy kémcsőben. Hol van a nyitópont?", "Încălziți un lichid într-o eprubetă. Unde este punctul de deschidere?"),
          sceneType: "safety",
          visual: { icon: "🔥", bg: "#271c19", accent: "#f97316" },
          choices: [
            { id: "ke-6-sr-1-s3-c1", "label": "Auf mich selbst" },
            { id: "ke-6-sr-1-s3-c2", "label": "Auf meinen Nachbarn" },
            { id: "ke-6-sr-1-s3-c3", "label": "Zur Wand (weg von Personen)" },
            { id: "ke-6-sr-1-s3-c4", "label": "Nach oben an die Decke" }
          ],
          correctChoiceId: "ke-6-sr-1-s3-c3",
          successFeedback: ml("Korrekt! So wird niemand durch Spritzer verletzt.", "Correct! So no one is injured by splashes.", "Helyes! Így senki sem sérül meg a kifröccsenéstől.", "Corect! Așadar, nimeni nu este rănit de stropire."),
          failFeedback: ml("Falsch! Die Öffnung muss immer von Personen weg zeigen.", "Wrong! The opening must always face away from people.", "Rossz! A nyílásnak mindig el kell néznie az emberektől.", "Greșit! Deschiderea trebuie să fie întotdeauna orientată departe de oameni.")
        },
        {
          id: "ke-6-sr-1-s4",
          title: ml("Aufräumen", "Cleanup", "Tisztítás", "Curăţare"),
          prompt: ml("Das Experiment ist beendet. Was passiert mit den Resten?", "The experiment is finished. What happens to the leftovers?", "A kísérlet befejeződött. Mi történik a maradékkal?", "Experimentul s-a încheiat. Ce se întâmplă cu resturile?"),
          sceneType: "safety",
          visual: { icon: "🧹", bg: "#14532d", accent: "#22c55e" },
          choices: [
            { id: "ke-6-sr-1-s4-c1", "label": "Alles in den Ausguss kippen" },
            { id: "ke-6-sr-1-s4-c2", "label": "In den normalen Mülleimer werfen" },
            { id: "ke-6-sr-1-s4-c3", "label": "In die vorgesehenen Sammelbehälter geben" },
            { id: "ke-6-sr-1-s4-c4", "label": "Auf dem Tisch stehen lassen" }
          ],
          correctChoiceId: "ke-6-sr-1-s4-c3",
          successFeedback: ml("Perfekt! Fachgerechte Entsorgung schützt die Umwelt.", "Perfect! Proper disposal protects the environment.", "Tökéletes! A megfelelő ártalmatlanítás védi a környezetet.", "Perfect! Eliminarea adecvată protejează mediul."),
          failFeedback: ml("Falsch! Chemikalien gehören in spezielle Sammelbehälter.", "Wrong! Chemicals belong in special collection containers.", "Rossz! A vegyszerek speciális gyűjtőedényekbe tartoznak.", "Greșit! Substanțele chimice aparțin unor recipiente speciale de colectare.")
        }
      ]
    },
    {
      id: "ke-6-sr-2",
      title: ml("Aggregatzustände", "Aggregate states", "Aggregált halmazállapotok", "Stări agregate"),
      instruction: ml("Erkenne die richtigen Phasenübergänge!", "Identify the correct phase transitions!", "Ismerje fel a helyes fázisátmeneteket!", "Identificați tranzițiile corecte de fază!"),
      scenes: [
        {
          id: "ke-6-sr-2-s1",
          title: ml("Eis schmilzt", "Ice melts", "Jégolvad", "Gheața se topește"),
          prompt: ml("Eis wird zu flüssigem Wasser. Wie nennt man das?", "Ice turns into liquid water. What do you call it?", "A jég folyékony vízzé alakul. Hogy hívják?", "Gheața se transformă în apă lichidă. Cum îl numești?"),
          sceneType: "nature",
          visual: { icon: "🧊", bg: "#0f172a", accent: "#38bdf8" },
          choices: [
            { id: "ke-6-sr-2-s1-c1", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s1-c2", "label": "Verdampfen" },
            { id: "ke-6-sr-2-s1-c3", "label": "Kondensieren" },
            { id: "ke-6-sr-2-s1-c4", "label": "Erstarren" }
          ],
          correctChoiceId: "ke-6-sr-2-s1-c1",
          successFeedback: ml("Richtig! Fest zu flüssig nennt man Schmelzen.", "Correct! Solid to liquid is called melting.", "Helyes! A szilárd vagy folyékony állapotot olvadásnak nevezzük.", "Corect! Solid la lichid se numește topire."),
          failFeedback: ml("Falsch! Wenn Eis zu Wasser wird, schmilzt es.", "Wrong! When ice turns into water, it melts.", "Rossz! Amikor a jég vízzé alakul, megolvad.", "Greșit! Când gheața se transformă în apă, se topește.")
        },
        {
          id: "ke-6-sr-2-s2",
          title: ml("Wasser kocht", "Water boils", "A víz felforr", "Apa fierbe"),
          prompt: ml("Flüssiges Wasser wird zu Wasserdampf. Wie heißt dieser Vorgang?", "Liquid water turns into water vapor. What is this process called?", "A folyékony víz vízgőzné alakul. Mi ennek a folyamatnak a neve?", "Apa lichidă se transformă în vapori de apă. Cum se numește acest proces?"),
          sceneType: "nature",
          visual: { icon: "♨️", bg: "#1e1b4b", accent: "#818cf8" },
          choices: [
            { id: "ke-6-sr-2-s2-c1", "label": "Sublimieren" },
            { id: "ke-6-sr-2-s2-c2", "label": "Verdampfen" },
            { id: "ke-6-sr-2-s2-c3", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s2-c4", "label": "Erstarren" }
          ],
          correctChoiceId: "ke-6-sr-2-s2-c2",
          successFeedback: ml("Genau! Flüssig zu gasförmig ist Verdampfen.", "Exactly! Liquid to gaseous is evaporation.", "Pontosan! A folyékony halmazállapotúvá válik a párolgás.", "Exact! Lichidul până la gazos este evaporarea."),
          failFeedback: ml("Falsch! Es handelt sich um Verdampfen.", "Wrong! It's evaporation.", "Rossz! Ez párolgás.", "Greșit! Este evaporare.")
        },
        {
          id: "ke-6-sr-2-s3",
          title: ml("Tau am Morgen", "Dew in the morning", "A reggeli harmat", "Roua dimineața"),
          prompt: ml("Wasserdampf wird zu Wassertropfen auf Blättern. Was passiert hier?", "Water vapor becomes water droplets on leaves. What's happening here?", "A vízgőz vízcseppekké válik a leveleken. Mi történik itt?", "Vaporii de apă devin picături de apă pe frunze. Ce se întâmplă aici?"),
          sceneType: "nature",
          visual: { icon: "💧", bg: "#064e3b", accent: "#34d399" },
          choices: [
            { id: "ke-6-sr-2-s3-c1", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s3-c2", "label": "Verdampfen" },
            { id: "ke-6-sr-2-s3-c3", "label": "Kondensieren" },
            { id: "ke-6-sr-2-s3-c4", "label": "Resublimieren" }
          ],
          correctChoiceId: "ke-6-sr-2-s3-c3",
          successFeedback: ml("Richtig! Gasförmig zu flüssig ist Kondensieren.", "Correct! Gaseous to liquid is condensation.", "Helyes! A gáz-folyadék halmazállapotú kondenzáció.", "Corect! De la gaz la lichid este condensarea."),
          failFeedback: ml("Falsch! Der Wasserdampf kondensiert zu Tropfen.", "Wrong! The water vapor condenses into drops.", "Rossz! A vízgőz cseppekké kondenzálódik.", "Greșit! Vaporii de apă se condensează în picături.")
        },
        {
          id: "ke-6-sr-2-s4",
          title: ml("Wasser gefriert", "Water freezes", "A víz megfagy", "Apa îngheață"),
          prompt: ml("Flüssiges Wasser wird zu Eis. Wie nennt man das?", "Liquid water turns into ice. What do you call it?", "A folyékony víz jéggé alakul. Hogy hívják?", "Apa lichidă se transformă în gheață. Cum îl numești?"),
          sceneType: "nature",
          visual: { icon: "❄️", bg: "#172554", accent: "#60a5fa" },
          choices: [
            { id: "ke-6-sr-2-s4-c1", "label": "Erstarren" },
            { id: "ke-6-sr-2-s4-c2", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s4-c3", "label": "Kondensieren" },
            { id: "ke-6-sr-2-s4-c4", "label": "Sublimieren" }
          ],
          correctChoiceId: "ke-6-sr-2-s4-c1",
          successFeedback: ml("Korrekt! Flüssig zu fest nennt man Erstarren.", "Correct! Liquid to solid is called solidification.", "Helyes! A folyékonyból szilárd állapotba kerülést megszilárdulásnak nevezzük.", "Corect! Lichid la solid se numește solidificare."),
          failFeedback: ml("Falsch! Das Wasser erstarrt zu Eis.", "Wrong! The water solidifies into ice.", "Rossz! A víz jéggé szilárdul.", "Greșit! Apa se solidifică în gheață.")
        }
      ]
    },
    {
      id: "ke-6-sr-3",
      title: ml("Chemische Reaktionen", "Chemical reactions", "Kémiai reakciók", "Reacții chimice"),
      instruction: ml("Erkenne die Merkmale einer chemischen Reaktion!", "Recognize the characteristics of a chemical reaction!", "Ismerje fel a kémiai reakció jellemzőit!", "Recunoașteți caracteristicile unei reacții chimice!"),
      scenes: [
        {
          id: "ke-6-sr-3-s1",
          title: ml("Holz verbrennt", "Wood burns", "A fa megég", "Lemnul arde"),
          prompt: ml("Holz verbrennt zu Asche und Rauch. Ist das eine chemische Reaktion?", "Wood burns to ash and smoke. Is this a chemical reaction?", "A fa hamuvá és füstté ég. Ez egy kémiai reakció?", "Lemnul arde în cenușă și fum. Este aceasta o reacție chimică?"),
          sceneType: "nature",
          visual: { icon: "🔥", bg: "#2a1215", accent: "#f43f5e" },
          choices: [
            { id: "ke-6-sr-3-s1-c1", "label": "Ja, es entstehen neue Stoffe" },
            { id: "ke-6-sr-3-s1-c2", "label": "Nein, das Holz ändert nur die Form" },
            { id: "ke-6-sr-3-s1-c3", "label": "Nein, es ist nur ein Phasenübergang" },
            { id: "ke-6-sr-3-s1-c4", "label": "Ja, aber nur weil es heiß wird" }
          ],
          correctChoiceId: "ke-6-sr-3-s1-c1",
          successFeedback: ml("Richtig! Bei einer chemischen Reaktion entstehen neue Stoffe.", "Correct! A chemical reaction creates new substances.", "Helyes! Egy kémiai reakció új anyagokat hoz létre.", "Corect! O reacție chimică creează noi substanțe."),
          failFeedback: ml("Falsch! Es entstehen neue Stoffe (Asche, Gase), also ist es eine chemische Reaktion.", "Wrong! New substances are created (ash, gases), so it is a chemical reaction.", "Rossz! Új anyagok keletkeznek (hamu, gázok), tehát kémiai reakcióról van szó.", "Greșit! Se creează substanțe noi (cenusa, gaze), deci este o reacție chimică.")
        },
        {
          id: "ke-6-sr-3-s2",
          title: ml("Papier zerreißen", "Tear paper", "Papírtép", "Hârtia rupe"),
          prompt: ml("Du zerreißt ein Blatt Papier. Ist das eine chemische Reaktion?", "You tear up a piece of paper. Is this a chemical reaction?", "Eltép egy darab papírt. Ez egy kémiai reakció?", "Rupeți o bucată de hârtie. Este aceasta o reacție chimică?"),
          sceneType: "community",
          visual: { icon: "📄", bg: "#1e293b", accent: "#94a3b8" },
          choices: [
            { id: "ke-6-sr-3-s2-c1", "label": "Ja, das Papier ist kaputt" },
            { id: "ke-6-sr-3-s2-c2", "label": "Nein, es bleibt Papier" },
            { id: "ke-6-sr-3-s2-c3", "label": "Ja, es entstehen zwei neue Stoffe" },
            { id: "ke-6-sr-3-s2-c4", "label": "Nein, weil es nicht brennt" }
          ],
          correctChoiceId: "ke-6-sr-3-s2-c2",
          successFeedback: ml("Genau! Es ändert sich nur die Form, nicht der Stoff.", "Exactly! Only the shape changes, not the substance.", "Pontosan! Csak az alak változik, az anyag nem.", "Exact! Se schimbă doar forma, nu și substanța."),
          failFeedback: ml("Falsch! Es entstehen keine neuen Stoffe, also ist es keine chemische Reaktion.", "Wrong! No new substances are created, so it's not a chemical reaction.", "Helytelen! Nem keletkeznek új anyagok, tehát nem kémiai reakcióról van szó.", "Incorect! Nu se creează substanțe noi, deci nu este o reacție chimică.")
        },
        {
          id: "ke-6-sr-3-s3",
          title: ml("Eisen rostet", "Iron rusts", "A vas rozsdásodik", "Ruginește fierul"),
          prompt: ml("Ein Fahrrad rostet im Regen. Was passiert hier?", "A bicycle rusts in the rain. What is happening here?", "Egy bicikli rozsdásodik az esőben. Mi történik itt?", "O bicicletă ruginește în ploaie. Ce se întâmplă aici?"),
          sceneType: "traffic",
          visual: { icon: "🚲", bg: "#3f2c22", accent: "#d97706" },
          choices: [
            { id: "ke-6-sr-3-s3-c1", "label": "Das Eisen schmilzt" },
            { id: "ke-6-sr-3-s3-c2", "label": "Das Eisen reagiert mit Sauerstoff zu Rost" },
            { id: "ke-6-sr-3-s3-c3", "label": "Das Wasser färbt das Eisen braun" },
            { id: "ke-6-sr-3-s3-c4", "label": "Das Eisen verdampft" }
          ],
          correctChoiceId: "ke-6-sr-3-s3-c2",
          successFeedback: ml("Richtig! Rosten ist eine chemische Reaktion (Oxidation).", "Correct! Rusting is a chemical reaction (oxidation).", "Helyes! A rozsdásodás egy kémiai reakció (oxidáció).", "Corect! Ruginirea este o reacție chimică (oxidare)."),
          failFeedback: ml("Falsch! Eisen und Sauerstoff reagieren chemisch zu Rost.", "Wrong! Iron and oxygen react chemically to form rust.", "Rossz! A vas és az oxigén kémiai reakcióba lépve rozsdát képez.", "Greșit! Fierul și oxigenul reacționează chimic pentru a forma rugina.")
        },
        {
          id: "ke-6-sr-3-s4",
          title: ml("Brausetablette", "Effervescent tablet", "Pebesgőtabletta", "Tableta efervescentă"),
          prompt: ml("Eine Brausetablette löst sich sprudelnd in Wasser auf. Warum sprudelt es?", "An effervescent tablet dissolves bubbling up in water. Why is it bubbling?", "Nincs szerepe <t13> buborékolva oldja fel vízben. Miért bugyborékol?", "O tabletă efervescentă se dizolvă în apă. De ce clocotește?"),
          sceneType: "community",
          visual: { icon: "🫧", bg: "#082f49", accent: "#0ea5e9" },
          choices: [
            { id: "ke-6-sr-3-s4-c1", "label": "Das Wasser kocht" },
            { id: "ke-6-sr-3-s4-c2", "label": "Es entsteht ein neues Gas durch eine Reaktion" },
            { id: "ke-6-sr-3-s4-c3", "label": "Die Tablette atmet aus" },
            { id: "ke-6-sr-3-s4-c4", "label": "Das Wasser verdampft" }
          ],
          correctChoiceId: "ke-6-sr-3-s4-c2",
          successFeedback: ml("Korrekt! Die Gasentwicklung ist ein Zeichen für eine chemische Reaktion.", "Correct! The evolution of gas is a sign of a chemical reaction.", "Helyes! A gázfejlődés egy kémiai reakció jele.", "Corect! Evoluția gazului este un semn al unei reacții chimice."),
          failFeedback: ml("Falsch! Es entsteht ein neues Gas (Kohlenstoffdioxid) durch eine chemische Reaktion.", "Wrong! A new gas (carbon dioxide) is created through a chemical reaction.", "Rossz! Kémiai reakció során új gáz (szén-dioxid) keletkezik.", "Greșit! Un nou gaz (dioxid de carbon) este creat printr-o reacție chimică.")
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "ke-6-cb-1",
      title: ml("Atommodell", "Atomic model", "Atommodell", "Model atomic"),
      instruction: ml("Baue das Schalenmodell eines Atoms auf!", "Build the shell model of an atom!", "Készítse fel az atom héjmodelljét!", "Construiți modelul de înveliș al unui atom!"),
      hint: "Von innen nach außen.",
      theme: { bg: "#020617", accent: "#14b8a6", card: "#0f172a" },
      parts: [
        { id: "ke-6-cb-1-p1", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), emoji: "🎯" },
        { id: "ke-6-cb-1-p2", label: ml("K-Schale", "K shell", "K-héj", "Înveliș K"), emoji: "⭕" },
        { id: "ke-6-cb-1-p3", label: ml("L-Schale", "L-bowl", "L-tál", "L-bowl"), emoji: "🪐" },
        { id: "ke-6-cb-1-p4", label: ml("Valenzelektronen", "Valence electrons", "Vegyértékelektronok", "Electroni de valență"), emoji: "⚡" }
      ],
      slots: [
        { id: "ke-6-cb-1-s1", label: ml("Zentrum", "Center", "Központ", "Centru") },
        { id: "ke-6-cb-1-s2", "label": "Innere Schale" },
        { id: "ke-6-cb-1-s3", "label": "Äußere Schale" },
        { id: "ke-6-cb-1-s4", "label": "Außenhülle" }
      ],
      solution: [
        "ke-6-cb-1-p1",
        "ke-6-cb-1-p2",
        "ke-6-cb-1-p3",
        "ke-6-cb-1-p4"
      ]
    },
    {
      id: "ke-6-cb-2",
      title: ml("Periodensystem", "Periodic table", "Periodikus táblázat", "Tabel periodic"),
      instruction: ml("Ordne die Informationen eines Elements im Periodensystem!", "Order the information Elements in the periodic table!", "Rendezze el az információs elemeket a periódusos rendszerben!", "Ordonează informațiile Elementele din tabelul periodic!"),
      hint: "Von oben nach unten auf der Kachel.",
      theme: { bg: "#1e1b4b", accent: "#8b5cf6", card: "#2e1065" },
      parts: [
        { id: "ke-6-cb-2-p1", label: ml("Ordnungszahl", "Atomic number", "Atomszám", "Număr atomic"), emoji: "🔢" },
        { id: "ke-6-cb-2-p2", label: ml("Elementsymbol", "Element symbol", "Elem szimbólum", "Simbol element"), emoji: "🔠" },
        { id: "ke-6-cb-2-p3", label: ml("Elementname", "Element name", "Elem neve", "Numele elementului"), emoji: "📝" },
        { id: "ke-6-cb-2-p4", label: ml("Atommasse", "Atomic mass", "Atomtömeg", "Masa atomică"), emoji: "⚖️" }
      ],
      slots: [
        { id: "ke-6-cb-2-s1", label: ml("Oben links", "Top left", "Bal fent", "Stânga sus") },
        { id: "ke-6-cb-2-s2", "label": "Mitte groß" },
        { id: "ke-6-cb-2-s3", "label": "Darunter" },
        { id: "ke-6-cb-2-s4", "label": "Ganz unten" }
      ],
      solution: [
        "ke-6-cb-2-p1",
        "ke-6-cb-2-p2",
        "ke-6-cb-2-p3",
        "ke-6-cb-2-p4"
      ]
    },
    {
      id: "ke-6-cb-3",
      title: ml("Reaktionsgleichung", "Reaction equation", "Reakcióegyenlet", "Ecuația reacției"),
      instruction: ml("Baue eine einfache chemische Reaktionsgleichung auf!", "Build a simple chemical reaction equation!", "Készíts fel egy egyszerű kémiai reakcióegyenletet!", "Construiți o ecuație simplă de reacție chimică!"),
      hint: "Ausgangsstoffe reagieren zu Endstoffen.",
      theme: { bg: "#171717", accent: "#f59e0b", card: "#262626" },
      parts: [
        { id: "ke-6-cb-3-p1", label: ml("Edukt 1", "Educt 1", "Educt 1", "Educt 1"), emoji: "🧪" },
        { id: "ke-6-cb-3-p2", label: ml("Edukt 2", "Educt 2", "Educt 2", "Educt 2"), emoji: "🧪" },
        { id: "ke-6-cb-3-p3", label: ml("Reaktionspfeil", "Reaction arrow", "Reakció nyíl", "Săgeată de reacție"), emoji: "➡️" },
        { id: "ke-6-cb-3-p4", label: ml("Produkt", "Product", "Termék", "Produs"), emoji: "✨" }
      ],
      slots: [
        { id: "ke-6-cb-3-s1", label: ml("Startstoff A", "Starting material A", "A kiindulási anyag", "Materia prima A") },
        { id: "ke-6-cb-3-s2", label: ml("Startstoff B", "Starting substance B", "Kiinduló anyag B", "Substanța inițială B") },
        { id: "ke-6-cb-3-s3", label: ml("Reagiert zu", "Reacts to", "Reagál:", "Reacționează la") },
        { id: "ke-6-cb-3-s4", label: ml("Endstoff", "End material", "Véganyag", "Material final") }
      ],
      solution: [
        "ke-6-cb-3-p1",
        "ke-6-cb-3-p2",
        "ke-6-cb-3-p3",
        "ke-6-cb-3-p4"
      ]
    },
      {
      id: "ke-6-cb-4",
      title: ml("Atommodell (Pro)", "Atomic Model (Pro)", "Atommodell (Pro)", "Model atomic (Pro)"),
      instruction: ml("Baue das Schalenmodell eines Atoms auf!", "Build the shell model of an atom!", "Készítse fel az atom héjmodelljét!", "Construiți modelul de înveliș al unui atom!"),
      hint: "Von innen nach außen.",
      theme: { bg: "#020617", accent: "#14b8a6", card: "#0f172a" },
      parts: [
        { id: "ke-6-cb-1-p1", label: ml("Atomkern", "Atomic nucleus", "Atommag", "Nucleu atomic"), emoji: "🎯" },
        { id: "ke-6-cb-1-p2", label: ml("K-Schale", "K shell", "K-héj", "Înveliș K"), emoji: "⭕" },
        { id: "ke-6-cb-1-p3", label: ml("L-Schale", "L-bowl", "L-tál", "L-bowl"), emoji: "🪐" },
        { id: "ke-6-cb-1-p4", label: ml("Valenzelektronen", "Valence electrons", "Vegyértékelektronok", "Electroni de valență"), emoji: "⚡" }
      ],
      slots: [
        { id: "ke-6-cb-1-s1", label: ml("Zentrum", "Center", "Központ", "Centru") },
        { id: "ke-6-cb-1-s2", "label": "Innere Schale" },
        { id: "ke-6-cb-1-s3", "label": "Äußere Schale" },
        { id: "ke-6-cb-1-s4", "label": "Außenhülle" }
      ],
      solution: [
        "ke-6-cb-1-p1",
        "ke-6-cb-1-p2",
        "ke-6-cb-1-p3",
        "ke-6-cb-1-p4"
      ]
    },
      {
      id: "ke-6-cb-5",
      title: ml("Periodensystem (Pro)", "Periodic Table (Pro)", "Periodikus rendszer (Pro)", "Tabel periodic (Pro)"),
      instruction: ml("Ordne die Informationen eines Elements im Periodensystem!", "Order the information Elements in the periodic table!", "Rendezze el az információs elemeket a periódusos rendszerben!", "Ordonează informațiile Elementele din tabelul periodic!"),
      hint: "Von oben nach unten auf der Kachel.",
      theme: { bg: "#1e1b4b", accent: "#8b5cf6", card: "#2e1065" },
      parts: [
        { id: "ke-6-cb-2-p1", label: ml("Ordnungszahl", "Atomic number", "Atomszám", "Număr atomic"), emoji: "🔢" },
        { id: "ke-6-cb-2-p2", label: ml("Elementsymbol", "Element symbol", "Elem szimbólum", "Simbol element"), emoji: "🔠" },
        { id: "ke-6-cb-2-p3", label: ml("Elementname", "Element name", "Elem neve", "Numele elementului"), emoji: "📝" },
        { id: "ke-6-cb-2-p4", label: ml("Atommasse", "Atomic mass", "Atomtömeg", "Masa atomică"), emoji: "⚖️" }
      ],
      slots: [
        { id: "ke-6-cb-2-s1", label: ml("Oben links", "Top left", "Bal fent", "Stânga sus") },
        { id: "ke-6-cb-2-s2", "label": "Mitte groß" },
        { id: "ke-6-cb-2-s3", "label": "Darunter" },
        { id: "ke-6-cb-2-s4", "label": "Ganz unten" }
      ],
      solution: [
        "ke-6-cb-2-p1",
        "ke-6-cb-2-p2",
        "ke-6-cb-2-p3",
        "ke-6-cb-2-p4"
      ]
    }
  ],
  memoryRadar: [
    {
      id: "ke-6-mr-1",
      title: ml("Edelgase", "Noble gases", "Nemesgázok", "Gaze nobile"),
      instruction: ml("Merke dir die Edelgase auf dem Radar!", "Note the noble gases on the radar!", "Jegyezze meg a nemesgázokat a radaron!", "Rețineți gazele nobile de pe radar!"),
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#111827", accent: "#f59e0b", radar: "#4b5563" },
      targetItems: [
        { id: "ke-6-mr-1-t1", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
        { id: "ke-6-mr-1-t2", label: ml("Neon", "Neon", "Neon", "Neon"), emoji: "💡" },
        { id: "ke-6-mr-1-t3", label: ml("Argon", "Argon", "Argon</t5>Carbont3", "argon"), emoji: "🛡️" }
      ],
      decoyItems: [
        { id: "ke-6-mr-1-d1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "ke-6-mr-1-d2", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-6-mr-1-d3", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙" },
        { id: "ke-6-mr-1-d4", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "🪨" },
        { id: "ke-6-mr-1-d5", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen"), emoji: "💧" }
      ]
    },
    {
      id: "ke-6-mr-2",
      title: ml("Alkalimetalle", "Alkali metals", "Alkálifémek", "Metale alcaline"),
      instruction: ml("Finde die Alkalimetalle!", "Find the alkali metals!", "Keresse meg az alkálifémeket!", "Găsiți metalele alcaline!"),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#2e1065", accent: "#c084fc", radar: "#581c87" },
      targetItems: [
        { id: "ke-6-mr-2-t1", label: ml("Lithium", "Lithium", "Lítium", "Litiu"), emoji: "🔋" },
        { id: "ke-6-mr-2-t2", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🧂" },
        { id: "ke-6-mr-2-t3", label: ml("Kalium", "Potassium", "Kálium", "Potasiu"), emoji: "🍌" }
      ],
      decoyItems: [
        { id: "ke-6-mr-2-d1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
        { id: "ke-6-mr-2-d2", label: ml("Silber", "Silver", "Ezüst", "Argint"), emoji: "🥈" },
        { id: "ke-6-mr-2-d3", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🟢" },
        { id: "ke-6-mr-2-d4", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot"), emoji: "🧊" },
        { id: "ke-6-mr-2-d5", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🪨" }
      ]
    },
    {
      id: "ke-6-mr-3",
      title: ml("Laborgeräte", "Laboratory equipment", "Laboratóriumi berendezések", "Echipament de laborator"),
      instruction: ml("Erinnere dich an die echten Laborgeräte!", "Remember the real laboratory equipment!", "Ne feledje az igazi laboratóriumi felszerelést!", "Nu uitați de adevăratul echipament de laborator!"),
      flashDurationMs: 2000,
      selectionLimit: 4,
      theme: { bg: "#064e3b", accent: "#34d399", radar: "#065f46" },
      targetItems: [
        { id: "ke-6-mr-3-t1", label: ml("Reagenzglas", "Test tube", "Kémcső", "Eprubetă"), emoji: "🧪" },
        { id: "ke-6-mr-3-t2", label: ml("Becherglas", "Beaker", "6Méltt", "Mel"), emoji: "🥛" },
        { id: "ke-6-mr-3-t3", label: ml("Erlenmeyerkolben", "Erlenmeyer flask", "Erlenmeyer-lombik", "Balon Erlenmeyer"), emoji: "⚗️" },
        { id: "ke-6-mr-3-t4", label: ml("Pipette", "Pipette", "pipetta", "pipetă"), emoji: "💧" }
      ],
      decoyItems: [
        { id: "ke-6-mr-3-d1", label: ml("Kaffeetasse", "Coffee cup", "Kávéscsésze", "Cășca de cafea"), emoji: "☕" },
        { id: "ke-6-mr-3-d2", label: ml("Bratpfanne", "Frying pan", "Sütőserpenyő", "Tigaie"), emoji: "🍳" },
        { id: "ke-6-mr-3-d3", label: ml("Gießkanne", "Watering can", "Öntözőkanna", "Adăpatoare"), emoji: "🚿" },
        { id: "ke-6-mr-3-d4", "label": "Trinkglas", emoji: "🥤" },
        { id: "ke-6-mr-3-d5", "label": "Suppenschüssel", emoji: "🥣" }
      ]
    },
      {
      id: "ke-6-mr-4",
      title: ml("Edelgase (Pro)", "Noble gases (Pro)", "Nemesgázok (Pro)", "Gaze nobile (Pro)"),
      instruction: ml("Merke dir die Edelgase auf dem Radar!", "Note the noble gases on the radar!", "Jegyezze meg a nemesgázokat a radaron!", "Rețineți gazele nobile de pe radar!"),
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#111827", accent: "#f59e0b", radar: "#4b5563" },
      targetItems: [
        { id: "ke-6-mr-1-t1", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
        { id: "ke-6-mr-1-t2", label: ml("Neon", "Neon", "Neon", "Neon"), emoji: "💡" },
        { id: "ke-6-mr-1-t3", label: ml("Argon", "Argon", "Argon</t5>Carbont3", "argon"), emoji: "🛡️" }
      ],
      decoyItems: [
        { id: "ke-6-mr-1-d1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "ke-6-mr-1-d2", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-6-mr-1-d3", label: ml("Gold", "Gold", "Arany", "Aur"), emoji: "🪙" },
        { id: "ke-6-mr-1-d4", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "🪨" },
        { id: "ke-6-mr-1-d5", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen"), emoji: "💧" }
      ]
    },
      {
      id: "ke-6-mr-5",
      title: ml("Alkalimetalle (Pro)", "Alkaline metals (Pro)", "Alkáli fémek (Pro)", "Metale alcaline (Pro)"),
      instruction: ml("Finde die Alkalimetalle!", "Find the alkali metals!", "Keresse meg az alkálifémeket!", "Găsiți metalele alcaline!"),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#2e1065", accent: "#c084fc", radar: "#581c87" },
      targetItems: [
        { id: "ke-6-mr-2-t1", label: ml("Lithium", "Lithium", "Lítium", "Litiu"), emoji: "🔋" },
        { id: "ke-6-mr-2-t2", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🧂" },
        { id: "ke-6-mr-2-t3", label: ml("Kalium", "Potassium", "Kálium", "Potasiu"), emoji: "🍌" }
      ],
      decoyItems: [
        { id: "ke-6-mr-2-d1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🥉" },
        { id: "ke-6-mr-2-d2", label: ml("Silber", "Silver", "Ezüst", "Argint"), emoji: "🥈" },
        { id: "ke-6-mr-2-d3", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🟢" },
        { id: "ke-6-mr-2-d4", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot"), emoji: "🧊" },
        { id: "ke-6-mr-2-d5", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🪨" }
      ]
    }
  ]
  },
  7: {
  grade: 7,
  meteorCatch: [
    {
      id: "ke-7-mc-1",
      title: ml("Säuren fangen", "Catch acids", "Fogd be a savakat", "Prinde acizi"),
      prompt: ml("Fange alle sauren Lösungen!", "Catch all acidic solutions!", "Fogjon fel minden savas oldatot!", "Prinți toate soluțiile acide!"),
      goal: 10,
      speed: 1.2,
      theme: { sky: "#1a1a2e", glow: "#e94560", accent: "#0f3460" },
      correctItems: [
        { id: "ke-7-mc-1-c1", label: ml("Zitronensaft", "Lemon juice", "Citromlé", "Suc de lămâie"), emoji: "🍋" },
        { id: "ke-7-mc-1-c2", label: ml("Essig", "Vinegar", "Ecet", "Oțet"), emoji: "🏺" },
        { id: "ke-7-mc-1-c3", label: ml("Magensäure", "Stomach acid", "Gyomorsav", "Acid stomacal"), emoji: "🧪" }
      ],
      wrongItems: [
        { id: "ke-7-mc-1-w1", label: ml("Seifenwasser", "Soapy water", "Szappanos víz", "Apa cu săpun"), emoji: "🧼" },
        { id: "ke-7-mc-1-w2", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴" },
        { id: "ke-7-mc-1-w3", label: ml("Reines Wasser", "Pure water", "Tiszta víz", "Apă pură"), emoji: "💧" }
      ]
    },
    {
      id: "ke-7-mc-2",
      title: ml("Oxide sammeln", "Collect oxides", "Oxidok összegyűjtése", "Colectați oxizi"),
      prompt: ml("Sammle die Oxide ein!", "Collect the oxides!", "Gyűjtsd össze az oxidokat!", "Colectați oxizii!"),
      goal: 12,
      speed: 1.5,
      theme: { sky: "#0f0f0f", glow: "#ff9a00", accent: "#333333" },
      correctItems: [
        { id: "ke-7-mc-2-c1", label: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "💨" },
        { id: "ke-7-mc-2-c2", label: ml("Eisenoxid", "Iron oxide", "Vas-oxid", "Oxid de fier"), emoji: "🪨" },
        { id: "ke-7-mc-2-c3", label: ml("Magnesiumoxid", "Magnesium oxide", "Magnézium-oxid", "Oxid de magneziu"), emoji: "✨" }
      ],
      wrongItems: [
        { id: "ke-7-mc-2-w1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🌬️" },
        { id: "ke-7-mc-2-w2", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-7-mc-2-w3", label: ml("Magnesium", "Magnesium", "Magnézium", "Magneziu"), emoji: "🪙" }
      ]
    },
    {
      id: "ke-7-mc-3",
      title: ml("Basen erkennen", "Recognize bases", "A bázisok felismerése", "Recunoașteți bazele"),
      prompt: ml("Fange alle alkalischen Lösungen (Basen)!", "Catch all alkaline solutions (bases)!", "Fogjon meg minden lúgos oldatot (bázist)!", "Prinde toate soluțiile (bazele) alcaline!"),
      goal: 15,
      speed: 1.8,
      theme: { sky: "#001f3f", glow: "#0074d9", accent: "#7fdbff" },
      correctItems: [
        { id: "ke-7-mc-3-c1", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴" },
        { id: "ke-7-mc-3-c2", label: ml("Seifenlösung", "Soap solution", "Szappanoldat", "Soluție de săpun"), emoji: "🧼" },
        { id: "ke-7-mc-3-c3", label: ml("Ammoniakwasser", "Ammonia water", "Ammóniás víz", "Apa cu amoniac"), emoji: "🧪" }
      ],
      wrongItems: [
        { id: "ke-7-mc-3-w1", label: ml("Zitronensaft", "Lemon juice", "Citromlé", "Suc de lămâie"), emoji: "🍋" },
        { id: "ke-7-mc-3-w2", label: ml("Essig", "Vinegar", "Ecet", "Oțet"), emoji: "🏺" },
        { id: "ke-7-mc-3-w3", label: ml("Kohlensäure", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "🫧" }
      ]
    },
      {
      id: "ke-7-mc-4",
      title: ml("Säuren fangen (Pro)", "Collect acids (Pro)", "Savak összegyűjtése (Pro)", "Colectați acizi (Pro)"),
      prompt: ml("Fange alle sauren Lösungen!", "Catch all acidic solutions!", "Fogjon fel minden savas oldatot!", "Prinți toate soluțiile acide!"),
      goal: 10,
      speed: 1.2,
      theme: { sky: "#1a1a2e", glow: "#e94560", accent: "#0f3460" },
      correctItems: [
        { id: "ke-7-mc-1-c1", label: ml("Zitronensaft", "Lemon juice", "Citromlé", "Suc de lămâie"), emoji: "🍋" },
        { id: "ke-7-mc-1-c2", label: ml("Essig", "Vinegar", "Ecet", "Oțet"), emoji: "🏺" },
        { id: "ke-7-mc-1-c3", label: ml("Magensäure", "Stomach acid", "Gyomorsav", "Acid stomacal"), emoji: "🧪" }
      ],
      wrongItems: [
        { id: "ke-7-mc-1-w1", label: ml("Seifenwasser", "Soapy water", "Szappanos víz", "Apa cu săpun"), emoji: "🧼" },
        { id: "ke-7-mc-1-w2", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴" },
        { id: "ke-7-mc-1-w3", label: ml("Reines Wasser", "Pure water", "Tiszta víz", "Apă pură"), emoji: "💧" }
      ]
    },
      {
      id: "ke-7-mc-5",
      title: ml("Oxide sammeln (Pro)", "Collect oxides (Pro)", "Oxidok gyűjtése (Pro)", "Colectați oxizi (Pro)"),
      prompt: ml("Sammle die Oxide ein!", "Collect the oxides!", "Gyűjtsd össze az oxidokat!", "Colectați oxizii!"),
      goal: 12,
      speed: 1.5,
      theme: { sky: "#0f0f0f", glow: "#ff9a00", accent: "#333333" },
      correctItems: [
        { id: "ke-7-mc-2-c1", label: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "💨" },
        { id: "ke-7-mc-2-c2", label: ml("Eisenoxid", "Iron oxide", "Vas-oxid", "Oxid de fier"), emoji: "🪨" },
        { id: "ke-7-mc-2-c3", label: ml("Magnesiumoxid", "Magnesium oxide", "Magnézium-oxid", "Oxid de magneziu"), emoji: "✨" }
      ],
      wrongItems: [
        { id: "ke-7-mc-2-w1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🌬️" },
        { id: "ke-7-mc-2-w2", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-7-mc-2-w3", label: ml("Magnesium", "Magnesium", "Magnézium", "Magneziu"), emoji: "🪙" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "ke-7-os-1",
      title: ml("Säure oder Base?", "Acid or base?", "Sav vagy bázis?", "Acid sau bază?"),
      instruction: ml("Ordne die Stoffe in Säuren und Basen ein.", "Classify the substances into acids and bases.", "Osztályozza az anyagokat savakra és lúgokra.", "Clasificați substanțele în acizi și baze."),
      theme: { bg: "#111111", orbit: "#444444", accent: "#ff4136" },
      buckets: [
        { id: "b-acid", label: ml("Säure", "Acid", "Sav", "Acid"), color: "#ff4136" },
        { id: "b-base", label: ml("Base", "Base", "Alap", "Bază"), color: "#0074d9" }
      ],
      items: [
        { id: "ke-7-os-1-i1", label: ml("Zitronensäure", "Citric acid", "Citromsav", "Acid citric"), emoji: "🍋", bucketId: "b-acid" },
        { id: "ke-7-os-1-i2", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴", bucketId: "b-base" },
        { id: "ke-7-os-1-i3", label: ml("Essigsäure", "Acetic acid", "Ecetsav", "Acid acetic"), emoji: "🏺", bucketId: "b-acid" },
        { id: "ke-7-os-1-i4", label: ml("Seifenlösung", "Soap solution", "Szappanoldat", "Soluție de săpun"), emoji: "🧼", bucketId: "b-base" },
        { id: "ke-7-os-1-i5", label: ml("Kohlensäure", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "🫧", bucketId: "b-acid" },
        { id: "ke-7-os-1-i6", label: ml("Kalkwasser", "Limewater", "Mészvíz", "Apa de calcar"), emoji: "🥛", bucketId: "b-base" }
      ]
    },
    {
      id: "ke-7-os-2",
      title: ml("Element oder Verbindung?", "Element or compound?", "Elem vagy vegyület?", "Element sau compus?"),
      instruction: ml("Sortiere nach Element und chemischer Verbindung.", "Sort by element and chemical compound.", "Rendezés elem és kémiai vegyület szerint.", "Sortare după element și compus chimic."),
      theme: { bg: "#1a1a1a", orbit: "#555555", accent: "#2ecc40" },
      buckets: [
        { id: "b-element", label: ml("Element", "Element", "Elem", "Element"), color: "#2ecc40" },
        { id: "b-compound", label: ml("Verbindung", "Compound", "Vegyület", "Compus"), color: "#ff851b" }
      ],
      items: [
        { id: "ke-7-os-2-i1", label: ml("Sauerstoff (O2)", "Oxygen (O2)", "Oxigén (O2)", "Oxigen (O2)"), emoji: "🌬️", bucketId: "b-element" },
        { id: "ke-7-os-2-i2", label: ml("Wasser (H2O)", "Water (H2O)", "Víz (H2O)", "Apa (H2O)"), emoji: "💧", bucketId: "b-compound" },
        { id: "ke-7-os-2-i3", label: ml("Eisen (Fe)", "Iron (Fe)", "Vas (Fe)", "Fier (Fe)"), emoji: "🔩", bucketId: "b-element" },
        { id: "ke-7-os-2-i4", label: ml("Kohlenstoffdioxid (CO2)", "Carbon dioxide (CO2)", "Szén-dioxid (CO2)", "Dioxid de carbon (CO2)"), emoji: "💨", bucketId: "b-compound" },
        { id: "ke-7-os-2-i5", label: ml("Kupfer (Cu)", "Copper (Cu)", "Réz (Cu)", "Cupru (Cu)"), emoji: "🪙", bucketId: "b-element" },
        { id: "ke-7-os-2-i6", label: ml("Natriumchlorid (NaCl)", "Sodium chloride (NaCl)", "Nátrium-klorid (NaCl)", "Clorura de sodiu (NaCl)"), emoji: "🧂", bucketId: "b-compound" }
      ]
    },
    {
      id: "ke-7-os-3",
      title: ml("pH-Wert Sortierung", "pH value sorting", "pH-érték rendezés", "Sortarea valorii pH"),
      instruction: ml("Ordne die pH-Werte in sauer und alkalisch ein.", "Classify the pH values into acidic and alkaline.", "Osztályozza a pH-értékeket savas és lúgos értékekre.", "Clasificați valorile pH-ului în acid și alcalin."),
      theme: { bg: "#0d0d0d", orbit: "#333333", accent: "#b10dc9" },
      buckets: [
        { id: "b-acidic", label: ml("Sauer (pH < 7)", "Acidic (pH < 7)", "Savas (pH < 7)", "Acid (pH < 7)"), color: "#ff4136" },
        { id: "b-alkaline", label: ml("Alkalisch (pH > 7)", "Alkaline (pH > 7)", "lúgos (pH > 7)", "Alcaline (pH > 7)"), color: "#0074d9" }
      ],
      items: [
        { id: "ke-7-os-3-i1", label: ml("pH 2", "pH 2", "pH 2", "pH 2"), emoji: "🔴", bucketId: "b-acidic" },
        { id: "ke-7-os-3-i2", label: ml("pH 12", "pH 12", "pH 12", "pH 12"), emoji: "🔵", bucketId: "b-alkaline" },
        { id: "ke-7-os-3-i3", label: ml("pH 5", "pH 5", "pH 5", "pH 5"), emoji: "🟠", bucketId: "b-acidic" },
        { id: "ke-7-os-3-i4", label: ml("pH 9", "pH 9", "pH 9", "pH 9"), emoji: "🟢", bucketId: "b-alkaline" },
        { id: "ke-7-os-3-i5", label: ml("pH 1", "pH 1", "pH 1", "pH 1"), emoji: "🟥", bucketId: "b-acidic" },
        { id: "ke-7-os-3-i6", label: ml("pH 14", "pH 14", "pH 14", "pH 14"), emoji: "🟦", bucketId: "b-alkaline" }
      ]
    },
      {
      id: "ke-7-os-4",
      title: ml("Säure oder Base? (Pro)", "Acid or base? (Pro)", "Sav vagy bázis? (Pro)", "Acid sau bază? (Pro)"),
      instruction: ml("Ordne die Stoffe in Säuren und Basen ein.", "Classify the substances into acids and bases.", "Osztályozza az anyagokat savakra és lúgokra.", "Clasificați substanțele în acizi și baze."),
      theme: { bg: "#111111", orbit: "#444444", accent: "#ff4136" },
      buckets: [
        { id: "b-acid", label: ml("Säure", "Acid", "Sav", "Acid"), color: "#ff4136" },
        { id: "b-base", label: ml("Base", "Base", "Alap", "Bază"), color: "#0074d9" }
      ],
      items: [
        { id: "ke-7-os-1-i1", label: ml("Zitronensäure", "Citric acid", "Citromsav", "Acid citric"), emoji: "🍋", bucketId: "b-acid" },
        { id: "ke-7-os-1-i2", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴", bucketId: "b-base" },
        { id: "ke-7-os-1-i3", label: ml("Essigsäure", "Acetic acid", "Ecetsav", "Acid acetic"), emoji: "🏺", bucketId: "b-acid" },
        { id: "ke-7-os-1-i4", label: ml("Seifenlösung", "Soap solution", "Szappanoldat", "Soluție de săpun"), emoji: "🧼", bucketId: "b-base" },
        { id: "ke-7-os-1-i5", label: ml("Kohlensäure", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "🫧", bucketId: "b-acid" },
        { id: "ke-7-os-1-i6", label: ml("Kalkwasser", "Limewater", "Mészvíz", "Apa de calcar"), emoji: "🥛", bucketId: "b-base" }
      ]
    },
      {
      id: "ke-7-os-5",
      title: ml("Element oder Verbindung? (Pro)", "Element or connection? (Pro)", "Elem vagy csatlakozás? (Pro)", "Element sau conexiune? (Pro)"),
      instruction: ml("Sortiere nach Element und chemischer Verbindung.", "Sort by element and chemical compound.", "Rendezés elem és kémiai vegyület szerint.", "Sortare după element și compus chimic."),
      theme: { bg: "#1a1a1a", orbit: "#555555", accent: "#2ecc40" },
      buckets: [
        { id: "b-element", label: ml("Element", "Element", "Elem", "Element"), color: "#2ecc40" },
        { id: "b-compound", label: ml("Verbindung", "Compound", "Vegyület", "Compus"), color: "#ff851b" }
      ],
      items: [
        { id: "ke-7-os-2-i1", label: ml("Sauerstoff (O2)", "Oxygen (O2)", "Oxigén (O2)", "Oxigen (O2)"), emoji: "🌬️", bucketId: "b-element" },
        { id: "ke-7-os-2-i2", label: ml("Wasser (H2O)", "Water (H2O)", "Víz (H2O)", "Apa (H2O)"), emoji: "💧", bucketId: "b-compound" },
        { id: "ke-7-os-2-i3", label: ml("Eisen (Fe)", "Iron (Fe)", "Vas (Fe)", "Fier (Fe)"), emoji: "🔩", bucketId: "b-element" },
        { id: "ke-7-os-2-i4", label: ml("Kohlenstoffdioxid (CO2)", "Carbon dioxide (CO2)", "Szén-dioxid (CO2)", "Dioxid de carbon (CO2)"), emoji: "💨", bucketId: "b-compound" },
        { id: "ke-7-os-2-i5", label: ml("Kupfer (Cu)", "Copper (Cu)", "Réz (Cu)", "Cupru (Cu)"), emoji: "🪙", bucketId: "b-element" },
        { id: "ke-7-os-2-i6", label: ml("Natriumchlorid (NaCl)", "Sodium chloride (NaCl)", "Nátrium-klorid (NaCl)", "Clorura de sodiu (NaCl)"), emoji: "🧂", bucketId: "b-compound" }
      ]
    }
  ],
  signalRunner: [
    {
      id: "ke-7-sr-1",
      title: ml("Labor-Sicherheit", "Laboratory safety", "Laboratóriumi biztonság", "Siguranța în laborator"),
      instruction: ml("Triff die richtigen Entscheidungen im Chemielabor.", "Make the right decisions in the chemistry laboratory.", "Hozza meg a megfelelő döntéseket a kémiai laborban.", "Luați deciziile corecte în laboratorul de chimie."),
      scenes: [
        {
          id: "ke-7-sr-1-s1",
          title: ml("Schutzbrille", "Safety glasses", "Védőszemüveg", "Ochelari de protecție"),
          prompt: ml("Du beginnst ein Experiment mit Säuren. Was tust du zuerst?", "You start an experiment with acids. What do you do first?", "Kísérletet kezd savakkal. Mit tesz először?", "Începeți un experiment cu acizi. Ce faci mai întâi?"),
          sceneType: "safety",
          visual: { icon: "🥽", bg: "#111111", accent: "#ffdc00" },
          choices: [
            { id: "c1", label: ml("Schutzbrille aufsetzen", "Put on safety glasses", "Vegyen fel védőszemüveget", "Puneți ochelari de protecție") },
            { id: "c2", label: ml("Sofort losmischen", "Start mixing immediately", "Azonnal kezdje el keverni", "Începeți să amestecați imediat") },
            { id: "c3", label: ml("Am Reagenzglas riechen", "Smell the test tube", "A kémcső szaglása", "Miros eprubeta") },
            { id: "c4", label: ml("Wasser trinken", "Drink water", "Igyunk vizet", "Bea apă") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Richtig! Die Schutzbrille ist Pflicht.", "Correct! Protective glasses are mandatory.", "Helyes! A védőszemüveg használata kötelező.", "Corect! Ochelarii de protecție sunt obligatorii."),
          failFeedback: ml("Falsch! Ohne Schutzbrille ist es zu gefährlich.", "Wrong! It is too dangerous without safety glasses.", "Rossz! Védőszemüveg nélkül túl veszélyes.", "Greșit! Este prea periculos fără ochelari de protecție.")
        },
        {
          id: "ke-7-sr-1-s2",
          title: ml("Geruchsprobe", "Smell test", "Szagteszt", "Testul mirosului"),
          prompt: ml("Du sollst den Geruch eines Stoffes prüfen. Wie machst du das?", "You should test the smell of a substance. How do you do that?", "Meg kell vizsgálnia az anyag szagát. Hogyan csinálja?", "Ar trebui să testați mirosul unei substanțe. Cum faci asta?"),
          sceneType: "safety",
          visual: { icon: "👃", bg: "#1a1a2e", accent: "#0f3460" },
          choices: [
            { id: "c1", label: ml("Nase direkt ans Gefäß halten", "Hold your nose directly to the vessel", "Tartsa az orrát közvetlenül az edényhez.", "Ține-ți nasul direct pe vas") },
            { id: "c2", label: ml("Dämpfe mit der Hand zufächeln", "Fan the vapors with your hand", "Kézzel fújja át a gőzöket.", "Ventilizați vaporii cu mâna") },
            { id: "c3", label: ml("Tief einatmen", "Take a deep breath", "Vegyél egy mély lélegzetet", "Respiră adânc") },
            { id: "c4", label: ml("Den Stoff probieren", "Try the substance", "Próbáld ki az anyagot", "Încercați substanța") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Sehr gut! So schützt du deine Atemwege.", "Very good! This is how you protect your respiratory system.", "Nagyon jó! Így védi légzőrendszerét.", "Foarte bine! Așa vă protejați sistemul respirator."),
          failFeedback: ml("Gefährlich! Dämpfe können ätzend sein.", "Dangerous! Vapors can be corrosive.", "Veszélyes! A gőzök maró hatásúak lehetnek.", "Periculoasă! Vaporii pot fi corozivi.")
        },
        {
          id: "ke-7-sr-1-s3",
          title: ml("Säure verdünnen", "Dilute acid", "Hígított sav", "Acid diluat"),
          prompt: ml("Du musst eine konzentrierte Säure verdünnen. Wie gehst du vor?", "You have to dilute a concentrated acid. How do you proceed?", "Tömény savat kell hígítani. Hogyan tovább?", "Trebuie să diluezi un acid concentrat. Cum procedați?"),
          sceneType: "safety",
          visual: { icon: "💧", bg: "#222222", accent: "#ff4136" },
          choices: [
            { id: "c1", label: ml("Wasser in die Säure gießen", "Pour water into the acid", "Töltsön vizet a savba", "Toarnă apă în acid") },
            { id: "c2", label: ml("Säure in das Wasser gießen", "Pour acid into the water", "Töltsön savat a vízbe", "Toarnă acid în apă") },
            { id: "c3", label: ml("Beides gleichzeitig mischen", "Mix both at the same time", "Keverjük össze mindkettőt egyszerre", "Amestecă ambele în acelaşi timp") },
            { id: "c4", label: ml("Kräftig schütteln", "Shake vigorously", "Erősen rázza meg", "Agitați puternic") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Korrekt! Erst das Wasser, dann die Säure.", "Correct! First the water, then the acid.", "Helyes! Először a víz, majd a sav.", "Corect! Mai întâi apa, apoi acidul."),
          failFeedback: ml("Falsch! 'Zuerst das Wasser, dann die Säure, sonst geschieht das Ungeheure!'", "Wrong! 'First the water, then the acid, otherwise something terrible will happen!'", "Rossz! 'Először a víz, aztán a sav, különben valami szörnyűség történik!'", "Greșit! „Mai întâi apa, apoi acidul, altfel se va întâmpla ceva groaznic!’")
        },
        {
          id: "ke-7-sr-1-s4",
          title: ml("Brenner entzünden", "Ignite the burner", "Meggyújtják az égőt", "Aprindeți arzătorul"),
          prompt: ml("Du möchtest den Bunsenbrenner anzünden. Was ist die richtige Reihenfolge?", "You want to light the Bunsen burner. What is the correct order?", "Meg szeretné gyújtani a Bunsen-égőt. Mi a helyes sorrend?", "Doriți să aprindeți arzătorul Bunsen. Care este ordinea corectă?"),
          sceneType: "safety",
          visual: { icon: "🔥", bg: "#111111", accent: "#ff851b" },
          choices: [
            { id: "c1", label: ml("Gashahn auf, Streichholz suchen", "Open the gas tap, look for a match", "Nyissa ki a gázcsapot, keressen gyufát.", "Deschide robinetul de gaz, caută un chibrit") },
            { id: "c2", label: ml("Streichholz an, Gashahn auf", "Put on a match, Gas tap on", "Tegyél fel egy gyufát, nyomd meg a gázt", "Puneți un chibrit, apăsați benzină") },
            { id: "c3", label: ml("Luftzufuhr ganz auf, dann Gas", "Air supply completely on, then gas", "A levegőellátás teljesen bekapcsolva, majd a gáz", "Alimentarea cu aer complet pornită, apoi gaz") },
            { id: "c4", label: ml("Brenner ohne Aufsicht brennen lassen", "Let the burner burn without supervision", "Hagyja, hogy az égő felügyelet nélkül égjen.", "Lăsați arzătorul să ardă fără supraveghere") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! Erst die Flamme, dann das Gas.", "Right! First the flame, then the gas.", "Ugye! Először a láng, majd a gáz.", "Corect! Mai întâi flacăra, apoi gazul."),
          failFeedback: ml("Falsch! Es könnte sich zu viel Gas ansammeln.", "Wrong! Too much gas could build up.", "Rossz! Túl sok gáz halmozódhat fel.", "Greșit! S-ar putea acumula prea mult gaz.")
        }
      ]
    },
    {
      id: "ke-7-sr-2",
      title: ml("Reaktionen im Alltag", "Reactions in everyday life", "Reakciók a mindennapi életben", "Reacții în viața de zi cu zi"),
      instruction: ml("Erkenne chemische Reaktionen in deiner Umgebung.", "Identify chemical reactions in your environment.", "Azonosítsa a környezetében zajló kémiai reakciókat.", "Identificați reacțiile chimice din mediul dvs."),
      scenes: [
        {
          id: "ke-7-sr-2-s1",
          title: ml("Rostiges Fahrrad", "Rusty bicycle", "Rozsdás bicikli", "t47>Rută"),
          prompt: ml("Dein Fahrrad stand im Regen und rostet. Was passiert hier?", "Your bike was left in the rain and rusting. What's happening here?", "A kerékpárod az esőben maradt és rozsdásodott. Mi történik itt?", "Bicicleta ta a fost lăsată în ploaie și ruginită. Ce se întâmplă aici?"),
          sceneType: "nature",
          visual: { icon: "🚲", bg: "#2b2b2b", accent: "#8b4513" },
          choices: [
            { id: "c1", label: ml("Eisen reagiert mit Sauerstoff", "Iron reacts with oxygen", "A vas reakcióba lép oxigénnel", "Fierul reacționează cu oxigenul") },
            { id: "c2", label: ml("Das Eisen schmilzt", "The iron is melting", "A vas olvad", "Fierul se topește") },
            { id: "c3", label: ml("Das Wasser färbt das Eisen", "The water colors the iron", "A víz színezi a vasat", "Apa colorează fierul de călcat") },
            { id: "c4", label: ml("Eisen verdunstet", "Iron evaporates", "A vas elpárolog", "Fierul se evaporă") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Richtig! Es entsteht Eisenoxid (Rost).", "Correct! Iron oxide (rust) is formed.", "Helyes! Vas-oxid (rozsda) képződik.", "Corect! Se formează oxid de fier (rugina)."),
          failFeedback: ml("Falsch! Rosten ist eine Oxidation.", "Wrong! Rusting is an oxidation.", "Rossz! A rozsdásodás oxidáció.", "Greșit! Ruginirea este o oxidare.")
        },
        {
          id: "ke-7-sr-2-s2",
          title: ml("Lagerfeuer", "Campfire", "Tábortűz", "Foc de tabără"),
          prompt: ml("Holz verbrennt im Lagerfeuer. Welche Art von Reaktion ist das?", "Wood burns in the campfire. What type of reaction is this?", "A fa megég a tábortűzben. Milyen típusú reakcióról van szó?", "Lemnul arde în focul de tabără. Ce tip de reacție este acesta?"),
          sceneType: "nature",
          visual: { icon: "🔥", bg: "#1a0f00", accent: "#ff4500" },
          choices: [
            { id: "c1", label: ml("Eine exotherme Reaktion", "An exothermic reaction", "Egzoterm reakció", "O reacție exotermă") },
            { id: "c2", label: ml("Eine endotherme Reaktion", "An endothermic reaction", "Endoterm reakció", "O reacție endotermă") },
            { id: "c3", label: ml("Ein physikalischer Vorgang", "A physical process", "Fizikai folyamat", "Un proces fizic") },
            { id: "c4", label: ml("Eine Neutralisation", "A neutralization", "A semlegesítés", "O neutralizare") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Genau! Es wird Energie in Form von Wärme frei.", "Exactly! Energy is released in the form of heat.", "Pontosan! Az energia hő formájában szabadul fel.", "Exact! Energia este eliberată sub formă de căldură."),
          failFeedback: ml("Falsch! Bei einer Verbrennung wird Energie freigesetzt.", "Wrong! During combustion, energy is released.", "Rossz! Égés közben energia szabadul fel.", "Greșit! În timpul arderii, se eliberează energie.")
        },
        {
          id: "ke-7-sr-2-s3",
          title: ml("Brausetablette", "Effervescent tablet", "Pebesgőtabletta", "Tableta efervescentă"),
          prompt: ml("Eine Brausetablette löst sich sprudelnd in Wasser auf. Welches Gas entsteht?", "An effervescent tablet dissolves in water in a fizzy manner. What gas is produced?", "A pezsgőtabletta vízben szénsavas módon oldódik. Milyen gáz keletkezik?", "O tabletă efervescentă se dizolvă în apă într-o manieră gazoasă. Ce gaz se produce?"),
          sceneType: "nature",
          visual: { icon: "🫧", bg: "#001f3f", accent: "#7fdbff" },
          choices: [
            { id: "c1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen") },
            { id: "c2", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen") },
            { id: "c3", label: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon") },
            { id: "c4", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot") }
          ],
          correctChoiceId: "c3",
          successFeedback: ml("Richtig! Das Sprudeln kommt vom Kohlenstoffdioxid.", "Right! The bubbling comes from carbon dioxide.", "Rendben! A buborékolás a szén-dioxidból származik.", "Corect! Barbotarea provine din dioxid de carbon."),
          failFeedback: ml("Falsch! Es entsteht Kohlenstoffdioxid (CO2).", "Wrong! Carbon dioxide (CO2) is created.", "Rossz! Szén-dioxid (CO2) keletkezik.", "Greșit! Se creează dioxid de carbon (CO2).")
        },
        {
          id: "ke-7-sr-2-s4",
          title: ml("Kalkentfernung", "Limescale removal", "Vízkő eltávolítás", "Îndepărtarea calcarului"),
          prompt: ml("Du putzt verkalkte Armaturen mit Essig. Warum funktioniert das?", "You clean calcified fittings with vinegar. Why does this work?", "A meszes idomokat ecettel tisztítja. Miért működik ez?", "Curățăți armăturile calcificate cu oțet. De ce funcționează acest lucru?"),
          sceneType: "community",
          visual: { icon: "🚰", bg: "#111111", accent: "#aaaaaa" },
          choices: [
            { id: "c1", label: ml("Essig ist eine Säure und löst Kalk", "Vinegar is an acid and dissolves limescale", "Az ecet sav, és oldja a vízkövet.", "Oțetul este un acid și dizolvă calcarul") },
            { id: "c2", label: ml("Essig ist eine Base und neutralisiert Kalk", "Vinegar is a base and neutralizes limescale", "Az ecet bázis és semlegesíti a vízkövet.", "Oțetul este o bază și neutralizează calcarul") },
            { id: "c3", label: ml("Essig riecht stark", "Vinegar smells strong", "Az ecet erős szagú", "Oțetul miroase puternic") },
            { id: "c4", label: ml("Essig kühlt den Kalk ab", "Vinegar cools the limescale", "Az ecet lehűti a vízkövet.", "Oțetul răcește calcarul") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Korrekt! Säuren reagieren mit Kalk.", "Correct! Acids react with lime.", "Helyes! A savak reakcióba lépnek a mésszel.", "Corect! Acizii reacţionează cu var."),
          failFeedback: ml("Falsch! Essig ist eine Säure, die den Kalk zersetzt.", "Wrong! Vinegar is an acid that breaks down lime.", "Rossz! Az ecet egy sav, amely lebontja a meszet.", "Greșit! Oțetul este un acid care descompune calcarul.")
        }
      ]
    },
    {
      id: "ke-7-sr-3",
      title: ml("Indikatoren", "Indicators", "Jelzők", "Indicatoare"),
      instruction: ml("Bestimme den pH-Wert mit Indikatoren.", "Determine the pH value with indicators.", "Határozza meg a pH-értéket indikátorokkal.", "Determină valoarea pH-ului cu indicatori."),
      scenes: [
        {
          id: "ke-7-sr-3-s1",
          title: ml("Rotkohlsaft in Säure", "Red cabbage juice in acid", "Vörös káposztalé savban", "Sucul de varză roșie în acid"),
          prompt: ml("Du gibst Zitronensaft zu Rotkohlsaft. Welche Farbe entsteht?", "You add lemon juice to red cabbage juice. What color is created?", "A vöröskáposzta levéhez citromlevet adunk. Milyen szín jön létre?", "Adaugi sucul de lămâie în sucul de varză roșie. Ce culoare este creată?"),
          sceneType: "nature",
          visual: { icon: "🥬", bg: "#220022", accent: "#ff0055" },
          choices: [
            { id: "c1", label: ml("Rot/Pink", "Red/Pink", "Piros/Rózsaszín", "Roșu/Roz") },
            { id: "c2", label: ml("Grün", "Green", "Zöld", "Verde") },
            { id: "c3", label: ml("Blau", "Blue", "Kék", "Albastru") },
            { id: "c4", label: ml("Gelb", "Yellow", "Sárga", "Galben") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Richtig! Im sauren Bereich wird Rotkohlsaft rot.", "Correct! In the acidic range, red cabbage juice turns red.", "Helyes! A savas tartományban a vörös káposzta leve pirosra vált.", "Corect! În intervalul acid, sucul de varză roșie devine roșie."),
          failFeedback: ml("Falsch! Säuren färben den Indikator rot.", "Wrong! Acids turn the indicator red.", "Rossz! A savak vörösre színezik a jelzőt.", "Greșit! Acizii fac indicatorul în roșu.")
        },
        {
          id: "ke-7-sr-3-s2",
          title: ml("Universalindikator in Wasser", "Universal indicator in water", "Univerzális indikátor vízben", "Indicator universal în apă"),
          prompt: ml("Welche Farbe zeigt Universalindikator in reinem Wasser?", "What color does the universal indicator show in pure water?", "Milyen színt mutat az univerzális indikátor tiszta vízben?", "Ce culoare arată indicatorul universal în apă pură?"),
          sceneType: "nature",
          visual: { icon: "💧", bg: "#002200", accent: "#00ff00" },
          choices: [
            { id: "c1", label: ml("Rot", "Red", "Vörös", "Roșu") },
            { id: "c2", label: ml("Grün", "Green", "Zöld", "Verde") },
            { id: "c3", label: ml("Blau", "Blue", "Kék", "Albastru") },
            { id: "c4", label: ml("Violett", "Purple", "Lila", "Violet") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Genau! Wasser ist neutral (pH 7), also grün.", "Exactly! Water is neutral (pH 7), i.e. green.", "Pontosan! A víz semleges (pH 7), azaz zöld.", "Exact! Apa este neutră (pH 7), adică verde."),
          failFeedback: ml("Falsch! Neutral bedeutet beim Universalindikator grün.", "Wrong! Neutral means green in the universal indicator.", "Rossz! A semleges az univerzális indikátorban zöldet jelent.", "Greșit! Neutru înseamnă verde în indicatorul universal.")
        },
        {
          id: "ke-7-sr-3-s3",
          title: ml("Rotkohlsaft in Base", "Red cabbage juice in base", "Vörös káposzta lé alapban", "Suc de varză roșie în bază"),
          prompt: ml("Du gibst Seifenlösung zu Rotkohlsaft. Welche Farbe entsteht?", "You add soap solution to red cabbage juice. What color is created?", "Szappanoldatot ad a vöröskáposzta levéhez. Milyen szín jön létre?", "Adăugați soluție de săpun în sucul de varză roșie. Ce culoare este creată?"),
          sceneType: "nature",
          visual: { icon: "🧼", bg: "#001122", accent: "#00ffcc" },
          choices: [
            { id: "c1", label: ml("Rot", "Red", "Vörös", "Roșu") },
            { id: "c2", label: ml("Grün/Gelb", "Green/Yellow", "Zöld/Sárga", "Verde/Galben") },
            { id: "c3", label: ml("Farblos", "Colorless", "Színtelen", "Incolore") },
            { id: "c4", label: ml("Pink", "Pink", "Rózsaszín", "Roz") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! Im alkalischen Bereich wird er grün bis gelb.", "Right! In the alkaline range it turns green to yellow.", "Rendben! A lúgos tartományban zöldről sárgára változik.", "Corect! În intervalul alcalin, devine verde până la galben."),
          failFeedback: ml("Falsch! Basen färben den Rotkohlsaft grün/gelb.", "Wrong! Bases turn the red cabbage juice green/yellow.", "Rossz! Az alapok zöldre/sárgára varázsolják a vöröskáposzta levét.", "Greșit! Bazele transformă sucul de varză roșie în verde/galben.")
        },
        {
          id: "ke-7-sr-3-s4",
          title: ml("Lackmuspapier", "Litmus paper", "Lakmuszpapír", "Hârtie de turnesol"),
          prompt: ml("Blaues Lackmuspapier wird in eine Lösung getaucht und wird rot. Die Lösung ist...", "Blue litmus paper is dipped in a solution and turns red. The solution is...", "A kék lakmuszpapírt oldatba mártják, és pirosra vált. A megoldás...", "Hârtia de turnesol albastră este scufundată într-o soluție și devine roșie. Soluția este..."),
          sceneType: "nature",
          visual: { icon: "📜", bg: "#221111", accent: "#ff3333" },
          choices: [
            { id: "c1", label: ml("Sauer", "Acidic", "Savas", "Acid") },
            { id: "c2", label: ml("Alkalisch", "Alkaline", "Lúgos", "Alcalină") },
            { id: "c3", label: ml("Neutral", "Neutral", "Semleges", "Neutral") },
            { id: "c4", label: ml("Salzig", "Salty", "Sós", "Sărat") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Korrekt! Säuren färben Lackmus rot.", "Correct! Acids turn litmus red.", "Helyes! A savak lakmuszvörösre változnak.", "Corect! Acizii devin roșii."),
          failFeedback: ml("Falsch! Ein Farbumschlag nach Rot zeigt eine Säure an.", "Wrong! A color change to red indicates acid.", "W! Ha a szín vörösre változik, az savra utal.", "Incorect! O schimbare de culoare în roșu indică aciditate.")
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "ke-7-cb-1",
      title: ml("Wassermolekül", "Water molecule", "Vízmolekula", "Molecula de apă"),
      instruction: ml("Baue die chemische Formel für Wasser zusammen.", "Assemble the chemical formula for water.", "Állítsa össze a víz kémiai képletét.", "Asamblați formula chimică pentru apă."),
      hint: "Zwei Wasserstoffatome und ein Sauerstoffatom.",
      theme: { bg: "#001f3f", accent: "#7fdbff", card: "#003366" },
      parts: [
        { id: "p1", label: ml("H", "H", "H", "H"), emoji: "⚪" },
        { id: "p2", label: "2", emoji: "🔢" },
        { id: "p3", label: ml("O", "O", "O", "O"), emoji: "🔴" },
        { id: "p4", label: "1", emoji: "🔢" }
      ],
      slots: [
        { id: "s1", label: ml("Element 1", "Element 1", "1. elem", "Elementul 1") },
        { id: "s2", label: ml("Anzahl", "Number", "Szám", "Număr") },
        { id: "s3", label: ml("Element 2", "Item 2", "2. tétel", "Articolul 2") },
        { id: "s4", label: ml("Leer", "Blank", "Üres", "Alb") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-7-cb-2",
      title: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"),
      instruction: ml("Baue die chemische Formel für Kohlenstoffdioxid.", "Build the chemical formula for carbon dioxide.", "Készítsd fel a szén-dioxid kémiai képletét.", "Construiți formula chimică pentru dioxidul de carbon."),
      hint: "Ein Kohlenstoffatom und zwei Sauerstoffatome.",
      theme: { bg: "#111111", accent: "#ff851b", card: "#333333" },
      parts: [
        { id: "p1", label: ml("C", "C", "C", "C"), emoji: "⚫" },
        { id: "p2", label: ml("O", "O", "O", "O"), emoji: "🔴" },
        { id: "p3", label: "2", emoji: "🔢" },
        { id: "p4", label: "3", emoji: "🔢" }
      ],
      slots: [
        { id: "s1", label: ml("Element 1", "Element 1", "1. elem", "Elementul 1") },
        { id: "s2", label: ml("Element 2", "Item 2", "2. tétel", "Articolul 2") },
        { id: "s3", label: ml("Anzahl", "Number", "Szám", "Număr") },
        { id: "s4", label: ml("Falsch", "Wrong", "Rossz", "Greșit") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-7-cb-3",
      title: ml("Reaktionsgleichung", "Reaction equation", "Reakcióegyenlet", "Ecuația reacției"),
      instruction: ml("Vervollständige die Wortgleichung für die Verbrennung von Eisen.", "Complete the word equation for the combustion of iron.", "Egészítse ki a vas égésének szóegyenletét.", "Completați ecuația cuvântului pentru arderea fierului."),
      hint: "Eisen reagiert mit Sauerstoff zu...",
      theme: { bg: "#2b1a1a", accent: "#ff4136", card: "#4a2a2a" },
      parts: [
        { id: "p1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "p2", label: "+", emoji: "➕" },
        { id: "p3", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🌬️" },
        { id: "p4", label: ml("Eisenoxid", "Iron oxide", "Vas-oxid", "Oxid de fier"), emoji: "🪨" }
      ],
      slots: [
        { id: "s1", label: ml("Edukt 1", "Educt 1", "Educt 1", "Educt 1") },
        { id: "s2", label: ml("Plus", "Plus", "Plusz", "Plus") },
        { id: "s3", label: ml("Edukt 2", "Educt 2", "Educt 2", "Educt 2") },
        { id: "s4", label: ml("Produkt", "Product", "Termék", "Produs") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
      {
      id: "ke-7-cb-4",
      title: ml("Wassermolekül (Pro)", "Water molecule (Pro)", "Vízmolekula (Pro)", "Moleculă de apă (Pro)"),
      instruction: ml("Baue die chemische Formel für Wasser zusammen.", "Assemble the chemical formula for water.", "Állítsa össze a víz kémiai képletét.", "Asamblați formula chimică pentru apă."),
      hint: "Zwei Wasserstoffatome und ein Sauerstoffatom.",
      theme: { bg: "#001f3f", accent: "#7fdbff", card: "#003366" },
      parts: [
        { id: "p1", label: ml("H", "H", "H", "H"), emoji: "⚪" },
        { id: "p2", label: "2", emoji: "🔢" },
        { id: "p3", label: ml("O", "O", "O", "O"), emoji: "🔴" },
        { id: "p4", label: "1", emoji: "🔢" }
      ],
      slots: [
        { id: "s1", label: ml("Element 1", "Element 1", "1. elem", "Elementul 1") },
        { id: "s2", label: ml("Anzahl", "Number", "Szám", "Număr") },
        { id: "s3", label: ml("Element 2", "Item 2", "2. tétel", "Articolul 2") },
        { id: "s4", label: ml("Leer", "Blank", "Üres", "Alb") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
      {
      id: "ke-7-cb-5",
      title: ml("Kohlenstoffdioxid (Pro)", "Carbon dioxide (Pro)", "Szén-dioxid (Pro)", "Dioxid de carbon (Pro)"),
      instruction: ml("Baue die chemische Formel für Kohlenstoffdioxid.", "Build the chemical formula for carbon dioxide.", "Készítsd fel a szén-dioxid kémiai képletét.", "Construiți formula chimică pentru dioxidul de carbon."),
      hint: "Ein Kohlenstoffatom und zwei Sauerstoffatome.",
      theme: { bg: "#111111", accent: "#ff851b", card: "#333333" },
      parts: [
        { id: "p1", label: ml("C", "C", "C", "C"), emoji: "⚫" },
        { id: "p2", label: ml("O", "O", "O", "O"), emoji: "🔴" },
        { id: "p3", label: "2", emoji: "🔢" },
        { id: "p4", label: "3", emoji: "🔢" }
      ],
      slots: [
        { id: "s1", label: ml("Element 1", "Element 1", "1. elem", "Elementul 1") },
        { id: "s2", label: ml("Element 2", "Item 2", "2. tétel", "Articolul 2") },
        { id: "s3", label: ml("Anzahl", "Number", "Szám", "Număr") },
        { id: "s4", label: ml("Falsch", "Wrong", "Rossz", "Greșit") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    }
  ],
  memoryRadar: [
    {
      id: "ke-7-mr-1",
      title: ml("Säuren finden", "Find acids", "Savak keresése", "Găsiți acizi"),
      instruction: ml("Merke dir die Säuren und wähle sie aus.", "Note the acids and choose them off.", "Jegyezze fel a savakat, és válassza ki őket.", "Notați acizii și selectați-i."),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#1a0000", accent: "#ff4136", radar: "#330000" },
      targetItems: [
        { id: "t1", label: ml("Salzsäure", "Hydrochloric acid", "Sósav", "Acid clorhidric"), emoji: "🧪" },
        { id: "t2", label: ml("Zitronensäure", "Citric acid", "Citromsav", "Acid citric"), emoji: "🍋" },
        { id: "t3", label: ml("Essigsäure", "Acetic acid", "Ecetsav", "Acid acetic"), emoji: "🏺" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴" },
        { id: "d2", label: ml("Kalkwasser", "Limewater", "Mészvíz", "Apa de calcar"), emoji: "🥛" },
        { id: "d3", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
        { id: "d4", label: ml("Kochsalz", "Salt", "asztali só", "Eliberare de sare</t28>"), emoji: "🧂" },
        { id: "d5", label: ml("Zucker", "Sugar", "Cukor", "Zahăr"), emoji: "🍬" }
      ]
    },
    {
      id: "ke-7-mr-2",
      title: ml("Oxide merken", "Note oxides", "Megjegyzés az oxidokra", "Rețineți oxizi"),
      instruction: ml("Finde alle Oxide auf dem Radar.", "Find all the oxides on the radar.", "Keresse meg az összes oxidot a radaron.", "Găsiți toți oxizii pe radar."),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#001a1a", accent: "#39cccc", radar: "#003333" },
      targetItems: [
        { id: "t1", label: ml("Kupferoxid", "Copper oxide", "Réz-oxid", "Oxid de cupru"), emoji: "🪨" },
        { id: "t2", label: ml("Magnesiumoxid", "Magnesium oxide", "Magnézium-oxid", "Oxid de magneziu"), emoji: "✨" },
        { id: "t3", label: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "💨" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙" },
        { id: "d2", label: ml("Magnesium", "Magnesium", "Magnézium", "Magneziu"), emoji: "🔥" },
        { id: "d3", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫" },
        { id: "d4", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🌬️" },
        { id: "d5", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen"), emoji: "🎈" }
      ]
    },
    {
      id: "ke-7-mr-3",
      title: ml("Alkalische Lösungen", "Alkaline solutions", "Lúgos oldatok", "Soluții alcaline"),
      instruction: ml("Identifiziere die alkalischen Lösungen (Basen).", "Identify the alkaline solutions (bases).", "Azonosítsa a lúgos oldatokat (bázisokat).", "Identificați soluțiile (bazele) alcaline."),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#00001a", accent: "#0074d9", radar: "#000033" },
      targetItems: [
        { id: "t1", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴" },
        { id: "t2", label: ml("Seifenlösung", "Soap solution", "Szappanoldat", "Soluție de săpun"), emoji: "🧼" },
        { id: "t3", label: ml("Kalkwasser", "Limewater", "Mészvíz", "Apa de calcar"), emoji: "🥛" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Essig", "Vinegar", "Ecet", "Oțet"), emoji: "🏺" },
        { id: "d2", label: ml("Zitronensaft", "Lemon juice", "Citromlé", "Suc de lămâie"), emoji: "🍋" },
        { id: "d3", label: ml("Apfelsaft", "Apple juice", "Almalé", "Suc de mere"), emoji: "🧃" },
        { id: "d4", label: ml("Mineralwasser", "Mineral water", "Ásványvíz", "Apă minerală"), emoji: "🫧" },
        { id: "d5", label: ml("Kochsalzlösung", "Saline solution", "Sóoldat", "Soluție salină"), emoji: "🧂" }
      ]
    },
      {
      id: "ke-7-mr-4",
      title: ml("Säuren finden (Pro)", "Find acids (Pro)", "Keresd meg a savakat (Pro)", "Găsește acizi (Pro)"),
      instruction: ml("Merke dir die Säuren und wähle sie aus.", "Note the acids and choose them off.", "Jegyezze fel a savakat, és válassza ki őket.", "Notați acizii și selectați-i."),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#1a0000", accent: "#ff4136", radar: "#330000" },
      targetItems: [
        { id: "t1", label: ml("Salzsäure", "Hydrochloric acid", "Sósav", "Acid clorhidric"), emoji: "🧪" },
        { id: "t2", label: ml("Zitronensäure", "Citric acid", "Citromsav", "Acid citric"), emoji: "🍋" },
        { id: "t3", label: ml("Essigsäure", "Acetic acid", "Ecetsav", "Acid acetic"), emoji: "🏺" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Natronlauge", "Caustic soda", "Marónátron", "Sodă caustică"), emoji: "🧴" },
        { id: "d2", label: ml("Kalkwasser", "Limewater", "Mészvíz", "Apa de calcar"), emoji: "🥛" },
        { id: "d3", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
        { id: "d4", label: ml("Kochsalz", "Salt", "asztali só", "Eliberare de sare</t28>"), emoji: "🧂" },
        { id: "d5", label: ml("Zucker", "Sugar", "Cukor", "Zahăr"), emoji: "🍬" }
      ]
    },
      {
      id: "ke-7-mr-5",
      title: ml("Oxide merken (Pro)", "Note oxides (Pro)", "Megjegyzés: oxidok (Pro)", "Notă oxizi (Pro)"),
      instruction: ml("Finde alle Oxide auf dem Radar.", "Find all the oxides on the radar.", "Keresse meg az összes oxidot a radaron.", "Găsiți toți oxizii pe radar."),
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#001a1a", accent: "#39cccc", radar: "#003333" },
      targetItems: [
        { id: "t1", label: ml("Kupferoxid", "Copper oxide", "Réz-oxid", "Oxid de cupru"), emoji: "🪨" },
        { id: "t2", label: ml("Magnesiumoxid", "Magnesium oxide", "Magnézium-oxid", "Oxid de magneziu"), emoji: "✨" },
        { id: "t3", label: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon"), emoji: "💨" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙" },
        { id: "d2", label: ml("Magnesium", "Magnesium", "Magnézium", "Magneziu"), emoji: "🔥" },
        { id: "d3", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫" },
        { id: "d4", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "🌬️" },
        { id: "d5", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen"), emoji: "🎈" }
      ]
    }
  ]
  },
  8: {
  grade: 8,
  meteorCatch: [
    {
      id: "ke-8-mc-1",
      title: ml("Alkalimetalle fangen", "Catch alkali metals", "Elkapják az alkálifémeket", "Captează metalele alcaline"),
      prompt: ml("Fange nur die Alkalimetalle!", "Only catch the alkali metals!", "Csak az alkálifémeket fogja meg!", "Prinți doar metalele alcaline!"),
      goal: 10,
      speed: 1.5,
      theme: { sky: "#1a1a2e", glow: "#e94560", accent: "#0f3460" },
      correctItems: [
        { id: "ke-8-mc-1-c1", label: ml("Lithium", "Lithium", "Lítium", "Litiu"), emoji: "🔴" },
        { id: "ke-8-mc-1-c2", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🟡" },
        { id: "ke-8-mc-1-c3", label: ml("Kalium", "Potassium", "Kálium", "Potasiu"), emoji: "🟣" }
      ],
      wrongItems: [
        { id: "ke-8-mc-1-w1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-8-mc-1-w2", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "ke-8-mc-1-w3", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" }
      ]
    },
    {
      id: "ke-8-mc-2",
      title: ml("Halogene sammeln", "Halogens collect", "A halogének összegyűlnek", "Halogenii se adună"),
      prompt: ml("Sammle die Halogene ein!", "Collect the halogens!", "Gyűjtsd össze a halogéneket!", "Colectează halogenii!"),
      goal: 12,
      speed: 1.8,
      theme: { sky: "#0f0f1b", glow: "#4ecca3", accent: "#232931" },
      correctItems: [
        { id: "ke-8-mc-2-c1", label: ml("Fluor", "Fluorine", "Fluor", "Fluor"), emoji: "🟢" },
        { id: "ke-8-mc-2-c2", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🧪" },
        { id: "ke-8-mc-2-c3", label: ml("Brom", "Bromine", "Bróm", "Brom"), emoji: "🟤" }
      ],
      wrongItems: [
        { id: "ke-8-mc-2-w1", label: ml("Neon", "Neon", "Neon", "Neon"), emoji: "💡" },
        { id: "ke-8-mc-2-w2", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙" },
        { id: "ke-8-mc-2-w3", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫" }
      ]
    },
    {
      id: "ke-8-mc-3",
      title: ml("Edelgase isolieren", "Isolate noble gases", "Izolálja el a nemesgázokat", "Izolați gazele nobile"),
      prompt: ml("Fange die reaktionsträgen Edelgase!", "Catch the inert noble gases!", "Fogja fel az inert nemesgázokat!", "Prinți gazele nobile inerte!"),
      goal: 15,
      speed: 2.0,
      theme: { sky: "#121212", glow: "#bb86fc", accent: "#3700b3" },
      correctItems: [
        { id: "ke-8-mc-3-c1", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
        { id: "ke-8-mc-3-c2", label: ml("Neon", "Neon", "Neon", "Neon"), emoji: "💡" },
        { id: "ke-8-mc-3-c3", label: ml("Argon", "Argon", "Argon</t5>Carbont3", "argon"), emoji: "🔵" }
      ],
      wrongItems: [
        { id: "ke-8-mc-3-w1", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen"), emoji: "💥" },
        { id: "ke-8-mc-3-w2", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot"), emoji: "❄️" },
        { id: "ke-8-mc-3-w3", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🟡" }
      ]
    },
      {
      id: "ke-8-mc-4",
      title: ml("Alkalimetalle fangen (Pro)", "Catch alkali metals (Pro)", "Fogd le az alkálifémeket (Pro)", "Prinți metale alcaline (Pro)"),
      prompt: ml("Fange nur die Alkalimetalle!", "Only catch the alkali metals!", "Csak az alkálifémeket fogja meg!", "Prinți doar metalele alcaline!"),
      goal: 10,
      speed: 1.5,
      theme: { sky: "#1a1a2e", glow: "#e94560", accent: "#0f3460" },
      correctItems: [
        { id: "ke-8-mc-1-c1", label: ml("Lithium", "Lithium", "Lítium", "Litiu"), emoji: "🔴" },
        { id: "ke-8-mc-1-c2", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🟡" },
        { id: "ke-8-mc-1-c3", label: ml("Kalium", "Potassium", "Kálium", "Potasiu"), emoji: "🟣" }
      ],
      wrongItems: [
        { id: "ke-8-mc-1-w1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "ke-8-mc-1-w2", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "ke-8-mc-1-w3", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" }
      ]
    },
      {
      id: "ke-8-mc-5",
      title: ml("Halogene sammeln (Pro)", "Collect halogens (Pro)", "Halogének gyűjtése (Pro)", "Colectați halogeni (Pro)"),
      prompt: ml("Sammle die Halogene ein!", "Collect the halogens!", "Gyűjtsd össze a halogéneket!", "Colectează halogenii!"),
      goal: 12,
      speed: 1.8,
      theme: { sky: "#0f0f1b", glow: "#4ecca3", accent: "#232931" },
      correctItems: [
        { id: "ke-8-mc-2-c1", label: ml("Fluor", "Fluorine", "Fluor", "Fluor"), emoji: "🟢" },
        { id: "ke-8-mc-2-c2", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🧪" },
        { id: "ke-8-mc-2-c3", label: ml("Brom", "Bromine", "Bróm", "Brom"), emoji: "🟤" }
      ],
      wrongItems: [
        { id: "ke-8-mc-2-w1", label: ml("Neon", "Neon", "Neon", "Neon"), emoji: "💡" },
        { id: "ke-8-mc-2-w2", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙" },
        { id: "ke-8-mc-2-w3", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "ke-8-os-1",
      title: ml("Metalle vs. Nichtmetalle", "Metals vs. non-metals", "Fémek vs. nemfémek", "Metale versus nemetale"),
      instruction: ml("Sortiere die Elemente in Metalle und Nichtmetalle.", "Sort the elements into metals and non-metals.", "Válogasd az elemeket fémekre és nemfémekre.", "Sortați elementele în metale și nemetale."),
      theme: { bg: "#1c1c1c", orbit: "#333333", accent: "#ff9800" },
      buckets: [
        { id: "b-metal", label: ml("Metalle", "Metals", "Fémek", "Metale"), color: "#ff5722" },
        { id: "b-nonmetal", label: ml("Nichtmetalle", "Non-metals", "Nem fémek", "Nemetale"), color: "#03a9f4" }
      ],
      items: [
        { id: "ke-8-os-1-i1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "b-metal" },
        { id: "ke-8-os-1-i2", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨", bucketId: "b-nonmetal" },
        { id: "ke-8-os-1-i3", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙", bucketId: "b-metal" },
        { id: "ke-8-os-1-i4", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫", bucketId: "b-nonmetal" }
      ]
    },
    {
      id: "ke-8-os-2",
      title: ml("Kationen und Anionen", "Cations and anions", "Kationok és anionok", "Cationii și anioni"),
      instruction: ml("Ordne die Ionen nach ihrer Ladung.", "Order the ions according to their charge.", "Rendezze az ionokat töltésük szerint.", "Ordonează ionii în funcție de sarcina lor."),
      theme: { bg: "#0d1117", orbit: "#161b22", accent: "#58a6ff" },
      buckets: [
        { id: "b-cation", label: ml("Kationen (+)", "Cations (+)", "Kationok (+)", "Cationi (+)"), color: "#f85149" },
        { id: "b-anion", label: ml("Anionen (-)", "Anions (-)", "Anionok (-)", "Anionii (-)"), color: "#3fb950" }
      ],
      items: [
        { id: "ke-8-os-2-i1", label: ml("Na+", "Na+", "Na+", "Na+"), emoji: "➕", bucketId: "b-cation" },
        { id: "ke-8-os-2-i2", label: ml("Cl-", "Cl-", "Cl-", "Cl-"), emoji: "➖", bucketId: "b-anion" },
        { id: "ke-8-os-2-i3", label: ml("Mg2+", "Mg2+", "Mg2+", "Mg2+"), emoji: "➕", bucketId: "b-cation" },
        { id: "ke-8-os-2-i4", label: ml("O2-", "O2-", "O2", "O2"), emoji: "➖", bucketId: "b-anion" }
      ]
    },
    {
      id: "ke-8-os-3",
      title: ml("Oxidation oder Reduktion", "Oxidation or reduction", "Oxidáció vagy redukció", "Oxidare sau reducere"),
      instruction: ml("Sortiere die Prozesse nach Elektronenabgabe oder -aufnahme.", "Sort the processes according to electron release or acceptance.", "Válogassa szét a folyamatokat elektronfelszabadulás vagy -elfogadás szerint.", "Sortați procesele în funcție de eliberarea sau acceptarea electronilor."),
      theme: { bg: "#1a1a2e", orbit: "#16213e", accent: "#e94560" },
      buckets: [
        { id: "b-ox", label: ml("Oxidation", "Oxidation", "Oxidáció", "Oxidare"), color: "#ff4b4b" },
        { id: "b-red", label: ml("Reduktion", "Reduction", "Csökkentés", "Reducere"), color: "#4b4bff" }
      ],
      items: [
        { id: "ke-8-os-3-i1", label: ml("Elektronenabgabe", "Electron release", "Elektronkibocsátás", "Eliberarea de electroni"), emoji: "📤", bucketId: "b-ox" },
        { id: "ke-8-os-3-i2", label: ml("Elektronenaufnahme", "Electron pickup", "Elektronfelszedő", "Captarea electronilor"), emoji: "📥", bucketId: "b-red" },
        { id: "ke-8-os-3-i3", label: ml("Fe wird zu Fe2+", "Fe becomes Fe2+", "Fe Fe2+ lesz", "Fe devine Fe2+"), emoji: "⬆️", bucketId: "b-ox" },
        { id: "ke-8-os-3-i4", label: ml("Cu2+ wird zu Cu", "Cu2+ becomes Cu", "A Cu2+ Cu lesz.", "Cu2+ devine Cu"), emoji: "⬇️", bucketId: "b-red" }
      ]
    },
      {
      id: "ke-8-os-4",
      title: ml("Metalle vs. Nichtmetalle (Pro)", "Metals vs. non-metals (Pro)", "Fémek vs. nemfémek (Pro)", "Metale față de nemetale (Pro)"),
      instruction: ml("Sortiere die Elemente in Metalle und Nichtmetalle.", "Sort the elements into metals and non-metals.", "Válogasd az elemeket fémekre és nemfémekre.", "Sortați elementele în metale și nemetale."),
      theme: { bg: "#1c1c1c", orbit: "#333333", accent: "#ff9800" },
      buckets: [
        { id: "b-metal", label: ml("Metalle", "Metals", "Fémek", "Metale"), color: "#ff5722" },
        { id: "b-nonmetal", label: ml("Nichtmetalle", "Non-metals", "Nem fémek", "Nemetale"), color: "#03a9f4" }
      ],
      items: [
        { id: "ke-8-os-1-i1", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩", bucketId: "b-metal" },
        { id: "ke-8-os-1-i2", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨", bucketId: "b-nonmetal" },
        { id: "ke-8-os-1-i3", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙", bucketId: "b-metal" },
        { id: "ke-8-os-1-i4", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫", bucketId: "b-nonmetal" }
      ]
    },
      {
      id: "ke-8-os-5",
      title: ml("Kationen und Anionen (Pro)", "Cations and anions (Pro)", "Kationok és anionok (Pro)", "Cationii și anionii (Pro)"),
      instruction: ml("Ordne die Ionen nach ihrer Ladung.", "Order the ions according to their charge.", "Rendezze az ionokat töltésük szerint.", "Ordonează ionii în funcție de sarcina lor."),
      theme: { bg: "#0d1117", orbit: "#161b22", accent: "#58a6ff" },
      buckets: [
        { id: "b-cation", label: ml("Kationen (+)", "Cations (+)", "Kationok (+)", "Cationi (+)"), color: "#f85149" },
        { id: "b-anion", label: ml("Anionen (-)", "Anions (-)", "Anionok (-)", "Anionii (-)"), color: "#3fb950" }
      ],
      items: [
        { id: "ke-8-os-2-i1", label: ml("Na+", "Na+", "Na+", "Na+"), emoji: "➕", bucketId: "b-cation" },
        { id: "ke-8-os-2-i2", label: ml("Cl-", "Cl-", "Cl-", "Cl-"), emoji: "➖", bucketId: "b-anion" },
        { id: "ke-8-os-2-i3", label: ml("Mg2+", "Mg2+", "Mg2+", "Mg2+"), emoji: "➕", bucketId: "b-cation" },
        { id: "ke-8-os-2-i4", label: ml("O2-", "O2-", "O2", "O2"), emoji: "➖", bucketId: "b-anion" }
      ]
    }
  ],
  signalRunner: [
    {
      id: "ke-8-sr-1",
      title: ml("Labor-Sicherheit", "Laboratory safety", "Laboratóriumi biztonság", "Siguranța în laborator"),
      instruction: ml("Triff die richtigen Entscheidungen im Chemielabor.", "Make the right decisions in the chemistry laboratory.", "Hozza meg a megfelelő döntéseket a kémiai laborban.", "Luați deciziile corecte în laboratorul de chimie."),
      scenes: [
        {
          id: "ke-8-sr-1-s1",
          title: ml("Schutzkleidung", "Protective clothing", "Védőruházat", "Haine de protecție"),
          prompt: ml("Du betrittst das Labor. Was ziehst du zuerst an?", "You enter the laboratory. What do you put on first?", "Belép a laboratóriumba. Mit vesz fel először?", "Intri în laborator. Cu ce ​​te pui mai întâi?"),
          sceneType: "safety",
          visual: { icon: "🥽", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: ml("Nur Handschuhe", "Gloves only", "Csak kesztyűben", "Numai mănuși") },
            { id: "c2", label: ml("Schutzbrille und Kittel", "Goggles and gown", "Szemüveg és köpeny", "Ochelari de protecție și halat") },
            { id: "c3", label: ml("Sonnenbrille", "Sunglasses", "Napszemüveg", "Ochelari de soare") },
            { id: "c4", label: ml("Nichts", "Nothing", "Semmi", "Nimic") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! Schutzbrille und Kittel sind Pflicht.", "Correct! Safety glasses and a coat are mandatory.", "Helyes! Védőszemüveg és kabát viselése kötelező.", "Corect! Ochelarii de protecție și haina sunt obligatorii."),
          failFeedback: ml("Falsch. Ohne Schutzbrille und Kittel darfst du nicht experimentieren.", "Incorrect. You are not allowed to experiment without safety glasses and a coat.", "Hibás. Védőszemüveg és kabát nélkül nem szabad kísérletezni.", "Incorect. Nu aveți voie să experimentați fără ochelari de protecție și o haină.")
        },
        {
          id: "ke-8-sr-1-s2",
          title: ml("Chemikalien riechen", "Smell chemicals", "Vegyszerek szaglása", "Miros de substanțe chimice"),
          prompt: ml("Wie prüfst du den Geruch einer unbekannten Flüssigkeit?", "How do you check the smell of an unknown liquid?", "Hogyan ellenőrizheti egy ismeretlen folyadék szagát?", "Cum verifici mirosul unui lichid necunoscut?"),
          sceneType: "safety",
          visual: { icon: "👃", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: ml("Nase direkt über das Gefäß halten", "Hold your nose directly over the vessel", "Tartsa az orrát közvetlenül az edény fölé.", "Țineți-vă nasul direct deasupra vasului") },
            { id: "c2", label: ml("Dämpfe mit der Hand zufächeln", "Fan the vapors with your hand", "Kézzel fújja át a gőzöket.", "Ventilizați vaporii cu mâna") },
            { id: "c3", label: ml("Tief einatmen", "Take a deep breath", "Vegyél egy mély lélegzetet", "Respiră adânc") },
            { id: "c4", label: ml("Einen Tropfen probieren", "Try a drop", "Próbálj ki egy cseppet", "Încercați o picătură") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Sehr gut! Zufächeln ist die sichere Methode.", "Very good! Fanning is the safest method.", "Nagyon jó! A legbiztonságosabb módszer a szellőztetés.", "Foarte bine! Ventilarea este cea mai sigură metodă."),
          failFeedback: ml("Gefährlich! Niemals direkt an Chemikalien riechen.", "Dangerous! Never smell chemicals directly.", "Veszélyes! Soha ne szagoljon közvetlenül vegyszereket.", "Periculoasă! Nu mirosiți niciodată direct substanțe chimice.")
        },
        {
          id: "ke-8-sr-1-s3",
          title: ml("Säuren verdünnen", "Dilute acids", "Hígítsd fel a savakat7 a szűrésben7", "Diluați acizii de filtrare</t5> <t6>diluați în acizii de filtrare</t>I 7"),
          prompt: ml("Du musst konzentrierte Schwefelsäure verdünnen. Wie gehst du vor?", "You need to dilute concentrated sulfuric acid. How do you proceed?", "A tömény kénsavat hígítania kell. Hogyan tovább?", "Trebuie să diluați acidul sulfuric concentrat. Cum procedați?"),
          sceneType: "safety",
          visual: { icon: "💧", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: ml("Wasser in die Säure gießen", "Pour water into the acid", "Töltsön vizet a savba", "Toarnă apă în acid") },
            { id: "c2", label: ml("Säure in das Wasser gießen", "Pour acid into the water", "Töltsön savat a vízbe", "Toarnă acid în apă") },
            { id: "c3", label: ml("Beides gleichzeitig mischen", "Mix both at the same time", "Keverjük össze mindkettőt egyszerre", "Amestecă ambele în acelaşi timp") },
            { id: "c4", label: ml("Säure erhitzen", "Heat acid", "Hősav", "Acid termic") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Korrekt! Erst das Wasser, dann die Säure.", "Correct! First the water, then the acid.", "Helyes! Először a víz, majd a sav.", "Corect! Mai întâi apa, apoi acidul."),
          failFeedback: ml("Falsch! Gießt du Wasser in Säure, kann es spritzen.", "Wrong! If you pour water into acid, it can splash.", "Rossz! Ha vizet önt a savba, az kifröccsenhet.", "Greșit! Dacă turnați apă în acid, acesta poate stropi.")
        },
        {
          id: "ke-8-sr-1-s4",
          title: ml("Glasbruch", "Breaking glass", "Üvegtörés", "Spărgerea sticlei"),
          prompt: ml("Ein Reagenzglas zerbricht. Was tust du?", "A test tube breaks. What are you doing?", "Egy kémcső eltörik. Mit csinálsz?", "O eprubetă se rupe. Ce faci?"),
          sceneType: "safety",
          visual: { icon: "💥", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: ml("Mit bloßen Händen aufsammeln", "Collect with bare hands", "Csupasz kézzel gyűjtsük össze", "Colectați cu mâinile goale") },
            { id: "c2", label: ml("Liegen lassen", "Leave it lying down", "Hadd feküdjön le", "Lasă-l să se întindă") },
            { id: "c3", label: ml("Lehrkraft rufen und Besen holen", "Call the teacher and get a broom", "Hívja fel a tanárt, és szerezzen seprűt.", "Cheamă profesorul și ia o mătură") },
            { id: "c4", label: ml("In den normalen Müll werfen", "Throw in the normal trash", "Dobd a normál szemétbe", "Aruncă la gunoiul obișnuit") }
          ],
          correctChoiceId: "c3",
          successFeedback: ml("Richtig! Immer die Lehrkraft informieren.", "Correct! Always inform the teacher.", "Helyes! Mindig tájékoztassa a tanárt.", "Corect! Informați întotdeauna profesorul."),
          failFeedback: ml("Falsch. Verletzungsgefahr und falsche Entsorgung!", "Incorrect. Risk of injury and incorrect disposal!", "Nem megfelelő. Sérülés és helytelen ártalmatlanítás veszélye!", "Incorect. Risc de rănire și eliminare incorectă!")
        }
      ]
    },
    {
      id: "ke-8-sr-2",
      title: ml("Redoxreaktionen im Alltag", "Redox reactions in everyday life", "Redoxreakciók a mindennapi életben", "Reacții redox în viața de zi cu zi"),
      instruction: ml("Erkenne Redoxreaktionen in deiner Umgebung.", "Identify redox reactions in your environment.", "Azonosítsa a redox reakciókat a környezetében.", "Identificați reacțiile redox din mediul dvs."),
      scenes: [
        {
          id: "ke-8-sr-2-s1",
          title: ml("Rostendes Fahrrad", "Rusting bicycle", "Rozsdás kerékpár", "Bicicletă ruginită"),
          prompt: ml("Dein Fahrrad rostet im Regen. Was passiert chemisch?", "Your bike is rusting in the rain. What happens chemically?", "A kerékpárod berozsdásodik az esőben. Mi történik kémiailag?", "Bicicleta ta ruginește în ploaie. Ce se întâmplă chimic?"),
          sceneType: "nature",
          visual: { icon: "🚲", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: ml("Eisen wird reduziert", "Iron is reduced", "A vas lecsökken <</t61>maga ég", "Fierul este redus") },
            { id: "c2", label: ml("Eisen wird oxidiert", "Iron is oxidized", "A vas oxidálódik", "Fierul este oxidat") },
            { id: "c3", label: ml("Eisen verdampft", "Iron evaporates", "A vas elpárolog", "Fierul se evaporă") },
            { id: "c4", label: ml("Eisen schmilzt", "Iron melts", "A vas megolvad", "Fierul se topește") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! Eisen reagiert mit Sauerstoff (Oxidation).", "Correct! Iron reacts with oxygen (oxidation).", "Helyes! A vas reakcióba lép az oxigénnel (oxidáció).", "Corect! Fierul reacţionează cu oxigenul (oxidare)."),
          failFeedback: ml("Falsch. Rosten ist eine Oxidation von Eisen.", "Incorrect. Rusting is an oxidation of iron.", "Nem megfelelő. A rozsdásodás a vas oxidációja.", "Incorect. Ruginirea este o oxidare a fierului.")
        },
        {
          id: "ke-8-sr-2-s2",
          title: ml("Lagerfeuer", "Campfire", "Tábortűz", "Foc de tabără"),
          prompt: ml("Holz verbrennt im Lagerfeuer. Welche Rolle spielt Sauerstoff?", "Wood burns in a campfire. What role does oxygen play?", "A fa megég egy tábortűzben. Milyen szerepet játszik az oxigén?", "Lemnul arde într-un foc de tabără. Ce rol joacă oxigenul?"),
          sceneType: "nature",
          visual: { icon: "🔥", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: ml("Er ist das Oxidationsmittel", "It is the oxidizing agent", "Ez az oxidálószer", "Este agentul de oxidare") },
            { id: "c2", label: ml("Er ist das Reduktionsmittel", "It is the reducing agent", "Ez a redukálószer", "Este agentul reducător") },
            { id: "c3", label: ml("Er kühlt das Feuer", "It cools the fire", "Lehűti a tüzet", "Răcește focul") },
            { id: "c4", label: ml("Er brennt selbst", "It burns itself", "Megégeti magát", "Se arde singur") }
          ],
          correctChoiceId: "c1",
          successFeedback: ml("Korrekt! Sauerstoff nimmt Elektronen auf.", "Correct! Oxygen absorbs electrons.", "Helyes! Az oxigén elnyeli az elektronokat.", "Corect! Oxigenul absoarbe electronii."),
          failFeedback: ml("Falsch. Sauerstoff oxidiert den Kohlenstoff im Holz.", "Incorrect. Oxygen oxidizes the carbon in the wood.", "Hibás. Az oxigén oxidálja a fában lévő szenet.", "Incorect. Oxigenul oxidează carbonul din lemn.")
        },
        {
          id: "ke-8-sr-2-s3",
          title: ml("Apfel wird braun", "Apple turns brown", "Az alma megbarnul", "Mărul devine maro"),
          prompt: ml("Ein angeschnittener Apfel wird braun. Warum?", "A cut apple turns brown. Why?", "A felvágott alma megbarnul. Miért?", "Un măr tăiat devine maro. De ce?"),
          sceneType: "nature",
          visual: { icon: "🍎", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: ml("Er trocknet aus", "It dries up", "Kiszárad", "Se usucă") },
            { id: "c2", label: ml("Reaktion mit Stickstoff", "Reaction with nitrogen", "Reakció nitrogénnel", "Reacția cu azotul") },
            { id: "c3", label: ml("Oxidation durch Luftsauerstoff", "Oxidation by atmospheric oxygen", "Oxidáció légköri oxigén hatására", "Oxidarea prin oxigenul atmosferic") },
            { id: "c4", label: ml("Er gefriert", "It freezes", "Lefagy", "Îngheață") }
          ],
          correctChoiceId: "c3",
          successFeedback: ml("Genau! Enzyme katalysieren die Oxidation.", "Exactly! Enzymes catalyze the oxidation.", "Pontosan! Az enzimek katalizálják az oxidációt.", "Exact! Enzimele catalizează oxidarea."),
          failFeedback: ml("Falsch. Es ist eine Oxidationsreaktion.", "Incorrect. It is an oxidation reaction.", "Hibás. Ez egy oxidációs reakció.", "Incorect. Este o reacție de oxidare.")
        },
        {
          id: "ke-8-sr-2-s4",
          title: ml("Batterie entlädt sich", "Battery discharges", "Az akkumulátor lemerülése", "Bateria se descarcă"),
          prompt: ml("Was liefert den Strom in einer Batterie?", "What supplies the electricity in a battery?", "Mi szolgáltatja az áramot az akkumulátorban?", "Ce furnizează energie electrică dintr-o baterie?"),
          sceneType: "traffic",
          visual: { icon: "🔋", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: ml("Kleine Motoren", "Small engines", "Kis motorok", "Motoarele mici") },
            { id: "c2", label: ml("Eine Redoxreaktion", "A redox reaction", "Redoxreakció", "O reacție redox") },
            { id: "c3", label: ml("Reibung", "Friction", "Súrlódás", "Fricțiune") },
            { id: "c4", label: ml("Wärme", "Heat", "Hő", "Căldură") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! Elektronen fließen durch die Redoxreaktion.", "Correct! Electrons flow through the redox reaction.", "Helyes! Az elektronok átfolynak a redox reakción.", "Corect! Electronii curg prin reacția redox."),
          failFeedback: ml("Falsch. Batterien nutzen chemische Redoxreaktionen.", "Wrong. Batteries use chemical redox reactions.", "Rossz. Az akkumulátorok kémiai redox reakciókat használnak.", "Greșit. Bateriile folosesc reacții redox chimice.")
        }
      ]
    },
    {
      id: "ke-8-sr-3",
      title: ml("Kohlenstoffkreislauf", "Carbon cycle", "Szénciklus", "Ciclul carbonului"),
      instruction: ml("Verfolge den Weg des Kohlenstoffs.", "Follow the path of the carbon.", "Kövesd a szén útját.", "Urmați calea carbonului."),
      scenes: [
        {
          id: "ke-8-sr-3-s1",
          title: ml("Fotosynthese", "Photosynthesis", "Fotószintézis", "Fotosinteza"),
          prompt: ml("Wie nehmen Pflanzen Kohlenstoff auf?", "How do plants absorb carbon?", "Hogyan szívják fel a szenet a növények?", "Cum absorb plantele carbonul?"),
          sceneType: "nature",
          visual: { icon: "🌿", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: ml("Als reinen Kohlenstoff aus dem Boden", "As pure carbon from the ground", "Tiszta szénként a földből", "Ca carbon pur din pământ") },
            { id: "c2", label: ml("Als Kohlenstoffdioxid aus der Luft", "As carbon dioxide from the air", "Mint a levegőből származó szén-dioxid", "Ca dioxid de carbon din aer") },
            { id: "c3", label: ml("Als Kohlenmonoxid", "As carbon monoxide", "Szén-monoxidként", "Ca monoxid de carbon") },
            { id: "c4", label: ml("Als Methan", "As methane", "Metánként", "Ca metan") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! CO2 wird aus der Luft aufgenommen.", "Right! CO2 is absorbed from the air.", "Ugye! A CO2 felszívódik a levegőből.", "Corect! CO2 este absorbit din aer."),
          failFeedback: ml("Falsch. Pflanzen nutzen CO2 für die Fotosynthese.", "Incorrect. Plants use CO2 for photosynthesis.", "Nem megfelelő. A növények CO2-t használnak a fotoszintézishez.", "Incorect. Plantele folosesc CO2 pentru fotosinteză.")
        },
        {
          id: "ke-8-sr-3-s2",
          title: ml("Atmung", "Breathing", "Légzés", "Respirație"),
          prompt: ml("Was atmen Tiere und Menschen aus?", "What do animals and humans breathe out?", "Mit lélegeznek ki az állatok és az emberek?", "Ce espiră animalele și oamenii?"),
          sceneType: "nature",
          visual: { icon: "🫁", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen") },
            { id: "c2", label: ml("Kohlenstoffdioxid", "Carbon dioxide", "Szén-dioxid", "Dioxid de carbon") },
            { id: "c3", label: ml("Helium", "Helium", "Hélium", "Heliu") },
            { id: "c4", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Korrekt! CO2 wird bei der Zellatmung frei.", "Correct! CO2 is released during cellular respiration.", "Helyes! CO2 szabadul fel a sejtlégzés során.", "Corect! CO2 este eliberat în timpul respirației celulare."),
          failFeedback: ml("Falsch. Wir atmen Kohlenstoffdioxid aus.", "Incorrect. We breathe out carbon dioxide.", "Helytelen. Kilélegezzük a szén-dioxidot.", "Incorect. Expirăm dioxid de carbon.")
        },
        {
          id: "ke-8-sr-3-s3",
          title: ml("Verbrennung", "Combustion", "Égés", "Combustie"),
          prompt: ml("Was entsteht bei der vollständigen Verbrennung von Erdgas (Methan)?", "What is produced when natural gas (methane) is completely burned?", "Mi keletkezik, ha a földgáz (metán) teljesen eléget?", "Ce se produce atunci când gazul natural (metanul) este complet ars?"),
          sceneType: "community",
          visual: { icon: "🏭", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: ml("Nur Wasser", "Water only", "Csak víz", "Numai apă") },
            { id: "c2", label: ml("Kohlenstoffdioxid und Wasser", "Carbon dioxide and water", "Szén-dioxid és víz", "Dioxid de carbon și apă") },
            { id: "c3", label: ml("Reiner Kohlenstoff", "Pure carbon", "Tiszta szén", "Carbon pur") },
            { id: "c4", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Sehr gut! CO2 und H2O sind die Produkte.", "Very good! CO2 and H2O are the products.", "Nagyon jó! CO2 és H2O a termékek.", "Foarte bine! CO2 și H2O sunt produsele."),
          failFeedback: ml("Falsch. Es entstehen CO2 und Wasser.", "Incorrect. CO2 and water are created.", "Nem megfelelő. CO2 és víz keletkezik.", "Incorect. Se creează CO2 și apă.")
        },
        {
          id: "ke-8-sr-3-s4",
          title: ml("Ozeane", "Oceans", "Óceánok", "Oceane"),
          prompt: ml("Welche Rolle spielen die Ozeane im Kohlenstoffkreislauf?", "What role do the oceans play in the carbon cycle?", "Milyen szerepet játszanak az óceánok a szénkörforgásban?", "Ce rol joacă oceanele în ciclul carbonului?"),
          sceneType: "nature",
          visual: { icon: "🌊", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: ml("Sie produzieren Kohle", "They produce coal", "Szent termelnek", "Ei produc cărbune") },
            { id: "c2", label: ml("Sie speichern gelöstes CO2", "They store dissolved CO2", "Az oldott CO2-t tárolják.", "Ele stochează CO2 dizolvat") },
            { id: "c3", label: ml("Sie verbrennen Kohlenstoff", "They burn carbon", "Szenet égetnek", "Ei ard carbon") },
            { id: "c4", label: ml("Keine Rolle", "No role", "Nincs szerep", "Nici un rol") }
          ],
          correctChoiceId: "c2",
          successFeedback: ml("Richtig! Ozeane sind riesige CO2-Speicher.", "Correct! Oceans are huge stores of CO2.", "Helyes! Az óceánok hatalmas CO2-raktárak.", "Corect! Oceanele sunt depozite uriașe de CO2."),
          failFeedback: ml("Falsch. Ozeane nehmen große Mengen CO2 auf.", "Wrong. Oceans absorb large amounts of CO2.", "Rossz. Az óceánok nagy mennyiségű CO2-t nyelnek el.", "Greșit. Oceanele absorb cantități mari de CO2.")
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "ke-8-cb-1",
      title: ml("Natriumchlorid (Kochsalz)", "Sodium chloride (table salt)", "Nátrium-klorid (étkezési só)", "Clorura de sodiu (sare de masă)"),
      instruction: ml("Baue das Ionengitter von Natriumchlorid auf.", "Build the ionic lattice of sodium chloride.", "A nátrium-klorid ionrácsának kialakítása.", "Construiți rețeaua ionică de clorură de sodiu."),
      hint: "Ein Kation und ein Anion ziehen sich an.",
      theme: { bg: "#121212", accent: "#bb86fc", card: "#1e1e1e" },
      parts: [
        { id: "p1", label: ml("Na+", "Na+", "Na+", "Na+"), emoji: "🔵" },
        { id: "p2", label: ml("Cl-", "Cl-", "Cl-", "Cl-"), emoji: "🟢" },
        { id: "p3", label: ml("Na+", "Na+", "Na+", "Na+"), emoji: "🔵" },
        { id: "p4", label: ml("Cl-", "Cl-", "Cl-", "Cl-"), emoji: "🟢" }
      ],
      slots: [
        { id: "s1", label: ml("Kation 1", "Cation 1", "1. kation", "Cationul 1") },
        { id: "s2", label: ml("Anion 1", "Anion 1", "1-es anion", "Anion 1") },
        { id: "s3", label: ml("Kation 2", "Cation 2", "2. kation", "Cationul 2") },
        { id: "s4", label: ml("Anion 2", "Anion 2", "Anion 2", "Anion 2") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-8-cb-2",
      title: ml("Methan-Molekül", "Methane molecule", "Metánmolekula", "Molecula de metan"),
      instruction: ml("Konstruiere ein Methan-Molekül (CH4).", "Construct a methane molecule (CH4).", "Készítsen metánmolekulát (CH4).", "Construiți o moleculă de metan (CH4)."),
      hint: "Kohlenstoff steht im Zentrum und bindet vier Wasserstoffatome.",
      theme: { bg: "#001f3f", accent: "#39cccc", card: "#001528" },
      parts: [
        { id: "p1", label: ml("C-Atom", "C atom", "C atom", "Atom de C"), emoji: "⚫" },
        { id: "p2", label: ml("H-Atom", "H atom", "H atom", "Atom de H"), emoji: "⚪" },
        { id: "p3", label: ml("H-Atom", "H atom", "H atom", "Atom de H"), emoji: "⚪" },
        { id: "p4", label: ml("H-Atom", "H atom", "H atom", "Atom de H"), emoji: "⚪" }
      ],
      slots: [
        { id: "s1", label: ml("Zentrum", "Center", "Központ", "Centru") },
        { id: "s2", label: ml("Bindung 1", "Bond 1", "Bond 1", "Bond 1") },
        { id: "s3", label: ml("Bindung 2", "Bond 2", "2. köt.", "Bond 2") },
        { id: "s4", label: ml("Bindung 3", "Binding 3", "Kikötés 3", "Legarea 3") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-8-cb-3",
      title: ml("Kupferoxid-Reduktion", "Copper oxide reduction", "Réz-oxid redukció", "Reducerea oxidului de cupru"),
      instruction: ml("Stelle die Reaktionsgleichung: CuO + C -> Cu + CO auf.", "Set up the reaction equation: CuO + C -> Cu + CO.", "Állítsa be a reakcióegyenletet: CuO + C -> Cu + CO.", "Configurați ecuația de reacție: CuO + C -> Cu + CO."),
      hint: "Kupferoxid reagiert mit Kohlenstoff.",
      theme: { bg: "#2b1010", accent: "#ff4136", card: "#1a0a0a" },
      parts: [
        { id: "p1", label: ml("CuO", "CuO", "CuO", "CuO"), emoji: "🟤" },
        { id: "p2", label: ml("C", "C", "C", "C"), emoji: "⚫" },
        { id: "p3", label: ml("Cu", "Cu", "Cu", "Cu"), emoji: "🪙" },
        { id: "p4", label: ml("CO", "CO", "CO", "CO"), emoji: "💨" }
      ],
      slots: [
        { id: "s1", label: ml("Edukt 1", "Educt 1", "Educt 1", "Educt 1") },
        { id: "s2", label: ml("Edukt 2", "Educt 2", "Educt 2", "Educt 2") },
        { id: "s3", label: ml("Produkt 1", "Product 1", "1. termék", "Produsul 1") },
        { id: "s4", label: ml("Produkt 2", "Product 2", "2. termék", "Produsul 2") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
      {
      id: "ke-8-cb-4",
      title: ml("Natriumchlorid (Kochsalz) (Pro)", "Sodium chloride (common salt) (Pro)", "Nátrium-klorid (konyhasó) (Pro)", "Clorura de sodiu (sare comună) (Pro)"),
      instruction: ml("Baue das Ionengitter von Natriumchlorid auf.", "Build the ionic lattice of sodium chloride.", "A nátrium-klorid ionrácsának kialakítása.", "Construiți rețeaua ionică de clorură de sodiu."),
      hint: "Ein Kation und ein Anion ziehen sich an.",
      theme: { bg: "#121212", accent: "#bb86fc", card: "#1e1e1e" },
      parts: [
        { id: "p1", label: ml("Na+", "Na+", "Na+", "Na+"), emoji: "🔵" },
        { id: "p2", label: ml("Cl-", "Cl-", "Cl-", "Cl-"), emoji: "🟢" },
        { id: "p3", label: ml("Na+", "Na+", "Na+", "Na+"), emoji: "🔵" },
        { id: "p4", label: ml("Cl-", "Cl-", "Cl-", "Cl-"), emoji: "🟢" }
      ],
      slots: [
        { id: "s1", label: ml("Kation 1", "Cation 1", "1. kation", "Cationul 1") },
        { id: "s2", label: ml("Anion 1", "Anion 1", "1-es anion", "Anion 1") },
        { id: "s3", label: ml("Kation 2", "Cation 2", "2. kation", "Cationul 2") },
        { id: "s4", label: ml("Anion 2", "Anion 2", "Anion 2", "Anion 2") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
      {
      id: "ke-8-cb-5",
      title: ml("Methan-Molekül (Pro)", "Methane molecule (Pro)", "Metánmolekula (Pro)", "Molecula de metan (Pro)"),
      instruction: ml("Konstruiere ein Methan-Molekül (CH4).", "Construct a methane molecule (CH4).", "Készítsen metánmolekulát (CH4).", "Construiți o moleculă de metan (CH4)."),
      hint: "Kohlenstoff steht im Zentrum und bindet vier Wasserstoffatome.",
      theme: { bg: "#001f3f", accent: "#39cccc", card: "#001528" },
      parts: [
        { id: "p1", label: ml("C-Atom", "C atom", "C atom", "Atom de C"), emoji: "⚫" },
        { id: "p2", label: ml("H-Atom", "H atom", "H atom", "Atom de H"), emoji: "⚪" },
        { id: "p3", label: ml("H-Atom", "H atom", "H atom", "Atom de H"), emoji: "⚪" },
        { id: "p4", label: ml("H-Atom", "H atom", "H atom", "Atom de H"), emoji: "⚪" }
      ],
      slots: [
        { id: "s1", label: ml("Zentrum", "Center", "Központ", "Centru") },
        { id: "s2", label: ml("Bindung 1", "Bond 1", "Bond 1", "Bond 1") },
        { id: "s3", label: ml("Bindung 2", "Bond 2", "2. köt.", "Bond 2") },
        { id: "s4", label: ml("Bindung 3", "Binding 3", "Kikötés 3", "Legarea 3") }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    }
  ],
  memoryRadar: [
    {
      id: "ke-8-mr-1",
      title: ml("Alkalimetalle finden", "Find alkali metals", "Találjon alkálifémeket", "Găsiți metale alcaline"),
      instruction: ml("Merke dir die Positionen der Alkalimetalle.", "Note the positions of the alkali metals.", "Jegyezze fel az alkálifémek helyzetét.", "Notați pozițiile metalelor alcaline."),
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#0f0f1b", accent: "#e94560", radar: "#1a1a2e" },
      targetItems: [
        { id: "t1", label: ml("Lithium", "Lithium", "Lítium", "Litiu"), emoji: "🔴" },
        { id: "t2", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🟡" },
        { id: "t3", label: ml("Kalium", "Potassium", "Kálium", "Potasiu"), emoji: "🟣" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Magnesium", "Magnesium", "Magnézium", "Magneziu"), emoji: "⚪" },
        { id: "d2", label: ml("Calcium", "Calcium", "Kalcium", "Calciu"), emoji: "🦴" },
        { id: "d3", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "d4", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙" },
        { id: "d5", label: ml("Zink", "Zinc", "cink", "Binc</t13> <t14>Binc"), emoji: "🔋" }
      ]
    },
    {
      id: "ke-8-mr-2",
      title: ml("Halogene aufspüren", "Detecting halogens", "Halogének kimutatása", "Detectarea halogenilor"),
      instruction: ml("Finde die Halogene auf dem Radar.", "Find the halogens on the radar.", "Keresse meg a halogéneket a radaron.", "Găsiți halogenii pe radar."),
      flashDurationMs: 2500,
      selectionLimit: 4,
      theme: { bg: "#121212", accent: "#4ecca3", radar: "#232931" },
      targetItems: [
        { id: "t1", label: ml("Fluor", "Fluorine", "Fluor", "Fluor"), emoji: "🟢" },
        { id: "t2", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🧪" },
        { id: "t3", label: ml("Brom", "Bromine", "Bróm", "Brom"), emoji: "🟤" },
        { id: "t4", label: ml("Iod", "Iodine", "Jód", "Iod"), emoji: "🟣" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "d2", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot"), emoji: "❄️" },
        { id: "d3", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫" },
        { id: "d4", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🟡" },
        { id: "d5", label: ml("Phosphor", "Phosphorus", "Foszfor", "Fosfor"), emoji: "🔥" }
      ]
    },
    {
      id: "ke-8-mr-3",
      title: ml("Edelgase merken", "Remember noble gases", "Emlékezzen a nemesgázokra", "Îți amintești de gazele nobile"),
      instruction: ml("Präge dir die Edelgase ein.", "Memorize the noble gases.", "Jegyezze meg a nemesgázokat.", "Memorează gazele nobile."),
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#1a1a2e", accent: "#bb86fc", radar: "#16213e" },
      targetItems: [
        { id: "t1", label: ml("Helium", "Helium", "Hélium", "Heliu"), emoji: "🎈" },
        { id: "t2", label: ml("Neon", "Neon", "Neon", "Neon"), emoji: "💡" },
        { id: "t3", label: ml("Argon", "Argon", "Argon</t5>Carbont3", "argon"), emoji: "🔵" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Wasserstoff", "Hydrogen", "Hidrogén", "Hidrogen"), emoji: "💥" },
        { id: "d2", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "d3", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🧪" },
        { id: "d4", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🟡" },
        { id: "d5", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" }
      ]
    },
      {
      id: "ke-8-mr-4",
      title: ml("Alkalimetalle finden (Pro)", "Find alkali metals (Pro)", "Alkálifémek keresése (Pro)", "Găsiți metale alcaline (Pro)"),
      instruction: ml("Merke dir die Positionen der Alkalimetalle.", "Note the positions of the alkali metals.", "Jegyezze fel az alkálifémek helyzetét.", "Notați pozițiile metalelor alcaline."),
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#0f0f1b", accent: "#e94560", radar: "#1a1a2e" },
      targetItems: [
        { id: "t1", label: ml("Lithium", "Lithium", "Lítium", "Litiu"), emoji: "🔴" },
        { id: "t2", label: ml("Natrium", "Sodium", "nátrium", "sodiu"), emoji: "🟡" },
        { id: "t3", label: ml("Kalium", "Potassium", "Kálium", "Potasiu"), emoji: "🟣" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Magnesium", "Magnesium", "Magnézium", "Magneziu"), emoji: "⚪" },
        { id: "d2", label: ml("Calcium", "Calcium", "Kalcium", "Calciu"), emoji: "🦴" },
        { id: "d3", label: ml("Eisen", "Iron", "Vas", "Fier"), emoji: "🔩" },
        { id: "d4", label: ml("Kupfer", "Copper", "Réz", "Cupru"), emoji: "🪙" },
        { id: "d5", label: ml("Zink", "Zinc", "cink", "Binc</t13> <t14>Binc"), emoji: "🔋" }
      ]
    },
      {
      id: "ke-8-mr-5",
      title: ml("Halogene aufspüren (Pro)", "Detect halogens (Pro)", "Halogének kimutatása (Pro)", "Detectați halogeni (Pro)"),
      instruction: ml("Finde die Halogene auf dem Radar.", "Find the halogens on the radar.", "Keresse meg a halogéneket a radaron.", "Găsiți halogenii pe radar."),
      flashDurationMs: 2500,
      selectionLimit: 4,
      theme: { bg: "#121212", accent: "#4ecca3", radar: "#232931" },
      targetItems: [
        { id: "t1", label: ml("Fluor", "Fluorine", "Fluor", "Fluor"), emoji: "🟢" },
        { id: "t2", label: ml("Chlor", "Chlorine", "Klór", "Clor"), emoji: "🧪" },
        { id: "t3", label: ml("Brom", "Bromine", "Bróm", "Brom"), emoji: "🟤" },
        { id: "t4", label: ml("Iod", "Iodine", "Jód", "Iod"), emoji: "🟣" }
      ],
      decoyItems: [
        { id: "d1", label: ml("Sauerstoff", "Oxygen", "Oxigén", "Oxigen"), emoji: "💨" },
        { id: "d2", label: ml("Stickstoff", "Nitrogen", "Nitrogén", "Azot"), emoji: "❄️" },
        { id: "d3", label: ml("Kohlenstoff", "Carbon", "szén", "carbon"), emoji: "⚫" },
        { id: "d4", label: ml("Schwefel", "Sulfur", "Kén", "Sulf"), emoji: "🟡" },
        { id: "d5", label: ml("Phosphor", "Phosphorus", "Foszfor", "Fosfor"), emoji: "🔥" }
      ]
    }
  ]
  }
};
