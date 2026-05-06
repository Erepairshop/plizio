// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraNorthkoreaEconomicV2: POI[] = [
  {
    id: "chongjin-steel-works-economic-v2",
    type: "industry",
    parent: "KP-13",
    coords: [129.79, 41.81],
    name: {
      de: "Stahlwerk Chongjin",
      hu: "Cshongdzsini Acélmű",
      ro: "Oțelăria din Chongjin",
      en: "Chongjin Steel Works"
    },
    description: {
      de: "Ein großes Stahlwerk in der Stadt Chongjin, das für die nordkoreanische Wirtschaft von entscheidender Bedeutung ist.",
      hu: "Nagy acélmű Cshongdzsin városában, amely kulcsfontosságú Észak-Korea gazdasága szempontjából.",
      ro: "O oțelărie mare în orașul Chongjin, crucială pentru economia nord-coreeană.",
      en: "A large steel plant located in the city of Chongjin, crucial for the North Korean economy."
    },
    facts: {
      de: ["Eines der größten Stahlwerke des Landes.", "Produziert eine Vielzahl von Stahlprodukten für den Inlands- und Exportmarkt.", "Eng verbunden mit dem nahegelegenen Hafen von Chongjin."],
      hu: ["Az ország egyik legnagyobb acélműve.", "Különféle acéltermékeket gyárt hazai és exportpiacra.", "Szorosan kapcsolódik a közeli Cshongdzsini kikötőhöz."],
      ro: ["Una dintre cele mai mari oțelării din țară.", "Produce o varietate de produse din oțel pentru uz intern și export.", "Strâns legată de portul din apropiere, Chongjin."],
      en: ["One of the largest steel plants in the country.", "Produces a variety of steel products for domestic use and export.", "Closely linked to the nearby port of Chongjin."]
    }, image: "/poi-images/chongjin-steel-works-economic-v2.webp"},
  {
    id: "hungnam-fertilizer-complex-economic-v2",
    type: "industry",
    parent: "KP-09",
    coords: [127.62, 39.83],
    name: {
      de: "Hungnam Düngemittelkomplex",
      hu: "Hungnami Műtrágyakombinát",
      ro: "Complexul de îngrășăminte Hungnam",
      en: "Hungnam Fertilizer Complex"
    },
    description: {
      de: "Ein riesiger Industriekomplex in Hungnam, der für die Produktion von Düngemitteln für die Landwirtschaft des Landes von entscheidender Bedeutung ist.",
      hu: "Hatalmas ipari komplexum Hungnamban, amely kulcsfontosságú az ország mezőgazdasága számára szükséges műtrágyák előállításában.",
      ro: "Un complex industrial masiv în Hungnam, vital pentru producția de îngrășăminte pentru agricultura țării.",
      en: "A massive industrial complex in Hungnam, vital for the production of fertilizers for the country's agriculture."
    },
    facts: {
      de: ["Einer der größten und ältesten Chemiekomplexe in Nordkorea.", "Produziert Ammoniumsulfat und andere chemische Produkte.", "War in der Vergangenheit in die Waffenproduktion involviert."],
      hu: ["Észak-Korea egyik legnagyobb és legrégebbi vegyipari komplexuma.", "Ammónium-szulfátot és más vegyi termékeket gyárt.", "A múltban fegyvergyártásban is részt vett."],
      ro: ["Unul dintre cele mai mari și mai vechi complexe chimice din Coreea de Nord.", "Produce sulfat de amoniu și alte produse chimice.", "A fost implicat istoric în producția de armament."],
      en: ["One of the largest and oldest chemical complexes in North Korea.", "Produces ammonium sulfate and other chemical products.", "Has been historically involved in weapons production."]
    }, image: "/poi-images/hungnam-fertilizer-complex-economic-v2.webp"},
  {
    id: "musan-iron-mine-economic-v2",
    type: "mine",
    parent: "KP-13",
    coords: [129.25, 42.22],
    name: {
      de: "Musan Eisenmine",
      hu: "Muszani Vasbánya",
      ro: "Mina de fier Musan",
      en: "Musan Iron Mine"
    },
    description: {
      de: "Eine der größten Eisenerzminen Asiens, die sich in Musan befindet und die nordkoreanische Stahlindustrie versorgt.",
      hu: "Ázsia egyik legnagyobb vasércbányája Muszanban, amely az észak-koreai acélipart látja el.",
      ro: "Una dintre cele mai mari mine de minereu de fier din Asia, situată în Musan, care alimentează industria siderurgică nord-coreeană.",
      en: "One of the largest iron ore mines in Asia, located in Musan, which feeds the North Korean steel industry."
    },
    facts: {
      de: ["Eine Tagebaumine mit riesigen geschätzten Reserven.", "Eine 98 km lange Pipeline transportiert das Eisenerzkonzentrat zum Stahlwerk Chongjin.", "Die Produktion ist stark von der Stromverfügbarkeit abhängig."],
      hu: ["Hatalmas becsült készletekkel rendelkező külszíni bánya.", "Egy 98 km hosszú csővezeték szállítja a vasérckoncentrátumot a Cshongdzsini Acélműbe.", "A termelés erősen függ az áramellátástól."],
      ro: ["O mină deschisă cu rezerve estimate uriașe.", "O conductă de 98 km transportă concentratul de minereu de fier la oțelăria din Chongjin.", "Producția depinde în mare măsură de disponibilitatea energiei electrice."],
      en: ["An open-pit mine with vast estimated reserves.", "A 98km pipeline transports the iron ore concentrate to the Chongjin Steel Works.", "Production is heavily dependent on electricity availability."]
    }, image: "/poi-images/musan-iron-mine-economic-v2.webp"},
  {
    id: "rason-port-economic-v2",
    type: "port",
    parent: "KP-14",
    coords: [130.29, 42.26],
    name: {
      de: "Hafen von Rason",
      hu: "Raszoni kikötő",
      ro: "Portul Rason",
      en: "Port of Rason"
    },
    description: {
      de: "Ein strategisch wichtiger, eisfreier Hafen in der Sonderwirtschaftszone Rason, der den Handel mit China und Russland erleichtert.",
      hu: "Stratégiailag fontos, jégmentes kikötő a Raszoni Különleges Gazdasági Övezetben, amely megkönnyíti a Kínával és Oroszországgal folytatott kereskedelmet.",
      ro: "Un port strategic, fără gheață, în Zona Economică Specială Rason, care facilitează comerțul cu China și Rusia.",
      en: "A strategically important ice-free port in the Rason Special Economic Zone, facilitating trade with China and Russia."
    },
    facts: {
      de: ["Hat spezielle Piers, die von China und Russland gemietet werden.", "Ein wichtiger Transitpunkt für Kohle und andere Güter.", "Zentral für die Entwicklung der Sonderwirtschaftszone."],
      hu: ["Kína és Oroszország által bérelt speciális mólókkal rendelkezik.", "Fontos tranzitpont a szén és más áruk számára.", "Központi szerepet játszik a Különleges Gazdasági Övezet fejlesztésében."],
      ro: ["Are cheiuri dedicate închiriate de China și Rusia.", "Un punct de tranzit cheie pentru cărbune și alte bunuri.", "Central pentru dezvoltarea Zonei Economice Speciale."],
      en: ["Has dedicated piers leased by China and Russia.", "A key transit point for coal and other goods.", "Central to the development of the Special Economic Zone."]
    }, image: "/poi-images/rason-port-economic-v2.webp"},
  {
    id: "sinuiju-cosmetics-factory-economic-v2",
    type: "industry",
    parent: "KP-03",
    coords: [124.41, 40.09],
    name: {
      de: "Sinuiju Kosmetikfabrik",
      hu: "Sinidzsu Kozmetikai Gyár",
      ro: "Fabrica de cosmetice din Sinuiju",
      en: "Sinuiju Cosmetics Factory"
    },
    description: {
      de: "Eine bekannte Fabrik in Sinuiju, die eine Reihe von Kosmetika für den nordkoreanischen Markt herstellt.",
      hu: "Ismert gyár Sinidzsiban, amely kozmetikumok széles skáláját gyártja az észak-koreai piacra.",
      ro: "O fabrică bine-cunoscută în Sinuiju, care produce o gamă de produse cosmetice pentru piața internă nord-coreeană.",
      en: "A well-known factory in Sinuiju that produces a range of cosmetics for the North Korean domestic market."
    },
    facts: {
      de: ["Produziert die beliebte Marke 'Bomhyanggi' (Duft des Frühlings).", "Wurde von Kim Jong-un als Modell für die Modernisierung der Leichtindustrie besucht.", "Produkte werden auch für den Export nach China angeboten."],
      hu: ["A népszerű 'Bomhjanggi' (Tavaszi illat) márkát gyártja.", "Kim Dzsongun meglátogatta mint a könnyűipar modernizációjának modelljét.", "Termékeit Kínába is exportálják."],
      ro: ["Produce popularul brand 'Bomhyanggi' (Parfum de primăvară).", "A fost vizitată de Kim Jong-un ca model pentru modernizarea industriei ușoare.", "Produsele sunt de asemenea oferite pentru export în China."],
      en: ["Produces the popular 'Bomhyanggi' (Scent of Spring) brand.", "Was visited by Kim Jong-un as a model for modernizing light industry.", "Products are also offered for export to China."]
    }, image: "/poi-images/sinuiju-cosmetics-factory-economic-v2.webp"},
  {
    id: "pukchang-thermal-power-plant-economic-v2",
    type: "energy",
    parent: "KP-04",
    coords: [126.06, 39.51],
    name: {
      de: "Wärmekraftwerk Pukchang",
      hu: "Pukcshangi Hőerőmű",
      ro: "Termocentrala Pukchang",
      en: "Pukchang Thermal Power Plant"
    },
    description: {
      de: "Das größte Wärmekraftwerk in Nordkorea, das einen erheblichen Teil des Stroms des Landes erzeugt.",
      hu: "Észak-Korea legnagyobb hőerőműve, amely az ország villamos energiájának jelentős részét termeli.",
      ro: "Cea mai mare termocentrală din Coreea de Nord, care generează o parte semnificativă a energiei electrice a țării.",
      en: "The largest thermal power plant in North Korea, generating a significant portion of the country's electricity."
    },
    facts: {
      de: ["Kohlebefeuertes Kraftwerk mit einer Kapazität von rund 1.600 MW.", "Die Produktion ist oft durch Kohleknappheit und veraltete Ausrüstung eingeschränkt.", "Wichtiger Stromlieferant für Pjöngjang."],
      hu: ["Széntüzelésű erőmű, körülbelül 1600 MW kapacitással.", "A termelést gyakran korlátozza a szénhiány és az elavult berendezések.", "Phenjan fontos áramellátója."],
      ro: ["Centrală pe cărbune cu o capacitate de aproximativ 1.600 MW.", "Producția este adesea limitată de lipsa de cărbune și echipamentele învechite.", "Un furnizor cheie de energie electrică pentru Phenian."],
      en: ["Coal-fired power plant with a capacity of around 1,600 MW.", "Production is often limited by coal shortages and aging equipment.", "A key electricity supplier for Pyongyang."]
    }, image: "/poi-images/pukchang-thermal-power-plant-economic-v2.webp"},
  {
    id: "supung-hydroelectric-plant-economic-v2",
    type: "energy",
    parent: "KP-03",
    coords: [124.97, 40.46],
    name: {
      de: "Supung-Wasserkraftwerk",
      hu: "Szuphungi Vízerőmű",
      ro: "Hidrocentrala Supung",
      en: "Supung Hydroelectric Plant"
    },
    description: {
      de: "Ein großes Wasserkraftwerk am Yalu-Fluss, das gemeinsam mit China betrieben wird und Strom für beide Länder liefert.",
      hu: "Nagy vízerőmű a Jalu folyón, amelyet Kínával közösen üzemeltetnek, és mindkét ország számára áramot termel.",
      ro: "O hidrocentrală mare pe râul Yalu, operată în comun cu China, care furnizează electricitate ambelor țări.",
      en: "A large hydroelectric dam on the Yalu River, operated jointly with China, providing electricity to both nations."
    },
    facts: {
      de: ["Wurde während der japanischen Besatzung gebaut.", "Hat eine Kapazität von rund 700 MW.", "Ein Symbol der chinesisch-nordkoreanischen Zusammenarbeit."],
      hu: ["A japán megszállás alatt épült.", "Körülbelül 700 MW kapacitással rendelkezik.", "A kínai-észak-koreai együttműködés szimbóluma."],
      ro: ["Construită în timpul ocupației japoneze.", "Are o capacitate de aproximativ 700 MW.", "Un simbol al cooperării sino-nord-coreene."],
      en: ["Built during the Japanese occupation.", "Has a capacity of around 700 MW.", "A symbol of Sino-North Korean cooperation."]
    }, image: "/poi-images/supung-hydroelectric-plant-economic-v2.webp"},
  {
    id: "hwanghae-iron-and-steel-complex-economic-v2",
    type: "industry",
    parent: "KP-05",
    coords: [125.64, 38.74],
    name: {
      de: "Hwanghae Eisen- und Stahlkomplex",
      hu: "Hvanghei Vas- és Acélkombinát",
      ro: "Complexul Siderurgic Hwanghae",
      en: "Hwanghae Iron and Steel Complex"
    },
    description: {
      de: "Eines der größten Stahlwerke in Nordkorea, gelegen in Songnim. Es spielt eine zentrale Rolle in der Schwerindustrie des Landes.",
      hu: "Észak-Korea egyik legnagyobb acélműve Szongnimban. Központi szerepet játszik az ország nehéziparában.",
      ro: "Una dintre cele mai mari oțelării din Coreea de Nord, situată în Songnim. Joacă un rol central în industria grea a țării.",
      en: "One of the largest steelworks in North Korea, located in Songnim. It plays a central role in the country's heavy industry."
    },
    facts: {
      de: ["Ursprünglich während der japanischen Kolonialzeit gegründet.", "Produziert eine breite Palette von Stahlprodukten, einschließlich Schienen und Baustahl.", "Hatte in den letzten Jahrzehnten mit Produktionsproblemen zu kämpfen."],
      hu: ["Eredetileg a japán gyarmati időszakban alapították.", "Széles körű acéltermékeket gyárt, beleértve a síneket és az építőipari acélt.", "Az elmúlt évtizedekben termelési problémákkal küzdött."],
      ro: ["Fondată inițial în perioada colonială japoneză.", "Produce o gamă largă de produse din oțel, inclusiv șine și oțel structural.", "S-a confruntat cu probleme de producție în ultimele decenii."],
      en: ["Originally established during the Japanese colonial period.", "Produces a wide range of steel products, including rails and structural steel.", "Has struggled with production issues in recent decades."]
    }, image: "/poi-images/hwanghae-iron-and-steel-complex-economic-v2.webp"},
  {
    id: "tanchon-port-economic-v2",
    type: "port",
    parent: "KP-09",
    coords: [128.92, 40.45],
    name: {
      de: "Hafen von Tanchon",
      hu: "Tancshoni kikötő",
      ro: "Portul Tanchon",
      en: "Port of Tanchon"
    },
    description: {
      de: "Ein wichtiger Hafen an der Ostküste, der für den Export von Magnesit und anderen Mineralien aus den nahegelegenen Minen von Tanchon dient.",
      hu: "Fontos kikötő a keleti parton, amely a közeli tancshoni bányákból származó magnezit és más ásványok exportjára szolgál.",
      ro: "Un port important pe coasta de est, care servește la exportul de magnezit și alte minerale din minele din apropiere din Tanchon.",
      en: "An important port on the east coast, serving to export magnesite and other minerals from the nearby Tanchon mines."
    },
    facts: {
      de: ["Infrastruktur ist auf den Umschlag von Massengütern ausgerichtet.", "Eng mit dem Bergbaukomplex Tanchon verbunden.", "Wichtige Einnahmequelle für Devisen."],
      hu: ["Infrastruktúrája az ömlesztett áruk kezelésére összpontosít.", "Szorosan kapcsolódik a Tancshoni Bányászati Komplexumhoz.", "Fontos devizaforrás."],
      ro: ["Infrastructura este axată pe manipularea mărfurilor în vrac.", "Legat strâns de complexul minier Tanchon.", "O sursă importantă de venituri în valută."],
      en: ["Infrastructure is focused on handling bulk cargo.", "Closely tied to the Tanchon mining complex.", "An important source of foreign currency revenue."]
    }, image: "/poi-images/tanchon-port-economic-v2.webp"},
  {
    id: "kumgol-zinc-mine-economic-v2",
    type: "mine",
    parent: "KP-09",
    coords: [128.6, 40.6],
    name: {
      de: "Komdok Zinkmine",
      hu: "Komdoki Cinkbánya",
      ro: "Mina de zinc Komdok",
      en: "Komdok Zinc Mine"
    },
    description: {
      de: "Teil des Komdok-Bergbaukomplexes, einer der größten Produzenten von Blei und Zink in Asien.",
      hu: "A Komdoki Bányászati Komplexum része, Ázsia egyik legnagyobb ólom- és cinktermelője.",
      ro: "Parte a Complexului Minier Komdok, unul dintre cei mai mari producători de plumb și zinc din Asia.",
      en: "Part of the Komdok Mining Complex, one of the largest producers of lead and zinc in Asia."
    },
    facts: {
      de: ["Das Gebiet wird oft als 'Meer der Mineralien' bezeichnet.", "Die Mine ist seit der japanischen Kolonialzeit in Betrieb.", "Die Produktion ist entscheidend für die nordkoreanische Exportwirtschaft."],
      hu: ["A területet gyakran 'az ásványok tengerének' nevezik.", "A bánya a japán gyarmati időszak óta működik.", "A termelés kulcsfontosságú Észak-Korea exportgazdasága szempontjából."],
      ro: ["Zona este adesea denumită 'Marea de Minerale'.", "Mina funcționează încă din perioada colonială japoneză.", "Producția este crucială pentru economia de export a Coreei de Nord."],
      en: ["The area is often called a 'sea of minerals'.", "The mine has been in operation since the Japanese colonial period.", "Production is crucial for North Korea's export economy."]
    }, image: "/poi-images/kumgol-zinc-mine-economic-v2.webp"},
  {
    id: "sunchon-vinalon-complex-economic-v2",
    type: "industry",
    parent: "KP-04",
    coords: [125.96, 39.4],
    name: {
      de: "Sunchon Vinalon Komplex",
      hu: "Szuncshoni Vinalon Komplexum",
      ro: "Complexul Vinalon din Sunchon",
      en: "Sunchon Vinalon Complex"
    },
    description: {
      de: "Eine große Fabrikanlage, die Vinalon herstellt, eine synthetische Faser, die aus Anthrazitkohle und Kalkstein entwickelt wurde.",
      hu: "Nagy gyártelep, amely vinalont, egy antracitból és mészkőből kifejlesztett szintetikus szálat állít elő.",
      ro: "O fabrică mare care produce Vinalon, o fibră sintetică dezvoltată din antracit și calcar.",
      en: "A large factory complex that produces Vinalon, a synthetic fiber developed from anthracite coal and limestone."
    },
    facts: {
      de: ["Vinalon wird oft als 'Juche-Faser' bezeichnet.", "Der Komplex ist ein Symbol für die wirtschaftliche Eigenständigkeit Nordkoreas.", "Die Produktion war in den letzten Jahren aufgrund von Energie- und Ressourcenmangel uneinheitlich."],
      hu: ["A vinalont gyakran 'dzsucse-szálnak' is nevezik.", "A komplexum Észak-Korea gazdasági önellátásának szimbóluma.", "A termelés az elmúlt években az energia- és erőforráshiány miatt ingadozó volt."],
      ro: ["Vinalon este adesea numită 'fibra Juche'.", "Complexul este un simbol al autosuficienței economice a Coreei de Nord.", "Producția a fost inconsistentă în ultimii ani din cauza lipsei de energie și resurse."],
      en: ["Vinalon is often called the 'Juche Fiber'.", "The complex is a symbol of North Korea's economic self-reliance.", "Production has been inconsistent in recent years due to energy and resource shortages."]
    }, image: "/poi-images/sunchon-vinalon-complex-economic-v2.webp"},
  {
    id: "pyongyang-textile-mill-economic-v2",
    type: "industry",
    parent: "KP-01",
    coords: [125.79, 39.01],
    name: {
      de: "Textilfabrik Pjöngjang",
      hu: "Phenjani Textilgyár",
      ro: "Fabrica de textile din Phenian",
      en: "Pyongyang Textile Mill"
    },
    description: {
      de: "Eine der größten Textilfabriken in Pjöngjang, die zu Ehren von Kim Jong-suk, der Frau von Kim Il-sung, benannt wurde.",
      hu: "Phenjan egyik legnagyobb textilgyára, amelyet Kim Dzsongszuk, Kim Ir Szen feleségének tiszteletére neveztek el.",
      ro: "Una dintre cele mai mari fabrici de textile din Phenian, numită în onoarea lui Kim Jong-suk, soția lui Kim Il-sung.",
      en: "One of the largest textile mills in Pyongyang, named in honor of Kim Jong-suk, Kim Il-sung's wife."
    },
    facts: {
      de: ["Produziert eine breite Palette von Stoffen aus Baumwolle und synthetischen Fasern.", "Ein Vorzeigebetrieb der nordkoreanischen Leichtindustrie.", "Viele der Arbeiter sind Frauen."],
      hu: ["Széles választékban gyárt pamutból és szintetikus szálakból készült szöveteket.", "Az észak-koreai könnyűipar egyik mintagyára.", "A munkások nagy része nő."],
      ro: ["Produce o gamă largă de țesături din bumbac și fibre sintetice.", "O fabrică model a industriei ușoare nord-coreene.", "Multe dintre muncitoare sunt femei."],
      en: ["Produces a wide range of fabrics from cotton and synthetic fibers.", "A model factory for North Korea's light industry.", "Many of the workers are women."]
    }, image: "/poi-images/pyongyang-textile-mill-economic-v2.webp"},
  {
    id: "february-8-vinalon-complex-economic-v2",
    type: "industry",
    parent: "KP-09",
    coords: [127.6, 39.85],
    name: {
      de: "8. Februar Vinalon Komplex",
      hu: "Február 8. Vinalon Komplexum",
      ro: "Complexul Vinalon 8 Februarie",
      en: "February 8 Vinalon Complex"
    },
    description: {
      de: "Ein weiterer großer Vinalon-Produktionskomplex in der Nähe von Hamhung, der nach dem Gründungstag der Koreanischen Volksarmee benannt ist.",
      hu: "Egy másik nagy vinalongyártó komplexum Hamhung közelében, amelyet a Koreai Néphadsereg megalapításának napjáról neveztek el.",
      ro: "Un alt mare complex de producție Vinalon lângă Hamhung, numit după ziua fondării Armatei Populare Coreene.",
      en: "Another major Vinalon production complex located near Hamhung, named for the founding day of the Korean People's Army."
    },
    facts: {
      de: ["Sollte die Vinalon-Produktion des Landes erheblich steigern.", "Der Bau begann in den 1980er Jahren, wurde aber nie vollständig fertiggestellt.", "Gilt als Beispiel für ein gescheitertes Großprojekt."],
      hu: ["Célja az ország vinalontermelésének jelentős növelése volt.", "Az építkezés az 1980-as években kezdődött, de soha nem fejeződött be teljesen.", "Egy kudarcot vallott nagyprojekt példájaként tartják számon."],
      ro: ["Menit să crească semnificativ producția de Vinalon a țării.", "Construcția a început în anii 1980, dar nu a fost niciodată finalizată complet.", "Considerat un exemplu de proiect la scară largă eșuat."],
      en: ["Intended to significantly boost the country's Vinalon production.", "Construction began in the 1980s but was never fully completed.", "Considered an example of a failed large-scale project."]
    }, image: "/poi-images/february-8-vinalon-complex-economic-v2.webp"},
  {
    id: "taean-heavy-machine-complex-economic-v2",
    type: "industry",
    parent: "KP-02",
    coords: [125.26, 38.71],
    name: {
      de: "Taean Schwerindustriekomplex",
      hu: "Teani Nehézgépipari Komplexum",
      ro: "Complexul de mașini grele Taean",
      en: "Taean Heavy Machine Complex"
    },
    description: {
      de: "Ein großer Industriekomplex in der Nähe von Nampo, der auf die Herstellung von schwerem Gerät für Kraftwerke spezialisiert ist.",
      hu: "Nagy ipari komplexum Nampo közelében, amely erőművekhez szükséges nehéz berendezések gyártására szakosodott.",
      ro: "Un mare complex industrial lângă Nampo, specializat în producția de echipamente grele pentru centrale electrice.",
      en: "A large industrial complex near Nampo specializing in the production of heavy equipment for power plants."
    },
    facts: {
      de: ["Produziert Turbinen, Generatoren und große Transformatoren.", "Entscheidend für den Bau und die Wartung der nordkoreanischen Energieinfrastruktur.", "Wurde nach dem 'Taean-Arbeitssystem', einem Managementmodell, benannt."],
      hu: ["Turbinákat, generátorokat és nagy transzformátorokat gyárt.", "Kulcsfontosságú az észak-koreai energiainfrastruktúra építésében és karbantartásában.", "A 'Teani munkarendszer' nevű vezetési modellről nevezték el."],
      ro: ["Produce turbine, generatoare și transformatoare mari.", "Crucial pentru construcția și întreținerea infrastructurii energetice a Coreei de Nord.", "Numit după 'Sistemul de lucru Taean', un model de management."],
      en: ["Produces turbines, generators, and large transformers.", "Crucial for the construction and maintenance of North Korea's power infrastructure.", "Named after the 'Taean work system', a management model."]
    }, image: "/poi-images/taean-heavy-machine-complex-economic-v2.webp"},
  {
    id: "ryongsong-machine-complex-economic-v2",
    type: "industry",
    parent: "KP-09",
    coords: [127.5, 39.95],
    name: {
      de: "Ryongsong Maschinenkomplex",
      hu: "Rjongszongi Gépipari Komplexum",
      ro: "Complexul de mașini Ryongsong",
      en: "Ryongsong Machine Complex"
    },
    description: {
      de: "Eine große Maschinenfabrik in Hamhung, die maßgeschneiderte schwere Maschinen und Industrieanlagen herstellt.",
      hu: "Nagy gépgyár Hamhungban, amely egyedi nehézgépeket és ipari berendezéseket gyárt.",
      ro: "O fabrică mare de mașini în Hamhung, care produce mașini grele personalizate și echipamente industriale.",
      en: "A large machine plant in Hamhung that produces custom-made heavy machinery and industrial equipment."
    },
    facts: {
      de: ["Bekannt für die Herstellung großer Pressen, Walzwerke und chemischer Reaktoren.", "Spielt eine Rolle bei der Lokalisierung von Industrieanlagen.", "Einer der führenden Maschinenbaukomplexe des Landes."],
      hu: ["Nagy prések, hengerművek és vegyi reaktorok gyártásáról ismert.", "Szerepet játszik az ipari berendezések lokalizálásában.", "Az ország egyik vezető gépgyártó komplexuma."],
      ro: ["Cunoscut pentru producția de prese mari, laminoare și reactoare chimice.", "Joacă un rol în localizarea echipamentelor industriale.", "Unul dintre principalele complexe de construcții de mașini din țară."],
      en: ["Known for producing large presses, rolling mills, and chemical reactors.", "Plays a role in localizing industrial equipment.", "One of the country's leading machine-building complexes."]
    }, image: "/poi-images/ryongsong-machine-complex-economic-v2.webp"},
  {
    id: "kim-chaek-iron-and-steel-works-economic-v2",
    type: "industry",
    parent: "KP-13",
    coords: [129.21, 40.66],
    name: {
      de: "Kim-Chaek-Eisen- und Stahlwerke",
      hu: "Kim Cshek Vas- és Acélművek",
      ro: "Combinatul Siderurgic Kim Chaek",
      en: "Kim Chaek Iron and Steel Works"
    },
    description: {
      de: "Ein weiteres großes Stahlwerk, gelegen in der Stadt Kimchaek. Es ist ein wichtiger Pfeiler der nordkoreanischen Schwerindustrie.",
      hu: "Egy másik nagy acélmű Kim Cshek városában. Az észak-koreai nehézipar fontos pillére.",
      ro: "O altă oțelărie majoră, situată în orașul Kimchaek. Este un pilon important al industriei grele nord-coreene.",
      en: "Another major steelworks, located in the city of Kimchaek. It is a key pillar of North Korea's heavy industry."
    },
    facts: {
      de: ["Eng verbunden mit der Musan-Mine für die Eisenerzversorgung.", "Ursprünglich während der japanischen Herrschaft als 'Seishin Iron Works' gebaut.", "Produziert eine Vielzahl von Stahlprodukten."],
      hu: ["Szorosan kapcsolódik a Muszani bányához a vasércellátás érdekében.", "Eredetileg a japán uralom alatt 'Szeisin Vasművek' néven épült.", "Sokféle acélterméket gyárt."],
      ro: ["Legat strâns de Mina Musan pentru aprovizionarea cu minereu de fier.", "Construit inițial în timpul dominației japoneze ca 'Uzinele Siderurgice Seishin'.", "Produce o varietate de produse din oțel."],
      en: ["Closely linked to the Musan Mine for iron ore supply.", "Originally built during Japanese rule as 'Seishin Iron Works'.", "Produces a variety of steel products."]
    }, image: "/poi-images/kim-chaek-iron-and-steel-works-economic-v2.webp"},
  {
    id: "kusong-machine-tool-factory-economic-v2",
    type: "industry",
    parent: "KP-03",
    coords: [125.23, 39.99],
    name: {
      de: "Kusong Werkzeugmaschinenfabrik",
      hu: "Kuszongi Szerszámgépgyár",
      ro: "Fabrica de mașini-unelte din Kusong",
      en: "Kusong Machine Tool Factory"
    },
    description: {
      de: "Eine wichtige Fabrik in Kusong, die sich auf die Herstellung von Werkzeugmaschinen für andere Industrien spezialisiert hat.",
      hu: "Fontos gyár Kuszongban, amely más iparágak számára gyárt szerszámgépeket.",
      ro: "O fabrică importantă în Kusong, specializată în producția de mașini-unelte pentru alte industrii.",
      en: "An important factory in Kusong that specializes in producing machine tools for other industries."
    },
    facts: {
      de: ["Produkte umfassen Drehmaschinen, Fräsmaschinen und Bohrmaschinen.", "Steht im Verdacht, in die Herstellung von Komponenten für das Raketenprogramm verwickelt zu sein.", "Ein Beispiel für die Maschinenbauindustrie des Landes."],
      hu: ["Termékei között esztergák, marógépek és fúrógépek találhatók.", "Gyanú szerint részt vesz a rakétaprogramhoz szükséges alkatrészek gyártásában.", "Az ország gépgyártásának egyik példája."],
      ro: ["Produsele includ strunguri, mașini de frezat și mașini de găurit.", "Suspectată de implicare în producția de componente pentru programul de rachete.", "Un exemplu al industriei de construcții de mașini a țării."],
      en: ["Products include lathes, milling machines, and drills.", "Suspected of being involved in producing components for the missile program.", "An example of the country's machine-building industry."]
    }, image: "/poi-images/kusong-machine-tool-factory-economic-v2.webp"},
  {
    id: "anju-coal-mining-complex-economic-v2",
    type: "mine",
    parent: "KP-04",
    coords: [125.66, 39.62],
    name: {
      de: "Anju Kohlebergbaukomplex",
      hu: "Andzsui Szénbányászati Komplexum",
      ro: "Complexul Minier de Cărbune Anju",
      en: "Anju Coal Mining Complex"
    },
    description: {
      de: "Eines der größten Kohlebergbaugebiete in Nordkorea, das sich in der Provinz Süd-Pyongan befindet.",
      hu: "Észak-Korea egyik legnagyobb szénbányászati területe Dél-Phjongan tartományban.",
      ro: "Una dintre cele mai mari zone de minerit de cărbune din Coreea de Nord, situată în provincia Pyongan de Sud.",
      en: "One of the largest coal mining areas in North Korea, located in South Pyongan Province."
    },
    facts: {
      de: ["Produziert große Mengen an Anthrazitkohle.", "Die Kohle wird für Wärmekraftwerke und die Industrie verwendet.", "Der Bergbau erfolgt sowohl im Tagebau als auch unter Tage."],
      hu: ["Nagy mennyiségű antracitot termel.", "A szenet hőerőművekben és az iparban használják fel.", "A bányászat külszíni és mélyművelésű is."],
      ro: ["Produce cantități mari de cărbune antracit.", "Cărbunele este folosit pentru termocentrale și industrie.", "Mineritul se face atât la suprafață, cât și în subteran."],
      en: ["Produces large quantities of anthracite coal.", "The coal is used for thermal power plants and industry.", "Mining is done through both surface and underground methods."]
    }
  },
  {
    id: "pyongyang-east-thermal-power-plant-economic-v2",
    type: "energy",
    parent: "KP-01",
    coords: [125.82, 39.04],
    name: {
      de: "Wärmekraftwerk Pjöngjang-Ost",
      hu: "Kelet-Phenjani Hőerőmű",
      ro: "Termocentrala Phenian Est",
      en: "East Pyongyang Thermal Power Plant"
    },
    description: {
      de: "Ein wichtiges Kraftwerk, das die Hauptstadt Pjöngjang mit Strom und Fernwärme versorgt.",
      hu: "Fontos erőmű, amely a fővárost, Phenjant látja el villamos energiával és távhővel.",
      ro: "O centrală electrică importantă care furnizează electricitate și încălzire centralizată capitalei Phenian.",
      en: "An important power plant providing electricity and district heating to the capital city of Pyongyang."
    },
    facts: {
      de: ["Kohlebefeuertes Kraftwerk.", "Arbeitet oft mit reduzierter Kapazität aufgrund von Brennstoffmangel.", "Entscheidend für die Aufrechterhaltung der Grundversorgung in der Hauptstadt."],
      hu: ["Széntüzelésű erőmű.", "Gyakran csökkentett kapacitással működik az üzemanyaghiány miatt.", "Kulcsfontosságú a főváros alapvető szolgáltatásainak fenntartásában."],
      ro: ["Centrală electrică pe bază de cărbune.", "Funcționează adesea la capacitate redusă din cauza lipsei de combustibil.", "Crucială pentru menținerea serviciilor de bază în capitală."],
      en: ["A coal-fired power plant.", "Often operates at reduced capacity due to fuel shortages.", "Crucial for maintaining basic services in the capital."]
    }, image: "/poi-images/pyongyang-east-thermal-power-plant-economic-v2.webp"},
  {
    id: "wiwon-power-plant-economic-v2",
    type: "energy",
    parent: "KP-12",
    coords: [126.1, 41.2],
    name: {
      de: "Wiwon Wasserkraftwerk",
      hu: "Vivoni Vízerőmű",
      ro: "Hidrocentrala Wiwon",
      en: "Wiwon Power Plant"
    },
    description: {
      de: "Ein Wasserkraftwerk am Yalu-Fluss, das gemeinsam mit China als Teil einer Kaskade von Dämmen betrieben wird.",
      hu: "Vízerőmű a Jalu folyón, amelyet Kínával közösen üzemeltetnek egy gátsorozat részeként.",
      ro: "O hidrocentrală pe râul Yalu, operată în comun cu China ca parte a unei cascade de baraje.",
      en: "A hydroelectric power plant on the Yalu River, jointly operated with China as part of a cascade of dams."
    },
    facts: {
      de: ["Hat eine Kapazität von etwa 390 MW.", "Der erzeugte Strom wird zwischen den beiden Ländern aufgeteilt.", "Trägt zur Stromversorgung der abgelegenen Provinz Chagang bei."],
      hu: ["Kapacitása körülbelül 390 MW.", "A termelt áramot megosztják a két ország között.", "Hozzájárul a távoli Csagang tartomány áramellátásához."],
      ro: ["Are o capacitate de aproximativ 390 MW.", "Energia generată este împărțită între cele două țări.", "Contribuie la alimentarea cu energie a provinciei izolate Chagang."],
      en: ["Has a capacity of around 390 MW.", "The power generated is shared between the two countries.", "Contributes to the power supply of the remote Chagang Province."]
    }
  }
];

