import { type POI } from "./poi";

export const montenegroAllPoi: POI[] = [
  // CITIES
  {
    id: "me-podgorica",
    name: { de: "Podgorica", hu: "Podgorica", ro: "Podgorica", en: "Podgorica" },
    type: "state-capital",
    coords: [19.2594, 42.4411],
    parent: "ME-ALL",
    description: {
      de: "Die Hauptstadt und größte Stadt Montenegros.",
      hu: "Montenegró fővárosa és legnagyobb városa.",
      ro: "Capitala și cel mai mare oraș al Muntenegrului.",
      en: "The capital and largest city of Montenegro."
    }
  },
  {
    id: "me-kotor",
    name: { de: "Kotor", hu: "Kotor", ro: "Kotor", en: "Kotor" },
    type: "city",
    coords: [18.7712, 42.4247],
    parent: "ME-ALL",
    description: {
      de: "Historische Küstenstadt an der Bucht von Kotor, bekannt für ihre Altstadt.",
      hu: "Történelmi tengerparti város a Kotori-öbölben, híres óvárosáról.",
      ro: "Oraș de coastă istoric pe Golful Kotor, renumit pentru orașul vechi.",
      en: "Historic coastal town on the Bay of Kotor, famous for its old town."
    }
  },
  {
    id: "me-budva",
    name: { de: "Budva", hu: "Budva", ro: "Budva", en: "Budva" },
    type: "city",
    coords: [18.8400, 42.2881],
    parent: "ME-ALL",
    description: {
      de: "Beliebtes Touristenziel mit wunderschönen Stränden und einem historischen Zentrum.",
      hu: "Népszerű turisztikai célpont gyönyörű strandokkal és történelmi központtal.",
      ro: "Destinație turistică populară cu plaje frumoase și un centru istoric.",
      en: "Popular tourist destination with beautiful beaches and a historic center."
    }
  },
  {
    id: "me-cetinje",
    name: { de: "Cetinje", hu: "Cetinje", ro: "Cetinje", en: "Cetinje" },
    type: "city",
    coords: [18.9144, 42.3931],
    parent: "ME-ALL",
    description: {
      de: "Die alte königliche Hauptstadt Montenegros, reich an Kultur und Geschichte.",
      hu: "Montenegró régi királyi fővárosa, gazdag kultúrában és történelemben.",
      ro: "Fosta capitală regală a Muntenegrului, bogată în cultură și istorie.",
      en: "The old royal capital of Montenegro, rich in culture and history."
    }
  },
  {
    id: "me-niksic",
    name: { de: "Nikšić", hu: "Nikšić", ro: "Nikšić", en: "Nikšić" },
    type: "city",
    coords: [18.9445, 42.7731],
    parent: "ME-ALL",
    description: {
      de: "Die zweitgrößte Stadt, bekannt für ihre Industrie und das Trebjesa-Bier.",
      hu: "A második legnagyobb város, iparáról és a Trebjesa sörről ismert.",
      ro: "Al doilea oraș ca mărime, cunoscut pentru industrie și berea Trebjesa.",
      en: "The second largest city, known for its industry and Trebjesa beer."
    }
  },
  {
    id: "me-bar",
    name: { de: "Bar", hu: "Bar", ro: "Bar", en: "Bar" },
    type: "city",
    coords: [19.1000, 42.1000],
    parent: "ME-ALL",
    description: {
      de: "Wichtiger Seehafen Montenegros mit einer nahegelegenen antiken Ruinenstadt.",
      hu: "Montenegró fontos tengeri kikötője, a közelben egy ősi romvárossal.",
      ro: "Port maritim important al Muntenegrului, cu un oraș antic în ruină în apropiere.",
      en: "Major seaport of Montenegro, with a nearby ancient ruined city."
    }
  },
  {
    id: "me-herceg-novi",
    name: { de: "Herceg Novi", hu: "Herceg Novi", ro: "Herceg Novi", en: "Herceg Novi" },
    type: "city",
    coords: [18.5375, 42.4531],
    parent: "ME-ALL",
    description: {
      de: "Eine Küstenstadt am Eingang der Bucht von Kotor.",
      hu: "Tengerparti város a Kotori-öböl bejáratánál.",
      ro: "Un oraș de coastă la intrarea în Golful Kotor.",
      en: "A coastal town located at the entrance to the Bay of Kotor."
    }
  },
  {
    id: "me-tivat",
    name: { de: "Tivat", hu: "Tivat", ro: "Tivat", en: "Tivat" },
    type: "city",
    coords: [18.6961, 42.4364],
    parent: "ME-ALL",
    description: {
      de: "Bekannt für den luxuriösen Yachthafen Porto Montenegro.",
      hu: "A luxus Porto Montenegro jachtkikötőjéről ismert.",
      ro: "Cunoscut pentru marina de lux Porto Montenegro.",
      en: "Known for the luxurious Porto Montenegro marina."
    }
  },
  {
    id: "me-zabljak",
    name: { de: "Žabljak", hu: "Žabljak", ro: "Žabljak", en: "Žabljak" },
    type: "city",
    coords: [19.1228, 43.1542],
    parent: "ME-ALL",
    description: {
      de: "Zentrum des Bergtourismus im Durmitor-Nationalpark.",
      hu: "A hegyi turizmus központja a Durmitor Nemzeti Parkban.",
      ro: "Centrul turismului montan din Parcul Național Durmitor.",
      en: "Center of mountain tourism in the Durmitor National Park."
    }
  },
  {
    id: "me-ulcinj",
    name: { de: "Ulcinj", hu: "Ulcinj", ro: "Ulcinj", en: "Ulcinj" },
    type: "city",
    coords: [19.2244, 41.9294],
    parent: "ME-ALL",
    description: {
      de: "Die südlichste Stadt Montenegros, bekannt für lange Sandstrände.",
      hu: "Montenegró legdélibb városa, hosszú homokos strandjairól ismert.",
      ro: "Cel mai sudic oraș al Muntenegrului, renumit pentru plajele lungi de nisip.",
      en: "The southernmost town of Montenegro, known for its long sandy beaches."
    }
  },
  // NATURE
  {
    id: "me-skadar-lake",
    name: { de: "Skutarisee", hu: "Szkadari-tó", ro: "Lacul Skadar", en: "Skadar Lake" },
    type: "lake",
    coords: [19.2500, 42.2000],
    parent: "ME-ALL",
    description: {
      de: "Der größte See auf der Balkanhalbinsel und ein wichtiger Lebensraum für Vögel.",
      hu: "A Balkán-félsziget legnagyobb tava, fontos madárélőhely.",
      ro: "Cel mai mare lac din Peninsula Balcanică și un habitat important pentru păsări.",
      en: "The largest lake on the Balkan Peninsula and an important bird habitat."
    }
  },
  {
    id: "me-durmitor",
    name: { de: "Durmitor", hu: "Durmitor", ro: "Durmitor", en: "Durmitor" },
    type: "mountain",
    coords: [19.0333, 43.1333],
    parent: "ME-ALL",
    description: {
      de: "Ein Massiv und Nationalpark, Heimat des Bobotov Kuk und eiszeitlicher Seen.",
      hu: "Hegység és nemzeti park, a Bobotov Kuk és gleccsertavak otthona.",
      ro: "Un masiv și parc național, acasă pentru Bobotov Kuk și lacuri glaciare.",
      en: "A massif and national park, home to Bobotov Kuk and glacial lakes."
    }
  },
  {
    id: "me-tara-canyon",
    name: { de: "Tara-Schlucht", hu: "Tara-kanyon", ro: "Canionul Tara", en: "Tara Canyon" },
    type: "river",
    coords: [19.0833, 43.2000],
    parent: "ME-ALL",
    description: {
      de: "Einer der tiefsten Canyons in Europa, beliebt für Rafting.",
      hu: "Európa egyik legmélyebb kanyonja, népszerű vadvízi evezős helyszín.",
      ro: "Unul dintre cele mai adânci canioane din Europa, popular pentru rafting.",
      en: "One of the deepest canyons in Europe, popular for white-water rafting."
    }
  },
  {
    id: "me-lovcen",
    name: { de: "Lovćen", hu: "Lovćen", ro: "Lovćen", en: "Lovćen" },
    type: "mountain",
    coords: [18.8333, 42.4000],
    parent: "ME-ALL",
    description: {
      de: "Ein Berg und Nationalpark, der Montenegros nationale Identität symbolisiert.",
      hu: "Hegy és nemzeti park, amely Montenegró nemzeti identitását szimbolizálja.",
      ro: "Un munte și parc național care simbolizează identitatea națională a Muntenegrului.",
      en: "A mountain and national park symbolizing Montenegro's national identity."
    }
  },
  {
    id: "me-biogradska-gora",
    name: { de: "Biogradska Gora", hu: "Biogradska Gora", ro: "Biogradska Gora", en: "Biogradska Gora" },
    type: "forest",
    coords: [19.6000, 42.9000],
    parent: "ME-ALL",
    description: {
      de: "Ein Nationalpark, der einen der letzten drei großen Urwälder Europas beherbergt.",
      hu: "Nemzeti park, amely Európa három utolsó nagy őserdejének egyikét őrzi.",
      ro: "Un parc național ce protejează una dintre ultimele trei mari păduri virgine din Europa.",
      en: "A national park preserving one of the last three large virgin forests in Europe."
    }
  },
  {
    id: "me-prokletije",
    name: { de: "Prokletije", hu: "Prokletije", ro: "Prokletije", en: "Prokletije" },
    type: "mountain",
    coords: [19.7667, 42.5000],
    parent: "ME-ALL",
    description: {
      de: "Das 'verwunschene Gebirge', bekannt für seine schroffe und dramatische Landschaft.",
      hu: "Az 'elátkozott hegyek', melyek zord és drámai tájukról ismertek.",
      ro: "„Munții Blestemați”, cunoscuți pentru peisajul lor accidentat și dramatic.",
      en: "The 'Accursed Mountains', known for their rugged and dramatic landscape."
    }
  },
  {
    id: "me-bay-kotor",
    name: { de: "Bucht von Kotor", hu: "Kotori-öböl", ro: "Golful Kotor", en: "Bay of Kotor" },
    type: "sea",
    coords: [18.6667, 42.4333],
    parent: "ME-ALL",
    description: {
      de: "Oft Europas südlichster Fjord genannt, eine beeindruckende Küstenlandschaft.",
      hu: "Gyakran Európa legdélebbi fjordjának nevezik, lenyűgöző parti táj.",
      ro: "Adesea numit cel mai sudic fiord din Europa, un peisaj de coastă uimitor.",
      en: "Often called Europe's southernmost fjord, a stunning coastal landscape."
    }
  },
  {
    id: "me-sveti-stefan",
    name: { de: "Sveti Stefan", hu: "Sveti Stefan", ro: "Sveti Stefan", en: "Sveti Stefan" },
    type: "island",
    coords: [18.8911, 42.2558],
    parent: "ME-ALL",
    description: {
      de: "Eine kleine Insel und ein Luxusresort mit Gebäuden aus dem 15. Jahrhundert.",
      hu: "Kis sziget és luxusüdülőhely 15. századi épületekkel.",
      ro: "O mică insulă și o stațiune de lux cu clădiri din secolul al XV-lea.",
      en: "A small islet and luxury resort featuring 15th-century buildings."
    }
  },
  {
    id: "me-ada-bojana",
    name: { de: "Ada Bojana", hu: "Ada Bojana", ro: "Ada Bojana", en: "Ada Bojana" },
    type: "island",
    coords: [19.3486, 41.8617],
    parent: "ME-ALL",
    description: {
      de: "Flussinsel am südlichen Ende Montenegros, beliebt bei Kitesurfern.",
      hu: "Folyami sziget Montenegró déli végén, a kiteszörfösök kedvence.",
      ro: "Insulă fluvială la capătul sudic al Muntenegrului, populară pentru kitesurfing.",
      en: "River island at the southern end of Montenegro, popular for kitesurfing."
    }
  },
  {
    id: "me-black-lake",
    name: { de: "Schwarzer See", hu: "Fekete-tó", ro: "Lacul Negru", en: "Black Lake" },
    type: "lake",
    coords: [19.0911, 43.1467],
    parent: "ME-ALL",
    description: {
      de: "Ein bekannter Gletschersee im Durmitor-Nationalpark.",
      hu: "Egy híres gleccsertó a Durmitor Nemzeti Parkban.",
      ro: "Un lac glaciar bine-cunoscut în Parcul Național Durmitor.",
      en: "A well-known glacial lake in the Durmitor National Park."
    }
  },
  // HISTORY / LANDMARKS
  {
    id: "me-ostrog",
    name: { de: "Kloster Ostrog", hu: "Ostrog kolostor", ro: "Mănăstirea Ostrog", en: "Ostrog Monastery" },
    type: "landmark",
    coords: [19.0300, 42.6750],
    parent: "ME-ALL",
    description: {
      de: "Ein in die Felswand gebautes serbisch-orthodoxes Kloster, ein wichtiger Pilgerort.",
      hu: "Sziklafalba épült szerb ortodox kolostor, fontos zarándokhely.",
      ro: "O mănăstire ortodoxă sârbă construită într-o stâncă, un loc de pelerinaj important.",
      en: "A Serbian Orthodox monastery carved into a cliff face, a major pilgrimage site."
    }
  },
  {
    id: "me-our-lady-rocks",
    name: { de: "Maria vom Felsen", hu: "Szirti Madonna", ro: "Maica Domnului de pe Stâncă", en: "Our Lady of the Rocks" },
    type: "historical",
    coords: [18.6869, 42.4864],
    parent: "ME-ALL",
    description: {
      de: "Künstliche Insel vor Perast mit einer wunderschönen Kirche und einem Museum.",
      hu: "Mesterséges sziget Perast partjainál egy gyönyörű templommal és múzeummal.",
      ro: "Insulă artificială în largul coastelor Perast, cu o frumoasă biserică și un muzeu.",
      en: "Artificial island off the coast of Perast with a beautiful church and museum."
    }
  },
  {
    id: "me-njegos-mausoleum",
    name: { de: "Njegoš-Mausoleum", hu: "Njegoš Mauzóleum", ro: "Mausoleul lui Njegoš", en: "Njegoš Mausoleum" },
    type: "landmark",
    coords: [18.8008, 42.3994],
    parent: "ME-ALL",
    description: {
      de: "Das Grabdenkmal für Petar II. Petrović-Njegoš auf dem Berg Lovćen.",
      hu: "Petar II. Petrović-Njegoš síremléke a Lovćen hegyen.",
      ro: "Mormântul lui Petar al II-lea Petrović-Njegoș de pe muntele Lovćen.",
      en: "The burial monument to Petar II Petrović-Njegoš on Mount Lovćen."
    }
  },
  {
    id: "me-stari-bar",
    name: { de: "Stari Bar", hu: "Stari Bar", ro: "Stari Bar", en: "Stari Bar" },
    type: "historical",
    coords: [19.1350, 42.0933],
    parent: "ME-ALL",
    description: {
      de: "Ruinenstadt und eine der weltweit größten befestigten archäologischen Stätten.",
      hu: "Romváros és a világ egyik legnagyobb erődített régészeti lelőhelye.",
      ro: "Oraș în ruină și unul dintre cele mai mari situri arheologice fortificate din lume.",
      en: "Ruined town and one of the world's largest fortified archaeological sites."
    }
  },
  {
    id: "me-mamula",
    name: { de: "Mamula", hu: "Mamula", ro: "Mamula", en: "Mamula" },
    type: "historical",
    coords: [18.5583, 42.3953],
    parent: "ME-ALL",
    description: {
      de: "Unbewohnte Insel mit einem Fort aus dem 19. Jahrhundert.",
      hu: "Lakatlan sziget egy 19. századi erőddel.",
      ro: "Insulă nelocuită cu un fort din secolul al XIX-lea.",
      en: "Uninhabited island featuring a 19th-century fort."
    }
  },
  {
    id: "me-san-giovanni",
    name: { de: "Festung San Giovanni", hu: "San Giovanni erőd", ro: "Fortăreața San Giovanni", en: "San Giovanni Fortress" },
    type: "historical",
    coords: [18.7750, 42.4267],
    parent: "ME-ALL",
    description: {
      de: "Alte Befestigungsanlage hoch über Kotor, die einen atemberaubenden Blick bietet.",
      hu: "Régi erődítmény Kotor fölött, amely lélegzetelállító kilátást nyújt.",
      ro: "Fortificație veche sus deasupra orașului Kotor, oferind priveliști uimitoare.",
      en: "Old fortification high above Kotor offering stunning views."
    }
  },
  {
    id: "me-djurdjevica-tara",
    name: { de: "Đurđevića-Tara-Brücke", hu: "Đurđevića Tara híd", ro: "Podul Đurđevića Tara", en: "Đurđevića Tara Bridge" },
    type: "landmark",
    coords: [19.2953, 43.1506],
    parent: "ME-ALL",
    description: {
      de: "Beeindruckende Betonbogenbrücke über die Tara-Schlucht.",
      hu: "Lenyűgöző beton ívhíd a Tara-kanyon felett.",
      ro: "Un pod impresionant cu arce din beton peste Canionul Tara.",
      en: "Impressive concrete arch bridge over the Tara Canyon."
    }
  },
  {
    id: "me-cetinje-monastery",
    name: { de: "Kloster Cetinje", hu: "Cetinjei kolostor", ro: "Mănăstirea Cetinje", en: "Cetinje Monastery" },
    type: "historical",
    coords: [18.9222, 42.3875],
    parent: "ME-ALL",
    description: {
      de: "Bedeutendes serbisch-orthodoxes Kloster und Sitz der Metropolie von Montenegro.",
      hu: "Jelentős szerb ortodox kolostor, a montenegrói metropólia székhelye.",
      ro: "O mănăstire ortodoxă sârbă importantă și sediul Mitropoliei Muntenegrului.",
      en: "Significant Serbian Orthodox monastery and seat of the Metropolitanate of Montenegro."
    }
  },
  {
    id: "me-king-nikola-palace",
    name: { de: "Palast von König Nikola", hu: "Nikola király palotája", ro: "Palatul Regelui Nikola", en: "King Nikola's Palace" },
    type: "landmark",
    coords: [18.9236, 42.3867],
    parent: "ME-ALL",
    description: {
      de: "Ehemalige Residenz in Cetinje, die heute das Nationalmuseum beherbergt.",
      hu: "Egykori rezidencia Cetinjében, amely ma a Nemzeti Múzeumnak ad otthont.",
      ro: "Fosta reședință din Cetinje, care găzduiește acum Muzeul Național.",
      en: "Former residence in Cetinje that now houses the National Museum."
    }
  },
  {
    id: "me-moraca-monastery",
    name: { de: "Kloster Morača", hu: "Morača kolostor", ro: "Mănăstirea Morača", en: "Morača Monastery" },
    type: "historical",
    coords: [19.3908, 42.7667],
    parent: "ME-ALL",
    description: {
      de: "Mittelalterliches serbisch-orthodoxes Kloster aus dem Jahr 1252.",
      hu: "Középkori szerb ortodox kolostor, amely 1252-ben épült.",
      ro: "Mănăstire ortodoxă sârbă medievală fondată în 1252.",
      en: "Medieval Serbian Orthodox monastery founded in 1252."
    }
  }
];
