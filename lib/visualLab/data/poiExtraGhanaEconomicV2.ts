import type { POI } from "./poi";

export const poiExtraGhanaEconomicV2: POI[] = [
  {
    id: "ghana-tema-port",
    type: "port",
    parent: "GH-AA",
    coords: [-0.0039, 5.6264],
    name: { de: "Hafen von Tema", hu: "Tema Kikötő", ro: "Portul Tema", en: "Tema Port" },
    description: { de: "Der größte Seehafen in Ghana, der den größten Teil der nationalen Exporte und Importe abwickelt.", hu: "Ghána legnagyobb tengeri kikötője, amely a nemzeti export és import nagy részét kezeli.", ro: "Cel mai mare port maritim din Ghana, care gestionează cea mai mare parte a exporturilor și importurilor naționale.", en: "The largest seaport in Ghana, handling the majority of the national exports and imports." },
    facts: {
      de: ["Eröffnet 1962.", "Größter Hafen des Landes.", "Bedeutend für Kakao- und Aluminiumexporte."],
      hu: ["1962-ben nyílt meg.", "Az ország legnagyobb kikötője.", "Fontos a kakaó- és alumíniumexport szempontjából."],
      ro: ["Deschis în 1962.", "Cel mai mare port din țară.", "Important pentru exporturile de cacao și aluminiu."],
      en: ["Opened in 1962.", "Largest port in the country.", "Important for cocoa and aluminum exports."]
    }
  },
  {
    id: "ghana-takoradi-port",
    type: "port",
    parent: "GH-WP",
    coords: [-1.745, 4.8872],
    name: { de: "Hafen von Takoradi", hu: "Takoradi Kikötő", ro: "Portul Takoradi", en: "Takoradi Port" },
    description: { de: "Der älteste kommerzielle Seehafen Ghanas, bekannt für den Export von Holz, Mangan und Bauxit.", hu: "Ghána legrégebbi kereskedelmi kikötője, amely fa, mangán és bauxit exportjáról ismert.", ro: "Cel mai vechi port comercial din Ghana, cunoscut pentru exportul de lemn, mangan și bauxită.", en: "The oldest commercial seaport in Ghana, known for the export of timber, manganese, and bauxite." },
    facts: {
      de: ["Erbaut 1928.", "Zweitgrößter Hafen Ghanas.", "Wichtig für den Bergbau-Sektor."],
      hu: ["1928-ban épült.", "Ghána második legnagyobb kikötője.", "Fontos a bányászati szektor számára."],
      ro: ["Construit în 1928.", "Al doilea port ca mărime din Ghana.", "Important pentru sectorul minier."],
      en: ["Built in 1928.", "Second largest port in Ghana.", "Important for the mining sector."]
    }
  },
  {
    id: "ghana-anglogold-ashanti",
    type: "industry",
    parent: "GH-AH",
    coords: [-1.6705, 6.2081],
    name: { de: "AngloGold Ashanti Mine", hu: "AngloGold Ashanti Bánya", ro: "Mina AngloGold Ashanti", en: "AngloGold Ashanti Mine" },
    description: { de: "Eine riesige Goldmine in Obuasi, eine der größten und tiefsten Minen der Welt.", hu: "Egy hatalmas aranybánya Obuasiban, a világ egyik legnagyobb és legmélyebb bányája.", ro: "O mină masivă de aur în Obuasi, una dintre cele mai mari și mai adânci mine din lume.", en: "A massive gold mine in Obuasi, one of the largest and deepest mines in the world." },
    facts: {
      de: ["Untertagebau.", "Produziert seit über einem Jahrhundert Gold.", "Tiefbau bis fast 1.500 Meter."],
      hu: ["Földalatti bánya.", "Több mint egy évszázada termel aranyat.", "Majdnem 1500 méter mély."],
      ro: ["Minerit subteran.", "Produce aur de peste un secol.", "Adâncime de până la aproape 1.500 de metri."],
      en: ["Underground mining.", "Producing gold for over a century.", "Depth reaches almost 1,500 meters."]
    }
  },
  {
    id: "ghana-tarkwa-mine",
    type: "industry",
    parent: "GH-WP",
    coords: [-1.9833, 5.3],
    name: { de: "Gold Fields Tarkwa Mine", hu: "Gold Fields Tarkwa Bánya", ro: "Mina de Aur Tarkwa", en: "Gold Fields Tarkwa Mine" },
    description: { de: "Einer der größten Goldtagebaue Ghanas, der erheblich zur nationalen Goldproduktion beiträgt.", hu: "Ghána egyik legnagyobb külszíni aranybányája, amely jelentősen hozzájárul a nemzeti aranytermeléshez.", ro: "Una dintre cele mai mari mine de aur la suprafață din Ghana, contribuind semnificativ la producția națională.", en: "One of the largest open-pit gold mines in Ghana, contributing significantly to national gold production." },
    facts: {
      de: ["Tagebaubetrieb.", "Befindet sich im Tarkwa-Nsuaem Gebiet.", "Hohe jährliche Goldausbeute."],
      hu: ["Külszíni fejtés.", "A Tarkwa-Nsuaem régióban található.", "Magas éves aranyhozam."],
      ro: ["Operațiune la suprafață.", "Situată în zona Tarkwa-Nsuaem.", "Producție anuală ridicată de aur."],
      en: ["Open-pit operation.", "Located in the Tarkwa-Nsuaem area.", "High annual gold yield."]
    }
  },
  {
    id: "ghana-awaso-bauxite",
    type: "industry",
    parent: "GH-WN",
    coords: [-2.2619, 6.223],
    name: { de: "Bauxitbergwerk Awaso", hu: "Awaso Bauxitbánya", ro: "Mina de Bauxită Awaso", en: "Awaso Bauxite Mine" },
    description: { de: "Die einzige in Betrieb befindliche Bauxitmine in Ghana, die den Rohstoff für die Aluminiumproduktion liefert.", hu: "Az egyetlen működő bauxitbánya Ghánában, amely nyersanyagot biztosít az alumíniumgyártáshoz.", ro: "Singura mină de bauxită operațională din Ghana, furnizând materia primă pentru producția de aluminiu.", en: "The only operating bauxite mine in Ghana, supplying the raw material for aluminum production." },
    facts: {
      de: ["Seit den 1940er Jahren in Betrieb.", "Produziert Aluminiumerz.", "Wichtig für Ghanas Industrie."],
      hu: ["Az 1940-es évek óta működik.", "Alumíniumércet termel.", "Fontos Ghána ipara számára."],
      ro: ["În funcțiune din anii 1940.", "Produce minereu de aluminiu.", "Importantă pentru industria Ghanei."],
      en: ["Operating since the 1940s.", "Produces aluminum ore.", "Important for Ghana's industry."]
    }
  },
  {
    id: "ghana-nsuta-manganese",
    type: "industry",
    parent: "GH-WP",
    coords: [-1.9877, 5.2934],
    name: { de: "Manganbergwerk Nsuta", hu: "Nsuta Mangánbánya", ro: "Mina de Mangan Nsuta", en: "Nsuta Manganese Mine" },
    description: { de: "Eine bedeutende Manganmine nahe Tarkwa, die hochwertiges Manganerz für den Export abbaut.", hu: "Jelentős mangánbánya Tarkwa közelében, amely kiváló minőségű mangánércet bányász exportra.", ro: "O mină importantă de mangan lângă Tarkwa, care extrage minereu de mangan de înaltă calitate pentru export.", en: "A major manganese mine near Tarkwa, extracting high-quality manganese ore for export." },
    facts: {
      de: ["Über 100 Jahre in Betrieb.", "Einer der weltweit führenden Mangan-Exporteure.", "Nahe der Hafenstadt Takoradi gelegen."],
      hu: ["Több mint 100 éve működik.", "A világ egyik vezető mangánexportőre.", "Takoradi kikötővárosához közel található."],
      ro: ["În funcțiune de peste 100 de ani.", "Unul dintre principalii exportatori mondiali de mangan.", "Situată aproape de portul Takoradi."],
      en: ["Operating for over 100 years.", "One of the world's top manganese exporters.", "Located close to the port of Takoradi."]
    }
  },
  {
    id: "ghana-akwatia-diamonds",
    type: "industry",
    parent: "GH-EP",
    coords: [-0.8066, 6.0469],
    name: { de: "Diamantenfeld Akwatia", hu: "Akwatia Gyémántmező", ro: "Câmpul de Diamante Akwatia", en: "Akwatia Diamond Field" },
    description: { de: "Das historische Zentrum des Diamantenabbaus in Ghana, bekannt für die Produktion von Industriediamanten.", hu: "A gyémántbányászat történelmi központja Ghánában, amely ipari gyémántok termeléséről ismert.", ro: "Centrul istoric al mineritului de diamante din Ghana, cunoscut pentru producția de diamante industriale.", en: "The historic center of diamond mining in Ghana, known for the production of industrial diamonds." },
    facts: {
      de: ["Bedeutendes Alluvialvorkommen.", "Hauptsächlich Industriediamanten.", "Prägte die Region über Jahrzehnte."],
      hu: ["Jelentős alluviális lelőhely.", "Főként ipari gyémántok.", "Évtizedeken át meghatározta a régiót."],
      ro: ["Zăcământ aluvial semnificativ.", "În principal diamante industriale.", "A modelat regiunea timp de decenii."],
      en: ["Significant alluvial deposit.", "Mostly industrial diamonds.", "Shaped the region for decades."]
    }
  },
  {
    id: "ghana-jubilee-oil",
    type: "industry",
    parent: "GH-WP",
    coords: [-2.05, 4.4167],
    name: { de: "Jubilee-Ölfeld", hu: "Jubilee Olajmező", ro: "Câmpul Petrolier Jubilee", en: "Jubilee Oil Field" },
    description: { de: "Das erste und größte Offshore-Ölfeld Ghanas im Golf von Guinea, das 2007 entdeckt wurde.", hu: "Ghána első és legnagyobb tengeri olajmezője a Guineai-öbölben, amelyet 2007-ben fedeztek fel.", ro: "Primul și cel mai mare câmp petrolier offshore din Ghana, în Golful Guineei, descoperit în 2007.", en: "Ghana's first and largest offshore oil field in the Gulf of Guinea, discovered in 2007." },
    facts: {
      de: ["Entdeckt im Jahr 2007.", "Produktionsbeginn 2010.", "Verwendet FPSO-Einheiten (schwimmende Produktionsanlagen)."],
      hu: ["2007-ben fedezték fel.", "A termelés 2010-ben kezdődött.", "FPSO (úszó termelési) egységeket használ."],
      ro: ["Descoperit în 2007.", "Producția a început în 2010.", "Folosește unități FPSO (facilități plutitoare)."],
      en: ["Discovered in 2007.", "Production started in 2010.", "Uses FPSO (floating production) units."]
    }
  },
  {
    id: "ghana-tema-oil-refinery",
    type: "industry",
    parent: "GH-AA",
    coords: [-0.0097, 5.6669],
    name: { de: "Ölraffinerie Tema", hu: "Tema Olajfinomító", ro: "Rafinăria de Petrol Tema", en: "Tema Oil Refinery" },
    description: { de: "Die einzige Erdölraffinerie in Ghana, die Rohöl zu Benzin, Diesel und Flüssiggas verarbeitet.", hu: "Az egyetlen kőolaj-finomító Ghánában, amely nyersolajat dolgoz fel benzinné, dízellé és PB-gázzá.", ro: "Singura rafinărie de petrol din Ghana, care procesează țițeiul în benzină, motorină și gaz petrolier lichefiat.", en: "The only petroleum refinery in Ghana, processing crude oil into gasoline, diesel, and liquefied petroleum gas." },
    facts: {
      de: ["Kapazität von 45.000 Barrel pro Tag.", "Versorgt den lokalen Markt.", "Nahe dem Hafen von Tema gelegen."],
      hu: ["Napi 45 000 hordó kapacitás.", "Ellátja a helyi piacot.", "A temai kikötő közelében található."],
      ro: ["Capacitate de 45.000 de barili pe zi.", "Aprovizionează piața locală.", "Situată lângă portul Tema."],
      en: ["Capacity of 45,000 barrels per day.", "Supplies the local market.", "Located near Tema Port."]
    }
  },
  {
    id: "ghana-valco-aluminum",
    type: "industry",
    parent: "GH-AA",
    coords: [0.0197, 5.6569],
    name: { de: "VALCO-Aluminiumhütte", hu: "VALCO Alumíniumkohó", ro: "Topitoria de Aluminiu VALCO", en: "VALCO Aluminum Smelter" },
    description: { de: "Eine große Aluminiumhütte in Tema, die Energie vom Akosombo-Staudamm nutzt, um Aluminium herzustellen.", hu: "Nagy alumíniumkohó Temában, amely az Akosombo-gát energiáját használja alumínium előállítására.", ro: "O mare topitorie de aluminiu în Tema, care utilizează energia de la barajul Akosombo pentru a produce aluminiu.", en: "A large aluminum smelter in Tema that uses energy from the Akosombo Dam to produce aluminum." },
    facts: {
      de: ["Volta Aluminium Company.", "Nutzt Wasserkraft.", "Wichtiger industrieller Arbeitgeber."],
      hu: ["Volta Aluminium Company.", "Vízenergiát használ.", "Fontos ipari munkaadó."],
      ro: ["Volta Aluminium Company.", "Folosește energie hidroelectrică.", "Un angajator industrial important."],
      en: ["Volta Aluminium Company.", "Uses hydroelectric power.", "Important industrial employer."]
    }
  },
  {
    id: "ghana-takoradi-thermal",
    type: "industry",
    parent: "GH-WP",
    coords: [-1.6667, 4.9667],
    name: { de: "Kraftwerk Takoradi", hu: "Takoradi Erőmű", ro: "Centrala Electrică Takoradi", en: "Takoradi Power Station" },
    description: { de: "Ein wichtiges Wärmekraftwerk in Aboadze bei Takoradi, das Ghana mit zusätzlicher Elektrizität versorgt.", hu: "Egy fontos hőerőmű Aboadzéban, Takoradi mellett, amely további villamos energiával látja el Ghánát.", ro: "O centrală termică importantă în Aboadze, lângă Takoradi, care furnizează electricitate suplimentară Ghanei.", en: "A major thermal power station in Aboadze near Takoradi, providing additional electricity to Ghana." },
    facts: {
      de: ["Gas- und Dampfturbinenkraftwerk.", "Reduziert die Abhängigkeit von Wasserkraft.", "Kapazität von über 300 MW."],
      hu: ["Gáz- és gőzturbinás erőmű.", "Csökkenti a vízenergiától való függőséget.", "Több mint 300 MW kapacitás."],
      ro: ["Centrală cu ciclu combinat.", "Reduce dependența de hidroenergie.", "Capacitate de peste 300 MW."],
      en: ["Combined cycle power plant.", "Reduces reliance on hydropower.", "Capacity of over 300 MW."]
    }
  },
  {
    id: "ghana-chirano-gold",
    type: "industry",
    parent: "GH-WN",
    coords: [-2.35, 6.2667],
    name: { de: "Chirano Goldmine", hu: "Chirano Aranybánya", ro: "Mina de Aur Chirano", en: "Chirano Gold Mine" },
    description: { de: "Ein Goldbergbau-Komplex mit Tage- und Untertagebau in der westlichen Nordregion von Ghana.", hu: "Kombinált külszíni és földalatti aranybányászati komplexum Ghána nyugati északi régiójában.", ro: "Un complex minier de aur de suprafață și subteran în Regiunea de Nord-Vest a Ghanei.", en: "A combined open-pit and underground gold mining complex in the Western North Region of Ghana." },
    facts: {
      de: ["Kombinierter Abbau.", "Betrieben von Kinross Gold.", "Produziert jährlich beträchtliche Mengen Gold."],
      hu: ["Kombinált bányászat.", "A Kinross Gold üzemelteti.", "Évente jelentős mennyiségű aranyat termel."],
      ro: ["Exploatare combinată.", "Operat de Kinross Gold.", "Produce cantități semnificative de aur anual."],
      en: ["Combined mining operation.", "Operated by Kinross Gold.", "Produces significant amounts of gold annually."]
    }
  },
  {
    id: "ghana-iduapriem-gold",
    type: "industry",
    parent: "GH-WP",
    coords: [-2.0167, 5.2333],
    name: { de: "Iduapriem Goldmine", hu: "Iduapriem Aranybánya", ro: "Mina de Aur Iduapriem", en: "Iduapriem Gold Mine" },
    description: { de: "Eine Tagebau-Goldmine im Tarkwa-Nsuaem-Gemeindebezirk, die sich auf ressourcenschonenden Abbau konzentriert.", hu: "Külszíni aranybánya a Tarkwa-Nsuaem körzetben, amely az erőforrás-takarékos bányászatra összpontosít.", ro: "O mină de aur la suprafață în municipalitatea Tarkwa-Nsuaem, axată pe exploatarea eficientă a resurselor.", en: "An open-pit gold mine in the Tarkwa-Nsuaem municipality, focusing on resource-efficient mining." },
    facts: {
      de: ["Gehört zu AngloGold Ashanti.", "Tagebaubetrieb.", "Fokus auf Umweltschutz im Bergbau."],
      hu: ["Az AngloGold Ashanti tulajdona.", "Külszíni fejtés.", "Fókuszban a környezetvédelem a bányászatban."],
      ro: ["Deținută de AngloGold Ashanti.", "Operațiune la suprafață.", "Accent pe protecția mediului în minerit."],
      en: ["Owned by AngloGold Ashanti.", "Open-pit operation.", "Focus on environmental protection in mining."]
    }
  },
  {
    id: "ghana-bogoso-gold",
    type: "industry",
    parent: "GH-WP",
    coords: [-2.0333, 5.5333],
    name: { de: "Bogoso Goldmine", hu: "Bogoso Aranybánya", ro: "Mina de Aur Bogoso", en: "Bogoso Gold Mine" },
    description: { de: "Ein historisches Goldbergbaugebiet im Südwesten Ghanas, das Teil des Ashanti-Goldgürtels ist.", hu: "Történelmi aranybányászati terület Délnyugat-Ghánában, amely az Ashanti aranyöv része.", ro: "O zonă istorică de exploatare a aurului în sud-vestul Ghanei, parte a centurii de aur Ashanti.", en: "A historic gold mining area in southwestern Ghana, part of the Ashanti Gold Belt." },
    facts: {
      de: ["Traditionsreicher Abbau.", "Erstreckt sich über ein großes Gebiet.", "Bekannt für refraktäres Erz."],
      hu: ["Hagyományokkal rendelkező bányászat.", "Nagy területre terjed ki.", "Hőálló érceiről ismert."],
      ro: ["Exploatare tradițională.", "Se întinde pe o zonă extinsă.", "Cunoscută pentru minereul refractar."],
      en: ["Traditional mining area.", "Covers a large area.", "Known for refractory ore."]
    }
  },
  {
    id: "ghana-ahafo-gold",
    type: "industry",
    parent: "GH-AF",
    coords: [-2.3667, 7.0333],
    name: { de: "Ahafo Goldmine", hu: "Ahafo Aranybánya", ro: "Mina de Aur Ahafo", en: "Ahafo Gold Mine" },
    description: { de: "Eine hochmoderne Goldmine von Newmont, die sowohl im Tagebau als auch unter Tage betrieben wird.", hu: "A Newmont korszerű aranybányája, amely külszíni és földalatti fejtéssel is működik.", ro: "O mină de aur de ultimă generație a Newmont, operată atât la suprafață, cât și în subteran.", en: "A state-of-the-art gold mine by Newmont, operated both open-pit and underground." },
    facts: {
      de: ["Betrieben von Newmont.", "Zwei Abbauzentren.", "Bedeutender Wirtschaftsfaktor der Ahafo-Region."],
      hu: ["A Newmont üzemelteti.", "Két bányászati központ.", "Az Ahafo régió jelentős gazdasági tényezője."],
      ro: ["Operată de Newmont.", "Două centre de exploatare.", "Factor economic major în regiunea Ahafo."],
      en: ["Operated by Newmont.", "Two mining centers.", "Major economic factor in the Ahafo Region."]
    }
  },
  {
    id: "ghana-akyem-gold",
    type: "industry",
    parent: "GH-EP",
    coords: [-1.05, 6.3167],
    name: { de: "Akyem Goldmine", hu: "Akyem Aranybánya", ro: "Mina de Aur Akyem", en: "Akyem Gold Mine" },
    description: { de: "Ein großer Goldtagebau im östlichen Ghana, bekannt für hohe Sicherheits- und Umweltstandards.", hu: "Nagy külszíni aranybánya Kelet-Ghánában, amely magas biztonsági és környezetvédelmi szabványairól ismert.", ro: "O mare mină de aur la suprafață în estul Ghanei, recunoscută pentru standardele înalte de siguranță și mediu.", en: "A large open-pit gold mine in eastern Ghana, known for its high safety and environmental standards." },
    facts: {
      de: ["Newmont-Operation.", "Eröffnet 2013.", "Ausgezeichnet für Umweltmanagement."],
      hu: ["Newmont művelet.", "2013-ban nyílt meg.", "Díjnyertes környezetirányítás."],
      ro: ["Operațiune Newmont.", "Deschisă în 2013.", "Premiată pentru managementul mediului."],
      en: ["Newmont operation.", "Opened in 2013.", "Awarded for environmental management."]
    }
  },
  {
    id: "ghana-damang-gold",
    type: "industry",
    parent: "GH-WP",
    coords: [-1.9333, 5.5167],
    name: { de: "Damang Goldmine", hu: "Damang Aranybánya", ro: "Mina de Aur Damang", en: "Damang Gold Mine" },
    description: { de: "Eine der wichtigsten Minen von Gold Fields in Westafrika, gelegen in der Nähe der Tarkwa-Mine.", hu: "A Gold Fields egyik legfontosabb bányája Nyugat-Afrikában, a Tarkwa bánya közelében.", ro: "Una dintre cele mai importante mine ale Gold Fields în Africa de Vest, situată lângă mina Tarkwa.", en: "One of the most important mines for Gold Fields in West Africa, located near the Tarkwa mine." },
    facts: {
      de: ["Tagebaubetrieb.", "Erweitert die Lebensdauer durch tiefere Grabungen.", "Schafft viele lokale Arbeitsplätze."],
      hu: ["Külszíni fejtés.", "Mélyebb ásásokkal növeli az élettartamot.", "Sok helyi munkahelyet teremt."],
      ro: ["Operațiune la suprafață.", "Extinde durata de viață prin săpături mai adânci.", "Creează multe locuri de muncă locale."],
      en: ["Open-pit operation.", "Extends lifespan through deeper digging.", "Creates many local jobs."]
    }
  },
  {
    id: "ghana-asanko-gold",
    type: "industry",
    parent: "GH-AH",
    coords: [-1.9667, 6.3667],
    name: { de: "Asanko Goldmine", hu: "Asanko Aranybánya", ro: "Mina de Aur Asanko", en: "Asanko Gold Mine" },
    description: { de: "Ein Multi-Gruben-Goldprojekt im Amansie West District der Ashanti-Region.", hu: "Többgödrös aranyprojekt az Ashanti régió Amansie West körzetében.", ro: "Un proiect aurifer cu mai multe gropi în Districtul Amansie West din Regiunea Ashanti.", en: "A multi-pit gold project in the Amansie West District of the Ashanti Region." },
    facts: {
      de: ["Verarbeitet Oxid- und Gesteinserze.", "Wichtiger regionaler Arbeitgeber.", "Südwestlich von Kumasi."],
      hu: ["Oxid- és kőzetérceket dolgoz fel.", "Fontos regionális munkaadó.", "Kumasitól délnyugatra."],
      ro: ["Procesează minereuri de oxid și de rocă.", "Un angajator regional important.", "La sud-vest de Kumasi."],
      en: ["Processes oxide and rock ores.", "Important regional employer.", "Southwest of Kumasi."]
    }
  },
  {
    id: "ghana-edikan-gold",
    type: "industry",
    parent: "GH-CP",
    coords: [-1.8667, 5.9667],
    name: { de: "Edikan Goldmine", hu: "Edikan Aranybánya", ro: "Mina de Aur Edikan", en: "Edikan Gold Mine" },
    description: { de: "Eine Goldmine von Perseus Mining, die erste Mine des Unternehmens in Westafrika.", hu: "A Perseus Mining aranybányája, a vállalat első bányája Nyugat-Afrikában.", ro: "O mină de aur operată de Perseus Mining, prima mină a companiei în Africa de Vest.", en: "A gold mine operated by Perseus Mining, the company's first mine in West Africa." },
    facts: {
      de: ["Produktion begann 2012.", "Großes Goldvorkommen.", "Betreibt mehrere Tagebaue."],
      hu: ["A termelés 2012-ben kezdődött.", "Nagy aranytartalék.", "Több külszíni bányát is üzemeltet."],
      ro: ["Producția a început în 2012.", "Rezervă mare de aur.", "Operează mai multe mine la suprafață."],
      en: ["Production began in 2012.", "Large gold reserve.", "Operates multiple open pits."]
    }
  },
  {
    id: "ghana-nzema-gold",
    type: "industry",
    parent: "GH-WP",
    coords: [-2.35, 5.05],
    name: { de: "Nzema Goldmine", hu: "Nzema Aranybánya", ro: "Mina de Aur Nzema", en: "Nzema Gold Mine" },
    description: { de: "Eine Goldmine im Nzema East District, die sich auf den Abbau oberflächennaher Vorkommen konzentriert.", hu: "Aranybánya a Nzema East körzetben, amely a felszínközeli lerakódások bányászatára összpontosít.", ro: "O mină de aur în districtul Nzema East, axată pe extragerea depozitelor de lângă suprafață.", en: "A gold mine in the Nzema East District, focusing on mining near-surface deposits." },
    facts: {
      de: ["Fokus auf Oberflächenerze.", "Nahe der Küste gelegen.", "Verwendet CIL-Aufbereitungsverfahren."],
      hu: ["A felszíni ércekre fókuszál.", "A part közelében található.", "CIL feldolgozási módszert használ."],
      ro: ["Se concentrează pe minereurile de suprafață.", "Situată aproape de coastă.", "Folosește metoda de procesare CIL."],
      en: ["Focuses on surface ores.", "Located near the coast.", "Uses CIL processing method."]
    }
  },
  {
    id: "ghana-prestea-underground",
    type: "industry",
    parent: "GH-WP",
    coords: [-2.1467, 5.4328],
    name: { de: "Prestea Goldbergwerk", hu: "Prestea Aranybánya", ro: "Mina de Aur Prestea", en: "Prestea Gold Mine" },
    description: { de: "Eine traditionsreiche Untertage-Goldmine, die nach Jahren der Inaktivität wiedereröffnet wurde.", hu: "Nagy hagyományokkal rendelkező földalatti aranybánya, amelyet évek inaktivitása után újranyitottak.", ro: "O mină de aur subterană tradițională, redeschisă după ani de inactivitate.", en: "A traditional underground gold mine that was reopened after years of inactivity." },
    facts: {
      de: ["Über 100 Jahre Geschichte.", "Untertagebau.", "Modernisiert für höhere Effizienz."],
      hu: ["Több mint 100 éves múlt.", "Földalatti bánya.", "A nagyobb hatékonyság érdekében modernizálták."],
      ro: ["O istorie de peste 100 de ani.", "Minerit subteran.", "Modernizată pentru o mai mare eficiență."],
      en: ["Over 100 years of history.", "Underground mine.", "Modernized for higher efficiency."]
    }
  },
  {
    id: "ghana-buipe-cement",
    type: "industry",
    parent: "GH-SR",
    coords: [-1.15, 8.7833],
    name: { de: "Zementfabrik Buipe", hu: "Buipe Cementgyár", ro: "Fabrica de Ciment Buipe", en: "Buipe Cement Plant" },
    description: { de: "Ein wichtiges Zementwerk im Norden Ghanas, das Baustoffe für die regionalen Infrastrukturprojekte liefert.", hu: "Fontos cementgyár Észak-Ghánában, amely építőanyagokat szállít a regionális infrastrukturális projektekhez.", ro: "O fabrică importantă de ciment în nordul Ghanei, care furnizează materiale de construcție pentru proiectele regionale.", en: "An important cement plant in northern Ghana, providing building materials for regional infrastructure projects." },
    facts: {
      de: ["Produziert Portlandzement.", "Versorgt die nördlichen Regionen.", "Wichtig für die Bauindustrie."],
      hu: ["Portlandcementet gyárt.", "Ellátja az északi régiókat.", "Fontos az építőipar számára."],
      ro: ["Produce ciment Portland.", "Aprovizionează regiunile nordice.", "Importantă pentru industria construcțiilor."],
      en: ["Produces Portland cement.", "Supplies the northern regions.", "Important for the construction industry."]
    }
  },
  {
    id: "ghana-ghacem-tema",
    type: "industry",
    parent: "GH-AA",
    coords: [-0.015, 5.635],
    name: { de: "Ghacem Zementwerk Tema", hu: "Ghacem Cementgyár Tema", ro: "Fabrica de Ciment Ghacem Tema", en: "Ghacem Cement Plant Tema" },
    description: { de: "Das Hauptwerk des größten Zementherstellers in Ghana, gelegen im Industriegebiet von Tema.", hu: "Ghána legnagyobb cementgyártójának fő üzeme a temai ipari övezetben.", ro: "Uzina principală a celui mai mare producător de ciment din Ghana, situată în zona industrială Tema.", en: "The main plant of the largest cement manufacturer in Ghana, located in the Tema industrial area." },
    facts: {
      de: ["Ghana Cement Company.", "Größter Zementproduzent.", "Importiert Klinker über den Hafen Tema."],
      hu: ["Ghana Cement Company.", "A legnagyobb cementgyártó.", "A temai kikötőn keresztül importál klinkert."],
      ro: ["Ghana Cement Company.", "Cel mai mare producător de ciment.", "Importă clincher prin portul Tema."],
      en: ["Ghana Cement Company.", "Largest cement producer.", "Imports clinker via Tema port."]
    }
  },
  {
    id: "ghana-ghacem-takoradi",
    type: "industry",
    parent: "GH-WP",
    coords: [-1.755, 4.895],
    name: { de: "Ghacem Zementwerk Takoradi", hu: "Ghacem Cementgyár Takoradi", ro: "Fabrica de Ciment Ghacem Takoradi", en: "Ghacem Cement Plant Takoradi" },
    description: { de: "Ein weiteres großes Zementwerk von Ghacem, das den westlichen Teil des Landes versorgt.", hu: "A Ghacem másik nagy cementgyára, amely az ország nyugati részét látja el.", ro: "O altă mare fabrică de ciment Ghacem, care aprovizionează partea de vest a țării.", en: "Another large cement plant by Ghacem, supplying the western part of the country." },
    facts: {
      de: ["Strategisch nahe dem Hafen Takoradi.", "Reduziert Transportkosten.", "Erweitert die Produktionskapazität."],
      hu: ["Stratégiailag a takoradi kikötő közelében.", "Csökkenti a szállítási költségeket.", "Bővíti a termelési kapacitást."],
      ro: ["Situată strategic lângă portul Takoradi.", "Reduce costurile de transport.", "Extinde capacitatea de producție."],
      en: ["Strategically located near Takoradi port.", "Reduces transport costs.", "Expands production capacity."]
    }
  },
  {
    id: "ghana-blue-skies",
    type: "industry",
    parent: "GH-EP",
    coords: [-0.3167, 5.8167],
    name: { de: "Blue Skies Saftfabrik", hu: "Blue Skies Gyümölcslégyár", ro: "Fabrica de Sucuri Blue Skies", en: "Blue Skies Juice Factory" },
    description: { de: "Ein renommiertes Unternehmen in Nsawam, das frisches Obst und Säfte für den europäischen Markt produziert.", hu: "Egy neves vállalat Nsawamban, amely friss gyümölcsöt és gyümölcsleveket állít elő az európai piacra.", ro: "O companie renumită din Nsawam care produce fructe proaspete și sucuri pentru piața europeană.", en: "A renowned company in Nsawam producing fresh fruit and juices for the European market." },
    facts: {
      de: ["Fokus auf Fairtrade.", "Exportiert frisch geschnittenes Obst.", "Wichtiger Arbeitgeber im Agrarsektor."],
      hu: ["A méltányos kereskedelemre fókuszál.", "Frissen vágott gyümölcsöt exportál.", "Fontos munkaadó az agrárszektorban."],
      ro: ["Se concentrează pe comerțul echitabil.", "Exportă fructe proaspăt tăiate.", "Un angajator important în sectorul agricol."],
      en: ["Focuses on Fairtrade.", "Exports fresh-cut fruit.", "Important employer in the agricultural sector."]
    }
  },
  {
    id: "ghana-twifo-oil-palm",
    type: "industry",
    parent: "GH-CP",
    coords: [-1.4333, 5.6167],
    name: { de: "Twifo Palmölfabrik", hu: "Twifo Pálmaolajgyár", ro: "Fabrica de Ulei de Palmier Twifo", en: "Twifo Oil Palm Plant" },
    description: { de: "Eine der größten Palmölmühlen in Ghana, die rohes Palmöl aus lokalen Plantagen extrahiert.", hu: "Ghána egyik legnagyobb pálmaolajüzeme, amely nyers pálmaolajat von ki a helyi ültetvényekről.", ro: "Una dintre cele mai mari fabrici de ulei de palmier din Ghana, extrăgând ulei de palmier brut din plantațiile locale.", en: "One of the largest palm oil mills in Ghana, extracting crude palm oil from local plantations." },
    facts: {
      de: ["Verarbeitet Tausende Tonnen Palmfrüchte.", "Unterstützt lokale Bauern.", "Produziert Palmöl für Lebensmittel und Kosmetik."],
      hu: ["Több ezer tonna pálmagyümölcsöt dolgoz fel.", "Támogatja a helyi gazdákat.", "Pálmaolajat állít elő élelmiszerekhez és kozmetikumokhoz."],
      ro: ["Procesează mii de tone de fructe de palmier.", "Sprijină fermierii locali.", "Produce ulei de palmier pentru alimente și cosmetice."],
      en: ["Processes thousands of tons of palm fruits.", "Supports local farmers.", "Produces palm oil for food and cosmetics."]
    }
  },
  {
    id: "ghana-cargill-cocoa",
    type: "industry",
    parent: "GH-AA",
    coords: [-0.01, 5.66],
    name: { de: "Cargill Kakaoverarbeitung", hu: "Cargill Kakaófeldolgozó", ro: "Procesarea de Cacao Cargill", en: "Cargill Cocoa Processing" },
    description: { de: "Eine hochmoderne Kakaoverarbeitungsanlage in Tema, die ghanaischen Kakao zu Pulver und Butter verarbeitet.", hu: "Korszerű kakaófeldolgozó üzem Temában, amely a ghánai kakaót porrá és vajjá dolgozza fel.", ro: "O instalație modernă de procesare a cacauei în Tema, care transformă cacaua ghaneză în pudră și unt.", en: "A state-of-the-art cocoa processing facility in Tema that processes Ghanaian cocoa into powder and butter." },
    facts: {
      de: ["Erhöht die Wertschöpfung im Land.", "Produziert Kakaomasse, -butter und -pulver.", "Nutzt modernste Technologie."],
      hu: ["Növeli az országon belüli hozzáadott értéket.", "Kakaómasszát, -vajat és -port állít elő.", "A legújabb technológiát alkalmazza."],
      ro: ["Crește valoarea adăugată în țară.", "Produce masă, unt și pudră de cacao.", "Folosește tehnologie de ultimă oră."],
      en: ["Increases value addition in the country.", "Produces cocoa liquor, butter, and powder.", "Uses state-of-the-art technology."]
    }
  },
  {
    id: "ghana-cpc-cocoa",
    type: "industry",
    parent: "GH-AA",
    coords: [-0.02, 5.67],
    name: { de: "CPC Kakaofabrik", hu: "CPC Kakaógyár", ro: "Fabrica de Cacao CPC", en: "CPC Cocoa Processing Company" },
    description: { de: "Ein staatlich unterstütztes Unternehmen in Tema, das hochwertige Schokolade und Halbfabrikate produziert.", hu: "Egy államilag támogatott vállalat Temában, amely kiváló minőségű csokoládét és félkész termékeket gyárt.", ro: "O companie susținută de stat în Tema, care produce ciocolată de înaltă calitate și produse semifinite.", en: "A state-backed company in Tema producing high-quality chocolate and semi-finished products." },
    facts: {
      de: ["Cocoa Processing Company.", "Bekannt für die Marke 'Golden Tree'.", "Verarbeitet ausschließlich Premium-Kakao."],
      hu: ["Cocoa Processing Company.", "A 'Golden Tree' márkáról ismert.", "Kizárólag prémium kakaót dolgoz fel."],
      ro: ["Cocoa Processing Company.", "Cunoscută pentru brandul 'Golden Tree'.", "Procesează doar cacao premium."],
      en: ["Cocoa Processing Company.", "Known for the 'Golden Tree' brand.", "Processes only premium cocoa."]
    }
  },
  {
    id: "ghana-atuabo-gas",
    type: "industry",
    parent: "GH-WP",
    coords: [-2.5667, 4.9833],
    name: { de: "Atuabo Gasverarbeitungsanlage", hu: "Atuabo Gázfeldolgozó", ro: "Uzina de Procesare a Gazelor Atuabo", en: "Atuabo Gas Processing Plant" },
    description: { de: "Die erste Gasverarbeitungsanlage Ghanas, die Begleitgas aus den Offshore-Ölfeldern nutzt.", hu: "Ghána első gázfeldolgozó üzeme, amely a tengeri olajmezőkről származó kísérőgázt használja.", ro: "Prima uzină de procesare a gazelor din Ghana, care utilizează gazul asociat din câmpurile petroliere offshore.", en: "Ghana's first gas processing plant, utilizing associated gas from offshore oil fields." },
    facts: {
      de: ["Betrieben von Ghana National Gas Company.", "Produziert Flüssiggas (LPG).", "Liefert Gas zur Stromerzeugung."],
      hu: ["A Ghana National Gas Company üzemelteti.", "PB-gázt állít elő.", "Gázt szállít áramtermeléshez."],
      ro: ["Operată de Ghana National Gas Company.", "Produce gaz petrolier lichefiat (GPL).", "Furnizează gaz pentru generarea energiei electrice."],
      en: ["Operated by Ghana National Gas Company.", "Produces liquefied petroleum gas (LPG).", "Supplies gas for power generation."]
    }
  },
  {
    id: "ghana-kantanka-auto",
    type: "industry",
    parent: "GH-CP",
    coords: [-0.6667, 5.4833],
    name: { de: "Kantanka Automobilwerk", hu: "Kantanka Autógyár", ro: "Fabrica de Automobile Kantanka", en: "Kantanka Automobile Plant" },
    description: { de: "Der erste einheimische Automobilhersteller in Ghana, der SUVs und Pick-ups vor Ort montiert.", hu: "Az első hazai autógyártó Ghánában, amely SUV-kat és pickupokat szerel össze helyben.", ro: "Primul producător auto indigen din Ghana, care asamblează SUV-uri și camionete la nivel local.", en: "The first indigenous automobile manufacturer in Ghana, assembling SUVs and pickup trucks locally." },
    facts: {
      de: ["Gegründet von Kwadwo Safo.", "Montiert Fahrzeuge im Land.", "Fördert die lokale Ingenieurskunst."],
      hu: ["Kwadwo Safo alapította.", "Járműveket szerel össze az országban.", "Elősegíti a helyi mérnöki tevékenységet."],
      ro: ["Fondată de Kwadwo Safo.", "Asamblează vehicule în țară.", "Promovează ingineria locală."],
      en: ["Founded by Kwadwo Safo.", "Assembles vehicles in the country.", "Promotes local engineering."]
    }
  }
];
