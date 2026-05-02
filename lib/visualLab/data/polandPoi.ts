import type { POI } from "./poi";
import { poiExtraPolandCities } from "./poiExtraPolandCities";

export const polandCountry: POI = {
  id: "poland",
  type: "country",
  parent: "EU",
  coords: [19.1451, 51.9194],
  name: { de: "Polen", hu: "Lengyelország", ro: "Polonia", en: "Poland" },
  description: {
    de: "Polen ist ein Land in Mitteleuropa, bekannt für seine bewegte Geschichte, beeindruckende mittelalterliche Städte und eine vielfältige Landschaft von der Ostsee bis zur Tatra.",
    hu: "Lengyelország egy közép-európai ország, amely eseménydús történelméről, lenyűgöző középkori városairól és a Balti-tengerrefől a Tátráig terjedő változatos tájairól ismert.",
    ro: "Polonia este o țară din Europa Centrală, cunoscută pentru istoria sa zbuciumată, orașele medievale impresionante și un peisaj divers, de la Marea Baltică până la Munții Tatra.",
    en: "Poland is a country in Central Europe, known for its eventful history, impressive medieval cities, and a diverse landscape ranging from the Baltic Sea to the Tatra Mountains."
  },
  descriptionAdvanced: {
      de: "Polen ist ein Land in Mitteleuropa, das an die Ostsee und sieben weitere Staaten grenzt. Es hat eine über tausendjährige Geschichte mit bedeutenden kulturellen und wissenschaftlichen Beiträgen. Die Hauptstadt und größte Stadt ist Warschau, gefolgt von Großstädten wie Krakau und Breslau. Polen ist eine entwickelte Marktwirtschaft und Mitglied der EU sowie der NATO.",
      hu: "Lengyelország egy közép-európai ország, amely a Balti-tengerrel és hét másik országgal határos. Több mint ezeréves történelemmel rendelkezik, jelentős kulturális és tudományos eredményekkel. Fővárosa és legnagyobb városa Varsó, amelyet olyan városok követnek, mint Krakkó és Wrocław. Lengyelország fejlett piacgazdaság, az EU és a NATO tagja.",
      ro: "Polonia este o țară din Europa Centrală, mărginită de Marea Baltică și de alte șapte națiuni. Are o istorie de peste o mie de ani, cu contribuții culturale și științifice semnificative. Capitala și cel mai mare oraș este Varșovia, urmată de alte orașe majore precum Cracovia și Wrocław. Polonia este o economie de piață dezvoltată și membră a UE și NATO.",
      en: "Poland is a country in Central Europe, bordered by the Baltic Sea and seven other nations. It has a rich history spanning over a thousand years, with significant cultural and scientific contributions. The capital and largest city is Warsaw, followed by other major cities like Kraków and Wrocław. Poland is a developed market economy and a member of the EU and NATO.",
    },
    facts: {
      de: ["Die Hauptstadt und größte Stadt ist Warschau.", "Polen ist 2004 der Europäischen Union beigetreten.", "Es grenzt an Deutschland, Tschechien, die Slowakei, die Ukraine, Belarus, Litauen und Russland.", "Die Amtssprache ist Polnisch, eine westslawische Sprache.", "Die Weichsel ist der längste Fluss in Polen.", "Es ist der Geburtsort des Astronomen Nikolaus Kopernikus.", "Die Tatra bildet eine natürliche Grenze zur Slowakei.", "Polen beherbergt 17 UNESCO-Welterbestätten."],
      hu: ["Fővárosa és legnagyobb városa Varsó.", "2004-ben csatlakozott az Európai Unióhoz.", "Németországgal, Csehországgal, Szlovákiával, Ukrajnával, Fehéroroszországgal, Litvániával és Oroszországgal határos.", "Hivatalos nyelve a lengyel, amely nyugati szláv nyelv.", "A Visztula Lengyelország leghosszabb folyója.", "Itt született Nikolausz Kopernikusz csillagász.", "A Tátra természetes határt képez Szlovákiával.", "Lengyelország 17 UNESCO világörökségi helyszínnel rendelkezik."],
      ro: ["Capitala și cel mai mare oraș este Varșovia.", "A aderat la Uniunea Europeană în 2004.", "Se învecinează cu Germania, Cehia, Slovacia, Ucraina, Belarus, Lituania și Rusia.", "Limba oficială este poloneza, o limbă slavă de vest.", "Vistula este cel mai lung râu din Polonia.", "Este locul de naștere al astronomului Nicolaus Copernic.", "Munții Tatra formează o graniță naturală cu Slovacia.", "Găzduiește 17 situri ale Patrimoniului Mondial UNESCO."],
      en: ["Capital and largest city is Warsaw.", "Joined the European Union in 2004.", "Bordered by Germany, Czech Republic, Slovakia, Ukraine, Belarus, Lithuania, and Russia.", "Official language is Polish, a West Slavic language.", "The Vistula is the longest river in Poland.", "Birthplace of astronomer Nicolaus Copernicus.", "The Tatra Mountains form a natural border with Slovakia.", "Home to 17 UNESCO World Heritage Sites."],
    },
  image: "/geo-images/poland/poland-main.webp",
};

export const polandRegions: POI[] = [
  {
    id: "PL-MZ",
    type: "region",
    parent: "poland",
    coords: [21.01, 52.23],
    name: { de: "Masowien", hu: "Mazóvia", ro: "Mazovia", en: "Masovian" },
    description: {
      de: "Die Woiwodschaft Masowien ist die flächenmäßig größte und bevölkerungsreichste Provinz in Polen. Sie liegt im östlichen Zentrum des Landes und hat Warschau als Hauptstadt. Die Region zeichnet sich durch weite Ebenen, landwirtschaftliche Flächen und bedeutende Waldgebiete aus. Masowien ist das wirtschaftliche Herz Polens und trägt am stärksten zum nationalen BIP bei.",
      hu: "A Mazóviai vajdaság Lengyelország legnagyobb és legnépesebb tartománya. Az ország keleti-középső részén fekszik, fővárosa Varsó. A régiót kiterjedt síkságok, mezőgazdasági területek és jelentős erdőségek jellemzik. Mazóvia Lengyelország gazdasági központja, amely a legnagyobb mértékben járul hozzá a nemzeti GDP-hez.",
      ro: "Voievodatul Mazovia este cea mai mare și mai populată provincie din Polonia. Este situată în partea central-estică a țării, având Varșovia drept capitală. Regiunea se caracterizează prin câmpii întinse, terenuri agricole și zone forestiere semnificative. Mazovia este inima economică a Poloniei, contribuind cel mai mult la PIB-ul național.",
      en: "The Masovian Voivodeship is the largest and most populous province in Poland. It is situated in the east-central part of the country, with Warsaw as its capital. The region is characterized by expansive plains, agricultural lands, and significant forest areas. Masovia is the economic heart of Poland, contributing the most to the national GDP.",
    },
    facts: {
      de: ["Es ist die größte der 16 Woiwodschaften Polens.", "Warschau ist die Hauptstadt der Woiwodschaft und Polens.", "Masowien hat das höchste BIP aller polnischen Provinzen.", "Der Kampinos-Nationalpark befindet sich hier.", "Die Region gehört zur Mitteleuropäischen Tiefebene.", "Die Flüsse Weichsel und Bug fließen durch diese Woiwodschaft.", "Chopins Geburtsort Żelazowa Wola liegt in Masowien.", "Es ist ein bedeutendes Zentrum für Bildung und Forschung."],
      hu: ["Ez Lengyelország 16 vajdasága közül a legnagyobb.", "Varsó a vajdaság és egyben Lengyelország fővárosa.", "Mazóvia rendelkezik a legmagasabb GDP-vel a lengyel tartományok között.", "Itt található a Kampinos Nemzeti Park.", "A régió a Közép-európai-síkság része.", "A Visztula és a Nyugati-Bug folyók szelik át ezt a vajdaságot.", "Chopin szülőhelye, Żelazowa Wola Mazóviában található.", "Jelentős oktatási és kutatási központ."],
      ro: ["Este cel mai mare dintre cele 16 voievodate ale Poloniei.", "Varșovia este capitala voievodatului și a Poloniei.", "Mazovia are cel mai mare PIB dintre toate provinciile poloneze.", "Parcul Național Kampinos se află aici.", "Regiunea face parte din Câmpia Europei Centrale.", "Râurile Vistula și Bug curg prin acest voievodat.", "Locul de naștere al lui Chopin, Żelazowa Wola, este situat în Mazovia.", "Este un centru major pentru educație și cercetare."],
      en: ["It is the largest of Poland's 16 voivodeships.", "Warsaw is the capital of the voivodeship and Poland.", "Masovia has the highest GDP among all Polish provinces.", "The Kampinos National Park is located here.", "The region belongs to the Central European Plain.", "The Vistula and Bug rivers flow through this voivodeship.", "Chopin's birthplace, Żelazowa Wola, is situated in Masovia.", "It is a major center for higher education and research."],
    },
    descriptionAdvanced: {
      hu: "Mazóvia (Mazowsze) Lengyelország szíve, mind földrajzi, mind politikai értelemben, hiszen itt található a főváros, Varsó. A régiót a Visztula és a Narew folyók széles, homokos árterei és kiterjedt, ősi erdőségei, mint a Kampinosi-erdő határozzák meg. Történelmileg egy független, erős hercegség volt a középkorban, amely csak viszonylag későn, a 16. században olvadt be teljesen a Lengyel Királyságba. Ma a vajdaság kettős arcot mutat: Varsó lüktető, modern metropolisza éles kontrasztban áll a hagyományos, mezőgazdasági jellegű, apró falvakkal tűzdelt mazóviai síksággal. (Földrajz K6 — Közigazgatási régiók és fővárosok)"
    ,
      en: "Imagine an explorer crossing the vast, sun-drenched plains of central Poland, where the mighty Vistula River carves its path through the land. This is Masovia, the pulsating heart of the nation. Beyond the soaring skyscrapers of Warsaw, the region unfolds into a mosaic of golden wheat fields and ancient forests. Here, the legacy of the Piast dynasty whispers through the trees of the Kampinos National Park, a UNESCO Biosphere Reserve that guards the capital’s northern flank. It is a land of contrasts, where cutting-edge technology in the metropolitan hub meets the rustic charm of traditional manor houses and the birthplace of the legendary composer Frédéric Chopin. As the largest administrative region, Masovia serves as the primary engine for the country's growth, bridging the gap between historical heritage and a dynamic future. Geography K7 — regional landscapes and economic development."
    },
    factsAdvanced: {
      hu: ["Mazóvia Lengyelország legnagyobb és legnépesebb vajdasága, több mint 5 millió lakossal.", "A régió népzenéje és népviselete a lengyel nemzeti identitás alapkövévé vált a 19. században.", "A mazóviai síkság Lengyelország egyik legfontosabb gyümölcstermesztő vidéke, különösen az alma és a meggy terén."]
    ,
      en: [
        "The Masovian Voivodeship is the largest province in Poland, covering approximately 35,558 square kilometers.",
        "The region is home to over 5.4 million inhabitants, making it the most populous administrative division in the country.",
        "Kampinos National Park, located within the province, protects more than 385 square kilometers of forest and inland dunes.",
        "The Vistula River, Poland's longest waterway, flows through the province for nearly 300 kilometers.",
        "Masovia accounts for over 22% of Poland's total Gross Domestic Product (GDP), cementing its role as the nation's economic powerhouse."
      ]
    },
    image: "/geo-images/poland/mazowieckie.webp",
  },
  {
    id: "PL-MA",
    type: "region",
    parent: "poland",
    coords: [19.94, 50.06],
    name: { de: "Kleinpolen", hu: "Kis-Lengyelország", ro: "Polonia Mică", en: "Lesser Poland" },
    description: {
      de: "Kleinpolen ist eine historische Region und Woiwodschaft im Süden Polens, bekannt für ihr reiches Erbe. Die Hauptstadt Krakau ist eine der ältesten Städte Polens und verfügt über einen bemerkenswert gut erhaltenen mittelalterlichen Kern. Die Region bietet vielfältige Landschaften, vom Weichseltal bis zur majestätischen Tatra. Kleinpolen ist ein wichtiges Touristenziel mit zahlreichen Kulturdenkmälern.",
      hu: "Kis-Lengyelország egy történelmi régió és vajdaság Dél-Lengyelországban, amely gazdag örökségéről ismert. Fővárosa, Krakkó, Lengyelország egyik legrégebbi városa, figyelemre méltóan megőrzött középkori központtal. A régió változatos tájakat kínál, a Visztula völgyétől a fenséges Tátráig. Kis-Lengyelország jelentős turisztikai célpont, számos kulturális műemlékkel.",
      ro: "Polonia Mică este o regiune istorică și un voievodat din sudul Poloniei, cunoscută pentru moștenirea sa bogată. Capitala sa, Cracovia, este unul dintre cele mai vechi orașe din Polonia, având un centru medieval remarcabil conservat. Regiunea oferă peisaje diverse, de la valea râului Vistula până la maiestuoșii Munți Tatra. Polonia Mică este o destinație turistică majoră cu numeroase monumente culturale.",
      en: "Lesser Poland is a historical region and voivodeship in southern Poland, known for its rich heritage. Its capital, Kraków, is one of Poland's oldest cities and features a remarkably preserved medieval core. The region offers diverse landscapes, from the Vistula river valley to the majestic Tatra Mountains. Lesser Poland is a major tourist destination with numerous cultural monuments.",
    },
    facts: {
      de: ["Krakau ist die Hauptstadt und das historische Zentrum.", "Hier befindet sich das historische Salzbergwerk Wieliczka.", "Die Tatra, Polens höchstes Gebirge, liegt im Süden.", "Das ehemalige NS-Konzentrationslager Auschwitz-Birkenau liegt in dieser Region.", "Das Königsschloss Wawel war die Residenz polnischer Könige.", "Der Nationalpark Ojców ist der kleinste Nationalpark Polens.", "Die Region ist berühmt für ihre traditionelle Holzarchitektur.", "Sie zieht jährlich Millionen von Touristen an."],
      hu: ["Krakkó a főváros és a történelmi központ.", "Itt található a történelmi wieliczkai sóbánya.", "A Tátra, Lengyelország legmagasabb hegysége délen található.", "Az egykori Auschwitz-Birkenau náci koncentrációs tábor ebben a régióban van.", "A krakkói Wawel királyi vár a lengyel királyok rezidenciája volt.", "Az Ojców Nemzeti Park Lengyelország legkisebb nemzeti parkja.", "A régió híres hagyományos faépítészetéről.", "Évente turisták millióit vonzza."],
      ro: ["Cracovia este capitala și centrul istoric.", "Aici se află istorica Salină Wieliczka.", "Munții Tatra, cei mai înalți din Polonia, sunt situați în sud.", "Fostul lagăr de concentrare nazist Auschwitz-Birkenau se află în această regiune.", "Castelul Regal Wawel a fost reședința regilor polonezi.", "Parcul Național Ojców este cel mai mic parc național din Polonia.", "Regiunea este renumită pentru arhitectura sa tradițională din lemn.", "Atrage milioane de turiști anual."],
      en: ["Kraków is the capital and historical center.", "It is home to the historic Wieliczka Salt Mine.", "The Tatra Mountains, Poland's highest peaks, are in the south.", "The former Auschwitz-Birkenau Nazi concentration camp is in this region.", "The Wawel Royal Castle was the residence of Polish kings.", "Ojców National Park is the smallest national park in Poland.", "The region is famous for its traditional wooden architecture.", "It attracts millions of tourists annually."],
    },
    descriptionAdvanced: {
      hu: "Kis-Lengyelország (Małopolska) a lengyel történelem és kultúra egyik legősibb, hegyekkel és középkori várakkal tűzdelt régiója, melynek központja évszázadokon át Krakkó volt. A terület magába foglalja a fenséges Tátra csúcsait, a Pieninek szurdokait és a Krakkó-Częstochowai-fennsík mészkőszikláit, így a turizmus egyik legfontosabb célpontja az országban. A 14. és 16. század közötti aranykorban innen irányították a hatalmas lengyel-litván államot, így elképesztő gazdagságú reneszánsz műemlékek maradtak fenn. Emellett a régió a lengyel katolicizmus legerősebb bástyája, számos zarándokhellyel. (Történelem K6 — Középkori királyságok központjai)"
    ,
      en: "Stepping into Lesser Poland feels like walking through the living heartbeat of Polish history. From the ancient cobblestones of Kraków’s Main Market Square to the soaring granite peaks of the Tatra Mountains, this region is a tapestry of natural grandeur and cultural legacy. Explorers can descend into the crystalline depths of the Wieliczka Salt Mine or witness the solemn beauty of wooden architectural gems tucked into the Carpathian foothills. The Vistula River winds through the landscape, connecting royal castles with emerald valleys. Whether you are traversing the high-altitude trails of Zakopane or admiring the Renaissance splendor of Wawel Hill, the sheer density of UNESCO World Heritage sites here is staggering. It remains a land where tradition and legend breathe life into every stone and forest. Geography K7 — landscapes and mountain systems."
    },
    factsAdvanced: {
      hu: ["A régió hat UNESCO Világörökségi helyszínnel büszkélkedhet, ami a legtöbb a lengyel vajdaságok között.", "A Wieliczka és Bochnia sóbányák gazdagsága évszázadokon át biztosította Kis-Lengyelország gazdasági fölényét.", "Télen a vajdaság déli része, különösen Zakopane, az ország legforgalmasabb téli sportközpontjává válik."]
    ,
      en: [
        "Kraków’s Main Market Square dates back to the 13th century and measures roughly 40,000 square meters, making it one of Europe's largest medieval squares.",
        "The Wieliczka Salt Mine reaches a depth of 327 meters and features over 287 kilometers of underground galleries and chambers.",
        "Mount Rysy, the highest point in Poland, is located in the region and stands at an elevation of 2,499 meters above sea level.",
        "Lesser Poland is home to 5 UNESCO World Heritage sites, representing nearly one-third of all such sites in the entire country.",
        "The region spans approximately 15,108 square kilometers, accounting for nearly 5% of Poland's total land area."
      ]
    },
    image: "/geo-images/poland/malopolskie.webp",
  },
  {
    id: "PL-PM",
    type: "region",
    parent: "poland",
    coords: [18.64, 54.35],
    name: { de: "Pommern", hu: "Pomeránia", ro: "Pomerania", en: "Pomeranian" },
    description: {
      de: "Die Woiwodschaft Pommern liegt in Nordpolen an der Ostseeküste und ist eine bedeutende maritime Region. Ihre Hauptstadt Danzig bildet zusammen mit Gdingen und Zoppot die Metropolregion Dreistadt. Die Region ist bekannt für ihre Sandstrände, malerischen Seen und dichten Kiefernwälder. Pommern lebt heute von Schiffbau, Tourismus und IT-Dienstleistungen.",
      hu: "A Pomerániai vajdaság Észak-Lengyelországban, a Balti-tenger partján fekszik, és jelentős tengeri régió. Fővárosa Gdańsk, amely Gdyniával és Sopottal együtt alkotja a Hármasváros metropoliszt. A régió homokos strandjairól, festői tavairól és sűrű fenyőerdőiről ismert. Pomeránia ma a hajóépítésből, a turizmusból és az IT-szolgáltatásokból él.",
      ro: "Voievodatul Pomerania este situat în nordul Poloniei, pe coasta Mării Baltice, fiind o regiune maritimă importantă. Capitala sa este Gdańsk, care formează zona metropolitană Tricity alături de Gdynia și Sopot. Regiunea este cunoscută pentru plajele sale cu nisip, lacurile pitorești și pădurile dese de pini. Pomerania prosperă astăzi din construcțiile navale, turism și servicii IT.",
      en: "The Pomeranian Voivodeship is located in northern Poland along the Baltic Sea coast, making it a prominent maritime region. Its capital is Gdańsk, which forms the Tricity metropolitan area alongside Gdynia and Sopot. The region is famous for its sandy beaches, picturesque lakes, and dense pine forests. Today, Pomerania thrives on shipbuilding, tourism, and IT services.",
    },
    facts: {
      de: ["Danzig ist die Hauptstadt und größte Stadt der Woiwodschaft.", "Die Dreistadt (Trójmiasto) besteht aus Danzig, Gdingen und Zoppot.", "Die Region hat eine lange Küstenlinie an der Ostsee.", "Der Slowinzische Nationalpark ist berühmt für seine Wanderdünen.", "Kaschubien, eine kulturelle Region mit eigener Sprache, ist Teil von Pommern.", "Die Marienburg (Malbork), die größte Backsteinburg der Welt, befindet sich hier.", "Es ist ein wichtiges Zentrum für den Bernsteinhandel.", "Die Solidarność-Bewegung nahm in Danzig ihren Anfang."],
      hu: ["Gdańsk a vajdaság fővárosa és legnagyobb városa.", "A Hármasváros (Trójmiasto) Gdańskból, Gdyniából és Sopotból áll.", "A régió hosszú tengerparttal rendelkezik a Balti-tenger mentén.", "A Słowiński Nemzeti Park mozgó homokdűnéiről híres.", "Kaszúbia, a saját nyelvvel rendelkező kulturális régió Pomeránia része.", "Itt található a malborki vár, a világ legnagyobb téglaépítésű vára.", "A borostyánkereskedelem fontos központja.", "A Szolidaritás mozgalom Gdańskban indult útjára."],
      ro: ["Gdańsk este capitala și cel mai mare oraș al voievodatului.", "Zona Tricity (Trójmiasto) este formată din Gdańsk, Gdynia și Sopot.", "Regiunea are o coastă lungă la Marea Baltică.", "Parcul Național Słowiński este faimos pentru dunele sale de nisip mișcătoare.", "Cașubia, o regiune culturală cu propria limbă, face parte din Pomerania.", "Castelul Malbork, cel mai mare castel de cărămidă din lume, se află aici.", "Este un centru important pentru comerțul cu chihlimbar.", "Mișcarea Solidaritatea a început în Gdańsk."],
      en: ["Gdańsk is the capital and largest city of the voivodeship.", "The Tricity (Trójmiasto) consists of Gdańsk, Gdynia, and Sopot.", "The region has a long coastline along the Baltic Sea.", "Słowiński National Park is famous for its moving sand dunes.", "Kashubia, a cultural region with its own language, is part of Pomerania.", "Malbork Castle, the largest brick castle in the world, is located here.", "It is a major center for the amber trade.", "The Solidarity movement began in Gdańsk."],
    },
    descriptionAdvanced: {
      hu: "Pomeránia (Pomorze) Lengyelország legészakibb, Balti-tenger partján fekvő vajdasága, amelynek élete évezredek óta a tengerhez és a kereskedelemhez kötődik. A régió lüktető szíve a Hármasváros (Trójmiasto) agglomerációja, amely Gdańsk történelmi kikötőjét, Sopot elegáns fürdővárosát és Gdynia modern hajógyárait foglalja magába. Pomeránia belső területeit a Kasub-tóvidék sűrű erdőségei, tiszta vizű tavai és a kasub kisebbség egyedülálló nyelve és kultúrája teszik különlegessé. Történelme során folyamatosan küzdöttek érte a lengyel királyok, a Német Lovagrend és a porosz uralkodók. (Földrajz K7 — Tengerparti régiók és kikötővárosok)"
    ,
      en: "Stepping onto the amber-flecked shores of the Pomeranian Voivodeship feels like uncovering a hidden maritime treasure. Nestled in northern Poland, this coastal jewel is anchored by the historic Tricity metropolitan area, where the medieval charm of Gdańsk meets the modernist spirit of Gdynia and the spa elegance of Sopot. Beyond the urban bustle, the Słowiński National Park reveals a desert-like landscape of shifting sand dunes that migrate with the wind, while the Kashubian Lake District offers a serene labyrinth of pine-scented waters. Historically, the region served as the gateway to the Baltic, shaping Poland's identity through shipbuilding and international trade. Today, it remains a vital hub for IT and renewable energy, blending its seafaring heritage with cutting-edge innovation. Whether you are exploring the Teutonic ruins of Malbork or tracking the unique Kashubian culture, the Pomeranian region is a testament to nature's resilience and human ingenuity. Geography K7 — coastal landscapes and human impact."
    },
    factsAdvanced: {
      hu: ["A vajdaság területén található a Hel-félsziget, egy 35 km hosszú, rendkívül keskeny homokpad a Balti-tengerben.", "Gdańsk évszázadokon át a világ legnagyobb borostyánkereskedelmi központja volt.", "A régióban élő kasubok saját, elismert regionális nyelvet beszélnek, amely jelentősen eltér a standard lengyeltől."]
    ,
      en: [
        "The Malbork Castle, located within the voivodeship, is the world's largest castle by land area, spanning 143,591 square meters.",
        "The Hel Peninsula is a unique, 35-kilometer-long sandbar that separates the Bay of Puck from the open Baltic Sea.",
        "The shifting sand dunes in Słowiński National Park reach heights of over 30 meters and move at a rate of 3 to 10 meters per year.",
        "The Tricity metropolitan area (Gdańsk, Gdynia, and Sopot) serves as a major urban hub with a combined population exceeding 750,000 people.",
        "Pomerania's coastline stretches for approximately 316 kilometers, offering some of the finest white-sand beaches in Northern Europe."
      ]
    },
    image: "/geo-images/poland/pomorskie.webp",
  },
  {
    id: "PL-DS",
    type: "region",
    parent: "poland",
    coords: [17.03, 51.10],
    name: { de: "Niederschlesien", hu: "Alsó-Szilézia", ro: "Silezia Inferioară", en: "Lower Silesian" },
    description: {
      de: "Niederschlesien ist eine Region im Südwesten Polens, die an Deutschland und Tschechien grenzt. Die Hauptstadt Breslau ist ein lebendiges akademisches und kulturelles Zentrum. Die Geografie ist sehr vielfältig und umfasst die Schlesische Tiefebene sowie das Sudetengebirge. Niederschlesien ist reich an Bodenschätzen und besitzt eine starke industrielle Basis.",
      hu: "Alsó-Szilézia egy délnyugat-lengyelországi régió, amely Németországgal és Csehországgal határos. Fővárosa, Wrocław, egy nyüzsgő tudományos és kulturális központ. Földrajza rendkívül változatos, a Sziléziai-alföldtől a Szudéták hegységéig terjed. Alsó-Szilézia gazdag ásványkincsekben, és erős ipari bázissal rendelkezik.",
      ro: "Silezia Inferioară este o regiune din sud-vestul Poloniei, la granița cu Germania și Cehia. Capitala sa, Wrocław, este un centru academic și cultural vibrant. Geografia este foarte diversă, incluzând Câmpia Sileziei și lanțul muntos Sudeți. Silezia Inferioară este bogată în resurse minerale și are o bază industrială puternică.",
      en: "Lower Silesia is a region in southwestern Poland, bordering Germany and the Czech Republic. Its capital, Wrocław, is a vibrant academic and cultural center. The geography is highly diverse, featuring the Silesian Lowlands and the Sudetes mountain range. Lower Silesia is rich in mineral resources and has a strong industrial base.",
    },
    facts: {
      de: ["Breslau ist die Hauptstadt und das Wirtschaftszentrum.", "Grenzt an Deutschland und die Tschechische Republik.", "Umfasst das Sudetengebirge, einschließlich des Riesengebirges.", "Hat die größte Anzahl an Schlössern in Polen.", "Die Jahrhunderthalle in Breslau ist UNESCO-Welterbe.", "Bekannt für Kurorte wie Polanica-Zdrój.", "Reich an natürlichen Ressourcen wie Kupfer und Silber.", "Historisch zwischen Polen, Böhmen und Preußen umstritten."],
      hu: ["Wrocław a főváros és a gazdasági központ.", "Németországgal és Csehországgal határos.", "Itt találhatók a Szudéták, beleértve az Óriás-hegységet is.", "Itt van a legtöbb kastély és palota Lengyelországban.", "A wrocławi Centenáriumi Csarnok UNESCO világörökség.", "Olyan fürdővárosokról ismert, mint Polanica-Zdrój.", "Gazdag természeti erőforrásokban, például rézben és ezüstben.", "Történelmileg Lengyelország, Csehország és Poroszország vitatta."],
      ro: ["Wrocław este capitala și centrul economic.", "Se învecinează cu Germania și Republica Cehă.", "Include munții Sudeți, inclusiv lanțul Karkonosze.", "Are cel mai mare număr de castele și palate din Polonia.", "Sala Centenarului din Wrocław este în Patrimoniul UNESCO.", "Cunoscută pentru orașele balneare precum Polanica-Zdrój.", "Bogată în resurse naturale precum cuprul și argintul.", "Disputată istoric între Polonia, Boemia și Prusia."],
      en: ["Wrocław is the capital and economic hub.", "Borders Germany and the Czech Republic.", "Features the Sudetes mountains, including the Karkonosze range.", "Has the largest number of castles and palaces in Poland.", "The Centennial Hall in Wrocław is a UNESCO World Heritage site.", "Known for spa towns like Polanica-Zdrój.", "Rich in natural resources like copper and silver.", "Historically contested between Poland, Bohemia, and Prussia."],
    },
    descriptionAdvanced: {
      hu: "Alsó-Szilézia (Dolny Śląsk) az ország egyik leggazdagabb és leginkább iparosodott régiója, amelyet délről a Szudéták festői hegyvonulatai határolnak, központja pedig az Odera menti Wrocław. A régió építészete és kultúrája a lengyel, a cseh, az osztrák és a német befolyások egyedülálló keveréke, ami a gazdagon díszített barokk palotákban és gótikus templomokban is megmutatkozik. Alsó-Szilézia az ásványkincsek, különösen a réz és a kőszén révén vált a 19. századi európai ipari forradalom egyik kulcsszereplőjévé. A történelmi viharok során többször is gazdát cserélt, a II. világháború utáni határáthelyezésekkel került ismét lengyel fennhatóság alá. (Történelem K8 — Határváltozások és ipari forradalom)"
    ,
      en: "Stepping into Lower Silesia feels like traversing a crossroads of European history and geological wonder. This southwestern Polish gem is anchored by Wrocław, a city of a hundred bridges where gnomes peek from every corner. Beyond the urban pulse, the Sudetes mountains rise sharply, crowned by the windswept peak of Śnieżka, where extreme weather patterns mimic Arctic conditions. The landscape is a mosaic of volcanic remnants and deep river valleys that have nurtured civilizations for millennia. Beneath the surface, the region hides secrets ranging from medieval gold mines to enigmatic tunnels from World War II. Whether you are exploring the towering turrets of Książ Castle or the timber-framed Churches of Peace, every mile tells a tale of resilience and transformation. Geography K7 — mountain formations and river systems."
    },
    factsAdvanced: {
      hu: ["A vajdaság területén több mint 100 történelmi kastély és palota található, köztük a híres Książ kastély.", "Wrocławban épült fel a világ első modern, vasbetonból készült hatalmas csarnoka, a Centenáriumi Csarnok.", "A Karkonosze hegység lábánál számos híres termálvizes gyógyfürdő (pl. Cieplice) működik."]
    ,
      en: [
        "The Śnieżka peak stands at 1,603 meters above sea level, making it the highest point in the Sudetes and the entire Lower Silesian region.",
        "The Churches of Peace in Jawor and Świdnica are the largest timber-framed religious buildings in Europe, constructed in the 17th century without using any nails.",
        "Lower Silesia is home to the KGHM copper mine, one of the world's largest producers of silver, with shafts operating at depths exceeding 1,200 meters.",
        "Książ Castle is the third-largest castle in Poland, featuring over 400 rooms and a massive underground tunnel system built during the Nazi occupation.",
        "Wrocław, the regional capital, is situated on 12 islands connected by more than 100 bridges, earning it the nickname Venice of the North."
      ]
    },
    image: "/geo-images/poland/dolnoslaskie.webp",
  },
  {
    id: "PL-WP",
    type: "region",
    parent: "poland",
    coords: [16.92, 52.40],
    name: { de: "Großpolen", hu: "Nagy-Lengyelország", ro: "Polonia Mare", en: "Greater Poland" },
    description: {
      de: "Großpolen, im westlichen Zentrum des Landes gelegen, gilt als die Wiege des polnischen Staates. Die Hauptstadt Posen ist eine von Polens ältesten und wohlhabendsten Städten. Die Region ist geprägt von landwirtschaftlichen Ebenen, zahlreichen Seen und dichten Wäldern. Großpolen hat eine hoch entwickelte Wirtschaft mit starkem Fokus auf Handel und Produktion.",
      hu: "Nagy-Lengyelország az ország nyugati középső részén fekszik, és a lengyel állam bölcsőjének tekintik. Fővárosa, Poznań, Lengyelország egyik legrégebbi és leggazdagabb városa. A régiót mezőgazdasági síkságok, számos tó és sűrű erdő jellemzi. Nagy-Lengyelország fejlett gazdasággal rendelkezik, erős kereskedelmi és termelési fókusszal.",
      ro: "Polonia Mare, situată în partea central-vestică a țării, este considerată leagănul statului polonez. Capitala sa, Poznań, este una dintre cele mai vechi și prospere orașe ale Poloniei. Regiunea se caracterizează prin câmpii agricole, numeroase lacuri și păduri dese. Polonia Mare are o economie foarte dezvoltată, cu un accent puternic pe comerț și producție.",
      en: "Greater Poland, situated in the west-central part of the country, is considered the cradle of the Polish state. Its capital, Poznań, is one of Poland's oldest and most prosperous cities. The region is characterized by a mix of agricultural plains, numerous lakes, and dense forests. Greater Poland has a highly developed economy with a strong focus on commerce and manufacturing.",
    },
    facts: {
      de: ["Posen ist die Hauptstadt und größte Stadt.", "Gnesen war im 10. Jahrhundert die erste Hauptstadt Polens.", "Gilt oft als die Wiege des polnischen Staates.", "Es ist die flächenmäßig zweitgrößte Woiwodschaft.", "Hat einen starken Agrarsektor und eine große Lebensmittelindustrie.", "Die Internationale Messe Posen ist die größte in Polen.", "Der Großpolnische Nationalpark schützt postglaziale Landschaften.", "Spielte eine entscheidende Rolle beim Großpolnischen Aufstand."],
      hu: ["Poznań a főváros és a legnagyobb város.", "Gniezno volt Lengyelország első fővárosa a 10. században.", "Gyakran a lengyel állam bölcsőjeként emlegetik.", "Területét tekintve a második legnagyobb vajdaság.", "Erős mezőgazdasági szektorral és élelmiszeriparral rendelkezik.", "A Poznańi Nemzetközi Vásár a legnagyobb Lengyelországban.", "A Nagy-Lengyelországi Nemzeti Park a jégkorszak utáni tájat védi.", "Döntő szerepet játszott a nagy-lengyelországi felkelésben."],
      ro: ["Poznań este capitala și cel mai mare oraș.", "Gniezno a fost prima capitală a Poloniei în secolul al X-lea.", "Adesea menționată ca leagănul statului polonez.", "Este al doilea voievodat ca mărime ca suprafață.", "Are un sector agricol și o industrie alimentară puternice.", "Târgul Internațional Poznań este cel mai mare din Polonia.", "Parcul Național Wielkopolska protejează peisajele post-glaciare.", "A jucat un rol crucial în Revolta din Polonia Mare."],
      en: ["Poznań is the capital and largest city.", "Gniezno was the first capital of Poland in the 10th century.", "Often referred to as the cradle of the Polish state.", "It is the second-largest voivodeship by area.", "Has a strong agricultural sector and food industry.", "Poznań International Fair is the largest in Poland.", "Wielkopolska National Park protects post-glacial landscapes.", "Played a crucial role in the Greater Poland Uprising."],
    },
    descriptionAdvanced: {
      hu: "Nagy-Lengyelország (Wielkopolska) a lengyel államiság igazi, történelmi bölcsője, ahol a 10. században a Piast-dinasztia megalapította az első lengyel királyságot. Poznań és Gniezno városai az ország legkorábbi fővárosai voltak, és itt történt meg a nemzet 966-os megkeresztelkedése is. A vajdaság ma Lengyelország egyik legfejlettebb, leginkább polgárosodott mezőgazdasági és ipari régiója, amelyet kiterjedt síkságok, jégkorszaki tóvidékek és sűrű erdőségek, mint a Wielkopolski Nemzeti Park jellemeznek. Lakóit a történelem során mindig a pragmatizmus, a rend iránti tisztelet és a kiváló gazdasági érzék jellemezte. (Történelem K5 — A korai államalapítások Európában)"
    ,
      en: "Stepping into Greater Poland feels like opening the first chapter of a grand national epic. As I traverse the vast agricultural plains of the west-central heartland, I am walking through the very \"cradle\" where the Polish state was born over a millennium ago. From the bustling trade hubs of Poznań to the sacred sites of Gniezno, the legacy of the Piast dynasty whispers from every stone. Beyond the historical monuments, the landscape shifts into a serene tapestry of glacial lakes and ancient oak forests in the Wielkopolska National Park. It is a region where medieval heritage meets a modern, thriving economy, blending the industrial spirit of the city with the timeless rhythm of the Warta River. This area offers a perfect case study for understanding how cultural roots and natural resources shape a nation's identity. History K8 — the formation of the Polish state."
    },
    factsAdvanced: {
      hu: ["Gniezno katedrálisa Lengyelország első érseki székhelye, ahol az első lengyel királyokat koronázták.", "A régióban zajlott az 1918-as győztes nagy-lengyelországi felkelés, amellyel a terület elszakadt a Német Birodalomtól.", "A Poznańi Nemzetközi Vásár Kelet-Közép-Európa egyik legnagyobb és legrégebbi kereskedelmi kiállítási központja."]
    ,
      en: [
        "Gniezno, located in the region, served as the first historical capital of Poland and the site of the coronation of five Polish kings.",
        "The region covers an area of approximately 29,826 square kilometers, making it the second largest province in Poland by land area.",
        "The Wielkopolska National Park protects over 7,500 hectares of diverse ecosystems, including 18 strictly protected areas.",
        "Poznań International Fair, established in 1921, is the largest trade fair organizer in Poland, hosting over 80 events annually.",
        "The region is home to more than 800 lakes, which are mostly of glacial origin and scattered across the northern landscape."
      ]
    },
    image: "/geo-images/poland/wielkopolskie.webp",
  },
  {
    id: "PL-SL",
    type: "region",
    parent: "poland",
    coords: [19.02, 50.26],
    name: { de: "Schlesien", hu: "Szilézia", ro: "Silezia", en: "Silesian" },
    description: {
      de: "Die Woiwodschaft Schlesien in Südpolen ist die am dichtesten besiedelte und am stärksten industrialisierte Region des Landes. Ihre Hauptstadt Kattowitz ist das Zentrum eines massiven städtischen Ballungsraums. Historisch von Kohlebergbau geprägt, ist die Region erfolgreich auf IT und moderne Fertigung umgestiegen. Der südliche Teil Schlesiens bietet malerische Berge, die Wintersportler anziehen.",
      hu: "A Sziléziai vajdaság Dél-Lengyelországban az ország legsűrűbben lakott és legiparosodottabb régiója. Fővárosa, Katowice egy hatalmas városi agglomeráció központja. A történelmileg szénbányászatra épülő régió sikeresen átállt az IT-ra és a modern gyártásra. Szilézia déli része festői hegyeket kínál, amelyek vonzzák a téli sportok szerelmeseit.",
      ro: "Voievodatul Silezia din sudul Poloniei este cea mai dens populată și industrializată regiune din țară. Capitala sa, Katowice, este centrul unei aglomerări urbane masive. Istoric condusă de mineritul de cărbune, regiunea a trecut cu succes la servicii IT și producție modernă. Partea de sud a Sileziei oferă munți pitorești, atrăgând pasionații de sporturi de iarnă.",
      en: "The Silesian Voivodeship in southern Poland is the most densely populated and industrialized region in the country. Its capital, Katowice, is the center of a massive urban agglomeration. Historically driven by coal mining, the region has successfully transitioned into IT and modern manufacturing. The southern part of Silesia offers scenic mountains, attracting winter sports enthusiasts.",
    },
    facts: {
      de: ["Kattowitz ist die Hauptstadt und das Zentrum der Metropolregion.", "Am dichtesten besiedelte Woiwodschaft in Polen.", "Historisch berühmt für Kohlebergbau und Stahlwerke.", "Die Schlesischen Beskiden bieten hervorragende Skimöglichkeiten.", "Das Kloster Jasna Góra in Tschenstochau ist ein wichtiger Pilgerort.", "Schlesien hat eine ausgeprägte regionale Identität und einen eigenen Dialekt.", "Erfolgreicher Übergang zu einer dienstleistungsorientierten Wirtschaft.", "Das Guido-Bergwerk in Zabrze ist eine beliebte Attraktion."],
      hu: ["Katowice a főváros és a nagyvárosi terület központja.", "Lengyelország legsűrűbben lakott vajdasága.", "Történelmileg híres a szénbányászatról és az acélművekről.", "A Sziléziai-Beszkidek nagyszerű síelési lehetőségeket kínálnak.", "A częstochowai Jasna Góra kolostor jelentős zarándokhely.", "Szilézia különálló regionális identitással és dialektussal rendelkezik.", "Sikeresen átállt a szolgáltatásorientált gazdaságra.", "A zabrzei Guido bánya népszerű látványosság."],
      ro: ["Katowice este capitala și centrul zonei metropolitane.", "Cel mai dens populat voievodat din Polonia.", "Istoric renumită pentru exploatarea cărbunelui și oțelării.", "Beskizii Sileziei oferă oportunități excelente de schi.", "Mănăstirea Jasna Góra din Częstochowa este un loc major de pelerinaj.", "Silezia are o identitate regională și un dialect distincte.", "A trecut cu succes la o economie orientată spre servicii.", "Mina Guido din Zabrze este o atracție populară."],
      en: ["Katowice is the capital and center of the metropolitan area.", "Most densely populated voivodeship in Poland.", "Historically famous for coal mining and steelworks.", "The Silesian Beskids provide great skiing opportunities.", "Jasna Góra Monastery in Częstochowa is a major pilgrimage site.", "Silesia has a distinct regional identity and dialect.", "Successfully transitioned to a service-oriented economy.", "The Guido Mine in Zabrze is a popular attraction."],
    },
    descriptionAdvanced: {
      hu: "Szilézia vajdaság (Śląskie) Lengyelország legkisebb, ugyanakkor legsűrűbben lakott és leginkább iparosodott területe, amelynek szíve a felső-sziléziai szénmedence agglomerációja. A tájat évszázadokon át a füstös gyárkémények, a feketeszén-bányák acéltornyai és a munkáskolóniák (familok) vöröstéglás épületei uralták. Mára a régió hatalmas posztindusztriális átalakuláson ment keresztül: az egykori bányákat és kohókat kulturális központokká, modern IT-parkokká és múzeumokká alakították, mint például a Sziléziai Múzeum Katowicében. A vajdaság déli részén emelkedő Beszkidek erdős hegyei éles, zöld kontrasztot képeznek az északi iparvidékkel. (Földrajz K8 — Urbanizáció és a nehézipar átalakulása)"
    ,
      en: "Stepping into the Silesian Voivodeship feels like witnessing a grand historical metamorphosis. Once the soot-stained heart of Central Europe's coal industry, this southern Polish region has scrubbed its skyline clean, replacing towering mine shafts with futuristic glass towers and vibrant cultural zones. In Katowice, the Nikiszowiec district tells a story of communal heritage with its iconic red-brick architecture, while the Spodek arena represents a leap into the space-age future. Beyond the urban sprawl of the Upper Silesian Industrial Region, the landscape softens into the dramatic peaks of the Beskid Mountains, where hikers and skiers find solace. This region perfectly illustrates the delicate balance between heavy human footprint and resilient natural beauty, making it a living laboratory for urban planning and ecological recovery. Geography K7 — industrial geography and sustainable development."
    },
    factsAdvanced: {
      hu: ["Az itt élő felső-sziléziaiak jelentős része a saját sziléziai dialektusát, a 'godkát' beszéli, amely a lengyel, a cseh és a német nyelv keveréke.", "Katowice agglomerációja mintegy 14, szinte teljesen egybeépült városból áll.", "A régióban található a Błędówi-sivatag, Közép-Európa legnagyobb, emberi beavatkozás (bányászat) nyomán kialakult homoksivataga."]
    ,
      en: [
        "The Silesian Voivodeship is the most densely populated region in Poland, with approximately 360 inhabitants per square kilometer.",
        "The region encompasses an area of 12,333 square kilometers, bordering both the Czech Republic and Slovakia.",
        "Skrzyczne, the highest peak in the Silesian Beskids, stands at an elevation of 1,257 meters above sea level.",
        "The historic Silver Mine in Tarnowskie Góry features a vast underground labyrinth with more than 150 kilometers of tunnels.",
        "The Upper Silesian Metropolitan Area consists of 14 adjacent cities forming an urban core with over 2 million residents."
      ]
    },
    image: "/geo-images/poland/slaskie.webp",
  },
  {
    id: "PL-LD",
    type: "region",
    parent: "poland",
    coords: [19.45, 51.75],
    name: { de: "Lodz", hu: "Łódź", ro: "Łódź", en: "Łódź" },
    description: {
      de: "Die Woiwodschaft Łódź liegt zentral in Polen und fungiert als wichtiger Logistik- und Verkehrsknotenpunkt. Die Hauptstadt Łódź war während der industriellen Revolution eines der größten Textilzentren Europas. Heute ist die Stadt für ihre Revitalisierungsprojekte bekannt, die alte Backsteinfabriken in Kulturräume verwandeln. Łódź ist auch berühmt für seine Filmhochschule, die viele weltbekannte Regisseure hervorgebracht hat.",
      hu: "A Łódźi vajdaság Lengyelország központjában fekszik, és fontos logisztikai és közlekedési csomópontként működik. Fővárosa, Łódź az ipari forradalom idején Európa egyik legnagyobb textilipari központja volt. Ma a város revitalizációs projektjeiről ismert, amelyek a régi téglagyárakat kulturális terekké alakítják. Łódź híres a filmművészeti főiskolájáról is, amely számos világhírű rendezőt adott.",
      ro: "Voievodatul Łódź este situat central în Polonia, acționând ca un centru logistic și de transport major. Capitala sa, Łódź, a fost unul dintre cele mai mari centre de producție textilă din Europa. Astăzi, orașul este cunoscut pentru proiectele sale de revitalizare, transformând vechile fabrici din cărămidă în spații culturale. Łódź este, de asemenea, renumită pentru școala sa de film care a produs regizori celebri.",
      en: "The Łódź Voivodeship is centrally located in Poland, acting as a major logistical and transport hub. Its capital, Łódź, was once one of Europe's largest textile manufacturing centers. Today, the city is known for its revitalization projects, transforming old red-brick factories into cultural spaces. Łódź is also renowned for its film school, which has produced internationally acclaimed directors.",
    },
    facts: {
      de: ["Łódź ist die Hauptstadt und das historische Zentrum der Textilindustrie.", "Liegt genau im geografischen Zentrum Polens.", "Die Piotrkowska-Straße ist eine der längsten Einkaufsstraßen Europas.", "Ein wichtiger Knotenpunkt für Logistik und Straßentransport.", "Die Nationale Filmhochschule in Łódź ist weltweit angesehen.", "Manufaktura ist ein riesiges Einkaufszentrum in einer ehemaligen Fabrik.", "Die Landschaft ist überwiegend flach und begünstigt die Landwirtschaft.", "Hohe Konzentration an restaurierter Industriearchitektur des 19. Jahrhunderts."],
      hu: ["Łódź a főváros és a textilipar történelmi központja.", "Pontosan Lengyelország földrajzi középpontjában található.", "A Piotrkowska utca Európa egyik leghosszabb bevásárlóutcája.", "Jelentős logisztikai és közúti szállítási csomópont.", "A łódźi Nemzeti Filmművészeti Főiskola világszerte elismert.", "A Manufaktura egy hatalmas bevásárlóközpont egy volt gyárban.", "A táj túlnyomórészt sík, ami kedvez a mezőgazdaságnak.", "Magas a felújított 19. századi ipari építészet koncentrációja."],
      ro: ["Łódź este capitala și centrul istoric al industriei textile.", "Situat exact în centrul geografic al Poloniei.", "Strada Piotrkowska este una dintre cele mai lungi străzi comerciale din Europa.", "Un centru major pentru logistică și transport rutier.", "Școala Națională de Film din Łódź este prestigioasă la nivel global.", "Manufaktura este un centru comercial masiv într-o fostă fabrică.", "Peisajul este predominant plat, susținând agricultura.", "Concentrație mare de arhitectură industrială restaurată din secolul al XIX-lea."],
      en: ["Łódź is the capital city and historical center of the textile industry.", "Located exactly in the geographical center of Poland.", "Piotrkowska Street is one of the longest commercial streets in Europe.", "A major hub for logistics and road transport.", "The National Film School in Łódź is prestigious globally.", "Manufaktura is a massive shopping center in a former factory.", "The landscape is predominantly flat, supporting agriculture.", "High concentration of restored 19th-century industrial architecture."],
    },
    descriptionAdvanced: {
      hu: "Łódź vajdaság (Łódzkie) az ország mértani középpontjában fekszik, és történelme elválaszthatatlanul összefonódott a 19. századi textilipari fellendüléssel. Fővárosa, Łódź, egy apró mezővárosból néhány évtized alatt Európa egyik legnagyobb pamutgyártó központjává, a 'lengyel Manchesterré' nőtte ki magát. Bár az iparág a 20. század végén összeomlott, a régió ma a logisztika, a dizájn és a filmművészet központjaként születik újjá, miközben hatalmas vöröstéglás gyárépületeit modern bevásárló- és kulturális központokká (pl. Manufaktura) alakítják. A vajdaság déli részén található a világ egyik legnagyobb külszíni lignitbányája és a hozzá kapcsolódó Bełchatówi erőmű. (Történelem K7 — Ipari forradalom és posztindusztriális korszak)"
    ,
      en: "As I step into Łódź, the rhythmic clatter of 19th-century looms seems to echo through the towering red-brick walls of the old factories. Once the beating heart of Europe's textile industry, this city is a masterclass in urban rebirth. Walking down Piotrkowska Street—one of the longest commercial strips in Europe—you feel the pulse of a creative revolution. What were once smoky industrial complexes are now vibrant cultural hubs like Manufaktura, blending history with modern art and gastronomy. Beyond its bricks, Łódź hides a cinematic soul; its prestigious film school nurtured legends like Roman Polanski and Andrzej Wajda, earning it the nickname 'Holly-Łódź.' It is a city that doesn't just preserve its history but reimagines it with every mural and repurposed warehouse. History K8 — industrial revolution and urban transformation."
    },
    factsAdvanced: {
      hu: ["A Łódźi Filmiskola a világ egyik legrangosabbja, olyan Oscar-díjas rendezők indultak innen, mint Andrzej Wajda és Roman Polański.", "A Piotrkowska utca Łódźban Európa egyik leghosszabb, több mint 4 kilométeres egyenes bevásárlóutcája.", "A vajdaság területe az utolsó jégkorszakok határán fekszik, így északi része sík, míg délen már dombvidéki formák jelennek meg."]
    ,
      en: [
        "Piotrkowska Street is approximately 4.2 kilometers long, making it one of the longest commercial streets in Europe.",
        "The Manufaktura complex covers 27 hectares and was originally the textile factory of industrialist Izrael Poznański.",
        "Łódź was home to the world’s first museum of modern art, founded in 1930.",
        "The city’s Jewish Cemetery is one of the largest in Europe, spanning about 40 hectares with over 180,000 graves.",
        "During its 19th-century peak, the city's population exploded from just 800 inhabitants in 1820 to over 300,000 by 1900."
      ]
    },
    image: "/geo-images/poland/lodzkie.webp",
  },
  {
    id: "PL-LU",
    type: "region",
    parent: "poland",
    coords: [22.56, 51.24],
    name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" },
    description: {
      de: "Die Woiwodschaft Lublin liegt in Ostpolen und grenzt an die Ukraine und Belarus. Die Hauptstadt Lublin ist eine historische Stadt mit einer gut erhaltenen Altstadt und einer bedeutenden akademischen Präsenz. Die Region ist landwirtschaftlich geprägt und bekannt für ihre fruchtbaren Böden. Sie bietet unberührte Naturlandschaften und hat eine reiche multikulturelle Geschichte.",
      hu: "A Lublini vajdaság Kelet-Lengyelországban fekszik, és Ukrajnával, valamint Fehéroroszországgal határos. Fővárosa, Lublin történelmi város, jól megőrzött óvárossal és jelentős egyetemi élettel. A régió elsősorban mezőgazdasági jellegű, termékeny talajairól ismert. Érintetlen természeti tájakat kínál, és gazdag multikulturális történelemmel rendelkezik.",
      ro: "Voievodatul Lublin este situat în estul Poloniei, învecinându-se cu Ucraina și Belarus. Capitala sa, Lublin, este un oraș istoric cu un oraș vechi bine conservat și o prezență academică semnificativă. Regiunea este în principal agricolă și cunoscută pentru solurile sale fertile. Oferă peisaje naturale virgine și are o bogată istorie multiculturală.",
      en: "The Lublin Voivodeship is located in eastern Poland, sharing borders with Ukraine and Belarus. Its capital, Lublin, is a historic city with a well-preserved Old Town and significant academic presence. The region is primarily agricultural and known for its fertile soils. It features pristine natural landscapes and has a rich multicultural history.",
    },
    facts: {
      de: ["Lublin ist die Hauptstadt und größte Stadt in Ostpolen.", "Grenzt sowohl an die Ukraine als auch an Belarus.", "Eine der wichtigsten Agrarregionen Polens.", "Die historische Altstadt von Zamość ist ein UNESCO-Weltkulturerbe.", "Heimat des Nationalparks Polesie und des Nationalparks Roztocze.", "Historisch ein wichtiges Zentrum der jüdischen Kultur.", "Bekannt für die Produktion von Hopfen, Himbeeren und Čpfeln.", "Verfügt über vielfältige Ökosysteme, einschließlich Sümpfen und Wäldern."],
      hu: ["Lublin a főváros és Kelet-Lengyelország legnagyobb városa.", "Ukrajnával és Fehéroroszországgal egyaránt határos.", "Lengyelország egyik legfontosabb mezőgazdasági régiója.", "Zamość történelmi óvárosa UNESCO világörökségi helyszín.", "Itt található a Polesie Nemzeti Park és a Roztocze Nemzeti Park.", "Történelmileg a zsidó kultúra fontos központja volt.", "Komló, málna és alma termesztéséről ismert.", "Változatos ökoszisztémákkal rendelkezik, beleértve a mocsarakat és erdőket."],
      ro: ["Lublin este capitala și cel mai mare oraș din estul Poloniei.", "Se învecinează atât cu Ucraina, cât și cu Belarus.", "Una dintre cele mai importante regiuni agricole din Polonia.", "Orașul vechi istoric Zamość este în Patrimoniul Mondial UNESCO.", "Găzduiește Parcul Național Polesie și Parcul Național Roztocze.", "Istoric un centru major al culturii iudaice.", "Cunoscută pentru producția de hamei, zmeură și mere.", "Prezintă ecosisteme diverse, inclusiv mlaștini și păduri."],
      en: ["Lublin is the capital and the largest city in eastern Poland.", "Shares borders with both Ukraine and Belarus.", "One of Poland's most important agricultural regions.", "The historic Old Town of Zamość is a UNESCO World Heritage site.", "Home to Polesie National Park and Roztocze National Park.", "Historically a major center of Jewish culture and learning.", "Known for its production of hops, raspberries, and apples.", "Features diverse ecosystems, including swamps and forests."],
    },
    descriptionAdvanced: {
      hu: "A Lublini vajdaság (Lubelskie) a lengyel kelet határvidéke, amely a Nyugati-Bug kanyargós völgyeitől a festői Roztocze-dombságig terjed. A régió évszázadokon át a nyugati (katolikus) és keleti (ortodox), valamint a zsidó kultúra és vallás egyik legfontosabb találkozási pontja és olvasztótégelye volt. Fővárosa, Lublin, gazdag reneszánsz építészetével és egyetemével Kelet-Lengyelország szellemi központja, ahol 1569-ben aláírták a Lengyel–Litván Uniót létrehozó lublini uniót. A vidék ma az ország egyik legfontosabb és legzöldebb mezőgazdasági területe, amely híres komló-, dohány- és gyümölcstermesztéséről. (Történelem K7 — A Lengyel-Litván Unió és a többnemzetiségű államok)"
    ,
      en: "Stepping into Lublin feels like unlocking a secret gateway between Central and Eastern Europe. Known as the 'Gate to the East,' this historic stronghold in Poland's eastern heartland serves as a living museum of architectural resilience. As you wander through the Krakow Gate into the cobblestone labyrinth of the Old Town, the past whispers from the Renaissance facades and the medieval Lublin Castle. It was here in 1569 that the Lublin Union was signed, forging one of Europe’s largest empires. Today, the city balances its solemn history at Majdanek with a vibrant academic energy, fueled by thousands of students from its prestigious universities. From the mysterious underground tunnels to the world-class Trinity Chapel frescoes, Lublin invites explorers to discover a multicultural tapestry woven through centuries of trade and diplomacy. History K8 — the formation of the Polish-Lithuanian Commonwealth and the impact of World War II."
    },
    factsAdvanced: {
      hu: ["Lublin várában őrzik a Szentháromság-kápolnát, ahol gótikus építészet párosul lenyűgöző, orosz-bizánci stílusú freskókkal.", "A régióban található a Polesie Nemzeti Park, amely egyedi, tajgaszerű tőzeglápjairól híres.", "Zamość városát a 16. században az olasz reneszánsz 'ideális város' koncepciója alapján építették fel a semmiből."]
    ,
      en: [
        "The Lublin Union of 1569 created the Polish-Lithuanian Commonwealth, which at its peak covered over 1,100,000 square kilometers.",
        "Lublin’s Old Town contains approximately 70% of its original medieval buildings, one of the highest preservation rates in Poland.",
        "The Holy Trinity Chapel at Lublin Castle houses 15th-century Byzantine-Russian frescoes, a unique blend of Eastern and Western art.",
        "The Lublin Underground Route is a 280-meter-long tourist path winding through 14 historic cellars dating back to the 16th century.",
        "Lublin is a major educational hub, hosting over 60,000 students across its public and private universities."
      ]
    },
    image: "/geo-images/poland/lubelskie.webp",
  },
  {
    id: "PL-WN",
    type: "region",
    parent: "poland",
    coords: [20.48, 53.77],
    name: { de: "Ermland-Masuren", hu: "Warmia-Mazúria", ro: "Warmia și Mazuria", en: "Warmian-Masurian" },
    description: {
      de: "Die Woiwodschaft Ermland-Masuren im Nordosten Polens ist berühmt als das \"Land der Tausend Seen\". Ihre Hauptstadt ist Allenstein, eine Stadt, die von Seen und dichten Wäldern umgeben ist. Die Region ist ein erstklassiges Ziel für Segeln, Kajakfahren und Naturtourismus. Historisch Teil Ostpreußens, bietet die Gegend zahlreiche gotische Burgen des Deutschen Ordens.",
      hu: "Az Északkelet-Lengyelországban fekvő Varmia-Mazúriai vajdaság az \"Ezer tó vidékeként\" ismert. Fővárosa Olsztyn, amelyet tavak és sűrű erdők vesznek körül. A régió a vitorlázás, a kajakozás és a természetjárás első számú célpontja. Történelmileg Kelet-Poroszország része volt, a terület számos gótikus teuton lovagvárral büszkélkedhet.",
      ro: "Voievodatul Warmia-Mazuria, situat în nord-estul Poloniei, este cunoscut sub numele de „Țara celor o mie de lacuri”. Capitala sa este Olsztyn, un oraș înconjurat de lacuri și păduri dese. Regiunea este o destinație de top pentru navigație, caiac și turism în natură. Parte istorică a Prusiei Răsăritene, zona se mândrește cu numeroase castele gotice teutonice.",
      en: "The Warmian-Masurian Voivodeship, situated in northeastern Poland, is famously known as the \"Land of a Thousand Lakes.\" Its capital is Olsztyn, a city surrounded by lakes and dense forests. The region is a premier destination for sailing, kayaking, and nature tourism. Historically part of East Prussia, the area boasts numerous Gothic Teutonic castles.",
    },
    facts: {
      de: ["Allenstein (Olsztyn) ist die Hauptstadt der Woiwodschaft.", "Bekannt als die Masurische Seenplatte.", "Śniardwy, der größte See Polens, befindet sich hier.", "Grenzt im Norden an die Oblast Kaliningrad (Russland).", "Weist historische Ordensburgen wie Rößel und Neidenburg auf.", "Sehr beliebtes Ziel für Segeln und Ökotourismus.", "Die Wolfsschanze, Hitlers ehemaliges Hauptquartier, liegt hier.", "Hat eine geringe Bevölkerungsdichte und ausgedehnte Waldlandschaften."],
      hu: ["Olsztyn a vajdaság fővárosa.", "Mazúriai-tóvidékként ismert.", "Itt található a Śniardwy, Lengyelország legnagyobb tava.", "Északon a Kalinyingrádi területtel (Oroszország) határos.", "Történelmi teuton várak találhatók itt, köztük Reszel és Nidzica.", "Nagyon népszerű vitorlás és ökoturisztikai célpont.", "A Farkasverem, Hitler egykori főhadiszállása itt található.", "Alacsony népsűrűséggel és kiterjedt erdős tájakkal rendelkezik."],
      ro: ["Olsztyn este capitala voievodatului.", "Renumit ca districtul lacurilor Mazuriene.", "Śniardwy, cel mai mare lac din Polonia, se află aici.", "Se învecinează cu Regiunea Kaliningrad (Rusia) la nord.", "Prezintă castele teutonice istorice, inclusiv Reszel și Nidzica.", "Destinație foarte populară pentru navigație și eco-turism.", "Bârlogul Lupului, fostul sediu al lui Hitler, este situat aici.", "Are o densitate scăzută a populației și peisaje împădurite extinse."],
      en: ["Olsztyn is the capital city of the voivodeship.", "Renowned as the Masurian Lake District.", "Śniardwy, the largest lake in Poland, is located here.", "Borders the Kaliningrad Oblast (Russia) to the north.", "Features historic Teutonic castles, including Reszel and Nidzica.", "Highly popular destination for sailing and eco-tourism.", "The Wolf's Lair, Hitler's former headquarters, is situated here.", "Has a low population density and expansive forested landscapes."],
    },
    descriptionAdvanced: {
      hu: "Warmia-Mazúria (Warmińsko-Mazurskie) az ezer tó hazája, Lengyelország legtisztább, érintetlen természeti környezetével büszkélkedő északkeleti vajdasága. A régiót a jégkorszak formálta, sűrű fenyőerdők, hullámzó morénadombok és több mint kétezer, csatornákkal összekötött tó, köztük a hatalmas Śniardwy-tó alkotja. Történelmileg Poroszországhoz és a Német Lovagrendhez tartozott, amit a tájat uraló monumentális vöröstéglás lovagvárak, köztük Malbork és Olsztyn erődjei bizonyítanak. Ma a vízisportok, a vitorlázás és a csendes, természetközeli ökoturizmus abszolút lengyelországi központja. (Földrajz K6 — A jégkorszaki formakincs és a tóvidékek)"
    ,
      en: "Imagine stepping into a landscape where the sapphire mirrors of over two thousand lakes reflect the deep emerald of ancient forests. Welcome to the Warmian-Masurian Voivodeship, Poland’s enchanting 'Land of a Thousand Lakes.' This northeastern frontier is a tapestry of wild nature and layered history. Here, the Elbląg Canal defies gravity with its unique ramp system, while the red-brick castles of the Teutonic Knights, like those in Olsztyn and Lidzbark Warmiński, stand as silent sentinels of a medieval past. Nicolaus Copernicus once walked these halls, mapping the heavens. Whether navigating the Great Masurian Lakes or exploring the somber ruins of the Wolf’s Lair, every trail tells a story of human ambition meeting untamed wilderness. Geography K7 — Glacial landforms and inland water systems."
    },
    factsAdvanced: {
      hu: ["A régiót gyakran Európa zöld tüdejének is nevezik a sűrű erdők és a nehézipar teljes hiánya miatt.", "Itt vívták 1410-ben a grünwaldi csatát, a középkori Európa egyik legnagyobb ütközetét a lengyelek és a lovagrend között.", "A vajdaság erdőiben bújik meg a Farkasverem (Wolfsschanze), Adolf Hitler egykori hírhedt II. világháborús főhadiszállása."]
    ,
      en: [
        "The Great Masurian Lakes region contains more than 2,000 lakes, with Śniardwy being the largest in Poland at 113.8 square kilometers.",
        "The Elbląg Canal, completed in 1860, features a unique system of five inclined planes where boats are transported on cradles over land.",
        "The Battle of Grunwald, one of the largest medieval battles in Europe, took place here in 1410 between the Kingdom of Poland and the Teutonic Knights.",
        "Warmia-Masuria covers an area of approximately 24,173 square kilometers, making it the fourth-largest voivodeship in Poland.",
        "The Pisz Forest (Puszcza Piska) is the largest forest complex in the region, covering nearly 100,000 hectares of diverse woodland."
      ]
    },
    image: "/geo-images/poland/warminsko-mazurskie.webp",
  },
  {
    id: "PL-ZP",
    type: "region",
    parent: "poland",
    coords: [14.55, 53.42],
    name: { de: "Westpommern", hu: "Nyugat-Pomeránia", ro: "Pomerania Occidentală", en: "West Pomeranian" },
    description: {
      de: "Die Woiwodschaft Westpommern liegt im Nordwesten Polens an der Ostsee und grenzt an Deutschland. Ihre Hauptstadt Stettin ist ein bedeutender Seehafen an der Oder. Die Region wird wegen ihrer Küstenorte wie Kolberg und Swinemünde, die zahlreiche Touristen anziehen, sehr geschätzt. Sie verfügt über eine starke maritime Wirtschaft und ausgedehnte Wälder wie den Wolin-Nationalpark.",
      hu: "A Nyugat-Pomerániai vajdaság Északnyugat-Lengyelországban, a Balti-tenger mentén fekszik, és Németországgal határos. Fővárosa, Szczecin, egy jelentős tengeri kikötő az Odera folyón. A régiót nagyra értékelik tengerparti üdülőhelyei, mint Kołobrzeg és Świnoujście miatt, amelyek rengeteg turistát vonzanak. Jelentős tengeri gazdasággal és kiterjedt erdőkkel rendelkezik.",
      ro: "Voievodatul Pomerania Occidentală este situat în nord-vestul Poloniei, de-a lungul Mării Baltice și la granița cu Germania. Capitala sa, Szczecin, este un port maritim major pe râul Oder. Regiunea este foarte apreciată pentru stațiunile sale de coastă, precum Kołobrzeg și Świnoujście. Are o economie maritimă semnificativă și păduri întinse precum Parcul Național Wolin.",
      en: "The West Pomeranian Voivodeship is situated in northwestern Poland, along the Baltic Sea and bordering Germany. Its capital, Szczecin, is a major seaport on the Oder River. The region is highly valued for its coastal resorts, such as Kołobrzeg and Świnoujście, which attract numerous tourists. It has a significant maritime economy and expansive forests like the Wolin National Park.",
    },
    facts: {
      de: ["Stettin ist die Hauptstadt und ein bedeutender Seehafen.", "Grenzt im Westen an Deutschland.", "Verfügt über beliebte Ostseebäder wie Swinemünde und Kolberg.", "Der Wolin-Nationalpark ist bekannt für seine Küstenklippen.", "Spielt eine Schlüsselrolle in Polens maritimer Wirtschaft.", "Hat zahlreiche Küstenseen, wie den Dammschen See.", "Historisch Teil des Herzogtums Pommern.", "Stark bewaldet und beliebt für den Naturtourismus."],
      hu: ["Szczecin a főváros és jelentős tengeri kikötő.", "Nyugaton Németországgal határos.", "Népszerű balti-tengeri üdülőhelyei vannak, mint Świnoujście és Kołobrzeg.", "A Wolin Nemzeti Park tengerparti szikláiról ismert.", "Kulcsszerepet játszik Lengyelország tengeri gazdaságában.", "Számos part menti tava van, mint például a Dąbie-tó.", "Történelmileg a Pomerániai Hercegség része volt.", "Sűrűn erdősített, népszerű a természetjárók körében."],
      ro: ["Szczecin este capitala și un port maritim major.", "Are o graniță de vest cu Germania.", "Prezintă stațiuni populare la Marea Baltică precum Świnoujście și Kołobrzeg.", "Parcul Național Wolin este cunoscut pentru stâncile sale de coastă.", "Joacă un rol cheie în economia maritimă a Poloniei.", "Are numeroase lacuri de coastă, cum ar fi Lacul Dąbie.", "Istoric parte a Ducatului Pomeraniei.", "Puternic împădurit, popular pentru turismul în natură."],
      en: ["Szczecin is the capital and a major seaport.", "Shares a western border with Germany.", "Features popular Baltic Sea resorts like Świnoujście and Kołobrzeg.", "Wolin National Park is known for its coastal cliffs.", "Plays a key role in Poland's maritime economy.", "Has numerous coastal lakes, such as Lake Dąbie.", "Historically part of the Duchy of Pomerania.", "Heavily covered by forests, popular for nature tourism."],
    },
    descriptionAdvanced: {
      hu: "Nyugat-Pomeránia (Zachodniopomorskie) az Odera folyó torkolatánál és a Balti-tenger partvidékén elterülő, tengeri kereskedelemre fókuszáló régió. Központja, Szczecin, fontos nemzetközi kikötő, noha több mint 60 kilométerre fekszik a nyílt tengertől az Odera-öböl mélyén. A hosszú, finom homokos partvidéket olyan népszerű üdülővárosok tagolják, mint Świnoujście és Kołobrzeg, valamint meredek, omló sziklafalakkal határolt nemzeti parkok (Wolin). A II. világháború után a terület Németországtól Lengyelországhoz került, ami teljes lakosságcserét és az elhagyott porosz épített örökség új, lengyel identitásba való beillesztését eredményezte. (Földrajz K7 — Tengeri torkolatok és geopolitikai határváltozások)"
    ,
      en: "Stepping into West Pomerania feels like crossing a threshold where the ancient pine forests meet the salty mist of the Baltic Sea. This northwestern jewel of Poland is a land of dramatic contrasts, where the bustling maritime pulse of Szczecin—with its unique star-shaped urban planning—coexists with the serene, wind-swept dunes of Wolin National Park. Travelers can trace the legacy of the Hanseatic League along the coastline or find rejuvenation in the therapeutic saline springs of Kołobrzeg. From the towering white cliffs overlooking the waves to the emerald depths of the Crooked Forest, the region whispers stories of medieval dukes and resilient sailors. Whether you are exploring the vast Oder Delta or lounging on the sun-drenched sands of Świnoujście, the landscape offers a profound connection to Northern Europe's natural and industrial heritage. Geography K7 – European landscapes and maritime ecosystems."
    },
    factsAdvanced: {
      hu: ["A vajdaság partvidéke bővelkedik szélerőművekben, kihasználva a Balti-tenger felől fújó állandó, erős szeleket.", "Szczecin csillag alakú utcaszerkezetét a 19. században Georges-Eugène Haussmann, Párizs híres várostervezője ihlette.", "Świnoujście városa 44 különböző szigeten terül el, így az ország egyetlen igazi szigetvárosa."]
    ,
      en: [
        "The Crooked Forest (Krzywy Las) contains approximately 400 pine trees that all grow with a mysterious 90-degree bend at their base.",
        "Szczecin's Chrobry Embankment is a historic architectural complex stretching 500 meters along the Oder River at an elevation of 19 meters.",
        "Wolin National Park is home to the highest coastal cliffs in Poland, which rise sharply to 95 meters above the Baltic Sea.",
        "Świnoujście features the widest beach in the country, reaching over 200 meters in width at its most expansive points.",
        "The Pomeranian Dukes' Castle in Szczecin was the seat of the Griffin dynasty, which ruled the region for over 500 years."
      ]
    },
    image: "/geo-images/poland/zachodniopomorskie.webp",
  },
  {
    id: "PL-PD",
    type: "region",
    parent: "poland",
    coords: [23.16, 53.13],
    name: { de: "Podlachien", hu: "Podlasie", ro: "Podlasia", en: "Podlaskie" },
    description: {
      de: "Die Woiwodschaft Podlachien im Nordosten Polens ist bekannt für ihre unberührte Natur und ihr multikulturelles Erbe. Die Hauptstadt Białystok ist das kulturelle und administrative Zentrum. Podlachien beheimatet den Białowieża-Urwald, einen der letzten Überreste des europäischen Urwaldes. Die Region ist die am dünnsten besiedelte Polens und zeichnet sich durch weite Feuchtgebiete aus.",
      hu: "Az Északkelet-Lengyelországban található Podlasiei vajdaság érintetlen természetéről és multikulturális örökségéről ismert. Fővárosa, Białystok a kulturális és közigazgatási központ. Podlasiéban található a Białowieża-erdő, az európai őserdők egyik utolsó maradványa. Ez Lengyelország legritkábban lakott régiója, kiterjedt vizenyős területekkel.",
      ro: "Voievodatul Podlasia, situat în nord-estul Poloniei, este cunoscut pentru natura sa virgină și moștenirea multiculturală. Capitala sa, Białystok, este centrul cultural și administrativ. Podlasia găzduiește Pădurea Białowieża, una dintre ultimele rămășițe ale pădurii primordiale a Europei. Este cea mai puțin dens populată regiune din Polonia, având mlaștini vaste.",
      en: "Podlaskie Voivodeship, located in northeastern Poland, is known for its pristine nature and multicultural heritage. Its capital, Białystok, is the cultural and administrative center. Podlaskie is home to the Białowieża Forest, one of the last remnants of Europe's primeval forest. The region is the least densely populated in Poland, featuring vast wetlands and diverse wildlife.",
    },
    facts: {
      de: ["Białystok ist die Hauptstadt und größte Stadt.", "Es ist die am dünnsten besiedelte Woiwodschaft in Polen.", "Der Białowieża-Nationalpark ist berühmt für den Europäischen Wisent.", "Grenzt an Belarus und Litauen.", "Bekannt für kulturelle Vielfalt, einschließlich einer tatarischen Minderheit.", "Der Biebrza-Nationalpark schützt ausgedehnte Feuchtgebiete.", "Weist traditionelle Holzarchitektur auf.", "Die Region Suwałki ist als der \"polnische Kältepol\" bekannt."],
      hu: ["Białystok a főváros és a legnagyobb város.", "Ez Lengyelország legritkábban lakott vajdasága.", "A Białowieża-erdő híres az európai bölényekről.", "Fehéroroszországgal és Litvániával határos.", "Kulturális sokszínűségéről ismert, beleértve a tatár kisebbséget is.", "A Biebrza Nemzeti Park kiterjedt vizes élőhelyeket véd.", "Hagyományos faépítészettel rendelkezik.", "A Suwałki régió a \"lengyel hidegpólus\" néven ismert."],
      ro: ["Białystok este capitala și cel mai mare oraș.", "Este cel mai slab populat voievodat din Polonia.", "Pădurea Białowieża este faimoasă pentru zimbrul european.", "Se învecinează cu Belarus și Lituania.", "Cunoscut pentru diversitatea culturală, inclusiv o minoritate tătară.", "Parcul Național Biebrza protejează zone umede extinse.", "Prezintă arhitectură tradițională din lemn.", "Regiunea Suwałki este cunoscută ca \"Polul Frigului Polonez\"."],
      en: ["Białystok is the capital and largest city.", "It is the least densely populated voivodeship in Poland.", "The Białowieża Forest is famous for European bison.", "Borders Belarus and Lithuania.", "Known for cultural diversity, including a Tatar minority.", "Biebrza National Park protects extensive wetlands.", "Features traditional wooden architecture.", "The Suwałki Region is known as the \"Polish Cold Pole.\""],
    },
    descriptionAdvanced: {
      hu: "Podlasie (Podlaskie) a lengyel távol-kelet, a legvadabb, legérintetlenebb és legritkábban lakott régió a fehérorosz határ mentén. Ez Európa utolsó megmaradt őserdejének, a Białowieża-erdőnek az otthona, ahol a kontinens legnagyobb szárazföldi emlőse, a vadon élő európai bölény barangol. A tájat lassú, kanyargós folyók (Narew, Biebrza) és hatalmas, tavasszal vízzel borított mocsárvilágok uralják, amelyek globális jelentőségű madárvédelmi területek. Kulturálisan rendkívül sokszínű: a hagyományos lengyel katolikusok mellett itt él az ország legjelentősebb ortodox közössége, valamint egy ősi, máig fennmaradt muszlim tatár kisebbség (pl. Kruszyniany faluban). (Biológia K6 — Őserdők, mocsarak és a biodiverzitás)"
    ,
      en: "Venture into the 'Green Lungs of Poland,' where the whispers of the past echo through the ancient Białowieża Forest. As I navigated the misty wetlands of the Biebrza Valley, I felt like I had stepped back into a primeval era. This region is a sanctuary for Europe’s heaviest land mammal, the European bison, which roams freely under the canopy of oak and lime trees that have stood for centuries. Beyond its natural wonders, Podlaskie is a fascinating tapestry of cultures, where the golden domes of Orthodox churches meet the wooden mosques of the Lipka Tatars. It is a land where time slows down, allowing the rhythmic flow of the Narew River to dictate the pace of life. Exploring this borderland reveals the delicate balance between human heritage and untamed wilderness, offering a glimpse into Europe's ecological soul. Geography K7 — European ecosystems and biodiversity."
    },
    factsAdvanced: {
      hu: ["A vajdaság területén négy nemzeti park is található, ami az ország legmagasabb természetvédelmi arányát jelenti.", "A Narew folyót elágazó, bonyolult medre miatt a 'lengyel Amazonasként' is emlegetik.", "Białystok, a régió fővárosa a szülőhelye L. L. Zamenhofnak, az eszperantó nyelv megalkotójának."]
    ,
      en: [
        "The Białowieża Forest, a UNESCO World Heritage site, covers approximately 1,418 square kilometers across the border of Poland and Belarus.",
        "Podlaskie is home to the Biebrza National Park, which protects 592 square kilometers of wetlands, making it the largest national park in Poland.",
        "The region hosts approximately 800 free-roaming European bison, representing a significant portion of the global population.",
        "Białystok, the regional capital, features the Branicki Palace, a residence often called the 'Versailles of Podlasie' due to its 9.7 hectares of baroque gardens.",
        "The Narew River is one of the few braided rivers in the world, characterized by a network of interconnected channels covering a valley up to 4 kilometers wide."
      ]
    },
    image: "/geo-images/poland/podlaskie.webp",
  },
  {
    id: "PL-PK",
    type: "region",
    parent: "poland",
    coords: [22.00, 50.04],
    name: { de: "Karpatenvorland", hu: "Kárpátalja", ro: "Subcarpatia", en: "Subcarpathian" },
    description: {
      de: "Die Woiwodschaft Karpatenvorland liegt im Südosten Polens und grenzt an die Ukraine und die Slowakei. Die Hauptstadt Rzeszów ist ein schnell wachsendes Innovationszentrum, insbesondere in der Luftfahrt. Die Region ist berühmt für die wilde Waldkarpaten (Bieszczady), ein Paradies für Wanderer. Das Karpatenvorland verbindet wunderschöne Naturlandschaften mit starker traditioneller Kultur.",
      hu: "A Kárpátaljai vajdaság Délkelet-Lengyelországban található, Ukrajnával és Szlovákiával határos. Fővárosa, Rzeszów egy gyorsan növekvő innovációs központ, különösen a repülés területén. A régió híres a vad Bieszczady-hegységről, amely a túrázók paradicsoma. A Kárpátalja a gyönyörű természeti tájakat ötvözi az erős hagyományos kultúrával.",
      ro: "Voievodatul Subcarpatia este situat în sud-estul Poloniei, la granița cu Ucraina și Slovacia. Capitala sa, Rzeszów, este un centru de inovație în creștere rapidă, în special în aviație. Regiunea este renumită pentru Munții Bieszczady, un paradis pentru iubitorii de natură. Subcarpatia îmbină peisajele naturale frumoase cu o cultură tradițională puternică.",
      en: "The Subcarpathian Voivodeship is located in southeastern Poland, bordering Ukraine and Slovakia. Its capital, Rzeszów, is a rapidly growing innovation hub, particularly in aviation. The region is famous for the wild Bieszczady Mountains, a paradise for hikers and nature lovers. Subcarpathia blends beautiful natural landscapes with a strong traditional culture and historic wooden churches.",
    },
    facts: {
      de: ["Rzeszów ist die Hauptstadt und ein Innovationszentrum.", "Grenzt an die Ukraine und die Slowakei.", "Die Bieszczady-Berge sind berühmt für unberührte Natur.", "Bekannt als das Zentrum von Polens \"Aviation Valley\".", "Enthält mehrere UNESCO-geschützte Holzkirchen.", "Beheimatet die Nationalparks Magura und Bieszczady.", "Reiche Geschichte, geprägt von polnischen und ukrainischen Kulturen.", "Stark bewaldet und bietet exzellenten Ökotourismus."],
      hu: ["Rzeszów a főváros és egy innovációs központ.", "Ukrajnával és Szlovákiával határos.", "A Bieszczady-hegység érintetlen természetéről híres.", "A lengyel \"Repülési Völgy\" központjaként ismert.", "Több UNESCO-listás fatemplom is található itt.", "Itt van a Magura és a Bieszczady Nemzeti Park.", "Gazdag történelemmel rendelkezik a lengyel és ukrán kultúráknak köszönhetően.", "Sűrűn erdősített és kiváló ökoturizmust kínál."],
      ro: ["Rzeszów este capitala și un centru de inovație.", "Se învecinează cu Ucraina și Slovacia.", "Munții Bieszczady sunt renumiți pentru natura virgină.", "Cunoscută drept centrul \"Văii Aviației\" din Polonia.", "Conține mai multe biserici de lemn aflate pe lista UNESCO.", "Găzduiește Parcurile Naționale Magura și Bieszczady.", "Istorie bogată, modelată de culturile poloneză și ucraineană.", "Foarte împădurită și oferă un eco-turism excelent."],
      en: ["Rzeszów is the capital and an innovation center.", "Shares borders with Ukraine and Slovakia.", "The Bieszczady Mountains are famous for unspoiled nature.", "Known as the center of Poland's \"Aviation Valley.\"", "Contains multiple UNESCO-listed wooden tserkvas.", "Features the Magura and Bieszczady National Parks.", "Rich history shaped by Polish, Ukrainian, and Lemko cultures.", "Highly forested and offers excellent eco-tourism."],
    },
    descriptionAdvanced: {
      hu: "A Kárpátaljai vajdaság (Podkarpackie) a lengyel délkelet zord, vadregényes peremvidéke, amely Ukrajnával és Szlovákiával határos. A régió ékköve a Bieszczady-hegység, egy eldugott, érintetlen hegyvidék kiterjedt alpesi rétekkel (poloninák), amely a fenntartható és bakancsos turizmus szerelmeseinek paradicsoma. A hegyvidéken és az előhegyekben máig fellelhetők a II. világháború után kitelepített lemkó és bojkó kisebbségek apró, gyönyörű, faépítésű ortodox fatemplomai (cerkiew). A hegyektől északra fekvő síkságokon azonban az ország egyik legmodernebb ipari központja jött létre, amely a lengyel repülőgép- és űripar, a 'Repülő Völgy' otthona. (Földrajz K8 — A Kárpátok természeti és etnikai földrajza)"
    ,
      en: "Tucked into the southeastern corner of Poland, the Subcarpathian region feels like a frontier where nature and history remain beautifully untamed. As an explorer wandering through the Bieszczady Mountains, you encounter the 'wolf trails' and vast high-altitude meadows known as poloninas, offering solitude rarely found elsewhere in Europe. This land is a living museum of wooden architecture, where centuries-old Orthodox and Catholic churches stand as silent witnesses to a multicultural past. Yet, Subcarpathia looks firmly toward the future; Rzeszów serves as the heartbeat of Poland's 'Aviation Valley,' producing advanced aerospace technology. Whether you are tracking European bison in the deep forests or marveling at the Renaissance beauty of Łańcut Castle, the region offers a profound journey through time and terrain. Geography K7 — landscape diversity and regional ecosystems."
    },
    factsAdvanced: {
      hu: ["Rzeszów, a vajdaság fővárosa ma a közép-európai légiipari és logisztikai hálózat egyik legfontosabb csomópontja.", "A régióban, Bóbrka településen hozta létre Ignacy Łukasiewicz 1854-ben a világ legelső működő olajkutát és finomítóját.", "A Bieszczady éjszakai ege olyan mentes a fényszennyezéstől, hogy hivatalos Csillagoségbolt-parkot hoztak létre a területen."]
    ,
      en: [
        "The Subcarpathian Voivodeship covers an area of approximately 17,844 square kilometers in southeastern Poland.",
        "Tarnica, the highest peak in the Polish Bieszczady Mountains, reaches an elevation of 1,346 meters above sea level.",
        "The region is home to several UNESCO-listed wooden churches, including the 14th-century Assumption of Holy Mary Church in Haczów, one of the largest wooden Gothic churches in the world.",
        "Rzeszów is the center of Aviation Valley, an industrial cluster where over 90% of Poland's aerospace production is concentrated.",
        "The Łańcut Castle museum houses one of Europe's largest collections of horse-drawn carriages, featuring more than 130 historic vehicles."
      ]
    },
    image: "/geo-images/poland/podkarpackie.webp",
  },
  {
    id: "PL-KP",
    type: "region",
    parent: "poland",
    coords: [18.59, 53.01],
    name: { de: "Kujawien-Pommern", hu: "Kujávia-Pomeránia", ro: "Cuiavia și Pomerania", en: "Kuyavian-Pomeranian" },
    description: {
      de: "Die Woiwodschaft Kujawien-Pommern liegt im nördlichen Zentrum Polens und zeichnet sich durch ihre landwirtschaftliche Stärke aus. Sie hat zwei Hauptstädte: Bydgoszcz für die Verwaltung und Toruń für die Regionalversammlung. Toruń ist berühmt für seine mittelalterliche Altstadt und als Geburtsort von Nikolaus Kopernikus. Die Region bietet fruchtbares Ackerland und berühmte Kurorte wie Ciechocinek.",
      hu: "A Kujávia-Pomerániai vajdaság Lengyelország északi középső részén fekszik, és mezőgazdasági ereje jellemzi. Két fővárosa van: Bydgoszcz a közigazgatás, Toruń pedig a regionális közgyűlés számára. Toruń a középkori óvárosáról és Kopernikusz szülőhelyeként híres. A régió termékeny termőföldekkel és olyan híres fürdővárosokkal rendelkezik, mint Ciechocinek.",
      ro: "Voievodatul Cuiavia-Pomerania este situat în partea central-nordică a Poloniei, caracterizat prin puterea sa agricolă. Are două capitale: Bydgoszcz pentru administrație și Toruń pentru adunarea regională. Toruń este faimos pentru orașul său vechi medieval și ca loc de naștere al lui Nicolaus Copernic. Regiunea are terenuri agricole fertile și orașe balneare celebre precum Ciechocinek.",
      en: "The Kuyavian-Pomeranian Voivodeship is situated in central-northern Poland, characterized by its agricultural strength. It has two co-capitals: Bydgoszcz for administration, and Toruń for the regional assembly. Toruń is famous for its well-preserved medieval Old Town and as the birthplace of astronomer Nicolaus Copernicus. The region features fertile farmlands and famous spa towns like Ciechocinek.",
    },
    facts: {
      de: ["Hat zwei Hauptstädte: Bydgoszcz und Toruń.", "Die mittelalterliche Altstadt von Toruń ist UNESCO-Weltkulturerbe.", "Geburtsort des Astronomen Nikolaus Kopernikus.", "Bekannt für den traditionellen Toruńer Lebkuchen.", "Bydgoszcz ist ein wichtiges Wirtschaftszentrum mit malerischen Wasserwegen.", "Ciechocinek ist einer der berühmtesten Kurorte Polens.", "Ein wichtiger Produzent von landwirtschaftlichen Gütern.", "Die Weichsel fließt durch das Zentrum der Region."],
      hu: ["Két fővárosa van: Bydgoszcz és Toruń.", "Toruń középkori óvárosa UNESCO világörökségi helyszín.", "Nikolausz Kopernikusz csillagász szülőhelye.", "Híres a hagyományos toruńi mézeskalácsról.", "Bydgoszcz egy jelentős gazdasági központ festői vízi utakkal.", "Ciechocinek Lengyelország egyik leghíresebb gyógyhelye.", "A mezőgazdasági termékek jelentős előállítója.", "A Visztula folyó a régió központján folyik keresztül."],
      ro: ["Are două capitale: Bydgoszcz și Toruń.", "Orașul vechi medieval Toruń este în Patrimoniul Mondial UNESCO.", "Locul de naștere al astronomului Nicolaus Copernic.", "Renumit pentru turta dulce tradițională de Toruń.", "Bydgoszcz este un centru economic major cu căi navigabile pitorești.", "Ciechocinek este una dintre cele mai faimoase stațiuni de sănătate din Polonia.", "Un producător major de bunuri agricole.", "Râul Vistula curge prin centru."],
      en: ["Has two capitals: Bydgoszcz and Toruń.", "Toruń's medieval Old Town is a UNESCO World Heritage site.", "Birthplace of the astronomer Nicolaus Copernicus.", "Renowned for traditional Toruń gingerbread.", "Bydgoszcz is a major economic center with picturesque waterways.", "Ciechocinek is one of Poland's most famous health resorts.", "A major producer of agricultural goods.", "The Vistula River flows through the center."],
    },
    descriptionAdvanced: {
      hu: "Kujávia-Pomeránia (Kujawsko-Pomorskie) egy gazdag történelmű, kettős központú régió Közép-Észak-Lengyelországban, amelyet a Visztula folyó szel ketté. Fővárosi funkcióin két város osztozik: Bydgoszcz a dinamikus gazdasági és közigazgatási központ, míg Toruń a régió lenyűgöző középkori gótikus, egyetemi és turisztikai fellegvára, Nicolaus Copernicus szülővárosa. A sík, termékeny mezőgazdasági területek (Kujávia feketeföldjei) éles ellentétben állnak északon a Tucholai-erdő hatalmas, fenyvesekkel borított bioszféra-rezervátumával. A vidék ezen felül híres gyógyító sósvizes forrásairól is, Ciechocinek hatalmas, faépítésű sólepárlói egyedülállóak Európában. (Földrajz K6 — Mezőgazdasági régiók és folyami központok)"
    ,
      en: "Stepping into Kuyavian-Pomeranian is like discovering a hidden gearbox of Polish history and nature. As an explorer, you are greeted by the vast Vistula River, which serves as the lifeblood for some of Europe’s most fertile soils. In Toruń, the gothic spires whisper stories of medieval merchants and the visionary astronomer Nicolaus Copernicus, whose legacy still orbits the city's cobblestone streets. Contrast this with Bydgoszcz, where the serene Brda River reflects elegant granaries and vibrant waterfront life, earning it a reputation as a regional Venice. For those seeking rejuvenation, the towering timber graduation towers in Ciechocinek offer a salty, healing breeze unlike anywhere else in the central plains. This province perfectly balances urban tradition with rural productivity. Geography K7 — river systems and agricultural landscapes."
    },
    factsAdvanced: {
      hu: ["A Bydgoszcz-csatorna, amelyet a 18. század végén építettek, összeköti a Visztula és az Odera folyórendszerét.", "Toruń óvárosa az egyik legépebben fennmaradt gótikus városközpont Európában, így az UNESCO világörökség része.", "A vajdaság híres az országos ismertségű toruńi mézeskalácsról (pierniki), amelyet a 14. század óta sütnek a városban."]
    ,
      en: [
        "The medieval town of Toruń has been a UNESCO World Heritage site since 1997 due to its remarkably well-preserved Gothic architecture.",
        "The salt graduation towers in Ciechocinek are the largest of their kind in Europe, with a combined length exceeding 1.7 kilometers.",
        "Nicolaus Copernicus, the revolutionary astronomer who formulated the heliocentric model, was born in Toruń on February 19, 1473.",
        "Kuyavian-Pomeranian covers an area of 17,972 square kilometers, characterized by the fertile 'Black Earth' soil ideal for intensive agriculture.",
        "The Bydgoszcz Canal, completed in 1774, is a vital engineering feat that links the Vistula and Oder river basins."
      ]
    },
    image: "/geo-images/poland/kujawsko-pomorskie.webp",
  },
  {
    id: "PL-SK",
    type: "region",
    parent: "poland",
    coords: [20.62, 50.86],
    name: { de: "Heiligkreuz", hu: "Szentkereszt", ro: "Sfânta Cruce", en: "Świętokrzyskie" },
    description: {
      de: "Die Woiwodschaft Heiligkreuz liegt im südlichen Zentrum Polens und ist nach dem Heiligkreuzgebirge benannt. Ihre Hauptstadt Kielce ist ein bedeutendes Geschäfts- und Ausstellungszentrum. Die Region ist berühmt für ihre alten geologischen Formationen und tief verwurzelten industriellen Traditionen. Obwohl sie zu den kleineren Woiwodschaften gehört, ist sie reich an Kultur- und Naturerbe.",
      hu: "A Szentkereszt vajdaság Dél-Közép-Lengyelországban fekszik, és a Szentkereszt-hegységről kapta a nevét. Fővárosa, Kielce jelentős üzleti és kiállítási központ. A régió híres ősi geológiai képződményeiről és mélyen gyökerező ipari hagyományairól. Annak ellenére, hogy a kisebb vajdaságok közé tartozik, gazdag kulturális és természeti örökségben.",
      ro: "Voievodatul Sfânta Cruce este situat în centrul-sudul Poloniei și poartă numele Munților Sfintei Cruci. Capitala sa, Kielce, este un centru de afaceri și expozițional semnificativ. Regiunea este celebrată pentru formațiunile sale geologice antice și tradițiile industriale adânc înrădăcinate. Deși este unul dintre cele mai mici voievodate, este bogat în patrimoniu cultural și natural.",
      en: "The Świętokrzyskie Voivodeship is located in central-southern Poland and is named after the Holy Cross Mountains. Its capital, Kielce, is a significant business and exhibition center. The region is celebrated for its ancient geological formations and deep-rooted industrial traditions. Despite being one of the smaller voivodeships, it is rich in cultural and natural heritage.",
    },
    facts: {
      de: ["Kielce ist die Hauptstadt und ein bekanntes Messezentrum.", "Benannt nach dem Heiligkreuzgebirge.", "Diese Berge gehören zu den ältesten in Europa.", "Beheimatet den Heiligkreuz-Nationalpark.", "Die Ruinen von Schloss Krzyżtopór sind eine Hauptattraktion.", "Verfügt über die prähistorischen Feuersteinminen Krzemionki, ein UNESCO-Erbe.", "Eine der kleinsten Woiwodschaften in Fläche und Bevölkerung.", "Lange Geschichte der frühen Metallurgie und des Bergbaus."],
      hu: ["Kielce a főváros és egy kiemelkedő vásárközpont.", "A Szentkereszt-hegységről kapta a nevét.", "Ezek a hegyek Európa legrégebbi hegységei közé tartoznak.", "Itt található a Świętokrzyski Nemzeti Park.", "A Krzyżtopór vár romjai jelentős látványosságnak számítanak.", "Itt vannak a Krzemionki őskori kovakőbányák, amelyek UNESCO-helyszínek.", "Területét és népességét tekintve az egyik legkisebb vajdaság.", "A korai kohászat és bányászat hosszú múltra tekint vissza."],
      ro: ["Kielce este capitala și un centru expozițional proeminent.", "Numit după Munții Świętokrzyskie (Sfintei Cruci).", "Acești munți se numără printre cei mai vechi din Europa.", "Găzduiește Parcul Național Świętokrzyski.", "Ruinele istorice ale Castelului Krzyżtopór sunt o atracție majoră.", "Prezintă minele preistorice de silex Krzemionki, un sit UNESCO.", "Unul dintre cele mai mici voievodate ca suprafață și populație.", "Istorie lungă a metalurgiei și mineritului timpuriu."],
      en: ["Kielce is the capital and a prominent trade fair center.", "Named after the Świętokrzyskie (Holy Cross) Mountains.", "These mountains are among the oldest in Europe.", "Home to Świętokrzyski National Park.", "The historic Krzyżtopór Castle ruins are a major attraction.", "Features the Krzemionki prehistoric flint mines, a UNESCO site.", "One of the smallest voivodeships in area and population.", "Long history of early metallurgy and mining."],
    },
    descriptionAdvanced: {
      hu: "A Szentkereszt vajdaság (Świętokrzyskie) az ország egyik legősibb, misztikus hangulatú régiója, amelyet a nevét adó, több százmillió éves, laposra kopott Szentkereszt-hegység ural. Bár hegyei ma már ritkán haladják meg a 600 métert, geológiai szempontból Európa legrégebbi képződményei közé tartoznak, tele gazdag ősmaradványokkal és a kontinens első neandervölgyi leleteivel (Raj-barlang). A régióban található a hatalmas Krzemionki Opatowskie, egy újkőkorszaki kovakőbánya, amely a világörökség része. Kielce városa, a vajdaság központja, ma a lengyel építőanyag-ipar és kiállítás-szervezés egyik legfontosabb csomópontja. (Földrajz K8 — Földtörténet, őshegységek és korai bányászat)"
    ,
      en: "Stepping into the Świętokrzyskie region feels like traversing the very spine of time. As you wander through the Holy Cross Mountains, you aren't just climbing peaks; you are touching some of the oldest geological formations in Europe, dating back over 500 million years. This central-southern Polish gem is a land of legends, where the mystical Łysa Góra whispered tales of witches' sabbaths to medieval travelers. Beyond the folklore, the capital, Kielce, stands as a vibrant testament to the region's resilient industrial spirit and its role as a modern hub for international trade. From the crumbling stone majesty of Chęciny Castle to the serene, ancient forests of the Świętokrzyski National Park, every corner reveals a layer of Poland's deep-rooted heritage. It is a living classroom where the earth's ancient crust meets the echoes of human ambition. Geography K7 — Europe's ancient mountain ranges."
    },
    factsAdvanced: {
      hu: ["A Łysa Góra (Kopasz-hegy) a kereszténység felvétele előtt a szláv pogány vallás egyik legfontosabb kultikus központja volt.", "A chęcinyi vár romjai a hegység egyik gerincén Lengyelország egyik leglátványosabb középkori erődítmény-maradványai.", "A vajdaság jelképe a repülő boszorkány, utalva a Kopasz-hegyhez fűződő ősi, boszorkányszombatokról szóló helyi legendákra."]
    ,
      en: [
        "The Holy Cross Mountains are among the oldest in Europe, featuring geological structures that originated approximately 500 million years ago.",
        "The Świętokrzyski National Park protects unique Cambrian quartzite boulder fields, known locally as 'gołoborza', which cover several hectares.",
        "Krzemionki Opatowskie contains over 4,000 Neolithic flint mine shafts, making it one of the largest prehistoric industrial sites in the world.",
        "The ruins of the 14th-century Chęciny Castle sit at an elevation of 360 meters, providing visibility of up to 50 kilometers on clear days.",
        "Kielce's exhibition center, Targi Kielce, is the second largest in Central and Eastern Europe, hosting over 70 trade fairs annually."
      ]
    },
    image: "/geo-images/poland/swietokrzyskie.webp",
  },
  {
    id: "PL-LB",
    type: "region",
    parent: "poland",
    coords: [15.22, 52.73],
    name: { de: "Lebus", hu: "Lubus", ro: "Lubusz", en: "Lubusz" },
    description: {
      de: "Die Woiwodschaft Lebus liegt im Westen Polens an der Grenze zu Deutschland. Sie hat zwei Hauptstädte: Gorzów Wielkopolski für die Verwaltung und Zielona Góra für die Regionalversammlung. Die Region ist die am stärksten bewaldete in Polen und voller Seen. Zielona Góra ist berühmt für seine Weinbautraditionen und veranstaltet ein jährliches Weinfest.",
      hu: "A Lubusi vajdaság Nyugat-Lengyelországban, a német határ mentén fekszik. Két fővárosa van: Gorzów Wielkopolski a közigazgatásért, Zielona Góra pedig a regionális közgyűlésért felel. A régió Lengyelország legerdősebb területe, és több száz tóval rendelkezik. Zielona Góra egyedülálló módon híres borkészítési hagyományairól és borfesztiváljáról.",
      ro: "Voievodatul Lubusz este situat în vestul Poloniei, de-a lungul graniței cu Germania. Funcționează cu două capitale: Gorzów Wielkopolski pentru administrație și Zielona Góra pentru adunarea regională. Regiunea este cea mai împădurită din Polonia, plină cu sute de lacuri. Zielona Góra este renumită pentru tradițiile sale de vinificație și găzduiește un festival anual al vinului.",
      en: "The Lubusz Voivodeship is situated in western Poland along the border with Germany. It functions with two capitals: Gorzów Wielkopolski for administration and Zielona Góra for the regional assembly. The region is the most heavily forested in Poland, filled with hundreds of lakes. Zielona Góra is uniquely famous for its winemaking traditions and hosts an annual wine festival.",
    },
    facts: {
      de: ["Zwei Hauptstädte: Gorzów Wielkopolski und Zielona Góra.", "Am stärksten bewaldete Region in Polen.", "Zielona Góra ist berühmt für seine historischen Weinberge.", "Teilt eine lange Westgrenze mit Deutschland.", "Beheimatet den Nationalpark Ujście Warty, ein wichtiges Feuchtgebiet.", "Eine der am dünnsten besiedelten Woiwodschaften.", "Die Landschaft ist reich an postglazialen Seen.", "Dient als wichtiger Transitkorridor."],
      hu: ["Két főváros: Gorzów Wielkopolski és Zielona Góra.", "Lengyelország legerdősebb régiója.", "Zielona Góra híres történelmi szőlőültetvényeiről.", "Hosszú nyugati határszakaszon osztozik Németországgal.", "Itt található az Ujście Warty Nemzeti Park vizes élőhelye.", "Az egyik legkevésbé lakott vajdaság.", "A táj gazdag posztglaciális tavakban.", "Fontos tranzitfolyosóként szolgál."],
      ro: ["Două capitale: Gorzów Wielkopolski și Zielona Góra.", "Cea mai împădurită regiune din Polonia.", "Zielona Góra este renumită pentru podgoriile sale istorice.", "Împarte o graniță lungă de vest cu Germania.", "Găzduiește Parcul Național Ujście Warty, o zonă umedă crucială.", "Unul dintre cele mai puțin populate voievodate.", "Peisajul este bogat în lacuri post-glaciare.", "Servește ca un coridor de tranzit important."],
      en: ["Two capitals: Gorzów Wielkopolski and Zielona Góra.", "Most heavily forested region in Poland.", "Zielona Góra is renowned for its historical vineyards.", "Shares a long western border with Germany.", "Features the Ujście Warty National Park, a crucial wetland.", "One of the least populated voivodeships.", "Landscape is rich in post-glacial lakes.", "Serves as an important transit corridor."],
    },
    descriptionAdvanced: {
      hu: "A Lubusi vajdaság (Lubuskie) Lengyelország legnyugatibb, Németországgal határos régiója, amelyet az Odera és a Warta folyók festői völgyei szelnek át. Ez az ország legerdősebb vajdasága, területének majdnem felét zöld rengetegek borítják, ami a tiszta, ipartól mentes környezettel együtt az ökoturizmus fellegvárává teszi. A régió egyedülálló a lengyel vajdaságok között kétpólusú adminisztrációjával: a történelmi borászatáról híres Zielona Góra a politikai vezetés, míg az északi Gorzów Wielkopolski a közigazgatási hivatalok központja. A terület számos német-lengyel történelmi emléket őriz, köztük a II. világháborús Ostwall erődrendszer döbbenetes földalatti labirintusait. (Földrajz K6 — Határmenti régiók, erdőgazdálkodás és folyóvölgyek)"
    ,
      en: "Stepping into the Lubusz Voivodeship feels like entering Poland's emerald heart, where the whisper of ancient trees and the ripple of crystal-clear lakes dominate the landscape. This western gateway, bordering Germany, is a haven for those seeking solitude in nature, boasting the highest forest density in the nation. As you navigate the labyrinth of the Międzyrzecz Fortified Region—a massive subterranean defense system—history comes alive beneath your feet. Meanwhile, the rolling hills surrounding Zielona Góra tell a sweeter tale; this is Poland's northernmost wine frontier, where traditions dating back to the Middle Ages are celebrated with every vintage. Whether you are exploring the UNESCO-listed Muskau Park or kayaking through the Drawa National Park, Lubusz reveals a perfect harmony between rugged wilderness and refined viticulture. Geography K7 — ecosystems and land use."
    },
    factsAdvanced: {
      hu: ["Zielona Góra a legészakibb európai bortermelő régiók egyike, ahol a hagyomány a 12. század óta töretlen.", "A Międzyrzecz Erődített Régió (Ostwall) földalatti bunkerei ma Európa legnagyobb telelő denevérrezervátumát rejtik.", "A vajdaság címerében szereplő sas a régió erős piast történelmi gyökereire utal a nyugati végeken."]
    ,
      en: [
        "Lubusz holds the record for the highest forest cover in Poland, with approximately 49% of its total area covered by woodland.",
        "The region is home to over 500 lakes, including the expansive Łagowskie Lake District, which is often referred to as the 'Pearl of Lubusz.'",
        "The Międzyrzecz Fortified Region features a complex network of nearly 30 kilometers of underground tunnels and fortifications built in the 1930s.",
        "Zielona Góra's Wine Fest, held every September, honors a tradition that began with the first vineyards planted in the region around the year 1250.",
        "The Muskau Park, a UNESCO World Heritage site shared with Germany, covers roughly 830 hectares of uniquely designed landscape architecture."
      ]
    },
    image: "/geo-images/poland/lubelskie.webp",
  },
  {
    id: "PL-OP",
    type: "region",
    parent: "poland",
    coords: [17.92, 50.67],
    name: { de: "Oppeln", hu: "Opole", ro: "Opole", en: "Opole" },
    description: {
      de: "Die Woiwodschaft Oppeln liegt im Südwesten Polens und ist die kleinste der 16 Provinzen. Ihre Hauptstadt Oppeln ist durch ihr nationales Musikfestival als \"Hauptstadt des polnischen Liedes\" bekannt. Die Region hat ein einzigartiges demografisches Profil, da sie die größte deutsche Minderheit in Polen beherbergt. Sie liegt im oberen Odertal und verfügt über fruchtbare landwirtschaftliche Flächen.",
      hu: "Az Opolyei vajdaság Délnyugat-Lengyelországban található, és a 16 tartomány közül a legkisebb. Fővárosa, Opole az országos zenei fesztiválja révén \"a lengyel dal fővárosaként\" ismert. A régió egyedülálló demográfiai profillal rendelkezik, mivel Lengyelország legnagyobb német kisebbségének ad otthont. A Felső-Odera völgyében fekszik, termékeny mezőgazdasági területekkel.",
      ro: "Voievodatul Opole este situat în sud-vestul Poloniei și este cea mai mică dintre cele 16 provincii. Capitala sa, Opole, este cunoscută drept „Capitala Cântecului Polonez” datorită festivalului său național de muzică. Regiunea are un profil demografic unic, găzduind cea mai mare minoritate germană din Polonia. Se află în valea superioară a râului Oder, având terenuri agricole fertile.",
      en: "The Opole Voivodeship is located in southwestern Poland and is the smallest of the 16 provinces. Its capital, Opole, is known as the \"Capital of Polish Song\" due to its national music festival. The region has a unique demographic profile, being home to the largest German minority in Poland. It lies in the upper Oder river valley, featuring fertile agricultural lands.",
    },
    facts: {
      de: ["Oppeln ist die Hauptstadt, berühmt für ihr Musikfestival.", "Kleinste Woiwodschaft in Fläche und Bevölkerung.", "Heimat einer bedeutenden deutschen Minderheit.", "Viele Gemeinden sind offiziell zweisprachig (Polnisch und Deutsch).", "Schloss Moszna, bekannt für seine märchenhafte Architektur, liegt hier.", "Liegt überwiegend in der Schlesischen Tiefebene an der Oder.", "Hochentwickelter Agrarsektor aufgrund fruchtbarer Böden.", "Verbindet polnisches, schlesisches und deutsches Kulturerbe."],
      hu: ["Opole a főváros, zenei fesztiváljáról híres.", "A legkisebb vajdaság területét és népességét tekintve is.", "Jelentős német etnikai kisebbségnek ad otthont.", "Sok önkormányzat hivatalosan is kétnyelvű (lengyel és német).", "Itt található a meseszerű építészetéről ismert Moszna-kastély.", "Túlnyomórészt a Sziléziai-alföldön fekszik, az Odera folyó mentén.", "Fejlett mezőgazdasági szektorral rendelkezik a termékeny talaj miatt.", "Ötvözi a lengyel, sziléziai és német kulturális örökséget."],
      ro: ["Opole este capitala, faimoasă pentru festivalul său de muzică.", "Cel mai mic voievodat atât ca suprafață, cât și ca populație.", "Găzduiește o minoritate etnică germană semnificativă.", "Multe municipalități sunt oficial bilingve (poloneză și germană).", "Castelul Moszna, cunoscut pentru arhitectura sa de basm, este aici.", "Se află predominant în Câmpia Sileziei, de-a lungul râului Oder.", "Sector agricol foarte dezvoltat datorită solurilor fertile.", "Îmbină moștenirea culturală poloneză, sileziană și germană."],
      en: ["Opole is the capital, famous for its music festival.", "Smallest voivodeship in both area and population.", "Home to a significant German ethnic minority.", "Many municipalities are officially bilingual (Polish and German).", "Moszna Castle, known for fairy-tale architecture, is located here.", "Lies predominantly in the Silesian Lowlands along the Oder River.", "Highly developed agricultural sector due to fertile soils.", "Blends Polish, Silesian, and German cultural heritage."],
    },
    descriptionAdvanced: {
      hu: "Az Opolei vajdaság (Opolskie) a legkisebb népességű lengyel régió, amely Felső- és Alsó-Szilézia történelmi törésvonalán fekszik, és erős multikulturális gyökerekkel rendelkezik. Ez a régió az otthona az ország legnagyobb megmaradt német kisebbségének, ami az építészetben, a kétnyelvű helységnévtáblákban és a helyi dialektusokban is megmutatkozik. Az Odera folyó völgye termékeny mezőgazdasági terület, míg délen a fenséges Opawskie-hegység kínál menedéket a túrázóknak. Fővárosa, Opole, amelyet a 'lengyel dal fővárosaként' is ismernek a híres nyári dalfesztivál miatt, egy elbűvölő, csatornákkal szabdalt városka, amelyet gyakran 'Opolei Velencének' hívnak. (Földrajz K7 — Kisebbségek, multikulturalizmus és mezőgazdaság)"
    ,
      en: "Imagine stepping into the historic heart of Upper Silesia, where the Odra River gently wraps around the medieval charm of Opole. As one of Poland's oldest settlements, this city breathes history through the remnants of its 14th-century Piast Castle and the iconic Piast Tower that stands sentinel over the landscape. Walking along the Młynówka canal, you might mistake the reflection of the colorful Baroque townhouses for a scene from Venice. Opole is the undisputed capital of Polish song, hosting legendary festivals that have defined the nation's musical identity for decades. Beyond the melodies, the city offers a sanctuary on Bolko Island, where lush greenery and a world-class zoo invite discovery. Whether exploring the Gothic Cathedral of the Holy Cross or the bustling Market Square, Opole reveals a unique blend of Silesian, German, and Polish heritage that continues to shape its vibrant culture. Geography K7 — European regions and river systems."
    },
    factsAdvanced: {
      hu: ["A vajdaság területén található a mesébe illő Mosznai kastély, amely 99 tornyával és 365 szobájával Európa egyik leglátványosabb eklektikus palotája.", "Opole a lengyel könnyűzene történelmi központja, amire a város főterén lévő 'Csillagok Sétánya' is emlékeztet.", "Az itt talált Silesaurus opolensis, egy triász kori őslény felfedezése mérföldkő volt a lengyel őslénytanban."]
    ,
      en: [
        "The Piast Tower stands at a height of 35 meters and is one of the few remains of the 14th-century Piast Castle.",
        "Opole was first mentioned as a stronghold in the 9th century, making it one of the oldest cities in Poland.",
        "The National Festival of Polish Song has been held annually in Opole's amphitheater since 1963.",
        "The city covers an area of approximately 149 square kilometers following its expansion in 2017.",
        "The Odra River's Młynówka canal in the city center creates a picturesque waterfront area spanning nearly 1.5 kilometers."
      ]
    },
    image: "/geo-images/poland/opolskie.webp",
  },
];

export const polandCities: POI[] = [
  {
    id: "warsaw",
    type: "city",
    parent: "PL-MZ",
    coords: [21.0122, 52.2297],
    name: { de: "Warschau", hu: "Varsó", ro: "Varșovia", en: "Warsaw" },
    description: {
      de: "Warschau ist die Hauptstadt Polens, eine dynamische Metropole an der Weichsel, bekannt für ihre akribisch rekonstruierte Altstadt und ihre moderne Skyline.",
      hu: "Varsó Lengyelország fővárosa, a Visztula menti dinamikus metropolisz, amely aprólékosan újjáépített óvárosáról és modern felhőkarcolóiról ismert.",
      ro: "Varșovia este capitala Poloniei, o metropolă dinamică pe râul Vistula, cunoscută pentru orașul său vechi reconstruit cu meticulozitate și orizontul său modern.",
      en: "Warsaw is the capital of Poland, a dynamic metropolis on the Vistula River, known for its meticulously reconstructed Old Town and modern skyline."
    },
    descriptionAdvanced: {
      de: "Warschau ist die Hauptstadt und größte Stadt Polens. Die Metropole liegt an der Weichsel im östlichen Zentrum Polens. Die offizielle Einwohnerzahl beträgt 1,86 Millionen, im Großraum leben 3,1 Millionen Menschen, womit Warschau die siebtgrößte Stadt der Europäischen Union ist. Das Stadtgebiet umfasst 517,24 Quadratkilometer. Warschau ist eine Alpha-Weltstadt, ein wichtiges internationales Touristenziel und ein bedeutendes kulturelles, politisches und wirtschaftliches Zentrum.",
      hu: "Varsó Lengyelország fővárosa és legnagyobb városa. A metropolisz a Visztula folyó partján fekszik, Közép-Kelet-Lengyelországban. Lakossága hivatalosan 1,86 millió fő, a tágabb vonzáskörzetben pedig 3,1 millióan élnek, így az Európai Unió hetedik legnépesebb városa. A város területe 517,24 négyzetkilométer. Varsó egy alfa globális város, jelentős nemzetközi turisztikai célpont, valamint fontos kulturális, politikai és gazdasági központ.",
      ro: "Varșovia este capitala și cel mai mare oraș al Poloniei. Metropola este situată pe râul Vistula, în centrul-estul Poloniei. Populația sa este estimată oficial la 1,86 milioane de locuitori în oraș și 3,1 milioane în zona metropolitană, fiind al 7-lea cel mai populat oraș din Uniunea Europeană. Limitele orașului acoperă 517,24 kilometri pătrați. Varșovia este un oraș global alfa, o destinație turistică internațională majoră și un centru cultural, politic și economic semnificativ.",
      en: "Stepping into Warsaw feels like witnessing a phoenix rising from the ashes. As you wander through the Old Town, it is hard to believe that these cobblestone streets and colorful facades were meticulously rebuilt after being almost entirely destroyed during World War II. The Vistula River flows past a city of stark contrasts, where the Gothic spires of St. John's Cathedral stand in the shadow of the ultra-modern Varso Tower, the tallest building in the European Union. From the royal grandeur of Wilanów Palace to the bustling, creative energy of the Praga district, Warsaw tells a story of incredible resilience and rapid modernization. It serves as Poland's beating heart, blending its tragic history with a vibrant, forward-looking culture that celebrates music, science, and the arts. History K8 — reconstruction and modern European development.",
    },
    factsAdvanced: {
      de: ["Warschau ist die achtgrößte Stadt der Europäischen Union.", "Die historische Altstadt wurde originalgetreu rekonstruiert und ist heute UNESCO-Weltkulturerbe.", "Der Kultur- und Wissenschaftspalast ist das markanteste Gebäude aus der sozialistischen Ära."],
      hu: [],
      ro: [],
      en: [
        "Warsaw was the home of world-renowned composer Frédéric Chopin, and the city features 15 musical benches that play his compositions at the touch of a button.",
        "The Royal Castle in Warsaw is a reconstruction that used approximately 300 original architectural details recovered from the ruins after the war.",
        "Varso Tower, completed in 2022, reaches a height of 310 meters, making it the tallest skyscraper in the European Union.",
        "Approximately 25% of Warsaw's total area is occupied by green spaces, including 82 parks and several lush forest reserves within city limits.",
        "The Old Town was added to the UNESCO World Heritage List in 1980 as an outstanding example of a near-total reconstruction of a historical period spanning the 13th to 20th centuries."
      ]
    },
    facts: {
      de: ["Hauptstadt Polens.", "Liegt an der Weichsel.", "Größte Stadt des Landes.", "Im Zweiten Weltkrieg zerstört und wiederaufgebaut.", "Die Altstadt ist ein UNESCO-Weltkulturerbe.", "Der Kulturpalast ist ein wichtiges Wahrzeichen.", "Heimat des Museums des Warschauer Aufstands.", "Fryderyk Chopin wuchs in Warschau auf.", "Ein wichtiges Wirtschaftszentrum in Mitteleuropa.", "Einwohnerzahl von über 1,8 Millionen."],
      hu: ["Lengyelország fővárosa.", "A Visztula folyó mentén található.", "Az ország legnagyobb városa.", "A második világháborúban elpusztult, majd újjáépítették.", "Az óváros az UNESCO Világörökség része.", "A Kultúra és Tudomány Palotája fontos nevezetesség.", "Itt található a Varsói Felkelés Múzeuma.", "Fryderyk Chopin Varsóban nőtt fel.", "Közép-Európa jelentős gazdasági központja.", "Több mint 1,8 milliós lakossága van."],
      ro: ["Capitala Poloniei.", "Situat pe râul Vistula.", "Cel mai mare oraș din țară.", "Distrus în al Doilea Război Mondial și reconstruit.", "Centrul vechi este un sit al Patrimoniului Mondial UNESCO.", "Palatul Culturii și Științei este un reper major.", "Găzduiește Muzeul Revoltei din Varșovia.", "Fryderyk Chopin a crescut în Varșovia.", "Un hub economic major în Europa Centrală.", "Populație de peste 1,8 milioane de locuitori."],
      en: ["Capital of Poland.", "Located on the Vistula River.", "Largest city in the country.", "Destroyed during WWII and rebuilt.", "Old Town is a UNESCO World Heritage Site.", "Palace of Culture and Science is a major landmark.", "Home to the Warsaw Uprising Museum.", "Fryderyk Chopin grew up in Warsaw.", "A major economic hub in Central Europe.", "Population of over 1.8 million."],
    },
    image: "/geo-images/poland/warsaw.webp",
  },
  {
    id: "krakow",
    type: "city",
    parent: "PL-MA",
    coords: [19.9450, 50.0647],
    name: { de: "Krakau", hu: "Krakkó", ro: "Cracovia", en: "Krakow" },
    description: {
      de: "Krakau ist die ehemalige Königsstadt Polens, bekannt für ihre prächtige mittelalterliche Altstadt, das Wawel-Schloss und als kulturelles Herz des Landes.",
      hu: "Krakkó Lengyelország egykori királyi székhelye, amely pompás középkori óvárosáról, a Wawel-várról és az ország kulturális szíveként ismert.",
      ro: "Cracovia este fosta cetate de scaun regală a Poloniei, cunoscută pentru orașul său vechi medieval magnific, Castelul Wawel și ca inima culturală a țării.",
      en: "Kraków is the former royal capital of Poland, known for its magnificent medieval Old Town, Wawel Castle, and as the cultural heart of the country."
    },
    descriptionAdvanced: {
      de: "Krakau ist die zweitgrößte und eine der ältesten Städte Polens. Die Stadt liegt an der Weichsel in der Woiwodschaft Kleinpolen und geht auf das siebte Jahrhundert zurück. Sie war bis 1596 die offizielle Hauptstadt Polens und ist traditionell eines der führenden Zentren des polnischen akademischen, wirtschaftlichen, kulturellen und künstlerischen Lebens. Sie gilt als eine der schönsten Städte Europas und ihre Altstadt ist ein UNESCO-Weltkulturerbe.",
      hu: "Krakkó Lengyelország második legnagyobb és egyik legrégebbi városa. A Kis-Lengyelország vajdaságban, a Visztula folyó partján fekvő város története a hetedik századig nyúlik vissza. 1596-ig Lengyelország hivatalos fővárosa volt, és hagyományosan a lengyel tudományos, gazdasági, kulturális és művészeti élet egyik vezető központja. Európa egyik legszebb városaként tartják számon, óvárosa pedig az UNESCO Világörökség része.",
      ro: "Cracovia este al doilea oraș ca mărime și unul dintre cele mai vechi din Polonia. Situat pe râul Vistula în Voievodatul Polonia Mică, orașul datează din secolul al VII-lea. A fost capitala oficială a Poloniei până în 1596 și a fost în mod tradițional unul dintre centrele principale ale vieții academice, economice, culturale și artistice poloneze. Considerat unul dintre cele mai frumoase orașe din Europa, centrul său vechi este un sit al Patrimoniului Mondial UNESCO.",
      en: "As I wandered along the banks of the Vistula River, the silhouette of Wawel Castle loomed like a silent sentinel over the city. Krakow is a place where history isn't just in books; it’s etched into the cobbles of the Main Market Square, one of Europe's largest medieval plazas. Inside the St. Mary’s Basilica, the trumpeter’s call breaks the air every hour, a tradition kept alive for centuries. From the bohemian alleys of Kazimierz, the historic Jewish quarter, to the grandeur of the Jagiellonian University, the city breathes a unique mix of intellectual vigor and royal heritage. It served as Poland's capital for over five centuries, and today, it remains the soul of the nation, preserving architectural treasures that survived the turmoils of war. History K8 — the development of European medieval kingdoms and cultural preservation.",
    },
    factsAdvanced: {
      de: ["Die Jagiellonen-Universität in Krakau wurde 1364 gegründet und ist eine der ältesten Europas.", "Der Hauptmarkt von Krakau ist einer der größten mittelalterlichen Marktplätze der Welt.", "Papst Johannes Paul II. war lange Zeit Erzbischof von Krakau."],
      hu: [],
      ro: [],
      en: [
        "The Main Market Square (Rynek Główny) measures approximately 200 by 200 meters, making it one of the largest medieval squares in Europe.",
        "Wawel Royal Castle dates back to the 14th century and served as the residence for Polish kings for more than 500 years.",
        "The Jagiellonian University, founded in 1364, is one of the oldest universities in the world and educated famous figures like Nicolaus Copernicus.",
        "The Cloth Hall, or Sukiennice, has been a center of international trade since the 13th century and is often cited as the world's oldest shopping mall.",
        "St. Mary's Basilica features a wooden altarpiece carved by Veit Stoss between 1477 and 1489, which stands 13 meters high and 11 meters wide."
      ]
    },
    facts: {
      de: ["Zweitgrößte Stadt in Polen.", "Ehemalige Hauptstadt Polens.", "Liegt an der Weichsel.", "Das historische Zentrum ist ein UNESCO-Weltkulturerbe.", "Heimat der Jagiellonen-Universität, gegründet 1364.", "Das Wawel-Schloss ist ein wichtiges historisches Wahrzeichen.", "Der Hauptmarkt ist der größte mittelalterliche Marktplatz Europas.", "Berühmt für sein jüdisches Viertel Kazimierz.", "Überstand den Zweiten Weltkrieg relativ unbeschadet.", "Wichtiges Kultur- und Wissenschaftszentrum."],
      hu: ["Lengyelország második legnagyobb városa.", "Lengyelország egykori fővárosa.", "A Visztula folyó partján fekszik.", "A történelmi központ az UNESCO Világörökség része.", "A Jagielló Egyetem otthona, amelyet 1364-ben alapítottak.", "A Wawel kastély jelentős történelmi műemlék.", "A Főpiac Európa legnagyobb középkori főtere.", "Híres a zsidó negyedéről, Kazimierzről.", "Viszonylag épségben vészelte át a második világháborút.", "Jelentős kulturális és akadémiai központ."],
      ro: ["Al doilea cel mai mare oraș din Polonia.", "Fosta capitală a Poloniei.", "Situat pe râul Vistula.", "Centrul istoric este un sit al Patrimoniului Mondial UNESCO.", "Găzduiește Universitatea Jagielloniană, fondată în 1364.", "Castelul Wawel este un monument istoric major.", "Piața Principală este cea mai mare piață medievală din Europa.", "Faimos pentru cartierul evreiesc, Kazimierz.", "A supraviețuit celui de-al Doilea Război Mondial relativ neatins.", "Centru cultural și academic major."],
      en: ["Second-largest city in Poland.", "Former capital of Poland.", "Located on the Vistula River.", "Historic centre is a UNESCO World Heritage Site.", "Home to Jagiellonian University, founded in 1364.", "Wawel Castle is a major historical landmark.", "Main Market Square is the largest medieval town square in Europe.", "Famous for its Jewish quarter, Kazimierz.", "Survived WWII relatively unscathed.", "Major cultural and academic center."],
    },
    image: "/geo-images/poland/krakow.webp",
  },
  {
    id: "wroclaw",
    type: "city",
    parent: "PL-DS",
    coords: [17.0385, 51.1079],
    name: { de: "Breslau", hu: "Wrocław", ro: "Wrocław", en: "Wroclaw" },
    description: {
      de: "Breslau ist eine charmante Stadt im Südwesten Polens, bekannt für ihre zahlreichen Brücken, den prächtigen Marktplatz und die über die ganze Stadt verteilten Zwergenfiguren.",
      hu: "Wrocław egy bájos város Délnyugat-Lengyelországban, amely számos hídjáról, pompás piacteréről és a városban mindenfelé megtalálható törpeszobrairól ismert.",
      ro: "Wrocław este un oraș fermecător din sud-vestul Poloniei, cunoscut pentru numeroasele sale poduri, piața centrală magnifică și figurinele de pitici răspândite prin tot orașul.",
      en: "Wroclaw is a charming city in southwestern Poland, known for its numerous bridges, magnificent Market Square, and the dwarf figurines scattered throughout the city."
    },
    descriptionAdvanced: {
      de: "Wrocław (Breslau) ist eine Stadt im Südwesten Polens und die größte Stadt in der historischen Region Schlesien. Sie liegt an den Ufern der Oder im schlesischen Tiefland in Mitteleuropa. Mit einer offiziellen Bevölkerung von über 670.000 ist Wrocław die drittgrößte Stadt Polens. Die Stadt ist bekannt für ihre vielen Brücken, Inseln und den historischen Marktplatz. Breslau ist ein bedeutendes Studentenzentrum und ein wichtiges kulturelles und wirtschaftliches Zentrum.",
      hu: "Wrocław Délnyugat-Lengyelország városa, Szilézia történelmi régiójának legnagyobb települése. Az Odera folyó partján fekszik, a Közép-Európai Sziléziai-alföldön. Több mint 670 000 fős lakosságával Wrocław Lengyelország harmadik legnépesebb városa. A város híres nagyszámú hídjáról, szigeteiről és történelmi piacteréről. Wrocław jelentős diákváros, valamint fontos kulturális és gazdasági központ.",
      ro: "Wrocław este un oraș în sud-vestul Poloniei și cel mai mare oraș din regiunea istorică Silezia. Se află pe malurile râului Oder, în Câmpia Sileziei din Europa Centrală. Cu o populație oficială de peste 670.000 de locuitori, Wrocław este al treilea cel mai populat oraș din Polonia. Orașul este cunoscut pentru numărul său mare de poduri, insule și piața istorică. Wrocław este un centru studențesc major și un important pol cultural și economic.",
      en: "As you navigate the intricate network of 12 islands and over 100 bridges, you quickly realize why Wroclaw is often hailed as the 'Venice of the North.' This vibrant metropolis, nestled in the heart of Lower Silesia, serves as a living testament to centuries of shifting borders and cultural fusion. The centerpiece is the Rynek, one of Europe's largest market squares, where colorful townhouses frame a stunning Gothic Town Hall. Yet, the city's true charm lies in its smallest residents: hundreds of bronze dwarfs scattered across the cobblestones, originally a symbol of peaceful protest during the 1980s. From the gas-lit lamps of Ostrów Tumski to the modernist marvel of the Centennial Hall, Wroclaw invites you to uncover layers of Central European heritage at every turn. History K8 — Central European urban evolution and 20th-century transitions.",
    },
    factsAdvanced: {
      de: ["In Breslau findet man über 100 Brücken und zahlreiche kleine Inseln.", "Die Stadt beheimatet das beeindruckende Panorama von Racławice, ein riesiges Rundgemälde.", "Mehr als 600 kleine Zwergenstatuen sind über das gesamte Stadtgebiet verteilt."],
      hu: [],
      ro: [],
      en: [
        "Wroclaw is built across a network of 12 islands connected by approximately 117 bridges and footbridges.",
        "The city's Market Square (Rynek) spans roughly 3.8 hectares, making it one of the largest urban squares in Europe.",
        "Over 600 bronze dwarf figurines are hidden throughout the city streets, a tradition that began with a 2001 tribute to the Orange Alternative movement.",
        "The Centennial Hall, a UNESCO World Heritage site, features a massive reinforced concrete dome with a diameter of 65 meters.",
        "The twin towers of the Wroclaw Cathedral on Ostrów Tumski reach a height of 98 meters, dominating the city's historic skyline."
      ]
    },
    facts: {
      de: ["Liegt an der Oder.", "Hauptstadt der Woiwodschaft Niederschlesien.", "Bekannt als die Stadt der hundert Brücken.", "Berühmt für die überall in der Stadt verteilten Bronze-Zwerge.", "Hat einen wunderschönen Marktplatz (Rynek).", "Heimat der Universität Breslau.", "Historische Hauptstadt Schlesiens.", "Ostrów Tumski ist der älteste Teil der Stadt.", "War 2016 Kulturhauptstadt Europas.", "Die Jahrhunderthalle ist UNESCO-Weltkulturerbe."],
      hu: ["Az Odera folyó partján fekszik.", "Az Alsó-Sziléziai vajdaság fővárosa.", "A száz híd városaként is ismert.", "Híres a városban szétszórt bronz törpeszobrairól.", "Gyönyörű piactérrel (Rynek) rendelkezik.", "A Wrocławi Egyetem otthona.", "Szilézia történelmi fővárosa.", "Ostrów Tumski a város legrégebbi része.", "2016-ban Európa Kulturális Fővárosa volt.", "A Centenáriumi Csarnok UNESCO világörökségi helyszín."],
      ro: ["Situat pe râul Oder.", "Capitala Voievodatului Silezia Inferioară.", "Cunoscut ca orașul celor o sută de poduri.", "Faimos pentru statuile sale de pitici din bronz.", "Are o piață superbă (Rynek).", "Găzduiește Universitatea din Wrocław.", "Capitala istorică a Sileziei.", "Ostrów Tumski este cea mai veche parte a orașului.", "A fost Capitală Europeană a Culturii în 2016.", "Sala Centenarului este sit UNESCO."],
      en: ["Located on the Odra River.", "Capital of the Lower Silesian Voivodeship.", "Known as the city of a hundred bridges.", "Famous for its bronze dwarf statues scattered across the city.", "Has a beautiful market square (Rynek).", "Home to the University of Wrocław.", "Historical capital of Silesia.", "Ostrów Tumski is the oldest part of the city.", "Was a European Capital of Culture in 2016.", "Centennial Hall is a UNESCO World Heritage site."],
    },
    image: "/geo-images/poland/wroclaw.webp",
  },
  {
    id: "gdansk",
    type: "city",
    parent: "PL-PM",
    coords: [18.6466, 54.3520],
    name: { de: "Danzig", hu: "Gdańsk", ro: "Gdańsk", en: "Gdansk" },
    description: {
      de: "Danzig ist eine historische Hansestadt an der Ostsee, bekannt für ihre prächtige Architektur, den Bernsteinhandel und als Geburtsort der Solidarność-Bewegung.",
      hu: "Gdańsk egy történelmi hanza-város a Balti-tenger partján, amely pompás építészetéről, borostyánkereskedelméről és a Szolidaritás mozgalom szülőhelyeként ismert.",
      ro: "Gdańsk este un oraș hanseatic istoric la Marea Baltică, cunoscut pentru arhitectura sa magnifică, comerțul cu chihlimbar și ca locul de naștere al mișcării Solidaritatea.",
      en: "Gdansk is a historic Hanseatic city on the Baltic Sea, known for its magnificent architecture, amber trade, and as the birthplace of the Solidarity movement."
    },
    descriptionAdvanced: {
      de: "Danzig ist eine große Hafenstadt an der Ostseeküste Polens. Mit fast 486.000 Einwohnern ist sie die Hauptstadt der Woiwodschaft Pommern und die bedeutendste Stadt in der geografischen Region Pommerellen. Es ist Polens wichtigster Seehafen und das Zentrum der viertgrößten Metropolregion des Landes. Die Stadt hat eine komplexe Geschichte mit polnischen, preußischen, deutschen Herrschaften und Autonomie. Die Solidarność-Bewegung, die das Ende des Kommunismus in Polen einleitete, entstand auf der Danziger Werft.",
      hu: "Gdańsk egy nagy kikötőváros Lengyelország balti partvidékén. Közel 486 000 fős lakosságával a Pomerániai vajdaság fővárosa és Pomerélia földrajzi régiójának legjelentősebb városa. Ez Lengyelország legfontosabb tengeri kikötője és az ország negyedik legnagyobb metropoliszövezetének központja. A város összetett történelemmel rendelkezik lengyel, porosz és német uralom, valamint autonómia korszakaival. A lengyelországi kommunista uralom megdöntésében kulcsszerepet játszó Szolidaritás mozgalom a gdański hajógyárban alakult ki.",
      ro: "Gdańsk este un oraș-port major pe coasta baltică a Poloniei. Cu o populație de aproape 486.000 de locuitori, este capitala Voievodatului Pomerania și cel mai proeminent oraș din regiunea Pomerelia. Este principalul port maritim al Poloniei și centrul celei de-a patra mari zone metropolitane a țării. Orașul are o istorie complexă cu perioade de dominație poloneză, prusacă și germană. Mișcarea Solidaritatea, care a contribuit la sfârșitul comunismului în Polonia, a apărut la Șantierul Naval din Gdańsk.",
      en: "Stepping onto the cobblestones of the Long Market, one immediately feels the weight of centuries as a premier Hanseatic trading hub. Gdansk, often called the 'Amber Capital of the World,' dazzles with its reconstructed Flemish-style facades that rose from the ashes of 1945. The iconic Crane (Żuraw) stands as a silent witness to the city's maritime power, once the largest of its kind in medieval Europe. Beyond its architectural grandeur, Gdansk carries the soul of resistance; it was here at the Lenin Shipyard that the Solidarity movement ignited, forever changing the course of 20th-century history. Walking through the Golden Gate, you aren't just visiting a city; you are traversing a bridge between the medieval Baltic trade routes and the modern struggle for European democracy. History K8 — Modern European History and social movements.",
    },
    factsAdvanced: {
      de: ["Das Krantor aus dem 15. Jahrhundert ist das Wahrzeichen der Stadt.", "Danzig bildet zusammen mit Sopot und Gdingen die Metropolregion „Dreistadt“.", "Die Marienkirche in Danzig ist eine der größten Backsteinkirchen der Welt."],
      hu: [],
      ro: [],
      en: [
        "The historic Crane (Żuraw) could lift up to 4 tons of cargo to a height of 11 meters using two massive wooden treadwheels powered by humans walking inside.",
        "St. Mary's Church in Gdansk is the largest brick church in the world, boasting a volume of between 185,000 and 190,000 cubic meters.",
        "During its 17th-century golden age, Gdansk handled over 75% of the entire Polish-Lithuanian Commonwealth's maritime exports.",
        "The city changed sovereignty 12 times throughout its turbulent history, alternating between Polish, Prussian, German, and 'Free City' status.",
        "Over 90% of the city's historic center was destroyed during the final months of World War II in 1945, requiring decades of meticulous reconstruction."
      ]
    },
    facts: {
      de: ["Liegt an der Ostseeküste.", "Polens wichtigster Seehafen.", "Teil der Metropolregion Dreistadt zusammen mit Gdingen und Sopot.", "Geburtsort der Solidarność-Bewegung.", "Berühmt für die Altstadt und den Langen Markt.", "Der ikonische Neptunbrunnen ist ein wichtiges Wahrzeichen.", "Hat eine reiche Geschichte mit deutschen und polnischen Einflüssen.", "Die Marienkirche ist eine der größten Backsteinkirchen der Welt.", "Der Zweite Weltkrieg begann offiziell hier auf der Westerplatte.", "Wichtiges Zentrum des Bernsteinhandels."],
      hu: ["A Balti-tenger partján található.", "Lengyelország legfőbb tengeri kikötője.", "A Hármasváros agglomeráció része Gdynia és Sopot mellett.", "A Szolidaritás mozgalom szülőhelye.", "Híres óvárosáról és a Hosszú piacról.", "Az ikonikus Neptun-kút fontos nevezetesség.", "Gazdag történelemmel rendelkezik, német és lengyel hatásokkal.", "A Mária-templom a világ egyik legnagyobb téglaépítésű temploma.", "A második világháború hivatalosan itt kezdődött a Westerplattén.", "A borostyánkereskedelem jelentős központja."],
      ro: ["Situat pe coasta Mării Baltice.", "Principalul port maritim al Poloniei.", "Face parte din zona metropolitană Tricity împreună cu Gdynia și Sopot.", "Locul de naștere al mișcării Solidaritatea.", "Faimos pentru Centrul Vechi și Piața Lungă.", "Fântâna iconică a lui Neptun este un reper major.", "Are o istorie bogată, cu influențe germane și poloneze.", "Biserica Sf. Maria este una dintre cele mai mari biserici din cărămidă din lume.", "Al Doilea Război Mondial a început oficial aici, la Westerplatte.", "Centru major pentru comerțul cu chihlimbar."],
      en: ["Located on the Baltic Sea coast.", "Poland's principal seaport.", "Part of the Tricity metropolitan area along with Gdynia and Sopot.", "Birthplace of the Solidarity movement.", "Famous for its Old Town and Long Market.", "The iconic Neptune's Fountain is a major landmark.", "Has a rich history with German and Polish influences.", "St. Mary's Church is one of the largest brick churches in the world.", "World War II officially began here at Westerplatte.", "Major center for amber trade."],
    },
    image: "/geo-images/poland/gdansk.webp",
  },
  {
    id: "poznan",
    type: "city",
    parent: "PL-WP",
    coords: [16.9252, 52.4064],
    name: { de: "Posen", hu: "Poznań", ro: "Poznań", en: "Poznan" },
    description: {
      de: "Posen ist eine Stadt an der Warthe im westlichen Zentrum Polens in der Region Großpolen. Sie ist die fünftgrößte und eine der ältesten Städte Polens. Die Einwohnerzahl beträgt etwa 532.000, während die Metropolregion Posen über 1 Million Menschen umfasst. Sie ist ein historisches Zentrum für Handel, Sport, Bildung, Technologie und Tourismus. Die Stadt ist bekannt für ihre Renaissance-Altstadt und den Ostrów Tumski Dom, den ältesten Polens.",
      hu: "Poznań egy város a Warta folyó partján, Nyugat-Közép-Lengyelországban, a Nagy-Lengyelország régióban. Ez Lengyelország ötödik legnagyobb és egyik legrégebbi városa. A város lakossága körülbelül 532 000 fő, a poznani metropoliszövezetben pedig több mint 1 millióan élnek. Kereskedelmi, sport, oktatási, technológiai és turisztikai történelmi központ. A város reneszánsz óvárosáról és a legrégebbi lengyel katedrálisról, az Ostrów Tumskiról híres.",
      ro: "Poznań este un oraș pe râul Warta în centrul-vestul Poloniei, în regiunea Polonia Mare. Este al cincilea cel mai mare oraș și unul dintre cele mai vechi din Polonia. Populația orașului este de aproximativ 532.000 de locuitori, în timp ce zona metropolitană are peste 1 milion de oameni. Este un centru istoric de comerț, sport, educație, tehnologie și turism. Orașul este renumit pentru Orașul Vechi renascentist și catedrala Ostrów Tumski, cea mai veche din Polonia.",
      en: "Poznań is a city on the River Warta in west-central Poland, in the Greater Poland region. It is the fifth-largest and one of the oldest cities in Poland. The city population is about 532,000, while the Poznań metropolitan area contains over 1 million people. It is a historical centre of trade, sports, education, technology and tourism. The city is renowned for its Renaissance Old Town and the Ostrów Tumski cathedral, which is the oldest in Poland.",
    },
    facts: {
      de: ["Liegt an der Warthe.", "Eine der ältesten Städte Polens.", "Fünftgrößte Stadt nach Bevölkerung.", "Berühmt für die Renaissance-Altstadt.", "Die Rathausuhr zeigt mechanische Ziegenböcke.", "Wichtiges Zentrum für Handel und Industrie.", "Die Internationale Messe Posen ist die größte in Polen.", "Heimat der Adam-Mickiewicz-Universität.", "Der Peter-und-Paul-Dom ist der älteste in Polen.", "Bekannt für sein lokales Gebäck, das St.-Martins-Hörnchen."],
      hu: ["A Warta folyó mentén található.", "Lengyelország egyik legrégebbi városa.", "Lakossága alapján az ötödik legnagyobb város.", "Híres reneszánsz óvárosáról.", "A városháza óráján mechanikus kecskebakok találhatók.", "Fontos kereskedelmi és ipari központ.", "A Poznani Nemzetközi Vásár a legnagyobb Lengyelországban.", "Az Adam Mickiewicz Egyetem otthona.", "A Szent Péter és Pál katedrális Lengyelország legrégebbi temploma.", "Híres a helyi süteményről, a Szent Márton-kifliről."],
      ro: ["Situat pe râul Warta.", "Unul dintre cele mai vechi orașe din Polonia.", "Al cincilea oraș ca populație.", "Faimos pentru Centrul Vechi renascentist.", "Ceasul Primăriei prezintă țapi mecanici.", "Centru important de comerț și industrie.", "Târgul Internațional din Poznań este cel mai mare din Polonia.", "Găzduiește Universitatea Adam Mickiewicz.", "Catedrala Sf. Petru și Pavel este cea mai veche din Polonia.", "Cunoscut pentru produsul local de patiserie, cornul Sf. Martin."],
      en: ["Located on the Warta River.", "One of the oldest cities in Poland.", "Fifth-largest city by population.", "Famous for its Renaissance Old Town.", "The Town Hall clock features mechanical billy goats.", "Important center of trade and industry.", "Poznań International Fair is the largest in Poland.", "Home to Adam Mickiewicz University.", "St. Peter and Paul Cathedral is the oldest in Poland.", "Known for its local pastry, St. Martin's croissant."],
    },
    descriptionAdvanced: {
      hu: "Poznań, a Warta folyó partján elterülő, lüktető metropolisz, Nagy-Lengyelország történelmi fővárosa és a lengyel államiság egyik legkorábbi központja. A város szimbóluma a csodálatos reneszánsz városháza a Régi Piactéren (Stary Rynek), ahol a déli harangszókor két fémkecske jön elő a toronyból, hogy öklelőzzön egyet. Poznań ma az ország egyik legdinamikusabb gazdasági és tudományos központja, amely híres a több mint évszázados múltra visszatekintő Nemzetközi Vásárról és hatalmas egyetemi életéről. A városképet a történelmi városrészek, mint a Ostrów Tumski (Katedrális-sziget) és az innovatív, modern üvegpaloták izgalmas kontrasztja határozza meg. (Történelem K6 — A lengyel állam kialakulása és a modern kereskedelem)"
    ,
      en: "Stepping into Poznań feels like uncovering a hidden treasure chest of Polish history. As I walk along the Warta River, the skyline is dominated by the Renaissance spire of the Town Hall, where two mechanical goats famously butt heads every day at noon. This tradition captures the city's whimsical spirit, yet its roots run deep into the soul of the nation. On the nearby island of Ostrów Tumski, the ancient Poznań Cathedral stands as a silent witness to the burial place of Poland's first kings. Today, the city thrives as a bustling center of international trade and education, famous for the delicious St. Martin’s croissants that fill the air with a sweet, nutty aroma. Whether exploring medieval fortifications or the modern shores of Lake Malta, Poznań offers a captivating blend of royal legacy and contemporary vibrance. History K8 — Early statehood and European trade routes."
    },
    factsAdvanced: {
      hu: ["A poznańi Ostrów Tumskin álló Szent Péter és Pál-katedrális az ország legrégebbi temploma.", "Híres helyi édesség a Szent Márton-kifli (Rogal świętomarciński), amelyet csak a régió tanúsítvánnyal rendelkező cukrászdái készíthetnek.", "Az 1956-os poznańi munkásfelkelés (Poznański Czerwiec) volt a kommunista rendszer elleni első nagy tömeges tiltakozás Lengyelországban."]
    ,
      en: [
        "The Poznań Town Hall clock features two mechanical goats that have been butting heads daily at 12:00 PM since 1551.",
        "Ostrów Tumski is the oldest part of the city and houses the Poznań Cathedral, where Mieszko I, the first ruler of Poland, is buried.",
        "The Poznań International Fair, established in 1921, is the largest trade fair organizer in Poland and one of the largest in Central Europe.",
        "St. Martin's Croissant (Rogal świętomarciński) is a protected regional product; in 2021 alone, over 500 tons were sold during St. Martin's Day.",
        "Lake Malta, located near the city center, is an artificial lake covering 64 hectares and hosts international rowing and canoeing championships."
      ]
    },
    image: "/geo-images/poland/poznan.webp",
  },
  {
    id: "szczecin",
    type: "city",
    parent: "PL-ZP",
    coords: [14.5528, 53.4285],
    name: { de: "Stettin", hu: "Szczecin", ro: "Szczecin", en: "Szczecin" },
    description: {
      de: "Stettin ist die Hauptstadt und größte Stadt der Woiwodschaft Westpommern im Nordwesten Polens. Sie liegt nahe der Ostsee und der deutschen Grenze, ist ein wichtiger Seehafen und Polens siebtgrößte Stadt. Die Stadt hat über 396.000 Einwohner. Ihr Architekturstil ist stark von ihrer preußischen und deutschen Geschichte geprägt und weist sternförmige Plätze und breite Alleen auf. Stettin ist ein wichtiges Zentrum für die maritime Wirtschaft, Bildung und Kultur.",
      hu: "Szczecin a Nyugat-Pomerániai vajdaság fővárosa és legnagyobb városa Északnyugat-Lengyelországban. A Balti-tenger és a német határ közelében fekszik, jelentős tengeri kikötő és Lengyelország hetedik legnagyobb városa. A város lakossága több mint 396 000 fő. Építészeti stílusát erősen befolyásolta a porosz és német történelem, csillag alakú terekkel és széles sugárutakkal, amelyeket gyakran Párizshoz hasonlítanak. Tengeri ipari, oktatási és kulturális központ.",
      ro: "Szczecin este capitala și cel mai mare oraș al Voievodatului Pomerania Occidentală din nord-vestul Poloniei. Situat în apropierea Mării Baltice și a graniței cu Germania, este un port maritim major și al șaptelea oraș polonez ca mărime. Populația depășește 396.000 de locuitori. Stilul său arhitectural este puternic influențat de istoria prusacă și germană, cu piețe în formă de stea și bulevarde largi. Este un centru important pentru industria maritimă, educație și cultură.",
      en: "Szczecin is the capital and largest city of the West Pomeranian Voivodeship in northwestern Poland. Located near the Baltic Sea and the German border, it is a major seaport and Poland's seventh-largest city. The city has a population of over 396,000. Its architectural style is heavily influenced by its Prussian and German history, featuring star-shaped plazas and wide avenues often compared to Paris. Szczecin is an important center for the maritime industry, education, and culture.",
    },
    facts: {
      de: ["Hauptstadt der Woiwodschaft Westpommern.", "Liegt nahe der Ostsee und der deutschen Grenze.", "Polens siebtgrößte Stadt.", "Wichtiger Seehafen an der Oder.", "Das Straßenlayout wird oft mit Paris verglichen.", "Hat eine starke maritime Industrie und Schiffbaugeschichte.", "Die Hakenterrasse (Wały Chrobrego) ist eine berühmte Promenade.", "Heimat des Schlosses der Pommerschen Herzöge.", "Umgeben von Wäldern und Wasser, darunter der Dammische See.", "Hat eine reiche deutsche und polnische Geschichte."],
      hu: ["A Nyugat-Pomerániai vajdaság fővárosa.", "A Balti-tenger és a német határ közelében található.", "Lengyelország hetedik legnagyobb városa.", "Jelentős tengeri kikötő az Odera folyón.", "Utcaszerkezetét gyakran hasonlítják Párizséhoz.", "Erős tengeri iparral és hajóépítési történelemmel rendelkezik.", "A Wały Chrobrego egy híres magasított sétány.", "A Pomerániai Hercegek Kastélyának otthona.", "Erdők és vizek veszik körül, köztük a Dąbie-tó.", "Gazdag német és lengyel múlttal rendelkezik."],
      ro: ["Capitala Voievodatului Pomerania Occidentală.", "Situat lângă Marea Baltică și granița germană.", "Al șaptelea cel mai mare oraș din Polonia.", "Port maritim major pe râul Oder.", "Aspectul străzilor este adesea comparat cu cel al Parisului.", "Are o puternică industrie maritimă și istorie în construcțiile navale.", "Wały Chrobrego este o faimoasă promenadă suspendată.", "Găzduiește Castelul Ducilor de Pomerania.", "Înconjurat de păduri și apă, inclusiv Lacul Dąbie.", "Are o istorie bogată germană și poloneză."],
      en: ["Capital of the West Pomeranian Voivodeship.", "Located near the Baltic Sea and the German border.", "Poland's seventh-largest city.", "Major seaport on the Oder River.", "Street layout is often compared to Paris.", "Has a strong maritime industry and shipbuilding history.", "Wały Chrobrego is a famous elevated promenade.", "Home to the Pomeranian Dukes' Castle.", "Surrounded by forests and water, including Dąbie Lake.", "Has a rich German and Polish history."],
    },
    descriptionAdvanced: {
      hu: "Szczecin, Nyugat-Pomeránia zöld fővárosa egyedülálló karakterű tengerparti metropolisz, annak ellenére, hogy több mint 60 kilométerre fekszik a nyílt Balti-tengertől. A várost az Odera folyó hatalmas torkolatvidéke, kikötői öblök, hidak és a festői Wały Chrobrego kilátóterasz határozza meg, amely a 20. század eleji porosz építészet remeke. Szczecin utcaszerkezete Párizs híres, csillag alakú sugárútjait másolja, amelyeket hatalmas, százéves fák árnyékolnak, így az ország egyik legerdősebb és legparkosítottabb városa. A II. világháború utáni drasztikus határeltolódás miatt szinte teljes lakossága kicserélődött, így egyedülálló, pionír identitással rendelkező központtá vált. (Földrajz K7 — Folyami kikötők, várostervezés és geopolitika)"
    ,
      en: "Standing at the edge of the Oder River, the sheer scale of Szczecin's maritime legacy becomes clear. Known as the 'Paris of the North' for its unique star-shaped urban layout, this city bridges the gap between Central Europe and the Baltic Sea. Wandering through the Wały Chrobrego embankments, I feel the weight of centuries as the massive maritime towers watch over the harbor. Beneath the modern streets lies a hidden world—Europe’s largest civilian fallout shelter, carved out of Prussian fortifications. The city's silhouette is dominated by the green spires of the Pomeranian Dukes’ Castle, a testament to its royal past. From the bustling port to its lush parks, Szczecin is a fascinating mosaic of German heritage and Polish rebirth. This urban landscape serves as a living laboratory for Geography K7 — studying river systems and urban development."
    },
    factsAdvanced: {
      hu: ["Szczecin kikötője Świnoujściével együtt Közép-Európa egyik legnagyobb tengeri áruforgalmi csomópontja.", "A városban található Európa legrégibb, ma is működő moziépülete, a Kino Pionier.", "A város alatt húzódó, a II. világháború idején épült gigantikus bunkerrendszer több ezer ember menedéke volt a légitámadások során."]
    ,
      en: [
        "The Central Cemetery in Szczecin is the largest cemetery in Poland and the third largest in Europe, covering an area of 167.8 hectares.",
        "Szczecin's underground tourist route features a fallout shelter built 5 stories deep that can accommodate up to 5,000 people at once.",
        "The Jasne Błonia square is famous for its collection of 214 London plane trees, the largest concentration of this species in Poland.",
        "The port of Szczecin, combined with Świnoujście, handles approximately 33 million tons of cargo annually.",
        "The city center is located approximately 65 kilometers from the Baltic Sea coast and only 12 kilometers from the German border."
      ]
    },
    image: "/geo-images/poland/szczecin.webp",
  },
  {
    id: "lodz-city",
    type: "city",
    parent: "PL-LD",
    coords: [19.4560, 51.7592],
    name: { de: "Lodz", hu: "Łódź", ro: "Łódź", en: "Łódź" },
    description: {
      de: "Łódź (Lodz) ist die viertgrößte Stadt Polens und die Hauptstadt der Woiwodschaft Łódź. Die im zentralen Teil des Landes gelegene Stadt war früher ein Industriezentrum, das im 19. Jahrhundert für seine Textilproduktion berühmt war. Die Einwohnerzahl beträgt etwa 670.000. Lodz ist bekannt für seine Nationale Filmschule, die einige der berühmtesten polnischen Schauspieler und Regisseure hervorbrachte. Die Piotrkowska-Straße ist die zentrale Achse der Stadt.",
      hu: "Łódź Lengyelország negyedik legnépesebb városa, a Łódźi vajdaság fővárosa. Az ország középső részén fekvő város egykor az ipar, különösen a 19. századi textilgyártás központja volt. Lakossága mintegy 670 000 fő. Łódź híres Nemzeti Filmművészeti Iskolájáról, ahol számos híres lengyel színész és rendező tanult. A város központi tengelye a Piotrkowska utca, amely Európa egyik leghosszabb kereskedelmi utcája.",
      ro: "Łódź este al patrulea cel mai mare oraș din Polonia după populație și capitala Voievodatului Łódź. Situat în partea centrală a țării, a fost anterior un centru industrial faimos pentru producția sa textilă din secolul al XIX-lea. Populația orașului este de aproximativ 670.000 de locuitori. Łódź este renumit pentru Școala sa Națională de Film. Strada Piotrkowska, una dintre cele mai lungi străzi comerciale din Europa, este axa centrală a orașului.",
      en: "Łódź is the fourth-largest city in Poland by population and the capital of Łódź Voivodeship. Located in the central part of the country, it was previously an industrial center famous for its textile manufacturing in the 19th century. The city's population is around 670,000. Łódź is renowned for its National Film School, which produced some of the most famous Polish actors and directors. Piotrkowska Street, one of the longest commercial streets in Europe, is the central axis of the city.",
    },
    facts: {
      de: ["Viertgrößte Stadt in Polen.", "Liegt im zentralen Teil des Landes.", "Historisch bekannt für ihre Textilindustrie.", "Hauptstadt der Woiwodschaft Łódź.", "Berühmt für die Nationale Filmschule.", "Die Piotrkowska-Straße ist eine der längsten Einkaufsstraßen Europas.", "Hat viele ehemalige Industriegebäude in Kulturräume verwandelt.", "Heimat der Manufaktura, eines großen Einkaufs- und Kunstzentrums.", "Hat eine reiche multikulturelle Geschichte.", "Wichtiges Zentrum für moderne Kunst und Festivals."],
      hu: ["Lengyelország negyedik legnagyobb városa.", "Az ország középső részén található.", "Történelmileg a textiliparáról ismert.", "A Łódźi vajdaság fővárosa.", "Híres a Nemzeti Filmművészeti Iskolájáról.", "A Piotrkowska utca Európa egyik leghosszabb bevásárlóutcája.", "Számos egykori ipari épületet kulturális térré alakítottak át.", "A Manufaktura hatalmas bevásárló- és művészeti központ otthona.", "Gazdag multikulturális múltja van.", "A modern művészetek és fesztiválok fontos központja."],
      ro: ["Al patrulea oraș ca mărime din Polonia.", "Situat în partea centrală a țării.", "Cunoscut istoric pentru industria textilă.", "Capitala Voievodatului Łódź.", "Faimos pentru Școala sa Națională de Film.", "Strada Piotrkowska este una dintre cele mai lungi străzi comerciale din Europa.", "A revitalizat multe clădiri industriale în spații culturale.", "Găzduiește Manufaktura, un centru comercial și de arte major.", "Are o istorie multiculturală bogată.", "Centru important pentru arte moderne și festivaluri."],
      en: ["Fourth-largest city in Poland.", "Located in the central part of the country.", "Historically known for its textile industry.", "Capital of Łódź Voivodeship.", "Famous for its National Film School.", "Piotrkowska Street is one of the longest commercial streets in Europe.", "Has revitalized many former industrial buildings into cultural spaces.", "Home to Manufaktura, a major shopping and arts center.", "Has a rich multicultural history.", "Important center for modern arts and festivals."],
    },
    descriptionAdvanced: {
      hu: "Łódź a lengyel ipari forradalom legkiemelkedőbb és legellentmondásosabb emlékműve, amely a 19. században egy eldugott faluból 'az ígéret földjévé', Európa egyik legnagyobb textilipari központjává vált. Az iparmágnások grandiózus, palotaszerű téglagyárai és a munkások szerény bérkaszárnyái közötti éles kontraszt ma is meghatározza a városképet. A város gerincét a híres Piotrkowska utca alkotja, amely nyüzsgő kávézóival, szecessziós épületeivel és rejtett, művészi udvaraival az ország leghosszabb sétálóutcája. Az ipar összeomlása után Łódź a filmművészet (itt működik a világhírű Filmiskola) és a modern dizájn avantgárd központjává, valamint a gyárépületek újjáélesztésének éllovasává vált (pl. Manufaktura, EC1). (Történelem K8 — Az ipari kapitalizmus kialakulása és a posztindusztriális rehabilitáció)"
    ,
      en: "Once known as the 'Manchester of the East,' Łódź is a captivating urban tapestry where red-brick industrial history meets avant-garde creativity. Stepping onto Piotrkowska Street, you are walking one of the longest commercial stretches in Europe, a vibrant artery pulsating with the echoes of 19th-century textile tycoons. Unlike Poland's medieval hubs, Łódź rose rapidly from a tiny settlement to an industrial titan, and today, that raw energy has been channeled into massive cultural hubs like Manufaktura. As the cradle of Polish cinema, the city’s National Film School continues to shape global storytelling, earning it the nickname 'Holly-Łódź.' Exploring the grand palaces of former factory owners alongside vibrant street art murals reveals a city that doesn't just preserve history—it reimagines it for a modern age. Geography K7 — Urban industrial landscapes and economic transformation."
    },
    factsAdvanced: {
      hu: ["A 19. században a várost lengyelek, németek, oroszok és zsidók közösen építették, létrehozva egy egyedülálló multikulturális metropolist.", "A Radegast vasútállomás a Łódźi gettó hírhedt deportáló központja volt, ma megrázó Holokauszt-emlékmű.", "A város épületfalait Közép-Európa legnagyobb és legismertebb nagy méretű muráljai (utcai falfestményei) díszítik."]
    ,
      en: [
        "Piotrkowska Street spans approximately 4.2 kilometers, making it one of the longest pedestrianized shopping streets in the world.",
        "During the 19th-century industrial boom, the city's population skyrocketed from fewer than 1,000 residents in 1820 to over 300,000 by 1900.",
        "The Manufaktura complex, once a massive textile factory, covers 27 hectares and now serves as one of the largest shopping and arts centers in Central Europe.",
        "Łódź is home to one of Europe's largest Jewish cemeteries, established in 1892, which covers 40 hectares and contains over 180,000 graves.",
        "The city is located at the geographical heart of Poland, situated approximately 120 kilometers southwest of the capital, Warsaw."
      ]
    },
    image: "/geo-images/poland/lodz.webp",
  },
  {
    id: "katowice",
    type: "city",
    parent: "PL-SL",
    coords: [19.0238, 50.2649],
    name: { de: "Kattowitz", hu: "Katowice", ro: "Katowice", en: "Katowice" },
    description: {
      de: "Kattowitz (Katowice) ist die Hauptstadt der Woiwodschaft Schlesien in Südpolen. Sie wurde im 19. Jahrhundert gegründet und entwickelte sich zu einem wichtigen Industrie- und Kohlebergbauzentrum. Heute hat Kattowitz rund 285.000 Einwohner und ist das Zentrum der Metropole Metropolia GZM. Die Stadt hat den Übergang von der Schwerindustrie zu einer modernen Wirtschaft aus Dienstleistungen, IT und Kultur vollzogen. Sie ist bekannt für ihre modernistische Architektur und die Spodek-Arena.",
      hu: "Katowice a Sziléziai vajdaság fővárosa Dél-Lengyelországban. A 19. században alapították, és gyorsan jelentős ipari és szénbányászati központtá fejlődött. Ma Katowice lakossága körülbelül 285 000 fő, és a több mint 2 millió fős Sziléziai Metropolisz központja. A város a nehéziparról a szolgáltatásokra, az IT-re és a kultúrára épülő modern gazdaságra tért át. Modernista építészetéről és a Spodek arénáról ismert.",
      ro: "Katowice este capitala Voievodatului Silezia din sudul Poloniei. Fondat în secolul al XIX-lea, s-a dezvoltat rapid într-un centru industrial și de extracție a cărbunelui. Astăzi, Katowice are o populație de aproximativ 285.000 de locuitori și este centrul Metropolei Sileziene. Orașul a făcut tranziția de la industria grea la o economie modernă centrată pe servicii, IT și cultură. Este cunoscut pentru arhitectura sa modernistă și arena Spodek.",
      en: "Katowice is the capital city of the Silesian Voivodeship in southern Poland. Founded in the 19th century, it rapidly developed into a major industrial and coal mining hub. Today, Katowice has a population of around 285,000 and is the center of the Silesian Metropolis, which comprises over 2 million people. The city has transitioned from a heavy industry focus to a modern economy centered on services, IT, and culture. It is known for its modernist architecture and the Spodek arena.",
    },
    facts: {
      de: ["Hauptstadt der Woiwodschaft Schlesien.", "Zentrale Stadt der schlesischen Metropole.", "Historisch ein wichtiges Zentrum für Kohlebergbau und Stahlindustrie.", "Berühmt für die Mehrzweckarena Spodek.", "Hat sich in ein IT- und Dienstleistungszentrum verwandelt.", "Bekannt für seine modernistische Architektur.", "Heimat des Schlesischen Museums.", "Gastgeber des E-Sport-Turniers Intel Extreme Masters.", "Seit 2015 UNESCO City of Music.", "Beinhaltet die einzigartige historische Siedlung Nikiszowiec."],
      hu: ["A Sziléziai vajdaság fővárosa.", "A sziléziai metropolisz központi városa.", "Történelmileg jelentős szénbányászati és acélipari központ.", "Híres a Spodek többfunkciós arénáról.", "IT és szolgáltatási központtá alakult át.", "Modernista építészetéről ismert.", "A Sziléziai Múzeum otthona.", "Az Intel Extreme Masters e-sport verseny házigazdája.", "2015 óta UNESCO A zene városa.", "Itt található a különleges Nikiszowiec történelmi település."],
      ro: ["Capitala Voievodatului Silezia.", "Orașul central al metropolei Sileziene.", "Istoric, un centru major al extracției de cărbune și siderurgiei.", "Faimos pentru arena multifuncțională Spodek.", "S-a transformat într-un hub IT și de servicii.", "Cunoscut pentru arhitectura sa modernistă.", "Găzduiește Muzeul Sileziei.", "Găzduiește turneul de e-sports Intel Extreme Masters.", "Oraș al Muzicii UNESCO din 2015.", "Include așezarea istorică unică Nikiszowiec."],
      en: ["Capital of the Silesian Voivodeship.", "Central city of the Silesian metropolis.", "Historically a major coal mining and steel industry center.", "Famous for the Spodek multipurpose arena.", "Has transformed into an IT and services hub.", "Known for its modernist architecture.", "Home to the Silesian Museum.", "Hosts the Intel Extreme Masters e-sports tournament.", "UNESCO City of Music since 2015.", "Features the unique Nikiszowiec historical settlement."],
    },
    descriptionAdvanced: {
      hu: "Katowice a felső-sziléziai ipari agglomeráció lüktető szíve, amely az elmúlt évtizedekben Európa egyik leglátványosabb urbanisztikai átalakulásán ment keresztül. A füstös bányák és kohók egykori központjában ma gigantikus, modern üvegfelhőkarcolók, a Nemzeti Szimfonikus Zenekar (NOSPR) csodálatos új téglaépülete és a futurisztikus Spodek aréna dominálnak. A szénbányászat egykori területén kialakított Kultúra Zónája zseniálisan integrálja az indusztriális múltat (például a régi aknatornyokat) a modern, zöld közösségi terekkel. Katowice napjainkban a technológia, az e-sport és az IT-szektor egyik legfontosabb lengyelországi bázisa, 2015-ben pedig elnyerte az UNESCO Kreatív Városok (Zene) címét is. (Földrajz K8 — A nehézipar hanyatlása és az IT szektor térnyerése)"
    ,
      en: "Stepping into Katowice feels like witnessing a city’s soul reinvent itself. Once the soot-stained heart of Poland's industrial powerhouse, this Silesian capital has emerged from its coal-mining cocoon as a vibrant hub of culture and innovation. Wandering through the streets, the 'Silesian Modernism' style tells a tale of 20th-century ambition, while the iconic Spodek arena stands like a grounded UFO, symbolizing the city's futuristic outlook. The transformation is most evident in the Culture Zone, where former mine shafts now tower over world-class museums and concert halls. It is a place where the rhythmic pulse of heavy machinery has been replaced by the soaring melodies of the Polish National Radio Symphony Orchestra. This dramatic shift from a carbon-heavy past to a green, tech-driven future offers a masterclass in urban resilience and economic evolution. Geography K7 — industrial transformation and urban development."
    },
    factsAdvanced: {
      hu: ["A Spodek (Csészealj) aréna 1971-es megépítésekor a világ egyik legmodernebb mérnöki csodája volt egyedi, ferde kábeles tetőszerkezete miatt.", "A Nikiszowiec nevű városrész Európa egyik legjobb állapotban fennmaradt, eredeti 20. század eleji bányászkolóniája vöröstéglás épületekkel.", "Itt tartják évente az Intel Extreme Masters-t (IEM), a világ egyik legnagyobb e-sport világbajnokságát."]
    ,
      en: [
        "The Spodek arena, completed in 1971, can accommodate up to 11,500 people and is one of the first structures in the world to use the tensegrity principle.",
        "The Silesian Metropolis, of which Katowice is the center, is home to over 2.2 million inhabitants, making it the largest urban area in Poland.",
        "Katowice covers an area of approximately 164.6 square kilometers, with over 40% of its territory occupied by forests and green spaces.",
        "The city’s Nikiszowiec district, a historic coal-miners' settlement built between 1908 and 1918, consists of nine brick blocks and is recognized as a National Historic Monument.",
        "Katowice was designated as a UNESCO City of Music in 2015, becoming the first city in Central and Eastern Europe to join the Creative Cities Network in this category."
      ]
    },
    image: "/geo-images/poland/katowice.webp",
  },
  {
    id: "bialystok",
    type: "city",
    parent: "PL-PD",
    coords: [23.1688, 53.1325],
    name: { de: "Białystok", hu: "Białystok", ro: "Białystok", en: "Białystok" },
    description: {
      de: "Białystok ist die größte Stadt im Nordosten Polens und die Hauptstadt der Woiwodschaft Podlachien. Mit rund 295.000 Einwohnern ist sie die zehntgrößte Stadt des Landes. Białystok liegt in einem ökologisch sauberen Gebiet, das als 'Grüne Lunge Polens' bekannt ist. Die Stadt hat eine multikulturelle Geschichte und war der Geburtsort von L. L. Zamenhof, dem Erfinder des Esperanto. Sie beherbergt den wunderschönen Branicki-Palast, der oft als das 'Versailles des Nordens' bezeichnet wird.",
      hu: "Białystok Északkelet-Lengyelország legnagyobb városa és a Podlasiei vajdaság fővárosa. Mintegy 295 000 lakosával az ország tizedik legnagyobb városa. Białystok ökológiailag tiszta területen fekszik, amelyet 'Lengyelország zöld tüdejének' neveznek. A város multikulturális múltra tekint vissza, és itt született L. L. Zamenhof, az eszperantó nyelv megalkotója. Itt található a gyönyörű Branicki-palota, amelyet gyakran 'Észak Versailles-ának' neveznek.",
      ro: "Białystok este cel mai mare oraș din nord-estul Poloniei și capitala Voievodatului Podlasia. Cu o populație de aproximativ 295.000 de locuitori, este al zecelea oraș ca mărime din țară. Białystok se află într-o zonă ecologic curată, cu numeroase parcuri și păduri virgine în apropiere. Orașul are o istorie de multiculturalism și este locul de naștere al lui L.L. Zamenhof, creatorul limbajului Esperanto. Găzduiește frumosul Palat Branicki, adesea numit 'Versailles-ul Nordului'.",
      en: "Białystok is the largest city in northeastern Poland and the capital of the Podlaskie Voivodeship. With a population of roughly 295,000, it ranks as the tenth-largest city in the country. Białystok is located in an ecologically clean area, known as the 'Green Lungs of Poland', with numerous parks and nearby primeval forests. The city has a history of multiculturalism and was the birthplace of L. L. Zamenhof, the creator of Esperanto. It features the beautiful Branicki Palace, often called the 'Versailles of the North'.",
    },
    facts: {
      de: ["Größte Stadt im Nordosten Polens.", "Hauptstadt der Woiwodschaft Podlachien.", "Zehntgrößte Stadt in Polen.", "Liegt in der 'Grünen Lunge Polens'.", "Geburtsort von L. L. Zamenhof, dem Schöpfer des Esperanto.", "Der Branicki-Palast ist das berühmteste historische Wahrzeichen.", "Historisch ein Zentrum der Textilherstellung.", "Weist einen großen Anteil an Grünflächen innerhalb der Stadt auf.", "In der Nähe des Białowieża-Urwalds.", "Wichtiges kulturelles Zentrum für die belarussische Minderheit in Polen."],
      hu: ["Északkelet-Lengyelország legnagyobb városa.", "A Podlasiei vajdaság fővárosa.", "Lengyelország tizedik legnagyobb városa.", "A „Lengyelország zöld tüdeje” régióban található.", "L. L. Zamenhof, az eszperantó nyelv megalkotójának szülővárosa.", "A Branicki-palota a leghíresebb történelmi műemléke.", "Történelmileg a textilgyártás központja volt.", "A városban nagy arányban találhatók zöldterületek.", "A Białowieża-erdő közelében fekszik.", "A lengyelországi fehérorosz kisebbség fontos kulturális központja."],
      ro: ["Cel mai mare oraș din nord-estul Poloniei.", "Capitala Voievodatului Podlasia.", "Al zecelea cel mai mare oraș din Polonia.", "Situat în 'Plămânii Verzi ai Poloniei'.", "Locul de naștere al lui L. L. Zamenhof, creatorul limbii Esperanto.", "Palatul Branicki este cel mai faimos reper istoric.", "Istoric un centru al producției textile.", "Prezintă o mare proporție de spații verzi în oraș.", "Aproape de Pădurea Bialowieza.", "Centru cultural important pentru minoritatea belarusă din Polonia."],
      en: ["Largest city in northeastern Poland.", "Capital of the Podlaskie Voivodeship.", "Tenth-largest city in Poland.", "Located in the 'Green Lungs of Poland'.", "Birthplace of L. L. Zamenhof, the creator of Esperanto.", "Branicki Palace is its most famous historical landmark.", "Historically a center of textile manufacturing.", "Features a large proportion of green spaces within the city.", "Close to the Białowieża Primeval Forest.", "Important cultural center for the Belarusian minority in Poland."],
    },
    descriptionAdvanced: {
      hu: "Białystok Lengyelország északkeleti, erdőkkel borított és soknemzetiségű peremvidékének, a Podlasiei vajdaságnak a zöld és dinamikus fővárosa. A város építészeti és kulturális szempontból is egy hatalmas olvasztótégely, ahol a katolikus és az ortodox templomok kupolái békésen megférnek egymás mellett a városképben. Legpompásabb nevezetessége a 'lengyel Versailles-ként' emlegetett Branicki-palota, amely lenyűgöző barokk épületével és hatalmas, mértani precizitású francia kertjével a város kulturális központja. Białystok híres zöld területeiről, egyeteméről, és arról a nyelvészeti sokszínűségről, amely egykor L. L. Zamenhofot az eszperantó nyelv megalkotására inspirálta. (Történelem K7 — Barokk rezidenciák és a többnemzetiségű határvidék)"
    ,
      en: "As you step into Białystok, you are entering the vibrant heart of northeastern Poland, where the whispers of ancient forests meet the elegance of Baroque architecture. Known as the gateway to the 'Green Lungs of Poland,' the city serves as a launchpad for exploring the primeval Bialowieża Forest. Yet, the city itself is a treasure trove of history, dominated by the majestic Branicki Palace. This 'Versailles of the North' was once the center of a thriving multicultural community where Polish, Jewish, and Belarusian cultures intertwined, eventually inspiring Ludwik Zamenhof to create Esperanto. Today, the city seamlessly blends its rich textile-industry heritage with modern green spaces, offering a unique urban ecosystem that thrives in harmony with nature. Geography K7 — human impact on ecosystems and regional urban development."
    },
    factsAdvanced: {
      hu: ["A város lakosságának közel ötöde a lengyel ortodox egyházhoz tartozik, ami az országos átlagnál sokkal magasabb arány.", "Zamenhof a 19. századi Białystok utcáin tapasztalt etnikai és nyelvi súrlódások hatására alkotta meg a mesterséges, béketeremtő eszperantó nyelvet.", "A Branicki-palota a 18. században olyan híres volt, hogy udvarában Európa legkiválóbb művészei, költői és tudósai vendégeskedtek."]
    ,
      en: [
        "The Branicki Palace gardens and parkland cover an area of approximately 9.7 hectares, featuring meticulously restored 18th-century French and English style landscaping.",
        "Białystok is situated at an elevation of 160 meters above sea level and is characterized by its proximity to the Knyszyn Forest, which spans over 105,000 hectares.",
        "Founded in 1950, the Medical University of Białystok is housed within the Branicki Palace, supporting over 5,000 students across various medical disciplines.",
        "The city's landmark St. Roch's Church features a distinctive 78-meter tall tower, making it one of the tallest modernist religious structures in Poland.",
        "Białystok maintains roughly 1,846 hectares of green space within city limits, contributing to its reputation as a leader in urban ecology."
      ]
    },
    image: "/geo-images/poland/bialystok.webp",
  },
  {
    id: "torun",
    type: "city",
    parent: "PL-KP",
    coords: [18.5984, 53.0138],
    name: { de: "Thorn", hu: "Toruń", ro: "Toruń", en: "Toruń" },
    description: {
      de: "Toruń (Thorn) ist eine historische Stadt an der Weichsel im nördlichen Zentralpolen. Sie ist eine der beiden Hauptstädte der Woiwodschaft Kujawien-Pommern. Mit etwa 198.000 Einwohnern ist sie eine der ältesten Städte Polens, 1233 vom Deutschen Orden gegründet. Toruń ist als Geburtsort des Astronomen Nikolaus Kopernikus berühmt. Die gut erhaltene mittelalterliche Altstadt gehört zum UNESCO-Weltkulturerbe. Die Stadt ist auch für ihre traditionellen Lebkuchen bekannt.",
      hu: "Toruń történelmi város a Visztula folyó partján, Észak-Közép-Lengyelországban. A Kujávia-pomerániai vajdaság két fővárosának egyike. Mintegy 198 000 fős lakosságával Lengyelország egyik legrégebbi városa, amelyet a Német Lovagrend alapított 1233-ban. Toruń Kopernikusz csillagász szülővárosaként híres. Jól megőrzött középkori óvárosa az UNESCO Világörökség része. A város hagyományos mézeskalácsáról is nevezetes.",
      ro: "Toruń este un oraș istoric pe râul Vistula în centrul-nordul Poloniei. Este una dintre cele două capitale ale Voievodatului Cuiavia-Pomerania. Cu o populație de aproximativ 198.000 de locuitori, este unul dintre cele mai vechi orașe din Polonia. Toruń este faimos ca fiind locul de naștere al astronomului Nicolaus Copernic. Centrul său vechi medieval bine conservat este un sit al Patrimoniului Mondial UNESCO. Orașul este renumit și pentru turta dulce tradițională.",
      en: "Toruń is a historical city on the Vistula River in north-central Poland. It is one of the two capitals of the Kuyavian-Pomeranian Voivodeship. With a population of around 198,000, it is one of the oldest cities in Poland, having been established by the Teutonic Knights in 1233. Toruń is famous as the birthplace of the astronomer Nicolaus Copernicus. Its well-preserved medieval Old Town is a designated UNESCO World Heritage Site. The city is also renowned for its traditional gingerbread.",
    },
    facts: {
      de: ["Liegt an der Weichsel.", "Eine der Hauptstädte der Woiwodschaft Kujawien-Pommern.", "1233 vom Deutschen Orden gegründet.", "Geburtsort von Nikolaus Kopernikus.", "Die mittelalterliche Altstadt ist ein UNESCO-Weltkulturerbe.", "Berühmt für den traditionellen Lebkuchen (Thorner Kathrinchen).", "Blieb im Zweiten Weltkrieg von größeren Zerstörungen verschont.", "Verfügt über die Ruinen einer Deutschordensburg.", "Heimat der Nikolaus-Kopernikus-Universität.", "Bekannt für seine vielen originalen gotischen Gebäude."],
      hu: ["A Visztula folyó mentén található.", "A Kujávia-pomerániai vajdaság egyik fővárosa.", "A Német Lovagrend alapította 1233-ban.", "Kopernikusz szülőhelye.", "A középkori óváros az UNESCO Világörökség része.", "Híres a hagyományos mézeskalácsáról (pierniki).", "Megmenekült a jelentősebb pusztítástól a második világháborúban.", "Itt találhatók egy teuton lovagvár romjai.", "A Nicolaus Copernicus Egyetem otthona.", "Számos eredeti gótikus épületéről ismert."],
      ro: ["Situat pe râul Vistula.", "Una dintre capitalele Voievodatului Cuiavia-Pomerania.", "Înființat de Cavalerii Teutoni în 1233.", "Locul de naștere al lui Nicolaus Copernic.", "Orașul Vechi este un sit al Patrimoniului Mondial UNESCO.", "Faimos pentru turta dulce tradițională (pierniki).", "A scăpat de distrugeri semnificative în timpul celui de-al Doilea Război Mondial.", "Găzduiește ruinele unui castel teutonic.", "Sediul Universității Nicolaus Copernic.", "Cunoscut pentru clădirile sale gotice originale."],
      en: ["Located on the Vistula River.", "One of the capitals of the Kuyavian-Pomeranian Voivodeship.", "Established by the Teutonic Knights in 1233.", "Birthplace of Nicolaus Copernicus.", "Medieval Old Town is a UNESCO World Heritage Site.", "Famous for its traditional gingerbread (pierniki).", "Has escaped significant destruction during World War II.", "Features the ruins of a Teutonic Castle.", "Home to Nicolaus Copernicus University.", "Known for its many original Gothic buildings."],
    },
    descriptionAdvanced: {
      hu: "Toruń egy szinte tökéletesen érintetlen, vöröstéglás gótikus mese a Visztula folyó partján, amelyet a Német Lovagrend alapított a 13. században. Mivel a város csodával határos módon elkerülte a második világháború pusztításait, eredeti középkori utcaszerkezete, masszív várfalai és lenyűgöző gótikus templomai UNESCO Világörökségi védelmet élveznek. Toruń nevét világszerte ismertté tette leghíresebb szülötte, Nicolaus Copernicus (Mikołaj Kopernik), a zseniális csillagász, aki itt látta meg a napvilágot 1473-ban. A város másik híres védjegye a toruńi mézeskalács (pierniki), amelyet évszázados, titkos fűszerreceptek alapján sütnek, és a város számos kávézójában ma is megkóstolható. (Történelem K6 — Középkori lovagrendek, csillagászat és gótika)"
    ,
      en: "My journey through Toruń reveals a city that has masterfully stopped time while continuing to watch the heavens. The red-brick Gothic walls, established by the Teutonic Order in 1233, stand as silent guardians over the Vistula River. Walking these cobblestones, I can almost sense the presence of Nicolaus Copernicus, whose 1473 birth here changed our understanding of the universe forever. The atmosphere is sweetened by the aroma of 'pierniki', a spiced gingerbread tradition that has been perfected here since at least 1380. I found myself particularly fascinated by the Leaning Tower, which tilts 1.46 meters out of alignment, challenging local architects for centuries. History K8 — Medieval Europe and the Renaissance."
    },
    factsAdvanced: {
      hu: ["A város büszkesége a 'Ferde Torony', egy középkori bástya, amely a mocsaras talaj miatt majdnem másfél métert dőlt meg a függőlegestől.", "A toruńi városháza a közép-európai tégla-gótika egyik legmonumentálisabb, legnagyobb méretű polgári épülete.", "A régi legendák szerint az igazi toruńi mézeskalács tésztáját évekig kell pihentetni sütés előtt a tökéletes íz eléréséhez."]
    ,
      en: [
        "Toruń was founded in 1233 by the Teutonic Order, making it one of the oldest cities in Poland.",
        "The Old Town Hall, completed in 1391, features a 40-meter tall tower that offers panoramic views of the Vistula River.",
        "The Leaning Tower of Toruń tilts exactly 1.46 meters away from the vertical due to the loess soil it was built upon.",
        "Records from 1380 contain the first documented mention of Toruń's world-famous spiced gingerbread production.",
        "Nicolaus Copernicus, the astronomer who developed the heliocentric theory, was born here on February 19, 1473."
      ]
    },
    image: "/geo-images/poland/torun.webp",
  },
  {
    id: "czestochowa",
    type: "city",
    parent: "PL-SL",
    coords: [19.1203, 50.814],
    name: { de: "Tschenstochau", hu: "Częstochowa", ro: "Częstochowa", en: "Czestochowa" },
    description: {
      de: "Częstochowa (Tschenstochau) ist eine Stadt in Südpolen an der Warthe. Mit rund 214.000 Einwohnern ist sie die zweitgrößte Stadt der Woiwodschaft Schlesien. Die Stadt ist international bekannt für das berühmte Paulinerkloster Jasna Góra, das das Bild der Schwarzen Madonna beherbergt. Dies macht Częstochowa zu einem der wichtigsten christlichen Pilgerziele weltweit, das jährlich Millionen von Besuchern anzieht. Historisch gesehen war es auch ein Industriezentrum.",
      hu: "Częstochowa egy város Dél-Lengyelországban, a Warta folyó partján. Mintegy 214 000 lakosával a Sziléziai vajdaság második legnagyobb városa. A város nemzetközileg ismert a híres Jasna Góra-i pálos kolostorról, amely a Fekete Madonna festménynek ad otthont. Ez Częstochowát a világ egyik legfontosabb keresztény zarándokhelyévé teszi, amely évente több millió látogatót vonz. Történelmileg jelentős ipari központ is volt.",
      ro: "Częstochowa este un oraș din sudul Poloniei, situat pe râul Warta. Cu aproximativ 214.000 de locuitori, este al doilea oraș ca mărime din Voievodatul Silezia. Orașul este cunoscut la nivel internațional pentru faimoasa mănăstire paulină Jasna Góra, care adăpostește icoana Madonei Negre. Acest lucru face din Częstochowa una dintre cele mai importante destinații de pelerinaj creștin din lume, atrăgând anual milioane de vizitatori.",
      en: "Częstochowa is a city in southern Poland, located on the Warta River. With around 214,000 inhabitants, it is the second-largest city in the Silesian Voivodeship. The city is internationally known for the famous Pauline monastery of Jasna Góra, which houses the painting of the Black Madonna. This makes Częstochowa one of the most important Christian pilgrimage destinations globally, attracting millions of visitors annually. Historically, it has also been an industrial center.",
    },
    facts: {
      de: ["Liegt an der Warthe.", "Zweitgrößte Stadt der Woiwodschaft Schlesien.", "Heimat des Klosters Jasna Góra.", "Beherbergt das berühmte Gemälde der Schwarzen Madonna.", "Wichtiges weltweites christliches Pilgerziel.", "Zieht jedes Jahr Millionen von Pilgern an.", "Historisch ein wichtiges Zentrum der Metallindustrie.", "Verfügt über die lange, gerade Allee der Heiligen Jungfrau Maria.", "Spielt eine Schlüsselrolle während der Schwedischen Sintflut im 17. Jahrhundert.", "Teil des Krakau-Tschenstochauer Juras."],
      hu: ["A Warta folyó mentén található.", "A Sziléziai vajdaság második legnagyobb városa.", "A Jasna Góra kolostor otthona.", "A híres Fekete Madonna festmény őrzőhelye.", "Jelentős globális keresztény zarándokcélpont.", "Zarándokok millióit vonzza minden évben.", "Történelmileg a fémipar fontos központja.", "Itt található a hosszú, egyenes Szűz Mária sugárút.", "Kulcsszerepet játszott a 17. századi svéd özönvíz idején.", "A Krakkó-Częstochowa-hátság része."],
      ro: ["Situat pe râul Warta.", "Al doilea cel mai mare oraș din Voievodatul Silezia.", "Găzduiește mănăstirea Jasna Góra.", "Adăpostește faimosul tablou cu Madona Neagră.", "Destinație globală majoră de pelerinaj creștin.", "Atrage milioane de pelerini în fiecare an.", "Istoric un centru important pentru industria metalurgică.", "Prezintă bulevardul lung și drept al Sfintei Fecioare Maria.", "A jucat un rol cheie în timpul Potopului suedez din secolul al XVII-lea.", "Face parte din Podișul Cracovia-Częstochowa."],
      en: ["Located on the Warta River.", "Second-largest city in the Silesian Voivodeship.", "Home to the Jasna Góra Monastery.", "Houses the famous Black Madonna painting.", "Major global Christian pilgrimage destination.", "Attracts millions of pilgrims every year.", "Historically an important center for the metal industry.", "Features the long, straight Avenue of the Blessed Virgin Mary.", "Played a key role during the Swedish Deluge in the 17th century.", "Part of the Kraków-Częstochowa Upland."],
    },
    descriptionAdvanced: {
      hu: "Częstochowa a lengyel katolicizmus dobogó szíve, az ország vitathatatlan lelki és zarándokközpontja a Sziléziai vajdaság északi szélén. A várost a Jasna Góra-i (Fényes Hegy) pálos kolostor monumentális erődítménye uralja, amely évszázadok óta őrzi a csodatevő Fekete Madonna (Matka Boska Częstochowska) ikonját, Lengyelország legszentebb ereklyéjét. A kolostor az 1655-ös svéd invázió (az Özönvíz) során is hősiesen ellenállt a túlerőnek, ami a lengyel nemzeti túlélés és hit szimbólumává emelte az épületet. Az ipari múltjára is büszke városba ma évente több millió zarándok érkezik gyalogosan az ország minden szegletéből, különösen augusztus közepén. (Történelem K7 — Vallási központok és a lengyel nemzeti függetlenség)"
    ,
      en: "Nestled in the Silesian Highlands, Częstochowa reveals itself as more than just a destination; it is a profound journey into the spiritual soul of Poland. Dominated by the soaring 106-meter bell tower of the Jasna Góra Monastery, the city pulses with the rhythmic arrivals of millions who traverse vast distances on foot. Within the hallowed walls of the monastery, the revered Black Madonna icon serves as a beacon of national identity and resilience. Beyond its religious significance, Częstochowa boasts a rich industrial past and a vibrant cultural scene, with the wide Avenue of the Blessed Virgin Mary connecting the historic old town to the spiritual heights of the hill. This convergence of faith, history, and urban development creates a unique landscape of human geography. Geography K7 — human settlements and cultural landscapes."
    },
    factsAdvanced: {
      hu: ["A Fekete Madonna arcán lévő vágásnyomok a legenda szerint huszita rablók kardcsapásaitól származnak a 15. századból.", "A II. János Pál pápa (Karol Wojtyła) mélyen kötődött a kegyhelyhez, és pápasága alatt is többször meglátogatta.", "Częstochowa a zarándoklatok mellett a lengyel gyufagyártás és vasipar történelmi központja is volt a 19. században."]
    ,
      en: [
        "The bell tower of the Jasna Góra Monastery stands precisely 106.3 meters tall, making it one of the most prominent landmarks in the region.",
        "An estimated 4 to 5 million pilgrims visit the city annually, often participating in walking pilgrimages that cover hundreds of kilometers.",
        "During the Swedish invasion in 1655, known as The Deluge, a small garrison of 250 soldiers successfully defended the monastery against 3,000 Swedish troops for 40 days.",
        "The city encompasses an area of approximately 160 square kilometers and is situated at an elevation of 239 meters above sea level.",
        "The famous Black Madonna icon is housed in a chapel that features a magnificent silver and ebony altar dating back to 1650."
      ]
    },
    image: "/geo-images/poland/czestochowa.webp",
  },
  {
    id: "gdynia",
    type: "city",
    parent: "PL-PM",
    coords: [18.5305, 54.5189],
    name: { de: "Gdingen", hu: "Gdynia", ro: "Gdynia", en: "Gdynia" },
    description: {
      de: "Gdingen (Gdynia) ist eine Stadt in Nordpolen und ein wichtiger Seehafen an der Ostseeküste. Mit etwa 244.000 Einwohnern ist sie neben Danzig und Sopot Teil der Metropolregion Dreistadt. Ursprünglich ein kleines Fischerdorf, erlebte Gdingen nach dem Ersten Weltkrieg ein rasantes Wachstum. Es bietet modernistische Architektur, Sandstrände und zahlreiche Schifffahrtsmuseen. Die Stadt ist auch dafür bekannt, dass sie das Polnische Filmfestival ausrichtet.",
      hu: "Gdynia egy város Észak-Lengyelországban és jelentős tengeri kikötő a Balti-tenger partján. Körülbelül 244 000 fős lakosságával a Hármasváros agglomeráció része Gdańsk és Sopot mellett. Gdynia, amely eredetileg kis halászfalu volt, az első világháború után indult gyors fejlődésnek, amikor Lengyelország elsődleges tengeri kikötőjének választották. Modernista építészet, homokos strandok és számos tengerészeti múzeum jellemzi. A város a Lengyel Filmfesztivál házigazdájaként is ismert.",
      ro: "Gdynia este un oraș în nordul Poloniei și un port maritim major pe coasta Mării Baltice. Cu o populație de aproximativ 244.000 de locuitori, face parte din zona metropolitană Tricity alături de Gdańsk și Sopot. Inițial un mic sat de pescari, Gdynia a cunoscut o creștere rapidă după Primul Război Mondial. Prezintă arhitectură modernistă, plaje cu nisip și numeroase muzee maritime. Orașul este cunoscut și pentru găzduirea Festivalului de Film Polonez.",
      en: "Gdynia is a city in northern Poland and a major seaport on the Baltic Sea coast. With a population of about 244,000, it is part of the Tricity metropolitan area alongside Gdańsk and Sopot. Originally a small farming and fishing village, Gdynia experienced rapid growth after World War I when it was chosen as the site for Poland's primary seaport. It features modernistic architecture, sandy beaches, and numerous maritime museums. The city is also known for hosting the Polish Film Festival.",
    },
    facts: {
      de: ["Liegt an der Ostseeküste.", "Teil der Metropolregion Dreistadt.", "Wichtiger polnischer Seehafen, erbaut nach dem Ersten Weltkrieg.", "Entwickelte sich in den 1920er Jahren rasch aus einem kleinen Fischerdorf.", "Berühmt für seine modernistische Architektur.", "Austragungsort des jährlichen Polnischen Filmfestivals.", "Beherbergt die Museumsschiffe Dar Pomorza und ORP Błyskawica.", "Heimat des Emigrationsmuseums.", "Hat beliebte Sandstrände und eine Küstenpromenade.", "Wichtiges Wirtschafts- und Marinezentrum."],
      hu: ["A Balti-tenger partján található.", "A Hármasváros agglomeráció része.", "Az első világháború után épült jelentős lengyel tengeri kikötő.", "A 20-as években gyorsan fejlődött kis halászfaluból várossá.", "Híres modernista építészetéről.", "Az éves Lengyel Filmfesztivál házigazdája.", "Itt található a Dar Pomorza és az ORP Błyskawica múzeumhajó.", "A Kivándorlási Múzeum otthona.", "Népszerű homokos strandjai és parti sétánya van.", "Fontos gazdasági és haditengerészeti központ."],
      ro: ["Situat pe coasta Mării Baltice.", "Face parte din zona metropolitană Tricity.", "Port maritim major polonez construit după Primul Război Mondial.", "S-a dezvoltat rapid dintr-un mic sat de pescari în anii 1920.", "Faimos pentru arhitectura sa modernistă.", "Găzduiește anual Festivalul de Film Polonez.", "Include navele muzeu Dar Pomorza și ORP Błyskawica.", "Găzduiește Muzeul Emigrării.", "Are plaje cu nisip populare și o promenadă de coastă.", "Centru economic și naval important."],
      en: ["Located on the Baltic Sea coast.", "Part of the Tricity metropolitan area.", "Major Polish seaport built after World War I.", "Developed rapidly from a small fishing village in the 1920s.", "Famous for its modernist architecture.", "Hosts the annual Polish Film Festival.", "Features the Dar Pomorza and ORP Błyskawica museum ships.", "Home to the Emigration Museum.", "Has popular sandy beaches and a coastal promenade.", "Important economic and naval center."],
    },
    descriptionAdvanced: {
      hu: "Gdynia a Hármasváros agglomeráció (Gdańsk-Sopot-Gdynia) legfiatalabb és legmodernebb tagja, a balti-tengeri lengyel tengerészet és a modernista építészet ékköve. Az 1920-as évek elején, miután Lengyelország visszanyerte függetlenségét, de Gdańsk (Danzig) szabad városi státuszt kapott, a lengyel állam rekordidő alatt építette fel itt az ország új, saját tengeri kapuját egy apró halászfaluból. A belváros épületeit a tengerjáró hajók formái, a sima, fehér felületek és a jellegzetes kerek ablakok (okulusok) ihlették. Ma Gdynia nyüzsgő kompkikötő, haditengerészeti bázis, és a tengerparti életmód legmodernebb központja Lengyelországban. (Történelem K8 — A két világháború közötti urbanizáció és modernizmus)"
    ,
      en: "Stepping onto the shores of Gdynia feels like entering a living blueprint of 20th-century ambition. Once a quiet fishing village, this \"city from the sea\" transformed into a powerhouse of Polish maritime identity in just a few decades. As you wander along the Kościuszko Square, the salty Baltic breeze carries stories of the legendary destroyer ORP Błyskawica and the majestic tall ship Dar Pomorza. The city's skyline is a rare museum of modernist architecture, featuring sleek \"White City\" buildings that mimic the curves of great ocean liners. From its bustling seaport to the tranquil Orłowo cliffs, Gdynia represents a bold leap into modernity, blending industrial might with coastal beauty. It is a testament to how vision can reshape a coastline into a gateway for a nation. Geography K7 — coastal landforms and maritime industry."
    },
    factsAdvanced: {
      hu: ["A déli mólónál horgonyoz az ORP Błyskawica, a II. világháború egyik leghíresebb lengyel rombolója, ma már múzeumhajóként.", "Gdynia a lengyel filmművészet fontos központja is, itt rendezik az éves Lengyel Játékfilmfesztivált.", "Az itteni kikötő építését sokáig a világ egyik legnagyobb mérnöki projektjeként tartották számon az 1920-as években."]
    ,
      en: [
        "Gdynia was officially granted city rights on February 10, 1926, growing from a village of a few hundred to over 120,000 residents in just 13 years.",
        "The port of Gdynia features a breakwater system that is approximately 2.5 kilometers long, protecting one of the deepest harbors on the Baltic Sea.",
        "The city's highest natural vantage point, Kamienna Góra, rises 52 meters above sea level, offering a panoramic view of the harbor and the Gulf of Gdańsk.",
        "In 2023, the Port of Gdynia handled a record 28.2 million tons of cargo, solidifying its role as a critical logistics hub in Northern Europe.",
        "The Modernist Center of Gdynia, recognized for its unique 1920s and 30s architecture, covers an area of approximately 90 hectares."
      ]
    },
    image: "/geo-images/poland/gdynia.webp",
  },
  {
    id: "sopot",
    type: "city",
    parent: "PL-PM",
    coords: [18.5600, 54.4416],
    name: { de: "Sopot", hu: "Sopot", ro: "Sopot", en: "Sopot" },
    description: {
      de: "Sopot (Zoppot) ist ein Seebad in Ostpommern an der Südküste der Ostsee in Nordpolen. Mit etwa 35.000 Einwohnern ist es Teil der Metropolregion Dreistadt zusammen mit Danzig und Gdingen. Sopot ist ein wichtiges Heilbad und Touristenziel. Es verfügt über die längste Holzmole Europas, die 511,5 Meter in die Danziger Bucht hineinragt. Die Stadt ist auch berühmt für ihr Sopot International Song Festival, eine der größten derartigen Veranstaltungen in Europa.",
      hu: "Sopot egy tengerparti üdülőváros Kelet-Pomerániában, a Balti-tenger déli partján, Észak-Lengyelországban. Mintegy 35 000 fős lakosságával a Hármasváros agglomeráció része Gdańsk és Gdynia mellett. Sopot jelentős gyógyfürdő és turisztikai célpont. Itt található Európa leghosszabb mólója, amely 511,5 méter hosszan nyúlik be a Gdański-öbölbe. A város a Sopoti Nemzetközi Dalfesztiválról is híres, amely Európa egyik legnagyobb ilyen jellegű rendezvénye.",
      ro: "Sopot este un oraș-stațiune pe litoral în Pomerania de Est, pe coasta de sud a Mării Baltice din nordul Poloniei. Cu o populație de aproximativ 35.000 de locuitori, face parte din zona Tricity împreună cu Gdańsk și Gdynia. Sopot este o stațiune balneară și turistică majoră. Se mândrește cu cel mai lung dig de lemn din Europa, cu o lungime de 511,5 metri în Golful Gdańsk. Orașul este faimos și pentru Festivalul Internațional de Cântec de la Sopot.",
      en: "Sopot is a seaside resort city in Eastern Pomerania on the southern coast of the Baltic Sea in northern Poland. With a population of around 35,000, it is part of the Tricity metropolitan area along with Gdańsk and Gdynia. Sopot is a major health-spa and tourist resort destination. It boasts the longest wooden pier in Europe, extending 511.5 metres into the Bay of Gdańsk. The city is also famous for its Sopot International Song Festival, one of the largest such events in Europe.",
    },
    facts: {
      de: ["Seebad an der Ostsee.", "Kleinste Stadt in der Metropolregion Dreistadt.", "Wichtiges Kur- und Touristenziel.", "Heimat der längsten Seebrücke aus Holz in Europa.", "Berühmt für das Krumme Haus (Krzywy Domek).", "Austragungsort des Sopot International Song Festival.", "Bekannt für seine wunderschönen Sandstrände.", "Verfügt über das historische Grand Hotel.", "Hat ein pulsierendes Nachtleben und zahlreiche Restaurants.", "Liegt zwischen Danzig und Gdingen."],
      hu: ["Tengerparti üdülőhely a Balti-tengernél.", "A legkisebb város a Hármasváros agglomerációban.", "Jelentős gyógyfürdő és turisztikai célpont.", "Itt található Európa leghosszabb fa mólója.", "Híres a Görbe Házról (Krzywy Domek).", "A Sopoti Nemzetközi Dalfesztivál házigazdája.", "Gyönyörű homokos strandjairól ismert.", "Itt található a történelmi Grand Hotel.", "Nyüzsgő éjszakai élettel és számos étteremmel rendelkezik.", "Gdańsk és Gdynia között fekszik."],
      ro: ["Stațiune balneară la Marea Baltică.", "Cel mai mic oraș din zona metropolitană Tricity.", "Destinație majoră balneară și turistică.", "Găzduiește cel mai lung dig de lemn din Europa.", "Faimos pentru Casa Strâmbă (Krzywy Domek).", "Găzduiește Festivalul Internațional de Cântec Sopot.", "Cunoscut pentru plajele sale frumoase de nisip.", "Găzduiește istoricul Grand Hotel.", "Are o viață de noapte vibrantă și numeroase restaurante.", "Situat între Gdańsk și Gdynia."],
      en: ["Seaside resort on the Baltic Sea.", "Smallest city in the Tricity metropolitan area.", "Major health-spa and tourist destination.", "Home to the longest wooden pier in Europe.", "Famous for the Crooked House (Krzywy Domek).", "Hosts the Sopot International Song Festival.", "Known for its beautiful sandy beaches.", "Features the historic Grand Hotel.", "Has a vibrant nightlife and numerous restaurants.", "Located between Gdańsk and Gdynia."],
    },
    descriptionAdvanced: {
      hu: "Sopot a balti tengerpart 'Riviérája', Lengyelország legexkluzívabb és legkisebb, mégis leghíresebb fürdő- és üdülővárosa a Hármasváros szívében. Hírnevét a 19. század elején alapozta meg, amikor a tengerparti balneológia és a fürdőzés divatba jött az európai arisztokrácia körében. Legfőbb ékessége az 511 méter hosszú, fehérre festett fa móló, amely Európa leghosszabb ilyen építménye, és lenyűgöző panorámát nyújt a Balti-tengerre és a Gdanski-öbölre. A nyüzsgő Bohaterów Monte Cassino sétálóutca elegáns kávézóival, az ikonikus Grand Hotellel és az évente megrendezett zenei fesztiválokkal Sopot ma a lengyel nyári elit és a szórakozni vágyók fellegvára. (Földrajz K6 — A tengerparti turizmus története és fejlődése)"
    ,
      en: "Stepping onto the shores of Sopot feels like entering a living postcard from the Belle Époque. Nestled between the lush hills of the Tricity Landscape Park and the rhythmic waves of the Baltic Sea, this refined resort town exudes an elegance that has charmed travelers for centuries. Its crown jewel, the Molo, is a marvel of maritime architecture; walking its 511-meter length is like walking on water, offering a salty breeze that enthusiasts swear is richer in iodine than anywhere else on the coast. Beyond the beach, the vibrant Monte Cassino street beckons with the surrealist curves of the Crooked House, while the Forest Opera hidden in the trees resonates with the echoes of international melodies. Sopot is not just a summer getaway; it is a masterclass in urban planning and coastal ecology. Geography K7 — coastal landscapes and human impact on maritime environments."
    },
    factsAdvanced: {
      hu: ["A sétálóutcán álló 'Görbe Ház' (Krzywy Domek) modern, szürreális formáival a város egyik legtöbbet fotózott épülete.", "A Sopoti Nemzetközi Dalfesztivál a keleti blokk válasza volt az Eurovíziós Dalfesztiválra a kommunizmus évtizedeiben.", "Sopot az ország legzöldebb települései közé tartozik, területének több mint fele park, erdő és rekreációs zóna."]
    ,
      en: [
        "The Sopot Pier, or Molo, holds the title of Europe's longest wooden pier, stretching exactly 511.5 meters into the Bay of Gdańsk.",
        "The iconic Crooked House (Krzywy Domek), built in 2004, covers an area of approximately 4,000 square meters and was inspired by fairytale illustrations.",
        "The Forest Opera, an open-air amphitheater established in 1909, features a massive roof covering 4,500 square meters and can seat over 5,000 spectators.",
        "Sopot officially received its city rights in 1901, though its history as a premier health spa dates back to 1823 when Jean Georg Haffner built the first bathing facility.",
        "The city's sandy beach stretches for approximately 4.5 kilometers along the Baltic coast, reaching widths of up to 50 meters in some sections."
      ]
    },
    image: "/geo-images/poland/sopot.webp",
  },
  {
    id: "wawel",
    type: "landmark",
    parent: "krakow",
    coords: [19.9354, 50.0541],
    name: { de: "Wawel-Schloss", hu: "Wawel", ro: "Castelul Wawel", en: "Wawel Castle" },
    description: {
      de: "Das Wawel-Schloss ist eine Schlossresidenz im Zentrum von Krakau, Polen. Es wurde im Auftrag von König Kasimir III. dem Großen erbaut und besteht aus mehreren Gebäuden rund um einen Innenhof im italienischen Stil. Als eines der größten Schlösser Polens repräsentiert es fast alle europäischen Architekturstile des Mittelalters, der Renaissance und des Barock. Es ist Teil eines befestigten Architekturkomplexes auf einem Kalksteinfelsen am linken Weichselufer. Es ist eine der bedeutendsten historischen Stätten Polens.",
      hu: "A Wawel-kastély Krakkó központjában, Lengyelországban található rezidencia. Nagy Kázmér király megbízásából épült, és az olasz stílusú főudvar körül elhelyezkedő épületekből áll. A kastély, Lengyelország egyik legnagyobbja, a középkori, a reneszánsz és a barokk időszak szinte minden európai építészeti stílusát képviseli. A Visztula bal partján, egy mészkőhegyen épült erődített épületegyüttes része. Lengyelország egyik legjelentősebb történelmi helyszíne.",
      ro: "Castelul Wawel este o reședință de castel situată în centrul Cracoviei, Polonia. Construit la ordinul regelui Cazimir al III-lea cel Mare, este format dintr-o serie de structuri în jurul curții principale în stil italian. Fiind unul dintre cele mai mari din Polonia, castelul reprezintă aproape toate stilurile arhitecturale europene: medieval, renascentist și baroc. Face parte dintr-un complex arhitectural fortificat aflat pe o stâncă de calcar pe malul stâng al Vistulei. Este unul dintre cele mai semnificative situri istorice din Polonia.",
      en: "Wawel Castle is a castle residency located in central Kraków, Poland. Built at the behest of King Casimir III the Great, it consists of a number of structures situated around the Italian-styled main courtyard. The castle, being one of the largest in Poland, represents nearly all European architectural styles of medieval, renaissance and baroque periods. It is part of a fortified architectural complex perched atop a limestone outcrop on the left bank of the Vistula. It constitutes one of the most significant historical sites in Poland.",
    },
    facts: {
      de: ["Befindet sich in Krakau auf dem Wawelhügel.", "Überblickt die Weichsel.", "Ehemalige Residenz polnischer Könige.", "Repräsentiert mittelalterliche, Renaissance- und Barockarchitektur.", "Teil eines UNESCO-Weltkulturerbes.", "Beherbergt die Kronkammer und die Waffenkammer.", "Die angrenzende Wawel-Kathedrale ist die Grabstätte polnischer Monarchen.", "Die Legende des Wawel-Drachen ist mit einer Höhle unter dem Hügel verbunden.", "War jahrhundertelang ein Zentrum der polnischen Staatlichkeit.", "Eines der größten Schlösser in Polen."],
      hu: ["Krakkóban, a Wawel-dombon található.", "A Visztula folyóra néz.", "A lengyel királyok egykori rezidenciája.", "Középkori, reneszánsz és barokk építészeti stílusokat képvisel.", "Az UNESCO Világörökség része.", "Itt található a Koronakincstár és a Fegyvertár.", "A szomszédos Wawel-székesegyház a lengyel uralkodók temetkezési helye.", "A waweli sárkány legendája a domb alatti barlanghoz kötődik.", "Évszázadokon át a lengyel államiság központja volt.", "Lengyelország egyik legnagyobb kastélya."],
      ro: ["Situat în Cracovia, pe dealul Wawel.", "Oferă vedere la râul Vistula.", "Fosta reședință a regilor polonezi.", "Reprezintă stiluri arhitecturale medievale, renascentiste și baroce.", "Face parte dintr-un sit al Patrimoniului Mondial UNESCO.", "Găzduiește Trezoreria Coroanei și Armurăria.", "Catedrala adiacentă Wawel este locul de înmormântare al monarhilor.", "Legenda Dragonului Wawel este asociată cu o peșteră sub deal.", "A fost centrul statalității poloneze timp de secole.", "Unul dintre cele mai mari castele din Polonia."],
      en: ["Located in Kraków on Wawel Hill.", "Overlooks the Vistula River.", "Former residence of Polish kings.", "Represents medieval, Renaissance, and Baroque architectural styles.", "Part of a UNESCO World Heritage Site.", "Houses the Crown Treasury and Armory.", "The adjacent Wawel Cathedral is the burial site of Polish monarchs.", "Legend of the Wawel Dragon is associated with a cave beneath the hill.", "Was a center of Polish statehood for centuries.", "One of the largest castles in Poland."],
    },
    descriptionAdvanced: {
      hu: "A Wawel-domb Krakkó és egész Lengyelország legszentebb történelmi és politikai szimbóluma, amely a Visztula folyó fölé magasodva uralja a várost. Itt található a fenséges Királyi Palota és a Waweli Katedrális, amely a 11. és a 17. század között a lengyel királyok koronázó temploma és végső nyughelye volt. A reneszánsz stílusú, többszintes árkádos udvarral rendelkező palota a középkori és a kora újkori Európa egyik legpompásabb uralkodói rezidenciája volt, melynek falait ma is a híres, 16. századi flamand falikárpitok (arraszok) díszítik. A domb lábánál található mészkőbarlang a legenda szerint a Wawel rettegett sárkányának otthona volt, akit a ravasz Krak királyfi győzött le. (Történelem K6 — A lengyel királyság fénykora és a reneszánsz udvarok)"
    ,
      en: "Perched majestically atop a limestone outcrop overlooking the Vistula River, Wawel Castle serves as the definitive symbol of Polish national identity. For centuries, this architectural masterpiece was the political and cultural heart of the Kingdom of Poland, housing generations of monarchs within its eclectic walls. As you wander through the Italian-inspired Renaissance courtyard or descend into the mysterious Dragon’s Den beneath the hill, you are tracing the steps of kings and legendary beasts alike. The complex is a living timeline of European art, seamlessly blending Gothic spires with Baroque flourishes and a royal cathedral that holds the secrets of a thousand years. Today, it remains one of the world’s most prestigious art museums, showcasing priceless tapestries and royal regalia that survived the tumult of history. It is a mandatory stop for anyone wishing to touch the soul of Kraków. History K8 – European monarchies and architectural evolution."
    },
    factsAdvanced: {
      hu: ["A katedrálisban nyugszanak a legnagyobb lengyel hősök, köztük Tadeusz Kościuszko és Józef Piłsudski tábornagy.", "A Sigismund (Zygmuntowska) kápolna aranyszínű kupolája a firenzei mesterek keze munkáját dicséri, és a toszkán reneszánsz legszebb északi példája.", "A Waweli sárkány modern, tűzköpő szobra a domb lábánál az egyik legkedveltebb turistalátványosság a városban."]
    ,
      en: [
        "The castle's main courtyard features three tiers of Renaissance arcades, covering an area of approximately 3,000 square meters.",
        "Wawel Hill stands at an elevation of 228 meters above sea level, providing a strategic defensive position throughout history.",
        "The Royal Cathedral on the grounds houses the Sigismund Bell, which was cast in 1520 and weighs approximately 12.6 tonnes.",
        "The castle museum preserves the Szczerbiec, a 13th-century coronation sword measuring 98 centimeters in length.",
        "The entire fortified complex spans a total area of approximately 6 hectares atop the limestone outcrop."
      ]
    },
    image: "/geo-images/poland/wawel.webp",
  },
  {
    id: "rynek-glowny",
    type: "landmark",
    parent: "krakow",
    coords: [19.9373, 50.0617],
    name: { de: "Hauptmarkt", hu: "Főpiac", ro: "Piața Centrală", en: "Main Market Square" },
    description: {
      de: "Der Hauptmarkt in Krakau ist der wichtigste städtische Platz im Zentrum der Altstadt. Er stammt aus dem 13. Jahrhundert und ist der größte mittelalterliche Marktplatz Europas. Mit einer Größe von genau 200 mal 200 Metern ist er von historischen Bürgerhäusern und Kirchen umgeben. Die Mitte des Platzes wird von den Tuchhallen dominiert, die 1555 im Renaissance-Stil umgebaut wurden. Der Platz ist ein Mittelpunkt des gesellschaftlichen Lebens der Stadt.",
      hu: "A krakkói Főpiac az óváros központjában található legfőbb városi tér. A 13. századból származik, és Európa legnagyobb középkori főtere. Pontosan 200-szor 200 méteres, történelmi polgárházak és templomok veszik körül. A tér közepét a Posztócsarnok (Sukiennice) uralja, amelyet 1555-ben reneszánsz stílusban újjáépítettek, és faragott maszkokkal díszített gyönyörű attikával koronáztak meg. A tér a város társadalmi életének központja.",
      ro: "Piața Centrală din Cracovia este principalul spațiu urban situat în centrul Orașului Vechi. Datează din secolul al XIII-lea și este cea mai mare piață medievală din Europa. Măsurând exact 200 pe 200 de metri, este înconjurată de case și biserici istorice. Centrul pieței este dominat de Hala Postăvarilor, reconstruită în 1555 în stil renascentist. Piața este un punct central al vieții sociale a orașului și atrage numeroși turiști.",
      en: "The Main Market Square in Kraków is the principal urban space located at the center of the Old Town. It dates back to the 13th century and is the largest medieval town square in Europe. Measuring exactly 200 by 200 meters, it is surrounded by historic townhouses and churches. The center of the square is dominated by the Cloth Hall, rebuilt in 1555 in the Renaissance style, topped by a beautiful attic decorated with carved masks. The square is a focal point of the city's social life.",
    },
    facts: {
      de: ["Befindet sich im Zentrum der Krakauer Altstadt.", "Größter mittelalterlicher Marktplatz Europas.", "Misst 200 mal 200 Meter.", "Stammt aus dem 13. Jahrhundert.", "Dominiert von den Renaissance-Tuchhallen (Sukiennice) in der Mitte.", "Beherbergt den Rathausturm.", "Die Marienkirche befindet sich an einer Ecke.", "Ort wichtiger öffentlicher Veranstaltungen und Festivals.", "Teil eines UNESCO-Weltkulturerbes.", "Umgeben von historischen Bürgerhäusern und Palästen."],
      hu: ["Krakkó óvárosának központjában található.", "Európa legnagyobb középkori főtere.", "Mérete 200x200 méter.", "A 13. századból származik.", "A közepén a reneszánsz Posztócsarnok (Sukiennice) áll.", "Itt található a Városháza tornya.", "A Mária-templom az egyik sarkon helyezkedik el.", "Jelentős nyilvános események és fesztiválok helyszíne.", "Az UNESCO Világörökség része.", "Történelmi polgárházak és paloták veszik körül."],
      ro: ["Situat în centrul Orașului Vechi din Cracovia.", "Cea mai mare piață medievală din Europa.", "Măsoară 200 pe 200 de metri.", "Datează din secolul al XIII-lea.", "Dominată de Hala Postăvarilor (Sukiennice) în stil renascentist în centru.", "Include Turnul Primăriei.", "Bazilica Sf. Maria se află la un colț.", "Locul de desfășurare a evenimentelor și festivalurilor majore.", "Face parte dintr-un sit al Patrimoniului Mondial UNESCO.", "Înconjurat de case și palate istorice."],
      en: ["Located in the center of Kraków's Old Town.", "Largest medieval town square in Europe.", "Measures 200 by 200 meters.", "Dates back to the 13th century.", "Dominated by the Renaissance Cloth Hall (Sukiennice) in the center.", "Features the Town Hall Tower.", "St. Mary's Basilica is located at one corner.", "Site of major public events and festivals.", "Part of a UNESCO World Heritage Site.", "Surrounded by historic townhouses and palaces."],
    },
    descriptionAdvanced: {
      hu: "A Rynek Główny, vagyis a krakkói Főtér, Európa egyik legnagyobb, legimpozánsabb középkori piactere, amelyet 1257-ben, a tatárjárás utáni újjáépítéskor alakítottak ki. A 200x200 méteres, sakktáblaszerű utcahálózatba illeszkedő tér közepét a hatalmas Posztócsarnok (Sukiennice) uralja, amely a középkori Kelet-Európa egyik legfontosabb kereskedelmi bevásárlóközpontja volt. A tér sarkánál magasodik a fenséges, aszimmetrikus tornyokkal rendelkező Mária-templom (Kościół Mariacki), ahonnan óránként felhangzik a híres hejnał trombitaszó, amely mindig hirtelen szakad meg a tatár támadás emlékére. A tér nyüzsgő élete, hintói és galambjai a lengyel turizmus abszolút ikonjává teszik. (Történelem K6 — A középkori várostervezés és a kereskedelem csomópontjai)"
    ,
      en: "Stepping onto the stones of Kraków's Main Market Square feels like crossing a threshold into the heart of medieval Europe. This vast expanse, measuring exactly four hectares, has been the pulse of the city since 1257. As you walk past the arched galleries of the Renaissance Cloth Hall, you can almost hear the echoes of merchants trading spices and silk centuries ago. The surrounding burgher houses, each with its own legend, stand as silent witnesses to coronations and historic gatherings. Look up toward St. Mary's Basilica to hear the trumpet call that abruptly stops, a haunting tribute to the city's resilience. Whether you are following the Royal Route or sipping coffee in a hidden cellar, the square offers a living masterclass in urban planning and cultural heritage. History K8 — medieval trade and European urban development."
    },
    factsAdvanced: {
      hu: ["A Mária-templom belsejét Veit Stoss (Wit Stwosz) hatalmas, fából faragott szárnyasoltára uralja, amely a gótikus fafaragás csodája.", "A Főtér alatti hatalmas, modern interaktív múzeumban (Podziemia Rynku) a látogatók a középkori Krakkó eredeti utcaszintjén sétálhatnak.", "A Posztócsarnok árkádjai alatt a mai napig helyi kézművesek és borostyánárusok kínálják portékáikat."]
    ,
      en: [
        "The square was established in 1257 following the Mongol invasion, designed as a perfect 200 by 200-meter square.",
        "Beneath the surface lies a high-tech underground museum covering over 4,000 square meters of excavated medieval merchant stalls.",
        "The Cloth Hall at the center was once a major international trade hub and is approximately 108 meters long.",
        "St. Mary's Basilica features a 15th-century wooden altarpiece carved by Veit Stoss, which stands nearly 13 meters high.",
        "The square was included in the first-ever UNESCO World Heritage List in 1978 as part of Kraków's Historic Centre."
      ]
    },
    image: "/geo-images/poland/rynek.webp",
  },
  {
    id: "biebrza",
    type: "landmark",
    parent: "PL-PD",
    coords: [22.6000, 53.4000],
    name: { de: "Biebrza-Nationalpark", hu: "Biebrza Nemzeti Park", ro: "Parcul Național Biebrza", en: "Biebrza National Park" },
    description: {
      de: "Der Biebrza-Nationalpark ist ein Nationalpark in der Woiwodschaft Podlachien im Nordosten Polens, gelegen am Fluss Biebrza. Mit einer Fläche von 592,23 Quadratkilometern ist er der größte der 23 polnischen Nationalparks. Der Park umfasst streng geschützte, ausgedehnte Torfmoore, Sümpfe und das Flusstal der Biebrza. Er ist bekannt für seine reiche Tierwelt, insbesondere als Lebensraum für zahlreiche Vogelarten und eine große Elchpopulation. Die Feuchtgebiete sind in einem fast völlig natürlichen Zustand erhalten.",
      hu: "A Biebrza Nemzeti Park Lengyelország északkeleti részén, a Podlasiei vajdaságban, a Biebrza folyó mentén fekszik. A 23 lengyel nemzeti park közül a legnagyobb, 592,23 négyzetkilométeres területet ölel fel. A park szigorúan védett, kiterjedt tőzeglápokat, mocsarakat és a Biebrza folyó völgyét foglalja magában. Gazdag vadvilágáról híres, különösen a számos madárfaj élőhelyeként és a nagy jávorszarvas-populációjáról. A vizes élőhelyek szinte teljesen természetes állapotukban maradtak fenn.",
      ro: "Parcul Național Biebrza este un parc național din Voievodatul Podlasia, nord-estul Poloniei, situat de-a lungul râului Biebrza. Este cel mai mare dintre cele 23 de parcuri naționale din Polonia, acoperind o suprafață de 592,23 kilometri pătrați. Parcul cuprinde turbării extinse, mlaștini și valea râului Biebrza. Este renumit pentru fauna sa bogată, în special ca habitat pentru numeroase specii de păsări și o populație mare de elani. Zonele umede sunt păstrate într-o stare naturală.",
      en: "Biebrza National Park is a national park in Podlaskie Voivodeship, northeastern Poland, situated along the Biebrza River. It is the largest of Poland's 23 national parks, covering an area of 592.23 square kilometers. The park encompasses highly protected, extensive peat bogs, marshes, and the Biebrza River valley. It is renowned for its rich wildlife, particularly as a habitat for numerous bird species and a large population of moose. The wetlands are preserved in an almost completely natural state.",
    },
    descriptionAdvanced: {
      de: "Der Biebrza-Nationalpark liegt im Nordosten Polens und umfasst das weitläufige Flusstal der wild mäandernden Biebrza. Er ist der flächenmäßig größte Nationalpark des Landes und schützt eines der am besten erhaltenen und ausgedehntesten Torfmoor- und Sumpfgebiete Europas. Die schwer zugängliche und feuchte Landschaft bietet einen außergewöhnlichen Lebensraum für seltene Tierarten und macht die Region zu einer global bedeutenden Zuflucht für bedrohte Wasservögel. Besonders im Frühling, wenn der Fluss weite Teile des Tals überflutet, entfaltet die Natur hier eine unvergleichliche, fast dramatische Schönheit. Für Ökotouristen und Naturliebhaber gilt das Biebrza-Tal als unberührtes Paradies fernab der modernen Zivilisation.",
      hu: "",
      ro: "",
      en: "Imagine stepping onto the wooden boardwalks of the 'Red Marsh' early in the morning. The mist rises from the stagnant waters of the Biebrza River valley, where the silence is broken only by the haunting call of a crane or the heavy splash of a moose wading through the peat bogs. This is Poland’s 'Amazon,' a vast wilderness where time seems to stand still amidst one of the most extensive wetland complexes in Europe. As an explorer here, you navigate a mosaic of marshes and meadows that have remained virtually untouched for centuries. It is a vital sanctuary for the rare Aquatic Warbler and a stronghold for the European moose population. Protecting these carbon-rich peatlands is essential for global climate regulation and biodiversity. Geography K7 — ecosystems and wetland conservation."
    },
    factsAdvanced: {
      de: ["Der Nationalpark ist der größte in Polen und umfasst beinahe 60.000 Hektar.", "Es ist das wichtigste Schutzgebiet für den Elch in Mitteleuropa.", "Die Sumpflandschaften sind ein weltweit bekanntes Mekka für Ornithologen."],
      hu: [],
      ro: [],
      en: [
        "The park covers a total area of 592.23 square kilometers, making it the largest national park in Poland.",
        "It serves as a habitat for approximately 270 bird species, including the world-endangered Aquatic Warbler.",
        "The European moose population within the park boundaries is estimated at over 600 individuals.",
        "The Biebrza River flows through the park for a length of approximately 155 kilometers, creating a complex network of meanders.",
        "The park was officially established on September 9, 1993, to protect the last remaining extensive valley bogs in Central Europe."
      ]
    },
    facts: {
      de: ["Befindet sich im Nordosten Polens.", "Größter Nationalpark Polens.", "Umfasst eine Fläche von 592 Quadratkilometern.", "Liegt am Fluss Biebrza.", "Berühmt für seine ausgedehnten Torfmoore und Sümpfe.", "Ein äußerst wichtiger Lebensraum für Zugvögel.", "Heimat einer großen Population europäischer Elche.", "Verfügt über unberührte Feuchtgebiet-Ökosysteme.", "Beliebtes Ziel für Vogelbeobachtung und Kajakfahren.", "Als Ramsar-Gebiet von internationaler Bedeutung ausgewiesen."],
      hu: ["Északkelet-Lengyelországban található.", "Lengyelország legnagyobb nemzeti parkja.", "592 négyzetkilométeres területet fed le.", "A Biebrza folyó mentén fekszik.", "Kiterjedt tőzeglápjairól és mocsarairól híres.", "Nagyon fontos élőhely a vándormadarak számára.", "Jelentős európai jávorszarvas-populációnak ad otthont.", "Érintetlen vizes élőhely-ökoszisztémákkal rendelkezik.", "Népszerű célpont a madármegfigyelés és a kajakozás szerelmeseinek.", "Nemzetközi jelentőségű Ramsari területként van nyilvántartva."],
      ro: ["Situat în nord-estul Poloniei.", "Cel mai mare parc național din Polonia.", "Acoperă o suprafață de 592 de kilometri pătrați.", "Situat de-a lungul râului Biebrza.", "Faimos pentru turbăriile și mlaștinile sale întinse.", "Un habitat extrem de important pentru păsările migratoare.", "Găzduiește o populație mare de elani europeni.", "Prezintă ecosisteme de zone umede neatinse.", "Destinație populară pentru observarea păsărilor și caiac.", "Desemnat ca sit Ramsar de importanță internațională."],
      en: ["Located in northeastern Poland.", "Largest national park in Poland.", "Covers an area of 592 square kilometers.", "Situated along the Biebrza River.", "Famous for its extensive peat bogs and marshes.", "A highly important habitat for migratory birds.", "Home to a large population of European elks (moose).", "Features untouched wetland ecosystems.", "Popular destination for birdwatching and kayaking.", "Designated as a Ramsar site of international importance."],
    },
    image: "/geo-images/poland/biebrza.webp",
  },
  {
    id: "ojcow",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.8333, 50.2167],
    name: { de: "Ojców-Nationalpark", hu: "Ojcówi Nemzeti Park", ro: "Parcul Național Ojców", en: "Ojców National Park" },
    description: {
      de: "Der Nationalpark Ojców liegt im Süden Polens im Krakau-Tschenstochauer Jura. Er ist Polens kleinster Nationalpark und wurde 1956 gegründet. Der Park zeichnet sich durch dramatische Kalksteinklippen, tiefe Schluchten und über 400 Höhlen aus. Er beheimatet eine vielfältige Flora und Fauna, darunter zahlreiche Fledermausarten, sowie das markante Renaissance-Schloss Pieskowa Skała.",
      hu: "Az Ojcówi Nemzeti Park Dél-Lengyelországban, a Krakkó-Częstochowa-hátság területén található. Ez Lengyelország legkisebb nemzeti parkja, amelyet 1956-ban alapítottak. A parkot drámai mészkősziklák, szurdokok és több mint 400 barlang jellemzi. Változatos növény- és állatvilágnak ad otthont, köztük több denevérfajnak, emellett itt található a lenyűgöző Pieskowa Skała reneszánsz kastély is.",
      ro: "Parcul Național Ojców este situat în sudul Poloniei, în Podișul Cracovia-Częstochowa. Este cel mai mic parc național din Polonia, înființat în anul 1956. Parcul se caracterizează prin stânci dramatice de calcar, ravene și peste 400 de peșteri. Găzduiește o floră și faună diversă, inclusiv mai multe specii de lilieci, și include impresionantul castel renascentist Pieskowa Skała.",
      en: "Ojców National Park is located in southern Poland, within the Kraków-Częstochowa Upland. It is Poland's smallest national park, established in 1956. The park is characterized by its dramatic limestone cliffs, ravines, and over 400 caves. It is home to diverse flora and fauna, including several species of bats, and features the striking Renaissance Pieskowa Skała castle.",
    },
    descriptionAdvanced: {
      de: "Der Ojców-Nationalpark, vor den Toren Krakaus gelegen, ist zwar der kleinste Nationalpark Polens, doch besticht er durch eine bemerkenswert dramatische Landschaft. Das Jura-Gebirge prägt hier ein Tal, das tief in den weißen Kalkstein gegraben wurde und von steilen Klippen, bizarren Felsformationen und tiefen Höhlen gesäumt ist. Eine Besonderheit der Region ist die reiche Flora und Fauna, zu der seltene Fledermausarten zählen, die in den kühlen Tropfsteinhöhlen ideale Bedingungen vorfinden. Darüber hinaus ist der Park tief in die polnische Geschichte und Mythenwelt eingebettet, was durch alte Schlossruinen wie die Burg Ojców und Pieskowa Skała untermauert wird. Das dichte Netzwerk an Wander- und Radwegen macht ihn zu einem beliebten Ausflugsziel für Erholungssuchende aus der nahegelegenen Metropole.",
      hu: "",
      ro: "",
      en: "Tucked away in the Kraków-Częstochowa Upland, Ojców National Park is a pocket-sized wilderness that proves greatness isn't measured in hectares. As you wander through the misty Prądnik Valley, towering limestone monoliths like the iconic Hercules' Club rise from the earth like ancient guardians. The landscape is a masterpiece of karst erosion, riddled with over 400 mysterious caves that serve as a sanctuary for seventeen species of bats. Above the ravines, the Renaissance-era Pieskowa Skała Castle stands proudly, bridging the gap between natural wonder and human history. Whether you are peering into the depths of the King’s Cave or admiring the vertical white cliffs, the park feels like a portal to a prehistoric era. It is a living laboratory for those studying the delicate balance between geology and biodiversity. Geography K7 — karst topography and limestone landscapes."
    },
    factsAdvanced: {
      de: ["Das Symbol des Nationalparks ist die Fledermaus.", "Die berühmteste Felsformation des Parks ist die Keule des Herkules (Maczuga Herkulesa).", "König Władysław Ellenlang soll sich einst vor seinen Feinden in einer der Höhlen des Parks versteckt haben."],
      hu: [],
      ro: [],
      en: [
        "The park covers an area of only 21.46 square kilometers, making it the smallest of Poland's 23 national parks.",
        "Ojców is home to approximately 17 different species of bats, which are featured as the park's official symbol.",
        "The Hercules' Club is a remarkable 25-meter-high limestone monolith that stands as a lone pillar in the Prądnik Valley.",
        "The park protects over 1,000 species of vascular plants and 5,500 species of animals within its compact borders.",
        "Pieskowa Skała Castle, located on the park's northern edge, dates back to the 14th century as part of the Eagle Nests defensive chain."
      ]
    },
    facts: {
      de: ["Mit nur 21,46 Quadratkilometern ist er der kleinste Nationalpark Polens.", "Er wurde 1956 zum Schutz des Prądnik-Tals gegründet.", "Enthält über 400 bekannte Höhlen, deren längste die Łokietek-Höhle ist.", "Berühmt für einzigartige Kalksteinformationen wie die \"Maczuga Herkulesa\" (Herkuleskeule).", "Beherbergt die Burgruine Ojców und das gut erhaltene Schloss Pieskowa Skała.", "Heimat von 15 verschiedenen Fledermausarten, die das Symbol des Parks sind.", "Umfasst steile Schluchten und tiefe Täler, die vom Wasser geformt wurden.", "Besitzt eine reiche Artenvielfalt mit Tausenden Insektenarten und seltenen Pflanzen."],
      hu: ["Ez Lengyelország legkisebb nemzeti parkja, területe mindössze 21,46 négyzetkilométer.", "1956-ban hozták létre a Prądnik folyó völgyének védelmére.", "Több mint 400 ismert barlangja van, a leghosszabb a Łokietek-barlang.", "Olyan egyedi mészkőképződményekről híres, mint a \"Herkules bunkója\" (Maczuga Herkulesa).", "Itt található az ojcówi vár romja és a jó állapotban fennmaradt Pieskowa Skała kastély.", "15 denevérfajnak ad otthont, amelyek a park szimbólumai is egyben.", "Ősi vizek által kivájt meredek szurdokokat és mély völgyeket foglal magában.", "Gazdag biodiverzitással rendelkezik, több ezer rovarfaj és ritka növény található itt."],
      ro: ["Este cel mai mic parc național din Polonia, cu o suprafață de doar 21,46 kilometri pătrați.", "A fost înființat în 1956 pentru a proteja valea râului Prądnik.", "Conține peste 400 de peșteri cunoscute, cea mai lungă fiind Peștera lui Łokietek.", "Este faimos pentru formațiunile unice de calcar, precum \"Bâta lui Hercule\" (Maczuga Herkulesa).", "Include ruinele castelului gotic Ojców și castelul bine conservat Pieskowa Skała.", "Este habitatul a 15 specii diferite de lilieci, care sunt simbolul parcului.", "Cuprinde ravene abrupte și văi adânci sculptate de apele din vechime.", "Are o biodiversitate bogată, cu mii de specii de insecte și plante rare."],
      en: ["It is the smallest national park in Poland with an area of only 21.46 square kilometers.", "Established in 1956 to protect the Prądnik River Valley.", "Contains over 400 known caves, the longest being Łokietek's Cave.", "Famous for unique limestone rock formations like the \"Maczuga Herkulesa\" (Hercules' Club).", "Features the ruined Gothic Ojców Castle and the well-preserved Pieskowa Skała Castle.", "Home to 15 different bat species, which are the symbol of the park.", "Includes steep ravines and deep valleys carved by ancient waters.", "Has a rich biodiversity with thousands of insect species and rare plants."],
    },
    image: "/geo-images/poland/ojcow.webp",
  },
  {
    id: "wieliczka",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.0647, 49.9831],
    name: { de: "Salzbergwerk Wieliczka", hu: "Wieliczkai sóbánya", ro: "Salina Wieliczka", en: "Wieliczka Salt Mine" },
    description: {
      de: "Das Salzbergwerk Wieliczka nahe Krakau ist eines der ältesten in Betrieb befindlichen Salzbergwerke der Welt, das seit dem 13. Jahrhundert aktiv war. Es umfasst ein riesiges Labyrinth aus Tunneln, unterirdischen Seen und Kapellen, die von Bergleuten komplett aus Salz gehauen wurden. Das Bergwerk erreicht eine Tiefe von 327 Metern und erstreckt sich über 287 Kilometer. Im Jahr 1978 wurde es als eine der ersten Stätten in das UNESCO-Weltkulturerbe aufgenommen.",
      hu: "A Krakkó közelében található Wieliczkai sóbánya a világ egyik legrégebbi működő sóbányája, amely a 13. század óta üzemelt. Hatalmas alagútrendszer, földalatti tavak és a bányászok által kizárólag sóból kifaragott kápolnák jellemzik. A bánya eléri a 327 méteres mélységet, és hossza meghaladja a 287 kilométert. 1978-ban a világ legelső UNESCO világörökségi helyszínei közé választották.",
      ro: "Salina Wieliczka, situată lângă Cracovia, este una dintre cele mai vechi mine de sare din lume, activă din secolul al XIII-lea. Aceasta prezintă un vast labirint de tuneluri, lacuri subterane și multiple capele sculptate în întregime în sare de către mineri. Mina atinge o adâncime de 327 de metri și se extinde pe mai mult de 287 de kilometri. În 1978, a fost recunoscută drept unul dintre primele situri din Patrimoniul Mondial UNESCO.",
      en: "The Wieliczka Salt Mine, located near Kraków, is one of the world's oldest operating salt mines, active since the 13th century. It features a vast labyrinth of tunnels, underground lakes, and multiple chapels carved entirely out of salt by miners. The mine reaches a depth of 327 meters and extends over 287 kilometers. In 1978, it was recognized as one of the original UNESCO World Heritage Sites.",
    },
    descriptionAdvanced: {
      de: "Das Salzbergwerk Wieliczka nahe Krakau ist ein einzigartiges unterirdisches Meisterwerk und zählt zu den ältesten Salzminen der Welt, die kontinuierlich in Betrieb waren. Seit dem 13. Jahrhundert gruben Bergleute tiefe Schächte und schufen ein gewaltiges Labyrinth aus Stollen, das sich über hunderte Kilometer unter der Erde erstreckt. Was Wieliczka besonders faszinierend macht, ist die unglaubliche Kunstfertigkeit der Bergarbeiter, die im Laufe der Jahrhunderte prächtige Kapellen, Altäre und Skulpturen komplett aus Steinsalz gemeißelt haben. Die unterirdischen Salzseen und die beeindruckende Kapelle der Heiligen Kinga, beleuchtet von kunstvollen Salzkristall-Kronleuchtern, verleihen dem Ort eine magische Atmosphäre. Wieliczka repräsentiert einen unvergleichlichen Teil des polnischen Industrie- und Kulturerbes.",
      hu: "",
      ro: "",
      en: "Stepping into the Wieliczka Salt Mine is like entering a crystalline cathedral hidden beneath the Polish landscape. For over seven centuries, miners transformed this dark abyss into a breathtaking labyrinth of shimmering salt. As you descend hundreds of steps, the air grows cool and salty, leading to the crown jewel: St. Kinga’s Chapel. This subterranean masterpiece, where even the intricate chandeliers are fashioned from salt, reveals the profound artistry born from grueling labor. Beyond the chapels lie emerald underground lakes and vast chambers that once echoed with the sounds of medieval tools. This geological marvel serves as a living record of industrial evolution and human perseverance, preserved in a world of white gold. History K8 — industrial heritage and medieval trade."
    },
    factsAdvanced: {
      de: ["Das Bergwerk gehört zu den allerersten Stätten, die auf die UNESCO-Weltkulturerbeliste gesetzt wurden.", "Die Mine verfügt über neun Ebenen und reicht bis zu 327 Meter in die Tiefe.", "Das einzigartige Mikroklima in der Mine wird zur Behandlung von Atemwegserkrankungen genutzt."],
      hu: [],
      ro: [],
      en: [
        "The mine consists of nine levels, with the deepest point reaching 327 meters below the earth's surface.",
        "Over 700 years, miners carved more than 2,000 chambers and a network of tunnels stretching approximately 287 kilometers.",
        "St. Kinga's Chapel features salt-crystal chandeliers and intricate biblical reliefs carved entirely into the rock salt walls.",
        "The mine maintains a constant microclimate of 14 to 16 degrees Celsius, which is utilized for subterranean respiratory therapy.",
        "In 1978, it was recognized as one of the original 12 locations on the first-ever UNESCO World Heritage List."
      ]
    },
    facts: {
      de: ["Produzierte vom 13. Jahrhundert bis 2007 ununterbrochen Speisesalz.", "Eines der offiziellen nationalen historischen Denkmäler Polens (Pomniki historii).", "Die Kinga-Kapelle ist eine gewaltige unterirdische Kirche, die komplett aus Salz besteht.", "Enthält unterirdische Salzseen, die eine extrem hohe Dichte aufweisen.", "Die für Touristen zugängliche Route umfasst nur etwa 2 % der Gesamtlänge des Bergwerks.", "Zeigt Statuen historischer und mythischer Figuren, die aus Steinsalz geschnitzt wurden.", "Wird wegen seines einzigartigen Mikroklimas als unterirdischer Kurort genutzt.", "Zieht jährlich über eine Million Besucher aus der ganzen Welt an."],
      hu: ["A 13. századtól 2007-ig folyamatosan termelt asztali sót.", "Lengyelország egyik hivatalos nemzeti történelmi műemléke (Pomniki historii).", "A Szent Kinga-kápolna egy hatalmas földalatti templom, amely teljes egészében sóból épült.", "Hihetetlenül sűrű vizű, földalatti sós tavak találhatók benne.", "A turisták számára megnyitott útvonal a bánya teljes hosszának csak mintegy 2%-át fedi le.", "Kősóból faragott történelmi és mitikus alakok szobrait vonultatja fel.", "Egyedi mikroklímája miatt földalatti gyógyhelyként is használják.", "Évente több mint egymillió látogatót vonz a világ minden tájáról."],
      ro: ["A produs sare de masă continuu din secolul al XIII-lea până în 2007.", "Este unul dintre monumentele istorice naționale oficiale ale Poloniei (Pomniki historii).", "Capela Sf. Kinga este o biserică subterană masivă realizată integral din sare.", "Conține lacuri saline subterane cu o densitate a apei foarte ridicată.", "Traseul deschis turiștilor acoperă doar aproximativ 2% din lungimea totală a minei.", "Prezintă statui ale unor figuri istorice și mitologice sculptate în sare gemă.", "Este folosită ca stațiune balneară subterană datorită microclimatului său unic.", "Atrage anual peste un milion de vizitatori din întreaga lume."],
      en: ["Produced table salt continuously from the 13th century until 2007.", "One of Poland's official national Historic Monuments (Pomniki historii).", "The Chapel of St. Kinga is a massive underground church made entirely of salt.", "Contains underground saline lakes that are incredibly dense.", "The route open to tourists covers only about 2% of the mine's total length.", "Features statues of historical and mythical figures carved from rock salt.", "Used as an underground health resort due to its unique microclimate.", "Attracts more than one million visitors annually from around the world."],
    },
    image: "/geo-images/poland/wieliczka.webp",
  },
  {
    id: "auschwitz",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.2098, 50.0274],
    name: { de: "Auschwitz-Birkenau", hu: "Auschwitz-Birkenau", ro: "Auschwitz-Birkenau", en: "Auschwitz-Birkenau" },
    description: {
      de: "Auschwitz-Birkenau war das größte deutsche nationalsozialistische Konzentrations- und Vernichtungslager während des Zweiten Weltkriegs und befand sich im besetzten Polen. Zwischen 1940 und 1945 wurden hier über 1,1 Millionen Menschen, überwiegend Juden, systematisch ermordet. Der Komplex bestand aus drei Hauptlagern: Auschwitz I, Auschwitz II-Birkenau und Auschwitz III-Monowitz. Heute dient es als staatliches Museum und erschütternde Gedenkstätte für die Opfer des Holocaust.",
      hu: "Auschwitz-Birkenau volt a legnagyobb német náci koncentrációs és megsemmisítő tábor a második világháború alatt, amely a megszállt Lengyelország területén működött. 1940 és 1945 között több mint 1,1 millió embert, főként zsidókat gyilkoltak meg itt szisztematikusan. A komplexum három fő táborból állt: Auschwitz I, Auschwitz II-Birkenau és Auschwitz III-Monowitz. Ma állami múzeumként és a holokauszt áldozatainak megrázó emlékhelyeként szolgál.",
      ro: "Auschwitz-Birkenau a fost cel mai mare dintre lagărele de concentrare și exterminare germane naziste din timpul celui de-al Doilea Război Mondial, situat în Polonia ocupată. Între 1940 și 1945, peste 1,1 milioane de oameni, în mare parte evrei, au fost uciși aici în mod sistematic. Complexul consta din trei lagăre principale: Auschwitz I, Auschwitz II-Birkenau și Auschwitz III-Monowitz. Astăzi servește ca muzeu de stat și memorial cutremurător pentru victimele Holocaustului.",
      en: "Auschwitz-Birkenau was the largest of the German Nazi concentration and extermination camps during World War II, located in occupied Poland. Between 1940 and 1945, over 1.1 million people, mostly Jews, were systematically murdered here. The complex consisted of three main camps: Auschwitz I, Auschwitz II-Birkenau, and Auschwitz III-Monowitz. Today, it serves as a state museum and a sobering memorial to the victims of the Holocaust.",
    },
    descriptionAdvanced: {
      de: "Auschwitz-Birkenau im Süden Polens ist das weltweit wichtigste und bedrückendste Symbol für den Holocaust, den Völkermord und die unvorstellbaren Gräueltaten des Zweiten Weltkriegs. Das ehemalige deutsche Konzentrations- und Vernichtungslager wurde von den Nationalsozialisten im besetzten Polen errichtet, um ihre menschenverachtende Ideologie der systematischen Vernichtung umzusetzen. Heute fungiert das riesige Gelände, bestehend aus den Backsteinblöcken des Stammlagers und den weiten Feldern von Birkenau, als staatliches Museum und tief bewegende Gedenkstätte. Der Ort dient als Mahnmal für die über eine Million Menschen, hauptsächlich Juden, aber auch Polen, Roma und Sinti, die hier ermordet wurden. Ein Besuch in Auschwitz ist eine unverzichtbare, wenn auch schmerzhafte Lektion in Geschichte und ein ständiger Appell an die Menschlichkeit.",
      hu: "",
      ro: "",
      en: "Walking through the iron gates of Auschwitz-Birkenau is a profound journey into the darkest chapter of 20th-century history. Located near Oświęcim, this sprawling complex stands as the ultimate symbol of the Holocaust. Visitors often start at Auschwitz I, the original administrative center, before moving to the haunting expanse of Birkenau, where the sheer scale of the barracks and ruins of the gas chambers reveal the industrial nature of the Nazi atrocities. Preserved as a silent witness, the site now functions as a memorial and museum, housing personal items that tell the tragic stories of those who never returned. It serves as a stark reminder of the consequences of hatred and the importance of human rights. History K8 — the Second World War and the Holocaust."
    },
    factsAdvanced: {
      de: ["Auschwitz-Birkenau war das größte der deutschen Vernichtungslager.", "Das Stammlager Auschwitz I und das Vernichtungslager Auschwitz II-Birkenau sind für Besucher zugänglich.", "Das Gelände ist seit 1979 offiziell ein UNESCO-Weltkulturerbe."],
      hu: [],
      ro: [],
      en: [
        "The Auschwitz-Birkenau State Museum covers approximately 191 hectares of land across two main sites.",
        "Historians estimate that 1.1 million people were murdered at the camp between 1940 and 1945.",
        "The museum archives preserve approximately 110,000 pairs of shoes and 3,800 suitcases belonging to victims.",
        "The site was officially inscribed on the UNESCO World Heritage List in 1979.",
        "At its peak, the Birkenau section contained over 300 wooden and brick buildings."
      ]
    },
    facts: {
      de: ["Das Lager wurde im Mai 1940 auf dem Gelände ehemaliger polnischer Armeekasernen errichtet.", "Etwa 1,1 Millionen Menschen wurden hier ermordet, davon waren 90 % Juden.", "Auschwitz II-Birkenau wurde 1941 eigens als Vernichtungslager erbaut.", "Der berüchtigte Schriftzug \"Arbeit macht frei\" befindet sich über dem Tor von Auschwitz I.", "Das Lager wurde am 27. Januar 1945 von der sowjetischen Roten Armee befreit.", "Die Stätte wurde 1979 zum UNESCO-Weltkulturerbe erklärt, um das Andenken der Opfer zu ehren.", "Zu den Opfern zählten Polen, Roma, sowjetische Kriegsgefangene und andere Nationalitäten.", "Das Staatliche Museum Auschwitz-Birkenau bewahrt die Anlage und die verbliebenen Artefakte."],
      hu: ["A tábort 1940 májusában hozták létre egykori lengyel katonai laktanyák területén.", "Körülbelül 1,1 millió embert öltek meg itt, akiknek 90%-a zsidó volt.", "Az Auschwitz II-Birkenau tábort 1941-ben építették, kifejezetten megsemmisítő táborként.", "A hírhedt \"Arbeit macht frei\" (A munka szabaddá tesz) felirat az Auschwitz I kapuja felett található.", "A tábort a szovjet Vörös Hadsereg szabadította fel 1945. január 27-én.", "A helyszín 1979-ben UNESCO világörökségi státuszt kapott az áldozatok emlékére.", "Az áldozatok között voltak lengyelek, romák, szovjet hadifoglyok és más nemzetiségek is.", "Az Auschwitz-Birkenau Állami Múzeum őrzi a területet és a megmaradt tárgyi emlékeket."],
      ro: ["Lagărul a fost înființat în mai 1940 pe locul unor foste barăci ale armatei poloneze.", "Aproximativ 1,1 milioane de oameni au fost uciși aici, dintre care 90% erau evrei.", "Auschwitz II-Birkenau a fost construit în 1941 special ca lagăr de exterminare.", "Faimosul semn \"Arbeit macht frei\" (Munca te eliberează) se află la poarta Auschwitz I.", "A fost eliberat de Armata Roșie sovietică la 27 ianuarie 1945.", "Situl a devenit parte a Patrimoniului Mondial UNESCO în 1979 pentru a onora memoria victimelor.", "Printre victime s-au numărat polonezi, romi, prizonieri de război sovietici și alte naționalități.", "Muzeul de Stat Auschwitz-Birkenau conservă situl și artefactele rămase."],
      en: ["The camp was established in May 1940 on the site of former Polish army barracks.", "Approximately 1.1 million people were killed here, 90% of whom were Jewish.", "Auschwitz II-Birkenau was constructed in 1941 specifically as a death camp.", "The infamous \"Arbeit macht frei\" (Work sets you free) sign is at the Auschwitz I gate.", "It was liberated by the Soviet Red Army on January 27, 1945.", "The site became a UNESCO World Heritage Site in 1979 to honor the memory of the victims.", "Victims included Poles, Romani people, Soviet prisoners of war, and other nationalities.", "The Auschwitz-Birkenau State Museum preserves the site and remaining artifacts."],
    },
    image: "/geo-images/poland/auschwitz.webp",
  },
  {
    id: "tatra",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.9495, 49.2992],
    name: { de: "Tatra-Gebirge", hu: "Tátra", ro: "Munții Tatra", en: "Tatra Mountains" },
    description: {
      de: "Die Tatra ist ein Gebirge, das eine natürliche Grenze zwischen der Slowakei und Polen bildet. Sie ist der höchste Gebirgszug der Karpaten. Die Region bietet spektakuläre alpine Landschaften mit schroffen Gipfeln, tiefen Tälern und Gletscherseen wie dem Morskie Oko. Es ist in beiden Ländern ein äußerst beliebtes Ziel für Wanderungen, Wintersport und Naturtourismus.",
      hu: "A Tátra egy hegység, amely természetes határt képez Szlovákia és Lengyelország között. Ez a Kárpátok legmagasabb hegyvonulata. A régió látványos alpesi tájakkal, köztük éles csúcsokkal, mély völgyekkel és olyan gleccsertavakkal büszkélkedhet, mint a Halastó (Morskie Oko). Mindkét országban rendkívül népszerű célpont a túrázás, a téli sportok és a természetjárás szerelmeseinek.",
      ro: "Munții Tatra formează un lanț muntos care reprezintă o graniță naturală între Slovacia și Polonia. Este cel mai înalt lanț muntos din Munții Carpați. Regiunea prezintă peisaje alpine spectaculoase, cu piscuri ascuțite, văi adânci și lacuri glaciare precum Morskie Oko. Este o destinație extrem de populară pentru drumeții, sporturi de iarnă și turism în natură în ambele țări.",
      en: "The Tatra Mountains form a mountain range that acts as a natural border between Slovakia and Poland. They are the highest mountain range in the Carpathian Mountains. The region features spectacular alpine landscapes, including sharp peaks, deep valleys, and glacial lakes like Morskie Oko. It is a highly popular destination for hiking, winter sports, and nature tourism in both countries.",
    },
    descriptionAdvanced: {
      de: "Das Tatra-Gebirge bildet eine natürliche Grenze zwischen Polen und der Slowakei und stellt den höchsten und markantesten Teil der Karpaten dar. Diese alpine Landschaft ist geprägt von majestätischen, spitzen Granitgipfeln, tiefen Gletschertälern und glasklaren Bergseen wie dem berühmten Morskie Oko. Die Natur ist ungezähmt und beherbergt eine reiche Wildtierpopulation, darunter Braunbären, Murmeltiere und Gämsen, die in den steilen Hängen leben. Die starke Highlander-Kultur der Góralen verleiht der Region, insbesondere rund um das Zentrum Zakopane, eine einzigartige folkloristische Identität, die sich in traditioneller Holzbaukunst, Musik und herzhafter Küche manifestiert. Für Alpinisten, Skifahrer und Wanderer ist die polnische Tatra das unbestrittene Mekka des Landes.",
      hu: "",
      ro: "",
      en: "Imagine standing at the foot of the High Tatras, where the jagged granite peaks pierce the clouds like the spine of some ancient, slumbering dragon. This alpine wonderland, straddling the border of Poland and Slovakia, offers more than just breathtaking vistas; it is a sanctuary of biodiversity and geological drama. As you trek towards the emerald waters of Morskie Oko, the \"Eye of the Sea,\" the air grows crisp with the scent of dwarf pines. This region is the only alpine-type massif in the entire Carpathian arc, shaped by ancient glaciers that carved deep, dramatic cirques and valleys. From the elusive Tatra chamois to the majestic golden eagle, the wilderness here feels untouched by time. Whether you are conquering the summit of Rysy or exploring the mysterious caves of the Kościeliska Valley, the Tatras command reverence. Geography K7 — Mountain landscapes and glacial geomorphology."
    },
    factsAdvanced: {
      de: ["Der Rysy ist mit 2.499 Metern der höchste Berg Polens.", "Die Flora der Tatra umfasst viele endemische Arten, die nirgendwo sonst auf der Welt vorkommen.", "Zakopane wird als die „Winterhauptstadt Polens“ bezeichnet."],
      hu: [],
      ro: [],
      en: [
        "Rysy is the highest peak in Poland, reaching an elevation of 2,499 meters above sea level.",
        "The Tatra Mountains cover an area of approximately 785 square kilometers, with about 175 square kilometers located within Poland.",
        "There are over 200 glacial lakes in the Tatras, with Morskie Oko being the largest, covering nearly 35 hectares.",
        "Wielka Śnieżna is the deepest and longest cave in the Tatras, extending to a depth of 824 meters and a length of over 23 kilometers.",
        "The Tatra National Park in Poland protects over 10,000 species of plants and animals, including the rare Tatra chamois and brown bear."
      ]
    },
    facts: {
      de: ["Der höchste Gipfel im polnischen Teil ist der Rysy mit 2.499 Metern über dem Meeresspiegel.", "Das Gebirge teilt sich auf die Slowakei (knapp 80 %) und Polen (gut 20 %) auf.", "Geschützt durch den Tatra-Nationalpark, ein UNESCO-Biosphärenreservat.", "Beherbergt den Morskie Oko (Meerauge), den größten und vierttiefsten See der Tatra.", "Zakopane am Fuß des Gebirges ist als Winterhauptstadt Polens bekannt.", "Lebensraum für endemische Wildtiere wie die Tatra-Gämse und Alpenmurmeltiere.", "Braunbären, Eurasische Luchse und Wölfe leben in den dichten Wäldern der unteren Lagen.", "Bietet Hunderte von Kilometern markierter Wander- und Skipisten."],
      hu: ["A lengyel rész legmagasabb csúcsa a Tengerszem-csúcs (Rysy), 2499 méteres tengerszint feletti magassággal.", "A hegységen Szlovákia (közel 80%) és Lengyelország (több mint 20%) osztozik.", "A Tátrai Nemzeti Park, egy UNESCO bioszféra-rezervátum védi a területét.", "Itt található a Halastó (Morskie Oko), a Tátra legnagyobb és negyedik legmélyebb tava.", "A hegyek lábánál fekvő Zakopane Lengyelország téli fővárosaként ismert.", "Olyan endemikus állatfajoknak ad otthont, mint a tátrai zerge és a havasi mormota.", "Barna medvék, eurázsiai hiúzok és farkasok élnek az alsóbb régiók sűrű erdeiben.", "Több száz kilométernyi kijelölt túra- és síútvonalat kínál."],
      ro: ["Cel mai înalt vârf din partea poloneză este Rysy, având 2.499 metri deasupra nivelului mării.", "Lanțul muntos este împărțit între Slovacia (aproape 80%) și Polonia (peste 20%).", "Este protejat de Parcul Național Tatra, o rezervație a biosferei UNESCO.", "Include Morskie Oko, cel mai mare și al patrulea cel mai adânc lac din Munții Tatra.", "Zakopane, situat la baza munților, este cunoscut drept capitala de iarnă a Poloniei.", "Găzduiește animale sălbatice endemice, cum ar fi capra neagră din Tatra și marmota alpină.", "Urșii bruni, râșii eurasiatici și lupii populează pădurile dense de la poale.", "Oferă sute de kilometri de trasee marcate pentru drumeții și schi."],
      en: ["The highest peak in the Polish part is Rysy, at 2,499 meters above sea level.", "The mountain range is shared between Slovakia (nearly 80%) and Poland (over 20%).", "Protected by the Tatra National Park, a UNESCO biosphere reserve.", "Features Morskie Oko, the largest and fourth-deepest lake in the Tatra Mountains.", "Zakopane, located at the base of the mountains, is known as Poland's winter capital.", "Home to endemic wildlife such as the Tatra chamois and Alpine marmots.", "Brown bears, Eurasian lynx, and wolves inhabit the dense forests of the lower ranges.", "Offers hundreds of kilometers of marked hiking and skiing trails."],
    },
    image: "/geo-images/poland/tatra.webp",
  },
  {
    id: "malbork",
    type: "landmark",
    parent: "PL-PM",
    coords: [19.0275, 54.0392],
    name: { de: "Marienburg", hu: "Malbork vára", ro: "Castelul Malbork", en: "Malbork Castle" },
    description: {
      de: "Die Marienburg (Malbork) ist, gemessen an der Grundfläche, die größte Burg der Welt und ein Meisterwerk der mittelalterlichen Backsteinarchitektur. Sie wurde im 13. Jahrhundert vom Deutschen Orden in Preußen erbaut und diente als Hauptsitz ihres Staates. Der weitläufige Komplex an der Nogat besteht aus drei separaten Burgen, die von Wehrmauern umschlossen sind. Sie ist ein UNESCO-Weltkulturerbe und eines der beeindruckendsten historischen Denkmäler Polens.",
      hu: "A Malborki vár alapterületét tekintve a világ legnagyobb vára, és a középkori téglaépítészet egyik remekműve. A teuton lovagok építették a 13. században Poroszországban, és az államuk központjaként szolgált. A Nogat folyó mentén elterülő hatalmas komplexum három különálló, védőfalakkal körülvett várból áll. UNESCO világörökségi helyszín és Lengyelország egyik leglenyűgözőbb történelmi műemléke.",
      ro: "Castelul Malbork este cel mai mare castel din lume ca suprafață și o capodoperă a arhitecturii medievale din cărămidă. Construit în Prusia de Cavalerii Teutoni în secolul al XIII-lea, a servit drept sediu al statului lor. Complexul vast de pe râul Nogat constă din trei castele separate, înconjurate de ziduri de apărare. Este un sit al Patrimoniului Mondial UNESCO și unul dintre cele mai impresionante monumente istorice ale Poloniei.",
      en: "Malbork Castle is the largest castle in the world measured by land area and a masterpiece of medieval brick architecture. Built in Prussia by the Teutonic Knights in the 13th century, it served as the headquarters of their state. The sprawling complex on the Nogat River consists of three separate castles enclosed by defensive walls. It is a UNESCO World Heritage Site and one of Poland's most impressive historical monuments.",
    },
    descriptionAdvanced: {
      de: "Die Marienburg (Malbork) liegt majestätisch am Ufer der Nogat im Norden Polens und ist die größte Backsteinburg der Welt. Im 13. Jahrhundert vom Deutschen Orden erbaut, diente die gewaltige Festungsanlage als Sitz des Hochmeisters und als Machtzentrum des Ordensstaates in Europa. Die Architektur besticht durch ihre wehrhafte und gleichzeitig kunstvolle gotische Bauweise, die sich in drei Hauptbereiche unterteilt: das Hoch-, Mittel- und Vorburgareal. Die Burg war lange Zeit nahezu uneinnehmbar und demonstrierte den enormen militärischen und wirtschaftlichen Reichtum der Kreuzritter. Heute ist die präzise restaurierte Burg ein faszinierendes Museum, das Besucher in die geheimnisvolle und oft brutale Zeit des Mittelalters zurückversetzt.",
      hu: "",
      ro: "",
      en: "As you approach the banks of the Nogat River, the horizon is dominated by the colossal red-brick towers of Malbork Castle, a true titan of medieval engineering. Stepping through its formidable gates feels like crossing a threshold back to the 13th century when the Teutonic Knights established their headquarters. This sprawling fortress, constructed from millions of hand-molded bricks, isn't just a single castle but a sophisticated triple-layered complex of the High, Middle, and Low Castles. Walking through the Grand Master's Palace, one can almost hear the echoes of crusader footsteps and clanking armor. The intricate vaulted ceilings and ingenious underfloor heating systems showcase a level of sophistication that was centuries ahead of its time. Today, this UNESCO site stands as a testament to the power of the Monastic State and the legacy of Gothic architecture. History K8 — medieval states and crusader orders."
    },
    factsAdvanced: {
      de: ["Die Marienburg ist flächenmäßig die größte Burganlage der Welt.", "Die Anlage wurde aus geschätzt über 30 Millionen Backsteinen errichtet.", "Seit dem Jahr 1997 gehört die Marienburg zum UNESCO-Weltkulturerbe."],
      hu: [],
      ro: [],
      en: [
        "The castle covers an area of approximately 143,591 square meters, making it the largest castle in the world by land area.",
        "Construction required an estimated 30 million to 50 million handmade bricks, meticulously laid over nearly two centuries.",
        "During the 14th century, the castle's population peaked at roughly 3,000 residents, including knights, squires, and servants.",
        "The fortress complex features defensive walls stretching over 5 kilometers in length, encircling the three distinct sections.",
        "Malbork Castle was designated as a UNESCO World Heritage Site in 1997 as a masterpiece of Gothic brick architecture."
      ]
    },
    facts: {
      de: ["Sie ist die größte jemals in Europa erbaute Backsteinburg.", "Wurde ab dem späten 13. Jahrhundert in Etappen vom Deutschen Orden errichtet.", "Die polnische Krone übernahm die Burg 1457 während des Dreizehnjährigen Krieges.", "Im Zweiten Weltkrieg stark beschädigt, wurde sie über Jahrzehnte akribisch restauriert.", "Der Komplex erstreckt sich über eine beeindruckende Fläche von mehr als 21 Hektar.", "Ist unterteilt in das Hoch-, Mittel- und Vorburgareal.", "Beherbergt außergewöhnliche Sammlungen von Bernstein-Artefakten und mittelalterlichen Rüstungen.", "Wurde 1997 als UNESCO-Weltkulturerbe anerkannt."],
      hu: ["Ez a valaha épült legnagyobb téglavár Európában.", "A 13. század végétől kezdve, szakaszosan építette a Német Lovagrend.", "A lengyel korona 1457-ben, a tizenhárom éves háború során vette át az irányítást a vár felett.", "A második világháború során súlyosan megrongálódott, több évtized alatt gondosan restaurálták.", "A komplexum lenyűgöző, több mint 21 hektáros területet foglal el.", "Felsővárra, Középső várra és Alsóvárra oszlik.", "Kivételes borostyántárgy- és középkori páncélgyűjteményeknek ad otthont.", "1997-ben az UNESCO világörökség részévé nyilvánították."],
      ro: ["Este cel mai mare castel din cărămidă construit vreodată în Europa.", "A fost construit în etape începând de la sfârșitul secolului al XIII-lea de către Ordinul Teutonic.", "Coroana poloneză a preluat controlul castelului în 1457, în timpul Războiului de Treisprezece Ani.", "Grav avariat în timpul celui de-al Doilea Război Mondial, a fost restaurat cu meticulozitate timp de decenii.", "Complexul acoperă o suprafață impresionantă de peste 21 de hectare.", "Este împărțit în Castelul de Sus, Castelul de Mijloc și Castelul de Jos.", "Găzduiește colecții excepționale de artefacte din chihlimbar și armuri medievale.", "A fost recunoscut ca sit al Patrimoniului Mondial UNESCO în 1997."],
      en: ["It is the largest brick castle ever built in Europe.", "Constructed in stages starting in the late 13th century by the Teutonic Order.", "The Polish crown took control of the castle in 1457 during the Thirteen Years' War.", "Heavily damaged during World War II, it was meticulously restored over several decades.", "The complex covers an impressive area of over 21 hectares (52 acres).", "Divided into the High Castle, Middle Castle, and Lower Castle.", "Houses exceptional collections of amber artifacts and medieval armor.", "Recognized as a UNESCO World Heritage Site in 1997."],
    },
    image: "/geo-images/poland/malbork.webp",
  },
  {
    id: "bialowieza",
    type: "landmark",
    parent: "PL-PD",
    coords: [23.8300, 52.7000],
    name: { de: "Białowieża-Urwald", hu: "Białowieża-erdő", ro: "Pădurea Białowieża", en: "Białowieża Forest" },
    description: {
      de: "Der Białowieża-Urwald ist eines der letzten und größten verbliebenen Gebiete des riesigen Urwalds, der sich einst über die Europäische Tiefebene erstreckte. Er erstreckt sich über die Grenze zwischen Polen und Belarus und ist ein UNESCO-Weltkulturerbe sowie Biosphärenreservat. Der Wald ist berühmt als Heimat des schwersten Landtiers Europas, des Wisents. Der strenge Schutz des Gebiets ermöglicht es Wissenschaftlern, natürliche ökologische Prozesse ohne nennenswerte menschliche Eingriffe zu studieren.",
      hu: "A Białowieża-erdő az európai síkságon egykor végighúzódó hatalmas őserdő egyik utolsó és legnagyobb megmaradt része. A Lengyelország és Fehéroroszország határán átnyúló terület az UNESCO világörökség része és bioszféra-rezervátum. Az erdő híres arról, hogy Európa legnehezebb szárazföldi állatának, az európai bölénynek ad otthont. A terület szigorú védelme lehetővé teszi a tudósok számára, hogy jelentős emberi beavatkozás nélkül tanulmányozzák a természetes ökológiai folyamatokat.",
      ro: "Pădurea Białowieża este una dintre ultimele și cele mai mari părți rămase din imensa pădure primordială care se întindea odată pe Câmpia Europeană. Traversând granița dintre Polonia și Belarus, este un sit al Patrimoniului Mondial UNESCO și o rezervație a biosferei. Pădurea este renumită pentru că adăpostește cel mai greu animal de uscat din Europa, zimbrul european. Protecția strictă a zonei permite oamenilor de știință să studieze procesele ecologice naturale fără interferențe umane semnificative.",
      en: "Białowieża Forest is one of the last and largest remaining parts of the immense primeval forest that once stretched across the European Plain. Spanning the border between Poland and Belarus, it is a UNESCO World Heritage Site and Biosphere Reserve. The forest is famously home to Europe's heaviest land animal, the European bison. The strict protection of the area allows scientists to study natural ecological processes without significant human interference.",
    },
    descriptionAdvanced: {
      de: "Der Białowieża-Urwald im äußersten Osten Polens ist das letzte verbliebene Stück der weiten Urwälder, die einst ganz Europa bedeckten. Dieses unberührte Naturjuwel, das sich über die Grenze nach Belarus erstreckt, zeichnet sich durch gigantische, jahrhundertealte Bäume und eine dichte, oft mystische Atmosphäre aus. Die Isolation und der lange andauernde Schutz als königliches und zaristisches Jagdrevier halfen dabei, die ursprüngliche Artenvielfalt bis in die Moderne zu retten. Das absolute Highlight des Waldes ist der freilebende Europäische Wisent, der hier vor dem Aussterben gerettet wurde und majestätisch durch das Unterholz streift. Die tiefe Stille und die wilde Schönheit von Białowieża bieten Forschern und Naturfreunden ein unvergleichliches Erlebnis von unberührter Natur.",
      hu: "",
      ro: "",
      en: "Deep within the heart of the European Plain lies a living relic of a prehistoric era: the Białowieża Forest. As I step beneath the canopy of ancient oaks and towering lindens, the air feels heavier, saturated with the history of ten millennia. This is the last vestige of the lowland primeval forest that once blanketed the entire continent. Here, nature follows its own rhythm, undisturbed by the modern world. The iconic European bison, once on the brink of extinction, reigns as king among the ferns. Wandering these trails is like entering a sanctuary where ecological processes remain pure and unyielding. The sheer biodiversity, from rare fungi to centuries-old trees, makes it a critical laboratory for understanding our planet's botanical heritage. (Geography K7 — Ecosystems and Biodiversity)"
    },
    factsAdvanced: {
      de: ["Białowieża beherbergt die größte freilebende Wisentpopulation der Welt.", "Der polnische Teil des Waldes gehört zum UNESCO-Weltnaturerbe.", "Der streng geschützte Kernbereich darf nur mit lizenzierten Naturführern betreten werden."],
      hu: [],
      ro: [],
      en: [
        "The forest covers an area of approximately 1,418 square kilometers across the border of Poland and Belarus.",
        "It is home to over 800 European bison, representing the world's largest free-roaming population of this species.",
        "Scientists have identified more than 12,000 species of animals and over 1,000 species of vascular plants within the reserve.",
        "The strict protection zone of the national park has been closed to major human exploitation since the year 1921.",
        "The oldest oaks in the forest can reach heights of up to 40 meters and live for more than 400 years."
      ]
    },
    facts: {
      de: ["Er erstreckt sich über die Grenze zwischen Polen und Belarus.", "Seit 1979 als UNESCO-Weltkulturerbe anerkannt.", "Stellt einen Überrest der riesigen alten Wälder dar, die einst Europa bedeckten.", "Heimat der größten freilebenden Population von Wisenten (żubr).", "Enthält jahrhundertealte Eichen, von denen einige eigene Namen tragen.", "Auf der polnischen Seite durch den Białowieża-Nationalpark geschützt.", "Besitzt ein unglaublich vielfältiges Ökosystem mit über 12.000 Tierarten.", "Teile des strengen Reservats können nur mit einem lizenzierten Führer besucht werden."],
      hu: ["Lengyelország és Fehéroroszország határán terül el.", "1979 óta az UNESCO világörökség része.", "Az Európát egykor borító hatalmas ősi erdők maradványát képviseli.", "A legnagyobb szabadon kószáló európai bölénypopuláció (żubr) otthona.", "Évszázados tölgyfák találhatók itt, amelyek közül néhány saját nevet is visel.", "A lengyel oldalon a Białowieżai Nemzeti Park védi.", "Hihetetlenül változatos ökoszisztémával rendelkezik, több mint 12 000 állatfajjal.", "A szigorúan védett rezervátum egyes részei csak engedéllyel rendelkező vezetővel látogathatók."],
      ro: ["Se întinde pe granița dintre Polonia și Belarus.", "Recunoscută ca sit al Patrimoniului Mondial UNESCO din 1979.", "Reprezintă o rămășiță a vastelor păduri antice care acopereau cândva Europa.", "Găzduiește cea mai mare populație de zimbri europeni (żubr) în libertate.", "Conține stejari seculari, unii având propriile nume.", "Protejată de Parcul Național Białowieża pe partea poloneză.", "Are un ecosistem incredibil de divers, cu peste 12.000 de specii de animale.", "Părți ale Rezervației Stricte pot fi vizitate doar cu un ghid licențiat."],
      en: ["It straddles the border between Poland and Belarus.", "Recognized as a UNESCO World Heritage Site since 1979.", "Represents a remnant of the vast ancient forests that once covered Europe.", "Home to the largest free-roaming population of European bison (żubr).", "Contains centuries-old oak trees, some with their own names.", "Protected by the Białowieża National Park on the Polish side.", "Has an incredibly diverse ecosystem with over 12,000 animal species.", "Parts of the Strict Reserve can only be visited with a licensed guide."],
    },
    image: "/geo-images/poland/bialowieza.webp",
  },
  {
    id: "mazury",
    type: "landmark",
    parent: "PL-WN",
    coords: [21.5000, 53.8000],
    name: { de: "Masurische Seenplatte", hu: "Mazuri-tóhátság", ro: "Districtul Lacurilor Mazuriene", en: "Masurian Lake District" },
    description: {
      de: "Die Masurische Seenplatte ist eine atemberaubende Region im Nordosten Polens mit mehr als 2.000 Seen, die durch Flüsse und Kanäle verbunden sind. Die durch eiszeitliche Gletscher entstandene Gegend ist reich an Naturschönheiten und dichten Kiefernwäldern. Sie ist ein erstklassiges Ziel für Segel-, Kajak- und Angelbegeisterte. Historische Sehenswürdigkeiten wie die Wolfsschanze (Hitlers Hauptquartier während des Krieges) ziehen ebenfalls Besucher an.",
      hu: "A Mazuri-tóhátság egy lenyűgöző régió Északkelet-Lengyelországban, amely több mint 2000, folyók és csatornák által összekötött tavat foglal magába. A pleisztocén jégkorszaki gleccserek által formált terület bővelkedik természeti szépségekben és sűrű fenyőerdőkben. Kiváló célpont a vitorlázás, a kajakozás és a horgászat szerelmeseinek. Olyan történelmi nevezetességek is vonzzák ide a látogatókat, mint a Farkasodú (Hitler háborús főhadiszállása).",
      ro: "Districtul Lacurilor Mazuriene este o regiune impresionantă din nord-estul Poloniei, ce conține peste 2.000 de lacuri conectate prin râuri și canale. Formată de ghețarii din epoca de gheață a Pleistocenului, zona este bogată în frumuseți naturale și păduri dense de pin. Este o destinație de top pentru pasionații de navigație, caiac și pescuit. Obiectivele istorice, cum ar fi Bârlogul Lupului (sediul lui Hitler din timpul războiului), atrag de asemenea vizitatori.",
      en: "The Masurian Lake District is a stunning region in northeastern Poland containing more than 2,000 lakes connected by rivers and canals. Formed by Pleistocene ice age glaciers, the area is rich in natural beauty and dense pine forests. It is a premier destination for sailing, kayaking, and fishing enthusiasts. Historical landmarks, such as the Wolf's Lair (Hitler's wartime headquarters), also attract visitors to the region.",
    },
    descriptionAdvanced: {
      de: "Die Masurische Seenplatte erstreckt sich als ein weitläufiges blau-grünes Mosaik über den Nordosten Polens. Mit mehr als 2.000 Seen, die durch Flüsse, idyllische Kanäle und dichte Wälder miteinander verwoben sind, bildet sie eine atemberaubende Wasserlandschaft. Geografisch durch eiszeitliche Gletscher geformt, bietet Masuren heute ein unvergleichliches Refugium für Naturliebhaber, Segler und Wassersportler. Die kulturelle Identität der Region wurde durch jahrhundertelange preußische Herrschaft geprägt, die kleine rote Backsteindörfer, gotische Kirchen und verfallene Ordensburgen in der Landschaft hinterließ. Wer Stille, unendliche Weite und einen sternenklaren Nachthimmel fernab der Zivilisation sucht, wird in der masurischen Wildnis fündig.",
      hu: "",
      ro: "",
      en: "Imagine gliding through the mist of dawn on Lake Śniardwy, the sprawling \"Masurian Sea.\" The Masurian Lake District isn't just a collection of water; it's a vast labyrinth of over 2,000 glacial basins carved into the Polish landscape by the retreating ice of the Pleistocene epoch. Dense primeval forests of pine and oak frame the horizon, where rare European bison and cormorants find sanctuary. Navigating the historic 19th-century Elbląg Canal, travelers witness a unique engineering marvel where boats are transported over land on mechanical slipways. Beyond the natural splendor, the region whispers tales of the Teutonic Knights and the dark shadows of the Wolf's Lair bunkers. This \"Land of a Thousand Lakes\" offers a profound intersection of crystalline waters, glacial geomorphology, and resilient local culture, inviting every modern explorer to lose themselves in its rhythmic, watery pulse. Geography K7 — glacial landforms and hydrological systems."
    },
    factsAdvanced: {
      de: ["Die Masurische Seenplatte zählte zu den Finalisten der Wahl der Neuen 7 Naturwunder.", "Der Śniardwy (Spirdingsee) ist das größte Binnengewässer der Region und Polens.", "Die Krutynia gilt als eine der schönsten Kanurouten Europas."],
      hu: [],
      ro: [],
      en: [
        "Lake Śniardwy is the largest lake in Poland, covering a total surface area of approximately 113.8 square kilometers.",
        "The region contains more than 2,000 lakes that were primarily formed by glacial movements over 10,000 years ago.",
        "The Elbląg Canal utilizes a unique system of 5 inclined planes to transport boats over land to overcome a 100-meter elevation difference.",
        "The Masurian Landscape Park encompasses roughly 53,000 hectares of protected forests, wetlands, and water bodies.",
        "The Wolf's Lair historical site once featured 80 heavily reinforced concrete bunkers that served as a secret military headquarters."
      ]
    },
    facts: {
      de: ["Besteht aus über 2.000 miteinander verbundenen Seen.", "Der größte See Polens, Śniardwy, befindet sich hier.", "Die Region wurde während der pleistozänen Eiszeit durch Gletscher geformt.", "Ein beliebtes Zentrum für Segeln, Kanufahren und Angeln.", "Verbunden durch ein historisches Kanalsystem, einschließlich des Elbląg-Kanals.", "Enthält die Ruinen der Wolfsschanze, Adolf Hitlers Hauptquartier im Zweiten Weltkrieg.", "Heimat einer vielfältigen Vogelwelt, darunter Weißstörche, Kormorane und Schwäne.", "Wurde als einer der 28 Finalisten der Kampagne New7Wonders of Nature gewählt."],
      hu: ["Több mint 2000, egymással összeköttetésben lévő tóból áll.", "Itt található Lengyelország legnagyobb tava, a Śniardwy.", "A régiót a pleisztocén jégkorszak idején gleccserek formálták.", "A jachtozás, kenuzás és horgászat népszerű központja.", "Történelmi csatornarendszer köti össze, beleértve az Elbląg-csatornát is.", "Itt találhatók a Farkasodú, Adolf Hitler második világháborús főhadiszállásának romjai.", "Változatos madárvilágnak ad otthont, többek között fehér gólyáknak, kárókatonáknak és hattyúknak.", "A New7Wonders of Nature (A Természet 7 Új Csodája) kampány 28 döntőse közé választották."],
      ro: ["Constă din peste 2.000 de lacuri interconectate.", "Cel mai mare lac din Polonia, Śniardwy, se află aici.", "Regiunea a fost modelată de ghețari în timpul epocii de gheață a Pleistocenului.", "Un centru popular pentru iahting, canotaj și pescuit sportiv.", "Conectat printr-un sistem istoric de canale, inclusiv Canalul Elbląg.", "Conține ruinele Bârlogului Lupului, sediul lui Adolf Hitler în al Doilea Război Mondial.", "Găzduiește o diversitate de păsări, inclusiv berze albe, cormorani și lebede.", "A fost votat ca unul dintre cei 28 de finaliști în campania New7Wonders of Nature."],
      en: ["Consists of over 2,000 interconnected lakes.", "The largest lake in Poland, Śniardwy, is located here.", "The region was shaped by glaciers during the Pleistocene ice age.", "A popular hub for yachting, canoeing, and angling.", "Connected by a historic system of canals, including the Elbląg Canal.", "Contains the ruins of the Wolf's Lair, Adolf Hitler's World War II headquarters.", "Home to diverse birdlife, including white storks, cormorants, and swans.", "Voted as one of the 28 finalists in the New7Wonders of Nature campaign."],
    },
    image: "/geo-images/poland/mazury.webp",
    },
    {
    id: "stare-miasto-warszawa",
    type: "landmark",
    parent: "warsaw",
    coords: [21.0122, 52.2477],
    name: { de: "Warschauer Altstadt", hu: "Varsói óváros", ro: "Orașul Vechi Varșovia", en: "Warsaw Old Town" },
    description: {
      de: "Die Warschauer Altstadt ist der älteste Teil der Hauptstadt, bekannt für ihre bunten Bürgerhäuser, gepflasterten Gassen und den malerischen Marktplatz. Während des Warschauer Aufstands 1944 fast vollständig zerstört, wurde sie anhand historischer Aufzeichnungen und, wo möglich, originaler Ziegelsteine akribisch rekonstruiert. Dieser beispiellose Wiederaufbau nach dem Krieg brachte ihr 1980 einen Platz auf der UNESCO-Weltkulturerbeliste ein. Das Königsschloss steht stolz am Eingang zur Altstadt.",
      hu: "Varsó óvárosa a főváros legrégebbi része, amely színes bérházairól, macskaköves sikátorairól és festői piacteréről ismert. Az 1944-es varsói felkelés során szinte teljesen elpusztult, de történelmi feljegyzések és eredeti téglák felhasználásával aprólékosan újjáépítették. Ez a példátlan háború utáni helyreállítás 1980-ban helyet biztosított számára az UNESCO világörökségi listáján. A királyi vár büszkén áll az óváros bejáratánál.",
      ro: "Orașul Vechi din Varșovia este cea mai veche parte a capitalei, renumit pentru casele sale colorate, aleile pietruite și Piața pitorească. Distrus aproape în întregime în timpul Revoltei din Varșovia din 1944, a fost reconstruit cu meticulozitate folosind înregistrări istorice și cărămizi originale acolo unde a fost posibil. Această restaurare postbelică fără precedent i-a adus un loc pe lista Patrimoniului Mondial UNESCO în 1980. Castelul Regal se înalță mândru la intrarea în Orașul Vechi.",
      en: "Warsaw Old Town is the oldest part of the capital city, renowned for its colorful tenement houses, cobblestone alleys, and the picturesque Market Square. Almost entirely destroyed during the Warsaw Uprising in 1944, it was meticulously reconstructed using historical records and original bricks where possible. This unprecedented post-war restoration earned it a place on the UNESCO World Heritage list in 1980. The Royal Castle stands proudly at the entrance to the Old Town.",
    },
    descriptionAdvanced: {
      de: "Die Warschauer Altstadt ist ein triumphales Symbol für den Wiederaufbauwillen und den Überlebensgeist der polnischen Nation. Während des Warschauer Aufstands 1944 fast vollständig von deutschen Truppen dem Erdboden gleichgemacht, wurde das historische Zentrum in der Nachkriegszeit mithilfe alter Gemälde und Skizzen detailgetreu rekonstruiert. Der charmante Schlossplatz mit der markanten Sigismundsäule und dem prunkvollen Königsschloss bildet den majestätischen Eingang in die verwinkelten, kopfsteingepflasterten Gassen. Bunte Renaissance- und Barockfassaden zieren den alten Marktplatz, an dem die Statue der Warschauer Seejungfrau, das Wappentier der Stadt, wacht. Heute pulsiert in den liebevoll restaurierten Straßen ein lebhaftes Gemisch aus Kunst, Gastronomie und internationalem Tourismus.",
      hu: "",
      ro: "",
      en: "Stepping into Warsaw’s Old Town feels like walking through a living time machine where the past was stubbornly brought back to life. After the devastating events of 1944, the 'Phoenix City' refused to let its heart remain in ruins. Architects used 18th-century paintings by Bernardo Bellotto to recreate every ornate facade and narrow alleyway with surgical precision. As you wander past the Barbican’s red-brick fortifications or watch the street performers in the bustling Market Square, you are witnessing the world’s most successful urban reconstruction project. It’s a testament to Polish resilience and a masterclass in architectural preservation. History K8 — post-war reconstruction and cultural heritage."
    },
    factsAdvanced: {
      de: ["Die Altstadt wurde als außergewöhnliches Beispiel für die Rekonstruktion von historischem Erbe in die UNESCO-Liste aufgenommen.", "Die Verteidigungsmauer Barbakane trennt die Alt- von der Neustadt.", "Das Königsschloss war die offizielle Residenz der polnischen Monarchen bis zur Teilung Polens."],
      hu: [],
      ro: [],
      en: [
        "During the massive reconstruction project, approximately 85% of the Old Town had to be rebuilt from total ruins.",
        "The historic Market Square measures roughly 90 by 73 meters and is surrounded by 40 uniquely decorated tenement houses.",
        "Architects utilized 22 highly detailed 18th-century landscape paintings by Bernardo Bellotto to ensure absolute architectural accuracy.",
        "The Royal Castle's impressive Sigismund's Clock Tower stands exactly 60 meters tall over the entrance to the historic district.",
        "The reconstruction was so significant that it led to the Old Town's inclusion on the UNESCO World Heritage list in 1980."
      ]
    },
    facts: {
      de: ["Gegründet im 13. Jahrhundert rund um das Königsschloss.", "Über 85 % des historischen Zentrums wurden 1944 von Nazi-Truppen zerstört.", "Nach dem Zweiten Weltkrieg in fünf Jahren akribisch wiederaufgebaut.", "1980 wegen des Wiederaufbaus zum UNESCO-Weltkulturerbe erklärt.", "Auf dem Altstadtmarkt befindet sich die Statue der Warschauer Seejungfer.", "Das Königsschloss war die historische Residenz der polnischen Monarchen.", "Die Wehrmauern der Stadt, einschließlich der Barbakane, umschließen das Gebiet noch teilweise.", "Heute ist sie voller Cafés, Restaurants und Kunstgalerien."],
      hu: ["A 13. században alapították a királyi vár körül.", "A történelmi központ több mint 85%-át a náci csapatok 1944-ben elpusztították.", "A második világháború után öt év alatt gondosan újjáépítették.", "Az újjáépítés elismeréseként 1980-ban az UNESCO világörökség részévé nyilvánították.", "Az óvárosi piactéren található a varsói hableány szobra.", "A királyi vár a lengyel uralkodók történelmi rezidenciája volt.", "A város védőfalai, beleértve a barbakánt is, még mindig részben körülölelik a területet.", "Ma kávézók, éttermek és művészeti galériák sokasága várja itt a látogatókat."],
      ro: ["Înființat în secolul al XIII-lea în jurul Castelului Regal.", "Peste 85% din centrul istoric a fost distrus de trupele naziste în 1944.", "Reconstruit cu meticulozitate timp de cinci ani în urma celui de-al Doilea Război Mondial.", "Desemnat sit al Patrimoniului Mondial UNESCO în 1980 pentru restaurarea sa.", "Piața Orașului Vechi găzduiește o statuie a Sirenei din Varșovia.", "Castelul Regal a fost reședința istorică a monarhilor polonezi.", "Zidurile de apărare ale orașului, inclusiv Barbacana, încă înconjoară parțial zona.", "Astăzi, este plin de cafenele, restaurante și galerii de artă."],
      en: ["Established in the 13th century around the Royal Castle.", "Over 85% of the historic center was destroyed by Nazi troops in 1944.", "Meticulously rebuilt over five years in the aftermath of World War II.", "Designated a UNESCO World Heritage Site in 1980 for its reconstruction.", "The Old Town Market Place features a statue of the Warsaw Mermaid.", "The Royal Castle was the historical residence of Polish monarchs.", "The defensive city walls, including the Barbican, still partially encircle the area.", "Today, it is filled with cafes, restaurants, and art galleries."],
    },
    image: "/geo-images/poland/stare-miasto-warszawa.webp",
    },
    {
    id: "stare-miasto-torun",
    type: "landmark",
    parent: "torun",
    coords: [18.6044, 53.0102],
    name: { de: "Thorner Altstadt", hu: "Toruńi óváros", ro: "Orașul Vechi Toruń", en: "Toruń Old Town" },
    description: {
      de: "Die Thorner Altstadt ist ein wunderschön erhaltenes mittelalterliches Stadtzentrum und der Geburtsort des Astronomen Nikolaus Kopernikus. An der Weichsel gelegen, entging sie im Zweiten Weltkrieg weitgehend der Zerstörung, wodurch ihre ursprüngliche gotische Backsteinarchitektur intakt blieb. Der Stadtgrundriss ist seit dem Mittelalter fast unverändert und besticht durch ein prächtiges Altes Rathaus sowie monumentale Kirchen. Sie wurde 1997 zum UNESCO-Weltkulturerbe erklärt.",
      hu: "Toruń óvárosa egy gyönyörűen megőrzött középkori városközpont, egyben Nikolaus Kopernikusz csillagász szülőhelye. A Visztula folyó partján fekvő város nagyrészt megmenekült a második világháborús pusztításoktól, így eredeti gótikus téglaépítészete érintetlen maradt. A város elrendezése a középkor óta szinte változatlan, egy pompás régi városházával és monumentális templomokkal. 1997-ben az UNESCO világörökség részévé nyilvánították.",
      ro: "Orașul Vechi Toruń este un centru urban medieval frumos conservat și locul de naștere al astronomului Nicolaus Copernic. Situat pe râul Vistula, a scăpat în mare parte de distrugerile din timpul celui de-al Doilea Război Mondial, lăsând intactă arhitectura sa gotică originală din cărămidă. Aspectul orașului a rămas aproape neschimbat din Evul Mediu, având o impresionantă Primărie Veche și biserici monumentale. A fost desemnat sit al Patrimoniului Mondial UNESCO în 1997.",
      en: "Toruń Old Town is a beautifully preserved medieval urban center and the birthplace of the astronomer Nicolaus Copernicus. Located on the Vistula River, it largely escaped destruction during World War II, leaving its original Gothic brick architecture intact. The town layout remains almost unchanged since the Middle Ages, featuring a grand Old Town Hall and monumental churches. It was designated a UNESCO World Heritage Site in 1997.",
    },
    descriptionAdvanced: {
      de: "Die Thorner Altstadt ist eines der beeindruckendsten gotischen Architektur-Ensembles Europas und blieb glücklicherweise von kriegerischer Zerstörung weitgehend verschont. Erbaut am Ufer der Weichsel von den Rittern des Deutschen Ordens, spiegelt die Altstadt den immensen Reichtum der ehemaligen Hansestadt wider. Rote Backsteinmauern, massige gotische Kirchen und prächtige Kaufmannshäuser dominieren das romantische und ursprüngliche Stadtbild. Ein Spaziergang durch die verwinkelten Gassen, vorbei am mächtigen Altstadtrathaus und den Resten der alten Stadtmauer, fühlt sich an wie eine Zeitreise ins tiefste Mittelalter. Diese intakte historische Atmosphäre und die ständige Präsenz des berühmten Sohnes der Stadt, Nikolaus Kopernikus, machen die Altstadt unverwechselbar.",
      hu: "",
      ro: "",
      en: "Exploring Toruń’s Old Town is like wandering through a living chronicle of medieval Europe. As you walk the cobblestone streets, the massive red-brick Gothic walls—unscathed by the fires of World War II—stand as silent witnesses to centuries of Hanseatic trade. This Vistula-side gem is famously the birthplace of Nicolaus Copernicus, the man who 'moved the Earth and stopped the Sun.' Beyond the celestial history, the air often carries the spiced aroma of traditional 'pierniki' gingerbread, a craft perfected here since the Middle Ages. The town’s layout, featuring the monumental Old Town Hall and the Leaning Tower, remains a masterclass of 13th-century urban planning. History K8 — Medieval cities and the Scientific Revolution."
    },
    factsAdvanced: {
      de: ["Die Thorner Altstadt ist ein UNESCO-Weltkulturerbe.", "Das Geburtshaus von Nikolaus Kopernikus ist heute ein beliebtes Museum.", "Der Schiefe Turm von Thorn gehört zu den großen architektonischen Kuriositäten der Stadt."],
      hu: [],
      ro: [],
      en: [
        "Toruń was granted city rights in 1233 by the Teutonic Order, making it one of Poland's oldest urban centers.",
        "The Old Town Hall tower reaches a height of 40 meters and dates back to the massive reconstruction of 1393.",
        "The medieval Leaning Tower, built as part of the defensive walls, is tilted 1.46 meters from its vertical axis.",
        "Astronomer Nicolaus Copernicus was born in the heart of the town in 1473, a fact celebrated at his family home museum.",
        "The site was designated as a UNESCO World Heritage area in 1997, protecting over 1,100 historical buildings."
      ]
    },
    facts: {
      de: ["Im 13. Jahrhundert vom Deutschen Orden gegründet.", "Geburtsort des berühmten Renaissance-Astronomen Nikolaus Kopernikus.", "Eine der wenigen polnischen Städte, die im Zweiten Weltkrieg nicht zerstört wurden.", "Ein UNESCO-Weltkulturerbe, berühmt für seine Backsteingotik.", "Bekannt für die traditionellen Thorner Lebkuchen, die seit dem Mittelalter gebacken werden.", "Das Alte Rathaus gehört zu den monumentalsten in Mitteleuropa.", "Verfügt über einen \"Schiefen Turm\", einen mittelalterlichen Wehrturm, der sich neigte.", "Bewahrt einen mittelalterlichen Straßenverlauf und originale Stadtmauern."],
      hu: ["A Német Lovagrend alapította a 13. században.", "Nikolaus Kopernikusz, a híres reneszánsz csillagász szülőhelye.", "Egyike azon kevés lengyel városoknak, amelyeket nem romboltak le a második világháborúban.", "Tégla gótikus építészetéről híres UNESCO világörökségi helyszín.", "Híres a középkor óta sütött hagyományos toruńi mézeskalácsról.", "A régi városháza Közép-Európa egyik legmonumentálisabb épülete.", "Itt található a \"Ferde torony\", egy középkori védőtorony, amely az idők során megdőlt.", "Megőrizte középkori utcaszerkezetét és eredeti védőfalait."],
      ro: ["Fondat de Cavalerii Teutoni în secolul al XIII-lea.", "Locul de naștere al faimosului astronom renascentist Nicolaus Copernic.", "Unul dintre puținele orașe poloneze care nu au fost distruse în al Doilea Război Mondial.", "Un sit al Patrimoniului Mondial UNESCO, renumit pentru arhitectura gotică din cărămidă.", "Faimos pentru turta dulce tradițională de Toruń, coaptă încă din Evul Mediu.", "Primăria Veche este una dintre cele mai monumentale din Europa Centrală.", "Prezintă un \"Turn Înclinat\", un turn de apărare medieval care s-a înclinat în timp.", "Are un plan stradal medieval conservat și ziduri de apărare originale."],
      en: ["Founded by the Teutonic Knights in the 13th century.", "Birthplace of the famous Renaissance astronomer Nicolaus Copernicus.", "One of the few Polish cities that was not destroyed during World War II.", "A UNESCO World Heritage Site renowned for its Brick Gothic architecture.", "Famous for its traditional Toruń gingerbread, baked since the Middle Ages.", "The Old Town Hall is one of the most monumental in Central Europe.", "Features a \"Leaning Tower\", a medieval defensive tower that shifted over time.", "Has a preserved medieval street layout and original defensive walls."],
    },
    image: "/geo-images/poland/stare-miasto-torun.webp",
    },
    {
    id: "stare-miasto-zamosc",
    type: "landmark",
    parent: "zamosc-city",
    coords: [23.251, 50.7165],
    name: { de: "Altstadt von Zamość", hu: "Zamośći óváros", ro: "Orașul Vechi Zamość", en: "Zamość Old Town" },
    description: {
      de: "Die Altstadt von Zamość ist das bemerkenswert intakte historische Zentrum von Zamość und zeichnet sich durch ihren atemberaubenden Renaissance-Grundriss aus. Sie ist um den Großen Marktplatz zentriert, der von armenischen Kaufmannshäusern mit kunstvollen Brüstungen und einem prächtigen Rathaus flankiert wird. Stadtplanung und Architektur integrieren italienische und mitteleuropäische Traditionen makellos. Sie wurde 1992 in die Liste des UNESCO-Weltkulturerbes aufgenommen.",
      hu: "Zamość óvárosa a város figyelemre méltóan épen maradt történelmi központja, amelyet lenyűgöző reneszánsz elrendezése jellemez. Központja a Nagy Piactér, amelyet díszes pártázatú örmény kereskedőházak és egy csodálatos városháza szegélyeznek. A várostervezés és az építészet hibátlanul ötvözi az olasz és a közép-európai hagyományokat. 1992-ben felkerült az UNESCO világörökségi listájára.",
      ro: "Orașul Vechi din Zamość este centrul istoric remarcabil de intact al orașului Zamość, caracterizat prin planul său renascentist uimitor. Este centrat în jurul Pieței Mari, flancată de casele negustorilor armeni cu parapete ornamentate și o primărie magnifică. Planul urbanistic și arhitectura integrează perfect tradițiile italiene și central-europene. A fost înscris pe lista Patrimoniului Mondial UNESCO în 1992.",
      en: "The Old Town of Zamość is the remarkably intact historic center of Zamość, characterized by its stunning Renaissance layout. It is centered around the Great Market Square, which is flanked by Armenian merchant houses with ornate parapets and a magnificent Town Hall. The urban plan and architecture integrate Italian and Central European traditions flawlessly. It was inscribed on the UNESCO World Heritage list in 1992.",
    },
    descriptionAdvanced: {
      de: "Die Altstadt von Zamość, tief im Osten Polens gelegen, ist ein faszinierendes Meisterwerk der Stadtplanung der Renaissance. Sie wurde Ende des 16. Jahrhunderts im Auftrag des mächtigen Adeligen Jan Zamoyski von einem italienischen Architekten „aus dem Nichts“ entworfen. Das Konzept der „idealen Stadt“ basierte auf harmonischen Proportionen und strengen geometrischen Mustern, was dem Ort oft den Beinamen „Padua des Nordens“ einbringt. Der prächtige große Marktplatz, umgeben von farbenfrohen, reich verzierten armenischen Bürgerhäusern und dominiert vom eleganten Rathaus mit seiner geschwungenen Freitreppe, ist atemberaubend. Die perfekt erhaltene Festungsstruktur und die außergewöhnliche Architekturästhetik machen Zamość zu einem architektonischen Juwel von Weltrang.",
      hu: "",
      ro: "",
      en: "Entering Zamość feels like stepping into a master's painting of the Italian Renaissance, yet nestled in the heart of eastern Poland. Known as the 'Pearl of the Renaissance,' this town was a visionary project of Jan Zamoyski, who collaborated with architect Bernardo Morando to create an 'ideal city.' As I wander through the Great Market Square, the vibrant colors of the Armenian merchant houses reflect a prosperous trade history that once linked the East and West. The Town Hall's fan-shaped stairs and soaring tower dominate the skyline, while the surrounding bastions remind us of the city's military resilience. Every arcade and ornate parapet tells a story of cultural fusion between Central European and Italian traditions. It is a living museum of urban planning that remains remarkably unchanged since the 16th century. History K8 — Renaissance urban planning and the growth of trade cities."
    },
    factsAdvanced: {
      de: ["Zamość gilt als ein perfektes Beispiel einer Renaissance-Planstadt.", "Die Altstadt gehört seit 1992 zum UNESCO-Weltkulturerbe.", "Die massive Festungsanlage konnte im 17. Jahrhundert sogar Angriffen der schwedischen Armee standhalten."],
      hu: [],
      ro: [],
      en: [
        "The Great Market Square is a perfect square measuring exactly 100 by 100 meters.",
        "The Town Hall’s iconic clock tower rises to a height of 52 meters above the square.",
        "Built between 1580 and 1618, the city's fortifications featured 7 powerful bastions to protect the 'ideal city.'",
        "Zamość was founded in 1580 by Jan Zamoyski, becoming a major commercial hub for trade between the Black Sea and Northern Europe.",
        "The historic center contains approximately 120 unique architectural monuments within the relatively small UNESCO zone."
      ]
    },
    facts: {
      de: ["Im 16. Jahrhundert als ideale Renaissance-Stadt konzipiert.", "Der Große Marktplatz ist exakt 100 mal 100 Meter groß.", "Berühmt für die bunten, von armenischen Kaufleuten erbauten Bürgerhäuser mit Arkaden.", "Das Rathaus verfügt über eine majestätische, geschwungene Doppeltreppe.", "Die originalen sternförmigen Befestigungsanlagen umgeben die Altstadt noch heute.", "Seit 1992 als UNESCO-Weltkulturerbe anerkannt.", "Die Kathedrale von Zamość ist ein Meisterwerk der Spätrenaissance-Architektur.", "Blieb von der Zerstörung im Zweiten Weltkrieg weitgehend verschont."],
      hu: ["A 16. században ideális reneszánsz városként tervezték.", "A Nagy Piactér pontosan 100-szor 100 méteres.", "Híres az örmény kereskedők által épített, árkádos, színes bérházakról.", "A városháza egy fenséges íves kettős lépcsővel rendelkezik.", "Az eredeti csillag alakú erődítmények ma is körülölelik az óvárost.", "1992 óta az UNESCO világörökség része.", "A zamośći katedrális a késő reneszánsz építészet remekműve.", "Nagyrészt elkerülte a második világháborús pusztítást, megőrizve eredeti formáját."],
      ro: ["Proiectat în secolul al XVI-lea ca un oraș renascentist ideal.", "Piața Mare are dimensiuni de exact 100 pe 100 de metri.", "Faimos pentru casele sale colorate cu arcade, construite de negustori armeni.", "Primăria prezintă o scară dublă curbată maiestuoasă.", "Fortificațiile originale în formă de stea înconjoară încă Orașul Vechi.", "Recunoscut ca sit al Patrimoniului Mondial UNESCO din 1992.", "Catedrala Zamość este o capodoperă a arhitecturii renascentiste târzii.", "A scăpat în mare parte de distrugerile celui de-al Doilea Război Mondial, păstrându-și forma."],
      en: ["Designed in the 16th century as an ideal Renaissance town.", "The Great Market Square is precisely 100 by 100 meters in size.", "Famous for its colorful, arcaded tenement houses built by Armenian merchants.", "The Town Hall features a majestic curved double stairway.", "The original star-shaped fortifications still surround the Old Town.", "Recognized as a UNESCO World Heritage Site since 1992.", "The Zamość Cathedral is a masterpiece of late-Renaissance architecture.", "Largely escaped the destruction of World War II, preserving its original form."],
    },
    image: "/geo-images/poland/stare-miasto-zamosc.webp",
    },
    {
    id: "kazimierz-krakow",
    type: "landmark",
    parent: "krakow",
    coords: [19.9463, 50.0519],
    name: { de: "Stadtteil Kazimierz", hu: "Kazimierz negyed", ro: "Cartierul Kazimierz", en: "Kazimierz District" },
    description: {
      de: "Kazimierz ist ein historischer Stadtteil von Krakau, berühmt für sein tiefes jüdisches Erbe und seine lebendige Kulturszene. Von der Gründung im 14. Jahrhundert bis zum Holocaust war es eine eigenständige Stadt und ein wichtiges Zentrum des jüdischen Lebens in Polen. Heute prägen historische Synagogen, lebhafte Cafés, Kunstgalerien und schmale, atmosphärische Straßen das Viertel. Weltweite Bekanntheit erlangte die Gegend als Hauptdrehort für Steven Spielbergs \"Schindlers Liste\".",
      hu: "Kazimierz Krakkó egyik történelmi negyede, amely mély zsidó örökségéről és pezsgő kulturális életéről híres. A 14. századi alapításától a holokausztig önálló város volt, és a lengyelországi zsidó élet egyik fő központja. Ma a negyedet történelmi zsinagógák, nyüzsgő kávézók, művészeti galériák és hangulatos, szűk utcák jellemzik. A környék nemzetközi hírnévre tett szert Steven Spielberg \"Schindler listája\" című filmjének fő forgatási helyszíneként.",
      ro: "Kazimierz este un cartier istoric din Cracovia, faimos pentru moștenirea sa evreiască profundă și scena culturală vibrantă. De la înființarea sa în secolul al XIV-lea până la Holocaust, a fost un oraș separat și un centru major al vieții evreiești din Polonia. Astăzi, cartierul este caracterizat de sinagogi istorice, cafenele pline de viață, galerii de artă și străzi înguste, atmosferice. Zona a câștigat faimă internațională fiind principala locație de filmare pentru \"Lista lui Schindler\" a lui Steven Spielberg.",
      en: "Kazimierz is a historic district in Kraków, famous for its deep Jewish heritage and vibrant cultural scene. From its founding in the 14th century until the Holocaust, it was a separate city and a major center of Jewish life in Poland. Today, the district is characterized by historic synagogues, lively cafes, art galleries, and narrow, atmospheric streets. The area gained international fame as a primary filming location for Steven Spielberg's \"Schindler's List\".",
    },
    descriptionAdvanced: {
      de: "Der Stadtteil Kazimierz in Krakau blickt auf eine tiefe, facettenreiche Geschichte zurück und war über Jahrhunderte hinweg eine eigenständige Stadt. Bekannt ist Kazimierz vor allem als das historische jüdische Zentrum Krakaus, in dem polnische und jüdische Kulturen in einer einzigartigen Symbiose koexistierten. Alte Synagogen, verwinkelte Gassen und historische jüdische Friedhöfe zeugen von dieser lebhaften Vergangenheit, die durch den Holocaust ein jähes und tragisches Ende fand. Seit den 1990er Jahren, nicht zuletzt durch den Film Schindlers Liste, erlebte das Viertel eine massive Renaissance und Wiederbelebung seiner Wurzeln. Heute ist Kazimierz ein bohemianisches Viertel voller Vintage-Läden, atmosphärischer Cafés, Klezmer-Musik und lebhafter Straßenkunst.",
      hu: "",
      ro: "",
      en: "Walking through the narrow cobblestone streets of Kazimierz feels like traversing a living bridge between medieval history and modern bohemian life. Founded by King Casimir III the Great in 1335, this Kraków district existed as an independent island-city for centuries, separated from the main royal castle by a now-buried branch of the Vistula River. As I explore Szeroka Street, the silence of the Old Synagogue speaks volumes about the vibrant community that flourished here before the tragic events of World War II. Today, the district has transformed into a kaleidoscope of candlelit cafes, street art, and Jewish heritage festivals, preserving its unique atmosphere while embracing a new creative spirit. It remains one of Europe's most poignant reminders of cultural resilience and historical layering. History K8 — Jewish heritage and the Holocaust."
    },
    factsAdvanced: {
      de: ["Kazimierz wurde im 14. Jahrhundert von König Kasimir dem Großen gegründet.", "Die Alte Synagoge in Kazimierz ist eines der bedeutendsten jüdischen Baudenkmäler Europas.", "Das jährliche Festival der jüdischen Kultur in Krakau zieht Tausende Besucher an."],
      hu: [],
      ro: [],
      en: [
        "Kazimierz was founded as a separate royal city by King Casimir III the Great on February 27, 1335.",
        "The Old Synagogue, rebuilt in the late 15th century, stands as the oldest surviving example of Jewish religious architecture in Poland.",
        "Before the start of World War II in 1939, approximately 64,000 Jewish residents lived in Kazimierz, accounting for 25% of Kraków's total population.",
        "The district preserves 7 major historic synagogues, including the Remah Synagogue and its 16th-century cemetery established in 1551.",
        "The area is located approximately 1 kilometer south of Kraków's Main Market Square and was incorporated into the city limits in 1791."
      ]
    },
    facts: {
      de: ["1335 von König Kasimir III. dem Großen als unabhängige Stadt gegründet.", "War über 500 Jahre lang das Zentrum der jüdischen Kultur in Krakau.", "Das Viertel wurde während des Holocaust stark entvölkert und zerstört.", "Beherbergt die Alte Synagoge, die älteste erhaltene Synagoge in Polen.", "Austragungsort des jährlichen Jüdischen Kulturfestivals, eines der größten weltweit.", "Erlangte durch \"Schindlers Liste\" (1993) weltweite Anerkennung.", "Heute ist es das Zentrum des unkonventionellen Nachtlebens und der Kunstszene Krakaus.", "Umfasst sowohl historische jüdische Wahrzeichen als auch bedeutende katholische Kirchen."],
      hu: ["III. Nagy Kázmér király alapította független városként 1335-ben.", "Több mint 500 éven át a krakkói zsidó kultúra központja volt.", "A negyed a holokauszt során nagymértékben elnéptelenedett és elpusztult.", "Itt található a Régi zsinagóga, Lengyelország legrégebbi fennmaradt zsinagógája.", "Itt rendezik az éves Zsidó Kulturális Fesztivált, amely a világ egyik legnagyobbika.", "A \"Schindler listája\" (1993) című film révén világszerte ismertté vált.", "Ma a krakkói bohém éjszakai élet és művészeti szcéna központja.", "Történelmi zsidó emlékeket és jelentős katolikus templomokat egyaránt rejt."],
      ro: ["Fondat ca oraș independent de regele Cazimir al III-lea cel Mare în 1335.", "A fost centrul culturii evreiești din Cracovia timp de peste 500 de ani.", "Cartierul a fost puternic depopulat și devastat în timpul Holocaustului.", "Găzduiește Sinagoga Veche, cea mai veche sinagogă supraviețuitoare din Polonia.", "Găzduiește anual Festivalul Culturii Evreiești, unul dintre cele mai mari din lume.", "A obținut recunoaștere globală după ce a apărut în \"Lista lui Schindler\" (1993).", "Astăzi este centrul vieții de noapte boeme și al scenei de artă din Cracovia.", "Conține atât repere evreiești istorice, cât și biserici catolice semnificative."],
      en: ["Founded as an independent city by King Casimir III the Great in 1335.", "Was the center of Jewish culture in Kraków for over 500 years.", "The district was heavily depopulated and devastated during the Holocaust.", "Features the Old Synagogue, the oldest surviving synagogue in Poland.", "Hosts the annual Jewish Culture Festival, one of the largest in the world.", "Gained global recognition after being featured in \"Schindler's List\" (1993).", "Today it is the center of Kraków's bohemian nightlife and arts scene.", "Contains both historic Jewish landmarks and significant Catholic churches."],
    },
    image: "/geo-images/poland/kazimierz-krakow.webp",
    },
    {
    id: "jasna-gora",
    type: "landmark",
    parent: "czestochowa",
    coords: [19.0972, 50.8122],
    name: { de: "Kloster Jasna Góra", hu: "Jasna Góra-i kolostor", ro: "Mănăstirea Jasna Góra", en: "Jasna Góra Monastery" },
    description: {
      de: "Das Kloster Jasna Góra in Częstochowa ist der berühmteste Marienwallfahrtsort Polens und ein bedeutendes katholisches Pilgerziel. Im 14. Jahrhundert von Paulinermönchen gegründet, beherbergt es die verehrte Ikone der Schwarzen Madonna, der viele Wunder zugeschrieben werden. Der stark befestigte Komplex hielt 1655 einer schwedischen Belagerung stand, was als Wendepunkt der polnischen Geschichte gilt. Millionen von Pilgern besuchen das Heiligtum jedes Jahr.",
      hu: "A częstochowai Jasna Góra-i kolostor Lengyelország leghíresebb Mária-kegyhelye és az egyik legjelentősebb katolikus zarándokhely. A pálos rend által a 14. században alapított kolostor őrzi a Fekete Madonna tisztelt ikonját, amelynek számos csodát tulajdonítanak. Az erősen megerősített komplexum 1655-ben hősiesen ellenállt egy svéd ostromnak, ami a lengyel történelem fordulópontja lett. Évente zarándokok milliói látogatják meg a szentélyt.",
      ro: "Mănăstirea Jasna Góra din Częstochowa este cel mai faimos altar marian din Polonia și o destinație majoră de pelerinaj catolic. Înființată în secolul al XIV-lea de Călugării Paulini, găzduiește venerata icoană a Madonei Negre, căreia i se atribuie multe minuni. Complexul puternic fortificat a rezistat faimosului asediu suedez din 1655, un punct de cotitură în istoria Poloniei. Milioane de pelerini vizitează sanctuarul în fiecare an.",
      en: "The Jasna Góra Monastery in Częstochowa is the most famous Marian shrine in Poland and a major Catholic pilgrimage destination. Founded in the 14th century by the Pauline Fathers, it houses the revered icon of the Black Madonna, credited with many miracles. The heavily fortified complex famously withstood a Swedish siege in 1655, a turning point in Polish history. Millions of pilgrims visit the sanctuary every year.",
    },
    descriptionAdvanced: {
      de: "Das Kloster Jasna Góra in Tschenstochau ist das schlagende spirituelle Herz Polens und eines der wichtigsten Marienheiligtümer der Welt. Die auf einem hellen Kalksteinhügel gelegene Klosteranlage wurde im 14. Jahrhundert vom Paulinerorden gegründet und hat eine enorme nationale Bedeutung. Der unschätzbare Schatz des Klosters ist die Ikone der Schwarzen Madonna, der zahlreiche Wunder zugeschrieben werden und die als Beschützerin der polnischen Nation verehrt wird. Die prunkvolle Architektur des Komplexes vereint barocke Pracht mit wehrhaften Festungsmauern, die im 17. Jahrhundert einer schwedischen Belagerung trotzten. Für die Polen ist Jasna Góra nicht nur ein Ort tiefen Glaubens, sondern ein ewiges Symbol für Hoffnung, Widerstand und nationale Einheit.",
      hu: "",
      ro: "",
      en: "Arriving at the gates of Jasna Góra feels less like entering a monastery and more like approaching an impenetrable citadel. Perched on a limestone ridge in Częstochowa, this Pauline sanctuary has been the pulse of Polish spirituality since 1382. Within its bastioned walls lies the Chapel of Our Lady, home to the Black Madonna—a Byzantine icon whose storied scars tell a tale of survival. I watched as the silver screen was raised, revealing the icon amidst a cloud of incense and silent prayer. The monastery's fame was cemented in 1655 when it defied the Swedish Deluge, a victory that transformed these walls into a symbol of national hope. Exploring the Baroque basilica and the towering 106-meter belfry, one realizes this isn't just a site of worship, but a fortress of culture that has outlasted empires. History K8 — European religious history and national sovereignty."
    },
    factsAdvanced: {
      de: ["Die Verteidigung von Jasna Góra gegen die Schweden 1655 ist ein zentraler polnischer Nationalmythos.", "Das Bildnis der Schwarzen Madonna trägt charakteristische Schnitte im Gesicht.", "Der massive Glockenturm des Klosters ist über 100 Meter hoch und dominiert das Stadtbild."],
      hu: [],
      ro: [],
      en: [
        "The monastery’s belfry tower stands at 106.3 meters tall and features a clock with 36 bells that play Marian hymns.",
        "During the famous 1655 siege, 170 soldiers and 70 monks successfully defended the fortress against 3,200 Swedish invaders.",
        "The icon of the Black Madonna is painted on three lime-wood boards measuring approximately 122 by 82 centimeters.",
        "The library at Jasna Góra is one of the oldest in the country, housing over 15,000 precious manuscripts and ancient volumes.",
        "The fortified walls of the monastery complex enclose a total area of approximately 5 hectares on the summit of the hill."
      ]
    },
    facts: {
      de: ["1382 von ungarischen Paulinermönchen gegründet.", "Beherbergt die berühmte Ikone der Muttergottes von Tschenstochau (Schwarze Madonna).", "Die erfolgreiche Verteidigung gegen die Schweden 1655 machte es zum Nationalsymbol.", "Es ist einer der meistbesuchten katholischen Wallfahrtsorte der Welt.", "Der Klosterkomplex verfügt über einen 106 Meter hohen Turm.", "Enthält eine beeindruckende Bibliothek mit Tausenden alten Manuskripten.", "Die Päpste Johannes Paul II., Benedikt XVI. und Franziskus haben das Heiligtum besucht.", "Dient als geistliche Hauptstadt Polens."],
      hu: ["1382-ben alapították magyar pálos szerzetesek.", "Itt őrzik a częstochowai Szűzanya (a Fekete Madonna) híres ikonját.", "A svédek elleni sikeres 1655-ös védekezés nemzeti szimbólummá tette.", "Ez a világ egyik leglátogatottabb katolikus zarándokhelye.", "A kolostorkomplexum egy 106 méter magas toronnyal is büszkélkedhet.", "Lenyűgöző könyvtárában több ezer ősi kéziratot őriznek.", "II. János Pál, XVI. Benedek és Ferenc pápa is ellátogatott már a kegyhelyre.", "Lengyelország spirituális fővárosaként szolgál."],
      ro: ["Înființată în 1382 de călugări paulini din Ungaria.", "Găzduiește faimoasa icoană a Maicii Domnului din Częstochowa (Madona Neagră).", "Apărarea cu succes împotriva suedezilor din 1655 a transformat-o într-un simbol național.", "Este unul dintre cele mai vizitate locuri de pelerinaj catolic din lume.", "Complexul mănăstirii include o turlă impunătoare de 106 metri înălțime.", "Conține o bibliotecă impresionantă cu mii de manuscrise antice.", "Papii Ioan Paul al II-lea, Benedict al XVI-lea și Francisc au vizitat cu toții sanctuarul.", "Servește drept capitală spirituală a Poloniei."],
      en: ["Founded in 1382 by Pauline monks from Hungary.", "Houses the famous icon of Our Lady of Częstochowa (the Black Madonna).", "The successful defense against the Swedes in 1655 made it a national symbol.", "It is one of the most visited Catholic pilgrimage sites in the world.", "The monastery complex includes a towering 106-meter high spire.", "Contains an impressive library with thousands of ancient manuscripts.", "Popes John Paul II, Benedict XVI, and Francis have all visited the shrine.", "Serves as the spiritual capital of Poland."],
    },
    image: "/geo-images/poland/jasna-gora.webp",
    },
    {
    id: "stare-miasto-gdansk",
    type: "landmark",
    parent: "gdansk",
    coords: [18.6493, 54.3485],
    name: { de: "Danziger Rechtstadt", hu: "Gdański óváros", ro: "Orașul Vechi Gdańsk", en: "Gdansk Main Town" },
    description: {
      de: "Die Danziger Rechtstadt (oft als Altstadt bezeichnet) ist das historische Herz von Gdańsk und präsentiert eine einzigartige Mischung aus Gotik-, Renaissance- und manieristischer Architektur. Nach massiven Zerstörungen im Zweiten Weltkrieg wiederaufgebaut, folgt ihr Grundriss dem einstigen Handelszentrum entlang der Motława. Höhepunkte sind das ikonische Krantor, der Lange Markt und die Marienkirche, eine der größten Backsteinkirchen der Welt. Die Architektur spiegelt die wohlhabende Vergangenheit der Stadt als wichtiger Ostseehafen der Hanse wider.",
      hu: "A Gdański Főváros (amelyet gyakran Óvárosnak is neveznek) Gdańsk történelmi központja, amely a gótikus, reneszánsz és manierista építészet egyedülálló keverékét mutatja be. A második világháborús hatalmas pusztítások után újjáépült rész a Motława folyó menti egykori kereskedelmi központ elrendezését követi. Főbb látványosságai közé tartozik az ikonikus középkori Daru, a Hosszú Piac és a Mária-templom, amely a világ egyik legnagyobb téglaépítésű temploma. A terület építészete tükrözi a város gazdag múltját a Hanza-szövetség fontos balti kikötőjeként.",
      ro: "Orașul Principal din Gdańsk (numit adesea Orașul Vechi) este inima istorică a orașului Gdańsk, prezentând un amestec unic de arhitectură gotică, renascentistă și manieristă. Reconstruit după distrugerile masive din cel de-al Doilea Război Mondial, aspectul său urmează fostul centru comercial de-a lungul râului Motława. Punctele de atracție includ Macaraua medievală iconică, Piața Lungă și Biserica Sf. Maria, una dintre cele mai mari biserici din cărămidă din lume. Arhitectura reflectă trecutul prosper al orașului ca port major la Marea Baltică în Liga Hanseatică.",
      en: "Gdansk Main Town (often called the Old Town) is the historic heart of Gdańsk, showcasing a unique blend of Gothic, Renaissance, and Mannerist architecture. Rebuilt after massive destruction in World War II, its layout follows the former trading center along the Motława River. Highlights include the iconic medieval Crane, the Long Market, and St. Mary's Church, one of the largest brick churches in the world. The area's architecture reflects the city's affluent past as a major Baltic port in the Hanseatic League.",
    },
    descriptionAdvanced: {
      de: "Die Danziger Rechtstadt bildet das pulsierende historische Zentrum von Danzig und besticht durch ihre prächtige Architektur aus der Zeit der Hanse. Hier spürt man die reiche, jahrhundertealte Handelsgeschichte der Stadt an jeder Straßenecke, insbesondere am malerischen Langen Markt. Das ikonische Krantor, das sich majestätisch über die Mottlau erhebt, zeugt von der maritimen Bedeutung der Region. Prächtige Patrizierhäuser mit kunstvoll verzierten Fassaden säumen die gepflasterten Wege und Gassen. Zahlreiche gemütliche Cafés und traditionsreiche Bernsteingeschäfte laden Besucher zu einer unvergesslichen Zeitreise ein.",
      hu: "",
      ro: "",
      en: "Stepping into the Główne Miasto of Gdańsk feels like a journey through a living tapestry of maritime power and resilience. Once the crown jewel of the Hanseatic League, this district was meticulously reconstructed from the rubble of World War II to preserve its unique 'Gdańsk style'—a grand fusion of Flemish Mannerism and Gothic brickwork. Walking the Royal Way, explorers encounter the towering St. Mary's Church and the legendary Neptune Fountain, standing guard over the Long Market. The scent of salt and the sight of the medieval Crane on the Motława River evoke centuries of bustling Baltic trade, where merchants once bartered grain and amber. This area isn't just a tourist hub; it is a testament to architectural preservation and urban rebirth. History K8 — Urban reconstruction and the Hanseatic League."
    },
    factsAdvanced: {
      de: ["Die Rechtstadt wurde nach den Zerstörungen des Zweiten Weltkriegs aufwendig und detailgetreu rekonstruiert.", "Die monumentale Marienkirche ist eine der größten Backsteinkirchen der Welt.", "Der berühmte Neptunbrunnen vor dem Artushof stammt aus dem 17. Jahrhundert.", "Danzig galt lange als eine der wohlhabendsten Handelsstädte im Ostseeraum."],
      hu: [],
      ro: [],
      en: [
        "St. Mary's Church is one of the largest brick churches in the world, with an interior volume of approximately 155,000 cubic meters.",
        "The Great Crane, rebuilt between 1442 and 1444, was the largest port crane in medieval Europe, capable of lifting loads up to 4 tonnes.",
        "The Main Town Hall features a historic 37-bell carillon that has chimed over the city since the mid-16th century.",
        "To reach the top of St. Mary’s Church tower, visitors must climb exactly 409 steps to reach a height of 82 meters.",
        "During its golden age in the 17th century, Gdańsk handled nearly 75% of all grain exports from the Polish-Lithuanian Commonwealth."
      ]
    },
    facts: {
      de: ["Historisch gesehen der wichtigste Teil der Stadt, technisch gesehen nicht die \"Altstadt\".", "Fast 90 % wurden im Zweiten Weltkrieg zerstört und sorgfältig rekonstruiert.", "Die Marienkirche ist eine der größten Backsteinkirchen der Welt.", "Der Lange Markt war das historische Zentrum des florierenden Handels der Stadt.", "Verfügt über das Krantor, einen massiven mittelalterlichen Hafenkran und das Wahrzeichen der Stadt.", "Die Architektur spiegelt starke niederländische, flämische und deutsche Einflüsse wider.", "Der Neptunbrunnen ist ein berühmtes Bronzewahrzeichen aus dem 17. Jahrhundert.", "Stand im Zentrum des Bernstein- und Getreidehandelsnetzes der Hanse."],
      hu: ["Történelmileg a város legkiemelkedőbb része, bár technikailag nem az \"Óváros\".", "A második világháború alatt majdnem 90%-a elpusztult, majd gondosan újjáépítették.", "A Mária-templom a világ egyik legnagyobb téglaépítésű temploma.", "A Hosszú Piac volt a város virágzó kereskedelmének történelmi központja.", "Itt található a Daru, egy hatalmas középkori kikötői daru és városszimbólum.", "Az építészet erős holland, flamand és német hatásokat tükröz.", "A Neptun-kút egy híres 17. századi bronz nevezetesség.", "A Hanza-szövetség borostyán- és gabonakereskedelmi hálózatának központja volt."],
      ro: ["Din punct de vedere istoric, cea mai proeminentă parte a orașului, nu din punct de vedere tehnic \"Orașul Vechi\".", "Aproape 90% a fost distrus în timpul celui de-al Doilea Război Mondial și reconstruit cu grijă.", "Biserica Sf. Maria este una dintre cele mai mari biserici din cărămidă din lume.", "Piața Lungă a fost centrul istoric al comerțului prosper al orașului.", "Prezintă Macaraua, o macara portuară medievală masivă și un simbol al orașului.", "Arhitectura reflectă puternice influențe olandeze, flamande și germane.", "Fântâna lui Neptun este un faimos reper din bronz din secolul al XVII-lea.", "Central pentru rețeaua de comerț cu chihlimbar și cereale a Ligii Hanseatice."],
      en: ["Historically the most prominent part of the city, not technically the \"Old Town\".", "Almost 90% was destroyed during World War II and carefully reconstructed.", "St. Mary's Church is one of the largest brick churches in the world.", "The Long Market was the historical center of the city's prosperous trade.", "Features the Crane, a massive medieval port crane and city symbol.", "The architecture reflects strong Dutch, Flemish, and German influences.", "The Neptune Fountain is a famous 17th-century bronze landmark.", "Central to the Hanseatic League's amber and grain trade network."],
    },
    image: "/geo-images/poland/stare-miasto-gdansk.webp",
    },
    {
    id: "gniezno",
    type: "city",
    parent: "PL-WP",
    coords: [17.5925, 52.5361],
    name: { de: "Gnesen", hu: "Gniezno", ro: "Gniezno", en: "Gniezno" },
    description: {
      de: "Gnesen ist eine der ältesten Städte Polens und die erste historische Hauptstadt des frühen polnischen Staates. Im 10. Jahrhundert gegründet, war sie Sitz des ersten polnischen Erzbistums und Krönungsort mehrerer früher polnischer Könige. Die prominente Gnesener Kathedrale ist berühmt für die Gnesener Bronzetür, ein Meisterwerk des romanischen Bronzegusses, das das Leben des heiligen Adalbert darstellt. Die Stadt hat eine tiefe Bedeutung für die Ursprünge der polnischen Nation.",
      hu: "Gniezno Lengyelország egyik legrégebbi városa és a korai lengyel állam első történelmi fővárosa. A 10. században alapították, ez volt az első lengyel érsekség székhelye és számos korai lengyel király koronázási helye. A kiemelkedő gnieznói katedrális a gnieznói ajtókról híres, amely a román kori bronzöntés remekműve, és Szent Adalbert életét ábrázolja. A város mély jelentőséggel bír a lengyel nemzet eredete szempontjából.",
      ro: "Gniezno este unul dintre cele mai vechi orașe din Polonia și prima capitală istorică a primului stat polonez. Fondată în secolul al X-lea, a fost sediul primei arhiepiscopii poloneze și locul de încoronare a mai multor regi polonezi timpurii. Prominenta Catedrală din Gniezno este faimoasă pentru Ușile Gniezno, o capodoperă a turnării în bronz romanice ce descrie viața Sfântului Adalbert. Orașul are o semnificație profundă pentru originile națiunii poloneze.",
      en: "Gniezno is one of the oldest cities in Poland and the first historical capital of the early Polish state. Founded in the 10th century, it was the site of the first Polish archbishopric and the coronation place for several early Polish kings. The prominent Gniezno Cathedral is famous for the Gniezno Doors, a masterpiece of Romanesque bronze casting depicting the life of Saint Adalbert. The city holds deep significance for the origins of the Polish nation.",
    },
    descriptionAdvanced: {
      de: "Gnesen ist eine der ältesten Städte Polens und gilt als die historische Wiege der polnischen Nation. Hier befand sich die erste Hauptstadt des Landes, was der Stadt eine herausragende kulturelle und historische Bedeutung verleiht. Die majestätische Gnesener Kathedrale, in der zahlreiche polnische Könige gekrönt wurden, überragt das Stadtbild. In den malerischen Gassen der Altstadt spiegelt sich die reiche Vergangenheit wider, während moderne Einflüsse einen spannenden Kontrast bilden. Die Stadt ist zudem eng mit dem Heiligen Adalbert verbunden, dessen Reliquien hier aufbewahrt werden.",
      hu: "",
      ro: "",
      en: "Imagine stepping onto Lech Hill, the legendary birthplace of the Polish state where the story of the White Eagle first took flight. Gniezno served as the nation's first historical capital, a spiritual and political powerhouse during the early Middle Ages. The skyline is dominated by the majestic Gniezno Cathedral, home to the world-renowned 12th-century bronze doors that illustrate the life and martyrdom of Saint Adalbert. Every stone in this city whispers tales of royal coronations and the historic Gniezno Congress of 1000 AD, which solidified Poland's place in Christian Europe. Exploring the winding streets of the Old Town feels like uncovering the very foundation of Polish identity, where myth and history blend seamlessly. History K8 — The formation of the Polish state and medieval European diplomacy."
    },
    factsAdvanced: {
      de: ["Gnesen war die erste Hauptstadt des polnischen Staates im 10. Jahrhundert.", "In der örtlichen Kathedrale fanden die ersten Königskrönungen Polens statt.", "Die berühmte Gnesener Bronzetür aus dem 12. Jahrhundert zeigt Szenen aus dem Leben des Heiligen Adalbert.", "Die Stadt liegt idyllisch inmitten mehrerer kleiner Seen."],
      hu: [],
      ro: [],
      en: [
        "The Gniezno Cathedral witnessed the coronations of 5 Polish kings between the years 1025 and 1300.",
        "The famous Romanesque Gniezno Doors were cast in bronze around 1175 and consist of 18 detailed relief panels.",
        "Gniezno was established as the first Polish archbishopric in 1000 AD during the visit of Emperor Otto III.",
        "The city is traditionally said to be built on 7 hills, with Lech Hill serving as its oldest historical center.",
        "Archaeological evidence dates the earliest significant fortified settlement on the site to approximately 940 AD."
      ]
    },
    facts: {
      de: ["Im 10. Jahrhundert als erste Hauptstadt Polens anerkannt.", "War im Jahr 1000 Gastgeber des Akts von Gnesen.", "Fünf frühe polnische Könige wurden in der Gnesener Kathedrale gekrönt.", "Die Kathedrale beherbergt den silbernen Sarkophag des heiligen Adalbert.", "Berühmt für die Bronzetür aus dem 12. Jahrhundert, die das Leben des hl. Adalbert zeigt.", "Liegt an der historischen Piastenroute, die wichtige Stätten des frühen Polens verbindet.", "War der erste Sitz des polnischen Erzbistums.", "Der Legende nach wurde die Stadt dort gegründet, wo der mythische Lech ein Nest des Weißen Adlers sah."],
      hu: ["A 10. században Lengyelország első fővárosaként ismerték el.", "1000-ben a gnieznói kongresszus helyszíne volt.", "A gnieznói katedrálisban öt korai lengyel királyt koronáztak meg.", "A katedrálisban található Szent Adalbert ezüst szarkofágja.", "Híres a 12. századi gnieznói bronzajtókról, amelyek Szent Adalbert életét ábrázolják.", "A történelmi Piast-útvonalon fekszik, amely a korai Lengyelország kulcsfontosságú helyszíneit köti össze.", "Ez volt a lengyel érsekség első székhelye.", "A legenda szerint ott alapították, ahol a mitikus Lech megpillantott egy fehér sasfészket."],
      ro: ["Recunoscută ca prima capitală a Poloniei în secolul al X-lea.", "A găzduit Congresul de la Gniezno în anul 1000.", "Cinci regi polonezi timpurii au fost încoronați în Catedrala din Gniezno.", "Catedrala adăpostește sarcofagul de argint al Sfântului Adalbert.", "Faimoasă pentru ușile de bronz din secolul al XII-lea ce descriu viața Sf. Adalbert.", "Situată pe ruta istorică a Piaștilor, conectând site-uri cheie ale Poloniei timpurii.", "A fost primul sediu al arhiepiscopiei poloneze.", "Conform legendei, a fost fondată acolo unde miticul Lech a văzut un cuib de vultur alb."],
      en: ["Recognized as the first capital of Poland in the 10th century.", "Hosted the Congress of Gniezno in the year 1000.", "Five early Polish kings were crowned in the Gniezno Cathedral.", "The Cathedral houses the silver sarcophagus of Saint Adalbert.", "Famous for the 12th-century bronze Gniezno Doors depicting St. Adalbert's life.", "Located on the historical Piast Route, linking key sites of early Poland.", "Was the first seat of the Polish archbishopric.", "According to legend, it was founded where the mythical Lech saw a white eagle's nest."],
    },
    image: "/geo-images/poland/gniezno.webp",
    },
    {
    id: "zamek-ksiaz",
    type: "landmark",
    parent: "PL-DS",
    coords: [16.2911, 50.8422],
    name: { de: "Schloss Fürstenstein", hu: "Książ vára", ro: "Castelul Książ", en: "Książ Castle" },
    description: {
      de: "Schloss Fürstenstein ist das drittgrößte Schloss Polens und thront dramatisch auf einer Felsklippe im Waldenburger Bergland in Niederschlesien. Ursprünglich im 13. Jahrhundert erbaut, erfuhr es zahlreiche Erweiterungen, was zu einer Mischung aus gotischen, Renaissance- und barocken Baustilen führte. Während des Zweiten Weltkriegs wurde es von den Nazis beschlagnahmt und an das geheime Tunnelkomplex-Projekt Riese angeschlossen. Heute ziehen seine opulenten Innenräume und terrassenförmigen Gärten zahlreiche Besucher an.",
      hu: "A Książ vára Lengyelország harmadik legnagyobb kastélya, amely drámai módon, egy sziklaszirten magasodik az alsó-sziléziai Wałbrzychi-hegységben. Az eredetileg 13. században épült vár számos bővítésen esett át, ami a gótikus, reneszánsz és barokk építészeti stílusok ötvözetét eredményezte. A második világháború alatt a nácik lefoglalták, és a titokzatos Riese-projekt alagútrendszeréhez kapcsolták. Ma pazar belső terei és teraszos kertjei rengeteg látogatót vonzanak.",
      ro: "Castelul Książ este al treilea cel mai mare castel din Polonia, așezat dramatic pe o stâncă în Munții Wałbrzych din Silezia Inferioară. Construit inițial în secolul al XIII-lea, a suferit numeroase extindereri, rezultând într-un amestec de stiluri arhitecturale gotice, renascentiste și baroce. În timpul celui de-al Doilea Război Mondial, a fost confiscat de naziști și conectat la complexul secret de tuneluri Proiectul Riese. Astăzi, interioarele sale opulente și grădinile terasate atrag numeroși vizitatori.",
      en: "Książ Castle is the third-largest castle in Poland, dramatically perched on a rocky cliff in the Wałbrzych Mountains of Lower Silesia. Originally built in the 13th century, it underwent numerous expansions, resulting in a blend of Gothic, Renaissance, and Baroque architectural styles. During World War II, it was seized by the Nazis and connected to the secretive Project Riese tunnel complex. Today, its opulent interiors and terraced gardens attract numerous visitors.",
    },
    facts: {
      de: ["Es ist das drittgrößte Schloss in Polen nach der Marienburg und dem Wawel.", "Wird oft als die \"Perle Niederschlesiens\" bezeichnet.", "Wurde im 13. Jahrhundert von der Piasten-Dynastie erbaut.", "Gehörte über 400 Jahre lang der mächtigen Familie Hochberg.", "1944 vom NS-Regime für das Projekt Riese beschlagnahmt.", "Liegt über einem riesigen, mysteriösen Netzwerk von unterirdischen Tunneln.", "Der Schlosskomplex verfügt über prächtige, terrassenförmige Gärten.", "Nach dem Krieg von sowjetischen Truppen ausgiebig geplündert, später aber restauriert."],
      hu: ["Malbork és a Wawel után ez a harmadik legnagyobb vár Lengyelországban.", "Gyakran nevezik \"Alsó-Szilézia gyöngyszemének\".", "A 13. században építette a Piast-dinasztia.", "Több mint 400 éven át a nagyhatalmú Hochberg család tulajdona volt.", "A náci rezsim 1944-ben elkobozta a Riese-projekt céljaira.", "Egy hatalmas, titokzatos földalatti alagútrendszer felett helyezkedik el.", "A kastélykomplexum pompás teraszos kertekkel rendelkezik.", "A háború után a szovjet csapatok alaposan kifosztották, de később helyreállították."],
      ro: ["Este al treilea cel mai mare castel din Polonia, după Malbork și Wawel.", "Adesea numit \"Perla Sileziei Inferioare\".", "Construit în secolul al XIII-lea de dinastia Piast.", "A aparținut puternicei familii Hochberg timp de peste 400 de ani.", "Confiscat de regimul nazist în 1944 pentru a fi folosit în Proiectul Riese.", "Situat deasupra unei rețele vaste, misterioase de tuneluri subterane.", "Complexul castelului prezintă grădini terasate magnifice.", "Jefuit extensiv de trupele sovietice după război, dar restaurat ulterior."],
      en: ["It is the third-largest castle in Poland, after Malbork and Wawel.", "Often referred to as the \"Pearl of Lower Silesia\".", "Built in the 13th century by the Piast dynasty.", "Belonged to the powerful Hochberg family for over 400 years.", "Confiscated by the Nazi regime in 1944 for use in Project Riese.", "Situated above a vast, mysterious network of underground tunnels.", "The castle complex features magnificent terraced gardens.", "Extensively looted by Soviet troops after the war but later restored."],
    },
    descriptionAdvanced: {
      hu: "A Książ kastély (Schloss Fürstenstein) Alsó-Szilézia legmonumentálisabb épületegegyüttese, egy varázslatos és egyben sötét titkokkal terhelt várpalota Wałbrzych mellett. A meredek sziklaszirtre épült, buja erdőkkel ölelt építményt a 13. században alapították, de jelenlegi barokk és eklektikus formáját a hatalmas Hochberg arisztokrata család birtoklása idején nyerte el. A II. világháború során a kastélyt a náci Németország kobozta el, és a rettegett Riese-projekt keretében koncentrációs tábori foglyokkal hatalmas, máig részben felfedezetlen alagútrendszert vájattak alá, feltehetően Hitler egyik főhadiszállásának szánva. A luxus és a történelmi trauma ezen döbbenetes kettőssége Lengyelország egyik legizgalmasabb látványosságává teszi. (Történelem K8 — Arisztokrata rezidenciák és a Harmadik Birodalom építkezései)"
    ,
      en: "Perched dramatically on a wooded cliff within the Wałbrzych Mountains, Książ Castle stands as a breathtaking monument to Silesian history and mystery. Often referred to as the \"Pearl of Lower Silesia,\" this architectural colossus is the third-largest castle in Poland, boasting over 400 rooms and a labyrinth of secret subterranean tunnels. While its upper floors dazzle with Baroque opulence and the legend of the beautiful Princess Daisy, its depths hold darker secrets from the Second World War. As part of the enigmatic Project Riese, the Nazis carved massive galleries into the rock beneath the foundations, fueling endless theories about hidden gold and lost treasures. Today, explorers can wander through terraced gardens and grand ballrooms, bridging the gap between aristocratic splendor and wartime enigmas. History K8 — World War II and European dynasties."
    },
    factsAdvanced: {
      hu: ["A kastély több mint 400 szobát rejt magában, ezzel a Wawel és a malborki vár után Lengyelország harmadik legnagyobb kastélya.", "A palota leghíresebb lakója az angol származású Daisy von Pless hercegné volt, akinek emlékiratai bepillantást engedtek a porosz udvar életébe.", "Az épület alatt fúrt, 50 méter mélyen fekvő náci alagútrendszer egy része ma turisztikai túrák keretében bejárható."]
    ,
      en: [
        "The castle complex encompasses a staggering interior volume of approximately 150,000 cubic meters across its various wings.",
        "Project Riese tunnels located deep beneath the castle structure descend to a depth of 50 meters below the main courtyard.",
        "Książ Castle is surrounded by 12 distinct garden terraces, each meticulously designed in different historical styles.",
        "The grand estate once served as the home of the Hochberg family for over 400 years before being seized in 1941.",
        "The castle sits at an elevation of 395 meters above sea level, overlooking the Pełcznica River valley."
      ]
    },
    image: "/geo-images/poland/zamek-ksiaz.webp",
    },
    {
    id: "zamek-lancut",
    type: "landmark",
    parent: "PL-PK",
    coords: [22.2336, 50.0683],
    name: { de: "Schloss Łańcut", hu: "Łańcuti vár", ro: "Castelul Łańcut", en: "Łańcut Castle" },
    description: {
      de: "Schloss Łańcut ist eine prächtige aristokratische Residenz im Südosten Polens, bekannt für ihre exzellente Erhaltung und eleganten Innenräume. Die im 17. Jahrhundert erbaute ursprüngliche Verteidigungsfestung wurde später in einen luxuriösen Palastkomplex umgewandelt, der von einem Landschaftspark im englischen Stil umgeben ist. Es verfügt über eine außergewöhnliche Sammlung von Pferdekutschen und originalem Adel-Mobiliar. Das Schloss ist ein Paradebeispiel für den opulenten Lebensstil des polnischen Adels.",
      hu: "A Łańcuti vár egy pompás arisztokrata rezidencia Délkelet-Lengyelországban, amely kiváló állapotáról és elegáns belső tereiről híres. A 17. században épült eredeti védőerődöt később egy angol stílusú tájparkkal körülvett, luxus palotakomplexummá alakították át. Kivételes lovaskocsi-gyűjteménnyel és eredeti arisztokrata bútorokkal büszkélkedhet. A kastély a lengyel nemesség fényűző életmódjának kiemelkedő példája.",
      ro: "Castelul Łańcut este o reședință aristocratică magnifică situată în sud-estul Poloniei, renumită pentru conservarea excelentă și interioarele elegante. Construită în secolul al XVII-lea, fortăreața defensivă originală a fost ulterior transformată într-un complex de palat luxos înconjurat de un parc peisagistic în stil englezesc. Se mândrește cu o colecție excepțională de trăsuri trase de cai și mobilier aristocratic original. Castelul servește ca un prim exemplu al stilului de viață opulent al nobilimii poloneze.",
      en: "Łańcut Castle is a magnificent aristocratic residence located in southeastern Poland, renowned for its excellent preservation and elegant interiors. Built in the 17th century, the original defensive fortress was later transformed into a luxurious palace complex surrounded by an English-style landscape park. It boasts an exceptional collection of horse-drawn carriages and original aristocratic furnishings. The castle serves as a prime example of the opulent lifestyle of Polish nobility.",
    },
    descriptionAdvanced: {
      de: "Das Schloss Łańcut ist eine der beeindruckendsten aristokratischen Residenzen in ganz Polen und ein wahres Juwel der Architektur. Ursprünglich im 17. Jahrhundert als Festung erbaut, wurde es später in einen prunkvollen Palast umgewandelt. Die Innenräume sind für ihre exquisite Ausstattung, darunter prachtvolle Kronleuchter und historische Möbel, weltberühmt. Umgeben ist das Schloss von einem weitläufigen, malerischen Landschaftspark, der zu ausgedehnten Spaziergängen einlädt. Zudem beherbergt es eine der größten Kutschensammlungen Europas, die von der Mobilität vergangener Jahrhunderte erzählt.",
      hu: "",
      ro: "",
      en: "Your journey into the heart of southeastern Poland isn't complete without a visit to Łańcut Castle, a residence that rivals the grandest palaces of Europe. Approaching the facade, you can still trace the 17th-century bastion fortifications that once protected the Lubomirski family. Inside, the atmosphere shifts from defensive might to aristocratic elegance; every room tells a tale of the Potocki family’s refined taste, from the Ballroom’s crystal chandeliers to the intricate marquetry of the floors. The castle is a rare 'time capsule,' having survived the world wars with its original furnishings virtually untouched. Beyond the walls, the Coach House reveals a staggering array of 130 carriages, offering a glimpse into a world before the engine. History K8 — European nobility and the development of palace-garden complexes."
    },
    factsAdvanced: {
      de: ["Die Kutschensammlung in Łańcut gehört zu den bedeutendsten und umfangreichsten in Europa.", "Das Schloss überstand den Zweiten Weltkrieg weitgehend unbeschadet, da der letzte Besitzer rechtzeitig floh.", "Das beeindruckende Theater im Schloss ist eines der wenigen erhaltenen Hoftheater in Polen.", "Die historische Bibliothek umfasst wertvolle alte Drucke und Handschriften."],
      hu: [],
      ro: [],
      en: [
        "The castle complex includes a Horse-Drawn Carriage Museum with over 130 historic vehicles.",
        "The manor's park spans 36 hectares and is designed in the English landscape style.",
        "The castle library houses an impressive collection of over 22,000 volumes and rare documents.",
        "The main residence features 75 individual rooms, many retaining original 18th-century decorations.",
        "Originally a bastion fortress, the site was fortified with massive earthworks in the mid-17th century."
      ]
    },
    facts: {
      de: ["Ursprünglich als Verteidigungsanlage im 17. Jahrhundert erbaut.", "Im 18. und 19. Jahrhundert zu einem prachtvollen Palast umgebaut.", "Gehörte den bedeutenden Adelsfamilien Lubomirski und Potocki.", "Überstand den Zweiten Weltkrieg völlig intakt, eine Seltenheit in Polen.", "Besticht durch opulente Innenräume mit Originalmöbeln, Kristallkronleuchtern und Kunst.", "Beherbergt eine der größten Sammlungen von Pferdekutschen in Europa.", "Umgeben von einem weitläufigen und malerischen Landschaftspark im englischen Stil.", "Veranstaltet ein renommiertes jährliches Festival für klassische Musik."],
      hu: ["Eredetileg védelmi erődítményként épült a 17. században.", "A 18. és 19. században pompás palotává építették át.", "A kiemelkedő Lubomirski és Potocki nemesi családok tulajdona volt.", "Teljesen épségben vészelte át a második világháborút, ami ritkaság Lengyelországban.", "Pompás belső terekkel rendelkezik, eredeti bútorokkal, kristálycsillárokkal és műalkotásokkal.", "Itt található Európa egyik legnagyobb lovaskocsi-gyűjteménye.", "Egy hatalmas és festői angol stílusú tájpark veszi körül.", "Egy elismert, évente megrendezett klasszikus zenei fesztiválnak ad otthont."],
      ro: ["Construit inițial ca o fortăreață defensivă în secolul al XVII-lea.", "Remodelat într-un palat măreț în secolele XVIII și XIX.", "A aparținut proeminentelor familii nobiliare Lubomirski și Potocki.", "A supraviețuit complet intact celui de-al Doilea Război Mondial, o raritate în Polonia.", "Prezintă interioare opulente cu mobilier original, candelabre de cristal și artă.", "Găzduiește una dintre cele mai mari colecții de trăsuri trase de cai din Europa.", "Înconjurat de un parc peisagistic vast și pitoresc în stil englezesc.", "Găzduiește un aclamat festival anual de muzică clasică."],
      en: ["Originally constructed as a defensive stronghold in the 17th century.", "Remodeled into a grand palace in the 18th and 19th centuries.", "Belonged to the prominent Lubomirski and Potocki noble families.", "Survived World War II completely intact, a rarity in Poland.", "Features opulent interiors with original furniture, crystal chandeliers, and art.", "Houses one of the largest collections of horse-drawn carriages in Europe.", "Surrounded by an expansive and picturesque English-style landscape park.", "Hosts an acclaimed annual classical music festival."],
    },
    image: "/geo-images/poland/zamek-lancut.webp",
    },
    {
    id: "karkonosze-np",
    type: "landmark",
    parent: "PL-DS",
    coords: [15.65, 50.75],
    name: { de: "Nationalpark Riesengebirge", hu: "Karkonosze Nemzeti Park", ro: "Parcul Național Karkonosze", en: "Karkonosze NP" },
    description: {
      de: "Der Nationalpark Riesengebirge liegt im Südwesten Polens und grenzt an den tschechischen Nationalpark Krkonoše. Er wurde 1959 gegründet, um die einzigartigen alpinen Landschaften, Gletscherkessel und die seltene Flora und Fauna zu schützen. Sein höchster Gipfel ist die Schneekoppe (Śnieżka) mit 1603 Metern über dem Meeresspiegel. Das Gebiet ist bekannt für seine atemberaubenden Wasserfälle, beeindruckenden Felsformationen und ausgedehnten Wanderwege. Seit 1992 ist er ein UNESCO-Biosphärenreservat.",
      hu: "A Karkonosze Nemzeti Park (Óriás-hegység) Délnyugat-Lengyelországban található, határos a cseh Krkonoše Nemzeti Parkkal. 1959-ben hozták létre az egyedülálló alpesi tájak, gleccserkatlanok, valamint a ritka növény- és állatvilág védelme érdekében. Legmagasabb csúcsa a Śnieżka (Sněžka), amely 1603 méterrel emelkedik a tengerszint fölé. A terület híres lenyűgöző vízeséseiről, sziklaképződményeiről és kiterjedt túraútvonalairól. 1992 óta az UNESCO bioszféra-rezervátum része.",
      ro: "Parcul Național Karkonosze este situat în Munții Karkonosze din sud-vestul Poloniei. Se învecinează cu Parcul Național Krkonoše din Republica Cehă. A fost creat în 1959 pentru a proteja peisajele alpine unice, circurile glaciare și flora și fauna rară. Cel mai înalt vârf al său este Śnieżka, atingând 1603 metri deasupra nivelului mării. Zona este renumită pentru cascadele sale uimitoare, formațiunile stâncoase și traseele de drumeție extinse.",
      en: "Karkonosze National Park is a National Park in the Karkonosze Mountains in southwestern Poland. It shares a border with the Czech Krkonoše National Park. The park was created in 1959 to protect the unique alpine landscapes, glacial cirques, and rare flora and fauna. Its highest peak is Śnieżka, reaching 1603 meters above sea level. The area is renowned for its stunning waterfalls, rock formations, and extensive hiking trails.",
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Riesengebirge schützt die einzigartige und raue Gebirgslandschaft an der Grenze zwischen Polen und Tschechien. Dominiert wird das Gebiet von der Schneekoppe, dem höchsten Gipfel des Gebirges, der einen atemberaubenden Panoramablick bietet. Tiefe Gletscherkessel, beeindruckende Wasserfälle und seltene alpine Pflanzenarten prägen das charakteristische Bild der Region. Der Park ist ein Paradies für Wanderer und Naturliebhaber, die auf gut ausgebauten Pfaden die unberührte Natur erkunden können. Im Winter verwandelt sich die Landschaft in ein beliebtes Ziel für Skifahrer und Schneeschuhwanderer.",
      hu: "",
      ro: "",
      en: "Venture into the misty heights of the Karkonosze National Park, where the Giant Mountains reveal their ancient secrets through a landscape shaped by fire and ice. For millions of years, glacial forces carved the dramatic cirques and jagged granite formations that define this rugged borderland between Poland and the Czech Republic. As an explorer navigating the high-altitude trails, you will witness the raw power of the Kamieńczyk Waterfall plummeting into a moss-covered gorge and traverse subalpine meadows teeming with rare endemic flora like the Karkonosze bellflower. Standing atop the windswept Śnieżka peak, the panoramic views stretch across Central Europe, offering a glimpse into an ecosystem where the climate mimics that of far northern Scandinavia. This protected wilderness serves as a vital sanctuary for mouflons and alpine bird species. Geography K7 — Glacial landforms and alpine ecosystems."
    },
    factsAdvanced: {
      de: ["Die Schneekoppe ist mit 1.603 Metern der höchste Berg des Riesengebirges.", "Der Nationalpark ist von der UNESCO als Biosphärenreservat anerkannt.", "Der sagenhafte Berggeist Rübezahl ist eng mit der Folklore dieser Region verbunden.", "Im Park befinden sich beeindruckende Gletscherkessel aus der letzten Eiszeit."],
      hu: [],
      ro: [],
      en: [
        "The park protects a total area of approximately 55.76 square kilometers of high-mountain terrain.",
        "Śnieżka, the highest peak at 1,603 meters, experiences hurricane-force winds exceeding 60 meters per second.",
        "The Kamieńczyk Waterfall is the tallest in the Polish Karkonosze, featuring a spectacular 27-meter vertical drop.",
        "There are 6 distinct post-glacial cirques within the park, with rock walls reaching heights of up to 200 meters.",
        "The park is home to over 1,000 species of plants, including rare relics from the glacial period."
      ]
    },
    facts: {
      de: ["Wurde 1959 in der Gebirgskette der Sudeten gegründet.", "Teilt sich eine Grenze mit einem ähnlichen Nationalpark in der Tschechischen Republik.", "Schützt einzigartige alpine Landschaften und Torfmoore.", "Die Schneekoppe (Śnieżka) ist mit 1603 Metern der höchste Gipfel im Park.", "Beherbergt dramatische Gletscherkessel wie Śnieżne Kotły.", "Heimat seltener Pflanzenarten, die aus der Eiszeit überlebt haben.", "Bietet wunderschöne Wasserfälle wie Kamieńczyk und Szklarka.", "Seit 1992 als UNESCO-Biosphärenreservat anerkannt."],
      hu: ["1959-ben alapították a Szudéták hegységben.", "Határos egy hasonló nemzeti parkkal Csehországban.", "Egyedülálló alpesi tájakat és tőzeglápokat véd.", "A Śnieżka a park legmagasabb csúcsa, 1603 méter magas.", "Drámai gleccserkatlanokat tartalmaz, mint például a Śnieżne Kotły.", "A jégkorszakból fennmaradt ritka növényfajoknak ad otthont.", "Gyönyörű vízesésekkel rendelkezik, mint a Kamieńczyk és a Szklarka.", "1992 óta elismert UNESCO bioszféra-rezervátum."],
      ro: ["Înființat în 1959 în lanțul muntos Sudeți.", "Împarte o graniță cu un parc național similar din Republica Cehă.", "Protejează peisaje alpine unice și turbării.", "Śnieżka este cel mai înalt vârf din parc, la 1603 metri.", "Conține circuri glaciare dramatice, cum ar fi Śnieżne Kotły.", "Găzduiește specii de plante rare care au supraviețuit din Era Glaciară.", "Prezintă cascade frumoase, precum Kamieńczyk și Szklarka.", "Recunoscut ca rezervație a biosferei UNESCO din 1992."],
      en: ["Established in 1959 in the Sudetes mountain range.", "Shares a border with a similar national park in the Czech Republic.", "Protects unique alpine landscapes and peat bogs.", "Śnieżka is the highest peak in the park at 1603 meters.", "Contains dramatic glacial cirques like Śnieżne Kotły.", "Home to rare plant species surviving from the Ice Age.", "Features beautiful waterfalls such as Kamieńczyk and Szklarka.", "Recognized as a UNESCO biosphere reserve since 1992."],
    },
    image: "/geo-images/poland/karkonosze-np.webp",
    },
    {
    id: "slowinski-np",
    type: "landmark",
    parent: "PL-PM",
    coords: [17.38, 54.71],
    name: { de: "Slowinzischer Nationalpark", hu: "Słowiński Nemzeti Park", ro: "Parcul Național Słowiński", en: "Słowiński NP" },
    description: {
      de: "Der Slowinzische Nationalpark liegt an der Ostseeküste im Norden Polens und wurde 1967 gegründet. Er ist berühmt für seine massiven Wanderdünen, die vom Wind angetrieben werden und eine Höhe von bis zu 30 Metern erreichen können. Der Park umfasst auch Küstenseen wie Łebsko und Gardno sowie Torfmoore, Wiesen und Kiefernwälder. Diese dynamische Landschaft wurde 1977 zum UNESCO-Biosphärenreservat erklärt. Sie dient als wichtiges Schutzgebiet für zahlreiche Arten von Zugvögeln.",
      hu: "A Słowiński Nemzeti Park Észak-Lengyelországban, a Balti-tenger partján fekszik, és 1967-ben alapították. Híres hatalmas vándorló homokdűnéiről, amelyeket a szél mozgat, és magasságuk elérheti a 30 métert is. A park területén olyan tengerparti tavak is találhatók, mint a Łebsko és a Gardno, valamint tőzeglápok, rétek és fenyőerdők. Ezt a dinamikus tájat 1977-ben UNESCO bioszféra-rezervátummá nyilvánították. Számos vonuló madárfaj fontos menedékhelyeként szolgál.",
      ro: "Parcul Național Słowiński este situat de-a lungul coastei Mării Baltice în nordul Poloniei, înființat în 1967. Este renumit pentru dunele sale masive de nisip mișcătoare, care sunt conduse de vânt și pot ajunge până la 30 de metri înălțime. Parcul cuprinde, de asemenea, lacuri de coastă precum Łebsko și Gardno, alături de turbării, pajiști și păduri de pini. Acest peisaj dinamic a fost desemnat Rezervație a Biosferei UNESCO în 1977. Acesta servește ca un sanctuar important pentru numeroase specii de păsări migratoare.",
      en: "Słowiński National Park is located along the Baltic Sea coast in northern Poland, established in 1967. It is famous for its massive shifting sand dunes, which are driven by the wind and can reach up to 30 meters in height. The park also encompasses coastal lakes like Łebsko and Gardno, along with peat bogs, meadows, and pine forests. This dynamic landscape was designated a UNESCO Biosphere Reserve in 1977. It serves as an important sanctuary for numerous species of migratory birds.",
    },
    descriptionAdvanced: {
      de: "Der Slowinzische Nationalpark an der Ostseeküste ist weltbekannt für seine beeindruckenden, imposanten Wanderdünen. Diese riesigen Sandmassen bewegen sich stetig durch den Wind und begraben dabei langsam den angrenzenden Kiefernwald unter sich. Neben der faszinierenden Dünenlandschaft umfasst der Park auch große Küstenseen, die als wichtige Lebensräume für zahlreiche Vogelarten dienen. Die raue Schönheit der Ostsee und die stille, wüstenähnliche Landschaft der Dünen bilden einen atemberaubenden Kontrast. Besucher können das Gebiet auf malerischen Wander- und Radwegen ausgiebig erkunden.",
      hu: "",
      ro: "",
      en: "Stretching along the windswept Baltic coastline, Słowiński National Park reveals a landscape that feels more like a desert mirage than northern Europe. As I trek across the colossal 'Moving Dunes,' some peaking at 42 meters, the sand shifts beneath my boots, driven by relentless sea breezes that reshape the horizon every season. These gargantuan dunes are slowly encroaching upon the coastal pine forests, swallowing trees in a slow-motion battle of elements. Between the white sands and the deep blue sea lie the expansive Łebsko and Gardno lakes, remnants of ancient Baltic bays. This UNESCO Biosphere Reserve is a living laboratory of coastal dynamics, where shifting sands, peat bogs, and rare bird species create a fragile, ever-changing ecosystem that defies permanent mapping. Geography K7 — coastal erosion and wind-shaped landforms."
    },
    factsAdvanced: {
      de: ["Die Wanderdünen im Park bewegen sich jährlich um bis zu 10 Meter.", "Der Nationalpark wurde in die Liste der UNESCO-Biosphärenreservate aufgenommen.", "Die größte Düne, die Lącka Góra, erreicht eine Höhe von über 40 Metern.", "In der Region gibt es Überreste alter Wälder, die regelmäßig vom Sand freigelegt werden."],
      hu: [],
      ro: [],
      en: [
        "The highest dune, Łącka Góra, reaches an elevation of 42 meters above sea level and moves at a rate of 3 to 10 meters per year.",
        "Łebsko Lake, the third largest lake in Poland, covers an area of approximately 71 square kilometers within the park's boundaries.",
        "The park protects over 32,700 hectares of land, of which nearly 6,000 hectares are strictly protected coastal waters.",
        "Designated a UNESCO Biosphere Reserve in 1977, the park provides a habitat for over 260 species of birds, including the white-tailed eagle.",
        "The park's coastline stretches for 32.5 kilometers along the Baltic Sea, featuring unique salt-tolerant vegetation and coastal pine forests."
      ]
    },
    facts: {
      de: ["Liegt an der Ostseeküste im Norden Polens.", "1967 gegründet, um das Küstenökosystem zu schützen.", "Am besten bekannt für seine spektakulären Wanderdünen.", "Die Dünen bewegen sich aufgrund der vorherrschenden Winde jährlich um mehrere Meter.", "Umfasst große Küstenseen wie den Łebsko-See und den Gardno-See.", "Wurde 1977 als UNESCO-Biosphärenreservat ausgewiesen.", "Ein wichtiger Lebensraum und Rastplatz für über 250 Vogelarten.", "Beherbergt Kiefernwälder, die manchmal von den vorrückenden Dünen begraben werden."],
      hu: ["A Balti-tenger partján, Észak-Lengyelországban található.", "1967-ben alapították a part menti ökoszisztéma védelmére.", "Leginkább látványos vándorló homokdűnéiről ismert.", "A dűnék az uralkodó szelek miatt évente több métert mozognak.", "Nagy tengerparti tavakat foglal magában, mint például a Łebsko- és a Gardno-tó.", "1977-ben UNESCO bioszféra-rezervátummá nyilvánították.", "Több mint 250 madárfaj kulcsfontosságú élőhelye és pihenőhelye.", "Olyan fenyőerdők találhatók itt, amelyeket olykor maga alá temet a homok."],
      ro: ["Situat pe coasta Mării Baltice în nordul Poloniei.", "Înființat în 1967 pentru a proteja ecosistemul de coastă.", "Cel mai bine cunoscut pentru spectaculoasele sale dune de nisip mișcătoare.", "Dunele se deplasează câțiva metri în fiecare an din cauza vânturilor predominante.", "Include lacuri mari de coastă, cum ar fi Lacul Łebsko și Lacul Gardno.", "Desemnat ca Rezervație a Biosferei UNESCO în 1977.", "Un habitat crucial și loc de odihnă pentru peste 250 de specii de păsări.", "Dispune de păduri de pini care sunt uneori îngropate de dunele ce avansează."],
      en: ["Situated on the Baltic Sea coast in northern Poland.", "Established in 1967 to protect the coastal ecosystem.", "Best known for its spectacular shifting sand dunes.", "The dunes move several meters each year due to prevailing winds.", "Includes large coastal lakes, such as Lake Łebsko and Lake Gardno.", "Designated as a UNESCO Biosphere Reserve in 1977.", "A crucial habitat and resting place for over 250 bird species.", "Features pine forests that are sometimes buried by the advancing dunes."],
    },
    image: "/geo-images/poland/slowinski-np.webp",
    },
    {
    id: "pieniny-np",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.4, 49.43],
    name: { de: "Nationalpark Pieninen", hu: "Pieniny Nemzeti Park", ro: "Parcul Național Pieniny", en: "Pieniny NP" },
    description: {
      de: "Der Pieninen-Nationalpark liegt im südlichsten Teil Polens und grenzt an die Slowakei. Er wurde 1932 gegründet und ist einer der ältesten Nationalparks des Landes. Er schützt die malerischen Pieninen, vor allem den zentralen Bereich der Eigentlichen Pieninen (Pieniny Właściwe). Die berühmteste Attraktion des Parks ist der atemberaubende Dunajec-Durchbruch, bei dem sich Kalksteinklippen dramatisch über das Wasser erheben. Besucher erkunden die Schlucht oft mit traditionellen Holzflößen.",
      hu: "A Pieniny Nemzeti Park Lengyelország legdélibb részén található, Szlovákiával határos. 1932-ben alapították, így az ország egyik legrégebbi nemzeti parkja. A festői Pieninek hegységet, elsősorban a középső Pieniny Właściwe vonulatot védi. A park leghíresebb látványossága a lenyűgöző Dunajeci-áttörés, ahol a mészkősziklák drámaian magasodnak a víz fölé. A látogatók gyakran hagyományos fa tutajokon fedezik fel a szurdokot.",
      ro: "Parcul Național Pieniny este situat în partea cea mai sudică a Poloniei, la granița cu Slovacia. Înființat în 1932, este unul dintre cele mai vechi parcuri naționale din țară. Protejează pitoreștii Munți Pieniny, în principal lanțul central Pieniny Właściwe. Cea mai faimoasă caracteristică a parcului este uimitorul Defileu al râului Dunajec, unde stâncile de calcar se ridică dramatic deasupra apei. Vizitatorii explorează adesea defileul pe plute tradiționale de lemn.",
      en: "Pieniny National Park is located in the southernmost part of Poland, bordering Slovakia. Established in 1932, it is one of the oldest national parks in the country. It protects the picturesque Pieniny Mountains, primarily the central Pieniny Właściwe range. The park's most famous feature is the stunning Dunajec River Gorge, where limestone cliffs rise dramatically above the water. Visitors often explore the gorge via traditional wooden rafts.",
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Pieninen in Südpolen besticht durch seine dramatischen Kalksteinformationen und tiefen Flusstäler. Das Herzstück des Parks ist der atemberaubende Durchbruch des Flusses Dunajec, der sich in malerischen Schleifen durch die Berge schlängelt. Die schroffen Felsgipfel der Trzy Korony (Drei Kronen) bieten spektakuläre Ausblicke über die gesamte Gebirgslandschaft. Seltene Tier- und Pflanzenarten, darunter der Apollofalter, haben in dieser geschützten Natur eine sichere Heimat gefunden. Traditionelle Holzflößerei auf dem Dunajec ist eine der beliebtesten Attraktionen für Besucher aus aller Welt.",
      hu: "",
      ro: "",
      en: "Imagine drifting down a winding ribbon of turquoise water, flanked by towering limestone walls that seem to scrape the very heavens. This is the heart of Pieniny National Park, where the Dunajec River has spent millennia carving one of Europe's most spectacular river gorges. As an explorer navigating these waters on a traditional wooden raft, you are dwarfed by the sheer scale of the White Limestone cliffs. The park is home to the iconic Trzy Korony peak, which serves as a natural crown over this rugged landscape. Beyond the water, rare flora like the Pieniny dandelion clings to the rock faces, surviving in microclimates found nowhere else on Earth. Whether you are trekking the mist-shrouded trails or tracing the border with Slovakia, the park reveals the raw power of geological erosion and the delicate balance of mountain ecosystems. Geography K7 – Mountain landscapes and fluvial erosion."
    },
    factsAdvanced: {
      de: ["Die Trzy Korony (Drei Kronen) sind das bekannteste Felsmassiv im Pieninen-Gebirge.", "Der Dunajec-Durchbruch gilt als eine der schönsten Flussschluchten in Europa.", "Der Park schützt eine einzigartige Reliktflora aus der Zeit vor den letzten Eiszeiten.", "Holzflößerei wird hier seit dem frühen 19. Jahrhundert als Touristenattraktion angeboten."],
      hu: [],
      ro: [],
      en: [
        "The park covers a total area of approximately 23.46 square kilometers, making it one of the smallest yet most biologically diverse national parks in Poland.",
        "The Dunajec River Gorge stretches for 8 kilometers, with jagged limestone cliffs reaching heights of up to 300 meters above the water level.",
        "Trzy Korony, the park's highest summit in the Central Pieniny, stands at 982 meters above sea level and features a famous viewing platform.",
        "Established in 1932, it formed part of the first international protected area in Europe due to its shared borders with the Slovakian Pieniny.",
        "The park is home to over 1,100 species of vascular plants and approximately 7,000 species of animals, including many endemic mountain insects."
      ]
    },
    facts: {
      de: ["Liegt im Süden Polens, an der Grenze zur Slowakei.", "Wurde 1932 gegründet und ist einer der ältesten Nationalparks Polens.", "Schützt die malerischen Kalksteingipfel der Pieninen.", "Der höchste Gipfel im Park ist Trzy Korony (Drei Kronen).", "Berühmt für den spektakulären Dunajec-Durchbruch.", "Traditionelle Holzfloßfahrten auf dem Dunajec sind eine Hauptattraktion.", "Heimat einer vielfältigen Flora, einschließlich seltener endemischer Pflanzenarten.", "Der Park bietet wunderschöne mittelalterliche Ruinen wie die Burg Czorsztyn in der Nähe."],
      hu: ["Dél-Lengyelországban, a szlovák határon található.", "1932-ben alapították, így Lengyelország egyik legrégebbi nemzeti parkja.", "A Pieninek festői mészkőcsúcsait védi.", "A park legmagasabb csúcsa a Trzy Korony (Három Korona).", "Híres a látványos Dunajeci-áttörésről.", "A hagyományos fa tutajozás a Dunajecen a legfőbb turisztikai vonzerő.", "Változatos flórának ad otthont, beleértve ritka endemikus növényfajokat is.", "A park közelében gyönyörű középkori romok is találhatók, mint a Czorsztyn vár."],
      ro: ["Situat în sudul Poloniei, la granița cu Slovacia.", "Înființat în 1932, ceea ce îl face unul dintre cele mai vechi parcuri naționale din Polonia.", "Protejează pitoreștile vârfuri de calcar ale Munților Pieniny.", "Cel mai înalt vârf din parc este Trzy Korony (Trei Coroane).", "Faimos pentru spectaculosul Defileu al râului Dunajec.", "Excursiile tradiționale cu pluta de lemn pe râul Dunajec sunt o atracție majoră.", "Găzduiește o floră diversă, inclusiv specii de plante endemice rare.", "Parcul prezintă ruine medievale frumoase, cum ar fi Castelul Czorsztyn din apropiere."],
      en: ["Located in southern Poland, on the border with Slovakia.", "Established in 1932, making it one of Poland's oldest national parks.", "Protects the scenic limestone peaks of the Pieniny Mountains.", "The highest peak in the park is Trzy Korony (Three Crowns).", "Famous for the spectacular Dunajec River Gorge.", "Traditional wooden raft trips on the Dunajec River are a major attraction.", "Home to diverse flora, including rare endemic plant species.", "The park features beautiful medieval ruins, such as Czorsztyn Castle nearby."],
    },
    image: "/geo-images/poland/pieniny-np.webp",
    },
    {
    id: "dunajec-gorge",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.41, 49.41],
    name: { de: "Dunajec-Durchbruch", hu: "Dunajeci-áttörés", ro: "Defileul Dunajec", en: "Dunajec River Gorge" },
    description: {
      de: "Der Dunajec-Durchbruch ist ein spektakuläres Naturdenkmal, das durch die Pieninen in Südpolen und der Nordslowakei verläuft. Der Fluss schlängelt sich durch aufragende Kalksteinklippen, die bis zu 300 Meter Höhe erreichen. Es ist das Herzstück des Pieninen-Nationalparks und bietet atemberaubende Landschaften sowie eine reiche Artenvielfalt. Seit über einem Jahrhundert sind traditionelle Holzfloßfahrten, die von einheimischen Goralen gesteuert werden, eine beliebte Art, die Schlucht zu erleben. Sie gilt als eine der schönsten Flussschluchten in Europa.",
      hu: "A Dunajeci-áttörés egy látványos természeti nevezetesség, amely a Pienineken folyik keresztül Dél-Lengyelországban és Észak-Szlovákiában. A folyó kanyarog a magasodó mészkősziklák között, amelyek akár 300 méteres magasságot is elérnek. Ez a Pieniny Nemzeti Park központja, amely lélegzetelállító tájat és gazdag biológiai sokféleséget kínál. Több mint egy évszázada a helyi gorálok által irányított hagyományos fa tutajozás népszerű módja a szurdok megtapasztalásának. Európa egyik legszebb folyami szurdokaként tartják számon.",
      ro: "Defileul râului Dunajec este un punct de reper natural spectaculos, care trece prin Munții Pieniny din sudul Poloniei și nordul Slovaciei. Râul șerpuiește printre stâncile impunătoare de calcar care ating până la 300 de metri înălțime. Este piesa centrală a Parcului Național Pieniny, oferind peisaje uluitoare și o bogată biodiversitate. De peste un secol, excursiile tradiționale cu pluta din lemn conduse de goralii locali sunt o modalitate populară de a experimenta defileul. Este considerat unul dintre cele mai frumoase defilee fluviale din Europa.",
      en: "The Dunajec River Gorge is a spectacular natural landmark running through the Pieniny Mountains in southern Poland and northern Slovakia. The river winds through towering limestone cliffs that reach up to 300 meters in height. It is the centerpiece of Pieniny National Park, offering breathtaking scenery and rich biodiversity. For over a century, traditional wooden raft trips steered by local Gorals have been a popular way to experience the gorge. It is considered one of the most beautiful river gorges in Europe.",
    },
    descriptionAdvanced: {
      de: "Der Dunajec-Durchbruch ist ein beeindruckendes Naturwunder im Herzen des Pieninen-Gebirges. Der Fluss Dunajec hat sich im Laufe der Jahrtausende tief in das Kalksteingestein gegraben und dabei steile, bis zu 300 Meter hohe Felswände geschaffen. Diese gewundenen Schluchten bieten ein spektakuläres Panorama und gehören zu den schönsten Flusslandschaften Europas. Die traditionelle Fahrt auf einem Holzfloß bietet die beste Möglichkeit, diese dramatische Naturkulisse hautnah zu erleben. Umgeben von unberührter Natur, ist der Ort ein Paradies für Naturliebhaber und Fotografen.",
      hu: "",
      ro: "",
      en: "Imagine drifting silently through the heart of the Pieniny Mountains, where the Dunajec River has spent millennia carving a zig-zagging masterpiece through ancient limestone. As your traditional wooden raft, guided by the steady hand of a Goral raftsman, glides past the towering Trzy Korony peaks, the cliffs rise nearly 300 meters above the emerald waters. This narrow corridor serves as a dramatic natural border between Poland and Slovakia, where rare black storks circle above and alpine flora clings to the sheer rock faces. The gorge is not just a scenic wonder; it is a living classroom of tectonic forces and hydraulic erosion. Watching the river navigate its seven major loops reveals the immense power of nature in shaping the European landscape. Geography K7 — River erosion and mountain formation."
    },
    factsAdvanced: {
      de: ["Die Schlucht bildet auf weiten Strecken die natürliche Grenze zwischen Polen und der Slowakei.", "Die traditionelle Floßfahrt auf dem Dunajec dauert in der Regel etwa zwei bis drei Stunden.", "Die senkrechten Kalksteinfelsen erheben sich majestätisch direkt aus dem Wasser.", "Die Route der Flößer ist seit über 150 Jahren nahezu unverändert geblieben."],
      hu: [],
      ro: [],
      en: [
        "The Dunajec River Gorge is approximately 18 kilometers long, stretching from Sromowce Niżne to the town of Szczawnica.",
        "The river features seven major loops along its course through the Pieniny Mountains, creating a highly serpentine path.",
        "Limestone cliffs within the gorge reach a maximum vertical height of about 300 meters above the river's surface.",
        "Traditional rafting trips for tourists have been officially organized in the gorge since 1832, making it one of Europe's oldest continuous attractions.",
        "The area is protected by the Pieniny National Park, which was established in 1932 as the very first national park in Poland."
      ]
    },
    facts: {
      de: ["Bildet eine natürliche Grenze zwischen Polen und der Slowakei in den Pieninen.", "Verfügt über dramatische Kalksteinklippen, die bis zu 300 Meter über den Fluss ragen.", "Der Fluss mäandriert stark und schafft so eine malerische und einzigartige Landschaft.", "Befindet sich innerhalb der Grenzen des Pieninen-Nationalparks.", "Das traditionelle Holz-Rafting durch die Schlucht ist eine der Haupttouristenattraktionen.", "Die Rafting-Tradition reicht bis in das frühe 19. Jahrhundert zurück.", "Die Schlucht bietet Lebensraum für seltene Vogelarten wie den Schwarzstorch.", "Kann auch über Wander- und Radwege auf der slowakischen Seite erkundet werden."],
      hu: ["Természetes határt képez Lengyelország és Szlovákia között a Pieninekben.", "Drámai mészkősziklái akár 300 méterrel a folyó fölé is magasodhatnak.", "A folyó élesen kanyarog, festői és egyedülálló tájat hozva létre.", "A Pieniny Nemzeti Park határain belül található.", "A hagyományos fa tutajozás a szurdokban jelentős turisztikai attrakció.", "A tutajozás hagyománya a 19. század elejére nyúlik vissza.", "A szurdok élőhelyet biztosít olyan ritka madárfajoknak, mint a fekete gólya.", "Gyalogos és kerékpáros ösvényeken is felfedezhető a szlovák oldalról."],
      ro: ["O graniță naturală între Polonia și Slovacia în Munții Pieniny.", "Prezintă stânci dramatice de calcar care se ridică la până la 300 de metri deasupra râului.", "Râul meandrează puternic, creând un peisaj pitoresc și unic.", "Situat în limitele Parcului Național Pieniny.", "Plutitul tradițional pe lemn pe defileu este o atracție turistică majoră.", "Tradiția plutăritului datează de la începutul secolului al XIX-lea.", "Defileul oferă habitat pentru specii de păsări rare, cum ar fi barza neagră.", "Poate fi explorat și prin trasee de drumeții și ciclism de pe partea slovacă."],
      en: ["A natural border between Poland and Slovakia in the Pieniny Mountains.", "Features dramatic limestone cliffs rising up to 300 meters above the river.", "The river meanders sharply, creating a picturesque and unique landscape.", "Located within the boundaries of Pieniny National Park.", "Traditional wooden rafting down the gorge is a major tourist attraction.", "The rafting tradition dates back to the early 19th century.", "The gorge provides habitat for rare bird species like the black stork.", "Can also be explored via hiking and cycling trails along the Slovak side."],
    },
    image: "/geo-images/poland/dunajec-gorge.webp",
    },
    {
    id: "hel-peninsula",
    type: "landmark",
    parent: "PL-PM",
    coords: [18.8, 54.65],
    name: { de: "Halbinsel Hel", hu: "Hel-félsziget", ro: "Peninsula Hel", en: "Hel Peninsula" },
    description: {
      de: "Die Halbinsel Hel ist eine 35 Kilometer lange Nehrung im Norden Polens, die die Danziger Bucht von der offenen Ostsee trennt. Ihre Breite variiert von etwa 300 Metern bis zu 3 Kilometern an der breitesten Stelle. Historisch gesehen ein strategischer Militärstandort, ist es heute ein sehr beliebtes Sommerziel, das für seine wunderschönen Sandstrände und reizvollen Küstenstädte bekannt ist. Aufgrund günstiger Windverhältnisse ist die Halbinsel ein Paradies für Wind- und Kitesurfer. Eine Eisenbahnlinie verläuft über ihre gesamte Länge und verbindet die Städte mit dem Festland.",
      hu: "A Hel-félsziget egy 35 kilométer hosszú homokturzás Észak-Lengyelországban, amely elválasztja a Pucki-öblöt a nyílt Balti-tengertől. Szélessége körülbelül 300 métertől 3 kilométerig terjed a legszélesebb pontján. Történelmileg stratégiai katonai jelentőségű volt, ma pedig igen népszerű nyári turisztikai célpont, amely gyönyörű homokos strandjairól és bájos tengerparti városairól ismert. A kedvező szélviszonyok miatt a félsziget a szörfözés és a kitesurfing szerelmeseinek paradicsoma. Egész hosszában vasútvonal halad végig, amely összeköti a településeket a szárazfölddel.",
      ro: "Peninsula Hel este o peninsulă de nisip lungă de 35 de kilometri din nordul Poloniei, care separă Golful Puck de Marea Baltică deschisă. Lățimea sa variază de la aproximativ 300 de metri la 3 kilometri în cel mai lat punct al său. Din punct de vedere istoric, a fost o locație militară strategică, iar acum este o destinație turistică de vară foarte populară, cunoscută pentru plajele sale frumoase cu nisip. Peninsula este un paradis pentru pasionații de windsurfing și kitesurfing datorită condițiilor favorabile de vânt. O linie de cale ferată parcurge toată lungimea ei.",
      en: "The Hel Peninsula is a 35-kilometer-long sandbar peninsula in northern Poland, separating the Bay of Puck from the open Baltic Sea. Its width varies from about 300 meters to 3 kilometers at its widest point. Historically a strategic military location, it is now a highly popular summer tourist destination known for its beautiful sandy beaches and charming coastal towns. The peninsula is a paradise for windsurfing and kitesurfing enthusiasts due to favorable wind conditions. A railway line runs along its length, connecting the towns to the mainland.",
    },
    descriptionAdvanced: {
      de: "Die Halbinsel Hel ist eine schmale, sichelförmige Landzunge, die sich tief in die Danziger Bucht hinein erstreckt. Sie ist berühmt für ihre endlosen weißen Sandstrände und die frische, jodhaltige Meeresluft, die Erholungssuchende anzieht. Einst ein strategisch wichtiger Militärstützpunkt, ist die Region heute ein beliebtes Ziel für Kitesurfer, Segler und Badeurlauber. Entlang der Küste finden sich malerische Fischerdörfer, die ihren traditionellen Charme bewahrt haben und köstlichen frischen Fisch anbieten. Zudem beheimatet die Halbinsel ein bekanntes Seehund-Schutzzentrum, das sich um verletzte Meeressäuger kümmert.",
      hu: "",
      ro: "",
      en: "Imagine a slender finger of golden sand reaching deep into the Baltic Sea, where the roar of the open ocean meets the calm, shallow waters of the Bay of Puck. This is the Hel Peninsula, a geographical wonder shaped by relentless maritime currents over centuries. As you travel its length, the landscape shifts from dense pine forests to sprawling dunes and historic fishing villages. Beyond its sun-drenched beaches, the peninsula whispers tales of military resilience from World War II, with hidden bunkers still guarding the coast. Today, it stands as a premier destination for wind sports, where the sky is constantly painted with the vibrant sails of kitesurfers. Whether you are exploring the lighthouse at the very tip or cycling the scenic coastal path, Hel offers a unique blend of natural beauty and strategic history. Geography K7 — coastal landforms and maritime ecosystems."
    },
    factsAdvanced: {
      de: ["Die Halbinsel ist an ihrer schmalsten Stelle nur etwa 150 Meter breit.", "Hel war im Zweiten Weltkrieg einer der am längsten verteidigten polnischen Stützpunkte.", "Das Fokarium in Hel widmet sich der Rettung und Erforschung von Ostseekegelrobben.", "Aufgrund der günstigen Winde gilt die Region als eines der besten Kitesurf-Reviere Europas."],
      hu: [],
      ro: [],
      en: [
        "The peninsula stretches for 35 kilometers, acting as a natural breakwater between the Baltic Sea and the Bay of Puck.",
        "At its narrowest point near the village of Chałupy, the sandbar is only about 150 meters wide.",
        "The Hel Lighthouse, a brick octagonal tower, stands at a height of 41.5 meters and its light is visible for 18 nautical miles.",
        "During the 1939 invasion, Polish forces defended the Hel Fortified Area for 32 days before surrendering on October 2.",
        "The local Seal Sanctuary houses a colony of Baltic grey seals, a species where adult males can weigh over 300 kilograms."
      ]
    },
    facts: {
      de: ["Eine 35 Kilometer lange Sandbank, die in die Ostsee reicht.", "Trennt die Putziger Wiek (Bay of Puck) von den offenen Gewässern der Ostsee.", "Variiert in der Breite von extrem schmal (unter 300 m) bis etwa 3 km.", "Historisch bedeutsam als befestigtes Militärgebiet während des Zweiten Weltkriegs.", "Heute ein beliebtes Sommerurlaubsziel mit unberührten Sandstränden.", "Sehr beliebt für Wind- und Kitesurfen aufgrund hervorragender Winde.", "Beherbergt mehrere malerische Städte, darunter Chałupy, Jastarnia und Hel.", "Verfügt über eine einzigartige Seehundstation (Fokarium) in der Stadt Hel."],
      hu: ["Egy 35 kilométer hosszú homokturzás, amely benyúlik a Balti-tengerbe.", "Elválasztja a Pucki-öblöt a Balti-tenger nyílt vizeitől.", "Szélessége rendkívül keskenytől (300 m alatt) körülbelül 3 km-ig terjed.", "Történelmileg jelentős megerősített katonai terület a második világháború alatt.", "Ma kiemelt nyári nyaralóhely, érintetlen homokos strandokkal.", "Kiváló szele miatt nagyon népszerű a szörfözők és kiteszörfösök körében.", "Számos festői városnak ad otthont, köztük Chałupy, Jastarnia és Hel.", "A Hel városában egyedülálló fókamenhely (Fokarium) is található."],
      ro: ["Un banc de nisip lung de 35 de kilometri care se extinde în Marea Baltică.", "Separă Golful Puck de apele deschise ale Mării Baltice.", "Variază în lățime de la extrem de îngust (sub 300 m) la aproximativ 3 km.", "Istoric semnificativ ca zonă militară fortificată în timpul celui de-al Doilea Război Mondial.", "Acum o destinație de vacanță de vară de prim rang, cu plaje cu nisip imaculate.", "Foarte populară pentru windsurfing și kitesurfing datorită vânturilor excelente.", "Găzduiește mai multe orașe pitorești, inclusiv Chałupy, Jastarnia și Hel.", "Prezintă un sanctuar unic de foci (Fokarium) situat în orașul Hel."],
      en: ["A 35-kilometer-long sandbar extending into the Baltic Sea.", "Separates the Bay of Puck from the open waters of the Baltic.", "Varies in width from extremely narrow (under 300m) to about 3km.", "Historically significant as a fortified military area during World War II.", "Now a premier summer holiday destination with pristine sandy beaches.", "Very popular for windsurfing and kitesurfing due to excellent winds.", "Home to several picturesque towns, including Chałupy, Jastarnia, and Hel.", "Features a unique seal sanctuary (Fokarium) located in the town of Hel."],
    },
    image: "/geo-images/poland/hel-peninsula.webp",
    },
    {
    id: "bialka-tatrzanska",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.1, 49.39],
    name: { de: "Białka Tatrzańska", hu: "Białka Tatrzańska", ro: "Białka Tatrzańska", en: "Białka Tatrzańska" },
    description: {
      de: "Białka Tatrzańska ist ein malerisches Dorf in Südpolen, gelegen in der Tatra-Region nahe der slowakischen Grenze. Es hat sich rasant zu einem der beliebtesten und modernsten Skigebiete Polens entwickelt, insbesondere durch den Komplex Kotelnica Białczańska. Im Sommer zieht es Besucher mit seinem wunderschönen Gebirgsfluss Białka und zahlreichen Wanderwegen an. Das Dorf ist auch berühmt für seinen großen Geothermal-Wasserpark Terma Bania. Es bietet eine Mischung aus traditioneller Goralenkultur und modernen touristischen Annehmlichkeiten.",
      hu: "Białka Tatrzańska egy festői falu Dél-Lengyelországban, a Tátra régiójában, közel a szlovák határhoz. Gyorsan Lengyelország egyik legnépszerűbb és legmodernebb síközpontjává fejlődött, különös tekintettel a Kotelnica Białczańska komplexumra. Nyáron a gyönyörű hegyi folyójával, a Białkával és számos túraútvonalával vonzza a látogatókat. A falu híres hatalmas geotermikus víziparkjáról, a Terma Baniáról is. A hagyományos hegyvidéki kultúra és a modern turisztikai létesítmények keverékét kínálja.",
      ro: "Białka Tatrzańska este un sat pitoresc din sudul Poloniei, situat în regiunea Munților Tatra, aproape de granița cu Slovacia. S-a dezvoltat rapid devenind una dintre cele mai populare și moderne stațiuni de schi din Polonia, în special complexul Kotelnica Białczańska. În timpul verii, atrage vizitatorii cu frumosul său râu de munte, Białka, și numeroase trasee de drumeții. Satul este faimos și pentru marele său parc acvatic geotermal, Terma Bania. Oferă un amestec de cultură tradițională muntoasă și facilități moderne pentru turiști.",
      en: "Białka Tatrzańska is a picturesque village in southern Poland, situated in the Tatra Mountains region close to the Slovak border. It has rapidly developed into one of Poland's most popular and modern ski resorts, particularly the Kotelnica Białczańska complex. During summer, it attracts visitors with its beautiful mountain river, Białka, and numerous hiking trails. The village is also famous for its large geothermal water park, Terma Bania. It offers a blend of traditional highlander culture and modern tourist amenities.",
    },
    descriptionAdvanced: {
      de: "Białka Tatrzańska ist ein charmantes Bergdorf am Fuße der polnischen Tatra und ein äußerst beliebtes Ziel für Winter- und Sommerurlauber. In der kalten Jahreszeit verwandelt sich der Ort in ein pulsierendes Skigebiet mit modernen Liftanlagen und perfekt präparierten Pisten für alle Schwierigkeitsgrade. Nach einem aktiven Tag in der Natur bieten die bekannten Thermalbäder des Ortes wohltuende Entspannung im warmen, mineralreichen Wasser. Im Sommer locken die umliegenden Berge und der Gebirgsfluss Białka zu ausgedehnten Wanderungen und erfrischenden Abenteuern. Die traditionelle Goralenkultur ist hier in der Architektur und der regionalen Küche allgegenwärtig.",
      hu: "",
      ro: "",
      en: "Nestled in the heart of the Podhale region, Białka Tatrzańska serves as a vibrant gateway to the High Tatras. As you wander through this mountain village, the air carries the scent of pine and the distant chime of sheep bells, blending traditional highlander spirit with contemporary luxury. The Białka River, a wild mountain stream with crystal-clear waters, carves its path through the valley, offering a refreshing escape during the summer months. Winter transforms the landscape into a snowy paradise, where the Kotelnica mountain peaks offer sweeping panoramic views of the Polish and Slovak Tatras. Whether you are soaking in the mineral-rich geothermal pools of Terma Bania, sourced from deep within the Earth's crust, or exploring the wooden architecture of the local chapels, the village reveals the resilient heart of Polish mountain culture. Geography K7 — mountain landforms and geothermal energy."
    },
    factsAdvanced: {
      de: ["Das Skigebiet in Białka Tatrzańska ist eines der größten und modernsten in Polen.", "Die Thermalquellen der Terma Bania nutzen natürlich erhitztes Wasser aus der Tiefe.", "Der Fluss Białka ist bekannt für sein eiskaltes, kristallklares Wasser aus dem Hochgebirge.", "Die regionale Küche ist stark von der Kultur der polnischen Bergbewohner, der Goralen, geprägt."],
      hu: [],
      ro: [],
      en: [
        "The Kotelnica Białczańska ski complex offers 14.5 kilometers of trails and features a lift system capable of transporting over 20,000 skiers per hour.",
        "Geothermal water at Terma Bania is extracted from 2,500 meters below the surface, emerging at 72 degrees Celsius before being regulated for pool use.",
        "The settlement is situated at an elevation ranging from 650 to 725 meters, while the highest lift station on Kotelnica reaches 917 meters.",
        "The Białka River spans approximately 40 kilometers and remains one of the few remaining examples of a natural, braided alpine river in Central Europe.",
        "Dating back to around 1700, the wooden Church of Saints Simon and Jude Thaddeus stands as a testament to centuries-old Podhale craftsmanship."
      ]
    },
    facts: {
      de: ["Ein Dorf in der Podhale-Region im Süden Polens.", "Gelegen am Fluss Białka, nahe dem Tatra-Gebirge.", "Bekannt als eines der besten modernen Wintersportziele Polens.", "Das Skigebiet Kotelnica Białczańska ist das größte in der Umgebung.", "Verfügt über Terma Bania, einen sehr beliebten Geothermal-Wasserpark-Komplex.", "Bewahrt Elemente der traditionellen Goralen-Kultur und Architektur.", "Ein beliebter Ausgangspunkt für Sommerwanderungen und Mountainbiking in der Tatra.", "Bietet spektakuläre Ausblicke auf die Gebirgskette der Hohen Tatra."],
      hu: ["Dél-Lengyelország Podhale régiójában található falu.", "A Białka folyó mentén fekszik, a Tátra hegység közelében.", "Lengyelország egyik legjobb modern téli sportközpontjaként ismert.", "A Kotelnica Białczańska síközpont a legnagyobb a környéken.", "Itt található a Terma Bania, egy rendkívül népszerű geotermikus vízipark komplexum.", "Őrzi a hagyományos gorál hegyvidéki kultúra és építészet elemeit.", "Népszerű kiindulópont a nyári túrázáshoz és a hegyi kerékpározáshoz a Tátrában.", "Látványos kilátást nyújt a Magas-Tátra hegyláncaira."],
      ro: ["Un sat situat în regiunea Podhale din sudul Poloniei.", "Situat pe râul Białka, aproape de Munții Tatra.", "Renumită ca una dintre cele mai bune destinații moderne pentru sporturi de iarnă din Polonia.", "Stațiunea de schi Kotelnica Białczańska este cea mai mare din zonă.", "Prezintă Terma Bania, un complex de parc acvatic geotermal extrem de popular.", "Păstrează elemente ale culturii și arhitecturii tradiționale Gorale.", "O bază populară pentru drumeții de vară și ciclism montan în Munții Tatra.", "Oferă vederi spectaculoase asupra lanțului muntos Tatra Înaltă."],
      en: ["A village located in the Podhale region of southern Poland.", "Situated on the Białka river, close to the Tatra Mountains.", "Renowned as one of Poland's top modern winter sports destinations.", "The Kotelnica Białczańska ski resort is the largest in the area.", "Features Terma Bania, a highly popular geothermal water park complex.", "Retains elements of traditional Gorale (highlander) culture and architecture.", "A popular base for summer hiking and mountain biking in the Tatras.", "Offers spectacular views of the High Tatras mountain range."],
    },
    image: "/geo-images/poland/bialka-tatrzanska.webp",
    },
    {
    id: "muzeum-powstania-warszawskiego",
    type: "landmark",
    parent: "warsaw",
    coords: [20.9803, 52.2323],
    name: { de: "Museum des Warschauer Aufstands", hu: "Varsói Felkelés Múzeuma", ro: "Muzeul Insurecției din Varșovia", en: "Warsaw Uprising Museum" },
    description: {
      de: "Das Museum des Warschauer Aufstands, im Bezirk Wola von Warschau gelegen, ist dem Warschauer Aufstand von 1944 gewidmet. Es wurde 2004 zum 60. Jahrestag des Aufstands in einem ehemaligen Straßenbahnkraftwerk eröffnet. Das Museum nutzt umfangreiche Multimedia-Präsentationen, Artefakte und interaktive Ausstellungen, um die Atmosphäre des Kampfes des polnischen Widerstands gegen die deutsche Besatzung nachzubilden. Es dokumentiert die heldenhafte 63-tägige Schlacht und das tragische Schicksal der Stadt. Es ist eine tiefe Hommage an diejenigen, die für Polens Freiheit starben.",
      hu: "A Varsói Felkelés Múzeuma, amely a Wola kerületben található, az 1944-es varsói felkelésnek állít emléket. A felkelés 60. évfordulóján, 2004-ben nyílt meg egy egykori villamoserőmű épületében. A múzeum kiterjedt multimédiás bemutatókkal, műtárgyakkal és interaktív kiállításokkal idézi fel a lengyel ellenállás német megszállás elleni küzdelmének légkörét. Dokumentálja a hősies 63 napos csatát és a város tragikus sorsát. Mély tiszteletadás mindazoknak, akik Lengyelország szabadságáért harcoltak és haltak meg.",
      ro: "Muzeul Revoltei din Varșovia, situat în cartierul Wola din Varșovia, este dedicat Revoltei din Varșovia din 1944. Deschis în 2004 la împlinirea a 60 de ani de la revoltă, este găzduit într-o fostă centrală electrică a tramvaielor. Muzeul folosește exponate multimedia extinse, artefacte și expoziții interactive pentru a recrea atmosfera luptei rezistenței poloneze împotriva ocupației germane. Documentează lupta eroică de 63 de zile și soarta tragică a orașului. Muzeul este un omagiu profund adus celor care au luptat pentru libertatea Poloniei.",
      en: "The Warsaw Uprising Museum, located in the Wola district of Warsaw, is dedicated to the Warsaw Uprising of 1944. Opened in 2004 on the 60th anniversary of the uprising, it is housed in a former tram power station. The museum uses extensive multimedia displays, artifacts, and interactive exhibits to recreate the atmosphere of the Polish resistance's struggle against German occupation. It documents the heroic 63-day battle and the tragic fate of the city and its inhabitants. The museum is a profound tribute to those who fought and died for Poland's freedom.",
    },
    descriptionAdvanced: {
      de: "Das Museum des Warschauer Aufstands ist eine zutiefst bewegende und interaktive Gedenkstätte im Herzen von Warschau. Es widmet sich ausführlich dem heroischen, aber tragischen Kampf der polnischen Heimatarmee gegen die deutschen Besatzer im Jahr 1944. Durch den geschickten Einsatz von Multimedia, originalen Artefakten und persönlichen Zeitzeugenberichten wird die Geschichte für Besucher greifbar gemacht. Der Rundgang führt durch eine nachgebildete Kanalisation, die von den Aufständischen als Fluchtweg genutzt wurde. Das Museum dient nicht nur der Erinnerung, sondern auch der Mahnung an die Schrecken des Krieges.",
      hu: "",
      ro: "",
      en: "Stepping into the former tram power station in the Wola district is like entering a temporal rift that transports you directly into the summer of 1944. The heartbeat of the museum is a literal steel monument that throbs with the sound of a city in revolt, echoing the 63 days of the Polish Home Army’s desperate struggle against occupation. Walking through the narrow, reconstructed sewer tunnels provides a visceral sense of the underground movement’s incredible bravery. Every artifact, from the life-sized replica B-24 Liberator bomber to the worn insurgent armbands, narrates a harrowing story of sacrifice and the indomitable spirit of Warsaw. It is not just a collection of relics; it is an immersive sensory journey through a city that refused to die, meticulously documenting the tragedy and heroism that defined modern Poland. History K8 — second world war and local resistance movements."
    },
    factsAdvanced: {
      de: ["Das Museum wurde 2004, genau zum 60. Jahrestag des Aufstands, eröffnet.", "Es befindet sich in einem ehemaligen Elektrizitätswerk für Straßenbahnen.", "Der Warschauer Aufstand dauerte 63 Tage und führte zur fast völligen Zerstörung der Stadt.", "Ein Highlight der Ausstellung ist eine originalgetreue Nachbildung eines B-24 Liberator-Bombers."],
      hu: [],
      ro: [],
      en: [
        "The museum is housed in a former tram power station originally constructed between 1904 and 1908.",
        "The exhibition space covers more than 3,000 square meters spread across several thematic floors.",
        "It features a 1:1 scale replica of a B-24J Liberator bomber, which is the centerpiece of the aviation hall.",
        "The central 'heart' of the museum is a two-story steel monument engraved with a day-by-day calendar of the uprising.",
        "The collection includes over 30,000 unique exhibits, including thousands of historical photographs and documents."
      ]
    },
    facts: {
      de: ["Dem historischen Warschauer Aufstand von 1944 gegen die NS-Besatzung gewidmet.", "Wurde 2004 der Öffentlichkeit zugänglich gemacht, anlässlich des 60. Jahrestages des Ereignisses.", "Befindet sich in einem restaurierten ehemaligen Straßenbahnkraftwerk im Bezirk Wola.", "Bietet hochgradig interaktive und immersive Multimedia-Ausstellungen.", "Stellt Tausende von Artefakten aus, darunter Waffen, Briefe und Fotografien.", "Beinhaltet einen Nachbau eines B-24 Liberator-Bombers, der für Versorgungsabwürfe verwendet wurde.", "Das zentrale Denkmal zeigt ein schlagendes Herz, das das Leben der Stadt symbolisiert.", "Eine wichtige kulturelle Institution, die die Erinnerung an den polnischen Widerstand bewahrt."],
      hu: ["A náci megszállás elleni 1944-es történelmi varsói felkelésnek van szentelve.", "2004-ben nyitották meg a nagyközönség előtt, az esemény 60. évfordulóján.", "Egy felújított egykori villamoserőműben található, a Wola kerületben.", "Rendkívül interaktív és magával ragadó multimédiás kiállításokkal rendelkezik.", "Több ezer műtárgyat mutat be, köztük fegyvereket, leveleket és fényképeket.", "Tartalmazza az utánpótlás-ledobáshoz használt B-24 Liberator bombázó másolatát.", "A központi emlékmű egy dobogó szívet ábrázol, amely a város életét jelképezi.", "Jelentős kulturális intézmény, amely őrzi a lengyel ellenállás emlékét."],
      ro: ["Dedicat istoricii Revolte din Varșovia din 1944 împotriva ocupației naziste.", "Deschis publicului în 2004, marcând a 60-a aniversare a evenimentului.", "Situat într-o fostă centrală electrică a tramvaielor restaurată, în cartierul Wola.", "Prezintă expoziții multimedia extrem de interactive și captivante.", "Afișează mii de artefacte, inclusiv arme, scrisori și fotografii.", "Include o replică a unui bombardier B-24 Liberator utilizat pentru parașutări de provizii.", "Monumentul central prezintă o inimă care bate, simbolizând viața orașului.", "O instituție culturală majoră care păstrează memoria rezistenței poloneze."],
      en: ["Dedicated to the historic 1944 Warsaw Uprising against Nazi occupation.", "Opened to the public in 2004, marking the 60th anniversary of the event.", "Located in a restored former tram power station in the Wola district.", "Features highly interactive and immersive multimedia exhibitions.", "Displays thousands of artifacts, including weapons, letters, and photographs.", "Includes a replica of a B-24 Liberator bomber used for supply drops.", "The central monument features a beating heart symbolizing the city's life.", "A major cultural institution preserving the memory of the Polish resistance."],
    },
    image: "/geo-images/poland/muzeum-powstania-warszawskiego.webp",
    },
    {
    id: "centrum-nauki-kopernik",
    type: "landmark",
    parent: "warsaw",
    coords: [21.0283, 52.2419],
    name: { de: "Kopernikus-Wissenschaftszentrum", hu: "Kopernikusz Tudományos Központ", ro: "Centrul de Știință Copernic", en: "Copernicus Science Center" },
    description: {
      de: "Das Kopernikus-Wissenschaftszentrum ist ein herausragendes Wissenschaftsmuseum am Ufer der Weichsel in Warschau, Polen. Es wurde 2010 eröffnet und ist eines der größten interaktiven Wissenschaftszentren in Europa. Es bietet Hunderte von interaktiven Exponaten, die Besucher jeden Alters dazu ermutigen, die Gesetze der Wissenschaft durch Experimentieren und Spielen zu entdecken. Das Zentrum verfügt auch über ein hochmodernes Planetarium namens „Himmel des Kopernikus“. Es ist eine wichtige Bildungseinrichtung, die Neugier und das Verständnis für die Welt wecken soll.",
      hu: "A Kopernikusz Tudományos Központ egy kiemelkedő tudományos múzeum a Visztula partján Varsóban, Lengyelországban. A 2010-ben megnyílt intézmény Európa egyik legnagyobb interaktív tudományos központja. Több száz gyakorlati kiállítást vonultat fel, amelyek minden korosztályt arra ösztönöznek, hogy kísérletezésen és játékon keresztül fedezzék fel a tudomány törvényeit. A központ egy korszerű planetáriumot is magában foglal, a „Kopernikusz egei” néven. Jelentős oktatási attrakció, amelynek célja a kíváncsiság és a világ megértésének inspirálása.",
      ro: "Centrul de Știință Copernic este un muzeu științific proeminent situat pe malul râului Vistula din Varșovia, Polonia. Deschis în 2010, este unul dintre cele mai mari centre de știință interactive din Europa. Prezintă sute de exponate practice care încurajează vizitatorii de toate vârstele să descopere legile științei prin experimentare și joacă. Centrul include, de asemenea, un planetariu de ultimă generație numit „Cerurile lui Copernic”. Este o atracție educațională majoră concepută pentru a inspira curiozitatea și înțelegerea lumii.",
      en: "The Copernicus Science Center is a prominent science museum located on the bank of the Vistula River in Warsaw, Poland. Opened in 2010, it is one of the largest interactive science centers in Europe. It features hundreds of hands-on exhibits that encourage visitors of all ages to discover the laws of science through experimentation and play. The center also includes a state-of-the-art planetarium called the Heavens of Copernicus. It is a major educational attraction designed to inspire curiosity and an understanding of the world.",
    },
    descriptionAdvanced: {
      de: "Das Kopernikus-Wissenschaftszentrum in Warschau ist eines der größten und modernsten interaktiven Museen in Europa. Hier steht das aktive Erforschen und Begreifen von naturwissenschaftlichen Phänomenen im absoluten Mittelpunkt. Hunderte von Experimentierstationen laden Besucher jeden Alters ein, physikalische, biologische und chemische Gesetzmäßigkeiten selbst auszuprobieren. Das angeschlossene Planetarium beeindruckt mit faszinierenden Vorführungen über den Kosmos und die Sternenbilder. Das Zentrum, benannt nach dem berühmten Astronomen Nikolaus Kopernikus, weckt auf spielerische Weise die Neugier und Begeisterung für die Wissenschaft.",
      hu: "",
      ro: "",
      en: "Imagine standing on the banks of the Vistula River, where a futuristic structure beckons you to step inside and become a scientist for the day. The Copernicus Science Center isn't just a museum; it's a living laboratory where curiosity is the only admission requirement. As you navigate through the 'On the Move' or 'Re:generation' galleries, you aren't just looking at displays—you are powering machines, creating whirlpools, and testing the limits of your own perception. From the mesmerizing Foucault pendulum swinging in the lobby to the dazzling robotic theater, every corner invites you to poke, prod, and play. The Heavens of Copernicus planetarium takes you even further, launching you into the far reaches of the cosmos from the comfort of your seat. It is a place where the boundaries between play and profound discovery vanish. Science K6 — physics and planetary motion."
    },
    factsAdvanced: {
      de: ["Das Zentrum wurde 2010 am Ufer der Weichsel offiziell eröffnet.", "Es beherbergt über 400 interaktive Exponate, die zum Mitmachen anregen.", "Das Planetarium 'Heavens of Copernicus' zählt zu den modernsten der Welt.", "Es werden regelmäßig wissenschaftliche Shows und Workshops für Kinder und Erwachsene veranstaltet."],
      hu: [],
      ro: [],
      en: [
        "The center covers a total area of 22,000 square meters, with 15,000 square meters dedicated to exhibition space.",
        "The Heavens of Copernicus planetarium features a 16-meter diameter dome screen and can accommodate up to 139 spectators.",
        "Visitors can interact with over 400 hands-on exhibits distributed across permanent galleries such as 'The High Pressure' and 'LightZone'.",
        "The center welcomed its one-millionth visitor in August 2011, less than a year after its official opening in November 2010.",
        "A rooftop garden spans nearly 10,000 square meters, offering panoramic views of the Warsaw skyline and the Vistula River."
      ]
    },
    facts: {
      de: ["Direkt am Ufer der Weichsel im Herzen von Warschau gelegen.", "Wurde im November 2010 eröffnet und nach dem Astronomen Nikolaus Kopernikus benannt.", "Eines der fortschrittlichsten und größten Wissenschaftsmuseen in Europa.", "Enthält über 400 interaktive Exponate in mehreren thematischen Zonen.", "Konzentriert sich auf praktisches Lernen, Experimentieren und wissenschaftliche Entdeckungen.", "Beinhaltet das Planetarium „Himmel des Kopernikus“ mit modernen Projektoren.", "Umfasst ein Roboter-Theater, in dem humanoide Roboter Stücke aufführen.", "Soll Besucher jeden Alters für die MINT-Bildung (Mathematik, Informatik, Naturwissenschaft, Technik) begeistern."],
      hu: ["A Visztula folyó partján, Varsó szívében található.", "2010 novemberében nyílt meg, és Kopernikusz csillagászról nevezték el.", "Európa egyik legfejlettebb és legnagyobb tudományos múzeuma.", "Több mint 400 interaktív kiállítást tartalmaz több tematikus zónában.", "A gyakorlati tanulásra, a kísérletezésre és a tudományos felfedezésre összpontosít.", "Tartalmazza a fejlett projektorokkal felszerelt „Kopernikusz egei” planetáriumot.", "Egy robotos színházat is magában foglal, ahol humanoid robotok adnak elő darabokat.", "Úgy tervezték, hogy minden korosztályt bevonjon a STEM (tudományos) oktatásba."],
      ro: ["Situat pe malul râului Vistula, în inima Varșoviei.", "Deschis în noiembrie 2010 și numit după astronomul Nicolaus Copernic.", "Unul dintre cele mai avansate și mai mari muzee științifice din Europa.", "Conține peste 400 de exponate interactive în mai multe zone tematice.", "Se concentrează pe învățarea practică, experimentare și descoperire științifică.", "Prezintă planetariul „Cerurile lui Copernic” cu proiectoare avansate.", "Include un teatru robotic în care roboții umanoizi interpretează piese.", "Conceput pentru a atrage vizitatorii de toate vârstele în educația STEM."],
      en: ["Located on the banks of the Vistula River in the heart of Warsaw.", "Opened in November 2010 and named after astronomer Nicolaus Copernicus.", "One of the most advanced and largest science museums in Europe.", "Contains over 400 interactive exhibits across several thematic zones.", "Focuses on hands-on learning, experimentation, and scientific discovery.", "Features the \"Heavens of Copernicus\" planetarium with advanced projectors.", "Includes a robotic theater where humanoid robots perform plays.", "Designed to engage visitors of all ages in STEM education."],
    },
    image: "/geo-images/poland/centrum-nauki-kopernik.webp",
    },
    {
    id: "warsaw-zoo",
    type: "landmark",
    parent: "warsaw",
    coords: [21.02, 52.26],
    name: { de: "Warschauer Zoo", hu: "Varsói Állatkert", ro: "Grădina Zoologică Varșovia", en: "Warsaw Zoo" },
    description: {
      de: "Der Warschauer Zoo, gegründet 1928, ist ein bekannter Zoo am Ufer der Weichsel in Warschau, Polen. Auf einer Fläche von etwa 40 Hektar beherbergt er über 4.000 Tiere aus hunderten verschiedenen Arten. Während des Zweiten Weltkriegs nutzten der Zoodirektor Jan Żabiński und seine Frau Antonina heldenhaft das Zoogelände und ihre Villa, um hunderte Juden aus dem Warschauer Ghetto zu verstecken und zu retten. Heute engagiert sich der Zoo stark im modernen Naturschutz und in Zuchtprogrammen für bedrohte Tierarten. Er bleibt eine der beliebtesten Familienattraktionen der Stadt.",
      hu: "A varsói Állatkertet 1928-ban alapították, és a Visztula folyó mentén található Varsóban, Lengyelországban. Körülbelül 40 hektáron terül el, és több mint 4000 állatnak ad otthont, amelyek több száz különböző fajt képviselnek. A második világháború alatt az állatkert igazgatója, Jan Żabiński és felesége, Antonina hősiesen használták az állatkert területét és villájukat, hogy több száz zsidót rejtsenek el és mentsenek meg a varsói gettóból. Ma az állatkert aktívan részt vesz a modern természetvédelmi erőfeszítésekben és a veszélyeztetett fajok tenyésztési programjaiban.",
      ro: "Grădina Zoologică din Varșovia, înființată în 1928, este o grădină zoologică proeminentă situată de-a lungul râului Vistula din Varșovia, Polonia. Acoperind aproximativ 40 de hectare, găzduiește peste 4.000 de animale reprezentând sute de specii diferite. În timpul celui de-al Doilea Război Mondial, directorul grădinii zoologice, Jan Żabiński, și soția sa Antonina au folosit eroic terenurile grădinii zoologice și vila lor pentru a ascunde și a salva sute de evrei din Ghetoul din Varșovia. Astăzi, grădina zoologică este puternic implicată în eforturile moderne de conservare.",
      en: "The Warsaw Zoological Garden, established in 1928, is a prominent zoo located alongside the Vistula River in Warsaw, Poland. Covering about 40 hectares, it is home to over 4,000 animals representing hundreds of different species. During World War II, the zoo's director, Jan Żabiński, and his wife Antonina heroically used the zoo's grounds and their villa to hide and save hundreds of Jews from the Warsaw Ghetto. Today, the zoo is heavily involved in modern conservation efforts and breeding programs for endangered species. It remains one of the city's most beloved family attractions.",
    },
    descriptionAdvanced: {
      de: "Der Warschauer Zoo ist eine grüne Oase mitten in der pulsierenden Hauptstadt Polens und beheimatet Tausende von Tieren aus aller Welt. Neben seiner Rolle als Ort der Erholung und Bildung spielt der Zoo eine wichtige Rolle im internationalen Artenschutz. Große, naturnah gestaltete Gehege bieten den Tieren viel Platz und den Besuchern spannende Beobachtungsmöglichkeiten. Besonders die Elefantenanlage und das moderne Schimpansenhaus ziehen zahlreiche Familien an. Die bewegte Geschichte des Zoos während des Zweiten Weltkriegs, in der der damalige Direktor jüdische Mitbürger in den leeren Gehegen versteckte, macht ihn auch historisch bedeutsam.",
      hu: "",
      ro: "",
      en: "Stepping onto the lush, 40-hectare grounds of the Warsaw Zoological Garden feels like entering a sanctuary where nature and history intertwine. Established in 1928 on the Vistula's right bank, this verdant oasis in the Praga district houses over 12,000 animals. While the modern exhibits, like the impressive elephant house and the immersive shark tank, captivate visitors, the zoo's soul lies in its heroic past. During the dark years of World War II, director Jan Żabiński and his wife Antonina transformed the zoo into a clandestine refuge, shielding hundreds of people from the Warsaw Ghetto within their own villa and empty animal enclosures. Today, the zoo stands as a beacon of modern conservation, participating in global breeding programs for endangered species while honoring its legacy of courage. History K8 — World War II and humanitarian heroism."
    },
    factsAdvanced: {
      de: ["Der Warschauer Zoo wurde im Jahr 1928 offiziell gegründet.", "Während des Zweiten Weltkriegs retteten Zoodirektor Jan Żabiński und seine Frau Antonina Hunderte von Juden.", "Der Zoo beherbergt heute über 12.000 Tiere aus rund 500 verschiedenen Arten.", "Die Geschichte der Familie Żabiński wurde im Hollywood-Film 'Die Frau des Zoodirektors' verfilmt."],
      hu: [],
      ro: [],
      en: [
        "The Warsaw Zoological Garden officially opened its gates on March 11, 1928, spanning an area of 40 hectares.",
        "The zoo is home to over 12,000 individual animals representing more than 500 diverse species from across the globe.",
        "During World War II, Jan and Antonina Żabiński managed to save approximately 300 Jewish people by hiding them in the zoo's villa and animal cages.",
        "The modern Elephant House is a massive facility covering 6,000 square meters, featuring internal pools and advanced climate control.",
        "The zoo attracts approximately 600,000 to 800,000 visitors annually, making it one of Poland's most visited cultural institutions."
      ]
    },
    facts: {
      de: ["Gegründet 1928 und befindet sich im Warschauer Bezirk Praga Północ.", "Umfasst eine Fläche von 40 Hektar entlang des Flusses Weichsel.", "Beherbergt über 4.000 Tiere, die etwa 500 Arten repräsentieren.", "Berühmt für die heldenhaften Taten seines Kriegsdirektors Jan Żabiński.", "Die Villa der Familie Żabiński im Zoo wurde im Zweiten Weltkrieg genutzt, um Juden zu verstecken.", "Diese Rettungsgeschichte wurde im Buch und Film „Die Frau des Zoodirektors“ behandelt.", "Nimmt aktiv an den Europäischen Erhaltungszuchtprogrammen (EEP) teil.", "Verfügt über moderne Gehege, darunter ein großes Elefantenhaus und ein Nilpferdbecken."],
      hu: ["1928-ban alapították, és Varsó Praga Północ kerületében található.", "40 hektáros területet foglal el a Visztula folyó mentén.", "Több mint 4000 állat él itt, mintegy 500 fajt képviselve.", "Híres háborús igazgatója, Jan Żabiński hősies tetteiről.", "A Żabiński-villát a második világháború alatt zsidók elrejtésére használták.", "Ezt a mentőakciót a „Menedék” (The Zookeeper's Wife) című könyv és film is bemutatta.", "Aktívan részt vesz az Európai Veszélyeztetett Fajok Programjában (EEP).", "Modern kifutókkal rendelkezik, köztük egy nagy elefántházzal és vízilómedencével."],
      ro: ["Fondată în 1928 și situată în cartierul Praga Północ din Varșovia.", "Acoperă o suprafață de 40 de hectare de-a lungul râului Vistula.", "Găzduiește peste 4.000 de animale reprezentând aproximativ 500 de specii.", "Faimoasă pentru acțiunile eroice ale directorului său din timpul războiului, Jan Żabiński.", "Vila Żabiński de la zoo a fost folosită pentru a ascunde evreii în al Doilea Război Mondial.", "Această poveste a fost prezentată în cartea și filmul „Soția îngrijitorului de la zoo”.", "Participă activ la Programele Europene pentru Specii Periclitate (EEP).", "Dispune de incinte moderne, inclusiv o casă mare pentru elefanți și o piscină cu hipopotami."],
      en: ["Founded in 1928 and located in the Praga Północ district of Warsaw.", "Covers an area of 40 hectares along the Vistula River.", "Houses over 4,000 animals representing roughly 500 species.", "Famous for the heroic actions of its wartime director, Jan Żabiński.", "The Żabiński villa at the zoo was used to hide Jews during World War II.", "This rescue story was featured in the book and film \"The Zookeeper's Wife\".", "Participates actively in European Endangered Species Programmes (EEP).", "Features modern enclosures, including a large elephant house and hippopotamus pool."],
    },
    image: "/geo-images/poland/warsaw.webp",
    },
    {
    id: "rynek-wroclaw",
    type: "landmark",
    parent: "wroclaw",
    coords: [17.0322, 51.1095],
    name: { de: "Breslauer Ring", hu: "Wrocławi piactér", ro: "Piața Centrală din Wrocław", en: "Wroclaw Market Square" },
    description: {
      de: "Der Breslauer Ring ist ein mittelalterlicher Marktplatz in Breslau, im Südwesten Polens. Er ist einer der größten Marktplätze in Europa und bietet eine atemberaubende Vielfalt farbenfroher, historischer Bürgerhäuser aus verschiedenen Baustilen. In seiner Mitte steht ein prächtiger Gebäudekomplex, allen voran das Alte Rathaus, ein Meisterwerk gotischer Architektur. Der Platz ist seit dem 13. Jahrhundert das Herz der Stadt und wurde nach dem Zweiten Weltkrieg sorgfältig restauriert. Heute ist es ein pulsierendes Zentrum voller Restaurants, Cafés und historischem Charme.",
      hu: "A wrocławi piactér (Rynek) egy középkori piactér a délnyugat-lengyelországi Wrocławban. Európa egyik legnagyobb piactere, amely különféle építészeti stílusú, színes történelmi polgárházak lenyűgöző sorát vonultatja fel. A közepén egy csodálatos épülettömb áll, amelynek legkiemelkedőbb része a Régi Városháza, a gótikus építészet remekműve. A tér a 13. század óta a város szíve, amelyet a második világháború után gondosan helyreállítottak. Ma egy nyüzsgő központ, tele éttermekkel, kávézókkal és történelmi bájjal.",
      ro: "Piața Centrală din Wrocław este o piață medievală din Wrocław, situată în sud-vestul Poloniei. Este una dintre cele mai mari piețe din Europa, având o gamă uimitoare de case istorice colorate, care acoperă diverse stiluri arhitecturale. În centrul său se află un bloc magnific de clădiri, în special Vechea Primărie, o capodoperă a arhitecturii gotice. Piața a fost inima orașului încă din secolul al XIII-lea și a fost restaurată meticulos după cel de-al Doilea Război Mondial. Astăzi, este un centru plin de viață cu restaurante și cafenele.",
      en: "Wrocław Market Square is a medieval market square in Wrocław, located in southwestern Poland. It is one of the largest market squares in Europe, featuring a stunning array of colorful, historic townhouses spanning various architectural styles. At its center stands a magnificent block of buildings, most notably the Old Town Hall, a masterpiece of Gothic architecture. The square has been the heart of the city since the 13th century and was meticulously restored after World War II. Today, it is a vibrant center filled with restaurants, cafes, and historic charm.",
    },
    descriptionAdvanced: {
      de: "Der Breslauer Ring ist das historische und gesellschaftliche Zentrum der Stadt Breslau und einer der größten Marktplätze Europas. Umrahmt von farbenfrohen, liebevoll restaurierten Bürgerhäusern, strahlt der Platz eine unvergleichliche Lebendigkeit aus. Im Zentrum thront das prächtige gotische Rathaus, ein Meisterwerk mittelalterlicher Architektur, das heute ein Museum beherbergt. Zahlreiche Restaurants, Kneipen und Cafés laden dazu ein, das geschäftige Treiben bei einem traditionellen polnischen Gericht zu genießen. Wer aufmerksam über den Platz spaziert, wird überall die kleinen, berühmten Breslauer Zwerge entdecken.",
      hu: "",
      ro: "",
      en: "Stepping onto the cobblestones of Wrocław Market Square feels like entering a living kaleidoscope of European history. Founded in the 13th century under Magdeburg rights, this sprawling plaza serves as the pulsing heart of Lower Silesia. As you wander past the meticulously restored townhouses—each painted in vibrant hues of ochre, crimson, and sage—you witness a seamless blend of Gothic, Renaissance, and Baroque aesthetics. At the center, the Old Town Hall stands as a crowning jewel, its intricate astronomical clock ticking away since 1580. Beyond the architecture, the square whispers tales of resilience, having risen from the ashes of 1945 to reclaim its status as one of Europe’s largest and most atmospheric gathering places. Whether you are hunting for the city's famous bronze dwarfs or admiring the Salt Market's floral displays, the square offers a profound journey through time. History K8 — Urban development and reconstruction in post-war Europe."
    },
    factsAdvanced: {
      de: ["Der Marktplatz wurde im 13. Jahrhundert nach Magdeburger Recht angelegt.", "Das Breslauer Rathaus gehört zu den bedeutendsten gotischen Bauwerken in Europa.", "Im Ratskeller des Rathauses befindet sich eines der ältesten noch betriebenen Restaurants Europas.", "Mehrere Hundert kleine Bronze-Zwerge, ein Symbol der Stadt, sind in ganz Breslau versteckt."],
      hu: [],
      ro: [],
      en: [
        "The square is one of the largest in Europe, measuring approximately 213 by 178 meters and covering an area of nearly 3.8 hectares.",
        "The Old Town Hall features a 66-meter-tall tower that houses Poland's oldest bell, which was cast in the year 1368.",
        "Established in 1273, the 'Piwnica Świdnicka' restaurant located beneath the Town Hall is recognized as one of the oldest eateries in Europe.",
        "Following World War II, about 60 historic townhouses surrounding the square were meticulously reconstructed based on historical architectural records.",
        "The astronomical clock on the eastern facade of the Old Town Hall has been a functional landmark since its installation in 1580."
      ]
    },
    facts: {
      de: ["Einer der größten mittelalterlichen Marktplätze in Europa.", "Datiert zurück ins frühe 13. Jahrhundert, in die Zeit der Stadtgründung.", "Umgeben von wunderschönen Bürgerhäusern in gotischen, Renaissance- und Barockstilen.", "Das zentrale Element ist das prächtige gotische Alte Rathaus.", "Das Alte Rathaus beherbergt das Museum der bürgerlichen Kunst.", "Unter dem Rathaus befindet sich die Piwnica Świdnicka (Schweidnitzer Keller), eines von Europas ältesten Restaurants.", "Der Platz wurde im Zweiten Weltkrieg schwer beschädigt, aber akribisch rekonstruiert.", "Verfügt über einen modernen Glasbrunnen, der im Jahr 2000 erbaut wurde."],
      hu: ["Európa egyik legnagyobb középkori piactere.", "Története a 13. század elejére, a város alapításának idejére nyúlik vissza.", "Gyönyörű gótikus, reneszánsz és barokk stílusú polgárházak övezik.", "Központi eleme a pompás gótikus Régi Városháza.", "A Régi Városházában található a Polgári Művészeti Múzeum.", "A Városháza alatt működik a Piwnica Świdnicka, Európa egyik legrégebbi étterme.", "A teret a második világháborúban súlyos károk érték, de gondosan újjáépítették.", "Van rajta egy modern üvegkút is, amelyet a 2000. évben építettek."],
      ro: ["Una dintre cele mai mari piețe medievale din Europa.", "Datează de la începutul secolului al XIII-lea, în timpul fondării orașului.", "Înconjurată de case frumoase în stiluri gotice, renascentiste și baroce.", "Elementul central este magnifica Veche Primărie în stil gotic.", "Vechea Primărie găzduiește Muzeul de Artă Burgheză.", "Sub Primărie se află Piwnica Świdnicka, unul dintre cele mai vechi restaurante din Europa.", "Piața a fost puternic avariată în al Doilea Război Mondial, dar reconstruită meticulos.", "Prezintă o fântână modernă din sticlă construită în anul 2000."],
      en: ["One of the largest medieval market squares in Europe.", "Dates back to the early 13th century during the city's founding.", "Surrounded by beautiful townhouses in Gothic, Renaissance, and Baroque styles.", "The central feature is the magnificent Gothic Old Town Hall.", "The Old Town Hall houses the Museum of Bourgeois Art.", "Underneath the Town Hall is Piwnica Świdnicka, one of Europe's oldest restaurants.", "The square was heavily damaged in WWII but meticulously reconstructed.", "Features a modern glass fountain constructed in the year 2000."],
    },
    image: "/geo-images/poland/rynek-wroclaw.webp",
    },
    {
    id: "ulica-piotrkowska",
    type: "landmark",
    parent: "lodz-city",
    coords: [19.456, 51.76],
    name: { de: "Piotrkowska-Straße", hu: "Piotrkowska utca", ro: "Strada Piotrkowska", en: "Piotrkowska Street" },
    description: {
      de: "Die Piotrkowska-Straße ist die Hauptverkehrsader und das kommerzielle Herz von Łódź und erstreckt sich über vier Kilometer. Sie ist eine der längsten Einkaufsstraßen in Europa und gesäumt von atemberaubenden eklektischen und Jugendstil-Mietshäusern und Palästen aus dem 19. Jahrhundert. Ursprünglich eine geschäftige Route während des industriellen Textilbooms der Stadt, hat sie sich in eine lebhafte Fußgängerzone verwandelt. Die Straße ist berühmt für ihre zahlreichen Denkmäler, Bronzestatuen und den Łódź Walk of Fame. Sie dient als kulturelles Zentrum der Stadt.",
      hu: "A Piotrkowska utca Łódź fő ütőere és kereskedelmi központja, amely több mint négy kilométer hosszan nyúlik el. Európa egyik leghosszabb bevásárlóutcája, amelyet lenyűgöző 19. századi eklektikus és szecessziós bérházak, valamint paloták szegélyeznek. Eredetileg forgalmas útvonal volt a város ipari textil-fellendülése idején, de mára nyüzsgő sétálóutcává alakult. Az utca híres számos emlékművéről, híres lakosainak bronzszobrairól és a Łódźi Hírességek Sétányáról. A város kulturális és szórakoztató központjaként szolgál.",
      ro: "Strada Piotrkowska este principala arteră și inima comercială a orașului Łódź, întinzându-se pe mai mult de patru kilometri. Este una dintre cele mai lungi străzi comerciale din Europa, mărginită de uimitoare case și palate eclectice și Art Nouveau din secolul al XIX-lea. Inițial o rută plină de viață în timpul boom-ului textil industrial al orașului, s-a transformat într-o zonă pietonală vibrantă. Strada este faimoasă pentru numeroasele sale monumente, statui de bronz ale rezidenților faimoși și Walk of Fame din Łódź.",
      en: "Piotrkowska Street is the main artery and commercial heart of Łódź, extending for over four kilometers. It is one of the longest commercial thoroughfares in Europe, lined with stunning 19th-century eclectic and Art Nouveau tenement houses and palaces. Originally a bustling route during the city's industrial textile boom, it has transformed into a vibrant pedestrian zone. The street is famous for its numerous monuments, bronze statues of famous residents, and the Łódź Walk of Fame. It serves as the cultural and entertainment center of the city.",
    },
    descriptionAdvanced: {
      de: "Die Piotrkowska-Straße in Łódź ist mit über vier Kilometern eine der längsten Einkaufsstraßen in Europa und die Hauptschlagader der Stadt. Einst war sie das Zentrum der blühenden Textilindustrie, wovon noch heute die prachtvollen Paläste und Fabrikantenvillen zeugen. Die Architektur ist eine faszinierende Mischung aus Eklektizismus und Jugendstil, die der Straße ein einzigartiges Flair verleiht. Abends verwandelt sich die Flaniermeile in ein lebhaftes Ausgehviertel mit unzähligen Bars, Clubs und gemütlichen Restaurants. Denkmäler und Sterne auf dem 'Walk of Fame' erinnern an berühmte Persönlichkeiten der Stadtgeschichte.",
      hu: "",
      ro: "",
      en: "Walking down Piotrkowska Street feels like stepping into the grand narrative of Łódź's industrial rebirth. As you traverse this four-kilometer stretch, the 'Manhattan of Poland' reveals its soul through a breathtaking display of eclectic and Art Nouveau architecture. Once the frantic pulse of the 19th-century textile boom, these opulent palaces and tenement houses now host a mosaic of trendy cafes and cultural hubs. Look down to find the 'Monument of Łódź Citizens of the Millennium,' where over 13,000 bricks bear the names of those who built this city. From the bronze statues of literary giants to the glittering Walk of Fame, every step whispers tales of ambition and artistic flair. It is a living museum of urban transformation that captures the transition from steam-powered looms to a modern creative metropolis. History K8 — industrial revolution and urban development."
    },
    factsAdvanced: {
      de: ["Die Piotrkowska ist die längste Handelsstraße Polens und eine der längsten Fußgängerzonen Europas.", "Ein Abschnitt der Straße ist als 'Walk of Fame' nach dem Vorbild in Hollywood gestaltet.", "Zahlreiche Bronzestatuen berühmter Bürger von Łódź, wie etwa Arthur Rubinstein, säumen den Weg.", "Die prachtvollen Fassaden der Gebäude spiegeln den enormen Reichtum der einstigen Textilbarone wider."],
      hu: [],
      ro: [],
      en: [
        "The street stretches for precisely 4.2 kilometers, making it one of the longest pedestrianized shopping streets in Europe.",
        "The 'Monument of Łódź Citizens' features 13,454 cast-iron bricks laid directly into the pavement to celebrate the city's residents.",
        "Piotrkowska is home to the Łódź Walk of Fame, which honors over 65 famous Polish actors and filmmakers.",
        "At number 282 stands the White Factory, a monumental 1835 building that houses one of the first steam-powered textile mills in Poland.",
        "The street features more than 100 historic tenement houses and palaces, many built by wealthy industrialist families like the Scheiblers."
      ]
    },
    facts: {
      de: ["Die zentrale und repräsentativste Straße in der Stadt Łódź.", "Erstreckt sich über 4,2 Kilometer in einer geraden Linie.", "Gesäumt von großartigen Palästen und kunstvollen Mietshäusern aus dem 19. Jahrhundert.", "Spiegelt das schnelle Wachstum von Łódź als industrielles Textilzentrum wider.", "Beherbergt den Łódź Walk of Fame, der polnische Kinostars ehrt.", "Gesprenkelt mit Bronzemonumenten, wie Julian Tuwims Bank und Artur Rubinsteins Klavier.", "Teile der Straße fungieren als Fußgängerpromenade.", "Wimmelt von Restaurants, Pubs, Clubs und kulturellen Einrichtungen."],
      hu: ["Łódź városának központi és legreprezentatívabb utcája.", "Több mint 4,2 kilométer hosszan, egyenes vonalban húzódik.", "Nagyszerű 19. századi paloták és díszes bérházak szegélyezik.", "Tükrözi Łódź, az ipari textilközpont gyors növekedését.", "Itt található a Łódźi Hírességek Sétánya, amely lengyel mozisztárok előtt tiszteleg.", "Olyan bronz emlékművek díszítik, mint Julian Tuwim padja és Artur Rubinstein zongorája.", "Az utca bizonyos szakaszai gyalogos sétányként működnek.", "Nyüzsögnek rajta az éttermek, kocsmák, klubok és kulturális intézmények."],
      ro: ["Strada centrală și cea mai reprezentativă din orașul Łódź.", "Se întinde pe peste 4,2 kilometri în linie dreaptă.", "Mărginită de palate grandioase din secolul al XIX-lea și case de apartamente ornate.", "Reflectă creșterea rapidă a orașului Łódź ca o putere industrială a textilelor.", "Prezintă Walk of Fame din Łódź, onorând stelele cinematografiei poloneze.", "Presărată cu monumente de bronz, cum ar fi banca lui Julian Tuwim și pianul lui Artur Rubinstein.", "Porțiuni ale străzii funcționează ca o promenadă pietonală.", "Plină de restaurante, pub-uri, cluburi și instituții culturale."],
      en: ["The central and most representative street in the city of Łódź.", "Stretches for over 4.2 kilometers in a straight line.", "Lined with grand 19th-century palaces and ornate tenement houses.", "Reflects the rapid growth of Łódź as an industrial textile powerhouse.", "Features the Łódź Walk of Fame, honoring Polish cinema stars.", "Dotted with bronze monuments, such as Julian Tuwim's bench and Artur Rubinstein's piano.", "Sections of the street operate as a pedestrianized promenade.", "Teems with restaurants, pubs, clubs, and cultural institutions."],
    },
    image: "/geo-images/poland/ulica-piotrkowska.webp",
    },
    {
    id: "stary-rynek-poznan",
    type: "landmark",
    parent: "poznan",
    coords: [16.9344, 52.4083],
    name: { de: "Alter Markt in Posen", hu: "Poznańi óvárosi piactér", ro: "Piața Veche din Poznań", en: "Poznań Old Market Square" },
    description: {
      de: "Der Alte Markt in Posen ist das historische Herz der Stadt, der ursprünglich im 13. Jahrhundert angelegt wurde. Er ist der drittgrößte Marktplatz Polens, berühmt für seine wunderschön rekonstruierte Architektur im Stil der Renaissance. Das Herzstück ist das atemberaubende Posener Rathaus, ein Meisterwerk der polnischen Renaissance, berühmt für seine mechanischen Ziegenböcke, die sich mittags stoßen. Der Platz wird von farbenfrohen Kaufmannshäusern und historischen Brunnen mit mythologischen Figuren begrenzt. Er bleibt ein pulsierendes Zentrum für Kultur, Essen und städtisches Leben.",
      hu: "A poznańi óvárosi piactér (Stary Rynek) a város történelmi központja, amelyet eredetileg a 13. században alakítottak ki. Ez Lengyelország harmadik legnagyobb piactere, amelyet gyönyörűen rekonstruált reneszánsz építészete tesz híressé. A tér központja a lenyűgöző Poznańi Városháza, a lengyel reneszánsz remekműve, amely arról nevezetes, hogy délben két mechanikus kecskebak ökleli egymást az óratornyán. A teret színes kalmárházak és mitológiai alakokat ábrázoló történelmi szökőkutak szegélyezik. Ma is a kultúra és a városi élet pezsgő központja.",
      ro: "Piața Veche din Poznań este inima istorică a orașului, proiectată inițial în secolul al XIII-lea. Este a treia piață ca mărime din Polonia, celebră pentru arhitectura renascentistă frumos reconstruită. Piesa centrală este uimitoarea Primărie din Poznań, o capodoperă a Renașterii poloneze, faimoasă pentru țapii mecanici care se lovesc cap în cap la prânz. Piața este mărginită de case ale comercianților colorate și fântâni istorice cu figuri mitologice. Rămâne un hub vibrant al culturii și al vieții orașului.",
      en: "The Old Market Square in Poznań is the historic heart of the city, originally laid out in the 13th century. It is the third-largest market square in Poland, celebrated for its beautifully reconstructed Renaissance architecture. The centerpiece is the stunning Poznań Town Hall, a masterpiece of the Polish Renaissance, famous for its mechanical billy goats that butt heads at noon. The square is bordered by colorful merchants' houses and historic fountains depicting mythological figures. It remains a vibrant hub of culture, dining, and city life.",
    },
    descriptionAdvanced: {
      de: "Der Alte Markt in Posen ist ein architektonisches Juwel und der zentrale Treffpunkt der lebendigen Universitätsstadt. Das Highlight des Platzes ist das beeindruckende Renaissance-Rathaus, dessen berühmte mechanische Ziegenböcke jeden Mittag pünktlich um 12 Uhr die Hörner kreuzen. Umgeben ist der Markt von farbenfrohen, schmalen Krämerhäusern, die an die lange Handelstradition der Stadt erinnern. In den Sommermonaten füllen sich die zahlreichen Straßencafés und Restaurants mit Einheimischen und Touristen, die die fröhliche Atmosphäre genießen. Regelmäßig finden hier auch kulturelle Veranstaltungen und traditionelle Märkte statt.",
      hu: "",
      ro: "",
      en: "Stepping into Poznań’s Stary Rynek is like walking through a living gallery of Polish Renaissance splendor. Laid out in 1253, this vibrant square is dominated by the majestic Town Hall, whose façade hides a mechanical marvel: two billy goats that emerge at noon to butt heads, a tradition dating back to 1551. Surrounding the square, the colorful 'builders' houses'—once narrow stalls for merchants—now stand as a testament to the city's resilience and artistic flair. Beneath the cobblestones and past the fountains of Neptune and Apollo, centuries of trade and political shifts have shaped this urban masterpiece. For students of urban planning and medieval trade networks, the square serves as a primary example of how central European cities evolved from fortified settlements into thriving commercial centers. History K8 — the development of medieval towns and Renaissance architecture."
    },
    factsAdvanced: {
      de: ["Das Posener Rathaus gilt als eines der schönsten Renaissancegebäude nördlich der Alpen.", "Die kämpfenden Ziegenböcke am Rathausturm sind das berühmteste Symbol der Stadt Posen.", "Der Marktplatz wurde 1253 im Zuge der Stadtgründung nach Magdeburger Recht angelegt.", "Die charakteristischen bunten Krämerhäuschen stammen ursprünglich aus dem 16. Jahrhundert."],
      hu: [],
      ro: [],
      en: [
        "The square is a perfect quadrangle measuring approximately 141 by 141 meters, making it the third largest market square in Poland.",
        "The mechanical goats on the Town Hall tower have been performing their daily noon ritual since the year 1551.",
        "Restoration after World War II was extensive, as nearly 60% of the square's historical buildings were destroyed in 1945.",
        "Four distinct fountains depicting mythological figures—Proserpina, Apollo, Neptune, and Mars—anchor the corners of the square.",
        "The Town Hall, redesigned by architect Giovanni Battista di Quadro, stands at a height of 61 meters."
      ]
    },
    facts: {
      de: ["Der zentrale Platz von Posen, gegründet im Jahr 1253.", "Der drittgrößte Marktplatz in Polen, nach Krakau und Breslau.", "Wird dominiert von dem prächtigen Posener Rathaus im Renaissance-Stil.", "Die Rathausuhr verfügt über zwei mechanische Ziegenböcke, die mittags erscheinen.", "Umgeben von bunten, historischen Mietshäusern.", "Verfügt über mehrere Brunnen, die Figuren wie Apollo, Mars und Neptun gewidmet sind.", "Wurde im Zweiten Weltkrieg schwer beschädigt, danach aber akribisch restauriert.", "Beherbergt zahlreiche Cafés, Restaurants und traditionelle Sankt-Martins-Croissant-Bäckereien."],
      hu: ["Poznań központi tere, amelyet 1253-ban hoztak létre.", "Lengyelország harmadik legnagyobb piactere Krakkó és Wrocław után.", "A teret a pompás reneszánsz stílusú Poznańi Városháza uralja.", "A Városháza óráján két mechanikus kecskebak jelenik meg minden délben.", "Élénk színű történelmi bérházak veszik körül.", "Számos szökőkút található rajta, amelyeket Apollónnak, Marsnak és Neptunusznak szenteltek.", "A második világháború alatt súlyos károkat szenvedett, de gondosan felújították.", "Számos kávézónak, étteremnek és hagyományos Szent Márton-kifli pékségnek ad otthont."],
      ro: ["Piața centrală a orașului Poznań, înființată în 1253.", "A treia piață ca mărime din Polonia, după Cracovia și Wrocław.", "Dominată de magnifica Primărie din Poznań în stil renascentist.", "Ceasul Primăriei prezintă doi țapi mecanici care apar la amiază.", "Înconjurată de case istorice cu apartamente viu colorate.", "Prezintă mai multe fântâni dedicate unor figuri precum Apollo, Marte și Neptun.", "Puternic avariată în timpul celui de-al Doilea Război Mondial, dar meticulos restaurată apoi.", "Găzduiește numeroase cafenele, restaurante și brutării tradiționale cu cornuri de Sfântul Martin."],
      en: ["The central square of Poznań, established in 1253.", "The third-largest market square in Poland, after Kraków and Wrocław.", "Dominated by the magnificent Renaissance-style Poznań Town Hall.", "The Town Hall clock features two mechanical billy goats that appear at noon.", "Surrounded by brightly colored historic tenement houses.", "Features several fountains dedicated to figures like Apollo, Mars, and Neptune.", "Heavily damaged during World War II, but meticulously restored afterward.", "Hosts numerous cafes, restaurants, and traditional Saint Martin's Croissant bakeries."],
    },
    image: "/geo-images/poland/stary-rynek-poznan.webp",
    },
    {
    id: "energylandia",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.4, 49.99],
    name: { de: "Energylandia", hu: "Energylandia", ro: "Energylandia", en: "Energylandia" },
    description: {
      de: "Energylandia ist der größte Freizeitpark in Polen und befindet sich in der Stadt Zator in Kleinpolen. Er wurde 2014 eröffnet, ist rasant gewachsen und bietet heute über hundert Attraktionen in mehreren thematischen Zonen. Besonders bekannt ist er für seine beeindruckende Sammlung von Achterbahnen, darunter Hyperion, der höchste und schnellste Mega Coaster in Europa, und Zadra, eine erstklassige Hybrid-Achterbahn. Der Park verfügt auch über einen riesigen Wasserpark und Bereiche für jüngere Kinder. Er ist ein erstklassiges Unterhaltungsziel, das jährlich Millionen von Besuchern anzieht.",
      hu: "Az Energylandia Lengyelország legnagyobb vidámparkja, amely a kis-lengyelországi Zator városában található. A 2014-ben megnyílt park gyorsan bővült, és ma már több mint száz attrakciót kínál több tematikus zónában. Különösen híres lenyűgöző hullámvasút-gyűjteményéről, köztük a Hyperionról, Európa legmagasabb és leggyorsabb mega hullámvasútjáról, valamint a Zadráról, egy világszínvonalú hibrid hullámvasútról. A park hatalmas víziparkot és a kisebb gyermekek számára kialakított területeket is magában foglal. Évente több millió látogatót vonz.",
      ro: "Energylandia este cel mai mare parc de distracții din Polonia, situat în orașul Zator din Polonia Mică. Deschis în 2014, parcul s-a extins rapid și are acum peste o sută de atracții răspândite în mai multe zone tematice. Este deosebit de renumit pentru colecția sa impresionantă de montagne russe, inclusiv Hyperion, cel mai înalt și cel mai rapid mega coaster din Europa, și Zadra, un montagne russe hibrid de talie mondială. Parcul include, de asemenea, un parc acvatic masiv și zone dedicate copiilor. Atrage milioane de vizitatori anual.",
      en: "Energylandia is the largest amusement park in Poland, located in the town of Zator in Lesser Poland. Opened in 2014, the park has rapidly expanded and now features over a hundred attractions spread across multiple thematic zones. It is particularly famous for its impressive collection of roller coasters, including Hyperion, the tallest and fastest mega coaster in Europe, and Zadra, a world-class hybrid coaster. The park also includes a massive water park and areas dedicated to younger children. It is a premier entertainment destination drawing millions of visitors annually.",
    },
    descriptionAdvanced: {
      de: "Energylandia in Zator ist der größte und spektakulärste Freizeitpark in Polen und ein wahres Paradies für Adrenalinjunkies. Mit einer riesigen Auswahl an Achterbahnen, darunter einige der höchsten und schnellsten Europas, bietet der Park Nervenkitzel pur. Neben den extremen Fahrgeschäften gibt es auch zahlreiche familienfreundliche Attraktionen und Themenbereiche, die in verschiedene Welten entführen. Ein angeschlossener Wasserpark sorgt an heißen Sommertagen für die perfekte Abkühlung und noch mehr Spaß. Shows, Paraden und detailreich gestaltete Kulissen runden das unvergessliche Erlebnis für Besucher jeden Alters ab.",
      hu: "",
      ro: "",
      en: "Tucked away in the scenic Lesser Poland region near Zator, Energylandia stands as a titan of modern engineering and entertainment. Since its debut in 2014, it has evolved from a local attraction into Europe’s roller coaster capital. Visitors are greeted by the roaring sounds of Hyperion, a mega coaster that plunges riders into a breathtaking 80-meter drop at speeds exceeding 140 km/h. Beyond the steel giants, the park transports guests through meticulously themed zones, from the mythical Dragon Zone to the sun-soaked Water Park. It is a place where gravity is challenged and sensory limits are tested, making it a living laboratory of kinetic energy. Whether you are seeking the record-breaking hybrid thrills of Zadra or the family-friendly charm of the Fairytale Land, the park offers a masterclass in massive-scale leisure management. Physics K8 — laws of motion and mechanical energy."
    },
    factsAdvanced: {
      de: ["Energylandia beherbergt die Hyperion, eine der höchsten und schnellsten Achterbahnen in Europa.", "Der Park bietet mit über 120 Attraktionen die größte Auswahl an Fahrgeschäften in Polen.", "Zadra, eine Holz-Stahl-Hybridachterbahn im Park, gehört zu den besten ihrer Art weltweit.", "Der Vergnügungspark erstreckt sich über eine Fläche von mehr als 70 Hektar."],
      hu: [],
      ro: [],
      en: [
        "Hyperion is the tallest mega coaster in Europe, reaching a height of 77 meters and top speeds of 142 km/h.",
        "Zadra holds the record for the world's tallest hybrid roller coaster, featuring a 90-degree drop and a speed of 121 km/h.",
        "The amusement park covers a total area of approximately 70 hectares and is divided into six distinct thematic zones.",
        "With 18 world-class roller coasters, Energylandia holds the record for the highest number of coasters in any European theme park.",
        "The park's massive water area, including the Tropical Fun zone, features 36 different water slides and multiple pool complexes."
      ]
    },
    facts: {
      de: ["Der größte Freizeitpark in Polen mit einer Fläche von über 70 Hektar.", "Befindet sich in Zator, zwischen den Städten Krakau und Kattowitz.", "Wurde erst 2014 eröffnet und ist seitdem rasant gewachsen.", "Bietet über 120 Attraktionen, die in verschiedene Themenbereiche unterteilt sind.", "Heimat von „Hyperion“, einer der höchsten und schnellsten Mega-Achterbahnen Europas.", "Beinhaltet „Zadra“, eine preisgekrönte Hybrid-Achterbahn aus Holz und Stahl.", "Bietet eine große Outdoor-Wasserparkzone, die im Eintrittspreis inbegriffen ist.", "Wird kontinuierlich mit neuen Themenwelten und rekordbrechenden Fahrgeschäften erweitert."],
      hu: ["Lengyelország legnagyobb, több mint 70 hektáron elterülő vidámparkja.", "Zatorban található, Krakkó és Katowice városai között.", "Viszonylag nemrég, 2014-ben nyílt meg, és gyors ütemben növekedett.", "Több mint 120 attrakciót kínál, több különálló tematikus zónára osztva.", "Itt található a „Hyperion”, Európa egyik legmagasabb és leggyorsabb mega hullámvasútja.", "Része a „Zadra”, egy díjnyertes hibrid, fa és acél hullámvasút.", "Nagy szabadtéri vízipark zónát is kínál, amely a belépőjeggyel látogatható.", "Folyamatosan bővül új tematikus területekkel és rekordot döntő játékokkal."],
      ro: ["Cel mai mare parc de distracții din Polonia, acoperind peste 70 de hectare.", "Situat în Zator, între orașele Cracovia și Katowice.", "Deschis relativ recent, în 2014, și a crescut într-un ritm rapid.", "Prezintă peste 120 de atracții împărțite în mai multe zone tematice distincte.", "Găzduiește „Hyperion”, unul dintre cele mai înalte și mai rapide mega montagne russe din Europa.", "Include „Zadra”, un roller coaster hibrid premiat din lemn și oțel.", "Oferă o mare zonă de parc acvatic în aer liber, accesibilă cu biletul de intrare.", "Se extinde continuu cu noi tărâmuri tematice și atracții care doboară recorduri."],
      en: ["The largest amusement park in Poland, covering over 70 hectares.", "Located in Zator, between the cities of Kraków and Katowice.", "Opened relatively recently in 2014 and has grown at a rapid pace.", "Features over 120 attractions divided into several distinct thematic zones.", "Home to \"Hyperion,\" one of Europe's tallest and fastest mega roller coasters.", "Includes \"Zadra,\" an award-winning hybrid wood-and-steel roller coaster.", "Offers a large outdoor water park zone accessible with the entry ticket.", "Continuously expands with new themed lands and record-breaking rides."],
    },
    image: "/geo-images/poland/energylandia.webp",
  },
  {
    id: "pl-bydgoszcz",
    type: "city",
    parent: "PL-KP",
    coords: [18.0084, 53.1235],
    name: { de: "Bydgoszcz", hu: "Bydgoszcz", ro: "Bydgoszcz", en: "Bydgoszcz" },
    description: {
      de: "Bydgoszcz ist eine dynamische Stadt an der Brda, die oft als Venedig Polens bezeichnet wird. Sie besticht durch ihre wunderschöne Architektur am Flussufer. Die Stadt hat eine reiche industrielle Vergangenheit, die sich in modernen Kulturzentren widerspiegelt. Die Mühleninsel ist ein beliebtes Erholungsgebiet im Zentrum.",
      hu: "Bydgoszcz dinamikus város a Brda folyó partján, amelyet Lengyelország Velencéjének is neveznek. Lenyűgöző építészetével büszkélkedhet a folyó mentén. A város gazdag ipari múlttal rendelkezik, amely modern kulturális központokban él tovább. A Malom-sziget egy népszerű pihenőövezet a központban.",
      ro: "Bydgoszcz este un oraș dinamic pe râul Brda, numit adesea Veneția Poloniei. Se mândrește cu o arhitectură uimitoare de-a lungul malului râului. Orașul are un trecut industrial bogat, reflectat în centre culturale moderne. Insula Morilor este o zonă de recreere populară în centru.",
      en: "Bydgoszcz is a dynamic city on the Brda River, often called the Venice of Poland. It boasts stunning architecture along the riverbanks. The city has a rich industrial past, which is reflected in modern cultural centers. Mill Island is a popular recreation area in the center."
    },
    descriptionAdvanced: {
      de: "Bydgoszcz, oft als das 'Venedig Polens' bezeichnet, besticht durch seine idyllische Lage an der Brahe und dem Bromberger Kanal. Die liebevoll restaurierte Mühleninsel im Herzen der Stadt ist ein beliebter Rückzugsort und ein Zentrum für Kunst und Kultur. Malerische Fachwerkspeicher entlang des Wassers zeugen von der historischen Bedeutung als wichtiges Handelszentrum. Eine Fahrt mit dem Wassertaxi bietet die beste Möglichkeit, die charmante Architektur und die Brücken aus einer neuen Perspektive zu entdecken. Die Stadt ist zudem für ihre lebendige Musikszene und die beeindruckende Nova Opera bekannt.",
      hu: "",
      ro: "",
      en: "Stepping into Bydgoszcz feels like entering a living watercolor where the Brda River dictates the rhythm of daily life. Once a bustling hub for the timber trade, this 'Venice of Poland' has masterfully transformed its industrial skeletons into vibrant cultural cathedrals. Wandering through Mill Island, the scent of fresh greenery mingles with the legacy of historic granaries that have stood watch over the waters for centuries. The architecture here, often dubbed 'Little Berlin,' showcases intricate 19th-century facades that reflect elegantly in the slow-moving current. Beyond the canals, the city pulses with musical energy from the Opera Nova and the unique Man Crossing the River sculpture suspended high above the water. It is a stunning example of urban revitalization, blending Gothic brickwork with sleek modernity. Geography K7 — River systems and urban industrial development."
    },
    factsAdvanced: {
      de: ["Die Mühleninsel in Bydgoszcz ist eine der einzigartigsten städtischen Oasen in ganz Polen.", "Der Bromberger Kanal verbindet das Flusssystem der Weichsel mit dem der Oder.", "Die markanten Fachwerkspeicher aus dem 18. und 19. Jahrhundert sind das Wahrzeichen der Stadt.", "Bydgoszcz hat eine lange Tradition im Bootsbau und als Binnenhafen."],
      hu: [],
      ro: [],
      en: [
        "The Bydgoszcz Canal, completed in 1774, is the oldest functioning inland waterway in Poland, connecting the Vistula and Oder river basins.",
        "Mill Island covers an area of approximately 6.5 hectares and serves as a unique green oasis in the heart of the city center.",
        "The city's iconic timber-framed granaries date back to the late 18th century and remain the most recognizable symbols of Bydgoszcz.",
        "The Opera Nova building, characterized by its three interconnected rings, took over 30 years to complete before opening its doors.",
        "The historic Water Tower stands 45 meters tall and was constructed in 1900 as part of the city's advanced pressurized water system."
      ]
    },
    facts: {
      de: ["Bekannt als das polnische Venedig.", "Besitzt die Mühleninsel.", "Reich an Jugendstil.", "Wichtiger Binnenhafen.", "Heimat der Opera Nova.", "Bedeutendes Industriezentrum."],
      hu: ["A lengyel Velenceként ismert.", "Itt található a Malom-sziget.", "Gazdag szecessziós épületekben.", "Fontos belföldi kikötő.", "Az Opera Nova otthona.", "Jelentős ipari központ."],
      ro: ["Cunoscută ca Veneția poloneză.", "Deține Insula Morilor.", "Bogată în stil Art Nouveau.", "Port interior important.", "Găzduiește Opera Nova.", "Centru industrial semnificativ."],
      en: ["Known as the Polish Venice.", "Features Mill Island.", "Rich in Art Nouveau.", "Important inland port.", "Home to the Opera Nova.", "Significant industrial center."]
    },
    image: "/geo-images/poland/bydgoszcz.webp"
  },
  {
    id: "pl-lublin",
    type: "city",
    parent: "PL-LU",
    coords: [22.5667, 51.2464],
    name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" },
    description: {
      de: "Lublin ist die größte Stadt in Ostpolen und dient als wichtiges kulturelles und akademisches Zentrum. Mit einer reichen Geschichte, die bis ins Mittelalter zurückreicht, gehört die gut erhaltene Altstadt mit ihren verwinkelten Kopfsteinpflasterstraßen und der historischen Architektur zu den malerischsten in Polen. Die Stadt war historisch ein Schmelztiegel polnischer, jüdischer und ruthenischer Kulturen. Zu den wichtigsten Sehenswürdigkeiten zählen das Lubliner Schloss mit der Dreifaltigkeitskapelle und das tragische Museum des Konzentrationslagers Majdanek am Stadtrand. Lublin ist bekannt für seine lebendige Studentenpopulation und Kunstfestivals.",
      hu: "Lublin Kelet-Lengyelország legnagyobb városa, amely fontos kulturális és akadémiai központként szolgál. A középkorig visszanyúló, gazdag történelemmel rendelkező város jó állapotban fennmaradt óvárosa Lengyelország egyik legfestőibb történelmi negyede. A város történelmileg a lengyel, zsidó és rutén kultúrák olvasztótégelye volt. Főbb nevezetességei közé tartozik a lublini vár a lenyűgöző Szentháromság-kápolnával, valamint a város szélén található, tragikus sorsú majdaneki koncentrációs tábor múzeuma. Lublin élénk diákéletéről és művészeti fesztiváljairól is ismert.",
      ro: "Lublin este cel mai mare oraș din estul Poloniei și servește ca un important centru cultural și academic. Cu o istorie bogată datând din Evul Mediu, Orașul Vechi bine conservat este unul dintre cele mai pitorești din Polonia, având străzi pietruite și arhitectură istorică. Orașul a fost istoric un creuzet de culturi poloneze, evreiești și rutene. Reperele cheie includ Castelul Lublin cu uimitoarea sa Capelă a Sfintei Treimi și tragicul muzeu al lagărului de concentrare Majdanek de la periferie. Este cunoscut pentru populația studențească.",
      en: "Lublin is the largest city in eastern Poland and serves as an important cultural and academic center. With a rich history dating back to the Middle Ages, its well-preserved Old Town is one of the most picturesque in Poland, featuring winding cobblestone streets and historic architecture. The city was historically a melting pot of Polish, Jewish, and Ruthenian cultures. Key landmarks include the Lublin Castle with its stunning Holy Trinity Chapel, and the tragic Majdanek concentration camp museum on the city outskirts. Lublin is known for its vibrant student population and artistic festivals.",
    },
    descriptionAdvanced: {
      de: "Lublin ist eine der geschichtsträchtigsten und charmantesten Städte im Osten Polens, deren Altstadt als eine der am besten erhaltenen des Landes gilt. Die kopfsteingepflasterten Gassen, alten Tore und Renaissance-Bürgerhäuser versetzen Besucher direkt in eine andere Epoche. Das mächtige Lubliner Schloss mit seiner einzigartigen Dreifaltigkeitskapelle überragt die historische Altstadt und vereint gotische Architektur mit byzantinischen Fresken. Die Stadt ist ein Schmelztiegel der Kulturen, in dem einst Polen, Juden und Ukrainer friedlich zusammenlebten. Heute ist Lublin eine lebendige Studentenstadt mit einer reichen Kunst- und Theaterszene.",
      hu: "",
      ro: "",
      en: "Stepping into Lublin’s Old Town feels like traversing a living portal to the 16th-century Polish-Lithuanian Commonwealth. Known as the \"Gate to the East,\" this hilltop city preserves a labyrinth of cobblestone alleys where Gothic, Renaissance, and Baroque facades lean together in silent witness to centuries of trade and diplomacy. High above, the Lublin Castle houses the Holy Trinity Chapel, famous for its unique Byzantine-style frescoes commissioned by King Jagiełło. While the city's medieval heart beats with a modern energy fueled by its massive student population, the somber silence of the nearby Majdanek Memorial reminds us of its complex 20th-century legacy. From the Grodzka Gate to the vibrant festivals that light up the Rynek, Lublin remains a vital bridge between Western and Eastern Europe. History K8 — the formation of early modern European states and the impact of the World Wars."
    },
    factsAdvanced: {
      de: ["Das Krakauer Tor ist das bekannteste Wahrzeichen und der Haupteingang zur Altstadt von Lublin.", "Die Dreifaltigkeitskapelle im Schloss beherbergt seltene ruthenisch-byzantinische Wandmalereien.", "Im Jahr 1569 wurde hier die Lubliner Union geschlossen, die Polen und Litauen vereinte.", "Lublin war vor dem Zweiten Weltkrieg ein bedeutendes Zentrum des jüdischen Lebens."],
      hu: [],
      ro: [],
      en: [
        "The Union of Lublin, signed in 1569, created the Polish-Lithuanian Commonwealth, one of the largest and most populous states in 16th-century Europe.",
        "The Holy Trinity Chapel's Russo-Byzantine frescoes date back to 1418 and are considered some of the best-preserved of their kind in Europe.",
        "Lublin’s Old Town contains approximately 70% of the city’s original medieval buildings and was declared a National Historic Monument of Poland in 2007.",
        "The city serves as a major academic hub, hosting over 60,000 university students across several institutions, including the oldest Catholic university in Central Europe.",
        "The Majdanek State Museum, established in 1944, was the first museum of its kind in the world dedicated to the victims of the Holocaust."
      ]
    },
    facts: {
      de: ["Die größte und bedeutendste Stadt im Osten Polens.", "Besitzt eine wunderschön erhaltene historische Altstadt mit Renaissance-Architektur.", "Spielte eine entscheidende Rolle in der Geschichte als Ort der Union von Lublin im Jahr 1569.", "Das Lubliner Schloss beherbergt die Dreifaltigkeitskapelle, die mit einzigartigen byzantinischen Fresken geschmückt ist.", "Historisch als das „Jüdische Oxford“ bekannt, aufgrund seines reichen jüdischen Erbes.", "Das Staatliche Museum Majdanek befindet sich am Stadtrand.", "Ein wichtiger akademischer Knotenpunkt, Heimat mehrerer prominenter Universitäten.", "Bekannt für lebhafte kulturelle Veranstaltungen wie den Carnaval Sztukmistrzów."],
      hu: ["Kelet-Lengyelország legnagyobb és legjelentősebb városa.", "Gyönyörűen megőrzött, történelmi óvárossal rendelkezik reneszánsz építészettel.", "Kulcsszerepet játszott a történelemben mint az 1569-es lublini unió helyszíne.", "A lublini várban található a Szentháromság-kápolna, egyedi bizánci freskókkal.", "Gazdag zsidó öröksége miatt történelmileg „zsidó Oxfordként” ismerték.", "A város szélén található a Majdanek Állami Múzeum.", "Jelentős akadémiai központ, számos kiemelkedő egyetemnek ad otthont.", "Híres az olyan pezsgő kulturális eseményekről, mint a Carnaval Sztukmistrzów."],
      ro: ["Cel mai mare și cel mai semnificativ oraș din estul Poloniei.", "Prezintă un Oraș Vechi istoric, frumos conservat, cu arhitectură renascentistă.", "A jucat un rol crucial în istorie ca loc al Uniunii de la Lublin în 1569.", "Castelul Lublin găzduiește Capela Sfintei Treimi, decorată cu fresce bizantine unice.", "Cunoscut istoric sub numele de „Oxfordul evreiesc” datorită bogatei sale moșteniri evreiești.", "Muzeul de Stat Majdanek este situat la periferia orașului.", "Un hub academic major, găzduind mai multe universități proeminente.", "Faimos pentru găzduirea de evenimente culturale vibrante, precum Carnaval Sztukmistrzów."],
      en: ["The largest and most significant city in eastern Poland.", "Features a beautifully preserved, historic Old Town with Renaissance architecture.", "Played a crucial role in history as the site of the Union of Lublin in 1569.", "Lublin Castle houses the Holy Trinity Chapel, decorated with unique Byzantine frescoes.", "Historically known as the \"Jewish Oxford\" due to its rich Jewish heritage.", "The Majdanek State Museum is located on the outskirts of the city.", "A major academic hub, home to several prominent universities.", "Famous for hosting vibrant cultural events like the Carnaval Sztukmistrzów."],
    },
    image: "/geo-images/poland/lublin.webp"
  },
  {
    id: "pl-radom",
    type: "city",
    parent: "PL-MZ",
    coords: [21.1469, 51.4027],
    name: { de: "Radom", hu: "Radom", ro: "Radom", en: "Radom" },
    description: {
      de: "Radom ist eine historische Stadt in der Woiwodschaft Masowien mit reicher Vergangenheit. Die Stadt war jahrhundertelang ein wichtiges königliches Zentrum. Radom ist bekannt für seine internationalen Flugschauen und seine gut erhaltene Altstadt. Es bietet Besuchern eine Mischung aus historischen Denkmälern und moderner Kultur.",
      hu: "Radom történelmi város a Mazóviai vajdaságban, gazdag múlttal. A város évszázadokon át fontos királyi központ volt. Radom híres nemzetközi repülőnapjairól és jól megőrzött óvárosáról. Történelmi műemlékek és modern kultúra keverékét kínálja a látogatóknak.",
      ro: "Radom este un oraș istoric din voievodatul Mazovia, cu un trecut bogat. Orașul a fost un important centru regal timp de secole. Radom este cunoscut pentru mitingurile sale aviatice internaționale și orașul vechi bine conservat. Oferă vizitatorilor un amestec de monumente istorice și cultură modernă.",
      en: "Radom is a historical city in the Masovian Voivodeship with a rich past. The city was an important royal center for centuries. Radom is known for its international air shows and its well-preserved Old Town. It offers visitors a mix of historical monuments and modern culture."
    },
    descriptionAdvanced: {
      de: "Radom ist eine historische Stadt in Zentralpolen, die mit einer charmanten Mischung aus mittelalterlichen Wurzeln und industrieller Vergangenheit aufwartet. Die Stadt spielte mehrfach eine wichtige Rolle in der polnischen Geschichte, unter anderem bei den Arbeiterprotesten im Jahr 1976. Besucher können durch die gemütliche Fußgängerzone der Żeromskiego-Straße spazieren, die von klassizistischen Gebäuden und Cafés gesäumt wird. Ein Highlight ist das Jacek-Malczewski-Museum, das eine beeindruckende Sammlung polnischer Kunst beherbergt. Zudem ist Radom für seine internationalen Flugshows bekannt, die regelmäßig Luftfahrtenthusiasten anziehen.",
      hu: "",
      ro: "",
      en: "Radom invites you to step into a living timeline of Polish history, where royal decrees once shaped the fate of a nation. As you wander through the well-preserved Old Town, the echoes of the 1505 \"Nihil novi\" constitution resonate, marking the birth of Polish parliamentary democracy. Beyond its medieval roots, Radom transforms into a theater of the skies during its world-famous International Air Show, drawing spectators to witness gravity-defying feats. The city’s cultural heartbeat is felt at the Jacek Malczewski Museum, honoring the father of Polish symbolism. From the resilience shown during the 1976 worker protests to its modern urban vitality, Radom bridges the gap between a storied past and a dynamic future. It is a destination where every cobblestone and runway tells a tale of endurance and innovation. History K8 — Polish parliamentary traditions and social movements."
    },
    factsAdvanced: {
      de: ["Radom war ein wichtiges königliches Verwaltungszentrum in der polnisch-litauischen Union.", "Der historische Radomer Radom-Aufstand von 1976 war ein Meilenstein im Kampf gegen das kommunistische Regime.", "Das Freilichtmuseum für das Dorf in der Region Radom zeigt traditionelle Holzarchitektur der Gegend.", "Die Radom Air Show ist die größte Flugschau in Polen und eine der bedeutendsten in Osteuropa."],
      hu: [],
      ro: [],
      en: [
        "Radom was the site of the 1505 \"Nihil novi\" act, which established the \"Golden Liberty\" and banned the king from making laws without the consent of the nobility.",
        "The Radom Air Show is the largest of its kind in Poland, often featuring over 200 aircraft from 20 different countries.",
        "The city was founded in the 10th century and was granted its municipal rights under Magdeburg Law in 1364 by King Casimir III the Great.",
        "Radom covers an area of approximately 111.8 square kilometers and sits at an average elevation of 145 meters above sea level.",
        "The St. John the Baptist Church, a stunning example of Masovian Gothic architecture, dates back to the 14th century and was significantly expanded in 1495."
      ]
    },
    facts: {
      de: ["Verfügt über eine reiche Königsgeschichte.", "Bekannt für die Radom Air Show.", "Zweitgrößte Stadt in Masowien.", "Heimat vieler gotischer und barocker Kirchen.", "Historisches Zentrum der Waffenproduktion.", "Hat eine gut erhaltene Altstadt."],
      hu: ["Gazdag királyi történelemmel rendelkezik.", "Híres a radomi repülőnapról.", "Mazóvia második legnagyobb városa.", "Számos gótikus és barokk templom otthona.", "A fegyvergyártás történelmi központja.", "Jól megőrzött óvárosa van."],
      ro: ["Are o bogată istorie regală.", "Cunoscut pentru Radom Air Show.", "Al doilea oraș ca mărime din Mazovia.", "Găzduiește multe biserici gotice și baroce.", "Centru istoric al producției de arme.", "Are un oraș vechi bine conservat."],
      en: ["Features a rich royal history.", "Known for the Radom Air Show.", "Second-largest city in Masovia.", "Home to many Gothic and Baroque churches.", "Historical center of weapons production.", "Has a well-preserved Old Town."]
    },
    image: "/geo-images/poland/radom.webp"
  },
  {
    id: "pl-kielce",
    type: "city",
    parent: "PL-SK",
    coords: [20.6275, 50.8667],
    name: { de: "Kielce", hu: "Kielce", ro: "Kielce", en: "Kielce" },
    description: {
      de: "Kielce liegt im Herzen des Heiligkreuzgebirges und ist von wunderschöner Natur umgeben. Die Stadt ist ein wichtiges Zentrum für Messen und Ausstellungen in Europa. Der Palast der Krakauer Bischöfe ist ein hervorragend erhaltenes Beispiel frühbarocker Architektur. Zahlreiche Naturreservate direkt in der Stadt laden zu Entdeckungen ein.",
      hu: "Kielce a Szentkereszt-hegység szívében fekszik, gyönyörű természet veszi körül. A város fontos vásár- és kiállítási központ Európában. A krakkói püspökök palotája a kora barokk építészet kiválóan megőrzött példája. Számos természetvédelmi terület hívogat felfedezésre közvetlenül a városban.",
      ro: "Kielce este situat în inima Munților Sfintei Cruci și este înconjurat de o natură frumoasă. Orașul este un centru important pentru târguri și expoziții din Europa. Palatul Episcopilor de Cracovia este un exemplu excelent conservat de arhitectură barocă timpurie. Numeroase rezervații naturale chiar în oraș invită la explorare.",
      en: "Kielce is located in the heart of the Holy Cross Mountains and is surrounded by beautiful nature. The city is an important center for trade fairs and exhibitions in Europe. The Palace of the Krakow Bishops is a superbly preserved example of early Baroque architecture. Numerous nature reserves right in the city invite exploration."
    },
    descriptionAdvanced: {
      de: "Kielce, malerisch eingebettet in das Heiligkreuzgebirge, ist eine Stadt voller landschaftlicher und architektonischer Reize. Das Wahrzeichen der Stadt ist der prächtige Palast der Krakauer Bischöfe, ein herausragendes Beispiel für die polnische Architektur des 17. Jahrhunderts. Umgeben ist Kielce von gleich mehreren geologischen Naturschutzgebieten, wie dem Kadzielnia-Reservat, wo spektakuläre Kalksteinfelsen und Höhlen mitten in der Stadt zu finden sind. Diese einzigartige Geografie macht die Stadt zu einem Paradies für Naturfreunde und Geologen. Auch als Messe- und Handelsstandort hat sich Kielce in den letzten Jahrzehnten einen Namen gemacht.",
      hu: "",
      ro: "",
      en: "Nestled in the ancient Holy Cross Mountains, Kielce serves as a gateway to some of Poland's most intriguing geological wonders. Unlike many urban centers, the city is uniquely intertwined with nature, boasting five distinct nature reserves within its limits. The Kadzielnia Reserve, once a limestone quarry, now offers a stunning amphitheater and limestone caves that whisper secrets of ancient seabed life from millions of years ago. Architecturally, the city is anchored by the 17th-century Palace of the Kraków Bishops, a masterpiece of early Baroque design that remains remarkably preserved. Today, Kielce balances its historic weight with modern prestige as a leading European trade fair hub, attracting visitors from across the globe to its vibrant exhibitions. This destination provides a perfect field study for understanding the intersection of human history and natural evolution. Geography K7 — geological landforms and mountain systems."
    },
    factsAdvanced: {
      de: ["Der Palast der Krakauer Bischöfe ist eines der am besten erhaltenen Bauwerke aus der Vasa-Epoche in Polen.", "Kielce liegt inmitten der ältesten Gebirgszüge Europas, dem Heiligkreuzgebirge.", "Das Kadzielnia-Naturschutzgebiet im Stadtgebiet beherbergt ein beeindruckendes Amphitheater in einem alten Steinbruch.", "Targi Kielce ist der zweitgrößte Messeveranstalter in Polen nach Posen."],
      hu: [],
      ro: [],
      en: [
        "Kadzielnia Reserve contains caves and fossils dating back approximately 350 million years to the Devonian period.",
        "The Palace of the Kraków Bishops was built between 1637 and 1644 and is one of the best-preserved early Baroque residences in Poland.",
        "Targi Kielce is the second largest trade fair center in Central and Eastern Europe, hosting over 70 exhibitions annually.",
        "The city's highest point is Telegraf Hill, which stands at an elevation of 406 meters above sea level.",
        "Kielce covers a total area of approximately 109.65 square kilometers and is home to nearly 190,000 residents."
      ]
    },
    facts: {
      de: ["Zentrum des Heiligkreuzgebirges.", "Wichtiger Messestandort (Targi Kielce).", "Besitzt den Bischofspalast aus dem 17. Jahrhundert.", "Einzige Stadt in Europa mit 5 geologischen Reservaten.", "Berühmt für Kadzielnia-Amphitheater.", "Beliebt für Geotourismus."],
      hu: ["A Szentkereszt-hegység központja.", "Fontos vásárváros (Targi Kielce).", "17. századi püspöki palotával rendelkezik.", "Az egyetlen európai város 5 geológiai rezervátummal.", "Híres a Kadzielnia amfiteátrumról.", "Népszerű a geoturizmus terén."],
      ro: ["Centrul Munților Sfintei Cruci.", "Important centru expozițional (Targi Kielce).", "Deține Palatul Episcopilor din secolul al XVII-lea.", "Singurul oraș din Europa cu 5 rezervații geologice.", "Renumit pentru Amfiteatrul Kadzielnia.", "Popular pentru geoturism."],
      en: ["Center of the Holy Cross Mountains.", "Important trade fair location (Targi Kielce).", "Features the 17th-century Bishops' Palace.", "Only city in Europe with 5 geological reserves.", "Famous for the Kadzielnia Amphitheater.", "Popular for geotourism."]
    },
    image: "/geo-images/poland/kielce.webp"
  },
  {
    id: "pl-olsztyn",
    type: "city",
    parent: "PL-WN",
    coords: [20.4841, 53.7767],
    name: { de: "Allenstein", hu: "Olsztyn", ro: "Olsztyn", en: "Olsztyn" },
    description: {
      de: "Olsztyn ist die malerische Hauptstadt der Region Ermland-Masuren. Die Stadt ist von 15 Seen und dichten Wäldern umgeben. In der Burg Allenstein wirkte einst Nikolaus Kopernikus, der hier seine astronomischen Beobachtungen durchführte. Die gotische Architektur und die Nähe zur Natur machen die Stadt zu einem besonderen Ziel.",
      hu: "Olsztyn a Warmia-Mazúria régió festői fővárosa. A várost 15 tó és sűrű erdők veszik körül. Az olsztyni várban egykor Nikolausz Kopernikusz tevékenykedett, aki itt végezte csillagászati megfigyeléseit. A gótikus építészet és a természet közelsége különleges úti céllá teszi a várost.",
      ro: "Olsztyn este capitala pitorească a regiunii Warmia-Mazuria. Orașul este înconjurat de 15 lacuri și păduri dese. Nicolaus Copernic a lucrat odată în Castelul Olsztyn, unde și-a efectuat observațiile astronomice. Arhitectura gotică și apropierea de natură fac din oraș o destinație specială.",
      en: "Olsztyn is the picturesque capital of the Warmian-Masurian region. The city is surrounded by 15 lakes and dense forests. Nicolaus Copernicus once worked in Olsztyn Castle, where he conducted his astronomical observations. The Gothic architecture and proximity to nature make the city a special destination."
    },
    descriptionAdvanced: {
      de: "Allenstein (Olsztyn) ist die malerische Hauptstadt der Woiwodschaft Ermland-Masuren und ein perfekter Ausgangspunkt für die Erkundung der Masurischen Seenplatte. Die Stadt wird von dichten Wäldern und zahlreichen glitzernden Seen umgeben, was ihr ein besonders naturnahes Flair verleiht. Im Zentrum erhebt sich die imposante Burg des Ermländischen Domkapitels, in der einst der berühmte Astronom Nikolaus Kopernikus lebte und arbeitete. Die gemütliche Altstadt mit dem Hohen Tor lädt mit ihren historischen Gassen zum Schlendern ein. Das moderne Planetarium in Allenstein ehrt das wissenschaftliche Erbe von Kopernikus bis heute.",
      hu: "",
      ro: "",
      en: "Olsztyn serves as the enchanting gateway to the Land of a Thousand Lakes, where history and nature entwine along the banks of the Łyna River. Walking through the High Gate into the Old Town, you step into a medieval world of red-brick Gothic splendor. The crown jewel is the 14th-century Warmian Chapter Castle, where the great astronomer Nicolaus Copernicus resided as an administrator. Here, he created an original astronomical table on the cloister wall, which remains the only surviving scientific instrument of its kind today. Surrounded by fifteen urban lakes and the sprawling Municipal Forest, Olsztyn offers a unique harmony between urban living and wild greenery. It is a place where one can transition from exploring ancient Teutonic fortifications to kayaking across serene waters in a single afternoon. History K7 — the life of Nicolaus Copernicus and the Teutonic Order."
    },
    factsAdvanced: {
      de: ["In der Burg von Allenstein konstruierte Kopernikus eine astronomische Tafel zur Beobachtung der Tagundnachtgleiche.", "Die Stadt liegt im Zentrum von gleich 15 Seen, die größtenteils durch Flüsse verbunden sind.", "Das Hohe Tor ist das einzig erhaltene Stadttor der mittelalterlichen Befestigungsanlage.", "Die Region um Allenstein ist bekannt für ihre unberührten Wälder und klare Luft."],
      hu: [],
      ro: [],
      en: [
        "The city limits encompass 15 distinct lakes, with Lake Ukiel being the largest, covering an area of approximately 4.12 square kilometers.",
        "The Municipal Forest (Las Miejski) is one of the largest urban parks in Europe, spanning over 1,050 hectares of protected greenery.",
        "Nicolaus Copernicus lived in Olsztyn Castle for nearly 5 years, between 1516 and 1521, serving as the administrator of the Warmian Chapter.",
        "St. James Cathedral, a masterpiece of Warmian Gothic architecture, features a massive tower reaching a height of approximately 67 meters.",
        "The medieval High Gate, dating back to the 14th century, is the only remaining of the three original entrances to the Old Town."
      ]
    },
    facts: {
      de: ["Tor zu den Masurischen Seen.", "Hat über 10 Seen innerhalb der Stadtgrenzen.", "Kopernikus lebte auf der Burg Allenstein.", "Besitzt ein modernes Planetarium.", "Historische Hauptstadt der Region Ermland.", "Beliebt für Wassersport und Natur."],
      hu: ["A mazuri tavak kapuja.", "Több mint 10 tó található a városhatáron belül.", "Kopernikusz az olsztyni várban élt.", "Modern planetáriummal rendelkezik.", "A Warmia régió történelmi fővárosa.", "Népszerű a vízi sportok és a természet kedvelői körében."],
      ro: ["Poarta către Lacurile Mazuriene.", "Are peste 10 lacuri în limitele orașului.", "Copernic a locuit în Castelul Olsztyn.", "Are un planetariu modern.", "Capitala istorică a regiunii Warmia.", "Popular pentru sporturi nautice și natură."],
      en: ["Gateway to the Masurian Lakes.", "Has over 10 lakes within the city limits.", "Copernicus lived in Olsztyn Castle.", "Features a modern planetarium.", "Historical capital of the Warmia region.", "Popular for water sports and nature."]
    },
    image: "/geo-images/poland/olsztyn.webp"
  },
  {
    id: "pl-rzeszow",
    type: "city",
    parent: "PL-PK",
    coords: [22.0048, 50.0412],
    name: { de: "Rzeszów", hu: "Rzeszów", ro: "Rzeszów", en: "Rzeszów" },
    description: {
      de: "Rzeszów ist die größte Stadt und das wirtschaftliche Zentrum im Südosten Polens. Sie ist bekannt für ihre gepflegte Altstadt mit einem malerischen Marktplatz. Ein Highlight ist die unterirdische Touristenroute, die alte Keller und Gänge miteinander verbindet. Rzeszów ist eine sich schnell entwickelnde, moderne Universitätsstadt.",
      hu: "Rzeszów Délkelet-Lengyelország legnagyobb városa és gazdasági központja. Gondozott óvárosáról és festői piacteréről ismert. Fő látványossága a föld alatti turisztikai útvonal, amely régi pincéket és folyosókat köt össze. Rzeszów egy gyorsan fejlődő, modern egyetemi város.",
      ro: "Rzeszów este cel mai mare oraș și centrul economic din sud-estul Poloniei. Este cunoscut pentru orașul vechi bine îngrijit, cu o piață pitorească. Un punct de atracție este traseul turistic subteran, care conectează vechile pivnițe și coridoare. Rzeszów este un oraș universitar modern, cu o dezvoltare rapidă.",
      en: "Rzeszów is the largest city and economic center in southeastern Poland. It is known for its well-maintained Old Town with a picturesque market square. A highlight is the underground tourist route, which connects old cellars and corridors. Rzeszów is a rapidly developing, modern university city."
    },
    descriptionAdvanced: {
      de: "Rzeszów ist die größte Stadt im Südosten Polens und beeindruckt durch ihre dynamische Entwicklung und ihr gepflegtes historisches Zentrum. Der Marktplatz mit seinem prachtvollen Rathaus ist das Herzstück der Stadt und der perfekte Ort, um das lebhafte Treiben zu beobachten. Unter den Straßen des Zentrums verbirgt sich eine faszinierende unterirdische Touristenroute, die durch alte Händlerkeller und Gänge aus dem Mittelalter führt. Die Residenz der Familie Lubomirski, ein imposantes Schloss, prägt zudem das Stadtbild. Rzeszów gilt heute als aufstrebendes Zentrum für Technologie und Luftfahrtindustrie.",
      hu: "",
      ro: "",
      en: "Stepping into Rzeszów feels like uncovering a hidden gem where medieval secrets meet futuristic innovation. As you wander through the picturesque Market Square, the elegant 16th-century Town Hall stands as a testament to the city's enduring spirit. However, the real adventure lies beneath your feet. The Underground Tourist Route, a labyrinth of 25 cellars and 15 corridors stretching nearly 400 meters, reveals centuries of trade and refuge. Above ground, Rzeszów transforms into a vibrant modern hub, serving as the heart of Poland's Aviation Valley. This city seamlessly blends its Galician heritage with high-tech aerospace engineering, making it a captivating destination for those who appreciate both historic charm and rapid development. Exploring its urban growth and strategic location provides a practical look into economic development and urban planning. Geography K7 — regional centers and economic development."
    },
    factsAdvanced: {
      de: ["Die unterirdische Touristenroute in Rzeszów ist fast 400 Meter lang und führt tief unter den Marktplatz.", "Das Schloss der Familie Lubomirski wurde im Laufe der Geschichte mehrfach zerstört und wieder aufgebaut.", "Rzeszów ist ein wichtiger Knotenpunkt für das polnische 'Aviation Valley' (Tal der Luftfahrt).", "Das markante Denkmal der Revolutionären Tat ist ein umstrittenes, aber berühmtes Wahrzeichen der Stadt."],
      hu: [],
      ro: [],
      en: [
        "The Underground Tourist Route reaches a maximum depth of 10 meters below the Market Square.",
        "Rzeszów was granted city rights by King Casimir the Great on January 19, 1354.",
        "The Revolutionary Act Monument, a local icon, consists of two massive concrete leaves reaching 38 meters in height.",
        "The city serves as the headquarters for Aviation Valley, an aerospace cluster involving over 150 companies.",
        "Rzeszów's main Market Square features a historic well and is surrounded by buildings dating back to the 15th century."
      ]
    },
    facts: {
      de: ["Hauptstadt der Woiwodschaft Karpatenvorland.", "Bietet ein faszinierendes unterirdisches Labyrinth.", "Wichtiger Knotenpunkt für die Luftfahrtindustrie.", "Besitzt ein imposantes Lubomirski-Schloss.", "Bekannt als saubere und sichere Stadt.", "Tor zu den Bieszczady-Bergen."],
      hu: ["A Kárpátaljai vajdaság fővárosa.", "Lenyűgöző földalatti labirintust kínál.", "A repülőgépipar fontos csomópontja.", "Impozáns Lubomirski-kastéllyal rendelkezik.", "Tiszta és biztonságos városként ismert.", "A Bieszczady-hegység kapuja."],
      ro: ["Capitala voievodatului Subcarpatia.", "Oferă un labirint subteran fascinant.", "Nod important pentru industria aviației.", "Deține un impunător Castel Lubomirski.", "Cunoscut ca un oraș curat și sigur.", "Poarta către Munții Bieszczady."],
      en: ["Capital of the Subcarpathian Voivodeship.", "Offers a fascinating underground labyrinth.", "Important hub for the aviation industry.", "Features an imposing Lubomirski Castle.", "Known as a clean and safe city.", "Gateway to the Bieszczady Mountains."]
    },
    image: "/geo-images/poland/rzeszow.webp"
  },
  {
    id: "pl-kazimierz-dolny",
    type: "historical",
    parent: "PL-LU",
    coords: [21.9558, 51.3178],
    name: { de: "Kazimierz Dolny", hu: "Kazimierz Dolny", ro: "Kazimierz Dolny", en: "Kazimierz Dolny" },
    description: {
      de: "Kazimierz Dolny ist ein malerisches Städtchen an der Weichsel, das für seine reiche Geschichte und künstlerische Atmosphäre bekannt ist. Der Renaissance-Marktplatz und die Ruinen der alten Burg prägen das Stadtbild. Künstler und Maler schätzen die Region wegen ihres einzigartigen Lichts und Charmes. Es ist ein beliebtes Ziel für Wochenendausflüge.",
      hu: "Kazimierz Dolny egy festői kisváros a Visztula partján, amely gazdag történelméről és művészi hangulatáról ismert. A reneszánsz piactér és a régi vár romjai meghatározzák a városképet. A művészek és festők egyedi fényei és bája miatt kedvelik a régiót. Népszerű célpont a hétvégi kirándulásokhoz.",
      ro: "Kazimierz Dolny este un oraș pitoresc pe râul Vistula, cunoscut pentru istoria sa bogată și atmosfera artistică. Piața renascentistă și ruinele vechiului castel domină peisajul urban. Artiștii și pictorii apreciază regiunea pentru lumina și farmecul său unic. Este o destinație populară pentru evadările de weekend.",
      en: "Kazimierz Dolny is a picturesque town on the Vistula River, known for its rich history and artistic atmosphere. The Renaissance market square and the ruins of the old castle define the townscape. Artists and painters appreciate the region for its unique light and charm. It is a popular destination for weekend getaways."
    },
    descriptionAdvanced: {
      de: "Kazimierz Dolny ist ein malerisches, historisches Städtchen an der Weichsel, das wegen seiner Romantik und künstlerischen Atmosphäre weithin bekannt ist. Die wunderschön verzierten Renaissance-Bürgerhäuser rund um den Marktplatz verleihen dem Ort einen unvergleichlichen Charme. Zahlreiche Galerien und Künstlerwerkstätten prägen das Stadtbild, da die Stadt seit langem Maler und Schriftsteller anzieht. Die Ruinen einer mittelalterlichen Burg und der markante Wachturm bieten einen atemberaubenden Blick über das Flusstal. Zudem laden die umliegenden, tiefen Lössschluchten zu faszinierenden Naturwanderungen ein.",
      hu: "",
      ro: "",
      en: "Stepping into Kazimierz Dolny feels like walking through a living canvas, where the Vistula River gently curves around a town frozen in its Golden Age. As an explorer, I find myself drawn to the Market Square, where ornate Renaissance tenements tell stories of wealthy grain merchants who once thrived here. Climbing the steep path to the castle ruins, the panoramic view reveals a mosaic of red-tiled roofs and the iconic Three Crosses Hill. Beyond the stone walls, the mysterious loess ravines, like Korzeniowy Dół, beckon with their gnarled tree roots and cool, shadowed paths. This artistic haven has sheltered painters for centuries, capturing a unique light that dances across the lime-washed facades. It is more than just a retreat; it is a preservation of Poland’s cultural heart. History K8 — Polish Renaissance and the Golden Age."
    },
    factsAdvanced: {
      de: ["Der Marktplatz wird von wunderschönen, reich verzierten Patrizierhäusern aus dem 17. Jahrhundert dominiert.", "Ein aus Teig gebackener Hahn, der 'Kogut', ist das traditionelle und essbare Symbol der Stadt.", "Die Burgruinen stammen aus der Zeit von König Kasimir dem Großen, nach dem die Stadt benannt ist.", "Die tiefen Lössschluchten in der Umgebung von Kazimierz Dolny sind ein einzigartiges Naturphänomen."],
      hu: [],
      ro: [],
      en: [
        "The town’s iconic parish church houses a legendary pipe organ that was completed around 1620.",
        "The limestone watchtower, known as Baszta, stands 20 meters high and dates back to the turn of the 13th and 14th centuries.",
        "The Great Granary, a testament to the town's historical grain trade, was originally constructed in 1591.",
        "Kazimierz Dolny serves as the gateway to a landscape park encompassing over 13,000 hectares of protected natural beauty.",
        "The Korzeniowy Dół ravine features vertical loess walls reaching heights of up to 8 meters."
      ]
    },
    facts: {
      de: ["Berühmt für Renaissance-Architektur.", "Treffpunkt für Künstler und Maler.", "Historischer Binnenhafen an der Weichsel.", "Besitzt eine mittelalterliche Burgruine.", "Berühmt für hefeteiggebildete Hähne.", "Hat alte und stimmungsvolle Getreidespeicher."],
      hu: ["Reneszánsz építészetéről híres.", "Művészek és festők találkozóhelye.", "Történelmi belföldi kikötő a Visztulán.", "Középkori várrommal rendelkezik.", "Híres a kelt tésztából sült kakasokról.", "Régi és hangulatos magtárai vannak."],
      ro: ["Renumit pentru arhitectura renascentistă.", "Loc de întâlnire pentru artiști și pictori.", "Port interior istoric pe Vistula.", "Are o ruină de castel medieval.", "Renumit pentru cocoșii copți din aluat cu drojdie.", "Are grânare vechi și pline de atmosferă."],
      en: ["Famous for Renaissance architecture.", "Meeting place for artists and painters.", "Historical inland port on the Vistula.", "Has a medieval castle ruin.", "Famous for yeast dough roosters.", "Features old and atmospheric granaries."]
    },
    image: "/geo-images/poland/kazimierz-dolny.webp"
  },
  {
    id: "pl-ogrodzieniec",
    type: "historical",
    parent: "PL-SL",
    coords: [19.5380, 50.4522],
    name: { de: "Burg Ogrodzieniec", hu: "Ogrodzieniec vára", ro: "Castelul Ogrodzieniec", en: "Ogrodzieniec Castle" },
    description: {
      de: "Die Ruine der Burg Ogrodzieniec ist das beeindruckendste Relikt der sogenannten Adlerhorst-Burgen in Polen. Sie liegt majestätisch auf den höchsten Felsen des Juraausläufers. Die Festung aus dem 14. Jahrhundert wurde in den Kalkstein gebaut, wodurch Burg und Fels oft verschmelzen. Der Ort diente bereits häufig als spektakuläre Filmkulisse.",
      hu: "Az Ogrodzieniec várrom Lengyelország úgynevezett Sasfészek várainak leglenyűgözőbb maradványa. Fenségesen helyezkedik el a jura hegység legmagasabb szikláin. A 14. századi erődítményt a mészkőbe építették, így a vár és a szikla szinte egybeolvad. A helyszín már többször szolgált látványos filmforgatások háttereként.",
      ro: "Ruinele Castelului Ogrodzieniec sunt cea mai impresionantă relicvă a așa-numitelor castele Cuibul Vulturilor din Polonia. Este situat maiestuos pe cele mai înalte stânci ale zonei Jura. Fortăreața din secolul al XIV-lea a fost construită în piatră de var, adesea fuzionând castelul și stânca. Locația a servit adesea ca fundal spectaculos pentru filme.",
      en: "The ruins of Ogrodzieniec Castle are the most impressive relic of the so-called Eagles' Nest castles in Poland. It is situated majestically on the highest rocks of the Jura range. The 14th-century fortress was built into the limestone, often merging the castle and the rock. The location has frequently served as a spectacular film set."
    },
    descriptionAdvanced: {
      de: "Die Burg Ogrodzieniec ist die beeindruckendste und größte Burgruine entlang der sogenannten Adlerhorst-Route im Krakau-Tschenstochauer Jura. Die majestätischen Überreste thronen auf dem höchsten Hügel der Region und sind direkt in die massiven weißen Kalksteinfelsen integriert. Obwohl sie im Laufe der Jahrhunderte durch Kriege und Feuer stark zerstört wurde, lässt die gewaltige Anlage noch immer ihre einstige Pracht erahnen. Die mystische Atmosphäre der Ruinen zieht nicht nur Touristen, sondern auch Filmemacher an. Die Umgebung ist ein beliebtes Ziel für Kletterer, die die steilen Felswände bezwingen möchten.",
      hu: "",
      ro: "",
      en: "Perched atop the Janowski Hill, the highest point of the Kraków-Częstochowa Upland, Ogrodzieniec Castle stands as a silent sentinel of Poland’s storied past. As you wander through its limestone corridors, you witness a masterpiece of medieval engineering where stone walls merge seamlessly with natural white crags. Originally built in the 14th century as part of the Eagles' Nests defensive system, it was transformed into a lavish Renaissance palace by the wealthy Boner family. Today, the majestic ruins whisper legends of spectral black hounds and historic sieges, capturing the imaginations of filmmakers and history buffs alike. This formidable fortress served as a backdrop for the iconic Netflix series The Witcher, proving that its dramatic silhouette remains timeless. Exploring these ramparts offers a unique window into the architectural evolution of Central Europe and the strategic brilliance of Polish nobility. History K8 — medieval fortifications and nobility."
    },
    factsAdvanced: {
      de: ["Die Burg diente als eindrucksvolle Kulisse für die erfolgreiche Netflix-Serie 'The Witcher'.", "Sie wurde im 14. Jahrhundert erbaut, um die Grenze des Königreichs Polen zu schützen.", "Der Legende nach wird die Burg in mondhellen Nächten von einem riesigen schwarzen Hund heimgesucht.", "Die Burg gehört zur sogenannten 'Route der Adlerhorste', einer Kette mittelalterlicher Festungen."],
      hu: [],
      ro: [],
      en: [
        "The castle is located on Góra Janowskiego, the highest peak of the Kraków-Częstochowa Upland, at an elevation of 515.5 meters above sea level.",
        "The current stone structure replaced an earlier wooden stronghold that was destroyed during the Mongol invasion of 1241.",
        "During the mid-16th century, the Boner family spent 15 years transforming the Gothic fortress into a Renaissance residence inspired by Wawel Royal Castle.",
        "The fortress suffered catastrophic damage during the Swedish Deluge in 1655 and again in 1702, when a massive fire destroyed the interiors.",
        "The ruins were officially opened as a permanent tourist destination in 1906, following extensive preservation work on the limestone masonry."
      ]
    },
    facts: {
      de: ["Größte Burg auf der Adlerhorst-Route.", "Erbaut im 14. Jahrhundert in Kalksteinfelsen.", "Oft Drehort für bekannte Serien und Filme.", "Beliebter Ort für Gespenstergeschichten.", "Zerstört während der schwedischen Sintflut.", "Bietet spektakuläre Ausblicke auf den Jura."],
      hu: ["A Sasfészek-útvonal legnagyobb vára.", "A 14. században épült mészkősziklákra.", "Gyakran szolgál ismert sorozatok és filmek forgatási helyszínéül.", "Kísértettörténetek népszerű helyszíne.", "A svéd özönvíz idején pusztult el.", "Látványos kilátást nyújt a jura hegységre."],
      ro: ["Cel mai mare castel de pe traseul Cuibul Vulturilor.", "Construit în secolul al XIV-lea în stânci de calcar.", "Adesea locație de filmare pentru seriale și filme cunoscute.", "Loc popular pentru povești cu fantome.", "Distrus în timpul Potopului suedez.", "Oferă vederi spectaculoase ale regiunii Jura."],
      en: ["Largest castle on the Trail of the Eagles' Nests.", "Built in the 14th century into limestone rocks.", "Often a filming location for popular series and movies.", "Popular site for ghost stories.", "Destroyed during the Swedish Deluge.", "Offers spectacular views of the Jura."]
    },
    image: "/geo-images/poland/ogrodzieniec.webp"
  },
  {
    id: "pl-zamosc",
    type: "historical",
    parent: "PL-LU",
    coords: [23.2533, 50.7203],
    name: { de: "Zamość", hu: "Zamość", ro: "Zamość", en: "Zamość" },
    description: {
      de: "Zamość ist ein architektonisches Juwel der Renaissance und wird oft das 'Padua des Nordens' genannt. Die Stadt wurde im 16. Jahrhundert auf dem Reißbrett als ideale Stadt entworfen. Der malerische Marktplatz mit dem beeindruckenden Rathaus und den bunten Bürgerhäusern ist ein UNESCO-Welterbe. Zamość hat seine ursprüngliche Anlage bis heute perfekt bewahrt.",
      hu: "Zamość a reneszánsz építészet ékköve, amelyet gyakran 'Észak Padovájának' is neveznek. A várost a 16. században tervezték ideális városként. A festői piactér az impozáns városházával és a színes polgárházakkal az UNESCO világörökség része. Zamość a mai napig tökéletesen megőrizte eredeti elrendezését.",
      ro: "Zamość este o bijuterie arhitecturală a Renașterii și este adesea numită 'Padova Nordului'. Orașul a fost proiectat în secolul al XVI-lea de la zero ca un oraș ideal. Piața pitorească, cu primăria sa impresionantă și casele colorate, este inclusă în Patrimoniul Mondial UNESCO. Zamość și-a păstrat perfect structura originală până în zilele noastre.",
      en: "Zamość is an architectural jewel of the Renaissance and is often called the 'Padua of the North'. The city was designed from scratch in the 16th century as an ideal city. The picturesque market square with the impressive town hall and colorful townhouses is a UNESCO World Heritage Site. Zamość has perfectly preserved its original layout to this day."
    },
    descriptionAdvanced: {
      de: "Zamość ist eine außergewöhnliche Renaissance-Stadt im Südosten Polens und wird oft stolz das 'Padua des Nordens' genannt. Sie wurde im 16. Jahrhundert nach italienischem Vorbild als perfekte Idealstadt entworfen und erbaut. Der weitläufige, quadratische Marktplatz wird von prächtigen Bürgerhäusern mit markanten Arkaden und reich verzierten Fassaden gesäumt. Das elegante Rathaus mit seinem hohen Turm und der geschwungenen Freitreppe dominiert das harmonische Stadtbild. Dank ihrer einzigartigen Architektur und dem gut erhaltenen Grundriss gehört die Altstadt zum UNESCO-Weltkulturerbe.",
      hu: "",
      ro: "",
      en: "Stepping into the Great Market Square of Zamość feels like traversing a portal to the late 16th century, where the Italian Renaissance found a perfect home on the Polish plains. Commissioned by Chancellor Jan Zamoyski and envisioned by architect Bernardo Morando, this 'ideal city' was built from scratch to embody harmony, commerce, and military strength. Its grid-like streets lead to the magnificent Town Hall, whose sweeping fan-shaped staircase serves as a majestic centerpiece for the surrounding pastel-colored Armenian houses. Unlike many cities that evolved haphazardly over centuries, Zamość was a master-planned masterpiece, surviving numerous sieges with its original layout and formidable bastions largely intact. Today, it remains a living museum of urban planning, where every stone reflects human ambition and artistic precision. History K8 — the Renaissance and the concept of the ideal city."
    },
    factsAdvanced: {
      de: ["Die Stadt wurde von Jan Zamoyski gegründet und vom italienischen Architekten Bernardo Morando entworfen.", "Die Altstadt von Zamość gehört seit 1992 zum UNESCO-Weltkulturerbe.", "Die charakteristischen armenischen Bürgerhäuser am Markt bestechen durch ihre bunten und reich verzierten Attiken.", "Die historische Festungsanlage, die die Stadt umgab, wurde im 19. Jahrhundert größtenteils abgetragen."],
      hu: [],
      ro: [],
      en: [
        "The Great Market Square is a perfect square measuring exactly 100 by 100 meters.",
        "Zamość was added to the UNESCO World Heritage List in 1992 as a unique example of a Renaissance town.",
        "The city was originally fortified with 7 massive bastions, which allowed it to withstand the Swedish Deluge in 1656.",
        "The iconic Town Hall tower rises to a height of 52 meters and dominates the city's skyline.",
        "The construction of the city began in 1580 and the primary urban core was completed in just 20 years."
      ]
    },
    facts: {
      de: ["Bekannt als die 'Ideale Stadt'.", "Vollständig im Renaissance-Stil erbaut.", "Die Altstadt ist UNESCO-Weltkulturerbe.", "Erbaut von Jan Zamoyski im 16. Jahrhundert.", "Besitzt wunderschöne bunte armenische Häuser.", "Ehemalige mächtige Festungsstadt."],
      hu: ["Az 'ideális városként' is ismert.", "Teljesen reneszánsz stílusban épült.", "Az óváros az UNESCO világörökség része.", "Jan Zamoyski építtette a 16. században.", "Gyönyörű, színes örmény házakkal rendelkezik.", "Egykor hatalmas erődváros volt."],
      ro: ["Cunoscut ca 'Orașul Ideal'.", "Construit în întregime în stil renascentist.", "Orașul Vechi este în Patrimoniul Mondial UNESCO.", "Construit de Jan Zamoyski în secolul al XVI-lea.", "Deține case armenești colorate și frumoase.", "Fost oraș fortificat puternic."],
      en: ["Known as the 'Ideal City'.", "Built entirely in the Renaissance style.", "The Old Town is a UNESCO World Heritage Site.", "Built by Jan Zamoyski in the 16th century.", "Features beautiful colorful Armenian houses.", "Former powerful fortress city."]
    },
    image: "/geo-images/poland/zamosc.webp"
  },
  {
    id: "pl-gniezno-cathedral",
    type: "historical",
    parent: "PL-WP",
    coords: [17.5926, 52.5352],
    name: { de: "Kathedrale von Gnesen", hu: "Gnieznói székesegyház", ro: "Catedrala din Gniezno", en: "Gniezno Cathedral" },
    description: {
      de: "Die Kathedrale von Gnesen ist eines der ehrwürdigsten Kirchengebäude Polens. Sie war Krönungsstätte der ersten polnischen Könige und ist das wichtigste Denkmal der polnischen Staatsgründung. In ihrem Inneren befinden sich die Reliquien des heiligen Adalbert, des Schutzpatrons Polens. Die Bronzetüren der Kathedrale sind ein Meisterwerk mittelalterlicher Gießer-Kunst.",
      hu: "A gnieznói székesegyház Lengyelország egyik legteiszteletreméltóbb egyházi épülete. Az első lengyel királyok koronázási helye volt, és a lengyel államalapítás legfontosabb emlékműve. Belsejében találhatók Szent Adalbert, Lengyelország védőszentjének ereklyéi. A székesegyház bronzajtajai a középkori öntőművészet remekművei.",
      ro: "Catedrala din Gniezno este una dintre cele mai venerate biserici din Polonia. A fost locul de încoronare al primilor regi polonezi și este cel mai important monument al fondării statului polonez. În interior se află moaștele Sfântului Adalbert, patronul Poloniei. Ușile de bronz ale catedralei sunt o capodoperă a artei medievale de turnare.",
      en: "Gniezno Cathedral is one of the most venerable church buildings in Poland. It was the coronation site of the first Polish kings and is the most important monument of the founding of the Polish state. Inside are the relics of Saint Adalbert, the patron saint of Poland. The bronze doors of the cathedral are a masterpiece of medieval casting art."
    },
    descriptionAdvanced: {
      de: "Die Kathedrale von Gnesen ist eines der bedeutendsten sakralen und historischen Bauwerke Polens und ein Ort von tiefer nationaler Bedeutung. Als gotisches Meisterwerk thront sie majestätisch über der Stadt, die einst die erste Hauptstadt Polens war. Hier ruhen in einem prächtigen Silbersarkophag die Reliquien des Heiligen Adalbert, des Schutzpatrons Polens. Zudem war die Kathedrale der Schauplatz der Krönungen der ersten polnischen Könige. Ein besonderer Schatz ist die Gnesener Bronzetür aus dem 12. Jahrhundert, die Szenen aus dem Leben und dem Martyrium des Heiligen Adalbert meisterhaft darstellt.",
      hu: "",
      ro: "",
      en: "Step onto Lech Hill and you'll find yourself at the cradle of the Polish nation, where the twin towers of Gniezno Cathedral rise as silent sentinels over the landscape. This site isn't merely a church; it was the sacred coronation hall for the very first kings of Poland, marking the precise spot where a nation was born. As you approach the massive Romanesque Gniezno Doors, you are looking at a masterpiece of 12th-century bronze casting that depicts the dramatic life of Saint Adalbert. Inside, the glimmering silver reliquary of the patron saint rests beneath a magnificent Baroque canopy, surrounded by eighteen chapels that whisper tales of medieval power and piety. The cathedral remains a living monument to the spiritual and political dawn of Central Europe. History K8 – The formation of the Polish State and Medieval Europe."
    },
    factsAdvanced: {
      de: ["In der Kathedrale wurden fünf der frühen polnischen Könige gekrönt.", "Die Gnesener Tür gilt als eines der wichtigsten Denkmäler der romanischen Kunst in Europa.", "Der silberne Reliquienschrein des Heiligen Adalbert wurde im 17. Jahrhundert angefertigt.", "Das Gebäude wurde mehrfach durch Brände zerstört und wieder aufgebaut, zuletzt im gotischen Stil."],
      hu: [],
      ro: [],
      en: [
        "The current Gothic cathedral's construction began in 1342 and spanned nearly 200 years until completion.",
        "The cathedral hosted the coronations of 5 Polish kings, starting with Bolesław the Brave in 1025.",
        "The famous Gniezno Doors were cast around 1175 and stand approximately 3.3 meters high.",
        "The silver reliquary of Saint Adalbert, created in 1662, is made of over 80 kilograms of silver.",
        "The two landmark towers of the cathedral reach a height of 80 meters, dominating the Gniezno skyline."
      ]
    },
    facts: {
      de: ["Ort der Krönung der ersten polnischen Könige.", "Hauptkirche Polens mit großer historischer Bedeutung.", "Beherbergt das silberne Reliquiar des hl. Adalbert.", "Berühmt für die romanischen 'Gnesener Türen'.", "Eine der ältesten Diözesen in Europa.", "Ein bedeutendes Ziel auf der Piasten-Route."],
      hu: ["Az első lengyel királyok koronázási helyszíne.", "Lengyelország főtemploma nagy történelmi jelentőséggel.", "Szent Adalbert ezüst ereklyetartójának őrzője.", "Híres a román kori 'Gnieznói ajtókról'.", "Európa egyik legrégebbi egyházmegyéje.", "A Piast-útvonal egyik jelentős állomása."],
      ro: ["Locul încoronării primilor regi polonezi.", "Biserica principală a Poloniei, cu o mare importanță istorică.", "Găzduiește racla de argint a Sf. Adalbert.", "Renumit pentru 'Ușile de Gniezno' în stil romanic.", "Una dintre cele mai vechi eparhii din Europa.", "O destinație importantă pe Traseul Piast."],
      en: ["Site of the coronation of the first Polish kings.", "Main church of Poland with great historical significance.", "Houses the silver reliquary of St. Adalbert.", "Famous for the Romanesque 'Gniezno Doors'.", "One of the oldest dioceses in Europe.", "A major destination on the Piast Route."]
    },
    image: "/geo-images/poland/gniezno-cathedral.webp"
  },
  {
    id: "pl-krzyztopor",
    type: "historical",
    parent: "PL-SK",
    coords: [21.6058, 50.7758],
    name: { de: "Schloss Krzyżtopór", hu: "Krzyżtopór kastély", ro: "Castelul Krzyżtopór", en: "Krzyżtopór Palace" },
    description: {
      de: "Die monumentale Ruine des Schlosses Krzyżtopór in Ujazd ist ein faszinierendes Beispiel polnischer Palastarchitektur des 17. Jahrhunderts. Vor dem Bau von Versailles war es der größte Palast Europas. Die Anlage wurde nach dem Kalenderprinzip entworfen, mit vier Türmen, 12 großen Sälen, 52 Zimmern und 365 Fenstern. Trotz der Zerstörungen strahlt die Ruine bis heute puren Größenwahn aus.",
      hu: "Az ujazdi Krzyżtopór kastély monumentális romja a 17. századi lengyel palotaépítészet lenyűgöző példája. Versailles megépítése előtt ez volt Európa legnagyobb palotája. A komplexumot a naptár elve alapján tervezték, négy toronnyal, 12 nagy teremmel, 52 szobával és 365 ablakkal. A pusztítás ellenére a rom a mai napig a tiszta megalomániát sugározza.",
      ro: "Ruinele monumentale ale Castelului Krzyżtopór din Ujazd reprezintă un exemplu fascinant de arhitectură de palat poloneză din secolul al XVII-lea. Înainte de construcția Palatului Versailles, a fost cel mai mare palat din Europa. Complexul a fost proiectat după principiul calendarului, cu patru turnuri, 12 săli mari, 52 de camere și 365 de ferestre. În ciuda distrugerii, ruina emană și astăzi megalomanie pură.",
      en: "The monumental ruins of Krzyżtopór Palace in Ujazd are a fascinating example of 17th-century Polish palace architecture. Before the construction of Versailles, it was the largest palace in Europe. The complex was designed according to the calendar principle, with four towers, 12 large halls, 52 rooms, and 365 windows. Despite its destruction, the ruin still radiates pure megalomania today."
    },
    descriptionAdvanced: {
      de: "Das Schloss Krzyżtopór in Ujazd ist eine gigantische und faszinierende Schlossruine, die einst die größte Palastanlage Europas vor dem Bau von Versailles war. Der exzentrische Bauherr Krzysztof Ossoliński ließ den Palast im 17. Jahrhundert nach einem strengen kalendarischen Muster errichten: Er besaß so viele Fenster wie Tage, Räume wie Wochen und Türme wie Jahreszeiten im Jahr. Obwohl der Prunkbau nur kurze Zeit nach seiner Fertigstellung während der Schwedischen Sintflut zerstört wurde, lassen die gewaltigen Mauern seine einstige Pracht erahnen. Mystische Legenden und die immense Größe machen die Ruine zu einem unvergesslichen Ausflugsziel.",
      hu: "",
      ro: "",
      en: "Walking through the towering skeletal remains of Krzyżtopór Palace in Ujazd feels like stepping into the mind of a visionary. Built by Krzysztof Ossoliński in the mid-17th century, this 'palazzo in fortezza' was a manifestation of pure celestial symbolism and unbridled ambition. Before Versailles claimed the crown, this was Europe's most grandiloquent residence. Local legends whisper of stable troughs made of fine marble and a dining hall ceiling designed as a massive aquarium teeming with exotic fish. Its unique calendar-based design remains its most haunting feature, reflecting the passage of time through the very bones of its architecture. Though ravaged by the Swedish Deluge and subsequent wars, the ruins stand as a powerful testament to the golden age of the Polish-Lithuanian Commonwealth and the fragility of monumental power. History K8 — Early Modern Architecture and the Commonwealth's Golden Age."
    },
    factsAdvanced: {
      de: ["Der Palast wurde basierend auf einem Kalendersystem mit 365 Fenstern, 52 Räumen, 12 großen Sälen und 4 Türmen entworfen.", "Angeblich befand sich im Speisesaal ein riesiges Aquarium an der Decke.", "Das Schloss wurde nie vollständig wiederaufgebaut, nachdem es im 17. Jahrhundert zerstört wurde.", "Der Name 'Krzyżtopór' ist eine Kombination aus den Wörtern Kreuz (Krzyż) und Axt (Topór), den Wappen des Gründers."],
      hu: [],
      ro: [],
      en: [
        "The palace was constructed between 1621 and 1644 at an estimated cost of 30 million Polish zlotys, a massive fortune for the 17th century.",
        "The layout strictly follows a calendar theme, featuring 4 towers representing the seasons, 12 ballrooms for the months, 52 rooms for the weeks, and 365 windows for the days.",
        "Occupying a total area of 1.3 hectares, the massive fortress walls stretch for over 600 meters to protect the central residence.",
        "The palace was fully inhabited for only 11 years before it was captured and looted by Swedish forces in 1655 during the 'Deluge'.",
        "Nearly 90% of the original stone walls have survived to this day, making it one of the largest and best-preserved monumental ruins in Europe."
      ]
    },
    facts: {
      de: ["Größter Palast Europas vor Versailles.", "Erbaut als Kalender (365 Fenster, 52 Räume).", "Beeindruckende, gigantische Palastruine.", "Ein Symbol aristokratischer Prachtsucht.", "Besaß angeblich ein Aquarium in der Decke.", "Liegt abseits der großen Touristenpfade."],
      hu: ["Versailles előtt Európa legnagyobb palotája.", "Naptár alapján épült (365 ablak, 52 szoba).", "Lenyűgöző, gigantikus palotarom.", "Az arisztokratikus pompavágy szimbóluma.", "Állítólag egy akvárium volt a mennyezetén.", "Távol esik a nagy turistautaktól."],
      ro: ["Cel mai mare palat din Europa înainte de Versailles.", "Construit ca un calendar (365 de ferestre, 52 de camere).", "Ruină impresionantă, gigantică de palat.", "Un simbol al splendorii aristocratice.", "Se presupune că avea un acvariu în tavan.", "Situat în afara traseelor turistice majore."],
      en: ["Largest palace in Europe before Versailles.", "Built as a calendar (365 windows, 52 rooms).", "Impressive, gigantic palace ruin.", "A symbol of aristocratic splendor.", "Allegedly had an aquarium in the ceiling.", "Located off the major tourist paths."]
    },
    image: "/geo-images/poland/krzyztopor.webp"
  },
  {
    id: "pl-bialowieza-np",
    type: "landmark",
    parent: "PL-PD",
    coords: [23.8681, 52.7000],
    name: { de: "Białowieża-NP", hu: "Białowieża Nemzeti Park", ro: "Parcul Național Białowieża", en: "Białowieża NP" },
    description: {
      de: "Der Nationalpark Białowieża schützt den letzten Rest des riesigen Urwaldes, der einst weite Teile Europas bedeckte. Die uralten Bäume und die unberührte Natur bieten einen unvergleichlichen Lebensraum. Der Park ist besonders als Heimat des europäischen Wisents bekannt, das hier erfolgreich wiederangesiedelt wurde. Dieses UNESCO-Welterbe ist ein Paradies für Naturliebhaber.",
      hu: "A Białowieża Nemzeti Park védi az egykor Európa nagy részét borító hatalmas őserdő utolsó maradványát. Az ősi fák és az érintetlen természet páratlan élőhelyet biztosítanak. A park különösen az európai bölény otthonaként ismert, amelyet itt sikeresen visszatelepítettek. Ez az UNESCO világörökségi helyszín a természet szerelmeseinek paradicsoma.",
      ro: "Parcul Național Białowieża protejează ultimele rămășițe ale imensei păduri virgine care a acoperit cândva mari părți ale Europei. Copacii străvechi și natura neatinsă oferă un habitat de neegalat. Parcul este deosebit de cunoscut ca fiind casa zimbrului european, care a fost reintrodus cu succes aici. Acest sit al Patrimoniului Mondial UNESCO este un paradis pentru iubitorii de natură.",
      en: "Białowieża National Park protects the last remnant of the immense primeval forest that once covered large parts of Europe. The ancient trees and untouched nature provide an unparalleled habitat. The park is especially known as the home of the European bison, which was successfully reintroduced here. This UNESCO World Heritage site is a paradise for nature lovers."
    },
    descriptionAdvanced: {
      de: "Der Białowieża-Nationalpark schützt den letzten verbliebenen großen Rest des riesigen Urwaldes, der einst weite Teile Europas bedeckte. Dieser faszinierende, unberührte Wald an der Grenze zu Belarus bietet ein Zuhause für eine enorme Vielfalt an Flora und Fauna. Die absolute Hauptattraktion des Parks ist der majestätische Wisent, das schwerste Landsäugetier Europas, das hier in freier Wildbahn lebt. Jahrhundertalte Eichen und dichte, mystische Waldgebiete vermitteln den Besuchern das Gefühl, in eine andere, längst vergangene Zeit einzutauchen. Der Park ist zu Recht als UNESCO-Weltnaturerbe anerkannt.",
      hu: "",
      ro: "",
      en: "Stepping into Białowieża National Park is like entering a living time capsule where the clock stopped centuries ago. As the sun filters through the canopy of ancient oaks and towering spruce, you are witnessing the last surviving fragment of the vast lowland forest that once spanned the European continent. This UNESCO World Heritage site serves as a sanctuary for the majestic European bison, a species once on the brink of extinction but now thriving amidst the moss-covered logs and silent glades. Every step on the leaf-littered floor reveals a complex ecosystem of rare fungi, insects, and birds that exist nowhere else in such pristine conditions. The park's Strict Protection Area remains untouched by human hands, allowing nature to dictate its own cycle of life and decay. Exploring this emerald heart of Poland offers a profound lesson in biodiversity and conservation. Geography K7 — ecosystems and environmental protection."
    },
    factsAdvanced: {
      de: ["Der Białowieża-Urwald ist der älteste Nationalpark Polens und ein UNESCO-Weltnaturerbe.", "Hier lebt die weltweit größte freilebende Population an Europäischen Wisenten.", "Viele Teile des Reservats dürfen nur in Begleitung von lizenzierten Naturführern betreten werden.", "Einige Eichen im Park, wie die berühmte Jagiełło-Eiche, werden auf über 400 Jahre geschätzt."],
      hu: [],
      ro: [],
      en: [
        "The park covers a total area of approximately 105 square kilometers, with the Strict Protection Area accounting for about 60% of this territory.",
        "Białowieża is home to over 800 European bison, representing the world's largest free-roaming population of this species.",
        "Some of the ancient oaks in the forest, such as the famous 'Jagiełło Oak', reached heights of over 38 meters before their natural decline.",
        "The ecosystem supports more than 12,000 animal species, including a remarkably high density of deadwood-dependent insects and fungi.",
        "It was established as a National Park in 1921, making it one of the oldest protected areas in Europe."
      ]
    },
    facts: {
      de: ["Schützt den letzten Tiefland-Urwald Europas.", "Heimat der größten freilebenden Wisentpopulation.", "Geteilt zwischen Polen und Belarus.", "Einzigartiges UNESCO-Weltnaturerbe.", "Sehr hohe Biodiversität an Pflanzen und Pilzen.", "Strenges Reservat nur mit Guide begehbar."],
      hu: ["Európa utolsó síkvidéki őserdejét védi.", "A legnagyobb szabadon élő bölénypopuláció otthona.", "Lengyelország és Fehéroroszország között oszlik meg.", "Egyedülálló UNESCO természeti világörökség.", "Nagyon magas növény- és gombadiverzifikáció.", "A szigorúan védett terület csak vezetővel látogatható."],
      ro: ["Protejează ultima pădure virgină de șes din Europa.", "Găzduiește cea mai mare populație de zimbri în libertate.", "Împărțit între Polonia și Belarus.", "Sit unic al Patrimoniului Mondial Natural UNESCO.", "Biodiversitate foarte mare de plante și ciuperci.", "Rezervație strictă accesibilă doar cu ghid."],
      en: ["Protects Europe's last lowland primeval forest.", "Home to the largest free-roaming bison population.", "Shared between Poland and Belarus.", "Unique UNESCO World Natural Heritage site.", "Very high biodiversity of plants and fungi.", "Strict reserve accessible only with a guide."]
    },
    image: "/geo-images/poland/bialowieza.webp"
  },
  {
    id: "pl-tatra-np",
    type: "mountain",
    parent: "PL-MA",
    coords: [20.0000, 49.2500],
    name: { de: "Tatra-Nationalpark", hu: "Tátrai Nemzeti Park", ro: "Parcul Național Tatra", en: "Tatra NP" },
    description: {
      de: "Der Tatra-Nationalpark bewahrt das höchste Gebirge Polens und bietet atemberaubende alpine Landschaften. Die schroffen Gipfel, tiefen Täler und klaren Bergseen wie das Meerauge ziehen jährlich Millionen von Wanderern an. Der Park ist Lebensraum für Bären, Gämsen und Murmeltiere. Die raue Schönheit der Tatra macht sie zu einem Kronjuwel der polnischen Natur.",
      hu: "A Tátrai Nemzeti Park védi Lengyelország legmagasabb hegységét, és lélegzetelállító alpesi tájakat kínál. A zord csúcsok, a mély völgyek és a tiszta hegyi tavak, mint a Tengerszem, évente több millió túrázót vonzanak. A park medvék, zergék és mormoták élőhelye. A Tátra zord szépsége a lengyel természet egyik koronaékszerévé teszi.",
      ro: "Parcul Național Tatra protejează cei mai înalți munți din Polonia și oferă peisaje alpine uluitoare. Vârfurile abrupte, văile adânci și lacurile limpezi de munte, cum ar fi Morskie Oko, atrag milioane de drumeți anual. Parcul este habitat pentru urși, capre negre și marmote. Frumusețea aspră a Munților Tatra îi face o bijuterie a naturii poloneze.",
      en: "Tatra National Park preserves the highest mountains in Poland and offers breathtaking alpine landscapes. The rugged peaks, deep valleys, and clear mountain lakes like Morskie Oko attract millions of hikers annually. The park is a habitat for bears, chamois, and marmots. The rugged beauty of the Tatras makes them a crown jewel of Polish nature."
    },
    descriptionAdvanced: {
      de: "Der Tatra-Nationalpark im Süden Polens umfasst den höchsten und spektakulärsten Teil der Karpaten. Alpine Landschaften mit schroffen Granitgipfeln, tiefen Gletschertälern und glasklaren Bergseen prägen dieses beeindruckende Naturreservat. Hier befindet sich der Rysy, der mit fast 2.500 Metern höchste Berg Polens, der Bergsteigern anspruchsvolle Touren bietet. Die vielfältige alpine Flora und Fauna, darunter Braunbären, Gämsen und Murmeltiere, ist streng geschützt. Im Winter zieht das Gebiet rund um Zakopane Skifahrer an, während es im Sommer ein Paradies für Wanderer aus der ganzen Welt.",
      hu: "",
      ro: "",
      en: "Stepping into the Tatra National Park feels like entering a realm where the sky meets the earth in a jagged embrace of granite and limestone. As I trekked towards Morskie Oko, the 'Eye of the Sea,' the reflection of the high peaks in the emerald waters was nothing short of hypnotic. This UNESCO Biosphere Reserve protects the only alpine mountain range in Poland, a sanctuary for the elusive Tatra chamois and the majestic brown bear. The air here is crisp, carrying the scent of ancient forests and the sound of cascading waterfalls like Siklawa. Whether standing atop Rysy, the country's highest point, or exploring the deep caves of the Western Tatras, the park reveals a dramatic geological history carved by glaciers over millennia. Geography K7 — Alpine landforms and glacial erosion."
    },
    factsAdvanced: {
      de: ["Der Nationalpark schützt die einzige Hochgebirgslandschaft in Polen.", "Der höchste Berg innerhalb des Parks und ganz Polens ist der Rysy mit 2.499 Metern.", "Das Gebiet ist auch Heimat seltener Raubtiere wie Wölfen und Luchsen.", "Eines der beliebtesten Ausflugsziele ist der malerische Bergsee Morskie Oko (Meerauge)."],
      hu: [],
      ro: [],
      en: [
        "The park's highest peak in Poland, Rysy, reaches a precise elevation of 2,499 meters above sea level.",
        "Morskie Oko is the largest lake in the Tatras, covering an area of 34.93 hectares with a maximum depth of 50.8 meters.",
        "Established in 1954, the park protects approximately 211.64 square kilometers of high-altitude mountain terrain.",
        "There are over 275 kilometers of marked hiking trails available for the nearly 4 million tourists who visit the park each year.",
        "The Siklawa waterfall is the highest in Poland, plunging approximately 70 meters down the mountain slope."
      ]
    },
    facts: {
      de: ["Das einzige alpine Gebirge in Polen.", "Beherbergt den höchsten Gipfel, den Rysy (2499 m).", "Beliebtes Ziel für Wanderer und Bergsteiger.", "Geschützter Lebensraum für Braunbären und Gämsen.", "Anerkannt als UNESCO-Biosphärenreservat.", "Grenzt an den slowakischen Nationalpark."],
      hu: ["Az egyetlen alpesi jellegű hegység Lengyelországban.", "Itt található a legmagasabb csúcs, a Rysy (2499 m).", "Népszerű célpont túrázók és hegymászók számára.", "A barna medvék és a zergék védett élőhelye.", "Elismert UNESCO bioszféra-rezervátum.", "Határos a szlovák nemzeti parkkal."],
      ro: ["Singurii munți de tip alpin din Polonia.", "Găzduiește cel mai înalt vârf, Rysy (2499 m).", "Destinație populară pentru drumeții și alpiniști.", "Habitat protejat pentru urșii bruni și caprele negre.", "Recunoscut ca rezervație a biosferei UNESCO.", "Se învecinează cu parcul național slovac."],
      en: ["The only alpine-type mountains in Poland.", "Home to the highest peak, Rysy (2499 m).", "Popular destination for hikers and mountaineers.", "Protected habitat for brown bears and chamois.", "Recognized as a UNESCO Biosphere Reserve.", "Borders the Slovak national park."]
    },
    image: "/geo-images/poland/tatra-np.webp"
  },
  {
    id: "pl-bieszczady-np",
    type: "mountain",
    parent: "PL-PK",
    coords: [22.5500, 49.1800],
    name: { de: "Bieszczady-NP", hu: "Bieszczady Nemzeti Park", ro: "Parcul Național Bieszczady", en: "Bieszczady NP" },
    description: {
      de: "Die Bieszczady sind die wildeste und abgelegenste Bergregion in Polen. Sie sind bekannt für ihre 'Połoniny', weite und baumlose Bergwiesen, die atemberaubende Ausblicke bieten. Diese Region ist ein Rückzugsort für Wölfe, Bären und Luchse, fernab vom Massentourismus. Hier finden Naturliebhaber absolute Stille und den dunkelsten Sternenhimmel des Landes.",
      hu: "A Bieszczady a legvadabb és legeldugottabb hegyvidéki régió Lengyelországban. Híresek a 'Połoniny'-ről, a széles és fátlan hegyi rétekről, amelyek lélegzetelállító kilátást nyújtanak. Ez a régió a farkasok, medvék és hiúzok menedéke, távol a tömegturizmustól. Itt a természet szerelmesei teljes csendet és az ország legsötétebb csillagos egét találják.",
      ro: "Bieszczady este cea mai sălbatică și izolată regiune montană din Polonia. Aceștia sunt cunoscuți pentru 'Połoniny', pajiștile montane largi și fără copaci, care oferă vederi uluitoare. Această regiune este un refugiu pentru lupi, urși și râși, departe de turismul de masă. Aici, iubitorii de natură găsesc liniște absolută și cel mai întunecat cer înstelat din țară.",
      en: "The Bieszczady Mountains are the wildest and most remote mountain region in Poland. They are known for their 'Połoniny', wide and treeless mountain meadows that offer breathtaking views. This region is a retreat for wolves, bears, and lynxes, far from mass tourism. Here, nature lovers find absolute silence and the darkest starry sky in the country."
    },
    descriptionAdvanced: {
      de: "Der Bieszczady-Nationalpark im äußersten Südosten Polens ist berühmt für seine raue, wilde Natur und die dünne Besiedlung. Charakteristisch für diese Region sind die 'Połoniny', weite und windgepeitschte Hochweiden, die einen atemberaubenden, ungestörten Panoramablick über die weiche, hügelige Landschaft bieten. Abseits der großen Touristenströme bietet der Park endlose Wanderwege durch alte Buchenwälder, in denen eine außergewöhnlich reiche Tierwelt heimisch ist. Wölfe, Bären und europäische Bisons streifen durch dieses abgeschiedene Grenzgebiet zu Ukraine und Slowakei. Es ist der perfekte Ort für alle, die Einsamkeit und unberührte Natur suchen.",
      hu: "",
      ro: "",
      en: "Deep within the southeastern corner of Poland, where the borders of Slovakia and Ukraine meet, lies the Bieszczady National Park. This is a land where time seems to have slowed, offering a rare glimpse into the untamed Carpathian wilderness. As an explorer navigating these ancient ridges, you are first struck by the 'Połoniny'—unique high-altitude meadows that replace the usual rocky peaks with rolling waves of golden grass. These treeless plateaus provide an unobstructed 360-degree panorama of the emerald valleys below. It is the only place in the country where the European bison, brown bear, and lynx still roam with such freedom. Under the darkest starry skies in Central Europe, the silence is broken only by the distant howl of wolves. This region serves as a living laboratory for the study of biodiversity and the complex relationship between alpine ecosystems and human history. Geography K7 — ecosystems and mountain landforms."
    },
    factsAdvanced: {
      de: ["Der Bieszczady-Nationalpark ist der drittgrößte Nationalpark in Polen.", "Die Region ist bekannt für ihren besonders dunklen Nachthimmel, der ideal für Sternenbeobachtungen ist.", "Das Gebiet war einst dicht besiedelt, wurde aber nach dem Zweiten Weltkrieg in der 'Aktion Weichsel' fast völlig entvölkert.", "Ein Teil der Buchenwälder im Park gehört zum UNESCO-Weltnaturerbe."],
      hu: [],
      ro: [],
      en: [
        "Bieszczady National Park covers an area of 292 square kilometers, making it the third-largest national park in Poland.",
        "The highest peak in the park, Tarnica, reaches an elevation of 1,346 meters above sea level.",
        "Approximately 80% of the park's territory is covered by dense beech forests, which harbor a population of over 200 European bison.",
        "The park features over 130 kilometers of marked hiking trails that traverse the famous high-altitude meadows.",
        "The region is a core part of the East Carpathian Biosphere Reserve, which spans across three different countries."
      ]
    },
    facts: {
      de: ["Bekannt für die charakteristischen 'Połoniny'.", "Polens wildeste Berglandschaft.", "Heimat von Großraubtieren wie Wölfen und Luchsen.", "Ausgezeichnetes Gebiet zur Sternenbeobachtung.", "Liegt im äußersten Südosten Polens.", "Besitzt verlassene Dörfer aus der Vorkriegszeit."],
      hu: ["A jellegzetes 'Połoniny' hegyi rétekről ismert.", "Lengyelország legvadabb hegyvidéki tája.", "A nagyragadozók, mint a farkasok és hiúzok otthona.", "Kiváló terület csillagászati megfigyelésekre.", "Lengyelország legdélkeletibb részén fekszik.", "Háború előtti elhagyatott falvakkal rendelkezik."],
      ro: ["Cunoscuți pentru pajiștile caracteristice 'Połoniny'.", "Cel mai sălbatic peisaj montan din Polonia.", "Găzduiește prădători mari precum lupi și râși.", "Zonă excelentă pentru observarea stelelor.", "Situat în extremitatea de sud-est a Poloniei.", "Are sate abandonate din perioada antebelică."],
      en: ["Known for the characteristic 'Połoniny' meadows.", "Poland's wildest mountain landscape.", "Home to large predators such as wolves and lynxes.", "Excellent area for stargazing.", "Located in the extreme southeast of Poland.", "Features abandoned pre-war villages."]
    },
    image: "/geo-images/poland/bieszczady-np.webp"
  },
  {
    id: "pl-masurian-lakes",
    type: "lake",
    parent: "PL-WN",
    coords: [21.8000, 53.8000],
    name: { de: "Masurische Seen", hu: "Mazuri-tavak", ro: "Lacurile Mazuriene", en: "Masurian Lakes" },
    description: {
      de: "Die Masurische Seenplatte ist ein riesiges Netzwerk aus über 2000 Seen, die durch Flüsse und Kanäle miteinander verbunden sind. Sie ist ein Mekka für Segler, Kanuten und Angler. Die unberührten Wälder ringsum bieten Schutz für zahlreiche seltene Vogelarten. Masuren wird oft als das grüne Herz Polens bezeichnet und ist ideal zum Entspannen.",
      hu: "A Mazuri-tóhátság több mint 2000 tóból álló hatalmas hálózat, amelyeket folyók és csatornák kötnek össze. A vitorlázók, kenusok és horgászok mekkája. A környező érintetlen erdők számos ritka madárfajnak nyújtanak menedéket. Mazúriát gyakran Lengyelország zöld szívének is nevezik, és ideális a kikapcsolódásra.",
      ro: "Districtul Lacurilor Mazuriene este o rețea uriașă de peste 2000 de lacuri conectate prin râuri și canale. Este o mecca pentru marinari, canotori și pescari. Pădurile virgine din jur oferă protecție pentru numeroase specii rare de păsări. Mazuria este adesea numită inima verde a Poloniei și este ideală pentru relaxare.",
      en: "The Masurian Lake District is a vast network of over 2000 lakes connected by rivers and canals. It is a mecca for sailors, canoeists, and anglers. The surrounding untouched forests provide shelter for numerous rare bird species. Masuria is often referred to as the green heart of Poland and is ideal for relaxing."
    },
    descriptionAdvanced: {
      de: "Die Masurischen Seen bilden eine ausgedehnte, atemberaubende Wasserlandschaft im Nordosten Polens, die aus tausenden miteinander verbundenen Seen besteht. Sie wird oft als das 'Land der Tausend Seen' bezeichnet und ist ein Paradies für Segler, Kanufahrer und Naturliebhaber. Umgeben von dichten Wäldern und malerischen kleinen Dörfern, bietet die Region ideale Bedingungen für einen erholsamen Urlaub fernab des Stresses. Der Śniardwy, der größte See Polens, bildet das Herzstück dieser einzigartigen eiszeitlichen Landschaft. Ob auf dem Wasser, mit dem Fahrrad oder zu Fuß – Masuren verzaubert jeden Besucher durch seine idyllische Ruhe.",
      hu: "",
      ro: "",
      en: "Imagine stepping into a sprawling blue labyrinth where the water reflects the sky with crystal clarity. The Masurian Lake District, often hailed as the 'Land of a Thousand Lakes,' is actually home to over 2,000 bodies of water carved into the landscape by the retreat of the Pleistocene glaciers. As you navigate the intricate network of canals connecting these basins, you might spot rare white-tailed eagles soaring above the Puszcza Piska forest or find yourself docking near a medieval Teutonic fortress. This region is a sanctuary where the rhythm of nature dictates the day, offering a tranquil escape for sailors and historians alike. The interconnected waterways provide a unique perspective on the geological forces that shaped Northern Europe. Geography K7 — Post-glacial landscapes and inland water systems."
    },
    factsAdvanced: {
      de: ["Die Masurische Seenplatte umfasst tatsächlich mehr als 2.000 einzelne Seen.", "Die Seen sind durch ein komplexes Netz aus natürlichen Flüssen und künstlichen Kanälen verbunden.", "Der Śniardwy (Spirdingsee) ist mit einer Fläche von über 113 Quadratkilometern der größte See Polens.", "Die unberührten Schilflandschaften sind ein wichtiges Brutgebiet für seltene Vogelarten wie Kormorane und Seeadler."],
      hu: [],
      ro: [],
      en: [
        "Lake Śniardwy is the largest lake in Poland, covering a massive surface area of 113.8 square kilometers.",
        "The district features a complex network of over 2,000 individual lakes that each exceed 1 hectare in size.",
        "Lake Mamry, the second largest in the region, consists of six interconnected basins and reaches depths of 44 meters.",
        "The Puszcza Piska forest, which surrounds many of the lakes, spans nearly 100,000 hectares of protected natural land.",
        "The Elbląg Canal, which connects parts of the region, uses a unique system of inclined planes to carry boats over dry land across a 100-meter elevation change."
      ]
    },
    facts: {
      de: ["Besteht aus mehr als 2.000 miteinander verbundenen Seen.", "Eines der besten Segelreviere in Europa.", "Spirdingsee (Śniardwy) ist der größte See Polens.", "Kandidat für die Neuen 7 Naturwunder.", "Bedeutendes Gebiet für Vogelbeobachtungen.", "Perfekt für Hausbooturlaube."],
      hu: ["Több mint 2000 egymással összekapcsolt tóból áll.", "Európa egyik legjobb vitorlázó területe.", "A Śniardwy-tó Lengyelország legnagyobb tava.", "Jelölt volt az Új 7 Természeti Csoda címre.", "Jelentős madármegfigyelő terület.", "Tökéletes lakóhajós nyaralásokhoz."],
      ro: ["Constă din peste 2.000 de lacuri interconectate.", "Una dintre cele mai bune zone de navigație din Europa.", "Lacul Śniardwy este cel mai mare lac din Polonia.", "Candidat pentru Cele Noi 7 Minuni ale Naturii.", "Zonă importantă pentru observarea păsărilor.", "Perfect pentru vacanțe pe bărci cu casă."],
      en: ["Consists of more than 2,000 interconnected lakes.", "One of the best sailing areas in Europe.", "Lake Śniardwy is the largest lake in Poland.", "Candidate for the New 7 Wonders of Nature.", "Important area for bird watching.", "Perfect for houseboat holidays."]
    },
    image: "/geo-images/poland/masurian-lakes.webp"
  },
  {
    id: "pl-morskie-oko",
    type: "lake",
    parent: "PL-MA",
    coords: [20.0728, 49.1978],
    name: { de: "Meerauge", hu: "Morskie Oko", ro: "Morskie Oko", en: "Morskie Oko" },
    description: {
      de: "Das Morskie Oko (Meerauge) ist der größte und wohl schönste Bergsee der Hohen Tatra. Er liegt malerisch eingebettet in einem tiefen Kessel, überragt von steilen Granitgipfeln. Das smaragdgrüne Wasser und die umliegende Alpenflora machen ihn zu einem unvergesslichen Anblick. Der Weg zum See ist eine der beliebtesten Wanderrouten Polens.",
      hu: "A Morskie Oko (Tengerszem) a Magas-Tátra legnagyobb és talán legszebb hegyi tava. Festői környezetben fekszik egy mély katlanban, meredek gránitcsúcsok fölé magasodva. A smaragdzöld víz és a környező alpesi flóra felejthetetlen látványt nyújt. A tóhoz vezető út Lengyelország egyik legnépszerűbb túraútvonala.",
      ro: "Morskie Oko (Ochiul Mării) este cel mai mare și, probabil, cel mai frumos lac de munte din Tatra Înaltă. Este situat pitoresc într-o căldare adâncă, dominat de vârfuri abrupte de granit. Apa de un verde smarald și flora alpină din jur îl fac o priveliște de neuitat. Drumul către lac este unul dintre cele mai populare trasee de drumeții din Polonia.",
      en: "Morskie Oko (Eye of the Sea) is the largest and arguably the most beautiful mountain lake in the High Tatras. It is picturesquely situated in a deep cirque, towered over by steep granite peaks. The emerald green water and surrounding alpine flora make it an unforgettable sight. The path to the lake is one of Poland's most popular hiking routes."
    },
    descriptionAdvanced: {
      de: "Das Morskie Oko, zu Deutsch das 'Meerauge', ist der größte und wohl faszinierendste Gletschersee in der polnischen Tatra. Eingebettet in ein tiefes Tal und umgeben von schroffen, oft schneebedeckten Granitgipfeln, bietet er ein Postkartenmotiv par excellence. Das smaragdgrüne, kristallklare Wasser spiegelt die majestätischen Bergmassive der Umgebung wider und zieht unzählige Wanderer in seinen Bann. Eine malerische, gut ausgebaute Route führt durch dichte Wälder direkt an die Ufer des Sees, wo sich eine historische Berghütte befindet. Der Legende nach ist der See unterirdisch mit dem Adriatischen Meer verbunden.",
      hu: "",
      ro: "",
      en: "Stepping into the shoes of a high-altitude explorer, one cannot help but be humbled by the emerald expanse of Morskie Oko. Cradled deep within the Tatra National Park, this 'Eye of the Sea' remains a jewel of the High Tatras, reflecting the jagged silhouettes of the Mięguszowiecki Summits in its crystalline depths. Long-standing local legends once whispered that an underground tunnel connected these glacial waters directly to the Adriatic Sea, a myth that only adds to its timeless mystique. Today, the trek from Palenica Białczańska serves as a rite of passage for nature lovers, rewarding them with views of dwarf mountain pines and ancient stone pines that cling to the steep granite walls. The lake's unique ecosystem, being one of the few in the Tatras naturally stocked with trout, showcases the delicate balance of alpine biology. Geography K7 – glacial landforms and mountain ecosystems."
    },
    factsAdvanced: {
      de: ["Morskie Oko wurde vom Wall Street Journal einst zu einem der fünf schönsten Seen der Welt gekürt.", "Der See liegt auf einer Höhe von 1.395 Metern über dem Meeresspiegel.", "Er ist einer der wenigen Seen in der Tatra, in denen von Natur aus Fische, vor allem Forellen, leben.", "Direkt neben dem Morskie Oko liegt der etwas höher gelegene, ebenfalls wunderschöne See Czarny Staw."],
      hu: [],
      ro: [],
      en: [
        "The lake is situated at an elevation of 1,395 meters above sea level in the High Tatra mountains.",
        "Morskie Oko covers a total surface area of approximately 34.9 hectares.",
        "With a maximum depth of 50.8 meters, it is the deepest lake in the Tatra mountain range.",
        "Mount Rysy, the highest peak in Poland at 2,499 meters, towers directly above the lake's southern edge.",
        "The popular hiking trail leading to the lake from the Palenica Białczańska entrance is roughly 9 kilometers long."
      ]
    },
    facts: {
      de: ["Größter See in der Tatra.", "Gilt als einer der schönsten Seen der Welt.", "Das Wasser ist kristallklar und fischreich.", "Wird vom höchsten Berg Polens, dem Rysy, überragt.", "Die Wanderung dorthin ist sehr populär.", "Im Winter friert der See oft komplett zu."],
      hu: ["A Tátra legnagyobb tava.", "A világ egyik legszebb tavaként tartják számon.", "A víz kristálytiszta és halakban gazdag.", "Lengyelország legmagasabb hegye, a Rysy magasodik fölé.", "Az oda vezető túra nagyon népszerű.", "Télen a tó gyakran teljesen befagy."],
      ro: ["Cel mai mare lac din Tatra.", "Considerat unul dintre cele mai frumoase lacuri din lume.", "Apa este cristalină și bogată în pești.", "Este dominat de cel mai înalt munte din Polonia, Rysy.", "Drumeția până acolo este foarte populară.", "Iarna, lacul îngheață adesea complet."],
      en: ["Largest lake in the Tatra Mountains.", "Considered one of the most beautiful lakes in the world.", "The water is crystal clear and rich in fish.", "Towered over by Poland's highest mountain, Rysy.", "The hike there is very popular.", "In winter, the lake often freezes over completely."]
    },
    image: "/geo-images/poland/morskie-oko.webp"
  },
  {
    id: "pl-ojcow-np",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.8294, 50.2133],
    name: { de: "Ojców-NP", hu: "Ojców Nemzeti Park", ro: "Parcul Național Ojców", en: "Ojców NP" },
    description: {
      de: "Der Ojców-Nationalpark ist zwar der kleinste Polens, aber geologisch einer der interessantesten. Er besticht durch tiefe Schluchten, skurrile Kalksteinfelsen wie die Herkuleskeule und über 400 Höhlen. Inmitten dieser Karstlandschaft thronen historische Schlösser auf Felsvorsprüngen. Der Park liegt nur wenige Kilometer von Krakau entfernt und ist eine grüne Oase.",
      hu: "Bár az Ojców Nemzeti Park Lengyelország legkisebbike, geológiailag az egyik legérdekesebb. Mély szurdokokkal, különleges mészkősziklákkal (mint a Herkules-buzogány) és több mint 400 barlanggal büszkélkedhet. A karsztvidék közepén történelmi kastélyok magasodnak a sziklákon. A park Krakkótól mindössze néhány kilométerre található, egy igazi zöld oázis.",
      ro: "Deși Parcul Național Ojców este cel mai mic din Polonia, din punct de vedere geologic este unul dintre cele mai interesante. Captivează cu chei adânci, formațiuni bizare de calcar precum Măciuca lui Hercule și peste 400 de peșteri. În mijlocul acestui peisaj carstic, castele istorice se înalță pe stânci. Parcul este la doar câțiva kilometri de Cracovia și este o oază verde.",
      en: "Although Ojców National Park is the smallest in Poland, geologically it is one of the most interesting. It captivates with deep gorges, bizarre limestone formations like the Hercules' Club, and over 400 caves. In the midst of this karst landscape, historical castles sit perched on rock outcrops. The park is only a few kilometers from Krakow and is a green oasis."
    },
    descriptionAdvanced: {
      de: "Der Ojców-Nationalpark ist der kleinste, aber einer der reizvollsten Nationalparks in ganz Polen, gelegen unweit von Krakau. Das tief eingeschnittene Prądnik-Tal prägt diese verwunschene Landschaft, die durch bizarre Kalksteinfelsen, dunkle Höhlen und bewaldete Hänge besticht. Markante Felsformationen wie die bekannte 'Keule des Herkules' ragen wie natürliche Skulpturen in den Himmel. Zwischen den Naturwundern verstecken sich historische Schätze wie die Ruinen der Burg Ojców und das bestens erhaltene Schloss Pieskowa Skała. Die reiche Artenvielfalt und die zahlreichen Fledermausarten machen den Park auch biologisch hochinteressant.",
      hu: "",
      ro: "",
      en: "Log Entry: Prądnik Valley. Stepping into this landscape is like entering a prehistoric fairy tale carved from white limestone. Despite being Poland’s smallest national park, Ojców surprises me at every turn with dramatic vertical cliffs and the iconic Hercules’ Club, a gravity-defying rock pillar standing 25 meters tall. Exploring the verdant forest canopy, I discovered a labyrinth of over 400 caves that reveal secrets from the Jura period, including the legendary King Łokietek’s Cave. This isn't just a geological marvel; it is a place where medieval fortresses, part of the historic 'Eagle’s Nests' trail, keep watch over deep, misty gorges. From tracking rare bats to admiring the Renaissance architecture of Pieskowa Skała Castle, the park provides an incredible masterclass in karst topography. Geography K7 — limestone landscapes and erosion."
    },
    factsAdvanced: {
      de: ["Trotz seiner geringen Größe von nur rund 21 Quadratkilometern beherbergt der Park über 400 Höhlen.", "Die Fledermaus ist das offizielle Wappentier des Ojców-Nationalparks.", "Die imposante Felsformation 'Maczuga Herkulesa' (Keule des Herkules) ist über 25 Meter hoch.", "Das wunderschöne Renaissance-Schloss Pieskowa Skała ist ein Highlight entlang der Adlerhorst-Route."],
      hu: [],
      ro: [],
      en: [
        "At only 21.46 square kilometers, Ojców is the smallest of Poland's 23 national parks.",
        "The park protects over 400 caves, with Ciemna Cave containing archaeological evidence of Neanderthal habitation from 120,000 years ago.",
        "The famous Maczuga Herkulesa (Hercules' Club) limestone column stands at an impressive height of 25 meters.",
        "Biologists have identified 17 different species of bats living within the park's karst caverns.",
        "The Prądnik Valley, which forms the heart of the park, reaches depths of up to 100 meters between its limestone cliffs."
      ]
    },
    facts: {
      de: ["Der flächenmäßig kleinste Nationalpark in Polen.", "Berühmt für faszinierende Kalksteinformationen.", "Beherbergt das malerische Schloss Pieskowa Skała.", "Lebensraum für viele Fledermausarten in den Höhlen.", "Das Wahrzeichen ist der Felsen 'Herkuleskeule'.", "Teil der berühmten Adlerhorst-Route."],
      hu: ["Területre Lengyelország legkisebb nemzeti parkja.", "Lenyűgöző mészkőképződményeiről híres.", "Itt található a festői Pieskowa Skała kastély.", "Számos denevérfaj élőhelye a barlangokban.", "Jelképe a 'Herkules-buzogány' nevű szikla.", "A híres Sasfészek-útvonal része."],
      ro: ["Cel mai mic parc național din Polonia ca suprafață.", "Renumit pentru formațiunile fascinante de calcar.", "Găzduiește pitorescul Castel Pieskowa Skała.", "Habitat pentru multe specii de lilieci în peșteri.", "Punctul de reper este stânca 'Măciuca lui Hercule'.", "Parte a celebrului Traseu al Cuiburilor de Vulturi."],
      en: ["The smallest national park in Poland by area.", "Famous for fascinating limestone formations.", "Houses the picturesque Pieskowa Skała Castle.", "Habitat for many bat species in the caves.", "The landmark is the 'Hercules' Club' rock.", "Part of the famous Trail of the Eagles' Nests."]
    },
    image: "/geo-images/poland/ojcow-np.webp"
  },
  {
    id: "pl-kampinos-np",
    type: "landmark",
    parent: "PL-MZ",
    coords: [20.7500, 52.3000],
    name: { de: "Kampinos-NP", hu: "Kampinos Nemzeti Park", ro: "Parcul Național Kampinos", en: "Kampinos NP" },
    description: {
      de: "Der Kampinos-Nationalpark erstreckt sich als riesiges Waldgebiet direkt vor den Toren Warschaus. Die Landschaft ist geprägt von einem einzigartigen Kontrast aus trockenen Binnendünen und feuchten Sumpfgebieten. Der Wald ist ein wichtiges Refugium für Elche, Luchse und Biber. Es ist einer der wenigen Nationalparks weltweit, die direkt an eine europäische Hauptstadt grenzen.",
      hu: "A Kampinos Nemzeti Park egy hatalmas erdőterület, amely közvetlenül Varsó kapujában terül el. A tájat a száraz belföldi dűnék és a nedves mocsaras területek egyedülálló kontrasztja jellemzi. Az erdő fontos menedékhely a jávorszarvasok, hiúzok és hódok számára. Azon kevés nemzeti parkok egyike a világon, amely közvetlenül egy európai fővárossal határos.",
      ro: "Parcul Național Kampinos se întinde ca o zonă forestieră imensă chiar la porțile Varșoviei. Peisajul se caracterizează printr-un contrast unic de dune continentale uscate și mlaștini umede. Pădurea este un refugiu important pentru elani, râși și castori. Este unul dintre puținele parcuri naționale din lume care se învecinează direct cu o capitală europeană.",
      en: "The Kampinos National Park stretches out as a vast forest area right at the gates of Warsaw. The landscape is characterized by a unique contrast of dry inland dunes and wet swamps. The forest is an important refuge for elk, lynx, and beavers. It is one of the few national parks worldwide that directly borders a European capital."
    },
    descriptionAdvanced: {
      de: "Der Kampinos-Nationalpark bietet einen außergewöhnlichen Kontrast, da er sich als weite Naturlandschaft direkt an die nordwestlichen Vororte der Metropole Warschau anschließt. Er zeichnet sich durch seinen einzigartigen Wechsel aus trockenen, welligen Binnendünen und feuchten, oft schwer zugänglichen Sumpfwäldern aus. Die ausgedehnten Kiefernwälder und Wiesen bieten einen sicheren Rückzugsort für Elche, die als Wappentier des Parks gelten, sowie Biber und Luchse. Hunderte Kilometer an Wander- und Radwegen machen den Park zu einem äußerst beliebten Erholungsgebiet für Großstädter. Neben der Natur beherbergt das Gebiet auch Gedenkstätten für die Kämpfer des polnischen Widerstands im Zweiten Weltkrieg.",
      hu: "",
      ro: "",
      en: "Stretching across the ancient glacial valley of the Vistula, Kampinos National Park acts as the emerald guardian of Warsaw. It is a land of striking contradictions, where towering white inland dunes—some of the best-preserved in Europe—loom over mysterious, emerald-green marshlands. As you traverse the winding trails, the silence of the primeval forest is only broken by the bugle of an elk or the elusive shadow of a lynx. This wilderness is more than just a park; it is a living laboratory of post-glacial history and a vital sanctuary for species that once roamed all of Central Europe. It offers a rare chance to witness the struggle between dry sand and wet peat, creating a mosaic of habitats found nowhere else so close to a major metropolis. Biology K6 — forest ecosystems and inland dunes."
    },
    factsAdvanced: {
      de: ["Der Nationalpark wurde von der UNESCO als Biosphärenreservat anerkannt.", "Warschau ist die einzige europäische Hauptstadt, die direkt an einen Nationalpark angrenzt.", "Der Elchbestand im Park erholte sich prächtig, nachdem die Tiere dort erfolgreich wiederangesiedelt wurden.", "Im Kampinos-Wald befinden sich zahlreiche Gräber und Mahnmale für die Opfer des Zweiten Weltkriegs."],
      hu: [],
      ro: [],
      en: [
        "The park covers a total area of approximately 385 square kilometers, with a buffer zone extending much further.",
        "It features the largest complex of inland dunes in Poland, with some sandy peaks reaching heights of 30 meters.",
        "Over 16,000 species of animals inhabit the forest, including a significant population of reintroduced elk.",
        "In 2000, UNESCO officially recognized the area by designating it the Kampinoski Biosphere Reserve.",
        "Explorer-ready trails crisscross the landscape, offering 360 kilometers of marked paths for hiking and cycling."
      ]
    },
    facts: {
      de: ["Die 'grüne Lunge' der Hauptstadt Warschau.", "Bekannt für den Wechsel aus Sanddünen und Sümpfen.", "Das Wappentier des Parks ist der Elch.", "Verfügt über ein ausgezeichnetes Rad- und Wanderwegenetz.", "UNESCO-Biosphärenreservat 'Puszcza Kampinoska'.", "Versteckt viele historische Gräber aus dem Krieg."],
      hu: ["A főváros, Varsó 'zöld tüdeje'.", "A homokdűnék és a mocsarak váltakozásáról ismert.", "A park címerállata a jávorszarvas.", "Kiváló kerékpár- és túraútvonal-hálózattal rendelkezik.", "UNESCO bioszféra-rezervátum 'Puszcza Kampinoska'.", "Sok történelmi háborús sírt rejt."],
      ro: ["'Plămânul verde' al capitalei Varșovia.", "Cunoscut pentru alternanța dintre dunele de nisip și mlaștini.", "Animalul heraldic al parcului este elanul.", "Are o rețea excelentă de trasee pentru ciclism și drumeții.", "Rezervație a biosferei UNESCO 'Puszcza Kampinoska'.", "Ascunde multe morminte istorice din timpul războiului."],
      en: ["The 'green lung' of the capital city, Warsaw.", "Known for the alternation of sand dunes and swamps.", "The heraldic animal of the park is the elk.", "Features an excellent network of cycling and hiking trails.", "UNESCO Biosphere Reserve 'Puszcza Kampinoska'.", "Hides many historical war graves."]
    },
    image: "/geo-images/poland/kampinos-np.webp"
  },
  {
    id: "pl-wolin-np",
    type: "island",
    parent: "PL-ZP",
    coords: [14.5000, 54.0000],
    name: { de: "Wollin-NP", hu: "Wolin Nemzeti Park", ro: "Parcul Național Wolin", en: "Wolin Island NP" },
    description: {
      de: "Der Nationalpark Wollin erstreckt sich über die größte polnische Insel an der Ostsee. Seine beeindruckendsten Merkmale sind die steilen, bis zu 95 Meter hohen Klippen, die dramatisch ins Meer abfallen. Der Park schützt wunderschöne Buchenwälder, Küstenseen und das Mündungsdelta der Swine. Er ist auch stolzer Standort eines Reservats für Wisente.",
      hu: "A Wolin Nemzeti Park Lengyelország legnagyobb balti-tengeri szigetén terül el. Leglenyűgözőbb jellegzetességei a meredek, akár 95 méter magas sziklák, amelyek drámaian zuhannak a tengerbe. A park gyönyörű bükkerdőket, part menti tavakat és a Świna deltáját védi. Emellett büszkén ad otthont egy bölényrezervátumnak is.",
      ro: "Parcul Național Wolin se întinde pe cea mai mare insulă poloneză din Marea Baltică. Cele mai impresionante caracteristici ale sale sunt stâncile abrupte de până la 95 de metri, care coboară dramatic în mare. Parcul protejează păduri frumoase de fagi, lacuri de coastă și delta râului Świna. Este, de asemenea, mândrul cămin al unei rezervații de zimbri.",
      en: "Wolin National Park covers the largest Polish island in the Baltic Sea. Its most impressive features are the steep cliffs, up to 95 meters high, which drop dramatically into the sea. The park protects beautiful beech forests, coastal lakes, and the delta of the Świna River. It is also the proud home of a bison reserve."
    },
    descriptionAdvanced: {
      de: "Der Wollin-Nationalpark liegt auf der größten polnischen Insel an der Ostseeküste und fasziniert durch seine vielfältigen Landschaften. Seine steilen, majestätischen Kliffe ragen dramatisch über das unruhige Meer und bieten atemberaubende Ausblicke. Das Landesinnere wird von dichten Buchenwäldern, unzähligen kleinen Binnenseen und malerischen Moorgebieten geprägt. Neben den Seeadlern, die über der Küste kreisen, zieht das Schaugehege für Wisente, in dem die europäischen Bisons geschützt leben, viele Besucher an. Der Park vereint die wilde Schönheit der Ostsee mit der idyllischen Natur des Hinterlandes.",
      hu: "",
      ro: "",
      en: "Stepping onto Wolin Island feels like entering a realm where the Baltic Sea’s raw power meets the quiet majesty of ancient forests. As Poland’s first maritime national park, Wolin protects a breathtaking landscape of massive cliffs and diverse ecosystems. The highlight for many explorers is the ascent to Mount Gosań, where the land drops a staggering 95 meters into the crashing waves below. Beyond the dramatic coastline, the park serves as a vital refuge for the European bison and the majestic white-tailed eagle. Hikers can wander through prehistoric beech woods or marvel at the unnaturally vivid Turquoise Lake, a remnant of former mining operations now reclaimed by nature. This unique intersection of glacial history and marine influence makes Wolin a living laboratory of natural transformation. Geography K7 – Coastal geomorphology and protected areas."
    },
    factsAdvanced: {
      de: ["Das höchste Kliff auf der Insel Wollin, der Berg Gosań, erhebt sich fast 95 Meter über die Ostsee.", "Der Nationalpark wurde 1960 gegründet, um die einzigartige Küstenlandschaft zu schützen.", "Der Seeadler ist das stolze Symbol und Wappentier des Nationalparks.", "Das Wisent-Schaugehege dient dem Erhalt dieser seltenen und faszinierenden Tiere."],
      hu: [],
      ro: [],
      en: [
        "The park’s cliffs retreat inland by an average of 80 centimeters every year due to intense Baltic Sea erosion.",
        "Mount Gosań stands as the highest coastal elevation in Poland at 95 meters.",
        "The European bison sanctuary within the park was established in 1976 and occupies a 28-hectare enclosure.",
        "Wolin National Park covers roughly 10,937 hectares, protecting a significant portion of Poland's largest island.",
        "The park is home to more than 270 bird species, including the iconic white-tailed eagle which has its nesting grounds here."
      ]
    },
    facts: {
      de: ["Schützt die beeindruckende Steilküste der Insel Wollin.", "Höchste Klippe erreicht fast 100 Meter.", "Beherbergt ein Reservat für Wisente.", "Wichtiger Rastplatz für Zugvögel.", "Heimat des majestätischen Seeadlers.", "Die Insel bietet das größte Wikingerfestival Europas."],
      hu: ["Védi a Wolin-sziget lenyűgöző szikláit.", "A legmagasabb szikla majdnem eléri a 100 métert.", "Bölényrezervátumnak ad otthont.", "A vándormadarak fontos pihenőhelye.", "A fenséges rétisas otthona.", "A sziget ad otthont Európa legnagyobb viking fesztiváljának."],
      ro: ["Protejează impresionanta coastă abruptă a insulei Wolin.", "Cea mai înaltă stâncă atinge aproape 100 de metri.", "Găzduiește o rezervație de zimbri.", "Loc important de odihnă pentru păsările migratoare.", "Patria vulturului codalb maiestuos.", "Insula găzduiește cel mai mare festival viking din Europa."],
      en: ["Protects the impressive steep coast of Wolin Island.", "The highest cliff reaches nearly 100 meters.", "Houses a reserve for European bison.", "Important resting place for migratory birds.", "Home of the majestic white-tailed eagle.", "The island hosts Europe's largest Viking festival."]
    },
    image: "/geo-images/poland/wolin-np.webp"
  },
  {
    id: "pl-lublin-old-town",
    type: "historical",
    parent: "PL-LU",
    coords: [22.5697, 51.2471],
    name: { de: "Altstadt von Lublin", hu: "Lublini óváros", ro: "Orașul Vechi din Lublin", en: "Lublin Old Town" },
    description: {
      de: "Die Altstadt von Lublin verbindet mittelalterliche Straßenzüge mit einer starken Mischung aus gotischer, Renaissance- und Barockarchitektur. Der Stadtteil liegt auf einem Hügel über dem alten Stadtkern und ist für seine Tore, Innenhöfe und engen Gassen bekannt. Er war über Jahrhunderte ein Ort des Handels und des kulturellen Austauschs. Heute zählt er zu den atmosphärischsten historischen Vierteln Ostpolens.",
      hu: "A lublini óváros középkori utcahálózatot, gótikus, reneszánsz és barokk építészetet ötvöz. A városrész egy dombon fekszik a régi városmag fölött, és kapuiról, belső udvarairól és szűk utcáiról ismert. Évszázadokon át a kereskedelem és a kulturális találkozások helye volt. Ma Kelet-Lengyelország egyik leghangulatosabb történelmi negyedének számít.",
      ro: "Orașul Vechi din Lublin combină străzi medievale cu un amestec puternic de arhitectură gotică, renascentistă și barocă. Cartierul se află pe un deal deasupra centrului vechi și este cunoscut pentru porțile, curțile interioare și aleile înguste. Timp de secole a fost un loc al comerțului și al schimbului cultural. Astăzi este unul dintre cele mai atmosferice cartiere istorice din estul Poloniei.",
      en: "Lublin Old Town combines medieval street patterns with a strong mix of Gothic, Renaissance, and Baroque architecture. The district sits on a hill above the old city core and is known for its gates, courtyards, and narrow lanes. For centuries it was a place of trade and cultural exchange. Today it is one of the most atmospheric historic quarters in eastern Poland."
    },
    descriptionAdvanced: {
      de: "Die Altstadt von Lublin gehört zu den stimmungsvollsten und historisch besterhaltenen mittelalterlichen Stadtzentren in ganz Polen. Ein Spaziergang durch die verwinkelten, kopfsteingepflasterten Gassen fühlt sich an wie eine Reise in eine längst vergangene Zeit. Die alten, oft farbenfrohen und reich mit Renaissance-Details verzierten Bürgerhäuser vermitteln einen unvergleichlichen historischen Charme. Zwei beeindruckende Tore, das Krakauer und das Grodzka-Tor, begrenzen den historischen Stadtkern und gewähren Zugang zu diesem architektonischen Schatz. Unterhalb der Gassen verbirgt sich eine unterirdische Touristenroute, die tiefe Einblicke in die Geheimnisse und die Handelsgeschichte der Stadt bietet.",
      hu: "",
      ro: "",
      en: "Stepping into Lublin’s Old Town feels like traversing a living chronicle of Central Europe. Perched on a limestone hill, this historic labyrinth preserves a medieval street layout that has survived centuries of upheaval. As you wander through the Krakow Gate, the aroma of traditional cebularz bread wafts from local bakeries, blending with the sight of 'Lublin Renaissance' facades that boast intricate attic walls and floral motifs. Unlike the polished squares of larger cities, Lublin’s soul lies in its quiet courtyards and the shadows of the Trinity Tower. This district served as the stage for the 1569 Union of Lublin, a pivotal moment in European diplomacy. Exploring these narrow lanes offers more than a walk; it is a deep dive into the cultural fusion of East and West. History K8 – Polish-Lithuanian Commonwealth and urban evolution."
    },
    factsAdvanced: {
      de: ["Die Lubliner Altstadt blieb während des Zweiten Weltkriegs fast vollständig von der Zerstörung verschont.", "Rund 70 % der Gebäude in der Altstadt sind originale, historische Bauwerke.", "Das Grodzka-Tor trennte früher die christliche von der jüdischen Stadt, was Lublins reiches Erbe unterstreicht.", "Die Lubliner Untergrundroute verläuft durch alte Weinkeller und Kaufgewölbe."],
      hu: [],
      ro: [],
      en: [
        "The Krakow Gate, the city's iconic symbol, dates back to the 14th century and stands as a primary remnant of the original defensive walls.",
        "Lublin’s Old Town covers an area of approximately 7 hectares, featuring more than 100 historic townhouses and monuments.",
        "The Trinity Tower, the highest viewpoint in the district, reaches a height of 64 meters and houses a museum of sacred art.",
        "Underneath the historic buildings lies a 280-meter-long underground tourist route consisting of 14 interconnected cellars from the 16th and 17th centuries.",
        "The Union of Lublin, signed in this city in 1569, created the Polish-Lithuanian Commonwealth, one of the largest and most populous states in 16th-century Europe."
      ]
    },
    facts: {
      de: ["Historisches Herz von Lublin.", "Bekannt für die Krakauer Pforte und andere Stadttore.", "Vereint gotische, Renaissance- und Barockelemente.", "War ein wichtiger Handels- und Marktbereich.", "Liegt oberhalb des alten Stadtkerns auf einem Hügel.", "Ein zentraler Ort für Feste und Stadtleben."],
      hu: ["Lublin történelmi szíve.", "Ismert a Krakowska kapuról és más városkapukról.", "Gótikus, reneszánsz és barokk elemeket ötvöz.", "Fontos kereskedelmi és piaci terület volt.", "A régi városmag fölött, dombon található.", "A városi ünnepek és események központja."],
      ro: ["Inima istorică a Lublinului.", "Cunoscut pentru Poarta Cracoviei și alte porți ale orașului.", "Îmbină elemente gotice, renascentiste și baroce.", "A fost o zonă importantă de comerț și piață.", "Se află pe un deal deasupra vechiului centru.", "Un loc central pentru festivaluri și viața orașului."],
      en: ["The historic heart of Lublin.", "Known for the Kraków Gate and other city gates.", "Blends Gothic, Renaissance, and Baroque elements.", "Was an important trade and market area.", "Sits on a hill above the old city core.", "A central place for festivals and city life."]
    },
    image: "/geo-images/poland/lublin-old-town.webp"
  },
  {
    id: "pl-zamosc-rynek",
    type: "historical",
    parent: "PL-LU",
    coords: [23.2528, 50.7230],
    name: { de: "Marktplatz von Zamość", hu: "Zamość főtere", ro: "Piața din Zamość", en: "Zamość Market Square" },
    description: {
      de: "Der Marktplatz von Zamość ist der repräsentative Mittelpunkt einer geplanten Renaissance-Stadt. Farbig gefasste Bürgerhäuser, Arkaden und das markante Rathaus prägen das Bild des Platzes. Die Anlage entstand als Teil einer idealen Stadtidee der frühen Neuzeit. Heute ist der Platz eines der bekanntesten Postkartenmotive Südostpolens.",
      hu: "A zamośći főtér egy tervezett reneszánsz város reprezentatív központja. Színes polgárházak, árkádok és a jellegzetes városháza határozzák meg a tér képét. Az egész város az újkor elejének ideális városeszményét követte. Ma ez Délkelet-Lengyelország egyik legismertebb képeslapképe.",
      ro: "Piața din Zamość este centrul reprezentativ al unui oraș renascentist planificat. Casele colorate ale negustorilor, arcadele și primăria distinctivă definesc imaginea pieței. Ansamblul a apărut ca parte a ideii de oraș ideal din epoca modernă timpurie. Astăzi este una dintre cele mai cunoscute imagini emblematice din sud-estul Poloniei.",
      en: "The Zamość Market Square is the representative center of a planned Renaissance city. Colorful townhouses, arcades, and the distinctive town hall define the square's character. The whole urban layout followed an early modern ideal-city concept. Today it is one of the best-known postcard views in southeastern Poland."
    },
    descriptionAdvanced: {
      de: "Der Marktplatz von Zamość ist das strahlende Herz der sogenannten Idealstadt und besticht durch seine perfekte Symmetrie. Die quadratische Anlage wird an allen Seiten von prächtigen Arkadengängen gesäumt, die zum Flanieren einladen. Herausragend ist das kunstvoll gestaltete Rathaus mit seiner elegant geschwungenen Freitreppe und dem über 50 Meter hohen Uhrenturm. Die bunt verzierten armenischen Bürgerhäuser zeugen von dem Reichtum und der kulturellen Vielfalt der einstigen Bewohner. Dieser Renaissance-Platz gilt als einer der schönsten städtebaulichen Komplexe in ganz Europa.",
      hu: "",
      ro: "",
      en: "Stepping into the Great Market Square of Zamość feels like walking through a living blueprint of the Renaissance ideal. Known as the 'Pearl of the Renaissance,' this perfectly symmetrical plaza was designed in the late 16th century by Italian architect Bernardo Morando for Chancellor Jan Zamoyski. As you wander past the vibrant, arcaded townhouses—once home to wealthy Armenian, Greek, and Sephardic merchants—the 52-meter-high Town Hall tower commands your attention. Its sweeping, fan-shaped staircase is a masterpiece of Mannerist architecture, added later to welcome royal guests. Unlike haphazardly grown medieval towns, Zamość was built from scratch as a fortress-city, blending military defense with humanist aesthetics. It remains one of the finest examples of a planned urban layout in Europe, proving that beauty and utility can coexist. History K8 — Early Modern urban planning and the Renaissance influence in Central Europe."
    },
    factsAdvanced: {
      de: ["Der Marktplatz hat exakt quadratische Maße von 100 mal 100 Metern.", "Die armenischen Häuser auf der rechten Seite des Rathauses sind die am reichsten verzierten des Platzes.", "Zamość entging den Verwüstungen vieler Kriege, weshalb der Markt seine originale Renaissance-Form behielt.", "Im Sommer wird der Marktplatz oft für historische Inszenierungen und Theateraufführungen genutzt."],
      hu: [],
      ro: [],
      en: [
        "The square is a perfect geometric square measuring exactly 100 by 100 meters, mirroring the 'ideal city' dimensions of the 16th century.",
        "The Great Town Hall features a 52-meter-high tower and a grand fan-shaped staircase that was added to the facade in the mid-18th century.",
        "Zamość was inscribed on the UNESCO World Heritage List in 1992 as an exceptionally well-preserved example of a Renaissance planned town.",
        "The square is lined with arcaded houses, including five distinctive Armenian townhouses famous for their ornate attics and bright colors.",
        "The entire urban layout was originally enclosed within a massive 7-pointed star fortification system that survived the Swedish siege of 1656."
      ]
    },
    facts: {
      de: ["Teil der UNESCO-geschützten Altstadt von Zamość.", "Entstand als geplante Renaissance-Stadt.", "Das Rathaus mit der breiten Freitreppe ist ein Wahrzeichen.", "Umgeben von farbigen Bürgerhäusern mit Arkaden.", "Diente als Handels- und Verwaltungszentrum.", "Zählt zu den bestbekannten Plätzen in der Region."],
      hu: ["A zamośći UNESCO-védett óváros része.", "Tervezett reneszánsz városként jött létre.", "A széles lépcsős városháza jelképes épület.", "Árkádos, színes polgárházak veszik körül.", "Kereskedelmi és igazgatási központként működött.", "A régió egyik legismertebb tere."],
      ro: ["Face parte din orașul vechi protejat UNESCO.", "A fost conceput ca un oraș renascentist planificat.", "Primăria cu scara mare este un reper al locului.", "Este înconjurată de case colorate cu arcade.", "A servit drept centru comercial și administrativ.", "Este una dintre cele mai cunoscute piețe din regiune."],
      en: ["Part of Zamość's UNESCO-protected old town.", "Created as a planned Renaissance city.", "The town hall with its wide staircase is a landmark.", "Surrounded by colorful arcaded townhouses.", "Served as a trade and administrative center.", "It is one of the region's most recognizable squares."]
    },
    image: "/geo-images/poland/zamosc-rynek.webp"
  },
  {
    id: "pl-pelplin-cathedral",
    type: "historical",
    parent: "PL-PM",
    coords: [18.6950, 53.9280],
    name: { de: "Dom zu Pelplin", hu: "Pelplini székesegyház", ro: "Catedrala din Pelplin", en: "Pelplin Cathedral" },
    description: {
      de: "Der Dom zu Pelplin ist ein monumentales gotisches Kirchenbauwerk und das spirituelle Zentrum der Stadt. Seine hohe Backsteinarchitektur macht ihn zu einem der eindrucksvollsten Sakralbauten Nordpolens. Das Innere verbindet historische Stille mit reich ausgestatteten Altären und Kunstwerken. Zusammen mit dem ehemaligen Klosterensemble prägt er das Stadtbild von Pelplin bis heute.",
      hu: "A pelplini székesegyház monumentális gótikus templomépület és a város spirituális központja. Magas téglaépítészete Észak-Lengyelország egyik legimpozánsabb szakrális épületévé teszi. Belseje történelmi nyugalmat, gazdag oltárokat és műalkotásokat egyesít. Az egykori kolostoregyüttessel együtt ma is Pelplin városképének meghatározó eleme.",
      ro: "Catedrala din Pelplin este un edificiu gotic monumental și centrul spiritual al orașului. Arhitectura sa înaltă din cărămidă o face una dintre cele mai impresionante construcții sacre din nordul Poloniei. Interiorul combină liniștea istorică cu altare bogate și opere de artă. Împreună cu fostul ansamblu monastic, definește și astăzi peisajul urban din Pelplin.",
      en: "Pelplin Cathedral is a monumental Gothic church and the spiritual center of the town. Its tall brick architecture makes it one of the most impressive sacred buildings in northern Poland. The interior combines a historic atmosphere with richly decorated altars and artworks. Together with the former monastery complex, it still defines the townscape of Pelplin today."
    },
    descriptionAdvanced: {
      de: "Der Dom zu Pelplin, einst eine bedeutende Zisterzienserabtei, ist ein Meisterwerk der nordeuropäischen Backsteingotik. Die gigantische Basilika beeindruckt durch ihre gewaltigen Ausmaße, die atemberaubenden Sterngewölbe und die wunderschön gestalteten Fenster. Der reich verzierte, prunkvolle Hauptaltar aus der Renaissancezeit ist der größte Holzaltar in Polen und zieht jeden Besucher in seinen Bann. Das angrenzende Diözesanmuseum beherbergt unzählige Schätze kirchlicher Kunst, darunter wertvolle alte Handschriften. Ein absolutes Highlight der Sammlung ist das extrem seltene und wertvolle Original einer Gutenberg-Bibel.",
      hu: "",
      ro: "",
      en: "Stepping into the shadows of Pelplin Cathedral feels like traversing a portal into the heart of Pomeranian Cistercian history. This brick Gothic giant, rising from the rolling landscapes of northern Poland, served as a spiritual and intellectual powerhouse for centuries. Its immense nave, bathed in the soft light filtering through high pointed windows, houses one of Europe’s most magnificent Baroque high altars, standing over 25 meters tall. Beyond its architectural grandeur, the cathedral library guards a legendary treasure: a genuine Gutenberg Bible, one of the few surviving copies in the world. Exploring the interconnected monastery cloisters reveals a peaceful world of late-Gothic vaulting and silent contemplation that has survived the tides of time. For modern-day explorers, Pelplin remains a testament to the intersection of faith, art, and medieval engineering. History K8 — religious architecture and the Cistercian order."
    },
    factsAdvanced: {
      de: ["Der Hauptaltar der Kathedrale ist unglaubliche 25 Meter hoch.", "Die in Pelplin aufbewahrte Gutenberg-Bibel ist eines von nur noch knapp 50 erhaltenen Exemplaren weltweit.", "Die Abtei wurde im 13. Jahrhundert von Zisterziensermönchen gegründet.", "Das beeindruckende Sterngewölbe des Doms wurde erst im 16. Jahrhundert vollendet."],
      hu: [],
      ro: [],
      en: [
        "The cathedral is one of the largest brick churches in Poland, measuring approximately 80 meters in length and 26 meters in width.",
        "The magnificent high altar, created between 1623 and 1640, reaches a height of 25.5 meters, making it one of the tallest Baroque altars in northern Europe.",
        "The cathedral library houses the Pelplin Gutenberg Bible, printed around 1455, which is one of only 49 surviving copies globally.",
        "Construction of the current Gothic structure began around 1289 and continued for nearly 150 years until its completion in the mid-15th century.",
        "The interior features 23 side altars, showcasing a transition from late Gothic to elaborate Baroque and Rococo artistic styles."
      ]
    },
    facts: {
      de: ["Eines der bedeutendsten gotischen Kirchengebäude in Polen.", "War Teil eines großen Zisterzienserklosters.", "Bekannt für seine hoch aufragende Backsteinarchitektur.", "Bewahrt wertvolle Altäre und sakrale Kunst.", "Prägt das historische Zentrum von Pelplin.", "Ein wichtiges Denkmal der Kirchen- und Regionalgeschichte."],
      hu: ["Lengyelország egyik legjelentősebb gótikus temploma.", "Egy nagy ciszterci kolostor része volt.", "Magas, téglaépítészetéről ismert.", "Értékes oltárokat és egyházi művészetet őriz.", "Meghatározza Pelplin történelmi központját.", "Fontos egyházi és regionális történelmi emlék."],
      ro: ["Una dintre cele mai importante biserici gotice din Polonia.", "A făcut parte dintr-o mare mănăstire cisterciană.", "Cunoscută pentru arhitectura sa înaltă din cărămidă.", "Păstrează altare valoroase și artă sacră.", "Definește centrul istoric al orașului Pelplin.", "Un monument important al istoriei ecleziastice și regionale."],
      en: ["One of the most important Gothic churches in Poland.", "It was part of a large Cistercian monastery complex.", "Known for its tall brick architecture.", "Preserves valuable altars and sacred art.", "Shapes the historic center of Pelplin.", "An important monument of church and regional history."]
    },
    image: "/geo-images/poland/pelplin-cathedral.webp"
  },
  {
    id: "pl-pszczyna-palace",
    type: "historical",
    parent: "PL-SL",
    coords: [18.9498, 50.0206],
    name: { de: "Palast von Pszczyna", hu: "Pszczyna-palota", ro: "Palatul din Pszczyna", en: "Pszczyna Palace" },
    description: {
      de: "Der Palast von Pszczyna ist eine der elegantesten Residenzen in Südpolen. Er bewahrt einen großbürgerlichen, fast vollständig erhaltenen Interieurschatz aus dem 19. und frühen 20. Jahrhundert. Der Palast liegt in einem weitläufigen Park und vermittelt das Bild einer aristokratischen Welt in ruhiger Form. Seine Räume, Salons und Sammlungen machen ihn zu einem der feinsten historischen Besuche im Schlesischen Raum.",
      hu: "A Pszczyna-palota Dél-Lengyelország egyik legelegánsabb rezidenciája. A 19. és 20. század elejéről szinte teljesen megőrzött, főúri enteriőröket őriz. A palota egy nagy parkban áll, és a nyugodt arisztokratikus világ képét nyújtja. Szobái, szalonjai és gyűjteményei a sziléziai térség egyik legfinomabb történelmi látnivalójává teszik.",
      ro: "Palatul din Pszczyna este una dintre cele mai elegante reședințe din sudul Poloniei. Păstrează un interior nobil, aproape complet conservat, din secolul al XIX-lea și începutul secolului XX. Palatul este situat într-un parc întins și oferă imaginea unei lumi aristocratice liniștite. Sălile, saloanele și colecțiile sale îl fac una dintre cele mai rafinate vizite istorice din Silezia.",
      en: "The Pszczyna Palace is one of the most elegant residences in southern Poland. It preserves a nearly fully intact aristocratic interior from the 19th and early 20th centuries. The palace sits within a large park and conveys the image of a calm aristocratic world. Its rooms, salons, and collections make it one of the finest historic visits in the Silesian region."
    },
    descriptionAdvanced: {
      de: "Der Palast von Pszczyna, im tiefen Süden Polens gelegen, ist eine der wenigen Residenzen, die den Zweiten Weltkrieg fast unbeschadet überstanden haben. Er wird oft als das 'polnische Versailles' bezeichnet und beeindruckt durch sein prachtvolles neobarockes Erscheinungsbild. Die Innenräume strahlen mit original erhaltenem Mobiliar und kunstvollen Details den unverfälschten Luxus des 19. und frühen 20. Jahrhunderts aus. Umgeben ist der Palast von einem weitläufigen englischen Landschaftspark, der zu romantischen Spaziergängen einlädt. Der Palast war einst der Sitz der mächtigen Fürsten von Pleß und spielte auch während des Ersten Weltkriegs eine bedeutende politische Rolle.",
      hu: "",
      ro: "",
      en: "Stepping into Pszczyna Palace feels like navigating a temporal rift back to the zenith of the Hochberg dynasty. Unlike many European residences scarred by conflict, this 'Polish Versailles' retains an astonishing level of authenticity, with nearly 80 percent of its original 19th-century furnishings still in situ. As you wander through the Mirror Room or the Emperor’s Apartments, the silence of the massive English-style park outside seems to seep through the walls, preserving the atmosphere of a bygone aristocratic era. The neo-Baroque facade, inspired by French architecture, masks a complex history of medieval roots and princely ambitions. From the intricate wood carvings to the sprawling hunting trophies, every corner whispers tales of diplomatic intrigue and high-society galas. This site offers an unparalleled look at Central European noble life. History K8 — aristocratic residences and 19th-century society."
    },
    factsAdvanced: {
      de: ["Kaiser Wilhelm II. verlegte im Ersten Weltkrieg sein militärisches Hauptquartier in das Schloss Pszczyna.", "Etwa 80 % der ursprünglichen Innenausstattung des Schlosses sind bis heute erhalten geblieben.", "Im riesigen Schlosspark befindet sich heute auch ein Gehege für europäische Wisente.", "Das berühmteste Familienmitglied der Fürsten von Pleß war die Gesellschaftsdame Daisy von Pless."],
      hu: [],
      ro: [],
      en: [
        "The palace museum houses over 80% of its original interior furnishings, making it one of the few residences in Central Europe to survive World War II largely intact.",
        "The estate is surrounded by an expansive English-style landscape park covering approximately 156 hectares.",
        "The current French Neo-Baroque architectural form dates back to the major reconstruction led by architect Hippolyte Destailleur between 1870 and 1876.",
        "The famous Mirror Room features two massive mirrors, each with a surface area exceeding 20 square meters, designed to amplify the ballroom's grandeur.",
        "During World War I, the palace served as the headquarters for the German General Staff, housing Emperor Wilhelm II between 1914 and 1917."
      ]
    },
    facts: {
      de: ["Bekannt für seine außergewöhnlich gut erhaltenen Innenräume.", "Ehemalige Residenz einer Adelsfamilie.", "Liegt in einem großen historischen Park.", "Gilt als einer der schönsten Paläste in Polen.", "Spiegelt den Lebensstil der Oberschicht des 19. Jahrhunderts wider.", "Ein wichtiger Kulturort in Oberschlesien."],
      hu: ["Kivételesen jól megőrzött enteriőrjeiről ismert.", "Egy arisztokrata család egykori rezidenciája volt.", "Nagy történelmi parkban található.", "Lengyelország egyik legszebb palotájának tartják.", "A 19. századi felsőbb osztály életmódját mutatja be.", "Fontos kulturális helyszín Felső-Sziléziában."],
      ro: ["Cunoscut pentru interioarele sale excepțional de bine păstrate.", "A fost fosta reședință a unei familii nobiliare.", "Se află într-un parc istoric mare.", "Este considerat unul dintre cele mai frumoase palate din Polonia.", "Reflectă stilul de viață al elitei secolului al XIX-lea.", "Un loc cultural important în Silezia Superioară."],
      en: ["Known for its exceptionally well-preserved interiors.", "It was once the residence of an aristocratic family.", "Located in a large historic park.", "Considered one of the most beautiful palaces in Poland.", "Reflects the lifestyle of 19th-century high society.", "An important cultural site in Upper Silesia."]
    },
    image: "/geo-images/poland/pszczyna-palace.webp"
  },
  {
    id: "pl-bieszczady",
    type: "mountain",
    parent: "PL-PK",
    coords: [22.7300, 49.1700],
    name: { de: "Bieszczady", hu: "Bieszczady", ro: "Bieszczady", en: "Bieszczady" },
    description: {
      de: "Die Bieszczady sind eine abgelegene Gebirgsregion im äußersten Südosten Polens und stehen für weite Wälder, stille Täler und wenig besuchte Gipfel. Die Landschaft wirkt wild und offen zugleich, mit Bergrücken, Hochebenen und langen Wanderwegen. Wer Ruhe und Natur sucht, findet hier einen der letzten wirklich dünn besiedelten Winkel des Landes. Die Region ist ein Gegenpol zu den dichter bebauten und touristisch stärker erschlossenen Teilen Polens.",
      hu: "A Bieszczady Lengyelország távoli délkeleti hegyvidéke, amely tágas erdőket, csendes völgyeket és kevéssé látogatott csúcsokat jelent. A táj egyszerre vad és nyitott, gerincekkel, fennsíkokkal és hosszú túraútvonalakkal. Aki nyugalmat és természetet keres, itt találja az ország egyik utolsó igazán ritkán lakott vidékeit. A régió ellentétet képez Lengyelország sűrűbben beépített, turistásabb részeivel.",
      ro: "Bieszczady este o regiune montană îndepărtată din extremitatea sud-estică a Poloniei, cunoscută pentru păduri vaste, văi liniștite și vârfuri puțin vizitate. Peisajul pare în același timp sălbatic și deschis, cu culmi, platouri și trasee lungi de drumeție. Cei care caută liniște și natură găsesc aici unul dintre ultimele colțuri cu adevărat puțin populate ale țării. Regiunea este un contrapunct la zonele mai dense și mai turistice ale Poloniei.",
      en: "The Bieszczady are a remote mountain region in the far southeast of Poland, defined by wide forests, quiet valleys, and lightly visited peaks. The landscape feels both wild and open, with ridges, plateaus, and long hiking trails. If you want peace and nature, this is one of the country's last truly sparsely populated corners. The region stands in contrast to Poland's denser and more heavily touristed areas."
    },
    descriptionAdvanced: {
      de: "Die Bieszczady sind das wildeste und am dünnsten besiedelte Gebirge in Polen, gelegen im äußersten Südosten an der Grenze zur Ukraine. Charakteristisch für die Landschaft sind die weiten, baumlosen Bergkämme, die 'Połoniny', die spektakuläre Ausblicke in alle Richtungen gewähren. Jahrhundertalte Buchenwälder kleiden die steilen Täler und bieten einen Lebensraum für Raubtiere wie Bären, Wölfe und Luchse. Historische, hölzerne orthodoxe Kirchen, sogenannte Zerkwas, verstecken sich in den verlassenen Tälern und zeugen von der tragischen Geschichte der Region. Wer Einsamkeit, unberührte Natur und abenteuerliche Wanderwege sucht, wird diesen Ort lieben.",
      hu: "",
      ro: "",
      en: "Stepping into the Bieszczady Mountains feels like crossing a threshold into Poland's untamed frontier. Located in the far southeastern corner where the borders of Poland, Slovakia, and Ukraine converge, this region is a sanctuary of solitude. Unlike the jagged peaks of the High Tatras, Bieszczady is famous for its 'poloninas'—vast, wind-swept alpine meadows that crown the ridges with golden grass. As you hike toward Tarnica, the highest summit, the silence of the deep beech forests is broken only by the rustle of the wind or the distant call of a wolf. It is a place of deep historical scars and incredible natural resilience, where abandoned villages have been reclaimed by the wild. For the modern traveler, it offers a rare glimpse into a landscape that remains largely untouched by urban sprawl. Geography K7 – Mountain ecosystems and biodiversity."
    },
    factsAdvanced: {
      de: ["Die Bieszczady gehören zum länderübergreifenden UNESCO-Biosphärenreservat Ostkarpaten.", "Die Bergwiesen der Połoniny nehmen im Herbst besonders malerische goldene und rote Farbtöne an.", "Die Region war früher Heimat der Bojken, einer ostslawischen ethnischen Gruppe, die umgesiedelt wurde.", "Die Schmalspurbahn der Bieszczady, einst für die Holzwirtschaft gebaut, ist heute eine Touristenattraktion."],
      hu: [],
      ro: [],
      en: [
        "Tarnica, the highest peak of the Polish Bieszczady, reaches an elevation of 1,346 meters (4,416 feet) above sea level.",
        "The Bieszczady National Park protects approximately 292 square kilometers of land, making it the third-largest national park in Poland.",
        "The region is home to Lake Solina, Poland's largest man-made lake by volume, which holds roughly 472 million cubic meters of water.",
        "The region supports a population of approximately 200 European brown bears, representing about 80% of the entire Polish bear population.",
        "The Starry-Sky Park Bieszczady covers 113,846 hectares, making it one of the largest and darkest sky preserves in Central Europe."
      ]
    },
    facts: {
      de: ["Eine der stillsten Bergregionen Polens.", "Bekannt für lange Wanderwege und weite Aussichten.", "Heimat großer Wald- und Wildnisgebiete.", "Liegt an der südöstlichen Grenze des Landes.", "Beliebt bei Naturfreunden und Sternenguckern.", "Wird oft als Gegenbild zum Massentourismus beschrieben."],
      hu: ["Lengyelország egyik legcsendesebb hegyvidéke.", "Hosszú túraútvonalairól és tágas kilátásairól ismert.", "Nagy erdős és vadon jellegű területek otthona.", "Az ország délkeleti peremén található.", "Népszerű a természetkedvelők és csillagmegfigyelők körében.", "Gyakran a tömegturizmus ellentéteként írják le."],
      ro: ["Una dintre cele mai liniștite regiuni montane ale Poloniei.", "Cunoscută pentru traseele lungi și priveliștile largi.", "Găzduiește vaste zone de pădure și sălbăticie.", "Situată la marginea sud-estică a țării.", "Populară printre iubitorii de natură și observatorii cerului.", "Este adesea descrisă ca opusul turismului de masă."],
      en: ["One of the quietest mountain regions in Poland.", "Known for long hiking trails and wide views.", "Home to large forest and wilderness areas.", "Located on the country's southeastern edge.", "Popular with nature lovers and stargazers.", "Often described as the opposite of mass tourism."]
    },
    image: "/geo-images/poland/bieszczady.webp"
  },
  {
    id: "pl-gdansk-beach",
    type: "landmark",
    parent: "PL-PM",
    coords: [18.6230, 54.4140],
    name: { de: "Strand von Danzig", hu: "gdański strand", ro: "Plaja din Gdańsk", en: "Gdańsk Beach" },
    description: {
      de: "Der Strand von Gdańsk verbindet eine große Ostseeküste mit dem urbanen Charakter einer Hafenstadt. Breite Sandflächen, Dünen und Promenaden machen ihn zu einem beliebten Ort für Sommer, Spaziergänge und Meerblick. Der Strand liegt nah genug an der Stadt, um schnell erreichbar zu sein, wirkt aber trotzdem offen und ruhig. Er ist ein typisches Beispiel für die Verbindung von Küste und Stadtleben in der Danziger Bucht.",
      hu: "A gdański strand a Balti-tenger széles partszakaszát a kikötővárosi, városi karakterrel kapcsolja össze. Széles homokos területek, dűnék és sétányok teszik népszerűvé a nyári pihenés, a séta és a tengerparti látvány miatt. A strand elég közel van a városhoz ahhoz, hogy gyorsan elérhető legyen, mégis nyitott és nyugodt hatást kelt. Jó példája a tengerpart és a városi élet összefonódásának a Gdański-öbölben.",
      ro: "Plaja din Gdańsk combină coasta largă a Mării Baltice cu caracterul urban al unui oraș-port. Nisipul întins, dunele și promenada o fac un loc popular pentru vară, plimbări și priveliști spre mare. Plaja se află suficient de aproape de oraș pentru a fi ușor accesibilă, dar rămâne deschisă și liniștită. Este un exemplu tipic al întâlnirii dintre litoral și viața urbană în Golful Gdańsk.",
      en: "Gdańsk Beach combines a broad Baltic coastline with the urban character of a port city. Wide sandy stretches, dunes, and promenades make it a popular place for summer, walks, and sea views. The beach is close enough to the city to be easy to reach, yet it still feels open and calm. It is a typical example of the blend between coastline and city life in Gdańsk Bay."
    },
    descriptionAdvanced: {
      de: "Der Strand von Danzig bietet eine perfekte Kombination aus erholsamem Badeurlaub und städtischem Flair. Die breiten, feinsandigen Strände erstrecken sich kilometerweit entlang der Ostseeküste und ziehen im Sommer Tausende von Sonnenanbetern an. Besonders beliebt sind die Strandabschnitte in Stogi und Brzeźno, die mit exzellenter Infrastruktur und Rettungsschwimmern für einen unbeschwerten Aufenthalt sorgen. Ein Spaziergang über die historische Seebrücke im nahegelegenen Seebad Sopot ergänzt das maritime Erlebnis perfekt. Die frische, jodhaltige Meeresluft und das Rauschen der Wellen laden zum Entspannen ein.",
      hu: "",
      ro: "",
      en: "Setting foot on the golden sands of Gdańsk Beach feels like stepping into a living intersection of maritime history and modern coastal leisure. As an explorer wandering the broad stretches of the Baltic coastline, one is immediately struck by the fine, pale grains of sand that stretch towards the horizon, framed by rolling dunes and salt-resistant grasses. Unlike isolated wild shores, these beaches hum with the energy of the nearby port city, where the rhythmic sound of crashing waves occasionally carries the distant clang of harbor industry. Walking along the wooden pier at Brzeźno, the air smells of pine forests and sea salt, offering a sensory bridge between the city’s urban core and the open sea. This delicate balance of human settlement and coastal ecosystems provides a perfect case study for Geography K7 — coastal processes and urban planning."
    },
    factsAdvanced: {
      de: ["Entlang der Strände von Danzig kann man oft Bernsteine finden, das 'Gold der Ostsee'.", "Ein ausgedehntes Netz an Radwegen führt oft direkt hinter den Dünen entlang der Küste.", "Das kühle, erfrischende Wasser der Danziger Bucht bietet im Hochsommer eine willkommene Abkühlung.", "In der Umgebung gibt es zahlreiche Kureinrichtungen, die gesundheitsfördernde Meeresluft nutzen."],
      hu: [],
      ro: [],
      en: [
        "Gdańsk boasts a total coastline length of 23 kilometers, featuring several distinct beach areas including Stogi, Brzeźno, and Jelitkowo.",
        "The wooden pier at Brzeźno extends 136 meters into the Baltic Sea, serving as a primary landmark for sea-watchers since its reconstruction.",
        "The beach at Stogi is recognized as one of the widest in Poland, with sandy stretches reaching up to 100 meters in breadth.",
        "Average water temperatures in the Gulf of Gdańsk during the peak of summer typically fluctuate between 18 and 21 degrees Celsius.",
        "A dedicated seaside cycling path runs parallel to the dunes for over 20 kilometers, connecting the cities of Gdańsk, Sopot, and Gdynia."
      ]
    },
    facts: {
      de: ["Beliebte Strandzone an der Ostsee.", "Gut mit dem Stadtzentrum verbunden.", "Bietet breite Sandflächen und Promenaden.", "Ein typischer Sommerspot für Einheimische und Besucher.", "Teil des Küstenraums der Danziger Bucht.", "Verbindet Stadtleben mit Meeresatmosphäre."],
      hu: ["Népszerű balti-tengeri strandzóna.", "Jól kapcsolódik a városközponthoz.", "Széles homokos partszakaszokat és sétányokat kínál.", "Helyiek és látogatók kedvelt nyári helye.", "A Gdański-öböl partvidékének része.", "A városi életet tengerparti hangulattal ötvözi."],
      ro: ["Zonă de plajă populară la Marea Baltică.", "Bine conectată cu centrul orașului.", "Oferă plaje largi de nisip și promenade.", "Un loc de vară preferat de localnici și vizitatori.", "Parte din zona de coastă a Golfului Gdańsk.", "Îmbină viața urbană cu atmosfera mării."],
      en: ["A popular Baltic Sea beach zone.", "Well connected to the city center.", "Offers wide sandy stretches and promenades.", "A favorite summer spot for locals and visitors.", "Part of the Gdańsk Bay coastline.", "Blends city life with a seaside atmosphere."]
    },
    image: "/geo-images/poland/gdansk-beach.webp"
  },
  {
    id: "pl-masuria-lakes-area",
    type: "lake",
    parent: "PL-WN",
    coords: [21.7500, 53.8500],
    name: { de: "Masurische Seenplatte", hu: "Mazúriai-tóvidék", ro: "Zona lacurilor mazuriene", en: "Masuria Lakes Area" },
    description: {
      de: "Die Masurische Seenplatte ist eine weitläufige Wasser- und Waldlandschaft im Nordosten Polens. Sie ist geprägt von miteinander verbundenen Seen, Kanälen und stillen Uferzonen. Die Region ist ein Paradies für Segler, Kajakfahrer und Menschen, die Natururlaub suchen. Ihr Charakter wird durch offene Wasserflächen und ausgedehnte grüne Landschaften bestimmt.",
      hu: "A Mazúriai-tóvidék Északkelet-Lengyelország kiterjedt vízi és erdős tája. Összekapcsolódó tavak, csatornák és csendes partvidékek jellemzik. A régió a vitorlázók, kajakosok és a természetközeli pihenést keresők paradicsoma. Jellege a nyílt vízfelületek és a nagy zöld tájak együttese.",
      ro: "Zona lacurilor mazuriene este un peisaj întins de apă și pădure în nord-estul Poloniei. Este definită de lacuri conectate între ele, canale și zone liniștite de mal. Regiunea este un paradis pentru navigatori, caiaciști și cei care caută o vacanță în natură. Caracterul ei este dat de întinderi de apă deschisă și peisaje verzi ample.",
      en: "The Masuria Lakes Area is a vast water-and-forest landscape in northeastern Poland. It is defined by connected lakes, canals, and quiet shoreline zones. The region is a paradise for sailors, kayakers, and anyone looking for a nature-focused getaway. Its character comes from open water surfaces combined with broad green landscapes."
    },
    descriptionAdvanced: {
      de: "Die Masurische Seenplatte ist ein gewaltiges Naturparadies, das tausende Seen, malerische Flüsse und dichte Wälder miteinander verbindet. Es ist ein Paradies für Wassersportler, Segler und Liebhaber intakter, unberührter Natur. Die historischen Ruinen der Wolfsschanze, einst das Führerhauptquartier im Zweiten Weltkrieg, verleihen der Region neben ihrer landschaftlichen Schönheit auch historische Tiefe. Die kleinen, verschlafenen Hafenstädte wie Mikołajki oder Giżycko erwachen im Sommer zum Leben und versprühen maritimes Flair. Die weit verzweigten Wasserstraßen laden zu endlosen Bootstouren in einer der ruhigsten Ecken Europas ein.",
      hu: "",
      ro: "",
      en: "Stepping into the Masurian Lake District feels like entering a labyrinth designed by nature itself, where the boundary between land and water dissolves into a shimmering blue-green tapestry. Formed by the retreating glaciers of the last Ice Age, this \"Land of a Thousand Lakes\" actually encompasses over 2,000 bodies of water interconnected by an intricate network of rivers and historic canals. As you navigate the calm surfaces of Śniardwy or Mamry, you are surrounded by the ancient Puszcza Piska forest, home to rare white-tailed eagles and silent lynx. The region’s architectural legacy—ranging from red-brick Teutonic fortresses to the weathered concrete locks of the unfinished Masurian Canal—tells a story of human ambition harmonizing with the wild. It remains Europe's premier destination for sailing and aquatic biodiversity research. Geography K7 — post-glacial landforms and freshwater ecosystems."
    },
    factsAdvanced: {
      de: ["Die Masurische Seenplatte stand auf der Shortlist für die 'Sieben Neuen Naturwunder' der Welt.", "Giżycko gilt aufgrund seiner perfekten Lage zwischen den Seen als die Segelhauptstadt Polens.", "Die Region bietet exzellente Bedingungen für Kajaktouren, besonders auf dem malerischen Fluss Krutynia.", "In der Masurischen Seenplatte befinden sich viele naturbelassene Brutgebiete für Weißstörche."],
      hu: [],
      ro: [],
      en: [
        "Lake Śniardwy is the largest body of water in Poland, covering a total surface area of approximately 113.8 square kilometers.",
        "The region features a dense concentration of over 2,000 lakes interconnected by 12 major canals and 8 navigable rivers.",
        "Lake Mamry, the second largest in the district, reaches a maximum depth of 43.8 meters and contains 33 unique islands.",
        "The unfinished Masurian Canal project features 10 massive concrete locks, with the deep Leśniewo Górne lock standing nearly 17 meters high.",
        "The Łuknajno Lake Nature Reserve serves as a vital sanctuary for over 1,000 pairs of mute swans, one of the largest colonies in Europe."
      ]
    },
    facts: {
      de: ["Ein Kerngebiet der polnischen Seenlandschaft.", "Sehr beliebt für Segel- und Kajaktouren.", "Besteht aus vielen miteinander verbundenen Seen.", "Teil der bekannten Urlaubsregion Masuren.", "Bietet ruhige Natur und viel Wasserfläche.", "Zählt zu den klassischen Sommerzielen in Nordostpolen."],
      hu: ["A lengyel tóvidék egyik központi területe.", "Nagyon népszerű vitorlás és kajaktúrákhoz.", "Sok összekapcsolódó tó alkotja.", "A híres mazúriai üdülővidék része.", "Csendes természetet és nagy vízfelületeket kínál.", "Északkelet-Lengyelország egyik klasszikus nyári célpontja."],
      ro: ["O zonă centrală a peisajului lacustru polonez.", "Foarte populară pentru navigație și caiac.", "Formată din multe lacuri conectate între ele.", "Face parte din celebra regiune de vacanță Mazuria.", "Oferă natură liniștită și suprafețe întinse de apă.", "Una dintre destinațiile clasice de vară din nord-estul Poloniei."],
      en: ["A core area of Poland's lake landscape.", "Very popular for sailing and kayaking.", "Made up of many interconnected lakes.", "Part of the well-known Masuria holiday region.", "Offers quiet nature and lots of open water.", "One of northeastern Poland's classic summer destinations."]
    },
    image: "/geo-images/poland/masuria-lakes-area.webp"
  },
  {
    id: "pl-slowinski-dunes",
    type: "landmark",
    parent: "PL-PM",
    coords: [17.7000, 54.7500],
    name: { de: "Słowiński-Dünen", hu: "Słowiński-dűnék", ro: "Dunele Słowiński", en: "Słowiński Dunes" },
    description: {
      de: "Die Słowiński-Dünen sind ein spektakulärer Küstenabschnitt mit wandernden Sanddünen an der Ostsee. Der Wind formt hier ständig neue Kuppen und Täler, wodurch die Landschaft fast wüstenhaft wirkt. Zwischen Meer, Seen und Kiefernwäldern entsteht ein seltenes Küstenökosystem. Die Gegend ist eines der markantesten Naturbilder an Polens Nordküste.",
      hu: "A Słowiński-dűnék látványos tengerparti szakaszt alkotnak a Balti-tenger mentén, mozgó homokdűnékkel. A szél folyamatosan új dombokat és völgyeket alakít, így a táj szinte sivatagszerű. A tenger, tavak és fenyőerdők között ritka parti ökoszisztéma jön létre. A terület Lengyelország északi partvidékének egyik legjellegzetesebb természeti képe.",
      ro: "Dunele Słowiński reprezintă o porțiune spectaculoasă de coastă cu dune de nisip mobile la Marea Baltică. Vântul modelează continuu noi ridicături și depresiuni, făcând peisajul să pară aproape deșertic. Între mare, lacuri și păduri de pini apare un ecosistem costier rar. Zona este una dintre cele mai distinctive imagini naturale ale coastei de nord a Poloniei.",
      en: "The Słowiński Dunes are a spectacular coastal stretch of shifting sand dunes on the Baltic Sea. Wind constantly reshapes new mounds and valleys, giving the landscape an almost desert-like feel. Between the sea, lakes, and pine forests, a rare coastal ecosystem emerges. The area is one of the most distinctive natural images on Poland's northern coast."
    },
    descriptionAdvanced: {
      de: "Die Słowiński-Dünen, auch als 'polnische Sahara' bekannt, bieten ein wahrhaft einzigartiges und faszinierendes Naturschauspiel. Durch den unaufhörlichen Ostseewind verschieben sich riesige Sandmassen kontinuierlich landeinwärts und begraben alte Wälder, was eine fast wüstenähnliche Landschaft hinterlässt. Wenn man den Gipfel einer dieser riesigen Dünen erklimmt, eröffnet sich ein unvergleichlicher Kontrast aus hellem Sand, dem dunkelblauen Meer und dem grünen Küstenwald. Es ist eine der seltensten Küstenformen in Europa und steht unter strengem Naturschutz. Besucher können das Gebiet auf malerischen Wegen durch die Kiefernwälder zu Fuß oder mit dem Fahrrad erkunden.",
      hu: "",
      ro: "",
      en: "Explorer's Log: I have reached the shifting heart of the Polish coastline, where the Słowiński Dunes dominate the horizon like a temperate Sahara. Walking these ridges, I feel the sand grain by grain beneath my boots as the wind relentlessly reshapes the mounds. These 'moving dunes' are on a slow, unstoppable march, swallowing entire pine forests in their path and leaving skeletal trees in their wake. Standing atop Łącka Góra, the view is a stark contrast between the vast, blue Lake Łebsko and the white-capped waves of the Baltic Sea. It is a rare coastal desert that serves as a living laboratory for ecological resilience. Witnessing such raw geological power reminds me how fragile and dynamic our world truly is. Geography K7 – Coastal geomorphology and protected ecosystems."
    },
    factsAdvanced: {
      de: ["Die Wanderdünen bewegen sich mit einer Geschwindigkeit von bis zu 10 Metern pro Jahr nach Osten.", "Aufgrund des feinen, hellen Sandes quietscht der Boden manchmal unter den Füßen der Wanderer.", "Das Gebiet ist ein wichtiges Refugium für seltene Küstenvögel und Pflanzen.", "In der Nähe liegt das Freilichtmuseum in Kluki, das das traditionelle Leben der Slowinzen zeigt."],
      hu: [],
      ro: [],
      en: [
        "The dunes move at a remarkable speed of 3 to 10 meters per year, driven by the powerful prevailing winds of the Baltic Sea.",
        "Łącka Góra, the highest peak in this shifting desert, stands at approximately 42 meters above sea level.",
        "The Słowiński National Park was officially recognized as a UNESCO World Biosphere Reserve in 1977 to protect its unique coastal processes.",
        "Lake Łebsko, enclosed by the dunes, covers an area of 71.4 square kilometers, making it the third largest lake in Poland.",
        "The park acts as a critical sanctuary for over 250 species of birds, including white-tailed eagles and black storks."
      ]
    },
    facts: {
      de: ["Berühmt für wandernde Sanddünen.", "Wirkt stellenweise wie eine Wüstenlandschaft.", "Liegt zwischen der Ostsee und Küstenseen.", "Teil des Słowiński-Nationalparks.", "Ein seltenes Küstenökosystem in Polen.", "Eine der markantesten Naturattraktionen an der Küste."],
      hu: ["A mozgó homokdűnéiről híres.", "Egyes részeken sivatagszerű a táj.", "A Balti-tenger és parti tavak között fekszik.", "A Słowiński Nemzeti Park része.", "Ritka parti ökoszisztéma Lengyelországban.", "A part egyik legjellegzetesebb természeti látványossága."],
      ro: ["Faimoase pentru dunele de nisip mobile.", "Pe alocuri seamănă cu un peisaj deșertic.", "Situate între Marea Baltică și lacurile de coastă.", "Parte din Parcul Național Słowiński.", "Un ecosistem costier rar în Polonia.", "Una dintre cele mai distinctive atracții naturale de pe coastă."],
      en: ["Famous for shifting sand dunes.", "Looks desert-like in some sections.", "Located between the Baltic Sea and coastal lakes.", "Part of Słowiński National Park.", "A rare coastal ecosystem in Poland.", "One of the coast's most distinctive natural attractions."]
    },
    image: "/geo-images/poland/slowinski-dunes.webp"
  },
  {
    id: "pl-warsaw-science-center",
    type: "landmark",
    parent: "PL-MZ",
    coords: [21.0336, 52.2417],
    name: { de: "Warschauer Wissenschaftszentrum", hu: "Varsói Tudományos Központ", ro: "Centrul Științific din Varșovia", en: "Warsaw Science Center" },
    description: {
      de: "Das Warschauer Wissenschaftszentrum steht für interaktives Lernen mitten in der Hauptstadt. Es verbindet moderne Ausstellungen, Experimente und Mitmachräume, die Wissenschaft für Kinder und Erwachsene greifbar machen. Das Gebäude ist Teil des großen Kultur- und Bildungsraums an der Weichsel. Es zählt zu den beliebtesten Orten für Familien und Schulgruppen in Warschau.",
      hu: "A Varsói Tudományos Központ az interaktív tanulást képviseli a főváros szívében. Modern kiállításokat, kísérleteket és kipróbálható tereket kapcsol össze, hogy a tudomány kézzelfogható legyen gyerekek és felnőttek számára is. Az épület a Visztula menti nagy kulturális és oktatási tér része. Varsó egyik legnépszerűbb helye családok és iskolai csoportok számára.",
      ro: "Centrul Științific din Varșovia reprezintă învățarea interactivă chiar în inima capitalei. Combină expoziții moderne, experimente și spații practice care fac știința accesibilă copiilor și adulților. Clădirea face parte din ampla zonă culturală și educațională de pe Vistula. Este unul dintre cele mai populare locuri pentru familii și grupuri școlare din Varșovia.",
      en: "The Warsaw Science Center stands for interactive learning right in the capital city. It combines modern exhibitions, experiments, and hands-on spaces that make science tangible for children and adults alike. The building is part of the larger cultural and educational zone along the Vistula. It is one of Warsaw's most popular places for families and school groups."
    },
    descriptionAdvanced: {
      de: "Das Kopernikus-Wissenschaftszentrum an den Ufern der Weichsel in Warschau hat das traditionelle Museumsverständnis revolutioniert. Es lädt seine Besucher ein, Naturgesetze und komplexe wissenschaftliche Prinzipien durch Anfassen, Ausprobieren und Staunen selbst zu entdecken. Die interaktiven Ausstellungen sind so konzipiert, dass sowohl Kinder als auch Erwachsene ihre Neugier stillen und experimentieren können. Das Highlight des Zentrums ist das hochmoderne Planetarium, das die Besucher auf atemberaubende Reisen durch das Universum mitnimmt. Das futuristische Gebäude fügt sich zudem harmonisch in die revitalisierte Flusspromenade der Hauptstadt ein.",
      hu: "",
      ro: "",
      en: "Stepping into the Warsaw Science Center is like boarding a vessel destined for the frontiers of human discovery. Located on the scenic banks of the Vistula River, this architectural marvel serves as a living laboratory where the mysteries of physics, biology, and technology unfold through touch and experimentation. Visitors can command robots, witness the raw power of a simulated lightning bolt, or explore the outer reaches of the cosmos within the state-of-the-art Heavens of Copernicus planetarium. Beyond its gleaming glass facade, the center fosters a culture of curiosity, encouraging explorers of all ages to question the world around them. Whether you are navigating the intricacies of the human brain or exploring the laws of motion, every corner offers a new perspective on our universe. It is a cornerstone of Poland's modern educational landscape, blending cutting-edge research with playful engagement. Physics K8 — electromagnetism and light."
    },
    factsAdvanced: {
      de: ["Das Wissenschaftszentrum gehört zu den meistbesuchten Attraktionen in ganz Polen.", "In den Roboter-Theatern des Zentrums führen mechanische Akteure echte Theaterstücke auf.", "Ein großer Dachgarten auf dem Gebäude bietet einen fantastischen Blick auf die Weichsel und das Nationalstadion.", "Das Zentrum fördert die Wissenschaftskommunikation aktiv und richtet große wissenschaftliche Picknicks aus."],
      hu: [],
      ro: [],
      en: [
        "The center covers a total area of over 15,000 square meters, making it one of the largest facilities of its kind in Central Europe.",
        "The Heavens of Copernicus planetarium features a 16-meter diameter dome and uses a 4K resolution projection system for immersive space travel.",
        "More than 450 interactive exhibits are spread across various thematic galleries, including the On the Move and Humans and the Environment sections.",
        "The center welcomed its 10 millionth visitor in 2022, highlighting its massive popularity since opening its doors in 2010.",
        "The facility includes a rooftop garden spanning 7,000 square meters, which serves as a green laboratory for urban ecology studies."
      ]
    },
    facts: {
      de: ["Beliebtes Ziel für Schulklassen und Familien.", "Setzt auf Mitmach-Ausstellungen und Experimente.", "Liegt im modernen Weichselufer-Bereich Warschaus.", "Macht Naturwissenschaften verständlich und anschaulich.", "Teil des Bildungs- und Kulturclusters der Hauptstadt.", "Ein moderner Blick auf Wissenschaft und Technik."],
      hu: ["Népszerű célpont iskolai csoportok és családok számára.", "Interaktív kiállításokra és kísérletekre épül.", "Varsó modern, Visztula-parti részén található.", "A természettudományokat érthetővé és szemléletessé teszi.", "A főváros oktatási és kulturális központjának része.", "Modern nézőpontot ad a tudományról és a technikáról."],
      ro: ["Destinație populară pentru clase școlare și familii.", "Mizează pe expoziții interactive și experimente.", "Se află în zona modernă de pe malul Vistulei din Varșovia.", "Face științele naturale ușor de înțeles și vizuale.", "Parte a clusterului educațional și cultural al capitalei.", "O perspectivă modernă asupra științei și tehnologiei."],
      en: ["A popular destination for school groups and families.", "Built around hands-on exhibitions and experiments.", "Located in Warsaw's modern Vistula riverfront area.", "Makes natural science easy to understand and see.", "Part of the capital's education and culture cluster.", "A modern take on science and technology."]
    },
    image: "/geo-images/poland/warsaw-science-center.webp"
  },
  {
    id: "pl-katowice-spodek",
    type: "landmark",
    parent: "PL-SL",
    coords: [19.0240, 50.2660],
    name: { de: "Spodek", hu: "Katowicei Spodek", ro: "Spodek", en: "Katowice Spodek" },
    description: {
      de: "Der Spodek ist eines der bekanntesten modernen Wahrzeichen von Katowice. Seine markante, schwebend wirkende Form hat ihn zu einem Symbol der Stadt und des industriellen Oberschlesiens gemacht. Die Arena ist seit Jahrzehnten ein wichtiger Ort für Konzerte, Sport und große Veranstaltungen. Sie steht für den Wandel Katowices von der Schwerindustrie hin zu einer Kultur- und Eventstadt.",
      hu: "A Spodek Katowice egyik legismertebb modern jelképe. Jellegzetes, lebegő hatású formája a város és az ipari Felső-Szilézia szimbólumává tette. Az aréna évtizedek óta fontos helyszíne koncerteknek, sporteseményeknek és nagy rendezvényeknek. Katowice átalakulását jelképezi a nehéziparból a kulturális és eseményvárossá válás felé.",
      ro: "Spodek este unul dintre cele mai cunoscute simboluri moderne ale orașului Katowice. Forma sa distinctivă, care pare să plutească, l-a transformat într-un simbol al orașului și al Sileziei Superioare industriale. Arena este de zeci de ani un loc important pentru concerte, sport și evenimente mari. Ea reprezintă transformarea orașului Katowice dintr-un centru al industriei grele într-un oraș al culturii și evenimentelor.",
      en: "Spodek is one of Katowice's best-known modern landmarks. Its distinctive, floating-like form made it a symbol of the city and of industrial Upper Silesia. The arena has been a major venue for concerts, sports, and large events for decades. It represents Katowice's shift from heavy industry toward culture and events."
    },
    descriptionAdvanced: {
      de: "Der Spodek in Katowice ist eine der bekanntesten Mehrzweckarenen Polens und ein architektonisches Symbol der Woiwodschaft Schlesien. Sein markantes Aussehen, das an ein fliegendes Untertassen-UFO erinnert, wurde in den 1970er Jahren realisiert und hebt sich deutlich von der damaligen Industriearchitektur ab. Ursprünglich für große Sportveranstaltungen, Konzerte und Ausstellungen konzipiert, hat sich der Veranstaltungsort schnell zu einem kulturellen Zentrum der Region entwickelt. Tausende von Menschen besuchen regelmäßig die Konzerte internationaler Stars, E-Sport-Turniere wie die Intel Extreme Masters oder Weltmeisterschaften im Volleyball. Das Bauwerk spiegelt die dynamische Transformation von Katowice von einer durch Bergbau geprägten Stadt zu einer modernen Metropole wider.",
      hu: "",
      ro: "",
      en: "Stepping into Katowice, the skyline is dominated not by the usual smokestacks of its industrial past, but by what looks like a colossal UFO that has permanently docked in the heart of the city. This is the Spodek, a daring modernist masterpiece completed in 1971. Its name literally translates to 'Saucer,' and for over half a century, it has stood as a beacon of Upper Silesia's cultural transformation. Engineers faced a massive challenge: building this heavy concrete and steel structure on ground prone to mining subsidence. They utilized a revolutionary 'tensegrity' principle to keep it stable, creating an arena that feels as light as air despite its massive presence. From hosting the historic World Volleyball Championships to the futuristic battles of Intel Extreme Masters, the Spodek bridges the gap between Poland's coal-mining heritage and its dynamic, high-tech future. Geography K7 — industrial urban development."
    },
    factsAdvanced: {
      de: ["Der Bau der Arena wurde 1971 nach siebenjähriger Bauzeit offiziell abgeschlossen.", "Die charakteristische Form wurde gewählt, um Bodensenkungen durch den Kohlebergbau besser auszugleichen.", "Der Spodek bietet bei großen Konzerten und Sportveranstaltungen Platz für bis zu 11.500 Zuschauer.", "Die Arena ist regelmäßiger Austragungsort der Intel Extreme Masters, einem der größten E-Sport-Turniere der Welt."],
      hu: [],
      ro: [],
      en: [
        "The arena's roof covers an area of approximately 10,000 square meters and is supported by a complex system of 120 steel cables.",
        "Spodek can accommodate up to 11,500 spectators in its main hall, making it one of the largest indoor venues in Poland.",
        "The building stands 32 meters high, and its diameter at the widest point of the 'saucer' measures 126 meters.",
        "It was the first building in the world to utilize the principle of tensegrity for its roof structure on such a massive scale.",
        "Over 30,000 cubic meters of concrete were used during construction to stabilize the venue against mining-related ground tremors."
      ]
    },
    facts: {
      de: ["Eines der bekanntesten Gebäude in Katowice.", "Wurde zum Symbol des modernen Oberschlesiens.", "Dient als Arena für Konzerte und Sport.", "Seine Form wirkt wie eine fliegende Untertasse.", "Liegt in der Nähe der Kultur- und Konferenzzone.", "Ein wichtiger Ort für Großveranstaltungen in Polen."],
      hu: ["Katowice egyik legismertebb épülete.", "A modern felső-sziléziai identitás szimbóluma lett.", "Koncertek és sportesemények arénájaként működik.", "Formája repülő csészealjra emlékeztet.", "Közel van a kulturális és konferenciavárosi zónához.", "Lengyelország egyik fontos nagy rendezvényhelyszíne."],
      ro: ["Una dintre cele mai cunoscute clădiri din Katowice.", "A devenit simbolul Sileziei Superioare moderne.", "Servește drept arenă pentru concerte și sport.", "Forma sa amintește de o farfurie zburătoare.", "Se află aproape de zona culturală și de conferințe.", "Un loc important pentru evenimente mari în Polonia."],
      en: ["One of the most recognizable buildings in Katowice.", "Became a symbol of modern Upper Silesia.", "Serves as an arena for concerts and sports.", "Its shape resembles a flying saucer.", "Located near the city's cultural and conference zone.", "An important venue for major events in Poland."]
    },
    image: "/geo-images/poland/katowice-spodek.webp"
  },
  {
    id: "pl-wroclaw-dwarfs",
    type: "landmark",
    parent: "PL-DS",
    coords: [17.0340, 51.1100],
    name: { de: "Breslauer Zwerge", hu: "Wrocławi törpék", ro: "Piticii din Wrocław", en: "Wrocław Dwarfs" },
    description: {
      de: "Die Breslauer Zwerge sind eine spielerische Stadtkunst, die in ganz Wrocław verteilt ist. Die kleinen Bronzefiguren sind längst zu einem Erkennungszeichen der Stadt geworden und laden zum Suchen und Entdecken ein. Ursprünglich mit einer satirischen Protestbewegung verbunden, sind sie heute ein beliebtes Symbol mit Humor und Charme. Für Besucher gehört das Aufspüren der Figuren fast schon zum Pflichtprogramm.",
      hu: "A wrocławi törpék játékos városi műalkotások, amelyek szerte Wrocławban megtalálhatók. Az apró bronzfigurák mára a város egyik legismertebb jelképévé váltak, és felfedezésre csábítanak. Eredetileg egy szatirikus tiltakozó mozgalomhoz kapcsolódtak, ma azonban kedvelt, humoros és bájos szimbólumok. A látogatóknak szinte kötelező program a figurák felkutatása.",
      ro: "Piticii din Wrocław sunt o formă jucăușă de artă urbană răspândită în tot orașul. Micile figurine de bronz au devenit între timp unul dintre semnele distinctive ale orașului și îi invită pe vizitatori la explorare. Inițial legate de o mișcare satirică de protest, ele sunt astăzi un simbol popular, plin de umor și farmec. Pentru vizitatori, căutarea lor este aproape o activitate obligatorie.",
      en: "The Wrocław Dwarfs are playful pieces of urban art spread throughout the city. The small bronze figures have become one of Wrocław's defining symbols and invite people to explore. Originally linked to a satirical protest movement, they are now a beloved symbol full of humor and charm. For visitors, searching for the figures is almost a must-do activity."
    },
    descriptionAdvanced: {
      de: "Die Breslauer Zwerge (Krasnale) sind kleine Bronzefiguren, die überall im Stadtgebiet von Breslau (Wrocław) zu finden sind und sich zu einer echten Touristenattraktion entwickelt haben. Ihren Ursprung haben die Figuren in der antikommunistischen Oppositionsbewegung 'Orange Alternative', die in den 1980er Jahren mit Zwergen-Graffitis friedlich gegen das Regime protestierte. Im Jahr 2001 wurde das erste offizielle Zwergen-Denkmal, der Papa Zwerg, aufgestellt, um an diese Bewegung zu erinnern. Seitdem ist die Population der kleinen Wichte rasant angewachsen und umfasst mittlerweile mehrere Hundert individuelle Skulpturen, die jeweils eine eigene Geschichte erzählen oder einen Bezug zu ihrem Standort haben. Das Suchen und Finden der Zwerge bietet Besuchern eine spielerische Möglichkeit, die reiche Geschichte und Architektur von Breslau zu erkunden.",
      hu: "",
      ro: "",
      en: "Stepping onto the cobblestones of Wrocław’s Old Town feels like entering a living scavenger hunt where history hides in the smallest details. While the Gothic cathedrals tower above, my eyes are fixed on the pavement, searching for the legendary Wrocław Dwarfs. These tiny bronze figures are more than just whimsical street art; they are silent witnesses to Poland’s resilient spirit. Born from the 'Orange Alternative'—a satirical underground movement that used absurdity to protest the communist regime in the 1980s—the dwarfs have multiplied from a single rebel into a sprawling community of hundreds. Each figure, from the firefighter to the banker, tells a unique story of local life, profession, and humor. Hunting for them transforms a simple city walk into a profound journey through time and civic creativity. History K8 — Social movements and resistance in the 20th century."
    },
    factsAdvanced: {
      de: ["Die ersten Zwerge wurden als politisches Symbol des friedlichen Widerstands gegen den Kommunismus genutzt.", "Heute gibt es in Breslau weit über 600 verschiedene Zwergenfiguren.", "Viele lokale Unternehmen und Institutionen sponsern ihre eigenen, individuell gestalteten Zwerge.", "Für Touristen gibt es spezielle Stadtpläne und Smartphone-Apps, um die Zwerge gezielt aufzuspüren."],
      hu: [],
      ro: [],
      en: [
        "The first official dwarf, 'Papa Krasnal,' was unveiled on Świdnicka Street in 2001 to commemorate the satirical Orange Alternative movement.",
        "As of early 2024, the total number of bronze dwarfs hidden throughout Wrocław has grown to exceed 600 individual figures.",
        "Most dwarfs stand approximately 20 to 30 centimeters tall, reflecting their origins as subtle, easily hidden symbols of political protest.",
        "The movement that inspired them held its largest demonstration in June 1988, where an estimated 10,000 people marched in orange hats.",
        "Every September, the city hosts the Wrocław Dwarf Festival, a multi-day event attracting thousands of visitors for dwarf-themed parades and hunts."
      ]
    },
    facts: {
      de: ["Eine der bekanntesten Stadtkampagnen Wrocławs.", "Überall im Stadtgebiet versteckt.", "Verbinden Kunst, Humor und politische Geschichte.", "Ein beliebtes Ziel für Spaziergänge und Fotos.", "Wachsen bis heute immer weiter an.", "Machen die Stadt besonders kinderfreundlich."],
      hu: ["Wrocław egyik legismertebb városi jelensége.", "A város számos pontján elrejtve találhatók.", "Művészetet, humort és politikai történetet kötnek össze.", "Népszerű séta- és fotótéma.", "A számuk ma is folyamatosan növekszik.", "Különösen gyerekbaráttá teszik a várost."],
      ro: ["Una dintre cele mai cunoscute campanii urbane din Wrocław.", "Ascunși în tot orașul.", "Îmbină arta, umorul și istoria politică.", "O temă populară pentru plimbări și fotografii.", "Numărul lor continuă să crească și astăzi.", "Fac orașul deosebit de prietenos pentru copii."],
      en: ["One of Wrocław's best-known city features.", "Hidden throughout the urban area.", "Combines art, humor, and political history.", "A popular target for walks and photos.", "The number of figures continues to grow.", "Makes the city especially child-friendly."]
    },
    image: "/geo-images/poland/wroclaw-dwarfs.webp"
  },
  {
    id: "pl-crooked-forest",
    type: "forest",
    parent: "PL-ZP",
    coords: [14.4750, 53.2470],
    name: { de: "Krummer Wald", hu: "Gryfinoi görbe erdő", ro: "Pădurea Strâmbă", en: "Crooked Forest" },
    description: {
      de: "Der Krumme Wald bei Gryfino ist für seine ungewöhnlich gebogenen Kiefern bekannt. Die Bäume wachsen mit stark gekrümmten Stämmen, was dem Ort ein geheimnisvolles Aussehen verleiht. Die Ursache des Wuchses ist bis heute nicht völlig geklärt und macht den Wald umso faszinierender. Trotz seiner geringen Größe ist er eines der skurrilsten Naturphänomene in Westpolen.",
      hu: "A Gryfino melletti görbe erdő a rendkívül hajlott fenyőfáiról ismert. A fák erősen görbült törzzsel nőnek, ami különösen rejtélyes megjelenést ad a helynek. A növekedés okát ma sem sikerült teljesen tisztázni, ezért még izgalmasabbá válik az erdő. Kis mérete ellenére Nyugat-Lengyelország egyik legkülönösebb természeti jelensége.",
      ro: "Pădurea Strâmbă de lângă Gryfino este cunoscută pentru pinii săi neobișnuit de curbați. Copacii cresc cu trunchiuri puternic îndoite, ceea ce conferă locului un aspect misterios. Cauza acestei forme nu este încă pe deplin clarificată, iar asta face pădurea și mai fascinantă. În ciuda dimensiunilor reduse, este unul dintre cele mai ciudate fenomene naturale din vestul Poloniei.",
      en: "The Crooked Forest near Gryfino is known for its unusually bent pine trees. The trees grow with strongly curved trunks, giving the place a mysterious appearance. The cause of this growth is still not fully explained, which only adds to the forest's fascination. Despite its small size, it is one of the oddest natural phenomena in western Poland."
    },
    descriptionAdvanced: {
      de: "Der Krumme Wald (Krzywy Las) in der Nähe von Gryfino in Westpommern ist ein faszinierendes Naturdenkmal und ein ungelöstes Rätsel. Er besteht aus etwa 400 Kiefern, deren Stämme kurz über dem Boden in einem markanten 90-Grad-Winkel nach Norden gebogen sind, bevor sie wieder gerade nach oben wachsen. Diese Bäume wurden vermutlich um das Jahr 1930 gepflanzt, als das Gebiet noch zur deutschen Provinz Pommern gehörte. Bis heute gibt es keine eindeutige Erklärung für dieses Phänomen, obwohl viele Theorien von speziellen menschlichen Techniken im Bootsbau bis hin zu starken Schneestürmen reichen. Die mystische Atmosphäre dieses einzigartigen Waldes zieht jährlich zahlreiche Naturliebhaber, Fotografen und Neugierige aus aller Welt an.",
      hu: "",
      ro: "",
      en: "Tucked away in the West Pomeranian Voivodeship near Gryfino, the Crooked Forest (Krzywy Las) stands as one of Europe’s most baffling botanical enigmas. This small grove of approximately 400 pine trees features trunks that all curve 90 degrees northward at their base before arching back up toward the sky. Planted around 1930, the trees grew normally for about a decade before being mysteriously manipulated. While some speculate that heavy snow or gravitational anomalies are responsible, many believe local farmers deliberately bent them to grow naturally curved timber for boat-building or furniture. Walking through these uniform, sickle-shaped silhouettes feels like stepping into a surrealist painting where nature has defied the standard laws of vertical growth. Exploring this site offers a profound lesson on human interaction with the environment and the persistence of ecological mysteries. Geography K7 — ecosystems and human-environment interaction."
    },
    factsAdvanced: {
      de: ["Der Wald besteht aus ungefähr 400 Kiefern, die alle eine ähnliche, sichelförmige Biegung aufweisen.", "Die Bäume wurden in den 1930er Jahren gepflanzt und haben ihre Biegung vermutlich in jungen Jahren erhalten.", "Eine beliebte Theorie besagt, dass die Bäume absichtlich so geformt wurden, um natürliches Krummholz für den Möbel- oder Bootsbau zu gewinnen.", "Alle gebogenen Kiefern weisen mit ihrer Krümmung in Richtung Norden."],
      hu: [],
      ro: [],
      en: [
        "The grove consists of roughly 400 pine trees that were originally planted in the year 1930.",
        "Every single tree in the formation curves exactly 90 degrees toward the North.",
        "The bend in each trunk occurs just 10 to 50 centimeters above the forest floor.",
        "Researchers estimate the trees were between 7 and 10 years old when they were subjected to the force that caused their deformation.",
        "The entire protected natural monument covers an area of approximately 0.3 hectares in the Gryfino Forest District."
      ]
    },
    facts: {
      de: ["Berühmt für seine seltsam gebogenen Kiefern.", "Die Ursache der Form ist bis heute umstritten.", "Liegt nahe der Stadt Gryfino.", "Ein kleines, aber sehr bekanntes Naturrätsel.", "Beliebt bei Fotografen und Neugierigen.", "Eines der ungewöhnlichsten Wälder Polens."],
      hu: ["A furcsán meghajlott fenyőiről híres.", "A forma oka ma is vitatott.", "Gryfino közelében található.", "Kicsi, de nagyon ismert természeti rejtély.", "Népszerű a fotósok és kíváncsi látogatók körében.", "Lengyelország egyik legkülönlegesebb erdeje."],
      ro: ["Faimoasă pentru pinii săi ciudat de curbați.", "Cauza formei este încă disputată.", "Situată lângă orașul Gryfino.", "Un mister natural mic, dar foarte cunoscut.", "Populară printre fotografi și curioși.", "Una dintre cele mai neobișnuite păduri din Polonia."],
      en: ["Famous for its strangely bent pine trees.", "The cause of the shape is still debated.", "Located near the town of Gryfino.", "A small but very famous natural mystery.", "Popular with photographers and curious visitors.", "One of the most unusual forests in Poland."]
    },
    image: "/geo-images/poland/crooked-forest.webp"
  },
  {
    id: "pl-lodz-film-museum",
    type: "landmark",
    parent: "PL-LD",
    coords: [19.4610, 51.7670],
    name: { de: "Filmuseum Łódź", hu: "Łódźi Filmmúzeum", ro: "Muzeul Filmului din Łódź", en: "Łódź Film Museum" },
    description: {
      de: "Das Filmmuseum in Łódź erinnert an die lange Kinotradition der Stadt. Łódź gilt seit dem 20. Jahrhundert als wichtiges Zentrum der polnischen Filmkunst, und das Museum bewahrt diese Rolle mit Ausstellungen, Requisiten und historischen Materialien. Es ist eng mit der berühmten Filmschule und der kreativen Identität der Stadt verbunden. Für Filmfans ist es einer der wichtigsten Orte in Łódź.",
      hu: "A łódźi filmmúzeum a város hosszú filmes hagyományára emlékeztet. Łódź a 20. század óta a lengyel filmművészet egyik fontos központja, a múzeum pedig kiállításokkal, kellékekkel és történeti anyagokkal őrzi ezt a szerepet. Szorosan kapcsolódik a híres filmiskolához és a város kreatív identitásához. A filmrajongók számára Łódź egyik legfontosabb helyszíne.",
      ro: "Muzeul Filmului din Łódź amintește de lunga tradiție cinematografică a orașului. Łódź este considerat încă din secolul al XX-lea un centru important al cinematografiei poloneze, iar muzeul păstrează acest rol prin expoziții, obiecte de recuzită și materiale istorice. Este strâns legat de celebra școală de film și de identitatea creativă a orașului. Pentru iubitorii de film, este unul dintre cele mai importante locuri din Łódź.",
      en: "The Łódź Film Museum recalls the city's long film tradition. Since the 20th century, Łódź has been a major center of Polish cinema, and the museum preserves that role with exhibitions, props, and historical materials. It is closely tied to the famous film school and the city's creative identity. For film fans, it is one of the most important places in Łódź."
    },
    descriptionAdvanced: {
      de: "Das Filmmuseum in Łódź befindet sich im prächtigen ehemaligen Palast des Textilfabrikanten Karol Scheibler und ist eine Hommage an die reiche Kinogeschichte der Stadt. Łódź gilt als das Hollywood Polens, da sich hier nach dem Zweiten Weltkrieg das Zentrum der polnischen Filmproduktion etablierte. Die Ausstellungen des Museums umfassen historische Kameras, Filmplakate, Requisiten und Bühnenbilder, die tiefe Einblicke in die Entwicklung der Kinematografie geben. Ein besonderes Highlight ist das original erhaltene Fotoplastikon, ein historisches Gerät zur Betrachtung stereoskopischer Bilder. Besucher können in den prunkvollen Räumen des Palastes in die faszinierende Welt des Kinos eintauchen und die Meisterwerke weltberühmter polnischer Regisseure entdecken.",
      hu: "",
      ro: "",
      en: "Stepping into the Łódź Film Museum feels like walking onto a vintage movie set within the opulent Scheibler Palace. As I explore the \"HollyŁódź\" archives, the smell of celluloid and the grandeur of 19th-century industrial wealth collide. This isn't just a collection of props; it's the beating heart of the Polish School of Cinema. From the mechanical wonder of the 1900 Kaiserpanorama to intricate costumes used by Oscar-winning directors like Andrzej Wajda, every room reveals a frame of Poland's visual history. The museum serves as a bridge between the city’s industrial past and its artistic future, preserving the technical evolution of cameras and projectors that once captured the dreams of a nation. It offers a deep dive into how Łódź became the cinematic capital of Eastern Europe. History K8 — development of 20th-century culture and arts."
    },
    factsAdvanced: {
      de: ["Das Museum ist im Palast von Karol Scheibler untergebracht, einem der bedeutendsten Industriellen der Stadt.", "Es beherbergt eine riesige Sammlung von über 50.000 Exponaten zur polnischen und internationalen Filmgeschichte.", "Eines der wertvollsten Stücke ist ein seltenes Kaiser-Panorama (Fotoplastikon) aus dem späten 19. Jahrhundert.", "Łódź war jahrzehntelang der Hauptsitz der renommierten Staatlichen Hochschule für Film, Fernsehen und Theater."],
      hu: [],
      ro: [],
      en: [
        "The museum was officially established in 1986 and remains the only institution of its kind in Poland.",
        "Its massive archives contain more than 50,000 individual items including films, posters, and technical set designs.",
        "A star attraction is the original Fotoplastikon, a rare Kaiserpanorama stereoscopic viewer built around 1900.",
        "The museum is housed in the Karol Scheibler Palace, a Neo-Renaissance landmark constructed in 1855.",
        "The collection documents the industry's growth with over 1,000 historical film projectors and cameras."
      ]
    },
    facts: {
      de: ["Spiegelt die berühmte Filmtradition von Łódź wider.", "Verbunden mit der renommierten Łódźer Filmschule.", "Bewahrt Archivmaterial, Requisiten und Ausstellungen.", "Ein wichtiger Ort der polnischen Kinogeschichte.", "Teil der kreativen Identität der Stadt.", "Beliebt bei Besuchern mit Interesse an Kultur und Film."],
      hu: ["Łódź híres filmes hagyományát tükrözi.", "Kapcsolódik a neves Łódźi Filmiskolához.", "Archív anyagokat, kellékeket és kiállításokat őriz.", "A lengyel filmtörténet fontos helyszíne.", "A város kreatív identitásának része.", "Népszerű a kultúra és film iránt érdeklődő látogatók körében."],
      ro: ["Reflectă celebra tradiție cinematografică a orașului Łódź.", "Este legat de renumita Școală de Film din Łódź.", "Păstrează materiale de arhivă, recuzită și expoziții.", "Un loc important în istoria filmului polonez.", "Parte a identității creative a orașului.", "Popular printre vizitatorii interesați de cultură și cinema."],
      en: ["Reflects Łódź's famous film tradition.", "Connected to the renowned Łódź Film School.", "Preserves archival material, props, and exhibitions.", "An important site in Polish cinema history.", "Part of the city's creative identity.", "Popular with visitors interested in culture and film."]
    },
    image: "/geo-images/poland/lodz-film-museum.webp"
  }
];

export const polandAllPoi: POI[] = [polandCountry,
  ...polandRegions,
  ...polandCities,, ...poiExtraPolandCities];
