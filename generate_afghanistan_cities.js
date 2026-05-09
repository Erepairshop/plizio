const fs = require('fs');

const cities = [
  {
    id: "kabul-cities-v2",
    lon: 69.1722, lat: 34.5333,
    parent: "AF-KAB",
    de: "Kabul", hu: "Kabul", ro: "Kabul", en: "Kabul",
    desc_de: "Kabul ist die Hauptstadt und bevölkerungsreichste Stadt Afghanistans. Sie liegt in einem von hohen Bergen umgebenen Tal und blickt auf eine über 3.500 Jahre alte Geschichte zurück.",
    desc_hu: "Kabul Afganisztán fővárosa és legnépesebb városa. A magas hegyekkel körülvett völgyben fekvő település több mint 3500 éves történelmi múltra tekint vissza.",
    desc_ro: "Kabul este capitala și cel mai populat oraș din Afganistan. Situat într-o vale înconjurată de munți înalți, are o istorie de peste 3.500 de ani.",
    desc_en: "Kabul is the capital and most populous city of Afghanistan. Situated in a valley surrounded by high mountains, it boasts a history spanning over 3,500 years.",
    facts: [
      { de: "Kabul liegt auf einer Höhe von rund 1.790 Metern.", hu: "Kabul körülbelül 1790 méteres tengerszint feletti magasságban fekszik.", ro: "Kabul este situat la o altitudine de aproximativ 1.790 de metri.", en: "Kabul is situated at an elevation of around 1,790 meters." },
      { de: "Die Babur-Gärten gehören zu den bekanntesten historischen Sehenswürdigkeiten der Stadt.", hu: "A Bábur kertjei a város egyik legismertebb történelmi nevezetességei.", ro: "Grădinile Babur sunt printre cele mai cunoscute atracții istorice ale orașului.", en: "The Gardens of Babur are among the city's most famous historical attractions." }
    ]
  },
  {
    id: "kandahar-cities-v2",
    lon: 65.7158, lat: 31.6289,
    parent: "AF-KAN",
    de: "Kandahar", hu: "Kandahár", ro: "Kandahar", en: "Kandahar",
    desc_de: "Kandahar ist die zweitgrößte Stadt Afghanistans und ein wichtiges wirtschaftliches Zentrum im Süden des Landes. Die Stadt wurde im 4. Jahrhundert v. Chr. von Alexander dem Großen gegründet.",
    desc_hu: "Kandahár Afganisztán második legnagyobb városa és az ország déli részének fontos gazdasági központja. A várost Nagy Sándor alapította a Kr. e. 4. században.",
    desc_ro: "Kandahar este al doilea oraș ca mărime din Afganistan și un important centru economic în sudul țării. Orașul a fost fondat de Alexandru cel Mare în secolul al IV-lea î.Hr.",
    desc_en: "Kandahar is the second-largest city in Afghanistan and a major economic hub in the south. The city was founded by Alexander the Great in the 4th century BC.",
    facts: [
      { de: "Die Stadt ist für ihren landwirtschaftlichen Reichtum, insbesondere Granatäpfel und Weintrauben, bekannt.", hu: "A város mezőgazdasági gazdagságáról, különösen a gránátalmáról és a szőlőről híres.", ro: "Orașul este renumit pentru bogăția sa agricolă, în special rodii și struguri.", en: "The city is famous for its agricultural wealth, particularly pomegranates and grapes." },
      { de: "Der Schrein des Mantels beherbergt ein Gewand, das angeblich dem Propheten Mohammed gehörte.", hu: "A Köpeny-szentélyben őriznek egy ruhadarabot, amely a hagyomány szerint Mohamed prófétáé volt.", ro: "Altarul Mantiei adăpostește o haină care se spune că ar fi aparținut profetului Mahomed.", en: "The Shrine of the Cloak houses a garment believed to have belonged to the Prophet Muhammad." }
    ]
  },
  {
    id: "herat-cities-v2",
    lon: 62.2040, lat: 34.3419,
    parent: "AF-HER",
    de: "Herat", hu: "Herát", ro: "Herat", en: "Herat",
    desc_de: "Herat liegt im Westen Afghanistans am Fluss Hari Rud und ist für seine beeindruckende persische Architektur bekannt. Die Stadt war historisch ein wichtiges Zentrum auf der Seidenstraße.",
    desc_hu: "A Nyugat-Afganisztánban, a Hari Rud folyó partján fekvő Herát lenyűgöző perzsa építészetéről ismert. A város történelmileg a Selyemút egyik fontos központja volt.",
    desc_ro: "Herat este situat în vestul Afganistanului, pe râul Hari Rud, fiind renumit pentru arhitectura sa persană impresionantă. Orașul a fost istoric un centru important pe Drumul Mătăsii.",
    desc_en: "Located in western Afghanistan on the Hari Rud river, Herat is known for its impressive Persian architecture. The city was historically a major hub on the Silk Road.",
    facts: [
      { de: "Die Freitagsmoschee von Herat ist ein Meisterwerk islamischer Baukunst.", hu: "A heráti Péntek Mecset az iszlám építészet egyik remekműve.", ro: "Moscheea de Vineri din Herat este o capodoperă a arhitecturii islamice.", en: "The Friday Mosque of Herat is a masterpiece of Islamic architecture." },
      { de: "Die Zitadelle von Herat stammt ursprünglich aus der Zeit Alexanders des Großen.", hu: "A heráti fellegvár eredetileg Nagy Sándor korából származik.", ro: "Citadela din Herat datează inițial de pe vremea lui Alexandru cel Mare.", en: "The Citadel of Herat originally dates back to the time of Alexander the Great." }
    ]
  },
  {
    id: "mazar-i-sharif-cities-v2",
    lon: 67.1109, lat: 36.7090,
    parent: "AF-BAL",
    de: "Mazar-e Sharif", hu: "Mazár-e Saríf", ro: "Mazar-i-Sharif", en: "Mazar-i-Sharif",
    desc_de: "Mazar-e Sharif ist die viertgrößte Stadt Afghanistans und ein wichtiges Handelszentrum nahe der usbekischen Grenze. Ihr Name bedeutet übersetzt „Grab des Edlen“.",
    desc_hu: "Mazár-e Saríf Afganisztán negyedik legnagyobb városa és az üzbég határ közelében fekvő fontos kereskedelmi központ. Neve fordításban „a nemes sírja” jelentésű.",
    desc_ro: "Mazar-i-Sharif este al patrulea oraș ca mărime din Afganistan și un important centru comercial aproape de granița cu Uzbekistan. Numele său se traduce prin „Mormântul celui Nobil”.",
    desc_en: "Mazar-i-Sharif is the fourth-largest city in Afghanistan and a major trade center near the Uzbek border. Its name translates to 'Tomb of the Noble'.",
    facts: [
      { de: "Die Blaue Moschee ist das Wahrzeichen und spirituelle Zentrum der Stadt.", hu: "A Kék Mecset a város jelképe és spirituális központja.", ro: "Moscheea Albastră este simbolul și centrul spiritual al orașului.", en: "The Blue Mosque is the landmark and spiritual center of the city." },
      { de: "Die Stadt feiert jedes Jahr traditionell das Nowruz-Fest mit zehntausenden Besuchern.", hu: "A város minden évben több tízezer látogatóval ünnepli a hagyományos perzsa újévet, a Novruzt.", ro: "Orașul sărbătorește tradițional festivalul Nowruz în fiecare an cu zeci de mii de vizitatori.", en: "The city traditionally celebrates the Nowruz festival each year with tens of thousands of visitors." }
    ]
  },
  {
    id: "kunduz-cities-v2",
    lon: 68.8680, lat: 36.7290,
    parent: "AF-KDZ",
    de: "Kundus", hu: "Kunduz", ro: "Kunduz", en: "Kunduz",
    desc_de: "Kundus ist das Zentrum der gleichnamigen Provinz im Norden Afghanistans und ein bedeutender Verkehrsknotenpunkt. Die landwirtschaftlich geprägte Region wird oft als die Kornkammer des Landes bezeichnet.",
    desc_hu: "Kunduz az azonos nevű tartomány központja Észak-Afganisztánban, jelentős közlekedési csomópont. A mezőgazdasági régiót gyakran az ország magtárának is nevezik.",
    desc_ro: "Kunduz este centrul provinciei cu același nume din nordul Afganistanului și un nod de transport important. Regiunea agricolă este adesea numită grânarul țării.",
    desc_en: "Kunduz is the center of the eponymous province in northern Afghanistan and a significant transport hub. The agricultural region is often referred to as the country's breadbasket.",
    facts: [
      { de: "Die Region um Kundus ist berühmt für ihren Melonen- und Baumwollanbau.", hu: "A Kunduz körüli régió híres dinnye- és gyapottermesztéséről.", ro: "Regiunea din jurul orașului Kunduz este faimoasă pentru cultivarea pepenilor și bumbacului.", en: "The region around Kunduz is famous for its melon and cotton cultivation." },
      { de: "Die Stadt liegt strategisch wichtig nahe der Grenze zu Tadschikistan.", hu: "A város stratégiailag fontos helyen, a tádzsik határ közelében fekszik.", ro: "Orașul este situat strategic aproape de granița cu Tadjikistan.", en: "The city is strategically located near the border with Tajikistan." }
    ]
  },
  {
    id: "jalalabad-cities-v2",
    lon: 70.4515, lat: 34.4262,
    parent: "AF-NAN",
    de: "Dschalalabad", hu: "Dzsalálábád", ro: "Jalalabad", en: "Jalalabad",
    desc_de: "Dschalalabad ist die Hauptstadt der Provinz Nangarhar im Osten Afghanistans. Aufgrund ihres wärmeren Klimas wird die Stadt von üppigen Gärten und Parks gesäumt.",
    desc_hu: "Dzsalálábád Nangarhar tartomány fővárosa Afganisztán keleti részén. Melegebb éghajlatának köszönhetően a várost buja kertek és parkok övezik.",
    desc_ro: "Jalalabad este capitala provinciei Nangarhar din estul Afganistanului. Datorită climei sale mai calde, orașul este înconjurat de grădini și parcuri luxuriante.",
    desc_en: "Jalalabad is the capital of Nangarhar Province in eastern Afghanistan. Thanks to its warmer climate, the city is lined with lush gardens and parks.",
    facts: [
      { de: "Der Fluss Kabul fließt direkt durch die Stadt und versorgt die Gärten mit Wasser.", hu: "A Kabul folyó közvetlenül a városon folyik keresztül, vízzel látva el a kerteket.", ro: "Râul Kabul curge chiar prin oraș și alimentează grădinile cu apă.", en: "The Kabul River flows right through the city, supplying water to its gardens." },
      { de: "König Amanullah Khan und seine Familie liegen im Mausoleum der Stadt begraben.", hu: "Amanullah kán és családja a város mauzóleumában nyugszik.", ro: "Regele Amanullah Khan și familia sa sunt înmormântați în mausoleul orașului.", en: "King Amanullah Khan and his family are buried in the city's mausoleum." }
    ]
  },
  {
    id: "taloqan-cities-v2",
    lon: 69.5345, lat: 36.7360,
    parent: "AF-TAK",
    de: "Taloqan", hu: "Tálokán", ro: "Taloqan", en: "Taloqan",
    desc_de: "Taloqan ist die Hauptstadt der Provinz Takhar im Nordosten Afghanistans. Die Stadt wurde erst 1952 als Handelszentrum am Fluss Taloqan neu gegründet und ist schnell gewachsen.",
    desc_hu: "Tálokán Tahár tartomány fővárosa Északkelet-Afganisztánban. A várost csak 1952-ben alapították újra kereskedelmi központként a Tálokán folyó mentén, és azóta gyorsan növekedett.",
    desc_ro: "Taloqan este capitala provinciei Takhar din nord-estul Afganistanului. Orașul a fost reînființat abia în 1952 ca centru comercial pe râul Taloqan și a crescut rapid.",
    desc_en: "Taloqan is the capital of Takhar Province in northeastern Afghanistan. The city was only refounded in 1952 as a trade center on the Taloqan River and has grown rapidly.",
    facts: [
      { de: "Marco Polo beschrieb das Gebiet um Taloqan 1275 auf seiner Reise nach China.", hu: "Marco Polo 1275-ben kínai útja során írta le a Tálokán körüli területet.", ro: "Marco Polo a descris zona din jurul orașului Taloqan în 1275, în călătoria sa spre China.", en: "Marco Polo described the area around Taloqan in 1275 during his journey to China." },
      { de: "Die Wirtschaft der Stadt basiert hauptsächlich auf Landwirtschaft und Handel.", hu: "A város gazdasága főként a mezőgazdaságra és a kereskedelemre épül.", ro: "Economia orașului se bazează în principal pe agricultură și comerț.", en: "The city's economy is primarily based on agriculture and trade." }
    ]
  },
  {
    id: "puli-khumri-cities-v2",
    lon: 68.7151, lat: 35.9446,
    parent: "AF-BGL",
    de: "Pol-e Chomri", hu: "Puli-Humri", ro: "Puli Khumri", en: "Puli Khumri",
    desc_de: "Pol-e Chomri ist eine Industriestadt in der Provinz Baghlan. Die Stadt entwickelte sich Mitte des 20. Jahrhunderts zu einem wichtigen Knotenpunkt der afghanischen Textil- und Energieindustrie.",
    desc_hu: "Puli-Humri egy iparváros Baglán tartományban. A település a 20. század közepén vált az afgán textil- és energiaipar egyik legfontosabb központjává.",
    desc_ro: "Puli Khumri este un oraș industrial din provincia Baghlan. Orașul a devenit un centru important al industriei textile și energetice afgane la mijlocul secolului al XX-lea.",
    desc_en: "Puli Khumri is an industrial city in Baghlan Province. The city developed into a major hub for the Afghan textile and energy industries in the mid-20th century.",
    facts: [
      { de: "Ein bedeutendes Wasserkraftwerk in der Stadt wurde mit sowjetischer Hilfe erbaut.", hu: "A város jelentős vízerőműve szovjet segítséggel épült.", ro: "O hidrocentrală importantă din oraș a fost construită cu ajutor sovietic.", en: "A major hydroelectric power plant in the city was built with Soviet assistance." },
      { de: "Pol-e Chomri verbindet die Hauptstadt Kabul mit dem Norden Afghanistans.", hu: "Puli-Humri köti össze a fővárost, Kabult Afganisztán északi részével.", ro: "Puli Khumri conectează capitala Kabul de nordul Afganistanului.", en: "Puli Khumri connects the capital city of Kabul with northern Afghanistan." }
    ]
  },
  {
    id: "charikar-cities-v2",
    lon: 69.1714, lat: 35.0136,
    parent: "AF-PAR",
    de: "Tscharikar", hu: "Csarikár", ro: "Charikar", en: "Charikar",
    desc_de: "Tscharikar ist die Hauptstadt der Provinz Parwan und liegt am Rande der Schomali-Ebene. Die Stadt ist für ihre Keramikwaren und landwirtschaftlichen Produkte bekannt.",
    desc_hu: "Csarikár Parván tartomány fővárosa, és a Somáli-síkság szélén fekszik. A város fazekastermékeiről és mezőgazdasági termékeiről ismert.",
    desc_ro: "Charikar este capitala provinciei Parwan și se află la marginea Câmpiei Shomali. Orașul este cunoscut pentru ceramica și produsele sale agricole.",
    desc_en: "Charikar is the capital of Parwan Province and lies on the edge of the Shomali Plain. The city is known for its pottery and agricultural products.",
    facts: [
      { de: "Die Stadt liegt direkt an der wichtigen Verbindungsstraße zum Salangpass.", hu: "A város közvetlenül a Szálang-hágóhoz vezető fontos főútvonal mentén fekszik.", ro: "Orașul este situat direct pe drumul de legătură important către Pasul Salang.", en: "The city is located directly on the important connecting road to the Salang Pass." },
      { de: "Tscharikar ist berühmt für seine süßen Trauben, die in ganz Afghanistan geschätzt werden.", hu: "Csarikár híres édes szőlőjéről, amelyet egész Afganisztánban nagyra értékelnek.", ro: "Charikar este faimos pentru strugurii săi dulci, apreciați în tot Afganistanul.", en: "Charikar is famous for its sweet grapes, which are prized throughout Afghanistan." }
    ]
  },
  {
    id: "lashkargah-cities-v2",
    lon: 64.3667, lat: 31.5830,
    parent: "AF-HEL",
    de: "Laschkar Gah", hu: "Laskar Gáh", ro: "Lashkargah", en: "Lashkargah",
    desc_de: "Laschkar Gah ist die Hauptstadt der Provinz Helmand im Süden Afghanistans. Sie liegt am Zusammenfluss der Flüsse Helmand und Arghandab.",
    desc_hu: "Laskar Gáh Helmand tartomány fővárosa Dél-Afganisztánban. A Helmand és az Arghandab folyók összefolyásánál fekszik.",
    desc_ro: "Lashkargah este capitala provinciei Helmand din sudul Afganistanului. Se află la confluența râurilor Helmand și Arghandab.",
    desc_en: "Lashkargah is the capital of Helmand Province in southern Afghanistan. It is located at the confluence of the Helmand and Arghandab rivers.",
    facts: [
      { de: "Die moderne Stadt wurde in den 1950er Jahren mit amerikanischer Unterstützung geplant.", hu: "A modern várost az 1950-es években tervezték amerikai támogatással.", ro: "Orașul modern a fost planificat în anii 1950 cu sprijin american.", en: "The modern city was planned in the 1950s with American assistance." },
      { de: "In der Antike war die Region ein Winterquartier für Könige.", hu: "Az ókorban a régió a királyok téli szálláshelye volt.", ro: "În antichitate, regiunea a fost o tabără de iarnă pentru regi.", en: "In ancient times, the region was a winter retreat for kings." }
    ]
  },
  {
    id: "sheberghan-cities-v2",
    lon: 65.7365, lat: 36.6676,
    parent: "AF-JOW",
    de: "Schiberghan", hu: "Sibirgán", ro: "Sheberghan", en: "Sheberghan",
    desc_de: "Schiberghan ist die Hauptstadt der Provinz Dschuzdschan im Norden Afghanistans. Die Stadt ist ein wichtiges Zentrum der afghanischen Erdgasindustrie.",
    desc_hu: "Sibirgán Dzsauzdján tartomány fővárosa Észak-Afganisztánban. A város az afgán földgázipar egyik legfontosabb központja.",
    desc_ro: "Sheberghan este capitala provinciei Jowzjan din nordul Afganistanului. Orașul este un centru important al industriei gazelor naturale afgane.",
    desc_en: "Sheberghan is the capital of Jowzjan Province in northern Afghanistan. The city is a major center of the Afghan natural gas industry.",
    facts: [
      { de: "Nahe der Stadt wurde 1978 der berühmte baktrische Goldschatz entdeckt.", hu: "A város közelében fedezték fel 1978-ban a híres baktriai aranykincset.", ro: "Faimoasa comoară de aur din Bactria a fost descoperită lângă oraș în 1978.", en: "The famous Bactrian gold treasure was discovered near the city in 1978." },
      { de: "Der Großteil der Bevölkerung besteht aus Usbeken und Turkmenen.", hu: "A lakosság nagy részét üzbégek és türkmének alkotják.", ro: "Majoritatea populației este formată din uzbeci și turkmeni.", en: "The majority of the population consists of Uzbeks and Turkmens." }
    ]
  },
  {
    id: "ghazni-cities-v2",
    lon: 68.4234, lat: 33.5539,
    parent: "AF-GHA",
    de: "Ghasni", hu: "Gázni", ro: "Ghazni", en: "Ghazni",
    desc_de: "Ghasni ist eine historisch bedeutende Stadt in Zentralafghanistan und liegt an der strategischen Straße zwischen Kabul und Kandahar. Sie war einst die Hauptstadt des Ghaznawiden-Reiches.",
    desc_hu: "Gázni történelmileg jelentős város Közép-Afganisztánban, a Kabul és Kandahár közötti stratégiai főútvonalon. Egykor a Gaznavida Birodalom fővárosa volt.",
    desc_ro: "Ghazni este un oraș important din punct de vedere istoric în centrul Afganistanului, situat pe drumul strategic dintre Kabul și Kandahar. A fost cândva capitala Imperiului Ghaznavid.",
    desc_en: "Ghazni is a historically significant city in central Afghanistan, located on the strategic road between Kabul and Kandahar. It was once the capital of the Ghaznavid Empire.",
    facts: [
      { de: "Die beiden Minarette von Ghasni sind die berühmtesten Überreste des alten Reiches.", hu: "A két gázni minaret az ősi birodalom leghíresebb maradványa.", ro: "Cele două minarete din Ghazni sunt cele mai faimoase rămășițe ale vechiului imperiu.", en: "The two minarets of Ghazni are the most famous remains of the ancient empire." },
      { de: "Die Stadt wurde 2013 zur Hauptstadt der islamischen Kultur in Asien ernannt.", hu: "A várost 2013-ban Ázsia iszlám kulturális fővárosának választották.", ro: "Orașul a fost desemnat capitala culturii islamice din Asia în 2013.", en: "The city was named the Asian capital of Islamic culture in 2013." }
    ]
  },
  {
    id: "khost-cities-v2",
    lon: 69.9278, lat: 33.3395,
    parent: "AF-KHO",
    de: "Chost", hu: "Hoszt", ro: "Khost", en: "Khost",
    desc_de: "Chost ist eine Stadt im Osten Afghanistans, nahe der pakistanischen Grenze. Die umgebenden Berge machen sie zu einem natürlichen Knotenpunkt in einer abgelegenen Region.",
    desc_hu: "Hoszt Afganisztán keleti részén, a pakisztáni határ közelében található. A környező hegyek természetes csomóponttá teszik egy elszigetelt régióban.",
    desc_ro: "Khost este un oraș în estul Afganistanului, aproape de granița cu Pakistanul. Munții din jur îl fac un nod natural într-o regiune izolată.",
    desc_en: "Khost is a city in eastern Afghanistan, near the Pakistani border. The surrounding mountains make it a natural hub in a remote region.",
    facts: [
      { de: "Die Stadt hat die erste internationale Universität in Südost-Afghanistan.", hu: "A városban működik Délkelet-Afganisztán első nemzetközi egyeteme.", ro: "Orașul are prima universitate internațională din sud-estul Afganistanului.", en: "The city hosts the first international university in southeastern Afghanistan." },
      { de: "Eine große Freitagsmoschee dominiert das Zentrum von Chost.", hu: "Egy hatalmas Péntek Mecset uralja Hoszt központját.", ro: "O mare moschee de vineri domină centrul orașului Khost.", en: "A large Friday Mosque dominates the center of Khost." }
    ]
  },
  {
    id: "sar-e-pol-cities-v2",
    lon: 65.9325, lat: 36.2154,
    parent: "AF-SAR",
    de: "Sar-i Pul", hu: "Szar-e Pol", ro: "Sar-e Pol", en: "Sar-e Pol",
    desc_de: "Sar-i Pul ist die Hauptstadt der gleichnamigen Provinz im Norden des Landes. Die Stadt ist für ihr raues Bergklima und die traditionellen Teppichweber bekannt.",
    desc_hu: "Szar-e Pol az azonos nevű északi tartomány fővárosa. A város zord hegyi éghajlatáról és hagyományos szőnyegszövőiről ismert.",
    desc_ro: "Sar-e Pol este capitala provinciei cu același nume din nordul țării. Orașul este cunoscut pentru clima sa aspră de munte și pentru țesătorii tradiționali de covoare.",
    desc_en: "Sar-e Pol is the capital of the eponymous province in the north of the country. The city is known for its rugged mountain climate and traditional carpet weavers.",
    facts: [
      { de: "Die Region verfügt über unerschlossene Ölvorkommen in den nahen Bergen.", hu: "A régió kiaknázatlan olajkészletekkel rendelkezik a közeli hegyekben.", ro: "Regiunea are rezerve de petrol neexploatate în munții din apropiere.", en: "The region has untapped oil reserves in the nearby mountains." },
      { de: "Zahlreiche Ethnien wie Usbeken, Tadschiken und Hazara leben hier zusammen.", hu: "Számos etnikum, mint az üzbégek, tádzsikok és hazarák élnek itt együtt.", ro: "Numeroase grupuri etnice, cum ar fi uzbecii, tadjicii și hazarii trăiesc împreună aici.", en: "Numerous ethnic groups such as Uzbeks, Tajiks, and Hazaras live together here." }
    ]
  },
  {
    id: "chaghcharan-cities-v2",
    lon: 65.2513, lat: 34.5204,
    parent: "AF-GHO",
    de: "Tschaghtscharan", hu: "Csagcsarán", ro: "Chaghcharan", en: "Chaghcharan",
    desc_de: "Tschaghtscharan, auch Firozkoh genannt, ist die Hauptstadt der Provinz Ghor im zentralen Hochland Afghanistans. Sie liegt auf etwa 2.280 Metern über dem Meeresspiegel.",
    desc_hu: "A Firozkoh néven is ismert Csagcsarán Ghor tartomány fővárosa az afgán központi felföldön. Körülbelül 2280 méteres tengerszint feletti magasságban fekszik.",
    desc_ro: "Chaghcharan, cunoscut și sub numele de Firozkoh, este capitala provinciei Ghor din ținuturile înalte centrale ale Afganistanului. Se află la aproximativ 2.280 de metri deasupra nivelului mării.",
    desc_en: "Chaghcharan, also known as Firozkoh, is the capital of Ghor Province in the central highlands of Afghanistan. It sits at about 2,280 meters above sea level.",
    facts: [
      { de: "Die Winter in der Stadt sind extrem lang und schneereich.", hu: "A városban a telek rendkívül hosszúak és havasak.", ro: "Iernile în oraș sunt extrem de lungi și cu multă zăpadă.", en: "Winters in the city are extremely long and snowy." },
      { de: "Der Fluss Hari Rud fließt direkt durch das Stadtzentrum.", hu: "A Hari Rud folyó egyenesen a városközponton folyik keresztül.", ro: "Râul Hari Rud curge direct prin centrul orașului.", en: "The Hari Rud river flows directly through the city center." }
    ]
  },
  {
    id: "mihtarlam-cities-v2",
    lon: 70.2078, lat: 34.6714,
    parent: "AF-LAG",
    de: "Mihtarlam", hu: "Mihtarlam", ro: "Mihtarlam", en: "Mihtarlam",
    desc_de: "Mihtarlam ist die Hauptstadt der Provinz Laghman und liegt idyllisch in den bewässerten Tälern Ostafghanistans. Die Stadt ist ein landwirtschaftliches Zentrum der Region.",
    desc_hu: "Mihtarlam Laghman tartomány fővárosa, idillikus környezetben fekszik Kelet-Afganisztán öntözött völgyeiben. A város a régió egyik mezőgazdasági központja.",
    desc_ro: "Mihtarlam este capitala provinciei Laghman și este situată idilic în văile irigate din estul Afganistanului. Orașul este un centru agricol al regiunii.",
    desc_en: "Mihtarlam is the capital of Laghman Province and is idylically situated in the irrigated valleys of eastern Afghanistan. The city is an agricultural center for the region.",
    facts: [
      { de: "Dem lokalen Glauben nach befindet sich in der Stadt das Grab von Lamech, dem Vater Noahs.", hu: "A helyi hiedelmek szerint a városban található Lámek, Noé apjának sírja.", ro: "Conform credinței locale, mormântul lui Lameh, tatăl lui Noe, se află în oraș.", en: "According to local belief, the tomb of Lamech, father of Noah, is located in the city." },
      { de: "Die Gegend profitiert vom Wasserhaushalt der Flüsse Alisheng und Alingar.", hu: "A térség az Aliseng és az Alingar folyók vízháztartásából profitál.", ro: "Zona beneficiază de resursele de apă ale râurilor Alisheng și Alingar.", en: "The area benefits from the water resources of the Alisheng and Alingar rivers." }
    ]
  },
  {
    id: "farah-cities-v2",
    lon: 62.1164, lat: 32.3745,
    parent: "AF-FRA",
    de: "Farah", hu: "Faráh", ro: "Farah", en: "Farah",
    desc_de: "Farah ist eine oasenartige Stadt in Westafghanistan, nahe der iranischen Grenze. Sie liegt am Rande großer Wüstenlandschaften und ist stark vom Agrarsektor abhängig.",
    desc_hu: "Faráh egy oázisszerű város Nyugat-Afganisztánban, az iráni határ közelében. Hatalmas sivatagos tájak peremén fekszik, és erősen függ az agrárszektortól.",
    desc_ro: "Farah este un oraș de tip oază din vestul Afganistanului, aproape de granița cu Iranul. Este situat la marginea unor peisaje deșertice întinse și depinde puternic de sectorul agricol.",
    desc_en: "Farah is an oasis-like city in western Afghanistan, near the Iranian border. It lies on the edge of vast desert landscapes and is heavily dependent on the agricultural sector.",
    facts: [
      { de: "Die Ruinen der Zitadelle von Farah sind eine bedeutende historische Sehenswürdigkeit.", hu: "A faráhi fellegvár romjai jelentős történelmi látványosságnak számítanak.", ro: "Ruinele citadelei din Farah sunt o importantă atracție istorică.", en: "The ruins of the Citadel of Farah are a significant historical attraction." },
      { de: "Farah war historisch gesehen ein Haltepunkt zwischen Herat und Kandahar.", hu: "Faráh történelmileg fontos pihenőhely volt Herát és Kandahár között.", ro: "Din punct de vedere istoric, Farah a fost o escală între Herat și Kandahar.", en: "Historically, Farah was a stopping point between Herat and Kandahar." }
    ]
  },
  {
    id: "puli-alam-cities-v2",
    lon: 69.0227, lat: 33.9953,
    parent: "AF-LOG",
    de: "Pol-e Alam", hu: "Puli-Alam", ro: "Puli Alam", en: "Puli Alam",
    desc_de: "Pol-e Alam ist die Provinzhauptstadt von Logar. Die Stadt liegt knapp südlich von Kabul und dient als wirtschaftlicher Korridor zwischen der Hauptstadtregion und dem Süden.",
    desc_hu: "Puli-Alam Logar tartomány fővárosa. A város Kabultól délre fekszik, és gazdasági folyosóként szolgál a fővárosi régió és a déli országrész között.",
    desc_ro: "Puli Alam este capitala provinciei Logar. Orașul este situat chiar la sud de Kabul și servește ca un coridor economic între regiunea capitalei și sud.",
    desc_en: "Puli Alam is the provincial capital of Logar. The city is located just south of Kabul and serves as an economic corridor between the capital region and the south.",
    facts: [
      { de: "Ein bedeutendes Kupferbergwerksprojekt befindet sich in der Nähe in Mes Aynak.", hu: "Egy jelentős rézbányászati projekt zajlik a közeli Mesz Ajnakban.", ro: "Un proiect major de exploatare a cuprului se află în apropiere, la Mes Aynak.", en: "A major copper mining project is located nearby at Mes Aynak." },
      { de: "Die lokale Wirtschaft wird von der Landwirtschaft geprägt.", hu: "A helyi gazdaságot a mezőgazdaság határozza meg.", ro: "Economia locală este dominată de agricultură.", en: "The local economy is dominated by agriculture." }
    ]
  },
  {
    id: "aybak-cities-v2",
    lon: 68.0155, lat: 36.2647,
    parent: "AF-SAM",
    de: "Aybak", hu: "Ajbak", ro: "Aybak", en: "Aybak",
    desc_de: "Aybak ist die Hauptstadt der Provinz Samangan in Nordafghanistan. Die ruhige Stadt hat eine lange Geschichte und liegt an den antiken Routen durch den Hindukusch.",
    desc_hu: "Ajbak Szamangan tartomány fővárosa Észak-Afganisztánban. A csendes város hosszú történelemmel rendelkezik, és a Hindukus ősi útvonalai mentén fekszik.",
    desc_ro: "Aybak este capitala provinciei Samangan din nordul Afganistanului. Orașul liniștit are o istorie lungă și se află pe rutele antice prin Hindu Kush.",
    desc_en: "Aybak is the capital of Samangan Province in northern Afghanistan. The quiet city has a long history and lies on the ancient routes through the Hindu Kush.",
    facts: [
      { de: "Das buddhistische Höhlenkloster von Tacht-e Rostam liegt in der Nähe der Stadt.", hu: "A Taht-e Rosztam buddhista barlangkolostor a város közelében található.", ro: "Mănăstirea budistă din peșteră Takht-e Rostam se află în apropierea orașului.", en: "The Buddhist cave monastery of Takht-e Rostam is located near the city." },
      { de: "Die Region ist für ihre Mandeln und Pistazien bekannt.", hu: "A régió mandulájáról és pisztáciájáról ismert.", ro: "Regiunea este cunoscută pentru migdalele și fisticul său.", en: "The region is known for its almonds and pistachios." }
    ]
  },
  {
    id: "asadabad-cities-v2",
    lon: 71.1468, lat: 34.8731,
    parent: "AF-KNR",
    de: "Asadabad", hu: "Aszadábád", ro: "Asadabad", en: "Asadabad",
    desc_de: "Asadabad ist die Provinzhauptstadt von Kunar und liegt an der Mündung des Pech in den Kunar-Fluss. Das zerklüftete Gebirgsterrain prägt die abgelegene Siedlung.",
    desc_hu: "Aszadábád Kunar tartomány fővárosa, a Pecs folyó torkolatánál fekszik a Kunar folyón. A zord hegyvidéki terep meghatározza a félreeső települést.",
    desc_ro: "Asadabad este capitala provinciei Kunar și se află la confluența râului Pech cu râul Kunar. Terenul muntos accidentat domină așezarea izolată.",
    desc_en: "Asadabad is the provincial capital of Kunar and is located at the confluence of the Pech and Kunar rivers. The rugged mountainous terrain defines the remote settlement.",
    facts: [
      { de: "Die umgebenden Berge sind von dichten Zedern- und Kiefernwäldern bedeckt.", hu: "A környező hegyeket sűrű cédrus- és fenyőerdők borítják.", ro: "Munții din jur sunt acoperiți de păduri dese de cedru și pin.", en: "The surrounding mountains are covered by dense cedar and pine forests." },
      { de: "Asadabad hat eine enge kulturelle Verbindung zum benachbarten Pakistan.", hu: "Aszadábád szoros kulturális kapcsolatot ápol a szomszédos Pakisztánnal.", ro: "Asadabad are legături culturale strânse cu Pakistanul vecin.", en: "Asadabad has a close cultural connection to neighboring Pakistan." }
    ]
  },
  {
    id: "faizabad-cities-v2",
    lon: 70.5800, lat: 37.1166,
    parent: "AF-BDS",
    de: "Faizabad", hu: "Faizábád", ro: "Faizabad", en: "Faizabad",
    desc_de: "Faizabad ist die wichtigste Stadt in der nordöstlichen Provinz Badachschan und liegt am Fluss Koktscha. Sie war aufgrund der rauen Bergwelt oft von der Außenwelt abgeschnitten.",
    desc_hu: "Faizábád Badahsán északkeleti tartományának legfontosabb városa, a Kokcsa folyó mentén fekszik. A zord hegyvidék miatt gyakran el volt zárva a külvilágtól.",
    desc_ro: "Faizabad este cel mai important oraș din provincia nord-estică Badakhshan, situat pe râul Kokcha. Din cauza peisajului muntos aspru, a fost adesea tăiat de lumea exterioară.",
    desc_en: "Faizabad is the most important city in the northeastern province of Badakhshan, situated on the Kokcha River. Due to the harsh mountainous terrain, it was often cut off from the outside world.",
    facts: [
      { de: "Die Stadt ist ein traditioneller Umschlagplatz für Lapislazuli.", hu: "A város hagyományosan a lazúrkő kereskedelmi központja.", ro: "Orașul este un centru tradițional de tranzacționare pentru lapis lazuli.", en: "The city is a traditional trading hub for lapis lazuli." },
      { de: "Der Name der Stadt bedeutet übersetzt „Stadt des göttlichen Segens“.", hu: "A város neve fordításban „az isteni áldás városa” jelentésű.", ro: "Numele orașului se traduce prin „Orașul binecuvântării divine”.", en: "The name of the city translates to 'City of Divine Blessing'." }
    ]
  },
  {
    id: "qala-e-naw-cities-v2",
    lon: 63.1289, lat: 34.9874,
    parent: "AF-BDG",
    de: "Qala-i-Naw", hu: "Kala-e-Nav", ro: "Qala e Naw", en: "Qala e Naw",
    desc_de: "Qala-i-Naw ist die Hauptstadt der Provinz Badghis im Nordwesten Afghanistans. Die Stadt ist bekannt für ihre traditionellen turkmenischen und belutschischen Teppiche.",
    desc_hu: "Kala-e-Nav Badgísz tartomány fővárosa Északnyugat-Afganisztánban. A város híres hagyományos türkmén és beludzs szőnyegeiről.",
    desc_ro: "Qala e Naw este capitala provinciei Badghis din nord-vestul Afganistanului. Orașul este cunoscut pentru covoarele sale tradiționale turkmene și baluce.",
    desc_en: "Qala e Naw is the capital of Badghis Province in northwestern Afghanistan. The city is known for its traditional Turkmen and Baloch carpets.",
    facts: [
      { de: "Pistazienwälder sind eine wichtige Einnahmequelle für die Region um Qala-i-Naw.", hu: "A pisztáciaerdők fontos bevételi forrást jelentenek a Kala-e-Nav környéki régiónak.", ro: "Pădurile de fistic sunt o sursă importantă de venit pentru regiunea din jurul orașului Qala e Naw.", en: "Pistachio forests are an important source of income for the region around Qala e Naw." },
      { de: "Die Architektur der Stadt besteht aus flachen Lehmhäusern und engen Gassen.", hu: "A város építészetét lapos agyagházak és szűk sikátorok jellemzik.", ro: "Arhitectura orașului constă din case plate din chirpici și străduțe înguste.", en: "The city's architecture consists of flat mud houses and narrow alleys." }
    ]
  },
  {
    id: "mahmud-e-raqi-cities-v2",
    lon: 69.3248, lat: 35.0163,
    parent: "AF-KAP",
    de: "Mahmud-e Raqi", hu: "Mahmud-e Raki", ro: "Mahmud-e-Raqi", en: "Mahmud-e-Raqi",
    desc_de: "Mahmud-e Raqi ist eine kleine Stadt in der Provinz Kapisa, nördlich von Kabul. Sie zeichnet sich durch dichte Baumgruppen und kleine landwirtschaftliche Betriebe aus.",
    desc_hu: "Mahmud-e Raki egy kisváros Kapisza tartományban, Kabultól északra. Sűrű facsoportok és kis mezőgazdasági gazdaságok jellemzik.",
    desc_ro: "Mahmud-e-Raqi este un mic oraș din provincia Kapisa, la nord de Kabul. Se caracterizează prin grupuri dese de copaci și mici ferme agricole.",
    desc_en: "Mahmud-e-Raqi is a small city in Kapisa Province, north of Kabul. It is characterized by dense clusters of trees and small agricultural farms.",
    facts: [
      { de: "Die Stadt liegt unweit der alten Hauptstadt von Bagram.", hu: "A város nem messze fekszik Bagram egykori fővárosától.", ro: "Orașul este situat nu departe de vechea capitală Bagram.", en: "The city is located not far from the ancient capital of Bagram." },
      { de: "Das Flusstal versorgt die Stadt mit reichlich Bewässerungswasser.", hu: "A folyóvölgy bőséges öntözővízzel látja el a várost.", ro: "Valea râului aprovizionează orașul cu apă abundentă pentru irigații.", en: "The river valley provides the city with abundant irrigation water." }
    ]
  },
  {
    id: "zaranj-cities-v2",
    lon: 61.8604, lat: 30.9600,
    parent: "AF-NIM",
    de: "Sarandsch", hu: "Zarandzs", ro: "Zaranj", en: "Zaranj",
    desc_de: "Sarandsch liegt an der Grenze zum Iran und ist die Provinzhauptstadt von Nimrus. Sie ist ein wichtiger Knotenpunkt für den Handel zwischen Afghanistan, Iran und Pakistan.",
    desc_hu: "A Zarandzs az iráni határ mentén fekszik, és Nimruz tartomány fővárosa. Fontos csomópontja az Afganisztán, Irán és Pakisztán közötti kereskedelemnek.",
    desc_ro: "Zaranj este situat la granița cu Iranul și este capitala provinciei Nimruz. Este un nod important pentru comerțul dintre Afganistan, Iran și Pakistan.",
    desc_en: "Zaranj is located on the border with Iran and is the provincial capital of Nimruz. It is a major hub for trade between Afghanistan, Iran, and Pakistan.",
    facts: [
      { de: "Die Stadt leidet häufig unter Wassermangel und Trockenheit.", hu: "A város gyakran küzd vízhiánnyal és aszállyal.", ro: "Orașul suferă adesea de lipsă de apă și secetă.", en: "The city frequently suffers from water shortages and drought." },
      { de: "Ein bedeutendes neues Straßensystem verbindet Zaranj mit dem Hafen von Tschahbahar.", hu: "Egy új, jelentős úthálózat köti össze Zarandzsot a Csábáhár kikötőjével.", ro: "Un nou sistem rutier important conectează Zaranj cu portul Chabahar.", en: "A major new road system connects Zaranj to the port of Chabahar." }
    ]
  },
  {
    id: "tarinkot-cities-v2",
    lon: 65.8733, lat: 32.6268,
    parent: "AF-URU",
    de: "Tarin Kowt", hu: "Tarinkot", ro: "Tarinkot", en: "Tarinkot",
    desc_de: "Tarin Kowt ist die Hauptstadt der zentralafghanischen Provinz Urusgan. Die Stadt hat eine isolierte Lage und ist von kahlen, schroffen Bergen umgeben.",
    desc_hu: "Tarinkot a közép-afganisztáni Uruzgán tartomány fővárosa. A város elszigetelt helyen fekszik, és kopár, zord hegyek veszik körül.",
    desc_ro: "Tarinkot este capitala provinciei Uruzgan din centrul Afganistanului. Orașul are o locație izolată și este înconjurat de munți stâncoși și golași.",
    desc_en: "Tarinkot is the capital of the central Afghan province of Uruzgan. The city has an isolated location and is surrounded by barren, rugged mountains.",
    facts: [
      { de: "Bis 2004 gab es in Tarin Kowt fast keine asphaltierten Straßen.", hu: "2004-ig Tarinkotban szinte egyáltalán nem voltak aszfaltozott utak.", ro: "Până în 2004, în Tarinkot aproape că nu existau drumuri asfaltate.", en: "Until 2004, there were almost no paved roads in Tarinkot." },
      { de: "Die Wirtschaft stützt sich auf subsistenzorientierte Landwirtschaft.", hu: "A gazdaság az önellátó mezőgazdaságra támaszkodik.", ro: "Economia se bazează pe agricultura de subzistență.", en: "The economy relies on subsistence agriculture." }
    ]
  },
  {
    id: "maymana-cities-v2",
    lon: 64.7836, lat: 35.9214,
    parent: "AF-FAR",
    de: "Maimana", hu: "Maimana", ro: "Maymana", en: "Maymana",
    desc_de: "Maimana ist die größte Stadt der Provinz Faryab im Nordwesten Afghanistans. Sie liegt auf einer Höhe von 877 Metern an den nördlichen Ausläufern der Bergkette.",
    desc_hu: "Maimana Fárjáb tartomány legnagyobb városa Északnyugat-Afganisztánban. 877 méteres magasságban fekszik a hegylánc északi lejtőin.",
    desc_ro: "Maymana este cel mai mare oraș din provincia Faryab din nord-vestul Afganistanului. Este situat la o altitudine de 877 de metri la poalele nordice ale lanțului muntos.",
    desc_en: "Maymana is the largest city in Faryab Province in northwestern Afghanistan. It lies at an elevation of 877 meters on the northern foothills of the mountain range.",
    facts: [
      { de: "Der Basar der Stadt ist bekannt für hochwertige Karakul-Felle.", hu: "A város bazárja a kiváló minőségű karakül juhbőréről híres.", ro: "Bazarul orașului este cunoscut pentru blănurile Karakul de înaltă calitate.", en: "The city's bazaar is known for high-quality Karakul pelts." },
      { de: "Maimana hat eine Universität, die 2004 gegründet wurde.", hu: "Maimanában egy 2004-ben alapított egyetem működik.", ro: "Maymana are o universitate fondată în 2004.", en: "Maymana has a university founded in 2004." }
    ]
  },
  {
    id: "gardez-cities-v2",
    lon: 69.2259, lat: 33.5974,
    parent: "AF-PIA",
    de: "Gardez", hu: "Gardéz", ro: "Gardez", en: "Gardez",
    desc_de: "Gardez ist das Zentrum der Provinz Paktia im Osten des Landes. Die Stadt ist von mehreren Passstraßen umgeben, die nach Pakistan führen.",
    desc_hu: "Gardéz Paktia tartomány központja az ország keleti részén. A várost számos olyan hágóút veszi körül, amelyek Pakisztánba vezetnek.",
    desc_ro: "Gardez este centrul provinciei Paktia din estul țării. Orașul este înconjurat de mai multe drumuri de trecere care duc spre Pakistan.",
    desc_en: "Gardez is the center of Paktia Province in the east of the country. The city is surrounded by several mountain passes leading to Pakistan.",
    facts: [
      { de: "Eine große Festung, der Bala Hissar, thront über Gardez.", hu: "Gardéz felett egy nagy erődítmény, a Bala Hisszár magasodik.", ro: "O mare fortăreață, Bala Hissar, se înalță deasupra orașului Gardez.", en: "A large fortress, the Bala Hissar, towers over Gardez." },
      { de: "Die Stadt liegt hoch im Gebirge auf über 2.300 Metern.", hu: "A város magasan a hegyekben, több mint 2300 méteres tengerszint feletti magasságban fekszik.", ro: "Orașul este situat sus în munți, la peste 2.300 de metri altitudine.", en: "The city is located high in the mountains at over 2,300 meters." }
    ]
  },
  {
    id: "maidan-shar-cities-v2",
    lon: 68.8667, lat: 34.3956,
    parent: "AF-WAR",
    de: "Maidan Schahr", hu: "Maidán Sahr", ro: "Maidan Shar", en: "Maidan Shar",
    desc_de: "Maidan Schahr ist die Hauptstadt der Provinz Wardak und liegt nur etwa 40 Kilometer von Kabul entfernt. Sie ist ein landwirtschaftlich geprägtes Handelszentrum.",
    desc_hu: "Maidán Sahr Vardak tartomány fővárosa, mindössze 40 kilométerre fekszik Kabultól. A város egy mezőgazdasági jellegű kereskedelmi központ.",
    desc_ro: "Maidan Shar este capitala provinciei Wardak și se află la doar 40 de kilometri de Kabul. Este un centru comercial axat pe agricultură.",
    desc_en: "Maidan Shar is the capital of Wardak Province and is located just about 40 kilometers from Kabul. It is an agriculturally focused trade center.",
    facts: [
      { de: "Die Provinz Wardak ist für ihre exzellenten Äpfel bekannt.", hu: "Vardak tartomány kiváló minőségű almáiról ismert.", ro: "Provincia Wardak este renumită pentru merele sale excelente.", en: "Wardak Province is known for its excellent apples." },
      { de: "Die Nähe zur Hauptstadt macht sie zu einer beliebten Wohngegend für Pendler.", hu: "A főváros közelsége miatt népszerű lakóövezet az ingázók számára.", ro: "Apropierea de capitală o face o zonă rezidențială populară pentru navetiști.", en: "Its proximity to the capital makes it a popular residential area for commuters." }
    ]
  },
  {
    id: "qalat-cities-v2",
    lon: 66.8986, lat: 32.1058,
    parent: "AF-ZAB",
    de: "Qalat", hu: "Kalat", ro: "Qalat", en: "Qalat",
    desc_de: "Qalat ist die Hauptstadt der Provinz Zabul im südlichen Afghanistan. Sie ist ein wichtiger Halt auf der Autobahn, die Kabul mit Kandahar verbindet.",
    desc_hu: "Kalat Zabul tartomány fővárosa Dél-Afganisztánban. Fontos megállóhely a Kabult és Kandahárt összekötő autópályán.",
    desc_ro: "Qalat este capitala provinciei Zabul din sudul Afganistanului. Este o oprire importantă pe autostrada care leagă Kabul de Kandahar.",
    desc_en: "Qalat is the capital of Zabul Province in southern Afghanistan. It is an important stop on the highway connecting Kabul with Kandahar.",
    facts: [
      { de: "Die Stadt wird von einer Festung dominiert, die Alexander der Große erbaut haben soll.", hu: "A várost egy erődítmény uralja, amelyet állítólag Nagy Sándor építtetett.", ro: "Orașul este dominat de o fortăreață despre care se spune că ar fi fost construită de Alexandru cel Mare.", en: "The city is dominated by a fortress said to have been built by Alexander the Great." },
      { de: "Das trockene Wüstenklima prägt das Leben in Qalat.", hu: "A száraz sivatagi éghajlat meghatározza a kalati életet.", ro: "Clima aridă de deșert modelează viața în Qalat.", en: "The dry desert climate shapes life in Qalat." }
    ]
  },
  {
    id: "bamyan-cities-v2",
    lon: 67.8213, lat: 34.8217,
    parent: "AF-BAM",
    de: "Bamiyan", hu: "Bámiján", ro: "Bamyan", en: "Bamyan",
    desc_de: "Bamiyan liegt zentral in Afghanistan und ist für seine beeindruckende Geschichte und Kulturlandschaft bekannt. Die Stadt war einst ein wichtiges buddhistisches Zentrum entlang der Seidenstraße.",
    desc_hu: "A Közép-Afganisztánban fekvő Bámiján lenyűgöző történelméről és kulturális tájáról ismert. A város egykor fontos buddhista központ volt a Selyemút mentén.",
    desc_ro: "Bamyan este situat central în Afganistan și este cunoscut pentru istoria sa impresionantă și peisajul cultural. Orașul a fost cândva un important centru budist de-a lungul Drumului Mătăsii.",
    desc_en: "Located centrally in Afghanistan, Bamyan is known for its impressive history and cultural landscape. The city was once a major Buddhist center along the Silk Road.",
    facts: [
      { de: "Bamiyan ist weltberühmt für die riesigen Buddha-Statuen, die 2001 zerstört wurden.", hu: "Bámiján világhírű az óriási Buddha-szobrokról, amelyeket 2001-ben pusztítottak el.", ro: "Bamyan este faimos în întreaga lume pentru statuile gigantice ale lui Buddha, care au fost distruse în 2001.", en: "Bamyan is world-famous for the giant Buddha statues that were destroyed in 2001." },
      { de: "Der nahegelegene Band-e-Amir-Nationalpark war der erste Nationalpark Afghanistans.", hu: "A közeli Band-e Amir Nemzeti Park volt Afganisztán első nemzeti parkja.", ro: "Parcul Național Band-e-Amir din apropiere a fost primul parc național din Afganistan.", en: "The nearby Band-e-Amir National Park was Afghanistan's first national park." }
    ]
  }
];

let out = `import type { POI } from "./poi";

export const poiExtraAfghanistanCitiesV2: POI[] = [
`;

cities.forEach((c, i) => {
  const type = (c.id === 'kabul-cities-v2' || c.parent.startsWith('AF-')) ? 'state-capital' : 'city'; // Used state-capital for all provincial capitals
  
  out += `  {
    id: "${c.id}",
    type: "state-capital",
    parent: "${c.parent}",
    coords: [${c.lon}, ${c.lat}],
    name: { de: "${c.de}", hu: "${c.hu}", ro: "${c.ro}", en: "${c.en}" },
    description: { de: "${c.desc_de}", hu: "${c.desc_hu}", ro: "${c.desc_ro}", en: "${c.desc_en}" },
    facts: {
      de: [
        "${c.facts[0].de}",
        "${c.facts[1].de}"
      ],
      hu: [
        "${c.facts[0].hu}",
        "${c.facts[1].hu}"
      ],
      ro: [
        "${c.facts[0].ro}",
        "${c.facts[1].ro}"
      ],
      en: [
        "${c.facts[0].en}",
        "${c.facts[1].en}"
      ]
    }
  }`;
  if (i < cities.length - 1) out += ",\n";
  else out += "\n";
});

out += `];\n`;

fs.writeFileSync('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAfghanistanCitiesV2.ts', out, 'utf8');
console.log('Done writing');
