import type { POI } from "./poi";

export const poiExtraTogoEconomicV2: POI[] = [
  {
    id: "kpeme-wharf-economic-v2",
    type: "port",
    parent: "TG-M",
    coords: [1.512, 6.242],
    name: {
      de: "Kpémé Phosphat-Verladesteg",
      hu: "Kpémé foszfátrakodó móló",
      ro: "Moll de încărcare a fosfatului Kpémé",
      en: "Kpémé Phosphate Loading Wharf"},
    image: "/poi-images/kpeme-wharf-economic-v2.webp",
    description: {
      de: "Der Wharf von Kpémé ist eine spezialisierte Hafenanlage für den Export von Phosphaten, dem wichtigsten Bergbauprodukt Togos. Er ragt weit in den Atlantik hinein, um großen Schiffen das Anlegen zu ermöglichen. Geographie K8 - Exportwirtschaft.",
      hu: "A Kpémé móló egy speciális kikötői létesítmény Togo legfontosabb bányászati termékének, a foszfátnak az exportálására. Messze benyúlik az Atlanti-óceánba, hogy lehetővé tegye a nagy hajók kikötését. Földrajz K8 - Exportgazdaság.",
      ro: "Moll-ul din Kpémé este o instalație portuară specializată pentru exportul de fosfați, cel mai important produs minier din Togo. Se extinde mult în Atlantic pentru a permite ancorarea navelor mari. Geografie K8 - Economia de export.",
      en: "The Kpémé wharf is a specialized port facility for the export of phosphates, Togo's primary mining product. It extends far into the Atlantic to allow large vessels to dock. Geography K8 - Export economy."
    },
    facts: {
      de: ["Hauptausfuhrpunkt für Phosphate", "Industrielles Wahrzeichen der Küste", "Anbindung an die Mine in Hahotoé", "Spezialisierte Förderbandanlagen"],
      hu: ["A foszfát fő exportpontja", "A partvidék ipari jelképe", "Összeköttetés a hahotoéi bányával", "Speciális szállítószalag-rendszerek"],
      ro: ["Principalul punct de export pentru fosfați", "Simbol industrial al coastei", "Legătură cu mina din Hahotoé", "Instalații de benzi transportoare specializate"],
      en: ["Main export point for phosphates", "Industrial landmark of the coast", "Connected to the Hahotoé mine", "Specialized conveyor belt systems"]
    }, image: "/poi-images/kpeme-wharf-economic-v2.webp",
    descriptionAdvanced: {
      de: "Der Kpémé-Phosphatverladekai in Togo ist eine wichtige Infrastruktur für den Export von Phosphat, das in den Minen von Hahotoé und Kpogamé abgebaut wird. Der Kai liegt an der Atlantikküste im Süden des Landes. Er ermöglicht das Beladen von Frachtschiffen mit bis zu 50.000 Tonnen Tragfähigkeit. Die Anlage wird von der Société Nouvelle des Phosphates du Togo (SNPT) betrieben. Der Kai ist etwa 200 Meter lang und hat eine Wassertiefe von 10 Metern.",
      hu: "A kpéméi foszfátrakodó stég Togóban fontos infrastruktúra a Hahotoé és Kpogamé bányákból kitermelt foszfát exportjához. A stég az ország déli részén, az Atlanti-óceán partján található. Lehetővé teszi akár 50.000 tonna teherbírású teherhajók rakodását. Az létesítményt a Société Nouvelle des Phosphates du Togo (SNPT) üzemelteti. A stég hossza körülbelül 200 méter, a vízmélység 10 méter.",
      ro: "Cheiul de încărcare a fosfaților Kpémé din Togo este o infrastructură esențială pentru exportul fosfaților extrași din minele Hahotoé și Kpogamé. Cheiul este situat pe coasta Atlanticului, în sudul țării. Permite încărcarea navelor de marfă cu o capacitate de până la 50.000 de tone. Instalația este operată de Société Nouvelle des Phosphates du Togo (SNPT). Cheiul are aproximativ 200 de metri lungime și o adâncime a apei de 10 metri.",
      en: "Kpémé Phosphate Loading Wharf in Togo is a key infrastructure for exporting phosphate mined at Hahotoé and Kpogamé mines. Located on the Atlantic coast in southern Togo, it allows loading of cargo ships up to 50,000 tons capacity. The facility is operated by Société Nouvelle des Phosphates du Togo (SNPT). The wharf is about 200 meters long with a water depth of 10 meters.",
    },
    factsAdvanced: {
      de: ["Der Kpémé-Kai wurde 1961 erbaut.", "Er hat eine jährliche Umschlagskapazität von 3 Millionen Tonnen Phosphat.", "Die Wassertiefe beträgt 10 m.", "Die Kaianlage erstreckt sich über 200 m.", "Togo exportiert jährlich etwa 2,5 Millionen Tonnen Phosphat.", "Die SNPT beschäftigt rund 1.000 Mitarbeiter."],
      hu: ["A kpéméi stég 1961-ben épült.", "Éves átrakodási kapacitása 3 millió tonna foszfát.", "A vízmélység 10 m.", "A stég hossza 200 m.", "Togó évente körülbelül 2,5 millió tonna foszfátot exportál.", "Az SNPT körülbelül 1000 alkalmazottat foglalkoztat."],
      ro: ["Cheiul Kpémé a fost construit în 1961.", "Capacitatea anuală de manipulare este de 3 milioane de tone de fosfați.", "Adâncimea apei este de 10 m.", "Cheiul se întinde pe 200 m.", "Togo exportă anual aproximativ 2,5 milioane de tone de fosfați.", "SNPT angajează aproximativ 1.000 de angajați."],
      en: ["Kpémé wharf was built in 1961.", "Annual handling capacity is 3 million tons of phosphate.", "Water depth is 10 m.", "Wharf extends 200 m.", "Togo exports about 2.5 million tons of phosphate annually.", "SNPT employs around 1,000 workers."],
    },
  },
  {
    id: "snpt-hahotoe-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.385, 6.388],
    name: {
      de: "SNPT Phosphat-Mine Hahotoé",
      hu: "SNPT foszfátbánya, Hahotoé",
      ro: "Mina de fosfat SNPT Hahotoé",
      en: "SNPT Phosphate Mine Hahotoé"},
    image: "/poi-images/snpt-hahotoe-economic-v2.webp",
    description: {
      de: "Die Mine in Hahotoé ist eines der größten Phosphatabbaugebiete Westafrikas und wird von der Société Nouvelle des Phosphates du Togo betrieben. Der Tagebau prägt die Landschaft der Maritime-Region maßgeblich. Geographie K8 - Bergbau.",
      hu: "A hahotoéi bánya Nyugat-Afrika egyik legnagyobb foszfátkitermelő területe, amelyet a Société Nouvelle des Phosphates du Togo üzemeltet. A külszíni fejtés jelentősen meghatározza a Maritime régió tájképét. Földrajz K8 - Bányászat.",
      ro: "Mina din Hahotoé este una dintre cele mai mari zone de extracție a fosfatului din Africa de Vest, fiind operată de Société Nouvelle des Phosphates du Togo. Exploatarea la suprafață marchează semnificativ peisajul regiunii Maritime. Geografie K8 - Minerit.",
      en: "The Hahotoé mine is one of West Africa's largest phosphate mining areas, operated by the Société Nouvelle des Phosphates du Togo. The open-cast mine significantly shapes the landscape of the Maritime region. Geography K8 - Mining."
    },
    facts: {
      de: ["Großer Phosphat-Tagebau", "Wichtigster Wirtschaftszweig des Landes", "Einsatz riesiger Schaufelradbagger", "Rohstoff für die globale Düngemittelindustrie"],
      hu: ["Hatalmas külszíni foszfátfejtés", "Az ország legfontosabb gazdasági ágazata", "Óriási kotrógépek használata", "Alapanyag a globális műtrágyaipar számára"],
      ro: ["Exploatare mare de fosfat la suprafață", "Cea mai importantă ramură economică a țării", "Utilizarea excavatoarelor gigantice", "Materie primă pentru industria globală a îngrășămintelor"],
      en: ["Large open-cast phosphate mine", "Most important economic sector of the country", "Use of massive bucket-wheel excavators", "Raw material for the global fertilizer industry"]
    },
    descriptionAdvanced: {
      de: "Die SNPT-Phosphatmine Hahotoé in Togo ist eines der größten Bergwerke des Landes. Sie liegt etwa 40 Kilometer nördlich von Lomé. Die Mine fördert sedimentäres Phosphat, das in der Landwirtschaft als Dünger verwendet wird. Die Förderung erfolgt im Tagebau. Die Reserven werden auf 60 Millionen Tonnen geschätzt. Die Mine ist eine wichtige Einnahmequelle für Togo.",
      hu: "A togói Hahotoéi SNPT foszfátbánya az ország egyik legnagyobb bányája. Lomé-tól körülbelül 40 kilométerre északra található. A bánya üledékes foszfátot termel, amelyet a mezőgazdaságban használnak műtrágyaként. A kitermelés külszíni fejtéssel történik. A készleteket 60 millió tonnára becsülik. A bánya fontos bevételi forrás Togo számára.",
      ro: "Mina de fosfați SNPT Hahotoé din Togo este una dintre cele mai mari mine din țară. Se află la aproximativ 40 de kilometri nord de Lomé. Mina extrage fosfat sedimentar, utilizat în agricultură ca îngrășământ. Exploatarea se face în carieră deschisă. Rezervele sunt estimate la 60 de milioane de tone. Mina este o sursă importantă de venit pentru Togo.",
      en: "SNPT Phosphate Mine Hahotoé in Togo is one of the country's largest mines. Located about 40 kilometers north of Lomé, it extracts sedimentary phosphate used as fertilizer. Mining is open-pit. Reserves are estimated at 60 million tons. The mine is a major revenue source for Togo.",
    },
    factsAdvanced: {
      de: ["Die Mine Hahotoé produziert jährlich 2 Millionen Tonnen Phosphat.", "Das Bergwerk erstreckt sich über eine Fläche von 15 km².", "Die Phosphatkonzentration beträgt 35 % P2O5.", "Die Mine wurde 1959 eröffnet.", "Sie beschäftigt 800 Mitarbeiter.", "Die Transportbandlänge zur Aufbereitungsanlage beträgt 10 km."],
      hu: ["A Hahotoé bánya évente 2 millió tonna foszfátot termel.", "A bánya területe 15 km².", "A foszfátkoncentráció 35% P2O5.", "A bányát 1959-ben nyitották meg.", "800 alkalmazottat foglalkoztat.", "A szállítószalag hossza a feldolgozóüzemig 10 km."],
      ro: ["Mina Hahotoé produce anual 2 milioane de tone de fosfați.", "Mina se întinde pe o suprafață de 15 km².", "Concentrația de fosfat este de 35% P2O5.", "Mina a fost deschisă în 1959.", "Angajează 800 de angajați.", "Lungimea benzii transportoare către instalația de procesare este de 10 km."],
      en: ["Hahotoé mine produces 2 million tons of phosphate per year.", "The mine covers an area of 15 km².", "Phosphate concentration is 35% P2O5.", "The mine opened in 1959.", "It employs 800 workers.", "The conveyor belt length to the processing plant is 10 km."],
    },
  },
  {
    id: "cimtogo-lome-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.265, 6.145],
    name: {
      de: "CIMTOGO Zementwerk Lomé",
      hu: "CIMTOGO cementgyár, Lomé",
      ro: "Fabrica de ciment CIMTOGO Lomé",
      en: "CIMTOGO Cement Factory Lomé"},
    image: "/poi-images/cimtogo-lome-economic-v2.webp",
    description: {
      de: "Das CIMTOGO-Werk in Lomé ist eine der führenden Zementproduktionsstätten des Landes und versorgt den lokalen Baumarkt sowie die Nachbarländer. Es ist ein zentraler Bestandteil der industriellen Infrastruktur der Hauptstadt. Geographie K8 - Bauindustrie.",
      hu: "A loméi CIMTOGO gyár az ország egyik vezető cementgyártó üzeme, amely a helyi építőipari piacot és a szomszédos országokat látja el. A főváros ipari infrastruktúrájának központi eleme. Földrajz K8 - Építőipar.",
      ro: "Fabrica CIMTOGO din Lomé este una dintre unitățile de producție de ciment de top din țară, aprovizionând piața locală de construcții și țările vecine. Este o componentă centrală a infrastructurii industriale a capitalei. Geografie K8 - Industria construcțiilor.",
      en: "The CIMTOGO plant in Lomé is one of the country's leading cement production facilities, supplying the local construction market and neighboring countries. It is a key component of the capital's industrial infrastructure. Geography K8 - Construction industry."
    },
    facts: {
      de: ["Größter Zementhersteller in Togo", "Strategische Lage am Hafen", "Modernste Produktionsanlagen", "Wichtig für die regionale Stadtentwicklung"],
      hu: ["Togo legnagyobb cementgyártója", "Stratégiai elhelyezkedés a kikötőnél", "Legmodernebb gyártósorok", "Fontos a regionális városfejlesztéshez"],
      ro: ["Cel mai mare producător de ciment din Togo", "Amplasare strategică lângă port", "Instalații de producție de ultimă generație", "Important pentru dezvoltarea urbană regională"],
      en: ["Largest cement producer in Togo", "Strategic location near the port", "State-of-the-art production facilities", "Crucial for regional urban development"]
    }, image: "/poi-images/cimtogo-lome-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das CIMTOGO-Zementwerk in Lomé, Togo, ist eine der größten Zementfabriken Westafrikas. Es liegt im Industriegebiet von Lomé und produziert jährlich über 1,5 Millionen Tonnen Zement. Das Werk gehört zur deutschen HeidelbergCement-Gruppe. Es versorgt den lokalen Markt und exportiert in Nachbarländer. Die Produktion erfolgt mit modernster Technologie zur Reduzierung des CO2-Ausstoßes.",
      hu: "A loméi CIMTOGO cementgyár Togóban Nyugat-Afrika egyik legnagyobb cementgyára. Lomé ipari negyedében található, éves termelése meghaladja az 1,5 millió tonnát. Az üzem a német HeidelbergCement csoporthoz tartozik. Ellátja a helyi piacot, és exportál a szomszédos országokba. A gyártás a legmodernebb technológiával történik a CO2-kibocsátás csökkentése érdekében.",
      ro: "Fabrica de ciment CIMTOGO din Lomé, Togo, este una dintre cele mai mari fabrici de ciment din Africa de Vest. Situată în zona industrială a Lomé, produce anual peste 1,5 milioane de tone de ciment. Fabrica face parte din grupul german HeidelbergCement. Aprovizionează piața locală și exportă în țările vecine. Producția folosește tehnologie avansată pentru reducerea emisiilor de CO2.",
      en: "CIMTOGO Cement Factory in Lomé, Togo, is one of West Africa's largest cement plants. Located in Lomé's industrial area, it produces over 1.5 million tons annually. The plant belongs to the German HeidelbergCement group. It supplies the local market and exports to neighboring countries. Production uses modern technology to reduce CO2 emissions.",
    },
    factsAdvanced: {
      de: ["Die Jahresproduktion beträgt 1,5 Millionen Tonnen Zement.", "Das Werk beschäftigt 400 Mitarbeiter.", "Es wurde 1967 in Betrieb genommen.", "Die Lagerkapazität beträgt 100.000 Tonnen.", "Der Energieverbrauch liegt bei 100 kWh pro Tonne Zement.", "Der CO2-Ausstoß pro Tonne Zement beträgt 600 kg."],
      hu: ["Az éves termelés 1,5 millió tonna cement.", "Az üzem 400 alkalmazottat foglalkoztat.", "1967-ben helyezték üzembe.", "A tárolókapacitás 100 000 tonna.", "Az energiafogyasztás 100 kWh tonnánként.", "A CO2-kibocsátás tonnánként 600 kg."],
      ro: ["Producția anuală este de 1,5 milioane de tone de ciment.", "Fabrica angajează 400 de muncitori.", "A fost dată în funcțiune în 1967.", "Capacitatea de stocare este de 100.000 de tone.", "Consumul de energie este de 100 kWh per tonă de ciment.", "Emisiile de CO2 per tonă de ciment sunt de 600 kg."],
      en: ["Annual production is 1.5 million tons of cement.", "The plant employs 400 workers.", "It was commissioned in 1967.", "Storage capacity is 100,000 tons.", "Energy consumption is 100 kWh per ton of cement.", "CO2 emissions per ton of cement are 600 kg."],
    },
  },
  {
    id: "wacem-tabligbo-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.505, 6.585],
    name: {
      de: "WACEM Zementwerk Tabligbo",
      hu: "WACEM cementgyár, Tabligbo",
      ro: "Fabrica de ciment WACEM Tabligbo",
      en: "WACEM Cement Factory Tabligbo"},
    image: "/poi-images/wacem-tabligbo-economic-v2.webp",
    description: {
      de: "West African Cement (WACEM) betreibt in Tabligbo ein bedeutendes Werk zur Klinker- und Zementherstellung. Die Fabrik nutzt die reichen Kalksteinvorkommen der Region für die großflächige Produktion. Geographie K8 - Rohstoffverarbeitung.",
      hu: "A West African Cement (WACEM) jelentős klinker- és cementgyártó üzemet működtet Tabligbóban. A gyár a régió gazdag mészkőkészleteit hasznosítja a nagyüzemi termeléshez. Földrajz K8 - Nyersanyag-feldolgozás.",
      ro: "West African Cement (WACEM) operează o unitate importantă de producție de clincher și ciment în Tabligbo. Fabrica utilizează zăcămintele bogate de calcar din regiune pentru producția la scară largă. Geografie K8 - Prelucrarea materiilor prime.",
      en: "West African Cement (WACEM) operates a major clinker and cement production facility in Tabligbo. The factory utilizes the region's rich limestone deposits for large-scale production. Geography K8 - Raw material processing."
    },
    facts: {
      de: ["Zentrum der Klinkerproduktion", "Großindustrieller Komplex", "Nutzt lokale Kalksteinbrüche", "Export von Klinker in die Region"],
      hu: ["A klinkergyártás központja", "Nagyipari komplexum", "Helyi mészkőbányákat használ", "Klinkerexport a régióba"],
      ro: ["Centrul producției de clincher", "Complex industrial de mari dimensiuni", "Utilizează cariere locale de calcar", "Export de clincher în regiune"],
      en: ["Center of clinker production", "Large-scale industrial complex", "Uses local limestone quarries", "Exports clinker to the region"]
    }, image: "/poi-images/wacem-tabligbo-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das WACEM-Zementwerk in Tabligbo, Togo, ist eine der modernsten Zementfabriken Westafrikas. Es liegt etwa 60 Kilometer nordöstlich von Lomé und produziert jährlich über 1 Million Tonnen Zement. Die Fabrik gehört zur südafrikanischen PPC-Gruppe. Sie nutzt Kohle und alternative Brennstoffe. WACEM exportiert nach Benin, Ghana und Burkina Faso.",
      hu: "A tabligbói WACEM cementgyár Togóban Nyugat-Afrika egyik legmodernebb cementgyára. Lomé-tól körülbelül 60 kilométerre északkeletre található, éves termelése meghaladja az 1 millió tonnát. A gyár a dél-afrikai PPC csoporthoz tartozik. Szenet és alternatív tüzelőanyagokat használ. A WACEM exportál Beninbe, Ghánába és Burkina Fasóba.",
      ro: "Fabrica de ciment WACEM din Tabligbo, Togo, este una dintre cele mai moderne fabrici de ciment din Africa de Vest. Situată la aproximativ 60 de kilometri nord-est de Lomé, produce anual peste 1 milion de tone de ciment. Fabrica aparține grupului sud-african PPC. Utilizează cărbune și combustibili alternativi. WACEM exportă în Benin, Ghana și Burkina Faso.",
      en: "WACEM Cement Factory in Tabligbo, Togo, is one of West Africa's most modern cement plants. Located about 60 km northeast of Lomé, it produces over 1 million tons annually. The factory belongs to the South African PPC group. It uses coal and alternative fuels. WACEM exports to Benin, Ghana, and Burkina Faso.",
    },
    factsAdvanced: {
      de: ["Die Jahresleistung beträgt 1,2 Millionen Tonnen Zement.", "Das Werk ging 2015 in Betrieb.", "Es beschäftigt 350 Mitarbeiter.", "Die Investitionskosten beliefen sich auf 150 Millionen Euro.", "Der Klinkeranteil im Zement beträgt 85 %.", "Die Mühlenkapazität beträgt 200 Tonnen pro Stunde."],
      hu: ["Az éves termelés 1,2 millió tonna cement.", "Az üzem 2015-ben kezdte meg működését.", "350 alkalmazottat foglalkoztat.", "A beruházási költségek 150 millió eurót tettek ki.", "A klinker aránya a cementben 85%.", "A malomkapacitás 200 tonna óránként."],
      ro: ["Producția anuală este de 1,2 milioane de tone de ciment.", "Fabrica a intrat în funcțiune în 2015.", "Angajează 350 de muncitori.", "Costurile de investiție s-au ridicat la 150 de milioane de euro.", "Proporția de clincher în ciment este de 85%.", "Capacitatea morii este de 200 de tone pe oră."],
      en: ["Annual output is 1.2 million tons of cement.", "The plant went into operation in 2015.", "It employs 350 workers.", "Investment costs were €150 million.", "Clinker content in cement is 85%.", "Mill capacity is 200 tons per hour."],
    },
  },
  {
    id: "heidelberg-tabligbo-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.495, 6.575],
    name: {
      de: "Heidelberg Materials Tabligbo",
      hu: "Heidelberg Materials, Tabligbo",
      ro: "Heidelberg Materials Tabligbo",
      en: "Heidelberg Materials Tabligbo"},
    image: "/poi-images/heidelberg-tabligbo-economic-v2.webp",
    description: {
      de: "Das Werk von Heidelberg Materials in Tabligbo ist eine hochmoderne Anlage zur Herstellung von Zementklinker. Es ist ein Beispiel für internationale Investitionen in den togoischen Industriesektor. Geographie K8 - Ausländische Direktinvestitionen.",
      hu: "A Heidelberg Materials tabligbói üzeme egy ultramodern cementklinker-gyártó létesítmény. Kiváló példája a togoi ipari szektorba irányuló nemzetközi befektetéseknek. Földrajz K8 - Közvetlen külföldi tőkebefektetések.",
      ro: "Fabrica Heidelberg Materials din Tabligbo este o unitate ultramodernă pentru producția de clincher de ciment. Este un exemplu de investiții internaționale în sectorul industrial togolez. Geografie K8 - Investiții străine directe.",
      en: "The Heidelberg Materials plant in Tabligbo is a state-of-the-art facility for cement clinker production. It is an example of international investment in the Togolese industrial sector. Geography K8 - Foreign direct investment."
    },
    facts: {
      de: ["Modernste Klinkerfabrik Westafrikas", "Nachhaltige Produktionstechnologien", "Großer Arbeitgeber der Region", "Teil eines globalen Baustoffkonzerns"],
      hu: ["Nyugat-Afrika legmodernebb klinkergyára", "Fenntartható gyártási technológiák", "A régió nagy foglalkoztatója", "Egy globális építőanyag-konszern része"],
      ro: ["Cea mai modernă fabrică de clincher din Africa de Vest", "Tehnologii de producție durabile", "Angajator major în regiune", "Parte a unui grup global de materiale de construcții"],
      en: ["Most modern clinker plant in West Africa", "Sustainable production technologies", "Major employer in the region", "Part of a global building materials group"]
    }, image: "/poi-images/heidelberg-tabligbo-economic-v2.webp",
    descriptionAdvanced: {
      de: "Heidelberg Materials Tabligbo ist ein Zementwerk in Tabligbo, Togo, das zur deutschen Heidelberg Materials AG gehört. Es wurde 2021 übernommen und modernisiert. Die Fabrik produziert hochwertigen Zement für den lokalen Markt und den Export. Das Werk liegt nahe der Kalksteinvorkommen. Es setzt auf energieeffiziente Technologien und reduziert den CO2-Fußabdruck.",
      hu: "A Heidelberg Materials Tabligbo egy cementgyár Togóban, Tabligbóban, amely a német Heidelberg Materials AG-hez tartozik. 2021-ben vásárolták meg és korszerűsítették. A gyár kiváló minőségű cementet termel a helyi piacra és exportra. Az üzem a mészkőlelőhelyek közelében található. Energiahatékony technológiákat alkalmaz, csökkentve a CO2-lábnyomot.",
      ro: "Heidelberg Materials Tabligbo este o fabrică de ciment din Tabligbo, Togo, aparținând grupului german Heidelberg Materials AG. A fost achiziționată și modernizată în 2021. Fabrica produce ciment de înaltă calitate pentru piața locală și export. Uzina este situată în apropierea zăcămintelor de calcar. Folosește tehnologii eficiente energetic și reduce amprenta de carbon.",
      en: "Heidelberg Materials Tabligbo is a cement plant in Tabligbo, Togo, owned by German Heidelberg Materials AG. It was acquired and modernized in 2021. The plant produces high-quality cement for local and export markets. It is located near limestone deposits. It uses energy-efficient technologies to reduce carbon footprint.",
    },
    factsAdvanced: {
      de: ["Das Werk produziert jährlich 1 Million Tonnen Zement.", "Die Investition nach der Übernahme betrug 50 Millionen Euro.", "Die Belegschaft zählt 300 Mitarbeiter.", "Die Anlage verfügt über ein eigenes Kraftwerk mit 10 MW Leistung.", "Die Kalksteinreserven in der Region betragen 100 Millionen Tonnen.", "Der spezifische Wärmeverbrauch liegt bei 700 kcal/kg Klinker."],
      hu: ["A gyár évente 1 millió tonna cementet termel.", "A felvásárlás utáni beruházás 50 millió euró volt.", "A létszám 300 fő.", "Az üzem rendelkezik saját 10 MW teljesítményű erőművel.", "A régió mészkőkészlete 100 millió tonna.", "A fajlagos hőfogyasztás 700 kcal/kg klinker."],
      ro: ["Fabrica produce anual 1 milion de tone de ciment.", "Investiția după achiziție a fost de 50 de milioane de euro.", "Efectivul este de 300 de angajați.", "Instalația are o centrală electrică proprie de 10 MW.", "Rezervele de calcar din regiune sunt de 100 de milioane de tone.", "Consumul specific de căldură este de 700 kcal/kg clincher."],
      en: ["The plant produces 1 million tons of cement annually.", "Investment after acquisition was €50 million.", "Workforce is 300 employees.", "The facility has its own power plant of 10 MW capacity.", "Limestone reserves in the region are 100 million tons.", "Specific heat consumption is 700 kcal/kg clinker."],
    },
  },
  {
    id: "sitex-kara-economic-v2",
    type: "industry",
    parent: "TG-K",
    coords: [1.192, 9.555],
    name: {
      de: "SITEX Textilfabrik Kara",
      hu: "SITEX textilgyár, Kara",
      ro: "Fabrica de textile SITEX Kara",
      en: "SITEX Textile Factory Kara"},
    image: "/poi-images/sitex-kara-economic-v2.webp",
    description: {
      de: "SITEX ist eine bedeutende Textilfabrik in Kara, die lokal angebaute Baumwolle verarbeitet. Die Fabrik spielt eine wichtige Rolle bei der Wertschöpfung innerhalb der togoischen Landwirtschaft. Geographie K8 - Leichtindustrie.",
      hu: "A SITEX egy jelentős textilgyár Karában, amely helyben termesztett gyapotot dolgoz fel. A gyár fontos szerepet játszik a togoi mezőgazdaságon belüli értékteremtésben. Földrajz K8 - Könnyűipar.",
      ro: "SITEX este o fabrică de textile importantă din Kara, care prelucrează bumbacul cultivat local. Fabrica joacă un rol important în adăugarea de valoare în cadrul agriculturii togoleze. Geografie K8 - Industria ușoară.",
      en: "SITEX is a significant textile factory in Kara that processes locally grown cotton. The factory plays an important role in adding value within Togolese agriculture. Geography K8 - Light industry."
    },
    facts: {
      de: ["Verarbeitung togoischer Baumwolle", "Industriezentrum Nordtogos", "Produktion von Stoffen für den Markt", "Förderung der lokalen Wertschöpfungskette"],
      hu: ["Togoi gyapot feldolgozása", "Észak-Togo ipari központja", "Szövetgyártás a piac számára", "A helyi értéklánc elősegítése"],
      ro: ["Prelucrarea bumbacului togolez", "Centru industrial al Togo-ului de Nord", "Producția de țesături pentru piață", "Promovarea lanțului de valoare local"],
      en: ["Processing of Togolese cotton", "Industrial center of Northern Togo", "Production of fabrics for the market", "Promotion of the local value chain"]
    }, image: "/poi-images/sitex-kara-economic-v2.webp",
    descriptionAdvanced: {
      de: "Die SITEX-Textilfabrik in Kara, Togo, ist ein bedeutendes Industrieunternehmen im Norden des Landes. Sie wurde 1974 gegründet und produziert Baumwollstoffe und Kleidung. Die Fabrik beschäftigt über 1.000 Arbeiter und beliefert hauptsächlich den westafrikanischen Markt. SITEX nutzt lokale Rohstoffe und trägt zur wirtschaftlichen Entwicklung der Region bei.",
      hu: "A kara-i SITEX textilgyár Togóban az ország északi részének jelentős ipari vállalkozása. 1974-ben alapították, pamutszöveteket és ruházati termékeket gyárt. A gyár több mint 1000 munkást foglalkoztat, és főként a nyugat-afrikai piacot látja el. A SITEX helyi nyersanyagokat használ, hozzájárulva a régió gazdasági fejlődéséhez.",
      ro: "Fabrica textilă SITEX din Kara, Togo, este o întreprindere industrială importantă în nordul țării. Fondată în 1974, produce țesături de bumbac și îmbrăcăminte. Fabrica angajează peste 1.000 de muncitori și aprovizionează în principal piața vest-africană. SITEX utilizează materii prime locale și contribuie la dezvoltarea economică a regiunii.",
      en: "SITEX Textile Factory in Kara, Togo, is a major industrial enterprise in the north of the country. Founded in 1974, it produces cotton fabrics and clothing. The factory employs over 1,000 workers and supplies mainly the West African market. SITEX uses local raw materials and contributes to regional economic development.",
    },
    factsAdvanced: {
      de: ["Die Fabrik produziert jährlich 10 Millionen Meter Stoff.", "Sie verarbeitet 5.000 Tonnen Baumwolle pro Jahr.", "Die Produktionsfläche beträgt 50.000 m².", "Der Wasserverbrauch liegt bei 100 Litern pro kg Stoff.", "SITEX exportiert in 10 afrikanische Länder.", "Die installierte Maschinenleistung beträgt 5 MW."],
      hu: ["A gyár évente 10 millió méter anyagot termel.", "Évente 5000 tonna pamutot dolgoz fel.", "A termelési terület 50 000 m².", "A vízfogyasztás 100 liter/kg anyag.", "A SITEX 10 afrikai országba exportál.", "A beépített gép teljesítménye 5 MW."],
      ro: ["Fabrica produce anual 10 milioane de metri de țesătură.", "Prelucrează 5.000 de tone de bumbac pe an.", "Suprafața de producție este de 50.000 m².", "Consumul de apă este de 100 litri per kg de țesătură.", "SITEX exportă în 10 țări africane.", "Puterea instalată a mașinilor este de 5 MW."],
      en: ["The factory produces 10 million meters of fabric annually.", "It processes 5,000 tons of cotton per year.", "Production area is 50,000 m².", "Water consumption is 100 liters per kg of fabric.", "SITEX exports to 10 African countries.", "Installed machine power is 5 MW."],
    },
  },
  {
    id: "nioto-lome-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.255, 6.135],
    name: {
      de: "NIOTO Ölsaatenverarbeitung",
      hu: "NIOTO olajosmag-feldolgozó",
      ro: "Prelucrarea semințelor oleaginoase NIOTO",
      en: "NIOTO Oilseed Processing"},
    image: "/poi-images/nioto-lome-economic-v2.webp",
    description: {
      de: "NIOTO ist auf die Verarbeitung von Ölsaaten, insbesondere Baumwollsamen und Karité-Nüssen, spezialisiert. Das Werk produziert Speiseöle und Fette für den nationalen Bedarf und den Export. Sachkunde K3 - Nahrungsmittelproduktion.",
      hu: "A NIOTO olajos magvak, különösen gyapotmag és karité-dió (shea) feldolgozására specializálódott. Az üzem étolajokat és zsírokat gyárt a hazai szükségletekre és exportra. Sachkunde K3 - Élelmiszertermelés.",
      ro: "NIOTO este specializată în prelucrarea semințelor oleaginoase, în special a semințelor de bumbac și a nucilor de shea. Fabrica produce uleiuri comestibile și grăsimi pentru consumul național și export. Sachkunde K3 - Producția de alimente.",
      en: "NIOTO specializes in the processing of oilseeds, particularly cottonseed and shea nuts. The plant produces edible oils and fats for national needs and export. Geography K3 - Food production."
    },
    facts: {
      de: ["Herstellung von Speiseöl", "Verarbeitung von Karité-Nüssen", "Wichtig für die lokale Ernährungssicherung", "Industrielle Ölmühle in Lomé"],
      hu: ["Étolajgyártás", "Karité-dió feldolgozása", "Fontos a helyi élelmezésbiztonsághoz", "Ipari olajütő Loméban"],
      ro: ["Producerea uleiului comestibil", "Prelucrarea nucilor de shea", "Important pentru securitatea alimentară locală", "Presă de ulei industrială în Lomé"],
      en: ["Production of cooking oil", "Processing of shea nuts", "Important for local food security", "Industrial oil mill in Lomé"]
    }, image: "/poi-images/nioto-lome-economic-v2.webp",
    descriptionAdvanced: {
      de: "NIOTO Oilseed Processing in Lomé, Togo, verarbeitet Ölsaaten wie Soja, Palmkerne und Baumwollsamen zu pflanzlichen Ölen und Schrot. Das Werk liegt im Hafen von Lomé und ist eines der größten in Westafrika. Es produziert Speiseöle und Tierfutter. NIOTO exportiert in die Subregion. Die Anlage nutzt moderne Extraktionsverfahren.",
      hu: "A NIOTO olajmag-feldolgozó Loméban, Togóban, olajmagokat dolgoz fel, mint szója, pálmamag és gyapotmag, növényi olajok és darák előállításához. Az üzem Lomé kikötőjében található, és Nyugat-Afrika egyik legnagyobbja. Étkezési olajokat és állati takarmányokat gyárt. A NIOTO exportál a szubrégióba. Az üzem modern extrakciós eljárásokat alkalmaz.",
      ro: "Procesarea de oleaginoase NIOTO din Lomé, Togo, transformă semințe oleaginoase precum soia, miez de palmier și semințe de bumbac în uleiuri vegetale și șroturi. Instalația este situată în portul Lomé și este una dintre cele mai mari din Africa de Vest. Produce uleiuri comestibile și furaje. NIOTO exportă în subregiune. Folosește tehnici moderne de extracție.",
      en: "NIOTO Oilseed Processing in Lomé, Togo, processes oilseeds such as soybeans, palm kernels, and cottonseeds into vegetable oils and meals. Located at the Port of Lomé, it is one of the largest in West Africa. It produces cooking oils and animal feed. NIOTO exports to the subregion. The facility uses modern extraction methods.",
    },
    factsAdvanced: {
      de: ["Die Jahreskapazität beträgt 200.000 Tonnen Ölsaaten.", "Das Werk produziert 80.000 Tonnen Öl pro Jahr.", "Die Lagerkapazität für Rohöl beträgt 30.000 Tonnen.", "NIOTO beschäftigt 250 Mitarbeiter.", "Die Anlage hat eine eigene Raffinerie.", "Die Exporthäufigkeit beträgt 20 Schiffe pro Monat."],
      hu: ["Az éves kapacitás 200 000 tonna olajmag.", "Az üzem évente 80 000 tonna olajat termel.", "A nyersolaj tárolókapacitása 30 000 tonna.", "A NIOTO 250 alkalmazottat foglalkoztat.", "Az üzem saját finomítóval rendelkezik.", "Az export gyakorisága havi 20 hajó."],
      ro: ["Capacitatea anuală este de 200.000 de tone de semințe oleaginoase.", "Fabrica produce 80.000 de tone de ulei pe an.", "Capacitatea de depozitare a uleiului brut este de 30.000 de tone.", "NIOTO angajează 250 de muncitori.", "Instalația are o rafinărie proprie.", "Frecvența exportului este de 20 de nave pe lună."],
      en: ["Annual capacity is 200,000 tons of oilseeds.", "The plant produces 80,000 tons of oil per year.", "Crude oil storage capacity is 30,000 tons.", "NIOTO employs 250 workers.", "The facility has its own refinery.", "Export frequency is 20 ships per month."],
    },
  },
  {
    id: "bb-lome-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.225, 6.135],
    name: {
      de: "BB Lomé Brauerei",
      hu: "BB Lomé sörgyár",
      ro: "Berăria BB Lomé",
      en: "BB Lomé Brewery"},
    image: "/poi-images/bb-lome-economic-v2.webp",
    description: {
      de: "Die Brasserie du Bénin (BB Lomé) ist die größte Brauerei Togos und produziert eine Vielzahl von Getränken. Sie ist einer der bekanntesten Industriebetriebe und ein bedeutender Steuerzahler des Landes. Sachkunde K4 - Konsumgüterindustrie.",
      hu: "A Brasserie du Bénin (BB Lomé) Togo legnagyobb sörgyára, amely különféle italokat gyárt. Az ország egyik legismertebb ipari vállalata és jelentős adófizetője. Sachkunde K4 - Fogyasztási cikkek ipara.",
      ro: "Brasserie du Bénin (BB Lomé) este cea mai mare berărie din Togo și produce o varietate de băuturi. Este una dintre cele mai cunoscute companii industriale și un contribuabil semnificativ al țării. Sachkunde K4 - Industria bunurilor de larg consum.",
      en: "The Brasserie du Bénin (BB Lomé) is Togo's largest brewery and produces a variety of beverages. It is one of the most well-known industrial companies and a significant taxpayer in the country. Geography K4 - Consumer goods industry."
    },
    facts: {
      de: ["Marktführer bei Getränken", "Produktionsstandort in der Hauptstadt", "Einer der größten privaten Arbeitgeber", "Bekannte nationale Marken"],
      hu: ["Piacvezető az italgyártásban", "Gyártóbázis a fővásonban", "Az egyik legnagyobb magánfoglalkoztató", "Ismert nemzeti márkák"],
      ro: ["Lider de piață în producția de băuturi", "Unitate de producție în capitală", "Unul dintre cei mai mari angajatori privați", "Mărci naționale cunoscute"],
      en: ["Market leader in beverages", "Production site in the capital", "One of the largest private employers", "Well-known national brands"]
    }, image: "/poi-images/bb-lome-economic-v2.webp",
    descriptionAdvanced: {
      de: "Die Brauerei BB Lomé in Togo ist eine der größten Brauereien des Landes. Sie wurde 1963 gegründet und produziert Biermarken wie „BB“ und „La Béninoise“. Das Werk liegt im Industriegebiet von Lomé und beliefert den lokalen Markt. Jährlich werden über 1 Million Hektoliter Bier gebraut. Die Brauerei verwendet importierte Gerste und lokales Wasser.",
      hu: "A loméi BB sörfőzde Togóban az ország egyik legnagyobb sörfőzdéje. 1963-ban alapították, olyan sörmárkákat gyárt, mint a „BB” és a „La Béninoise”. Az üzem Lomé ipari negyedében található, és a helyi piacot látja el. Évente több mint 1 millió hektoliter sört főznek. A sörfőzde importált árpát és helyi vizet használ.",
      ro: "Fabrică de bere BB Lomé din Togo este una dintre cele mai mari fabrici de bere din țară. Fondată în 1963, produce mărci de bere precum „BB” și „La Béninoise”. Uzina este situată în zona industrială a Lomé și aprovizionează piața locală. Anual sunt produse peste 1 milion de hectolitri de bere. Fabrica folosește orz importată și apă locală.",
      en: "BB Lomé Brewery in Togo is one of the largest breweries in the country. Founded in 1963, it produces beer brands such as „BB” and „La Béninoise”. Located in Lomé's industrial area, it supplies the local market. Over 1 million hectoliters are brewed annually. The brewery uses imported barley and local water.",
    },
    factsAdvanced: {
      de: ["Die Jahresproduktion beträgt 1,2 Millionen Hektoliter Bier.", "Die Brauerei beschäftigt 600 Mitarbeiter.", "Die Abfülllinie hat eine Kapazität von 50.000 Flaschen pro Stunde.", "Der Wasserbrauch pro Liter Bier beträgt 4 Liter.", "Die Brauerei wurde 1963 von der Castel-Gruppe erworben.", "Die Kühlanlage verbraucht 5 MW Strom."],
      hu: ["Az éves termelés 1,2 millió hektoliter sör.", "A sörfőzde 600 alkalmazottat foglalkoztat.", "A palackozó sor kapacitása 50 000 palack óránként.", "A vízfogyasztás literenként 4 liter.", "A sörfőzdét 1963-ban a Castel csoport vásárolta meg.", "A hűtőrendszer áramfogyasztása 5 MW."],
      ro: ["Producția anuală este de 1,2 milioane de hectolitri de bere.", "Fabrica de bere angajează 600 de angajați.", "Linia de îmbuteliere are o capacitate de 50.000 de sticle pe oră.", "Consumul de apă per litru de bere este de 4 litri.", "Fabrica de bere a fost achiziționată de grupul Castel în 1963.", "Sistemul de răcire consumă 5 MW de energie electrică."],
      en: ["Annual production is 1.2 million hectoliters of beer.", "The brewery employs 600 workers.", "The bottling line has a capacity of 50,000 bottles per hour.", "Water consumption per liter of beer is 4 liters.", "The brewery was acquired by the Castel group in 1963.", "Cooling system consumes 5 MW of electricity."],
    },
  },
  {
    id: "lct-lome-economic-v2",
    type: "port",
    parent: "TG-M",
    coords: [1.285, 6.132],
    name: {
      de: "Lomé Container Terminal (LCT)",
      hu: "Lomé Konténer Terminál (LCT)",
      ro: "Terminalul de containere Lomé (LCT)",
      en: "Lomé Container Terminal (LCT)"},
    image: "/poi-images/lct-lome-economic-v2.webp",
    description: {
      de: "Das LCT ist eines der modernsten Containerterminals in Westafrika und dient als wichtiger Umschlagplatz für den internationalen Seehandel. Es ermöglicht die Abfertigung der weltweit größten Containerschiffe. Geographie K8 - Welthandel.",
      hu: "Az LCT Nyugat-Afrika egyik legmodernebb konténerterminálja, amely a nemzetközi tengeri kereskedelem fontos csomópontjaként szolgál. Lehetővé teszi a világ legnagyobb konténerhajóinak fogadását. Földrajz K8 - Világkereskedelem.",
      ro: "LCT este unul dintre cele mai moderne terminale de containere din Africa de Vest și servește ca un nod important pentru comerțul maritim internațional. Permite manipularea celor mai mari nave de containere din lume. Geografie K8 - Comerț mondial.",
      en: "The LCT is one of the most modern container terminals in West Africa and serves as a major hub for international maritime trade. It enables the handling of the world's largest container ships. Geography K8 - World trade."
    },
    facts: {
      de: ["Tiefsee-Containerterminal", "Modernste Kraninfrastruktur", "Drehkreuz für Westafrika", "Enormes Frachtaufkommen"],
      hu: ["Mélytengeri konténerterminál", "Legmodernebb daru-infrastruktúra", "Nyugat-afrikai elosztóközpont", "Hatalmas teherforgalom"],
      ro: ["Terminal de containere de mare adâncime", "Infrastructură de macarale ultramodernă", "Hub pentru Africa de Vest", "Volum enorm de marfă"],
      en: ["Deep-water container terminal", "State-of-the-art crane infrastructure", "Transshipment hub for West Africa", "Enormous cargo volume"]
    },
    descriptionAdvanced: {
      de: "Das Lomé Container Terminal (LCT) ist einer der wichtigsten Häfen Westafrikas. Es liegt im Hafen von Lomé, Togo, und wird von der Togo Terminal (Bolloré) betrieben. Das Terminal hat eine Gesamtfläche von 40 Hektar und eine Kailänge von 1,2 km. Es kann Schiffe mit einer Kapazität von bis zu 14.000 TEU abfertigen. Der jährliche Containerumschlag beträgt über 1,5 Millionen TEU.",
      hu: "A loméi konténerterminál (LCT) Nyugat-Afrika egyik legfontosabb kikötője. Togo loméi kikötőjében található, és a Togo Terminal (Bolloré) üzemelteti. A terminál teljes területe 40 hektár, a rakpart hossza 1,2 km. Képes akár 14 000 TEU kapacitású hajók kiszolgálására. Az éves konténerforgalom meghaladja az 1,5 millió TEU-t.",
      ro: "Terminalul de Containere Lomé (LCT) este unul dintre cele mai importante porturi din Africa de Vest. Situat în portul Lomé, Togo, este operat de Togo Terminal (Bolloré). Terminalul are o suprafață totală de 40 de hectare și o lungime a cheiului de 1,2 km. Poate deservi nave cu o capacitate de până la 14.000 TEU. Traficul anual de containere depășește 1,5 milioane TEU.",
      en: "Lomé Container Terminal (LCT) is one of West Africa's most important ports. Located in the Port of Lomé, Togo, it is operated by Togo Terminal (Bolloré). The terminal has a total area of 40 hectares and a quay length of 1.2 km. It can handle ships with a capacity of up to 14,000 TEU. Annual container throughput exceeds 1.5 million TEU.",
    },
    factsAdvanced: {
      de: ["Die Kailänge beträgt 1.200 m.", "Die Wassertiefe am Kai beträgt 16 m.", "Das Terminal verfügt über 12 Portalkräne.", "Die Lagerkapazität beträgt 100.000 TEU.", "Der jährliche Umschlag beträgt 1,6 Millionen TEU.", "Das Terminal wurde 2013 modernisiert."],
      hu: ["A rakpart hossza 1200 m.", "A vízmélység a rakpartnál 16 m.", "A terminál 12 portáldaruval rendelkezik.", "A tárolókapacitás 100 000 TEU.", "Az éves forgalom 1,6 millió TEU.", "A terminált 2013-ban korszerűsítették."],
      ro: ["Lungimea cheiului este de 1.200 m.", "Adâncimea apei la chei este de 16 m.", "Terminalul are 12 macarale portic.", "Capacitatea de depozitare este de 100.000 TEU.", "Traficul anual este de 1,6 milioane TEU.", "Terminalul a fost modernizat în 2013."],
      en: ["Quay length is 1,200 m.", "Water depth at quay is 16 m.", "The terminal has 12 gantry cranes.", "Storage capacity is 100,000 TEU.", "Annual throughput is 1.6 million TEU.", "The terminal was modernized in 2013."],
    },
  },
  {
    id: "togo-terminal-economic-v2",
    type: "port",
    parent: "TG-M",
    coords: [1.275, 6.138],
    name: {
      de: "Togo Terminal Bolloré",
      hu: "Togo Terminál Bolloré",
      ro: "Terminalul Togo Bolloré",
      en: "Togo Terminal Bolloré"},
    image: "/poi-images/togo-terminal-economic-v2.webp",
    description: {
      de: "Togo Terminal wird von der Bolloré-Gruppe betrieben und ist ein wesentlicher Bestandteil des Hafens von Lomé. Es ist auf den Umschlag von Stückgut und Containern spezialisiert. Geographie K8 - Logistikzentren.",
      hu: "A Togo Terminált a Bolloré csoport üzemelteti, és a loméi kikötő szerves részét képezi. Darabáruk és konténerek rakodására specializálódott. Földrajz K8 - Logisztikai központok.",
      ro: "Terminalul Togo este operat de grupul Bolloré și este o parte esențială a portului Lomé. Este specializat în manipularea mărfurilor generale și a containerelor. Geografie K8 - Centre logistice.",
      en: "Togo Terminal is operated by the Bolloré group and is an essential part of the Port of Lomé. It specializes in the handling of general cargo and containers. Geography K8 - Logistics centers."
    },
    facts: {
      de: ["Strategischer Hafenbetreiber", "Multimodaler Logistikknoten", "Wichtig für Binnenstaaten wie Mali", "Hohe operative Effizienz"],
      hu: ["Stratégiai kikötői operátor", "Multimodális logisztikai csomópont", "Fontos a tengerparttal nem rendelkező országoknak", "Magas operatív hatékonyság"],
      ro: ["Operator portuar strategic", "Nod logistic multimodal", "Important pentru țările fără ieșire la mare", "Eficiență operațională ridicată"],
      en: ["Strategic port operator", "Multimodal logistics hub", "Crucial for landlocked countries like Mali", "High operational efficiency"]
    }, image: "/poi-images/togo-terminal-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das Togo Terminal Bolloré ist der Betreiber des LCT und weiterer Hafeneinrichtungen in Lomé. Es ist Teil der französischen Bolloré-Gruppe. Das Terminal bietet Containerumschlag, Lagerung und Logistikdienstleistungen. Es ist ein wichtiger Knotenpunkt für den Handel mit den Nachbarländern. Die Anlage verfügt über moderne IT-Systeme zur Sendungsverfolgung.",
      hu: "A Togo Terminal Bolloré a LCT és más loméi kikötői létesítmények üzemeltetője. A francia Bolloré csoport része. A terminál konténerátrakodást, tárolást és logisztikai szolgáltatásokat kínál. Fontos csomópont a szomszédos országokkal folytatott kereskedelem számára. A létesítmény modern informatikai rendszerekkel rendelkezik a szállítmányok nyomon követésére.",
      ro: "Togo Terminal Bolloré este operatorul LCT și al altor facilități portuare din Lomé. Face parte din grupul francez Bolloré. Terminalul oferă transbordare containere, depozitare și servicii logistice. Este un nod important pentru comerțul cu țările vecine. Instalația dispune de sisteme IT moderne pentru urmărirea mărfurilor.",
      en: "Togo Terminal Bolloré is the operator of LCT and other port facilities in Lomé. It is part of the French Bolloré group. The terminal offers container handling, storage, and logistics services. It is a key hub for trade with neighboring countries. The facility has modern IT systems for shipment tracking.",
    },
    factsAdvanced: {
      de: ["Die jährliche Containerabfertigungskapazität beträgt 2 Millionen TEU.", "Das Terminal beschäftigt 500 Mitarbeiter.", "Die Lagerfläche beträgt 40 Hektar.", "Die durchschnittliche Verweildauer eines Containers beträgt 5 Tage.", "Togo Terminal wickelt 90 % des togolesischen Seehafenverkehrs ab.", "Der Terminal hat eine Kühlcontainer-Kapazität von 1.000 Anschlüssen."],
      hu: ["Az éves konténerkezelési kapacitás 2 millió TEU.", "A terminál 500 alkalmazottat foglalkoztat.", "A tárolóterület 40 hektár.", "Egy konténer átlagos tartózkodási ideje 5 nap.", "A Togo Terminal kezeli a togói tengeri kikötői forgalom 90%-át.", "A terminál hűtőkonténerek számára 1000 csatlakozási ponttal rendelkezik."],
      ro: ["Capacitatea anuală de manipulare a containerelor este de 2 milioane TEU.", "Terminalul angajează 500 de angajați.", "Suprafața de depozitare este de 40 de hectare.", "Timpul mediu de staționare a unui container este de 5 zile.", "Togo Terminal gestionează 90% din traficul portuar maritim togolez.", "Terminalul are o capacitate de 1.000 de conexiuni pentru containere frigorifice."],
      en: ["Annual container handling capacity is 2 million TEU.", "The terminal employs 500 workers.", "Storage area is 40 hectares.", "Average container dwell time is 5 days.", "Togo Terminal handles 90% of Togolese seaport traffic.", "The terminal has 1,000 reefer container plug points."],
    },
  },
  {
    id: "pia-adetikope-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.215, 6.315],
    name: {
      de: "Industriepark Adétikopé (PIA)",
      hu: "Adétikopé Ipari Park (PIA)",
      ro: "Platforma Industrială Adétikopé (PIA)",
      en: "Adétikopé Industrial Platform (PIA)"},
    image: "/poi-images/pia-adetikope-economic-v2.webp",
    description: {
      de: "Die Plateforme Industrielle d'Adétikopé ist eine integrierte Industriezone, die darauf abzielt, die lokale Verarbeitung von Rohstoffen wie Baumwolle und Soja zu fördern. Sie ist ein Eckpfeiler der nationalen Entwicklungsstrategie. Geographie K8 - Industrialisierung.",
      hu: "Az Adétikopé Ipari Platform egy integrált ipari zóna, amelynek célja a helyi nyersanyagok, például a gyapot és a szója feldolgozásának elősegítése. A nemzeti fejlesztési stratégia sarokköve. Földrajz K8 - Industrializáció.",
      ro: "Platforma Industrială Adétikopé este o zonă industrială integrată care vizează promovarea prelucrării locale a materiilor prime, cum ar fi bumbacul și soia. Este o piatră de temelie a strategiei naționale de dezvoltare. Geografie K8 - Industrializare.",
      en: "The Adétikopé Industrial Platform is an integrated industrial zone aimed at promoting the local processing of raw materials such as cotton and soy. It is a cornerstone of the national development strategy. Geography K8 - Industrialization."
    },
    facts: {
      de: ["Sonderwirtschaftszone", "Fokus auf Agrarverarbeitung", "Integrierter Logistikpark", "Modernste Infrastruktur für Fabriken"],
      hu: ["Különleges gazdasági övezet", "Fókuszban az agrár-feldolgozás", "Integrált logisztikai park", "Legmodernebb infrastruktúra gyárak számára"],
      ro: ["Zonă economică specială", "Accent pe procesarea agricolă", "Parc logistic integrat", "Infrastructură modernă pentru fabrici"],
      en: ["Special economic zone", "Focus on agro-processing", "Integrated logistics park", "State-of-the-art infrastructure for factories"]
    },
    descriptionAdvanced: {
      de: "Die Adétikopé Industrial Platform (PIA) in Togo ist eine Sonderwirtschaftszone, die etwa 20 Kilometer von Lomé entfernt liegt. Sie wurde 2018 eingeweiht und erstreckt sich über 400 Hektar. Die Plattform bietet Infrastruktur für Leichtindustrie, Logistik und Dienstleistungen. Sie zieht Investitionen aus China, Europa und der Region an. Die Zone ist an die Autobahn und das Stromnetz angebunden.",
      hu: "Az adétikopéi ipari platform (PIA) Togóban egy különleges gazdasági övezet, amely Lomé-tól körülbelül 20 kilométerre található. 2018-ban avatták fel, területe 400 hektár. A platform infrastruktúrát biztosít a könnyűipar, logisztika és szolgáltatások számára. Beruházásokat vonz Kínából, Európából és a régióból. A zóna csatlakozik az autópályához és az áramhálózathoz.",
      ro: "Platforma Industrială Adétikopé (PIA) din Togo este o zonă economică specială situată la aproximativ 20 de kilometri de Lomé. A fost inaugurată în 2018 și se întinde pe 400 de hectare. Platforma oferă infrastructură pentru industria ușoară, logistică și servicii. Atrage investiții din China, Europa și regiune. Zona este conectată la autostradă și la rețeaua electrică.",
      en: "Adétikopé Industrial Platform (PIA) in Togo is a special economic zone located about 20 kilometers from Lomé. Inaugurated in 2018, it covers 400 hectares. The platform provides infrastructure for light industry, logistics, and services. It attracts investments from China, Europe, and the region. The zone is connected to the highway and power grid.",
    },
    factsAdvanced: {
      de: ["Die PIA erstreckt sich über 400 Hektar.", "Die Baukosten beliefen sich auf 100 Millionen US-Dollar.", "Die Zone hat eine geplante Kapazität von 100 Fabriken.", "Bislang haben sich 50 Unternehmen angesiedelt.", "Die Stromversorgung erfolgt über eine 20-MV-Leitung.", "Die PIA schafft 10.000 Arbeitsplätze."],
      hu: ["A PIA területe 400 hektár.", "Az építési költségek 100 millió USA dollárt tettek ki.", "A zóna tervezett kapacitása 100 gyár.", "Eddig 50 vállalkozás települt le.", "Az áramellátást egy 20 MV vezeték biztosítja.", "A PIA 10 000 munkahelyet teremt."],
      ro: ["PIA se întinde pe 400 de hectare.", "Costurile de construcție s-au ridicat la 100 de milioane de dolari SUA.", "Zona are o capacitate planificată de 100 de fabrici.", "Până în prezent, 50 de companii s-au stabilit.", "Alimentarea cu energie electrică se face printr-o linie de 20 MV.", "PIA creează 10.000 de locuri de muncă."],
      en: ["PIA covers 400 hectares.", "Construction costs amounted to US$100 million.", "The zone has a planned capacity of 100 factories.", "So far, 50 companies have settled.", "Electricity supply is via a 20 MV line.", "PIA creates 10,000 jobs."],
    },
  },
  {
    id: "sopal-agou-economic-v2",
    type: "industry",
    parent: "TG-P",
    coords: [0.735, 6.935],
    name: {
      de: "SOPAL Palmölmühle Agou",
      hu: "SOPAL pálmaolaj-malom, Agou",
      ro: "Moara de ulei de palmier SOPAL Agou",
      en: "SOPAL Palm Oil Mill Agou"},
    image: "/poi-images/sopal-agou-economic-v2.webp",
    description: {
      de: "SOPAL betreibt eine bedeutende Verarbeitungsanlage für Palmöl in der fruchtbaren Agou-Region. Die Mühle verarbeitet die Früchte der umliegenden Ölpalmenplantagen zu Rohöl. Sachkunde K3 - Landwirtschaftliche Industrie.",
      hu: "A SOPAL jelentős pálmaolaj-feldolgozó üzemet működtet a termékeny Agou régióban. A malom a környező olajpálma-ültetvények gyümölcseit dolgozza fel nyersolajjá. Sachkunde K3 - Mezőgazdasági ipar.",
      ro: "SOPAL operează o unitate importantă de prelucrare a uleiului de palmier în regiunea fertilă Agou. Moara procesează fructele de pe plantațiile de palmieri din jur în ulei brut. Sachkunde K3 - Industria agricolă.",
      en: "SOPAL operates a significant palm oil processing plant in the fertile Agou region. The mill processes fruit from the surrounding oil palm plantations into crude oil. Geography K3 - Agricultural industry."
    },
    facts: {
      de: ["Verarbeitung von Ölpalmenfrüchten", "Wichtiger Betrieb in der Plateaux-Region", "Produktion von Rohpalmöl", "Anbindung an lokale Kleinbauern"],
      hu: ["Olajpálma-gyümölcs feldolgozása", "Fontos üzem a Plateaux régióban", "Nyers pálmaolaj gyártása", "Kapcsolat a helyi kistermelőkkel"],
      ro: ["Prelucrarea fructelor de palmier", "Unitate importantă în regiunea Plateaux", "Producția de ulei de palmier brut", "Legătură cu micii fermieri locali"],
      en: ["Processing of oil palm fruits", "Major plant in the Plateaux region", "Production of crude palm oil", "Connected to local smallholder farmers"]
    }, image: "/poi-images/sopal-agou-economic-v2.webp",
    descriptionAdvanced: {
      de: "Die SOPAL Palmölmühle in Agou ist eine der größten Palmölverarbeitungsanlagen in Togo. Sie wurde 2015 mit einer Kapazität von 10 Tonnen Frischfruchtbüschel pro Stunde in Betrieb genommen. Die Mühle verarbeitet Palmfrüchte von über 5.000 Kleinbauern aus der Region Plateaux. Sie produziert hochwertiges Palmöl für den lokalen und regionalen Markt. Die Anlage umfasst eine Fruchtsterilisationsstation, eine Digester- und Pressenlinie sowie eine Klär- und Trocknungsanlage. Die jährliche Produktion beträgt etwa 20.000 Tonnen Rohpalmöl.",
      hu: "A SOPAL pálmaolajmalom Agouban Togo egyik legnagyobb pálmaolaj-feldolgozó létesítménye. A malom 2015-ben kezdte meg működését, óránként 10 tonna friss gyümölcsfürt kapacitással. Több mint 5000 kistermelő pálmagyümölcsét dolgozza fel a Plateaux régióból. A létesítmény magában foglal egy gyümölcssterilizáló állomást, egy digester- és préssort, valamint tisztító- és szárítóberendezéseket. Az éves termelés körülbelül 20.000 tonna nyers pálmaolaj. A SOPAL hozzájárul a helyi gazdaság fejlődéséhez és a vidéki foglalkoztatáshoz.",
      ro: "Moara de ulei de palmier SOPAL din Agou este una dintre cele mai mari instalații de prelucrare a uleiului de palmier din Togo. A fost dată în funcțiune în 2015, cu o capacitate de 10 tone de ciorchini de fructe proaspete pe oră. Moara procesează fructe de palmier de la peste 5.000 de mici fermieri din regiunea Plateaux. Produce ulei de palmier de înaltă calitate pentru piața locală și regională. Instalația include o stație de sterilizare a fructelor, o linie de digerare și presare, precum și o unitate de limpezire și uscare. Producția anuală este de aproximativ 20.000 de tone de ulei de palmier brut.",
      en: "The SOPAL Palm Oil Mill in Agou is one of the largest palm oil processing facilities in Togo. Commissioned in 2015, it has a capacity of 10 tons of fresh fruit bunches per hour. The mill processes palm fruits from over 5,000 smallholder farmers in the Plateaux region. It produces high-quality palm oil for local and regional markets. The facility includes a fruit sterilization station, a digester and press line, and a clarification and drying unit. Annual production amounts to about 20,000 tons of crude palm oil.",
    },
    factsAdvanced: {
      de: ["Kapazität: 10 Tonnen Frischfruchtbüschel pro Stunde", "Betriebsbeginn: 2015", "Anzahl der Kleinbauern: über 5.000", "Jährliche Produktion: etwa 20.000 Tonnen Rohpalmöl", "Standort: Agou, Region Plateaux, Togo", "Verarbeitet hauptsächlich die Sorte Dura und Tenera"],
      hu: ["Kapacitás: 10 tonna friss gyümölcsfürt óránként", "Üzembe helyezés: 2015", "Kistermelők száma: több mint 5.000", "Éves termelés: körülbelül 20.000 tonna nyers pálmaolaj", "Helyszín: Agou, Plateaux régió, Togo", "Feldolgozott fajták: Dura és Tenera"],
      ro: ["Capacitate: 10 tone de ciorchini de fructe proaspete pe oră", "Anul punerii în funcțiune: 2015", "Număr de mici fermieri: peste 5.000", "Producție anuală: aproximativ 20.000 tone ulei de palmier brut", "Locație: Agou, regiunea Plateaux, Togo", "Soiuri procesate: Dura și Tenera"],
      en: ["Capacity: 10 tons of fresh fruit bunches per hour", "Commissioned: 2015", "Number of smallholder farmers: over 5,000", "Annual production: about 20,000 tons of crude palm oil", "Location: Agou, Plateaux Region, Togo", "Processes mainly Dura and Tenera palm varieties"],
    },
  },
  {
    id: "contourglobal-lome-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.272, 6.155],
    name: {
      de: "ContourGlobal Kraftwerk",
      hu: "ContourGlobal erőmű",
      ro: "Centrala electrică ContourGlobal",
      en: "ContourGlobal Power Plant"},
    image: "/poi-images/contourglobal-lome-economic-v2.webp",
    description: {
      de: "Das Kraftwerk von ContourGlobal in Lomé ist eine der wichtigsten Stromerzeugungsanlagen Togos. Es nutzt verschiedene Brennstoffe, um die Energieversorgung des Landes und des Hafens sicherzustellen. Geographie K8 - Energieversorgung.",
      hu: "A ContourGlobal loméi erőműve Togo egyik legfontosabb villamosenergia-termelő létesítménye. Különböző üzemanyagokat használ az ország és a kikötő energiaellátásának biztosítására. Földrajz K8 - Energiaellátás.",
      ro: "Centrala electrică ContourGlobal din Lomé este una dintre cele mai importante facilități de generare a energiei din Togo. Utilizează diverse tipuri de combustibil pentru a asigura aprovizionarea cu energie a țării și a portului. Geografie K8 - Aprovizionarea cu energie.",
      en: "The ContourGlobal power plant in Lomé is one of Togo's most important power generation facilities. It uses various fuels to ensure the energy supply for the country and the port. Geography K8 - Energy supply."
    },
    facts: {
      de: ["Thermische Kraftanlage", "Sicherung der Netzstabilität", "Modernste Energietechnik", "Wichtig für die industrielle Basis"],
      hu: ["Termikus erőmű", "A hálózati stabilitás biztosítása", "Legmodernebb energiatechnológia", "Fontos az ipari bázis számára"],
      ro: ["Centrală termoelectrică", "Asigurarea stabilității rețelei", "Tehnologie energetică de ultimă oră", "Importantă pentru baza industrială"],
      en: ["Thermal power plant", "Ensuring grid stability", "State-of-the-art energy technology", "Crucial for the industrial base"]
    }, image: "/poi-images/contourglobal-lome-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das ContourGlobal-Kraftwerk in Lomé ist ein Gaskraftwerk mit einer installierten Leistung von 100 Megawatt. Es wurde 2010 in Betrieb genommen und versorgt die togolesische Hauptstadt und umliegende Gebiete mit Strom. Die Anlage nutzt Erdgas aus dem Offshore-Gasfeld von Togo. Sie besteht aus zwei Gasturbinen, die eine Kapazität von je 50 MW haben. Das Kraftwerk ist ein wichtiger Bestandteil der togolesischen Energieinfrastruktur und trägt zur Stabilisierung des Stromnetzes bei. Es wird von der amerikanischen Firma ContourGlobal betrieben.",
      hu: "A ContourGlobal erőmű Loméban egy gáztüzelésű erőmű, melynek telepített teljesítménye 100 megawatt. 2010-ben helyezték üzembe, és Togo fővárosát valamint a környező területeket látja el árammal. A létesítmény a tengeri gázmezőről származó földgázt használ. Két gázturbinából áll, amelyek kapacitása egyenként 50 MW. Az erőmű fontos része Togo energiainfrastruktúrájának, és hozzájárul a hálózat stabilitásához. Az amerikai ContourGlobal cég üzemelteti.",
      ro: "Centrala electrică ContourGlobal din Lomé este o centrală pe gaz cu o capacitate instalată de 100 de megawați. A fost pusă în funcțiune în 2010 și alimentează capitala Togoului și zonele învecinate cu energie electrică. Instalația utilizează gaze naturale din zăcământul marin al Togoului. Este compusă din două turbine cu gaz, fiecare având o capacitate de 50 MW. Centrala este o componentă cheie a infrastructurii energetice din Togo și contribuie la stabilizarea rețelei electrice. Este operată de compania americană ContourGlobal.",
      en: "The ContourGlobal Power Plant in Lomé is a gas-fired power plant with an installed capacity of 100 megawatts. Commissioned in 2010, it supplies electricity to the capital city and surrounding areas. The facility uses natural gas from Togo's offshore gas field. It consists of two gas turbines, each with a capacity of 50 MW. The plant is a key part of Togo's energy infrastructure and helps stabilize the power grid. It is operated by the US-based company ContourGlobal.",
    },
    factsAdvanced: {
      de: ["Installierte Leistung: 100 MW", "Inbetriebnahme: 2010", "Anzahl der Gasturbinen: 2", "Leistung pro Turbine: 50 MW", "Brennstoff: Erdgas aus Offshore-Feld", "Betreiber: ContourGlobal (USA)"],
      hu: ["Telepített teljesítmény: 100 MW", "Üzembe helyezés: 2010", "Gázturbinák száma: 2", "Turbinánkénti teljesítmény: 50 MW", "Üzemanyag: földgáz a tengeri mezőről", "Üzemeltető: ContourGlobal (USA)"],
      ro: ["Capacitate instalată: 100 MW", "Punere în funcțiune: 2010", "Număr de turbine cu gaz: 2", "Capacitate per turbină: 50 MW", "Combustibil: gaze naturale din zăcământ marin", "Operator: ContourGlobal (SUA)"],
      en: ["Installed capacity: 100 MW", "Commissioned: 2010", "Number of gas turbines: 2", "Capacity per turbine: 50 MW", "Fuel: natural gas from offshore field", "Operator: ContourGlobal (USA)"],
    },
  },
  {
    id: "stsl-fuel-depot-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.278, 6.148],
    name: {
      de: "STSL Brennstofflager Lomé",
      hu: "STSL üzemanyagraktár, Lomé",
      ro: "Depozitul de combustibil STSL Lomé",
      en: "STSL Fuel Depot Lomé"},
    image: "/poi-images/stsl-fuel-depot-economic-v2.webp",
    description: {
      de: "Die Société Togolaise de Stockage de Lomé (STSL) betreibt ein großes Tanklager für Erdölprodukte direkt am Hafen. Es dient als strategische Reserve und Verteilzentrum für den gesamten Norden. Geographie K8 - Logistik.",
      hu: "A Société Togolaise de Stockage de Lomé (STSL) hatalmas üzemanyagraktárt üzemeltet közvetlenül a kikötőben. Stratégiai tartalékként és elosztóközpontként szolgál az egész északi régió számára. Földrajz K8 - Logisztika.",
      ro: "Société Togolaise de Stockage de Lomé (STSL) operează un depozit mare de produse petroliere direct în port. Acesta servește ca rezervă strategică și centru de distribuție pentru întreaga regiune de nord. Geografie K8 - Logistică.",
      en: "The Société Togolaise de Stockage de Lomé (STSL) operates a large storage facility for petroleum products directly at the port. It serves as a strategic reserve and distribution hub for the entire northern region. Geography K8 - Logistics."
    },
    facts: {
      de: ["Großes Tanklager am Meer", "Strategische Kraftstoffreserve", "Anbindung an Pipelines", "Versorgung der Binnenstaaten"],
      hu: ["Hatalmas tartálypark a tengerparton", "Stratégiai üzemanyag-tartalék", "Csővezetékes összeköttetés", "A szomszédos országok ellátása"],
      ro: ["Parc mare de rezervoare pe malul mării", "Rezervă strategică de combustibil", "Legătură prin conducte", "Aprovizionarea țărilor vecine"],
      en: ["Large tank farm by the sea", "Strategic fuel reserve", "Pipeline connectivity", "Supply to landlocked neighboring countries"]
    }, image: "/poi-images/stsl-fuel-depot-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das STSL-Treibstoffdepot in Lomé ist das größte Treibstofflager in Togo. Es wurde 2012 errichtet und hat eine Lagerkapazität von 60.000 Kubikmetern. Es lagert Benzin, Diesel und Kerosin für den inländischen Markt und den Transit in die Nachbarländer. Das Depot ist an die Hafenanlagen von Lomé angeschlossen und ermöglicht eine effiziente Verteilung. Es umfasst 12 Lagertanks mit einem Fassungsvermögen von jeweils 5.000 m³. Die Anlage ist ein Joint Venture zwischen der togolesischen Regierung und privaten Investoren.",
      hu: "A STSL üzemanyag-raktár Loméban a legnagyobb üzemanyag-tároló létesítmény Togóban. 2012-ben épült, tárolókapacitása 60.000 köbméter. Benzint, gázolajat és kerozint tárol a hazai piac és a szomszédos országokba irányuló tranzit számára. A raktár kapcsolódik Lomé kikötőjéhez, lehetővé téve a hatékony elosztást. 12 darab, egyenként 5.000 m³ kapacitású tartályból áll. A létesítmény a togói kormány és magánbefektetők közös vállalkozása.",
      ro: "Depozitul de combustibil STSL din Lomé este cea mai mare instalație de stocare a combustibililor din Togo. A fost construit în 2012 și are o capacitate de stocare de 60.000 de metri cubi. Depozitează benzină, motorină și kerosen pentru piața internă și pentru tranzitul către țările vecine. Depozitul este conectat la instalațiile portuare din Lomé, facilitând distribuția eficientă. Este format din 12 rezervoare, fiecare cu o capacitate de 5.000 m³. Instalația este o societate mixtă între guvernul togolez și investitori privați.",
      en: "The STSL Fuel Depot in Lomé is the largest fuel storage facility in Togo. Built in 2012, it has a storage capacity of 60,000 cubic meters. It stores gasoline, diesel, and kerosene for the domestic market and transit to neighboring countries. The depot is connected to the port facilities of Lomé, enabling efficient distribution. It consists of 12 storage tanks, each with a capacity of 5,000 m³. The facility is a joint venture between the Togolese government and private investors.",
    },
    factsAdvanced: {
      de: ["Lagerkapazität: 60.000 Kubikmeter", "Baujahr: 2012", "Anzahl der Tanks: 12", "Fassungsvermögen pro Tank: 5.000 m³", "Produkte: Benzin, Diesel, Kerosin", "Joint Venture zwischen Staat und Privaten"],
      hu: ["Tárolókapacitás: 60.000 köbméter", "Építés éve: 2012", "Tartályok száma: 12", "Egy tartály kapacitása: 5.000 m³", "Tárolt termékek: benzin, gázolaj, kerozin", "Közös vállalkozás a kormány és magánbefektetők között"],
      ro: ["Capacitate de stocare: 60.000 metri cubi", "Anul construcției: 2012", "Număr de rezervoare: 12", "Capacitate per rezervor: 5.000 m³", "Produse stocate: benzină, motorină, kerosen", "Societate mixtă între guvern și investitori privați"],
      en: ["Storage capacity: 60,000 cubic meters", "Year built: 2012", "Number of tanks: 12", "Capacity per tank: 5,000 m³", "Products: gasoline, diesel, kerosene", "Joint venture between government and private investors"],
    },
  },
  {
    id: "sgmt-flour-mill-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.262, 6.142],
    name: {
      de: "SGMT Getreidemühle Lomé",
      hu: "SGMT malom, Lomé",
      ro: "Moara de cereale SGMT Lomé",
      en: "SGMT Flour Mill Lomé"},
    image: "/poi-images/sgmt-flour-mill-economic-v2.webp",
    description: {
      de: "Die Société des Grands Moulins du Togo (SGMT) verarbeitet importiertes Getreide zu Mehl und anderen Backzutaten. Sie ist eine der wichtigsten Säulen der togoischen Lebensmittelindustrie. Sachkunde K3 - Nahrungsmittelverarbeitung.",
      hu: "A Société des Grands Moulins du Togo (SGMT) importált gabonát dolgoz fel lisztté és egyéb sütőipari alapanyagokká. A togoi élelmiszeripar egyik legfontosabb oszlopa. Sachkunde K3 - Élelmiszer-feldolgozás.",
      ro: "Société des Grands Moulins du Togo (SGMT) prelucrează cereale importate în făină și alte ingrediente pentru panificație. Este unul dintre cei mai importanți piloni ai industriei alimentare togoleze. Sachkunde K3 - Prelucrarea alimentelor.",
      en: "The Société des Grands Moulins du Togo (SGMT) processes imported grain into flour and other baking ingredients. It is one of the most important pillars of the Togolese food industry. Geography K3 - Food processing."
    },
    facts: {
      de: ["Industrielle Mehlproduktion", "Strategisch am Hafen gelegen", "Versorgung von Bäckereien landesweit", "Große Silokapazitäten"],
      hu: ["Ipari lisztgyártás", "Stratégiai helyen a kikötőben", "Pékségek ellátása országszerte", "Nagy silókapacitások"],
      ro: ["Producția industrială de făină", "Amplasată strategic în port", "Aprovizionarea brutăriilor la nivel național", "Capacități mari de siloz"],
      en: ["Industrial flour production", "Strategically located at the port", "Supply to bakeries nationwide", "Large silo capacities"]
    }, image: "/poi-images/sgmt-flour-mill-economic-v2.webp",
    descriptionAdvanced: {
      de: "Die SGMT-Weizenmühle in Lomé ist eine der größten Getreidemühlen Westafrikas. Sie wurde 2014 eröffnet und hat eine jährliche Mahlkapazität von 250.000 Tonnen Weizen. Die Mühle verarbeitet importierten Weizen aus Europa und Nordamerika zu Mehl für den togolesischen Markt und die Exportmärkte der Region. Die Anlage umfasst moderne Walzenstühle, Plansichter und Reinigungsmaschinen. Sie produziert verschiedene Mehlsorten für Bäckereien, Nudelhersteller und Haushalte. Das Werk beschäftigt rund 200 Mitarbeiter.",
      hu: "A SGMT lisztmalom Loméban Nyugat-Afrika egyik legnagyobb gabonamalma. 2014-ben nyílt meg, éves őrlési kapacitása 250.000 tonna búza. A malom Európából és Észak-Amerikából importált búzát dolgoz fel lisztté a togói piac és a regionális export számára. A létesítmény modern hengerszékekkel, szita berendezésekkel és tisztítógépekkel van felszerelve. Különböző lisztfajtákat gyárt pékségek, tésztagyártók és háztartások számára. A malom körülbelül 200 embert foglalkoztat.",
      ro: "Moara de făină SGMT din Lomé este una dintre cele mai mari mori de cereale din Africa de Vest. A fost deschisă în 2014 și are o capacitate anuală de măcinare de 250.000 de tone de grâu. Moara procesează grâu importat din Europa și America de Nord în făină pentru piața togoleză și pentru export în regiune. Instalația include cilindri moderni, site plane și mașini de curățare. Produce diferite tipuri de făină pentru brutării, producători de paste și gospodării. Moara angajează aproximativ 200 de persoane.",
      en: "The SGMT Flour Mill in Lomé is one of the largest grain mills in West Africa. Opened in 2014, it has an annual milling capacity of 250,000 tons of wheat. The mill processes imported wheat from Europe and North America into flour for the Togolese market and regional exports. The facility features modern roller mills, plansifters, and cleaning machines. It produces various flour types for bakeries, pasta manufacturers, and households. The plant employs around 200 people.",
    },
    factsAdvanced: {
      de: ["Jährliche Mahlkapazität: 250.000 Tonnen Weizen", "Eröffnung: 2014", "Mitarbeiterzahl: etwa 200", "Importierte Rohstoffe: Weizen aus Europa und Nordamerika", "Produziert: Mehltypen für Bäckereien und Nudelhersteller", "Standort: Hafen von Lomé"],
      hu: ["Éves őrlési kapacitás: 250.000 tonna búza", "Megnyitás: 2014", "Alkalmazottak száma: körülbelül 200", "Importált alapanyag: búza Európából és Észak-Amerikából", "Termékek: különféle lisztfajták pékségeknek és tésztagyáraknak", "Helyszín: Lomé kikötője"],
      ro: ["Capacitate anuală de măcinare: 250.000 tone de grâu", "Anul deschiderii: 2014", "Număr de angajați: aproximativ 200", "Materie primă importată: grâu din Europa și America de Nord", "Produce: tipuri de făină pentru brutării și producători de paste", "Locație: portul Lomé"],
      en: ["Annual milling capacity: 250,000 tons of wheat", "Opened: 2014", "Employees: about 200", "Imported raw material: wheat from Europe and North America", "Products: various flour types for bakeries and pasta makers", "Location: Port of Lomé"],
    },
  },
  {
    id: "togo-carriere-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.515, 6.545],
    name: {
      de: "Togo Carrière Sika-Kondji",
      hu: "Togo Carrière mészkőbánya",
      ro: "Cariera Togo Sika-Kondji",
      en: "Togo Carrière Sika-Kondji"},
    image: "/poi-images/togo-carriere-economic-v2.webp",
    description: {
      de: "Dieser Kalksteinbruch in Sika-Kondji liefert den notwendigen Rohstoff für die Zementwerke der Region. Der Abbau erfolgt im großen Stil und ist entscheidend für die nationale Bauwirtschaft. Geographie K8 - Rohstoffgewinnung.",
      hu: "Ez a sika-kondji-i mészkőbánya biztosítja a szükséges nyersanyagot a régió cementgyárai számára. A kitermelés nagyüzemi módon folyik, és létfontosságú a nemzeti építőipar számára. Földrajz K8 - Nyersanyag-kitermelés.",
      ro: "Această carieră de calcar din Sika-Kondji furnizează materia primă necesară pentru fabricile de ciment din regiune. Extracția are loc la scară largă și este crucială pentru industria națională a construcțiilor. Geografie K8 - Extracția materiilor prime.",
      en: "This limestone quarry in Sika-Kondji provides the necessary raw material for the region's cement plants. Mining is carried out on a large scale and is vital for the national construction industry."
    },
    facts: {
      de: ["Großer Kalksteinbruch", "Grundlage der Zementproduktion", "Industrielle Sprengtechnik", "Bedeutender regionaler Bergbau"],
      hu: ["Hatalmas mészkőbánya", "A cementgyártás alapja", "Ipari robbantástechnika", "Jelentős regionális bányászat"],
      ro: ["Carieră mare de calcar", "Baza producției de ciment", "Tehnică de dinamitare industrială", "Minerit regional important"],
      en: ["Large limestone quarry", "Basis of cement production", "Industrial blasting techniques", "Significant regional mining"]
    }, image: "/poi-images/togo-carriere-economic-v2.webp",
    descriptionAdvanced: {
      de: "Die Togo Carrière Sika-Kondji ist ein Marmorbruchbetrieb in der Region Plateaux. Der Steinbruch fördert hochwertigen weißen Marmor, der in der Bauindustrie und für Dekorationszwecke verwendet wird. Die Mine wurde 2008 erschlossen und hat eine jährliche Produktion von etwa 5.000 Tonnen Rohblöcken. Der Marmor wird mit modernen Schneidemaschinen abgebaut und zu Platten verarbeitet. Das Unternehmen exportiert nach Europa und in den Nahen Osten. Es beschäftigt rund 100 Arbeiter vor Ort.",
      hu: "A Togo Carrière Sika-Kondji egy márványbánya a Plateaux régióban. A kőfejtő kiváló minőségű fehér márványt termel, amelyet az építőiparban és díszítő célokra használnak. A bányát 2008-ban nyitották meg, éves termelése körülbelül 5.000 tonna nyers tömb. A márványt modern vágógépekkel fejtik és lapokká dolgozzák fel. A cég Európába és a Közel-Keletre exportál. Körülbelül 100 munkást foglalkoztat a helyszínen.",
      ro: "Cariera Togo Carrière Sika-Kondji este o mină de marmură în regiunea Plateaux. Cariera extrage marmură albă de înaltă calitate, utilizată în construcții și în scopuri decorative. Mina a fost deschisă în 2008 și are o producție anuală de aproximativ 5.000 de tone de blocuri brute. Marmura este extrasă cu mașini de tăiat moderne și prelucrată în plăci. Compania exportă în Europa și Orientul Mijlociu. Angajează aproximativ 100 de muncitori la fața locului.",
      en: "The Togo Carrière Sika-Kondji is a marble quarry in the Plateaux region. The quarry extracts high-quality white marble used in construction and for decorative purposes. The mine was opened in 2008 and has an annual production of about 5,000 tons of raw blocks. Marble is extracted using modern cutting machines and processed into slabs. The company exports to Europe and the Middle East. It employs around 100 local workers.",
    },
    factsAdvanced: {
      de: ["Jährliche Produktion: 5.000 Tonnen Rohblöcke", "Erschließungsjahr: 2008", "Marmorart: weißer Marmor", "Exportziele: Europa, Naher Osten", "Anzahl der Arbeiter: 100", "Standort: Sika-Kondji, Region Plateaux"],
      hu: ["Éves termelés: 5.000 tonna nyers tömb", "Megnyitás éve: 2008", "Márvány típusa: fehér márvány", "Export célok: Európa, Közel-Kelet", "Munkások száma: 100", "Helyszín: Sika-Kondji, Plateaux régió"],
      ro: ["Producție anuală: 5.000 tone de blocuri brute", "Anul deschiderii: 2008", "Tip de marmură: marmură albă", "Destinații de export: Europa, Orientul Mijlociu", "Număr de muncitori: 100", "Locație: Sika-Kondji, regiunea Plateaux"],
      en: ["Annual production: 5,000 tons of raw blocks", "Year opened: 2008", "Marble type: white marble", "Export destinations: Europe, Middle East", "Number of workers: 100", "Location: Sika-Kondji, Plateaux Region"],
    },
  },
  {
    id: "kekeli-power-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.268, 6.158],
    name: {
      de: "Kékéli Efficient Power",
      hu: "Kékéli Efficient Power erőmű",
      ro: "Centrala Kékéli Efficient Power",
      en: "Kékéli Efficient Power Plant"},
    image: "/poi-images/kekeli-power-economic-v2.webp",
    description: {
      de: "Das Kékéli-Kraftwerk ist eine hochmoderne Gaskraftanlage in Lomé, die die Energieautarkie Togos stärken soll. Sie nutzt effiziente Technologie zur Reduzierung von Emissionen. Geographie K8 - Nachhaltige Energie.",
      hu: "A kékéli erőmű egy ultramodern gáztüzelésű erőmű Loméban, amelynek célja Togo energiafüggetlenségének erősítése. Hatékony technológiát alkalmaz a károsanyag-kibocsátás csökkentése érdekében. Földrajz K8 - Fenntartható energia.",
      ro: "Centrala Kékéli este o unitate de ultimă generație pe gaz din Lomé, menită să consolideze independența energetică a Togo-ului. Utilizează tehnologie eficientă pentru a reduce emisiile. Geografie K8 - Energie durabilă.",
      en: "The Kékéli power plant is a state-of-the-art gas-fired power facility in Lomé, designed to strengthen Togo's energy self-sufficiency. It utilizes efficient technology to reduce emissions. Geography K8 - Sustainable energy."
    },
    facts: {
      de: ["Modernstes Gaskraftwerk", "Beitrag zur Energiewende", "Wichtig für die Hauptstadt Lomé", "Investition in moderne Infrastruktur"],
      hu: ["A legmodernebb gázerőmű", "Hozzájárulás az energiaváltáshoz", "Fontos a főváros, Lomé számára", "Beruházás a modern infrastruktúrába"],
      ro: ["Cea mai modernă centrală pe gaz", "Contribuție la tranziția energetică", "Importantă pentru capitala Lomé", "Investiție în infrastructură modernă"],
      en: ["State-of-the-art gas power plant", "Contribution to the energy transition", "Crucial for the capital city Lomé", "Investment in modern infrastructure"]
    }, image: "/poi-images/kekeli-power-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das Kékéli Efficient Power Plant ist ein Gaskraftwerk in der Nähe von Lomé. Es wurde 2021 in Betrieb genommen und hat eine Kapazität von 65 Megawatt. Die Anlage nutzt einen hochmodernen Gasturbinenmotor und erreicht einen Wirkungsgrad von über 40%. Es versorgt die südliche Region Togos mit Strom und reduziert die Abhängigkeit von Wasserkraft. Das Kraftwerk ist Teil des Kékéli-Projekts zur Verbesserung der Energieeffizienz. Es verwendet Erdgas aus dem Offshore-Feld von Togo.",
      hu: "A Kékéli hatékony erőmű Lomé közelében található gáztüzelésű erőmű. 2021-ben helyezték üzembe, kapacitása 65 megawatt. A létesítmény rendkívül modern gázturbinás motort használ, hatásfoka meghaladja a 40%-ot. Togo déli régióját látja el árammal, és csökkenti a vízenergiától való függőséget. Az erőmű a Kékéli projekt része, amely az energiahatékonyság javítását célozza. Togo tengeri gázmezőjéről származó földgázt használ.",
      ro: "Centrala Electrică Eficientă Kékéli este o centrală pe gaz situată aproape de Lomé. A fost pusă în funcțiune în 2021 și are o capacitate de 65 de megawați. Instalația utilizează un motor cu turbină pe gaz de ultimă generație, atingând un randament de peste 40%. Alimentează sudul Togoului cu electricitate și reduce dependența de hidroenergie. Centrala face parte din proiectul Kékéli pentru îmbunătățirea eficienței energetice. Folosește gaze naturale din zăcământul marin al Togoului.",
      en: "The Kékéli Efficient Power Plant is a gas-fired power station near Lomé. Commissioned in 2021, it has a capacity of 65 megawatts. The facility uses a state-of-the-art gas turbine engine, achieving an efficiency of over 40%. It supplies power to southern Togo and reduces reliance on hydropower. The plant is part of the Kékéli project to improve energy efficiency. It uses natural gas from Togo's offshore field.",
    },
    factsAdvanced: {
      de: ["Kapazität: 65 MW", "Inbetriebnahme: 2021", "Wirkungsgrad: über 40%", "Brennstoff: Erdgas", "Projekt: Kékéli Energieeffizienzprojekt", "Versorgt: Süden Togos"],
      hu: ["Kapacitás: 65 MW", "Üzembe helyezés: 2021", "Hatásfok: több mint 40%", "Üzemanyag: földgáz", "Projekt: Kékéli energiahatékonysági projekt", "Ellátja: Dél-Togót"],
      ro: ["Capacitate: 65 MW", "Punere în funcțiune: 2021", "Randament: peste 40%", "Combustibil: gaze naturale", "Proiect: Proiectul de eficiență energetică Kékéli", "Alimentează: sudul Togoului"],
      en: ["Capacity: 65 MW", "Commissioned: 2021", "Efficiency: over 40%", "Fuel: natural gas", "Project: Kékéli Energy Efficiency Project", "Supplies: southern Togo"],
    },
  },
  {
    id: "scan-togo-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.518, 6.542],
    name: {
      de: "SCAN Togo Zementwerk",
      hu: "SCAN Togo cementgyár",
      ro: "Fabrica de ciment SCAN Togo",
      en: "SCAN Togo Cement Plant"},
    image: "/poi-images/scan-togo-economic-v2.webp",
    description: {
      de: "Das SCAN Togo Zementwerk ist ein großer Industriekomplex, der zur Heidelberg-Materials-Gruppe gehört. Es ist auf die Herstellung von Zementklinker aus lokalen Kalksteinvorkommen spezialisiert. Geographie K8 - Schwere Industrie.",
      hu: "A SCAN Togo cementgyár egy nagy ipari komplexum, amely a Heidelberg Materials csoporthoz tartozik. A helyi mészkőkészletekből történő cementklinker-gyártásra specializálódott. Földrajz K8 - Nehézipar.",
      ro: "Fabrica de ciment SCAN Togo este un complex industrial mare care aparține grupului Heidelberg Materials. Este specializată în producția de clincher de ciment din zăcăminte locale de calcar. Geografie K8 - Industria grea.",
      en: "The SCAN Togo cement plant is a large industrial complex belonging to the Heidelberg Materials group. It specializes in producing cement clinker from local limestone deposits. Geography K8 - Heavy industry."
    },
    facts: {
      de: ["Großanlage zur Klinkerherstellung", "Teil eines internationalen Konzerns", "Sicherung von Arbeitsplätzen", "Wesentlicher Teil der Industriekette"],
      hu: ["Nagyüzemi klinkergyártás", "Egy nemzetközi konszern része", "Munkahelyek biztosítása", "Az ipari lánc alapvető része"],
      ro: ["Instalație mare pentru producția de clincher", "Parte a unui grup internațional", "Asigurarea locurilor de muncă", "Parte esențială a lanțului industrial"],
      en: ["Large-scale clinker production facility", "Part of an international group", "Securing local jobs", "Essential part of the industrial chain"]
    }, image: "/poi-images/scan-togo-economic-v2.webp",
    descriptionAdvanced: {
      de: "Das SCAN Togo Zementwerk in Tabligbo ist eines der größten Zementwerke in Togo. Es wurde 2015 eröffnet und hat eine jährliche Produktionskapazität von 1,5 Millionen Tonnen Zement. Das Werk verwendet importierten Klinker und lokale Zusatzstoffe. Es produziert verschiedene Zementsorten für den Bau- und Infrastruktursektor. Die Anlage umfasst eine moderne Kugelmühle und Verpackungslinien. Es beliefert sowohl den togolesischen Markt als auch Nachbarländer. Das Werk beschäftigt rund 300 Mitarbeiter.",
      hu: "A SCAN Togo cementgyár Tabligbóban Togo egyik legnagyobb cementgyára. 2015-ben nyílt meg, éves termelési kapacitása 1,5 millió tonna cement. A gyár importált klinkert és helyi adalékanyagokat használ. Különböző cementfajtákat gyárt az építőipar és az infrastruktúra számára. A létesítmény modern golyósmalommal és csomagolósorokkal van felszerelve. A togói piacot és a szomszédos országokat is ellátja. Körülbelül 300 embert foglalkoztat.",
      ro: "Fabrica de ciment SCAN Togo din Tabligbo este una dintre cele mai mari fabrici de ciment din Togo. A fost deschisă în 2015 și are o capacitate anuală de producție de 1,5 milioane de tone de ciment. Fabrica utilizează clincher importat și aditivi locali. Produce diferite tipuri de ciment pentru sectorul construcțiilor și infrastructurii. Instalația include o moară cu bile modernă și linii de ambalare. Aprovizionează atât piața togoleză, cât și țările vecine. Fabrica angajează aproximativ 300 de persoane.",
      en: "The SCAN Togo Cement Plant in Tabligbo is one of the largest cement plants in Togo. It opened in 2015 and has an annual production capacity of 1.5 million tons of cement. The plant uses imported clinker and local additives. It produces various cement types for the construction and infrastructure sectors. The facility includes a modern ball mill and packaging lines. It supplies both the Togolese market and neighboring countries. The plant employs around 300 people.",
    },
    factsAdvanced: {
      de: ["Jährliche Produktionskapazität: 1,5 Millionen Tonnen Zement", "Eröffnung: 2015", "Anzahl Mitarbeiter: 300", "Rohstoffe: importierter Klinker, lokale Zusatzstoffe", "Standort: Tabligbo, Togo", "Export in Nachbarländer (Burkina Faso, Benin)"],
      hu: ["Éves termelési kapacitás: 1,5 millió tonna cement", "Megnyitás: 2015", "Alkalmazottak száma: 300", "Nyersanyagok: importált klinker, helyi adalékanyagok", "Helyszín: Tabligbo, Togo", "Export a szomszédos országokba (Burkina Faso, Benin)"],
      ro: ["Capacitate anuală de producție: 1,5 milioane de tone de ciment", "Anul deschiderii: 2015", "Număr de angajați: 300", "Materii prime: clincher importat, aditivi locali", "Locație: Tabligbo, Togo", "Export în țări vecine (Burkina Faso, Benin)"],
      en: ["Annual production capacity: 1.5 million tons of cement", "Opened: 2015", "Number of employees: 300", "Raw materials: imported clinker, local additives", "Location: Tabligbo, Togo", "Exports to neighboring countries (Burkina Faso, Benin)"],
    },
  },
  {
    id: "pompage-lassa-economic-v2",
    type: "industry",
    parent: "TG-K",
    coords: [1.185, 9.565],
    name: {
      de: "Pompage d'eau de Lassa",
      hu: "Lassa-i vízművek",
      ro: "Stația de pompare a apei Lassa",
      en: "Lassa Water Pumping Station"},
    image: "/poi-images/pompage-lassa-economic-v2.webp",
    description: {
      de: "Die Pumpstation in Lassa ist eine lebenswichtige industrielle Anlage zur Wasserversorgung der Stadt Kara und ihres Umlands. Sie stellt die Aufbereitung und Verteilung von Trinkwasser sicher. Sachkunde K4 - Öffentliche Infrastruktur.",
      hu: "A lassa-i szivattyúállomás létfontosságú ipari létesítmény Kara város és környéke vízellátásához. Biztosítja az ivóvíz tisztítását és elosztását. Sachkunde K4 - Közműinfrastruktúra.",
      ro: "Stația de pompare din Lassa este o instalație industrială vitală pentru alimentarea cu apă a orașului Kara și a împrejurimilor sale. Asigură tratarea și distribuția apei potabile. Sachkunde K4 - Infrastructură publică.",
      en: "The Lassa pumping station is a vital industrial facility for the water supply of the city of Kara and its surroundings. It ensures the treatment and distribution of drinking water. Geography K4 - Public infrastructure."
    },
    facts: {
      de: ["Zentrale Wasserversorgung für Kara", "Großtechnische Filteranlagen", "Wichtig für die öffentliche Hygiene", "Industrielle Pumpstation"],
      hu: ["Kara központi vízellátása", "Nagyüzemi szűrőberendezések", "Fontos a közegészségügy számára", "Ipari szivattyúállomás"],
      ro: ["Alimentarea centrală cu apă pentru Kara", "Instalații de filtrare la scară mare", "Importantă pentru igiena publică", "Stație de pompare industrială"],
      en: ["Central water supply for Kara", "Large-scale technical filter systems", "Crucial for public hygiene", "Industrial pumping station"]
    }, image: "/poi-images/pompage-lassa-economic-v2.webp",
    descriptionAdvanced: {
      de: "Die Lassa Wasserpumpstation ist eine wichtige Trinkwasseraufbereitungsanlage in der Region Kará. Sie wurde 2010 in Betrieb genommen und fördert Wasser aus dem Fluss Mono. Die Station hat eine Kapazität von 10.000 Kubikmetern pro Tag. Das Wasser wird durch Filtration und Chlorierung aufbereitet. Es versorgt die Städte Mango und Dapaong mit sauberem Trinkwasser. Die Anlage umfasst mehrere Pumpen und ein Verteilungsnetz. Sie wird von der togolesischen Wasserbehörde betrieben.",
      hu: "A Lassa vízszivattyú-állomás egy fontos ivóvízkezelő létesítmény a Kará régióban. 2010-ben helyezték üzembe, és a Mono folyóból nyer vizet. Az állomás kapacitása napi 10.000 köbméter. A vizet szűréssel és klórozással kezelik. Mango és Dapaong városokat látja el tiszta ivóvízzel. A létesítmény számos szivattyút és elosztóhálózatot foglal magában. A togói vízügyi hatóság üzemelteti.",
      ro: "Stația de pompare a apei Lassa este o instalație importantă de tratare a apei potabile în regiunea Kará. A fost pusă în funcțiune în 2010 și extrage apă din râul Mono. Stația are o capacitate de 10.000 de metri cubi pe zi. Apa este tratată prin filtrare și clorinare. Alimentează orașele Mango și Dapaong cu apă potabilă curată. Instalația include mai multe pompe și o rețea de distribuție. Este operată de autoritatea de apă a Togoului.",
      en: "The Lassa Water Pumping Station is a major drinking water treatment facility in the Kara region. It was commissioned in 2010 and abstracts water from the Mono River. The station has a capacity of 10,000 cubic meters per day. Water is treated through filtration and chlorination. It supplies the cities of Mango and Dapaong with clean drinking water. The facility includes multiple pumps and a distribution network. It is operated by the Togolese water authority.",
    },
    factsAdvanced: {
      de: ["Kapazität: 10.000 Kubikmeter pro Tag", "Inbetriebnahme: 2010", "Wasserquelle: Fluss Mono", "Aufbereitung: Filtration und Chlorierung", "Versorgte Städte: Mango, Dapaong", "Betreiber: Togolesische Wasserbehörde"],
      hu: ["Kapacitás: napi 10.000 köbméter", "Üzembe helyezés: 2010", "Vízforrás: Mono folyó", "Kezelés: szűrés és klórozás", "Ellátott városok: Mango, Dapaong", "Üzemeltető: togói vízügyi hatóság"],
      ro: ["Capacitate: 10.000 metri cubi pe zi", "Punere în funcțiune: 2010", "Sursă de apă: Râul Mono", "Tratare: filtrare și clorinare", "Orașe deservite: Mango, Dapaong", "Operator: Autoritatea de apă a Togoului"],
      en: ["Capacity: 10,000 cubic meters per day", "Commissioned: 2010", "Water source: Mono River", "Treatment: filtration and chlorination", "Supplies: Mango, Dapaong", "Operator: Togolese Water Authority"],
    },
  },
  {
    id: "snpt-akoumape-economic-v2",
    type: "industry",
    parent: "TG-M",
    coords: [1.415, 6.415],
    name: {
      de: "SNPT Phosphat-Mine Akoumapé",
      hu: "SNPT foszfátbánya, Akoumapé",
      ro: "Mina de fosfat SNPT Akoumapé",
      en: "SNPT Phosphate Mine Akoumapé"},
    image: "/poi-images/snpt-akoumape-economic-v2.webp",
    description: {
      de: "Die Mine bei Akoumapé ist ein weiteres bedeutendes Abbaugebiet der SNPT. Hier werden hochwertige Phosphaterze gewonnen, die per Bahn zur Küste transportiert werden. Geographie K8 - Bergbaugebiete.",
      hu: "Az akoumapé-i bánya az SNPT másik jelentős kitermelési területe. Itt kiváló minőségű foszfátércet bányásznak, amelyet vasúton szállítanak a partra. Földrajz K8 - Bányavidékek.",
      ro: "Mina de lângă Akoumapé este o altă zonă de extracție importantă a SNPT. Aici se extrag minereuri de fosfat de înaltă calitate, care sunt transportate cu trenul spre coastă. Geografie K8 - Zone miniere.",
      en: "The mine near Akoumapé is another significant extraction area for SNPT. High-quality phosphate ores are mined here and transported by rail to the coast. Geography K8 - Mining areas."
    },
    facts: {
      de: ["Wichtiges Phosphatvorkommen", "Einsatz schwerer Bergbautechnik", "Anbindung an das nationale Schienennetz", "Zentrum der Rohstoffwirtschaft"],
      hu: ["Fontos foszfátlelőhely", "Nehéz bányagépek használata", "Összeköttetés a nemzeti vasúthálózattal", "A nyersanyaggazdálkodás központja"],
      ro: ["Zăcământ important de fosfat", "Utilizarea echipamentelor miniere grele", "Legătură cu rețeaua feroviară națională", "Centru al economiei de materii prime"],
      en: ["Major phosphate deposit", "Use of heavy mining machinery", "Connected to the national railway network", "Center of the raw materials economy"]
    },
    descriptionAdvanced: {
      de: "Die SNPT-Phosphatmine in Akoumapé ist eine der wichtigsten Minen Togos. Sie wurde 1961 eröffnet und fördert Phosphatgestein für die Düngemittelproduktion. Die Mine hat eine jährliche Förderkapazität von 3 Millionen Tonnen. Das Phosphat wird im Tagebau abgebaut. Es wird per Bahn zum Hafen von Lomé transportiert und exportiert. Togo ist einer der weltweit führenden Phosphatproduzenten. Die Mine beschäftigt etwa 1.500 Arbeiter.",
      hu: "Az SNPT foszfátbánya Akoumapéban Togo egyik legfontosabb bányája. 1961-ben nyitották meg, és foszfátkőzetet bányászik műtrágya gyártáshoz. A bánya éves termelési kapacitása 3 millió tonna. A foszfátot külszíni fejtéssel bányásszák. Vasúton szállítják Lomé kikötőjébe és exportálják. Togo a világ egyik vezető foszfáttermelője. A bánya körülbelül 1.500 munkást foglalkoztat.",
      ro: "Mina de fosfat SNPT din Akoumapé este una dintre cele mai importante mine din Togo. A fost deschisă în 1961 și extrage rocă fosfatică pentru producția de îngrășăminte. Mina are o capacitate anuală de extracție de 3 milioane de tone. Fosfatul este extras în carieră deschisă. Este transportat pe cale ferată la portul Lomé și exportat. Togo este unul dintre cei mai importanți producători de fosfat din lume. Mina angajează aproximativ 1.500 de muncitori.",
      en: "The SNPT Phosphate Mine in Akoumapé is one of the most important mines in Togo. It opened in 1961 and extracts phosphate rock for fertilizer production. The mine has an annual extraction capacity of 3 million tons. Phosphate is mined via open-pit methods. It is transported by rail to the port of Lomé for export. Togo is a leading global phosphate producer. The mine employs about 1,500 workers.",
    },
    factsAdvanced: {
      de: ["Jährliche Förderkapazität: 3 Millionen Tonnen", "Eröffnung: 1961", "Abbaumethode: Tagebau", "Transport: Bahn zum Hafen von Lomé", "Anzahl der Beschäftigten: 1.500", "Export von Phosphatgestein weltweit"],
      hu: ["Éves termelési kapacitás: 3 millió tonna", "Megnyitás: 1961", "Bányászati módszer: külszíni fejtés", "Szállítás: vasúton Lomé kikötőjébe", "Alkalmazottak száma: 1.500", "Foszfátkőzet exportja világszerte"],
      ro: ["Capacitate anuală de extracție: 3 milioane de tone", "Anul deschiderii: 1961", "Metodă de exploatare: carieră deschisă", "Transport: cale ferată către portul Lomé", "Număr de angajați: 1.500", "Export de rocă fosfatică la nivel global"],
      en: ["Annual extraction capacity: 3 million tons", "Opened: 1961", "Mining method: open-pit", "Transport: rail to Lomé port", "Number of employees: 1,500", "Exports phosphate rock worldwide"],
    },
  }
,
  {
    id: "togo-dapaong-cotton-ginning-economic-v2",
    type: "factory",
    name: { de: "Dapaong Baumwollentkernung", hu: "Dapaong gyapotfeldolgozó", ro: "Fabrica de procesare a bumbacului Dapaong", en: "Dapaong Cotton Ginning Plant" },
    coords: [0.203, 10.855],
    description: {
      de: "Diese Anlage verarbeitet in der Region Savanes angebaute Baumwolle. Sie dient als zentraler Umschlagplatz für landwirtschaftliche Rohstoffe.",
      hu: "Ez az üzem a Savanes régióban termesztett gyapotot dolgozza fel. Központi átrakodóhelyként szolgál a mezőgazdasági nyersanyagok számára.",
      ro: "Această unitate procesează bumbacul cultivat în regiunea Savanes. Servește drept centru principal de colectare a materiilor prime agricole.",
      en: "This facility processes cotton grown in the Savanes region. It serves as a central collection point for agricultural raw materials.",
    },
    facts: {
      de: ["Verarbeitet lokale Rohbaumwolle", "Wichtiger Arbeitgeber in Dapaong", "Exportiert in internationale Märkte", "Fördert regionale Landwirtschaft"],
      hu: ["Helyi nyersgyapotot dolgoz fel", "Fontos munkaadó Dapaongban", "Nemzetközi piacokra exportál", "Támogatja a régió mezőgazdaságát"],
      ro: ["Procesează bumbac brut local", "Angajator important în Dapaong", "Exportă pe piețele internaționale", "Susține agricultura regională"],
      en: ["Processes local raw cotton", "Major employer in Dapaong", "Exports to international markets", "Supports regional agriculture"],
    },
    imageHint: "industrial cotton processing factory",
  },
  {
    id: "togo-kpalime-palm-oil-mill-economic-v2",
    type: "factory",
    name: { de: "Kpalimé Palmölmühle", hu: "Kpalimé pálmaolaj-üzem", ro: "Moara de ulei de palmier Kpalimé", en: "Kpalimé Palm Oil Mill" },
    coords: [0.635, 6.908],
    description: {
      de: "Die Mühle extrahiert Öl aus den in der Umgebung geernteten Ölfrüchten. Sie trägt signifikant zur lokalen Wertschöpfungskette bei.",
      hu: "Az üzem a környéken betakarított olajpálma-termésekből állít elő olajat. Jelentősen hozzájárul a helyi értéklánchoz.",
      ro: "Moara extrage ulei din fructele de palmier recoltate în vecinătate. Contribuie semnificativ la lanțul valoric local.",
      en: "The mill extracts oil from oil palm fruits harvested in the vicinity. It contributes significantly to the local value chain.",
    },
    facts: {
      de: ["Extrahiert natives Palmöl", "Versorgt lokale Lebensmittelhändler", "Optimiert die Ernteverarbeitung", "Stärkt die lokale Ölproduktion"],
      hu: ["Nyers pálmaolajat állít elő", "Ellátja a helyi élelmiszerkereskedőket", "Optimalizálja a betakarított termény feldolgozását", "Erősíti a helyi olajtermelést"],
      ro: ["Extrage ulei de palmier brut", "Aprovizionează comercianții locali", "Optimizează procesarea recoltei", "Consolidează producția locală de ulei"],
      en: ["Extracts crude palm oil", "Supplies local food retailers", "Optimizes harvest processing", "Strengthens local oil production"],
    },
    imageHint: "palm oil processing machinery",
  },
  {
    id: "togo-sokode-dairy-processing-economic-v2",
    type: "factory",
    name: { de: "Sokodé Molkerei", hu: "Sokodé tejüzem", ro: "Fabrica de lactate Sokodé", en: "Sokodé Dairy Plant" },
    coords: [1.137, 8.983],
    description: {
      de: "Dieser Betrieb verarbeitet Milch von lokalen Rinderzuchtbetrieben. Er produziert verschiedene Molkereiprodukte für den regionalen Markt.",
      hu: "Az üzem a helyi szarvasmarha-telepekről származó tejet dolgozza fel. Különböző tejtermékeket gyárt a regionális piac számára.",
      ro: "Această unitate procesează laptele provenit de la fermele locale de bovine. Produce diverse lactate pentru piața regională.",
      en: "This facility processes milk sourced from local cattle farms. It produces various dairy products for the regional market.",
    },
    facts: {
      de: ["Verarbeitet tägliche Rohmilch", "Produziert Joghurt und Käse", "Verbessert Haltbarkeit der Produkte", "Unterstützt lokale Milchbauern"],
      hu: ["Napi nyerstejet dolgoz fel", "Joghurtot és sajtot gyárt", "Javítja a termékek eltarthatóságát", "Támogatja a helyi tejtermelőket"],
      ro: ["Procesează lapte brut zilnic", "Produce iaurt și brânză", "Îmbunătățește conservarea produselor", "Sprijină fermierii locali"],
      en: ["Processes daily raw milk", "Produces yogurt and cheese", "Improves product shelf life", "Supports local dairy farmers"],
    },
    imageHint: "modern dairy production facility",
  },
  {
    id: "togo-kara-milling-complex-economic-v2",
    type: "industry",
    name: { de: "Kara Getreidemühle", hu: "Kara gabonafeldolgozó", ro: "Moara de cereale Kara", en: "Kara Grain Milling Complex" },
    coords: [1.184, 9.551],
    description: {
      de: "Dieser industrielle Komplex vermahlt Hirse und Mais aus der Region Kara. Er ist ein wichtiger Versorger für die nördlichen Landesteile.",
      hu: "Ez az ipari komplexum a Kara régió köles- és kukoricatermését dolgozza fel. Fontos ellátó a ország északi részei számára.",
      ro: "Acest complex industrial macină meiul și porumbul din regiunea Kara. Este un furnizor important pentru părțile de nord ale țării.",
      en: "This industrial complex mills millet and maize from the Kara region. It is a major supplier for the northern parts of the country.",
    },
    facts: {
      de: ["Verarbeitet regionale Getreidesorten", "Produziert Mehl in Großmengen", "Versorgt örtliche Bäckereien", "Verbessert regionale Ernährungssicherheit"],
      hu: ["Regionális gabonaféléket dolgoz fel", "Nagy mennyiségben gyárt lisztet", "Ellátja a helyi pékségeket", "Javítja a regionális élelmezésbiztonságot"],
      ro: ["Procesează cereale regionale", "Produce făină în cantități mari", "Aprovizionează brutăriile locale", "Îmbunătățește securitatea alimentară regională"],
      en: ["Processes regional grain varieties", "Produces flour in bulk", "Supplies local bakeries", "Improves regional food security"],
    },
    imageHint: "industrial grain milling facility",
  },
  {
    id: "togo-tsevie-ananas-packing-economic-v2",
    type: "industry",
    name: { de: "Tsévié Ananas-Verpackungszentrum", hu: "Tsévié ananász-csomagoló", ro: "Centru de ambalare a ananasului Tsévié", en: "Tsévié Pineapple Packing Center" },
    coords: [1.215, 6.425],
    description: {
      de: "Das Zentrum spezialisiert sich auf die Aufbereitung und Verpackung von Ananas für den Export. Es nutzt moderne Kühltechnologien.",
      hu: "A központ az ananász exportra történő előkészítésére és csomagolására szakosodott. Modern hűtési technológiákat alkalmaz.",
      ro: "Centrul este specializat în pregătirea și ambalarea ananasului pentru export. Utilizează tehnologii moderne de refrigerare.",
      en: "The center specializes in preparing and packing pineapples for export. It utilizes modern refrigeration technologies.",
    },
    facts: {
      de: ["Exportiert frische Ananas", "Hält internationale Qualitätsstandards", "Beschäftigt lokale Arbeitskräfte", "Reduziert Ernteverluste durch Kühlung"],
      hu: ["Friss ananászt exportál", "Betartja a nemzetközi minőségi előírásokat", "Helyi munkaerőt foglalkoztat", "Csökkenti a betakarítási veszteségeket"],
      ro: ["Exportă ananas proaspăt", "Respectă standardele internaționale de calitate", "Angajează forță de muncă locală", "Reduce pierderile prin refrigerare"],
      en: ["Exports fresh pineapples", "Maintains international quality standards", "Employs local workforce", "Reduces harvest losses via cooling"],
    },
    imageHint: "pineapple sorting and packing line",
  },
  {
    id: "togo-aneho-fishery-hub-economic-v2",
    type: "port",
    name: { de: "Aného Fischerei-Umschlagplatz", hu: "Aného halászati központ", ro: "Centru de pescuit Aného", en: "Aného Fishery Hub" },
    coords: [1.597, 6.234],
    description: {
      de: "Dieser Standort dient der Anlandung und dem Weiterverkauf von frischem Fisch. Er ist ein zentraler Knotenpunkt für den Handel an der Küste.",
      hu: "Ez a telephely a friss hal partra szállítására és továbbértékesítésére szolgál. Központi kereskedelmi csomópont a tengerparton.",
      ro: "Această locație servește la debarcarea și revânzarea peștelui proaspăt. Este un nod comercial central pe coastă.",
      en: "This site serves for the landing and resale of fresh fish. It is a central hub for trade along the coast.",
    },
    facts: {
      de: ["Umschlagort für Küstenfischerei", "Verkauft an lokale Märkte", "Wichtig für die lokale Ernährung", "Unterstützt handwerkliche Fischer"],
      hu: ["Part menti halászat központja", "Helyi piacokon értékesít", "Fontos a helyi élelmezésben", "Támogatja a kézműves halászokat"],
      ro: ["Centru de tranzit pentru pescuitul costier", "Vinde pe piețele locale", "Important pentru alimentația locală", "Sprijină pescarii artizanali"],
      en: ["Hub for coastal fishing", "Sells to local markets", "Important for local nutrition", "Supports artisanal fishermen"],
    },
    imageHint: "traditional fishing boats at port",
  },
  {
    id: "togo-atakpame-textile-weaving-economic-v2",
    type: "factory",
    name: { de: "Atakpamé Weberei", hu: "Atakpamé szövőüzem", ro: "Fabrica de țesături Atakpamé", en: "Atakpamé Weaving Mill" },
    coords: [1.121, 7.561],
    description: {
      de: "Diese Weberei produziert traditionelle und moderne Stoffe. Sie ist bekannt für die Verarbeitung lokal angebauter Baumwolle.",
      hu: "A szövőüzem hagyományos és modern textíliákat gyárt. Ismert a helyileg termesztett gyapot feldolgozásáról.",
      ro: "Fabrica de țesături produce textile tradiționale și moderne. Este cunoscută pentru procesarea bumbacului cultivat local.",
      en: "This weaving mill produces traditional and modern fabrics. It is known for processing locally grown cotton.",
    },
    facts: {
      de: ["Verarbeitet regionale Baumwolle", "Fördert traditionelles Kunsthandwerk", "Beliefert den nationalen Modemarkt", "Schafft Arbeitsplätze in Plateaux"],
      hu: ["Regionális gyapotot dolgoz fel", "Népszerűsíti a hagyományos kézművességet", "Ellátja a nemzeti divatpiacot", "Munkahelyeket teremt Plateaux-ban"],
      ro: ["Procesează bumbac regional", "Promovează artizanatul tradițional", "Aprovizionează piața națională de modă", "Creează locuri de muncă în Plateaux"],
      en: ["Processes regional cotton", "Promotes traditional craftsmanship", "Supplies the national fashion market", "Creates jobs in Plateaux"],
    },
    imageHint: "handloom weaving workshop",
  },
  {
    id: "togo-bassar-metal-workshop-economic-v2",
    type: "industry",
    name: { de: "Bassar Metallwerkstatt", hu: "Bassar fémmegmunkáló műhely", ro: "Atelier de prelucrare a metalelor Bassar", en: "Bassar Metal Workshop" },
    coords: [0.783, 9.255],
    description: {
      de: "Dieser Betrieb stellt landwirtschaftliche Werkzeuge aus Metall her. Er basiert auf einer langjährigen Tradition der Metallverarbeitung.",
      hu: "Ez az üzem mezőgazdasági szerszámokat készít fémből. A fémfeldolgozás hosszú távú hagyományára épül.",
      ro: "Această unitate produce unelte agricole din metal. Se bazează pe o lungă tradiție a prelucrării metalelor.",
      en: "This facility produces metal agricultural tools. It is based on a long-standing tradition of metalworking.",
    },
    facts: {
      de: ["Fertigt robuste Werkzeuge", "Nutzt regionales Metallhandwerk", "Versorgt lokale Landwirte", "Erhält traditionelle Techniken"],
      hu: ["Robusztus szerszámokat gyárt", "Regionális fémművességet alkalmaz", "Ellátja a helyi gazdákat", "Megőrzi a hagyományos technikákat"],
      ro: ["Fabrică unelte robuste", "Utilizează artizanatul metalic regional", "Aprovizionează fermierii locali", "Păstrează tehnicile tradiționale"],
      en: ["Manufactures robust tools", "Utilizes regional metal craft", "Supplies local farmers", "Preserves traditional techniques"],
    },
    imageHint: "traditional blacksmith workshop",
  },
  {
    id: "togo-blitta-transport-hub-economic-v2",
    type: "industry",
    name: { de: "Blitta Logistikzentrum", hu: "Blitta logisztikai központ", ro: "Centru logistic Blitta", en: "Blitta Logistics Hub" },
    coords: [0.995, 8.181],
    description: {
      de: "Das Logistikzentrum koordiniert den Güterverkehr zwischen dem Norden und dem Süden Togos. Es dient als wichtiger Umladeplatz.",
      hu: "A logisztikai központ koordinálja az áruforgalmat Togo északi és déli része között. Fontos átrakodóhelyként szolgál.",
      ro: "Centrul logistic coordonează transportul de mărfuri între nordul și sudul statului Togo. Servește drept punct important de transbordare.",
      en: "The logistics hub coordinates freight transport between the north and south of Togo. It serves as an important transshipment point.",
    },
    facts: {
      de: ["Verknüpft Nord- und Südtogo", "Koordiniert den LKW-Verkehr", "Wichtig für den Binnenhandel", "Optimiert Lieferketten im Land"],
      hu: ["Összeköti Észak- és Dél-Togót", "Koordinálja a kamionforgalmat", "Fontos a belföldi kereskedelemben", "Optimalizálja az országos ellátási láncokat"],
      ro: ["Leagă nordul și sudul statului Togo", "Coordonează traficul de camioane", "Important pentru comerțul intern", "Optimizează lanțurile de aprovizionare"],
      en: ["Connects North and South Togo", "Coordinates truck traffic", "Important for domestic trade", "Optimizes supply chains nationwide"],
    },
    imageHint: "logistics trucking depot",
  },
  {
    id: "togo-vogan-grain-market-economic-v2",
    type: "city",
    name: { de: "Vogan Getreidemarkt", hu: "Vogan gabonapiac", ro: "Piața de cereale Vogan", en: "Vogan Grain Market" },
    coords: [1.512, 6.335],
    description: {
      de: "Dieser Markt ist ein bedeutendes Handelszentrum für lokal produziertes Getreide. Er zieht Händler aus der gesamten Region an.",
      hu: "Ez a piac jelentős kereskedelmi központ a helyben termelt gabonafélék számára. A régió egészéből vonzza a kereskedőket.",
      ro: "Această piață este un centru comercial important pentru cerealele produse local. Atrage comercianți din întreaga regiune.",
      en: "This market is a significant trading hub for locally produced grain. It attracts traders from across the region.",
    },
    facts: {
      de: ["Handel mit Mais und Hirse", "Zentraler Treffpunkt für Landwirte", "Großes Einzugsgebiet in der Region", "Wöchentliche Markttage"],
      hu: ["Kukorica és köles kereskedelme", "Központi találkozóhely a gazdáknak", "Nagy vonzáskörzet a régióban", "Heti piaci napok"],
      ro: ["Comerț cu porumb și mei", "Punct central de întâlnire pentru fermieri", "Arie mare de acoperire în regiune", "Zile de piață săptămânale"],
      en: ["Trade in maize and millet", "Central meeting point for farmers", "Large catchment area in the region", "Weekly market days"],
    },
    imageHint: "busy outdoor grain market",
  }
];
