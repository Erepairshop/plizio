import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

// Helper for generating multilingual text
const ml = (de: string, en: string, hu: string, ro: string) => `${de} / ${en} / ${hu} / ${ro}`;

export const BIOLOGIE_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "bio-5-mc-1",
        title: ml("Zellorganellen", "Cell Organelles", "Sejtorganellumok", "Organite Celulare"),
        prompt: ml("Fange nur Zellorganellen ein.", "Catch only cell organelles.", "Csak sejtorganellumokat fogj be.", "Prinde doar organite celulare."),
        goal: 5,
        speed: 5,
        theme: { sky: "#082f49", glow: "#38bdf8", accent: "#0ea5e9" },
        correctItems: [
          { id: "zellkern", label: ml("Zellkern", "Nucleus", "Sejtmag", "Nucleu"), emoji: "⚛️" },
          { id: "mitochondrien", label: ml("Mitochondrien", "Mitochondria", "Mitochondrium", "Mitocondrii"), emoji: "🔋" },
          { id: "chloroplasten", label: ml("Chloroplasten", "Chloroplasts", "Kloroplasztisz", "Cloroplaste"), emoji: "🌿" },
          { id: "vakuole", label: ml("Vakuole", "Vacuole", "Vakuólum", "Vacuolă"), emoji: "💧" },
          { id: "zellwand", label: ml("Zellwand", "Cell Wall", "Sejtfal", "Perete Celular"), emoji: "🧱" },
        ],
        wrongItems: [
          { id: "blatt", label: ml("Blatt", "Leaf", "Levél", "Frunză"), emoji: "🍃" },
          { id: "wurzel", label: ml("Wurzel", "Root", "Gyökér", "Rădăcină"), emoji: "🌱" },
          { id: "blüte", label: ml("Blüte", "Flower", "Virág", "Floare"), emoji: "🌸" },
        ],
      },
      {
        id: "bio-5-mc-2",
        title: ml("Wirbeltiere", "Vertebrates", "Gerincesek", "Vertebrate"),
        prompt: ml("Fange nur Wirbeltiere ein.", "Catch only vertebrates.", "Csak gerinceseket fogj be.", "Prinde doar vertebrate."),
        goal: 5,
        speed: 5.5,
        theme: { sky: "#0f172a", glow: "#22c55e", accent: "#16a34a" },
        correctItems: [
          { id: "hund", label: ml("Hund", "Dog", "Kutya", "Câine"), emoji: "🐕" },
          { id: "katze", label: ml("Katze", "Cat", "Macska", "Pisică"), emoji: "🐈" },
          { id: "vogel", label: ml("Vogel", "Bird", "Madár", "Pasăre"), emoji: "🐦" },
          { id: "frosch", label: ml("Frosch", "Frog", "Béka", "Broască"), emoji: "🐸" },
          { id: "schlange", label: ml("Schlange", "Snake", "Kígyó", "Șarpe"), emoji: "🐍" },
        ],
        wrongItems: [
          { id: "spinne", label: ml("Spinne", "Spider", "Pók", "Păianjen"), emoji: "🕷️" },
          { id: "fliege", label: ml("Fliege", "Fly", "Légy", "Muscă"), emoji: "🪰" },
          { id: "wurm", label: ml("Wurm", "Worm", "Féreg", "Vierme"), emoji: "🐛" },
        ]
      },
      {
        id: "bio-5-mc-3",
        title: ml("Säugetiere", "Mammals", "Emlősök", "Mamifere"),
        prompt: ml("Fange nur Säugetiere ein.", "Catch only mammals.", "Csak emlősöket fogj be.", "Prinde doar mamifere."),
        goal: 5,
        speed: 6,
        theme: { sky: "#1e1b4b", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "elefant", label: ml("Elefant", "Elephant", "Elefánt", "Elefant"), emoji: "🐘" },
          { id: "löwe", label: ml("Löwe", "Lion", "Oroszlán", "Leu"), emoji: "🦁" },
          { id: "bär", label: ml("Bär", "Bear", "Medve", "Urs"), emoji: "🐻" },
          { id: "affe", label: ml("Affe", "Monkey", "Majom", "Maimuță"), emoji: "🐒" },
          { id: "kuh", label: ml("Kuh", "Cow", "Tehén", "Vacă"), emoji: "🐄" },
        ],
        wrongItems: [
          { id: "krokodil", label: ml("Krokodil", "Crocodile", "Krokodil", "Crocodil"), emoji: "🐊" },
          { id: "hai", label: ml("Hai", "Shark", "Cápa", "Rechin"), emoji: "🦈" },
          { id: "ente", label: ml("Ente", "Duck", "Kacsa", "Rață"), emoji: "🦆" },
        ]
      },
      {
        id: "bio-5-mc-4",
        title: ml("Pflanzenorgane", "Plant Organs", "Növényi szervek", "Organe de plante"),
        prompt: ml("Fange Pflanzenorgane ein.", "Catch plant organs.", "Fogj be növényi szerveket.", "Prinde organe de plante."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#064e3b", glow: "#a3e635", accent: "#84cc16" },
        correctItems: [
          { id: "blatt", label: ml("Blatt", "Leaf", "Levél", "Frunză"), emoji: "🍃" },
          { id: "wurzel", label: ml("Wurzel", "Root", "Gyökér", "Rădăcină"), emoji: "🌱" },
          { id: "stängel", label: ml("Stängel", "Stem", "Szár", "Tulpină"), emoji: "🎋" },
          { id: "blüte", label: ml("Blüte", "Flower", "Virág", "Floare"), emoji: "🌸" },
          { id: "frucht", label: ml("Frucht", "Fruit", "Gyümölcs", "Fruct"), emoji: "🍎" },
        ],
        wrongItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "lunge", label: ml("Lunge", "Lung", "Tüdő", "Plămân"), emoji: "🫁" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
        ]
      },
      {
        id: "bio-5-mc-5",
        title: ml("Tiere im Wald", "Forest Animals", "Erdei állatok", "Animale de pădure"),
        prompt: ml("Fange Tiere des Waldes.", "Catch forest animals.", "Fogj erdei állatokat.", "Prinde animale de pădure."),
        goal: 5,
        speed: 7,
        theme: { sky: "#27272a", glow: "#facc15", accent: "#eab308" },
        correctItems: [
          { id: "hirsch", label: ml("Hirsch", "Deer", "Szarvas", "Cerb"), emoji: "🦌" },
          { id: "fuchs", label: ml("Fuchs", "Fox", "Róka", "Vulpe"), emoji: "🦊" },
          { id: "eule", label: ml("Eule", "Owl", "Bagoly", "Bufniță"), emoji: "🦉" },
          { id: "wildschwein", label: ml("Wildschwein", "Boar", "Vaddisznó", "Mistreț"), emoji: "🐗" },
          { id: "igel", label: ml("Igel", "Hedgehog", "Sün", "Arici"), emoji: "🦔" },
        ],
        wrongItems: [
          { id: "pinguin", label: ml("Pinguin", "Penguin", "Pingvin", "Pinguin"), emoji: "🐧" },
          { id: "kamel", label: ml("Kamel", "Camel", "Teve", "Cămilă"), emoji: "🐫" },
          { id: "delphin", label: ml("Delfin", "Dolphin", "Delfin", "Delfin"), emoji: "🐬" },
        ]
      }
    ],
    orbitSort: [
      {
        id: "bio-5-os-1",
        title: ml("Pflanze oder Tier?", "Plant or Animal?", "Növény vagy állat?", "Plantă sau animal?"),
        instruction: ml("Sortiere in die richtige Gruppe.", "Sort into the correct group.", "Válogasd a megfelelő csoportba.", "Sortează în grupul corect."),
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "pflanze", label: ml("Pflanze", "Plant", "Növény", "Plantă"), color: "#22c55e" },
          { id: "tier", label: ml("Tier", "Animal", "Állat", "Animal"), color: "#f97316" },
        ],
        items: [
          { id: "fotosynthese", label: ml("Fotosynthese", "Photosynthesis", "Fotoszintézis", "Fotosinteză"), emoji: "☀️", bucketId: "pflanze" },
          { id: "zellulose", label: ml("Zellulose", "Cellulose", "Cellulóz", "Celuloză"), emoji: "🌳", bucketId: "pflanze" },
          { id: "chlorophyll", label: ml("Chlorophyll", "Chlorophyll", "Klorofill", "Clorofilă"), emoji: "🟢", bucketId: "pflanze" },
          { id: "bewegung", label: ml("Bewegung", "Movement", "Mozgás", "Mișcare"), emoji: "🏃", bucketId: "tier" },
          { id: "nervensystem", label: ml("Nervensystem", "Nervous System", "Idegrendszer", "Sistem nervos"), emoji: "🧠", bucketId: "tier" },
          { id: "muskeln", label: ml("Muskeln", "Muscles", "Izmok", "Mușchi"), emoji: "💪", bucketId: "tier" },
        ],
      },
      {
        id: "bio-5-os-2",
        title: ml("Wirbeltier oder Wirbellos?", "Vertebrate or Invertebrate?", "Gerinces vagy gerinctelen?", "Vertebrat sau nevertebrat?"),
        instruction: ml("Sortiere in die richtige Gruppe.", "Sort into the correct group.", "Válogasd a megfelelő csoportba.", "Sortează în grupul corect."),
        theme: { bg: "#172554", orbit: "#3b82f6", accent: "#60a5fa" },
        buckets: [
          { id: "wirbel", label: ml("Wirbeltier", "Vertebrate", "Gerinces", "Vertebrat"), color: "#3b82f6" },
          { id: "ohne", label: ml("Wirbellos", "Invertebrate", "Gerinctelen", "Nevertebrat"), color: "#ef4444" },
        ],
        items: [
          { id: "hund", label: ml("Hund", "Dog", "Kutya", "Câine"), emoji: "🐕", bucketId: "wirbel" },
          { id: "frosch", label: ml("Frosch", "Frog", "Béka", "Broască"), emoji: "🐸", bucketId: "wirbel" },
          { id: "vogel", label: ml("Vogel", "Bird", "Madár", "Pasăre"), emoji: "🐦", bucketId: "wirbel" },
          { id: "spinne", label: ml("Spinne", "Spider", "Pók", "Păianjen"), emoji: "🕷️", bucketId: "ohne" },
          { id: "wurm", label: ml("Wurm", "Worm", "Féreg", "Vierme"), emoji: "🐛", bucketId: "ohne" },
          { id: "schnecke", label: ml("Schnecke", "Snail", "Csiga", "Melc"), emoji: "🐌", bucketId: "ohne" },
        ],
      },
      {
        id: "bio-5-os-3",
        title: ml("Fleischfresser oder Pflanzenfresser?", "Carnivore or Herbivore?", "Húsevő vagy növényevő?", "Carnivor sau erbivor?"),
        instruction: ml("Sortiere nach Nahrung.", "Sort by diet.", "Rendezd táplálék szerint.", "Sortează după dietă."),
        theme: { bg: "#2e1065", orbit: "#a855f7", accent: "#c084fc" },
        buckets: [
          { id: "fleisch", label: ml("Fleischfresser", "Carnivore", "Húsevő", "Carnivor"), color: "#ef4444" },
          { id: "pflanzen", label: ml("Pflanzenfresser", "Herbivore", "Növényevő", "Erbivor"), color: "#22c55e" },
        ],
        items: [
          { id: "löwe", label: ml("Löwe", "Lion", "Oroszlán", "Leu"), emoji: "🦁", bucketId: "fleisch" },
          { id: "wolf", label: ml("Wolf", "Wolf", "Farkas", "Lup"), emoji: "🐺", bucketId: "fleisch" },
          { id: "hai", label: ml("Hai", "Shark", "Cápa", "Rechin"), emoji: "🦈", bucketId: "fleisch" },
          { id: "kuh", label: ml("Kuh", "Cow", "Tehén", "Vacă"), emoji: "🐄", bucketId: "pflanzen" },
          { id: "pferd", label: ml("Pferd", "Horse", "Ló", "Cal"), emoji: "🐎", bucketId: "pflanzen" },
          { id: "schaf", label: ml("Schaf", "Sheep", "Bárány", "Oaie"), emoji: "🐑", bucketId: "pflanzen" },
        ],
      },
      {
        id: "bio-5-os-4",
        title: ml("Tag- oder Nachtaktiv?", "Diurnal or Nocturnal?", "Nappali vagy éjszakai?", "Diurn sau nocturn?"),
        instruction: ml("Wann ist das Tier aktiv?", "When is the animal active?", "Mikor aktív az állat?", "Când este animalul activ?"),
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "tag", label: ml("Tagaktiv", "Diurnal", "Nappali", "Diurn"), color: "#38bdf8" },
          { id: "nacht", label: ml("Nachtaktiv", "Nocturnal", "Éjszakai", "Nocturn"), color: "#312e81" },
        ],
        items: [
          { id: "huhn", label: ml("Huhn", "Chicken", "Tyúk", "Găină"), emoji: "🐔", bucketId: "tag" },
          { id: "pferd", label: ml("Pferd", "Horse", "Ló", "Cal"), emoji: "🐎", bucketId: "tag" },
          { id: "schmetterling", label: ml("Schmetterling", "Butterfly", "Pillangó", "Fluture"), emoji: "🦋", bucketId: "tag" },
          { id: "eule", label: ml("Eule", "Owl", "Bagoly", "Bufniță"), emoji: "🦉", bucketId: "nacht" },
          { id: "fledermaus", label: ml("Fledermaus", "Bat", "Denevér", "Liliac"), emoji: "🦇", bucketId: "nacht" },
          { id: "motte", label: ml("Motte", "Moth", "Moly", "Molie"), emoji: "🪰", bucketId: "nacht" },
        ],
      },
      {
        id: "bio-5-os-5",
        title: ml("Wild- oder Haustier?", "Wild or Domestic?", "Vadon élő vagy háziállat?", "Sălbatic sau domestic?"),
        instruction: ml("Wo lebt das Tier?", "Where does it live?", "Hol él az állat?", "Unde trăiește?"),
        theme: { bg: "#065f46", orbit: "#fb923c", accent: "#fdba74" },
        buckets: [
          { id: "wild", label: ml("Wildtier", "Wild", "Vadon élő", "Sălbatic"), color: "#16a34a" },
          { id: "haus", label: ml("Haustier", "Domestic", "Háziállat", "Domestic"), color: "#f97316" },
        ],
        items: [
          { id: "tiger", label: ml("Tiger", "Tiger", "Tigris", "Tigru"), emoji: "🐅", bucketId: "wild" },
          { id: "bär", label: ml("Bär", "Bear", "Medve", "Urs"), emoji: "🐻", bucketId: "wild" },
          { id: "wolf", label: ml("Wolf", "Wolf", "Farkas", "Lup"), emoji: "🐺", bucketId: "wild" },
          { id: "hund", label: ml("Hund", "Dog", "Kutya", "Câine"), emoji: "🐕", bucketId: "haus" },
          { id: "katze", label: ml("Katze", "Cat", "Macska", "Pisică"), emoji: "🐈", bucketId: "haus" },
          { id: "schwein", label: ml("Schwein", "Pig", "Sertés", "Porc"), emoji: "🐖", bucketId: "haus" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "bio-5-sr-1",
        title: ml("Zellen Quiz", "Cells Quiz", "Sejt Kvíz", "Test Celule"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-5-sr-1-s1",
            title: ml("Zellkraftwerk", "Powerhouse", "Erőmű", "Uzina celulei"),
            prompt: ml("Welches Organell ist das 'Kraftwerk'?", "Which organelle is the 'powerhouse'?", "Melyik az 'erőmű'?", "Care este 'uzina'?"),
            sceneType: "community",
            visual: { icon: "🔋", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Zellkern", "Nucleus", "Sejtmag", "Nucleu") },
              { id: "b", label: ml("Mitochondrium", "Mitochondria", "Mitochondrium", "Mitocondrie") },
              { id: "c", label: ml("Vakuole", "Vacuole", "Vakuólum", "Vacuolă") },
              { id: "d", label: ml("Zellwand", "Cell Wall", "Sejtfal", "Perete Celular") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch. Mitochondrien.", "Wrong. Mitochondria.", "Hibás. Mitochondrium.", "Greșit. Mitocondrie.")
          }
        ]
      },
      {
        id: "bio-5-sr-2",
        title: ml("Säugetiere", "Mammals", "Emlősök", "Mamifere"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-5-sr-2-s1",
            title: ml("Merkmal", "Feature", "Jellemző", "Caracteristică"),
            prompt: ml("Was ist typisch für Säugetiere?", "What is typical for mammals?", "Mi jellemző az emlősökre?", "Ce e tipic pentru mamifere?"),
            sceneType: "nature",
            visual: { icon: "🐄", bg: "#065f46", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Federn", "Feathers", "Tollak", "Pene") },
              { id: "b", label: ml("Kiemen", "Gills", "Kopoltyú", "Branhii") },
              { id: "c", label: ml("Milch", "Milk", "Tej", "Lapte") },
              { id: "d", label: ml("Schuppen", "Scales", "Pikkelyek", "Solzi") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-5-sr-3",
        title: ml("Vögel", "Birds", "Madarak", "Păsări"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-5-sr-3-s1",
            title: ml("Körperbedeckung", "Covering", "Kültakaró", "Acoperire"),
            prompt: ml("Womit sind Vögel bedeckt?", "What covers a bird's body?", "Mivel borítottak a madarak?", "Cu ce sunt acoperite păsările?"),
            sceneType: "safety",
            visual: { icon: "🐦", bg: "#1e1b4b", accent: "#a855f7" },
            choices: [
              { id: "a", label: ml("Fell", "Fur", "Szőr", "Blană") },
              { id: "b", label: ml("Federn", "Feathers", "Toll", "Pene") },
              { id: "c", label: ml("Schuppen", "Scales", "Pikkely", "Solzi") },
              { id: "d", label: ml("Haare", "Hair", "Haj", "Păr") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-5-sr-4",
        title: ml("Pflanzen Quiz", "Plant Quiz", "Növény Kvíz", "Test Plante"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-5-sr-4-s1",
            title: ml("Ernährung", "Nutrition", "Táplálkozás", "Nutriție"),
            prompt: ml("Wie ernähren sich Pflanzen?", "How do plants eat?", "Hogyan táplálkoznak a növények?", "Cum se hrănesc plantele?"),
            sceneType: "community",
            visual: { icon: "🌻", bg: "#064e3b", accent: "#fbbf24" },
            choices: [
              { id: "a", label: ml("Insekten", "Insects", "Rovarok", "Insecte") },
              { id: "b", label: ml("Fotosynthese", "Photosynthesis", "Fotoszintézis", "Fotosinteză") },
              { id: "c", label: ml("Fleisch", "Meat", "Hús", "Carne") },
              { id: "d", label: ml("Steine", "Stones", "Kövek", "Pietre") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-5-sr-5",
        title: ml("Amphibien", "Amphibians", "Kétéltűek", "Amfibieni"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-5-sr-5-s1",
            title: ml("Lebensraum", "Habitat", "Élőhely", "Habitat"),
            prompt: ml("Wo leben Amphibien?", "Where do they live?", "Hol élnek?", "Unde trăiesc?"),
            sceneType: "nature",
            visual: { icon: "🐸", bg: "#022c22", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Nur im Wasser", "Only water", "Csak vízben", "Doar în apă") },
              { id: "b", label: ml("Nur an Land", "Only land", "Csak szárazföldön", "Doar pe uscat") },
              { id: "c", label: ml("Wasser & Land", "Water & land", "Vízben és szárazföldön", "Apă și uscat") },
              { id: "d", label: ml("Luft", "Air", "Levegő", "Aer") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "bio-5-cb-1",
        title: ml("Zellorganellen", "Cell Organelles", "Sejtorganellumok", "Organite Celulare"),
        instruction: ml("Ordne von klein nach groß.", "Order from small to large.", "Rendezd kicsitől a nagyig.", "Ordonează de la mic la mare."),
        hint: ml("Ribosomen sind klein.", "Ribosomes are small.", "A riboszómák kicsik.", "Ribozomii sunt mici."),
        theme: { bg: "#0f172a", accent: "#38bdf8", card: "#1e3a5f" },
        parts: [
          { id: "ribosom", label: ml("Ribosom", "Ribosome", "Riboszóma", "Ribozom"), emoji: "🔬" },
          { id: "mitochondrium", label: ml("Mitochondrium", "Mitochondrion", "Mitochondrium", "Mitocondrie"), emoji: "🔋" },
          { id: "zellkern", label: ml("Zellkern", "Nucleus", "Sejtmag", "Nucleu"), emoji: "⚛️" },
        ],
        slots: [
          { id: "slot-1", label: ml("Kleinstes", "Smallest", "Legkisebb", "Cel mai mic") },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: ml("Größtes", "Largest", "Legnagyobb", "Cel mai mare") },
        ],
        solution: ["ribosom", "mitochondrium", "zellkern"],
      },
      {
        id: "bio-5-cb-2",
        title: ml("Wirbeltierklassen", "Vertebrate Classes", "Gerinces osztályok", "Clase vertebrate"),
        instruction: ml("Ordne evolutionär.", "Order evolutionarily.", "Rendezd evolúciósan.", "Ordonează evolutiv."),
        hint: ml("Fische kamen zuerst.", "Fishes came first.", "A halak voltak az elsők.", "Peștii au fost primii."),
        theme: { bg: "#1e1b4b", accent: "#fbbf24", card: "#312e81" },
        parts: [
          { id: "fische", label: ml("Fische", "Fishes", "Halak", "Pești"), emoji: "🐟" },
          { id: "amphibien", label: ml("Amphibien", "Amphibians", "Kétéltűek", "Amfibieni"), emoji: "🐸" },
          { id: "reptilien", label: ml("Reptilien", "Reptiles", "Hüllők", "Reptile"), emoji: "🐍" },
          { id: "säugetiere", label: ml("Säugetiere", "Mammals", "Emlősök", "Mamifere"), emoji: "🐄" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["fische", "amphibien", "reptilien", "säugetiere"],
      },
      {
        id: "bio-5-cb-3",
        title: ml("Baumstruktur", "Tree Structure", "Fa felépítése", "Structura arborelui"),
        instruction: ml("Von unten nach oben.", "From bottom to top.", "Lentről felfelé.", "De jos în sus."),
        hint: ml("Wurzeln sind in der Erde.", "Roots are in soil.", "A gyökerek a földben vannak.", "Rădăcinile sunt în sol."),
        theme: { bg: "#064e3b", accent: "#4ade80", card: "#065f46" },
        parts: [
          { id: "wurzel", label: ml("Wurzel", "Root", "Gyökér", "Rădăcină"), emoji: "🌱" },
          { id: "stamm", label: ml("Stamm", "Trunk", "Törzs", "Trunchi"), emoji: "🪵" },
          { id: "krone", label: ml("Krone", "Crown", "Lombkorona", "Coroană"), emoji: "🌳" },
        ],
        slots: [
          { id: "s1", label: "1. Unten/Bottom/Lent/Jos" },
          { id: "s2", label: "2. Mitte/Middle/Közép/Mijloc" },
          { id: "s3", label: "3. Oben/Top/Fent/Sus" },
        ],
        solution: ["wurzel", "stamm", "krone"],
      },
      {
        id: "bio-5-cb-4",
        title: ml("Nahrungskette", "Food Chain", "Tápláléklánc", "Lanț trofic"),
        instruction: ml("Ordne die Kette.", "Order the chain.", "Rendezd a láncot.", "Ordonează lanțul."),
        hint: ml("Pflanzen zuerst.", "Plants first.", "A növények az elsők.", "Plantele primele."),
        theme: { bg: "#2e1065", accent: "#c084fc", card: "#4c1d95" },
        parts: [
          { id: "gras", label: ml("Gras", "Grass", "Fű", "Iarbă"), emoji: "🌿" },
          { id: "hase", label: ml("Hase", "Rabbit", "Nyúl", "Iepure"), emoji: "🐇" },
          { id: "fuchs", label: ml("Fuchs", "Fox", "Róka", "Vulpe"), emoji: "🦊" },
        ],
        slots: [
          { id: "s1", label: "1. Produzent" },
          { id: "s2", label: "2. Konsument I" },
          { id: "s3", label: "3. Konsument II" },
        ],
        solution: ["gras", "hase", "fuchs"],
      },
      {
        id: "bio-5-cb-5",
        title: ml("Insektenentwicklung", "Insect Development", "Rovarok fejlődése", "Dezvoltare insecte"),
        instruction: ml("Ordne die Metamorphose.", "Order metamorphosis.", "Rendezd az átalakulást.", "Ordonează metamorfoza."),
        hint: ml("Aus Eiern schlüpfen Larven.", "Larvae hatch from eggs.", "A lárvák tojásból kelnek.", "Larvele ies din ouă."),
        theme: { bg: "#450a0a", accent: "#f87171", card: "#7f1d1d" },
        parts: [
          { id: "ei", label: ml("Ei", "Egg", "Tojás", "Ou"), emoji: "🥚" },
          { id: "raupe", label: ml("Raupe", "Caterpillar", "Hernyó", "Omidă"), emoji: "🐛" },
          { id: "puppe", label: ml("Puppe", "Pupa", "Báb", "Pupă"), emoji: "🪲" },
          { id: "schmetterling", label: ml("Schmetterling", "Butterfly", "Pillangó", "Fluture"), emoji: "🦋" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["ei", "raupe", "puppe", "schmetterling"],
      }
    ],
    memoryRadar: [
      {
        id: "bio-5-mr-1",
        title: ml("Tierklassen", "Animal Classes", "Állatosztályok", "Clase de animale"),
        instruction: ml("Merke dir die Klassen.", "Remember the classes.", "Jegyezd meg az osztályokat.", "Reține clasele."),
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "säugetiere", label: ml("Säugetiere", "Mammals", "Emlősök", "Mamifere"), emoji: "🐄" },
          { id: "vögel", label: ml("Vögel", "Birds", "Madarak", "Păsări"), emoji: "🐦" },
          { id: "fische", label: ml("Fische", "Fishes", "Halak", "Pești"), emoji: "🐟" },
          { id: "reptilien", label: ml("Reptilien", "Reptiles", "Hüllők", "Reptile"), emoji: "🐍" },
          { id: "amphibien", label: ml("Amphibien", "Amphibians", "Kétéltűek", "Amfibieni"), emoji: "🐸" },
        ],
        decoyItems: [
          { id: "insekten", label: ml("Insekten", "Insects", "Rovarok", "Insecte"), emoji: "🐞" },
          { id: "spinnen", label: ml("Spinnen", "Spiders", "Pókok", "Păianjeni"), emoji: "🕷️" },
          { id: "würmer", label: ml("Würmer", "Worms", "Férgek", "Viermi"), emoji: "🐛" },
        ],
      },
      {
        id: "bio-5-mr-2",
        title: ml("Pflanzenteile", "Plant Parts", "Növényi részek", "Părți de plante"),
        instruction: ml("Merke dir Pflanzenteile.", "Remember plant parts.", "Jegyezd meg a részeket.", "Reține părțile plantei."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#34d399", radar: "#065f46" },
        targetItems: [
          { id: "blatt", label: ml("Blatt", "Leaf", "Levél", "Frunză"), emoji: "🍃" },
          { id: "wurzel", label: ml("Wurzel", "Root", "Gyökér", "Rădăcină"), emoji: "🌱" },
          { id: "blüte", label: ml("Blüte", "Flower", "Virág", "Floare"), emoji: "🌸" },
          { id: "stängel", label: ml("Stängel", "Stem", "Szár", "Tulpină"), emoji: "🎋" },
        ],
        decoyItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "lunge", label: ml("Lunge", "Lung", "Tüdő", "Plămân"), emoji: "🫁" },
          { id: "bein", label: ml("Bein", "Leg", "Láb", "Picior"), emoji: "🦵" },
        ],
      },
      {
        id: "bio-5-mr-3",
        title: ml("Vögel", "Birds", "Madarak", "Păsări"),
        instruction: ml("Merke dir die Vögel.", "Remember the birds.", "Jegyezd meg a madarakat.", "Reține păsările."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1e1b4b", accent: "#fbbf24", radar: "#312e81" },
        targetItems: [
          { id: "adler", label: ml("Adler", "Eagle", "Sas", "Vultur"), emoji: "🦅" },
          { id: "taube", label: ml("Taube", "Pigeon", "Galamb", "Porumbel"), emoji: "🕊️" },
          { id: "pinguin", label: ml("Pinguin", "Penguin", "Pingvin", "Pinguin"), emoji: "🐧" },
          { id: "ente", label: ml("Ente", "Duck", "Kacsa", "Rață"), emoji: "🦆" },
        ],
        decoyItems: [
          { id: "frosch", label: ml("Frosch", "Frog", "Béka", "Broască"), emoji: "🐸" },
          { id: "hund", label: ml("Hund", "Dog", "Kutya", "Câine"), emoji: "🐕" },
          { id: "katze", label: ml("Katze", "Cat", "Macska", "Pisică"), emoji: "🐈" },
        ],
      },
      {
        id: "bio-5-mr-4",
        title: ml("Insekten", "Insects", "Rovarok", "Insecte"),
        instruction: ml("Merke dir die Insekten.", "Remember the insects.", "Jegyezd meg a rovarokat.", "Reține insectele."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#2e1065", accent: "#e879f9", radar: "#4c1d95" },
        targetItems: [
          { id: "biene", label: ml("Biene", "Bee", "Méh", "Albină"), emoji: "🐝" },
          { id: "käfer", label: ml("Käfer", "Beetle", "Bogár", "Gândac"), emoji: "🪲" },
          { id: "ameise", label: ml("Ameise", "Ant", "Hangya", "Furnică"), emoji: "🐜" },
          { id: "fliege", label: ml("Fliege", "Fly", "Légy", "Muscă"), emoji: "🪰" },
        ],
        decoyItems: [
          { id: "spinne", label: ml("Spinne", "Spider", "Pók", "Păianjen"), emoji: "🕷️" },
          { id: "skorpion", label: ml("Skorpion", "Scorpion", "Skorpió", "Scorpion"), emoji: "🦂" },
          { id: "schnecke", label: ml("Schnecke", "Snail", "Csiga", "Melc"), emoji: "🐌" },
        ],
      },
      {
        id: "bio-5-mr-5",
        title: ml("Lebensräume", "Habitats", "Élőhelyek", "Habitate"),
        instruction: ml("Merke dir die Lebensräume.", "Remember the habitats.", "Jegyezd meg az élőhelyeket.", "Reține habitatele."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#022c22", accent: "#6ee7b7", radar: "#064e3b" },
        targetItems: [
          { id: "wald", label: ml("Wald", "Forest", "Erdő", "Pădure"), emoji: "🌲" },
          { id: "meer", label: ml("Meer", "Ocean", "Tenger", "Ocean"), emoji: "🌊" },
          { id: "wüste", label: ml("Wüste", "Desert", "Sivatag", "Deșert"), emoji: "🏜️" },
          { id: "see", label: ml("See", "Lake", "Tó", "Lac"), emoji: "🏞️" },
        ],
        decoyItems: [
          { id: "haus", label: ml("Haus", "House", "Ház", "Casă"), emoji: "🏠" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "stadt", label: ml("Stadt", "City", "Város", "Oraș"), emoji: "🏙️" },
        ],
      }
    ],
  },
  6: {
    grade: 6,
    meteorCatch: [
      {
        id: "bio-6-mc-1",
        title: ml("Teile eines Ökosystems", "Parts of Ecosystem", "Ökoszisztéma részei", "Părți ecosistem"),
        prompt: ml("Fange Ökosystemteile.", "Catch ecosystem parts.", "Fogj ökoszisztéma részeket.", "Prinde părți ecosistem."),
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#a78bfa", accent: "#7c3aed" },
        correctItems: [
          { id: "produzent", label: ml("Produzent", "Producer", "Termelő", "Producător"), emoji: "🌱" },
          { id: "konsument", label: ml("Konsument", "Consumer", "Fogyasztó", "Consumator"), emoji: "🐇" },
          { id: "destruent", label: ml("Destruent", "Decomposer", "Lebontó", "Descompunător"), emoji: "🍄" },
          { id: "biotop", label: ml("Biotop", "Biotop", "Biotóp", "Biotop"), emoji: "🏞️" },
          { id: "biozönose", label: ml("Biozönose", "Biocenosis", "Biocönózis", "Biocenoză"), emoji: "🤝" },
        ],
        wrongItems: [
          { id: "stadt", label: ml("Stadt", "City", "Város", "Oraș"), emoji: "🏙️" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "computer", label: ml("Computer", "Computer", "Számítógép", "Computer"), emoji: "💻" },
        ],
      },
      {
        id: "bio-6-mc-2",
        title: ml("Destruenten", "Decomposers", "Lebontók", "Descompunători"),
        prompt: ml("Fange Destruenten.", "Catch decomposers.", "Fogj lebontókat.", "Prinde descompunători."),
        goal: 4,
        speed: 5.5,
        theme: { sky: "#1e1b4b", glow: "#f472b6", accent: "#db2777" },
        correctItems: [
          { id: "pilz", label: ml("Pilz", "Fungus", "Gomba", "Ciupercă"), emoji: "🍄" },
          { id: "bakterium", label: ml("Bakterium", "Bacterium", "Baktérium", "Bacterie"), emoji: "🦠" },
          { id: "regenwurm", label: ml("Regenwurm", "Earthworm", "Földigiliszta", "Râmă"), emoji: "🪱" },
          { id: "assel", label: ml("Assel", "Woodlouse", "Ászka", "Oniscidee"), emoji: "🐞" },
        ],
        wrongItems: [
          { id: "gras", label: ml("Gras", "Grass", "Fű", "Iarbă"), emoji: "🌿" },
          { id: "löwe", label: ml("Löwe", "Lion", "Oroszlán", "Leu"), emoji: "🦁" },
          { id: "adler", label: ml("Adler", "Eagle", "Sas", "Vultur"), emoji: "🦅" },
        ],
      },
      {
        id: "bio-6-mc-3",
        title: ml("Produzenten", "Producers", "Termelők", "Producători"),
        prompt: ml("Fange Produzenten.", "Catch producers.", "Fogj termelőket.", "Prinde producători."),
        goal: 4,
        speed: 6,
        theme: { sky: "#064e3b", glow: "#6ee7b7", accent: "#10b981" },
        correctItems: [
          { id: "baum", label: ml("Baum", "Tree", "Fa", "Copac"), emoji: "🌳" },
          { id: "gras", label: ml("Gras", "Grass", "Fű", "Iarbă"), emoji: "🌿" },
          { id: "blume", label: ml("Blume", "Flower", "Virág", "Floare"), emoji: "🌺" },
          { id: "alge", label: ml("Alge", "Algae", "Alga", "Algă"), emoji: "🌱" },
        ],
        wrongItems: [
          { id: "fuchs", label: ml("Fuchs", "Fox", "Róka", "Vulpe"), emoji: "🦊" },
          { id: "pilz", label: ml("Pilz", "Fungus", "Gomba", "Ciupercă"), emoji: "🍄" },
          { id: "wurm", label: ml("Wurm", "Worm", "Féreg", "Vierme"), emoji: "🐛" },
        ],
      },
      {
        id: "bio-6-mc-4",
        title: ml("Körperorgane", "Body Organs", "Testi szervek", "Organe corp"),
        prompt: ml("Fange menschliche Organe.", "Catch human organs.", "Fogj emberi szerveket.", "Prinde organe umane."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#450a0a", glow: "#fca5a5", accent: "#ef4444" },
        correctItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "lunge", label: ml("Lunge", "Lung", "Tüdő", "Plămân"), emoji: "🫁" },
          { id: "gehirn", label: ml("Gehirn", "Brain", "Agy", "Creier"), emoji: "🧠" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
          { id: "niere", label: ml("Niere", "Kidney", "Vese", "Rinichi"), emoji: "🫘" },
        ],
        wrongItems: [
          { id: "blut", label: ml("Blut", "Blood", "Vér", "Sânge"), emoji: "🩸" },
          { id: "knochen", label: ml("Knochen", "Bone", "Csont", "Os"), emoji: "🦴" },
          { id: "zahn", label: ml("Zahn", "Tooth", "Fog", "Dinte"), emoji: "🦷" },
        ],
      },
      {
        id: "bio-6-mc-5",
        title: ml("Atemwege", "Airways", "Légutak", "Căi respiratorii"),
        prompt: ml("Fange Teile der Atemwege.", "Catch airway parts.", "Fogj légúti részeket.", "Prinde căi respiratorii."),
        goal: 4,
        speed: 7,
        theme: { sky: "#1e3a8a", glow: "#93c5fd", accent: "#3b82f6" },
        correctItems: [
          { id: "nase", label: ml("Nase", "Nose", "Orr", "Nas"), emoji: "👃" },
          { id: "luftröhre", label: ml("Luftröhre", "Trachea", "Légcső", "Trahee"), emoji: "🪈" },
          { id: "lunge", label: ml("Lunge", "Lung", "Tüdő", "Plămân"), emoji: "🫁" },
          { id: "bronchien", label: ml("Bronchien", "Bronchi", "Hörgők", "Bronhii"), emoji: "🌿" },
        ],
        wrongItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
          { id: "darm", label: ml("Darm", "Intestine", "Bél", "Intestin"), emoji: "🍝" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "bio-6-os-1",
        title: ml("Fotosynthese vs Zellatmung", "Photosynth vs Resp", "Fotoszintézis vs Légzés", "Fotosinteză vs Resp"),
        instruction: ml("Sortiere zu den Prozessen.", "Sort to processes.", "Rendezd a folyamatokhoz.", "Sortează procesele."),
        theme: { bg: "#1e1b4b", orbit: "#818cf8", accent: "#6366f1" },
        buckets: [
          { id: "foto", label: ml("Fotosynthese", "Photosynthesis", "Fotoszintézis", "Fotosinteză"), color: "#22c55e" },
          { id: "atmung", label: ml("Zellatmung", "Respiration", "Légzés", "Respirație"), color: "#f97316" },
        ],
        items: [
          { id: "sauerstoff", label: ml("Sauerstoffprod.", "O2 prod", "O2 termelés", "Prod. O2"), emoji: "🌬️", bucketId: "foto" },
          { id: "glukose", label: ml("Glukoseprod.", "Glucose prod", "Cukortermelés", "Prod. glucoză"), emoji: "🍬", bucketId: "foto" },
          { id: "co2", label: ml("CO2-Aufnahme", "CO2 uptake", "CO2 felvétel", "Absorbție CO2"), emoji: "💨", bucketId: "foto" },
          { id: "energie", label: ml("Energieabgabe", "Energy release", "Energialeadás", "Elib. energie"), emoji: "⚡", bucketId: "atmung" },
          { id: "mito", label: ml("Mitochondrien", "Mitochondria", "Mitochondrium", "Mitocondrii"), emoji: "🔋", bucketId: "atmung" },
          { id: "chloro", label: ml("Chloroplasten", "Chloroplasts", "Kloroplasztisz", "Cloroplaste"), emoji: "🌿", bucketId: "foto" },
        ],
      },
      {
        id: "bio-6-os-2",
        title: ml("Produzent oder Konsument?", "Producer or Consumer?", "Termelő vagy fogyasztó?", "Producător sau consumator?"),
        instruction: ml("Sortiere nach Ökosystemrolle.", "Sort by ecosystem role.", "Rendezd ökológiai szerep szerint.", "Sortează după rol."),
        theme: { bg: "#064e3b", orbit: "#4ade80", accent: "#22c55e" },
        buckets: [
          { id: "prod", label: ml("Produzent", "Producer", "Termelő", "Producător"), color: "#22c55e" },
          { id: "kons", label: ml("Konsument", "Consumer", "Fogyasztó", "Consumator"), color: "#ef4444" },
        ],
        items: [
          { id: "baum", label: ml("Baum", "Tree", "Fa", "Copac"), emoji: "🌳", bucketId: "prod" },
          { id: "gras", label: ml("Gras", "Grass", "Fű", "Iarbă"), emoji: "🌿", bucketId: "prod" },
          { id: "alge", label: ml("Alge", "Algae", "Alga", "Algă"), emoji: "🌱", bucketId: "prod" },
          { id: "reh", label: ml("Reh", "Deer", "Őz", "Căprioară"), emoji: "🦌", bucketId: "kons" },
          { id: "fuchs", label: ml("Fuchs", "Fox", "Róka", "Vulpe"), emoji: "🦊", bucketId: "kons" },
          { id: "adler", label: ml("Adler", "Eagle", "Sas", "Vultur"), emoji: "🦅", bucketId: "kons" },
        ],
      },
      {
        id: "bio-6-os-3",
        title: ml("Abiotisch vs Biotisch", "Abiotic vs Biotic", "Abiotikus vs Biotikus", "Abiotic vs Biotic"),
        instruction: ml("Sortiere Umweltfaktoren.", "Sort environment factors.", "Rendezd a környezeti tényezőket.", "Sortează factorii de mediu."),
        theme: { bg: "#0f172a", orbit: "#38bdf8", accent: "#0ea5e9" },
        buckets: [
          { id: "abio", label: ml("Abiotisch", "Abiotic", "Abiotikus", "Abiotic"), color: "#9ca3af" },
          { id: "bio", label: ml("Biotisch", "Biotic", "Biotikus", "Biotic"), color: "#22c55e" },
        ],
        items: [
          { id: "licht", label: ml("Licht", "Light", "Fény", "Lumină"), emoji: "☀️", bucketId: "abio" },
          { id: "temp", label: ml("Temperatur", "Temperature", "Hőmérséklet", "Temp"), emoji: "🌡️", bucketId: "abio" },
          { id: "wasser", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧", bucketId: "abio" },
          { id: "feind", label: ml("Fressfeinde", "Predators", "Ragadozók", "Prădători"), emoji: "🐺", bucketId: "bio" },
          { id: "beute", label: ml("Beute", "Prey", "Zsákmány", "Pradă"), emoji: "🐇", bucketId: "bio" },
          { id: "parasit", label: ml("Parasiten", "Parasites", "Paraziták", "Paraziți"), emoji: "🦠", bucketId: "bio" },
        ],
      },
      {
        id: "bio-6-os-4",
        title: ml("Blutgefäße", "Blood Vessels", "Erek", "Vase de sânge"),
        instruction: ml("Vene oder Arterie?", "Vein or Artery?", "Véna vagy Artéria?", "Venă sau Arteră?"),
        theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "arterie", label: ml("Arterie", "Artery", "Artéria", "Arteră"), color: "#ef4444" },
          { id: "vene", label: ml("Vene", "Vein", "Véna", "Venă"), color: "#3b82f6" },
        ],
        items: [
          { id: "weg", label: ml("Vom Herz weg", "Away from heart", "Szívtől el", "De la inimă"), emoji: "📤", bucketId: "arterie" },
          { id: "sauer", label: ml("Meist O2-reich", "Mostly O2-rich", "Oxigéndús", "Bogat în O2"), emoji: "🔴", bucketId: "arterie" },
          { id: "druck", label: ml("Hoher Druck", "High pressure", "Nagy nyomás", "Pres. mare"), emoji: "📈", bucketId: "arterie" },
          { id: "hin", label: ml("Zum Herz hin", "Towards heart", "Szív felé", "Spre inimă"), emoji: "📥", bucketId: "vene" },
          { id: "klappen", label: ml("Hat Klappen", "Has valves", "Billentyűk", "Are valve"), emoji: "🚪", bucketId: "vene" },
          { id: "co2reich", label: ml("Meist CO2-reich", "Mostly CO2-rich", "CO2-dús", "Bogat în CO2"), emoji: "🔵", bucketId: "vene" },
        ],
      },
      {
        id: "bio-6-os-5",
        title: ml("Skelettteile", "Skeleton Parts", "Csontváz részek", "Părți schelet"),
        instruction: ml("Arm oder Bein?", "Arm or Leg?", "Kar vagy Láb?", "Braț sau picior?"),
        theme: { bg: "#1f2937", orbit: "#f3f4f6", accent: "#e5e7eb" },
        buckets: [
          { id: "arm", label: ml("Arm", "Arm", "Kar", "Braț"), color: "#3b82f6" },
          { id: "bein", label: ml("Bein", "Leg", "Láb", "Picior"), color: "#10b981" },
        ],
        items: [
          { id: "elle", label: ml("Elle", "Ulna", "Singcsont", "Ulnă"), emoji: "🦴", bucketId: "arm" },
          { id: "speiche", label: ml("Speiche", "Radius", "Orsócsont", "Radius"), emoji: "🦴", bucketId: "arm" },
          { id: "oberarm", label: ml("Oberarmkn.", "Humerus", "Felkarcsont", "Humerus"), emoji: "💪", bucketId: "arm" },
          { id: "schien", label: ml("Schienbein", "Tibia", "Sípcsont", "Tibie"), emoji: "🦵", bucketId: "bein" },
          { id: "waden", label: ml("Wadenbein", "Fibula", "Szárkapocscsont", "Fibulă"), emoji: "🦵", bucketId: "bein" },
          { id: "oberschenkel", label: ml("Oberschenkel", "Femur", "Combcsont", "Femur"), emoji: "🦵", bucketId: "bein" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "bio-6-sr-1",
        title: ml("Menschlicher Körper", "Human Body", "Emberi test", "Corpul uman"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-6-sr-1-s1",
            title: ml("Blutpumpe", "Blood Pump", "Vérpumpa", "Pompă de sânge"),
            prompt: ml("Welches Organ pumpt Blut?", "Which organ pumps blood?", "Melyik szerv pumpál vért?", "Care organ pompează sânge?"),
            sceneType: "community",
            visual: { icon: "❤️", bg: "#3b1f0f", accent: "#f97316" },
            choices: [
              { id: "a", label: ml("Lunge", "Lung", "Tüdő", "Plămân") },
              { id: "b", label: ml("Leber", "Liver", "Máj", "Ficat") },
              { id: "c", label: ml("Herz", "Heart", "Szív", "Inimă") },
              { id: "d", label: ml("Niere", "Kidney", "Vese", "Rinichi") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch. Das Herz.", "Wrong. Heart.", "Hibás. Szív.", "Greșit. Inima.")
          }
        ]
      },
      {
        id: "bio-6-sr-2",
        title: ml("Atmung", "Respiration", "Légzés", "Respirație"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-6-sr-2-s1",
            title: ml("Gasaustausch", "Gas Exchange", "Gázcsere", "Schimb de gaze"),
            prompt: ml("Wo findet der Gasaustausch statt?", "Where does gas exchange happen?", "Hol történik a gázcsere?", "Unde are loc schimbul de gaze?"),
            sceneType: "nature",
            visual: { icon: "🫁", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Magen", "Stomach", "Gyomor", "Stomac") },
              { id: "b", label: ml("Lungenbläschen", "Alveoli", "Léghólyagok", "Alveole") },
              { id: "c", label: ml("Herz", "Heart", "Szív", "Inimă") },
              { id: "d", label: ml("Luftröhre", "Trachea", "Légcső", "Trahee") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-6-sr-3",
        title: ml("Verdauung", "Digestion", "Emésztés", "Digestie"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-6-sr-3-s1",
            title: ml("Nährstoffe", "Nutrients", "Tápanyagok", "Nutrienți"),
            prompt: ml("Wo werden Nährstoffe meist resorbiert?", "Where are nutrients absorbed?", "Hol szívódnak fel a tápanyagok?", "Unde sunt absorbiți nutrienții?"),
            sceneType: "safety",
            visual: { icon: "🍝", bg: "#451a03", accent: "#b45309" },
            choices: [
              { id: "a", label: ml("Mund", "Mouth", "Száj", "Gură") },
              { id: "b", label: ml("Speiseröhre", "Esophagus", "Nyelőcső", "Esofag") },
              { id: "c", label: ml("Magen", "Stomach", "Gyomor", "Stomac") },
              { id: "d", label: ml("Dünndarm", "Small int.", "Vékonybél", "Intestin subț.") },
            ],
            correctChoiceId: "d",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-6-sr-4",
        title: ml("Ökosystem", "Ecosystem", "Ökoszisztéma", "Ecosistem"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-6-sr-4-s1",
            title: ml("Energie", "Energy", "Energia", "Energie"),
            prompt: ml("Was ist die primäre Energiequelle?", "What is the primary energy source?", "Mi az elsődleges energiaforrás?", "Care e sursa primară de energie?"),
            sceneType: "community",
            visual: { icon: "☀️", bg: "#422006", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Wasser", "Water", "Víz", "Apă") },
              { id: "b", label: ml("Sonne", "Sun", "Nap", "Soare") },
              { id: "c", label: ml("Boden", "Soil", "Talaj", "Sol") },
              { id: "d", label: ml("Wind", "Wind", "Szél", "Vânt") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-6-sr-5",
        title: ml("Fotosynthese", "Photosynthesis", "Fotoszintézis", "Fotosinteză"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-6-sr-5-s1",
            title: ml("Blattgrün", "Green leaf", "Levélzöld", "Verde de frunză"),
            prompt: ml("Welcher Stoff macht Blätter grün?", "What makes leaves green?", "Mi teszi zölddé a levelet?", "Ce face frunzele verzi?"),
            sceneType: "nature",
            visual: { icon: "🌿", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Zellulose", "Cellulose", "Cellulóz", "Celuloză") },
              { id: "b", label: ml("Chlorophyll", "Chlorophyll", "Klorofill", "Clorofilă") },
              { id: "c", label: ml("Melanin", "Melanin", "Melanin", "Melanină") },
              { id: "d", label: ml("Keratin", "Keratin", "Keratin", "Keratină") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "bio-6-cb-1",
        title: ml("Verdauungsorgane", "Digestive Organs", "Emésztőszervek", "Organe digestive"),
        instruction: ml("Ordne die Reihenfolge.", "Order the sequence.", "Rendezd a sorrendet.", "Ordonează secvența."),
        hint: ml("Nahrung beginnt im Mund.", "Food starts in mouth.", "A táplálék a szájban kezd.", "Mâncarea începe în gură."),
        theme: { bg: "#1c1917", accent: "#fb923c", card: "#292524" },
        parts: [
          { id: "mund", label: ml("Mund", "Mouth", "Száj", "Gură"), emoji: "👄" },
          { id: "speise", label: ml("Speiseröhre", "Esophagus", "Nyelőcső", "Esofag"), emoji: "🪈" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
          { id: "dünn", label: ml("Dünndarm", "Small Intestine", "Vékonybél", "Intestin subțire"), emoji: "🍝" },
          { id: "dick", label: ml("Dickdarm", "Large Intestine", "Vastagbél", "Intestin gros"), emoji: "💩" },
        ],
        slots: [
          { id: "s1", label: "1. Start" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5. Ende" },
        ],
        solution: ["mund", "speise", "magen", "dünn", "dick"],
      },
      {
        id: "bio-6-cb-2",
        title: ml("Atemwege", "Airways", "Légutak", "Căi respiratorii"),
        instruction: ml("Weg der Luft.", "Path of air.", "A levegő útja.", "Traseul aerului."),
        hint: ml("Von Nase zu Lunge.", "From nose to lung.", "Orrtól tüdőig.", "De la nas la plămâni."),
        theme: { bg: "#1e3a8a", accent: "#60a5fa", card: "#1e40af" },
        parts: [
          { id: "nase", label: ml("Nase", "Nose", "Orr", "Nas"), emoji: "👃" },
          { id: "kehlkopf", label: ml("Kehlkopf", "Larynx", "Gége", "Laringe"), emoji: "🗣️" },
          { id: "luft", label: ml("Luftröhre", "Trachea", "Légcső", "Trahee"), emoji: "🪈" },
          { id: "bronchien", label: ml("Bronchien", "Bronchi", "Hörgők", "Bronhii"), emoji: "🌿" },
          { id: "bläschen", label: ml("Lungenbläschen", "Alveoli", "Léghólyagok", "Alveole"), emoji: "🫧" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5." },
        ],
        solution: ["nase", "kehlkopf", "luft", "bronchien", "bläschen"],
      },
      {
        id: "bio-6-cb-3",
        title: ml("Nahrungskette 2", "Food Chain 2", "Tápláléklánc 2", "Lanț trofic 2"),
        instruction: ml("Ordne wer wen isst.", "Order who eats whom.", "Rendezd ki kit eszik.", "Ordonează cine pe cine mănâncă."),
        hint: ml("Baum -> Insekt -> Vogel", "Tree -> Insect -> Bird", "Fa -> Rovar -> Madár", "Copac -> Insectă -> Pasăre"),
        theme: { bg: "#064e3b", accent: "#4ade80", card: "#065f46" },
        parts: [
          { id: "baum", label: ml("Baum", "Tree", "Fa", "Copac"), emoji: "🌳" },
          { id: "raupe", label: ml("Raupe", "Caterpillar", "Hernyó", "Omidă"), emoji: "🐛" },
          { id: "vogel", label: ml("Vogel", "Bird", "Madár", "Pasăre"), emoji: "🐦" },
          { id: "adler", label: ml("Adler", "Eagle", "Sas", "Vultur"), emoji: "🦅" },
        ],
        slots: [
          { id: "s1", label: "1. Prod." },
          { id: "s2", label: "2. Kons I" },
          { id: "s3", label: "3. Kons II" },
          { id: "s4", label: "4. Kons III" },
        ],
        solution: ["baum", "raupe", "vogel", "adler"],
      },
      {
        id: "bio-6-cb-4",
        title: ml("Blutkreislauf", "Blood Circuit", "Vérkeringés", "Sistem circulator"),
        instruction: ml("Weg des Blutes (Lunge)", "Blood path (Lung)", "Vér útja (Tüdő)", "Traseul sângelui (Plămân)"),
        hint: ml("Herz -> Lunge -> Herz", "Heart -> Lung -> Heart", "Szív -> Tüdő -> Szív", "Inimă -> Plămân -> Inimă"),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "kammer", label: ml("Rechte Kammer", "Right ventricle", "Jobb kamra", "Ventricul drept"), emoji: "❤️" },
          { id: "arterie", label: ml("Lungenarterie", "Pulm. artery", "Tüdőartéria", "Art. pulm."), emoji: "🔴" },
          { id: "lunge", label: ml("Lunge", "Lung", "Tüdő", "Plămân"), emoji: "🫁" },
          { id: "vene", label: ml("Lungenvene", "Pulm. vein", "Tüdővéna", "Venă pulm."), emoji: "🔵" },
          { id: "vorhof", label: ml("Linker Vorhof", "Left atrium", "Bal pitvar", "Atriu stâng"), emoji: "❤️" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5." },
        ],
        solution: ["kammer", "arterie", "lunge", "vene", "vorhof"],
      },
      {
        id: "bio-6-cb-5",
        title: ml("Stockwerke des Waldes", "Forest Layers", "Erdőszintek", "Straturi pădure"),
        instruction: ml("Von unten nach oben.", "Bottom to top.", "Alulról felfelé.", "De jos în sus."),
        hint: ml("Moos ist ganz unten.", "Moss is at the bottom.", "A moha van legalul.", "Mușchiul e cel mai jos."),
        theme: { bg: "#022c22", accent: "#10b981", card: "#064e3b" },
        parts: [
          { id: "moos", label: ml("Moosschicht", "Moss layer", "Mohaszint", "Strat mușchi"), emoji: "🪨" },
          { id: "kraut", label: ml("Krautschicht", "Herb layer", "Gyepszint", "Strat ierburi"), emoji: "🌿" },
          { id: "strauch", label: ml("Strauchschicht", "Shrub layer", "Cserjeszint", "Strat arbuști"), emoji: "🍃" },
          { id: "baum", label: ml("Baumschicht", "Tree layer", "Lombkoronaszint", "Strat copaci"), emoji: "🌳" },
        ],
        slots: [
          { id: "s1", label: "1. Boden" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Krone" },
        ],
        solution: ["moos", "kraut", "strauch", "baum"],
      }
    ],
    memoryRadar: [
      {
        id: "bio-6-mr-1",
        title: ml("Organsysteme", "Organ Systems", "Szervrendszerek", "Sisteme organe"),
        instruction: ml("Merke Organsysteme.", "Remember systems.", "Jegyezd meg a rendszereket.", "Reține sistemele."),
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#1e1b4b", accent: "#818cf8", radar: "#6366f1" },
        targetItems: [
          { id: "atmung", label: ml("Atmungssystem", "Respiratory", "Légzőrendszer", "Sist. respirator"), emoji: "🌬️" },
          { id: "kreislauf", label: ml("Kreislaufsystem", "Circulatory", "Keringési r.", "Sist. circulator"), emoji: "❤️" },
          { id: "nerven", label: ml("Nervensystem", "Nervous", "Idegrendszer", "Sist. nervos"), emoji: "🧠" },
          { id: "verdauung", label: ml("Verdauungssystem", "Digestive", "Emésztőrendszer", "Sist. digestiv"), emoji: "🍔" },
          { id: "skelett", label: ml("Skelettsystem", "Skeletal", "Csontvázrendszer", "Sist. scheletic"), emoji: "🦴" },
        ],
        decoyItems: [
          { id: "muskel", label: ml("Muskelsystem", "Muscular", "Izomrendszer", "Sist. muscular"), emoji: "💪" },
          { id: "hormon", label: ml("Hormonsystem", "Endocrine", "Hormonrendszer", "Sist. endocrin"), emoji: "🧪" },
          { id: "lymph", label: ml("Lymphsystem", "Lymphatic", "Nyirokrendszer", "Sist. limfatic"), emoji: "💧" },
        ],
      },
      {
        id: "bio-6-mr-2",
        title: ml("Destruenten", "Decomposers", "Lebontók", "Descompunători"),
        instruction: ml("Merke Destruenten.", "Remember decomposers.", "Jegyezd meg a lebontókat.", "Reține descompunătorii."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#27272a", accent: "#a1a1aa", radar: "#3f3f46" },
        targetItems: [
          { id: "pilz", label: ml("Pilz", "Fungus", "Gomba", "Ciupercă"), emoji: "🍄" },
          { id: "regenwurm", label: ml("Regenwurm", "Earthworm", "Földigiliszta", "Râmă"), emoji: "🪱" },
          { id: "assel", label: ml("Assel", "Woodlouse", "Ászka", "Oniscidee"), emoji: "🐞" },
          { id: "bakterien", label: ml("Bakterien", "Bacteria", "Baktérium", "Bacterii"), emoji: "🦠" },
        ],
        decoyItems: [
          { id: "baum", label: ml("Baum", "Tree", "Fa", "Copac"), emoji: "🌳" },
          { id: "gras", label: ml("Gras", "Grass", "Fű", "Iarbă"), emoji: "🌿" },
          { id: "fuchs", label: ml("Fuchs", "Fox", "Róka", "Vulpe"), emoji: "🦊" },
        ],
      },
      {
        id: "bio-6-mr-3",
        title: ml("Knochen", "Bones", "Csontok", "Oase"),
        instruction: ml("Merke die Knochen.", "Remember the bones.", "Jegyezd meg a csontokat.", "Reține oasele."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1f2937", accent: "#d1d5db", radar: "#374151" },
        targetItems: [
          { id: "schädel", label: ml("Schädel", "Skull", "Koponya", "Craniu"), emoji: "💀" },
          { id: "rippe", label: ml("Rippe", "Rib", "Borda", "Coastă"), emoji: "🦴" },
          { id: "becken", label: ml("Becken", "Pelvis", "Medence", "Pelvis"), emoji: "🦴" },
          { id: "femur", label: ml("Oberschenkel", "Femur", "Combcsont", "Femur"), emoji: "🦵" },
        ],
        decoyItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
          { id: "muskel", label: ml("Muskel", "Muscle", "Izom", "Mușchi"), emoji: "💪" },
        ],
      },
      {
        id: "bio-6-mr-4",
        title: ml("Sinnesorgane", "Sense Organs", "Érzékszervek", "Organe de simț"),
        instruction: ml("Merke die Organe.", "Remember organs.", "Jegyezd meg a szerveket.", "Reține organele."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#3b82f6", radar: "#1d4ed8" },
        targetItems: [
          { id: "auge", label: ml("Auge", "Eye", "Szem", "Ochi"), emoji: "👁️" },
          { id: "ohr", label: ml("Ohr", "Ear", "Fül", "Ureche"), emoji: "👂" },
          { id: "nase", label: ml("Nase", "Nose", "Orr", "Nas"), emoji: "👃" },
          { id: "zunge", label: ml("Zunge", "Tongue", "Nyelv", "Limbă"), emoji: "👅" },
        ],
        decoyItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "bein", label: ml("Bein", "Leg", "Láb", "Picior"), emoji: "🦵" },
          { id: "arm", label: ml("Arm", "Arm", "Kar", "Braț"), emoji: "💪" },
        ],
      },
      {
        id: "bio-6-mr-5",
        title: ml("Waldtiere", "Forest Animals", "Erdei állatok", "Animale pădure"),
        instruction: ml("Merke die Tiere.", "Remember animals.", "Jegyezd meg az állatokat.", "Reține animalele."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#34d399", radar: "#065f46" },
        targetItems: [
          { id: "reh", label: ml("Reh", "Deer", "Őz", "Căprioară"), emoji: "🦌" },
          { id: "fuchs", label: ml("Fuchs", "Fox", "Róka", "Vulpe"), emoji: "🦊" },
          { id: "wildschwein", label: ml("Wildschwein", "Boar", "Vaddisznó", "Mistreț"), emoji: "🐗" },
          { id: "eule", label: ml("Eule", "Owl", "Bagoly", "Bufniță"), emoji: "🦉" },
        ],
        decoyItems: [
          { id: "löwe", label: ml("Löwe", "Lion", "Oroszlán", "Leu"), emoji: "🦁" },
          { id: "elefant", label: ml("Elefant", "Elephant", "Elefánt", "Elefant"), emoji: "🐘" },
          { id: "hai", label: ml("Hai", "Shark", "Cápa", "Rechin"), emoji: "🦈" },
        ],
      }
    ],
  },
  7: {
    grade: 7,
    meteorCatch: [
      {
        id: "bio-7-mc-1",
        title: ml("Begriffe Genetik", "Genetics Terms", "Genetikai Fogalmak", "Termeni Genetică"),
        prompt: ml("Fange Genetikbegriffe.", "Catch genetics terms.", "Fogj genetikai fogalmakat.", "Prinde termeni de genetică."),
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#34d399", accent: "#10b981" },
        correctItems: [
          { id: "dna", label: ml("DNA", "DNA", "DNS", "ADN"), emoji: "🧬" },
          { id: "gen", label: ml("Gen", "Gene", "Gén", "Genă"), emoji: "🔗" },
          { id: "chromosom", label: ml("Chromosom", "Chromosome", "Kromoszóma", "Cromozom"), emoji: "✖️" },
          { id: "allel", label: ml("Allel", "Allele", "Allél", "Alelă"), emoji: "🅰️" },
          { id: "mutation", label: ml("Mutation", "Mutation", "Mutáció", "Mutație"), emoji: "💥" },
        ],
        wrongItems: [
          { id: "zelle", label: ml("Zelle", "Cell", "Sejt", "Celulă"), emoji: "🔬" },
          { id: "organ", label: ml("Organ", "Organ", "Szerv", "Organ"), emoji: "🫁" },
          { id: "gewebe", label: ml("Gewebe", "Tissue", "Szövet", "Țesut"), emoji: "🧶" },
        ],
      },
      {
        id: "bio-7-mc-2",
        title: ml("Evolutionsfaktoren", "Evolution Factors", "Evolúciós tényezők", "Factori de evoluție"),
        prompt: ml("Fange Evolutionsfaktoren.", "Catch evolution factors.", "Fogj evolúciós tényezőket.", "Prinde factori de evoluție."),
        goal: 4,
        speed: 5.5,
        theme: { sky: "#1e1b4b", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "mutation", label: ml("Mutation", "Mutation", "Mutáció", "Mutație"), emoji: "💥" },
          { id: "selektion", label: ml("Selektion", "Selection", "Szelekció", "Selecție"), emoji: "🎯" },
          { id: "isolation", label: ml("Isolation", "Isolation", "Izoláció", "Izolare"), emoji: "🏝️" },
          { id: "gendrift", label: ml("Gendrift", "Genetic drift", "Géndrift", "Derivă genetică"), emoji: "🎲" },
        ],
        wrongItems: [
          { id: "verdauung", label: ml("Verdauung", "Digestion", "Emésztés", "Digestie"), emoji: "🍝" },
          { id: "atmung", label: ml("Atmung", "Respiration", "Légzés", "Respirație"), emoji: "🫁" },
          { id: "muskel", label: ml("Muskeln", "Muscles", "Izmok", "Mușchi"), emoji: "💪" },
        ],
      },
      {
        id: "bio-7-mc-3",
        title: ml("Sinnesorgane", "Sense Organs", "Érzékszervek", "Organe de simț"),
        prompt: ml("Fange Sinnesorgane ein.", "Catch sense organs.", "Fogj be érzékszerveket.", "Prinde organe de simț."),
        goal: 5,
        speed: 6,
        theme: { sky: "#4c1d95", glow: "#e879f9", accent: "#c084fc" },
        correctItems: [
          { id: "auge", label: ml("Auge", "Eye", "Szem", "Ochi"), emoji: "👁️" },
          { id: "ohr", label: ml("Ohr", "Ear", "Fül", "Ureche"), emoji: "👂" },
          { id: "nase", label: ml("Nase", "Nose", "Orr", "Nas"), emoji: "👃" },
          { id: "zunge", label: ml("Zunge", "Tongue", "Nyelv", "Limbă"), emoji: "👅" },
          { id: "haut", label: ml("Haut", "Skin", "Bőr", "Piele"), emoji: "🖐️" },
        ],
        wrongItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "lunge", label: ml("Lunge", "Lung", "Tüdő", "Plămân"), emoji: "🫁" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
        ],
      },
      {
        id: "bio-7-mc-4",
        title: ml("Auge Teile", "Eye Parts", "Szem részei", "Părți ochi"),
        prompt: ml("Fange Teile des Auges.", "Catch parts of eye.", "Fogj szemrészeket.", "Prinde părți ochi."),
        goal: 4,
        speed: 6.5,
        theme: { sky: "#1e3a8a", glow: "#60a5fa", accent: "#3b82f6" },
        correctItems: [
          { id: "linse", label: ml("Linse", "Lens", "Szemlencse", "Cristalin"), emoji: "🔍" },
          { id: "pupille", label: ml("Puppe", "Pupil", "Pupilla", "Pupilă"), emoji: "⚫" },
          { id: "netzhaut", label: ml("Netzhaut", "Retina", "Retina", "Retină"), emoji: "🕸️" },
          { id: "iris", label: ml("Iris", "Iris", "Írisz", "Iris"), emoji: "👁️" },
        ],
        wrongItems: [
          { id: "trommel", label: ml("Trommelfell", "Eardrum", "Dobhártya", "Timpane"), emoji: "🥁" },
          { id: "schnecke", label: ml("Hörschnecke", "Cochlea", "Csiga", "Melc"), emoji: "🐌" },
          { id: "nerv", label: ml("Riechnerv", "Olfactory", "Szaglóideg", "Nerv olf."), emoji: "👃" },
        ],
      },
      {
        id: "bio-7-mc-5",
        title: ml("Ohr Teile", "Ear Parts", "Fül részei", "Părți ureche"),
        prompt: ml("Fange Teile des Ohres.", "Catch parts of ear.", "Fogj fülrészeket.", "Prinde părți ureche."),
        goal: 4,
        speed: 7,
        theme: { sky: "#064e3b", glow: "#34d399", accent: "#10b981" },
        correctItems: [
          { id: "ohrmuschel", label: ml("Ohrmuschel", "Pinna", "Fülkagyló", "Pavilion"), emoji: "👂" },
          { id: "trommelfell", label: ml("Trommelfell", "Eardrum", "Dobhártya", "Timpane"), emoji: "🥁" },
          { id: "gehörknöchel", label: ml("Gehörknöch.", "Ossicles", "Hallócsont", "Osișoare"), emoji: "🦴" },
          { id: "schnecke", label: ml("Schnecke", "Cochlea", "Csiga", "Melc"), emoji: "🐌" },
        ],
        wrongItems: [
          { id: "linse", label: ml("Linse", "Lens", "Lencse", "Cristalin"), emoji: "🔍" },
          { id: "netzhaut", label: ml("Netzhaut", "Retina", "Retina", "Retină"), emoji: "🕸️" },
          { id: "pupille", label: ml("Pupille", "Pupil", "Pupilla", "Pupilă"), emoji: "⚫" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "bio-7-os-1",
        title: ml("Evo vs Genetik", "Evo vs Gen", "Evo vs Gen", "Evo vs Gen"),
        instruction: ml("Sortiere Begriffe.", "Sort terms.", "Rendezd a fogalmakat.", "Sortează termenii."),
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "evo", label: ml("Evolution", "Evolution", "Evolúció", "Evoluție"), color: "#ef4444" },
          { id: "gen", label: ml("Genetik", "Genetics", "Genetika", "Genetică"), color: "#3b82f6" },
        ],
        items: [
          { id: "nat_sel", label: ml("Selektion", "Selection", "Szelekció", "Selecție"), emoji: "🌿", bucketId: "evo" },
          { id: "vererbung", label: ml("Vererbung", "Inheritance", "Öröklődés", "Ereditate"), emoji: "👨‍👩‍👧", bucketId: "gen" },
          { id: "anpassung", label: ml("Anpassung", "Adaptation", "Alkalmazkodás", "Adaptare"), emoji: "🦎", bucketId: "evo" },
          { id: "dna", label: ml("DNA-Replik.", "DNA Rep.", "DNS-replikáció", "Repl. ADN"), emoji: "🧬", bucketId: "gen" },
          { id: "arten", label: ml("Artenvielfalt", "Biodiversity", "Fajgazdagság", "Biodiversitate"), emoji: "🦋", bucketId: "evo" },
          { id: "genom", label: ml("Genom", "Genome", "Genom", "Genom"), emoji: "📖", bucketId: "gen" },
        ],
      },
      {
        id: "bio-7-os-2",
        title: ml("Mitose vs Meiose", "Mitosis vs Meiosis", "Mitózis vs Meiózis", "Mitoză vs Meioză"),
        instruction: ml("Sortiere die Zellteilung.", "Sort cell division.", "Rendezd a sejtosztódást.", "Sortează diviziunea."),
        theme: { bg: "#1e1b4b", orbit: "#c084fc", accent: "#a855f7" },
        buckets: [
          { id: "mitose", label: ml("Mitose", "Mitosis", "Mitózis", "Mitoză"), color: "#3b82f6" },
          { id: "meiose", label: ml("Meiose", "Meiosis", "Meiózis", "Meioză"), color: "#ef4444" },
        ],
        items: [
          { id: "2zellen", label: ml("2 Zellen", "2 cells", "2 sejt", "2 celule"), emoji: "✌️", bucketId: "mitose" },
          { id: "4zellen", label: ml("4 Zellen", "4 cells", "4 sejt", "4 celule"), emoji: "🖐️", bucketId: "meiose" },
          { id: "diploid", label: ml("Diploid", "Diploid", "Diploid", "Diploid"), emoji: "2️⃣", bucketId: "mitose" },
          { id: "haploid", label: ml("Haploid", "Haploid", "Haploid", "Haploid"), emoji: "1️⃣", bucketId: "meiose" },
          { id: "koerper", label: ml("Körperzellen", "Body cells", "Testsejtek", "Cel. corp."), emoji: "💪", bucketId: "mitose" },
          { id: "geschlecht", label: ml("Keimzellen", "Sex cells", "Ivarsejtek", "Cel. sexuale"), emoji: "🥚", bucketId: "meiose" },
        ],
      },
      {
        id: "bio-7-os-3",
        title: ml("Dominant vs Rezessiv", "Dominant vs Recessive", "Domináns vs Recesszív", "Dominant vs Recesiv"),
        instruction: ml("Sortiere Allele.", "Sort alleles.", "Rendezd az alléleket.", "Sortează alelele."),
        theme: { bg: "#022c22", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "dom", label: ml("Dominant", "Dominant", "Domináns", "Dominant"), color: "#ef4444" },
          { id: "rez", label: ml("Rezessiv", "Recessive", "Recesszív", "Recesiv"), color: "#3b82f6" },
        ],
        items: [
          { id: "gross_a", label: ml("A", "A", "A", "A"), emoji: "🅰️", bucketId: "dom" },
          { id: "gross_b", label: ml("B", "B", "B", "B"), emoji: "🅱️", bucketId: "dom" },
          { id: "setzt", label: ml("Setzt sich durch", "Prevails", "Érvényesül", "Prevalează"), emoji: "💪", bucketId: "dom" },
          { id: "klein_a", label: ml("a", "a", "a", "a"), emoji: "🅰️", bucketId: "rez" },
          { id: "klein_b", label: ml("b", "b", "b", "b"), emoji: "🅱️", bucketId: "rez" },
          { id: "unterliegt", label: ml("Tritt zurück", "Recedes", "Háttérbe szorul", "Se retrage"), emoji: "📉", bucketId: "rez" },
        ],
      },
      {
        id: "bio-7-os-4",
        title: ml("Auge oder Ohr?", "Eye or Ear?", "Szem vagy fül?", "Ochi sau ureche?"),
        instruction: ml("Ordne die Teile zu.", "Assign the parts.", "Rendezd a részeket.", "Asignează părțile."),
        theme: { bg: "#450a0a", orbit: "#fca5a5", accent: "#ef4444" },
        buckets: [
          { id: "auge", label: ml("Auge", "Eye", "Szem", "Ochi"), color: "#3b82f6" },
          { id: "ohr", label: ml("Ohr", "Ear", "Fül", "Ureche"), color: "#f59e0b" },
        ],
        items: [
          { id: "linse", label: ml("Linse", "Lens", "Lencse", "Cristalin"), emoji: "🔍", bucketId: "auge" },
          { id: "retina", label: ml("Netzhaut", "Retina", "Retina", "Retină"), emoji: "🕸️", bucketId: "auge" },
          { id: "iris", label: ml("Iris", "Iris", "Írisz", "Iris"), emoji: "👁️", bucketId: "auge" },
          { id: "trommel", label: ml("Trommelfell", "Eardrum", "Dobhártya", "Timpane"), emoji: "🥁", bucketId: "ohr" },
          { id: "schnecke", label: ml("Schnecke", "Cochlea", "Csiga", "Melc"), emoji: "🐌", bucketId: "ohr" },
          { id: "knöchel", label: ml("Gehörknöchel", "Ossicles", "Hallócsont", "Osișoare"), emoji: "🦴", bucketId: "ohr" },
        ],
      },
      {
        id: "bio-7-os-5",
        title: ml("Nah oder Fern?", "Near or Far?", "Közel vagy távol?", "Aproape sau departe?"),
        instruction: ml("Akkommodation der Linse.", "Lens accommodation.", "Lencse alkalmazkodása.", "Acomodarea cristalinului."),
        theme: { bg: "#1f2937", orbit: "#d1d5db", accent: "#9ca3af" },
        buckets: [
          { id: "nah", label: ml("Nahsehen", "Near vision", "Közelre", "Vedere de aproape"), color: "#3b82f6" },
          { id: "fern", label: ml("Fernsehen", "Far vision", "Távolra", "Vedere de departe"), color: "#10b981" },
        ],
        items: [
          { id: "kugel", label: ml("Linse kugelig", "Lens round", "Gömbölyű", "Rotund"), emoji: "⚪", bucketId: "nah" },
          { id: "muskel_nah", label: ml("Ziliarmuskel eng", "Muscle tight", "Izom feszült", "Mușchi strâns"), emoji: "💪", bucketId: "nah" },
          { id: "flach", label: ml("Linse flach", "Lens flat", "Lapos", "Plat"), emoji: "➖", bucketId: "fern" },
          { id: "muskel_fern", label: ml("Ziliarmuskel weit", "Muscle relaxed", "Izom laza", "Mușchi relaxat"), emoji: "🧘", bucketId: "fern" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "bio-7-sr-1",
        title: ml("Sinne", "Senses", "Érzékek", "Simțuri"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-7-sr-1-s1",
            title: ml("Hören", "Hearing", "Hallás", "Auz"),
            prompt: ml("Welches Organ ist zuständig?", "Which organ is responsible?", "Melyik szerv felelős?", "Care organ este responsabil?"),
            sceneType: "nature",
            visual: { icon: "👂", bg: "#0a1a0a", accent: "#22c55e" },
            choices: [
              { id: "a", label: ml("Auge", "Eye", "Szem", "Ochi") },
              { id: "b", label: ml("Nase", "Nose", "Orr", "Nas") },
              { id: "c", label: ml("Ohr", "Ear", "Fül", "Ureche") },
              { id: "d", label: ml("Zunge", "Tongue", "Nyelv", "Limbă") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-7-sr-2",
        title: ml("Auge", "Eye", "Szem", "Ochi"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-7-sr-2-s1",
            title: ml("Lichtblende", "Aperture", "Fényrekesz", "Diafragmă"),
            prompt: ml("Was reguliert den Lichteinfall?", "What regulates light?", "Mi szabályozza a fényt?", "Ce reglează lumina?"),
            sceneType: "community",
            visual: { icon: "👁️", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Linse", "Lens", "Lencse", "Cristalin") },
              { id: "b", label: ml("Iris / Pupille", "Iris / Pupil", "Írisz / Pupilla", "Iris / Pupilă") },
              { id: "c", label: ml("Netzhaut", "Retina", "Retina", "Retină") },
              { id: "d", label: ml("Hornhaut", "Cornea", "Szaruhártya", "Cornee") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-7-sr-3",
        title: ml("Genetik", "Genetics", "Genetika", "Genetică"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-7-sr-3-s1",
            title: ml("Erbinformation", "Heredity", "Örökítőanyag", "Informație gen."),
            prompt: ml("Wo liegt die DNA?", "Where is DNA located?", "Hol van a DNS?", "Unde se află ADN-ul?"),
            sceneType: "safety",
            visual: { icon: "🧬", bg: "#2e1065", accent: "#c084fc" },
            choices: [
              { id: "a", label: ml("Zellmembran", "Cell membrane", "Sejthártya", "Membr. celulară") },
              { id: "b", label: ml("Zellkern", "Nucleus", "Sejtmag", "Nucleu") },
              { id: "c", label: ml("Vakuole", "Vacuole", "Vakuólum", "Vacuolă") },
              { id: "d", label: ml("Mitochondrium", "Mitochondria", "Mitochondrium", "Mitocondrie") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-7-sr-4",
        title: ml("Mendel", "Mendel", "Mendel", "Mendel"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-7-sr-4-s1",
            title: ml("Regeln", "Rules", "Szabályok", "Reguli"),
            prompt: ml("Wie heißen die Vererbungsregeln?", "What are inheritance rules?", "Hogy hívják a szabályokat?", "Cum se numesc regulile?"),
            sceneType: "nature",
            visual: { icon: "🌱", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Darwin-Regeln", "Darwin's", "Darwin szabályai", "Reg. Darwin") },
              { id: "b", label: ml("Newton-Gesetze", "Newton's", "Newton törv.", "Legile Newton") },
              { id: "c", label: ml("Mendelsche Regeln", "Mendel's", "Mendel-szabályok", "Legile Mendel") },
              { id: "d", label: ml("Bohr-Gesetze", "Bohr's", "Bohr-törvények", "Legile Bohr") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-7-sr-5",
        title: ml("Evolution", "Evolution", "Evolúció", "Evoluție"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-7-sr-5-s1",
            title: ml("Theorie", "Theory", "Elmélet", "Teorie"),
            prompt: ml("Wer begründete die Evolutionstherie?", "Who founded ev. theory?", "Ki alapította?", "Cine a fondat?"),
            sceneType: "community",
            visual: { icon: "📖", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: "Charles Darwin" },
              { id: "b", label: "Albert Einstein" },
              { id: "c", label: "Isaac Newton" },
              { id: "d", label: "Gregor Mendel" },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "bio-7-cb-1",
        title: ml("Entwicklung", "Development", "Fejlődés", "Dezvoltare"),
        instruction: ml("Ordne chronologisch.", "Order chronologically.", "Rendezd időrendben.", "Ordonează cronologic."),
        hint: ml("Einzeller zuerst.", "Single-cells first.", "Egysejtűek elöl.", "Unicelulare la început."),
        theme: { bg: "#0f172a", accent: "#34d399", card: "#0d3321" },
        parts: [
          { id: "einzeller", label: ml("Einzeller", "Single-celled", "Egysejtűek", "Unicelulare"), emoji: "🦠" },
          { id: "fische", label: ml("Fische", "Fishes", "Halak", "Pești"), emoji: "🐟" },
          { id: "amphibien", label: ml("Amphibien", "Amphibians", "Kétéltűek", "Amfibieni"), emoji: "🐸" },
          { id: "reptilien", label: ml("Reptilien", "Reptiles", "Hüllők", "Reptile"), emoji: "🐍" },
          { id: "säugetiere", label: ml("Säugetiere", "Mammals", "Emlősök", "Mamifere"), emoji: "🐄" },
        ],
        slots: [
          { id: "s1", label: "1. Früh/Early" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5. Spät/Late" },
        ],
        solution: ["einzeller", "fische", "amphibien", "reptilien", "säugetiere"],
      },
      {
        id: "bio-7-cb-2",
        title: ml("Mendel Gen", "Mendel Gen", "Mendel Gen", "Mendel Gen"),
        instruction: ml("Ordne von groß nach klein.", "Large to small.", "Nagytól a kicsiig.", "Mare la mic."),
        hint: ml("Zelle ist am größten.", "Cell is largest.", "A sejt a legnagyobb.", "Celula e cea mai mare."),
        theme: { bg: "#1e1b4b", accent: "#c084fc", card: "#312e81" },
        parts: [
          { id: "zelle", label: ml("Zelle", "Cell", "Sejt", "Celulă"), emoji: "🔬" },
          { id: "kern", label: ml("Zellkern", "Nucleus", "Sejtmag", "Nucleu"), emoji: "⚛️" },
          { id: "chromosom", label: ml("Chromosom", "Chromosome", "Kromoszóma", "Cromozom"), emoji: "✖️" },
          { id: "dna", label: ml("DNA", "DNA", "DNS", "ADN"), emoji: "🧬" },
          { id: "gen", label: ml("Gen", "Gene", "Gén", "Genă"), emoji: "🔗" },
        ],
        slots: [
          { id: "s1", label: "1. Größtes/Largest" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5. Kleinstes/Smallest" },
        ],
        solution: ["zelle", "kern", "chromosom", "dna", "gen"],
      },
      {
        id: "bio-7-cb-3",
        title: ml("Sehvorgang", "Vision Process", "Látás folyamata", "Proces vizual"),
        instruction: ml("Weg des Lichts.", "Path of light.", "A fény útja.", "Calea luminii."),
        hint: ml("Hornhaut zuerst.", "Cornea first.", "Szaruhártya először.", "Corneea prima."),
        theme: { bg: "#064e3b", accent: "#34d399", card: "#022c22" },
        parts: [
          { id: "horn", label: ml("Hornhaut", "Cornea", "Szaruhártya", "Cornee"), emoji: "🛡️" },
          { id: "pupille", label: ml("Pupille", "Pupil", "Pupilla", "Pupilă"), emoji: "⚫" },
          { id: "linse", label: ml("Linse", "Lens", "Lencse", "Cristalin"), emoji: "🔍" },
          { id: "netzhaut", label: ml("Netzhaut", "Retina", "Retina", "Retină"), emoji: "🕸️" },
          { id: "nerv", label: ml("Sehnerv", "Optic nerve", "Látóideg", "Nerv optic"), emoji: "⚡" },
        ],
        slots: [
          { id: "s1", label: "1. Außen" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5. Innen" },
        ],
        solution: ["horn", "pupille", "linse", "netzhaut", "nerv"],
      },
      {
        id: "bio-7-cb-4",
        title: ml("Hörvorgang", "Hearing Process", "Hallás folyamata", "Proces auditiv"),
        instruction: ml("Weg des Schalls.", "Path of sound.", "A hang útja.", "Calea sunetului."),
        hint: ml("Ohrmuschel zuerst.", "Pinna first.", "Fülkagyló először.", "Pavilionul prim."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "muschel", label: ml("Ohrmuschel", "Pinna", "Fülkagyló", "Pavilion"), emoji: "👂" },
          { id: "gang", label: ml("Gehörgang", "Ear canal", "Hallójárat", "Canal auditiv"), emoji: "🕳️" },
          { id: "trommel", label: ml("Trommelfell", "Eardrum", "Dobhártya", "Timpane"), emoji: "🥁" },
          { id: "knöchel", label: ml("Gehörknöch.", "Ossicles", "Hallócsont.", "Osișoare"), emoji: "🦴" },
          { id: "schnecke", label: ml("Schnecke", "Cochlea", "Csiga", "Melc"), emoji: "🐌" },
        ],
        slots: [
          { id: "s1", label: "1. Außen" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5. Innen" },
        ],
        solution: ["muschel", "gang", "trommel", "knöchel", "schnecke"],
      },
      {
        id: "bio-7-cb-5",
        title: ml("Zellzyklus", "Cell Cycle", "Sejtciklus", "Ciclu celular"),
        instruction: ml("Ordne die Mitosephasen.", "Order mitosis.", "Rendezd a fázisokat.", "Ordonează fazele."),
        hint: ml("Prophase zuerst.", "Prophase first.", "Profázis az első.", "Profaza prima."),
        theme: { bg: "#1f2937", accent: "#9ca3af", card: "#374151" },
        parts: [
          { id: "pro", label: ml("Prophase", "Prophase", "Profázis", "Profază"), emoji: "1️⃣" },
          { id: "meta", label: ml("Metaphase", "Metaphase", "Metafázis", "Metafază"), emoji: "2️⃣" },
          { id: "ana", label: ml("Anaphase", "Anaphase", "Anafázis", "Anafază"), emoji: "3️⃣" },
          { id: "telo", label: ml("Telophase", "Telophase", "Telofázis", "Telofază"), emoji: "4️⃣" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["pro", "meta", "ana", "telo"],
      }
    ],
    memoryRadar: [
      {
        id: "bio-7-mr-1",
        title: ml("Die Sinne", "Senses", "Érzékek", "Simțuri"),
        instruction: ml("Merke die fünf Sinne.", "Remember the senses.", "Jegyezd meg az érzékeket.", "Reține simțurile."),
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "sehen", label: ml("Sehen", "Sight", "Látás", "Vedere"), emoji: "👁️" },
          { id: "hören", label: ml("Hören", "Hearing", "Hallás", "Auz"), emoji: "👂" },
          { id: "riechen", label: ml("Riechen", "Smell", "Szaglás", "Miros"), emoji: "👃" },
          { id: "schmecken", label: ml("Schmecken", "Taste", "Ízlelés", "Gust"), emoji: "👅" },
          { id: "tasten", label: ml("Tasten", "Touch", "Tapintás", "Pipăit"), emoji: "🖐️" },
        ],
        decoyItems: [
          { id: "gleichgewicht", label: ml("Gleichgewicht", "Balance", "Egyensúly", "Echilibru"), emoji: "🤸" },
          { id: "temperatur", label: ml("Temperatur", "Temperature", "Hőmérséklet", "Temperatură"), emoji: "🌡️" },
          { id: "schmerz", label: ml("Schmerz", "Pain", "Fájdalom", "Durere"), emoji: "🤕" },
        ],
      },
      {
        id: "bio-7-mr-2",
        title: ml("Auge Teile", "Eye Parts", "Szem részei", "Părți ochi"),
        instruction: ml("Merke dir die Teile.", "Remember parts.", "Jegyezd meg a részeket.", "Reține părțile."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#3b82f6", radar: "#1d4ed8" },
        targetItems: [
          { id: "linse", label: ml("Linse", "Lens", "Lencse", "Cristalin"), emoji: "🔍" },
          { id: "pupille", label: ml("Pupille", "Pupil", "Pupilla", "Pupilă"), emoji: "⚫" },
          { id: "netzhaut", label: ml("Netzhaut", "Retina", "Retina", "Retină"), emoji: "🕸️" },
          { id: "iris", label: ml("Iris", "Iris", "Írisz", "Iris"), emoji: "👁️" },
        ],
        decoyItems: [
          { id: "trommelfell", label: ml("Trommelfell", "Eardrum", "Dobhártya", "Timpane"), emoji: "🥁" },
          { id: "schnecke", label: ml("Schnecke", "Cochlea", "Csiga", "Melc"), emoji: "🐌" },
          { id: "ohrmuschel", label: ml("Ohrmuschel", "Pinna", "Fülkagyló", "Pavilion"), emoji: "👂" },
        ],
      },
      {
        id: "bio-7-mr-3",
        title: ml("Ohr Teile", "Ear Parts", "Fül részei", "Părți ureche"),
        instruction: ml("Merke dir die Teile.", "Remember parts.", "Jegyezd meg a részeket.", "Reține părțile."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#34d399", radar: "#065f46" },
        targetItems: [
          { id: "trommel", label: ml("Trommelfell", "Eardrum", "Dobhártya", "Timpane"), emoji: "🥁" },
          { id: "schnecke", label: ml("Schnecke", "Cochlea", "Csiga", "Melc"), emoji: "🐌" },
          { id: "muschel", label: ml("Ohrmuschel", "Pinna", "Fülkagyló", "Pavilion"), emoji: "👂" },
          { id: "knöchel", label: ml("Gehörknöch.", "Ossicles", "Hallócsont.", "Osișoare"), emoji: "🦴" },
        ],
        decoyItems: [
          { id: "linse", label: ml("Linse", "Lens", "Lencse", "Cristalin"), emoji: "🔍" },
          { id: "pupille", label: ml("Pupille", "Pupil", "Pupilla", "Pupilă"), emoji: "⚫" },
          { id: "iris", label: ml("Iris", "Iris", "Írisz", "Iris"), emoji: "👁️" },
        ],
      },
      {
        id: "bio-7-mr-4",
        title: ml("Genetik Begriffe", "Genetic Terms", "Genetika fogalmak", "Termeni genetici"),
        instruction: ml("Merke dir die Begriffe.", "Remember terms.", "Jegyezd meg a fogalmakat.", "Reține termenii."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#4c1d95", accent: "#c084fc", radar: "#7e22ce" },
        targetItems: [
          { id: "dna", label: ml("DNA", "DNA", "DNS", "ADN"), emoji: "🧬" },
          { id: "gen", label: ml("Gen", "Gene", "Gén", "Genă"), emoji: "🔗" },
          { id: "chromosom", label: ml("Chromosom", "Chromosome", "Kromoszóma", "Cromozom"), emoji: "✖️" },
          { id: "allel", label: ml("Allel", "Allele", "Allél", "Alelă"), emoji: "🅰️" },
        ],
        decoyItems: [
          { id: "organ", label: ml("Organ", "Organ", "Szerv", "Organ"), emoji: "🫁" },
          { id: "gewebe", label: ml("Gewebe", "Tissue", "Szövet", "Țesut"), emoji: "🧶" },
          { id: "knochen", label: ml("Knochen", "Bone", "Csont", "Os"), emoji: "🦴" },
        ],
      },
      {
        id: "bio-7-mr-5",
        title: ml("Mendelsche Regeln", "Mendel Rules", "Mendel szabályok", "Reguli Mendel"),
        instruction: ml("Merke dir die Namen.", "Remember names.", "Jegyezd meg a neveket.", "Reține numele."),
        flashDurationMs: 3500,
        selectionLimit: 3,
        theme: { bg: "#450a0a", accent: "#f87171", radar: "#7f1d1d" },
        targetItems: [
          { id: "uni", label: ml("Uniformitätsregel", "Uniformity", "Uniformitás", "Uniformitate"), emoji: "1️⃣" },
          { id: "spalt", label: ml("Spaltungsregel", "Segregation", "Hasadás", "Segregare"), emoji: "2️⃣" },
          { id: "unab", label: ml("Unabhängigkeit", "Indep. assort.", "Független ör.", "Sortare indep."), emoji: "3️⃣" },
        ],
        decoyItems: [
          { id: "grav", label: ml("Schwerkraft", "Gravity", "Gravitáció", "Gravitație"), emoji: "🌍" },
          { id: "rel", label: ml("Relativität", "Relativity", "Relativitás", "Relativitate"), emoji: "🚀" },
        ],
      }
    ],
  },
  8: {
    grade: 8,
    meteorCatch: [
      {
        id: "bio-8-mc-1",
        title: ml("Ökologische Begriffe", "Ecology Terms", "Ökológiai fogalmak", "Termeni ecologici"),
        prompt: ml("Fange Öko-Begriffe.", "Catch ecology terms.", "Fogj öko-fogalmakat.", "Prinde termeni eco."),
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "nische", label: ml("Nische", "Niche", "Niche", "Nișă"), emoji: "🎯" },
          { id: "habitat", label: ml("Habitat", "Habitat", "Élőhely", "Habitat"), emoji: "🏡" },
          { id: "population", label: ml("Population", "Population", "Populáció", "Populație"), emoji: "👨‍👩‍👧‍👦" },
          { id: "gemeinschaft", label: ml("Gemeinschaft", "Community", "Társulás", "Comunitate"), emoji: "🤝" },
          { id: "sukzession", label: ml("Sukzession", "Succession", "Szukcesszió", "Succesiune"), emoji: "📈" },
        ],
        wrongItems: [
          { id: "gen", label: ml("Gen", "Gene", "Gén", "Genă"), emoji: "🧬" },
          { id: "zelle", label: ml("Zelle", "Cell", "Sejt", "Celulă"), emoji: "🔬" },
          { id: "molekül", label: ml("Molekül", "Molecule", "Molekula", "Moleculă"), emoji: "⚛️" },
        ],
      },
      {
        id: "bio-8-mc-2",
        title: ml("Immunsystem", "Immune System", "Immunrendszer", "Sistem imunitar"),
        prompt: ml("Fange Immun-Begriffe.", "Catch immune terms.", "Fogj immun-fogalmakat.", "Prinde termeni imunitari."),
        goal: 5,
        speed: 5.5,
        theme: { sky: "#450a0a", glow: "#ef4444", accent: "#dc2626" },
        correctItems: [
          { id: "antikoerper", label: ml("Antikörper", "Antibody", "Antitest", "Anticorp"), emoji: "🛡️" },
          { id: "makrophage", label: ml("Makrophage", "Macrophage", "Makrofág", "Macrofag"), emoji: "🦠" },
          { id: "t_zelle", label: ml("T-Zelle", "T-Cell", "T-sejt", "Celulă T"), emoji: "⚔️" },
          { id: "b_zelle", label: ml("B-Zelle", "B-Cell", "B-sejt", "Celulă B"), emoji: "🎯" },
          { id: "lymphknoten", label: ml("Lymphknoten", "Lymph node", "Nyirokcsomó", "Ganglion limfatic"), emoji: "💧" },
        ],
        wrongItems: [
          { id: "herz", label: ml("Herz", "Heart", "Szív", "Inimă"), emoji: "❤️" },
          { id: "magen", label: ml("Magen", "Stomach", "Gyomor", "Stomac"), emoji: "🥙" },
          { id: "gehirn", label: ml("Gehirn", "Brain", "Agy", "Creier"), emoji: "🧠" },
        ],
      },
      {
        id: "bio-8-mc-3",
        title: ml("Biotechnologie", "Biotechnology", "Biotechnológia", "Biotehnologie"),
        prompt: ml("Fange Biotech-Begriffe.", "Catch biotech terms.", "Fogj biotech-fogalmakat.", "Prinde termeni biotech."),
        goal: 4,
        speed: 6,
        theme: { sky: "#1e3a8a", glow: "#3b82f6", accent: "#2563eb" },
        correctItems: [
          { id: "gentechnik", label: ml("Gentechnik", "Gen. Engineering", "Géntechnológia", "Inginerie gen."), emoji: "🧬" },
          { id: "klonen", label: ml("Klonen", "Cloning", "Klónozás", "Clonare"), emoji: "🐑" },
          { id: "pcr", label: ml("PCR", "PCR", "PCR", "PCR"), emoji: "🧪" },
          { id: "enzym", label: ml("Enzym", "Enzyme", "Enzim", "Enzimă"), emoji: "✂️" },
        ],
        wrongItems: [
          { id: "baum", label: ml("Baum", "Tree", "Fa", "Copac"), emoji: "🌳" },
          { id: "vogel", label: ml("Vogel", "Bird", "Madár", "Pasăre"), emoji: "🐦" },
          { id: "stein", label: ml("Stein", "Stone", "Kő", "Piatră"), emoji: "🪨" },
        ],
      },
      {
        id: "bio-8-mc-4",
        title: ml("Krankheitserreger", "Pathogens", "Kórokozók", "Patogeni"),
        prompt: ml("Fange Erreger.", "Catch pathogens.", "Fogj kórokozókat.", "Prinde patogeni."),
        goal: 4,
        speed: 6.5,
        theme: { sky: "#022c22", glow: "#10b981", accent: "#059669" },
        correctItems: [
          { id: "virus", label: ml("Virus", "Virus", "Vírus", "Virus"), emoji: "👾" },
          { id: "bakterium", label: ml("Bakterium", "Bacterium", "Baktérium", "Bacterie"), emoji: "🦠" },
          { id: "pilz", label: ml("Pilz", "Fungus", "Gomba", "Ciupercă"), emoji: "🍄" },
          { id: "parasit", label: ml("Parasit", "Parasite", "Parazita", "Parazit"), emoji: "🦟" },
        ],
        wrongItems: [
          { id: "apfel", label: ml("Apfel", "Apple", "Alma", "Măr"), emoji: "🍎" },
          { id: "wasser", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "luft", label: ml("Luft", "Air", "Levegő", "Aer"), emoji: "💨" },
        ],
      },
      {
        id: "bio-8-mc-5",
        title: ml("Impfen", "Vaccination", "Védőoltás", "Vaccinare"),
        prompt: ml("Fange Impf-Begriffe.", "Catch vaccine terms.", "Fogj oltás-fogalmakat.", "Prinde termeni vaccin."),
        goal: 4,
        speed: 7,
        theme: { sky: "#1e1b4b", glow: "#8b5cf6", accent: "#7c3aed" },
        correctItems: [
          { id: "impfstoff", label: ml("Impfstoff", "Vaccine", "Oltóanyag", "Vaccin"), emoji: "💉" },
          { id: "immunitaet", label: ml("Immunität", "Immunity", "Immunitás", "Imunitate"), emoji: "🛡️" },
          { id: "antigen", label: ml("Antigen", "Antigen", "Antigén", "Antigen"), emoji: "🎯" },
          { id: "gedaechtnis", label: ml("Gedächtniszelle", "Memory cell", "Memóriasejt", "Celulă memorie"), emoji: "🧠" },
        ],
        wrongItems: [
          { id: "knochen", label: ml("Knochen", "Bone", "Csont", "Os"), emoji: "🦴" },
          { id: "haar", label: ml("Haar", "Hair", "Haj", "Păr"), emoji: "💇" },
          { id: "zahn", label: ml("Zahn", "Tooth", "Fog", "Dinte"), emoji: "🦷" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "bio-8-os-1",
        title: ml("Immun vs Biotech", "Immune vs Biotech", "Immun vs Biotech", "Imunitar vs Biotech"),
        instruction: ml("Sortiere zu.", "Sort it.", "Rendezd.", "Sortează."),
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#d97706" },
        buckets: [
          { id: "immun", label: ml("Immunsystem", "Immune", "Immunrendszer", "Sist. imun."), color: "#ef4444" },
          { id: "biotech", label: ml("Biotech", "Biotech", "Biotechnológia", "Biotech"), color: "#3b82f6" },
        ],
        items: [
          { id: "antikörper", label: ml("Antikörper", "Antibody", "Antitest", "Anticorp"), emoji: "🛡️", bucketId: "immun" },
          { id: "impfung", label: ml("Impfung", "Vaccine", "Oltás", "Vaccin"), emoji: "💉", bucketId: "immun" },
          { id: "bakterien", label: ml("Bakterien", "Bacteria", "Baktériumok", "Bacterii"), emoji: "🦠", bucketId: "immun" },
          { id: "gentechnik", label: ml("Gentechnik", "Gen. Eng.", "Géntechnológia", "Ing. gen."), emoji: "🧬", bucketId: "biotech" },
          { id: "klonen", label: ml("Klonen", "Cloning", "Klónozás", "Clonare"), emoji: "🐑", bucketId: "biotech" },
          { id: "pcr", label: ml("PCR", "PCR", "PCR", "PCR"), emoji: "🧪", bucketId: "biotech" },
        ],
      },
      {
        id: "bio-8-os-2",
        title: ml("Virus vs Bakterium", "Virus vs Bacteria", "Vírus vs Baktérium", "Virus vs Bacterie"),
        instruction: ml("Sortiere Eigenschaften.", "Sort properties.", "Rendezd a tulajdonságokat.", "Sortează propr."),
        theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "virus", label: ml("Virus", "Virus", "Vírus", "Virus"), color: "#8b5cf6" },
          { id: "bakterium", label: ml("Bakterium", "Bacterium", "Baktérium", "Bacterie"), color: "#10b981" },
        ],
        items: [
          { id: "keinzelle", label: ml("Keine Zelle", "No cell", "Nem sejt", "Nu e celulă"), emoji: "🚫", bucketId: "virus" },
          { id: "wirt", label: ml("Braucht Wirt", "Needs host", "Gazdasejt kell", "Nec. gazdă"), emoji: "🏠", bucketId: "virus" },
          { id: "kleiner", label: ml("Sehr klein", "Very small", "Nagyon kicsi", "Foarte mic"), emoji: "🔬", bucketId: "virus" },
          { id: "zelle", label: ml("Eigene Zelle", "Own cell", "Saját sejt", "Are celulă"), emoji: "🦠", bucketId: "bakterium" },
          { id: "antibiotika", label: ml("Antibiotika helfen", "Antibiotics work", "Antibiotikum hat", "Antib. ajută"), emoji: "💊", bucketId: "bakterium" },
          { id: "groesser", label: ml("Größer", "Larger", "Nagyobb", "Mai mare"), emoji: "👁️", bucketId: "bakterium" },
        ],
      },
      {
        id: "bio-8-os-3",
        title: ml("Spezifisch vs Unspezifisch", "Specific vs Nonspec.", "Specifikus vs Nem-spec.", "Spec. vs Nespec."),
        instruction: ml("Sortiere Immunabwehr.", "Sort immunity.", "Rendezd az immunválaszt.", "Sortează imunitatea."),
        theme: { bg: "#1e3a8a", orbit: "#3b82f6", accent: "#2563eb" },
        buckets: [
          { id: "unspez", label: ml("Unspezifisch", "Nonspecific", "Nem-spec.", "Nespecific"), color: "#9ca3af" },
          { id: "spez", label: ml("Spezifisch", "Specific", "Specifikus", "Specific"), color: "#ef4444" },
        ],
        items: [
          { id: "haut", label: ml("Haut", "Skin", "Bőr", "Piele"), emoji: "🖐️", bucketId: "unspez" },
          { id: "traenen", label: ml("Tränen", "Tears", "Könnyek", "Lacrimi"), emoji: "😢", bucketId: "unspez" },
          { id: "makrophage", label: ml("Fresszellen", "Macrophage", "Falósejtek", "Macrofage"), emoji: "🦠", bucketId: "unspez" },
          { id: "antikoerper", label: ml("Antikörper", "Antibodies", "Antitestek", "Anticorpi"), emoji: "🛡️", bucketId: "spez" },
          { id: "t_zelle", label: ml("T-Killerzellen", "T-cells", "T-ölősejtek", "Celule T"), emoji: "⚔️", bucketId: "spez" },
          { id: "b_zelle", label: ml("B-Zellen", "B-cells", "B-sejtek", "Celule B"), emoji: "🎯", bucketId: "spez" },
        ],
      },
      {
        id: "bio-8-os-4",
        title: ml("Aktiv vs Passiv (Impfung)", "Active vs Passive", "Aktív vs Passzív", "Activ vs Pasiv"),
        instruction: ml("Sortiere Impfungsart.", "Sort vaccine type.", "Rendezd az oltást.", "Sortează vaccinul."),
        theme: { bg: "#064e3b", orbit: "#10b981", accent: "#059669" },
        buckets: [
          { id: "aktiv", label: ml("Aktiv", "Active", "Aktív", "Activ"), color: "#3b82f6" },
          { id: "passiv", label: ml("Passiv", "Passive", "Passzív", "Pasiv"), color: "#f59e0b" },
        ],
        items: [
          { id: "lang", label: ml("Langzeitschutz", "Long-term", "Hosszútávú", "Pe termen lung"), emoji: "⏳", bucketId: "aktiv" },
          { id: "erreger", label: ml("Tote Erreger", "Dead pathog.", "Halott kórokozók", "Patog. morți"), emoji: "🦠", bucketId: "aktiv" },
          { id: "selbst", label: ml("Körper macht Abwehr", "Body makes", "Saját ellenanyag", "Corp prod."), emoji: "💪", bucketId: "aktiv" },
          { id: "kurz", label: ml("Kurzzeitschutz", "Short-term", "Rövidtávú", "Termen scurt"), emoji: "⏱️", bucketId: "passiv" },
          { id: "antik", label: ml("Fertige Antikörper", "Ready antibod.", "Kész antitestek", "Anticorpi gata"), emoji: "🛡️", bucketId: "passiv" },
          { id: "sofort", label: ml("Sofortwirkung", "Immediate", "Azonnali", "Imediat"), emoji: "⚡", bucketId: "passiv" },
        ],
      },
      {
        id: "bio-8-os-5",
        title: ml("Symbiose vs Parasitismus", "Symbiosis vs Parasit.", "Szimbiózis vs Paraz.", "Simbioză vs Paraz."),
        instruction: ml("Sortiere Beziehung.", "Sort relationship.", "Rendezd a kapcsolatot.", "Sortează rel."),
        theme: { bg: "#4c1d95", orbit: "#8b5cf6", accent: "#7c3aed" },
        buckets: [
          { id: "sym", label: ml("Symbiose (+/+)", "Symbiosis", "Szimbiózis", "Simbioză"), color: "#22c55e" },
          { id: "par", label: ml("Parasitismus (+/-)", "Parasitism", "Parazitizmus", "Parazitism"), color: "#ef4444" },
        ],
        items: [
          { id: "biene", label: ml("Biene & Blume", "Bee/Flower", "Méh & Virág", "Albină/Floare"), emoji: "🐝", bucketId: "sym" },
          { id: "flechte", label: ml("Pilz & Alge", "Fungus/Algae", "Gomba & Alga", "Ciupercă/Algă"), emoji: "🍄", bucketId: "sym" },
          { id: "darm", label: ml("Mensch & Bakterium", "Human/Bacteria", "Ember & Bakt.", "Om/Bacterie"), emoji: "🤝", bucketId: "sym" },
          { id: "zecke", label: ml("Zecke & Hund", "Tick/Dog", "Kullancs & Kutya", "Căpușă/Câine"), emoji: "🕷️", bucketId: "par" },
          { id: "bandwurm", label: ml("Bandwurm & Mensch", "Tapeworm", "Galandféreg", "Tenă"), emoji: "🪱", bucketId: "par" },
          { id: "muecke", label: ml("Mücke & Mensch", "Mosquito", "Szúnyog", "Țânțar"), emoji: "🦟", bucketId: "par" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "bio-8-sr-1",
        title: ml("Immunsystem", "Immune System", "Immunrendszer", "Sistem imunitar"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-8-sr-1-s1",
            title: ml("B-Zellen", "B-Cells", "B-sejtek", "Celule B"),
            prompt: ml("Was produzieren B-Zellen?", "What do B-cells produce?", "Mit termelnek a B-sejtek?", "Ce produc celulele B?"),
            sceneType: "safety",
            visual: { icon: "🛡️", bg: "#001a30", accent: "#38bdf8" },
            choices: [
              { id: "a", label: ml("Antikörper", "Antibodies", "Antitesteket", "Anticorpi") },
              { id: "b", label: ml("Antigene", "Antigens", "Antigéneket", "Antigene") },
              { id: "c", label: ml("Viren", "Viruses", "Vírusokat", "Viruși") },
              { id: "d", label: ml("Bakterien", "Bacteria", "Baktériumokat", "Bacterii") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-8-sr-2",
        title: ml("Ökologie", "Ecology", "Ökológia", "Ecologie"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-8-sr-2-s1",
            title: ml("Biotop", "Biotop", "Biotóp", "Biotop"),
            prompt: ml("Was ist ein Biotop?", "What is a biotop?", "Mi az a biotóp?", "Ce este un biotop?"),
            sceneType: "nature",
            visual: { icon: "🏞️", bg: "#022c22", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Lebewesen", "Living beings", "Élőlények", "Ființe") },
              { id: "b", label: ml("Lebensraum", "Habitat space", "Élettér", "Spațiu habitat") },
              { id: "c", label: ml("Nahrung", "Food", "Táplálék", "Hrană") },
              { id: "d", label: ml("Wetter", "Weather", "Időjárás", "Vreme") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-8-sr-3",
        title: ml("Viren", "Viruses", "Vírusok", "Viruși"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-8-sr-3-s1",
            title: ml("Eigenschaften", "Properties", "Tulajdonságok", "Proprietăți"),
            prompt: ml("Sind Viren Lebewesen?", "Are viruses alive?", "Élőlények a vírusok?", "Sunt virușii vii?"),
            sceneType: "community",
            visual: { icon: "👾", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Ja", "Yes", "Igen", "Da") },
              { id: "b", label: ml("Nein (kein Stoffwechsel)", "No (no metab.)", "Nem (nincs anyagcs.)", "Nu (fără metab.)") },
              { id: "c", label: ml("Manchmal", "Sometimes", "Néha", "Uneori") },
              { id: "d", label: ml("Nur im Wasser", "Only in water", "Csak vízben", "Doar în apă") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-8-sr-4",
        title: ml("Klonen", "Cloning", "Klónozás", "Clonare"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-8-sr-4-s1",
            title: ml("DNA", "DNA", "DNS", "ADN"),
            prompt: ml("Was ist ein Klon?", "What is a clone?", "Mi a klón?", "Ce este o clonă?"),
            sceneType: "safety",
            visual: { icon: "🐑", bg: "#4c1d95", accent: "#c084fc" },
            choices: [
              { id: "a", label: ml("Bruder", "Brother", "Testvér", "Frate") },
              { id: "b", label: ml("Elternteil", "Parent", "Szülő", "Părinte") },
              { id: "c", label: ml("Genetisch identisch", "Genetic identical", "Genetikailag azonos", "Identic genetic") },
              { id: "d", label: ml("Mutation", "Mutation", "Mutáció", "Mutație") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "bio-8-sr-5",
        title: ml("PCR", "PCR", "PCR", "PCR"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "bio-8-sr-5-s1",
            title: ml("Zweck", "Purpose", "Cél", "Scop"),
            prompt: ml("Was macht die PCR?", "What does PCR do?", "Mit csinál a PCR?", "Ce face PCR?"),
            sceneType: "community",
            visual: { icon: "🧪", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Zerstört Viren", "Destroys virus", "Elpusztítja a vírust", "Distruge virus") },
              { id: "b", label: ml("Kopiert DNA", "Copies DNA", "Másolja a DNS-t", "Copiază ADN") },
              { id: "c", label: ml("Macht RNA", "Makes RNA", "RNS-t csinál", "Face ARN") },
              { id: "d", label: ml("Tötet Bakterien", "Kills bacteria", "Megöli a bakt.", "Ucide bacterii") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "bio-8-cb-1",
        title: ml("Gentechnik Schritte", "Biotech Steps", "Géntech lépések", "Pași biotech"),
        instruction: ml("Ordne chronologisch.", "Order chronologically.", "Rendezd időrendben.", "Ordonează cronologic."),
        hint: ml("Zuerst isolieren.", "Isolate first.", "Először izolálni.", "Izolează întâi."),
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1f1a00" },
        parts: [
          { id: "iso", label: ml("Isolierung", "Isolation", "Izolálás", "Izolare"), emoji: "✂️" },
          { id: "vektor", label: ml("Vektor", "Vector", "Vektor", "Vector"), emoji: "💉" },
          { id: "trans", label: ml("Transformation", "Transform", "Transzformáció", "Transformare"), emoji: "🔄" },
          { id: "sel", label: ml("Selektion", "Selection", "Szelekció", "Selecție"), emoji: "✅" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["iso", "vektor", "trans", "sel"],
      },
      {
        id: "bio-8-cb-2",
        title: ml("Immunantwort", "Immune Response", "Immunválasz", "Răspuns imun"),
        instruction: ml("Ordne die Abwehr.", "Order the defense.", "Rendezd a védelmet.", "Ordonează apărarea."),
        hint: ml("Makrophage frisst zuerst.", "Macrophage eats first.", "A makrofág eszik először.", "Macrofagul mănâncă primul."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "makro", label: ml("Makrophage frisst", "Macro. eats", "Makrofág bekebelez", "Macrofag mănâncă"), emoji: "🦠" },
          { id: "t", label: ml("T-Helfer aktiviert", "T-helper act.", "T-segítő aktivál", "T-helper act."), emoji: "🤝" },
          { id: "b", label: ml("B-Zelle produziert", "B-cell prod.", "B-sejt termel", "Celula B prod."), emoji: "🏭" },
          { id: "anti", label: ml("Antikörper binden", "Antibodies bind", "Antitestek kötődnek", "Anticorpi se leagă"), emoji: "🛡️" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["makro", "t", "b", "anti"],
      },
      {
        id: "bio-8-cb-3",
        title: ml("Vermehrung Viren", "Virus Repro", "Vírus szaporodás", "Reproducere virus"),
        instruction: ml("Lytischer Zyklus.", "Lytic cycle.", "Lítikus ciklus.", "Ciclu litic."),
        hint: ml("Andocken zuerst.", "Attach first.", "Megtapadás elöl.", "Atașare întâi."),
        theme: { bg: "#2e1065", accent: "#c084fc", card: "#4c1d95" },
        parts: [
          { id: "dock", label: ml("Andocken", "Attach", "Megtapadás", "Atașare"), emoji: "🧲" },
          { id: "injekt", label: ml("DNA-Injektion", "Inject DNA", "DNS bejuttatás", "Injectare ADN"), emoji: "💉" },
          { id: "prod", label: ml("Produktion", "Production", "Termelés", "Producție"), emoji: "🏭" },
          { id: "frei", label: ml("Freisetzung", "Release", "Kiszabadulás", "Eliberare"), emoji: "💥" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["dock", "injekt", "prod", "frei"],
      },
      {
        id: "bio-8-cb-4",
        title: ml("Nahrungsnetz", "Food Web", "Táplálékhálózat", "Rețea trofică"),
        instruction: ml("Energiefluss.", "Energy flow.", "Energiaáramlás.", "Flux de energie."),
        hint: ml("Sonne zuerst.", "Sun first.", "A nap az első.", "Soarele primul."),
        theme: { bg: "#064e3b", accent: "#10b981", card: "#022c22" },
        parts: [
          { id: "sonne", label: ml("Sonne", "Sun", "Nap", "Soare"), emoji: "☀️" },
          { id: "pflanze", label: ml("Pflanze", "Plant", "Növény", "Plantă"), emoji: "🌱" },
          { id: "herb", label: ml("Pflanzenfresser", "Herbivore", "Növényevő", "Erbivor"), emoji: "🐇" },
          { id: "carn", label: ml("Fleischfresser", "Carnivore", "Húsevő", "Carnivor"), emoji: "🦊" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["sonne", "pflanze", "herb", "carn"],
      },
      {
        id: "bio-8-cb-5",
        title: ml("Sukzession", "Succession", "Szukcesszió", "Succesiune"),
        instruction: ml("Waldentwicklung.", "Forest dev.", "Erdőfejlődés.", "Dezvoltare pădure."),
        hint: ml("Nackter Fels zuerst.", "Bare rock first.", "Csupasz szikla elöl.", "Stâncă goală prima."),
        theme: { bg: "#1f2937", accent: "#d1d5db", card: "#374151" },
        parts: [
          { id: "fels", label: ml("Fels", "Rock", "Szikla", "Stâncă"), emoji: "🪨" },
          { id: "flechte", label: ml("Flechten/Moose", "Lichens", "Zuzmó/Moha", "Licheni"), emoji: "🦠" },
          { id: "gras", label: ml("Gräser", "Grasses", "Füvek", "Ierburi"), emoji: "🌿" },
          { id: "strauch", label: ml("Sträucher", "Shrubs", "Cserjék", "Arbuști"), emoji: "🍃" },
          { id: "wald", label: ml("Klimaxwald", "Climax forest", "Klimax erdő", "Pădure climax"), emoji: "🌲" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
          { id: "s5", label: "5." },
        ],
        solution: ["fels", "flechte", "gras", "strauch", "wald"],
      }
    ],
    memoryRadar: [
      {
        id: "bio-8-mr-1",
        title: ml("Biotech Anwendungen", "Biotech Uses", "Biotech alkalmazások", "Aplicații biotech"),
        instruction: ml("Merke Biotech.", "Remember biotech.", "Jegyezd meg a biotechnológiát.", "Reține biotech."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#92400e" },
        targetItems: [
          { id: "insulin", label: ml("Insulinproduktion", "Insulin prod.", "Inzulin termelés", "Prod. insulină"), emoji: "💉" },
          { id: "biokraft", label: ml("Biokraftstoffe", "Biofuels", "Bioüzemanyag", "Biocombustibil"), emoji: "⛽" },
          { id: "gen", label: ml("Gentherapie", "Gene therapy", "Génterápia", "Terapie genică"), emoji: "🩹" },
          { id: "klon", label: ml("Klonen", "Cloning", "Klónozás", "Clonare"), emoji: "🐑" },
        ],
        decoyItems: [
          { id: "smart", label: ml("Smartphones", "Smartphones", "Okostelefonok", "Smartphone-uri"), emoji: "📱" },
          { id: "auto", label: ml("Autobau", "Car building", "Autógyártás", "Construit mașini"), emoji: "🚗" },
          { id: "brücke", label: ml("Brückenbau", "Bridge b.", "Hídépítés", "Construit poduri"), emoji: "🌉" },
        ],
      },
      {
        id: "bio-8-mr-2",
        title: ml("Immunsystem", "Immune System", "Immunrendszer", "Sistem imunitar"),
        instruction: ml("Merke die Zellen.", "Remember cells.", "Jegyezd meg a sejteket.", "Reține celulele."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "t", label: ml("T-Zelle", "T-cell", "T-sejt", "Celulă T"), emoji: "⚔️" },
          { id: "b", label: ml("B-Zelle", "B-cell", "B-sejt", "Celulă B"), emoji: "🎯" },
          { id: "makro", label: ml("Makrophage", "Macrophage", "Makrofág", "Macrofag"), emoji: "🦠" },
          { id: "ged", label: ml("Gedächtniszelle", "Memory cell", "Memóriasejt", "Celulă memorie"), emoji: "🧠" },
        ],
        decoyItems: [
          { id: "rot", label: ml("Rotes Blutkörperchen", "RBC", "Vörösvértest", "Globulă roșie"), emoji: "🔴" },
          { id: "nerv", label: ml("Nervenzelle", "Nerve cell", "Idegsejt", "Celulă nervoasă"), emoji: "⚡" },
          { id: "muskel", label: ml("Muskelzelle", "Muscle cell", "Izomsejt", "Celulă musculară"), emoji: "💪" },
        ],
      },
      {
        id: "bio-8-mr-3",
        title: ml("Erreger", "Pathogens", "Kórokozók", "Patogeni"),
        instruction: ml("Merke Erreger.", "Remember pathogens.", "Jegyezd meg a kórokozókat.", "Reține patogenii."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "virus", label: ml("Virus", "Virus", "Vírus", "Virus"), emoji: "👾" },
          { id: "bakt", label: ml("Bakterium", "Bacteria", "Baktérium", "Bacterie"), emoji: "🦠" },
          { id: "pilz", label: ml("Pilz", "Fungus", "Gomba", "Ciupercă"), emoji: "🍄" },
          { id: "parasit", label: ml("Parasit", "Parasite", "Parazita", "Parazit"), emoji: "🦟" },
        ],
        decoyItems: [
          { id: "pflanze", label: ml("Pflanze", "Plant", "Növény", "Plantă"), emoji: "🌿" },
          { id: "tier", label: ml("Tier", "Animal", "Állat", "Animal"), emoji: "🐕" },
          { id: "stein", label: ml("Stein", "Stone", "Kő", "Piatră"), emoji: "🪨" },
        ],
      },
      {
        id: "bio-8-mr-4",
        title: ml("Ökofaktoren", "Eco Factors", "Ökotényezők", "Factori eco"),
        instruction: ml("Merke abiotisch.", "Remember abiotic.", "Jegyezd meg az abiotikusat.", "Reține abioticii."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#3b82f6", radar: "#1d4ed8" },
        targetItems: [
          { id: "licht", label: ml("Licht", "Light", "Fény", "Lumină"), emoji: "☀️" },
          { id: "wasser", label: ml("Wasser", "Water", "Víz", "Apă"), emoji: "💧" },
          { id: "temp", label: ml("Temperatur", "Temp", "Hő", "Temp"), emoji: "🌡️" },
          { id: "boden", label: ml("Boden", "Soil", "Talaj", "Sol"), emoji: "🪨" },
        ],
        decoyItems: [
          { id: "feind", label: ml("Fressfeind", "Predator", "Ragadozó", "Prădător"), emoji: "🐺" },
          { id: "beute", label: ml("Beute", "Prey", "Zsákmány", "Pradă"), emoji: "🐇" },
          { id: "para", label: ml("Parasit", "Parasite", "Parazita", "Parazit"), emoji: "🦟" },
        ],
      },
      {
        id: "bio-8-mr-5",
        title: ml("Beziehungen", "Relationships", "Kapcsolatok", "Relații"),
        instruction: ml("Merke Beziehungsarten.", "Remember relations.", "Jegyezd meg a kapcsolatokat.", "Reține relațiile."),
        flashDurationMs: 3500,
        selectionLimit: 3,
        theme: { bg: "#2e1065", accent: "#c084fc", radar: "#4c1d95" },
        targetItems: [
          { id: "sym", label: ml("Symbiose (+/+)", "Symbiosis", "Szimbiózis", "Simbioză"), emoji: "🤝" },
          { id: "par", label: ml("Parasitismus (+/-)", "Parasitism", "Parazitizmus", "Parazitism"), emoji: "🩸" },
          { id: "kon", label: ml("Konkurrenz (-/-)", "Competition", "Versengés", "Competiție"), emoji: "⚔️" },
        ],
        decoyItems: [
          { id: "liebe", label: ml("Liebe", "Love", "Szerelem", "Dragoste"), emoji: "❤️" },
          { id: "freund", label: ml("Freundschaft", "Friendship", "Barátság", "Prietenie"), emoji: "😊" },
        ],
      }
    ],
  },
};
