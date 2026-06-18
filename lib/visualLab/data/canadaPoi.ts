// @ts-nocheck
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
      hu: "Ottawa Kanada fenséges fővárosa, amely három folyó találkozásánál fekszik. A város híres a Parlament-dombon található pompás neogótikus építészetéről és a Rideau-csatornáról, amely télen a világ leghosszabb korcsolyapályájává alakul.",
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
    coords: [-75.6972, 45.4215], type: 'landmark', parent: 'CA', image: "/poi-images/can_cap.webp"},
  {
    id: "can_tor",    name: { de: "Toronto", hu: "Toronto", ro: "Toronto", en: "Toronto" },
    description: { de: "Largest city in Canada", hu: "Largest city in Canada", ro: "Largest city in Canada", en: "Largest city in Canada" },
    descriptionAdvanced: {
      de: "Toronto ist das pulsierende wirtschaftliche Herz Kanadas und eine der multikulturellsten Städte der Welt. Die Metropole am Ufer des Ontariosees besticht durch ihre beeindruckende Skyline, die vom berühmten CN Tower dominiert wird, und ihre vielfältigen Kulturviertel.",
      hu: "Toronto Kanada lüktető gazdasági szíve és a világ egyik legmultikulturálisabb városa. Az Ontario-tó partján fekvő metropoliszt lenyűgöző látkép jellemzi, amelyet a híres CN Tower ural, kiegészülve változatos kulturális negyedekkel.",
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
    coords: [-79.3832, 43.6532], type: 'landmark', parent: 'CA', image: "/poi-images/can_tor.webp"},
  {
    id: "can_mon",    name: { de: "Montreal", hu: "Montreal", ro: "Montreal", en: "Montreal" },
    description: { de: "Major city in Quebec", hu: "Major city in Quebec", ro: "Major city in Quebec", en: "Major city in Quebec" },
    descriptionAdvanced: {
      de: "Montreal ist eine charmante Mischung aus europäischem Flair und nordamerikanischer Energie. Als zweitgrößte französischsprachige Stadt der Welt ist sie bekannt für ihre erstklassige Gastronomie, ihre lebendige Kunstszene und die historische Altstadt Vieux-Montréal.",
      hu: "Montreal az európai báj és az észak-amerikai energia bájos keveréke. A világ második legnagyobb francia nyelvű városaként ismert kiváló gasztronómiájáról, élénk művészeti életéről és Vieux-Montréal történelmi óvárosáról.",
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
    coords: [-73.5673, 45.5017], type: 'landmark', parent: 'CA', image: "/poi-images/can_mon.webp"},
  {
    id: "can_van",    name: { de: "Vancouver", hu: "Vancouver", ro: "Vancouver", en: "Vancouver" },
    description: { de: "Major city in British Columbia", hu: "Major city in British Columbia", ro: "Major city in British Columbia", en: "Major city in British Columbia" },
    descriptionAdvanced: {
      de: "Vancouver ist eine atemberaubende Küstenstadt, in der das Meer auf die Berge trifft. Sie ist berühmt für ihre spektakuläre natürliche Umgebung, den weitläufigen Stanley Park und ihre Rolle als bedeutender Pazifikhafen und Zentrum der Filmindustrie.",
      hu: "Vancouver egy lélegzetelállító tengerparti város, ahol az óceán találkozik a hegyekkel. Híres látványos természeti környezetéről, a hatalmas Stanley Parkról, valamint jelentős csendes-óceáni kikötőként és a filmipar központjaként betöltött szerepéről.",
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
    coords: [-123.1207, 49.2827], type: 'landmark', parent: 'CA', image: "/poi-images/can_van.webp"},
  {
    id: "can_cal",    name: { de: "Calgary", hu: "Calgary", ro: "Calgary", en: "Calgary" },
    description: { de: "Major city in Alberta", hu: "Major city in Alberta", ro: "Major city in Alberta", en: "Major city in Alberta" },
    descriptionAdvanced: {
      de: "Calgary ist eine dynamische Stadt in den Ausläufern der Rocky Mountains, bekannt für ihre starke Verbindung zur Ölindustrie und ihre Wildwest-Traditionen. Jedes Jahr zieht die weltberühmte 'Calgary Stampede' Besucher aus aller Welt in die Stadt.",
      hu: "Calgary egy dinamikus város a Sziklás-hegység lábánál, amely erős olajipari kötődéseiről és vadnyugati hagyományairól ismert. Minden évben a világhírű 'Calgary Stampede' látogatókat vonz a világ minden tájáról.",
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
    coords: [-114.0719, 51.0447], type: 'landmark', parent: 'CA', image: "/poi-images/can_cal.webp"},
  {
    id: "can_edm",    name: { de: "Edmonton", hu: "Edmonton", ro: "Edmonton", en: "Edmonton" },
    description: { de: "Capital of Alberta", hu: "Capital of Alberta", ro: "Capital of Alberta", en: "Capital of Alberta" },
    descriptionAdvanced: {
      de: "Edmonton ist die nördlichste Millionenstadt Nordamerikas und ein wichtiges Tor zur Arktis. Die Stadt ist bekannt für ihr pulsierendes Kulturleben, das ausgedehnte Flusstal des North Saskatchewan River und die gewaltige West Edmonton Mall.",
      hu: "Edmonton Észak-Amerika legészakibb, több mint egymillió lakosú városa, és fontos kapu az Arktisz felé. A város híres pezsgő kulturális életéről, az Észak-Saskatchewan folyó kiterjedt völgyéről és a hatalmas West Edmonton Mallról.",
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
    coords: [-113.4909, 53.5444], type: 'landmark', parent: 'CA', image: "/poi-images/can_edm.webp"},
  {
    id: "can_que",    name: { de: "Quebec City", hu: "Quebec City", ro: "Quebec City", en: "Quebec City" },
    description: { de: "Capital of Quebec", hu: "Capital of Quebec", ro: "Capital of Quebec", en: "Capital of Quebec" },
    descriptionAdvanced: {
      de: "Québec ist eine der ältesten europäischen Siedlungen in Nordamerika und die einzige befestigte Stadt nördlich von Mexiko. Die historische Altstadt (Vieux-Québec) mit ihren kopfsteingepflasterten Gassen und dem majestätischen Château Frontenac ist ein UNESCO-Weltkulturerbe.",
      hu: "Québec Észak-Amerika egyik legrégebbi európai települése és az egyetlen erődített város Mexikótól északra. A történelmi óváros (Vieux-Québec) macskaköves utcáival és a fenséges Château Frontenac-kal az UNESCO Világörökség része.",
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
    coords: [-71.208, 46.8139], type: 'landmark', parent: 'CA', image: "/poi-images/can_que.webp"},
  {
    id: "can_win",    name: { de: "Winnipeg", hu: "Winnipeg", ro: "Winnipeg", en: "Winnipeg" },
    description: { de: "Capital of Manitoba", hu: "Capital of Manitoba", ro: "Capital of Manitoba", en: "Capital of Manitoba" },
    descriptionAdvanced: {
      de: "Winnipeg ist das geografische Zentrum Kanadas und ein wichtiger Verkehrsknotenpunkt in der Prärie. Die Stadt ist bekannt für ihr reiches kulturelles Erbe, das moderne Kanadische Museum für Menschenrechte und den historischen Versammlungsort 'The Forks'.",
      hu: "Winnipeg Kanada földrajzi középpontja és a préri vidék fontos közlekedési csomópontja. A város híres gazdag kulturális örökségéről, a modern Kanadai Emberi Jogi Múzeumról és a történelmi 'The Forks' találkozóhelyről.",
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
    coords: [-97.1384, 49.8951], type: 'landmark', parent: 'CA', image: "/poi-images/can_win.webp"},
  {
    id: "can_hal",    name: { de: "Halifax", hu: "Halifax", ro: "Halifax", en: "Halifax" },
    description: { de: "Capital of Nova Scotia", hu: "Capital of Nova Scotia", ro: "Capital of Nova Scotia", en: "Capital of Nova Scotia" },
    descriptionAdvanced: {
      de: "Halifax ist eine historische Hafenstadt am Atlantik mit einer tiefen maritimen Tradition. Die Stadt ist bekannt für ihre beeindruckende Zitadelle, ihre lebendige Uferpromenade und ihre bedeutende Rolle in der Geschichte der kanadischen Einwanderung und der Marine.",
      hu: "Halifax egy történelmi atlanti-óceáni kikötőváros, mély tengerészeti hagyományokkal. A város híres lenyűgöző citadellájáról, élénk vízparti sétányáról, valamint a kanadai bevándorlás és haditengerészet történetében betöltött jelentős szerepéről.",
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
    coords: [-63.5728, 44.6488], type: 'landmark', parent: 'CA', image: "/poi-images/can_hal.webp"},
  {
    id: "can_vic",    name: { de: "Victoria", hu: "Victoria", ro: "Victoria", en: "Victoria" },
    description: { de: "Capital of British Columbia", hu: "Capital of British Columbia", ro: "Capital of British Columbia", en: "Capital of British Columbia" },
    descriptionAdvanced: {
      de: "Victoria, an der Südspitze von Vancouver Island gelegen, besticht durch ihr britisches Erbe und ihr mildes Klima. Die 'Gartenstadt' ist berühmt für ihre prächtigen Parlamentsgebäude, das historische Empress Hotel und ihre malerische Lage am Inner Harbour.",
      hu: "A Vancouver-sziget déli csücskén fekvő Victoria brit örökségével és enyhe éghajlatával bűvöl el. A 'Kertváros' híres pompás parlamenti épületeiről, a történelmi Empress Hotelről és a Belső Kikötő festői környezetéről.",
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
    coords: [-123.3656, 48.4284], type: 'landmark', parent: 'CA', image: "/poi-images/can_vic.webp"},
  {
    id: "can_ss",    name: { de: "Saskatoon", hu: "Saskatoon", ro: "Saskatoon", en: "Saskatoon" },
    description: { de: "Major city in Saskatchewan", hu: "Major city in Saskatchewan", ro: "Major city in Saskatchewan", en: "Major city in Saskatchewan" },
    descriptionAdvanced: {
      de: "Saskatoon ist die größte Stadt in Saskatchewan und wird wegen ihrer zahlreichen Brücken über den South Saskatchewan River oft als 'Paris der Prärie' bezeichnet. Die Stadt ist ein blühendes Zentrum für Landwirtschaft und Biotechnologie.",
      hu: "Saskatoon Saskatchewan legnagyobb városa, amelyet a Dél-Saskatchewan folyón átívelő számos hídja miatt gyakran a 'Préri Párizsaként' emlegetnek. A város a mezőgazdaság és a biotechnológia virágzó központja.",
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
    coords: [-106.67, 52.1332], type: 'landmark', parent: 'CA', image: "/poi-images/can_ss.webp"},
  {
    id: "can_reg",    name: { de: "Regina", hu: "Regina", ro: "Regina", en: "Regina" },
    description: { de: "Capital of Saskatchewan", hu: "Capital of Saskatchewan", ro: "Capital of Saskatchewan", en: "Capital of Saskatchewan" },
    descriptionAdvanced: {
      de: "Regina ist die stolze Hauptstadt von Saskatchewan und ein kulturelles Zentrum in der weiten Prärie. Die Stadt ist berühmt als Ausbildungsstätte der Royal Canadian Mounted Police und für den künstlich angelegten Wascana Lake im Herzen der Stadt.",
      hu: "Regina Saskatchewan büszke fővárosa és a hatalmas préri kulturális központja. A város híres a Kanadai Királyi Lovasrendőrség kiképzőközpontjáról és a város szívében található, mesterséges Wascana-tóról.",
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
    coords: [-104.6158, 50.4492], type: 'landmark', parent: 'CA', image: "/poi-images/can_reg.webp"},
  {
    id: "can_stj",    name: { de: "St. John's", hu: "St. John's", ro: "St. John's", en: "St. John's" },
    description: { de: "Capital of Newfoundland and Labrador", hu: "Capital of Newfoundland and Labrador", ro: "Capital of Newfoundland and Labrador", en: "Capital of Newfoundland and Labrador" },
    descriptionAdvanced: {
      de: "St. John's ist eine der ältesten und am weitesten östlich gelegenen Städte Nordamerikas, bekannt für ihre bunt bemalten Häuser ('Jellybean Row') und den steilen Signal Hill. Die Stadt blickt auf eine reiche Fischereitradition zurück und ist heute ein wichtiger Stützpunkt für die Offshore-Ölindustrie.",
      hu: "St. John's Észak-Amerika egyik legrégebbi és legkeletibb városa, amely híres színes házairól ('Jellybean Row') és a meredek Signal Hillről. A város gazdag halászati múlttal rendelkezik, ma pedig az offshore olajipar fontos bázisa.",
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
    coords: [-52.7126, 47.5615], type: 'landmark', parent: 'CA', image: "/poi-images/can_stj.webp"},
  {
    id: "can_cha",    name: { de: "Charlottetown", hu: "Charlottetown", ro: "Charlottetown", en: "Charlottetown" },
    description: { de: "Charlottetown ist die charmante Hauptstadt von Prince Edward Island und gilt als Geburtsort der kanadischen Konföderation. Sie besticht durch wunderschöne viktorianische Architektur und einen malerischen Hafen.", hu: "Charlottetown a Prince Edward-sziget bájos fővárosa, amelyet a kanadai konföderáció szülőhelyeként ismernek. Gyönyörű viktoriánus építészettel és festői kikötővel büszkélkedhet.", ro: "Charlottetown este capitala fermecătoare a Insulei Prince Edward și este cunoscută ca locul de naștere al Confederației Canadiene. Se remarcă prin arhitectura sa victoriană frumoasă și portul pitoresc.", en: "Charlottetown is the charming capital of Prince Edward Island and is known as the birthplace of Canadian Confederation. It features beautiful Victorian architecture and a scenic harbor." },
    descriptionAdvanced: {
      de: "Charlottetown ist die charmante Hauptstadt von Prince Edward Island und gilt als 'Geburtsort der Konföderation' Kanadas. Die Stadt besticht durch ihre gut erhaltene viktorianische Architektur, ihre Bedeutung als Kulturzentrum und ihre Nähe zu wunderschönen roten Sandstränden.",
      hu: "Charlottetown a Prince Edward-sziget bájos fővárosa, amelyet Kanada 'konföderációjának bölcsőjeként' emlegetnek. A várost jól megőrzött viktoriánus építészete, kulturális jelentősége és a gyönyörű vörös homokos strandok közelsége teszi vonzóvá.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Charlottetown a Prince Edward-sziget fővárosa.", "Itt írták alá a Konföderáció létrehozásáról szóló megállapodás alapjait.", "A város tele van jól megőrzött viktoriánus épületekkel.", "A vörös homokos strandok a sziget jellemzői.", "A városnak gazdag a kulturális élete.", "Fontos kikötőhely a régióban."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt von Prince Edward Island", "Geburtsort der Konföderation", "Berühmt für viktorianische Architektur"], hu: ["A Prince Edward-sziget fővárosa", "A konföderáció szülőhelye", "Viktoriánus építészetéről híres"], ro: ["Capitala Insulei Prince Edward", "Locul de naștere al Confederației", "Faimoasă pentru arhitectura victoriană"], en: ["Capital of Prince Edward Island", "Birthplace of Confederation", "Famous for Victorian architecture"] },
    elevation: 8, historyYear: 1764, historyPeriod: "Colonial/Victorian",
    coords: [-63.1311, 46.2382], type: 'landmark', parent: 'CA', image: "/poi-images/can_cha.webp"},
  {
    id: "can_fre",    name: { de: "Fredericton", hu: "Fredericton", ro: "Fredericton", en: "Fredericton" },
    description: { de: "Capital of New Brunswick", hu: "Capital of New Brunswick", ro: "Capital of New Brunswick", en: "Capital of New Brunswick" },
    descriptionAdvanced: {
      de: "Fredericton, am Ufer des majestätischen Saint John River gelegen, ist die grüne Hauptstadt von New Brunswick. Die Stadt ist bekannt für ihre historische Bedeutung als Zentrum der Loyalisten, ihre renommierte Universität und ihre lebendige Kunstszene.",
      hu: "Fredericton a fenséges Saint John-folyó partján fekvő, zöldellő fővárosa New Brunswicknek. A város híres a hűségesek (loyalisták) központjaként betöltött történelmi szerepéről, neves egyeteméről és élénk művészeti életéről.",
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
    coords: [-66.6431, 45.9636], type: 'landmark', parent: 'CA', image: "/poi-images/can_fre.webp"},
  {
    id: "can_whi",    name: { de: "Whitehorse", hu: "Whitehorse", ro: "Whitehorse", en: "Whitehorse" },
    description: { de: "Capital of Yukon", hu: "Capital of Yukon", ro: "Capital of Yukon", en: "Capital of Yukon" },
    descriptionAdvanced: {
      de: "Whitehorse ist die 'Wildnisstadt' im hohen Norden und die Hauptstadt des Yukon-Territoriums. Die Stadt liegt am Yukon River und war ein entscheidender Knotenpunkt während des Klondike-Goldrausches, heute dient sie als Zentrum für Outdoor-Abenteuer und Tourismus.",
      hu: "Whitehorse a 'vadon városa' a távoli északon, Yukon terület fővárosa. A Yukon-folyó partján fekvő város meghatározó csomópont volt a klondike-i aranyláz idején, ma pedig a szabadtéri kalandok és a turizmus központja.",
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
    coords: [-135.0568, 60.7212], type: 'landmark', parent: 'CA', image: "/poi-images/can_whi.webp"},
  {
    id: "can_yel",    name: { de: "Yellowknife", hu: "Yellowknife", ro: "Yellowknife", en: "Yellowknife" },
    description: { de: "Yellowknife ist die Hauptstadt der Nordwest-Territorien und liegt am Nordufer des Großen Sklavensees. Sie ist ein wichtiges Zentrum für den Diamantenabbau und einer der besten Orte, um Polarlichter zu sehen.", hu: "Yellowknife az Északnyugati területek fővárosa, amely a Nagy-Rabszolga-tó északi partján fekszik. A gyémántbányászat jelentős központja, és az egyik legjobb hely a sarki fény megfigyelésére.", ro: "Yellowknife este capitala Teritoriilor de Nord-Vest, situată pe malul nordic al Marelui Lac al Sclavilor. Este un centru major pentru extracția diamantelor și unul dintre cele mai bune locuri pentru a vedea aurora boreală.", en: "Yellowknife is the capital of the Northwest Territories, situated on the northern shore of Great Slave Lake. It is a major center for diamond mining and one of the best places to view the Northern Lights." },
    descriptionAdvanced: {
      de: "Yellowknife, am Ufer des Großen Sklavensees gelegen, ist die Diamantenhauptstadt Kanadas. Die Stadt hat sich von einer Bergbausiedlung zu einem modernen Verwaltungszentrum entwickelt und ist weltweit als einer der besten Orte zur Beobachtung von Polarlichtern bekannt.",
      hu: "A Nagy-Rabszolga-tó partján fekvő Yellowknife Kanada gyémántfővárosa. A város bányásztelepülésből fejlődött modern közigazgatási központtá, és világszerte a sarki fény megfigyelésének egyik legjobb helyszíneként ismerik.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Yellowknife az Északnyugati területek fővárosa.", "Kanada gyémántbányászatának központja.", "A Nagy-Rabszolga-tó partján helyezkedik el.", "A sarki fény megfigyelésének egyik legjobb helye.", "Bányásztelepülésből fejlődött modern központtá.", "Az arktiszi légiközlekedés központja."],
      ro: [],
      en: []
    },
    facts: { de: ["Hauptstadt der Nordwest-Territorien", "Diamantenhauptstadt Nordamerikas", "Bester Ort für Polarlichter"], hu: ["Az Északnyugati területek fővárosa", "Észak-Amerika gyémántfővárosa", "Kiváló hely a sarki fény megfigyelésére"], ro: ["Capitala Teritoriilor de Nord-Vest", "Capitala diamantelor din America de Nord", "Loc excelent pentru aurora boreală"], en: ["Capital of the Northwest Territories", "Diamond capital of North America", "Prime spot for Northern Lights"] },
    elevation: 206, historyYear: 1934, historyPeriod: "Modern/Mining Era",
    coords: [-114.3718, 62.454], type: 'landmark', parent: 'CA', image: "/poi-images/can_yel.webp"},
  {
    id: "can_iqa",    name: { de: "Iqaluit", hu: "Iqaluit", ro: "Iqaluit", en: "Iqaluit" },
    description: { de: "Capital of Nunavut", hu: "Capital of Nunavut", ro: "Capital of Nunavut", en: "Capital of Nunavut" },
    descriptionAdvanced: {
      de: "Iqaluit ist die entlegene Hauptstadt von Nunavut auf der Baffininsel und das kulturelle Herz der Inuit in Kanada. Die Stadt am Frobisher Bay ist geprägt von arktischer Tundra, traditionellem Kunsthandwerk und einer modernen Infrastruktur in einer extremen Umgebung.",
      hu: "Iqaluit Nunavut távoli fővárosa a Baffin-szigeten, a kanadai inuitok kulturális szíve. A Frobisher-öböl partján fekvő várost arktiszi tundra, hagyományos kézművesség és szélsőséges környezetben kiépült modern infrastruktúra jellemzi.",
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
    coords: [-68.5145, 63.7467], type: 'landmark', parent: 'CA', image: "/poi-images/can_iqa.webp"},
                ];

  export const canadaLandmarks: POI[] = [
  {
    id: "can_banff",    name: { de: "Banff National Park", hu: "Banff Nemzeti Park", ro: "Parcul Național Banff", en: "Banff National Park" },
    description: { de: "National park in the Rockies", hu: "Nemzeti park a Sziklás-hegységben", ro: "Parc național în Munții Stâncoși", en: "National park in the Rockies" , es: "Parque nacional en las Montañas Rocosas.", pt: "Parque nacional nas Montanhas Rochosas.", fr: "Parc national dans les montagnes Rocheuses."},
    descriptionAdvanced: {
      de: "Der Banff-Nationalpark in den Alberta Rocky Mountains wurde 1885 gegründet und ist damit das älteste Schutzgebiet Kanadas. Seine Entstehung geht auf die Entdeckung der Cave and Basin Thermalquellen zurück, die ursprünglich als kommerzielles Kurbad genutzt werden sollten, bevor die Bundesregierung das Areal unter Schutz stellte, um den öffentlichen Zugang zu sichern. Das Parkgebiet umfasst heute 6.641 Quadratkilometer und ist geprägt von markanten Kalksteinformationen, die während der laramischen Gebirgsbildung vor etwa 80 bis 55 Millionen Jahren aufgefaltet wurden. Die Region beheimatet über 50 Säugetierarten, darunter den Grizzlybären, den Wolf und den Wapiti-Hirsch, sowie seltene Vögel wie den Fischadler. Besonders bekannt ist der Park für seine gletschergespeisten Seen wie den Lake Louise und den Moraine Lake, deren charakteristische türkise Färbung durch feines Gletschermehl entsteht. Die Stadt Banff liegt auf 1.383 Metern Höhe und ist die höchstgelegene Gemeinde Kanadas, die als kulturelles Zentrum für Bergsteiger und Naturschützer dient. Der Icefields Parkway verbindet Banff mit dem nördlich gelegenen Jasper-Nationalpark und führt am Columbia-Eisfeld vorbei, einem der größten Eisfelder südlich des Polarkreises. Seit 1984 gehört der Park als Teil der Canadian Rocky Mountain Parks zum UNESCO-Welterbe und steht unter strengem Management, um die Balance zwischen Massentourismus und ökologischer Integrität zu wahren.",
      hu: "A Banff Nemzeti Park Kanada legrégebbi nemzeti parkja, amelyet 1885-ben alapítottak az Alberta tartománybeli Sziklás-hegység szívében. A park története a Cave and Basin hévízforrások felfedezésével kezdődött, ami vitát váltott ki a magánkiaknázás és a közcélú védelem között, végül a kanadai szövetségi kormány egy 26 négyzetkilométeres rezervátum létrehozása mellett döntött. Mára a terület 6641 négyzetkilométerre bővült, és az UNESCO Világörökség része. Geológiai szempontból a parkot üledékes kőzetek, például mészkő és pala építik fel, amelyek a tektonikus mozgások során emelkedtek a magasba az úgynevezett laramida hegységképződés idején. A tájat az utolsó jégkorszak gleccserei formálták, amelyek ma is láthatóak a jégmezők és az U-alakú völgyek formájában. A park élővilága rendülkívül gazdag: a vándorló grizzly medvék, hegyi kecskék és vapiti szarvasok mellett több mint 260 madárfaj él itt. A terület gazdasági jelentőségét kezdetben a Canadian Pacific Railway vasútvonala és a luxusszállodák, mint a Banff Springs Hotel alapozta meg, amelyek a 19. század végén az európai arisztokráciát vonzották ide. A turizmus ma is meghatározó, de a fenntarthatóság érdekében szigorú korlátozásokat vezettek be a látogatók számának kezelésére és az állatok vonulási útvonalainak védelmére a Transz-Kanada autópálya felett épített vadátjárókkal.",
      ro: "Parcul Național Banff, înființat în 1885 în Munții Stâncoși din provincia Alberta, reprezintă prima arie protejată a Canadei și unul dintre cele mai vechi parcuri naționale din lume. Originile sale sunt strâns legate de descoperirea izvoarelor termale Cave and Basin de către lucrătorii feroviari, fapt ce a determinat guvernul federal să creeze o rezervație pentru a preveni exploatarea comercială privată și a asigura protecția resurselor naturale. Suprafața actuală de 6.641 de kilometri pătrați cuprinde un relief montan spectaculos, cu vârfuri ce depășesc 3.000 de metri, ghețari activi și păduri dense de conifere. Din punct de vedere geologic, munții sunt compuși în principal din roci sedimentare ridicate prin forțe tectonice imense în timpul orogenezei Laramide. Parcul este faimos pe plan mondial pentru lacurile sale glaciare, cum ar fi Lake Louise și Moraine Lake, a căror culoare turcoaz distinctivă se datorează particulelor fine de rocă, numite făină de stâncă, suspendate în apă. Fauna este extrem de diversă, incluzând populații stabile de urși grizzly, lupi, pume și capre de munte. Infrastructura turistică este concentrată în orașul Banff, situat la cea mai mare altitudine din Canada, care servește drept poartă de acces către aventurile montane. Șoseaua Icefields Parkway străbate parcul de la sud la nord, oferind acces către câmpurile de gheață Columbia și făcând legătura cu Parcul Național Jasper, într-un peisaj dominat de gheață și piatră.",
      en: "Banff National Park, established in 1885, stands as Canada's inaugural national park and a cornerstone of the nation's environmental conservation efforts. Located in the Alberta Rocky Mountains, it encompasses over 6,641 square kilometers of rugged terrain, ranging from subalpine forests to alpine tundra and icefields. The park's origins are deeply tied to the discovery of the Cave and Basin thermal springs, which prompted the federal government to create a protected reserve to prevent private exploitation. This decision marked the beginning of Canada's national park system. Today, Banff is part of the UNESCO World Heritage site of the Canadian Rocky Mountain Parks. Its geological composition is primarily sedimentary rock, including limestone and shale, which were thrust upwards during the Laramide Orogeny between 80 and 55 million years ago. Visitors are drawn to the iconic peaks of Mount Rundle and Castle Mountain, while the turquoise waters of Lake Louise and Moraine Lake provide striking contrasts against the gray stone. The park supports a diverse ecosystem, providing critical habitat for large mammals such as grizzly bears, wolves, cougars, and the endangered woodland caribou. The Icefields Parkway, often cited as one of the world's most scenic drives, traverses the park, linking it to Jasper National Park and offering views of the massive Columbia Icefield. The balance between maintaining a world-class tourism destination and preserving the ecological integrity of the wilderness remains the park's primary management challenge.",
    },
    factsAdvanced: {
      de: ["Gründungsjahr: 1885", "Fläche: 6.641 km2", "Höchster Berg: Mount Forbes (3.612 m)", "Besucher pro Jahr: ca. 4 Millionen", "UNESCO-Welterbe seit: 1984", "Lage: Alberta Rocky Mountains"],
      hu: ["1885-ben alapították", "Területe 6641 km²", "Itt halad át az Icefields Parkway panorámaút"],
      ro: ["Anul înființării: 1885", "Suprafață: 6.641 km2", "Cel mai înalt vârf: Mount Forbes (3.612 m)", "Vizitatori anual: aprox. 4 milioane", "Statut UNESCO: din 1984", "Provincie: Alberta"],
      en: ["Established: 1885", "Total Area: 6,641 km2", "Highest Peak: Mount Forbes (3,612 m)", "Annual Visitors: ~4 million", "UNESCO Heritage: Since 1984", "Town Elevation: 1,383 m (Banff)"],
    },
    facts: { de: ["Ältester Nationalpark Kanadas", "UNESCO Weltnaturerbe", "Spektakuläre Berglandschaft", "Heimat von Grizzlys und Elchen", "Berühmte Thermalquellen"], hu: ["Kanada legrégebbi nemzeti parkja", "UNESCO Világörökség", "Látványos hegyi tájak", "Grizzlyk és jávorszarvasok otthona", "Híres termálforrások"], ro: ["Cel mai vechi parc național din Canada", "Patrimoniu Mondial UNESCO", "Peisaje montane spectaculoase", "Casa urșilor grizzly și a elanilor", "Izvoare termale faimoase"], en: ["Canada's oldest national park", "UNESCO World Heritage Site", "Spectacular mountain scenery", "Home to grizzly bears and moose", "Famous thermal hot springs"] , es: ["Parque más antiguo de Canadá", "Patrimonio de la UNESCO", "Paisaje de montaña espectacular", "Hogar de grizzlies y alces", "Famosas aguas termales"], pt: ["Parque mais antigo do Canadá", "Património da UNESCO", "Paisagem montanhosa espetacular", "Lar de grizzlies e alces", "Termas famosas"], fr: ["Plus ancien parc du Canada", "Patrimoine de l'UNESCO", "Paysage alpin spectaculaire", "Habitat des grizzlis et élans", "Sources thermales célèbres"]},
    area: 6641, historyYear: 1885, historyPeriod: "Victorian Era",
    coords: [-115.5683, 51.1784], type: 'landmark', parent: 'CA', image: "/poi-images/can_banff.webp"},
  {
    id: "can_niagara",    name: { de: "Niagarafälle", hu: "Niagara-vízesés", ro: "Cascada Niagara", en: "Niagara Falls" },
    description: { de: "Die Niagarafälle bestehen aus drei gewaltigen Wasserfällen an der Grenze zwischen Kanada und den USA. Die majestätischen Horseshoe Falls auf der kanadischen Seite sind ein weltberühmtes Naturwunder.", hu: "A Niagara-vízesés három hatalmas vízesésből áll Kanada és az Egyesült Államok határán. A kanadai oldalon található fenséges Patkó-vízesés világhírű természeti csoda.", ro: "Cascada Niagara constă din trei cascade masive la granița dintre Canada și Statele Unite. Majestuoasa cascadă Potcoava de pe partea canadiană este o minune naturală de renume mondial.", en: "Niagara Falls consists of three massive waterfalls on the border between Canada and the United States. The majestic Horseshoe Falls on the Canadian side is a world-renowned natural wonder." , es: "Las cataratas del Niágara constan de tres enormes cascadas en la frontera entre Canadá y Estados Unidos. Las majestuosas Horseshoe Falls en el lado canadiense son una maravilla natural de fama mundial.", pt: "As cataratas do Niágara consistem em três enormes quedas d'água na fronteira entre o Canadá e os EUA. As majestosas Horseshoe Falls, no lado canadense, são uma maravilha natural mundialmente famosa.", fr: "Les chutes du Niagara se composent de trois énormes cascades à la frontière entre le Canada et les États-Unis. Les majestueuses chutes Horseshoe, du côté canadien, sont une merveille naturelle de renommée mondiale."},
    descriptionAdvanced: {
      de: "Die Niagarafälle, gelegen an der Grenze zwischen der kanadischen Provinz Ontario und dem US-Bundesstaat New York, sind eines der mächtigsten und bekanntesten Naturwunder der Welt. Sie bestehen aus drei separaten Wasserfällen: den Horseshoe Falls, den American Falls und den Bridal Veil Falls. Die Horseshoe Falls sind die größten und beeindruckendsten, wobei etwa 90 Prozent des Wassers des Niagara-Flusses über ihre 51 Meter hohe Kante stürzen. Die Fälle entstanden vor etwa 12.000 Jahren am Ende der letzten Eiszeit, als das Schmelzwasser der Gletscher den Niagara-Fluss bildete, der den Eriesee in den Ontariosee entwässert. Geologisch gesehen befinden sich die Fälle in einem ständigen Zustand der Erosion; ursprünglich lagen sie etwa elf Kilometer flussabwärts bei Queenston, haben sich aber durch die enorme Kraft des Wassers im Laufe der Jahrtausende nach oben gefressen. Neben ihrer natürlichen Schönheit sind die Niagarafälle eine kritische Quelle für die Erzeugung von Wasserkraft. Die erste große Nutzung der Wasserkraft begann Ende des 19. Jahrhunderts, und heute versorgen die Kraftwerke auf beiden Seiten der Grenze Millionen von Haushalten mit Strom. Historisch war die Region Schauplatz bedeutender Ereignisse, darunter Kämpfe während des Krieges von 1812. Heute ziehen die Fälle jährlich über 30 Millionen Besucher an, was sie zu einem der wichtigsten Wirtschaftsfaktoren der Region macht, während gleichzeitig umfangreiche Naturschutzmaßnahmen durchgeführt werden, um die Erosionsrate künstlich zu verlangsamen.",
      hu: "A Niagara-vízesés a világ egyik legismertebb és leglátványosabb természeti képződménye, amely a kanadai Ontario tartomány és az amerikai New York állam határán fekszik. A vízesés három fő részből áll: a Patkó-vízesésből (Horseshoe Falls), az Amerikai-vízesésből és a Menyasszonyi fátyol-vízesésből. A kanadai oldalon található Patkó-vízesés a leghatalmasabb, itt zúdul le a Niagara-folyó vízhozamának kilencven százaléka, körülbelül 51 méteres magasságból. A vízesés mintegy 12 000 évvel ezelőtt alakult ki az utolsó jégkorszak végén, ahogy a visszahúzódó gleccserek vize utat tört magának az Erie-tóból az Ontario-tó felé. Geológiai értelemben a vízesés folyamatosan mozog; az erózió hatására a perem évente néhány centimétert hátrál a folyón felfelé, bár a modern vízszabályozás és a vízerőművekbe való elterelés jelentősen lassította ezt a folyamatot. A Niagara nemcsak turisztikai látványosság, hanem kulcsfontosságú megújuló energiaforrás is; az első nagykapacitású vízerőműveket a 19. század végén alapították itt, kihasználva a víz elképesztő mozgási energiáját. A terület az őslakos irokéz népek számára szent hely volt, később pedig fontos stratégiai ponttá vált az 1812-es brit-amerikai háború idején. Ma a látogatók hajókkal, mint a híres 'Maid of the Mist', közvetlenül a lezúduló víztömeg közelébe is eljuthatnak, megtapasztalva a természet elemi erejét.",
      ro: "Cascada Niagara, situată pe granița internațională între provincia Ontario (Canada) și statul New York (SUA), reprezintă unul dintre cele mai spectaculoase și puternice ansambluri de căderi de apă de pe glob. Aceasta este formată din trei secțiuni distincte: Cascada Horseshoe (Potcoava), Cascada Americană și Cascada Bridal Veil (Vălul Miresei). Cea mai voluminoasă este Cascada Horseshoe, situată în cea mai mare parte pe teritoriul canadian, având o înălțime de 51 de metri și o lățime de peste 790 de metri. Formarea cascadei a început acum aproximativ 12.000 de ani, la sfârșitul ultimei glaciațiuni, când apele rezultate din topirea ghețarilor au creat un canal de scurgere din Lacul Erie în Lacul Ontario. Din punct de vedere geologic, Niagara este într-o permanentă transformare; forța imensă a apei erodează baza stâncoasă, determinând retragerea cascadei spre amonte cu o rată care a fost istoric de circa un metru pe an, dar care este acum controlată prin intervenții tehnice. Pe lângă valoarea sa turistică imensă, Niagara este o sursă vitală de energie hidroelectrică; primele centrale majore au fost instalate la sfârșitul secolului al XIX-lea, revoluționând distribuția de electricitate în regiune. Situl a fost, de asemenea, un punct strategic în timpul Războiului din 1812 și este adânc înrădăcinat în tradițiile orale ale popoarelor indigene Haudenosaunee. Astăzi, milioane de turiști vizitează anual zona, utilizând facilități precum tunelurile din spatele cascadei sau ambarcațiunile care îi duc până la baza uriașului zid de apă.",
      en: "Niagara Falls, situated on the international border between Ontario, Canada, and New York, USA, is one of the world's most powerful and iconic natural wonders. It consists of three separate waterfalls: the Horseshoe Falls, the American Falls, and the Bridal Veil Falls. The Horseshoe Falls, the largest of the three, lies mostly on the Canadian side and is renowned for its immense water volume and dramatic 51-meter vertical drop. Formed approximately 12,000 years ago during the retreat of the Wisconsin glacier, the falls are a product of the Niagara River draining Lake Erie into Lake Ontario. The geological erosion of the falls has been a subject of intense study, as the crestline has moved upstream by nearly 11 kilometers since its formation due to the relentless force of the falling water. Niagara Falls is not only a global tourist destination but also a critical source of hydroelectric power. The first major power plant was established in the late 19th century, utilizing the river's descent to generate clean electricity for the surrounding region. The site was also a significant theater during the War of 1812 and has long been a subject of indigenous oral traditions, particularly among the Haudenosaunee and Anishinaabe peoples, who regard the area as sacred. Today, the falls attract over 30 million visitors annually, who experience the sheer power of the water through attractions like boat tours and observation decks, while international commissions work to manage the delicate balance between energy production, erosion control, and environmental preservation.",
    },
    factsAdvanced: {
      de: ["Fallhöhe (Horseshoe Falls): 51 m", "Durchflussmenge: ca. 2.400 m3/s", "Entstehung: vor ca. 12.000 Jahren", "Erosionsrate: ca. 0,3 m pro Jahr (reguliert)", "Besucherzahl: >30 Millionen jährlich", "Kraftwerksleistung: ca. 4,4 Gigawatt"],
      hu: ["Magassága eléri az 57 métert", "Percenként több mint 168 000 m³ víz", "A wisconsini eljegesedés során alakult ki"],
      ro: ["Înălțime cădere: 51 m", "Debit apă: aprox. 2.400 m3/s", "Vârstă: aprox. 12.000 ani", "Rata eroziunii: 0,3 m/an (controlată)", "Vizitatori anual: peste 30 milioane", "Putere hidroelectrică: 4,4 GW"],
      en: ["Drop Height (Horseshoe): 51 m", "Flow Rate: ~2,400 m3/s", "Age: ~12,000 years", "Erosion Rate: ~0.3 m per year (regulated)", "Annual Visitors: >30 million", "Power Capacity: 4.4 GW"],
    },
    facts: { de: ["An der Grenze zwischen Kanada und den USA", "Umfasst die gewaltigen Horseshoe Falls", "Wichtige Quelle für Wasserkraft"], hu: ["Kanada és az USA határán található", "Része a hatalmas Patkó-vízesés", "Jelentős vízenergia-forrás"], ro: ["Situată la granița dintre SUA și Canada", "Include masiva cascadă Potcoava", "O sursă majoră de energie hidroelectrică"], en: ["Located on the US-Canada border", "Includes the massive Horseshoe Falls", "A major source of hydroelectric power"] , es: ["En la frontera entre Canadá y Estados Unidos", "Incluye las enormes Horseshoe Falls", "Importante fuente de energía hidroeléctrica"], pt: ["Na fronteira entre o Canadá e os EUA", "Inclui as enormes Horseshoe Falls", "Importante fonte de energia hidroelétrica"], fr: ["À la frontière entre le Canada et les États-Unis", "Comprend les immenses chutes Horseshoe", "Source importante d'énergie hydroélectrique"]},
    elevation: 51, length: 1203,
    coords: [-79.0849, 43.0896], type: 'landmark', parent: 'CA', image: "/poi-images/can_niagara.webp"},
  {
    id: "can_cntower", "sights": {
      "de": [
            {
                  "name": "CN Tower Edge Walk",
                  "text": "Der CN Tower Edge Walk ist ein Außenrundgang auf der Aussichtsplattform des CN Towers.",
                  "category": "landmark",
                  "coords": [
                        -79.387115,
                        43.642501
                  ]
            },
            {
                  "name": "TIFF Lightbox",
                  "text": "Das TIFF Lightbox ist ein Theater- und Filmzentrum, das das Internationale Filmfestival von Toronto beherbergt.",
                  "category": "cultural",
                  "coords": [
                        -79.390533,
                        43.64672
                  ]
            },
            {
                  "name": "Rod Robbie Bridge",
                  "text": "Die Rod-Robbie-Brücke ist eine Fußgängerbrücke, die nach dem Architekten Rod Robbie in Toronto benannt ist.",
                  "category": "landmark",
                  "coords": [
                        -79.38823,
                        43.642947
                  ]
            },
            {
                  "name": "Simcoe Park",
                  "text": "Der Simcoe Park ist ein kleiner Stadtpark in der Nähe des CN Towers in Toronto.",
                  "category": "park",
                  "coords": [
                        -79.386887,
                        43.644753
                  ]
            },
            {
                  "name": "St. Andrew's Church",
                  "text": "Die St. Andrew's Church ist eine historische presbyterianische Kirche in der Innenstadt von Toronto.",
                  "category": "religious",
                  "coords": [
                        -79.385547,
                        43.64711
                  ]
            },
            {
                  "name": "Royal Alexandra Theatre",
                  "text": "Das Royal Alexandra Theatre ist ein historisches Theater im Theatre District von Toronto.",
                  "category": "cultural",
                  "coords": [
                        -79.387615,
                        43.647432
                  ]
            },
            {
                  "name": "Princess of Wales Theatre",
                  "text": "Das Princess of Wales Theatre ist ein modernes Theater im Vergnügungsviertel von Toronto.",
                  "category": "cultural",
                  "coords": [
                        -79.389248,
                        43.647059
                  ]
            }
      ],
      "hu": [
            {
                  "name": "CN Tower Edge Walk",
                  "text": "A CN Tower Edge Walk egy külső séta a CN Tower kilátószintjének szélén.",
                  "category": "landmark",
                  "coords": [
                        -79.387115,
                        43.642501
                  ]
            },
            {
                  "name": "TIFF Lightbox",
                  "text": "A TIFF Lightbox egy színház- és filmközpont, amely a Torontói Nemzetközi Filmfesztiválnak ad otthont.",
                  "category": "cultural",
                  "coords": [
                        -79.390533,
                        43.64672
                  ]
            },
            {
                  "name": "Rod Robbie Bridge",
                  "text": "A Rod Robbie-híd egy gyalogoshíd, amelyet Rod Robbie építészről neveztek el Torontóban.",
                  "category": "landmark",
                  "coords": [
                        -79.38823,
                        43.642947
                  ]
            },
            {
                  "name": "Simcoe Park",
                  "text": "A Simcoe Park egy kis városi park a CN Tower közelében Torontóban.",
                  "category": "park",
                  "coords": [
                        -79.386887,
                        43.644753
                  ]
            },
            {
                  "name": "St. Andrew's Church",
                  "text": "A St. Andrew's Church egy történelmi presbiteriánus templom Toronto belvárosában.",
                  "category": "religious",
                  "coords": [
                        -79.385547,
                        43.64711
                  ]
            },
            {
                  "name": "Royal Alexandra Theatre",
                  "text": "A Royal Alexandra Theatre egy történelmi színház Toronto színházi negyedében.",
                  "category": "cultural",
                  "coords": [
                        -79.387615,
                        43.647432
                  ]
            },
            {
                  "name": "Princess of Wales Theatre",
                  "text": "A Princess of Wales Theatre egy modern színház Toronto szórakoztató negyedében.",
                  "category": "cultural",
                  "coords": [
                        -79.389248,
                        43.647059
                  ]
            }
      ],
      "ro": [
            {
                  "name": "CN Tower Edge Walk",
                  "text": "CN Tower Edge Walk este o plimbare în aer liber pe marginea platformei de observație a turnului CN.",
                  "category": "landmark",
                  "coords": [
                        -79.387115,
                        43.642501
                  ]
            },
            {
                  "name": "TIFF Lightbox",
                  "text": "TIFF Lightbox este un centru de teatru și film care găzduiește Festivalul Internațional de Film de la Toronto.",
                  "category": "cultural",
                  "coords": [
                        -79.390533,
                        43.64672
                  ]
            },
            {
                  "name": "Rod Robbie Bridge",
                  "text": "Podul Rod Robbie este un pod pietonal numit după arhitectul Rod Robbie din Toronto.",
                  "category": "landmark",
                  "coords": [
                        -79.38823,
                        43.642947
                  ]
            },
            {
                  "name": "Simcoe Park",
                  "text": "Simcoe Park este un mic parc urban lângă CN Tower din Toronto.",
                  "category": "park",
                  "coords": [
                        -79.386887,
                        43.644753
                  ]
            },
            {
                  "name": "St. Andrew's Church",
                  "text": "Biserica St. Andrew's este o biserică presbiteriană istorică în centrul orașului Toronto.",
                  "category": "religious",
                  "coords": [
                        -79.385547,
                        43.64711
                  ]
            },
            {
                  "name": "Royal Alexandra Theatre",
                  "text": "Royal Alexandra Theatre este un teatru istoric în districtul teatral din Toronto.",
                  "category": "cultural",
                  "coords": [
                        -79.387615,
                        43.647432
                  ]
            },
            {
                  "name": "Princess of Wales Theatre",
                  "text": "Princess of Wales Theatre este un teatru modern în cartierul de divertisment din Toronto.",
                  "category": "cultural",
                  "coords": [
                        -79.389248,
                        43.647059
                  ]
            }
      ],
      "en": [
            {
                  "name": "CN Tower Edge Walk",
                  "text": "CN Tower Edge Walk is an outdoor walk on the edge of the CN Tower's main pod.",
                  "category": "landmark",
                  "coords": [
                        -79.387115,
                        43.642501
                  ]
            },
            {
                  "name": "TIFF Lightbox",
                  "text": "TIFF Lightbox is a theatre and film centre home to the Toronto International Film Festival.",
                  "category": "cultural",
                  "coords": [
                        -79.390533,
                        43.64672
                  ]
            },
            {
                  "name": "Rod Robbie Bridge",
                  "text": "Rod Robbie Bridge is a pedestrian bridge named after architect Rod Robbie in Toronto.",
                  "category": "landmark",
                  "coords": [
                        -79.38823,
                        43.642947
                  ]
            },
            {
                  "name": "Simcoe Park",
                  "text": "Simcoe Park is a small urban park near the CN Tower in Toronto.",
                  "category": "park",
                  "coords": [
                        -79.386887,
                        43.644753
                  ]
            },
            {
                  "name": "St. Andrew's Church",
                  "text": "St. Andrew's Church is a historic Presbyterian church in downtown Toronto.",
                  "category": "religious",
                  "coords": [
                        -79.385547,
                        43.64711
                  ]
            },
            {
                  "name": "Royal Alexandra Theatre",
                  "text": "Royal Alexandra Theatre is a historic theatre in Toronto's Theatre District.",
                  "category": "cultural",
                  "coords": [
                        -79.387615,
                        43.647432
                  ]
            },
            {
                  "name": "Princess of Wales Theatre",
                  "text": "Princess of Wales Theatre is a modern theatre in Toronto's entertainment district.",
                  "category": "cultural",
                  "coords": [
                        -79.389248,
                        43.647059
                  ]
            }
      ]
},    name: { de: "CN Tower", hu: "CN Tower", ro: "CN Tower", en: "CN Tower" },
    description: { de: "Iconic tower in Toronto", hu: "Ikonikus torony Torontóban", ro: "Turn iconic în Toronto", en: "Iconic tower in Toronto" , es: "Torre icónica en Toronto.", pt: "Torre icónica em Toronto.", fr: "Tour emblématique à Toronto."},
    coords: [-79.3871, 43.6426], type: 'landmark', parent: 'CA',
    descriptionAdvanced: {
      de: "Der CN Tower in Toronto war bei seiner Fertigstellung im Jahr 1976 mit 553,3 Metern das höchste freistehende Bauwerk der Welt, ein Titel, den er über 30 Jahre lang hielt. Er wurde von der Eisenbahngesellschaft Canadian National errichtet, um Kommunikationsprobleme zu lösen, die durch die wachsende Zahl von Wolkenkratzern in der Innenstadt entstanden waren. Heute ist der Turm nicht nur ein Wahrzeichen Kanadas, sondern auch ein kritischer Knotenpunkt für die Telekommunikation und den digitalen Rundfunk. Besucher können mit Hochgeschwindigkeitsaufzügen zu verschiedenen Aussichtsplattformen fahren, darunter der berühmte 'Glass Floor' und der 'SkyPod' auf einer schwindelerregenden Höhe von 447 Metern. Ein besonderer Nervenkitzel ist der 'EdgeWalk', bei dem man gesichert auf einem äußeren Sims um den Turm herumlaufen kann. Architektonisch beeindruckt der Turm durch seine schlanke, hexagonale Betonstruktur und seine außergewöhnliche Stabilität bei extremen Windgeschwindigkeiten und Erdbeben. Die Beleuchtung des Turms wird heute mit moderner LED-Technik gesteuert und leuchtet oft in Farben, die an wichtige nationale Ereignisse oder globale Gedenktage erinnern.",
      hu: "A CN Tower Toronto és egész Kanada legismertebb szimbóluma, amely 1976-os átadásakor 553,3 méteres magasságával a világ legmagasabb szabadon álló építménye volt, és ezt a címet 34 éven át őrizte a Burdzs Kalifa felépültéig. Az épületet eredetileg a Canadian National vasúttársaság építtette távközlési célokra, mivel a torontói belvárosban szaporodó felhőkarcolók akadályozták a rádió- és televíziós jelek terjedését. A torony mérnöki bravúr: a hatszögletű üreges betonszerkezetet úgy tervezték, hogy ellenálljon a hatalmas szélnyomásnak és a villámcsapásoknak, melyekből évente átlagosan 75 éri az építményt. A turisták számára több kilátószint is elérhető, köztük a 342 méteren található üvegpadló, illetve a 447 méter magasan lévő SkyPod, ahonnan tiszta időben akár a Niagara-vízesésig is ellátni. A legbátrabbak kipróbálhatják az EdgeWalkot, ahol rögzített kötéllel sétálhatnak körbe a torony peremén. A CN Tower ma is központi szerepet tölt be a digitális műsorszórásban, miközben éjszakánként változó színekben pompázó kivilágítása meghatározza a város modern látképét.",
      ro: "CN Tower din Toronto este unul dintre cele mai emblematice simboluri ale Canadei și o realizare inginerească de excepție a secolului XX. Finalizat în 1976, acesta a deținut titlul de cea mai înaltă structură autoportantă din lume timp de 34 de ani, având o înălțime totală de 553,3 metri. Construit inițial de compania feroviară Canadian National pentru a soluționa problemele de transmisie cauzate de zgârie-norii tot mai înalți din centrul orașului, turnul servește și astăzi ca un centru vital pentru telecomunicații și televiziune. Structura sa principală este realizată din beton armat, având o formă hexagonală care îi conferă o stabilitate remarcabilă în fața vânturilor puternice și a seismelor. Vizitatorii pot accesa mai multe niveluri de observație, inclusiv celebrul 'Glass Floor' unde podeaua de sticlă oferă o vedere directă spre stradă de la sute de metri înălțime, și SkyPod-ul situat la 447 de metri. O experiență extremă populară este EdgeWalk, unde curajoșii pot merge pe marginea exterioară a turnului. Turnul este echipat cu un sistem sofisticat de iluminat LED care își schimbă culorile pentru a marca diverse evenimente, luminând cerul nopții în Toronto.",
      en: "The CN Tower in Toronto stands as a defining feature of the city's skyline and a marvel of modern engineering. Completed in 1976 by the Canadian National Railway, it was originally designed to overcome communication interference caused by the rising number of skyscrapers in the downtown core. Reaching a total height of 553.3 meters, it held the record for the world's tallest free-standing structure for 34 years until the completion of the Burj Khalifa. The tower's core is a hollow hexagonal concrete shaft containing elevators and utilities, topped by a circular pod that houses observation decks and a revolving restaurant. Innovative safety features allow the structure to withstand lightning strikes—averaging 75 per year—and hurricane-force winds. Tourists flock to the tower to experience the Glass Floor at 342 meters or the SkyPod, one of the world's highest public observation galleries at 447 meters. For thrill-seekers, the EdgeWalk offers a hands-free walk along the perimeter of the main pod's roof. Beyond its role as a major tourist attraction, the CN Tower remains a critical telecommunications hub for radio, television, and wireless data providers across the region.",
    },
    factsAdvanced: {
      de: ["Höhe von 553,33 Metern", "Fertiggestellt im Jahr 1976", "Glasboden in 342 Metern Höhe", "Restaurant dreht sich alle 72 Minuten", "Vom Blitz etwa 75 Mal pro Jahr getroffen", "Bauzeit betrug insgesamt 40 Monate"],
      hu: ["Magassága 553,33 méter", "1976-ban fejezték be az építését", "Üvegpadló 342 méteres magasságban", "Az étterem 72 percenként tesz meg egy kört", "Évente átlagosan 75 villámcsapás éri", "Az építkezés 40 hónapig tartott"],
      ro: ["Înălțime totală de 553,33 metri", "Construcție finalizată în anul 1976", "Podea de sticlă la 342 metri înălțime", "Restaurantul se rotește complet în 72 minute", "Lovite de fulger de circa 75 ori pe an", "Durata construcției a fost de 40 de luni"],
      en: ["Stands 553.33 meters tall", "Completed in 1976 after 40 months", "Glass floor located at 342 meters high", "360 Restaurant rotates every 72 minutes", "Struck by lightning about 75 times a year", "Was world's tallest until 2007"],
      es: ["Altura de 553,33 metros", "Completada en 1976", "Suelo de cristal a 342 metros", "Restaurante gira cada 72 minutos", "Impactada por rayos 75 veces al año", "Construcción de 40 meses"],
      pt: ["Altura de 553,33 metros", "Concluída em 1976", "Chão de vidro a 342 metros", "Restaurante gira a cada 72 minutos", "Atingida por raios 75 vezes por ano", "Construção de 40 meses"],
      fr: ["Hauteur de 553,33 mètres", "Achevée en 1976", "Plancher de verre à 342 mètres", "Le restaurant tourne en 72 minutes", "Frappée par la foudre 75 fois par an", "40 mois de construction"],
    },
    image: "/poi-images/can_cntower.webp",
  },
  {
    id: "can_jasper",    name: { de: "Jasper National Park", hu: "Jasper Nemzeti Park", ro: "Parcul Național Jasper", en: "Jasper National Park" },
    description: { de: "National park in Alberta", hu: "Nemzeti park Albertában", ro: "Parc național în Alberta", en: "National park in Alberta" , es: "Parque nacional en Alberta.", pt: "Parque nacional em Alberta.", fr: "Parc national en Alberta."},
    descriptionAdvanced: {
      de: "Der Jasper-Nationalpark ist mit einer Fläche von 10.878 Quadratkilometern der größte Nationalpark in den kanadischen Rocky Mountains und Teil des UNESCO-Welterbes. Gegründet im Jahr 1907, besticht der Park durch seine raue, ursprüngliche Wildnis und eine geringere Besucherdichte im Vergleich zum südlicheren Banff. Das Herzstück des Parks ist das Columbia-Eisfeld, die größte Eisansammlung in den Rocky Mountains, deren Schmelzwasser in drei verschiedene Ozeane abfließt: den Pazifik, den Arktischen Ozean und den Atlantik. Geologisch ist Jasper geprägt durch steile Gipfel wie den Mount Edith Cavell und tiefe Canyons wie den Maligne Canyon, der durch unterirdische Flusssysteme gespeist wird. Der Park ist ein Rückzugsort für bedrohte Tierarten wie das Waldkaribu und beherbergt große Populationen von Grizzlybären, Schwarzbären, Elchen und Dickhornschafen. Eine Besonderheit ist der Status als Dark Sky Preserve, der 2011 verliehen wurde; es ist eines der weltweit größten Gebiete mit minimaler Lichtverschmutzung, was Jasper zu einem erstklassigen Ort für Astronomie und die Beobachtung von Nordlichtern macht. Die Infrastruktur konzentriert sich auf die Stadt Jasper, die ursprünglich als Eisenbahnstützpunkt entstand. Neben dem Alpinismus bietet der Park spektakuläre Wasserfälle wie die Athabasca Falls, wo sich der mächtige Fluss durch weichen Quarzsandstein gegraben hat. Jasper bleibt ein Symbol für kanadischen Naturschutz, in dem großräumige Ökosysteme weitgehend ungestört funktionieren können.",
      hu: "A Jasper Nemzeti Park a kanadai Sziklás-hegység legnagyobb kiterjedésű természetvédelmi területe, amely több mint 10 800 négyzetkilométeren terül el Alberta tartományban. Az 1907-ben alapított park vadabb és érintetlenebb arcát mutatja a hegységnek, mint a délebbre fekvő Banff. A terület központi eleme a Columbia-jégmező, amely Észak-Amerika egyik legfontosabb hidrológiai pontja; az itt elolvadó jég vize három különböző óceánba jut el. A park látképét monumentális hegycsúcsok, mint a Mount Edith Cavell, és mély, kanyargós szurdokok, például a Maligne-kanyon határozzák meg. Jasper kiemelkedő fontosságú az élővilág megőrzésében, hiszen itt élnek Kanada utolsó jelentős erdei karibu populációi, emellett grizzly medvék, farkasok és kanadai hiúzok is gyakran felbukkannak a sűrű fenyvesekben. 2011 óta a park a világ egyik legnagyobb sötét égbolt rezervátuma (Dark Sky Preserve), ahol a fényszennyezés hiánya miatt a tejút és az északi fény (aurora borealis) elképesztő tisztasággal látható. A turizmus központja Jasper városa, amely megőrizte barátságos, kisvárosi jellegét. A látogatók számára az egyik legnépszerűbb pont az Athabasca-vízesés, ahol a folyó hatalmas erővel zúdul át a kvarcit sziklákon. A park kezelése nagy hangsúlyt fektet a környezeti nevelésre és a jégmezők visszahúzódásának tudományos nyomon követésére, amely a globális felmelegedés egyik leglátványosabb indikátora a régióban.",
      ro: "Parcul Național Jasper este cea mai mare rezervație naturală din Munții Stâncoși canadieni, acoperind o suprafață impresionantă de 10.878 de kilometri pătrați în provincia Alberta. Înființat în 1907, parcul este renumit pentru peisajele sale vaste și sălbatice, fiind mult mai puțin aglomerat decât vecinul său sudic, Banff. Piesa centrală a parcului este Câmpul de Gheață Columbia, cea mai mare acumulare de gheață din Munții Stâncoși, care alimentează râuri ce se varsă în trei oceane diferite: Atlantic, Pacific și Arctic. Relieful este dominat de vârfuri semețe, cum este Muntele Edith Cavell, și de văi adânci sculptate de forța apelor glaciare. Parcul Jasper oferă refugiu unor specii vulnerabile, fiind unul dintre puținele locuri unde mai pot fi văzute efective semnificative de caribu de pădure, alături de urși grizzly, elani și oi canadiene. O distincție importantă a parcului este statutul de „Dark Sky Preserve”, acordat în 2011, fiind una dintre cele mai mari zone de pe glob protejate împotriva poluării luminoase, ceea ce permite observarea stelară de excepție și a aurorei boreale. Vizitatorii sunt atrași de fenomene naturale spectaculoase, cum este Canionul Maligne, cel mai adânc din Munții Stâncoși, și Cascada Athabasca, unde debitul uriaș al râului a tăiat prin straturile dure de cuarțit. Administrația parcului pune un accent deosebit pe conservarea habitatelor critice și pe monitorizarea topirii ghețarilor, oferind în același timp o rețea vastă de poteci pentru explorarea montană responsabilă.",
      en: "Jasper National Park, covering 10,878 square kilometers, is the largest national park in the Canadian Rockies and a vital component of the UNESCO-designated Canadian Rocky Mountain Parks. Established in 1907, Jasper offers a more rugged and remote wilderness experience compared to its southern counterparts. The park's centerpiece is the Columbia Icefield, the most significant body of ice in the Rocky Mountains, which serves as a hydrological apex; its meltwaters eventually reach the Pacific, Atlantic, and Arctic Oceans. The landscape is defined by towering peaks, such as the 3,363-meter Mount Edith Cavell, and deep limestone gorges like Maligne Canyon, known for its intricate underground river system. Jasper is a sanctuary for diverse wildlife, including grizzly bears, elk, moose, and one of the last remaining populations of woodland caribou in the southern Rockies. In 2011, the park was designated a Dark Sky Preserve, making it one of the largest areas in the world where light pollution is strictly controlled to allow for unparalleled stargazing and aurora borealis viewing. The park features breathtaking landmarks like the Athabasca Falls, where the river's powerful flow has carved unique potholes into the hard quartzite rock. Jasper's management focuses on preserving vast, contiguous ecosystems, ensuring that the natural processes of the mountains, from glacial retreat to forest succession, can continue with minimal human interference, providing a true sanctuary for North American biodiversity.",
    },
    factsAdvanced: {
      de: ["Fläche: 10.878 km2", "Gründungsjahr: 1907", "Status: Dark Sky Preserve (seit 2011)", "Höchster Berg: Mount Columbia (3.747 m)", "Wanderwege: über 1.200 km", "Lage: Alberta, Kanada"],
      hu: ["1907-ben alapították", "Területe 10 878 km²", "Itt található a Mount Edith Cavell"],
      ro: ["Suprafață: 10.878 km2", "Anul înființării: 1907", "Statut special: Dark Sky Preserve", "Vârful maxim: Mount Columbia (3.747 m)", "Rețea poteci: peste 1.200 km", "Râu principal: Râul Athabasca"],
      en: ["Area: 10,878 km2", "Founded: 1907", "Special Status: Dark Sky Preserve (2011)", "Highest Peak: Mount Columbia (3,747 m)", "Hiking Trails: Over 1,200 km", "River: Athabasca River"],
    },
    facts: { de: ["Größter Park in den Rockies", "Columbia-Eisfeld", "UNESCO Weltnaturerbe", "Lichtschutzgebiet", "Vielfältige Tierwelt"], hu: ["A Sziklás-hegység legnagyobb parkja", "Columbia-jégmező", "UNESCO Világörökség", "Sötét égbolt rezervátum", "Változatos állatvilág"], ro: ["Cel mai mare parc din Stâncoși", "Câmpul de gheață Columbia", "Patrimoniu Mondial UNESCO", "Rezervație de cer întunecat", "Faună diversă"], en: ["Largest park in the Rockies", "Columbia Icefield", "UNESCO World Heritage Site", "Dark Sky Preserve", "Diverse wildlife"] , es: ["Mayor parque de las Rocosas", "Campo de hielo Columbia", "Patrimonio de la UNESCO", "Reserva de cielo oscuro", "Fauna diversa"], pt: ["Maior parque das Rochosas", "Campo de gelo Columbia", "Património da UNESCO", "Reserva de céu escuro", "Vida selvagem diversa"], fr: ["Plus grand parc des Rocheuses", "Champ de glace Columbia", "Patrimoine de l'UNESCO", "Réserve de ciel étoilé", "Faune diversifiée"]},
    area: 10878, historyYear: 1907, historyPeriod: "Modern Era",
    coords: [-117.7615, 52.8737], type: 'landmark', parent: 'CA', image: "/poi-images/can_jasper.webp"},
  {
    id: "can_whistler", "sights": {
      "de": [
            {
                  "name": "Train wreck",
                  "text": "Train wreck ist eine Attraktion in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -123.055522,
                        50.08135
                  ]
            },
            {
                  "name": "Green Lake Lookout",
                  "text": "Green Lake Lookout ist ein Aussichtspunkt mit Blick auf den Green Lake in Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.943995,
                        50.151471
                  ]
            },
            {
                  "name": "Vallea Lumina",
                  "text": "Vallea Lumina ist eine immersive Nachtattraktion in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.92214,
                        50.171497
                  ]
            },
            {
                  "name": "Abandoned Campsite",
                  "text": "Abandoned Campsite ist eine Attraktion in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.965371,
                        50.110317
                  ]
            },
            {
                  "name": "Wedge rafting",
                  "text": "Wedge rafting ist eine Wildwasser-Rafting-Attraktion in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.95462,
                        50.113407
                  ]
            },
            {
                  "name": "Olympic Torch",
                  "text": "Olympic Torch ist eine Attraktion in Whistler, die an die Olympischen Winterspiele 2010 erinnert.",
                  "category": "landmark",
                  "coords": [
                        -122.955212,
                        50.119042
                  ]
            },
            {
                  "name": "Theatre in the Park",
                  "text": "Theatre in the Park ist ein Freilufttheater in Whistler.",
                  "category": "cultural",
                  "coords": [
                        -122.956648,
                        50.117622
                  ]
            },
            {
                  "name": "The Plaza Galleries",
                  "text": "The Plaza Galleries sind Kunstgalerien im Whistler Village.",
                  "category": "museum",
                  "coords": [
                        -122.954738,
                        50.11777
                  ]
            },
            {
                  "name": "Rainbow Mountain Paraglide Launch",
                  "text": "Ein Aussichtspunkt auf dem Rainbow Mountain, der zum Paragliding genutzt wird.",
                  "category": "natural",
                  "coords": [
                        -122.984501,
                        50.145038
                  ]
            },
            {
                  "name": "Mount Sproatt",
                  "text": "Ein Berggipfel in der Nähe von Whistler.",
                  "category": "natural",
                  "coords": [
                        -123.028832,
                        50.125623
                  ]
            },
            {
                  "name": "Rainbow Lodge historic cabins",
                  "text": "Historische Blockhütten des ehemaligen Rainbow Lodge, einer bekannten Jagd- und Fischerei-Lodge.",
                  "category": "landmark",
                  "coords": [
                        -122.984645,
                        50.119563
                  ]
            },
            {
                  "name": "Cheakamus River Suspension Bridge",
                  "text": "Eine Hängebrücke über den Cheakamus River.",
                  "category": "landmark",
                  "coords": [
                        -123.032356,
                        50.067113
                  ]
            },
            {
                  "name": "Whistler Mountain",
                  "text": "Ein bedeutender Skiberg und Teil des Skigebiets Whistler Blackcomb.",
                  "category": "natural",
                  "coords": [
                        -122.95695,
                        50.05917
                  ]
            },
            {
                  "name": "Decker Mountain",
                  "text": "Ein Berggipfel im Gebiet von Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.854925,
                        50.069301
                  ]
            },
            {
                  "name": "Phalanx Mountain",
                  "text": "Ein Berggipfel im Whistler-Gebiet.",
                  "category": "natural",
                  "coords": [
                        -122.8575,
                        50.09833
                  ]
            },
            {
                  "name": "The Spearhead",
                  "text": "Ein Gipfel in der Spearhead Range bei Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.863921,
                        50.086329
                  ]
            },
            {
                  "name": "Blackcomb Peak",
                  "text": "Einer der beiden Hauptgipfel des Skigebiets Whistler Blackcomb.",
                  "category": "natural",
                  "coords": [
                        -122.87083,
                        50.08139
                  ]
            },
            {
                  "name": "Flute Summit",
                  "text": "Ein Gipfel im Musical-Bumps-Gebiet von Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.925533,
                        50.039917
                  ]
            },
            {
                  "name": "Oboe Summit",
                  "text": "Ein Gipfel im Musical-Bumps-Gebiet von Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.90278,
                        50.03528
                  ]
            },
            {
                  "name": "Piccolo Summit",
                  "text": "Ein Gipfel im Musical-Bumps-Gebiet von Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.94083,
                        50.04667
                  ]
            },
            {
                  "name": "Fitzsimmon Fan park",
                  "text": "Ein Strandpark in Whistler mit einem fächerförmigen Uferbereich.",
                  "category": "recreational",
                  "coords": [
                        -122.946809,
                        50.146168
                  ]
            },
            {
                  "name": "Blackcomb Glacier Provincial Park",
                  "text": "Ein Provinzpark, der den Blackcomb-Gletscher und die alpine Umgebung schützt.",
                  "category": "natural",
                  "coords": [
                        -122.872922,
                        50.094268
                  ]
            },
            {
                  "name": "Showh Lakes-ancient Cedars Trail Recreation Site",
                  "text": "Ein Erholungsgebiet mit alten Zedernbäumen und Seen bei Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.939951,
                        50.200456
                  ]
            },
            {
                  "name": "Squamish Lil'wat Cultural Centre",
                  "text": "Ein Museum, das die Kulturen der Squamish- und Lil'wat-First-Nations zeigt.",
                  "category": "museum",
                  "coords": [
                        -122.947384,
                        50.118745
                  ]
            },
            {
                  "name": "Audain Art Museum",
                  "text": "Ein Kunstmuseum, das eine Sammlung britisch-kolumbianischer Kunst beherbergt.",
                  "category": "museum",
                  "coords": [
                        -122.952684,
                        50.118239
                  ]
            },
            {
                  "name": "Lost Lake Beach",
                  "text": "Ein beliebter Strand am Lost Lake in Whistler.",
                  "category": "recreational",
                  "coords": [
                        -122.935216,
                        50.12695
                  ]
            },
            {
                  "name": "Whistler Interpretive Forest",
                  "text": "Ein Waldgebiet mit Lehrpfaden in Whistler.",
                  "category": "natural",
                  "coords": [
                        -123.022019,
                        50.050591
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Train wreck",
                  "text": "A Train wreck egy látványosság Whistlerben.",
                  "category": "landmark",
                  "coords": [
                        -123.055522,
                        50.08135
                  ]
            },
            {
                  "name": "Green Lake Lookout",
                  "text": "A Green Lake Lookout egy kilátóhely a Green Lake-re Whistlerben.",
                  "category": "natural",
                  "coords": [
                        -122.943995,
                        50.151471
                  ]
            },
            {
                  "name": "Vallea Lumina",
                  "text": "A Vallea Lumina egy magával ragadó éjszakai látványosság Whistlerben.",
                  "category": "landmark",
                  "coords": [
                        -122.92214,
                        50.171497
                  ]
            },
            {
                  "name": "Abandoned Campsite",
                  "text": "A Abandoned Campsite egy látványosság Whistlerben.",
                  "category": "landmark",
                  "coords": [
                        -122.965371,
                        50.110317
                  ]
            },
            {
                  "name": "Wedge rafting",
                  "text": "A Wedge rafting egy vadvízi evezős látványosság Whistlerben.",
                  "category": "landmark",
                  "coords": [
                        -122.95462,
                        50.113407
                  ]
            },
            {
                  "name": "Olympic Torch",
                  "text": "Az Olympic Torch egy látványosság Whistlerben, amely a 2010-es téli olimpiára emlékeztet.",
                  "category": "landmark",
                  "coords": [
                        -122.955212,
                        50.119042
                  ]
            },
            {
                  "name": "Theatre in the Park",
                  "text": "A Theatre in the Park egy szabadtéri színház Whistlerben.",
                  "category": "cultural",
                  "coords": [
                        -122.956648,
                        50.117622
                  ]
            },
            {
                  "name": "The Plaza Galleries",
                  "text": "A The Plaza Galleries művészeti galériák a Whistler Village-ben.",
                  "category": "museum",
                  "coords": [
                        -122.954738,
                        50.11777
                  ]
            },
            {
                  "name": "Rainbow Mountain Paraglide Launch",
                  "text": "Egy kilátóhely a Rainbow Mountainon, amelyet sárkányrepülésre használnak.",
                  "category": "natural",
                  "coords": [
                        -122.984501,
                        50.145038
                  ]
            },
            {
                  "name": "Mount Sproatt",
                  "text": "Egy hegycsúcs Whistler közelében.",
                  "category": "natural",
                  "coords": [
                        -123.028832,
                        50.125623
                  ]
            },
            {
                  "name": "Rainbow Lodge historic cabins",
                  "text": "A történelmi Rainbow Lodge kunyhói, egy híres vadász- és horgászszállás.",
                  "category": "landmark",
                  "coords": [
                        -122.984645,
                        50.119563
                  ]
            },
            {
                  "name": "Cheakamus River Suspension Bridge",
                  "text": "Egy függőhíd a Cheakamus folyó felett.",
                  "category": "landmark",
                  "coords": [
                        -123.032356,
                        50.067113
                  ]
            },
            {
                  "name": "Whistler Mountain",
                  "text": "Egy jelentős síhegy, a Whistler Blackcomb síterep része.",
                  "category": "natural",
                  "coords": [
                        -122.95695,
                        50.05917
                  ]
            },
            {
                  "name": "Decker Mountain",
                  "text": "Egy hegycsúcs a whistleri térségben.",
                  "category": "natural",
                  "coords": [
                        -122.854925,
                        50.069301
                  ]
            },
            {
                  "name": "Phalanx Mountain",
                  "text": "Egy hegycsúcs Whistler térségében.",
                  "category": "natural",
                  "coords": [
                        -122.8575,
                        50.09833
                  ]
            },
            {
                  "name": "The Spearhead",
                  "text": "Egy csúcs a Whistler melletti Spearhead-hegységben.",
                  "category": "natural",
                  "coords": [
                        -122.863921,
                        50.086329
                  ]
            },
            {
                  "name": "Blackcomb Peak",
                  "text": "A Whistler Blackcomb síközpont egyik fő csúcsa.",
                  "category": "natural",
                  "coords": [
                        -122.87083,
                        50.08139
                  ]
            },
            {
                  "name": "Flute Summit",
                  "text": "Egy csúcs a whistleri Musical Bumps területén.",
                  "category": "natural",
                  "coords": [
                        -122.925533,
                        50.039917
                  ]
            },
            {
                  "name": "Oboe Summit",
                  "text": "Egy csúcs a whistleri Musical Bumps területén.",
                  "category": "natural",
                  "coords": [
                        -122.90278,
                        50.03528
                  ]
            },
            {
                  "name": "Piccolo Summit",
                  "text": "Egy csúcs a whistleri Musical Bumps területén.",
                  "category": "natural",
                  "coords": [
                        -122.94083,
                        50.04667
                  ]
            },
            {
                  "name": "Fitzsimmon Fan park",
                  "text": "Egy strandpark Whistlerben, legyező alakú partszakasszal.",
                  "category": "recreational",
                  "coords": [
                        -122.946809,
                        50.146168
                  ]
            },
            {
                  "name": "Blackcomb Glacier Provincial Park",
                  "text": "Egy tartományi park, amely védi a Blackcomb-gleccsert és az alpesi környezetet.",
                  "category": "natural",
                  "coords": [
                        -122.872922,
                        50.094268
                  ]
            },
            {
                  "name": "Showh Lakes-ancient Cedars Trail Recreation Site",
                  "text": "Egy rekreációs terület ősi cédrusfákkal és tavakkal Whistler közelében.",
                  "category": "natural",
                  "coords": [
                        -122.939951,
                        50.200456
                  ]
            },
            {
                  "name": "Squamish Lil'wat Cultural Centre",
                  "text": "Egy múzeum, amely a Squamish és Lil'wat bennszülött népek kultúráját mutatja be.",
                  "category": "museum",
                  "coords": [
                        -122.947384,
                        50.118745
                  ]
            },
            {
                  "name": "Audain Art Museum",
                  "text": "Egy művészeti múzeum, amely Brit Columbia művészeti gyűjteményét őrzi.",
                  "category": "museum",
                  "coords": [
                        -122.952684,
                        50.118239
                  ]
            },
            {
                  "name": "Lost Lake Beach",
                  "text": "Egy népszerű strand a Lost Lake-nél Whistlerben.",
                  "category": "recreational",
                  "coords": [
                        -122.935216,
                        50.12695
                  ]
            },
            {
                  "name": "Whistler Interpretive Forest",
                  "text": "Egy erdős terület tanösvényekkel Whistlerben.",
                  "category": "natural",
                  "coords": [
                        -123.022019,
                        50.050591
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Train wreck",
                  "text": "Train wreck este o atracție în Whistler.",
                  "category": "landmark",
                  "coords": [
                        -123.055522,
                        50.08135
                  ]
            },
            {
                  "name": "Green Lake Lookout",
                  "text": "Green Lake Lookout este un punct de belvedere cu vedere la Green Lake în Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.943995,
                        50.151471
                  ]
            },
            {
                  "name": "Vallea Lumina",
                  "text": "Vallea Lumina este o atracție nocturnă imersivă în Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.92214,
                        50.171497
                  ]
            },
            {
                  "name": "Abandoned Campsite",
                  "text": "Abandoned Campsite este o atracție în Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.965371,
                        50.110317
                  ]
            },
            {
                  "name": "Wedge rafting",
                  "text": "Wedge rafting este o atracție de rafting pe ape repezi în Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.95462,
                        50.113407
                  ]
            },
            {
                  "name": "Olympic Torch",
                  "text": "Olympic Torch este o atracție în Whistler care comemorează Jocurile Olimpice de iarnă din 2010.",
                  "category": "landmark",
                  "coords": [
                        -122.955212,
                        50.119042
                  ]
            },
            {
                  "name": "Theatre in the Park",
                  "text": "Theatre in the Park este un teatru în aer liber în Whistler.",
                  "category": "cultural",
                  "coords": [
                        -122.956648,
                        50.117622
                  ]
            },
            {
                  "name": "The Plaza Galleries",
                  "text": "The Plaza Galleries sunt galerii de artă în Whistler Village.",
                  "category": "museum",
                  "coords": [
                        -122.954738,
                        50.11777
                  ]
            },
            {
                  "name": "Rainbow Mountain Paraglide Launch",
                  "text": "Un punct de belvedere pe Muntele Curcubeu, folosit pentru parapantă.",
                  "category": "natural",
                  "coords": [
                        -122.984501,
                        50.145038
                  ]
            },
            {
                  "name": "Mount Sproatt",
                  "text": "Un vârf de munte lângă Whistler.",
                  "category": "natural",
                  "coords": [
                        -123.028832,
                        50.125623
                  ]
            },
            {
                  "name": "Rainbow Lodge historic cabins",
                  "text": "Cabane istorice ale fostului Rainbow Lodge, un cunoscut loc de vânătoare și pescuit.",
                  "category": "landmark",
                  "coords": [
                        -122.984645,
                        50.119563
                  ]
            },
            {
                  "name": "Cheakamus River Suspension Bridge",
                  "text": "Un pod suspendat peste râul Cheakamus.",
                  "category": "landmark",
                  "coords": [
                        -123.032356,
                        50.067113
                  ]
            },
            {
                  "name": "Whistler Mountain",
                  "text": "Un munte important pentru schi, parte a zonei de schi Whistler Blackcomb.",
                  "category": "natural",
                  "coords": [
                        -122.95695,
                        50.05917
                  ]
            },
            {
                  "name": "Decker Mountain",
                  "text": "Un vârf de munte în zona Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.854925,
                        50.069301
                  ]
            },
            {
                  "name": "Phalanx Mountain",
                  "text": "Un vârf de munte în zona Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.8575,
                        50.09833
                  ]
            },
            {
                  "name": "The Spearhead",
                  "text": "Un vârf în lanțul Spearhead lângă Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.863921,
                        50.086329
                  ]
            },
            {
                  "name": "Blackcomb Peak",
                  "text": "Unul dintre cele două vârfuri principale ale stațiunii de schi Whistler Blackcomb.",
                  "category": "natural",
                  "coords": [
                        -122.87083,
                        50.08139
                  ]
            },
            {
                  "name": "Flute Summit",
                  "text": "Un vârf în zona Musical Bumps din Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.925533,
                        50.039917
                  ]
            },
            {
                  "name": "Oboe Summit",
                  "text": "Un vârf în zona Musical Bumps din Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.90278,
                        50.03528
                  ]
            },
            {
                  "name": "Piccolo Summit",
                  "text": "Un vârf în zona Musical Bumps din Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.94083,
                        50.04667
                  ]
            },
            {
                  "name": "Fitzsimmon Fan park",
                  "text": "Un parc de plajă în Whistler, cu o zonă de mal în formă de evantai.",
                  "category": "recreational",
                  "coords": [
                        -122.946809,
                        50.146168
                  ]
            },
            {
                  "name": "Blackcomb Glacier Provincial Park",
                  "text": "Un parc provincial care protejează ghețarul Blackcomb și mediul alpin din jur.",
                  "category": "natural",
                  "coords": [
                        -122.872922,
                        50.094268
                  ]
            },
            {
                  "name": "Showh Lakes-ancient Cedars Trail Recreation Site",
                  "text": "Un loc de recreere cu cedri seculari și lacuri lângă Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.939951,
                        50.200456
                  ]
            },
            {
                  "name": "Squamish Lil'wat Cultural Centre",
                  "text": "Un muzeu care prezintă culturile națiunilor indigene Squamish și Lil'wat.",
                  "category": "museum",
                  "coords": [
                        -122.947384,
                        50.118745
                  ]
            },
            {
                  "name": "Audain Art Museum",
                  "text": "Un muzeu de artă care găzduiește o colecție de artă din Columbia Britanică.",
                  "category": "museum",
                  "coords": [
                        -122.952684,
                        50.118239
                  ]
            },
            {
                  "name": "Lost Lake Beach",
                  "text": "O plajă populară la Lost Lake în Whistler.",
                  "category": "recreational",
                  "coords": [
                        -122.935216,
                        50.12695
                  ]
            },
            {
                  "name": "Whistler Interpretive Forest",
                  "text": "O zonă forestieră cu trasee interpretative în Whistler.",
                  "category": "natural",
                  "coords": [
                        -123.022019,
                        50.050591
                  ]
            }
      ],
      "en": [
            {
                  "name": "Train wreck",
                  "text": "Train wreck is an attraction in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -123.055522,
                        50.08135
                  ]
            },
            {
                  "name": "Green Lake Lookout",
                  "text": "Green Lake Lookout is a viewpoint overlooking Green Lake in Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.943995,
                        50.151471
                  ]
            },
            {
                  "name": "Vallea Lumina",
                  "text": "Vallea Lumina is an immersive night-time attraction in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.92214,
                        50.171497
                  ]
            },
            {
                  "name": "Abandoned Campsite",
                  "text": "Abandoned Campsite is an attraction in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.965371,
                        50.110317
                  ]
            },
            {
                  "name": "Wedge rafting",
                  "text": "Wedge rafting is a whitewater rafting attraction in Whistler.",
                  "category": "landmark",
                  "coords": [
                        -122.95462,
                        50.113407
                  ]
            },
            {
                  "name": "Olympic Torch",
                  "text": "Olympic Torch is an attraction in Whistler commemorating the 2010 Winter Olympics.",
                  "category": "landmark",
                  "coords": [
                        -122.955212,
                        50.119042
                  ]
            },
            {
                  "name": "Theatre in the Park",
                  "text": "Theatre in the Park is an outdoor theatre in Whistler.",
                  "category": "cultural",
                  "coords": [
                        -122.956648,
                        50.117622
                  ]
            },
            {
                  "name": "The Plaza Galleries",
                  "text": "The Plaza Galleries are art galleries in Whistler Village.",
                  "category": "museum",
                  "coords": [
                        -122.954738,
                        50.11777
                  ]
            },
            {
                  "name": "Rainbow Mountain Paraglide Launch",
                  "text": "A viewpoint on Rainbow Mountain used for paragliding launches.",
                  "category": "natural",
                  "coords": [
                        -122.984501,
                        50.145038
                  ]
            },
            {
                  "name": "Mount Sproatt",
                  "text": "A mountain peak near Whistler.",
                  "category": "natural",
                  "coords": [
                        -123.028832,
                        50.125623
                  ]
            },
            {
                  "name": "Rainbow Lodge historic cabins",
                  "text": "Historic cabins of the former Rainbow Lodge, a well-known hunting and fishing lodge.",
                  "category": "landmark",
                  "coords": [
                        -122.984645,
                        50.119563
                  ]
            },
            {
                  "name": "Cheakamus River Suspension Bridge",
                  "text": "A suspension bridge over the Cheakamus River.",
                  "category": "landmark",
                  "coords": [
                        -123.032356,
                        50.067113
                  ]
            },
            {
                  "name": "Whistler Mountain",
                  "text": "A major ski mountain and part of the Whistler Blackcomb ski area.",
                  "category": "natural",
                  "coords": [
                        -122.95695,
                        50.05917
                  ]
            },
            {
                  "name": "Decker Mountain",
                  "text": "A mountain peak in the Whistler area.",
                  "category": "natural",
                  "coords": [
                        -122.854925,
                        50.069301
                  ]
            },
            {
                  "name": "Phalanx Mountain",
                  "text": "A mountain peak in the Whistler area.",
                  "category": "natural",
                  "coords": [
                        -122.8575,
                        50.09833
                  ]
            },
            {
                  "name": "The Spearhead",
                  "text": "A peak in the Spearhead Range near Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.863921,
                        50.086329
                  ]
            },
            {
                  "name": "Blackcomb Peak",
                  "text": "One of the two main peaks of the Whistler Blackcomb ski resort.",
                  "category": "natural",
                  "coords": [
                        -122.87083,
                        50.08139
                  ]
            },
            {
                  "name": "Flute Summit",
                  "text": "A summit in the Musical Bumps area of Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.925533,
                        50.039917
                  ]
            },
            {
                  "name": "Oboe Summit",
                  "text": "A summit in the Musical Bumps area of Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.90278,
                        50.03528
                  ]
            },
            {
                  "name": "Piccolo Summit",
                  "text": "A summit in the Musical Bumps area of Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.94083,
                        50.04667
                  ]
            },
            {
                  "name": "Fitzsimmon Fan park",
                  "text": "A beach park in Whistler with a fan-shaped shoreline.",
                  "category": "recreational",
                  "coords": [
                        -122.946809,
                        50.146168
                  ]
            },
            {
                  "name": "Blackcomb Glacier Provincial Park",
                  "text": "A provincial park protecting the Blackcomb Glacier and surrounding alpine environment.",
                  "category": "natural",
                  "coords": [
                        -122.872922,
                        50.094268
                  ]
            },
            {
                  "name": "Showh Lakes-ancient Cedars Trail Recreation Site",
                  "text": "A recreation site featuring ancient cedar trees and lakes near Whistler.",
                  "category": "natural",
                  "coords": [
                        -122.939951,
                        50.200456
                  ]
            },
            {
                  "name": "Squamish Lil'wat Cultural Centre",
                  "text": "A museum showcasing the cultures of the Squamish and Lil'wat First Nations.",
                  "category": "museum",
                  "coords": [
                        -122.947384,
                        50.118745
                  ]
            },
            {
                  "name": "Audain Art Museum",
                  "text": "An art museum housing a collection of British Columbia art.",
                  "category": "museum",
                  "coords": [
                        -122.952684,
                        50.118239
                  ]
            },
            {
                  "name": "Lost Lake Beach",
                  "text": "A popular beach at Lost Lake in Whistler.",
                  "category": "recreational",
                  "coords": [
                        -122.935216,
                        50.12695
                  ]
            },
            {
                  "name": "Whistler Interpretive Forest",
                  "text": "A forested area with interpretive trails in Whistler.",
                  "category": "natural",
                  "coords": [
                        -123.022019,
                        50.050591
                  ]
            }
      ]
},    name: { de: "Whistler", hu: "Whistler", ro: "Whistler", en: "Whistler" },
    description: { de: "Whistler ist ein Weltklasse-Resort in British Columbia, eingebettet in die spektakulären Coast Mountains. Es ist weltweit berühmt für seine außergewöhnlichen Ski- und Snowboardmöglichkeiten sowie sein lebhaftes Alpendorf.", hu: "Whistler egy világszínvonalú üdülőváros Brit Kolumbiában, a látványos Parti-hegységben. Világszerte híres kiváló síelési és snowboardozási lehetőségeiről, valamint nyüzsgő alpesi falujáról.", ro: "Whistler este o stațiune de clasă mondială din Columbia Britanică, situată în spectaculoșii Munți de Coastă. Este renumită la nivel global pentru schi, snowboarding și satul său alpin plin de viață.", en: "Whistler is a world-class resort town in British Columbia, nestled in the spectacular Coast Mountains. It is globally famous for its exceptional skiing, snowboarding, and vibrant alpine village." , es: "Whistler es un complejo de clase mundial en la Columbia Británica, ubicado en las espectaculares Coast Mountains. Es famoso en todo el mundo por sus excepcionales opciones para el esquí y el snowboard, así como por su animada villa alpina.", pt: "Whistler é um resort de classe mundial na Colúmbia Britânica, situado nas espetaculares Coast Mountains. É mundialmente famoso pelas suas excecionais oportunidades de esqui e snowboard, bem como pela sua animada vila alpina.", fr: "Whistler est une station de classe mondiale en Colombie-Britannique, nichée dans les spectaculaires montagnes côtières. Elle est mondialement connue pour ses possibilités exceptionnelles de ski et de planche à neige ainsi que pour son village alpin animé."},
    coords: [-122.9574, 50.1163], type: 'landmark', parent: 'CA', image: "/poi-images/can_whistler.webp",
    descriptionAdvanced: {
      de: "Whistler liegt in den Coast Mountains von British Columbia und ist weltweit als eines der führenden Ganzjahres-Resorts bekannt. Berühmt wurde der Ort vor allem durch die Olympischen Winterspiele 2010, die er gemeinsam mit Vancouver ausrichtete. Das Skigebiet besteht aus den beiden Bergen Whistler Mountain und Blackcomb Mountain, die durch die spektakuläre Peak 2 Peak Gondel miteinander verbunden sind – eine Seilbahn, die Weltrekorde für die längste freitragende Strecke und die größte Höhe über dem Boden hält. Ursprünglich war die Region für den Fischfang und den Bergbau bekannt, bevor sie sich ab den 1960er Jahren zu einem Zentrum für den alpinen Skisport entwickelte. Im Sommer verwandelt sich Whistler in ein Mekka für Mountainbiker und Wanderer, mit einem Bikepark, der international als Goldstandard für technische Trails gilt. Das Whistler Village, ein fußgängerfreundliches Dorfzentrum nach dem Vorbild europäischer Skiorte, bietet eine hohe Dichte an Gastronomie und Kultur. Ökologisch ist die Region durch den gemäßigten Regenwald und die alpine Tundra geprägt, wobei Nachhaltigkeit in der Bewirtschaftung des Resorts eine immer größere Rolle spielt.",
      hu: "Whistler egy világhírű hegyi üdülőváros Brit Kolumbiában, a Part menti hegység szívében, Vancouvertől mintegy 125 kilométerre északra. Nemzetközi hírnevét leginkább a 2010-es téli olimpiai játékoknak köszönheti, ahol az alpesi síversenyek házigazdája volt. A település két hatalmas hegy, a Whistler és a Blackcomb lábánál fekszik, melyeket a világrekorder Peak 2 Peak gondola köt össze, lehetővé téve a sportolók számára, hogy egyetlen nap alatt mindkét hegy hatalmas pályarendszerét bejárják. A terület eredetileg az őslakos Squamish és Lil'wat népek otthona volt, majd a 20. század közepén indult el a turisztikai fejlesztés. Whistler ma már nemcsak télen, hanem nyáron is rendkívül népszerű: kerékpáros parkja a világ egyik legjobbja, túraútvonalai pedig gleccserekhez és kristálytiszta tavakhoz vezetnek. A városközpont, a Whistler Village egy sétálóövezetes falu, amely élénk éjszakai élettel és kifinomult gasztronómiával várja a látogatókat a kanadai vadon peremén.",
      ro: "Whistler, situat în Munții Coast din Columbia Britanică, este recunoscut la nivel mondial ca fiind una dintre cele mai importante destinații de vacanță pe tot parcursul anului. Popularitatea sa a explodat după găzduirea jocurilor olimpice de iarnă din 2010, împreună cu orașul Vancouver. Resortul este format din doi munți impunători, Whistler și Blackcomb, care împreună oferă unul dintre cele mai mari domenii schiabile din America de Nord, cu peste 200 de pârtii. O piesă centrală a infrastructurii este gondola Peak 2 Peak, care deține recorduri mondiale pentru cea mai lungă deschidere liberă între piloni și cea mai mare înălțime deasupra solului. Înainte de a deveni un hub turistic în anii 1960, regiunea a fost explorată pentru resursele sale naturale, însă viziunea dezvoltatorilor a transformat-o într-un model de urbanism montan. Vara, stațiunea devine o capitală a mountain biking-ului, având un parc de biciclete celebru. Biodiversitatea zonei este fascinantă, de la pădurile de conifere gigantice până la fauna montană reprezentată de urși negri, care pot fi adesea observați din telecabină.",
      en: "Whistler is a premier resort town nestled in the southern Pacific Ranges of the Coast Mountains in British Columbia. It gained global prominence as the co-host of the 2010 Winter Olympic Games, serving as the primary venue for alpine, Nordic, and sliding events. The resort encompasses two massive peaks, Whistler and Blackcomb Mountains, which together provide over 8,000 acres of skiable terrain, making it the largest ski resort in North America. These mountains are linked by the Peak 2 Peak Gondola, an engineering marvel that holds world records for the longest unsupported cable span and the highest elevation above a valley floor. Originally inhabited by the Squamish and Lil'wat First Nations, the area transitioned from a fishing outpost to a skiing destination in the 1960s. Beyond winter sports, Whistler has evolved into a world-class summer destination, boasting a renowned mountain bike park and extensive hiking trails through ancient cedar forests and subalpine meadows. The pedestrian-only Whistler Village serves as the social heart of the community, designed to blend European chalet charm with West Coast architecture.",
    },
    factsAdvanced: {
      de: ["Austragungsort der Olympischen Winterspiele 2010", "Sitz des Whistler Blackcomb, eines der größten Skigebiete Nordamerikas", "Liegt etwa 125 Kilometer nördlich von Vancouver", "Höchste Erhebung im Skigebiet ist der Blackcomb Mountain mit 2440 Metern", "Die Peak 2 Peak Gondel verbindet zwei Berggipfel über 4,4 Kilometer", "Gegründet als Resort-Gemeinde im Jahr 1975"],
      hu: ["A 2010-es téli olimpiai játékok alpesi versenyeinek helyszíne", "Itt található Észak-Amerika egyik legnagyobb síközpontja, a Whistler Blackcomb", "Vancouvertől körülbelül 125 kilométerre északra fekszik", "A Blackcomb-hegy legmagasabb pontja 2440 méter", "A Peak 2 Peak felvonó 4,4 kilométeres távolságon köti össze a csúcsokat", "A települést hivatalosan 1975-ben alapították üdülővárosként"],
      ro: ["Gazdă a probelor alpine pentru Jocurile Olimpice de Iarnă din 2010", "Adăpostește Whistler Blackcomb, unul dintre cele mai mari domenii schiabile", "Situat la aproximativ 125 de kilometri nord de Vancouver", "Altitudinea maximă pe muntele Blackcomb este de 2440 metri", "Telegondola Peak 2 Peak face legătura între vârfuri pe o distanță de 4,4 km", "Localitatea a fost încorporată ca municipalitate de stațiune în 1975"],
      en: ["Host venue for the 2010 Winter Olympic alpine skiing events", "Home to Whistler Blackcomb, one of North America's largest ski resorts", "Located approximately 125 kilometers north of Vancouver", "The highest elevation in the ski area is Blackcomb Mountain at 2,440 meters", "The Peak 2 Peak Gondola spans 4.4 kilometers between two mountain peaks", "Incorporated as a resort municipality in 1975"],
      es: ["Sede de los Juegos Olímpicos de Invierno de 2010", "Hogar de Whistler Blackcomb, una de las mayores estaciones de esquí de Norteamérica", "Situada a unos 125 kilómetros al norte de Vancouver", "El punto más alto de la zona de esquí es la montaña Blackcomb con 2.440 metros", "La góndola Peak 2 Peak conecta dos picos montañosos a lo largo de 4,4 kilómetros", "Fundada como comunidad turística en 1975"],
      pt: ["Sede dos Jogos Olímpicos de Inverno de 2010", "Casa de Whistler Blackcomb, uma das maiores estâncias de esqui da América do Norte", "Localizada a cerca de 125 quilómetros a norte de Vancouver", "A elevação mais alta na área de esqui é a Blackcomb Mountain com 2440 metros", "A gôndola Peak 2 Peak liga dois picos de montanha ao longo de 4,4 quilómetros", "Fundada como uma comunidade de resort em 1975"],
      fr: ["Site hôte des Jeux olympiques d'hiver de 2010", "Siège de Whistler Blackcomb, l'un des plus grands domaines skiables d'Amérique du Nord", "Située à environ 125 kilomètres au nord de Vancouver", "Le point culminant du domaine skiable est le mont Blackcomb à 2 440 mètres", "La télécabine Peak 2 Peak relie deux sommets sur 4,4 kilomètres", "Fondée en tant que municipalité de villégiature en 1975"],
    },
  },
  {
    id: "can_fundy",    name: { de: "Bay of Fundy", hu: "Fundy-öböl", ro: "Golful Fundy", en: "Bay of Fundy" },
    description: { de: "Known for high tides", hu: "Híres az árapályról", ro: "Cunoscut pentru maree înalte", en: "Known for high tides" , es: "Conocida por las mareas más altas del mundo.", pt: "Conhecida pelas marés mais altas do mundo.", fr: "Connue pour ses marées record."},
    descriptionAdvanced: {
      de: "Die Bay of Fundy, gelegen zwischen den kanadischen Provinzen New Brunswick und Nova Scotia, ist weltweit bekannt für den höchsten Gezeitenunterschied der Erde, der an einigen Stellen bis zu 16 Meter erreichen kann. Zweimal täglich fließen rund 160 Milliarden Tonnen Meerwasser in die Bucht und wieder hinaus, was mehr ist als der kombinierte Abfluss aller Süßwasserflüsse der Welt. Dieses Naturphänomen wird durch die trichterförmige Geometrie der Bucht und die Resonanz der Gezeitenwelle verstärkt, die fast perfekt mit dem Mondzyklus harmoniert. Die gewaltigen Wassermassen haben über Jahrtausende die Küstenlandschaft geformt, wobei markante Formationen wie die Hopewell Rocks entstanden sind – riesige Sandsteinfelsen, die bei Ebbe zu Fuß erkundet werden können und bei Flut wie kleine Inseln aus dem Wasser ragen. Die Bucht ist zudem ein ökologisch hochsensibles Gebiet und ein wichtiger Futterplatz für zwölf Walarten, darunter der seltene Nordatlantische Glattwal. Die nährstoffreichen Gewässer ziehen große Mengen an Plankton und Fischen an, was wiederum eine vielfältige Seevogelpopulation unterstützt. Geologisch gesehen ist die Bay of Fundy Teil eines prähistorischen Grabensystems aus der Trias-Zeit, und die umliegenden Klippen enthalten bedeutende Fossilienvorkommen, die Einblicke in die frühe Evolution der Dinosaurier geben. Der Fundy-Nationalpark schützt einen Teil dieser Küstenlinie und bietet Wanderwege durch unberührte boreale Wälder und zu spektakulären Aussichtspunkten über den Atlantik.",
      hu: "A Fundy-öböl az Atlanti-óceán egyik legkülönlegesebb része, amely a kanadai Új-Brunswick és Új-Skócia tartományok között terül el. Az öböl világszerte a legmagasabb árapály-ingadozásról nevezetes, amely a Minas-medencében elérheti a 16 méteres magasságot is. Naponta kétszer körülbelül 160 milliárd tonna tengervíz zúdul be az öbölbe, majd távozik onnan, ami több, mint a világ összes édesvízi folyójának együttes vízhozama. Ez a jelenség az öböl tölcsérszerű alakjának és a víz természetes rezonanciájának köszönhető, amely felerősíti az árapály hullámait. Az erózió lenyűgöző formákat hozott létre a parton, amelyek közül a leghíresebbek a Hopewell Rocks „virágcserép” sziklái; ezeket apálykor a tengerfenéken sétálva lehet megtekinteni, dagálykor viszont kajakkal evezhetünk körbe a csúcsaiknál. Az öböl ökológiai jelentősége is kiemelkedő: a tápanyagokban gazdag víz vonzza a bálnákat, köztük a veszélyeztetett északi simabálnát, amely itt neveli kicsinyeit a nyári hónapokban. A terület geológiai értelemben is kincsesbánya, a Joggins-szikláknál található fosszíliák a karbon időszak erdőiről és az első hüllők megjelenéséről tanúskodnak, amiért az UNESCO a világörökség részévé nyilvánította. A Fundy Nemzeti Park nemcsak a partvidéket, hanem a belső területek vadregényes erdőit és vízeséseit is védi, lehetőséget adva a természetközeli kikapcsolódásra.",
      ro: "Golful Fundy, situat între provinciile canadiene New Brunswick și Nova Scotia, este celebru la nivel mondial pentru cele mai mari maree de pe planetă, care pot atinge o amplitudine record de peste 16 metri în bazinul Minas. De două ori pe zi, aproximativ 160 de miliarde de tone de apă de mare intră și ies din golf, o cantitate imensă care depășește debitul combinat al tuturor râurilor de apă dulce din lume. Acest fenomen este rezultatul unei coincidențe geografice rare: forma de pâlnie a golfului și adâncimea sa creează o rezonanță naturală care amplifică oscilația apei în ritm cu atracția gravitațională a Lunii. Eroziunea constantă provocată de aceste mișcări masive de apă a sculptat coasta în forme dramatice, cum sunt Hopewell Rocks, coloane uriașe de gresie care la flux par a fi insule, iar la reflux pot fi explorate la pas pe fundul oceanului. Golful este un ecosistem marin vital, fiind o zonă de hrănire esențială pentru numeroase specii de balene, inclusiv rara balenă neagră din Atlanticul de Nord. Bogăția în nutrienți a apelor susține o biodiversitate incredibilă, de la plancton la colonii mari de păsări migratoare. Geologic, regiunea păstrează vestigii din perioada Triasicului, iar faleza Joggins Fossil Cliffs oferă cea mai completă imagine a vieții din perioada Carboniferului, fiind inclusă în patrimoniul UNESCO. Parcul Național Fundy protejează acest peisaj unic, oferind vizitatorilor șansa de a asista la transformarea radicală a liniei țărmului în doar câteva ore.",
      en: "The Bay of Fundy, nestled between the Canadian provinces of New Brunswick and Nova Scotia, is globally renowned for experiencing the highest tidal range on Earth, reaching upwards of 16 meters in the Minas Basin. Twice each day, approximately 160 billion tons of seawater flow in and out of the bay—a volume exceeding the combined discharge of all the world's freshwater rivers. This extraordinary natural phenomenon is caused by the bay's unique funnel-like geometry and a principle known as tidal resonance, where the water's natural oscillation period matches the lunar tide cycle. Centuries of relentless tidal action have carved the shoreline into dramatic formations, most notably the Hopewell Rocks, massive sandstone 'flowerpots' that stand as islands at high tide but allow visitors to walk on the ocean floor at low tide. The bay is an ecologically critical marine environment, serving as a primary feeding ground for twelve species of whales, including the critically endangered North Atlantic Right whale. The nutrient-rich waters support a vast array of marine life, attracting millions of migratory shorebirds each year. Geologically, the region is a window into the Triassic and Carboniferous periods; the Joggins Fossil Cliffs on the Nova Scotia side provide an unparalleled record of life from 300 million years ago and are designated as a UNESCO World Heritage site. Fundy National Park preserves the pristine Acadian forests and rugged coastal cliffs, offering a front-row seat to the most powerful tides in the world.",
    },
    factsAdvanced: {
      de: ["Max. Tidenhub: 16,3 m", "Wasservolumen pro Gezeitenwechsel: 160 Mrd. Tonnen", "Länge der Bucht: 270 km", "Alter der Hopewell Rocks: ca. 300 Mio. Jahre", "Walarten: 12 (u.a. Buckelwale)", "UNESCO-Fossilienfundstelle: Joggins Cliffs"],
      hu: ["Az árapály különbség akár 16 méter", "Ritka fosszíliák lelőhelye (Joggins)", "Költöző madarak fontos táplálkozóhelye"],
      ro: ["Amplitudine maximă maree: 16,3 m", "Volum apă pe ciclu: 160 miliarde tone", "Lungime golf: 270 km", "Vârstă formațiuni stâncoase: 300 mil. ani", "Specii de balene: 12", "Sit UNESCO: Joggins Fossil Cliffs"],
      en: ["Max Tidal Range: 16.3 m", "Water Movement/Cycle: 160 billion tons", "Bay Length: 270 km", "Rock Formation Age: ~300 million years", "Whale Species: 12", "UNESCO Site: Joggins Fossil Cliffs"],
    },
    facts: { de: ["Höchster Tidenhub weltweit", "Über 160 Mrd. Tonnen Wasserfluss", "UNESCO Biosphärenreservat", "Reich an Walen", "Spektakuläre Klippen"], hu: ["A világ legnagyobb árapálya", "Több mint 160 milliárd tonna vízmozgás", "UNESCO bioszféra-rezervátum", "Bálnákban gazdag", "Látványos sziklafalak"], ro: ["Cea mai mare maree din lume", "Flux de peste 160 miliarde tone de apă", "Rezervație a Biosferei UNESCO", "Bogat în balene", "Faleze spectaculoase"], en: ["Highest tides in the world", "Over 160 billion tons of water flow", "UNESCO Biosphere Reserve", "Rich in whale species", "Spectacular sea cliffs"] , es: ["Marea más alta del mundo", "160 mil millones de toneladas de agua", "Reserva de Biosfera UNESCO", "Rica en ballenas", "Acantilados espectaculares"], pt: ["Maior amplitude de maré global", "160 mil milhões de toneladas de água", "Reserva da Biosfera da UNESCO", "Rica em baleias", "Falésias espetaculares"], fr: ["Plus hautes marées du monde", "Flux de 160 milliards de tonnes d'eau", "Réserve de biosphère UNESCO", "Richesse en baleines", "Falaises spectaculaires"]},
    length: 270,
    coords: [-65.0481, 45.0], type: 'landmark', parent: 'CA', image: "/poi-images/can_fundy.webp"},
  {
    id: "can_louise",    name: { de: "Lake Louise", hu: "Louise-tó", ro: "Lacul Louise", en: "Lake Louise" },
    description: { de: "Glacial lake in Banff", hu: "Gleccsertó Banffban", ro: "Lac glaciar în Banff", en: "Glacial lake in Banff" , es: "Lago glacial en Banff", pt: "Lago glacial em Banff", fr: "Lac glaciaire à Banff"},
    descriptionAdvanced: {
      de: "Der Lake Louise ist ein weltbekannter Gletschersee im Banff-Nationalpark, der für sein leuchtend türkisfarbenes Wasser und die dramatische Kulisse des Victoria-Gletschers berühmt ist. Er liegt auf einer Höhe von 1.731 Metern und verdankt seine markante Farbe dem feinen Steinmehl (Rock Flour), das durch die Reibung des Gletschers am Fels entsteht und im Schmelzwasser in den See gelangt, wo es das Licht reflektiert. Ursprünglich wurde der See von den Stoney Nakoda First Nations 'Ho-run-num-nay' (See der kleinen Fische) genannt, bevor er Ende des 19. Jahrhunderts zu Ehren von Prinzessin Louise Caroline Alberta, der Tochter von Königin Victoria, umbenannt wurde. Am Ufer des Sees steht das imposante Fairmont Chateau Lake Louise, ein Luxushotel, das Ende des 19. Jahrhunderts von der Canadian Pacific Railway erbaut wurde, um den Tourismus in den Rocky Mountains zu fördern. Geologisch ist der See etwa 90 Meter tief und bleibt aufgrund seiner Lage und der Zufuhr von Gletscherwasser das ganze Jahr über extrem kalt. Die Umgebung bietet einige der besten Wanderwege Kanadas, darunter den Aufstieg zum 'Plain of Six Glaciers' oder zum 'Lake Agnes Tea House', von denen aus man einen weitreichenden Blick auf das Hochgebirgspanorama hat. Im Winter gefriert der See vollständig und wird zu einer der malerischsten Eislaufflächen der Welt. Trotz seiner Popularität bleibt der Schutz des empfindlichen alpinen Ökosystems rund um den See eine Priorität für den Nationalparkdienst.",
      hu: "A Lake Louise a kanadai Sziklás-hegység egyik legtöbbet fényképezett természeti látványossága, amely a Banff Nemzeti Parkban, 1731 méteres tengerszint feletti magasságban fekszik. A tó világhírét az elképesztő türkizkék színének köszönheti, amelyet a környező gleccserekből származó finom kőzetpor (glaciális liszt) okoz, amely a vízben lebegve veri vissza a napfényt. A tavat eredetileg a Stoney Nakoda őslakosok a „Kis halak tavának” nevezték, mai nevét pedig Viktória királynő lányáról, Louise hercegnőről kapta. A tó partján emelkedik a monumentális Fairmont Chateau Lake Louise szálloda, amelyet eredetileg a 19. század végén a Canadian Pacific Railway építtetett, hogy fellendítse a vasúti turizmust Nyugat-Kanadában. A tó vize a nyári hónapokban is rendkívül hideg, ritkán emelkedik 4 Celsius-fok fölé, mélysége pedig eléri a 70-90 métert. A tavat körülölelő hegyek, mint a Mount Victoria, állandó gleccserfedettséggel bírnak, amely drámai hátteret biztosít a víztükörnek. A túrázók számára a „Hat gleccser síksága” és az Agnes-tavi teaház útvonala kínál felejthetetlen kilátást a völgyre. Télen a tó teljesen befagy, és egy hatalmas természetes korcsolyapályává alakul, amelynek közepén jégszobrokat állítanak fel. A terület szigorúan védett, a látogatók mozgását kijelölt ösvényekre korlátozzák, hogy megóvják a ritka alpesi növényzetet és a vadon élő állatokat, például a medvéket.",
      ro: "Lake Louise este un lac glaciar situat în Parcul Național Banff din Munții Stâncoși, fiind renumit în întreaga lume pentru apele sale de un turcoaz intens și pentru fundalul spectaculos oferit de Ghețarul Victoria. Situat la o altitudine de 1.731 de metri, lacul își datorează culoarea ireală particulelor de rocă fin măcinată de eroziunea ghețarilor, care rămân suspendate în apă și reflectă lumina solară. Cunoscut inițial de popoarele indigene Stoney Nakoda sub numele de „Lacul Peștilor Mici”, acesta a fost redenumit la sfârșitul secolului al XIX-lea în onoarea Prințesei Louise Caroline Alberta, fiica reginei Victoria. Pe malul estic se află impunătorul hotel Fairmont Chateau Lake Louise, o structură istorică construită de Canadian Pacific Railway pentru a atrage turiști bogați prin intermediul căii ferate transcontinentale. Lacul are o adâncime maximă de aproximativ 90 de metri, iar apa sa rămâne extrem de rece pe tot parcursul anului, rareori depășind 4 grade Celsius. Regiunea din jurul lacului este un paradis pentru drumeții, oferind acces către trasee celebre precum Plain of Six Glaciers sau Lake Agnes Tea House, unde vizitatorii pot admira panorama alpină vastă. În timpul iernii, suprafața lacului îngheață complet, devenind unul dintre cele mai pitorești patinoare naturale din lume, găzduind frecvent festivaluri de sculptură în gheață. Conservarea acestui peisaj fragil este esențială, autoritățile parcului monitorizând constant impactul turismului asupra calității apei și a habitatului înconjurător.",
      en: "Lake Louise is a world-renowned glacial lake located within Banff National Park in the Alberta Rockies, celebrated for its vibrant turquoise waters and its dramatic backdrop of the Victoria Glacier. Situated at an elevation of 1,731 meters, the lake's distinctive color is the result of 'rock flour'—fine particles of silt suspended in the glacial meltwater that reflect the blue-green spectrum of sunlight. Originally known to the local Stoney Nakoda First Nations as the 'Lake of the Little Fishes,' it was renamed in the late 19th century after Princess Louise Caroline Alberta, the fourth daughter of Queen Victoria. On the lake's eastern shore sits the iconic Fairmont Chateau Lake Louise, a grand railway hotel originally constructed in 1890 to promote luxury tourism along the Canadian Pacific Railway line. Geologically, the lake is approximately 90 meters deep and spans 2.4 kilometers in length, with its water temperature remaining near freezing even in peak summer. The surrounding area offers some of the most spectacular hiking in Canada, including the trail to the Plain of Six Glaciers and the historic Lake Agnes Tea House, providing vistas of the high-alpine environment. During the winter months, the lake transforms into a majestic natural skating rink and serves as a venue for the Ice Magic Festival. Despite its heavy traffic as a premier global destination, the area remains a strictly managed ecological zone, requiring careful coordination to protect the subalpine flora and local wildlife populations like grizzly bears and mountain goats.",
    },
    factsAdvanced: {
      de: ["Meereshöhe: 1.731 m", "Maximale Tiefe: 90 m", "Namensgeberin: Prinzessin Louise (Tochter v. Victoria)", "Wassertemperatur: selten > 4°C", "Fläche: ca. 0,8 km2", "Hauptattraktion: Victoria-Gletscher"],
      hu: ["1731 m magasságban fekszik", "Louise Caroline Alberta hercegnőről nevezték el", "Színét a gleccserhordalék (kőzetliszt) adja"],
      ro: ["Altitudine: 1.731 m", "Adâncime maximă: 90 m", "Numit după: Prințesa Louise Caroline Alberta", "Temperatură apă: max. 4°C", "Lungime: 2,4 km", "Ghețar principal: Ghețarul Victoria"],
      en: ["Elevation: 1,731 m", "Maximum Depth: 90 m", "Named after: Princess Louise Caroline Alberta", "Water Temp: Seldom exceeds 4°C", "Lake Length: 2.4 km", "Source Glacier: Victoria Glacier"],
    },
    facts: { de: ["Türkisfarbenes Wasser", "Gletschergespeist", "Ikonisches Fairmont Hotel", "Ganzjähriges Outdoor-Ziel", "Teil des Banff-Nationalparks"], hu: ["Türkizkék víz", "Gleccser táplálja", "Ikonikus Fairmont Hotel", "Egész évben látogatható", "A Banff Nemzeti Park része"], ro: ["Apă turcoaz", "Alimentat de ghețar", "Hotelul iconic Fairmont", "Destinație outdoor tot anul", "Parte a Parcului Național Banff"], en: ["Turquoise water", "Glacier-fed", "Iconic Fairmont hotel", "Year-round outdoor destination", "Part of Banff National Park"] , es: ["Agua de color turquesa", "Alimentado por glaciares", "Icónico Hotel Fairmont", "Destino al aire libre todo el año", "Parte del Parque Nacional Banff"], pt: ["Água de cor turquesa", "Alimentado por glaciares", "Icónico Hotel Fairmont", "Destino de lazer durante todo o ano", "Parte do Parque Nacional de Banff"], fr: ["Eaux turquoise", "Alimenté par les glaciers", "Hôtel emblématique Fairmont", "Destination de plein air toute l'année", "Fait partie du parc national de Banff"]},
    elevation: 1731, area: 1,
    coords: [-116.1773, 51.4254], type: 'landmark', parent: 'CA', image: "/poi-images/can_louise.webp"},
  {
    id: "can_mackenzie",    name: { de: "Mackenzie River", hu: "Mackenzie-folyó", ro: "Fluviul Mackenzie", en: "Mackenzie River" },
    description: { de: "Longest river system in Canada", hu: "Kanada leghosszabb folyórendszere", ro: "Cel mai lung sistem fluvial din Canada", en: "Longest river system in Canada" , es: "Sistema fluvial más largo de Canadá", pt: "O sistema fluvial mais longo do Canadá", fr: "Le plus long système fluvial du Canada"},
    descriptionAdvanced: {
      de: "Der Mackenzie River ist mit einer Gesamtlänge von 1.738 Kilometern (bzw. 4.241 Kilometern im Gesamtsystem mit dem Peace und Finlay River) der längste Fluss Kanadas und das zweitlängste Flusssystem Nordamerikas. Er entspringt dem Großen Sklavensee in den Northwest Territories und fließt in nordwestlicher Richtung durch eine Landschaft aus borealen Wäldern und Tundra, bis er in einem riesigen Delta in die Beaufortsee mündet. Das Einzugsgebiet umfasst etwa 1,8 Millionen Quadratkilometer, was fast 20 Prozent der Landfläche Kanadas entspricht. Der Fluss spielt eine zentrale Rolle in der Ökologie der Arktis, da er enorme Mengen an Süßwasser und Sedimenten in den Arktischen Ozean transportiert und damit die Meeresströmungen beeinflusst. Historisch war der Mackenzie die wichtigste Verkehrsader für den Pelzhandel und die Erschließung des Nordens durch Entdecker wie Alexander MacKenzie im Jahr 1789. Heute ist er von großer Bedeutung für die indigenen Gemeinschaften der Dene und Inuvialuit sowie für den Transport von Gütern in abgelegene Regionen während der kurzen eisfreien Sommermonate, während er im Winter als wichtige Eisstraße dient.",
      hu: "A Mackenzie-folyó Kanada leghosszabb folyója és Észak-Amerika második legnagyobb vízgyűjtő rendszerének névadója, amely a Northwest Territories területén kanyarog át a vadonon. A folyó a Nagy-Rabszolga-tóból ered és mintegy 1738 kilométer megtétele után egy hatalmas, 12 000 négyzetkilométeres deltán keresztül torkollik a Beaufort-tengerbe. Teljes hossza a Finlay és Peace folyókkal együtt meghaladja a 4241 kilométert, amivel a Mississippi után a kontinens legjelentősebb folyamrendszere. Vízgyűjtő területe gigantikus, 1,8 millió négyzetkilométer, ami Kanada teljes területének közel egyötöde. A folyó kritikus szerepet játszik az északi ökoszisztémában, mivel hatalmas mennyiségű hordalékot és édesvizet juttat az óceánba, befolyásolva a tengeri jégképződést. Történelmileg Alexander MacKenzie skót felfedező nevét viseli, aki 1789-ben első európaiként hajózott végig rajta az óceánig. A folyó mentén fekvő közösségek ma is erősen függnek a vízi úttól, amely télen jégútként is szolgál, nyáron pedig az áruszállítás és a nyersanyag-kitermelés fő útvonala.",
      ro: "Fluviul Mackenzie reprezintă cea mai lungă arteră fluvială din Canada, având o lungime proprie de 1.738 de kilometri și formând un sistem hidrografic complex care atinge 4.241 de kilometri împreună cu afluenții săi principali. Izvorând din Marele Lac al Sclavilor în Teritoriile de Nord-Vest, fluviul curge spre nord-vest până la vărsarea sa în Marea Beaufort printr-o deltă vastă, a doua ca mărime din America de Nord. Bazinul său de recepție acoperă o suprafață impresionantă de 1,8 milioane de kilometri pătrați, reprezentând aproximativ 20% din suprafața totală a Canadei. Mackenzie este esențial pentru echilibrul ecologic al regiunii arctice, transportând volume uriașe de apă dulce care influențează salinitatea și circulația oceanică globală. Istoria sa modernă a început cu expediția lui Alexander MacKenzie din 1789, care căuta o cale spre Pacific, dar a ajuns la Oceanul Arctic. Astăzi, fluviul rămâne o coloană vertebrală pentru transportul în nordul îndepărtat, fiind navigabil aproximativ cinci luni pe an, în timp ce iarna suprafața sa înghețată servește drept drum de gheață vital pentru camioanele care aprovizionează comunitățile izolate.",
      en: "The Mackenzie River is the longest river in Canada and forms the largest drainage basin in the country, encompassing nearly 1.8 million square kilometers. Originating at the Great Slave Lake in the Northwest Territories, it flows north-northwest for 1,738 kilometers until it reaches the Beaufort Sea in the Arctic Ocean. When measured from the headwaters of the Finlay River in British Columbia, the entire Mackenzie-Peace-Finlay system stretches 4,241 kilometers, making it the second-longest river system in North America. The river traverses a landscape dominated by boreal forest and tundra, characterized by permafrost and vast wetlands that support diverse wildlife. Its delta, covering 12,000 square kilometers, is a crucial habitat for migratory birds and beluga whales. Named after Sir Alexander Mackenzie, who charted the river in 1789 while searching for a Northwest Passage, it has historically served as a primary transportation route for the fur trade and today supports the logistics of northern resource extraction. The river remains ice-bound for much of the year, with navigation typically only possible from June to October, making it a seasonal but vital lifeline.",
    },
    factsAdvanced: {
      de: ["Länge: 1.738 km (Hauptfluss), 4.241 km (Gesamtsystem)", "Einzugsgebiet: Rund 1,8 Millionen Quadratkilometer", "Mündung: Beaufortsee im Arktischen Ozean", "Delta: Umfasst eine Fläche von etwa 12.000 km²", "Entdeckung: Alexander MacKenzie befuhr ihn 1789", "Quelle: Großer Sklavensee in den Northwest Territories"],
      hu: ["Teljes hossza 4241 km (rendszer)", "Vízgyűjtő területe 1,8 millió km²", "Alexander Mackenzie felfedezőről nevezték el"],
      ro: ["Lungime: 1.738 km ( Mackenzie propriu-zis)", "Sistem fluvial: 4.241 km (Mackenzie-Peace-Finlay)", "Bazin hidrografic: 1.805.000 km² (20% din Canada)", "Vărsare: Marea Beaufort printr-o deltă uriașă", "Explorare: Prima cartografiere europeană în 1789", "Sursă: Marele Lac al Sclavilor (Great Slave Lake)"],
      en: ["Length: 1,738 km (stem), 4,241 km (total system)", "Drainage Basin: Approx. 1.8 million square kilometers", "Delta Area: Covers about 12,000 square kilometers", "Mouth: Beaufort Sea, part of the Arctic Ocean", "Naming: Named after explorer Alexander Mackenzie (1789)", "Source: Originates from the Great Slave Lake"],
    },
    facts: { de: ["Längster Fluss Kanadas", "Mündet in die Beaufortsee", "Wichtige Transportroute im Norden", "Großes Delta", "Teilweise 8 Monate gefroren"], hu: ["Kanada leghosszabb folyója", "A Beaufort-tengerbe torkollik", "Fontos északi szállítási útvonal", "Hatalmas deltavidék", "Évente kb. 8 hónapig befagy"], ro: ["Cel mai lung râu din Canada", "Se varsă în Marea Beaufort", "Rută de transport vitală în Nord", "Deltă uriașă", "Înghețat aproximativ 8 luni pe an"], en: ["Longest river in Canada", "Empties into the Beaufort Sea", "Major northern transportation route", "Vast river delta", "Frozen for about 8 months a year"] , es: ["Río más largo de Canadá", "Desemboca en el mar de Beaufort", "Importante ruta de transporte en el norte", "Gran delta", "Congelado parcialmente 8 meses al año"], pt: ["Rio mais longo do Canadá", "Desagua no Mar de Beaufort", "Importante rota de transporte no norte", "Grande delta", "Parcialmente congelado durante 8 meses"], fr: ["Plus long fleuve du Canada", "Se jette dans la mer de Beaufort", "Route de transport importante dans le Nord", "Vaste delta", "Gelé partiellement 8 mois par an"]},
    length: 4241,
    coords: [-134.1953, 69.2683], type: 'landmark', parent: 'CA', image: "/poi-images/can_mackenzie.webp"},
  {
    id: "can_stlawrence",    name: { de: "Sankt-Lorenz-Strom", hu: "Szent Lőrinc-folyó", ro: "Fluviul Sfântul Laurențiu", en: "St. Lawrence River" },
    description: { de: "Major river connecting Great Lakes to Atlantic", hu: "A Nagy-tavakat az Atlanti-óceánnal összekötő nagy folyó", ro: "Fluviu major care leagă Marile Lacuri de Atlantic", en: "Major river connecting Great Lakes to Atlantic" , es: "Río principal que conecta los Grandes Lagos con el Atlántico", pt: "Principal rio que liga os Grandes Lagos ao Atlântico", fr: "Fleuve majeur reliant les Grands Lacs à l'Atlantique"},
    descriptionAdvanced: {
      de: "Der Sankt-Lorenz-Strom ist eine der bedeutendsten Wasserstraßen Nordamerikas und bildet den natürlichen Abfluss der Großen Seen in den Atlantik. Mit einer Länge von etwa 1.197 Kilometern verbindet er das Herz des Kontinents mit dem offenen Ozean und war historisch gesehen die Hauptroute für die europäische Erkundung und Besiedlung Kanadas durch Jacques Cartier im Jahr 1535. Geographisch beginnt der Fluss am Ontariosee und fließt in nordöstlicher Richtung durch die Thousand Islands, eine malerische Region mit über 1.800 kleinen Inseln. Ein entscheidender Wendepunkt in seiner Nutzung war die Eröffnung des Sankt-Lorenz-Seewegs im Jahr 1954, ein monumentales Ingenieurprojekt aus Schleusen und Kanälen, das es Hochseeschiffen ermöglicht, bis tief in das Landesinnere zu den Häfen von Toronto und Chicago zu gelangen. Das Ökosystem des Flusses ist äußerst vielfältig; an der Mündung des Saguenay-Flusses bei Tadoussac mischt sich kaltes, salzhaltiges Meerwasser mit dem Süßwasser des Stroms, was ideale Bedingungen für Wale schafft, darunter Belugas, Finnwale und Blauwale. Die wirtschaftliche Bedeutung des Flusses als Transportweg ist immens, stellt aber auch eine ökologische Herausforderung dar, insbesondere im Hinblick auf invasive Arten und Wasserqualität. Kulturell ist der Strom tief in der Identität von Québec verwurzelt, wo Städte wie Montreal und Québec City an seinen Ufern entstanden sind und seinen Rhythmus seit Jahrhunderten prägen.",
      hu: "A Szent Lőrinc-folyó Észak-Amerika egyik legjelentősebb vízi útja, amely a Nagy-tavakat köti össze az Atlanti-óceánnal, és Kanada történelmi, valamint gazdasági gerincét alkotja. A körülbelül 1200 kilométer hosszú folyó az Ontario-tóból ered, és északkeleti irányba folyik, amíg el nem éri a világ legnagyobb tölcsértorkolatát. Jacques Cartier 1535-ös felfedezése óta ez az útvonal szolgált a francia gyarmatosítás és a belső területek feltárásának főcsatornájaként. A folyó felső szakaszán található az Ezernyi Sziget (Thousand Islands) vidéke, amely több mint 1800 kisebb-nagyobb szigetet foglal magában, és népszerű üdülőövezet. 1954-ben kezdődött meg a Szent Lőrinc-víziút kiépítése, egy hatalmas mérnöki vállalkozás, amely zsiliprendszerekkel és csatornákkal tette lehetővé a tengerjáró hajók bejutását a kontinens belsejébe, egészen Chicago kikötőjéig. Az ökológiai szempontból kiemelkedő Tadoussac környékén a sós és édesvíz keveredése olyan tápanyagbőséget teremt, amely a világ egyik legjobb bálnaleső helyévé teszi a folyótorkolatot; itt a veszélyeztetett fehér delfinek (belugák) mellett barázdásbálnák is megfigyelhetők. A folyó ma is kritikus fontosságú a nemzetközi kereskedelem számára, ugyanakkor a környezetvédelmi erőfeszítések középpontjában áll a vízminőség javítása és a part menti élőhelyek rehabilitációja érdekében, különösen a nagy népsűrűségű városi szakaszokon, mint Montreal és Quebec City.",
      ro: "Fluviul Sfântul Laurențiu este una dintre cele mai importante artere fluviale ale Americii de Nord, servind drept emisar principal al Marilor Lacuri către Oceanul Atlantic. Cu o lungime de aproximativ 1.197 de kilometri, acesta leagă inima industrială a continentului de rutele maritime globale și a reprezentat, istoric, calea principală de pătrundere a exploratorilor europeni în Canada, începând cu Jacques Cartier în 1535. Fluviul pornește din Lacul Ontario și curge spre nord-est, trecând prin regiunea Thousand Islands, un arhipelag spectaculos cu peste 1.800 de insule presărate de-a lungul albiei. Un moment definitoriu pentru infrastructura nord-americană a fost finalizarea Canalului Sfântul Laurențiu în 1954, un sistem complex de ecluze și canale care permite navelor oceanice de mare tonaj să navigheze până la porturile din interiorul continentului, precum Toronto sau Chicago. Ecosistemul fluviului este extrem de variat, în special în zona estuarului unde apele sărate ale Atlanticului se întâlnesc cu fluxul de apă dulce, creând condiții ideale pentru mamiferele marine. În zona Tadoussac, unde râul Saguenay se varsă în Sfântul Laurențiu, se pot observa numeroase specii de balene, inclusiv balena albă (beluga). Dincolo de rolul său economic crucial în transportul de mărfuri, fluviul este un simbol cultural profund pentru provincia Québec, orașele Montreal și Québec City fiind martore ale istoriei seculare desfășurate de-a lungul malurilor sale.",
      en: "The St. Lawrence River is one of the most significant waterways in North America, acting as the primary outflow for the Great Lakes into the Atlantic Ocean. Spanning approximately 1,197 kilometers, it connects the industrial heartland of the continent to global maritime trade routes. Historically, the river served as the gateway for French exploration and settlement, with Jacques Cartier navigating its waters as early as 1535. The river begins at the eastern end of Lake Ontario and flows northeast through the scenic Thousand Islands region before widening into the massive Gulf of St. Lawrence. A monumental feat of 20th-century engineering, the St. Lawrence Seaway, opened in 1954, consists of a sophisticated system of locks and canals that allows deep-draft ocean vessels to travel all the way to inland ports like Chicago and Duluth. The river's ecosystem is remarkably diverse; at the confluence of the Saguenay River, the mixing of cold saltwater and nutrient-rich freshwater creates a unique environment that supports a high concentration of marine mammals. This area is a critical habitat for the endangered St. Lawrence beluga whale and a world-renowned location for whale watching. Economically vital for shipping grain, ore, and manufactured goods, the river also faces environmental challenges such as invasive species and pollution management. Culturally, the St. Lawrence remains the soul of the province of Quebec, with its banks hosting historic cities that have relied on the river's resources and navigation for centuries.",
    },
    factsAdvanced: {
      de: ["Länge: ca. 1.197 km", "Einzugsgebiet: 1,3 Mio. km2", "Entdeckung durch Europäer: 1535", "Baujahr des Seewegs: 1954-1959", "Wichtigste Fischarten: 83 Arten", "Flussmündung: Golf von Sankt Lorenz"],
      hu: ["Hossza kb. 1197 km", "A világ legnagyobb tölcsértorkolatát alkotja", "Jacques Cartier fedezte fel 1535-ben"],
      ro: ["Lungime: 1.197 km", "Bazin hidrografic: 1,3 mil. km2", "Descoperire europeană: 1535", "Finalizare canal: 1954", "Specii de pești: 83", "Vărsare: Golful Sfântul Laurențiu"],
      en: ["Length: 1,197 km", "Basin Area: 1.3 million km2", "European Discovery: 1535 (Cartier)", "Seaway Opened: 1954", "Fish Species: 83", "Outflow: Gulf of St. Lawrence"],
    },
    facts: { de: ["Verbindung zum Atlantik", "Wichtiger Seeweg", "Heimat von Belugawalen", "Tausend Inseln (Thousand Islands)", "Grenze zwischen Kanada und USA"], hu: ["Összeköttetés az Atlanti-óceánnal", "Fontos tengeri út", "Belugák élőhelye", "Ezer-sziget vidék", "Határfolyó Kanada és az USA között"], ro: ["Legătură cu Atlanticul", "Cale maritimă importantă", "Habitat pentru balenele beluga", "Regiunea celor O Mie de Insule", "Graniță între Canada și SUA"], en: ["Link to the Atlantic Ocean", "Vital seaway", "Home to beluga whales", "Thousand Islands region", "International border (partial)"] , es: ["Conexión con el Atlántico", "Importante ruta marítima", "Hogar de ballenas beluga", "Las Mil Islas (Thousand Islands)", "Frontera entre Canadá y EE. UU."], pt: ["Ligação ao Atlântico", "Importante rota marítima", "Lar de baleias beluga", "Mil Ilhas (Thousand Islands)", "Fronteira entre o Canadá e os EUA"], fr: ["Connexion à l'Atlantique", "Voie maritime importante", "Habitat des bélugas", "Mille-Îles (Thousand Islands)", "Frontière entre le Canada et les États-Unis"]},
    length: 1197, historyYear: 1535,
    coords: [-69.6455, 48.0652], type: 'landmark', parent: 'CA', image: "/poi-images/can_stlawrence.webp"},
  {
    id: "can_rockies",    name: { de: "Kanadische Rocky Mountains", hu: "Kanadai-Sziklás-hegység", ro: "Munții Stâncoși Canadieni", en: "Canadian Rockies" },
    description: { de: "Mountain range in western Canada", hu: "Hegylánc Nyugat-Kanadában", ro: "Lanț muntos în vestul Canadei", en: "Mountain range in western Canada" , es: "Cordillera en el oeste de Canadá", pt: "Cordilheira no oeste do Canadá", fr: "Chaîne de montagnes dans l'Ouest canadien"},
    descriptionAdvanced: {
      de: "Die Kanadischen Rocky Mountains erstrecken sich über die Provinzen Alberta und British Columbia und bilden das Rückgrat Westkanadas. Sie bestehen aus mehreren massiven Gebirgsketten wie den Continental Ranges und umfassen weltberühmte Nationalparks wie Banff, Jasper, Kootenay und Yoho, die zusammen ein UNESCO-Weltnaturerbe bilden. Diese Region ist bekannt für ihre markanten, schroffen Gipfel, die durch massive Vergletscherung geformt wurden, im Gegensatz zu den deutlich runderen Gipfeln der US-Rockies. Mount Robson ist mit 3.954 Metern der höchste Punkt des Gebirges. Die Geologie wird durch uralte Sedimentgesteine wie Schiefer und Kalkstein geprägt, die reich an Fossilien sind, insbesondere im Burgess-Schiefer, der Einblicke in das Leben vor 500 Millionen Jahren bietet. Ökonomisch und ökologisch sind sie als Wasserscheide Nordamerikas von immenser Bedeutung, da sie die Quellen für Flüsse bilden, die in den Pazifik, den Arktischen Ozean und die Hudson Bay fließen. Die Tierwelt ist ebenso beeindruckend und umfasst Grizzlybären, Elche und Bergziegen in ihren natürlichen Lebensräumen.",
      hu: "A Kanadai-Sziklás-hegység Észak-Amerika egyik legimpozánsabb hegyvonulata, amely Alberta és Brit Kolumbia tartományok határán húzódik több mint 1400 kilométer hosszan. Geológiailag jelentősen különbözik az amerikai szakasztól, mivel főként üledékes kőzetekből, például mészkőből és palából áll, amelyeket a jégkorszaki gleccserek éles, piramis alakú csúcsokká és mély völgyekké formáltak. Itt található a világ egyik legfontosabb kövületlelőhelye, a Burgess-pala, amely a kambriumi robbanás különleges élővilágát őrizte meg az utókornak. A hegységben öt nemzeti park osztozik, melyek együttesen az UNESCO Világörökség részét képezik. Legmagasabb pontja a 3954 méter magas Mount Robson, amely méltóságteljesen magasodik a környező csúcsok fölé. A régió kulcsfontosságú vízválasztó: innen ered a Saskatchewan, az Athabasca és a Columbia folyó is, táplálva az ország vízkészleteit. Az élővilág rendkívül gazdag, grizzly medvék, vapitik és hegyi kecskék természetes élőhelye ez a hatalmas vadon, amely a 19. századi vasútépítés óta Kanada nemzeti identitásának szerves része.",
      ro: "Munții Stâncoși Canadieni reprezintă segmentul nordic al marelui lanț muntos nord-american, întinzându-se între provinciile Alberta și Columbia Britanică pe o distanță de aproximativ 1450 de kilometri. Spre deosebire de sectoarele sudice din Statele Unite, acești munți sunt caracterizați prin vârfuri mult mai ascuțite și văi adânci sculptate de ghețari, oferind un peisaj dramatic și sălbatic de o frumusețe rară. Cel mai înalt vârf este Mount Robson, atingând o altitudine de 3.954 de metri. Regiunea găzduiește parcuri naționale celebre precum Banff, Jasper, Yoho și Kootenay, fiind inclusă în patrimoniul mondial UNESCO pentru valoarea sa geologică și ecologică excepțională. Compoziția lor este predominant sedimentară, cu straturi groase de calcar și șisturi care conțin fosile marine extrem de vechi, mărturii ale unor oceane dispărute. Din punct de vedere hidrografic, Munții Stâncoși acționează ca un rezervor vital de apă dulce, alimentând bazinele hidrografice care se varsă în trei oceane diferite. Istoria explorării lor este strâns legată de expansiunea căii ferate Canadian Pacific Railway în secolul al XIX-lea, care a deschis drumul pentru turismul montan internațional.",
      en: "The Canadian Rockies comprise the easternmost part of the Canadian Cordillera, stretching approximately 1,450 kilometers from the United States border in the south to the Liard River in the north. Unlike their counterparts in the American Rockies, which are largely composed of metamorphic and igneous rocks, the Canadian section consists primarily of sedimentary rocks like limestone and shale. These layers were pushed eastward and upward during the Laramide orogeny between 80 and 55 million years ago. The distinctive jagged silhouettes of the peaks are the result of intense glaciation, which has left behind hanging valleys, cirques, and U-shaped troughs. Mount Robson stands as the highest peak in the range at 3,954 meters. The region is home to five national parks—Banff, Jasper, Kootenay, Yoho, and Waterton Lakes—forming one of the world's most extensive protected mountain environments. A critical hydrological divide, the range feeds major river systems including the Fraser, Columbia, and Mackenzie, while the Burgess Shale within its borders provides a rare window into the evolution of complex life from the Cambrian Period. The mountains remain a symbol of Canada's vast wilderness and its commitment to conservation.",
    },
    factsAdvanced: {
      de: ["Höchster Punkt: Mount Robson mit 3.954 Metern", "Länge: Ungefähr 1.450 Kilometer Nord-Süd-Ausdehnung", "Schutzstatus: Seit 1984 Teil des UNESCO-Weltnaturerbes", "Parks: Umfasst 5 Nationalparks und mehrere Provinzparks", "Alter: Geologische Formation begann vor etwa 80 Millionen Jahren", "Geologie: Besteht überwiegend aus geschichtetem Sedimentgestein"],
      hu: ["Legmagasabb pontja a Mount Robson (3954 m)", "Főként üledékes kőzetekből áll", "A kontinens vízválasztóját alkotják"],
      ro: ["Altitudine maximă: 3.954 metri pe vârful Mount Robson", "Lungime totală: Aproximativ 1.450 km între granița SUA și râul Liard", "Patrimoniu UNESCO: Inclus în listă începând cu anul 1984", "Compoziție: Predominant roci sedimentare precum calcarul", "Parcuri: Găzduiește 5 parcuri naționale de importanță globală", "Istoric: Formarea a început în timpul orogenezei Laramide"],
      en: ["Highest peak: Mount Robson at an elevation of 3,954 meters", "Total length: Approximately 1,450 kilometers (900 miles)", "UNESCO Status: Inscribed as a World Heritage site in 1984", "Drainage: Feeds river systems flowing to three different oceans", "Geological age: Formed between 80 and 55 million years ago", "Rock type: Primarily composed of sedimentary limestone and shale"],
    },
    facts: { de: ["UNESCO Weltnaturerbe", "Schroffe Gipfel", "Zahlreiche Nationalparks", "Beliebtes Skigebiet", "Reiche Tierwelt (Bären, Elche)"], hu: ["UNESCO Világörökség", "Meredek hegycsúcsok", "Számos nemzeti park", "Népszerű síparadicsom", "Gazdag állatvilág (medvék, jávorszarvasok)"], ro: ["Patrimoniu Mondial UNESCO", "Vârfuri abrupte", "Numeroase parcuri naționale", "Zonă de schi populară", "Faună bogată (urși, elani)"], en: ["UNESCO World Heritage Site", "Jagged mountain peaks", "Multiple national parks", "Premier skiing destination", "Abundant wildlife (bears, moose)"] , es: ["Patrimonio de la Humanidad de la UNESCO", "Picos escarpados", "Numerosos parques nacionales", "Popular zona de esquí", "Rica fauna (osos, alces)"], pt: ["Património Mundial da UNESCO", "Picos escarpados", "Numerosos parques nacionais", "Popular área de esqui", "Rica vida selvagem (ursos, alces)"], fr: ["Patrimoine mondial de l'UNESCO", "Sommets escarpés", "Nombreux parcs nationaux", "Domaine skiable prisé", "Faune riche (ours, élans)"]},
    elevation: 3954, length: 1450,
    coords: [-118.0, 53.0], type: 'landmark', parent: 'CA', image: "/poi-images/can_rockies.webp"},
  {
    id: "can_grosmorne",    name: { de: "Gros-Morne-Nationalpark", hu: "Gros Morne Nemzeti Park", ro: "Parcul Național Gros Morne", en: "Gros Morne" },
    description: { de: "National park in Newfoundland", hu: "Nemzeti park Új-Fundlandon", ro: "Parc național în Newfoundland", en: "National park in Newfoundland" , es: "Parque nacional en Terranova.", pt: "Parque nacional na Terra Nova.", fr: "Parc national à Terre-Neuve."},
    descriptionAdvanced: {
      de: "Der Gros-Morne-Nationalpark an der Westküste von Neufundland ist ein geologisches Weltwunder und seit 1987 UNESCO-Weltnaturerbe. Er bietet eine seltene Gelegenheit, den Prozess der Plattentektonik direkt zu beobachten, insbesondere in den Tablelands, wo das Gestein des Erdmantels durch tektonische Kräfte an die Oberfläche gedrückt wurde. Dieses orangefarbene, schwermetallhaltige Gestein verhindert fast jegliches Pflanzenwachstum und erzeugt eine karge, marsähnliche Landschaft. Der Park ist nach dem zweithöchsten Berg der Insel benannt, dem Gros Morne, was auf Französisch 'großer Berg, der allein steht' bedeutet. Ein weiteres Highlight ist der Western Brook Pond, ein Binnfjord, der nach der letzten Eiszeit vom Meer abgeschnitten wurde und heute ultrareines Süßwasser enthält, umgeben von spektakulären 600 Meter hohen Granitklippen. Geologisch dokumentiert der Park das Schließen des Iapetus-Ozeans und die Entstehung der Appalachen vor hunderten Millionen Jahren. Die Flora und Fauna sind ebenso bemerkenswert, mit Elchen, Schneehühnern und seltenen arktisch-alpinen Pflanzen, die auf den exponierten Hochplateaus der Long Range Mountains überleben.",
      hu: "A Gros Morne Nemzeti Park Új-Fundland nyugati partvidékén fekszik, és a világ egyik legjelentősebb geológiai bemutatóhelye, amely 1987 óta az UNESCO Világörökség része. A park hírnevét a lemeztektonikai folyamatok látható bizonyítékainak köszönheti, különösen a Tablelands területén, ahol a földköpeny peridotit kőzete a felszínre bukkan. Ez a narancssárgás, növényzet nélküli táj olyan, mintha egy másik bolygón járnánk, mivel a kőzet kémiai összetétele mérgező a legtöbb növény számára. A park névadója, a Gros Morne-hegy a Long Range-hegység része, amely valójában az Appalache-hegység északi nyúlványa. Lenyűgöző látványt nyújt a Western Brook Pond, egy hatalmas, édesvizű fjord, amelyet 600 méter magas, függőleges gránitfalak vesznek körül, és amely a jégkorszaki gleccserek visszahúzódása után alakult ki. A vidék ökológiailag is sokszínű: a tengerparti lápoktól az alpesi tundráig minden megtalálható itt, miközben a környék halászfalvai megőrizték a sziget hagyományos kulturális örökségét és vendégszeretetét.",
      ro: "Parcul Național Gros Morne, situat pe coasta de vest a insulei Newfoundland, reprezintă un sit de o importanță geologică excepțională, fiind inclus în patrimoniul mondial UNESCO în 1987. Acest teritoriu oferă o perspectivă rară asupra dinamicii scoarței terestre, fiind unul dintre puținele locuri din lume unde rocile din mantaua pământului sunt vizibile la suprafață în zona numită Tablelands. Peisajul arid și portocaliu al acestora contrastează puternic cu fiordurile adânci și pădurile luxuriante din restul parcului. Numele său provine de la muntele Gros Morne, care în franceză înseamnă 'marele munte singuratic', un vârf de 806 metri ce face parte din lanțul Long Range. Western Brook Pond este o altă atracție majoră, un fost fiord marin devenit lac cu apă dulce de o puritate extremă, încadrat de stânci granitice spectaculoase cu o înălțime de peste 600 de metri. Importanța parcului rezidă în documentarea coliziunii continentelor și a formării munților Apalași în urmă cu sute de milioane de ani. Pe lângă geologie, parcul adăpostește o faună variată, inclusiv elani, urși negri și caribu, fiind un laborator natural fascinant pentru botaniști și geologi.",
      en: "Gros Morne National Park, located on the western coast of Newfoundland, is a world-renowned geological site and a UNESCO World Heritage site since 1987. It provides a rare illustration of the process of plate tectonics, most notably in the Tablelands area, where a portion of the Earth's mantle was thrust to the surface during a continental collision millions of years ago. This barren, ochre-colored peridotite plateau lacks the nutrients necessary for typical plant life, creating a lunar-like landscape that stands in stark contrast to the surrounding greenery. The park is named after the Gros Morne mountain, which rises 806 meters as part of the Long Range Mountains, an ancient northern outlier of the Appalachians. Another iconic feature is Western Brook Pond, a freshwater fjord carved by glaciers during the last Ice Age, surrounded by sheer granite cliffs reaching heights of 600 meters. The park's diverse ecosystems range from coastal bogs and forests to alpine tundra, providing habitat for moose, caribou, and arctic hares. Its significance lies not only in its breathtaking scenery but also in its role as a key piece of the geological puzzle that explains the formation of our planet's crust.",
    },
    factsAdvanced: {
      de: ["Fläche: 1.805 Quadratkilometer", "Gegründet: 1973 als Nationalpark", "UNESCO-Status: Weltnaturerbe seit 1987", "Höchster Punkt: Gros Morne Berg (806 m)", "Besonderheit: Sichtbares Erdmantelgestein (Tablelands)", "Fjord: Western Brook Pond ist 16 km lang"],
      hu: ["1973-ban alapították", "Területe 1805 km²", "Atlanti-Kanada második legnagyobb nemzeti parkja"],
      ro: ["Suprafață: 1.805 kilometri pătrați", "Anul înființării: Statut de parc național din 1973", "UNESCO: Inclus în patrimoniul mondial din 1987", "Vârf maxim: Muntele Gros Morne (806 metri)", "Geologie: Expunere rară a mantalei terestre", "Atracție: Western Brook Pond (lac de tip fiord)"],
      en: ["Area: 1,805 square kilometers (697 sq miles)", "Established: Officially became a National Park in 1973", "UNESCO: Designated a World Heritage site in 1987", "Highest elevation: Gros Morne Mountain at 806 meters", "Western Brook Pond: Freshwater fjord with 600m cliffs", "Geology: One of the few places with visible Earth mantle"],
    },
    facts: { de: ["UNESCO Weltnaturerbe", "Spektakuläre Fjorde", "Geologisches Wunder (Tablelands)", "Wanderparadies", "Küstenschönheit"], hu: ["UNESCO Világörökség", "Látványos fjordok", "Geológiai csoda (Tablelands)", "Túrázók paradicsoma", "Partmenti szépség"], ro: ["Patrimoniu Mondial UNESCO", "Fiorduri spectaculoase", "Minune geologică (Tablelands)", "Paradisul drumeților", "Frumusețe costieră"], en: ["UNESCO World Heritage Site", "Spectacular fjords", "Geological wonder (Tablelands)", "Hiking paradise", "Coastal beauty"] , es: ["Patrimonio de la UNESCO", "Fiordos espectaculares", "Maravilla geológica (Tablelands)", "Paraíso del senderismo", "Belleza costera"], pt: ["Património da UNESCO", "Fiordes espetaculares", "Maravilha geológica (Tablelands)", "Paraíso das caminhadas", "Beleza costeira"], fr: ["Patrimoine de l'UNESCO", "Fjords spectaculaires", "Merveille géologique (Tablelands)", "Paradis de la randonnée", "Beauté côtière"]},
    area: 1805, historyYear: 1973,
    coords: [-57.755, 49.6105], type: 'landmark', parent: 'CA', image: "/poi-images/can_grosmorne.webp"},
  {
    id: "can_logan",    name: { de: "Mount Logan", hu: "Mount Logan", ro: "Muntele Logan", en: "Mount Logan" },
    description: { de: "Highest peak in Canada", hu: "Kanada legmagasabb csúcsa", ro: "Cel mai înalt vârf din Canada", en: "Highest peak in Canada" , es: "El pico más alto de Canadá", pt: "O pico mais alto do Canadá", fr: "Le plus haut sommet du Canada"},
    descriptionAdvanced: {
      de: "Der Mount Logan ist mit 5.959 Metern der höchste Berg Kanadas und der zweithöchste Gipfel Nordamerikas, gelegen im Kluane-Nationalpark im Südwesten des Yukon-Territoriums. Er gehört zur Saint-Elias-Kette, einem Gebirge, das durch die Kollision der pazifischen und der nordamerikanischen Platte entstanden ist und heute die weltweit größten Eisfelder außerhalb der Polargebiete beherbergt. Eine Besonderheit des Mount Logan ist sein massiver Sockelumfang, der als der größte aller nicht-vulkanischen Berge der Erde gilt; das Bergmassiv stützt insgesamt elf Gipfel, die über 5.000 Meter hoch sind. Geologisch gesehen befindet sich der Mount Logan in einem Zustand ständigen Wachstums, da die tektonische Hebung schneller erfolgt als die Erosion, was zu einem jährlichen Höhenzuwachs von etwa 19 Millimetern führt. Die Erstbesteigung gelang 1925 einer internationalen Expedition unter der Leitung von Albert H. MacCarthy nach einer beschwerlichen 65-tägigen Reise durch die Wildnis. Die klimatischen Bedingungen am Gipfel sind extrem; Temperaturen fallen regelmäßig unter minus 45 Grad Celsius, und Orkanwinde sind keine Seltenheit. Aufgrund seiner isolierten Lage und der gewaltigen Distanzen ist der Mount Logan ein Ziel für hochspezialisierte Alpinisten, die oft per Kleinflugzeug auf den Gletschern abgesetzt werden müssen. Der Berg dient zudem als wichtiges Archiv für die Klimaforschung, da Eisbohrkerne aus seinen Gletschern atmosphärische Daten liefern, die Jahrtausende zurückreichen.",
      hu: "A Mount Logan Kanada legmagasabb hegycsúcsa és Észak-Amerika második legmagasabb pontja, amely 5959 méterrel magasodik a tengerszint fölé a Yukon terület délnyugati részén. A hegy a Kluane Nemzeti Park szívében fekszik, és a Szent Illés-hegység része, amely a világ egyik legnagyobb nem-poláris jégmezejének ad otthont. A Mount Logan különlegessége a rendkívül nagy alapkerülete; úgy tartják, hogy ez a világ legnagyobb tömegű nem vulkanikus hegye, amelynek fennsíkszerű gerincén tizenegy olyan csúcs található, amely meghaladja az 5000 méteres magasságot. Geológiailag a hegy ma is aktívan emelkedik a csendes-óceáni és az észak-amerikai lemezek ütközése következtében; az emelkedés mértéke évente körülbelül 19 milliméter, ami gyorsabb, mint az erózió koptató hatása. Az első sikeres megmászásra 1925-ben került sor egy nemzetközi expedíció keretében, amelyet Albert H. MacCarthy vezetett, és több mint két hónapig tartott az érintetlen vadonon keresztül. A csúcson uralkodó időjárási körülmények szélsőségesek: a hőmérséklet gyakran -45 Celsius-fok alá süllyed, és a szélsebesség rendszeresen eléri a hurrikán erejét. A hegy elszigeteltsége miatt a kutatók számára is fontos helyszín, ahol a jégfuratok segítségével több ezer évre visszamenőleg tudják vizsgálni a Föld légkörének összetételét és a klímaváltozás folyamatait.",
      ro: "Mount Logan, cel mai înalt vârf din Canada și al doilea ca înălțime din America de Nord, se ridică la 5.959 de metri în inima Parcului Național Kluane din sud-vestul Yukonului. Acesta face parte din Munții Saint Elias, un lanț muntos caracterizat prin ghețari uriași și câmpuri de gheață care reprezintă cea mai mare acumulare de gheață din afara zonelor polare. O caracteristică unică a muntelui Logan este baza sa masivă, considerată a fi cea mai mare circumferință a unui munte non-vulanic de pe Pământ, susținând un platou lung de 20 de kilometri pe care se află unsprezece vârfuri ce depășesc 5.000 de metri. Din punct de vedere geologic, muntele se află într-un proces continuu de înălțare datorită activității tectonice intense rezultate din coliziunea plăcilor Pacifică și Nord-Americană, crescând cu aproximativ 19 milimetri pe an. Prima ascensiune reușită a avut loc în 1925, fiind realizată de o expediție internațională condusă de Albert H. MacCarthy, după o călătorie de peste două luni prin sălbăticia arctică. Condițiile climatice de pe vârf sunt brutale, cu temperaturi care scad frecvent sub -45 de grade Celsius și vânturi cu forță de uragan care pot persista zile întregi. Datorită izolării sale extreme, muntele rămâne o provocare majoră pentru alpiniști și un laborator natural vital pentru cercetările climatice, probele de gheață extrase de aici oferind date prețioase despre istoria atmosferei terestre pe parcursul mileniilor.",
      en: "Mount Logan, the highest peak in Canada and the second-highest in North America, is located within Kluane National Park and Reserve in southwestern Yukon. Rising to an elevation of 5,959 meters, it is part of the Saint Elias Mountains, which contain some of the most extensive non-polar icefields in the world. The mountain is unique for its massive base circumference, believed to be the largest of any non-volcanic mountain on Earth, supporting a high-altitude plateau that features eleven peaks over 5,000 meters. Geologically, Logan is characterized by rapid tectonic uplift; it continues to grow taller due to the ongoing collision of the Pacific and North American plates, with the uplift rate estimated at about 19 millimeters per year, outpacing natural erosion. The first successful ascent was made in 1925 by an international expedition led by Albert H. MacCarthy, following an arduous 65-day trek from the nearest settlement. The summit experiences extreme arctic weather conditions, with temperatures frequently dropping below minus 45 degrees Celsius and hurricane-force winds being a common occurrence. Its isolation and sheer scale make it a formidable challenge for mountaineers, who usually rely on ski-planes for access to the base camps on the glaciers. The mountain also plays a vital role in global climate research, as ice core samples collected from its glaciers provide atmospheric data dating back thousands of years.",
    },
    factsAdvanced: {
      de: ["Höhe: 5.959 m", "Erstbesteigung: 23. Juni 1925", "Gebirge: Saint-Elias-Berge", "Lage: Yukon-Territorium", "Zuwachs: ca. 19 mm pro Jahr", "Temperaturen am Gipfel: bis -45°C im Durchschnitt"],
      hu: ["Magassága 5959 m", "Sir William Edmond Loganról nevezték el", "A tektonikus emelkedés miatt ma is növekszik"],
      ro: ["Înălțime: 5.959 m", "Prima ascensiune: 23 iunie 1925", "Munți: Saint Elias", "Teritoriu: Yukon", "Rata de înălțare: 19 mm/an", "Temperatură minimă: -45°C (medie pe vârf)"],
      en: ["Elevation: 5,959 m", "First Ascent: June 23, 1925", "Range: Saint Elias Mountains", "Location: Yukon Territory", "Uplift Rate: ~19 mm per year", "Summit Temp: Freq. below -45°C"],
    },
    facts: { de: ["Höchster Berg Kanadas", "Im Kluane-Nationalpark", "Gewaltiges Eisfeld", "Extrem kaltes Klima", "Zweithöchster in Nordamerika"], hu: ["Kanada legmagasabb hegye", "A Kluane Nemzeti Parkban található", "Hatalmas jégmező", "Szélsőségesen hideg éghajlat", "Észak-Amerika 2. legmagasabb csúcsa"], ro: ["Cel mai înalt munte din Canada", "În Parcul Național Kluane", "Câmp de gheață masiv", "Climă extrem de rece", "Al doilea ca înălțime din America de Nord"], en: ["Highest peak in Canada", "Located in Kluane National Park", "Massive icefield", "Extremely cold climate", "Second highest in North America"] , es: ["Montaña más alta de Canadá", "En el Parque Nacional Kluane", "Enorme campo de hielo", "Clima extremadamente frío", "Segundo más alto de Norteamérica"], pt: ["Montanha mais alta do Canadá", "No Parque Nacional Kluane", "Enorme campo de gelo", "Clima extremamente frio", "Segundo mais alto da América do Norte"], fr: ["Plus haute montagne du Canada", "Dans le parc national de Kluane", "Immense champ de glace", "Climat extrêmement froid", "Deuxième plus haut d'Amérique du Nord"]},
    elevation: 5959,
    coords: [-140.4055, 60.5671], type: 'landmark', parent: 'CA', image: "/poi-images/can_logan.webp"},
  {
    id: "ca-rideau-canal", "sights": {
      "de": [
            {
                  "name": "Art + Galerie",
                  "text": "Art + Galerie ist eine Kunstgalerie in Ottawa.",
                  "category": "museum",
                  "coords": [
                        -75.694271,
                        45.426795
                  ]
            },
            {
                  "name": "Ottawa Locks",
                  "text": "Die Ottawa Locks sind ein Aussichtspunkt mit Blick auf die Ottawa-Schleusen am Rideau Canal.",
                  "category": "natural",
                  "coords": [
                        -75.695205,
                        45.424833
                  ]
            },
            {
                  "name": "The Haunted Walk of Ottawa",
                  "text": "The Haunted Walk of Ottawa ist ein geführter Rundgang, der Ottawas Spukgeschichte erkundet.",
                  "category": "landmark",
                  "coords": [
                        -75.695896,
                        45.423377
                  ]
            },
            {
                  "name": "Ottawa Art Gallery",
                  "text": "Die Ottawa Art Gallery ist eine öffentliche Kunstgalerie in Ottawa, die zeitgenössische und historische Kunst zeigt.",
                  "category": "museum",
                  "coords": [
                        -75.688144,
                        45.425454
                  ]
            },
            {
                  "name": "Parlamentshügel",
                  "text": "Der Parliament Hill ist ein ikonischer Komplex gotischer Gebäude in Ottawa, Sitz des kanadischen Parlaments.",
                  "category": "landmark",
                  "coords": [
                        -75.699027,
                        45.424118
                  ]
            },
            {
                  "name": "Église Unie St-Marc",
                  "text": "Die Église Unie St-Marc ist eine United Church in Ottawa mit einem historischen Gebäude.",
                  "category": "religious",
                  "coords": [
                        -75.686126,
                        45.426623
                  ]
            },
            {
                  "name": "Rideau Canal",
                  "text": "Der Rideau-Kanal ist eine malerische Wasserstraße in Ottawa.",
                  "category": "landmark",
                  "coords": [
                        -75.697003,
                        45.425793
                  ]
            },
            {
                  "name": "St. Joseph's",
                  "text": "St. Joseph's ist eine Kirche im Bereich des Rideau-Kanals in Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.684865,
                        45.425185
                  ]
            },
            {
                  "name": "St. Alban's Anglican Church (Ottawa)",
                  "text": "St. Alban's Anglican Church ist eine historische anglikanische Kirche in Ottawa in der Nähe des Rideau-Kanals.",
                  "category": "religious",
                  "coords": [
                        -75.685182,
                        45.427495
                  ]
            },
            {
                  "name": "St. Paul Lutheran",
                  "text": "St. Paul Lutheran ist eine lutherische Kirche im Rideau-Kanal-Gebiet Ottawas.",
                  "category": "religious",
                  "coords": [
                        -75.683757,
                        45.425945
                  ]
            },
            {
                  "name": "Laurier House",
                  "text": "Das Laurier House war die Residenz von zwei kanadischen Premierministern.",
                  "category": "landmark",
                  "coords": [
                        -75.677967,
                        45.427741
                  ]
            },
            {
                  "name": "Strathcona Park",
                  "text": "Der Strathcona Park ist ein Park entlang des Rideau-Kanals in Ottawa.",
                  "category": "park",
                  "coords": [
                        -75.671867,
                        45.4269
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Art + Galerie",
                  "text": "Az Art + Galerie egy művészeti galéria Ottawában.",
                  "category": "museum",
                  "coords": [
                        -75.694271,
                        45.426795
                  ]
            },
            {
                  "name": "Ottawa Locks",
                  "text": "Az Ottawa Locks egy kilátópont, ahonnan az Ottawa zsilipek láthatók a Rideau-csatornán.",
                  "category": "natural",
                  "coords": [
                        -75.695205,
                        45.424833
                  ]
            },
            {
                  "name": "The Haunted Walk of Ottawa",
                  "text": "A The Haunted Walk of Ottawa egy vezetett séta, amely Ottawa kísértetjárta történelmét tárja fel.",
                  "category": "landmark",
                  "coords": [
                        -75.695896,
                        45.423377
                  ]
            },
            {
                  "name": "Ottawa Art Gallery",
                  "text": "Az Ottawa Art Gallery egy nyilvános művészeti galéria Ottawában, amely kortárs és történelmi művészetet mutat be.",
                  "category": "museum",
                  "coords": [
                        -75.688144,
                        45.425454
                  ]
            },
            {
                  "name": "Parliament Hill",
                  "text": "A Parliament Hill egy ikonikus gótikus épületegyüttes Ottawában, a kanadai parlament otthona.",
                  "category": "landmark",
                  "coords": [
                        -75.699027,
                        45.424118
                  ]
            },
            {
                  "name": "Église Unie St-Marc",
                  "text": "Az Église Unie St-Marc egy egyesült templom Ottawában, történelmi épülettel.",
                  "category": "religious",
                  "coords": [
                        -75.686126,
                        45.426623
                  ]
            },
            {
                  "name": "Rideau Canal",
                  "text": "A Rideau-csatorna egy festői vízi út Ottawában.",
                  "category": "landmark",
                  "coords": [
                        -75.697003,
                        45.425793
                  ]
            },
            {
                  "name": "St. Joseph's",
                  "text": "St. Joseph's egy templom Ottawa Rideau-csatorna környékén.",
                  "category": "religious",
                  "coords": [
                        -75.684865,
                        45.425185
                  ]
            },
            {
                  "name": "St. Alban's Anglican Church (Ottawa)",
                  "text": "St. Alban's Anglican Church egy történelmi anglikán templom Ottawa-ban, a Rideau-csatorna közelében.",
                  "category": "religious",
                  "coords": [
                        -75.685182,
                        45.427495
                  ]
            },
            {
                  "name": "St. Paul Lutheran",
                  "text": "St. Paul Lutheran egy evangélikus templom Ottawa Rideau-csatorna környékén.",
                  "category": "religious",
                  "coords": [
                        -75.683757,
                        45.425945
                  ]
            },
            {
                  "name": "Laurier House",
                  "text": "A Laurier House két kanadai miniszterelnök rezidenciája volt.",
                  "category": "landmark",
                  "coords": [
                        -75.677967,
                        45.427741
                  ]
            },
            {
                  "name": "Strathcona Park",
                  "text": "A Strathcona Park egy park az Ottawa-i Rideau-csatorna mentén.",
                  "category": "park",
                  "coords": [
                        -75.671867,
                        45.4269
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Art + Galerie",
                  "text": "Art + Galerie este o galerie de artă din Ottawa.",
                  "category": "museum",
                  "coords": [
                        -75.694271,
                        45.426795
                  ]
            },
            {
                  "name": "Ottawa Locks",
                  "text": "Ottawa Locks este un punct de belvedere cu vedere asupra ecluzelor Ottawa de pe Canalul Rideau.",
                  "category": "natural",
                  "coords": [
                        -75.695205,
                        45.424833
                  ]
            },
            {
                  "name": "The Haunted Walk of Ottawa",
                  "text": "The Haunted Walk of Ottawa este un tur ghidat care explorează istoria bântuită a Ottawa-ului.",
                  "category": "landmark",
                  "coords": [
                        -75.695896,
                        45.423377
                  ]
            },
            {
                  "name": "Ottawa Art Gallery",
                  "text": "Ottawa Art Gallery este o galerie de artă publică din Ottawa care prezintă artă contemporană și istorică.",
                  "category": "museum",
                  "coords": [
                        -75.688144,
                        45.425454
                  ]
            },
            {
                  "name": "Parliament Hill",
                  "text": "Parliament Hill este un complex iconic de clădiri gotice din Ottawa, sediul Parlamentului Canadei.",
                  "category": "landmark",
                  "coords": [
                        -75.699027,
                        45.424118
                  ]
            },
            {
                  "name": "Église Unie St-Marc",
                  "text": "Église Unie St-Marc este o biserică unită din Ottawa, cu o clădire istorică.",
                  "category": "religious",
                  "coords": [
                        -75.686126,
                        45.426623
                  ]
            },
            {
                  "name": "Rideau Canal",
                  "text": "Canalul Rideau este o cale navigabilă pitorească în Ottawa.",
                  "category": "landmark",
                  "coords": [
                        -75.697003,
                        45.425793
                  ]
            },
            {
                  "name": "St. Joseph's",
                  "text": "St. Joseph's este o biserică în zona Canalului Rideau din Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.684865,
                        45.425185
                  ]
            },
            {
                  "name": "St. Alban's Anglican Church (Ottawa)",
                  "text": "Biserica Anglicană St. Alban este o biserică anglicană istorică în Ottawa, lângă Canalul Rideau.",
                  "category": "religious",
                  "coords": [
                        -75.685182,
                        45.427495
                  ]
            },
            {
                  "name": "St. Paul Lutheran",
                  "text": "St. Paul Lutheran este o biserică luterană în zona Canalului Rideau din Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.683757,
                        45.425945
                  ]
            },
            {
                  "name": "Laurier House",
                  "text": "Casa Laurier a fost reședința a doi prim-miniștri canadieni.",
                  "category": "landmark",
                  "coords": [
                        -75.677967,
                        45.427741
                  ]
            },
            {
                  "name": "Strathcona Park",
                  "text": "Parcul Strathcona este un parc de-a lungul Canalului Rideau din Ottawa.",
                  "category": "park",
                  "coords": [
                        -75.671867,
                        45.4269
                  ]
            }
      ],
      "en": [
            {
                  "name": "Art + Galerie",
                  "text": "Art + Galerie is an art gallery in Ottawa.",
                  "category": "museum",
                  "coords": [
                        -75.694271,
                        45.426795
                  ]
            },
            {
                  "name": "Ottawa Locks",
                  "text": "Ottawa Locks is a viewpoint overlooking the Ottawa Locks on the Rideau Canal.",
                  "category": "natural",
                  "coords": [
                        -75.695205,
                        45.424833
                  ]
            },
            {
                  "name": "The Haunted Walk of Ottawa",
                  "text": "The Haunted Walk of Ottawa is a guided walking tour exploring Ottawa's haunted history.",
                  "category": "landmark",
                  "coords": [
                        -75.695896,
                        45.423377
                  ]
            },
            {
                  "name": "Ottawa Art Gallery",
                  "text": "Ottawa Art Gallery is a public art gallery in Ottawa showcasing contemporary and historical art.",
                  "category": "museum",
                  "coords": [
                        -75.688144,
                        45.425454
                  ]
            },
            {
                  "name": "Parliament Hill",
                  "text": "Parliament Hill is an iconic complex of Gothic buildings in Ottawa, home to Canada's Parliament.",
                  "category": "landmark",
                  "coords": [
                        -75.699027,
                        45.424118
                  ]
            },
            {
                  "name": "Église Unie St-Marc",
                  "text": "Église Unie St-Marc is a United church in Ottawa with a historic building.",
                  "category": "religious",
                  "coords": [
                        -75.686126,
                        45.426623
                  ]
            },
            {
                  "name": "Rideau Canal",
                  "text": "The Rideau Canal is a scenic waterway in Ottawa.",
                  "category": "landmark",
                  "coords": [
                        -75.697003,
                        45.425793
                  ]
            },
            {
                  "name": "St. Joseph's",
                  "text": "St. Joseph's is a church in Ottawa's Rideau Canal area.",
                  "category": "religious",
                  "coords": [
                        -75.684865,
                        45.425185
                  ]
            },
            {
                  "name": "St. Alban's Anglican Church (Ottawa)",
                  "text": "St. Alban's Anglican Church is a historic Anglican church in Ottawa near the Rideau Canal.",
                  "category": "religious",
                  "coords": [
                        -75.685182,
                        45.427495
                  ]
            },
            {
                  "name": "St. Paul Lutheran",
                  "text": "St. Paul Lutheran is a Lutheran church in Ottawa's Rideau Canal area.",
                  "category": "religious",
                  "coords": [
                        -75.683757,
                        45.425945
                  ]
            },
            {
                  "name": "Laurier House",
                  "text": "Laurier House was the residence of two Canadian prime ministers.",
                  "category": "landmark",
                  "coords": [
                        -75.677967,
                        45.427741
                  ]
            },
            {
                  "name": "Strathcona Park",
                  "text": "Strathcona Park is a park along the Rideau Canal in Ottawa.",
                  "category": "park",
                  "coords": [
                        -75.671867,
                        45.4269
                  ]
            }
      ]
},
    type: "historical",
    parent: "CA",
    coords: [-75.6980, 45.4244],
    name: { de: "Rideau-Kanal", hu: "Rideau-csatorna", ro: "Canalul Rideau", en: "Rideau Canal" },
    description: { de: "Historische Wasserstraße, die Ottawa und Kingston verbindet.", hu: "Ottawát és Kingstont összekötő történelmi vízi út.", ro: "Cale navigabilă istorică ce leagă Ottawa de Kingston.", en: "Historic waterway connecting Ottawa and Kingston." , es: "Vía navegable histórica que conecta Ottawa y Kingston.", pt: "Via navegável histórica que liga Otava e Kingston.", fr: "Voie navigable historique reliant Ottawa et Kingston."},
    descriptionAdvanced: {
      de: "Der Rideau-Kanal ist ein 202 Kilometer langes Wasserstraßensystem, das die kanadische Hauptstadt Ottawa mit Kingston am Ontariosee verbindet. Er wurde zwischen 1826 und 1832 erbaut und gilt als das älteste kontinuierlich betriebene Kanalsystem in Nordamerika. Ursprünglich wurde er aus strategischen Gründen nach dem Krieg von 1812 konzipiert, um eine sichere Versorgungsroute zwischen Montreal und Kingston zu schaffen, die fernab der US-Grenze lag. Die bautechnische Leitung lag bei Oberst John By, der innovative Schleusensysteme und Dämme entwarf, die noch heute größtenteils im Originalzustand funktionieren. Im Jahr 2007 wurde der Kanal aufgrund seiner außergewöhnlichen militär- und technikgeschichtlichen Bedeutung zum UNESCO-Weltkulturerbe erklärt. Während der Sommermonate ist er eine beliebte Route für Freizeitboote, während sich ein Teil des Kanals in Ottawa im Winter in die längste natürliche Eislaufbahn der Welt verwandelt. Der Rideau-Kanal ist somit ein lebendiges Denkmal der kanadischen Ingenieurskunst und nationalen Verteidigungsstrategie.",
      hu: "A Rideau-csatorna egy 202 kilométer hosszú víziút, amely Kanada fővárosát, Ottawát köti össze az Ontario-tó partján fekvő Kingstonnal. Az 1826 és 1832 között épült csatorna Észak-Amerika legrégebbi, folyamatosan üzemelő mesterséges víziútja. Eredetileg stratégiai okokból, az 1812-es háború után tervezték, hogy biztonságos utánpótlási útvonalat hozzanak létre Montreal és Kingston között az amerikai határtól távol. Az építkezést John By ezredes irányította, aki olyan innovatív zsiliprendszereket és gátakat tervezett, amelyek többsége ma is eredeti állapotában működik. 2007-ben az UNESCO Világörökségi helyszínné nyilvánította a csatornát kiemelkedő katonai és mérnöki jelentősége miatt. Nyáron kedvelt útvonal a kedvtelési célú hajózás számára, télen pedig Ottawa belvárosi szakasza a világ leghosszabb természetes korcsolyapályájává alakul. A Rideau-csatorna így a kanadai mérnöki tudás és a nemzeti védelmi stratégia élő emlékműve.",
      ro: "Canalul Rideau este un sistem de căi navigabile de 202 kilometri care leagă capitala Canadei, Ottawa, de orașul Kingston de pe malul lacului Ontario. Construit între 1826 și 1832, este cel mai vechi sistem de canale din America de Nord operat continuu. Inițial, a fost conceput din motive strategice după Războiul din 1812, pentru a crea o rută sigură de aprovizionare între Montreal și Kingston, departe de granița cu Statele Unite. Proiectul a fost coordonat de colonelul John By, care a implementat sisteme inovatoare de ecluze și baraje, majoritatea funcționând și astăzi în starea lor originală. În 2007, canalul a fost declarat sit al Patrimoniului Mondial UNESCO datorită valorii sale istorice militare și tehnice excepționale. În timpul verii, este o rută populară pentru ambarcațiunile de agrement, în timp ce iarna, secțiunea din Ottawa devine cel mai lung patinoar natural din lume. Canalul Rideau reprezintă un monument viu al ingineriei canadiene și al strategiei de apărare națională.",
      en: "The Rideau Canal is a 202-kilometer-long waterway connecting the Canadian capital of Ottawa to Kingston on Lake Ontario. Built between 1826 and 1832, it is the oldest continuously operated canal system in North America. Originally conceived for strategic military purposes following the War of 1812, it was intended to provide a secure supply route between Montreal and Kingston, away from the United States border. The construction was overseen by Colonel John By, who designed innovative lock systems and dams that still function largely in their original state today. In 2007, the canal was designated a UNESCO World Heritage Site due to its exceptional military and engineering significance. During the summer, it is a popular route for pleasure boating, while in winter, a section in Ottawa transforms into the world's longest naturally frozen skating rink. The Rideau Canal stands as a living monument to early Canadian engineering and national defense strategy.",
      es: "El canal Rideau es el sistema de canales operado continuamente más antiguo de América del Norte y es Patrimonio de la Humanidad por la UNESCO. Fue construido originalmente por razones militares para garantizar una ruta de suministro segura entre Montreal y Kingston, y hoy es famoso por su pista de patinaje sobre hielo en invierno.",
      pt: "O Canal Rideau é o sistema de canais em funcionamento contínuo mais antigo da América do Norte e Património Mundial da UNESCO. Foi originalmente construído por razões militares para garantir uma rota de abastecimento segura entre Montreal e Kingston e é hoje famoso pelo seu ringue de patinagem no gelo no inverno.",
      fr: "Le canal Rideau est le plus ancien système de canaux en service continu en Amérique du Nord et un site classé au patrimoine mondial de l'UNESCO. Construit à l'origine pour des raisons militaires afin d'assurer une route d'approvisionnement sûre entre Montréal et Kingston, il est aujourd'hui célèbre pour sa patinoire hivernale.",
    },
    factsAdvanced: {
      de: ["Länge von 202 Kilometern", "Erbaut zwischen 1826 und 1832", "UNESCO-Weltkulturerbe seit 2007", "Ältester betriebener Kanal in N. Amerika", "Verfügt über 45 Schleusen an 23 Stationen", "Größte Eislaufbahn der Welt im Winter"],
      hu: ["202 kilométer hosszú", "1826 és 1832 között épült", "2007 óta UNESCO Világörökség", "Észak-Amerika legrégebbi üzemelő csatornája", "45 zsilip található 23 állomáson", "Télen a világ legnagyobb korcsolyapályája"],
      ro: ["Lungime de 202 kilometri", "Construit între 1826 și 1832", "Patrimoniu UNESCO din 2007", "Cel mai vechi canal funcțional din N. America", "Include 45 de ecluze la 23 de stații", "Cel mai lung patinoar natural iarna"],
      en: ["Length of 202 kilometers", "Built between 1826 and 1832", "UNESCO World Heritage Site since 2007", "Oldest operated canal in N. America", "Contains 45 locks at 23 stations", "World's longest skating rink in winter"],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["UNESCO Weltkulturerbe", "Längste Eislaufbahn der Welt", "Ältester Kanal in NA", "Verbindet Ottawa und Kingston"], hu: ["UNESCO Világörökség", "A világ leghosszabb korcsolyapályája", "Észak-Amerika legrégebbi csatornája", "Ottawát és Kingstont köti össze"], ro: ["Patrimoniu Mondial UNESCO", "Cel mai lung patinoar din lume", "Cel mai vechi canal din NA", "Leagă Ottawa de Kingston"], en: ["UNESCO World Heritage Site", "World's longest skating rink", "Oldest operated canal in NA", "Connects Ottawa to Kingston"] , es: ["Patrimonio de la Humanidad UNESCO", "La pista de patinaje más larga del mundo", "Canal más antiguo de Norteamérica", "Conecta Ottawa y Kingston"], pt: ["Património Mundial da UNESCO", "A pista de patinagem mais longa do mundo", "Canal mais antigo da América do Norte", "Liga Otava e Kingston"], fr: ["Patrimoine mondial de l'UNESCO", "La plus longue patinoire au monde", "Plus ancien canal d'Amérique du Nord", "Relie Ottawa et Kingston"]},
    length: 202, historyYear: 1826, historyPeriod: "Victorian Era", image: "/poi-images/ca-rideau-canal.webp"},
  {
    id: "ca-buffalo-jump", "sights": {
      "de": [
            {
                  "name": "Head-Smashed-In Buffalo Jump",
                  "text": "Ein UNESCO-Weltkulturerbe, das von indigenen Völkern zur Büffeljagd genutzt wurde.",
                  "category": "natural",
                  "coords": [
                        -113.653042,
                        49.707542
                  ]
            },
            {
                  "name": "Head-Smashed-In Buffalo Jump World Heritage Site",
                  "text": "Ein UNESCO-Weltkulturerbe-Naturschutzgebiet.",
                  "category": "natural",
                  "coords": [
                        -113.653693,
                        49.718951
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Head-Smashed-In Buffalo Jump",
                  "text": "Egy UNESCO világörökségi helyszín, amelyet az őslakosok bölényvadászatra használtak.",
                  "category": "natural",
                  "coords": [
                        -113.653042,
                        49.707542
                  ]
            },
            {
                  "name": "Head-Smashed-In Buffalo Jump World Heritage Site",
                  "text": "Egy UNESCO világörökségi természetvédelmi terület.",
                  "category": "natural",
                  "coords": [
                        -113.653693,
                        49.718951
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Head-Smashed-In Buffalo Jump",
                  "text": "Un sit UNESCO utilizat de popoarele indigene pentru vânătoarea de bivoli.",
                  "category": "natural",
                  "coords": [
                        -113.653042,
                        49.707542
                  ]
            },
            {
                  "name": "Head-Smashed-In Buffalo Jump World Heritage Site",
                  "text": "O rezervație naturală din Patrimoniul Mondial UNESCO.",
                  "category": "natural",
                  "coords": [
                        -113.653693,
                        49.718951
                  ]
            }
      ],
      "en": [
            {
                  "name": "Head-Smashed-In Buffalo Jump",
                  "text": "A UNESCO World Heritage Site used by indigenous peoples for buffalo hunting.",
                  "category": "natural",
                  "coords": [
                        -113.653042,
                        49.707542
                  ]
            },
            {
                  "name": "Head-Smashed-In Buffalo Jump World Heritage Site",
                  "text": "A UNESCO World Heritage Site nature reserve.",
                  "category": "natural",
                  "coords": [
                        -113.653693,
                        49.718951
                  ]
            }
      ]
},
    type: "historical",
    parent: "CA",
    coords: [-113.6500, 49.7494],
    name: { de: "Head-Smashed-In Buffalo Jump", hu: "Head-Smashed-In bölényugrató", ro: "Head-Smashed-In Buffalo Jump", en: "Head-Smashed-In Buffalo Jump" },
    description: { de: "Traditionelle Jagdstätte der indigenen Völker.", hu: "Az őslakos népek hagyományos vadászhelye.", ro: "Loc tradițional de vânătoare al popoarelor indigene.", en: "Traditional hunting site of the indigenous peoples." , es: "Lugar de caza tradicional de los pueblos indígenas.", pt: "Local de caça tradicional dos povos indígenas.", fr: "Lieu de chasse traditionnel des peuples autochtones."},
    descriptionAdvanced: {
      de: "Der Head-Smashed-In Buffalo Jump in der Nähe von Fort Macleod, Alberta, ist eine der ältesten und besterhaltenen Stätten für die gemeinschaftliche Bisonjagd durch indigene Völker. Über 5.500 Jahre lang nutzten die Blackfoot-Indianer (Siksikaitsitapi) die natürliche Topographie der Region, um Bisons über die 10 Meter hohen Klippen zu treiben. Diese hochspezialisierte Jagdmethode erforderte ein tiefes Verständnis des Tierverhaltens und eine präzise Koordination durch ein System von künstlich angelegten Treibwegen. Die Stätte umfasst das Jagdgebiet, die Klippen sowie die Lager- und Verarbeitungsplätze im Tal, wo die Tiere zerlegt wurden. Aufgrund seiner herausragenden Bedeutung für die menschliche Geschichte und die Kultur der Plains-Indigenen wurde der Ort 1981 zum UNESCO-Weltkulturerbe erklärt. Das archäologische Depot unterhalb der Klippe ist über 10 Meter tief und enthält Schichten von Knochen und Steinwerkzeugen. Heute beherbergt die Stätte ein preisgekröntes Interpretationszentrum, das architektonisch in den Hang integriert ist und die Geschichte der Bisonkultur erzählt.",
      hu: "A Head-Smashed-In Buffalo Jump az albertai Fort Macleod közelében található, és a világ egyik legrégebbi és legjobb állapotban fennmaradt bölényvadász helyszíne. Több mint 5500 éven keresztül az észak-amerikai síkság őslakosai, különösen a feketeláb (Blackfoot) indiánok használták a terület természetes domborzatát a bölények vadászatára. A módszer lényege az volt, hogy az állatokat a 10 méter magas sziklafal felé terelték, ahonnan azok a mélybe zuhantak. Ez a rendkívül összetett technika a bölények viselkedésének mély ismeretét és precíz koordinációt igényelt, amelyet mesterségesen kialakított terelőutak segítettek. A helyszín magában foglalja a vadászterületet, a sziklát, valamint a völgyben lévő táborhelyeket, ahol az állatokat feldolgozták. 1981-ben az UNESCO Világörökségi helyszínné nyilvánította a területet az őslakos kultúra és a történelmi vadászati technikák megőrzése érdekében. A szikla alatti régészeti lerakódás helyenként a 10 méteres vastagságot is eléri, csontok és kőeszközök tömegét őrizve. Ma egy modern látogatóközpont mutatja be a bölényvadászat és a Siksikaitsitapi nép hagyományait.",
      ro: "Head-Smashed-In Buffalo Jump, situat lângă Fort Macleod în Alberta, este unul dintre cele mai vechi și mai bine conservate situri de vânătoare comunală de bizoni de către popoarele indigene. Timp de peste 5.500 de ani, poporul Blackfoot (Siksikaitsitapi) a folosit topografia naturală a regiunii pentru a conduce bizonii peste stâncile înalte de 10 metri. Această metodă de vânătoare extrem de sofisticată necesita o cunoaștere profundă a comportamentului animalelor și o coordonare precisă printr-un sistem de căi de conducere artificiale. Situl include zona de pășunat, stânca propriu-zisă și locurile de tabără din vale unde animalele erau procesate. Datorită importanței sale remarcabile pentru istoria umană și cultura indigenă a stepelor, locul a fost desemnat patrimoniu mondial UNESCO în 1981. Depozitul arheologic de la baza stâncii are o adâncime de peste 10 metri, conținând straturi de oase și unelte de piatră acumulate de milenii. Astăzi, situl găzduiește un centru de interpretare premiat, integrat arhitectural în stâncă, care explică moștenirea culturală locală.",
      en: "Head-Smashed-In Buffalo Jump, located near Fort Macleod in Alberta, is one of the oldest and best-preserved sites for communal bison hunting by indigenous peoples. For over 5,500 years, the Blackfoot people (Siksikaitsitapi) utilized the natural topography of the region to drive bison over the 10-meter-high cliffs. This highly sophisticated hunting method required a profound understanding of animal behavior and precise coordination through an intricate system of drive lanes. The site encompasses the hunting grounds, the cliff itself, and the processing camps in the valley below where the animals were butchered for meat and hides. Due to its outstanding significance for human history and Plains Indian culture, it was designated a UNESCO World Heritage Site in 1981. The archaeological deposit at the base of the cliff is over 10 meters deep, containing layers of bones and stone tools accumulated over millennia. Today, the site features an award-winning interpretive center built directly into the hillside to honor the legacy of the bison culture.",
      es: "Head-Smashed-In Buffalo Jump es uno de los lugares de salto de búfalos más antiguos, mejor conservados y más grandes de América del Norte. Durante más de 6.000 años, los pueblos indígenas de las llanuras utilizaron estos acantilados para conducir a los bisontes al abismo, lo que requería un profundo conocimiento de la topografía y el comportamiento animal.",
      pt: "Head-Smashed-In Buffalo Jump é um dos locais de salto de búfalos mais antigos, bem preservados e maiores da América do Norte. Durante mais de 6.000 anos, os povos indígenas das planícies utilizaram estas falésias para conduzir bisontes ao abismo, o que exigia um conhecimento profundo da topografia e do comportamento animal.",
      fr: "Le Head-Smashed-In Buffalo Jump est l'un des sites de précipice à bisons les plus anciens, les mieux préservés et les plus vastes d'Amérique du Nord. Pendant plus de 6 000 ans, les peuples autochtones des plaines ont utilisé ces falaises pour rabattre les bisons dans l'abîme, ce qui exigeait une connaissance approfondie de la topographie et du comportement animal.",
    },
    factsAdvanced: {
      de: ["Über 5.500 Jahre genutzt", "UNESCO-Weltkulturerbe seit 1981", "10 Meter tiefe Knochenschichten", "Stammesgebiet der Blackfoot", "Klippenhöhe von ca. 10 Metern", "Eingeweihtes Interpretationszentrum im Fels"],
      hu: ["Több mint 5500 évig használták", "1981-ben lett UNESCO Világörökség", "10 méter mély csontleletek", "A feketeláb indiánok vadászhelye", "A sziklafal magassága 10 méter", "A sziklába épített látogatóközpont"],
      ro: ["Utilizat timp de peste 5.500 ani", "Patrimoniu UNESCO din 1981", "Straturi de oase de 10 metri adâncime", "Teritoriul tribului Blackfoot", "Înălțimea stâncii este de 10 metri", "Centru de interpretare săpat în versant"],
      en: ["Used for over 5,500 years", "UNESCO World Heritage Site since 1981", "Bone deposits over 10 meters deep", "Traditional land of the Blackfoot", "Cliff height of approximately 10 meters", "Interpretive center built into the cliff"],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["UNESCO Weltkulturerbe", "Über 6.000 Jahre genutzt", "Indigene Jagdtechnik", "Großes Informationszentrum"], hu: ["UNESCO Világörökség", "Több mint 6000 évig használták", "Őslakos vadászati technika", "Nagy látogatóközpont"], ro: ["Patrimoniu Mondial UNESCO", "Utilizat de peste 6.000 de ani", "Tehnică de vânătoare indigenă", "Centru de interpretare vast"], en: ["UNESCO World Heritage Site", "Used for over 6,000 years", "Ancient hunting technique", "Award-winning interpretive center"] , es: ["Patrimonio de la Humanidad por la UNESCO", "Utilizado durante más de 6.000 años", "Técnica de caza indígena", "Gran centro de información"], pt: ["Património Mundial da UNESCO", "Utilizado há mais de 6.000 anos", "Técnica de caça indígena", "Grande centro de informações"], fr: ["Patrimoine mondial de l'UNESCO", "Utilisé depuis plus de 6 000 ans", "Technique de chasse autochtone", "Grand centre d'interprétation"]},
    elevation: 1050, historyYear: -4000, historyPeriod: "Pre-Contact", image: "/poi-images/ca-buffalo-jump.webp"},
  {
    id: "ca-plains-abraham", "sights": {
      "de": [
            {
                  "name": "Musée des plaines d'Abraham",
                  "text": "Ein Museum in ca-plains-abraham, das der Schlacht auf den Abraham-Ebenen gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        -71.212844,
                        46.807027
                  ]
            },
            {
                  "name": "Maison des métiers d'Art",
                  "text": "Ein Kunstzentrum in ca-plains-abraham, das Handwerk und Kunsthandwerk präsentiert.",
                  "category": "cultural",
                  "coords": [
                        -71.224411,
                        46.813362
                  ]
            },
            {
                  "name": "Observatoire de la Capitale",
                  "text": "Eine Aussichtsplattform in ca-plains-abraham mit Panoramablick über Quebec City.",
                  "category": "landmark",
                  "coords": [
                        -71.217802,
                        46.808042
                  ]
            },
            {
                  "name": "Le monument aux Acadiens",
                  "text": "Ein Denkmal für die Akadier in der Abraham-Ebene.",
                  "category": "historical",
                  "coords": [
                        -71.221195,
                        46.807471
                  ]
            },
            {
                  "name": "Galerie d'art la Gazelle",
                  "text": "Eine Kunstgalerie in der Abraham-Ebene.",
                  "category": "museum",
                  "coords": [
                        -71.224779,
                        46.808289
                  ]
            },
            {
                  "name": "Galerie des arts visuels",
                  "text": "Ein Zentrum für bildende Kunst in der Abraham-Ebene.",
                  "category": "cultural",
                  "coords": [
                        -71.22682,
                        46.812453
                  ]
            },
            {
                  "name": "Grand Théâtre de Québec",
                  "text": "Ein bedeutender Veranstaltungsort für darstellende Künste in Quebec City, in der Abraham-Ebene.",
                  "category": "cultural",
                  "coords": [
                        -71.221733,
                        46.806285
                  ]
            },
            {
                  "name": "Tour Martello 2",
                  "text": "Einer der Martello-Türme in der Abraham-Ebene, Teil einer Reihe von Verteidigungstürmen, die von den Briten erbaut wurden.",
                  "category": "landmark",
                  "coords": [
                        -71.219526,
                        46.80375
                  ]
            },
            {
                  "name": "Tour Martello 1",
                  "text": "Einer der Martello-Türme in der Abraham-Ebene, Teil einer Reihe von Verteidigungstürmen, die von den Briten erbaut wurden.",
                  "category": "landmark",
                  "coords": [
                        -71.217021,
                        46.80167
                  ]
            },
            {
                  "name": "Parc des Champs-de-Bataille",
                  "text": "Ein Park in der Abraham-Ebene.",
                  "category": "park",
                  "coords": [
                        -71.220199,
                        46.800789
                  ]
            },
            {
                  "name": "Jardin Jean-Paul-L'Allier",
                  "text": "Ein Garten, benannt nach einem ehemaligen Bürgermeister von Quebec City, in der Abraham-Ebene.",
                  "category": "park",
                  "coords": [
                        -71.222926,
                        46.812851
                  ]
            },
            {
                  "name": "Église Saint-Jean-Baptiste",
                  "text": "Eine Kirche in der Abraham-Ebene.",
                  "category": "religious",
                  "coords": [
                        -71.222045,
                        46.809469
                  ]
            },
            {
                  "name": "Tour Martello 4",
                  "text": "Einer der Martello-Türme in der Abraham-Ebene.",
                  "category": "landmark",
                  "coords": [
                        -71.227327,
                        46.8093
                  ]
            },
            {
                  "name": "La Bordée",
                  "text": "Eine Theatergruppe in Quebec City, in der Abraham-Ebene.",
                  "category": "cultural",
                  "coords": [
                        -71.225965,
                        46.813578
                  ]
            },
            {
                  "name": "L'Impérial Bell",
                  "text": "Ein Theater in der Abraham-Ebene.",
                  "category": "cultural",
                  "coords": [
                        -71.227744,
                        46.813443
                  ]
            },
            {
                  "name": "Pont Lavigueur",
                  "text": "Eine Brücke in der Abraham-Ebene.",
                  "category": "landmark",
                  "coords": [
                        -71.239367,
                        46.821811
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Musée des plaines d'Abraham",
                  "text": "Múzeum a ca-plains-abraham-ben, amely az ábrahámi síkság csatájának van szentelve.",
                  "category": "museum",
                  "coords": [
                        -71.212844,
                        46.807027
                  ]
            },
            {
                  "name": "Maison des métiers d'Art",
                  "text": "Művészeti központ a ca-plains-abraham-ben, kézműves és mesterségbeli munkákat bemutatva.",
                  "category": "cultural",
                  "coords": [
                        -71.224411,
                        46.813362
                  ]
            },
            {
                  "name": "Observatoire de la Capitale",
                  "text": "Egy kilátó a ca-plains-abraham-ben, panorámás kilátással Quebec Cityre.",
                  "category": "landmark",
                  "coords": [
                        -71.217802,
                        46.808042
                  ]
            },
            {
                  "name": "Le monument aux Acadiens",
                  "text": "Az akádoknak szentelt emlékmű az Abraham-síkságon.",
                  "category": "historical",
                  "coords": [
                        -71.221195,
                        46.807471
                  ]
            },
            {
                  "name": "Galerie d'art la Gazelle",
                  "text": "Egy művészeti galéria az Abraham-síkságon.",
                  "category": "museum",
                  "coords": [
                        -71.224779,
                        46.808289
                  ]
            },
            {
                  "name": "Galerie des arts visuels",
                  "text": "Képzőművészeti központ az Abraham-síkságon.",
                  "category": "cultural",
                  "coords": [
                        -71.22682,
                        46.812453
                  ]
            },
            {
                  "name": "Grand Théâtre de Québec",
                  "text": "Egy jelentős előadó-művészeti helyszín Quebec Cityben, az Abraham-síkságon.",
                  "category": "cultural",
                  "coords": [
                        -71.221733,
                        46.806285
                  ]
            },
            {
                  "name": "Tour Martello 2",
                  "text": "Az egyik Martello-torony az Abraham-síkságon, a britek által épített védőtornyok sorának része.",
                  "category": "landmark",
                  "coords": [
                        -71.219526,
                        46.80375
                  ]
            },
            {
                  "name": "Tour Martello 1",
                  "text": "Az egyik Martello-torony az Abraham-síkságon, a britek által épített védőtornyok sorának része.",
                  "category": "landmark",
                  "coords": [
                        -71.217021,
                        46.80167
                  ]
            },
            {
                  "name": "Parc des Champs-de-Bataille",
                  "text": "Egy park az Abraham-síkságon.",
                  "category": "park",
                  "coords": [
                        -71.220199,
                        46.800789
                  ]
            },
            {
                  "name": "Jardin Jean-Paul-L'Allier",
                  "text": "Egy kert, amely Quebec City egykori polgármesteréről kapta a nevét, az Abraham-síkságon.",
                  "category": "park",
                  "coords": [
                        -71.222926,
                        46.812851
                  ]
            },
            {
                  "name": "Église Saint-Jean-Baptiste",
                  "text": "Egy templom az Abraham-síkságon.",
                  "category": "religious",
                  "coords": [
                        -71.222045,
                        46.809469
                  ]
            },
            {
                  "name": "Tour Martello 4",
                  "text": "Az egyik Martello-torony az Abraham-síkságon.",
                  "category": "landmark",
                  "coords": [
                        -71.227327,
                        46.8093
                  ]
            },
            {
                  "name": "La Bordée",
                  "text": "Egy színházi társaság Quebec Cityben, az Abraham-síkságon.",
                  "category": "cultural",
                  "coords": [
                        -71.225965,
                        46.813578
                  ]
            },
            {
                  "name": "L'Impérial Bell",
                  "text": "Egy színház az Abraham-síkságon.",
                  "category": "cultural",
                  "coords": [
                        -71.227744,
                        46.813443
                  ]
            },
            {
                  "name": "Pont Lavigueur",
                  "text": "Egy híd az Abraham-síkságon.",
                  "category": "landmark",
                  "coords": [
                        -71.239367,
                        46.821811
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Musée des plaines d'Abraham",
                  "text": "Un muzeu în ca-plains-abraham dedicat Bătăliei de pe Câmpiile lui Abraham.",
                  "category": "museum",
                  "coords": [
                        -71.212844,
                        46.807027
                  ]
            },
            {
                  "name": "Maison des métiers d'Art",
                  "text": "Un centru de arte în ca-plains-abraham care prezintă meșteșuguri și lucrări artizanale.",
                  "category": "cultural",
                  "coords": [
                        -71.224411,
                        46.813362
                  ]
            },
            {
                  "name": "Observatoire de la Capitale",
                  "text": "O platformă de observație în ca-plains-abraham cu vedere panoramică asupra orașului Quebec.",
                  "category": "landmark",
                  "coords": [
                        -71.217802,
                        46.808042
                  ]
            },
            {
                  "name": "Le monument aux Acadiens",
                  "text": "Un monument dedicat poporului acadian pe Câmpia lui Abraham.",
                  "category": "historical",
                  "coords": [
                        -71.221195,
                        46.807471
                  ]
            },
            {
                  "name": "Galerie d'art la Gazelle",
                  "text": "O galerie de artă pe Câmpia lui Abraham.",
                  "category": "museum",
                  "coords": [
                        -71.224779,
                        46.808289
                  ]
            },
            {
                  "name": "Galerie des arts visuels",
                  "text": "Un centru de arte vizuale pe Câmpia lui Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.22682,
                        46.812453
                  ]
            },
            {
                  "name": "Grand Théâtre de Québec",
                  "text": "Un important loc de spectacole în Quebec City, pe Câmpia lui Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.221733,
                        46.806285
                  ]
            },
            {
                  "name": "Tour Martello 2",
                  "text": "Unul dintre turnurile Martello de pe Câmpia lui Abraham, parte a unei serii de turnuri de apărare construite de britanici.",
                  "category": "landmark",
                  "coords": [
                        -71.219526,
                        46.80375
                  ]
            },
            {
                  "name": "Tour Martello 1",
                  "text": "Unul dintre turnurile Martello de pe Câmpia lui Abraham, parte a unei serii de turnuri de apărare construite de britanici.",
                  "category": "landmark",
                  "coords": [
                        -71.217021,
                        46.80167
                  ]
            },
            {
                  "name": "Parc des Champs-de-Bataille",
                  "text": "Un parc pe Câmpia lui Abraham.",
                  "category": "park",
                  "coords": [
                        -71.220199,
                        46.800789
                  ]
            },
            {
                  "name": "Jardin Jean-Paul-L'Allier",
                  "text": "O grădină numită după un fost primar al orașului Quebec City, pe Câmpia lui Abraham.",
                  "category": "park",
                  "coords": [
                        -71.222926,
                        46.812851
                  ]
            },
            {
                  "name": "Église Saint-Jean-Baptiste",
                  "text": "O biserică pe Câmpia lui Abraham.",
                  "category": "religious",
                  "coords": [
                        -71.222045,
                        46.809469
                  ]
            },
            {
                  "name": "Tour Martello 4",
                  "text": "Unul dintre turnurile Martello de pe Câmpia lui Abraham.",
                  "category": "landmark",
                  "coords": [
                        -71.227327,
                        46.8093
                  ]
            },
            {
                  "name": "La Bordée",
                  "text": "O companie de teatru în Quebec City, pe Câmpia lui Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.225965,
                        46.813578
                  ]
            },
            {
                  "name": "L'Impérial Bell",
                  "text": "Un teatru pe Câmpia lui Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.227744,
                        46.813443
                  ]
            },
            {
                  "name": "Pont Lavigueur",
                  "text": "Un pod pe Câmpia lui Abraham.",
                  "category": "landmark",
                  "coords": [
                        -71.239367,
                        46.821811
                  ]
            }
      ],
      "en": [
            {
                  "name": "Musée des plaines d'Abraham",
                  "text": "A museum in ca-plains-abraham dedicated to the Battle of the Plains of Abraham.",
                  "category": "museum",
                  "coords": [
                        -71.212844,
                        46.807027
                  ]
            },
            {
                  "name": "Maison des métiers d'Art",
                  "text": "An arts centre in ca-plains-abraham showcasing crafts and artisan work.",
                  "category": "cultural",
                  "coords": [
                        -71.224411,
                        46.813362
                  ]
            },
            {
                  "name": "Observatoire de la Capitale",
                  "text": "An observation deck in ca-plains-abraham offering panoramic views of Quebec City.",
                  "category": "landmark",
                  "coords": [
                        -71.217802,
                        46.808042
                  ]
            },
            {
                  "name": "Le monument aux Acadiens",
                  "text": "A monument dedicated to the Acadian people on the Plains of Abraham.",
                  "category": "historical",
                  "coords": [
                        -71.221195,
                        46.807471
                  ]
            },
            {
                  "name": "Galerie d'art la Gazelle",
                  "text": "An art gallery on the Plains of Abraham.",
                  "category": "museum",
                  "coords": [
                        -71.224779,
                        46.808289
                  ]
            },
            {
                  "name": "Galerie des arts visuels",
                  "text": "A visual arts centre on the Plains of Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.22682,
                        46.812453
                  ]
            },
            {
                  "name": "Grand Théâtre de Québec",
                  "text": "A major performing arts venue in Quebec City, on the Plains of Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.221733,
                        46.806285
                  ]
            },
            {
                  "name": "Martello Tower 2",
                  "text": "One of the Martello towers on the Plains of Abraham, part of a series of defensive towers built by the British.",
                  "category": "landmark",
                  "coords": [
                        -71.219526,
                        46.80375
                  ]
            },
            {
                  "name": "Martello Tower 1",
                  "text": "One of the Martello towers on the Plains of Abraham, part of a series of defensive towers built by the British.",
                  "category": "landmark",
                  "coords": [
                        -71.217021,
                        46.80167
                  ]
            },
            {
                  "name": "Battlefield Park",
                  "text": "A park on the Plains of Abraham.",
                  "category": "park",
                  "coords": [
                        -71.220199,
                        46.800789
                  ]
            },
            {
                  "name": "Jardin Jean-Paul-L'Allier",
                  "text": "A garden named after a former mayor of Quebec City, on the Plains of Abraham.",
                  "category": "park",
                  "coords": [
                        -71.222926,
                        46.812851
                  ]
            },
            {
                  "name": "Église Saint-Jean-Baptiste",
                  "text": "A church on the Plains of Abraham.",
                  "category": "religious",
                  "coords": [
                        -71.222045,
                        46.809469
                  ]
            },
            {
                  "name": "Martello Tower 4",
                  "text": "One of the Martello towers on the Plains of Abraham.",
                  "category": "landmark",
                  "coords": [
                        -71.227327,
                        46.8093
                  ]
            },
            {
                  "name": "La Bordée",
                  "text": "A theatre company in Quebec City, on the Plains of Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.225965,
                        46.813578
                  ]
            },
            {
                  "name": "L'Impérial Bell",
                  "text": "A theatre on the Plains of Abraham.",
                  "category": "cultural",
                  "coords": [
                        -71.227744,
                        46.813443
                  ]
            },
            {
                  "name": "Pont Lavigueur",
                  "text": "A bridge on the Plains of Abraham.",
                  "category": "landmark",
                  "coords": [
                        -71.239367,
                        46.821811
                  ]
            }
      ]
},
    type: "historical",
    parent: "CA",
    coords: [-71.2214, 46.8027],
    name: { de: "Abraham-Ebene", hu: "Ábrahám-síkság", ro: "Câmpia lui Avraam", en: "Plains of Abraham" },
    description: { de: "Ort einer entscheidenden Schlacht zwischen Franzosen und Briten.", hu: "A franciák és britek közötti döntő csata helyszíne.", ro: "Locul unei bătălii decisive între francezi și britanici.", en: "Site of a pivotal battle between the French and British." , es: "Lugar de una batalla decisiva entre franceses y británicos.", pt: "Local de uma batalha decisiva entre franceses e britânicos.", fr: "Lieu d'une bataille décisive entre Français et Britanniques."},
    descriptionAdvanced: {
      de: "Die Plains of Abraham in Quebec City sind eine der geschichtlich bedeutendsten Stätten Kanadas und der Ort der entscheidenden Schlacht zwischen den britischen und französischen Armeen im Jahr 1759. Unter der Führung der Generäle James Wolfe und Louis-Joseph de Montcalm kämpften beide Mächte um die Kontrolle über Neufrankreich, was letztlich zum Fall der Stadt Quebec und zur britischen Vorherrschaft in Nordamerika führte. Heute bildet das Areal den Battlefields Park, einen weitläufigen Stadtpark, der für seine kulturellen Veranstaltungen und sportlichen Aktivitäten bekannt ist. Das Gelände umfasst historische Denkmäler, Martello-Türme und Informationstafeln, die die militärischen Manöver der Schlacht erläutern. Neben seiner historischen Schwere dient der Park als grüne Lunge von Quebec City und bietet spektakuläre Ausblicke auf den Sankt-Lorenz-Strom. Im Jahr 2008 war der Ort das Zentrum der Feierlichkeiten zum 400. Jubiläum der Stadtgründung. Die Plains of Abraham symbolisieren somit sowohl den gewaltsamen Ursprung des modernen Kanadas als auch seine heutige kulturelle Vielfalt.",
      hu: "A Quebec városában található Ábrahám-síkság (Plains of Abraham) Kanada történetének egyik legmeghatározóbb helyszíne, az 1759-es brit és francia seregek közötti döntő csata színtere. James Wolfe és Louis-Joseph de Montcalm tábornokok vezetésével a két birodalom Új-Franciaország ellenőrzéséért küzdött, amelynek végén Quebec városa brit kézre került, megváltoztatva Észak-Amerika sorsát. Ma a terület a Csataterek Parkja (Battlefields Park) részét képezi, amely egy kiterjedt városi zöldövezet, számos kulturális esemény és szabadidős tevékenység központja. A helyszínen történelmi emlékművek, Martello-tornyok és információs táblák emlékeztetnek a katonai manőverekre és a két hadvezér áldozatára. A történelmi jelentőség mellett a park a város tüdejeként szolgál, ahonnan lenyűgöző kilátás nyílik a Szent Lőrinc-folyóra. 2008-ban itt tartották Quebec alapításának 400. évfordulós ünnepségeit. Az Ábrahám-síkság így egyszerre jelképezi a modern Kanada születésének drámai pillanatát és a mai Quebec békés közösségi életét.",
      ro: "Câmpiile lui Abraham (Plains of Abraham) din Quebec City reprezintă unul dintre cele mai semnificative situri istorice din Canada, fiind locul bătăliei decisive din 1759 dintre armatele britanică și franceză. Sub comanda generalilor James Wolfe și Louis-Joseph de Montcalm, cele două puteri s-au luptat pentru controlul Noii Franțe, evenimentul ducând la căderea orașului Quebec și la instaurarea dominației britanice în America de Nord. Astăzi, zona formează Parcul Câmpurilor de Luptă (Battlefields Park), un spațiu urban vast, renumit pentru evenimentele culturale și activitățile recreative. Terenul include monumente istorice, turnuri Martello și panouri informative care explică manevrele militare ale bătăliei. Pe lângă greutatea sa istorică, parcul servește drept plămân verde al orașului Quebec, oferind vederi spectaculoase asupra fluviului Sfântul Laurențiu. În 2008, situl a fost centrul festivităților pentru cea de-a 400-a aniversare a fondării orașului. Câmpiile lui Abraham simbolizează atât originile dramatice ale Canadei moderne, cât și vitalitatea sa culturală contemporană.",
      en: "The Plains of Abraham in Quebec City are among the most historically significant sites in Canada, being the location of the decisive battle between British and French armies in 1759. Led by Generals James Wolfe and Louis-Joseph de Montcalm, the two powers fought for control of New France, an event that ultimately led to the fall of Quebec City and the establishment of British rule in North America. Today, the area forms Battlefields Park, a sprawling urban green space renowned for its cultural events and recreational activities. The grounds feature historical monuments, Martello towers, and interpretive plaques that detail the military maneuvers of the battle. Beyond its historical gravity, the park serves as the green lungs of Quebec City, offering spectacular views of the St. Lawrence River. In 2008, the site was the centerpiece of celebrations for the 400th anniversary of the city's founding. The Plains of Abraham thus symbolize both the dramatic origins of modern Canada and its present-day cultural vibrancy.",
      es: "Las Llanuras de Abraham fueron en 1759 el escenario de la batalla decisiva entre el Imperio Británico y Francia. La victoria británica llevó a la capitulación de Quebec y marcó el punto de inflexión que finalmente condujo al dominio británico sobre Canadá.",
      pt: "As Planícies de Abraão foram o palco da batalha decisiva entre o Império Britânico e a França em 1759. A vitória britânica levou à capitulação do Quebeque e marcou o ponto de viragem que acabou por levar ao domínio britânico sobre o Canadá.",
      fr: "Les Plaines d'Abraham furent en 1759 le théâtre de la bataille décisive entre l'Empire britannique et la France. La victoire des Britanniques mena à la capitulation de Québec et marqua le tournant qui conduisit finalement à la domination britannique sur le Canada.",
    },
    factsAdvanced: {
      de: ["Schauplatz der Schlacht von 1759", "Teil des Battlefields Park", "Generäle Wolfe und Montcalm fielen hier", "Erstes nationales Schlachtfeld Kanadas", "Umfasst ca. 103 Hektar Fläche", "Standort von 4 Martello-Türmen"],
      hu: ["Az 1759-es csata helyszíne", "A Battlefields Park része", "Wolfe és Montcalm itt hunyt el", "Kanada első nemzeti történelmi csataterének része", "Körülbelül 103 hektár területű", "4 Martello-torony található itt"],
      ro: ["Scena bătăliei din 1759", "Parte a Battlefields Park", "Generalii Wolfe și Montcalm au murit aici", "Primul câmp de luptă național al Canadei", "Acoperă aproximativ 103 hectare", "Include 4 turnuri Martello"],
      en: ["Site of the pivotal battle in 1759", "Part of the Battlefields Park", "Generals Wolfe and Montcalm died here", "Canada's first national battlefields park", "Covers approximately 103 hectares", "Features 4 historic Martello towers"],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Historisches Schlachtfeld", "Schlacht von 1759", "Beide Generäle fielen hier", "Heute ein großer Stadtpark"], hu: ["Történelmi csatatér", "Az 1759-es csata helyszíne", "Mindkét hadvezér itt esett el", "Ma nagy városi park"], ro: ["Câmp de bătălie istoric", "Bătălia din 1759", "Ambii generali au murit aici", "Astăzi un mare parc urban"], en: ["Historic battlefield", "Site of the 1759 battle", "Both generals died in the conflict", "Now a major urban park"] , es: ["Campo de batalla histórico", "Batalla de 1759", "Ambos generales cayeron aquí", "Hoy un gran parque urbano"], pt: ["Campo de batalha histórico", "Batalha de 1759", "Ambos os generais morreram aqui", "Atualmente um grande parque urbano"], fr: ["Champ de bataille historique", "Bataille de 1759", "Les deux généraux y sont tombés", "Aujourd'hui un grand parc urbain"]},
    historyYear: 1759, historyPeriod: "Seven Years' War", image: "/poi-images/ca-plains-abraham.webp"},
  {
    id: "ca-peggys-cove", "sights": {
      "de": [
            {
                  "name": "Reach Hill",
                  "text": "Reach Hill ist ein Gipfel in Peggy's Cove.",
                  "category": "natural",
                  "coords": [
                        -63.857608,
                        44.500919
                  ]
            },
            {
                  "name": "Kiley Hill",
                  "text": "Kiley Hill ist ein Gipfel in Peggy's Cove.",
                  "category": "natural",
                  "coords": [
                        -63.834245,
                        44.536568
                  ]
            },
            {
                  "name": "Myras Beach",
                  "text": "Myras Beach ist ein Strand in Peggy's Cove.",
                  "category": "recreational",
                  "coords": [
                        -63.824395,
                        44.502438
                  ]
            },
            {
                  "name": "Cherrys Beach",
                  "text": "Cherrys Beach ist ein Strand in Peggy's Cove.",
                  "category": "recreational",
                  "coords": [
                        -64.006563,
                        44.509081
                  ]
            },
            {
                  "name": "Fishermen’s Monument",
                  "text": "Fishermen’s Monument ist ein Denkmal in Peggy's Cove.",
                  "category": "historical",
                  "coords": [
                        -63.914309,
                        44.493947
                  ]
            },
            {
                  "name": "Indian Harbour Light",
                  "text": "Indian Harbour Light ist ein Leuchtturm in Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.945724,
                        44.522009
                  ]
            },
            {
                  "name": "Peggys Point Lighthouse",
                  "text": "Peggys Point Lighthouse ist ein berühmter Leuchtturm in Peggy's Cove, einer der meistfotografierten der Welt.",
                  "category": "landmark",
                  "coords": [
                        -63.918677,
                        44.491821
                  ]
            },
            {
                  "name": "Blind Bay",
                  "text": "Blind Bay ist eine Bucht in Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.833556,
                        44.509693
                  ]
            },
            {
                  "name": "Northern Arm",
                  "text": "Northern Arm ist eine Bucht in Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.86636,
                        44.509009
                  ]
            },
            {
                  "name": "Dover Soi",
                  "text": "Dover Soi ist eine Bucht in Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.87028,
                        44.498835
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Reach Hill",
                  "text": "A Reach Hill egy csúcs Peggy's Cove-ban.",
                  "category": "natural",
                  "coords": [
                        -63.857608,
                        44.500919
                  ]
            },
            {
                  "name": "Kiley Hill",
                  "text": "A Kiley Hill egy csúcs Peggy's Cove-ban.",
                  "category": "natural",
                  "coords": [
                        -63.834245,
                        44.536568
                  ]
            },
            {
                  "name": "Myras Beach",
                  "text": "A Myras Beach egy strand Peggy's Cove-ban.",
                  "category": "recreational",
                  "coords": [
                        -63.824395,
                        44.502438
                  ]
            },
            {
                  "name": "Cherrys Beach",
                  "text": "A Cherrys Beach egy strand Peggy's Cove-ban.",
                  "category": "recreational",
                  "coords": [
                        -64.006563,
                        44.509081
                  ]
            },
            {
                  "name": "Fishermen’s Monument",
                  "text": "A Fishermen’s Monument egy emlékmű Peggy's Cove-ban.",
                  "category": "historical",
                  "coords": [
                        -63.914309,
                        44.493947
                  ]
            },
            {
                  "name": "Indian Harbour Light",
                  "text": "Az Indian Harbour Light egy világítótorony Peggy's Cove-ban.",
                  "category": "landmark",
                  "coords": [
                        -63.945724,
                        44.522009
                  ]
            },
            {
                  "name": "Peggys Point Lighthouse",
                  "text": "A Peggys Point Lighthouse egy híres világítótorony Peggy's Cove-ban, a világ egyik legtöbbet fotózott világítótornya.",
                  "category": "landmark",
                  "coords": [
                        -63.918677,
                        44.491821
                  ]
            },
            {
                  "name": "Blind Bay",
                  "text": "A Blind Bay egy öböl Peggy's Cove-ban.",
                  "category": "landmark",
                  "coords": [
                        -63.833556,
                        44.509693
                  ]
            },
            {
                  "name": "Northern Arm",
                  "text": "A Northern Arm egy öböl Peggy's Cove-ban.",
                  "category": "landmark",
                  "coords": [
                        -63.86636,
                        44.509009
                  ]
            },
            {
                  "name": "Dover Soi",
                  "text": "A Dover Soi egy öböl Peggy's Cove-ban.",
                  "category": "landmark",
                  "coords": [
                        -63.87028,
                        44.498835
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Reach Hill",
                  "text": "Reach Hill este un vârf în Peggy's Cove.",
                  "category": "natural",
                  "coords": [
                        -63.857608,
                        44.500919
                  ]
            },
            {
                  "name": "Kiley Hill",
                  "text": "Kiley Hill este un vârf în Peggy's Cove.",
                  "category": "natural",
                  "coords": [
                        -63.834245,
                        44.536568
                  ]
            },
            {
                  "name": "Myras Beach",
                  "text": "Plaja Myras este o plajă în Peggy's Cove.",
                  "category": "recreational",
                  "coords": [
                        -63.824395,
                        44.502438
                  ]
            },
            {
                  "name": "Cherrys Beach",
                  "text": "Plaja Cherrys este o plajă în Peggy's Cove.",
                  "category": "recreational",
                  "coords": [
                        -64.006563,
                        44.509081
                  ]
            },
            {
                  "name": "Fishermen’s Monument",
                  "text": "Monumentul pescarilor este un monument în Peggy's Cove.",
                  "category": "historical",
                  "coords": [
                        -63.914309,
                        44.493947
                  ]
            },
            {
                  "name": "Indian Harbour Light",
                  "text": "Farul Indian Harbour este un far în Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.945724,
                        44.522009
                  ]
            },
            {
                  "name": "Peggys Point Lighthouse",
                  "text": "Farul Peggys Point este un far celebru în Peggy's Cove, unul dintre cele mai fotografiate din lume.",
                  "category": "landmark",
                  "coords": [
                        -63.918677,
                        44.491821
                  ]
            },
            {
                  "name": "Blind Bay",
                  "text": "Golful Blind este un golf în Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.833556,
                        44.509693
                  ]
            },
            {
                  "name": "Northern Arm",
                  "text": "Northern Arm este un golf în Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.86636,
                        44.509009
                  ]
            },
            {
                  "name": "Dover Soi",
                  "text": "Dover Soi este un golf în Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.87028,
                        44.498835
                  ]
            }
      ],
      "en": [
            {
                  "name": "Reach Hill",
                  "text": "Reach Hill is a peak near Peggy's Cove.",
                  "category": "natural",
                  "coords": [
                        -63.857608,
                        44.500919
                  ]
            },
            {
                  "name": "Kiley Hill",
                  "text": "Kiley Hill is a peak near Peggy's Cove.",
                  "category": "natural",
                  "coords": [
                        -63.834245,
                        44.536568
                  ]
            },
            {
                  "name": "Myras Beach",
                  "text": "Myras Beach is a beach near Peggy's Cove.",
                  "category": "recreational",
                  "coords": [
                        -63.824395,
                        44.502438
                  ]
            },
            {
                  "name": "Cherrys Beach",
                  "text": "Cherrys Beach is a beach near Peggy's Cove.",
                  "category": "recreational",
                  "coords": [
                        -64.006563,
                        44.509081
                  ]
            },
            {
                  "name": "Fishermen’s Monument",
                  "text": "Fishermen’s Monument is a monument in Peggy's Cove.",
                  "category": "historical",
                  "coords": [
                        -63.914309,
                        44.493947
                  ]
            },
            {
                  "name": "Indian Harbour Light",
                  "text": "Indian Harbour Light is a lighthouse near Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.945724,
                        44.522009
                  ]
            },
            {
                  "name": "Peggys Point Lighthouse",
                  "text": "Peggys Point Lighthouse is a famous lighthouse in Peggy's Cove, one of the most photographed in the world.",
                  "category": "landmark",
                  "coords": [
                        -63.918677,
                        44.491821
                  ]
            },
            {
                  "name": "Blind Bay",
                  "text": "Blind Bay is a bay near Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.833556,
                        44.509693
                  ]
            },
            {
                  "name": "Northern Arm",
                  "text": "Northern Arm is a bay near Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.86636,
                        44.509009
                  ]
            },
            {
                  "name": "Dover Soi",
                  "text": "Dover Soi is a bay near Peggy's Cove.",
                  "category": "landmark",
                  "coords": [
                        -63.87028,
                        44.498835
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CA",
    coords: [-63.9151, 44.4924],
    name: { de: "Peggy's Cove Leuchtturm", hu: "Peggy's Cove világítótorony", ro: "Farul Peggy's Cove", en: "Peggy's Cove Lighthouse" },
    description: { de: "Ein ikonischer Leuchtturm an der Küste von Neuschottland.", hu: "Ikonikus világítótorony Új-Skócia partjainál.", ro: "Un far iconic pe coasta Noii Scoții.", en: "An iconic lighthouse on the coast of Nova Scotia." , es: "Un faro icónico en la costa de Nueva Escocia.", pt: "Um farol icónico na costa da Nova Escócia.", fr: "Un phare emblématique sur la côte de la Nouvelle-Écosse."},
    descriptionAdvanced: {
      de: "Peggy's Cove Lighthouse, auch bekannt als Peggy's Point Lighthouse, ist einer der bekanntesten und meistfotografierten Leuchttürme der Welt. Er befindet sich in einem charmanten Fischerdorf an der Ostküste von Neuschottland, etwa 43 Kilometer südwestlich von Halifax. Das heutige Bauwerk wurde im Jahr 1915 errichtet und ersetzte ein älteres Holzhaus, um die Seefahrt am Eingang zur St. Margaret's Bay zu sichern. Der Leuchtturm steht auf massiven Granitfelsen, die durch eiszeitliche Gletscherbewegungen geformt wurden und der Landschaft ihr charakteristisches, raues Aussehen verleihen. Peggy's Cove ist nach wie vor eine aktive Navigationshilfe der kanadischen Küstenwache und ein Symbol für die maritime Geschichte der Atlantikprovinzen. Trotz der hohen Besucherzahlen bewahrt das Dorf seinen authentischen Charakter mit bunten Fischerhäusern und Hummerbooten im Hafen. Ein Denkmal in der Nähe erinnert an die Katastrophe von Swissair-Flug 111 im Jahr 1998, was der friedlichen Kulisse eine zusätzliche emotionale Dimension verleiht. Die Kombination aus Geologie, Architektur und Meeresnähe macht den Ort zu einem Wahrzeichen Kanadas.",
      hu: "A Peggy's Cove világítótorony, hivatalos nevén Peggy's Point Lighthouse, a világ egyik legismertebb és legtöbbet fényképezett világítótornya. Nova Scotia keleti partján, egy bájos halászfaluban található, mintegy 43 kilométerre Halifax-től. A jelenlegi építmény 1915-ben készült el, felváltva egy korábbi faszerkezetet, hogy segítse a hajózást a St. Margaret-öböl bejáratánál. A világítótorony hatalmas gránitsziklákon áll, amelyeket az utolsó jégkorszak gleccserei formáltak, egyedülálló és nyers megjelenést kölcsönözve a tájnak. Peggy's Cove ma is a kanadai parti őrség aktív navigációs eszköze, és az atlanti tartományok tengerészeti történelmének jelképe. A nagy látogatószám ellenére a falu megőrizte eredeti hangulatát a színes halászházakkal és a kikötőben horgonyzó rákászoshajókkal. A közelben emlékmű őrzi a Swissair 111-es járatának 1998-as katasztrófáját, amely mély érzelmi töltetet ad a helyszínnek. A geológia, az építészet és a tenger közelsége teszi ezt a helyet Kanada egyik legfontosabb ikonjává.",
      ro: "Farul din Peggy's Cove, cunoscut oficial sub numele de Farul Peggy's Point, este unul dintre cele mai recunoscute și fotografiate faruri din lume. Situat într-un sat pitoresc de pescari de pe coasta estică a provinciei Nova Scotia, se află la aproximativ 43 de kilometri sud-vest de Halifax. Actuala structură a fost construită în 1915, înlocuind o clădire veche din lemn, pentru a asigura navigația la intrarea în Golful St. Margaret. Farul este amplasat pe stânci masive de granit modelate de mișcările glaciare, oferind peisajului un aspect caracteristic și auster. Peggy's Cove rămâne un ajutor activ de navigație pentru Garda de Coastă Canadiană și un simbol al istoriei maritime a provinciilor atlantice. În ciuda numărului mare de turiști, satul își păstrează caracterul autentic, cu case de pescari colorate și bărci de homari în port. Un monument din apropiere comemorează tragedia zborului Swissair 111 din 1998, adăugând o dimensiune emoțională locației. Combinația dintre geologie, arhitectură și proximitatea mării face din acest loc un simbol al Canadei.",
      en: "Peggy's Cove Lighthouse, also known as Peggy's Point Lighthouse, is one of the most iconic and photographed lighthouses in the world. Situated in a charming fishing village on the eastern shore of Nova Scotia, it is located approximately 43 kilometers southwest of Halifax. The current structure was built in 1915, replacing an earlier wooden lighthouse to secure maritime navigation at the entrance to St. Margaret's Bay. The lighthouse stands atop massive granite outcrops shaped by glacial movements during the last Ice Age, giving the landscape its distinctive and rugged appearance. Peggy's Cove remains an active navigational aid operated by the Canadian Coast Guard and a symbol of the maritime history of the Atlantic provinces. Despite its popularity with tourists, the village retains its authentic character with colorful fishing shacks and lobster boats in the harbor. A nearby memorial commemorates the victims of Swissair Flight 111 in 1998, adding a somber emotional dimension to the peaceful setting. The blend of geology, architecture, and sea makes it a quintessential Canadian landmark.",
      es: "El faro de Peggy's Cove, también conocido como Peggy's Point Lighthouse, es uno de los faros más fotografiados del mundo. Se asienta sobre enormes rocas de granito pulidas por el mar en la escarpada costa atlántica de Nueva Escocia.",
      pt: "O farol de Peggy's Cove, também conhecido como Peggy's Point Lighthouse, é um dos faróis mais fotografados do mundo. Está situado em enormes rochas de granito polidas pelo mar na costa atlântica acidentada da Nova Escócia.",
      fr: "Le phare de Peggy's Cove, également connu sous le nom de Peggy's Point Lighthouse, est l'un des phares les plus photographiés au monde. Il trône sur d'immenses rochers de granit polis par la mer sur la côte atlantique sauvage de la Nouvelle-Écosse.",
    },
    factsAdvanced: {
      de: ["Aktuelle Struktur von 1915", "Steht auf 400 Mio. Jahre altem Granit", "Aktiv betrieben von der Küstenwache", "43 km von Halifax entfernt", "Früher gab es darin ein Postamt", "Einer der meistfotografierten Orte Kanadas"],
      hu: ["A jelenlegi épület 1915-ös", "400 millió éves gránitsziklán áll", "A parti őrség ma is használja", "Halifaxtól 43 km-re fekszik", "Régebben postahivatal működött benne", "Kanada egyik legtöbbet fotózott helye"],
      ro: ["Structura actuală datează din 1915", "Amplasat pe granit vechi de 400 mil. ani", "Operat activ de Garda de Coastă", "Situat la 43 km de Halifax", "A găzduit în trecut un oficiu poștal", "Unul dintre cele mai fotografiate locuri"],
      en: ["Current structure built in 1915", "Stands on 400-million-year-old granite", "Active aid to navigation", "Located 43 km from Halifax", "Formerly housed a post office", "One of the most photographed sites in Canada"],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Meistfotografierter Leuchtturm", "Auf Granitfelsen erbaut", "Aktives Navigationslicht", "Charmantes Fischerdorf"], hu: ["A legtöbbet fényképezett világítótorony", "Gránitsziklákra épült", "Aktív navigációs fény", "Bájos halászfalu"], ro: ["Cel mai fotografiat far", "Construit pe stânci de granit", "Lumină de navigație activă", "Sat de pescari fermecător"], en: ["Most photographed lighthouse", "Built on granite bedrock", "Active navigation aid", "Iconic fishing village setting"] , es: ["Faro más fotografiado", "Construido sobre rocas de granito", "Luz de navegación activa", "Encantador pueblo pesquero"], pt: ["Farol mais fotografado", "Construído sobre rochas de granito", "Luz de navegação ativa", "Charmosa aldeia piscatória"], fr: ["Phare le plus photographié", "Construit sur des rochers de granit", "Feu de navigation actif", "Charmant village de pêcheurs"]},
    elevation: 15, historyYear: 1915, historyPeriod: "Modern", image: "/poi-images/ca-peggys-cove.webp"},
  {
    id: "ca-parliament-hill", "sights": {
      "de": [
            {
                  "name": "Bank of Canada Museum",
                  "text": "Ein Museum in Ottawa, das die Geschichte des kanadischen Geldes zeigt.",
                  "category": "museum",
                  "coords": [
                        -75.702062,
                        45.421506
                  ]
            },
            {
                  "name": "Kanadisches Kriegsmuseum",
                  "text": "Das nationale Militärmuseum Kanadas in Ottawa, das die Kriegsgeschichte dokumentiert.",
                  "category": "museum",
                  "coords": [
                        -75.717114,
                        45.417079
                  ]
            },
            {
                  "name": "St. Andrew's Presbyterian Church",
                  "text": "Eine der ältesten Kirchen in Ottawa, Sitz der Presbyterianischen Gemeinde.",
                  "category": "religious",
                  "coords": [
                        -75.704038,
                        45.420501
                  ]
            },
            {
                  "name": "St. Peter's Evangelical Lutheran Church",
                  "text": "Eine historische lutherische Kirche in Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.70726,
                        45.418328
                  ]
            },
            {
                  "name": "Westminster Presbyterian Church",
                  "text": "Eine historische presbyterianische Kirche im Zentrum Ottawas.",
                  "category": "religious",
                  "coords": [
                        -75.755767,
                        45.388684
                  ]
            },
            {
                  "name": "Pont Champlain Bridge",
                  "text": "Eine Brücke in Ottawa, die über den Ottawa River nach Gatineau führt.",
                  "category": "landmark",
                  "coords": [
                        -75.759108,
                        45.40914
                  ]
            },
            {
                  "name": "Pont du Portage",
                  "text": "Eine wichtige Brücke in Ottawa, die die Verbindung nach Gatineau herstellt.",
                  "category": "landmark",
                  "coords": [
                        -75.713594,
                        45.422373
                  ]
            },
            {
                  "name": "Chaudière Falls",
                  "text": "Chaudière Falls ist ein Aussichtspunkt im Bereich ca-parliament-hill, bekannt für seinen Wasserfall am Ottawa River.",
                  "category": "natural",
                  "coords": [
                        -75.721474,
                        45.41942
                  ]
            },
            {
                  "name": "Bate Island",
                  "text": "Bate Island ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.756372,
                        45.408818
                  ]
            },
            {
                  "name": "Heather Crowe Park",
                  "text": "Heather Crowe Park ist ein Park im Bereich ca-parliament-hill, benannt nach der Anti-Raucher-Aktivistin Heather Crowe.",
                  "category": "park",
                  "coords": [
                        -75.746984,
                        45.39814
                  ]
            },
            {
                  "name": "McKellar Park",
                  "text": "McKellar Park ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.76556,
                        45.382997
                  ]
            },
            {
                  "name": "Maplelawn Historic Garden",
                  "text": "Maplelawn Historic Garden ist ein Garten im Bereich ca-parliament-hill, der als National Historic Site ausgewiesen ist.",
                  "category": "park",
                  "coords": [
                        -75.761353,
                        45.38839
                  ]
            },
            {
                  "name": "Salle Jean-Despréz",
                  "text": "Salle Jean-Despréz ist ein Theater im Bereich ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.711005,
                        45.4276
                  ]
            },
            {
                  "name": "Irving Greenberg Theatre Centre",
                  "text": "Irving Greenberg Theatre Centre ist ein Theater im Bereich ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.731878,
                        45.400071
                  ]
            },
            {
                  "name": "Protection of the Holy Virgin Memorial Church",
                  "text": "Protection of the Holy Virgin Memorial Church ist ein Gotteshaus im Bereich ca-parliament-hill.",
                  "category": "religious",
                  "coords": [
                        -75.727994,
                        45.407042
                  ]
            },
            {
                  "name": "Théâtre de l'Île",
                  "text": "Théâtre de l'Île ist ein Theater im Bereich ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.724699,
                        45.425569
                  ]
            },
            {
                  "name": "Centre culturel Jacques-Auger",
                  "text": "Centre culturel Jacques-Auger ist ein Kunstzentrum im Bereich ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.718506,
                        45.426744
                  ]
            },
            {
                  "name": "St. George's Parish",
                  "text": "St. George's Parish ist ein Gotteshaus im Bereich ca-parliament-hill.",
                  "category": "religious",
                  "coords": [
                        -75.739479,
                        45.39626
                  ]
            },
            {
                  "name": "Canadian United Pentecostal Church",
                  "text": "Canadian United Pentecostal Church ist ein Gotteshaus im Bereich ca-parliament-hill.",
                  "category": "religious",
                  "coords": [
                        -75.752318,
                        45.393091
                  ]
            },
            {
                  "name": "Lazy Bay",
                  "text": "Lazy Bay ist eine Bucht im Bereich ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.731131,
                        45.411142
                  ]
            },
            {
                  "name": "Nepean Bay",
                  "text": "Nepean Bay ist eine Bucht im Bereich ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.722158,
                        45.413965
                  ]
            },
            {
                  "name": "Chief William Commanda Bridge",
                  "text": "Chief William Commanda Bridge ist eine Brücke im Bereich ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.72592,
                        45.412631
                  ]
            },
            {
                  "name": "Pont de la Chaudière",
                  "text": "Chaudière Bridge ist eine Brücke im Bereich ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.718435,
                        45.421346
                  ]
            },
            {
                  "name": "Parc Allen",
                  "text": "Parc Allen ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.785319,
                        45.412339
                  ]
            },
            {
                  "name": "Parc Marcel-Chaput",
                  "text": "Parc Marcel-Chaput ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.76238,
                        45.420444
                  ]
            },
            {
                  "name": "Parc de Cherbourg",
                  "text": "Parc Vanier ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.806004,
                        45.386927
                  ]
            },
            {
                  "name": "Parc Lakeview",
                  "text": "Parc Lakeview ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.800165,
                        45.391569
                  ]
            },
            {
                  "name": "Parc des Trembles",
                  "text": "Parc des Trembles ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.768217,
                        45.427327
                  ]
            },
            {
                  "name": "Parc des Noisetiers",
                  "text": "Parc des Noisetiers ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.761392,
                        45.428337
                  ]
            },
            {
                  "name": "Parc Baker",
                  "text": "Baker Park ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.73045,
                        45.423187
                  ]
            },
            {
                  "name": "Parc Jean-Dallaire",
                  "text": "Parc Jean-Dallaire ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.727527,
                        45.426555
                  ]
            },
            {
                  "name": "Parc des Chars-de-Combat",
                  "text": "Parc des Chars-de-Combat ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.731913,
                        45.42652
                  ]
            },
            {
                  "name": "Parc Saint-Jean-Bosco",
                  "text": "Parc Saint-Jean-Bosco ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.732338,
                        45.428219
                  ]
            },
            {
                  "name": "Parc Sainte-Thérèse",
                  "text": "Parc Sainte-Thérèse ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.748593,
                        45.423736
                  ]
            },
            {
                  "name": "Parc Pharand",
                  "text": "Parc Pharand ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.739301,
                        45.424491
                  ]
            },
            {
                  "name": "Parc Brébeuf",
                  "text": "Parc Brébeuf ist ein Park im Bereich ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.744482,
                        45.417816
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Bank of Canada Museum",
                  "text": "Egy múzeum Ottawában, amely a kanadai pénz történetét mutatja be.",
                  "category": "museum",
                  "coords": [
                        -75.702062,
                        45.421506
                  ]
            },
            {
                  "name": "Canadian War Museum",
                  "text": "Kanada nemzeti katonai múzeuma Ottawában, amely a hadtörténetet dokumentálja.",
                  "category": "museum",
                  "coords": [
                        -75.717114,
                        45.417079
                  ]
            },
            {
                  "name": "St. Andrew's Presbyterian Church",
                  "text": "Ottawa egyik legrégebbi temploma, a presbiteri gyülekezet székhelye.",
                  "category": "religious",
                  "coords": [
                        -75.704038,
                        45.420501
                  ]
            },
            {
                  "name": "St. Peter's Evangelical Lutheran Church",
                  "text": "Egy történelmi evangélikus templom Ottawában.",
                  "category": "religious",
                  "coords": [
                        -75.70726,
                        45.418328
                  ]
            },
            {
                  "name": "Westminster Presbyterian Church",
                  "text": "Egy történelmi presbiteri templom Ottawa központjában.",
                  "category": "religious",
                  "coords": [
                        -75.755767,
                        45.388684
                  ]
            },
            {
                  "name": "Pont Champlain Bridge",
                  "text": "Egy híd Ottawában, amely az Ottawa folyón át Gatineau-ba vezet.",
                  "category": "landmark",
                  "coords": [
                        -75.759108,
                        45.40914
                  ]
            },
            {
                  "name": "Pont du Portage",
                  "text": "Egy fontos híd Ottawában, amely összeköti a várost Gatineau-val.",
                  "category": "landmark",
                  "coords": [
                        -75.713594,
                        45.422373
                  ]
            },
            {
                  "name": "Chaudière Falls",
                  "text": "Chaudière Falls egy kilátóhely a ca-parliament-hill területén, ismert a Ottawa folyó vízeséséről.",
                  "category": "natural",
                  "coords": [
                        -75.721474,
                        45.41942
                  ]
            },
            {
                  "name": "Bate Island",
                  "text": "Bate Island egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.756372,
                        45.408818
                  ]
            },
            {
                  "name": "Heather Crowe Park",
                  "text": "Heather Crowe Park egy park a ca-parliament-hill területén, amely a dohányzásellenes aktivista Heather Crowe-ról kapta a nevét.",
                  "category": "park",
                  "coords": [
                        -75.746984,
                        45.39814
                  ]
            },
            {
                  "name": "McKellar Park",
                  "text": "McKellar Park egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.76556,
                        45.382997
                  ]
            },
            {
                  "name": "Maplelawn Historic Garden",
                  "text": "Maplelawn Historic Garden egy kert a ca-parliament-hill területén, amely nemzeti történelmi helyszín.",
                  "category": "park",
                  "coords": [
                        -75.761353,
                        45.38839
                  ]
            },
            {
                  "name": "Salle Jean-Despréz",
                  "text": "Salle Jean-Despréz egy színház a ca-parliament-hill területén.",
                  "category": "cultural",
                  "coords": [
                        -75.711005,
                        45.4276
                  ]
            },
            {
                  "name": "Irving Greenberg Theatre Centre",
                  "text": "Irving Greenberg Theatre Centre egy színház a ca-parliament-hill területén.",
                  "category": "cultural",
                  "coords": [
                        -75.731878,
                        45.400071
                  ]
            },
            {
                  "name": "Protection of the Holy Virgin Memorial Church",
                  "text": "Protection of the Holy Virgin Memorial Church egy istentiszteleti hely a ca-parliament-hill területén.",
                  "category": "religious",
                  "coords": [
                        -75.727994,
                        45.407042
                  ]
            },
            {
                  "name": "Théâtre de l'Île",
                  "text": "Théâtre de l'Île egy színház a ca-parliament-hill területén.",
                  "category": "cultural",
                  "coords": [
                        -75.724699,
                        45.425569
                  ]
            },
            {
                  "name": "Centre culturel Jacques-Auger",
                  "text": "Centre culturel Jacques-Auger egy művészeti központ a ca-parliament-hill területén.",
                  "category": "cultural",
                  "coords": [
                        -75.718506,
                        45.426744
                  ]
            },
            {
                  "name": "St. George's Parish",
                  "text": "St. George's Parish egy istentiszteleti hely a ca-parliament-hill területén.",
                  "category": "religious",
                  "coords": [
                        -75.739479,
                        45.39626
                  ]
            },
            {
                  "name": "Canadian United Pentecostal Church",
                  "text": "Canadian United Pentecostal Church egy istentiszteleti hely a ca-parliament-hill területén.",
                  "category": "religious",
                  "coords": [
                        -75.752318,
                        45.393091
                  ]
            },
            {
                  "name": "Lazy Bay",
                  "text": "Lazy Bay egy öböl a ca-parliament-hill területén.",
                  "category": "landmark",
                  "coords": [
                        -75.731131,
                        45.411142
                  ]
            },
            {
                  "name": "Nepean Bay",
                  "text": "Nepean Bay egy öböl a ca-parliament-hill területén.",
                  "category": "landmark",
                  "coords": [
                        -75.722158,
                        45.413965
                  ]
            },
            {
                  "name": "Chief William Commanda Bridge",
                  "text": "Chief William Commanda Bridge egy híd a ca-parliament-hill területén.",
                  "category": "landmark",
                  "coords": [
                        -75.72592,
                        45.412631
                  ]
            },
            {
                  "name": "Pont de la Chaudière",
                  "text": "Chaudière Bridge egy híd a ca-parliament-hill területén.",
                  "category": "landmark",
                  "coords": [
                        -75.718435,
                        45.421346
                  ]
            },
            {
                  "name": "Parc Allen",
                  "text": "Parc Allen egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.785319,
                        45.412339
                  ]
            },
            {
                  "name": "Parc Marcel-Chaput",
                  "text": "Parc Marcel-Chaput egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.76238,
                        45.420444
                  ]
            },
            {
                  "name": "Parc de Cherbourg",
                  "text": "Parc Vanier egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.806004,
                        45.386927
                  ]
            },
            {
                  "name": "Parc Lakeview",
                  "text": "Parc Lakeview egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.800165,
                        45.391569
                  ]
            },
            {
                  "name": "Parc des Trembles",
                  "text": "Parc des Trembles egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.768217,
                        45.427327
                  ]
            },
            {
                  "name": "Parc des Noisetiers",
                  "text": "Parc des Noisetiers egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.761392,
                        45.428337
                  ]
            },
            {
                  "name": "Parc Baker",
                  "text": "Baker Park egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.73045,
                        45.423187
                  ]
            },
            {
                  "name": "Parc Jean-Dallaire",
                  "text": "Parc Jean-Dallaire egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.727527,
                        45.426555
                  ]
            },
            {
                  "name": "Parc des Chars-de-Combat",
                  "text": "Parc des Chars-de-Combat egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.731913,
                        45.42652
                  ]
            },
            {
                  "name": "Parc Saint-Jean-Bosco",
                  "text": "Parc Saint-Jean-Bosco egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.732338,
                        45.428219
                  ]
            },
            {
                  "name": "Parc Sainte-Thérèse",
                  "text": "Parc Sainte-Thérèse egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.748593,
                        45.423736
                  ]
            },
            {
                  "name": "Parc Pharand",
                  "text": "Parc Pharand egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.739301,
                        45.424491
                  ]
            },
            {
                  "name": "Parc Brébeuf",
                  "text": "Parc Brébeuf egy park a ca-parliament-hill területén.",
                  "category": "park",
                  "coords": [
                        -75.744482,
                        45.417816
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Bank of Canada Museum",
                  "text": "Un muzeu în Ottawa care prezintă istoria banilor canadieni.",
                  "category": "museum",
                  "coords": [
                        -75.702062,
                        45.421506
                  ]
            },
            {
                  "name": "Canadian War Museum",
                  "text": "Muzeul național de război al Canadei în Ottawa, care documentează istoria militară.",
                  "category": "museum",
                  "coords": [
                        -75.717114,
                        45.417079
                  ]
            },
            {
                  "name": "St. Andrew's Presbyterian Church",
                  "text": "Una dintre cele mai vechi biserici din Ottawa, sediul congregației prezbiteriene.",
                  "category": "religious",
                  "coords": [
                        -75.704038,
                        45.420501
                  ]
            },
            {
                  "name": "St. Peter's Evangelical Lutheran Church",
                  "text": "O biserică luterană istorică în Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.70726,
                        45.418328
                  ]
            },
            {
                  "name": "Westminster Presbyterian Church",
                  "text": "O biserică prezbiteriană istorică în centrul Ottawei.",
                  "category": "religious",
                  "coords": [
                        -75.755767,
                        45.388684
                  ]
            },
            {
                  "name": "Pont Champlain Bridge",
                  "text": "Un pod în Ottawa care traversează râul Ottawa spre Gatineau.",
                  "category": "landmark",
                  "coords": [
                        -75.759108,
                        45.40914
                  ]
            },
            {
                  "name": "Pont du Portage",
                  "text": "Un pod important în Ottawa care leagă orașul de Gatineau.",
                  "category": "landmark",
                  "coords": [
                        -75.713594,
                        45.422373
                  ]
            },
            {
                  "name": "Chaudière Falls",
                  "text": "Chaudière Falls este un punct de belvedere în zona ca-parliament-hill, cunoscut pentru cascadele sale pe râul Ottawa.",
                  "category": "natural",
                  "coords": [
                        -75.721474,
                        45.41942
                  ]
            },
            {
                  "name": "Bate Island",
                  "text": "Bate Island este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.756372,
                        45.408818
                  ]
            },
            {
                  "name": "Heather Crowe Park",
                  "text": "Heather Crowe Park este un parc în zona ca-parliament-hill numit după activista anti-fumat Heather Crowe.",
                  "category": "park",
                  "coords": [
                        -75.746984,
                        45.39814
                  ]
            },
            {
                  "name": "McKellar Park",
                  "text": "McKellar Park este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.76556,
                        45.382997
                  ]
            },
            {
                  "name": "Maplelawn Historic Garden",
                  "text": "Maplelawn Historic Garden este o grădină în zona ca-parliament-hill, desemnată sit istoric național.",
                  "category": "park",
                  "coords": [
                        -75.761353,
                        45.38839
                  ]
            },
            {
                  "name": "Salle Jean-Despréz",
                  "text": "Salle Jean-Despréz este un teatru în zona ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.711005,
                        45.4276
                  ]
            },
            {
                  "name": "Irving Greenberg Theatre Centre",
                  "text": "Irving Greenberg Theatre Centre este un teatru în zona ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.731878,
                        45.400071
                  ]
            },
            {
                  "name": "Protection of the Holy Virgin Memorial Church",
                  "text": "Protection of the Holy Virgin Memorial Church este un loc de închinare în zona ca-parliament-hill.",
                  "category": "religious",
                  "coords": [
                        -75.727994,
                        45.407042
                  ]
            },
            {
                  "name": "Théâtre de l'Île",
                  "text": "Théâtre de l'Île este un teatru în zona ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.724699,
                        45.425569
                  ]
            },
            {
                  "name": "Centre culturel Jacques-Auger",
                  "text": "Centre culturel Jacques-Auger este un centru de artă în zona ca-parliament-hill.",
                  "category": "cultural",
                  "coords": [
                        -75.718506,
                        45.426744
                  ]
            },
            {
                  "name": "St. George's Parish",
                  "text": "St. George's Parish este un loc de închinare în zona ca-parliament-hill.",
                  "category": "religious",
                  "coords": [
                        -75.739479,
                        45.39626
                  ]
            },
            {
                  "name": "Canadian United Pentecostal Church",
                  "text": "Canadian United Pentecostal Church este un loc de închinare în zona ca-parliament-hill.",
                  "category": "religious",
                  "coords": [
                        -75.752318,
                        45.393091
                  ]
            },
            {
                  "name": "Lazy Bay",
                  "text": "Lazy Bay este un golf în zona ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.731131,
                        45.411142
                  ]
            },
            {
                  "name": "Nepean Bay",
                  "text": "Nepean Bay este un golf în zona ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.722158,
                        45.413965
                  ]
            },
            {
                  "name": "Chief William Commanda Bridge",
                  "text": "Chief William Commanda Bridge este un pod în zona ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.72592,
                        45.412631
                  ]
            },
            {
                  "name": "Pont de la Chaudière",
                  "text": "Chaudière Bridge este un pod în zona ca-parliament-hill.",
                  "category": "landmark",
                  "coords": [
                        -75.718435,
                        45.421346
                  ]
            },
            {
                  "name": "Parc Allen",
                  "text": "Parc Allen este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.785319,
                        45.412339
                  ]
            },
            {
                  "name": "Parc Marcel-Chaput",
                  "text": "Parc Marcel-Chaput este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.76238,
                        45.420444
                  ]
            },
            {
                  "name": "Parc de Cherbourg",
                  "text": "Parc Vanier este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.806004,
                        45.386927
                  ]
            },
            {
                  "name": "Parc Lakeview",
                  "text": "Parc Lakeview este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.800165,
                        45.391569
                  ]
            },
            {
                  "name": "Parc des Trembles",
                  "text": "Parc des Trembles este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.768217,
                        45.427327
                  ]
            },
            {
                  "name": "Parc des Noisetiers",
                  "text": "Parc des Noisetiers este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.761392,
                        45.428337
                  ]
            },
            {
                  "name": "Parc Baker",
                  "text": "Baker Park este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.73045,
                        45.423187
                  ]
            },
            {
                  "name": "Parc Jean-Dallaire",
                  "text": "Parc Jean-Dallaire este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.727527,
                        45.426555
                  ]
            },
            {
                  "name": "Parc des Chars-de-Combat",
                  "text": "Parc des Chars-de-Combat este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.731913,
                        45.42652
                  ]
            },
            {
                  "name": "Parc Saint-Jean-Bosco",
                  "text": "Parc Saint-Jean-Bosco este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.732338,
                        45.428219
                  ]
            },
            {
                  "name": "Parc Sainte-Thérèse",
                  "text": "Parc Sainte-Thérèse este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.748593,
                        45.423736
                  ]
            },
            {
                  "name": "Parc Pharand",
                  "text": "Parc Pharand este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.739301,
                        45.424491
                  ]
            },
            {
                  "name": "Parc Brébeuf",
                  "text": "Parc Brébeuf este un parc în zona ca-parliament-hill.",
                  "category": "park",
                  "coords": [
                        -75.744482,
                        45.417816
                  ]
            }
      ],
      "en": [
            {
                  "name": "Bank of Canada Museum",
                  "text": "A museum in Ottawa showcasing the history of Canadian currency.",
                  "category": "museum",
                  "coords": [
                        -75.702062,
                        45.421506
                  ]
            },
            {
                  "name": "Canadian War Museum",
                  "text": "Canada's national war museum in Ottawa documenting military history.",
                  "category": "museum",
                  "coords": [
                        -75.717114,
                        45.417079
                  ]
            },
            {
                  "name": "St. Andrew's Presbyterian Church",
                  "text": "One of the oldest churches in Ottawa, home to the Presbyterian congregation.",
                  "category": "religious",
                  "coords": [
                        -75.704038,
                        45.420501
                  ]
            },
            {
                  "name": "St. Peter's Evangelical Lutheran Church",
                  "text": "A historic Lutheran church in Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.70726,
                        45.418328
                  ]
            },
            {
                  "name": "Westminster Presbyterian Church",
                  "text": "A historic Presbyterian church in downtown Ottawa.",
                  "category": "religious",
                  "coords": [
                        -75.755767,
                        45.388684
                  ]
            },
            {
                  "name": "Champlain Bridge",
                  "text": "A bridge in Ottawa crossing the Ottawa River to Gatineau.",
                  "category": "landmark",
                  "coords": [
                        -75.759108,
                        45.40914
                  ]
            },
            {
                  "name": "Portage Bridge",
                  "text": "A major bridge in Ottawa connecting to Gatineau.",
                  "category": "landmark",
                  "coords": [
                        -75.713594,
                        45.422373
                  ]
            },
            {
                  "name": "Chaudière Falls",
                  "text": "Chaudière Falls is a viewpoint in the ca-parliament-hill area, known for its waterfall on the Ottawa River.",
                  "category": "natural",
                  "coords": [
                        -75.721474,
                        45.41942
                  ]
            },
            {
                  "name": "Bate Island",
                  "text": "Bate Island is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.756372,
                        45.408818
                  ]
            },
            {
                  "name": "Heather Crowe Park",
                  "text": "Heather Crowe Park is a park in the ca-parliament-hill area named after the anti-smoking activist Heather Crowe.",
                  "category": "park",
                  "coords": [
                        -75.746984,
                        45.39814
                  ]
            },
            {
                  "name": "McKellar Park",
                  "text": "McKellar Park is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.76556,
                        45.382997
                  ]
            },
            {
                  "name": "Maplelawn Historic Garden",
                  "text": "Maplelawn Historic Garden is a garden in the ca-parliament-hill area, designated a National Historic Site.",
                  "category": "park",
                  "coords": [
                        -75.761353,
                        45.38839
                  ]
            },
            {
                  "name": "Salle Jean-Despréz",
                  "text": "Salle Jean-Despréz is a theatre in the ca-parliament-hill area.",
                  "category": "cultural",
                  "coords": [
                        -75.711005,
                        45.4276
                  ]
            },
            {
                  "name": "Irving Greenberg Theatre Centre",
                  "text": "Irving Greenberg Theatre Centre is a theatre in the ca-parliament-hill area.",
                  "category": "cultural",
                  "coords": [
                        -75.731878,
                        45.400071
                  ]
            },
            {
                  "name": "Protection of the Holy Virgin Memorial Church",
                  "text": "Protection of the Holy Virgin Memorial Church is a place of worship in the ca-parliament-hill area.",
                  "category": "religious",
                  "coords": [
                        -75.727994,
                        45.407042
                  ]
            },
            {
                  "name": "Théâtre de l'Île",
                  "text": "Théâtre de l'Île is a theatre in the ca-parliament-hill area.",
                  "category": "cultural",
                  "coords": [
                        -75.724699,
                        45.425569
                  ]
            },
            {
                  "name": "Centre culturel Jacques-Auger",
                  "text": "Centre culturel Jacques-Auger is an arts centre in the ca-parliament-hill area.",
                  "category": "cultural",
                  "coords": [
                        -75.718506,
                        45.426744
                  ]
            },
            {
                  "name": "St. George's Parish",
                  "text": "St. George's Parish is a place of worship in the ca-parliament-hill area.",
                  "category": "religious",
                  "coords": [
                        -75.739479,
                        45.39626
                  ]
            },
            {
                  "name": "Canadian United Pentecostal Church",
                  "text": "Canadian United Pentecostal Church is a place of worship in the ca-parliament-hill area.",
                  "category": "religious",
                  "coords": [
                        -75.752318,
                        45.393091
                  ]
            },
            {
                  "name": "Lazy Bay",
                  "text": "Lazy Bay is a bay in the ca-parliament-hill area.",
                  "category": "landmark",
                  "coords": [
                        -75.731131,
                        45.411142
                  ]
            },
            {
                  "name": "Nepean Bay",
                  "text": "Nepean Bay is a bay in the ca-parliament-hill area.",
                  "category": "landmark",
                  "coords": [
                        -75.722158,
                        45.413965
                  ]
            },
            {
                  "name": "Chief William Commanda Bridge",
                  "text": "Chief William Commanda Bridge is a bridge in the ca-parliament-hill area.",
                  "category": "landmark",
                  "coords": [
                        -75.72592,
                        45.412631
                  ]
            },
            {
                  "name": "Chaudière Bridge",
                  "text": "Chaudière Bridge is a bridge in the ca-parliament-hill area.",
                  "category": "landmark",
                  "coords": [
                        -75.718435,
                        45.421346
                  ]
            },
            {
                  "name": "Parc Allen",
                  "text": "Parc Allen is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.785319,
                        45.412339
                  ]
            },
            {
                  "name": "Parc Marcel-Chaput",
                  "text": "Parc Marcel-Chaput is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.76238,
                        45.420444
                  ]
            },
            {
                  "name": "Parc Vanier",
                  "text": "Parc Vanier is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.806004,
                        45.386927
                  ]
            },
            {
                  "name": "Parc Lakeview",
                  "text": "Parc Lakeview is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.800165,
                        45.391569
                  ]
            },
            {
                  "name": "Parc des Trembles",
                  "text": "Parc des Trembles is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.768217,
                        45.427327
                  ]
            },
            {
                  "name": "Parc des Noisetiers",
                  "text": "Parc des Noisetiers is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.761392,
                        45.428337
                  ]
            },
            {
                  "name": "Baker Park",
                  "text": "Baker Park is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.73045,
                        45.423187
                  ]
            },
            {
                  "name": "Parc Jean-Dallaire",
                  "text": "Parc Jean-Dallaire is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.727527,
                        45.426555
                  ]
            },
            {
                  "name": "Parc des Chars-de-Combat",
                  "text": "Parc des Chars-de-Combat is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.731913,
                        45.42652
                  ]
            },
            {
                  "name": "Parc Saint-Jean-Bosco",
                  "text": "Parc Saint-Jean-Bosco is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.732338,
                        45.428219
                  ]
            },
            {
                  "name": "Parc Sainte-Thérèse",
                  "text": "Parc Sainte-Thérèse is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.748593,
                        45.423736
                  ]
            },
            {
                  "name": "Parc Pharand",
                  "text": "Parc Pharand is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.739301,
                        45.424491
                  ]
            },
            {
                  "name": "Parc Brébeuf",
                  "text": "Parc Brébeuf is a park in the ca-parliament-hill area.",
                  "category": "park",
                  "coords": [
                        -75.744482,
                        45.417816
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CA",
    coords: [-75.7009, 45.4236],
    name: { de: "Parliament Hill", hu: "Parlament-domb", ro: "Dealul Parlamentului", en: "Parliament Hill" },
    description: { de: "Der Sitz des kanadischen Parlaments in Ottawa.", hu: "A kanadai parlament székhelye Ottawában.", ro: "Sediul Parlamentului Canadei din Ottawa.", en: "The seat of Canada's federal government in Ottawa." , es: "La sede del Parlamento canadiense en Ottawa.", pt: "A sede do Parlamento canadiano em Otava.", fr: "Le siège du Parlement canadien à Ottawa."},
    descriptionAdvanced: {
      de: "Parliament Hill ist das politische und kulturelle Herz Kanadas und beherbergt die Parlamentsgebäude in der Hauptstadt Ottawa. Die Gebäude im neugotischen Stil wurden ab 1859 auf einem markanten Kalksteinfelsen über dem Ottawa River errichtet, einer Stelle, die ursprünglich als Militärbaracken diente. Das markanteste Merkmal ist der Centre Block mit dem 92,2 Meter hohen Peace Tower, der an die Opfer des Ersten Weltkriegs erinnert. Ein verheerendes Feuer im Jahr 1916 zerstörte den ursprünglichen Centre Block fast vollständig, wobei nur die wunderschöne Library of Parliament dank ihrer Eisentüren gerettet werden konnte. Der Ort ist Schauplatz bedeutender nationaler Zeremonien wie dem Wachwechsel und den Feierlichkeiten zum Canada Day. Parliament Hill symbolisiert die demokratischen Werte Kanadas und dient als Treffpunkt für Bürger aus dem ganzen Land. Das Gelände umfasst auch zahlreiche Denkmäler für wichtige historische Persönlichkeiten, darunter Königin Victoria und die Famous Five. Aktuell findet eine umfassende, jahrzehntelange Renovierung statt, um die strukturelle Integrität des Ensembles für zukünftige Generationen zu sichern.",
      hu: "A Parliament Hill (Parlament-domb) Kanada politikai és kulturális központja, ahol a főváros, Ottawa törvényhozási épületei találhatók. A neogótikus stílusú épületegyüttest 1859-től kezdték építeni egy kiemelkedő mészkősziklán az Ottawa-folyó felett, egy olyan helyen, amely korábban katonai laktanyaként szolgált. A leglátványosabb elem a Középső Épület (Centre Block) és a 92,2 méter magas Béketorony (Peace Tower), amely az első világháború áldozatainak állít emléket. 1916-ban egy pusztító tűzvész szinte teljesen megsemmisítette az eredeti Középső Épületet, amelyből csak a gyönyörű Parlamenti Könyvtár menekült meg a vaskapuinak köszönhetően. A domb fontos nemzeti ceremóniák helyszíne, mint például az őrségváltás vagy a Kanadai Nap (Canada Day) ünnepségei. A Parliament Hill Kanada demokratikus értékeinek jelképe, és az egész országból érkező polgárok találkozóhelye. A terület számos emlékművet foglal magában, többek között Viktória királynő és a „Híres Ötök” tiszteletére. Jelenleg nagyszabású, több évtizedes felújítás zajlik, hogy megőrizzék az épületek szerkezeti épségét a jövő nemzedékei számára.",
      ro: "Parliament Hill este inima politică și culturală a Canadei, găzduind clădirile Parlamentului în capitala Ottawa. Construite în stil neogotic începând cu 1859, clădirile sunt amplasate pe o colină calcaroasă proeminentă deasupra râului Ottawa, loc ce a servit inițial drept barăci militare. Cea mai faimoasă trăsătură este Blocul Central cu Turnul Păcii, înalt de 92,2 metri, care comemorează sacrificiile din Primul Război Mondial. Un incendiu devastator în 1916 a distrus aproape complet Blocul Central original, singura parte salvată fiind spectaculoasa Bibliotecă a Parlamentului datorită ușilor sale de fier. Locul este scena unor ceremonii naționale majore, cum ar fi Schimbarea Gărzii și festivitățile de Ziua Canadei. Parliament Hill simbolizează valorile democratice ale țării și servește ca loc de întâlnire pentru cetățeni. Complexul include numeroase monumente dedicate personalităților istorice, precum Regina Victoria și grupul „Famous Five”. În prezent, situl trece printr-o renovare masivă ce va dura decenii pentru a asigura integritatea sa structurală pe termen lung.",
      en: "Parliament Hill is the political and cultural heart of Canada, housing the nation's legislature in the capital city of Ottawa. The Neo-Gothic buildings were constructed starting in 1859 on a prominent limestone bluff overlooking the Ottawa River, a site that originally served as military barracks. The most prominent feature is the Centre Block, which includes the 92.2-meter-high Peace Tower, a memorial to the sacrifices of World War I. A devastating fire in 1916 almost completely destroyed the original Centre Block, with only the beautiful Library of Parliament being saved thanks to its heavy iron doors. The site is the stage for major national ceremonies, such as the Changing of the Guard and Canada Day celebrations. Parliament Hill symbolizes Canada's democratic values and serves as a gathering place for citizens from across the country. The grounds also feature numerous monuments to key historical figures, including Queen Victoria and the Famous Five. A massive, decades-long restoration project is currently underway to preserve the structural integrity of the complex for future generations.",
      es: "Parliament Hill es el corazón político y cultural de Canadá, situado sobre un acantilado que domina el río Ottawa. Los edificios de estilo neogótico, presididos por la imponente Torre de la Paz, albergan la Cámara de los Comunes y el Senado, y son escenario de importantes ceremonias nacionales.",
      pt: "Parliament Hill é o coração político e cultural do Canadá, situado numa arriba sobre o rio Otava. Os edifícios de estilo neogótico, dominados pela imponente Torre da Paz, acolhem a Câmara dos Comuns e o Senado e são palco de importantes cerimónias nacionais.",
      fr: "Parliament Hill est le cœur politique et culturel du Canada, situé sur une falaise surplombant la rivière des Outaouais. Les bâtiments de style néogothique, dominés par l'imposante tour de la Paix, abritent la Chambre des communes et le Sénat, et sont le théâtre de grandes cérémonies nationales.",
    },
    factsAdvanced: {
      de: ["Baubeginn im Jahr 1859", "Peace Tower ist 92,2 m hoch", "Zerstörerisches Feuer im Jahr 1916", "Library of Parliament blieb erhalten", "Befindet sich auf einem Kalksteinfelsen", "Sitz des Senats und des Unterhauses"],
      hu: ["Az építés 1859-ben kezdődött", "A Béketorony 92,2 méter magas", "1916-ban nagy tűzvész pusztított", "A könyvtár az egyetlen eredeti rész", "Egy mészkőszikla tetején fekszik", "A Szenátus és a Képviselőház székhelye"],
      ro: ["Construcția a început în 1859", "Turnul Păcii are 92,2 metri înălțime", "Incendiu major în anul 1916", "Biblioteca este singura parte originală", "Situat pe o colină de calcar", "Sediul Senatului și al Camerei Comunelor"],
      en: ["Construction began in 1859", "Peace Tower is 92.2 meters high", "Devastating fire occurred in 1916", "Library is the only original part", "Located on a limestone bluff", "Home to the Senate and House of Commons"],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Sitz der Bundesregierung", "Neugotische Architektur", "Peace Tower (Béke-torony)", "Changing of the Guard Zeremonie"], hu: ["A szövetségi kormány székhelye", "Neogótikus építészet", "Itt található a Béke-torony", "Őrségváltási ceremónia helyszíne"], ro: ["Sediul guvernului federal", "Arhitectură neogotică", "Turnul Păcii (Peace Tower)", "Ceremonia de schimbare a gărzii"], en: ["Seat of the federal government", "Gothic Revival architecture", "Home to the Peace Tower", "Changing of the Guard ceremony site"] , es: ["Sede del gobierno federal", "Arquitectura neogótica", "Torre de la Paz", "Ceremonia del Cambio de Guardia"], pt: ["Sede do governo federal", "Arquitetura neogótica", "Torre da Paz", "Cerimónia do Render da Guarda"], fr: ["Siège du gouvernement fédéral", "Architecture néogothique", "Tour de la Paix", "Cérémonie de la relève de la garde"]},
    elevation: 85, historyYear: 1859, historyPeriod: "Victorian Era", image: "/poi-images/ca-parliament-hill.webp"},
  {
    id: "ca-hopewell-rocks", "sights": {
      "de": [
            {
                  "name": "Fillmore Hill",
                  "text": "Der Fillmore Hill ist ein Gipfel in der Nähe der Hopewell Rocks.",
                  "category": "natural",
                  "coords": [
                        -64.52624,
                        45.850763
                  ]
            },
            {
                  "name": "Big Cove Lookout",
                  "text": "Der Big Cove Lookout bietet einen Aussichtspunkt über das Gebiet der Hopewell Rocks.",
                  "category": "natural",
                  "coords": [
                        -64.574986,
                        45.818325
                  ]
            },
            {
                  "name": "Baymount Outdoor Adventures",
                  "text": "Baymount Outdoor Adventures bietet Outdoor-Aktivitäten in der Nähe der Hopewell Rocks.",
                  "category": "landmark",
                  "coords": [
                        -64.573663,
                        45.823445
                  ]
            },
            {
                  "name": "Flower Pot Rocks",
                  "text": "Die Flower Pot Rocks sind ikonische, durch Meereserosion geformte Felsformationen an den Hopewell Rocks.",
                  "category": "landmark",
                  "coords": [
                        -64.5723,
                        45.822029
                  ]
            },
            {
                  "name": "Seawall Beach",
                  "text": "Seawall Beach ist ein Strand in Hopewell Rocks, der zum Schwimmen und Sonnenbaden einlädt.",
                  "category": "recreational",
                  "coords": [
                        -64.57155,
                        45.827808
                  ]
            },
            {
                  "name": "hopewell rocks park",
                  "text": "Hopewell Rocks Park ist eine Attraktion in Hopewell Rocks, die Besucher anzieht.",
                  "category": "landmark",
                  "coords": [
                        -64.575445,
                        45.8229
                  ]
            },
            {
                  "name": "Hopewell Rocks",
                  "text": "Hopewell Rocks ist eine Attraktion in Hopewell Rocks, die für ihre Felsformationen bekannt ist.",
                  "category": "landmark",
                  "coords": [
                        -64.576505,
                        45.817006
                  ]
            },
            {
                  "name": "Diamond Rock",
                  "text": "Diamond Rock ist ein Aussichtspunkt in Hopewell Rocks mit einem Panoramablick.",
                  "category": "natural",
                  "coords": [
                        -64.577487,
                        45.815656
                  ]
            },
            {
                  "name": "Daniels Flats",
                  "text": "Daniels Flats ist ein Aussichtspunkt in Hopewell Rocks mit einem malerischen Ausblick.",
                  "category": "natural",
                  "coords": [
                        -64.578827,
                        45.815986
                  ]
            },
            {
                  "name": "Shepody Mountain",
                  "text": "Shepody Mountain ist ein Gipfel in Hopewell Rocks, der eine herausragende Erhebung darstellt.",
                  "category": "natural",
                  "coords": [
                        -64.63963,
                        45.799307
                  ]
            },
            {
                  "name": "Fort Folly Habitat Recovery",
                  "text": "Fort Folly Habitat Recovery ist eine Attraktion in Hopewell Rocks, die sich dem Lebensraumschutz widmet.",
                  "category": "landmark",
                  "coords": [
                        -64.49567,
                        45.892353
                  ]
            },
            {
                  "name": "Keillor House",
                  "text": "Keillor House ist ein Museum in Hopewell Rocks, das historische Exponate zeigt.",
                  "category": "museum",
                  "coords": [
                        -64.516483,
                        45.900804
                  ]
            },
            {
                  "name": "North Beach",
                  "text": "North Beach ist ein Strand in Hopewell Rocks, der zum Baden einlädt.",
                  "category": "recreational",
                  "coords": [
                        -64.572725,
                        45.825527
                  ]
            },
            {
                  "name": "Demoiselles Beach",
                  "text": "Demoiselles Beach ist ein Strand in Hopewell Rocks, der für seinen Sand bekannt ist.",
                  "category": "recreational",
                  "coords": [
                        -64.582536,
                        45.816104
                  ]
            },
            {
                  "name": "Wilson Brook Protected Natural Area",
                  "text": "Wilson Brook Protected Natural Area ist ein Naturschutzgebiet in Hopewell Rocks, das die Natur bewahrt.",
                  "category": "natural",
                  "coords": [
                        -64.673759,
                        45.859448
                  ]
            },
            {
                  "name": "Albert County Museum",
                  "text": "Albert County Museum ist ein Museum in Hopewell Rocks, das die lokale Geschichte zeigt.",
                  "category": "museum",
                  "coords": [
                        -64.578153,
                        45.848822
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Fillmore Hill",
                  "text": "A Fillmore Hill egy csúcs a Hopewell Rocks közelében.",
                  "category": "natural",
                  "coords": [
                        -64.52624,
                        45.850763
                  ]
            },
            {
                  "name": "Big Cove Lookout",
                  "text": "A Big Cove Lookout kilátópontot kínál a Hopewell Rocks területére.",
                  "category": "natural",
                  "coords": [
                        -64.574986,
                        45.818325
                  ]
            },
            {
                  "name": "Baymount Outdoor Adventures",
                  "text": "A Baymount Outdoor Adventures szabadtéri tevékenységeket kínál a Hopewell Rocks közelében.",
                  "category": "landmark",
                  "coords": [
                        -64.573663,
                        45.823445
                  ]
            },
            {
                  "name": "Flower Pot Rocks",
                  "text": "A Flower Pot Rocks ikonikus, tengeri erózió által formált sziklaképződmények a Hopewell Rocks-nál.",
                  "category": "landmark",
                  "coords": [
                        -64.5723,
                        45.822029
                  ]
            },
            {
                  "name": "Seawall Beach",
                  "text": "A Seawall Beach egy strand Hopewell Rocksban, amely úszásra és napozásra csábít.",
                  "category": "recreational",
                  "coords": [
                        -64.57155,
                        45.827808
                  ]
            },
            {
                  "name": "hopewell rocks park",
                  "text": "A Hopewell Rocks Park egy látványosság Hopewell Rocksban, amely vonzza a látogatókat.",
                  "category": "landmark",
                  "coords": [
                        -64.575445,
                        45.8229
                  ]
            },
            {
                  "name": "Hopewell Rocks",
                  "text": "A Hopewell Rocks egy látványosság Hopewell Rocksban, amely sziklaformációiról ismert.",
                  "category": "landmark",
                  "coords": [
                        -64.576505,
                        45.817006
                  ]
            },
            {
                  "name": "Diamond Rock",
                  "text": "A Diamond Rock egy kilátópont Hopewell Rocksban, panorámás kilátással.",
                  "category": "natural",
                  "coords": [
                        -64.577487,
                        45.815656
                  ]
            },
            {
                  "name": "Daniels Flats",
                  "text": "A Daniels Flats egy kilátópont Hopewell Rocksban, festői kilátással.",
                  "category": "natural",
                  "coords": [
                        -64.578827,
                        45.815986
                  ]
            },
            {
                  "name": "Shepody Mountain",
                  "text": "A Shepody Mountain egy csúcs Hopewell Rocksban, amely kiemelkedő magaslat.",
                  "category": "natural",
                  "coords": [
                        -64.63963,
                        45.799307
                  ]
            },
            {
                  "name": "Fort Folly Habitat Recovery",
                  "text": "A Fort Folly Habitat Recovery egy látványosság Hopewell Rocksban, amely az élőhelyvédelemre összpontosít.",
                  "category": "landmark",
                  "coords": [
                        -64.49567,
                        45.892353
                  ]
            },
            {
                  "name": "Keillor House",
                  "text": "A Keillor House egy múzeum Hopewell Rocksban, amely történelmi kiállításokat mutat be.",
                  "category": "museum",
                  "coords": [
                        -64.516483,
                        45.900804
                  ]
            },
            {
                  "name": "North Beach",
                  "text": "A North Beach egy strand Hopewell Rocksban, amely fürdőzésre csábít.",
                  "category": "recreational",
                  "coords": [
                        -64.572725,
                        45.825527
                  ]
            },
            {
                  "name": "Demoiselles Beach",
                  "text": "A Demoiselles Beach egy strand Hopewell Rocksban, amely homokjáról ismert.",
                  "category": "recreational",
                  "coords": [
                        -64.582536,
                        45.816104
                  ]
            },
            {
                  "name": "Wilson Brook Protected Natural Area",
                  "text": "A Wilson Brook Protected Natural Area egy természetvédelmi terület Hopewell Rocksban, amely megőrzi a természetet.",
                  "category": "natural",
                  "coords": [
                        -64.673759,
                        45.859448
                  ]
            },
            {
                  "name": "Albert County Museum",
                  "text": "Az Albert County Museum egy múzeum Hopewell Rocksban, amely a helyi történelmet mutatja be.",
                  "category": "museum",
                  "coords": [
                        -64.578153,
                        45.848822
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Fillmore Hill",
                  "text": "Fillmore Hill este un vârf lângă Stâncile Hopewell.",
                  "category": "natural",
                  "coords": [
                        -64.52624,
                        45.850763
                  ]
            },
            {
                  "name": "Big Cove Lookout",
                  "text": "Priveliștea Big Cove oferă un punct de belvedere asupra zonei Stâncilor Hopewell.",
                  "category": "natural",
                  "coords": [
                        -64.574986,
                        45.818325
                  ]
            },
            {
                  "name": "Baymount Outdoor Adventures",
                  "text": "Baymount Outdoor Adventures oferă activități în aer liber lângă Stâncile Hopewell.",
                  "category": "landmark",
                  "coords": [
                        -64.573663,
                        45.823445
                  ]
            },
            {
                  "name": "Flower Pot Rocks",
                  "text": "Stâncile Flower Pot sunt formațiuni stâncoase iconice modelate de eroziunea marină la Stâncile Hopewell.",
                  "category": "landmark",
                  "coords": [
                        -64.5723,
                        45.822029
                  ]
            },
            {
                  "name": "Seawall Beach",
                  "text": "Plaja Seawall Beach este o plajă din Hopewell Rocks, care invită la înot și plajă.",
                  "category": "recreational",
                  "coords": [
                        -64.57155,
                        45.827808
                  ]
            },
            {
                  "name": "hopewell rocks park",
                  "text": "Hopewell Rocks Park este o atracție din Hopewell Rocks, care atrage vizitatorii.",
                  "category": "landmark",
                  "coords": [
                        -64.575445,
                        45.8229
                  ]
            },
            {
                  "name": "Hopewell Rocks",
                  "text": "Hopewell Rocks este o atracție din Hopewell Rocks, cunoscută pentru formațiunile sale stâncoase.",
                  "category": "landmark",
                  "coords": [
                        -64.576505,
                        45.817006
                  ]
            },
            {
                  "name": "Diamond Rock",
                  "text": "Diamond Rock este un punct de belvedere din Hopewell Rocks, cu o vedere panoramică.",
                  "category": "natural",
                  "coords": [
                        -64.577487,
                        45.815656
                  ]
            },
            {
                  "name": "Daniels Flats",
                  "text": "Daniels Flats este un punct de belvedere din Hopewell Rocks, cu o priveliște pitorească.",
                  "category": "natural",
                  "coords": [
                        -64.578827,
                        45.815986
                  ]
            },
            {
                  "name": "Shepody Mountain",
                  "text": "Shepody Mountain este un vârf din Hopewell Rocks, reprezentând o înălțime proeminentă.",
                  "category": "natural",
                  "coords": [
                        -64.63963,
                        45.799307
                  ]
            },
            {
                  "name": "Fort Folly Habitat Recovery",
                  "text": "Fort Folly Habitat Recovery este o atracție din Hopewell Rocks, dedicată protejării habitatelor.",
                  "category": "landmark",
                  "coords": [
                        -64.49567,
                        45.892353
                  ]
            },
            {
                  "name": "Keillor House",
                  "text": "Keillor House este un muzeu din Hopewell Rocks, care expune obiecte istorice.",
                  "category": "museum",
                  "coords": [
                        -64.516483,
                        45.900804
                  ]
            },
            {
                  "name": "North Beach",
                  "text": "North Beach este o plajă din Hopewell Rocks, care invită la scăldat.",
                  "category": "recreational",
                  "coords": [
                        -64.572725,
                        45.825527
                  ]
            },
            {
                  "name": "Demoiselles Beach",
                  "text": "Demoiselles Beach este o plajă din Hopewell Rocks, cunoscută pentru nisipul său.",
                  "category": "recreational",
                  "coords": [
                        -64.582536,
                        45.816104
                  ]
            },
            {
                  "name": "Wilson Brook Protected Natural Area",
                  "text": "Wilson Brook Protected Natural Area este o rezervație naturală din Hopewell Rocks, care protejează natura.",
                  "category": "natural",
                  "coords": [
                        -64.673759,
                        45.859448
                  ]
            },
            {
                  "name": "Albert County Museum",
                  "text": "Albert County Museum este un muzeu din Hopewell Rocks, care ilustrează istoria locală.",
                  "category": "museum",
                  "coords": [
                        -64.578153,
                        45.848822
                  ]
            }
      ],
      "en": [
            {
                  "name": "Fillmore Hill",
                  "text": "Fillmore Hill is a peak near the Hopewell Rocks.",
                  "category": "natural",
                  "coords": [
                        -64.52624,
                        45.850763
                  ]
            },
            {
                  "name": "Big Cove Lookout",
                  "text": "Big Cove Lookout offers a viewpoint over the Hopewell Rocks area.",
                  "category": "natural",
                  "coords": [
                        -64.574986,
                        45.818325
                  ]
            },
            {
                  "name": "Baymount Outdoor Adventures",
                  "text": "Baymount Outdoor Adventures offers outdoor activities near Hopewell Rocks.",
                  "category": "landmark",
                  "coords": [
                        -64.573663,
                        45.823445
                  ]
            },
            {
                  "name": "Flower Pot Rocks",
                  "text": "Flower Pot Rocks are iconic sea-eroded rock formations at Hopewell Rocks.",
                  "category": "landmark",
                  "coords": [
                        -64.5723,
                        45.822029
                  ]
            },
            {
                  "name": "Seawall Beach",
                  "text": "Seawall Beach is a beach in Hopewell Rocks, offering swimming and sunbathing.",
                  "category": "recreational",
                  "coords": [
                        -64.57155,
                        45.827808
                  ]
            },
            {
                  "name": "hopewell rocks park",
                  "text": "Hopewell Rocks Park is an attraction in Hopewell Rocks that draws visitors.",
                  "category": "landmark",
                  "coords": [
                        -64.575445,
                        45.8229
                  ]
            },
            {
                  "name": "Hopewell Rocks",
                  "text": "Hopewell Rocks is an attraction in Hopewell Rocks known for its rock formations.",
                  "category": "landmark",
                  "coords": [
                        -64.576505,
                        45.817006
                  ]
            },
            {
                  "name": "Diamond Rock",
                  "text": "Diamond Rock is a viewpoint in Hopewell Rocks offering panoramic views.",
                  "category": "natural",
                  "coords": [
                        -64.577487,
                        45.815656
                  ]
            },
            {
                  "name": "Daniels Flats",
                  "text": "Daniels Flats is a viewpoint in Hopewell Rocks with scenic vistas.",
                  "category": "natural",
                  "coords": [
                        -64.578827,
                        45.815986
                  ]
            },
            {
                  "name": "Shepody Mountain",
                  "text": "Shepody Mountain is a peak in Hopewell Rocks, a prominent elevation.",
                  "category": "natural",
                  "coords": [
                        -64.63963,
                        45.799307
                  ]
            },
            {
                  "name": "Fort Folly Habitat Recovery",
                  "text": "Fort Folly Habitat Recovery is an attraction in Hopewell Rocks focused on habitat conservation.",
                  "category": "landmark",
                  "coords": [
                        -64.49567,
                        45.892353
                  ]
            },
            {
                  "name": "Keillor House",
                  "text": "Keillor House is a museum in Hopewell Rocks displaying historical exhibits.",
                  "category": "museum",
                  "coords": [
                        -64.516483,
                        45.900804
                  ]
            },
            {
                  "name": "North Beach",
                  "text": "North Beach is a beach in Hopewell Rocks, inviting for swimming.",
                  "category": "recreational",
                  "coords": [
                        -64.572725,
                        45.825527
                  ]
            },
            {
                  "name": "Demoiselles Beach",
                  "text": "Demoiselles Beach is a beach in Hopewell Rocks known for its sand.",
                  "category": "recreational",
                  "coords": [
                        -64.582536,
                        45.816104
                  ]
            },
            {
                  "name": "Wilson Brook Protected Natural Area",
                  "text": "Wilson Brook Protected Natural Area is a nature reserve in Hopewell Rocks, preserving the natural environment.",
                  "category": "natural",
                  "coords": [
                        -64.673759,
                        45.859448
                  ]
            },
            {
                  "name": "Albert County Museum",
                  "text": "Albert County Museum is a museum in Hopewell Rocks showcasing local history.",
                  "category": "museum",
                  "coords": [
                        -64.578153,
                        45.848822
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CA",
    coords: [-64.5746, 45.8236],
    name: { de: "Hopewell Rocks", hu: "Hopewell Rocks", ro: "Stâncile Hopewell", en: "Hopewell Rocks" },
    description: { de: "Bekannt für ihre ungewöhnlichen Formen durch die Gezeiten der Bay of Fundy.", hu: "A Bay of Fundy árapálya által formált sziklák.", ro: "Cunoscute pentru formele lor neobișnuite create de mareele din Golful Fundy.", en: "Known for its unusual rock formations shaped by tidal erosion." , es: "Conocidas por sus formas inusuales causadas por las mareas de la bahía de Fundy.", pt: "Conhecidas pelas suas formas invulgares causadas pelas marés da Baía de Fundy.", fr: "Connues pour leurs formes inhabituelles sculptées par les marées de la baie de Fundy."},
    descriptionAdvanced: {
      de: "Die Hopewell Rocks, auch bekannt als Flowerpot Rocks, befinden sich am Ufer der Bay of Fundy in der kanadischen Provinz New Brunswick. Diese markanten geologischen Formationen wurden über Millionen von Jahren durch die extremen Gezeiten der Bucht geformt, die mit bis zu 16 Metern den höchsten Tidenhub der Welt aufweisen. Zweimal täglich fließen gewaltige Wassermassen in die Bucht und ziehen sich wieder zurück, wodurch die Basis der Felsen kontinuierlich erodiert wird. Bei Ebbe können Besucher auf dem Meeresboden wandern und die gewaltigen Ausmaße der aus Sedimentgestein bestehenden Formationen aus nächster Nähe betrachten. Die charakteristische Form der Felsen, die oben oft mit Bäumen bewachsen sind, gab ihnen den Namen Blumentopffelsen. Dieses Naturphänomen ist Teil des Hopewell Rocks Provincial Park und zieht jährlich Hunderttausende Touristen an, die die dynamische Kraft der Natur erleben möchten. Wissenschaftlich gesehen bietet der Ort wichtige Einblicke in die Erosion von Küstenlinien und die geologischen Prozesse des Karbons vor etwa 300 Millionen Jahren.",
      hu: "A Hopewell-sziklák, más néven Virágcserép-sziklák, Új-Brunswick tartományban, a Fundy-öböl partján találhatók. Ezeket a különleges geológiai képződményeket évmilliók alatt formálta ki az öböl rendkívüli árapály-jelensége, amely a világon a legmagasabb, akár a 16 métert is elérheti. Naponta kétszer hatalmas víztömegek öntik el, majd hagyják el a területet, folyamatosan erodálva a sziklák alapját és létrehozva azok jellegzetes, alul elvékonyodó alakját. Apálykor a látogatók a tengerfenéken sétálhatnak a monumentális üledékes kőzettornyok között, amelyek tetején gyakran fenyőfák nőnek. A sziklák vöröses színe a magas vastartalomnak köszönhető, és a terület fontos lelőhelye a karbon időszaki kövületeknek is. A Hopewell Rocks Provincial Park nemcsak turisztikai látványosság, hanem kulcsfontosságú ökoszisztéma a vándormadarak számára is, amelyek az öböl tápanyagban gazdag iszapfelületein táplálkoznak. A helyszín kiválóan szemlélteti az óceán pusztító és építő erejének folyamatos kölcsönhatását az atlanti partvidéken.",
      ro: "Stâncile Hopewell, cunoscute și sub numele de Flowerpot Rocks, sunt situate pe malul Golfului Fundy în provincia canadiană New Brunswick. Aceste formațiuni geologice remarcabile au fost sculptate de-a lungul milioanelor de ani de mareele extreme ale golfului, care sunt cele mai înalte din lume, atingând o amplitudine de până la 16 metri. De două ori pe zi, volume imense de apă inundă și apoi se retrag din golf, erodând baza stâncilor de gresie și conglomerat. În timpul refluxului, vizitatorii pot merge pe fundul oceanului printre coloanele gigantice de piatră care par să sfideze gravitația. Forma caracteristică a stâncilor, cu vegetație în vârf, le oferă aspectul unor ghivece de flori gigantice, de unde și denumirea populară. Parcul Provincial Hopewell Rocks protejează acest peisaj unic și oferă acces la trasee interpretative despre procesele geologice din perioada Carboniferului. Pe lângă importanța turistică, zona este un punct critic pentru păsările migratoare care se hrănesc în zonele mâloase bogate în nutrienți ale golfului.",
      en: "The Hopewell Rocks, also known as the Flowerpot Rocks, are located on the shores of the Bay of Fundy in New Brunswick. These distinctive geological formations were shaped over millions of years by the world's highest tides, which can reach vertical heights of up to 16 meters. Twice daily, the massive flow of water carves into the base of the sandstone and conglomerate cliffs, creating isolated towers of rock. At low tide, visitors can walk on the ocean floor to explore the sea caves and massive formations from below, while at high tide, the rocks become small islands accessible only by kayak. The rocks are topped with trees and shrubs, giving them their iconic flowerpot appearance. This area is a significant part of the Hopewell Rocks Provincial Park and serves as an important site for observing coastal erosion in real-time. Geologically, the site dates back to the Carboniferous period, approximately 300 million years ago, providing researchers with insights into ancient environmental conditions and sedimentary processes.",
      es: "Las Hopewell Rocks, también llamadas 'Flowerpot Rocks', son formaciones rocosas distintivas en la bahía de Fundy. Dos veces al día, son rodeadas por las extremas variaciones de marea de la bahía, permitiendo a los visitantes caminar sobre el fondo marino entre ellas durante la marea baja y navegar en kayak alrededor de las cumbres durante la marea alta.",
      pt: "As Hopewell Rocks, também conhecidas como 'Flowerpot Rocks', são formações rochosas marcantes na Baía de Fundy. Duas vezes por dia, são rodeadas pela extrema amplitude das marés da baía, permitindo aos visitantes caminhar no fundo do mar entre elas na maré baixa e andar de caiaque em redor dos picos na maré alta.",
      fr: "Les Hopewell Rocks, également appelées 'Flowerpot Rocks', sont des formations rocheuses distinctives dans la baie de Fundy. Deux fois par jour, elles sont baignées par les marées extrêmes de la baie, permettant aux visiteurs de marcher sur le fond marin entre les rochers à marée basse et de faire du kayak autour de leurs sommets à marée haute.",
    },
    factsAdvanced: {
      de: ["Der Tidenhub in der Bay of Fundy beträgt bis zu 16 Meter.", "Die Felsen bestehen aus Sandstein und Konglomeratgestein.", "Das Alter der Gesteinsformationen wird auf 300 Millionen Jahre geschätzt.", "Der Hopewell Rocks Provincial Park wurde 1958 offiziell eröffnet.", "Über 30 verschiedene Formationen können bei Ebbe besichtigt werden.", "Hunderttausende von Zugvögeln rasten jährlich in der Bucht."],
      hu: ["A Fundy-öbölben az árapály szintkülönbsége elérheti a 16 métert.", "A sziklák üledékes homokkőből és konglomerátumból épülnek fel.", "A képződmények a karbon időszakból, 300 millió évvel ezelőttről származnak.", "A Hopewell Rocks Provincial Park 1958-ban nyílt meg a nagyközönség előtt.", "Apály idején körülbelül 3 órán át lehet biztonságosan sétálni a tengerfenéken.", "A terület a világ egyik legfontosabb megállóhelye a parti madarak számára."],
      ro: ["Amplitudinea mareelor în Golful Fundy poate ajunge la 16 metri.", "Stâncile sunt compuse din gresie și conglomerate de sedimente.", "Formațiunile geologice datează de acum aproximativ 300 de milioane de ani.", "Parcul Provincial Hopewell Rocks a fost înființat oficial în anul 1958.", "Există peste 30 de formațiuni distincte ce pot fi explorate la reflux.", "Zona găzduiește anual mii de păsări migratoare din specia fugaciului de țărm."],
      en: ["The tidal range in the Bay of Fundy can reach a maximum of 16 meters.", "The formations consist primarily of sandstone and coarse conglomerate.", "Geological records date the rock layers back roughly 300 million years.", "Hopewell Rocks Provincial Park was established as a protected site in 1958.", "The bay floor is accessible for walking for about 3 hours before and after low tide.", "It is a key stopover for over 75% of the world's semipalmated sandpipers."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Form einer Blumenvase", "Höchster Tidenhub der Welt", "Gehen auf dem Meeresboden", "Erosionsphänomen"], hu: ["Virágcserép alakú sziklák", "A világ legnagyobb árapálya", "Séta a tengerfenéken", "Eróziós jelenség"], ro: ["Formă de ghiveci de flori", "Cea mai mare maree din lume", "Plimbare pe fundul mării", "Fenomen de eroziune"], en: ["Flowerpot-shaped rocks", "World's highest tidal range", "Walk on the ocean floor", "Erosional masterpiece"] , es: ["Forma de florero", "La marea más alta del mundo", "Caminar sobre el fondo marino", "Fenómeno de erosión"], pt: ["Forma de vaso de flores", "A maré mais alta do mundo", "Caminhar no fundo do mar", "Fenómeno de erosão"], fr: ["Forme de pot de fleurs", "Les marées les plus hautes du monde", "Marche sur le fond marin", "Phénomène d'érosion"]},
    elevation: 0, image: "/poi-images/ca-hopewell-rocks.webp"},
  {
    id: "ca-butchart-gardens", "sights": {
      "de": [
            {
                  "name": "The Butchart Gardens",
                  "text": "Berühmte botanische Gärten mit beeindruckenden saisonalen Blumenausstellungen.",
                  "category": "landmark",
                  "coords": [
                        -123.469435,
                        48.564926
                  ]
            },
            {
                  "name": "Mount Work",
                  "text": "Ein markanter Gipfel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.479945,
                        48.530893
                  ]
            },
            {
                  "name": "Bamberton Provincial Park",
                  "text": "Ein Provinzpark am Saanich Inlet mit Wander- und Schwimmöglichkeiten.",
                  "category": "natural",
                  "coords": [
                        -123.527067,
                        48.606033
                  ]
            },
            {
                  "name": "ȽÁU,WELṈEW̱/John Dean Park",
                  "text": "Ein Provinzpark auf der Saanich-Halbinsel mit altem Douglasienwald.",
                  "category": "natural",
                  "coords": [
                        -123.448194,
                        48.614648
                  ]
            },
            {
                  "name": "Elk/Beaver Lake Regional Park",
                  "text": "Ein Regionalpark mit zwei Seen, Wanderwegen und Wildtieren.",
                  "category": "park",
                  "coords": [
                        -123.396118,
                        48.522611
                  ]
            },
            {
                  "name": "Heritage Acres",
                  "text": "Ein Museum, das das lokale Erbe bewahrt.",
                  "category": "museum",
                  "coords": [
                        -123.397367,
                        48.581654
                  ]
            },
            {
                  "name": "Bazan Bay",
                  "text": "Eine malerische Bucht auf der Saanich-Halbinsel.",
                  "category": "landmark",
                  "coords": [
                        -123.408428,
                        48.628953
                  ]
            },
            {
                  "name": "Victoria Butterfly Gardens",
                  "text": "Ein Innengarten mit Tausenden von freifliegenden Schmetterlingen.",
                  "category": "landmark",
                  "coords": [
                        -123.439123,
                        48.564465
                  ]
            },
            {
                  "name": "Brentwood Bay",
                  "text": "Eine kleine Bucht, die für Bootsfahrten und Aussichten beliebt ist.",
                  "category": "landmark",
                  "coords": [
                        -123.472805,
                        48.575791
                  ]
            },
            {
                  "name": "Butchart Cove",
                  "text": "Eine kleine Bucht in der Nähe der Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.470649,
                        48.56836
                  ]
            },
            {
                  "name": "Thomson Cove",
                  "text": "Eine Bucht in der Gegend der Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.478009,
                        48.599494
                  ]
            },
            {
                  "name": "Ferguson Cove",
                  "text": "Eine Bucht in der Gegend der Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.39193,
                        48.600614
                  ]
            },
            {
                  "name": "Mount Jeffrey",
                  "text": "Ein Gipfel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.555514,
                        48.583428
                  ]
            },
            {
                  "name": "Holmes Peak",
                  "text": "Ein Gipfel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.530244,
                        48.516532
                  ]
            },
            {
                  "name": "Jocelyn Hill",
                  "text": "Ein Hügel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.52982,
                        48.537288
                  ]
            },
            {
                  "name": "Sheepshanks Hill",
                  "text": "Ein Hügel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.557101,
                        48.559841
                  ]
            },
            {
                  "name": "Lone Tree Hill",
                  "text": "Ein Hügel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.513893,
                        48.519074
                  ]
            },
            {
                  "name": "Observatory Hill",
                  "text": "Ein Gipfel mit Panoramablick auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.418094,
                        48.519835
                  ]
            },
            {
                  "name": "Cole Hill",
                  "text": "Ein Hügel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.470971,
                        48.550832
                  ]
            },
            {
                  "name": "Mount Newton",
                  "text": "Ein Berg auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.443463,
                        48.612953
                  ]
            },
            {
                  "name": "Bear Hill",
                  "text": "Ein Hügel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.405568,
                        48.546038
                  ]
            },
            {
                  "name": "Tunnel Hill",
                  "text": "Ein Hügel auf der Saanich-Halbinsel.",
                  "category": "natural",
                  "coords": [
                        -123.559555,
                        48.501186
                  ]
            },
            {
                  "name": "Spectacle Lake Provincial Park",
                  "text": "Ein Provinzpark um einen See herum.",
                  "category": "natural",
                  "coords": [
                        -123.570242,
                        48.578883
                  ]
            },
            {
                  "name": "Sayward Beach",
                  "text": "Ein Strand auf der Saanich-Halbinsel.",
                  "category": "recreational",
                  "coords": [
                        -123.365901,
                        48.531645
                  ]
            },
            {
                  "name": "Cordova Bay Beach",
                  "text": "Ein Strand auf der Saanich-Halbinsel.",
                  "category": "recreational",
                  "coords": [
                        -123.366143,
                        48.521569
                  ]
            },
            {
                  "name": "Eagle Beach",
                  "text": "Ein Strand auf der Saanich-Halbinsel.",
                  "category": "recreational",
                  "coords": [
                        -123.387374,
                        48.52598
                  ]
            },
            {
                  "name": "Main Hangar",
                  "text": "Ein Museumshangar mit Flugzeugausstellungen.",
                  "category": "museum",
                  "coords": [
                        -123.420961,
                        48.640546
                  ]
            },
            {
                  "name": "Central Saanich Fire Museum",
                  "text": "Ein Museum, das der Feuerwehrgeschichte gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        -123.421442,
                        48.595329
                  ]
            },
            {
                  "name": "Dean Cabin",
                  "text": "Ruinen einer Hütte in den Butchart Gardens.",
                  "category": "historical",
                  "coords": [
                        -123.448986,
                        48.612446
                  ]
            },
            {
                  "name": "Thomson Cabin",
                  "text": "Ruinen einer weiteren Hütte in den Butchart Gardens.",
                  "category": "historical",
                  "coords": [
                        -123.445567,
                        48.610417
                  ]
            },
            {
                  "name": "Malahat Skywalk",
                  "text": "Eine Aussichtsplattform und Attraktion auf dem Malahat nahe den Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.526763,
                        48.568881
                  ]
            },
            {
                  "name": "Squally Reach Viewpoint",
                  "text": "Ein Aussichtspunkt in den Butchart Gardens mit Blick auf die Squally Reach.",
                  "category": "natural",
                  "coords": [
                        -123.518008,
                        48.545334
                  ]
            },
            {
                  "name": "Saanich Inlet Viewpoint",
                  "text": "Ein Aussichtspunkt in den Butchart Gardens mit Blick auf den Saanich Inlet.",
                  "category": "natural",
                  "coords": [
                        -123.509227,
                        48.550361
                  ]
            },
            {
                  "name": "Malahat Viewpoint",
                  "text": "Ein bekannter Aussichtspunkt auf dem Malahat, in der Nähe der Butchart Gardens.",
                  "category": "natural",
                  "coords": [
                        -123.519048,
                        48.546653
                  ]
            },
            {
                  "name": "Bog Garden",
                  "text": "Ein Aussichtspunkt in den Butchart Gardens, der einen Blick auf den Sumpfgarten bietet.",
                  "category": "natural",
                  "coords": [
                        -123.469543,
                        48.563143
                  ]
            }
      ],
      "hu": [
            {
                  "name": "The Butchart Gardens",
                  "text": "Híres botanikus kertek lenyűgöző szezonális virágkiállításokkal.",
                  "category": "landmark",
                  "coords": [
                        -123.469435,
                        48.564926
                  ]
            },
            {
                  "name": "Mount Work",
                  "text": "Egy jellegzetes csúcs a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.479945,
                        48.530893
                  ]
            },
            {
                  "name": "Bamberton Provincial Park",
                  "text": "Egy tartományi park a Saanich Inletnél túrázási és úszási lehetőségekkel.",
                  "category": "natural",
                  "coords": [
                        -123.527067,
                        48.606033
                  ]
            },
            {
                  "name": "ȽÁU,WELṈEW̱/John Dean Park",
                  "text": "Egy tartományi park a Saanich-félszigeten, idős Douglas-fenyőerdővel.",
                  "category": "natural",
                  "coords": [
                        -123.448194,
                        48.614648
                  ]
            },
            {
                  "name": "Elk/Beaver Lake Regional Park",
                  "text": "Egy regionális park két tóval, túraútvonalakkal és vadon élő állatokkal.",
                  "category": "park",
                  "coords": [
                        -123.396118,
                        48.522611
                  ]
            },
            {
                  "name": "Heritage Acres",
                  "text": "Egy múzeum, amely a helyi örökséget őrzi.",
                  "category": "museum",
                  "coords": [
                        -123.397367,
                        48.581654
                  ]
            },
            {
                  "name": "Bazan Bay",
                  "text": "Egy festői öböl a Saanich-félszigeten.",
                  "category": "landmark",
                  "coords": [
                        -123.408428,
                        48.628953
                  ]
            },
            {
                  "name": "Victoria Butterfly Gardens",
                  "text": "Egy beltéri kert több ezer szabadon repülő pillangóval.",
                  "category": "landmark",
                  "coords": [
                        -123.439123,
                        48.564465
                  ]
            },
            {
                  "name": "Brentwood Bay",
                  "text": "Egy kis öböl, amely népszerű csónakázásra és kilátásra.",
                  "category": "landmark",
                  "coords": [
                        -123.472805,
                        48.575791
                  ]
            },
            {
                  "name": "Butchart Cove",
                  "text": "Egy kis öböl a Butchart Gardens közelében.",
                  "category": "landmark",
                  "coords": [
                        -123.470649,
                        48.56836
                  ]
            },
            {
                  "name": "Thomson Cove",
                  "text": "Egy öböl a Butchart Gardens környékén.",
                  "category": "landmark",
                  "coords": [
                        -123.478009,
                        48.599494
                  ]
            },
            {
                  "name": "Ferguson Cove",
                  "text": "Egy öböl a Butchart Gardens környékén.",
                  "category": "landmark",
                  "coords": [
                        -123.39193,
                        48.600614
                  ]
            },
            {
                  "name": "Mount Jeffrey",
                  "text": "Egy csúcs a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.555514,
                        48.583428
                  ]
            },
            {
                  "name": "Holmes Peak",
                  "text": "Egy csúcs a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.530244,
                        48.516532
                  ]
            },
            {
                  "name": "Jocelyn Hill",
                  "text": "Egy domb a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.52982,
                        48.537288
                  ]
            },
            {
                  "name": "Sheepshanks Hill",
                  "text": "Egy domb a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.557101,
                        48.559841
                  ]
            },
            {
                  "name": "Lone Tree Hill",
                  "text": "Egy domb a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.513893,
                        48.519074
                  ]
            },
            {
                  "name": "Observatory Hill",
                  "text": "Egy csúcs panorámás kilátással a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.418094,
                        48.519835
                  ]
            },
            {
                  "name": "Cole Hill",
                  "text": "Egy domb a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.470971,
                        48.550832
                  ]
            },
            {
                  "name": "Mount Newton",
                  "text": "Egy hegy a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.443463,
                        48.612953
                  ]
            },
            {
                  "name": "Bear Hill",
                  "text": "Egy domb a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.405568,
                        48.546038
                  ]
            },
            {
                  "name": "Tunnel Hill",
                  "text": "Egy domb a Saanich-félszigeten.",
                  "category": "natural",
                  "coords": [
                        -123.559555,
                        48.501186
                  ]
            },
            {
                  "name": "Spectacle Lake Provincial Park",
                  "text": "Egy tartományi park egy tó körül.",
                  "category": "natural",
                  "coords": [
                        -123.570242,
                        48.578883
                  ]
            },
            {
                  "name": "Sayward Beach",
                  "text": "Egy strand a Saanich-félszigeten.",
                  "category": "recreational",
                  "coords": [
                        -123.365901,
                        48.531645
                  ]
            },
            {
                  "name": "Cordova Bay Beach",
                  "text": "Egy strand a Saanich-félszigeten.",
                  "category": "recreational",
                  "coords": [
                        -123.366143,
                        48.521569
                  ]
            },
            {
                  "name": "Eagle Beach",
                  "text": "Egy strand a Saanich-félszigeten.",
                  "category": "recreational",
                  "coords": [
                        -123.387374,
                        48.52598
                  ]
            },
            {
                  "name": "Main Hangar",
                  "text": "Egy múzeumhangár repülőgép-kiállításokkal.",
                  "category": "museum",
                  "coords": [
                        -123.420961,
                        48.640546
                  ]
            },
            {
                  "name": "Central Saanich Fire Museum",
                  "text": "Egy múzeum, amely a tűzoltóság történetének szentelt.",
                  "category": "museum",
                  "coords": [
                        -123.421442,
                        48.595329
                  ]
            },
            {
                  "name": "Dean Cabin",
                  "text": "Egy kunyhó romjai a Butchart Gardens-ben.",
                  "category": "historical",
                  "coords": [
                        -123.448986,
                        48.612446
                  ]
            },
            {
                  "name": "Thomson Cabin",
                  "text": "Egy másik kunyhó romjai a Butchart Gardens-ben.",
                  "category": "historical",
                  "coords": [
                        -123.445567,
                        48.610417
                  ]
            },
            {
                  "name": "Malahat Skywalk",
                  "text": "Egy kilátó és látványosság a Malahat-on, a Butchart Gardens közelében.",
                  "category": "landmark",
                  "coords": [
                        -123.526763,
                        48.568881
                  ]
            },
            {
                  "name": "Squally Reach Viewpoint",
                  "text": "Egy kilátópont a Butchart Gardens-ben, a Squally Reach-re néző kilátással.",
                  "category": "natural",
                  "coords": [
                        -123.518008,
                        48.545334
                  ]
            },
            {
                  "name": "Saanich Inlet Viewpoint",
                  "text": "Egy kilátópont a Butchart Gardens-ben, a Saanich Inlet-re néző kilátással.",
                  "category": "natural",
                  "coords": [
                        -123.509227,
                        48.550361
                  ]
            },
            {
                  "name": "Malahat Viewpoint",
                  "text": "Egy híres kilátópont a Malahat-on, a Butchart Gardens közelében.",
                  "category": "natural",
                  "coords": [
                        -123.519048,
                        48.546653
                  ]
            },
            {
                  "name": "Bog Garden",
                  "text": "Egy kilátópont a Butchart Gardens-ben, amely a mocsárkertre nyújt kilátást.",
                  "category": "natural",
                  "coords": [
                        -123.469543,
                        48.563143
                  ]
            }
      ],
      "ro": [
            {
                  "name": "The Butchart Gardens",
                  "text": "Grădini botanice celebre cu expoziții impresionante de flori sezoniere.",
                  "category": "landmark",
                  "coords": [
                        -123.469435,
                        48.564926
                  ]
            },
            {
                  "name": "Mount Work",
                  "text": "Un vârf proeminent pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.479945,
                        48.530893
                  ]
            },
            {
                  "name": "Bamberton Provincial Park",
                  "text": "Un parc provincial pe Saanich Inlet, cu drumeții și înot.",
                  "category": "natural",
                  "coords": [
                        -123.527067,
                        48.606033
                  ]
            },
            {
                  "name": "ȽÁU,WELṈEW̱/John Dean Park",
                  "text": "Un parc provincial pe Peninsula Saanich cu pădure bătrână de brad Douglas.",
                  "category": "natural",
                  "coords": [
                        -123.448194,
                        48.614648
                  ]
            },
            {
                  "name": "Elk/Beaver Lake Regional Park",
                  "text": "Un parc regional cu două lacuri, trasee și animale sălbatice.",
                  "category": "park",
                  "coords": [
                        -123.396118,
                        48.522611
                  ]
            },
            {
                  "name": "Heritage Acres",
                  "text": "Un muzeu care păstrează patrimoniul local.",
                  "category": "museum",
                  "coords": [
                        -123.397367,
                        48.581654
                  ]
            },
            {
                  "name": "Bazan Bay",
                  "text": "Un golf pitoresc pe Peninsula Saanich.",
                  "category": "landmark",
                  "coords": [
                        -123.408428,
                        48.628953
                  ]
            },
            {
                  "name": "Victoria Butterfly Gardens",
                  "text": "O grădină interioară cu mii de fluturi zburând liber.",
                  "category": "landmark",
                  "coords": [
                        -123.439123,
                        48.564465
                  ]
            },
            {
                  "name": "Brentwood Bay",
                  "text": "Un golf mic popular pentru plimbări cu barca și priveliști.",
                  "category": "landmark",
                  "coords": [
                        -123.472805,
                        48.575791
                  ]
            },
            {
                  "name": "Butchart Cove",
                  "text": "Un mic golf lângă Grădinile Butchart.",
                  "category": "landmark",
                  "coords": [
                        -123.470649,
                        48.56836
                  ]
            },
            {
                  "name": "Thomson Cove",
                  "text": "Un golf în zona Grădinilor Butchart.",
                  "category": "landmark",
                  "coords": [
                        -123.478009,
                        48.599494
                  ]
            },
            {
                  "name": "Ferguson Cove",
                  "text": "Un golf în zona Grădinilor Butchart.",
                  "category": "landmark",
                  "coords": [
                        -123.39193,
                        48.600614
                  ]
            },
            {
                  "name": "Mount Jeffrey",
                  "text": "Un vârf pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.555514,
                        48.583428
                  ]
            },
            {
                  "name": "Holmes Peak",
                  "text": "Un vârf pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.530244,
                        48.516532
                  ]
            },
            {
                  "name": "Jocelyn Hill",
                  "text": "Un deal pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.52982,
                        48.537288
                  ]
            },
            {
                  "name": "Sheepshanks Hill",
                  "text": "Un deal pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.557101,
                        48.559841
                  ]
            },
            {
                  "name": "Lone Tree Hill",
                  "text": "Un deal pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.513893,
                        48.519074
                  ]
            },
            {
                  "name": "Observatory Hill",
                  "text": "Un vârf cu priveliști panoramice pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.418094,
                        48.519835
                  ]
            },
            {
                  "name": "Cole Hill",
                  "text": "Un deal pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.470971,
                        48.550832
                  ]
            },
            {
                  "name": "Mount Newton",
                  "text": "Un munte pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.443463,
                        48.612953
                  ]
            },
            {
                  "name": "Bear Hill",
                  "text": "Un deal pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.405568,
                        48.546038
                  ]
            },
            {
                  "name": "Tunnel Hill",
                  "text": "Un deal pe Peninsula Saanich.",
                  "category": "natural",
                  "coords": [
                        -123.559555,
                        48.501186
                  ]
            },
            {
                  "name": "Spectacle Lake Provincial Park",
                  "text": "Un parc provincial în jurul unui lac.",
                  "category": "natural",
                  "coords": [
                        -123.570242,
                        48.578883
                  ]
            },
            {
                  "name": "Sayward Beach",
                  "text": "O plajă pe Peninsula Saanich.",
                  "category": "recreational",
                  "coords": [
                        -123.365901,
                        48.531645
                  ]
            },
            {
                  "name": "Cordova Bay Beach",
                  "text": "O plajă pe Peninsula Saanich.",
                  "category": "recreational",
                  "coords": [
                        -123.366143,
                        48.521569
                  ]
            },
            {
                  "name": "Eagle Beach",
                  "text": "O plajă pe Peninsula Saanich.",
                  "category": "recreational",
                  "coords": [
                        -123.387374,
                        48.52598
                  ]
            },
            {
                  "name": "Main Hangar",
                  "text": "Un hangar muzeu cu expoziții de aeronave.",
                  "category": "museum",
                  "coords": [
                        -123.420961,
                        48.640546
                  ]
            },
            {
                  "name": "Central Saanich Fire Museum",
                  "text": "Un muzeu dedicat istoriei pompierilor.",
                  "category": "museum",
                  "coords": [
                        -123.421442,
                        48.595329
                  ]
            },
            {
                  "name": "Dean Cabin",
                  "text": "Ruinele unei cabane în Butchart Gardens.",
                  "category": "historical",
                  "coords": [
                        -123.448986,
                        48.612446
                  ]
            },
            {
                  "name": "Thomson Cabin",
                  "text": "Ruinele unei alte cabane în Butchart Gardens.",
                  "category": "historical",
                  "coords": [
                        -123.445567,
                        48.610417
                  ]
            },
            {
                  "name": "Malahat Skywalk",
                  "text": "O platformă de observare și atracție pe Malahat, lângă Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.526763,
                        48.568881
                  ]
            },
            {
                  "name": "Squally Reach Viewpoint",
                  "text": "Un punct de belvedere în Butchart Gardens cu vedere spre Squally Reach.",
                  "category": "natural",
                  "coords": [
                        -123.518008,
                        48.545334
                  ]
            },
            {
                  "name": "Saanich Inlet Viewpoint",
                  "text": "Un punct de belvedere în Butchart Gardens cu vedere spre Saanich Inlet.",
                  "category": "natural",
                  "coords": [
                        -123.509227,
                        48.550361
                  ]
            },
            {
                  "name": "Malahat Viewpoint",
                  "text": "Un cunoscut punct de belvedere pe Malahat, lângă Butchart Gardens.",
                  "category": "natural",
                  "coords": [
                        -123.519048,
                        48.546653
                  ]
            },
            {
                  "name": "Bog Garden",
                  "text": "Un punct de belvedere în Butchart Gardens cu vedere spre grădina de mlaștină.",
                  "category": "natural",
                  "coords": [
                        -123.469543,
                        48.563143
                  ]
            }
      ],
      "en": [
            {
                  "name": "The Butchart Gardens",
                  "text": "Renowned botanical gardens with stunning seasonal flower displays.",
                  "category": "landmark",
                  "coords": [
                        -123.469435,
                        48.564926
                  ]
            },
            {
                  "name": "Mount Work",
                  "text": "A prominent peak on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.479945,
                        48.530893
                  ]
            },
            {
                  "name": "Bamberton Provincial Park",
                  "text": "A provincial park along the Saanich Inlet with hiking and swimming.",
                  "category": "natural",
                  "coords": [
                        -123.527067,
                        48.606033
                  ]
            },
            {
                  "name": "John Dean Park",
                  "text": "A provincial park on the Saanich Peninsula featuring old-growth Douglas fir trees.",
                  "category": "natural",
                  "coords": [
                        -123.448194,
                        48.614648
                  ]
            },
            {
                  "name": "Elk/Beaver Lake Regional Park",
                  "text": "A regional park with two lakes, trails, and wildlife.",
                  "category": "park",
                  "coords": [
                        -123.396118,
                        48.522611
                  ]
            },
            {
                  "name": "Heritage Acres",
                  "text": "A museum preserving local heritage.",
                  "category": "museum",
                  "coords": [
                        -123.397367,
                        48.581654
                  ]
            },
            {
                  "name": "Bazan Bay",
                  "text": "A scenic bay on the Saanich Peninsula.",
                  "category": "landmark",
                  "coords": [
                        -123.408428,
                        48.628953
                  ]
            },
            {
                  "name": "Victoria Butterfly Gardens",
                  "text": "An indoor garden with thousands of free-flying butterflies.",
                  "category": "landmark",
                  "coords": [
                        -123.439123,
                        48.564465
                  ]
            },
            {
                  "name": "Brentwood Bay",
                  "text": "A small bay popular for boating and views.",
                  "category": "landmark",
                  "coords": [
                        -123.472805,
                        48.575791
                  ]
            },
            {
                  "name": "Butchart Cove",
                  "text": "A small cove near Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.470649,
                        48.56836
                  ]
            },
            {
                  "name": "Thomson Cove",
                  "text": "A bay in the Butchart Gardens area.",
                  "category": "landmark",
                  "coords": [
                        -123.478009,
                        48.599494
                  ]
            },
            {
                  "name": "Ferguson Cove",
                  "text": "A bay in the Butchart Gardens area.",
                  "category": "landmark",
                  "coords": [
                        -123.39193,
                        48.600614
                  ]
            },
            {
                  "name": "Mount Jeffrey",
                  "text": "A peak on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.555514,
                        48.583428
                  ]
            },
            {
                  "name": "Holmes Peak",
                  "text": "A peak on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.530244,
                        48.516532
                  ]
            },
            {
                  "name": "Jocelyn Hill",
                  "text": "A hill on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.52982,
                        48.537288
                  ]
            },
            {
                  "name": "Sheepshanks Hill",
                  "text": "A hill on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.557101,
                        48.559841
                  ]
            },
            {
                  "name": "Lone Tree Hill",
                  "text": "A hill on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.513893,
                        48.519074
                  ]
            },
            {
                  "name": "Observatory Hill",
                  "text": "A peak with panoramic views on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.418094,
                        48.519835
                  ]
            },
            {
                  "name": "Cole Hill",
                  "text": "A hill on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.470971,
                        48.550832
                  ]
            },
            {
                  "name": "Mount Newton",
                  "text": "A mountain on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.443463,
                        48.612953
                  ]
            },
            {
                  "name": "Bear Hill",
                  "text": "A hill on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.405568,
                        48.546038
                  ]
            },
            {
                  "name": "Tunnel Hill",
                  "text": "A hill on the Saanich Peninsula.",
                  "category": "natural",
                  "coords": [
                        -123.559555,
                        48.501186
                  ]
            },
            {
                  "name": "Spectacle Lake Provincial Park",
                  "text": "A provincial park around a lake.",
                  "category": "natural",
                  "coords": [
                        -123.570242,
                        48.578883
                  ]
            },
            {
                  "name": "Sayward Beach",
                  "text": "A beach on the Saanich Peninsula.",
                  "category": "recreational",
                  "coords": [
                        -123.365901,
                        48.531645
                  ]
            },
            {
                  "name": "Cordova Bay Beach",
                  "text": "A beach on the Saanich Peninsula.",
                  "category": "recreational",
                  "coords": [
                        -123.366143,
                        48.521569
                  ]
            },
            {
                  "name": "Eagle Beach",
                  "text": "A beach on the Saanich Peninsula.",
                  "category": "recreational",
                  "coords": [
                        -123.387374,
                        48.52598
                  ]
            },
            {
                  "name": "Main Hangar",
                  "text": "A museum hangar housing aircraft exhibits.",
                  "category": "museum",
                  "coords": [
                        -123.420961,
                        48.640546
                  ]
            },
            {
                  "name": "Central Saanich Fire Museum",
                  "text": "A museum dedicated to firefighting history.",
                  "category": "museum",
                  "coords": [
                        -123.421442,
                        48.595329
                  ]
            },
            {
                  "name": "Dean Cabin",
                  "text": "Ruins of a cabin in Butchart Gardens.",
                  "category": "historical",
                  "coords": [
                        -123.448986,
                        48.612446
                  ]
            },
            {
                  "name": "Thomson Cabin",
                  "text": "Ruins of another cabin in Butchart Gardens.",
                  "category": "historical",
                  "coords": [
                        -123.445567,
                        48.610417
                  ]
            },
            {
                  "name": "Malahat Skywalk",
                  "text": "A viewpoint and attraction on the Malahat near Butchart Gardens.",
                  "category": "landmark",
                  "coords": [
                        -123.526763,
                        48.568881
                  ]
            },
            {
                  "name": "Squally Reach Viewpoint",
                  "text": "A viewpoint in Butchart Gardens overlooking Squally Reach.",
                  "category": "natural",
                  "coords": [
                        -123.518008,
                        48.545334
                  ]
            },
            {
                  "name": "Saanich Inlet Viewpoint",
                  "text": "A viewpoint in Butchart Gardens overlooking Saanich Inlet.",
                  "category": "natural",
                  "coords": [
                        -123.509227,
                        48.550361
                  ]
            },
            {
                  "name": "Malahat Viewpoint",
                  "text": "A famous viewpoint on the Malahat, near Butchart Gardens.",
                  "category": "natural",
                  "coords": [
                        -123.519048,
                        48.546653
                  ]
            },
            {
                  "name": "Bog Garden",
                  "text": "A viewpoint in Butchart Gardens overlooking the bog garden.",
                  "category": "natural",
                  "coords": [
                        -123.469543,
                        48.563143
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CA",
    coords: [-123.4674, 48.5637],
    name: { de: "Butchart Gardens", hu: "Butchart kertek", ro: "Grădinile Butchart", en: "Butchart Gardens" },
    description: { de: "Weltberühmte Schaugärten in British Columbia.", hu: "Világhírű bemutatókertek Brit Kolumbiában.", ro: "Grădini de expoziție de renume mondial din Columbia Britanică.", en: "World-famous floral display gardens in British Columbia." , es: "Jardines de exhibición mundialmente famosos en la Columbia Británica.", pt: "Jardins de exibição mundialmente famosos na Colúmbia Britânica.", fr: "Jardins d'exposition de renommée mondiale en Colombie-Britannique."},
    descriptionAdvanced: {
      de: "Butchart Gardens ist eine weltberühmte Gartenanlage in Brentwood Bay auf Vancouver Island, nahe der Stadt Victoria in British Columbia. Die Geschichte der Gärten begann im Jahr 1904, als Jennie Butchart entschied, einen erschöpften Kalksteinbruch auf dem Familienbesitz in eine blühende Landschaft zu verwandeln. Heute umfasst das Areal 22 Hektar und ist in verschiedene Themenbereiche unterteilt, darunter der berühmte Sunken Garden, der Rosengarten, der Japanische Garten und der Italienische Garten. Jährlich besuchen über eine Million Menschen die Anlage, um die mehr als 900 Pflanzenarten zu bewundern, die je nach Jahreszeit in unterschiedlicher Pracht erblühen. Die Gärten sind seit 2004 als National Historic Site of Canada anerkannt und befinden sich nach wie vor im Besitz der Familie Butchart. Neben der botanischen Vielfalt bietet die Anlage auch kulturelle Veranstaltungen, Springbrunnen und im Winter eine beeindruckende Weihnachtsbeleuchtung. Die architektonische Integration der Gärten in die Topographie des ehemaligen Steinbruchs macht sie zu einem herausragenden Beispiel für Landschaftsgestaltung und ökologische Rekultivierung.",
      hu: "A Butchart Gardens egy világhírű kertkomplexum a kanadai Vancouver-szigeten, Victoria városának közelében, Brit Kolumbiában. A kertek története 1904-ben kezdődött, amikor Jennie Butchart elhatározta, hogy a család tulajdonában lévő kimerült mészkőbányát virágzó oázissá alakítja át. Ma a 22 hektáros terület több tematikus egységre oszlik, mint például az Elsüllyedt kert, a Rózsakert, a Japánkert és az Olasz kert. Évente több mint egymillió látogató érkezik, hogy megcsodálja a több mint 900 növényfajt, amelyek az évszakoknak megfelelően folyamatosan változó látványt nyújtanak. A kerteket 2004-ben Kanada Nemzeti Történelmi Emlékhelyévé nyilvánították, és a mai napig a Butchart család tulajdonában és kezelésében állnak. A botanikai értékeken túl a park kulturális rendezvényeknek, szökőkutaknak és télen lenyűgöző karácsonyi kivilágításnak ad otthont. A kertek kialakítása a korábbi bányaterületen a tájépítészet és az ökológiai helyreállítás egyik legszebb példája a világon.",
      ro: "Grădinile Butchart reprezintă un complex botanic de renume mondial situat în Brentwood Bay pe Insula Vancouver, lângă orașul Victoria din Columbia Britanică. Istoria acestor grădini a început în anul 1904, când Jennie Butchart a decis să transforme o fostă carieră de calcar epuizată, aflată pe proprietatea familiei, într-un peisaj înflorit. Astăzi, domeniul se întinde pe 22 de hectare și este împărțit în mai multe secțiuni tematice, inclusiv celebra Grădină Scufundată, Grădina de Trandafiri, Grădina Japoneză și Grădina Italiană. Peste un milion de turiști vizitează anual locația pentru a admira cele peste 900 de specii de plante care oferă un spectacol vizual în continuă schimbare pe parcursul anotimpurilor. Grădinile au fost desemnate Sit Istoric Național al Canadei în 2004 și rămân până în prezent în proprietatea familiei Butchart. Pe lângă diversitatea botanică, complexul găzduiește evenimente culturale, fântâni arteziene și o impresionantă iluminare de Crăciun în timpul iernii. Integrarea arhitecturală a grădinilor în topografia fostei cariere este considerată o capodoperă a designului peisagistic și a restaurării ecologice.",
      en: "Butchart Gardens is a world-renowned floral display garden located in Brentwood Bay on Vancouver Island, near Victoria, British Columbia. The site's transformation began in 1904 when Jennie Butchart sought to beautify a depleted limestone quarry on her family's property. Today, the gardens span 55 acres (22 hectares) and feature several distinct themed areas, including the iconic Sunken Garden, the Rose Garden, the Japanese Garden, and the Italian Garden. Attracting over one million visitors annually, the gardens showcase more than 900 varieties of plants that bloom in succession throughout the year. In 2004, the gardens were designated a National Historic Site of Canada in recognition of their international horticultural significance. The property remains under the ownership and management of the Butchart family, maintaining its legacy for over a century. Beyond its botanical collections, the site offers seasonal events, outdoor concerts, and elaborate light displays during the winter. The masterful reclamation of industrial land into a premier tourist destination makes it a global benchmark for landscape architecture.",
      es: "Los Butchart Gardens en la isla de Vancouver son una obra maestra de la horticultura, creados a partir de una antigua cantera de piedra caliza. Hoy en día, el complejo incluye diversas áreas temáticas como el Jardín Hundido, el Jardín de Rosas y el Jardín Japonés, que florecen con colores magníficos en cada estación.",
      pt: "Os Butchart Gardens na Ilha de Vancouver são uma obra-prima da arte da jardinagem, criados a partir de uma antiga pedreira de calcário. Atualmente, o complexo inclui várias áreas temáticas como o Jardim Afundado, o Jardim de Rosas e o Jardim Japonês, que florescem com cores magníficas em todas as estações.",
      fr: "Les jardins Butchart sur l'île de Vancouver sont un chef-d'œuvre de l'art horticole, créés à partir d'une ancienne carrière de calcaire. Aujourd'hui, le site comprend diverses zones thématiques telles que le Jardin Englouti, la Roseraie et le Jardin Japonais, qui s'épanouissent avec des couleurs magnifiques en toute saison.",
    },
    factsAdvanced: {
      de: ["Die Gärten umfassen eine Fläche von etwa 22 Hektar.", "Der Sunken Garden befindet sich in einem 15 Meter tiefen ehemaligen Steinbruch.", "Über 50 Gärtner arbeiten ganzjährig an der Pflege der Anlage.", "Es werden jährlich etwa eine Million Tulpen und andere Frühlingsblumen gepflanzt.", "Die Anlage wurde zum 100-jährigen Jubiläum im Jahr 2004 zum nationalen Denkmal erklärt.", "Die berühmte Ross Fountain wurde 1964 zum 60. Jubiläum installiert."],
      hu: ["A kertek teljes területe körülbelül 22 hektár.", "Az Elsüllyedt kert egy 15 méter mély korábbi mészkőbányában alakult ki.", "Évente több mint 1 millió látogató keresi fel a helyszínt.", "A parkban több mint 50 szakképzett kertész dolgozik folyamatosan.", "A Butchart Gardens 2004-ben kapta meg a Nemzeti Történelmi Emlékhely címet.", "A Ross-szökőkutat 1964-ben, a kertek alapításának 60. évfordulójára építették."],
      ro: ["Grădinile se întind pe o suprafață totală de 22 de hectare.", "Grădina Scufundată a fost amenajată într-o fostă carieră adâncă de 15 metri.", "Peste 50 de grădinari cu normă întreagă se ocupă de întreținerea parcului.", "Anual sunt plantate peste un milion de plante bulboase pentru spectacolul de primăvară.", "Locația a fost declarată Sit Istoric Național al Canadei în anul 2004.", "Fântâna Ross a fost instalată în 1964 pentru a marca a 60-a aniversare a grădinilor."],
      en: ["The gardens cover a total area of approximately 55 acres (22 hectares).", "The Sunken Garden is located in a former limestone quarry 15 meters deep.", "More than 50 full-time gardeners are employed to maintain the grounds.", "Over one million bedding plants are used for the seasonal displays each year.", "It was designated a National Historic Site of Canada in 2004.", "The Ross Fountain was installed in 1964 to celebrate the gardens' 60th anniversary."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Ehemaliger Kalksteinbruch", "Nationale historische Stätte", "Über 900 Pflanzenarten", "Ganzjährig geöffnet"], hu: ["Egykori mészkőbánya", "Nemzeti történelmi emlékhely", "Több mint 900 növényfaj", "Egész évben látogatható"], ro: ["Fostă carieră de calcar", "Sit istoric național", "Peste 900 de specii de plante", "Deschise tot anul"], en: ["Former limestone quarry", "National Historic Site of Canada", "Over 900 plant varieties", "Open in all four seasons"] , es: ["Antigua cantera de piedra caliza", "Sitio histórico nacional", "Más de 900 especies de plantas", "Abierto todo el año"], pt: ["Antiga pedreira de calcário", "Sítio histórico nacional", "Mais de 900 espécies de plantas", "Aberto todo o ano"], fr: ["Ancienne carrière de calcaire", "Lieu historique national", "Plus de 900 espèces de plantes", "Ouvert toute l'année"]},
    area: 0.22, historyYear: 1904, historyPeriod: "Modern", image: "/poi-images/ca-butchart-gardens.webp"},
  {
    id: "ca-signal-hill", "sights": {
      "de": [
            {
                  "name": "Cabot Tower",
                  "text": "Ein Museumsturm auf Signal Hill, der an die Landung von John Cabot im Jahr 1497 erinnert.",
                  "category": "museum",
                  "coords": [
                        -52.682048,
                        47.570102
                  ]
            },
            {
                  "name": "Masjid-an-Noor",
                  "text": "Eine Moschee in Signal Hill.",
                  "category": "religious",
                  "coords": [
                        -52.68936,
                        47.60711
                  ]
            },
            {
                  "name": "Fort Amherst Lighthouse",
                  "text": "Ein Leuchtturm in Signal Hill am Eingang zum Hafen von St. John's.",
                  "category": "landmark",
                  "coords": [
                        -52.680373,
                        47.563344
                  ]
            },
            {
                  "name": "Caplin Cove",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.675056,
                        47.543194
                  ]
            },
            {
                  "name": "Bottle Cove",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.652026,
                        47.529708
                  ]
            },
            {
                  "name": "True Blue Gulch",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.649587,
                        47.531242
                  ]
            },
            {
                  "name": "Sailing Gulch",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.646789,
                        47.532482
                  ]
            },
            {
                  "name": "Bobbies Cove",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.65905,
                        47.596671
                  ]
            },
            {
                  "name": "Boulders Cove",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.667047,
                        47.586651
                  ]
            },
            {
                  "name": "The Circle",
                  "text": "Eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.672165,
                        47.580332
                  ]
            },
            {
                  "name": "Cuckolds Cove",
                  "text": "Cuckolds Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.674496,
                        47.576025
                  ]
            },
            {
                  "name": "Hay Cove",
                  "text": "Hay Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.68418,
                        47.567688
                  ]
            },
            {
                  "name": "Rolls Cove",
                  "text": "Rolls Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.686017,
                        47.567508
                  ]
            },
            {
                  "name": "Frederick Cove",
                  "text": "Frederick Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.685623,
                        47.564643
                  ]
            },
            {
                  "name": "South Bight",
                  "text": "South Bight ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.68142,
                        47.564029
                  ]
            },
            {
                  "name": "Sleepy Cove",
                  "text": "Sleepy Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.674709,
                        47.536999
                  ]
            },
            {
                  "name": "Peggys Bag",
                  "text": "Peggys Bag ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.673453,
                        47.534871
                  ]
            },
            {
                  "name": "Spanish Gulch",
                  "text": "Spanish Gulch ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.648193,
                        47.531813
                  ]
            },
            {
                  "name": "Windy Cove",
                  "text": "Windy Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.675508,
                        47.539034
                  ]
            },
            {
                  "name": "Kelby Cove",
                  "text": "Kelby Cove ist eine Bucht in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.676972,
                        47.541026
                  ]
            },
            {
                  "name": "Signal Hill",
                  "text": "Signal Hill ist ein Gipfel in St. John’s, bekannt als Ort, an dem Guglielmo Marconi 1901 das erste transatlantische Funksignal empfing.",
                  "category": "natural",
                  "coords": [
                        -52.680367,
                        47.572131
                  ]
            },
            {
                  "name": "Signal Hill Park Interpretation Centre",
                  "text": "Das Signal Hill Park Interpretation Centre ist ein Museum in Signal Hill, das Informationen zur Geschichte des Hügels bietet.",
                  "category": "museum",
                  "coords": [
                        -52.687103,
                        47.570344
                  ]
            },
            {
                  "name": "Red Cliff Radar Station",
                  "text": "Red Cliff Radar Station ist eine Ruine einer ehemaligen Radaranlage in Signal Hill.",
                  "category": "historical",
                  "coords": [
                        -52.665505,
                        47.641262
                  ]
            },
            {
                  "name": "Queen's Battery",
                  "text": "Queen's Battery ist ein historisches Fort in Signal Hill.",
                  "category": "fortress",
                  "coords": [
                        -52.685904,
                        47.568619
                  ]
            },
            {
                  "name": "Shawn's Big Red Truck",
                  "text": "Shawn's Big Red Truck ist eine bekannte Attraktion in Form eines roten Lastwagens in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.725,
                        47.647752
                  ]
            },
            {
                  "name": "Fogarty's Wetland",
                  "text": "Fogarty's Wetland ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.74631,
                        47.580898
                  ]
            },
            {
                  "name": "Torbay Point Viewpoint",
                  "text": "Torbay Point Viewpoint ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.669005,
                        47.658054
                  ]
            },
            {
                  "name": "Gun Emplacement",
                  "text": "Gun Emplacement ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.661373,
                        47.646589
                  ]
            },
            {
                  "name": "Logy Bay Viewpoint",
                  "text": "Logy Bay Viewpoint ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.66655,
                        47.633503
                  ]
            },
            {
                  "name": "Fort Waldegrave",
                  "text": "Fort Waldegrave ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.690852,
                        47.568914
                  ]
            },
            {
                  "name": "Harbour Vista Deck",
                  "text": "Harbour Vista Deck ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.690943,
                        47.570732
                  ]
            },
            {
                  "name": "Mount Scio Lookout",
                  "text": "Mount Scio Lookout ist ein Aussichtspunkt in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.752702,
                        47.569558
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Cabot Tower",
                  "text": "Egy múzeumtorony a Signal Hillen, John Cabot 1497-es partraszállásának emlékére.",
                  "category": "museum",
                  "coords": [
                        -52.682048,
                        47.570102
                  ]
            },
            {
                  "name": "Masjid-an-Noor",
                  "text": "Egy mecset Signal Hillen.",
                  "category": "religious",
                  "coords": [
                        -52.68936,
                        47.60711
                  ]
            },
            {
                  "name": "Fort Amherst Lighthouse",
                  "text": "Egy világítótorony Signal Hillen, a St. John's kikötő bejáratánál.",
                  "category": "landmark",
                  "coords": [
                        -52.680373,
                        47.563344
                  ]
            },
            {
                  "name": "Caplin Cove",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.675056,
                        47.543194
                  ]
            },
            {
                  "name": "Bottle Cove",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.652026,
                        47.529708
                  ]
            },
            {
                  "name": "True Blue Gulch",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.649587,
                        47.531242
                  ]
            },
            {
                  "name": "Sailing Gulch",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.646789,
                        47.532482
                  ]
            },
            {
                  "name": "Bobbies Cove",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.65905,
                        47.596671
                  ]
            },
            {
                  "name": "Boulders Cove",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.667047,
                        47.586651
                  ]
            },
            {
                  "name": "The Circle",
                  "text": "Egy öböl Signal Hillen.",
                  "category": "landmark",
                  "coords": [
                        -52.672165,
                        47.580332
                  ]
            },
            {
                  "name": "Cuckolds Cove",
                  "text": "A Cuckolds Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.674496,
                        47.576025
                  ]
            },
            {
                  "name": "Hay Cove",
                  "text": "A Hay Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.68418,
                        47.567688
                  ]
            },
            {
                  "name": "Rolls Cove",
                  "text": "A Rolls Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.686017,
                        47.567508
                  ]
            },
            {
                  "name": "Frederick Cove",
                  "text": "A Frederick Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.685623,
                        47.564643
                  ]
            },
            {
                  "name": "South Bight",
                  "text": "A South Bight egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.68142,
                        47.564029
                  ]
            },
            {
                  "name": "Sleepy Cove",
                  "text": "A Sleepy Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.674709,
                        47.536999
                  ]
            },
            {
                  "name": "Peggys Bag",
                  "text": "A Peggys Bag egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.673453,
                        47.534871
                  ]
            },
            {
                  "name": "Spanish Gulch",
                  "text": "A Spanish Gulch egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.648193,
                        47.531813
                  ]
            },
            {
                  "name": "Windy Cove",
                  "text": "A Windy Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.675508,
                        47.539034
                  ]
            },
            {
                  "name": "Kelby Cove",
                  "text": "A Kelby Cove egy öböl Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.676972,
                        47.541026
                  ]
            },
            {
                  "name": "Signal Hill",
                  "text": "A Signal Hill egy csúcs St. John’sban, ahol Guglielmo Marconi 1901-ben vette az első transzatlanti rádiójelet.",
                  "category": "natural",
                  "coords": [
                        -52.680367,
                        47.572131
                  ]
            },
            {
                  "name": "Signal Hill Park Interpretation Centre",
                  "text": "A Signal Hill Park Tájékoztató Központ egy múzeum Signal Hillben, amely a domb történetét mutatja be.",
                  "category": "museum",
                  "coords": [
                        -52.687103,
                        47.570344
                  ]
            },
            {
                  "name": "Red Cliff Radar Station",
                  "text": "A Red Cliff Radar Station egy egykori radarállomás romja Signal Hillben.",
                  "category": "historical",
                  "coords": [
                        -52.665505,
                        47.641262
                  ]
            },
            {
                  "name": "Queen's Battery",
                  "text": "A Queen's Battery egy történelmi erőd Signal Hillben.",
                  "category": "fortress",
                  "coords": [
                        -52.685904,
                        47.568619
                  ]
            },
            {
                  "name": "Shawn's Big Red Truck",
                  "text": "A Shawn's Big Red Truck egy híres piros teherautó-attrakció Signal Hillben.",
                  "category": "landmark",
                  "coords": [
                        -52.725,
                        47.647752
                  ]
            },
            {
                  "name": "Fogarty's Wetland",
                  "text": "A Fogarty's Wetland egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.74631,
                        47.580898
                  ]
            },
            {
                  "name": "Torbay Point Viewpoint",
                  "text": "A Torbay Point Viewpoint egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.669005,
                        47.658054
                  ]
            },
            {
                  "name": "Gun Emplacement",
                  "text": "A Gun Emplacement egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.661373,
                        47.646589
                  ]
            },
            {
                  "name": "Logy Bay Viewpoint",
                  "text": "A Logy Bay Viewpoint egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.66655,
                        47.633503
                  ]
            },
            {
                  "name": "Fort Waldegrave",
                  "text": "A Fort Waldegrave egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.690852,
                        47.568914
                  ]
            },
            {
                  "name": "Harbour Vista Deck",
                  "text": "A Harbour Vista Deck egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.690943,
                        47.570732
                  ]
            },
            {
                  "name": "Mount Scio Lookout",
                  "text": "A Mount Scio Lookout egy kilátópont Signal Hillben.",
                  "category": "natural",
                  "coords": [
                        -52.752702,
                        47.569558
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Cabot Tower",
                  "text": "Un turn muzeu pe Signal Hill, care comemorează debarcarea lui John Cabot în 1497.",
                  "category": "museum",
                  "coords": [
                        -52.682048,
                        47.570102
                  ]
            },
            {
                  "name": "Masjid-an-Noor",
                  "text": "O moschee în Signal Hill.",
                  "category": "religious",
                  "coords": [
                        -52.68936,
                        47.60711
                  ]
            },
            {
                  "name": "Fort Amherst Lighthouse",
                  "text": "Un far în Signal Hill la intrarea în portul St. John's.",
                  "category": "landmark",
                  "coords": [
                        -52.680373,
                        47.563344
                  ]
            },
            {
                  "name": "Caplin Cove",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.675056,
                        47.543194
                  ]
            },
            {
                  "name": "Bottle Cove",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.652026,
                        47.529708
                  ]
            },
            {
                  "name": "True Blue Gulch",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.649587,
                        47.531242
                  ]
            },
            {
                  "name": "Sailing Gulch",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.646789,
                        47.532482
                  ]
            },
            {
                  "name": "Bobbies Cove",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.65905,
                        47.596671
                  ]
            },
            {
                  "name": "Boulders Cove",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.667047,
                        47.586651
                  ]
            },
            {
                  "name": "The Circle",
                  "text": "Un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.672165,
                        47.580332
                  ]
            },
            {
                  "name": "Cuckolds Cove",
                  "text": "Cuckolds Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.674496,
                        47.576025
                  ]
            },
            {
                  "name": "Hay Cove",
                  "text": "Hay Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.68418,
                        47.567688
                  ]
            },
            {
                  "name": "Rolls Cove",
                  "text": "Rolls Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.686017,
                        47.567508
                  ]
            },
            {
                  "name": "Frederick Cove",
                  "text": "Frederick Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.685623,
                        47.564643
                  ]
            },
            {
                  "name": "South Bight",
                  "text": "South Bight este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.68142,
                        47.564029
                  ]
            },
            {
                  "name": "Sleepy Cove",
                  "text": "Sleepy Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.674709,
                        47.536999
                  ]
            },
            {
                  "name": "Peggys Bag",
                  "text": "Peggys Bag este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.673453,
                        47.534871
                  ]
            },
            {
                  "name": "Spanish Gulch",
                  "text": "Spanish Gulch este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.648193,
                        47.531813
                  ]
            },
            {
                  "name": "Windy Cove",
                  "text": "Windy Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.675508,
                        47.539034
                  ]
            },
            {
                  "name": "Kelby Cove",
                  "text": "Kelby Cove este un golf în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.676972,
                        47.541026
                  ]
            },
            {
                  "name": "Signal Hill",
                  "text": "Signal Hill este un vârf în St. John’s, cunoscut ca locul unde Guglielmo Marconi a recepționat primul semnal radio transatlantic în 1901.",
                  "category": "natural",
                  "coords": [
                        -52.680367,
                        47.572131
                  ]
            },
            {
                  "name": "Signal Hill Park Interpretation Centre",
                  "text": "Centrul de Interpretare a Parcului Signal Hill este un muzeu în Signal Hill, care oferă informații despre istoria dealului.",
                  "category": "museum",
                  "coords": [
                        -52.687103,
                        47.570344
                  ]
            },
            {
                  "name": "Red Cliff Radar Station",
                  "text": "Red Cliff Radar Station este o ruină a unei foste stații radar în Signal Hill.",
                  "category": "historical",
                  "coords": [
                        -52.665505,
                        47.641262
                  ]
            },
            {
                  "name": "Queen's Battery",
                  "text": "Queen's Battery este un fort istoric în Signal Hill.",
                  "category": "fortress",
                  "coords": [
                        -52.685904,
                        47.568619
                  ]
            },
            {
                  "name": "Shawn's Big Red Truck",
                  "text": "Shawn's Big Red Truck este o atracție cunoscută sub forma unui camion roșu în Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.725,
                        47.647752
                  ]
            },
            {
                  "name": "Fogarty's Wetland",
                  "text": "Fogarty's Wetland este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.74631,
                        47.580898
                  ]
            },
            {
                  "name": "Torbay Point Viewpoint",
                  "text": "Torbay Point Viewpoint este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.669005,
                        47.658054
                  ]
            },
            {
                  "name": "Gun Emplacement",
                  "text": "Gun Emplacement este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.661373,
                        47.646589
                  ]
            },
            {
                  "name": "Logy Bay Viewpoint",
                  "text": "Logy Bay Viewpoint este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.66655,
                        47.633503
                  ]
            },
            {
                  "name": "Fort Waldegrave",
                  "text": "Fort Waldegrave este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.690852,
                        47.568914
                  ]
            },
            {
                  "name": "Harbour Vista Deck",
                  "text": "Harbour Vista Deck este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.690943,
                        47.570732
                  ]
            },
            {
                  "name": "Mount Scio Lookout",
                  "text": "Mount Scio Lookout este un punct de belvedere în Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.752702,
                        47.569558
                  ]
            }
      ],
      "en": [
            {
                  "name": "Cabot Tower",
                  "text": "A museum tower on Signal Hill, commemorating John Cabot's landing in 1497.",
                  "category": "museum",
                  "coords": [
                        -52.682048,
                        47.570102
                  ]
            },
            {
                  "name": "Masjid-an-Noor",
                  "text": "A mosque in Signal Hill.",
                  "category": "religious",
                  "coords": [
                        -52.68936,
                        47.60711
                  ]
            },
            {
                  "name": "Fort Amherst Lighthouse",
                  "text": "A lighthouse in Signal Hill at the entrance to St. John's harbour.",
                  "category": "landmark",
                  "coords": [
                        -52.680373,
                        47.563344
                  ]
            },
            {
                  "name": "Caplin Cove",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.675056,
                        47.543194
                  ]
            },
            {
                  "name": "Bottle Cove",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.652026,
                        47.529708
                  ]
            },
            {
                  "name": "True Blue Gulch",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.649587,
                        47.531242
                  ]
            },
            {
                  "name": "Sailing Gulch",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.646789,
                        47.532482
                  ]
            },
            {
                  "name": "Bobbies Cove",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.65905,
                        47.596671
                  ]
            },
            {
                  "name": "Boulders Cove",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.667047,
                        47.586651
                  ]
            },
            {
                  "name": "The Circle",
                  "text": "A bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.672165,
                        47.580332
                  ]
            },
            {
                  "name": "Cuckolds Cove",
                  "text": "Cuckolds Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.674496,
                        47.576025
                  ]
            },
            {
                  "name": "Hay Cove",
                  "text": "Hay Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.68418,
                        47.567688
                  ]
            },
            {
                  "name": "Rolls Cove",
                  "text": "Rolls Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.686017,
                        47.567508
                  ]
            },
            {
                  "name": "Frederick Cove",
                  "text": "Frederick Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.685623,
                        47.564643
                  ]
            },
            {
                  "name": "South Bight",
                  "text": "South Bight is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.68142,
                        47.564029
                  ]
            },
            {
                  "name": "Sleepy Cove",
                  "text": "Sleepy Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.674709,
                        47.536999
                  ]
            },
            {
                  "name": "Peggys Bag",
                  "text": "Peggys Bag is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.673453,
                        47.534871
                  ]
            },
            {
                  "name": "Spanish Gulch",
                  "text": "Spanish Gulch is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.648193,
                        47.531813
                  ]
            },
            {
                  "name": "Windy Cove",
                  "text": "Windy Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.675508,
                        47.539034
                  ]
            },
            {
                  "name": "Kelby Cove",
                  "text": "Kelby Cove is a bay in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.676972,
                        47.541026
                  ]
            },
            {
                  "name": "Signal Hill",
                  "text": "Signal Hill is a peak in St. John’s, known as the site where Guglielmo Marconi received the first transatlantic wireless signal in 1901.",
                  "category": "natural",
                  "coords": [
                        -52.680367,
                        47.572131
                  ]
            },
            {
                  "name": "Signal Hill Park Interpretation Centre",
                  "text": "Signal Hill Park Interpretation Centre is a museum in Signal Hill that provides information about the hill's history.",
                  "category": "museum",
                  "coords": [
                        -52.687103,
                        47.570344
                  ]
            },
            {
                  "name": "Red Cliff Radar Station",
                  "text": "Red Cliff Radar Station is a ruin of a former radar station in Signal Hill.",
                  "category": "historical",
                  "coords": [
                        -52.665505,
                        47.641262
                  ]
            },
            {
                  "name": "Queen's Battery",
                  "text": "Queen's Battery is a historic fort in Signal Hill.",
                  "category": "fortress",
                  "coords": [
                        -52.685904,
                        47.568619
                  ]
            },
            {
                  "name": "Shawn's Big Red Truck",
                  "text": "Shawn's Big Red Truck is a notable red truck attraction in Signal Hill.",
                  "category": "landmark",
                  "coords": [
                        -52.725,
                        47.647752
                  ]
            },
            {
                  "name": "Fogarty's Wetland",
                  "text": "Fogarty's Wetland is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.74631,
                        47.580898
                  ]
            },
            {
                  "name": "Torbay Point Viewpoint",
                  "text": "Torbay Point Viewpoint is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.669005,
                        47.658054
                  ]
            },
            {
                  "name": "Gun Emplacement",
                  "text": "Gun Emplacement is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.661373,
                        47.646589
                  ]
            },
            {
                  "name": "Logy Bay Viewpoint",
                  "text": "Logy Bay Viewpoint is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.66655,
                        47.633503
                  ]
            },
            {
                  "name": "Fort Waldegrave",
                  "text": "Fort Waldegrave is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.690852,
                        47.568914
                  ]
            },
            {
                  "name": "Harbour Vista Deck",
                  "text": "Harbour Vista Deck is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.690943,
                        47.570732
                  ]
            },
            {
                  "name": "Mount Scio Lookout",
                  "text": "Mount Scio Lookout is a viewpoint in Signal Hill.",
                  "category": "natural",
                  "coords": [
                        -52.752702,
                        47.569558
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CA",
    coords: [-52.6800, 47.5694],
    name: { de: "Signal Hill", hu: "Signal Hill", ro: "Signal Hill", en: "Signal Hill" },
    description: { de: "Ort des Empfangs des ersten transatlantischen Funksignals.", hu: "Az első transzatlanti rádiójel vételének helyszíne.", ro: "Locul primirii primului semnal radio transatlantic.", en: "Site of the reception of the first transatlantic wireless signal." , es: "Lugar de recepción de la primera señal de radio transatlántica.", pt: "Local de receção do primeiro sinal de rádio transatlântico.", fr: "Lieu de réception du premier signal radio transatlantique."},
    descriptionAdvanced: {
      de: "Signal Hill ist eine markante Erhebung über der Stadt St. John's in Neufundland und ein Ort von herausragender historischer Bedeutung für Kanada. Bekannt wurde der Hügel vor allem durch Guglielmo Marconi, dem es hier am 12. Dezember 1901 gelang, das erste drahtlose Transatlantik-Signal in Form des Morsebuchstabens 'S' zu empfangen. Das markanteste Bauwerk auf dem Hügel ist der Cabot Tower, der zwischen 1897 und 1900 zur Erinnerung an das 400. Jubiläum der Entdeckung Neufundlands durch John Cabot errichtet wurde. Aufgrund seiner strategischen Lage am Eingang zum Hafen von St. John's diente Signal Hill jahrhundertelang als militärische Befestigung. Hier fand 1762 die Schlacht von Signal Hill statt, das letzte Gefecht des Siebenjährigen Krieges in Nordamerika, bei dem die Briten die Franzosen besiegten. Heute ist Signal Hill eine National Historic Site und bietet Besuchern neben der Besichtigung des Turms auch spektakuläre Ausblicke auf den Atlantik und die vorbeiziehenden Eisberge. Die Wanderwege rund um den Hügel, wie der North Head Trail, sind bei Einheimischen und Touristen gleichermaßen beliebt für ihre raue Schönheit und geschichtsträchtige Atmosphäre.",
      hu: "A Signal Hill egy St. John's városa felett magasodó domb Új-Fundlandon, amely Kanada egyik legfontosabb történelmi helyszíne. Világhírnevét Guglielmo Marconinak köszönheti, aki 1901. december 12-én itt fogta az első vezeték nélküli transzatlanti jelet, a morze ábécé 'S' betűjét. A domb leglátványosabb építménye a Cabot-torony, amelyet 1897 és 1900 között építettek John Cabot Új-Fundland felfedezésének 400. évfordulójára és Viktória királynő gyémántjubileumára. Stratégiai elhelyezkedése miatt a domb évszázadokon át katonai erődként szolgált, védve St. John's kikötőjének bejáratát. Itt zajlott 1762-ben a Signal Hill-i csata, a hétéves háború utolsó észak-amerikai ütközete, amelyben a brit csapatok legyőzték a franciákat. Ma a terület Nemzeti Történelmi Emlékhely, ahol a látogatók megismerhetik a hírközlés és a hadtörténet emlékeit, miközben lenyűgöző kilátás nyílik az Atlanti-óceánra és az elúszó jéghegyekre. A környék túraútvonalai, mint például a North Head Trail, vadregényes tájaikkal és történelmi hangulatukkal vonzzák a látogatókat.",
      ro: "Signal Hill este o colină strategică situată deasupra orașului St. John's în Newfoundland, fiind un loc de o importanță istorică majoră pentru Canada. Dealul a devenit faimos la nivel mondial datorită lui Guglielmo Marconi, care la 12 decembrie 1901 a recepționat aici primul semnal wireless transatlantic, reprezentând litera 'S' în codul Morse. Cel mai proeminent monument de pe colină este Turnul Cabot, construit între 1897 și 1900 pentru a comemora a 400-a aniversare a descoperirii insulei de către John Cabot. Datorită poziției sale dominante la intrarea în portul St. John's, Signal Hill a servit timp de secole ca fortificație militară esențială. În 1762, aici a avut loc Bătălia de la Signal Hill, ultima confruntare a Războiului de Șapte Ani în America de Nord, în care forțele britanice i-au învins pe francezi. Astăzi, Signal Hill este desemnat Sit Istoric Național, oferind vizitatorilor expoziții despre istoria comunicațiilor și vederi panoramice spectaculoase asupra Atlanticului și aisbergurilor în derivă. Traseele de drumeție, precum North Head Trail, sunt renumite pentru peisajul lor costier dramatic și atmosfera încărcată de istorie.",
      en: "Signal Hill is a prominent hill overlooking the city of St. John's, Newfoundland, and serves as one of Canada's most significant historical sites. It gained international fame on December 12, 1901, when Guglielmo Marconi received the first transatlantic wireless signal here, consisting of the letter 'S' in Morse code. The hill's most recognizable structure is Cabot Tower, constructed between 1897 and 1900 to commemorate the 400th anniversary of John Cabot's arrival in Newfoundland and Queen Victoria's Diamond Jubilee. Due to its strategic vantage point at the entrance of St. John's Harbour, Signal Hill was used for military fortifications for centuries. It was the site of the Battle of Signal Hill in 1762, the final conflict of the Seven Years' War in North America, where British forces successfully defeated the French. Today, it is a National Historic Site operated by Parks Canada, offering educational exhibits on military and communication history. Visitors frequent the site for its rugged hiking trails and breathtaking views of the Atlantic Ocean, often spotting icebergs during the spring months.",
      es: "Signal Hill domina St. John's y el Atlántico, siendo un lugar de importancia histórica mundial. Aquí, Guglielmo Marconi recibió en 1901 la primera señal de radio transatlántica de la historia, lo que marcó el inicio de la era moderna de las comunicaciones y cambió para siempre la forma en que el mundo se conecta a través de los océanos.",
      pt: "Signal Hill ergue-se sobre St. John's e o Atlântico e é um local de importância histórica mundial. Foi aqui que Guglielmo Marconi recebeu o primeiro sinal de rádio transatlântico da história em 1901, marcando o início da era moderna das comunicações e transformando a conectividade global de forma permanente.",
      fr: "Signal Hill surplombe St. John's et l'Atlantique et est un site d'importance historique mondiale. C'est ici que Guglielmo Marconi a reçu le premier signal radio transatlantique de l'histoire en 1901, marquant le début de l'ère moderne des communications et ouvrant la voie au monde globalisé actuel.",
    },
    factsAdvanced: {
      de: ["Guglielmo Marconi empfing hier 1901 das erste transatlantische Funksignal.", "Der Cabot Tower wurde im Jahr 1900 offiziell fertiggestellt.", "Die Schlacht von Signal Hill fand am 15. September 1762 statt.", "Signal Hill ist seit 1951 eine National Historic Site of Canada.", "Der Hügel liegt etwa 167 Meter über dem Meeresspiegel.", "Die Signal Hill Tattoo führt im Sommer militärische Übungen aus dem 19. Jahrhundert vor."],
      hu: ["Guglielmo Marconi 1901-ben itt fogta az első transzatlanti rádiójelet.", "A Cabot-tornyot 1900-ban adták át a nagyközönségnek.", "A Signal Hill-i csata 1762. szeptember 15-én zajlott le.", "A helyszínt 1951-ben nyilvánították Kanada Nemzeti Történelmi Emlékhelyévé.", "A domb legmagasabb pontja 167 méterrel található a tengerszint felett.", "A Signal Hill Tattoo keretében nyaranta 19. századi katonai bemutatókat tartanak."],
      ro: ["Guglielmo Marconi a recepționat primul semnal radio transatlantic aici în 1901.", "Turnul Cabot a fost finalizat oficial în anul 1900.", "Bătălia de la Signal Hill a avut loc la data de 15 septembrie 1762.", "Locația a fost desemnată Sit Istoric Național al Canadei în anul 1951.", "Colina are o înălțime de aproximativ 167 de metri deasupra nivelului mării.", "Evenimentul Signal Hill Tattoo reconstituie exerciții militare din secolul al XIX-lea."],
      en: ["Guglielmo Marconi received the first transatlantic wireless signal here in 1901.", "Cabot Tower was officially completed and opened in 1900.", "The Battle of Signal Hill took place on September 15, 1762.", "The site was designated a National Historic Site of Canada in 1951.", "The hill rises to an elevation of approximately 167 meters above sea level.", "The Signal Hill Tattoo performs 19th-century military drills during the summer."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Erstes Funksignal 1901", "Cabot Tower Wahrzeichen", "Strategische Militärlage", "Blick auf St. John's Hafen"], hu: ["Első rádiójel 1901-ben", "A Cabot-torony a jelképe", "Stratégiai katonai helyszín", "Kilátás St. John's kikötőjére"], ro: ["Primul semnal radio în 1901", "Turnul Cabot ca punct de reper", "Locație militară strategică", "Vedere spre portul St. John's"], en: ["First wireless signal in 1901", "Home to the Cabot Tower", "Strategic military defense site", "Panoramic views of the harbor"] , es: ["Primera señal de radio 1901", "Monumento Cabot Tower", "Posición militar estratégica", "Vista al puerto de St. John's"], pt: ["Primeiro sinal de rádio 1901", "Monumento Cabot Tower", "Posição militar estratégica", "Vista para o porto de St. John's"], fr: ["Premier signal radio en 1901", "Cabot Tower emblématique", "Position militaire stratégique", "Vue sur le port de St. John's"]},
    elevation: 167, historyYear: 1901, historyPeriod: "Modern", image: "/poi-images/ca-signal-hill.webp"},
  {
    id: "ca-banff-grizzly", "sights": {
      "de": [
            {
                  "name": "Cascade Amphitheatre",
                  "text": "Ein natürliches Amphitheater am Cascade Mountain in Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.584514,
                        51.229877
                  ]
            },
            {
                  "name": "Cascade Mountain",
                  "text": "Ein markanter Berg im Banff-Nationalpark.",
                  "category": "natural",
                  "coords": [
                        -115.562937,
                        51.229004
                  ]
            },
            {
                  "name": "Mt Norquay Sightseeing Chairlift",
                  "text": "Ein Sessellift mit Panoramablick auf Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.600136,
                        51.201316
                  ]
            },
            {
                  "name": "Vermilion Lake Viewpoint",
                  "text": "Ein Aussichtspunkt auf die Vermilion Lakes in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.604829,
                        51.181414
                  ]
            },
            {
                  "name": "Vermilion Lake",
                  "text": "Eine Reihe von Seen nahe Banff.",
                  "category": "natural",
                  "coords": [
                        -115.603248,
                        51.182265
                  ]
            },
            {
                  "name": "Cory Pass",
                  "text": "Ein Gebirgspass im Banff-Gebiet.",
                  "category": "natural",
                  "coords": [
                        -115.67724,
                        51.204113
                  ]
            },
            {
                  "name": "Mount Louis",
                  "text": "Ein Gipfel, bekannt für sein auffälliges Aussehen, in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.679569,
                        51.215417
                  ]
            },
            {
                  "name": "Mount Brewster",
                  "text": "Ein Gipfel im Banff-Gebiet.",
                  "category": "natural",
                  "coords": [
                        -115.655197,
                        51.246202
                  ]
            },
            {
                  "name": "The Finger",
                  "text": "Eine Felsformation, die einem Finger ähnelt, in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.727801,
                        51.220753
                  ]
            },
            {
                  "name": "Cockscomb Mountain",
                  "text": "Ein Gipfel mit markanter Form in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.724351,
                        51.237439
                  ]
            },
            {
                  "name": "Mount Cory",
                  "text": "Mount Cory ist ein Gipfel in den kanadischen Rocky Mountains nahe Banff.",
                  "category": "natural",
                  "coords": [
                        -115.690516,
                        51.200401
                  ]
            },
            {
                  "name": "Muleshoe",
                  "text": "Muleshoe ist eine Attraktion im Banff-Grizzly-Gebiet.",
                  "category": "landmark",
                  "coords": [
                        -115.719334,
                        51.179208
                  ]
            },
            {
                  "name": "Cave",
                  "text": "Cave ist ein Monument im Banff-Grizzly-Gebiet.",
                  "category": "historical",
                  "coords": [
                        -115.689919,
                        51.18859
                  ]
            },
            {
                  "name": "Backswamp",
                  "text": "Backswamp ist ein Aussichtspunkt im Banff-Grizzly-Gebiet.",
                  "category": "natural",
                  "coords": [
                        -115.696277,
                        51.168725
                  ]
            },
            {
                  "name": "Sulphur Mountain Cosmic Ray Station",
                  "text": "Die Sulphur Mountain Cosmic Ray Station ist eine ehemalige kosmische Strahlungsforschungsstation auf dem Sulphur Mountain, heute eine historische Stätte.",
                  "category": "landmark",
                  "coords": [
                        -115.578558,
                        51.147073
                  ]
            },
            {
                  "name": "Sanson Peak",
                  "text": "Sanson Peak ist ein Gipfel in der Nähe von Banff.",
                  "category": "natural",
                  "coords": [
                        -115.583181,
                        51.151771
                  ]
            },
            {
                  "name": "Sulphur Mountain",
                  "text": "Der Sulphur Mountain ist ein Berg im Banff-Nationalpark mit einer Gondelbahn und heißen Quellen.",
                  "category": "natural",
                  "coords": [
                        -115.555028,
                        51.123623
                  ]
            },
            {
                  "name": "Mount Norquay Green Spot",
                  "text": "Mount Norquay Green Spot ist ein Aussichtspunkt am Mount Norquay.",
                  "category": "natural",
                  "coords": [
                        -115.58705,
                        51.196239
                  ]
            },
            {
                  "name": "Banff Upper Hot Springs",
                  "text": "Die Banff Upper Hot Springs sind ein natürliches Thermalbad in Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.560613,
                        51.150865
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Cascade Amphitheatre",
                  "text": "Egy természetes amfiteátrum a Cascade Mountain-en, Banffban.",
                  "category": "landmark",
                  "coords": [
                        -115.584514,
                        51.229877
                  ]
            },
            {
                  "name": "Cascade Mountain",
                  "text": "Egy jellegzetes hegy a Banff Nemzeti Parkban.",
                  "category": "natural",
                  "coords": [
                        -115.562937,
                        51.229004
                  ]
            },
            {
                  "name": "Mt Norquay Sightseeing Chairlift",
                  "text": "Egy panorámás felvonó Banffra.",
                  "category": "landmark",
                  "coords": [
                        -115.600136,
                        51.201316
                  ]
            },
            {
                  "name": "Vermilion Lake Viewpoint",
                  "text": "Egy kilátópont a Vermilion-tavakra Banffban.",
                  "category": "natural",
                  "coords": [
                        -115.604829,
                        51.181414
                  ]
            },
            {
                  "name": "Vermilion Lake",
                  "text": "Tavak sorozata Banff közelében.",
                  "category": "natural",
                  "coords": [
                        -115.603248,
                        51.182265
                  ]
            },
            {
                  "name": "Cory Pass",
                  "text": "Egy hegyi hágó a Banff térségében.",
                  "category": "natural",
                  "coords": [
                        -115.67724,
                        51.204113
                  ]
            },
            {
                  "name": "Mount Louis",
                  "text": "Egy csúcs, amely feltűnő megjelenéséről ismert Banffban.",
                  "category": "natural",
                  "coords": [
                        -115.679569,
                        51.215417
                  ]
            },
            {
                  "name": "Mount Brewster",
                  "text": "Egy csúcs a Banff térségében.",
                  "category": "natural",
                  "coords": [
                        -115.655197,
                        51.246202
                  ]
            },
            {
                  "name": "The Finger",
                  "text": "Egy ujjra emlékeztető sziklaformáció Banffban.",
                  "category": "natural",
                  "coords": [
                        -115.727801,
                        51.220753
                  ]
            },
            {
                  "name": "Cockscomb Mountain",
                  "text": "Egy jellegzetes alakú csúcs Banffban.",
                  "category": "natural",
                  "coords": [
                        -115.724351,
                        51.237439
                  ]
            },
            {
                  "name": "Mount Cory",
                  "text": "A Mount Cory egy csúcs a kanadai Sziklás-hegységben, Banff közelében.",
                  "category": "natural",
                  "coords": [
                        -115.690516,
                        51.200401
                  ]
            },
            {
                  "name": "Muleshoe",
                  "text": "A Muleshoe egy látványosság a Banff-Grizzly területen.",
                  "category": "landmark",
                  "coords": [
                        -115.719334,
                        51.179208
                  ]
            },
            {
                  "name": "Cave",
                  "text": "A Cave egy emlékmű a Banff-Grizzly területen.",
                  "category": "historical",
                  "coords": [
                        -115.689919,
                        51.18859
                  ]
            },
            {
                  "name": "Backswamp",
                  "text": "A Backswamp egy kilátópont a Banff-Grizzly területen.",
                  "category": "natural",
                  "coords": [
                        -115.696277,
                        51.168725
                  ]
            },
            {
                  "name": "Sulphur Mountain Cosmic Ray Station",
                  "text": "A Sulphur Mountain Cosmic Ray Station egy egykori kozmikus sugárzás kutatóállomás a Sulphur Mountain tetején, ma történelmi helyszín.",
                  "category": "landmark",
                  "coords": [
                        -115.578558,
                        51.147073
                  ]
            },
            {
                  "name": "Sanson Peak",
                  "text": "A Sanson Peak egy csúcs Banff közelében.",
                  "category": "natural",
                  "coords": [
                        -115.583181,
                        51.151771
                  ]
            },
            {
                  "name": "Sulphur Mountain",
                  "text": "A Sulphur Mountain egy hegy a Banff Nemzeti Parkban, felvonóval és meleg forrásokkal.",
                  "category": "natural",
                  "coords": [
                        -115.555028,
                        51.123623
                  ]
            },
            {
                  "name": "Mount Norquay Green Spot",
                  "text": "A Mount Norquay Green Spot egy kilátópont a Mount Norquay-n.",
                  "category": "natural",
                  "coords": [
                        -115.58705,
                        51.196239
                  ]
            },
            {
                  "name": "Banff Upper Hot Springs",
                  "text": "A Banff Upper Hot Springs természetes termálfürdő Banffban.",
                  "category": "landmark",
                  "coords": [
                        -115.560613,
                        51.150865
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Cascade Amphitheatre",
                  "text": "Un amfiteatru natural pe Cascade Mountain în Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.584514,
                        51.229877
                  ]
            },
            {
                  "name": "Cascade Mountain",
                  "text": "Un munte proeminent în Parcul Național Banff.",
                  "category": "natural",
                  "coords": [
                        -115.562937,
                        51.229004
                  ]
            },
            {
                  "name": "Mt Norquay Sightseeing Chairlift",
                  "text": "Un telescaun cu vederi panoramice asupra orașului Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.600136,
                        51.201316
                  ]
            },
            {
                  "name": "Vermilion Lake Viewpoint",
                  "text": "Un punct de belvedere asupra lacurilor Vermilion în Banff.",
                  "category": "natural",
                  "coords": [
                        -115.604829,
                        51.181414
                  ]
            },
            {
                  "name": "Vermilion Lake",
                  "text": "O serie de lacuri lângă Banff.",
                  "category": "natural",
                  "coords": [
                        -115.603248,
                        51.182265
                  ]
            },
            {
                  "name": "Cory Pass",
                  "text": "O trecătoare montană în zona Banff.",
                  "category": "natural",
                  "coords": [
                        -115.67724,
                        51.204113
                  ]
            },
            {
                  "name": "Mount Louis",
                  "text": "Un vârf cunoscut pentru aspectul său izbitor în Banff.",
                  "category": "natural",
                  "coords": [
                        -115.679569,
                        51.215417
                  ]
            },
            {
                  "name": "Mount Brewster",
                  "text": "Un vârf în zona Banff.",
                  "category": "natural",
                  "coords": [
                        -115.655197,
                        51.246202
                  ]
            },
            {
                  "name": "The Finger",
                  "text": "O formațiune stâncoasă asemănătoare unui deget în Banff.",
                  "category": "natural",
                  "coords": [
                        -115.727801,
                        51.220753
                  ]
            },
            {
                  "name": "Cockscomb Mountain",
                  "text": "Un vârf cu o formă distinctivă în Banff.",
                  "category": "natural",
                  "coords": [
                        -115.724351,
                        51.237439
                  ]
            },
            {
                  "name": "Mount Cory",
                  "text": "Mount Cory este un vârf în Munții Stâncoși canadieni, lângă Banff.",
                  "category": "natural",
                  "coords": [
                        -115.690516,
                        51.200401
                  ]
            },
            {
                  "name": "Muleshoe",
                  "text": "Muleshoe este o atracție în zona Banff-Grizzly.",
                  "category": "landmark",
                  "coords": [
                        -115.719334,
                        51.179208
                  ]
            },
            {
                  "name": "Cave",
                  "text": "Cave este un monument în zona Banff-Grizzly.",
                  "category": "historical",
                  "coords": [
                        -115.689919,
                        51.18859
                  ]
            },
            {
                  "name": "Backswamp",
                  "text": "Backswamp este un punct de belvedere în zona Banff-Grizzly.",
                  "category": "natural",
                  "coords": [
                        -115.696277,
                        51.168725
                  ]
            },
            {
                  "name": "Sulphur Mountain Cosmic Ray Station",
                  "text": "Stația de Raze Cosmice de pe Sulphur Mountain este o fostă stație de cercetare a razelor cosmice pe vârful Sulphur Mountain, acum un sit istoric.",
                  "category": "landmark",
                  "coords": [
                        -115.578558,
                        51.147073
                  ]
            },
            {
                  "name": "Sanson Peak",
                  "text": "Sanson Peak este un vârf lângă Banff.",
                  "category": "natural",
                  "coords": [
                        -115.583181,
                        51.151771
                  ]
            },
            {
                  "name": "Sulphur Mountain",
                  "text": "Sulphur Mountain este un munte în Parcul Național Banff, cu o telecabină și izvoare termale.",
                  "category": "natural",
                  "coords": [
                        -115.555028,
                        51.123623
                  ]
            },
            {
                  "name": "Mount Norquay Green Spot",
                  "text": "Mount Norquay Green Spot este un punct de belvedere pe Mount Norquay.",
                  "category": "natural",
                  "coords": [
                        -115.58705,
                        51.196239
                  ]
            },
            {
                  "name": "Banff Upper Hot Springs",
                  "text": "Banff Upper Hot Springs este o baie termală naturală în Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.560613,
                        51.150865
                  ]
            }
      ],
      "en": [
            {
                  "name": "Cascade Amphitheatre",
                  "text": "A natural amphitheatre on Cascade Mountain in Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.584514,
                        51.229877
                  ]
            },
            {
                  "name": "Cascade Mountain",
                  "text": "A prominent mountain in Banff National Park.",
                  "category": "natural",
                  "coords": [
                        -115.562937,
                        51.229004
                  ]
            },
            {
                  "name": "Mt Norquay Sightseeing Chairlift",
                  "text": "A chairlift offering panoramic views of Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.600136,
                        51.201316
                  ]
            },
            {
                  "name": "Vermilion Lake Viewpoint",
                  "text": "A viewpoint of the Vermilion Lakes in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.604829,
                        51.181414
                  ]
            },
            {
                  "name": "Vermilion Lake",
                  "text": "A series of lakes near Banff.",
                  "category": "natural",
                  "coords": [
                        -115.603248,
                        51.182265
                  ]
            },
            {
                  "name": "Cory Pass",
                  "text": "A mountain pass in the Banff area.",
                  "category": "natural",
                  "coords": [
                        -115.67724,
                        51.204113
                  ]
            },
            {
                  "name": "Mount Louis",
                  "text": "A peak known for its striking appearance in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.679569,
                        51.215417
                  ]
            },
            {
                  "name": "Mount Brewster",
                  "text": "A peak in the Banff area.",
                  "category": "natural",
                  "coords": [
                        -115.655197,
                        51.246202
                  ]
            },
            {
                  "name": "The Finger",
                  "text": "A rock formation resembling a finger in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.727801,
                        51.220753
                  ]
            },
            {
                  "name": "Cockscomb Mountain",
                  "text": "A peak with a distinctive shape in Banff.",
                  "category": "natural",
                  "coords": [
                        -115.724351,
                        51.237439
                  ]
            },
            {
                  "name": "Mount Cory",
                  "text": "Mount Cory is a peak in the Canadian Rockies near Banff.",
                  "category": "natural",
                  "coords": [
                        -115.690516,
                        51.200401
                  ]
            },
            {
                  "name": "Muleshoe",
                  "text": "Muleshoe is an attraction in the Banff-Grizzly area.",
                  "category": "landmark",
                  "coords": [
                        -115.719334,
                        51.179208
                  ]
            },
            {
                  "name": "Cave",
                  "text": "Cave is a monument in the Banff-Grizzly area.",
                  "category": "historical",
                  "coords": [
                        -115.689919,
                        51.18859
                  ]
            },
            {
                  "name": "Backswamp",
                  "text": "Backswamp is a viewpoint in the Banff-Grizzly area.",
                  "category": "natural",
                  "coords": [
                        -115.696277,
                        51.168725
                  ]
            },
            {
                  "name": "Sulphur Mountain Cosmic Ray Station",
                  "text": "Sulphur Mountain Cosmic Ray Station is a former cosmic ray research station atop Sulphur Mountain, now a historic site.",
                  "category": "landmark",
                  "coords": [
                        -115.578558,
                        51.147073
                  ]
            },
            {
                  "name": "Sanson Peak",
                  "text": "Sanson Peak is a peak near Banff.",
                  "category": "natural",
                  "coords": [
                        -115.583181,
                        51.151771
                  ]
            },
            {
                  "name": "Sulphur Mountain",
                  "text": "Sulphur Mountain is a mountain in Banff National Park with a gondola and hot springs.",
                  "category": "natural",
                  "coords": [
                        -115.555028,
                        51.123623
                  ]
            },
            {
                  "name": "Mount Norquay Green Spot",
                  "text": "Mount Norquay Green Spot is a viewpoint on Mount Norquay.",
                  "category": "natural",
                  "coords": [
                        -115.58705,
                        51.196239
                  ]
            },
            {
                  "name": "Banff Upper Hot Springs",
                  "text": "Banff Upper Hot Springs is a natural hot spring pool in Banff.",
                  "category": "landmark",
                  "coords": [
                        -115.560613,
                        51.150865
                  ]
            }
      ]
},
    type: "animal-habitat",
    parent: "CA",
    coords: [-115.6, 51.2],
    name: { de: "Banff-Grizzlybären", hu: "Banff-i grizzlymedvék", ro: "Urșii grizzly din Banff", en: "Banff Grizzly Bears" },
    description: { de: "Die Rockies sind die Heimat dieser beeindruckenden Raubtiere.", hu: "A Sziklás-hegység ad otthont ezeknek a lenyűgöző ragadozóknak.", ro: "Munții Stâncoși sunt casa acestor prădători impresionanți.", en: "The Rockies are home to these impressive predators." , es: "Las Rocosas son el hogar de estos impresionantes depredadores.", pt: "As Montanhas Rochosas são o lar destes impressionantes predadores.", fr: "Les Rocheuses sont le refuge de ces impressionnants prédateurs."},
    descriptionAdvanced: {
      de: "Der Grizzlybär (Ursus arctos horribilis) ist eines der ikonischsten Symbole der Wildnis im Banff-Nationalpark in den kanadischen Rocky Mountains. Diese imposanten Säugetiere spielen eine entscheidende Rolle im Ökosystem des Parks als Spitzenprädatoren und Indikatoren für die Gesundheit der Umwelt. In Banff leben schätzungsweise 60 bis 70 Grizzlybären, die weite Reviere durchstreifen, die von dichten Wäldern bis hin zu alpinen Wiesen reichen. Da der Park von bedeutenden Verkehrsachsen wie dem Trans-Canada Highway durchquert wird, hat Banff Pionierarbeit bei der Errichtung von Wildtierüberführungen und -unterführungen geleistet, um Kollisionen zu vermeiden und die genetische Vielfalt zu erhalten. Grizzlybären in dieser Region sind besonders bekannt für ihre saisonalen Wanderungen auf der Suche nach Nahrung, wobei sie im Frühjahr oft in tieferen Lagen und im Spätsommer in den Beerenfeldern der höheren Lagen anzutreffen sind. Die Erhaltung dieser Art erfordert ein strenges Management des menschlichen Verhaltens im Park, um Konflikte zu minimieren und den Bären einen sicheren Lebensraum zu garantieren. Besucher werden dazu angehalten, Bärenspray mitzuführen und einen Sicherheitsabstand von mindestens 100 Metern einzuhalten, um sowohl sich selbst als auch die Tiere zu schützen.",
      hu: "A grizzlymedve (Ursus arctos horribilis) a kanadai Sziklás-hegységben található Banff Nemzeti Park egyik legikonikusabb vadonélő állata. Ezek a hatalmas ragadozók kulcsszerepet játszanak a park ökoszisztémájában mint csúcsragadozók és a környezet állapotának jelzői. Banff területén becslések szerint 60-70 grizzly él, amelyek hatalmas területeket járnak be a sűrű erdőktől a magashegyi rétekig. Mivel a parkot olyan jelentős közlekedési útvonalak szelik át, mint a Trans-Canada Highway, Banff úttörő szerepet vállalt a vadvédelmi átjárók és aluljárók kiépítésében a gázolások megelőzése és a populációk közötti génáramlás biztosítása érdekében. A régió grizzlyjei híresek szezonális vándorlásaikról: tavasszal az alacsonyabb fekvésű völgyekben, késő nyáron pedig a magasabb régiók bogyós területein keresik táplálékukat. A faj megőrzése szigorú szabályozást igényel a látogatók részéről is, hogy minimalizálják az ember-állat konfliktusokat. A turisták számára kötelező a medveriasztó spray használata és a minimum 100 méteres távolság betartása, ami elengedhetetlen mind az emberek, mind a medvék biztonsága érdekében.",
      ro: "Ursul grizzly (Ursus arctos horribilis) este unul dintre cele mai emblematice simboluri ale vieții sălbatice din Parcul Național Banff, situat în Munții Stâncoși canadieni. Aceste mamifere impresionante joacă un rol crucial în ecosistemul parcului ca prădători de vârf și indicatori ai sănătății mediului înconjurător. Se estimează că în Banff trăiesc între 60 și 70 de urși grizzly, care străbat teritorii vaste ce cuprind de la păduri dense până la pajiști alpine. Deoarece parcul este traversat de rute majore de transport, precum Trans-Canada Highway, Banff a fost un pionier în construirea de pasaje și subpasaje pentru animale sălbatice, scopul fiind prevenirea coliziunilor și menținerea diversității genetice. Urșii grizzly din această regiune sunt cunoscuți pentru migrațiile lor sezoniere în căutarea hranei, fiind adesea observați în văile joase primăvara și în zonele bogate în fructe de pădure la altitudini mari spre sfârșitul verii. Conservarea acestei specii necesită un management strict al interacțiunilor umane pentru a minimiza conflictele. Vizitatorii sunt sfătuiți să poarte spray împotriva urșilor și să mențină o distanță de siguranță de cel puțin 100 de metri față de aceste animale.",
      en: "The grizzly bear (Ursus arctos horribilis) is one of the most iconic symbols of the wilderness within Banff National Park in the Canadian Rockies. These powerful mammals play a critical role in the park's ecosystem as apex predators and indicators of overall environmental health. There are an estimated 60 to 70 grizzly bears living in Banff, occupying vast home ranges that span from dense evergreen forests to high-elevation alpine meadows. Because the park is bisected by major transportation routes like the Trans-Canada Highway, Banff has become a world leader in wildlife conservation through the construction of specialized overpasses and underpasses to prevent road mortality. Grizzlies in this region are known for their seasonal movements; they typically forage in low-lying valleys during the spring and move to subalpine slopes to feed on berries in late summer. Protecting this sensitive population requires strict management of human activities to minimize encounters and preserve natural habitats. Park regulations mandate that visitors maintain a distance of at least 100 meters from bears and carry bear spray for personal safety.",
      es: "El Parque Nacional Banff ofrece uno de los mejores hábitats para los osos grizzly en América del Norte. Estos majestuosos depredadores son un símbolo de la naturaleza virgen de las Montañas Rocosas, y su protección es una de las tareas más importantes del parque para mantener el equilibrio ecológico.",
      pt: "O Parque Nacional Banff oferece um dos melhores habitats para os ursos grizzly na América do Norte. Estes majestosos predadores são um símbolo da natureza selvagem intocada das Montanhas Rochosas, e a sua proteção é uma das tarefas mais importantes do parque para manter o equilíbrio ecológico.",
      fr: "Le parc national de Banff offre l'un des meilleurs habitats pour les grizzlis en Amérique du Nord. Ces prédateurs majestueux sont un symbole de la nature sauvage intacte des montagnes Rocheuses, et leur protection est l'une des missions les plus importantes du parc pour préserver l'équilibre écologique.",
    },
    factsAdvanced: {
      de: ["In Banff National Park leben schätzungsweise 60 bis 70 Grizzlybären.", "Ein ausgewachsener männlicher Grizzly kann zwischen 180 und 360 kg wiegen.", "Grizzlybären verbringen etwa 5 bis 7 Monate im Winterschlaf.", "In Banff gibt es über 40 Wildtierunterführungen und 6 Überführungen.", "Bären können eine Höchstgeschwindigkeit von bis zu 55 km/h erreichen.", "Etwa 80% der Nahrung eines Grizzlys in Banff besteht aus Pflanzen und Beeren."],
      hu: ["A Banff Nemzeti Parkban körülbelül 60-70 grizzlymedve él.", "Egy kifejlett hím grizzly súlya 180 és 360 kg között mozoghat.", "A medvék évente 5-7 hónapot töltenek téli álomban.", "Banff területén 44 vadvédelmi átjáró segíti az állatok biztonságos mozgását.", "A grizzlymedvék rövid távon akár 55 km/h sebességgel is képesek futni.", "A banffi grizzlyk étrendjének mintegy 80%-át növények és bogyók alkotják."],
      ro: ["În Parcul Național Banff trăiesc aproximativ 60-70 de urși grizzly.", "Un mascul adult poate cântări între 180 și 360 de kilograme.", "Urșii grizzly petrec între 5 și 7 luni în stare de hibernare.", "Există 44 de structuri de traversare pentru animale sălbatice în Banff.", "Un urs grizzly poate atinge viteze de până la 55 km/h în alergare.", "Dieta urșilor grizzly din Banff este compusă în proporție de 80% din plante și fructe."],
      en: ["An estimated 60 to 70 grizzly bears reside within Banff National Park.", "Adult male grizzlies can weigh anywhere between 180 and 360 kg.", "Grizzly bears in the Rockies hibernate for approximately 5 to 7 months annually.", "Banff features 44 wildlife crossing structures, including 6 massive overpasses.", "Grizzlies are capable of running at speeds of up to 55 km/h (35 mph).", "Roughly 80% of a Banff grizzly's diet consists of vegetation and berries."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Majestätische Raubtiere", "Symbol der Wildnis", "Strenge Schutzmaßnahmen", "Beste Sichtungschancen im Frühjahr"], hu: ["Fenséges ragadozók", "A vadon szimbólumai", "Szigorú védelmi intézkedések", "Tavasszal a legnagyobb az esély a megfigyelésükre"], ro: ["Prădători maiestuoși", "Simbolul sălbăticiei", "Măsuri stricte de protecție", "Cele mai bune șanse de observare primăvara"], en: ["Majestic apex predators", "Symbols of the wilderness", "Strict conservation protocols", "Spring is the best time for sightings"] , es: ["Depredadores majestuosos", "Símbolo de la naturaleza salvaje", "Estrictas medidas de protección", "Mejores oportunidades de avistamiento en primavera"], pt: ["Predadores majestosos", "Símbolo da natureza selvagem", "Rigorosas medidas de proteção", "Melhores oportunidades de avistamento na primavera"], fr: ["Prédateurs majestueux", "Symbole de la nature sauvage", "Mesures de protection strictes", "Meilleures chances d'observation au printemps"]}, image: "/poi-images/ca-banff-grizzly.webp"},
  {
    id: "ca-churchill-polar-bear",
    type: "animal-habitat",
    parent: "CA",
    coords: [-94.1, 58.7],
    name: { de: "Churchill-Eisbären", hu: "Churchill-i jegesmedvék", ro: "Urșii polari din Churchill", en: "Churchill Polar Bears" },
    description: { de: "Churchill im Norden Manitobas ist international als die Welthauptstadt der Eisbären bekannt. Jeden Herbst versammeln sich hier hunderte Eisbären, während sie auf das Zufrieren der Hudson Bay warten.", hu: "Az észak-manitobai Churchill nemzetközileg a jegesmedvék világfővárosaként ismert. Minden ősszel több száz jegesmedve gyűlik itt össze, várva, hogy a Hudson-öböl befagyjon.", ro: "Churchill, situat în nordul Manitobei, este cunoscut la nivel internațional drept Capitala Mondială a Urșilor Polari. În fiecare toamnă, sute de urși polari se adună aici așteptând să se formeze gheața pe Golful Hudson.", en: "Churchill, located in northern Manitoba, is internationally known as the Polar Bear Capital of the World. Every autumn, hundreds of polar bears gather here as they wait for the sea ice to form on Hudson Bay." , es: "Churchill, al norte de Manitoba, es conocida internacionalmente como la capital mundial de los osos polares. Cada otoño, cientos de osos se reúnen aquí mientras esperan a que se congele la bahía de Hudson.", pt: "Churchill, no norte de Manitoba, é conhecida internacionalmente como a capital mundial dos ursos polares. Todos os outonos, centenas de ursos reúnem-se aqui enquanto esperam que a Baía de Hudson congele.", fr: "Churchill, dans le nord du Manitoba, est internationalement connue comme la capitale mondiale des ours polaires. Chaque automne, des centaines d'ours s'y rassemblent en attendant que la baie d'Hudson gèle."},
    descriptionAdvanced: {
      de: "Churchill, eine kleine Stadt am Ufer der Hudson Bay in Manitoba, ist weltweit als die Hauptstadt der Eisbären bekannt. Jedes Jahr im Herbst, meist zwischen Oktober und November, versammeln sich hunderte Eisbären (Ursus maritimus) in der Nähe der Stadt und warten darauf, dass das Meereis der Bucht zufriert. Sobald das Eis stabil genug ist, wandern die Bären hinaus, um ihre Hauptbeute, die Ringelrobben, zu jagen. Die Population der westlichen Hudson Bay ist eine der am besten untersuchten Eisbärenpopulationen der Welt, bietet jedoch aufgrund des Klimawandels und der verkürzten Eissaison Anlass zur Sorge. Churchill bietet einzigartige Möglichkeiten für den Ökotourismus, wobei Besucher in speziell konstruierten Tundra-Buggys sicher in den Lebensraum der Tiere vordringen können. Die Stadt hat ein ausgeklügeltes Bärenwarnsystem und sogar ein Eisbärengefängnis, um Bären, die zu nah an bewohnte Gebiete kommen, vorübergehend festzusetzen und später sicher umzusiedeln. Neben den Eisbären ist die Region auch für Belugawale im Sommer und Polarlichter im Winter bekannt. Churchill bleibt ein entscheidendes Zentrum für die wissenschaftliche Forschung zum Verständnis der Auswirkungen der globalen Erwärmung auf arktische Ökosysteme.",
      hu: "Churchill, a Manitoba tartományban, a Hudson-öböl partján fekvő kisváros világszerte a jegesmedvék fővárosaként ismert. Minden év őszén, általában október és november között, jegesmedvék (Ursus maritimus) százai gyűlnek össze a város közelében, várva, hogy az öböl vize befagyjon. Amint a jég elég vastaggá válik, a medvék elindulnak, hogy vadásszanak fő táplálékukra, a gyűrűsfókákra. A nyugat-hudson-öböli populáció a világ egyik legjobban kutatott jegesmedve-populációja, ám a klímaváltozás és a jégmentes időszak meghosszabbodása komoly veszélyt jelent számukra. Churchill egyedülálló ökoturisztikai célpont, ahol a látogatók speciálisan kialakított tundrabuszokkal (Tundra Buggy) biztonságosan figyelhetik meg az állatokat természetes környezetükben. A városban kifinomult riasztórendszer működik, sőt egy jegesmedve-börtön is létezik azoknak az egyedeknek, amelyek túl közel merészkednek a lakott területekhez, hogy később biztonságos távolságba szállíthassák őket. A jegesmedvék mellett a régió nyáron a belugákról, télen pedig a sarki fényről híres. Churchill továbbra is a tudományos kutatások központja, ahol a globális felmelegedés arktikus ökoszisztémákra gyakorolt hatásait vizsgálják.",
      ro: "Churchill, un mic oraș situat pe malul Golfului Hudson în Manitoba, este recunoscut la nivel mondial drept Capitala Mondială a Urșilor Polari. În fiecare toamnă, între lunile octombrie și noiembrie, sute de urși polari (Ursus maritimus) se adună în apropierea așezării, așteptând ca apele golfului să înghețe. Imediat ce gheața devine suficient de solidă, urșii pornesc în larg pentru a vâna principala lor sursă de hrană, focile inelate. Populația de urși din vestul Golfului Hudson este una dintre cele mai monitorizate din lume, însă scurtarea sezonului de gheață din cauza schimbărilor climatice reprezintă o amenințare majoră pentru supraviețuirea lor. Churchill oferă oportunități unice de ecoturism, permițând vizitatorilor să exploreze habitatul arctic în siguranță la bordul unor vehicule speciale numite Tundra Buggies. Orașul dispune de un program de alertă și chiar de o închisoare pentru urși, unde exemplarele care pătrund în zonele locuite sunt reținute temporar înainte de a fi relocate prin transport aerian. Pe lângă urșii polari, regiunea este celebră și pentru balenele beluga în timpul verii și spectaculoasele aurore boreale în timpul iernii. Churchill rămâne un centru vital pentru cercetarea științifică privind impactul încălzirii globale asupra ecosistemelor arctice.",
      en: "Churchill, a small town on the shores of Hudson Bay in Manitoba, is internationally recognized as the Polar Bear Capital of the World. Each autumn, typically during October and November, hundreds of polar bears (Ursus maritimus) gather near the town to await the freezing of the bay's waters. Once the sea ice forms, the bears move out onto the ice to hunt their primary prey, ringed seals, which provide the essential fat reserves needed for survival. The Western Hudson Bay population is one of the most extensively studied in the world, though it faces significant challenges due to climate change reducing the duration of the ice season. Churchill offers unique wildlife viewing experiences via specialized Tundra Buggies that allow tourists to observe the bears safely in their natural habitat. To manage human-bear interactions, the town operates a Polar Bear Alert Program and maintains a specialized holding facility, often called the polar bear jail, for bears that enter the community. In addition to bears, the area is a prime location for viewing beluga whales in the summer and the aurora borealis during the winter. Churchill serves as a critical hub for scientific research focused on the effects of global warming on Arctic biodiversity.",
      es: "Churchill, en Manitoba, es considerada la capital mundial de los osos polares, ya que cientos de ejemplares se congregan aquí en otoño esperando la formación de hielo en la bahía de Hudson. Esto ofrece la rara oportunidad de observar al depredador terrestre más grande del mundo en su hábitat natural.",
      pt: "Churchill, em Manitoba, é considerada a capital mundial dos ursos polares, pois centenas de ursos reúnem-se aqui no outono para esperar que a Baía de Hudson congele. Isto oferece a rara oportunidade de observar o maior predador terrestre do mundo em estado selvagem.",
      fr: "Churchill, au Manitoba, est considérée comme la capitale mondiale des ours polaires, car des centaines d'ours s'y rassemblent en automne pour attendre que la baie d'Hudson gèle. Cela offre l'occasion rare d'observer le plus grand prédateur terrestre de la planète dans son habitat naturel.",
    },
    factsAdvanced: {
      de: ["In der Region Churchill versammeln sich jährlich bis zu 1.000 Eisbären.", "Männliche Eisbären können ein Gewicht von bis zu 600 kg erreichen.", "Das Eisbärengefängnis in Churchill verfügt über 28 Zellen für Problembären.", "Eisbären können bis zu 10 km/h schnell schwimmen.", "Die Eissaison in der Hudson Bay hat sich in den letzten 30 Jahren verkürzt.", "Churchill ist nur per Flugzeug oder Zug erreichbar, es gibt keine Straßenanbindung."],
      hu: ["Churchill környékén évente akár 1000 jegesmedve is megfordulhat.", "A kifejlett hím jegesmedvék súlya a 600 kg-ot is elérheti.", "A város jegesmedve-börtöne 28 férőhelyes az eltévedt állatok számára.", "A jegesmedvék képesek akár 10 km/h sebességgel is úszni a jeges vízben.", "A Hudson-öböl jégmentes időszaka az elmúlt 30 évben jelentősen megnyúlt.", "Churchillbe nem vezet közút, csak repülővel vagy vonattal közelíthető meg."],
      ro: ["Până la 1000 de urși polari se adună anual în regiunea Churchill.", "Masculii de urs polar pot atinge o greutate de până la 600 de kilograme.", "Închisoarea pentru urși din Churchill are o capacitate de 28 de celule.", "Urșii polari pot înota cu o viteză constantă de 10 km/h.", "Sezonul de gheață din Golful Hudson s-a scurtat considerabil în ultimele trei decenii.", "Accesul în Churchill se face exclusiv cu avionul sau trenul, neexistând drumuri auto."],
      en: ["Up to 1,000 polar bears gather in the Churchill region each autumn.", "An adult male polar bear can weigh as much as 600 kg (1,320 lbs).", "The town's polar bear holding facility features 28 individual cells.", "Polar bears are excellent swimmers, reaching speeds of up to 10 km/h.", "The ice-free period in Hudson Bay has increased by about 3 weeks since the 1970s.", "Churchill is not accessible by road; travel is limited to air or rail."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Welthauptstadt der Eisbären", "An den Ufern der Hudson Bay gelegen", "Hauptbeobachtungszeit ist im Herbst"], hu: ["A jegesmedvék világfővárosa", "A Hudson-öböl partján található", "A főszezon ősszel van"], ro: ["Capitala mondială a urșilor polari", "Situat pe țărmul Golfului Hudson", "Sezonul principal de observare este toamna"], en: ["Polar Bear Capital of the World", "Located on the shores of Hudson Bay", "Prime viewing season is in autumn"] , es: ["Capital mundial de los osos polares", "Situada a orillas de la bahía de Hudson", "La temporada principal de observación es el otoño"], pt: ["Capital mundial dos ursos polares", "Situada nas margens da Baía de Hudson", "A principal época de observação é o outono"], fr: ["Capitale mondiale des ours polaires", "Située sur les rives de la baie d'Hudson", "La période d'observation principale est l'automne"]}, image: "/poi-images/ca-churchill-polar-bear.webp"},
  {
    id: "ca-wood-buffalo-bison",
    type: "animal-habitat",
    parent: "CA",
    coords: [-113.0, 59.5],
    name: { de: "Wood-Buffalo-Bisons", hu: "Wood Buffalo-i bölények", ro: "Bizonii din Wood Buffalo", en: "Wood Buffalo Bisons" },
    description: { de: "Schutzgebiet für die größte frei lebende Herde von Waldbisons.", hu: "Az erdei bölények legnagyobb szabadon élő csordájának rezervátuma.", ro: "Rezervație pentru cea mai mare cireadă de bizoni de pădure în libertate.", en: "Sanctuary for the largest free-roaming herd of wood bison." , es: "Reserva para la mayor manada de bisontes de bosque en libertad.", pt: "Santuário para a maior manada de bisontes-da-floresta em liberdade.", fr: "Réserve abritant le plus grand troupeau de bisons des bois en liberté."},
    descriptionAdvanced: {
      de: "Der Wood-Buffalo-Nationalpark, der sich über die Grenze von Alberta und den Northwest Territories erstreckt, ist der größte Nationalpark Kanadas und ein bedeutendes Schutzgebiet für den Waldbison (Bison bison athabascae). Mit einer Fläche von fast 45.000 Quadratkilometern wurde der Park 1922 speziell gegründet, um die letzte verbliebene Herde dieser majestätischen Tiere vor dem Aussterben zu bewahren. Heute beherbergt der Park mit über 3.000 Tieren die weltweit größte freilebende Herde von Waldbisons. Die Region zeichnet sich durch weite boreale Wälder, Grasländer und die größten Binnensalzpfannen Kanadas aus, die ein einzigartiges Ökosystem bilden. Aufgrund seiner ökologischen Bedeutung und der intakten Raubtier-Beute-Beziehung zwischen Bisons und Wölfen wurde der Park 1983 zum UNESCO-Weltnaturerbe erklärt. Neben den Bisons dient der Park auch als einziges natürliches Nistgebiet der vom Aussterben bedrohten Schreikraniche. Der Wood-Buffalo-Nationalpark ist zudem als größtes Lichtschutzgebiet der Welt zertifiziert, was ihn zu einem idealen Ort für die Beobachtung von Polarlichtern und des Sternenhimmels macht. Die Erhaltung der Bisons in dieser unberührten Wildnis bleibt eine der erfolgreichsten Naturschutzgeschichten Nordamerikas.",
      hu: "A Wood Buffalo Nemzeti Park, amely Alberta és az Északnyugati Területek határán fekszik, Kanada legnagyobb nemzeti parkja és az erdei bölény (Bison bison athabascae) egyik legfontosabb menedékhelye. A közel 45 000 négyzetkilométeres parkot 1922-ben alapították azzal a céllal, hogy megmentsék a kipusztulástól e fenséges állatok utolsó fennmaradt állományát. Napjainkban a park ad otthont a világ legnagyobb szabadon élő erdeibölény-populációjának, amely több mint 3000 egyedet számlál. A területet hatalmas boreális erdők, füves puszták és Kanada legnagyobb szárazföldi sós síkságai jellemzik, amelyek egyedülálló ökoszisztémát alkotnak. Ökológiai jelentősége, valamint a bölények és farkasok közötti természetes ragadozó-préda kapcsolat fenntartása miatt a park 1983 óta az UNESCO Világörökség része. A bölények mellett ez az egyetlen természetes fészkelőhelye a veszélyeztetett lármás darunak. A Wood Buffalo Nemzeti Park a világ legnagyobb sötét égbolt rezervátuma is, ami kiválóvá teszi a sarki fény és a csillagos égbolt megfigyelésére. A bölények védelme ebben az érintetlen vadonban Észak-Amerika egyik legsikeresebb fajmegőrzési projektje.",
      ro: "Parcul Național Wood Buffalo, situat la granița dintre Alberta și Teritoriile de Nord-Vest, este cel mai mare parc național din Canada și un sanctuar vital pentru bizonul de pădure (Bison bison athabascae). Cu o suprafață de aproape 45.000 de kilometri pătrați, parcul a fost înființat în 1922 special pentru a proteja ultimele turme rămase din această specie maiestuoasă. În prezent, parcul găzduiește cea mai mare populație de bizoni de pădure care trăiesc în libertate din lume, numărând peste 3.000 de exemplare. Peisajul este dominat de păduri boreale vaste, pajiști și cele mai mari câmpii de sare din interiorul Canadei, formând un ecosistem unic. Datorită importanței sale ecologice și a relației naturale prădător-pradă dintre bizoni și lupi, parcul a fost inclus în Patrimoniul Mondial UNESCO în 1983. Pe lângă bizoni, locația este singurul loc natural de cuibărit pentru cocorul american, o specie aflată în pericol critic de dispariție. Wood Buffalo este, de asemenea, cea mai mare rezervație de cer înstelat din lume, fiind un loc ideal pentru observarea aurorelor boreale. Eforturile de conservare a bizonilor în această sălbăticie neatinse reprezintă una dintre cele mai mari realizări de mediu din America de Nord.",
      en: "Wood Buffalo National Park, straddling the border between Alberta and the Northwest Territories, is Canada's largest national park and a critical refuge for the wood bison (Bison bison athabascae). Spanning nearly 45,000 square kilometers, the park was established in 1922 to save the last remaining herds of these massive animals from extinction. Today, it hosts the largest free-roaming wood bison population in the world, with numbers exceeding 3,000 individuals. The landscape is characterized by vast boreal forests, wetlands, and the largest inland salt plains in Canada, which create a unique and harsh environment for its inhabitants. In 1983, the park was designated a UNESCO World Heritage Site due to its exceptional ecological value and the undisturbed predator-prey relationship between wolves and bison. Beyond its namesake species, the park serves as the only natural nesting ground for the endangered whooping crane. Wood Buffalo is also recognized as the world's largest Dark Sky Preserve, providing unparalleled views of the stars and the aurora borealis. The ongoing protection of the bison within this pristine wilderness remains a cornerstone of North American wildlife conservation history.",
      es: "El Parque Nacional Wood Buffalo alberga la manada de bisontes de bosque en libertad más grande del mundo. El parque fue fundado originalmente en 1922 para proteger a esta subespecie en peligro de extinción y es hoy el parque nacional más grande de Canadá, además de haber sido declarado Patrimonio de la Humanidad por la UNESCO.",
      pt: "O Parque Nacional Wood Buffalo alberga a maior manada de bisontes-da-floresta do mundo em liberdade. O parque foi fundado originalmente em 1922 para proteger esta subespécie em perigo e é hoje o maior parque nacional do Canadá e um Património Mundial da UNESCO, protegendo um ecossistema boreal único.",
      fr: "Le parc national Wood Buffalo abrite le plus grand troupeau de bisons des bois en liberté au monde. Créé à l'origine en 1922 pour protéger cette sous-espèce menacée, il est aujourd'hui le plus grand parc national du Canada et un site du patrimoine mondial de l'UNESCO, préservant une nature sauvage immense.",
    },
    factsAdvanced: {
      de: ["Wood Buffalo ist mit 44.807 km² der größte Nationalpark Kanadas.", "Die aktuelle Waldbison-Population im Park beträgt über 3.000 Tiere.", "Der Park beherbergt den größten Biberdamm der Welt, der ca. 850 m lang ist.", "1983 wurde der Park in die Liste des UNESCO-Weltnaturerbes aufgenommen.", "Die Peace-Athabasca-Binnendelta ist eines der größten Süßwasserdelta der Welt.", "Wood Buffalo ist die weltweit größte zertifizierte Dark Sky Preserve."],
      hu: ["A Wood Buffalo 44 807 km²-es területével Kanada legnagyobb nemzeti parkja.", "A parkban élő erdei bölények száma jelenleg meghaladja a 3000-et.", "Itt található a világ legnagyobb hódvára, amely körülbelül 850 méter hosszú.", "Az UNESCO 1983-ban vette fel a parkot a Világörökségi listára.", "A Peace-Athabasca-delta a világ egyik legnagyobb édesvízi deltája.", "Ez a világ legnagyobb hivatalos sötét égbolt rezervátuma."],
      ro: ["Wood Buffalo este cel mai mare parc național din Canada, având 44.807 km².", "Populația actuală de bizoni de pădure din parc depășește 3.000 de capete.", "Parcul găzduiește cel mai mare baraj de castori din lume, lung de 850 de metri.", "Locația a fost inclusă în Patrimoniul Mondial UNESCO în anul 1983.", "Delta Peace-Athabasca este una dintre cele mai mari delte de apă dulce din lume.", "Este oficial cea mai mare rezervație de cer înstelat de pe planetă."],
      en: ["Wood Buffalo is Canada's largest national park, covering 44,807 square kilometers.", "The park's wood bison population is currently estimated at over 3,000 animals.", "It is home to the world's largest beaver dam, measuring 850 meters in length.", "The park was added to the UNESCO World Heritage list in 1983.", "The Peace-Athabasca Delta is one of the world's largest freshwater inland deltas.", "It was designated the world's largest Dark Sky Preserve in 2013."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Größte Waldbison-Herde", "Größter Park Kanadas", "UNESCO Weltnaturerbe", "Abgelegene Wildnis"], hu: ["A legnagyobb erdei bölénycsorda", "Kanada legnagyobb parkja", "UNESCO Világörökség", "Távoli vadon"], ro: ["Cea mai mare cireadă de bizoni", "Cel mai mare parc din Canada", "Patrimoniu Mondial UNESCO", "Sălbăticie izolată"], en: ["Largest wood bison herd", "Canada's largest national park", "UNESCO World Heritage Site", "Remote and vast wilderness"] , es: ["Mayor manada de bisontes", "Parque más grande de Canadá", "Patrimonio de la UNESCO", "Naturaleza remota"], pt: ["Maior manada de bisontes", "Maior parque do Canadá", "Património da UNESCO", "Sertão remoto"], fr: ["Plus grand troupeau de bisons", "Plus grand parc du Canada", "Patrimoine de l'UNESCO", "Désert sauvage éloigné"]},
    area: 44807, historyYear: 1922, image: "/poi-images/ca-wood-buffalo-bison.webp"},
  {
    id: "ca-quebec-maple", "sights": {
      "de": [
            {
                  "name": "Parc de l'OTJ",
                  "text": "Parc de l'OTJ ist ein Park in ca-quebec-maple.",
                  "category": "park",
                  "coords": [
                        -71.598119,
                        46.512572
                  ]
            },
            {
                  "name": "Église Saint-Flavien",
                  "text": "Église Saint-Flavien ist eine Kirche in ca-quebec-maple.",
                  "category": "religious",
                  "coords": [
                        -71.594213,
                        46.513048
                  ]
            },
            {
                  "name": "Église Saint-Agapit",
                  "text": "Église Saint-Agapit ist eine Kirche in ca-quebec-maple.",
                  "category": "religious",
                  "coords": [
                        -71.437289,
                        46.561117
                  ]
            },
            {
                  "name": "Terrain des loisirs",
                  "text": "Terrain des loisirs ist ein Freizeitpark in ca-quebec-maple.",
                  "category": "park",
                  "coords": [
                        -71.440021,
                        46.56443
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Parc de l'OTJ",
                  "text": "Parc de l'OTJ egy park ca-quebec-maple-ben.",
                  "category": "park",
                  "coords": [
                        -71.598119,
                        46.512572
                  ]
            },
            {
                  "name": "Église Saint-Flavien",
                  "text": "Église Saint-Flavien egy templom ca-quebec-maple-ben.",
                  "category": "religious",
                  "coords": [
                        -71.594213,
                        46.513048
                  ]
            },
            {
                  "name": "Église Saint-Agapit",
                  "text": "Église Saint-Agapit egy templom ca-quebec-maple-ben.",
                  "category": "religious",
                  "coords": [
                        -71.437289,
                        46.561117
                  ]
            },
            {
                  "name": "Terrain des loisirs",
                  "text": "Terrain des loisirs egy szabadidőpark ca-quebec-maple-ben.",
                  "category": "park",
                  "coords": [
                        -71.440021,
                        46.56443
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Parc de l'OTJ",
                  "text": "Parc de l'OTJ este un parc în ca-quebec-maple.",
                  "category": "park",
                  "coords": [
                        -71.598119,
                        46.512572
                  ]
            },
            {
                  "name": "Église Saint-Flavien",
                  "text": "Église Saint-Flavien este o biserică în ca-quebec-maple.",
                  "category": "religious",
                  "coords": [
                        -71.594213,
                        46.513048
                  ]
            },
            {
                  "name": "Église Saint-Agapit",
                  "text": "Église Saint-Agapit este o biserică în ca-quebec-maple.",
                  "category": "religious",
                  "coords": [
                        -71.437289,
                        46.561117
                  ]
            },
            {
                  "name": "Terrain des loisirs",
                  "text": "Terrain des loisirs este un parc de agrement în ca-quebec-maple.",
                  "category": "park",
                  "coords": [
                        -71.440021,
                        46.56443
                  ]
            }
      ],
      "en": [
            {
                  "name": "Parc de l'OTJ",
                  "text": "Parc de l'OTJ is a park in ca-quebec-maple.",
                  "category": "park",
                  "coords": [
                        -71.598119,
                        46.512572
                  ]
            },
            {
                  "name": "Église Saint-Flavien",
                  "text": "Église Saint-Flavien is a church in ca-quebec-maple.",
                  "category": "religious",
                  "coords": [
                        -71.594213,
                        46.513048
                  ]
            },
            {
                  "name": "Église Saint-Agapit",
                  "text": "Église Saint-Agapit is a church in ca-quebec-maple.",
                  "category": "religious",
                  "coords": [
                        -71.437289,
                        46.561117
                  ]
            },
            {
                  "name": "Terrain des loisirs",
                  "text": "Terrain des loisirs is a recreation park in ca-quebec-maple.",
                  "category": "park",
                  "coords": [
                        -71.440021,
                        46.56443
                  ]
            }
      ]
},
    type: "agriculture",
    parent: "CA",
    coords: [-71.5, 46.5],
    name: { de: "Quebec Ahornsirup", hu: "Quebeci juharszirup", ro: "Siropul de arțar din Quebec", en: "Quebec Maple Syrup" },
    description: { de: "Weltweit führender Produzent von echtem Ahornsirup.", hu: "A világ vezető valódi juharszirup-termelője.", ro: "Lider mondial în producția de sirop de arțar autentic.", en: "The world's leading producer of authentic maple syrup." , es: "Líder mundial en la producción de auténtico jarabe de arce.", pt: "Líder mundial na produção de xarope de ácer autêntico.", fr: "Premier producteur mondial de sirop d'érable authentique."},
    descriptionAdvanced: {
      de: "Ahornsirup ist ein zentrales Symbol der kanadischen Identität, und die Provinz Quebec ist das Herzstück dieser Industrie, da sie etwa 70 Prozent der weltweiten Produktion liefert. Die Gewinnung beginnt im Frühjahr, wenn die Temperaturen tagsüber über den Gefrierpunkt steigen und nachts darunter fallen, was den Saftfluss in den Zuckerahornbäumen (Acer saccharum) anregt. Traditionell wurde der Saft in Eimern aufgefangen, heute dominieren moderne Schlauchsysteme und Vakuumtechnologien die Ernte. In ganz Quebec finden sich die sogenannten 'Cabanes à sucre' (Zuckerhütten), wo der Saft zu Sirup eingekocht wird und Besucher traditionelle Mahlzeiten sowie auf Schnee gehärteten Ahorntoffee genießen können. Die Qualität des Sirups wird streng kontrolliert und nach Farbe und Geschmack in verschiedene Grade unterteilt, von hellem Gold bis zu dunklem Bernstein. Für die Herstellung von nur einem Liter Sirup werden etwa 40 Liter Ahornsaft benötigt, was den hohen Aufwand der Produktion verdeutlicht. Diese Tradition geht auf die indigenen Völker Nordamerikas zurück, die den Europäern zeigten, wie man die Süße der Bäume nutzt. Heute ist die Ahornsirup-Industrie ein bedeutender Wirtschaftsfaktor für Quebec und ein unverzichtbarer Bestandteil der kulinarischen Kultur Kanadas.",
      hu: "A juharszirup a kanadai identitás központi szimbóluma, Quebec tartomány pedig az iparág szíve, mivel a világtermelés mintegy 70 százalékát adja. A kitermelés kora tavasszal kezdődik, amikor a nappali hőmérséklet fagypont fölé emelkedik, az éjszakai pedig az alá süllyed, ami beindítja a nedvkeringést a cukorjuharokban (Acer saccharum). Hagyományosan vödrökkel gyűjtötték a nedvet, ma már azonban modern csővezeték-rendszerek és vákuumtechnológia dominál a betakarításkor. Quebec-szerte megtalálhatók a híres 'Cabanes à sucre' (cukorházak), ahol a nedvet sziruppá főzik, és a látogatók hagyományos ételeket, valamint havon hűtött juharnyalókát kóstolhatnak. A szirup minőségét szigorúan ellenőrzik, szín és íz alapján osztályozzák a világos aranytól a sötét borostyánig. Egyetlen liter szirup előállításához körülbelül 40 liter juharnedvre van szükség, ami rávilágít a folyamat munkaigényességére. Ez a hagyomány az észak-amerikai őslakosoktól ered, akik megtanították az európaiaknak, hogyan nyerjék ki a fák édességét. Napjainkban a juharszirup-ipar Quebec fontos gazdasági tényezője és a kanadai gasztronómiai kultúra elengedhetetlen része.",
      ro: "Siropul de arțar este un simbol central al identității canadiene, iar provincia Quebec reprezintă inima acestei industrii, furnizând aproximativ 70% din producția mondială. Recoltarea începe la începutul primăverii, când temperaturile oscilează peste punctul de îngheț în timpul zilei și sub acesta noaptea, stimulând circulația sevei în arțarii de zahăr (Acer saccharum). În mod tradițional, seva era colectată în găleți, însă astăzi se utilizează sisteme moderne de tuburi și tehnologie de vid pentru o eficiență maximă. În tot Quebecul se găsesc faimoasele 'Cabanes à sucre' (colibe de zahăr), unde seva este fiartă până devine sirop și unde vizitatorii pot savura mâncăruri tradiționale și caramele de arțar răcite pe zăpadă. Calitatea siropului este controlată riguros și clasificată în funcție de culoare și aromă, de la auriu deschis la chihlimbar închis. Pentru a produce un singur litru de sirop sunt necesari aproximativ 40 de litri de sevă brută, ceea ce explică valoarea ridicată a produsului. Această tradiție își are originile la popoarele indigene, care i-au învățat pe europeni cum să extragă dulceața arborilor. Astăzi, industria este un motor economic major pentru Quebec și un element esențial al gastronomiei canadiene.",
      en: "Maple syrup is a cornerstone of Canadian identity, with the province of Quebec serving as the global leader, producing approximately 70% of the world's supply. The harvesting season occurs in early spring, triggered by the specific freeze-thaw cycle of warm days and freezing nights that causes sap to flow in sugar maple trees (Acer saccharum). While traditional methods involved hanging buckets on trees, modern commercial operations now utilize extensive networks of vacuum tubing to transport sap directly to the evaporator. Across Quebec, 'Cabanes à sucre' (sugar shacks) become social hubs where the sap is boiled down into syrup and guests enjoy hearty traditional meals and maple taffy hardened on fresh snow. The resulting syrup is graded by color and flavor profile, ranging from golden and delicate to dark and robust. It takes roughly 40 liters of raw sap to produce just one liter of concentrated maple syrup, highlighting the intensity of the production process. This cultural legacy originates from Indigenous peoples who shared their knowledge of sap extraction with early European settlers. Today, Quebec's maple industry is both a significant economic driver and a vital part of Canada's international culinary heritage.",
      es: "La provincia de Quebec es el centro mundial de la producción de jarabe de arce, suministrando más del 70% de la demanda global. La tradición de las 'Cabanes à Sucre' (cabañas de azúcar) está profundamente arraigada en la cultura, cuando en primavera se recolecta y se hierve la savia de los arces azucareros.",
      pt: "A província de Quebeque é o centro mundial da produção de xarope de ácer, fornecendo mais de 70% da procura mundial. A tradição das 'Cabanes à Sucre' (cabanas de açúcar) está profundamente enraizada na cultura, quando a seiva das árvores de ácer é colhida e fervida na primavera.",
      fr: "La province de Québec est le centre mondial de la production de sirop d'érable, fournissant plus de 70 % de la demande mondiale. La tradition des 'cabanes à sucre' est profondément ancrée dans la culture, lorsque la sève des érables à sucre est récoltée et bouillie au printemps.",
    },
    factsAdvanced: {
      de: ["Quebec produziert jährlich etwa 70% des weltweiten Ahornsirups.", "Für einen Liter Ahornsirup werden etwa 40 Liter Saft benötigt.", "Die Erntesaison dauert in der Regel nur 4 bis 8 Wochen im Frühjahr.", "Es gibt in Quebec über 13.000 registrierte Ahornsirupproduzenten.", "Ahornsirup wird in vier verschiedene Farbstufen eingeteilt.", "Die Zuckerahornbäume müssen etwa 40 Jahre alt sein, bevor sie angezapft werden können."],
      hu: ["Quebec adja a világ juharszirup-termelésének körülbelül 70%-át.", "Egy liter juharszirup előállításához 40 liter nyers nedvre van szükség.", "A betakarítási szezon tavasszal mindössze 4-8 hétig tart.", "Quebecben több mint 13 000 regisztrált juharszirup-termelő működik.", "A juharszirupot szín és íz intenzitása alapján négy kategóriába sorolják.", "A juharfákat csak körülbelül 40 éves koruk után lehet először megcsapolni."],
      ro: ["Provincia Quebec produce aproximativ 70% din siropul de arțar la nivel mondial.", "Sunt necesari circa 40 de litri de sevă pentru a obține un singur litru de sirop.", "Sezonul de recoltare durează de regulă între 4 și 8 săptămâni, primăvara.", "În Quebec există peste 13.000 de producători autorizați de sirop de arțar.", "Siropul de arțar este clasificat în patru grade distincte de culoare.", "Arțarii de zahăr trebuie să aibă cel puțin 40 de ani pentru a putea fi recoltați."],
      en: ["Quebec produces approximately 70% of the world's total maple syrup supply.", "It takes roughly 40 liters of sap to create one liter of finished syrup.", "The maple harvesting season typically lasts only 4 to 8 weeks each spring.", "There are more than 13,000 registered maple producers in the province of Quebec.", "Maple syrup is classified into four color classes: Golden, Amber, Dark, and Very Dark.", "Sugar maple trees must be at least 40 years old before they can be tapped."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Produziert 70% weltweit", "Zuckerahorn-Bäume", "Frühjahrs-Erntezeit", "Ahornblatt Nationalsymbol"], hu: ["A világtermelés 70%-át adja", "Cukorjuhar fákból készül", "Tavaszi betakarítás", "A juharlevél nemzeti jelkép"], ro: ["Produce 70% din totalul mondial", "Arbori de arțar de zahăr", "Recoltare în primăvară", "Frunza de arțar, simbol național"], en: ["Produces 70% of world supply", "Derived from sugar maple trees", "Spring tapping season", "Maple leaf is a national icon"] , es: ["Produce el 70% mundial", "Árboles de arce azucarero", "Temporada de cosecha en primavera", "Hoja de arce como símbolo nacional"], pt: ["Produz 70% a nível mundial", "Árvores de ácer sacarino", "Época de colheita na primavera", "Folha de ácer como símbolo nacional"], fr: ["Produit 70 % de l'offre mondiale", "Érables à sucre", "Saison de récolte printanière", "Feuille d'érable, symbole national"]},
    historyYear: 1534, historyPeriod: "Traditional/Modern", image: "/poi-images/ca-quebec-maple.webp"},
  {
    id: "ca-saskatchewan-wheat",
    type: "agriculture",
    parent: "CA",
    coords: [-106.6, 52.1],
    name: { de: "Saskatchewan Weizenfelder", hu: "Saskatchewani búzaföldek", ro: "Câmpurile de grâu din Saskatchewan", en: "Saskatchewan Wheat Fields" },
    description: { de: "Die 'Brotkammer Kanadas' in den Prärieprovinzen.", hu: "Kanada 'kenyérkosara' a préri tartományokban.", ro: "\\\"Grânarul Canadei\\\" în provinciile de prerie.", en: "The 'Breadbasket of Canada' in the prairie provinces." , es: "El granero de Canadá en las provincias de las praderas.", pt: "O celeiro do Canadá nas províncias das pradarias.", fr: "Le grenier du Canada dans les provinces des Prairies."},
    descriptionAdvanced: {
      de: "Saskatchewan wird oft als die 'Brotkammer Kanadas' bezeichnet, da die Provinz über 40 Prozent der gesamten landwirtschaftlichen Nutzfläche des Landes beherbergt. Die weiten Weizenfelder erstrecken sich über die scheinbar endlosen Prärien und prägen das Landschaftsbild sowie die Wirtschaft der Region maßgeblich. Besonders bekannt ist die Provinz für den Anbau von hochwertigem Hard Red Spring Wheat, der weltweit für seine Backeigenschaften geschätzt wird. Die Geschichte der Weizenproduktion in Saskatchewan ist eng mit der Ankunft europäischer Siedler und dem Ausbau der Eisenbahn im späten 19. Jahrhundert verbunden, was den Export in ferne Märkte erst ermöglichte. Ein ikonisches Merkmal der Landschaft waren lange Zeit die hölzernen Getreidesilos, auch 'Kathedralen der Prärie' genannt, von denen heute viele durch moderne Betonterminals ersetzt wurden. Die Landwirte in Saskatchewan setzen heute modernste Technologien wie GPS-gesteuerte Maschinen und nachhaltige Anbaumethoden ein, um den Herausforderungen des Klimawandels zu begegnen. Trotz der Diversifizierung der Wirtschaft bleibt der Weizenanbau ein fundamentales kulturelles Erbe und ein entscheidender Faktor für die globale Ernährungssicherheit. Die goldenen Felder zur Erntezeit im Spätsommer sind ein beeindruckendes Naturschauspiel, das die Weite und Fruchtbarkeit der kanadischen Mitte symbolisiert.",
      hu: "Saskatchewant gyakran 'Kanada kenyérkosaraként' emlegetik, mivel a tartomány ad otthont az ország összes mezőgazdasági területének több mint 40 százalékának. A hatalmas búzatáblák a végtelennek tűnő prérin nyúlnak el, meghatározva a régió látképét és gazdaságát. A tartomány különösen híres a kiváló minőségű tavaszi búzáról, amelyet világszerte nagyra értékelnek kiváló sütési tulajdonságai miatt. A saskatchewani búzatermelés története szorosan összefügg az európai telepesek érkezésével és a vasútépítéssel a 19. század végén, ami lehetővé tette a termény távoli piacokra történő exportálását. A táj ikonikus elemei hosszú ideig a fából készült gabonasilók, a 'prérit katedrálisai' voltak, amelyek közül ma már sokat modern betonterminálok váltottak fel. A helyi gazdák napjainkban a legmodernebb technológiákat, például GPS-vezérelt gépeket és fenntartható művelési módszereket alkalmaznak a klímaváltozás kihívásaihoz való alkalmazkodás érdekében. A gazdaság diverzifikációja ellenére a búzatermesztés továbbra is alapvető kulturális örökség és a globális élelmezésbiztonság meghatározó tényezője. A késő nyári aratás idején aranyszínben pompázó mezők lenyűgöző látványt nyújtanak, szimbolizálva a kanadai középvidék végtelenségét és termékenységét.",
      ro: "Saskatchewan este adesea supranumită 'Grânarul Canadei', deoarece provincia deține peste 40% din totalul terenurilor agricole ale țării. Câmpiile vaste de grâu se întind pe mii de kilometri în preria aparent nesfârșită, definind atât peisajul vizual, cât și economia regiunii. Provincia este renumită în special pentru cultivarea grâului de primăvară de calitate superioară, apreciat la nivel global pentru proprietățile sale excelente de panificație. Istoria producției de grâu în Saskatchewan este strâns legată de sosirea coloniștilor europeni și de extinderea căilor ferate la sfârșitul secolului al XIX-lea, care au facilitat exportul către piețele internaționale. Un element iconic al peisajului au fost mult timp elevatoarele de cereale din lemn, numite 'catedralele preriei', multe fiind astăzi înlocuite de terminale moderne din beton. Fermierii din Saskatchewan utilizează în prezent tehnologii de ultimă oră, inclusiv utilaje ghidate prin GPS și metode de agricultură durabilă, pentru a gestiona provocările climatice. Deși economia s-a diversificat, cultivarea grâului rămâne un pilon cultural fundamental și un factor critic pentru securitatea alimentară mondială. Câmpurile aurii în perioada recoltării, la sfârșitul verii, oferă un spectacol impresionant care simbolizează bogăția solului canadian.",
      en: "Saskatchewan is widely known as the 'Breadbasket of Canada', containing more than 40% of the country's total arable land. The province's vast wheat fields stretch across the seemingly endless prairies, fundamentally shaping both the regional economy and the visual identity of the Canadian interior. Saskatchewan is particularly famous for producing high-quality Hard Red Spring Wheat, which is highly sought after by international markets for its superior milling and baking qualities. The history of large-scale wheat farming here is deeply intertwined with the arrival of European settlers and the expansion of the transcontinental railway in the late 19th century. For decades, the skyline was dominated by wooden grain elevators, often called 'Cathedrals of the Prairie', though many have since been replaced by high-efficiency concrete terminals. Modern agriculture in the province now relies on advanced satellite technology and precision farming techniques to maximize yields while conserving soil moisture in the semi-arid environment. Despite increasing economic diversification into potash and uranium, wheat remains a vital cultural symbol and a critical component of global food security. The sight of golden fields during the late summer harvest remains one of the most powerful images of the Canadian West.",
      es: "Saskatchewan es conocida como el \"granero de Canadá\" y posee casi la mitad de todas las tierras cultivables del país. Los vastos campos de trigo, que se extienden hasta el horizonte, son una imagen definitoria de las praderas canadienses y un pilar fundamental de la economía nacional por su enorme producción agrícola.",
      pt: "Saskatchewan é conhecida como o \"celeiro do Canadá\" e possui quase metade de todas as terras agrícolas do país. Os vastos campos de trigo, que se estendem até ao horizonte, são uma imagem definidora das pradarias canadianas e um pilar fundamental da economia nacional devido à sua importância nas exportações globais.",
      fr: "La Saskatchewan est connue comme le \"grenier du Canada\" et possède près de la moitié des terres arables du pays. Les vastos champs de blé qui s'étendent jusqu'à l'horizon sont une image emblématique des Prairies canadiennes et un pilier de l'économie nationale, faisant de la région l'un des plus grands exportateurs mondiaux.",
    },
    factsAdvanced: {
      de: ["Saskatchewan besitzt über 40% der gesamten Ackerfläche Kanadas.", "Die Provinz ist der weltweit größte Exporteur von Linsen und Erbsen.", "Ein durchschnittlicher landwirtschaftlicher Betrieb in Saskatchewan umfasst ca. 700 Hektar.", "Kanada exportiert Weizen in über 70 verschiedene Länder weltweit.", "Das ikonische hölzerne Getreidesilo in Sceptre ist eines der höchsten der Provinz.", "Die Landwirtschaft trägt jährlich Milliarden zur Wirtschaft der Provinz bei."],
      hu: ["Saskatchewan birtokolja Kanada összes termőföldjének több mint 40%-át.", "A tartomány a világ legnagyobb lencse- és borsóexportőre.", "Egy átlagos saskatchewani gazdaság mérete körülbelül 700 hektár.", "Kanada a búzáját a világ több mint 70 országába exportálja.", "Sceptre településen található a tartomány egyik legmagasabb faházas gabonasilója.", "A mezőgazdaság évente több milliárd dollárral járul hozzá a tartomány gazdaságához."],
      ro: ["Saskatchewan deține peste 40% din suprafața arabilă totală a Canadei.", "Provincia este cel mai mare exportator mondial de linte și mazăre uscată.", "O fermă medie în Saskatchewan se întinde pe aproximativ 700 de hectare.", "Grâul canadian este exportat în peste 70 de țări de pe glob.", "Elevatorul de cereale din Sceptre este unul dintre cele mai înalte structuri de lemn rămase.", "Agricultura contribuie cu miliarde de dolari anual la PIB-ul provinciei."],
      en: ["Saskatchewan accounts for over 40% of all cultivated farmland in Canada.", "The province is the world's largest exporter of lentils and dried peas.", "The average farm size in Saskatchewan is approximately 1,780 acres (720 hectares).", "Canadian wheat from this region is exported to more than 70 countries globally.", "The historic grain elevator in Sceptre is one of the tallest wooden structures in the province.", "Agricultural exports from Saskatchewan were valued at over $18 billion in recent years."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Brotkammer Kanadas", "Riesige Prärie-Flächen", "Wichtigster Exporteur", "Goldener Horizont"], hu: ["Kanada magtára", "Hatalmas préri területek", "Meghatározó exportcikk", "Aranyló láthatár"], ro: ["Grânarul Canadei", "Suprafețe vaste de prerie", "Exportator major", "Orizont auriu"], en: ["Breadbasket of Canada", "Vast prairie landscapes", "Leading global wheat exporter", "Iconic golden horizons"] , es: ["Granero de Canadá", "Enormes áreas de pradera", "Exportador principal", "Horizonte dorado"], pt: ["Celeiro do Canadá", "Vastas áreas de pradaria", "Principal exportador", "Horizonte dourado"], fr: ["Grenier du Canada", "Vastes zones de prairies", "Exportateur majeur", "Horizon doré"]},
    image: "/poi-images/ca-saskatchewan-wheat.webp",
  },
  {
    id: "ca-okanagan-wine", "sights": {
      "de": [
            {
                  "name": "Carrot Mountain Viewpoint",
                  "text": "Der Carrot Mountain Viewpoint ist ein Aussichtspunkt auf dem Carrot Mountain mit Blick auf die Okanagan-Region.",
                  "category": "natural",
                  "coords": [
                        -119.620276,
                        49.883612
                  ]
            },
            {
                  "name": "Poplar point beach",
                  "text": "Poplar point beach ist ein Strand in der Okanagan-Weinregion am See.",
                  "category": "recreational",
                  "coords": [
                        -119.492595,
                        49.913937
                  ]
            },
            {
                  "name": "FINA Gallery",
                  "text": "Die FINA Gallery ist eine Kunstgalerie in der Okanagan-Weinregion.",
                  "category": "museum",
                  "coords": [
                        -119.398321,
                        49.939351
                  ]
            },
            {
                  "name": "Arts Atrium",
                  "text": "Das Arts Atrium ist ein Kunstraum in der Okanagan-Weinregion mit Galerien.",
                  "category": "museum",
                  "coords": [
                        -119.397375,
                        49.93913
                  ]
            },
            {
                  "name": "Engineering \"E\"",
                  "text": "Das Engineering 'E' ist ein Denkmal in der Okanagan-Weinregion.",
                  "category": "historical",
                  "coords": [
                        -119.395203,
                        49.939028
                  ]
            },
            {
                  "name": "SUO Theatre",
                  "text": "Das SUO Theatre ist ein Theater in der Okanagan-Weinregion.",
                  "category": "cultural",
                  "coords": [
                        -119.396694,
                        49.941264
                  ]
            },
            {
                  "name": "Pine Trail Lookout",
                  "text": "Der Pine Trail Lookout ist ein Aussichtspunkt entlang eines Kiefernwegs in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.398753,
                        49.94722
                  ]
            },
            {
                  "name": "McCulloch Lookout",
                  "text": "Der McCulloch Lookout ist ein Aussichtspunkt in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.418688,
                        49.854738
                  ]
            },
            {
                  "name": "Okanagan Lavender Farm",
                  "text": "Die Okanagan Lavender Farm ist ein Lavendelbauernhof in der Okanagan-Weinregion mit Führungen.",
                  "category": "landmark",
                  "coords": [
                        -119.448378,
                        49.823365
                  ]
            },
            {
                  "name": "Okanagan Mission (Pandosy's Farm)",
                  "text": "Die Okanagan Mission (Pandosy's Farm) ist ein historisches Missions- und Bauernmuseum in der Okanagan-Weinregion.",
                  "category": "museum",
                  "coords": [
                        -119.467755,
                        49.850029
                  ]
            },
            {
                  "name": "Observation Platform",
                  "text": "Die Observation Platform ist eine Aussichtsplattform in der Okanagan-Weinregion mit Ausblicken.",
                  "category": "natural",
                  "coords": [
                        -119.462642,
                        49.847673
                  ]
            },
            {
                  "name": "Mount Boucherie",
                  "text": "Mount Boucherie ist ein erloschener Vulkan im Okanagan-Tal.",
                  "category": "natural",
                  "coords": [
                        -119.572946,
                        49.855113
                  ]
            },
            {
                  "name": "Bear Creek Provincial Park",
                  "text": "Der Bear Creek Provincial Park bietet einen Wasserfall und Wanderwege.",
                  "category": "natural",
                  "coords": [
                        -119.519788,
                        49.929515
                  ]
            },
            {
                  "name": "Rose Valley Regional Park",
                  "text": "Der Rose Valley Regional Park ist ein Regionalpark in der Okanagan-Weinregion mit Naturpfaden.",
                  "category": "natural",
                  "coords": [
                        -119.559428,
                        49.895153
                  ]
            },
            {
                  "name": "Ukrainian Orthodox Parish of Sts Peter & Paul",
                  "text": "Die Ukrainian Orthodox Parish of Sts Peter & Paul ist eine ukrainisch-orthodoxe Kirche in der Okanagan-Weinregion.",
                  "category": "religious",
                  "coords": [
                        -119.447686,
                        49.878005
                  ]
            },
            {
                  "name": "Kelowna Art Gallery",
                  "text": "Die Kelowna Art Gallery ist eine Kunstgalerie in Kelowna mit zeitgenössischen Ausstellungen.",
                  "category": "museum",
                  "coords": [
                        -119.496154,
                        49.891251
                  ]
            },
            {
                  "name": "Tugboat Bay Beach",
                  "text": "Tugboat Bay Beach ist ein Strand in der Okanagan-Weinregion am See.",
                  "category": "recreational",
                  "coords": [
                        -119.499549,
                        49.894347
                  ]
            },
            {
                  "name": "Upper Canyon Open Space",
                  "text": "Ein Naturschutzgebiet mit malerischen Canyon-Blicken in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.465077,
                        49.924742
                  ]
            },
            {
                  "name": "Robert's Lake Regional Park",
                  "text": "Ein regionaler Park an einem See in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.412526,
                        49.935537
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "Ein Amphitheater für Aufführungen in der Okanagan-Weinregion.",
                  "category": "cultural",
                  "coords": [
                        -119.393538,
                        49.939063
                  ]
            },
            {
                  "name": "Stephens Coyote Ridge Regional Park",
                  "text": "Ein regionaler Park auf einem Bergrücken in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.436474,
                        49.960374
                  ]
            },
            {
                  "name": "Thomson Creek",
                  "text": "Ein Naturschutzgebiet entlang eines Baches in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.484946,
                        49.833733
                  ]
            },
            {
                  "name": "Wilson Creek Linear Park",
                  "text": "Ein linearer Park entlang eines Baches in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.480326,
                        49.846959
                  ]
            },
            {
                  "name": "Bowen Creek Corridor",
                  "text": "Ein Naturkorridor entlang eines Baches in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.557727,
                        49.847719
                  ]
            },
            {
                  "name": "McDougall Creek",
                  "text": "Ein Naturschutzgebiet entlang eines Baches in der Okanagan-Weinregion.",
                  "category": "natural",
                  "coords": [
                        -119.590417,
                        49.861226
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Carrot Mountain Viewpoint",
                  "text": "A Carrot Mountain Viewpoint egy kilátópont a Carrot Mountain-en, az Okanagan régióra nyíló kilátással.",
                  "category": "natural",
                  "coords": [
                        -119.620276,
                        49.883612
                  ]
            },
            {
                  "name": "Poplar point beach",
                  "text": "A Poplar point beach egy strand az Okanagan borvidéken, a tó partján.",
                  "category": "recreational",
                  "coords": [
                        -119.492595,
                        49.913937
                  ]
            },
            {
                  "name": "FINA Gallery",
                  "text": "A FINA Gallery egy művészeti galéria az Okanagan borvidéken.",
                  "category": "museum",
                  "coords": [
                        -119.398321,
                        49.939351
                  ]
            },
            {
                  "name": "Arts Atrium",
                  "text": "Az Arts Atrium egy művészeti tér az Okanagan borvidéken, galériákkal.",
                  "category": "museum",
                  "coords": [
                        -119.397375,
                        49.93913
                  ]
            },
            {
                  "name": "Engineering \"E\"",
                  "text": "Az Engineering 'E' egy emlékmű az Okanagan borvidéken.",
                  "category": "historical",
                  "coords": [
                        -119.395203,
                        49.939028
                  ]
            },
            {
                  "name": "SUO Theatre",
                  "text": "A SUO Theatre egy színház az Okanagan borvidéken.",
                  "category": "cultural",
                  "coords": [
                        -119.396694,
                        49.941264
                  ]
            },
            {
                  "name": "Pine Trail Lookout",
                  "text": "A Pine Trail Lookout egy kilátópont egy fenyőösvény mentén az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.398753,
                        49.94722
                  ]
            },
            {
                  "name": "McCulloch Lookout",
                  "text": "A McCulloch Lookout egy kilátópont az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.418688,
                        49.854738
                  ]
            },
            {
                  "name": "Okanagan Lavender Farm",
                  "text": "Az Okanagan Lavender Farm egy levendulafarm az Okanagan borvidéken, vezetett túrákkal.",
                  "category": "landmark",
                  "coords": [
                        -119.448378,
                        49.823365
                  ]
            },
            {
                  "name": "Okanagan Mission (Pandosy's Farm)",
                  "text": "Az Okanagan Mission (Pandosy's Farm) egy történelmi missziós és gazdasági múzeum az Okanagan borvidéken.",
                  "category": "museum",
                  "coords": [
                        -119.467755,
                        49.850029
                  ]
            },
            {
                  "name": "Observation Platform",
                  "text": "Az Observation Platform egy kilátóplatform az Okanagan borvidéken, panorámával.",
                  "category": "natural",
                  "coords": [
                        -119.462642,
                        49.847673
                  ]
            },
            {
                  "name": "Mount Boucherie",
                  "text": "A Mount Boucherie egy kialudt vulkán az Okanagan-völgyben.",
                  "category": "natural",
                  "coords": [
                        -119.572946,
                        49.855113
                  ]
            },
            {
                  "name": "Bear Creek Provincial Park",
                  "text": "A Bear Creek Provincial Park egy vízeséssel és túraútvonalakkal rendelkezik.",
                  "category": "natural",
                  "coords": [
                        -119.519788,
                        49.929515
                  ]
            },
            {
                  "name": "Rose Valley Regional Park",
                  "text": "A Rose Valley Regional Park egy regionális park az Okanagan borvidéken, természetes ösvényekkel.",
                  "category": "natural",
                  "coords": [
                        -119.559428,
                        49.895153
                  ]
            },
            {
                  "name": "Ukrainian Orthodox Parish of Sts Peter & Paul",
                  "text": "A Ukrainian Orthodox Parish of Sts Peter & Paul egy ukrán ortodox templom az Okanagan borvidéken.",
                  "category": "religious",
                  "coords": [
                        -119.447686,
                        49.878005
                  ]
            },
            {
                  "name": "Kelowna Art Gallery",
                  "text": "A Kelowna Art Gallery egy művészeti galéria Kelowna-ban, kortárs kiállításokkal.",
                  "category": "museum",
                  "coords": [
                        -119.496154,
                        49.891251
                  ]
            },
            {
                  "name": "Tugboat Bay Beach",
                  "text": "A Tugboat Bay Beach egy strand az Okanagan borvidéken, a tó partján.",
                  "category": "recreational",
                  "coords": [
                        -119.499549,
                        49.894347
                  ]
            },
            {
                  "name": "Upper Canyon Open Space",
                  "text": "Egy védett természeti terület festői kanyonkilátással az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.465077,
                        49.924742
                  ]
            },
            {
                  "name": "Robert's Lake Regional Park",
                  "text": "Egy regionális park egy tó mellett az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.412526,
                        49.935537
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "Egy amfiteátrum előadások számára az Okanagan borvidéken.",
                  "category": "cultural",
                  "coords": [
                        -119.393538,
                        49.939063
                  ]
            },
            {
                  "name": "Stephens Coyote Ridge Regional Park",
                  "text": "Egy regionális park egy hegygerincen az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.436474,
                        49.960374
                  ]
            },
            {
                  "name": "Thomson Creek",
                  "text": "Egy védett természeti terület egy patak mentén az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.484946,
                        49.833733
                  ]
            },
            {
                  "name": "Wilson Creek Linear Park",
                  "text": "Egy lineáris park egy patak mentén az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.480326,
                        49.846959
                  ]
            },
            {
                  "name": "Bowen Creek Corridor",
                  "text": "Egy természeti folyosó egy patak mentén az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.557727,
                        49.847719
                  ]
            },
            {
                  "name": "McDougall Creek",
                  "text": "Egy védett természeti terület egy patak mentén az Okanagan borvidéken.",
                  "category": "natural",
                  "coords": [
                        -119.590417,
                        49.861226
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Carrot Mountain Viewpoint",
                  "text": "Carrot Mountain Viewpoint este un punct de belvedere pe Muntele Carrot, cu vedere spre regiunea Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.620276,
                        49.883612
                  ]
            },
            {
                  "name": "Poplar point beach",
                  "text": "Poplar point beach este o plajă în regiunea viticolă Okanagan, pe malul lacului.",
                  "category": "recreational",
                  "coords": [
                        -119.492595,
                        49.913937
                  ]
            },
            {
                  "name": "FINA Gallery",
                  "text": "FINA Gallery este o galerie de artă în regiunea viticolă Okanagan.",
                  "category": "museum",
                  "coords": [
                        -119.398321,
                        49.939351
                  ]
            },
            {
                  "name": "Arts Atrium",
                  "text": "Arts Atrium este un spațiu artistic în regiunea viticolă Okanagan, cu galerii.",
                  "category": "museum",
                  "coords": [
                        -119.397375,
                        49.93913
                  ]
            },
            {
                  "name": "Engineering \"E\"",
                  "text": "Engineering 'E' este un monument în regiunea viticolă Okanagan.",
                  "category": "historical",
                  "coords": [
                        -119.395203,
                        49.939028
                  ]
            },
            {
                  "name": "SUO Theatre",
                  "text": "SUO Theatre este un teatru în regiunea viticolă Okanagan.",
                  "category": "cultural",
                  "coords": [
                        -119.396694,
                        49.941264
                  ]
            },
            {
                  "name": "Pine Trail Lookout",
                  "text": "Pine Trail Lookout este un punct de belvedere de-a lungul unui traseu de pini în regiunea viticolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.398753,
                        49.94722
                  ]
            },
            {
                  "name": "McCulloch Lookout",
                  "text": "McCulloch Lookout este un punct de belvedere în regiunea viticolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.418688,
                        49.854738
                  ]
            },
            {
                  "name": "Okanagan Lavender Farm",
                  "text": "Okanagan Lavender Farm este o fermă de lavandă în regiunea viticolă Okanagan, cu tururi ghidate.",
                  "category": "landmark",
                  "coords": [
                        -119.448378,
                        49.823365
                  ]
            },
            {
                  "name": "Okanagan Mission (Pandosy's Farm)",
                  "text": "Okanagan Mission (Pandosy's Farm) este un muzeu istoric de misiune și fermă în regiunea viticolă Okanagan.",
                  "category": "museum",
                  "coords": [
                        -119.467755,
                        49.850029
                  ]
            },
            {
                  "name": "Observation Platform",
                  "text": "Observation Platform este o platformă de observație în regiunea viticolă Okanagan, cu vedere.",
                  "category": "natural",
                  "coords": [
                        -119.462642,
                        49.847673
                  ]
            },
            {
                  "name": "Mount Boucherie",
                  "text": "Muntele Boucherie este un vulcan stins în Valea Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.572946,
                        49.855113
                  ]
            },
            {
                  "name": "Bear Creek Provincial Park",
                  "text": "Parcul Provincial Bear Creek are o cascadă și trasee de drumeție.",
                  "category": "natural",
                  "coords": [
                        -119.519788,
                        49.929515
                  ]
            },
            {
                  "name": "Rose Valley Regional Park",
                  "text": "Rose Valley Regional Park este un parc regional în regiunea viticolă Okanagan, cu trasee naturale.",
                  "category": "natural",
                  "coords": [
                        -119.559428,
                        49.895153
                  ]
            },
            {
                  "name": "Ukrainian Orthodox Parish of Sts Peter & Paul",
                  "text": "Ukrainian Orthodox Parish of Sts Peter & Paul este o biserică ortodoxă ucraineană în regiunea viticolă Okanagan.",
                  "category": "religious",
                  "coords": [
                        -119.447686,
                        49.878005
                  ]
            },
            {
                  "name": "Kelowna Art Gallery",
                  "text": "Kelowna Art Gallery este o galerie de artă în Kelowna, cu expoziții contemporane.",
                  "category": "museum",
                  "coords": [
                        -119.496154,
                        49.891251
                  ]
            },
            {
                  "name": "Tugboat Bay Beach",
                  "text": "Tugboat Bay Beach este o plajă în regiunea viticolă Okanagan, pe malul lacului.",
                  "category": "recreational",
                  "coords": [
                        -119.499549,
                        49.894347
                  ]
            },
            {
                  "name": "Upper Canyon Open Space",
                  "text": "O rezervație naturală cu priveliști pitorești ale canionului în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.465077,
                        49.924742
                  ]
            },
            {
                  "name": "Robert's Lake Regional Park",
                  "text": "Un parc regional lângă un lac în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.412526,
                        49.935537
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "Un amfiteatru pentru spectacole în Regiunea Vinicolă Okanagan.",
                  "category": "cultural",
                  "coords": [
                        -119.393538,
                        49.939063
                  ]
            },
            {
                  "name": "Stephens Coyote Ridge Regional Park",
                  "text": "Un parc regional pe o creastă în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.436474,
                        49.960374
                  ]
            },
            {
                  "name": "Thomson Creek",
                  "text": "O rezervație naturală de-a lungul unui pârâu în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.484946,
                        49.833733
                  ]
            },
            {
                  "name": "Wilson Creek Linear Park",
                  "text": "Un parc liniar de-a lungul unui pârâu în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.480326,
                        49.846959
                  ]
            },
            {
                  "name": "Bowen Creek Corridor",
                  "text": "Un coridor natural de-a lungul unui pârâu în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.557727,
                        49.847719
                  ]
            },
            {
                  "name": "McDougall Creek",
                  "text": "O rezervație naturală de-a lungul unui pârâu în Regiunea Vinicolă Okanagan.",
                  "category": "natural",
                  "coords": [
                        -119.590417,
                        49.861226
                  ]
            }
      ],
      "en": [
            {
                  "name": "Carrot Mountain Viewpoint",
                  "text": "Carrot Mountain Viewpoint is a viewpoint on Carrot Mountain offering views of the Okanagan region.",
                  "category": "natural",
                  "coords": [
                        -119.620276,
                        49.883612
                  ]
            },
            {
                  "name": "Poplar point beach",
                  "text": "Poplar point beach is a beach in the Okanagan wine region along the lake.",
                  "category": "recreational",
                  "coords": [
                        -119.492595,
                        49.913937
                  ]
            },
            {
                  "name": "FINA Gallery",
                  "text": "FINA Gallery is an art gallery in the Okanagan wine region.",
                  "category": "museum",
                  "coords": [
                        -119.398321,
                        49.939351
                  ]
            },
            {
                  "name": "Arts Atrium",
                  "text": "Arts Atrium is an arts space in the Okanagan wine region featuring galleries.",
                  "category": "museum",
                  "coords": [
                        -119.397375,
                        49.93913
                  ]
            },
            {
                  "name": "Engineering \"E\"",
                  "text": "Engineering \"E\" is a monument in the Okanagan wine region.",
                  "category": "historical",
                  "coords": [
                        -119.395203,
                        49.939028
                  ]
            },
            {
                  "name": "SUO Theatre",
                  "text": "SUO Theatre is a theatre in the Okanagan wine region.",
                  "category": "cultural",
                  "coords": [
                        -119.396694,
                        49.941264
                  ]
            },
            {
                  "name": "Pine Trail Lookout",
                  "text": "Pine Trail Lookout is a lookout point along a pine trail in the Okanagan wine region.",
                  "category": "natural",
                  "coords": [
                        -119.398753,
                        49.94722
                  ]
            },
            {
                  "name": "McCulloch Lookout",
                  "text": "McCulloch Lookout is a lookout point in the Okanagan wine region.",
                  "category": "natural",
                  "coords": [
                        -119.418688,
                        49.854738
                  ]
            },
            {
                  "name": "Okanagan Lavender Farm",
                  "text": "Okanagan Lavender Farm is a lavender farm in the Okanagan wine region offering tours.",
                  "category": "landmark",
                  "coords": [
                        -119.448378,
                        49.823365
                  ]
            },
            {
                  "name": "Okanagan Mission (Pandosy's Farm)",
                  "text": "Okanagan Mission (Pandosy's Farm) is a historic mission and farm museum in the Okanagan wine region.",
                  "category": "museum",
                  "coords": [
                        -119.467755,
                        49.850029
                  ]
            },
            {
                  "name": "Observation Platform",
                  "text": "Observation Platform is an observation platform in the Okanagan wine region providing views.",
                  "category": "natural",
                  "coords": [
                        -119.462642,
                        49.847673
                  ]
            },
            {
                  "name": "Mount Boucherie",
                  "text": "Mount Boucherie is a dormant volcano in the Okanagan Valley.",
                  "category": "natural",
                  "coords": [
                        -119.572946,
                        49.855113
                  ]
            },
            {
                  "name": "Bear Creek Provincial Park",
                  "text": "Bear Creek Provincial Park features a waterfall and hiking trails.",
                  "category": "natural",
                  "coords": [
                        -119.519788,
                        49.929515
                  ]
            },
            {
                  "name": "Rose Valley Regional Park",
                  "text": "Rose Valley Regional Park is a regional park in the Okanagan wine region with nature trails.",
                  "category": "natural",
                  "coords": [
                        -119.559428,
                        49.895153
                  ]
            },
            {
                  "name": "Ukrainian Orthodox Parish of Sts Peter & Paul",
                  "text": "Ukrainian Orthodox Parish of Sts Peter & Paul is a Ukrainian Orthodox church in the Okanagan wine region.",
                  "category": "religious",
                  "coords": [
                        -119.447686,
                        49.878005
                  ]
            },
            {
                  "name": "Kelowna Art Gallery",
                  "text": "Kelowna Art Gallery is an art gallery in Kelowna featuring contemporary exhibitions.",
                  "category": "museum",
                  "coords": [
                        -119.496154,
                        49.891251
                  ]
            },
            {
                  "name": "Tugboat Bay Beach",
                  "text": "Tugboat Bay Beach is a beach in the Okanagan wine region on the lake.",
                  "category": "recreational",
                  "coords": [
                        -119.499549,
                        49.894347
                  ]
            },
            {
                  "name": "Upper Canyon Open Space",
                  "text": "A nature reserve with scenic canyon views in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.465077,
                        49.924742
                  ]
            },
            {
                  "name": "Robert's Lake Regional Park",
                  "text": "A regional park by a lake in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.412526,
                        49.935537
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "An amphitheatre for performances in the Okanagan Wine Region.",
                  "category": "cultural",
                  "coords": [
                        -119.393538,
                        49.939063
                  ]
            },
            {
                  "name": "Stephens Coyote Ridge Regional Park",
                  "text": "A regional park on a ridge in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.436474,
                        49.960374
                  ]
            },
            {
                  "name": "Thomson Creek",
                  "text": "A nature reserve along a creek in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.484946,
                        49.833733
                  ]
            },
            {
                  "name": "Wilson Creek Linear Park",
                  "text": "A linear park along a creek in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.480326,
                        49.846959
                  ]
            },
            {
                  "name": "Bowen Creek Corridor",
                  "text": "A nature corridor along a creek in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.557727,
                        49.847719
                  ]
            },
            {
                  "name": "McDougall Creek",
                  "text": "A nature reserve along a creek in the Okanagan Wine Region.",
                  "category": "natural",
                  "coords": [
                        -119.590417,
                        49.861226
                  ]
            }
      ]
},
    type: "agriculture",
    parent: "CA",
    coords: [-119.5, 49.9],
    name: { de: "Okanagan Valley Obstbau", hu: "Okanagan-völgyi gyümölcsösök", ro: "Livezile din Valea Okanagan", en: "Okanagan Valley Orchards" },
    description: { de: "Bekannt für Obstplantagen und Weinbau in British Columbia.", hu: "Gyümölcsöseiről és borászatáról ismert Brit Kolumbiában.", ro: "Cunoscută pentru livezi și viticultură în Columbia Britanică.", en: "Known for orchards and wineries in British Columbia." , es: "Conocido por sus huertos frutales y viticultura en la Columbia Británica.", pt: "Conhecido pelos seus pomares e viticultura na Colúmbia Britânica.", fr: "Connu pour ses vergers et sa viticulture en Colombie-Britannique."},
    descriptionAdvanced: {
      de: "Das Okanagan Valley in British Columbia ist das wichtigste Weinbaugebiet Westkanadas und bekannt für seine spektakuläre Landschaft aus Seen, Bergen und terrassierten Weinbergen. Das Klima der Region ist semi-arid, mit heißen Sommertagen und kühlen Nächten, was ideale Bedingungen für die Konzentration von Aromen in den Trauben schafft. Die Weinbaugeschichte im Tal reicht bis in das Jahr 1859 zurück, als die ersten Reben für die Herstellung von Messwein gepflanzt wurden, doch die moderne Qualitätsrevolution begann erst in den 1980er Jahren. Heute beheimatet das Tal über 180 Weingüter, die eine beeindruckende Vielfalt an Weinen produzieren, von knackigen Weißweinen wie Riesling und Chardonnay bis hin zu kräftigen Rotweinen wie Merlot und Pinot Noir. Eine Besonderheit der Region ist das Gletschersediment im Boden, das den Weinen eine charakteristische Mineralität verleiht. Neben dem Weinbau ist das Okanagan Valley auch berühmt für seine Obstgärten, in denen Kirschen, Pfirsiche und Äpfel in Hülle und Fülle gedeihen. Der Weintourismus hat sich zu einem bedeutenden Wirtschaftszweig entwickelt, wobei viele Weingüter erstklassige Restaurants und Verkostungsräume mit Blick auf den Lake Okanagan bieten. Die Nachhaltigkeit steht im Fokus der lokalen Winzer, die vermehrt auf ökologischen Anbau und den Schutz der wertvollen Wasserressourcen setzen.",
      hu: "A Brit Kolumbiában található Okanagan-völgy Nyugat-Kanada legfontosabb borvidéke, amely látványos tavairól, hegyeiről és teraszos szőlőültetvényeiről híres. A régió éghajlata félszáraz, forró nyári nappalokkal és hűvös éjszakákkal, ami ideális feltételeket teremt a szőlő aromáinak koncentrálódásához. A völgy borászati története 1859-ig nyúlik vissza, amikor az első tőkéket ültették misebor készítéséhez, de a modern minőségi forradalom csak az 1980-as években kezdődött el. Napjainkban a völgyben több mint 180 borászat működik, amelyek lenyűgöző választékot kínálnak a ropogós fehérboroktól, mint a rizling és a chardonnay, a testes vörösborokig, mint a merlot és a pinot noir. A régió különlegessége a talajban található gleccserüledék, amely jellegzetes ásványosságot kölcsönöz a boroknak. A borászat mellett az Okanagan-völgy gyümölcsöskertjeiről is híres, ahol cseresznye, őszibarack és alma terem bőségben. A borturizmus jelentős gazdasági ágazattá vált, sok borászat világszínvonalú éttermekkel és az Okanagan-tóra néző kóstolótermekkel várja a vendégeket. A helyi borászok nagy hangsúlyt fektetnek a fenntarthatóságra, egyre többen alkalmaznak ökológiai gazdálkodást és védik az értékes vízkészleteket.",
      ro: "Valea Okanagan din Columbia Britanică este cea mai importantă regiune viticolă din vestul Canadei, fiind renumită pentru peisajele sale spectaculoase cu lacuri, munți și podgorii terasate. Climatul regiunii este semi-arid, cu zile de vară fierbinți și nopți răcoroase, condiții ideale pentru concentrarea aromelor în struguri. Istoria viticulturii în vale datează din 1859, când au fost plantate primele vițe pentru producerea vinului de împărtășanie, însă revoluția calității moderne a început abia în anii 1980. Astăzi, valea găzduiește peste 180 de crame care produc o varietate impresionantă de vinuri, de la albe proaspete precum Riesling și Chardonnay, până la roșii corpolente precum Merlot și Pinot Noir. O particularitate a regiunii este solul compus din sedimente glaciare, care conferă vinurilor o mineralitate distinctă. Pe lângă viticultură, Valea Okanagan este celebră și pentru livezile sale bogate în cireșe, piersici și mere. Turismul viticol a devenit o ramură economică majoră, multe crame oferind restaurante de lux și săli de degustare cu vedere spre Lacul Okanagan. Producătorii locali se concentrează tot mai mult pe sustenabilitate, adoptând practici de agricultură ecologică și protejând resursele de apă.",
      en: "The Okanagan Valley in British Columbia is Western Canada's premier wine-growing region, celebrated for its dramatic landscape of deep lakes, rugged mountains, and terraced vineyards. The region's unique semi-arid climate, featuring hot summer days and cool nights, provides ideal conditions for balancing sugar levels and acidity in the grapes. Viticulture in the valley dates back to 1859, when the first vines were planted by Oblate missionaries for sacramental wine, but the modern industry took off in the 1980s with a focus on high-quality VQA (Vintners Quality Alliance) standards. Today, the valley is home to over 180 licensed wineries producing a diverse range of styles, from crisp Rieslings and Chardonnays to complex Merlots and Pinot Noirs. The region's geological history, shaped by glacial activity, has left a variety of soil types that contribute to the distinct minerality found in many local wines. Beyond its vineyards, the Okanagan is also famous for its expansive fruit orchards producing cherries, peaches, and apples. Culinary tourism has flourished here, with many wineries hosting award-winning restaurants that showcase local, seasonal ingredients alongside their estate-grown vintages.",
      es: "El valle de Okanagan en la Columbia Británica es la segunda región vinícola más grande de Canadá y es famoso por su microclima único. Además de vinos de clase mundial, la región es célebre por sus fértiles huertos que producen abundantes cerezas, melocotones y manzanas.",
      pt: "O Vale de Okanagan, na Colúmbia Britânica, é a segunda maior região vinícola do Canadá e é conhecido pelo seu microclima único. Além de vinhos de classe mundial, a região é famosa pelos seus pomares férteis que produzem cerejas, pêssegos e maçãs em abundância.",
      fr: "La vallée de l'Okanagan, en Colombie-Britannique, est la deuxième plus grande région viticole du Canada et est réputée pour son microclimat unique. Outre ses vins de classe mondiale, la région est célèbre pour ses vergers fertiles qui produisent des cerises, des pêches et des pommes en abondance.",
    },
    factsAdvanced: {
      de: ["Im Okanagan Valley gibt es mehr als 180 lizenzierte Weingüter.", "Das Tal erstreckt sich über eine Länge von etwa 250 Kilometern.", "Das Klima ist eines der trockensten und wärmsten in ganz Kanada.", "Okanagan ist bekannt für seinen hochwertigen Eiswein aus gefrorenen Trauben.", "Über 80% der gesamten Weinproduktion British Columbias stammt aus diesem Tal.", "Der Lake Okanagan ist über 135 Kilometer lang und sehr tief."],
      hu: ["Az Okanagan-völgyben több mint 180 engedéllyel rendelkező borászat található.", "A völgy észak-déli irányban körülbelül 250 kilométer hosszan húzódik.", "A régió éghajlata az egyik legszárazabb és legmelegebb egész Kanadában.", "Okanagan híres a kiváló minőségű jégboráról, amelyet fagyott szőlőből készítenek.", "Brit Kolumbia teljes bortermelésének több mint 80%-a ebből a völgyből származik.", "Az Okanagan-tó hossza meghaladja a 135 kilométert."],
      ro: ["În Valea Okanagan funcționează peste 180 de crame autorizate.", "Valea se întinde pe o lungime de aproximativ 250 de kilometri.", "Climatul regiunii este unul dintre cele mai uscate și calde din Canada.", "Okanagan este renumită pentru producția de vin de gheață (icewine) de elită.", "Peste 80% din producția totală de vin a Columbiei Britanice provine din această vale.", "Lacul Okanagan are o lungime de peste 135 de kilometri și adâncimi mari."],
      en: ["The Okanagan Valley contains over 180 licensed wineries and 8,000 acres of vines.", "The valley spans approximately 250 kilometers from the US border northward.", "The southern end of the valley contains Canada's only true pocket desert.", "Okanagan produces world-class Icewine, harvested at temperatures below -8°C.", "Over 80% of all wine produced in British Columbia comes from the Okanagan.", "Lake Okanagan is a fjord lake reaching depths of up to 232 meters."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Zweitgrößte Weinregion", "Kanadas Obstgarten", "Trockenes Mikroklima", "Wunderschöne Seelage"], hu: ["Második legnagyobb borvidék", "Kanada gyümölcsöskertje", "Száraz mikroklíma", "Gyönyörű tóparti fekvés"], ro: ["A doua regiune viticolă", "Livada Canadei", "Microclimat arid", "Cadru pitoresc lângă lac"], en: ["Second largest wine region", "Canada's fruit orchard hub", "Unique semi-arid microclimate", "Scenic lakeside setting"] , es: ["Segunda región vinícola más grande", "El huerto de Canadá", "Microclima seco", "Hermosa ubicación junto al lago"], pt: ["Segunda maior região vinícola", "O pomar do Canadá", "Microclima seco", "Bela localização à beira do lago"], fr: ["Deuxième région viticole en importance", "Le verger du Canada", "Microclimat sec", "Emplacement magnifique au bord du lac"]}, image: "/poi-images/ca-okanagan-wine.webp"},
  {
    id: "ca-canadas-wonderland", "sights": {
      "de": [
            {
                  "name": "Gibson House",
                  "text": "Gibson House ist ein historisches Bauernhausmuseum aus dem 19. Jahrhundert in der Nähe von Canada's Wonderland.",
                  "category": "museum",
                  "coords": [
                        -79.414752,
                        43.769671
                  ]
            },
            {
                  "name": "The Village at Black Creek",
                  "text": "The Village at Black Creek ist ein lebendiges Geschichtsmuseum in North York (Toronto) in der Nähe von Canada's Wonderland.",
                  "category": "museum",
                  "coords": [
                        -79.519155,
                        43.775055
                  ]
            },
            {
                  "name": "North York Civic Centre",
                  "text": "Das North York Civic Centre ist das Rathaus des ehemaligen Bezirks North York in Toronto.",
                  "category": "historical",
                  "coords": [
                        -79.414652,
                        43.767262
                  ]
            },
            {
                  "name": "Baitul Islam Mosque",
                  "text": "Die Baitul Islam Moschee ist eine Moschee in Maple (Ontario) in der Nähe von Canada's Wonderland.",
                  "category": "religious",
                  "coords": [
                        -79.543,
                        43.864842
                  ]
            },
            {
                  "name": "Toronto and Region Islamic Congregation",
                  "text": "Die Toronto and Region Islamic Congregation ist eine Moschee in Thornhill (Ontario) in der Nähe von Canada's Wonderland.",
                  "category": "religious",
                  "coords": [
                        -79.51598,
                        43.717965
                  ]
            },
            {
                  "name": "Meridian Arts Centre",
                  "text": "Das Meridian Arts Centre ist ein Zentrum für darstellende Künste in North York (Toronto) nahe Canada's Wonderland.",
                  "category": "cultural",
                  "coords": [
                        -79.414436,
                        43.766051
                  ]
            },
            {
                  "name": "Beth Avraham Yoseph of Toronto",
                  "text": "Beth Avraham Yoseph of Toronto ist eine Synagoge in Toronto.",
                  "category": "religious",
                  "coords": [
                        -79.44408,
                        43.803651
                  ]
            },
            {
                  "name": "Leviathan",
                  "text": "Leviathan ist eine Stahlachterbahn in Canada's Wonderland und war einst die höchste in Kanada.",
                  "category": "landmark",
                  "coords": [
                        -79.542382,
                        43.844511
                  ]
            },
            {
                  "name": "Dragon Fyre",
                  "text": "Dragon Fyre ist eine Stahlachterbahn in Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.540647,
                        43.8445
                  ]
            },
            {
                  "name": "Heintzman House",
                  "text": "Das Heintzman House ist ein historisches Haus in Vaughan in der Nähe von Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.416309,
                        43.823831
                  ]
            },
            {
                  "name": "Kortright Centre for Conservation",
                  "text": "Das Kortright Centre for Conservation ist ein Umweltbildungszentrum in Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.595936,
                        43.828184
                  ]
            },
            {
                  "name": "Downsview Park",
                  "text": "Downsview Park ist ein großer Stadtpark in North York (Toronto) in der Nähe von Canada's Wonderland.",
                  "category": "park",
                  "coords": [
                        -79.48077,
                        43.741383
                  ]
            },
            {
                  "name": "Pine Point Park",
                  "text": "Pine Point Park ist ein Park in Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.544066,
                        43.716163
                  ]
            },
            {
                  "name": "Earl Bales Park",
                  "text": "Earl Bales Park ist ein Park in North York (Toronto) in der Nähe von Canada's Wonderland.",
                  "category": "park",
                  "coords": [
                        -79.427681,
                        43.751438
                  ]
            },
            {
                  "name": "Herbert H. Carnegie Centennial Centre",
                  "text": "Das Herbert H. Carnegie Centennial Centre ist ein Gemeindezentrum und Park in Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.450141,
                        43.773569
                  ]
            },
            {
                  "name": "Splash Works",
                  "text": "Splash Works ist ein Wasserpark innerhalb von Canada's Wonderland.",
                  "category": "recreational",
                  "coords": [
                        -79.54412,
                        43.838989
                  ]
            },
            {
                  "name": "Spirit Manor",
                  "text": "Spirit Manor ist ein interaktiver Spukhaus-Gang in Canada's Wonderland.",
                  "category": "cultural",
                  "coords": [
                        -79.546178,
                        43.841821
                  ]
            },
            {
                  "name": "Ghoster Coaster",
                  "text": "Ghoster Coaster ist eine Familienachterbahn in Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.545765,
                        43.843418
                  ]
            },
            {
                  "name": "Boo Blasters on Boo Hill",
                  "text": "Boo Blasters on Boo Hill ist eine Dark-Ride-Attraktion in Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.544239,
                        43.844485
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Gibson House",
                  "text": "A Gibson House egy 19. századi tanyamúzeum a Canada's Wonderland közelében.",
                  "category": "museum",
                  "coords": [
                        -79.414752,
                        43.769671
                  ]
            },
            {
                  "name": "The Village at Black Creek",
                  "text": "A Village at Black Creek egy élő történeti múzeum North Yorkban (Toronto) a Canada's Wonderland közelében.",
                  "category": "museum",
                  "coords": [
                        -79.519155,
                        43.775055
                  ]
            },
            {
                  "name": "North York Civic Centre",
                  "text": "A North York Civic Centre a korábbi North York kerület városháza Torontóban.",
                  "category": "historical",
                  "coords": [
                        -79.414652,
                        43.767262
                  ]
            },
            {
                  "name": "Baitul Islam Mosque",
                  "text": "A Baitul Islam Mecset egy mecset Maple-ben (Ontario) a Canada's Wonderland közelében.",
                  "category": "religious",
                  "coords": [
                        -79.543,
                        43.864842
                  ]
            },
            {
                  "name": "Toronto and Region Islamic Congregation",
                  "text": "A Toronto and Region Islamic Congregation egy mecset Thornhillben (Ontario) a Canada's Wonderland közelében.",
                  "category": "religious",
                  "coords": [
                        -79.51598,
                        43.717965
                  ]
            },
            {
                  "name": "Meridian Arts Centre",
                  "text": "A Meridian Arts Centre egy előadóművészeti központ North Yorkban (Toronto) a Canada's Wonderland közelében.",
                  "category": "cultural",
                  "coords": [
                        -79.414436,
                        43.766051
                  ]
            },
            {
                  "name": "Beth Avraham Yoseph of Toronto",
                  "text": "Beth Avraham Yoseph of Toronto egy zsinagóga Torontóban.",
                  "category": "religious",
                  "coords": [
                        -79.44408,
                        43.803651
                  ]
            },
            {
                  "name": "Leviathan",
                  "text": "A Leviathan egy acél hullámvasút a Canada's Wonderlandben, amely egykor Kanada legmagasabb hullámvasútja volt.",
                  "category": "landmark",
                  "coords": [
                        -79.542382,
                        43.844511
                  ]
            },
            {
                  "name": "Dragon Fyre",
                  "text": "A Dragon Fyre egy acél hullámvasút a Canada's Wonderlandben.",
                  "category": "landmark",
                  "coords": [
                        -79.540647,
                        43.8445
                  ]
            },
            {
                  "name": "Heintzman House",
                  "text": "A Heintzman House egy történelmi ház Vaughanban a Canada's Wonderland közelében.",
                  "category": "landmark",
                  "coords": [
                        -79.416309,
                        43.823831
                  ]
            },
            {
                  "name": "Kortright Centre for Conservation",
                  "text": "A Kortright Centre for Conservation egy környezeti oktatási központ Vaughanban.",
                  "category": "park",
                  "coords": [
                        -79.595936,
                        43.828184
                  ]
            },
            {
                  "name": "Downsview Park",
                  "text": "A Downsview Park egy nagy városi park North Yorkban (Toronto) a Canada's Wonderland közelében.",
                  "category": "park",
                  "coords": [
                        -79.48077,
                        43.741383
                  ]
            },
            {
                  "name": "Pine Point Park",
                  "text": "A Pine Point Park egy park Vaughanban.",
                  "category": "park",
                  "coords": [
                        -79.544066,
                        43.716163
                  ]
            },
            {
                  "name": "Earl Bales Park",
                  "text": "Az Earl Bales Park egy park North Yorkban (Toronto) a Canada's Wonderland közelében.",
                  "category": "park",
                  "coords": [
                        -79.427681,
                        43.751438
                  ]
            },
            {
                  "name": "Herbert H. Carnegie Centennial Centre",
                  "text": "A Herbert H. Carnegie Centennial Centre egy közösségi központ és park Vaughanban.",
                  "category": "park",
                  "coords": [
                        -79.450141,
                        43.773569
                  ]
            },
            {
                  "name": "Splash Works",
                  "text": "A Splash Works egy vízipark a Canada's Wonderland területén.",
                  "category": "recreational",
                  "coords": [
                        -79.54412,
                        43.838989
                  ]
            },
            {
                  "name": "Spirit Manor",
                  "text": "A Spirit Manor egy interaktív kísértetjárta házas attrakció a Canada's Wonderlandben.",
                  "category": "cultural",
                  "coords": [
                        -79.546178,
                        43.841821
                  ]
            },
            {
                  "name": "Ghoster Coaster",
                  "text": "A Ghoster Coaster egy családi hullámvasút a Canada's Wonderland-ben.",
                  "category": "landmark",
                  "coords": [
                        -79.545765,
                        43.843418
                  ]
            },
            {
                  "name": "Boo Blasters on Boo Hill",
                  "text": "A Boo Blasters on Boo Hill egy sötét lovaglás a Canada's Wonderland-ben.",
                  "category": "landmark",
                  "coords": [
                        -79.544239,
                        43.844485
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Gibson House",
                  "text": "Gibson House este un muzeu al unei ferme istorice din secolul al XIX-lea, situat lângă Canada's Wonderland.",
                  "category": "museum",
                  "coords": [
                        -79.414752,
                        43.769671
                  ]
            },
            {
                  "name": "The Village at Black Creek",
                  "text": "The Village at Black Creek este un muzeu de istorie vie din North York (Toronto), lângă Canada's Wonderland.",
                  "category": "museum",
                  "coords": [
                        -79.519155,
                        43.775055
                  ]
            },
            {
                  "name": "North York Civic Centre",
                  "text": "North York Civic Centre este primăria fostului district North York din Toronto.",
                  "category": "historical",
                  "coords": [
                        -79.414652,
                        43.767262
                  ]
            },
            {
                  "name": "Baitul Islam Mosque",
                  "text": "Moscheea Baitul Islam este o moschee din Maple, Ontario, lângă Canada's Wonderland.",
                  "category": "religious",
                  "coords": [
                        -79.543,
                        43.864842
                  ]
            },
            {
                  "name": "Toronto and Region Islamic Congregation",
                  "text": "Congregația Islamică din Toronto și Regiune este o moschee din Thornhill, Ontario, lângă Canada's Wonderland.",
                  "category": "religious",
                  "coords": [
                        -79.51598,
                        43.717965
                  ]
            },
            {
                  "name": "Meridian Arts Centre",
                  "text": "Centrul Artistic Meridian este un centru de arte spectacolului în North York, Toronto, lângă Canada's Wonderland.",
                  "category": "cultural",
                  "coords": [
                        -79.414436,
                        43.766051
                  ]
            },
            {
                  "name": "Beth Avraham Yoseph of Toronto",
                  "text": "Beth Avraham Yoseph of Toronto este o sinagogă din Toronto.",
                  "category": "religious",
                  "coords": [
                        -79.44408,
                        43.803651
                  ]
            },
            {
                  "name": "Leviathan",
                  "text": "Leviathan este un roller coaster din oțel din Canada's Wonderland, cândva cel mai înalt din Canada.",
                  "category": "landmark",
                  "coords": [
                        -79.542382,
                        43.844511
                  ]
            },
            {
                  "name": "Dragon Fyre",
                  "text": "Dragon Fyre este un roller coaster din oțel din Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.540647,
                        43.8445
                  ]
            },
            {
                  "name": "Heintzman House",
                  "text": "Heintzman House este o casă istorică din Vaughan, lângă Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.416309,
                        43.823831
                  ]
            },
            {
                  "name": "Kortright Centre for Conservation",
                  "text": "Centrul pentru Conservare Kortright este un centru de educație ecologică din Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.595936,
                        43.828184
                  ]
            },
            {
                  "name": "Downsview Park",
                  "text": "Parcul Downsview este un parc urban mare din North York, Toronto, lângă Canada's Wonderland.",
                  "category": "park",
                  "coords": [
                        -79.48077,
                        43.741383
                  ]
            },
            {
                  "name": "Pine Point Park",
                  "text": "Parcul Pine Point este un parc din Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.544066,
                        43.716163
                  ]
            },
            {
                  "name": "Earl Bales Park",
                  "text": "Parcul Earl Bales este un parc din North York, Toronto, lângă Canada's Wonderland.",
                  "category": "park",
                  "coords": [
                        -79.427681,
                        43.751438
                  ]
            },
            {
                  "name": "Herbert H. Carnegie Centennial Centre",
                  "text": "Centrul Centenar Herbert H. Carnegie este un centru comunitar și parc din Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.450141,
                        43.773569
                  ]
            },
            {
                  "name": "Splash Works",
                  "text": "Splash Works este un parc acvatic din interiorul Canada's Wonderland.",
                  "category": "recreational",
                  "coords": [
                        -79.54412,
                        43.838989
                  ]
            },
            {
                  "name": "Spirit Manor",
                  "text": "Spirit Manor este o atracție de tip casă bântuită interactivă din Canada's Wonderland.",
                  "category": "cultural",
                  "coords": [
                        -79.546178,
                        43.841821
                  ]
            },
            {
                  "name": "Ghoster Coaster",
                  "text": "Ghoster Coaster este un roller coaster de familie la Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.545765,
                        43.843418
                  ]
            },
            {
                  "name": "Boo Blasters on Boo Hill",
                  "text": "Boo Blasters on Boo Hill este o călătorie întunecată la Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.544239,
                        43.844485
                  ]
            }
      ],
      "en": [
            {
                  "name": "Gibson House",
                  "text": "Gibson House is a 19th-century farmhouse museum near Canada's Wonderland.",
                  "category": "museum",
                  "coords": [
                        -79.414752,
                        43.769671
                  ]
            },
            {
                  "name": "The Village at Black Creek",
                  "text": "The Village at Black Creek is a living history museum in North York, Toronto, near Canada's Wonderland.",
                  "category": "museum",
                  "coords": [
                        -79.519155,
                        43.775055
                  ]
            },
            {
                  "name": "North York Civic Centre",
                  "text": "North York Civic Centre is the city hall for the former city of North York in Toronto.",
                  "category": "historical",
                  "coords": [
                        -79.414652,
                        43.767262
                  ]
            },
            {
                  "name": "Baitul Islam Mosque",
                  "text": "Baitul Islam Mosque is a mosque in Maple, Ontario, near Canada's Wonderland.",
                  "category": "religious",
                  "coords": [
                        -79.543,
                        43.864842
                  ]
            },
            {
                  "name": "Toronto and Region Islamic Congregation",
                  "text": "Toronto and Region Islamic Congregation is a mosque in Thornhill, Ontario, near Canada's Wonderland.",
                  "category": "religious",
                  "coords": [
                        -79.51598,
                        43.717965
                  ]
            },
            {
                  "name": "Meridian Arts Centre",
                  "text": "Meridian Arts Centre is a performing arts centre in North York, Toronto, near Canada's Wonderland.",
                  "category": "cultural",
                  "coords": [
                        -79.414436,
                        43.766051
                  ]
            },
            {
                  "name": "Beth Avraham Yoseph of Toronto",
                  "text": "Beth Avraham Yoseph of Toronto is a synagogue in Toronto.",
                  "category": "religious",
                  "coords": [
                        -79.44408,
                        43.803651
                  ]
            },
            {
                  "name": "Leviathan",
                  "text": "Leviathan is a steel roller coaster at Canada's Wonderland, once the tallest in Canada.",
                  "category": "landmark",
                  "coords": [
                        -79.542382,
                        43.844511
                  ]
            },
            {
                  "name": "Dragon Fyre",
                  "text": "Dragon Fyre is a steel roller coaster at Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.540647,
                        43.8445
                  ]
            },
            {
                  "name": "Heintzman House",
                  "text": "Heintzman House is a historic house in Vaughan near Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.416309,
                        43.823831
                  ]
            },
            {
                  "name": "Kortright Centre for Conservation",
                  "text": "Kortright Centre for Conservation is an environmental education centre in Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.595936,
                        43.828184
                  ]
            },
            {
                  "name": "Downsview Park",
                  "text": "Downsview Park is a large urban park in North York, Toronto, near Canada's Wonderland.",
                  "category": "park",
                  "coords": [
                        -79.48077,
                        43.741383
                  ]
            },
            {
                  "name": "Pine Point Park",
                  "text": "Pine Point Park is a park in Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.544066,
                        43.716163
                  ]
            },
            {
                  "name": "Earl Bales Park",
                  "text": "Earl Bales Park is a park in North York, Toronto, near Canada's Wonderland.",
                  "category": "park",
                  "coords": [
                        -79.427681,
                        43.751438
                  ]
            },
            {
                  "name": "Herbert H. Carnegie Centennial Centre",
                  "text": "Herbert H. Carnegie Centennial Centre is a community centre and park in Vaughan.",
                  "category": "park",
                  "coords": [
                        -79.450141,
                        43.773569
                  ]
            },
            {
                  "name": "Splash Works",
                  "text": "Splash Works is a water park within Canada's Wonderland.",
                  "category": "recreational",
                  "coords": [
                        -79.54412,
                        43.838989
                  ]
            },
            {
                  "name": "Spirit Manor",
                  "text": "Spirit Manor is an interactive walk-through haunted attraction at Canada's Wonderland.",
                  "category": "cultural",
                  "coords": [
                        -79.546178,
                        43.841821
                  ]
            },
            {
                  "name": "Ghoster Coaster",
                  "text": "Ghoster Coaster is a family roller coaster at Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.545765,
                        43.843418
                  ]
            },
            {
                  "name": "Boo Blasters on Boo Hill",
                  "text": "Boo Blasters on Boo Hill is a dark ride at Canada's Wonderland.",
                  "category": "landmark",
                  "coords": [
                        -79.544239,
                        43.844485
                  ]
            }
      ]
},
    type: "kid-landmark",
    parent: "CA",
    coords: [-79.5, 43.8],
    name: { de: "Canada's Wonderland", hu: "Canada's Wonderland", ro: "Canada's Wonderland", en: "Canada's Wonderland" },
    description: { de: "Größter Freizeitpark Kanadas in Vaughan, Ontario.", hu: "Kanada legnagyobb vidámparkja az ontariói Vaughanban.", ro: "Cel mai mare parc de distracții din Canada în Vaughan, Ontario.", en: "Canada's premier amusement park in Vaughan, Ontario." },
    descriptionAdvanced: {
      de: "Canada's Wonderland ist der größte Freizeitpark Kanadas und befindet sich in Vaughan, Ontario, etwa 30 Kilometer nördlich von Toronto. Der Park wurde am 23. Mai 1981 offiziell eröffnet und umfasst eine beeindruckende Fläche von 134 Hektar. Er ist weltweit bekannt für seine erstklassige Sammlung von Achterbahnen, darunter 'Leviathan' und 'Behemoth', die zu den schnellsten und höchsten der Welt zählen. Neben den Adrenalin-Fahrgeschäften bietet der Park auch den Wasserpark 'Splash Works', verschiedene Themenbereiche wie 'Medieval Faire' und das kinderfreundliche 'Planet Snoopy'. Das Wahrzeichen des Parks ist der Wonder Mountain, ein künstlicher Berg mit Wasserfällen, der im Zentrum der Anlage thront. Jedes Jahr zieht der Park Millionen von Besuchern an und bietet saisonale Veranstaltungen wie Halloween Haunt und WinterFest. Canada's Wonderland spielt eine bedeutende Rolle für den Tourismus in Ontario und ist ein wichtiger Arbeitgeber für Jugendliche in der Region. Die kontinuierliche Investition in neue Attraktionen stellt sicher, dass der Park ein führendes Ziel für Familien und Achterbahn-Enthusiasten in Nordamerika bleibt.",
      hu: "A Canada's Wonderland Kanada legnagyobb vidámparkja, amely Ontario tartományban, Vaughant városában található, körülbelül 30 kilométerre északra Torontótól. A parkot hivatalosan 1981. május 23-án nyitották meg, és lenyűgöző, 134 hektáros területen fekszik. Világszerte híres hullámvasút-gyűjteményéről, beleértve a 'Leviathan' és 'Behemoth' nevű óriásokat, amelyek a világ leggyorsabb és legmagasabb hullámvasútjai közé tartoznak. Az adrenalin-fokozó játékok mellett a parkban található a 'Splash Works' vízipark, valamint különböző tematikus területek, mint a 'Medieval Faire' és a gyerekbarát 'Planet Snoopy'. A park jelképe a Wonder Mountain, egy vízesésekkel díszített mesterséges hegy, amely a terület központjában magasodik. Évente látogatók millióit vonzza, és olyan népszerű szezonális eseményeknek ad otthont, mint a Halloween Haunt és a WinterFest. A Canada's Wonderland jelentős szerepet játszik Ontario turizmusában, és a régió egyik legfontosabb szezonális munkaadója a fiatalok körében. Az új attrakciókba való folyamatos befektetések biztosítják, hogy a park Észak-Amerika egyik vezető szórakoztató központja maradjon.",
      ro: "Canada's Wonderland este cel mai mare parc de distracții din Canada, situat în Vaughan, Ontario, la aproximativ 30 de kilometri nord de Toronto. Deschis oficial la 23 mai 1981, parcul se întinde pe o suprafață impresionantă de 134 de hectare. Este renumit la nivel mondial pentru colecția sa de roller coastere de elită, printre care se numără 'Leviathan' și 'Behemoth', clasate printre cele mai înalte și rapide din lume. Pe lângă atracțiile pline de adrenalină, complexul include parcul acvatic 'Splash Works', zone tematice precum 'Medieval Faire' și secțiunea dedicată copiilor 'Planet Snoopy'. Simbolul parcului este Wonder Mountain, un munte artificial cu cascade situat chiar în centrul locației. Anual, parcul atrage milioane de vizitatori și găzduiește evenimente sezoniere populare, cum ar fi Halloween Haunt și WinterFest. Canada's Wonderland joacă un rol vital în economia turismului din Ontario și este un angajator major pentru tinerii din regiune. Investițiile constante în noi tehnologii și atracții asigură poziția parcului ca destinație de top pentru familii și pasionații de senzații tari din America de Nord.",
      en: "Canada's Wonderland is the country's premier amusement park, located in Vaughan, Ontario, roughly 30 kilometers north of downtown Toronto. Officially opened on May 23, 1981, the park spans 330 acres (134 hectares) and features several themed areas designed to provide a comprehensive entertainment experience. It is globally renowned for its world-class collection of roller coasters, currently housing 18 distinct rides, including record-breakers like 'Leviathan' and 'Behemoth'. The park also includes a massive 20-acre water park called Splash Works, and dedicated family zones such as KidZville and Planet Snoopy. At the heart of the park stands Wonder Mountain, an iconic artificial peak featuring cascading waterfalls and diving shows. Canada's Wonderland is a major tourism driver for the Greater Toronto Area, welcoming millions of guests each year during its operating season from spring to late autumn. Seasonal events like Halloween Haunt and WinterFest further extend its appeal into the colder months. As a leader in the amusement industry, the park continually introduces cutting-edge ride technology, maintaining its status as a top-tier destination for thrill-seekers in North America.",
    },
    factsAdvanced: {
      de: ["Der Park wurde am 23. Mai 1981 offiziell eröffnet.", "Mit 18 Achterbahnen belegt der Park weltweit einen Spitzenplatz.", "Die Achterbahn Leviathan erreicht eine Höchstgeschwindigkeit von 148 km/h.", "Der Park umfasst eine Gesamtfläche von 134 Hektar.", "Splash Works bietet über 15 verschiedene Wasserrutschen.", "Wonder Mountain beherbergt die interaktive Fahrt 'Guardian'."],
      hu: ["A vidámparkot 1981. május 23-án nyitották meg a látogatók előtt.", "A parkban 18 különböző hullámvasút üzemel, ami világviszonylatban is kiemelkedő.", "A Leviathan hullámvasút végsebessége eléri a 148 km/h-t.", "A komplexum teljes területe 134 hektár.", "A Splash Works vízipark 15-nél is több csúszdával rendelkezik.", "A központi Wonder Mountain belsejében található a 'Guardian' interaktív sötétvasút."],
      ro: ["Parcul a fost inaugurat oficial la data de 23 mai 1981.", "Există 18 roller coastere în parc, una dintre cele mai mari colecții din lume.", "Roller coasterul Leviathan atinge o viteză maximă de 148 km/h.", "Întregul complex de distracții ocupă o suprafață de 134 de hectare.", "Splash Works include peste 15 tobogane de apă și o piscină cu valuri uriașă.", "Muntele Wonder găzduiește atracția interactivă 4D numită 'Guardian'."],
      en: ["The park officially opened its gates on May 23, 1981.", "It features 18 roller coasters, ranking it third in the world for most coasters.", "Leviathan is the tallest and fastest roller coaster in Canada at 93 meters high.", "The entire park property covers 330 acres (134 hectares) of land.", "Splash Works water park covers 20 acres and includes a large wave pool.", "The centerpiece Wonder Mountain stands 150 feet (46 meters) tall."],
    }, image: "/poi-images/ca-canadas-wonderland.webp"},
  {
    id: "ca-west-edmonton-mall", "sights": {
      "de": [
            {
                  "name": "Mactaggart Sanctuary",
                  "text": "Mactaggart Sanctuary ist ein Naturschutzgebiet im West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.54656,
                        53.441428
                  ]
            },
            {
                  "name": "Animal crossing",
                  "text": "Animal crossing ist eine Attraktion im West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.563095,
                        53.428596
                  ]
            },
            {
                  "name": "Lansdowne Lookout",
                  "text": "Lansdowne Lookout ist ein Aussichtspunkt im West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.554251,
                        53.487325
                  ]
            },
            {
                  "name": "Park",
                  "text": "Park ist ein Naturschutzgebiet im West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.639462,
                        53.499036
                  ]
            },
            {
                  "name": "Corkscrew",
                  "text": "Corkscrew ist eine Attraktion im West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.625335,
                        53.521655
                  ]
            },
            {
                  "name": "Sun Runner",
                  "text": "Sun Runner ist eine Attraktion im West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.626834,
                        53.521689
                  ]
            },
            {
                  "name": "Sea Life Caverns",
                  "text": "Sea Life Caverns ist ein Aquarium im West Edmonton Mall.",
                  "category": "recreational",
                  "coords": [
                        -113.626749,
                        53.522652
                  ]
            },
            {
                  "name": "Beth Israel Synagogue",
                  "text": "Beth Israel Synagogue ist eine konservative Synagoge in Edmonton.",
                  "category": "religious",
                  "coords": [
                        -113.611948,
                        53.504073
                  ]
            },
            {
                  "name": "Constable Travis Jordan EPS Memorial Bridge",
                  "text": "Constable Travis Jordan EPS Memorial Bridge ist eine Gedenkbrücke in Edmonton.",
                  "category": "landmark",
                  "coords": [
                        -113.615611,
                        53.459801
                  ]
            },
            {
                  "name": "Indigenous Peoples Experience",
                  "text": "Indigenous Peoples Experience ist ein Museum in Edmonton, das die indigene Kultur zeigt.",
                  "category": "museum",
                  "coords": [
                        -113.584529,
                        53.499226
                  ]
            },
            {
                  "name": "Rutherford House",
                  "text": "Rutherford House ist ein historisches Hausmuseum in Edmonton.",
                  "category": "museum",
                  "coords": [
                        -113.58077,
                        53.501122
                  ]
            },
            {
                  "name": "Fort Edmonton Park",
                  "text": "Fort Edmonton Park ist ein Freilichtmuseum, das die Geschichte Edmontons zeigt.",
                  "category": "museum",
                  "coords": [
                        -113.579533,
                        53.501635
                  ]
            },
            {
                  "name": "Edmonton Alberta Temple",
                  "text": "Edmonton Alberta Temple ist ein Tempel der Kirche Jesu Christi der Heiligen der Letzten Tage in Edmonton.",
                  "category": "religious",
                  "coords": [
                        -113.570443,
                        53.489634
                  ]
            },
            {
                  "name": "Terwillegar Park",
                  "text": "Terwillegar Park ist ein großer Flussuferpark in Edmonton.",
                  "category": "park",
                  "coords": [
                        -113.611306,
                        53.478096
                  ]
            },
            {
                  "name": "Big Island Provincial Park",
                  "text": "Big Island Provincial Park ist ein Naturschutzgebiet in der Nähe von Edmonton.",
                  "category": "natural",
                  "coords": [
                        -113.644032,
                        53.441515
                  ]
            },
            {
                  "name": "Edmonton Corn Maze",
                  "text": "Edmonton Corn Maze ist ein saisonales Maislabyrinth in Edmonton.",
                  "category": "recreational",
                  "coords": [
                        -113.728389,
                        53.453044
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Mactaggart Sanctuary",
                  "text": "A Mactaggart Sanctuary egy természetvédelmi terület a West Edmonton Mallban.",
                  "category": "natural",
                  "coords": [
                        -113.54656,
                        53.441428
                  ]
            },
            {
                  "name": "Animal crossing",
                  "text": "Az Animal crossing egy attrakció a West Edmonton Mallban.",
                  "category": "landmark",
                  "coords": [
                        -113.563095,
                        53.428596
                  ]
            },
            {
                  "name": "Lansdowne Lookout",
                  "text": "A Lansdowne Lookout egy kilátó a West Edmonton Mallban.",
                  "category": "natural",
                  "coords": [
                        -113.554251,
                        53.487325
                  ]
            },
            {
                  "name": "Park",
                  "text": "A Park egy természetvédelmi terület a West Edmonton Mallban.",
                  "category": "natural",
                  "coords": [
                        -113.639462,
                        53.499036
                  ]
            },
            {
                  "name": "Corkscrew",
                  "text": "A Corkscrew egy attrakció a West Edmonton Mallban.",
                  "category": "landmark",
                  "coords": [
                        -113.625335,
                        53.521655
                  ]
            },
            {
                  "name": "Sun Runner",
                  "text": "A Sun Runner egy attrakció a West Edmonton Mallban.",
                  "category": "landmark",
                  "coords": [
                        -113.626834,
                        53.521689
                  ]
            },
            {
                  "name": "Sea Life Caverns",
                  "text": "A Sea Life Caverns egy akvárium a West Edmonton Mallban.",
                  "category": "recreational",
                  "coords": [
                        -113.626749,
                        53.522652
                  ]
            },
            {
                  "name": "Beth Israel Synagogue",
                  "text": "A Beth Israel Synagogue egy konzervatív zsinagóga Edmontonban.",
                  "category": "religious",
                  "coords": [
                        -113.611948,
                        53.504073
                  ]
            },
            {
                  "name": "Constable Travis Jordan EPS Memorial Bridge",
                  "text": "A Constable Travis Jordan EPS Memorial Bridge egy emlékhíd Edmontonban.",
                  "category": "landmark",
                  "coords": [
                        -113.615611,
                        53.459801
                  ]
            },
            {
                  "name": "Indigenous Peoples Experience",
                  "text": "Az Indigenous Peoples Experience egy múzeum Edmontonban, amely az őslakos kultúrát mutatja be.",
                  "category": "museum",
                  "coords": [
                        -113.584529,
                        53.499226
                  ]
            },
            {
                  "name": "Rutherford House",
                  "text": "A Rutherford House egy történelmi házmúzeum Edmontonban.",
                  "category": "museum",
                  "coords": [
                        -113.58077,
                        53.501122
                  ]
            },
            {
                  "name": "Fort Edmonton Park",
                  "text": "A Fort Edmonton Park egy szabadtéri múzeum, amely Edmonton történetét mutatja be.",
                  "category": "museum",
                  "coords": [
                        -113.579533,
                        53.501635
                  ]
            },
            {
                  "name": "Edmonton Alberta Temple",
                  "text": "Az Edmonton Alberta Temple Az Utolsó Napi Szentek Jézus Krisztus Egyháza temploma Edmontonban.",
                  "category": "religious",
                  "coords": [
                        -113.570443,
                        53.489634
                  ]
            },
            {
                  "name": "Terwillegar Park",
                  "text": "A Terwillegar Park egy nagy folyóparti park Edmontonban.",
                  "category": "park",
                  "coords": [
                        -113.611306,
                        53.478096
                  ]
            },
            {
                  "name": "Big Island Provincial Park",
                  "text": "A Big Island Provincial Park egy természetvédelmi terület Edmonton közelében.",
                  "category": "natural",
                  "coords": [
                        -113.644032,
                        53.441515
                  ]
            },
            {
                  "name": "Edmonton Corn Maze",
                  "text": "Az Edmonton Corn Maze egy szezonális kukoricalabirintus Edmontonban.",
                  "category": "recreational",
                  "coords": [
                        -113.728389,
                        53.453044
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Mactaggart Sanctuary",
                  "text": "Mactaggart Sanctuary este o rezervație naturală în West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.54656,
                        53.441428
                  ]
            },
            {
                  "name": "Animal crossing",
                  "text": "Animal crossing este o atracție în West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.563095,
                        53.428596
                  ]
            },
            {
                  "name": "Lansdowne Lookout",
                  "text": "Lansdowne Lookout este un punct de belvedere în West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.554251,
                        53.487325
                  ]
            },
            {
                  "name": "Park",
                  "text": "Park este o rezervație naturală în West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.639462,
                        53.499036
                  ]
            },
            {
                  "name": "Corkscrew",
                  "text": "Corkscrew este o atracție în West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.625335,
                        53.521655
                  ]
            },
            {
                  "name": "Sun Runner",
                  "text": "Sun Runner este o atracție în West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.626834,
                        53.521689
                  ]
            },
            {
                  "name": "Sea Life Caverns",
                  "text": "Sea Life Caverns este un acvariu în West Edmonton Mall.",
                  "category": "recreational",
                  "coords": [
                        -113.626749,
                        53.522652
                  ]
            },
            {
                  "name": "Beth Israel Synagogue",
                  "text": "Beth Israel Synagogue este o sinagogă conservatoare din Edmonton.",
                  "category": "religious",
                  "coords": [
                        -113.611948,
                        53.504073
                  ]
            },
            {
                  "name": "Constable Travis Jordan EPS Memorial Bridge",
                  "text": "Constable Travis Jordan EPS Memorial Bridge este un pod memorial în Edmonton.",
                  "category": "landmark",
                  "coords": [
                        -113.615611,
                        53.459801
                  ]
            },
            {
                  "name": "Indigenous Peoples Experience",
                  "text": "Indigenous Peoples Experience este un muzeu în Edmonton care prezintă cultura indigenă.",
                  "category": "museum",
                  "coords": [
                        -113.584529,
                        53.499226
                  ]
            },
            {
                  "name": "Rutherford House",
                  "text": "Rutherford House este un muzeu de casă istorică în Edmonton.",
                  "category": "museum",
                  "coords": [
                        -113.58077,
                        53.501122
                  ]
            },
            {
                  "name": "Fort Edmonton Park",
                  "text": "Fort Edmonton Park este un muzeu în aer liber care ilustrează istoria Edmontonului.",
                  "category": "museum",
                  "coords": [
                        -113.579533,
                        53.501635
                  ]
            },
            {
                  "name": "Edmonton Alberta Temple",
                  "text": "Edmonton Alberta Temple este un templu al Bisericii lui Isus Hristos a Sfinților din Zilele din Urmă din Edmonton.",
                  "category": "religious",
                  "coords": [
                        -113.570443,
                        53.489634
                  ]
            },
            {
                  "name": "Terwillegar Park",
                  "text": "Terwillegar Park este un mare parc pe malul râului în Edmonton.",
                  "category": "park",
                  "coords": [
                        -113.611306,
                        53.478096
                  ]
            },
            {
                  "name": "Big Island Provincial Park",
                  "text": "Big Island Provincial Park este o rezervație naturală lângă Edmonton.",
                  "category": "natural",
                  "coords": [
                        -113.644032,
                        53.441515
                  ]
            },
            {
                  "name": "Edmonton Corn Maze",
                  "text": "Edmonton Corn Maze este un labirint de porumb sezonier în Edmonton.",
                  "category": "recreational",
                  "coords": [
                        -113.728389,
                        53.453044
                  ]
            }
      ],
      "en": [
            {
                  "name": "Mactaggart Sanctuary",
                  "text": "Mactaggart Sanctuary is a nature reserve at West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.54656,
                        53.441428
                  ]
            },
            {
                  "name": "Animal crossing",
                  "text": "Animal crossing is an attraction at West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.563095,
                        53.428596
                  ]
            },
            {
                  "name": "Lansdowne Lookout",
                  "text": "Lansdowne Lookout is a viewpoint at West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.554251,
                        53.487325
                  ]
            },
            {
                  "name": "Park",
                  "text": "Park is a nature reserve at West Edmonton Mall.",
                  "category": "natural",
                  "coords": [
                        -113.639462,
                        53.499036
                  ]
            },
            {
                  "name": "Corkscrew",
                  "text": "Corkscrew is an attraction at West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.625335,
                        53.521655
                  ]
            },
            {
                  "name": "Sun Runner",
                  "text": "Sun Runner is an attraction at West Edmonton Mall.",
                  "category": "landmark",
                  "coords": [
                        -113.626834,
                        53.521689
                  ]
            },
            {
                  "name": "Sea Life Caverns",
                  "text": "Sea Life Caverns is an aquarium at West Edmonton Mall.",
                  "category": "recreational",
                  "coords": [
                        -113.626749,
                        53.522652
                  ]
            },
            {
                  "name": "Beth Israel Synagogue",
                  "text": "Beth Israel Synagogue is a Conservative synagogue in Edmonton.",
                  "category": "religious",
                  "coords": [
                        -113.611948,
                        53.504073
                  ]
            },
            {
                  "name": "Constable Travis Jordan EPS Memorial Bridge",
                  "text": "Constable Travis Jordan EPS Memorial Bridge is a memorial bridge in Edmonton.",
                  "category": "landmark",
                  "coords": [
                        -113.615611,
                        53.459801
                  ]
            },
            {
                  "name": "Indigenous Peoples Experience",
                  "text": "Indigenous Peoples Experience is a museum in Edmonton that explores Indigenous cultures.",
                  "category": "museum",
                  "coords": [
                        -113.584529,
                        53.499226
                  ]
            },
            {
                  "name": "Rutherford House",
                  "text": "Rutherford House is a historic house museum in Edmonton.",
                  "category": "museum",
                  "coords": [
                        -113.58077,
                        53.501122
                  ]
            },
            {
                  "name": "Fort Edmonton Park",
                  "text": "Fort Edmonton Park is a living history museum depicting Edmonton's history.",
                  "category": "museum",
                  "coords": [
                        -113.579533,
                        53.501635
                  ]
            },
            {
                  "name": "Edmonton Alberta Temple",
                  "text": "Edmonton Alberta Temple is a temple of The Church of Jesus Christ of Latter-day Saints in Edmonton.",
                  "category": "religious",
                  "coords": [
                        -113.570443,
                        53.489634
                  ]
            },
            {
                  "name": "Terwillegar Park",
                  "text": "Terwillegar Park is a large river valley park in Edmonton.",
                  "category": "park",
                  "coords": [
                        -113.611306,
                        53.478096
                  ]
            },
            {
                  "name": "Big Island Provincial Park",
                  "text": "Big Island Provincial Park is a nature reserve near Edmonton.",
                  "category": "natural",
                  "coords": [
                        -113.644032,
                        53.441515
                  ]
            },
            {
                  "name": "Edmonton Corn Maze",
                  "text": "Edmonton Corn Maze is a seasonal corn maze attraction in Edmonton.",
                  "category": "recreational",
                  "coords": [
                        -113.728389,
                        53.453044
                  ]
            }
      ]
},
    type: "kid-landmark",
    parent: "CA",
    coords: [-113.6, 53.5],
    name: { de: "West Edmonton Mall", hu: "West Edmonton Mall", ro: "West Edmonton Mall", en: "West Edmonton Mall" },
    description: { de: "Eines der größten Einkaufs- und Unterhaltungszentren der Welt.", hu: "A világ egyik legnagyobb bevásárló- és szórakoztatóközpontja.", ro: "Unul dintre cele mai mari centre comerciale și de divertisment din lume.", en: "One of the world's largest shopping and entertainment complexes." , es: "Uno de los centros comerciales y de ocio más grandes del mundo.", pt: "Um dos maiores centros comerciais e de entretenimento do mundo.", fr: "L'un des plus grands centres commerciaux et de divertissement au monde."},
    descriptionAdvanced: {
      de: "Das West Edmonton Mall in der Provinz Alberta ist das größte Einkaufszentrum in Nordamerika und ein bedeutender wirtschaftlicher Faktor für die Region Edmonton. Eröffnet im September 1981, wurde die Anlage in vier Phasen bis 1999 kontinuierlich erweitert und war bis zum Jahr 2004 das flächenmäßig größte Einkaufszentrum der Welt. Auf einer Bruttogeschossfläche von rund 490.000 Quadratmetern beherbergt der Komplex mehr als 800 Geschäfte und Dienstleistungsbetriebe. Neben dem Einzelhandel zeichnet sich das Zentrum durch großflächige Unterhaltungsangebote aus, darunter der World Waterpark mit dem weltweit größten Indoor-Wellenbad und der Freizeitpark Galaxyland. Ein weiteres markantes Merkmal ist die Nachbildung der Santa Maria, des Flaggschiffs von Christoph Kolumbus, in einem künstlichen See innerhalb der Mall. Jährlich besuchen etwa 32 Millionen Menschen die Anlage, was sie zu einer der meistbesuchten touristischen Attraktionen Kanadas macht. Die Architektur und das Konzept der Mall dienten weltweit als Vorbild für die Entwicklung von sogenannten Mega-Malls, die Kommerz und Freizeitgestaltung kombinieren.",
      hu: "A West Edmonton Mall a kanadai Alberta tartományban található, és Észak-Amerika legnagyobb bevásárlóközpontja, amely Edmonton városának gazdasági és turisztikai központja. Az 1981 szeptemberében megnyitott létesítményt a Ghermezian fivérek fejlesztették ki, és 2004-ig a világ legnagyobb bevásárlóközpontjaként tartották számon. A komplexum teljes alapterülete megközelítőleg 490 000 négyzetméter, ahol több mint 800 üzlet, étterem és szolgáltató egység kapott helyet. A bevásárlóközpont különlegessége a hatalmas szórakoztató részlegekben rejlik, mint például a Galaxyland fedett vidámpark és a World Waterpark, amely a világ egyik legnagyobb beltéri hullámmedencéjével rendelkezik. A belső terekben olyan látványosságok is találhatók, mint a Kolumbusz Kristóf zászlóshajójának, a Santa Mariának az élethű másolata egy mesterséges tóban. Évente több mint 30 millió látogató keresi fel a központot, amely jelentős munkaadó a régióban és meghatározó szerepet tölt be a helyi infrastruktúra fejlődésében. A létesítmény nem csupán kereskedelmi egység, hanem komplex szabadidős célpont, amely szállodákkal és mozikomplexumokkal is kiegészül.",
      ro: "West Edmonton Mall, situat în provincia Alberta, este cel mai mare centru comercial din America de Nord și reprezintă un pilon economic major pentru orașul Edmonton. Inaugurat în septembrie 1981, complexul a fost dezvoltat de frații Ghermezian și a deținut titlul de cel mai mare mall din lume până în anul 2004. Cu o suprafață totală de aproximativ 490.000 de metri pătrați, acesta găzduiește peste 800 de magazine și unități de servicii. Facilitățile sale de divertisment sunt vaste, incluzând World Waterpark, care deține una dintre cele mai mari piscine cu valuri din lume, și parcul de distracții interior Galaxyland. O atracție distinctivă este replica navei Santa Maria a lui Cristofor Columb, situată într-un lac artificial în interiorul mall-ului. Centrul atrage anual circa 32 de milioane de vizitatori, fiind una dintre principalele destinații turistice din Canada. Pe lângă spațiile comerciale, complexul include zone tematice precum Bourbon Street și Europa Boulevard, oferind o experiență culturală și recreativă diversificată. Impactul său economic este semnificativ, generând mii de locuri de muncă și stimulând turismul regional.",
      en: "West Edmonton Mall, located in Edmonton, Alberta, is the largest shopping mall in North America and a significant economic driver for the region. Opened in September 1981, the facility was developed by the Ghermezian brothers and held the record for the world's largest mall until 2004. Covering a gross area of approximately 490,000 square meters, the complex houses over 800 stores and services. Beyond retail, the mall is renowned for its extensive entertainment facilities, including the World Waterpark, which features the world's largest indoor wave pool, and Galaxyland, one of the world's largest indoor amusement parks. A notable feature is the full-scale replica of Christopher Columbus's flagship, the Santa Maria, floating in an artificial lagoon. The mall attracts about 32 million visitors annually, making it one of Canada's top tourist destinations. It serves as a comprehensive leisure hub with on-site hotels, cinemas, and themed streets like Bourbon Street. The mall's scale and diversity of attractions have set a global precedent for integrated retail and entertainment developments.",
    },
    factsAdvanced: {
      de: ["Das Einkaufszentrum wurde am 15. September 1981 offiziell eröffnet.", "Es umfasst eine Bruttogeschossfläche von ca. 490.000 Quadratmetern.", "Die Baukosten beliefen sich insgesamt auf rund 1,2 Milliarden kanadische Dollar.", "Das Galaxyland ist einer der weltweit größten Indoor-Freizeitparks.", "Im World Waterpark befindet sich ein Wellenbad mit einem Volumen von 12,3 Millionen Litern.", "Der Parkplatz bietet Platz für mehr als 20.000 Fahrzeuge gleichzeitig."],
      hu: ["A bevásárlóközpontot 1981. szeptember 15-én nyitották meg a nagyközönség előtt.", "Az épület teljes alapterülete körülbelül 490 000 négyzetmétert tesz ki.", "A komplexum építési költségei elérték az 1,2 milliárd kanadai dollárt.", "A Galaxyland a világ egyik legnagyobb fedett vidámparkja.", "A World Waterpark hullámmedencéje 12,3 millió liter vizet tartalmaz.", "A központ parkolója több mint 20 000 gépjármű befogadására alkalmas."],
      ro: ["Centrul comercial a fost deschis oficial la data de 15 septembrie 1981.", "Suprafața totală desfășurată a complexului este de circa 490.000 mp.", "Costurile totale de construcție s-au ridicat la aproximativ 1,2 miliarde de dolari canadieni.", "Galaxyland este unul dintre cele mai mari parcuri de distracții acoperite din lume.", "Piscina cu valuri din World Waterpark are un volum de 12,3 milioane de litri de apă.", "Parcarea mall-ului poate găzdui peste 20.000 de autovehicule simultan."],
      en: ["The mall officially opened its doors on September 15, 1981.", "It encompasses a gross floor area of approximately 490,000 square meters.", "The total construction cost was estimated at 1.2 billion Canadian dollars.", "Galaxyland is one of the world's largest indoor amusement parks.", "The World Waterpark wave pool holds 12.3 million liters of water.", "The facility provides parking space for more than 20,000 vehicles."],
      es: [],
      pt: [],
      fr: [],
    }, image: "/poi-images/ca-west-edmonton-mall.webp"},
  {
    id: "ca-alberta-oil-sands",
    type: "industry",
    parent: "CA",
    coords: [-111.4, 57.0],
    name: { de: "Alberta Ölsande", hu: "Albertai olajhomok", ro: "Nisipurile bituminoase din Alberta", en: "Alberta Oil Sands" },
    description: { de: "Großes Zentrum der Energiegewinnung im Norden Alberttas.", hu: "Hatalmas energiatermelő központ Alberta északi részén.", ro: "Centru major de producție de energie în nordul Albertei.", en: "Major energy production center in northern Alberta." , es: "Gran centro de producción de energía en el norte de Alberta.", pt: "Grande centro de produção de energia no norte de Alberta.", fr: "Grand centre de production d'énergie dans le nord de l'Alberta."},
    descriptionAdvanced: {
      de: "Die Ölsande von Alberta, insbesondere die Athabasca-Ölsande, stellen eine der weltweit größten bekannten Lagerstätten von Rohbitumen dar. Diese geologischen Formationen erstrecken sich über eine Fläche von etwa 142.000 Quadratkilometern im Norden der Provinz Alberta, Kanada. Die Gewinnung erfolgt entweder durch Tagebau bei oberflächennahen Vorkommen oder durch In-situ-Verfahren wie die dampfunterstützte Schwerkraftentwässerung (SAGD) für tiefere Schichten. Wirtschaftlich gesehen bilden die Ölsande das Rückgrat der kanadischen Energieindustrie und machen das Land zu einem der führenden Ölproduzenten weltweit. Die Reserven werden auf rund 165 Milliarden Barrel geschätzt, was Kanada nach Venezuela und Saudi-Arabien auf den dritten Platz der globalen Ölreserven bringt. Trotz ihrer ökonomischen Bedeutung steht die Gewinnung aufgrund des hohen Energieverbrauchs und der Umweltauswirkungen, wie dem Flächenverbrauch und der Abwasserbewirtschaftung, in der internationalen Kritik. Die Industrie investiert jedoch zunehmend in Technologien zur Reduzierung der CO2-Intensität und zur Verbesserung der Rekultivierung von Abbaugebieten. Die Stadt Fort McMurray fungiert als zentraler Logistik- und Wohnknotenpunkt für die Arbeiter in diesem Sektor.",
      hu: "Az albertai olajhomok mezők, különösen az Athabasca-régióban találhatók, a világ egyik legnagyobb bitumenkészletét rejtik magukban. Ez a geológiai képződmény körülbelül 142 000 négyzetkilométernyi területet fed le Kanada Alberta tartományának északi részén. A kitermelés két fő módszerrel történik: a felszínközeli rétegeknél külszíni bányászattal, a mélyebben fekvő készleteknél pedig in-situ eljárásokkal, például gőzbefecskendezéssel (SAGD). Gazdasági szempontból az olajhomok a kanadai energiaipar alapköve, amely az országot a világ egyik vezető olajtermelőjévé teszi. A becsült készletek elérik a 165 milliárd hordót, amivel Kanada Venezuela és Szaúd-Arábia után a harmadik helyen áll a globális rangsorban. Bár a szektor meghatározó a nemzeti jövedelem szempontjából, a kitermelés jelentős környezeti kihívásokkal jár a magas energiaigény és az üvegházhatású gázok kibocsátása miatt. Az iparág jelenleg jelentős összegeket fordít a CO2-intenzitás csökkentésére és a bányászati területek rekultivációjára. Fort McMurray városa a kitermelés központjaként kulcsszerepet játszik a logisztikai folyamatokban és a munkaerő elszállásolásában.",
      ro: "Nisipurile bituminoase din Alberta, în special cele din regiunea Athabasca, reprezintă una dintre cele mai mari rezerve de bitum brut de pe glob. Aceste formațiuni geologice se întind pe o suprafață de aproximativ 142.000 de kilometri pătrați în nordul provinciei Alberta, Canada. Extracția se realizează fie prin minerit la suprafață pentru depozitele de mică adâncime, fie prin metode in-situ, precum drenajul gravitațional asistat de abur (SAGD), pentru straturile profunde. Din punct de vedere economic, nisipurile bituminoase constituie coloana vertebrală a industriei energetice canadiene, plasând țara printre principalii producători mondiali de petrol. Rezervele sunt estimate la circa 165 de miliarde de barili, ceea ce conferă Canadei locul al treilea în lume după Venezuela și Arabia Saudită. În ciuda importanței lor economice, metodele de extracție sunt criticate internațional din cauza consumului ridicat de energie și a impactului asupra mediului, inclusiv emisiile de carbon și utilizarea apei. Industria investește în prezent în tehnologii de captare a carbonului și în programe de reabilitare a terenurilor exploatate. Orașul Fort McMurray servește drept centru logistic principal pentru forța de muncă angajată în acest sector.",
      en: "The Alberta Oil Sands, particularly the Athabasca deposits, represent one of the largest reserves of crude bitumen in the world. These geological formations span approximately 142,000 square kilometers across northern Alberta, Canada. Extraction occurs through two primary methods: open-pit mining for shallow deposits and in-situ techniques, such as Steam Assisted Gravity Drainage (SAGD), for deeper layers. Economically, the oil sands are the backbone of Canada's energy sector, establishing the nation as a leading global oil producer. Proven reserves are estimated at roughly 165 billion barrels, placing Canada third globally behind Venezuela and Saudi Arabia. Despite their economic significance, extraction faces international scrutiny due to high energy intensity and environmental impacts, including greenhouse gas emissions and land disturbance. The industry is increasingly investing in carbon capture technologies and land reclamation efforts to mitigate its ecological footprint. Fort McMurray acts as the central service and residential hub for the massive workforce involved in the extraction projects. Ongoing technological advancements aim to reduce the carbon intensity of the produced barrels over the coming decades.",
    },
    factsAdvanced: {
      de: ["Die Ölsande bedecken eine Gesamtfläche von etwa 142.200 Quadratkilometern.", "Kanada besitzt mit ca. 165 Milliarden Barrel die drittgrößten Ölreserven weltweit.", "Etwa 80 % der Reserven können nur durch In-situ-Verfahren gewonnen werden.", "Die erste kommerzielle Ölförderung in Athabasca begann im Jahr 1967.", "Die Energieindustrie trägt wesentlich zum Bruttoinlandsprodukt von Alberta bei.", "Fort McMurray wurde durch den Ölboom von einer kleinen Siedlung zur Großstadt."],
      hu: ["Az olajhomok mezők összesen körülbelül 142 200 négyzetkilométert fednek le.", "Kanada 165 milliárd hordós készletével a világ harmadik legnagyobb tartalékával bír.", "A készletek mintegy 80%-át csak in-situ eljárásokkal lehet kitermelni.", "Az első kereskedelmi célú olajkitermelés Athabascában 1967-ben indult el.", "Az olajipar jelentős mértékben hozzájárul Alberta tartomány GDP-jéhez.", "Fort McMurray városa az olajkitermelésnek köszönhetően indult gyors fejlődésnek."],
      ro: ["Nisipurile bituminoase acoperă o suprafață totală de circa 142.200 km pătrați.", "Canada deține a treia mare rezervă de petrol din lume, cu 165 miliarde de barili.", "Circa 80% din rezerve pot fi extrase exclusiv prin metode in-situ.", "Prima exploatare comercială a nisipurilor din Athabasca a început în 1967.", "Industria petrolieră contribuie major la produsul intern brut al provinciei Alberta.", "Orașul Fort McMurray a cunoscut o expansiune rapidă datorită boom-ului petrolier."],
      en: ["The oil sands deposits cover a total area of approximately 142,200 square kilometers.", "Canada holds the world's third-largest oil reserves with 165 billion barrels.", "About 80% of the oil sands reserves are recoverable only by in-situ methods.", "Commercial production at the Athabasca oil sands began in 1967.", "The energy sector is a primary contributor to Alberta's provincial GDP.", "Fort McMurray transformed from a small outpost to a major city due to oil production."],
      es: [],
      pt: [],
      fr: [],
    }, image: "/poi-images/ca-alberta-oil-sands.webp"},
  {
    id: "ca-vancouver-film",
    type: "industry",
    parent: "CA",
    coords: [-123.1, 49.3],
    name: { de: "Vancouver Filmindustrie", hu: "Vancouveri filmipar", ro: "Industria cinematografică din Vancouver", en: "Vancouver Film Industry" },
    description: { de: "Häufig als 'Hollywood North' bezeichnet.", hu: "Gyakran 'Északi Hollywoodként' emlegetik.", ro: "Adesea supranumit \\\"Hollywood-ul Nordului\\\".", en: "Often referred to as 'Hollywood North'." },
    descriptionAdvanced: {
      de: "Die Filmindustrie in Vancouver, oft als \"Hollywood North\" bezeichnet, ist eines der größten Zentren für Film- und Fernsehproduktionen in Nordamerika. Dank einer Kombination aus großzügigen Steuervergünstigungen der Provinz British Columbia, einer gut ausgebauten Infrastruktur und erfahrenen Fachkräften hat sich die Stadt als weltweit führender Standort etabliert. Vancouver bietet eine enorme Vielfalt an Drehorten, die von modernen Stadtlandschaften bis hin zu unberührten Küstenwäldern und Gebirgszügen reichen. Zu den bedeutendsten Einrichtungen gehören die North Shore Studios und die Mammoth Studios, die über einige der größten Studiohallen des Kontinents verfügen. Die Branche sichert zehntausende Arbeitsplätze und trägt jährlich Milliarden von Dollar zur lokalen Wirtschaft bei. Bekannte Produktionen wie \"Deadpool\", \"The X-Files\" und zahlreiche Netflix-Serien wurden hier gedreht. Neben der Produktion vor Ort hat sich Vancouver auch zu einem globalen Knotenpunkt für visuelle Effekte (VFX) und Postproduktion entwickelt. Die Nähe zu Los Angeles und die gleiche Zeitzone erleichtern die Zusammenarbeit mit den großen Hollywood-Studios erheblich. Die Stadt beherbergt zudem das Vancouver International Film Festival (VIFF), eines der größten Filmfestivals Nordamerikas.",
      hu: "Vancouver filmipara, amelyet gyakran „Hollywood North” néven emlegetnek, Észak-Amerika egyik legfontosabb film- és televíziós gyártási központja. A város sikere a Brit Columbia tartomány által kínált kedvező adókedvezményeknek, a modern infrastruktúrának és a magasan képzett szakembergárdának köszönhető. Vancouver rendkívül változatos forgatási helyszíneket kínál, a modern nagyvárosi környezettől a vadregényes tengerpartokon át a hófödte hegycsúcsokig. Olyan jelentős stúdiók működnek itt, mint a North Shore Studios és a Mammoth Studios, amelyek a kontinens legnagyobb műtermeivel rendelkeznek. Az ágazat több tízezer munkahelyet teremt és évente több milliárd dollárral járul hozzá a helyi gazdasághoz. Számos világsikerű produkció, mint a „Deadpool”, az „X-akták” vagy rengeteg Netflix-sorozat készült a városban és környékén. Vancouver emellett a vizuális effektek (VFX) és a digitális utómunka globális fellegvárává is vált. Los Angeles közelsége és az azonos időzóna ideális feltételeket biztosít a hollywoodi stúdiókkal való szoros együttműködéshez. A város ad otthont a Vancouveri Nemzetközi Filmfesztiválnak (VIFF) is, amely a kontinens egyik legrangosabb filmes eseménye.",
      ro: "Industria cinematografică din Vancouver, cunoscută sub denumirea de „Hollywood North”, este unul dintre cele mai importante centre de producție de film și televiziune din America de Nord. Succesul orașului se datorează unei combinații de stimulente fiscale oferite de provincia Columbia Britanică, o infrastructură de ultimă generație și o forță de muncă extrem de specializată. Vancouver oferă o diversitate remarcabilă de locații de filmare, de la peisaje urbane moderne la păduri de coastă virgine și munți spectaculoși. Facilități majore precum North Shore Studios și Mammoth Studios oferă unele dintre cele mai mari platouri de filmare de pe continent. Sectorul generează zeci de mii de locuri de muncă și contribuie cu miliarde de dolari anual la economia locală. Producții celebre precum „Deadpool”, „The X-Files” și numeroase seriale Netflix au fost realizate aici. De asemenea, Vancouver a devenit un hub global pentru efecte vizuale (VFX) și post-producție digitală. Apropierea de Los Angeles și același fus orar facilitează coordonarea cu marile studiouri de la Hollywood. Orașul găzduiește anual Festivalul Internațional de Film din Vancouver (VIFF), unul dintre cele mai mari evenimente de acest gen din America de Nord.",
      en: "The Vancouver film industry, often referred to as 'Hollywood North,' is one of the largest film and television production centers in North America. Its prominence is sustained by a combination of generous tax credits provided by the province of British Columbia, world-class infrastructure, and a highly skilled technical workforce. Vancouver provides a vast array of filming locations, ranging from sleek urban settings to temperate rainforests and rugged mountain ranges. Key facilities include North Shore Studios and Mammoth Studios, which boast some of the largest soundstages on the continent. The industry supports tens of thousands of jobs and contributes billions of dollars annually to the local economy. Iconic productions such as 'Deadpool,' 'The X-Files,' and many Netflix originals have been filmed in the area. Beyond physical production, Vancouver has emerged as a global leader in visual effects (VFX) and digital post-production. The city's proximity to Los Angeles and shared time zone make it an ideal partner for major Hollywood studios. It also hosts the Vancouver International Film Festival (VIFF), showcasing its vibrant cinematic culture to a global audience.",
    },
    factsAdvanced: {
      de: ["Vancouver ist nach Los Angeles und New York das drittgrößte Filmzentrum Nordamerikas.", "Die Branche generiert jährlich über 3 Milliarden Dollar für die lokale Wirtschaft.", "Mehr als 60.000 Menschen sind direkt oder indirekt in der Filmindustrie beschäftigt.", "Die Mammoth Studios verfügen über eine Fläche von rund 23.000 Quadratmetern.", "Britisch-Kolumbien bietet Steuervergünstigungen von bis zu 35 % auf Arbeitskosten.", "Das Vancouver International Film Festival wurde erstmals im Jahr 1982 abgehalten."],
      hu: ["Vancouver Los Angeles és New York után a harmadik legnagyobb filmes központ.", "A szektor évente több mint 3 milliárd dollárt termel a helyi gazdaságnak.", "Több mint 60 000 ember dolgozik közvetlenül vagy közvetve a filmiparban.", "A Mammoth Studios műtermi területe megközelíti a 23 000 négyzetmétert.", "Brit Columbia akár 35%-os adókedvezményt is nyújt a bérköltségekre.", "A Vancouveri Nemzetközi Filmfesztivált először 1982-ben rendezték meg."],
      ro: ["Vancouver este al treilea cel mai mare centru de producție din America de Nord.", "Industria generează anual peste 3 miliarde de dolari pentru economia locală.", "Peste 60.000 de persoane sunt angajate direct sau indirect în sectorul filmului.", "Mammoth Studios are o suprafață totală de aproximativ 23.000 de metri pătrați.", "Columbia Britanică oferă scutiri de taxe de până la 35% pentru costurile cu forța de muncă.", "Festivalul Internațional de Film din Vancouver a fost fondat în anul 1982."],
      en: ["Vancouver is the third-largest film production center in North America after LA and NY.", "The industry generates more than $3 billion annually for the local economy.", "Over 60,000 people are directly or indirectly employed in the film sector.", "Mammoth Studios features soundstages covering approximately 23,000 square meters.", "British Columbia offers tax credits of up to 35% on qualified labor costs.", "The Vancouver International Film Festival was first established in 1982."],
    }, image: "/poi-images/ca-vancouver-film.webp"},
  {
    id: "ca-toronto-finance", "sights": {
      "de": [
            {
                  "name": "Old bus",
                  "text": "Ein alter Bus, der als Attraktion in Toronto ausgestellt ist.",
                  "category": "landmark",
                  "coords": [
                        -79.38458,
                        43.612845
                  ]
            },
            {
                  "name": "Canada's First Gay Pride (1971)",
                  "text": "Ruinen, die den Ort der ersten kanadischen Gay-Pride-Veranstaltung im Jahr 1971 in Toronto markieren.",
                  "category": "historical",
                  "coords": [
                        -79.391739,
                        43.616744
                  ]
            },
            {
                  "name": "William Meany Maze",
                  "text": "Das William Meany Maze ist ein Irrgarten in Toronto, benannt nach William Meany.",
                  "category": "landmark",
                  "coords": [
                        -79.374837,
                        43.617773
                  ]
            },
            {
                  "name": "Manitou Beach",
                  "text": "Manitou Beach ist ein Strand in Toronto.",
                  "category": "recreational",
                  "coords": [
                        -79.373993,
                        43.615834
                  ]
            },
            {
                  "name": "Gibraltar Point Beach",
                  "text": "Gibraltar Point Beach ist ein Strand am Gibraltar Point auf den Toronto Islands.",
                  "category": "recreational",
                  "coords": [
                        -79.38353,
                        43.612614
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Old bus",
                  "text": "Egy régi busz, amely látványosságként van kiállítva Torontóban.",
                  "category": "landmark",
                  "coords": [
                        -79.38458,
                        43.612845
                  ]
            },
            {
                  "name": "Canada's First Gay Pride (1971)",
                  "text": "Romok, amelyek a kanadai első meleg büszkeség esemény 1971-es helyszínét jelölik Torontóban.",
                  "category": "historical",
                  "coords": [
                        -79.391739,
                        43.616744
                  ]
            },
            {
                  "name": "William Meany Maze",
                  "text": "A William Meany Maze egy labirintus Torontóban, amely William Meanyről kapta a nevét.",
                  "category": "landmark",
                  "coords": [
                        -79.374837,
                        43.617773
                  ]
            },
            {
                  "name": "Manitou Beach",
                  "text": "A Manitou Beach egy strand Torontóban.",
                  "category": "recreational",
                  "coords": [
                        -79.373993,
                        43.615834
                  ]
            },
            {
                  "name": "Gibraltar Point Beach",
                  "text": "A Gibraltar Point Beach egy strand a Gibraltar Pointon, a Toronto-szigeteken.",
                  "category": "recreational",
                  "coords": [
                        -79.38353,
                        43.612614
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Old bus",
                  "text": "Un autobuz vechi expus ca atracție în Toronto.",
                  "category": "landmark",
                  "coords": [
                        -79.38458,
                        43.612845
                  ]
            },
            {
                  "name": "Canada's First Gay Pride (1971)",
                  "text": "Ruine care marchează locul primului eveniment gay pride din Canada în 1971, în Toronto.",
                  "category": "historical",
                  "coords": [
                        -79.391739,
                        43.616744
                  ]
            },
            {
                  "name": "William Meany Maze",
                  "text": "Labirintul William Meany este un labirint în Toronto, numit după William Meany.",
                  "category": "landmark",
                  "coords": [
                        -79.374837,
                        43.617773
                  ]
            },
            {
                  "name": "Manitou Beach",
                  "text": "Manitou Beach este o plajă în Toronto.",
                  "category": "recreational",
                  "coords": [
                        -79.373993,
                        43.615834
                  ]
            },
            {
                  "name": "Gibraltar Point Beach",
                  "text": "Gibraltar Point Beach este o plajă la Gibraltar Point pe insulele Toronto.",
                  "category": "recreational",
                  "coords": [
                        -79.38353,
                        43.612614
                  ]
            }
      ],
      "en": [
            {
                  "name": "Old bus",
                  "text": "An old bus displayed as an attraction in Toronto.",
                  "category": "landmark",
                  "coords": [
                        -79.38458,
                        43.612845
                  ]
            },
            {
                  "name": "Canada's First Gay Pride (1971)",
                  "text": "Ruins marking the location of Canada's first gay pride event in 1971 in Toronto.",
                  "category": "historical",
                  "coords": [
                        -79.391739,
                        43.616744
                  ]
            },
            {
                  "name": "William Meany Maze",
                  "text": "William Meany Maze is a maze attraction in Toronto named after William Meany.",
                  "category": "landmark",
                  "coords": [
                        -79.374837,
                        43.617773
                  ]
            },
            {
                  "name": "Manitou Beach",
                  "text": "Manitou Beach is a beach in Toronto.",
                  "category": "recreational",
                  "coords": [
                        -79.373993,
                        43.615834
                  ]
            },
            {
                  "name": "Gibraltar Point Beach",
                  "text": "Gibraltar Point Beach is a beach at Gibraltar Point on Toronto Islands.",
                  "category": "recreational",
                  "coords": [
                        -79.38353,
                        43.612614
                  ]
            }
      ]
},
    type: "industry",
    parent: "CA",
    coords: [-79.4, 43.6],
    name: { de: "Toronto Finanzviertel", hu: "Torontói pénzügyi negyed", ro: "Districtul financiar din Toronto", en: "Toronto Financial District" },
    description: { de: "Das wirtschaftliche Herz Kanadas.", hu: "Kanada gazdasági szíve.", ro: "Inima economică a Canadei.", en: "The economic heart of Canada." },
    descriptionAdvanced: {
      de: "Der Financial District von Toronto ist das wirtschaftliche Herz Kanadas und einer der bedeutendsten Finanzplätze weltweit. Er erstreckt sich rund um die Bay Street und beherbergt die Hauptquartiere der fünf größten kanadischen Banken (Big Five) sowie zahlreiche Versicherungsgesellschaften und Investmentfirmen. Die Architektur des Viertels ist geprägt von imposanten Wolkenkratzern wie dem First Canadian Place, dem höchsten Gebäude Kanadas, und dem Scotia Plaza. Hier befindet sich auch die Toronto Stock Exchange (TSX), die nach Marktkapitalisierung zu den größten Börsen der Welt zählt. Unterhalb der Straßen verläuft das PATH-System, das weltweit größte unterirdische Tunnelnetzwerk, das Bürogebäude, Einkaufszentren und Verkehrsknotenpunkte miteinander verbindet. Der Distrikt ist nicht nur ein Ort des Handels, sondern auch ein Symbol für die Stabilität und das Wachstum der kanadischen Wirtschaft. Täglich pendeln hunderttausende Angestellte in dieses Viertel, was eine hochmoderne Verkehrsinfrastruktur erfordert. Historisch entwickelte sich das Gebiet aus dem alten Kern der Stadt und spiegelt den Wandel Torontos von einem regionalen Handelsplatz zu einer globalen Metropole wider. Die Dichte an Fachwissen und Kapital macht den Standort zu einem Magneten für internationale Investoren.",
      hu: "Toronto pénzügyi negyede Kanada gazdasági motorja és a világ egyik meghatározó pénzügyi központja. A negyed a Bay Street köré összpontosul, és itt találhatók az öt legnagyobb kanadai bank (a „Big Five”), valamint számos biztosítótársaság és befektetési alap központjai. A terület látképét monumentális felhőkarcolók uralják, köztük a First Canadian Place, amely Kanada legmagasabb épülete, és a Scotia Plaza. Itt működik a Torontói Értéktőzsde (TSX) is, amely piaci kapitalizációja alapján a világ legnagyobb tőzsdéi közé tartozik. Az utcák alatt húzódik a PATH rendszer, a világ legnagyobb föld alatti alagúthálózata, amely közvetlen összeköttetést biztosít az irodaházak, bevásárlóközpontok és közlekedési csomópontok között. A negyed nem csupán a kereskedelem helyszíne, hanem Kanada gazdasági stabilitásának és növekedésének szimbóluma is. Naponta több százezer munkavállaló érkezik a területre, ami rendkívül fejlett közlekedési infrastruktúrát igényel. A negyed történelmileg a város régi magvából alakult ki, és jól tükrözi Toronto átalakulását regionális kereskedelmi központból globális világvárossá. A tőke és a szaktudás magas koncentrációja folyamatosan vonzza a nemzetközi befektetőket.",
      ro: "Districtul Financiar din Toronto este inima economică a Canadei și unul dintre cele mai importante centre financiare de pe glob. Concentrat în jurul străzii Bay Street, districtul găzduiește sediile celor mai mari cinci bănci canadiene (Big Five), precum și numeroase companii de asigurări și firme de investiții. Arhitectura zonei este dominată de zgârie-nori impozanți, inclusiv First Canadian Place, cea mai înaltă clădire din Canada, și Scotia Plaza. Tot aici se află Bursa de Valori din Toronto (TSX), care se clasează printre cele mai mari burse din lume după capitalizarea de piață. Sub nivelul străzii se întinde sistemul PATH, cea mai mare rețea subterană de tuneluri pietonale din lume, care conectează clădirile de birouri, centrele comerciale și hub-urile de transport. Districtul nu este doar un loc al tranzacțiilor, ci și un simbol al stabilității și creșterii economiei canadiene. Zilnic, sute de mii de angajați fac naveta în această zonă, ceea ce a necesitat o infrastructură de transport ultra-modernă. Istoric, districtul s-a dezvoltat din nucleul vechi al orașului, reflectând transformarea Torontoului dintr-un centru comercial regional într-o metropolă globală. Densitatea de capital și expertiză atrage constant investitori internaționali.",
      en: "Toronto's Financial District is the economic heart of Canada and one of the most prominent financial hubs in the world. Centered around Bay Street, the district houses the corporate headquarters of the nation's five largest banks (the Big Five), along with major insurance companies and investment firms. The skyline is defined by towering skyscrapers, including First Canadian Place, the tallest building in Canada, and the Scotia Plaza. It is also home to the Toronto Stock Exchange (TSX), which ranks among the world's largest stock exchanges by market capitalization. Below the surface lies the PATH system, the world's largest underground pedestrian tunnel network, connecting office towers, shopping centers, and transit hubs. The district serves not only as a trading center but also as a symbol of Canada's financial stability and growth. Hundreds of thousands of workers commute to the area daily, supported by a sophisticated transportation infrastructure. Historically, the district evolved from the city's early commercial core, mirroring Toronto's rise from a regional hub to a global metropolis. The high concentration of capital and professional expertise makes it a magnet for international investment.",
    },
    factsAdvanced: {
      de: ["Die Toronto Stock Exchange (TSX) wurde offiziell im Jahr 1861 gegründet.", "Der First Canadian Place ist mit 298 Metern das höchste Bürogebäude Kanadas.", "Das PATH-System umfasst mehr als 30 Kilometer an unterirdischen Gehwegen.", "Über 200.000 Menschen arbeiten täglich im Financial District von Toronto.", "Die 'Big Five' Banken kontrollieren den Großteil des kanadischen Bankenmarktes.", "Das Viertel beherbergt die höchste Dichte an Wolkenkratzern in ganz Kanada."],
      hu: ["A Torontói Értéktőzsdét (TSX) hivatalosan 1861-ben alapították.", "A First Canadian Place 298 méteres magasságával Kanada legmagasabb irodaháza.", "A PATH rendszer több mint 30 kilométernyi föld alatti sétányt foglal magában.", "Naponta több mint 200 000 ember dolgozik a pénzügyi negyed területén.", "A 'Big Five' bankok kezelik a kanadai banki eszközök túlnyomó részét.", "Ebben a negyedben található a felhőkarcolók legnagyobb sűrűsége Kanadában."],
      ro: ["Bursa de Valori din Toronto (TSX) a fost fondată oficial în anul 1861.", "First Canadian Place este cea mai înaltă clădire de birouri din Canada, având 298 m.", "Sistemul PATH cuprinde peste 30 de kilometri de pasaje pietonale subterane.", "Peste 200.000 de persoane lucrează zilnic în Districtul Financiar din Toronto.", "Cele mai mari cinci bănci (Big Five) controlează majoritatea pieței bancare locale.", "Zona deține cea mai mare concentrație de zgârie-nori din întreaga Canadă."],
      en: ["The Toronto Stock Exchange (TSX) was officially established in 1861.", "First Canadian Place stands at 298 meters, making it Canada's tallest office building.", "The PATH system features over 30 kilometers of underground pedestrian walkways.", "More than 200,000 workers commute to the Financial District every day.", "The 'Big Five' banks control the vast majority of the Canadian banking market.", "The district contains the highest density of skyscrapers in the entire country."],
    }, image: "/poi-images/ca-toronto-finance.webp"},
  {
    id: "ca-port-vancouver",
    type: "port",
    parent: "CA",
    coords: [-123.1, 49.3],
    name: { de: "Hafen von Vancouver", hu: "Vancouveri kikötő", ro: "Portul din Vancouver", en: "Port of Vancouver" },
    description: { de: "Kanadas größter und wichtigster Hafen am Pazifik.", hu: "Kanada legnagyobb és legfontosabb kikötője a Csendes-óceánon.", ro: "Cel mai mare și mai important port al Canadei la Pacific.", en: "Canada's largest and most important port on the Pacific." },
    descriptionAdvanced: {
      de: "Der Hafen von Vancouver ist der größte und geschäftigste Seehafen Kanadas und fungiert als primäres Tor für den Handel zwischen Nordamerika und dem asiatisch-pazifischen Raum. Strategisch an der Südwestküste von British Columbia gelegen, erstreckt sich das Hafengebiet über mehr als 16.000 Hektar Wasserfläche und Hunderte von Kilometern Küstenlinie. Der Hafen wird von der Vancouver Fraser Port Authority verwaltet und umfasst 27 Tiefseeterminals, die auf Container, Schüttgut, Stückgut und Automobile spezialisiert sind. Jährlich werden hier Waren im Wert von rund 240 Milliarden Dollar umgeschlagen, was den Hafen zu einem kritischen Pfeiler der kanadischen Volkswirtschaft macht. Neben dem Güterverkehr ist Vancouver auch ein weltweit führender Abfahrtshafen für Kreuzfahrtschiffe, insbesondere für Routen nach Alaska. Die Infrastruktur ist eng mit den großen kanadischen Eisenbahnnetzen (CN und CPKC) verknüpft, was einen effizienten Transport ins Landesinnere ermöglicht. Umwelt- und Nachhaltigkeitsprogramme, wie das ECHO-Programm zum Schutz von Meeressäugern, sind fester Bestandteil des Hafenbetriebs. Die kontinuierliche Erweiterung der Terminalkapazitäten, wie das Roberts Bank Terminal 2 Projekt, sichert die zukünftige Wettbewerbsfähigkeit im globalen Seehandel.",
      hu: "Vancouver kikötője Kanada legnagyobb és legforgalmasabb tengeri kikötője, amely Észak-Amerika és az ázsiai-csendes-óceáni térség közötti kereskedelem elsődleges kapujaként szolgál. Brit Columbia délnyugati partján fekszik, és több mint 16 000 hektárnyi vízfelületet, valamint több száz kilométernyi partvonalat foglal magában. A kikötőt a Vancouver Fraser Port Authority kezeli, és 27 mélyvízi terminállal rendelkezik, amelyek konténerekre, ömlesztett árura, gépjárművekre és egyéb rakományokra specializálódtak. Évente körülbelül 240 milliárd dollár értékű áru halad át a létesítményen, ami a kanadai gazdaság egyik legfontosabb tartóoszlopává teszi. Az áruszállítás mellett Vancouver világszerte elismert luxushajó-kikötő is, különösen az alaszkai körutazások kiindulópontjaként. A kikötői infrastruktúra szorosan kapcsolódik Kanada fő vasútvonalaihoz (CN és CPKC), biztosítva a hatékony logisztikát a kontinens belseje felé. A fenntarthatósági kezdeményezések, például a tengeri élővilág védelmét szolgáló ECHO-program, kiemelt szerepet kapnak a napi működésben. A folyamatban lévő fejlesztések, mint a Roberts Bank Terminal 2 projekt, a kikötő hosszú távú versenyképességét hivatottak garantálni a világkereskedelemben.",
      ro: "Portul Vancouver este cel mai mare și cel mai aglomerat port maritim din Canada, servind drept poartă principală pentru comerțul dintre America de Nord și regiunea Asia-Pacific. Situat strategic pe coasta de sud-vest a Columbiei Britanice, portul administrează peste 16.000 de hectare de luciu de apă și sute de kilometri de țărm. Administrat de Autoritatea Portuară Vancouver Fraser, acesta include 27 de terminale de mare adâncime specializate în containere, mărfuri în vrac, automobile și mărfuri generale. Anual, portul procesează bunuri în valoare de aproximativ 240 de miliarde de dolari, fiind un pilon critic al economiei naționale canadiene. Pe lângă traficul de marfă, Vancouver este un centru global de top pentru navele de croazieră, fiind punctul principal de plecare pentru rutele spre Alaska. Infrastructura portuară este integrată cu marile rețele feroviare canadiene (CN și CPKC), facilitând transportul eficient spre interiorul continentului. Programele de sustenabilitate, precum inițiativa ECHO pentru protecția mamiferelor marine, sunt esențiale pentru operațiunile portuare moderne. Extinderea continuă a capacităților, prin proiecte precum Roberts Bank Terminal 2, asigură competitivitatea pe termen lung în comerțul maritim global.",
      en: "The Port of Vancouver is Canada's largest and busiest seaport, serving as the primary gateway for trade between North America and the Asia-Pacific region. Strategically located on the southwest coast of British Columbia, the port manages over 16,000 hectares of water and hundreds of kilometers of shoreline. Operated by the Vancouver Fraser Port Authority, it features 27 deep-sea terminals specialized in containers, bulk cargo, breakbulk, and automobiles. The port facilitates the movement of approximately $240 billion worth of goods annually, making it a critical pillar of the Canadian national economy. Beyond freight, Vancouver is a premier global cruise destination, acting as the main homeport for the popular Alaska cruise industry. The port's infrastructure is tightly integrated with Canada's major rail networks (CN and CPKC), ensuring efficient logistics across the continent. Sustainability efforts, such as the ECHO Program for marine mammal protection, are integral to its modern operations. Continued expansion projects, including the Roberts Bank Terminal 2, are designed to maintain the port's competitive edge in the evolving global maritime landscape.",
    },
    factsAdvanced: {
      de: ["Der Hafen von Vancouver ist flächenmäßig der größte Hafen Kanadas.", "Er wickelt jährlich etwa 140 bis 150 Millionen Tonnen Fracht ab.", "Insgesamt sind 27 spezialisierte Tiefseeterminals in Betrieb.", "Der Hafen unterstützt direkt und indirekt etwa 115.000 Arbeitsplätze in Kanada.", "Die Vancouver Fraser Port Authority wurde im Jahr 2008 durch eine Fusion gegründet.", "Das Canada Place Terminal fertigt jährlich über eine Million Kreuzfahrtpassagiere ab."],
      hu: ["Területét tekintve Vancouver kikötője a legnagyobb egész Kanadában.", "Évente körülbelül 140-150 millió tonna árut mozgatnak meg a kikötőben.", "Összesen 27 specializált mélyvízi terminál üzemel a területén.", "A kikötő közvetve és közvetlenül mintegy 115 000 munkahelyet támogat Kanadában.", "A Vancouver Fraser Port Authority 2008-ban jött létre több szervezet egyesülésével.", "A Canada Place terminál évente több mint egymillió luxushajó-utast fogad."],
      ro: ["Portul Vancouver este cel mai mare port din Canada ca suprafață administrată.", "Acesta gestionează anual între 140 și 150 de milioane de tone de marfă.", "În cadrul portului funcționează 27 de terminale maritime de mare adâncime.", "Activitatea portuară susține aproximativ 115.000 de locuri de muncă în Canada.", "Autoritatea Portuară Vancouver Fraser a fost înființată prin fuziune în 2008.", "Terminalul Canada Place procesează anual peste un milion de pasageri de croazieră."],
      en: ["The Port of Vancouver is the largest port in Canada by total land and water area.", "It handles between 140 and 150 million tonnes of cargo every year.", "The port operates a total of 27 specialized deep-sea marine terminals.", "Port operations support approximately 115,000 jobs across Canada.", "The Vancouver Fraser Port Authority was created through a merger in 2008.", "The Canada Place terminal welcomes over one million cruise passengers annually."],
    }, image: "/poi-images/ca-port-vancouver.webp"},
  {
    id: "ca-port-halifax", "sights": {
      "de": [
            {
                  "name": "York Redoubt",
                  "text": "York Redoubt ist eine historische Festung in Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.553976,
                        44.596271
                  ]
            },
            {
                  "name": "Halifax Harbour",
                  "text": "Der natürliche Hafen von Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.52249,
                        44.582479
                  ]
            },
            {
                  "name": "Shaw Wilderness Park",
                  "text": "Ein Wildnispark in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.589818,
                        44.615175
                  ]
            },
            {
                  "name": "Long Pond Beach",
                  "text": "Ein Strand in Halifax.",
                  "category": "recreational",
                  "coords": [
                        -63.575276,
                        44.575883
                  ]
            },
            {
                  "name": "Sandwish Point Battery",
                  "text": "Ruinen einer historischen Batterie in Halifax.",
                  "category": "historical",
                  "coords": [
                        -63.550316,
                        44.587828
                  ]
            },
            {
                  "name": "Purcells Cove",
                  "text": "Eine Bucht in Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.570393,
                        44.611292
                  ]
            },
            {
                  "name": "Connaught Battery Park",
                  "text": "Der Connaught Battery Park ist ein historischer Küstenbatteriepark in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.561757,
                        44.604371
                  ]
            },
            {
                  "name": "Cunard Beach",
                  "text": "Ein Strand in Halifax.",
                  "category": "recreational",
                  "coords": [
                        -63.601621,
                        44.620944
                  ]
            },
            {
                  "name": "Graves-Oakley Memorial Park",
                  "text": "Ein Gedenkpark in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.628685,
                        44.598734
                  ]
            },
            {
                  "name": "Long Lake Provincial Park",
                  "text": "Ein Provinzpark in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.654139,
                        44.600547
                  ]
            }
      ],
      "hu": [
            {
                  "name": "York Redoubt",
                  "text": "A York Redoubt egy történelmi erődítmény Halifaxban.",
                  "category": "landmark",
                  "coords": [
                        -63.553976,
                        44.596271
                  ]
            },
            {
                  "name": "Halifax Harbour",
                  "text": "Halifax természetes kikötője.",
                  "category": "landmark",
                  "coords": [
                        -63.52249,
                        44.582479
                  ]
            },
            {
                  "name": "Shaw Wilderness Park",
                  "text": "Egy vadon park Halifaxban.",
                  "category": "park",
                  "coords": [
                        -63.589818,
                        44.615175
                  ]
            },
            {
                  "name": "Long Pond Beach",
                  "text": "Egy strand Halifaxban.",
                  "category": "recreational",
                  "coords": [
                        -63.575276,
                        44.575883
                  ]
            },
            {
                  "name": "Sandwish Point Battery",
                  "text": "Egy történelmi üteg romjai Halifaxban.",
                  "category": "historical",
                  "coords": [
                        -63.550316,
                        44.587828
                  ]
            },
            {
                  "name": "Purcells Cove",
                  "text": "Egy öböl Halifaxban.",
                  "category": "landmark",
                  "coords": [
                        -63.570393,
                        44.611292
                  ]
            },
            {
                  "name": "Connaught Battery Park",
                  "text": "A Connaught Battery Park egy történelmi partvédelmi ütegpark Halifaxban.",
                  "category": "park",
                  "coords": [
                        -63.561757,
                        44.604371
                  ]
            },
            {
                  "name": "Cunard Beach",
                  "text": "Egy strand Halifaxban.",
                  "category": "recreational",
                  "coords": [
                        -63.601621,
                        44.620944
                  ]
            },
            {
                  "name": "Graves-Oakley Memorial Park",
                  "text": "Egy emlékpark Halifaxban.",
                  "category": "park",
                  "coords": [
                        -63.628685,
                        44.598734
                  ]
            },
            {
                  "name": "Long Lake Provincial Park",
                  "text": "Egy tartományi park Halifaxban.",
                  "category": "park",
                  "coords": [
                        -63.654139,
                        44.600547
                  ]
            }
      ],
      "ro": [
            {
                  "name": "York Redoubt",
                  "text": "York Redoubt este o fortificație istorică în Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.553976,
                        44.596271
                  ]
            },
            {
                  "name": "Halifax Harbour",
                  "text": "Portul natural al Halifaxului.",
                  "category": "landmark",
                  "coords": [
                        -63.52249,
                        44.582479
                  ]
            },
            {
                  "name": "Shaw Wilderness Park",
                  "text": "Un parc sălbatic în Halifax.",
                  "category": "park",
                  "coords": [
                        -63.589818,
                        44.615175
                  ]
            },
            {
                  "name": "Long Pond Beach",
                  "text": "O plajă în Halifax.",
                  "category": "recreational",
                  "coords": [
                        -63.575276,
                        44.575883
                  ]
            },
            {
                  "name": "Sandwish Point Battery",
                  "text": "Ruinele unei baterii istorice în Halifax.",
                  "category": "historical",
                  "coords": [
                        -63.550316,
                        44.587828
                  ]
            },
            {
                  "name": "Purcells Cove",
                  "text": "Un golf în Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.570393,
                        44.611292
                  ]
            },
            {
                  "name": "Connaught Battery Park",
                  "text": "Parcul Connaught Battery este un parc istoric de baterie de coastă în Halifax.",
                  "category": "park",
                  "coords": [
                        -63.561757,
                        44.604371
                  ]
            },
            {
                  "name": "Cunard Beach",
                  "text": "O plajă în Halifax.",
                  "category": "recreational",
                  "coords": [
                        -63.601621,
                        44.620944
                  ]
            },
            {
                  "name": "Graves-Oakley Memorial Park",
                  "text": "Un parc memorial în Halifax.",
                  "category": "park",
                  "coords": [
                        -63.628685,
                        44.598734
                  ]
            },
            {
                  "name": "Long Lake Provincial Park",
                  "text": "Un parc provincial în Halifax.",
                  "category": "park",
                  "coords": [
                        -63.654139,
                        44.600547
                  ]
            }
      ],
      "en": [
            {
                  "name": "York Redoubt",
                  "text": "York Redoubt is a historic fortification in Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.553976,
                        44.596271
                  ]
            },
            {
                  "name": "Halifax Harbour",
                  "text": "The natural harbour of Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.52249,
                        44.582479
                  ]
            },
            {
                  "name": "Shaw Wilderness Park",
                  "text": "A wilderness park in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.589818,
                        44.615175
                  ]
            },
            {
                  "name": "Long Pond Beach",
                  "text": "A beach in Halifax.",
                  "category": "recreational",
                  "coords": [
                        -63.575276,
                        44.575883
                  ]
            },
            {
                  "name": "Sandwish Point Battery",
                  "text": "Ruins of a historic battery in Halifax.",
                  "category": "historical",
                  "coords": [
                        -63.550316,
                        44.587828
                  ]
            },
            {
                  "name": "Purcells Cove",
                  "text": "A cove in Halifax.",
                  "category": "landmark",
                  "coords": [
                        -63.570393,
                        44.611292
                  ]
            },
            {
                  "name": "Connaught Battery Park",
                  "text": "Connaught Battery Park is a historic coastal battery park in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.561757,
                        44.604371
                  ]
            },
            {
                  "name": "Cunard Beach",
                  "text": "A beach in Halifax.",
                  "category": "recreational",
                  "coords": [
                        -63.601621,
                        44.620944
                  ]
            },
            {
                  "name": "Graves-Oakley Memorial Park",
                  "text": "A memorial park in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.628685,
                        44.598734
                  ]
            },
            {
                  "name": "Long Lake Provincial Park",
                  "text": "A provincial park in Halifax.",
                  "category": "park",
                  "coords": [
                        -63.654139,
                        44.600547
                  ]
            }
      ]
},
    type: "port",
    parent: "CA",
    coords: [-63.6, 44.6],
    name: { de: "Hafen von Halifax", hu: "Halifaxi kikötő", ro: "Portul din Halifax", en: "Port of Halifax" },
    description: { de: "Strategisch wichtiger Tiefwasserhafen am Atlantik.", hu: "Stratégiailag fontos mélyvízi kikötő az Atlanti-óceánon.", ro: "Port strategic de apă adâncă la Atlantic.", en: "Strategically important deep-water port on the Atlantic." , es: "Puerto de aguas profundas estratégicamente importante en el Atlántico.", pt: "Porto de águas profundas estrategicamente importante no Atlântico.", fr: "Port en eau profonde d'importance stratégique sur l'Atlantique."},
    descriptionAdvanced: {
      de: "Der Hafen von Halifax in Nova Scotia ist einer der strategisch wichtigsten Seehäfen an der nordamerikanischen Ostküste und der tiefste eisfreie Hafen in der Region. Seine geografische Lage macht ihn zum ersten Anlaufpunkt für Schiffe aus Europa und dem Mittelmeerraum, die über den Atlantik kommen. Der Hafen wird von der Halifax Port Authority verwaltet und verfügt über hochmoderne Containerterminals wie South End (PSA Halifax) und Fairview Cove. Neben dem Containerumschlag ist der Hafen ein bedeutender Stützpunkt für den Export von Automobilen, Forstprodukten und Stahl. Ein wesentlicher Teil der Hafenaktivitäten entfällt auf den Sektor der Kreuzschifffahrt, wobei Halifax ein beliebter Stopp auf Neuengland- und Kanada-Routen ist. Historisch spielte der Hafen eine entscheidende Rolle in beiden Weltkriegen als Sammelpunkt für Konvois und ist heute die Heimatbasis der Atlantic Fleet der Royal Canadian Navy. Die tiefe Fahrrinne ermöglicht es auch den größten Containerschiffen der Welt, den Hafen ohne Gezeitenbeschränkungen anzulaufen. In den letzten Jahren wurden massive Investitionen in die Digitalisierung und die Erweiterung der Kailängen getätigt, um die Effizienz zu steigern. Der Hafen ist zudem ein wichtiger Knotenpunkt für den Schienengüterverkehr von CN Rail in das Landesinnere Nordamerikas.",
      hu: "Halifax kikötője Új-Skóciában az észak-amerikai keleti part egyik stratégiailag legfontosabb tengeri csomópontja, és a régió legmélyebb jégmentes kikötője. Földrajzi fekvése révén ez az első megálló az Európából és a földközi-tengeri térségből érkező, Atlanti-óceánt átszelő hajók számára. A kikötőt a Halifax Port Authority kezeli, és olyan modern konténerterminálokkal rendelkezik, mint a South End (PSA Halifax) és a Fairview Cove. A konténerforgalom mellett a kikötő jelentős szerepet játszik a gépjárművek, erdészeti termékek és acél exportjában is. A luxushajó-ipar szintén meghatározó, Halifax az egyik legnépszerűbb megállóhely az új-angliai és kanadai hajóutak során. Történelmileg a kikötő kulcsszerepet játszott mindkét világháborúban konvojgyűjtő pontként, ma pedig a Kanadai Királyi Haditengerészet atlanti flottájának bázisa. A vízmélység lehetővé teszi, hogy a világ legnagyobb konténerszállító hajói árapály-korlátozás nélkül kössenek ki itt. Az elmúlt években jelentős beruházások történtek a digitalizáció és a rakpartok meghosszabbítása terén a hatékonyság növelése érdekében. A kikötő fontos vasúti összeköttetéssel is bír a CN Rail hálózatán keresztül Észak-Amerika belseje felé.",
      ro: "Portul Halifax din Nova Scotia este unul dintre cele mai importante hub-uri maritime de pe coasta de est a Americii de Nord și cel mai adânc port fără gheață din regiune. Poziția sa geografică îl face primul punct de escală pentru navele care traversează Atlanticul dinspre Europa și zona mediteraneană. Administrat de Autoritatea Portuară Halifax, acesta dispune de terminale de containere moderne, precum South End (PSA Halifax) și Fairview Cove. Pe lângă containere, portul este un centru major pentru exportul de automobile, produse forestiere și oțel. Sectorul croazierelor este de asemenea vital, Halifax fiind o oprire populară pe rutele dintre Noua Anglie și Canada. Istoric, portul a jucat un rol crucial în ambele războaie mondiale ca punct de adunare pentru convoaie, iar astăzi este baza Flotei Atlantice a Marinei Regale Canadiene. Adâncimea naturală a canalului permite celor mai mari nave de containere din lume să acosteze fără restricții de maree. În ultimii ani, s-au realizat investiții masive în digitalizare și extinderea cheiurilor pentru a crește eficiența operațională. Portul beneficiază de o conexiune feroviară directă prin CN Rail, facilitând transportul mărfurilor către interiorul continentului.",
      en: "The Port of Halifax in Nova Scotia is one of the most strategically significant maritime hubs on the North American East Coast and the deepest ice-free port in the region. Its geographical position makes it the first port of call for vessels crossing the Atlantic from Europe and the Mediterranean. Managed by the Halifax Port Authority, it features state-of-the-art container terminals such as South End (PSA Halifax) and Fairview Cove. Beyond containerized cargo, the port is a major center for the export of automobiles, forest products, and steel. The cruise industry is another vital sector, with Halifax serving as a premier destination on New England and Canada itineraries. Historically, the port played a critical role in both World Wars as a primary assembly point for trans-Atlantic convoys and currently serves as the home base for the Royal Canadian Navy's Atlantic Fleet. The natural deep water allows even the largest container ships in the world to dock without tidal restrictions. Recent investments have focused on digitization and pier expansions to enhance operational efficiency. The port is seamlessly connected to the interior of North America via CN Rail's extensive network.",
    },
    factsAdvanced: {
      de: ["Halifax ist einer der weltweit größten natürlichen Häfen.", "Der Hafen fertigt jährlich rund 1.500 Schiffe aller Art ab.", "Das PSA Halifax Terminal kann Schiffe mit über 16.000 TEU Kapazität aufnehmen.", "Die Hafenaktivitäten tragen jährlich über 4,4 Milliarden Dollar zur Wirtschaft bei.", "Halifax war 1917 Schauplatz der größten von Menschen verursachten Explosion vor Hiroshima.", "Über 300.000 Kreuzfahrtpassagiere besuchen den Hafen in einer typischen Saison."],
      hu: ["Halifax a világ egyik legnagyobb természetes kikötőjével rendelkezik.", "A kikötő évente körülbelül 1500 különböző típusú hajót fogad.", "A PSA Halifax terminál képes fogadni a 16 000 TEU-nál nagyobb hajókat is.", "A kikötői tevékenység évente több mint 4,4 milliárd dollárral járul hozzá a gazdasághoz.", "1917-ben itt történt a Hirosima előtti legnagyobb ember okozta robbanás.", "Egy átlagos szezonban több mint 300 000 luxushajó-utas látogatja meg a várost."],
      ro: ["Halifax deține unul dintre cele mai mari porturi naturale din lume.", "Portul primește anual aproximativ 1.500 de nave de diverse tipuri.", "Terminalul PSA Halifax poate opera nave cu o capacitate de peste 16.000 TEU.", "Activitățile portuare contribuie anual cu peste 4,4 miliarde de dolari la economie.", "În 1917, portul a fost scena celei mai mari explozii accidentale înainte de Hiroshima.", "Peste 300.000 de pasageri de croazieră vizitează portul într-un sezon obișnuit."],
      en: ["Halifax features one of the world's largest natural harbors.", "The port accommodates approximately 1,500 vessels of various types annually.", "The PSA Halifax terminal can handle ultra-large container ships over 16,000 TEU.", "Port operations contribute over $4.4 billion in annual economic impact.", "In 1917, Halifax was the site of the largest man-made explosion prior to Hiroshima.", "More than 300,000 cruise ship passengers visit the port in a typical season."],
      es: [],
      pt: [],
      fr: [],
    }, image: "/poi-images/ca-port-halifax.webp"},
  {
    id: "ca-baffin-island",
    type: "island",
    parent: "CA",
    coords: [-70.0, 69.0],
    name: { de: "Baffininsel", hu: "Baffin-sziget", ro: "Insula Baffin", en: "Baffin Island" },
    description: { de: "Größte Insel Kanadas in der Arktis.", hu: "Kanada legnagyobb szigete az Északi-sarkvidéken.", ro: "Cea mai mare insulă din Canada, situată în zona arctică.", en: "Canada's largest island, located in the Arctic." , es: "La isla más grande de Canadá en el Ártico.", pt: "A maior ilha do Canadá no Ártico.", fr: "La plus grande île du Canada dans l'Arctique."},
    descriptionAdvanced: {
      de: "Baffin Island im Territorium Nunavut ist die größte Insel Kanadas und die fünftgrößte Insel der Welt. Sie liegt im Arktischen Archipel und ist geprägt von einer extremen Wildnis aus Gletschern, Fjorden und schroffen Gebirgszügen wie den Baffin Mountains. Die Insel beherbergt den Auyuittuq-Nationalpark, der für seine dramatischen Gipfel wie den Mount Thor und den Mount Asgard bekannt ist. Die Bevölkerung besteht überwiegend aus Inuit, die in kleinen Siedlungen wie der Hauptstadt Iqaluit leben und eine tiefe kulturelle Verbindung zum Land und zum Meer pflegen. Die Tierwelt ist arktisch geprägt, mit Eisbären, Narwalen, Belugas und großen Karibuherden, die in dieser rauen Umgebung überleben. Geologisch besteht Baffin Island hauptsächlich aus präkambrischem Gestein des Kanadischen Schildes. Die Insel spielt eine wichtige Rolle in der arktischen Forschung, insbesondere im Hinblick auf den Klimawandel und den Rückzug der Eiskappen wie dem Penny Ice Cap. Wirtschaftlich sind der Bergbau, insbesondere die Mary River Eisenminie, sowie der Ökotourismus und das traditionelle Handwerk von Bedeutung. Die Erreichbarkeit ist fast ausschließlich auf den Luftweg beschränkt, was die Isolation und den Erhalt der ursprünglichen Natur fördert.",
      hu: "A Nunavut területén található Baffin-sziget Kanada legnagyobb, a világ ötödik legnagyobb szigete. Az Arktikus-szigetcsoport részét képező területet gleccserek, mély fjordok és a Baffin-hegység meredek vonulatai jellemzik. Itt található az Auyuittuq Nemzeti Park, amely olyan drámai hegycsúcsairól híres, mint a Mount Thor és a Mount Asgard. A sziget lakossága túlnyomórészt inuitokból áll, akik olyan településeken élnek, mint a főváros, Iqaluit, és szoros kulturális kapcsolatot ápolnak a zord természeti környezettel. Az állatvilág rendkívül gazdag arktikus fajokban: jegesmedvék, narválok, belugák és hatalmas rénszarvascsordák népesítik be a szigetet. Geológiailag a sziget főként a Kanadai-pajzs prekambriumi kőzeteiből épül fel. Baffin-sziget kulcsszerepet játszik az arktikus kutatásokban, különösen a klímaváltozás és a jégsapkák, például a Penny-jégsapka olvadásának vizsgálatában. Gazdasági szempontból a bányászat, főleg a Mary River vasércbánya, valamint az ökoturizmus és a hagyományos művészetek jelentősek. A sziget szinte kizárólag légi úton érhető el, ami hozzájárul elszigeteltségéhez és érintetlen természetének megőrzéséhez.",
      ro: "Insula Baffin, situată în teritoriul Nunavut, este cea mai mare insulă din Canada și a cincea ca mărime din lume. Face parte din Arhipelagul Arctic și se caracterizează printr-un peisaj sălbatic extrem, dominat de ghețari, fiorduri adânci și lanțuri muntoase spectaculoase, precum Munții Baffin. Insula găzduiește Parcul Național Auyuittuq, faimos pentru vârfuri dramatice precum Mount Thor și Mount Asgard. Populația este formată majoritar din inuiți, care locuiesc în așezări mici, precum capitala Iqaluit, păstrând o legătură culturală profundă cu pământul și marea. Fauna este tipic arctică, incluzând urși polari, narvali, beluga și turme mari de caribu care supraviețuiesc în acest mediu ostil. Din punct de vedere geologic, insula este compusă în principal din roci precambriene aparținând Scutului Canadian. Insula Baffin joacă un rol esențial în cercetarea arctică, în special în studiul schimbărilor climatice și al retragerii calotelor glaciare, cum este Penny Ice Cap. Economic, sectorul minier, în special mina de fier Mary River, împreună cu ecoturismul și arta tradițională, reprezintă principalele surse de venit. Accesibilitatea este limitată aproape exclusiv la transportul aerian, ceea ce subliniază izolarea și conservarea naturii virgine.",
      en: "Baffin Island, located in the territory of Nunavut, is Canada's largest island and the fifth largest in the world. Situated within the Arctic Archipelago, it is defined by an extreme wilderness of glaciers, deep fjords, and the rugged Baffin Mountains. The island is home to Auyuittuq National Park, renowned for its dramatic peaks such as Mount Thor and Mount Asgard. The population is predominantly Inuit, residing in small settlements like the capital city of Iqaluit, maintaining deep cultural ties to the land and sea. The wildlife is distinctly Arctic, with polar bears, narwhals, belugas, and large caribou herds surviving in the harsh environment. Geologically, Baffin Island consists mainly of Precambrian rock from the Canadian Shield. The island plays a vital role in Arctic research, particularly concerning climate change and the recession of ice caps like the Penny Ice Cap. Economically, mining—most notably the Mary River iron mine—alongside ecotourism and traditional arts are significant. Accessibility is almost entirely restricted to air travel, which enhances its isolation and the preservation of its pristine natural state.",
      es: "La isla de Baffin es la isla más grande de Canadá y la quinta más grande del mundo, caracterizada por un espectacular paisaje ártico con profundos fiordos y enormes glaciares. Es un centro de la cultura inuit y alberga el Parque Nacional Auyuittuq con sus prominentes picos de granito.",
      pt: "A Ilha de Baffin é a maior ilha do Canadá e a quinta maior do mundo, caracterizada por uma paisagem ártica espetacular com fiordes profundos e glaciares enormes. É um centro da cultura inuit e abriga o Parque Nacional Auyuittuq, com os seus picos de granito proeminentes.",
      fr: "L'île de Baffin est la plus grande île du Canada et la cinquième plus grande au monde, marquée par un paysage arctique spectaculaire avec des fjords profonds et d'immenses glaciers. Elle est un centre de la culture inuit et abrite le parc national d'Auyuittuq avec ses sommets de granit distinctifs.",
    },
    factsAdvanced: {
      de: ["Die Insel umfasst eine Fläche von insgesamt 507.451 Quadratkilometern.", "Der Mount Thor besitzt den weltweit längsten vertikalen Abfall von 1.250 Metern.", "Iqaluit wurde erst im Jahr 2001 offiziell zur Stadt ernannt.", "Die Insel wurde nach dem englischen Seefahrer William Baffin benannt.", "Etwa 13.000 Menschen leben dauerhaft auf der gesamten Insel.", "Die Mary River Mine exportiert hochwertiges Eisenerz über den Nordatlantik."],
      hu: ["A sziget teljes területe 507 451 négyzetkilométer.", "A Mount Thor rendelkezik a világ legnagyobb, 1250 méteres függőleges sziklafalaival.", "Iqaluit városát hivatalosan csak 2001-ben nyilvánították várossá.", "A szigetet William Baffin angol hajósról és felfedezőről nevezték el.", "Körülbelül 13 000 ember él állandó jelleggel a hatalmas szigeten.", "A Mary River bánya kiváló minőségű vasércet exportál az Észak-Atlanti-óceánon át."],
      ro: ["Insula are o suprafață totală de 507.451 de kilometri pătrați.", "Mount Thor are cea mai lungă cădere verticală din lume, de 1.250 de metri.", "Iqaluit a primit oficial statutul de oraș abia în anul 2001.", "Insula a fost numită după exploratorul englez William Baffin.", "Aproximativ 13.000 de oameni locuiesc permanent pe întreaga insulă.", "Mina Mary River exportă minereu de fier de înaltă calitate prin Atlanticul de Nord."],
      en: ["The island covers a total land area of 507,451 square kilometers.", "Mount Thor features the world's greatest vertical drop at 1,250 meters.", "Iqaluit was officially designated as a city as recently as 2001.", "The island is named after the English navigator and explorer William Baffin.", "Approximately 13,000 people live permanently across the entire island.", "The Mary River Mine exports high-grade iron ore across the North Atlantic."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Größte Insel Kanadas", "Fünftgrößte Insel der Welt", "Zentrum der Inuit-Kultur", "Auyuittuq-Nationalpark", "Heimat von Eisbären und Narwalen"], hu: ["Kanada legnagyobb szigete", "A világ 5. legnagyobb szigete", "Az inuit kultúra központja", "Auyuittuq Nemzeti Park", "Jegesmedvék és narválok élőhelye"], ro: ["Cea mai mare insulă din Canada", "A cincea insulă ca mărime din lume", "Centru al culturii inuite", "Parcul Național Auyuittuq", "Habitat pentru urși polari și narvali"], en: ["Canada's largest island", "Fifth largest island in the world", "Center of Inuit culture", "Home to Auyuittuq National Park", "Habitat for polar bears and narwhals"] , es: ["Isla más grande de Canadá", "Quinta isla más grande del mundo", "Centro de la cultura inuit", "Parque Nacional Auyuittuq", "Hogar de osos polares y narvales"], pt: ["Maior ilha do Canadá", "Quinta maior ilha do mundo", "Centro da cultura inuit", "Parque Nacional Auyuittuq", "Lar de ursos polares e narvais"], fr: ["Plus grande île du Canada", "Cinquième plus grande île au monde", "Centre de la culture inuit", "Parc national d'Auyuittuq", "Refuge pour les ours polaires et les narvals"]},
    area: 507451, elevation: 2147, image: "/poi-images/ca-baffin-island.webp"},
  {
    id: "ca-vancouver-island", "sights": {
      "de": [
            {
                  "name": "Mount Judson",
                  "text": "Mount Judson ist ein Gipfel auf Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -125.920505,
                        49.939718
                  ]
            },
            {
                  "name": "Horseshoe Mountain",
                  "text": "Horseshoe Mountain ist ein Gipfel auf Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -125.957979,
                        49.95607
                  ]
            },
            {
                  "name": "Tyee Mountain",
                  "text": "Tyee Mountain ist ein Gipfel auf Vancouver Island. Er ist der höchste Gipfel der Beaufort Range.",
                  "category": "natural",
                  "coords": [
                        -125.893659,
                        49.979263
                  ]
            },
            {
                  "name": "Victoria Peak",
                  "text": "Victoria Peak ist ein Gipfel auf Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -126.101067,
                        50.054529
                  ]
            },
            {
                  "name": "Warden Peak",
                  "text": "Warden Peak ist ein Gipfel auf Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -126.096031,
                        50.062176
                  ]
            },
            {
                  "name": "Queen Peak",
                  "text": "Queen Peak ist ein Gipfel auf Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -126.054261,
                        50.048688
                  ]
            },
            {
                  "name": "Stewart Lake Recreation Site",
                  "text": "Stewart Lake Recreation Site ist ein Campingplatz auf Vancouver Island.",
                  "category": "landmark",
                  "coords": [
                        -125.999956,
                        50.054481
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Mount Judson",
                  "text": "A Mount Judson egy csúcs Vancouver Islandon.",
                  "category": "natural",
                  "coords": [
                        -125.920505,
                        49.939718
                  ]
            },
            {
                  "name": "Horseshoe Mountain",
                  "text": "A Horseshoe Mountain egy csúcs Vancouver Islandon.",
                  "category": "natural",
                  "coords": [
                        -125.957979,
                        49.95607
                  ]
            },
            {
                  "name": "Tyee Mountain",
                  "text": "A Tyee Mountain egy csúcs Vancouver Islandon. Ez a Beaufort-hegység legmagasabb csúcsa.",
                  "category": "natural",
                  "coords": [
                        -125.893659,
                        49.979263
                  ]
            },
            {
                  "name": "Victoria Peak",
                  "text": "A Victoria Peak egy csúcs Vancouver Islandon.",
                  "category": "natural",
                  "coords": [
                        -126.101067,
                        50.054529
                  ]
            },
            {
                  "name": "Warden Peak",
                  "text": "A Warden Peak egy csúcs Vancouver Islandon.",
                  "category": "natural",
                  "coords": [
                        -126.096031,
                        50.062176
                  ]
            },
            {
                  "name": "Queen Peak",
                  "text": "A Queen Peak egy csúcs Vancouver Islandon.",
                  "category": "natural",
                  "coords": [
                        -126.054261,
                        50.048688
                  ]
            },
            {
                  "name": "Stewart Lake Recreation Site",
                  "text": "A Stewart Lake Recreation Site egy kempingterület Vancouver Islandon.",
                  "category": "landmark",
                  "coords": [
                        -125.999956,
                        50.054481
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Mount Judson",
                  "text": "Mount Judson este un vârf pe insula Vancouver.",
                  "category": "natural",
                  "coords": [
                        -125.920505,
                        49.939718
                  ]
            },
            {
                  "name": "Horseshoe Mountain",
                  "text": "Horseshoe Mountain este un vârf pe insula Vancouver.",
                  "category": "natural",
                  "coords": [
                        -125.957979,
                        49.95607
                  ]
            },
            {
                  "name": "Tyee Mountain",
                  "text": "Tyee Mountain este un vârf pe insula Vancouver. Este cel mai înalt vârf din lanțul Beaufort.",
                  "category": "natural",
                  "coords": [
                        -125.893659,
                        49.979263
                  ]
            },
            {
                  "name": "Victoria Peak",
                  "text": "Victoria Peak este un vârf pe insula Vancouver.",
                  "category": "natural",
                  "coords": [
                        -126.101067,
                        50.054529
                  ]
            },
            {
                  "name": "Warden Peak",
                  "text": "Warden Peak este un vârf pe insula Vancouver.",
                  "category": "natural",
                  "coords": [
                        -126.096031,
                        50.062176
                  ]
            },
            {
                  "name": "Queen Peak",
                  "text": "Queen Peak este un vârf pe insula Vancouver.",
                  "category": "natural",
                  "coords": [
                        -126.054261,
                        50.048688
                  ]
            },
            {
                  "name": "Stewart Lake Recreation Site",
                  "text": "Stewart Lake Recreation Site este o zonă de campare pe insula Vancouver.",
                  "category": "landmark",
                  "coords": [
                        -125.999956,
                        50.054481
                  ]
            }
      ],
      "en": [
            {
                  "name": "Mount Judson",
                  "text": "Mount Judson is a peak on Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -125.920505,
                        49.939718
                  ]
            },
            {
                  "name": "Horseshoe Mountain",
                  "text": "Horseshoe Mountain is a peak on Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -125.957979,
                        49.95607
                  ]
            },
            {
                  "name": "Tyee Mountain",
                  "text": "Tyee Mountain is a peak on Vancouver Island. It is the highest peak of the Beaufort Range.",
                  "category": "natural",
                  "coords": [
                        -125.893659,
                        49.979263
                  ]
            },
            {
                  "name": "Victoria Peak",
                  "text": "Victoria Peak is a peak on Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -126.101067,
                        50.054529
                  ]
            },
            {
                  "name": "Warden Peak",
                  "text": "Warden Peak is a peak on Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -126.096031,
                        50.062176
                  ]
            },
            {
                  "name": "Queen Peak",
                  "text": "Queen Peak is a peak on Vancouver Island.",
                  "category": "natural",
                  "coords": [
                        -126.054261,
                        50.048688
                  ]
            },
            {
                  "name": "Stewart Lake Recreation Site",
                  "text": "Stewart Lake Recreation Site is a camping area on Vancouver Island.",
                  "category": "landmark",
                  "coords": [
                        -125.999956,
                        50.054481
                  ]
            }
      ]
},
    type: "island",
    parent: "CA",
    coords: [-126.0, 50.0],
    name: { de: "Vancouver-Insel", hu: "Vancouver-sziget", ro: "Insula Vancouver", en: "Vancouver Island" },
    description: { de: "Große Insel an der Pazifikküste von British Columbia.", hu: "Nagy sziget Brit Kolumbia csendes-óceáni partjainál.", ro: "Insulă mare pe coasta Pacificului din Columbia Britanică.", en: "Large island off the Pacific coast of British Columbia." , es: "Gran isla en la costa pacífica de Columbia Británica.", pt: "Grande ilha na costa do Pacífico da Colúmbia Britânica.", fr: "Grande île sur la côte Pacifique de la Colombie-Britannique."},
    descriptionAdvanced: {
      de: "Vancouver Island liegt vor der Westküste Kanadas in der Provinz British Columbia und ist die größte Insel an der pazifischen Küste Nordamerikas. Sie ist bekannt für ihre außergewöhnliche biologische Vielfalt, die von gemäßigten Regenwäldern bis hin zu alpinen Tundra-Regionen reicht. Im Süden der Insel befindet sich Victoria, die charmante Hauptstadt von British Columbia, die für ihre koloniale Architektur und die Butchart Gardens berühmt ist. Der Pacific-Rim-Nationalpark an der Westküste zieht Surfer und Naturliebhaber gleichermaßen an und bietet spektakuläre Ausblicke auf den offenen Ozean. Geologisch ist die Insel Teil eines aktiven tektonischen Systems und durch steile Gebirgsketten im Landesinneren geprägt. Die indigene Kultur der Coast Salish, Nuu-chah-nulth und Kwakwaka'wakw ist tief in der Geschichte und dem gesellschaftlichen Leben der Insel verwurzelt. Wirtschaftlich basierte die Insel lange Zeit auf Forstwirtschaft und Fischerei, hat sich aber zunehmend zu einem Zentrum für Tourismus, Technologie und Bildung entwickelt. Das milde Klima macht sie zu einem beliebten Wohnort und einem ganzjährigen Ziel für Outdoor-Aktivitäten wie Walbeobachtungen, Wandern und Kajakfahren. Die Fährverbindungen von Vancouver und Seattle sind die Hauptlebensadern für den Transport von Menschen und Gütern.",
      hu: "A Brit Columbia tartomány nyugati partján fekvő Vancouver-sziget Észak-Amerika csendes-óceáni partvidékének legnagyobb szigete. Kivételes biológiai sokféleségéről ismert, amely a mérsékelt övi esőerdőktől az alpesi tundra régiókig terjed. A sziget déli csücskén található Victoria, Brit Columbia bájos fővárosa, amely gyarmati építészetéről és a Butchart Gardens-ről híres. A nyugati parton fekvő Pacific Rim Nemzeti Park a szörfösök és a természetjárók kedvelt célpontja, lélegzetelállító kilátást nyújtva a nyílt óceánra. Geológiailag a sziget egy aktív tektonikai rendszer része, belsejét meredek hegyláncok uralják. A Coast Salish, Nuu-chah-nulth és Kwakwaka'wakw őslakos népek kultúrája mélyen gyökerezik a sziget történelmében és mindennapi életében. Gazdaságilag a sziget sokáig az erdőgazdálkodásra és a halászatra támaszkodott, de mára a turizmus, a technológia és az oktatás központjává vált. Az enyhe éghajlat miatt népszerű lakóhely és egész évben látogatható célpont olyan tevékenységekhez, mint a bálnales, a túrázás és a kajakozás. A Vancouverből és Seattle-ből induló kompjáratok jelentik a sziget legfontosabb közlekedési kapcsolatait.",
      ro: "Insula Vancouver este situată în largul coastei de vest a Canadei, în provincia Columbia Britanică, fiind cea mai mare insulă de pe coasta pacifică a Americii de Nord. Este renumită pentru biodiversitatea sa excepțională, care variază de la păduri tropicale temperate la regiuni de tundră alpină. În sudul insulei se află Victoria, capitala pitorească a Columbiei Britanice, celebră pentru arhitectura sa colonială și Grădinile Butchart. Parcul Național Pacific Rim de pe coasta de vest atrage deopotrivă surferi și iubitori de natură, oferind priveliști spectaculoase spre oceanul deschis. Din punct de vedere geologic, insula face parte dintr-un sistem tectonic activ și este străbătută de lanțuri muntoase abrupte în interior. Cultura indigenă a popoarelor Coast Salish, Nuu-chah-nulth și Kwakwaka'wakw este profund înrădăcinată în istoria și viața socială a insulei. Economic, insula s-a bazat mult timp pe silvicultură și pescuit, dar s-a transformat treptat într-un centru pentru turism, tehnologie și educație. Clima blândă o face un loc de reședință popular și o destinație pe tot parcursul anului pentru activități în aer liber, precum observarea balenelor, drumețiile și caiacul. Conexiunile cu feribotul din Vancouver și Seattle reprezintă principalele artere de transport.",
      en: "Vancouver Island is located off the west coast of Canada in the province of British Columbia and is the largest island on the Pacific coast of North America. It is renowned for its exceptional biodiversity, ranging from temperate rainforests to alpine tundra regions. In the southern part of the island lies Victoria, the charming capital of British Columbia, famous for its colonial architecture and the Butchart Gardens. The Pacific Rim National Park Reserve on the west coast attracts surfers and nature enthusiasts alike, offering spectacular views of the open ocean. Geologically, the island is part of an active tectonic system and is characterized by steep mountain ranges in its interior. The indigenous cultures of the Coast Salish, Nuu-chah-nulth, and Kwakwaka'wakw peoples are deeply rooted in the island's history and social fabric. Economically, the island relied on forestry and fishing for decades but has increasingly evolved into a hub for tourism, technology, and education. Its mild climate makes it a popular place to live and a year-round destination for outdoor activities such as whale watching, hiking, and kayaking. Ferry services from Vancouver and Seattle are the primary lifelines for the movement of people and goods.",
      es: "La isla de Vancouver ofrece una increíble diversidad de ecosistemas, desde selvas templadas hasta montañas cubiertas de nieve. La isla es conocida por su rica fauna, especialmente ballenas y osos, así como por ser el hogar de la capital provincial, Victoria, situada en su extremo sur, combinando naturaleza virgen con encanto urbano.",
      pt: "A Ilha de Vancouver oferece uma incrível diversidade de ecossistemas, desde florestas temperadas a montanhas cobertas de neve. A ilha é conhecida pela sua rica vida selvagem, especialmente baleias e ursos, bem como pela capital provincial Victoria na sua ponta sul, oferecendo uma mistura única de aventura e cultura.",
      fr: "L'île de Vancouver offre une incroyable diversité d'écosystèmes, des forêts pluviales tempérées aux montagnes enneigées. L'île est réputée pour sa riche faune, notamment les baleines et les ours, ainsi que pour la capitale provinciale Victoria à sa pointe sud, attirant les amoureux de la nature du monde entier.",
    },
    factsAdvanced: {
      de: ["Die Insel hat eine Fläche von etwa 31.285 Quadratkilometern.", "Victoria wurde im Jahr 1843 als Handelsposten der Hudson's Bay Company gegründet.", "Der Golden Hinde ist mit 2.195 Metern der höchste Berg der Insel.", "Vancouver Island beherbergt einige der ältesten Bäume Kanadas (über 800 Jahre).", "Das Strathcona Provincial Park ist der älteste Provinzpark in British Columbia.", "Die Insel ist etwa 460 Kilometer lang und bis zu 100 Kilometer breit."],
      hu: ["A sziget területe megközelítőleg 31 285 négyzetkilométer.", "Victoriát 1843-ban alapították a Hudson-öböl Társaság kereskedelmi állomásaként.", "A sziget legmagasabb pontja a 2195 méter magas Golden Hinde hegycsúcs.", "A szigeten találhatók Kanada legöregebb, több mint 800 éves fái.", "A Strathcona tartományi park Brit Columbia legrégebbi ilyen jellegű parkja.", "A sziget hossza körülbelül 460 kilométer, szélessége pedig eléri a 100 kilométert."],
      ro: ["Insula are o suprafață de aproximativ 31.285 de kilometri pătrați.", "Victoria a fost fondată în 1843 ca punct comercial al Hudson's Bay Company.", "Golden Hinde este cel mai înalt vârf de pe insulă, având 2.195 de metri.", "Pe insulă se află unii dintre cei mai bătrâni arbori din Canada, depășind 800 de ani.", "Parcul Provincial Strathcona este cel mai vechi parc provincial din Columbia Britanică.", "Insula are o lungime de circa 460 km și o lățime de până la 100 km."],
      en: ["The island covers an area of approximately 31,285 square kilometers.", "Victoria was founded in 1843 as a Hudson's Bay Company trading post.", "Golden Hinde is the highest mountain on the island, reaching 2,195 meters.", "Vancouver Island is home to some of Canada's oldest trees, aged over 800 years.", "Strathcona Provincial Park is the oldest provincial park in British Columbia.", "The island is about 460 kilometers long and up to 100 kilometers wide."],
      es: [],
      pt: [],
      fr: [],
    },
    facts: { de: ["Größte Insel an der Pazifikküste", "Gemäßigter Regenwald", "Weltklasse Walbeobachtung", "Heimat von Victoria", "Surferparadies Tofino"], hu: ["A csendes-óceáni partvidék legnagyobb szigete", "Mérsékelt övi esőerdők", "Világszínvonalú bálnamegfigyelés", "Itt található Victoria", "Tofino, a szörfösök paradicsoma"], ro: ["Cea mai mare insulă de pe coasta Pacificului", "Păduri tropicale temperate", "Observarea balenelor de clasă mondială", "Găzduiește orașul Victoria", "Tofino, paradisul surferilor"], en: ["Largest island on the Pacific coast", "Temperate rainforests", "World-class whale watching", "Home to Victoria", "Surfing mecca of Tofino"] , es: ["Isla más grande del Pacífico", "Selva templada", "Avistamiento de ballenas", "Hogar de Victoria", "Paraíso del surf Tofino"], pt: ["Maior ilha da costa do Pacífico", "Floresta temperada", "Observação de baleias", "Lar de Victoria", "Paraíso do surf Tofino"], fr: ["Plus grande île du Pacifique", "Forêt pluviale tempérée", "Observation des baleines", "Siège de Victoria", "Paradis du surf à Tofino"]},
    area: 31285, length: 460, elevation: 2195, image: "/poi-images/ca-vancouver-island.webp"},
];

export const canadaAllPoi: POI[] = [...canadaCountry, ...canadaRegions, ...canadaCities, ...canadaLandmarks, ...poiExtraCanadaCities, ...poiExtraCanadaCitiesV2, ...poiExtraCanadaEconomicV2, ...poiExtraCanadaHistory, ...poiExtraCanadaHistoryV2, ...poiExtraCanadaLandmarksV2, ...poiExtraCanadaLifeV2, ...poiExtraCanadaNatureV2, ...poiExtraCanadaRefill, ...poiExtraCanadaReliefV2];

