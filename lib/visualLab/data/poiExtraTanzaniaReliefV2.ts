// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraTanzaniaReliefV2: POI[] = [
  {
    id: "kilimanjaro-relief-v2",
    type: "mountain",
    parent: "TZ-05",
    coords: [37.3556, -3.0674],
    name: { de: "Kilimandscharo", hu: "Kilimandzsáró", ro: "Kilimanjaro", en: "Kilimanjaro" },
    description: { de: "Der höchste Berg Afrikas mit drei Vulkanzentren.", hu: "Afrika legmagasabb hegye, három vulkáni központtal.", ro: "Cel mai înalt munte din Africa, având trei centre vulcanice.", en: "The highest mountain in Africa with three volcanic centers." },
    facts: {
      de: ["Höhe: 5895 Meter", "Schlafender Vulkan", "Ewiger Schnee", "UNESCO-Welterbe"],
      hu: ["Magasság: 5895 méter", "Szunnyadó vulkán", "Örök hó", "UNESCO Világörökség"],
      ro: ["Înălțime: 5895 metri", "Vulcan latent", "Zăpadă eternă", "Patrimoniul Mondial UNESCO"],
      en: ["Height: 5895 meters", "Dormant volcano", "Eternal snow", "UNESCO World Heritage Site"]
    }, image: "/poi-images/kilimanjaro-relief-v2.webp"},
  {
    id: "mount-meru-relief-v2",
    type: "mountain",
    parent: "TZ-05",
    coords: [36.7500, -3.2200],
    name: { de: "Mount Meru", hu: "Meru-hegy", ro: "Muntele Meru", en: "Mount Meru" },
    description: { de: "Ein aktiver Schichtvulkan nahe Arusha.", hu: "Aktív rétegvulkán Arusha közelében.", ro: "Un vulcan stratificat activ situat lângă Arusha.", en: "An active stratovolcano located near Arusha." },
    facts: {
      de: ["Höhe: 4566 Meter", "Zweitgrößter Berg Tansanias", "Arusha-Nationalpark", "Kraterrand"],
      hu: ["Magasság: 4566 méter", "Tanzánia második legnagyobb hegye", "Arusha Nemzeti Park", "Krater-perem"],
      ro: ["Înălțime: 4566 metri", "Al doilea cel mai mare munte din Tanzania", "Parcul Național Arusha", "Marginea craterului"],
      en: ["Height: 4566 meters", "Second tallest mountain in Tanzania", "Arusha National Park", "Crater rim"]
    }, image: "/poi-images/mount-meru-relief-v2.webp"},
  {
    id: "ngorongoro-crater-relief-v2",
    type: "relief",
    parent: "TZ-07",
    coords: [35.5800, -3.1500],
    name: { de: "Ngorongoro-Krater", hu: "Ngorongoro-kráter", ro: "Craterul Ngorongoro", en: "Ngorongoro Crater" },
    description: { de: "Eine riesige vulkanische Caldera in der Serengeti-Region.", hu: "Hatalmas vulkanikus kaldera a Serengeti régióban.", ro: "O calderă vulcanică imensă în regiunea Serengeti.", en: "A massive volcanic caldera in the Serengeti region." },
    facts: {
      de: ["Durchmesser: 20 Kilometer", "UNESCO-Welterbe", "Höhe: 2300 Meter", "Ökosystem"],
      hu: ["Átmérő: 20 kilométer", "UNESCO Világörökség", "Magasság: 2300 méter", "Ökoszisztéma"],
      ro: ["Diametru: 20 kilometri", "Patrimoniul Mondial UNESCO", "Înălțime: 2300 metri", "Ecosistem"],
      en: ["Diameter: 20 kilometers", "UNESCO World Heritage Site", "Height: 2300 meters", "Ecosystem"]
    }, image: "/poi-images/ngorongoro-crater-relief-v2.webp"},
  {
    id: "uluguru-mountains-relief-v2",
    type: "mountain",
    parent: "TZ-06",
    coords: [37.6667, -7.1667],
    name: { de: "Uluguru-Gebirge", hu: "Uluguru-hegység", ro: "Munții Uluguru", en: "Uluguru Mountains" },
    description: { de: "Ein Gebirgszug, der Teil der Eastern Arc Mountains ist.", hu: "Az Eastern Arc Mountains részét képező hegység.", ro: "Un lanț muntos care face parte din Munții Eastern Arc.", en: "A mountain range that is part of the Eastern Arc Mountains." },
    facts: {
      de: ["Eastern Arc Mountains", "Regenwald", "Biodiversität", "Höhe: bis 2630m"],
      hu: ["Eastern Arc hegység", "Esőerdő", "Biodiverzitás", "Magasság: 2630m-ig"],
      ro: ["Munții Eastern Arc", "Pădure tropicală", "Biodiversitate", "Înălțime: până la 2630m"],
      en: ["Eastern Arc Mountains", "Rainforest", "Biodiversity", "Height: up to 2630m"]
    }, image: "/poi-images/uluguru-mountains-relief-v2.webp"},
  {
    id: "udzungwa-mountains-relief-v2",
    type: "mountain",
    parent: "TZ-17",
    coords: [35.9000, -7.8333],
    name: { de: "Udzungwa-Gebirge", hu: "Udzungwa-hegység", ro: "Munții Udzungwa", en: "Udzungwa Mountains" },
    description: { de: "Ein Teil der Eastern Arc Mountains mit hoher endemischer Artenvielfalt.", hu: "Az Eastern Arc Mountains része, magas endemikus fajgazdagsággal.", ro: "O parte din Munții Eastern Arc, cu o biodiversitate endemică ridicată.", en: "A part of the Eastern Arc Mountains with high endemic biodiversity." },
    facts: {
      de: ["Udzungwa-Mountains-Nationalpark", "Eastern Arc", "Regenwald", "Große Artenvielfalt"],
      hu: ["Udzungwa Nemzeti Park", "Eastern Arc", "Esőerdő", "Nagy fajgazdagság"],
      ro: ["Parcul Național Udzungwa", "Eastern Arc", "Pădure tropicală", "Biodiversitate mare"],
      en: ["Udzungwa National Park", "Eastern Arc", "Rainforest", "High biodiversity"]
    }, image: "/poi-images/udzungwa-mountains-relief-v2.webp"},
  {
    id: "usambara-mountains-relief-v2",
    type: "mountain",
    parent: "TZ-26",
    coords: [38.3333, -4.7500],
    name: { de: "Usambara-Gebirge", hu: "Usambara-hegység", ro: "Munții Usambara", en: "Usambara Mountains" },
    description: { de: "Ein weiteres Massiv der Eastern Arc Mountains im Nordosten.", hu: "Az Eastern Arc Mountains újabb masszívuma északkeleten.", ro: "Un alt masiv al Munților Eastern Arc în nord-est.", en: "Another massif of the Eastern Arc Mountains in the northeast." },
    facts: {
      de: ["Eastern Arc", "Teeanbau", "Wälder", "Höhe bis 2440m"],
      hu: ["Eastern Arc", "Teatermesztés", "Erdők", "Magasság 2440m-ig"],
      ro: ["Eastern Arc", "Cultivarea ceaiului", "Păduri", "Înălțime până la 2440m"],
      en: ["Eastern Arc", "Tea cultivation", "Forests", "Height up to 2440m"]
    }, image: "/poi-images/usambara-mountains-relief-v2.webp"},
  {
    id: "ruaha-river-valley-relief-v2",
    type: "relief",
    parent: "TZ-17",
    coords: [34.5000, -7.5000],
    name: { de: "Ruaha-Tal", hu: "Ruaha-völgy", ro: "Valea Ruaha", en: "Ruaha Valley" },
    description: { de: "Ein bedeutendes Flusstal, das den Ruaha-Nationalpark durchfließt.", hu: "Jelentős folyóvölgy, amely átfolyik a Ruaha Nemzeti Parkon.", ro: "O vale fluvial semnificativă care traversează Parcul Național Ruaha.", en: "A significant river valley flowing through Ruaha National Park." },
    facts: {
      de: ["Großer Ruaha-Fluss", "Wildtierkorridor", "Nationalpark", "Trockenzeit"],
      hu: ["Nagy-Ruaha folyó", "Vadvilág-folyosó", "Nemzeti Park", "Szárazság"],
      ro: ["Râul Mare Ruaha", "Coridor pentru animale sălbatice", "Parc Național", "Sezon secetos"],
      en: ["Great Ruaha River", "Wildlife corridor", "National Park", "Dry season"]
    }, image: "/poi-images/ruaha-river-valley-relief-v2.webp"},
  {
    id: "kilombero-valley-relief-v2",
    type: "relief",
    parent: "TZ-17",
    coords: [36.2500, -8.3333],
    name: { de: "Kilombero-Tal", hu: "Kilombero-völgy", ro: "Valea Kilombero", en: "Kilombero Valley" },
    description: { de: "Ein riesiges Feuchtgebiet und Überschwemmungsgebiet.", hu: "Hatalmas vizes élőhely és ártéri terület.", ro: "O zonă umedă imensă și o câmpie inundabilă.", en: "A vast wetland and floodplain area." },
    facts: {
      de: ["Überschwemmungsgebiet", "Reisanbau", "Ökosystem", "Biodiversität"],
      hu: ["Ártér", "Rizstermesztés", "Ökoszisztéma", "Biodiverzitás"],
      ro: ["Câmpie inundabilă", "Cultivarea orezului", "Ecosistem", "Biodiversitate"],
      en: ["Floodplain", "Rice cultivation", "Ecosystem", "Biodiversity"]
    }, image: "/poi-images/kilombero-valley-relief-v2.webp"},
  {
    id: "pangani-river-basin-relief-v2",
    type: "relief",
    parent: "TZ-08",
    coords: [38.2500, -5.4167],
    name: { de: "Pangani-Becken", hu: "Pangani-medence", ro: "Bazinul Pangani", en: "Pangani River Basin" },
    description: { de: "Ein wichtiges Flusseinzugsgebiet zwischen Kilimandscharo und Indischem Ozean.", hu: "Fontos folyóvízgyűjtő terület a Kilimandzsáró és az Indiai-óceán között.", ro: "O zonă hidrografică importantă între Kilimanjaro și Oceanul Indian.", en: "An important river drainage basin between Kilimanjaro and the Indian Ocean." },
    facts: {
      de: ["Pangani-Fluss", "Landwirtschaft", "Energie", "Hydrologie"],
      hu: ["Pangani folyó", "Mezőgazdaság", "Energia", "Hidrológia"],
      ro: ["Râul Pangani", "Agricultură", "Energie", "Hidrologie"],
      en: ["Pangani River", "Agriculture", "Energy", "Hydrology"]
    }, image: "/poi-images/pangani-river-basin-relief-v2.webp"},
  {
    id: "great-rift-valley-relief-v2",
    type: "relief",
    parent: "TZ-26",
    coords: [35.0000, -5.0000],
    name: { de: "Großer Afrikanischer Grabenbruch", hu: "Kelet-afrikai árokrendszer", ro: "Marele Rift Est-African", en: "Great Rift Valley" },
    description: { de: "Der östliche Ast des Grabenbruchs durchquert Tansania.", hu: "Az árokrendszer keleti ága átszeli Tanzániát.", ro: "Ramura estică a riftului traversează Tanzania.", en: "The eastern branch of the Rift Valley crosses Tanzania." },
    facts: {
      de: ["Grabenbruch", "Vulkanismus", "Seen", "Geologie"],
      hu: ["Árokrendszer", "Vulkanizmus", "Tavak", "Geológia"],
      ro: ["Rift", "Vulcanism", "Lacuri", "Geologie"],
      en: ["Rift Valley", "Volcanism", "Lakes", "Geology"]
    }, image: "/poi-images/great-rift-valley-relief-v2.webp"},
  {
    id: "lake-eyasi-basin-relief-v2",
    type: "relief",
    parent: "TZ-07",
    coords: [34.8000, -3.6000],
    name: { de: "Eyasi-See-Becken", hu: "Eyasi-tó medence", ro: "Bazinul lacului Eyasi", en: "Lake Eyasi Basin" },
    description: { de: "Ein alkalischer Salzsee im Grabenbruch.", hu: "Sós, lúgos tó az árokrendszerben.", ro: "Un lac sărat alcalin în Rift Valley.", en: "An alkaline salt lake in the Rift Valley." },
    facts: {
      de: ["Salzsee", "Grabenbruch", "Hadza-Volk", "Wüste"],
      hu: ["Sóstó", "Árokrendszer", "Hadza nép", "Sivatag"],
      ro: ["Lac sărat", "Rift Valley", "Poporul Hadza", "Deșert"],
      en: ["Salt lake", "Rift Valley", "Hadza people", "Desert"]
    }
  },
  {
    id: "lake-natron-basin-relief-v2",
    type: "relief",
    parent: "TZ-07",
    coords: [36.0000, -2.4167],
    name: { de: "Natron-See-Becken", hu: "Natron-tó medence", ro: "Bazinul lacului Natron", en: "Lake Natron Basin" },
    description: { de: "Ein extrem alkalischer See nahe der kenianischen Grenze.", hu: "Extrém lúgos tó a kenyai határ közelében.", ro: "Un lac extrem de alcalin lângă granița cu Kenya.", en: "An extremely alkaline lake near the Kenyan border." },
    facts: {
      de: ["Alkalisch", "Flamingos", "Vulkan Ol Doinyo Lengai", "Hitze"],
      hu: ["Lúgos", "Flamingók", "Ol Doinyo Lengai vulkán", "Hőség"],
      ro: ["Alcalin", "Flamingo", "Vulcanul Ol Doinyo Lengai", "Căldură"],
      en: ["Alkaline", "Flamingos", "Ol Doinyo Lengai volcano", "Heat"]
    }, image: "/poi-images/lake-natron-basin-relief-v2.webp"},
  {
    id: "ol-doinyo-lengai-relief-v2",
    type: "mountain",
    parent: "TZ-07",
    coords: [35.9139, -2.7569],
    name: { de: "Ol Doinyo Lengai", hu: "Ol Doinyo Lengai", ro: "Ol Doinyo Lengai", en: "Ol Doinyo Lengai" },
    description: { de: "Ein einzigartiger aktiver Vulkan mit Natrokarbonatit-Lava.", hu: "Egyedülálló aktív vulkán, natrokarbonátit lávával.", ro: "Un vulcan activ unic cu lavă natrocarbonatită.", en: "A unique active volcano with natrocarbonatite lava." },
    facts: {
      de: ["Aktiver Vulkan", "Einzigartige Lava", "Heiliger Berg der Massai", "Höhe 2962m"],
      hu: ["Aktív vulkán", "Egyedi láva", "Maszájok szent hegye", "Magasság 2962m"],
      ro: ["Vulcan activ", "Lavă unică", "Muntele sacru al maasailor", "Înălțime 2962m"],
      en: ["Active volcano", "Unique lava", "Maasai sacred mountain", "Height 2962m"]
    }, image: "/poi-images/ol-doinyo-lengai-relief-v2.webp"},
  {
    id: "pare-mountains-relief-v2",
    type: "mountain",
    parent: "TZ-08",
    coords: [37.7500, -3.7500],
    name: { de: "Pare-Gebirge", hu: "Pare-hegység", ro: "Munții Pare", en: "Pare Mountains" },
    description: { de: "Ein Teil der Eastern Arc Mountains im Norden.", hu: "Az Eastern Arc Mountains része északon.", ro: "O parte din Munții Eastern Arc în nord.", en: "A part of the Eastern Arc Mountains in the north." },
    facts: {
      de: ["Eastern Arc", "Regenwald", "Berge", "Trockengebiet"],
      hu: ["Eastern Arc", "Esőerdő", "Hegyek", "Száraz terület"],
      ro: ["Eastern Arc", "Pădure tropicală", "Munți", "Zonă uscată"],
      en: ["Eastern Arc", "Rainforest", "Mountains", "Dry area"]
    }, image: "/poi-images/pare-mountains-relief-v2.webp"},
  {
    id: "livingstone-mountains-relief-v2",
    type: "mountain",
    parent: "TZ-11",
    coords: [34.5000, -9.6667],
    name: { de: "Livingstone-Gebirge", hu: "Livingstone-hegység", ro: "Munții Livingstone", en: "Livingstone Mountains" },
    description: { de: "Ein Gebirge am nordöstlichen Ufer des Malawisees.", hu: "Hegység a Malawi-tó északkeleti partján.", ro: "Un lanț muntos pe malul nord-estic al lacului Malawi.", en: "A mountain range on the northeastern shore of Lake Malawi." },
    facts: {
      de: ["Malawisee", "Steile Klippen", "Aussicht", "Gebirge"],
      hu: ["Malawi-tó", "Meredek sziklák", "Kilátás", "Hegység"],
      ro: ["Lacul Malawi", "Stânci abrupte", "Priveliște", "Munți"],
      en: ["Lake Malawi", "Steep cliffs", "View", "Mountains"]
    }, image: "/poi-images/livingstone-mountains-relief-v2.webp"},
  {
    id: "mbeya-range-relief-v2",
    type: "mountain",
    parent: "TZ-11",
    coords: [33.4000, -8.9000],
    name: { de: "Mbeya-Gebirge", hu: "Mbeya-hegység", ro: "Munții Mbeya", en: "Mbeya Range" },
    description: { de: "Ein vulkanisches Massiv im Südwesten von Tansania.", hu: "Vulkanikus masszívum Tanzánia délnyugati részén.", ro: "Un masiv vulcanic în sud-vestul Tanzaniei.", en: "A volcanic massif in southwestern Tanzania." },
    facts: {
      de: ["Vulkanisch", "Hochland", "Landwirtschaft", "Mbeya-Stadt"],
      hu: ["Vulkanikus", "Felföld", "Mezőgazdaság", "Mbeya város"],
      ro: ["Vulcanic", "Podiș", "Agricultură", "Orașul Mbeya"],
      en: ["Volcanic", "Highlands", "Agriculture", "Mbeya city"]
    }
  },
  {
    id: "poroto-mountains-relief-v2",
    type: "mountain",
    parent: "TZ-11",
    coords: [33.7500, -9.0000],
    name: { de: "Poroto-Gebirge", hu: "Poroto-hegység", ro: "Munții Poroto", en: "Poroto Mountains" },
    description: { de: "Ein Vulkangebiet mit Kraterseen in der Nähe von Mbeya.", hu: "Vulkáni terület krátertavakkal Mbeya közelében.", ro: "O zonă vulcanică cu lacuri de crater lângă Mbeya.", en: "A volcanic region with crater lakes near Mbeya." },
    facts: {
      de: ["Kraterseen", "Vulkane", "Hochland", "Natur"],
      hu: ["Krátertavak", "Vulkánok", "Felföld", "Természet"],
      ro: ["Lacuri de crater", "Vulcani", "Podiș", "Natură"],
      en: ["Crater lakes", "Volcanoes", "Highlands", "Nature"]
    }, image: "/poi-images/poroto-mountains-relief-v2.webp"},
  {
    id: "kipengere-range-relief-v2",
    type: "mountain",
    parent: "TZ-11",
    coords: [34.1000, -9.4000],
    name: { de: "Kipengere-Gebirge", hu: "Kipengere-hegység", ro: "Munții Kipengere", en: "Kipengere Range" },
    description: { de: "Auch bekannt als Livingstone-Berge im Süden.", hu: "Dél-Livingstone-hegységként is ismert.", ro: "Cunoscut și sub numele de Munții Livingstone în sud.", en: "Also known as the Livingstone Mountains in the south." },
    facts: {
      de: ["Süden", "Hochebene", "Vulkanisch", "Kaltes Klima"],
      hu: ["Dél", "Fennsík", "Vulkanikus", "Hideg klíma"],
      ro: ["Sud", "Podiș", "Vulcanic", "Climă rece"],
      en: ["South", "Plateau", "Volcanic", "Cold climate"]
    }, image: "/poi-images/kipengere-range-relief-v2.webp"},
  {
    id: "mahenge-plateau-relief-v2",
    type: "relief",
    parent: "TZ-17",
    coords: [36.7000, -8.7000],
    name: { de: "Mahenge-Hochland", hu: "Mahenge-felföld", ro: "Podișul Mahenge", en: "Mahenge Plateau" },
    description: { de: "Ein Hochlandgebiet südlich der Udzungwa-Berge.", hu: "Felföldi terület az Udzungwa-hegységtől délre.", ro: "O zonă de podiș la sud de Munții Udzungwa.", en: "A highland area south of the Udzungwa Mountains." },
    facts: {
      de: ["Hochland", "Tropisch", "Bergbau", "Geologie"],
      hu: ["Felföld", "Trópusi", "Bányászat", "Geológia"],
      ro: ["Podiș", "Tropical", "Minerit", "Geologie"],
      en: ["Highlands", "Tropical", "Mining", "Geology"]
    }, image: "/poi-images/mahenge-plateau-relief-v2.webp"},
  {
    id: "matengo-highlands-relief-v2",
    type: "relief",
    parent: "TZ-18",
    coords: [34.7500, -10.7500],
    name: { de: "Matengo-Hochland", hu: "Matengo-felföld", ro: "Podișul Matengo", en: "Matengo Highlands" },
    description: { de: "Ein landwirtschaftlich genutztes Hochland im extremen Süden.", hu: "Mezőgazdasági felföld az ország legdélebbi részén.", ro: "Un podiș utilizat agricol în extremul sud.", en: "An agricultural highland area in the extreme south." },
    facts: {
      de: ["Landwirtschaft", "Kaffee", "Hügel", "Landschaft"],
      hu: ["Mezőgazdaság", "Kávé", "Dombok", "Táj"],
      ro: ["Agricultură", "Cafea", "Dealuri", "Peisaj"],
      en: ["Agriculture", "Coffee", "Hills", "Landscape"]
    }, image: "/poi-images/matengo-highlands-relief-v2.webp"},
  {
    id: "tunduru-plateau-relief-v2",
    type: "relief",
    parent: "TZ-18",
    coords: [37.4000, -10.6000],
    name: { de: "Tunduru-Hochland", hu: "Tunduru-felföld", ro: "Podișul Tunduru", en: "Tunduru Plateau" },
    description: { de: "Ein weites, flaches Plateau im Südosten.", hu: "Széles, lapos felföld délkeleten.", ro: "Un podiș vast și plat în sud-est.", en: "A vast, flat plateau in the southeast." },
    facts: {
      de: ["Flach", "Savanne", "Abgelegen", "Geologie"],
      hu: ["Lapos", "Szavanna", "Távoli", "Geológia"],
      ro: ["Plat", "Savana", "Izolat", "Geologie"],
      en: ["Flat", "Savannah", "Remote", "Geology"]
    }
  },
  {
    id: "serengeti-plain-relief-v2",
    type: "relief",
    parent: "TZ-07",
    coords: [34.8333, -2.3333],
    name: { de: "Serengeti-Ebene", hu: "Serengeti-síkság", ro: "Câmpia Serengeti", en: "Serengeti Plain" },
    description: { de: "Die berühmte Grasland-Savanne im Norden.", hu: "A híres füves szavanna északon.", ro: "Faimoasa savană de iarbă din nord.", en: "The famous grassland savannah in the north." },
    facts: {
      de: ["Grasland", "Tierwanderung", "Nationalpark", "Flach"],
      hu: ["Füves puszta", "Állatvándorlás", "Nemzeti Park", "Lapos"],
      ro: ["Iarbă", "Migrația animalelor", "Parc Național", "Plat"],
      en: ["Grassland", "Animal migration", "National Park", "Flat"]
    }, image: "/poi-images/serengeti-plain-relief-v2.webp"},
  {
    id: "wembere-plain-relief-v2",
    type: "relief",
    parent: "TZ-21",
    coords: [33.8000, -4.3000],
    name: { de: "Wembere-Ebene", hu: "Wembere-síkság", ro: "Câmpia Wembere", en: "Wembere Plain" },
    description: { de: "Eine weite, flache Ebene im Zentrum Tansanias.", hu: "Széles, lapos síkság Tanzánia központjában.", ro: "O câmpie vastă și plată în centrul Tanzaniei.", en: "A vast, flat plain in the center of Tanzania." },
    facts: {
      de: ["Lapos", "Sumpfig", "Savanne", "Landwirtschaft"],
      hu: ["Lapos", "Mocsaras", "Szavanna", "Mezőgazdaság"],
      ro: ["Plat", "Mlaștinos", "Savana", "Agricultură"],
      en: ["Flat", "Swampy", "Savannah", "Agriculture"]
    }, image: "/poi-images/wembere-plain-relief-v2.webp"},
  {
    id: "masasi-plateau-relief-v2",
    type: "relief",
    parent: "TZ-19",
    coords: [38.2500, -10.7500],
    name: { de: "Masasi-Hochland", hu: "Masasi-felföld", ro: "Podișul Masasi", en: "Masasi Plateau" },
    description: { de: "Eine hügelige Region im Südosten nahe der Grenze zu Mosambik.", hu: "Dombvidéki régió délkeleten, Mozambik határának közelében.", ro: "O regiune deluroasă în sud-est, lângă granița cu Mozambic.", en: "A hilly region in the southeast near the border with Mozambique." },
    facts: {
      de: ["Hügelig", "Landwirtschaft", "Savanne", "Klima"],
      hu: ["Dombos", "Mezőgazdaság", "Szavanna", "Klíma"],
      ro: ["Deluros", "Agricultură", "Savana", "Climă"],
      en: ["Hilly", "Agriculture", "Savannah", "Climate"]
    }, image: "/poi-images/masasi-plateau-relief-v2.webp"},
  {
    id: "ufipa-plateau-relief-v2",
    type: "relief",
    parent: "TZ-22",
    coords: [31.5000, -7.5000],
    name: { de: "Ufipa-Hochland", hu: "Ufipa-felföld", ro: "Podișul Ufipa", en: "Ufipa Plateau" },
    description: { de: "Ein isoliertes Hochland zwischen Malawi- und Tanganjikasee.", hu: "Elszigetelt felföld a Malawi-tó és a Tanganyika-tó között.", ro: "Un podiș izolat între Lacul Malawi și Lacul Tanganyika.", en: "An isolated plateau between Lake Malawi and Lake Tanganyika." },
    facts: {
      de: ["Isoliert", "Landwirtschaft", "Geologie", "Klima"],
      hu: ["Elszigetelt", "Mezőgazdaság", "Geológia", "Klíma"],
      ro: ["Izolat", "Agricultură", "Geologie", "Climă"],
      en: ["Isolated", "Agriculture", "Geology", "Climate"]
      }
  }
];

