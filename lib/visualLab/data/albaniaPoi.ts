import type { POI } from "./poi";

export const albaniaCountry: POI = {
  id: "country-albania",
  name: {
    de: "Albanien",
    hu: "Albánia",
    ro: "Albania",
    en: "Albania"
  },
  description: {
    de: "Land der Adler",
    hu: "A sasok földje",
    ro: "Țara Vulturilor",
    en: "Land of the Eagles"
  },
  descriptionAdvanced: {
    de: "Ein faszinierendes Land auf der Balkanhalbinsel mit einer reichen Geschichte, beeindruckenden Berglandschaften und einer wunderschönen Adriaküste.",
    hu: "Lenyűgöző ország a Balkán-félszigeten, gazdag történelemmel, lenyűgöző hegyi tájakkal és gyönyörű adriai partvidékkel.",
    ro: "O țară fascinantă din Peninsula Balcanică, cu o istorie bogată, peisaje montane impresionante și o coastă adriatică superbă.",
    en: "A fascinating country on the Balkan Peninsula with a rich history, impressive mountain landscapes, and a beautiful Adriatic coast."
  },
  type: "country",
  coords: [41.1533, 20.1683],
  parent: "europe",
  facts: {
    de: [
      "Albanien hat über 300 Sonnentage im Jahr.",
      "Die albanische Sprache ist ein eigener Zweig der indogermanischen Sprachen.",
      "Es gibt mehr Albaner, die außerhalb des Landes leben als innerhalb.",
      "Mutter Teresa war albanischer Herkunft.",
      "Das Land hat eine der gastfreundlichsten Kulturen der Welt."
    ],
    hu: [
      "Albániában évente több mint 300 napsütéses nap van.",
      "Az albán nyelv az indoeurópai nyelvcsalád különálló ága.",
      "Több albán él az országon kívül, mint azon belül.",
      "Teréz anya albán származású volt.",
      "Az ország a világ egyik legvendégszeretőbb kultúrájával rendelkezik."
    ],
    ro: [
      "Albania are peste 300 de zile însorite pe an.",
      "Limba albaneză este o ramură distinctă a limbilor indoeuropene.",
      "Există mai mulți albanezi care trăiesc în afara țării decât în interiorul ei.",
      "Maica Tereza a fost de origine albaneză.",
      "Țara are una dintre cele mai ospitaliere culturi din lume."
    ],
    en: [
      "Albania has over 300 sunny days a year.",
      "The Albanian language is a distinct branch of the Indo-European languages.",
      "There are more Albanians living outside the country than inside.",
      "Mother Teresa was of Albanian descent.",
      "The country has one of the most hospitable cultures in the world."
    ]
  }
};

export const albaniaCities: POI[] = [
  {
    id: "city-tirana",
    name: { de: "Tirana", hu: "Tirana", ro: "Tirana", en: "Tirana" },
    description: { de: "Die Hauptstadt", hu: "A főváros", ro: "Capitala", en: "The capital" },
    descriptionAdvanced: { de: "Die pulsierende Hauptstadt Albaniens.", hu: "Albánia lüktető fővárosa.", ro: "Capitala vibrantă a Albaniei.", en: "The vibrant capital of Albania." },
    type: "city",
    coords: [41.3275, 19.8187],
    parent: "AL-009",
    facts: {
      de: ["Hauptstadt seit 1920.", "Bekannt für bunte Gebäude.", "Zentrum der albanischen Kultur."],
      hu: ["1920 óta főváros.", "Színes épületeiről ismert.", "Az albán kultúra központja."],
      ro: ["Capitală din 1920.", "Cunoscută pentru clădirile colorate.", "Centrul culturii albaneze."],
      en: ["Capital since 1920.", "Known for colorful buildings.", "Center of Albanian culture."]
    }
  },
  {
    id: "city-durres",
    name: { de: "Durrës", hu: "Durrës", ro: "Durrës", en: "Durrës" },
    description: { de: "Hafenstadt", hu: "Kikötőváros", ro: "Oraș portuar", en: "Port city" },
    descriptionAdvanced: { de: "Eine der ältesten Städte Albaniens mit einem großen römischen Amphitheater.", hu: "Albánia egyik legrégebbi városa egy hatalmas római amfiteátrummal.", ro: "Unul dintre cele mai vechi orașe din Albania, cu un mare amfiteatru roman.", en: "One of Albania's oldest cities with a large Roman amphitheater." },
    type: "city",
    coords: [41.3246, 19.4558],
    parent: "AL-010",
    facts: {
      de: ["Größter Hafen des Landes.", "Antikes Amphitheater.", "Beliebter Strandort."],
      hu: ["Az ország legnagyobb kikötője.", "Ókori amfiteátrum.", "Népszerű tengerparti hely."],
      ro: ["Cel mai mare port al țării.", "Amfiteatru antic.", "Stațiune populară."],
      en: ["Largest port in the country.", "Ancient amphitheater.", "Popular beach destination."]
    }
  },
  {
    id: "city-vlore",
    name: { de: "Vlorë", hu: "Vlorë", ro: "Vlorë", en: "Vlorë" },
    description: { de: "Stadt der Unabhängigkeit", hu: "A függetlenség városa", ro: "Orașul independenței", en: "City of independence" },
    descriptionAdvanced: { de: "Hier wurde 1912 die Unabhängigkeit Albaniens ausgerufen.", hu: "Itt kikiáltották ki Albánia függetlenségét 1912-ben.", ro: "Aici a fost proclamată independența Albaniei în 1912.", en: "Albania's independence was proclaimed here in 1912." },
    type: "city",
    coords: [40.4667, 19.4897],
    parent: "AL-006",
    facts: {
      de: ["Wo Adria und Ionisches Meer aufeinandertreffen.", "Erste Hauptstadt Albaniens.", "Wichtige Hafenstadt."],
      hu: ["Ahol az Adria és a Jón-tenger találkozik.", "Albánia első fővárosa.", "Fontos kikötőváros."],
      ro: ["Unde se întâlnesc Mările Adriatică și Ionică.", "Prima capitală a Albaniei.", "Important oraș port."],
      en: ["Where the Adriatic and Ionian seas meet.", "First capital of Albania.", "Important port city."]
    }
  },
  {
    id: "city-shkoder",
    name: { de: "Shkodra", hu: "Shkodra", ro: "Shkodra", en: "Shkodra" },
    description: { de: "Kulturstadt des Nordens", hu: "Az észak kulturális városa", ro: "Orașul cultural al nordului", en: "Cultural city of the north" },
    descriptionAdvanced: { de: "Ein historisches Zentrum am Shkodrasee.", hu: "Történelmi központ a Shkodrai-tónál.", ro: "Un centru istoric de pe malul lacului Shkodra.", en: "A historical center by Lake Shkodra." },
    type: "city",
    coords: [42.0683, 19.5126],
    parent: "AL-007",
    facts: {
      de: ["Einer der ältesten Orte des Balkans.", "Heimat der Marubi-Fotothek.", "Tor zu den albanischen Alpen."],
      hu: ["A Balkán egyik legrégebbi helye.", "A Marubi fotótár otthona.", "Kapu az albán Alpokhoz."],
      ro: ["Una dintre cele mai vechi așezări din Balcani.", "Găzduiește Fototeca Marubi.", "Poarta către Alpii Albanezi."],
      en: ["One of the oldest sites in the Balkans.", "Home of the Marubi National Museum of Photography.", "Gateway to the Albanian Alps."]
    }
  },
  {
    id: "city-korce",
    name: { de: "Korçë", hu: "Korçë", ro: "Korçë", en: "Korçë" },
    description: { de: "Stadt der Serenaden", hu: "A szerenádok városa", ro: "Orașul serenadelor", en: "City of serenades" },
    descriptionAdvanced: { de: "Bekannt für seine Kultur, Museen und Architektur.", hu: "Kultúrájáról, múzeumairól és építészetéről ismert.", ro: "Cunoscut pentru cultură, muzee și arhitectură.", en: "Known for its culture, museums, and architecture." },
    type: "city",
    coords: [40.6141, 20.7778],
    parent: "AL-003",
    facts: {
      de: ["Erste albanische Schule.", "Bekanntes Bierfest.", "Architektur im französischen Stil."],
      hu: ["Az első albán iskola.", "Híres sörfesztivál.", "Francia stílusú építészet."],
      ro: ["Prima școală albaneză.", "Faimos festival al berii.", "Arhitectură în stil francez."],
      en: ["First Albanian school.", "Famous beer festival.", "French-style architecture."]
    }
  },
  {
    id: "city-fier",
    name: { de: "Fier", hu: "Fier", ro: "Fier", en: "Fier" },
    description: { de: "Industrie- und Kulturzentrum", hu: "Ipari és kulturális központ", ro: "Centru industrial și cultural", en: "Industrial and cultural center" },
    descriptionAdvanced: { de: "Wichtige Stadt in der Nähe der antiken Stätte Apollonia.", hu: "Jelentős város az ókori Apollónia közelében.", ro: "Oraș important în apropierea sitului antic Apollonia.", en: "Important city near the ancient site of Apollonia." },
    type: "city",
    coords: [40.7239, 19.5561],
    parent: "AL-008",
    facts: {
      de: ["Wirtschaftlicher Knotenpunkt.", "Nahe Apollonia.", "Landwirtschaftliches Zentrum."],
      hu: ["Gazdasági csomópont.", "Apollónia közelében.", "Mezőgazdasági központ."],
      ro: ["Nod economic.", "Lângă Apollonia.", "Centru agricol."],
      en: ["Economic hub.", "Near Apollonia.", "Agricultural center."]
    }
  },
  {
    id: "city-berat",
    name: { de: "Berat", hu: "Berat", ro: "Berat", en: "Berat" },
    description: { de: "Stadt der tausend Fenster", hu: "Az ezer ablak városa", ro: "Orașul celor o mie de ferestre", en: "City of a thousand windows" },
    descriptionAdvanced: { de: "UNESCO-Welterbe, bekannt für seine osmanische Architektur.", hu: "UNESCO világörökség, oszmán építészetéről ismert.", ro: "Patrimoniu UNESCO, cunoscut pentru arhitectura otomană.", en: "UNESCO World Heritage site, known for its Ottoman architecture." },
    type: "city",
    coords: [40.7049, 19.9497],
    parent: "AL-012",
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Einzigartige osmanische Häuser.", "Bewohnte Burg."],
      hu: ["UNESCO világörökség.", "Egyedülálló oszmán házak.", "Lakott vár."],
      ro: ["Patrimoniu mondial UNESCO.", "Case otomane unice.", "Cetate locuită."],
      en: ["UNESCO World Heritage site.", "Unique Ottoman houses.", "Inhabited castle."]
    }
  },
  {
    id: "city-gjirokaster",
    name: { de: "Gjirokastra", hu: "Gjirokastra", ro: "Gjirokastra", en: "Gjirokastra" },
    description: { de: "Stadt der Steine", hu: "A kövek városa", ro: "Orașul de piatră", en: "City of stone" },
    descriptionAdvanced: { de: "Eine gut erhaltene osmanische Stadt, Geburtsort von Ismail Kadare und Enver Hoxha.", hu: "Jól megőrzött oszmán város, Ismail Kadare és Enver Hoxha szülőhelye.", ro: "Un oraș otoman bine conservat, locul de naștere al lui Ismail Kadare și Enver Hoxha.", en: "A well-preserved Ottoman town, birthplace of Ismail Kadare and Enver Hoxha." },
    type: "city",
    coords: [40.0758, 20.1388],
    parent: "AL-005",
    facts: {
      de: ["Steildächer aus Schiefer.", "Große Festung.", "UNESCO-Weltkulturerbe."],
      hu: ["Pala tetős házak.", "Hatalmas erőd.", "UNESCO világörökség."],
      ro: ["Acoperișuri de ardezie.", "Fortăreață mare.", "Patrimoniu mondial UNESCO."],
      en: ["Slate-roofed houses.", "Massive fortress.", "UNESCO World Heritage site."]
    }
  },
  {
    id: "city-sarande",
    name: { de: "Saranda", hu: "Saranda", ro: "Saranda", en: "Saranda" },
    description: { de: "Badeort im Süden", hu: "Tengerparti üdülőhely délen", ro: "Stațiune litorală în sud", en: "Southern coastal resort" },
    descriptionAdvanced: { de: "Wichtiges Touristenzentrum an der Ionischen Küste gegenüber von Korfu.", hu: "Fontos turisztikai központ a Jón-tenger partján, Korfuval szemben.", ro: "Important centru turistic pe coasta Ionică, vizavi de Corfu.", en: "Important tourist center on the Ionian coast across from Corfu." },
    type: "city",
    coords: [39.8739, 20.0049],
    parent: "AL-006",
    facts: {
      de: ["Tor zu Butrint.", "Wunderschöne Buchten.", "Ganzjähriger Sonnenschein."],
      hu: ["Kapu Butrint felé.", "Gyönyörű öblök.", "Egész évben napsütés."],
      ro: ["Poarta către Butrint.", "Golfuri superbe.", "Soare tot anul."],
      en: ["Gateway to Butrint.", "Beautiful bays.", "Year-round sunshine."]
    }
  },
  {
    id: "city-elbasan",
    name: { de: "Elbasan", hu: "Elbasan", ro: "Elbasan", en: "Elbasan" },
    description: { de: "Historische Festungsstadt", hu: "Történelmi erődváros", ro: "Oraș fortăreață istoric", en: "Historical fortress city" },
    descriptionAdvanced: { de: "Zentralalbanische Stadt mit einer gut erhaltenen Burg.", hu: "Közép-albániai város jól megőrzött várral.", ro: "Oraș din centrul Albaniei cu o cetate bine conservată.", en: "Central Albanian city with a well-preserved castle." },
    type: "city",
    coords: [41.1125, 20.0822],
    parent: "AL-004",
    facts: {
      de: ["Via Egnatia verlief hier.", "Berühmt für 'Ballokume'.", "Osmanische Einflüsse."],
      hu: ["A Via Egnatia itt haladt át.", "Híres a 'Ballokume' süteményéről.", "Oszmán hatások."],
      ro: ["Via Egnatia trecea pe aici.", "Faimos pentru 'Ballokume'.", "Influențe otomane."],
      en: ["Via Egnatia passed through here.", "Famous for 'Ballokume' sweets.", "Ottoman influences."]
    }
  },
  {
    id: "city-peshkopi",
    name: { de: "Peshkopi", hu: "Peshkopi", ro: "Peshkopi", en: "Peshkopi" },
    description: { de: "Stadt in den Bergen", hu: "Város a hegyekben", ro: "Oraș în munți", en: "City in the mountains" },
    descriptionAdvanced: { de: "Hauptstadt der Region Dibër, bekannt für ihre Thermalbäder und die Nähe zum Korab-Gebirge.", hu: "Dibër régió központja, híres termálfürdőiről és a Korab-hegység közelségéről.", ro: "Capitala regiunii Dibër, cunoscută pentru băile sale termale și proximitatea față de Munții Korab.", en: "Capital of the Dibër region, known for its thermal baths and proximity to the Korab mountains." },
    type: "city",
    coords: [41.6850, 20.4289],
    parent: "AL-001",
    facts: {
      de: ["Heilende Thermalquellen.", "Tor zum Berg Korab.", "Traditionelle osmanische Architektur."],
      hu: ["Gyógyító termálforrások.", "Kapu a Korab-hegyhez.", "Hagyományos oszmán építészet."],
      ro: ["Izvoare termale curative.", "Poarta către muntele Korab.", "Arhitectură tradițională otomană."],
      en: ["Healing thermal springs.", "Gateway to Mount Korab.", "Traditional Ottoman architecture."]
    }
  },
  {
    id: "city-kukes",
    name: { de: "Kukës", hu: "Kukës", ro: "Kukës", en: "Kukës" },
    description: { de: "Stadt im Nordosten", hu: "Város az északkeleten", ro: "Oraș în nord-est", en: "City in the northeast" },
    descriptionAdvanced: { de: "Eine Stadt in den albanischen Alpen, die für den Friedensnobelpreis nominiert wurde.", hu: "Város az albán Alpokban, amelyet Nobel-békedíjra jelöltek.", ro: "Un oraș din Alpii Albanezi, nominalizat la Premiul Nobel pentru Pace.", en: "A city in the Albanian Alps that was nominated for the Nobel Peace Prize." },
    type: "city",
    coords: [42.0767, 20.4217],
    parent: "AL-002",
    facts: {
      de: ["Wurde 1970 neu erbaut.", "Hilfe für Flüchtlinge 1999.", "Wunderschöne Bergkulisse."],
      hu: ["1970-ben épült újjá.", "Segítség a menekülteknek 1999-ben.", "Gyönyörű hegyi panoráma."],
      ro: ["Reconstruit în 1970.", "Ajutor pentru refugiați în 1999.", "Peisaj montan superb."],
      en: ["Rebuilt in 1970.", "Aid for refugees in 1999.", "Beautiful mountain scenery."]
    }
  },
  {
    id: "city-lezhe",
    name: { de: "Lezhë", hu: "Lezhë", ro: "Lezhë", en: "Lezhë" },
    description: { de: "Historische Küstenstadt", hu: "Történelmi parti város", ro: "Oraș de coastă istoric", en: "Historical coastal city" },
    descriptionAdvanced: { de: "Eine Stadt mit großer Bedeutung für die albanische Geschichte und das Grab von Skanderbeg.", hu: "Az albán történelem szempontjából kiemelkedő jelentőségű város, Szkander bég sírhelye.", ro: "Un oraș cu o mare importanță pentru istoria albaneză și locul de înmormântare al lui Skanderbeg.", en: "A city of great significance for Albanian history and the burial place of Skanderbeg." },
    type: "city",
    coords: [41.7833, 19.6500],
    parent: "AL-011",
    facts: {
      de: ["Gründungsort der Liga von Lezhë.", "Sitz des Skanderbeg-Memorials.", "Antiker Name: Lissus."],
      hu: ["A Lezhëi Liga alapítási helye.", "Itt található Szkander bég emlékhelye.", "Ókori neve: Lissus."],
      ro: ["Locul de fondare al Ligii de la Lezhë.", "Găzduiește Memorialul lui Skanderbeg.", "Nume antic: Lissus."],
      en: ["Founding place of the League of Lezhë.", "Site of the Skanderbeg Memorial.", "Ancient name: Lissus."]
    }
  }
];

export const albaniaHistorical: POI[] = [
  {
    id: "hist-butrint",
    name: { de: "Butrint", hu: "Butrint", ro: "Butrint", en: "Butrint" },
    description: { de: "Antike Ruinenstadt", hu: "Ókori romváros", ro: "Oraș antic în ruine", en: "Ancient ruined city" },
    descriptionAdvanced: { de: "Eine der bedeutendsten archäologischen Stätten des Balkans, UNESCO-Weltkulturerbe.", hu: "A Balkán egyik legjelentősebb régészeti lelőhelye, UNESCO világörökség.", ro: "Unul dintre cele mai importante situri arheologice din Balcani, patrimoniu UNESCO.", en: "One of the most important archaeological sites in the Balkans, UNESCO World Heritage." },
    type: "historical",
    coords: [39.7431, 20.0195],
    parent: "AL-006",
    facts: {
      de: ["Römische und griechische Ruinen.", "Inmitten eines Nationalparks.", "Venedig hat hier Spuren hinterlassen."],
      hu: ["Római és görög romok.", "Egy nemzeti park közepén.", "Velence is nyomot hagyott itt."],
      ro: ["Ruine romane și grecești.", "În mijlocul unui parc național.", "Veneția a lăsat urme aici."],
      en: ["Roman and Greek ruins.", "In the middle of a national park.", "Venice left traces here."]
    }
  },
  {
    id: "hist-apollonia",
    name: { de: "Apollonia", hu: "Apollónia", ro: "Apollonia", en: "Apollonia" },
    description: { de: "Antike griechische Stadt", hu: "Ókori görög város", ro: "Oraș antic grec", en: "Ancient Greek city" },
    descriptionAdvanced: { de: "Eine bedeutende antike Siedlung, die einst ein wichtiges Bildungszentrum war.", hu: "Jelentős ókori település, amely egykor fontos oktatási központ volt.", ro: "O așezare antică importantă, care a fost odată un centru educațional major.", en: "An important ancient settlement that was once a major educational center." },
    type: "historical",
    coords: [40.7226, 19.4678],
    parent: "AL-008",
    facts: {
      de: ["Gegründet im 6. Jh. v. Chr.", "Besucht von Kaiser Augustus.", "Bedeutendes Kloster vor Ort."],
      hu: ["Kr. e. 6. században alapították.", "Augustus császár is megfordult itt.", "Jelentős kolostor található a területén."],
      ro: ["Fondat în secolul VI î.Hr.", "Vizitat de împăratul Augustus.", "Mănăstire importantă la fața locului."],
      en: ["Founded in the 6th century BC.", "Visited by Emperor Augustus.", "Important monastery on site."]
    }
  },
  {
    id: "hist-rozafa",
    name: { de: "Burg Rozafa", hu: "Rozafa vára", ro: "Cetatea Rozafa", en: "Rozafa Castle" },
    description: { de: "Mächtige Festung", hu: "Hatalmas erőd", ro: "Fortăreață impunătoare", en: "Massive fortress" },
    descriptionAdvanced: { de: "Eine alte illyrische Burg mit Blick auf Shkodra.", hu: "Régi illír vár, kilátással Shkodrára.", ro: "O veche cetate iliră cu vedere spre Shkodra.", en: "An ancient Illyrian castle overlooking Shkodra." },
    type: "historical",
    coords: [42.0463, 19.4939],
    parent: "AL-007",
    facts: {
      de: ["Legende der eingemauerten Frau.", "Blick auf drei Flüsse.", "Strategische Lage."],
      hu: ["A befalazott asszony legendája.", "Kilátás három folyóra.", "Stratégiai elhelyezkedés."],
      ro: ["Legenda femeii zidite.", "Vedere spre trei râuri.", "Locație strategică."],
      en: ["Legend of the walled-in woman.", "View of three rivers.", "Strategic location."]
    }
  },
  {
    id: "hist-berat-castle",
    name: { de: "Burg von Berat", hu: "Berati vár", ro: "Cetatea Berat", en: "Berat Castle" },
    description: { de: "Bewohnte Zitadelle", hu: "Lakott citadella", ro: "Citadelă locuită", en: "Inhabited citadel" },
    descriptionAdvanced: { de: "Eine der größten Festungsanlagen Albaniens, die noch bewohnt ist.", hu: "Albánia egyik legnagyobb erődrendszere, amely még ma is lakott.", ro: "Una dintre cele mai mari fortificații din Albania, care este încă locuită.", en: "One of the largest fortifications in Albania that is still inhabited." },
    type: "historical",
    coords: [40.7081, 19.9452],
    parent: "AL-012",
    facts: {
      de: ["Viele alte Kirchen im Inneren.", "Blick über den Osum.", "Bilderbuch-Architektur."],
      hu: ["Sok régi templom a falakon belül.", "Kilátás az Osum folyóra.", "Mesébe illő építészet."],
      ro: ["Multe biserici vechi în interior.", "Vedere peste râul Osum.", "Arhitectură de poveste."],
      en: ["Many old churches inside.", "View over the Osum river.", "Picture-perfect architecture."]
    }
  },
  {
    id: "hist-gjirokaster-castle",
    name: { de: "Burg von Gjirokastra", hu: "Gjirokastrai vár", ro: "Cetatea Gjirokastra", en: "Gjirokastra Castle" },
    description: { de: "Dominante Festung", hu: "Domináns erőd", ro: "Fortăreață dominantă", en: "Dominant fortress" },
    descriptionAdvanced: { de: "Eine massive Burg, die das Stadtbild von Gjirokastra beherrscht.", hu: "Hatalmas vár, amely uralja Gjirokastra városképét.", ro: "O cetate masivă care domină peisajul urban al Gjirokastrei.", en: "A massive castle that dominates the cityscape of Gjirokastra." },
    type: "historical",
    coords: [40.0735, 20.1415],
    parent: "AL-005",
    facts: {
      de: ["Uhrturm aus dem 19. Jh.", "Flugzeugwrack im Innenhof.", "Historisches Gefängnis."],
      hu: ["19. századi óratorony.", "Repülőgép-roncs az udvaron.", "Történelmi börtön."],
      ro: ["Turn cu ceas din sec. XIX.", "Epavă de avion în curte.", "Închisoare istorică."],
      en: ["19th-century clock tower.", "Airplane wreck in the courtyard.", "Historical prison."]
    }
  },
  {
    id: "hist-kruje",
    name: { de: "Burg Kruja", hu: "Krujai vár", ro: "Cetatea Kruja", en: "Kruja Castle" },
    description: { de: "Symbol des Widerstands", hu: "Az ellenállás szimbóluma", ro: "Simbolul rezistenței", en: "Symbol of resistance" },
    descriptionAdvanced: { de: "Das Zentrum von Skanderbegs Kampf gegen das Osmanische Reich.", hu: "Szkander bég Oszmán Birodalom elleni harcának központja.", ro: "Centrul luptei lui Skanderbeg împotriva Imperiului Otoman.", en: "The center of Skanderbeg's struggle against the Ottoman Empire." },
    type: "historical",
    coords: [41.5100, 19.7925],
    parent: "AL-010",
    facts: {
      de: ["Skanderbeg-Museum.", "Alter Basar am Fuße.", "Wichtiger Wallfahrtsort."],
      hu: ["Szkander bég múzeum.", "Régi bazár a vár tövében.", "Fontos zarándokhely."],
      ro: ["Muzeul Skanderbeg.", "Bazar vechi la poale.", "Important loc de pelerinaj."],
      en: ["Skanderbeg Museum.", "Old bazaar at the foot.", "Important pilgrimage site."]
    }
  },
  {
    id: "hist-lezhe-castle",
    name: { de: "Burg von Lezhë", hu: "Lezhëi vár", ro: "Cetatea Lezhë", en: "Lezhë Castle" },
    description: { de: "Mittelalterliche Akropolis", hu: "Középkori akropolisz", ro: "Acropolă medievală", en: "Medieval acropolis" },
    descriptionAdvanced: { de: "Eine strategische Festung mit Blick auf die Adria und die Stadt Lezhë.", hu: "Stratégiai erőd kilátással az Adriára és Lezhë városára.", ro: "O fortăreață strategică cu vedere la Marea Adriatică și la orașul Lezhë.", en: "A strategic fortress overlooking the Adriatic Sea and the city of Lezhë." },
    type: "historical",
    coords: [41.7820, 19.6510],
    parent: "AL-011",
    facts: {
      de: ["Illyrische Fundamente.", "Osmanische Moschee-Ruinen.", "Panoramablick auf die Küste."],
      hu: ["Illír alapok.", "Oszmán mecsetromok.", "Panorámás kilátás a partra."],
      ro: ["Fundații ilire.", "Ruinele unei moschei otomane.", "Vedere panoramică a coastei."],
      en: ["Illyrian foundations.", "Ottoman mosque ruins.", "Panoramic view of the coast."]
    }
  },
  {
    id: "hist-elbasan-castle",
    name: { de: "Burg von Elbasan", hu: "Elbasani vár", ro: "Cetatea Elbasan", en: "Elbasan Castle" },
    description: { de: "Osmanische Stadtburg", hu: "Oszmán városi vár", ro: "Cetate otomană în oraș", en: "Ottoman city castle" },
    descriptionAdvanced: { de: "Eine flache Festungsanlage mitten im Stadtzentrum von Elbasan.", hu: "Alföldi erődítmény Elbasan városközpontjában.", ro: "O fortificație joasă aflată chiar în centrul orașului Elbasan.", en: "A flat fortification right in the center of Elbasan." },
    type: "historical",
    coords: [41.1125, 20.0822],
    parent: "AL-004",
    facts: {
      de: ["Erbaut von Sultan Mehmet II.", "Wohnviertel im Inneren.", "Alte Kirchen und Moscheen."],
      hu: ["II. Mehmed szultán építtette.", "Lakónegyed a falakon belül.", "Régi templomok és mecsetek."],
      ro: ["Construită de Sultanul Mehmet II.", "Cartier rezidențial în interior.", "Biserici și moschei vechi."],
      en: ["Built by Sultan Mehmet II.", "Residential neighborhood inside.", "Old churches and mosques."]
    }
  }
];

export const albaniaNature: POI[] = [
  {
    id: "nat-lake-skadar",
    name: { de: "Shkodrasee", hu: "Shkodrai-tó", ro: "Lacul Shkodra", en: "Lake Skadar" },
    description: { de: "Größter See des Balkans", hu: "A Balkán legnagyobb tava", ro: "Cel mai mare lac din Balcani", en: "Largest lake in the Balkans" },
    descriptionAdvanced: { de: "Ein bedeutendes Naturreservat an der Grenze zwischen Albanien und Montenegro.", hu: "Jelentős természetvédelmi terület Albánia és Montenegró határán.", ro: "O rezervație naturală importantă la granița dintre Albania și Muntenegru.", en: "An important nature reserve on the border between Albania and Montenegro." },
    type: "landmark",
    coords: [42.1794, 19.2974],
    parent: "AL-007",
    facts: {
      de: ["Reiche Vogelwelt.", "Seltene Pelikane.", "Teilweise Nationalpark."],
      hu: ["Gazdag madárvilág.", "Ritka pelikánok.", "Részben nemzeti park."],
      ro: ["Faună aviară bogată.", "Pelicani rari.", "Parțial parc național."],
      en: ["Rich birdlife.", "Rare pelicans.", "Partially a national park."]
    }
  },
  {
    id: "nat-lake-ohrid",
    name: { de: "Ohridsee", hu: "Ohridi-tó", ro: "Lacul Ohrid", en: "Lake Ohrid" },
    description: { de: "UNESCO-Naturerbe", hu: "UNESCO természeti örökség", ro: "Patrimoniu natural UNESCO", en: "UNESCO Natural Heritage" },
    descriptionAdvanced: { de: "Einer der ältesten und tiefsten Seen Europas.", hu: "Európa egyik legrégebbi és legmélyebb tava.", ro: "Unul dintre cele mai vechi și mai adânci lacuri din Europa.", en: "One of Europe's oldest and deepest lakes." },
    type: "landmark",
    coords: [41.0366, 20.7161],
    parent: "AL-003",
    facts: {
      de: ["Einzigartige Fischarten.", "Kristallklares Wasser.", "UNESCO-Schutz."],
      hu: ["Egyedülálló halfajok.", "Kristálytiszta víz.", "UNESCO védelem."],
      ro: ["Specii de pești unice.", "Apă de cristal.", "Protecție UNESCO."],
      en: ["Unique fish species.", "Crystal clear water.", "UNESCO protection."]
    }
  },
  {
    id: "nat-valbone",
    name: { de: "Valbona-Tal", hu: "Valbona-völgy", ro: "Valea Valbone", en: "Valbona Valley" },
    description: { de: "Albanische Alpen", hu: "Albán Alpok", ro: "Alpii Albanezi", en: "Albanian Alps" },
    descriptionAdvanced: { de: "Ein spektakuläres Hochtal im Norden Albaniens.", hu: "Látványos magashegyi völgy Észak-Albániában.", ro: "O vale montană spectaculoasă în nordul Albaniei.", en: "A spectacular high valley in northern Albania." },
    type: "landmark",
    coords: [42.4410, 19.8920],
    parent: "AL-002",
    facts: {
      de: ["Wandermeldorado.", "Wilde Flusslandschaften.", "Traditionelle Berggasthöfe."],
      hu: ["Túrázók paradicsoma.", "Vadvízi tájak.", "Hagyományos hegyi vendégházak."],
      ro: ["Paradisul drumețiilor.", "Peisaje fluviale sălbatice.", "Pensiuni montane tradiționale."],
      en: ["Hiking paradise.", "Wild river landscapes.", "Traditional mountain guesthouses."]
    }
  },
  {
    id: "nat-blue-eye",
    name: { de: "Das Blaue Auge", hu: "Kék Szem-forrás", ro: "Ochiul Albastru", en: "The Blue Eye" },
    description: { de: "Karstquelle", hu: "Karsztforrás", ro: "Izvor carstic", en: "Karst spring" },
    descriptionAdvanced: { de: "Eine faszinierende tiefblaue Wasserquelle in der Nähe von Saranda.", hu: "Lenyűgöző mélykék vízforrás Saranda közelében.", ro: "Un izvor de apă de un albastru profund, fascinant, lângă Saranda.", en: "A fascinating deep blue water spring near Saranda." },
    type: "landmark",
    coords: [39.9234, 20.1923],
    parent: "AL-006",
    facts: {
      de: ["Über 50 Meter tief.", "Konstante 10 Grad Celsius.", "Saphirblaue Farbe."],
      hu: ["Több mint 50 méter mély.", "Állandó 10 Celsius-fok.", "Zafírkék szín."],
      ro: ["Peste 50 de metri adâncime.", "Constant 10 grade Celsius.", "Culoare de safir."],
      en: ["Over 50 meters deep.", "Constant 10 degrees Celsius.", "Sapphire blue color."]
    }
  },
  {
    id: "nat-llogara",
    name: { de: "Llogara-Pass", hu: "Llogara-hágó", ro: "Pasul Llogara", en: "Llogara Pass" },
    description: { de: "Gebirgspass zur Riviera", hu: "Hágó a riviérára", ro: "Pas montan spre rivieră", en: "Mountain pass to the Riviera" },
    descriptionAdvanced: { de: "Ein Nationalpark mit atemberaubendem Blick auf das Ionische Meer.", hu: "Nemzeti park lélegzetelállító kilátással a Jón-tengerre.", ro: "Un parc național cu o vedere uluitoare spre Marea Ionică.", en: "A national park with breathtaking views of the Ionian Sea." },
    type: "landmark",
    coords: [40.1983, 19.5854],
    parent: "AL-006",
    facts: {
      de: ["Über 1000 Meter Höhe.", "Blick auf Korfu.", "Gleitschirmflieger-Hotspot."],
      hu: ["Több mint 1000 méter magasan.", "Kilátás Korfura.", "Siklóernyős központ."],
      ro: ["Peste 1000 de metri altitudine.", "Vedere spre Corfu.", "Loc preferat de parapantiști."],
      en: ["Over 1000 meters high.", "View of Corfu.", "Paragliding hotspot."]
    }
  },
  {
    id: "nat-osum-canyon",
    name: { de: "Osum-Canyon", hu: "Osum-kanyon", ro: "Canionul Osum", en: "Osum Canyon" },
    description: { de: "Albaniens Grand Canyon", hu: "Albánia Grand Canyonja", ro: "Grand Canyon al Albaniei", en: "Albania's Grand Canyon" },
    descriptionAdvanced: { de: "Eine spektakuläre Schlucht im Süden Albaniens.", hu: "Látványos szurdokvölgy Dél-Albániában.", ro: "Un canion spectaculos în sudul Albaniei.", en: "A spectacular gorge in southern Albania." },
    type: "landmark",
    coords: [40.4851, 20.2520],
    parent: "AL-012",
    facts: {
      de: ["Rafting-Möglichkeit.", "Hohe Felswände.", "Zahlreiche Wasserfälle."],
      hu: ["Rafting lehetőség.", "Magas sziklafalak.", "Számos vízesés."],
      ro: ["Posibilitate de rafting.", "Pereți de stâncă înalți.", "Numeroase cascade."],
      en: ["Rafting opportunity.", "High rock walls.", "Numerous waterfalls."]
    }
  },
  {
    id: "nat-korab",
    name: { de: "Berg Korab", hu: "Korab-hegy", ro: "Muntele Korab", en: "Mount Korab" },
    description: { de: "Höchster Berg", hu: "Legmagasabb hegy", ro: "Cel mai înalt munte", en: "Highest mountain" },
    descriptionAdvanced: { de: "Der höchste Punkt Albaniens an der Grenze zu Nordmazedonien.", hu: "Albánia legmagasabb pontja az észak-macedón határon.", ro: "Cel mai înalt punct din Albania la granița cu Macedonia de Nord.", en: "The highest point of Albania on the border with North Macedonia." },
    type: "mountain",
    coords: [41.7903, 20.5469],
    parent: "AL-001",
    facts: {
      de: ["2764 Meter hoch.", "Grenzberg.", "Herausfordernde Wanderung."],
      hu: ["2764 méter magas.", "Határhegy.", "Kihívást jelentő túra."],
      ro: ["2764 metri înălțime.", "Munte de graniță.", "Drumeție solicitantă."],
      en: ["2764 meters high.", "Border mountain.", "Challenging hike."]
    }
  },
  {
    id: "nat-theth",
    name: { de: "Theth Nationalpark", hu: "Thethi Nemzeti Park", ro: "Parcul Național Theth", en: "Theth National Park" },
    description: { de: "Herz der Alpen", hu: "Az Alpok szíve", ro: "Inima Alpilor", en: "Heart of the Alps" },
    descriptionAdvanced: { de: "Ein unberührtes Bergdorf und Nationalpark im Norden.", hu: "Érintetlen hegyi falu és nemzeti park északon.", ro: "Un sat montan virgin și parc național în nord.", en: "An untouched mountain village and national park in the north." },
    type: "landmark",
    coords: [42.3986, 19.7822],
    parent: "AL-007",
    facts: {
      de: ["Traditionelle Steinhäuser.", "Wasserfall von Grunas.", "Isolation in den Bergen."],
      hu: ["Hagyományos kőházak.", "Grunas-vízesés.", "Hegyi elszigeteltség."],
      ro: ["Case tradiționale de piatră.", "Cascada Grunas.", "Izolare în munți."],
      en: ["Traditional stone houses.", "Grunas Waterfall.", "Mountain isolation."]
    }
  },
  {
    id: "nat-dajti",
    name: { de: "Berg Dajti", hu: "Dajti-hegy", ro: "Muntele Dajti", en: "Mount Dajti" },
    description: { de: "Hausberg von Tirana", hu: "Tirana házhegye", ro: "Muntele local al Tiranei", en: "Tirana's backyard mountain" },
    descriptionAdvanced: { de: "Ein beliebtes Ausflugsziel mit Seilbahn in der Nähe der Hauptstadt.", hu: "Népszerű kirándulóhely felvonóval a főváros közelében.", ro: "O destinație de excursie populară cu telecabină lângă capitală.", en: "A popular excursion destination with a cable car near the capital." },
    type: "mountain",
    coords: [41.3653, 19.9294],
    parent: "AL-009",
    facts: {
      de: ["Dajti Ekspres Seilbahn.", "Blick auf Tirana.", "Nationalpark-Status."],
      hu: ["Dajti Ekspres felvonó.", "Kilátás Tiranára.", "Nemzeti parki státusz."],
      ro: ["Telecabina Dajti Ekspres.", "Vedere asupra Tiranei.", "Statut de parc național."],
      en: ["Dajti Ekspres cable car.", "View of Tirana.", "National park status."]
    }
  },
  {
    id: "nat-koman",
    name: { de: "Koman-Stausee", hu: "Komani-tó", ro: "Lacul Koman", en: "Lake Koman" },
    description: { de: "Fjordähnliche Landschaft", hu: "Fjordhoz hasonló táj", ro: "Peisaj asemănător fiordurilor", en: "Fjord-like landscape" },
    descriptionAdvanced: { de: "Ein Stausee mit einer der spektakulärsten Fährfahrten Europas.", hu: "Víztározó Európa egyik leglátványosabb kompútvonalával.", ro: "Un lac de acumulare cu una dintre cele mai spectaculoase călătorii cu feribotul din Europa.", en: "A reservoir with one of the most spectacular ferry rides in Europe." },
    type: "landmark",
    coords: [42.1075, 19.8272],
    parent: "AL-002",
    facts: {
      de: ["Steile Felswände.", "Wichtig für Wasserkraft.", "Bootstouren."],
      hu: ["Meredek sziklafalak.", "Fontos a vízerőművek számára.", "Hajótúrák."],
      ro: ["Pereți de stâncă abrupți.", "Important pentru hidroenergie.", "Excursii cu barca."],
      en: ["Steep rock walls.", "Important for hydropower.", "Boat tours."]
    }
  },
  {
    id: "nat-karavasta",
    name: { de: "Karavasta-Lagune", hu: "Karavasta-lagúna", ro: "Laguna Karavasta", en: "Karavasta Lagoon" },
    description: { de: "Größte Lagune", hu: "A legnagyobb lagúna", ro: "Cea mai mare lagună", en: "Largest lagoon" },
    descriptionAdvanced: { de: "Ein bedeutendes Feuchtgebiet an der Adriaküste.", hu: "Jelentős vizes élőhely az Adria partján.", ro: "O zonă umedă importantă de pe coasta Adriaticii.", en: "An important wetland on the Adriatic coast." },
    type: "landmark",
    coords: [40.9231, 19.4975],
    parent: "AL-008",
    facts: {
      de: ["Heimat krausköpfiger Pelikane.", "Nationalpark Divjaka-Karavasta.", "Große Artenvielfalt."],
      hu: ["Borzas pelikánok otthona.", "Divjaka-Karavasta Nemzeti Park.", "Nagy biológiai sokféleség."],
      ro: ["Habitat al pelicanilor creți.", "Parcul Național Divjaka-Karavasta.", "Biodiversitate mare."],
      en: ["Home to Dalmatian pelicans.", "Divjaka-Karavasta National Park.", "Great biodiversity."]
    }
  },
  {
    id: "nat-tomorr",
    name: { de: "Berg Tomorr", hu: "Tomorr-hegy", ro: "Muntele Tomorr", en: "Mount Tomorr" },
    description: { de: "Heiliger Berg", hu: "Szent hegy", ro: "Muntele sfânt", en: "Holy mountain" },
    descriptionAdvanced: { de: "Ein imposanter Bergmassiv in der Nähe von Berat, ein heiliger Ort für Bektaschi.", hu: "Impozáns hegytömb Berat közelében, a bektasik szent helye.", ro: "Un masiv muntos impunător lângă Berat, un loc sfânt pentru bectași.", en: "An imposing mountain massif near Berat, a holy site for Bektashi." },
    type: "mountain",
    coords: [40.6319, 20.1558],
    parent: "AL-012",
    facts: {
      de: ["Wallfahrtsort.", "Nationalpark.", "Blick über ganz Albanien."],
      hu: ["Zarándokhely.", "Nemzeti park.", "Kilátás egész Albániára."],
      ro: ["Loc de pelerinaj.", "Parc național.", "Vedere peste toată Albania."],
      en: ["Pilgrimage site.", "National park.", "View over all of Albania."]
    }
  }
];

export const albaniaAllPoi: POI[] = [
  albaniaCountry,
  ...albaniaCities,
  ...albaniaHistorical,
  ...albaniaNature
];
