import type { POI } from "./poi";

export const ukraineCountry: POI = {
  id: "country-ukraine",
  type: "country",
  parent: "europe",
  coords: [31.1656, 48.3794],
  name: {
    de: "Ukraine",
    hu: "Ukrajna",
    ro: "Ucraina",
    en: "Ukraine"
  },
  description: {
    de: "Die Ukraine ist das flächenmäßig größte Land, das vollständig in Europa liegt, bekannt für ihre weiten Steppen, die Karpaten und eine reiche Geschichte.",
    hu: "Ukrajna a legnagyobb olyan ország, amely teljes egészében Európában található, híres végtelen sztyeppéiről, a Kárpátokról és gazdag történelméről.",
    ro: "Ucraina este cea mai mare țară aflată în întregime în Europa, cunoscută pentru stepele sale vaste, Munții Carpați și o istorie bogată.",
    en: "Ukraine is the largest country located entirely within Europe, known for its vast steppes, the Carpathian Mountains, and a rich history."
  },
  descriptionAdvanced: {
    de: "Die Ukraine ist ein faszinierendes osteuropäisches Land an der Kreuzung zwischen Europa und Asien. Mit ihren weiten Sonnenblumenfeldern, der Schwarzmeerküste im Süden und den malerischen Karpaten im Westen bietet sie eine bemerkenswerte geografische Vielfalt. Kulturell ist das Land tief in seiner slawischen und orthodoxen Tradition verwurzelt, was sich in den goldenen Kuppeln von Kyjiw und der historischen Altstadt von Lwiw widerspiegelt. Die ukrainische Identität ist geprägt von Widerstandsfähigkeit, reicher Folklore und einer weltbekannten Gastronomie wie Borschtsch und Wareniki.",
    hu: "Ukrajna lenyűgöző kelet-európai ország Európa és Ázsia találkozásánál. Végtelen napraforgómezőivel, déli fekete-tengeri partvidékével és a festői nyugati Kárpátokkal figyelemre méltó földrajzi sokszínűséget kínál. Kulturális szempontból az ország mélyen gyökerezik szláv és ortodox hagyományaiban, ami Kijev aranykupoláiban és Lviv történelmi óvárosában is tükröződik. Az ukrán identitást a rugalmasság, a gazdag folklór és a világszerte ismert gasztronómia – például a borscs és a varenyiki – határozza meg.",
    ro: "Ucraina este o țară est-europeană fascinantă, situată la intersecția dintre Europa și Asia. Cu câmpurile sale vaste de floarea-soarelui, coasta Mării Negre în sud și pitoreștii Munți Carpați în vest, oferă o diversitate geografică remarcabilă. Din punct de vedere cultural, țara este adânc înrădăcinată în tradiția slavă și ortodoxă, reflectată în cupolele aurii din Kiev și în centrul istoric din Lviv. Identitatea ucraineană se distinge prin reziliență, un folclor bogat și o gastronomie renumită, precum borșul și vareniki.",
    en: "Ukraine is a fascinating Eastern European country at the crossroads of Europe and Asia. With its vast sunflower fields, the Black Sea coast in the south, and the picturesque Carpathian Mountains in the west, it offers remarkable geographical diversity. Culturally, the country is deeply rooted in its Slavic and Orthodox traditions, reflected in the golden domes of Kyiv and the historic old town of Lviv. Ukrainian identity is defined by resilience, rich folklore, and world-renowned gastronomy, such as borscht and varenyky."
  },
  facts: {
    de: [
      "Die Ukraine ist flächenmäßig das größte Land komplett in Europa.",
      "Kiew ist eine der ältesten Städte Osteuropas.",
      "Das Land ist einer der größten Getreide- und Sonnenblumenölexporteure der Welt.",
      "Die tiefste U-Bahn-Station der Welt befindet sich in Kiew (Arsenalna).",
      "Die Karpaten beherbergen einige der letzten Urwälder Europas.",
      "Das ukrainische Instrument Trembita ist das längste Blasinstrument der Welt.",
      "Borschtsch wurde von der UNESCO als ukrainisches Kulturerbe anerkannt.",
      "Das Land besitzt sieben UNESCO-Welterbestätten.",
      "Die Antonow An-225 Mrija, einst das größte Flugzeug der Welt, wurde hier gebaut.",
      "Die Ukraine grenzt an sieben europäische Länder."
    ],
    hu: [
      "Területét tekintve Ukrajna a legnagyobb teljes egészében európai ország.",
      "Kijev Kelet-Európa egyik legrégebbi városa.",
      "Az ország a világ egyik legnagyobb gabona- és napraforgóolaj-exportőre.",
      "A világ legmélyebb metróállomása Kijevben található (Arszenalna).",
      "A Kárpátok Európa utolsó őserdőinek egy részét rejtik.",
      "Az ukrán trembita a világ leghosszabb fúvós hangszere.",
      "A borscsot az UNESCO ukrán kulturális örökségként ismerte el.",
      "Az országnak hét UNESCO világörökségi helyszíne van.",
      "Itt építették az Antonov An-225 Mriját, a világ egykori legnagyobb repülőgépét.",
      "Ukrajna hét európai országgal határos."
    ],
    ro: [
      "Ca suprafață, Ucraina este cea mai mare țară aflată în întregime în Europa.",
      "Kievul este unul dintre cele mai vechi orașe din Europa de Est.",
      "Țara este unul dintre cei mai mari exportatori de cereale și ulei de floarea-soarelui din lume.",
      "Cea mai adâncă stație de metrou din lume se află la Kiev (Arsenalna).",
      "Munții Carpați adăpostesc o parte din ultimele păduri virgine ale Europei.",
      "Instrumentul ucrainean trembita este cel mai lung instrument de suflat din lume.",
      "Borșul a fost recunoscut de UNESCO drept patrimoniu cultural ucrainean.",
      "Țara deține șapte situri incluse în Patrimoniul Mondial UNESCO.",
      "Antonov An-225 Mriya, odinioară cel mai mare avion din lume, a fost construit aici.",
      "Ucraina se învecinează cu șapte țări europene."
    ],
    en: [
      "By land area, Ukraine is the largest country located entirely in Europe.",
      "Kyiv is one of the oldest cities in Eastern Europe.",
      "The country is one of the world's largest exporters of grain and sunflower oil.",
      "The deepest metro station in the world is located in Kyiv (Arsenalna).",
      "The Carpathian Mountains harbor some of Europe's last virgin forests.",
      "The Ukrainian trembita is the longest wind instrument in the world.",
      "Borscht has been recognized by UNESCO as Ukrainian cultural heritage.",
      "The country has seven UNESCO World Heritage sites.",
      "The Antonov An-225 Mriya, once the world's largest aircraft, was built here.",
      "Ukraine shares borders with seven European countries."
    ]
  },
  image: "/geo-images/ukraine/country-ukraine.webp"
};

export const ukraineCities: POI[] = [
  {
    id: "city-kyiv",
    type: "city",
    parent: "UA-025",
    coords: [30.5234, 50.4501],
    name: { de: "Kiew", hu: "Kijev", ro: "Kiev", en: "Kyiv" },
    description: {
      de: "Kyjiw, die Hauptstadt der Ukraine, ist bekannt für ihre goldenen Kuppelkirchen, breiten Boulevards und tiefe Geschichte, die sie zur 'Mutter der slawischen Städte' macht.",
      hu: "Kijev, Ukrajna fővárosa, aranykupolás templomairól, széles sugárútjairól és mély történelméről ismert, amely a 'szláv városok anyjává' teszi.",
      ro: "Kiev, capitala Ucrainei, este cunoscut pentru bisericile sale cu cupole aurii, bulevardele largi și istoria profundă, ceea ce îl face 'mama orașelor slave'.",
      en: "Kyiv, the capital of Ukraine, is known for its golden-domed churches, wide boulevards, and deep history, earning it the title 'Mother of Slavic Cities'."
    },
    facts: {
      de: ["Hauptstadt und größte Stadt", "Heimat des Kiewer Höhlenklosters", "Liegt am Dnipro", "Hat die tiefste U-Bahn-Station der Welt"],
      hu: ["Főváros és legnagyobb város", "A Kijevi Pecserszka Lavra otthona", "A Dnyeper folyó partján fekszik", "Itt van a világ legmélyebb metróállomása"],
      ro: ["Capitala și cel mai mare oraș", "Găzduiește Lavra Pecerska din Kiev", "Situat pe râul Nipru", "Are cea mai adâncă stație de metrou din lume"],
      en: ["Capital and largest city", "Home to the Kyiv Pechersk Lavra", "Located on the Dnipro River", "Features the world's deepest metro station"]
    },
    image: "/geo-images/ukraine/city-kyiv.webp"
  },
  {
    id: "city-lviv",
    type: "city",
    parent: "UA-011",
    coords: [24.0311, 49.8397],
    name: { de: "Lemberg", hu: "Lviv", ro: "Liov", en: "Lviv" },
    description: {
      de: "Lwiw, das kulturelle Herz der Westukraine, fasziniert mit kopfsteingepflasterten Straßen, Kaffeehauskultur und einer UNESCO-geschützten Altstadt mit Einflüssen aus der k. u. k. Monarchie.",
      hu: "Lviv, Nyugat-Ukrajna kulturális szíve, macskaköves utcáival, kávéházi kultúrájával és UNESCO által védett, osztrák-magyar hatásokat őrző óvárosával varázsol el.",
      ro: "Lviv, inima culturală a Ucrainei de Vest, fascinează prin străzile sale pietruite, cultura cafenelelor și un centru vechi protejat de UNESCO, cu influențe austro-ungare.",
      en: "Lviv, the cultural heart of Western Ukraine, fascinates with cobblestone streets, coffee house culture, and a UNESCO-protected old town with Austro-Hungarian influences."
    },
    facts: {
      de: ["Kulturhauptstadt der Ukraine", "Berühmt für Kaffee und Schokolade", "Altstadt ist UNESCO-Welterbe", "Gilt als die am stärksten europäisch geprägte Stadt der Ukraine"],
      hu: ["Ukrajna kulturális fővárosa", "Kávéjáról és csokoládéjáról híres", "Óvárosa UNESCO világörökség", "A leginkább európai jellegű ukrán városként tartják számon"],
      ro: ["Capitala culturală a Ucrainei", "Renumit pentru cafea și ciocolată", "Centrul vechi este în Patrimoniul UNESCO", "Considerat cel mai european oraș din Ucraina"],
      en: ["Cultural capital of Ukraine", "Famous for coffee and chocolate", "Old town is a UNESCO World Heritage site", "Considered the most European city in Ukraine"]
      },
      image: "/geo-images/ukraine/city-lviv.webp"
      },
      {
      id: "city-odesa",
    type: "city",
    parent: "UA-009",
    coords: [30.7326, 46.4825],
    name: { de: "Odessa", hu: "Odessza", ro: "Odesa", en: "Odesa" },
    description: {
      de: "Odesa, die 'Perle des Schwarzen Meeres', ist der wichtigste Seehafen des Landes. Die Stadt ist für ihre Potemkinsche Treppe, das majestätische Opernhaus und eine weltoffene Atmosphäre bekannt.",
      hu: "Odessza, a 'Fekete-tenger gyöngye', az ország legfontosabb tengeri kikötője. A város a Patyomkin-lépcsőről, fenséges operaházáról és kozmopolita hangulatáról ismert.",
      ro: "Odesa, 'Perla Mării Negre', este cel mai important port maritim al țării. Orașul este cunoscut pentru Scările Potemkin, opera sa maiestuoasă și atmosfera cosmopolită.",
      en: "Odesa, the 'Pearl of the Black Sea', is the country's most important seaport. The city is known for its Potemkin Stairs, majestic opera house, and cosmopolitan atmosphere."
    },
    facts: {
      de: ["Wichtigster Hafen am Schwarzen Meer", "Bekannt für die Potemkinsche Treppe", "Hat ein prachtvolles Opernhaus", "Beliebtes Sommerurlaubsziel"],
      hu: ["Legfontosabb fekete-tengeri kikötő", "A Patyomkin-lépcsőről híres", "Pompás operaháza van", "Népszerű nyári nyaralóhely"],
      ro: ["Cel mai important port la Marea Neagră", "Cunoscut pentru Scările Potemkin", "Are o operă magnifică", "Destinație populară de vacanță de vară"],
      en: ["Most important Black Sea port", "Known for the Potemkin Stairs", "Features a magnificent opera house", "Popular summer holiday destination"]
    },
    image: "/geo-images/ukraine/city-odesa.webp"
  },
  {
    id: "city-kharkiv",
    type: "city",
    parent: "UA-013",
    coords: [36.2304, 50.0057],
    name: { de: "Charkiw", hu: "Harkiv", ro: "Harkov", en: "Kharkiv" },
    description: {
      de: "Charkiw ist die zweitgrößte Stadt der Ukraine und ein bedeutendes Industrie- und Universitätszentrum. Sie besticht durch weitläufige Plätze und konstruktivistische Architektur.",
      hu: "Harkiv Ukrajna második legnagyobb városa, jelentős ipari és egyetemi központ. Hatalmas tereivel és konstruktivista építészetével hódít.",
      ro: "Harkov este al doilea oraș ca mărime din Ucraina și un centru industrial și universitar major. Impresionează prin piețele sale spațioase și arhitectura constructivistă.",
      en: "Kharkiv is Ukraine's second-largest city and a major industrial and university center. It impresses with its vast squares and constructivist architecture."
    },
    facts: {
      de: ["Zweitgrößte Stadt der Ukraine", "Ehemalige Hauptstadt der Ukrainischen SSR", "Bekannt für den Freiheitsplatz (Ploschtscha Swobody)", "Großes Wissenschafts- und Bildungszentrum"],
      hu: ["Ukrajna második legnagyobb városa", "Az Ukrán SZSZK egykori fővárosa", "A Szabadság térről (Ploscsa Szvobodi) ismert", "Nagy tudományos és oktatási központ"],
      ro: ["Al doilea cel mai mare oraș din Ucraina", "Fosta capitală a RSS Ucrainene", "Cunoscut pentru Piața Libertății", "Mare centru științific și educațional"],
      en: ["Second-largest city in Ukraine", "Former capital of the Ukrainian SSR", "Known for Freedom Square", "Major scientific and educational hub"]
    },
    image: "/geo-images/ukraine/city-kharkiv.webp"
  },
  {
    id: "city-dnipro",
    type: "city",
    parent: "UA-022",
    coords: [35.0462, 48.4647],
    name: { de: "Dnipro", hu: "Dnyipro", ro: "Dnipro", en: "Dnipro" },
    description: {
      de: "Dnipro, am gleichnamigen Fluss gelegen, ist das Herz der ukrainischen Raumfahrt- und Schwerindustrie, kombiniert mit einer kilometerlangen, wunderschönen Uferpromenade.",
      hu: "Dnyipro, a folyóról elnevezett város, az ukrán űripar és nehézipar szíve, amelyet egy kilométereken át húzódó, gyönyörű folyóparti sétány kísér.",
      ro: "Dnipro, situat pe râul cu același nume, este inima industriei spațiale și grele ucrainene, combinată cu o promenadă superbă pe malul apei care se întinde pe kilometri.",
      en: "Dnipro, situated on the river of the same name, is the heart of Ukraine's space and heavy industry, combined with a beautiful, miles-long waterfront promenade."
    },
    facts: {
      de: ["Wichtiges Industriezentrum", "Zentrum der ukrainischen Raumfahrtindustrie", "Hat eine der längsten Flussuferpromenaden Europas", "Liegt am Dnipro-Fluss"],
      hu: ["Fontos ipari központ", "Az ukrán űripar központja", "Európa egyik leghosszabb folyóparti sétányával rendelkezik", "A Dnyeper folyó partján fekszik"],
      ro: ["Centru industrial important", "Centrul industriei spațiale ucrainene", "Are una dintre cele mai lungi promenade pe râu din Europa", "Situat pe râul Nipru"],
      en: ["Important industrial center", "Hub of the Ukrainian space industry", "Features one of the longest river promenades in Europe", "Located on the Dnipro River"]
    },
    image: "/geo-images/ukraine/city-dnipro.webp"
  },
  {
    id: "city-chernivtsi",
    type: "city",
    parent: "UA-007",
    coords: [25.9398, 48.2915],
    name: { de: "Czernowitz", hu: "Csernyivci", ro: "Cernăuți", en: "Chernivtsi" },
    description: {
      de: "Czernowitz, auch 'Klein-Wien' genannt, ist eine multikulturelle Perle in der Bukowina. Die Universität der Stadt ist ein architektonisches Meisterwerk und UNESCO-Welterbe.",
      hu: "A 'Kis-Bécsnek' is nevezett Csernyivci egy multikulturális gyöngyszem a Bukovinában. A város egyeteme építészeti remekmű és UNESCO világörökségi helyszín.",
      ro: "Cernăuți, supranumit și 'Mica Vienă', este o perlă multiculturală din Bucovina. Universitatea din oraș este o capodoperă arhitecturală și parte a Patrimoniului UNESCO.",
      en: "Chernivtsi, also known as 'Little Vienna', is a multicultural pearl in Bukovina. The city's university is an architectural masterpiece and a UNESCO World Heritage site."
    },
    facts: {
      de: ["Historisches Zentrum der Bukowina", "Die Universität war früher die Residenz der orthodoxen Metropoliten", "Multikulturelle Vergangenheit (Österreicher, Rumänen, Juden, Ukrainer)", "Architektonisch stark von der k.u.k.-Zeit geprägt"],
      hu: ["Bukovina történelmi központja", "Az egyetem egykor az ortodox metropoliták rezidenciája volt", "Multikulturális múlt (osztrákok, románok, zsidók, ukránok)", "Építészetileg erős osztrák-magyar hatás"],
      ro: ["Centrul istoric al Bucovinei", "Universitatea a fost fosta Reședință a Mitropoliților Ortodocși", "Trecut multicultural (austrieci, români, evrei, ucraineni)", "Arhitectură puternic influențată de perioada habsburgică"],
      en: ["Historic center of Bukovina", "The university was the former Residence of Bukovinian and Dalmatian Metropolitans", "Multicultural past (Austrians, Romanians, Jews, Ukrainians)", "Architecture heavily influenced by the Habsburg era"]
    },
    image: "/geo-images/ukraine/city-chernivtsi.webp"
  },
  {
    id: "city-uzhhorod",
    type: "city",
    parent: "UA-006",
    coords: [22.2879, 48.6208],
    name: { de: "Uschhorod", hu: "Ungvár", ro: "Ujhorod", en: "Uzhhorod" },
    description: {
      de: "Uschhorod, die Hauptstadt der Transkarpatien-Region, ist die westlichste Stadt der Ukraine. Sie ist berühmt für ihre Frühlings-Sakura-Blüte, die alte Burg und die multiethnische Atmosphäre.",
      hu: "Ungvár, Kárpátalja központja Ukrajna legnyugatibb városa. Híres tavaszi cseresznyevirágzásáról, ősi váráról és soknemzetiségű hangulatáról.",
      ro: "Ujhorod, capitala regiunii Transcarpatia, este cel mai vestic oraș din Ucraina. Es faimos pentru înflorirea cireșilor japonezi primăvara, castelul vechi și atmosfera multietnică.",
      en: "Uzhhorod, the capital of the Transcarpathia region, is the westernmost city of Ukraine. It is famous for its spring sakura blossoms, ancient castle, and multi-ethnic atmosphere."
    },
    facts: {
      de: ["Westlichste Stadt der Ukraine", "Grenzt direkt an die Slowakei", "Berühmt für die Kirschblüte im April", "Ushhoroder Burg aus dem 9. Jahrhundert"],
      hu: ["Ukrajna legnyugatibb városa", "Közvetlenül határos Szlovákiával", "Híres az áprilisi cseresznyevirágzásról", "9. századi ungvári vár"],
      ro: ["Cel mai vestic oraș din Ucraina", "Se învecinează direct cu Slovacia", "Faimos pentru florile de cireș din aprilie", "Castelul Ujhorod datează din secolul al IX-lea"],
      en: ["Westernmost city in Ukraine", "Borders Slovakia directly", "Famous for cherry blossoms in April", "Uzhhorod Castle dates back to the 9th century"]
    },
    image: "/geo-images/ukraine/city-uzhhorod.webp"
  }
];

export const ukraineLandmarks: POI[] = [
  {
    id: "landmark-pechersk-lavra",
    type: "landmark",
    parent: "UA-025",
    coords: [30.5574, 50.4346],
    name: { de: "Kiewer Höhlenkloster", hu: "Kijevi Pecserszka Lavra", ro: "Lavra Pecerska", en: "Kyiv Pechersk Lavra" },
    description: {
      de: "Das Kiewer Höhlenkloster ist ein historisches orthodoxes christianisches Kloster, bekannt für sein unterirdisches Höhlensystem und die prächtigen Goldkuppeln. Ein UNESCO-Welterbe.",
      hu: "A Kijevi Pecserszka Lavra egy történelmi ortodox keresztény kolostor, amely földalatti barlangrendszeréről és pompás aranykupoláiról ismert. UNESCO világörökség.",
      ro: "Lavra Pecerska din Kiev este o mănăstire creștin-ortodoxă istorică, cunoscută pentru sistemul său de peșteri subterane și cupolele aurii magnifice. Sit UNESCO.",
      en: "The Kyiv Pechersk Lavra is a historic Orthodox Christian monastery, famous for its underground cave system and magnificent golden domes. A UNESCO World Heritage site."
    },
    facts: {
      de: ["Gründung im Jahr 1051", "Unterirdische Höhlen mit Reliquien von Heiligen", "Eines der wichtigsten Heiligtümer der Orthodoxie", "UNESCO-Welterbe seit 1990"],
      hu: ["1051-ben alapították", "Földalatti barlangok szentek ereklyéivel", "Az ortodoxia egyik legfontosabb szentélye", "1990 óta UNESCO világörökség"],
      ro: ["Fondată în anul 1051", "Peșteri subterane cu moaște de sfinți", "Unul dintre cele mai importante sanctuare ale ortodoxiei", "În Patrimoniul Mondial UNESCO din 1990"],
      en: ["Founded in 1051", "Underground caves with relics of saints", "One of the most important shrines in Orthodoxy", "UNESCO World Heritage site since 1990"]
    },
    image: "/geo-images/ukraine/landmark-pechersk-lavra.webp"
  },
  {
    id: "landmark-st-sophia",
    type: "historical",
    parent: "UA-025",
    coords: [30.5143, 50.4528],
    name: { de: "Sophienkathedrale", hu: "Szent Szófia-székesegyház", ro: "Catedrala Sfânta Sofia", en: "St. Sophia's Cathedral" },
    description: {
      de: "Die Sophienkathedrale in Kiew ist ein Meisterwerk der Kiewer Rus aus dem 11. Jahrhundert. Sie beherbergt die weltweit größte Sammlung von Mosaiken und Fresken aus dieser Zeit.",
      hu: "A kijevi Szent Szófia-székesegyház a Kijevi Rusz 11. századi remekműve. Itt található a világ legnagyobb, ebből a korból származó mozaik- és freskógyűjteménye.",
      ro: "Catedrala Sfânta Sofia din Kiev este o capodoperă a Rusiei Kievene din secolul al XI-lea. Găzduiește cea mai mare colecție din lume de mozaicuri și fresce din acea perioadă.",
      en: "St. Sophia's Cathedral in Kyiv is an 11th-century masterpiece of Kievan Rus'. It houses the world's largest collection of mosaics and frescoes from that era."
    },
    facts: {
      de: ["Erbaut im 11. Jahrhundert von Jaroslaw dem Weisen", "Grün-goldene Kuppeln im ukrainischen Barock", "Originalmosaike erhalten", "Erstes UNESCO-Welterbe der Ukraine"],
      hu: ["Bölcs Jaroszláv építtette a 11. században", "Zöld-arany kupolák ukrán barokk stílusban", "Eredeti mozaikok maradtak fenn", "Ukrajna első UNESCO világörökségi helyszíne"],
      ro: ["Construită în secolul al XI-lea de Iaroslav cel Înțelept", "Cupole verzi și aurii în stil baroc ucrainean", "Mozaicuri originale conservate", "Primul sit UNESCO din Ucraina"],
      en: ["Built in the 11th century by Yaroslav the Wise", "Green and gold domes in Ukrainian Baroque style", "Original mosaics preserved", "Ukraine's first UNESCO World Heritage site"]
    },
    image: "/geo-images/ukraine/landmark-st-sophia.webp"
  },
  {
    id: "landmark-chernobyl",
    type: "historical",
    parent: "UA-005",
    coords: [30.0975, 51.3895],
    name: { de: "Tschernobyl Ausschlusszone", hu: "Csernobil elzárt övezet", ro: "Zona de excludere Cernobîl", en: "Chernobyl Exclusion Zone" },
    description: {
      de: "Die Tschernobyl-Sperrzone ist der Schauplatz der Nuklearkatastrophe von 1986. Die verlassene Stadt Prypjat und das Duga-Radar sind stumme Zeugen der sowjetischen Geschichte.",
      hu: "A csernobili elzárt övezet az 1986-os nukleáris katasztrófa helyszíne. Az elhagyatott Pripjaty városa és a Duga radar a szovjet történelem néma tanúi.",
      ro: "Zona de excludere Cernobîl este locul dezastrului nuclear din 1986. Orașul părăsit Pripiat și radarul Duga sunt martori tăcuți ai istoriei sovietice.",
      en: "The Chernobyl Exclusion Zone is the site of the 1986 nuclear disaster. The abandoned city of Pripyat and the Duga radar stand as silent witnesses to Soviet history."
    },
    facts: {
      de: ["Ort der Katastrophe von 1986", "Die Geisterstadt Prypjat ist von der Natur zurückerobert worden", "Sicherheitskuppel (NSC) schirmt Reaktor 4 ab", "Wurde zu einem Ort für Dark Tourism"],
      hu: ["Az 1986-os katasztrófa helyszíne", "A szellemváros Pripjatyot visszafoglalta a természet", "Egy új szarkofág védi a 4-es reaktort", "A katasztrófaturizmus ('dark tourism') célpontjává vált"],
      ro: ["Locul dezastrului din 1986", "Orașul fantomă Pripiat a fost recucerit de natură", "Noul Confinament de Siguranță protejează reactorul 4", "A devenit o destinație pentru dark tourism"],
      en: ["Site of the 1986 disaster", "The ghost town of Pripyat has been reclaimed by nature", "New Safe Confinement shields Reactor 4", "Has become a site for dark tourism"]
    },
    image: "/geo-images/ukraine/landmark-chernobyl.webp"
  },
  {
    id: "historical-kamianets-podilskyi",
    type: "historical",
    parent: "UA-020",
    coords: [26.5746, 48.6738],
    name: { de: "Festung Kamjanez-Podilskyj", hu: "Kamjanec-pogyilszkiji vár", ro: "Cetatea Camenița", en: "Kamianets-Podilskyi Castle" },
    description: {
      de: "Die mächtige Festung von Kamjanez-Podilskyj thront auf einer felsigen Halbinsel in der Smotrytsch-Schlucht. Sie ist eines der sieben Wunder der Ukraine und eine spektakuläre mittelalterliche Anlage.",
      hu: "A kamjanec-pogyilszkiji hatalmas erőd a Szmotrics-szurdok egy sziklás félszigetén magasodik. Ukrajna hét csodájának egyike, és látványos középkori építmény.",
      ro: "Măreața cetate Camenița tronează pe o peninsulă stâncoasă în defileul Smotrici. Este una dintre cele șapte minuni ale Ucrainei și o fortificație medievală spectaculoasă.",
      en: "The mighty Kamianets-Podilskyi fortress towers on a rocky peninsula in the Smotrych River canyon. It is one of the Seven Wonders of Ukraine and a spectacular medieval structure."
    },
    facts: {
      de: ["Gilt als eines der 'Sieben Wunder der Ukraine'", "Steht spektakulär auf einer vom Fluss umspülten Felsinsel", "War eine Schlüsselburg zur Verteidigung gegen die Osmanen", "Besitzt 11 imposante Türme"],
      hu: ["'Ukrajna hét csodája' közé tartozik", "Látványosan egy folyó által körülölelt szigeten áll", "Kulcsfontosságú vár volt az oszmánok elleni védelemben", "11 impozáns tornya van"],
      ro: ["Considerată una dintre 'Cele șapte minuni ale Ucrainei'", "Este așezată spectaculos pe o insulă stâncoasă înconjurată de un râu", "A fost o cetate cheie de apărare împotriva otomanilor", "Are 11 turnuri impunătoare"],
      en: ["Considered one of the 'Seven Wonders of Ukraine'", "Spectacularly situated on a rocky island surrounded by a river", "Was a key defensive fortress against the Ottomans", "Features 11 imposing towers"]
    },
    image: "/geo-images/ukraine/historical-kamianets-podilskyi.webp"
  },
  {
    id: "historical-khotyn",
    type: "historical",
    parent: "UA-007",
    coords: [26.4984, 48.5221],
    name: { de: "Festung Chotyn", hu: "Hotini erőd", ro: "Cetatea Hotin", en: "Khotyn Fortress" },
    description: {
      de: "Am Ufer des Dnister erhebt sich die gewaltige Festung Chotyn mit ihren bis zu 40 Meter hohen Mauern. Sie war Schauplatz zahlreicher historischer Schlachten zwischen Polen-Litauen, den Kosaken und dem Osmanischen Reich.",
      hu: "A Dnyeszter partján magasodik a hatalmas hotini erőd, amelynek falai elérik a 40 métert is. Számos történelmi csata színhelye volt a Lengyel-Litván Unió, a kozákok és az Oszmán Birodalom között.",
      ro: "Pe malul Nistrului se ridică formidabila Cetate Hotin, cu ziduri de până la 40 de metri înălțime. A fost scena a numeroase bătălii istorice între Polonia-Lituania, cazaci și Imperiul Otoman.",
      en: "On the banks of the Dniester River stands the formidable Khotyn Fortress, with walls up to 40 meters high. It was the site of numerous historic battles between Poland-Lithuania, the Cossacks, and the Ottoman Empire."
    },
    facts: {
      de: ["Erbaut im 13. bis 15. Jahrhundert", "Mauern sind bis zu 40 Meter hoch und 6 Meter dick", "Schauplatz der berühmten Schlacht von Chotyn (1621)", "Beliebte Filmkulisse in Osteuropa"],
      hu: ["A 13-15. században épült", "Falai akár 40 méter magasak és 6 méter vastagok", "A híres 1621-es hotini csata helyszíne", "Népszerű kelet-európai forgatási helyszín"],
      ro: ["Construită între secolele XIII și XV", "Zidurile au până la 40 de metri înălțime și 6 metri grosime", "Locul faimoasei Bătălii de la Hotin (1621)", "Locație populară de filmare în Europa de Est"],
      en: ["Built between the 13th and 15th centuries", "Walls are up to 40 meters high and 6 meters thick", "Site of the famous Battle of Khotyn (1621)", "Popular film location in Eastern Europe"]
    },
    image: "/geo-images/ukraine/historical-khotyn.webp"
  }
];

export const ukraineNature: POI[] = [
  {
    id: "mountain-hoverla",
    type: "mountain",
    parent: "UA-008",
    coords: [24.5025, 48.1603],
    name: { de: "Howerla", hu: "Hoverla", ro: "Hoverla", en: "Hoverla" },
    description: {
      de: "Die Howerla ist mit 2.061 Metern der höchste Berg der Ukraine. Er liegt in den malerischen Waldkarpaten und ist ein äußerst beliebtes Ziel für Wanderer.",
      hu: "A Hoverla 2061 méterrel Ukrajna legmagasabb hegye. A festői Erdős-Kárpátokban fekszik, és rendkívül népszerű túracélpont.",
      ro: "Hoverla este cel mai înalt munte din Ucraina, cu 2.061 de metri. Situat în pitoreștii Carpați Păduroși, este o destinație foarte populară printre drumeți.",
      en: "Hoverla is the highest mountain in Ukraine at 2,061 meters. Located in the picturesque Wooded Carpathians, it is a highly popular destination for hikers."
    },
    facts: {
      de: ["Höchster Punkt der Ukraine (2.061 m)", "Teil des Gebirgszugs der Tschornohora", "Traditionelles Ziel am Unabhängigkeitstag", "Bietet Ausblicke bis nach Rumänien"],
      hu: ["Ukrajna legmagasabb pontja (2061 m)", "A Csornahora-hegység része", "Hagyományos célpont a függetlenség napján", "Kilátást nyújt egészen Romániáig"],
      ro: ["Cel mai înalt punct din Ucraina (2.061 m)", "Face parte din lanțul muntos Cernohora", "Destinație tradițională de Ziua Independenței", "Oferă priveliști până în România"],
      en: ["Highest point in Ukraine (2,061 m)", "Part of the Chornohora mountain range", "Traditional destination on Independence Day", "Offers views reaching into Romania"]
    },
    image: "/geo-images/ukraine/mountain-hoverla.webp"
  },
  {
    id: "lake-synevyr",
    type: "lake",
    parent: "UA-006",
    coords: [23.6853, 48.6171],
    name: { de: "Synewyr-See", hu: "Szinevéri-tó", ro: "Lacul Sinevir", en: "Lake Synevyr" },
    description: {
      de: "Der Synewyr-See ist der größte und wohl schönste Bergsee in den ukrainischen Karpaten, oft als 'Meerauge' bezeichnet. Er ist von dichtem Nadelwald umgeben.",
      hu: "A Szinevéri-tó az ukrán Kárpátok legnagyobb és talán legszebb hegyi tava, amelyet gyakran 'Tengerszemnek' is neveznek. Sűrű fenyőerdő veszi körül.",
      ro: "Lacul Sinevir este cel mai mare și, probabil, cel mai frumos lac de munte din Carpații ucraineni, adesea numit 'Ochiul Mării'. Este înconjurat de păduri dese de conifere.",
      en: "Lake Synevyr is the largest and arguably most beautiful mountain lake in the Ukrainian Carpathians, often called the 'Sea Eye'. It is surrounded by dense coniferous forest."
    },
    facts: {
      de: ["Größter Bergsee der Ukraine", "Entstand vor etwa 10.000 Jahren durch einen Erdrutsch", "Liegt auf 989 Metern Höhe", "In der Mitte befindet sich eine kleine Insel"],
      hu: ["Ukrajna legnagyobb hegyi tava", "Körülbelül 10 000 évvel ezelőtt keletkezett egy földcsuszamlás következtében", "989 méteres magasságban található", "A közepén egy kis sziget található"],
      ro: ["Cel mai mare lac de munte din Ucraina", "Format acum aproximativ 10.000 de ani printr-o alunecare de teren", "Situat la o altitudine de 989 de metri", "În centru se află o mică insulă"],
      en: ["Largest mountain lake in Ukraine", "Formed about 10,000 years ago by a landslide", "Located at an altitude of 989 meters", "Features a small island in the center"]
    },
    image: "/geo-images/ukraine/lake-synevyr.webp"
  },
  {
    id: "river-dnipro",
    type: "river",
    parent: "UA-022",
    coords: [30.54, 50.45],
    name: { de: "Dnipro (Fluss)", hu: "Dnyeper", ro: "Nipru", en: "Dnipro River" },
    description: {
      de: "Der Dnipro ist der wichtigste und längste Fluss der Ukraine. Er teilt das Land historisch und geografisch in eine rechte und eine linke Uferseite und ist eine wichtige Lebensader.",
      hu: "A Dnyeper Ukrajna legfontosabb és leghosszabb folyója. Történelmileg és földrajzilag jobb és bal partra osztja az országot, és kulcsfontosságú éltető elem.",
      ro: "Niprul este cel mai important și cel mai lung râu din Ucraina. Împarte țara istoric și geografic în malul drept și malul stâng, fiind o arteră vitală majoră.",
      en: "The Dnipro is the most important and longest river in Ukraine. It historically and geographically divides the country into right and left banks and serves as a vital lifeline."
    },
    facts: {
      de: ["Längster Fluss der Ukraine", "Viertlängster Fluss Europas", "Fließt durch Kiew, Dnipro und Saporischschja", "Mündet ins Schwarze Meer"],
      hu: ["Ukrajna leghosszabb folyója", "Európa negyedik leghosszabb folyója", "Kijeven, Dnyiprón és Zaporizzsján folyik keresztül", "A Fekete-tengerbe torkollik"],
      ro: ["Cel mai lung râu din Ucraina", "Al patrulea cel mai lung râu din Europa", "Curge prin Kiev, Dnipro și Zaporijjea", "Se varsă în Marea Neagră"],
      en: ["Longest river in Ukraine", "Fourth-longest river in Europe", "Flows through Kyiv, Dnipro, and Zaporizhzhia", "Empties into the Black Sea"]
    },
    image: "/geo-images/ukraine/river-dnipro.webp"
  },
  {
    id: "nature-askania-nova",
    type: "landmark",
    parent: "UA-016",
    coords: [33.8744, 46.4578],
    name: { de: "Askania-Nowa", hu: "Aszkanyija-Nova", ro: "Askania-Nova", en: "Askania-Nova" },
    description: {
      de: "Askania-Nowa ist ein einzigartiges Biosphärenreservat im Süden der Ukraine, das unberührte Steppe und exotische Tiere, darunter Przewalski-Pferde und Zebras, schützt.",
      hu: "Aszkanyija-Nova egyedülálló bioszféra-rezervátum Dél-Ukrajnában, amely érintetlen sztyeppéket és egzotikus állatokat, köztük Przewalski-lovakat és zebrákat véd.",
      ro: "Askania-Nova este o rezervație unică a biosferei din sudul Ucrainei, care protejează stepele neatinse și animale exotice, inclusiv caii Przewalski și zebrele.",
      en: "Askania-Nova is a unique biosphere reserve in southern Ukraine, protecting untouched steppe and exotic animals, including Przewalski's horses and zebras."
    },
    facts: {
      de: ["Größtes europäisches Steppenreservat", "1898 von Friedrich von Falz-Fein gegründet", "Beherbergt hunderte wilde und halbwilde Tierarten", "Eines der sieben Naturwunder der Ukraine"],
      hu: ["Európa legnagyobb sztyepperezervátuma", "Friedrich von Falz-Fein alapította 1898-ban", "Több száz vad és félvad állatfajnak ad otthont", "Ukrajna hét természeti csodájának egyike"],
      ro: ["Cea mai mare rezervație de stepă din Europa", "Fondată în 1898 de Friedrich von Falz-Fein", "Găzduiește sute de specii de animale sălbatice și semisălbatice", "Una dintre cele șapte minuni naturale ale Ucrainei"],
      en: ["Largest European steppe reserve", "Founded in 1898 by Friedrich von Falz-Fein", "Home to hundreds of wild and semi-wild animal species", "One of the Seven Natural Wonders of Ukraine"]
    },
    image: "/geo-images/ukraine/nature-askania-nova.webp"
  },
  {
    id: "nature-bukovel",
    type: "landmark",
    parent: "UA-008",
    coords: [24.3970, 48.3541],
    name: { de: "Bukowel", hu: "Bukovel", ro: "Bukovel", en: "Bukovel" },
    description: {
      de: "Bukowel ist das größte und modernste Skigebiet in Osteuropa, eingebettet in die ukrainischen Karpaten. Im Sommer wandelt es sich zu einem Erholungszentrum mit See und Wanderwegen.",
      hu: "Bukovel Kelet-Európa legnagyobb és legmodernebb síterepe az ukrán Kárpátokban. Nyáron pihenőközponttá alakul tóval és túraútvonalakkal.",
      ro: "Bukovel este cea mai mare și modernă stațiune de schi din Europa de Est, amplasată în Carpații ucraineni. Vara se transformă într-un centru de recreere cu un lac și trasee de drumeții.",
      en: "Bukovel is the largest and most modern ski resort in Eastern Europe, nestled in the Ukrainian Carpathians. In summer, it transforms into a recreation center with a lake and hiking trails."
    },
    facts: {
      de: ["Größtes Skigebiet der Ukraine", "Über 60 Pistenkilometer", "Beliebter Ganzjahres-Ferienort", "Verfügt über den künstlichen Voda-See"],
      hu: ["Ukrajna legnagyobb síközpontja", "Több mint 60 kilométernyi sípálya", "Népszerű egész éves üdülőhely", "Itt található a mesterséges Voda-tó"],
      ro: ["Cea mai mare stațiune de schi din Ucraina", "Peste 60 km de pârtii", "Destinație populară pe tot parcursul anului", "Dispune de lacul artificial Voda"],
      en: ["Largest ski resort in Ukraine", "Over 60 kilometers of slopes", "Popular year-round resort", "Features the artificial Voda Lake"]
    },
    image: "/geo-images/ukraine/nature-bukovel.webp"
  }
];

export const ukraineNewPois: POI[] = [
  {
    id: "UA-001-chernihiv",
    type: "city",
    parent: "UA-001",
    coords: [31.2891, 51.4982],
    name: { de: "Tschernihiw", hu: "Csernihiv", ro: "Cernihiv", en: "Chernihiv" },
    description: {
      de: "Tschernihiw ist eine der ältesten und bedeutendsten Städte der Kiewer Rus mit zahlreichen historischen Kirchen.",
      hu: "Csernihiv a Kijevi Rusz egyik legrégebbi és legjelentősebb városa, számos történelmi templommal.",
      ro: "Cernihiv este unul dintre cele mai vechi și importante orașe ale Rusiei Kievene, având numeroase biserici istorice.",
      en: "Chernihiv is one of the oldest and most important cities of Kievan Rus', home to numerous historic churches."
    },
    facts: {
      de: ["Eine der ältesten Städte der Ukraine", "Bekannt für das Dytynets-Viertel", "Beherbergt die Verklärungskathedrale aus dem 11. Jahrhundert", "Wichtiger kultureller Knotenpunkt im Norden"],
      hu: ["Ukrajna egyik legrégebbi városa", "A Gyityinec negyedéről ismert", "Itt található a 11. századi Szentszínváltozás-székesegyház", "Fontos északi kulturális központ"],
      ro: ["Unul dintre cele mai vechi orașe din Ucraina", "Cunoscut pentru cartierul Ditineț", "Găzduiește Catedrala Schimbarea la Față din secolul XI", "Important nod cultural în nord"],
      en: ["One of the oldest cities in Ukraine", "Known for the Dytynets district", "Home to the 11th-century Transfiguration Cathedral", "Major cultural hub in the north"]
    }
  },
  {
    id: "UA-001-dytynets",
    type: "landmark",
    parent: "UA-001",
    coords: [31.3060, 51.4883],
    name: { de: "Dytynets-Park", hu: "Gyityinec-park", ro: "Parcul Ditineț", en: "Dytynets Park" },
    description: {
      de: "Der Dytynets-Park ist das historische Herz von Tschernihiw, wo sich die alten Festungsanlagen und Kathedralen befinden.",
      hu: "A Gyityinec-park Csernihiv történelmi szíve, ahol az ősi erődítmények és székesegyházak találhatók.",
      ro: "Parcul Ditineț este inima istorică a orașului Cernihiv, unde se află vechile fortificații și catedrale.",
      en: "Dytynets Park is the historical heart of Chernihiv, featuring ancient fortifications and cathedrals."
    },
    facts: {
      de: ["Standort der ehemaligen Burg", "Beinhaltet 12 gusseiserne Kanonen aus dem 17. Jahrhundert", "Bietet Blick auf den Fluss Desna", "Zentrum der archäologischen Forschung"],
      hu: ["Az egykori vár helyszíne", "12 darab 17. századi öntöttvas ágyút tartalmaz", "Kilátást nyújt a Deszna folyóra", "A régészeti kutatások központja"],
      ro: ["Locul fostei cetăți", "Conține 12 tunuri din fontă din secolul al XVII-lea", "Oferă vedere spre râul Desna", "Centru de cercetări arheologice"],
      en: ["Site of the former fortress", "Features 12 cast-iron cannons from the 17th century", "Offers views of the Desna River", "Center of archaeological research"]
    }
  },
  {
    id: "UA-002-lutsk",
    type: "city",
    parent: "UA-002",
    coords: [25.3254, 50.7472],
    name: { de: "Luzk", hu: "Luck", ro: "Luțk", en: "Lutsk" },
    description: {
      de: "Luzk ist eine der ältesten Städte der Westukraine und bekannt für seine gut erhaltene mittelalterliche Burg.",
      hu: "Luck Nyugat-Ukrajna egyik legrégebbi városa, amely jól megőrzött középkori váráról ismert.",
      ro: "Luțk este unul dintre cele mai vechi orașe din Ucraina de Vest, cunoscut pentru castelul său medieval bine conservat.",
      en: "Lutsk is one of the oldest cities in Western Ukraine, famous for its well-preserved medieval castle."
    },
    facts: {
      de: ["Historisches Zentrum von Wolhynien", "Bekannt für die Burg von Lubart", "Gastgeber des Kongresses der europäischen Monarchen 1429", "Besitzt eine charmante Altstadt"],
      hu: ["Volhínia történelmi központja", "A Lubart-várról híres", "Itt tartották az európai uralkodók kongresszusát 1429-ben", "Bájos óvárosa van"],
      ro: ["Centrul istoric al Volîniei", "Cunoscut pentru Castelul lui Lubart", "Gazda Congresului Monarhilor Europeni din 1429", "Are un centru vechi fermecător"],
      en: ["Historic center of Volhynia", "Famous for Lubart's Castle", "Host of the Congress of European Monarchs in 1429", "Features a charming old town"]
    }
  },
  {
    id: "UA-002-lubart-castle",
    type: "historical",
    parent: "UA-002",
    coords: [25.3221, 50.7389],
    name: { de: "Burg von Lubart", hu: "Lubart-vár", ro: "Castelul Lubart", en: "Lubart's Castle" },
    description: {
      de: "Die Burg von Lubart ist ein Wahrzeichen von Luzk und eine der am besten erhaltenen Burgen der Ukraine.",
      hu: "A Lubart-vár Luck jelképe, és Ukrajna egyik legjobb állapotban megőrzött vára.",
      ro: "Castelul Lubart este simbolul orașului Luțk și unul dintre cele mai bine conservate castele din Ucraina.",
      en: "Lubart's Castle is a landmark of Lutsk and one of the best-preserved castles in Ukraine."
    },
    facts: {
      de: ["Erbaut im 14. Jahrhundert", "Abgebildet auf dem 200-Hrywnja-Schein", "Beherbergt ein Glockenmuseum", "Besteht aus drei hohen Türmen"],
      hu: ["A 14. században épült", "A 200 hrivnyás bankjegyen szerepel", "Harangmúzeumnak ad otthont", "Három magas toronyból áll"],
      ro: ["Construit în secolul al XIV-lea", "Reprezentat pe bancnota de 200 de grivne", "Găzduiește un muzeu al clopotelor", "Format din trei turnuri înalte"],
      en: ["Built in the 14th century", "Depicted on the 200-hryvnia banknote", "Houses a bell museum", "Consists of three tall towers"]
    }
  },
  {
    id: "UA-003-rivne",
    type: "city",
    parent: "UA-003",
    coords: [26.2516, 50.6199],
    name: { de: "Riwne", hu: "Rivne", ro: "Rivne", en: "Rivne" },
    description: {
      de: "Riwne ist ein wichtiges kulturelles und industrielles Zentrum im Nordwesten der Ukraine.",
      hu: "Rivne fontos kulturális és ipari központ Ukrajna északnyugati részén.",
      ro: "Rivne este un important centru cultural și industrial din nord-vestul Ucrainei.",
      en: "Rivne is a significant cultural and industrial center in northwestern Ukraine."
    },
    facts: {
      de: ["Besitzt ein Bernsteinmuseum", "Bekannt für seine Parks und Seen", "Wichtiger Verkehrsknotenpunkt", "Heimat des Schwanensees"],
      hu: ["Borostyánmúzeuma van", "Parkjairól és tavairól ismert", "Fontos közlekedési csomópont", "A Hattyú-tó otthona"],
      ro: ["Deține un muzeu al chihlimbarului", "Cunoscut pentru parcurile și lacurile sale", "Important nod de transport", "Găzduiește Lacul Lebedelor"],
      en: ["Features an amber museum", "Known for its parks and lakes", "Major transportation hub", "Home to Swan Lake"]
    }
  },
  {
    id: "UA-003-tunnel-of-love",
    type: "landmark",
    parent: "UA-003",
    coords: [26.0454, 50.7511],
    name: { de: "Liebestunnel", hu: "Szerelem-alagút", ro: "Tunelul Dragostei", en: "Tunnel of Love" },
    description: {
      de: "Der Liebestunnel in Klewan ist ein grüner Eisenbahntunnel, der durch überwachsende Bäume entstanden ist und als einer der romantischsten Orte der Ukraine gilt.",
      hu: "A klevanyi Szerelem-alagút egy zöld vasúti alagút, amelyet összenőtt fák alkotnak, és Ukrajna egyik legromantikusabb helyeként tartják számon.",
      ro: "Tunelul Dragostei din Klevan este un tunel feroviar verde format din copaci împletiți, fiind considerat unul dintre cele mai romantice locuri din Ucraina.",
      en: "The Tunnel of Love in Klevan is a green leafy railway tunnel formed by overhanging trees, considered one of the most romantic spots in Ukraine."
    },
    facts: {
      de: ["Entstand durch eine aktive Industriebahn", "Etwa 3-5 Kilometer lang", "Beliebtes Ziel für Hochzeitsfotos", "Verändert seine Farbe je nach Jahreszeit"],
      hu: ["Egy aktív ipari vasútvonal mentén alakult ki", "Körülbelül 3-5 kilométer hosszú", "Népszerű helyszín esküvői fotózáshoz", "Évszakonként változtatja a színét"],
      ro: ["Format de-a lungul unei linii ferate industriale active", "Are o lungime de aproximativ 3-5 km", "Destinație populară pentru fotografii de nuntă", "Își schimbă culoarea în funcție de anotimp"],
      en: ["Formed along an active industrial railway line", "Approximately 3-5 kilometers long", "Popular spot for wedding photos", "Changes color depending on the season"]
    }
  },
  {
    id: "UA-004-zhytomyr",
    type: "city",
    parent: "UA-004",
    coords: [28.6587, 50.2547],
    name: { de: "Schytomyr", hu: "Zsitomir", ro: "Jitomir", en: "Zhytomyr" },
    description: {
      de: "Schytomyr ist eine historische Stadt, die als Zentrum der ukrainischen Raumfahrtgeschichte gilt.",
      hu: "Zsitomir történelmi város, amely az ukrán űrkutatás történetének központjaként ismert.",
      ro: "Jitomir este un oraș istoric, considerat centrul istoriei spațiale ucrainene.",
      en: "Zhytomyr is a historic city known as the hub of Ukrainian space history."
    },
    facts: {
      de: ["Geburtsort von Sergei Koroljow", "Beherbergt ein großes Raumfahrtmuseum", "Bekannt für seine Granitfelsen", "Einer der ältesten Verkehrsknotenpunkte"],
      hu: ["Szergej Koroljov szülőhelye", "Nagy űrhajózási múzeumnak ad otthont", "Gránitszikláiról ismert", "Az egyik legrégebbi közlekedési csomópont"],
      ro: ["Locul de naștere al lui Serghei Koroliov", "Găzduiește un mare muzeu al cosmonauticii", "Cunoscut pentru stâncile sale de granit", "Unul dintre cele mai vechi noduri de transport"],
      en: ["Birthplace of Sergei Korolev", "Home to a large space museum", "Known for its granite rocks", "One of the oldest transportation hubs"]
    }
  },
  {
    id: "UA-004-radomysl",
    type: "historical",
    parent: "UA-004",
    coords: [29.2155, 50.4925],
    name: { de: "Schloss Radomysl", hu: "Radomiszl-kastély", ro: "Castelul Radomîșl", en: "Radomysl Castle" },
    description: {
      de: "Das Schloss Radomysl ist eine rekonstruierte Festung, die ein Museum für Heim-Ikonen und eine historische Papiermühle beherbergt.",
      hu: "A Radomiszl-kastély egy rekonstruált erődítmény, amely házi ikonok múzeumának és egy történelmi papírmalomnak ad otthont.",
      ro: "Castelul Radomîșl este o fortăreață reconstruită care găzduiește un muzeu de icoane și o moară de hârtie istorică.",
      en: "Radomysl Castle is a reconstructed fortress housing a museum of home icons and a historic papermill."
    },
    facts: {
      de: ["Beherbergt über 5.000 Ikonen", "Ehemalige Papiermühle der Kiewer Höhlenklosters", "Umgeben von einem Landschaftspark mit Wasserfällen", "Bietet Workshops zum Papiermachen an"],
      hu: ["Több mint 5000 ikonnak ad otthont", "A Kijevi Pecserszka Lavra egykori papírmalma", "Vízesésekkel teli tájpark veszi körül", "Papírkészítő workshopokat kínál"],
      ro: ["Găzduiește peste 5.000 de icoane", "Fosta moară de hârtie a Lavrei Pecerska", "Înconjurat de un parc peisagistic cu cascade", "Oferă ateliere de fabricare a hârtiei"],
      en: ["Houses over 5,000 icons", "Former papermill of the Kyiv Pechersk Lavra", "Surrounded by a landscape park with waterfalls", "Offers paper-making workshops"]
    }
  },
  {
    id: "UA-005-mezhyhirya",
    type: "landmark",
    parent: "UA-005",
    coords: [30.4683, 50.6150],
    name: { de: "Meschyhirja", hu: "Mezsihirja", ro: "Mejîhirea", en: "Mezhyhirya" },
    description: {
      de: "Meschyhirja ist die ehemalige luxuriöse Residenz des geflüchteten Präsidenten Janukowytsch, die heute als Museum der Korruption und öffentlicher Park dient.",
      hu: "Mezsihirja Janukovics menekült elnök egykori fényűző rezidenciája, amely ma a korrupció múzeumaként és közparkként szolgál.",
      ro: "Mejîhirea este fosta reședință de lux a președintelui fugar Ianukovici, care astăzi servește drept muzeu al corupției și parc public.",
      en: "Mezhyhirya is the former luxurious residence of the ousted President Yanukovych, now serving as a museum of corruption and a public park."
    },
    facts: {
      de: ["Bekannt für das 'Honka'-Holzhaus", "Besitzt einen privaten Zoo und einen Golfplatz", "Liegt am Ufer des Kiewer Meeres", "Symbol der ukrainischen Revolution von 2014"],
      hu: ["A 'Honka' faházról ismert", "Magánállatkertje és golfpályája van", "A Kijevi-tenger partján fekszik", "A 2014-es ukrán forradalom szimbóluma"],
      ro: ["Cunoscut pentru casa din lemn 'Honka'", "Deține o grădină zoologică privată și un teren de golf", "Situat pe malul mării Kievului", "Simbol al revoluției ucrainene din 2014"],
      en: ["Known for the 'Honka' log house", "Features a private zoo and a golf course", "Located on the banks of the Kyiv Reservoir", "Symbol of the 2014 Ukrainian Revolution"]
    }
  },
  {
    id: "UA-009-akkerman",
    type: "historical",
    parent: "UA-009",
    coords: [30.3508, 46.2003],
    name: { de: "Festung Akkerman", hu: "Akkerman-erőd", ro: "Cetatea Alba", en: "Akkerman Fortress" },
    description: {
      de: "Die Festung Akkerman in Bilhorod-Dnistrowskyj ist eine der größten und am besten erhaltenen mittelalterlichen Festungen in der Ukraine.",
      hu: "A Bilhorod-Dnyisztrovszkijban található Akkerman-erőd Ukrajna egyik legnagyobb és legjobb állapotban fennmaradt középkori erődítménye.",
      ro: "Cetatea Alba (Akkerman) din Bilhorod-Dnistrovskîi este una dintre cele mai mari și mai bine conservate cetăți medievale din Ucraina.",
      en: "Akkerman Fortress in Bilhorod-Dnistrovskyi is one of the largest and best-preserved medieval fortifications in Ukraine."
    },
    facts: {
      de: ["Erbaut auf den Ruinen der antiken Stadt Tyras", "Besitzt 26 erhaltene Türme", "Liegt am Dnister-Liman", "War eine wichtige osmanische Verteidigungsanlage"],
      hu: ["Az ókori Türasz város romjaira épült", "26 épségben maradt tornya van", "A Dnyeszter-limán partján fekszik", "Fontos oszmán védelmi létesítmény volt"],
      ro: ["Construită pe ruinele orașului antic Tyras", "Are 26 de turnuri conservate", "Situată pe limanul Nistrului", "A fost o importantă fortificație otomană"],
      en: ["Built on the ruins of the ancient city of Tyras", "Features 26 preserved towers", "Located on the Dniester Estuary", "Was a key Ottoman defensive structure"]
    }
  },
  {
    id: "UA-010-vinnytsya",
    type: "city",
    parent: "UA-010",
    coords: [28.4682, 49.2331],
    name: { de: "Winnyzja", hu: "Vinnyicja", ro: "Vinnița", en: "Vinnytsia" },
    description: {
      de: "Winnyzja ist eine charmante Stadt am Südlichen Bug, bekannt für ihre schwimmenden Fontänen und die Verbindung zum Chirurgen Pirogow.",
      hu: "Vinnyicja egy bájos város a Déli-Bug partján, amely lebegő szökőkútjairól és Pirogov sebészhez fűződő kapcsolatáról ismert.",
      ro: "Vinnița este un oraș fermecător pe malul Bugului de Sud, cunoscut pentru fântânile sale plutitoare și legătura cu chirurgul Pirogov.",
      en: "Vinnytsia is a charming city on the Southern Bug river, famous for its floating fountains and connection to the surgeon Pirogov."
    },
    facts: {
      de: ["Besitzt die größte schwimmende Fontäne Europas", "Ehemaliges Hauptquartier 'Werwolf' in der Nähe", "Wichtiges Zentrum der Lebensmittelindustrie", "Sitz der ukrainischen Luftstreitkräfte"],
      hu: ["Európa legnagyobb lebegő szökőkútjával rendelkezik", "A közelben volt a 'Werwolf' főhadiszállás", "Az élelmiszeripar fontos központja", "Az ukrán légierő székhelye"],
      ro: ["Deține cea mai mare fântână plutitoare din Europa", "Fostul cartier general 'Werwolf' se află în apropiere", "Important centru al industriei alimentare", "Sediul Forțelor Aeriene Ucrainene"],
      en: ["Home to the largest floating fountain in Europe", "Former 'Werwolf' headquarters located nearby", "Major center for the food industry", "Headquarters of the Ukrainian Air Force"]
    }
  },
  {
    id: "UA-010-pirogov",
    type: "historical",
    parent: "UA-010",
    coords: [28.4069, 49.2158],
    name: { de: "Pirogow-Landgut", hu: "Pirogov-birtok", ro: "Conacul Pirogov", en: "Pirogov Estate" },
    description: {
      de: "Das Landgut von Nikolai Pirogow ist ein Museum, das dem Leben und Werk des Vaters der modernen Feldchirurgie gewidmet ist.",
      hu: "Nyikolaj Pirogov birtoka egy múzeum, amely a modern tábori sebészet atyjának életét és munkásságát mutatja be.",
      ro: "Conacul lui Nikolai Pirogov este un muzeu dedicat vieții și operei părintelui chirurgiei moderne de campanie.",
      en: "The estate of Nikolai Pirogov is a museum dedicated to the life and work of the father of modern field surgery."
    },
    facts: {
      de: ["Beinhaltet das einbalsamierte Gehäuse des Chirurgen", "Wunderschöner Park mit alten Bäumen", "Ausstellung medizinischer Instrumente des 19. Jahrhunderts", "Wurde 1947 als Museum eröffnet"],
      hu: ["A sebész bebalzsamozott testét is őrzik itt", "Gyönyörű park ősfákkal", "19. századi orvosi műszerek kiállítása", "1947-ben nyílt meg múzeumként"],
      ro: ["Include corpul îmbălsămat al chirurgului", "Parc superb cu arbori seculari", "Expoziție de instrumente medicale din secolul al XIX-lea", "Deschis ca muzeu în 1947"],
      en: ["Contains the embalmed body of the surgeon", "Beautiful park with ancient trees", "Exhibition of 19th-century medical instruments", "Opened as a museum in 1947"]
    }
  },
  {
    id: "UA-011-olesko",
    type: "historical",
    parent: "UA-011",
    coords: [24.9011, 49.9686],
    name: { de: "Burg Olesko", hu: "Oleszkói vár", ro: "Castelul Olesko", en: "Olesko Castle" },
    description: {
      de: "Die Burg Olesko ist eine der ältesten erhaltenen Burgen der Ukraine und heute ein Museum für sakrale Kunst.",
      hu: "Az oleszkói vár Ukrajna egyik legrégebbi fennmaradt vára, amely ma szakrális művészeti múzeumnak ad otthont.",
      ro: "Castelul Olesko este unul dintre cele mai vechi castele conservate din Ucraina, fiind astăzi un muzeu de artă sacră.",
      en: "Olesko Castle is one of the oldest surviving castles in Ukraine, now serving as a museum of sacred art."
    },
    facts: {
      de: ["Geburtsort des polnischen Königs Jan III. Sobieski", "Beherbergt wertvolle Skulpturen und Gemälde", "Umgeben von einem terrassierten Park", "Wurde im 14. Jahrhundert erbaut"],
      hu: ["III. János Sobieski lengyel király szülőhelye", "Értékes szobroknak és festményeknek ad otthont", "Teraszos park veszi körül", "A 14. században épült"],
      ro: ["Locul de naștere al regelui polonez Ioan al III-lea Sobieski", "Găzduiește sculpturi și picturi valoroase", "Înconjurat de un parc terasat", "Construit în secolul al XIV-lea"],
      en: ["Birthplace of Polish King Jan III Sobieski", "Houses valuable sculptures and paintings", "Surrounded by a terraced park", "Built in the 14th century"]
    }
  },
  {
    id: "UA-012-sumy",
    type: "city",
    parent: "UA-012",
    coords: [34.7981, 50.9077],
    name: { de: "Sumy", hu: "Szumi", ro: "Sumî", en: "Sumy" },
    description: {
      de: "Sumy ist eine historische Stadt im Nordosten der Ukraine, die für ihre klassizistische Architektur bekannt ist.",
      hu: "Szumi történelmi város Ukrajna északkeleti részén, amely klasszicista építészetéről ismert.",
      ro: "Sumî este un oraș istoric din nord-estul Ucrainei, cunoscut pentru arhitectura sa clasicistă.",
      en: "Sumy is a historic city in northeastern Ukraine, known for its classicist architecture."
    },
    facts: {
      de: ["Gegründet im Jahr 1652", "Bekannt für die Altanka (Gartenpavillon)", "Besitzt prachtvolle Kathedralen", "Wichtiger Standort der chemischen Industrie"],
      hu: ["1652-ben alapították", "Az Altankáról (kerti pavilon) ismert", "Pompás székesegyházai vannak", "A vegyipar fontos központja"],
      ro: ["Fondat în anul 1652", "Cunoscut pentru Altanka (foișor)", "Deține catedrale magnifice", "Important centru al industriei chimice"],
      en: ["Founded in 1652", "Famous for the Altanka gazebo", "Features magnificent cathedrals", "Major site for the chemical industry"]
    }
  },
  {
    id: "UA-012-round-yard",
    type: "historical",
    parent: "UA-012",
    coords: [34.9708, 50.4725],
    name: { de: "Runder Hof", hu: "Kerek udvar", ro: "Curtea Rotundă", en: "Round Yard" },
    description: {
      de: "Der Runde Hof in Trostjanez ist ein einzigartiges architektonisches Denkmal, das als Festung und später als Theater diente.",
      hu: "A trostjaneci Kerek udvar egy egyedülálló építészeti műemlék, amely erődítményként, majd később színházként szolgált.",
      ro: "Curtea Rotundă din Trostianeț este un monument arhitectural unic, care a servit drept fortăreață și ulterior ca teatru.",
      en: "The Round Yard in Trostyanets is a unique architectural monument that served as a fortress and later as a theater."
    },
    facts: {
      de: ["Erbaut im Jahr 1749", "Besitzt eine ovale Form mit vier Türmen", "Einziger Bau dieser Art in Osteuropa", "Austragungsort von Mittelalterfestivals"],
      hu: ["1749-ben épült", "Ovális alakú, négy toronnyal", "Egyetlen ilyen típusú építmény Kelet-Európában", "Középkori fesztiválok helyszíne"],
      ro: ["Construită în anul 1749", "Are o formă ovală cu patru turnuri", "Singura construcție de acest tip din Europa de Est", "Gazdă pentru festivaluri medievale"],
      en: ["Built in 1749", "Features an oval shape with four towers", "Only structure of its kind in Eastern Europe", "Venue for medieval festivals"]
    }
  },
  {
    id: "UA-013-sharivka",
    type: "historical",
    parent: "UA-013",
    coords: [35.4331, 50.0447],
    name: { de: "Schloss Schariwka", hu: "Sarivkai palota", ro: "Palatul Șarivka", en: "Sharivka Palace" },
    description: {
      de: "Das Schloss Schariwka ist ein prachtvolles neugotisches Herrenhaus, das oft als 'Weißer Schwan' bezeichnet wird.",
      hu: "A sarivkai palota egy pompás neogótikus kúria, amelyet gyakran 'Fehér Hattyúnak' is neveznek.",
      ro: "Palatul Șarivka este un conac neogotic magnific, adesea supranumit 'Lebăda Albă'.",
      en: "Sharivka Palace is a magnificent Neo-Gothic mansion, often referred to as the 'White Swan'."
    },
    facts: {
      de: ["Ehemaliger Sitz des Zuckerbarons Leopold Koenig", "Bekannt für die Lindenallee", "Verfügt über einen terrassierten Garten", "Wichtiges Beispiel für eklektische Architektur"],
      hu: ["Leopold Koenig cukorbáró egykori székhelye", "A hárfás hársfasorról ismert", "Teraszos kertje van", "Az eklektikus építészet fontos példája"],
      ro: ["Fosta reședință a baronului zahărului Leopold Koenig", "Cunoscut pentru aleea de tei", "Dispune de o grădină terasată", "Exemplu important de arhitectură eclectică"],
      en: ["Former residence of sugar baron Leopold Koenig", "Famous for its linden alley", "Features a terraced garden", "Significant example of eclectic architecture"]
    }
  },
  {
    id: "UA-014-luhansk",
    type: "city",
    parent: "UA-014",
    coords: [39.3078, 48.5748],
    name: { de: "Luhansk", hu: "Luhanszk", ro: "Luhansk", en: "Luhansk" },
    description: {
      de: "Luhansk ist eine bedeutende Industriestadt im Osten der Ukraine, bekannt für ihre Maschinenbau-Tradition.",
      hu: "Luhanszk jelentős iparváros Kelet-Ukrajnában, gépgyártási hagyományairól ismert.",
      ro: "Luhansk este un important oraș industrial din estul Ucrainei, cunoscut pentru tradiția sa în construcția de mașini.",
      en: "Luhansk is a major industrial city in eastern Ukraine, known for its machinery manufacturing tradition."
    },
    facts: {
      de: ["Gegründet als Eisengießerei im Jahr 1795", "Früherer Name: Woroschilowgrad", "Heimat des Fußballvereins Sorja Luhansk", "Besitzt ein Freilichtmuseum für Steinfiguren"],
      hu: ["1795-ben alapították vasöntödének", "Korábbi neve: Vorosilovgrád", "A Zorja Luhanszk futballcsapat otthona", "Kőfigurák szabadtéri múzeuma van itt"],
      ro: ["Fondat ca turnătorie de fier în 1795", "Nume anterior: Voroșilovgrad", "Casa clubului de fotbal Zoria Luhansk", "Deține un muzeu în aer liber de figuri de piatră"],
      en: ["Founded as an iron foundry in 1795", "Former name: Voroshilovgrad", "Home to Zorya Luhansk football club", "Features an open-air museum of stone figures"]
    }
  },
  {
    id: "UA-014-derkul",
    type: "historical",
    parent: "UA-014",
    coords: [39.6914, 48.9664],
    name: { de: "Derkul-Gestüt", hu: "Derkuli ménes", ro: "Herghelia Derkul", en: "Derkul Horse Factory" },
    description: {
      de: "Das Derkul-Gestüt ist eines der ältesten und bekanntesten Gestüte der Ukraine, gegründet im 18. Jahrhundert.",
      hu: "A derkuli ménes Ukrajna egyik legrégebbi és legismertebb ménese, amelyet a 18. században alapítottak.",
      ro: "Herghelia Derkul este una dintre cele mai vechi și renumite herghelii din Ucraina, fondată în secolul al XVIII-lea.",
      en: "Derkul Horse Factory is one of the oldest and most famous stud farms in Ukraine, founded in the 18th century."
    },
    facts: {
      de: ["Gegründet 1765 durch Erlass von Katharina der Großen", "Spezialisiert auf die Zucht von Vollblütern", "Architektonisches Denkmal aus dem 18. Jahrhundert", "Wichtiges Zentrum für Pferdesport"],
      hu: ["1765-ben alapították Nagy Katalin rendeletére", "Telivérek tenyésztésére szakosodott", "18. századi építészeti műemlék", "A lovassport fontos központja"],
      ro: ["Fondată în 1765 prin decretul Ecaterinei cea Mare", "Specializată în creșterea cailor pur sânge", "Monument arhitectural din secolul al XVIII-lea", "Important centru pentru sporturi ecvestre"],
      en: ["Founded in 1765 by decree of Catherine the Great", "Specializes in breeding thoroughbreds", "Architectural monument from the 18th century", "Major center for equestrian sports"]
    }
  },
  {
    id: "UA-015-donetsk",
    type: "city",
    parent: "UA-015",
    coords: [37.8028, 48.0159],
    name: { de: "Donezk", hu: "Doneck", ro: "Donețk", en: "Donetsk" },
    description: {
      de: "Donezk ist das Zentrum des Donbass, historisch geprägt durch Kohlebergbau und Stahlindustrie.",
      hu: "Doneck a Donyec-medence központja, amelyet történelmileg a szénbányászat és az acélipar határoz meg.",
      ro: "Donețk este centrul Donbasului, marcat istoric de mineritul cărbunelui și industria oțelului.",
      en: "Donetsk is the center of the Donbas region, historically shaped by coal mining and the steel industry."
    },
    facts: {
      de: ["Gegründet vom Waliser John Hughes", "Bekannt als die 'Stadt der Millionen Rosen'", "Heimat der Donbass Arena", "Bedeutendes Industrie- und Wissenschaftszentrum"],
      hu: ["A walesi John Hughes alapította", "A 'millió rózsa városaként' ismert", "A Donbasssz Arena otthona", "Jelentős ipari és tudományos központ"],
      ro: ["Fondat de galezul John Hughes", "Cunoscut ca 'Orașul milioanelor de trandafiri'", "Casa arenei Donbass", "Centru industrial și științific major"],
      en: ["Founded by the Welshman John Hughes", "Known as the 'City of a Million Roses'", "Home to the Donbass Arena", "Significant industrial and scientific center"]
    }
  },
  {
    id: "UA-015-sviatohirsk",
    type: "historical",
    parent: "UA-015",
    coords: [37.5681, 49.0289],
    name: { de: "Kloster Swjatohirsk", hu: "Szvjatohirszki kolostor", ro: "Mănăstirea Sveatohirsk", en: "Sviatohirsk Lavra" },
    description: {
      de: "Die Swjatohirsk Lavra ist ein orthodoxes Höhlenkloster an den weißen Kreidefelsen des Seversky Donez.",
      hu: "A szvjatohirszki lavra egy ortodox barlangkolostor a Sziverszkij-Donyec fehér krétaszikláin.",
      ro: "Lavra Sveatohirsk este o mănăstire ortodoxă de peșteră, situată pe stâncile albe de cretă ale râului Doneț.",
      en: "The Sviatohirsk Lavra is an Orthodox cave monastery situated on the white chalk cliffs of the Seversky Donets River."
    },
    facts: {
      de: ["Liegt im Nationalpark Heilige Berge", "Besitzt beeindruckende unterirdische Gänge", "Hielt im 17. Jahrhundert Belagerungen stand", "Wurde 2004 zur Lavra erhoben"],
      hu: ["A Szent Hegyek Nemzeti Parkban fekszik", "Lenyűgöző földalatti járatai vannak", "A 17. században ellenállt az ostromoknak", "2004-ben kapott lavra rangot"],
      ro: ["Situată în Parcul Național Munții Sfinți", "Are pasaje subterane impresionante", "A rezistat asediilor în secolul al XVII-lea", "Ridicată la rangul de Lavră în 2004"],
      en: ["Located in the Holy Mountains National Park", "Features impressive underground passages", "Withstood sieges in the 17th century", "Elevated to the status of Lavra in 2004"]
    }
  },
  {
    id: "UA-016-oleshkivski-sands",
    type: "landmark",
    parent: "UA-016",
    coords: [33.0500, 46.5833],
    name: { de: "Oleshky-Sande", hu: "Oleskivszki-homok", ro: "Nisipurile Oleșki", en: "Oleshky Sands" },
    description: {
      de: "Die Oleshky-Sande sind das größte Wüstengebiet in der Ukraine und eine der größten Sandflächen Europas.",
      hu: "Az oleskivszki homok Ukrajna legnagyobb sivatagi területe, és Európa egyik legnagyobb homokos vidéke.",
      ro: "Nisipurile Oleșki reprezintă cea mai mare zonă de deșert din Ucraina și una dintre cele mai mari suprafețe de nisip din Europa.",
      en: "Oleshky Sands is the largest desert area in Ukraine and one of the largest sand expanses in Europe."
    },
    facts: {
      de: ["Besteht aus Wanderdünen", "Entstand im 18. Jahrhundert durch Überweidung", "Umgeben von künstlich gepflanzten Wäldern", "Im Sommer herrschen hier extreme Temperaturen"],
      hu: ["Vándorló homokdűnékből áll", "A 18. században alakult ki a túllegeltetés miatt", "Mesterségesen telepített erdők veszik körül", "Nyáron extrém hőmérséklet uralkodik itt"],
      ro: ["Formată din dune de nisip mișcătoare", "A apărut în secolul al XVIII-lea din cauza suprapășunatului", "Înconjurată de păduri plantate artificial", "Vara se înregistrează temperaturi extreme"],
      en: ["Consists of moving sand dunes", "Formed in the 18th century due to overgrazing", "Surrounded by artificially planted forests", "Experiences extreme temperatures in summer"]
    }
  },
  {
    id: "UA-017-zaporizhzhya",
    type: "city",
    parent: "UA-017",
    coords: [35.1396, 47.8388],
    name: { de: "Saporischschja", hu: "Zaporizzsja", ro: "Zaporijjea", en: "Zaporizhzhia" },
    description: {
      de: "Saporischschja ist ein bedeutendes Industriezentrum am Dnipro und die historische Heimat der Saporoger Kosaken.",
      hu: "Zaporizzsja jelentős ipari központ a Dnyeper partján, és a zaporizzsjai kozákok történelmi otthona.",
      ro: "Zaporijjea este un important centru industrial pe Nipru și casa istorică a cazacilor zaporojeni.",
      en: "Zaporizhzhia is a major industrial center on the Dnipro River and the historic home of the Zaporozhian Cossacks."
    },
    facts: {
      de: ["Bekannt für den DniproHES-Staudamm", "Besitzt die Insel Chortyzja", "Wichtiges Zentrum der ukrainischen Metallurgie", "Früherer Name: Alexandrowsk"],
      hu: ["A Dnyeper-gátról (DnyiproHESZ) ismert", "Itt található a Horticja-sziget", "Az ukrán kohászat fontos központja", "Korábbi neve: Alekszandrovszk"],
      ro: ["Cunoscut pentru barajul NipruHES", "Deține insula Hortiția", "Important centru al metalurgiei ucrainene", "Nume anterior: Alexandrovsk"],
      en: ["Famous for the DniproHES dam", "Home to Khortytsia Island", "Major center for Ukrainian metallurgy", "Former name: Alexandrovsk"]
    }
  },
  {
    id: "UA-017-khortytsia",
    type: "landmark",
    parent: "UA-017",
    coords: [35.0861, 47.8447],
    name: { de: "Insel Chortyzja", hu: "Horticja-sziget", ro: "Insula Hortiția", en: "Khortytsia Island" },
    description: {
      de: "Chortyzja ist die größte Insel im Dnipro und war einst das strategische Zentrum der Saporoger Kosaken.",
      hu: "A Horticja a Dnyeper legnagyobb szigete, amely egykor a zaporizzsjai kozákok stratégiai központja volt.",
      ro: "Hortiția este cea mai mare insulă de pe Nipru și a fost odinioară centrul strategic al cazacilor zaporojeni.",
      en: "Khortytsia is the largest island in the Dnipro River and was once the strategic center of the Zaporozhian Cossacks."
    },
    facts: {
      de: ["Nationales historisches Reservat", "Beherbergt ein Museum der Saporoger Kosaken", "Besitzt eine rekonstruierte Sitsch (Festung)", "Einzigartige Flora und Fauna"],
      hu: ["Nemzeti történelmi rezervátum", "A zaporizzsjai kozákok múzeumának ad otthont", "Egy rekonstruált Szicset (erődöt) mutat be", "Egyedülálló növény- és állatvilág"],
      ro: ["Rezervație istorică națională", "Găzduiește un muzeu al cazacilor zaporojeni", "Deține o Sici (cetate) reconstruită", "Floră și faună unice"],
      en: ["National historical reserve", "Home to a museum of the Zaporozhian Cossacks", "Features a reconstructed Sich fortress", "Unique flora and fauna"]
    }
  },
  {
    id: "UA-018-mykolayiv",
    type: "city",
    parent: "UA-018",
    coords: [31.9946, 46.9750],
    name: { de: "Mykolajiw", hu: "Mikolajiv", ro: "Nicolaev", en: "Mykolaiv" },
    description: {
      de: "Mykolajiw ist das Hauptzentrum des ukrainischen Schiffbaus und liegt am Zusammenfluss von Südlichem Bug und Inhul.",
      hu: "Mikolajiv az ukrán hajógyártás központja, a Déli-Bug és az Inhul folyók találkozásánál fekszik.",
      ro: "Nicolaev este principalul centru al construcțiilor navale ucrainene, situat la confluența râurilor Bugul de Sud și Inhul.",
      en: "Mykolaiv is the main center of Ukrainian shipbuilding, located at the confluence of the Southern Bug and Inhul rivers."
    },
    facts: {
      de: ["Gegründet als Schiffswerft im Jahr 1789", "Besitzt einen der besten Zoos der Ukraine", "Wichtiger Seehafen", "Bekannt für das Astronomische Observatorium"],
      hu: ["1789-ben alapították hajógyárként", "Ukrajna egyik legjobb állatkertjével rendelkezik", "Fontos tengeri kikötő", "A csillagvizsgálójáról ismert"],
      ro: ["Fondat ca șantier naval în 1789", "Deține una dintre cele mai bune grădini zoologice din Ucraina", "Important port maritim", "Cunoscut pentru Observatorul Astronomic"],
      en: ["Founded as a shipyard in 1789", "Home to one of the best zoos in Ukraine", "Major seaport", "Famous for its Astronomical Observatory"]
    }
  },
  {
    id: "UA-018-olbia",
    type: "historical",
    parent: "UA-018",
    coords: [31.9531, 46.6914],
    name: { de: "Olbia (Nationalpark)", hu: "Olbia régészeti park", ro: "Olbia (Rezervație)", en: "Olbia Archaeological Reserve" },
    description: {
      de: "Olbia war eine antike griechische Kolonie an der Küste des Dnipro-Bug-Limans und ist heute ein bedeutendes archäologisches Reservat.",
      hu: "Olbia ókori görög gyarmat volt a Dnyeper-Bug limán partján, ma jelentős régészeti rezervátum.",
      ro: "Olbia a fost o colonie greacă antică pe coasta limanului Nipru-Bug, fiind astăzi o importantă rezervație arheologică.",
      en: "Olbia was an ancient Greek colony on the coast of the Dnipro-Bug Estuary, now a significant archaeological reserve."
    },
    facts: {
      de: ["Gegründet im 6. Jahrhundert v. Chr.", "Einst ein wichtiges Handelszentrum am Schwarzen Meer", "Besitzt Ruinen von Tempeln und Wohnvierteln", "Teil der Nationalen Akademie der Wissenschaften"],
      hu: ["I. e. 6. században alapították", "Valaha a Fekete-tenger fontos kereskedelmi központja volt", "Templomok és lakónegyedek romjai láthatók itt", "A Nemzeti Tudományos Akadémia része"],
      ro: ["Fondată în secolul al VI-lea î.Hr.", "Odată un important centru comercial la Marea Neagră", "Deține ruine de temple și cartiere rezidențiale", "Parte a Academiei Naționale de Științe"],
      en: ["Founded in the 6th century BC", "Once a major trading center on the Black Sea", "Features ruins of temples and residential quarters", "Part of the National Academy of Sciences"]
    }
  },
  {
    id: "UA-019-poltava",
    type: "city",
    parent: "UA-019",
    coords: [34.5514, 49.5883],
    name: { de: "Poltawa", hu: "Poltava", ro: "Poltava", en: "Poltava" },
    description: {
      de: "Poltawa ist bekannt für seine reiche Geschichte, die klassizistische Architektur und als kulturelles Herz Zentralukrainas.",
      hu: "Poltava gazdag történelméről, klasszicista építészetéről és Közép-Ukrajna kulturális szíveként ismert.",
      ro: "Poltava este cunoscută pentru istoria sa bogată, arhitectura clasicistă și ca fiind inima culturală a Ucrainei Centrale.",
      en: "Poltava is known for its rich history, classicist architecture, and status as the cultural heart of Central Ukraine."
    },
    facts: {
      de: ["Berühmt für die Schlacht von Poltawa (1709)", "Heimat der ukrainischen Literatursprache", "Besitzt den runden 'Oktyabrsky'-Platz", "Bekannt für Poltawa-Dumplings (Haluschky)"],
      hu: ["Az 1709-es poltavai csatáról híres", "Az ukrán irodalmi nyelv bölcsője", "Itt található a kerek 'Oktyabrszkij' tér", "Híres a poltavai galuskáról (haluski)"],
      ro: ["Faimoasă pentru Bătălia de la Poltava (1709)", "Patria limbii literare ucrainene", "Deține piața rotundă 'Oktiabrski'", "Cunoscută pentru găluștele de Poltava (halușkî)"],
      en: ["Famous for the Battle of Poltava (1709)", "Birthplace of the Ukrainian literary language", "Features the round 'Oktyabrsky' square", "Famous for Poltava dumplings (halushky)"]
    }
  },
  {
    id: "UA-019-dikanka",
    type: "historical",
    parent: "UA-019",
    coords: [34.5375, 49.8183],
    name: { de: "Dykanka", hu: "Dikanka", ro: "Dikanka", en: "Dykanka" },
    description: {
      de: "Dykanka ist ein berühmtes Dorf, das durch die Erzählungen von Nikolai Gogol weltbekannt wurde.",
      hu: "Dikanka egy híres falu, amely Nyikolaj Gogol elbeszélései révén vált világszerte ismertté.",
      ro: "Dikanka este un sat faimos, devenit cunoscut în întreaga lume prin povestirile lui Nikolai Gogol.",
      en: "Dykanka is a famous village that gained worldwide fame through the stories of Nikolai Gogol."
    },
    facts: {
      de: ["Schauplatz von 'Abende auf dem Weiler bei Dykanka'", "Besitzt die triumphale Bogen-Einfahrt", "Bekannt für die Nikolaus-Kirche", "Veranstaltet Folklore-Festivals"],
      hu: ["A 'Tanyai esték Dikanka mellett' színhelye", "Diadalíves kapuja van", "A Szent Miklós-templomról ismert", "Folklórfesztiválokat tartanak itt"],
      ro: ["Locul desfășurării acțiunii din 'Serile în cătunul de lângă Dikanka'", "Deține un arc de triumf la intrare", "Cunoscut pentru Biserica Sfântul Nicolae", "Găzduiește festivaluri de folclor"],
      en: ["Setting of 'Evenings on a Farm Near Dykanka'", "Features a triumphal arch entrance", "Known for the St. Nicholas Church", "Hosts folklore festivals"]
    }
  },
  {
    id: "UA-020-medzhybizh",
    type: "historical",
    parent: "UA-020",
    coords: [27.4111, 49.4358],
    name: { de: "Festung Medschybisch", hu: "Medzsibizsi vár", ro: "Cetatea Medjibij", en: "Medzhybizh Fortress" },
    description: {
      de: "Die Festung Medschybisch ist eine beeindruckende Burganlage am Zusammenfluss von Südlichem Bug und Buschok.",
      hu: "A medzsibizsi vár egy lenyűgöző erődítmény a Déli-Bug és a Buzsok folyók találkozásánál.",
      ro: "Cetatea Medjibij este o fortificație impresionantă situată la confluența râurilor Bugul de Sud și Bujok.",
      en: "Medzhybizh Fortress is an impressive fortification located at the confluence of the Southern Bug and Buzhok rivers."
    },
    facts: {
      de: ["Erbaut im 14. bis 16. Jahrhundert", "Bekannt als 'Weißer Schwan' (wegen früherer Verputzung)", "Wichtiges Zentrum des Chassidismus", "Besitzt eine gut erhaltene Schlosskirche"],
      hu: ["A 14-16. században épült", "'Fehér Hattyúként' is ismerték (egykori vakolata miatt)", "A haszidizmus fontos központja", "Jó állapotban lévő vártemploma van"],
      ro: ["Construită între secolele XIV și XVI", "Cunoscută drept 'Lebăda Albă' (datorită tencuielii de odinioară)", "Important centru al hasidismului", "Deține o biserică de castel bine conservată"],
      en: ["Built between the 14th and 16th centuries", "Known as the 'White Swan' (due to its former plastering)", "Important center of Hasidism", "Features a well-preserved castle church"]
    }
  },
  {
    id: "UA-021-ternopil",
    type: "city",
    parent: "UA-021",
    coords: [25.5948, 49.5535],
    name: { de: "Ternopil", hu: "Ternopil", ro: "Ternopil", en: "Ternopil" },
    description: {
      de: "Ternopil ist eine bedeutende Stadt im Westen der Ukraine, bekannt für ihren großen künstlichen See im Stadtzentrum.",
      hu: "Ternopil jelentős város Nyugat-Ukrajnában, amely a városközpontban található hatalmas mesterséges taváról ismert.",
      ro: "Ternopil este un oraș important din vestul Ucrainei, cunoscut pentru marele său lac artificial din centrul orașului.",
      en: "Ternopil is a major city in Western Ukraine, famous for its large artificial lake in the city center."
    },
    facts: {
      de: ["Gegründet im Jahr 1540", "Besitzt einen 300 Hektar großen See", "Wichtiger Bildungsstandort", "Bedeutendes historisches Zentrum von Podolien"],
      hu: ["1540-ben alapították", "300 hektáros tava van", "Fontos oktatási központ", "Podólia jelentős történelmi központja"],
      ro: ["Fondat în anul 1540", "Are un lac de 300 de hectare", "Important centru educațional", "Semnificativ centru istoric al Podoliei"],
      en: ["Founded in 1540", "Features a 300-hectare lake", "Major educational center", "Significant historical center of Podolia"]
    }
  },
  {
    id: "UA-021-pochaiv",
    type: "historical",
    parent: "UA-021",
    coords: [25.5031, 50.0050],
    name: { de: "Kloster Potschajiw", hu: "Pocsajivi lavra", ro: "Lavra Poceaiv", en: "Pochaiv Lavra" },
    description: {
      de: "Die Potschajiw Lavra ist das zweitgrößte orthodoxe Kloster der Ukraine und thront majestätisch auf einem Hügel.",
      hu: "A pocsajivi lavra Ukrajna második legnagyobb ortodox kolostora, amely fenségesen magasodik egy dombon.",
      ro: "Lavra Poceaiv este a doua cea mai mare mănăstire ortodoxă din Ucraina, tronând maiestuos pe un deal.",
      en: "The Pochaiv Lavra is the second largest Orthodox monastery in Ukraine, majestically perched on a hill."
    },
    facts: {
      de: ["Gegründet im 13. Jahrhundert", "Beherbergt den 'Fußabdruck der Gottesmutter'", "Bekannt für seine goldenen Kuppeln", "Wichtigster Wallfahrtsort in der Westukraine"],
      hu: ["A 13. században alapították", "Itt őrzik az 'Istenanya lábnyomát'", "Aranykupoláiról ismert", "Nyugat-Ukrajna legfontosabb zarándokhelye"],
      ro: ["Fondată în secolul al XIII-lea", "Găzduiește 'Urma Maicii Domnului'", "Cunoscută pentru cupolele sale aurii", "Cel mai important loc de pelerinaj din Ucraina de Vest"],
      en: ["Founded in the 13th century", "Houses the 'Footprint of the Mother of God'", "Famous for its golden domes", "Major pilgrimage site in Western Ukraine"]
    }
  },
  {
    id: "UA-022-petrykivka",
    type: "landmark",
    parent: "UA-022",
    coords: [34.6294, 48.7231],
    name: { de: "Petrykiwka", hu: "Petrikivka", ro: "Petrikivka", en: "Petrykivka" },
    description: {
      de: "Petrykiwka ist weltberühmt für seine traditionelle dekorative Malkunst, die zum immateriellen UNESCO-Kulturerbe gehört.",
      hu: "Petrikivka világhírű hagyományos dekoratív festőművészetéről, amely az UNESCO szellemi kulturális örökségének része.",
      ro: "Petrikivka este renumită în întreaga lume pentru pictura sa decorativă tradițională, inclusă în patrimoniul imaterial UNESCO.",
      en: "Petrykivka is world-famous for its traditional decorative painting style, which is part of UNESCO's Intangible Cultural Heritage."
    },
    facts: {
      de: ["Einzigartiger Malstil mit floralen Motiven", "UNESCO-Weltkulturerbe seit 2013", "Heimat zahlreicher Kunsthandwerker", "Veranstaltet ein jährliches Ethno-Festival"],
      hu: ["Egyedülálló festészeti stílus virágmotívumokkal", "2013 óta UNESCO szellemi kulturális örökség", "Számos kézműves otthona", "Évente etno-fesztivált rendeznek itt"],
      ro: ["Stil de pictură unic cu motive florale", "Patrimoniu UNESCO din 2013", "Casa a numeroși meșteșugari", "Găzduiește un festival etno anual"],
      en: ["Unique painting style with floral motifs", "UNESCO Intangible Cultural Heritage since 2013", "Home to numerous artisans", "Hosts an annual ethno-festival"]
    }
  },
  {
    id: "UA-023-cherkasy",
    type: "city",
    parent: "UA-023",
    coords: [32.0621, 49.4444],
    name: { de: "Tscherkassy", hu: "Cserkaszi", ro: "Cerkasî", en: "Cherkasy" },
    description: {
      de: "Tscherkassy ist das Zentrum der Zentralukraine am Ufer des Krementschuker Stausees.",
      hu: "Cserkaszi Közép-Ukrajna központja a Kremencsuki-víztározó partján.",
      ro: "Cerkasî este centrul Ucrainei Centrale, situat pe malul lacului de acumulare Kremenciuk.",
      en: "Cherkasy is the center of Central Ukraine, located on the banks of the Kremenchuk Reservoir."
    },
    facts: {
      de: ["Besitzt die längste Dammbrücke der Ukraine", "Heimat des Buddhistischen Tempels 'Weißer Lotos'", "Wichtiges chemisches Industriezentrum", "Tor zu den historischen Kosaken-Regionen"],
      hu: ["Ukrajna leghosszabb gát-hídjával rendelkezik", "A 'Fehér Lótusz' buddhista templom otthona", "Fontos vegyipari központ", "A történelmi kozák vidékek kapuja"],
      ro: ["Deține cel mai lung pod-dig din Ucraina", "Casa templului budist 'Lotusul Alb'", "Important centru al industriei chimice", "Poarta către regiunile istorice căzăcești"],
      en: ["Features the longest dam-bridge in Ukraine", "Home to the 'White Lotus' Buddhist temple", "Major chemical industry center", "Gateway to historic Cossack regions"]
    }
  },
  {
    id: "UA-023-sofiyivka",
    type: "landmark",
    parent: "UA-023",
    coords: [30.2228, 48.7647],
    name: { de: "Sofijiwka-Park", hu: "Szofijivka-park", ro: "Parcul Sofiivka", en: "Sofiyivka Park" },
    description: {
      de: "Der Sofijiwka-Park in Uman ist ein weltberühmt Meisterwerk der Gartenkunst und eines der schönsten Ensembles dieser Art in Europa.",
      hu: "Az umanyi Szofijivka-park a kertművészet világhírű remekműve, és Európa egyik legszebb ilyen jellegű együttese.",
      ro: "Parcul Sofiivka din Uman este o capodoperă a artei peisagistice recunoscută la nivel mondial și unul dintre cele mai frumoase ansambluri de acest tip din Europa.",
      en: "Sofiyivka Park in Uman is a world-renowned masterpiece of garden design and one of the most beautiful landscape parks in Europe."
    },
    facts: {
      de: ["Gegründet 1796 von Stanisław Potocki für seine Frau Sofia", "Besitzt künstliche Grotten, Wasserfälle und Statuen", "Eines der 'Sieben Wunder der Ukraine'", "Beherbergt seltene Baumarten"],
      hu: ["1796-ban alapította Stanisław Potocki felesége, Szofia tiszteletére", "Mesterséges barlangok, vízesések és szobrok díszítik", "Az 'Ukrajna hét csodája' egyike", "Ritka fafajoknak ad otthont"],
      ro: ["Fondat în 1796 de Stanislav Potocki pentru soția sa Sofia", "Deține grote artificiale, cascade și statui", "Una dintre 'Cele șapte minuni ale Ucrainei'", "Găzduiește specii rare de arbori"],
      en: ["Founded in 1796 by Stanislaw Potocki for his wife Sofia", "Features artificial grottoes, waterfalls, and statues", "One of the 'Seven Wonders of Ukraine'", "Home to rare tree species"]
    }
  },
  {
    id: "UA-024-kropyvnytskyi",
    type: "city",
    parent: "UA-024",
    coords: [32.2623, 48.5079],
    name: { de: "Kropywnyzkyj", hu: "Kropivnickij", ro: "Kropîvnîțkîi", en: "Kropyvnytskyi" },
    description: {
      de: "Kropywnyzkyj, früher Kirowohrad, ist eine zentralukrainische Stadt, die als 'Hauptstadt des ukrainischen Theaters' gilt.",
      hu: "Kropivnickij, korábban Kirovohrad, közép-ukrán város, amelyet az 'ukrán színház fővárosaként' tartanak számon.",
      ro: "Kropîvnîțkîi, fostul Kirovohrad, este un oraș din Ucraina Centrală, considerat 'capitala teatrului ucrainean'.",
      en: "Kropyvnytskyi, formerly Kirovohrad, is a central Ukrainian city known as the 'Capital of Ukrainian Theatre'."
    },
    facts: {
      de: ["Heimat des ersten professionellen ukrainischen Theaters", "Bekannt für den dendrologischen Park mit Tulpen", "Wichtiges Zentrum für Agrarmaschinenbau", "Früherer Name: Jelisawetgrad"],
      hu: ["Az első professzionális ukrán színház otthona", "A tulipános dendrológiai parkjáról ismert", "A mezőgazdasági gépgyártás fontos központja", "Korábbi neve: Jelizavetgrád"],
      ro: ["Casa primului teatru profesionist ucrainean", "Cunoscut pentru parcul dendrologic cu lalele", "Important centru pentru fabricarea mașinilor agricole", "Nume anterior: Elisavetgrad"],
      en: ["Home to the first professional Ukrainian theatre", "Famous for its dendrological park with tulips", "Major center for agricultural machinery", "Former name: Elisavetgrad"]
    }
  },
  {
    id: "UA-024-missile-museum",
    type: "historical",
    parent: "UA-024",
    coords: [30.6653, 48.1869],
    name: { de: "Museum der Raketenstreitkräfte", hu: "Stratégiai Rakétacsapatok Múzeuma", ro: "Muzeul Forțelor de Rachete Strategice", en: "Museum of Strategic Missile Forces" },
    description: {
      de: "Dieses Museum befindet sich in einem ehemaligen sowjetischen Atomraketenstützpunkt und zeigt die Geschichte des Kalten Krieges.",
      hu: "Ez a múzeum egy egykori szovjet atomrakéta-bázison található, és a hidegháború történetét mutatja be.",
      ro: "Acest muzeu este situat într-o fostă bază sovietică de rachete nucleare și prezintă istoria Războiului Rece.",
      en: "This museum is located in a former Soviet nuclear missile base and showcases the history of the Cold War."
    },
    facts: {
      de: ["Man kann ein unterirdisches Kontrollzentrum besichtigen", "Zeigt SS-24 'Scalpel' Raketen", "Ehemaliger streng geheimer Standort", "Einzigartig in seiner Art weltweit"],
      hu: ["Megtekinthető egy földalatti parancsnoki központ", "SS-24 'Scalpel' rakétákat mutat be", "Egykori szigorúan titkos helyszín", "Világszerte egyedülálló a maga nemében"],
      ro: ["Se poate vizita un centru de comandă subteran", "Expune rachete SS-24 'Scalpel'", "Fost sit strict secret", "Unic în lume de acest fel"],
      en: ["Visitors can explore an underground command center", "Exhibits SS-24 'Scalpel' missiles", "Former top-secret site", "Unique of its kind in the world"]
    }
  }
];

export const ukrainePois = [
  ukraineCountry,
  ...ukraineCities,
  ...ukraineLandmarks,
  ...ukraineNature,
  ...ukraineNewPois
];
