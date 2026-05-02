import type { POI } from "./poi";
import { poiExtraCanadaCities } from "./poiExtraCanadaCities";
import { poiExtraCanadaCitiesV2 } from "./poiExtraCanadaCitiesV2";
import { poiExtraCanadaEconomicV2 } from "./poiExtraCanadaEconomicV2";
import { poiExtraCanadaHistory } from "./poiExtraCanadaHistory";
import { poiExtraCanadaHistoryV2 } from "./poiExtraCanadaHistoryV2";
import { poiExtraCanadaLandmarksV2 } from "./poiExtraCanadaLandmarksV2";
import { poiExtraCanadaLifeV2 } from "./poiExtraCanadaLifeV2";
import { poiExtraCanadaNatureV2 } from "./poiExtraCanadaNatureV2";
import { poiExtraCanadaRefill } from "./poiExtraCanadaRefill";
import { poiExtraCanadaReliefV2 } from "./poiExtraCanadaReliefV2";

export const canadaCountry: POI[] = [];
export const canadaRegions: POI[] = [];

export const canadaCities: POI[] = [
  {
    id: "can_cap",    name: { de: "Ottawa", hu: "Ottawa", ro: "Ottawa", en: "Ottawa" },
    description: { de: "Capital of Canada", hu: "Capital of Canada", ro: "Capital of Canada", en: "Capital of Canada" },
    descriptionAdvanced: {
      de: "Ottawa ist die majestätische Hauptstadt Kanadas, gelegen am Zusammenfluss dreier Flüsse. Die Stadt ist bekannt für ihre prächtige neugotische Architektur auf dem Parliament Hill und den Rideau-Kanal, der sich im Winter in die längste Eislaufbahn der Welt verwandelt.",
      hu: "Ottawa Kanada fenséges fővárosa, amely három folyó találkozásánál fekszik. A város híres a Parlament-dombon található pompás neogótikus építészetéről és a Rideau-csatornáról, amely télen a világ leghosszabb korcsolyapályájává alakul. Földrajz K7 – hegységek és folyók.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A város a 19. század közepén vált Kanada állandó fővárosává.", "Az Ottawa-folyó választja el Ontariótól és Quebec tartománytól.", "Itt található a Kanadai Történeti Múzeum, amely az ország egyik leglátogatottabb kulturális intézménye.", "A Rideau-csatorna 202 km hosszú, és a 19. századi mérnöki munka remekműve.", "A városban található a Nemzeti Művészeti Galéria.", "A Tulipánfesztivál alatt a város több millió virágban pompázik."],
      ro: [],
      en: []
    },
    facts: { de: ["Bundeshauptstadt", "Sitz des Parlaments", "Rideau-Kanal (UNESCO)", "Zweisprachige Stadt (EN/FR)", "Zentrum für Technologie"], hu: ["Szövetségi főváros", "A parlament székhelye", "Rideau-csatorna (UNESCO)", "Kétnyelvű város (angol/francia)", "Technológiai központ"], ro: ["Capitala federală", "Sediul Parlamentului", "Canalul Rideau (UNESCO)", "Oraș bilingv (EN/FR)", "Centru tehnologic"], en: ["Federal capital", "Seat of Parliament", "Rideau Canal (UNESCO)", "Bilingual city (EN/FR)", "High-tech hub"] },
    elevation: 70, historyYear: 1826, historyPeriod: "Victorian Era",
    coords: [-75.6972, 45.4215], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_tor",    name: { de: "Toronto", hu: "Toronto", ro: "Toronto", en: "Toronto" },
    description: { de: "Largest city in Canada", hu: "Largest city in Canada", ro: "Largest city in Canada", en: "Largest city in Canada" },
    descriptionAdvanced: {
      de: "Toronto ist das pulsierende wirtschaftliche Herz Kanadas und eine der multikulturellsten Städte der Welt. Die Metropole am Ufer des Ontariosees besticht durch ihre beeindruckende Skyline, die vom berühmten CN Tower dominiert wird, und ihre vielfältigen Kulturviertel.",
      hu: "Toronto Kanada lüktető gazdasági szíve és a világ egyik legmultikulturálisabb városa. Az Ontario-tó partján fekvő metropoliszt lenyűgöző látkép jellemzi, amelyet a híres CN Tower ural, kiegészülve változatos kulturális negyedekkel. Földrajz K8 – nagyvárosok és urbanizáció.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Kanada legnagyobb metropolisza és Ontario tartomány székhelye.", "A CN Tower 553 méteres magasságával sokáig a világ legmagasabb szabadon álló építménye volt.", "Toronto lakosságának több mint fele külföldön született.", "A várost a 'világ leghíresebb multikulturális olvasztótégelyeként' tartják számon.", "Az Ontario-tó kikötőjéből kompok indulnak a közeli Toronto-szigetekre.", "Híres a híres TIFF filmfesztiválról."],
      ro: [],
      en: []
    },
    facts: { de: ["Größte Stadt Kanadas", "Finanzzentrum", "CN Tower Wahrzeichen", "Multikulturelle Bevölkerung", "Hafen am Ontariosee"], hu: ["Kanada legnagyobb városa", "Pénzügyi központ", "A CN Tower a jelképe", "Multikulturális lakosság", "Kikötő az Ontario-tavon"], ro: ["Cel mai mare oraș din Canada", "Centru financiar", "Simbolul CN Tower", "Populație multiculturală", "Port la lacul Ontario"], en: ["Canada's largest city", "Financial center", "CN Tower landmark", "Multicultural population", "Port on Lake Ontario"] },
    elevation: 76, historyYear: 1793, historyPeriod: "Colonial/Modern",
    coords: [-79.3832, 43.6532], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_mon",    name: { de: "Montreal", hu: "Montreal", ro: "Montreal", en: "Montreal" },
    description: { de: "Major city in Quebec", hu: "Major city in Quebec", ro: "Major city in Quebec", en: "Major city in Quebec" },
    descriptionAdvanced: {
      de: "Montreal ist eine charmante Mischung aus europäischem Flair und nordamerikanischer Energie. Als zweitgrößte französischsprachige Stadt der Welt ist sie bekannt für ihre erstklassige Gastronomie, ihre lebendige Kunstszene und die historische Altstadt Vieux-Montréal.",
      hu: "Montreal az európai báj és az észak-amerikai energia bájos keveréke. A világ második legnagyobb francia nyelvű városaként ismert kiváló gasztronómiájáról, élénk művészeti életéről és Vieux-Montréal történelmi óvárosáról. Földrajz K6 – városok szerkezete.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Montreal egy szigetváros a Szent Lőrinc-folyón.", "A városnak van egy kiterjedt 'földalatti városa' (RÉSO), amely főleg a téli hónapokban népszerű.", "A Mont-Royal hegyről csodálatos kilátás nyílik a metropoliszra.", "A Vieux-Montréal a legrégebbi negyed, macskaköves utcákkal.", "Itt zajlik az éves Montreal Jazz Fesztivál.", "A városi gasztronómia különlegessége a poutine."],
      ro: [],
      en: []
    },
    facts: { de: ["Zweitgrößte Stadt Kanadas", "Französischsprachige Metropole", "Historisches Vieux-Montréal", "Kultur- und Festivalzentrum", "Großer Binnenhafen"], hu: ["Kanada második legnagyobb városa", "Francia nyelvű metropolisz", "Történelmi Vieux-Montréal", "Kulturális és fesztiválközpont", "Nagy folyami kikötő"], ro: ["Al doilea oraș ca mărime din Canada", "Metropolă francofonă", "Vieux-Montréal istoric", "Centru cultural și de festivaluri", "Mare port interior"], en: ["Canada's second largest city", "French-speaking metropolis", "Historic Old Montreal", "Cultural and festival hub", "Major inland port"] },
    elevation: 37, historyYear: 1642, historyPeriod: "French Colonial",
    coords: [-73.5673, 45.5017], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_van",    name: { de: "Vancouver", hu: "Vancouver", ro: "Vancouver", en: "Vancouver" },
    description: { de: "Major city in British Columbia", hu: "Major city in British Columbia", ro: "Major city in British Columbia", en: "Major city in British Columbia" },
    descriptionAdvanced: {
      de: "Vancouver ist eine atemberaubende Küstenstadt, in der das Meer auf die Berge trifft. Sie ist berühmt für ihre spektakuläre natürliche Umgebung, den weitläufigen Stanley Park und ihre Rolle als bedeutender Pazifikhafen und Zentrum der Filmindustrie.",
      hu: "Vancouver egy lélegzetelállító tengerparti város, ahol az óceán találkozik a hegyekkel. Híres látványos természeti környezetéről, a hatalmas Stanley Parkról, valamint jelentős csendes-óceáni kikötőként és a filmipar központjaként betöltött szerepéről. Sachkunde K4 – óceánparti élővilág.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A város a hegyek és a tenger találkozásánál fekszik.", "A Stanley Park az egyik legnagyobb városi park Észak-Amerikában.", "Vancouver a filmgyártás egyik világközpontja, gyakran 'Északi Hollywood'.", "A város éghajlata Kanada egyik legenyhébbje.", "Itt található a híres Capilano függőhíd.", "A város 2010-ben téli olimpiát rendezett."],
      ro: [],
      en: []
    },
    facts: { de: ["Tor zum Pazifik", "Mildes Klima", "Stanley Park", "Wichtiges Filmzentrum", "Multikulturelle Hafenstadt"], hu: ["Kapu a Csendes-óceánhoz", "Enyhe éghajlat", "Stanley Park", "Fontos filmgyártási központ", "Multikulturális kikötőváros"], ro: ["Poarta către Pacific", "Climă blândă", "Stanley Park", "Centru cinematografic important", "Oraș port multicultural"], en: ["Gateway to the Pacific", "Mild climate", "Stanley Park", "Major film production hub", "Multicultural port city"] },
    elevation: 2, historyYear: 1886, historyPeriod: "Modern",
    coords: [-123.1207, 49.2827], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_cal",    name: { de: "Calgary", hu: "Calgary", ro: "Calgary", en: "Calgary" },
    description: { de: "Major city in Alberta", hu: "Major city in Alberta", ro: "Major city in Alberta", en: "Major city in Alberta" },
    descriptionAdvanced: {
      de: "Calgary ist eine dynamische Stadt in den Ausläufern der Rocky Mountains, bekannt für ihre starke Verbindung zur Ölindustrie und ihre Wildwest-Traditionen. Jedes Jahr zieht die weltberühmte 'Calgary Stampede' Besucher aus aller Welt in die Stadt.",
      hu: "Calgary egy dinamikus város a Sziklás-hegység lábánál, amely erős olajipari kötődéseiről és vadnyugati hagyományairól ismert. Minden évben a világhírű 'Calgary Stampede' látogatókat vonz a világ minden tájáról. Földrajz K5 – hegységelőtéri települések.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Calgary az olajipar kanadai központja.", "A Calgary Stampede a világ egyik legnagyobb rodeója.", "A város a Bow és az Elbow folyók torkolatánál fekszik.", "A városban található a Calgary Tower.", "A közelében található a Banff Nemzeti Park.", "Kanada egyik legnaposabb városa."],
      ro: [],
      en: []
    },
    facts: { de: ["Zentrum der Ölindustrie", "Tor zu den Rockies", "Calgary Stampede", "Sonnenreichste Stadt Kanadas", "Wirtschaftshub"], hu: ["Az olajipar központja", "Kapu a Sziklás-hegységhez", "Calgary Stampede", "Kanada legnaposabb városa", "Gazdasági csomópont"], ro: ["Centrul industriei petroliere", "Poarta către Munții Stâncoși", "Calgary Stampede", "Cel mai însorit oraș din Canada", "Hub economic"], en: ["Center of the oil industry", "Gateway to the Rockies", "Calgary Stampede", "Sunniest city in Canada", "Economic hub"] },
    elevation: 1045, historyYear: 1875, historyPeriod: "Victorian/Modern",
    coords: [-114.0719, 51.0447], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_edm",    name: { de: "Edmonton", hu: "Edmonton", ro: "Edmonton", en: "Edmonton" },
    description: { de: "Capital of Alberta", hu: "Capital of Alberta", ro: "Capital of Alberta", en: "Capital of Alberta" },
    descriptionAdvanced: {
      de: "Edmonton ist die nördlichste Millionenstadt Nordamerikas und ein wichtiges Tor zur Arktis. Die Stadt ist bekannt für ihr pulsierendes Kulturleben, das ausgedehnte Flusstal des North Saskatchewan River und die gewaltige West Edmonton Mall.",
      hu: "Edmonton Észak-Amerika legészakibb, több mint egymillió lakosú városa, és fontos kapu az Arktisz felé. A város híres pezsgő kulturális életéről, az Észak-Saskatchewan folyó kiterjedt völgyéről és a hatalmas West Edmonton Mallról. Földrajz K6 – északi városok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Edmonton Alberta tartomány fővárosa.", "A West Edmonton Mall Észak-Amerika egyik legnagyobb bevásárlóközpontja.", "Az Észak-Saskatchewan folyó völgye hatalmas parkrendszerrel rendelkezik.", "Észak-Amerika legészakibb nagyvárosa.", "Fontos bázis az északi olajkutatásokhoz.", "A városban található a híres Fringe Fesztivál."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Alberta", "Tor zum Norden", "Festivalstadt", "Größtes städtisches Parksystem", "West Edmonton Mall"], hu: ["Alberta fővárosa", "Kapu északra", "A fesztiválok városa", "Legnagyobb városi parkrendszer", "West Edmonton Mall"], ro: ["Capitala Albertei", "Poartă către Nord", "Orașul festivalurilor", "Cel mai mare sistem de parcuri urbane", "West Edmonton Mall"], en: ["Capital of Alberta", "Gateway to the North", "Festival City", "Largest urban park system", "West Edmonton Mall"] },
    elevation: 645, historyYear: 1795, historyPeriod: "Colonial/Modern",
    coords: [-113.4909, 53.5444], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_que",    name: { de: "Quebec City", hu: "Quebec City", ro: "Quebec City", en: "Quebec City" },
    description: { de: "Capital of Quebec", hu: "Capital of Quebec", ro: "Capital of Quebec", en: "Capital of Quebec" },
    descriptionAdvanced: {
      de: "Québec ist eine der ältesten europäischen Siedlungen in Nordamerika und die einzige befestigte Stadt nördlich von Mexiko. Die historische Altstadt (Vieux-Québec) mit ihren kopfsteingepflasterten Gassen und dem majestätischen Château Frontenac ist ein UNESCO-Weltkulturerbe.",
      hu: "Québec Észak-Amerika egyik legrégebbi európai települése és az egyetlen erődített város Mexikótól északra. A történelmi óváros (Vieux-Québec) macskaköves utcáival és a fenséges Château Frontenac-kal az UNESCO Világörökség része. Történelem K7 – koloniális korszak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Québec az egyetlen erődített város Mexikótól északra.", "A Château Frontenac a világ legtöbbet fényképezett hotelje.", "A Vieux-Québec UNESCO világörökségi helyszín.", "A városban található a híres Citadella.", "A Szent Lőrinc-folyó partján fekszik.", "A város téli karneválja világhírű."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Québec", "UNESCO Weltkulturerbe", "Befestigte Altstadt", "Château Frontenac", "Überwiegend Französischsprachig"], hu: ["Québec tartomány fővárosa", "UNESCO Világörökség", "Erődített óváros", "Château Frontenac", "Túlnyomórészt francia nyelvű"], ro: ["Capitala provinciei Québec", "Patrimoniu Mondial UNESCO", "Oraș vechi fortificat", "Château Frontenac", "Predominant francofon"], en: ["Capital of Quebec", "UNESCO World Heritage Site", "Fortified Old Town", "Château Frontenac", "Predominantly French-speaking"] },
    elevation: 98, historyYear: 1608, historyPeriod: "French Colonial",
    coords: [-71.208, 46.8139], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_win",    name: { de: "Winnipeg", hu: "Winnipeg", ro: "Winnipeg", en: "Winnipeg" },
    description: { de: "Capital of Manitoba", hu: "Capital of Manitoba", ro: "Capital of Manitoba", en: "Capital of Manitoba" },
    descriptionAdvanced: {
      de: "Winnipeg ist das geografische Zentrum Kanadas und ein wichtiger Verkehrsknotenpunkt in der Prärie. Die Stadt ist bekannt für ihr reiches kulturelles Erbe, das moderne Kanadische Museum für Menschenrechte und den historischen Versammlungsort 'The Forks'.",
      hu: "Winnipeg Kanada földrajzi középpontja és a préri vidék fontos közlekedési csomópontja. A város híres gazdag kulturális örökségéről, a modern Kanadai Emberi Jogi Múzeumról és a történelmi 'The Forks' találkozóhelyről. Földrajz K5 – préri.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Winnipeg Manitoba fővárosa.", "A 'The Forks' a két folyó találkozásánál fekvő történelmi helyszín.", "A Kanadai Emberi Jogi Múzeum építészeti remekmű.", "Kanada földrajzi középpontjának tekintik.", "A városnak gazdag a métis öröksége.", "A téli hőmérséklet rendkívül alacsony lehet."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Manitoba", "Geografisches Zentrum Kanadas", "Kanadisches Museum für Menschenrechte", "The Forks Treffpunkt", "Kaltes Winterklima"], hu: ["Manitoba fővárosa", "Kanada földrajzi középpontja", "Kanadai Emberi Jogi Múzeum", "The Forks találkozóhely", "Hideg téli éghajlat"], ro: ["Capitala provinciei Manitoba", "Centrul geografic al Canadei", "Muzeul Canadian pentru Drepturile Omului", "Locul de întâlnire The Forks", "Climă de iarnă geroasă"], en: ["Capital of Manitoba", "Geographic center of Canada", "Canadian Museum for Human Rights", "The Forks meeting place", "Cold winter climate"] },
    elevation: 239, historyYear: 1873, historyPeriod: "Victorian/Modern",
    coords: [-97.1384, 49.8951], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_hal",    name: { de: "Halifax", hu: "Halifax", ro: "Halifax", en: "Halifax" },
    description: { de: "Capital of Nova Scotia", hu: "Capital of Nova Scotia", ro: "Capital of Nova Scotia", en: "Capital of Nova Scotia" },
    descriptionAdvanced: {
      de: "Halifax ist eine historische Hafenstadt am Atlantik mit einer tiefen maritimen Tradition. Die Stadt ist bekannt für ihre beeindruckende Zitadelle, ihre lebendige Uferpromenade und ihre bedeutende Rolle in der Geschichte der kanadischen Einwanderung und der Marine.",
      hu: "Halifax egy történelmi atlanti-óceáni kikötőváros, mély tengerészeti hagyományokkal. A város híres lenyűgöző citadellájáról, élénk vízparti sétányáról, valamint a kanadai bevándorlás és haditengerészet történetében betöltött jelentős szerepéről. Történelem K8 – tengerészet.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Halifax Új-Skócia tartomány székhelye.", "A város stratégiai jelentőségű kikötő az Atlanti-óceánon.", "A Halifaxi Citadella egy csillag alakú erőd.", "A Pier 21 volt az első kikötője a bevándorlóknak.", "A városnak fontos haditengerészeti szerepe van.", "A tengerparti sétány a város egyik legnépszerűbb turistacélpontja."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Neuschottland", "Strategischer Atlantikhafen", "Halifax Zitadelle", "Pier 21 Einwanderungsmuseum", "Zentrum für Meeresforschung"], hu: ["Új-Skócia fővárosa", "Stratégiai atlanti kikötő", "Halifaxi Citadella", "Pier 21 Bevándorlási Múzeum", "Tengerkutatási központ"], ro: ["Capitala Noii Scoții", "Port strategic la Atlantic", "Citadela Halifax", "Muzeul Imigrației Pier 21", "Centru de cercetare marină"], en: ["Capital of Nova Scotia", "Strategic Atlantic port", "Halifax Citadel", "Pier 21 Immigration Museum", "Marine research hub"] },
    elevation: 25, historyYear: 1749, historyPeriod: "Colonial",
    coords: [-63.5728, 44.6488], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_vic",    name: { de: "Victoria", hu: "Victoria", ro: "Victoria", en: "Victoria" },
    description: { de: "Capital of British Columbia", hu: "Capital of British Columbia", ro: "Capital of British Columbia", en: "Capital of British Columbia" },
    descriptionAdvanced: {
      de: "Victoria, an der Südspitze von Vancouver Island gelegen, besticht durch ihr britisches Erbe und ihr mildes Klima. Die 'Gartenstadt' ist berühmt für ihre prächtigen Parlamentsgebäude, das historische Empress Hotel und ihre malerische Lage am Inner Harbour.",
      hu: "A Vancouver-sziget déli csücskén fekvő Victoria brit örökségével és enyhe éghajlatával bűvöl el. A 'Kertváros' híres pompás parlamenti épületeiről, a történelmi Empress Hotelről és a Belső Kikötő festői környezetéről. Földrajz K6 – szigeti városok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Victoria Brit Kolumbia tartomány fővárosa.", "A város híres az enyhe mediterrán jellegű éghajlatáról.", "Az Empress Hotel egy történelmi luxusszálloda.", "A városkép erősen emlékeztet Angliára.", "Híres a Butchart-kertekről.", "A Belső Kikötő a város központi találkozóhelye."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von British Columbia", "Auf Vancouver Island", "Gartenstadt", "Britisches Flair", "Mildestes Klima Kanadas"], hu: ["Brit Kolumbia fővárosa", "A Vancouver-szigeten található", "Kertváros", "Brit hangulat", "Kanada legenyhébb éghajlata"], ro: ["Capitala Columbiei Britanice", "Pe insula Vancouver", "Orașul Grădină", "Atmosferă britanică", "Cea mai blândă climă din Canada"], en: ["Capital of British Columbia", "On Vancouver Island", "Garden City", "British flair", "Mildest climate in Canada"] },
    elevation: 23, historyYear: 1843, historyPeriod: "Victorian Era",
    coords: [-123.3656, 48.4284], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_ss",    name: { de: "Saskatoon", hu: "Saskatoon", ro: "Saskatoon", en: "Saskatoon" },
    description: { de: "Major city in Saskatchewan", hu: "Major city in Saskatchewan", ro: "Major city in Saskatchewan", en: "Major city in Saskatchewan" },
    descriptionAdvanced: {
      de: "Saskatoon ist die größte Stadt in Saskatchewan und wird wegen ihrer zahlreichen Brücken über den South Saskatchewan River oft als 'Paris der Prärie' bezeichnet. Die Stadt ist ein blühendes Zentrum für Landwirtschaft und Biotechnologie.",
      hu: "Saskatoon Saskatchewan legnagyobb városa, amelyet a Dél-Saskatchewan folyón átívelő számos hídja miatt gyakran a 'Préri Párizsaként' emlegetnek. A város a mezőgazdaság és a biotechnológia virágzó központja. Földrajz K7 – folyók és városok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Saskatoon a préri egyik meghatározó városa.", "Hét híd szeli át a várost.", "A biotechnológiai kutatások fontos központja.", "A város neve a saskatoon-bogyóból származik.", "A South Saskatchewan folyó fontos része a városképnek.", "Fontos vasúti csomópont."],
      ro: [],
      en: []
    },
    facts: { de: ["Größte Stadt in Saskatchewan", "Paris der Prärie", "Sieben Brücken", "Zentrum der Biotechnologie", "Wichtiger Eisenbahnknoten"], hu: ["Saskatchewan legnagyobb városa", "A préri Párizsa", "Hét híd városa", "Biotechnológiai központ", "Fontos vasúti csomópont"], ro: ["Cel mai mare oraș din Saskatchewan", "Parisul Preriei", "Orașul celor șapte poduri", "Centru de biotehnologie", "Nod feroviar important"], en: ["Largest city in Saskatchewan", "Paris of the Prairies", "City of Seven Bridges", "Biotechnology hub", "Major railway junction"] },
    elevation: 482, historyYear: 1882, historyPeriod: "Victorian/Modern",
    coords: [-106.67, 52.1332], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_reg",    name: { de: "Regina", hu: "Regina", ro: "Regina", en: "Regina" },
    description: { de: "Capital of Saskatchewan", hu: "Capital of Saskatchewan", ro: "Capital of Saskatchewan", en: "Capital of Saskatchewan" },
    descriptionAdvanced: {
      de: "Regina ist die stolze Hauptstadt von Saskatchewan und ein kulturelles Zentrum in der weiten Prärie. Die Stadt ist berühmt als Ausbildungsstätte der Royal Canadian Mounted Police und für den künstlich angelegten Wascana Lake im Herzen der Stadt.",
      hu: "Regina Saskatchewan büszke fővárosa és a hatalmas préri kulturális központja. A város híres a Kanadai Királyi Lovasrendőrség kiképzőközpontjáról és a város szívében található, mesterséges Wascana-tóról. Sachkunde K5 – bűnüldözés története.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Regina Saskatchewan fővárosa.", "Az RCMP (Királyi Lovasrendőrség) itt képezi az újoncokat.", "A Wascana-tó egy hatalmas, mesterséges városi park központja.", "A városnak fontos szerepe van a mezőgazdasági terménykereskedelemben.", "A Royal Saskatchewan Múzeum az őslakos kultúrát mutatja be.", "Regina a préri közepén fekszik."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Saskatchewan", "Heimat der RCMP", "Wascana Centre", "Künstlicher See", "Wirtschaftszentrum der Prärie"], hu: ["Saskatchewan fővárosa", "A Lovasrendőrség (RCMP) otthona", "Wascana Centre", "Mesterséges tó", "A préri gazdasági központja"], ro: ["Capitala provinciei Saskatchewan", "Casa RCMP (Poliția Călare)", "Wascana Centre", "Lac artificial", "Centru economic în prerie"], en: ["Capital of Saskatchewan", "Home of the RCMP", "Wascana Centre", "Man-made lake", "Economic hub of the prairies"] },
    elevation: 577, historyYear: 1882, historyPeriod: "Victorian/Modern",
    coords: [-104.6158, 50.4492], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_stj",    name: { de: "St. John's", hu: "St. John's", ro: "St. John's", en: "St. John's" },
    description: { de: "Capital of Newfoundland and Labrador", hu: "Capital of Newfoundland and Labrador", ro: "Capital of Newfoundland and Labrador", en: "Capital of Newfoundland and Labrador" },
    descriptionAdvanced: {
      de: "St. John's ist eine der ältesten und am weitesten östlich gelegenen Städte Nordamerikas, bekannt für ihre bunt bemalten Häuser ('Jellybean Row') und den steilen Signal Hill. Die Stadt blickt auf eine reiche Fischereitradition zurück und ist heute ein wichtiger Stützpunkt für die Offshore-Ölindustrie.",
      hu: "St. John's Észak-Amerika egyik legrégebbi és legkeletibb városa, amely híres színes házairól ('Jellybean Row') és a meredek Signal Hillről. A város gazdag halászati múlttal rendelkezik, ma pedig az offshore olajipar fontos bázisa. Földrajz K5 – óceánparti városok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["St. John's Új-Fundland és Labrador fővárosa.", "Ez a legkeletibb észak-amerikai város.", "A színes 'Jellybean Row' házak a város jelképei.", "A Signal Hillről történelmi jelentőségű rádiójelet vettek.", "A város halászati központként indult.", "Ma az offshore olajipar bázisa."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Neufundland", "Östlichste Stadt Nordamerikas", "Jellybean Row Häuser", "Historischer Signal Hill", "Hafenstadt am Atlantik"], hu: ["Új-Fundland fővárosa", "Észak-Amerika legkeletibb városa", "Jellybean Row színes házak", "Történelmi Signal Hill", "Atlanti kikötőváros"], ro: ["Capitala Newfoundland", "Cel mai estic oraș din America de Nord", "Casele colorate Jellybean Row", "Signal Hill istoric", "Oraș port la Atlantic"], en: ["Capital of Newfoundland", "Most easterly city in NA", "Jellybean Row houses", "Historic Signal Hill", "Atlantic port city"] },
    elevation: 0, historyYear: 1497, historyPeriod: "Discovery Era",
    coords: [-52.7126, 47.5615], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_cha",    name: { de: "Charlottetown", hu: "Charlottetown", ro: "Charlottetown", en: "Charlottetown" },
    description: { de: "Capital of PEI", hu: "Capital of PEI", ro: "Capital of PEI", en: "Capital of PEI" },
    descriptionAdvanced: {
      de: "Charlottetown ist die charmante Hauptstadt von Prince Edward Island und gilt als 'Geburtsort der Konföderation' Kanadas. Die Stadt besticht durch ihre gut erhaltene viktorianische Architektur, ihre Bedeutung als Kulturzentrum und ihre Nähe zu wunderschönen roten Sandstränden.",
      hu: "Charlottetown a Prince Edward-sziget bájos fővárosa, amelyet Kanada 'konföderációjának bölcsőjeként' emlegetnek. A várost jól megőrzött viktoriánus építészete, kulturális jelentősége és a gyönyörű vörös homokos strandok közelsége teszi vonzóvá. Történelem K8 – Kanada születése.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Charlottetown a Prince Edward-sziget fővárosa.", "Itt írták alá a Konföderáció létrehozásáról szóló megállapodás alapjait.", "A város tele van jól megőrzött viktoriánus épületekkel.", "A vörös homokos strandok a sziget jellemzői.", "A városnak gazdag a kulturális élete.", "Fontos kikötőhely a régióban."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von PEI", "Geburtsort der Konföderation", "Viktorianische Architektur", "Heimat von Anne auf Green Gables", "Wichtiger Fischereihafen"], hu: ["PEI fővárosa", "A konföderáció szülőhelye", "Viktoriánus építészet", "Anne a Zöld Oromból otthona", "Fontos halászkikötő"], ro: ["Capitala PEI", "Locul de naștere al Confederației", "Arhitectură victoriană", "Casa personajului Anne of Green Gables", "Port de pescuit important"], en: ["Capital of PEI", "Birthplace of Confederation", "Victorian architecture", "Home of Anne of Green Gables", "Important fishing port"] },
    elevation: 8, historyYear: 1764, historyPeriod: "Colonial/Victorian",
    coords: [-63.1311, 46.2382], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_fre",    name: { de: "Fredericton", hu: "Fredericton", ro: "Fredericton", en: "Fredericton" },
    description: { de: "Capital of New Brunswick", hu: "Capital of New Brunswick", ro: "Capital of New Brunswick", en: "Capital of New Brunswick" },
    descriptionAdvanced: {
      de: "Fredericton, am Ufer des majestätischen Saint John River gelegen, ist die grüne Hauptstadt von New Brunswick. Die Stadt ist bekannt für ihre historische Bedeutung als Zentrum der Loyalisten, ihre renommierte Universität und ihre lebendige Kunstszene.",
      hu: "Fredericton a fenséges Saint John-folyó partján fekvő, zöldellő fővárosa New Brunswicknek. A város híres a hűségesek (loyalisták) központjaként betöltött történelmi szerepéről, neves egyeteméről és élénk művészeti életéről. Földrajz K5 – folyók.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Fredericton New Brunswick fővárosa.", "A Saint John-folyó partján helyezkedik el.", "A loyalisták központja volt a függetlenségi háború után.", "A New Brunswick-i Egyetem az ország egyik legrégebbi egyeteme.", "A városnak gazdag a művészeti élete.", "Parkok sokasága jellemzi a városképet."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von New Brunswick", "Am Saint John River", "Historisches Offiziersviertel", "Bedeutendes Bildungszentrum", "Reich an Parks"], hu: ["New Brunswick fővárosa", "A Saint John-folyó partján", "Történelmi tiszti negyed", "Jelentős oktatási központ", "Parkokban gazdag"], ro: ["Capitala New Brunswick", "Pe râul Saint John", "Cartierul istoric al ofițerilor", "Centru educațional important", "Bogat în parcuri"], en: ["Capital of New Brunswick", "On the Saint John River", "Historic Officers' Square", "Significant educational hub", "Wealth of parks"] },
    elevation: 20, historyYear: 1783, historyPeriod: "Loyalist Era",
    coords: [-66.6431, 45.9636], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_whi",    name: { de: "Whitehorse", hu: "Whitehorse", ro: "Whitehorse", en: "Whitehorse" },
    description: { de: "Capital of Yukon", hu: "Capital of Yukon", ro: "Capital of Yukon", en: "Capital of Yukon" },
    descriptionAdvanced: {
      de: "Whitehorse ist die 'Wildnisstadt' im hohen Norden und die Hauptstadt des Yukon-Territoriums. Die Stadt liegt am Yukon River und war ein entscheidender Knotenpunkt während des Klondike-Goldrausches, heute dient sie als Zentrum für Outdoor-Abenteuer und Tourismus.",
      hu: "Whitehorse a 'vadon városa' a távoli északon, Yukon terület fővárosa. A Yukon-folyó partján fekvő város meghatározó csomópont volt a klondike-i aranyláz idején, ma pedig a szabadtéri kalandok és a turizmus központja. Történelem K6 – aranyláz.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Whitehorse Yukon fővárosa.", "Az aranyláz idején élte fénykorát.", "A Yukon-folyó a város életének központja.", "A szabadtéri kalandok központja.", "A környék híres a sarki fényről.", "A városnak történelmi jelentőségű lapátkerekes hajója is van."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Yukon", "Am Yukon River gelegen", "Tor zur Arktis", "Bekannt für Polarlichter", "Historischer Raddampfer SS Klondike"], hu: ["Yukon fővárosa", "A Yukon-folyó mentén fekszik", "Kapu az Arktiszhoz", "Sarki fényéről nevezetes", "Történelmi SS Klondike lapátkerekes hajó"], ro: ["Capitala Yukon", "Situat pe râul Yukon", "Poartă către Arctica", "Cunoscut pentru aurora boreală", "Vasul istoric cu roate SS Klondike"], en: ["Capital of Yukon", "Located on the Yukon River", "Gateway to the Arctic", "Famous for Northern Lights", "Historic SS Klondike sternwheeler"] },
    elevation: 640, historyYear: 1898, historyPeriod: "Gold Rush Era",
    coords: [-135.0568, 60.7212], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_yel",    name: { de: "Yellowknife", hu: "Yellowknife", ro: "Yellowknife", en: "Yellowknife" },
    description: { de: "Capital of NWT", hu: "Capital of NWT", ro: "Capital of NWT", en: "Capital of NWT" },
    descriptionAdvanced: {
      de: "Yellowknife, am Ufer des Großen Sklavensees gelegen, ist die Diamantenhauptstadt Kanadas. Die Stadt hat sich von einer Bergbausiedlung zu einem modernen Verwaltungszentrum entwickelt und ist weltweit als einer der besten Orte zur Beobachtung von Polarlichtern bekannt.",
      hu: "A Nagy-Rabszolga-tó partján fekvő Yellowknife Kanada gyémántfővárosa. A város bányásztelepülésből fejlődött modern közigazgatási központtá, és világszerte a sarki fény megfigyelésének egyik legjobb helyszíneként ismerik. Földrajz K8 – geológia.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Yellowknife az Északnyugati területek fővárosa.", "Kanada gyémántbányászatának központja.", "A Nagy-Rabszolga-tó partján helyezkedik el.", "A sarki fény megfigyelésének egyik legjobb helye.", "Bányásztelepülésből fejlődött modern központtá.", "Az arktiszi légiközlekedés központja."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt der NWT", "Diamantenzentrum", "Am Großen Sklavensee", "Beste Polarlichter", "Nördliches Wirtschaftszentrum"], hu: ["Az Északnyugati területek fővárosa", "Gyémántközpont", "A Nagy-Rabszolga-tónál fekszik", "Legszebb sarki fény", "Északi gazdasági központ"], ro: ["Capitala Teritoriilor de Nord-Vest", "Centrul diamantelor", "Pe malul lacului Marele Sclav", "Cea mai bună auroră boreală", "Centru economic nordic"], en: ["Capital of NWT", "Diamond capital", "On Great Slave Lake", "Best Northern Lights", "Northern economic hub"] },
    elevation: 206, historyYear: 1934, historyPeriod: "Modern/Mining Era",
    coords: [-114.3718, 62.454], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_iqa",    name: { de: "Iqaluit", hu: "Iqaluit", ro: "Iqaluit", en: "Iqaluit" },
    description: { de: "Capital of Nunavut", hu: "Capital of Nunavut", ro: "Capital of Nunavut", en: "Capital of Nunavut" },
    descriptionAdvanced: {
      de: "Iqaluit ist die entlegene Hauptstadt von Nunavut auf der Baffininsel und das kulturelle Herz der Inuit in Kanada. Die Stadt am Frobisher Bay ist geprägt von arktischer Tundra, traditionellem Kunsthandwerk und einer modernen Infrastruktur in einer extremen Umgebung.",
      hu: "Iqaluit Nunavut távoli fővárosa a Baffin-szigeten, a kanadai inuitok kulturális szíve. A Frobisher-öböl partján fekvő várost arktiszi tundra, hagyományos kézművesség és szélsőséges környezetben kiépült modern infrastruktúra jellemzi. Sachkunde K3 – inuitok kultúrája.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Iqaluit Nunavut fővárosa.", "A Baffin-szigeten helyezkedik el.", "Az inuit kultúra központja.", "A Frobisher-öböl partján fekszik.", "Csak repülővel vagy hajóval közelíthető meg.", "Az infrastruktúra a szélsőséges éghajlathoz igazodik."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Nunavut", "Auf der Baffininsel", "Inuit-Kulturzentrum", "Arktisches Klima", "Nur per Flugzeug oder Schiff erreichbar"], hu: ["Nunavut fővárosa", "A Baffin-szigeten található", "Inuit kulturális központ", "Arktiszi éghajlat", "Csak repülővel vagy hajóval elérhető"], ro: ["Capitala Nunavut", "Pe Insula Baffin", "Centru cultural inuit", "Climă arctică", "Accesibil doar cu avionul sau vaporul"], en: ["Capital of Nunavut", "On Baffin Island", "Inuit cultural center", "Arctic climate", "Accessible only by air or sea"] },
    elevation: 5, historyYear: 1942, historyPeriod: "Modern/Arctic Era",
    coords: [-68.5145, 63.7467], type: 'landmark', parent: 'CA'
  },
  {
    id: "ca-mount-robson",
    type: "mountain",
    parent: "CA",
    coords: [-119.1564, 53.1105],
    name: { de: "Mount Robson", hu: "Mount Robson", ro: "Muntele Robson", en: "Mount Robson" },
    description: { de: "Höchster Gipfel in den kanadischen Rocky Mountains.", hu: "A Kanadai-Sziklás-hegység legmagasabb csúcsa.", ro: "Cel mai înalt vârf din Munții Stâncoși Canadieni.", en: "Highest peak in the Canadian Rockies." },
    descriptionAdvanced: {
      de: "Mount Robson ist mit 3.954 Metern der höchste Punkt der kanadischen Rocky Mountains und bildet das Herzstück des gleichnamigen Provinzparks. Seine markante Nordwand ragt fast 2.500 Meter über den Berg Lake empor und ist eine der größten Steilwände Nordamerikas.",
      hu: "A 3954 méter magas Mount Robson a Kanadai-Sziklás-hegység legmagasabb pontja, és az azonos nevű tartományi park központi eleme. Jellegzetes északi fala csaknem 2500 méterrel magasodik a Berg-tó fölé, ami Észak-Amerika egyik legnagyobb függőleges sziklafala. Földrajz K7 – magashegységek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A Kanadai-Sziklás-hegység legmagasabb csúcsa.", "UNESCO Világörökség része.", "Az északi fal 2500 méteres.", "A Fraser-folyó forrásvidéke.", "Alpinisták egyik célpontja.", "Mikroklímát teremt a hegy körül."],
      ro: [],
      en: []
    },
    facts: { de: ["Höchster Gipfel der kanadischen Rockies", "UNESCO Weltnaturerbe", "Spektakuläre Nordwand", "Ursprung des Fraser River", "Schwierig zu besteigen"], hu: ["A Kanadai-Sziklás-hegység legmagasabb csúcsa", "UNESCO Világörökség", "Látványos északi fal", "A Fraser-folyó forrásvidéke", "Nehezen megmászható"], ro: ["Cel mai înalt vârf din Stâncoșii Canadieni", "Patrimoniu Mondial UNESCO", "Perete nordic spectaculos", "Originea râului Fraser", "Dificil de escaladat"], en: ["Highest peak in the Canadian Rockies", "UNESCO World Heritage Site", "Spectacular North Face", "Source region of the Fraser River", "Highly challenging climb"] },
    elevation: 3954, historyYear: 1913, historyPeriod: "Modern Alpine Era"
  },
  {
    id: "ca-fraser-river",
    type: "river",
    parent: "CA",
    coords: [-123.1844, 49.2069],
    name: { de: "Fraser River", hu: "Fraser-folyó", ro: "Fluviul Fraser", en: "Fraser River" },
    description: { de: "Der längste Fluss in British Columbia.", hu: "Brit Kolumbia leghosszabb folyója.", ro: "Cel mai lung râu din Columbia Britanică.", en: "The longest river within British Columbia." },
    descriptionAdvanced: {
      de: "Der Fraser River entspringt in den Rocky Mountains und fließt über 1.300 Kilometer bis zu seiner Mündung südlich von Vancouver. Er ist weltberühmt für seine gewaltigen Lachswanderungen und spielte eine zentrale Rolle während des Cariboo-Goldrausches.",
      hu: "A Fraser-folyó a Sziklás-hegységben ered, és több mint 1300 kilométert tesz meg a Vancouvertől délre található torkolatáig. Világhírű a hatalmas lazacvonulásairól, és központi szerepet játszott a Cariboo-aranyláz idején. Földrajz K6 – folyórendszerek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Brit Kolumbia leghosszabb folyója.", "Hatalmas lazacvonulásairól ismert.", "Központi szerepe volt az aranyláz idején.", "A vízgyűjtő területe óriási.", "Nem gátolták le főágát.", "Fontos ökológiai folyosó."],
      ro: [],
      en: []
    },
    facts: { de: ["Längster Fluss in British Columbia", "Bedeutendster Lachsfluss", "Keine Staudämme am Hauptlauf", "Wichtiger Transportweg", "Starker Sedimenttransport"], hu: ["Brit Kolumbia leghosszabb folyója", "A legjelentősebb lazacívó folyó", "Nincsenek gátak a főágán", "Fontos szállítási útvonal", "Jelentős hordalékszállítás"], ro: ["Cel mai lung râu din Columbia Britanică", "Cel mai important râu pentru somon", "Niciun baraj pe cursul principal", "Cale de transport importantă", "Transport masiv de sedimente"], en: ["Longest river in British Columbia", "World's most productive salmon river", "No dams on the main stem", "Major transportation corridor", "High sediment load"] },
    length: 1375
  },
  {
    id: "ca-great-bear-lake",
    type: "lake",
    parent: "CA",
    coords: [-121.1667, 66.0],
    name: { de: "Großer Bärensee", hu: "Nagy-Medve-tó", ro: "Lacul Marele Urs", en: "Great Bear Lake" },
    description: { de: "Der größte See, der vollständig in Kanada liegt.", hu: "A legnagyobb tó, amely teljesen Kanadában fekszik.", ro: "Cel mai mare lac situat în întregime în Canada.", en: "The largest lake entirely within Canada." },
    descriptionAdvanced: {
      de: "Der Große Bärensee in den Nordwest-Territorien ist der viertgrößte See Nordamerikas und liegt direkt am Polarkreis. Sein Wasser ist außergewöhnlich klar und kalt, und der See ist für den Großteil des Jahres von Eis bedeckt.",
      hu: "Az Északnyugati területeken található Nagy-Medve-tó Észak-Amerika negyedik legnagyobb tava, és közvetlenül az északi sarkkörön fekszik. Vize rendkívül tiszta és hideg, az év nagy részében jég borítja. Sachkunde K5 – sarkvidéki tavak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Kanada legnagyobb belső tava.", "Az északi sarkkörön található.", "A víz hőmérséklete nagyon hideg.", "Az év nagy részében jég borítja.", "A tó területe hatalmas.", "Nagyon ritkán lakott környék."],
      ro: [],
      en: []
    },
    facts: { de: ["Größter rein kanadischer See", "Am Polarkreis gelegen", "Extrem klares Wasser", "Heimat von Seesaiblingen", "Sehr dünn besiedelt"], hu: ["A legnagyobb teljesen kanadai tó", "Az északi sarkkörön fekszik", "Rendkívül tiszta víz", "Tavi pisztrángok élőhelye", "Nagyon ritkán lakott környék"], ro: ["Cel mai mare lac integral canadian", "Situat pe Cercul Polar", "Apă extrem de limpede", "Habitat pentru păstrăvul de lac", "Zonă foarte puțin populată"], en: ["Largest lake entirely in Canada", "Located on the Arctic Circle", "Extremely clear water", "Home to world-record lake trout", "Very sparsely populated area"] },
    area: 31153, elevation: 156
  },
  {
    id: "ca-algonquin-park",
    type: "forest",
    parent: "CA",
    coords: [-78.3819, 45.5539],
    name: { de: "Algonquin Provincial Park", hu: "Algonquin tartományi park", ro: "Parcul Provincial Algonquin", en: "Algonquin Provincial Park" },
    description: { de: "Ältester Provinzpark in Ontario mit dichten Wäldern.", hu: "Ontario legrégebbi tartományi parkja sűrű erdőkkel.", ro: "Cel mai vechi parc provincial din Ontario, cu păduri dese.", en: "Ontario's oldest provincial park, featuring dense forests." },
    descriptionAdvanced: {
      de: "Algonquin Park ist eine riesige Wildnis aus Ahornwäldern, Felsrücken und tausenden von Seen in Zentral-Ontario. Er ist ein Paradies für Kanufahrer und Wanderer und inspirierte zahlreiche kanadische Künstler, insbesondere die berühmte Group of Seven.",
      hu: "Az Algonquin Park egy hatalmas vadon juharerdőkkel, sziklás gerincekkel és több ezer tóval Közép-Ontarióban. A kenusok és túrázók paradicsoma, amely számos kanadai művészt, különösen a híres Group of Seven csoportot ihlette meg. Földrajz K6 – erdőségek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Kanada legrégebbi tartományi parkja.", "Több mint 2400 tó található benne.", "A kenusok paradicsoma.", "A Group of Seven művészek ihletője.", "Jávorszarvasok és farkasok otthona.", "Az őszi lombszínváltozás látványos."],
      ro: [],
      en: []
    },
    facts: { de: ["Ältester Provinzpark Kanadas", "Über 2.400 Seen", "Weltklasse Kanu-Revier", "Heimat von Elchen und Wölfen", "Inspiration für Künstler"], hu: ["Kanada legrégebbi tartományi parkja", "Több mint 2400 tó", "Világszínvonalú kenuútvonalak", "Jávorszarvasok és farkasok otthona", "Művészek ihletője"], ro: ["Cel mai vechi parc provincial din Canada", "Peste 2.400 de lacuri", "Zonă de canotaj de clasă mondială", "Casa elanilor și a lupilor", "Sursă de inspirație pentru artiști"], en: ["Canada's oldest provincial park", "Over 2,400 lakes", "World-class canoeing destination", "Home to moose and wolves", "Inspiration for many artists"] },
    area: 7653, historyYear: 1893, historyPeriod: "Victorian Era"
  },
  {
    id: "ca-mount-cavell",
    type: "mountain",
    parent: "CA",
    coords: [-118.0558, 52.6861],
    name: { de: "Mount Edith Cavell", hu: "Mount Edith Cavell", ro: "Muntele Edith Cavell", en: "Mount Edith Cavell" },
    description: { de: "Ein markanter Berg im Jasper Nationalpark.", hu: "Jellegzetes hegy a Jasper Nemzeti Parkban.", ro: "Un munte proeminent în Parcul Național Jasper.", en: "A prominent mountain in Jasper National Park." },
    descriptionAdvanced: {
      de: "Mount Edith Cavell ist einer der beeindruckendsten Berge im Jasper Nationalpark, bekannt für seine vertikalen Quarzitwände. Zu seinen Füßen liegt der Cavell-Gletscher und der engelsflügelartig geformte Angel-Gletscher, der spektakulär über die Felsen hängt.",
      hu: "A Mount Edith Cavell a Jasper Nemzeti Park egyik leglenyűgözőbb hegye, amely függőleges kvarcitfalairól ismert. Lábánál található a Cavell-gleccser és az angyalszárny formájú Angel-gleccser, amely látványosan csüng a sziklák felett. Sachkunde K4 – gleccserek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A Jasper Nemzeti Park egyik látványossága.", "Függőleges kvarcitfalak jellemzik.", "Az angyalszárny alakú Angel-gleccser.", "Egy hős ápolónőről nevezték el.", "Népszerű túraútvonalak.", "A gleccser látványa lenyűgöző."],
      ro: [],
      en: []
    },
    facts: { de: ["Ikonischer Gipfel in Jasper", "Hängender Angel-Gletscher", "Benannt nach einer heroischen Krankenschwester", "Beliebtes Wanderziel", "Bunte Wildblumenwiesen"], hu: ["A Jasper park ikonikus csúcsa", "Függő Angel-gleccser", "Egy hős ápolónőről nevezték el", "Népszerű túracélpont", "Színes vadvirágos rétek"], ro: ["Vârf iconic în Jasper", "Ghețarul Angel suspendat", "Numit după o infirmieră eroină", "Destinație populară de drumeție", "Pajiști cu flori sălbatice colorate"], en: ["Iconic Jasper peak", "Hanging Angel Glacier", "Named after a heroic nurse", "Popular hiking destination", "Vibrant alpine wildflower meadows"] },
    elevation: 3363
  },
  {
    id: "ca-fortress-louisbourg",
    type: "historical",
    parent: "CA",
    coords: [-59.9861, 45.8917],
    name: { de: "Festung Louisbourg", hu: "Louisbourgi erőd", ro: "Fortăreața Louisbourg", en: "Fortress of Louisbourg" },
    description: { de: "Französische Festung aus dem 18. Jahrhundert auf der Kap-Breton-Insel.", hu: "18. századi francia erőd a Cape Breton-szigeten.", ro: "Fortăreață franceză din secolul al XVIII-lea pe insula Cape Breton.", en: "18th-century French fortress on Cape Breton Island." },
    descriptionAdvanced: {
      de: "Die Festung Louisbourg ist eine teilweise rekonstruierte französische Kolonialfestung aus dem 18. Jahrhundert. Sie war einst einer der geschäftigsten Häfen Nordamerikas und ein wichtiges Zentrum für den Kabeljaufang sowie ein strategischer Militärstützpunkt im Kampf um den Kontinent.",
      hu: "A Louisbourgi erőd egy 18. századi francia gyarmati erődítmény részben rekonstruált változata. Egykor Észak-Amerika egyik legforgalmasabb kikötője és a tőkehalhalászat fontos központja volt, valamint stratégiai katonai bázis a kontinensért folytatott küzdelemben. Történelem K8 – gyarmati háborúk.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A legnagyobb francia gyarmati rekonstrukció.", "A tőkehalhalászat fontos központja volt.", "Stratégiai katonai támaszpont.", "A britek ostromolták.", "Ma szabadtéri múzeumként működik.", "A 18. századi életet mutatja be."],
      ro: [],
      en: []
    },
    facts: { de: ["Größte Rekonstruktion in NA", "Wichtiger französischer Außenposten", "Zentrum des Fischhandels", "Zweimal von Briten belagert"], hu: ["Észak-Amerika legnagyobb rekonstrukciója", "Fontos francia külbázis", "Halkereskedelmi központ", "A britek kétszer is ostromolták"], ro: ["Cea mai mare reconstrucție din NA", "Apostol francez important", "Centru al comerțului cu pește", "Asediat de două ori de britanici"], en: ["Largest reconstruction in NA", "Key French colonial outpost", "Hub for the cod fishery", "Twice besieged by the British"] },
    area: 60, historyYear: 1713, historyPeriod: "French Colonial"
  },
  {
    id: "ca-anse-meadows",
    type: "historical",
    parent: "CA",
    coords: [-55.5312, 51.5953],
    name: { de: "L'Anse aux Meadows", hu: "L'Anse aux Meadows", ro: "L'Anse aux Meadows", en: "L'Anse aux Meadows" },
    description: { de: "Archäologische Stätte einer Wikingersiedlung in Neufundland.", hu: "Viking település régészeti lelőhelye Új-Fundlandon.", ro: "Sit arheologic al unei așezări vikinge în Newfoundland.", en: "Archaeological site of a Viking settlement in Newfoundland." },
    descriptionAdvanced: {
      de: "L'Anse aux Meadows ist die einzige authentifizierte Wikingersiedlung in Nordamerika außerhalb Grönlands. Diese UNESCO-Welterbestätte beweist, dass skandinavische Seefahrer Amerika bereits 500 Jahre vor Kolumbus erreichten und dort Gebäude aus Soden errichteten.",
      hu: "L'Anse aux Meadows az egyetlen hitelesített viking település Észak-Amerikában Grönlandon kívül. Ez az UNESCO Világörökségi helyszín bizonyítja, hogy a skandináv hajósok már 500 évvel Kolumbusz előtt elérték Amerikát, és gyeptéglából emelt épületeket hagytak hátra. Történelem K6 – vikingek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Az egyetlen viking település Észak-Amerikában.", "Az UNESCO Világörökség része.", "500 évvel Kolumbusz előtti lelet.", "Gyeptéglából épült házak maradványai.", "Helge Ingstad fedezte fel 1960-ban.", "Vasművességre utaló nyomokat találtak."],
      ro: [],
      en: []
    },
    facts: { de: ["Einzige Wikingersiedlung in NA", "UNESCO Weltkulturerbe", "500 Jahre vor Kolumbus", "Bauten aus Grassoden"], hu: ["Az egyetlen viking település Észak-Amerikában", "UNESCO Világörökség", "500 évvel Kolumbusz előtt", "Gyeptéglából épült házak"], ro: ["Singura așezare vikingă din NA", "Patrimoniu Mondial UNESCO", "Cu 500 de ani înainte de Columb", "Clădiri din brazde de iarbă"], en: ["Only authenticated Norse site in NA", "UNESCO World Heritage Site", "Dated to circa 1000 AD", "Features sod-walled buildings"] },
    historyYear: 1000, historyPeriod: "Viking Age"
  },
  ];

  export const canadaLandmarks: POI[] = [
  {
    id: "can_banff",    name: { de: "Banff National Park", hu: "Banff Nemzeti Park", ro: "Parcul Național Banff", en: "Banff National Park" },
    description: { de: "National park in the Rockies", hu: "Nemzeti park a Sziklás-hegységben", ro: "Parc național în Munții Stâncoși", en: "National park in the Rockies" },
    descriptionAdvanced: {
      de: "Der Banff-Nationalpark ist der älteste Nationalpark Kanadas und ein Flaggschiff des kanadischen Naturschutzes. Er ist weltberühmt für seine smaragdgrünen Seen, die majestätischen Gipfel der Rocky Mountains und die charmante Gebirgsstadt Banff.",
      hu: "A Banff Nemzeti Park Kanada legrégebbi nemzeti parkja és a kanadai természetvédelem jelképe. Világhírű smaragdzöld tavairól, a Sziklás-hegység fenséges csúcsairól és Banff bájos hegyi városáról.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["1885-ben alapították", "Területe 6641 km²", "Itt halad át az Icefields Parkway panorámaút"],
      ro: [],
      en: []
    },
    facts: { de: ["Ältester Nationalpark Kanadas", "UNESCO Weltnaturerbe", "Spektakuläre Berglandschaft", "Heimat von Grizzlys und Elchen", "Berühmte Thermalquellen"], hu: ["Kanada legrégebbi nemzeti parkja", "UNESCO Világörökség", "Látványos hegyi tájak", "Grizzlyk és jávorszarvasok otthona", "Híres termálforrások"], ro: ["Cel mai vechi parc național din Canada", "Patrimoniu Mondial UNESCO", "Peisaje montane spectaculoase", "Casa urșilor grizzly și a elanilor", "Izvoare termale faimoase"], en: ["Canada's oldest national park", "UNESCO World Heritage Site", "Spectacular mountain scenery", "Home to grizzly bears and moose", "Famous thermal hot springs"] },
    area: 6641, historyYear: 1885, historyPeriod: "Victorian Era",
    coords: [-115.5683, 51.1784], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_niagara",    name: { de: "Niagarafälle", hu: "Niagara-vízesés", ro: "Cascada Niagara", en: "Niagara Falls" },
    description: { de: "Famous waterfalls", hu: "Híres vízesés", ro: "Cascade faimoase", en: "Famous waterfalls" },
    descriptionAdvanced: {
      de: "Die Niagarafälle bestehen aus drei gewaltigen Wasserfällen an der Grenze zwischen Kanada und den USA. Die kanadischen Horseshoe Falls sind die beeindruckendsten und stürzen mit unglaublicher Kraft in die Tiefe, was sie zu einer der meistbesuchten Naturattraktionen der Welt macht.",
      hu: "A Niagara-vízesés három hatalmas vízesésből áll Kanada és az USA határán. A kanadai oldalon található Patkó-vízesés a leglátványosabb, amely elképesztő erővel zúdul a mélybe, a világ egyik leglátogatottabb természeti látványosságává téve a helyet.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Magassága eléri az 57 métert", "Percenként több mint 168 000 m³ víz", "A wisconsini eljegesedés során alakult ki"],
      ro: [],
      en: []
    },
    facts: { de: ["Drei große Wasserfälle", "Grenze Kanada/USA", "Gewaltige Wassermassen", "Wichtige Wasserkraftquelle", "Ikonisches Touristenziel"], hu: ["Három nagy vízesés", "Kanada és az USA határa", "Hatalmas víztömeg", "Fontos vízenergia-forrás", "Ikonikus turisztikai célpont"], ro: ["Trei cascade majore", "Granița Canada/SUA", "Volum uriaș de apă", "Sursă importantă de energie hidroelectrică", "Destinație turistică iconică"], en: ["Three major waterfalls", "Canada/USA border", "Vast water volume", "Major source of hydroelectric power", "Iconic tourist destination"] },
    elevation: 51, length: 1203,
    coords: [-79.0849, 43.0896], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_cntower",    name: { de: "CN Tower", hu: "CN Tower", ro: "CN Tower", en: "CN Tower" },
    description: { de: "Iconic tower in Toronto", hu: "Ikonikus torony Torontóban", ro: "Turn iconic în Toronto", en: "Iconic tower in Toronto" },
    coords: [-79.3871, 43.6426], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_jasper",    name: { de: "Jasper National Park", hu: "Jasper Nemzeti Park", ro: "Parcul Național Jasper", en: "Jasper National Park" },
    description: { de: "National park in Alberta", hu: "Nemzeti park Albertában", ro: "Parc național în Alberta", en: "National park in Alberta" },
    descriptionAdvanced: {
      de: "Jasper ist der größte Nationalpark in den kanadischen Rocky Mountains und bekannt für seine unberührte Wildnis. Er beherbergt das Columbia-Eisfeld, tiefe Schluchten und bietet einige der besten Möglichkeiten zur Sternenbeobachtung in einem Lichtschutzgebiet.",
      hu: "A Jasper a Kanadai-Sziklás-hegység legnagyobb nemzeti parkja, amely érintetlen vadonjáról ismert. Itt található a Columbia-jégmező, mély szurdokok, és a világ egyik legjobb csillagászati megfigyelőhelye (sötét égbolt rezervátum).",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["1907-ben alapították", "Területe 10 878 km²", "Itt található a Mount Edith Cavell"],
      ro: [],
      en: []
    },
    facts: { de: ["Größter Park in den Rockies", "Columbia-Eisfeld", "UNESCO Weltnaturerbe", "Lichtschutzgebiet", "Vielfältige Tierwelt"], hu: ["A Sziklás-hegység legnagyobb parkja", "Columbia-jégmező", "UNESCO Világörökség", "Sötét égbolt rezervátum", "Változatos állatvilág"], ro: ["Cel mai mare parc din Stâncoși", "Câmpul de gheață Columbia", "Patrimoniu Mondial UNESCO", "Rezervație de cer întunecat", "Faună diversă"], en: ["Largest park in the Rockies", "Columbia Icefield", "UNESCO World Heritage Site", "Dark Sky Preserve", "Diverse wildlife"] },
    area: 10878, historyYear: 1907, historyPeriod: "Modern Era",
    coords: [-117.7615, 52.8737], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_whistler",    name: { de: "Whistler", hu: "Whistler", ro: "Whistler", en: "Whistler" },
    description: { de: "Ski resort town", hu: "Sípálya-város", ro: "Stațiune de schi", en: "Ski resort town" },
    coords: [-122.9574, 50.1163], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_fundy",    name: { de: "Bay of Fundy", hu: "Fundy-öböl", ro: "Golful Fundy", en: "Bay of Fundy" },
    description: { de: "Known for high tides", hu: "Híres az árapályról", ro: "Cunoscut pentru maree înalte", en: "Known for high tides" },
    descriptionAdvanced: {
      de: "Die Bay of Fundy ist weltberühmt für den höchsten Tidenhub der Erde, der bis zu 16 Meter erreichen kann. Zweimal täglich fließen gewaltige Wassermassen in die Bucht und wieder hinaus, was spektakuläre Küstenlandschaften wie die Hopewell Rocks formt.",
      hu: "A Fundy-öböl világhírű a földkerekség legmagasabb árapály-szintkülönbségéről, amely elérheti a 16 métert is. Naponta kétszer hatalmas víztömegek áramlanak be és ki az öbölből, látványos tengerparti alakzatokat hozva létre, mint például a Hopewell Rocks.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Az árapály különbség akár 16 méter", "Ritka fosszíliák lelőhelye (Joggins)", "Költöző madarak fontos táplálkozóhelye"],
      ro: [],
      en: []
    },
    facts: { de: ["Höchster Tidenhub weltweit", "Über 160 Mrd. Tonnen Wasserfluss", "UNESCO Biosphärenreservat", "Reich an Walen", "Spektakuläre Klippen"], hu: ["A világ legnagyobb árapálya", "Több mint 160 milliárd tonna vízmozgás", "UNESCO bioszféra-rezervátum", "Bálnákban gazdag", "Látványos sziklafalak"], ro: ["Cea mai mare maree din lume", "Flux de peste 160 miliarde tone de apă", "Rezervație a Biosferei UNESCO", "Bogat în balene", "Faleze spectaculoase"], en: ["Highest tides in the world", "Over 160 billion tons of water flow", "UNESCO Biosphere Reserve", "Rich in whale species", "Spectacular sea cliffs"] },
    length: 270,
    coords: [-65.0481, 45.0], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_louise",    name: { de: "Lake Louise", hu: "Louise-tó", ro: "Lacul Louise", en: "Lake Louise" },
    description: { de: "Glacial lake in Banff", hu: "Gleccsertó Banffban", ro: "Lac glaciar în Banff", en: "Glacial lake in Banff" },
    descriptionAdvanced: {
      de: "Lake Louise ist ein Juwel der Rocky Mountains, bekannt für sein kristallklares, türkisfarbenes Wasser, das durch Gletschermehl gefärbt wird. Umgeben von hohen Berggipfeln und dem majestätischen Victoria-Gletscher bietet er eine der meistfotografierten Kulissen Kanadas.",
      hu: "A Louise-tó a Sziklás-hegység gyöngyszeme, amely kristálytiszta, türkizkék vizéről ismert, színét a gleccserliszt adja. Magas hegycsúcsok és a fenséges Victoria-gleccser veszi körül, Kanada egyik legtöbbet fényképezett helyszíne.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["1731 m magasságban fekszik", "Louise Caroline Alberta hercegnőről nevezték el", "Színét a gleccserhordalék (kőzetliszt) adja"],
      ro: [],
      en: []
    },
    facts: { de: ["Türkisfarbenes Wasser", "Gletschergespeist", "Ikonisches Fairmont Hotel", "Ganzjähriges Outdoor-Ziel", "Teil des Banff-Nationalparks"], hu: ["Türkizkék víz", "Gleccser táplálja", "Ikonikus Fairmont Hotel", "Egész évben látogatható", "A Banff Nemzeti Park része"], ro: ["Apă turcoaz", "Alimentat de ghețar", "Hotelul iconic Fairmont", "Destinație outdoor tot anul", "Parte a Parcului Național Banff"], en: ["Turquoise water", "Glacier-fed", "Iconic Fairmont hotel", "Year-round outdoor destination", "Part of Banff National Park"] },
    elevation: 1731, area: 1,
    coords: [-116.1773, 51.4254], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_mackenzie",    name: { de: "Mackenzie River", hu: "Mackenzie-folyó", ro: "Fluviul Mackenzie", en: "Mackenzie River" },
    description: { de: "Longest river system in Canada", hu: "Kanada leghosszabb folyórendszere", ro: "Cel mai lung sistem fluvial din Canada", en: "Longest river system in Canada" },
    descriptionAdvanced: {
      de: "Der Mackenzie River ist der längste Fluss Kanadas und entwässert ein riesiges, dünn besiedeltes Gebiet der Arktis und Subarktis. Als Teil eines der größten Flusssysteme der Welt ist er eine lebenswichtige Wasserstraße für den Norden und fließt durch unberührte boreale Wälder und Tundra.",
      hu: "A Mackenzie-folyó Kanada leghosszabb folyója, amely az Arktisz és a szubarktisz hatalmas, ritkán lakott területeit csapolja le. A világ egyik legnagyobb folyórendszerének részeként létfontosságú vízi út az északi területek számára, érintetlen tajgákon és tundrákon kanyarog keresztül.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Teljes hossza 4241 km (rendszer)", "Vízgyűjtő területe 1,8 millió km²", "Alexander Mackenzie felfedezőről nevezték el"],
      ro: [],
      en: []
    },
    facts: { de: ["Längster Fluss Kanadas", "Mündet in die Beaufortsee", "Wichtige Transportroute im Norden", "Großes Delta", "Teilweise 8 Monate gefroren"], hu: ["Kanada leghosszabb folyója", "A Beaufort-tengerbe torkollik", "Fontos északi szállítási útvonal", "Hatalmas deltavidék", "Évente kb. 8 hónapig befagy"], ro: ["Cel mai lung râu din Canada", "Se varsă în Marea Beaufort", "Rută de transport vitală în Nord", "Deltă uriașă", "Înghețat aproximativ 8 luni pe an"], en: ["Longest river in Canada", "Empties into the Beaufort Sea", "Major northern transportation route", "Vast river delta", "Frozen for about 8 months a year"] },
    length: 4241,
    coords: [-134.1953, 69.2683], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_stlawrence",    name: { de: "Sankt-Lorenz-Strom", hu: "Szent Lőrinc-folyó", ro: "Fluviul Sfântul Laurențiu", en: "St. Lawrence River" },
    description: { de: "Major river connecting Great Lakes to Atlantic", hu: "A Nagy-tavakat az Atlanti-óceánnal összekötő nagy folyó", ro: "Fluviu major care leagă Marile Lacuri de Atlantic", en: "Major river connecting Great Lakes to Atlantic" },
    descriptionAdvanced: {
      de: "Der Sankt-Lorenz-Strom ist eine der wichtigsten Wasserstraßen Nordamerikas und bildet den Abfluss der Großen Seen in den Atlantik. Er war der historische Hauptweg für Entdecker und Siedler und ist heute eine entscheidende Verkehrsader für den internationalen Handel.",
      hu: "A Szent Lőrinc-folyó Észak-Amerika egyik legfontosabb vízi útja, amely a Nagy-tavak vizét vezeti az Atlanti-óceánba. Történelmileg a felfedezők és telepesek fő útvonala volt, ma pedig a nemzetközi kereskedelem meghatározó ütőere.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Hossza kb. 1197 km", "A világ legnagyobb tölcsértorkolatát alkotja", "Jacques Cartier fedezte fel 1535-ben"],
      ro: [],
      en: []
    },
    facts: { de: ["Verbindung zum Atlantik", "Wichtiger Seeweg", "Heimat von Belugawalen", "Tausend Inseln (Thousand Islands)", "Grenze zwischen Kanada und USA"], hu: ["Összeköttetés az Atlanti-óceánnal", "Fontos tengeri út", "Belugák élőhelye", "Ezer-sziget vidék", "Határfolyó Kanada és az USA között"], ro: ["Legătură cu Atlanticul", "Cale maritimă importantă", "Habitat pentru balenele beluga", "Regiunea celor O Mie de Insule", "Graniță între Canada și SUA"], en: ["Link to the Atlantic Ocean", "Vital seaway", "Home to beluga whales", "Thousand Islands region", "International border (partial)"] },
    length: 1197, historyYear: 1535,
    coords: [-69.6455, 48.0652], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_rockies",    name: { de: "Kanadische Rocky Mountains", hu: "Kanadai-Sziklás-hegység", ro: "Munții Stâncoși Canadieni", en: "Canadian Rockies" },
    description: { de: "Mountain range in western Canada", hu: "Hegylánc Nyugat-Kanadában", ro: "Lanț muntos în vestul Canadei", en: "Mountain range in western Canada" },
    descriptionAdvanced: {
      de: "Die kanadischen Rocky Mountains sind bekannt für ihre schroffen, schneebedeckten Gipfel, weite Eisfelder und leuchtend türkisfarbene Seen. Sie beherbergen mehrere Nationalparks, die zusammen ein UNESCO-Weltnaturerbe bilden und zu den spektakulärsten Landschaften der Erde gehören.",
      hu: "A Kanadai-Sziklás-hegység meredek, hófödte csúcsairól, kiterjedt jégmezőiről és ragyogó türkizkék tavairól híres. Számos nemzeti parknak ad otthont, amelyek együttesen az UNESCO Világörökség részét képezik, és a Föld leglátványosabb tájai közé tartoznak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Legmagasabb pontja a Mount Robson (3954 m)", "Főként üledékes kőzetekből áll", "A kontinens vízválasztóját alkotják"],
      ro: [],
      en: []
    },
    facts: { de: ["UNESCO Weltnaturerbe", "Schroffe Gipfel", "Zahlreiche Nationalparks", "Beliebtes Skigebiet", "Reiche Tierwelt (Bären, Elche)"], hu: ["UNESCO Világörökség", "Meredek hegycsúcsok", "Számos nemzeti park", "Népszerű síparadicsom", "Gazdag állatvilág (medvék, jávorszarvasok)"], ro: ["Patrimoniu Mondial UNESCO", "Vârfuri abrupte", "Numeroase parcuri naționale", "Zonă de schi populară", "Faună bogată (urși, elani)"], en: ["UNESCO World Heritage Site", "Jagged mountain peaks", "Multiple national parks", "Premier skiing destination", "Abundant wildlife (bears, moose)"] },
    elevation: 3954, length: 1450,
    coords: [-118.0, 53.0], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_grosmorne",    name: { de: "Gros-Morne-Nationalpark", hu: "Gros Morne Nemzeti Park", ro: "Parcul Național Gros Morne", en: "Gros Morne" },
    description: { de: "National park in Newfoundland", hu: "Nemzeti park Új-Fundlandon", ro: "Parc național în Newfoundland", en: "National park in Newfoundland" },
    descriptionAdvanced: {
      de: "Der Gros-Morne-Nationalpark an der Westküste von Neufundland bietet eine außergewöhnliche geologische Vielfalt, von tiefen Fjorden bis hin zu kahlen Hochebenen. Er ist berühmt für die 'Tablelands', wo das Gestein des Erdmantels an die Oberfläche tritt und die Theorie der Plattentektonik veranschaulicht.",
      hu: "Az Új-Fundland nyugati partján található Gros Morne Nemzeti Park rendkívüli geológiai változatosságot kínál, a mély fjordoktól a kopár fennsíkokig. Híres a 'Tablelands' vidékről, ahol a földköpeny kőzetei a felszínre bukkannak, bizonyítva a lemeztektonika elméletét.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["1973-ban alapították", "Területe 1805 km²", "Atlanti-Kanada második legnagyobb nemzeti parkja"],
      ro: [],
      en: []
    },
    facts: { de: ["UNESCO Weltnaturerbe", "Spektakuläre Fjorde", "Geologisches Wunder (Tablelands)", "Wanderparadies", "Küstenschönheit"], hu: ["UNESCO Világörökség", "Látványos fjordok", "Geológiai csoda (Tablelands)", "Túrázók paradicsoma", "Partmenti szépség"], ro: ["Patrimoniu Mondial UNESCO", "Fiorduri spectaculoase", "Minune geologică (Tablelands)", "Paradisul drumeților", "Frumusețe costieră"], en: ["UNESCO World Heritage Site", "Spectacular fjords", "Geological wonder (Tablelands)", "Hiking paradise", "Coastal beauty"] },
    area: 1805, historyYear: 1973,
    coords: [-57.755, 49.6105], type: 'landmark', parent: 'CA'
  },
  {
    id: "can_logan",    name: { de: "Mount Logan", hu: "Mount Logan", ro: "Muntele Logan", en: "Mount Logan" },
    description: { de: "Highest peak in Canada", hu: "Kanada legmagasabb csúcsa", ro: "Cel mai înalt vârf din Canada", en: "Highest peak in Canada" },
    descriptionAdvanced: {
      de: "Mount Logan im Kluane-Nationalpark im Yukon ist mit 5.959 Metern der höchste Berg Kanadas und der zweithöchste Nordamerikas. Er besitzt das massivste Basismassiv aller nicht-vulkanischen Berge der Erde und ist von gewaltigen Gletschern umgeben.",
      hu: "A yukoni Kluane Nemzeti Parkban található Mount Logan 5959 méteres magasságával Kanada legmagasabb és Észak-Amerika második legmagasabb hegye. Alapmasszívuma a legnagyobb a Föld nem vulkanikus hegyei közül, és hatalmas gleccserek veszik körül.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Magassága 5959 m", "Sir William Edmond Loganról nevezték el", "A tektonikus emelkedés miatt ma is növekszik"],
      ro: [],
      en: []
    },
    facts: { de: ["Höchster Berg Kanadas", "Im Kluane-Nationalpark", "Gewaltiges Eisfeld", "Extrem kaltes Klima", "Zweithöchster in Nordamerika"], hu: ["Kanada legmagasabb hegye", "A Kluane Nemzeti Parkban található", "Hatalmas jégmező", "Szélsőségesen hideg éghajlat", "Észak-Amerika 2. legmagasabb csúcsa"], ro: ["Cel mai înalt munte din Canada", "În Parcul Național Kluane", "Câmp de gheață masiv", "Climă extrem de rece", "Al doilea ca înălțime din America de Nord"], en: ["Highest peak in Canada", "Located in Kluane National Park", "Massive icefield", "Extremely cold climate", "Second highest in North America"] },
    elevation: 5959,
    coords: [-140.4055, 60.5671], type: 'landmark', parent: 'CA'
  },
  {
    id: "ca-rideau-canal",
    type: "historical",
    parent: "CA",
    coords: [-75.6980, 45.4244],
    name: { de: "Rideau-Kanal", hu: "Rideau-csatorna", ro: "Canalul Rideau", en: "Rideau Canal" },
    description: { de: "Historische Wasserstraße, die Ottawa und Kingston verbindet.", hu: "Ottawát és Kingstont összekötő történelmi vízi út.", ro: "Cale navigabilă istorică ce leagă Ottawa de Kingston.", en: "Historic waterway connecting Ottawa and Kingston." },
    descriptionAdvanced: {
      de: "Der Rideau-Kanal ist das älteste kontinuierlich betriebene Kanalsystem Nordamerikas und ein UNESCO-Weltkulturerbe. Er wurde ursprünglich aus militärischen Gründen erbaut, um eine sichere Versorgungsroute zwischen Montreal und Kingston zu gewährleisten, und ist heute berühmt für seine winterliche Eislaufbahn.",
      hu: "A Rideau-csatorna Észak-Amerika legrégebbi, folyamatosan működő csatornarendszere és az UNESCO Világörökség része. Eredetileg katonai célokból épült, hogy biztonságos ellátási útvonalat biztosítson Montreal és Kingston között, ma pedig téli korcsolyapályájáról híres.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["1826 és 1832 között épült", "Hossza 202 kilométer", "45 kézi működtetésű zsilipje van"],
      ro: [],
      en: []
    },
    facts: { de: ["UNESCO Weltkulturerbe", "Längste Eislaufbahn der Welt", "Ältester Kanal in NA", "Verbindet Ottawa und Kingston"], hu: ["UNESCO Világörökség", "A világ leghosszabb korcsolyapályája", "Észak-Amerika legrégebbi csatornája", "Ottawát és Kingstont köti össze"], ro: ["Patrimoniu Mondial UNESCO", "Cel mai lung patinoar din lume", "Cel mai vechi canal din NA", "Leagă Ottawa de Kingston"], en: ["UNESCO World Heritage Site", "World's longest skating rink", "Oldest operated canal in NA", "Connects Ottawa to Kingston"] },
    length: 202, historyYear: 1826, historyPeriod: "Victorian Era"
  },
  {
    id: "ca-buffalo-jump",
    type: "historical",
    parent: "CA",
    coords: [-113.6500, 49.7494],
    name: { de: "Head-Smashed-In Buffalo Jump", hu: "Head-Smashed-In bölényugrató", ro: "Head-Smashed-In Buffalo Jump", en: "Head-Smashed-In Buffalo Jump" },
    description: { de: "Traditionelle Jagdstätte der indigenen Völker.", hu: "Az őslakos népek hagyományos vadászhelye.", ro: "Loc tradițional de vânătoare al popoarelor indigene.", en: "Traditional hunting site of the indigenous peoples." },
    descriptionAdvanced: {
      de: "Head-Smashed-In Buffalo Jump ist eine der ältesten, am besten erhaltenen und größten Büffelsprung-Stätten Nordamerikas. Über 6.000 Jahre lang nutzten die indigenen Völker der Ebenen diese Klippen, um Bisons in den Abgrund zu treiben, was ein tiefes Verständnis der Topographie und des Tierverhaltens erforderte.",
      hu: "A Head-Smashed-In bölényugrató Észak-Amerika egyik legrégebbi, legjobb állapotban fennmaradt és legnagyobb ilyen jellegű vadászhelye. Több mint 6000 éven át a síksági indiánok ezeket a sziklákat használták a bölények szakadékba terelésére, ami a domborzat és az állati viselkedés mély ismeretét igényelte.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A szikla magassága kb. 11 méter", "Hatalmas mennyiségű bölénycsontot tartalmaz", "A Blackfoot-konföderáció kultúráját mutatja be"],
      ro: [],
      en: []
    },
    facts: { de: ["UNESCO Weltkulturerbe", "Über 6.000 Jahre genutzt", "Indigene Jagdtechnik", "Großes Informationszentrum"], hu: ["UNESCO Világörökség", "Több mint 6000 évig használták", "Őslakos vadászati technika", "Nagy látogatóközpont"], ro: ["Patrimoniu Mondial UNESCO", "Utilizat de peste 6.000 de ani", "Tehnică de vânătoare indigenă", "Centru de interpretare vast"], en: ["UNESCO World Heritage Site", "Used for over 6,000 years", "Ancient hunting technique", "Award-winning interpretive center"] },
    elevation: 1050, historyYear: -4000, historyPeriod: "Pre-Contact"
  },
  {
    id: "ca-plains-abraham",
    type: "historical",
    parent: "CA",
    coords: [-71.2214, 46.8027],
    name: { de: "Abraham-Ebene", hu: "Ábrahám-síkság", ro: "Câmpia lui Avraam", en: "Plains of Abraham" },
    description: { de: "Ort einer entscheidenden Schlacht zwischen Franzosen und Briten.", hu: "A franciák és britek közötti döntő csata helyszíne.", ro: "Locul unei bătălii decisive între francezi și britanici.", en: "Site of a pivotal battle between the French and British." },
    descriptionAdvanced: {
      de: "Die Abraham-Ebene war 1759 der Schauplatz der entscheidenden Schlacht zwischen dem britischen Empire und Frankreich. Der Sieg der Briten führte zur Kapitulation von Québec und markierte den Wendepunkt, der letztlich zur britischen Herrschaft über Kanada führte.",
      hu: "Az Ábrahám-síkság 1759-ben a Brit Birodalom és Franciaország közötti döntő csata helyszíne volt. A britek győzelme Québec megadásához vezetett, és azt a fordulópontot jelentette, amely végül Kanada brit fennhatósága alá kerülését eredményezte.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Abraham Martin halászról nevezték el", "A Battlefields Park része", "Kilátást nyújt a Szent Lőrinc-folyóra"],
      ro: [],
      en: []
    },
    facts: { de: ["Historisches Schlachtfeld", "Schlacht von 1759", "Beide Generäle fielen hier", "Heute ein großer Stadtpark"], hu: ["Történelmi csatatér", "Az 1759-es csata helyszíne", "Mindkét hadvezér itt esett el", "Ma nagy városi park"], ro: ["Câmp de bătălie istoric", "Bătălia din 1759", "Ambii generali au murit aici", "Astăzi un mare parc urban"], en: ["Historic battlefield", "Site of the 1759 battle", "Both generals died in the conflict", "Now a major urban park"] },
    historyYear: 1759, historyPeriod: "Seven Years' War"
  },
  {
    id: "ca-peggys-cove",
    type: "landmark",
    parent: "CA",
    coords: [-63.9151, 44.4924],
    name: { de: "Peggy's Cove Leuchtturm", hu: "Peggy's Cove világítótorony", ro: "Farul Peggy's Cove", en: "Peggy's Cove Lighthouse" },
    description: { de: "Ein ikonischer Leuchtturm an der Küste von Neuschottland.", hu: "Ikonikus világítótorony Új-Skócia partjainál.", ro: "Un far iconic pe coasta Noii Scoții.", en: "An iconic lighthouse on the coast of Nova Scotia." },
    descriptionAdvanced: {
      de: "Der Leuchtturm von Peggy's Cove, auch bekannt als Peggy's Point Lighthouse, ist einer der meistfotografierten Leuchttürme der Welt. Er thront auf gewaltigen, vom Meer glatt geschliffenen Granitfelsen an der rauen Atlantikküste von Neuschottland.",
      hu: "A Peggy's Cove világítótorony, más néven Peggy's Point Lighthouse, a világ egyik legtöbbet fényképezett világítótornya. Hatalmas, a tenger által simára csiszolt gránitsziklákon trónol Új-Skócia vadregényes atlanti-óceáni partvidékén.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A jelenlegi torony 1915-ben épült", "Postahivatal működik a belsejében", "Fontos a figyelmeztetés a veszélyes hullámokra"],
      ro: [],
      en: []
    },
    facts: { de: ["Meistfotografierter Leuchtturm", "Auf Granitfelsen erbaut", "Aktives Navigationslicht", "Charmantes Fischerdorf"], hu: ["A legtöbbet fényképezett világítótorony", "Gránitsziklákra épült", "Aktív navigációs fény", "Bájos halászfalu"], ro: ["Cel mai fotografiat far", "Construit pe stânci de granit", "Lumină de navigație activă", "Sat de pescari fermecător"], en: ["Most photographed lighthouse", "Built on granite bedrock", "Active navigation aid", "Iconic fishing village setting"] },
    elevation: 15, historyYear: 1915, historyPeriod: "Modern"
  },
  {
    id: "ca-parliament-hill",
    type: "landmark",
    parent: "CA",
    coords: [-75.7009, 45.4236],
    name: { de: "Parliament Hill", hu: "Parlament-domb", ro: "Dealul Parlamentului", en: "Parliament Hill" },
    description: { de: "Der Sitz des kanadischen Parlaments in Ottawa.", hu: "A kanadai parlament székhelye Ottawában.", ro: "Sediul Parlamentului Canadei din Ottawa.", en: "The seat of Canada's federal government in Ottawa." },
    descriptionAdvanced: {
      de: "Parliament Hill ist das politische und kulturelle Herz Kanadas, gelegen auf einer Klippe über dem Ottawa River. Die Gebäude im neugotischen Stil, dominiert vom imposanten Peace Tower, beherbergen das Unterhaus und den Senat und sind Schauplatz bedeutender nationaler Zeremonien.",
      hu: "A Parlament-domb Kanada politikai és kulturális szíve, amely az Ottawa-folyó feletti sziklán magasodik. A neogótikus stílusú épületek, melyeket az impozáns Béke-torony ural, az Alsóháznak és a Szenátusnak adnak otthont, és jelentős nemzeti ceremóniák helyszínei.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A Béke-torony 92,2 méter magas", "Itt található a gyönyörű Parlamenti Könyvtár", "Eredetileg katonai barakkok álltak itt"],
      ro: [],
      en: []
    },
    facts: { de: ["Sitz der Bundesregierung", "Neugotische Architektur", "Peace Tower (Béke-torony)", "Changing of the Guard Zeremonie"], hu: ["A szövetségi kormány székhelye", "Neogótikus építészet", "Itt található a Béke-torony", "Őrségváltási ceremónia helyszíne"], ro: ["Sediul guvernului federal", "Arhitectură neogotică", "Turnul Păcii (Peace Tower)", "Ceremonia de schimbare a gărzii"], en: ["Seat of the federal government", "Gothic Revival architecture", "Home to the Peace Tower", "Changing of the Guard ceremony site"] },
    elevation: 85, historyYear: 1859, historyPeriod: "Victorian Era"
  },
  {
    id: "ca-hopewell-rocks",
    type: "landmark",
    parent: "CA",
    coords: [-64.5746, 45.8236],
    name: { de: "Hopewell Rocks", hu: "Hopewell Rocks", ro: "Stâncile Hopewell", en: "Hopewell Rocks" },
    description: { de: "Bekannt für ihre ungewöhnlichen Formen durch die Gezeiten der Bay of Fundy.", hu: "A Bay of Fundy árapálya által formált sziklák.", ro: "Cunoscute pentru formele lor neobișnuite create de mareele din Golful Fundy.", en: "Known for its unusual rock formations shaped by tidal erosion." },
    descriptionAdvanced: {
      de: "Die Hopewell Rocks, auch 'Flowerpot Rocks' genannt, sind markante Felsformationen in der Bay of Fundy. Zweimal täglich werden sie durch den extremen Tidenhub der Bucht umspült, sodass Besucher bei Ebbe auf dem Meeresboden zwischen ihnen wandern und bei Flut mit dem Kajak um die Felsspitzen paddeln können.",
      hu: "A Hopewell Rocks, más néven 'Virágcserép-sziklák', jellegzetes alakzatok a Fundy-öbölben. Naponta kétszer a rendkívüli árapály-mozgás hatására víz alá kerülnek vagy szabaddá válnak, így a látogatók apálykor a tengerfenéken sétálhatnak közöttük, dagálykor pedig kajakkal kerülgethetik a sziklacsúcsokat.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Konglomerátum kőzetből állnak", "Az árapály különbség akár 14 méter", "Millió éves üledékes kőzetek"],
      ro: [],
      en: []
    },
    facts: { de: ["Form einer Blumenvase", "Höchster Tidenhub der Welt", "Gehen auf dem Meeresboden", "Erosionsphänomen"], hu: ["Virágcserép alakú sziklák", "A világ legnagyobb árapálya", "Séta a tengerfenéken", "Eróziós jelenség"], ro: ["Formă de ghiveci de flori", "Cea mai mare maree din lume", "Plimbare pe fundul mării", "Fenomen de eroziune"], en: ["Flowerpot-shaped rocks", "World's highest tidal range", "Walk on the ocean floor", "Erosional masterpiece"] },
    elevation: 0
  },
  {
    id: "ca-butchart-gardens",
    type: "landmark",
    parent: "CA",
    coords: [-123.4674, 48.5637],
    name: { de: "Butchart Gardens", hu: "Butchart kertek", ro: "Grădinile Butchart", en: "Butchart Gardens" },
    description: { de: "Weltberühmte Schaugärten in British Columbia.", hu: "Világhírű bemutatókertek Brit Kolumbiában.", ro: "Grădini de expoziție de renume mondial din Columbia Britanică.", en: "World-famous floral display gardens in British Columbia." },
    descriptionAdvanced: {
      de: "Die Butchart Gardens auf Vancouver Island sind ein Meisterwerk der Gartenkunst, das aus einem ehemaligen Kalksteinbruch entstanden ist. Heute umfasst die Anlage verschiedene Themenbereiche wie den Sunken Garden, den Rosengarten und den Japanischen Garten, die zu jeder Jahreszeit in prächtigen Farben erblühen.",
      hu: "A Vancouver-szigeten található Butchart-kertek a kertművészet remekművei, amelyek egy egykori mészkőbánya helyén jöttek létre. A birtok ma különböző tematikus részekből áll, mint például a Süllyesztett kert, a Rózsakert és a Japánkert, amelyek minden évszakban pompás színekben tündökölnek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Jennie Butchart alapította 1904-ben", "Területe 22 hektár", "Híres a nyári tűzijátékairól"],
      ro: [],
      en: []
    },
    facts: { de: ["Ehemaliger Kalksteinbruch", "Nationale historische Stätte", "Über 900 Pflanzenarten", "Ganzjährig geöffnet"], hu: ["Egykori mészkőbánya", "Nemzeti történelmi emlékhely", "Több mint 900 növényfaj", "Egész évben látogatható"], ro: ["Fostă carieră de calcar", "Sit istoric național", "Peste 900 de specii de plante", "Deschise tot anul"], en: ["Former limestone quarry", "National Historic Site of Canada", "Over 900 plant varieties", "Open in all four seasons"] },
    area: 0.22, historyYear: 1904, historyPeriod: "Modern"
  },
  {
    id: "ca-signal-hill",
    type: "landmark",
    parent: "CA",
    coords: [-52.6800, 47.5694],
    name: { de: "Signal Hill", hu: "Signal Hill", ro: "Signal Hill", en: "Signal Hill" },
    description: { de: "Ort des Empfangs des ersten transatlantischen Funksignals.", hu: "Az első transzatlanti rádiójel vételének helyszíne.", ro: "Locul primirii primului semnal radio transatlantic.", en: "Site of the reception of the first transatlantic wireless signal." },
    descriptionAdvanced: {
      de: "Signal Hill thront über St. John's und dem Atlantik und ist ein Ort von welthistorischer Bedeutung. Hier empfing Guglielmo Marconi 1901 das erste transatlantische Funksignal der Geschichte, was den Beginn des modernen Kommunikationszeitalters markierte.",
      hu: "A St. John's és az Atlanti-óceán felett magasodó Signal Hill világtörténelmi jelentőségű helyszín. Guglielmo Marconi itt fogta 1901-ben a történelem első transzatlanti rádiójelét, ami a modern kommunikáció korszakának kezdetét jelentette.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Az észak-amerikai hétéves háború utolsó csatájának helyszíne", "A Cabot-torony 1897-ben épült", "Egykor fontos jelzőárboc-állomás volt"],
      ro: [],
      en: []
    },
    facts: { de: ["Erstes Funksignal 1901", "Cabot Tower Wahrzeichen", "Strategische Militärlage", "Blick auf St. John's Hafen"], hu: ["Első rádiójel 1901-ben", "A Cabot-torony a jelképe", "Stratégiai katonai helyszín", "Kilátás St. John's kikötőjére"], ro: ["Primul semnal radio în 1901", "Turnul Cabot ca punct de reper", "Locație militară strategică", "Vedere spre portul St. John's"], en: ["First wireless signal in 1901", "Home to the Cabot Tower", "Strategic military defense site", "Panoramic views of the harbor"] },
    elevation: 167, historyYear: 1901, historyPeriod: "Modern"
  },
  {
    id: "ca-banff-grizzly",
    type: "animal-habitat",
    parent: "CA",
    coords: [-115.6, 51.2],
    name: { de: "Banff-Grizzlybären", hu: "Banff-i grizzlymedvék", ro: "Urșii grizzly din Banff", en: "Banff Grizzly Bears" },
    description: { de: "Die Rockies sind die Heimat dieser beeindruckenden Raubtiere.", hu: "A Sziklás-hegység ad otthont ezeknek a lenyűgöző ragadozóknak.", ro: "Munții Stâncoși sunt casa acestor prădători impresionanți.", en: "The Rockies are home to these impressive predators." },
    descriptionAdvanced: {
      de: "Der Banff-Nationalpark bietet einen der besten Lebensräume für Grizzlybären in Nordamerika. Diese majestätischen Raubtiere sind ein Symbol für die unberührte Wildnis der Rocky Mountains, und ihr Schutz ist eine der wichtigsten Aufgaben des Parks, um das ökologische Gleichgewicht zu bewahren.",
      hu: "A Banff Nemzeti Park az egyik legjobb élőhelyet kínálja a grizzlymedvék számára Észak-Amerikában. Ezek a fenséges ragadozók a Sziklás-hegység érintetlen vadonjának szimbólumai, védelmük pedig a park egyik legfontosabb feladata az ökológiai egyensúly fenntartása érdekében.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A grizzlyknek hatalmas területre van szükségük", "Speciális vadátjárók segítik a közlekedésüket", "Téli álmuk kb. 5-7 hónapig tart"],
      ro: [],
      en: []
    },
    facts: { de: ["Majestätische Raubtiere", "Symbol der Wildnis", "Strenge Schutzmaßnahmen", "Beste Sichtungschancen im Frühjahr"], hu: ["Fenséges ragadozók", "A vadon szimbólumai", "Szigorú védelmi intézkedések", "Tavasszal a legnagyobb az esély a megfigyelésükre"], ro: ["Prădători maiestuoși", "Simbolul sălbăticiei", "Măsuri stricte de protecție", "Cele mai bune șanse de observare primăvara"], en: ["Majestic apex predators", "Symbols of the wilderness", "Strict conservation protocols", "Spring is the best time for sightings"] }
  },
  {
    id: "ca-churchill-polar-bear",
    type: "animal-habitat",
    parent: "CA",
    coords: [-94.1, 58.7],
    name: { de: "Churchill-Eisbären", hu: "Churchill-i jegesmedvék", ro: "Urșii polari din Churchill", en: "Churchill Polar Bears" },
    description: { de: "Die 'Weltstadt der Eisbären' an der Hudson Bay.", hu: "A 'jegesmedvék világfővárosa' a Hudson-öböl partján.", ro: "„Capitala mondială a urșilor polari” la Golful Hudson.", en: "The 'Polar Bear Capital of the World' on the Hudson Bay." },
    descriptionAdvanced: {
      de: "Churchill in Manitoba gilt als die Welthauptstadt der Eisbären, da sich hier im Herbst hunderte von Bären versammeln, um auf das Gefrieren der Hudson Bay zu warten. Dies bietet die seltene Gelegenheit, das größte an Land lebende Raubtier der Erde in freier Wildbahn zu beobachten.",
      hu: "A manitobai Churchill a világ jegesmedve-fővárosa, mivel ősszel több száz medve gyűlik itt össze, várva a Hudson-öböl befagyását. Ez ritka lehetőséget kínál a Föld legnagyobb szárazföldi ragadozójának megfigyelésére természetes élőhelyén.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A legnagyobb szárazföldi ragadozó emlősök", "A tengeri jégre várnak a fókavadászathoz", "Churchillben „medvebörtön” is van az eltévedt állatoknak"],
      ro: [],
      en: []
    },
    facts: { de: ["Welthauptstadt der Eisbären", "An der Hudson Bay", "Beste Zeit: Oktober/November", "Beobachtung per Tundra-Buggy"], hu: ["A jegesmedvék világfővárosa", "A Hudson-öböl partján", "Legjobb időszak: október/november", "Megfigyelés tundra-buggykkal"], ro: ["Capitala mondială a urșilor polari", "La Golful Hudson", "Perioada optimă: oct./nov.", "Observare cu vehicule Tundra Buggy"], en: ["Polar Bear Capital of the World", "Located on Hudson Bay", "Peak season: October and November", "Viewed from custom Tundra Buggies"] }
  },
  {
    id: "ca-wood-buffalo-bison",
    type: "animal-habitat",
    parent: "CA",
    coords: [-113.0, 59.5],
    name: { de: "Wood-Buffalo-Bisons", hu: "Wood Buffalo-i bölények", ro: "Bizonii din Wood Buffalo", en: "Wood Buffalo Bisons" },
    description: { de: "Schutzgebiet für die größte frei lebende Herde von Waldbisons.", hu: "Az erdei bölények legnagyobb szabadon élő csordájának rezervátuma.", ro: "Rezervație pentru cea mai mare cireadă de bizoni de pădure în libertate.", en: "Sanctuary for the largest free-roaming herd of wood bison." },
    descriptionAdvanced: {
      de: "Der Wood-Buffalo-Nationalpark beherbergt die weltweit größte freilebende Herde von Waldbisons. Der Park wurde ursprünglich 1922 zum Schutz dieser gefährdeten Unterart gegründet und ist heute der größte Nationalpark Kanadas und ein UNESCO-Weltnaturerbe.",
      hu: "A Wood Buffalo Nemzeti Park ad otthont a világ legnagyobb szabadon élő erdei bölénycsordájának. A parkot eredetileg 1922-ben alapították e veszélyeztetett alfaj védelmére, ma pedig Kanada legnagyobb nemzeti parkja és az UNESCO Világörökség része.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Az erdei bölények nagyobbak, mint a síkságiak", "A lármás daru egyetlen fészkelőhelye a világon", "Területe nagyobb, mint Svájcé"],
      ro: [],
      en: []
    },
    facts: { de: ["Größte Waldbison-Herde", "Größter Park Kanadas", "UNESCO Weltnaturerbe", "Abgelegene Wildnis"], hu: ["A legnagyobb erdei bölénycsorda", "Kanada legnagyobb parkja", "UNESCO Világörökség", "Távoli vadon"], ro: ["Cea mai mare cireadă de bizoni", "Cel mai mare parc din Canada", "Patrimoniu Mondial UNESCO", "Sălbăticie izolată"], en: ["Largest wood bison herd", "Canada's largest national park", "UNESCO World Heritage Site", "Remote and vast wilderness"] },
    area: 44807, historyYear: 1922
  },
  {
    id: "ca-quebec-maple",
    type: "agriculture",
    parent: "CA",
    coords: [-71.5, 46.5],
    name: { de: "Quebec Ahornsirup", hu: "Quebeci juharszirup", ro: "Siropul de arțar din Quebec", en: "Quebec Maple Syrup" },
    description: { de: "Weltweit führender Produzent von echtem Ahornsirup.", hu: "A világ vezető valódi juharszirup-termelője.", ro: "Lider mondial în producția de sirop de arțar autentic.", en: "The world's leading producer of authentic maple syrup." },
    descriptionAdvanced: {
      de: "Die Provinz Québec ist das weltweite Zentrum der Ahornsirupproduktion und liefert über 70 % des weltweiten Bedarfs. Die Tradition der 'Cabanes à Sucre' (Zuckerhütten) ist tief in der Kultur verwurzelt, wenn im Frühjahr der Saft der Zuckerahornbäume geerntet und eingekocht wird.",
      hu: "Québec tartomány a juharszirup-termelés világközpontja, a globális szükséglet több mint 70%-át biztosítja. A „Cabanes à Sucre” (cukorházak) hagyománya mélyen gyökerezik a kultúrában, amikor tavasszal a cukorjuharok nedvét csapolják és besűrítik.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Kb. 40 liter nedvből lesz 1 liter szirup", "Az őslakos népek fedezték fel az eljárást", "Rendelkeznek stratégiai juharszirup-tartalékkal"],
      ro: [],
      en: []
    },
    facts: { de: ["Produziert 70% weltweit", "Zuckerahorn-Bäume", "Frühjahrs-Erntezeit", "Ahornblatt Nationalsymbol"], hu: ["A világtermelés 70%-át adja", "Cukorjuhar fákból készül", "Tavaszi betakarítás", "A juharlevél nemzeti jelkép"], ro: ["Produce 70% din totalul mondial", "Arbori de arțar de zahăr", "Recoltare în primăvară", "Frunza de arțar, simbol național"], en: ["Produces 70% of world supply", "Derived from sugar maple trees", "Spring tapping season", "Maple leaf is a national icon"] },
    historyYear: 1534, historyPeriod: "Traditional/Modern"
  },
  {
    id: "ca-saskatchewan-wheat",
    type: "agriculture",
    parent: "CA",
    coords: [-106.6, 52.1],
    name: { de: "Saskatchewan Weizenfelder", hu: "Saskatchewani búzaföldek", ro: "Câmpurile de grâu din Saskatchewan", en: "Saskatchewan Wheat Fields" },
    description: { de: "Die 'Brotkammer Kanadas' in den Prärieprovinzen.", hu: "Kanada 'kenyérkosara' a préri tartományokban.", ro: "„Grânarul Canadei” în provinciile de prerie.", en: "The 'Breadbasket of Canada' in the prairie provinces." },
    descriptionAdvanced: {
      de: "Saskatchewan ist bekannt als die 'Brotkammer Kanadas' und verfügt über fast die Hälfte des gesamten Ackerlandes des Landes. Die riesigen Weizenfelder, die sich bis zum Horizont erstrecken, sind ein prägendes Bild der kanadischen Prärie und ein Eckpfeiler der nationalen Wirtschaft.",
      hu: "Saskatchewan Kanada „magtáraként” ismert, itt található az ország összes szántóföldjének csaknem fele. A láthatárig nyúló hatalmas búzatáblák a kanadai préri meghatározó képét adják, és a nemzetgazdaság egyik sarokkövét jelentik.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A durumbúza legnagyobb termelője", "Az agrárkutatások fontos központja", "Meghatározta a betelepülés történetét"],
      ro: [],
      en: []
    },
    facts: { de: ["Brotkammer Kanadas", "Riesige Prärie-Flächen", "Wichtigster Exporteur", "Goldener Horizont"], hu: ["Kanada magtára", "Hatalmas préri területek", "Meghatározó exportcikk", "Aranyló láthatár"], ro: ["Grânarul Canadei", "Suprafețe vaste de prerie", "Exportator major", "Orizont auriu"], en: ["Breadbasket of Canada", "Vast prairie landscapes", "Leading global wheat exporter", "Iconic golden horizons"] }
  },
  {
    id: "ca-okanagan-wine",
    type: "agriculture",
    parent: "CA",
    coords: [-119.5, 49.9],
    name: { de: "Okanagan Valley Obstbau", hu: "Okanagan-völgyi gyümölcsösök", ro: "Livezile din Valea Okanagan", en: "Okanagan Valley Orchards" },
    description: { de: "Bekannt für Obstplantagen und Weinbau in British Columbia.", hu: "Gyümölcsöseiről és borászatáról ismert Brit Kolumbiában.", ro: "Cunoscută pentru livezi și viticultură în Columbia Britanică.", en: "Known for orchards and wineries in British Columbia." },
    descriptionAdvanced: {
      de: "Das Okanagan Valley in British Columbia ist Kanadas zweitgrößtes Weinanbaugebiet und bekannt für sein einzigartiges Mikroklima. Neben erstklassigen Weinen ist die Region berühmt für ihre fruchtbaren Obstgärten, die Kirschen, Pfirsiche und Äpfel in Hülle und Fülle hervorbringen.",
      hu: "A Brit Kolumbiában található Okanagan-völgy Kanada második legnagyobb borvidéke, amely egyedülálló mikroklímájáról ismert. A kiváló borok mellett a régió híres termékeny gyümölcsöskertjeiről, amelyek bőségesen teremnek cseresznyét, őszibarackot és almát.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Híres a kiváló jégborairól", "Közelében található Kanada legészakibb sivataga", "Több mint 180 bejegyzett borászat"],
      ro: [],
      en: []
    },
    facts: { de: ["Zweitgrößte Weinregion", "Kanadas Obstgarten", "Trockenes Mikroklima", "Wunderschöne Seelage"], hu: ["Második legnagyobb borvidék", "Kanada gyümölcsöskertje", "Száraz mikroklíma", "Gyönyörű tóparti fekvés"], ro: ["A doua regiune viticolă", "Livada Canadei", "Microclimat arid", "Cadru pitoresc lângă lac"], en: ["Second largest wine region", "Canada's fruit orchard hub", "Unique semi-arid microclimate", "Scenic lakeside setting"] }
  },
  {
    id: "ca-canadas-wonderland",
    type: "kid-landmark",
    parent: "CA",
    coords: [-79.5, 43.8],
    name: { de: "Canada's Wonderland", hu: "Canada's Wonderland", ro: "Canada's Wonderland", en: "Canada's Wonderland" },
    description: { de: "Größter Freizeitpark Kanadas in Vaughan, Ontario.", hu: "Kanada legnagyobb vidámparkja az ontariói Vaughanban.", ro: "Cel mai mare parc de distracții din Canada în Vaughan, Ontario.", en: "Canada's premier amusement park in Vaughan, Ontario." },
    descriptionAdvanced: {
      de: "",
      hu: "Kanada legnagyobb vidámparkja, amely több mint 200 attrakcióval várja a látogatókat, köztük számos hullámvasúttal. A park központi látványossága a 'Wonder Mountain' hegy, amely már messziről látható. Sachkunde K5 – erők és mozgások.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Több mint 200 attrakció található benne.", "A 'Wonder Mountain' a park központi hegye.", "A park több mint 130 hektáron terül el.", "Itt található az ország leggyorsabb hullámvasútja.", "A park nyáron tart nyitva.", "Külön részleggel rendelkezik gyerekek számára."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-west-edmonton-mall",
    type: "kid-landmark",
    parent: "CA",
    coords: [-113.6, 53.5],
    name: { de: "West Edmonton Mall", hu: "West Edmonton Mall", ro: "West Edmonton Mall", en: "West Edmonton Mall" },
    description: { de: "Eines der größten Einkaufs- und Unterhaltungszentren der Welt.", hu: "A világ egyik legnagyobb bevásárló- és szórakoztatóközpontja.", ro: "Unul dintre cele mai mari centre comerciale și de divertisment din lume.", en: "One of the world's largest shopping and entertainment complexes." },
    descriptionAdvanced: {
      de: "",
      hu: "A világ egyik legnagyobb bevásárlóközpontja, amely nemcsak üzleteknek, hanem egy óriási fedett vízi parknak és vidámparknak is otthont ad. A komplexum akkora, hogy több nap is kevés a teljes felfedezéséhez. Sachkunde K6 – rekreáció.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Több mint 800 üzlet található benne.", "Fedett vízi parkkal rendelkezik.", "Beltéri vidámparkja van.", "Több mint 350 000 m²-es alapterület.", "Szálloda is található benne.", "A világ egyik leglátogatottabb helyszíne."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-alberta-oil-sands",
    type: "industry",
    parent: "CA",
    coords: [-111.4, 57.0],
    name: { de: "Alberta Ölsande", hu: "Albertai olajhomok", ro: "Nisipurile bituminoase din Alberta", en: "Alberta Oil Sands" },
    description: { de: "Großes Zentrum der Energiegewinnung im Norden Alberttas.", hu: "Hatalmas energiatermelő központ Alberta északi részén.", ro: "Centru major de producție de energie în nordul Albertei.", en: "Major energy production center in northern Alberta." },
    descriptionAdvanced: {
      de: "",
      hu: "Az albertai olajhomok-lelőhelyek a világ egyik legnagyobb olajtartalékát rejtik, jelentősen hozzájárulva a globális energiaellátáshoz. A kitermelés bonyolult technológiát igényel, és gazdasági szempontból Kanada egyik legfontosabb ipari ágazata. Földrajz K8 – ipari erőforrások.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A világ egyik legnagyobb ismert olajtartaléka.", "Kitermelése bonyolult technológiát igényel.", "Jelentős hatással van Kanada gazdaságára.", "A technológia folyamatosan fejlődik a fenntarthatóság érdekében.", "Fort McMurray a régió központja.", "Hatalmas ipari terület."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-vancouver-film",
    type: "industry",
    parent: "CA",
    coords: [-123.1, 49.3],
    name: { de: "Vancouver Filmindustrie", hu: "Vancouveri filmipar", ro: "Industria cinematografică din Vancouver", en: "Vancouver Film Industry" },
    description: { de: "Häufig als 'Hollywood North' bezeichnet.", hu: "Gyakran 'Északi Hollywoodként' emlegetik.", ro: "Adesea supranumit „Hollywood-ul Nordului”.", en: "Often referred to as 'Hollywood North'." },
    descriptionAdvanced: {
      de: "",
      hu: "Vancouver Észak-Amerika egyik legfontosabb filmgyártási központja, ahol rengeteg népszerű filmet és sorozatot forgatnak. A város a kedvező forgatási körülményeknek és a tehetséges szakembereknek köszönhetően vált világhírűvé. Művészet K7 – média és kultúra.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Gyakran használják forgatási helyszínként.", "Sok nemzetközi produkciót itt készítenek.", "Szakképzett stábok és modern stúdiók vannak.", "Kedvező adózási környezet.", "A városi környezet könnyen átalakítható más helyszínné.", "Több mint 100 éve zajlik filmforgatás a régióban."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-toronto-finance",
    type: "industry",
    parent: "CA",
    coords: [-79.4, 43.6],
    name: { de: "Toronto Finanzviertel", hu: "Torontói pénzügyi negyed", ro: "Districtul financiar din Toronto", en: "Toronto Financial District" },
    description: { de: "Das wirtschaftliche Herz Kanadas.", hu: "Kanada gazdasági szíve.", ro: "Inima economică a Canadei.", en: "The economic heart of Canada." },
    descriptionAdvanced: {
      de: "",
      hu: "Toronto a kanadai pénzügyi világ központja, ahol a legnagyobb bankok és tőzsdei társaságok székelnek. A pénzügyi negyed felhőkarcolói a város gazdasági erejét jelképezik. Gazdaságtan K8 – pénzügyi világ.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Itt találhatók a legfontosabb kanadai bankok.", "A Torontói Értéktőzsde a világ egyik legnagyobbja.", "A pénzügyi negyed az ország gazdasági erejét tükrözi.", "Számos multinacionális vállalat központja.", "Modern felhőkarcolók jellemzik a negyedet.", "Folyamatosan növekvő üzleti központ."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-port-vancouver",
    type: "port",
    parent: "CA",
    coords: [-123.1, 49.3],
    name: { de: "Hafen von Vancouver", hu: "Vancouveri kikötő", ro: "Portul din Vancouver", en: "Port of Vancouver" },
    description: { de: "Kanadas größter und wichtigster Hafen am Pazifik.", hu: "Kanada legnagyobb és legfontosabb kikötője a Csendes-óceánon.", ro: "Cel mai mare și mai important port al Canadei la Pacific.", en: "Canada's largest and most important port on the Pacific." },
    descriptionAdvanced: {
      de: "",
      hu: "A vancouveri kikötő Kanada legnagyobb és legforgalmasabb kikötője, amely kulcsfontosságú kapu az ázsiai kereskedelem számára. Hatalmas mennyiségű áru érkezik és távozik itt nap mint nap. Földrajz K7 – kereskedelem.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Kulcsfontosságú kapu az ázsiai kereskedelemhez.", "Kanada legnagyobb kikötője.", "Jelentős mennyiségű áruforgalom.", "Modern technológiával felszerelt.", "Környezetvédelmi törekvések az üzemeltetésben.", "A hajózási útvonalak központja."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-port-halifax",
    type: "port",
    parent: "CA",
    coords: [-63.6, 44.6],
    name: { de: "Hafen von Halifax", hu: "Halifaxi kikötő", ro: "Portul din Halifax", en: "Port of Halifax" },
    description: { de: "Strategisch wichtiger Tiefwasserhafen am Atlantik.", hu: "Stratégiailag fontos mélyvízi kikötő az Atlanti-óceánon.", ro: "Port strategic de apă adâncă la Atlantic.", en: "Strategically important deep-water port on the Atlantic." },
    descriptionAdvanced: {
      de: "",
      hu: "A halifaxi kikötő stratégiai fontosságú mélyvízi kikötő az Atlanti-óceán partján, amely az európai és amerikai kereskedelem egyik fontos állomása. Földrajzi helyzete miatt a transzatlanti szállítások központja. Történelem K8 – kereskedelem.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Stratégiai mélyvízi kikötő az Atlanti-óceánon.", "Fontos állomás az európai kereskedelemben.", "Történelmi jelentőségű kereskedelmi központ.", "Képes nagy befogadóképességű hajókat fogadni.", "Folytonos fejlesztések jellemzik.", "Kanada atlanti kapuja."],
      ro: [],
      en: []
    }
  },
  {
    id: "ca-baffin-island",
    type: "island",
    parent: "CA",
    coords: [-70.0, 69.0],
    name: { de: "Baffininsel", hu: "Baffin-sziget", ro: "Insula Baffin", en: "Baffin Island" },
    description: { de: "Größte Insel Kanadas in der Arktis.", hu: "Kanada legnagyobb szigete az Északi-sarkvidéken.", ro: "Cea mai mare insulă din Canada, situată în zona arctică.", en: "Canada's largest island, located in the Arctic." },
    descriptionAdvanced: {
      de: "Die Baffininsel ist die größte Insel Kanadas und die fünftgrößte der Welt, geprägt von einer spektakulären arktischen Landschaft mit tiefen Fjorden und gewaltigen Gletschern. Sie ist ein Zentrum der Inuit-Kultur und beherbergt den Auyuittuq-Nationalpark mit seinen markanten Granitgipfeln.",
      hu: "A Baffin-sziget Kanada legnagyobb és a világ ötödik legnagyobb szigete, amelyet látványos arktiszi tájak, mély fjordok és hatalmas gleccserek jellemeznek. Az inuit kultúra egyik központja, itt található az Auyuittuq Nemzeti Park a jellegzetes gránitcsúcsaival. Földrajz K6 – sarkvidéki tájak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Kanada legnagyobb szigete.", "A világ 5. legnagyobb szigete.", "Az inuit kultúra központja.", "Auyuittuq Nemzeti Park.", "Jegesmedvék és narválok élőhelye."],
      ro: [],
      en: []
    },
    facts: { de: ["Größte Insel Kanadas", "Fünftgrößte Insel der Welt", "Zentrum der Inuit-Kultur", "Auyuittuq-Nationalpark", "Heimat von Eisbären und Narwalen"], hu: ["Kanada legnagyobb szigete", "A világ 5. legnagyobb szigete", "Az inuit kultúra központja", "Auyuittuq Nemzeti Park", "Jegesmedvék és narválok élőhelye"], ro: ["Cea mai mare insulă din Canada", "A cincea insulă ca mărime din lume", "Centru al culturii inuite", "Parcul Național Auyuittuq", "Habitat pentru urși polari și narvali"], en: ["Canada's largest island", "Fifth largest island in the world", "Center of Inuit culture", "Home to Auyuittuq National Park", "Habitat for polar bears and narwhals"] },
    area: 507451, elevation: 2147
  },
  {
    id: "ca-vancouver-island",
    type: "island",
    parent: "CA",
    coords: [-126.0, 50.0],
    name: { de: "Vancouver-Insel", hu: "Vancouver-sziget", ro: "Insula Vancouver", en: "Vancouver Island" },
    description: { de: "Große Insel an der Pazifikküste von British Columbia.", hu: "Nagy sziget Brit Kolumbia csendes-óceáni partjainál.", ro: "Insulă mare pe coasta Pacificului din Columbia Britanică.", en: "Large island off the Pacific coast of British Columbia." },
    descriptionAdvanced: {
      de: "Vancouver Island bietet eine unglaubliche Vielfalt an Ökosystemen, von gemäßigten Regenwäldern bis hin zu schneebedeckten Bergen. Die Insel ist bekannt für ihre reiche Tierwelt, insbesondere Wale und Bären, sowie für die Provinzhauptstadt Victoria an ihrer Südspitze.",
      hu: "A Vancouver-sziget az ökoszisztémák hihetetlen változatosságát kínálja, a mérsékelt övi esőerdőktől a hófödte hegyekig. A sziget híres gazdag állatvilágáról, különösen a bálnákról és medvékről, valamint a déli csücskén fekvő tartományi fővárosról, Victoriáról. Földrajz K5 – óceánparti élőhelyek.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A csendes-óceáni partvidék legnagyobb szigete", "Mérsékelt övi esőerdők", "Világszínvonalú bálnamegfigyelés", "Itt található Victoria", "Tofino, a szörfösök paradicsoma"],
      ro: [],
      en: []
    },
    facts: { de: ["Größte Insel an der Pazifikküste", "Gemäßigter Regenwald", "Weltklasse Walbeobachtung", "Heimat von Victoria", "Surferparadies Tofino"], hu: ["A csendes-óceáni partvidék legnagyobb szigete", "Mérsékelt övi esőerdők", "Világszínvonalú bálnamegfigyelés", "Itt található Victoria", "Tofino, a szörfösök paradicsoma"], ro: ["Cea mai mare insulă de pe coasta Pacificului", "Păduri tropicale temperate", "Observarea balenelor de clasă mondială", "Găzduiește orașul Victoria", "Tofino, paradisul surferilor"], en: ["Largest island on the Pacific coast", "Temperate rainforests", "World-class whale watching", "Home to Victoria", "Surfing mecca of Tofino"] },
    area: 31285, length: 460, elevation: 2195
  },
];

export const canadaAllPoi: POI[] = [...canadaCountry, ...canadaRegions, ...canadaCities, ...canadaLandmarks, ...poiExtraCanadaCities, ...poiExtraCanadaCitiesV2, ...poiExtraCanadaEconomicV2, ...poiExtraCanadaHistory, ...poiExtraCanadaHistoryV2, ...poiExtraCanadaLandmarksV2, ...poiExtraCanadaLifeV2, ...poiExtraCanadaNatureV2, ...poiExtraCanadaRefill, ...poiExtraCanadaReliefV2];
