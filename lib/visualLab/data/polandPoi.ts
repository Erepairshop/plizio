import type { POI } from "./poi";

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
      de: ["Lublin ist die Hauptstadt und größte Stadt in Ostpolen.", "Grenzt sowohl an die Ukraine als auch an Belarus.", "Eine der wichtigsten Agrarregionen Polens.", "Die historische Altstadt von Zamość ist ein UNESCO-Weltkulturerbe.", "Heimat des Nationalparks Polesie und des Nationalparks Roztocze.", "Historisch ein wichtiges Zentrum der jüdischen Kultur.", "Bekannt für die Produktion von Hopfen, Himbeeren und Äpfeln.", "Verfügt über vielfältige Ökosysteme, einschließlich Sümpfen und Wäldern."],
      hu: ["Lublin a főváros és Kelet-Lengyelország legnagyobb városa.", "Ukrajnával és Fehéroroszországgal egyaránt határos.", "Lengyelország egyik legfontosabb mezőgazdasági régiója.", "Zamość történelmi óvárosa UNESCO világörökségi helyszín.", "Itt található a Polesie Nemzeti Park és a Roztocze Nemzeti Park.", "Történelmileg a zsidó kultúra fontos központja volt.", "Komló, málna és alma termesztéséről ismert.", "Változatos ökoszisztémákkal rendelkezik, beleértve a mocsarakat és erdőket."],
      ro: ["Lublin este capitala și cel mai mare oraș din estul Poloniei.", "Se învecinează atât cu Ucraina, cât și cu Belarus.", "Una dintre cele mai importante regiuni agricole din Polonia.", "Orașul vechi istoric Zamość este în Patrimoniul Mondial UNESCO.", "Găzduiește Parcul Național Polesie și Parcul Național Roztocze.", "Istoric un centru major al culturii iudaice.", "Cunoscută pentru producția de hamei, zmeură și mere.", "Prezintă ecosisteme diverse, inclusiv mlaștini și păduri."],
      en: ["Lublin is the capital and the largest city in eastern Poland.", "Shares borders with both Ukraine and Belarus.", "One of Poland's most important agricultural regions.", "The historic Old Town of Zamość is a UNESCO World Heritage site.", "Home to Polesie National Park and Roztocze National Park.", "Historically a major center of Jewish culture and learning.", "Known for its production of hops, raspberries, and apples.", "Features diverse ecosystems, including swamps and forests."],
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
      de: "Warschau ist die Hauptstadt und größte Stadt Polens. Die Metropole liegt an der Weichsel im östlichen Zentrum Polens. Die offizielle Einwohnerzahl beträgt 1,86 Millionen, im Großraum leben 3,1 Millionen Menschen, womit Warschau die siebtgrößte Stadt der Europäischen Union ist. Das Stadtgebiet umfasst 517,24 Quadratkilometer. Warschau ist eine Alpha-Weltstadt, ein wichtiges internationales Touristenziel und ein bedeutendes kulturelles, politisches und wirtschaftliches Zentrum.",
      hu: "Varsó Lengyelország fővárosa és legnagyobb városa. A metropolisz a Visztula folyó partján fekszik, Közép-Kelet-Lengyelországban. Lakossága hivatalosan 1,86 millió fő, a tágabb vonzáskörzetben pedig 3,1 millióan élnek, így az Európai Unió hetedik legnépesebb városa. A város területe 517,24 négyzetkilométer. Varsó egy alfa globális város, jelentős nemzetközi turisztikai célpont, valamint fontos kulturális, politikai és gazdasági központ.",
      ro: "Varșovia este capitala și cel mai mare oraș al Poloniei. Metropola este situată pe râul Vistula, în centrul-estul Poloniei. Populația sa este estimată oficial la 1,86 milioane de locuitori în oraș și 3,1 milioane în zona metropolitană, fiind al 7-lea cel mai populat oraș din Uniunea Europeană. Limitele orașului acoperă 517,24 kilometri pătrați. Varșovia este un oraș global alfa, o destinație turistică internațională majoră și un centru cultural, politic și economic semnificativ.",
      en: "Warsaw is the capital and largest city of Poland. The metropolis stands on the Vistula River in east-central Poland. Its population is officially estimated at 1.86 million residents within a greater metropolitan area of 3.1 million residents, making Warsaw the 7th most-populous city in the European Union. The city limits cover 517.24 square kilometres. Warsaw is an alpha global city, a major international tourist destination, and a significant cultural, political and economic hub.",
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
      de: "Krakau ist die zweitgrößte und eine der ältesten Städte Polens. Die Stadt liegt an der Weichsel in der Woiwodschaft Kleinpolen und geht auf das siebte Jahrhundert zurück. Sie war bis 1596 die offizielle Hauptstadt Polens und ist traditionell eines der führenden Zentren des polnischen akademischen, wirtschaftlichen, kulturellen und künstlerischen Lebens. Sie gilt als eine der schönsten Städte Europas und ihre Altstadt ist ein UNESCO-Weltkulturerbe.",
      hu: "Krakkó Lengyelország második legnagyobb és egyik legrégebbi városa. A Kis-Lengyelország vajdaságban, a Visztula folyó partján fekvő város története a hetedik századig nyúlik vissza. 1596-ig Lengyelország hivatalos fővárosa volt, és hagyományosan a lengyel tudományos, gazdasági, kulturális és művészeti élet egyik vezető központja. Európa egyik legszebb városaként tartják számon, óvárosa pedig az UNESCO Világörökség része.",
      ro: "Cracovia este al doilea oraș ca mărime și unul dintre cele mai vechi din Polonia. Situat pe râul Vistula în Voievodatul Polonia Mică, orașul datează din secolul al VII-lea. A fost capitala oficială a Poloniei până în 1596 și a fost în mod tradițional unul dintre centrele principale ale vieții academice, economice, culturale și artistice poloneze. Considerat unul dintre cele mai frumoase orașe din Europa, centrul său vechi este un sit al Patrimoniului Mondial UNESCO.",
      en: "Kraków is the second-largest and one of the oldest cities in Poland. Situated on the Vistula River in Lesser Poland Voivodeship, the city dates back to the seventh century. It was the official capital of Poland until 1596 and has traditionally been one of the leading centres of Polish academic, economic, cultural and artistic life. Cited as one of Europe's most beautiful cities, its Old Town is a UNESCO World Heritage Site.",
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
      de: "Wrocław (Breslau) ist eine Stadt im Südwesten Polens und die größte Stadt in der historischen Region Schlesien. Sie liegt an den Ufern der Oder im schlesischen Tiefland in Mitteleuropa. Mit einer offiziellen Bevölkerung von über 670.000 ist Wrocław die drittgrößte Stadt Polens. Die Stadt ist bekannt für ihre vielen Brücken, Inseln und den historischen Marktplatz. Breslau ist ein bedeutendes Studentenzentrum und ein wichtiges kulturelles und wirtschaftliches Zentrum.",
      hu: "Wrocław Délnyugat-Lengyelország városa, Szilézia történelmi régiójának legnagyobb települése. Az Odera folyó partján fekszik, a Közép-Európai Sziléziai-alföldön. Több mint 670 000 fős lakosságával Wrocław Lengyelország harmadik legnépesebb városa. A város híres nagyszámú hídjáról, szigeteiről és történelmi piacteréről. Wrocław jelentős diákváros, valamint fontos kulturális és gazdasági központ.",
      ro: "Wrocław este un oraș în sud-vestul Poloniei și cel mai mare oraș din regiunea istorică Silezia. Se află pe malurile râului Oder, în Câmpia Sileziei din Europa Centrală. Cu o populație oficială de peste 670.000 de locuitori, Wrocław este al treilea cel mai populat oraș din Polonia. Orașul este cunoscut pentru numărul său mare de poduri, insule și piața istorică. Wrocław este un centru studențesc major și un important pol cultural și economic.",
      en: "Wrocław is a city in southwestern Poland and the largest city in the historical region of Silesia. It lies on the banks of the River Oder in the Silesian Lowlands of Central Europe, roughly 350 kilometres from the Baltic Sea to the north. With an official population of over 670,000, Wrocław is the third most populous city in Poland. The city is known for its large number of bridges, islands, and historic market square. Wrocław is a major student hub and an important cultural and economic center.",
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
      de: "Danzig ist eine große Hafenstadt an der Ostseeküste Polens. Mit fast 486.000 Einwohnern ist sie die Hauptstadt der Woiwodschaft Pommern und die bedeutendste Stadt in der geografischen Region Pommerellen. Es ist Polens wichtigster Seehafen und das Zentrum der viertgrößten Metropolregion des Landes. Die Stadt hat eine komplexe Geschichte mit polnischen, preußischen, deutschen Herrschaften und Autonomie. Die Solidarność-Bewegung, die das Ende des Kommunismus in Polen einleitete, entstand auf der Danziger Werft.",
      hu: "Gdańsk egy nagy kikötőváros Lengyelország balti partvidékén. Közel 486 000 fős lakosságával a Pomerániai vajdaság fővárosa és Pomerélia földrajzi régiójának legjelentősebb városa. Ez Lengyelország legfontosabb tengeri kikötője és az ország negyedik legnagyobb metropoliszövezetének központja. A város összetett történelemmel rendelkezik lengyel, porosz és német uralom, valamint autonómia korszakaival. A lengyelországi kommunista uralom megdöntésében kulcsszerepet játszó Szolidaritás mozgalom a gdański hajógyárban alakult ki.",
      ro: "Gdańsk este un oraș-port major pe coasta baltică a Poloniei. Cu o populație de aproape 486.000 de locuitori, este capitala Voievodatului Pomerania și cel mai proeminent oraș din regiunea Pomerelia. Este principalul port maritim al Poloniei și centrul celei de-a patra mari zone metropolitane a țării. Orașul are o istorie complexă cu perioade de dominație poloneză, prusacă și germană. Mișcarea Solidaritatea, care a contribuit la sfârșitul comunismului în Polonia, a apărut la Șantierul Naval din Gdańsk.",
      en: "Gdańsk is a major port city on the Baltic coast of Poland. With a population of nearly 486,000, it is the capital of the Pomeranian Voivodeship and the most prominent city in the geographic region of Pomerelia. It is Poland's principal seaport and the centre of the country's fourth-largest metropolitan area. The city has a complex history with periods of Polish, Prussian, and German rule, and periods of autonomy. The Solidarity movement, which played a major role in bringing an end to Communist rule in Poland, emerged in the Gdańsk Shipyard.",
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
    image: "/geo-images/poland/lodz.webp",
  },
  {
    id: "lublin-city",
    type: "city",
    parent: "PL-LU",
    coords: [22.5684, 51.2465],
    name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" },
    description: {
      de: "Lublin ist die neuntgrößte Stadt in Polen und die zweitgrößte Stadt des historischen Kleinpolens. Sie ist die Hauptstadt der Woiwodschaft Lublin mit einer Bevölkerung von etwa 338.000 Einwohnern. Im Südosten Polens gelegen, spielte sie eine wichtige Rolle in der Geschichte des Landes. Die Union von Lublin, die die polnisch-litauische Adelsrepublik gründete, wurde hier 1569 unterzeichnet. Heute ist die malerische Altstadt ein wichtiges Touristenziel.",
      hu: "Lublin Lengyelország kilencedik legnagyobb városa és a történelmi Kis-Lengyelország második legnagyobb városa. A Lublini vajdaság fővárosa és központja, lakossága körülbelül 338 000 fő. Délkelet-Lengyelországban fekszik, és a kereskedelem és diplomácia központjaként jelentős szerepet játszott az ország történelmében. Itt írták alá 1569-ben a lublini uniót. Ma festői óvárosa és gazdag történelme miatt jelentős turisztikai célpont.",
      ro: "Lublin este al nouălea oraș ca mărime din Polonia și al doilea oraș ca mărime din istorica Polonie Mică. Este capitala și centrul Voievodatului Lublin, cu o populație de aproximativ 338.000 de locuitori. Situat în sud-estul Poloniei, a jucat un rol major în istoria țării. Uniunea de la Lublin, care a stabilit Uniunea Polono-Lituaniană, a fost semnată aici în 1569. Astăzi, Orașul său Vechi pitoresc îl face o destinație turistică proeminentă.",
      en: "Lublin is the ninth-largest city in Poland and the second-largest city of historical Lesser Poland. It is the capital and the center of Lublin Voivodeship with a population of about 338,000. Located in southeastern Poland, it has played a major role in the country's history as a center of commerce and diplomacy. The Union of Lublin, establishing the Polish-Lithuanian Commonwealth, was signed here in 1569. Today, its picturesque Old Town and rich history make it a prominent tourist destination.",
    },
    facts: {
      de: ["Neuntgrößte Stadt in Polen.", "Größte Stadt im Osten Polens.", "Hauptstadt der Woiwodschaft Lublin.", "Die Union von Lublin wurde 1569 hier unterzeichnet.", "Verfügt über eine gut erhaltene Altstadt.", "Das Lubliner Schloss ist ein wichtiges Wahrzeichen.", "Wichtiges akademisches Zentrum mit mehreren Universitäten.", "Historisch als 'Jüdisches Oxford' bekannt.", "Heimat des Staatlichen Museums Majdanek.", "Bedeutendes kulturelles und wirtschaftliches Zentrum der Region."],
      hu: ["Lengyelország kilencedik legnagyobb városa.", "Kelet-Lengyelország legnagyobb városa.", "A Lublini vajdaság fővárosa.", "1569-ben itt írták alá a lublini uniót.", "Jól megőrzött óvárossal rendelkezik.", "A lublini vár fontos történelmi műemlék.", "Jelentős akadémiai központ több egyetemmel.", "Történelmileg „zsidó Oxfordként” is ismerték.", "A Majdaneki Állami Múzeum otthona.", "Jelentős kulturális és gazdasági központ a régióban."],
      ro: ["Al nouălea cel mai mare oraș din Polonia.", "Cel mai mare oraș din estul Poloniei.", "Capitala Voievodatului Lublin.", "Uniunea de la Lublin a fost semnată aici în 1569.", "Are un Centru Vechi bine conservat.", "Castelul Lublin este un reper istoric major.", "Centru academic important, cu mai multe universități.", "Cunoscut istoric sub numele de 'Oxfordul evreiesc'.", "Găzduiește Muzeul de Stat Majdanek.", "Centru cultural și economic semnificativ în regiune."],
      en: ["Ninth-largest city in Poland.", "Largest city in eastern Poland.", "Capital of Lublin Voivodeship.", "The Union of Lublin was signed here in 1569.", "Features a well-preserved Old Town.", "Lublin Castle is a major historical landmark.", "Important academic center with multiple universities.", "Historically known as the 'Jewish Oxford'.", "Home to the Majdanek State Museum.", "Significant cultural and economic hub in the region."],
    },
    image: "/geo-images/poland/lublin.webp",
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
    facts: {
      de: ["Im 13. Jahrhundert vom Deutschen Orden gegründet.", "Geburtsort des berühmten Renaissance-Astronomen Nikolaus Kopernikus.", "Eine der wenigen polnischen Städte, die im Zweiten Weltkrieg nicht zerstört wurden.", "Ein UNESCO-Weltkulturerbe, berühmt für seine Backsteingotik.", "Bekannt für die traditionellen Thorner Lebkuchen, die seit dem Mittelalter gebacken werden.", "Das Alte Rathaus gehört zu den monumentalsten in Mitteleuropa.", "Verfügt über einen \"Schiefen Turm\", einen mittelalterlichen Wehrturm, der sich neigte.", "Bewahrt einen mittelalterlichen Straßenverlauf und originale Stadtmauern."],
      hu: ["A Német Lovagrend alapította a 13. században.", "Nikolaus Kopernikusz, a híres reneszánsz csillagász szülőhelye.", "Egyike azon kevés lengyel városoknak, amelyeket nem romboltak le a második világháborúban.", "Tégla gótikus építészetéről híres UNESCO világörökségi helyszín.", "Híres a középkor óta sütött hagyományos toruńi mézeskalácsról.", "A régi városháza Közép-Európa egyik legmonumentálisabb épülete.", "Itt található a \"Ferde torony\", egy középkori védőtorony, amely az idők során megdőlt.", "Megőrizte középkori utcaszerkezetét és eredeti védőfalait."],
      ro: ["Fondat de Cavalerii Teutoni în secolul al XIII-lea.", "Locul de naștere al faimosului astronom renascentist Nicolaus Copernic.", "Unul dintre puținele orașe poloneze care nu au fost distruse în al Doilea Război Mondial.", "Un sit al Patrimoniului Mondial UNESCO, renumit pentru arhitectura gotică din cărămidă.", "Faimos pentru turta dulce tradițională de Toruń, coaptă încă din Evul Mediu.", "Primăria Veche este una dintre cele mai monumentale din Europa Centrală.", "Prezintă un \"Turn Înclinat\", un turn de apărare medieval care s-a înclinat în timp.", "Are un plan stradal medieval conservat și ziduri de apărare originale."],
      en: ["Founded by the Teutonic Knights in the 13th century.", "Birthplace of the famous Renaissance astronomer Nicolaus Copernicus.", "One of the few Polish cities that was not destroyed during World War II.", "A UNESCO World Heritage Site renowned for its Brick Gothic architecture.", "Famous for its traditional Toruń gingerbread, baked since the Middle Ages.", "The Old Town Hall is one of the most monumental in Central Europe.", "Features a \"Leaning Tower\", a medieval defensive tower that shifted over time.", "Has a preserved medieval street layout and original defensive walls."],
    },
    image: "/geo-images/poland/stare-miasto-torun.webp",
    },
    {
    id: "zamosc-city",
    type: "city",
    parent: "PL-LU",
    coords: [23.2525, 50.7171],
    name: { de: "Zamość", hu: "Zamość", ro: "Zamość", en: "Zamość" },
    description: {
      de: "Zamość ist eine historische Stadt im Südosten Polens, die für ihre einzigartige Renaissance-Architektur bekannt ist. Sie wurde im 16. Jahrhundert von einem italienischen Architekten nach den Idealen der Renaissance als \"perfekte Stadt\" entworfen. Die Stadt diente als wichtiger Handelsknotenpunkt und kulturelles Zentrum zwischen West- und Osteuropa. Heute ist Zamość eine lebendige Stadt, die ihr reiches multikulturelles Erbe und ihre historische Bedeutung zelebriert.",
      hu: "Zamość egy történelmi város Délkelet-Lengyelországban, amely egyedülálló reneszánsz építészetéről ismert. Egy olasz építész tervezte a 16. században, és a reneszánsz eszméknek megfelelő \"tökéletes városként\" fogant. A város Nyugat- és Kelet-Európát összekötő fontos kereskedelmi és kulturális központként működött. Ma Zamość egy nyüzsgő város, amely gazdag multikulturális örökségét és történelmi jelentőségét ünnepli.",
      ro: "Zamość este un oraș istoric din sud-estul Poloniei, cunoscut pentru arhitectura sa renascentistă unică. Proiectat de un arhitect italian în secolul al XVI-lea, a fost conceput ca un \"oraș perfect\", urmând idealurile Renașterii. Orașul a servit drept centru comercial și cultural major, conectând Europa de Vest cu cea de Est. Astăzi, Zamość este un oraș vibrant care își celebrează moștenirea multiculturală bogată și importanța istorică.",
      en: "Zamość is a historical city in southeastern Poland known for its unique Renaissance architecture. Designed by an Italian architect in the 16th century, it was conceived as a \"perfect city\" following Renaissance ideals. The city served as a major trading hub and cultural center connecting Western and Eastern Europe. Today, Zamość is a vibrant town that celebrates its rich multicultural heritage and historical significance.",
    },
    facts: {
      de: ["1580 vom polnischen Adligen Jan Zamoyski gegründet.", "Entworfen vom italienischen Architekten Bernardo Morando.", "Oft als \"Padua des Nordens\" oder \"Perle der Renaissance\" bezeichnet.", "Diente als Festungsstadt, die zahlreichen Belagerungen erfolgreich standhielt.", "Wurde zu einem wichtigen Zentrum für Handel, Bildung und Kultur.", "Hatte bis zum Zweiten Weltkrieg eine bedeutende jüdische Gemeinde.", "Veranstaltet ein jährliches Theaterfestival und zahlreiche kulturelle Events.", "Ein wichtiges akademisches Zentrum in der Region während des 16. und 17. Jahrhunderts."],
      hu: ["1580-ban alapította Jan Zamoyski lengyel nemes.", "Bernardo Morando olasz építész tervezte.", "Gyakran nevezik \"Észak Padovájának\" vagy \"a reneszánsz gyöngyszemének\".", "Erődvárosként szolgált, amely több ostromnak is sikeresen ellenállt.", "A kereskedelem, az oktatás és a kultúra fontos központjává vált.", "A második világháborúig jelentős zsidó közösséggel rendelkezett.", "Évente színházi fesztiválnak és számos kulturális eseménynek ad otthont.", "A régió fontos akadémiai központja volt a 16. és 17. században."],
      ro: ["Fondat în 1580 de nobilul polonez Jan Zamoyski.", "Proiectat de arhitectul italian Bernardo Morando.", "Adesea numit \"Padova Nordului\" sau \"Perla Renașterii\".", "A servit ca oraș fortăreață care a rezistat cu succes mai multor asedii.", "A devenit un important centru pentru comerț, educație și cultură.", "A avut o comunitate evreiască semnificativă până la al Doilea Război Mondial.", "Găzduiește un festival anual de teatru și numeroase evenimente culturale.", "Un important centru academic din regiune în secolele XVI și XVII."],
      en: ["Founded in 1580 by the Polish nobleman Jan Zamoyski.", "Designed by the Italian architect Bernardo Morando.", "Often referred to as the \"Padua of the North\" or the \"Pearl of the Renaissance\".", "Served as a fortress city that successfully resisted multiple sieges.", "Became an important center for trade, education, and culture.", "Had a significant Jewish community until World War II.", "Hosts an annual theater festival and numerous cultural events.", "An important academic center in the region during the 16th and 17th centuries."],
    },
    image: "/geo-images/poland/zamosc-city.webp",
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
    facts: {
      de: ["Wurde 1959 in der Gebirgskette der Sudeten gegründet.", "Teilt sich eine Grenze mit einem ähnlichen Nationalpark in der Tschechischen Republik.", "Schützt einzigartige alpine Landschaften und Torfmoore.", "Die Schneekoppe (Śnieżka) ist mit 1603 Metern der höchste Gipfel im Park.", "Beherbergt dramatische Gletscherkessel wie Śnieżne Kotły.", "Heimat seltener Pflanzenarten, die aus der Eiszeit überlebt haben.", "Bietet wunderschöne Wasserfälle wie Kamieńczyk und Szklarka.", "Seit 1992 als UNESCO-Biosphärenreservat anerkannt."],
      hu: ["1959-ben alapították a Szudéták hegységben.", "Határos egy hasonló nemzeti parkkal Csehországban.", "Egyedülálló alpesi tájakat és tőzeglápokat véd.", "A Śnieżka a park legmagasabb csúcsa, 1603 méter magas.", "Drámai gleccserkatlanokat tartalmaz, mint például a Śnieżne Kotły.", "A jégkorszakból fennmaradt ritka növényfajoknak ad otthont.", "Gyönyörű vízesésekkel rendelkezik, mint a Kamieńczyk és a Szklarka.", "1992 óta elismert UNESCO bioszféra-rezervátum."],
      ro: ["Înființat în 1959 în lanțul muntos Sudeți.", "Împarte o graniță cu un parc național similar din Republica Cehă.", "Protejează peisaje alpine unice și turbării.", "Śnieżka este cel mai înalt vârf din parc, la 1603 metri.", "Conține circuri glaciare dramatice, cum ar fi Śnieżne Kotły.", "Găzduiește specii de plante rare care au supraviețuit din Era Glaciară.", "Prezintă cascade frumoase, precum Kamieńczyk și Szklarka.", "Recunoscut ca rezervație a biosferei UNESCO din 1992."],
      en: ["Established in 1959 in the Sudetes mountain range.", "Shares a border with a similar national park in the Czech Republic.", "Protects unique alpine landscapes and peat bogs.", "Śnieżka is the highest peak in the park at 1603 meters.", "Contains dramatic glacial cirques like Śnieżne Kotły.", "Home to rare plant species surviving from the Ice Age.", "Features beautiful waterfalls such as Kamieńczyk and Szklarka.", "Recognized as a UNESCO biosphere reserve since 1992."],
    },
    image: "/geo-images/poland/karkonosze-np.webp",
    },
    {
    id: "bieszczady-np",
    type: "landmark",
    parent: "PL-PK",
    coords: [22.65, 49.15],
    name: { de: "Nationalpark Bieszczady", hu: "Bieszczady Nemzeti Park", ro: "Parcul Național Bieszczady", en: "Bieszczady NP" },
    description: {
      de: "Der Bieszczady-Nationalpark liegt im äußersten Südosten Polens und grenzt an die Slowakei und die Ukraine. Er ist der drittgrößte Nationalpark des Landes und wurde 1973 gegründet. Der Park ist berühmt für seine einzigartigen „Połoniny“, hochgelegene Bergwiesen, die einen Panoramablick bieten. Er schützt weite Gebiete urtümlicher Buchenwälder und eine vielfältige Tierwelt, darunter Bären, Wölfe und Luchse. Er ist Teil des Biosphärenreservats Ostkarpaten.",
      hu: "A Bieszczady Nemzeti Park Lengyelország legdélkeletibb részén fekszik, Szlovákiával és Ukrajnával határos. Ez az ország harmadik legnagyobb nemzeti parkja, amelyet 1973-ban alapítottak. A park híres egyedülálló „połoniny”-jairól, amelyek panorámás kilátást nyújtó magashegyi rétek. Hatalmas kiterjedésű ősbükkösöket és változatos vadvilágot véd, beleértve a medvéket, farkasokat és hiúzokat. A Keleti-Kárpátok Bioszféra-rezervátum részét képezi.",
      ro: "Parcul Național Bieszczady este situat în extremitatea de sud-est a Poloniei, la granița cu Slovacia și Ucraina. Este al treilea parc național ca mărime din țară, înființat în 1973. Parcul este renumit pentru „połoniny”-urile sale unice, care sunt pajiști de înaltă altitudine ce oferă vederi panoramice. Protejează suprafețe întinse de păduri virgine de fag și o faună diversă, inclusiv urși, lupi și râși. Face parte din Rezervația Biosferei Carpații Orientali.",
      en: "Bieszczady National Park is located in the extreme southeast of Poland, bordering Slovakia and Ukraine. It is the third largest national park in the country, established in 1973. The park is famous for its unique \"połoniny\", which are high mountain meadows providing panoramic views. It protects large areas of primeval beech forests and a diverse range of wildlife, including bears, wolves, and lynxes. It forms part of the East Carpathian Biosphere Reserve.",
    },
    facts: {
      de: ["Liegt im südöstlichen Zipfel Polens.", "1973 gegründet und seither mehrfach erweitert.", "Bekannt für seine charakteristischen „Połoniny“ oder alpinen Wiesen.", "Schützt riesige Gebiete natürlicher Buchenurwälder.", "Heimat großer Raubtiere wie Braunbären, Wölfe und Eurasische Luchse.", "Teil des UNESCO-Biosphärenreservats Ostkarpaten.", "Der höchste Gipfel innerhalb des Parks ist die Tarnica mit 1346 Metern.", "Bietet einige der am dünnsten besiedelten und wildesten Landschaften Europas."],
      hu: ["Lengyelország délkeleti sarkában található.", "1973-ban alapították, és azóta többször bővítették.", "Jellegzetes „połoniny” nevű alpesi rétjeiről ismert.", "Hatalmas, természetes ősbükkösöket véd.", "Olyan nagytestű ragadozóknak ad otthont, mint a barnamedve, a farkas és az eurázsiai hiúz.", "Az UNESCO Keleti-Kárpátok Bioszféra-rezervátumának része.", "A park legmagasabb csúcsa a Tarnica, 1346 méteres magassággal.", "Európa legritkábban lakott és legvadabb tájait kínálja."],
      ro: ["Situat în colțul de sud-est al Poloniei.", "Înființat în 1973 și extins de mai multe ori de atunci.", "Cunoscut pentru caracteristicile „połoniny” sau pajiștile alpine.", "Protejează suprafețe vaste de păduri naturale virgine de fag.", "Găzduiește prădători mari, precum urșii bruni, lupii și râșii eurasiatici.", "Face parte din Rezervația Biosferei UNESCO Carpații Orientali.", "Cel mai înalt vârf din interiorul parcului este Tarnica, la 1346 de metri.", "Oferă unele dintre cele mai puțin populate și mai sălbatice peisaje din Europa."],
      en: ["Located in the southeastern corner of Poland.", "Established in 1973 and expanded several times since.", "Known for its characteristic \"połoniny\" or alpine meadows.", "Protects vast areas of natural primeval beech forests.", "Home to large predators like brown bears, wolves, and Eurasian lynxes.", "Part of the UNESCO East Carpathian Biosphere Reserve.", "The highest peak within the park is Tarnica at 1346 meters.", "It offers some of the least populated and wildest landscapes in Europe."],
    },
    image: "/geo-images/poland/bieszczady-np.webp",
    },
    {
    id: "morskie-oko",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.08, 49.2],
    name: { de: "Meerauge", hu: "Morskie Oko", ro: "Morskie Oko", en: "Morskie Oko" },
    description: {
      de: "Morskie Oko, was „Meerauge“ bedeutet, ist der größte und vierttiefste See der Tatra und liegt im Süden Polens. Er befindet sich in der Hohen Tatra auf einer Höhe von 1395 Metern über dem Meeresspiegel innerhalb des Tatra-Nationalparks. Umgeben von majestätischen Gipfeln, darunter der Rysy, Polens höchster Berg, ist es eines der beliebtesten Touristenziele des Landes. Der See hat einen natürlichen Forellenbestand und verfügt über kristallklares Wasser. An seinem Moränenufer steht eine historische Berghütte, die Wanderern Schutz bietet.",
      hu: "A Morskie Oko, azaz a „Tengerszem”, a Tátra legnagyobb és negyedik legmélyebb tava, amely Dél-Lengyelországban található. A Magas-Tátrában, 1395 méteres tengerszint feletti magasságban, a Tátrai Nemzeti Park területén fekszik. Fenséges csúcsok, köztük a Rysy, Lengyelország legmagasabb hegye veszi körül, így az ország egyik legnépszerűbb turisztikai célpontja. A tó kristálytiszta vizű, és természetes pisztrángpopulációval rendelkezik. Morénapartján egy történelmi menedékház áll.",
      ro: "Morskie Oko, adică „Ochiul Mării”, este cel mai mare și al patrulea cel mai adânc lac din Munții Tatra, situat în sudul Poloniei. Se află în Tatra Înaltă, la o altitudine de 1395 de metri deasupra nivelului mării, în Parcul Național Tatra. Înconjurat de vârfuri maiestuoase, inclusiv Rysy, cel mai înalt munte din Polonia, este una dintre cele mai populare destinații turistice din țară. Lacul este populat natural cu păstrăvi și are ape cristaline.",
      en: "Morskie Oko, meaning \"Eye of the Sea\", is the largest and fourth deepest lake in the Tatra Mountains, located in southern Poland. It lies in the High Tatras at an elevation of 1395 meters above sea level within the Tatra National Park. Surrounded by majestic peaks, including Rysy, Poland's highest mountain, it is one of the most popular tourist destinations in the country. The lake is naturally stocked with trout and features crystal-clear waters. A historic mountain hut stands on its moraine shore, offering shelter to hikers.",
    },
    facts: {
      de: ["Größter See der Tatra, im Süden Polens gelegen.", "Befindet sich auf einer Höhe von 1395 Metern über dem Meeresspiegel.", "Der Name übersetzt sich als „Meerauge“.", "Umgeben von Gipfeln, die sich über 1000 Meter über die Seeoberfläche erheben.", "Rysy, Polens höchster Gipfel, ist vom See aus sichtbar.", "Ist natürlich mit Forellen besiedelt, was für Tatraseen selten ist.", "Erreichbar über einen beliebten, 9 Kilometer langen, asphaltierten Wanderweg.", "Verfügt über ein historisches Berghaus aus dem Jahr 1908 an seinem Ufer."],
      hu: ["A Tátra legnagyobb tava, Dél-Lengyelországban található.", "1395 méteres tengerszint feletti magasságban fekszik.", "A neve magyarul „Tengerszemet” jelent.", "Olyan csúcsok veszik körül, amelyek több mint 1000 méterrel emelkednek a tó felszíne fölé.", "Lengyelország legmagasabb csúcsa, a Rysy (Tengerszem-csúcs) is látható a tótól.", "Természetes pisztrángpopuláció él benne, ami ritka a tátrai tavaknál.", "Egy népszerű, 9 kilométeres aszfaltozott túraútvonalon közelíthető meg.", "A partján egy 1908-ban épült történelmi menedékház áll."],
      ro: ["Cel mai mare lac din Munții Tatra, situat în sudul Poloniei.", "Situat la o altitudine de 1395 de metri deasupra nivelului mării.", "Se traduce prin „Ochiul Mării” în română.", "Înconjurat de vârfuri care se înalță la peste 1000 de metri deasupra suprafeței lacului.", "Rysy, cel mai înalt vârf din Polonia, este vizibil de la lac.", "Populat natural cu păstrăvi, ceea ce este rar pentru lacurile din Tatra.", "Poate fi atins pe un traseu de drumeție asfaltat popular de 9 kilometri.", "Dispune de o cabană montană istorică construită în 1908 pe țărmul său."],
      en: ["Largest lake in the Tatra Mountains, situated in southern Poland.", "Located at an elevation of 1395 meters above sea level.", "Translates to \"Eye of the Sea\" in English.", "Surrounded by peaks that rise over 1000 meters above the lake's surface.", "Rysy, Poland's highest peak, is visible from the lake.", "Naturally populated with trout, which is rare for Tatra lakes.", "Can be reached by a popular 9-kilometer paved hiking trail.", "Features a historic mountain chalet built in 1908 on its shore."],
    },
    image: "/geo-images/poland/morskie-oko.webp",
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
    facts: {
      de: ["Die größte und bedeutendste Stadt im Osten Polens.", "Besitzt eine wunderschön erhaltene historische Altstadt mit Renaissance-Architektur.", "Spielte eine entscheidende Rolle in der Geschichte als Ort der Union von Lublin im Jahr 1569.", "Das Lubliner Schloss beherbergt die Dreifaltigkeitskapelle, die mit einzigartigen byzantinischen Fresken geschmückt ist.", "Historisch als das „Jüdische Oxford“ bekannt, aufgrund seines reichen jüdischen Erbes.", "Das Staatliche Museum Majdanek befindet sich am Stadtrand.", "Ein wichtiger akademischer Knotenpunkt, Heimat mehrerer prominenter Universitäten.", "Bekannt für lebhafte kulturelle Veranstaltungen wie den Carnaval Sztukmistrzów."],
      hu: ["Kelet-Lengyelország legnagyobb és legjelentősebb városa.", "Gyönyörűen megőrzött, történelmi óvárossal rendelkezik reneszánsz építészettel.", "Kulcsszerepet játszott a történelemben mint az 1569-es lublini unió helyszíne.", "A lublini várban található a Szentháromság-kápolna, egyedi bizánci freskókkal.", "Gazdag zsidó öröksége miatt történelmileg „zsidó Oxfordként” ismerték.", "A város szélén található a Majdanek Állami Múzeum.", "Jelentős akadémiai központ, számos kiemelkedő egyetemnek ad otthont.", "Híres az olyan pezsgő kulturális eseményekről, mint a Carnaval Sztukmistrzów."],
      ro: ["Cel mai mare și cel mai semnificativ oraș din estul Poloniei.", "Prezintă un Oraș Vechi istoric, frumos conservat, cu arhitectură renascentistă.", "A jucat un rol crucial în istorie ca loc al Uniunii de la Lublin în 1569.", "Castelul Lublin găzduiește Capela Sfintei Treimi, decorată cu fresce bizantine unice.", "Cunoscut istoric sub numele de „Oxfordul evreiesc” datorită bogatei sale moșteniri evreiești.", "Muzeul de Stat Majdanek este situat la periferia orașului.", "Un hub academic major, găzduind mai multe universități proeminente.", "Faimos pentru găzduirea de evenimente culturale vibrante, precum Carnaval Sztukmistrzów."],
      en: ["The largest and most significant city in eastern Poland.", "Features a beautifully preserved, historic Old Town with Renaissance architecture.", "Played a crucial role in history as the site of the Union of Lublin in 1569.", "Lublin Castle houses the Holy Trinity Chapel, decorated with unique Byzantine frescoes.", "Historically known as the \"Jewish Oxford\" due to its rich Jewish heritage.", "The Majdanek State Museum is located on the outskirts of the city.", "A major academic hub, home to several prominent universities.", "Famous for hosting vibrant cultural events like the Carnaval Sztukmistrzów."],
    },
    image: "/geo-images/poland/lublin.webp"
  },
  {
    id: "pl-katowice",
    type: "city",
    parent: "PL-SL",
    coords: [19.0216, 50.2649],
    name: { de: "Kattowitz", hu: "Katowice", ro: "Katowice", en: "Katowice" },
    description: {
      de: "Kattowitz ist das Herz der industriellen Region Schlesien. Die Stadt hat sich in den letzten Jahren zu einem Zentrum für moderne Architektur und Kultur gewandelt. Die Spodek-Arena ist ein Wahrzeichen der Stadt und Austragungsort für Großveranstaltungen. Kattowitz verbindet sein industrielles Erbe mit moderner Innovation.",
      hu: "Katowice a sziléziai ipari régió szíve. A város az elmúlt években a modern építészet és kultúra központjává vált. A Spodek aréna a város jelképe és nagy rendezvények helyszíne. Katowice ötvözi ipari örökségét a modern innovációval.",
      ro: "Katowice este inima regiunii industriale Silezia. Orașul s-a transformat în ultimii ani într-un centru pentru arhitectura și cultura modernă. Arena Spodek este un punct de reper al orașului și locul de desfășurare a unor evenimente majore. Katowice îmbină moștenirea sa industrială cu inovația modernă.",
      en: "Katowice is the heart of the Silesian industrial region. The city has transformed in recent years into a center for modern architecture and culture. The Spodek Arena is a landmark of the city and host to major events. Katowice blends its industrial heritage with modern innovation."
    },
    facts: {
      de: ["Zentrum der Metropolregion Schlesien.", "Bekannt für die Spodek-Arena.", "Hat ein reiches industrielles Erbe.", "Ausgezeichnet als UNESCO-Musikstadt.", "Standort des Schlesischen Museums.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["A sziléziai metropolisz központja.", "Híres a Spodek arénáról.", "Gazdag ipari örökséggel rendelkezik.", "UNESCO zenei városa díjazott.", "A Sziléziai Múzeum helyszíne.", "Fontos közlekedési csomópont."],
      ro: ["Centrul zonei metropolitane Silezia.", "Cunoscută pentru Arena Spodek.", "Are o bogată moștenire industrială.", "Premiată ca Oraș al Muzicii UNESCO.", "Sediul Muzeului Sileziei.", "Important nod de transport."],
      en: ["Center of the Silesian metropolis.", "Known for the Spodek Arena.", "Has a rich industrial heritage.", "Awarded UNESCO City of Music.", "Location of the Silesian Museum.", "Important transportation hub."]
    },
    image: "/geo-images/poland/katowice.webp"
  },
  {
    id: "pl-czestochowa",
    type: "city",
    parent: "PL-SL",
    coords: [19.1204, 50.8118],
    name: { de: "Tschenstochau", hu: "Częstochowa", ro: "Częstochowa", en: "Częstochowa" },
    description: {
      de: "Tschenstochau ist vor allem als spirituelles Herz Polens bekannt. Das Kloster Jasna Góra zieht jährlich Millionen von Pilgern an, die die Ikone der Schwarzen Madonna verehren. Die Stadt hat auch eine lebhafte industrielle und kulturelle Szene. Tschenstochau ist ein Ort der Geschichte und tiefer religiöser Bedeutung.",
      hu: "Częstochowa leginkább Lengyelország spirituális központjaként ismert. A Jasna Góra-i kolostor zarándokok millióit vonzza évente, akik a Fekete Madonna ikont tisztelik. A város élénk ipari és kulturális élettel is rendelkezik. Częstochowa a történelem és a mély vallási jelentőség helye.",
      ro: "Częstochowa este cunoscută în primul rând ca inima spirituală a Poloniei. Mănăstirea Jasna Góra atrage milioane de pelerini anual care venerează icoana Madonei Negre. Orașul are, de asemenea, o scenă industrială și culturală vibrantă. Częstochowa este un loc de istorie și profundă semnificație religioasă.",
      en: "Częstochowa is best known as the spiritual heart of Poland. The Jasna Góra Monastery attracts millions of pilgrims annually who venerate the icon of the Black Madonna. The city also has a vibrant industrial and cultural scene. Częstochowa is a place of history and deep religious significance."
    },
    facts: {
      de: ["Heimat des Klosters Jasna Góra.", "Wichtigster Pilgerort Polens.", "Besitzt das Gemälde der Schwarzen Madonna.", "Hat starke industrielle Wurzeln.", "Besitzt eine lange Allee in der Innenstadt.", "Zieht jährlich Millionen Besucher an."],
      hu: ["A Jasna Góra kolostor otthona.", "Lengyelország legfontosabb zarándokhelye.", "A Fekete Madonna festményének őrzője.", "Erős ipari gyökerekkel rendelkezik.", "Hosszú sétálóutcája van a belvárosban.", "Évente látogatók millióit vonzza."],
      ro: ["Găzduiește mănăstirea Jasna Góra.", "Cel mai important loc de pelerinaj din Polonia.", "Deține pictura Madonei Negre.", "Are rădăcini industriale puternice.", "Deține un bulevard lung în centrul orașului.", "Atrage milioane de vizitatori anual."],
      en: ["Home to the Jasna Góra Monastery.", "Most important pilgrimage site in Poland.", "Houses the painting of the Black Madonna.", "Has strong industrial roots.", "Features a long avenue in the city center.", "Attracts millions of visitors annually."]
    },
    image: "/geo-images/poland/czestochowa.webp"
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
    facts: {
      de: ["Verfügt über eine reiche Königsgeschichte.", "Bekannt für die Radom Air Show.", "Zweitgrößte Stadt in Masowien.", "Heimat vieler gotischer und barocker Kirchen.", "Historisches Zentrum der Waffenproduktion.", "Hat eine gut erhaltene Altstadt."],
      hu: ["Gazdag királyi történelemmel rendelkezik.", "Híres a radomi repülőnapról.", "Mazóvia második legnagyobb városa.", "Számos gótikus és barokk templom otthona.", "A fegyvergyártás történelmi központja.", "Jól megőrzött óvárosa van."],
      ro: ["Are o bogată istorie regală.", "Cunoscut pentru Radom Air Show.", "Al doilea oraș ca mărime din Mazovia.", "Găzduiește multe biserici gotice și baroce.", "Centru istoric al producției de arme.", "Are un oraș vechi bine conservat."],
      en: ["Features a rich royal history.", "Known for the Radom Air Show.", "Second-largest city in Masovia.", "Home to many Gothic and Baroque churches.", "Historical center of weapons production.", "Has a well-preserved Old Town."]
    },
    image: "/geo-images/poland/radom.webp"
  },
  {
    id: "pl-sopot",
    type: "city",
    parent: "PL-PM",
    coords: [18.5603, 54.4416],
    name: { de: "Sopot", hu: "Sopot", ro: "Sopot", en: "Sopot" },
    description: {
      de: "Sopot ist ein eleganter Küstenort an der Ostsee, der zur sogenannten Dreistadt gehört. Die Stadt ist berühmt für ihre historische Holzseebrücke, die längste Europas. Besucher genießen die feinen Sandstrände, das lebhafte Nachtleben und die einzigartige Bäderarchitektur. Das Krumme Haus ist eine der kuriosesten Sehenswürdigkeiten der Stadt.",
      hu: "Sopot elegáns tengerparti üdülőváros a Balti-tengernél, amely az úgynevezett Hármasváros része. A város híres történelmi fa mólójáról, amely Európa leghosszabbika. A látogatók élvezhetik a finom homokos strandokat, az élénk éjszakai életet és a különleges fürdőépítészetet. A Görbe Ház a város egyik legfurcsább látványossága.",
      ro: "Sopot este o stațiune elegantă de pe coasta Mării Baltice, care face parte din așa-numitul Tricity. Orașul este renumit pentru debarcaderul său istoric din lemn, cel mai lung din Europa. Vizitatorii se bucură de plajele cu nisip fin, de viața de noapte vibrantă și de arhitectura balneară unică. Casa Strâmbă este una dintre cele mai curioase atracții ale orașului.",
      en: "Sopot is an elegant seaside resort on the Baltic Sea, part of the so-called Tricity. The city is famous for its historical wooden pier, the longest in Europe. Visitors enjoy the fine sandy beaches, vibrant nightlife, and unique spa architecture. The Crooked House is one of the city's most curious attractions."
    },
    facts: {
      de: ["Teil der Dreistadt-Metropole.", "Besitzt die längste Holzseebrücke in Europa.", "Berühmt für das Sopot Festival.", "Hat das berühmte 'Krumme Haus'.", "Bietet beliebte Ostseestrände.", "Eleganter Kurort mit langer Tradition."],
      hu: ["A Hármasváros metropolisz része.", "Itt van Európa leghosszabb fa mólója.", "Híres a Sopoti Fesztiválról.", "Itt található a híres 'Görbe Ház'.", "Népszerű balti-tengeri strandokat kínál.", "Elegáns gyógyüdülőhely nagy hagyományokkal."],
      ro: ["Parte a metropolei Tricity.", "Deține cel mai lung debarcader de lemn din Europa.", "Renumit pentru Festivalul Sopot.", "Are faimoasa 'Casă Strâmbă'.", "Oferă plaje populare la Marea Baltică.", "Stațiune elegantă cu o lungă tradiție."],
      en: ["Part of the Tricity metropolis.", "Features the longest wooden pier in Europe.", "Famous for the Sopot Festival.", "Has the famous 'Crooked House'.", "Offers popular Baltic Sea beaches.", "Elegant spa resort with a long tradition."]
    },
    image: "/geo-images/poland/sopot.webp"
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
    facts: {
      de: ["Hauptstadt der Woiwodschaft Karpatenvorland.", "Bietet ein faszinierendes unterirdisches Labyrinth.", "Wichtiger Knotenpunkt für die Luftfahrtindustrie.", "Besitzt ein imposantes Lubomirski-Schloss.", "Bekannt als saubere und sichere Stadt.", "Tor zu den Bieszczady-Bergen."],
      hu: ["A Kárpátaljai vajdaság fővárosa.", "Lenyűgöző földalatti labirintust kínál.", "A repülőgépipar fontos csomópontja.", "Impozáns Lubomirski-kastéllyal rendelkezik.", "Tiszta és biztonságos városként ismert.", "A Bieszczady-hegység kapuja."],
      ro: ["Capitala voievodatului Subcarpatia.", "Oferă un labirint subteran fascinant.", "Nod important pentru industria aviației.", "Deține un impunător Castel Lubomirski.", "Cunoscut ca un oraș curat și sigur.", "Poarta către Munții Bieszczady."],
      en: ["Capital of the Subcarpathian Voivodeship.", "Offers a fascinating underground labyrinth.", "Important hub for the aviation industry.", "Features an imposing Lubomirski Castle.", "Known as a clean and safe city.", "Gateway to the Bieszczady Mountains."]
    },
    image: "/geo-images/poland/rzeszow.webp"
  },
  {
    id: "pl-gdynia",
    type: "city",
    parent: "PL-PM",
    coords: [18.5311, 54.5189],
    name: { de: "Gdingen", hu: "Gdynia", ro: "Gdynia", en: "Gdynia" },
    description: {
      de: "Gdynia ist eine dynamische Hafenstadt, die nach dem Ersten Weltkrieg aus einem kleinen Fischerdorf entstand. Sie ist berühmt für ihre durchgängige modernistische Architektur. Als Teil der Dreistadt bietet sie breite Strände, Museen am Wasser und einen großen Fährhafen. Die Stadt ist ein Symbol des maritimen Aufbruchs Polens.",
      hu: "Gdynia egy dinamikus kikötőváros, amely az első világháború után nőtt ki egy kis halászfaluból. Híres egységes modernista építészetéről. A Hármasváros részeként széles strandokat, vízparti múzeumokat és nagy kompkikötőt kínál. A város Lengyelország tengeri felemelkedésének szimbóluma.",
      ro: "Gdynia este un oraș port dinamic care a crescut dintr-un mic sat de pescari după Primul Război Mondial. Este renumit pentru arhitectura sa modernistă consecventă. Ca parte a Tricity, oferă plaje largi, muzee pe malul apei și un mare terminal de feriboturi. Orașul este un simbol al ascensiunii maritime a Poloniei.",
      en: "Gdynia is a dynamic port city that grew from a small fishing village after World War I. It is famous for its consistent modernist architecture. As part of the Tricity, it offers wide beaches, waterfront museums, and a large ferry terminal. The city is a symbol of Poland's maritime rise."
    },
    facts: {
      de: ["Gegründet in den 1920er Jahren.", "Bedeutendstes Zentrum polnischer Meereswirtschaft.", "Berühmt für modernistische Architektur.", "Heimat historischer Museumsschiffe.", "Gastgeber des Polnischen Filmfestivals.", "Teil der Metropolregion Dreistadt."],
      hu: ["Az 1920-as években alapították.", "A lengyel tengergazdaság legjelentősebb központja.", "Híres modernista építészetéről.", "Történelmi múzeumhajók otthona.", "A Lengyel Filmfesztivál házigazdája.", "A Hármasváros metropolisz része."],
      ro: ["Fondat în anii 1920.", "Cel mai important centru al economiei maritime poloneze.", "Renumit pentru arhitectura modernistă.", "Găzduiește nave-muzeu istorice.", "Gazda Festivalului de Film Polonez.", "Parte a zonei metropolitane Tricity."],
      en: ["Founded in the 1920s.", "Most important center of the Polish maritime economy.", "Famous for modernist architecture.", "Home to historical museum ships.", "Host of the Polish Film Festival.", "Part of the Tricity metropolitan area."]
    },
    image: "/geo-images/poland/gdynia.webp"
  },
  {
    id: "pl-malbork-castle",
    type: "historical",
    parent: "PL-PM",
    coords: [19.0291, 54.0399],
    name: { de: "Marienburg", hu: "Malbork vára", ro: "Castelul Malbork", en: "Malbork Castle" },
    description: {
      de: "Die Marienburg ist die mächtigste mittelalterliche Festung Europas und die größte Backsteinburg der Welt. Sie wurde vom Deutschen Orden im 13. Jahrhundert erbaut und diente lange als Hauptsitz der Kreuzritter. Die majestätische Anlage liegt malerisch am Ufer der Nogat. Heute zieht das UNESCO-Welterbe unzählige Geschichtsinteressierte an.",
      hu: "A malborki vár Európa leghatalmasabb középkori erődítménye és a világ legnagyobb téglaépítésű vára. A Német Lovagrend építette a 13. században, és sokáig a keresztesek székhelyeként szolgált. A fenséges komplexum festői környezetben fekszik a Nogat folyó partján. Az UNESCO világörökség ma számtalan történelemrajongót vonz.",
      ro: "Castelul Malbork este cea mai puternică fortăreață medievală din Europa și cel mai mare castel de cărămidă din lume. A fost construit de Ordinul Teutonic în secolul al XIII-lea și a servit mult timp ca sediu al cruciaților. Complexul maiestuos este situat pitoresc pe malul râului Nogat. Astăzi, situl Patrimoniului Mondial UNESCO atrage nenumărați pasionați de istorie.",
      en: "Malbork Castle is the most powerful medieval fortress in Europe and the largest brick castle in the world. It was built by the Teutonic Order in the 13th century and long served as the headquarters of the crusaders. The majestic complex is picturesquely situated on the banks of the Nogat River. Today, the UNESCO World Heritage Site attracts countless history buffs."
    },
    facts: {
      de: ["Größte Backsteinburg der Welt.", "Ehemaliger Sitz des Deutschen Ordens.", "UNESCO-Weltkulturerbe seit 1997.", "Klassisches Beispiel mittelalterlicher Wehranlagen.", "Besteht aus drei separaten Burgen.", "Eines der bedeutendsten Denkmäler Polens."],
      hu: ["A világ legnagyobb téglavára.", "A Német Lovagrend egykori székhelye.", "1997 óta UNESCO világörökség.", "Középkori védművek klasszikus példája.", "Három különálló várból áll.", "Lengyelország egyik legjelentősebb műemléke."],
      ro: ["Cel mai mare castel de cărămidă din lume.", "Fostul sediu al Ordinului Teutonic.", "Patrimoniu Mondial UNESCO din 1997.", "Exemplu clasic de fortificații medievale.", "Constă din trei castele separate.", "Unul dintre cele mai importante monumente din Polonia."],
      en: ["Largest brick castle in the world.", "Former seat of the Teutonic Order.", "UNESCO World Heritage Site since 1997.", "Classic example of medieval fortifications.", "Consists of three separate castles.", "One of the most important monuments in Poland."]
    },
    image: "/geo-images/poland/malbork.webp"
  },
  {
    id: "pl-wawel-castle",
    type: "historical",
    parent: "PL-MA",
    coords: [19.9354, 50.0540],
    name: { de: "Wawel", hu: "Wawel", ro: "Castelul Wawel", en: "Wawel Castle" },
    description: {
      de: "Das Wawel-Schloss thront majestätisch auf einem Hügel über der Weichsel in Krakau. Es war jahrhundertelang die Residenz der polnischen Könige und das Zentrum der staatlichen Macht. Die Anlage vereint verschiedene Baustile, von Romanik bis zur Renaissance. Neben dem Schloss befindet sich die berühmte Wawel-Kathedrale mit den Königsgräbern.",
      hu: "A Wawel királyi vár fenségesen magasodik a Visztula fölé Krakkóban. Évszázadokon át a lengyel királyok rezidenciája és az állami hatalom központja volt. A komplexum különböző építészeti stílusokat ötvöz, a romántól a reneszánszig. A várkastély mellett található a híres Wawel-székesegyház a királyi sírokkal.",
      ro: "Castelul Wawel se înalță maiestuos pe un deal deasupra râului Vistula din Cracovia. A fost reședința regilor polonezi și centrul puterii de stat timp de secole. Complexul combină diferite stiluri arhitecturale, de la romanic la renascentist. Lângă castel se află faimoasa Catedrală Wawel cu mormintele regale.",
      en: "Wawel Castle sits majestically on a hill overlooking the Vistula River in Krakow. It was the residence of Polish kings and the center of state power for centuries. The complex combines various architectural styles, from Romanesque to Renaissance. Next to the castle is the famous Wawel Cathedral with the royal tombs."
    },
    facts: {
      de: ["Historischer Sitz der polnischen Könige.", "Symbol der nationalen Identität Polens.", "Beherbergt den prächtigen Renaissance-Hof.", "UNESCO-Welterbe im Herzen Krakaus.", "Wawel-Drachenhöhle liegt unter dem Hügel.", "Die Kathedrale enthält viele Königsgräber."],
      hu: ["A lengyel királyok történelmi székhelye.", "A lengyel nemzeti identitás szimbóluma.", "Lenyűgöző reneszánsz udvarral büszkélkedhet.", "UNESCO világörökség Krakkó szívében.", "A Wawel sárkányának barlangja a domb alatt található.", "A katedrális sok királyi sírt őriz."],
      ro: ["Sediul istoric al regilor polonezi.", "Simbol al identității naționale poloneze.", "Găzduiește magnifica curte renascentistă.", "Patrimoniu UNESCO în inima Cracoviei.", "Peștera Dragonului Wawel se află sub deal.", "Catedrala conține multe morminte regale."],
      en: ["Historical seat of the Polish kings.", "Symbol of Poland's national identity.", "Features a magnificent Renaissance courtyard.", "UNESCO World Heritage site in the heart of Krakow.", "Wawel Dragon's Den is beneath the hill.", "The cathedral holds many royal tombs."]
    },
    image: "/geo-images/poland/wawel-castle.webp"
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
    facts: {
      de: ["Berühmt für Renaissance-Architektur.", "Treffpunkt für Künstler und Maler.", "Historischer Binnenhafen an der Weichsel.", "Besitzt eine mittelalterliche Burgruine.", "Berühmt für hefeteiggebildete Hähne.", "Hat alte und stimmungsvolle Getreidespeicher."],
      hu: ["Reneszánsz építészetéről híres.", "Művészek és festők találkozóhelye.", "Történelmi belföldi kikötő a Visztulán.", "Középkori várrommal rendelkezik.", "Híres a kelt tésztából sült kakasokról.", "Régi és hangulatos magtárai vannak."],
      ro: ["Renumit pentru arhitectura renascentistă.", "Loc de întâlnire pentru artiști și pictori.", "Port interior istoric pe Vistula.", "Are o ruină de castel medieval.", "Renumit pentru cocoșii copți din aluat cu drojdie.", "Are grânare vechi și pline de atmosferă."],
      en: ["Famous for Renaissance architecture.", "Meeting place for artists and painters.", "Historical inland port on the Vistula.", "Has a medieval castle ruin.", "Famous for yeast dough roosters.", "Features old and atmospheric granaries."]
    },
    image: "/geo-images/poland/kazimierz-dolny.webp"
  },
  {
    id: "pl-torun-old-town",
    type: "historical",
    parent: "PL-KP",
    coords: [18.6041, 53.0103],
    name: { de: "Toruńer Altstadt", hu: "Toruńi óváros", ro: "Orașul Vechi Toruń", en: "Toruń Old Town" },
    description: {
      de: "Die Altstadt von Toruń ist eine der am besten erhaltenen mittelalterlichen Stätten Europas und UNESCO-Welterbe. Sie begeistert mit gotischen Backsteinkirchen, dem prächtigen Rathaus und den originalen Stadtmauern. Die Stadt ist weltbekannt als Geburtsort von Nikolaus Kopernikus. Ein Spaziergang durch die engen Gassen fühlt sich an wie eine Zeitreise.",
      hu: "Toruń óvárosa Európa egyik legjobb állapotban fennmaradt középkori helyszíne és UNESCO világörökség. Gótikus téglatemplomaival, díszes városházájával és eredeti városfalaival nyűgöz le mindenkit. A város Nikolausz Kopernikusz szülőhelyeként világhírű. Egy séta a szűk utcákon olyan, mint egy időutazás.",
      ro: "Orașul Vechi din Toruń este unul dintre cele mai bine conservate situri medievale din Europa și face parte din Patrimoniul Mondial UNESCO. Încântă prin bisericile gotice din cărămidă, primăria magnifică și zidurile originale ale orașului. Orașul este renumit în întreaga lume ca locul de naștere al lui Nicolaus Copernic. O plimbare pe străzile înguste se simte ca o călătorie în timp.",
      en: "The Old Town of Toruń is one of the best-preserved medieval sites in Europe and a UNESCO World Heritage Site. It delights with Gothic brick churches, the magnificent town hall, and the original city walls. The city is world-famous as the birthplace of Nicolaus Copernicus. A walk through the narrow streets feels like a journey through time."
    },
    facts: {
      de: ["Zählt zum UNESCO-Weltkulturerbe.", "Geburtsort des Astronomen Nikolaus Kopernikus.", "Berühmt für die traditionellen Lebkuchen.", "Überragende Beispiele der Backsteingotik.", "Zerstörungen im Zweiten Weltkrieg entgangen.", "Besitzt einen Schiefen Turm."],
      hu: ["Az UNESCO világörökség része.", "Nikolausz Kopernikusz csillagász szülőhelye.", "Híres a hagyományos mézeskalácsokról.", "A téglagótika kiemelkedő példái találhatók itt.", "Megmenekült a második világháborús pusztítástól.", "Ferde toronnyal is rendelkezik."],
      ro: ["Face parte din Patrimoniul Mondial UNESCO.", "Locul de naștere al astronomului Nicolaus Copernic.", "Renumit pentru turta dulce tradițională.", "Exemple remarcabile de arhitectură gotică din cărămidă.", "A scăpat de distrugerile din al Doilea Război Mondial.", "Are un Turn Înclinat."],
      en: ["Part of the UNESCO World Heritage Site.", "Birthplace of astronomer Nicolaus Copernicus.", "Famous for traditional gingerbread.", "Outstanding examples of brick Gothic architecture.", "Spared from destruction in World War II.", "Features a Leaning Tower."]
    },
    image: "/geo-images/poland/torun-old-town.webp"
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
    facts: {
      de: ["Bekannt als die 'Ideale Stadt'.", "Vollständig im Renaissance-Stil erbaut.", "Die Altstadt ist UNESCO-Weltkulturerbe.", "Erbaut von Jan Zamoyski im 16. Jahrhundert.", "Besitzt wunderschöne bunte armenische Häuser.", "Ehemalige mächtige Festungsstadt."],
      hu: ["Az 'ideális városként' is ismert.", "Teljesen reneszánsz stílusban épült.", "Az óváros az UNESCO világörökség része.", "Jan Zamoyski építtette a 16. században.", "Gyönyörű, színes örmény házakkal rendelkezik.", "Egykor hatalmas erődváros volt."],
      ro: ["Cunoscut ca 'Orașul Ideal'.", "Construit în întregime în stil renascentist.", "Orașul Vechi este în Patrimoniul Mondial UNESCO.", "Construit de Jan Zamoyski în secolul al XVI-lea.", "Deține case armenești colorate și frumoase.", "Fost oraș fortificat puternic."],
      en: ["Known as the 'Ideal City'.", "Built entirely in the Renaissance style.", "The Old Town is a UNESCO World Heritage Site.", "Built by Jan Zamoyski in the 16th century.", "Features beautiful colorful Armenian houses.", "Former powerful fortress city."]
    },
    image: "/geo-images/poland/zamosc.webp"
  },
  {
    id: "pl-warsaw-old-town",
    type: "historical",
    parent: "PL-MZ",
    coords: [21.0087, 52.2490],
    name: { de: "Warschauer Altstadt", hu: "Varsói óváros", ro: "Orașul Vechi Varșovia", en: "Warsaw Old Town" },
    description: {
      de: "Die Warschauer Altstadt ist ein beispielloses Zeugnis für den Willen zum Wiederaufbau. Nach der völligen Zerstörung im Zweiten Weltkrieg wurde sie detailgetreu rekonstruiert. Heute bezaubern die gepflasterten Gassen, der Königsschlossplatz und die farbenfrohen Häuserfassaden Besucher aus aller Welt. Sie steht als einzigartiges Beispiel historischer Rekonstruktion auf der UNESCO-Welterbeliste.",
      hu: "A varsói óváros az újjáépítési akarat példátlan bizonyítéka. A második világháború során elszenvedett teljes pusztulás után részletekbe menően újjáépítették. Ma macskaköves utcái, a Királyi Vár tere és a színes házhomlokzatok a világ minden tájáról lenyűgözik a látogatókat. A történelmi rekonstrukció egyedülálló példájaként szerepel az UNESCO világörökségi listáján.",
      ro: "Orașul Vechi din Varșovia este o dovadă fără precedent a dorinței de reconstrucție. După distrugerea sa totală în al Doilea Război Mondial, a fost reconstruit în detaliu. Astăzi, străzile pietruite, Piața Castelului Regal și fațadele colorate ale caselor farmecă vizitatorii din întreaga lume. Este un exemplu unic de reconstrucție istorică pe lista Patrimoniului Mondial UNESCO.",
      en: "Warsaw's Old Town is an unparalleled testament to the will to rebuild. After its total destruction in World War II, it was meticulously reconstructed. Today, its cobbled streets, Royal Castle Square, and colorful facades charm visitors from all over the world. It stands as a unique example of historical reconstruction on the UNESCO World Heritage list."
    },
    facts: {
      de: ["Nach 1945 fast vollständig rekonstruiert.", "Einzigartiges UNESCO-Welterbe der Rekonstruktion.", "Das Königsschloss dominiert den Hauptplatz.", "Besitzt die berühmte Seejungfrau-Statue (Syrenka).", "Zentrum der Geschichte und Kultur Warschaus.", "Erstrahlt heute in alter Pracht."],
      hu: ["1945 után szinte teljesen újjáépítették.", "A rekonstrukció egyedülálló UNESCO világöröksége.", "A főteret a Királyi Vár uralja.", "Itt található a híres sellőszobor (Syrenka).", "Varsó történelmének és kultúrájának központja.", "Ma régi pompájában ragyog."],
      ro: ["Reconstruit aproape în întregime după 1945.", "Sit unic al Patrimoniului Mondial UNESCO pentru reconstrucție.", "Castelul Regal domină piața principală.", "Deține faimoasa statuie a sirenei (Syrenka).", "Centrul istoriei și culturii din Varșovia.", "Astăzi strălucește în vechea sa glorie."],
      en: ["Almost entirely reconstructed after 1945.", "Unique UNESCO World Heritage site of reconstruction.", "The Royal Castle dominates the main square.", "Features the famous Mermaid statue (Syrenka).", "Center of Warsaw's history and culture.", "Shines today in its former glory."]
    },
    image: "/geo-images/poland/warsaw.webp"
  },
  {
    id: "pl-jasna-gora",
    type: "historical",
    parent: "PL-SL",
    coords: [19.0930, 50.8124],
    name: { de: "Kloster Jasna Góra", hu: "Jasna Góra-i kolostor", ro: "Mănăstirea Jasna Góra", en: "Jasna Góra Monastery" },
    description: {
      de: "Jasna Góra in Tschenstochau ist das bedeutendste Marienheiligtum Polens. Im Herzen des Klosters befindet sich die verehrte Ikone der Schwarzen Madonna. Das Kloster gleicht einer Festung und hat historisch vielen Belagerungen standgehalten. Für die Polen ist es nicht nur ein religiöses Zentrum, sondern auch ein Symbol nationalen Widerstands.",
      hu: "A częstochowai Jasna Góra Lengyelország legjelentősebb Mária-kegyhelye. A kolostor szívében található a Fekete Madonna tisztelt ikonja. A kolostor egy erődítményre hasonlít, és a történelem során számos ostromnak ellenállt. A lengyelek számára nemcsak vallási központ, hanem a nemzeti ellenállás szimbóluma is.",
      ro: "Jasna Góra din Częstochowa este cel mai important sanctuar marian din Polonia. În inima mănăstirii se află venerata icoană a Madonei Negre. Mănăstirea seamănă cu o fortăreață și a rezistat istoric la multe asedii. Pentru polonezi, nu este doar un centru religios, ci și un simbol al rezistenței naționale.",
      en: "Jasna Góra in Częstochowa is the most important Marian sanctuary in Poland. In the heart of the monastery lies the venerated icon of the Black Madonna. The monastery resembles a fortress and has historically withstood many sieges. For Poles, it is not only a religious center but also a symbol of national resistance."
    },
    facts: {
      de: ["Das wichtigste spirituelle Zentrum Polens.", "Bewahrt das Gemälde der Schwarzen Madonna auf.", "War Schauplatz der historischen Verteidigung gegen die Schweden.", "Wird jährlich von Millionen Pilgern besucht.", "Gegründet im 14. Jahrhundert.", "Ein mächtiger barocker Klosterkomplex."],
      hu: ["Lengyelország legfontosabb spirituális központja.", "A Fekete Madonna festményét őrzi.", "A svédek elleni történelmi védekezés helyszíne volt.", "Évente zarándokok milliói látogatják.", "A 14. században alapították.", "Hatalmas barokk kolostorkomplexum."],
      ro: ["Cel mai important centru spiritual din Polonia.", "Păstrează pictura Madonei Negre.", "A fost locul apărării istorice împotriva suedezilor.", "Este vizitat de milioane de pelerini anual.", "Fondat în secolul al XIV-lea.", "Un puternic complex monahal baroc."],
      en: ["The most important spiritual center of Poland.", "Preserves the painting of the Black Madonna.", "Was the site of the historical defense against the Swedes.", "Is visited by millions of pilgrims annually.", "Founded in the 14th century.", "A massive Baroque monastery complex."]
    },
    image: "/geo-images/poland/jasna-gora.webp"
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
    facts: {
      de: ["Besteht aus mehr als 2.000 miteinander verbundenen Seen.", "Eines der besten Segelreviere in Europa.", "Spirdingsee (Śniardwy) ist der größte See Polens.", "Kandidat für die Neuen 7 Naturwunder.", "Bedeutendes Gebiet für Vogelbeobachtungen.", "Perfekt für Hausbooturlaube."],
      hu: ["Több mint 2000 egymással összekapcsolt tóból áll.", "Európa egyik legjobb vitorlázó területe.", "A Śniardwy-tó Lengyelország legnagyobb tava.", "Jelölt volt az Új 7 Természeti Csoda címre.", "Jelentős madármegfigyelő terület.", "Tökéletes lakóhajós nyaralásokhoz."],
      ro: ["Constă din peste 2.000 de lacuri interconectate.", "Una dintre cele mai bune zone de navigație din Europa.", "Lacul Śniardwy este cel mai mare lac din Polonia.", "Candidat pentru Cele Noi 7 Minuni ale Naturii.", "Zonă importantă pentru observarea păsărilor.", "Perfect pentru vacanțe pe bărci cu casă."],
      en: ["Consists of more than 2,000 interconnected lakes.", "One of the best sailing areas in Europe.", "Lake Śniardwy is the largest lake in Poland.", "Candidate for the New 7 Wonders of Nature.", "Important area for bird watching.", "Perfect for houseboat holidays."]
    },
    image: "/geo-images/poland/masurian-lakes.webp"
  },
  {
    id: "pl-slowinski-np",
    type: "landmark",
    parent: "PL-PM",
    coords: [17.5500, 54.7500],
    name: { de: "Slowinzischer NP", hu: "Słowiński Nemzeti Park", ro: "Parcul Național Słowiński", en: "Słowiński NP" },
    description: {
      de: "Der Slowinzische Nationalpark an der Ostseeküste ist weltbekannt für seine riesigen Wanderdünen, die eine wüstenähnliche Landschaft bilden. Diese 'polnische Sahara' bewegt sich jedes Jahr um einige Meter landeinwärts und begräbt Wälder unter sich. Der Park umfasst auch große Küstenseen und Kiefernwälder. Er wurde als UNESCO-Biosphärenreservat anerkannt.",
      hu: "A balti-tengeri partvidéken található Słowiński Nemzeti Park világhírű a sivatagszerű tájat alkotó hatalmas vándorló dűnéiről. Ez a 'lengyel Szahara' minden évben néhány métert halad a szárazföld belseje felé, és erdőket temet maga alá. A park nagy part menti tavakat és fenyőerdőket is magában foglal. UNESCO bioszféra-rezervátumként ismerték el.",
      ro: "Parcul Național Słowiński de pe coasta Mării Baltice este renumit în întreaga lume pentru imensele sale dune mișcătoare, care formează un peisaj asemănător deșertului. Acest 'Sahara polonez' se mișcă spre interiorul țării cu câțiva metri în fiecare an, îngropând păduri sub el. Parcul include, de asemenea, lacuri mari de coastă și păduri de pini. A fost recunoscut ca rezervație a biosferei UNESCO.",
      en: "Słowiński National Park on the Baltic coast is world-famous for its massive shifting dunes, which form a desert-like landscape. This 'Polish Sahara' moves inland by a few meters each year, burying forests beneath it. The park also includes large coastal lakes and pine forests. It has been recognized as a UNESCO Biosphere Reserve."
    },
    facts: {
      de: ["Berühmt für Europas größte Wanderdünen.", "Dünen erreichen Höhen von über 40 Metern.", "Landschaft wird oft als 'polnische Sahara' bezeichnet.", "UNESCO-Biosphärenreservat.", "Umfasst die großen Küstenseen Łebsko und Gardno.", "Einzigartige Kombination aus Meer, Sand und Wald."],
      hu: ["Európa legnagyobb vándorló dűnéiről híres.", "A dűnék magassága meghaladja a 40 métert.", "A tájat gyakran 'lengyel Szaharának' nevezik.", "UNESCO bioszféra-rezervátum.", "Magában foglalja a Łebsko és Gardno nagy partmenti tavakat.", "A tenger, a homok és az erdő egyedülálló kombinációja."],
      ro: ["Renumit pentru cele mai mari dune mișcătoare din Europa.", "Dunele ating înălțimi de peste 40 de metri.", "Peisajul este adesea numit 'Sahara poloneză'.", "Rezervație a biosferei UNESCO.", "Include marile lacuri de coastă Łebsko și Gardno.", "Combinație unică de mare, nisip și pădure."],
      en: ["Famous for Europe's largest shifting dunes.", "Dunes reach heights of over 40 meters.", "The landscape is often called the 'Polish Sahara'.", "UNESCO Biosphere Reserve.", "Includes the large coastal lakes Łebsko and Gardno.", "Unique combination of sea, sand, and forest."]
    },
    image: "/geo-images/poland/slowinski-np.webp"
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
    facts: {
      de: ["Die 'grüne Lunge' der Hauptstadt Warschau.", "Bekannt für den Wechsel aus Sanddünen und Sümpfen.", "Das Wappentier des Parks ist der Elch.", "Verfügt über ein ausgezeichnetes Rad- und Wanderwegenetz.", "UNESCO-Biosphärenreservat 'Puszcza Kampinoska'.", "Versteckt viele historische Gräber aus dem Krieg."],
      hu: ["A főváros, Varsó 'zöld tüdeje'.", "A homokdűnék és a mocsarak váltakozásáról ismert.", "A park címerállata a jávorszarvas.", "Kiváló kerékpár- és túraútvonal-hálózattal rendelkezik.", "UNESCO bioszféra-rezervátum 'Puszcza Kampinoska'.", "Sok történelmi háborús sírt rejt."],
      ro: ["'Plămânul verde' al capitalei Varșovia.", "Cunoscut pentru alternanța dintre dunele de nisip și mlaștini.", "Animalul heraldic al parcului este elanul.", "Are o rețea excelentă de trasee pentru ciclism și drumeții.", "Rezervație a biosferei UNESCO 'Puszcza Kampinoska'.", "Ascunde multe morminte istorice din timpul războiului."],
      en: ["The 'green lung' of the capital city, Warsaw.", "Known for the alternation of sand dunes and swamps.", "The heraldic animal of the park is the elk.", "Features an excellent network of cycling and hiking trails.", "UNESCO Biosphere Reserve 'Puszcza Kampinoska'.", "Hides many historical war graves."]
    },
    image: "/geo-images/poland/kampinos-np.webp"
  },
  {
    id: "pl-pieniny-np",
    type: "mountain",
    parent: "PL-MA",
    coords: [20.4000, 49.4000],
    name: { de: "Pieninen-NP", hu: "Pieniny Nemzeti Park", ro: "Parcul Național Pieniny", en: "Pieniny NP" },
    description: {
      de: "Der Pieninen-Nationalpark schützt ein kleines, aber extrem pittoreskes Gebirgsmassiv. Die spektakulärste Attraktion ist der Durchbruchstals des Flusses Dunajec, der sich hier in engen Schleifen durch die steilen Kalksteinfelsen windet. Eine traditionelle Floßfahrt auf dem Dunajec ist ein unvergessliches Erlebnis. Der berühmteste Gipfel ist der majestätische Trzy Korony (Drei Kronen).",
      hu: "A Pieniny Nemzeti Park egy kicsi, de rendkívül festői hegyvonulatot véd. A leglátványosabb attrakció a Dunajec-folyó áttörése, amely szűk kanyarulatokban kígyózik a meredek mészkősziklák között. A hagyományos tutajozás a Dunajecen felejthetetlen élmény. A leghíresebb csúcs a fenséges Trzy Korony (Három Korona).",
      ro: "Parcul Național Pieniny protejează un masiv muntos mic, dar extrem de pitoresc. Cea mai spectaculoasă atracție este defileul râului Dunajec, care șerpuiește în bucle strânse prin stâncile abrupte de calcar. O plimbare cu pluta tradițională pe Dunajec este o experiență de neuitat. Cel mai faimos vârf este maiestuosul Trzy Korony (Trei Coroane).",
      en: "Pieniny National Park protects a small but extremely picturesque mountain massif. The most spectacular attraction is the Dunajec River Gorge, which winds its way in tight loops through the steep limestone cliffs. A traditional raft trip on the Dunajec is an unforgettable experience. The most famous peak is the majestic Trzy Korony (Three Crowns)."
    },
    facts: {
      de: ["Bekannt für die spektakuläre Dunajec-Schlucht.", "Die Floßfahrt mit Goralen ist eine Hauptattraktion.", "Höchster markanter Punkt sind die 'Drei Kronen'.", "Lebensraum für den seltenen Apollofalter.", "Einer der ältesten grenzüberschreitenden Parks in Europa.", "Wunderschöne Wälder mit reicher Herbstfärbung."],
      hu: ["A látványos Dunajec-szurdokról ismert.", "A gorálok vezette tutajozás a fő attrakció.", "Legkiemelkedőbb pontja a 'Három Korona'.", "A ritka apolló-lepke élőhelye.", "Európa egyik legrégebbi határon átnyúló parkja.", "Gyönyörű erdők gazdag őszi színekkel."],
      ro: ["Cunoscut pentru spectaculosul Defileu al Dunajecului.", "Plimbarea cu pluta cu goralii este o atracție principală.", "Cel mai înalt punct proeminent sunt 'Trei Coroane'.", "Habitat pentru fluturele rar Apollo.", "Unul dintre cele mai vechi parcuri transfrontaliere din Europa.", "Păduri frumoase cu o bogată coloratură de toamnă."],
      en: ["Known for the spectacular Dunajec River Gorge.", "The raft trip with Gorals is a main attraction.", "The highest prominent point is the 'Three Crowns'.", "Habitat for the rare Apollo butterfly.", "One of the oldest cross-border parks in Europe.", "Beautiful forests with rich autumn colors."]
    },
    image: "/geo-images/poland/pieniny-np.webp"
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
    facts: {
      de: ["Eines der bedeutendsten gotischen Kirchengebäude in Polen.", "War Teil eines großen Zisterzienserklosters.", "Bekannt für seine hoch aufragende Backsteinarchitektur.", "Bewahrt wertvolle Altäre und sakrale Kunst.", "Prägt das historische Zentrum von Pelplin.", "Ein wichtiges Denkmal der Kirchen- und Regionalgeschichte."],
      hu: ["Lengyelország egyik legjelentősebb gótikus temploma.", "Egy nagy ciszterci kolostor része volt.", "Magas, téglaépítészetéről ismert.", "Értékes oltárokat és egyházi művészetet őriz.", "Meghatározza Pelplin történelmi központját.", "Fontos egyházi és regionális történelmi emlék."],
      ro: ["Una dintre cele mai importante biserici gotice din Polonia.", "A făcut parte dintr-o mare mănăstire cisterciană.", "Cunoscută pentru arhitectura sa înaltă din cărămidă.", "Păstrează altare valoroase și artă sacră.", "Definește centrul istoric al orașului Pelplin.", "Un monument important al istoriei ecleziastice și regionale."],
      en: ["One of the most important Gothic churches in Poland.", "It was part of a large Cistercian monastery complex.", "Known for its tall brick architecture.", "Preserves valuable altars and sacred art.", "Shapes the historic center of Pelplin.", "An important monument of church and regional history."]
    },
    image: "/geo-images/poland/pelplin-cathedral.webp"
  },
  {
    id: "pl-ksiaz-castle",
    type: "historical",
    parent: "PL-DS",
    coords: [16.6566, 50.8433],
    name: { de: "Schloss Książ", hu: "Książ kastély", ro: "Castelul Książ", en: "Książ Castle" },
    description: {
      de: "Schloss Książ erhebt sich eindrucksvoll über einem bewaldeten Tal und gehört zu den bekanntesten Schlössern Polens. Seine Geschichte reicht vom Mittelalter bis in die Gegenwart und verbindet Adelsresidenz, Kriegszeit und Restaurierung. Die mächtigen Fassaden und Terrassen machen den Komplex besonders fotogen. Unter dem Schloss verbirgt sich zudem ein Teil der rätselhaften Untertageanlagen aus der Zeit des Zweiten Weltkriegs.",
      hu: "A Książ kastély látványosan emelkedik egy erdős völgy fölé, és Lengyelország egyik legismertebb kastélya. Története a középkortól napjainkig ível, és nemesi rezidenciát, háborús időszakot, majd helyreállítást kapcsol össze. A hatalmas homlokzatok és teraszok különösen fotogénné teszik az együttest. A kastély alatt a második világháború idejéből származó föld alatti létesítmények egy része is rejtőzik.",
      ro: "Castelul Książ se ridică impresionant deasupra unei văi împădurite și este unul dintre cele mai cunoscute castele din Polonia. Istoria sa se întinde din Evul Mediu până în prezent și combină reședința nobilă, perioada de război și restaurarea. Fațadele puternice și terasele îl fac deosebit de fotogenic. Sub castel se ascunde și o parte din instalațiile subterane misterioase din timpul celui de-al Doilea Război Mondial.",
      en: "Książ Castle rises dramatically above a wooded valley and is one of the best-known castles in Poland. Its history stretches from the Middle Ages to the present and combines aristocratic residence, wartime history, and restoration. The massive facades and terraces make the complex especially photogenic. Beneath the castle, part of the mysterious underground works from World War II is also hidden."
    },
    facts: {
      de: ["Eines der größten Schlösser in Polen.", "Liegt oberhalb einer tiefen, bewaldeten Schlucht.", "Verbindet mittelalterliche Ursprünge mit barocken Umbauten.", "Bekannt für seine großen Terrassen und Gärten.", "Spielt eine Rolle in den Geschichten rund um den Zweiten Weltkrieg.", "Ein Besuchsziel mit starker touristischer Anziehungskraft."],
      hu: ["Lengyelország egyik legnagyobb kastélya.", "Egy mély, erdős szurdok fölött áll.", "Középkori eredetet és barokk átépítést is őriz.", "Híres nagy teraszairól és kertjeiről.", "A második világháború történetéhez is kapcsolódik.", "Népszerű és erős turisztikai vonzerővel bíró hely."],
      ro: ["Unul dintre cele mai mari castele din Polonia.", "Se află deasupra unei chei adânci și împădurite.", "Îmbină origini medievale cu remodelări baroce.", "Cunoscut pentru terasele și grădinile sale mari.", "Este legat de istoriile celui de-al Doilea Război Mondial.", "O destinație turistică foarte atractivă."],
      en: ["One of the largest castles in Poland.", "Sits above a deep, wooded gorge.", "Combines medieval origins with Baroque remodeling.", "Known for its large terraces and gardens.", "Connected to World War II history and underground works.", "A highly attractive tourist destination."]
    },
    image: "/geo-images/poland/ksiaz-castle.webp"
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
    facts: {
      de: ["Spiegelt die berühmte Filmtradition von Łódź wider.", "Verbunden mit der renommierten Łódźer Filmschule.", "Bewahrt Archivmaterial, Requisiten und Ausstellungen.", "Ein wichtiger Ort der polnischen Kinogeschichte.", "Teil der kreativen Identität der Stadt.", "Beliebt bei Besuchern mit Interesse an Kultur und Film."],
      hu: ["Łódź híres filmes hagyományát tükrözi.", "Kapcsolódik a neves Łódźi Filmiskolához.", "Archív anyagokat, kellékeket és kiállításokat őriz.", "A lengyel filmtörténet fontos helyszíne.", "A város kreatív identitásának része.", "Népszerű a kultúra és film iránt érdeklődő látogatók körében."],
      ro: ["Reflectă celebra tradiție cinematografică a orașului Łódź.", "Este legat de renumita Școală de Film din Łódź.", "Păstrează materiale de arhivă, recuzită și expoziții.", "Un loc important în istoria filmului polonez.", "Parte a identității creative a orașului.", "Popular printre vizitatorii interesați de cultură și cinema."],
      en: ["Reflects Łódź's famous film tradition.", "Connected to the renowned Łódź Film School.", "Preserves archival material, props, and exhibitions.", "An important site in Polish cinema history.", "Part of the city's creative identity.", "Popular with visitors interested in culture and film."]
    },
    image: "/geo-images/poland/lodz-film-museum.webp"
  }
];

export const polandAllPoi: POI[] = [
  polandCountry,
  ...polandRegions,
  ...polandCities,
];
