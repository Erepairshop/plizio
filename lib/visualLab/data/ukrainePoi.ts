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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
    coords: [22.2879, 48.6208],
    name: { de: "Uschhorod", hu: "Ungvár", ro: "Ujhorod", en: "Uzhhorod" },
    description: {
      de: "Uschhorod, die Hauptstadt der Transkarpatien-Region, ist die westlichste Stadt der Ukraine. Sie ist berühmt für ihre Frühlings-Sakura-Blüte, die alte Burg und die multiethnische Atmosphäre.",
      hu: "Ungvár, Kárpátalja központja Ukrajna legnyugatibb városa. Híres tavaszi cseresznyevirágzásáról, ősi váráról és soknemzetiségű hangulatáról.",
      ro: "Ujhorod, capitala regiunii Transcarpatia, este cel mai vestic oraș din Ucraina. Este faimos pentru înflorirea cireșilor japonezi primăvara, castelul vechi și atmosfera multietnică.",
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
    parent: "country-ukraine",
    coords: [30.5574, 50.4346],
    name: { de: "Kiewer Höhlenkloster", hu: "Kijevi Pecserszka Lavra", ro: "Lavra Pecerska", en: "Kyiv Pechersk Lavra" },
    description: {
      de: "Das Kiewer Höhlenkloster ist ein historisches orthodoxes christliches Kloster, bekannt für sein unterirdisches Höhlensystem und die prächtigen Goldkuppeln. Ein UNESCO-Welterbe.",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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
    parent: "country-ukraine",
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

export const ukrainePois = [
  ukraineCountry,
  ...ukraineCities,
  ...ukraineLandmarks,
  ...ukraineNature
];
