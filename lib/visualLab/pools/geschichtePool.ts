import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

// Helper for generating multilingual text
const ml = (de: string, en: string, hu: string, ro: string): string => ({ de, en, hu, ro } as unknown as string);

export const GESCHICHTE_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "ge-5-mc-1",
        title: ml("Steinzeit", "Stone Age", "Kőkorszak", "Epoca Pietrei"),
        prompt: ml("Fange Dinge der Steinzeit ein.", "Catch Stone Age items.", "Fogj kőkorszaki dolgokat.", "Prinde lucruri din Epoca Pietrei."),
        goal: 5,
        speed: 5,
        theme: { sky: "#1c1917", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "feuer", label: ml("Feuer", "Fire", "Tűz", "Foc"), emoji: "🔥" },
          { id: "steinwerkzeug", label: ml("Faustkeil", "Hand axe", "Szakóca", "Toporaș"), emoji: "🪨" },
          { id: "speer", label: ml("Speer", "Spear", "Lándzsa", "Suliță"), emoji: "🦯" },
          { id: "mammut", label: ml("Mammut", "Mammoth", "Mamut", "Mamut"), emoji: "🦣" },
          { id: "fell", label: ml("Tierfell", "Animal skin", "Állatbőr", "Blană"), emoji: "🧥" },
        ],
        wrongItems: [
          { id: "eisen", label: ml("Eisenschwert", "Iron sword", "Vaskard", "Sabie de fier"), emoji: "🗡️" },
          { id: "rad", label: ml("Rad", "Wheel", "Kerék", "Roată"), emoji: "🛞" },
          { id: "münze", label: ml("Münze", "Coin", "Érme", "Monedă"), emoji: "🪙" },
        ],
      },
      {
        id: "ge-5-mc-2",
        title: ml("Altes Ägypten", "Ancient Egypt", "Ókori Egyiptom", "Egiptul Antic"),
        prompt: ml("Fange Dinge aus Ägypten.", "Catch Egyptian items.", "Fogj egyiptomi dolgokat.", "Prinde obiecte egiptene."),
        goal: 5,
        speed: 5.5,
        theme: { sky: "#422006", glow: "#fcd34d", accent: "#eab308" },
        correctItems: [
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "mumie", label: ml("Mumie", "Mummy", "Múmia", "Mumie"), emoji: "🩹" },
          { id: "kamel", label: ml("Kamel", "Camel", "Teve", "Cămilă"), emoji: "🐪" },
          { id: "papyrus", label: ml("Papyrus", "Papyrus", "Papirusz", "Papirus"), emoji: "📜" },
        ],
        wrongItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
        ],
      },
      {
        id: "ge-5-mc-3",
        title: ml("Altes Rom", "Ancient Rome", "Ókori Róma", "Roma Antică"),
        prompt: ml("Fange Dinge aus Rom.", "Catch Roman items.", "Fogj római dolgokat.", "Prinde obiecte romane."),
        goal: 5,
        speed: 6,
        theme: { sky: "#450a0a", glow: "#f87171", accent: "#ef4444" },
        correctItems: [
          { id: "legionär", label: ml("Legionär", "Legionary", "Légiós", "Legionar"), emoji: "🛡️" },
          { id: "kolosseum", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
          { id: "aquädukt", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉" },
          { id: "gladiator", label: ml("Gladiator", "Gladiator", "Gladiátor", "Gladiator"), emoji: "⚔️" },
          { id: "toga", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘" },
        ],
        wrongItems: [
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "zug", label: ml("Zug", "Train", "Vonat", "Tren"), emoji: "🚂" },
        ],
      },
      {
        id: "ge-5-mc-4",
        title: ml("Altes Griechenland", "Ancient Greece", "Ókori Görögország", "Grecia Antică"),
        prompt: ml("Fange Griechisches.", "Catch Greek items.", "Fogj görög dolgokat.", "Prinde obiecte grecești."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#1e3a8a", glow: "#60a5fa", accent: "#3b82f6" },
        correctItems: [
          { id: "tempel", label: ml("Tempel", "Temple", "Templom", "Templu"), emoji: "🏛️" },
          { id: "olympia", label: ml("Olympia", "Olympics", "Olimpia", "Olimpiadă"), emoji: "🏃" },
          { id: "philosoph", label: ml("Philosoph", "Philosopher", "Filozófus", "Filosof"), emoji: "🤔" },
          { id: "götter", label: ml("Zeus/Götter", "Gods", "Istenek", "Zei"), emoji: "⚡" },
          { id: "hoplit", label: ml("Hoplit", "Hoplite", "Hoplita", "Hoplit"), emoji: "🛡️" },
        ],
        wrongItems: [
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "kolosseum", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "⚔️" },
        ],
      },
      {
        id: "ge-5-mc-5",
        title: ml("Antike Götter", "Ancient Gods", "Ókori istenek", "Zei antici"),
        prompt: ml("Fange die Götter ein.", "Catch the gods.", "Fogd be az isteneket.", "Prinde zeii."),
        goal: 5,
        speed: 7,
        theme: { sky: "#2e1065", glow: "#c084fc", accent: "#9333ea" },
        correctItems: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡" },
          { id: "jupiter", label: ml("Jupiter", "Jupiter", "Jupiter", "Jupiter"), emoji: "🦅" },
          { id: "athene", label: ml("Athene", "Athena", "Pallasz Athéné", "Atena"), emoji: "🦉" },
          { id: "mars", label: ml("Mars", "Mars", "Mars", "Marte"), emoji: "⚔️" },
          { id: "poseidon", label: ml("Poseidon", "Poseidon", "Poszeidón", "Poseidon"), emoji: "🔱" },
        ],
        wrongItems: [
          { id: "kaiser", label: ml("Kaiser", "Emperor", "Császár", "Împărat"), emoji: "👑" },
          { id: "senator", label: ml("Senator", "Senator", "Szenátor", "Senator"), emoji: "📜" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "🏺" },
        ],
      },
      {
        id: "ge-5-mc-6",
        title: ml("Kelten", "Celts", "Kelták", "Celți"),
        prompt: ml("Fange keltische Dinge.", "Catch Celtic items.", "Fogj kelta dolgokat.", "Prinde lucruri celtice."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#064e3b", glow: "#10b981", accent: "#059669" },
        correctItems: [
          { id: "druide", label: ml("Druide", "Druid", "Druida", "Druid"), emoji: "🧙‍♂️" },
          { id: "eisen", label: ml("Eisenwaffe", "Iron weapon", "Vasfegyver", "Armă fier"), emoji: "🗡️" },
          { id: "schmuck", label: ml("Goldschmuck", "Jewelry", "Aranyékszer", "Bijuterii"), emoji: "💍" },
          { id: "dorf", label: ml("Rundhaus", "Roundhouse", "Kerek ház", "Casă rotundă"), emoji: "🛖" },
          { id: "schild", label: ml("Holzschild", "Shield", "Fapajzs", "Scut"), emoji: "🛡️" },
        ],
        wrongItems: [
          { id: "toga", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "mumie", label: ml("Mumie", "Mummy", "Múmia", "Mumie"), emoji: "🩹" },
        ],
      },
      {
        id: "ge-5-mc-7",
        title: ml("Germanen", "Germanic Tribes", "Germánok", "Triburi germanice"),
        prompt: ml("Fange germanische Dinge.", "Catch Germanic items.", "Fogj germán dolgokat.", "Prinde obiecte germanice."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#1c1917", glow: "#a8a29e", accent: "#78716c" },
        correctItems: [
          { id: "speer", label: ml("Speer", "Spear", "Dárda", "Suliță"), emoji: "🦯" },
          { id: "dorf", label: ml("Langhaus", "Longhouse", "Hosszúház", "Casă lungă"), emoji: "🛖" },
          { id: "runen", label: ml("Runen", "Runes", "Rúnák", "Rune"), emoji: "🪨" },
          { id: "wald", label: ml("Wald", "Forest", "Erdő", "Pădure"), emoji: "🌲" },
          { id: "fell", label: ml("Tierfell", "Fur", "Állatbőr", "Blană"), emoji: "🐻" },
        ],
        wrongItems: [
          { id: "aquädukt", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉" },
          { id: "kolosseum", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
          { id: "tempel", label: ml("Tempel", "Temple", "Templom", "Templu"), emoji: "🏛️" },
        ],
      },
      {
        id: "ge-5-mc-8",
        title: ml("Antike Erfindungen", "Ancient Inventions", "Ókori találmányok", "Invenții antice"),
        prompt: ml("Fange antike Erfindungen.", "Catch ancient inventions.", "Fogj ókori találmányokat.", "Prinde invenții antice."),
        goal: 5,
        speed: 7,
        theme: { sky: "#422006", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "rad", label: ml("Rad", "Wheel", "Kerék", "Roată"), emoji: "🛞" },
          { id: "schrift", label: ml("Schrift", "Writing", "Írás", "Scriere"), emoji: "✍️" },
          { id: "muenze", label: ml("Münze", "Coin", "Érme", "Monedă"), emoji: "🪙" },
          { id: "segel", label: ml("Segelboot", "Sailboat", "Vitorlás", "Barcă"), emoji: "⛵" },
          { id: "kalender", label: ml("Kalender", "Calendar", "Naptár", "Calendar"), emoji: "📅" },
        ],
        wrongItems: [
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "brille", label: ml("Brille", "Glasses", "Szemüveg", "Ochelari"), emoji: "👓" },
        ],
      },
      {
        id: "ge-5-mc-9",
        title: ml("Frühe Herrscher", "Early Rulers", "Korai uralkodók", "Conducători timpurii"),
        prompt: ml("Fange berühmte Herrscher.", "Catch famous rulers.", "Fogj híres uralkodókat.", "Prinde conducători faimoși."),
        goal: 5,
        speed: 7,
        theme: { sky: "#2e1065", glow: "#c084fc", accent: "#9333ea" },
        correctItems: [
          { id: "alexander", label: ml("Alexander d. Große", "Alexander", "Nagy Sándor", "Alexandru cel Mare"), emoji: "🐎" },
          { id: "caesar", label: ml("Caesar", "Caesar", "Caesar", "Cezar"), emoji: "📜" },
          { id: "ramses", label: ml("Ramses", "Ramses", "Ramszesz", "Ramses"), emoji: "👑" },
          { id: "hammurabi", label: ml("Hammurabi", "Hammurabi", "Hammurápi", "Hammurabi"), emoji: "⚖️" },
          { id: "augustus", label: ml("Augustus", "Augustus", "Augustus", "Augustus"), emoji: "🏛️" },
        ],
        wrongItems: [
          { id: "bauer", label: ml("Bauer", "Farmer", "Paraszt", "Fermier"), emoji: "🌾" },
          { id: "sklave", label: ml("Sklave", "Slave", "Rabszolga", "Sclav"), emoji: "⛓️" },
          { id: "handwerker", label: ml("Handwerker", "Craftsman", "Kézműves", "Meșteșugar"), emoji: "🔨" },
        ],
      },
      {
        id: "ge-5-mc-10",
        title: ml("Antike Weltwunder", "Ancient Wonders", "Ókori csodák", "Minuni antice"),
        prompt: ml("Fange die Weltwunder.", "Catch the wonders.", "Fogd be a világcsodákat.", "Prinde minunile."),
        goal: 5,
        speed: 7.5,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#2563eb" },
        correctItems: [
          { id: "pyramide", label: ml("Pyramiden", "Pyramids", "Piramisok", "Piramide"), emoji: "🔺" },
          { id: "leuchtturm", label: ml("Leuchtturm", "Lighthouse", "Világítótorony", "Far"), emoji: "🗼" },
          { id: "gaerten", label: ml("Hängende Gärten", "Hanging Gardens", "Függőkert", "Grădini"), emoji: "🌿" },
          { id: "tempel", label: ml("Artemistempel", "Artemis Temple", "Artemisz templom", "Templul Artemis"), emoji: "🏛️" },
          { id: "koloss", label: ml("Koloss v. Rhodos", "Colossus", "Kolosszus", "Colosul"), emoji: "🗽" },
        ],
        wrongItems: [
          { id: "eiffelturm", label: ml("Eiffelturm", "Eiffel Tower", "Eiffel-torony", "Turnul Eiffel"), emoji: "🗼" },
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "dom", label: ml("Dom", "Cathedral", "Katedrális", "Catedrală"), emoji: "⛪" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "ge-5-os-1",
        title: ml("Steinzeit vs Metallzeit", "Stone vs Metal Age", "Kő- vs Fémkorszak", "Piatră vs Metal"),
        instruction: ml("Sortiere die Funde.", "Sort findings.", "Rendezd a leleteket.", "Sortează descoperirile."),
        theme: { bg: "#1f2937", orbit: "#d1d5db", accent: "#9ca3af" },
        buckets: [
          { id: "stein", label: ml("Steinzeit", "Stone Age", "Kőkorszak", "Epoca Pietrei"), color: "#f59e0b" },
          { id: "metall", label: ml("Metallzeit", "Metal Age", "Fémkorszak", "Epoca Metalelor"), color: "#3b82f6" },
        ],
        items: [
          { id: "faustkeil", label: ml("Faustkeil", "Hand axe", "Szakóca", "Toporaș"), emoji: "🪨", bucketId: "stein" },
          { id: "feuerstein", label: ml("Feuerstein", "Flint", "Tűzkő", "Cremene"), emoji: "🔥", bucketId: "stein" },
          { id: "hoehle", label: ml("Höhlenmalerei", "Cave art", "Barlangrajz", "Artă rupestră"), emoji: "✍️", bucketId: "stein" },
          { id: "bronze", label: ml("Bronzeschwert", "Bronze sword", "Bronzkard", "Sabie bronz"), emoji: "🗡️", bucketId: "metall" },
          { id: "eisen", label: ml("Eisenpflug", "Iron plow", "Vaseke", "Plug de fier"), emoji: "🚜", bucketId: "metall" },
          { id: "gold", label: ml("Goldschmuck", "Gold jewelry", "Aranyékszer", "Bijuterii aur"), emoji: "💍", bucketId: "metall" },
        ],
      },
      {
        id: "ge-5-os-2",
        title: ml("Ägypten vs Rom", "Egypt vs Rome", "Egyiptom vs Róma", "Egipt vs Roma"),
        instruction: ml("Ordne die Begriffe zu.", "Assign the terms.", "Rendezd a fogalmakat.", "Asignează termenii."),
        theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "egypt", label: ml("Ägypten", "Egypt", "Egyiptom", "Egipt"), color: "#fcd34d" },
          { id: "rom", label: ml("Rom", "Rome", "Róma", "Roma"), color: "#ef4444" },
        ],
        items: [
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺", bucketId: "egypt" },
          { id: "nil", label: ml("Nil", "Nile", "Nílus", "Nil"), emoji: "🌊", bucketId: "egypt" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑", bucketId: "egypt" },
          { id: "kolosseum", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️", bucketId: "rom" },
          { id: "gladiator", label: ml("Gladiator", "Gladiator", "Gladiátor", "Gladiator"), emoji: "⚔️", bucketId: "rom" },
          { id: "caesar", label: ml("Cäsar", "Caesar", "Caesar", "Cezar"), emoji: "📜", bucketId: "rom" },
        ],
      },
      {
        id: "ge-5-os-3",
        title: ml("Griechen vs Römer", "Greeks vs Romans", "Görögök vs Rómaiak", "Greci vs Romani"),
        instruction: ml("Sortiere Kultur/Personen.", "Sort culture/people.", "Rendezd a kultúrát.", "Sortează cultura."),
        theme: { bg: "#1e3a8a", orbit: "#3b82f6", accent: "#2563eb" },
        buckets: [
          { id: "greek", label: ml("Griechen", "Greeks", "Görögök", "Greci"), color: "#60a5fa" },
          { id: "roman", label: ml("Römer", "Romans", "Rómaiak", "Romani"), color: "#ef4444" },
        ],
        items: [
          { id: "olympia", label: ml("Olympische Spiele", "Olympics", "Olimpia", "J. Olimpice"), emoji: "🏃", bucketId: "greek" },
          { id: "athen", label: ml("Athen", "Athens", "Athén", "Atena"), emoji: "🏛️", bucketId: "greek" },
          { id: "sokrates", label: ml("Sokrates", "Socrates", "Szókratész", "Socrate"), emoji: "🤔", bucketId: "greek" },
          { id: "legion", label: ml("Legion", "Legion", "Légió", "Legiune"), emoji: "🛡️", bucketId: "roman" },
          { id: "aquädukt", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉", bucketId: "roman" },
          { id: "latein", label: ml("Latein", "Latin", "Latin nyelv", "Latină"), emoji: "📖", bucketId: "roman" },
        ],
      },
      {
        id: "ge-5-os-4",
        title: ml("Jäger oder Bauer?", "Hunter or Farmer?", "Vadász vagy Földműves?", "Vânător sau Fermier?"),
        instruction: ml("Alt- vs Jungsteinzeit.", "Paleo- vs Neolithic.", "Ős- vs Újkőkorszak.", "Paleo- vs Neolitic."),
        theme: { bg: "#064e3b", orbit: "#10b981", accent: "#059669" },
        buckets: [
          { id: "jaeger", label: ml("Jäger & Sammler", "Hunter/Gatherer", "Vadászó", "Vânător"), color: "#f59e0b" },
          { id: "bauer", label: ml("Bauern", "Farmers", "Földműves", "Fermier"), color: "#10b981" },
        ],
        items: [
          { id: "zelt", label: ml("Zelt/Höhle", "Tent/Cave", "Sátor/Barlang", "Cort/Peșteră"), emoji: "⛺", bucketId: "jaeger" },
          { id: "speer", label: ml("Speerjagd", "Spear hunt", "Dárdás vadászat", "Vânătoare"), emoji: "🦯", bucketId: "jaeger" },
          { id: "nomade", label: ml("Nomaden", "Nomads", "Nomádok", "Nomazi"), emoji: "🚶", bucketId: "jaeger" },
          { id: "feld", label: ml("Feldanbau", "Farming", "Földművelés", "Agricultură"), emoji: "🌾", bucketId: "bauer" },
          { id: "dorf", label: ml("Dorf", "Village", "Falu", "Sat"), emoji: "🛖", bucketId: "bauer" },
          { id: "tierhaltung", label: ml("Haustiere", "Livestock", "Háziállatok", "Anim. dom."), emoji: "🐄", bucketId: "bauer" },
        ],
      },
      {
        id: "ge-5-os-5",
        title: ml("Götter: Griechisch/Römisch", "Gods: Greek/Roman", "Istenek: Görög/Római", "Zei: Greci/Romani"),
        instruction: ml("Sortiere die Götter.", "Sort the gods.", "Rendezd az isteneket.", "Sortează zeii."),
        theme: { bg: "#4c1d95", orbit: "#a855f7", accent: "#9333ea" },
        buckets: [
          { id: "gr", label: ml("Griechisch", "Greek", "Görög", "Grec"), color: "#3b82f6" },
          { id: "ro", label: ml("Römisch", "Roman", "Római", "Roman"), color: "#ef4444" },
        ],
        items: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡", bucketId: "gr" },
          { id: "poseidon", label: ml("Poseidon", "Poseidon", "Poszeidón", "Poseidon"), emoji: "🔱", bucketId: "gr" },
          { id: "ares", label: ml("Ares", "Ares", "Arész", "Ares"), emoji: "⚔️", bucketId: "gr" },
          { id: "jupiter", label: ml("Jupiter", "Jupiter", "Jupiter", "Jupiter"), emoji: "🦅", bucketId: "ro" },
          { id: "neptun", label: ml("Neptun", "Neptune", "Neptunus", "Neptun"), emoji: "🌊", bucketId: "ro" },
          { id: "mars", label: ml("Mars", "Mars", "Mars", "Marte"), emoji: "🛡️", bucketId: "ro" },
        ],
      },
      {
        id: "ge-5-os-6",
        title: ml("Griechen vs Ägypter", "Greeks vs Egyptians", "Görögök vs Egyiptomiak", "Greci vs Egipteni"),
        instruction: ml("Sortiere Kultur.", "Sort culture.", "Rendezd a kultúrát.", "Sortează cultura."),
        theme: { bg: "#1e3a8a", orbit: "#fcd34d", accent: "#3b82f6" },
        buckets: [
          { id: "greek", label: ml("Griechen", "Greeks", "Görögök", "Greci"), color: "#60a5fa" },
          { id: "egypt", label: ml("Ägypter", "Egyptians", "Egyiptomiak", "Egipteni"), color: "#eab308" },
        ],
        items: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡", bucketId: "greek" },
          { id: "tempel", label: ml("Tempel", "Temple", "Templom", "Templu"), emoji: "🏛️", bucketId: "greek" },
          { id: "olympia", label: ml("Olympia", "Olympics", "Olimpia", "Olimpiadă"), emoji: "🏃", bucketId: "greek" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺", bucketId: "egypt" },
          { id: "nil", label: ml("Nil", "Nile", "Nílus", "Nil"), emoji: "🌊", bucketId: "egypt" },
          { id: "mumie", label: ml("Mumie", "Mummy", "Múmia", "Mumie"), emoji: "🩹", bucketId: "egypt" },
        ],
      },
      {
        id: "ge-5-os-7",
        title: ml("Römer vs Kelten", "Romans vs Celts", "Rómaiak vs Kelták", "Romani vs Celți"),
        instruction: ml("Sortiere die Völker.", "Sort the peoples.", "Rendezd a népeket.", "Sortează popoarele."),
        theme: { bg: "#450a0a", orbit: "#10b981", accent: "#ef4444" },
        buckets: [
          { id: "roman", label: ml("Römer", "Romans", "Rómaiak", "Romani"), color: "#ef4444" },
          { id: "kelt", label: ml("Kelten", "Celts", "Kelták", "Celți"), color: "#10b981" },
        ],
        items: [
          { id: "legion", label: ml("Legionär", "Legionary", "Légiós", "Legionar"), emoji: "🛡️", bucketId: "roman" },
          { id: "stein", label: ml("Steinstraße", "Stone road", "Kőút", "Drum de piatră"), emoji: "🛣️", bucketId: "roman" },
          { id: "toga", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘", bucketId: "roman" },
          { id: "druide", label: ml("Druide", "Druid", "Druida", "Druid"), emoji: "🧙‍♂️", bucketId: "kelt" },
          { id: "rundhaus", label: ml("Rundhaus", "Roundhouse", "Kerek ház", "Casă rotundă"), emoji: "🛖", bucketId: "kelt" },
          { id: "wald", label: ml("Waldheiligtum", "Forest shrine", "Erdei szentély", "Sanctuar"), emoji: "🌲", bucketId: "kelt" },
        ],
      },
      {
        id: "ge-5-os-8",
        title: ml("Kaiser vs Pharao", "Emperor vs Pharaoh", "Császár vs Fáraó", "Împărat vs Faraon"),
        instruction: ml("Wer herrscht wo?", "Who rules where?", "Ki hol uralkodik?", "Cine conduce unde?"),
        theme: { bg: "#422006", orbit: "#ef4444", accent: "#d97706" },
        buckets: [
          { id: "kaiser", label: ml("Römischer Kaiser", "Roman Emperor", "Római császár", "Împărat Roman"), color: "#ef4444" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), color: "#eab308" },
        ],
        items: [
          { id: "caesar", label: ml("Julius Caesar", "Caesar", "Julius Caesar", "Iulius Cezar"), emoji: "📜", bucketId: "kaiser" },
          { id: "augustus", label: ml("Augustus", "Augustus", "Augustus", "Augustus"), emoji: "🏛️", bucketId: "kaiser" },
          { id: "rom", label: ml("Herrscht in Rom", "Rules Rome", "Rómában uralkodik", "Conduce Roma"), emoji: "🐺", bucketId: "kaiser" },
          { id: "ramses", label: ml("Ramses", "Ramses", "Ramszesz", "Ramses"), emoji: "👑", bucketId: "pharao" },
          { id: "tuten", label: ml("Tutanchamun", "Tutankhamun", "Tutanhamon", "Tutankhamon"), emoji: "🏺", bucketId: "pharao" },
          { id: "egypt", label: ml("Gottkönig", "God King", "Istenkirály", "Zeu rege"), emoji: "👁️", bucketId: "pharao" },
        ],
      },
      {
        id: "ge-5-os-9",
        title: ml("Antike Waffen vs Werkzeuge", "Weapons vs Tools", "Fegyverek vs Szerszámok", "Arme vs Unelte"),
        instruction: ml("Sortiere Gegenstände.", "Sort items.", "Rendezd a tárgyakat.", "Sortează obiectele."),
        theme: { bg: "#1f2937", orbit: "#6b7280", accent: "#9ca3af" },
        buckets: [
          { id: "waffe", label: ml("Waffen", "Weapons", "Fegyverek", "Arme"), color: "#ef4444" },
          { id: "werk", label: ml("Werkzeuge", "Tools", "Szerszámok", "Unelte"), color: "#3b82f6" },
        ],
        items: [
          { id: "gladius", label: ml("Gladius (Schwert)", "Sword", "Kard", "Sabie"), emoji: "🗡️", bucketId: "waffe" },
          { id: "speer", label: ml("Speer", "Spear", "Dárda", "Suliță"), emoji: "🦯", bucketId: "waffe" },
          { id: "schild", label: ml("Schild", "Shield", "Pajzs", "Scut"), emoji: "🛡️", bucketId: "waffe" },
          { id: "pflug", label: ml("Pflug", "Plow", "Eke", "Plug"), emoji: "🚜", bucketId: "werk" },
          { id: "hammer", label: ml("Hammer", "Hammer", "Kalapács", "Ciocan"), emoji: "🔨", bucketId: "werk" },
          { id: "nadel", label: ml("Nähnadel", "Needle", "Varrótű", "Ac"), emoji: "🪡", bucketId: "werk" },
        ],
      },
      {
        id: "ge-5-os-10",
        title: ml("Götter vs Menschen", "Gods vs Humans", "Istenek vs Emberek", "Zei vs Oameni"),
        instruction: ml("Mythe vs Realität.", "Myth vs Reality.", "Mítosz vs Valóság.", "Mit vs Realitate."),
        theme: { bg: "#2e1065", orbit: "#c084fc", accent: "#9333ea" },
        buckets: [
          { id: "gott", label: ml("Gott/Göttin", "God/Goddess", "Isten/Istennő", "Zeu/Zeiță"), color: "#a855f7" },
          { id: "mensch", label: ml("Sterblicher", "Mortal", "Halandó", "Muritor"), color: "#f87171" },
        ],
        items: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡", bucketId: "gott" },
          { id: "athene", label: ml("Athene", "Athena", "Pallasz Athéné", "Atena"), emoji: "🦉", bucketId: "gott" },
          { id: "apollo", label: ml("Apollon", "Apollo", "Apollón", "Apollo"), emoji: "☀️", bucketId: "gott" },
          { id: "legion", label: ml("Legionär", "Legionary", "Légiós", "Legionar"), emoji: "🛡️", bucketId: "mensch" },
          { id: "philo", label: ml("Philosoph", "Philosopher", "Filozófus", "Filosof"), emoji: "🤔", bucketId: "mensch" },
          { id: "bauer", label: ml("Bauer", "Farmer", "Földműves", "Fermier"), emoji: "🌾", bucketId: "mensch" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "ge-5-sr-1",
        title: ml("Ägypten Quiz", "Egypt Quiz", "Egyiptom Kvíz", "Test Egipt"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-1-s1",
            title: ml("Herrscher", "Ruler", "Uralkodó", "Conducător"),
            prompt: ml("Wie hieß der König in Ägypten?", "Title of Egyptian king?", "Hogy hívták a királyt?", "Titlul regelui?"),
            sceneType: "community",
            visual: { icon: "👑", bg: "#422006", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Kaiser", "Emperor", "Császár", "Împărat") },
              { id: "b", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon") },
              { id: "c", label: ml("Zar", "Tsar", "Cár", "Țar") },
              { id: "d", label: ml("Präsident", "President", "Elnök", "Președinte") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-2",
        title: ml("Steinzeit", "Stone Age", "Kőkorszak", "Epoca Pietrei"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-2-s1",
            title: ml("Werkzeug", "Tool", "Szerszám", "Unealtă"),
            prompt: ml("Woraus waren erste Werkzeuge?", "First tools made of?", "Miből voltak az elsők?", "Din ce erau uneltele?"),
            sceneType: "nature",
            visual: { icon: "🪨", bg: "#1c1917", accent: "#a8a29e" },
            choices: [
              { id: "a", label: ml("Stein", "Stone", "Kő", "Piatră") },
              { id: "b", label: ml("Eisen", "Iron", "Vas", "Fier") },
              { id: "c", label: ml("Plastik", "Plastic", "Műanyag", "Plastic") },
              { id: "d", label: ml("Glas", "Glass", "Üveg", "Sticlă") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-3",
        title: ml("Römer", "Romans", "Rómaiak", "Romani"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-3-s1",
            title: ml("Armee", "Army", "Hadsereg", "Armată"),
            prompt: ml("Wie hieß ein römischer Soldat?", "Roman soldier called?", "Hogy hívták a katonát?", "Soldat roman?"),
            sceneType: "safety",
            visual: { icon: "🛡️", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Ritter", "Knight", "Lovag", "Cavaler") },
              { id: "b", label: ml("Legionär", "Legionary", "Légiós", "Legionar") },
              { id: "c", label: ml("Hoplit", "Hoplite", "Hoplita", "Hoplit") },
              { id: "d", label: ml("Ninja", "Ninja", "Nindzsa", "Ninja") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-4",
        title: ml("Griechen", "Greeks", "Görögök", "Greci"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-4-s1",
            title: ml("Spiele", "Games", "Játékok", "Jocuri"),
            prompt: ml("Welche Spiele erfanden sie?", "Which games did they invent?", "Milyen játékot találtak fel?", "Ce jocuri au inventat?"),
            sceneType: "community",
            visual: { icon: "🏃", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Fußball", "Football", "Foci", "Fotbal") },
              { id: "b", label: ml("Olympische Spiele", "Olympics", "Olimpia", "Olimpiadă") },
              { id: "c", label: ml("Schach", "Chess", "Sakk", "Șah") },
              { id: "d", label: ml("Gladiatoren", "Gladiator", "Gladiátor", "Gladiator") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-5",
        title: ml("Erfindungen", "Inventions", "Találmányok", "Invenții"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-5-s1",
            title: ml("Schrift", "Writing", "Írás", "Scriere"),
            prompt: ml("Wer erfand die Hieroglyphen?", "Who invented hieroglyphs?", "Kik találták fel a hieroglifákat?", "Cine a inv. hieroglifele?"),
            sceneType: "community",
            visual: { icon: "✍️", bg: "#422006", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Römer", "Romans", "Rómaiak", "Romani") },
              { id: "b", label: ml("Griechen", "Greeks", "Görögök", "Greci") },
              { id: "c", label: ml("Ägypter", "Egyptians", "Egyiptomiak", "Egipteni") },
              { id: "d", label: ml("Steinzeit", "Stone Age", "Kőkorszakiak", "Omul de piatră") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-6",
        title: ml("Kelten", "Celts", "Kelták", "Celți"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-6-s1",
            title: ml("Priester", "Priests", "Papok", "Preoți"),
            prompt: ml("Wie hießen keltische Priester?", "Celtic priests?", "Hogy hívták a kelta papokat?", "Preoți celtici?"),
            sceneType: "nature",
            visual: { icon: "🧙‍♂️", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon") },
              { id: "b", label: ml("Druiden", "Druids", "Druidák", "Druizi") },
              { id: "c", label: ml("Mönche", "Monks", "Szerzetesek", "Călugări") },
              { id: "d", label: ml("Senatoren", "Senators", "Szenátorok", "Senatori") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-7",
        title: ml("Antike Erfindungen", "Ancient Inventions", "Ókori találmányok", "Invenții antice"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-7-s1",
            title: ml("Papier", "Paper", "Papír", "Hârtie"),
            prompt: ml("Worauf schrieben die Ägypter?", "What did Egyptians write on?", "Mire írtak az egyiptomiak?", "Pe ce scriau egiptenii?"),
            sceneType: "community",
            visual: { icon: "📜", bg: "#422006", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Papyrus", "Papyrus", "Papirusz", "Papirus") },
              { id: "b", label: ml("Papier", "Paper", "Papír", "Hârtie") },
              { id: "c", label: ml("Plastik", "Plastic", "Műanyag", "Plastic") },
              { id: "d", label: ml("Glas", "Glass", "Üveg", "Sticlă") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-8",
        title: ml("Römer", "Romans", "Rómaiak", "Romani"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-8-s1",
            title: ml("Architektur", "Architecture", "Építészet", "Arhitectură"),
            prompt: ml("Womit transportierten Römer Wasser?", "Roman water transport?", "Mivel szállítottak vizet?", "Transportul apei romane?"),
            sceneType: "community",
            visual: { icon: "🌉", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Züge", "Trains", "Vonatok", "Trenuri") },
              { id: "b", label: ml("Autos", "Cars", "Autók", "Mașini") },
              { id: "c", label: ml("Aquädukte", "Aqueducts", "Vízvezetékek", "Apeducte") },
              { id: "d", label: ml("Flugzeuge", "Airplanes", "Repülők", "Avioane") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-9",
        title: ml("Griechen", "Greeks", "Görögök", "Greci"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-9-s1",
            title: ml("Wissen", "Knowledge", "Tudás", "Cunoaștere"),
            prompt: ml("Wie hießen griechische Denker?", "Greek thinkers?", "Hogy hívták a gondolkodókat?", "Gânditori greci?"),
            sceneType: "community",
            visual: { icon: "🤔", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Gladiatoren", "Gladiators", "Gladiátorok", "Gladiatori") },
              { id: "b", label: ml("Philosophen", "Philosophers", "Filozófusok", "Filosofi") },
              { id: "c", label: ml("Pharaonen", "Pharaohs", "Fáraók", "Faraoni") },
              { id: "d", label: ml("Ritter", "Knights", "Lovagok", "Cavaleri") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-5-sr-10",
        title: ml("Steinzeit Tiere", "Stone Age Animals", "Kőkorszaki állatok", "Animale Epoca Pietrei"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-5-sr-10-s1",
            title: ml("Jagd", "Hunting", "Vadászat", "Vânătoare"),
            prompt: ml("Welches Tier jagten sie oft?", "Which animal did they hunt?", "Melyik állatra vadásztak?", "Ce animal vânau?"),
            sceneType: "nature",
            visual: { icon: "🦣", bg: "#1c1917", accent: "#a8a29e" },
            choices: [
              { id: "a", label: ml("Dinosaurier", "Dinosaurs", "Dinoszauruszok", "Dinozauri") },
              { id: "b", label: ml("Mammuts", "Mammoths", "Mamutok", "Mamuți") },
              { id: "c", label: ml("Pinguine", "Penguins", "Pingvinek", "Pinguini") },
              { id: "d", label: ml("Katzen", "Cats", "Macskák", "Pisici") },
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
        id: "ge-5-cb-1",
        title: ml("Zeitalter", "Ages", "Korszakok", "Epoci"),
        instruction: ml("Ordne chronologisch.", "Order chronologically.", "Rendezd időrendben.", "Ordonează cronologic."),
        hint: ml("Steinzeit zuerst.", "Stone Age first.", "Kőkorszak elöl.", "Epoca de Piatră prima."),
        theme: { bg: "#1f2937", accent: "#9ca3af", card: "#374151" },
        parts: [
          { id: "stein", label: ml("Steinzeit", "Stone Age", "Kőkorszak", "Piatră"), emoji: "🪨" },
          { id: "bronze", label: ml("Bronzezeit", "Bronze Age", "Bronzkorszak", "Bronz"), emoji: "🥉" },
          { id: "eisen", label: ml("Eisenzeit", "Iron Age", "Vaskorszak", "Fier"), emoji: "🔩" },
          { id: "antike", label: ml("Antike", "Antiquity", "Ókor", "Antichitate"), emoji: "🏛️" },
        ],
        slots: [
          { id: "s1", label: "1. Älteste" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Jüngste" },
        ],
        solution: ["stein", "bronze", "eisen", "antike"],
      },
      {
        id: "ge-5-cb-2",
        title: ml("Ägypten Gesellschaft", "Egypt Society", "Egyiptom társadalom", "Societate Egipt"),
        instruction: ml("Von mächtig zu unmächtig.", "Most to least powerful.", "Leghatalmasabbtól lefelé.", "Cel mai puternic la slab."),
        hint: ml("Pharao ist oben.", "Pharaoh at top.", "A fáraó van legfelül.", "Faraonul e sus."),
        theme: { bg: "#422006", accent: "#f59e0b", card: "#78350f" },
        parts: [
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "priester", label: ml("Priester", "Priests", "Papok", "Preoți"), emoji: "📜" },
          { id: "schreiber", label: ml("Schreiber", "Scribes", "Írnokok", "Scribi"), emoji: "✍️" },
          { id: "bauern", label: ml("Bauern/Sklaven", "Farmers/Slaves", "Földművesek/Rabsz.", "Fermieri/Sclavi"), emoji: "🌾" },
        ],
        slots: [
          { id: "s1", label: "1. Oben" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Unten" },
        ],
        solution: ["pharao", "priester", "schreiber", "bauern"],
      },
      {
        id: "ge-5-cb-3",
        title: ml("Römisches Reich", "Roman Empire", "Római Birodalom", "Imperiul Roman"),
        instruction: ml("Ordne chronologisch.", "Order chronologically.", "Rendezd időrendben.", "Ordonează cronologic."),
        hint: ml("Dorf zuerst.", "Village first.", "Először egy falu volt.", "Sat întâi."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "dorf", label: ml("Gründung", "Foundation", "Alapítás", "Fondare"), emoji: "🛖" },
          { id: "republik", label: ml("Republik", "Republic", "Köztársaság", "Republică"), emoji: "📜" },
          { id: "kaiser", label: ml("Kaiserzeit", "Empire", "Császárság", "Imperiu"), emoji: "👑" },
          { id: "fall", label: ml("Untergang", "Fall", "Bukás", "Cădere"), emoji: "🔥" },
        ],
        slots: [
          { id: "s1", label: "1. 753 v.Chr." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. 476 n.Chr." },
        ],
        solution: ["dorf", "republik", "kaiser", "fall"],
      },
      {
        id: "ge-5-cb-4",
        title: ml("Menschheitsentwicklung", "Human Evolution", "Emberré válás", "Evoluția umană"),
        instruction: ml("Ordne die Vorfahren.", "Order ancestors.", "Rendezd az ősöket.", "Ordonează strămoșii."),
        hint: ml("Australopithecus zuerst.", "Australopithecus first.", "Australopithecus az első.", "Australopithecus prim."),
        theme: { bg: "#1c1917", accent: "#a8a29e", card: "#292524" },
        parts: [
          { id: "aust", label: ml("Australopithecus", "Australopithecus", "Australopithecus", "Australopithecus"), emoji: "🐒" },
          { id: "habilis", label: ml("Homo habilis", "Homo habilis", "Homo habilis", "Homo habilis"), emoji: "🪨" },
          { id: "erectus", label: ml("Homo erectus", "Homo erectus", "Homo erectus", "Homo erectus"), emoji: "🔥" },
          { id: "sapiens", label: ml("Homo sapiens", "Homo sapiens", "Homo sapiens", "Homo sapiens"), emoji: "🧑" },
        ],
        slots: [
          { id: "s1", label: "1. Älteste" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Heute" },
        ],
        solution: ["aust", "habilis", "erectus", "sapiens"],
      },
      {
        id: "ge-5-cb-5",
        title: ml("Griechische Säulen", "Greek Columns", "Görög oszlopok", "Coloane grecești"),
        instruction: ml("Einfach zu Komplex.", "Simple to complex.", "Egyszerűtől a bonyolultig.", "Simplu la complex."),
        hint: ml("Dorisch ist am einfachsten.", "Doric is simplest.", "A dór a legegyszerűbb.", "Doric e cel mai simplu."),
        theme: { bg: "#1e3a8a", accent: "#93c5fd", card: "#1e40af" },
        parts: [
          { id: "dor", label: ml("Dorisch (einfach)", "Doric (simple)", "Dór (egyszerű)", "Doric (simplu)"), emoji: "🏛️" },
          { id: "ion", label: ml("Ionisch (Schnecke)", "Ionic (scroll)", "Ión (csiga)", "Ionic (melc)"), emoji: "🏛️" },
          { id: "kor", label: ml("Korinthisch (Blätter)", "Corinthian", "Korinthoszi", "Corintic"), emoji: "🏛️" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
        ],
        solution: ["dor", "ion", "kor"],
      },
      {
        id: "ge-5-cb-6",
        title: ml("Pyramiden Bau", "Pyramid Building", "Piramis építés", "Construire piramidă"),
        instruction: ml("Schritte zum Bau.", "Building steps.", "Építési lépések.", "Pași construire."),
        hint: ml("Planung zuerst.", "Plan first.", "Tervezés az első.", "Planificare prima."),
        theme: { bg: "#422006", accent: "#f59e0b", card: "#78350f" },
        parts: [
          { id: "plan", label: ml("Planung", "Planning", "Tervezés", "Planificare"), emoji: "📜" },
          { id: "steine", label: ml("Steine hauen", "Cut stones", "Kőfejtés", "Tăiere pietre"), emoji: "🪨" },
          { id: "transport", label: ml("Transport", "Transport", "Szállítás", "Transport"), emoji: "🛶" },
          { id: "bau", label: ml("Aufbau", "Building", "Felépítés", "Construire"), emoji: "🔺" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["plan", "steine", "transport", "bau"],
      },
      {
        id: "ge-5-cb-7",
        title: ml("Römische Armee", "Roman Army", "Római hadsereg", "Armata romană"),
        instruction: ml("Größe der Truppe.", "Size of troops.", "Csapatok mérete.", "Mărime trupe."),
        hint: ml("Legionär ist einer.", "Legionary is one.", "Légiós az egyetlen.", "Legionar e unul."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "soldat", label: ml("Legionär (1)", "Legionary (1)", "Légiós (1)", "Legionar (1)"), emoji: "🛡️" },
          { id: "zent", label: ml("Zenturie (80)", "Century (80)", "Centuria (80)", "Centurie (80)"), emoji: "👥" },
          { id: "kohorte", label: ml("Kohorte (480)", "Cohort (480)", "Kohorsz (480)", "Cohortă (480)"), emoji: "🏛️" },
          { id: "legion", label: ml("Legion (5000+)", "Legion (5000+)", "Légió (5000+)", "Legiune (5000+)"), emoji: "🦅" },
        ],
        slots: [
          { id: "s1", label: "Kleinste" },
          { id: "s2", label: "Mittel" },
          { id: "s3", label: "Groß" },
          { id: "s4", label: "Größte" },
        ],
        solution: ["soldat", "zent", "kohorte", "legion"],
      },
      {
        id: "ge-5-cb-8",
        title: ml("Lebenszyklus Pharao", "Pharaoh's Life", "Fáraó élete", "Viața Faraonului"),
        instruction: ml("Chronologisch.", "Chronologically.", "Időrendben.", "Cronologic."),
        hint: ml("Prinz zuerst.", "Prince first.", "Herceg először.", "Prinț primul."),
        theme: { bg: "#422006", accent: "#fcd34d", card: "#78350f" },
        parts: [
          { id: "prinz", label: ml("Prinz", "Prince", "Herceg", "Prinț"), emoji: "🧒" },
          { id: "krönung", label: ml("Krönung", "Coronation", "Koronázás", "Încoronare"), emoji: "👑" },
          { id: "herrschaft", label: ml("Herrschaft", "Rule", "Uralkodás", "Domnie"), emoji: "📜" },
          { id: "mumie", label: ml("Mumifizierung", "Mummification", "Mumifikálás", "Mumificare"), emoji: "🩹" },
        ],
        slots: [
          { id: "s1", label: "1. Jugend" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Tod" },
        ],
        solution: ["prinz", "krönung", "herrschaft", "mumie"],
      },
      {
        id: "ge-5-cb-9",
        title: ml("Kleidung Griechen", "Greek Clothing", "Görög ruházat", "Îmbrăcăminte greacă"),
        instruction: ml("Wie zieht man sich an?", "How to dress?", "Hogyan öltözködnek?", "Cum se îmbracă?"),
        hint: ml("Stoff weben zuerst.", "Weave cloth first.", "Szövet szövés.", "Țesut pânză."),
        theme: { bg: "#1e3a8a", accent: "#60a5fa", card: "#1e40af" },
        parts: [
          { id: "wolle", label: ml("Wolle scheren", "Shear wool", "Gyapjúnyírás", "Tuns lână"), emoji: "🐑" },
          { id: "weben", label: ml("Stoff weben", "Weave cloth", "Szövés", "Țesut"), emoji: "🧵" },
          { id: "falten", label: ml("Chiton falten", "Fold tunic", "Ruha hajtogatás", "Pliere tunică"), emoji: "👘" },
          { id: "fibel", label: ml("Mit Fibel festmachen", "Pin it", "Csattal rögzítés", "Prindere"), emoji: "🧷" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["wolle", "weben", "falten", "fibel"],
      },
      {
        id: "ge-5-cb-10",
        title: ml("Ernährung Steinzeit", "Stone Age Diet", "Kőkorszaki étrend", "Dieta Ep. Pietrei"),
        instruction: ml("Vom Sammeln zum Kochen.", "Gather to cook.", "Gyűjtéstől a főzésig.", "Adunare la gătit."),
        hint: ml("Finden zuerst.", "Find first.", "Keresés először.", "Găsire prima."),
        theme: { bg: "#1c1917", accent: "#d97706", card: "#292524" },
        parts: [
          { id: "sammeln", label: ml("Beeren sammeln", "Gather berries", "Bogyók gyűjtése", "Adunare fructe"), emoji: "🫐" },
          { id: "jagen", label: ml("Tier jagen", "Hunt animal", "Vadászat", "Vânătoare"), emoji: "🦯" },
          { id: "feuer", label: ml("Feuer machen", "Make fire", "Tűzrakás", "Făcut foc"), emoji: "🔥" },
          { id: "braten", label: ml("Fleisch braten", "Roast meat", "Hússütés", "Fript carne"), emoji: "🥩" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["sammeln", "jagen", "feuer", "braten"],
      }
    ],
    memoryRadar: [
      {
        id: "ge-5-mr-1",
        title: ml("Steinzeit", "Stone Age", "Kőkorszak", "Epoca Pietrei"),
        instruction: ml("Merke die Funde.", "Remember finds.", "Jegyezd meg a leleteket.", "Reține descoperirile."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1c1917", accent: "#d97706", radar: "#292524" },
        targetItems: [
          { id: "feuer", label: ml("Feuer", "Fire", "Tűz", "Foc"), emoji: "🔥" },
          { id: "keil", label: ml("Faustkeil", "Hand axe", "Szakóca", "Toporaș"), emoji: "🪨" },
          { id: "speer", label: ml("Speer", "Spear", "Lándzsa", "Suliță"), emoji: "🦯" },
          { id: "fell", label: ml("Fellkleidung", "Fur", "Bőrruha", "Blană"), emoji: "🧥" },
        ],
        decoyItems: [
          { id: "rad", label: ml("Rad", "Wheel", "Kerék", "Roată"), emoji: "🛞" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "buch", label: ml("Buch", "Book", "Könyv", "Carte"), emoji: "📖" },
        ],
      },
      {
        id: "ge-5-mr-2",
        title: ml("Ägypten", "Egypt", "Egyiptom", "Egipt"),
        instruction: ml("Merke ägyptisches.", "Remember Egyptian.", "Jegyezd meg az egyiptomit.", "Reține egiptenism."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#422006", accent: "#fcd34d", radar: "#78350f" },
        targetItems: [
          { id: "pyr", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "pha", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "mum", label: ml("Mumie", "Mummy", "Múmia", "Mumie"), emoji: "🩹" },
          { id: "pap", label: ml("Papyrus", "Papyrus", "Papirusz", "Papirus"), emoji: "📜" },
        ],
        decoyItems: [
          { id: "kol", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
          { id: "rit", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "tem", label: ml("Griech. Tempel", "Temple", "Görög templom", "Templu grec"), emoji: "🏛️" },
        ],
      },
      {
        id: "ge-5-mr-3",
        title: ml("Römer", "Romans", "Rómaiak", "Romani"),
        instruction: ml("Merke Römisches.", "Remember Roman.", "Jegyezd meg a rómait.", "Reține romanism."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "leg", label: ml("Legionär", "Legionary", "Légiós", "Legionar"), emoji: "🛡️" },
          { id: "kol", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
          { id: "aqu", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉" },
          { id: "tog", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘" },
        ],
        decoyItems: [
          { id: "pyr", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "pha", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "oly", label: ml("Olympia", "Olympics", "Olimpia", "Olimpiadă"), emoji: "🏃" },
        ],
      },
      {
        id: "ge-5-mr-4",
        title: ml("Götter", "Gods", "Istenek", "Zei"),
        instruction: ml("Merke die Götter.", "Remember gods.", "Jegyezd meg az isteneket.", "Reține zeii."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#2e1065", accent: "#c084fc", radar: "#4c1d95" },
        targetItems: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡" },
          { id: "pos", label: ml("Poseidon", "Poseidon", "Poszeidón", "Poseidon"), emoji: "🔱" },
          { id: "ath", label: ml("Athene", "Athena", "Athéné", "Atena"), emoji: "🦉" },
          { id: "mar", label: ml("Mars", "Mars", "Mars", "Marte"), emoji: "⚔️" },
        ],
        decoyItems: [
          { id: "cae", label: ml("Caesar", "Caesar", "Caesar", "Cezar"), emoji: "📜" },
          { id: "pha", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "gla", label: ml("Gladiator", "Gladiator", "Gladiátor", "Gladiator"), emoji: "🛡️" },
        ],
      },
      {
        id: "ge-5-mr-5",
        title: ml("Bauwerke", "Buildings", "Építmények", "Clădiri"),
        instruction: ml("Merke antike Bauten.", "Remember buildings.", "Jegyezd meg az építményeket.", "Reține clădirile."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#60a5fa", radar: "#1e40af" },
        targetItems: [
          { id: "pyr", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "kol", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
          { id: "tem", label: ml("Tempel", "Temple", "Templom", "Templu"), emoji: "🏛️" },
          { id: "aqu", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉" },
        ],
        decoyItems: [
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "haus", label: ml("Haus", "House", "Ház", "Casă"), emoji: "🏠" },
          { id: "turm", label: ml("Eiffelturm", "Eiffel", "Eiffel-torony", "Eiffel"), emoji: "🗼" },
        ],
      },
      {
        id: "ge-5-mr-6",
        title: ml("Pharaonen", "Pharaohs", "Fáraók", "Faraoni"),
        instruction: ml("Merke ägyptische Dinge.", "Remember Egyptian items.", "Jegyezd meg az egyiptomit.", "Reține obiectele egiptene."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#422006", accent: "#fcd34d", radar: "#78350f" },
        targetItems: [
          { id: "pha", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
          { id: "mum", label: ml("Mumie", "Mummy", "Múmia", "Mumie"), emoji: "🩹" },
          { id: "sark", label: ml("Sarkophag", "Sarcophagus", "Szarkofág", "Sarcofag"), emoji: "⚰️" },
          { id: "auge", label: ml("Auge d. Horus", "Eye of Horus", "Hórusz szeme", "Ochiul lui Horus"), emoji: "👁️" },
        ],
        decoyItems: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡" },
          { id: "leg", label: ml("Legionär", "Legionary", "Légiós", "Legionar"), emoji: "🛡️" },
          { id: "speer", label: ml("Speer", "Spear", "Dárda", "Suliță"), emoji: "🦯" },
        ],
      },
      {
        id: "ge-5-mr-7",
        title: ml("Kelten", "Celts", "Kelták", "Celți"),
        instruction: ml("Merke keltische Dinge.", "Remember Celtic items.", "Jegyezd meg a keltákat.", "Reține obiecte celtice."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "dru", label: ml("Druide", "Druid", "Druida", "Druid"), emoji: "🧙‍♂️" },
          { id: "eisen", label: ml("Eisenwaffe", "Iron weapon", "Vasfegyver", "Armă"), emoji: "🗡️" },
          { id: "ring", label: ml("Halsring (Torques)", "Neck ring", "Nyakperec", "Torques"), emoji: "💍" },
          { id: "hutte", label: ml("Rundhaus", "Roundhouse", "Kerek ház", "Casă"), emoji: "🛖" },
        ],
        decoyItems: [
          { id: "pyr", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "tog", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘" },
          { id: "kol", label: ml("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), emoji: "🏟️" },
        ],
      },
      {
        id: "ge-5-mr-8",
        title: ml("Germanen", "Germanic Tribes", "Germánok", "Triburi germanice"),
        instruction: ml("Merke germanische Dinge.", "Remember Germanic items.", "Jegyezd meg a germánokat.", "Reține germanice."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1c1917", accent: "#a8a29e", radar: "#292524" },
        targetItems: [
          { id: "spe", label: ml("Speer (Frame)", "Spear", "Dárda", "Suliță"), emoji: "🦯" },
          { id: "rune", label: ml("Runen", "Runes", "Rúnák", "Rune"), emoji: "🪨" },
          { id: "wald", label: ml("Wald", "Forest", "Erdő", "Pădure"), emoji: "🌲" },
          { id: "fell", label: ml("Bärenfell", "Bear fur", "Medvebőr", "Blană"), emoji: "🐻" },
        ],
        decoyItems: [
          { id: "aqu", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉" },
          { id: "pap", label: ml("Papyrus", "Papyrus", "Papirusz", "Papirus"), emoji: "📜" },
          { id: "oly", label: ml("Olympia", "Olympics", "Olimpia", "Olimpiadă"), emoji: "🏃" },
        ],
      },
      {
        id: "ge-5-mr-9",
        title: ml("Antike Erfindungen", "Ancient Inventions", "Ókori találmányok", "Invenții antice"),
        instruction: ml("Merke die Erfindungen.", "Remember inventions.", "Jegyezd meg a találmányokat.", "Reține invențiile."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#422006", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "rad", label: ml("Rad", "Wheel", "Kerék", "Roată"), emoji: "🛞" },
          { id: "schrift", label: ml("Schrift", "Writing", "Írás", "Scriere"), emoji: "✍️" },
          { id: "muenze", label: ml("Münze", "Coin", "Érme", "Monedă"), emoji: "🪙" },
          { id: "segel", label: ml("Segel", "Sail", "Vitorla", "Velă"), emoji: "⛵" },
        ],
        decoyItems: [
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "handy", label: ml("Handy", "Phone", "Telefon", "Telefon"), emoji: "📱" },
          { id: "strom", label: ml("Strom", "Electricity", "Áram", "Curent"), emoji: "💡" },
        ],
      },
      {
        id: "ge-5-mr-10",
        title: ml("Römische Götter", "Roman Gods", "Római istenek", "Zei romani"),
        instruction: ml("Merke römische Götter.", "Remember Roman gods.", "Jegyezd meg a római isteneket.", "Reține zeii romani."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "jup", label: ml("Jupiter", "Jupiter", "Jupiter", "Jupiter"), emoji: "🦅" },
          { id: "mar", label: ml("Mars", "Mars", "Mars", "Marte"), emoji: "🛡️" },
          { id: "nep", label: ml("Neptun", "Neptune", "Neptunus", "Neptun"), emoji: "🌊" },
          { id: "ven", label: ml("Venus", "Venus", "Vénusz", "Venus"), emoji: "💖" },
        ],
        decoyItems: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡" },
          { id: "pos", label: ml("Poseidon", "Poseidon", "Poszeidón", "Poseidon"), emoji: "🔱" },
          { id: "ath", label: ml("Athene", "Athena", "Athéné", "Atena"), emoji: "🦉" },
        ],
      }
    ],
  },
  6: {
    grade: 6,
    meteorCatch: [
      {
        id: "ge-6-mc-1",
        title: ml("Mittelalter", "Middle Ages", "Középkor", "Evul Mediu"),
        prompt: ml("Fange Mittelalterliches.", "Catch Medieval items.", "Fogj középkori dolgokat.", "Prinde lucruri medievale."),
        goal: 5,
        speed: 5,
        theme: { sky: "#1e293b", glow: "#9ca3af", accent: "#6b7280" },
        correctItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "mönch", label: ml("Mönch", "Monk", "Szerzetes", "Călugăr"), emoji: "📖" },
        ],
        wrongItems: [
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "handy", label: ml("Handy", "Phone", "Telefon", "Telefon"), emoji: "📱" },
          { id: "legionär", label: ml("Legionär", "Legionary", "Légiós", "Legionar"), emoji: "🏛️" },
        ],
      },
      {
        id: "ge-6-mc-2",
        title: ml("Klosterleben", "Monastery Life", "Kolostori élet", "Viața la mănăstire"),
        prompt: ml("Fange Dinge aus dem Kloster.", "Catch Monastery items.", "Fogj kolostori dolgokat.", "Prinde lucruri din mănăstire."),
        goal: 4,
        speed: 5.5,
        theme: { sky: "#422006", glow: "#fcd34d", accent: "#d97706" },
        correctItems: [
          { id: "bibel", label: ml("Bibel", "Bible", "Biblia", "Biblie"), emoji: "📖" },
          { id: "kreuz", label: ml("Kreuz", "Cross", "Kereszt", "Cruce"), emoji: "✝️" },
          { id: "kräuter", label: ml("Kräuter", "Herbs", "Gyógynövények", "Ierburi"), emoji: "🌿" },
          { id: "tinte", label: ml("Feder & Tinte", "Quill", "Lúdtoll", "Pană"), emoji: "🖋️" },
        ],
        wrongItems: [
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "gladiator", label: ml("Gladiator", "Gladiator", "Gladiátor", "Gladiator"), emoji: "⚔️" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
        ],
      },
      {
        id: "ge-6-mc-3",
        title: ml("Wikinger", "Vikings", "Vikingek", "Vikingi"),
        prompt: ml("Fange Wikinger-Dinge.", "Catch Viking items.", "Fogj viking dolgokat.", "Prinde obiecte vikinge."),
        goal: 4,
        speed: 6,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#2563eb" },
        correctItems: [
          { id: "schiff", label: ml("Langschiff", "Longship", "Hosszúhajó", "Corabie"), emoji: "⛵" },
          { id: "axt", label: ml("Axt", "Axe", "Fejsze", "Topor"), emoji: "🪓" },
          { id: "horn", label: ml("Trinkhorn", "Drinking horn", "Ivókürt", "Corn de băut"), emoji: "📯" },
          { id: "helm", label: ml("Helm", "Helmet", "Sisak", "Cască"), emoji: "🪖" },
        ],
        wrongItems: [
          { id: "toga", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "drucker", label: ml("Buchdruck", "Printing", "Könyvnyomtatás", "Tipar"), emoji: "🖨️" },
        ],
      },
      {
        id: "ge-6-mc-4",
        title: ml("Städte", "Medieval Cities", "Középkori városok", "Orașe medievale"),
        prompt: ml("Fange Stadt-Elemente.", "Catch City items.", "Fogj városi elemeket.", "Prinde elemente de oraș."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#450a0a", glow: "#fca5a5", accent: "#ef4444" },
        correctItems: [
          { id: "mauer", label: ml("Stadtmauer", "City wall", "Városfal", "Zidul orașului"), emoji: "🧱" },
          { id: "markt", label: ml("Marktplatz", "Market", "Piac", "Piață"), emoji: "🍎" },
          { id: "dom", label: ml("Dom/Kirche", "Cathedral", "Katedrális", "Catedrală"), emoji: "⛪" },
          { id: "rathaus", label: ml("Rathaus", "Town hall", "Városháza", "Primărie"), emoji: "🏛️" },
          { id: "zunft", label: ml("Zunfthaus", "Guildhall", "Céhház", "Casa breslei"), emoji: "🛠️" },
        ],
        wrongItems: [
          { id: "fabrik", label: ml("Fabrik", "Factory", "Gyár", "Fabrică"), emoji: "🏭" },
          { id: "zug", label: ml("Zug", "Train", "Vonat", "Tren"), emoji: "🚂" },
          { id: "rakete", label: ml("Rakete", "Rocket", "Rakéta", "Rachetă"), emoji: "🚀" },
        ],
      },
      {
        id: "ge-6-mc-5",
        title: ml("Entdecker", "Explorers", "Felfedezők", "Exploratori"),
        prompt: ml("Fange Entdecker-Dinge.", "Catch Explorer items.", "Fogj felfedezős dolgokat.", "Prinde obiecte de explorator."),
        goal: 4,
        speed: 7,
        theme: { sky: "#082f49", glow: "#38bdf8", accent: "#0ea5e9" },
        correctItems: [
          { id: "kompass", label: ml("Kompass", "Compass", "Iránytű", "Busolă"), emoji: "🧭" },
          { id: "schiff", label: ml("Karavelle", "Caravel", "Karavella", "Caravelă"), emoji: "⛵" },
          { id: "karte", label: ml("Seekarte", "Map", "Térkép", "Hartă"), emoji: "🗺️" },
          { id: "fernrohr", label: ml("Fernrohr", "Telescope", "Távcső", "Telescop"), emoji: "🔭" },
        ],
        wrongItems: [
          { id: "flugzeug", label: ml("Flugzeug", "Airplane", "Repülőgép", "Avion"), emoji: "✈️" },
          { id: "panzer", label: ml("Panzer", "Tank", "Tank", "Tanc"), emoji: "🪖" },
          { id: "ritter", label: ml("Ritterrüstung", "Armor", "Páncél", "Armură"), emoji: "🛡️" },
        ],
      },
      {
        id: "ge-6-mc-6",
        title: ml("Ritterturnier", "Jousting", "Lovagi torna", "Turnir"),
        prompt: ml("Fange Dinge beim Turnier.", "Catch tournament items.", "Fogj lovagi torna dolgokat.", "Prinde lucruri de turnir."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#450a0a", glow: "#fca5a5", accent: "#ef4444" },
        correctItems: [
          { id: "lanze", label: ml("Lanze", "Lance", "Kopja", "Lance"), emoji: "🦯" },
          { id: "pferd", label: ml("Streitross", "Warhorse", "Csataló", "Cal de luptă"), emoji: "🐎" },
          { id: "helm", label: ml("Turnierhelm", "Helmet", "Sisak", "Cască"), emoji: "🪖" },
          { id: "schild", label: ml("Wappenschild", "Shield", "Címerpajzs", "Scut"), emoji: "🛡️" },
          { id: "zelt", label: ml("Ritterzelt", "Tent", "Sátor", "Cort"), emoji: "⛺" },
        ],
        wrongItems: [
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "pistole", label: ml("Pistole", "Gun", "Pisztoly", "Pistol"), emoji: "🔫" },
        ],
      },
      {
        id: "ge-6-mc-7",
        title: ml("Mittelalter Handwerk", "Medieval Crafts", "Középkori mesterségek", "Meșteșuguri"),
        prompt: ml("Fange Handwerkszeug.", "Catch tools.", "Fogj szerszámokat.", "Prinde unelte."),
        goal: 5,
        speed: 6,
        theme: { sky: "#1e293b", glow: "#9ca3af", accent: "#6b7280" },
        correctItems: [
          { id: "hammer", label: ml("Schmiedehammer", "Hammer", "Kalapács", "Ciocan"), emoji: "🔨" },
          { id: "amboss", label: ml("Amboss", "Anvil", "Üllő", "Nicoală"), emoji: "🪨" },
          { id: "schere", label: ml("Schere", "Scissors", "Olló", "Foarfecă"), emoji: "✂️" },
          { id: "fass", label: ml("Holzfass", "Barrel", "Hordó", "Butoi"), emoji: "🛢️" },
          { id: "brot", label: ml("Brot (Bäcker)", "Bread", "Kenyér (Pék)", "Pâine"), emoji: "🍞" },
        ],
        wrongItems: [
          { id: "laptop", label: ml("Laptop", "Laptop", "Laptop", "Laptop"), emoji: "💻" },
          { id: "traktor", label: ml("Traktor", "Tractor", "Traktor", "Tractor"), emoji: "🚜" },
          { id: "glühbirne", label: ml("Glühbirne", "Lightbulb", "Villanykörte", "Bec"), emoji: "💡" },
        ],
      },
      {
        id: "ge-6-mc-8",
        title: ml("Bauernleben", "Peasant Life", "Paraszti élet", "Viață de țăran"),
        prompt: ml("Fange Bauerndinge.", "Catch peasant items.", "Fogj paraszti dolgokat.", "Prinde obiecte țărănești."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#064e3b", glow: "#10b981", accent: "#059669" },
        correctItems: [
          { id: "pflug", label: ml("Holzpflug", "Plow", "Eke", "Plug"), emoji: "🚜" },
          { id: "sichel", label: ml("Sichel", "Sickle", "Sarló", "Seceră"), emoji: "🌙" },
          { id: "getreide", label: ml("Getreidegarbe", "Grain", "Gabona", "Cereale"), emoji: "🌾" },
          { id: "kuh", label: ml("Nutztier", "Livestock", "Haszonállat", "Animal"), emoji: "🐄" },
          { id: "korb", label: ml("Korb", "Basket", "Kosár", "Coș"), emoji: "🧺" },
        ],
        wrongItems: [
          { id: "schwert", label: ml("Ritterschwert", "Sword", "Lovagkard", "Sabie"), emoji: "🗡️" },
          { id: "krone", label: ml("Krone", "Crown", "Korona", "Coroană"), emoji: "👑" },
          { id: "münze", label: ml("Geldmünze", "Coin", "Pénzérme", "Monedă"), emoji: "🪙" },
        ],
      },
      {
        id: "ge-6-mc-9",
        title: ml("Schwarzer Tod (Pest)", "Black Death", "Fekete halál (Pestis)", "Moartea Neagră"),
        prompt: ml("Fange Pest-Symbole.", "Catch Plague symbols.", "Fogj pestis szimbólumokat.", "Prinde simboluri Ciuma."),
        goal: 4,
        speed: 7,
        theme: { sky: "#1c1917", glow: "#a8a29e", accent: "#78716c" },
        correctItems: [
          { id: "ratte", label: ml("Ratte", "Rat", "Patkány", "Șobolan"), emoji: "🐀" },
          { id: "arzt", label: ml("Pestarzt", "Plague doctor", "Pestisdoktor", "Doctor ciumă"), emoji: "🦤" },
          { id: "kreuz", label: ml("Kreuz", "Cross", "Kereszt", "Cruce"), emoji: "✝️" },
          { id: "bett", label: ml("Krankenbett", "Sickbed", "Betegágy", "Pat spital"), emoji: "🛏️" },
        ],
        wrongItems: [
          { id: "fest", label: ml("Festmahl", "Feast", "Lakoma", "Ospăț"), emoji: "🍗" },
          { id: "gold", label: ml("Goldschatz", "Gold", "Arany", "Aur"), emoji: "💰" },
          { id: "blume", label: ml("Blume", "Flower", "Virág", "Floare"), emoji: "🌺" },
        ],
      },
      {
        id: "ge-6-mc-10",
        title: ml("Asien im Mittelalter", "Asia in Middle Ages", "Ázsia a középkorban", "Asia Medievală"),
        prompt: ml("Fange Asiatisches.", "Catch Asian items.", "Fogj ázsiai dolgokat.", "Prinde obiecte asiatice."),
        goal: 5,
        speed: 7.5,
        theme: { sky: "#450a0a", glow: "#ef4444", accent: "#dc2626" },
        correctItems: [
          { id: "seide", label: ml("Seide", "Silk", "Selyem", "Mătase"), emoji: "🧣" },
          { id: "tee", label: ml("Tee", "Tea", "Tea", "Ceai"), emoji: "🍵" },
          { id: "porzellan", label: ml("Porzellan", "Porcelain", "Porcelán", "Porțelan"), emoji: "🏺" },
          { id: "mauer", label: ml("Chinesische Mauer", "Great Wall", "Kínai nagy fal", "Marele Zid"), emoji: "🧱" },
          { id: "mongolen", label: ml("Reitervolk", "Horsemen", "Lovas nép", "Călăreți"), emoji: "🐎" },
        ],
        wrongItems: [
          { id: "ritter", label: ml("Kreuzritter", "Knight", "Keresztes lovag", "Cruciat"), emoji: "🛡️" },
          { id: "wikinger", label: ml("Wikingerhelm", "Viking helmet", "Vikingsisak", "Cască vikingă"), emoji: "🪖" },
          { id: "papst", label: ml("Papst", "Pope", "Pápa", "Papă"), emoji: "⛪" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "ge-6-os-1",
        title: ml("Burg oder Kloster?", "Castle vs Monastery", "Vár vagy Kolostor?", "Castel vs Mănăstire"),
        instruction: ml("Sortiere richtig.", "Sort correctly.", "Rendezd helyesen.", "Sortează corect."),
        theme: { bg: "#1f2937", orbit: "#d1d5db", accent: "#9ca3af" },
        buckets: [
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), color: "#6b7280" },
          { id: "kloster", label: ml("Kloster", "Monastery", "Kolostor", "Mănăstire"), color: "#f59e0b" },
        ],
        items: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️", bucketId: "burg" },
          { id: "burggraben", label: ml("Burggraben", "Moat", "Vizesárok", "Șanț"), emoji: "🌊", bucketId: "burg" },
          { id: "turnier", label: ml("Turnier", "Tournament", "Lovagi torna", "Turnir"), emoji: "🏇", bucketId: "burg" },
          { id: "mönch", label: ml("Mönch", "Monk", "Szerzetes", "Călugăr"), emoji: "📖", bucketId: "kloster" },
          { id: "kräuter", label: ml("Kräutergarten", "Herb garden", "Gyógynövénykert", "Grădină ierburi"), emoji: "🌿", bucketId: "kloster" },
          { id: "beten", label: ml("Beten", "Praying", "Imádkozás", "Rugăciune"), emoji: "🙏", bucketId: "kloster" },
        ],
      },
      {
        id: "ge-6-os-2",
        title: ml("Mittelalter vs Antike", "Medieval vs Antique", "Középkor vs Ókor", "Medieval vs Antic"),
        instruction: ml("Ordne Epochen zu.", "Assign epochs.", "Rendezd korszakba.", "Asignează epocile."),
        theme: { bg: "#422006", orbit: "#fcd34d", accent: "#eab308" },
        buckets: [
          { id: "antike", label: ml("Antike", "Antiquity", "Ókor", "Antichitate"), color: "#ef4444" },
          { id: "mittel", label: ml("Mittelalter", "Middle Ages", "Középkor", "Evul Mediu"), color: "#3b82f6" },
        ],
        items: [
          { id: "gladiator", label: ml("Gladiator", "Gladiator", "Gladiátor", "Gladiator"), emoji: "⚔️", bucketId: "antike" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺", bucketId: "antike" },
          { id: "aquädukt", label: ml("Aquädukt", "Aqueduct", "Vízvezeték", "Apeduct"), emoji: "🌉", bucketId: "antike" },
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰", bucketId: "mittel" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️", bucketId: "mittel" },
          { id: "kathedrale", label: ml("Kathedrale", "Cathedral", "Katedrális", "Catedrală"), emoji: "⛪", bucketId: "mittel" },
        ],
      },
      {
        id: "ge-6-os-3",
        title: ml("Stadt oder Land?", "City vs Country", "Város vagy Falu?", "Oraș vs Sat"),
        instruction: ml("Leben im Mittelalter.", "Medieval life.", "Élet a középkorban.", "Viața medievală."),
        theme: { bg: "#064e3b", orbit: "#10b981", accent: "#059669" },
        buckets: [
          { id: "stadt", label: ml("Stadt", "City", "Város", "Oraș"), color: "#f87171" },
          { id: "land", label: ml("Land", "Country", "Vidék", "Sat"), color: "#22c55e" },
        ],
        items: [
          { id: "markt", label: ml("Markt", "Market", "Piac", "Piață"), emoji: "🍎", bucketId: "stadt" },
          { id: "zunft", label: ml("Handwerkerzunft", "Guilds", "Céh", "Breaslă"), emoji: "🛠️", bucketId: "stadt" },
          { id: "mauer", label: ml("Stadtmauer", "City wall", "Városfal", "Zidul orașului"), emoji: "🧱", bucketId: "stadt" },
          { id: "bauer", label: ml("Bauer", "Farmer", "Földműves", "Fermier"), emoji: "🌾", bucketId: "land" },
          { id: "feld", label: ml("Feldarbeit", "Farming", "Szántás", "Agricultură"), emoji: "🚜", bucketId: "land" },
          { id: "herr", label: ml("Grundherr", "Lord", "Földesúr", "Senior"), emoji: "👑", bucketId: "land" },
        ],
      },
      {
        id: "ge-6-os-4",
        title: ml("Wikinger vs Römer", "Vikings vs Romans", "Vikingek vs Rómaiak", "Vikingi vs Romani"),
        instruction: ml("Sortiere zu.", "Sort it.", "Rendezd.", "Sortează."),
        theme: { bg: "#1e3a8a", orbit: "#93c5fd", accent: "#60a5fa" },
        buckets: [
          { id: "wik", label: ml("Wikinger", "Vikings", "Vikingek", "Vikingi"), color: "#3b82f6" },
          { id: "rom", label: ml("Römer", "Romans", "Rómaiak", "Romani"), color: "#ef4444" },
        ],
        items: [
          { id: "langschiff", label: ml("Langschiff", "Longship", "Hosszúhajó", "Corabie"), emoji: "⛵", bucketId: "wik" },
          { id: "odin", label: ml("Odin", "Odin", "Odin", "Odin"), emoji: "⚡", bucketId: "wik" },
          { id: "runen", label: ml("Runen", "Runes", "Rúnák", "Rune"), emoji: "🪨", bucketId: "wik" },
          { id: "legion", label: ml("Legion", "Legion", "Légió", "Legiune"), emoji: "🛡️", bucketId: "rom" },
          { id: "jupiter", label: ml("Jupiter", "Jupiter", "Jupiter", "Jupiter"), emoji: "🦅", bucketId: "rom" },
          { id: "latein", label: ml("Latein", "Latin", "Latin", "Latină"), emoji: "📖", bucketId: "rom" },
        ],
      },
      {
        id: "ge-6-os-5",
        title: ml("Adel vs Klerus", "Nobility vs Clergy", "Nemes vs Papság", "Nobil vs Cler"),
        instruction: ml("Ständegesellschaft.", "Estates of realm.", "Rendi társadalom.", "Clase sociale."),
        theme: { bg: "#4c1d95", orbit: "#a855f7", accent: "#c084fc" },
        buckets: [
          { id: "adel", label: ml("1. & 2. Stand (Adel)", "Nobility", "Nemesek", "Nobilime"), color: "#f59e0b" },
          { id: "klerus", label: ml("Klerus", "Clergy", "Papság", "Cler"), color: "#3b82f6" },
        ],
        items: [
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑", bucketId: "adel" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "⚔️", bucketId: "adel" },
          { id: "burg", label: ml("Burgherr", "Lord", "Várúr", "Lord"), emoji: "🏰", bucketId: "adel" },
          { id: "papst", label: ml("Papst", "Pope", "Pápa", "Papă"), emoji: "✝️", bucketId: "klerus" },
          { id: "mönch", label: ml("Mönch", "Monk", "Szerzetes", "Călugăr"), emoji: "📖", bucketId: "klerus" },
          { id: "bischof", label: ml("Bischof", "Bishop", "Püspök", "Episcop"), emoji: "⛪", bucketId: "klerus" },
        ],
      },
      {
        id: "ge-6-os-6",
        title: ml("Adel vs Bauern", "Nobles vs Peasants", "Nemes vs Paraszt", "Nobil vs Țăran"),
        instruction: ml("Sortiere Gesellschaft.", "Sort society.", "Rendezd a társadalmat.", "Sortează societatea."),
        theme: { bg: "#4c1d95", orbit: "#fcd34d", accent: "#a855f7" },
        buckets: [
          { id: "adel", label: ml("Adel", "Nobles", "Nemesek", "Nobili"), color: "#fcd34d" },
          { id: "bauer", label: ml("Bauern", "Peasants", "Parasztok", "Țărani"), color: "#a8a29e" },
        ],
        items: [
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰", bucketId: "adel" },
          { id: "turnier", label: ml("Turnier", "Tournament", "Torna", "Turnir"), emoji: "🏇", bucketId: "adel" },
          { id: "fleisch", label: ml("Fleisch essen", "Eat meat", "Húsevés", "Carne"), emoji: "🍗", bucketId: "adel" },
          { id: "hütte", label: ml("Holzhütte", "Hut", "Faház", "Colibă"), emoji: "🛖", bucketId: "bauer" },
          { id: "feld", label: ml("Feldarbeit", "Farming", "Mezőgazdaság", "Fermier"), emoji: "🌾", bucketId: "bauer" },
          { id: "brei", label: ml("Brei essen", "Eat porridge", "Kása", "Terci"), emoji: "🥣", bucketId: "bauer" },
        ],
      },
      {
        id: "ge-6-os-7",
        title: ml("Islamische Welt vs Europa", "Islamic World vs Europe", "Iszlám világ vs Európa", "Lumea Islamică vs Europa"),
        instruction: ml("Im Mittelalter.", "In Middle Ages.", "Középkorban.", "În Evul Mediu."),
        theme: { bg: "#1e3a8a", orbit: "#10b981", accent: "#3b82f6" },
        buckets: [
          { id: "islam", label: ml("Islamische Welt", "Islamic World", "Iszlám világ", "Lumea Islamică"), color: "#10b981" },
          { id: "europa", label: ml("Europa", "Europe", "Európa", "Europa"), color: "#3b82f6" },
        ],
        items: [
          { id: "moschee", label: ml("Moschee", "Mosque", "Mecset", "Moschee"), emoji: "🕌", bucketId: "islam" },
          { id: "kamel", label: ml("Kamelkarawane", "Caravan", "Karaván", "Caravană"), emoji: "🐫", bucketId: "islam" },
          { id: "wissenschaft", label: ml("Viel Wissenschaft", "Advanced Science", "Fejlett tudomány", "Știință"), emoji: "🔭", bucketId: "islam" },
          { id: "kathedrale", label: ml("Kathedrale", "Cathedral", "Katedrális", "Catedrală"), emoji: "⛪", bucketId: "europa" },
          { id: "ritter", label: ml("Ritterheer", "Knights army", "Lovagi sereg", "Cavaleri"), emoji: "🛡️", bucketId: "europa" },
          { id: "schwein", label: ml("Schweinezucht", "Pig farming", "Sertés", "Porci"), emoji: "🐖", bucketId: "europa" },
        ],
      },
      {
        id: "ge-6-os-8",
        title: ml("Krank vs Gesund", "Sick vs Healthy", "Beteg vs Egészséges", "Bolnav vs Sănătos"),
        instruction: ml("Medizin im Mittelalter.", "Medieval Medicine.", "Középkori orvoslás.", "Medicină medievală."),
        theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "krank", label: ml("Krankheit (Pest)", "Disease", "Betegség (Pestis)", "Boală"), color: "#ef4444" },
          { id: "gesund", label: ml("Heilung/Schutz", "Healing", "Gyógyítás/Védelem", "Vindecare"), color: "#10b981" },
        ],
        items: [
          { id: "ratte", label: ml("Ratte/Floh", "Rat/Flea", "Patkány/Bolha", "Șobolan"), emoji: "🐀", bucketId: "krank" },
          { id: "fieber", label: ml("Fieber", "Fever", "Láz", "Febră"), emoji: "🤒", bucketId: "krank" },
          { id: "tod", label: ml("Tod", "Death", "Halál", "Moarte"), emoji: "💀", bucketId: "krank" },
          { id: "kraeuter", label: ml("Kräutermedizin", "Herbal medicine", "Gyógynövények", "Plante"), emoji: "🌿", bucketId: "gesund" },
          { id: "kloster", label: ml("Klosterspital", "Monastery hospital", "Kolostorkórház", "Spital"), emoji: "🏥", bucketId: "gesund" },
          { id: "arzt", label: ml("Arzt", "Doctor", "Orvos", "Doctor"), emoji: "👨‍⚕️", bucketId: "gesund" },
        ],
      },
      {
        id: "ge-6-os-9",
        title: ml("Handwerk vs Landwirtschaft", "Crafts vs Farming", "Kézműves vs Mezőgazdaság", "Meșteșug vs Fermă"),
        instruction: ml("Stadt oder Dorf?", "City or Village?", "Város vagy falu?", "Oraș sau Sat?"),
        theme: { bg: "#064e3b", orbit: "#f59e0b", accent: "#10b981" },
        buckets: [
          { id: "handwerk", label: ml("Handwerk (Stadt)", "Crafts (City)", "Kézművesség", "Meșteșug"), color: "#f59e0b" },
          { id: "land", label: ml("Landwirtschaft", "Farming", "Mezőgazdaság", "Fermă"), color: "#10b981" },
        ],
        items: [
          { id: "schmied", label: ml("Schmied", "Blacksmith", "Kovács", "Fierar"), emoji: "🔨", bucketId: "handwerk" },
          { id: "weber", label: ml("Weber", "Weaver", "Takács", "Țesător"), emoji: "🧵", bucketId: "handwerk" },
          { id: "bäcker", label: ml("Bäcker", "Baker", "Pék", "Brutar"), emoji: "🥨", bucketId: "handwerk" },
          { id: "pflug", label: ml("Pflügen", "Plowing", "Szántás", "Arat"), emoji: "🚜", bucketId: "land" },
          { id: "ernten", label: ml("Ernten", "Harvesting", "Aratás", "Recoltă"), emoji: "🌾", bucketId: "land" },
          { id: "melken", label: ml("Kühe melken", "Milking", "Fejés", "Muls"), emoji: "🐄", bucketId: "land" },
        ],
      },
      {
        id: "ge-6-os-10",
        title: ml("Ritter vs Entdecker", "Knight vs Explorer", "Lovag vs Felfedező", "Cavaler vs Explorator"),
        instruction: ml("Sortiere Ausrüstung.", "Sort gear.", "Rendezd a felszerelést.", "Sortează echipamentul."),
        theme: { bg: "#1f2937", orbit: "#3b82f6", accent: "#9ca3af" },
        buckets: [
          { id: "ritter", label: ml("Ritter (Hochmittelalter)", "Knight", "Lovag", "Cavaler"), color: "#9ca3af" },
          { id: "entdecker", label: ml("Entdecker (Spätmittelalter)", "Explorer", "Felfedező", "Explorator"), color: "#3b82f6" },
        ],
        items: [
          { id: "rüstung", label: ml("Rüstung", "Armor", "Páncél", "Armură"), emoji: "🛡️", bucketId: "ritter" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️", bucketId: "ritter" },
          { id: "pferd", label: ml("Streitross", "Warhorse", "Csataló", "Cal"), emoji: "🐎", bucketId: "ritter" },
          { id: "kompass", label: ml("Kompass", "Compass", "Iránytű", "Busolă"), emoji: "🧭", bucketId: "entdecker" },
          { id: "schiff", label: ml("Karavelle", "Caravel", "Karavella", "Caravelă"), emoji: "⛵", bucketId: "entdecker" },
          { id: "karte", label: ml("Seekarte", "Sea chart", "Tengerészeti térkép", "Hartă nav."), emoji: "🗺️", bucketId: "entdecker" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "ge-6-sr-1",
        title: ml("Mittelalter Quiz", "Medieval Quiz", "Középkor Kvíz", "Test Medieval"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-1-s1",
            title: ml("Gebäude", "Buildings", "Épületek", "Clădiri"),
            prompt: ml("Wo lebten die Ritter?", "Where did knights live?", "Hol éltek a lovagok?", "Unde trăiau cavalerii?"),
            sceneType: "community",
            visual: { icon: "🏰", bg: "#1f2937", accent: "#6b7280" },
            choices: [
              { id: "a", label: ml("Kloster", "Monastery", "Kolostor", "Mănăstire") },
              { id: "b", label: ml("Burg", "Castle", "Vár", "Castel") },
              { id: "c", label: ml("Hochhaus", "Skyscraper", "Felhőkarcoló", "Zgârie-nori") },
              { id: "d", label: ml("Zelt", "Tent", "Sátor", "Cort") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-2",
        title: ml("Religion", "Religion", "Vallás", "Religie"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-2-s1",
            title: ml("Mönche", "Monks", "Szerzetesek", "Călugări"),
            prompt: ml("Was taten Mönche oft?", "What did monks often do?", "Mit csináltak gyakran a szerzetesek?", "Ce făceau des călugării?"),
            sceneType: "nature",
            visual: { icon: "📖", bg: "#422006", accent: "#d97706" },
            choices: [
              { id: "a", label: ml("Kämpfen", "Fighting", "Harc", "Luptă") },
              { id: "b", label: ml("Bücher kopieren", "Copy books", "Könyveket másoltak", "Copiau cărți") },
              { id: "c", label: ml("Handeln", "Trading", "Kereskedelem", "Comerț") },
              { id: "d", label: ml("Seefahrt", "Sailing", "Hajózás", "Navigație") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-3",
        title: ml("Städte", "Cities", "Városok", "Orașe"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-3-s1",
            title: ml("Krankheit", "Disease", "Betegség", "Boală"),
            prompt: ml("Welche Krankheit war im Mittelalter schlimm?", "Which disease was bad?", "Melyik betegség volt súlyos?", "Ce boală a fost gravă?"),
            sceneType: "safety",
            visual: { icon: "🐀", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Die Pest", "Plague", "A pestis", "Ciuma") },
              { id: "b", label: ml("Schnupfen", "Cold", "Nátha", "Răceală") },
              { id: "c", label: ml("Allergie", "Allergy", "Allergia", "Alergie") },
              { id: "d", label: ml("Karies", "Cavities", "Fogszuvasodás", "Carii") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-4",
        title: ml("Erfindungen", "Inventions", "Találmányok", "Invenții"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-4-s1",
            title: ml("Gutenberg", "Gutenberg", "Gutenberg", "Gutenberg"),
            prompt: ml("Was erfand Johannes Gutenberg?", "What did Gutenberg invent?", "Mit talált fel Gutenberg?", "Ce a inv. Gutenberg?"),
            sceneType: "community",
            visual: { icon: "🖨️", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Kompass", "Compass", "Iránytű", "Busolă") },
              { id: "b", label: ml("Buchdruck", "Printing press", "Könyvnyomtatás", "Tipar") },
              { id: "c", label: ml("Schießpulver", "Gunpowder", "Puskapor", "Praf de pușcă") },
              { id: "d", label: ml("Brille", "Glasses", "Szemüveg", "Ochelari") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-5",
        title: ml("Entdecker", "Explorers", "Felfedezők", "Exploratori"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-5-s1",
            title: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb"),
            prompt: ml("Was entdeckte Kolumbus 1492?", "What did he discover in 1492?", "Mit fedezett fel 1492-ben?", "Ce a descoperit în 1492?"),
            sceneType: "nature",
            visual: { icon: "⛵", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Afrika", "Africa", "Afrika", "Africa") },
              { id: "b", label: ml("Indien", "India", "India", "India") },
              { id: "c", label: ml("Amerika", "America", "Amerika", "America") },
              { id: "d", label: ml("Australien", "Australia", "Ausztrália", "Australia") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-6",
        title: ml("Ritter Quiz", "Knight Quiz", "Lovag Kvíz", "Test Cavaler"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-6-s1",
            title: ml("Turnier", "Tournament", "Torna", "Turnir"),
            prompt: ml("Was machten Ritter beim Turnier?", "What did knights do at tournaments?", "Mit csináltak a lovagok a tornán?", "Ce făceau cavalerii la turnir?"),
            sceneType: "community",
            visual: { icon: "🏇", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Bücher lesen", "Read books", "Könyvet olvastak", "Citeau cărți") },
              { id: "b", label: ml("Mit Lanzen kämpfen", "Fight with lances", "Kopjával harcoltak", "Luptau cu lănci") },
              { id: "c", label: ml("Kochen", "Cook", "Főztek", "Găteau") },
              { id: "d", label: ml("Beten", "Pray", "Imádkoztak", "Se rugau") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-7",
        title: ml("Handwerk", "Crafts", "Kézművesség", "Meșteșuguri"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-7-s1",
            title: ml("Zünfte", "Guilds", "Céhek", "Bresle"),
            prompt: ml("Wie hießen die Vereine der Handwerker?", "Craftsmen associations?", "Hogy hívták a kézművesek egyesületeit?", "Asociațiile meșteșugarilor?"),
            sceneType: "community",
            visual: { icon: "🛠️", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Clubs", "Clubs", "Klubok", "Cluburi") },
              { id: "b", label: ml("Zünfte", "Guilds", "Céhek", "Bresle") },
              { id: "c", label: ml("Gilden", "Guilds(Gilden)", "Gildék", "Gilde") },
              { id: "d", label: ml("Parteien", "Parties", "Pártok", "Partide") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-8",
        title: ml("Bauernleben", "Peasant Life", "Paraszti élet", "Viață de țăran"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-8-s1",
            title: ml("Abgaben", "Taxes", "Adók", "Taxe"),
            prompt: ml("Was mussten Bauern oft tun?", "What did peasants have to do?", "Mit kellett tenniük a parasztoknak?", "Ce trebuiau să facă țăranii?"),
            sceneType: "nature",
            visual: { icon: "🌾", bg: "#422006", accent: "#d97706" },
            choices: [
              { id: "a", label: ml("König werden", "Become king", "Királlyá válni", "Să devină regi") },
              { id: "b", label: ml("Abgaben zahlen (Zehnt)", "Pay taxes (tithe)", "Tizedet fizetni", "Să plătească dijma") },
              { id: "c", label: ml("Lesen lernen", "Learn to read", "Olvasni tanulni", "Să învețe să citească") },
              { id: "d", label: ml("Weltreisen", "Travel world", "Világot járni", "Să călătorească") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-9",
        title: ml("Pest", "Plague", "Pestis", "Ciuma"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-9-s1",
            title: ml("Überträger", "Carrier", "Hordozó", "Purtător"),
            prompt: ml("Wie wurde die Pest übertragen?", "How was the plague transmitted?", "Hogyan terjedt a pestis?", "Cum se transmitea ciuma?"),
            sceneType: "safety",
            visual: { icon: "🐀", bg: "#1c1917", accent: "#78716c" },
            choices: [
              { id: "a", label: ml("Durch Flöhe auf Ratten", "Fleas on rats", "Patkányokon lévő bolhákkal", "Prin purici de pe șobolani") },
              { id: "b", label: ml("Durch schlechtes Wetter", "Bad weather", "Rossz időjárás miatt", "Prin vreme rea") },
              { id: "c", label: ml("Durch Hexen", "Witches", "Boszorkányok által", "Prin vrăjitoare") },
              { id: "d", label: ml("Durch Vögel", "Birds", "Madarak által", "Prin păsări") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-6-sr-10",
        title: ml("Asien", "Asia", "Ázsia", "Asia"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-6-sr-10-s1",
            title: ml("Handelsroute", "Trade route", "Kereskedelmi útvonal", "Rută comercială"),
            prompt: ml("Wie hieß die Route nach China?", "Route to China?", "Hogy hívták a Kínába vezető utat?", "Ruta spre China?"),
            sceneType: "community",
            visual: { icon: "🐪", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Goldene Straße", "Golden Road", "Arany út", "Drumul de Aur") },
              { id: "b", label: ml("Bernsteinstraße", "Amber Road", "Borostyánkő út", "Drumul Chihlimbarului") },
              { id: "c", label: ml("Seidenstraße", "Silk Road", "Selyemút", "Drumul Mătăsii") },
              { id: "d", label: ml("Silberweg", "Silver Way", "Ezüst út", "Calea de Argint") },
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
        id: "ge-6-cb-1",
        title: ml("Ritterrüstung", "Knight's Armor", "Lovagi páncél", "Armură cavaler"),
        instruction: ml("Von oben nach unten.", "Top to bottom.", "Fentről lefelé.", "De sus în jos."),
        hint: ml("Helm zuerst.", "Helmet first.", "Sisak először.", "Casca prima."),
        theme: { bg: "#1f2937", accent: "#9ca3af", card: "#374151" },
        parts: [
          { id: "helm", label: ml("Helm", "Helmet", "Sisak", "Cască"), emoji: "🪖" },
          { id: "brust", label: ml("Brustpanzer", "Breastplate", "Mellvért", "Platoșă"), emoji: "🛡️" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "bein", label: ml("Beinschienen", "Leg guards", "Lábvért", "Apărători"), emoji: "🦵" },
        ],
        slots: [
          { id: "s1", label: "1. Kopf" },
          { id: "s2", label: "2. Oberkörper" },
          { id: "s3", label: "3. Hand" },
          { id: "s4", label: "4. Beine" },
        ],
        solution: ["helm", "brust", "schwert", "bein"],
      },
      {
        id: "ge-6-cb-2",
        title: ml("Burg Aufbau", "Castle Structure", "Vár felépítése", "Structură castel"),
        instruction: ml("Von außen nach innen.", "Outside to inside.", "Kívülről befelé.", "De afară înăuntru."),
        hint: ml("Graben ist außen.", "Moat is outside.", "A vizesárok van kívül.", "Șanțul e afară."),
        theme: { bg: "#422006", accent: "#f59e0b", card: "#78350f" },
        parts: [
          { id: "graben", label: ml("Burggraben", "Moat", "Vizesárok", "Șanț"), emoji: "🌊" },
          { id: "mauer", label: ml("Ringmauer", "Wall", "Várfal", "Zid"), emoji: "🧱" },
          { id: "hof", label: ml("Burghof", "Courtyard", "Udvar", "Curte"), emoji: "🛖" },
          { id: "bergfried", label: ml("Bergfried", "Keep", "Öregtorony", "Turnul principal"), emoji: "🗼" },
        ],
        slots: [
          { id: "s1", label: "1. Ganz außen" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Im Zentrum" },
        ],
        solution: ["graben", "mauer", "hof", "bergfried"],
      },
      {
        id: "ge-6-cb-3",
        title: ml("Buchherstellung", "Book Making", "Könyvkészítés", "Facerea cărților"),
        instruction: ml("Im Mittelalter.", "In Middle Ages.", "A középkorban.", "În Evul Mediu."),
        hint: ml("Pergament machen zuerst.", "Make parchment first.", "Először pergamen.", "Fă pergament întâi."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "pergament", label: ml("Pergament", "Parchment", "Pergamen", "Pergament"), emoji: "📜" },
          { id: "schreiben", label: ml("Abschreiben", "Copying", "Másolás", "Copiere"), emoji: "✍️" },
          { id: "malen", label: ml("Bilder malen", "Illuminating", "Díszítés", "Iluminare"), emoji: "🎨" },
          { id: "binden", label: ml("Binden", "Binding", "Kötés", "Legare"), emoji: "📖" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["pergament", "schreiben", "malen", "binden"],
      },
      {
        id: "ge-6-cb-4",
        title: ml("Ständegesellschaft", "Estates of the realm", "Rendi társadalom", "Societatea stărilor"),
        instruction: ml("Von mächtig zu unmächtig.", "Most to least powerful.", "Leghatalmasabbtól lefelé.", "Cel mai puternic la slab."),
        hint: ml("König ist ganz oben.", "King is top.", "Király legfelül.", "Regele e sus."),
        theme: { bg: "#1e3a8a", accent: "#3b82f6", card: "#1e40af" },
        parts: [
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑" },
          { id: "klerus", label: ml("Klerus/Adel", "Clergy/Nobility", "Papság/Nemesek", "Cler/Nobilime"), emoji: "⛪" },
          { id: "ritter", label: ml("Ritter", "Knights", "Lovagok", "Cavaleri"), emoji: "🛡️" },
          { id: "bauern", label: ml("Bauern", "Farmers", "Parasztok", "Țărani"), emoji: "🌾" },
        ],
        slots: [
          { id: "s1", label: "1. Oben" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Unten" },
        ],
        solution: ["könig", "klerus", "ritter", "bauern"],
      },
      {
        id: "ge-6-cb-5",
        title: ml("Entdeckungsreise", "Voyage of Discovery", "Felfedezőút", "Călătorie de desc."),
        instruction: ml("Reihenfolge der Reise.", "Sequence of trip.", "Utazás sorrendje.", "Ordinea călătoriei."),
        hint: ml("Planung zuerst.", "Plan first.", "Tervezés az első.", "Planificare întâi."),
        theme: { bg: "#064e3b", accent: "#10b981", card: "#022c22" },
        parts: [
          { id: "plan", label: ml("Planung/Geld", "Planning/Money", "Tervezés/Pénz", "Planificare/Bani"), emoji: "💰" },
          { id: "segeln", label: ml("Lossegeln", "Sailing", "Kihajózás", "Navigare"), emoji: "⛵" },
          { id: "land", label: ml("Land in Sicht", "Land in sight", "Föld a láthatáron", "Pământ la orizont"), emoji: "🏝️" },
          { id: "rck", label: ml("Rückkehr", "Return", "Visszatérés", "Întoarcere"), emoji: "👑" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["plan", "segeln", "land", "rck"],
      },
      {
        id: "ge-6-cb-6",
        title: ml("Ritter Werden", "Becoming a Knight", "Lovaggá válás", "Devenind Cavaler"),
        instruction: ml("Schritte zum Ritter.", "Steps to knight.", "Lépések a lovagságig.", "Pași spre cavaler."),
        hint: ml("Page zuerst.", "Page first.", "Apród először.", "Paj primul."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "page", label: ml("Page (7 Jahre)", "Page (7 yrs)", "Apród (7 év)", "Paj (7 ani)"), emoji: "👦" },
          { id: "knappe", label: ml("Knappe (14 Jahre)", "Squire (14 yrs)", "Fegyverhordozó (14)", "Scutier (14 ani)"), emoji: "🧑" },
          { id: "weihe", label: ml("Schwertleite", "Dubbing", "Lovaggá ütés", "Învestire"), emoji: "🗡️" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
        ],
        slots: [
          { id: "s1", label: "1. Stufe" },
          { id: "s2", label: "2. Stufe" },
          { id: "s3", label: "3. Zeremonie" },
          { id: "s4", label: "4. Ziel" },
        ],
        solution: ["page", "knappe", "weihe", "ritter"],
      },
      {
        id: "ge-6-cb-7",
        title: ml("Stadt Gründung", "City Founding", "Városalapítás", "Fondare oraș"),
        instruction: ml("Wie entstand eine Stadt?", "How did a city grow?", "Hogyan alakult ki a város?", "Cum a crescut orașul?"),
        hint: ml("Markt zieht Leute an.", "Market attracts people.", "A piac vonzza az embereket.", "Piața atrage oameni."),
        theme: { bg: "#064e3b", accent: "#10b981", card: "#022c22" },
        parts: [
          { id: "burg", label: ml("Burg/Flussfurt", "Castle/River", "Vár/Gázló", "Castel/Râu"), emoji: "🏰" },
          { id: "markt", label: ml("Marktplatz entsteht", "Market grows", "Piac alakul ki", "Piața crește"), emoji: "🍎" },
          { id: "handwerker", label: ml("Handwerker siedeln", "Craftsmen settle", "Kézművesek letelepednek", "Meșteri se stabilesc"), emoji: "🔨" },
          { id: "mauer", label: ml("Stadtmauer Bau", "City wall built", "Városfal építés", "Zid construit"), emoji: "🧱" },
        ],
        slots: [
          { id: "s1", label: "1. Ursprung" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Schutz" },
        ],
        solution: ["burg", "markt", "handwerker", "mauer"],
      },
      {
        id: "ge-6-cb-8",
        title: ml("Kloster Hierarchie", "Monastery Hierarchy", "Kolostori hierarchia", "Ierarhie mănăstire"),
        instruction: ml("Von höchstem zu niedrigstem.", "Highest to lowest.", "Legmagasabbtól a legalacsonyabbig.", "De la cel mai mare la cel mai mic."),
        hint: ml("Abt ist der Chef.", "Abbot is boss.", "Az apát a főnök.", "Starețul e șeful."),
        theme: { bg: "#422006", accent: "#f59e0b", card: "#78350f" },
        parts: [
          { id: "abt", label: ml("Abt (Leiter)", "Abbot", "Apát", "Stareț"), emoji: "👑" },
          { id: "prior", label: ml("Prior (Stellvertreter)", "Prior", "Perjel", "Prior"), emoji: "🗝️" },
          { id: "moench", label: ml("Mönch", "Monk", "Szerzetes", "Călugăr"), emoji: "📖" },
          { id: "novize", label: ml("Novize (Anfänger)", "Novice", "Novícius", "Novice"), emoji: "👦" },
        ],
        slots: [
          { id: "s1", label: "1. Höchster" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Anfänger" },
        ],
        solution: ["abt", "prior", "moench", "novize"],
      },
      {
        id: "ge-6-cb-9",
        title: ml("Handwerk Lehre", "Craft Apprenticeship", "Kézműves képzés", "Ucenicie"),
        instruction: ml("Karriere eines Handwerkers.", "Craftsman career.", "Kézműves karrier.", "Cariera meșteșugarului."),
        hint: ml("Lehrling zuerst.", "Apprentice first.", "Inas először.", "Ucenic primul."),
        theme: { bg: "#1f2937", accent: "#9ca3af", card: "#374151" },
        parts: [
          { id: "lehrling", label: ml("Lehrling", "Apprentice", "Inas", "Ucenic"), emoji: "👦" },
          { id: "geselle", label: ml("Geselle (Wanderjahre)", "Journeyman", "Legény", "Calfă"), emoji: "🎒" },
          { id: "meisterstueck", label: ml("Meisterstück", "Masterpiece", "Mesterremek", "Capodoperă"), emoji: "🏆" },
          { id: "meister", label: ml("Meister", "Master", "Mester", "Maestru"), emoji: "👨‍🔧" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3. Prüfung" },
          { id: "s4", label: "4. Eigene Werkstatt" },
        ],
        solution: ["lehrling", "geselle", "meisterstueck", "meister"],
      },
      {
        id: "ge-6-cb-10",
        title: ml("Pest Ausbreitung", "Plague Spread", "Pestis terjedése", "Răspândirea ciumei"),
        instruction: ml("Wie kam die Pest?", "How did plague come?", "Hogyan jött a pestis?", "Cum a venit ciuma?"),
        hint: ml("Flöhe zuerst.", "Fleas first.", "Bolhák először.", "Purici primii."),
        theme: { bg: "#1c1917", accent: "#78716c", card: "#292524" },
        parts: [
          { id: "floh", label: ml("Floh hat Bakterium", "Flea has bacteria", "A bolha fertőzött", "Puricele are bacterii"), emoji: "🦠" },
          { id: "ratte", label: ml("Floh beißt Ratte", "Flea bites rat", "Bolha megcsípi a patkányt", "Puricele mușcă șobolanul"), emoji: "🐀" },
          { id: "schiff", label: ml("Ratte auf Handelsschiff", "Rat on ship", "Patkány a hajón", "Șobolan pe navă"), emoji: "🚢" },
          { id: "mensch", label: ml("Mensch wird infiziert", "Human infected", "Ember megfertőződik", "Om infectat"), emoji: "🤒" },
        ],
        slots: [
          { id: "s1", label: "1. Ursprung" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3. Transport" },
          { id: "s4", label: "4. Krankheit" },
        ],
        solution: ["floh", "ratte", "schiff", "mensch"],
      }
    ],
    memoryRadar: [
      {
        id: "ge-6-mr-1",
        title: ml("Mittelalter Begriffe", "Medieval Terms", "Középkori fogalmak", "Termeni medievali"),
        instruction: ml("Merke die Begriffe.", "Remember terms.", "Jegyezd meg a fogalmakat.", "Reține termenii."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1e293b", accent: "#9ca3af", radar: "#334155" },
        targetItems: [
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑" },
          { id: "mönch", label: ml("Mönch", "Monk", "Szerzetes", "Călugăr"), emoji: "📖" },
        ],
        decoyItems: [
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "🐪" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "panzer", label: ml("Panzer", "Tank", "Tank", "Tanc"), emoji: "🪖" },
        ],
      },
      {
        id: "ge-6-mr-2",
        title: ml("Ritterrüstung", "Armor", "Lovagi páncél", "Armură"),
        instruction: ml("Merke die Rüstung.", "Remember armor.", "Jegyezd meg a páncélt.", "Reține armura."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "helm", label: ml("Helm", "Helmet", "Sisak", "Cască"), emoji: "🪖" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "schild", label: ml("Schild", "Shield", "Pajzs", "Scut"), emoji: "🛡️" },
          { id: "ketten", label: ml("Kettenhemd", "Chainmail", "Láncing", "Cămașă de zale"), emoji: "👕" },
        ],
        decoyItems: [
          { id: "pistole", label: ml("Pistole", "Pistol", "Pisztoly", "Pistol"), emoji: "🔫" },
          { id: "toga", label: ml("Toga", "Toga", "Tóga", "Togă"), emoji: "👘" },
          { id: "hut", label: ml("Hut", "Hat", "Kalap", "Pălărie"), emoji: "🎩" },
        ],
      },
      {
        id: "ge-6-mr-3",
        title: ml("Stadtleben", "City Life", "Városi élet", "Viața la oraș"),
        instruction: ml("Merke Stadt-Dinge.", "Remember city items.", "Jegyezd meg a városiakat.", "Reține obiectele din oraș."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#422006", accent: "#d97706", radar: "#78350f" },
        targetItems: [
          { id: "mauer", label: ml("Stadtmauer", "Wall", "Városfal", "Zid"), emoji: "🧱" },
          { id: "markt", label: ml("Markt", "Market", "Piac", "Piață"), emoji: "🍎" },
          { id: "rathaus", label: ml("Rathaus", "Town hall", "Városháza", "Primărie"), emoji: "🏛️" },
          { id: "münze", label: ml("Münze", "Coin", "Érme", "Monedă"), emoji: "🪙" },
        ],
        decoyItems: [
          { id: "feld", label: ml("Feld", "Field", "Szántó", "Câmp"), emoji: "🌾" },
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "kuh", label: ml("Kuh", "Cow", "Tehén", "Vacă"), emoji: "🐄" },
        ],
      },
      {
        id: "ge-6-mr-4",
        title: ml("Wikinger", "Vikings", "Vikingek", "Vikingi"),
        instruction: ml("Merke Wikinger-Dinge.", "Remember Viking items.", "Jegyezd meg a viking dolgokat.", "Reține obiectele vikinge."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#3b82f6", radar: "#1d4ed8" },
        targetItems: [
          { id: "schiff", label: ml("Langschiff", "Longship", "Hosszúhajó", "Corabie"), emoji: "⛵" },
          { id: "axt", label: ml("Axt", "Axe", "Fejsze", "Topor"), emoji: "🪓" },
          { id: "runen", label: ml("Runen", "Runes", "Rúnák", "Rune"), emoji: "🪨" },
          { id: "horn", label: ml("Trinkhorn", "Horn", "Kürt", "Corn"), emoji: "📯" },
        ],
        decoyItems: [
          { id: "bibel", label: ml("Bibel", "Bible", "Biblia", "Biblie"), emoji: "📖" },
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "tempel", label: ml("Tempel", "Temple", "Templom", "Templu"), emoji: "🏛️" },
        ],
      },
      {
        id: "ge-6-mr-5",
        title: ml("Entdecker", "Explorers", "Felfedezők", "Exploratori"),
        instruction: ml("Merke Entdecker-Dinge.", "Remember Explorer items.", "Jegyezd meg a felfedezős dolgokat.", "Reține obiecte de explorator."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "kompass", label: ml("Kompass", "Compass", "Iránytű", "Busolă"), emoji: "🧭" },
          { id: "schiff", label: ml("Schiff", "Ship", "Hajó", "Corabie"), emoji: "⛵" },
          { id: "karte", label: ml("Karte", "Map", "Térkép", "Hartă"), emoji: "🗺️" },
          { id: "fernrohr", label: ml("Fernrohr", "Telescope", "Távcső", "Telescop"), emoji: "🔭" },
        ],
        decoyItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
        ],
      },
      {
        id: "ge-6-mr-6",
        title: ml("Ritterwaffen", "Knight Weapons", "Lovagi fegyverek", "Arme cavaler"),
        instruction: ml("Merke die Waffen.", "Remember weapons.", "Jegyezd meg a fegyvereket.", "Reține armele."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "lanze", label: ml("Lanze", "Lance", "Kopja", "Lance"), emoji: "🦯" },
          { id: "morgenstern", label: ml("Morgenstern", "Mace", "Buzogány", "Buzdugan"), emoji: "🪩" },
          { id: "armbrust", label: ml("Armbrust", "Crossbow", "Számszeríj", "Arbaletă"), emoji: "🏹" },
        ],
        decoyItems: [
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "gewehr", label: ml("Gewehr", "Rifle", "Puska", "Pușcă"), emoji: "🔫" },
          { id: "panzer", label: ml("Panzer", "Tank", "Tank", "Tanc"), emoji: "🪖" },
        ],
      },
      {
        id: "ge-6-mr-7",
        title: ml("Kloster Dinge", "Monastery Items", "Kolostori dolgok", "Obiecte mănăstire"),
        instruction: ml("Merke Kloster-Dinge.", "Remember monastery items.", "Jegyezd meg a kolostori dolgokat.", "Reține obiecte mănăstire."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#422006", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "bibel", label: ml("Bibel", "Bible", "Biblia", "Biblie"), emoji: "📖" },
          { id: "kreuz", label: ml("Kreuz", "Cross", "Kereszt", "Cruce"), emoji: "✝️" },
          { id: "feder", label: ml("Feder", "Quill", "Toll", "Pană"), emoji: "🖋️" },
          { id: "kraeuter", label: ml("Kräuter", "Herbs", "Gyógynövények", "Ierburi"), emoji: "🌿" },
        ],
        decoyItems: [
          { id: "krone", label: ml("Krone", "Crown", "Korona", "Coroană"), emoji: "👑" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "muenze", label: ml("Münze", "Coin", "Érme", "Monedă"), emoji: "🪙" },
        ],
      },
      {
        id: "ge-6-mr-8",
        title: ml("Marktwaren", "Market Goods", "Piaci áruk", "Mărfuri piață"),
        instruction: ml("Was gab es am Markt?", "What was at the market?", "Mi volt a piacon?", "Ce era la piață?"),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "tuch", label: ml("Tuch", "Cloth", "Posztó", "Pânză"), emoji: "🧶" },
          { id: "gewürz", label: ml("Gewürze", "Spices", "Fűszerek", "Condimente"), emoji: "🧂" },
          { id: "schuh", label: ml("Schuhe", "Shoes", "Cipők", "Pantofi"), emoji: "👞" },
          { id: "brot", label: ml("Brot", "Bread", "Kenyér", "Pâine"), emoji: "🍞" },
        ],
        decoyItems: [
          { id: "kühlschrank", label: ml("Kühlschrank", "Fridge", "Hűtő", "Frigider"), emoji: "🧊" },
          { id: "smartphone", label: ml("Handy", "Phone", "Telefon", "Telefon"), emoji: "📱" },
          { id: "plastik", label: ml("Plastiktüte", "Plastic bag", "Nylonzacskó", "Pungă plastic"), emoji: "🛍️" },
        ],
      },
      {
        id: "ge-6-mr-9",
        title: ml("Handwerkszeug", "Craft Tools", "Kézműves szerszámok", "Unelte meșteșugărești"),
        instruction: ml("Merke die Werkzeuge.", "Remember tools.", "Jegyezd meg a szerszámokat.", "Reține uneltele."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1f2937", accent: "#9ca3af", radar: "#374151" },
        targetItems: [
          { id: "hammer", label: ml("Hammer", "Hammer", "Kalapács", "Ciocan"), emoji: "🔨" },
          { id: "amboss", label: ml("Amboss", "Anvil", "Üllő", "Nicoală"), emoji: "🪨" },
          { id: "schere", label: ml("Schere", "Scissors", "Olló", "Foarfecă"), emoji: "✂️" },
          { id: "nadel", label: ml("Nadel", "Needle", "Tű", "Ac"), emoji: "🪡" },
        ],
        decoyItems: [
          { id: "bohrer", label: ml("Bohrmaschine", "Drill", "Fúrógép", "Bormașină"), emoji: "🪛" },
          { id: "laptop", label: ml("Laptop", "Laptop", "Laptop", "Laptop"), emoji: "💻" },
          { id: "kamera", label: ml("Kamera", "Camera", "Fényképező", "Cameră"), emoji: "📷" },
        ],
      },
      {
        id: "ge-6-mr-10",
        title: ml("Schiffe & Reisen", "Ships & Travel", "Hajók és utazás", "Nave și călătorii"),
        instruction: ml("Merke die Seefahrt-Dinge.", "Remember sailing items.", "Jegyezd meg a tengerészeti dolgokat.", "Reține obiecte de navigație."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#60a5fa", radar: "#1d4ed8" },
        targetItems: [
          { id: "schiff", label: ml("Kogge (Schiff)", "Cog (Ship)", "Kogge (Hajó)", "Navă"), emoji: "⛵" },
          { id: "kompass", label: ml("Kompass", "Compass", "Iránytű", "Busolă"), emoji: "🧭" },
          { id: "karte", label: ml("Seekarte", "Sea map", "Tengerészeti térkép", "Hartă nav."), emoji: "🗺️" },
          { id: "anker", label: ml("Anker", "Anchor", "Horgony", "Ancoră"), emoji: "⚓" },
        ],
        decoyItems: [
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "zug", label: ml("Zug", "Train", "Vonat", "Tren"), emoji: "🚂" },
          { id: "flugzeug", label: ml("Flugzeug", "Airplane", "Repülő", "Avion"), emoji: "✈️" },
        ],
      }
    ],
  },
  7: {
    grade: 7,
    meteorCatch: [
      {
        id: "ge-7-mc-1",
        title: ml("Frühe Neuzeit", "Early Modern", "Kora újkor", "Epoca modernă timp."),
        prompt: ml("Fange Neuzeit-Begriffe.", "Catch Early Modern terms.", "Fogj kora újkori fogalmakat.", "Prinde termeni moderni."),
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#2563eb" },
        correctItems: [
          { id: "buchdruck", label: ml("Buchdruck", "Printing", "Könyvnyomtatás", "Tipar"), emoji: "🖨️" },
          { id: "reformation", label: ml("Reformation", "Reformation", "Reformáció", "Reformă"), emoji: "⛪" },
          { id: "kolumbus", label: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb"), emoji: "⛵" },
          { id: "renaissance", label: ml("Renaissance", "Renaissance", "Reneszánsz", "Renaștere"), emoji: "🎨" },
          { id: "helio", label: ml("Sonnensystem", "Solar System", "Naprendszer", "Sist. Solar"), emoji: "☀️" },
        ],
        wrongItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "steinzeit", label: ml("Faustkeil", "Hand axe", "Szakóca", "Toporaș"), emoji: "🪨" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
        ],
      },
      {
        id: "ge-7-mc-2",
        title: ml("Renaissance", "Renaissance", "Reneszánsz", "Renaștere"),
        prompt: ml("Fange Kunst & Wissen.", "Catch art & science.", "Fogj művészetet és tudományt.", "Prinde artă și știință."),
        goal: 4,
        speed: 5.5,
        theme: { sky: "#450a0a", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "monalisa", label: ml("Mona Lisa", "Mona Lisa", "Mona Lisa", "Mona Lisa"), emoji: "🖼️" },
          { id: "davinci", label: ml("Da Vinci", "Da Vinci", "Da Vinci", "Da Vinci"), emoji: "👨‍🎨" },
          { id: "anatomie", label: ml("Anatomie", "Anatomy", "Anatómia", "Anatomie"), emoji: "💀" },
          { id: "globus", label: ml("Globus", "Globe", "Földgömb", "Glob"), emoji: "🌍" },
        ],
        wrongItems: [
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "⚔️" },
          { id: "zug", label: ml("Eisenbahn", "Train", "Vonat", "Tren"), emoji: "🚂" },
        ],
      },
      {
        id: "ge-7-mc-3",
        title: ml("Reformation", "Reformation", "Reformáció", "Reformă"),
        prompt: ml("Fange Reformations-Begriffe.", "Catch Reformation terms.", "Fogj reformációs fogalmakat.", "Prinde termeni din Reformă."),
        goal: 4,
        speed: 6,
        theme: { sky: "#1e1b4b", glow: "#c084fc", accent: "#a855f7" },
        correctItems: [
          { id: "luther", label: ml("Martin Luther", "M. Luther", "Luther Márton", "Martin Luther"), emoji: "📜" },
          { id: "thesen", label: ml("95 Thesen", "95 Theses", "95 Tétel", "95 de teze"), emoji: "📌" },
          { id: "bibel", label: ml("Bibel", "Bible", "Biblia", "Biblie"), emoji: "📖" },
          { id: "kirche", label: ml("Kirche", "Church", "Templom", "Biserică"), emoji: "⛪" },
        ],
        wrongItems: [
          { id: "islam", label: ml("Moschee", "Mosque", "Mecset", "Moschee"), emoji: "🕌" },
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "🐪" },
        ],
      },
      {
        id: "ge-7-mc-4",
        title: ml("Absolutismus", "Absolutism", "Abszolutizmus", "Absolutism"),
        prompt: ml("Fange Absolutismus-Begriffe.", "Catch Absolutism terms.", "Fogj abszolutizmus fogalmakat.", "Prinde termeni de Absolutism."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#064e3b", glow: "#34d399", accent: "#10b981" },
        correctItems: [
          { id: "könig", label: ml("König (Ludwig XIV)", "King Louis XIV", "XIV. Lajos", "Regele Ludovic XIV"), emoji: "👑" },
          { id: "versailles", label: ml("Versailles", "Versailles", "Versailles", "Versailles"), emoji: "🏰" },
          { id: "sonne", label: ml("Sonnenkönig", "Sun King", "Napkirály", "Regele Soare"), emoji: "☀️" },
          { id: "armee", label: ml("Stehendes Heer", "Standing army", "Állandó hadsereg", "Armată permanentă"), emoji: "💂" },
          { id: "steuern", label: ml("Steuern", "Taxes", "Adók", "Taxe"), emoji: "💰" },
        ],
        wrongItems: [
          { id: "demokratie", label: ml("Demokratie", "Democracy", "Demokrácia", "Democrație"), emoji: "🗳️" },
          { id: "bauer", label: ml("Leibeigener", "Serf", "Jobbágy", "Iobag"), emoji: "🌾" },
          { id: "ritter", label: ml("Ritterheer", "Knights", "Lovagi sereg", "Cavaleri"), emoji: "🐎" },
        ],
      },
      {
        id: "ge-7-mc-5",
        title: ml("Französische Revolution", "French Revolution", "Francia Forradalom", "Rev. Franceză"),
        prompt: ml("Fange Revolutionäres.", "Catch revolutionary items.", "Fogj forradalmi dolgokat.", "Prinde lucruri revoluționare."),
        goal: 4,
        speed: 7,
        theme: { sky: "#1e3a8a", glow: "#ef4444", accent: "#dc2626" },
        correctItems: [
          { id: "bastille", label: ml("Sturm Bastille", "Bastille", "Bastille", "Bastilia"), emoji: "🔥" },
          { id: "rechte", label: ml("Menschenrechte", "Rights", "Emberi jogok", "Drepturi"), emoji: "📜" },
          { id: "guillotine", label: ml("Guillotine", "Guillotine", "Guillotine", "Ghilotină"), emoji: "🪓" },
          { id: "liberte", label: ml("Freiheit, Gleichheit", "Liberty...", "Szabadság...", "Libertate..."), emoji: "🇫🇷" },
        ],
        wrongItems: [
          { id: "kaiser", label: ml("Kaiserkrönung", "Coronation", "Császárkoronázás", "Încoronare"), emoji: "👑" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "kolumbus", label: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb"), emoji: "⛵" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "ge-7-os-1",
        title: ml("Mittelalter vs Neuzeit", "Medieval vs Modern", "Középkor vs Újkor", "Med. vs Modern"),
        instruction: ml("Sortiere die Begriffe.", "Sort terms.", "Rendezd a fogalmakat.", "Sortează termenii."),
        theme: { bg: "#0f172a", orbit: "#3b82f6", accent: "#2563eb" },
        buckets: [
          { id: "mittel", label: ml("Mittelalter", "Middle Ages", "Középkor", "Evul Mediu"), color: "#9ca3af" },
          { id: "neu", label: ml("Frühe Neuzeit", "Early Modern", "Újkor", "Epoca Modernă"), color: "#f59e0b" },
        ],
        items: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️", bucketId: "mittel" },
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰", bucketId: "mittel" },
          { id: "mönch", label: ml("Mönch kopiert", "Monk copies", "Szerzetes másol", "Călugăr copiază"), emoji: "✍️", bucketId: "mittel" },
          { id: "druck", label: ml("Buchdruck", "Printing", "Nyomtatás", "Tipar"), emoji: "🖨️", bucketId: "neu" },
          { id: "kompass", label: ml("Kompass", "Compass", "Iránytű", "Busolă"), emoji: "🧭", bucketId: "neu" },
          { id: "helio", label: ml("Sonnenzentriert", "Heliocentric", "Heliocentrikus", "Heliocentric"), emoji: "☀️", bucketId: "neu" },
        ],
      },
      {
        id: "ge-7-os-2",
        title: ml("Geozentrisch vs Heliozentrisch", "Geo vs Helio", "Geo vs Helio", "Geo vs Helio"),
        instruction: ml("Sortiere die Weltbilder.", "Sort worldviews.", "Rendezd a világképeket.", "Sortează viziunile."),
        theme: { bg: "#450a0a", orbit: "#f59e0b", accent: "#d97706" },
        buckets: [
          { id: "geo", label: ml("Erde im Zentrum", "Earth center", "Föld a központ", "Pământ centru"), color: "#3b82f6" },
          { id: "helio", label: ml("Sonne im Zentrum", "Sun center", "Nap a központ", "Soare centru"), color: "#facc15" },
        ],
        items: [
          { id: "kirche", label: ml("Kirche lehrte das", "Church taught", "Egyház tanította", "Biserica învăța"), emoji: "⛪", bucketId: "geo" },
          { id: "mittel", label: ml("Mittelalter", "Middle Ages", "Középkor", "Evul Mediu"), emoji: "🏰", bucketId: "geo" },
          { id: "erde", label: ml("Erde steht still", "Earth stands still", "A Föld áll", "Pământul stă"), emoji: "🌍", bucketId: "geo" },
          { id: "galilei", label: ml("Galileo Galilei", "Galileo", "Galilei", "Galileo"), emoji: "🔭", bucketId: "helio" },
          { id: "kopernikus", label: ml("Kopernikus", "Copernicus", "Kopernikusz", "Copernic"), emoji: "👨‍🔬", bucketId: "helio" },
          { id: "neu", label: ml("Neuzeit", "Modern", "Újkor", "Epocă modernă"), emoji: "⏳", bucketId: "helio" },
        ],
      },
      {
        id: "ge-7-os-3",
        title: ml("Katholisch vs Protestantisch", "Catholic vs Protest.", "Katolikus vs Protestáns", "Catolic vs Protest."),
        instruction: ml("Reformation.", "Reformation.", "Reformáció.", "Reformă."),
        theme: { bg: "#1e1b4b", orbit: "#c084fc", accent: "#a855f7" },
        buckets: [
          { id: "kath", label: ml("Katholisch", "Catholic", "Katolikus", "Catolic"), color: "#ef4444" },
          { id: "prot", label: ml("Protestantisch", "Protestant", "Protestáns", "Protestant"), color: "#3b82f6" },
        ],
        items: [
          { id: "papst", label: ml("Papst", "Pope", "Pápa", "Papă"), emoji: "👑", bucketId: "kath" },
          { id: "ablass", label: ml("Ablassbriefe", "Indulgences", "Búcsúcédulák", "Indulgențe"), emoji: "📜", bucketId: "kath" },
          { id: "latein", label: ml("Latein. Messe", "Latin Mass", "Latin mise", "Mesa latină"), emoji: "🗣️", bucketId: "kath" },
          { id: "luther", label: ml("Martin Luther", "M. Luther", "Luther", "Luther"), emoji: "👨‍🏫", bucketId: "prot" },
          { id: "deutsch", label: ml("Deutsche Bibel", "German Bible", "Német Biblia", "Biblia germ."), emoji: "📖", bucketId: "prot" },
          { id: "glaube", label: ml("Nur der Glaube", "Faith alone", "Csak a hit", "Doar credința"), emoji: "🙏", bucketId: "prot" },
        ],
      },
      {
        id: "ge-7-os-4",
        title: ml("König vs Volk", "King vs People", "Király vs Nép", "Rege vs Popor"),
        instruction: ml("Französische Revolution.", "French Revolution.", "Francia Forradalom.", "Rev. Franceză."),
        theme: { bg: "#1e3a8a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "könig", label: ml("König/Adel", "King/Nobles", "Király/Nemesek", "Rege/Nobili"), color: "#facc15" },
          { id: "volk", label: ml("Volk (3. Stand)", "People", "Nép (3. rend)", "Popor"), color: "#3b82f6" },
        ],
        items: [
          { id: "schloss", label: ml("Versailles", "Versailles", "Versailles", "Versailles"), emoji: "🏰", bucketId: "könig" },
          { id: "steuern_nein", label: ml("Keine Steuern", "No taxes", "Nem fizet adót", "Fără taxe"), emoji: "💰", bucketId: "könig" },
          { id: "krone", label: ml("Krone", "Crown", "Korona", "Coroană"), emoji: "👑", bucketId: "könig" },
          { id: "hunger", label: ml("Hunger", "Hunger", "Éhezés", "Foame"), emoji: "🍞", bucketId: "volk" },
          { id: "steuern_ja", label: ml("Zahlt Steuern", "Pays taxes", "Fizeti az adót", "Plătește taxe"), emoji: "🪙", bucketId: "volk" },
          { id: "aufstand", label: ml("Aufstand", "Revolt", "Lázadás", "Revoltă"), emoji: "🔥", bucketId: "volk" },
        ],
      },
      {
        id: "ge-7-os-5",
        title: ml("Alte vs Neue Welt", "Old vs New World", "Óvilág vs Újvilág", "Lumea veche vs nouă"),
        instruction: ml("Woher kamen die Güter?", "Where from?", "Honnan származik?", "De unde provin?"),
        theme: { bg: "#064e3b", orbit: "#10b981", accent: "#059669" },
        buckets: [
          { id: "alt", label: ml("Europa (Alt)", "Europe", "Európa (Ó)", "Europa"), color: "#3b82f6" },
          { id: "neu", label: ml("Amerika (Neu)", "America", "Amerika (Új)", "America"), color: "#f59e0b" },
        ],
        items: [
          { id: "pferd", label: ml("Pferd", "Horse", "Ló", "Cal"), emoji: "🐎", bucketId: "alt" },
          { id: "schwein", label: ml("Schwein", "Pig", "Sertés", "Porc"), emoji: "🐖", bucketId: "alt" },
          { id: "weizen", label: ml("Weizen", "Wheat", "Búza", "Grâu"), emoji: "🌾", bucketId: "alt" },
          { id: "kartoffel", label: ml("Kartoffel", "Potato", "Burgonya", "Cartof"), emoji: "🥔", bucketId: "neu" },
          { id: "tomate", label: ml("Tomate", "Tomato", "Paradicsom", "Roșie"), emoji: "🍅", bucketId: "neu" },
          { id: "mais", label: ml("Mais", "Corn", "Kukorica", "Porumb"), emoji: "🌽", bucketId: "neu" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "ge-7-sr-1",
        title: ml("Buchdruck", "Printing", "Nyomtatás", "Tipar"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-7-sr-1-s1",
            title: ml("Gutenberg", "Gutenberg", "Gutenberg", "Gutenberg"),
            prompt: ml("Was war besonders am neuen Buchdruck?", "What was special about it?", "Mi volt a különleges benne?", "Ce a fost special?"),
            sceneType: "community",
            visual: { icon: "🖨️", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Bunte Farbe", "Color ink", "Színes tinta", "Cerneală color") },
              { id: "b", label: ml("Bewegliche Lettern", "Movable type", "Mozgatható betűk", "Litere mobile") },
              { id: "c", label: ml("Papier statt Stein", "Paper not stone", "Papír kő helyett", "Hârtie nu piatră") },
              { id: "d", label: ml("Bilder", "Pictures", "Képek", "Poze") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-7-sr-2",
        title: ml("Reformation", "Reformation", "Reformáció", "Reformă"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-7-sr-2-s1",
            title: ml("Luther", "Luther", "Luther", "Luther"),
            prompt: ml("Wogegen war Martin Luther?", "What was he against?", "Mi ellen volt Luther?", "Împotriva a ce era?"),
            sceneType: "nature",
            visual: { icon: "📜", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Ablasshandel", "Indulgences", "Búcsúcédulák", "Indulgențe") },
              { id: "b", label: ml("Buchdruck", "Printing", "Könyvnyomtatás", "Tipar") },
              { id: "c", label: ml("König", "King", "Király", "Rege") },
              { id: "d", label: ml("Schule", "School", "Iskola", "Școală") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-7-sr-3",
        title: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-7-sr-3-s1",
            title: ml("Ziel", "Goal", "Cél", "Scop"),
            prompt: ml("Wohin wollte Kolumbus eigentlich segeln?", "Where did he want to sail?", "Hová akart eredetileg hajózni?", "Unde voia să navigheze?"),
            sceneType: "safety",
            visual: { icon: "⛵", bg: "#082f49", accent: "#0ea5e9" },
            choices: [
              { id: "a", label: ml("Amerika", "America", "Amerika", "America") },
              { id: "b", label: ml("Australien", "Australia", "Ausztrália", "Australia") },
              { id: "c", label: ml("Indien", "India", "India", "India") },
              { id: "d", label: ml("Nordpol", "North Pole", "Északi-sark", "Polul Nord") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig! Nach Westen nach Indien.", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-7-sr-4",
        title: ml("Absolutismus", "Absolutism", "Abszolutizmus", "Absolutism"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-7-sr-4-s1",
            title: ml("Der Staat", "The State", "Az Állam", "Statul"),
            prompt: ml("Wer sagte: 'Der Staat bin ich'?", "Who said: 'I am the state'?", "Ki mondta: 'Az állam én vagyok'?", "Cine a zis: 'Statul sunt eu'?"),
            sceneType: "community",
            visual: { icon: "👑", bg: "#4c1d95", accent: "#c084fc" },
            choices: [
              { id: "a", label: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb") },
              { id: "b", label: ml("Martin Luther", "M. Luther", "Luther Márton", "Martin Luther") },
              { id: "c", label: ml("Ludwig XIV.", "Louis XIV", "XIV. Lajos", "Ludovic XIV") },
              { id: "d", label: ml("Galileo", "Galileo", "Galilei", "Galileo") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-7-sr-5",
        title: ml("Franz. Revolution", "French Rev.", "Francia Forr.", "Rev. Franceză"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-7-sr-5-s1",
            title: ml("Bastille", "Bastille", "Bastille", "Bastilia"),
            prompt: ml("Was war die Bastille?", "What was the Bastille?", "Mi volt a Bastille?", "Ce era Bastilia?"),
            sceneType: "nature",
            visual: { icon: "🏰", bg: "#1f2937", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Ein Gefängnis", "A prison", "Egy börtön", "O închisoare") },
              { id: "b", label: ml("Ein Bäcker", "A bakery", "Egy pékség", "O brutărie") },
              { id: "c", label: ml("Ein Palast", "A palace", "Egy palota", "Un palat") },
              { id: "d", label: ml("Ein Schiff", "A ship", "Egy hajó", "O navă") },
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
        id: "ge-7-cb-1",
        title: ml("Buchdruck", "Printing", "Nyomtatás", "Tipar"),
        instruction: ml("Wie wird gedruckt?", "How to print?", "Hogyan nyomtattak?", "Cum se tipărește?"),
        hint: ml("Lettern zuerst.", "Letters first.", "Betűk először.", "Literele întâi."),
        theme: { bg: "#1e3a8a", accent: "#93c5fd", card: "#1e40af" },
        parts: [
          { id: "lettern", label: ml("Lettern setzen", "Set type", "Betűk kirakása", "Setare litere"), emoji: "🅰️" },
          { id: "farbe", label: ml("Einfärben", "Inking", "Befestés", "Cerneală"), emoji: "🎨" },
          { id: "papier", label: ml("Papier auflegen", "Paper on top", "Papír ráhelyezése", "Hârtie deasupra"), emoji: "📄" },
          { id: "presse", label: ml("Pressen", "Pressing", "Préselés", "Presare"), emoji: "⬇️" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["lettern", "farbe", "papier", "presse"],
      },
      {
        id: "ge-7-cb-2",
        title: ml("Reformation", "Reformation", "Reformáció", "Reformă"),
        instruction: ml("Ereignisse ordnen.", "Order events.", "Rendezd az eseményeket.", "Ordonează evenimentele."),
        hint: ml("Thesen zuerst.", "Theses first.", "Tételek először.", "Tezele întâi."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "thesen", label: ml("95 Thesen", "95 Theses", "95 Tétel", "95 Teze"), emoji: "📌" },
          { id: "bann", label: ml("Kirchenbann", "Excommunication", "Kiátkozás", "Excomunicare"), emoji: "🚫" },
          { id: "wartburg", label: ml("Flucht Wartburg", "Wartburg flight", "Menekülés", "Fuga"), emoji: "🏰" },
          { id: "bibel", label: ml("Bibelübersetzung", "Bible trans.", "Biblia fordítás", "Trad. Biblie"), emoji: "📖" },
        ],
        slots: [
          { id: "s1", label: "1. 1517" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. 1521/22" },
        ],
        solution: ["thesen", "bann", "wartburg", "bibel"],
      },
      {
        id: "ge-7-cb-3",
        title: ml("Kolumbus Reise", "Columbus Voyage", "Kolumbusz útja", "Călătoria lui Columb"),
        instruction: ml("Ordne die Reise.", "Order the voyage.", "Rendezd az utat.", "Ordonează călătoria."),
        hint: ml("Start in Spanien.", "Start in Spain.", "Indulás Spanyolo.", "Start în Spania."),
        theme: { bg: "#082f49", accent: "#38bdf8", card: "#0ea5e9" },
        parts: [
          { id: "spanien", label: ml("Abfahrt Spanien", "Dep. Spain", "Indulás Spanyolo.", "Plecare Spania"), emoji: "🇪🇸" },
          { id: "atlantik", label: ml("Über den Atlantik", "Across Atlantic", "Át az Atlantin", "Peste Atlantic"), emoji: "🌊" },
          { id: "land", label: ml("Land in Sicht", "Land in sight", "Föld!", "Pământ"), emoji: "🏝️" },
          { id: "irrtum", label: ml("Glaubt in Indien zu sein", "Thinks India", "Azt hiszi India", "Crede India"), emoji: "🤔" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["spanien", "atlantik", "land", "irrtum"],
      },
      {
        id: "ge-7-cb-4",
        title: ml("Franz. Revolution", "French Rev.", "Francia Forr.", "Rev. Franceză"),
        instruction: ml("Ereignisse ordnen.", "Order events.", "Rendezd az eseményeket.", "Ordonează evenimentele."),
        hint: ml("Krise zuerst.", "Crisis first.", "Válság elöl.", "Criza prima."),
        theme: { bg: "#1e1b4b", accent: "#c084fc", card: "#312e81" },
        parts: [
          { id: "krise", label: ml("Staatsschulden", "Debt", "Államadósság", "Datorie"), emoji: "📉" },
          { id: "bastille", label: ml("Sturm Bastille", "Bastille", "Bastille", "Bastilia"), emoji: "🔥" },
          { id: "rechte", label: ml("Menschenrechte", "Rights", "Emberi jogok", "Drepturi"), emoji: "📜" },
          { id: "könig", label: ml("König hingerichtet", "King executed", "Király kivégzése", "Rege executat"), emoji: "🪓" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["krise", "bastille", "rechte", "könig"],
      },
      {
        id: "ge-7-cb-5",
        title: ml("Stände Absolutismus", "Estates (Absolutism)", "Rendek (Abszolutizmus)", "Stări (Absolutism)"),
        instruction: ml("Machtpyramide.", "Power pyramid.", "Hatalmi piramis.", "Piramida puterii."),
        hint: ml("König oben.", "King top.", "Király fent.", "Rege sus."),
        theme: { bg: "#422006", accent: "#facc15", card: "#78350f" },
        parts: [
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑" },
          { id: "klerus", label: ml("1. Stand (Klerus)", "1st Estate", "1. rend", "Starea 1"), emoji: "✝️" },
          { id: "adel", label: ml("2. Stand (Adel)", "2nd Estate", "2. rend", "Starea 2"), emoji: "🛡️" },
          { id: "volk", label: ml("3. Stand (Bauern/Bürger)", "3rd Estate", "3. rend", "Starea 3"), emoji: "🌾" },
        ],
        slots: [
          { id: "s1", label: "1. Spitze" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4. Basis (98%)" },
        ],
        solution: ["könig", "klerus", "adel", "volk"],
      }
    ],
    memoryRadar: [
      {
        id: "ge-7-mr-1",
        title: ml("Neuzeit Begriffe", "Modern Terms", "Újkori fogalmak", "Termeni moderni"),
        instruction: ml("Merke die Begriffe.", "Remember terms.", "Jegyezd meg a fogalmakat.", "Reține termenii."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "druck", label: ml("Buchdruck", "Printing", "Nyomtatás", "Tipar"), emoji: "🖨️" },
          { id: "ref", label: ml("Reformation", "Reformation", "Reformáció", "Reformă"), emoji: "⛪" },
          { id: "ren", label: ml("Renaissance", "Renaissance", "Reneszánsz", "Renaștere"), emoji: "🎨" },
          { id: "ent", label: ml("Entdeckungen", "Discoveries", "Felfedezések", "Descoperiri"), emoji: "🗺️" },
        ],
        decoyItems: [
          { id: "rit", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "pyr", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "stein", label: ml("Faustkeil", "Hand axe", "Szakóca", "Toporaș"), emoji: "🪨" },
        ],
      },
      {
        id: "ge-7-mr-2",
        title: ml("Renaissance", "Renaissance", "Reneszánsz", "Renaștere"),
        instruction: ml("Merke Renaissance-Dinge.", "Remember Renaissance.", "Jegyezd meg a reneszánszt.", "Reține Renașterea."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#422006", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "mona", label: ml("Mona Lisa", "Mona Lisa", "Mona Lisa", "Mona Lisa"), emoji: "🖼️" },
          { id: "helio", label: ml("Sonnensystem", "Solar Sys.", "Naprendszer", "Sist. Solar"), emoji: "☀️" },
          { id: "anat", label: ml("Anatomie", "Anatomy", "Anatómia", "Anatomie"), emoji: "💀" },
          { id: "glob", label: ml("Globus", "Globe", "Földgömb", "Glob"), emoji: "🌍" },
        ],
        decoyItems: [
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "⚔️" },
          { id: "pest", label: ml("Pest", "Plague", "Pestis", "Ciuma"), emoji: "🐀" },
        ],
      },
      {
        id: "ge-7-mr-3",
        title: ml("Reformation", "Reformation", "Reformáció", "Reformă"),
        instruction: ml("Merke die Dinge.", "Remember items.", "Jegyezd meg a dolgokat.", "Reține obiectele."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#4c1d95", accent: "#c084fc", radar: "#7e22ce" },
        targetItems: [
          { id: "luther", label: ml("Luther", "Luther", "Luther", "Luther"), emoji: "👨‍🏫" },
          { id: "thesen", label: ml("95 Thesen", "95 Theses", "95 Tétel", "95 Teze"), emoji: "📌" },
          { id: "bibel", label: ml("Bibel", "Bible", "Biblia", "Biblie"), emoji: "📖" },
          { id: "kirche", label: ml("Kirche", "Church", "Templom", "Biserică"), emoji: "⛪" },
        ],
        decoyItems: [
          { id: "zeus", label: ml("Zeus", "Zeus", "Zeusz", "Zeus"), emoji: "⚡" },
          { id: "tempel", label: ml("Tempel", "Temple", "Templom", "Templu"), emoji: "🏛️" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
        ],
      },
      {
        id: "ge-7-mr-4",
        title: ml("Absolutismus", "Absolutism", "Abszolutizmus", "Absolutism"),
        instruction: ml("Merke die Begriffe.", "Remember terms.", "Jegyezd meg a fogalmakat.", "Reține termenii."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑" },
          { id: "schloss", label: ml("Versailles", "Versailles", "Versailles", "Versailles"), emoji: "🏰" },
          { id: "sonne", label: ml("Sonnenkönig", "Sun King", "Napkirály", "Regele Soare"), emoji: "☀️" },
          { id: "armee", label: ml("Heer", "Army", "Hadsereg", "Armată"), emoji: "💂" },
        ],
        decoyItems: [
          { id: "demo", label: ml("Demokratie", "Democracy", "Demokrácia", "Democrație"), emoji: "🗳️" },
          { id: "wahl", label: ml("Wahlen", "Elections", "Választás", "Alegeri"), emoji: "🗳️" },
          { id: "stein", label: ml("Keil", "Axe", "Szakóca", "Topor"), emoji: "🪨" },
        ],
      },
      {
        id: "ge-7-mr-5",
        title: ml("Franz. Revolution", "French Rev.", "Francia Forr.", "Rev. Franceză"),
        instruction: ml("Merke Revolution-Dinge.", "Remember Rev. items.", "Jegyezd meg a forradalmat.", "Reține Rev."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#60a5fa", radar: "#1d4ed8" },
        targetItems: [
          { id: "bas", label: ml("Bastille", "Bastille", "Bastille", "Bastilia"), emoji: "🔥" },
          { id: "rech", label: ml("Menschenrechte", "Rights", "Jogok", "Drepturi"), emoji: "📜" },
          { id: "guil", label: ml("Guillotine", "Guillotine", "Guillotine", "Ghilotină"), emoji: "🪓" },
          { id: "lib", label: ml("Freiheit", "Liberty", "Szabadság", "Libertate"), emoji: "🇫🇷" },
        ],
        decoyItems: [
          { id: "kaiser", label: ml("Kaiser", "Emperor", "Császár", "Împărat"), emoji: "👑" },
          { id: "rit", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "pyr", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
        ],
      }
    ],
  },
  8: {
    grade: 8,
    meteorCatch: [
      {
        id: "ge-8-mc-1",
        title: ml("Industrielle Revolution", "Industrial Rev.", "Ipari forradalom", "Rev. Industrială"),
        prompt: ml("Fange Industrie-Dinge.", "Catch industry items.", "Fogj ipari dolgokat.", "Prinde obiecte industriale."),
        goal: 5,
        speed: 5,
        theme: { sky: "#1c1917", glow: "#facc15", accent: "#eab308" },
        correctItems: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam engine", "Gőzgép", "Motor cu aburi"), emoji: "🚂" },
          { id: "fabrik", label: ml("Fabrik", "Factory", "Gyár", "Fabrică"), emoji: "🏭" },
          { id: "kohle", label: ml("Kohle", "Coal", "Szén", "Cărbune"), emoji: "🪨" },
          { id: "eisenbahn", label: ml("Eisenbahn", "Railway", "Vasút", "Cale ferată"), emoji: "🛤️" },
          { id: "web", label: ml("Webstuhl", "Loom", "Szövőszék", "Război de țesut"), emoji: "🧵" },
        ],
        wrongItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "speer", label: ml("Speer", "Spear", "Dárda", "Suliță"), emoji: "🦯" },
          { id: "papyrus", label: ml("Papyrus", "Papyrus", "Papirusz", "Papirus"), emoji: "📜" },
        ],
      },
      {
        id: "ge-8-mc-2",
        title: ml("Imperialismus & Kolonien", "Imperialism", "Imperializmus", "Imperialism"),
        prompt: ml("Fange Imperialismus-Begriffe.", "Catch imperialism terms.", "Fogj imperializmus fogalmakat.", "Prinde termeni de imperialism."),
        goal: 4,
        speed: 5.5,
        theme: { sky: "#450a0a", glow: "#ef4444", accent: "#dc2626" },
        correctItems: [
          { id: "kolonie", label: ml("Kolonie", "Colony", "Gyarmat", "Colonie"), emoji: "🌍" },
          { id: "ausbeutung", label: ml("Ausbeutung", "Exploitation", "Kizsákmányolás", "Exploatare"), emoji: "⛏️" },
          { id: "rohstoffe", label: ml("Rohstoffe", "Raw materials", "Nyersanyagok", "Materii prime"), emoji: "🪵" },
          { id: "schiff", label: ml("Handelsschiff", "Trade ship", "Kereskedőhajó", "Navă comercială"), emoji: "🚢" },
        ],
        wrongItems: [
          { id: "kloster", label: ml("Kloster", "Monastery", "Kolostor", "Mănăstire"), emoji: "⛪" },
          { id: "burgen", label: ml("Burgen", "Castles", "Várak", "Castele"), emoji: "🏰" },
          { id: "mönch", label: ml("Mönch", "Monk", "Szerzetes", "Călugăr"), emoji: "📖" },
        ],
      },
      {
        id: "ge-8-mc-3",
        title: ml("Erster Weltkrieg", "World War I", "I. Világháború", "Primul Război M."),
        prompt: ml("Fange WWI-Dinge.", "Catch WWI items.", "Fogj I. VH dolgokat.", "Prinde lucruri din WW1."),
        goal: 5,
        speed: 6,
        theme: { sky: "#1e293b", glow: "#9ca3af", accent: "#6b7280" },
        correctItems: [
          { id: "graben", label: ml("Schützengraben", "Trench", "Lövészárok", "Tranșee"), emoji: "🕳️" },
          { id: "panzer", label: ml("Erste Panzer", "Tanks", "Első tankok", "Primele tancuri"), emoji: "🪖" },
          { id: "gas", label: ml("Giftgas", "Poison gas", "Mérgesgáz", "Gaz toxic"), emoji: "💨" },
          { id: "attentat", label: ml("Attentat Sarajewo", "Assassination", "Merénylet", "Asasinat"), emoji: "🔫" },
          { id: "u-boot", label: ml("U-Boot", "Submarine", "Tengeralattjáró", "Submarin"), emoji: "🛥️" },
        ],
        wrongItems: [
          { id: "atombombe", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
          { id: "computer", label: ml("Computer", "Computer", "Számítógép", "Computer"), emoji: "💻" },
          { id: "internet", label: ml("Internet", "Internet", "Internet", "Internet"), emoji: "🌐" },
        ],
      },
      {
        id: "ge-8-mc-4",
        title: ml("Zweiter Weltkrieg", "World War II", "II. Világháború", "Al Doilea RM"),
        prompt: ml("Fange WWII-Dinge.", "Catch WWII items.", "Fogj II. VH dolgokat.", "Prinde lucruri din WW2."),
        goal: 4,
        speed: 6.5,
        theme: { sky: "#450a0a", glow: "#f87171", accent: "#ef4444" },
        correctItems: [
          { id: "blitz", label: ml("Blitzkrieg", "Blitzkrieg", "Villámháború", "Război fulger"), emoji: "⚡" },
          { id: "bomber", label: ml("Bomber", "Bombers", "Bombázók", "Bombardiere"), emoji: "✈️" },
          { id: "atom", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
          { id: "radar", label: ml("Radar", "Radar", "Radar", "Radar"), emoji: "📡" },
        ],
        wrongItems: [
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "burg", label: ml("Burg", "Castle", "Vár", "Castel"), emoji: "🏰" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
        ],
      },
      {
        id: "ge-8-mc-5",
        title: ml("Kalter Krieg", "Cold War", "Hidegháború", "Războiul Rece"),
        prompt: ml("Fange Kalter-Krieg-Dinge.", "Catch Cold War items.", "Fogj hidegháborús dolgokat.", "Prinde lucruri Război Rece."),
        goal: 5,
        speed: 7,
        theme: { sky: "#1e3a8a", glow: "#93c5fd", accent: "#3b82f6" },
        correctItems: [
          { id: "mauer", label: ml("Berliner Mauer", "Berlin Wall", "Berlini fal", "Zidul Berlinului"), emoji: "🧱" },
          { id: "weltraum", label: ml("Wettlauf ins All", "Space Race", "Űrverseny", "Cursa spațială"), emoji: "🚀" },
          { id: "spion", label: ml("Spione", "Spies", "Kémek", "Spioni"), emoji: "🕵️" },
          { id: "atom", label: ml("Atomwaffen", "Nukes", "Atomfegyverek", "Arme nucleare"), emoji: "☢️" },
          { id: "mond", label: ml("Mondlandung", "Moon landing", "Holdra szállás", "Aselenizare"), emoji: "🌕" },
        ],
        wrongItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "pharao", label: ml("Pharao", "Pharaoh", "Fáraó", "Faraon"), emoji: "👑" },
        ],
      },
      {
        id: "ge-8-mc-6",
        title: ml("Nationalismus", "Nationalism", "Nacionalizmus", "Naționalism"),
        prompt: ml("Fange Symbole der Nation.", "Catch nation symbols.", "Fogj nemzeti szimbólumokat.", "Prinde simboluri naționale."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#450a0a", glow: "#fca5a5", accent: "#ef4444" },
        correctItems: [
          { id: "fahne", label: ml("Nationalfahne", "Flag", "Nemzeti zászló", "Steag"), emoji: "🚩" },
          { id: "hymne", label: ml("Hymne", "Anthem", "Himnusz", "Imn"), emoji: "🎵" },
          { id: "denkmal", label: ml("Denkmal", "Monument", "Emlékmű", "Monument"), emoji: "🗽" },
          { id: "grenze", label: ml("Grenze", "Border", "Határ", "Graniță"), emoji: "🚧" },
          { id: "armee", label: ml("Nationale Armee", "Army", "Nemzeti hadsereg", "Armată naț."), emoji: "🎖️" },
        ],
        wrongItems: [
          { id: "welt", label: ml("Weltkugel", "Globe", "Földgömb", "Glob"), emoji: "🌍" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "krone", label: ml("Königskrone", "Crown", "Korona", "Coroană"), emoji: "👑" },
        ],
      },
      {
        id: "ge-8-mc-7",
        title: ml("Weimarer Republik", "Weimar Republic", "Weimari Köztársaság", "Rep. Weimar"),
        prompt: ml("Fange Weimar-Dinge.", "Catch Weimar items.", "Fogj weimari dolgokat.", "Prinde obiecte Weimar."),
        goal: 5,
        speed: 6.5,
        theme: { sky: "#1e293b", glow: "#9ca3af", accent: "#6b7280" },
        correctItems: [
          { id: "wahl", label: ml("Demokratische Wahl", "Election", "Demokratikus választás", "Alegeri"), emoji: "🗳️" },
          { id: "geld", label: ml("Inflation (Geld)", "Inflation", "Infláció (Pénz)", "Inflație"), emoji: "💸" },
          { id: "kunst", label: ml("Goldene Zwanziger", "Golden 20s", "Arany húszas évek", "Anii '20"), emoji: "🎷" },
          { id: "verfassung", label: ml("Verfassung", "Constitution", "Alkotmány", "Constituție"), emoji: "📜" },
          { id: "radio", label: ml("Radio", "Radio", "Rádió", "Radio"), emoji: "📻" },
        ],
        wrongItems: [
          { id: "kaiser", label: ml("Kaiser", "Emperor", "Császár", "Împărat"), emoji: "👑" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
        ],
      },
      {
        id: "ge-8-mc-8",
        title: ml("Nationalsozialismus", "National Socialism", "Nemzetiszocializmus", "Național-socialism"),
        prompt: ml("Fange NS-Begriffe.", "Catch NS terms.", "Fogj náci fogalmakat.", "Prinde termeni NS."),
        goal: 4,
        speed: 7,
        theme: { sky: "#1c1917", glow: "#78716c", accent: "#44403c" },
        correctItems: [
          { id: "diktator", label: ml("Diktator", "Dictator", "Diktátor", "Dictator"), emoji: "🗣️" },
          { id: "propaganda", label: ml("Propaganda", "Propaganda", "Propaganda", "Propagandă"), emoji: "📰" },
          { id: "krieg", label: ml("Kriegsvorbereitung", "War prep", "Háborús előkészület", "Preg. război"), emoji: "⚙️" },
          { id: "verfolgung", label: ml("Verfolgung", "Persecution", "Üldözés", "Persecuție"), emoji: "⛓️" },
        ],
        wrongItems: [
          { id: "demokratie", label: ml("Demokratie", "Democracy", "Demokrácia", "Democrație"), emoji: "🗳️" },
          { id: "freiheit", label: ml("Freiheit", "Freedom", "Szabadság", "Libertate"), emoji: "🕊️" },
          { id: "frieden", label: ml("Friedensvertrag", "Peace treaty", "Békeszerződés", "Tratat pace"), emoji: "🤝" },
        ],
      },
      {
        id: "ge-8-mc-9",
        title: ml("Gegenwart", "Modern Times", "Jelenkor", "Epoca contemporană"),
        prompt: ml("Fange Moderne-Dinge.", "Catch modern items.", "Fogj jelenkori dolgokat.", "Prinde obiecte moderne."),
        goal: 5,
        speed: 7,
        theme: { sky: "#1e3a8a", glow: "#3b82f6", accent: "#2563eb" },
        correctItems: [
          { id: "computer", label: ml("Computer", "Computer", "Számítógép", "Computer"), emoji: "💻" },
          { id: "handy", label: ml("Smartphone", "Smartphone", "Okostelefon", "Smartphone"), emoji: "📱" },
          { id: "internet", label: ml("Internet", "Internet", "Internet", "Internet"), emoji: "🌐" },
          { id: "europa", label: ml("Europäische Union", "EU", "Európai Unió", "UE"), emoji: "🇪🇺" },
          { id: "klima", label: ml("Klimawandel-Debatte", "Climate change", "Klímaváltozás", "Schimbări clim."), emoji: "🌡️" },
        ],
        wrongItems: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam engine", "Gőzgép", "Motor aburi"), emoji: "🚂" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "kolumbus", label: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb"), emoji: "⛵" },
        ],
      },
      {
        id: "ge-8-mc-10",
        title: ml("UNO & Menschenrechte", "UN & Human Rights", "ENSZ & Emberi jogok", "ONU & Drepturile Omului"),
        prompt: ml("Fange Friedens-Dinge.", "Catch peace items.", "Fogj békés dolgokat.", "Prinde obiecte de pace."),
        goal: 5,
        speed: 7.5,
        theme: { sky: "#082f49", glow: "#0ea5e9", accent: "#0284c7" },
        correctItems: [
          { id: "frieden", label: ml("Frieden", "Peace", "Béke", "Pace"), emoji: "🕊️" },
          { id: "rechte", label: ml("Menschenrechte", "Human rights", "Emberi jogok", "Drepturi om"), emoji: "⚖️" },
          { id: "uno", label: ml("UNO", "UN", "ENSZ", "ONU"), emoji: "🇺🇳" },
          { id: "hilfe", label: ml("Entwicklungshilfe", "Aid", "Segély", "Ajutor"), emoji: "🤝" },
          { id: "gericht", label: ml("Gerichtshof", "Court", "Bíróság", "Curte"), emoji: "🏛️" },
        ],
        wrongItems: [
          { id: "krieg", label: ml("Krieg", "War", "Háború", "Război"), emoji: "💣" },
          { id: "diktator", label: ml("Diktator", "Dictator", "Diktátor", "Dictator"), emoji: "🗣️" },
          { id: "bombe", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
        ],
      }
    ],
    orbitSort: [
      {
        id: "ge-8-os-1",
        title: ml("Agrar vs Industrie", "Agri vs Industry", "Agrár vs Ipar", "Agri vs Industrie"),
        instruction: ml("Sortiere Gesellschaften.", "Sort societies.", "Rendezd a társadalmakat.", "Sortează societățile."),
        theme: { bg: "#064e3b", orbit: "#10b981", accent: "#059669" },
        buckets: [
          { id: "agrar", label: ml("Agrargesellschaft", "Agrarian", "Agrártársadalom", "Agrară"), color: "#22c55e" },
          { id: "ind", label: ml("Industriegesellschaft", "Industrial", "Ipari társadalom", "Industrială"), color: "#f97316" },
        ],
        items: [
          { id: "bauer", label: ml("Bauern", "Farmers", "Földművesek", "Fermieri"), emoji: "🌾", bucketId: "agrar" },
          { id: "hand", label: ml("Handarbeit", "Manual labor", "Kézi munka", "Muncă manuală"), emoji: "🤲", bucketId: "agrar" },
          { id: "dorf", label: ml("Dorfleben", "Village life", "Falusi élet", "Viață la sat"), emoji: "🛖", bucketId: "agrar" },
          { id: "fabrik", label: ml("Fabriken", "Factories", "Gyárak", "Făbrici"), emoji: "🏭", bucketId: "ind" },
          { id: "dampf", label: ml("Dampfmaschinen", "Steam engines", "Gőzgépek", "Motoare cu aburi"), emoji: "🚂", bucketId: "ind" },
          { id: "stadt", label: ml("Städte wachsen", "Cities grow", "Városok nőnek", "Orașele cresc"), emoji: "🏙️", bucketId: "ind" },
        ],
      },
      {
        id: "ge-8-os-2",
        title: ml("WWI vs WWII", "WWI vs WWII", "I. VH vs II. VH", "WW1 vs WW2"),
        instruction: ml("Ordne Ereignisse/Waffen.", "Sort events/weapons.", "Rendezd az eseményeket/fegyvereket.", "Sortează ev./arme."),
        theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "ww1", label: ml("1. Weltkrieg", "WWI", "I. Világháború", "WW1"), color: "#9ca3af" },
          { id: "ww2", label: ml("2. Weltkrieg", "WWII", "II. Világháború", "WW2"), color: "#ef4444" },
        ],
        items: [
          { id: "schützen", label: ml("Schützengräben", "Trenches", "Lövészárkok", "Tranșee"), emoji: "🕳️", bucketId: "ww1" },
          { id: "sara", label: ml("Attentat Sarajewo", "Assassination", "Szarejevói merénylet", "Asasinat"), emoji: "🔫", bucketId: "ww1" },
          { id: "kaiser", label: ml("Deutscher Kaiser", "Emperor", "Német Császár", "Împărat germ."), emoji: "👑", bucketId: "ww1" },
          { id: "blitz", label: ml("Blitzkrieg", "Blitzkrieg", "Villámháború", "Război fulger"), emoji: "⚡", bucketId: "ww2" },
          { id: "atom", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄", bucketId: "ww2" },
          { id: "holocaust", label: ml("Holocaust", "Holocaust", "Holokauszt", "Holocaust"), emoji: "🕯️", bucketId: "ww2" },
        ],
      },
      {
        id: "ge-8-os-3",
        title: ml("Ost vs West (Kalter Krieg)", "East vs West (Cold W)", "Kelet vs Nyugat", "Est vs Vest"),
        instruction: ml("Sortiere Blöcke.", "Sort blocs.", "Rendezd a blokkokat.", "Sortează blocurile."),
        theme: { bg: "#1e1b4b", orbit: "#3b82f6", accent: "#ef4444" },
        buckets: [
          { id: "west", label: ml("Westen (USA)", "West (USA)", "Nyugat (USA)", "Vest (SUA)"), color: "#3b82f6" },
          { id: "ost", label: ml("Osten (Sowjetunion)", "East (USSR)", "Kelet (Szovjetunió)", "Est (URSS)"), color: "#ef4444" },
        ],
        items: [
          { id: "nato", label: ml("NATO", "NATO", "NATO", "NATO"), emoji: "🛡️", bucketId: "west" },
          { id: "kapital", label: ml("Kapitalismus", "Capitalism", "Kapitalizmus", "Capitalism"), emoji: "💰", bucketId: "west" },
          { id: "apollo", label: ml("Apollo-Programm", "Apollo", "Apollo-program", "Apollo"), emoji: "🌕", bucketId: "west" },
          { id: "warschau", label: ml("Warschauer Pakt", "Warsaw Pact", "Varsói Szerződés", "Pactul de la Varșovia"), emoji: "🤝", bucketId: "ost" },
          { id: "komm", label: ml("Kommunismus", "Communism", "Kommunizmus", "Comunism"), emoji: "☭", bucketId: "ost" },
          { id: "sputnik", label: ml("Sputnik", "Sputnik", "Szputnyik", "Sputnik"), emoji: "🛰️", bucketId: "ost" },
        ],
      },
      {
        id: "ge-8-os-4",
        title: ml("Demokratie vs Diktatur", "Democracy vs Dictat.", "Demokrácia vs Diktatúra", "Democrație vs Dictat."),
        instruction: ml("Sortiere Merkmale.", "Sort features.", "Rendezd a jellemzőket.", "Sortează caract."),
        theme: { bg: "#1e3a8a", orbit: "#60a5fa", accent: "#3b82f6" },
        buckets: [
          { id: "demo", label: ml("Demokratie", "Democracy", "Demokrácia", "Democrație"), color: "#3b82f6" },
          { id: "dikt", label: ml("Diktatur", "Dictatorship", "Diktatúra", "Dictatură"), color: "#ef4444" },
        ],
        items: [
          { id: "wahl", label: ml("Freie Wahlen", "Free elections", "Szabad választás", "Alegeri libere"), emoji: "🗳️", bucketId: "demo" },
          { id: "recht", label: ml("Menschenrechte", "Human rights", "Emberi jogok", "Drepturi om"), emoji: "⚖️", bucketId: "demo" },
          { id: "meinung", label: ml("Meinungsfreiheit", "Free speech", "Szólásszabadság", "Liberă exprimare"), emoji: "🗣️", bucketId: "demo" },
          { id: "partei", label: ml("Nur eine Partei", "One party", "Egypártrendszer", "Un partid"), emoji: "☝️", bucketId: "dikt" },
          { id: "zensur", label: ml("Zensur", "Censorship", "Cenzúra", "Cenzură"), emoji: "🤫", bucketId: "dikt" },
          { id: "polizei", label: ml("Geheimpolizei", "Secret police", "Titkosrendőrség", "Poliție secretă"), emoji: "🕵️", bucketId: "dikt" },
        ],
      },
      {
        id: "ge-8-os-5",
        title: ml("BRD vs DDR", "FRG vs GDR", "NSZK vs NDK", "RFG vs RDG"),
        instruction: ml("Geteiltes Deutschland.", "Divided Germany.", "Megosztott Németo.", "Germania divizată."),
        theme: { bg: "#022c22", orbit: "#facc15", accent: "#ef4444" },
        buckets: [
          { id: "brd", label: ml("BRD (Westen)", "FRG (West)", "NSZK (Nyugat)", "RFG (Vest)"), color: "#3b82f6" },
          { id: "ddr", label: ml("DDR (Osten)", "GDR (East)", "NDK (Kelet)", "RDG (Est)"), color: "#ef4444" },
        ],
        items: [
          { id: "bonn", label: ml("Hauptstadt Bonn", "Capital Bonn", "Főváros Bonn", "Bonn"), emoji: "🏙️", bucketId: "brd" },
          { id: "markt", label: ml("Marktwirtschaft", "Market eco.", "Piacgazdaság", "Econ. piață"), emoji: "📈", bucketId: "brd" },
          { id: "usa", label: ml("Alliierte: USA, GB, FR", "Allies: USA...", "Szöv: USA...", "Aliați: SUA..."), emoji: "🤝", bucketId: "brd" },
          { id: "ostb", label: ml("Hauptstadt Ost-Berlin", "East Berlin", "Kelet-Berlin", "Berlinul de Est"), emoji: "🏢", bucketId: "ddr" },
          { id: "plan", label: ml("Planwirtschaft", "Planned eco.", "Tervgazdaság", "Econ. planif."), emoji: "📋", bucketId: "ddr" },
          { id: "sow", label: ml("Alliierte: Sowjetunion", "Ally: USSR", "Szöv: Szovjetunió", "Aliat: URSS"), emoji: "☭", bucketId: "ddr" },
        ],
      },
      {
        id: "ge-8-os-6",
        title: ml("Demokratie vs Diktatur 2", "Democracy vs Dictat. 2", "Demokrácia vs Diktatúra 2", "Democrație vs Dictat. 2"),
        instruction: ml("Sortiere Merkmale.", "Sort features.", "Rendezd a jellemzőket.", "Sortează caract."),
        theme: { bg: "#1e3a8a", orbit: "#60a5fa", accent: "#3b82f6" },
        buckets: [
          { id: "demo", label: ml("Demokratie", "Democracy", "Demokrácia", "Democrație"), color: "#3b82f6" },
          { id: "dikt", label: ml("Diktatur", "Dictatorship", "Diktatúra", "Dictatură"), color: "#ef4444" },
        ],
        items: [
          { id: "presse", label: ml("Pressefreiheit", "Free press", "Sajtószabadság", "Presă liberă"), emoji: "📰", bucketId: "demo" },
          { id: "gewalt", label: ml("Gewaltenteilung", "Sep. of powers", "Hatalmi ágak megoszt.", "Separarea puterilor"), emoji: "⚖️", bucketId: "demo" },
          { id: "opp", label: ml("Opposition", "Opposition", "Ellenzék", "Opoziție"), emoji: "👥", bucketId: "demo" },
          { id: "prop", label: ml("Staatliche Propaganda", "Propaganda", "Állami propaganda", "Propagandă statală"), emoji: "📢", bucketId: "dikt" },
          { id: "angst", label: ml("Angst & Terror", "Fear & Terror", "Félelem & Terror", "Frică & Teroare"), emoji: "😱", bucketId: "dikt" },
          { id: "fuehrer", label: ml("Führerkult", "Cult of leader", "Vezérkultusz", "Cultul liderului"), emoji: "👑", bucketId: "dikt" },
        ],
      },
      {
        id: "ge-8-os-7",
        title: ml("Erste vs Zweite Ind. Rev.", "1st vs 2nd Ind. Rev.", "1. vs 2. Ipari forr.", "Prima vs A 2-a Rev. Ind."),
        instruction: ml("Sortiere Erfindungen.", "Sort inventions.", "Rendezd a találmányokat.", "Sortează invențiile."),
        theme: { bg: "#064e3b", orbit: "#10b981", accent: "#059669" },
        buckets: [
          { id: "erste", label: ml("1. Rev (Dampf/Kohle)", "1st Rev", "1. Forr (Gőz)", "Prima Rev"), color: "#22c55e" },
          { id: "zweite", label: ml("2. Rev (Strom/Öl)", "2nd Rev", "2. Forr (Áram)", "A 2-a Rev"), color: "#f97316" },
        ],
        items: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam engine", "Gőzgép", "Motor aburi"), emoji: "🚂", bucketId: "erste" },
          { id: "kohle", label: ml("Kohlebergbau", "Coal mining", "Szénbányászat", "Minerit cărbune"), emoji: "🪨", bucketId: "erste" },
          { id: "web", label: ml("Mech. Webstuhl", "Mech. loom", "Mech. szövőszék", "Război mecanic"), emoji: "🧵", bucketId: "erste" },
          { id: "strom", label: ml("Elektrizität", "Electricity", "Villamosság", "Electricitate"), emoji: "⚡", bucketId: "zweite" },
          { id: "auto", label: ml("Automobil", "Automobile", "Autó", "Automobil"), emoji: "🚗", bucketId: "zweite" },
          { id: "chemie", label: ml("Chemieindustrie", "Chemical ind.", "Vegyipar", "Ind. chimică"), emoji: "🧪", bucketId: "zweite" },
        ],
      },
      {
        id: "ge-8-os-8",
        title: ml("Weimarer Rep. vs NS-Zeit", "Weimar vs NS", "Weimar vs Náci o.", "Weimar vs NS"),
        instruction: ml("Ordne ein.", "Assign.", "Rendezd.", "Asignează."),
        theme: { bg: "#450a0a", orbit: "#ef4444", accent: "#dc2626" },
        buckets: [
          { id: "wei", label: ml("Weimarer Republik", "Weimar Republic", "Weimari Közt.", "Rep. Weimar"), color: "#3b82f6" },
          { id: "ns", label: ml("NS-Zeit", "NS Period", "Náci időszak", "Perioada NS"), color: "#1c1917" },
        ],
        items: [
          { id: "demo", label: ml("Erste Demokratie", "First democracy", "Első demokrácia", "Prima democrație"), emoji: "🗳️", bucketId: "wei" },
          { id: "kunst", label: ml("Freie Kunst", "Free art", "Szabad művészet", "Artă liberă"), emoji: "🎨", bucketId: "wei" },
          { id: "frauen", label: ml("Frauenwahlrecht", "Women vote", "Női választójog", "Vot femei"), emoji: "👩", bucketId: "wei" },
          { id: "dikt", label: ml("Diktatur", "Dictatorship", "Diktatúra", "Dictatură"), emoji: "🗣️", bucketId: "ns" },
          { id: "holo", label: ml("Holocaust", "Holocaust", "Holokauszt", "Holocaust"), emoji: "🕯️", bucketId: "ns" },
          { id: "krieg", label: ml("2. Weltkrieg", "WWII", "2. VH", "WW2"), emoji: "💣", bucketId: "ns" },
        ],
      },
      {
        id: "ge-8-os-9",
        title: ml("Kolonien vs Mutterland", "Colonies vs Motherland", "Gyarmat vs Anyaorsz.", "Colonie vs Metropolă"),
        instruction: ml("Imperialismus.", "Imperialism.", "Imperializmus.", "Imperialism."),
        theme: { bg: "#1e1b4b", orbit: "#3b82f6", accent: "#ef4444" },
        buckets: [
          { id: "kol", label: ml("Kolonien (Afrika/Asien)", "Colonies", "Gyarmatok", "Colonii"), color: "#eab308" },
          { id: "mut", label: ml("Mutterland (Europa)", "Motherland", "Anyaország", "Metropolă"), color: "#3b82f6" },
        ],
        items: [
          { id: "roh", label: ml("Liefern Rohstoffe", "Supply raw mats", "Nyersanyagot ad", "Livrează materii"), emoji: "🪵", bucketId: "kol" },
          { id: "aus", label: ml("Werden ausgebeutet", "Are exploited", "Kizsákmányolják", "Sunt exploatate"), emoji: "⛏️", bucketId: "kol" },
          { id: "unter", label: ml("Unterdrückung", "Oppression", "Elnyomás", "Opresiune"), emoji: "⛓️", bucketId: "kol" },
          { id: "fab", label: ml("Fabriken", "Factories", "Gyárak", "Făbrici"), emoji: "🏭", bucketId: "mut" },
          { id: "gew", label: ml("Gewinn", "Profit", "Nyereség", "Profit"), emoji: "💰", bucketId: "mut" },
          { id: "macht", label: ml("Machtausdehnung", "Power exp.", "Hatalom kiterj.", "Exp. puterii"), emoji: "🌍", bucketId: "mut" },
        ],
      },
      {
        id: "ge-8-os-10",
        title: ml("Moderne Konflikte vs Frieden", "Conflict vs Peace", "Konfliktus vs Béke", "Conflict vs Pace"),
        instruction: ml("Ordne Ereignisse.", "Sort events.", "Rendezd az eseményeket.", "Sortează evenimentele."),
        theme: { bg: "#082f49", orbit: "#0ea5e9", accent: "#0284c7" },
        buckets: [
          { id: "kon", label: ml("Konflikt/Krise", "Conflict", "Konfliktus", "Conflict"), color: "#ef4444" },
          { id: "fri", label: ml("Frieden/Zsm-arbeit", "Peace", "Béke/Együttműk.", "Pace/Colab."), color: "#10b981" },
        ],
        items: [
          { id: "kalt", label: ml("Kalter Krieg", "Cold War", "Hidegháború", "Război Rece"), emoji: "❄️", bucketId: "kon" },
          { id: "klima", label: ml("Klimakrise", "Climate Crisis", "Klíma válság", "Criză clim."), emoji: "🔥", bucketId: "kon" },
          { id: "terror", label: ml("Terrorismus", "Terrorism", "Terrorizmus", "Terorism"), emoji: "💣", bucketId: "kon" },
          { id: "uno", label: ml("UNO Gründung", "UN Founded", "ENSZ alapítás", "Fondare ONU"), emoji: "🇺🇳", bucketId: "fri" },
          { id: "eu", label: ml("EU", "EU", "EU", "UE"), emoji: "🇪🇺", bucketId: "fri" },
          { id: "fall", label: ml("Mauerfall", "Wall Fall", "Fal leomlása", "Cădere Zid"), emoji: "🧱", bucketId: "fri" },
        ],
      }
    ],
    signalRunner: [
      {
        id: "ge-8-sr-1",
        title: ml("Industrie", "Industry", "Ipar", "Industrie"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-1-s1",
            title: ml("Dampfmaschine", "Steam Engine", "Gőzgép", "Motor aburi"),
            prompt: ml("Wer verbesserte die Dampfmaschine?", "Who improved it?", "Ki tökéletesítette a gőzgépet?", "Cine a îmbunătățit motorul?"),
            sceneType: "community",
            visual: { icon: "🚂", bg: "#1c1917", accent: "#d97706" },
            choices: [
              { id: "a", label: ml("James Watt", "James Watt", "James Watt", "James Watt") },
              { id: "b", label: ml("Albert Einstein", "Albert Einstein", "Albert Einstein", "Albert Einstein") },
              { id: "c", label: ml("Kolumbus", "Columbus", "Kolumbusz", "Columb") },
              { id: "d", label: ml("Karl Marx", "Karl Marx", "Karl Marx", "Karl Marx") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-2",
        title: ml("WWI", "WWI", "I. Világháború", "WW1"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-2-s1",
            title: ml("Auslöser", "Trigger", "Kiváltó ok", "Declanșator"),
            prompt: ml("Was löste den Ersten Weltkrieg aus?", "What triggered WWI?", "Mi váltotta ki az I. VH-t?", "Ce a declanșat WW1?"),
            sceneType: "nature",
            visual: { icon: "🔫", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Börsencrash", "Stock crash", "Tőzsdekrach", "Crah bursier") },
              { id: "b", label: ml("Attentat von Sarajewo", "Assassination", "Szarejevói merénylet", "Asasinat Sarajevo") },
              { id: "c", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică") },
              { id: "d", label: ml("Mauerfall", "Wall fall", "Fal leomlása", "Căderea zidului") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-3",
        title: ml("WWII", "WWII", "II. Világháború", "WW2"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-3-s1",
            title: ml("Ende", "End", "Vége", "Sfârșit"),
            prompt: ml("Was beendete den Krieg in Japan?", "What ended war in Japan?", "Mi vetett véget a háborúnak Japánban?", "Ce a încheiat războiul în Japonia?"),
            sceneType: "safety",
            visual: { icon: "🍄", bg: "#1e1b4b", accent: "#f59e0b" },
            choices: [
              { id: "a", label: ml("Ein Friedensvertrag", "Peace treaty", "Békeszerződés", "Tratat pace") },
              { id: "b", label: ml("Zwei Atombomben", "Two atom bombs", "Két atombomba", "Două bombe atom.") },
              { id: "c", label: ml("Kaiser trat zurück", "Emp. resigned", "Császár lemondott", "Împ. a demisionat") },
              { id: "d", label: ml("Wintereinbruch", "Winter", "Tél beállta", "Venirea iernii") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-4",
        title: ml("Kalter Krieg", "Cold War", "Hidegháború", "Războiul Rece"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-4-s1",
            title: ml("Berliner Mauer", "Berlin Wall", "Berlini fal", "Zidul Berlinului"),
            prompt: ml("Wann fiel die Berliner Mauer?", "When did it fall?", "Mikor omlott le a berlini fal?", "Când a căzut Zidul Berlinului?"),
            sceneType: "community",
            visual: { icon: "🧱", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("1945", "1945", "1945", "1945") },
              { id: "b", label: ml("1961", "1961", "1961", "1961") },
              { id: "c", label: ml("1989", "1989", "1989", "1989") },
              { id: "d", label: ml("2000", "2000", "2000", "2000") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-5",
        title: ml("Vereinte Nationen", "UN", "ENSZ", "ONU"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-5-s1",
            title: ml("Gründung", "Foundation", "Alapítás", "Fondare"),
            prompt: ml("Warum wurde die UNO gegründet?", "Why was UN founded?", "Miért alapították az ENSZ-t?", "De ce a fost fondat ONU?"),
            sceneType: "community",
            visual: { icon: "🕊️", bg: "#082f49", accent: "#0ea5e9" },
            choices: [
              { id: "a", label: ml("Für Handel", "For trade", "Kereskedelemért", "Pentru comerț") },
              { id: "b", label: ml("Weltfrieden sichern", "Secure peace", "Világbéke megőrzése", "Menținerea păcii") },
              { id: "c", label: ml("Weltraum erobern", "Conquer space", "Űrkutatásért", "Cucerirea spațiului") },
              { id: "d", label: ml("Gegen Europa", "Against Europe", "Európa ellen", "Contra Europei") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-6",
        title: ml("Industrielle Rev. 2", "Ind. Rev. 2", "Ipari Forr. 2", "Rev. Ind. 2"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-6-s1",
            title: ml("Kinderarbeit", "Child Labor", "Gyerekmunka", "Munca copiilor"),
            prompt: ml("Ging es Arbeitern am Anfang gut?", "Were workers well off at first?", "Jól ment a munkásoknak az elején?", "Le-a mers bine muncitorilor la început?"),
            sceneType: "community",
            visual: { icon: "🏭", bg: "#1f2937", accent: "#6b7280" },
            choices: [
              { id: "a", label: ml("Ja, viel Geld", "Yes, much money", "Igen, sok pénz", "Da, mulți bani") },
              { id: "b", label: ml("Nein, viel Armut", "No, much poverty", "Nem, nagy szegénység", "Nu, multă sărăcie") },
              { id: "c", label: ml("Alle waren Könige", "All were kings", "Mindenki király volt", "Toți erau regi") },
              { id: "d", label: ml("Nur Freizeit", "Only free time", "Csak szabadidő", "Doar timp liber") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-7",
        title: ml("Imperialismus", "Imperialism", "Imperializmus", "Imperialism"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-7-s1",
            title: ml("Afrika", "Africa", "Afrika", "Africa"),
            prompt: ml("Was passierte mit Afrika?", "What happened to Africa?", "Mi történt Afrikával?", "Ce s-a întâmplat cu Africa?"),
            sceneType: "nature",
            visual: { icon: "🌍", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: ml("Wurde von Europa aufgeteilt", "Divided by Europe", "Európa felosztotta", "Împărțită de Europa") },
              { id: "b", label: ml("Wurde reichste Region", "Became richest", "Leggazdagabb lett", "A devenit cea mai bogată") },
              { id: "c", label: ml("Eroberte Europa", "Conquered Europe", "Meghódította Európát", "A cucerit Europa") },
              { id: "d", label: ml("Nichts", "Nothing", "Semmi", "Nimic") },
            ],
            correctChoiceId: "a",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-8",
        title: ml("Weimarer Rep.", "Weimar Rep.", "Weimari Közt.", "Rep. Weimar"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-8-s1",
            title: ml("Krise 1923", "Crisis 1923", "1923-as válság", "Criza din 1923"),
            prompt: ml("Was passierte mit dem Geld?", "What happened to money?", "Mi történt a pénzzel?", "Ce s-a întâmplat cu banii?"),
            sceneType: "safety",
            visual: { icon: "💸", bg: "#450a0a", accent: "#ef4444" },
            choices: [
              { id: "a", label: ml("Es wurde Gold", "Turned to gold", "Arannyá változott", "A devenit aur") },
              { id: "b", label: ml("Es verlor den Wert (Inflation)", "Lost value (Inflation)", "Elvesztette értékét", "A pierdut valoarea") },
              { id: "c", label: ml("Es verschwand", "Disappeared", "Eltűnt", "A dispărut") },
              { id: "d", label: ml("Es wurde teurer", "Became more expensive", "Drágább lett", "A devenit mai scump") },
            ],
            correctChoiceId: "b",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-9",
        title: ml("Geteiltes Deutschland", "Divided Germany", "Megosztott Németo.", "Germania Divizată"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-9-s1",
            title: ml("DDR", "GDR", "NDK", "RDG"),
            prompt: ml("Wer unterstützte die DDR?", "Who supported GDR?", "Ki támogatta az NDK-t?", "Cine a susținut RDG?"),
            sceneType: "community",
            visual: { icon: "☭", bg: "#4c1d95", accent: "#c084fc" },
            choices: [
              { id: "a", label: ml("USA", "USA", "USA", "SUA") },
              { id: "b", label: ml("Frankreich", "France", "Franciaország", "Franța") },
              { id: "c", label: ml("Sowjetunion", "USSR", "Szovjetunió", "URSS") },
              { id: "d", label: ml("China", "China", "Kína", "China") },
            ],
            correctChoiceId: "c",
            successFeedback: ml("Richtig!", "Correct!", "Helyes!", "Corect!"),
            failFeedback: ml("Falsch.", "Wrong.", "Hibás.", "Greșit.")
          }
        ]
      },
      {
        id: "ge-8-sr-10",
        title: ml("EU", "EU", "EU", "UE"),
        instruction: ml("Wähle die richtige Antwort.", "Choose the right answer.", "Válaszd a helyes választ.", "Alege răspunsul corect."),
        scenes: [
          {
            id: "ge-8-sr-10-s1",
            title: ml("Europäische Union", "EU", "Európai Unió", "Uniunea Europeană"),
            prompt: ml("Warum wurde die EU gegründet?", "Why was EU founded?", "Miért alapították az EU-t?", "De ce a fost fondată UE?"),
            sceneType: "nature",
            visual: { icon: "🇪🇺", bg: "#1e3a8a", accent: "#3b82f6" },
            choices: [
              { id: "a", label: ml("Für neue Kriege", "For new wars", "Új háborúkért", "Pentru noi războaie") },
              { id: "b", label: ml("Für Frieden & Handel", "For peace & trade", "Békéért és kereskedelemért", "Pentru pace & comerț") },
              { id: "c", label: ml("Gegen Amerika", "Against America", "Amerika ellen", "Contra Americii") },
              { id: "d", label: ml("Für Weltraumreisen", "For space travel", "Űrutazásért", "Pentru călătorii spațiale") },
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
        id: "ge-8-cb-1",
        title: ml("Industrie", "Industry", "Ipar", "Industrie"),
        instruction: ml("Ordne Erfindungen.", "Order inventions.", "Rendezd a találmányokat.", "Ordonează invențiile."),
        hint: ml("Dampfmaschine zuerst.", "Steam engine first.", "Gőzgép az első.", "Motor cu aburi primul."),
        theme: { bg: "#1f2937", accent: "#f59e0b", card: "#374151" },
        parts: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam engine", "Gőzgép", "Motor aburi"), emoji: "🚂" },
          { id: "eisenbahn", label: ml("Eisenbahn", "Railway", "Vasút", "Cale ferată"), emoji: "🛤️" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "flug", label: ml("Flugzeug", "Airplane", "Repülőgép", "Avion"), emoji: "✈️" },
        ],
        slots: [
          { id: "s1", label: "1. 1769" },
          { id: "s2", label: "2. 1825" },
          { id: "s3", label: "3. 1886" },
          { id: "s4", label: "4. 1903" },
        ],
        solution: ["dampf", "eisenbahn", "auto", "flug"],
      },
      {
        id: "ge-8-cb-2",
        title: ml("Weltkriege", "World Wars", "Világháborúk", "Războaie Mond."),
        instruction: ml("Ordne Ereignisse.", "Order events.", "Rendezd az eseményeket.", "Ordonează evenimentele."),
        hint: ml("Sarajewo zuerst.", "Sarajevo first.", "Szarejevó először.", "Sarajevo întâi."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "sara", label: ml("Attentat Saraj.", "Assassination", "Szarejevói merénylet", "Asasinat Sar."), emoji: "🔫" },
          { id: "ende1", label: ml("Ende 1. WK", "End of WWI", "I. VH vége", "Sfârșit WW1"), emoji: "🏳️" },
          { id: "polen", label: ml("Angriff Polen", "Attack Poland", "Lengyelo. megtám.", "Atac Polonia"), emoji: "💣" },
          { id: "atom", label: ml("Atombomben", "Atom bombs", "Atombombák", "Bombe atomice"), emoji: "🍄" },
        ],
        slots: [
          { id: "s1", label: "1. 1914" },
          { id: "s2", label: "2. 1918" },
          { id: "s3", label: "3. 1939" },
          { id: "s4", label: "4. 1945" },
        ],
        solution: ["sara", "ende1", "polen", "atom"],
      },
      {
        id: "ge-8-cb-3",
        title: ml("Kalter Krieg", "Cold War", "Hidegháború", "Război Rece"),
        instruction: ml("Ordne Ereignisse.", "Order events.", "Rendezd az eseményeket.", "Ordonează evenimentele."),
        hint: ml("Mauerbau zuerst.", "Wall built first.", "Fal építése először.", "Zidul construit prim."),
        theme: { bg: "#1e3a8a", accent: "#3b82f6", card: "#1e40af" },
        parts: [
          { id: "bau", label: ml("Mauerbau", "Wall built", "Falépítés", "Constr. zid"), emoji: "🧱" },
          { id: "mond", label: ml("Mondlandung", "Moon landing", "Holdra szállás", "Aselenizare"), emoji: "🌕" },
          { id: "fall", label: ml("Mauerfall", "Wall fall", "Fal leomlása", "Cădere zid"), emoji: "🔨" },
          { id: "ende", label: ml("Ende Sowjetunion", "USSR ends", "Szovjetunió vége", "Sfârșit URSS"), emoji: "📉" },
        ],
        slots: [
          { id: "s1", label: "1. 1961" },
          { id: "s2", label: "2. 1969" },
          { id: "s3", label: "3. 1989" },
          { id: "s4", label: "4. 1991" },
        ],
        solution: ["bau", "mond", "fall", "ende"],
      },
      {
        id: "ge-8-cb-4",
        title: ml("Weltraumwettlauf", "Space Race", "Űrverseny", "Cursa spațială"),
        instruction: ml("Chronologisch.", "Chronological.", "Időrendben.", "Cronologic."),
        hint: ml("Sputnik zuerst.", "Sputnik first.", "Szputnyik elöl.", "Sputnik întâi."),
        theme: { bg: "#022c22", accent: "#10b981", card: "#064e3b" },
        parts: [
          { id: "sputnik", label: ml("Sputnik (Satellit)", "Sputnik (Sat)", "Szputnyik (műhold)", "Sputnik (Sat)"), emoji: "🛰️" },
          { id: "hund", label: ml("Laika (Hund)", "Laika (Dog)", "Lajka kutyus", "Laika (câine)"), emoji: "🐕" },
          { id: "mensch", label: ml("Gagarin (Mensch)", "Gagarin (Human)", "Gagarin (ember)", "Gagarin (om)"), emoji: "🧑‍🚀" },
          { id: "mond", label: ml("Mondlandung", "Moon landing", "Holdra szállás", "Aselenizare"), emoji: "🌕" },
        ],
        slots: [
          { id: "s1", label: "1. 1957" },
          { id: "s2", label: "2. 1957" },
          { id: "s3", label: "3. 1961" },
          { id: "s4", label: "4. 1969" },
        ],
        solution: ["sputnik", "hund", "mensch", "mond"],
      },
      {
        id: "ge-8-cb-5",
        title: ml("Deutsches Reich", "German Empire", "Német Birodalom", "Imperiul German"),
        instruction: ml("Stationen Deutschlands.", "Germany's stages.", "Németország állomásai.", "Etapele Germaniei."),
        hint: ml("Kaiserreich zuerst.", "Empire first.", "Császárság először.", "Imperiu întâi."),
        theme: { bg: "#4c1d95", accent: "#c084fc", card: "#3b0764" },
        parts: [
          { id: "kaiser", label: ml("Kaiserreich", "Empire", "Császárság", "Imperiu"), emoji: "👑" },
          { id: "weimar", label: ml("Weimarer Rep.", "Weimar Rep.", "Weimari Közt.", "Rep. Weimar"), emoji: "📜" },
          { id: "ns", label: ml("NS-Diktatur", "Nazi Dict.", "Náci diktatúra", "Dictatură NS"), emoji: "⚡" },
          { id: "teilung", label: ml("Teilung (BRD/DDR)", "Division", "Megosztottság", "Divizare"), emoji: "🧱" },
          { id: "wieder", label: ml("Wiedervereinigung", "Reunification", "Újraegyesítés", "Reunificare"), emoji: "🤝" },
        ],
        slots: [
          { id: "s1", label: "1. Ab 1871" },
          { id: "s2", label: "2. Ab 1918" },
          { id: "s3", label: "3. Ab 1933" },
          { id: "s4", label: "4. Ab 1949" },
          { id: "s5", label: "5. Ab 1990" },
        ],
        solution: ["kaiser", "weimar", "ns", "teilung", "wieder"],
      },
      {
        id: "ge-8-cb-6",
        title: ml("Dampfmaschine", "Steam Engine", "Gőzgép", "Motor cu aburi"),
        instruction: ml("Wie funktioniert sie?", "How does it work?", "Hogyan működik?", "Cum funcționează?"),
        hint: ml("Feuer zuerst.", "Fire first.", "Tűz először.", "Focul primul."),
        theme: { bg: "#1c1917", accent: "#d97706", card: "#292524" },
        parts: [
          { id: "kohle", label: ml("Feuer/Kohle", "Fire/Coal", "Tűz/Szén", "Foc/Cărbune"), emoji: "🔥" },
          { id: "wasser", label: ml("Wasser erhitzen", "Heat water", "Víz hevítése", "Încălzire apă"), emoji: "💧" },
          { id: "dampf", label: ml("Dampf entsteht", "Steam created", "Gőz keletkezik", "Abur creat"), emoji: "💨" },
          { id: "kolben", label: ml("Bewegt Kolben", "Moves piston", "Dugattyút mozgat", "Mișcă pistonul"), emoji: "⚙️" },
        ],
        slots: [
          { id: "s1", label: "1." },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["kohle", "wasser", "dampf", "kolben"],
      },
      {
        id: "ge-8-cb-7",
        title: ml("Weg zum 1. WK", "Path to WWI", "Út az I. VH-hoz", "Drumul spre WW1"),
        instruction: ml("Chronologisch.", "Chronological.", "Időrendben.", "Cronologic."),
        hint: ml("Imperialismus zuerst.", "Imperialism first.", "Imperializmus elöl.", "Imperialism întâi."),
        theme: { bg: "#450a0a", accent: "#ef4444", card: "#7f1d1d" },
        parts: [
          { id: "imper", label: ml("Imperialismus", "Imperialism", "Imperializmus", "Imperialism"), emoji: "🌍" },
          { id: "buend", label: ml("Bündnisse", "Alliances", "Szövetségek", "Alianțe"), emoji: "🤝" },
          { id: "sara", label: ml("Attentat Saraj.", "Assassination", "Merénylet", "Asasinat"), emoji: "🔫" },
          { id: "krieg", label: ml("Kriegserklärung", "Dec. of War", "Hadüzenet", "Declarație război"), emoji: "💣" },
        ],
        slots: [
          { id: "s1", label: "1. Vor 1914" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3. 1914" },
          { id: "s4", label: "4. 1914" },
        ],
        solution: ["imper", "buend", "sara", "krieg"],
      },
      {
        id: "ge-8-cb-8",
        title: ml("Weg in die Diktatur", "Path to Dictatorship", "Út a diktatúrába", "Drumul spre Dictatură"),
        instruction: ml("NS-Machtübernahme.", "NS takeover.", "Náci hatalomátvétel.", "Preluarea puterii NS."),
        hint: ml("Wahlen zuerst.", "Elections first.", "Választások először.", "Alegeri prima."),
        theme: { bg: "#1f2937", accent: "#9ca3af", card: "#374151" },
        parts: [
          { id: "wahl", label: ml("Wahlen (NSDAP stark)", "Elections", "Választások", "Alegeri"), emoji: "🗳️" },
          { id: "kanzler", label: ml("Hitler wird Kanzler", "Chancellor", "Kancellár lesz", "Devine cancelar"), emoji: "📜" },
          { id: "brand", label: ml("Reichstagsbrand", "Reichstag fire", "Reichstag tűz", "Incendiu Reichstag"), emoji: "🔥" },
          { id: "gesetz", label: ml("Ermächtigungsgesetz", "Enabling Act", "Felhatalmazási tv.", "Legea de Împuternicire"), emoji: "⚖️" },
        ],
        slots: [
          { id: "s1", label: "1. 1932/33" },
          { id: "s2", label: "2. Jan 1933" },
          { id: "s3", label: "3. Feb 1933" },
          { id: "s4", label: "4. März 1933" },
        ],
        solution: ["wahl", "kanzler", "brand", "gesetz"],
      },
      {
        id: "ge-8-cb-9",
        title: ml("Teilung Europas", "Division of Europe", "Európa megosztása", "Divizarea Europei"),
        instruction: ml("Nach 1945.", "After 1945.", "1945 után.", "După 1945."),
        hint: ml("Kriegsende zuerst.", "War ends first.", "Háború vége elöl.", "Sfârșit război întâi."),
        theme: { bg: "#1e3a8a", accent: "#60a5fa", card: "#1e40af" },
        parts: [
          { id: "ende", label: ml("Ende 2. WK", "End WWII", "2. VH vége", "Sfârșit WW2"), emoji: "🏳️" },
          { id: "zonen", label: ml("Besatzungszonen", "Occ. zones", "Megszállási zónák", "Zone de oc."), emoji: "🗺️" },
          { id: "kalt", label: ml("Kalter Krieg", "Cold War", "Hidegháború", "Război Rece"), emoji: "❄️" },
          { id: "mauer", label: ml("Eiserner Vorhang", "Iron Curtain", "Vasfüggöny", "Cortina de Fier"), emoji: "🧱" },
        ],
        slots: [
          { id: "s1", label: "1. 1945" },
          { id: "s2", label: "2." },
          { id: "s3", label: "3." },
          { id: "s4", label: "4." },
        ],
        solution: ["ende", "zonen", "kalt", "mauer"],
      },
      {
        id: "ge-8-cb-10",
        title: ml("Europäische Einigung", "European Integration", "Európai egyesülés", "Integ. Europeană"),
        instruction: ml("Weg zur EU.", "Path to EU.", "Út az EU-hoz.", "Drumul spre UE."),
        hint: ml("Kohle/Stahl zuerst.", "Coal/Steel first.", "Szén/Acél elöl.", "Cărbune/Oțel întâi."),
        theme: { bg: "#082f49", accent: "#0ea5e9", card: "#0369a1" },
        parts: [
          { id: "montan", label: ml("EGKS (Kohle/Stahl)", "ECSC", "ESZAK", "CECO"), emoji: "🪨" },
          { id: "ewg", label: ml("EWG (Wirtschaft)", "EEC", "EGK (Gazdaság)", "CEE"), emoji: "📈" },
          { id: "eu", label: ml("EU-Gründung", "EU Founded", "EU alapítás", "Fondare UE"), emoji: "🇪🇺" },
          { id: "euro", label: ml("Euro als Geld", "Euro currency", "Euró valuta", "Moneda Euro"), emoji: "💶" },
        ],
        slots: [
          { id: "s1", label: "1. 1951" },
          { id: "s2", label: "2. 1957" },
          { id: "s3", label: "3. 1992" },
          { id: "s4", label: "4. 2002" },
        ],
        solution: ["montan", "ewg", "eu", "euro"],
      }
    ],
    memoryRadar: [
      {
        id: "ge-8-mr-1",
        title: ml("Industrie", "Industry", "Ipar", "Industrie"),
        instruction: ml("Merke Industrie-Dinge.", "Remember industry items.", "Jegyezd meg az ipart.", "Reține industria."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1f2937", accent: "#f59e0b", radar: "#374151" },
        targetItems: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam engine", "Gőzgép", "Motor aburi"), emoji: "🚂" },
          { id: "fabrik", label: ml("Fabrik", "Factory", "Gyár", "Fabrică"), emoji: "🏭" },
          { id: "kohle", label: ml("Kohle", "Coal", "Szén", "Cărbune"), emoji: "🪨" },
          { id: "bahn", label: ml("Eisenbahn", "Railway", "Vasút", "Cale ferată"), emoji: "🛤️" },
        ],
        decoyItems: [
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "pyramide", label: ml("Pyramide", "Pyramid", "Piramis", "Piramidă"), emoji: "🔺" },
          { id: "speer", label: ml("Speer", "Spear", "Lándzsa", "Suliță"), emoji: "🦯" },
        ],
      },
      {
        id: "ge-8-mr-2",
        title: ml("WWI", "WWI", "I. Világháború", "WW1"),
        instruction: ml("Merke WWI-Dinge.", "Remember WWI.", "Jegyezd meg az I. VH-t.", "Reține WW1."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "graben", label: ml("Schützengraben", "Trench", "Lövészárok", "Tranșee"), emoji: "🕳️" },
          { id: "panzer", label: ml("Panzer", "Tank", "Tank", "Tanc"), emoji: "🪖" },
          { id: "gas", label: ml("Giftgas", "Poison gas", "Mérgesgáz", "Gaz toxic"), emoji: "💨" },
          { id: "uboot", label: ml("U-Boot", "Submarine", "Tengeralattjáró", "Submarin"), emoji: "🛥️" },
        ],
        decoyItems: [
          { id: "atom", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
          { id: "radar", label: ml("Radar", "Radar", "Radar", "Radar"), emoji: "📡" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
        ],
      },
      {
        id: "ge-8-mr-3",
        title: ml("WWII", "WWII", "II. Világháború", "WW2"),
        instruction: ml("Merke WWII-Dinge.", "Remember WWII.", "Jegyezd meg a II. VH-t.", "Reține WW2."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#60a5fa", radar: "#1d4ed8" },
        targetItems: [
          { id: "blitz", label: ml("Blitzkrieg", "Blitzkrieg", "Villámháború", "Război fulger"), emoji: "⚡" },
          { id: "bomber", label: ml("Bomber", "Bombers", "Bombázók", "Bombardiere"), emoji: "✈️" },
          { id: "atom", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
          { id: "radar", label: ml("Radar", "Radar", "Radar", "Radar"), emoji: "📡" },
        ],
        decoyItems: [
          { id: "graben", label: ml("Schützengraben", "Trench", "Lövészárok", "Tranșee"), emoji: "🕳️" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
          { id: "könig", label: ml("König", "King", "Király", "Rege"), emoji: "👑" },
        ],
      },
      {
        id: "ge-8-mr-4",
        title: ml("Kalter Krieg", "Cold War", "Hidegháború", "Război Rece"),
        instruction: ml("Merke die Begriffe.", "Remember terms.", "Jegyezd meg a fogalmakat.", "Reține termenii."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "mauer", label: ml("Berliner Mauer", "Berlin Wall", "Berlini fal", "Zidul Berlinului"), emoji: "🧱" },
          { id: "weltraum", label: ml("Wettlauf ins All", "Space Race", "Űrverseny", "Cursa spațială"), emoji: "🚀" },
          { id: "spion", label: ml("Spione", "Spies", "Kémek", "Spioni"), emoji: "🕵️" },
          { id: "nato", label: ml("NATO vs Warschau", "NATO vs Warsaw", "NATO vs Varsó", "NATO vs Varșovia"), emoji: "🛡️" },
        ],
        decoyItems: [
          { id: "kaiser", label: ml("Kaiser", "Emperor", "Császár", "Împărat"), emoji: "👑" },
          { id: "schloss", label: ml("Versailles", "Versailles", "Versailles", "Versailles"), emoji: "🏰" },
          { id: "gladiator", label: ml("Gladiator", "Gladiator", "Gladiátor", "Gladiator"), emoji: "⚔️" },
        ],
      },
      {
        id: "ge-8-mr-5",
        title: ml("Weltraum", "Space Race", "Űrkutatás", "Spațiu"),
        instruction: ml("Merke Weltraum-Dinge.", "Remember space items.", "Jegyezd meg az űrkutatást.", "Reține spațiul."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#2e1065", accent: "#c084fc", radar: "#4c1d95" },
        targetItems: [
          { id: "mond", label: ml("Mondlandung", "Moon landing", "Holdra szállás", "Aselenizare"), emoji: "🌕" },
          { id: "sputnik", label: ml("Sputnik", "Sputnik", "Szputnyik", "Sputnik"), emoji: "🛰️" },
          { id: "rakete", label: ml("Rakete", "Rocket", "Rakéta", "Rachetă"), emoji: "🚀" },
          { id: "astro", label: ml("Astronaut", "Astronaut", "Űrhajós", "Astronaut"), emoji: "🧑‍🚀" },
        ],
        decoyItems: [
          { id: "flugzeug", label: ml("Flugzeug", "Airplane", "Repülőgép", "Avion"), emoji: "✈️" },
          { id: "auto", label: ml("Auto", "Car", "Autó", "Mașină"), emoji: "🚗" },
          { id: "schiff", label: ml("Schiff", "Ship", "Hajó", "Corabie"), emoji: "🚢" },
        ],
      },
      {
        id: "ge-8-mr-6",
        title: ml("Industrielle Rev.", "Ind. Rev.", "Ipari forr.", "Rev. Industrială"),
        instruction: ml("Merke die Erfindungen.", "Remember inventions.", "Jegyezd meg a találmányokat.", "Reține invențiile."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#1c1917", accent: "#facc15", radar: "#292524" },
        targetItems: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam engine", "Gőzgép", "Motor aburi"), emoji: "🚂" },
          { id: "web", label: ml("Webstuhl", "Loom", "Szövőszék", "Război de țesut"), emoji: "🧵" },
          { id: "eisenbahn", label: ml("Eisenbahn", "Railway", "Vasút", "Cale ferată"), emoji: "🛤️" },
          { id: "fabrik", label: ml("Fabrik", "Factory", "Gyár", "Fabrică"), emoji: "🏭" },
        ],
        decoyItems: [
          { id: "computer", label: ml("Computer", "Computer", "Számítógép", "Computer"), emoji: "💻" },
          { id: "handy", label: ml("Smartphone", "Smartphone", "Okostelefon", "Smartphone"), emoji: "📱" },
          { id: "flug", label: ml("Flugzeug", "Airplane", "Repülő", "Avion"), emoji: "✈️" },
        ],
      },
      {
        id: "ge-8-mr-7",
        title: ml("WWI", "WWI", "I. VH", "WW1"),
        instruction: ml("Merke WWI-Symbole.", "Remember WWI.", "Jegyezd meg az I. VH szimbólumokat.", "Reține simboluri WW1."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#450a0a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "graben", label: ml("Schützengraben", "Trench", "Lövészárok", "Tranșee"), emoji: "🕳️" },
          { id: "panzer", label: ml("Panzer", "Tank", "Tank", "Tanc"), emoji: "🪖" },
          { id: "gas", label: ml("Giftgas", "Poison gas", "Gáz", "Gaz"), emoji: "💨" },
          { id: "uboot", label: ml("U-Boot", "Submarine", "Tengeralattjáró", "Submarin"), emoji: "🛥️" },
        ],
        decoyItems: [
          { id: "atom", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
          { id: "drohne", label: ml("Drohne", "Drone", "Drón", "Dronă"), emoji: "🛸" },
          { id: "ritter", label: ml("Ritter", "Knight", "Lovag", "Cavaler"), emoji: "🛡️" },
        ],
      },
      {
        id: "ge-8-mr-8",
        title: ml("WWII", "WWII", "II. VH", "WW2"),
        instruction: ml("Merke WWII-Dinge.", "Remember WWII.", "Jegyezd meg a II. VH dolgokat.", "Reține WW2."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1e3a8a", accent: "#60a5fa", radar: "#1d4ed8" },
        targetItems: [
          { id: "blitz", label: ml("Blitzkrieg", "Blitzkrieg", "Villámháború", "Război fulger"), emoji: "⚡" },
          { id: "bomber", label: ml("Bomber", "Bombers", "Bombázók", "Bombardiere"), emoji: "✈️" },
          { id: "atom", label: ml("Atombombe", "Atom bomb", "Atombomba", "Bombă atomică"), emoji: "🍄" },
          { id: "radar", label: ml("Radar", "Radar", "Radar", "Radar"), emoji: "📡" },
        ],
        decoyItems: [
          { id: "laser", label: ml("Laser", "Laser", "Lézer", "Laser"), emoji: "💥" },
          { id: "schwert", label: ml("Schwert", "Sword", "Kard", "Sabie"), emoji: "🗡️" },
          { id: "pfeil", label: ml("Pfeil", "Arrow", "Nyíl", "Săgeată"), emoji: "🏹" },
        ],
      },
      {
        id: "ge-8-mr-9",
        title: ml("Kalter Krieg", "Cold War", "Hidegháború", "Război Rece"),
        instruction: ml("Merke Symbole.", "Remember symbols.", "Jegyezd meg a szimbólumokat.", "Reține simbolurile."),
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#064e3b", accent: "#10b981", radar: "#022c22" },
        targetItems: [
          { id: "mauer", label: ml("Mauer", "Wall", "Fal", "Zid"), emoji: "🧱" },
          { id: "rakete", label: ml("Rakete", "Rocket", "Rakéta", "Rachetă"), emoji: "🚀" },
          { id: "spion", label: ml("Spion", "Spy", "Kém", "Spion"), emoji: "🕵️" },
          { id: "atom", label: ml("Atomwaffen", "Nukes", "Atomfegyver", "Arme nucleare"), emoji: "☢️" },
        ],
        decoyItems: [
          { id: "kanone", label: ml("Kanone", "Cannon", "Ágyú", "Tun"), emoji: "💣" },
          { id: "schloss", label: ml("Schloss", "Castle", "Kastély", "Castel"), emoji: "🏰" },
          { id: "krone", label: ml("Krone", "Crown", "Korona", "Coroană"), emoji: "👑" },
        ],
      },
      {
        id: "ge-8-mr-10",
        title: ml("Moderne Welt", "Modern World", "Modern Világ", "Lumea Modernă"),
        instruction: ml("Merke Moderne Dinge.", "Remember modern items.", "Jegyezd meg a moderneket.", "Reține lucruri moderne."),
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#2e1065", accent: "#c084fc", radar: "#4c1d95" },
        targetItems: [
          { id: "comp", label: ml("Computer", "Computer", "Számítógép", "Computer"), emoji: "💻" },
          { id: "handy", label: ml("Smartphone", "Smartphone", "Okostelefon", "Smartphone"), emoji: "📱" },
          { id: "inter", label: ml("Internet", "Internet", "Internet", "Internet"), emoji: "🌐" },
          { id: "eu", label: ml("EU", "EU", "EU", "UE"), emoji: "🇪🇺" },
        ],
        decoyItems: [
          { id: "dampf", label: ml("Dampfmaschine", "Steam eng.", "Gőzgép", "Motor aburi"), emoji: "🚂" },
          { id: "telegraf", label: ml("Telegraf", "Telegraph", "Távíró", "Telegraf"), emoji: "📠" },
          { id: "kutsche", label: ml("Kutsche", "Carriage", "Hintó", "Trăsură"), emoji: "🐎" },
        ],
      }
    ],
  },
};
