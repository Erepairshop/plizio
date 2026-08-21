import type { GeographyDiagramFamily, GeographyDiagramId } from "@/components/geographie-visual/GeographyTestDiagrams";

export type GeographyVisualLang = "de" | "hu" | "ro" | "en";
type Text = Record<GeographyVisualLang, string>;
const t = (de: string, hu: string, ro: string, en: string): Text => ({ de, hu, ro, en });

export function geographyVisualLang(lang?: string): GeographyVisualLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

type BaseMission = {
  id: GeographyDiagramId;
  family: GeographyDiagramFamily;
  grade: 5 | 6 | 7 | 8;
  title: Text;
  clue: Text;
};

export type GeographyMission = BaseMission & (
  | { mode: "choice"; answer: Text; distractors: Text[] }
  | { mode: "order"; stages: Text[] }
);

export const GEOGRAPHY_MISSIONS: GeographyMission[] = [
  {
    id: "compass-rose", family: "map", grade: 5, mode: "choice",
    title: t("Richtung auf der Karte", "Irány a térképen", "Direcție pe hartă", "Direction on a map"),
    clue: t("Der markierte Pfeil zeigt zwischen Norden und Osten.", "A jelölt nyíl észak és kelet között mutat.", "Săgeata marcată indică între nord și est.", "The marked arrow points between north and east."),
    answer: t("Nordosten", "északkelet", "nord-est", "north-east"),
    distractors: [t("Nordwesten", "északnyugat", "nord-vest", "north-west"), t("Südosten", "délkelet", "sud-est", "south-east"), t("Südwesten", "délnyugat", "sud-vest", "south-west")],
  },
  {
    id: "scale-bar", family: "data", grade: 5, mode: "choice",
    title: t("Entfernung mit Maßstab", "Távolság méretaránnyal", "Distanță cu scară", "Distance with a scale"),
    clue: t("Drei gleich große Abschnitte entsprechen jeweils 5 Kilometern.", "Három egyenlő szakasz egyenként 5 kilométert jelent.", "Trei segmente egale reprezintă câte 5 kilometri.", "Three equal sections each represent 5 kilometres."),
    answer: t("15 Kilometer", "15 kilométer", "15 kilometri", "15 kilometres"),
    distractors: [t("5 Kilometer", "5 kilométer", "5 kilometri", "5 kilometres"), t("10 Kilometer", "10 kilométer", "10 kilometri", "10 kilometres"), t("30 Kilometer", "30 kilométer", "30 kilometri", "30 kilometres")],
  },
  {
    id: "continents-grid", family: "map", grade: 5, mode: "choice",
    title: t("Gitternetz der Erde", "A Föld fokhálózata", "Rețeaua geografică", "Earth's coordinate grid"),
    clue: t("Welche Linie teilt die Erde in Nord- und Südhalbkugel?", "Melyik vonal osztja a Földet északi és déli félgömbre?", "Ce linie împarte Pământul în emisfera nordică și sudică?", "Which line divides Earth into northern and southern hemispheres?"),
    answer: t("Äquator", "Egyenlítő", "Ecuatorul", "Equator"),
    distractors: [t("Nullmeridian", "kezdő hosszúsági kör", "meridianul zero", "Prime Meridian"), t("Polarkreis", "sarkkör", "cercul polar", "Polar Circle"), t("Wendekreis", "térítő", "tropicul", "Tropic")],
  },
  {
    id: "earth-layers", family: "system", grade: 5, mode: "order",
    title: t("Aufbau der Erde", "A Föld belső szerkezete", "Structura internă a Pământului", "Inside the Earth"),
    clue: t("Ordne die Schalen von außen nach innen.", "Rendezd a rétegeket kívülről befelé.", "Ordonează straturile din exterior spre interior.", "Order the layers from outside to inside."),
    stages: [t("Erdkruste", "földkéreg", "scoarță", "crust"), t("Erdmantel", "földköpeny", "mantaua", "mantle"), t("äußerer Kern", "külső mag", "nucleu extern", "outer core"), t("innerer Kern", "belső mag", "nucleu intern", "inner core")],
  },
  {
    id: "water-cycle-simple", family: "system", grade: 5, mode: "order",
    title: t("Weg des Wassers", "A víz körforgása", "Circuitul apei", "Journey of water"),
    clue: t("Ordne einen vollständigen Wasserkreislauf.", "Rendezd sorrendbe a víz teljes körforgását.", "Ordonează un circuit complet al apei.", "Order one complete water cycle."),
    stages: [t("Verdunstung", "párolgás", "evaporare", "evaporation"), t("Wolkenbildung", "felhőképződés", "formarea norilor", "cloud formation"), t("Niederschlag", "csapadék", "precipitații", "precipitation"), t("Abfluss ins Meer", "lefolyás a tengerbe", "scurgere spre mare", "runoff to the sea")],
  },
  {
    id: "settlement-network", family: "decision", grade: 5, mode: "choice",
    title: t("Zentrum und Umland", "Központ és vonzáskörzet", "Centru și împrejurimi", "Centre and surroundings"),
    clue: t("Viele Verkehrswege führen zu einem großen Ort mit Diensten und Arbeitsplätzen.", "Sok út vezet egy nagy településhez, ahol szolgáltatások és munkahelyek vannak.", "Multe drumuri duc spre o localitate mare cu servicii și locuri de muncă.", "Many routes lead to a large settlement with services and jobs."),
    answer: t("regionales Zentrum", "regionális központ", "centru regional", "regional centre"),
    distractors: [t("Einödhof", "magányos tanya", "gospodărie izolată", "isolated farm"), t("unbewohnte Insel", "lakatlan sziget", "insulă nelocuită", "uninhabited island"), t("Naturschutzgrenze", "természetvédelmi határ", "limită de rezervație", "nature reserve boundary")],
  },
  {
    id: "contour-hill", family: "data", grade: 6, mode: "choice",
    title: t("Höhenlinien lesen", "Szintvonalak olvasása", "Citirea curbelor de nivel", "Reading contour lines"),
    clue: t("Wo die Höhenlinien eng beieinanderliegen, ist der Hang ...", "Ahol a szintvonalak sűrűn vannak, ott a lejtő ...", "Unde curbele de nivel sunt apropiate, panta este ...", "Where contour lines are close together, the slope is ..."),
    answer: t("steil", "meredek", "abruptă", "steep"),
    distractors: [t("flach", "enyhe", "lină", "gentle"), t("unter dem Meer", "tengerszint alatti", "sub nivelul mării", "below sea level"), t("völlig eben", "teljesen sík", "complet plană", "completely flat")],
  },
  {
    id: "climate-zones", family: "map", grade: 6, mode: "choice",
    title: t("Klimagürtel der Erde", "A Föld éghajlati övei", "Zonele climatice ale Pământului", "Earth's climate belts"),
    clue: t("Der breite Gürtel um den Äquator erhält ganzjährig viel Sonnenenergie.", "Az Egyenlítő körüli széles öv egész évben sok napenergiát kap.", "Centura largă din jurul Ecuatorului primește multă energie solară tot anul.", "The broad belt around the Equator receives strong solar energy all year."),
    answer: t("Tropen", "forró övezet", "zona tropicală", "tropics"),
    distractors: [t("Polarzone", "hideg övezet", "zona polară", "polar zone"), t("gemäßigte Zone", "mérsékelt övezet", "zona temperată", "temperate zone"), t("Hochgebirge", "magashegység", "etaj alpin", "high mountains")],
  },
  {
    id: "river-basin", family: "system", grade: 6, mode: "order",
    title: t("Vom Quellbach zur Mündung", "A forrástól a torkolatig", "De la izvor la vărsare", "From source to mouth"),
    clue: t("Ordne den Weg des Wassers im Flusssystem.", "Rendezd a víz útját a folyórendszerben.", "Ordonează drumul apei în sistemul fluvial.", "Order the path of water through a river system."),
    stages: [t("Quelle", "forrás", "izvor", "source"), t("Nebenfluss", "mellékfolyó", "afluent", "tributary"), t("Hauptfluss", "főfolyó", "râu principal", "main river"), t("Mündung", "torkolat", "vărsare", "mouth")],
  },
  {
    id: "ocean-current", family: "map", grade: 6, mode: "choice",
    title: t("Warme Meeresströmung", "Meleg tengeráramlás", "Curent oceanic cald", "Warm ocean current"),
    clue: t("Eine warme Strömung transportiert Energie aus niedrigen in höhere Breiten.", "Egy meleg áramlás alacsonyabb szélességekről magasabbak felé szállít energiát.", "Un curent cald transportă energie de la latitudini joase spre latitudini mai înalte.", "A warm current carries energy from low to higher latitudes."),
    answer: t("milderes Küstenklima", "enyhébb tengerparti éghajlat", "climă de coastă mai blândă", "milder coastal climate"),
    distractors: [t("dauerhafter Permafrost", "állandó fagy", "permafrost permanent", "permanent permafrost"), t("keine Wirkung", "nincs hatása", "fără efect", "no effect"), t("sofortige Wüstenbildung", "azonnali elsivatagosodás", "deșertificare imediată", "instant desertification")],
  },
  {
    id: "mediterranean-farm", family: "decision", grade: 6, mode: "choice",
    title: t("Landwirtschaft am Mittelmeer", "Mediterrán mezőgazdaság", "Agricultură mediteraneană", "Mediterranean farming"),
    clue: t("Heiße trockene Sommer und milde feuchte Winter begünstigen ...", "A forró, száraz nyár és az enyhe, csapadékos tél kedvez ...", "Verile calde și uscate, iar iernile blânde și umede favorizează ...", "Hot dry summers and mild wet winters favour ..."),
    answer: t("Oliven und Zitrusfrüchte", "olajbogyót és citrusféléket", "măsline și citrice", "olives and citrus fruit"),
    distractors: [t("Tundrenmoose", "tundrai mohákat", "mușchi de tundră", "tundra mosses"), t("Reisanbau ohne Bewässerung", "öntözés nélküli rizst", "orez fără irigații", "rice without irrigation"), t("arktische Weiden", "sarkvidéki legelőket", "pășuni arctice", "Arctic pasture")],
  },
  {
    id: "sustainable-tourism", family: "decision", grade: 6, mode: "order",
    title: t("Reise mit kleinerem Fußabdruck", "Utazás kisebb lábnyommal", "Călătorie cu impact redus", "Lower-impact travel"),
    clue: t("Ordne die Planung einer möglichst nachhaltigen Reise.", "Rendezd egy lehetőleg fenntartható utazás tervezését.", "Ordonează planificarea unei călătorii cât mai durabile.", "Order the planning of a more sustainable trip."),
    stages: [t("nahes Ziel wählen", "közelebbi cél választása", "alegerea unei destinații apropiate", "choose a closer destination"), t("Bahn statt Flug prüfen", "vonat választása repülő helyett", "verificarea trenului în locul avionului", "check rail instead of flying"), t("lokale Unterkunft buchen", "helyi szállás foglalása", "rezervarea unei cazări locale", "book local accommodation"), t("Naturregeln beachten", "természeti szabályok betartása", "respectarea regulilor naturii", "follow nature rules")],
  },
  {
    id: "plate-boundary", family: "system", grade: 7, mode: "order",
    title: t("Platten bewegen sich", "Kőzetlemezek mozgása", "Mișcarea plăcilor", "Moving plates"),
    clue: t("Ordne eine vereinfachte Kette an einer konvergenten Plattengrenze.", "Rendezd egy közeledő lemezszegély egyszerűsített folyamatát.", "Ordonează un lanț simplificat la o margine convergentă.", "Order a simplified chain at a convergent boundary."),
    stages: [t("Platten nähern sich", "a lemezek közelednek", "plăcile se apropie", "plates converge"), t("eine Platte taucht ab", "az egyik lemez alábukik", "o placă se subduce", "one plate subducts"), t("Gestein schmilzt teilweise", "a kőzet részben megolvad", "roca se topește parțial", "rock partially melts"), t("Vulkanismus entsteht", "vulkáni működés indul", "apare vulcanismul", "volcanism develops")],
  },
  {
    id: "volcano-profile", family: "data", grade: 7, mode: "choice",
    title: t("Vulkan im Querschnitt", "Vulkán keresztmetszetben", "Vulcan în secțiune", "Volcano cross-section"),
    clue: t("Der senkrechte Kanal verbindet die Magmakammer mit dem Krater.", "A függőleges csatorna a magmakamrát köti össze a kráterrel.", "Canalul vertical leagă camera magmatică de crater.", "The vertical channel links the magma chamber to the crater."),
    answer: t("Vulkanschlot", "vulkáni kürtő", "coș vulcanic", "volcanic vent"),
    distractors: [t("Flusstal", "folyóvölgy", "vale fluvială", "river valley"), t("Grundwasserspiegel", "talajvízszint", "nivel freatic", "water table"), t("Gletscherspalte", "gleccserhasadék", "crevasă", "crevasse")],
  },
  {
    id: "climate-graph", family: "data", grade: 7, mode: "choice",
    title: t("Klimadiagramm auswerten", "Éghajlati diagram elemzése", "Analiza unei diagrame climatice", "Reading a climate graph"),
    clue: t("Die Temperaturkurve steigt im Sommer, während die Niederschläge sehr niedrig bleiben.", "Nyáron nő a hőmérséklet, miközben kevés a csapadék.", "Temperatura crește vara, iar precipitațiile rămân foarte reduse.", "Temperature rises in summer while rainfall stays very low."),
    answer: t("trockener Sommer", "száraz nyár", "vară secetoasă", "dry summer"),
    distractors: [t("ganzjährig Frost", "egész éves fagy", "îngheț tot anul", "year-round frost"), t("Sommermonsun", "nyári monszun", "muson de vară", "summer monsoon"), t("gleichmäßiger Dauerregen", "egyenletes egész éves eső", "ploi uniforme tot anul", "even year-round rain")],
  },
  {
    id: "population-pyramid", family: "data", grade: 7, mode: "choice",
    title: t("Bevölkerungspyramide", "Korfa elemzése", "Piramida populației", "Population pyramid"),
    clue: t("Eine breite Basis und eine schmale Spitze zeigen ...", "A széles alap és a keskeny csúcs azt mutatja, hogy ...", "O bază largă și un vârf îngust arată ...", "A broad base and narrow top show ..."),
    answer: t("viele Kinder und starkes Wachstum", "sok gyermek és gyors növekedés", "mulți copii și creștere rapidă", "many children and rapid growth"),
    distractors: [t("nur ältere Menschen", "csak idősek vannak", "doar persoane vârstnice", "only older people"), t("keine Geburten", "nincsenek születések", "nu există nașteri", "no births"), t("vollständig stabile Altersstruktur", "teljesen stabil korszerkezet", "structură de vârstă complet stabilă", "completely stable age structure")],
  },
  {
    id: "migration-push-pull", family: "system", grade: 7, mode: "order",
    title: t("Warum Menschen wandern", "Miért vándorolnak az emberek", "De ce migrează oamenii", "Why people migrate"),
    clue: t("Ordne eine mögliche Wanderungsentscheidung.", "Rendezd egy lehetséges vándorlási döntés lépéseit.", "Ordonează o posibilă decizie de migrație.", "Order one possible migration decision."),
    stages: [t("Push-Faktor am Herkunftsort", "taszító tényező az indulási helyen", "factor de respingere la origine", "push factor at origin"), t("Information über ein Ziel", "információ a célterületről", "informații despre destinație", "information about a destination"), t("Pull-Faktor am Ziel", "vonzó tényező a célterületen", "factor de atracție la destinație", "pull factor at destination"), t("Wanderungsentscheidung", "vándorlási döntés", "decizia de migrație", "migration decision")],
  },
  {
    id: "urban-growth", family: "decision", grade: 7, mode: "order",
    title: t("Wachsende Stadt planen", "Növekvő város tervezése", "Planificarea unui oraș în creștere", "Planning a growing city"),
    clue: t("Ordne eine verantwortungsvolle Reaktion auf starkes Stadtwachstum.", "Rendezd a gyors városnövekedésre adott felelős választ.", "Ordonează un răspuns responsabil la creșterea rapidă a orașului.", "Order a responsible response to rapid urban growth."),
    stages: [t("Wachstum messen", "a növekedés felmérése", "măsurarea creșterii", "measure growth"), t("Wohnraum und Verkehr planen", "lakhatás és közlekedés tervezése", "planificarea locuințelor și transportului", "plan housing and transport"), t("Grünflächen sichern", "zöldterületek védelme", "protejarea spațiilor verzi", "protect green space"), t("Versorgung regelmäßig prüfen", "az ellátás rendszeres ellenőrzése", "verificarea periodică a serviciilor", "review services regularly")],
  },
  {
    id: "river-meander", family: "system", grade: 8, mode: "order",
    title: t("Entstehung einer Flussschlinge", "Folyókanyarulat kialakulása", "Formarea unui meandru", "Formation of a meander"),
    clue: t("Ordne die Entwicklung eines Mäanders.", "Rendezd a meander fejlődését.", "Ordonează dezvoltarea unui meandru.", "Order the development of a meander."),
    stages: [t("kleine Flusskrümmung", "kis folyókanyar", "curbură mică a râului", "small river bend"), t("Erosion am Außenufer", "erózió a külső íven", "eroziune pe malul exterior", "erosion on outer bank"), t("Ablagerung am Innenufer", "feltöltődés a belső íven", "depunere pe malul interior", "deposition on inner bank"), t("Schlinge wird größer", "a kanyarulat növekszik", "meandrul se mărește", "bend becomes larger")],
  },
  {
    id: "glacial-valley", family: "data", grade: 8, mode: "choice",
    title: t("Talform erkennen", "Völgyforma felismerése", "Recunoașterea formei văii", "Recognising a valley shape"),
    clue: t("Der breite, flache Talboden und die steilen Hänge wurden von Eis geformt.", "A széles, lapos völgytalpat és meredek oldalakat jég formálta.", "Fundul larg și plat, cu versanți abrupți, a fost modelat de gheață.", "The broad flat floor and steep sides were shaped by ice."),
    answer: t("U-Tal", "U alakú völgy", "vale în U", "U-shaped valley"),
    distractors: [t("V-Tal", "V alakú völgy", "vale în V", "V-shaped valley"), t("Düne", "homokdűne", "dună", "sand dune"), t("Delta", "delta", "deltă", "delta")],
  },
  {
    id: "trade-network", family: "map", grade: 8, mode: "choice",
    title: t("Globales Handelsnetz", "Globális kereskedelmi hálózat", "Rețea comercială globală", "Global trade network"),
    clue: t("Viele Häfen sind durch mehrere Routen miteinander verbunden.", "Sok kikötőt több útvonal köt össze.", "Numeroase porturi sunt legate prin mai multe rute.", "Many ports are connected by several routes."),
    answer: t("vernetzter Welthandel", "összekapcsolt világkereskedelem", "comerț mondial interconectat", "interconnected world trade"),
    distractors: [t("vollständige Autarkie", "teljes önellátás", "autarhie completă", "complete self-sufficiency"), t("nur lokaler Tausch", "csak helyi csere", "doar schimb local", "local barter only"), t("geschlossene Seewege", "lezárt tengeri útvonalak", "rute maritime închise", "closed sea routes")],
  },
  {
    id: "sector-chain", family: "system", grade: 8, mode: "order",
    title: t("Vom Rohstoff zur Dienstleistung", "A nyersanyagtól a szolgáltatásig", "De la materie primă la serviciu", "From raw material to service"),
    clue: t("Ordne die Wirtschaftssektoren entlang einer Wertschöpfungskette.", "Rendezd a gazdasági szektorokat egy értéklánc mentén.", "Ordonează sectoarele economice într-un lanț valoric.", "Order economic sectors along a value chain."),
    stages: [t("Rohstoff gewinnen", "nyersanyag kitermelése", "extragerea materiei prime", "extract raw material"), t("Produkt herstellen", "termék gyártása", "fabricarea produsului", "manufacture product"), t("Transport und Verkauf", "szállítás és értékesítés", "transport și vânzare", "transport and retail"), t("Daten und Forschung", "adatok és kutatás", "date și cercetare", "data and research")],
  },
  {
    id: "energy-transition", family: "decision", grade: 8, mode: "order",
    title: t("Energiesystem umbauen", "Az energiarendszer átalakítása", "Transformarea sistemului energetic", "Changing an energy system"),
    clue: t("Ordne einen realistischen Übergang zu weniger Emissionen.", "Rendezd egy reális, alacsonyabb kibocsátású átmenet lépéseit.", "Ordonează o tranziție realistă către emisii mai reduse.", "Order a realistic transition towards lower emissions."),
    stages: [t("Verbrauch und Netze analysieren", "fogyasztás és hálózatok elemzése", "analiza consumului și rețelelor", "analyse demand and grids"), t("Energie sparen", "energiamegtakarítás", "economisirea energiei", "reduce energy use"), t("Erneuerbare ausbauen", "megújulók bővítése", "extinderea surselor regenerabile", "expand renewables"), t("Speicher und Netze anpassen", "tárolók és hálózatok fejlesztése", "adaptarea stocării și rețelelor", "adapt storage and grids")],
  },
  {
    id: "future-city", family: "decision", grade: 8, mode: "choice",
    title: t("Klimaangepasste Stadt", "Klímaalkalmazkodó város", "Oraș adaptat climei", "Climate-resilient city"),
    clue: t("Welche Kombination senkt Hitze und Starkregenrisiko am besten?", "Melyik kombináció csökkenti legjobban a hőséget és a heves esők kockázatát?", "Ce combinație reduce cel mai bine căldura și riscul ploilor torențiale?", "Which combination best reduces heat and heavy-rain risk?"),
    answer: t("Bäume, Gründächer und wasserdurchlässige Flächen", "fák, zöldtetők és vízáteresztő burkolatok", "arbori, acoperișuri verzi și suprafețe permeabile", "trees, green roofs and permeable surfaces"),
    distractors: [t("mehr Asphalt und Parkplätze", "több aszfalt és parkoló", "mai mult asfalt și parcări", "more asphalt and parking"), t("alle Bäche verrohren", "minden patak lefedése", "canalizarea tuturor pâraielor", "pipe all streams underground"), t("Grünflächen bebauen", "zöldterületek beépítése", "construirea pe spațiile verzi", "build over green spaces")],
  },
];

export const GEOGRAPHY_VISUAL_UI = {
  de: { label: "Geographie-Mission", correct: "Richtig!", solution: "Lösung", order: "Deine Reihenfolge", tap: "Tippe die Schritte in der richtigen Reihenfolge an", reset: "Neu ordnen" },
  hu: { label: "Földrajzi küldetés", correct: "Helyes!", solution: "Megoldás", order: "A sorrended", tap: "Koppints a lépésekre a helyes sorrendben", reset: "Újrakezdés" },
  ro: { label: "Misiune geografică", correct: "Corect!", solution: "Soluție", order: "Ordinea ta", tap: "Atinge etapele în ordinea corectă", reset: "Reordonează" },
  en: { label: "Geography mission", correct: "Correct!", solution: "Solution", order: "Your sequence", tap: "Tap the steps in the correct order", reset: "Start again" },
} satisfies Record<GeographyVisualLang, Record<string, string>>;

export type LocalizedGeographyMission =
  | { id: GeographyDiagramId; family: GeographyDiagramFamily; mode: "choice"; title: string; clue: string; answer: string; options: string[] }
  | { id: GeographyDiagramId; family: GeographyDiagramFamily; mode: "order"; title: string; clue: string; stages: string[] };

export function localizedGeographyMissions(grade: number, lang?: string): LocalizedGeographyMission[] {
  const activeLang = geographyVisualLang(lang);
  return GEOGRAPHY_MISSIONS.filter(mission => mission.grade === grade).map(mission => {
    if (mission.mode === "choice") {
      return {
        id: mission.id, family: mission.family, mode: "choice" as const,
        title: mission.title[activeLang], clue: mission.clue[activeLang],
        answer: mission.answer[activeLang],
        options: [mission.answer, ...mission.distractors].map(value => value[activeLang]),
      };
    }
    return {
      id: mission.id, family: mission.family, mode: "order" as const,
      title: mission.title[activeLang], clue: mission.clue[activeLang],
      stages: mission.stages.map(value => value[activeLang]),
    };
  });
}
