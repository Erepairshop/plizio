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
  },
  // REGIONAL POIS (2 per region)
  // ME-001: Herceg Novi
  {
    id: "me-001-city",
    name: { de: "Herceg Novi", hu: "Herceg Novi", ro: "Herceg Novi", en: "Herceg Novi" },
    type: "city",
    coords: [18.5375, 42.4531],
    parent: "ME-001",
    description: {
      de: "Eine Küstenstadt am Eingang der Bucht von Kotor.",
      hu: "Tengerparti város a Kotori-öböl bejáratánál.",
      ro: "Un oraș de coastă la intrarea în Golful Kotor.",
      en: "A coastal town located at the entrance to the Bay of Kotor."
    },
    facts: {
      de: ["Bekannt für seine vielen Treppen.", "Heimat der Festung Forte Mare.", "Berühmt für das Mimosenfestival.", "Tor zur Bucht von Kotor."],
      hu: ["A 'lépcsők városaként' is ismert.", "Itt található a Forte Mare erőd.", "Híres a Mimóza-fesztiválról.", "A Kotori-öböl bejárata."],
      ro: ["Cunoscut sub numele de „orașul scărilor”.", "Găzduiește fortăreața Forte Mare.", "Faimos pentru Festivalul Mimozelor.", "Poarta către Golful Kotor."],
      en: ["Known as the 'city of stairs'.", "Home to the Forte Mare fortress.", "Famous for the Mimosa Festival.", "The gateway to the Bay of Kotor."]
    }
  },
  {
    id: "me-001-kanli-kula",
    name: { de: "Kanli Kula", hu: "Kanli Kula", ro: "Kanli Kula", en: "Kanli Kula" },
    type: "historical",
    coords: [18.5390, 42.4545],
    parent: "ME-001",
    description: {
      de: "Eine beeindruckende Festung aus der osmanischen Zeit in Herceg Novi.",
      hu: "Lenyűgöző oszmán kori erőd Herceg Noviban.",
      ro: "O fortăreață impresionantă din epoca otomană în Herceg Novi.",
      en: "An impressive Ottoman-era fortress in Herceg Novi."
    },
    facts: {
      de: ["Name bedeutet 'Blutiger Turm'.", "Diente als Gefängnis.", "Heute ein Freilichttheater.", "Bietet Blick auf die Bucht."],
      hu: ["A neve 'véres tornyot' jelent.", "Börtönként is funkcionált.", "Ma szabadtéri színpadként működik.", "Pazar kilátás nyílik az öbölre."],
      ro: ["Numele înseamnă „Turnul Însângerat”.", "A servit drept închisoare.", "Astăzi este un teatru în aer liber.", "Oferă vedere spre golf."],
      en: ["The name means 'Bloody Tower'.", "It served as a prison.", "Now an open-air theater.", "Offers views over the bay."]
    }
  },
  // ME-002: Rožaje
  {
    id: "me-002-city",
    name: { de: "Rožaje", hu: "Rožaje", ro: "Rožaje", en: "Rožaje" },
    type: "city",
    coords: [20.1667, 42.8333],
    parent: "ME-002",
    description: {
      de: "Eine Stadt im Nordosten Montenegros, umgeben von hohen Bergen.",
      hu: "Város Montenegró északkeleti részén, magas hegyekkel körülvéve.",
      ro: "Un oraș în nord-estul Muntenegrului, înconjurat de munți înalți.",
      en: "A town in northeastern Montenegro, surrounded by high mountains."
    },
    facts: {
      de: ["Liegt am Fluss Ibar.", "Bekannt für die Holzindustrie.", "Ausgangspunkt für Wanderungen.", "Reich an Waldressourcen."],
      hu: ["Az Ibar folyó partján fekszik.", "Fafeldolgozó iparáról ismert.", "Kedvelt túraútvonalak kiindulópontja.", "Gazdag erdőállománnyal rendelkezik."],
      ro: ["Situat pe râul Ibar.", "Cunoscut pentru industria lemnului.", "Punct de plecare pentru drumeții.", "Bogat în resurse forestiere."],
      en: ["Located on the Ibar River.", "Known for its wood industry.", "Starting point for hiking.", "Rich in forest resources."]
    }
  },
  {
    id: "me-002-hajla",
    name: { de: "Hajla", hu: "Hajla", ro: "Hajla", en: "Hajla" },
    type: "mountain",
    coords: [20.1333, 42.7500],
    parent: "ME-002",
    description: {
      de: "Ein markanter Berg an der Grenze zwischen Montenegro und dem Kosovo.",
      hu: "Jellegzetes hegy Montenegró és Koszovó határán.",
      ro: "Un munte proeminent la granița dintre Muntenegru și Kosovo.",
      en: "A prominent mountain on the border between Montenegro and Kosovo."
    },
    facts: {
      de: ["Höchster Punkt 2403 m.", "Bekannt für botanische Vielfalt.", "Teil der verfluchten Berge.", "Bietet dramatische Gipfel."],
      hu: ["Legmagasabb pontja 2403 méter.", "Botanikai sokszínűségéről híres.", "Az Elátkozott-hegység része.", "Drámai sziklacsúcsok jellemzik."],
      ro: ["Cel mai înalt punct are 2403 m.", "Cunoscut pentru diversitatea botanică.", "Face parte din Munții Blestemați.", "Oferă vârfuri dramatice."],
      en: ["Highest point is 2403 m.", "Known for botanical diversity.", "Part of the Accursed Mountains.", "Features dramatic peaks."]
    }
  },
  // ME-003: Berane
  {
    id: "me-003-city",
    name: { de: "Berane", hu: "Berane", ro: "Berane", en: "Berane" },
    type: "city",
    coords: [19.8733, 42.8425],
    parent: "ME-003",
    description: {
      de: "Ein bedeutendes wirtschaftliches und kulturelles Zentrum im Norden.",
      hu: "Fontos gazdasági és kulturális központ északon.",
      ro: "Un important centru economic și cultural din nord.",
      en: "A significant economic and cultural center in the north."
    },
    facts: {
      de: ["Liegt am Fluss Lim.", "Einst Ivangrad genannt.", "Hat einen regionalen Flughafen.", "Umgeben von Bergmassiven."],
      hu: ["A Lim folyó mentén fekszik.", "Korábban Ivangradnak hívták.", "Regionális repülőtere van.", "Hegyek veszik körül."],
      ro: ["Situat pe râul Lim.", "Numit anterior Ivangrad.", "Are un aeroport regional.", "Înconjurat de masive montane."],
      en: ["Located on the Lim River.", "Formerly called Ivangrad.", "Has a regional airport.", "Surrounded by mountain massifs."]
    }
  },
  {
    id: "me-003-djurdjevi-stupovi",
    name: { de: "Đurđevi Stupovi", hu: "Đurđevi Stupovi", ro: "Đurđevi Stupovi", en: "Đurđevi Stupovi" },
    type: "historical",
    coords: [19.8633, 42.8550],
    parent: "ME-003",
    description: {
      de: "Ein historisches serbisch-orthodoxes Kloster aus dem 13. Jahrhundert.",
      hu: "13. századi történelmi szerb ortodox kolostor.",
      ro: "O mănăstire ortodoxă sârbă istorică din secolul al XIII-lea.",
      en: "A historic 13th-century Serbian Orthodox monastery."
    },
    facts: {
      de: ["Gegründet im Jahr 1213.", "Sitz der Eparchie Budimlja-Nikšić.", "Bedeutendes Denkmal der Nemanjić.", "Kulturhistorisches Erbe."],
      hu: ["1213-ban alapították.", "A Budimlja-Nikšić egyházmegye székhelye.", "A Nemanjić-dinasztia emléke.", "Kulturális örökség."],
      ro: ["Fondată în anul 1213.", "Sediul Eparhiei de Budimlja-Nikšić.", "Monument important al dinastiei Nemanjić.", "Moștenire cultural-istorică."],
      en: ["Founded in 1213.", "Seat of the Eparchy of Budimlja-Nikšić.", "Important Nemanjić dynasty monument.", "Cultural and historical heritage."]
    }
  },
  // ME-004: Plav
  {
    id: "me-004-city",
    name: { de: "Plav", hu: "Plav", ro: "Plav", en: "Plav" },
    type: "city",
    coords: [19.9450, 42.5967],
    parent: "ME-004",
    description: {
      de: "Eine malerische Stadt am Fuße der Prokletije-Berge.",
      hu: "Gleccser menti város a Prokletije lábánál.",
      ro: "Un oraș pitoresc la poalele munților Prokletije.",
      en: "A picturesque town at the foot of the Prokletije mountains."
    },
    facts: {
      de: ["Bekannt für den Redžepagić-Turm.", "Liegt am Plav-See.", "Eingang zum Nationalpark Prokletije.", "Reich an Quellen und Bächen."],
      hu: ["A Redžepagić-toronyról híres.", "A Plavi-tó partján fekszik.", "A Prokletije Nemzeti Park kapuja.", "Forrásokban és patakokban gazdag."],
      ro: ["Cunoscut pentru Turnul Redžepagić.", "Situat pe malul lacului Plav.", "Intrarea în Parcul Național Prokletije.", "Bogat în izvoare și pâraie."],
      en: ["Known for the Redžepagić Tower.", "Located by Lake Plav.", "Gateway to Prokletije National Park.", "Rich in springs and streams."]
    }
  },
  {
    id: "me-004-plav-lake",
    name: { de: "Plav-See", hu: "Plavi-tó", ro: "Lacul Plav", en: "Lake Plav" },
    type: "lake",
    coords: [19.9250, 42.5983],
    parent: "ME-004",
    description: {
      de: "Ein wunderschöner See glazialen Ursprungs.",
      hu: "Gyönyörű gleccsereredetű tó.",
      ro: "Un lac frumos de origine glaciară.",
      en: "A beautiful lake of origin glacial origin."
    },
    facts: {
      de: ["Größter Gletschersee der Region.", "Fischreiches Gewässer.", "Beliebt für Bootsfahrten.", "Wichtiges Ökosystem."],
      hu: ["A régió legnagyobb gleccsertava.", "Halakban gazdag víz.", "Kedvelt csónakázóhely.", "Fontos ökoszisztéma."],
      ro: ["Cel mai mare lac glaciar din regiune.", "Ape bogate în pește.", "Popular pentru plimbări cu barca.", "Ecosistem important."],
      en: ["Largest glacial lake in the region.", "Waters rich in fish.", "Popular for boat rides.", "Important ecosystem."]
    }
  },
  // ME-005: Pljevlja
  {
    id: "me-005-city",
    name: { de: "Pljevlja", hu: "Pljevlja", ro: "Pljevlja", en: "Pljevlja" },
    type: "city",
    coords: [19.3583, 43.3567],
    parent: "ME-005",
    description: {
      de: "Eine Industriestadt im Norden mit einer reichen multikulturellen Geschichte.",
      hu: "Északi iparváros gazdag multikulturális történelemmel.",
      ro: "Un oraș industrial din nord, cu o bogată istorie multiculturală.",
      en: "An industrial town in the north with a rich multicultural history."
    },
    facts: {
      de: ["Bekannt für Kohlebergbau.", "Heimat eines Wärmekraftwerks.", "Hat osmanische Architektur.", "Sitz des Municipium S."],
      hu: ["Szénbányászatáról ismert.", "Itt található egy hőerőmű.", "Oszmán építészeti emlékek.", "A római Municipium S helyszíne."],
      ro: ["Cunoscut pentru minele de cărbune.", "Găzduiește o termocentrală.", "Are arhitectură otomană.", "Situl vechiului Municipium S."],
      en: ["Known for coal mining.", "Home to a thermal power plant.", "Has Ottoman architecture.", "Site of ancient Municipium S."]
    }
  },
  {
    id: "me-005-husein-pasa",
    name: { de: "Husein-paša-Moschee", hu: "Husein-paša mecset", ro: "Moscheea Husein-paša", en: "Husein-paša Mosque" },
    type: "historical",
    coords: [19.3580, 43.3570],
    parent: "ME-005",
    description: {
      de: "Eines der schönsten Denkmäler der islamischen Architektur auf dem Balkan.",
      hu: "A balkáni iszlám építészet egyik legszebb emléke.",
      ro: "Unul dintre cele mai frumoase monumente de arhitectură islamică din Balcani.",
      en: "One of the most beautiful monuments of Islamic architecture in the Balkans."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert.", "Höchstes Minarett auf dem Balkan.", "Besitzt ein seltenes Koran-Manuskript.", "Prächtige Wandmalereien."],
      hu: ["A 16. században épült.", "A Balkán legmagasabb minaretje.", "Ritka Korán-kéziratot őriz.", "Pompás falfestmények."],
      ro: ["Construită în secolul al XVI-lea.", "Cel mai înalt minaret din Balcani.", "Deține un manuscris rar al Coranului.", "Picturi murale superbe."],
      en: ["Built in the 16th century.", "Highest minaret in the Balkans.", "Preserves a rare Quran manuscript.", "Stunning wall paintings."]
    }
  },
  // ME-006: Bijelo Polje
  {
    id: "me-006-city",
    name: { de: "Bijelo Polje", hu: "Bijelo Polje", ro: "Bijelo Polje", en: "Bijelo Polje" },
    type: "city",
    coords: [19.7475, 43.0383],
    parent: "ME-006",
    description: {
      de: "Die 'Weiße Stadt', ein wichtiger Verkehrsknotenpunkt im Norden.",
      hu: "A 'fehér város', fontos északi közlekedési csomópont.",
      ro: "„Câmpul Alb”, un important nod de transport din nord.",
      en: "The 'White Field', an important transport hub in the north."
    },
    facts: {
      de: ["Liegt an der Lim-Schlucht.", "Bedeutendes Handelszentrum.", "Bekannt für das Miroslav-Evangelium.", "Tor zu Serbien."],
      hu: ["A Lim-kanyonban fekszik.", "Jelentős kereskedelmi központ.", "A Miroszláv-evangéliumról híres.", "Kapu Szerbia felé."],
      ro: ["Situat pe valea râului Lim.", "Centru comercial important.", "Cunoscut pentru Evangheliarul lui Miroslav.", "Poarta spre Serbia."],
      en: ["Located in the Lim valley.", "Significant commercial center.", "Famous for Miroslav's Gospel.", "Gateway to Serbia."]
    }
  },
  {
    id: "me-006-st-peter",
    name: { de: "St. Peter-Kirche", hu: "Szent Péter-templom", ro: "Biserica Sf. Petru", en: "St. Peter's Church" },
    type: "historical",
    coords: [19.7500, 43.0400],
    parent: "ME-006",
    description: {
      de: "Eine Kirche aus dem 12. Jahrhundert, in der das Miroslav-Evangelium geschrieben wurde.",
      hu: "12. századi templom, ahol a Miroszláv-evangélium íródott.",
      ro: "O biserică din secolul al XII-lea, unde a fost scris Evangheliarul lui Miroslav.",
      en: "A 12th-century church where the Miroslav's Gospel was written."
    },
    facts: {
      de: ["Von Prinz Miroslav gestiftet.", "Prächtige romanische Architektur.", "Bedeutendes kulturelles Denkmal.", "Einst Sitz eines Bistums."],
      hu: ["Miroszláv herceg alapította.", "Pompás román kori építészet.", "Kiemelkedő kulturális emlék.", "Egykor püspöki székhely volt."],
      ro: ["Fondată de prințul Miroslav.", "Arhitectură romanică superbă.", "Monument cultural deosebit.", "Fost sediu episcopal."],
      en: ["Founded by Prince Miroslav.", "Superb Romanesque architecture.", "Significant cultural monument.", "Former episcopal seat."]
    }
  },
  // ME-007: Žabljak
  {
    id: "me-007-city",
    name: { de: "Žabljak", hu: "Žabljak", ro: "Žabljak", en: "Žabljak" },
    type: "city",
    coords: [19.1228, 43.1542],
    parent: "ME-007",
    description: {
      de: "Die höchstgelegene Stadt auf dem Balkan, im Herzen des Durmitor.",
      hu: "A Balkán legmagasabban fekvő városa a Durmitor szívében.",
      ro: "Orașul situat la cea mai mare altitudine din Balcani, în inima Durmitorului.",
      en: "The highest town in the Balkans, in the heart of Durmitor."
    },
    facts: {
      de: ["Liegt auf 1456 m Höhe.", "Zentrum des Wintersports.", "Tor zum Nationalpark Durmitor.", "Umgeben von 18 Gletscherseen."],
      hu: ["1456 méter magasan fekszik.", "A téli sportok központja.", "A Durmitor Nemzeti Park kapuja.", "18 gleccsertó veszi körül."],
      ro: ["Situat la 1456 m altitudine.", "Centru al sporturilor de iarnă.", "Poarta către Parcul Național Durmitor.", "Înconjurat de 18 lacuri glaciare."],
      en: ["Located at 1456 m altitude.", "Center for winter sports.", "Gateway to Durmitor National Park.", "Surrounded by 18 glacial lakes."]
    }
  },
  {
    id: "me-007-black-lake",
    name: { de: "Schwarzer See", hu: "Fekete-tó", ro: "Lacul Negru", en: "Black Lake" },
    type: "lake",
    coords: [19.0911, 43.1467],
    parent: "ME-007",
    description: {
      de: "Der bekannteste und größte der 18 Gletscherseen im Durmitor.",
      hu: "A leghíresebb és legnagyobb a Durmitor 18 gleccsertava közül.",
      ro: "Cel mai faimos și mai mare dintre cele 18 lacuri glaciare din Durmitor.",
      en: "The most famous and largest of the 18 glacial lakes in Durmitor."
    },
    facts: {
      de: ["Besteht aus zwei Seen.", "Liegt am Fuße des Medjed.", "Spiegelt die Tannenwälder wider.", "Beliebt für Wanderungen."],
      hu: ["Két tóból áll.", "A Međed-csúcs lábánál fekszik.", "Vize fenyőerdőket tükröz.", "Népszerű túraútvonal."],
      ro: ["Format din două lacuri.", "Situat la poalele vârfului Medjed.", "Reflectă pădurile de brazi.", "Popular pentru drumeții."],
      en: ["Composed of two lakes.", "Located at the foot of Medjed peak.", "Reflects the fir forests.", "Popular for hiking."]
    }
  },
  // ME-008: Plužine
  {
    id: "me-008-city",
    name: { de: "Plužine", hu: "Plužine", ro: "Plužine", en: "Plužine" },
    type: "city",
    coords: [18.8394, 43.1544],
    parent: "ME-008",
    description: {
      de: "Eine Stadt am Ufer des Piva-Stausees, umgeben von Schluchten.",
      hu: "Város a Piva-tó partján, kanyonokkal körülvéve.",
      ro: "Un oraș pe malul lacului Piva, înconjurat de canioane.",
      en: "A town on the shores of Lake Piva, surrounded by canyons."
    },
    facts: {
      de: ["Erbaut nach der Überflutung.", "Zentrum der Piva-Region.", "Bekannt für das Piva-Kloster.", "Bietet Wassersportmöglichkeiten."],
      hu: ["Az árasztás után épült fel.", "A Piva-régió központja.", "A Piva-kolostorról ismert.", "Vízi sportlehetőségeket kínál."],
      ro: ["Construit după inundație.", "Centrul regiunii Piva.", "Cunoscut pentru mănăstirea Piva.", "Oferă activități nautice."],
      en: ["Built after the flood.", "Center of the Piva region.", "Known for the Piva Monastery.", "Offers water sports."]
    }
  },
  {
    id: "me-008-piva-monastery",
    name: { de: "Kloster Piva", hu: "Piva-kolostor", ro: "Mănăstirea Piva", en: "Piva Monastery" },
    type: "historical",
    coords: [18.8250, 43.1110],
    parent: "ME-008",
    description: {
      de: "Ein Kloster, das Stein für Stein an einen neuen Ort verlegt wurde.",
      hu: "Kolostor, amelyet kőről kőre költöztettek új helyre.",
      ro: "O mănăstire care a fost mutată piatră cu piatră într-un loc nou.",
      en: "A monastery that was moved stone by stone to a new location."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert.", "Wegen Kraftwerksbau verlegt.", "Prächtige Freskenzyklen.", "Besitzt reiche Schatzkammer."],
      hu: ["A 16. században épült.", "Vízi erőmű miatt költöztették.", "Pompás freskóciklusok.", "Gazdag kincstárral bír."],
      ro: ["Construită în secolul al XVI-lea.", "Mutată din cauza hidrocentralei.", "Cicluri superbe de fresce.", "Deține un tezaur bogat."],
      en: ["Built in the 16th century.", "Moved due to power plant construction.", "Superb fresco cycles.", "Has a rich treasury."]
    }
  },
  // ME-009: Nikšic
  {
    id: "me-009-city",
    name: { de: "Nikšić", hu: "Nikšić", ro: "Nikšić", en: "Nikšić" },
    type: "city",
    coords: [18.9445, 42.7731],
    parent: "ME-009",
    description: {
      de: "Ein Industrie- und Bildungszentrum und die zweitgrößte Stadt.",
      hu: "Ipari és oktatási központ, az ország második legnagyobb városa.",
      ro: "Un centru industrial și educațional și al doilea oraș ca mărime.",
      en: "An industrial and educational center and the second largest city."
    },
    facts: {
      de: ["Heimat der Trebjesa-Brauerei.", "Bedeutende römische Wurzeln.", "Sitz der philosophischen Fakultät.", "Bekannt für seine Parks."],
      hu: ["A Trebjesa sörgyár otthona.", "Jelentős római gyökerek.", "Bölcsészettudományi kar székhelye.", "Parkjairól is ismert."],
      ro: ["Găzduiește berăria Trebjesa.", "Rădăcini romane importante.", "Sediul facultății de filozofie.", "Cunoscut pentru parcurile sale."],
      en: ["Home to the Trebjesa brewery.", "Significant Roman roots.", "Seat of the philosophy faculty.", "Known for its parks."]
    }
  },
  {
    id: "me-009-krupac",
    name: { de: "Krupac-See", hu: "Krupac-tó", ro: "Lacul Krupac", en: "Krupac Lake" },
    type: "lake",
    coords: [18.8900, 42.7800],
    parent: "ME-009",
    description: {
      de: "Ein künstlicher See in der Nähe von Nikšić, ein beliebtes Erholungsgebiet.",
      hu: "Mesterséges tó Nikšić közelében, népszerű üdülőhely.",
      ro: "Un lac artificial lângă Nikšić, o zonă populară de recreere.",
      en: "An artificial lake near Nikšić, a popular recreation area."
    },
    facts: {
      de: ["Wird 'Meer von Nikšić' genannt.", "Austragungsort von Musikfestivals.", "Beliebt zum Schwimmen.", "Reich an Fischbestand."],
      hu: ["'Nikšić tengerének' is hívják.", "Zenei fesztiválok helyszíne.", "Kedvelt fürdőhely.", "Gazdag halállománnyal bír."],
      ro: ["Numit „marea din Nikšić”.", "Gazda unor festivaluri de muzică.", "Popular pentru înot.", "Bogat în resurse piscicole."],
      en: ["Called the 'Nikšić sea'.", "Host to music festivals.", "Popular for swimming.", "Rich in fish stock."]
    }
  },
  // ME-010: Kotor
  {
    id: "me-010-city",
    name: { de: "Kotor", hu: "Kotor", ro: "Kotor", en: "Kotor" },
    type: "city",
    coords: [18.7712, 42.4247],
    parent: "ME-010",
    description: {
      de: "Eine mittelalterliche Stadt unter UNESCO-Schutz in einer tiefen Bucht.",
      hu: "UNESCO-védelem alatt álló középkori város egy mély öbölben.",
      ro: "Un oraș medieval protejat de UNESCO, situat într-un golf adânc.",
      en: "A UNESCO-protected medieval town situated in a deep bay."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Berühmt für venezianische Mauern.", "Kathedrale des Hl. Tryphon.", "Bekannt für seine Katzen."],
      hu: ["UNESCO Világörökség része.", "Híres velencei falak.", "Szent Tripun-székesegyház.", "Macskáiról is nevezetes."],
      ro: ["Patrimoniu Mondial UNESCO.", "Faimos pentru zidurile venețiene.", "Catedrala Sfântul Tryphon.", "Cunoscut pentru pisicile sale."],
      en: ["UNESCO World Heritage site.", "Famous for Venetian walls.", "St. Tryphon's Cathedral.", "Known for its cats."]
    }
  },
  {
    id: "me-010-perast",
    name: { de: "Perast", hu: "Perast", ro: "Perast", en: "Perast" },
    type: "city",
    coords: [18.7000, 42.4867],
    parent: "ME-010",
    description: {
      de: "Eine ruhige, barocke Stadt direkt am Wasser in der Bucht von Kotor.",
      hu: "Csendes, barokk stílusú vízparti város a Kotori-öbölben.",
      ro: "Un oraș baroc liniștit pe malul apei în Golful Kotor.",
      en: "A quiet, baroque-style waterfront town in the Bay of Kotor."
    },
    facts: {
      de: ["Einst eine wichtige Seefahrerstadt.", "Hat 16 Paläste und 19 Kirchen.", "Blick auf zwei Inseln.", "Vollständig geschützte Altstadt."],
      hu: ["Egykor fontos hajós város volt.", "16 palotája és 19 temploma van.", "Kilátás két kis szigetre.", "Teljesen védett óváros."],
      ro: ["Fost oraș important de navigatori.", "Are 16 palate și 19 biserici.", "Vedere spre două insule.", "Oraș vechi complet protejat."],
      en: ["Once an important maritime town.", "Has 16 palaces and 19 churches.", "Overlooks two islets.", "Completely protected old town."]
    }
  },
  // ME-011: Andrijevica
  {
    id: "me-011-city",
    name: { de: "Andrijevica", hu: "Andrijevica", ro: "Andrijevica", en: "Andrijevica" },
    type: "city",
    coords: [19.7917, 42.7339],
    parent: "ME-011",
    description: {
      de: "Eine kleine Stadt im Tal des Flusses Lim, umgeben von Komovi.",
      hu: "Kisváros a Lim folyó völgyében, a Komovi-hegység gyűrűjében.",
      ro: "Un oraș mic în valea râului Lim, înconjurat de Komovi.",
      en: "A small town in the Lim river valley, surrounded by Komovi."
    },
    facts: {
      de: ["Gegründet im 19. Jahrhundert.", "Zentrum der Vasojevići-Region.", "Ausgangspunkt für Bergsteiger.", "Reich an Bergquellen."],
      hu: ["A 19. században alapították.", "A Vasojevići régió központja.", "Hegymászók kedvelt bázisa.", "Hegyi forrásokban gazdag."],
      ro: ["Fondat în secolul al XIX-lea.", "Centrul regiunii Vasojevići.", "Punct de plecare pentru alpiniști.", "Bogat în izvoare montane."],
      en: ["Founded in the 19th century.", "Center of the Vasojevići region.", "Starting point for mountaineers.", "Rich in mountain springs."]
    }
  },
  {
    id: "me-011-komovi",
    name: { de: "Komovi", hu: "Komovi", ro: "Komovi", en: "Komovi" },
    type: "mountain",
    coords: [19.6667, 42.7167],
    parent: "ME-011",
    description: {
      de: "Eines der beeindruckendsten Gebirgsmassive Montenegros.",
      hu: "Montenegró egyik leglenyűgözőbb hegymasszívuma.",
      ro: "Unul dintre cele mai impresionante masive montane din Muntenegru.",
      en: "One of the most impressive mountain massifs in Montenegro."
    },
    facts: {
      de: ["Drei markante Gipfel.", "Über 2400 m hoch.", "Reich an Almwiesen.", "Beliebt für Hochgebirgswandern."],
      hu: ["Három jellegzetes csúcsból áll.", "2400 méter feletti magasság.", "Alpesi legelőkben gazdag.", "Népszerű magashegyi túrahely."],
      ro: ["Trei vârfuri proeminente.", "Peste 2400 m înălțime.", "Bogat în pășuni alpine.", "Popular pentru drumeții montane."],
      en: ["Composed of three prominent peaks.", "Over 2400 m high.", "Rich in alpine meadows.", "Popular for high mountain hiking."]
    }
  },
  // ME-012: Podgorica
  {
    id: "me-012-city",
    name: { de: "Podgorica", hu: "Podgorica", ro: "Podgorica", en: "Podgorica" },
    type: "city",
    coords: [19.2594, 42.4411],
    parent: "ME-012",
    description: {
      de: "Die moderne Hauptstadt und das administrative Zentrum Montenegros.",
      hu: "Modern főváros és Montenegró adminisztratív központja.",
      ro: "Capitala modernă și centrul administrativ al Muntenegrului.",
      en: "The modern capital and administrative center of Montenegro."
    },
    facts: {
      de: ["Früher Titograd genannt.", "Liegt an fünf Flüssen.", "Hat viele Grünflächen.", "Größte Stadt des Landes."],
      hu: ["Korábban Titogradnak hívták.", "Öt folyó találkozásánál fekszik.", "Sok zöldfelülettel rendelkezik.", "Az ország legnagyobb városa."],
      ro: ["Anterior numit Titograd.", "Situat la intersecția a cinci râuri.", "Are multe spații verzi.", "Cel mai mare oraș din țară."],
      en: ["Formerly called Titograd.", "Located at the confluence of five rivers.", "Has many green spaces.", "Largest city in the country."]
    }
  },
  {
    id: "me-012-millennium",
    name: { de: "Millennium-Brücke", hu: "Milenijum híd", ro: "Podul Mileniului", en: "Millennium Bridge" },
    type: "landmark",
    coords: [19.2589, 42.4450],
    parent: "ME-012",
    description: {
      de: "Ein modernes Wahrzeichen der Hauptstadt über den Fluss Morača.",
      hu: "A főváros modern jelképe a Morača folyó felett.",
      ro: "Un simbol modern al capitalei peste râul Morača.",
      en: "A modern symbol of the capital over the Morača river."
    },
    facts: {
      de: ["Eröffnet im Jahr 2005.", "173 Meter lang.", "Beeindruckende Pylon-Struktur.", "Verbindet Alt- und Neustadt."],
      hu: ["2005-ben adták át.", "173 méter hosszú.", "Lenyűgöző pilonos szerkezet.", "Összeköti az óvárost az újjal."],
      ro: ["Inaugurat în anul 2005.", "Lung de 173 metri.", "Structură de pilon impresionantă.", "Conectează orașul vechi de cel nou."],
      en: ["Opened in 2005.", "173 meters long.", "Impressive pylon structure.", "Connects old and new town."]
    }
  },
  // ME-013: Bar
  {
    id: "me-013-city",
    name: { de: "Bar", hu: "Bar", ro: "Bar", en: "Bar" },
    type: "city",
    coords: [19.1000, 42.1000],
    parent: "ME-013",
    description: {
      de: "Ein moderner Seehafen und ein wichtiges Handelszentrum an der Küste.",
      hu: "Modern tengeri kikötő és fontos kereskedelmi központ a parton.",
      ro: "Un port maritim modern și un important centru comercial de pe coastă.",
      en: "A modern seaport and an important commercial center on the coast."
    },
    facts: {
      de: ["Größter Hafen Montenegros.", "Endpunkt der Bahnstrecke Belgrad-Bar.", "Bekannt für Olivenöl.", "Mischung aus Kulturen."],
      hu: ["Montenegró legnagyobb kikötője.", "A Belgrád-Bar vasútvonal vége.", "Olívaolajáról híres.", "Kultúrák találkozóhelye."],
      ro: ["Cel mai mare port din Muntenegru.", "Punctul final al căii ferate Belgrad-Bar.", "Cunoscut pentru uleiul de măsline.", "Un amestec de culturi."],
      en: ["Montenegro's largest port.", "End of the Belgrade-Bar railway.", "Famous for olive oil.", "A blend of cultures."]
    }
  },
  {
    id: "me-013-stari-bar",
    name: { de: "Stari Bar", hu: "Stari Bar", ro: "Stari Bar", en: "Stari Bar" },
    type: "historical",
    coords: [19.1350, 42.0933],
    parent: "ME-013",
    description: {
      de: "Ruinenstadt und eine der weltweit größten befestigten archäologischen Stätten.",
      hu: "Romváros és a világ egyik legnagyobb erődített régészeti lelőhelye.",
      ro: "Oraș în ruină și unul dintre cele mai mari situri arheologice fortificate din lume.",
      en: "Ruined town and one of the world's largest fortified archaeological sites."
    },
    facts: {
      de: ["Bewahrt 2500 Jahre Geschichte.", "Bedeutendes Aquädukt.", "Festung mit Meerblick.", "Von Olivenhainen umgeben."],
      hu: ["2500 év történelmét őrzi.", "Jelentős vízvezeték (akvadukt).", "Erőd tengeri kilátással.", "Olajfaligetek veszik körül."],
      ro: ["Păstrează 2500 de ani de istorie.", "Apeduct important.", "Fortăreață cu vedere la mare.", "Înconjurat de livezi de măslini."],
      en: ["Preserves 2500 years of history.", "Significant aqueduct.", "Fortress with sea views.", "Surrounded by olive groves."]
    }
  },
  // ME-014: Ulcinj
  {
    id: "me-014-city",
    name: { de: "Ulcinj", hu: "Ulcinj", ro: "Ulcinj", en: "Ulcinj" },
    type: "city",
    coords: [19.2244, 41.9294],
    parent: "ME-014",
    description: {
      de: "Eine Stadt mit orientalien Flair und endlosen Sandstränden.",
      hu: "Keleties hangulatú város végtelen homokos strandokkal.",
      ro: "Un oraș cu o atmosferă orientală și plaje nesfârșite de nisip.",
      en: "A town with an oriental flair and endless sandy beaches."
    },
    facts: {
      de: ["Einst ein Piratenstützpunkt.", "Älteste Stadt an der Küste.", "Bekannt für die Altstadt.", "Multikulturelle Bevölkerung."],
      hu: ["Egykor kalózok bázisa volt.", "A legöregebb város a parton.", "Híres az óvárosáról.", "Multikulturális lakosság."],
      ro: ["Fostă bază de pirați.", "Cel mai vechi oraș de pe coastă.", "Cunoscut pentru orașul vechi.", "Populație multiculturală."],
      en: ["Once a pirate stronghold.", "Oldest town on the coast.", "Known for its old town.", "Multicultural population."]
    }
  },
  {
    id: "me-014-ada-bojana",
    name: { de: "Ada Bojana", hu: "Ada Bojana", ro: "Ada Bojana", en: "Ada Bojana" },
    type: "island",
    coords: [19.3486, 41.8617],
    parent: "ME-014",
    description: {
      de: "Flussinsel am südlichen Ende Montenegros, beliebt bei Kitesurfern.",
      hu: "Folyami sziget Montenegró déli végén, a kiteszörfösök kedvence.",
      ro: "Insulă fluvială la capătul sudic al Muntenegrului, populară pentru kitesurfing.",
      en: "River island at the southern end of Montenegro, popular for kitesurfing."
    },
    facts: {
      de: ["Dreieckige Form.", "Berühmt für Fischrestaurants.", "FKK-Resort-Tradition.", "Grenze zu Albanien."],
      hu: ["Háromszög alakú.", "Híres haléttermeiről.", "Nudista üdülőhelyi hagyomány.", "Albánia határán fekszik."],
      ro: ["Formă triunghiulară.", "Faimoasă pentru restaurantele de pește.", "Tradiție de stațiune naturistă.", "Granița cu Albania."],
      en: ["Triangular shape.", "Famous for fish restaurants.", "Nudist resort tradition.", "Border with Albania."]
    }
  },
  // ME-015: Budva
  {
    id: "me-015-city",
    name: { de: "Budva", hu: "Budva", ro: "Budva", en: "Budva" },
    type: "city",
    coords: [18.8400, 42.2881],
    parent: "ME-015",
    description: {
      de: "Das touristische Zentrum Montenegros mit einer charmanten Altstadt.",
      hu: "Montenegró turisztikai központja hangulatos óvárossal.",
      ro: "Centrul turistic al Muntenegrului, cu un oraș vechi fermecător.",
      en: "The tourist center of Montenegro with a charming old town."
    },
    facts: {
      de: ["Berühmt für das Nachtleben.", "Besitzt eine Zitadelle.", "Wunderschöne Strände.", "Eine der ältesten Siedlungen."],
      hu: ["Éjszakai életéről híres.", "Citadellával rendelkezik.", "Gyönyörű strandok.", "Az egyik legősibb település."],
      ro: ["Faimos pentru viața de noapte.", "Deține o citadelă.", "Plaje superbe.", "Una dintre cele mai vechi așezări."],
      en: ["Famous for nightlife.", "Has a citadel.", "Beautiful beaches.", "One of the oldest settlements."]
    }
  },
  {
    id: "me-015-sveti-stefan",
    name: { de: "Sveti Stefan", hu: "Sveti Stefan", ro: "Sveti Stefan", en: "Sveti Stefan" },
    type: "island",
    coords: [18.8911, 42.2558],
    parent: "ME-015",
    description: {
      de: "Eine kleine Insel und ein Luxusresort mit Gebäuden aus dem 15. Jahrhundert.",
      hu: "Kis sziget és luxusüdülőhely 15. századi épületekkel.",
      ro: "O mică insulă și o stațiune de lux cu clădiri din secolul al XV-lea.",
      en: "A small islet and luxury resort featuring 15th-century buildings."
    },
    facts: {
      de: ["Einst ein Fischerdorf.", "Durch Isthmus verbunden.", "Exklusivstes Ziel an der Adria.", "Beliebter Ort für Prominente."],
      hu: ["Egykor halászfalu volt.", "Földnyelv köti össze a parttal.", "Az Adria legexkluzívabb helye.", "Hírességek kedvelt pihenőhelye."],
      ro: ["Fost sat de pescari.", "Conectată prin istm.", "Cea mai exclusivistă destinație de la Adriatica.", "Loc preferat de celebrități."],
      en: ["Once a fishing village.", "Connected by an isthmus.", "Most exclusive destination on the Adriatic.", "Favorite spot for celebrities."]
    }
  },
  // ME-016: Tivat
  {
    id: "me-016-city",
    name: { de: "Tivat", hu: "Tivat", ro: "Tivat", en: "Tivat" },
    type: "city",
    coords: [18.6961, 42.4364],
    parent: "ME-016",
    description: {
      de: "Eine moderne Stadt in der Bucht von Kotor mit luxuriösem Flair.",
      hu: "Modern város a Kotori-öbölben luxus hangulattal.",
      ro: "Un oraș modern în Golful Kotor, cu o atmosferă de lux.",
      en: "A modern town in the Bay of Kotor with a luxury feel."
    },
    facts: {
      de: ["Heimat von Porto Montenegro.", "Hat einen internationalen Flughafen.", "Einst eine Marinewerft.", "Sehr sonnige Stadt."],
      hu: ["A Porto Montenegro otthona.", "Nemzetközi repülőtere van.", "Egykor tengerészeti udvar.", "Nagyon napos város."],
      ro: ["Găzduiește Porto Montenegro.", "Are un aeroport internațional.", "Fost șantier naval militar.", "Un oraș foarte însorit."],
      en: ["Home to Porto Montenegro.", "Has an international airport.", "Former naval shipyard.", "A very sunny town."]
    }
  },
  {
    id: "me-016-porto-montenegro",
    name: { de: "Porto Montenegro", hu: "Porto Montenegro", ro: "Porto Montenegro", en: "Porto Montenegro" },
    type: "landmark",
    coords: [18.6917, 42.4333],
    parent: "ME-016",
    description: {
      de: "Ein luxuriöser Yachthafen und Resort von Weltklasse.",
      hu: "Világszínvonalú luxus jachtkikötő és üdülőhely.",
      ro: "O marină de lux și o stațiune de clasă mondială.",
      en: "A world-class luxury yacht marina and resort."
    },
    facts: {
      de: ["Exklusive Einkaufsmeile.", "Bietet Superyacht-Liegeplätze.", "Elegante Architektur.", "Ehemalige Militärbasis."],
      hu: ["Exkluzív bevásárlónegyed.", "Szuperjacht-kikötőhelyek.", "Elegáns építészet.", "Egykori katonai bázis."],
      ro: ["Zonă de cumpărături exclusivistă.", "Oferă locuri de acostare pentru super-iahturi.", "Arhitectură elegantă.", "Fostă bază militară."],
      en: ["Exclusive shopping mile.", "Offers superyacht berths.", "Elegant architecture.", "Former military base."]
    }
  },
  // ME-017: Mojkovac
  {
    id: "me-017-city",
    name: { de: "Mojkovac", hu: "Mojkovac", ro: "Mojkovac", en: "Mojkovac" },
    type: "city",
    coords: [19.5833, 42.9600],
    parent: "ME-017",
    description: {
      de: "Eine Stadt am Fluss Tara, bekannt für eine historische Schlacht.",
      hu: "Város a Tara folyó mentén, történelmi csatájáról nevezetes.",
      ro: "Un oraș pe râul Tara, cunoscut pentru o bătălie istorică.",
      en: "A town on the Tara River, famous for a historic battle."
    },
    facts: {
      de: ["Schauplatz der Schlacht von 1916.", "Liegt zwischen Tara und Lim.", "Bergbautradition.", "Tor zur Tara-Schlucht."],
      hu: ["Az 1916-os csata helyszíne.", "A Tara és Lim között fekszik.", "Bányászati hagyományok.", "Kapu a Tara-kanyonhoz."],
      ro: ["Locul bătăliei din 1916.", "Situat între râurile Tara și Lim.", "Tradiție minieră.", "Poarta spre Canionul Tara."],
      en: ["Site of the 1916 battle.", "Located between Tara and Lim.", "Mining tradition.", "Gateway to the Tara Canyon."]
    }
  },
  {
    id: "me-017-biogradska-gora",
    name: { de: "Biogradska Gora", hu: "Biogradska Gora", ro: "Biogradska Gora", en: "Biogradska Gora" },
    type: "forest",
    coords: [19.6000, 42.9000],
    parent: "ME-017",
    description: {
      de: "Einer der letzten Urwälder Europas im gleichnamigen Nationalpark.",
      hu: "Európa egyik utolsó őserdeje az azonos nevű nemzeti parkban.",
      ro: "Una dintre ultimele păduri virgine din Europa, în parcul național omonim.",
      en: "One of the last virgin forests in Europe, in the national park of the same name."
    },
    facts: {
      de: ["Sehr reiche Artenvielfalt.", "Wunderschöner Biograd-See.", "Über 500 Jahre alte Bäume.", "Einzigartiges Ökosystem."],
      hu: ["Nagyon gazdag fajszínvonal.", "Gyönyörű Biográdi-tó.", "Több mint 500 éves fák.", "Egyedülálló ökoszisztéma."],
      ro: ["Biodiversitate foarte bogată.", "Lacul Biograd este superb.", "Copaci de peste 500 de ani.", "Ecosistem unic."],
      en: ["Very rich biodiversity.", "Beautiful Biograd Lake.", "Trees over 500 years old.", "Unique ecosystem."]
    }
  },
  // ME-018: Cetinje
  {
    id: "me-018-city",
    name: { de: "Cetinje", hu: "Cetinje", ro: "Cetinje", en: "Cetinje" },
    type: "city",
    coords: [18.9144, 42.3931],
    parent: "ME-018",
    description: {
      de: "Die historische und kulturelle Hauptstadt Montenegros.",
      hu: "Montenegró történelmi és kulturális fővárosa.",
      ro: "Capitala istorică și culturală a Muntenegrului.",
      en: "The historic and cultural capital of Montenegro."
    },
    facts: {
      de: ["Sitz des Präsidenten.", "Reich an Museen.", "Gegründet im 15. Jahrhundert.", "Königliche Architektur."],
      hu: ["Az elnök székhelye.", "Múzeumokban gazdag.", "A 15. században alapították.", "Királyi építészet."],
      ro: ["Sediul președintelui.", "Bogat în muzee.", "Fondat în secolul al XV-lea.", "Arhitectură regală."],
      en: ["Seat of the President.", "Rich in museums.", "Founded in the 15th century.", "Royal architecture."]
    }
  },
  {
    id: "me-018-lovcen",
    name: { de: "Nationalpark Lovćen", hu: "Lovćen Nemzeti Park", ro: "Parcul Național Lovćen", en: "Lovćen National Park" },
    type: "landmark",
    coords: [18.8333, 42.4000],
    parent: "ME-018",
    description: {
      de: "Ein heiliger Berg für Montenegriner mit Panoramablick.",
      hu: "A montenegróiak szent hegye panorámás kilátással.",
      ro: "Un munte sfânt pentru muntenegreni, cu vederi panoramice.",
      en: "A sacred mountain for Montenegrins with panoramic views."
    },
    facts: {
      de: ["Heimat des Njegoš-Mausoleums.", "Symbol der Freiheit.", "Reich an Heilpflanzen.", "Einzigartiges Klima."],
      hu: ["Itt található a Njegoš-mauzóleum.", "A szabadság szimbóluma.", "Gyógynövényekben gazdag.", "Egyedülálló klíma."],
      ro: ["Găzduiește Mausoleul lui Njegoš.", "Simbol al libertății.", "Bogat în plante medicinale.", "Climat unic."],
      en: ["Home to the Njegoš Mausoleum.", "Symbol of freedom.", "Rich in medicinal plants.", "Unique climate."]
    }
  },
  // ME-019: Šavnik
  {
    id: "me-019-city",
    name: { de: "Šavnik", hu: "Šavnik", ro: "Šavnik", en: "Šavnik" },
    type: "city",
    coords: [19.0967, 42.9564],
    parent: "ME-019",
    description: {
      de: "Eine kleine Stadt am Zusammenfluss dreier Flüsse.",
      hu: "Kisváros három folyó összefolyásánál.",
      ro: "Un oraș mic la confluența a trei râuri.",
      en: "A small town at the confluence of three rivers."
    },
    facts: {
      de: ["Kleinste Gemeindehauptstadt.", "Liegt in einem tiefen Tal.", "Umgeben von Hochgebirge.", "Früher ein Handelsplatz."],
      hu: ["A legkisebb községközpont.", "Mély völgyben fekszik.", "Magas hegyek veszik körül.", "Korábban kereskedelmi hely."],
      ro: ["Cea mai mică reședință de comună.", "Situat într-o vale adâncă.", "Înconjurat de munți înalți.", "Fost loc de schimb comercial."],
      en: ["Smallest municipal center.", "Located in a deep valley.", "Surrounded by high mountains.", "Formerly a trading post."]
    }
  },
  {
    id: "me-019-nevidio",
    name: { de: "Nevidio-Schlucht", hu: "Nevidio-kanyon", ro: "Canionul Nevidio", en: "Nevidio Canyon" },
    type: "landmark",
    coords: [19.0667, 42.9833],
    parent: "ME-019",
    description: {
      de: "Die letzte entdeckte Schlucht in Europa, ein Abenteuerziel.",
      hu: "Európa utolsóként felfedezett kanyonja, kalandvágyók célpontja.",
      ro: "Ultimul canion descoperit în Europa, o destinație de aventură.",
      en: "The last discovered canyon in Europe, an adventure destination."
    },
    facts: {
      de: ["Name bedeutet 'Nicht gesehen'.", "Extrem schmal und tief.", "Nur mit Guide begehbar.", "Spektakuläre Wasserfälle."],
      hu: ["A neve azt jelenti: 'nem látott'.", "Rendkívül szűk és mély.", "Csak vezetővel látogatható.", "Látványos vízesések."],
      ro: ["Numele înseamnă „Nevăzutul”.", "Extrem de îngust și adânc.", "Accesibil doar cu ghid.", "Cascade spectaculoase."],
      en: ["Name means 'Unseen'.", "Extremely narrow and deep.", "Accessible only with a guide.", "Spectacular waterfalls."]
    }
  },
  // ME-020: Kolašin
  {
    id: "me-020-city",
    name: { de: "Kolašin", hu: "Kolašin", ro: "Kolašin", en: "Kolašin" },
    type: "city",
    coords: [19.5214, 42.8225],
    parent: "ME-020",
    description: {
      de: "Ein beliebtes Zentrum für Berg- und Wintersport im Norden.",
      hu: "Népszerű hegyi és téli sportközpont északon.",
      ro: "Un centru popular pentru sporturi montane și de iarnă din nord.",
      en: "A popular center for mountain and winter sports in the north."
    },
    facts: {
      de: ["Gegründet von Osmanen.", "Liegt am Fluss Tara.", "Zentrum für Skifahren.", "Luftkurort-Qualitäten."],
      hu: ["Oszmánok alapították.", "A Tara folyó partján fekszik.", "Síelési központ.", "Klimatikus gyógyhely."],
      ro: ["Fondat de otomani.", "Situat pe râul Tara.", "Centru pentru schi.", "Calități de stațiune climatică."],
      en: ["Founded by Ottomans.", "Located by the Tara River.", "Center for skiing.", "Climatic health resort qualities."]
    }
  },
  {
    id: "me-020-bjelasica",
    name: { de: "Bjelasica", hu: "Bjelasica", ro: "Bjelasica", en: "Bjelasica" },
    type: "mountain",
    coords: [19.6667, 42.8667],
    parent: "ME-020",
    description: {
      de: "Ein sanfteres Gebirge, ideal zum Wandern und Skifahren.",
      hu: "Lankásabb hegyvidék, ideális túrázáshoz és síeléshez.",
      ro: "Un munte cu pante mai domoale, ideal pentru drumeții și schi.",
      en: "A gentler mountain range, ideal for hiking and skiing."
    },
    facts: {
      de: ["Vulkanischen Ursprungs.", "Reich an Seen und Wäldern.", "Sitz großer Skizentren.", "Leicht zugängliche Gipfel."],
      hu: ["Vulkanikus eredetű.", "Tavakban és erdőkben gazdag.", "Nagy síközpontok helyszíne.", "Könnyen elérhető csúcsok."],
      ro: ["De origine vulcanică.", "Bogat în lacuri și păduri.", "Găzduiește mari centre de schi.", "Vârfuri ușor accesibile."],
      en: ["Of volcanic origin.", "Rich in lakes and forests.", "Home to major ski centers.", "Easily accessible peaks."]
    }
  },
  // ME-021: Danilovgrad
  {
    id: "me-021-city",
    name: { de: "Danilovgrad", hu: "Danilovgrad", ro: "Danilovgrad", en: "Danilovgrad" },
    type: "city",
    coords: [19.1467, 42.5900],
    parent: "ME-021",
    description: {
      de: "Eine Stadt im Bjelopavlići-Tal, benannt nach Fürst Danilo.",
      hu: "Város a Bjelopavlići-völgyben, Danilo fejedelemről elnevezve.",
      ro: "Un oraș în valea Bjelopavlići, numit după prințul Danilo.",
      en: "A town in the Bjelopavlići valley, named after Prince Danilo."
    },
    facts: {
      de: ["Geplant als Landeshauptstadt.", "Bekannt für Steinmetzkunst.", "Liegt am Fluss Zeta.", "Zentrum der Landwirtschaft."],
      hu: ["Fővárosnak tervezték.", "Kőfaragó művészetéről híres.", "A Zeta folyó partján fekszik.", "Mezőgazdasági központ."],
      ro: ["Planificat a fi capitală.", "Cunoscut pentru arta pietrei.", "Situat pe râul Zeta.", "Centru agricol."],
      en: ["Planned to be the capital.", "Known for stonemasonry.", "Located on the Zeta River.", "Agricultural center."]
    }
  },
  {
    id: "me-021-ostrog",
    name: { de: "Kloster Ostrog", hu: "Ostrog kolostor", ro: "Mănăstirea Ostrog", en: "Ostrog Monastery" },
    type: "landmark",
    coords: [19.0300, 42.6750],
    parent: "ME-021",
    description: {
      de: "Das meistbesuchte orthodoxe Heiligtum auf dem Balkan.",
      hu: "A leglátogatottabb ortodox szenthely a Balkánon.",
      ro: "Cel mai vizitat sanctuar ortodox din Balcani.",
      en: "The most visited Orthodox sanctuary in the Balkans."
    },
    facts: {
      de: ["In den Fels gehauen.", "Vom Hl. Vasilije gegründet.", "Wunderbare Architektur.", "Pilgerort aller Religionen."],
      hu: ["Sziklába vájták.", "Szent Vaszilije alapította.", "Csodálatos építészet.", "Minden vallás zarándokhelye."],
      ro: ["Săpată în stâncă.", "Fondată de Sf. Vasilije.", "Arhitectură miraculoasă.", "Loc de pelerinaj universal."],
      en: ["Carved into the rock.", "Founded by St. Vasilije.", "Miraculous architecture.", "Pilgrimage site for all."]
    }
  }
];
