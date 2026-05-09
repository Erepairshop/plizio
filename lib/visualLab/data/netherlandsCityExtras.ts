// @ts-nocheck
import type { POI } from "./poi";

type Lang = "de" | "hu" | "ro" | "en";
type SettlementTheme =
  | "capital"
  | "historic"
  | "fortified"
  | "coastal"
  | "port"
  | "nature"
  | "industrial"
  | "university"
  | "sports"
  | "border"
  | "polder"
  | "island"
  | "flower"
  | "new-town"
  | "shopping"
  | "water"
  | "royal"
  | "market"
  | "tourism"
  | "fruit"
  | "cheese"
  | "seafood"
  | "suburb"
  | "events";

interface SettlementRow {
  id: string;
  parent: string;
  coords: [number, number];
  name: string;
  theme: SettlementTheme;
}

const PROVINCES: Record<string, Record<Lang, string>> = {
  "NL-DR": { de: "Drenthe", hu: "Drenthe", ro: "Drenthe", en: "Drenthe" },
  "NL-FL": { de: "Flevoland", hu: "Flevoland", ro: "Flevoland", en: "Flevoland" },
  "NL-FR": { de: "Friesland", hu: "Friesland", ro: "Friesland", en: "Friesland" },
  "NL-GE": { de: "Gelderland", hu: "Gelderland", ro: "Gelderland", en: "Gelderland" },
  "NL-GR": { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
  "NL-LI": { de: "Limburg", hu: "Limburg", ro: "Limburg", en: "Limburg" },
  "NL-NB": { de: "North Brabant", hu: "North Brabant", ro: "North Brabant", en: "North Brabant" },
  "NL-NH": { de: "North Holland", hu: "Észak-Holland", ro: "Olanda de Nord", en: "North Holland" },
  "NL-OV": { de: "Overijssel", hu: "Overijssel", ro: "Overijssel", en: "Overijssel" },
  "NL-UT": { de: "Utrecht", hu: "Utrecht", ro: "Utrecht", en: "Utrecht" },
  "NL-ZE": { de: "Zeeland", hu: "Zeeland", ro: "Zeeland", en: "Zeeland" },
  "NL-ZH": { de: "South Holland", hu: "Dél-Holland", ro: "Olanda de Sud", en: "South Holland" },
};

const THEME_LABELS: Record<SettlementTheme, string> = {
  capital: "provincial capital",
  historic: "historic town",
  fortified: "fortified town",
  coastal: "coastal town",
  port: "port city",
  nature: "nature town",
  industrial: "industrial city",
  university: "university city",
  sports: "sports town",
  border: "border town",
  polder: "polder town",
  island: "island village",
  flower: "flower town",
  "new-town": "new town",
  shopping: "shopping city",
  water: "water town",
  royal: "royal town",
  market: "market town",
  tourism: "tourist town",
  fruit: "fruit town",
  cheese: "cheese town",
  seafood: "seafood village",
  suburb: "suburban city",
  events: "events town",
};

function buildSettlementPoi(row: SettlementRow): POI {
  const province = PROVINCES[row.parent] ?? { de: row.parent, hu: row.parent, ro: row.parent, en: row.parent };
  const label = THEME_LABELS[row.theme];

  return {
    id: row.id,
    type: "city",
    parent: row.parent,
    coords: row.coords,
    name: { de: row.name, hu: row.name, ro: row.name, en: row.name },
    description: {
      de: `${row.name} ist eine Stadt in ${province.de}. Sie steht fur ${label}.`,
      hu: `${row.name} ${province.hu} egyik varosa. A ${label} jellemzi.`,
      ro: `${row.name} este un oras din ${province.ro}. Este cunoscut pentru ${label}.`,
      en: `${row.name} is a city in ${province.en}. It is known for its ${label}.`,
    },
    facts: {
      de: [`Liegt in ${province.de}.`, `Steht fur ${label}.`, "Erganzt das Netz der niederlandischen Stadte und Gemeinden.", "Beliebt fur Tagesausfluge und lokale Erkundungen."],
      hu: [`A ${province.hu} tartomanyban talalhato.`, `A ${label} egyik peldaja.`, "Gazdagitja a holland telepuleshalozatot.", "Jó celpont egynapos kirandulasokhoz."],
      ro: [`Se afla in ${province.ro}.`, `Este cunoscut pentru ${label}.`, "Completeaza reteaua de orase si localitati din Tarile de Jos.", "Potrivit pentru o excursie de o zi."],
      en: [`Located in ${province.en}.`, `Known for its ${label}.`, "Part of the Dutch network of towns and cities.", "A good destination for a day trip."],
    },
  };
}

const settlementRows: SettlementRow[] = [
  { id: "nl-almere", parent: "NL-FL", coords: [5.209294, 52.441751], name: "Almere", theme: "polder",
    description: {
      de: "Almere ist eine moderne Planstadt in der Provinz Flevoland, die vollständig auf dem Meer abgetrotzten Land erbaut wurde.",
      hu: "Almere egy modern tervezett város Flevoland tartományban, amely teljes egészében a tengertől elhódított területen épült.",
      ro: "Almere este un oraș modern planificat în provincia Flevoland, construit în întregime pe pământ recuperat din mare.",
      en: "Almere is a modern planned city in the province of Flevoland, built entirely on land reclaimed from the sea."
    },
    facts: {
      de: ["Es ist die jüngste Stadt der Niederlande.", "Der Bau der Stadt begann in den 1970er Jahren.", "Almere besteht aus mehreren eigenständigen Stadtteilen, jeder mit seinem eigenen Zentrum."],
      hu: ["Ez Hollandia legfiatalabb városa.", "A város építése az 1970-es években kezdődött.", "Almere több különálló kerületből áll, mindegyik saját központtal."],
      ro: ["Este cel mai nou oraș din Țările de Jos.", "Construcția orașului a început în anii 1970.", "Almere este alcătuit din mai multe districte distincte, fiecare cu propriul centru."],
      en: ["It is the newest city in the Netherlands.", "The city's construction began in the 1970s.", "Almere consists of several distinct districts, each with its own center."]
    }
  },
  { id: "nl-amersfoort", parent: "NL-UT", coords: [5.408885, 52.16377], name: "Amersfoort", theme: "historic",
    description: {
      de: "Amersfoort ist eine historische Stadt in der Provinz Utrecht, bekannt für ihr gut erhaltenes mittelalterliches Zentrum und ihre Grachten.",
      hu: "Amersfoort történelmi város Utrecht tartományban, jól karbantartott középkori központjáról és csatornáiról ismert.",
      ro: "Amersfoort este un oraș istoric în provincia Utrecht, cunoscut pentru centrul său medieval bine conservat și pentru canalele sale.",
      en: "Amersfoort is a historic city in the province of Utrecht, known for its well-preserved medieval center and canals."
    },
    facts: {
      de: ["Das Koppelpoort ist ein berühmtes mittelalterliches Tor, das Land- und Wasserverteidigung kombiniert.", "Es ist ein wichtiger Eisenbahnknotenpunkt in den Niederlanden.", "Piet Mondrian, der berühmte Maler, wurde hier geboren."],
      hu: ["A Koppelpoort egy híres középkori kapu, amely szárazföldi és vízi védelmet is nyújtott.", "Ez egy fontos vasúti csomópont Hollandiában.", "Itt született Piet Mondrian, a híres festő."],
      ro: ["Koppelpoort este o poartă medievală faimoasă care combină apărările terestre și acvatice.", "Este un nod feroviar major în Țările de Jos.", "Piet Mondrian, celebrul pictor, s-a născut aici."],
      en: ["The Koppelpoort is a famous medieval gate combining land and water defenses.", "It is a major railway junction in the Netherlands.", "Piet Mondrian, the famous painter, was born here."]
    }
  },
  { id: "nl-amstelveen", parent: "NL-NH", coords: [4.859684, 52.302821], name: "Amstelveen", theme: "suburb",
    description: {
      de: "Amstelveen ist eine grüne Vorstadtgemeinde südlich von Amsterdam, die bei Expats sehr beliebt ist.",
      hu: "Amstelveen egy zöld külvárosi önkormányzat közvetlenül Amszterdamtól délre, nagyon népszerű a külföldiek körében.",
      ro: "Amstelveen este o municipalitate suburbană verde aflată la sud de Amsterdam, populară printre expatriați.",
      en: "Amstelveen is a green suburban municipality just south of Amsterdam, popular among expats."
    },
    facts: {
      de: ["Sie grenzt an den Amsterdamse Bos, einen großen künstlich angelegten Wald.", "Das Cobra Museum für moderne Kunst befindet sich hier.", "Sie dient als Hauptsitz für mehrere internationale Unternehmen."],
      hu: ["Határos az Amsterdamse Bos-szal, egy nagy mesterséges erdővel.", "Itt található a Cobra Modern Művészeti Múzeum.", "Több nemzetközi cég székhelyéül is szolgál."],
      ro: ["Se învecinează cu Amsterdamse Bos, o mare pădure artificială.", "Muzeul de Artă Modernă Cobra se află aici.", "Aici se află sediul mai multor companii internaționale."],
      en: ["It borders the Amsterdamse Bos, a large artificial forest.", "The Cobra Museum of Modern Art is located here.", "It serves as the headquarters for several international companies."]
    }
  },
  { id: "nl-apeldoorn", parent: "NL-GE", coords: [5.930078, 52.179574], name: "Apeldoorn", theme: "royal",
    description: {
      de: "Apeldoorn ist eine Stadt in der Mitte der Niederlande, umgeben von der natürlichen Schönheit der Veluwe-Region.",
      hu: "Apeldoorn egy város Közép-Hollandiában, a Veluwe régió természeti szépségeivel körülvéve.",
      ro: "Apeldoorn este un oraș în centrul Țărilor de Jos, înconjurat de frumusețea naturală a regiunii Veluwe.",
      en: "Apeldoorn is a city in the central Netherlands, surrounded by the natural beauty of the Veluwe region."
    },
    facts: {
      de: ["Das Paleis Het Loo, ein ehemaliger königlicher Palast, ist eine Hauptattraktion.", "Apenheul ist ein einzigartiger Zoo, der sich auf Primaten spezialisiert hat.", "Die Stadt ist bekannt für ihre großzügige Anlage und viele Parks."],
      hu: ["A Paleis Het Loo, egykori királyi palota, jelentős turisztikai látványosság.", "Az Apenheul egy egyedülálló, főemlősökre specializálódott állatkert.", "A város tágas elrendezéséről és sok parkjáról ismert."],
      ro: ["Paleis Het Loo, un fost palat regal, este o atracție majoră.", "Apenheul este o grădină zoologică unică, specializată în primate.", "Orașul este cunoscut pentru aspectul său spațios și pentru numeroasele parcuri."],
      en: ["Paleis Het Loo, a former royal palace, is a major attraction.", "Apenheul is a unique zoo specialized in primates.", "The city is known for its spacious layout and many parks."]
    }
  },
  { id: "nl-assen", parent: "NL-DR", coords: [6.560498, 52.995227], name: "Assen", theme: "capital",
    description: {
      de: "Assen ist die Hauptstadt der Provinz Drenthe, berühmt für ihre jährlichen Motorradrennen.",
      hu: "Assen Drenthe tartomány fővárosa, mely az évente megrendezett motorversenyekről híres.",
      ro: "Assen este capitala provinciei Drenthe, faimoasă pentru cursele anuale de motociclete.",
      en: "Assen is the capital of the province of Drenthe, famous for its annual motorcycle races."
    },
    facts: {
      de: ["Der TT Circuit Assen ist Austragungsort der Dutch TT, eines wichtigen MotoGP-Events.", "Das Drents Museum stellt prähistorische Artefakte aus, darunter Moorleichen.", "Es erhielt seine Stadtrechte relativ spät, im Jahr 1809."],
      hu: ["A TT Circuit Assen ad otthont a Dutch TT-nek, egy jelentős MotoGP eseménynek.", "A Drents Múzeum őskori leleteket állít ki, többek között mocsári múmiákat.", "A városi jogokat viszonylag későn, 1809-ben kapta meg."],
      ro: ["Circuitul TT Assen găzduiește Dutch TT, un eveniment major MotoGP.", "Muzeul Drents expune artefacte preistorice, inclusiv corpuri din mlaștină.", "A primit drepturile de oraș destul de târziu, în 1809."],
      en: ["The TT Circuit Assen hosts the Dutch TT, a major MotoGP event.", "The Drents Museum exhibits prehistoric artifacts, including bog bodies.", "It received city rights relatively late, in 1809."]
    }
  },
  { id: "nl-aalsmeer", parent: "NL-NH", coords: [4.749338, 52.266944], name: "Aalsmeer", theme: "flower",
    description: {
      de: "Aalsmeer ist eine Stadt in Nordholland, die weltweit als Zentrum des internationalen Blumenhandels bekannt ist.",
      hu: "Aalsmeer Észak-Hollandia egyik városa, amely a nemzetközi virágkereskedelem központjaként világszerte ismert.",
      ro: "Aalsmeer este un oraș în Olanda de Nord, renumit la nivel global ca centru al comerțului internațional cu flori.",
      en: "Aalsmeer is a town in North Holland, globally renowned as the center of the international flower trade."
    },
    facts: {
      de: ["Hier befindet sich Royal FloraHolland, das größte Blumenauktionsgebäude der Welt.", "Die Stadt liegt an den Westeinderplassen, einem Seenkomplex.", "Der Zierpflanzenbau ist der wichtigste Motor der Wirtschaft."],
      hu: ["Itt található a Royal FloraHolland, a világ legnagyobb virágárverési épülete.", "A város a Westeinderplassen tórendszer partján fekszik.", "A dísznövénytermesztés a gazdaság fő mozgatórugója."],
      ro: ["Găzduiește Royal FloraHolland, cea mai mare clădire de licitații de flori din lume.", "Orașul este situat pe Westeinderplassen, un complex de lacuri.", "Floricultura este principalul motor al economiei sale."],
      en: ["It hosts the Royal FloraHolland, the largest flower auction building in the world.", "The town is situated on the Westeinderplassen, a complex of lakes.", "Floriculture is the main driver of its economy."]
    }
  },
  { id: "nl-bergen-op-zoom", parent: "NL-NB", coords: [4.287154, 51.494476], name: "Bergen op Zoom", theme: "fortified",
    description: {
      de: "Bergen op Zoom ist eine alte Festungsstadt in Nordbrabant mit einem reichen kulturellen Erbe.",
      hu: "Bergen op Zoom egy régi erődváros Észak-Brabantban, gazdag kulturális örökséggel.",
      ro: "Bergen op Zoom este un vechi oraș fortificat din Brabantul de Nord, cu o bogată moștenire culturală.",
      en: "Bergen op Zoom is an old fortified city in North Brabant with a rich cultural heritage."
    },
    facts: {
      de: ["Der Markiezenhof ist ein wunderschöner spätgotischer Stadtpalast.", "Sie blickt auf eine lange Geschichte als Garnisonsstadt zurück.", "Der lokale Vastenavend (Karneval) wird mit einzigartigen Traditionen gefeiert."],
      hu: ["A Markiezenhof egy gyönyörű késő gótikus városi palota.", "Hosszú történelme van helyőrségi városként.", "A helyi Vastenavend (farsang) egyedülálló hagyományokkal ünnepelt."],
      ro: ["Markiezenhof este un frumos palat orășenesc în stil gotic târziu.", "Are o istorie lungă ca oraș de garnizoană.", "Vastenavend-ul (Carnavalul) local este sărbătorit cu tradiții unice."],
      en: ["The Markiezenhof is a beautiful late-gothic city palace.", "It has a long history as a garrison town.", "The local Vastenavend (Carnival) is celebrated with unique traditions."]
    }
  },
  { id: "nl-beverwijk", parent: "NL-NH", coords: [4.67284, 52.47879], name: "Beverwijk", theme: "market",
    description: {
      de: "Beverwijk ist eine Gemeinde in Nordholland, berühmt für ihren großen überdachten Markt.",
      hu: "Beverwijk Észak-Hollandia egyik községe, amely nagy fedett piacáról híres.",
      ro: "Beverwijk este o municipalitate în Olanda de Nord, faimoasă pentru marea sa piață acoperită.",
      en: "Beverwijk is a municipality in North Holland, famous for its large indoor market."
    },
    facts: {
      de: ["Der Beverwijkse Bazaar ist der größte überdachte Markt Europas.", "Sie ist Teil der IJmond-Region, die für ihre Stahlindustrie bekannt ist.", "Im nahe gelegenen Wijk aan Zee findet ein prestigeträchtiges jährliches Schachturnier statt."],
      hu: ["A Beverwijkse Bazaar Európa legnagyobb fedett piaca.", "Az acéliparáról ismert IJmond régió része.", "A közeli Wijk aan Zee ad otthont egy rangos éves sakkversenynek."],
      ro: ["Bazaarul Beverwijkse este cea mai mare piață interioară din Europa.", "Face parte din regiunea IJmond, cunoscută pentru industria sa siderurgică.", "În apropiere, Wijk aan Zee găzduiește un prestigios turneu anual de șah."],
      en: ["The Beverwijkse Bazaar is the largest indoor market in Europe.", "It is part of the IJmond region, known for its steel industry.", "The nearby Wijk aan Zee hosts a prestigious annual chess tournament."]
    }
  },
  { id: "nl-biddinghuizen", parent: "NL-FL", coords: [5.69216, 52.455222], name: "Biddinghuizen", theme: "events",
    description: {
      de: "Ein Dorf in der niederländischen Provinz Flevoland, das für die Ausrichtung von Großveranstaltungen bekannt ist. Es gehört zur Gemeinde Dronten.",
      hu: "Flevoland holland tartomány egyik faluja, amely nagy rendezvényeiről ismert. Dronten község része.",
      ro: "Un sat din provincia olandeză Flevoland, cunoscut pentru găzduirea de evenimente mari. Face parte din comuna Dronten.",
      en: "A village in the Dutch province of Flevoland, known for hosting large events. It is part of the municipality of Dronten."
    },
    facts: {
      de: ["Heimat des Freizeitparks Walibi Holland.", "Veranstaltungsort des Defqon.1-Musikfestivals.", "Liegt am Veluwemeer."],
      hu: ["A Walibi Holland vidámpark otthona.", "A Defqon.1 zenei fesztivál helyszíne.", "A Veluwemeer tó partján fekszik."],
      ro: ["Găzduiește parcul tematic Walibi Holland.", "Găzduiește festivalul de muzică Defqon.1.", "Situat pe lacul Veluwemeer."],
      en: ["Home to the Walibi Holland theme park.", "Hosts the Defqon.1 music festival.", "Located on the Veluwemeer lake."]
    }
  },
  { id: "nl-bolsward", parent: "NL-FR", coords: [5.522896, 53.062018], name: "Bolsward", theme: "historic",
    description: {
      de: "Eine historische Stadt in der Provinz Friesland, bekannt für ihre wunderschönen Grachten und Denkmäler. Sie ist eine der elf friesischen Städte.",
      hu: "Történelmi város Frízföld tartományban, amely gyönyörű csatornáiról és műemlékeiről ismert. A tizenegy fríz város egyike.",
      ro: "Un oraș istoric din provincia Friesland, cunoscut pentru canalele și monumentele sale frumoase. Este unul dintre cele unsprezece orașe frizone.",
      en: "A historical city in the province of Friesland, known for its beautiful canals and monuments. It is one of the eleven Frisian cities."
    },
    facts: {
      de: ["Berühmt für ihr Rathaus aus dem 17. Jahrhundert.", "Teil der berühmten Elfstedentocht-Schlittschuhtour.", "Beherbergt die Kirchenruine Broerekerk."],
      hu: ["Híres a 17. századi városházáról.", "A híres Elfstedentocht korcsolyatúra része.", "Itt található a romos Broerekerk templom."],
      ro: ["Faimos pentru primăria sa din secolul al XVII-lea.", "Face parte din faimosul turneu de patinaj pe gheață Elfstedentocht.", "Conține biserica ruinată Broerekerk."],
      en: ["Famous for its 17th-century town hall.", "Part of the famous Elfstedentocht ice skating tour.", "Contains the ruined Broerekerk church."]
    }
  },
  { id: "nl-barneveld", parent: "NL-GE", coords: [5.645439, 52.171507], name: "Barneveld", theme: "nature",
    description: {
      de: "Eine Gemeinde und Stadt in der Provinz Gelderland, zentral in den Niederlanden gelegen. Sie hat eine reiche landwirtschaftliche Geschichte.",
      hu: "Egy község és város Gelderland tartományban, Hollandia központi részén. Gazdag mezőgazdasági történelemmel rendelkezik.",
      ro: "O comună și un oraș din provincia Gelderland, situat central în Țările de Jos. Are o istorie agricolă bogată.",
      en: "A municipality and town in the province of Gelderland, centrally located in the Netherlands. It has a rich agricultural history."
    },
    facts: {
      de: ["Bekannt als Zentrum der niederländischen Geflügelindustrie.", "Beherbergt das Museum Oud Veluwe.", "Berühmt für die Turmsprunglegende von Jan van Schaffelaar."],
      hu: ["A holland baromfiipar központjaként ismert.", "Itt található az Oud Veluwe Múzeum.", "Híres Jan van Schaffelaar toronyugrásának legendájáról."],
      ro: ["Cunoscut ca centrul industriei avicole olandeze.", "Prezintă Muzeul Oud Veluwe.", "Faimos pentru legenda săriturii din turn a lui Jan van Schaffelaar."],
      en: ["Known as the center of the Dutch poultry industry.", "Features the Old Veluwe Museum.", "Famous for the Jan van Schaffelaar tower jump legend."]
    }
  },
  { id: "nl-culemborg", parent: "NL-GE", coords: [5.225304, 51.95735], name: "Culemborg", theme: "fortified",
    description: {
      de: "Eine Stadt in der Provinz Gelderland, am Fluss Lek gelegen. Sie verfügt über ein gut erhaltenes historisches Stadtzentrum.",
      hu: "Város Gelderland tartományban, a Lek folyó partján. Jól megőrzött történelmi városközponttal büszkélkedhet.",
      ro: "Un oraș din provincia Gelderland, situat pe râul Lek. Se mândrește cu un centru istoric bine conservat.",
      en: "A city in the province of Gelderland, situated on the river Lek. It boasts a well-preserved historical city center."
    },
    facts: {
      de: ["Bekannt für das beeindruckende Elisabeth-Weeshuis-Museum.", "War einst ein unabhängiger Stadtstaat, der Asyl gewährte.", "Verfügt über historische Stadttore wie das Binnenpoort."],
      hu: ["Ismert a lenyűgöző Elisabeth Weeshuis múzeumról.", "Egykor független városállam volt, amely menedéket nyújtott.", "Történelmi városkapukkal rendelkezik, mint például a Binnenpoort."],
      ro: ["Cunoscut pentru impresionantul său muzeu Elisabeth Weeshuis.", "A fost odată un oraș-stat independent care oferea azil.", "Prezintă porți istorice ale orașului, cum ar fi Binnenpoort."],
      en: ["Known for its impressive Elisabeth Weeshuis museum.", "Was once an independent city-state offering asylum.", "Features historical city gates like the Binnenpoort."]
    }
  },
  { id: "nl-dokkum", parent: "NL-FR", coords: [5.999231, 53.324351], name: "Dokkum", theme: "fortified",
    description: {
      de: "Eine Festungsstadt in der Provinz Friesland, berühmt für ihre reiche Geschichte und schönen Windmühlen. Sie ist die nördlichste der elf friesischen Städte.",
      hu: "Erődített város Frízföld tartományban, amely gazdag történelméről és gyönyörű szélmalmairól híres. A tizenegy fríz város legészakibbika.",
      ro: "Un oraș fortificat din provincia Friesland, renumit pentru istoria sa bogată și morile de vânt frumoase. Este cel mai nordic dintre cele unsprezece orașe frizone.",
      en: "A fortified town in the province of Friesland, famous for its rich history and beautiful windmills. It is the northernmost of the eleven Frisian cities."
    },
    facts: {
      de: ["Der Ort, an dem der Heilige Bonifatius im Jahr 754 den Märtyrertod starb.", "Bekannt für seine gut erhaltenen sternförmigen Befestigungsanlagen.", "Beherbergt die berühmten Windmühlen Zeldenrust und De Hoop."],
      hu: ["A hely, ahol Szent Bonifác vértanúhalált halt 754-ben.", "Jól megőrzött csillag alakú erődítményeiről ismert.", "Itt találhatók a híres Zeldenrust és De Hoop szélmalmok."],
      ro: ["Locul unde Sfântul Bonifaciu a fost martirizat în 754.", "Cunoscut pentru fortificațiile sale în formă de stea bine conservate.", "Conține faimoasele mori de vânt Zeldenrust și De Hoop."],
      en: ["The place where Saint Boniface was martyred in 754.", "Known for its well-preserved star-shaped fortifications.", "Contains the famous windmills Zeldenrust and De Hoop."]
    }
  },
  { id: "nl-doesburg", parent: "NL-GE", coords: [6.151558, 52.018751], name: "Doesburg", theme: "historic",
    description: {
      de: "Eine Hansestadt in der Provinz Gelderland, an der Mündung der Oude IJssel in die IJssel gelegen. Sie ist berühmt für ihr restauriertes historisches Zentrum.",
      hu: "Hanza-város Gelderland tartományban, ott, ahol az Oude IJssel az IJsselbe ömlik. Híres felújított történelmi központjáról.",
      ro: "Un oraș hanseatic din provincia Gelderland, situat la confluența râurilor Oude IJssel și IJssel. Este faimos pentru centrul său istoric restaurat.",
      en: "A Hanseatic city in the province of Gelderland, located where the Oude IJssel flows into the IJssel. It is famous for its restored historical center."
    },
    facts: {
      de: ["Bekannt als die Senfstadt der Niederlande.", "Beherbergt die Doesburger Senffabrik und das Senfmuseum.", "Verfügt über die beeindruckende Martinikerk mit ihrem hohen Turm."],
      hu: ["Hollandia mustárvárosaként ismert.", "Itt található a Doesburg Mustárgyár és Múzeum.", "Itt áll a lenyűgöző Martinikerk a magas tornyával."],
      ro: ["Cunoscut ca orașul muștarului din Olanda.", "Găzduiește Fabrica și Muzeul de Muștar Doesburg.", "Prezintă impresionanta biserică Martinikerk cu turnul său înalt."],
      en: ["Known as the mustard city of the Netherlands.", "Houses the Doesburg Mustard Factory and Museum.", "Features the impressive Martinikerk with its tall tower."]
    }
  },
  { id: "nl-dronten", parent: "NL-FL", coords: [5.716038, 52.523661], name: "Dronten", theme: "polder",
    description: {
      de: "Eine Gemeinde und Stadt in der Provinz Flevoland, die in den 1960er Jahren auf gewonnenem Land erbaut wurde. Sie zeichnet sich durch moderne Architektur und eine großzügige Anlage aus.",
      hu: "Község és város Flevoland tartományban, amelyet a 60-as években építettek a tengertől elhódított területen. Modern építészet és tágas elrendezés jellemzi.",
      ro: "O comună și un oraș din provincia Flevoland, construit pe teren recuperat în anii 1960. Se caracterizează prin arhitectură modernă și un aspect spațios.",
      en: "A municipality and town in the province of Flevoland, built on reclaimed land in the 1960s. It features modern architecture and a spacious layout."
    },
    facts: {
      de: ["Auf dem Polder Oostelijk Flevoland entstanden.", "Bekannt für das Kulturzentrum De Meerpaal.", "Umgeben von landwirtschaftlichen Flächen und Wäldern."],
      hu: ["Az Oostelijk Flevoland polderen hozták létre.", "Ismert a De Meerpaal kulturális központról.", "Mezőgazdasági területek és erdők veszik körül."],
      ro: ["Creat pe polderul Oostelijk Flevoland.", "Cunoscut pentru centrul cultural De Meerpaal.", "Înconjurat de terenuri agricole și păduri."],
      en: ["Created on the polder of Oostelijk Flevoland.", "Known for the Meerpaal cultural center.", "Surrounded by agricultural land and forests."]
    }
  },
  { id: "nl-ede", parent: "NL-GE", coords: [5.745511, 52.071683], name: "Ede", theme: "nature",
    description: {
      de: "Eine große Gemeinde und Stadt in der Provinz Gelderland, in der Nähe des Veluwe-Waldes gelegen. Sie ist ein wichtiger Knotenpunkt für den Tourismus und Naturliebhaber.",
      hu: "Nagy község és város Gelderland tartományban, a Veluwe erdő közelében. A turizmus és a természetkedvelők fontos központja.",
      ro: "O comună mare și un oraș din provincia Gelderland, situat în apropierea pădurii Veluwe. Este un hub major pentru turism și iubitorii de natură.",
      en: "A large municipality and town in the province of Gelderland, situated near the Veluwe forest. It is a major hub for tourism and nature lovers."
    },
    facts: {
      de: ["In der Nähe des Nationalparks De Hoge Veluwe.", "Das Kröller-Müller-Museum befindet sich in der Nähe.", "Bekannt für die historischen Luftlandungen während des Zweiten Weltkriegs."],
      hu: ["A Hoge Veluwe Nemzeti Park közelében fekszik.", "A közelben található a Kröller-Müller Múzeum.", "Ismert a második világháború alatti történelmi légideszant-hadműveletekről."],
      ro: ["Aproape de Parcul Național Hoge Veluwe.", "Muzeul Kröller-Müller se află în apropiere.", "Cunoscut pentru aterizările aeropurtate istorice din timpul celui de-al Doilea Război Mondial."],
      en: ["Close to the Hoge Veluwe National Park.", "Features the Kröller-Müller Museum nearby.", "Known for its historical airborne landings during WWII."]
    }
  },
  { id: "nl-edam", parent: "NL-NH", coords: [5.056285, 52.511912], name: "Edam", theme: "historic",
    description: {
      de: "Edam ist eine Stadt in Nordholland, weltweit berühmt für ihren Käse in roter Wachshülle.",
      hu: "Edam egy észak-hollandiai város, amely világszerte híres a piros viaszba csomagolt sajtjáról.",
      ro: "Edam este un oraș din Olanda de Nord, faimos în întreaga lume pentru brânza sa acoperită cu ceară roșie.",
      en: "Edam is a town in North Holland, famous worldwide for its cheese covered in red wax."
    },
    facts: {
      de: ["Bekannt für seinen historischen Käsemarkt.", "Hat eine reiche Geschichte im Schiffbau.", "Liegt in der Nähe des Markermeers."],
      hu: ["Történelmi sajtpiacáról ismert.", "Gazdag hajóépítő múlttal rendelkezik.", "A Markermeer közelében található."],
      ro: ["Cunoscut pentru piața sa istorică de brânză.", "Are o istorie bogată în construcția de nave.", "Situat în apropiere de Markermeer."],
      en: ["Known for its historical cheese market.", "Has a rich history of shipbuilding.", "Located near the Markermeer."]
    }
  },
  { id: "nl-elburg", parent: "NL-GE", coords: [5.841322, 52.415659], name: "Elburg", theme: "fortified",
    description: {
      de: "Elburg ist eine bezaubernde Festungsstadt in Gelderland mit einem gut erhaltenen mittelalterlichen Straßennetz.",
      hu: "Elburg egy bájos erődváros Gelderlandban, jól megőrzött középkori utcaszerkezettel.",
      ro: "Elburg este un fermecător oraș fortificat din Gelderland, cu un plan stradal medieval bine conservat.",
      en: "Elburg is a charming fortified town in Gelderland with a well-preserved medieval street plan."
    },
    facts: {
      de: ["Verfügt über ein rechteckiges mittelalterliches Straßenraster.", "Einst ein wichtiger Fischereihafen an der Zuiderzee.", "Bekannt für seine historische Vischpoort."],
      hu: ["Téglalap alakú középkori utcahálózattal rendelkezik.", "Egykor fontos halászkikötő volt a Zuiderzee partján.", "Történelmi Vischpoort kapujáról ismert."],
      ro: ["Prezintă o rețea stradală medievală dreptunghiulară.", "A fost odată un important port de pescuit la Zuiderzee.", "Cunoscut pentru poarta sa istorică Vischpoort."],
      en: ["Features a rectangular medieval street grid.", "Once an important fishing port on the Zuiderzee.", "Known for its historical Vischpoort."]
    }
  },
  { id: "nl-emmen", parent: "NL-DR", coords: [6.952514, 52.752866], name: "Emmen", theme: "nature",
    description: {
      de: "Emmen ist eine Stadt in Drenthe, bekannt für ihre Grünflächen und den beliebten Wildlands Adventure Zoo.",
      hu: "Emmen egy Drenthe megyei város, amely zöldterületeiről és a népszerű Wildlands Kalandparkról ismert.",
      ro: "Emmen este un oraș din Drenthe, cunoscut pentru spațiile sale verzi și popularul parc zoologic Wildlands Adventure.",
      en: "Emmen is a city in Drenthe, known for its green spaces and the popular Wildlands Adventure Zoo."
    },
    facts: {
      de: ["Heimat des Wildlands Adventure Zoo.", "Verfügt über viele Grünflächen und Parks.", "Eine Planstadt, die im 20. Jahrhundert erweitert wurde."],
      hu: ["Itt található a Wildlands Adventure Zoo.", "Számos zöldterülettel és parkkal rendelkezik.", "A 20. században bővített tervezett város."],
      ro: ["Găzduiește Wildlands Adventure Zoo.", "Prezintă multe zone verzi și parcuri.", "Un oraș planificat, extins în secolul al XX-lea."],
      en: ["Home to Wildlands Adventure Zoo.", "Features many green areas and parks.", "A planned city expanded in the 20th century."]
    }
  },
  { id: "nl-emmeloord", parent: "NL-FL", coords: [5.746637, 52.708745], name: "Emmeloord", theme: "polder",
    description: {
      de: "Emmeloord ist das Verwaltungszentrum des Noordoostpolders, das Mitte des 20. Jahrhunderts auf Neuland erbaut wurde.",
      hu: "Emmeloord a Noordoostpolder közigazgatási központja, amely a 20. század közepén tengertől elhódított területen épült.",
      ro: "Emmeloord este centrul administrativ al Noordoostpolder, construit pe teren recuperat la mijlocul secolului al XX-lea.",
      en: "Emmeloord is the administrative center of the Noordoostpolder, built on reclaimed land in the mid-20th century."
    },
    facts: {
      de: ["Liegt im Zentrum des Noordoostpolders.", "Verfügt über den ikonischen Wasserturm Poldertoren.", "Konzipiert als zentraler Knotenpunkt für umliegende landwirtschaftliche Dörfer."],
      hu: ["A Noordoostpolder központjában található.", "Ikonikus építménye a Poldertoren víztorony.", "A környező mezőgazdasági falvak központi csomópontjának tervezték."],
      ro: ["Situat în centrul Noordoostpolder.", "Are emblematicul turn de apă Poldertoren.", "Proiectat ca un hub central pentru satele agricole înconjurătoare."],
      en: ["Located in the center of the Noordoostpolder.", "Features the iconic Poldertoren water tower.", "Designed as the central hub for surrounding agricultural villages."]
    }
  },
  { id: "nl-enkhuizen", parent: "NL-NH", coords: [5.320694, 52.75772], name: "Enkhuizen", theme: "port",
    description: {
      de: "Enkhuizen ist eine malerische Hafenstadt in Nordholland, eng verbunden mit der Geschichte der Niederländischen Ostindien-Kompanie.",
      hu: "Enkhuizen festői kikötőváros Észak-Hollandiában, amely szorosan kötődik a Holland Kelet-indiai Társaság történelméhez.",
      ro: "Enkhuizen este un oraș-port pitoresc din Olanda de Nord, profund legat de istoria Companiei Olandeze a Indiilor de Est.",
      en: "Enkhuizen is a picturesque port town in North Holland, deeply connected to the history of the Dutch East India Company."
    },
    facts: {
      de: ["Heimat des Zuiderzeemuseums.", "War im 17. Jahrhundert eine sehr wohlhabende Stadt.", "Verfügt über einen schönen historischen Hafen."],
      hu: ["Itt található a Zuiderzee Múzeum.", "A 17. században rendkívül virágzó város volt.", "Gyönyörű történelmi kikötővel rendelkezik."],
      ro: ["Găzduiește Muzeul Zuiderzee.", "A fost un oraș foarte prosper în secolul al XVII-lea.", "Are un port istoric frumos."],
      en: ["Home to the Zuiderzee Museum.", "Was a very prosperous city in the 17th century.", "Features a beautiful historic harbor."]
    }
  },
  { id: "nl-etten-leur", parent: "NL-NB", coords: [4.636081, 51.569206], name: "Etten-Leur", theme: "industrial",
    description: {
      de: "Etten-Leur ist eine Stadt in Nordbrabant, bekannt für ihre frühe Verbindung zum berühmten Maler Vincent van Gogh.",
      hu: "Etten-Leur egy város Észak-Brabantban, amely a híres festővel, Vincent van Gogh-gal való korai kapcsolatáról ismert.",
      ro: "Etten-Leur este un oraș din Brabantul de Nord, cunoscut pentru asocierea sa timpurie cu faimosul pictor Vincent van Gogh.",
      en: "Etten-Leur is a town in North Brabant, noted for its early association with the famous painter Vincent van Gogh."
    },
    facts: {
      de: ["Vincent van Gogh hatte hier sein erstes Atelier.", "Verfügt über eine Van Gogh Kirche und ein Denkmal.", "Eine moderne Stadt mit einem starken Industrie- und Einzelhandelssektor."],
      hu: ["Vincent van Gogh-nak itt volt az első műterme.", "Itt található a Van Gogh templom és emlékmű.", "Modern város erős ipari és kiskereskedelmi szektorral."],
      ro: ["Vincent van Gogh a avut primul său studio aici.", "Are o biserică și un monument Van Gogh.", "Un oraș modern, cu un puternic sector industrial și de retail."],
      en: ["Vincent van Gogh had his first studio here.", "Features a Van Gogh church and monument.", "A modern town with a strong industrial and retail sector."]
    }
  },
  { id: "nl-franeker", parent: "NL-FR", coords: [5.540965, 53.188051], name: "Franeker", theme: "university",
    description: {
      de: "Franeker ist eine historische Stadt in Friesland, einst Sitz der zweitältesten Universität der Niederlande.",
      hu: "Franeker egy történelmi város Frízföldön, amely egykor Hollandia második legrégebbi egyetemének adott otthont.",
      ro: "Franeker este un oraș istoric din Friesland, care a găzduit cândva a doua cea mai veche universitate din Țările de Jos.",
      en: "Franeker is a historic city in Friesland, once home to the second-oldest university in the Netherlands."
    },
    facts: {
      de: ["Beherbergt das Königliche Eise-Eisinga-Planetarium, das älteste noch funktionierende Planetarium.", "War von 1585 bis 1811 eine bedeutende Universitätsstadt.", "Eine der traditionellen elf friesischen Städte."],
      hu: ["Itt működik a Királyi Eise Eisinga Planetárium, a világ legrégebbi működő planetáriuma.", "Kiemelkedő egyetemváros volt 1585 és 1811 között.", "A hagyományos tizenegy fríz város egyike."],
      ro: ["Găzduiește Planetariul Regal Eise Eisinga, cel mai vechi planetariu funcțional.", "A fost un oraș universitar proeminent din 1585 până în 1811.", "Unul dintre cele unsprezece orașe tradiționale frizone."],
      en: ["Houses the Royal Eise Eisinga Planetarium, the oldest working planetarium.", "Was a prominent university city from 1585 to 1811.", "One of the traditional eleven Frisian cities."]
    }
  },
  { id: "nl-gorinchem", parent: "NL-ZH", coords: [4.973874, 51.829613], name: "Gorinchem", theme: "fortified",
    description: {
      de: "Gorinchem ist eine Festungsstadt am Fluss Linge mit wunderschön erhaltenen historischen Wällen.",
      hu: "Gorinchem erődváros a Linge folyó mentén, gyönyörűen megőrzött történelmi sáncokkal.",
      ro: "Gorinchem este un oraș fortificat de-a lungul râului Linge, cu metereze istorice frumos conservate.",
      en: "Gorinchem is a fortified city along the river Linge, with beautifully preserved historic ramparts."
    },
    facts: {
      de: ["Wurde zur schönsten Festungsstadt der Niederlande gewählt.", "Liegt am Zusammenfluss der Flüsse Linge und Merwede.", "Verfügt über historische Windmühlen und eine starke Festungsmauer."],
      hu: ["Hollandia legszebb erődvárosának választották.", "A Linge és a Merwede folyók találkozásánál fekszik.", "Történelmi szélmalmokkal és erős várfallal rendelkezik."],
      ro: ["Votat cel mai frumos oraș fortificat din Țările de Jos.", "Se află la intersecția râurilor Linge și Merwede.", "Are mori de vânt istorice și un puternic zid de fortăreață."],
      en: ["Voted the most beautiful fortified city in the Netherlands.", "Lies at the junction of the Linge and Merwede rivers.", "Features historic windmills and a strong fortress wall."]
    }
  },
  { id: "nl-harderwijk", parent: "NL-GE", coords: [5.618933, 52.349069], name: "Harderwijk", theme: "historic",
    description: {
      de: "Harderwijk ist eine historische Hansestadt am Veluwemeer, die eine reiche Vergangenheit mit moderner Erholung verbindet.",
      hu: "Harderwijk egy történelmi Hanza-város a Veluwemeer partján, amely ötvözi a gazdag múltat a modern rekreációval.",
      ro: "Harderwijk este un oraș istoric hanseatic pe Veluwemeer, îmbinând un trecut bogat cu recreerea modernă.",
      en: "Harderwijk is a historic Hanseatic city on the Veluwemeer, blending a rich past with modern recreation."
    },
    facts: {
      de: ["Ehemals eine Universitätsstadt, in der Linnaeus seinen Abschluss machte.", "Bekannt für seine historischen Stadtmauern und Tore.", "Ein beliebtes Ziel für Wassersport und Gastronomie."],
      hu: ["Korábban egyetemi város volt, ahol Linnaeus is diplomázott.", "Történelmi városfalairól és kapuiról híres.", "Népszerű célpont a vízi sportok és a gasztronómia kedvelőinek."],
      ro: ["Fost oraș universitar unde a absolvit Linnaeus.", "Cunoscut pentru zidurile și porțile sale istorice.", "O destinație populară pentru sporturi nautice și luat masa."],
      en: ["Formerly a university city where Linnaeus graduated.", "Well known for its historic city walls and gates.", "A popular destination for water sports and dining."]
    }
  },
  { id: "nl-heerenveen", parent: "NL-FR", coords: [5.923149, 52.998474], name: "Heerenveen", theme: "sports",
    description: {
      de: "Heerenveen ist eine bedeutende Sportstadt in Friesland, berühmt für ihr Eisstadion und ihren Fußballverein.",
      hu: "Heerenveen egy jelentős sportváros Frízföldön, amely jégcsarnokáról és futballklubjáról híres.",
      ro: "Heerenveen este un proeminent oraș sportiv din Friesland, renumit pentru arena sa de patinaj și clubul de fotbal.",
      en: "Heerenveen is a prominent sports town in Friesland, renowned for its ice skating arena and football club."
    },
    facts: {
      de: ["Heimat der Eisarena Thialf, einem wichtigen Austragungsort für Eisschnelllauf.", "Verfügt über den Fußballverein sc Heerenveen.", "Bekannt als die älteste Moorkolonie der Niederlande."],
      hu: ["A Thialf jégcsarnok, a gyorskorcsolyázás egyik fő helyszíne.", "Itt működik az sc Heerenveen futballklub.", "Hollandia legrégebbi tőzegkolóniájaként ismert."],
      ro: ["Găzduiește arena de gheață Thialf, o locație majoră pentru patinajul viteză.", "Are clubul de fotbal sc Heerenveen.", "Cunoscută ca cea mai veche colonie de turbă din Țările de Jos."],
      en: ["Home to the Thialf ice arena, a major venue for speed skating.", "Features the sc Heerenveen football club.", "Known as the oldest peat colony in the Netherlands."]
    }
  },
  { id: "nl-heerlen", parent: "NL-LI", coords: [5.981507, 50.877524], name: "Heerlen", theme: "industrial",
    description: {
      de: "Heerlen ist eine Stadt in Limburg mit einem starken römischen Erbe und einer bedeutenden Geschichte des Kohlebergbaus.",
      hu: "Heerlen egy Limburgi város erős római örökséggel és jelentős szénbányászati múlttal.",
      ro: "Heerlen este un oraș din Limburg cu o puternică moștenire romană și o istorie semnificativă a mineritului de cărbune.",
      en: "Heerlen is a city in Limburg with a strong Roman heritage and a significant history of coal mining."
    },
    facts: {
      de: ["Verfügt über das Thermenmuseum mit gut erhaltenen Überresten römischer Bäder.", "War ein wichtiges Zentrum der niederländischen Kohlebergbauindustrie.", "Bekannt für seine moderne Straßenkunst und den kulturellen Wandel."],
      hu: ["A Thermenmuseum a római fürdők jól megőrzött maradványait mutatja be.", "A holland szénbányászati ipar egyik fő központja volt.", "Modern utcai művészetéről és kulturális átalakulásáról ismert."],
      ro: ["Găzduiește Thermenmuseum cu rămășițe bine conservate ale băilor romane.", "A fost un centru major pentru industria olandeză de exploatare a cărbunelui.", "Cunoscut pentru arta sa stradală modernă și transformarea culturală."],
      en: ["Features the Thermenmuseum with well-preserved Roman bath remains.", "Was a major center for the Dutch coal mining industry.", "Known for its modern street art and cultural transformation."]
    }
  },
  { id: "nl-helmond", parent: "NL-NB", coords: [5.655769, 51.479096], name: "Helmond", theme: "industrial",
    description: {
      de: "Helmond ist eine Industriestadt in Nordbrabant, geprägt von ihrer markanten Architektur und ihrem historischen Schloss.",
      hu: "Helmond egy ipari város Észak-Brabantban, amelyet feltűnő építészete és történelmi kastélya jellemez.",
      ro: "Helmond este un oraș industrial din Brabantul de Nord, caracterizat de arhitectura sa izbitoare și de castelul istoric.",
      en: "Helmond is an industrial city in North Brabant, characterized by its striking architecture and historical castle."
    },
    facts: {
      de: ["Heimat des mittelalterlichen Schlosses Helmond im Stadtzentrum.", "Verfügt über die markanten Würfelhäuser, entworfen von Piet Blom.", "Hat eine lange Geschichte in der Textil- und Metallindustrie."],
      hu: ["A középkori Helmondi kastély a városközpontban található.", "Itt láthatók a Piet Blom által tervezett különleges kockaházak.", "Nagy múltra tekint vissza a textil- és fémiparban."],
      ro: ["Găzduiește castelul medieval Helmond în centrul orașului.", "Are casele cubice izbitoare proiectate de Piet Blom.", "Are o lungă istorie în industria textilă și metalurgică."],
      en: ["Home to the medieval Helmond Castle in the city center.", "Features the striking cubic houses designed by Piet Blom.", "Has a long history in the textile and metal industries."]
    }
  },
  { id: "nl-hengelo", parent: "NL-OV", coords: [6.795526, 52.252319], name: "Hengelo", theme: "industrial",
    description: {
      de: "Hengelo ist eine Stadt in der Region Twente in Overijssel, historisch ein wichtiges Zentrum für die Metall- und Elektroindustrie.",
      hu: "Hengelo egy város Overijssel Twente régiójában, történelmileg a fém- és villamosipar egyik fő központja.",
      ro: "Hengelo este un oraș din regiunea Twente din Overijssel, din punct de vedere istoric un hub major pentru industria metalurgică și electrică.",
      en: "Hengelo is a city in the Twente region of Overijssel, historically a major hub for the metal and electrical industries."
    },
    facts: {
      de: ["Entwickelte sich während der industriellen Revolution stark.", "Bekannt für seine technische Innovation und Fertigung.", "Ein wichtiger Eisenbahnknotenpunkt in den östlichen Niederlanden."],
      hu: ["Az ipari forradalom idején erősen fejlődött.", "Technológiai innovációjáról és gyártásáról ismert.", "Fontos vasúti csomópont Kelet-Hollandiában."],
      ro: ["S-a dezvoltat puternic în timpul revoluției industriale.", "Cunoscut pentru inovația tehnică și producție.", "Un important nod feroviar în estul Țărilor de Jos."],
      en: ["Developed strongly during the industrial revolution.", "Known for its technical innovation and manufacturing.", "An important railway junction in the eastern Netherlands."]
    }
  },
  { id: "nl-hoorn", parent: "NL-NH", coords: [5.07358, 52.653272], name: "Hoorn", theme: "port",
    description: {
      de: "Hoorn ist eine historische Hafenstadt am Markermeer, die bekanntermaßen dem Kap Hoorn seinen Namen gab.",
      hu: "Hoorn egy történelmi kikötőváros a Markermeer partján, amelyről a Horn-fokot elnevezték.",
      ro: "Hoorn este un oraș-port istoric de pe Markermeer, faimos pentru că a dat numele Capului Horn.",
      en: "Hoorn is a historic port city on the Markermeer, famously lending its name to Cape Horn."
    },
    facts: {
      de: ["Eine bedeutende Stadt während des Goldenen Zeitalters der Niederlande.", "Kap Hoorn an der Spitze Südamerikas ist nach dieser Stadt benannt.", "Verfügt über einen gut erhaltenen Hafen mit monumentalen Gebäuden."],
      hu: ["Kiemelkedő város volt a holland aranykorban.", "A Dél-Amerika csücskén található Horn-fokot erről a városról nevezték el.", "Jól megőrzött kikötővel és monumentális épületekkel rendelkezik."],
      ro: ["Un oraș proeminent în timpul Epocii de Aur Olandeze.", "Capul Horn de la vârful Americii de Sud este numit după acest oraș.", "Are un port bine conservat, cu clădiri monumentale."],
      en: ["A prominent city during the Dutch Golden Age.", "Cape Horn at the tip of South America is named after this city.", "Features a well-preserved harbor with monumental buildings."]
    }
  },
  { id: "nl-huizen", parent: "NL-NH", coords: [5.256721, 52.295812], name: "Huizen", theme: "coastal",
    description: {
      de: "Huizen ist eine Küstenstadt in Nordholland, bekannt für ihre traditionelle Tracht und ihre Vergangenheit als Fischerdorf.",
      hu: "Huizen tengerparti város Észak-Hollandiában, amely hagyományos népviseletéről és halászfalusi múltjáról ismert.",
      ro: "Huizen este un oraș de coastă din Olanda de Nord, recunoscut pentru îmbrăcămintea tradițională locală și trecutul ca sat de pescari.",
      en: "Huizen is a coastal town in North Holland, recognized for its traditional local dress and past as a fishing village."
    },
    facts: {
      de: ["Der Name bedeutet auf Deutsch 'Häuser'.", "Einst ein bedeutendes Fischerdorf an der Zuiderzee.", "Bekannt für seine einzigartigen traditionellen Kostüme."],
      hu: ["A neve magyarul annyit tesz: 'Házak'.", "Egykor kiemelkedő halászfalu volt a Zuiderzee partján.", "Egyedülálló hagyományos viseleteiről ismert."],
      ro: ["Se traduce prin 'Case' în română.", "A fost odată un sat de pescari proeminent pe Zuiderzee.", "Cunoscut pentru costumele sale tradiționale unice."],
      en: ["Translates to 'Houses' in English.", "Once a prominent fishing village on the Zuiderzee.", "Known for its unique traditional costumes."]
    }
  },
  { id: "nl-kampen", parent: "NL-OV", coords: [5.90333, 52.555948], name: "Kampen", theme: "historic",
    description: {
      de: "Kampen ist eine wunderschön erhaltene Hansestadt an den Ufern der IJssel.",
      hu: "Kampen egy gyönyörűen megőrzött Hanza-város az IJssel folyó partján.",
      ro: "Kampen este un oraș hanseatic frumos conservat, situat pe malurile râului IJssel.",
      en: "Kampen is a beautifully preserved Hanseatic city located on the banks of the river IJssel."
    },
    facts: {
      de: ["Eines der am besten erhaltenen historischen Stadtzentren der Niederlande.", "Verfügt über drei alte Stadttore, darunter das Koornmarktspoort.", "Historisch wohlhabend durch seine Position in der Hanse."],
      hu: ["Hollandia egyik legjobban megőrzött történelmi városközpontja.", "Három ősi városkapuval rendelkezik, köztük a Koornmarktspoorttal.", "Történelmileg gazdag volt a Hanza-szövetségben elfoglalt helye miatt."],
      ro: ["Unul dintre cele mai bine conservate centre istorice din Țările de Jos.", "Prezintă trei porți antice ale orașului, inclusiv Koornmarktspoort.", "Din punct de vedere istoric bogat datorită poziției sale în Liga Hanseatică."],
      en: ["One of the best-preserved historical city centers in the Netherlands.", "Features three ancient city gates, including the Koornmarktspoort.", "Historically wealthy due to its position in the Hanseatic League."]
    }
  },
  { id: "nl-katwijk", parent: "NL-ZH", coords: [4.414558, 52.189855], name: "Katwijk", theme: "coastal",
    description: {
      de: "Katwijk ist eine Küstengemeinde in Südholland, beliebt für ihre breiten Strände und Badeorte.",
      hu: "Katwijk egy tengerparti község Dél-Hollandiában, amely széles strandjairól és tengerparti üdülőhelyeiről népszerű.",
      ro: "Katwijk este o comună de coastă din Olanda de Sud, populară pentru plajele sale largi și stațiunile balneare.",
      en: "Katwijk is a coastal municipality in South Holland, popular for its wide beaches and seaside resorts."
    },
    facts: {
      de: ["Ein traditionelles Fischerdorf, das sich zu einem Badeort entwickelt hat.", "Verfügt über einen markanten Leuchtturm an der Nordseeküste.", "Beherbergt eine große in die Dünen gebaute Küstenschutzinfrastruktur."],
      hu: ["Hagyományos halászfalu, amely tengerparti üdülőhellyé alakult.", "Kiemelkedő világítótoronnyal rendelkezik az Északi-tenger partján.", "A dűnékbe épített hatalmas partvédelmi infrastruktúrának ad otthont."],
      ro: ["Un sat de pescari tradițional care a evoluat într-o stațiune balneară.", "Are un far proeminent pe coasta Mării Nordului.", "Găzduiește o mare infrastructură de apărare pe coastă construită în dune."],
      en: ["A traditional fishing village that evolved into a seaside resort.", "Features a prominent lighthouse on the North Sea coast.", "Home to a large coastal defense infrastructure built into the dunes."]
    }
  },
  { id: "nl-kerkrade", parent: "NL-LI", coords: [6.059385, 50.874909], name: "Kerkrade", theme: "border",
    description: {
      de: "Kerkrade ist eine Stadt in Limburg, direkt an der deutschen Grenze gelegen, bekannt für ihre Bergbauvergangenheit und internationale Musikfestivals.",
      hu: "Kerkrade egy város Limburgban, közvetlenül a német határon, amely szénbányászati múltjáról és nemzetközi zenei fesztiváljairól ismert.",
      ro: "Kerkrade este un oraș din Limburg, situat chiar la granița cu Germania, cunoscut pentru trecutul său minier și festivalurile internaționale de muzică.",
      en: "Kerkrade is a town in Limburg, situated right on the German border, known for its coal mining past and international music festivals."
    },
    facts: {
      de: ["Teilt sich eine Grenzstraße (Nieuwstraat/Neustraße) mit Herzogenrath in Deutschland.", "Austragungsort des World Music Contest, eines bedeutenden internationalen Blasmusikfestivals.", "Heimat des preisgekrönten GaiaZOO."],
      hu: ["Határutcán (Nieuwstraat/Neustraße) osztozik a németországi Herzogenrath-tal.", "A World Music Contest nemzetközi fúvószenekari fesztivál otthona.", "Itt található a díjnyertes GaiaZOO állatkert."],
      ro: ["Împarte o stradă de graniță (Nieuwstraat/Neustraße) cu Herzogenrath în Germania.", "Găzduiește World Music Contest, un festival internațional major pentru fanfare.", "Găzduiește premiatul GaiaZOO."],
      en: ["Shares a border street (Nieuwstraat/Neustraße) with Herzogenrath in Germany.", "Hosts the World Music Contest, a major international brass band festival.", "Home to the award-winning GaiaZOO."]
    }
  },
  { id: "nl-leeuwarden", parent: "NL-FR", coords: [5.791855, 53.200594], name: "Leeuwarden", theme: "capital",
    description: {
      de: "Leeuwarden ist die Hauptstadt von Friesland, bekannt für ihr historisches Zentrum und ihren ikonischen schiefen Turm.",
      hu: "Leeuwarden Frízföld fővárosa, történelmi központjáról és ikonikus ferde tornyáról ismert.",
      ro: "Leeuwarden este capitala provinciei Friesland, cunoscută pentru centrul său istoric și turnul său înclinat.",
      en: "Leeuwarden is the capital city of Friesland, known for its historic center and its iconic leaning tower."
    },
    facts: {
      de: ["War im Jahr 2018 die Kulturhauptstadt Europas.", "Der Oldehove ist ein bekanntermaßen schiefer, unvollendeter Kirchturm.", "Geburtsort der berühmten Spionin Mata Hari."],
      hu: ["2018-ban Európa Kulturális Fővárosa volt.", "Az Oldehove egy híresen ferde, befejezetlen templomtorony.", "Itt született a híres kém, Mata Hari."],
      ro: ["A fost Capitala Europeană a Culturii în 2018.", "Oldehove este un faimos turn de biserică înclinat și neterminat.", "Locul de naștere al faimoasei spioane Mata Hari."],
      en: ["Was the European Capital of Culture in 2018.", "The Oldehove is a famously leaning, unfinished church tower.", "Birthplace of the famous spy Mata Hari."]
    }
  },
  { id: "nl-lelystad", parent: "NL-FL", coords: [5.361044, 52.536681], name: "Lelystad", theme: "capital",
    description: {
      de: "Lelystad ist die Hauptstadt von Flevoland, eine Planstadt, die in den 1960er Jahren vollständig auf Neuland erbaut wurde.",
      hu: "Lelystad Flevoland fővárosa, amelyet az 1960-as években építettek a tengertől elhódított területen.",
      ro: "Lelystad este capitala provinciei Flevoland, un oraș planificat construit în întregime pe teren recuperat în anii 1960.",
      en: "Lelystad is the capital of Flevoland, a planned city built entirely on reclaimed land in the 1960s."
    },
    facts: {
      de: ["Benannt nach Cornelis Lely, dem Ingenieur der Zuiderzeewerke.", "Verfügt über das Fashion Outlet Batavia Stad.", "Heimat eines Nachbaus des Schiffes Batavia aus dem 17. Jahrhundert."],
      hu: ["Cornelis Lelyről, a Zuiderzee-munkálatok mérnökéről nevezték el.", "Itt található a Batavia Stad outlet központ.", "Otthont ad a 17. századi Batavia hajó másolatának."],
      ro: ["Numit după Cornelis Lely, inginerul din spatele Lucrărilor Zuiderzee.", "Are centrul comercial de modă Batavia Stad.", "Găzduiește o replică a navei Batavia din secolul al XVII-lea."],
      en: ["Named after Cornelis Lely, the engineer behind the Zuiderzee Works.", "Features the Batavia Stad fashion outlet.", "Home to a replica of the 17th-century ship Batavia."]
    }
  },
  { id: "nl-lisse", parent: "NL-ZH", coords: [4.563033, 52.25761], name: "Lisse", theme: "flower",
    description: {
      de: "Lisse ist eine Stadt in Südholland, international berühmt für den Blumengarten Keukenhof.",
      hu: "Lisse Dél-Hollandia egyik városa, amely a Keukenhof virágoskertről nemzetközileg is híres.",
      ro: "Lisse este un oraș din Olanda de Sud, faimos la nivel internațional pentru grădina de flori Keukenhof.",
      en: "Lisse is a town in South Holland, internationally famous for the Keukenhof flower garden."
    },
    facts: {
      de: ["Heimat des Keukenhofs, eines der größten Blumengärten der Welt.", "Umgeben von weiten Feldern mit Tulpen und anderen Frühlingsblumen.", "Hat eine reiche Geschichte, die mit dem Blumenzwiebelanbau verbunden ist."],
      hu: ["Itt található a Keukenhof, a világ egyik legnagyobb virágoskertje.", "Hatalmas tulipán- és egyéb tavaszi virágmezők veszik körül.", "Gazdag történelme szorosan kapcsolódik a virághagymatermesztéshez."],
      ro: ["Găzduiește Keukenhof, una dintre cele mai mari grădini de flori din lume.", "Înconjurat de câmpuri vaste de lalele și alte flori de primăvară.", "Are o istorie bogată legată de industria de creștere a bulbilor."],
      en: ["Home to the Keukenhof, one of the world's largest flower gardens.", "Surrounded by vast fields of tulips and other spring flowers.", "Has a rich history connected to the bulb-growing industry."]
    }
  },
  { id: "nl-maassluis", parent: "NL-ZH", coords: [4.244001, 51.926667], name: "Maassluis", theme: "port",
    description: {
      de: "Maassluis ist eine historische Hafenstadt in Südholland, die eine entscheidende Rolle in der Geschichte der maritimen Schlepper spielt.",
      hu: "Maassluis történelmi kikötőváros Dél-Hollandiában, amely kulcsszerepet játszik a tengeri vontatóhajózás történetében.",
      ro: "Maassluis este un oraș-port istoric din Olanda de Sud, jucând un rol crucial în istoria maritimă a remorcherelor.",
      en: "Maassluis is a historic port city in South Holland, playing a crucial role in maritime tugboat history."
    },
    facts: {
      de: ["Bekannt als Heimathafen der internationalen Smit-Schlepper.", "Verfügt über das Nationale Schleppmuseum.", "War eine wichtige Fischersiedlung vor ihrem industriellen Wachstum."],
      hu: ["A Smit nemzetközi vontatóhajók honos kikötőjeként ismert.", "Itt található a Nemzeti Vontató Múzeum.", "Ipari növekedése előtt fontos halásztelepülés volt."],
      ro: ["Cunoscut ca portul de origine al remorcherelor internaționale Smit.", "Găzduiește Muzeul Național de Remorcare.", "A fost o importantă așezare de pescari înainte de creșterea sa industrială."],
      en: ["Known as the home port of the Smit international tugboats.", "Features the National Towage Museum.", "Was an important fishing settlement before its industrial growth."]
    }
  },
  { id: "nl-medemblik", parent: "NL-NH", coords: [5.168623, 52.790714], name: "Medemblik", theme: "historic",
    description: {
      de: "Medemblik ist eine bezaubernde Küstenstadt in Nordholland, die sich des historischen Schlosses Radboud rühmt.",
      hu: "Medemblik bájos tengerparti város Észak-Hollandiában, amely a történelmi Radboud kastéllyal büszkélkedhet.",
      ro: "Medemblik este un oraș de coastă fermecător din Olanda de Nord, lăudându-se cu istoricul castel Radboud.",
      en: "Medemblik is a charming coastal town in North Holland, boasting the historic Radboud Castle."
    },
    facts: {
      de: ["Eine der ältesten Städte in der Region Westfriesland.", "Verfügt über Schloss Radboud, eine Festung aus dem 13. Jahrhundert.", "Ein beliebtes Ziel für Segeln und Wassersport."],
      hu: ["Nyugat-Frízföld egyik legrégebbi városa.", "Itt áll a 13. századi Radboud kastély.", "Népszerű vitorlázó és vízisport-központ."],
      ro: ["Unul dintre cele mai vechi orașe din regiunea Friesland de Vest.", "Prezintă Castelul Radboud, o fortăreață din secolul al XIII-lea.", "O destinație populară pentru navigație și sporturi nautice."],
      en: ["One of the oldest cities in the West Friesland region.", "Features Radboud Castle, a 13th-century fortress.", "A popular destination for sailing and water sports."]
    }
  },
  { id: "nl-middelburg", parent: "NL-ZE", coords: [3.613737, 51.499678], name: "Middelburg", theme: "capital",
    description: {
      de: "Middelburg ist die historische Hauptstadt von Zeeland und bietet großartige Architektur aus ihrer Zeit als wichtige Handelsstadt.",
      hu: "Middelburg Zeeland történelmi fővárosa, amely jelentős kereskedővárosként szerzett grandiózus építészettel büszkélkedhet.",
      ro: "Middelburg este capitala istorică a Zeelandei, prezentând o arhitectură grandioasă din perioada sa ca important oraș comercial.",
      en: "Middelburg is the historic capital of Zeeland, featuring grand architecture from its time as an important trading city."
    },
    facts: {
      de: ["War eines der wichtigsten Zentren der Niederländischen Ostindien-Kompanie.", "Verfügt über ein wunderschönes spätgotisches Rathaus.", "Sein historisches Zentrum ist durch eine kreisförmige Form gekennzeichnet."],
      hu: ["A Holland Kelet-indiai Társaság egyik legfontosabb központja volt.", "Gyönyörű késő gótikus városházával rendelkezik.", "Történelmi központját kör alakú elrendezés jellemzi."],
      ro: ["A fost unul dintre cele mai importante centre ale Companiei Olandeze a Indiilor de Est.", "Prezintă o frumoasă primărie în stil gotic târziu.", "Centrul său istoric este caracterizat de o formă circulară."],
      en: ["Was one of the most important centers of the Dutch East India Company.", "Features a beautiful late-Gothic town hall.", "Its historic center is characterized by a circular shape."]
    }
  },
  { id: "nl-naarden", parent: "NL-NH", coords: [5.163364, 52.295763], name: "Naarden", theme: "fortified",
    description: {
      de: "Naarden ist eine einzigartige Festungsstadt in Nordholland, berühmt für ihren perfekt erhaltenen sternförmigen Graben und ihre Mauern.",
      hu: "Naarden egyedülálló erődváros Észak-Hollandiában, amely tökéletesen megőrzött csillag alakú várárkáról és falairól híres.",
      ro: "Naarden este un oraș fortificat unic din Olanda de Nord, faimos pentru șanțul și zidurile sale în formă de stea perfect conservate.",
      en: "Naarden is a unique fortified town in North Holland, famous for its perfectly preserved star-shaped moat and walls."
    },
    facts: {
      de: ["Eine der am besten erhaltenen Sternfestungen in Europa.", "Beherbergt das Festungsmuseum der Niederlande.", "War ein wichtiger Teil des Verteidigungssystems der Holländischen Wasserlinie."],
      hu: ["Európa egyik legjobban megőrzött csillagerődje.", "Itt található a Holland Erődmúzeum.", "A holland vízi védelmi vonal kulcsfontosságú része volt."],
      ro: ["Unul dintre cele mai bine conservate forturi în formă de stea din Europa.", "Găzduiește Muzeul Fortăreței din Țările de Jos.", "A fost o parte cheie a sistemului defensiv al Liniei de Apă Olandeze."],
      en: ["One of the best-preserved star forts in Europe.", "Features the Netherlands Fortress Museum.", "Was a key part of the Dutch Water Line defense system."]
    }
  },
  { id: "nl-nieuwegein", parent: "NL-UT", coords: [5.092933, 52.02987], name: "Nieuwegein", theme: "new-town",
    description: {
      de: "Nieuwegein ist eine moderne 'neue Stadt' südlich von Utrecht, die in den 1970er Jahren aus zwei historischen Dörfern entstand.",
      hu: "Nieuwegein egy modern 'új város' Utrechttől délre, amelyet az 1970-es években fejlesztettek ki két történelmi faluból.",
      ro: "Nieuwegein este un 'oraș nou' modern la sud de Utrecht, dezvoltat în anii 1970 din două sate istorice.",
      en: "Nieuwegein is a modern 'new town' south of Utrecht, developed in the 1970s from two historic villages."
    },
    facts: {
      de: ["Entstand durch die Zusammenlegung der Dörfer Jutphaas und Vreeswijk.", "Ein wichtiger Knotenpunkt für Transport und Logistik.", "Verfügt über große Einkaufszentren und moderne Wohngebiete."],
      hu: ["Jutphaas és Vreeswijk falvak egyesítésével jött létre.", "Fontos közlekedési és elosztási csomópont.", "Nagy bevásárlóközpontokkal és modern lakóövezetekkel rendelkezik."],
      ro: ["Creat prin fuziunea satelor Jutphaas și Vreeswijk.", "Un hub important pentru transport și distribuție.", "Are centre comerciale mari și zone rezidențiale moderne."],
      en: ["Created by merging the villages of Jutphaas and Vreeswijk.", "An important hub for transportation and distribution.", "Features large shopping centers and modern residential areas."]
    }
  },
  { id: "nl-noordwijk", parent: "NL-ZH", coords: [4.446197, 52.241086], name: "Noordwijk", theme: "coastal",
    description: {
      de: "Noordwijk ist eine Küstenstadt in Südholland, bekannt als Raumfahrtzentrum der Niederlande und beliebter Badeort.",
      hu: "Noordwijk egy tengerparti város Dél-Hollandiában, Hollandia űrközpontjaként és népszerű tengerparti üdülőhelyként ismert.",
      ro: "Noordwijk este un oraș de coastă din Olanda de Sud, cunoscut ca hub-ul spațial al Țărilor de Jos și o populară stațiune balneară.",
      en: "Noordwijk is a coastal town in South Holland, known as the space hub of the Netherlands and a popular seaside resort."
    },
    facts: {
      de: ["Heimat des Europäischen Zentrums für Weltraumforschung und -technologie (ESTEC).", "Ein bekannter Badeort mit hervorragenden Stränden.", "International bekannt für seine Blumenparaden."],
      hu: ["Itt található az Európai Űrkutatási és Technológiai Központ (ESTEC).", "Kiemelkedő tengerparti üdülőhely kiváló strandokkal.", "Nemzetközileg ismert virágkarneváljairól."],
      ro: ["Găzduiește Centrul European de Cercetare și Tehnologie Spațială (ESTEC).", "O stațiune balneară proeminentă cu plaje excelente.", "Cunoscut la nivel internațional pentru paradele sale de flori."],
      en: ["Home to the European Space Research and Technology Centre (ESTEC).", "A prominent seaside resort with excellent beaches.", "Known internationally for its flower parades."]
    }
  },
  { id: "nl-oisterwijk", parent: "NL-NB", coords: [5.198645, 51.566108], name: "Oisterwijk", theme: "nature",
    description: {
      de: "Oisterwijk ist eine Gemeinde in Nordbrabant, die für ihre wunderschönen umliegenden Wälder und Moore weithin geschätzt wird.",
      hu: "Oisterwijk Észak-Brabant községe, amelyet széles körben nagyra értékelnek gyönyörű környező erdői és lápjai miatt.",
      ro: "Oisterwijk este o comună din Brabantul de Nord, apreciată pe scară largă pentru pădurile și mlaștinile frumoase din jur.",
      en: "Oisterwijk is a municipality in North Brabant, widely appreciated for its beautiful surrounding forests and fens."
    },
    facts: {
      de: ["Wird oft die 'Perle von Brabant' genannt.", "Umgeben von einem großen Naturschutzgebiet mit Wäldern und Mooren.", "Hat einen historischen Dorfkern mit einem charmanten lindenbestandenen Platz."],
      hu: ["Gyakran nevezik 'Brabant gyöngyének'.", "Nagy kiterjedésű, erdőkből és lápokból álló természetvédelmi terület veszi körül.", "Történelmi faluközpontja hangulatos, hársfákkal szegélyezett térrel büszkélkedhet."],
      ro: ["Adesea numită 'Perla Brabantului'.", "Înconjurată de o mare rezervație naturală de păduri și mlaștini.", "Are un centru istoric al satului cu o piață fermecătoare mărginită de tei."],
      en: ["Often called the 'Pearl of Brabant'.", "Surrounded by a large nature reserve of forests and fens.", "Has a historic village center with a charming lime tree-lined square."]
    }
  },
  { id: "nl-oss", parent: "NL-NB", coords: [5.532084, 51.778354], name: "Oss", theme: "industrial",
    description: {
      de: "Oss ist eine Stadt in Nordbrabant mit einer bedeutenden industriellen Vergangenheit, insbesondere in der Pharmaindustrie und Fleischverarbeitung.",
      hu: "Oss egy észak-brabanti város jelentős ipari múlttal, különösen a gyógyszer- és húsfeldolgozás terén.",
      ro: "Oss este un oraș din Brabantul de Nord cu un trecut industrial semnificativ, în special în industria farmaceutică și prelucrarea cărnii.",
      en: "Oss is a city in North Brabant with a significant industrial past, notably in pharmaceuticals and meat processing."
    },
    facts: {
      de: ["Historisch ein Zentrum für die Fleischindustrie.", "Der Geburtsort des Pharmaunternehmens Organon.", "Bekannt für bedeutende archäologische Funde wie das Vorstengraf (Fürstengrab)."],
      hu: ["Történelmileg a húsipar egyik központja.", "Az Organon gyógyszergyár szülőhelye.", "Jelentős régészeti leletekről ismert, mint például a Vorstengraf (Herceg sírja)."],
      ro: ["Din punct de vedere istoric, un centru pentru industria cărnii.", "Locul de naștere al companiei farmaceutice Organon.", "Cunoscut pentru descoperiri arheologice semnificative, cum ar fi Vorstengraf (mormântul Prințului)."],
      en: ["Historically a center for the meat industry.", "The birthplace of the pharmaceutical company Organon.", "Known for significant archaeological finds, such as the Vorstengraf (Prince's grave)."]
    }
  },
  { id: "nl-oudewater", parent: "NL-UT", coords: [4.87013, 52.022606], name: "Oudewater", theme: "historic",
    description: {
      de: "Oudewater ist eine kleine historische Stadt in Utrecht, weltberühmt für ihre Hexenwaage aus dem 16. Jahrhundert.",
      hu: "Oudewater egy kis történelmi város Utrechtben, világszerte híres a 16. századi boszorkánymérlegéről.",
      ro: "Oudewater este un mic oraș istoric din Utrecht, faimos în întreaga lume pentru Casa de Cântărire a Vrăjitoarelor din secolul al XVI-lea.",
      en: "Oudewater is a small historic city in Utrecht, famous around the world for its 16th-century Witches Weighhouse."
    },
    facts: {
      de: ["Berühmt für die Heksenwaag (Hexenwaage), die beschuldigten Hexen ein ehrliches Gewicht bescheinigte.", "Eine der ältesten Städte in der Provinz Utrecht.", "Bekannt für seine schönen historischen Giebelhäuser."],
      hu: ["Híres a Heksenwaag (Boszorkánymérleg) épületéről, ahol tisztességesen mérték meg a boszorkánysággal vádoltakat.", "Utrecht tartomány egyik legrégebbi városa.", "Gyönyörű történelmi oromzatos házairól ismert."],
      ro: ["Faimos pentru Heksenwaag, care oferea cântăriri oneste vrăjitoarelor acuzate.", "Unul dintre cele mai vechi orașe din provincia Utrecht.", "Cunoscut pentru casele sale istorice frumoase cu frontoane."],
      en: ["Famous for the Heksenwaag (Witches Weighhouse), which gave honest weighings to accused witches.", "One of the oldest cities in the province of Utrecht.", "Known for its beautiful historic gabled houses."]
    }
  },
  { id: "nl-purmerend", parent: "NL-NH", coords: [4.961483, 52.502479], name: "Purmerend", theme: "market",
    description: {
      de: "Purmerend ist eine Marktstadt in Nordholland, die als Pendlerstadt für Amsterdam stark gewachsen ist.",
      hu: "Purmerend egy mezőváros Észak-Hollandiában, amely jelentősen megnőtt, és ma Amszterdam ingázóvárosaként szolgál.",
      ro: "Purmerend este un oraș-târg din Olanda de Nord, care a crescut semnificativ pentru a servi drept oraș-dormitor pentru Amsterdam.",
      en: "Purmerend is a market town in North Holland that has grown significantly to serve as a commuter city for Amsterdam."
    },
    facts: {
      de: ["Historisch bekannt für seine umfangreichen Vieh- und Käsemärkte.", "Dient als wichtige Pendlerstadt für Amsterdam.", "Liegt inmitten mehrerer großer Polder."],
      hu: ["Történelmileg kiterjedt szarvasmarha- és sajtpiacairól ismert.", "Amszterdam egyik legfontosabb ingázóvárosa.", "Több nagy polder között helyezkedik el."],
      ro: ["Din punct de vedere istoric, cunoscut pentru piețele sale extinse de vite și brânzeturi.", "Servește ca un oraș important pentru navetiștii către Amsterdam.", "Situat în mijlocul mai multor poldere mari."],
      en: ["Historically known for its extensive cattle and cheese markets.", "Serves as a major commuter city for Amsterdam.", "Located amidst several large polders."]
    }
  },
  { id: "nl-rhenen", parent: "NL-UT", coords: [5.57222, 51.960876], name: "Rhenen", theme: "historic",
    description: {
      de: "Rhenen ist eine historische Stadt am Rhein in Utrecht, bekannt für ihren Zoo und die schöne Aussicht auf den Fluss.",
      hu: "Rhenen történelmi város az Utrecht-i Rajna mentén, híres állatkertjéről és gyönyörű folyóparti kilátásáról.",
      ro: "Rhenen este un oraș istoric pe Rin, în Utrecht, renumit pentru grădina sa zoologică și pentru vederile frumoase la malul râului.",
      en: "Rhenen is a historic city on the Rhine in Utrecht, renowned for its zoo and beautiful riverfront views."
    },
    facts: {
      de: ["Heimat des Ouwehands Dierenpark, eines großen niederländischen Zoos.", "Verfügt über die markante Cunerakerk mit ihrem hohen Turm.", "War im Zweiten Weltkrieg am Grebbeberg heftig umkämpft."],
      hu: ["Itt található az Ouwehands Dierenpark, egy jelentős holland állatkert.", "Feltűnő épülete a Cunerakerk magas tornyával.", "A Grebbeberg környékén súlyos harcok dúltak a második világháború alatt."],
      ro: ["Găzduiește Ouwehands Dierenpark, o grădină zoologică majoră.", "Are impresionanta Cunerakerk cu turnul său înalt.", "Un loc de lupte grele în timpul celui de-al Doilea Război Mondial la Grebbeberg."],
      en: ["Home to Ouwehands Dierenpark, a major Dutch zoo.", "Features the striking Cunerakerk with its tall tower.", "Fought over heavily during World War II at the Grebbeberg."]
    }
  },
  { id: "nl-roermond", parent: "NL-LI", coords: [5.988265, 51.19339], name: "Roermond", theme: "shopping",
    description: {
      de: "Roermond ist eine Stadt in Limburg, die sich durch ihr riesiges Designer-Outlet und historische Kirchen an der Maas auszeichnet.",
      hu: "Roermond egy Limburgi város, amely kiterjedt Designer Outletjéről és a Maas menti történelmi templomairól híres.",
      ro: "Roermond este un oraș din Limburg, distins prin imensul său Designer Outlet și bisericile istorice de-a lungul râului Maas.",
      en: "Roermond is a city in Limburg, distinguished by its vast Designer Outlet and historic churches along the Maas."
    },
    facts: {
      de: ["Heimat des größten Designer-Outlets in den Benelux-Ländern.", "Hat eine reiche religiöse Geschichte als Bischofssitz.", "Liegt am Zusammenfluss von Rur und Maas."],
      hu: ["A Benelux államok legnagyobb Designer Outletjének ad otthont.", "Gazdag vallási történelemmel rendelkezik püspöki székhelyként.", "A Roer és a Maas folyók találkozásánál fekszik."],
      ro: ["Găzduiește cel mai mare Designer Outlet din regiunea Benelux.", "Are o istorie religioasă bogată ca sediu episcopal.", "Situat la confluența râurilor Roer și Maas."],
      en: ["Home to the largest Designer Outlet in the Benelux region.", "Has a rich religious history as a bishop's see.", "Located at the confluence of the Roer and Maas rivers."]
    }
  },
  { id: "nl-schagen", parent: "NL-NH", coords: [4.741357, 52.788221], name: "Schagen", theme: "market",
    description: {
      de: "Schagen ist eine Stadt in Nordholland, bekannt für ihre traditionellen westfriesischen Folkloremärkte.",
      hu: "Schagen egy észak-hollandiai város, amely hagyományos nyugat-fríz folklór piacairól ismert.",
      ro: "Schagen este un oraș din Olanda de Nord cunoscut pentru piețele sale tradiționale de folclor vest-frizon.",
      en: "Schagen is a town in North Holland known for its traditional West Frisian folklore markets."
    },
    facts: {
      de: ["Veranstaltet jeden Sommer beliebte traditionelle Folkloremärkte.", "Zentral gelegen in der Region Kop van Noord-Holland.", "Hat ein starkes landwirtschaftliches und kaufmännisches Erbe."],
      hu: ["Minden nyáron népszerű hagyományos folklór piacokat rendeznek.", "Központilag helyezkedik el a Kop van Noord-Holland régióban.", "Erős mezőgazdasági és kereskedelmi örökséggel rendelkezik."],
      ro: ["Găzduiește piețe populare de folclor tradițional în fiecare vară.", "Situat central în regiunea Kop van Noord-Holland.", "Are o puternică moștenire agricolă și comercială."],
      en: ["Hosts popular traditional folklore markets every summer.", "Centrally located in the Kop van Noord-Holland region.", "Has a strong agricultural and trading heritage."]
    }
  },
  { id: "nl-schiedam", parent: "NL-ZH", coords: [4.386451, 51.930045], name: "Schiedam", theme: "industrial",
    description: {
      de: "Schiedam ist eine Industriestadt an der Grenze zu Rotterdam, historisch berühmt für ihre Jenever-Produktion.",
      hu: "Schiedam Rotterdam határában fekvő ipari város, történelmileg híres jenever (holland gin) gyártásáról.",
      ro: "Schiedam este un oraș industrial la granița cu Rotterdam, faimos în istorie pentru producția de jenever (gin olandez).",
      en: "Schiedam is an industrial city bordering Rotterdam, historically famous for its jenever (Dutch gin) production."
    },
    facts: {
      de: ["Berühmt für seine Jenever-Destillerien (holländischer Gin).", "Heimat der höchsten traditionellen Windmühlen der Welt.", "Verfügt über ein schönes historisches Stadtzentrum mit Grachten."],
      hu: ["Jenever (holland gin) lepárlóiról híres.", "Itt találhatók a világ legmagasabb hagyományos szélmalmai.", "Gyönyörű történelmi belvárossal és csatornákkal rendelkezik."],
      ro: ["Faimos pentru distileriile sale de jenever (gin olandez).", "Găzduiește cele mai înalte mori de vânt tradiționale din lume.", "Are un frumos centru istoric al orașului, cu canale."],
      en: ["Famous for its jenever (Dutch gin) distilleries.", "Home to the tallest traditional windmills in the world.", "Features a beautiful historic city center with canals."]
    }
  },
  { id: "nl-sittard", parent: "NL-LI", coords: [5.866663, 50.997423], name: "Sittard", theme: "historic",
    description: {
      de: "Sittard ist eine der ältesten Städte der Niederlande und liegt im engsten Teil von Limburg.",
      hu: "Sittard Hollandia egyik legrégebbi városa, amely Limburg legkeskenyebb részén található.",
      ro: "Sittard este unul dintre cele mai vechi orașe din Țările de Jos, situat în cea mai îngustă parte a provinciei Limburg.",
      en: "Sittard is one of the oldest cities in the Netherlands, situated in the narrowest part of Limburg."
    },
    facts: {
      de: ["Verfügt über einen historischen Marktplatz, umgeben von schönen Gebäuden.", "Erhielt bereits im 13. Jahrhundert Stadtrechte.", "Bekannt für seine starken Karnevalstraditionen."],
      hu: ["Gyönyörű épületekkel körülvett történelmi piactérrel rendelkezik.", "Már a 13. században városi jogokat kapott.", "Erős farsangi hagyományairól ismert."],
      ro: ["Prezintă o piață istorică înconjurată de clădiri frumoase.", "A primit drepturi de oraș încă din secolul al XIII-lea.", "Cunoscut pentru tradițiile sale puternice de carnaval."],
      en: ["Features a historic market square surrounded by beautiful buildings.", "Received city rights as early as the 13th century.", "Known for its strong carnival traditions."]
    }
  },
  { id: "nl-sneek", parent: "NL-FR", coords: [5.661103, 53.033548], name: "Sneek", theme: "water",
    description: {
      de: "Sneek ist ein wichtiges Wassersportzentrum in Friesland, berühmt für sein ikonisches Waterpoort (Wassertor).",
      hu: "Sneek Frízföld jelentős vízisport-központja, amely ikonikus Vízikapuról (Waterpoort) híres.",
      ro: "Sneek este un important centru de sporturi nautice din Friesland, faimos pentru emblematica sa Poartă de Apă (Waterpoort).",
      en: "Sneek is a major water sports center in Friesland, famed for its iconic Waterpoort (Water Gate)."
    },
    facts: {
      de: ["Berühmt für die 'Sneekweek', Europas größte Wassersportveranstaltung im Binnenland.", "Sein Symbol ist das ikonische Waterpoort aus dem 17. Jahrhundert.", "Eine der elf friesischen Städte."],
      hu: ["A 'Sneekweek' Európa legnagyobb belvízi vízisport-eseménye.", "Szimbóluma a 17. századi Waterpoort (Vízikapu).", "A tizenegy fríz város egyike."],
      ro: ["Faimos pentru 'Sneekweek', cel mai mare eveniment de sporturi nautice pe ape interioare din Europa.", "Simbolul său este poarta iconică de apă din secolul al XVII-lea.", "Unul dintre cele unsprezece orașe frizone."],
      en: ["Famous for the 'Sneekweek', Europe's largest inland water sports event.", "Its symbol is the iconic 17th-century Waterpoort.", "One of the Frisian eleven cities."]
    }
  },
  { id: "nl-steenwijk", parent: "NL-OV", coords: [6.121048, 52.78955], name: "Steenwijk", theme: "fortified",
    description: {
      de: "Steenwijk ist eine Festungsstadt in Overijssel mit historischen Wällen und dient als Tor zum Nationalpark Weerribben-Wieden.",
      hu: "Steenwijk egy erődváros Overijsselben történelmi sáncokkal, amely kapuként szolgál a Weerribben-Wieden Nemzeti Parkhoz.",
      ro: "Steenwijk este un oraș fortificat din Overijssel cu metereze istorice, servind drept poartă de intrare către Parcul Național Weerribben-Wieden.",
      en: "Steenwijk is a fortified town in Overijssel with historical ramparts, serving as a gateway to the Weerribben-Wieden National Park."
    },
    facts: {
      de: ["Verfügt über beeindruckende befestigte Erdwälle und einen Graben.", "Liegt in der Nähe des schönen Dorfes Giethoorn.", "Eine strategische Stadt während des Achtzigjährigen Krieges."],
      hu: ["Lenyűgöző erődített földsáncokkal és vizesárokkal rendelkezik.", "A gyönyörű Giethoorn falu közelében található.", "Stratégiai jelentőségű város volt a nyolcvanéves háború alatt."],
      ro: ["Prezintă ziduri de pământ fortificate impresionante și un șanț cu apă.", "Situat în apropierea frumosului sat Giethoorn.", "Un oraș strategic în timpul Războiului de Optzeci de Ani."],
      en: ["Features impressive fortified earthen walls and a moat.", "Located near the beautiful Giethoorn village.", "A strategic town during the Eighty Years' War."]
    }
  },
  { id: "nl-terneuzen", parent: "NL-ZE", coords: [3.842204, 51.298843], name: "Terneuzen", theme: "port",
    description: {
      de: "Terneuzen ist eine bedeutende Hafenstadt in Seeländisch-Flandern, die die Einfahrt zum Kanal Gent-Terneuzen bewacht.",
      hu: "Terneuzen egy jelentős kikötőváros Zeelandi-Flandriában, amely a Gent-Terneuzen csatorna bejáratát őrzi.",
      ro: "Terneuzen este un oraș-port semnificativ în Flandra Zeelandică, păzind intrarea în Canalul Ghent-Terneuzen.",
      en: "Terneuzen is a significant port city in Zeelandic Flanders, guarding the entrance to the Ghent-Terneuzen Canal."
    },
    facts: {
      de: ["Ein wichtiges Industrie- und Schifffahrtszentrum in Zeeland.", "Verfügt über ein großes Schleusensystem, das mit der Westerschelde verbunden ist.", "Der Legende nach die Heimat des Fliegenden Holländers."],
      hu: ["Zeeland egyik fő ipari és hajózási csomópontja.", "A Nyugati-Scheldéhez kapcsolódó nagy zsiliprendszerrel rendelkezik.", "A legenda szerint ez a Bolygó Hollandi otthona."],
      ro: ["Un hub industrial și naval major în Zeelanda.", "Găzduiește un sistem mare de ecluze care se conectează la Scheldt-ul de Vest.", "Legenda susține că este casa Olandezului Zburător."],
      en: ["A major industrial and shipping hub in Zeeland.", "Home to a large system of locks connecting to the Western Scheldt.", "Legend claims it is the home of the Flying Dutchman."]
    }
  },
  { id: "nl-tiel", parent: "NL-GE", coords: [5.437268, 51.887433], name: "Tiel", theme: "fruit",
    description: {
      de: "Tiel ist eine historische Hansestadt in der Region Betuwe, die als Zentrum des niederländischen Obstanbaus gefeiert wird.",
      hu: "Tiel egy történelmi Hanza-város a Betuwe régióban, amelyet a holland gyümölcstermesztés központjaként tartanak számon.",
      ro: "Tiel este un oraș istoric hanseatic situat în regiunea Betuwe, celebrat ca centru al producției de fructe din Țările de Jos.",
      en: "Tiel is a historic Hanseatic city located in the Betuwe region, celebrated as the center of Dutch fruit production."
    },
    facts: {
      de: ["Weithin bekannt als die Obststadt der Niederlande.", "Das Maskottchen ist 'Flipje', eine Figur aus Beeren.", "Eine der ältesten Siedlungen des Landes."],
      hu: ["Széles körben Hollandia gyümölcsvárosaként ismert.", "A város kabalája 'Flipje', a bogyókból álló figura.", "Az ország egyik legrégebbi települése."],
      ro: ["Cunoscut pe scară largă drept orașul fructelor din Olanda.", "Mascota este 'Flipje', un personaj făcut din fructe de pădure.", "Una dintre cele mai vechi așezări din țară."],
      en: ["Known widely as the fruit city of the Netherlands.", "Mascot is 'Flipje', a character made of berries.", "One of the oldest settlements in the country."]
    }
  },
  { id: "nl-uithoorn", parent: "NL-NH", coords: [4.828161, 52.244003], name: "Uithoorn", theme: "water",
    description: {
      de: "Uithoorn ist eine Stadt am Fluss Amstel, stark geprägt von ihren Wasserwegen und ihrer landwirtschaftlichen Geschichte.",
      hu: "Uithoorn az Amstel folyó menti város, amelyet erősen befolyásolnak a vízi útjai és mezőgazdasági múltja.",
      ro: "Uithoorn este un oraș pe râul Amstel, puternic influențat de căile sale navigabile și de istoria agriculturii.",
      en: "Uithoorn is a town on the river Amstel, heavily influenced by its waterways and history in agriculture."
    },
    facts: {
      de: ["Liegt direkt an den Ufern der Amstel.", "Hat eine Geschichte in der Chemie- und Aromenindustrie.", "Wuchs von einer ländlichen Bauerngemeinde zu einem Vorort von Amsterdam."],
      hu: ["Közvetlenül az Amstel folyó partján fekszik.", "Vegyipari és aromaipari múlttal rendelkezik.", "Vidéki mezőgazdasági közösségből Amszterdam elővárosává nőtte ki magát."],
      ro: ["Situat direct pe malul râului Amstel.", "Are o istorie în industria chimică și a aromelor.", "A crescut dintr-o comunitate agricolă rurală într-o suburbie a Amsterdamului."],
      en: ["Located directly on the banks of the Amstel river.", "Has a history of chemical and flavorings industries.", "Grew from a rural farming community into an Amsterdam suburb."]
    }
  },
  { id: "nl-urk", parent: "NL-FL", coords: [5.598789, 52.665452], name: "Urk", theme: "island",
    description: {
      de: "Urk ist eine eigenständige maritime Gemeinde, die vor der Entstehung des Noordoostpolders eine Insel war.",
      hu: "Urk egy sajátos tengeri közösség, amely a Noordoostpolder létrehozása előtt sziget volt.",
      ro: "Urk este o comunitate maritimă distinctă, care a fost anterior o insulă înainte de crearea Noordoostpolder.",
      en: "Urk is a distinct maritime community that was formerly an island before the creation of the Noordoostpolder."
    },
    facts: {
      de: ["War jahrhundertelang eine Insel in der Zuiderzee.", "Pflegt einen sehr ausgeprägten lokalen Dialekt und starke Traditionen.", "Verfügt über eine der größten Fischereiflotten der Niederlande."],
      hu: ["Évszázadokig sziget volt a Zuiderzee-ben.", "Sajátos helyi dialektust és erős hagyományokat őriz.", "Hollandia egyik legnagyobb halászflottájával rendelkezik."],
      ro: ["A fost o insulă în Zuiderzee timp de secole.", "Păstrează un dialect local foarte distinct și tradiții puternice.", "Are una dintre cele mai mari flote de pescuit din Țările de Jos."],
      en: ["Was an island in the Zuiderzee for centuries.", "Maintains a very distinct local dialect and strong traditions.", "Has one of the largest fishing fleets in the Netherlands."]
    }
  },
  { id: "nl-valkenburg", parent: "NL-LI", coords: [5.831252, 50.864753], name: "Valkenburg", theme: "tourism",
    description: {
      de: "Valkenburg ist eine sehr beliebte Touristenstadt in den Hügeln von Limburg, berühmt für ihre Burgruine und weitläufigen Mergelhöhlen.",
      hu: "Valkenburg rendkívül népszerű turistaváros Limburg dombjai között, kastélyromjairól és kiterjedt márga barlangjairól híres.",
      ro: "Valkenburg este un oraș turistic foarte popular în dealurile din Limburg, faimos pentru ruinele castelului său și peșterile extinse de marnă.",
      en: "Valkenburg is a highly popular tourist town in the hills of Limburg, famous for its castle ruins and extensive marl caves."
    },
    facts: {
      de: ["Heimat der einzigen Höhenburgruine der Niederlande.", "Berühmt für seine unterirdischen Mergelhöhlensysteme.", "Ein wichtiges Zentrum für Radsportler und Rennen."],
      hu: ["Itt található Hollandia egyetlen hegytetőn álló kastélyromja.", "Földalatti márga barlangrendszereiről híres.", "A kerékpározás szerelmeseinek és a versenyeknek a fő központja."],
      ro: ["Găzduiește singura ruină a unui castel de pe un deal din Țările de Jos.", "Faimos pentru sistemele sale de peșteri subterane de marnă.", "Un hub major pentru pasionații de ciclism și curse."],
      en: ["Home to the only hilltop castle ruin in the Netherlands.", "Famous for its underground marl cave systems.", "A major hub for cycling enthusiasts and races."]
    }
  },
  { id: "nl-veere", parent: "NL-ZE", coords: [3.577269, 51.556404], name: "Veere", theme: "historic",
    description: {
      de: "Veere ist eine malerische historische Stadt in Zeeland, die ihr wohlhabendes Erscheinungsbild aus der Zeit des schottischen Wollhandels bewahrt hat.",
      hu: "Veere egy festői történelmi város Zeelandban, amely megőrizte gazdag megjelenését a skót gyapjúkereskedelem idejéből.",
      ro: "Veere este un pitoresc oraș istoric din Zeelanda, păstrându-și aspectul bogat din zilele comerțului cu lână scoțiană.",
      en: "Veere is a picturesque historic town in Zeeland, retaining its wealthy appearance from the days of the Scottish wool trade."
    },
    facts: {
      de: ["Hatte historisch ein Monopol auf den Import schottischer Wolle.", "Verfügt über eine massive Kirche aus dem 15. Jahrhundert, die Grote Kerk.", "Ein sehr beliebtes Ziel für Segler und Touristen."],
      hu: ["Történelmileg monopóliuma volt a skót gyapjú importjára.", "Hatalmas 15. századi templommal, a Grote Kerk-kel rendelkezik.", "Nagyon népszerű célpont a vitorlázók és a turisták körében."],
      ro: ["A avut un monopol istoric asupra importului de lână scoțiană.", "Are o biserică masivă din secolul al XV-lea, Grote Kerk.", "O destinație foarte populară pentru marinari și turiști."],
      en: ["Had a historical monopoly on the import of Scottish wool.", "Features a massive 15th-century church, the Grote Kerk.", "A very popular destination for sailors and tourists."]
    }
  },
  { id: "nl-venlo", parent: "NL-LI", coords: [6.151172, 51.392449], name: "Venlo", theme: "border",
    description: {
      de: "Venlo ist eine bedeutende Grenzstadt in Limburg und fungiert als wichtiger logistischer Knotenpunkt zwischen den Niederlanden und Deutschland.",
      hu: "Venlo jelentős határváros Limburgban, amely kulcsfontosságú logisztikai csomópontként működik Hollandia és Németország között.",
      ro: "Venlo este un important oraș de graniță din Limburg, acționând ca un hub logistic crucial între Țările de Jos și Germania.",
      en: "Venlo is a prominent border city in Limburg, acting as a crucial logistical hub between the Netherlands and Germany."
    },
    facts: {
      de: ["Wurde nach schweren Zerstörungen im Zweiten Weltkrieg weitgehend wiederaufgebaut.", "Ein wichtiges Zentrum für Logistik und Agrarindustrie.", "Bekannt für seine lebendigen Vastelaovend-Feiern (Karneval)."],
      hu: ["A második világháború alatti súlyos károk után nagyrészt újjáépítették.", "A logisztika és az agráripar fő központja.", "Élénk vastelaovend (farsang) ünnepségeiről ismert."],
      ro: ["Reconstruit puternic după daune semnificative în timpul celui de-al Doilea Război Mondial.", "Un centru major pentru logistică și agrobusiness.", "Cunoscut pentru sărbătorile sale vibrante de vastelaovend (carnaval)."],
      en: ["Heavily rebuilt after significant damage during World War II.", "A major center for logistics and agribusiness.", "Known for its vibrant vastelaovend (carnival) celebrations."]
    }
  },
  { id: "nl-vlissingen", parent: "NL-ZE", coords: [3.415006, 51.494339], name: "Vlissingen", theme: "port",
    description: {
      de: "Vlissingen ist eine strategische Hafenstadt in Zeeland und verfügt über die längste Strandpromenade der Niederlande.",
      hu: "Vlissingen stratégiai kikötőváros Zeelandban, amely Hollandia leghosszabb tengerparti sétányával büszkélkedhet.",
      ro: "Vlissingen este un oraș-port strategic din Zeelanda, lăudându-se cu cea mai lungă promenadă la malul mării din Țările de Jos.",
      en: "Vlissingen is a strategic port city in Zeeland, boasting the longest seaside promenade in the Netherlands."
    },
    facts: {
      de: ["Der Geburtsort des berühmten niederländischen Admirals Michiel de Ruyter.", "Verfügt über einen kilometerlangen Boulevard entlang des Meeres.", "Ein historisch strategischer Hafen, der den Zugang nach Antwerpen kontrolliert."],
      hu: ["A híres holland admirális, Michiel de Ruyter szülőhelye.", "Több kilométer hosszú tengerparti körúttal rendelkezik.", "Történelmileg stratégiai kikötő, amely az Antwerpenbe vezető utat ellenőrizte."],
      ro: ["Locul de naștere al celebrului amiral olandez Michiel de Ruyter.", "Are un bulevard lung de mai mulți kilometri de-a lungul mării.", "Un port cu o poziție strategică istorică care controla accesul spre Anvers."],
      en: ["The birthplace of the famous Dutch admiral Michiel de Ruyter.", "Features a multi-kilometer-long boulevard along the sea.", "A historically strategic port controlling access to Antwerp."]
    }
  },
  { id: "nl-wageningen", parent: "NL-GE", coords: [5.668298, 51.968582], name: "Wageningen", theme: "university",
    description: {
      de: "Wageningen ist eine Universitätsstadt in Gelderland, weltweit bekannt für ihren Schwerpunkt auf Biowissenschaften und Landwirtschaft.",
      hu: "Wageningen egyetemi város Gelderlandban, világszerte ismert az élettudományokra és a mezőgazdaságra helyezett hangsúlyáról.",
      ro: "Wageningen este un oraș universitar din Gelderland, renumit la nivel global pentru concentrarea sa pe științele vieții și agricultură.",
      en: "Wageningen is a university city in Gelderland, globally renowned for its focus on life sciences and agriculture."
    },
    facts: {
      de: ["Heimat der international anerkannten Universität Wageningen.", "Der Ort, an dem 1945 die deutsche Kapitulation in den Niederlanden unterzeichnet wurde.", "Bekannt als 'Stadt der Biowissenschaften'."],
      hu: ["A nemzetközileg elismert Wageningeni Egyetem otthona.", "Itt írták alá a hollandiai német kapitulációt 1945-ben.", "Úgy is ismert, mint az 'Élettudományok városa'."],
      ro: ["Găzduiește Universitatea Wageningen, recunoscută pe plan internațional.", "Locul unde a fost semnată capitularea germană în Țările de Jos în 1945.", "Cunoscut ca un 'Oraș al Științelor Vieții'."],
      en: ["Home to the internationally acclaimed Wageningen University & Research.", "The place where the German capitulation in the Netherlands was signed in 1945.", "Known as a 'City of Life Sciences'."]
    }
  },
  { id: "nl-weert", parent: "NL-LI", coords: [5.70508, 51.235583], name: "Weert", theme: "historic",
    description: {
      de: "Weert ist eine historische Stadt in Limburg, umgeben von Naturschutzgebieten, die eine Mischung aus Kultur und Grün bietet.",
      hu: "Weert történelmi város Limburgban, természetvédelmi területekkel körülvéve, amely a kultúra és a zöldövezetek keverékét kínálja.",
      ro: "Weert este un oraș istoric din Limburg înconjurat de rezervații naturale, oferind un amestec de cultură și verdeață.",
      en: "Weert is a historic city in Limburg surrounded by nature reserves, offering a blend of culture and greenery."
    },
    facts: {
      de: ["Selbsternannte 'grünste Region der Welt' nach dem Gewinn von Auszeichnungen.", "Berühmt für die traditionelle 'Limburgse vlaai' (Limburger Torte).", "Verfügt über die prächtige Sint-Martinuskerk."],
      hu: ["Díjak megnyerése után a 'világ legzöldebb régiójának' nyilvánította magát.", "Híres a hagyományos 'Limburgse vlaai'-ról (Limburgi pite).", "Itt található a csodálatos Sint-Martinuskerk."],
      ro: ["Autoproclamată 'cea mai verde regiune din lume' după câștigarea unor premii.", "Faimos pentru tradiționala 'Limburgse vlaai' (plăcintă din Limburg).", "Are magnifica biserică Sint-Martinuskerk."],
      en: ["Self-proclaimed 'greenest region of the world' after winning awards.", "Famous for traditional 'Limburgse vlaai' (Limburg pie).", "Features the magnificent Sint-Martinuskerk."]
    }
  },
  { id: "nl-woerden", parent: "NL-UT", coords: [4.883294, 52.085926], name: "Woerden", theme: "cheese",
    description: {
      de: "Woerden ist eine historische Festungsstadt in Utrecht, die eine starke Tradition als geschäftige Käsemarktstadt pflegt.",
      hu: "Woerden történelmi erődváros Utrechtben, amely erős hagyományokat őriz nyüzsgő sajtpiaci városként.",
      ro: "Woerden este un oraș cetate istoric din Utrecht, menținând o tradiție puternică ca un oraș plin de viață pe piața brânzeturilor.",
      en: "Woerden is a historic fortress city in Utrecht, maintaining a strong tradition as a bustling cheese market town."
    },
    facts: {
      de: ["Eine der wenigen niederländischen Städte, in denen noch ein authentischer Käsemarkt stattfindet.", "Hat römische Wurzeln als Kastell am Limes Germanicus.", "Verfügt über das Kasteel Woerden aus dem 15. Jahrhundert."],
      hu: ["Egyike azon kevés holland városoknak, ahol még mindig tartanak autentikus sajtpiacot.", "Római eredetű, a Limes Germanicus egyik erődítménye volt.", "Itt található a 15. századi Kasteel Woerden."],
      ro: ["Unul dintre puținele orașe olandeze care încă organizează o piață autentică de brânzeturi.", "Are origini romane ca fort pe Limes Germanicus.", "Are Castelul Woerden din secolul al XV-lea."],
      en: ["One of the few Dutch towns that still holds an authentic cheese market.", "Has Roman origins as a fort on the Limes Germanicus.", "Features the 15th-century Kasteel Woerden."]
    }
  },
  { id: "nl-yerseke", parent: "NL-ZE", coords: [4.04525, 51.493579], name: "Yerseke", theme: "seafood",
    description: {
      de: "Yerseke ist ein Dorf in Zeeland, das als Zentrum der niederländischen Austern- und Muschelindustrie gefeiert wird.",
      hu: "Yerseke egy falu Zeelandban, amelyet a holland osztriga- és kagylóipar központjaként ünnepelnek.",
      ro: "Yerseke este un sat din Zeelanda, celebrat pe scară largă ca centrul industriei olandeze de stridii și midii.",
      en: "Yerseke is a village in Zeeland, widely celebrated as the center of the Dutch oyster and mussel industry."
    },
    facts: {
      de: ["Weltweit berühmt für seine Austernbecken (oesterputten).", "Das Epizentrum der Aquakultur und des Handels mit Meeresfrüchten in Zeeland.", "Veranstaltet einen sehr beliebten jährlichen Muscheltag."],
      hu: ["Világszerte híres osztriga medencéiről (oesterputten).", "A Zeeland-i akvakultúra és tengerkincsei-kereskedelem központja.", "Rendkívül népszerű éves Kagylónapot (Mosseldag) tart."],
      ro: ["Faimos la nivel mondial pentru gropile sale de stridii (oesterputten).", "Epicentrul acvaculturii și comerțului cu fructe de mare din Zeelanda.", "Găzduiește un Zi a Midiilor foarte populară anual."],
      en: ["Famous globally for its oyster pits (oesterputten).", "The epicenter of the Zeeland aquaculture and seafood trade.", "Hosts a highly popular annual Mussel Day."]
    }
  },
  { id: "nl-zeist", parent: "NL-UT", coords: [5.227631, 52.089283], name: "Zeist", theme: "royal",
    description: {
      de: "Zeist ist eine wohlhabende Stadt in den Wäldern des Utrechter Hügelrückens, bekannt für ihr elegantes Schloss.",
      hu: "Zeist egy gazdag város az Utrechti-dombság erdőiben, elegáns kastélyáról ismert.",
      ro: "Zeist este un oraș bogat situat în pădurile de pe Creasta Utrecht, cunoscut pentru castelul său elegant.",
      en: "Zeist is a wealthy town situated in the woods of the Utrecht Hill Ridge, known for its elegant castle."
    },
    facts: {
      de: ["Heimat des prächtigen Slot Zeist, einem Schloss aus dem 17. Jahrhundert.", "Bekannt als Hauptsitz vieler niederländischer Naturschutzgruppen.", "Verfügt über üppige umliegende Wälder und große Ländereien."],
      hu: ["Itt található a csodálatos Slot Zeist, egy 17. századi kastély.", "Számos holland természetvédelmi csoport székhelyeként ismert.", "Buján zöldellő környező erdőkkel és hatalmas birtokokkal rendelkezik."],
      ro: ["Găzduiește magnificul Slot Zeist, un castel din secolul al XVII-lea.", "Cunoscut drept sediul multor grupuri olandeze de conservare a naturii.", "Are păduri luxuriante înconjurătoare și moșii mari."],
      en: ["Home to the magnificent Slot Zeist, a 17th-century castle.", "Known as the headquarters for many Dutch nature conservation groups.", "Features lush surrounding forests and large estates."]
    }
  },
  { id: "nl-zierikzee", parent: "NL-ZE", coords: [3.920837, 51.649769], name: "Zierikzee", theme: "historic",
    description: {
      de: "Zierikzee ist eine wunderschön erhaltene historische Denkmalstadt auf der Insel Schouwen-Duiveland.",
      hu: "Zierikzee egy gyönyörűen megőrzött történelmi műemlékváros Schouwen-Duiveland szigetén.",
      ro: "Zierikzee este un oraș monument istoric frumos conservat pe insula Schouwen-Duiveland.",
      en: "Zierikzee is a beautifully preserved historic monument city on the island of Schouwen-Duiveland."
    },
    facts: {
      de: ["Hat über 500 historische Denkmäler.", "Der Sint-Lievensmonstertoren ist ein massiver, unvollendeter Kirchturm.", "Eine historische Handelsstadt, einst wohlhabender als viele große holländische Städte."],
      hu: ["Több mint 500 történelmi műemlékkel rendelkezik.", "A Sint-Lievensmonstertoren egy hatalmas, befejezetlen templomtorony.", "Történelmi kereskedőváros, amely egykor gazdagabb volt sok nagy holland városnál."],
      ro: ["Are peste 500 de monumente istorice.", "Sint-Lievensmonstertoren este un turn masiv, neterminat, al bisericii.", "Un oraș comercial istoric odată mai bogat decât multe orașe majore olandeze."],
      en: ["Has over 500 historical monuments.", "The Sint-Lievensmonstertoren is a massive, unfinished church tower.", "A historic trading city once wealthier than many major Dutch towns."]
    }
  },
  { id: "nl-zeewolde", parent: "NL-FL", coords: [5.543031, 52.331111], name: "Zeewolde", theme: "polder",
    description: {
      de: "Zeewolde ist eine der jüngsten Gemeinden der Niederlande, hauptsächlich bekannt für ihre Landwirtschaft und große angrenzende Wälder.",
      hu: "Zeewolde Hollandia egyik legfiatalabb községe, elsősorban mezőgazdaságáról és a szomszédos nagy erdőiről ismert.",
      ro: "Zeewolde este una dintre cele mai tinere municipalități din Țările de Jos, cunoscută în primul rând pentru agricultura sa și marile păduri adiacente.",
      en: "Zeewolde is one of the youngest municipalities in the Netherlands, primarily known for its agriculture and large adjacent forests."
    },
    facts: {
      de: ["Gegründet 1984 auf dem trockengelegten Flevopolder.", "Umgeben von Wasser und dem Horsterwold, dem größten Laubwald der Niederlande.", "Eine moderne Stadt mit Schwerpunkt auf grünem Leben und Landwirtschaft."],
      hu: ["1984-ben alapították a visszahódított Flevopolderen.", "Víz és a Horsterwold, Hollandia legnagyobb lombhullató erdeje veszi körül.", "Zöld életmódra és mezőgazdaságra összpontosító modern város."],
      ro: ["Fondată în 1984 pe polderul recuperat Flevopolder.", "Înconjurată de apă și Horsterwold, cea mai mare pădure de foioase din Țările de Jos.", "Un oraș modern axat pe viața verde și agricultură."],
      en: ["Founded in 1984 on the reclaimed Flevopolder.", "Surrounded by water and the Horsterwold, the largest deciduous forest in the Netherlands.", "A modern town focused on green living and agriculture."]
    }
  },
  { id: "nl-zutphen", parent: "NL-GE", coords: [6.194772, 52.139693], name: "Zutphen", theme: "historic",
    description: {
      de: "Zutphen ist eine charmante Hansestadt an der IJssel, berühmt für ihre historische Skyline aus mittelalterlichen Türmen.",
      hu: "Zutphen hangulatos Hanza-város az IJssel mentén, híres középkori tornyokból álló történelmi sziluettjéről.",
      ro: "Zutphen este un fermecător oraș hanseatic pe IJssel, faimos pentru orizontul său istoric cu turnuri medievale.",
      en: "Zutphen is a charming Hanseatic city on the IJssel, famous for its historic skyline of medieval towers."
    },
    facts: {
      de: ["Wegen seiner historischen Skyline oft 'Turmstadt' genannt.", "Eine der ältesten Städte des Landes, reich an mittelalterlicher Architektur.", "Verfügt über eine einzigartige Kettenbibliothek in der Walburgiskerk."],
      hu: ["Történelmi látképe miatt gyakran 'Toronyvárosnak' becézik.", "Az ország egyik legrégebbi városa, gazdag középkori építészeti emlékekben.", "A Walburgiskerkben egyedülálló láncos könyvtár található."],
      ro: ["Adesea poreclit 'Orașul Turnurilor' datorită orizontului său istoric.", "Unul dintre cele mai vechi orașe din țară, bogat în arhitectură medievală.", "Are o bibliotecă înlănțuită unică în interiorul bisericii Walburgiskerk."],
      en: ["Often nicknamed the 'Tower City' due to its historic skyline.", "One of the oldest cities in the country, rich in medieval architecture.", "Has a unique chained library inside the Walburgiskerk."]
    }
  },
  { id: "nl-wijk-bij-duurstede", parent: "NL-UT", coords: [5.337435, 51.975186], name: "Wijk bij Duurstede", theme: "historic",
    description: {
      de: "Wijk bij Duurstede ist eine malerische Stadt mit Wurzeln im alten Handelszentrum Dorestad.",
      hu: "Wijk bij Duurstede festői város, melynek gyökerei az ősi Dorestad kereskedelmi központig nyúlnak vissza.",
      ro: "Wijk bij Duurstede este un oraș pitoresc cu rădăcini în vechiul centru comercial Dorestad.",
      en: "Wijk bij Duurstede is a picturesque town with roots in the ancient trading center of Dorestad."
    },
    facts: {
      de: ["Erbaut in der Nähe des frühmittelalterlichen Handelsplatzes Dorestad.", "Verfügt über das Schloss Duurstede und die ikonische Windmühle Rijn en Lek.", "Liegt an der Stelle, an der sich der Rhein in den Lek und den Kromme Rijn teilt."],
      hu: ["A kora középkori Dorestad kereskedőhely közelében épült.", "Itt található a Duurstede kastély és az ikonikus Rijn en Lek szélmalom.", "Ott fekszik, ahol a Rajna folyó a Lek és a Kromme Rijn ágakra szakad."],
      ro: ["Construit în apropierea locației vechiului centru comercial medieval timpuriu Dorestad.", "Are Castelul Duurstede și morile de vânt iconice Rijn en Lek.", "Situat acolo unde râul Rin se bifurcă în Lek și Kromme Rijn."],
      en: ["Built near the location of the early medieval trading place Dorestad.", "Features Duurstede Castle and the iconic windmill Rijn en Lek.", "Situated where the Rhine river forks into the Lek and the Kromme Rijn."]
    }
  },
  { id: "nl-goirle", parent: "NL-NB", coords: [5.033774, 51.505627], name: "Goirle", theme: "nature",
    description: {
      de: "Goirle ist ein friedliches Dorf in Nordbrabant, geschätzt für seine Nähe zur Natur und historische Windmühlen.",
      hu: "Goirle békés falu Észak-Brabantban, amelyet a természethez való közelsége és történelmi szélmalmai miatt értékelnek.",
      ro: "Goirle este un sat liniștit din Brabantul de Nord, apreciat pentru proximitatea de natură și morile de vânt istorice.",
      en: "Goirle is a peaceful village in North Brabant, appreciated for its proximity to nature and historic windmills."
    },
    facts: {
      de: ["Liegt direkt südlich von Tilburg.", "Grenzt an eine wunderschöne Naturlandschaft aus Wäldern und Mooren.", "Verfügt über mehrere historische Getreidewindmühlen."],
      hu: ["Közvetlenül Tilburgtól délre található.", "Erdőkből és mocsarakból álló gyönyörű természeti tájjal határos.", "Számos történelmi gabonamalommal rendelkezik."],
      ro: ["Situat la sud de Tilburg.", "Se învecinează cu un peisaj natural frumos de păduri și mlaștini.", "Are mai multe mori de vânt istorice pentru cereale."],
      en: ["Located just south of Tilburg.", "Bordering a beautiful natural landscape of forests and moors.", "Features several historic grain windmills."]
    }
  },
  { id: "nl-houten", parent: "NL-UT", coords: [5.162064, 52.027143], name: "Houten", theme: "new-town",
    description: {
      de: "Houten ist eine moderne Pendlerstadt in der Nähe von Utrecht, international gelobt für ihr außergewöhnlich fahrradfreundliches Stadtdesign.",
      hu: "Houten egy modern ingázóváros Utrecht közelében, amely nemzetközileg is elismert kivételesen kerékpárosbarát várostervezéséről.",
      ro: "Houten este un oraș modern pentru navetiști lângă Utrecht, apreciat la nivel internațional pentru designul său urban excepțional de prietenos cu bicicletele.",
      en: "Houten is a modern commuter city near Utrecht, internationally acclaimed for its exceptionally bicycle-friendly urban design."
    },
    facts: {
      de: ["Entworfen mit Autos, die auf eine äußere Ringstraße verbannt sind.", "Eine der sichersten und fahrradfreundlichsten Städte der Welt.", "Wuchs als geplante 'Wachstumsstadt' schnell aus einem kleinen Dorf."],
      hu: ["Úgy tervezték, hogy az autók egy külső körgyűrűre vannak kiszorítva.", "A világ egyik legbiztonságosabb és legkerékpárbarátabb városa.", "Kis faluból gyorsan növekedett, tervezett 'növekedési városként'."],
      ro: ["Proiectat cu mașinile relegate pe o șosea de centură exterioară.", "Unul dintre cele mai sigure și mai prietenoase orașe cu bicicletele din lume.", "A crescut rapid dintr-un sat mic ca 'oraș de creștere' planificat."],
      en: ["Designed with cars relegated to an outer ring road.", "One of the safest and most bicycle-friendly towns in the world.", "Grew rapidly from a small village as a planned 'growth town'."]
    }
  },
  { id: "nl-ijsselstein", parent: "NL-UT", coords: [5.028686, 52.026205], name: "IJsselstein", theme: "historic",
    description: {
      de: "IJsselstein ist eine historische Stadt, benannt nach dem Fluss Hollandse IJssel, die einen mittelalterlichen Kern mit moderner Wohnbebauung verbindet.",
      hu: "IJsselstein egy történelmi város, amelyet a Hollandse IJssel folyóról neveztek el. Középkori magját modern lakóövezetek övezik.",
      ro: "IJsselstein este un oraș istoric numit după râul Hollandse IJssel, îmbinând un nucleu medieval cu expansiunea rezidențială modernă.",
      en: "IJsselstein is a historic town named after the river Hollandse IJssel, blending a medieval core with modern residential expansion."
    },
    facts: {
      de: ["Verfügt über ein historisches Stadtzentrum, umgeben von modernen Vierteln.", "Der nahegelegene Gerbrandy-Turm ist das höchste Bauwerk der Niederlande.", "Gegründet rund um das mittelalterliche Schloss von IJsselstein."],
      hu: ["Történelmi városközponttal rendelkezik, modern negyedekkel körülvéve.", "A közeli Gerbrandy-torony Hollandia legmagasabb építménye.", "Az IJsselstein középkori kastély körül alapították."],
      ro: ["Are un centru istoric al orașului înconjurat de cartiere moderne.", "Turnul Gerbrandy din apropiere este cea mai înaltă structură din Țările de Jos.", "Fondat în jurul castelului medieval IJsselstein."],
      en: ["Features a historic city center surrounded by modern districts.", "The Gerbrandy Tower nearby is the tallest structure in the Netherlands.", "Founded around the medieval castle of IJsselstein."]
    }
  },
  { id: "nl-lochem", parent: "NL-GE", coords: [6.343658, 52.171513], name: "Lochem", theme: "nature",
    description: {
      de: "Lochem ist eine Gemeinde in der Region Achterhoek in Gelderland, geschätzt für ihre malerische Landschaft und bewaldeten Hügel.",
      hu: "Lochem Gelderland Achterhoek régiójának egyik községe, amelyet festői vidékéért és fás dombjaiért értékelnek.",
      ro: "Lochem este o comună în regiunea Achterhoek din Gelderland, apreciată pentru peisajul său pitoresc și dealurile împădurite.",
      en: "Lochem is a municipality in the Achterhoek region of Gelderland, appreciated for its scenic countryside and wooded hills."
    },
    facts: {
      de: ["Umgeben von wunderschönen Naturschutzgebieten und bewaldeten Anwesen.", "Ein beliebtes Touristenziel zum Wandern und Radfahren.", "Besitzt Stadtrechte, die bis ins 13. Jahrhundert zurückreichen."],
      hu: ["Gyönyörű természetvédelmi területek és erdős birtokok veszik körül.", "Népszerű turisztikai célpont a gyaloglás és a kerékpározás szerelmeseinek.", "Városi jogai a 13. századra nyúlnak vissza."],
      ro: ["Înconjurat de rezervații naturale frumoase și moșii împădurite.", "O destinație turistică proeminentă pentru plimbări și ciclism.", "Are drepturi de oraș datând din secolul al XIII-lea."],
      en: ["Surrounded by beautiful nature reserves and wooded estates.", "A prominent tourist destination for walking and cycling.", "Has city rights dating back to the 13th century."]
    }
  },
  { id: "nl-nijkerk", parent: "NL-GE", coords: [5.478146, 52.214854], name: "Nijkerk", theme: "market",
    description: {
      de: "Nijkerk ist eine lebendige Stadt in Gelderland, die den Übergang von den Veluwe-Wäldern zu den Eemland-Poldern bildet.",
      hu: "Nijkerk egy nyüzsgő város Gelderlandban, amely áthidalja az átmenetet a Veluwe erdői és az Eemland polderei között.",
      ro: "Nijkerk este un oraș vibrant din Gelderland, creând o punte de legătură între pădurile Veluwe și polderele Eemland.",
      en: "Nijkerk is a vibrant city in Gelderland, bridging the transition from the Veluwe forests to the Eemland polders."
    },
    facts: {
      de: ["Historisch prosperierte die Stadt durch Tabakanbau und Glasbläserei.", "Verfügt über einen wunderschönen weißen Kirchturm im Stadtzentrum.", "Ideal gelegen zwischen den Wäldern und den Polderlandschaften."],
      hu: ["Történelmileg a dohánytermesztésből és az üvegfúvásból gazdagodott meg.", "Gyönyörű fehér templomtoronnyal büszkélkedhet a városközpontban.", "Ideális fekvésű az erdők és a polder tájak között."],
      ro: ["A prosperat istoric din cultivarea tutunului și suflarea sticlei.", "Are un frumos turn de biserică alb în centrul orașului.", "Situat ideal între păduri și peisajele de polder."],
      en: ["Historically prospered from tobacco cultivation and glassblowing.", "Features a beautiful white church tower in the town center.", "Ideally located between the forests and the polder landscapes."]
    }
  },
  { id: "nl-oldebroek", parent: "NL-GE", coords: [5.951864, 52.456736], name: "Oldebroek", theme: "nature",
    description: {
      de: "Oldebroek ist eine größtenteils ländliche Gemeinde in Gelderland, geprägt von starken landwirtschaftlichen Wurzeln und umliegenden Wäldern.",
      hu: "Oldebroek egy többnyire vidéki község Gelderlandban, amelyet erős mezőgazdasági gyökerek és környező erdők jellemeznek.",
      ro: "Oldebroek este o comună în mare parte rurală din Gelderland, caracterizată prin rădăcini agricole puternice și pădurile înconjurătoare.",
      en: "Oldebroek is a mostly rural municipality in Gelderland, characterized by strong agricultural roots and surrounding forests."
    },
    facts: {
      de: ["Grenzt an die Veluwe-Wälder und das Veluwemeer.", "Hat einen überwiegend ländlichen und traditionellen Charakter.", "Ein großartiger Ausgangspunkt für die Erkundung der Natur Gelderlands."],
      hu: ["A Veluwe erdei és a Veluwemeer tó határolja.", "Főként vidéki és hagyományos jellegű.", "Kiváló kiindulópont Gelderland természetének felfedezéséhez."],
      ro: ["Mărginită de pădurile Veluwe și de lacul Veluwemeer.", "Are un caracter predominant rural și tradițional.", "Un punct de plecare excelent pentru a explora natura din Gelderland."],
      en: ["Bordered by the Veluwe forests and the Veluwemeer lake.", "Has a predominantly rural and traditional character.", "A great starting point for exploring Gelderland's nature."]
    }
  },
  { id: "nl-rijswijk", parent: "NL-ZH", coords: [4.322503, 52.037393], name: "Rijswijk", theme: "suburb",
    description: {
      de: "Rijswijk ist eine Vorortgemeinde in der Nähe von Den Haag, in der mehrere internationale Institutionen und Handelszentren ansässig sind.",
      hu: "Rijswijk Hága melletti elővárosi község, amely számos nemzetközi intézménynek és kereskedelmi központnak ad otthont.",
      ro: "Rijswijk este o municipalitate suburbană lângă Haga, găzduind mai multe instituții internaționale și centre comerciale.",
      en: "Rijswijk is a suburban municipality near The Hague, housing several international institutions and commercial centers."
    },
    facts: {
      de: ["Sitz einer Zweigstelle des Europäischen Patentamts.", "Wuchs stark als Vorort des benachbarten Den Haag.", "Hier wurde 1697 der historische Frieden von Rijswijk unterzeichnet."],
      hu: ["Az Európai Szabadalmi Hivatal egyik fiókjának ad otthont.", "Jelentősen megnőtt a szomszédos Hága elővárosaként.", "Itt írták alá a történelmi rijswijki békét 1697-ben."],
      ro: ["Găzduiește o filială a Oficiului European de Brevete.", "A crescut semnificativ ca o suburbie pentru Haga învecinată.", "Aici a fost semnat istoricul Tratat de la Ryswick în 1697."],
      en: ["Home to a branch of the European Patent Office.", "Grew significantly as a suburb for neighboring The Hague.", "The historic Treaty of Ryswick was signed here in 1697."]
    }
  },
];

export const netherlandsCityExtras: POI[] = settlementRows.map(buildSettlementPoi);

