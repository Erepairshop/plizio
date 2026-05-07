// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraUsaLifeV2: POI[] = [
  {
    id: "san-diego-zoo-life-v2",
    type: "kid-landmark",
    parent: "US-CA",
    coords: [-117.149, 32.735],
    name: { de: "San Diego Zoo", hu: "San Diego-i Állatkert", ro: "Grădina Zoologică San Diego", en: "San Diego Zoo" },
    description: { de: "Weltberühmter Zoo in Kalifornien mit über 3.500 Tieren.", hu: "Világhírű állatkert Kaliforniában, több mint 3500 állattal.", ro: "Grădină zoologică de renume mondial în California, cu peste 3.500 de animale.", en: "World-famous zoo in California with over 3,500 animals." },
    facts: {
      de: ["Über 650 Arten", "Berühmt für seine Koalas", "Safari Park Erweiterung"],
      hu: ["Több mint 650 faj", "Híres a koaláiról", "Szafari Park bővítmény"],
      ro: ["Peste 650 de specii", "Faimos pentru koala", "Extindere Safari Park"],
      en: ["Over 650 species", "Famous for its koalas", "Safari Park extension"]
    }, image: "/poi-images/san-diego-zoo-life-v2.webp"},
  {
    id: "yellowstone-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-WY",
    coords: [-110.5885, 44.4280],
    name: { de: "Yellowstone-Nationalpark", hu: "Yellowstone Nemzeti Park", ro: "Parcul Național Yellowstone", en: "Yellowstone National Park" },
    description: { de: "Der erste Nationalpark der Welt, bekannt für seine Geysire und reiche Tierwelt.", hu: "A világ első nemzeti parkja, híres gejzírjeiről és gazdag állatvilágáról.", ro: "Primul parc național din lume, cunoscut pentru gheizerele și fauna sa bogată.", en: "The world's first national park, known for its geysers and rich wildlife." },
    facts: {
      de: ["Old Faithful Geysir", "Bisonherden", "Grizzlybären"],
      hu: ["Old Faithful gejzír", "Bölénycsordák", "Grizzly medvék"],
      ro: ["Gheizerele Old Faithful", "Turme de bizoni", "Urși Grizzly"],
      en: ["Old Faithful geyser", "Bison herds", "Grizzly bears"]
    }, image: "/poi-images/yellowstone-national-park-life-v2.webp"},
  {
    id: "disney-world-orlando-life-v2",
    type: "kid-landmark",
    parent: "US-FL",
    coords: [-81.5639, 28.3852],
    name: { de: "Walt Disney World", hu: "Walt Disney World", ro: "Walt Disney World", en: "Walt Disney World" },
    description: { de: "Der größte Freizeitparkkomplex der Welt in Orlando, Florida.", hu: "A világ legnagyobb vidámpark-komplexuma Orlandóban, Floridában.", ro: "Cel mai mare complex de parcuri tematice din lume, în Orlando, Florida.", en: "The largest theme park complex in the world, in Orlando, Florida." },
    facts: {
      de: ["Magic Kingdom Park", "Epcot", "Animal Kingdom"],
      hu: ["Magic Kingdom Park", "Epcot", "Animal Kingdom"],
      ro: ["Parcul Magic Kingdom", "Epcot", "Animal Kingdom"],
      en: ["Magic Kingdom Park", "Epcot", "Animal Kingdom"]
    }, image: "/poi-images/disney-world-orlando-life-v2.webp"},
  {
    id: "everglades-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-FL",
    coords: [-80.9325, 25.3220],
    name: { de: "Everglades-Nationalpark", hu: "Everglades Nemzeti Park", ro: "Parcul Național Everglades", en: "Everglades National Park" },
    description: { de: "Einzigartiges Feuchtgebiet-Ökosystem in Südflorida.", hu: "Egyedülálló vizes élőhely-ökoszisztéma Dél-Floridában.", ro: "Un ecosistem unic de zone umede în sudul Floridei.", en: "A unique wetland ecosystem in South Florida." },
    facts: {
      de: ["Heimat von Alligatoren", "Airboat-Touren", "Vielfältige Vogelwelt"],
      hu: ["Aligátorok otthona", "Légcsavaros csónaktúrák", "Változatos madárvilág"],
      ro: ["Habitatul aligatorilor", "Tururi cu hidroglisoare", "Faună aviară diversă"],
      en: ["Home to alligators", "Airboat tours", "Diverse birdlife"]
    }, image: "/poi-images/everglades-national-park-life-v2.webp"},
  {
    id: "central-park-zoo-life-v2",
    type: "kid-landmark",
    parent: "US-NY",
    coords: [-73.9714, 40.7678],
    name: { de: "Central Park Zoo", hu: "Central Park Állatkert", ro: "Grădina Zoologică Central Park", en: "Central Park Zoo" },
    description: { de: "Ein kleiner Zoo im Herzen von Manhattan, New York City.", hu: "Egy kis állatkert Manhattan szívében, New York Cityben.", ro: "O mică grădină zoologică în inima Manhattan-ului, New York City.", en: "A small zoo in the heart of Manhattan, New York City." },
    facts: {
      de: ["Schneeleoparden", "Seelöwenbecken", "Tisch Family Children's Zoo"],
      hu: ["Hópárducok", "Fóka medence", "Tisch Családi Gyermekállatkert"],
      ro: ["Leoparzi de zăpadă", "Bazinul leilor de mare", "Grădina Zoologică pentru Copii Tisch"],
      en: ["Snow leopards", "Sea lion pool", "Tisch Family Children's Zoo"]
    }, image: "/poi-images/central-park-zoo-life-v2.webp"},
  {
    id: "napa-valley-vineyards-life-v2",
    type: "agriculture",
    parent: "US-CA",
    coords: [-122.458, 38.502],
    name: { de: "Napa Valley Weinberge", hu: "Napa-völgyi szőlőültetvények", ro: "Viile din Napa Valley", en: "Napa Valley Vineyards" },
    description: { de: "Weltberühmtes Weinanbaugebiet in Kalifornien, bekannt für seinen Cabernet Sauvignon.", hu: "Világhírű borvidék Kaliforniában, a Cabernet Sauvignonjáról ismert.", ro: "Regiune viticolă de renume mondial în California, cunoscută pentru Cabernet Sauvignon.", en: "World-famous wine region in California, known for its Cabernet Sauvignon." },
    facts: {
      de: ["Führend in der Weinproduktion", "Weinproben-Touren", "Malerische Landschaft"],
      hu: ["Vezető a bortermelésben", "Borkóstoló túrák", "Festői táj"],
      ro: ["Lider în producția de vin", "Tururi de degustare a vinurilor", "Peisaj pitoresc"],
      en: ["Leading in wine production", "Wine tasting tours", "Picturesque scenery"]
    }, image: "/poi-images/napa-valley-vineyards-life-v2.webp"},
  {
    id: "denali-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-AK",
    coords: [-151.007, 63.333],
    name: { de: "Denali-Nationalpark", hu: "Denali Nemzeti Park", ro: "Parcul Național Denali", en: "Denali National Park" },
    description: { de: "Heimat des höchsten Berges Nordamerikas und einer vielfältigen Tierwelt.", hu: "Észak-Amerika legmagasabb hegyének és változatos állatvilágának otthona.", ro: "Găzduiește cel mai înalt munte din America de Nord și o faună diversă.", en: "Home to North America's tallest peak and diverse wildlife." },
    facts: {
      de: ["Grizzlybären", "Karibus", "Wölfe"],
      hu: ["Grizzly medvék", "Karibuk", "Farkasok"],
      ro: ["Urși Grizzly", "Caribu", "Lupi"],
      en: ["Grizzly bears", "Caribou", "Wolves"]
    }, image: "/poi-images/denali-national-park-life-v2.webp"},
  {
    id: "cedar-point-amusement-park-life-v2",
    type: "kid-landmark",
    parent: "US-OH",
    coords: [-82.6835, 41.4823],
    name: { de: "Cedar Point", hu: "Cedar Point", ro: "Cedar Point", en: "Cedar Point" },
    description: { de: "Ein berühmter Vergnügungspark in Ohio, bekannt als 'Achterbahn-Hauptstadt der Welt'.", hu: "Híres vidámpark Ohióban, a 'Világ hullámvasút-fővárosa'-ként ismert.", ro: "Un faimos parc de distracții din Ohio, cunoscut ca 'Capitala Mondială a Roller Coasterelor'.", en: "A famous amusement park in Ohio, known as the 'Roller Coaster Capital of the World'." },
    facts: {
      de: ["Über 17 Achterbahnen", "Am Eriesee gelegen", "Millennium Force"],
      hu: ["Több mint 17 hullámvasút", "Az Erie-tó partján található", "Millennium Force"],
      ro: ["Peste 17 roller coastere", "Situat pe malul lacului Erie", "Millennium Force"],
      en: ["Over 17 roller coasters", "Located on Lake Erie", "Millennium Force"]
    }, image: "/poi-images/cedar-point-amusement-park-life-v2.webp"},
  {
    id: "california-central-valley-life-v2",
    type: "agriculture",
    parent: "US-CA",
    coords: [-120.9, 37.9],
    name: { de: "Kaliforniens Central Valley", hu: "Kaliforniai Central Valley", ro: "Valea Centrală a Californiei", en: "California's Central Valley" },
    description: { de: "Eine der produktivsten landwirtschaftlichen Regionen der Welt.", hu: "A világ egyik legtermékenyebb mezőgazdasági régiója.", ro: "Una dintre cele mai productive regiuni agricole din lume.", en: "One of the most productive agricultural regions in the world." },
    facts: {
      de: ["Anbau von Mandeln, Trauben, Baumwolle", "Wichtige Wasserressourcen", "Ernährt einen großen Teil der USA"],
      hu: ["Mandula, szőlő, gyapot termesztése", "Fontos vízkészletek", "Az USA nagy részét ellátja élelemmel"],
      ro: ["Cultivarea migdalelor, strugurilor, bumbacului", "Resurse de apă importante", "Hrănește o mare parte din SUA"],
      en: ["Grows almonds, grapes, cotton", "Important water resources", "Feeds a large portion of the US"]
    }, image: "/poi-images/california-central-valley-life-v2.webp"},
  {
    id: "bronx-zoo-life-v2",
    type: "kid-landmark",
    parent: "US-NY",
    coords: [-73.8771, 40.8506],
    name: { de: "Bronx Zoo", hu: "Bronx-i Állatkert", ro: "Grădina Zoologică Bronx", en: "Bronx Zoo" },
    description: { de: "Einer der größten städtischen Zoos der Welt, in New York City.", hu: "A világ egyik legnagyobb városi állatkertje, New York Cityben.", ro: "Una dintre cele mai mari grădini zoologice metropolitane din lume, în New York City.", en: "One of the largest metropolitan zoos in the world, located in New York City." },
    facts: {
      de: ["Über 6.000 Tiere", "Congo Gorilla Forest", "JungleWorld Ausstellung"],
      hu: ["Több mint 6000 állat", "Kongói Gorillaerdő", "JungleWorld kiállítás"],
      ro: ["Peste 6.000 de animale", "Pădurea Gorilelor din Congo", "Expoziția JungleWorld"],
      en: ["Over 6,000 animals", "Congo Gorilla Forest", "JungleWorld exhibit"]
    }, image: "/poi-images/bronx-zoo-life-v2.webp"},
  {
    id: "kansas-wheat-fields-life-v2",
    type: "agriculture",
    parent: "US-KS",
    coords: [-98.4842, 38.5111],
    name: { de: "Weizenfelder in Kansas", hu: "Kansas-i búzaföldek", ro: "Câmpiile de grâu din Kansas", en: "Kansas Wheat Fields" },
    description: { de: "Kansas ist einer der führenden Weizenproduzenten in den USA, oft als 'Brotkorb der Nation' bezeichnet.", hu: "Kansas az USA egyik vezető búzatermelője, gyakran a 'nemzet kenyereskosara'-ként emlegetik.", ro: "Kansas este unul dintre principalii producători de grâu din SUA, adesea numit 'Coșul de pâine al națiunii'.", en: "Kansas is one of the leading wheat-producing states in the US, often called the 'Breadbasket of the Nation'." },
    facts: {
      de: ["Führend in der Weizenproduktion", "Weite, offene Ebenen", "Wichtiger Teil der US-Landwirtschaft"],
      hu: ["Vezető a búzatermelésben", "Tágas, nyílt síkságok", "Az amerikai mezőgazdaság fontos része"],
      ro: ["Lider în producția de grâu", "Câmpii vaste și deschise", "Parte importantă a agriculturii americane"],
      en: ["Leading in wheat production", "Vast, open plains", "Vital part of US agriculture"]
    }, image: "/poi-images/kansas-wheat-fields-life-v2.webp"},
  {
    id: "glacier-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-MT",
    coords: [-113.7870, 48.7596],
    name: { de: "Glacier-Nationalpark", hu: "Glacier Nemzeti Park", ro: "Parcul Național Glacier", en: "Glacier National Park" },
    description: { de: "Bekannt für seine spektakulären Gletscher und die reiche Tierwelt, einschließlich Bergziegen.", hu: "Híres látványos gleccsereiről és gazdag állatvilágáról, beleértve a hegyi kecskéket.", ro: "Cunoscut pentru ghețarii săi spectaculoși și fauna bogată, inclusiv capre de munte.", en: "Known for its spectacular glaciers and abundant wildlife, including mountain goats." },
    facts: {
      de: ["Going-to-the-Sun Road", "Bergziegen", "Grizzlybären"],
      hu: ["Going-to-the-Sun út", "Hegyi kecskék", "Grizzly medvék"],
      ro: ["Șoseaua Going-to-the-Sun", "Capre de munte", "Urși Grizzly"],
      en: ["Going-to-the-Sun Road", "Mountain goats", "Grizzly bears"]
    }, image: "/poi-images/glacier-national-park-life-v2.webp"},
  {
    id: "hersheypark-life-v2",
    type: "kid-landmark",
    parent: "US-PA",
    coords: [-76.6546, 40.2889],
    name: { de: "Hersheypark", hu: "Hersheypark", ro: "Hersheypark", en: "Hersheypark" },
    description: { de: "Ein Freizeitpark in Hershey, Pennsylvania, basierend auf den berühmten Schokoladenprodukten.", hu: "Egy vidámpark Hershey-ben, Pennsylvaniában, a híres csokoládétermékek alapján.", ro: "Un parc tematic în Hershey, Pennsylvania, bazat pe faimoasele produse de ciocolată.", en: "A theme park in Hershey, Pennsylvania, based on the famous chocolate products." },
    facts: {
      de: ["Schokoladen-Thema", "Achterbahnen", "Wasserpark"],
      hu: ["Csokoládé téma", "Hullámvasutak", "Vizi park"],
      ro: ["Tematică de ciocolată", "Roller coastere", "Parc acvatic"],
      en: ["Chocolate-themed", "Roller coasters", "Water park"]
    }, image: "/poi-images/hersheypark-life-v2.webp"},
  {
    id: "idaho-potato-farms-life-v2",
    type: "agriculture",
    parent: "US-ID",
    coords: [-112.4426, 43.7915],
    name: { de: "Kartoffelfarmen in Idaho", hu: "Idahói burgonyafarmok", ro: "Fermele de cartofi din Idaho", en: "Idaho Potato Farms" },
    description: { de: "Idaho ist berühmt für seinen Kartoffelanbau, der einen großen Teil der US-Produktion ausmacht.", hu: "Idaho híres burgonyatermesztéséről, amely az amerikai termelés nagy részét adja.", ro: "Idaho este renumit pentru cultivarea cartofilor, care reprezintă o mare parte din producția SUA.", en: "Idaho is famous for its potato cultivation, which accounts for a large portion of US production." },
    facts: {
      de: ["Berühmt für Russet-Kartoffeln", "Führender Produzent in den USA", "Idaho Potato Museum"],
      hu: ["Híres a Russet burgonyáról", "Vezető termelő az USA-ban", "Idahói Burgonyamúzeum"],
      ro: ["Faimos pentru cartofii Russet", "Producător de top în SUA", "Muzeul Cartofului din Idaho"],
      en: ["Famous for Russet potatoes", "Leading producer in the US", "Idaho Potato Museum"]
    }, image: "/poi-images/idaho-potato-farms-life-v2.webp"},
  {
    id: "monterey-bay-aquarium-life-v2",
    type: "kid-landmark",
    parent: "US-CA",
    coords: [-121.9026, 36.6183],
    name: { de: "Monterey Bay Aquarium", hu: "Monterey Bay Akvárium", ro: "Acvariul din Monterey Bay", en: "Monterey Bay Aquarium" },
    description: { de: "Ein berühmtes Aquarium in Kalifornien, bekannt für seine Meeresotter und den Kelpwald.", hu: "Híres akvárium Kaliforniában, tengeri vidráiról és hínárerdőjéről ismert.", ro: "Un acvariu renumit în California, cunoscut pentru vidrele de mare și pădurea de kelp.", en: "A renowned aquarium in California, known for its sea otters and kelp forest." },
    facts: {
      de: ["Meeresotter-Programm", "Kelpwald-Ausstellung", "Fokus auf Meeresschutz"],
      hu: ["Tengeri vidra program", "Hínárerdő kiállítás", "Fókusz a tengeri védelemre"],
      ro: ["Programul vidrelor de mare", "Expoziția pădurii de kelp", "Concentrat pe conservarea marină"],
      en: ["Sea otter program", "Kelp forest exhibit", "Focus on ocean conservation"]
    }, image: "/poi-images/monterey-bay-aquarium-life-v2.webp"},
  {
    id: "olympic-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-WA",
    coords: [-123.604, 47.802],
    name: { de: "Olympic-Nationalpark", hu: "Olympic Nemzeti Park", ro: "Parcul Național Olympic", en: "Olympic National Park" },
    description: { de: "Ein vielfältiger Park mit Regenwäldern, Bergen und einer Pazifikküste.", hu: "Változatos park esőerdőkkel, hegyekkel és csendes-óceáni partvidékkel.", ro: "Un parc divers cu păduri tropicale, munți și o coastă la Pacific.", en: "A diverse park with rainforests, mountains, and a Pacific coastline." },
    facts: {
      de: ["Hoh-Regenwald", "Roosevelt-Wapitis", "Pazifikküste"],
      hu: ["Hoh esőerdő", "Roosevelt-vapiti", "Csendes-óceáni partvidék"],
      ro: ["Pădurea tropicală Hoh", "Cerbul Roosevelt", "Coasta Pacificului"],
      en: ["Hoh Rainforest", "Roosevelt elk", "Pacific coastline"]
    }, image: "/poi-images/olympic-national-park-life-v2.webp"},
  {
    id: "florida-citrus-groves-life-v2",
    type: "agriculture",
    parent: "US-FL",
    coords: [-81.5, 28.5],
    name: { de: "Zitrusplantagen in Florida", hu: "Floridai citrusligetek", ro: "Livezile de citrice din Florida", en: "Florida Citrus Groves" },
    description: { de: "Florida ist ein führender Produzent von Zitrusfrüchten, insbesondere Orangen.", hu: "Florida a citrusfélék, különösen a narancs vezető termelője.", ro: "Florida este un producător de top de citrice, în special portocale.", en: "Florida is a leading producer of citrus fruits, especially oranges." },
    facts: {
      de: ["Berühmt für Orangensaft", "Indian River Zitrusfrüchte", "Wichtiger Wirtschaftszweig"],
      hu: ["Híres a narancsléről", "Indian River citrusfélék", "Fontos gazdasági ág"],
      ro: ["Faimos pentru sucul de portocale", "Citricele Indian River", "Ramură economică importantă"],
      en: ["Famous for orange juice", "Indian River citrus", "Major economic sector"]
    }, image: "/poi-images/florida-citrus-groves-life-v2.webp"},
  {
    id: "shedd-aquarium-chicago-life-v2",
    type: "kid-landmark",
    parent: "US-IL",
    coords: [-87.6139, 41.8676],
    name: { de: "Shedd Aquarium", hu: "Shedd Akvárium", ro: "Acvariul Shedd", en: "Shedd Aquarium" },
    description: { de: "Ein großes Indoor-Aquarium in Chicago mit Tieren aus der ganzen Welt.", hu: "Nagy beltéri akvárium Chicagóban, állatokkal a világ minden tájáról.", ro: "Un mare acvariu interior în Chicago, cu animale din întreaga lume.", en: "A large indoor aquarium in Chicago, featuring animals from around the world." },
    facts: {
      de: ["Belugawale", "Amazon Rising Ausstellung", "Karibisches Riff"],
      hu: ["Beluga bálnák", "Amazon Rising kiállítás", "Karibi zátony"],
      ro: ["Balene Beluga", "Expoziția Amazon Rising", "Reciful Caraibelor"],
      en: ["Beluga whales", "Amazon Rising exhibit", "Caribbean Reef"]
    }, image: "/poi-images/shedd-aquarium-chicago-life-v2.webp"},
  {
    id: "rocky-mountain-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-CO",
    coords: [-105.6836, 40.3428],
    name: { de: "Rocky-Mountain-Nationalpark", hu: "Sziklás-hegység Nemzeti Park", ro: "Parcul Național Rocky Mountain", en: "Rocky Mountain National Park" },
    description: { de: "Spektakuläre Berglandschaft mit vielfältiger Tierwelt, darunter Dickhornschafe.", hu: "Látványos hegyvidéki táj változatos állatvilággal, köztük vastagszarvú juhokkal.", ro: "Peisaj montan spectaculos cu o faună diversă, inclusiv oi bighorn.", en: "Spectacular mountain landscape with diverse wildlife, including bighorn sheep." },
    facts: {
      de: ["Trail Ridge Road", "Dickhornschafe", "Elche"],
      hu: ["Trail Ridge út", "Vastagszarvú juhok", "Jávorszarvasok"],
      ro: ["Șoseaua Trail Ridge", "Oi Bighorn", "Elani"],
      en: ["Trail Ridge Road", "Bighorn sheep", "Elk"]
    }, image: "/poi-images/rocky-mountain-national-park-life-v2.webp"},
  {
    id: "wisconsin-dairy-farms-life-v2",
    type: "agriculture",
    parent: "US-WI",
    coords: [-89.6385, 44.7863],
    name: { de: "Milchfarmen in Wisconsin", hu: "Wisconsini tejgazdaságok", ro: "Fermele de lactate din Wisconsin", en: "Wisconsin Dairy Farms" },
    description: { de: "Wisconsin ist als 'Amerikas Milchland' bekannt und führend in der Käseproduktion.", hu: "Wisconsin 'Amerika tejtermő vidéke'-ként ismert és vezető a sajtgyártásban.", ro: "Wisconsin este cunoscut ca 'Tărâmul Lactatelor al Americii' și este lider în producția de brânză.", en: "Wisconsin is known as 'America's Dairyland' and is a leader in cheese production." },
    facts: {
      de: ["Führend in der Käseproduktion", "Über 9.000 Milchfarmen", "Symbol der Landwirtschaft im Mittleren Westen"],
      hu: ["Vezető a sajtgyártásban", "Több mint 9000 tejgazdaság", "A középnyugati mezőgazdaság szimbóluma"],
      ro: ["Lider în producția de brânză", "Peste 9.000 de ferme de lactate", "Simbol al agriculturii din Midwest"],
      en: ["Leader in cheese production", "Over 9,000 dairy farms", "Symbol of Midwest agriculture"]
    }, image: "/poi-images/wisconsin-dairy-farms-life-v2.webp"},
  {
    id: "legoland-california-life-v2",
    type: "kid-landmark",
    parent: "US-CA",
    coords: [-117.211, 33.126],
    name: { de: "Legoland Kalifornien", hu: "Legoland Kalifornia", ro: "Legoland California", en: "Legoland California" },
    description: { de: "Ein Freizeitpark in Carlsbad, Kalifornien, der auf Lego-Steinen basiert.", hu: "Egy vidámpark Carlsbadban, Kaliforniában, amely a Lego kockákon alapul.", ro: "Un parc tematic în Carlsbad, California, bazat pe cărămizile Lego.", en: "A theme park in Carlsbad, California, based on Lego bricks." },
    facts: {
      de: ["Miniland USA", "Lego-Modelle", "Fahrgeschäfte und Shows"],
      hu: ["Miniland USA", "Lego modellek", "Játékok és bemutatók"],
      ro: ["Miniland USA", "Modele Lego", "Atracții și spectacole"],
      en: ["Miniland USA", "Lego models", "Rides and shows"]
    }, image: "/poi-images/legoland-california-life-v2.webp"},
  {
    id: "grand-teton-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-WY",
    coords: [-110.6817, 43.7904],
    name: { de: "Grand-Teton-Nationalpark", hu: "Grand Teton Nemzeti Park", ro: "Parcul Național Grand Teton", en: "Grand Teton National Park" },
    description: { de: "Atemberaubende Bergkette und reiche Tierwelt südlich von Yellowstone.", hu: "Lélegzetelállító hegyvonulat és gazdag állatvilág a Yellowstone-tól délre.", ro: "Lanț montan uimitor și faună bogată la sud de Yellowstone.", en: "Stunning mountain range and rich wildlife south of Yellowstone." },
    facts: {
      de: ["Teton Range", "Schwimmende Elche", "Jackson Lake"],
      hu: ["Teton-hegység", "Úszó jávorszarvasok", "Jackson-tó"],
      ro: ["Munții Teton", "Elani înotând", "Lacul Jackson"],
      en: ["Teton Range", "Swimming moose", "Jackson Lake"]
    }, image: "/poi-images/grand-teton-national-park-life-v2.webp"},
  {
    id: "georgia-peach-orchards-life-v2",
    type: "agriculture",
    parent: "US-GA",
    coords: [-83.8, 32.7],
    name: { de: "Pfirsichplantagen in Georgia", hu: "Georgiai őszibarack-ültetvények", ro: "Livezile de piersici din Georgia", en: "Georgia Peach Orchards" },
    description: { de: "Georgia, bekannt als der 'Peach State', ist berühmt für seine süßen und saftigen Pfirsiche.", hu: "Georgia, az 'őszibarack állam', híres édes és lédús őszibarackjairól.", ro: "Georgia, cunoscută ca 'Statul Piersicilor', este renumită pentru piersicile sale dulci și zemoase.", en: "Georgia, known as the 'Peach State', is famous for its sweet and juicy peaches." },
    facts: {
      de: ["Offizielle Staatsfrucht", "Jährliches Pfirsichfest", "Wichtiger Agrarsektor"],
      hu: ["Hivatalos állami gyümölcs", "Éves őszibarack fesztivál", "Fontos mezőgazdasági ágazat"],
      ro: ["Fructul oficial al statului", "Festivalul anual al piersicilor", "Sector agricol important"],
      en: ["Official state fruit", "Annual Peach Festival", "Important agricultural sector"]
    }, image: "/poi-images/georgia-peach-orchards-life-v2.webp"},
  {
    id: "seaworld-orlando-life-v2",
    type: "kid-landmark",
    parent: "US-FL",
    coords: [-81.462, 28.411],
    name: { de: "SeaWorld Orlando", hu: "SeaWorld Orlando", ro: "SeaWorld Orlando", en: "SeaWorld Orlando" },
    description: { de: "Ein Themenpark und Meeres-Zoo in Orlando, Florida.", hu: "Egy vidámpark és tengeri állatkert Orlandóban, Floridában.", ro: "Un parc tematic și o grădină zoologică marină în Orlando, Florida.", en: "A theme park and marine zoological park in Orlando, Florida." },
    facts: {
      de: ["Orca-Shows", "Achterbahnen", "Meerestierschutz"],
      hu: ["Orka bemutatók", "Hullámvasutak", "Tengeri állatvédelem"],
      ro: ["Spectacole cu orci", "Roller coastere", "Conservarea vieții marine"],
      en: ["Orca shows", "Roller coasters", "Marine animal conservation"]
    }, image: "/poi-images/seaworld-orlando-life-v2.webp"},
  {
    id: "zion-national-park-life-v2",
    type: "animal-habitat",
    parent: "US-UT",
    coords: [-113.0263, 37.2982],
    name: { de: "Zion-Nationalpark", hu: "Zion Nemzeti Park", ro: "Parcul Național Zion", en: "Zion National Park" },
    description: { de: "Bekannt für seine steilen roten Klippen und die vielfältige Tierwelt.", hu: "Híres meredek vörös szikláiról és változatos állatvilágáról.", ro: "Cunoscut pentru stâncile sale roșii abrupte și fauna diversă.", en: "Known for its steep red cliffs and diverse wildlife." },
    facts: {
      de: ["The Narrows Wanderung", "Angels Landing", "Wüstendickhornschafe"],
      hu: ["The Narrows túra", "Angels Landing", "Sivatagi vastagszarvú juhok"],
      ro: ["Drumeția The Narrows", "Angels Landing", "Oi bighorn de deșert"],
      en: ["The Narrows hike", "Angels Landing", "Desert bighorn sheep"]
    }, image: "/poi-images/zion-national-park-life-v2.webp"},
  {
    id: "iowa-corn-fields-life-v2",
    type: "agriculture",
    parent: "US-IA",
    coords: [-93.0977, 41.8780],
    name: { de: "Maisfelder in Iowa", hu: "Iowai kukoricaföldek", ro: "Câmpiile de porumb din Iowa", en: "Iowa Corn Fields" },
    description: { de: "Iowa ist der führende Maisproduzent in den USA und ein Herzstück des Corn Belt.", hu: "Iowa az USA vezető kukoricatermelője és a Kukoricaöv központi része.", ro: "Iowa este principalul producător de porumb din SUA și o piesă centrală a Centurii Porumbului.", en: "Iowa is the leading corn producer in the US and a centerpiece of the Corn Belt." },
    facts: {
      de: ["Größter Maisproduzent der USA", "Wichtig für Ethanol und Viehfutter", "Charakteristische Landschaft des Mittleren Westens"],
      hu: ["Az USA legnagyobb kukoricatermelője", "Fontos az etanol és az állati takarmány szempontjából", "A Közép-Nyugat jellegzetes tája"],
      ro: ["Cel mai mare producător de porumb din SUA", "Important pentru etanol și furaje", "Peisaj caracteristic al Midwest-ului"],
      en: ["Largest corn producer in the US", "Important for ethanol and livestock feed", "Iconic Midwest landscape"]
    }, image: "/poi-images/iowa-corn-fields-life-v2.webp"},
  {
    id: "busch-gardens-tampa-bay-life-v2",
    type: "kid-landmark",
    parent: "US-FL",
    coords: [-82.419, 28.036],
    name: { de: "Busch Gardens Tampa Bay", hu: "Busch Gardens Tampa Bay", ro: "Busch Gardens Tampa Bay", en: "Busch Gardens Tampa Bay" },
    description: { de: "Ein Themenpark mit afrikanischem Thema und einer der größten Zoos in Nordamerika.", hu: "Afrikai témájú vidámpark és Észak-Amerika egyik legnagyobb állatkertje.", ro: "Un parc tematic cu tematică africană și una dintre cele mai mari grădini zoologice din America de Nord.", en: "An African-themed theme park and one of the largest zoos in North America." },
    facts: {
      de: ["Serengeti Safari", "Spannende Achterbahnen", "Über 200 Tierarten"],
      hu: ["Serengeti Szafari", "Izgalmas hullámvasutak", "Több mint 200 állatfaj"],
      ro: ["Safari Serengeti", "Roller coastere palpitante", "Peste 200 de specii de animale"],
      en: ["Serengeti Safari", "Thrilling roller coasters", "Over 200 species of animals"]
    }, image: "/poi-images/busch-gardens-tampa-bay-life-v2.webp"},
  {
    id: "great-smoky-mountains-life-v2",
    type: "animal-habitat",
    parent: "US-TN",
    coords: [-83.507, 35.611],
    name: { de: "Great-Smoky-Mountains-Nationalpark", hu: "Great Smoky Mountains Nemzeti Park", ro: "Parcul Național Great Smoky Mountains", en: "Great Smoky Mountains National Park" },
    description: { de: "Der meistbesuchte Nationalpark in den USA, bekannt für seine Artenvielfalt.", hu: "Az USA leglátogatottabb nemzeti parkja, ismert biológiai sokféleségéről.", ro: "Cel mai vizitat parc național din SUA, cunoscut pentru biodiversitatea sa.", en: "The most visited national park in the US, known for its biodiversity." },
    facts: {
      de: ["Schwarzbären", "Synchronleuchtkäfer", "Cades Cove"],
      hu: ["Fekete medvék", "Szinkronban világító szentjánosbogarak", "Cades Cove"],
      ro: ["Urși negri", "Licurici sincroni", "Cades Cove"],
      en: ["Black bears", "Synchronous fireflies", "Cades Cove"]
    }, image: "/poi-images/great-smoky-mountains-life-v2.webp"},
  {
    id: "washington-apple-orchards-life-v2",
    type: "agriculture",
    parent: "US-WA",
    coords: [-120.7, 47.5],
    name: { de: "Apfelplantagen in Washington", hu: "Washingtoni almakertek", ro: "Livezile de mere din Washington", en: "Washington Apple Orchards" },
    description: { de: "Der Staat Washington ist der größte Apfelproduzent in den Vereinigten Staaten.", hu: "Washington állam a legnagyobb almatermelő az Egyesült Államokban.", ro: "Statul Washington este cel mai mare producător de mere din Statele Unite.", en: "The state of Washington is the largest apple producer in the United States." },
    facts: {
      de: ["Berühmt für Red Delicious", "Über die Hälfte der US-Produktion", "Apfelblütenfest"],
      hu: ["Híres a Red Delicious fajtáról", "Az amerikai termelés több mint fele", "Almafavirág fesztivál"],
      ro: ["Faimos pentru Red Delicious", "Peste jumătate din producția SUA", "Festivalul florilor de măr"],
      en: ["Famous for Red Delicious", "Over half of US production", "Apple Blossom Festival"]
    }, image: "/poi-images/washington-apple-orchards-life-v2.webp"},
  {
    id: "knott-s-berry-farm-life-v2",
    type: "kid-landmark",
    parent: "US-CA",
    coords: [-117.998, 33.844],
    name: { de: "Knott's Berry Farm", hu: "Knott's Berry Farm", ro: "Knott's Berry Farm", en: "Knott's Berry Farm" },
    description: { de: "Einer der ältesten Freizeitparks in den USA, ursprünglich eine Beerenfarm.", hu: "Az USA egyik legrégebbi vidámparkja, eredetileg egy bogyós gyümölcsfarm.", ro: "Unul dintre cele mai vechi parcuri tematice din SUA, inițial o fermă de fructe de pădure.", en: "One of the oldest theme parks in the US, originally a berry farm." },
    facts: {
      de: ["Wildwest-Thema", "Boysenberry-Festival", "GhostRider-Achterbahn"],
      hu: ["Vadnyugati téma", "Boysenberry fesztivál", "GhostRider hullámvasút"],
      ro: ["Tematică de Vest Sălbatic", "Festivalul Boysenberry", "Roller coasterul GhostRider"],
      en: ["Old West theme", "Boysenberry Festival", "GhostRider roller coaster"]
    }
  }
];

