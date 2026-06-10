// @ts-nocheck
import type { POI } from "./poi";

// 1. Ország
export const serbiaCountry: POI = {
  id: "country-serbia",
  type: "country",
  coords: [21.0059, 44.0165],
  name: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
  description: {
    de: "Serbien liegt auf der Balkanhalbinsel. Es ist bekannt für seine reiche Geschichte, beeindruckende Festungen, orthodoxe Klöster und lebendige Städte.",
    hu: "Szerbia a Balkán-félszigeten fekszik. Gazdag történelméről, lenyűgöző erődítményeiről, ortodox kolostorairól és nyüzsgő városairól ismert.",
    ro: "Serbia este situată în Peninsula Balcanică. Este cunoscută pentru istoria sa bogată, cetățile impresionante, mănăstirile ortodoxe și orașele pline de viață.",
    en: "Serbia is located on the Balkan Peninsula. It is known for its rich history, impressive fortresses, orthodox monasteries, and vibrant cities."
  },
  facts: {
    de: ["Hauptstadt: Belgrad", "Liegt am Balkan", "Währung: Serbischer Dinar", "Amtssprache: Serbisch", "Nicht-EU-Mitglied"],
    hu: ["Főváros: Belgrád", "A Balkánon fekszik", "Pénznem: Szerb dinár", "Hivatalos nyelv: Szerb", "Nem EU-tag"],
    ro: ["Capitala: Belgrad", "Situată în Balcani", "Moneda: Dinar sârbesc", "Limba oficială: Sârbă", "Nu este membră UE"],
    en: ["Capital: Belgrade", "Located in the Balkans", "Currency: Serbian Dinar", "Official language: Serbian", "Non-EU member"]
  }, image: "/poi-images/country-serbia.webp",
    descriptionAdvanced: {
      de: "Serbien, im Herzen der Balkanhalbinsel gelegen, ist ein Land von außergewöhnlicher geographischer und historischer Vielfalt, das als Brücke zwischen Zentraleuropa und dem Südosten des Kontinents fungiert. Die Geschichte des Landes ist geprägt von der Schnittstelle großer Imperien, wobei das Erbe des Römischen Reiches, des Osmanischen Reiches und der Habsburgermonarchie bis heute in der Architektur und den kulturellen Traditionen sichtbar ist. Besonders eindrucksvoll ist die Naturkulisse, die von den fruchtbaren Ebenen der Vojvodina im Norden bis zu den schroffen Gebirgszügen des Balkans und der Dinariden im Süden reicht. Die Donau, die zweitlängste Wasserstraße Europas, durchfließt das Land auf einer Länge von fast 600 Kilometern und bildet mit dem Eisernen Tor eine der spektakulärsten Flussschluchten der Welt. Belgrad, die pulsierende Hauptstadt am Zusammenfluss von Save und Donau, gilt als eine der ältesten kontinuierlich bewohnten Städte Europas und ist heute ein dynamisches Zentrum für Kultur, Innovation und ein weltberühmtes Nachtleben. Neben der urbanen Dynamik bewahrt Serbien ein tief verwurzeltes spirituelles Erbe, insbesondere in den zahlreichen mittelalterlichen Klöstern wie Studenica oder Sopoćani, die zum UNESCO-Welterbe gehören und Meisterwerke der byzantinisch-serbischen Kunst darstellen. Ökonomisch hat sich das Land zu einem wichtigen Knotenpunkt für Transport und Energie entwickelt, während die Gastfreundschaft der Menschen und die reichhaltige kulinarische Tradition, die Einflüsse aus Orient und Okzident vereint, Serbien zu einem faszinierenden Ziel für Reisende machen, die Authentizität und Tiefe suchen. Die Vielfalt der Landschaften bietet zudem Raum für fünf Nationalparks, darunter Tara und Kopaonik, die für ihre Artenvielfalt und unberührte Natur bekannt sind. Serbien ist zudem die Heimat bedeutender wissenschaftlicher Persönlichkeiten wie Nikola Tesla, dessen Erbe weltweit die Moderne prägte.",
      hu: "Szerbia a Balkán-félsziget szívében elhelyezkedő ország, amely évszázadok óta stratégiai jelentőségű hídként szolgál Közép-Európa és Délkelet-Európa között. Történelme során a terület számos nagy birodalom ütközőpontja volt, ami egyedülálló kulturális és vallási mozaikot hozott létre; a római kori örökségtől kezdve a középkori szerb királyság virágkorán át az oszmán és Habsburg hatásokig minden korszak mély nyomot hagyott a tájon. Északon a Vajdaság végtelen síkságai és a Duna menti termékeny földek határozzák meg a látképet, míg délebbre haladva a táj drámai módon átalakul, és a Kárpátok, a Balkán-hegység, valamint a Dinári-hegység vonulatai uralják a horizontot. A Duna csaknem 600 kilométeren keresztül kanyarog az országban, leglátványosabb szakasza a Vaskapu-szoros, ahol a folyó mélyen bevágja magát a sziklák közé. Belgrád, az ország fővárosa, a Száva és a Duna összefolyásánál épült, és a történelem során számtalanszor lerombolták, majd újjáépítették, ma pedig a régió egyik legizgalmasabb kulturális és gazdasági központja. A szerb kultúra szerves részét képezik a Világörökség részét képező középkori kolostorok, mint például Studenica, amelyek a szerb ortodox kereszténység és művészet felbecsülhetetlen kincseit őrzik. Az ország gasztronómiája a balkáni ízek, a török fűszerezés és a közép-európai konyhatechnológia izgalmas keveréke, amely a helyiek messze földön híres vendégszeretetével párosul. Szerbia ma modernizálódó állam, amely büszkén őrzi hagyományait, legyen szó a népzenéről, a kézművességről vagy a technológiai újításokról, amelyeknek legismertebb képviselője a világhírű feltaláló, Nikola Tesla volt. A természetkedvelők számára az ország öt nemzeti parkja, köztük a Tara és a Kopaonik kínál érintetlen menedéket, ahol ritka állatfajok és különleges növénytársulások élnek háborítatlanul a hegycsúcsok árnyékában.",
      ro: "Serbia, situată în inima Peninsulei Balcanice, reprezintă o răscruce istorică și geografică esențială între Europa Centrală și cea de Sud-Est, fiind un stat cu o identitate culturală profundă și complexă. Relieful țării este de o diversitate remarcabilă, începând cu câmpiile roditoare ale Voivodinei în nord, traversate de marile fluvii Dunăre, Tisa și Sava, și continuând spre sud cu peisaje montane spectaculoase aparținând Munților Balcani și Alpilor Dinarici. Dunărea constituie coloana vertebrală a țării pe o distanță de aproape 600 de kilometri, formând la granița cu România faimoasele Porți de Fier, cel mai mare defileu natural din Europa, un loc de o frumusețe sălbatică și de o importanță strategică majoră încă din antichitate. Istoria Serbiei este marcată de reziliență și transformare, fiind locul de naștere a 17 împărați romani și centrul unui regat medieval înfloritor, ale cărui mănăstiri ortodoxe, precum cele de la Studenica sau Sopoćani, sunt astăzi protejate de UNESCO pentru arhitectura și frescele lor unice. Belgradul, capitala situată la confluența Savei cu Dunărea, este un oraș vibrant, cu o istorie de peste două milenii, care a reușit să se redefinească constant dintr-un punct strategic disputat într-un hub modern de creativitate, viață de noapte și inovație tehnologică. Serbia este renumită pentru ospitalitatea caldă a locuitorilor săi și pentru o gastronomie robustă care îmbină influențele orientale cu cele continentale, oferind o experiență autentică vizitatorilor. De la Parcul Național Tara, cu pădurile sale virgine, până la vestigiile romane de la Felix Romuliana, țara oferă un parcurs fascinant printre straturi succesive de civilizație, păstrând în același timp o mândrie națională puternică și o dorință de modernizare în context european. Spiritul sârbesc este definit printr-un amestec unic de tradiție și energie creativă, manifestat în festivaluri de renume internațional și într-o dorință continuă de afirmare în spațiul cultural global.",
      en: "Serbia, positioned at the core of the Balkan Peninsula, serves as a vital geopolitical and cultural bridge connecting Central Europe with the Mediterranean and the Near East. Its landscape is a study in contrasts, featuring the vast, fertile Pannonian plains of Vojvodina in the north and the rugged, forested highlands of the Balkan, Carpathian, and Dinaric mountain ranges in the south. The Danube River is the nation’s lifeblood, flowing for 588 kilometers through Serbian territory and carving the spectacular Iron Gates gorge, one of Europe's most impressive natural landmarks. Serbia's historical depth is extraordinary; it was the birthplace of no fewer than 17 Roman emperors and later became the seat of a powerful medieval empire, leaving behind a legacy of UNESCO-listed Orthodox monasteries such as Studenica and Visoki Dečani, renowned for their exquisite Byzantine-style frescoes. Belgrade, the capital, sits majestically at the confluence of the Sava and Danube rivers and is one of the oldest continuously inhabited cities in Europe, today pulsating with a legendary nightlife, a burgeoning tech scene, and a rich architectural blend of Ottoman, Neoclassical, and Brutalist styles. Beyond its urban centers, Serbia offers pristine natural beauty in its five national parks, including Tara and Kopaonik, which are havens for endemic species and outdoor enthusiasts. The Serbian spirit is characterized by a unique blend of traditional hospitality, known as 'gostoprimstvo', and a resilient creative energy that has produced world-renowned figures like the inventor Nikola Tesla and the physicist Mileva Marić. Culturally, the country is a vibrant mosaic where Eastern Orthodox traditions meet Western influences, reflected in its diverse music, cinema, and a gastronomy that celebrates high-quality local ingredients, from plum brandies to succulent grilled meats. This land of transition and endurance continues to evolve, balancing its deep-rooted heritage with a forward-looking ambition that defines its contemporary role in the European landscape.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 77.474 km² (ohne Kosovo)", "Bevölkerung: ca. 6,65 Millionen Einwohner", "Höchster Gipfel: Midžor im Balkangebirge (2.169 m)", "Donau-Verlauf: 588 km fließen durch serbisches Gebiet", "Römische Kaiser: 17 Herrscher wurden hier geboren", "UNESCO-Welterbe: 5 registrierte Kultur- und Naturstätten"],
      hu: ["Terület: kb. 77 474 km² (Koszovó nélkül)", "Népesség: kb. 6,65 millió fő", "Legmagasabb pont: Midžor (2169 m) a Balkán-hegységben", "Duna hossza: 588 km-es szakasz érinti az országot", "Római császárok: 17 uralkodó született ezen a területen", "UNESCO helyszínek: 5 világörökségi helyszínnel rendelkezik"],
      ro: ["Suprafață: aprox. 77.474 km² (fără Kosovo)", "Populație: aprox. 6,65 milioane de locuitori", "Cel mai înalt punct: Vârful Midžor (2.169 m)", "Lungimea Dunării: 588 km pe teritoriul sârbesc", "Împărați romani: 17 s-au născut pe actualul teritoriu", "Patrimoniu UNESCO: 5 situri înscrise pe lista mondială"],
      en: ["Area: Approximately 77,474 km² (excluding Kosovo)", "Population: Around 6.65 million residents", "Highest point: Midžor peak at 2,169 meters", "Danube length: 588 km flows through Serbia", "Roman Emperors: 17 were born on this territory", "UNESCO sites: 5 properties inscribed on the list"],
    },
  };

// 2. Fő régiók / Tartományok
export const serbiaRegions: POI[] = [
  {
    id: "region-vojvodina",
    type: "region",
    parent: "country-serbia",
    coords: [19.8369, 45.2671],
    name: { de: "Vojvodina", hu: "Vajdaság", ro: "Voivodina", en: "Vojvodina" },
    description: {
      de: "Die Vojvodina ist eine autonome Provinz im Norden Serbiens, bekannt für ihre multikulturelle Bevölkerung und flache Agrarlandschaft.",
      hu: "A Vajdaság egy autonóm tartomány Szerbia északi részén, amely multikulturális lakosságáról és sík mezőgazdasági tájairól ismert.",
      ro: "Voivodina este o provincie autonomă în nordul Serbiei, cunoscută pentru populația sa multiculturală și peisajul agricol plat.",
      en: "Vojvodina is an autonomous province in northern Serbia, known for its multicultural population and flat agricultural landscape."
    },
    facts: {
      de: ["Nordprovinz", "Multikulturell", "Fruchtbare Ebenen", "Hauptstadt: Novi Sad", "Starke Landwirtschaft"],
      hu: ["Északi tartomány", "Multikulturális", "Termékeny síkságok", "Székhelye: Újvidék", "Erős mezőgazdaság"],
      ro: ["Provincie nordică", "Multiculturală", "Câmpii fertile", "Capitala: Novi Sad", "Agricultură puternică"],
      en: ["Northern province", "Multicultural", "Fertile plains", "Capital: Novi Sad", "Strong agriculture"]
    },
    descriptionAdvanced: {
      de: "Die Vojvodina ist eine autonome Provinz im Norden Serbiens und bildet den südlichen Teil der Pannonischen Tiefebene. Die Region ist geografisch geprägt durch weite, fruchtbare Ebenen, die nur durch das Mittelgebirge Fruška Gora im Süden und die Ausläufer der Karpaten bei Vršac unterbrochen werden. Drei große Flüsse – die Donau, die Theiß und die Save – prägen das Wasserreichtum und dienten historisch als wichtige Verkehrswege. Die Vojvodina ist bekannt für ihre außergewöhnliche ethnische und kulturelle Vielfalt; hier leben über 26 verschiedene Nationalitäten friedlich zusammen, und es gibt sechs offizielle Amtssprachen (Serbisch, Ungarisch, Slowakisch, Rumänisch, Russinisch und Kroatisch). Diese Multikulturalität spiegelt sich in der Architektur der Städte wie Novi Sad, Subotica und Sombor wider, die stark vom österreichisch-ungarischen Barock und Jugendstil geprägt sind. Novi Sad, die Hauptstadt der Provinz und zweitgrößte Stadt Serbiens, ist ein bedeutendes kulturelles Zentrum und beherbergt die imposante Festung Petrovaradin, die als 'Gibraltar an der Donau' bekannt ist. Wirtschaftlich gilt die Vojvodina als die 'Kornkammer Serbiens', da der extrem fruchtbare Tschernosem-Boden ideale Bedingungen für den Anbau von Getreide, Mais, Sonnenblumen und Zuckerrüben bietet. Neben der Landwirtschaft spielt die petrochemische Industrie eine wichtige Rolle. Naturfreunde schätzen den Nationalpark Fruška Gora, der nicht nur für seine dichten Wälder und Wanderwege bekannt ist, sondern auch für seine 16 orthodoxen Klöster aus dem Mittelalter, die als 'serbisches Athos' bezeichnet werden. Ein weiteres Highlight ist das Naturreservat Carska Bara, ein Paradies für Vogelbeobachter. Die regionale Gastronomie ist eine deftige Mischung aus serbischen, ungarischen und deutschen Einflüssen, wobei Fischpaprikasch, würzige Würste und die berühmten Weine aus den Gebieten um Sremski Karlovci und Vršac hervorstechen. Die Vojvodina verbindet auf einzigartige Weise mitteleuropäische Ordnung mit balkanischem Temperament und gilt als modernster Teil Serbiens.",
      hu: "Vajdaság Autonóm Tartomány Szerbia északi részén helyezkedik el, a Pannon-alföld déli vidékén. Ez a régió Szerbia legfejlettebb és legtöbbnemzetiségű területe, ahol a szerbek mellett jelentős magyar, szlovák, horvát, román és ruszin közösségek élnek. A tartománynak hat hivatalos nyelve van, ami Európában is ritka multikulturális modellt jelent. Földrajzi képét a végtelen rónaságok határozzák meg, amelyeket csak a Tarcal-hegység (Fruška Gora) lankái és a Verseci-hegység tör meg. A régiót három nagy folyó szeli át: a Duna, a Tisza és a Száva, amelyek meghatározzák a táj vízrajzát és éghajlatát. Vajdaság központja Újvidék (Novi Sad), amely 2022-ben Európa Kulturális Fővárosa volt, és híres a péterváradi erődről, ahol évente megrendezik az Exit fesztivált. Északon Szabadka (Subotica) városa emelkedik ki gyönyörű szecessziós építészetével, amely a Monarchia korabeli hangulatot idézi. Gazdaságilag Vajdaság az ország éléstára; a rendkívül termékeny feketeföld (csernozjom) kiváló lehetőséget ad a búza, kukorica és napraforgó termesztésére. A mezőgazdaság mellett jelentős az élelmiszeripar és a kőolaj-kitermelés is. A Tarcal-hegység nemcsak természeti kincs, hanem vallási központ is, hiszen 16 középkori ortodox kolostor található itt, amelyeket a szerb kultúra őrzőinek tekintenek. A magyar közösség számára kiemelt jelentőségű Zenta és Topolya, ahol a kulturális hagyományok és az anyanyelvi oktatás erős bázisai működnek. Vajdaság gasztronómiája rendkívül gazdag, ötvözi a magyaros fűszerességet a balkáni ízekkel; a halászlé, a gulyás és a különféle húsételek mellett a szerémségi borok is világhírűek. A tartomány közlekedési szempontból is kulcsfontosságú, hiszen itt haladnak át a Közép-Európát a Balkánnal és a Közel-Kelettel összekötő főbb vasúti és közúti folyosók. A vajdasági emberek mentalitására jellemző a nyugodtság és a vendégszeretet, ami a táj lassan hömpölygő folyóinak karakterét tükrözi.",
      ro: "Voivodina este o provincie autonomă situată în partea de nord a Serbiei, reprezentând segmentul sudic al Câmpiei Panonice. Această regiune este renumită pentru diversitatea sa etnică și culturală extraordinară, fiind casa a peste 26 de grupuri etnice. Voivodina recunoaște oficial șase limbi de stat, printre care și limba română, reflectând respectul pentru minoritățile care conviețuiesc aici, inclusiv comunitatea românească din Banatul sârbesc. Peisajul este predominant plat, oferind soluri de cernoziom extrem de fertile, care au transformat regiunea în principalul motor agricol al Serbiei. Singurele ridicături notabile sunt muntele Fruška Gora în sud și Munții Vârșeț în est, la granița cu România. Capitala provinciei, Novi Sad, este un oraș cosmopolit situat pe malul Dunării, faimos pentru Cetatea Petrovaradin și pentru viața sa culturală vibrantă, fiind desemnat Capitală Europeană a Culturii în 2022. Subotica, situată în nord, este un alt centru urban major, remarcabil prin arhitectura sa Art Nouveau și influențele central-europene. Din punct de vedere economic, Voivodina excelează în producția de cereale, plante tehnice și creșterea animalelor, dar găzduiește și sediile celor mai mari companii energetice din țară. Parcul Național Fruška Gora este o destinație turistică de top, adăpostind 16 mănăstiri ortodoxe construite între secolele XV și XVIII, care reprezintă veritabile comori de artă și istorie. Zona Vârșețului este celebră pentru podgoriile sale și tradiția seculară în producția de vinuri de calitate. Gastronomia din Voivodina este o fuziune delicioasă de rețete sârbești, maghiare, germane și românești, oferind preparate precum gulașul, papricașul de pește și diverse produse de patiserie. Rețeaua densă de canale, inclusiv canalul Dunăre-Tisa-Dunăre, joacă un rol vital în irigații și transport. Voivodina reprezintă o punte de legătură între Europa Centrală și Balcani, fiind o regiune unde tradițiile istorice se îmbină armonios cu o viziune modernă și europeană asupra dezvoltării sociale și economice.",
      en: "Vojvodina is an autonomous province in northern Serbia, forming the southern part of the Pannonian Plain. It is one of the most developed and diverse regions in Southeast Europe, home to more than 26 ethnic groups and officially recognizing six languages (Serbian, Hungarian, Slovak, Romanian, Rusyn, and Croatian). The landscape is a vast, fertile plain, interrupted only by the Fruška Gora mountain in the south and the Vršac Mountains in the east. Three major rivers—the Danube, Tisa, and Sava—flow through the province, defining its geography and history. The provincial capital, Novi Sad, is Serbia's second-largest city and a major cultural hub, known for the Petrovaradin Fortress, which hosts the world-famous Exit Festival. Subotica, located near the Hungarian border, is another architectural gem, celebrated for its unique Secessionist buildings. Economically, Vojvodina is known as the 'breadbasket of Serbia' due to its highly fertile black soil (chernozem), which produces massive yields of wheat, corn, and sunflowers. The province also holds significant oil and gas reserves and a strong food-processing industry. Natural attractions include the Fruška Gora National Park, home to 16 medieval Orthodox monasteries often referred to as the 'Serbian Holy Mountain'. The Carska Bara nature reserve provides a critical habitat for hundreds of bird species. The local gastronomy reflects the region's multicultural heritage, blending Central European and Balkan flavors; it is famous for its fish stews, sausages, and premium wines from the Srem and Vršac wine regions. Historically, the area was part of the Austro-Hungarian Empire for centuries, which left a lasting impact on its urban planning and social structure. Today, Vojvodina is a model of multi-ethnic coexistence and economic prosperity, serving as a gateway between Central Europe and the Balkans.",
    },
    factsAdvanced: {
      de: ["Fläche: 21.506 km² (ca. 24% der Gesamtfläche Serbiens).", "Einwohner: Etwa 1,9 Millionen Menschen.", "Sprachen: 6 offizielle Amtssprachen sind gesetzlich verankert.", "Geografie: Höchster Punkt ist der Gudurički vrh (641 m).", "Gewässer: Das Kanalsystem Donau-Theiß-Donau ist 930 km lang.", "Landwirtschaft: 84% der Fläche wird landwirtschaftlich genutzt.", "Kultur: Novi Sad war 2022 Europäische Kulturhauptstadt.", "Religion: Fruška Gora beherbergt 16 aktive orthodoxe Klöster."],
      hu: ["Terület: 21 506 km2, Szerbia északi tartománya.", "Népesség: Kb. 1,9 millió fő, jelentős magyar kisebbséggel (kb. 250 000).", "Központ: Újvidék (Novi Sad), a tartomány székhelye.", "Hivatalos nyelvek: Szerb, magyar, szlovák, román, ruszin és horvát.", "Természet: A Tarcal-hegység (Fruška Gora) az egyetlen nemzeti parkja.", "Gazdaság: Szerbia mezőgazdasági termelésének több mint 50%-át adja.", "Történelem: 1945 óta autonóm tartomány Szerbián belül.", "Építészet: Szabadka a magyar szecesszió egyik legfontosabb városa."],
      ro: ["Suprafață: 21.506 km pătrați, reprezentând nordul Serbiei.", "Populație: 1,93 milioane de locuitori la recensământul din 2011.", "Capitală: Novi Sad, al doilea oraș ca mărime din țară.", "Minorități: Include o comunitate semnificativă de români (aprox. 30.000).", "Relief: Câmpie cu altitudine medie de 80-100 metri.", "Climă: Continentală moderată, cu veri calde și ierni reci.", "Biodiversitate: Rezervația Deliblata este cea mai mare zonă de nisip din Europa.", "Economie: Regiunea produce aproape tot zahărul și uleiul din Serbia."],
      en: ["Area: 21,506 sq km, covering the northern portion of Serbia.", "Population: Approximately 1.9 million people.", "Languages: 6 official languages are used in provincial administration.", "Main Hubs: Novi Sad (Capital), Subotica, Pančevo, and Zrenjanin.", "Geography: Part of the Pannonian Basin, surrounded by major rivers.", "Agriculture: Known as the most fertile region in the Balkans.", "Landmark: Petrovaradin Fortress covers 112 hectares on the Danube.", "Energy: Contains the majority of Serbia's crude oil and gas fields."],
    },
  },
  {
    id: "region-sumadija",
    type: "region",
    parent: "country-serbia",
    coords: [20.9167, 44.0167],
    name: { de: "Šumadija", hu: "Šumadija", ro: "Šumadija", en: "Šumadija" },
    description: {
      de: "Šumadija liegt im Herzen Serbiens und ist für ihre hügeligen Wälder und historische Bedeutung bekannt.",
      hu: "A Šumadija Szerbia szívében található, dombos erdeiről és történelmi jelentőségéről ismert.",
      ro: "Šumadija este situată în inima Serbiei și este cunoscută pentru pădurile sale deluroase și importanța istorică.",
      en: "Šumadija is located in the heart of Serbia and is known for its hilly forests and historical significance."
    },
    facts: {
      de: ["Zentralserbien", "Hügelige Landschaft", "Historisches Kernland", "Obstbau", "Wälder"],
      hu: ["Közép-Szerbia", "Dombos táj", "Történelmi magterület", "Gyümölcstermesztés", "Erdők"],
      ro: ["Serbia Centrală", "Peisaj deluros", "Zona istorică centrală", "Pomicultură", "Păduri"],
      en: ["Central Serbia", "Hilly landscape", "Historical heartland", "Fruit growing", "Forests"]
    }, image: "/poi-images/region-sumadija.webp",
    descriptionAdvanced: {
      de: "Die Šumadija ist das geografische und historische Herzstück Zentralserbiens und gilt als Wiege der modernen serbischen Eigenstaatlichkeit. Der Name leitet sich vom serbischen Wort 'šuma' für Wald ab, da die Region einst von dichten, schier endlosen Eichenwäldern bedeckt war. Heute ist die Landschaft geprägt von sanften, grünen Hügeln, ausgedehnten Obstgärten und Weinbergen, was ihr oft den Beinamen 'serbische Toskana' einbringt. Historisch erlangte die Šumadija im frühen 19. Jahrhundert weltweite Bedeutung, als hier 1804 in Orašac der Erste Serbische Aufstand gegen die osmanische Herrschaft unter der Führung von Karađorđe begann. Kragujevac, die größte Stadt der Region, diente zwischen 1818 und 1841 als erste Hauptstadt des modernen Serbiens unter Fürst Miloš Obrenović. Hier entstanden die ersten modernen Institutionen des Landes, wie das erste Gymnasium, das erste Theater und die erste Druckerei. Ein kultureller Höhepunkt ist der Oplenac-Hügel in Topola, wo sich die prachtvolle St.-Georgs-Kirche befindet, die als Mausoleum der königlichen Familie Karađorđević dient und für ihre beeindruckenden Mosaike aus über 40 Millionen Steinchen bekannt ist. Die Wirtschaft der Region ist traditionell landwirtschaftlich geprägt, wobei der Anbau von Pflaumen und die Herstellung von Šljivovica (Pflaumenschnaps) eine zentrale Rolle spielen. In den letzten Jahrzehnten hat sich Kragujevac zudem zu einem bedeutenden Zentrum der Automobilindustrie entwickelt, insbesondere durch das Werk von Fiat Chrysler Automobiles. Geografisch wird die Šumadija durch die Flüsse Save und Donau im Norden, die Morava im Osten und die Kolubara im Westen begrenzt. Die Region ist zudem bekannt für ihre 'Šumadija-Häuser', eine traditionelle ländliche Architektur, die harmonisch in die wellige Topografie eingebettet ist. Die Bewohner gelten als gastfreundlich und bewahren stolz ihre folkloristischen Traditionen, Tänze und kulinarischen Spezialitäten, was die Region zu einem wichtigen Ziel für den ländlichen Tourismus in Serbien macht.",
      hu: "Šumadija Közép-Szerbia központi tájegysége, amely az ország történelmi és kulturális szíveként ismert. Neve a szerb 'šuma' (erdő) szóból ered, utalva arra a hatalmas erdőségre, amely a 19. századig borította a dombvidéket. Šumadija a modern szerb államiság bölcsője; 1804-ben itt, Orašac faluban tört ki az első szerb felkelés az oszmán uralom ellen Karađorđe vezetésével. A régió legnagyobb városa, Kragujevac volt a modern Szerbia első fővárosa 1818 és 1841 között, ahol az ország első gimnáziumát, színházát és bíróságát alapították. A táj jellegzetesen dombos, termékeny völgyekkel és lankás domboldalakkal, ahol a mezőgazdaság, különösen a gyümölcstermesztés virágzik. Šumadija világhírű a szilvatermesztéséről és a belőle készült pálinkáról, a Šljivovicáról, amely a helyi identitás szerves része. Topola városa és az Oplenac-domb kiemelkedő kulturális helyszín, itt található a Karađorđević királyi család mauzóleuma, a Szent György-templom, amelynek belső tereit lélegzetelállító üvegmozaikok díszítik. Gazdasági szempontból a régió jelentősége Kragujevac iparában is megmutatkozik, amely évtizedek óta a szerb autógyártás központja (korábban Zastava, ma Fiat). A régió klímája mérsékelt kontinentális, ideális a bortermeléshez is, ezért az utóbbi időben a 'szerb Toszkána' néven is emlegetik a fejlődő borászatok miatt. A helyi gasztronómia híres a sült húsokról és a hagyományos paraszti ételekről. Šumadija északon a Száva és a Duna vonaláig nyúlik, keleten a Nagy-Morava folyó határolja. A régió fontos szerepet játszik a szerb ortodox vallási életben is, számos kolostor és templom található a területén, amelyek a középkori szerb építészet emlékeit őrzik. A néprajzi hagyományok, a népviselet és a népzene a mai napig élénken jelen vannak a falusi közösségekben, vonzva a falusi turizmus kedvelőit.",
      ro: "Šumadija este inima geografică și istorică a Serbiei Centrale, fiind considerată leagănul statalității sârbe moderne. Numele regiunii provine din cuvântul sârbesc „šuma”, care înseamnă pădure, reflectând faptul că acest teritoriu era odinioară acoperit de păduri de stejar impenetrabile. Peisajul actual este unul pitoresc, format din dealuri line, văi fertile și numeroase podgorii, ceea ce a dus la supranumirea zonei drept „Toscana Serbiei”. Din punct de vedere istoric, Šumadija a jucat un rol crucial în eliberarea de sub dominația otomană; în 1804, la Orašac, a început Prima Răscoală Sârbă sub conducerea lui Karađorđe. Orașul Kragujevac, centrul administrativ și cel mai mare oraș al regiunii, a servit drept primă capitală a Serbiei moderne între 1818 și 1841, în timpul domniei cneazului Miloš Obrenović. Aici au fost înființate primele instituții europene ale țării: liceul, teatrul și tipografia. Un alt punct de referință este dealul Oplenac din Topola, unde se află Biserica Sfântul Gheorghe, mausoleul familiei regale Karađorđević, celebră pentru mozaicurile sale spectaculoase formate din peste 40 de milioane de piese colorate. Economia regiunii este mixtă, îmbinând agricultura performantă cu industria manufacturieră. Šumadija este renumită pentru producția de prune și pentru fabricarea rachiului tradițional numit Šljivovica. În plan industrial, Kragujevac este centrul industriei auto din Serbia, găzduind uzina Fiat. Regiunea este delimitată la nord de râurile Sava și Dunăre, la est de Morava Mare și la vest de râul Kolubara. Cultura locală este marcată de un spirit ospitalier și de conservarea tradițiilor folclorice, manifestate prin dansuri populare (kolo) și costume tradiționale brodate. Turismul rural este în plină expansiune, vizitatorii fiind atrași de satele autentice, de rutele vinului și de mănăstirile ortodoxe medievale presărate pe colinele verzi. Gastronomia regiunii este robustă, bazată pe produse locale proaspete, brânzeturi și preparate din carne la grătar, oferind o experiență culinară autentică în inima Balcanilor.",
      en: "Šumadija is the geographical and cultural heart of Central Serbia, widely regarded as the cradle of the modern Serbian state. Its name is derived from the Serbian word 'šuma' (forest), as the region was once covered by dense, primeval oak forests. Today, the landscape is characterized by rolling green hills, fertile valleys, and vast orchards, earning it the nickname 'the Serbian Tuscany'. Historically, Šumadija rose to prominence in the early 19th century when the First Serbian Uprising against Ottoman rule began in 1804 at Orašac, led by Karađorđe. Kragujevac, the region's largest city, served as the first capital of modern Serbia from 1818 to 1841, becoming the site of the nation's first gymnasium, theater, and printing press. A major cultural landmark is the Oplenac Hill in Topola, home to the St. George's Church and the Royal Mausoleum of the Karađorđević dynasty, which features stunning mosaics composed of over 40 million glass tiles. The regional economy is deeply rooted in agriculture, particularly fruit growing; Šumadija is world-famous for its plum production and the traditional plum brandy known as Šljivovica. In the industrial sector, Kragujevac has been the hub of the Serbian automotive industry for decades, hosting the Fiat Chrysler plant. Geographically, the region is bounded by the Sava and Danube rivers to the north, the Great Morava to the east, and the Kolubara to the west. The area is also known for its traditional 'Šumadija-style' rural architecture, which harmonizes with the undulating terrain. Local culture is vibrant, with a strong emphasis on folklore, traditional music, and hospitality. Visitors are increasingly drawn to the region's emerging wine routes and rural tourism offerings, which showcase the authentic Balkan lifestyle. With its rich historical legacy and scenic natural beauty, Šumadija remains a symbol of national identity and resilience for the Serbian people.",
    },
    factsAdvanced: {
      de: ["Lage: Zentraler Teil Serbiens, südlich von Belgrad.", "Größte Stadt: Kragujevac mit ca. 150.000 Einwohnern.", "Geschichte: Zentrum des Ersten Serbischen Aufstands (1804).", "Wirtschaft: Führende Region in der serbischen Automobilproduktion.", "Landwirtschaft: Zentrum des Obstanbaus, besonders Pflaumen und Äpfel.", "Kultur: Oplenac-Mausoleum enthält 72 Gräber der Karađorđević-Dynastie.", "Topografie: Höchster Punkt ist der Berg Rudnik (1.132 m).", "Architektur: Kragujevac war die erste Hauptstadt des modernen Serbiens."],
      hu: ["Földrajz: Szerbia központi része, a Száva és Duna folyóktól délre.", "Központ: Kragujevac, a régió gazdasági és oktatási csomópontja.", "Név eredete: A 'šuma' (erdő) szóból, a terület sűrű erdőire utalva.", "Történelem: 1804-ben itt kezdődött a törökellenes nemzeti mozgalom.", "Ipar: Itt működik a Fiat szerbiai autógyára.", "Ital: A Šljivovica (szilvapálinka) hazája, jelentős exporttermék.", "Művészet: Az oplenaci templom mozaikja 15 000 árnyalatot tartalmaz.", "Becenév: 'Szerb Toszkána' a lankás dombok és borászatok miatt."],
      ro: ["Administrație: Regiunea cuprinde județele Šumadija și Pomoravlje.", "Cel mai mare oraș: Kragujevac, fondat în epoca medievală.", "Istorie: Orašac este locul unde s-a decis eliberarea Serbiei în 1804.", "Economie: Principalul producător de automobile din regiunea Balcanilor.", "Relief: Dealuri cu altitudini medii între 200 și 600 de metri.", "Religie: Găzduiește mănăstirea Kalenić, capodoperă a stilului Morava.", "Turism: Topola este cel mai vizitat centru istoric din regiune.", "Vinificație: Regiunea are o tradiție viticolă de peste două milenii."],
      en: ["Region: Covers approximately 6,000 square kilometers in Central Serbia.", "Main City: Kragujevac, home to the University of Kragujevac.", "Historical Status: Capital of Serbia under Miloš Obrenović (1818-1841).", "Landmark: Oplenac Royal Complex is a UNESCO tentative site.", "Industry: Known as the 'Serbian Detroit' due to car manufacturing.", "Agriculture: Produces over 40% of Serbia's plum exports.", "Nature: Mount Rudnik marks the highest elevation in the region.", "Etymology: Named after the vast oak forests that once covered the land."],
    },
  }
];

// 3. Városok
export const serbiaCities: POI[] = [
];

// 4. Kultúra és Történelem
export const serbiaCulture: POI[] = [
];

// 5. Természet (Hegyek, Tavak, Nemzeti Parkok)
export const serbiaNature: POI[] = [
  {
    id: "mountain-kopaonik", "sights": {
      "de": [
            {
                  "name": "Crkvine, Nebeske Stolice",
                  "text": "Eine archäologische Stätte mit den Ruinen einer frühchristlichen Basilika auf dem Berg Kopaonik.",
                  "category": "historical",
                  "coords": [
                        20.835814,
                        43.26188
                  ]
            },
            {
                  "name": "Панчићев врх",
                  "text": "Der höchste Gipfel des Kopaonik-Gebirges in Serbien.",
                  "category": "landmark",
                  "coords": [
                        20.823663,
                        43.269255
                  ]
            },
            {
                  "name": "Obelisk",
                  "text": "Ein markantes Denkmal in der Bergregion Kopaonik.",
                  "category": "historical",
                  "coords": [
                        20.818674,
                        43.272555
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Crkvine, Nebeske Stolice",
                  "text": "Régészeti lelőhely egy kora keresztény bazilika romjaival a Kopaonik-hegyen.",
                  "category": "historical",
                  "coords": [
                        20.835814,
                        43.26188
                  ]
            },
            {
                  "name": "Панчићев врх",
                  "text": "A szerbiai Kopaonik-hegység legmagasabb csúcsa.",
                  "category": "landmark",
                  "coords": [
                        20.823663,
                        43.269255
                  ]
            },
            {
                  "name": "Obelisk",
                  "text": "Kiemelkedő emlékmű a Kopaonik hegyvidéken.",
                  "category": "historical",
                  "coords": [
                        20.818674,
                        43.272555
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Crkvine, Nebeske Stolice",
                  "text": "Un sit arheologic care prezintă ruinele unei basilici creștine timpurii pe muntele Kopaonik.",
                  "category": "historical",
                  "coords": [
                        20.835814,
                        43.26188
                  ]
            },
            {
                  "name": "Панчићев врх",
                  "text": "Cel mai înalt vârf din masivul muntos Kopaonik din Serbia.",
                  "category": "landmark",
                  "coords": [
                        20.823663,
                        43.269255
                  ]
            },
            {
                  "name": "Obelisk",
                  "text": "Un monument proeminent situat în regiunea montană Kopaonik.",
                  "category": "historical",
                  "coords": [
                        20.818674,
                        43.272555
                  ]
            }
      ],
      "en": [
            {
                  "name": "Crkvine, Nebeske Stolice",
                  "text": "An archaeological site featuring the ruins of an early Christian basilica on Mount Kopaonik.",
                  "category": "historical",
                  "coords": [
                        20.835814,
                        43.26188
                  ]
            },
            {
                  "name": "Panchichev vrh",
                  "text": "The highest peak of the Kopaonik mountain range in Serbia.",
                  "category": "landmark",
                  "coords": [
                        20.823663,
                        43.269255
                  ]
            },
            {
                  "name": "Obelisk",
                  "text": "A prominent monument located in the Kopaonik mountain region.",
                  "category": "historical",
                  "coords": [
                        20.818674,
                        43.272555
                  ]
            }
      ]
},
    type: "mountain",
    parent: "country-serbia",
    coords: [20.8000, 43.2833],
    name: { de: "Kopaonik", hu: "Kopaonik", ro: "Kopaonik", en: "Kopaonik" },
    description: {
      de: "Kopaonik ist das größte Gebirge in Serbien and das beliebteste Skigebiet des Landes.",
      hu: "A Kopaonik Szerbia legnagyobb hegysége és az ország legnépszerűbb síterepe.",
      ro: "Kopaonik este cel mai mare lanț muntos din Serbia și cea mai populară stațiune de schi din țară.",
      en: "Kopaonik is the largest mountain range in Serbia and the most popular ski resort in the country.",
      es: "Kopaonik es la cadena montañosa más grande de Serbia y la estación de esquí más popular del país.",
      pt: "Kopaonik é a maior cordilheira da Sérvia e a estância de esqui mais popular do país.",
      fr: "Kopaonik est le plus grand massif montagneux de Serbie et la station de ski la plus populaire du pays.",
    },
    facts: {
      de: ["Größtes Skigebiet", "Nationalpark", "Gipfel Pančićev Vrh", "Sommer- und Wintertourismus", "Biodiversität"],
      hu: ["Legnagyobb síterep", "Nemzeti Park", "Pančićev Vrh csúcs", "Nyári és téli turizmus", "Biológiai sokféleség"],
      ro: ["Cea mai mare stațiune de schi", "Parc Național", "Vârful Pančićev Vrh", "Turism de vară și de iarnă", "Biodiversitate"],
      en: ["Largest ski resort", "National Park", "Pančićev Vrh peak", "Summer and winter tourism", "Biodiversity"],
      es: ["Área de esquí más grande", "Parque Nacional", "Pico Pančićev Vrh", "Turismo de verano e invierno", "Biodiversidad"],
      pt: ["Maior área de esqui", "Parque Nacional", "Pico Pančićev Vrh", "Turismo de verão e inverno", "Biodiversidade"],
      fr: ["Plus grand domaine skiable", "Parc national", "Sommet Pančićev Vrh", "Tourisme d'été et d'hiver", "Biodiversité"],
    }, image: "/poi-images/mountain-kopaonik.webp",
    descriptionAdvanced: {
      de: "Kopaonik ist das größte Gebirgsmassiv Serbiens und ein bedeutendes Zentrum für Tourismus und Naturschutz im zentralen Teil des Landes. Ein erheblicher Teil des Gebirges wurde 1981 zum Nationalpark erklärt, um die einzigartige Flora, Fauna und die geologischen Formationen zu schützen. Der höchste Gipfel ist der Pančićev vrh mit einer Höhe von 2017 Metern, auf dem sich auch das Mausoleum des berühmten serbischen Botanikers Josif Pančić befindet. Geografisch zeichnet sich Kopaonik durch seine abwechslungsreiche Landschaft aus, die von dichten Nadelwäldern bis hin zu alpinen Wiesen reicht. Die Region ist als 'Gebirge der Sonne' bekannt, da sie über 200 Sonnentage im Jahr verzeichnet, was sie zu einem idealen Ort für Outdoor-Aktivitäten macht. Im Winter ist Kopaonik das führende Skizentrum Serbiens mit modernen Liften und Pisten für alle Schwierigkeitsgrade. Kulturell beherbergt das Gebirge zahlreiche mittelalterliche Klöster und Festungen in seiner unmittelbaren Umgebung, wie etwa die Klöster Studenica und Gradac. Die wirtschaftliche Bedeutung für den serbischen Tourismussektor ist immens, da das Gebirge ganzjährig Besucher aus ganz Europa anzieht.",
      hu: "Kopaonik Szerbia legnagyobb hegysége és az ország központi részének legfontosabb turisztikai, valamint természetvédelmi központja. A hegység jelentős részét 1981-ben nemzeti parkká nyilvánították az egyedülálló flóra, fauna és a különleges geológiai képződmények megőrzése érdekében. Legmagasabb pontja a 2017 méter magas Pančić-csúcs, ahol a híres szerb botanikus, Josif Pančić mauzóleuma is található. Földrajzilag a Kopaonik változatos tájairól ismert, ahol a sűrű fenyőerdők alpesi rétekkel váltakoznak. A régiót gyakran a 'Nap hegységeként' emlegetik, mivel évente több mint 200 napsütéses nappal büszkélkedhet, ami ideálissá teszi a szabadtéri sportokhoz. Télen Kopaonik Szerbia első számú síközpontja, modern felvonókkal és minden nehézségi fokozatnak megfelelő pályákkal. Kulturális szempontból a hegység környezetében számos középkori kolostor és erődítmény található, például a Studenica és a Gradac kolostorok. A szerb idegenforgalom számára Kopaonik gazdasági jelentősége felbecsülhetetlen, mivel egész évben vonzza a hazai és külföldi látogatókat.",
      ro: "Kopaonik este cel mai mare masiv muntos din Serbia și un centru vital pentru turism și conservarea naturii în partea centrală a țării. O mare parte a acestui munte a fost declarată parc național în 1981 pentru a proteja flora și fauna unică, precum și formațiunile geologice rare. Cel mai înalt vârf este Pančićev vrh, cu o altitudine de 2017 metri, unde se află mausoleul renumitului botanist sârb Josif Pančić. Din punct de vedere geografic, Kopaonik se remarcă prin peisaje diverse, de la păduri dese de conifere până la pajiști alpine vaste. Regiunea este supranumită 'Muntele Soarelui' datorită celor peste 200 de zile însorite pe an, fiind o locație ideală pentru activități în aer liber în orice sezon. În timpul iernii, Kopaonik devine principala stațiune de schi a Serbiei, dotată cu instalații moderne și pârtii pentru toate nivelurile de dificultate. Cultural, zona este înconjurată de numeroase mănăstiri medievale și cetăți istorice, cum ar fi Studenica sau Gradac. Importanța economică pentru sectorul turistic sârb este imensă, muntele atrăgând anual mii de vizitatori din întreaga Europă.",
      en: "Kopaonik is the largest mountain range in Serbia and a primary hub for tourism and nature conservation in the central part of the country. A significant portion of the massif was designated a National Park in 1981 to safeguard its unique flora, fauna, and distinct geological formations. Its highest point is Pančić's Peak, reaching an elevation of 2,017 meters, which also houses the mausoleum of the famous Serbian botanist Josif Pančić. Geographically, Kopaonik is characterized by diverse landscapes ranging from dense coniferous forests to expansive alpine meadows. The region is often called the 'Mountain of the Sun' because it enjoys over 200 sunny days per year, making it ideal for outdoor activities year-round. In winter, Kopaonik serves as Serbia's premier ski destination, featuring modern infrastructure and slopes for all skill levels. Culturally, the area is surrounded by important medieval monasteries and fortresses, such as Studenica and Gradac. Its economic significance to the Serbian tourism industry is substantial, as it remains a top destination for both domestic and international travelers.",
      es: "Kopaonik es la montaña más grande de Serbia y un importante centro de esquí en el sureste de Europa. Gran parte del macizo está protegido como parque nacional y alberga una rica biodiversidad. El pico más alto es el Pančićev Vrh con una altura de 2017 metros. La montaña también es conocida por sus fuentes geotermales y monumentos históricos.",
      pt: "Kopaonik é a maior montanha da Sérvia e um importante centro de esqui no sudeste da Europa. Grande parte do maciço está protegida como parque nacional e alberga uma rica biodiversidade. O pico mais alto é o Pančićev Vrh com uma altitude de 2017 metros. A montanha também é conhecida pelas suas fontes geotermais e monumentos históricos.",
      fr: "Kopaonik est la plus grande montagne de Serbie et un centre de ski majeur en Europe du Sud-Est. Une grande partie du massif est protégée en tant que parc national et abrite une riche biodiversité. Le sommet le plus élevé est le mont Pančić à 2017 mètres d'altitude. Le massif est également réputé pour ses sources géothermales et ses monuments historiques.",
    },
    factsAdvanced: {
      de: ["Kopaonik wurde im Jahr 1981 zum Nationalpark erklärt.", "Der Pančićev vrh ist mit 2017 Metern der höchste Gipfel.", "Das Skigebiet verfügt über rund 62 Kilometer Skipisten.", "Es gibt durchschnittlich 160 Schneetage pro Jahr auf dem Berg.", "Über 1.600 verschiedene Pflanzenarten sind im Gebirge beheimatet.", "Der Nationalpark erstreckt sich über eine Fläche von 11.810 Hektar."],
      hu: ["A Kopaonik hegységet 1981-ben nyilvánították nemzeti parkká.", "A legmagasabb pontja a 2017 méteres Pančić-csúcs.", "A síközpont összesen mintegy 62 kilométeres pályarendszerrel rendelkezik.", "A hegységben évente átlagosan 160 napon keresztül van hótakaró.", "Több mint 1600 különböző növényfaj található meg a területen.", "A nemzeti park teljes kiterjedése 11 810 hektárt tesz ki."],
      ro: ["Kopaonik a fost declarat parc național în cursul anului 1981.", "Vârful Pančićev este cel mai înalt punct, având 2017 metri.", "Stațiunea dispune de aproximativ 62 de kilometri de pârtii de schi.", "Zăpada persistă pe munte în medie 160 de zile pe an.", "Peste 1.600 de specii de plante diferite trăiesc în masiv.", "Parcul național acoperă o suprafață totală de 11.810 hectare."],
      en: ["Kopaonik was officially designated a National Park in 1981.", "Pančić's Peak is the highest summit at an elevation of 2,017 meters.", "The ski resort offers approximately 62 kilometers of developed slopes.", "The mountain experiences an average of 160 snow days per year.", "Over 1,600 different plant species are found within the range.", "The National Park encompasses a protected area of 11,810 hectares."],
      es: ["Parque Nacional desde 1981", "Pico más alto Pančić (2017 m)", "200 días de sol al año", "160 días de nieve anuales", "Más de 1500 especies de plantas", "Conocida como la Montaña de Plata"],
      pt: ["Parque Nacional desde 1981", "Pico mais alto Pančić (2017 m)", "200 dias de sol por ano", "160 dias de neve anuais", "Mais de 1500 espécies de plantas", "Conhecida como a Montanha de Prata"],
      fr: ["Parc national depuis 1981", "Sommet le plus élevé Pančić (2017 m)", "200 jours d'ensoleillement par an", "160 jours de neige par an", "Plus de 1500 espèces végétales", "Surnommée la Montagne d'argent"],
    },
  },
  {
    id: "mountain-fruska-gora", "sights": {
      "de": [
            {
                  "name": "Орлово бојиште",
                  "text": "Ein Aussichtspunkt im Nationalpark Fruška Gora mit weitem Blick über die Region.",
                  "category": "natural",
                  "coords": [
                        19.830593,
                        45.180645
                  ]
            },
            {
                  "name": "Vidikovac - Most Beška",
                  "text": "Ein Aussichtspunkt, der einen weiten Blick auf die Donaubrücke bei Beška bietet.",
                  "category": "natural",
                  "coords": [
                        19.873739,
                        45.167436
                  ]
            },
            {
                  "name": "Слобода",
                  "text": "Ein markantes Denkmal in Fruška Gora, das dem Widerstand im Zweiten Weltkrieg gewidmet ist.",
                  "category": "historical",
                  "coords": [
                        19.839932,
                        45.152827
                  ]
            },
            {
                  "name": "Торањ на Иришком венцу",
                  "text": "Ein markanter Sende- und Fernsehturm auf dem Gipfel des Iriški Venac.",
                  "category": "tower",
                  "coords": [
                        19.862035,
                        45.158429
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Орлово бојиште",
                  "text": "Kilátópont a Fruška Gora Nemzeti Parkban, ahonnan széles körpanoráma nyílik a régióra.",
                  "category": "natural",
                  "coords": [
                        19.830593,
                        45.180645
                  ]
            },
            {
                  "name": "Vidikovac - Most Beška",
                  "text": "Kilátóhely, ahonnan kiváló rálátás nyílik a Duna-hídra Beška közelében.",
                  "category": "natural",
                  "coords": [
                        19.873739,
                        45.167436
                  ]
            },
            {
                  "name": "Szabadság-emlékmű",
                  "text": "Jellegzetes emlékmű a Fruška Gorán, amelyet a második világháborús ellenállásnak szenteltek.",
                  "category": "historical",
                  "coords": [
                        19.839932,
                        45.152827
                  ]
            },
            {
                  "name": "Торањ на Иришком венцу",
                  "text": "Jellegzetes távközlési torony az Iriški Venac csúcsán.",
                  "category": "tower",
                  "coords": [
                        19.862035,
                        45.158429
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Орлово бојиште",
                  "text": "Un punct de belvedere în Parcul Național Fruška Gora, oferind o vedere panoramică asupra regiunii.",
                  "category": "natural",
                  "coords": [
                        19.830593,
                        45.180645
                  ]
            },
            {
                  "name": "Vidikovac - Most Beška",
                  "text": "Un punct de belvedere care oferă o vedere amplă asupra podului peste Dunăre de lângă Beška.",
                  "category": "natural",
                  "coords": [
                        19.873739,
                        45.167436
                  ]
            },
            {
                  "name": "Слобода",
                  "text": "Un monument proeminent în Fruška Gora, dedicat rezistenței din cel de-al Doilea Război Mondial.",
                  "category": "historical",
                  "coords": [
                        19.839932,
                        45.152827
                  ]
            },
            {
                  "name": "Торањ на Иришком венцу",
                  "text": "Un turn de televiziune și telecomunicații distinctiv pe vârful Iriški Venac.",
                  "category": "tower",
                  "coords": [
                        19.862035,
                        45.158429
                  ]
            }
      ],
      "en": [
            {
                  "name": "Orlovo bojiste",
                  "text": "A viewpoint in the Fruška Gora National Park with a wide view over the region.",
                  "category": "natural",
                  "coords": [
                        19.830593,
                        45.180645
                  ]
            },
            {
                  "name": "Vidikovac - Most Beška",
                  "text": "A viewpoint offering a broad view of the Danube bridge near Beška.",
                  "category": "natural",
                  "coords": [
                        19.873739,
                        45.167436
                  ]
            },
            {
                  "name": "Freedom",
                  "text": "A prominent monument in Fruška Gora dedicated to the resistance in World War II.",
                  "category": "historical",
                  "coords": [
                        19.839932,
                        45.152827
                  ]
            },
            {
                  "name": "Iriški Venac Tower",
                  "text": "A distinctive TV and telecommunications tower on the summit of Iriški Venac.",
                  "category": "tower",
                  "coords": [
                        19.862035,
                        45.158429
                  ]
            }
      ]
},
    type: "mountain",
    parent: "region-vojvodina",
    coords: [19.8500, 45.1500],
    name: { de: "Fruška Gora", hu: "Tarcal-hegység (Fruška Gora)", ro: "Fruška Gora", en: "Fruška Gora" },
    description: {
      de: "Fruška Gora ist ein Mittelgebirge in der Vojvodina, bekannt für seine zahlreichen orthodoxen Klöster und Weinberge.",
      hu: "A Tarcal-hegység egy középhegység a Vajdaságban, számos ortodox kolostoráról és szőlőültetvényeiről ismert.",
      ro: "Fruška Gora este un munte în Voivodina, cunoscut pentru numeroasele sale mănăstiri ortodoxe și podgorii.",
      en: "Fruška Gora is a low mountain in Vojvodina, known for its numerous Orthodox monasteries and vineyards.",
      es: "Fruška Gora es una cadena montañosa en Vojvodina, conocida por sus numerosos monasterios ortodoxos y viñedos.",
      pt: "Fruška Gora é uma cordilheira na Voivodina, conhecida pelos seus inúmeros mosteiros ortodoxos e vinhedos.",
      fr: "Fruška Gora est un massif montagneux de Voïvodine, connu pour ses nombreux monastères orthodoxes et ses vignobles.",
    },
    facts: {
      de: ["Nationalpark", "Orthodoxe Klöster", "Weinbau", "Nahe Novi Sad", "Hügel in der Pannonischen Tiefebene"],
      hu: ["Nemzeti Park", "Ortodox kolostorok", "Borászat", "Újvidék közelében", "Dombvidék a Pannon-síkságon"],
      ro: ["Parc Național", "Mănăstiri ortodoxe", "Viticultură", "Lângă Novi Sad", "Deal în Câmpia Panonică"],
      en: ["National Park", "Orthodox monasteries", "Viticulture", "Near Novi Sad", "Hill in the Pannonian Plain"],
      es: ["Parque Nacional", "Monasterios ortodoxos", "Viticultura", "Cerca de Novi Sad", "Colinas en la llanura panónica"],
      pt: ["Parque Nacional", "Mosteiros ortodoxos", "Viticultura", "Perto de Novi Sad", "Colinas na planície panónica"],
      fr: ["Parc national", "Monastères orthodoxes", "Viticulture", "Proche de Novi Sad", "Collines dans la plaine de Pannonie"],
    }, image: "/poi-images/mountain-fruska-gora.webp",
    descriptionAdvanced: {
      de: "Fruška Gora ist ein isoliertes Gebirge in der pannonischen Tiefebene im Norden Serbiens, das für seine reiche Geschichte und Natur bekannt ist. Im Jahr 1960 wurde das Areal als erster Nationalpark Serbiens ausgewiesen, um den dichten Waldbestand und die seltene Tierwelt zu schützen. Geografisch erstreckt sich das Gebirge entlang des rechten Ufers der Donau und erreicht mit dem Crveni Čot eine maximale Höhe von 539 Metern. Bekannt als das 'serbische Athos', beheimatet Fruška Gora 16 aktive serbisch-orthodoxe Klöster, die zwischen dem 15. und 18. Jahrhundert erbaut wurden. Diese Klöster sind herausragende Beispiele für die Architektur und Malerei der Barock- und Renaissancezeit. Die Region ist zudem ein bedeutendes Weinbaugebiet, dessen Tradition bis in die Römerzeit zurückreicht. Die fruchtbaren Böden und das milde Klima bringen hochwertige Weine wie den berühmten Bermet hervor. Wirtschaftlich spielt das Gebirge eine zentrale Rolle für den Tagestourismus aus den nahegelegenen Städten Belgrad und Novi Sad. Naturfreunde schätzen die zahlreichen Wanderwege und die Vielfalt an Orchideenarten, die hier vorkommen.",
      hu: "A Fruška Gora egy sziget hegység a Pannon-síkságon, Szerbia északi részén, amely gazdag történelmi és természeti értékekkel rendelkezik. 1960-ban ez lett Szerbia első nemzeti parkja, célja a sűrű erdők és a ritka állatvilág védelme volt. Földrajzilag a hegység a Duna jobb partja mentén húzódik, legmagasabb pontja a 539 méter magas Crveni Čot. A területet gyakran 'szerb Athos'-ként is emlegetik, mivel 16 aktív szerb ortodox kolostornak ad otthont, amelyek a 15. és 18. század között épültek. Ezek a kolostorok a barokk és a reneszánsz építészet, valamint a freskófestészet kiemelkedő emlékei. A régió emellett jelentős borvidék is, amelynek hagyományai a római korig nyúlnak vissza. A termékeny talaj és a kedvező mikroklíma olyan híres borokat ad, mint például az édes Bermet. Gazdaságilag a hegység központi szerepet tölt be a Belgrádból és Újvidékről érkező kiránduló turizmusban. A természetkedvelők számára a számos túraútvonal és a különleges orchideafajok kínálnak látnivalót.",
      ro: "Fruška Gora este un munte izolat situat în Câmpia Panonică din nordul Serbiei, recunoscut pentru bogăția sa istorică și naturală. În 1960, această zonă a fost desemnată primul parc național din Serbia pentru a proteja pădurile sale dense și fauna rară. Din punct de vedere geografic, muntele se întinde de-a lungul malului drept al Dunării, atingând altitudinea maximă de 539 metri în vârful Crveni Čot. Cunoscut sub numele de 'Athosul sârbesc', Fruška Gora găzduiește 16 mănăstiri ortodoxe sârbe active, construite între secolele al XV-lea și al XVIII-lea. Aceste lăcașuri de cult sunt exemple remarcabile ale arhitecturii și picturii religioase din perioada barocului și a renașterii. Regiunea este, de asemenea, o zonă viticolă de prestigiu, cu o tradiție ce datează încă din perioada stăpânirii romane. Solurile fertile și climatul temperat permit producerea unor vinuri celebre, cum este sortimentul Bermet. Economic, muntele reprezintă o destinație majoră pentru turismul de weekend, fiind situat în proximitatea orașelor Belgrad și Novi Sad. Biodiversitatea este remarcabilă, zona fiind faimoasă pentru numeroasele specii de orhidee sălbatice.",
      en: "Fruška Gora is an isolated mountain range situated in the Pannonian Plain of northern Serbia, renowned for its rich historical and natural heritage. In 1960, it became the first National Park in Serbia, established to protect its vast forests and rare wildlife species. Geographically, the ridge stretches along the right bank of the Danube River, with its highest point being Crveni Čot at an elevation of 539 meters. Often referred to as the 'Serbian Mount Athos', Fruška Gora is home to 16 active Serbian Orthodox monasteries built between the 15th and 18th centuries. These religious sites are exceptional examples of Baroque and Renaissance architecture and hagiographic painting. The region is also a prestigious wine-growing area, with a tradition of viticulture that dates back to Roman times. The fertile soils and favorable microclimate produce unique local wines, such as the aromatic Bermet. Economically, the mountain serves as a vital recreational area for visitors from nearby Belgrade and Novi Sad. Nature enthusiasts are drawn to its extensive trail network and the impressive variety of wild orchid species found in the park.",
      es: "Fruška Gora es una montaña isla en la provincia serbia de Vojvodina y el parque nacional más antiguo del país. Es famosa por sus numerosos monasterios ortodoxos y la producción de vino en sus laderas. La montaña se extiende a lo largo del Danubio y ofrece densos bosques de frondosas. Es un destino popular para excursionistas y amantes de la naturaleza en el norte de Serbia.",
      pt: "Fruška Gora é uma montanha-ilha na província sérvia da Voivodina e o parque nacional mais antigo do país. É famosa pelos seus inúmeros mosteiros ortodoxos e pela produção de vinho nas suas encostas. A montanha estende-se ao longo do Danúbio e oferece densas florestas de folhosas. É um destino popular para caminhantes e amantes da natureza no norte da Sérvia.",
      fr: "La Fruška Gora est une montagne isolée de la province serbe de Voïvodine et le plus ancien parc national du pays. Elle est célèbre pour ses nombreux monastères orthodoxes et la production de vin sur ses versants. Le massif s'étend le long du Danube et offre des forêts de feuillus denses. C'est une destination prisée des randonneurs et des amoureux de la nature dans le nord de la Serbie.",
    },
    factsAdvanced: {
      de: ["Fruška Gora wurde 1960 zum ersten Nationalpark Serbiens ernannt.", "Der Crveni Čot ist mit 539 Metern der höchste Punkt des Gebirges.", "Ursprünglich gab es auf dem Berg über 35 orthodoxe Klöster.", "Rund 90 % der Fläche des Nationalparks sind bewaldet.", "Über 700 verschiedene Heilkräuter wachsen in dieser Region.", "Die Römer pflanzten hier bereits im 3. Jahrhundert erste Reben."],
      hu: ["Fruška Gora 1960-ban Szerbia legelső nemzeti parkja lett.", "A hegység legmagasabb pontja az 539 méteres Crveni Čot.", "Eredetileg több mint 35 ortodox kolostor állt a területen.", "A nemzeti park területének mintegy 90 százalékát erdő borítja.", "Több mint 700 féle gyógynövény honos ebben a régióban.", "A rómaiak már a 3. században megkezdték itt a szőlőtelepítést."],
      ro: ["Fruška Gora a devenit primul parc național din Serbia în 1960.", "Vârful Crveni Čot reprezintă cota maximă, având 539 metri.", "Inițial, pe munte existau peste 35 de mănăstiri ortodoxe.", "Aproximativ 90% din suprafața parcului este acoperită de păduri.", "Peste 700 de tipuri de plante medicinale cresc în această zonă.", "Primele plantații de viță de vie au fost înființate aici în secolul al III-lea."],
      en: ["Fruška Gora was established as Serbia's first National Park in 1960.", "Crveni Čot is the highest peak of the range at 539 meters.", "Historically, the mountain was home to over 35 Orthodox monasteries.", "Forests cover approximately 90% of the National Park's territory.", "More than 700 different medicinal herbs grow in the region.", "The Romans planted the first grapevines here in the 3rd century AD."],
      es: ["Parque Nacional desde 1960", "Pico más alto Crveni Čot (539 m)", "Existen 16 monasterios activos", "Isla en el antiguo mar de Panonia", "Longitud total aprox. 80 km", "Famosa por el vino Bermet"],
      pt: ["Parque Nacional desde 1960", "Pico mais alto Crveni Čot (539 m)", "Existem 16 mosteiros ativos", "Ilha no antigo Mar da Panónia", "Comprimento total aprox. 80 km", "Famosa pelo vinho Bermet"],
      fr: ["Parc national depuis 1960", "Sommet le plus élevé Crveni Čot (539 m)", "16 monastères actifs présents", "Île dans l'ancienne mer de Pannonie", "Longueur totale environ 80 km", "Célèbre pour le vin Bermet"],
    },
  },
];

export const serbiaRivers: POI[] = [
  {
    id: "river-danube-serbia", "sights": {
      "de": [
            {
                  "name": "Römischer Brunnen",
                  "text": "Der Römische Brunnen ist ein historisches Bauwerk in der Festung von Belgrad, bekannt für seinen tiefen Schacht.",
                  "category": "museum",
                  "coords": [
                        20.448182,
                        44.823082
                  ]
            },
            {
                  "name": "Остаци замка деспота Стефана Лазаревића",
                  "text": "Dies sind die archäologischen Ruinen der mittelalterlichen Burg, die von Despot Stefan Lazarević in Belgrad erbaut wurde.",
                  "category": "historical",
                  "coords": [
                        20.448974,
                        44.824034
                  ]
            },
            {
                  "name": "Историјски музеј Србије",
                  "text": "Dieses Museum in Belgrad bewahrt und zeigt die Nationalgeschichte und das kulturelle Erbe Serbiens.",
                  "category": "museum",
                  "coords": [
                        20.463766,
                        44.812489
                  ]
            },
            {
                  "name": "Железнички музеј",
                  "text": "Das Eisenbahnmuseum in Belgrad zeigt die Geschichte des Schienenverkehrs in Serbien anhand verschiedener Exponate.",
                  "category": "museum",
                  "coords": [
                        20.458098,
                        44.805913
                  ]
            },
            {
                  "name": "Музеј Цептер",
                  "text": "Das Zepter Museum ist eine private Kunstinstitution in Belgrad, die zeitgenössische serbische Kunstwerke ausstellt.",
                  "category": "museum",
                  "coords": [
                        20.455944,
                        44.818557
                  ]
            },
            {
                  "name": "Веспа музеј Србија",
                  "text": "Dieses einzigartige Museum in Belgrad ist der Geschichte und den klassischen Modellen des Vespa-Rollers gewidmet.",
                  "category": "museum",
                  "coords": [
                        20.434902,
                        44.79186
                  ]
            },
            {
                  "name": "Музеј Иве Андрића",
                  "text": "Dieses Museum in Belgrad befindet sich in der ehemaligen Wohnung des Nobelpreisträgers Ivo Andrić.",
                  "category": "museum",
                  "coords": [
                        20.463782,
                        44.809649
                  ]
            },
            {
                  "name": "Музеј Паје Јовановића",
                  "text": "Dieses Museum zeigt die Werke und persönlichen Gegenstände des berühmten serbischen Malers Paja Jovanović.",
                  "category": "museum",
                  "coords": [
                        20.464321,
                        44.80749
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Римски бунар",
                  "text": "A Római kút egy történelmi építmény a belgrádi erődben, amely mély aknájáról nevezetes.",
                  "category": "museum",
                  "coords": [
                        20.448182,
                        44.823082
                  ]
            },
            {
                  "name": "Остаци замка деспота Стефана Лазаревића",
                  "text": "Ezek a Despot Stefan Lazarević által Belgrádban épített középkori vár régészeti maradványai.",
                  "category": "historical",
                  "coords": [
                        20.448974,
                        44.824034
                  ]
            },
            {
                  "name": "Историјски музеј Србије",
                  "text": "Ez a belgrádi múzeum Szerbia nemzeti történelmét és kulturális örökségét őrzi és mutatja be.",
                  "category": "museum",
                  "coords": [
                        20.463766,
                        44.812489
                  ]
            },
            {
                  "name": "Железнички музеј",
                  "text": "A belgrádi Vasúttörténeti Múzeum különféle kiállításokon keresztül mutatja be a szerbiai vasút történetét.",
                  "category": "museum",
                  "coords": [
                        20.458098,
                        44.805913
                  ]
            },
            {
                  "name": "Музеј Цептер",
                  "text": "A Zepter Múzeum egy belgrádi magánművészeti intézmény, amely kortárs szerb alkotásokat mutat be.",
                  "category": "museum",
                  "coords": [
                        20.455944,
                        44.818557
                  ]
            },
            {
                  "name": "Веспа музеј Србија",
                  "text": "Ez az egyedülálló belgrádi múzeum a Vespa robogók történetének és klasszikus modelljeinek van szentelve.",
                  "category": "museum",
                  "coords": [
                        20.434902,
                        44.79186
                  ]
            },
            {
                  "name": "Музеј Иве Андрића",
                  "text": "Ez a belgrádi múzeum a Nobel-díjas Ivo Andrić egykori lakása, amelyet emlékhelyként őriztek meg.",
                  "category": "museum",
                  "coords": [
                        20.463782,
                        44.809649
                  ]
            },
            {
                  "name": "Музеј Паје Јовановића",
                  "text": "Ez a múzeum a híres szerb festő, Paja Jovanović műveit és személyes tárgyait mutatja be.",
                  "category": "museum",
                  "coords": [
                        20.464321,
                        44.80749
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Римски бунар",
                  "text": "Fântâna Romană este o structură istorică situată în Cetatea Belgradului, cunoscută pentru puțul său adânc.",
                  "category": "museum",
                  "coords": [
                        20.448182,
                        44.823082
                  ]
            },
            {
                  "name": "Остаци замка деспота Стефана Лазаревића",
                  "text": "Acestea sunt ruinele arheologice ale castelului medieval construit de despotul Stefan Lazarević în Belgrad.",
                  "category": "historical",
                  "coords": [
                        20.448974,
                        44.824034
                  ]
            },
            {
                  "name": "Историјски музеј Србије",
                  "text": "Acest muzeu din Belgrad păstrează și expune istoria națională și moștenirea culturală a Serbiei.",
                  "category": "museum",
                  "coords": [
                        20.463766,
                        44.812489
                  ]
            },
            {
                  "name": "Железнички музеј",
                  "text": "Muzeul Căilor Ferate din Belgrad prezintă istoria transportului feroviar din Serbia prin diverse exponate.",
                  "category": "museum",
                  "coords": [
                        20.458098,
                        44.805913
                  ]
            },
            {
                  "name": "Музеј Цептер",
                  "text": "Muzeul Zepter este o instituție privată de artă din Belgrad, care prezintă opere de artă sârbească contemporană.",
                  "category": "museum",
                  "coords": [
                        20.455944,
                        44.818557
                  ]
            },
            {
                  "name": "Веспа музеј Србија",
                  "text": "Acest muzeu unic din Belgrad este dedicat istoriei și modelelor clasice ale scuterului Vespa.",
                  "category": "museum",
                  "coords": [
                        20.434902,
                        44.79186
                  ]
            },
            {
                  "name": "Музеј Иве Андрића",
                  "text": "Situat în Belgrad, acest muzeu este fostul apartament al laureatului Premiului Nobel Ivo Andrić.",
                  "category": "museum",
                  "coords": [
                        20.463782,
                        44.809649
                  ]
            },
            {
                  "name": "Музеј Паје Јовановића",
                  "text": "Acest muzeu expune lucrările și obiectele personale ale celebrului pictor sârb Paja Jovanović.",
                  "category": "museum",
                  "coords": [
                        20.464321,
                        44.80749
                  ]
            }
      ],
      "en": [
            {
                  "name": "Roman Well",
                  "text": "The Roman Well is a historic structure located within the Belgrade Fortress, known for its deep shaft.",
                  "category": "museum",
                  "coords": [
                        20.448182,
                        44.823082
                  ]
            },
            {
                  "name": "Remains of Despot Stefan Lazarevic's Castle",
                  "text": "These are the archaeological ruins of the medieval castle built by Despot Stefan Lazarević in Belgrade.",
                  "category": "historical",
                  "coords": [
                        20.448974,
                        44.824034
                  ]
            },
            {
                  "name": "Historical Museum of Serbia",
                  "text": "This museum in Belgrade preserves and displays the national history and cultural heritage of Serbia.",
                  "category": "museum",
                  "coords": [
                        20.463766,
                        44.812489
                  ]
            },
            {
                  "name": "Railway Museum",
                  "text": "The Railway Museum in Belgrade showcases the history of rail transport in Serbia through various exhibits.",
                  "category": "museum",
                  "coords": [
                        20.458098,
                        44.805913
                  ]
            },
            {
                  "name": "Zepter Museum",
                  "text": "The Zepter Museum is a private art institution in Belgrade featuring contemporary Serbian artwork.",
                  "category": "museum",
                  "coords": [
                        20.455944,
                        44.818557
                  ]
            },
            {
                  "name": "Vespa Museum Serbia",
                  "text": "This unique museum in Belgrade is dedicated to the history and classic models of the Vespa scooter.",
                  "category": "museum",
                  "coords": [
                        20.434902,
                        44.79186
                  ]
            },
            {
                  "name": "Ivo Andric Museum",
                  "text": "Located in Belgrade, this museum is the former apartment of Nobel laureate Ivo Andrić, preserved as a memorial.",
                  "category": "museum",
                  "coords": [
                        20.463782,
                        44.809649
                  ]
            },
            {
                  "name": "Muzej Paje Jovanovića",
                  "text": "This museum showcases the works and personal belongings of the famous Serbian painter Paja Jovanović.",
                  "category": "museum",
                  "coords": [
                        20.464321,
                        44.80749
                  ]
            }
      ]
},
    type: "river",
    parent: "country-serbia",
    coords: [20.4500, 44.8236], // Belgrade confluence point as generic loc
    name: { de: "Donau", hu: "Duna", ro: "Dunărea", en: "Danube" },
    description: {
      de: "Die Donau fließt durch den Norden und Osten Serbiens und bildet das imposante Eiserne Tor.",
      hu: "A Duna Szerbia északi és keleti részén folyik keresztül, kialakítva az impozáns Vaskaput.",
      ro: "Dunărea curge prin nordul și estul Serbiei și formează impunătoarele Porți de Fier.",
      en: "The Danube flows through northern and eastern Serbia, forming the imposing Iron Gates.",
      es: "El Danubio fluye por el norte y el este de Serbia y forma las imponentes Puertas de Hierro.",
      pt: "O Danúbio corre pelo norte e leste da Sérvia e forma as imponentes Portas de Ferro.",
      fr: "Le Danube traverse le nord et l'est de la Serbie et forme les imposantes Portes de Fer.",
    },
    facts: {
      de: ["Wichtigster Fluss", "Fließt durch Belgrad", "Eisernes Tor", "Grenzfluss", "Schifffahrtsweg"],
      hu: ["Legfontosabb folyó", "Átfolyik Belgrádon", "Vaskapu", "Határfolyó", "Hajózási útvonal"],
      ro: ["Cel mai important râu", "Curge prin Belgrad", "Porțile de Fier", "Râu de frontieră", "Cale navigabilă"],
      en: ["Most important river", "Flows through Belgrade", "Iron Gates", "Border river", "Navigable waterway"],
      es: ["Río más importante", "Fluye por Belgrado", "Puertas de Hierro", "Río fronterizo", "Vía de navegación"],
      pt: ["Rio mais importante", "Corre por Belgrado", "Portas de Ferro", "Rio fronteiriço", "Rota de navegação"],
      fr: ["Fleuve le plus important", "Traverse Belgrade", "Portes de Fer", "Fleuve frontalier", "Voie navigable"],
    }, image: "/poi-images/river-danube-serbia.webp",
    descriptionAdvanced: {
      de: "Die Donau fließt auf einer Länge von 588 Kilometern durch Serbien und ist die wichtigste Wasserstraße sowie ein zentrales geografisches Merkmal des Landes. Sie tritt bei Bezdan in das Land ein und verlässt es bei Prahovo, wobei sie bedeutende Städte wie Belgrad und Novi Sad passiert. Ein geografischer Höhepunkt ist die Đerdap-Schlucht, auch Eisernes Tor genannt, die als das größte Durchbruchstal Europas gilt. Hier wurde mit dem Kraftwerk Đerdap I eines der größten Wasserkraftwerke der Welt errichtet, das eine Schlüsselrolle in der serbischen Energieversorgung spielt. Historisch gesehen war die Donau über Jahrtausende die Grenze zwischen Imperien, was die zahlreichen Festungen entlang ihres Ufers, wie Petrovaradin oder Golubac, belegen. Heute ist der Fluss ein wichtiger Korridor für den internationalen Schiffsverkehr und verbindet Serbien mit den Nordseehäfen und dem Schwarzen Meer. Der Flussabschnitt beheimatet eine vielfältige Flora und Fauna, insbesondere in geschützten Gebieten wie dem Nationalpark Đerdap. Wirtschaftlich profitiert das Land zudem vom wachsenden Flusskreuzfahrttourismus, der Besucher zu den historischen Stätten und Naturschönheiten bringt.",
      hu: "A Duna 588 kilométer hosszan folyik keresztül Szerbián, az ország legfontosabb vízi útja és meghatározó földrajzi eleme. A folyam Bezdánnál lép be az országba és Prahovónál távozik, érintve olyan jelentős városokat, mint Belgrád és Újvidék. A folyó szerbiai szakaszának leglátványosabb része a Vaskapu-szoros (Đerdap), amely Európa legnagyobb folyami szurdokvölgye. Itt épült fel a Đerdap I vízerőmű, a világ egyik legnagyobb ilyen létesítménye, amely kulcsszerepet játszik Szerbia energiaellátásában. Történelmileg a Duna évezredeken át birodalmi határként szolgált, amiről a partjain álló számos erődítmény, például Pétervárad vagy Galambóc vára tanúskodik. Ma a folyó a nemzetközi hajózás kiemelt folyosója, amely összeköti Szerbiát az északi-tengeri kikötőkkel és a Fekete-tengerrel. A folyóparti szakaszok gazdag flórával és faunával rendelkeznek, különösen a védett területeken, mint a Đerdap Nemzeti Park. Gazdaságilag az ország profitál a növekvő folyami hajós turizmusból is, amely rengeteg látogatót vonz a történelmi emlékhelyekhez és a természeti ritkaságokhoz.",
      ro: "Dunărea străbate Serbia pe o distanță de 588 de kilometri, reprezentând cea mai importantă cale navigabilă și o trăsătură geografică centrală a țării. Fluviul intră pe teritoriul sârb la Bezdan și iese la Prahovo, traversând orașe emblematice precum Belgrad și Novi Sad. Un punct de referință geografic major este Defileul Dunării, cunoscut sub numele de Porțile de Fier (Đerdap), considerat cel mai mare defileu din Europa. În această zonă a fost construită hidrocentrala Porțile de Fier I, una dintre cele mai mari din lume, care joacă un rol vital în sistemul energetic național sârb. Din punct de vedere istoric, Dunărea a servit timp de milenii ca frontieră între imperii, fapt demonstrat de numeroasele fortărețe de pe malurile sale, cum ar fi Petrovaradin sau Golubac. Astăzi, fluviul este un coridor esențial pentru transportul internațional, legând Serbia de porturile de la Marea Nordului și de Marea Neagră. Sectorul sârb al Dunării găzduiește o biodiversitate bogată, protejată în arii precum Parcul Național Đerdap. Economic, fluviul susține și o industrie turistică în creștere, axată pe croaziere și vizitarea monumentelor istorice.",
      en: "The Danube flows through Serbia for 588 kilometers, serving as the country's most vital waterway and a defining geographical feature. Entering at Bezdan and exiting at Prahovo, the river passes through major urban centers including Belgrade and Novi Sad. A significant geographical highlight is the Đerdap Gorge, also known as the Iron Gates, which is recognized as the largest river gorge in Europe. This stretch is home to the Đerdap I hydroelectric power station, one of the world's largest, playing a crucial role in Serbia's national energy supply. Historically, the Danube has acted as a boundary between empires for millennia, a legacy visible in the numerous fortresses lining its banks, such as Petrovaradin and Golubac. Today, the river is a key international shipping corridor connecting Serbia to North Sea ports and the Black Sea. The Serbian section of the river supports diverse flora and fauna, particularly within protected areas like the Đerdap National Park. Economically, the country also benefits from a thriving river cruise industry that brings tourists to its historic sites and natural wonders.",
      es: "El Danubio es el segundo río más largo de Europa y atraviesa Serbia a lo largo de casi 600 kilómetros. Pasa por ciudades importantes como Belgrado y Novi Sad, así como por las espectaculares Puertas de Hierro. El río es una arteria de transporte central y un ecosistema importante para la región. A lo largo de su curso se encuentran numerosos yacimientos arqueológicos.",
      pt: "O Danúbio é o segundo rio mais longo da Europa e atravessa a Sérvia ao longo de quase 600 quilómetros. Passa por cidades importantes como Belgrado e Novi Sad, bem como pelas espetaculares Portas de Ferro. O rio é uma artéria de transporte central e um ecossistema importante para a região. Ao longo do seu curso encontram-se inúmeros sítios arqueológicos.",
      fr: "Le Danube est le deuxième plus long fleuve d'Europe et traverse la Serbie sur près de 600 kilomètres. Il passe par des villes majeures telles que Belgrade et Novi Sad, ainsi que par les spectaculaires Portes de Fer. Le fleuve est un axe de transport central et un écosystème vital pour la région. De nombreux sites archéologiques jalonnent son cours.",
    },
    factsAdvanced: {
      de: ["Die Donau hat in Serbien eine Gesamtlänge von 588 Kilometern.", "Sie fließt durch zehn verschiedene Länder, bevor sie ins Meer mündet.", "Die Đerdap-Schlucht ist mit 100 Kilometern das längste Tal Europas.", "Das Kraftwerk Đerdap I wurde bereits im Jahr 1972 eingeweiht.", "An der schmalsten Stelle ist die Donau in Serbien nur 150 Meter breit.", "Sieben bedeutende mittelalterliche Festungen liegen am serbischen Donauufer."],
      hu: ["A Duna szerbiai szakaszának hossza pontosan 588 kilométer.", "A folyam tíz különböző országot érint útja során a torkolatig.", "A Vaskapu-szoros 100 kilométeres hosszával Európa leghosszabb áttörése.", "A Đerdap I vízerőművet 1972-ben adták át hivatalosan.", "A legkeskenyebb pontján a Duna Szerbiában mindössze 150 méter széles.", "Hét jelentős középkori erődítmény található a folyó szerb partjai mentén."],
      ro: ["Dunărea are o lungime totală de 588 de kilometri pe teritoriul Serbiei.", "Fluviul traversează zece țări diferite înainte de a se vărsa în mare.", "Defileul Porțile de Fier are o lungime de 100 de kilometri.", "Hidrocentrala Porțile de Fier I a fost inaugurată în anul 1972.", "În cel mai îngust punct, Dunărea are o lățime de doar 150 de metri.", "Șapte fortărețe medievale majore sunt situate pe malul sârbesc."],
      en: ["The Danube spans a total length of 588 kilometers within Serbia.", "The river passes through ten different countries on its way to the sea.", "The Đerdap Gorge is Europe's longest river gorge, stretching 100 km.", "The Đerdap I power station was officially commissioned in 1972.", "At its narrowest point in Serbia, the Danube is only 150 meters wide.", "Seven major medieval fortresses are located along the Serbian riverbanks."],
      es: ["Tramo serbio de 588 km de longitud", "Atraviesa Belgrado y Novi Sad", "Desfiladero de las Puertas de Hierro (Djerdap)", "Central hidroeléctrica de Djerdap presente", "Yacimiento prehistórico de Lepenski Vir", "Frontera con Croacia y Rumanía"],
      pt: ["Troço sérvio com 588 km de comprimento", "Atravessa Belgrado e Novi Sad", "Desfiladeiro das Portas de Ferro (Djerdap)", "Central hidroelétrica de Djerdap existente", "Sítio pré-histórico de Lepenski Vir", "Fronteira com a Croácia e a Roménia"],
      fr: ["Tronçon serbe long de 588 km", "Traverse Belgrade et Novi Sad", "Gorge des Portes de Fer (Djerdap)", "Centrale hydroélectrique de Djerdap présente", "Site préhistorique de Lepenski Vir", "Frontière avec la Croatie et la Roumanie"],
    },
  },
  {
    id: "river-sava",
    type: "river",
    parent: "country-serbia",
    coords: [19.6500, 44.8833],
    name: { de: "Save", hu: "Száva", ro: "Sava", en: "Sava" },
    description: {
      de: "Die Save ist ein großer Flussfluss, der in Belgrad in die Donau mündet.",
      hu: "A Száva egy nagy folyó, amely Belgrádban ömlik a Dunába.",
      ro: "Sava este un râu mare care se varsă în Dunăre la Belgrad.",
      en: "The Sava is a major river that flows into the Danube in Belgrade.",
      es: "El Sava es un gran río que desemboca en el Danubio en Belgrado.",
      pt: "O Sava é um grande rio que desagua no Danúbio em Belgrado.",
      fr: "La Sava est une grande rivière qui se jette dans le Danube à Belgrade.",
    },
    facts: {
      de: ["Mündet in die Donau", "Fließt durch Belgrad", "Wichtiger Wasserweg", "Trennt Zentralserbien von der Vojvodina", "Zahlreiche Brücken"],
      hu: ["A Dunába ömlik", "Átfolyik Belgrádon", "Fontos vízi út", "Elválasztja Közép-Szerbiát a Vajdaságtól", "Számos híd"],
      ro: ["Se varsă în Dunăre", "Curge prin Belgrad", "Cale navigabilă importantă", "Separă Serbia Centrală de Voivodina", "Multe poduri"],
      en: ["Flows into the Danube", "Flows through Belgrade", "Important waterway", "Separates Central Serbia from Vojvodina", "Numerous bridges"],
      es: ["Desemboca en el Danubio", "Fluye por Belgrado", "Vía fluvial importante", "Separa Serbia central de Vojvodina", "Numerosos puentes"],
      pt: ["Desagua no Danúbio", "Corre por Belgrado", "Via navegável importante", "Separa a Sérvia Central da Voivodina", "Inúmeras pontes"],
      fr: ["Se jette dans le Danube", "Traverse Belgrade", "Voie d'eau majeure", "Sépare la Serbie centrale de la Voïvodine", "Nombreux ponts"],
    }, image: "/poi-images/river-sava.webp",
    descriptionAdvanced: {
      de: "Die Save ist mit einer Länge von 945 Kilometern einer der bedeutendsten rechten Nebenflüsse der Donau in Südosteuropa. Sie entsteht in den Slowenischen Alpen aus den beiden Quellflüssen Sava Dolinka und Sava Bohinjka und fließt durch Slowenien, Kroatien, Bosnien und Herzegowina sowie Serbien. Historisch markierte der Fluss über Jahrhunderte hinweg die Grenze zwischen dem Osmanischen Reich und dem Habsburgerreich. Ihr Einzugsgebiet umfasst etwa 97.713 Quadratkilometer und beheimatet eine vielfältige Flora und Fauna, insbesondere in den ausgedehnten Auenlandschaften wie dem Naturpark Lonjsko Polje. Die Save ist ab der Stadt Sisak in Kroatien schiffbar und mündet in Belgrad auf einer Höhe von etwa 70 Metern über dem Meeresspiegel in die Donau. Heute spielt sie eine zentrale Rolle für die regionale Wasserwirtschaft, die Energiegewinnung durch Wasserkraftwerke und den grenzüberschreitenden Gütertransport.",
      hu: "A Száva 945 kilométeres hosszával a Duna egyik legfontosabb jobb oldali mellékfolyója Délkelet-Európában. Szlovéniában, az Alpokban ered két forráságból, a Sava Dolinkából és a Sava Bohinjkából, majd átfolyik Horvátországon, Bosznia-Hercegovinán és Szerbián. A folyó évszázadokon keresztül természetes határt képezett az Oszmán Birodalom és a Habsburg Birodalom között. Vízgyűjtő területe körülbelül 97 713 négyzetkilométert tesz ki, és rendkívül gazdag élővilágnak ad otthont, különösen az olyan ártéri területeken, mint a Lonjsko Polje natúrpark. A Száva a horvátországi Sziszek városától kezdve hajózható, és Belgrádnál, mintegy 70 méteres tengerszint feletti magasságban torkollik a Dunába. Napjainkban kiemelt szerepet tölt be a régió vízgazdálkodásában, a vízenergia-termelésben és a nemzetközi folyami közlekedésben.",
      ro: "Râul Sava este unul dintre cei mai importanți afluenți de dreapta ai Dunării în Europa de Sud-Est, având o lungime totală de 945 de kilometri. Acesta se formează în Alpii Sloveni din două brațe sursă, Sava Dolinka și Sava Bohinjka, și traversează teritoriile Sloveniei, Croației, Bosniei și Herțegovinei și Serbiei. Din punct de vedere istoric, râul a servit timp de secole ca graniță naturală între Imperiul Otoman și Imperiul Habsburgic. Bazinul său hidrografic acoperă aproximativ 97.713 kilometri pătrați și susține o biodiversitate remarcabilă, în special în zonele inundabile precum parcul natural Lonjsko Polje. Sava este navigabilă începând de la orașul Sisak din Croația și se varsă în Dunăre la Belgrad, la o altitudine de circa 70 de metri. În prezent, râul este vital pentru economia regională prin producția de energie hidroelectrică, irigații și transportul fluvial internațional.",
      en: "The Sava is one of the most significant right-bank tributaries of the Danube in Southeast Europe, stretching over a total length of 945 kilometers. It originates in the Slovenian Alps from two source branches, the Sava Dolinka and Sava Bohinjka, and flows through Slovenia, Croatia, Bosnia and Herzegovina, and Serbia. Historically, the river served for centuries as a natural border between the Ottoman Empire and the Habsburg Monarchy. Its drainage basin covers approximately 97,713 square kilometers and supports a rich variety of flora and fauna, particularly in large wetlands like the Lonjsko Polje Nature Park. The Sava becomes navigable starting from the city of Sisak in Croatia and joins the Danube in Belgrade at an elevation of about 70 meters. Today, it plays a central role in regional water management, hydroelectric power generation, and international river transport.",
      es: "El Sava es un importante afluente derecho del Danubio y nace de la confluencia de dos ríos en Eslovenia. Fluye a través de Croacia, Bosnia-Herzegovina y Serbia, donde desemboca en el Danubio en Belgrado. El río desempeña un papel importante para la navegación y la agricultura. Conecta varias capitales de la región de los Balcanes.",
      pt: "O Sava é um importante afluente direito do Danúbio e nasce da confluência de dois rios na Eslovénia. Corre através da Croácia, Bósnia-Herzegovina e Sérvia, onde desagua no Danúbio em Belgrado. O rio desempenha um papel importante para a navegação e agricultura. Liga várias capitais da região dos Balcãs.",
      fr: "La Sava est un affluent majeur de la rive droite du Danube, né de la confluence de deux rivières en Slovénie. Elle traverse la Croatie, la Bosnie-Herzégovine et la Serbie, où elle rejoint le Danube à Belgrade. La rivière joue un rôle essentiel pour la navigation et l'agriculture. Elle relie plusieurs capitales de la région des Balkans.",
    },
    factsAdvanced: {
      de: ["Die Gesamtlänge des Flusses beträgt 945 Kilometer.", "Das Einzugsgebiet der Save umfasst 97.713 Quadratkilometer.", "Der Fluss mündet in Belgrad in einer Höhe von 70 Metern in die Donau.", "Die Save ist auf einer Länge von 593 Kilometern für große Schiffe befahrbar.", "Vier Nationalhauptstädte (Ljubljana, Zagreb, Sarajevo, Belgrad) liegen in ihrem Becken.", "Der höchste Punkt im Einzugsgebiet ist der Berg Triglav mit 2.864 Metern."],
      hu: ["A folyó teljes hossza 945 kilométer.", "A Száva vízgyűjtő területe 97 713 négyzetkilométer.", "A folyó Belgrádnál, 70 méteres magasságban torkollik a Dunába.", "A Száva 593 kilométer hosszan hajózható nagy hajók számára.", "Négy állam fővárosa (Ljubljana, Zágráb, Szarajevó, Belgrád) található a medencéjében.", "A vízgyűjtő legmagasabb pontja a 2864 méter magas Triglav-csúcs."],
      ro: ["Lungimea totală a râului este de 945 de kilometri.", "Bazinul hidrografic al Savei acoperă 97.713 kilometri pătrați.", "Râul se varsă în Dunăre la Belgrad, la o altitudine de 70 de metri.", "Sava este navigabilă pentru nave mari pe o distanță de 593 de kilometri.", "Patru capitale de stat (Ljubljana, Zagreb, Sarajevo, Belgrad) se află în bazinul său.", "Cel mai înalt punct din bazin este muntele Triglav, cu 2.864 de metri."],
      en: ["The total length of the river is 945 kilometers.", "The Sava's drainage basin covers 97,713 square kilometers.", "The river joins the Danube in Belgrade at an elevation of 70 meters.", "The Sava is navigable for large vessels over a distance of 593 kilometers.", "Four national capitals (Ljubljana, Zagreb, Sarajevo, Belgrade) are in its basin.", "The highest point in the basin is Mount Triglav at 2,864 meters."],
      es: ["Longitud total 990 km", "Cuenca hidrográfica aprox. 97.713 km2", "Desembocadura en Belgrado", "Fluye por 4 países", "Navegable en 593 km de longitud", "Mayor afluente del Danubio"],
      pt: ["Comprimento total 990 km", "Bacia hidrográfica aprox. 97.713 km2", "Foz em Belgrado", "Corre por 4 países", "Navegável em 593 km de comprimento", "Maior afluente do Danúbio"],
      fr: ["Longueur totale 990 km", "Bassin versant environ 97 713 km2", "Embouchure à Belgrade", "Traverse 4 pays", "Navigable sur 593 km", "Plus grand affluent du Danube"],
    },
  }
];

export const serbiaDistrictPoi: POI[] = [
  // RS-001 Severno-Backi
  // RS-002 Zapadno-Backi
  {
    id: "RS-002-sombor", "sights": {"de": [{"name": "Narodno pozorište Sombor", "text": "Das historische Gebäude des Nationaltheaters in Sombor.", "category": "cultural", "coords": [19.112174, 45.77232]}, {"name": "Preparandija", "text": "Ein ehemaliges Schulgebäude, das heute als Museum und Galerie dient.", "category": "museum", "coords": [19.113753, 45.774696]}, {"name": "Galerija Milan Konjović", "text": "Eine Galerie, die den Werken des berühmten Malers Milan Konjović gewidmet ist.", "category": "museum", "coords": [19.113573, 45.77212]}, {"name": "Kulturni centar ”Laza Kostić”", "text": "Ein wichtiges kulturelles Zentrum für Kunst und Veranstaltungen in Sombor.", "category": "cultural", "coords": [19.109652, 45.772969]}, {"name": "Crkva Presvetog Trojstva", "text": "Eine barocke katholische Kirche im Zentrum von Sombor.", "category": "religious", "coords": [19.1134, 45.773367]}, {"name": "Crkva Svetog Georgija", "text": "Die serbisch-orthodoxe Hauptkirche von Sombor.", "category": "religious", "coords": [19.115042, 45.773927]}, {"name": "Manastir Svetog Arhiđakona Stefana", "text": "Ein serbisch-orthodoxes Kloster am Stadtrand von Sombor.", "category": "religious", "coords": [19.133855, 45.778146]}], "hu": [{"name": "Narodno pozorište Sombor", "text": "A zombori Nemzeti Színház történelmi épülete.", "category": "cultural", "coords": [19.112174, 45.77232]}, {"name": "Preparandija", "text": "Egykori iskolaépület, amely ma múzeumként és galériaként működik.", "category": "museum", "coords": [19.113753, 45.774696]}, {"name": "Galerija Milan Konjović", "text": "A híres festő, Milan Konjović műveinek szentelt galéria.", "category": "museum", "coords": [19.113573, 45.77212]}, {"name": "Kulturni centar ”Laza Kostić”", "text": "Zombor fontos kulturális központja művészeti események számára.", "category": "cultural", "coords": [19.109652, 45.772969]}, {"name": "Crkva Presvetog Trojstva", "text": "Barokk katolikus templom Zombor központjában.", "category": "religious", "coords": [19.1134, 45.773367]}, {"name": "Crkva Svetog Georgija", "text": "Zombor fő szerb ortodox temploma.", "category": "religious", "coords": [19.115042, 45.773927]}, {"name": "Manastir Svetog Arhiđakona Stefana", "text": "Szerb ortodox kolostor Zombor szélén.", "category": "religious", "coords": [19.133855, 45.778146]}], "ro": [{"name": "Narodno pozorište Sombor", "text": "Clădirea istorică a Teatrului Național din Sombor.", "category": "cultural", "coords": [19.112174, 45.77232]}, {"name": "Preparandija", "text": "O fostă școală care astăzi servește ca muzeu și galerie.", "category": "museum", "coords": [19.113753, 45.774696]}, {"name": "Galerija Milan Konjović", "text": "O galerie dedicată lucrărilor celebrului pictor Milan Konjović.", "category": "museum", "coords": [19.113573, 45.77212]}, {"name": "Kulturni centar ”Laza Kostić”", "text": "Un centru cultural important pentru artă și evenimente în Sombor.", "category": "cultural", "coords": [19.109652, 45.772969]}, {"name": "Crkva Presvetog Trojstva", "text": "O biserică catolică barocă în centrul orașului Sombor.", "category": "religious", "coords": [19.1134, 45.773367]}, {"name": "Crkva Svetog Georgija", "text": "Principala biserică ortodoxă sârbă din Sombor.", "category": "religious", "coords": [19.115042, 45.773927]}, {"name": "Manastir Svetog Arhiđakona Stefana", "text": "O mănăstire ortodoxă sârbă la marginea orașului Sombor.", "category": "religious", "coords": [19.133855, 45.778146]}], "en": [{"name": "Narodno pozorište Sombor", "text": "The historic building of the National Theatre in Sombor.", "category": "cultural", "coords": [19.112174, 45.77232]}, {"name": "Preparandija", "text": "A former school building that now functions as a museum and gallery.", "category": "museum", "coords": [19.113753, 45.774696]}, {"name": "Galerija Milan Konjović", "text": "A gallery dedicated to the works of the famous painter Milan Konjović.", "category": "museum", "coords": [19.113573, 45.77212]}, {"name": "Kulturni centar ”Laza Kostić”", "text": "An important cultural center for arts and events in Sombor.", "category": "cultural", "coords": [19.109652, 45.772969]}, {"name": "Crkva Presvetog Trojstva", "text": "A Baroque Catholic church in the center of Sombor.", "category": "religious", "coords": [19.1134, 45.773367]}, {"name": "Crkva Svetog Georgija", "text": "The main Serbian Orthodox church of Sombor.", "category": "religious", "coords": [19.115042, 45.773927]}, {"name": "Manastir Svetog Arhiđakona Stefana", "text": "A Serbian Orthodox monastery located on the outskirts of Sombor.", "category": "religious", "coords": [19.133855, 45.778146]}]},
    type: "city",
    parent: "RS-002",
    coords: [19.1125, 45.7739],
    name: { de: "Sombor", hu: "Zombor", ro: "Sombor", en: "Sombor" },
    description: {
      de: "Eine grüne Stadt in der West-Batschka, berühmt für ihre Parks, Kutschen und das imposante Komitatsgebäude.",
      hu: "Zöldellő város Nyugat-Bácskában, híres parkjairól, fogatairól és az impozáns vármegyeházáról.",
      ro: "Un oraș verde în Bačka de Vest, faimos pentru parcurile sale, trăsurile și clădirea impresionantă a comitatului.",
      en: "A green city in West Bačka, famous for its parks, carriages, and the impressive county building.",
      es: "Una ciudad verde en Bačka Occidental, famosa por sus parques, carruajes y el imponente edificio del condado.",
      pt: "Uma cidade verde em Bačka Ocidental, famosa pelos seus parques, carruagens e o imponente edifício do condado.",
      fr: "Une ville verdoyante de Bačka occidentale, célèbre pour ses parcs, ses calèches et son imposant bâtiment départemental.",
    },
    facts: {
      de: ["Stadt der Alleen", "Gemälde 'Schlacht von Zenta'", "Reiche Kulturgeschichte"],
      hu: ["A fasorok városa", "Zentai csata óriásfestmény", "Gazdag kultúrtörténet"],
      ro: ["Orașul aleilor", "Pictura 'Bătălia de la Zenta'", "Istorie culturală bogată"],
      en: ["City of avenues", "'Battle of Senta' painting", "Rich cultural history"],
      es: ["Ciudad de las avenidas", "Pintura 'Batalla de Zenta'", "Rica historia cultural"],
      pt: ["Cidade das avenidas", "Pintura 'Batalha de Zenta'", "Rica história cultural"],
      fr: ["Ville des allées", "Tableau 'Bataille de Zenta'", "Riche histoire culturelle"],
    },
    descriptionAdvanced: {
      de: "Sombor ist eine bedeutende Stadt im Nordwesten Serbiens, gelegen in der Provinz Vojvodina nahe der ungarischen und kroatischen Grenze. Die Stadt erhielt im Jahr 1749 den Status einer freien königlichen Stadt, was eine Ära wirtschaftlicher und kultureller Blüte einleitete. Sombor ist weit über die Landesgrenzen hinaus für seine außergewöhnliche Begrünung bekannt; über 120 Kilometer Alleen mit amerikanischen Zürgelbäumen (Bođoši) prägen das Stadtbild und verleihen ihr den Beinamen 'Grünste Stadt Europas'. Das architektonische Highlight ist das Gebäude der Gespanschaft (Županija), in dessen Sitzungssaal sich das monumentale Gemälde 'Die Schlacht bei Senta' von Franz Eisenhut befindet, das mit einer Fläche von 28 Quadratmetern zu den größten Ölgemälden auf dem Balkan zählt. Die Stadt ist zudem ein Zentrum der multikulturellen Zusammenarbeit, in dem Serben, Ungarn und Kroaten seit Jahrhunderten friedlich zusammenleben. Sombor bewahrt eine elegante Atmosphäre des 19. Jahrhunderts mit seinen Kutschen, klassizistischen Fassaden und ruhigen Parks.",
      hu: "Zombor (Sombor) jelentős város Szerbia északnyugati részén, a Vajdaságban, a magyar és a horvát határ közelében. A város 1749-ben kapta meg a szabad királyi városi rangot, ami gazdasági és kulturális fellendülést hozott a településnek. Zombor messze földön híres kivételes zöldterületeiről; több mint 120 kilométernyi kettős fasor, főként amerikai ostorfa (bođoš) szegélyezi utcáit, amiért Európa egyik legzöldebb városaként emlegetik. Építészeti szempontból kiemelkedik a Megyeháza (Županija) épülete, amelynek dísztermében található Eisenhut Ferenc monumentális festménye, a 'Zentai csata'. A 28 négyzetméteres alkotás a Balkán egyik legnagyobb olajfestménye. A város a többnemzetiségű együttélés mintapéldája, ahol szerbek, magyarok és horvátok évszázadok óta közösen alakítják a helyi kultúrát. Zombor megőrizte a 19. század polgári hangulatát klasszicista homlokzataival, hagyományos lovas kocsijaival és nyugodt parkjaival.",
      ro: "Sombor este un oraș important din nord-vestul Serbiei, situat în provincia Voivodina, în apropierea granițelor cu Ungaria și Croația. În anul 1749, localitatea a primit statutul de oraș liber regal, fapt care a declanșat o perioadă de prosperitate economică și culturală. Sombor este celebru pentru spațiile sale verzi excepționale; peste 120 de kilometri de bulevarde mărginite de hackberry american (bođoši) definesc peisajul urban, oferindu-i supranumele de 'cel mai verde oraș din Europa'. Punctul central al arhitecturii orașului este clădirea Comitatului (Županija), în a cărei sală ceremonială se află tabloul monumental 'Bătălia de la Senta', pictat de Franz Eisenhut. Cu o suprafață de 28 de metri pătrați, acesta este unul dintre cele mai mari tablouri în ulei din Balcani. Orașul păstrează o atmosferă elegantă de secol XIX, fiind recunoscut pentru fațadele neoclasice, trăsurile tradiționale și conviețuirea armonioasă a sârbilor, maghiarilor și croaților.",
      en: "Sombor is a prominent city in northwestern Serbia, located in the Vojvodina province near the borders with Hungary and Croatia. The city attained the status of a Free Royal City in 1749, sparking an era of significant economic and cultural growth. Sombor is widely renowned for its extraordinary greenery, featuring over 120 kilometers of tree-lined avenues, predominantly American hackberries (bođoši), earning it the nickname 'the greenest city in Europe.' Its architectural centerpiece is the County Building (Županija), which houses the monumental painting 'The Battle of Senta' by Franz Eisenhut. Measuring 28 square meters, it is one of the largest oil paintings in the Balkans. The city is a hub of multiculturalism, where Serbs, Hungarians, and Croatians have lived together for centuries. Sombor maintains a charming 19th-century atmosphere with its neoclassical facades, traditional horse-drawn carriages, and serene public parks.",
      es: "Sombor es una ciudad del noroeste de Serbia, conocida por sus frondosas zonas verdes y su arquitectura histórica. La ciudad fue en su día la sede administrativa del condado de Bács-Bodrog y conserva muchos edificios de los siglos XVIII y XIX. Un punto de referencia es el monumental edificio de la administración del distrito. La ciudad es famosa por sus avenidas bordeadas de árboles.",
      pt: "Sombor é uma cidade no noroeste da Sérvia, conhecida pelas suas áreas verdes exuberantes e arquitetura histórica. A cidade foi outrora a sede administrativa do condado de Bács-Bodrog e preserva muitos edifícios dos séculos XVIII e XIX. Um marco é o edifício monumental da administração distrital. A cidade é famosa pelas suas avenidas ladeadas por árvores.",
      fr: "Sombor est une ville du nord-ouest de la Serbie, connue pour ses espaces verts luxuriants et son architecture historique. La ville fut autrefois le siège administratif du comitat de Bács-Bodrog et conserve de nombreux bâtiments des XVIIIe et XIXe siècles. L'imposant bâtiment de l'administration du district en est un monument emblématique. La ville est célèbre pour ses allées bordées d'arbres.",
    },
    factsAdvanced: {
      de: ["Freie königliche Stadt seit dem Jahr 1749", "Über 120 km Baumalleen prägen das Stadtbild", "Beherbergt das größte Ölgemälde Serbiens (28 m2)", "Sitz der West-Bačka Bezirksverwaltung", "Bekannt für die traditionelle 'Somborer Kutsche'", "Berühmtes Kulturzentrum 'Laza Kostić' im Zentrum"],
      hu: ["1749-ben kapott szabad királyi városi rangot", "Több mint 120 km hosszú ostorfa-fasor szegélyezi", "Itt látható Szerbia legnagyobb olajfestménye (28 m2)", "A Nyugat-bácskai körzet közigazgatási központja", "Híres a hagyományos zombori fogatos kocsikról", "A város szülötte a neves költő, Laza Kostić"],
      ro: ["Declarat oraș liber regal în anul 1749", "Peste 120 km de aliniamente stradale cu arbori", "Deține cel mai mare tablou în ulei din Serbia", "Centrul administrativ al districtului Bačka de Vest", "Renumit pentru trăsurile sale tradiționale cu cai", "Centru cultural important cu arhitectură neoclasică"],
      en: ["Granted Free Royal City status in 1749", "Features over 120 km of tree-lined streets", "Home to Serbia's largest oil painting (28 sqm)", "Administrative seat of the West Bačka District", "Famous for its traditional horse-drawn carriages", "Birthplace of the renowned poet Laza Kostić"],
      es: ["Mencionada por primera vez en 1340", "Sede del condado de Bács-Bodrog", "Administración del distrito construida en 1808", "Conocida por su tradición de coches de caballos", "120 km de calles bordeadas de árboles", "Cerca del canal Danubio-Tisza-Danubio"],
      pt: ["Mencionada pela primeira vez em 1340", "Sede do condado de Bács-Bodrog", "Administração distrital construída em 1808", "Conhecida pela tradição das charretes", "120 km de ruas arborizadas", "Perto do canal Danúbio-Tisza-Danúbio"],
      fr: ["Mentionnée pour la première fois en 1340", "Siège du comitat de Bács-Bodrog", "Administration du district construite en 1808", "Connue pour sa tradition de fiacres", "120 km de rues bordées d'arbres", "Proche du canal Danube-Tisza-Danube"],
    },
    image: "/poi-images/RS-002-sombor.webp",
  },
  {
    id: "RS-002-apatin", "sights": {
      "de": [
            {
                  "name": "Muzej sporta",
                  "text": "Ein Museum in Apatin, das der Geschichte des Sports und lokaler Athleten gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        18.984603,
                        45.67181
                  ]
            },
            {
                  "name": "Banja Junakovic",
                  "text": "Diese Schwimmeinrichtung in Apatin bietet Platz zum Schwimmen und zur Erholung.",
                  "category": "family",
                  "coords": [
                        19.03155,
                        45.677252
                  ]
            },
            {
                  "name": "Olympic Pool",
                  "text": "Diese Schwimmeinrichtung in Apatin bietet Platz zum Schwimmen und zur Erholung.",
                  "category": "family",
                  "coords": [
                        19.031242,
                        45.678291
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Muzej sporta",
                  "text": "Apatini múzeum, amelyet a sporttörténetnek és a helyi sportolóknak szenteltek.",
                  "category": "museum",
                  "coords": [
                        18.984603,
                        45.67181
                  ]
            },
            {
                  "name": "Banja Junakovic",
                  "text": "Ez a Apatin városában található úszólétesítmény lehetőséget nyújt az úszásra és a kikapcsolódásra.",
                  "category": "family",
                  "coords": [
                        19.03155,
                        45.677252
                  ]
            },
            {
                  "name": "Olympic Pool",
                  "text": "Ez a Apatin városában található úszólétesítmény lehetőséget nyújt az úszásra és a kikapcsolódásra.",
                  "category": "family",
                  "coords": [
                        19.031242,
                        45.678291
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Muzej sporta",
                  "text": "Un muzeu din Apatin dedicat istoriei sportului și sportivilor locali.",
                  "category": "museum",
                  "coords": [
                        18.984603,
                        45.67181
                  ]
            },
            {
                  "name": "Banja Junakovic",
                  "text": "Această unitate de înot din Apatin oferă un loc pentru înot și recreere.",
                  "category": "family",
                  "coords": [
                        19.03155,
                        45.677252
                  ]
            },
            {
                  "name": "Olympic Pool",
                  "text": "Această unitate de înot din Apatin oferă un loc pentru înot și recreere.",
                  "category": "family",
                  "coords": [
                        19.031242,
                        45.678291
                  ]
            }
      ],
      "en": [
            {
                  "name": "Muzej sporta",
                  "text": "A museum in Apatin dedicated to the history of sports and local athletic achievements.",
                  "category": "museum",
                  "coords": [
                        18.984603,
                        45.67181
                  ]
            },
            {
                  "name": "Banja Junakovic",
                  "text": "This swimming facility in Apatin offers a place for swimming and recreation.",
                  "category": "family",
                  "coords": [
                        19.03155,
                        45.677252
                  ]
            },
            {
                  "name": "Olympic Pool",
                  "text": "This swimming facility in Apatin offers a place for swimming and recreation.",
                  "category": "family",
                  "coords": [
                        19.031242,
                        45.678291
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-002",
    coords: [18.9858, 45.6714],
    name: { de: "Apatin", hu: "Apatin", ro: "Apatin", en: "Apatin" },
    description: {
      de: "Eine Stadt am linken Donauufer, bekannt für ihre lange Brautradition und Fischereigeschichte.",
      hu: "Város a Duna bal partján, amely hosszú sörfőzési hagyományairól és halászati múltjáról ismert.",
      ro: "Un oraș pe malul stâng al Dunării, cunoscut pentru lunga sa tradiție în fabricarea berii și istoria pescuitului.",
      en: "A city on the left bank of the Danube, known for its long brewing tradition and fishing history.",
      es: "Una ciudad en la orilla izquierda del Danubio, conocida por su larga tradición cervecera y su historia pesquera.",
      pt: "Uma cidade na margem esquerda do Danúbio, conhecida pela sua longa tradição cervejeira e história da pesca.",
      fr: "Une ville sur la rive gauche du Danube, connue pour sa longue tradition brassicole et son histoire de la pêche.",
    },
    facts: {
      de: ["Jelen-Brauerei", "Donauhafen", "Fischersymposium"],
      hu: ["Jelen sörgyár", "Dunai kikötő", "Halászati hagyományok"],
      ro: ["Fabrica de bere Jelen", "Port la Dunăre", "Tradiții pescărești"],
      en: ["Jelen Brewery", "Danube port", "Fishing traditions"],
      es: ["Cervecería Jelen", "Puerto del Danubio", "Simposio de pescadores"],
      pt: ["Cervejaria Jelen", "Porto do Danúbio", "Simpósio de pescadores"],
      fr: ["Brasserie Jelen", "Port du Danube", "Symposium des pêcheurs"],
    }, image: "/poi-images/RS-002-apatin.webp",
    descriptionAdvanced: {
      de: "Apatin ist eine historische Stadt am linken Ufer der Donau im Nordwesten Serbiens, bekannt für seine tief verwurzelte Brautradition und seine strategische Lage am Fluss. Die Stadt wurde erstmals im 11. Jahrhundert erwähnt, erlebte aber unter der Herrschaft von Maria Theresia im 18. Jahrhundert eine bedeutende Entwicklung durch die Ansiedlung deutscher Kolonisten. Im Jahr 1756 wurde hier die Apatiner Brauerei gegründet, die heute die größte und bekannteste Brauerei des Landes ist und das berühmte 'Jelen Pivo' produziert. Aufgrund seiner Lage an der Donau (Flusskilometer 1401) ist Apatin ein wichtiges Zentrum für Fischerei und Wassersport, mit einem modernen Jachthafen, der zu den am besten ausgestatteten an der gesamten Donau zählt. Die Stadt ist auch berühmt für ihre 'Ribarske večeri' (Fischernächte), ein Festival, das die lokale Gastronomie und Fischereikultur feiert. Die Architektur zeigt Einflüsse des Barocks und der Donauschwaben, was Apatin ein charakteristisches mitteleuropäisches Flair verleiht.",
      hu: "Apatin történelmi város a Duna bal partján, Szerbia északnyugati részén, amely mélyen gyökerező sörfőzési hagyományairól és stratégiai folyóparti fekvéséről ismert. A települést már a 11. században említik az oklevelek, de igazi fejlődése a 18. században, Mária Terézia uralkodása alatt indult meg a német telepesek érkezésével. 1756-ban alapították meg az Apatini Sörgyárat, amely ma az ország legnagyobb sörgyára, és itt készül a híres Jelen Pivo. A Duna 1401-es folyamkilométerénél fekvő város a horgászat és a vízi sportok központja, modern jachtkikötője pedig a Duna mentén az egyik legjobban felszerelt létesítmény. A város évente ad otthont az 'Apatini Halászestéknek', amely a helyi gasztronómiát és halászati kultúrát népszerűsíti. Az építészetben jól megfigyelhetők a barokk stílusjegyek és a dunai svábok öröksége, ami sajátos közép-európai hangulatot kölcsönöz a településnek.",
      ro: "Apatin este un oraș istoric situat pe malul stâng al Dunării, în nord-vestul Serbiei, fiind renumit pentru tradiția sa seculară în producția de bere și poziția sa strategică pe fluviu. Menționat documentar încă din secolul al XI-lea, orașul a cunoscut o dezvoltare majoră în secolul al XVIII-lea, în timpul domniei Mariei Tereza, odată cu colonizarea șvabilor dunăreni. În anul 1756 a fost fondată fabrica de bere Apatin, care astăzi este cea mai mare din Serbia, producătoare a faimosului brand 'Jelen Pivo'. Situat la kilometrul fluvial 1401, Apatin este un centru vital pentru pescuit și sporturi nautice, dispunând de o marină modernă, considerată una dintre cele mai bine dotate de pe cursul Dunării. Orașul este celebru și pentru festivalul 'Nopțile Pescarilor', care celebrează cultura gastronomică locală. Arhitectura orașului păstrează influențe baroce, oferind localității un aer distins, specific așezărilor din Europa Centrală.",
      en: "Apatin is a historic city located on the left bank of the Danube in northwestern Serbia, renowned for its long-standing brewing tradition and strategic riverfront location. First mentioned in the 11th century, the town saw significant growth in the 18th century under Empress Maria Theresa, following the settlement of Danube Swabians. In 1756, the Apatin Brewery was established, which remains the largest brewery in Serbia and the producer of the famous 'Jelen' beer. Positioned at river kilometer 1401, Apatin is a major hub for fishing and water sports, boasting a modern marina that is among the best-equipped on the entire Danube. The city is also famous for its annual 'Fishermen's Evenings' festival, celebrating local gastronomy and maritime culture. The urban architecture showcases Baroque influences and the legacy of the German settlers, giving Apatin a distinct Central European character.",
      es: "Apatin es una ciudad situada en la margen izquierda del Danubio, en la provincia de Voivodina. Es ampliamente conocida por su larga tradición en la elaboración de cerveza, siendo su fábrica local una de las más antiguas de Serbia. La ciudad cuenta con un puerto importante y se encuentra cerca de la reserva natural de Gornje Podunavlje. Apatin es un centro neurálgico para la pesca y el turismo náutico.",
      pt: "Apatin é uma cidade na margem esquerda do Danúbio, na província de Voivodina. É amplamente conhecida pela sua longa tradição cervejeira, sendo a cervejaria local uma das mais antigas da Sérvia. A cidade possui um porto importante e está situada perto da reserva natural de Gornje Podunavlje. Apatin é um centro de pesca e turismo náutico.",
      fr: "Apatin est une ville située sur la rive gauche du Danube, dans la province de Voïvodine. Elle est largement connue pour sa longue tradition brassicole, sa brasserie locale étant l'une des plus anciennes de Serbie. La ville dispose d'un port important et se trouve à proximité de la réserve naturelle de Gornje Podunavlje. Apatin est un centre pour la pêche et le tourisme nautique.",
    },
    factsAdvanced: {
      de: ["Sitz der größten serbischen Brauerei (gegr. 1756)", "Gelegen am Donau-Stromkilometer 1401", "Besitzt einen der modernsten Jachthäfen an der Donau", "Zentrum der deutschen Donauschwaben im 18. Jh.", "Jährliches Festival 'Apatiner Fischernächte'", "Wichtiger Standort für die Metall- und Schiffbauindustrie"],
      hu: ["Szerbia legnagyobb sörgyárának székhelye (alapítva 1756)", "A Duna 1401-es folyamkilométerénél fekszik", "A Duna egyik legmodernebb jachtkikötőjével rendelkezik", "A dunai svábok jelentős központja volt a 18. században", "Itt rendezik meg az éves 'Apatini Halászestéket'", "Fontos fémipari és hajóépítési központ"],
      ro: ["Găzduiește cea mai mare berărie din Serbia (fondată în 1756)", "Amplasat la kilometrul 1401 al Dunării", "Deține una dintre cele mai moderne marine fluviale", "Centru istoric al șvabilor dunăreni în secolul al XVIII-lea", "Gazda festivalului anual 'Nopțile Pescarilor'", "Centru industrial important pentru metalurgie și construcții navale"],
      en: ["Home to Serbia's largest brewery, founded in 1756", "Located at Danube river kilometer 1401", "Features one of the most modern marinas on the Danube", "Major hub for Danube Swabian settlers in the 18th century", "Hosts the annual 'Apatin Fishermen's Evenings'", "Significant center for metalworking and shipbuilding"],
      es: ["Fundada en el siglo XI", "Cervecería fundada en el año 1756", "Importante puerto en el Danubio", "Cerca de la reserva Gornje Podunavlje", "Conocida por sus tradiciones pesqueras", "Población de aproximadamente 17.000 habitantes"],
      pt: ["Fundada no século XI", "Cervejaria fundada em 1756", "Porto importante no Danúbio", "Perto da reserva Gornje Podunavlje", "Conhecida pelas tradições de pesca", "População de cerca de 17.000 habitantes"],
      fr: ["Fondée au XIe siècle", "Brasserie fondée en 1756", "Port important sur le Danube", "Proche de la réserve Gornje Podunavlje", "Connue pour ses traditions de pêche", "Population d'environ 17 000 habitants"],
    },
  },
  // RS-003 Severno-Banatski
  {
    id: "RS-003-kikinda", "sights": {"de": [{"name": "Narodni muzej Kikinda", "text": "Das Nationalmuseum Kikinda ist ein wichtiges Museum der Stadt.", "category": "museum", "coords": [20.464871, 45.830385]}, {"name": "Narodno pozorište Kikinda", "text": "Das Nationaltheater Kikinda ist ein bedeutender kultureller Veranstaltungsort für darstellende Künste in der Stadt.", "category": "cultural", "coords": [20.466587, 45.830369]}, {"name": "Dečije pozorište Lane", "text": "Das Kindertheater Lane ist ein lokaler Veranstaltungsort für Theateraufführungen für ein jüngeres Publikum in Kikinda.", "category": "cultural", "coords": [20.470408, 45.832737]}, {"name": "Atelje Terra", "text": "Das Atelje Terra ist ein Museumsraum in Kikinda, der sich auf Terrakotta-Kunst konzentriert.", "category": "museum", "coords": [20.461782, 45.813122]}, {"name": "Muzej Terra", "text": "Das Terra-Museum ist eine kulturelle Einrichtung in Kikinda, die sich der Ausstellung von Terrakotta-Skulpturen widmet.", "category": "museum", "coords": [20.490471, 45.829777]}, {"name": "Suvača", "text": "Die Suvača in Kikinda ist eine einzigartige erhaltene Trockenmühle, die historisch von Pferden angetrieben wurde.", "category": "historical", "coords": [20.453191, 45.8242]}, {"name": "Spomenik poginulim i nestalim u ratovima devedesetih", "text": "Dieses Denkmal in Kikinda ist den Gefallenen und Vermissten der Kriege der 1990er Jahre gewidmet.", "category": "historical", "coords": [20.46755, 45.831378]}, {"name": "Plamen", "text": "Das Flammen-Denkmal ist eine symbolische Gedenkstätte in der Stadt Kikinda.", "category": "historical", "coords": [20.433678, 45.80997]}, {"name": "Spomenik XIII Vojvođanskoj brigadi", "text": "Dieses Denkmal ehrt die 13. Vojvodina-Brigade in Kikinda.", "category": "historical", "coords": [20.463946, 45.829056]}, {"name": "Galerija S", "text": "Die Galerija S ist eine Kunstgalerie in Kikinda, die verschiedene visuelle Kunstwerke ausstellt.", "category": "museum", "coords": [20.468776, 45.830456]}, {"name": "Spomenik internircima", "text": "Das Denkmal der Internierten dient als feierliche Gedenkstätte in Kikinda.", "category": "historical", "coords": [20.4657, 45.831406]}, {"name": "Manastir Svete Trojice", "text": "Das Kloster der Heiligen Dreifaltigkeit ist ein etabliertes religiöses Heiligtum und ein bedeutendes Gotteshaus in Kikinda.", "category": "religious", "coords": [20.467588, 45.81876]}, {"name": "Staro jezero", "text": "Ein historisches Seegebiet in Kikinda, das einen malerischen Ort zum Wandern bietet.", "category": "natural", "coords": [20.466577, 45.838001]}, {"name": "Ninano", "text": "Ein lustiger und sicherer Spielplatz in Kikinda mit verschiedenen Aktivitäten für Familien.", "category": "family", "coords": [20.456602, 45.820355]}, {"name": "Čarolija", "text": "Čarolija ist ein Spielplatz in Kikinda, der Raum zum Spielen für Kinder bietet.", "category": "family", "coords": [20.461864, 45.826468]}, {"name": "Dečija igraonica Čarobni Dvorac", "text": "Дечија играоница Чаробни Дворац ist ein Spielplatz in Kikinda, der Raum zum Spielen für Kinder bietet.", "category": "family", "coords": [20.467848, 45.832802]}], "hu": [{"name": "Narodni muzej Kikinda", "text": "A Kikindai Nemzeti Múzeum a város egy fontos múzeuma.", "category": "museum", "coords": [20.464871, 45.830385]}, {"name": "Narodno pozorište Kikinda", "text": "A Nagykikindai Nemzeti Színház a város drámaművészetének kiemelkedő kulturális helyszíne.", "category": "cultural", "coords": [20.466587, 45.830369]}, {"name": "Dečije pozorište Lane", "text": "A Lane Gyermekszínház a fiatalabb közönségnek szóló színházi előadások helyi helyszíne Nagykikindán.", "category": "cultural", "coords": [20.470408, 45.832737]}, {"name": "Atelje Terra", "text": "Az Atelje Terra egy terrakotta művészetre összpontosító múzeumi tér Nagykikindán.", "category": "museum", "coords": [20.461782, 45.813122]}, {"name": "Muzej Terra", "text": "A Terra múzeum egy kulturális intézmény Nagykikindán, amely terrakotta szobrok kiállításának szenteli magát.", "category": "museum", "coords": [20.490471, 45.829777]}, {"name": "Suvača", "text": "A nagykikindai Suvača egy egyedülálló, fennmaradt szárazmalom, amelyet történelmileg lovak hajtottak.", "category": "historical", "coords": [20.453191, 45.8242]}, {"name": "Spomenik poginulim i nestalim u ratovima devedesetih", "text": "Ez a nagykikindai emlékmű az 1990-es évek háborúiban elesetteknek és eltűnteknek állít emléket.", "category": "historical", "coords": [20.46755, 45.831378]}, {"name": "Plamen", "text": "A Láng emlékmű egy szimbolikus emlékmű Nagykikinda városában.", "category": "historical", "coords": [20.433678, 45.80997]}, {"name": "Spomenik XIII Vojvođanskoj brigadi", "text": "Ez az emlékmű a 13. Vajdasági Brigádnak állít emléket Nagykikindán.", "category": "historical", "coords": [20.463946, 45.829056]}, {"name": "Galerija S", "text": "A Galerija S egy művészeti galéria Nagykikindán, amely különféle vizuális alkotásokat állít ki.", "category": "museum", "coords": [20.468776, 45.830456]}, {"name": "Spomenik internircima", "text": "Az Internáltak emlékműve ünnepélyes emlékhelyként szolgál Nagykikindán.", "category": "historical", "coords": [20.4657, 45.831406]}, {"name": "Manastir Svete Trojice", "text": "A Szentháromság-kolostor egy elismert vallási szentély és kiemelkedő istentiszteleti hely Nagykikindán.", "category": "religious", "coords": [20.467588, 45.81876]}, {"name": "Staro jezero", "text": "Történelmi tóvidék Nagykikindán, amely festői helyszínt kínál a pihenéshez és sétához.", "category": "natural", "coords": [20.466577, 45.838001]}, {"name": "Ninano", "text": "Vidám és biztonságos játszótér Nagykikindán, amely különféle tevékenységeket kínál családoknak.", "category": "family", "coords": [20.456602, 45.820355]}, {"name": "Čarolija", "text": "A Čarolija egy játszótér Kikinda városában, amely játéklehetőséget kínál a gyerekeknek.", "category": "family", "coords": [20.461864, 45.826468]}, {"name": "Dečija igraonica Čarobni Dvorac", "text": "A Дечија играоница Чаробни Дворац egy játszótér Kikinda városában, amely játéklehetőséget kínál a gyerekeknek.", "category": "family", "coords": [20.467848, 45.832802]}], "ro": [{"name": "Narodni muzej Kikinda", "text": "Muzeul Național Kikinda este un muzeu important al orașului.", "category": "museum", "coords": [20.464871, 45.830385]}, {"name": "Narodno pozorište Kikinda", "text": "Teatrul Național Kikinda este un loc cultural proeminent pentru artele dramatice din oraș.", "category": "cultural", "coords": [20.466587, 45.830369]}, {"name": "Dečije pozorište Lane", "text": "Teatrul pentru Copii Lane este un loc local dedicat spectacolelor de teatru pentru publicul mai tânăr din Kikinda.", "category": "cultural", "coords": [20.470408, 45.832737]}, {"name": "Atelje Terra", "text": "Atelje Terra este un spațiu muzeal din Kikinda care se concentrează pe arta din teracotă.", "category": "museum", "coords": [20.461782, 45.813122]}, {"name": "Muzej Terra", "text": "Muzeul Terra este o instituție culturală din Kikinda dedicată expunerii sculpturilor din teracotă.", "category": "museum", "coords": [20.490471, 45.829777]}, {"name": "Suvača", "text": "Suvača din Kikinda este o moară uscată unică, păstrată, acționată istoric de cai.", "category": "historical", "coords": [20.453191, 45.8242]}, {"name": "Spomenik poginulim i nestalim u ratovima devedesetih", "text": "Acest monument din Kikinda este dedicat celor căzuți și dispăruți în războaiele din anii '90.", "category": "historical", "coords": [20.46755, 45.831378]}, {"name": "Plamen", "text": "Monumentul Flacăra este o structură memorială simbolică situată în orașul Kikinda.", "category": "historical", "coords": [20.433678, 45.80997]}, {"name": "Spomenik XIII Vojvođanskoj brigadi", "text": "Acest memorial onorează Brigada 13 Voivodina din Kikinda.", "category": "historical", "coords": [20.463946, 45.829056]}, {"name": "Galerija S", "text": "Galerija S este o galerie de artă din Kikinda care expune diverse opere de artă vizuală.", "category": "museum", "coords": [20.468776, 45.830456]}, {"name": "Spomenik internircima", "text": "Monumentul Internaților servește drept un memorial solemn în Kikinda.", "category": "historical", "coords": [20.4657, 45.831406]}, {"name": "Manastir Svete Trojice", "text": "Mănăstirea Sfintei Treimi este un sanctuar religios consacrat și un lăcaș de cult proeminent în Kikinda.", "category": "religious", "coords": [20.467588, 45.81876]}, {"name": "Staro jezero", "text": "O zonă de lac istorică în Kikinda, oferind un loc pitoresc pentru relaxare și plimbări.", "category": "natural", "coords": [20.466577, 45.838001]}, {"name": "Ninano", "text": "Un loc de joacă distractiv și sigur în Kikinda, oferind diverse activități pentru familii.", "category": "family", "coords": [20.456602, 45.820355]}, {"name": "Čarolija", "text": "Čarolija este un loc de joacă în Kikinda, care oferă spațiu de joacă pentru copii.", "category": "family", "coords": [20.461864, 45.826468]}, {"name": "Dečija igraonica Čarobni Dvorac", "text": "Дечија играоница Чаробни Дворац este un loc de joacă în Kikinda, care oferă spațiu de joacă pentru copii.", "category": "family", "coords": [20.467848, 45.832802]}], "en": [{"name": "Narodni muzej Kikinda", "text": "The National Museum of Kikinda is an important museum in the city.", "category": "museum", "coords": [20.464871, 45.830385]}, {"name": "National Theatre Kikinda", "text": "The National Theatre Kikinda is a prominent cultural venue for dramatic arts in the city.", "category": "cultural", "coords": [20.466587, 45.830369]}, {"name": "Dečije pozorište Lane", "text": "Children's Theatre Lane is a local venue dedicated to theatrical performances for younger audiences in Kikinda.", "category": "cultural", "coords": [20.470408, 45.832737]}, {"name": "Atelje Terra", "text": "Atelje Terra is a museum space in Kikinda focusing on terracotta art.", "category": "museum", "coords": [20.461782, 45.813122]}, {"name": "Terra museum", "text": "The Terra museum is a cultural institution in Kikinda dedicated to exhibiting terracotta sculptures.", "category": "museum", "coords": [20.490471, 45.829777]}, {"name": "Suvača", "text": "Suvača in Kikinda is a unique preserved dry mill historically powered by horses.", "category": "historical", "coords": [20.453191, 45.8242]}, {"name": "Spomenik poginulim i nestalim u ratovima devedesetih", "text": "This monument in Kikinda is dedicated to those who died and went missing during the wars of the 1990s.", "category": "historical", "coords": [20.46755, 45.831378]}, {"name": "Plamen", "text": "The Flame monument is a symbolic memorial structure located in the city of Kikinda.", "category": "historical", "coords": [20.433678, 45.80997]}, {"name": "Spomenik XIII Vojvođanskoj brigadi", "text": "This memorial honors the 13th Vojvodina Brigade in Kikinda.", "category": "historical", "coords": [20.463946, 45.829056]}, {"name": "Galerija S", "text": "Galerija S is an art gallery in Kikinda exhibiting various visual artworks.", "category": "museum", "coords": [20.468776, 45.830456]}, {"name": "Spomenik internircima", "text": "The Monument to the Internees serves as a solemn memorial in Kikinda.", "category": "historical", "coords": [20.4657, 45.831406]}, {"name": "Manastir Svete Trojice", "text": "The Monastery of the Holy Trinity is an established religious sanctuary and prominent place of worship in Kikinda.", "category": "religious", "coords": [20.467588, 45.81876]}, {"name": "Staro jezero", "text": "A historic lake area in Kikinda, offering a scenic spot for relaxation and walking.", "category": "natural", "coords": [20.466577, 45.838001]}, {"name": "Ninano", "text": "A fun and safe playground in Kikinda, providing various activities for local families.", "category": "family", "coords": [20.456602, 45.820355]}, {"name": "Čarolija", "text": "Čarolija is a playground in Kikinda offering space for children to play.", "category": "family", "coords": [20.461864, 45.826468]}, {"name": "Dečija igraonica Čarobni Dvorac", "text": "Дечија играоница Чаробни Дворац is a playground in Kikinda offering space for children to play.", "category": "family", "coords": [20.467848, 45.832802]}]},
    type: "city",
    parent: "RS-003",
    coords: [20.4650, 45.8244],
    name: { de: "Kikinda", hu: "Nagykikinda", ro: "Chichinda", en: "Kikinda" },
    description: {
      de: "Eine Stadt im Nordbanat, berühmt für die archäologischen Mammutfunde und das jährliche Kürbisfestival.",
      hu: "Észak-bánsági város, amely híres a régészeti mammutleleteiről és az évenkénti tökfesztiválról.",
      ro: "Un oraș în Banatul de Nord, faimos pentru descoperirile arheologice de mamuți și festivalul anual al dovleacului.",
      en: "A city in North Banat, famous for archaeological mammoth finds and the annual pumpkin festival.",
      es: "Una ciudad en el Banato del Norte, famosa por los hallazgos arqueológicos de mamuts y el festival anual de la calabaza.",
      pt: "Uma cidade no Banato do Norte, famosa pelas descobertas arqueológicas de mamutes e pelo festival anual da abóbora.",
      fr: "Une ville du Banat du Nord, célèbre pour ses découvertes archéologiques de mammouths et son festival annuel de la citrouille.",
    },
    facts: {
      de: ["Kika das Mammut", "Kürbistage", "Waldohreulen-Winterquartier"],
      hu: ["Kika a mammut", "Témanapok (tökfesztivál)", "Réti fülesbaglyok telelőhelye"],
      ro: ["Mamutul Kika", "Zilele dovleacului", "Iernarea bufnițelor cu urechi lungi"],
      en: ["Kika the mammoth", "Pumpkin Days", "Long-eared owl wintering site"],
      es: ["Kika el Mamut", "Días de la Calabaza", "Cuartel de invierno de búhos"],
      pt: ["Kika, o Mamute", "Dias da Abóbora", "Quartel de inverno de corujas"],
      fr: ["Kika le Mammouth", "Jours de la citrouille", "Quartier d'hiver des hiboux"],
    },
    descriptionAdvanced: {
      de: "Kikinda ist eine Stadt im Nordosten Serbiens, im Banat, direkt an der Grenze zu Rumänien. Weltweite Bekanntheit erlangte die Stadt im Jahr 1996, als in einer örtlichen Tongrube das fast vollständig erhaltene Skelett eines Mammuts (Mammuthus meridionalis) entdeckt wurde, das auf ein Alter von etwa 500.000 Jahren geschätzt wird. Dieses als 'Kika' getaufte Mammut ist heute das Wahrzeichen der Stadt und im Nationalmuseum von Kikinda ausgestellt. Eine weitere Besonderheit ist die ökologische Bedeutung der Stadt als weltweit größtes Überwinterungsquartier für Waldohreulen (Asio otus); jedes Jahr versammeln sich hunderte dieser Vögel in den Bäumen des Stadtzentrums. Kulturell ist Kikinda für das internationale Bildhauersymposium 'Terra' bekannt, bei dem seit 1982 Künstler monumentale Skulpturen aus dem lokalen Ton schaffen. Die Stadt verfügt über eine gut erhaltene klassizistische Architektur und eine quadratische Straßenführung, die typisch für die im 18. Jahrhundert planmäßig angelegten Siedlungen der Region ist.",
      hu: "Nagykikinda (Kikinda) Szerbia északkeleti részén, a Bánságban található város, közvetlenül a román határ mentén. A település 1996-ban vált világszerte ismertté, amikor egy helyi agyagbányában rábukkantak egy csaknem teljes épségben megmaradt mamutcsontvázra (Mammuthus meridionalis), amelynek korát 500 000 évre becsülik. A 'Kika' névre keresztelt mamut ma a város jelképe, és a Nagykikindai Nemzeti Múzeumban tekinthető meg. A város ökológiai szempontból is egyedülálló, ugyanis itt található a világ legnagyobb erdei fülesbagoly-telelőhelye; minden évben több száz madár gyűlik össze a belváros fáin. Kulturális téren a 'Terra' nemzetközi szobrászati szimpózium tette híressé, ahol 1982 óta művészek monumentális terrakotta szobrokat készítenek a helyi agyagból. Nagykikinda építészetére a klasszicista stílus és a 18. századra jellemző sakktáblaszerű utcahálózat a legjellemzőbb.",
      ro: "Kikinda este un oraș situat în nord-estul Serbiei, în regiunea Banat, chiar lângă granița cu România. Orașul a devenit faimos la nivel mondial în anul 1996, când într-o carieră locală de argilă a fost descoperit scheletul aproape complet al unui mamut (Mammuthus meridionalis), estimat la o vechime de 500.000 de ani. Acest mamut, botezat 'Kika', este astăzi simbolul orașului și piesa centrală a Muzeului Național din Kikinda. O altă caracteristică unică este importanța ecologică a orașului ca fiind cea mai mare așezare din lume pentru iernarea bufnițelor cu urechi lungi (Asio otus); sute de exemplare se adună anual în arborii din centrul orașului. Cultural, Kikinda este cunoscută pentru simpozionul internațional de sculptură 'Terra', unde din 1982 artiștii creează sculpturi monumentale din argila locală. Orașul prezintă o arhitectură clasicistă bine conservată și o rețea stradală rectangulară, tipică așezărilor planificate din secolul al XVIII-lea.",
      en: "Kikinda is a city in northeastern Serbia, located in the Banat region near the border with Romania. The city gained worldwide fame in 1996 when the nearly complete skeleton of a mammoth (Mammuthus meridionalis) was discovered in a local clay pit, estimated to be about 500,000 years old. Named 'Kika,' this mammoth has become the city's icon and is displayed in the National Museum of Kikinda. Another unique feature is the city's ecological status as the world's largest wintering ground for long-eared owls (Asio otus); hundreds of these birds gather annually in the trees of the city center. Culturally, Kikinda is renowned for the 'Terra' International Sculpture Symposium, where artists have been creating monumental terracotta sculptures from local clay since 1982. The city features well-preserved neoclassical architecture and a grid-like street layout typical of 18th-century planned settlements in the region.",
      es: "Kikinda se encuentra en el norte de Serbia, en la provincia de Voivodina. La ciudad es conocida mundialmente por el esqueleto del mamut \"Kika\", descubierto en 1996 en una cantera de arcilla local. Kikinda es también un centro importante para la invernada de búhos chicos y alberga el simposio internacional de escultura Terra.",
      pt: "Kikinda está localizada no norte da Sérvia, na província de Voivodina. A cidade é mundialmente conhecida pelo esqueleto do mamute \"Kika\", descoberto em 1996 numa barreira de argila local. Kikinda é também um centro importante para a invernada de corujas-pequenas e acolhe o simpósio internacional de escultura Terra.",
      fr: "Kikinda se situe au nord de la Serbie, dans la province de Voïvodine. La ville est mondialement connue pour le squelette du mammouth \"Kika\", découvert en 1996 dans une argilière locale. Kikinda est également un centre important pour l'hivernage des hiboux moyen-duc et accueille le symposium international de sculpture Terra.",
    },
    factsAdvanced: {
      de: ["Fundort des Mammuts 'Kika' (500.000 Jahre alt)", "Weltweit größtes Überwinterungsgebiet für Waldohreulen", "Sitz des internationalen Skulpturensymposiums 'Terra'", "Besitzt das älteste erhaltene Dampfbad in der Region", "Berühmt für das jährliche 'Kürbistage'-Festival", "Administrative Zentrum des Nord-Banat Bezirks"],
      hu: ["A 500 000 éves 'Kika' mamut lelőhelye", "A világ legnagyobb erdei fülesbagoly-telelőhelye", "A 'Terra' nemzetközi szobrászati szimpózium otthona", "Itt található a régió legrégebbi fennmaradt gőzfürdője", "Híres az évente megrendezett 'Sütőtök-napokról'", "Az Észak-bánsági körzet közigazgatási központja"],
      ro: ["Locul descoperirii mamutului 'Kika' (vechi de 500.000 ani)", "Cea mai mare zonă de iernare a bufnițelor din lume", "Găzduiește simpozionul internațional de sculptură 'Terra'", "Deține cel mai vechi centru termal funcțional din zonă", "Renumit pentru festivalul anual 'Zilele Dovleacului'", "Centrul administrativ al districtului Banatul de Nord"],
      en: ["Site of the 500,000-year-old 'Kika' mammoth discovery", "World's largest wintering ground for long-eared owls", "Home to the 'Terra' international terracotta symposium", "Features the oldest preserved steam bath in the region", "Famous for the annual 'Pumpkin Days' festival", "Administrative seat of the North Banat District"],
      es: ["Fundación del asentamiento moderno en 1774", "Hallazgo del esqueleto de mamut Kika en 1996", "Más de 500 búhos chicos invernan en el centro", "Sede del simposio de escultura Terra desde 1982", "La Suvača es uno de los últimos molinos de caballos de Europa", "Museo Nacional de Kikinda en la antigua Curia"],
      pt: ["Fundação do assentamento moderno em 1774", "Descoberta do esqueleto do mamute Kika em 1996", "Mais de 500 corujas invernam no centro da cidade", "Sede do simpósio de escultura Terra desde 1982", "A Suvača é um dos últimos moinhos de tração animal da Europa", "Museu Nacional de Kikinda na antiga Cúria"],
      fr: ["Fondation de la colonie moderne en 1774", "Découverte du squelette de mammouth Kika en 1996", "Plus de 500 hiboux moyen-duc hivernent au centre-ville", "Siège du symposium de sculpture Terra depuis 1982", "La Suvača est l'un des derniers moulins à chevaux d'Europe", "Musée national de Kikinda dans l'ancienne curie"],
    },
    image: "/poi-images/RS-003-kikinda.webp",
  },
  {
    id: "RS-003-senta", "sights": {"de": [{"name": "Gradski muzej", "text": "Das Stadtmuseum von Senta zur Geschichte der Region an der Theiß.", "category": "museum", "coords": [20.08977, 45.93184]}, {"name": "Rodna kuća Stevana Sremca", "text": "Das Geburtshaus des berühmten serbischen Schriftstellers Stevan Sremac.", "category": "museum", "coords": [20.092668, 45.930976]}, {"name": "Senćanska plaža", "text": "Ein beliebter Badestrand am Ufer der Theiß in Senta.", "category": "recreational", "coords": [20.091075, 45.935147]}, {"name": "Crkva Svete Male Terezije", "text": "Eine katholische Kirche in Senta, die der Heiligen Theresia gewidmet ist.", "category": "religious", "coords": [20.074313, 45.920354]}, {"name": "Tisa most", "text": "Eine bedeutende Brücke über die Theiß in der Stadt Senta.", "category": "landmark", "coords": [20.093227, 45.934665]}], "hu": [{"name": "Városi múzeum", "text": "Zenta városi múzeuma a Tisza-menti régió történelméről.", "category": "museum", "coords": [20.08977, 45.93184]}, {"name": "Rodna kuća Stevana Sremca", "text": "Stevan Sremac híres szerb író szülőháza Zentán.", "category": "museum", "coords": [20.092668, 45.930976]}, {"name": "zentai strand", "text": "Népszerű strand a Tisza partján Zentán.", "category": "recreational", "coords": [20.091075, 45.935147]}, {"name": "Lisieux-i Kis Szent Teréz-emléktemplom", "text": "Szent Teréznek szentelt katolikus templom Zentán.", "category": "religious", "coords": [20.074313, 45.920354]}, {"name": "Tisza-híd", "text": "Jelentős híd a Tiszán Zenta városában.", "category": "landmark", "coords": [20.093227, 45.934665]}], "ro": [{"name": "Gradski muzej", "text": "Muzeul orașului Senta despre istoria regiunii de pe Tisa.", "category": "museum", "coords": [20.08977, 45.93184]}, {"name": "Rodna kuća Stevana Sremca", "text": "Casa natală a celebrului scriitor sârb Stevan Sremac.", "category": "museum", "coords": [20.092668, 45.930976]}, {"name": "Senćanska plaža", "text": "O plajă populară pe malul râului Tisa în Senta.", "category": "recreational", "coords": [20.091075, 45.935147]}, {"name": "Crkva Svete Male Terezije", "text": "O biserică catolică din Senta dedicată Sfintei Tereza.", "category": "religious", "coords": [20.074313, 45.920354]}, {"name": "Tisa most", "text": "Un pod important peste râul Tisa în orașul Senta.", "category": "landmark", "coords": [20.093227, 45.934665]}], "en": [{"name": "Gradski muzej", "text": "The City Museum of Senta focusing on the history of the Tisa region.", "category": "museum", "coords": [20.08977, 45.93184]}, {"name": "Birth house of Stevan Sremac", "text": "The birth house of the famous Serbian writer Stevan Sremac.", "category": "museum", "coords": [20.092668, 45.930976]}, {"name": "Senćanska plaža", "text": "A popular beach on the banks of the Tisa River in Senta.", "category": "recreational", "coords": [20.091075, 45.935147]}, {"name": "Crkva Svete Male Terezije", "text": "A Catholic church in Senta dedicated to Saint Therese.", "category": "religious", "coords": [20.074313, 45.920354]}, {"name": "Tisa most", "text": "A significant bridge over the Tisa River in the town of Senta.", "category": "landmark", "coords": [20.093227, 45.934665]}]},
    type: "city",
    parent: "RS-003",
    coords: [20.0817, 45.9289],
    name: { de: "Senta", hu: "Zenta", ro: "Senta", en: "Senta" },
    description: {
      de: "Eine historische Stadt an der Theiß, berühmt für die Schlacht bei Zenta im Jahr 1697.",
      hu: "Történelmi város a Tisza partján, amely az 1697-es zentai csatáról híres.",
      ro: "Un oraș istoric pe Tisa, faimos pentru bătălia de la Senta din 1697.",
      en: "A historical city on the Tisa river, famous for the Battle of Senta in 1697.",
      es: "Una ciudad histórica a orillas del Tisza, famosa por la batalla de Zenta en 1697.",
      pt: "Uma cidade histórica às margens do Tisza, famosa pela batalha de Zenta em 1697.",
      fr: "Une ville historique sur la Tisza, célèbre pour la bataille de Zenta en 1697.",
    },
    facts: {
      de: ["Theiß-Ufer", "Schlachtdenkmal", "Prächtiges Rathaus"],
      hu: ["Tisza-part", "Csata emlékműve", "Pompás városháza"],
      ro: ["Malul Tisei", "Monumentul bătăliei", "Primărie splendidă"],
      en: ["Tisa riverbank", "Battle monument", "Splendid city hall"],
      es: ["Orillas del Tisza", "Monumento a la batalla", "Espléndido ayuntamiento"],
      pt: ["Margens do Tisza", "Monumento à batalha", "Esplêndida câmara municipal"],
      fr: ["Rives de la Tisza", "Monument de la bataille", "Hôtel de ville magnifique"],
    }, image: "/poi-images/RS-003-senta.webp",
    descriptionAdvanced: {
      de: "Senta ist eine geschichtsträchtige Stadt am rechten Ufer der Theiß im Norden Serbiens, in der Provinz Vojvodina. Sie ist weltweit bekannt für die 'Schlacht bei Senta', die am 11. September 1697 stattfand. Unter dem Kommando von Prinz Eugen von Savoyen besiegten die kaiserlichen Truppen das osmanische Heer entscheidend, was den Weg für den Frieden von Karlowitz und das Ende der osmanischen Vorherrschaft in Mitteleuropa ebnete. Die Stadt zeichnet sich durch ihre beeindruckende Architektur im ungarischen Secessionsstil aus, wobei das Rathaus (Városháza) mit seinem 50 Meter hohen Turm das markanteste Gebäude ist. Senta ist ein bedeutendes kulturelles Zentrum der ungarischen Minderheit in der Vojvodina und beherbergt zahlreiche Bildungseinrichtungen und Theater. Die Lage am Fluss prägt das wirtschaftliche Leben durch Landwirtschaft und Lebensmittelindustrie sowie die touristische Attraktivität für Angler und Naturfreunde. Die Promenade entlang der Theiß bietet eine malerische Kulisse für Spaziergänge und lokale Festlichkeiten.",
      hu: "Zenta történelmi város a Tisza jobb partján, Szerbia északi részén, a Vajdaságban. A város világszerte a zentai csatáról ismert, amely 1697. szeptember 11-én zajlott le a folyó partján. Savoyai Jenő herceg vezetésével a császári csapatok döntő győzelmet arattak a török sereg felett, ami megnyitotta az utat a karlócai békéhez és az oszmán uralom közép-európai végéhez. A település építészetét a magyar szecesszió határozza meg, legimpozánsabb épülete a Városháza, amelynek 50 méter magas tornyából rálátni az egész környékre. Zenta a vajdasági magyar közösség egyik legfontosabb kulturális és oktatási központja, számos neves iskolával és színházzal. A Tisza-parti fekvés meghatározza a város gazdaságát és idegenforgalmát is, különösen népszerű a horgászok és a vízi sportok kedvelői körében. A folyóparti sétány és az emlékművek méltó módon őrzik a város gazdag történelmi múltját.",
      ro: "Senta este un oraș încărcat de istorie situat pe malul drept al râului Tisa, în nordul Serbiei, provincia Voivodina. Orașul este cunoscut la nivel internațional pentru 'Bătălia de la Senta' din 11 septembrie 1697. Sub comanda prințului Eugen de Savoia, trupele imperiale au învins decisiv armata otomană, victorie care a dus la semnarea Păcii de la Karlowitz și la sfârșitul dominației otomane în Europa Centrală. Arhitectura orașului este dominată de stilul secesiunii maghiare, cea mai spectaculoasă clădire fiind Primăria, cu turnul său de 50 de metri înălțime. Senta este un centru cultural major pentru minoritatea maghiară din Voivodina, adăpostind numeroase instituții de învățământ și teatre. Poziția sa pe Tisa influențează viața economică prin agricultură și industria alimentară, fiind totodată o destinație atractivă pentru pescari și turiști. Promenada de-a lungul râului oferă un cadru pitoresc pentru evenimente locale și recreere.",
      en: "Senta is a historic city on the right bank of the Tisa River in northern Serbia, located in the Vojvodina province. It is globally famous for the Battle of Senta, which took place on September 11, 1697. Under the command of Prince Eugene of Savoy, Imperial forces decisively defeated the Ottoman army, paving the way for the Treaty of Karlowitz and the end of Ottoman rule in Central Europe. The city's architecture is characterized by the Hungarian Secession style, with the Town Hall (Városháza) and its 50-meter tower serving as the most prominent landmark. Senta is a vital cultural and educational hub for the Hungarian community in Vojvodina, hosting numerous schools and theaters. Its riverside location shapes the local economy through agriculture and the food industry, while also attracting anglers and nature enthusiasts. The scenic Tisa promenade provides a beautiful backdrop for leisure and traditional festivals.",
      es: "Senta se encuentra en la orilla derecha del río Tisza, en la provincia de Voivodina. La ciudad alcanzó importancia histórica gracias a la batalla de Zenta en 1697, en la que el príncipe Eugenio de Saboya derrotó a los otomanos. Hoy, Senta es un centro cultural clave para la minoría húngara en Serbia, con una impresionante arquitectura de estilo Secesión.",
      pt: "Senta situa-se na margem direita do rio Tisza, na província de Voivodina. A cidade adquiriu importância histórica através da batalha de Zenta em 1697, na qual o Príncipe Eugénio de Saboia derrotou os otomanos. Hoje, Senta é um importante centro cultural da minoria húngara na Sérvia, com uma impressionante arquitetura de estilo Secessão.",
      fr: "Senta se trouve sur la rive droite de la Tisza, dans la province de Voïvodine. La ville a acquis une importance historique grâce à la bataille de Zenta en 1697, au cours de laquelle le prince Eugène de Savoie a vaincu les Ottomans. Aujourd'hui, Senta est un centre culturel majeur pour la minorité hongroise en Serbie, doté d'une impressionnante architecture Sécession.",
    },
    factsAdvanced: {
      de: ["Ort der entscheidenden Schlacht bei Senta (1697)", "Rathaus im ungarischen Secessionsstil (Baujahr 1914)", "Wichtiges Zentrum der ungarischen Minderheit in Serbien", "Berühmt für das Phänomen der 'Theißblüte' (Eintagsfliegen)", "Das Stadtmuseum beherbergt ein Schlacht-Panorama", "Bedeutender Industriestandort für Zucker und Tabak"],
      hu: ["Az 1697-es döntő jelentőségű zentai csata helyszíne", "Magyar szecessziós városháza 50 méteres toronnyal", "A vajdasági magyar kultúra és oktatás központja", "Híres a tiszavirágzás természeti jelenségéről", "A Városi Múzeumban megtekinthető a csata makettje", "Jelentős cukorgyártási és dohányipari központ"],
      ro: ["Locul bătăliei decisive de la Senta (11 septembrie 1697)", "Primărie în stil Secession maghiar construită în 1914", "Centru cultural major al minorității maghiare", "Cunoscut pentru fenomenul natural 'Înflorirea Tisei'", "Muzeul orașului deține o panoramă a marii bătălii", "Centru industrial important pentru zahăr și tutun"],
      en: ["Site of the decisive Battle of Senta in 1697", "Town Hall in Hungarian Secession style (built 1914)", "Major cultural hub for the Hungarian minority in Serbia", "Famous for the 'Tisa blooming' mayfly phenomenon", "Town Museum features a large model of the battle", "Key industrial center for sugar and tobacco production"],
      es: ["La batalla de Zenta ocurrió el 11 de septiembre de 1697", "El ayuntamiento fue construido en 1914 en estilo Secesión", "Senta fue mencionada documentalmente por primera vez en 1216", "Un gran incendio destruyó partes del centro en 1911", "La ciudad alberga una importante fábrica de azúcar", "El puente sobre el Tisza conecta Senta con el Banato"],
      pt: ["A batalha de Zenta ocorreu em 11 de setembro de 1697", "A câmara municipal foi construída em 1914 em estilo Secessão", "Senta foi mencionada pela primeira vez em documentos em 1216", "Um grande incêndio destruiu partes do centro em 1911", "A cidade abriga uma importante fábrica de açúcar", "A ponte do Tisza liga Senta ao Banato"],
      fr: ["La bataille de Zenta eut lieu le 11 septembre 1697", "L'hôtel de ville fut construit en 1914 en style Sécession", "Senta fut mentionnée pour la première fois en 1216", "Un grand incendie détruisit des parties du centre en 1911", "La ville abrite une importante usine de sucre", "Le pont sur la Tisza relie Senta au Banat"],
    },
  },
  // RS-004 Pcinjski
  {
    id: "RS-004-vranje", "sights": {"de": [{"name": "Narodni muzej", "text": "Das Nationalmuseum in Vranje präsentiert archäologische und ethnologische Schätze der Region.", "category": "museum", "coords": [21.898245, 42.554544]}, {"name": "Istorijski arhiv", "text": "Diese Institution in Vranje bewahrt wichtige historische Dokumente und Archive der Stadt auf.", "category": "museum", "coords": [21.896576, 42.552646]}, {"name": "Hamam", "text": "Dieses Museum in Vranje ist in einem ehemaligen türkischen Bad aus dem 17. Jahrhundert untergebracht.", "category": "museum", "coords": [21.900638, 42.558731]}, {"name": "Pozorište Bora Stanković", "text": "Das nach dem berühmten Schriftsteller benannte Theater ist das kulturelle Zentrum von Vranje.", "category": "cultural", "coords": [21.897341, 42.555858]}, {"name": "Muzej kuća Bore Stankovića", "text": "Ein Gedenkmuseum in Vranje, das dem Leben und Werk des Schriftstellers Bora Stanković gewidmet ist.", "category": "museum", "coords": [21.90021, 42.549286]}, {"name": "Beli most", "text": "Diese osmanische Brücke in Vranje ist als „Brücke der Liebe“ bekannt.", "category": "landmark", "coords": [21.89796, 42.56212]}, {"name": "Kazanđol", "text": "Eine natürliche Attraktion in der Nähe von Vranje, bekannt für ihre malerische Schlucht.", "category": "landmark", "coords": [21.88939, 42.575723]}, {"name": "Bakija Bakić", "text": "Ein Denkmal in Vranje, das dem berühmten Trompetenmeister Bakija Bakić gewidmet ist.", "category": "historical", "coords": [21.90162, 42.560262]}], "hu": [{"name": "Narodni muzej", "text": "A vranjei Nemzeti Múzeum a régió régészeti és néprajzi kincseit mutatja be.", "category": "museum", "coords": [21.898245, 42.554544]}, {"name": "Istorijski arhiv", "text": "Ez a vranjei intézmény a város fontos történelmi dokumentumait és archívumait őrzi.", "category": "museum", "coords": [21.896576, 42.552646]}, {"name": "Hamam", "text": "Ez a vranjei múzeum egy 17. századi egykori török fürdőben kapott helyet.", "category": "museum", "coords": [21.900638, 42.558731]}, {"name": "Pozorište Bora Stanković", "text": "A híres íróról elnevezett színház Vranje kulturális központja.", "category": "cultural", "coords": [21.897341, 42.555858]}, {"name": "Muzej kuća Bore Stankovića", "text": "Emlékmúzeum Vranjéban, amely Bora Stanković író életének és munkásságának állít emléket.", "category": "museum", "coords": [21.90021, 42.549286]}, {"name": "Beli most", "text": "Ez a vranjei oszmán híd a „szerelem hídjaként” ismert.", "category": "landmark", "coords": [21.89796, 42.56212]}, {"name": "Kazanđol", "text": "Vranje közeli természeti látnivaló, amely festői szurdokáról ismert.", "category": "landmark", "coords": [21.88939, 42.575723]}, {"name": "Bakija Bakić", "text": "Emlékmű Vranjéban, amelyet a híres trombitaművésznek, Bakija Bakićnak szenteltek.", "category": "historical", "coords": [21.90162, 42.560262]}], "ro": [{"name": "Narodni muzej", "text": "Muzeul Național din Vranje prezintă comori arheologice și etnologice din regiune.", "category": "museum", "coords": [21.898245, 42.554544]}, {"name": "Istorijski arhiv", "text": "Această instituție din Vranje păstrează documente istorice și arhive importante ale orașului.", "category": "museum", "coords": [21.896576, 42.552646]}, {"name": "Hamam", "text": "Acest muzeu din Vranje este găzduit într-o fostă baie turcească din secolul al XVII-lea.", "category": "museum", "coords": [21.900638, 42.558731]}, {"name": "Pozorište Bora Stanković", "text": "Teatrul numit după celebrul scriitor este centrul cultural din Vranje.", "category": "cultural", "coords": [21.897341, 42.555858]}, {"name": "Muzej kuća Bore Stankovića", "text": "Un muzeu memorial din Vranje, dedicat vieții și operei scriitorului Bora Stanković.", "category": "museum", "coords": [21.90021, 42.549286]}, {"name": "Beli most", "text": "Acest pod otoman din Vranje este cunoscut sub numele de „Podul Iubirii”.", "category": "landmark", "coords": [21.89796, 42.56212]}, {"name": "Kazanđol", "text": "O atracție naturală lângă Vranje, cunoscută pentru defileul său pitoresc.", "category": "landmark", "coords": [21.88939, 42.575723]}, {"name": "Bakija Bakić", "text": "Un monument din Vranje dedicat celebrului maestru al trompetei Bakija Bakić.", "category": "historical", "coords": [21.90162, 42.560262]}], "en": [{"name": "Narodni muzej", "text": "The National Museum in Vranje showcases archaeological and ethnological treasures of the region.", "category": "museum", "coords": [21.898245, 42.554544]}, {"name": "Istorijski arhiv", "text": "An institution in Vranje that preserves significant historical documents and city archives.", "category": "museum", "coords": [21.896576, 42.552646]}, {"name": "Hamam", "text": "This museum in Vranje is housed in a former Turkish bath dating back to the 17th century.", "category": "museum", "coords": [21.900638, 42.558731]}, {"name": "Pozorište Bora Stanković", "text": "The theatre named after the famous writer is the cultural heart of Vranje.", "category": "cultural", "coords": [21.897341, 42.555858]}, {"name": "Museum houses of Bora Stankovic", "text": "A memorial museum in Vranje dedicated to the life and work of the writer Bora Stanković.", "category": "museum", "coords": [21.90021, 42.549286]}, {"name": "Beli most", "text": "This Ottoman-era bridge in Vranje is famously known as the \"Bridge of Love.\"", "category": "landmark", "coords": [21.89796, 42.56212]}, {"name": "Kazandjol", "text": "A natural attraction near Vranje, known for its scenic canyon and river area.", "category": "landmark", "coords": [21.88939, 42.575723]}, {"name": "Bakija Bakić", "text": "A monument in Vranje dedicated to the famous trumpet master Bakija Bakić.", "category": "historical", "coords": [21.90162, 42.560262]}]},
    type: "city",
    parent: "RS-004",
    coords: [21.8958, 42.5544],
    name: { de: "Vranje", hu: "Vranje", ro: "Vranje", en: "Vranje" },
    description: {
      de: "Ein kulturelles Zentrum in Südserbien mit orientalischer Architektur und reicher Musiktradition.",
      hu: "Dél-szerbiai kulturális központ, amely keleti építészetéről és gazdag zenei hagyományairól ismert.",
      ro: "Un centru cultural în sudul Serbiei, cu arhitectură orientală și o bogată tradiție muzicală.",
      en: "A cultural center in southern Serbia with oriental architecture and rich music tradition.",
      es: "Un centro cultural del sur de Serbia con arquitectura oriental y una rica tradición musical.",
      pt: "Um centro cultural no sul da Sérvia com arquitetura oriental e uma rica tradição musical.",
      fr: "Un centre culturel du sud de la Serbie doté d'une architecture orientale et d'une riche tradition musicale.",
    },
    facts: {
      de: ["Beli Most (Weiße Brücke)", "Pašin Konak", "Geburtsort von Bora Stanković"],
      hu: ["Beli Most (Fehér híd)", "Pašin Konak", "Bora Stanković szülőhelye"],
      ro: ["Beli Most (Podul Alb)", "Pašin Konak", "Locul de naștere al lui Bora Stanković"],
      en: ["Beli Most (White Bridge)", "Pasha's Residence", "Birthplace of Bora Stanković"],
      es: ["Beli Most (Puente Blanco)", "Pašin Konak", "Lugar de nacimiento de Bora Stanković"],
      pt: ["Beli Most (Ponte Branca)", "Pašin Konak", "Local de nascimento de Bora Stanković"],
      fr: ["Beli Most (Pont Blanc)", "Pašin Konak", "Lieu de naissance de Bora Stanković"],
    },
    descriptionAdvanced: {
      de: "Vranje liegt im äußersten Süden Serbiens und dient als administratives Zentrum des Bezirks Pčinja. Die Stadt wurde erstmals im Jahr 1093 urkundlich erwähnt und war über Jahrhunderte ein strategisch wichtiger Punkt unter osmanischer Herrschaft, was die lokale Architektur bis heute nachhaltig prägt. Ein bedeutendes Wahrzeichen ist die Weiße Brücke (Beli most) aus dem Jahr 1844, die als Symbol für eine tragische Liebesgeschichte aus der Türkenzeit gilt und heute unter Denkmalschutz steht. Vranje ist zudem weit über die Landesgrenzen hinaus als Geburtsstadt des bedeutenden Realisten Borisav Stanković bekannt, dessen literarische Werke tief in der Folklore und den gesellschaftlichen Traditionen dieser Grenzregion verwurzelt sind. Die wirtschaftliche Entwicklung der Stadt war lange Zeit von der florierenden Textil- und Tabakindustrie geprägt, während heute moderne Dienstleistungen und Kleinbetriebe an Bedeutung gewinnen. Geografisch erstreckt sich die Stadt im fruchtbaren Vranje-Becken, umgeben von den markanten Erhebungen der Gebirge Pljačkovica und Krstilovica, was ihr ein mildes kontinentales Klima verleiht.",
      hu: "Vranje Szerbia legdélebbi részén található, a Pčinja körzet közigazgatási és kulturális központja. A várost először 1093-ban említik bizánci források, és évszázadokon át kulcsfontosságú stratégiai pont volt az Oszmán Birodalom határvidékén, ami a mai napig meghatározza sajátos építészeti képét és hangulatát. Egyik legismertebb műemléke az 1844-ben épült Fehér híd (Beli most), amely egy oszmán korból származó tragikus szerelmi történetnek állít emléket, és a város egyik fő szimbóluma. Vranje Borisav Stanković író szülővárosaként is világhírűvé vált, akinek realista regényei és drámái hűen tükrözik a régió gazdag népzenéjét, népszokásait és a balkáni mentalitást. A város gazdasági alapjait évtizedekig a fejlett textil- és dohányipar képezte, napjainkban pedig a kereskedelem és a szolgáltatások fejlődése figyelhető meg. Földrajzi elhelyezkedése a vranjei medencében, a Pljačkovica és Krstilovica hegyek védelmében, kedvező éghajlati feltételeket biztosít a mezőgazdaság és a lakosság számára egyaránt.",
      ro: "Vranje este situat în extremitatea sudică a Serbiei, servind drept centru administrativ și cultural al districtului Pčinja. Orașul a fost menționat pentru prima dată în documente istorice în anul 1093 și a reprezentat un punct strategic vital sub dominația otomană timp de mai bine de patru secole, fapt care a influențat arhitectura locală într-un mod inconfundabil. Un monument emblematic este Podul Alb (Beli most), ridicat în anul 1844, care este asociat cu o legendă despre o poveste de dragoste tragică din epoca turcească și rămâne un punct de atracție turistică major. Vranje este recunoscut pe scară largă ca orașul natal al scriitorului Borisav Stanković, ale cărui opere literare sunt profund ancorate în folclorul, muzica tradițională și viața socială a acestei regiuni balcanice. Din punct de vedere economic, orașul a depins mult timp de industria textilă și de prelucrare a tutunului, trecând în prezent printr-un proces de modernizare a sectorului serviciilor. Cadrul geografic este definit de depresiunea Vranje, fiind înconjurat de masivele montane Pljačkovica și Krstilovica, oferind un peisaj pitoresc la granița cu Macedonia de Nord.",
      en: "Vranje is situated in the far south of Serbia and serves as the administrative and cultural center of the Pčinja District. The city was first mentioned in historical records in 1093 and remained a key strategic location under Ottoman administration for centuries, which significantly shaped its unique architectural landscape and local customs. A prominent landmark is the White Bridge (Beli most), constructed in 1844, which commemorates a tragic love story from the Turkish period and has become the primary symbol of the city. Vranje is also internationally renowned as the birthplace of the great realist writer Borisav Stanković, whose literary works vividly capture the region's folklore, traditional music, and complex social structures. Historically, the city's economy was built on a strong textile and tobacco industry, whereas modern development now focuses on services and small-scale manufacturing. Geographically, it is nestled within the Vranje Basin at an average altitude of 480 meters, sheltered by the Pljačkovica and Krstilovica mountains, providing a pleasant climate near the North Macedonian border.",
      es: "Vranje es el centro económico y cultural del sur de Serbia, cerca de la frontera con Macedonia del Norte. La ciudad es conocida por su rico legado otomano, que se refleja en la arquitectura y la música local. Vranje fue el hogar del famoso escritor Borisav Stanković, cuya obra describe la vida de la ciudad en el siglo XIX.",
      pt: "Vranje é o centro económico e cultural do sul da Sérvia, perto da fronteira com a Macedónia do Norte. A cidade é conhecida pela sua rica herança otomana, que se reflete na arquitetura e na música local. Vranje foi a casa do famoso escritor Borisav Stanković, cuja obra descreve a vida da cidade no século XIX.",
      fr: "Vranje est le centre économique et culturel du sud de la Serbie, près de la frontière avec la Macédoine du Nord. La ville est connue pour son riche héritage ottoman, qui se reflète dans l'architecture et la musique locale. Vranje fut la demeure du célèbre écrivain Borisav Stanković, dont l'œuvre décrit la vie de la ville au XIXe siècle.",
    },
    factsAdvanced: {
      de: ["Erstmals 1093 in byzantinischen Quellen erwähnt.", "Befreiung von der osmanischen Herrschaft im Jahr 1878.", "Die Weiße Brücke (Beli most) wurde 1844 erbaut.", "Geburtsort des berühmten Schriftstellers Borisav Stanković (1876).", "Das Haus des Paschas aus dem Jahr 1765 beherbergt das Nationalmuseum.", "Die Stadt liegt auf einer durchschnittlichen Höhe von 480 Metern."],
      hu: ["Először 1093-ban említik bizánci forrásmunkák.", "Az oszmán uralom alóli felszabadulás éve 1878.", "A híres Fehér híd (Beli most) 1844-ben épült.", "Itt született a neves író, Borisav Stanković 1876-ban.", "Az 1765-ös építésű Pasa-ház ma a Nemzeti Múzeumnak ad otthont.", "A város átlagosan 480 méteres tengerszint feletti magasságban fekszik."],
      ro: ["Menționat pentru prima dată în 1093 în surse bizantine.", "Eliberarea de sub dominația otomană a avut loc în 1878.", "Podul Alb (Beli most) a fost construit în anul 1844.", "Orașul natal al celebrului scriitor Borisav Stanković (1876).", "Casa Pașei, datând din 1765, găzduiește Muzeul Național.", "Orașul este situat la o altitudine medie de 480 de metri."],
      en: ["First mentioned in 1093 in Byzantine historical sources.", "Liberated from Ottoman rule in the year 1878.", "The famous White Bridge (Beli most) was built in 1844.", "Birthplace of the renowned writer Borisav Stanković (1876).", "The Pasha's House, dating from 1765, houses the National Museum.", "The city is situated at an average altitude of 480 meters."],
      es: ["El Puente Blanco (Beli most) fue erigido en 1844", "El Amam es un baño turco del siglo XVII", "Vranje fue mencionada por escrito por primera vez en 1093", "Borisav Stanković nació aquí en el año 1876", "La fortaleza Markovo Kale data del siglo XIV", "Vranje se encuentra a unos 350 kilómetros al sur de Belgrado"],
      pt: ["A Ponte Branca (Beli most) foi erguida em 1844", "O Amam é um banho turco do século XVII", "Vranje foi mencionada pela primeira vez por escrito em 1093", "Borisav Stanković nasceu aqui em 1876", "A fortaleza Markovo Kale data do século XIV", "Vranje situa-se a cerca de 350 quilómetros a sul de Belgrado"],
      fr: ["Le Pont Blanc (Beli most) fut érigé en 1844", "L'Amam est un bain turc du XVIIe siècle", "Vranje fut mentionnée par écrit pour la première fois en 1093", "Borisav Stanković est né ici en 1876", "La forteresse Markovo Kale date du XIVe siècle", "Vranje se situe à environ 350 kilomètres au sud de Belgrade"],
    },
    image: "/poi-images/RS-004-vranje.webp",
  },
  {
    id: "RS-004-prohor-pcinjski", "sights": {
      "de": [
            {
                  "name": "Манастир Прохор Пчињски",
                  "text": "Ein serbisch-orthodoxes Kloster aus dem 11. Jahrhundert in der Nähe der Grenze zu Nordmazedonien.",
                  "category": "landmark",
                  "coords": [
                        21.895084,
                        42.329493
                  ]
            },
            {
                  "name": "Kozjak Mountain",
                  "text": "Eine Gebirgsregion in der Nähe des Klosters Prohor Pčinjski, bekannt für ihre Naturschönheit.",
                  "category": "landmark",
                  "coords": [
                        21.932035,
                        42.307577
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Манастир Прохор Пчињски",
                  "text": "11. századi szerb ortodox kolostor az észak-macedón határ közelében.",
                  "category": "landmark",
                  "coords": [
                        21.895084,
                        42.329493
                  ]
            },
            {
                  "name": "Kozjak Mountain",
                  "text": "Hegyi régió a Prohor Pčinjski-kolostor közelében, amely természeti szépségéről ismert.",
                  "category": "landmark",
                  "coords": [
                        21.932035,
                        42.307577
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Манастир Прохор Пчињски",
                  "text": "O mănăstire ortodoxă sârbă din secolul al XI-lea, situată lângă granița cu Macedonia de Nord.",
                  "category": "landmark",
                  "coords": [
                        21.895084,
                        42.329493
                  ]
            },
            {
                  "name": "Kozjak Mountain",
                  "text": "O regiune muntoasă de lângă mănăstirea Prohor Pčinjski, cunoscută pentru frumusețea sa naturală.",
                  "category": "landmark",
                  "coords": [
                        21.932035,
                        42.307577
                  ]
            }
      ],
      "en": [
            {
                  "name": "Prohor Pčinjski Monastery",
                  "text": "An 11th-century Serbian Orthodox monastery located near the border with North Macedonia.",
                  "category": "landmark",
                  "coords": [
                        21.895084,
                        42.329493
                  ]
            },
            {
                  "name": "Kozjak Mountain",
                  "text": "A mountain region near the Prohor Pčinjski Monastery known for its natural beauty.",
                  "category": "landmark",
                  "coords": [
                        21.932035,
                        42.307577
                  ]
            }
      ]
},
    type: "historical",
    parent: "RS-004",
    coords: [21.8950, 42.3294],
    name: { de: "Kloster Prohor Pčinjski", hu: "Prohor Pčinjski kolostor", ro: "Mănăstirea Prohor Pčinjski", en: "Prohor Pčinjski Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Kloster aus dem 11. Jahrhundert in der Nähe der Grenze zu Nordmazedonien.",
      hu: "11. századi szerb ortodox kolostor az észak-macedón határ közelében.",
      ro: "O mănăstire ortodoxă sârbă din secolul al XI-lea, situată lângă granița cu Macedonia de Nord.",
      en: "An 11th-century Serbian Orthodox monastery located near the border with North Macedonia.",
      es: "Un monasterio ortodoxo serbio del siglo XI situado cerca de la frontera con Macedonia del Norte.",
      pt: "Um mosteiro ortodoxo sérvio do século XI situado perto da fronteira com a Macedónia do Norte.",
      fr: "Un monastère orthodoxe serbe du XIe siècle situé près de la frontière avec la Macédoine du Nord.",
    },
    facts: {
      de: ["Gegründet von Kaiser Romanos IV.", "Geistiges Zentrum", "Inmitten unberührter Natur"],
      hu: ["IV. Rómanosz császár alapította", "Szellemi központ", "Érintetlen természetben"],
      ro: ["Fondată de împăratul Romanos al IV-lea", "Centru spiritual", "În mijlocul naturii virgine"],
      en: ["Founded by Emperor Romanos IV", "Spiritual center", "In untouched nature"],
      es: ["Fundado por el emperador Romano IV", "Centro espiritual", "En plena naturaleza virgen"],
      pt: ["Fundado pelo imperador Romano IV", "Centro espiritual", "Em plena natureza virgem"],
      fr: ["Fondé par l'empereur Romain IV", "Centre spirituel", "Au cœur d'une nature intacte"],
    }, image: "/poi-images/RS-004-prohor-pcinjski.webp",
    descriptionAdvanced: {
      de: "Das Kloster Prohor Pčinjski befindet sich im äußersten Süden Serbiens an den bewaldeten Hängen des Kozjak-Gebirges, unmittelbar an der Grenze zu Nordmazedonien. Gegründet wurde es im 11. Jahrhundert, zwischen 1067 und 1071, vom byzantinischen Kaiser Romanos IV. Diogenes zu Ehren des Heiligen Prohor, eines lokalen Eremiten. Im Laufe der Jahrhunderte erlebte das Kloster zahlreiche Zerstörungen und Wiederaufbauten, wobei der serbische König Milutin im 14. Jahrhundert bedeutende Erweiterungen vornahm. Das Klosterareal besteht aus mehreren Kirchengebäuden, Wohnhäusern und einer Wassermühle, die eine harmonische Einheit mittelalterlicher Sakralarchitektur bilden. Neben seiner religiösen Bedeutung spielte das Kloster auch eine wichtige politische Rolle in der neueren Geschichte, da hier 1944 die erste Sitzung der ASNOM stattfand, die den Grundstein für die Republik Mazedonien legte. Heute ist Prohor Pčinjski ein bedeutendes geistliches Zentrum der serbisch-orthodoxen Kirche und ein geschütztes Kulturdenkmal von außerordentlicher Bedeutung, das jährlich zahlreiche Pilger und Touristen anzieht.",
      hu: "A Prohor Pčinjski-kolostor Szerbia legdélebbi részén, a Kozjak-hegység erdős lankáin található, közvetlenül az észak-macedón határ mellett. A kolostort a 11. században, 1067 és 1071 között alapította IV. Rómanosz Diogenész bizánci császár Szent Prohor tiszteletére, aki a környéken élt remeteként. Az évszázadok során az épületegyüttes számos pusztításon és újjáépítésen ment keresztül, jelentősebb bővítéseit Milutin szerb király végeztette el a 14. század elején. A kolostorudvar több templomból, lakóépületből és egy régi vízimalomból áll, amelyek a középkori szerb szakrális építészet és a későbbi stílusok ötvözetét mutatják be. Vallási jelentősége mellett a helyszín politikatörténeti szempontból is kiemelkedő, mivel 1944-ben itt tartották az ASNOM első ülését, amely megalapozta a mai Macedónia államiságát. Napjainkban a kolostor a Szerb Ortodox Egyház egyik legfontosabb szellemi központja, amely védett műemlékként őrzi a régió vallási és kulturális örökségét a festői Pčinja folyó völgyében.",
      ro: "Mănăstirea Prohor Pčinjski este situată în sudul extrem al Serbiei, pe pantele împădurite ale muntelui Kozjak, chiar lângă granița cu Macedonia de Nord. A fost întemeiată în secolul al XI-lea, între anii 1067 și 1071, de către împăratul bizantin Roman al IV-lea Diogenes, în onoarea Sfântului Prohor, un pustnic local care a trăit în aceste locuri. De-a lungul secolelor, mănăstirea a suferit numeroase distrugeri și reconstrucții, regele sârb Milutin realizând extinderi semnificative în secolul al XIV-lea. Ansamblul monahal cuprinde mai multe biserici, chilii și o moară de apă veche, formând o unitate armonioasă de arhitectură sacră medievală și elemente de artă bizantină. Pe lângă importanța sa religioasă, mănăstirea a jucat un rol politic major în istoria modernă, fiind locul unde în 1944 a avut loc prima sesiune a ASNOM, care a pus bazele Republicii Macedonia. Astăzi, Prohor Pčinjski rămâne un centru spiritual vital al Bisericii Ortodoxe Sârbe și un monument cultural protejat, atrăgând anual mii de pelerini și vizitatori datorită frumuseții sale și a cadrului natural deosebit.",
      en: "The Prohor Pčinjski Monastery is located in the southernmost part of Serbia, nestled on the forested slopes of Mount Kozjak near the border with North Macedonia. It was founded in the 11th century, specifically between 1067 and 1071, by the Byzantine Emperor Romanos IV Diogenes in honor of Saint Prohor, a local hermit who practiced asceticism in nearby caves. Throughout the centuries, the monastery underwent numerous destructions and renovations, with major expansions carried out by the Serbian King Milutin in the early 14th century. The monastic complex consists of several churches, residential quarters, and an old watermill, representing a blend of medieval Byzantine and Serbian sacred architecture. Beyond its religious significance, the site played a crucial role in modern political history as the venue for the first session of ASNOM in 1944, which laid the foundations for the Republic of Macedonia. Today, Prohor Pčinjski stands as a major spiritual center of the Serbian Orthodox Church and a protected cultural monument, attracting many pilgrims and tourists to the scenic valley of the Pčinja River.",
      es: "El monasterio de Prohor Pčinjski se encuentra en las laderas de la montaña Kozjak, a orillas del río Pčinja. Fue fundado en el siglo XI por el emperador bizantino Romano IV Diógenes y está dedicado a San Prohor. El monasterio desempeñó un papel fundamental en la historia de la región y alberga importantes reliquias.",
      pt: "O mosteiro de Prohor Pčinjski está localizado nas encostas da montanha Kozjak, às margens do rio Pčinja. Foi fundado no século XI pelo imperador bizantino Romano IV Diógenes e é dedicado a São Prohor. O mosteiro desempenhou um papel importante na história da região e abriga relíquias significativas.",
      fr: "Le monastère Prohor Pčinjski se trouve sur les pentes de la montagne Kozjak, au bord de la rivière Pčinja. Il fut fondé au XIe siècle par l'empereur byzantin Romain IV Diogène et est dédié à saint Prohor. Le monastère a joué un rôle important dans l'histoire de la région et abrite des reliques majeures.",
    },
    factsAdvanced: {
      de: ["Gegründet zwischen 1067 und 1071 von Romanos IV. Diogenes.", "Der serbische König Milutin renovierte das Kloster im 14. Jahrhundert.", "Erste Sitzung der ASNOM fand hier am 2. August 1944 statt.", "Das Kloster liegt in unmittelbarer Nähe zum Fluss Pčinja.", "Beherbergt eine bedeutende Sammlung spätmittelalterlicher Ikonen.", "Das Kozjak-Gebirge bietet Schutz und Abgeschiedenheit für die Anlage."],
      hu: ["IV. Rómanosz Diogenész alapította 1067 és 1071 között.", "Milutin szerb király a 14. században jelentősen felújíttatta.", "Az ASNOM első ülésének helyszíne 1944. augusztus 2-án.", "A kolostor közvetlenül a Pčinja folyó völgyében fekszik.", "Késő középkori ikonokból álló jelentős gyűjteménnyel rendelkezik.", "A Kozjak-hegység vonulatai természetes védelmet nyújtanak számára."],
      ro: ["Întemeiată între 1067 și 1071 de împăratul Roman al IV-lea Diogenes.", "Regele sârb Milutin a renovat mănăstirea în secolul al XIV-lea.", "Prima sesiune a ASNOM a avut loc aici la 2 august 1944.", "Mănăstirea este situată în imediata apropiere a râului Pčinja.", "Adăpostește o colecție valoroasă de icoane din epoca medievală târzie.", "Munții Kozjak oferă un cadru natural izolat și pitoresc ansamblului."],
      en: ["Founded between 1067 and 1071 by Emperor Romanos IV Diogenes.", "Serbian King Milutin renovated the monastery in the 14th century.", "The first session of ASNOM was held here on August 2, 1944.", "The monastery is located in direct proximity to the Pčinja River.", "It houses a significant collection of late medieval icons.", "The Kozjak mountain range provides a secluded and scenic backdrop."],
      es: ["El monasterio fue fundado hacia el año 1070", "El rey Milutin hizo renovar el monasterio en el siglo XIV", "Se encuentra justo en la frontera con Macedonia del Norte", "La primera sesión de la ASNOM tuvo lugar aquí en 1944", "El monasterio alberga las reliquias de San Prohor", "Ha servido como centro espiritual durante siglos"],
      pt: ["O mosteiro foi fundado por volta do ano 1070", "O rei Milutin mandou renovar o mosteiro no século XIV", "Está localizado mesmo na fronteira com a Macedónia do Norte", "A primeira sessão da ASNOM teve lugar aqui em 1944", "O mosteiro abriga as relíquias de São Prohor", "Serve como centro espiritual há séculos"],
      fr: ["Le monastère fut fondé vers l'an 1070", "Le roi Milutin fit rénover le monastère au XIVe siècle", "Il se trouve juste à la frontière avec la Macédoine du Nord", "La première session de l'ASNOM s'y est tenue en 1944", "Le monastère abrite les reliques de saint Prohor", "Il sert de centre spirituel depuis des siècles"],
    },
  },
  // RS-005 Borski
  {
    id: "RS-005-bor", "sights": {"de": [{"name": "Praistorijsko naselje Kučajna", "text": "Die prähistorische Siedlung Kučajna ist eine archäologische Stätte, die Einblicke in die frühe Besiedlung der Region Bor bietet.", "category": "historical", "coords": [22.090029, 44.059398]}, {"name": "Lokalitet Kmpije – Velike livade", "text": "Kmpije - Velike livade ist eine archäologische Stätte, die historische Überreste in Bor bewahrt.", "category": "historical", "coords": [22.106895, 44.064393]}, {"name": "Zoo vrt Bor", "text": "Der Zoo Bor ist eine Attraktion, die der Öffentlichkeit eine Vielzahl von Tierarten zeigt.", "category": "family", "coords": [22.09661, 44.058333]}, {"name": "Trg oslobođenja", "text": "Der Platz der Befreiung verfügt über einen zentralen monumentalen Raum in der Stadt Bor.", "category": "historical", "coords": [22.099823, 44.078]}, {"name": "Damper", "text": "Das Damper-Denkmal ist eine industrielle Hommage, die mit der Bergbaugeschichte von Bor verbunden ist.", "category": "historical", "coords": [22.09991, 44.062923]}, {"name": "Površinski kop", "text": "Dieser Aussichtspunkt bietet ein beeindruckendes Panorama auf den ausgedehnten Tagebau in Bor.", "category": "natural", "coords": [22.094338, 44.09031]}, {"name": "Portreti", "text": "Portreti ist ein lokaler Galerieraum in Bor, der den bildenden Künsten gewidmet ist.", "category": "museum", "coords": [22.099612, 44.073034]}, {"name": "Spomenik Miklošu Radnotiju", "text": "Die Miklós-Radnóti-Statue ehrt den bedeutenden ungarischen Dichter, der Zeit in einem Zwangsarbeitslager in Bor verbrachte.", "category": "historical", "coords": [22.102527, 44.05576]}, {"name": "Park „Raketa”", "text": "Rocket Park ist ein Spielplatz in City Bor, der Raum zum Spielen für Kinder bietet.", "category": "family", "coords": [22.099736, 44.070331]}], "hu": [{"name": "Praistorijsko naselje Kučajna", "text": "A Kučajna őskori település egy régészeti lelőhely, amely bepillantást enged Bor környékének korai betelepülésébe.", "category": "historical", "coords": [22.090029, 44.059398]}, {"name": "Lokalitet Kmpije – Velike livade", "text": "A Kmpije - Velike livade egy régészeti lelőhely, amely történelmi maradványokat őriz Borban.", "category": "historical", "coords": [22.106895, 44.064393]}, {"name": "Zoo vrt Bor", "text": "A Bori Állatkert egy látványosság, amely különféle állatfajokat mutat be a közönségnek.", "category": "family", "coords": [22.09661, 44.058333]}, {"name": "Trg oslobođenja", "text": "A Felszabadulás tere egy központi monumentális tér Bor városában.", "category": "historical", "coords": [22.099823, 44.078]}, {"name": "Damper", "text": "A Dömper emlékmű Bor bányászati történelméhez kapcsolódó ipari tiszteletadás.", "category": "historical", "coords": [22.09991, 44.062923]}, {"name": "Površinski kop", "text": "Ez a kilátó lenyűgöző panorámát nyújt a kiterjedt bori külszíni bányára.", "category": "natural", "coords": [22.094338, 44.09031]}, {"name": "Portreti", "text": "A Portreti egy helyi galéria Borban, amely a vizuális művészeteknek szenteli magát.", "category": "museum", "coords": [22.099612, 44.073034]}, {"name": "Spomenik Miklošu Radnotiju", "text": "Radnóti Miklós szobra annak a neves magyar költőnek állít emléket, aki a bori kényszermunkatáborban raboskodott.", "category": "historical", "coords": [22.102527, 44.05576]}, {"name": "Park „Raketa”", "text": "A Rocket Park egy játszótér City Bor városában, amely játéklehetőséget kínál a gyerekeknek.", "category": "family", "coords": [22.099736, 44.070331]}], "ro": [{"name": "Praistorijsko naselje Kučajna", "text": "Așezarea preistorică Kučajna este un sit arheologic care oferă informații despre locuirea timpurie în zona Bor.", "category": "historical", "coords": [22.090029, 44.059398]}, {"name": "Lokalitet Kmpije – Velike livade", "text": "Kmpije - Velike livade este un sit arheologic care păstrează vestigii istorice în Bor.", "category": "historical", "coords": [22.106895, 44.064393]}, {"name": "Zoo vrt Bor", "text": "Grădina Zoologică din Bor este o atracție care expune publicului o varietate de specii de animale.", "category": "family", "coords": [22.09661, 44.058333]}, {"name": "Trg oslobođenja", "text": "Piața Eliberării prezintă un spațiu monumental central în orașul Bor.", "category": "historical", "coords": [22.099823, 44.078]}, {"name": "Damper", "text": "Monumentul Basculantei este un tribut industrial legat de istoria minieră a orașului Bor.", "category": "historical", "coords": [22.09991, 44.062923]}, {"name": "Površinski kop", "text": "Acest punct de belvedere oferă o panoramă impresionantă a vastei mine la suprafață din Bor.", "category": "natural", "coords": [22.094338, 44.09031]}, {"name": "Portreti", "text": "Portreti este un spațiu de galerie local din Bor dedicat artelor vizuale.", "category": "museum", "coords": [22.099612, 44.073034]}, {"name": "Spomenik Miklošu Radnotiju", "text": "Statuia lui Miklós Radnóti îl onorează pe notabilul poet maghiar care a petrecut timp într-un lagăr de muncă forțată din Bor.", "category": "historical", "coords": [22.102527, 44.05576]}, {"name": "Park „Raketa”", "text": "Rocket Park este un loc de joacă în City Bor, care oferă spațiu de joacă pentru copii.", "category": "family", "coords": [22.099736, 44.070331]}], "en": [{"name": "Praistorijsko naselje Kučajna", "text": "The Prehistoric settlement Kučajna is an archaeological site offering insights into early habitation in the Bor area.", "category": "historical", "coords": [22.090029, 44.059398]}, {"name": "Lokalitet Kmpije – Velike livade", "text": "Kmpije - Velike livade is an archaeological site preserving historical remnants in Bor.", "category": "historical", "coords": [22.106895, 44.064393]}, {"name": "Zoo vrt Bor", "text": "The Bor Zoo is an attraction displaying a variety of animal species to the public.", "category": "family", "coords": [22.09661, 44.058333]}, {"name": "Trg oslobođenja", "text": "Liberation Square features a central monumental space in the city of Bor.", "category": "historical", "coords": [22.099823, 44.078]}, {"name": "Damper", "text": "The Damper monument is an industrial tribute related to the mining history of Bor.", "category": "historical", "coords": [22.09991, 44.062923]}, {"name": "Površinski kop", "text": "This viewpoint offers a striking panorama of the expansive open-pit mine in Bor.", "category": "natural", "coords": [22.094338, 44.09031]}, {"name": "Portreti", "text": "Portreti is a local gallery space in Bor dedicated to visual arts.", "category": "museum", "coords": [22.099612, 44.073034]}, {"name": "Miklós Radnóti Statue", "text": "The Miklós Radnóti Statue honors the notable Hungarian poet who spent time in a forced labor camp in Bor.", "category": "historical", "coords": [22.102527, 44.05576]}, {"name": "Rocket Park", "text": "Rocket Park is a playground in City Bor offering space for children to play.", "category": "family", "coords": [22.099736, 44.070331]}]},
    type: "city",
    parent: "RS-005",
    coords: [22.1000, 44.0667],
    name: { de: "Bor", hu: "Bor", ro: "Bor", en: "Bor" },
    description: {
      de: "Ein wichtiges Bergbau- und Industriezentrum im Osten Serbiens, bekannt für seine Kupferminen.",
      hu: "Fontos bányászati és ipari központ Kelet-Szerbiában, rézbányáiról ismert.",
      ro: "Un important centru minier și industrial în estul Serbiei, cunoscut pentru minele sale de cupru.",
      en: "An important mining and industrial center in eastern Serbia, known for its copper mines.",
      es: "Un importante centro minero e industrial en el este de Serbia, conocido por sus minas de cobre.",
      pt: "Um importante centro mineiro e industrial no leste da Sérvia, conhecido pelas suas minas de cobre.",
      fr: "Un important centre minier et industriel de l'est de la Serbie, connu pour ses mines de cuivre.",
    },
    facts: {
      de: ["Kupfertagebau", "Industrieerbe", "Nahegelegener Bor-See"],
      hu: ["Külszíni rézbánya", "Ipari örökség", "Közeli Bori-tó"],
      ro: ["Exploatare de cupru în carieră", "Moștenire industrială", "Lacul Bor din apropiere"],
      en: ["Copper open-pit mine", "Industrial heritage", "Nearby Lake Bor"],
      es: ["Minería de cobre a cielo abierto", "Legado industrial", "Cercano lago de Bor"],
      pt: ["Mineração de cobre a céu aberto", "Herança industrial", "Lago Bor nas proximidades"],
      fr: ["Mine de cuivre à ciel ouvert", "Héritage industriel", "Lac de Bor à proximité"],
    },
    descriptionAdvanced: {
      de: "Bor ist eine bedeutende Industriestadt im Osten Serbiens und das Verwaltungszentrum des gleichnamigen Bezirks. Die Geschichte der Stadt ist untrennbar mit dem Bergbau verbunden, der im Jahr 1903 mit der Entdeckung reicher Kupfervorkommen durch den Industriellen George Weifert begann. In der Folgezeit wurde Bor zu einem der größten Kupferbergbau- und Schmelzhüttenzentren in Europa ausgebaut, wobei französische Investoren maßgeblich an der frühen Entwicklung beteiligt waren. Diese internationale Präsenz hinterließ Spuren in der Stadtplanung, insbesondere in der sogenannten Französischen Kolonie mit ihrer charakteristischen Architektur der 1930er Jahre. Heute prägen gewaltige Tagebaue und Industrieanlagen das Stadtbild, während die Region gleichzeitig über bedeutende Naturschätze verfügt. Unweit der Stadt liegt der künstlich angelegte Bor-See, der in den 1950er Jahren für industrielle Zwecke geschaffen wurde und heute als beliebtes Erholungsgebiet dient. Bor bleibt ein wirtschaftlicher Motor der Region, der sich zunehmend den Herausforderungen der ökologischen Transformation und Modernisierung stellt.",
      hu: "Bor Kelet-Szerbia egyik legfontosabb ipari városa, a hasonló nevű körzet közigazgatási központja. A város történelme elválaszthatatlanul összefonódott a bányászattal, amely 1903-ban kezdődött, miután George Weifert iparmágnás gazdag rézlelőhelyeket fedezett fel a területen. Bor ezt követően Európa egyik legnagyobb rézbányászati és kohászati központjává fejlődött, a korai fejlesztésekben pedig jelentős szerepet játszottak a francia befektetők is. Ez a nemzetközi jelenlét nyomot hagyott a város szerkezetén is, különösen az úgynevezett Francia kolónia városrészben, amely az 1930-as évek jellegzetes építészeti stílusát őrzi. Ma hatalmas külszíni fejtések és monumentális ipari létesítmények határozzák meg a látképet, miközben a régió jelentős természeti értékekkel is büszkélkedhet. A város közelében található a mesterségesen létrehozott Bori-tó, amelyet az 1950-es években alakítottak ki ipari célokra, de mára kedvelt üdülőhellyé vált. Bor továbbra is a régió gazdasági motorja, amely napjainkban a környezetvédelmi átalakulás és a technológiai modernizáció kihívásaival néz szembe.",
      ro: "Bor este un important oraș industrial din estul Serbiei, fiind centrul administrativ al districtului cu același nume. Istoria orașului este indisolubil legată de activitatea minieră, care a început în anul 1903, odată cu descoperirea unor zăcăminte bogate de cupru de către industriașul George Weifert. Ulterior, Bor s-a dezvoltat devenind unul dintre cele mai mari centre de extracție și topire a cuprului din Europa, investitorii francezi având un rol crucial în primele etape de dezvoltare. Această prezență internațională a lăsat urme vizibile în planificarea urbană, în special în așa-numita Colonie Franceză, care păstrează arhitectura caracteristică anilor 1930. Astăzi, peisajul urban este dominat de exploatări miniere de suprafață și instalații industriale masive, deși regiunea deține și resurse naturale remarcabile. În apropierea orașului se află lacul Bor, creat artificial în anii 1950 pentru nevoi industriale, dar care servește astăzi ca o zonă populară de agrement. Bor rămâne un motor economic vital al regiunii, adaptându-se în prezent la cerințele de modernizare tehnologică și la standardele de protecție a mediului înconjurător.",
      en: "Bor is a major industrial city in eastern Serbia and serves as the administrative center of the Bor District. The city's history is inextricably linked to mining, which began in 1903 following the discovery of copper deposits by the industrialist George Weifert. Subsequently, Bor evolved into one of the largest copper mining and smelting centers in Europe, with French investors playing a significant role in its early development phases. This international influence left a lasting mark on the city's urban planning, particularly in the French Colony district, which retains its distinctive 1930s architecture. Today, the urban landscape is defined by vast open-pit mines and monumental industrial facilities, though the surrounding region also boasts significant natural beauty. Near the city lies Lake Bor, an artificial reservoir created in the 1950s for industrial purposes that now serves as a popular recreational destination. Bor remains an essential economic driver for the region, currently navigating the challenges of technological modernization and ecological transformation to ensure sustainable development.",
      es: "Bor es una destacada ciudad industrial del este de Serbia, conocida principalmente por su minería de cobre. El desarrollo de la mina por parte de George Weifert a principios del siglo XX marcó el paisaje urbano y la economía de la región. Bor se encuentra en medio de un paisaje montañoso y ofrece acceso a bellezas naturales como el lago de Bor.",
      pt: "Bor é uma importante cidade industrial no leste da Sérvia, conhecida principalmente pela mineração de cobre. O desenvolvimento da mina por George Weifert no início do século XX moldou a paisagem urbana e a economia da região. Bor está situada no meio de uma paisagem montanhosa e oferece acesso a belezas naturais como o lago Bor.",
      fr: "Bor est une ville industrielle majeure de l'est de la Serbie, principalement connue pour ses mines de cuivre. Le développement de la mine par George Weifert au début du XXe siècle a façonné le paysage urbain et l'économie de la région. Bor est située au cœur d'un paysage montagneux et offre un accès à des sites naturels tels que le lac de Bor.",
    },
    factsAdvanced: {
      de: ["Der moderne Bergbau begann im Jahr 1903 durch George Weifert.", "RTB Bor wurde zu einem der größten Kupferproduzenten Europas.", "Die Architektur der Französischen Kolonie stammt aus den 1930er Jahren.", "Der Bor-See wurde 1959 als industrieller Wasserspeicher angelegt.", "Die Stadt liegt auf einer Höhe von etwa 378 Metern über dem Meer.", "Der Tagebau Veliki Krivelj gehört zu den größten seiner Art weltweit."],
      hu: ["A modern bányászat 1903-ban vette kezdetét George Weifert révén.", "Az RTB Bor Európa egyik legnagyobb réztermelőjévé vált.", "A Francia kolónia városrész építészete az 1930-as évekből származik.", "A Bori-tavat 1959-ben hozták létre ipari víztározóként.", "A város körülbelül 378 méteres tengerszint feletti magasságban fekszik.", "A Veliki Krivelj külszíni fejtés a világ egyik legnagyobb ilyen létesítménye."],
      ro: ["Mineritul modern a început în anul 1903 prin George Weifert.", "RTB Bor a devenit unul dintre cei mai mari producători de cupru din Europa.", "Arhitectura Coloniei Franceze datează din anii 1930.", "Lacul Bor a fost creat în 1959 ca rezervor de apă industrial.", "Orașul este situat la o altitudine de aproximativ 378 de metri.", "Exploatarea de suprafață Veliki Krivelj este printre cele mai mari din lume."],
      en: ["Modern mining began in 1903 through the efforts of George Weifert.", "RTB Bor became one of the largest copper producers in Europe.", "The architecture of the French Colony dates back to the 1930s.", "Lake Bor was established in 1959 as an industrial water reservoir.", "The city is situated at an elevation of approximately 378 meters.", "The Veliki Krivelj open-pit mine is one of the largest of its kind globally."],
      es: ["La minería sistemática comenzó en el año 1903", "George Weifert obtuvo la concesión de la mina en 1903", "RTB Bor es una de las minas de cobre más grandes de Europa", "El lago de Bor (Borsko jezero) se creó artificialmente en 1959", "La ciudad se encuentra al pie de la montaña Crni Vrh", "En Bor hay una facultad técnica de minería"],
      pt: ["A mineração sistemática começou em 1903", "George Weifert obteve a concessão da mina em 1903", "A RTB Bor é uma das maiores minas de cobre da Europa", "O lago Bor (Borsko jezero) foi criado artificialmente em 1959", "A cidade situa-se no sopé da montanha Crni Vrh", "Em Bor existe uma faculdade técnica de mineração"],
      fr: ["L'exploitation minière systématique a débuté en 1903", "George Weifert a obtenu la concession de la mine en 1903", "RTB Bor est l'une des plus grandes mines de cuivre d'Europe", "Le lac de Bor (Borsko jezero) a été créé artificiellement en 1959", "La ville se trouve au pied de la montagne Crni Vrh", "Une faculté technique d'exploitation minière se trouve à Bor"],
    },
    image: "/poi-images/RS-005-bor.webp",
  },
  {
    id: "RS-005-negotin", "sights": {
      "de": [
            {
                  "name": "ORP Bukovo",
                  "text": "Ein geschütztes Naturreservat in der Nähe der Stadt Negotin.",
                  "category": "natural",
                  "coords": [
                        22.49654,
                        44.218158
                  ]
            },
            {
                  "name": "Muzej Hajduk Veljka",
                  "text": "Ein Museum, das dem serbischen Helden Hajduk Veljko gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        22.528939,
                        44.226482
                  ]
            },
            {
                  "name": "Dom kulture „Stevan Mokranjac”",
                  "text": "Ein Kulturzentrum und Veranstaltungsort für darstellende Künste in Negotin.",
                  "category": "cultural",
                  "coords": [
                        22.530045,
                        44.228114
                  ]
            },
            {
                  "name": "Muzej „Krajina”",
                  "text": "Ein Regionalmuseum zur Geschichte und Archäologie von Negotin.",
                  "category": "museum",
                  "coords": [
                        22.531451,
                        44.22481
                  ]
            },
            {
                  "name": "Kuća Stevana Mokranjca",
                  "text": "Das Geburtshaus des berühmten Komponisten Stevan Mokranjac.",
                  "category": "museum",
                  "coords": [
                        22.530229,
                        44.225645
                  ]
            },
            {
                  "name": "Čučuk Stana",
                  "text": "Ein Denkmal für die serbische Heldin Čučuk Stana in Negotin.",
                  "category": "historical",
                  "coords": [
                        22.530618,
                        44.226661
                  ]
            },
            {
                  "name": "städtische Schwimmbad in Negotin",
                  "text": "Das städtische Schwimmbad in Negotin bietet Platz zum Schwimmen und für die sommerliche Entspannung.",
                  "category": "family",
                  "coords": [
                        22.530171,
                        44.235046
                  ]
            }
      ],
      "hu": [
            {
                  "name": "ORP Bukovo",
                  "text": "Védett természetvédelmi terület Negotin városa közelében.",
                  "category": "natural",
                  "coords": [
                        22.49654,
                        44.218158
                  ]
            },
            {
                  "name": "Muzej Hajduk Veljka",
                  "text": "Hajduk Veljko szerb hősnek szentelt múzeum.",
                  "category": "museum",
                  "coords": [
                        22.528939,
                        44.226482
                  ]
            },
            {
                  "name": "Dom kulture „Stevan Mokranjac”",
                  "text": "Kulturális központ és előadóművészeti helyszín Negotinban.",
                  "category": "cultural",
                  "coords": [
                        22.530045,
                        44.228114
                  ]
            },
            {
                  "name": "Muzej „Krajina”",
                  "text": "Negotin történelmét és régészetét bemutató regionális múzeum.",
                  "category": "museum",
                  "coords": [
                        22.531451,
                        44.22481
                  ]
            },
            {
                  "name": "Kuća Stevana Mokranjca",
                  "text": "Stevan Mokranjac híres zeneszerző szülőháza.",
                  "category": "museum",
                  "coords": [
                        22.530229,
                        44.225645
                  ]
            },
            {
                  "name": "Čučuk Stana",
                  "text": "Emlékmű Čučuk Stana szerb hősnőnek Negotinban.",
                  "category": "historical",
                  "coords": [
                        22.530618,
                        44.226661
                  ]
            },
            {
                  "name": "Negotin City Pool",
                  "text": "Negotin városi úszómedencéje helyet biztosít az úszáshoz és a nyári pihenéshez.",
                  "category": "family",
                  "coords": [
                        22.530171,
                        44.235046
                  ]
            }
      ],
      "ro": [
            {
                  "name": "ORP Bukovo",
                  "text": "O rezervație naturală protejată în apropierea orașului Negotin.",
                  "category": "natural",
                  "coords": [
                        22.49654,
                        44.218158
                  ]
            },
            {
                  "name": "Muzej Hajduk Veljka",
                  "text": "Un muzeu dedicat eroului sârb Hajduk Veljko.",
                  "category": "museum",
                  "coords": [
                        22.528939,
                        44.226482
                  ]
            },
            {
                  "name": "Dom kulture „Stevan Mokranjac”",
                  "text": "Un centru cultural și loc de desfășurare pentru artele spectacolului în Negotin.",
                  "category": "cultural",
                  "coords": [
                        22.530045,
                        44.228114
                  ]
            },
            {
                  "name": "Muzej „Krajina”",
                  "text": "Un muzeu regional dedicat istoriei și arheologiei din Negotin.",
                  "category": "museum",
                  "coords": [
                        22.531451,
                        44.22481
                  ]
            },
            {
                  "name": "Kuća Stevana Mokranjca",
                  "text": "Casa natală a celebrului compozitor Stevan Mokranjac.",
                  "category": "museum",
                  "coords": [
                        22.530229,
                        44.225645
                  ]
            },
            {
                  "name": "Čučuk Stana",
                  "text": "Un monument dedicat eroinei sârbe Čučuk Stana în Negotin.",
                  "category": "historical",
                  "coords": [
                        22.530618,
                        44.226661
                  ]
            },
            {
                  "name": "Negotin City Pool",
                  "text": "Piscina municipală din Negotin oferă spațiu pentru înot și relaxare pe timp de vară.",
                  "category": "family",
                  "coords": [
                        22.530171,
                        44.235046
                  ]
            }
      ],
      "en": [
            {
                  "name": "ORP Bukovo",
                  "text": "A protected nature reserve located near the town of Negotin.",
                  "category": "natural",
                  "coords": [
                        22.49654,
                        44.218158
                  ]
            },
            {
                  "name": "Muzej Hajduk Veljka",
                  "text": "A museum dedicated to the Serbian hero Hajduk Veljko.",
                  "category": "museum",
                  "coords": [
                        22.528939,
                        44.226482
                  ]
            },
            {
                  "name": "Dom kulture „Stevan Mokranjac”",
                  "text": "A cultural center and performing arts venue in Negotin.",
                  "category": "cultural",
                  "coords": [
                        22.530045,
                        44.228114
                  ]
            },
            {
                  "name": "Muzej „Krajina”",
                  "text": "A regional museum covering the history and archaeology of Negotin.",
                  "category": "museum",
                  "coords": [
                        22.531451,
                        44.22481
                  ]
            },
            {
                  "name": "Kuća Stevana Mokranjca",
                  "text": "The birth house of the famous composer Stevan Mokranjac.",
                  "category": "museum",
                  "coords": [
                        22.530229,
                        44.225645
                  ]
            },
            {
                  "name": "Čučuk Stana",
                  "text": "A monument to the Serbian heroine Čučuk Stana in Negotin.",
                  "category": "historical",
                  "coords": [
                        22.530618,
                        44.226661
                  ]
            },
            {
                  "name": "Negotin City Pool",
                  "text": "The city swimming pool in Negotin provides space for swimming and summer relaxation.",
                  "category": "family",
                  "coords": [
                        22.530171,
                        44.235046
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-005",
    coords: [22.5300, 44.2264],
    name: { de: "Negotin", hu: "Negotin", ro: "Negotin", en: "Negotin" },
    description: {
      de: "Eine Stadt im Dreiländereck Serbien-Bulgarien-Rumänien, berühmt für ihre Weinbautradition.",
      hu: "Város a szerb-bolgár-román hármashatárnál, híres bortermelési hagyományairól.",
      ro: "Un oraș situat la granița dintre Serbia, Bulgaria și România, faimos pentru tradiția viticolă.",
      en: "A city near the triple border of Serbia, Bulgaria, and Romania, famous for its wine-making tradition.",
      es: "Una ciudad en el punto donde se encuentran Serbia, Bulgaria y Rumanía, famosa por su tradición vitivinícola.",
      pt: "Uma cidade no ponto de encontro entre a Sérvia, a Bulgária e a Roménia, famosa pela sua tradição vinícola.",
      fr: "Une ville au carrefour de la Serbie, de la Bulgarie et de la Roumanie, célèbre pour sa tradition viticole.",
    },
    facts: {
      de: ["Negotiner Weinkeller", "Heimat von Stevan Mokranjac", "Nahe dem Eisernen Tor"],
      hu: ["Negotini borpincék", "Stevan Mokranjac hazája", "A Vaskapu közelében"],
      ro: ["Cramele din Negotin", "Casa lui Stevan Mokranjac", "Lângă Porțile de Fier"],
      en: ["Negotin wine cellars", "Home of Stevan Mokranjac", "Near the Iron Gates"],
      es: ["Bodegas de Negotin", "Hogar de Stevan Mokranjac", "Cerca de las Puertas de Hierro"],
      pt: ["Adegas de Negotin", "Terra de Stevan Mokranjac", "Perto das Portas de Ferro"],
      fr: ["Caves à vin de Negotin", "Patrie de Stevan Mokranjac", "Proche des Portes de Fer"],
    }, image: "/poi-images/RS-005-negotin.webp",
    descriptionAdvanced: {
      de: "Negotin liegt im Dreiländereck von Serbien, Rumänien und Bulgarien im Herzen der Region Krajina. Die Stadt ist vor allem für ihre jahrhundertealte Weinbautradition bekannt, die in den nahegelegenen Weindörfern Rajac und Rogljevo durch die einzigartigen Pivnice (Weinkeller) aus dem 18. und 19. Jahrhundert lebendig gehalten wird. Historisch spielte Negotin eine wichtige Rolle während der serbischen Aufstände gegen das Osmanische Reich, wobei der Lokalheld Hajduk Veljko Petrovic in der Verteidigung der Stadt im Jahr 1813 sein Leben ließ. Negotin ist zudem als Geburtsort des berühmten Komponisten Stevan Mokranjac bekannt, zu dessen Ehren jährlich das Musikfestival Mokranjčevi dani veranstaltet wird. Die Architektur des Stadtzentrums spiegelt die bürgerliche Entwicklung des 19. Jahrhunderts wider, als Negotin ein bedeutendes kulturelles und wirtschaftliches Zentrum war. Geografisch ist die Stadt in einer fruchtbaren Ebene unweit der Donau gelegen, was sie zu einem idealen Ausgangspunkt für Erkundungen des Nationalparks Đerdap und der römischen Ruinen in der Umgebung macht.",
      hu: "Negotin Szerbia, Románia és Bulgária hármashatárának közelében, a Krajina régió szívében található. A város elsősorban több évszázados borászati hagyományairól nevezetes, amelyeket a közeli Rajac és Rogljevo falvakban található egyedülálló Pivnice (borpincék) őriznek a 18. és 19. századból. Történelmileg Negotin fontos szerepet játszott az oszmán uralom elleni szerb felkelések idején, ahol a helyi hős, Hajduk Veljko Petrović életét vesztette a város védelmében 1813-ban. Negotin emellett a világhírű zeneszerző, Stevan Mokranjac szülővárosa, akinek tiszteletére évente megrendezik a Mokranjčevi dani nevű rangos zenei fesztivált. A városközpont építészete a 19. századi polgári fejlődést tükrözi, amikor Negotin a térség jelentős kulturális és gazdasági központjaként működött. Földrajzilag a város egy termékeny síkságon fekszik, nem messze a Dunától, így ideális kiindulópont a Vaskapu-szoros Nemzeti Park és a környékbeli római kori romok felfedezéséhez.",
      ro: "Negotin este situat în apropierea punctului de frontieră triplu dintre Serbia, România și Bulgaria, în inima regiunii Krajina. Orașul este renumit în special pentru tradiția sa viticolă seculară, păstrată vie în satele din apropiere, Rajac și Rogljevo, prin complexele unice de Pivnice (crame) construite în secolele XVIII și XIX. Din punct de vedere istoric, Negotin a jucat un rol crucial în timpul răscoalelor sârbe împotriva Imperiului Otoman, eroul local Hajduk Veljko Petrović pierzându-și viața în apărarea orașului în anul 1813. Negotin este, de asemenea, cunoscut ca locul de naștere al celebrului compozitor Stevan Mokranjac, în onoarea căruia se organizează anual festivalul internațional de muzică Mokranjčevi dani. Arhitectura centrului istoric reflectă dezvoltarea civică din secolul al XIX-lea, când Negotin era un centru cultural și comercial prosper. Orașul este amplasat într-o câmpie fertilă, la mică distanță de Dunăre, fiind un punct strategic pentru explorarea Parcului Național Đerdap și a vestigiilor romane din zonă.",
      en: "Negotin is located near the tri-border point of Serbia, Romania, and Bulgaria, serving as the heart of the Negotin Krajina region. The city is primarily famous for its centuries-old winemaking tradition, which is uniquely preserved in the nearby villages of Rajac and Rogljevo through the stone wine cellars dating back to the 18th and 19th centuries. Historically, Negotin played a vital role during the Serbian uprisings against Ottoman rule, most notably associated with the local hero Hajduk Veljko Petrović, who died defending the city in 1813. Negotin is also celebrated as the birthplace of the renowned composer Stevan Mokranjac, with the prestigious Mokranjčevi dani music festival held annually in his honor. The architecture of the city center reflects its 19th-century civic development when it was a flourishing cultural and economic hub. Geographically situated in a fertile plain not far from the Danube River, the town offers a strategic gateway to the Iron Gates National Park and numerous Roman archeological sites.",
      es: "Negotin se encuentra en el punto donde convergen las fronteras de Serbia, Bulgaria y Rumanía, en la fértil región de Negotinska Krajina. La ciudad es famosa por su viticultura y las históricas Rajačke Pimnice, un conjunto de antiguas bodegas. Negotin es también el lugar de nacimiento del compositor Stevan Mokranjac y conserva un rico legado cultural.",
      pt: "Negotin situa-se no triângulo fronteiriço da Sérvia, Bulgária e Roménia, na fértil região de Negotinska Krajina. A cidade é famosa pela sua viticultura e pelas históricas Rajačke Pimnice, um conjunto de antigas adegas. Negotin é também a terra natal do compositor Stevan Mokranjac e preserva uma rica herança cultural.",
      fr: "Negotin se trouve au point de rencontre de la Serbie, de la Bulgarie et de la Roumanie, dans la région fertile de Negotinska Krajina. La ville est célèbre pour sa viticulture et les Rajačke Pimnice historiques, un ensemble de caves à vin anciennes. Negotin est également le lieu de naissance du compositeur Stevan Mokranjac et conserve un riche héritage culturel.",
    },
    factsAdvanced: {
      de: ["Negotin wurde im Jahr 1833 offiziell Teil des Fürstentums Serbien.", "Die Rajac-Weinkeller bestehen aus über 270 Steingebäuden.", "Der Komponist Stevan Mokranjac wurde hier im Jahr 1856 geboren.", "Hajduk Veljko Petrovic fiel 1813 bei der Verteidigung der Stadt.", "Die Region ist bekannt für die Produktion hochwertiger Rotweine.", "Die Donau fließt nur wenige Kilometer östlich der Stadt vorbei."],
      hu: ["Negotin 1833-ban lett hivatalosan a Szerb Fejedelemség része.", "A rajaci borpincék több mint 270 kőépületből állnak.", "Stevan Mokranjac zeneszerző itt született 1856-ban.", "Hajduk Veljko Petrović 1813-ban esett el a város védelme közben.", "A régió híres a kiváló minőségű vörösborok termeléséről.", "A Duna folyó mindössze néhány kilométerre keletre folyik a várostól."],
      ro: ["Negotin a devenit oficial parte a Principatului Serbiei în anul 1833.", "Cramele din Rajac sunt compuse din peste 270 de clădiri din piatră.", "Compozitorul Stevan Mokranjac s-a născut aici în anul 1856.", "Hajduk Veljko Petrović a căzut în 1813 în timpul apărării orașului.", "Regiunea este celebră pentru producția de vinuri roșii de calitate.", "Fluviul Dunărea trece la doar câțiva kilometri est de oraș."],
      en: ["Negotin officially became part of the Principality of Serbia in 1833.", "The Rajac wine cellars consist of over 270 unique stone buildings.", "The composer Stevan Mokranjac was born here in 1856.", "Hajduk Veljko Petrović died in 1813 while defending the city.", "The region is renowned for producing high-quality red wines.", "The Danube River flows just a few kilometers east of the town."],
      es: ["Negotin fue un importante centro comercial en el siglo XIX", "Las Rajačke Pimnice datan de los siglos XVIII y XIX", "Stevan Mokranjac nació aquí en el año 1856", "El monumento a Hajduk Veljko honra a un héroe de 1813", "El monasterio de Bukovo se encuentra a pocos kilómetros", "La región es conocida por sus variedades de uva autóctonas"],
      pt: ["Negotin foi um importante centro comercial no século XIX", "As Rajačke Pimnice datam dos séculos XVIII e XIX", "Stevan Mokranjac nasceu aqui em 1856", "O monumento a Hajduk Veljko homenageia um herói de 1813", "O mosteiro de Bukovo fica a poucos quilómetros de distância", "A região é conhecida pelas suas castas autóctones"],
      fr: ["Negotin était un centre commercial majeur au XIXe siècle", "Les Rajačke Pimnice datent des XVIIIe et XIXe siècles", "Stevan Mokranjac est né ici en 1856", "Le monument à Hajduk Veljko honore un héros de 1813", "Le monastère de Bukovo se trouve à quelques kilomètres", "La région est connue pour ses cépages autochtones"],
    },
  },
  // RS-006 Zajecarski
  {
    id: "RS-006-zajecar", "sights": {
      "de": [
            {
                  "name": "Istočna tvrđava",
                  "text": "Teil der historischen Verteidigungsanlagen von Zaječar aus dem 19. Jahrhundert.",
                  "category": "fortress",
                  "coords": [
                        22.28581,
                        43.893945
                  ]
            },
            {
                  "name": "Narodno pozorište Timočke Krajine „Zoran Radmilović”",
                  "text": "Das Haupttheater in Zaječar, benannt nach dem legendären serbischen Schauspieler.",
                  "category": "cultural",
                  "coords": [
                        22.274761,
                        43.901099
                  ]
            },
            {
                  "name": "Muzej grada Zaječara",
                  "text": "Ein regionales Museum in Zaječar, das die Geschichte und Archäologie der Region Timok zeigt.",
                  "category": "museum",
                  "coords": [
                        22.278768,
                        43.903485
                  ]
            },
            {
                  "name": "Radul-begov konak",
                  "text": "Ein gut erhaltenes Wohnhaus aus der osmanischen Zeit in Zaječar, das heute als Museum dient.",
                  "category": "museum",
                  "coords": [
                        22.279295,
                        43.902007
                  ]
            },
            {
                  "name": "Istorijski arhiv „Timočka Krajina”",
                  "text": "Dieses Museum in Zaječar bewahrt wichtige historische Dokumente des Timok-Tals auf.",
                  "category": "museum",
                  "coords": [
                        22.270801,
                        43.902638
                  ]
            },
            {
                  "name": "Spomenik Zoranu Radmiloviću",
                  "text": "Ein Denkmal in Zaječar zu Ehren des berühmten, dort geborenen Schauspielers Zoran Radmilović.",
                  "category": "historical",
                  "coords": [
                        22.276525,
                        43.901381
                  ]
            },
            {
                  "name": "Spomen park-šuma „Kraljevica”",
                  "text": "Ein weitläufiger Waldpark in Zaječar, der als beliebtes Erholungs- und Gedenkgebiet dient.",
                  "category": "park",
                  "coords": [
                        22.273296,
                        43.885183
                  ]
            },
            {
                  "name": "Spomenik streljanim žrtvama Timočke bune",
                  "text": "Dieses Denkmal in Zaječar erinnert an den Bauernaufstand gegen den König im Jahr 1883.",
                  "category": "historical",
                  "coords": [
                        22.278652,
                        43.89467
                  ]
            },
            {
                  "name": "Spomenik Nikoli Pašiću",
                  "text": "Ein Denkmal in Zaječar für den bedeutenden serbischen Staatsmann Nikola Pašić.",
                  "category": "historical",
                  "coords": [
                        22.276144,
                        43.903331
                  ]
            },
            {
                  "name": "Hajduk Veljko",
                  "text": "Ein Denkmal zu Ehren von Hajduk Veljko, einem Helden des ersten serbischen Aufstands.",
                  "category": "historical",
                  "coords": [
                        22.286917,
                        43.90703
                  ]
            },
            {
                  "name": "Popova plaža",
                  "text": "Ein Sport- und Erholungszentrum in Zaječar mit Stränden am Fluss Timok.",
                  "category": "recreational",
                  "coords": [
                        22.276548,
                        43.909344
                  ]
            },
            {
                  "name": "Spomenik Vešala",
                  "text": "Ein Denkmal in Zaječar, das an die Opfer des Zweiten Weltkriegs erinnert.",
                  "category": "historical",
                  "coords": [
                        22.264806,
                        43.889121
                  ]
            },
            {
                  "name": "City Pool",
                  "text": "Diese Schwimmeinrichtung in Zajecar bietet Platz zum Schwimmen und zur Erholung.",
                  "category": "family",
                  "coords": [
                        22.276393,
                        43.894327
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Istočna tvrđava",
                  "text": "Zaječar 19. századi történelmi védműveinek része.",
                  "category": "fortress",
                  "coords": [
                        22.28581,
                        43.893945
                  ]
            },
            {
                  "name": "Narodno pozorište Timočke Krajine „Zoran Radmilović”",
                  "text": "Zaječar fő színháza, amelyet a legendás szerb színészről neveztek el.",
                  "category": "cultural",
                  "coords": [
                        22.274761,
                        43.901099
                  ]
            },
            {
                  "name": "Muzej grada Zaječara",
                  "text": "Regionális múzeum Zaječarban, amely a Timok-vidék történelmét és régészetét mutatja be.",
                  "category": "museum",
                  "coords": [
                        22.278768,
                        43.903485
                  ]
            },
            {
                  "name": "Radul-begov konak",
                  "text": "Jó állapotban fennmaradt oszmán kori lakóház Zaječarban, amely ma múzeumként működik.",
                  "category": "museum",
                  "coords": [
                        22.279295,
                        43.902007
                  ]
            },
            {
                  "name": "Istorijski arhiv „Timočka Krajina”",
                  "text": "Ez a zaječari múzeum a Timok-völgy fontos történelmi dokumentumait őrzi.",
                  "category": "museum",
                  "coords": [
                        22.270801,
                        43.902638
                  ]
            },
            {
                  "name": "Spomenik Zoranu Radmiloviću",
                  "text": "Emlékmű Zaječarban a város szülötte, a híres színész, Zoran Radmilović tiszteletére.",
                  "category": "historical",
                  "coords": [
                        22.276525,
                        43.901381
                  ]
            },
            {
                  "name": "Spomen park-šuma „Kraljevica”",
                  "text": "Kiterjedt erdei park Zaječarban, amely népszerű pihenő- és emlékhely.",
                  "category": "park",
                  "coords": [
                        22.273296,
                        43.885183
                  ]
            },
            {
                  "name": "Spomenik streljanim žrtvama Timočke bune",
                  "text": "Ez a zaječari emlékmű az 1883-as királyellenes parasztfelkelésnek állít emléket.",
                  "category": "historical",
                  "coords": [
                        22.278652,
                        43.89467
                  ]
            },
            {
                  "name": "Spomenik Nikoli Pašiću",
                  "text": "Emlékmű Zaječarban a neves szerb államférfi, Nikola Pašić tiszteletére.",
                  "category": "historical",
                  "coords": [
                        22.276144,
                        43.903331
                  ]
            },
            {
                  "name": "Hajduk Veljko",
                  "text": "Emlékmű Hajduk Veljko, az első szerb felkelés hősének tiszteletére.",
                  "category": "historical",
                  "coords": [
                        22.286917,
                        43.90703
                  ]
            },
            {
                  "name": "Popova plaža",
                  "text": "Sport- és üdülőközpont Zaječarban, strandokkal a Timok-folyó partján.",
                  "category": "recreational",
                  "coords": [
                        22.276548,
                        43.909344
                  ]
            },
            {
                  "name": "Spomenik Vešala",
                  "text": "Zaječari emlékmű, amely a második világháború áldozataira emlékeztet.",
                  "category": "historical",
                  "coords": [
                        22.264806,
                        43.889121
                  ]
            },
            {
                  "name": "City Pool",
                  "text": "Ez a Zajecar városában található úszólétesítmény lehetőséget nyújt az úszásra és a kikapcsolódásra.",
                  "category": "family",
                  "coords": [
                        22.276393,
                        43.894327
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Istočna tvrđava",
                  "text": "Parte a fortificațiilor istorice din secolul al XIX-lea ale orașului Zaječar.",
                  "category": "fortress",
                  "coords": [
                        22.28581,
                        43.893945
                  ]
            },
            {
                  "name": "Narodno pozorište Timočke Krajine „Zoran Radmilović”",
                  "text": "Principalul teatru din Zaječar, numit după legendarul actor sârb.",
                  "category": "cultural",
                  "coords": [
                        22.274761,
                        43.901099
                  ]
            },
            {
                  "name": "Muzej grada Zaječara",
                  "text": "Un muzeu regional din Zaječar, care prezintă istoria și arheologia regiunii Timok.",
                  "category": "museum",
                  "coords": [
                        22.278768,
                        43.903485
                  ]
            },
            {
                  "name": "Radul-begov konak",
                  "text": "O locuință bine conservată din epoca otomană din Zaječar, care servește acum ca muzeu.",
                  "category": "museum",
                  "coords": [
                        22.279295,
                        43.902007
                  ]
            },
            {
                  "name": "Istorijski arhiv „Timočka Krajina”",
                  "text": "Acest muzeu din Zaječar păstrează documente istorice importante ale văii Timok.",
                  "category": "museum",
                  "coords": [
                        22.270801,
                        43.902638
                  ]
            },
            {
                  "name": "Spomenik Zoranu Radmiloviću",
                  "text": "Un monument din Zaječar în onoarea celebrului actor Zoran Radmilović, născut aici.",
                  "category": "historical",
                  "coords": [
                        22.276525,
                        43.901381
                  ]
            },
            {
                  "name": "Spomen park-šuma „Kraljevica”",
                  "text": "Un parc forestier vast în Zaječar, care servește ca zonă populară de recreere și memorial.",
                  "category": "park",
                  "coords": [
                        22.273296,
                        43.885183
                  ]
            },
            {
                  "name": "Spomenik streljanim žrtvama Timočke bune",
                  "text": "Acest monument din Zaječar comemorează revolta țărănească împotriva regelui din 1883.",
                  "category": "historical",
                  "coords": [
                        22.278652,
                        43.89467
                  ]
            },
            {
                  "name": "Spomenik Nikoli Pašiću",
                  "text": "Un monument din Zaječar dedicat proeminentului om de stat sârb Nikola Pašić.",
                  "category": "historical",
                  "coords": [
                        22.276144,
                        43.903331
                  ]
            },
            {
                  "name": "Hajduk Veljko",
                  "text": "Un monument în cinstea lui Hajduk Veljko, un erou al primei răscoale sârbe.",
                  "category": "historical",
                  "coords": [
                        22.286917,
                        43.90703
                  ]
            },
            {
                  "name": "Popova plaža",
                  "text": "Un centru sportiv și de recreere din Zaječar, cu plaje pe râul Timok.",
                  "category": "recreational",
                  "coords": [
                        22.276548,
                        43.909344
                  ]
            },
            {
                  "name": "Spomenik Vešala",
                  "text": "Un monument din Zaječar care amintește de victimele celui de-al Doilea Război Mondial.",
                  "category": "historical",
                  "coords": [
                        22.264806,
                        43.889121
                  ]
            },
            {
                  "name": "City Pool",
                  "text": "Această unitate de înot din Zajecar oferă un loc pentru înot și recreere.",
                  "category": "family",
                  "coords": [
                        22.276393,
                        43.894327
                  ]
            }
      ],
      "en": [
            {
                  "name": "Zaječar Eastern Fortress",
                  "text": "Part of Zaječar's 19th-century historical defensive bastions and fortifications.",
                  "category": "fortress",
                  "coords": [
                        22.28581,
                        43.893945
                  ]
            },
            {
                  "name": "Zoran Radmilović National Theater of Timok Valley",
                  "text": "The main theatre in Zaječar, named after the legendary Serbian actor.",
                  "category": "cultural",
                  "coords": [
                        22.274761,
                        43.901099
                  ]
            },
            {
                  "name": "Muzej grada Zaječara",
                  "text": "A regional museum in Zaječar showcasing the history and archaeology of the Timok Valley.",
                  "category": "museum",
                  "coords": [
                        22.278768,
                        43.903485
                  ]
            },
            {
                  "name": "Radul-Bey's Residence",
                  "text": "A well-preserved Ottoman-era residence in Zaječar that now serves as a museum.",
                  "category": "museum",
                  "coords": [
                        22.279295,
                        43.902007
                  ]
            },
            {
                  "name": "Timok Valley Historical Archive",
                  "text": "This museum in Zaječar preserves important historical documents of the Timok Valley.",
                  "category": "museum",
                  "coords": [
                        22.270801,
                        43.902638
                  ]
            },
            {
                  "name": "Zoran Radmilović Monument",
                  "text": "A monument in Zaječar honoring the famous actor Zoran Radmilović, who was born in the city.",
                  "category": "historical",
                  "coords": [
                        22.276525,
                        43.901381
                  ]
            },
            {
                  "name": "Kraljevica Memorial Park and Forest",
                  "text": "A large forest park in Zaječar that serves as a popular recreational and memorial area.",
                  "category": "park",
                  "coords": [
                        22.273296,
                        43.885183
                  ]
            },
            {
                  "name": "Monument to the Timok Rebellion",
                  "text": "This monument in Zaječar commemorates the 1883 peasant rebellion against the monarchy.",
                  "category": "historical",
                  "coords": [
                        22.278652,
                        43.89467
                  ]
            },
            {
                  "name": "Monument to Nikola Pašić",
                  "text": "A monument in Zaječar dedicated to the prominent Serbian statesman Nikola Pašić.",
                  "category": "historical",
                  "coords": [
                        22.276144,
                        43.903331
                  ]
            },
            {
                  "name": "Hajduk Veljko",
                  "text": "A monument honoring Hajduk Veljko, a hero of the First Serbian Uprising.",
                  "category": "historical",
                  "coords": [
                        22.286917,
                        43.90703
                  ]
            },
            {
                  "name": "Popova plaža",
                  "text": "A sports and recreation center in Zaječar featuring beaches along the Timok River.",
                  "category": "recreational",
                  "coords": [
                        22.276548,
                        43.909344
                  ]
            },
            {
                  "name": "The Gallows Monument",
                  "text": "A monument in Zaječar serving as a memorial for the victims of World War II.",
                  "category": "historical",
                  "coords": [
                        22.264806,
                        43.889121
                  ]
            },
            {
                  "name": "City pool",
                  "text": "This swimming facility in Zajecar offers a place for swimming and recreation.",
                  "category": "family",
                  "coords": [
                        22.276393,
                        43.894327
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-006",
    coords: [22.2800, 43.9000],
    name: { de: "Zaječar", hu: "Zaječar", ro: "Zaječar", en: "Zaječar" },
    description: {
      de: "Das administrative Zentrum des Bezirks Zaječar, bekannt für seine kulturellen Veranstaltungen und Geschichte.",
      hu: "A Zaječar körzet közigazgatási központja, amely kulturális eseményeiről és történelméről ismert.",
      ro: "Centrul administrativ al districtului Zaječar, cunoscut pentru evenimentele sale culturale și istorie.",
      en: "The administrative center of the Zaječar district, known for its cultural events and history.",
      es: "El centro administrativo del distrito de Zaječar, conocido por sus eventos culturales e historia.",
      pt: "O centro administrativo do distrito de Zaječar, conhecido pelos seus eventos culturais e história.",
      fr: "Le centre administratif du district de Zaječar, connu pour ses événements culturels et son histoire.",
    },
    facts: {
      de: ["Gitarijada Rockfestival", "Nationalmuseum", "Tor nach Ostserbien"],
      hu: ["Gitarijada rockfesztivál", "Nemzeti Múzeum", "Kelet-Szerbia kapuja"],
      ro: ["Festivalul de rock Gitarijada", "Muzeul Național", "Poarta către estul Serbiei"],
      en: ["Gitarijada rock festival", "National Museum", "Gateway to eastern Serbia"],
      es: ["Festival de rock Gitarijada", "Museo Nacional", "Puerta al este de Serbia"],
      pt: ["Festival de rock Gitarijada", "Museu Nacional", "Porta para o leste da Sérvia"],
      fr: ["Festival de rock Gitarijada", "Musée national", "Porte de la Serbie orientale"],
    },
    descriptionAdvanced: {
      de: "Zaječar ist das administrative und kulturelle Zentrum der Region Timok im Osten Serbiens. Die Stadt liegt am Zusammenfluss der Weißen und Schwarzen Timok und ist ein wichtiger Verkehrsknotenpunkt nahe der bulgarischen Grenze. Das bedeutendste historische Monument in der unmittelbaren Umgebung ist der kaiserliche Palast Felix Romuliana (Gamzigrad), der im späten 3. Jahrhundert von Kaiser Galerius erbaut wurde und heute zum UNESCO-Weltkulturerbe gehört. In Zaječar selbst befindet sich das Nationalmuseum, das die reichen archäologischen Funde der Region bewahrt und präsentiert. Überregional bekannt ist die Stadt auch für die Gitarijada, eines der ältesten Rockfestivals in Südosteuropa, das seit 1966 jährlich stattfindet und Musiker aus dem gesamten Balkan anzieht. Die wirtschaftliche Basis der Stadt bildeten traditionell die Lebensmittel- und Leichtindustrie, während heute der Tourismus rund um die römischen Ruinen und lokale Naturattraktionen an Bedeutung gewinnt. Mit seinem lebendigen Stadtzentrum, gepflegten Parkanlagen wie der Popova plaža und einer reichen kulturellen Tradition stellt Zaječar einen dynamischen Mittelpunkt in Ostserbien dar.",
      hu: "Zaječar Kelet-Szerbia Timok régiójának közigazgatási és kulturális központja, amely a Fehér- és a Fekete-Timok folyók találkozásánál fekszik. A város fontos közlekedési csomópont a bolgár határ közelében, történelme pedig szorosan összefügg a környékbeli régészeti lelőhelyekkel. A legjelentősebb történelmi emlék a várostól nem messze található Felix Romuliana (Gamzigrad) palotakomplexum, amelyet Galeriusz császár építtetett a 3. század végén, és ma az UNESCO Világörökség része. Zaječar belvárosában található a Nemzeti Múzeum, amely a régió gazdag római kori leleteit őrzi és mutatja be a nagyközönségnek. A város modern kulturális életének egyik legfontosabb eseménye a Gitarijada, Délkelet-Európa egyik legrégebbi rockfesztiválja, amely 1966 óta minden évben megmozgatja a Balkán zenerajongóit. A város gazdaságát hagyományosan az élelmiszeripar és a könnyűipar határozta meg, de napjainkban a turizmus is egyre hangsúlyosabbá válik a római örökség és a természeti kincsek révén. A Popova plaža szabadidőpark és a rendezett terek révén Zaječar vonzó és dinamikus központja a térségnek.",
      ro: "Zaječar este centrul administrativ și cultural al regiunii Timok din estul Serbiei, fiind situat la confluența râurilor Timokul Alb și Timokul Negru. Orașul reprezintă un nod de transport important în apropierea graniței cu Bulgaria, având o istorie marcată de prezența civilizațiilor antice în această zonă. Cel mai important monument istoric din vecinătate este complexul imperial Felix Romuliana (Gamzigrad), construit la sfârșitul secolului al III-lea de împăratul Galerius, sit aflat astăzi sub protecția UNESCO. În centrul orașului Zaječar se află Muzeul Național, care adăpostește și expune descoperiri arheologice valoroase provenite din săpăturile locale. Orașul este renumit pe plan internațional și pentru festivalul Gitarijada, unul dintre cele mai vechi evenimente de muzică rock din Europa de Sud-Est, organizat anual începând cu anul 1966. Din punct de vedere economic, Zaječar s-a bazat tradițional pe industria alimentară și ușoară, însă în prezent turismul cultural și cel recreativ în zone precum Popova plaža devin tot mai relevante. Cu o tradiție civică bogată și numeroase instituții de cultură, Zaječar rămâne un punct de referință vital pentru dezvoltarea Serbiei de Răsărit.",
      en: "Zaječar serves as the administrative and cultural hub of the Timok region in eastern Serbia, positioned at the confluence of the White and Black Timok rivers. The city is a vital transportation node near the Bulgarian border, with a history deeply intertwined with the ancient civilizations that once inhabited the area. The most significant historical monument in its vicinity is the Felix Romuliana (Gamzigrad) imperial palace complex, built in the late 3rd century by Emperor Galerius, which is now a UNESCO World Heritage site. In Zaječar itself, the National Museum preserves and showcases the rich archaeological finds from the Roman era discovered nearby. The city is also widely known for Gitarijada, one of the oldest rock festivals in Southeastern Europe, which has been held annually since 1966, attracting music fans from across the Balkans. Historically, the local economy was anchored in food and light industries, while today cultural tourism and recreation at parks like Popova plaža are increasingly important. With its vibrant city center and rich institutional heritage, Zaječar remains a dynamic and essential focal point for the development of Eastern Serbia.",
      es: "Zaječar es el centro administrativo del distrito homónimo en el este de Serbia. La ciudad es conocida sobre todo por el cercano yacimiento antiguo de Felix Romuliana, declarado Patrimonio de la Humanidad por la UNESCO. Zaječar también acoge la tradicional Gitarijada, uno de los festivales de rock más antiguos del sureste de Europa, que atrae anualmente a miles de visitantes.",
      pt: "Zaječar é o centro administrativo do distrito de Zaječar, no leste da Sérvia. A cidade é conhecida sobretudo pelo sítio arqueológico antigo de Felix Romuliana, classificado como Património Mundial da UNESCO. Zaječar acolhe também a tradicional Gitarijada, um dos festivales de rock mais antigos do sudeste da Europa, que atrai anualmente milhares de visitantes.",
      fr: "Zaječar est le centre administratif du district de Zaječar, dans l'est de la Serbie. La ville est surtout connue pour le site antique de Felix Romuliana, classé au patrimoine mondial de l'UNESCO. Zaječar accueille également la traditionnelle Gitarijada, l'un des plus anciens festivals de rock d'Europe du Sud-Est, qui attire chaque année des milliers de visiteurs.",
    },
    factsAdvanced: {
      de: ["Felix Romuliana wurde um 298 n. Chr. von Kaiser Galerius erbaut.", "Die erste Gitarijada fand im Jahr 1966 statt.", "Zaječar wurde erstmals im Jahr 1466 urkundlich erwähnt.", "Das Nationalmuseum in Zaječar wurde 1951 gegründet.", "Die Stadt liegt an der Mündung der Weißen in die Schwarze Timok.", "Felix Romuliana gehört seit 2007 zum UNESCO-Weltkulturerbe."],
      hu: ["Felix Romulianát 298 körül alapította Galeriusz császár.", "Az első Gitarijada fesztivált 1966-ban rendezték meg.", "Zaječart először 1466-ban említik írásos dokumentumok.", "A zaječari Nemzeti Múzeumot 1951-ben alapították.", "A város a Fehér- és a Fekete-Timok folyók találkozásánál fekszik.", "Felix Romuliana 2007 óta az UNESCO Világörökség része."],
      ro: ["Felix Romuliana a fost construită în jurul anului 298 de împăratul Galerius.", "Primul festival Gitarijada a avut loc în anul 1966.", "Zaječar a fost menționat documentar pentru prima dată în 1466.", "Muzeul Național din Zaječar a fost înființat în anul 1951.", "Orașul este situat la confluența Timokului Alb cu cel Negru.", "Felix Romuliana face parte din Patrimoniul Mondial UNESCO din 2007."],
      en: ["Felix Romuliana was built around 298 AD by Emperor Galerius.", "The first Gitarijada festival was held in 1966.", "Zaječar was first mentioned in historical records in 1466.", "The National Museum in Zaječar was established in 1951.", "The city is located at the confluence of the White and Black Timok.", "Felix Romuliana has been a UNESCO World Heritage site since 2007."],
      es: ["Zaječar fue mencionada por primera vez en 1466", "Felix Romuliana se encuentra a unos 11 kilómetros", "La Gitarijada se celebra desde el año 1966", "El Museo Nacional de Zaječar fue fundado en 1951", "La ciudad se sitúa en la confluencia de dos brazos del Timok", "El Radul-Bey-Konak es un ejemplo de arquitectura otomana"],
      pt: ["Zaječar foi mencionada pela primeira vez em documentos em 1466", "Felix Romuliana fica a cerca de 11 quilómetros de distância", "A Gitarijada realiza-se desde o ano 1966", "O Museu Nacional de Zaječar foi fundado em 1951", "A cidade situa-se na confluência de dois braços do Timok", "O Radul-Bey-Konak é um exemplo de arquitetura otomana"],
      fr: ["Zaječar fut mentionnée pour la première fois en 1466", "Felix Romuliana se trouve à environ 11 kilomètres", "La Gitarijada a lieu depuis 1966", "Le musée national de Zaječar fut fondé en 1951", "La ville est située au confluent de deux bras du Timok", "Le Radul-Bey-Konak est un exemple d'architecture ottomane"],
    },
    image: "/poi-images/RS-006-zajecar.webp",
  },
  // RS-007 Pirotski
  {
    id: "RS-007-pirot", "sights": {
      "de": [
            {
                  "name": "Pirotski grad",
                  "text": "Die Festung Pirot ist eine bedeutende historische Burg- und Festungsanlage in Pirot.",
                  "category": "castle",
                  "coords": [
                        22.581509,
                        43.159122
                  ]
            },
            {
                  "name": "šanac",
                  "text": "Šanac ist ein historisches militärisches Erdwerk oder eine Festungsstruktur in Pirot.",
                  "category": "fortress",
                  "coords": [
                        22.566183,
                        43.169266
                  ]
            },
            {
                  "name": "Muzej Ponišavlja",
                  "text": "Das Museum von Ponišavlje bewahrt und stellt die reiche Kultur- und Regionalgeschichte von Pirot aus.",
                  "category": "museum",
                  "coords": [
                        22.588504,
                        43.161902
                  ]
            },
            {
                  "name": "Spomenik oslobodiocima Pirota od Turaka",
                  "text": "Dieses Denkmal ehrt die Befreier von Pirot von der osmanischen Herrschaft.",
                  "category": "historical",
                  "coords": [
                        22.590858,
                        43.161276
                  ]
            },
            {
                  "name": "Cvet mladosti",
                  "text": "Die Blume der Jugend ist ein Gedenkmonument in der Stadt Pirot.",
                  "category": "historical",
                  "coords": [
                        22.58892,
                        43.163365
                  ]
            },
            {
                  "name": "Spomenik Dragoljubu Milenoviću Grci",
                  "text": "Diese Gedenkstätte in Pirot ist Dragoljub Milenović Grca gewidmet.",
                  "category": "historical",
                  "coords": [
                        22.567283,
                        43.170335
                  ]
            },
            {
                  "name": "Milivoje Manić Albanta",
                  "text": "Dieses lokale Denkmal in Pirot erinnert an Milivoje Manić Albanta.",
                  "category": "historical",
                  "coords": [
                        22.582637,
                        43.157858
                  ]
            },
            {
                  "name": "Trg Pirotskih Oslobodioca",
                  "text": "Der Platz der Befreier von Pirot ist ein zentraler monumentaler Versammlungsort in der Stadt.",
                  "category": "historical",
                  "coords": [
                        22.586712,
                        43.157394
                  ]
            },
            {
                  "name": "Crkva Rođenja Hristovog",
                  "text": "Die Christi-Geburt-Kirche ist eine bekannte religiöse Stätte, die spirituelle Dienste in Pirot anbietet.",
                  "category": "religious",
                  "coords": [
                        22.58747,
                        43.156455
                  ]
            },
            {
                  "name": "Kompenzaciono jezero",
                  "text": "Компензационо језеро ist ein See in Pirot, ideal zum Spazierengehen und Genießen der Landschaft.",
                  "category": "natural",
                  "coords": [
                        22.606828,
                        43.14692
                  ]
            },
            {
                  "name": "Stadtbad in Pirot",
                  "text": "Das Stadtbad in Pirot ist eine Anlage für das Schwimmen im Freien.",
                  "category": "family",
                  "coords": [
                        22.601722,
                        43.148289
                  ]
            },
            {
                  "name": "Outdoor Pool",
                  "text": "Dieses Freibad in Pirot bietet Bademöglichkeiten an der frischen Luft.",
                  "category": "family",
                  "coords": [
                        22.594815,
                        43.15276
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Pirotski grad",
                  "text": "A piroti vár egy jelentős történelmi kastély és erődítménykomplexum Pirotban.",
                  "category": "castle",
                  "coords": [
                        22.581509,
                        43.159122
                  ]
            },
            {
                  "name": "šanac",
                  "text": "A Šanac egy történelmi katonai földsánc vagy erődítmény Pirotban.",
                  "category": "fortress",
                  "coords": [
                        22.566183,
                        43.169266
                  ]
            },
            {
                  "name": "Muzej Ponišavlja",
                  "text": "A Ponišavlje Múzeum Pirot gazdag kulturális és regionális történelmét őrzi és mutatja be.",
                  "category": "museum",
                  "coords": [
                        22.588504,
                        43.161902
                  ]
            },
            {
                  "name": "Spomenik oslobodiocima Pirota od Turaka",
                  "text": "Ez az emlékmű Pirot oszmán uralom alóli felszabadítóinak állít emléket.",
                  "category": "historical",
                  "coords": [
                        22.590858,
                        43.161276
                  ]
            },
            {
                  "name": "Cvet mladosti",
                  "text": "Az Ifjúság Virága egy emlékmű Pirot városában.",
                  "category": "historical",
                  "coords": [
                        22.58892,
                        43.163365
                  ]
            },
            {
                  "name": "Spomenik Dragoljubu Milenoviću Grci",
                  "text": "Ez a piroti emlékmű Dragoljub Milenović Grca előtt tiszteleg.",
                  "category": "historical",
                  "coords": [
                        22.567283,
                        43.170335
                  ]
            },
            {
                  "name": "Milivoje Manić Albanta",
                  "text": "Ez a helyi emlékmű Pirotban Milivoje Manić Albantának állít emléket.",
                  "category": "historical",
                  "coords": [
                        22.582637,
                        43.157858
                  ]
            },
            {
                  "name": "Trg Pirotskih Oslobodioca",
                  "text": "A Piroti Felszabadítók tere a város egyik központi, monumentális közösségi tere.",
                  "category": "historical",
                  "coords": [
                        22.586712,
                        43.157394
                  ]
            },
            {
                  "name": "Crkva Rođenja Hristovog",
                  "text": "A Krisztus Születése templom egy neves vallási hely, amely spirituális szolgálatot nyújt Pirotban.",
                  "category": "religious",
                  "coords": [
                        22.58747,
                        43.156455
                  ]
            },
            {
                  "name": "Kompenzaciono jezero",
                  "text": "A Компензационо језеро egy tó Pirot területén, amely alkalmas sétára és a táj élvezetére.",
                  "category": "natural",
                  "coords": [
                        22.606828,
                        43.14692
                  ]
            },
            {
                  "name": "piroti városi fürdő",
                  "text": "A piroti városi fürdő egy szabadtéri úszólétesítmény.",
                  "category": "family",
                  "coords": [
                        22.601722,
                        43.148289
                  ]
            },
            {
                  "name": "Outdoor Pool",
                  "text": "Ez a piroti szabadtéri úszómedence fürdőzési lehetőséget kínál a friss levegőn.",
                  "category": "family",
                  "coords": [
                        22.594815,
                        43.15276
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Pirotski grad",
                  "text": "Cetatea Pirot este un important castel istoric și complex de fortificații situat în Pirot.",
                  "category": "castle",
                  "coords": [
                        22.581509,
                        43.159122
                  ]
            },
            {
                  "name": "šanac",
                  "text": "Šanac este un terasament militar istoric sau o structură de fortăreață situată în Pirot.",
                  "category": "fortress",
                  "coords": [
                        22.566183,
                        43.169266
                  ]
            },
            {
                  "name": "Muzej Ponišavlja",
                  "text": "Muzeul Ponišavlje păstrează și expune bogata istorie culturală și regională a orașului Pirot.",
                  "category": "museum",
                  "coords": [
                        22.588504,
                        43.161902
                  ]
            },
            {
                  "name": "Spomenik oslobodiocima Pirota od Turaka",
                  "text": "Acest monument îi onorează pe eliberatorii orașului Pirot de sub dominația otomană.",
                  "category": "historical",
                  "coords": [
                        22.590858,
                        43.161276
                  ]
            },
            {
                  "name": "Cvet mladosti",
                  "text": "Floarea Tinereții este un monument comemorativ situat în orașul Pirot.",
                  "category": "historical",
                  "coords": [
                        22.58892,
                        43.163365
                  ]
            },
            {
                  "name": "Spomenik Dragoljubu Milenoviću Grci",
                  "text": "Acest memorial din Pirot îi este dedicat lui Dragoljub Milenović Grca.",
                  "category": "historical",
                  "coords": [
                        22.567283,
                        43.170335
                  ]
            },
            {
                  "name": "Milivoje Manić Albanta",
                  "text": "Acest monument local din Pirot îl comemorează pe Milivoje Manić Albanta.",
                  "category": "historical",
                  "coords": [
                        22.582637,
                        43.157858
                  ]
            },
            {
                  "name": "Trg Pirotskih Oslobodioca",
                  "text": "Piața Eliberatorilor din Pirot este un spațiu central monumental de adunare din oraș.",
                  "category": "historical",
                  "coords": [
                        22.586712,
                        43.157394
                  ]
            },
            {
                  "name": "Crkva Rođenja Hristovog",
                  "text": "Biserica Nașterea lui Hristos este un sit religios renumit care oferă servicii spirituale în Pirot.",
                  "category": "religious",
                  "coords": [
                        22.58747,
                        43.156455
                  ]
            },
            {
                  "name": "Kompenzaciono jezero",
                  "text": "Компензационо језеро este un lac în Pirot, potrivit pentru plimbări și relaxare în natură.",
                  "category": "natural",
                  "coords": [
                        22.606828,
                        43.14692
                  ]
            },
            {
                  "name": "Baia municipală din Pirot",
                  "text": "Baia municipală din Pirot este o facilitate pentru înot în aer liber.",
                  "category": "family",
                  "coords": [
                        22.601722,
                        43.148289
                  ]
            },
            {
                  "name": "Outdoor Pool",
                  "text": "Această piscină în aer liber din Pirot oferă posibilități de baie în aer liber.",
                  "category": "family",
                  "coords": [
                        22.594815,
                        43.15276
                  ]
            }
      ],
      "en": [
            {
                  "name": "Pirotski grad",
                  "text": "The Pirot Fortress is a significant historic castle and fortification complex located in Pirot.",
                  "category": "castle",
                  "coords": [
                        22.581509,
                        43.159122
                  ]
            },
            {
                  "name": "šanac",
                  "text": "Šanac is a historic military earthwork or fort structure situated in Pirot.",
                  "category": "fortress",
                  "coords": [
                        22.566183,
                        43.169266
                  ]
            },
            {
                  "name": "Muzej Ponišavlja",
                  "text": "The Museum of Ponišavlje preserves and exhibits the rich cultural and regional history of Pirot.",
                  "category": "museum",
                  "coords": [
                        22.588504,
                        43.161902
                  ]
            },
            {
                  "name": "Spomenik oslobodiocima Pirota od Turaka",
                  "text": "This monument honors the liberators of Pirot from the Ottoman rule.",
                  "category": "historical",
                  "coords": [
                        22.590858,
                        43.161276
                  ]
            },
            {
                  "name": "Cvet mladosti",
                  "text": "The Flower of Youth is a commemorative monument situated in the city of Pirot.",
                  "category": "historical",
                  "coords": [
                        22.58892,
                        43.163365
                  ]
            },
            {
                  "name": "Spomenik Dragoljubu Milenoviću Grci",
                  "text": "This memorial in Pirot is dedicated to Dragoljub Milenović Grca.",
                  "category": "historical",
                  "coords": [
                        22.567283,
                        43.170335
                  ]
            },
            {
                  "name": "Milivoje Manić Albanta",
                  "text": "This local monument in Pirot commemorates Milivoje Manić Albanta.",
                  "category": "historical",
                  "coords": [
                        22.582637,
                        43.157858
                  ]
            },
            {
                  "name": "Trg Pirotskih Oslobodioca",
                  "text": "The Square of Pirot's Liberators is a central monumental gathering space in the city.",
                  "category": "historical",
                  "coords": [
                        22.586712,
                        43.157394
                  ]
            },
            {
                  "name": "Crkva Rođenja Hristovog",
                  "text": "The Church of the Nativity of Christ is a renowned religious site providing spiritual services in Pirot.",
                  "category": "religious",
                  "coords": [
                        22.58747,
                        43.156455
                  ]
            },
            {
                  "name": "Kompenzaciono jezero",
                  "text": "Компензационо језеро is a lake in Pirot suitable for walking and enjoying the scenery.",
                  "category": "natural",
                  "coords": [
                        22.606828,
                        43.14692
                  ]
            },
            {
                  "name": "City Bath in Pirot",
                  "text": "The City Bath in Pirot is an outdoor swimming facility.",
                  "category": "family",
                  "coords": [
                        22.601722,
                        43.148289
                  ]
            },
            {
                  "name": "Outdoor Pool",
                  "text": "This open-air swimming pool in Pirot provides outdoor bathing facilities.",
                  "category": "family",
                  "coords": [
                        22.594815,
                        43.15276
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-007",
    coords: [22.5861, 43.1556],
    name: { de: "Pirot", hu: "Pirot", ro: "Pirot", en: "Pirot" },
    description: {
      de: "Eine Stadt im Südosten Serbiens, berühmt für ihre handgewebten Teppiche (Kilims) und Käsespezialitäten.",
      hu: "Délkelet-szerbiai város, amely kézzel szőtt szőnyegeiről (kilim) és sajtkülönlegességeiről híres.",
      ro: "Un oraș în sud-estul Serbiei, faimos pentru covoarele sale țesute manual (kilim) și specialitățile de brânză.",
      en: "A city in southeastern Serbia, famous for its hand-woven carpets (kilims) and cheese specialties.",
      es: "Una ciudad en el sureste de Serbia, famosa por sus alfombras tejidas a mano (kilims) y especialidades de queso.",
      pt: "Uma cidade no sudeste da Sérvia, famosa pelos seus tapetes tecidos à mão (kilims) e especialidades de queijo.",
      fr: "Une ville du sud-est de la Serbie, célèbre pour ses tapis tissés main (kilims) et ses spécialités fromagères.",
    },
    facts: {
      de: ["Piroter Kilim", "Festung Momčilov Grad", "Käse von Pirot"],
      hu: ["Piroti kilim (szőnyeg)", "Momčilov Grad erőd", "Piroti sajt"],
      ro: ["Kilim de Pirot", "Cetatea Momčilov Grad", "Brânză de Pirot"],
      en: ["Pirot kilim", "Momčilov Grad Fortress", "Pirot cheese"],
      es: ["Kilim de Pirot", "Fortaleza Momčilov Grad", "Queso de Pirot"],
      pt: ["Kilim de Pirot", "Fortaleza Momčilov Grad", "Queijo de Pirot"],
      fr: ["Kilim de Pirot", "Forteresse Momčilov Grad", "Fromage de Pirot"],
    },
    descriptionAdvanced: {
      de: "Pirot liegt im Südosten Serbiens an der Nišava, eingebettet zwischen den Ausläufern des Balkangebirges (Stara Planina). Die Stadt blickt auf eine lange Geschichte zurück, die bereits in der Römerzeit als Station Turres an der Via Militaris begann. Ein markantes Wahrzeichen ist die mittelalterliche Festung Momčilov grad aus dem 14. Jahrhundert, die den Zugang zum Pirot-Becken kontrollierte. Weltweite Berühmtheit erlangte die Stadt durch den Pirot-Kelim, einen handgewebten Teppich mit komplexen geometrischen Mustern, dessen Herstellung als immaterielles Kulturerbe geschützt ist. Ebenso bekannt ist der Pirot-Käse (Kačkavalj), der nach traditionellen Rezepten aus der Milch der umliegenden Gebirgsweiden gewonnen wird. Heute ist Pirot ein wichtiges Industriezentrum, insbesondere durch die Reifenproduktion, profitiert aber auch zunehmend vom naturnahen Tourismus im nahegelegenen Naturpark Stara Planina. Die Nähe zur bulgarischen Grenze und die Lage am Korridor X machen die Stadt zu einem bedeutenden logistischen und wirtschaftlichen Knotenpunkt in der Region.",
      hu: "Pirot Délkelet-Szerbiában, a Nišava folyó partján fekszik, a Balkán-hegység (Stara Planina) lábánál. A város hosszú múltra tekint vissza, amely már a római korban elkezdődött, amikor Turres néven a Via Militaris egyik fontos állomása volt. Egyik legjelentősebb műemléke a 14. századból származó Momčilov grad középkori vár, amely egykor a piroti medence bejáratát őrizte. A város világszerte ismertté vált a piroti kilimről (szőnyeg), amelynek kézzel szőtt, bonyolult geometrikus mintái a szellemi világörökség részét képezik. Hasonlóan híres a piroti sajt (Kačkavalj), amelyet hagyományos receptek alapján készítenek a környező hegyi legelőkön nevelt állatok tejéből. Ma Pirot fontos ipari központ, különösen a gumiabroncs-gyártás révén, de egyre többen látogatják a közeli Stara Planina Natúrpark természeti kincsei miatt is. A bolgár határ közelsége és a X-es közlekedési folyosón elfoglalt helye stratégiai fontosságú logisztikai és gazdasági csomóponttá teszi a várost a régióban.",
      ro: "Pirot este situat în sud-estul Serbiei, pe malurile râului Nišava, fiind străjuit de masivul muntos Stara Planina. Orașul are o istorie îndelungată, originile sale datând din perioada romană, când era cunoscut sub numele de Turres, o stație importantă pe drumul Via Militaris. Un reper istoric major este cetatea medievală Momčilov grad, construită în secolul al XIV-lea pentru a proteja accesul în depresiunea Pirot. Orașul este celebru în întreaga lume pentru chilimul de Pirot, un covor țesut manual cu modele geometrice complexe, a cărui tehnică de fabricație este protejată ca patrimoniu cultural imaterial. De asemenea, Pirot este renumit pentru brânza sa tradițională (Kačkavalj), produsă după rețete vechi din laptele animalelor care pasc pe pajiștile montane din împrejurimi. În prezent, Pirot este un centru industrial activ, remarcându-se prin producția de anvelope, dar se dezvoltă și ca destinație turistică datorită proximității față de Parcul Natural Stara Planina. Localizarea sa strategică lângă granița cu Bulgaria și pe coridorul de transport pan-european X îi conferă orașului un rol economic esențial în regiune.",
      en: "Pirot is located in southeastern Serbia on the banks of the Nišava River, nestled at the foothills of the Balkan Mountains (Stara Planina). The city boasts a lengthy history dating back to Roman times when it was known as Turres, a key station on the ancient Via Militaris. A standout landmark is the 14th-century Momčilov grad medieval fortress, which once guarded the entrance to the Pirot Basin. The city achieved global fame through the Pirot kilim, a hand-woven carpet featuring complex geometric patterns, whose production technique is protected as intangible cultural heritage. Equally renowned is the Pirot cheese (Kačkavalj), crafted according to traditional recipes from the milk of livestock grazing on the surrounding mountain pastures. Today, Pirot is a significant industrial hub, particularly noted for tire manufacturing, but it also increasingly benefits from nature-based tourism in the nearby Stara Planina Nature Park. Its strategic location near the Bulgarian border and along Pan-European Corridor X makes the city an important logistical and economic gateway in the region.",
      es: "Pirot se encuentra en el sureste de Serbia, al pie de la montaña Stara Planina. La ciudad es famosa por sus alfombras tejidas a mano, las Pirotski Ćilim, y el sabroso queso de Pirot. La fortaleza medieval de Pirot, también conocida como Momčilov Grad, atestigua la importancia estratégica de la ciudad a lo largo de la histórica Vía Militaris.",
      pt: "Pirot situa-se no sudeste da Sérvia, ao pé da montanha Stara Planina. A cidade é famosa pelos seus tapetes tecidos à mão, os Pirotski Ćilim, e o queijo picante de Pirot. A fortaleza medieval de Pirot, também conhecida como Momčilov Grad, testemunha a importância estratégica da cidade ao longo da histórica Via Militaris.",
      fr: "Pirot se trouve au sud-est de la Serbie, au pied de la montagne Stara Planina. La ville est célèbre pour ses tapis tissés à la main, les Pirotski Ćilim, et le fromage piquant de Pirot. La forteresse médiévale de Pirot, également connue sous le nom de Momčilov Grad, témoigne de l'importance stratégique de la ville le long de l'historique Via Militaris.",
    },
    factsAdvanced: {
      de: ["Die Pirot-Festung wurde im 14. Jahrhundert während der Herrschaft von Prinz Lazar errichtet.", "Die Herstellung der Pirot-Kelims wurde 2002 gesetzlich geschützt.", "Die Stadt liegt an der historischen Route der Via Militaris.", "Pirot ist nur etwa 30 Kilometer von der bulgarischen Grenze entfernt.", "Die Reifenfabrik Tiger Tyres ist ein wichtiger lokaler Arbeitgeber.", "Der traditionelle Pirot-Käse wird aus Schaf- und Kuhmilch hergestellt."],
      hu: ["A piroti várat a 14. században építették Lázár fejedelem uralkodása alatt.", "A piroti kilim (szőnyeg) készítését 2002-ben törvényileg védetté tették.", "A város a történelmi Via Militaris útvonal mentén fekszik.", "Pirot mindössze 30 kilométerre található a bolgár határtól.", "A Tiger Tyres gumiabroncsgyár a régió egyik legnagyobb foglalkoztatója.", "A hagyományos piroti sajtot juh- és tehéntejből készítik."],
      ro: ["Cetatea din Pirot a fost construită în secolul al XIV-lea, sub cneazul Lazăr.", "Chilimul de Pirot a primit protecție legală în anul 2002.", "Orașul este situat pe traseul istoric al drumului roman Via Militaris.", "Pirot se află la o distanță de doar 30 de kilometri de granița cu Bulgaria.", "Fabrica de anvelope Tiger Tyres este un angajator major în zonă.", "Brânza tradițională de Pirot este produsă din lapte de oaie și vacă."],
      en: ["The Pirot fortress was built in the 14th century during Prince Lazar's reign.", "The production of Pirot kilims was legally protected in 2002.", "The city is located on the historical route of the Roman Via Militaris.", "Pirot is situated only about 30 kilometers from the Bulgarian border.", "The Tiger Tyres factory is a major regional industrial employer.", "Traditional Pirot cheese is crafted from a blend of sheep and cow milk."],
      es: ["La fortaleza de Pirot data del siglo XIV", "Las alfombras de Pirot están protegidas como indicación geográfica", "La ciudad era una parada importante en la Vía Militaris", "Pirot fue liberada del dominio otomano en 1877", "El río Nišava fluye por el centro de la ciudad", "Pirot es conocida por la fabricación de productos de caucho"],
      pt: ["A fortaleza de Pirot data do século XIV", "Os tapetes de Pirot estão protegidos como indicação geográfica", "A cidade era uma paragem importante na Via Militaris", "Pirot foi libertada do domínio otomano em 1877", "O rio Nišava corre pelo centro da cidade", "Pirot é conhecida pelo fabrico de produtos de borracha"],
      fr: ["La forteresse de Pirot date du XIVe siècle", "Les tapis de Pirot sont protégés par une indication géographique", "La ville était une étape majeure sur la Via Militaris", "Pirot fut libérée de la domination ottomane en 1877", "La rivière Nišava traverse le centre de la ville", "Pirot est connue pour la fabrication de produits en caoutchouc"],
    },
    image: "/poi-images/RS-007-pirot.webp",
  },
  {
    id: "RS-007-stara-planina", "sights": {
      "de": [
            {
                  "name": "Бабин зуб",
                  "text": "Babin Zub ist ein markanter Gipfel im Stara-Planina-Gebirge in Serbien.",
                  "category": "landmark",
                  "coords": [
                        22.609002,
                        43.36943
                  ]
            },
            {
                  "name": "Plaža",
                  "text": "Plaža ist ein Aussichtspunkt im Stara-Planina-Gebirge.",
                  "category": "natural",
                  "coords": [
                        22.624649,
                        43.37449
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Бабин зуб",
                  "text": "A Babin Zub egy jellegzetes hegycsúcs a szerbiai Stara Planina hegységben.",
                  "category": "landmark",
                  "coords": [
                        22.609002,
                        43.36943
                  ]
            },
            {
                  "name": "Plaža",
                  "text": "Plaža egy kilátópont a Stara Planina hegységben.",
                  "category": "natural",
                  "coords": [
                        22.624649,
                        43.37449
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Бабин зуб",
                  "text": "Babin Zub este un vârf proeminent din munții Stara Planina, Serbia.",
                  "category": "landmark",
                  "coords": [
                        22.609002,
                        43.36943
                  ]
            },
            {
                  "name": "Plaža",
                  "text": "Plaža este un punct de belvedere în munții Stara Planina.",
                  "category": "natural",
                  "coords": [
                        22.624649,
                        43.37449
                  ]
            }
      ],
      "en": [
            {
                  "name": "Babin Zub",
                  "text": "Babin Zub is a prominent peak in the Stara Planina mountain range in Serbia.",
                  "category": "landmark",
                  "coords": [
                        22.609002,
                        43.36943
                  ]
            },
            {
                  "name": "Plaža",
                  "text": "Plaža is a viewpoint in the Stara Planina mountain range.",
                  "category": "natural",
                  "coords": [
                        22.624649,
                        43.37449
                  ]
            }
      ]
},
    type: "mountain",
    parent: "RS-007",
    coords: [22.6000, 43.3700],
    name: { de: "Stara Planina", hu: "Balkán-hegység (Stara Planina)", ro: "Munții Stara Planina", en: "Stara Planina" },
    description: {
      de: "Ein majestätisches Gebirge an der Grenze zu Bulgarien, bekannt für unberührte Natur und Wasserfälle.",
      hu: "Fenséges hegység a bolgár határon, érintetlen természetéről és vízeséseiről ismert.",
      ro: "Un munte majestuos la granița cu Bulgaria, cunoscut pentru natura sa virgină și cascadele sale.",
      en: "A majestic mountain range on the border with Bulgaria, known for untouched nature and waterfalls.",
      es: "Una majestuosa cordillera en la frontera con Bulgaria, conocida por su naturaleza virgen y sus cascadas.",
      pt: "Uma cordilheira majestosa na fronteira com a Bulgária, conhecida pela sua natureza intocada e cascatas.",
      fr: "Une chaîne de montagnes majestueuse à la frontière avec la Bulgarie, connue pour sa nature préservée et ses cascades.",
    },
    facts: {
      de: ["Höchster Gipfel: Midžor", "Wintersportzentrum", "Zahlreiche Wasserfälle"],
      hu: ["Legmagasabb csúcs: Midžor", "Téli sportközpont", "Számos vízesés"],
      ro: ["Cel mai înalt vârf: Midžor", "Centru de sporturi de iarnă", "Numeroase cascade"],
      en: ["Highest peak: Midžor", "Winter sports center", "Numerous waterfalls"],
      es: ["Pico más alto: Midžor", "Centro de deportes de invierno", "Numerosas cascadas"],
      pt: ["Pico mais alto: Midžor", "Centro de desportos de inverno", "Inúmeras cascatas"],
      fr: ["Plus haut sommet : Midžor", "Centre de sports d'hiver", "Nombreuses cascades"],
    }, image: "/poi-images/RS-007-stara-planina.webp",
    descriptionAdvanced: {
      de: "Das Balkangebirge, in Serbien als Stara Planina bekannt, erstreckt sich entlang der Grenze zu Bulgarien und ist eines der beeindruckendsten Gebirgsmassive der Region. Mit dem Midžor, der eine Höhe von 2169 Metern erreicht, beherbergt es den höchsten Gipfel Zentralserbiens. Das Gebirge zeichnet sich durch seine außergewöhnliche Biodiversität aus und wurde aufgrund seiner ökologischen Bedeutung zum Naturpark erklärt. Charakteristisch für die Stara Planina sind die zahlreichen Wasserfälle, wie der malerische Tupavica, sowie tiefe Schluchten und weitläufige Almen, die eine reiche Flora und Fauna beherbergen. Neben seiner ökologischen Funktion hat sich das Gebirge in den letzten Jahren zu einem bedeutenden Zentrum für den Bergtourismus entwickelt, insbesondere durch den Ausbau moderner Skianlagen und Wanderwege. Die traditionelle Architektur der Bergdörfer und die überlieferten Bräuche der lokalen Bevölkerung tragen zum kulturellen Reiz der Region bei. Stara Planina ist somit nicht nur ein wichtiges Wasserreservoir und ökologisches Refugium, sondern auch ein Motor für die nachhaltige Entwicklung des ländlichen Raums im Osten Serbiens.",
      hu: "A Balkán-hegység, amelyet Szerbiában Stara Planina néven ismernek, a bolgár határ mentén húzódik, és a régió egyik legimpozánsabb hegyvonulata. Itt található Közép-Szerbia legmagasabb pontja, a 2169 méter magas Midžor-csúcs. A hegység kiemelkedő biodiverzitásáról ismert, ökológiai jelentősége miatt pedig Natúrparkká nyilvánították. A Stara Planina jellegzetességei a számos vízesés, mint például a festői Tupavica, valamint a mély szurdokok és a kiterjedt hegyi legelők, amelyek gazdag növény- és állatvilágnak adnak otthont. Ökológiai szerepe mellett a hegység az elmúlt években a hegyi turizmus egyik fontos központjává vált, különösen a modern sípályák és túraútvonalak kiépítésének köszönhetően. A hegyi falvak hagyományos építészete és a helyi lakosság ősi szokásai tovább növelik a régió kulturális vonzerejét. A Stara Planina így nemcsak fontos vízbázis és ökológiai menedékhely, hanem Kelet-Szerbia vidéki területeinek fenntartható fejlődését is elősegítő tényező, amely télen és nyáron egyaránt várja a látogatókat.",
      ro: "Munții Balcani, cunoscuți în Serbia sub numele de Stara Planina, se întind de-a lungul graniței cu Bulgaria și reprezintă unul dintre cele mai impresionante masive muntoase din regiune. Cu vârful Midžor, care atinge o înălțime de 2169 de metri, acesta găzduiește cel mai înalt punct din Serbia centrală. Munții se remarcă prin biodiversitatea lor excepțională, fiind declarați parc natural datorită importanței lor ecologice deosebite. Caracteristice pentru Stara Planina sunt numeroasele cascade, precum pitoreasca cascadă Tupavica, precum și cheile adânci și pășunile alpine întinse care adăpostesc o floră și o faună diversificată. Pe lângă funcția sa ecologică, masivul s-a transformat în ultimii ani într-un centru major pentru turismul montan, în special prin dezvoltarea unor pârtii moderne de schi și a unor trasee de drumeție bine marcate. Arhitectura tradițională a satelor de munte și obiceiurile păstrate de populația locală sporesc atractivitatea culturală a zonei. Stara Planina reprezintă astfel nu doar un rezervor de apă și un refugiu ecologic vital, ci și un motor pentru dezvoltarea durabilă a mediului rural din estul Serbiei.",
      en: "The Balkan Mountains, known in Serbia as Stara Planina, stretch along the border with Bulgaria and constitute one of the most impressive mountain ranges in the region. Hosting the Midžor peak, which reaches an altitude of 2,169 meters, it is the highest point in Central Serbia. The mountains are characterized by exceptional biodiversity and have been designated a Nature Park due to their profound ecological significance. Distinctive features of Stara Planina include its numerous waterfalls, such as the picturesque Tupavica, as well as deep gorges and vast alpine pastures that provide a habitat for diverse flora and fauna. In addition to its ecological role, the range has recently evolved into a major center for mountain tourism, particularly through the development of modern ski resorts and extensive hiking trails. The traditional architecture of the mountain villages and the ancestral customs of the local population further enhance the region's cultural appeal. Stara Planina serves not only as a vital water reservoir and ecological sanctuary but also as a key driver for sustainable rural development in Eastern Serbia, attracting visitors year-round.",
      es: "Stara Planina, también conocida como los Montes Balcanes, se extiende a lo largo de la frontera entre Serbia y Bulgaria. Es la montaña más grande del este de Serbia y alberga el Midžor, el pico más alto de Serbia Central. La región es un paraíso para los amantes de la naturaleza y los deportes de invierno, famosa por sus paisajes vírgenes y numerosas cascadas.",
      pt: "Stara Planina, também conhecida como os Montes Balcãs, estende-se ao longo da fronteira entre a Sérvia e a Bulgária. É a maior montanha da Sérvia Oriental e abriga o Midžor, o pico mais alto da Sérvia Central. A região é um paraíso para os amantes da natureza e dos desportos de inverno, famosa pelas suas paisagens intocadas e inúmeras cascatas.",
      fr: "Stara Planina, également connue sous le nom de Grand Balkan, s'étend le long de la frontière entre la Serbie et la Bulgarie. C'est la plus grande montagne de l'est de la Serbie et elle abrite le Midžor, le plus haut sommet de Serbie centrale. La région est un paradis pour les amoureux de la nature et les amateurs de sports d'hiver, réputée pour ses paysages préservés et ses nombreuses cascades.",
    },
    factsAdvanced: {
      de: ["Der Gipfel Midžor ist mit 2169 Metern die höchste Erhebung Zentralserbiens.", "Das Gebirge erstreckt sich über eine Länge von etwa 550 Kilometern.", "Der Naturpark Stara Planina wurde im Jahr 1997 gegründet.", "Beherbergt über 1190 verschiedene Pflanzenarten, viele davon endemisch.", "Der Wasserfall Tupavica ist einer der meistfotografierten des Balkans.", "Ein modernes Skizentrum wurde 2012 bei Jabučko ravnište eröffnet."],
      hu: ["A 2169 méter magas Midžor-csúcs Közép-Szerbia legmagasabb pontja.", "A hegylánc hossza körülbelül 550 kilométeren át húzódik.", "A Stara Planina Natúrparkot 1997-ben alapították.", "Több mint 1190 növényfajnak ad otthont, amelyek közül sok endemikus.", "A Tupavica-vízesés a Balkán egyik legtöbbet fényképezett természeti kincse.", "2012-ben modern síközpont nyílt Jabučko ravnište területén."],
      ro: ["Vârful Midžor este cel mai înalt punct din Serbia centrală, cu 2169 metri.", "Lanțul muntos se întinde pe o lungime de aproximativ 550 de kilometri.", "Parcul Natural Stara Planina a fost înființat în anul 1997.", "Adăpostește peste 1190 de specii de plante, multe fiind endemice.", "Cascada Tupavica este una dintre cele mai fotografiate din Balcani.", "Un centru modern de schi a fost deschis în 2012 la Jabučko ravnište."],
      en: ["The Midžor peak is the highest point in Central Serbia at 2,169 meters.", "The mountain range extends for a total length of about 550 kilometers.", "The Stara Planina Nature Park was officially established in 1997.", "It is home to over 1,190 plant species, many of which are endemic.", "The Tupavica waterfall is among the most photographed in the Balkans.", "A modern ski center was opened in 2012 at Jabučko ravnište."],
      es: ["El pico Midžor se encuentra a una altitud de 2.169 metros", "La cadena montañosa tiene unos 530 kilómetros de longitud", "El Parque Natural Stara Planina se estableció en 1997", "Existen más de 1.200 especies de plantas diferentes aquí", "La región alberga la cascada más alta de Serbia", "Jabučko Ravnište es un moderno centro de esquí"],
      pt: ["O pico Midžor situa-se a uma altitude de 2.169 metros", "A cordilheira tem cerca de 530 quilómetros de comprimento", "O Parque Natural Stara Planina foi estabelecido em 1997", "Existem mais de 1.200 espécies de plantas diferentes aqui", "A região abriga a cascata mais alta da Sérvia", "Jabučko Ravnište é um moderno centro de esqui"],
      fr: ["Le sommet du Midžor culmine à 2 169 mètres d'altitude", "La chaîne de montagnes est longue d'environ 530 kilomètres", "Le parc naturel de Stara Planina a été créé en 1997", "On y trouve plus de 1 200 espèces de plantes différentes", "La région abrite la plus haute cascade de Serbie", "Jabučko Ravnište est un centre de ski moderne"],
    },
  },
  // RS-008 Jablanicki
  {
    id: "RS-008-leskovac", "sights": {
      "de": [
            {
                  "name": "Lokalitet Hisar",
                  "text": "Eine archäologische Fundstätte auf einem Hügel über Leskovac.",
                  "category": "historical",
                  "coords": [
                        21.937814,
                        42.991372
                  ]
            },
            {
                  "name": "Narodno pozorište",
                  "text": "Das städtische Nationaltheater im Zentrum von Leskovac.",
                  "category": "cultural",
                  "coords": [
                        21.948022,
                        42.993609
                  ]
            },
            {
                  "name": "Narodni muzej",
                  "text": "Das Nationalmuseum von Leskovac mit bedeutenden ethnologischen Sammlungen.",
                  "category": "museum",
                  "coords": [
                        21.946485,
                        42.994197
                  ]
            },
            {
                  "name": "Šop-Đokićeva kuća",
                  "text": "Ein historisches Haus im Balkan-Stil, das heute als Museum dient.",
                  "category": "museum",
                  "coords": [
                        21.949301,
                        42.996789
                  ]
            },
            {
                  "name": "Gradska kuća",
                  "text": "Ein Museum, das in einem historischen städtischen Gebäude untergebracht ist.",
                  "category": "museum",
                  "coords": [
                        21.950311,
                        42.994825
                  ]
            },
            {
                  "name": "Aqua Park Atina",
                  "text": "Ein moderner Wasserpark für Freizeitaktivitäten in Leskovac.",
                  "category": "family",
                  "coords": [
                        21.963542,
                        43.002549
                  ]
            },
            {
                  "name": "Spomen-park Revolucije",
                  "text": "Ein von Bogdan Bogdanović entworfener Denkmalpark in Leskovac.",
                  "category": "park",
                  "coords": [
                        21.943073,
                        42.984718
                  ]
            },
            {
                  "name": "Spomenik Oslobodiocima",
                  "text": "Ein Denkmal für die Befreier der Stadt Leskovac.",
                  "category": "historical",
                  "coords": [
                        21.945154,
                        42.995014
                  ]
            },
            {
                  "name": "Spomenik Tomi Zdravkoviću",
                  "text": "Ein Denkmal für den berühmten Sänger Toma Zdravković.",
                  "category": "historical",
                  "coords": [
                        21.944323,
                        42.996235
                  ]
            },
            {
                  "name": "Dečije igralište",
                  "text": "Dieser Kinderspielplatz in Leskovac ist ein fröhlicher Ort, an dem Familien gemeinsam Zeit verbringen können.",
                  "category": "family",
                  "coords": [
                        21.953392,
                        42.985523
                  ]
            },
            {
                  "name": "Dečije igralište Zmajče",
                  "text": "Der Spielplatz Zmajče in Leskovac bietet vielfältige Spielmöglichkeiten für Kinder in einer angenehmen Atmosphäre.",
                  "category": "family",
                  "coords": [
                        21.946381,
                        42.995293
                  ]
            },
            {
                  "name": "Lesko land",
                  "text": "Lesko Land in Leskovac ist ein attraktiver Spielbereich für Kinder, der zum Entdecken und Toben einlädt.",
                  "category": "family",
                  "coords": [
                        21.95897,
                        43.000628
                  ]
            },
            {
                  "name": "SRC Dubočica",
                  "text": "Dieses Sportzentrum in Leskovac verfügt über ein Schwimmbecken für Erholung und Training.",
                  "category": "family",
                  "coords": [
                        21.951283,
                        42.977003
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Lokalitet Hisar",
                  "text": "Régészeti lelőhely a Leskovac feletti dombon.",
                  "category": "historical",
                  "coords": [
                        21.937814,
                        42.991372
                  ]
            },
            {
                  "name": "Narodno pozorište",
                  "text": "A városi Nemzeti Színház Leskovac központjában.",
                  "category": "cultural",
                  "coords": [
                        21.948022,
                        42.993609
                  ]
            },
            {
                  "name": "Narodni muzej",
                  "text": "Leskovaci Nemzeti Múzeum jelentős néprajzi gyűjteményekkel.",
                  "category": "museum",
                  "coords": [
                        21.946485,
                        42.994197
                  ]
            },
            {
                  "name": "Šop-Đokićeva kuća",
                  "text": "Történelmi balkáni stílusú ház, amely ma múzeumként működik.",
                  "category": "museum",
                  "coords": [
                        21.949301,
                        42.996789
                  ]
            },
            {
                  "name": "Gradska kuća",
                  "text": "Történelmi városi épületben elhelyezett múzeum.",
                  "category": "museum",
                  "coords": [
                        21.950311,
                        42.994825
                  ]
            },
            {
                  "name": "Aqua Park Atina",
                  "text": "Modern vízi élménypark Leskovacban.",
                  "category": "family",
                  "coords": [
                        21.963542,
                        43.002549
                  ]
            },
            {
                  "name": "Spomen-park Revolucije",
                  "text": "Bogdan Bogdanović által tervezett emlékpark Leskovacban.",
                  "category": "park",
                  "coords": [
                        21.943073,
                        42.984718
                  ]
            },
            {
                  "name": "Spomenik Oslobodiocima",
                  "text": "Emlékmű Leskovac város felszabadítóinak.",
                  "category": "historical",
                  "coords": [
                        21.945154,
                        42.995014
                  ]
            },
            {
                  "name": "Spomenik Tomi Zdravkoviću",
                  "text": "Emlékmű a híres énekes, Toma Zdravković tiszteletére.",
                  "category": "historical",
                  "coords": [
                        21.944323,
                        42.996235
                  ]
            },
            {
                  "name": "Dečije igralište",
                  "text": "Ez a leskovaci játszótér egy vidám hely, ahol a családok együtt tölthetik az időt.",
                  "category": "family",
                  "coords": [
                        21.953392,
                        42.985523
                  ]
            },
            {
                  "name": "Dečije igralište Zmajče",
                  "text": "A leskovaci Zmajče játszótér változatos játéklehetőségeket kínál a gyermekeknek kellemes környezetben.",
                  "category": "family",
                  "coords": [
                        21.946381,
                        42.995293
                  ]
            },
            {
                  "name": "Lesko land",
                  "text": "A leskovaci Lesko land egy vonzó játszóhely a gyermekek számára, amely felfedezésre és hancúrozásra hív.",
                  "category": "family",
                  "coords": [
                        21.95897,
                        43.000628
                  ]
            },
            {
                  "name": "SRC Dubočica",
                  "text": "Ez a leskovaci sportközpont úszómedencével várja a kikapcsolódni és edzeni vágyókat.",
                  "category": "family",
                  "coords": [
                        21.951283,
                        42.977003
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Lokalitet Hisar",
                  "text": "Un sit arheologic situat pe un deal deasupra orașului Leskovac.",
                  "category": "historical",
                  "coords": [
                        21.937814,
                        42.991372
                  ]
            },
            {
                  "name": "Narodno pozorište",
                  "text": "Teatrul Național municipal în centrul orașului Leskovac.",
                  "category": "cultural",
                  "coords": [
                        21.948022,
                        42.993609
                  ]
            },
            {
                  "name": "Narodni muzej",
                  "text": "Muzeul Național din Leskovac cu colecții etnologice importante.",
                  "category": "museum",
                  "coords": [
                        21.946485,
                        42.994197
                  ]
            },
            {
                  "name": "Šop-Đokićeva kuća",
                  "text": "O casă istorică în stil balcanic, care astăzi servește ca muzeu.",
                  "category": "museum",
                  "coords": [
                        21.949301,
                        42.996789
                  ]
            },
            {
                  "name": "Gradska kuća",
                  "text": "Un muzeu găzduit într-o clădire istorică a orașului.",
                  "category": "museum",
                  "coords": [
                        21.950311,
                        42.994825
                  ]
            },
            {
                  "name": "Aqua Park Atina",
                  "text": "Un parc acvatic modern pentru activități de recreere în Leskovac.",
                  "category": "family",
                  "coords": [
                        21.963542,
                        43.002549
                  ]
            },
            {
                  "name": "Spomen-park Revolucije",
                  "text": "Un parc memorial proiectat de Bogdan Bogdanović în Leskovac.",
                  "category": "park",
                  "coords": [
                        21.943073,
                        42.984718
                  ]
            },
            {
                  "name": "Spomenik Oslobodiocima",
                  "text": "Un monument dedicat eliberatorilor orașului Leskovac.",
                  "category": "historical",
                  "coords": [
                        21.945154,
                        42.995014
                  ]
            },
            {
                  "name": "Spomenik Tomi Zdravkoviću",
                  "text": "Un monument dedicat celebrului cântăreț Toma Zdravković.",
                  "category": "historical",
                  "coords": [
                        21.944323,
                        42.996235
                  ]
            },
            {
                  "name": "Dečije igralište",
                  "text": "Acest loc de joacă din Leskovac este un spațiu vesel unde familiile pot petrece timp împreună.",
                  "category": "family",
                  "coords": [
                        21.953392,
                        42.985523
                  ]
            },
            {
                  "name": "Dečije igralište Zmajče",
                  "text": "Locul de joacă Zmajče din Leskovac oferă diverse opțiuni de joacă pentru copii într-o atmosferă plăcută.",
                  "category": "family",
                  "coords": [
                        21.946381,
                        42.995293
                  ]
            },
            {
                  "name": "Lesko land",
                  "text": "Lesko land din Leskovac este o zonă de joacă atractivă pentru copii, care invită la explorare și mișcare.",
                  "category": "family",
                  "coords": [
                        21.95897,
                        43.000628
                  ]
            },
            {
                  "name": "SRC Dubočica",
                  "text": "Acest centru sportiv din Leskovac dispune de o piscină pentru recreere și antrenament.",
                  "category": "family",
                  "coords": [
                        21.951283,
                        42.977003
                  ]
            }
      ],
      "en": [
            {
                  "name": "Lokalitet Hisar",
                  "text": "An archaeological site located on a hill overlooking Leskovac.",
                  "category": "historical",
                  "coords": [
                        21.937814,
                        42.991372
                  ]
            },
            {
                  "name": "Narodno pozorište",
                  "text": "The municipal National Theatre in the center of Leskovac.",
                  "category": "cultural",
                  "coords": [
                        21.948022,
                        42.993609
                  ]
            },
            {
                  "name": "Narodni muzej",
                  "text": "The National Museum of Leskovac featuring important ethnological collections.",
                  "category": "museum",
                  "coords": [
                        21.946485,
                        42.994197
                  ]
            },
            {
                  "name": "Šop-Đokićeva kuća",
                  "text": "A historic Balkan-style house that now serves as a museum.",
                  "category": "museum",
                  "coords": [
                        21.949301,
                        42.996789
                  ]
            },
            {
                  "name": "Gradska kuća",
                  "text": "A museum housed in a historical urban building.",
                  "category": "museum",
                  "coords": [
                        21.950311,
                        42.994825
                  ]
            },
            {
                  "name": "Aqua Park Atina",
                  "text": "A modern water park for leisure activities in Leskovac.",
                  "category": "family",
                  "coords": [
                        21.963542,
                        43.002549
                  ]
            },
            {
                  "name": "Memorial of the Revolution",
                  "text": "A memorial park designed by Bogdan Bogdanović in Leskovac.",
                  "category": "park",
                  "coords": [
                        21.943073,
                        42.984718
                  ]
            },
            {
                  "name": "Spomenik Oslobodiocima",
                  "text": "A monument to the liberators of the city of Leskovac.",
                  "category": "historical",
                  "coords": [
                        21.945154,
                        42.995014
                  ]
            },
            {
                  "name": "Spomenik Tomi Zdravkoviću",
                  "text": "A monument to the famous singer Toma Zdravković.",
                  "category": "historical",
                  "coords": [
                        21.944323,
                        42.996235
                  ]
            },
            {
                  "name": "Dečije igralište",
                  "text": "This children's playground in Leskovac is a cheerful spot where families can spend time together.",
                  "category": "family",
                  "coords": [
                        21.953392,
                        42.985523
                  ]
            },
            {
                  "name": "Dečije igralište Zmajče",
                  "text": "The Zmajče playground in Leskovac offers various play options for children in a pleasant atmosphere.",
                  "category": "family",
                  "coords": [
                        21.946381,
                        42.995293
                  ]
            },
            {
                  "name": "Lesko land",
                  "text": "Lesko land in Leskovac is an attractive play area for children that invites exploration and play.",
                  "category": "family",
                  "coords": [
                        21.95897,
                        43.000628
                  ]
            },
            {
                  "name": "SRC Dubočica",
                  "text": "This sports center in Leskovac features a swimming pool for recreation and training.",
                  "category": "family",
                  "coords": [
                        21.951283,
                        42.977003
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-008",
    coords: [21.9461, 42.9981],
    name: { de: "Leskovac", hu: "Leskovac", ro: "Leskovac", en: "Leskovac" },
    description: {
      de: "Ein Zentrum in Südserbien, weltbekannt für seine Grillspezialitäten und das jährliche Grillfest 'Roštiljijada'.",
      hu: "Dél-szerbiai központ, világszerte ismert grillételeiről és az évenkénti 'Roštiljijada' grillfesztiválról.",
      ro: "Un centru din sudul Serbiei, cunoscut în întreaga lume pentru specialitățile sale la grătar și festivalul anual 'Roštiljijada'.",
      en: "A center in southern Serbia, world-famous for its grill specialties and the annual 'Roštiljijada' grill festival.",
      es: "Un centro en el sur de Serbia, mundialmente famoso por sus especialidades a la parrilla y el festival anual 'Roštiljijada'.",
      pt: "Um centro no sul da Sérvia, mundialmente famoso pelas suas especialidades grelhadas e pelo festival anual 'Roštiljijada'.",
      fr: "Un centre du sud de la Serbie, mondialement connu pour ses spécialités de grillades et son festival annuel 'Roštiljijada'.",
    },
    facts: {
      de: ["Grill-Hauptstadt", "Roštiljijada Festival", "Historische Textilindustrie"],
      hu: ["A grill fővárosa", "Roštiljijada fesztivál", "Történelmi textilipar"],
      ro: ["Capitala grătarului", "Festivalul Roštiljijada", "Industrie textilă istorică"],
      en: ["Grill capital", "Roštiljijada festival", "Historical textile industry"],
      es: ["Capital de la parrilla", "Festival Roštiljijada", "Industria textil histórica"],
      pt: ["Capital do grelhado", "Festival Roštiljijada", "Indústria têxtil histórica"],
      fr: ["Capitale des grillades", "Festival Roštiljijada", "Industrie textile historique"],
    },
    descriptionAdvanced: {
      de: "Leskovac liegt im fruchtbaren Tal der Südlichen Morava und ist das wirtschaftliche Zentrum des Bezirks Jablanica. Die Stadt erlebte Ende des 19. Jahrhunderts einen rasanten Aufschwung und wurde aufgrund ihrer florierenden Textilindustrie oft als Klein-Manchester bezeichnet. Heute ist Leskovac weit über die Landesgrenzen hinaus für seine kulinarischen Traditionen bekannt, insbesondere für das Festival Roštiljijada, das jährlich Tausende Besucher anzieht und die lokale Grillkunst feiert. Historisch bedeutsam ist der nahegelegene Hisar-Hügel, eine archäologische Stätte mit Siedlungsspuren aus verschiedenen Epochen von der Bronzezeit bis zum Mittelalter. Das Stadtzentrum ist geprägt von einer Mischung aus moderner Architektur und Gebäuden aus der bürgerlichen Ära, während das Textilmuseum die industrielle Vergangenheit dokumentiert. In der Umgebung von Leskovac befinden sich fünf künstliche Seen und der Naturpark Kukavica, die vielfältige Möglichkeiten für Freizeitaktivitäten bieten. Die Stadt bleibt ein wichtiger landwirtschaftlicher Produzent, besonders bekannt für die Leskovac-Paprika, und ist ein lebendiger Mittelpunkt der südserbischen Kultur.",
      hu: "Leskovac a Déli-Morava folyó termékeny völgyében fekszik, és a Jablanica körzet gazdasági központja. A város a 19. század végén gyors fejlődésen ment keresztül, és virágzó textilipara miatt gyakran emlegették Kis Manchesterként. Ma Leskovac messze a határokon túl is ismert gasztronómiai hagyományairól, különösen a Roštiljijada fesztiválról, amely évente látogatók ezreit vonzza, hogy megünnepeljék a helyi grillművészetet. Történelmileg kiemelkedő a közeli Hisar-domb, amely egy fontos régészeti lelőhely a bronzkortól a középkorig terjedő korszakokból származó leletekkel. A városközpontban a modern építészet és a polgári korszak épületei keverednek, míg a Textilmúzeum hűen dokumentálja az ipari múltat. Leskovac környékén öt mesterséges tó és a Kukavica Natúrpark található, amelyek változatos kikapcsolódási lehetőségeket kínálnak. A város továbbra is jelentős mezőgazdasági termelő, különösen a híres leskovaci paprika révén, és Dél-Szerbia egyik legélénkebb kulturális központjaként működik, ahol a hagyományok és a modern városi élet szervesen összekapcsolódnak.",
      ro: "Leskovac este situat în valea fertilă a Moravei de Sud, fiind centrul economic și administrativ al districtului Jablanica. Orașul a cunoscut o dezvoltare rapidă la sfârșitul secolului al XIX-lea, fiind supranumit Micul Manchester datorită industriei sale textile înfloritoare de la acea vreme. Astăzi, Leskovac este renumit dincolo de granițele țării pentru tradițiile sale culinare, în special pentru festivalul Roštiljijada, care atrage anual mii de turiști pentru a celebra arta preparatelor la grătar. Din punct de vedere istoric, dealul Hisar este un reper major, fiind un sit arheologic cu vestigii care datează din epoca bronzului până în perioada medievală. Centrul orașului prezintă un amestec de arhitectură modernă și clădiri din epoca burgheză, în timp ce Muzeul Textilului documentează trecutul industrial al regiunii. În împrejurimile orașului se află cinci lacuri artificiale și parcul natural Kukavica, oferind numeroase opțiuni pentru activități în aer liber. Orașul rămâne un producător agricol important, fiind faimos pentru ardeiul de Leskovac, și reprezintă un focar vibrant de cultură și tradiție în sudul Serbiei.",
      en: "Leskovac is situated in the fertile valley of the South Morava River and serves as the economic hub of the Jablanica District. The city experienced rapid growth in the late 19th century and was often referred to as Little Manchester due to its then-flourishing textile industry. Today, Leskovac is internationally recognized for its rich culinary traditions, most notably the Roštiljijada barbecue festival, which attracts thousands of visitors annually to celebrate local grilling expertise. Historically, the nearby Hisar Hill is of great significance, serving as an archaeological site with remains spanning from the Bronze Age to the Middle Ages. The city center features a blend of modern architecture and buildings from the civic era, while the Textile Museum meticulously documents its industrial heritage. Surrounding Leskovac are five artificial lakes and the Kukavica Nature Park, offering diverse opportunities for outdoor recreation and leisure. The city remains a vital agricultural producer, particularly famous for the Leskovac pepper, and continues to be a vibrant center of culture and traditional craftsmanship in southern Serbia.",
      es: "Leskovac es una ciudad importante en el sur de Serbia, situada a orillas del río Veternica. En el siglo XIX fue apodada la \"Manchester serbia\" debido a su próspera industria textil. Hoy en día, Leskovac es conocida en todo el mundo por la Roštiljijada, un festival anual de parrilladas donde se celebra la famosa cocina a la brasa de Leskovac.",
      pt: "Leskovac é uma cidade importante no sul da Sérvia, situada nas margens do rio Veternica. No século XIX, foi apelidada de \"Manchester Sérvia\" devido à sua florescente indústria têxtil. Hoje, Leskovac é conhecida mundialmente pela Roštiljijada, um festival anual de grelhados onde se celebra a famosa culinária de Leskovac.",
      fr: "Leskovac est une ville importante du sud de la Serbie, située sur la rivière Veternica. Au XIXe siècle, elle était surnommée la « Manchester serbe » en raison de son industrie textile florissante. Aujourd'hui, Leskovac est mondialement connue pour la Roštiljijada, un festival annuel de grillades où l'on célèbre la célèbre cuisine au barbecue de Leskovac.",
    },
    factsAdvanced: {
      de: ["Leskovac wurde im 19. Jahrhundert wegen seiner Textilwerke Klein-Manchester genannt.", "Das Grillfest Roštiljijada findet seit 1989 jährlich statt.", "Das Textilmuseum der Stadt wurde im Jahr 1953 eröffnet.", "Der Fluss Veternica fließt direkt durch das Stadtgebiet.", "Der Hisar-Hügel ist seit über 3000 Jahren kontinuierlich besiedelt.", "Die Leskovac-Paprika ist ein geschütztes geografisches Erzeugnis."],
      hu: ["Leskovacot a 19. században textilgyárai miatt Kis Manchesternek hívták.", "A Roštiljijada grillfesztivált 1989 óta rendezik meg minden évben.", "A város Textilmúzeumát 1953-ban nyitották meg.", "A Veternica folyó közvetlenül a városon keresztül folyik.", "A Hisar-domb már több mint 3000 éve folyamatosan lakott terület.", "A leskovaci paprika eredetvédett földrajzi árujelzővel rendelkezik."],
      ro: ["Leskovac a fost numit Micul Manchester în secolul XIX datorită fabricilor textile.", "Festivalul de grătar Roštiljijada se organizează anual din 1989.", "Muzeul Textilului din oraș a fost deschis în anul 1953.", "Râul Veternica trece direct prin zona urbană a orașului.", "Dealul Hisar este locuit continuu de peste 3000 de ani.", "Ardeiul de Leskovac este un produs cu indicație geografică protejată."],
      en: ["Leskovac was dubbed Little Manchester in the 19th century for its textile mills.", "The Roštiljijada barbecue festival has been held annually since 1989.", "The city's Textile Museum was officially opened in 1953.", "The Veternica River flows directly through the city's urban area.", "Hisar Hill has been continuously inhabited for over 3,000 years.", "The Leskovac pepper is a product with protected geographical status."],
      es: ["La Roštiljijada atrae anualmente a más de 500.000 visitantes", "La ciudad fue mencionada por primera vez en un documento en 1308", "Leskovac tuvo una de las primeras centrales eléctricas de Serbia en 1903", "La colina Hisar alberga un importante sitio arqueológico", "La ciudad es el centro del distrito de Jablanica", "Leskovac es famosa por sus especialidades de pimentón"],
      pt: ["A Roštiljijada atrai anualmente mais de 500.000 visitantes", "A cidade foi mencionada pela primeira vez num documento em 1308", "Leskovac teve uma das primeiras centrais elétricas da Sérvia em 1903", "A colina Hisar abriga um sítio arqueológico", "A cidade situa-se no centro do distrito de Jablanica", "Leskovac é famosa pelas suas especialidades de pimento"],
      fr: ["La Roštiljijada attire chaque année plus de 500 000 visiteurs", "La ville a été mentionnée pour la première fois en 1308", "Leskovac possédait l'une des premières centrales électriques de Serbie en 1903", "La colline d'Hisar abrite un site archéologique", "La ville est le centre du district de Jablanica", "Leskovac est célèbre pour ses spécialités à base de paprika"],
    },
    image: "/poi-images/RS-008-leskovac.webp",
  },
  {
    id: "RS-008-caricin-grad", "sights": {
      "de": [
            {
                  "name": "Iustiniana Prima",
                  "text": "Eine bedeutende byzantinische Stadt, die im 6. Jahrhundert von Kaiser Justinian I. gegründet wurde.",
                  "category": "historical",
                  "coords": [
                        21.670251,
                        42.95215
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Царичин град",
                  "text": "Fontos bizánci város, amelyet I. Jusztiniánusz császár alapított a 6. században.",
                  "category": "historical",
                  "coords": [
                        21.670251,
                        42.95215
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Царичин град",
                  "text": "Un important oraș bizantin fondat de împăratul Iustinian I în secolul al VI-lea.",
                  "category": "historical",
                  "coords": [
                        21.670251,
                        42.95215
                  ]
            }
      ],
      "en": [
            {
                  "name": "Justiniana Prima",
                  "text": "An important Byzantine city founded by Emperor Justinian I in the 6th century.",
                  "category": "historical",
                  "coords": [
                        21.670251,
                        42.95215
                  ]
            }
      ]
},
    type: "historical",
    parent: "RS-008",
    coords: [21.6700, 42.9500],
    name: { de: "Caričin Grad", hu: "Caričin Grad (Justiniana Prima)", ro: "Caričin Grad", en: "Caričin Grad" },
    description: {
      de: "Die Ruinen der byzantinischen Stadt Justiniana Prima, erbaut von Kaiser Justinian I. im 6. Jahrhundert.",
      hu: "Justiniana Prima bizánci város romjai, amelyet I. Justinianus császár építtetett a 6. században.",
      ro: "Ruinele orașului bizantin Justiniana Prima, construit de împăratul Iustinian I în secolul al VI-lea.",
      en: "The ruins of the Byzantine city Justiniana Prima, built by Emperor Justinian I in the 6th century.",
      es: "Las ruinas de la ciudad bizantina de Justiniana Prima, construida por el emperador Justiniano I en el siglo VI.",
      pt: "As ruínas da cidade bizantina de Justiniana Prima, construída pelo imperador Justiniano I no século VI.",
      fr: "Les ruines de la ville byzantine de Justiniana Prima, construite par l'empereur Justinien Ier au VIe siècle.",
    },
    facts: {
      de: ["Bedeutende archäologische Stätte", "Frühchristliche Basiliken", "Geplante Stadt"],
      hu: ["Jelentős régészeti lelőhely", "Korakeresztény bazilikák", "Tervezett város"],
      ro: ["Sit arheologic important", "Bazilici creștine timpurii", "Oraș planificat"],
      en: ["Important archaeological site", "Early Christian basilicas", "Planned city"],
      es: ["Importante sitio arqueológico", "Basílicas cristianas primitivas", "Ciudad planificada"],
      pt: ["Importante sítio arqueológico", "Basílicas cristãs primitivas", "Cidade planeada"],
      fr: ["Site archéologique majeur", "Basiliques paléochrétiennes", "Ville planifiée"],
    }, image: "/poi-images/RS-008-caricin-grad.webp",
    descriptionAdvanced: {
      de: "Caričin Grad, auch bekannt als Justiniana Prima, ist eine der bedeutendsten byzantinischen archäologischen Stätten auf dem Balkan. Die Stadt wurde im 6. Jahrhundert (um 535 n. Chr.) vom Kaiser Justinian I. unweit seines Geburtsortes erbaut und diente als Sitz des Erzbistums von Illyricum. Die Anlage zeichnet sich durch ihre fortschrittliche Stadtplanung aus, die eine Akropolis, eine Oberstadt und eine Unterstadt mit monumentalen Kirchen, öffentlichen Plätzen und aufwendigen Mosaiken umfasst. Besonders beeindruckend sind die Überreste des bischöflichen Palastes und der Basiliken, die von der einstigen Pracht dieses christlichen Zentrums zeugen. Trotz ihrer Bedeutung existierte die Stadt nur kurze Zeit und wurde bereits im frühen 7. Jahrhundert unter dem Druck der slawischen und awarischen Wanderungen verlassen. Heute bietet die Stätte, die sich auf einem Plateau nahe der Stadt Lebane befindet, faszinierende Einblicke in die spätrömische und frühbyzantinische Zivilisation. Caričin Grad steht auf der Tentativliste des UNESCO-Welterbes und wird kontinuierlich archäologisch erforscht, um die komplexen Strukturen dieses antiken Urbanismus zu entschlüsseln.",
      hu: "Caričin Grad, más néven Justiniana Prima, a Balkán egyik legjelentősebb bizánci régészeti lelőhelye, amely Szerbia déli részén található. A várost a 6. században, 535 körül alapította I. Iusztinianosz császár szülőhelyének közelében, és Illyricum érsekségének székhelyéül szolgált. A település kiemelkedik fejlett várostervezésével, amely magában foglal egy akropoliszt, egy felső- és egy alsóvárost, monumentális templomokkal, közterekkel és gazdag mozaikokkal díszítve. Különösen lenyűgözőek a püspöki palota és a bazilikák maradványai, amelyek az egykori keresztény vallási központ pompájáról tanúskodnak. Jelentősége ellenére a város csak rövid ideig létezett, a 7. század elején az avar és szláv betörések hatására elnéptelenedett. Ma a Lebane városa melletti fennsíkon található romkert lenyűgöző betekintést nyújt a késő római és kora bizánci civilizáció életébe és építészetébe. Caričin Grad szerepel az UNESCO Világörökségi várólistáján, és folyamatos régészeti kutatások helyszíne, amelyek célja az ókori urbanizmus e komplex szerkezetének teljes feltárása és megőrzése.",
      ro: "Caričin Grad, cunoscut și sub numele de Justiniana Prima, reprezintă unul dintre cele mai importante situri arheologice bizantine din Balcani. Orașul a fost ctitorit în secolul al VI-lea (aproximativ anul 535 d.Hr.) de către împăratul Iustinian I în apropierea locului său de naștere, servind drept reședință a Arhiepiscopiei Illyricum. Situl se remarcă printr-o planificare urbană avansată, cuprinzând o acropolă, un oraș de sus și unul de jos, cu biserici monumentale, piețe publice și mozaicuri elaborate. Impresionante sunt resturile palatului episcopal și ale bazilicilor, care atestă splendoarea de odinioară a acestui centru creștin major. În ciuda importanței sale strategice și religioase, orașul a avut o existență scurtă, fiind abandonat la începutul secolului al VII-lea din cauza migrațiilor slave și avare. Astăzi, situl situat pe un platou lângă localitatea Lebane oferă perspective fascinante asupra civilizației romane târzii și bizantine timpurii. Caričin Grad este înscris pe lista tentativă a Patrimoniului Mondial UNESCO și face obiectul unor cercetări arheologice continue pentru a descifra structurile complexe ale acestui model de urbanism antic.",
      en: "Caričin Grad, also known as Justiniana Prima, is one of the most significant Byzantine archaeological sites in the Balkans, located in southern Serbia. The city was founded in the 6th century (around 535 AD) by Emperor Justinian I near his birthplace and served as the administrative and religious seat of the Archbishopric of Illyricum. The site is notable for its sophisticated urban planning, featuring an acropolis, an upper town, and a lower town with monumental churches, public squares, and intricate mosaics. Particularly impressive are the remains of the episcopal palace and several large basilicas, which testify to the former grandeur of this major early Christian center. Despite its prominence, the city existed for a relatively short period and was abandoned in the early 7th century under the pressure of Slavic and Avar migrations. Today, located on a plateau near the town of Lebane, the site offers fascinating insights into late Roman and early Byzantine civilization and architecture. Caričin Grad is currently on the UNESCO World Heritage tentative list and remains a site of ongoing archaeological research aimed at uncovering the complex structures of this ancient urban masterpiece.",
      es: "Caričin Grad, también conocida como Justiniana Prima, es un importante sitio arqueológico en el sur de Serbia, cerca de Lebane. La ciudad fue fundada en el siglo VI por el emperador bizantino Justiniano I cerca de su lugar de nacimiento. Fue un importante centro eclesiástico y administrativo antes de ser abandonada a principios del siglo VII.",
      pt: "Caričin Grad, também conhecida como Justiniana Prima, é um importante sítio arqueológico no sul da Sérvia, perto de Lebane. A cidade foi fundada no século VI pelo imperador bizantino Justiniano I, perto do seu local de nascimento. Foi um importante centro eclesiástico e administrativo antes de ser abandonada no início do século VII.",
      fr: "Caričin Grad, également connue sous le nom de Justiniana Prima, est un site archéologique majeur du sud de la Serbie, près de Lebane. La ville a été fondée au VIe siècle par l'empereur byzantin Justinien Ier à proximité de son lieu de naissance. Elle fut un centre ecclésiastique et administratif important avant d'être abandonnée au début du VIIe siècle.",
    },
    factsAdvanced: {
      de: ["Erbaut um 535 n. Chr. auf Befehl von Kaiser Justinian I.", "Die Stadt verfügte über ein hochentwickeltes Aquäduktsystem.", "Wurde bereits im Jahr 615 n. Chr. wieder verlassen.", "Befand sich in der Nähe des antiken Geburtsortes des Kaisers, Tauresium.", "Das Areal umfasst acht Basiliken und einen bischöflichen Palast.", "Die archäologische Stätte erstreckt sich über eine Fläche von ca. 10 Hektar."],
      hu: ["535 körül épült I. Iusztinianosz bizánci császár parancsára.", "A város rendkívül fejlett akvadukt-hálózattal (vízvezeték) rendelkezett.", "Már 615-ben elnéptelenedett a népvándorlás hullámai miatt.", "A császár feltételezett szülőhelye, Tauresium közelében feküdt.", "A terület nyolc bazilikát és egy püspöki palotát foglal magában.", "A régészeti lelőhely körülbelül 10 hektárnyi területen fekszik."],
      ro: ["Construit în jurul anului 535 la ordinul împăratului Iustinian I.", "Orașul dispunea de un sistem de apeducte extrem de sofisticat.", "A fost abandonat încă din anul 615 d.Hr. din cauza migrațiilor.", "Se afla în apropierea locului natal al împăratului, Tauresium.", "Situl cuprinde opt bazilici și un palat episcopal monumental.", "Situl arheologic se întinde pe o suprafață de aproximativ 10 hectare."],
      en: ["Built around 535 AD by order of the Byzantine Emperor Justinian I.", "The city featured a highly sophisticated aqueduct system for water supply.", "It was abandoned as early as 615 AD due to various migrations.", "Located near the Emperor's presumed ancient birthplace, Tauresium.", "The site contains eight basilicas and a monumental episcopal palace.", "The archaeological area covers an area of approximately 10 hectares."],
      es: ["La ciudad fue construida entre los años 535 y 545 d.C.", "Justiniana Prima fue sede de un arzobispado", "El sitio arqueológico incluye una acrópolis y una ciudad baja", "Un acueducto de 20 km de largo abastecía de agua a la ciudad", "Se descubrieron numerosos mosaicos en la basílica", "La ciudad fue destruida por los eslavos alrededor del año 615"],
      pt: ["A cidade foi construída entre os anos 535 e 545 d.C.", "Justiniana Prima foi sede de um arcebispado", "O sítio arqueológico inclui uma acrópole e uma cidade baixa", "Um aqueduto de 20 km de comprimento abastecia a cidade com água", "Inúmeros mosaicos foram descobertos na basílica", "A cidade foi destruída pelos eslavos por volta do ano 615"],
      fr: ["La ville a été construite entre 535 et 545 après J.-C.", "Justiniana Prima était le siège d'un archevêché", "Le site comprend une acropole et une ville basse", "Un aqueduc de 20 km de long alimentait la ville en eau", "De nombreuses mosaïques ont été découvertes dans la basilique", "La ville a été détruite par les Slaves vers l'an 615"],
    },
  },
  // RS-009 Raški
  {
    id: "RS-009-kraljevo", "sights": {"de": [{"name": "Plaža „Mirina česma”", "text": "Ein lokaler Strand am Fluss Ibar in Kraljevo, benannt nach einer historischen Quelle.", "category": "recreational", "coords": [20.677273, 43.725086]}, {"name": "Narodni muzej", "text": "Das Nationalmuseum von Kraljevo präsentiert die reiche Geschichte und Kunst der Region.", "category": "museum", "coords": [20.683698, 43.725306]}, {"name": "Gradska plaža", "text": "Der Hauptstrand am Fluss Ibar, ein beliebter Sommertreffpunkt in Kraljevo.", "category": "recreational", "coords": [20.685627, 43.720776]}, {"name": "Plaža „Siđi do reke”", "text": "Ein malerischer Flussstrand in Kraljevo, ideal zum Entspannen am Ibar.", "category": "recreational", "coords": [20.664379, 43.722534]}, {"name": "Spomenik srpskom vojniku", "text": "Dieses markante Denkmal ist ein Symbol von Kraljevo und ehrt die gefallenen Soldaten.", "category": "historical", "coords": [20.687293, 43.723528]}, {"name": "Spomen park „Oktobarskih žrtava”", "text": "Ein Gedenkpark in Kraljevo für die Opfer der Massenerschießungen im Oktober 1941.", "category": "park", "coords": [20.6921, 43.730493]}, {"name": "Most Milomira Glavčića", "text": "Eine moderne Brücke über den Ibar in Kraljevo, die nach ihrem Wohltäter benannt ist.", "category": "landmark", "coords": [20.679658, 43.7235]}], "hu": [{"name": "Plaža „Mirina česma”", "text": "Helyi strand az Ibar-folyón Kraljevóban, egy történelmi forrásról elnevezve.", "category": "recreational", "coords": [20.677273, 43.725086]}, {"name": "Narodni muzej", "text": "A Kraljevói Nemzeti Múzeum a régió gazdag történelmét és művészetét mutatja be.", "category": "museum", "coords": [20.683698, 43.725306]}, {"name": "Gradska plaža", "text": "Az Ibar-folyó fő strandja, Kraljevo népszerű nyári találkozóhelye.", "category": "recreational", "coords": [20.685627, 43.720776]}, {"name": "Plaža „Siđi do reke”", "text": "Festői folyóparti strand Kraljevóban, ideális a pihenésre az Ibar partján.", "category": "recreational", "coords": [20.664379, 43.722534]}, {"name": "Spomenik srpskom vojniku", "text": "Ez a jellegzetes emlékmű Kraljevo szimbóluma, amely az elesett katonáknak állít emléket.", "category": "historical", "coords": [20.687293, 43.723528]}, {"name": "Spomen park „Oktobarskih žrtava”", "text": "Emlékpark Kraljevóban az 1941. októberi tömeges kivégzések áldozatainak emlékére.", "category": "park", "coords": [20.6921, 43.730493]}, {"name": "Most Milomira Glavčića", "text": "Modern híd az Ibar felett Kraljevóban, amelyet jótevőjéről neveztek el.", "category": "landmark", "coords": [20.679658, 43.7235]}], "ro": [{"name": "Plaža „Mirina česma”", "text": "O plajă locală pe râul Ibar în Kraljevo, numită după o fântână istorică.", "category": "recreational", "coords": [20.677273, 43.725086]}, {"name": "Narodni muzej", "text": "Muzeul Național din Kraljevo prezintă istoria și arta bogată a regiunii.", "category": "museum", "coords": [20.683698, 43.725306]}, {"name": "Gradska plaža", "text": "Plaja principală de pe râul Ibar, un loc popular de întâlnire pe timp de vară în Kraljevo.", "category": "recreational", "coords": [20.685627, 43.720776]}, {"name": "Plaža „Siđi do reke”", "text": "O plajă fluvială pitorească în Kraljevo, ideală pentru relaxare pe malul râului Ibar.", "category": "recreational", "coords": [20.664379, 43.722534]}, {"name": "Spomenik srpskom vojniku", "text": "Acest monument distinctiv este un simbol al orașului Kraljevo, onorând soldații căzuți.", "category": "historical", "coords": [20.687293, 43.723528]}, {"name": "Spomen park „Oktobarskih žrtava”", "text": "Un parc memorial în Kraljevo pentru victimele execuțiilor în masă din octombrie 1941.", "category": "park", "coords": [20.6921, 43.730493]}, {"name": "Most Milomira Glavčića", "text": "Un pod modern peste Ibar în Kraljevo, numit după binefăcătorul său.", "category": "landmark", "coords": [20.679658, 43.7235]}], "en": [{"name": "Plaža „Mirina česma”", "text": "A local beach on the Ibar River in Kraljevo, named after a historical well.", "category": "recreational", "coords": [20.677273, 43.725086]}, {"name": "Narodni muzej", "text": "The National Museum of Kraljevo showcases the region's rich history and art.", "category": "museum", "coords": [20.683698, 43.725306]}, {"name": "Gradska plaža", "text": "The main city beach on the Ibar River, a popular summer spot in Kraljevo.", "category": "recreational", "coords": [20.685627, 43.720776]}, {"name": "Plaža „Siđi do reke”", "text": "A scenic river beach in Kraljevo, ideal for relaxing by the Ibar.", "category": "recreational", "coords": [20.664379, 43.722534]}, {"name": "Spomenik srpskom vojniku", "text": "This landmark monument is a symbol of Kraljevo, dedicated to fallen Serbian soldiers.", "category": "historical", "coords": [20.687293, 43.723528]}, {"name": "Spomen park „Oktobarskih žrtava”", "text": "A memorial park in Kraljevo dedicated to the victims of the October 1941 massacre.", "category": "park", "coords": [20.6921, 43.730493]}, {"name": "Most Milomira Glavčića", "text": "A modern bridge over the Ibar in Kraljevo, named after its benefactor Milomir Glavčić.", "category": "landmark", "coords": [20.679658, 43.7235]}]},
    type: "city",
    parent: "RS-009",
    coords: [20.6894, 43.7258],
    name: { de: "Kraljevo", hu: "Kraljevo", ro: "Kraljevo", en: "Kraljevo" },
    description: {
      de: "Eine Stadt an der Mündung des Ibar in die Westmorava, historisch eng mit der Krönung serbischer Könige verbunden.",
      hu: "Az Ibar és a Nyugati-Morava összefolyásánál fekvő város, történelmileg a szerb királyok koronázásához kötődik.",
      ro: "Un oraș la confluența râului Ibar cu Morava de Vest, legat istoric de încoronarea regilor sârbi.",
      en: "A city at the confluence of the Ibar and West Morava rivers, historically linked to the coronation of Serbian kings.",
      es: "Una ciudad en la desembocadura del Ibar en el Morava Occidental, históricamente ligada a la coronación de los reyes serbios.",
      pt: "Uma cidade na foz do Ibar no Morava Ocidental, historicamente ligada à coroação dos reis sérvios.",
      fr: "Une ville au confluent de l'Ibar et de la Morava occidentale, historiquement liée au couronnement des rois serbes.",
    },
    facts: {
      de: ["Stadt der Könige", "Zusammenfluss von Ibar und Morava", "Nahe Kloster Žiča"],
      hu: ["Királyok városa", "Az Ibar és Morava találkozása", "A Žiča kolostor közelében"],
      ro: ["Orașul regilor", "Confluența Ibarului cu Morava", "Lângă mănăstirea Žiča"],
      en: ["City of Kings", "Confluence of Ibar and Morava", "Near Žiča Monastery"],
      es: ["Ciudad de los reyes", "Confluencia de Ibar y Morava", "Cerca del monasterio de Žiča"],
      pt: ["Cidade dos reis", "Confluência de Ibar e Morava", "Perto do mosteiro de Žiča"],
      fr: ["Ville des rois", "Confluent de l'Ibar et de la Morava", "Proche du monastère de Žiča"],
    },
    descriptionAdvanced: {
      de: "Kraljevo liegt im Herzen Zentralserbiens am Zusammenfluss von Ibar und Westlicher Morava und ist ein bedeutendes administratives und wirtschaftliches Zentrum. Die Stadt erhielt ihren heutigen Namen im Jahr 1882 durch König Milan Obrenović, was ihre enge Verbindung zur serbischen Monarchie unterstreicht. In der unmittelbaren Umgebung befinden sich einige der wichtigsten Symbole der serbischen Identität, wie das Kloster Žiča, in dem im Mittelalter sieben serbische Könige gekrönt wurden. Ebenfalls geschichtlich bedeutsam ist die imposante Festung Maglič, die hoch über dem Ibar-Tal thront und die Region einst vor feindlichen Übergriffen schützte. Kraljevo ist heute eine moderne Stadt mit einem großzügig angelegten kreisförmigen Platz im Zentrum, von dem aus die Hauptstraßen strahlenförmig abgehen. Die Region ist zudem bekannt für das UNESCO-Weltkulturerbe Kloster Studenica, das eines der bedeutendsten Denkmäler der serbischen mittelalterlichen Architektur darstellt. Mit seiner strategischen Lage an wichtigen Verkehrswegen und seiner reichen kulturellen Umgebung ist Kraljevo ein unverzichtbares Ziel für Geschichtsinteressierte und Naturliebhaber gleichermaßen.",
      hu: "Kraljevo Közép-Szerbia szívében, az Ibar és a Nyugati-Morava folyók találkozásánál fekszik, és a térség meghatározó közigazgatási és gazdasági központja. A város mai nevét 1882-ben kapta Milán Obrenović királytól, ami hangsúlyozza szoros kötődését a szerb monarchiához. A város közvetlen környezetében találhatók a szerb nemzeti identitás legfontosabb szimbólumai, mint például a Žiča-kolostor, ahol a középkorban hét szerb királyt koronáztak meg. Szintén történelmi jelentőségű a magas sziklaszirten álló Maglič vára, amely az Ibar völgyét és a fontos útvonalakat védte a betörésektől. Kraljevo ma egy modern város, amelynek jellegzetessége a tágas, kör alakú központi tér, ahonnan sugárirányban indulnak ki a főutcák. A régió ad otthont az UNESCO Világörökség részét képező Studenica-kolostornak is, amely a középkori szerb építészet egyik legszebb emléke. Stratégiai elhelyezkedése a fontos közlekedési folyosók mentén, valamint gazdag kulturális és természeti környezete révén Kraljevo megkerülhetetlen úti cél a történelem és a természet kedvelői számára egyaránt.",
      ro: "Kraljevo este situat în inima Serbiei Centrale, la confluența râurilor Ibar și Morava de Vest, fiind un centru administrativ și economic de prim rang. Orașul și-a primit numele actual în anul 1882 de la regele Milan Obrenović, fapt ce subliniază legătura sa strânsă cu monarhia sârbă. În imediata vecinătate se află unele dintre cele mai importante simboluri ale identității naționale sârbe, precum mănăstirea Žiča, locul unde în perioada medievală au fost încoronați șapte regi ai Serbiei. De asemenea, în apropiere se ridică impresionanta fortăreață Maglič, care domină valea râului Ibar și care odinioară asigura protecția regiunii împotriva invaziilor. Kraljevo este astăzi un oraș modern, caracterizat printr-o piață centrală circulară spațioasă, din care străzile principale pornesc sub formă de raze. Regiunea găzduiește, de asemenea, mănăstirea Studenica, sit inclus în patrimoniul mondial UNESCO și considerat unul dintre cele mai valoroase monumente ale arhitecturii medievale sârbe. Datorită locației sale strategice și a bogatului context cultural, Kraljevo reprezintă o destinație esențială pentru cei interesați de istorie și de frumusețile naturale ale Balcanilor.",
      en: "Kraljevo is located in the heart of Central Serbia at the confluence of the Ibar and West Morava rivers, serving as a prominent administrative and economic hub. The city received its current name in 1882 from King Milan Obrenović, highlighting its deep-rooted historical ties to the Serbian monarchy. Some of the most significant symbols of Serbian national identity are located in its immediate vicinity, such as the Žiča Monastery, where seven Serbian kings were crowned during the Middle Ages. Also historically vital is the Maglič fortress, which perches high above the Ibar valley and once protected the region from hostile incursions. Today, Kraljevo is a modern city featuring a unique spacious circular central square from which the main streets radiate outward. The surrounding region also boasts the Studenica Monastery, a UNESCO World Heritage site and one of the most important monuments of medieval Serbian architecture. With its strategic position along key transportation routes and its wealth of cultural landmarks, Kraljevo is an essential destination for anyone exploring the historical and natural landscapes of the Balkans.",
      es: "Kraljevo se encuentra en la confluencia de los ríos Ibar y Morava Occidental, en Serbia Central. El nombre de la ciudad significa \"Ciudad del Rey\" y conmemora la coronación de los gobernantes serbios en el cercano monasterio de Žiča. Kraljevo es un importante nudo de comunicaciones y se caracteriza por su distintiva plaza circular en el centro de la ciudad.",
      pt: "Kraljevo situa-se na confluência do Ibar com o Morava Ocidental, na Sérvia Central. O nome da cidade significa \"Cidade do Rei\" e lembra a coroação dos governantes sérvios no mosteiro vizinho de Žiča. Kraljevo é um importante nó de comunicações e caracteriza-se pela sua praça circular distintiva.",
      fr: "Kraljevo est située au confluent de l'Ibar et de la Morava occidentale, en Serbie centrale. Le nom de la ville signifie « Ville du Roi » et rappelle le couronnement des souverains serbes dans le monastère voisin de Žiča. Kraljevo est un carrefour de communication important et se distingue par sa place centrale circulaire caractéristique.",
    },
    factsAdvanced: {
      de: ["Die Stadt wurde 1882 zu Ehren des ersten serbischen Königs Milan umbenannt.", "Das Kloster Žiča war der Sitz des ersten serbischen Erzbistums.", "Maglič ist eine der am besten erhaltenen mittelalterlichen Festungen Serbiens.", "Die Stadt liegt an der Mündung des Ibar in die Westliche Morava.", "Kraljevo hat über 120.000 Einwohner in seinem Verwaltungsgebiet.", "Das Kloster Studenica gehört seit 1986 zum UNESCO-Weltkulturerbe."],
      hu: ["A várost 1882-ben nevezték át az első szerb király, Milán tiszteletére.", "A Žiča-kolostor volt az első szerb érsekség székhelye.", "Maglič az egyik legjobb állapotban fennmaradt középkori vár Szerbiában.", "A város az Ibar és a Nyugati-Morava folyók találkozásánál fekszik.", "Kraljevo közigazgatási területén több mint 120 000 lakos él.", "A Studenica-kolostor 1986 óta az UNESCO Világörökség része."],
      ro: ["Orașul a fost redenumit în 1882 în onoarea primului rege sârb, Milan.", "Mănăstirea Žiča a fost sediul primei arhiepiscopii a Serbiei.", "Maglič este una dintre cele mai bine conservate cetăți medievale din Serbia.", "Orașul este situat la confluența râului Ibar cu Morava de Vest.", "Kraljevo are peste 120.000 de locuitori în zona sa administrativă.", "Mănăstirea Studenica face parte din Patrimoniul UNESCO din 1986."],
      en: ["The city was renamed in 1882 in honor of Serbia's first king, Milan.", "Žiča Monastery served as the seat of the first Serbian Archbishopric.", "Maglič is one of the best-preserved medieval fortresses in Serbia.", "The city is located at the confluence of the Ibar and West Morava rivers.", "Kraljevo has over 120,000 residents in its broader administrative area.", "Studenica Monastery has been a UNESCO World Heritage site since 1986."],
      es: ["La ciudad recibió su nombre actual, Kraljevo, en 1882", "Kraljevo está a solo 5 km del monasterio de Žiča", "La plaza circular de la ciudad fue diseñada en el siglo XIX", "La ciudad era conocida anteriormente como Karanovac", "Kraljevo fue mencionada por primera vez por escrito en el siglo XIV", "La fortaleza de Maglič se encuentra a unos 20 km al sur de la ciudad"],
      pt: ["A cidade recebeu o seu nome atual, Kraljevo, em 1882", "Kraljevo fica a apenas 5 km do mosteiro de Žiča", "A praça circular da cidade foi desenhada no século XIX", "A cidade era anteriormente conhecida pelo nome de Karanovac", "Kraljevo foi mencionada por escrito pela primeira vez no século XIV", "A fortaleza de Maglič situa-se a cerca de 20 km a sul da cidade"],
      fr: ["La ville a reçu son nom actuel de Kraljevo en 1882", "Kraljevo se trouve à seulement 5 km du monastère de Žiča", "La place circulaire de la ville a été conçue au XIXe siècle", "La ville s'appelait autrefois Karanovac", "Kraljevo a été mentionnée par écrit pour la première fois au XIVe siècle", "La forteresse de Maglič se trouve à environ 20 km au sud de la ville"],
    },
    image: "/poi-images/RS-009-kraljevo.webp",
  },
  {
    id: "RS-009-zica",
    type: "historical",
    parent: "RS-009",
    coords: [20.6450, 43.6961],
    name: { de: "Kloster Žiča", hu: "Žiča kolostor", ro: "Mănăstirea Žiča", en: "Žiča Monastery" },
    description: {
      de: "Ein leuchtend rotes Kloster aus dem 13. Jahrhundert, in dem die ersten serbischen Könige gekrönt wurden.",
      hu: "Élénkvörös, 13. századi kolostor, ahol az első szerb királyokat koronázták.",
      ro: "O mănăstire de culoare roșu aprins din secolul al XIII-lea, unde au fost încoronați primii regi sârbi.",
      en: "A bright red 13th-century monastery where the first Serbian kings were crowned.",
      es: "Un monasterio rojo brillante del siglo XIII donde fueron coronados los primeros reyes serbios.",
      pt: "Um mosteiro vermelho brilhante do século XIII onde foram coroados os primeiros reis sérvios.",
      fr: "Un monastère rouge vif du XIIIe siècle où furent couronnés les premiers rois serbes.",
    },
    facts: {
      de: ["Krönungskirche", "Sitz des ersten Erzbischofs", "Einzigartige rote Farbe"],
      hu: ["Koronázótemplom", "Az első érsek székhelye", "Egyedülálló vörös szín"],
      ro: ["Biserica de încoronare", "Sediul primului arhiepiscop", "Culoare roșie unică"],
      en: ["Coronation church", "Seat of the first archbishop", "Unique red color"],
      es: ["Iglesia de coronación", "Sede del primer arzobispo", "Color rojo único"],
      pt: ["Igreja de coroação", "Sede do primeiro arcebispo", "Cor vermelha única"],
      fr: ["Église de couronnement", "Siège du premier archevêque", "Couleur rouge unique"],
    }, image: "/poi-images/RS-009-zica.webp",
    descriptionAdvanced: {
      de: "Das Kloster Žiča wurde im frühen 13. Jahrhundert, etwa zwischen 1208 und 1230, vom ersten serbischen König Stefan Nemanjić und seinem Bruder, dem Heiligen Sava, gegründet. Es diente als historischer Krönungsort für sieben serbische Könige und war der erste Sitz des serbischen Erzbistums. Die Architektur des Klosters ist durch die charakteristische rote Fassade geprägt, die nach dem Vorbild der Klöster auf dem Berg Athos gestaltet wurde. Im Laufe der Jahrhunderte erlitt die Anlage schwere Schäden durch tatarische Überfälle, osmanische Angriffe und Erdbeben, wurde jedoch immer wieder originalgetreu restauriert. Žiča liegt in der Nähe der Stadt Kraljevo am Übergang zum Ibar-Tal und gilt als eines der bedeutendsten geistigen Zentren Serbiens. Die Kirche ist der Himmelfahrt Christi geweiht und bewahrt trotz zahlreicher Zerstörungen wertvolle Fresken aus dem 13. und 14. Jahrhundert, die den byzantinischen Stil jener Epoche widerspiegeln.",
      hu: "A Žiča-kolostort a 13. század elején, 1208 és 1230 között alapította I. István szerb király és testvére, Szent Száva. Az épületegyüttes történelmi jelentőségét adja, hogy hét szerb uralkodót koronáztak meg falai között, és ez volt a szerb önálló érsekség első székhelye is. Az építészetileg egyedi kolostortemplom vörös színe az Athosz-hegyi kolostorok hagyományát követi, ami a szerb középkori építészet Raška-stílusának egyik legfontosabb példája. Az évszázadok során a kolostort többször lerombolták a tatárok, majd az oszmánok, de minden alkalommal újjáépítették. Kraljevo városának közelében, az Ibar-völgy bejáratánál helyezkedik el, stratégiai és szakrális csomópontként. A templom belső falait díszítő freskók jelentős része a 13. századból származik, bemutatva a bizánci művészet akkori fejlődését és a szerb államiság megerősödését a középkorban.",
      ro: "Mănăstirea Žiča a fost ctitorită la începutul secolului al XIII-lea, între anii 1208 și 1230, de către Ștefan cel Prim-Încoronat, primul rege al Serbiei, împreună cu fratele său, Sfântul Sava. Acest lăcaș de cult a servit drept loc de încoronare pentru șapte regi sârbi și a fost sediul primei arhiepiscopii autocefale a Serbiei. Arhitectura mănăstirii este remarcabilă prin fațada sa de culoare roșie, o caracteristică preluată de la mănăstirile de pe Muntele Athos, simbolizând jertfa și autoritatea regală. Situată în apropierea orașului Kraljevo, la intrarea în valea râului Ibar, mănăstirea a suferit numeroase distrugeri în timpul invaziilor tătare și otomane, fiind restaurată de mai multe ori de-a lungul istoriei. Interiorul bisericii, dedicată Înălțării Domnului, păstrează fragmente valoroase de frescă bizantină din secolele XIII și XIV, reprezentând un tezaur cultural și spiritual esențial pentru identitatea națională a Serbiei.",
      en: "Žiča Monastery was founded in the early 13th century, between 1208 and 1230, by Stefan the First-Crowned, the first King of Serbia, and his brother Saint Sava. It holds immense historical value as the coronation site for seven Serbian kings and as the first seat of the autocephalous Serbian Archbishopric. The monastery's church is architecturally distinct due to its red-colored facade, inspired by the traditions of Mount Athos monasteries. Located near the city of Kraljevo at the entrance to the Ibar Valley, the complex was repeatedly damaged during Tatar raids and Ottoman rule but was meticulously restored over the centuries. Dedicated to the Ascension of Christ, the monastery houses significant frescoes from the 13th and 14th centuries that showcase the evolution of Byzantine art. Today, Žiča remains a vital spiritual and cultural landmark, representing the foundation of the Serbian medieval state and its religious independence.",
      es: "El monasterio de Žiča fue fundado a principios del siglo XIII por el rey Stefan el Primercoronado y San Sava. Sirvió como iglesia de coronación para siete reyes serbios y fue la primera sede del arzobispado serbio. Los característicos muros rojos del monasterio simbolizan la sangre de los mártires cristianos.",
      pt: "O mosteiro de Žiča foi fundado no início do século XIII pelo rei Estêvão o Primeiro Coroado e São Sava. Serviu como igreja de coroação para sete reis sérvios e foi a primeira sede do arcebispado sérvio. As características muralhas vermelhas do mosteiro simbolizam o sangue dos mártires cristãos.",
      fr: "Le monastère de Žiča a été fondé au début du XIIIe siècle par le roi Étienne le Premier-Couronné et Saint Sava. Il a servi d'église de couronnement à sept rois serbes et fut le premier siège de l'archevêché serbe. Les murs rouges caractéristiques du monastère symbolisent le sang des martyrs chrétiens.",
    },
    factsAdvanced: {
      de: ["In Žiča wurden zwischen 1217 und 1234 insgesamt sieben serbische Könige gekrönt.", "Das Kloster war ab 1219 der erste offizielle Sitz des unabhängigen serbischen Erzbistums.", "Die charakteristische rote Farbe der Fassade wurde auf Wunsch des Heiligen Sava aufgetragen.", "Während des Zweiten Weltkriegs wurde das Kloster 1941 von deutschen Truppen schwer beschädigt.", "Die Kirche gehört zum architektonischen Typ der Raška-Schule mit einer zentralen Kuppel.", "Das Kloster beherbergt Fresken, die Szenen aus dem Leben Jesu und serbischer Heiliger zeigen."],
      hu: ["Žiča falai között 1217 és 1234 között hét szerb királyt koronáztak meg.", "1219-ben ez a kolostor lett az önálló szerb érsekség első hivatalos központja.", "A templom vörös színe az ortodox vértanúság szimbóluma, és Szent Száva kérésére választották.", "A tatár járás során, a 13. század végén az épületegyüttes súlyos károkat szenvedett.", "Az 1941-es német bombázások után a kolostort a 20. század második felében restaurálták.", "A belső freskók két korszakból, a 13. század elejéről és a 14. század elejéről származnak."],
      ro: ["Șapte regi ai Serbiei au fost încoronați în această mănăstire între anii 1217 și 1234.", "Mănăstirea a devenit în 1219 primul sediu administrativ al Bisericii Ortodoxe Sârbe autocefale.", "Culoarea roșie a zidurilor exterioare a fost aleasă pentru a imita mănăstirile imperiale de la Athos.", "Complexul a fost incendiat de invadatorii cumani și tătari la sfârșitul secolului al XIII-lea.", "În timpul ocupatiei germane din 1941, clădirea a fost bombardată și parțial distrusă.", "Cele mai vechi fresce conservate datează din perioada 1220-1230 și reprezintă stilul bizantin timpuriu."],
      en: ["A total of seven Serbian kings were crowned at Žiča between 1217 and 1234.", "It served as the first official seat of the independent Serbian Archbishopric starting in 1219.", "The red facade was specifically requested by Saint Sava to reflect the Mount Athos style.", "The monastery was severely damaged by German forces during an air raid in 1941.", "The architectural style belongs to the Raška School, featuring a single nave and dome.", "Significant restoration work was carried out in the 1920s and again after the 1987 earthquake."],
      es: ["El monasterio fue construido entre 1206 y 1217", "Siete reyes de la dinastía Nemanjić fueron coronados aquí", "San Sava fue nombrado arzobispo aquí en 1219", "La iglesia está dedicada a la Ascensión de Cristo", "Žiča fue gravemente dañado por los mongoles en el siglo XIII", "Las fachadas rojas siguen el modelo de los monasterios del Monte Athos"],
      pt: ["O mosteiro foi construído entre 1206 e 1217", "Sete reis da dinastia Nemanjić foram coroados aqui", "São Sava foi nomeado arcebispo aqui em 1219", "A igreja é dedicada à Ascensão de Cristo", "Žiča foi gravemente danificado pelos mongóis no século XIII", "As fachadas vermelhas seguem o modelo dos mosteiros de Monte Atos"],
      fr: ["Le monastère a été construit entre 1206 et 1217", "Sept rois de la dynastie des Nemanjić y furent couronnés", "Saint Sava y fut nommé archevêque en 1219", "L'église est dédiée à l'Ascension du Christ", "Žiča a été gravement endommagé par les Mongols au XIIIe siècle", "Les façades rouges suivent le modèle des monastères du mont Athos"],
    },
  },
  // RS-010 Pomoravski
  {
    id: "RS-010-jagodina", "sights": {"de": [{"name": "Wachsfigurenkabinett Jagodina", "text": "Das Wachsfigurenkabinett in Jagodina ist eine einzigartige Attraktion mit lebensechten Figuren bekannter historischer und zeitgenössischer Persönlichkeiten.", "category": "museum", "coords": [21.265369, 43.967618]}, {"name": "Zoološki vrt „Tigar”", "text": "Der Tigar-Zoo ist ein familienfreundlicher zoologischer Park in Jagodina.", "category": "family", "coords": [21.264828, 43.964414]}, {"name": "Akva park", "text": "Der Aquapark ist ein beliebtes Erholungsziel mit Wasserrutschen und Pools in Jagodina.", "category": "family", "coords": [21.267504, 43.967005]}, {"name": "Zavičajni muzej", "text": "Das Heimatmuseum in Jagodina stellt Artefakte aus, die mit der lokalen Geschichte und dem kulturellen Erbe in Verbindung stehen.", "category": "museum", "coords": [21.262869, 43.976074]}, {"name": "SP Park Učiteljske škole", "text": "Der Park der Lehrerschule ist ein geschütztes Naturschutzgebiet, das Grünflächen in Jagodina bietet.", "category": "natural", "coords": [21.254786, 43.977317]}, {"name": "SP Gradski park Đurđevo brdo", "text": "Der Stadtpark Đurđevo brdo ist ein ausgewiesenes Naturschutzgebiet, das einen malerischen natürlichen Rückzugsort in Jagodina bietet.", "category": "natural", "coords": [21.266103, 43.963968]}, {"name": "Kulturni centar", "text": "Das Kulturzentrum in Jagodina veranstaltet verschiedene künstlerische Veranstaltungen, Ausstellungen und Aufführungen.", "category": "cultural", "coords": [21.262232, 43.97772]}], "hu": [{"name": "Muzej voštanih figura Jagodina", "text": "A jagodinai viaszmúzeum egyedülálló látványosság, amely kiemelkedő történelmi és kortárs személyiségek élethű viaszfiguráit mutatja be.", "category": "museum", "coords": [21.265369, 43.967618]}, {"name": "Zoološki vrt „Tigar”", "text": "A Tigris Állatkert egy családbarát állatkert Jagodinán.", "category": "family", "coords": [21.264828, 43.964414]}, {"name": "Akva park", "text": "Az Aquapark egy népszerű szabadidős célpont csúszdákkal és medencékkel Jagodinán.", "category": "family", "coords": [21.267504, 43.967005]}, {"name": "Zavičajni muzej", "text": "A jagodinai Helytörténeti Múzeum a helyi történelemhez és a kulturális örökséghez kapcsolódó tárgyakat állít ki.", "category": "museum", "coords": [21.262869, 43.976074]}, {"name": "SP Park Učiteljske škole", "text": "A Tanítóképző Iskola Parkja egy védett természetvédelmi terület, amely zöldfelületeket kínál Jagodinán.", "category": "natural", "coords": [21.254786, 43.977317]}, {"name": "SP Gradski park Đurđevo brdo", "text": "A Đurđevo brdo Városi Park egy kijelölt természetvédelmi terület, amely festői természeti menedéket nyújt Jagodinán.", "category": "natural", "coords": [21.266103, 43.963968]}, {"name": "Kulturni centar", "text": "A jagodinai Kulturális Központ különféle művészeti eseményeknek, kiállításoknak és előadásoknak ad otthont.", "category": "cultural", "coords": [21.262232, 43.97772]}], "ro": [{"name": "Muzej voštanih figura Jagodina", "text": "Muzeul de Ceară din Jagodina este o atracție unică ce prezintă figuri realiste ale unor personalități istorice și contemporane proeminente.", "category": "museum", "coords": [21.265369, 43.967618]}, {"name": "Zoološki vrt „Tigar”", "text": "Grădina Zoologică Tigrul este un parc zoologic potrivit pentru familii situat în Jagodina.", "category": "family", "coords": [21.264828, 43.964414]}, {"name": "Akva park", "text": "Parcul Acvatic este o destinație de recreere populară cu tobogane de apă și piscine în Jagodina.", "category": "family", "coords": [21.267504, 43.967005]}, {"name": "Zavičajni muzej", "text": "Muzeul Zonal din Jagodina expune artefacte legate de istoria locală și de moștenirea culturală.", "category": "museum", "coords": [21.262869, 43.976074]}, {"name": "SP Park Učiteljske škole", "text": "Parcul Școlii de Învățători este o rezervație naturală protejată care oferă spații verzi în Jagodina.", "category": "natural", "coords": [21.254786, 43.977317]}, {"name": "SP Gradski park Đurđevo brdo", "text": "Parcul Orășenesc Đurđevo brdo este o rezervație naturală desemnată care oferă un refugiu natural pitoresc în Jagodina.", "category": "natural", "coords": [21.266103, 43.963968]}, {"name": "Kulturni centar", "text": "Centrul Cultural din Jagodina găzduiește diverse evenimente artistice, expoziții și spectacole.", "category": "cultural", "coords": [21.262232, 43.97772]}], "en": [{"name": "Muzej voštanih figura Jagodina", "text": "The Wax Museum in Jagodina is a unique attraction featuring lifelike figures of prominent historical and contemporary personalities.", "category": "museum", "coords": [21.265369, 43.967618]}, {"name": "Zoološki vrt „Tigar”", "text": "The Tigar Zoo is a family-friendly zoological park located in Jagodina.", "category": "family", "coords": [21.264828, 43.964414]}, {"name": "Akva park", "text": "The Aqua Park is a popular recreational destination with water slides and pools in Jagodina.", "category": "family", "coords": [21.267504, 43.967005]}, {"name": "Zavičajni muzej", "text": "The Homeland Museum in Jagodina exhibits artifacts related to local history and cultural heritage.", "category": "museum", "coords": [21.262869, 43.976074]}, {"name": "SP Park Učiteljske škole", "text": "The Teachers' School Park is a protected nature reserve offering green spaces in Jagodina.", "category": "natural", "coords": [21.254786, 43.977317]}, {"name": "SP Gradski park Đurđevo brdo", "text": "Đurđevo brdo City Park is a designated nature reserve providing a scenic natural retreat in Jagodina.", "category": "natural", "coords": [21.266103, 43.963968]}, {"name": "Kulturni centar", "text": "The Cultural Center in Jagodina hosts various artistic events, exhibitions, and performances.", "category": "cultural", "coords": [21.262232, 43.97772]}]},
    type: "city",
    parent: "RS-010",
    coords: [21.2614, 43.9758],
    name: { de: "Jagodina", hu: "Jagodina", ro: "Jagodina", en: "Jagodina" },
    description: {
      de: "Eine Stadt im Herzen Zentralserbiens, bekannt für ihren großen Zoo und Wasserpark.",
      hu: "Közép-Szerbia szívében fekvő város, híres nagy állatkertjéről és aquaparkjáról.",
      ro: "Un oraș în inima Serbiei Centrale, cunoscut pentru grădina sa zoologică mare și parcul acvatic.",
      en: "A city in the heart of Central Serbia, known for its large zoo and water park.",
      es: "Una ciudad en el corazón de Serbia Central, conocida por su gran zoológico y parque acuático.",
      pt: "Uma cidade no coração da Sérvia Central, conhecida pelo seu grande jardim zoológico e parque aquático.",
      fr: "Une ville au cœur de la Serbie centrale, connue pour son grand zoo et son parc aquatique.",
    },
    facts: {
      de: ["Wachsfigurenkabinett", "Großer Wasserpark", "Pomoravlje-Zentrum"],
      hu: ["Panoptikum", "Nagy aquapark", "Pomoravlje központja"],
      ro: ["Muzeul figurilor de ceară", "Parc acvatic mare", "Centrul Pomoravlje"],
      en: ["Wax museum", "Large water park", "Pomoravlje center"],
      es: ["Museo de cera", "Gran parque acuático", "Centro de Pomoravlje"],
      pt: ["Museu de cera", "Grande parque aquático", "Centro de Pomoravlje"],
      fr: ["Musée de cire", "Grand parc aquatique", "Centre de Pomoravlje"],
    },
    descriptionAdvanced: {
      de: "Jagodina ist eine bedeutende Stadt im Zentralserbien, gelegen im Pomoravlje-Distrikt am Fluss Belica. Die erste urkundliche Erwähnung stammt aus dem Jahr 1399 in einer Urkunde der Prinzessin Milica unter dem Namen Jagodna. Während der osmanischen Herrschaft entwickelte sich der Ort zu einem wichtigen Handelszentrum an der Straße von Belgrad nach Konstantinopel. Im 19. Jahrhundert setzte die Industrialisierung ein, insbesondere durch die Gründung der ersten serbischen Glasfabrik im Jahr 1846 und der Brauerei im Jahr 1852. Heute ist Jagodina ein modernes regionales Zentrum mit einer gut entwickelten Infrastruktur und Industrie. Die Stadt hat sich in den letzten Jahrzehnten auch zu einem Tourismusziel entwickelt, bekannt durch den ersten Aquapark Serbiens, den einzigen Wachsfigurenmuseum des Landes und einen der größten Zoos der Region. Geografisch liegt Jagodina in einer fruchtbaren Ebene, die traditionell durch Landwirtschaft und Weinbau geprägt ist, während die moderne Wirtschaft auf Metallverarbeitung und Dienstleistungen setzt.",
      hu: "Jagodina Közép-Szerbia egyik legfontosabb városa, a Pomoravlje körzet központja, amely a Belica-folyó partján fekszik. A települést először 1399-ben említik Jagodna néven Milica fejedelemasszony egyik oklevelében. Az oszmán uralom alatt a Belgrád és Isztambul közötti kereskedelmi út egyik kulcsfontosságú állomása volt. A 19. század közepén indult meg a város iparosodása, ekkor alapították az első szerb üveggyárat 1846-ban és a sörgyárat 1852-ben. A modern Jagodina ma jelentős közlekedési és ipari központ, ahol a kábelgyártás és az élelmiszeripar dominál. Az utóbbi évtizedekben a város idegenforgalma is fellendült, köszönhetően az ország első aquaparkjának, Szerbia egyetlen viaszbábuk múzeumának és a regionális jelentőségű állatkertnek. A város elhelyezkedése a termékeny Morava-völgyben kedvez a mezőgazdaságnak, miközben a Belgrád–Niš autópálya közelsége biztosítja a folyamatos gazdasági fejlődést.",
      ro: "Jagodina este un oraș important din Serbia Centrală, situat în districtul Pomoravlje, pe malurile râului Belica. Prima atestare documentară a localității datează din anul 1399 sub numele de Jagodna, într-un document emis de prințesa Milica. În perioada otomană, a devenit un punct strategic de comerț pe drumul ce lega Belgradul de Constantinopol. Secolul al XIX-lea a marcat începutul industrializării masive, prin deschiderea primei fabrici de sticlă din Serbia în 1846 și a unei fabrici de bere în 1852. În prezent, Jagodina este un centru economic modern, cu o industrie diversificată, incluzând fabricarea cablurilor și industria alimentară. Orașul a investit considerabil în turism, deținând primul parc acvatic din Serbia, singurul muzeu al figurilor de ceară din țară și o grădină zoologică extinsă. Din punct de vedere geografic, orașul beneficiază de solurile fertile ale văii Moravei, fiind în același timp un nod feroviar și rutier vital pe coridorul paneuropean X.",
      en: "Jagodina is a prominent city in Central Serbia, located in the Pomoravlje District along the Belica River. It was first mentioned in historical records in 1399 as Jagodna in a charter issued by Princess Milica. During the Ottoman period, it evolved into a significant trading post on the road between Belgrade and Constantinople. The 19th century brought industrial growth, highlighted by the establishment of Serbia's first glass factory in 1846 and a brewery in 1852. Today, Jagodina is a modern administrative and industrial hub, particularly noted for its cable production and food processing industries. In recent years, the city has transformed into a tourist destination, featuring Serbia's first aqua park, the nation's only wax museum, and a large regional zoo. Geographically situated in the fertile Morava Valley, Jagodina serves as a key transport link, situated on the main railway line and highway connecting Belgrade with Niš and further south to North Macedonia and Greece.",
      es: "Jagodina es una ciudad del centro de Serbia, situada en el valle del río Belica. En los últimos años, la ciudad se ha convertido en un importante centro turístico, especialmente gracias a atracciones como el primer museo de cera de Serbia y un gran parque acuático. Jagodina cuenta con una larga tradición industrial, especialmente en la fabricación de cables.",
      pt: "Jagodina é uma cidade no centro da Sérvia, no vale do rio Belica. Nos últimos anos, a cidade tornou-se num importante centro turístico, sobretudo através de atrações como o primeiro museu de cera da Sérvia e um grande parque aquático. Jagodina possui uma longa tradição industrial, especialmente na fabricação de cabos.",
      fr: "Jagodina est une ville du centre de la Serbie située dans la vallée de la rivière Belica. Ces dernières années, la ville est devenue un centre touristique majeur, notamment grâce à des attractions telles que le premier musée de cire de Serbie et un grand parc aquatique. Jagodina possède une longue tradition industrielle, en particulier dans la fabrication de câbles.",
    },
    factsAdvanced: {
      de: ["Die Stadt wurde 1399 erstmals urkundlich unter dem Namen Jagodna erwähnt.", "Jagodina beherbergt das einzige Wachsfigurenmuseum Serbiens, eröffnet im Jahr 2008.", "Die Brauerei von Jagodina wurde bereits 1852 gegründet und gehört zu den ältesten des Landes.", "Der erste Aquapark Serbiens wurde hier im Jahr 2007 auf einer Fläche von 3,5 Hektar eröffnet.", "Die Bevölkerung der Stadt beträgt laut der Volkszählung von 2011 etwa 37.000 Einwohner.", "Jagodina liegt direkt an der Autobahn A1, einem Teil des paneuropäischen Korridors X."],
      hu: ["A várost először 1399-ben említik Jagodna néven, ami magyarul eperföldet jelent.", "Itt nyílt meg 2008-ban Szerbia első és máig egyetlen viaszbábuk múzeuma.", "Az 1852-ben alapított Jagodina sörgyár az ország egyik legrégebbi ipari létesítménye.", "A helyi állatkertet 2006-ban alapították, és több mint 250 állatfajnak ad otthont.", "1946 és 1992 között a város hivatalos neve Svetozarevo volt Svetozar Marković tiszteletére.", "A település a Belgrád-Niš vasútvonal egyik fontos állomása már 1884 óta."],
      ro: ["Orașul a fost menționat documentar pentru prima dată în 1399 de către cneaghina Milica.", "Jagodina deține singurul muzeu al figurilor de ceară din Serbia, inaugurat în 2008.", "Fabrica de bere locală a fost înființată în 1852 de antreprenorul Abraham Keppich.", "Parcul acvatic din Jagodina a fost primul de acest fel din țară, deschis în iulie 2007.", "Între anii 1946 și 1992, orașul a purtat numele oficial de Svetozarevo.", "Grădina zoologică 'Tigar' din Jagodina găzduiește aproximativ 100 de specii diferite de animale."],
      en: ["Jagodina was first recorded in 1399 under the name Jagodna, meaning 'strawberry town'.", "It is home to the only wax museum in Serbia, which opened its doors in 2008.", "The city brewery, Jagodinska pivara, was established in 1852 and is still operational.", "The local aqua park, opened in 2007, features seven pools and numerous water slides.", "The city was renamed Svetozarevo from 1946 to 1992 after socialist leader Svetozar Marković.", "Jagodina is situated 136 kilometers south of Belgrade on the E75 international highway."],
      es: ["Jagodina fue mencionada por primera vez en el año 1381", "El museo de cera fue inaugurado en 2008", "El Aquapark Jagodina fue el primero de su tipo en Serbia", "La ciudad se llamó Svetozarevo entre 1946 y 1992", "Aquí se encuentra una de las mayores fábricas de cables de los Balcanes", "El zoológico de la ciudad alberga más de 80 especies de animales"],
      pt: ["Jagodina foi mencionada pela primeira vez no ano 1381", "O museu de cera foi inaugurado em 2008", "O Aquapark Jagodina foi o primeiro do seu género na Sérvia", "A cidade chamou-se Svetozarevo de 1946 a 1992", "Aqui situa-se uma das maiores fábricas de cabos dos Balcãs", "O jardim zoológico da cidade abriga mais de 80 espécies de animais"],
      fr: ["Jagodina a été mentionnée pour la première fois en 1381", "Le musée de cire a été ouvert en 2008", "L'Aquapark de Jagodina fut le premier de ce genre en Serbie", "La ville s'est appelée Svetozarevo de 1946 à 1992", "L'une des plus grandes usines de câbles des Balkans s'y trouve", "Le zoo de la ville abrite plus de 80 espèces d'animaux"],
    },
    image: "/poi-images/RS-010-jagodina.webp",
  },
  {
    id: "RS-010-manasija", "sights": {
      "de": [
            {
                  "name": "Парк макета",
                  "text": "Ein Miniaturpark beim Kloster Manasija, der Modelle serbischer mittelalterlicher Klöster zeigt.",
                  "category": "recreational",
                  "coords": [
                        21.458161,
                        44.089341
                  ]
            },
            {
                  "name": "Манастир Манасија",
                  "text": "Ein bedeutendes serbisch-orthodoxes Kloster aus dem 15. Jahrhundert, das für seine massiven Befestigungsanlagen bekannt ist.",
                  "category": "landmark",
                  "coords": [
                        21.468889,
                        44.1005
                  ]
            },
            {
                  "name": "Despot Stefan Lazarević",
                  "text": "Ein Denkmal zu Ehren des serbischen Herrschers und Gründers des Klosters Manasija.",
                  "category": "historical",
                  "coords": [
                        21.442522,
                        44.09519
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Парк макета",
                  "text": "Makettpark a Manasija-kolostornál, amely szerb középkori kolostorok modelljeit mutatja be.",
                  "category": "recreational",
                  "coords": [
                        21.458161,
                        44.089341
                  ]
            },
            {
                  "name": "Манастир Манасија",
                  "text": "Jelentős 15. századi szerb ortodox kolostor, amely hatalmas erődítményeiről ismert.",
                  "category": "landmark",
                  "coords": [
                        21.468889,
                        44.1005
                  ]
            },
            {
                  "name": "Despot Stefan Lazarević",
                  "text": "Emlékmű a szerb uralkodó és a Manasija-kolostor alapítója tiszteletére.",
                  "category": "historical",
                  "coords": [
                        21.442522,
                        44.09519
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Парк макета",
                  "text": "Un parc de machete lângă mănăstirea Manasija, care prezintă modele ale mănăstirilor medievale sârbești.",
                  "category": "recreational",
                  "coords": [
                        21.458161,
                        44.089341
                  ]
            },
            {
                  "name": "Манастир Манасија",
                  "text": "O importantă mănăstire ortodoxă sârbă din secolul al XV-lea, cunoscută pentru fortificațiile sale masive.",
                  "category": "landmark",
                  "coords": [
                        21.468889,
                        44.1005
                  ]
            },
            {
                  "name": "Despot Stefan Lazarević",
                  "text": "Un monument dedicat conducătorului sârb și fondatorului mănăstirii Manasija.",
                  "category": "historical",
                  "coords": [
                        21.442522,
                        44.09519
                  ]
            }
      ],
      "en": [
            {
                  "name": "Park Maketa",
                  "text": "A miniature park near Manasija Monastery featuring models of Serbian medieval monasteries.",
                  "category": "recreational",
                  "coords": [
                        21.458161,
                        44.089341
                  ]
            },
            {
                  "name": "Manasija Monastery",
                  "text": "A significant 15th-century Serbian Orthodox monastery known for its massive fortifications.",
                  "category": "landmark",
                  "coords": [
                        21.468889,
                        44.1005
                  ]
            },
            {
                  "name": "Despot Stefan Lazarević",
                  "text": "A monument dedicated to the Serbian ruler and founder of the Manasija Monastery.",
                  "category": "historical",
                  "coords": [
                        21.442522,
                        44.09519
                  ]
            }
      ]
},
    type: "historical",
    parent: "RS-010",
    coords: [21.4689, 44.1011],
    name: { de: "Kloster Manasija", hu: "Manasija kolostor", ro: "Mănăstirea Manasija", en: "Manasija Monastery" },
    description: {
      de: "Eines der bedeutendsten Denkmäler der serbischen mittelalterlichen Kultur, umgeben von massiven Festungsmauern.",
      hu: "A szerb középkori kultúra egyik legjelentősebb emléke, hatalmas várfalakkal körülvéve.",
      ro: "Unul dintre cele mai importante monumente ale culturii medievale sârbe, înconjurat de ziduri masive de cetate.",
      en: "One of the most significant monuments of Serbian medieval culture, surrounded by massive fortress walls.",
      es: "Uno de los monumentos más importantes de la cultura medieval serbia, rodeado por macizas murallas defensivas.",
      pt: "Um dos monumentos mais importantes da cultura medieval sérvia, cercado por muralhas defensivas maciças.",
      fr: "L'un des monuments les plus importants de la culture médiévale serbe, entouré de massifs murs de fortification.",
    },
    facts: {
      de: ["Gegründet von Stefan Lazarević", "Elf Verteidigungstürme", "Resava-Schule für Literatur"],
      hu: ["Stefan Lazarević alapította", "Tizenegy védőtorony", "Resava irodalmi iskola"],
      ro: ["Fondată de Stefan Lazarević", "Unsprezece turnuri de apărare", "Școala literară Resava"],
      en: ["Founded by Stefan Lazarević", "Eleven defense towers", "Resava school of literature"],
      es: ["Fundado por Stefan Lazarević", "Once torres defensivas", "Escuela literaria de Resava"],
      pt: ["Fundado por Stefan Lazarević", "Onze torres de defesa", "Escola de literatura de Resava"],
      fr: ["Fondé par Stefan Lazarević", "Onze tours de défense", "École littéraire de Resava"],
    }, image: "/poi-images/RS-010-manasija.webp",
    descriptionAdvanced: {
      de: "Das Kloster Manasija, auch als Resava bekannt, ist eines der bedeutendsten Denkmäler der mittelalterlichen serbischen Kultur und gehört zur Architektur der Morava-Schule. Es wurde zwischen 1407 und 1418 vom Despoten Stefan Lazarević als seine Grablege und Festung errichtet. Die Anlage ist von einer beeindruckenden Verteidigungsmauer mit elf massiven Türmen umgeben, von denen der größte als Despoten-Turm bekannt ist. Das Kloster war im 15. Jahrhundert das Zentrum der berühmten Resava-Schreibschule, in der Texte übersetzt und kopiert wurden, um das serbische Schrifttum nach der osmanischen Eroberung zu bewahren. Die Hauptkirche ist der Heiligen Dreifaltigkeit geweiht und zeichnet sich durch ihre harmonischen Proportionen und die Verwendung von hochwertigem Stein aus. Die Fresken von Manasija gelten als Meisterwerke der spätbyzantinischen Malerei, wobei besonders die Darstellungen der heiligen Krieger und des Despoten Stefan hervorzuheben sind. Trotz schwerer Beschädigungen durch die Osmanen im Jahr 1459 und späterer Plünderungen ist das Kloster heute ein lebendiges religiöses Zentrum und ein geschütztes Kulturdenkmal von außerordentlicher Bedeutung.",
      hu: "A Manasija-kolostor, más néven Resava, a késő középkori szerb építészet és kultúra egyik legkiemelkedőbb alkotása, a Morava-stílus képviselője. 1407 és 1418 között épült Stefan Lazarević despota alapításával, aki saját temetkezési helyéül és védelmi erődítményéül szánta. A kolostort egy monumentális falrendszer veszi körül tizenegy bástyával, amelyek közül a legnagyobb a Despota-torony. A 15. században itt működött a híres Resavai iskola, amely a szerb irodalom és írásbeliség központja volt, ahol szerzetesek könyveket másoltak és fordítottak, megőrizve a keresztény kultúrát az oszmán fenyegetés idején. A Szentháromságnak szentelt főtemplom belső terét lenyűgöző freskók díszítik, amelyek a késő bizánci festészet csúcspontját jelentik; különösen híresek a szent harcosokat ábrázoló képek. Noha 1459-ben az oszmánok elfoglalták és később többször megrongálták, a kolostor ma is működik, és Szerbia egyik legfontosabb történelmi emlékhelyeként látogatható Despotovac közelében.",
      ro: "Mănăstirea Manasija, cunoscută și sub numele de Resava, reprezintă unul dintre cele mai importante monumente ale culturii medievale sârbe, aparținând stilului arhitectural Morava. Fondată de despotul Stefan Lazarević între 1407 și 1418, mănăstirea a fost concepută atât ca lăcaș spiritual, cât și ca fortăreață defensivă împotriva invaziilor. Complexul este înconjurat de ziduri masive de apărare prevăzute cu unsprezece turnuri, cel mai impunător fiind Turnul Despotului. În secolul al XV-lea, Manasija a găzduit celebra Școală de la Resava, un centru cultural și literar unde manuscrisele erau transcrise și traduse, jucând un rol crucial în conservarea identității creștine. Biserica principală, închinată Sfintei Treimi, adăpostește fresce considerate capodopere ale artei bizantine târzii, remarcându-se prin realismul portretelor și rafinamentul execuției. Deși a fost cucerită de otomani în 1459 și a suferit numeroase jafuri de-a lungul secolelor, mănăstirea rămâne un simbol al rezistenței și al apogeului cultural sârb dinaintea ocupației de lungă durată.",
      en: "Manasija Monastery, also known as Resava, is one of the most significant monuments of medieval Serbian culture, representing the Morava architectural school at its peak. It was built by Despot Stefan Lazarević between 1407 and 1418 as his primary mausoleum and a fortified retreat. The complex is enclosed by a massive defensive wall featuring eleven towers, the largest of which is known as the Despot's Tower. During the 15th century, the monastery served as the home of the Resava School, a prominent center for the transcription and translation of Christian texts, vital for preserving Serbian literacy during the Ottoman expansion. The main church, dedicated to the Holy Trinity, is renowned for its high-quality stone construction and its interior frescoes. These paintings are considered masterpieces of late Byzantine art, particularly the portraits of holy warriors and the donor portrait of Stefan Lazarević. Despite being captured by the Ottomans in 1459 and suffering heavy damage over centuries, the monastery remains an active religious site and a testament to the cultural zenith of late medieval Serbia.",
      es: "El monasterio de Manasija, también conocido como Resava, fue fundado a principios del siglo XV por el déspota Stefan Lazarević. Es uno de los monumentos más destacados de la cultura medieval serbia, famoso por sus masivas fortificaciones con once torres. La escuela monástica de Resava fue un centro clave para la copia y traducción de libros.",
      pt: "O mosteiro de Manasija, também conhecido como Resava, foi fundado no início do século XV pelo déspota Stefan Lazarević. É um dos monumentos mais importantes da cultura medieval sérvia e é conhecido pelas suas fortificações maciças com onze torres. A escola do mosteiro de Resava foi um importante centro de cópia e tradução de livros.",
      fr: "Le monastère de Manasija, également connu sous le nom de Resava, a été fondé au début du XVe siècle par le despote Stefan Lazarević. C'est l'un des monuments les plus importants de la culture serbe médiévale, célèbre pour ses fortifications massives comprenant onze tours. L'école de Resava au monastère était un centre majeur pour la copie et la traduction de livres.",
    },
    factsAdvanced: {
      de: ["Die Festungsmauer des Klosters besteht aus elf Türmen, die durch Wehrgänge verbunden sind.", "Der Bau dauerte elf Jahre, von 1407 bis 1418, unter der Leitung von Stefan Lazarević.", "Die Resava-Schreibschule im Kloster war die wichtigste Institution ihrer Art auf dem Balkan.", "Im Jahr 1459 wurde das Kloster von den Osmanen eingenommen und teilweise geplündert.", "Das Grab von Despot Stefan Lazarević wurde im Jahr 2006 im Boden der Kirche entdeckt.", "Das Kloster liegt am Fluss Resava, etwa 30 Kilometer von der Stadt Jagodina entfernt."],
      hu: ["A kolostort védő falrendszer 11 toronyból áll, a központi torony falvastagsága eléri a 2 métert.", "A 15. századi Resavai iskola több száz görög és bolgár nyelvű művet fordított le szerbre.", "Stefan Lazarević despotát, a kolostor alapítóját, itt temették el 1427-ben.", "A Szentháromság-templom padlóját mozaikok díszítik, ami ritkaság a Morava-stílusú templomokban.", "Az oszmán uralom alatt a kolostor ólomból készült tetőzetét beolvasztották lőszernek.", "A kolostor minden évben otthont ad a 'Just Out' elnevezésű nemzetközi lovagi fesztiválnak."],
      ro: ["Zidurile fortăreței au o lungime de aproximativ 400 de metri și includ 11 turnuri de apărare.", "Școala de la Resava a stabilit standardele limbii literare sârbe în secolul al XV-lea.", "Mănăstirea a fost construită din piatră de carieră adusă din regiunea învecinată a râului Resava.", "Moaștele despotului Stefan Lazarević au fost identificate oficial în incinta bisericii în 2006.", "Majoritatea frescelor originale au fost deteriorate de incendii în timpul războaielor austro-turce.", "Turnul principal, numit și 'Donjon', servea drept ultim punct de apărare în caz de asediu."],
      en: ["The monastery complex is protected by a defensive wall featuring 11 massive towers.", "It was built between 1407 and 1418 by Despot Stefan Lazarević, son of Prince Lazar.", "The Resava School based here was the most famous center for Slavic literature in the 1400s.", "The Despot's Tower is the largest and most fortified structure within the monastery walls.", "In 2006, DNA analysis confirmed that the remains found in the church belonged to Stefan Lazarević.", "The monastery is located near the town of Despotovac, named after its founder."],
      es: ["El monasterio fue construido entre 1407 y 1418", "La muralla de la fortaleza incluye un total de 11 torres defensivas", "La iglesia está dedicada a la Santísima Trinidad", "Aquí se encuentra la tumba del déspota Stefan Lazarević", "Los frescos se cuentan entre los más bellos de la escuela de Morava", "Manasija se encuentra cerca de la ciudad de Despotovac"],
      pt: ["O mosteiro foi construído entre 1407 e 1418", "A muralha da fortaleza inclui um total de 11 torres de defesa", "A igreja é dedicada à Santíssima Trindade", "Aqui encontra-se o túmulo do déspota Stefan Lazarević", "Os frescos estão entre os mais belos da escola de Morava", "Manasija situa-se perto da cidade de Despotovac"],
      fr: ["Le monastère a été construit entre 1407 et 1418", "L'enceinte de la forteresse comprend un total de 11 tours de défense", "L'église est dédiée à la Sainte Trinité", "Le tombeau du despote Stefan Lazarević s'y trouve", "Les fresques sont parmi les plus belles de l'école de la Morava", "Manasija se situe près de la ville de Despotovac"],
    },
  },
  // RS-011 Toplicki
  {
    id: "RS-011-prokuplje", "sights": {"de": [{"name": "Rimsko kupatilo", "text": "Die Überreste historischer römischer Thermen in Prokuplje.", "category": "historical", "coords": [21.583413, 43.230182]}, {"name": "Spomenik Topličanima", "text": "Ein Denkmal für die gefallenen Soldaten der Region Toplica.", "category": "historical", "coords": [21.587342, 43.234496]}, {"name": "Hamam", "text": "Ein historisches türkisches Bad aus der osmanischen Zeit.", "category": "historical", "coords": [21.588825, 43.232299]}, {"name": "Dr Zoran Đinđić", "text": "Ein Denkmal für den serbischen Politiker Zoran Đinđić.", "category": "historical", "coords": [21.60424, 43.237676]}, {"name": "Rastovničko jezero", "text": "Der Rastovničko-See in Prokuplje ist ein friedliches Ausflugsziel mit schöner Aussicht auf die umliegende Natur.", "category": "natural", "coords": [21.604272, 43.210776]}], "hu": [{"name": "Rimsko kupatilo", "text": "Történelmi római fürdők maradványai Prokupljében.", "category": "historical", "coords": [21.583413, 43.230182]}, {"name": "Spomenik Topličanima", "text": "Emlékmű a Toplica régió elesett katonáinak.", "category": "historical", "coords": [21.587342, 43.234496]}, {"name": "Hamam", "text": "Történelmi török fürdő az oszmán korszakból.", "category": "historical", "coords": [21.588825, 43.232299]}, {"name": "Dr Zoran Đinđić", "text": "Emlékmű Zoran Đinđić szerb politikus tiszteletére.", "category": "historical", "coords": [21.60424, 43.237676]}, {"name": "Rastovničko jezero", "text": "A Prokuplje-i Rastovničko-tó egy békés kirándulóhely, szép kilátással a környező természetre.", "category": "natural", "coords": [21.604272, 43.210776]}], "ro": [{"name": "Rimsko kupatilo", "text": "Rămășițele unor băi romane istorice în Prokuplje.", "category": "historical", "coords": [21.583413, 43.230182]}, {"name": "Spomenik Topličanima", "text": "Un monument dedicat soldaților căzuți din regiunea Toplica.", "category": "historical", "coords": [21.587342, 43.234496]}, {"name": "Hamam", "text": "O baie turcească istorică din perioada otomană.", "category": "historical", "coords": [21.588825, 43.232299]}, {"name": "Dr Zoran Đinđić", "text": "Un monument dedicat politicianului sârb Zoran Đinđić.", "category": "historical", "coords": [21.60424, 43.237676]}, {"name": "Rastovničko jezero", "text": "Lacul Rastovničko din Prokuplje este o destinație de excursie pașnică, cu o priveliște frumoasă asupra naturii înconjurătoare.", "category": "natural", "coords": [21.604272, 43.210776]}], "en": [{"name": "Rimsko kupatilo", "text": "The remains of historical Roman baths in Prokuplje.", "category": "historical", "coords": [21.583413, 43.230182]}, {"name": "Spomenik Topličanima", "text": "A monument to the fallen soldiers of the Toplica region.", "category": "historical", "coords": [21.587342, 43.234496]}, {"name": "Hamam", "text": "A historic Turkish bath from the Ottoman era.", "category": "historical", "coords": [21.588825, 43.232299]}, {"name": "Dr Zoran Đinđić", "text": "A monument to the Serbian politician Zoran Đinđić.", "category": "historical", "coords": [21.60424, 43.237676]}, {"name": "Rastovničko jezero", "text": "Rastovničko Lake in Prokuplje is a peaceful excursion destination with a beautiful view of the surrounding nature.", "category": "natural", "coords": [21.604272, 43.210776]}]},
    type: "city",
    parent: "RS-011",
    coords: [21.5889, 43.2339],
    name: { de: "Prokuplje", hu: "Prokuplje", ro: "Prokuplje", en: "Prokuplje" },
    description: {
      de: "Das administrative Zentrum des Bezirks Toplica, benannt nach dem Heiligen Procopius.",
      hu: "A Toplica körzet közigazgatási központja, Szent Procopiusról nevezték el.",
      ro: "Centrul administrativ al districtului Toplica, numit după Sfântul Procopie.",
      en: "The administrative center of the Toplica district, named after Saint Procopius.",
      es: "El centro administrativo del distrito de Toplica, que lleva el nombre de San Procopio.",
      pt: "O centro administrativo do distrito de Toplica, batizado em homenagem a São Procópio.",
      fr: "Le centre administratif du district de Toplica, nommé d'après Saint Procope.",
    },
    facts: {
      de: ["Hisar-Hügel", "Römische Thermen", "Weinregion"],
      hu: ["Hisar-domb", "Római fürdők", "Borvidék"],
      ro: ["Dealul Hisar", "Terme romane", "Regiune viticolă"],
      en: ["Hisar Hill", "Roman baths", "Wine region"],
      es: ["Colina Hisar", "Termas romanas", "Región vinícola"],
      pt: ["Colina Hisar", "Termas romanas", "Região vinícola"],
      fr: ["Colline d'Hisar", "Thermes romains", "Région viticole"],
    },
    descriptionAdvanced: {
      de: "Prokuplje ist das administrative Zentrum des Toplica-Distrikts im Süden Serbiens und liegt am Ufer des Flusses Toplica. Die Stadt hat eine lange Geschichte, die bis in die römische Antike zurückreicht, als sie unter dem Namen Hammeum bekannt war. Im Mittelalter wurde die Stadt nach dem Heiligen Procopius benannt, dessen Reliquien im 14. Jahrhundert hierher gebracht wurden, um sie vor den herannahenden Osmanen zu schützen. Die mittelalterliche Festung auf dem Hisar-Hügel überragt die Stadt und zeugt von ihrer strategischen Bedeutung an der Kreuzung wichtiger Handelswege zwischen der Adria und dem Landesinneren. Geografisch ist die Region für das Phänomen der Epigenie der Toplica bekannt, bei dem der Fluss den Hisar-Hügel fast vollständig umfließt. Wirtschaftlich ist Prokuplje traditionell ein Zentrum der Landwirtschaft, insbesondere des Weinbaus; die einheimische Rebsorte Prokupac ist über die Grenzen Serbiens hinaus bekannt. In der Stadt befinden sich bedeutende Denkmäler wie die Kirche des Heiligen Procopius aus dem 9. Jahrhundert und die Lateinische Kirche, die auf römischen Fundamenten errichtet wurde.",
      hu: "Prokuplje a dél-szerbiai Toplica körzet közigazgatási központja, amely a Toplica-folyó partján, a Hisar-hegy lábánál fekszik. A település története a római korig nyúlik vissza, amikor Hammeum néven fontos katonai állomás volt a Naissus-Lissus út mentén. Mai nevét a 14. században kapta Szent Prokopioszról, akinek ereklyéit ekkor hozták ide Nišből a török támadások elől. A Hisar-hegyen található középkori vár romjai a város védelmi jelentőségét hirdetik, ahonnan belátható az egész völgy. A környék különleges földrajzi látványossága a Toplica-folyó epigenetikus völgye, ahol a folyó szinte körbeöleli a várat hordozó dombot. Prokuplje gazdasága hagyományosan a mezőgazdaságra épül, különösen híres a borászatáról; a névadó Prokupac szőlőfajta az egyik legősibb balkáni fajta. A kulturális örökség része a 9. századi Szent Prokopiosz-templom, amely Szerbia egyik legrégebbi, ma is működő ortodox temploma, valamint a római alapokra épült Latin-templom.",
      ro: "Prokuplje este centrul administrativ al districtului Toplica din sudul Serbiei, fiind situat pe cursul râului Toplica, la poalele dealului Hisar. Orașul are rădăcini adânci în istorie, fiind cunoscut în epoca romană sub denumirea de Hammeum. Numele actual provine de la Sfântul Procopie, ale cărui moaște au fost adăpostite aici în secolul al XIV-lea pentru a fi protejate de invazia otomană. Fortăreața medievală situată pe Hisar este cel mai important simbol istoric al orașului, oferind o perspectivă strategică asupra văii. O particularitate geografică rară este fenomenul de epigenie al râului Toplica, care înconjoară dealul Hisar într-o buclă aproape completă. Economia locală este strâns legată de agricultură, Prokuplje fiind renumit pentru producția de vin, în special pentru soiul autohton Prokupac. Printre obiectivele culturale majore se numără Biserica Sfântul Procopie, datând din secolul al IX-lea, una dintre cele mai vechi biserici active din Serbia, și Biserica Latină, construită pe ruinele unui templu roman și ale unei bazilici bizantine.",
      en: "Prokuplje is the administrative center of the Toplica District in southern Serbia, positioned along the Toplica River and beneath the historic Hisar Hill. The city's history dates back to Roman times when it was known as Hammeum, serving as a key station on the road connecting Niš with the Adriatic coast. It was later renamed after Saint Procopius in the 14th century, whose relics were transferred here to save them from Ottoman destruction. The medieval fortress on Hisar Hill remains a primary landmark, illustrating the town's strategic importance during the Middle Ages. Geographically, the area is famous for the Toplica River's epigenetic valley, a rare natural phenomenon where the river loops around the hill. Economically, Prokuplje has long been a hub for agriculture and viticulture; the indigenous Prokupac grape variety originates from this region and is a staple of Serbian winemaking. Cultural sites include the 9th-century Church of Saint Procopius, one of the oldest operational churches in the country, and the Latin Church, built over Roman and Byzantine foundations.",
      es: "Prokuplje se encuentra en el sur de Serbia, a orillas del río Toplica. La ciudad es conocida por la iglesia de San Procopio, que data del siglo IX. En la colina Hisar se encuentran los restos de una fortaleza medieval. La región es un centro importante para la viticultura y la agricultura en el distrito de Toplica.",
      pt: "Prokuplje situa-se no sul da Sérvia, nas margens do rio Toplica. A cidade é conhecida pela igreja de São Procópio do século IX. Na colina Hisar encontram-se vestígios de uma fortaleza medieval. A região é um importante centro de viticultura e agricultura no distrito de Toplica.",
      fr: "Prokuplje est située au sud de la Serbie, sur la rivière Toplica. La ville est connue pour l'église Saint-Procope datant du IXe siècle. Sur la colline d'Hisar se trouvent les vestiges d'une forteresse médiévale. La région est un centre important pour la viticulture et l'agriculture dans le district de Toplica.",
    },
    factsAdvanced: {
      de: ["Prokuplje liegt etwa 30 Kilometer südwestlich von Niš am Fluss Toplica.", "Die Kirche des Heiligen Procopius wurde ursprünglich im 9. Jahrhundert erbaut.", "Die Stadt wurde im Jahr 1395 in einer Urkunde der Prinzessin Milica erstmals unter dem heutigen Namen erwähnt.", "Das Hisar-Hügel Phänomen ist eine der seltensten geografischen Flusswindungen in Europa.", "Während des Ersten Weltkriegs war Prokuplje das Zentrum des Toplica-Aufstands im Jahr 1917.", "In der Nähe der Stadt wurden wichtige archäologische Funde aus der Vinča-Kultur (Neolithikum) gemacht."],
      hu: ["A város római kori neve Hammeum volt, és fontos megállóhelyként szolgált a kereskedelmi utakon.", "Szent Prokopiosz ereklyéit 1386-ban szállították át Nišből a városba.", "A Toplica-folyó Hisar körüli kanyarulata Európa egyik ritka epigenetikus völgye.", "A Prokupac szőlőfajta erről a vidékről származik, és a szerb borkultúra alapköve.", "Az 1917-es toplicei felkelés során a város a szerb ellenállás központja volt a bolgár megszállás ellen.", "A Latin-templom néven ismert épület egy Herkulesnek szentelt római templom alapjaira épült."],
      ro: ["Orașul a fost un nod rutier important pe via militară romană care lega Naissus de Lissus.", "Biserica Sfântul Procopie păstrează moaștele sfântului din anul 1386 până în prezent.", "Fenomenul de epigenie al râului Toplica este unic în Serbia și foarte rar în restul Europei.", "Cetatea Hisar a fost construită în secolul al XIV-lea pe locul unor fortificații antice mai vechi.", "Prokuplje a fost eliberat de sub stăpânirea otomană în anul 1877, în urma războiului sârbo-turc.", "În localitatea Pločnik din apropiere a fost descoperită cea mai veche dovadă a prelucrării cuprului din lume."],
      en: ["The Roman name for the city was Hammeum, a key settlement in the province of Moesia Superior.", "Prokuplje was named after Saint Procopius, whose relics are still kept in the local church.", "The Toplica River flows around Hisar Hill in a way that it almost meets itself, a rare geological feature.", "The city is the birthplace of the 'Prokupac' wine, a symbol of Serbian viticulture.", "In 1917, Prokuplje was the headquarters of the Toplica Uprising against Bulgarian occupation.", "The Pločnik archaeological site nearby belongs to the Vinča culture and dates back to 5000 BC."],
      es: ["La iglesia de San Procopio data de los siglos IX al X", "La ciudad lleva el nombre de San Procopio de Scythopolis", "La colina Hisar alberga una fortaleza de la época romana", "Prokuplje es el centro administrativo del distrito de Toplica", "La población de la zona urbana es de unos 27.000 habitantes", "Aquí se celebra anualmente el festival de música Prokupačka gitarijada"],
      pt: ["A igreja de São Procópio data do século IX ao X", "A cidade foi batizada em homenagem a São Procópio de Citópolis", "A colina Hisar abriga uma fortaleza da época romana", "Prokuplje é o centro administrativo do distrito de Toplica", "A população da área urbana é de cerca de 27.000 habitantes", "Aqui realiza-se anualmente o festival de música Prokupačka gitarijada"],
      fr: ["L'église Saint-Procope date du IXe-Xe siècle", "La ville porte le nom de Saint Procope de Scythopolis", "La colline d'Hisar abrite une forteresse de l'époque romaine", "Prokuplje est le centre administratif du district de Toplica", "La population de la zone urbaine est d'environ 27 000 habitants", "Le festival de musique Prokupačka gitarijada s'y déroule chaque année"],
    },
    image: "/poi-images/RS-011-prokuplje.webp",
  },
  // RS-012 Zlatiborski
  {
    id: "RS-012-uzice", "sights": {
      "de": [
            {
                  "name": "Stay play",
                  "text": "Stay play ist eine Spielhalle in Uzice, die verschiedene Spiele für Familien bietet.",
                  "category": "family",
                  "coords": [
                        19.841879,
                        43.857267
                  ]
            },
            {
                  "name": "Veliki park",
                  "text": "Велики парк ist ein Spielplatz in Uzice mit Spielgeräten im Freien für Kinder.",
                  "category": "family",
                  "coords": [
                        19.846177,
                        43.84918
                  ]
            },
            {
                  "name": "Galaksija Playroom",
                  "text": "Galaksija Playroom ist eine Spielhalle in Uzice, die sich für Familienunterhaltung eignet.",
                  "category": "family",
                  "coords": [
                        19.835164,
                        43.854747
                  ]
            },
            {
                  "name": "EU Parkić",
                  "text": "ЕУ Паркић ist ein Spielplatz in Uzice mit Einrichtungen zum Spielen für Kinder.",
                  "category": "family",
                  "coords": [
                        19.833169,
                        43.853822
                  ]
            },
            {
                  "name": "Megdan",
                  "text": "Мегдан ist ein Spielplatz in Uzice, der für Outdoor-Aktivitäten von Kindern konzipiert ist.",
                  "category": "family",
                  "coords": [
                        19.840409,
                        43.855227
                  ]
            },
            {
                  "name": "Uzice City Beach",
                  "text": "Dieses Resort in Uzice bietet einen Ort für Entspannung und wasserbezogene Aktivitäten.",
                  "category": "family",
                  "coords": [
                        19.832259,
                        43.852955
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Stay play",
                  "text": "A Stay play egy játékterem Uzice városában, amely különféle játékokat kínál családoknak.",
                  "category": "family",
                  "coords": [
                        19.841879,
                        43.857267
                  ]
            },
            {
                  "name": "Veliki park",
                  "text": "A Велики парк egy játszótér Uzice városában, ahol szabadtéri játékok várják a gyerekeket.",
                  "category": "family",
                  "coords": [
                        19.846177,
                        43.84918
                  ]
            },
            {
                  "name": "Galaksija Playroom",
                  "text": "A Galaksija Playroom egy játékterem Uzice városában, amely családi szórakozást kínál.",
                  "category": "family",
                  "coords": [
                        19.835164,
                        43.854747
                  ]
            },
            {
                  "name": "EU Parkić",
                  "text": "Az ЕУ Паркић egy játszótér Uzice városában, ahol a gyerekek játszhatnak.",
                  "category": "family",
                  "coords": [
                        19.833169,
                        43.853822
                  ]
            },
            {
                  "name": "Megdan",
                  "text": "A Мегдан egy játszótér Uzice városában, amelyet a gyerekek szabadtéri tevékenységeihez alakítottak ki.",
                  "category": "family",
                  "coords": [
                        19.840409,
                        43.855227
                  ]
            },
            {
                  "name": "Uzice City Beach",
                  "text": "Ez a Uzice városában található üdülőhely kikapcsolódást és vízi tevékenységeket kínál.",
                  "category": "family",
                  "coords": [
                        19.832259,
                        43.852955
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Stay play",
                  "text": "Stay play este o sală de jocuri în Uzice, oferind diverse jocuri pentru familii.",
                  "category": "family",
                  "coords": [
                        19.841879,
                        43.857267
                  ]
            },
            {
                  "name": "Veliki park",
                  "text": "Велики парк este un teren de joacă în Uzice, oferind echipamente de joacă în aer liber pentru copii.",
                  "category": "family",
                  "coords": [
                        19.846177,
                        43.84918
                  ]
            },
            {
                  "name": "Galaksija Playroom",
                  "text": "Galaksija Playroom este o sală de jocuri în Uzice, potrivită pentru divertismentul în familie.",
                  "category": "family",
                  "coords": [
                        19.835164,
                        43.854747
                  ]
            },
            {
                  "name": "EU Parkić",
                  "text": "ЕУ Паркић este un teren de joacă în Uzice, dotat cu facilități de joacă pentru copii.",
                  "category": "family",
                  "coords": [
                        19.833169,
                        43.853822
                  ]
            },
            {
                  "name": "Megdan",
                  "text": "Мегдан este un teren de joacă în Uzice, conceput pentru activități în aer liber pentru copii.",
                  "category": "family",
                  "coords": [
                        19.840409,
                        43.855227
                  ]
            },
            {
                  "name": "Uzice City Beach",
                  "text": "Această stațiune din Uzice oferă un loc pentru relaxare și activități acvatice.",
                  "category": "family",
                  "coords": [
                        19.832259,
                        43.852955
                  ]
            }
      ],
      "en": [
            {
                  "name": "Stay play",
                  "text": "Stay play is an amusement arcade in Uzice offering various games for families.",
                  "category": "family",
                  "coords": [
                        19.841879,
                        43.857267
                  ]
            },
            {
                  "name": "Veliki park",
                  "text": "Велики парк is a playground in Uzice providing outdoor play equipment for children.",
                  "category": "family",
                  "coords": [
                        19.846177,
                        43.84918
                  ]
            },
            {
                  "name": "Galaksija Playroom",
                  "text": "Galaksija Playroom is an amusement arcade in Uzice suitable for family entertainment.",
                  "category": "family",
                  "coords": [
                        19.835164,
                        43.854747
                  ]
            },
            {
                  "name": "EU Parkić",
                  "text": "ЕУ Паркић is a playground in Uzice featuring facilities for children to play.",
                  "category": "family",
                  "coords": [
                        19.833169,
                        43.853822
                  ]
            },
            {
                  "name": "Megdan",
                  "text": "Мегдан is a playground in Uzice designed for children's outdoor activities.",
                  "category": "family",
                  "coords": [
                        19.840409,
                        43.855227
                  ]
            },
            {
                  "name": "Uzice City Beach",
                  "text": "This resort in Uzice offers a place for relaxation and water-related activities.",
                  "category": "family",
                  "coords": [
                        19.832259,
                        43.852955
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-012",
    coords: [19.8425, 43.8586],
    name: { de: "Užice", hu: "Uzice", ro: "Užice", en: "Užice" },
    description: {
      de: "Eine historische Stadt im Westen Serbiens, berühmt für die Partisanenrepublik Užice im Zweiten Weltkrieg.",
      hu: "Történelmi város Nyugat-Szerbiában, híres a második világháborús Uzicei Partizánköztársaságról.",
      ro: "Un oraș istoric în vestul Serbiei, faimos pentru Republica Partizană Užice din al Doilea Război Mondial.",
      en: "A historical city in western Serbia, famous for the Užice Partisan Republic in WWII.",
      es: "Una ciudad histórica en el oeste de Serbia, famosa por la República de Užice durante la Segunda Guerra Mundial.",
      pt: "Uma cidade histórica no oeste da Sérvia, famosa pela República de Užice durante a Segunda Guerra Mundial.",
      fr: "Une ville historique de l'ouest de la Serbie, célèbre pour la République d'Užice pendant la Seconde Guerre mondiale.",
    },
    facts: {
      de: ["Alte Burg Užice", "Erstes Wasserkraftwerk (Tesla-Prinzip)", "Tor zu Zlatibor"],
      hu: ["Régi uzicei vár", "Első vízerőmű (Tesla-elv)", "Zlatibor kapuja"],
      ro: ["Cetatea veche Užice", "Prima hidrocentrală (principiul Tesla)", "Poarta către Zlatibor"],
      en: ["Old Užice Fortress", "First hydroelectric plant (Tesla principle)", "Gateway to Zlatibor"],
      es: ["Viejo castillo de Užice", "Primera hidroeléctrica (principio de Tesla)", "Puerta a Zlatibor"],
      pt: ["Antigo castelo de Užice", "Primeira hidroelétrica (princípio de Tesla)", "Porta para Zlatibor"],
      fr: ["Ancien château d'Užice", "Première centrale hydroélectrique (Tesla)", "Porte vers Zlatibor"],
    },
    descriptionAdvanced: {
      de: "Užice ist ein bedeutendes Industrie- und Kulturzentrum in Westserbien, gelegen im tiefen Tal des Flusses Đetinja im Zlatibor-Distrikt. Die Stadt wird von den Ruinen einer mittelalterlichen Festung aus dem 14. Jahrhundert überragt, die einst dem lokalen Herrscher Nikola Altomanović gehörte. In der neueren Geschichte erlangte Užice Weltruhm als Zentrum der kurzlebigen 'Republik Užice' im Jahr 1941, dem ersten befreiten Territorium im besetzten Europa während des Zweiten Weltkriegs. Ein bemerkenswertes technisches Denkmal ist das Wasserkraftwerk an der Đetinja aus dem Jahr 1900, das nach den Prinzipien von Nikola Tesla erbaut wurde und das erste seiner Art in Serbien sowie eines der ersten weltweit war. Die Stadt ist heute für ihre starke Metallindustrie, Textilproduktion und als Tor zum Zlatibor-Gebirge bekannt. Kulturell ist Užice für die traditionelle Küche berühmt, insbesondere das 'Komplet lepinja' Gebäck. Die moderne Stadtarchitektur ist durch brutalistische Gebäude geprägt, die in den Nachkriegsjahren entstanden sind, während die Umgebung durch tiefe Schluchten und dichte Wälder besticht.",
      hu: "Užice Nyugat-Szerbia egyik legfontosabb városa, a Zlatibor körzet központja, amely a Đetinja-folyó mély völgyében fekszik. A várost a 14. századi középkori vár romjai uralják, amely stratégiai védelmi pont volt Nikola Altomanović idején. A modern történelemben a város 1941-ben vált világhírűvé az 'Užicei Köztársaság' központjaként; ez volt az első felszabadított terület a náci megszállás alatt álló Európában. Műszaki szempontból kiemelkedő a Đetinja-folyón 1900-ban épült vízi erőmű, amely Nikola Tesla váltóáramú elvein alapult, és az egyik első ilyen létesítmény volt a világon. Užice ma jelentős ipari csomópont, ahol a fém- és textilipar dominál, ugyanakkor a turizmus is fontos, mivel innen indulnak az utak a Zlatibor-hegység felé. A város gasztronómiája egyedülálló, legismertebb étele a 'komplet lepinja'. Az épített örökséget a szocialista modernizmus és a brutalista építészet jellemzi, amely érdekes kontrasztot alkot a környező vadregényes kanyonokkal.",
      ro: "Užice este un centru industrial și cultural major din vestul Serbiei, situat în valea adâncă a râului Đetinja, în districtul Zlatibor. Orașul este dominat de ruinele unei cetăți medievale din secolul al XIV-lea, care a servit drept reședință pentru puternicul nobil Nikola Altomanović. În istoria contemporană, Užice a devenit faimos ca sediu al 'Republicii de la Užice' în 1941, fiind prima regiune eliberată din Europa ocupată de naziști în timpul celui de-al Doilea Război Mondial. Un punct de interes tehnic deosebit este hidrocentrala de pe râul Đetinja, inaugurată în 1900 conform principiilor curentului alternativ ale lui Nikola Tesla, fiind prima de acest tip din Serbia și printre primele din lume. În prezent, orașul este un nod economic vital, cu industrii dezvoltate în prelucrarea metalelor și textile, fiind și poarta principală către stațiunile montane din Zlatibor. Užice se remarcă prin arhitectura sa socialistă brutalistă și prin tradițiile gastronomice locale, cel mai cunoscut produs fiind 'komplet lepinja'.",
      en: "Užice is a major industrial and cultural hub in Western Serbia, nestled in the deep valley of the Đetinja River within the Zlatibor District. The city is overlooked by the ruins of a 14th-century medieval fortress, once the stronghold of local ruler Nikola Altomanović. In modern history, Užice gained international recognition as the center of the 'Užice Republic' in 1941, which was the first liberated territory in Nazi-occupied Europe during World War II. A landmark of engineering is the hydroelectric power plant on the Đetinja River, built in 1900 based on Nikola Tesla's principles; it was the first of its kind in Serbia and among the first in the world. Today, the city is known for its robust metal and textile industries and serves as the main gateway to the Zlatibor mountain range. Culturally, Užice is famous for its distinctive local cuisine, particularly the 'komplet lepinja' pastry. Its landscape is characterized by a mix of socialist-era brutalist architecture and stunning natural features like the Đetinja Canyon.",
      es: "Užice se encuentra en el oeste de Serbia, a orillas del río Đetinja. La ciudad es conocida por su fortaleza medieval que domina el valle. En el año 1900 se construyó aquí una de las primeras centrales hidroeléctricas de Europa siguiendo los principios de Tesla. Durante la Segunda Guerra Mundial, fue el centro de la República de Užice.",
      pt: "Užice situa-se no oeste da Sérvia, nas margens do rio Đetinja. A cidade é conhecida pela sua fortaleza medieval, que domina o vale. No ano de 1900, foi construída aqui uma das primeiras centrais hidroelétricas da Europa segundo os princípios de Tesla. Durante a Segunda Guerra Mundial, foi o centro da República de Užice.",
      fr: "Užice est située à l'ouest de la Serbie, sur les rives de la rivière Đetinja. La ville est connue pour sa forteresse médiévale qui surplombe la vallée. En 1900, l'une des premières centrales hydroélectriques d'Europe utilisant les principes de Tesla y fut construite. Pendant la Seconde Guerre mondiale, elle fut le centre de la République d'Užice.",
    },
    factsAdvanced: {
      de: ["Das Wasserkraftwerk 'Pod Gradom' in Užice wurde nur fünf Jahre nach dem am Niagarafall erbaut.", "Die Republik Užice bestand im Jahr 1941 insgesamt 67 Tage lang.", "Die mittelalterliche Festung wurde 1863 nach dem Abzug der Osmanen gesprengt.", "Užice liegt auf einer Höhe von etwa 411 Metern über dem Meeresspiegel.", "Die Stadt war zwischen 1946 und 1992 unter dem Namen Titovo Užice bekannt.", "Die Đetinja-Schlucht bei Užice ist ein geschütztes Naturdenkmal mit vielen Höhlen."],
      hu: ["A Đetinja-folyó erőműve 1900-ban kezdett működni, Szerbiában elsőként Tesla-féle generátorokkal.", "Az Užicei Köztársaság területe 1941 végén mintegy 15 000 négyzetkilométerre terjedt ki.", "A vár romjai egy meredek sziklán állnak, amelyet három oldalról a folyó határol.", "A várost 1946 és 1992 között Titovo Užicének hívták Josip Broz Tito tiszteletére.", "A 'komplet lepinja' hagyományos összetevői a lepény, a tojás, a tejszín és a hús szaftja.", "Itt található Szerbia egyik legnagyobb lőszergyára, a 'Prvi Partizan', amelyet 1928-ban alapítottak."],
      ro: ["Hidrocentrala din Užice a fost prima din Serbia care a utilizat sistemul trifazat al lui Tesla.", "Republica de la Užice a avut propria monedă și fabrică de arme în timpul celor 67 de zile de existență.", "Numele orașului a fost oficial Titovo Užice pentru o perioadă de 46 de ani.", "Cetatea veche a fost parțial reconstruită recent pentru a stimula turismul istoric.", "Orașul este situat la aproximativ 200 de kilometri sud-vest de Belgrad.", "Gara din Užice este un punct important pe calea ferată Belgrad-Bar, celebră pentru podurile sale."],
      en: ["The hydroelectric plant in Užice was the first in Serbia and one of the first in Europe (1900).", "The Užice Republic was the only liberated territory in Europe in the autumn of 1941.", "Between 1946 and 1992, the city carried the prefix 'Titovo' in honor of Josip Broz Tito.", "The medieval fortress of Užice was built to control the trade routes to the Adriatic Sea.", "Užice is the birthplace of many famous athletes, including footballer Nemanja Vidić.", "The city is a key stop on the Belgrade–Bar railway, an engineering marvel with 254 tunnels."],
      es: ["La fortaleza de Užice fue construida en el siglo XIV", "La central hidroeléctrica Pod Gradom comenzó a funcionar en 1900", "La ciudad fue el centro de la República de Užice durante 67 días en 1941", "Užice es el centro administrativo del distrito de Zlatibor", "La ciudad está rodeada por las montañas Zlatibor y Tara", "Conocida por la especialidad local lepinja sa sve"],
      pt: ["A fortaleza de Užice foi construída no século XIV", "A central hidroelétrica Pod Gradom entrou em funcionamento no ano 1900", "A cidade foi o centro da República de Užice por 67 dias em 1941", "Užice é o centro administrativo do distrito de Zlatibor", "A cidade está cercada pelas montanhas Zlatibor e Tara", "Conhecida pela especialidade local lepinja sa sve"],
      fr: ["La forteresse d'Užice a été construite au XIVe siècle", "La centrale hydroélectrique Pod Gradom a été mise en service en 1900", "La ville fut le centre de la République d'Užice pendant 67 jours en 1941", "Užice est le centre administratif du district de Zlatibor", "La ville est entourée par les montagnes de Zlatibor et Tara", "Connue pour la spécialité locale lepinja sa sve"],
    },
    image: "/poi-images/RS-012-uzice.webp",
  },
  // RS-013 Sremski
  {
    id: "RS-013-sremska-mitrovica", "sights": {"de": [{"name": "Sirmium", "text": "Sirmium ist eine äußerst bedeutende archäologische Stätte, welche die Ruinen der antiken römischen Hauptstadt enthält.", "category": "historical", "coords": [19.607903, 44.966429]}, {"name": "Pozorište Dobrica Milutinović", "text": "Das Theater Dobrica Milutinović ist ein bekannter Veranstaltungsort für darstellende Künste, benannt nach dem berühmten Schauspieler.", "category": "cultural", "coords": [19.607435, 44.967846]}, {"name": "Muzej Srema", "text": "Das Museum von Srem ist eine wichtige Einrichtung in Sremska Mitrovica, die dem regionalen Erbe gewidmet ist.", "category": "museum", "coords": [19.609074, 44.967365]}, {"name": "Istočna rimska nekropola Sirmijuma", "text": "Die östliche römische Nekropole von Sirmium zeigt die Gräberfelder der antiken Stadt.", "category": "historical", "coords": [19.626206, 44.971067]}, {"name": "Sirmium Palatium Imperiale", "text": "Der kaiserliche Palast von Sirmium ist ein Museum, das die beeindruckenden Überreste einer römischen Kaiserresidenz bewahrt.", "category": "museum", "coords": [19.610246, 44.966436]}, {"name": "Plaža", "text": "Der Stadtstrand in Sremska Mitrovica bietet einen Ort für Entspannung und Erholung entlang des Flusses.", "category": "recreational", "coords": [19.611319, 44.961751]}, {"name": "Muzej Srema (arheološka postavka)", "text": "Die archäologische Ausstellung des Museums von Srem zeigt bedeutende antike Artefakte aus der Region.", "category": "museum", "coords": [19.60584, 44.967312]}, {"name": "Spomenik svetog Trojstva", "text": "Das Dreifaltigkeitsdenkmal ist eine religiöse Säule, die einen zentralen öffentlichen Raum in Sremska Mitrovica markiert.", "category": "historical", "coords": [19.612645, 44.970227]}, {"name": "Amfiteatar Žitni trg", "text": "Das Amphitheater am Žitni trg (Getreideplatz) zeigt die freigelegten Ruinen eines antiken römischen Veranstaltungsortes.", "category": "historical", "coords": [19.603461, 44.967894]}, {"name": "Crkva Svetog Dimitrija", "text": "Die Kirche des Heiligen Demetrius ist eine bedeutende römisch-katholische Kirche, die der örtlichen Gemeinde dient.", "category": "religious", "coords": [19.611648, 44.96942]}], "hu": [{"name": "Sirmijum", "text": "Sirmium egy rendkívül jelentős régészeti lelőhely, amely az ókori római főváros romjait rejti.", "category": "historical", "coords": [19.607903, 44.966429]}, {"name": "Pozorište Dobrica Milutinović", "text": "A Dobrica Milutinović Színház a híres színészről elnevezett, kiemelkedő előadóművészeti helyszín.", "category": "cultural", "coords": [19.607435, 44.967846]}, {"name": "Muzej Srema", "text": "A Szerémség Múzeum a regionális örökségnek szentelt fontos intézmény Szávaszentdemeteren.", "category": "museum", "coords": [19.609074, 44.967365]}, {"name": "Istočna rimska nekropola Sirmijuma", "text": "Sirmium keleti római nekropolisza az ókori város temetkezési helyeit tárja fel.", "category": "historical", "coords": [19.626206, 44.971067]}, {"name": "Sirmium Palatium Imperiale", "text": "A Sirmiumi Császári Palota egy múzeum, amely egy római császári rezidencia lenyűgöző maradványait őrzi.", "category": "museum", "coords": [19.610246, 44.966436]}, {"name": "Plaža", "text": "A szávaszentdemeteri városi strand a folyó partján kínál pihenési és kikapcsolódási lehetőséget.", "category": "recreational", "coords": [19.611319, 44.961751]}, {"name": "Muzej Srema (arheološka postavka)", "text": "A Szerémség Múzeum régészeti kiállítása a régió jelentős ókori leleteit mutatja be.", "category": "museum", "coords": [19.60584, 44.967312]}, {"name": "Spomenik svetog Trojstva", "text": "A Szentháromság-emlékmű egy vallási oszlop, amely egy központi közteret jelöl Szávaszentdemeteren.", "category": "historical", "coords": [19.612645, 44.970227]}, {"name": "Amfiteatar Žitni trg", "text": "A Žitni trg amfiteátrum egy ókori római közösségi helyszín feltárt romjait mutatja be.", "category": "historical", "coords": [19.603461, 44.967894]}, {"name": "Crkva Svetog Dimitrija", "text": "A Szent Demeter-templom egy kiemelkedő római katolikus egyházközségi templom.", "category": "religious", "coords": [19.611648, 44.96942]}], "ro": [{"name": "Sirmijum", "text": "Sirmium este un sit arheologic foarte important care conține ruinele anticei capitale romane.", "category": "historical", "coords": [19.607903, 44.966429]}, {"name": "Pozorište Dobrica Milutinović", "text": "Teatrul Dobrica Milutinović este un loc proeminent de arte interpretative numit după celebrul actor.", "category": "cultural", "coords": [19.607435, 44.967846]}, {"name": "Muzej Srema", "text": "Muzeul din Srem este o instituție importantă din Sremska Mitrovica dedicată patrimoniului regional.", "category": "museum", "coords": [19.609074, 44.967365]}, {"name": "Istočna rimska nekropola Sirmijuma", "text": "Necropola Romană de Est din Sirmium dezvăluie cimitirele orașului antic.", "category": "historical", "coords": [19.626206, 44.971067]}, {"name": "Sirmium Palatium Imperiale", "text": "Palatul Imperial Sirmium este un muzeu care păstrează rămășițele impresionante ale unei reședințe imperiale romane.", "category": "museum", "coords": [19.610246, 44.966436]}, {"name": "Plaža", "text": "Plaja orașului din Sremska Mitrovica oferă un loc de relaxare și recreere de-a lungul râului.", "category": "recreational", "coords": [19.611319, 44.961751]}, {"name": "Muzej Srema (arheološka postavka)", "text": "Expoziția arheologică a Muzeului din Srem expune artefacte antice semnificative din regiune.", "category": "museum", "coords": [19.60584, 44.967312]}, {"name": "Spomenik svetog Trojstva", "text": "Monumentul Sfintei Treimi este un stâlp religios care marchează un spațiu public central în Sremska Mitrovica.", "category": "historical", "coords": [19.612645, 44.970227]}, {"name": "Amfiteatar Žitni trg", "text": "Amfiteatrul Žitni trg prezintă ruinele descoperite ale unui loc public roman antic.", "category": "historical", "coords": [19.603461, 44.967894]}, {"name": "Crkva Svetog Dimitrija", "text": "Biserica Sfântul Dumitru este o biserică romano-catolică proeminentă care deservește parohia locală.", "category": "religious", "coords": [19.611648, 44.96942]}], "en": [{"name": "Sirmijum", "text": "Sirmium is a highly significant archaeological site containing the ruins of the ancient Roman capital city.", "category": "historical", "coords": [19.607903, 44.966429]}, {"name": "Dobrica Milutinović theatre", "text": "The Dobrica Milutinović theatre is a prominent performing arts venue named after the famous actor.", "category": "cultural", "coords": [19.607435, 44.967846]}, {"name": "Muzej Srema", "text": "The Museum of Srem is an important institution in Sremska Mitrovica dedicated to regional heritage.", "category": "museum", "coords": [19.609074, 44.967365]}, {"name": "Istočna rimska nekropola Sirmijuma", "text": "The Eastern Roman Necropolis of Sirmium reveals burial grounds of the ancient city.", "category": "historical", "coords": [19.626206, 44.971067]}, {"name": "Sirmium Imperial Palace", "text": "The Sirmium Imperial Palace is a museum preserving the impressive remains of a Roman imperial residence.", "category": "museum", "coords": [19.610246, 44.966436]}, {"name": "Plaža", "text": "The city beach in Sremska Mitrovica offers a spot for relaxation and recreation along the river.", "category": "recreational", "coords": [19.611319, 44.961751]}, {"name": "Muzej Srema (arheološka postavka)", "text": "The archaeological exhibition of the Museum of Srem displays significant ancient artifacts from the region.", "category": "museum", "coords": [19.60584, 44.967312]}, {"name": "Spomenik svetog Trojstva", "text": "The Holy Trinity Monument is a religious pillar marking a central public space in Sremska Mitrovica.", "category": "historical", "coords": [19.612645, 44.970227]}, {"name": "Amfiteatar Žitni trg", "text": "The Žitni trg Amphitheater features the uncovered ruins of an ancient Roman public venue.", "category": "historical", "coords": [19.603461, 44.967894]}, {"name": "Crkva Svetog Dimitrija", "text": "The Church of Saint Demetrius is a prominent Roman Catholic church serving the local parish.", "category": "religious", "coords": [19.611648, 44.96942]}]},
    type: "city",
    parent: "RS-013",
    coords: [19.6122, 44.9764],
    name: { de: "Sremska Mitrovica", hu: "Szávaszentdemeter", ro: "Sremska Mitrovica", en: "Sremska Mitrovica" },
    description: {
      de: "Eine der ältesten Städte Serbiens, die auf den Ruinen der antiken römischen Hauptstadt Sirmium erbaut wurde.",
      hu: "Szerbia egyik legrégebbi városa, amely az ókori római főváros, Sirmium romjaira épült.",
      ro: "Unul dintre cele mai vechi orașe din Serbia, construit pe ruinele fostei capitale romane Sirmium.",
      en: "One of the oldest cities in Serbia, built on the ruins of the ancient Roman capital Sirmium.",
      es: "Una de las ciudades más antiguas de Serbia, construida sobre las ruinas de Sirmium, la antigua capital romana.",
      pt: "Uma das cidades mais antigas da Sérvia, construída sobre as ruínas da antiga capital romana de Sirmium.",
      fr: "L'une des plus anciennes villes de Serbie, bâtie sur les ruines de l'ancienne capitale romaine de Sirmium.",
    },
    facts: {
      de: ["Antikes Sirmium", "Kaiserpalast", "An der Save"],
      hu: ["Ókori Sirmium", "Császári palota", "A Száva partján"],
      ro: ["Vechiul Sirmium", "Palatul Imperial", "Pe râul Sava"],
      en: ["Ancient Sirmium", "Imperial Palace", "On the Sava river"],
      es: ["Antigua Sirmium", "Palacio Imperial", "A orillas del Sava"],
      pt: ["Antiga Sirmium", "Palácio Imperial", "Às margens do Sava"],
      fr: ["Ancienne Sirmium", "Palais impérial", "Sur la Save"],
    },
    descriptionAdvanced: {
      de: "Sremska Mitrovica ist eine historische Stadt in der Region Syrmien (Vojvodina) am linken Ufer der Save. Die Stadt blickt auf eine ruhmreiche Vergangenheit zurück, da sie an der Stelle des antiken Sirmium liegt, das im 3. und 4. Jahrhundert n. Chr. eine der vier Hauptstädte des Römischen Reiches war. In dieser Zeit war Sirmium ein bedeutendes politisches, wirtschaftliches und religiöses Zentrum, in dem mehrere römische Kaiser geboren wurden oder residierten. Heute können Besucher die beeindruckenden Überreste des Kaiserpalastes bewundern, die durch eine moderne Schutzstruktur konserviert sind. Die mittelalterliche Stadt wurde nach dem Heiligen Demetrius benannt, der in Sirmium den Märtyrertod erlitt. Während der Herrschaft der Habsburger im 18. und 19. Jahrhundert wurde Sremska Mitrovica zu einem Zentrum der Militärgrenze ausgebaut, was das heutige Stadtbild mit barocken und klassizistischen Gebäuden prägte. Die Stadt ist zudem ein wichtiges Industriezentrum für Lebensmittelverarbeitung und Holzindustrie. Geografisch liegt sie in einer fruchtbaren Ebene, die durch die Save-Auen und die Nähe zum Nationalpark Fruška Gora begünstigt wird.",
      hu: "Sremska Mitrovica (Szávaszentdemeter) a vajdasági Szerémség egyik legjelentősebb városa, a Száva-folyó partján. A település történelmi súlyát az adja, hogy az ókori Sirmium helyén fekszik, amely a 3. és 4. században a Római Birodalom négy fővárosának egyike volt. Ebben az időszakban Sirmium császári székhelyként és katonai központként funkcionált, ahol több római császár (például Aurelianus és Probus) is született. A látogatók ma is megtekinthetik a császári palota romjait, amelyeket modern védőtető alatt konzerváltak. A város mai nevét Szent Demeterről kapta, aki itt szenvedett vértanúhalált a keresztényüldözések idején. A török kiűzése után a Habsburg Birodalom részeként a Katonai Határőrvidék fontos központja lett, ekkor alakult ki a belváros barokk és klasszicista arculata. Gazdaságilag ma jelentős élelmiszeripari és faipari központ, fekvése pedig ideális, hiszen a Száva-folyó és a Fruška Gora hegység közelsége meghatározza természeti környezetét.",
      ro: "Sremska Mitrovica este un oraș istoric situat în regiunea Srem din Voivodina, pe malul stâng al râului Sava. Orașul este faimos pentru moștenirea sa antică, fiind construit pe ruinele celebrului Sirmium, una dintre cele patru capitale ale Imperiului Roman în secolele III și IV d.Hr. Sirmium a fost un centru politic, militar și religios vital, fiind locul de naștere al mai multor împărați romani, printre care Aurelian și Probus. Astăzi, vizitatorii pot explora complexul Palatului Imperial, protejat de o structură modernă, care oferă o perspectivă asupra luxului epocii romane. Numele actual al orașului derivă de la Sfântul Dimitrie, martirizat aici în anul 304 d.Hr. În perioada administrației austriece, orașul a fost un punct cheie al Graniței Militare, ceea ce a dus la dezvoltarea unui centru urban cu arhitectură barocă și neoclasică. Sremska Mitrovica este în prezent un nod industrial important, specializat în prelucrarea lemnului și industria alimentară, beneficiind de proximitatea parcului național Fruška Gora.",
      en: "Sremska Mitrovica is a historic city in the Srem region of Vojvodina, situated on the left bank of the Sava River. The city sits atop the ruins of ancient Sirmium, which served as one of the four capitals of the Roman Empire during the Tetrarchy in the 3rd and 4th centuries AD. During this era, Sirmium was a major political and military hub, seeing the birth or residence of several Roman emperors, including Aurelian, Probus, and Gratian. Modern visitors can explore the Imperial Palace complex, now preserved under a protective structure, showcasing intricate mosaics and Roman engineering. The city's current name is derived from Saint Demetrius, who was martyred here in 304 AD. After the Ottoman withdrawal, the city became part of the Habsburg Military Frontier, leading to the construction of its elegant Baroque and Neoclassical town center. Today, Sremska Mitrovica is a significant industrial center for food and wood processing, located near the southern slopes of the Fruška Gora National Park.",
      es: "Sremska Mitrovica se encuentra en Voivodina, a orillas del río Sava. En la antigüedad, la ciudad era conocida como Sirmium y sirvió como una de las cuatro capitales del Imperio Romano. Los vestigios de esta época incluyen el palacio imperial y numerosos mosaicos. Hoy es el centro administrativo del distrito de Sirmia.",
      pt: "Sremska Mitrovica está localizada na Voivodina, às margens do rio Sava. Na Antiguidade, a cidade era conhecida como Sirmium e serviu como uma das quatro capitais do Império Romano. Evidências desse período são o palácio imperial e inúmeros mosaicos. Hoje, é o centro administrativo do distrito de Sírmia.",
      fr: "Sremska Mitrovica est située en Voïvodine, au bord de la rivière Save. Dans l'Antiquité, la ville était connue sous le nom de Sirmium et servait de l'une des quatre capitales de l'Empire romain. Les témoignages de cette époque sont le palais impérial et de nombreuses mosaïques. Aujourd'hui, elle est le centre administratif du district de Syrmie.",
    },
    factsAdvanced: {
      de: ["In Sirmium wurden mindestens zehn römische Kaiser geboren.", "Der Kaiserpalast von Sirmium verfügte bereits über ein ausgeklügeltes Fußbodenheizsystem.", "Die Stadt wurde im Jahr 1071 erstmals unter dem Namen Civitas Sancti Demetrii erwähnt.", "Sremska Mitrovica besitzt einen der größten Flusshäfen an der Save.", "Das städtische Museum beherbergt eine seltene Sammlung römischer Meilensteine.", "Die Hängebrücke über die Save in der Stadt ist eine der längsten Fußgängerbrücken Europas."],
      hu: ["Sirmiumot a rómaiak a 'városok dicsőséges anyjának' (Sermium mater urbium) nevezték.", "A városban született Aurelianus császár, aki visszaállította a birodalom egységét.", "A mai Szerémség (Srem) neve az ókori Sirmium névből származik.", "Szent Demeter tiszteletére a városban már az 5. században bazilikát emeltek.", "1718-ban a pozsareváci béke után került a település a Habsburg Birodalomhoz.", "A város környéki Zasavica természetvédelmi terület híres a balkáni mocsári teknősökről."],
      ro: ["Sirmium a fost sediul prefecturii Illyricum și a găzduit numeroase concilii bisericești.", "Împăratul Probus a fost cel care a introdus cultura viței-de-vie în regiunea Srem.", "Multe dintre pietrele folosite la construcția cetăților medievale provin din ruinele romane.", "Orașul a fost un important centru de batere a monedei imperiale în antichitate.", "În 1918, Sremska Mitrovica a devenit parte a Regatului Sârbilor, Croaților și Slovenilor.", "Muzeul Srem din oraș deține o colecție unică de altare votive romane."],
      en: ["Sirmium was declared one of the Roman capitals by Emperor Diocletian in 293 AD.", "The city was the site of the first Christian martyrdoms in the region during the 4th century.", "At its peak, ancient Sirmium is estimated to have had over 100,000 inhabitants.", "The Imperial Palace complex features some of the best-preserved Roman mosaics in Serbia.", "Sremska Mitrovica is home to the first modern paper factory in Serbia, founded in 1921.", "The Pedestrian Bridge of St. Irenaeus connects the city center with the Mačva district."],
      es: ["La antigua Sirmium fue fundada por los celtas en el siglo III a. C.", "Sirvió como capital romana durante la Tetrarquía.", "Diez emperadores romanos nacieron en la ciudad o sus alrededores.", "Las ruinas del palacio imperial están protegidas por una estructura moderna.", "Sede de la histórica Iglesia de San Demetrio.", "Situada en la plana y fértil región de Sirmia."],
      pt: ["A antiga Sirmium foi fundada pelos celtas no século III a.C.", "Serviu como capital romana durante a Tetrarquia.", "Dez imperadores romanos nasceram na cidade ou nos arredores.", "As ruínas do palácio imperial estão protegidas por uma construção moderna.", "Local da histórica Igreja de São Demétrio.", "Situada na região plana e fértil de Sírmia."],
      fr: ["L'antique Sirmium fut fondée au IIIe siècle av. J.-C. par les Celtes.", "Elle servit de capitale romaine pendant la Tétrarchie.", "Dix empereurs romains sont nés dans ou près de la ville.", "Les ruines du palais impérial sont protégées par un bâtiment moderne.", "Emplacement de l'église historique Saint-Démétrios.", "Située dans la région plane et fertile de Syrmie."],
    },
    image: "/poi-images/RS-013-sremska-mitrovica.webp",
  },
  {
    id: "RS-013-krusedol", "sights": {
      "de": [
            {
                  "name": "Црква Светог Николе",
                  "text": "Eine serbisch-orthodoxe Kirche nahe dem Kloster Krušedol, die dem Heiligen Nikolaus geweiht ist.",
                  "category": "religious",
                  "coords": [
                        19.897233,
                        45.117121
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Црква Светог Николе",
                  "text": "Szerb ortodox templom a Krušedol-kolostor közelében, amelyet Szent Miklósnak szenteltek.",
                  "category": "religious",
                  "coords": [
                        19.897233,
                        45.117121
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Црква Светог Николе",
                  "text": "O biserică ortodoxă sârbă de lângă mănăstirea Krušedol, dedicată Sfântului Nicolae.",
                  "category": "religious",
                  "coords": [
                        19.897233,
                        45.117121
                  ]
            }
      ],
      "en": [
            {
                  "name": "St. Nicholas Church",
                  "text": "A Serbian Orthodox church near the Krušedol Monastery, dedicated to Saint Nicholas.",
                  "category": "religious",
                  "coords": [
                        19.897233,
                        45.117121
                  ]
            }
      ]
},
    type: "historical",
    parent: "RS-013",
    coords: [19.9400, 45.1200],
    name: { de: "Kloster Krušedol", hu: "Krušedol kolostor", ro: "Mănăstirea Krušedol", en: "Krušedol Monastery" },
    description: {
      de: "Eines der bedeutendsten Klöster der Fruška Gora, gegründet im 16. Jahrhundert.",
      hu: "A Tarcal-hegység egyik legjelentősebb kolostora, amelyet a 16. században alapítottak.",
      ro: "Una dintre cele mai importante mănăstiri din Fruška Gora, fondată în secolul al XVI-lea.",
      en: "One of the most significant monasteries of Fruška Gora, founded in the 16th century.",
      es: "Uno de los monasterios más importantes de Fruška Gora, fundado en el siglo XVI.",
      pt: "Um dos mosteiros mais importantes da Fruška Gora, fundado no século XVI.",
      fr: "L'un des monastères les plus importants de Fruška Gora, fondé au XVIe siècle.",
    },
    facts: {
      de: ["Mausoleum serbischer Könige", "Barockarchitektur", "Fruška Gora Region"],
      hu: ["Szerb királyok mauzóleuma", "Barokk építészet", "Tarcal-hegység vidéke"],
      ro: ["Mausoleul regilor sârbi", "Arhitectură barocă", "Regiunea Fruška Gora"],
      en: ["Mausoleum of Serbian kings", "Baroque architecture", "Fruška Gora region"],
      es: ["Mausoleo de reyes serbios", "Arquitectura barroca", "Región de Fruška Gora"],
      pt: ["Mausoléu de reis sérvios", "Arquitetura barroca", "Região da Fruška Gora"],
      fr: ["Mausolée de rois serbes", "Architecture baroque", "Région de Fruška Gora"],
    }, image: "/poi-images/RS-013-krusedol.webp",
    descriptionAdvanced: {
      de: "Das Kloster Krušedol ist eines der bedeutendsten orthodoxen Klöster auf dem Berg Fruška Gora in der Vojvodina. Es wurde zwischen 1509 und 1514 von der Familie Branković, den letzten serbischen Despoten, gegründet, insbesondere von Đorđe Branković (späterer Erzbischof Maksim) und seiner Mutter Angelina. Das Kloster diente als Mausoleum für die Branković-Dynastie und wurde später zum Sitz des Metropoliten von Karlovci, was ihm eine zentrale Rolle im geistigen Leben der Serben innerhalb der Habsburgermonarchie verlieh. Die Architektur vereint mittelalterliche serbische Traditionen mit barocken Einflüssen, die besonders an der Fassade und dem Glockenturm aus dem 18. Jahrhundert sichtbar sind. Die Hauptkirche ist der Verkündigung der Gottesmutter geweiht und bewahrt wertvolle Fresken aus dem 16. Jahrhundert sowie eine prächtige Ikonostase. Krušedol ist auch historisch bedeutsam, da hier die sterblichen Überreste zahlreicher serbischer Persönlichkeiten ruhen, darunter König Milan Obrenović und die Herzogin Ljubica Obrenović. Trotz Brandstiftung durch die Osmanen im Jahr 1716 blieb das Kloster ein Symbol der nationalen Kontinuität.",
      hu: "A Krušedol-kolostor a szerémségi Fruška Gora hegység tizenhat ortodox kolostora közül a legjelentősebb. 1509 és 1514 között alapította az utolsó szerb despota család, a Brankovićok, név szerint Đorđe Branković (később Maksim érsek) és édesanyja, Angelina. A kolostor nemcsak vallási központként, hanem a család temetkezési helyeként is szolgált. A 18. században a karlócai metropólia székhelye lett, így a Habsburg Birodalomban élő szerbség szellemi és politikai életének központjává vált. Az épület stílusa a középkori szerb bizánci formákat ötvözi a későbbi barokk elemekkel, ami különösen a homlokzaton és a harangtornyon figyelhető meg. A templomot az Örömhír vételének szentelték, belső terét 16. századi freskók és egy díszes barokk ikonosztáz ékesíti. Krušedol történelmi panteonként is funkcionál, itt nyugszik többek között I. Milán szerb király és Ljubica fejedelemasszony is. Noha 1716-ban a törökök felgyújtották, a kolostort a 18. század közepén teljesen helyreállították.",
      ro: "Mănăstirea Krušedol este considerată cea mai importantă dintre mănăstirile de pe muntele Fruška Gora, fiind supranumită 'panteonul Serbiei'. A fost întemeiată între anii 1509 și 1514 de ultima familie de despoți sârbi, familia Branković, prin eforturile lui Đorđe Branković (devenit mitropolitul Maxim) și ale mamei sale, Angelina. Mănăstirea a servit drept reședință pentru Mitropolia de la Carloviț, jucând un rol esențial în menținerea identității ortodoxe a sârbilor din Imperiul Austriac. Arhitectura bisericii, închinată Bunei Vestiri, reflectă o fuziune între stilul medieval sârbesc și elementele baroce adăugate în secolul al XVIII-lea, vizibile în special la turnul clopotniță. Interiorul adăpostește fresce valoroase și o iconostasă impresionantă, fiind și locul de odihnă veșnică pentru numeroase personalități istorice, inclusiv regele Milan Obrenović și patriarhul Arsenie al III-lea Čarnojević. Deși a fost incendiată de otomani în 1716 după bătălia de la Petrovaradin, mănăstirea a fost reconstruită, rămânând un centru spiritual activ și un monument cultural de importanță excepțională.",
      en: "Krušedol Monastery is widely regarded as the most significant of the sixteen Orthodox monasteries on Mount Fruška Gora in Vojvodina. Founded between 1509 and 1514 by the Branković family, the last Serbian despots, it was established by Đorđe Branković (later Archbishop Maksim) and his mother, Saint Angelina. The monastery functioned as a mausoleum for the dynasty and later became the seat of the Metropolitanate of Karlovci, making it the spiritual heart of Serbs living within the Habsburg Monarchy. Architecturally, the monastery combines medieval Serbian traditions with Baroque elements added during 18th-century renovations, most notably in its facade and bell tower. The main church is dedicated to the Annunciation of the Virgin and houses exquisite 16th-century frescoes and a grand iconostasis. Krušedol serves as a historical pantheon, holding the tombs of many prominent Serbian figures, including King Milan Obrenović and Duchess Ljubica Obrenović. Despite being set on fire by retreating Ottomans in 1716, the monastery was rebuilt and continues to be a symbol of national resilience.",
      es: "El monasterio de Krušedol se encuentra en las laderas de Fruška Gora, en Sirmia. Fue fundado entre 1509 y 1514 por la familia Branković. El monasterio es considerado un importante centro espiritual y lugar de descanso de destacadas personalidades serbias. El iconostasio barroco y los frescos se encuentran entre los tesoros artísticos más valiosos.",
      pt: "O mosteiro de Krušedol situa-se nas encostas da Fruška Gora, na Sírmia. Foi fundado entre 1509 e 1514 pela família Branković. O mosteiro é considerado um importante centro espiritual e local de repouso de personalidades sérvias proeminentes. O iconostásio barroco e os frescos estão entre os tesouros artísticos mais valiosos.",
      fr: "Le monastère de Krušedol est situé sur les pentes de la Fruška Gora en Syrmie. Il a été fondé entre 1509 et 1514 par la famille Branković. Le monastère est considéré comme un centre spirituel majeur et le lieu de sépulture d'éminentes personnalités serbes. L'iconostase baroque et les fresques comptent parmi les trésors artistiques les plus précieux.",
    },
    factsAdvanced: {
      de: ["Krušedol war im 18. Jahrhundert das wichtigste geistige Zentrum der Serben in Österreich.", "In der Klosterkirche ruhen zwei serbische Könige und zwei Patriarchen.", "Die Ikonostase der Kirche besteht aus 36 Ikonen, die im barocken Stil gemalt wurden.", "Die ursprünglichen Fresken aus dem Jahr 1545 wurden im 18. Jahrhundert teilweise übermalt.", "Das Kloster wurde 1716 nach der Schlacht von Peterwardein von den Türken niedergebrannt.", "Heute gehört Krušedol zum UNESCO-Vorschlagsliste als Teil der Fruška Gora Klöster."],
      hu: ["A kolostor templomában őrzik a Branković család tagjainak szent ereklyéit.", "Itt nyugszik I. Milán király, az újkori Szerb Királyság első uralkodója.", "A kolostor kertjében található az 1726-ban épült harangtorony, amely uralja a tájat.", "A 18. századi felújítás során a templom ablakait barokk stílusban megnagyobbították.", "Krušedol kincstára híres régi kéziratairól és liturgikus tárgyairól.", "A kolostor falai között tanult több híres szerb író és tudós a 18-19. században."],
      ro: ["Mănăstirea este locul unde sunt îngropați patriarhii Arsenie al III-lea și Arsenie al IV-lea.", "Iconostasul bisericii a fost realizat în 1745 și este una dintre cele mai frumoase din Voivodina.", "Frescele originale din secolul al XVI-lea au fost restaurate recent în nava bisericii.", "Angelina Branković, ctitora mănăstirii, a fost canonizată ca sfântă de Biserica Ortodoxă.", "Mănăstirea deține o bibliotecă rară cu manuscrise datând din secolul al XV-lea.", "Complexul este înconjurat de ziduri înalte care îi conferă aspectul unei fortărețe."],
      en: ["Krušedol is the burial place of King Milan Obrenović, the first king of modern Serbia.", "The monastery's iconostasis was painted in 1745 by Arsenije Teodorović.", "It was the administrative center of the Serbian Church in the Habsburg Empire for decades.", "The monastery was built using funds provided by the Wallachian Prince Neagoe Basarab.", "The relics of the holy Branković family were partially destroyed by the Ottomans in 1716.", "The church facade is decorated in a distinctive red and white pattern in the Baroque style."],
      es: ["Fundado por el metropolitano Maksim Branković y su madre Angelina", "Lugar de sepultura del rey Milan Obrenović y la duquesa Ljubica", "El monasterio fue incendiado por los otomanos en 1716", "La reconstrucción en estilo barroco se llevó a cabo en el siglo XVIII", "Alberga una valiosa colección de frescos del siglo XVI", "Uno de los 16 monasterios restantes en Fruška Gora"],
      pt: ["Fundado pelo metropolita Maksim Branković e pela sua mãe Angelina", "Local de sepultura do rei Milan Obrenović e da duquesa Ljubica", "O mosteiro foi incendiado pelos otomanos em 1716", "A reconstrução em estilo barroco ocorreu no século XVIII", "Abriga uma coleção valiosa de frescos do século XVI", "Um dos 16 mosteiros restantes na Fruška Gora"],
      fr: ["Fondé par le métropolite Maksim Branković et sa mère Angelina", "Lieu de sépulture du roi Milan Obrenović et de la duchesse Ljubica", "Le monastère a été incendié par les Ottomans en 1716", "La reconstruction en style baroque a eu lieu au XVIIIe siècle", "Il abrite une précieuse collection de fresques du XVIe siècle", "L'un des 16 monastères subsistant sur la Fruška Gora"],
    },
  },
  // RS-014 Macvanski
  {
    id: "RS-014-sabac", "sights": {
      "de": [
            {
                  "name": "Шабачка тврђава",
                  "text": "Eine mittelalterliche Festung am Ufer der Save in Šabac.",
                  "category": "historical",
                  "coords": [
                        19.703543,
                        44.764263
                  ]
            },
            {
                  "name": "Шабачко позориште",
                  "text": "Das Theater von Šabac, untergebracht in einem markanten historischen Gebäude.",
                  "category": "cultural",
                  "coords": [
                        19.69578,
                        44.755506
                  ]
            },
            {
                  "name": "Плажа „Стари град”",
                  "text": "Ein beliebter Stadtstrand an der Save in Šabac.",
                  "category": "recreational",
                  "coords": [
                        19.70535,
                        44.762954
                  ]
            },
            {
                  "name": "Народни музеј Шабац",
                  "text": "Ein Museum zur Geschichte und Kultur der Region Šabac.",
                  "category": "museum",
                  "coords": [
                        19.692682,
                        44.755307
                  ]
            },
            {
                  "name": "Зграда Окружног начелства",
                  "text": "Das repräsentative Verwaltungsgebäude der Stadt Šabac.",
                  "category": "landmark",
                  "coords": [
                        19.693669,
                        44.757346
                  ]
            },
            {
                  "name": "Католичка црква Света Ана",
                  "text": "Eine katholische Kirche in Šabac mit markanter Architektur.",
                  "category": "religious",
                  "coords": [
                        19.699901,
                        44.759074
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Шабачка тврђава",
                  "text": "Középkori erődítmény a Száva folyó partján Šabac városában.",
                  "category": "historical",
                  "coords": [
                        19.703543,
                        44.764263
                  ]
            },
            {
                  "name": "Шабачко позориште",
                  "text": "Šabac színháza, amely egy jellegzetes történelmi épületben működik.",
                  "category": "cultural",
                  "coords": [
                        19.69578,
                        44.755506
                  ]
            },
            {
                  "name": "Плажа „Стари град”",
                  "text": "Népszerű városi strand a Száva folyó partján Šabacban.",
                  "category": "recreational",
                  "coords": [
                        19.70535,
                        44.762954
                  ]
            },
            {
                  "name": "Народни музеј Шабац",
                  "text": "Šabac régiójának történelmét és kultúráját bemutató múzeum.",
                  "category": "museum",
                  "coords": [
                        19.692682,
                        44.755307
                  ]
            },
            {
                  "name": "Зграда Окружног начелства",
                  "text": "Šabac városának reprezentatív közigazgatási épülete.",
                  "category": "landmark",
                  "coords": [
                        19.693669,
                        44.757346
                  ]
            },
            {
                  "name": "Католичка црква Света Ана",
                  "text": "Jellegzetes építészetű katolikus templom Šabacban.",
                  "category": "religious",
                  "coords": [
                        19.699901,
                        44.759074
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Шабачка тврђава",
                  "text": "O cetate medievală situată pe malul râului Sava în Šabac.",
                  "category": "historical",
                  "coords": [
                        19.703543,
                        44.764263
                  ]
            },
            {
                  "name": "Шабачко позориште",
                  "text": "Teatrul din Šabac, găzduit într-o clădire istorică distinctivă.",
                  "category": "cultural",
                  "coords": [
                        19.69578,
                        44.755506
                  ]
            },
            {
                  "name": "Плажа „Стари град”",
                  "text": "O plajă urbană populară pe malul râului Sava în Šabac.",
                  "category": "recreational",
                  "coords": [
                        19.70535,
                        44.762954
                  ]
            },
            {
                  "name": "Народни музеј Шабац",
                  "text": "Un muzeu dedicat istoriei și culturii regiunii Šabac.",
                  "category": "museum",
                  "coords": [
                        19.692682,
                        44.755307
                  ]
            },
            {
                  "name": "Зграда Окружног начелства",
                  "text": "Clădirea administrativă reprezentativă a orașului Šabac.",
                  "category": "landmark",
                  "coords": [
                        19.693669,
                        44.757346
                  ]
            },
            {
                  "name": "Католичка црква Света Ана",
                  "text": "O biserică catolică din Šabac cu o arhitectură distinctivă.",
                  "category": "religious",
                  "coords": [
                        19.699901,
                        44.759074
                  ]
            }
      ],
      "en": [
            {
                  "name": "Šabac Fortress",
                  "text": "A medieval fortress situated on the banks of the Sava river in Šabac.",
                  "category": "historical",
                  "coords": [
                        19.703543,
                        44.764263
                  ]
            },
            {
                  "name": "Šabac Theatre",
                  "text": "The theatre of Šabac, housed in a prominent historic building.",
                  "category": "cultural",
                  "coords": [
                        19.69578,
                        44.755506
                  ]
            },
            {
                  "name": "Beach \"Stari grad\"",
                  "text": "A popular city beach on the banks of the Sava river in Šabac.",
                  "category": "recreational",
                  "coords": [
                        19.70535,
                        44.762954
                  ]
            },
            {
                  "name": "National Museum in Šabac",
                  "text": "A museum dedicated to the history and culture of the Šabac region.",
                  "category": "museum",
                  "coords": [
                        19.692682,
                        44.755307
                  ]
            },
            {
                  "name": "City Hall",
                  "text": "The representative administrative building of the city of Šabac.",
                  "category": "landmark",
                  "coords": [
                        19.693669,
                        44.757346
                  ]
            },
            {
                  "name": "St. Anne Catholic Church",
                  "text": "A Catholic church in Šabac with distinctive architecture.",
                  "category": "religious",
                  "coords": [
                        19.699901,
                        44.759074
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-014",
    coords: [19.6900, 44.7500],
    name: { de: "Šabac", hu: "Szabács", ro: "Šabac", en: "Šabac" },
    description: {
      de: "Eine Stadt an der Save, bekannt für ihre Marktkultur, Geschichte und das Šabac-Festival.",
      hu: "Város a Száva partján, amely vásári kultúrájáról, történelméről és a Szabácsi fesztiválról ismert.",
      ro: "Un oraș pe râul Sava, cunoscut pentru cultura piețelor sale, istorie și festivalul Šabac.",
      en: "A city on the Sava river, known for its market culture, history, and the Šabac festival.",
      es: "Una ciudad a orillas del Sava, conocida por su cultura de mercado, su historia y el Festival de Šabac.",
      pt: "Uma cidade no rio Sava, conhecida pela sua cultura de mercado, história e o Festival de Šabac.",
      fr: "Une ville sur la Save, connue pour sa culture de marché, son histoire et le festival de Šabac.",
    },
    facts: {
      de: ["Festung Šabac", "Handelszentrum", "An der Save"],
      hu: ["Szabácsi vár", "Kereskedelmi központ", "A Száva partján"],
      ro: ["Cetatea Šabac", "Centru comercial", "Pe râul Sava"],
      en: ["Šabac Fortress", "Trade center", "On the Sava river"],
      es: ["Fortaleza de Šabac", "Centro comercial", "A orillas del Sava"],
      pt: ["Fortaleza de Šabac", "Centro comercial", "No rio Sava"],
      fr: ["Forteresse de Šabac", "Centre commercial", "Sur la Save"],
    },
    descriptionAdvanced: {
      de: "Šabac ist eine historisch bedeutende Stadt im Westen Serbiens, gelegen am rechten Ufer der Save in der Region Mačva. Die Stadt entwickelte sich um eine Festung herum, die 1471 vom ungarischen König Matthias Corvinus erbaut wurde, um die Grenzen gegen das Osmanische Reich zu sichern. Aufgrund seiner strategischen Lage war Šabac oft Schauplatz heftiger Kämpfe, besonders während der serbischen Aufstände im 19. Jahrhundert. Im frühen 19. Jahrhundert galt die Stadt unter der Leitung von Jevrem Obrenović als 'Erstes Haus Serbiens', da hier viele Neuerungen wie das erste Klavier, das erste verglaste Fenster und die erste moderne Apotheke des Landes eingeführt wurden. Wegen dieses kulturellen Aufschwungs erhielt Šabac den Beinamen 'Klein-Paris'. Heute ist die Stadt ein wichtiges Wirtschaftszentrum mit einer starken chemischen Industrie und einem bedeutenden Binnenhafen. Geografisch liegt Šabac in einer weiten Ebene, die durch fruchtbares Ackerland geprägt ist, und dient als wichtiger Verkehrsknotenpunkt zwischen Belgrad, Bosnien und Kroatien. Die Stadt ist zudem bekannt für ihre lebhafte Marktplatzkultur und das jährlich stattfindende Šabac-Volksfest.",
      hu: "Šabac (Szabács) Nyugat-Szerbia egyik legjelentősebb városa, a Mačva körzet központja, amely a Száva-folyó jobb partján fekszik. A város fejlődése a 15. században kezdődött, amikor Hunyadi Mátyás magyar király 1471-ben várat építtetett itt az oszmán terjeszkedés megállítására. Stratégiai fekvése miatt a város sokszor cserélt gazdát a magyarok, az osztrákok és a törökök között. A 19. század elején, Jevrem Obrenović irányítása alatt Šabac Szerbia legmodernebb városává vált; itt volt az első zongora, az első üvegezett ablak és az első gyógyszertár az országban, amiért a várost 'Kis Párizsnak' is nevezték. A modern Šabac ma fontos ipari központ, ahol a vegyipar és a fémfeldolgozás dominál, valamint jelentős folyami kikötővel rendelkezik. A város kulturális élete pezsgő, legismertebb eseménye a szeptemberi 'Šabac vásár', amely a Balkán egyik legnagyobb népünnepélye. Gazdasági vonzerejét növeli a Belgrád és a boszniai határ közötti központi elhelyezkedése.",
      ro: "Šabac este un oraș de o importanță istorică deosebită din vestul Serbiei, situat pe malul drept al râului Sava, în regiunea Mačva. Nucleul orașului s-a dezvoltat în jurul fortăreței construite în anul 1471 de regele Ungariei, Matei Corvin, cu scopul de a bloca avansul otoman. Datorită poziției sale strategice la granița imperiilor, Šabac a fost martorul a numeroase bătălii, fiind eliberat definitiv de sârbi în secolul al XIX-lea. Sub guvernarea lui Jevrem Obrenović, orașul a cunoscut o perioadă de modernizare accelerată, fiind supranumit 'Micul Paris' datorită introducerii primelor elemente de civilizație europeană în Serbia, precum pianul sau farmacia modernă. În prezent, Šabac este un centru economic major, cu o industrie chimică puternică și un port fluvial activ pe râul Sava. Orașul este renumit pentru viața sa culturală vibrantă și pentru târgul anual de la Šabac, unul dintre cele mai mari evenimente populare din regiune. Din punct de vedere geografic, localitatea se află într-o câmpie fertilă, fiind un nod rutier crucial între Belgrad și Bosnia și Herțegovina.",
      en: "Šabac is a historically significant city in western Serbia, located on the right bank of the Sava River in the Mačva District. The city's development began with a fortress built in 1471 by the Hungarian King Matthias Corvinus to counter the Ottoman expansion. Due to its strategic riverfront position, Šabac was a frequent battlefield between the Ottoman, Austrian, and Hungarian empires. During the early 19th century, under the leadership of Jevrem Obrenović, it became a pioneer of modernization in Serbia, earning the nickname 'Little Paris' for introducing the country's first piano, glass windows, and modern pharmacy. Today, Šabac is a vital industrial hub with a strong chemical industry and an important river port. Geographically, the city sits in a fertile plain, serving as a key transportation link between Belgrade and the borders of Bosnia and Herzegovina and Croatia. The town is also famous for its vibrant bohemian history, traditional music, and the massive annual Šabac Fair, which attracts visitors from all over the Balkans.",
      es: "Šabac se encuentra en el oeste de Serbia, en la margen derecha del río Sava. La ciudad es famosa por su fortaleza histórica, construida en 1471 por los otomanos. En el siglo XIX, Šabac era considerada culturalmente avanzada y recibió el apodo de Pequeño París. Hoy es un centro importante para la industria química y el comercio.",
      pt: "Šabac situa-se no oeste da Sérvia, na margem direita do rio Sava. A cidade é conhecida pela sua fortaleza histórica, construída em 1471 pelos otomanos. No século XIX, Šabac era considerada culturalmente progressista e recebeu o apelido de Pequena Paris. Hoje, é um importante centro da indústria química e do comércio.",
      fr: "Šabac est située à l'ouest de la Serbie, sur la rive droite de la Save. La ville est connue pour sa forteresse historique, construite en 1471 par les Ottomans. Au XIXe siècle, Šabac était considérée comme culturellement avancée et reçut le surnom de Petit Paris. Aujourd'hui, elle est un centre important pour l'industrie chimique et le commerce.",
    },
    factsAdvanced: {
      de: ["Die Festung von Šabac wurde 1471 ursprünglich unter dem Namen Zaslon gegründet.", "Die Schlacht von Mišar im Jahr 1806 fand in unmittelbarer Nähe der Stadt statt.", "Šabac war die erste Stadt in Serbien, die im Jahr 1831 ein Krankenhaus erhielt.", "Im Ersten Weltkrieg wurde Šabac wegen der schweren Zerstörungen als 'serbisches Verdun' bezeichnet.", "Die Stadt hat etwa 54.000 Einwohner (Stand 2011).", "Das Volksfest von Šabac findet seit 1839 jedes Jahr im September statt."],
      hu: ["A szabácsi várat Hunyadi Mátyás csapatai 1476-ban foglalták el a töröktől.", "Jevrem Obrenović idején, 1826-ban itt nyílt meg az első szerb felsőbb leányiskola.", "A város gúnyneve, a 'Kis Párizs', a 19. századi élénk kávéházi életre is utalt.", "Az első világháború alatt Šabac lakosságának száma a felére csökkent a harcok miatt.", "A Száva-folyó feletti híd köti össze a várost a Vajdaság tartománnyal.", "A városháza épülete a 19. század végén épült neoreneszánsz stílusban."],
      ro: ["Cetatea din Šabac a fost un model de fortificație bastionară în secolul al XV-lea.", "Prima pianină din Serbia a fost adusă la Šabac în anul 1829 pentru fiica lui Jevrem Obrenović.", "În 1914, orașul a fost prima localitate sârbă atacată de forțele austro-ungare.", "Šabac deține trei decorații de război pentru curajul locuitorilor săi în conflictele mondiale.", "Industria chimică 'Zorka', fondată în 1938, a fost mult timp motorul economic al orașului.", "Târgul de la Šabac este menționat în numeroase cântece populare sârbești vechi."],
      en: ["The fortress of Šabac was captured by the Serbian army for the first time in 1804.", "It was the first city in Serbia to have a modern post office and a library (1837).", "The Battle of Mišar nearby was a decisive victory for the Serbian insurgents against the Ottomans.", "The city was awarded the Legion of Honor by France in 1920 for its bravery in WWI.", "Šabac is located 88 kilometers west of the capital city, Belgrade.", "The local museum is housed in the building of the former Semi-Gymnasium, built in 1857."],
      es: ["La fortaleza de Šabac fue fundada en 1471 por Isa-Beg Isaković.", "Conocida por el Šabački vaśar, una gran feria tradicional.", "El primer piano de Serbia fue traído a Šabac en 1829.", "Centro administrativo del distrito de Mačva en el oeste de Serbia.", "Sufrió graves destrucciones durante la batalla de Cer en 1914.", "La zona peatonal muestra arquitectura de finales del siglo XIX."],
      pt: ["A fortaleza de Šabac foi fundada em 1471 por Isa-Beg Isaković.", "Conhecida pelo Šabački vaśar, uma grande feira tradicional.", "O primeiro piano da Sérvia foi levado para Šabac em 1829.", "Centro administrativo do distrito de Mačva, no oeste da Sérvia.", "Sofreu graves destruições durante a Batalha de Cer em 1914.", "A zona pedonal exibe arquitetura do final do século XIX."],
      fr: ["La forteresse de Šabac fut fondée en 1471 par Isa-Beg Isaković.", "Connue pour le Šabački vaśar, une grande foire traditionnelle.", "Le premier piano de Serbie fut apporté à Šabac en 1829.", "Centre administratif du district de Mačva à l'ouest de la Serbie.", "A subi de graves destructions lors de la bataille du mont Cer en 1914.", "La zone piétonne présente une architecture de la fin du XIXe siècle."],
    },
    image: "/poi-images/RS-014-sabac.webp",
  },
  {
    id: "RS-014-tronosa",
    type: "historical",
    parent: "RS-014",
    coords: [19.2800, 44.4600],
    name: { de: "Kloster Tronoša", hu: "Tronoša kolostor", ro: "Mănăstirea Tronoša", en: "Tronoša Monastery" },
    description: {
      de: "Ein historisches Kloster in der Nähe von Loznica, eng verbunden mit der Erhaltung der serbischen Literatur.",
      hu: "Történelmi kolostor Loznica közelében, szorosan kötődik a szerb irodalom megőrzéséhez.",
      ro: "O mănăstire istorică lângă Loznica, strâns legată de conservarea literaturii sârbe.",
      en: "A historical monastery near Loznica, closely linked to the preservation of Serbian literature.",
      es: "Un monasterio histórico cerca de Loznica, estrechamente vinculado a la preservación de la literatura serbia.",
      pt: "Um mosteiro histórico perto de Loznica, estreitamente ligado à preservação da literatura sérvia.",
      fr: "Un monastère historique près de Loznica, étroitement lié à la préservation de la littérature serbe.",
    },
    facts: {
      de: ["Zentrum der Alphabetisierung", "Vuk Karadžić Schule", "Orthodoxe Tradition"],
      hu: ["Az írástudás központja", "Vuk Karadžić iskolája", "Ortodox hagyomány"],
      ro: ["Centru de alfabetizare", "Școala lui Vuk Karadžić", "Tradiție ortodoxă"],
      en: ["Center of literacy", "Vuk Karadžić's school", "Orthodox tradition"],
      es: ["Centro de alfabetización", "Escuela de Vuk Karadžić", "Tradición ortodoxa"],
      pt: ["Centro de alfabetização", "Escola de Vuk Karadžić", "Tradição ortodoxa"],
      fr: ["Centre d'alphabétisation", "École de Vuk Karadžić", "Tradition orthodoxe"],
    },
    descriptionAdvanced: {
      de: "Das Kloster Tronoša ist ein bedeutendes orthodoxes Heiligtum im Westen Serbiens, nahe der Stadt Loznica im Jadar-Tal. Die Überlieferung besagt, dass das Kloster ursprünglich um 1317 von König Stefan Dragutin und seiner Gemahlin Katharina von Ungarn gegründet wurde. Nach der Zerstörung durch die Osmanen im späten 15. Jahrhundert wurde die heutige Kirche im Jahr 1559 wiederaufgebaut. Tronoša ist historisch eng mit Vuk Stefanović Karadžić verbunden, dem Reformator der serbischen Sprache, der hier im frühen 19. Jahrhundert seine erste Ausbildung erhielt. Das Kloster war über Jahrhunderte ein wichtiges Zentrum der klösterlichen Schreibkunst, in dem wertvolle religiöse Texte kopiert und bewahrt wurden. Die Architektur der Kirche folgt der Raška-Schule und ist der Darstellung der Jungfrau Maria geweiht. Ein einzigartiger Brauch ist die Herstellung der 'Bauernkerzen' (Ratarske sveće), riesige Wachskerzen, die jedes Jahr zu Ostern von den umliegenden Dörfern gespendet werden. Das Kloster ist von dichten Wäldern umgeben und beherbergt eine Kapelle mit einer Heilquelle, die der Legende nach von den Jugović-Brüdern vor der Schlacht auf dem Amselfeld errichtet wurde.",
      hu: "A Tronoša-kolostor Nyugat-Szerbia egyik legfontosabb ortodox hitéleti központja, Loznica közelében, a Jadar-völgyben. A hagyomány szerint a kolostort 1317 körül alapította Dragutin István szerb király és felesége, a magyar származású Katalin. Az eredeti épületet az oszmánok a 15. század végén lerombolták, a mai templom 1559-ben épült újjá. A kolostor történelmi jelentőségét növeli, hogy itt kezdte tanulmányait Vuk Stefanović Karadžić, a modern szerb nyelvújítás atyja a 19. század elején. Tronoša évszázadokon át a kolostori írásbeliség és kódexmásolás egyik legfontosabb bázisa volt a Balkánon. Építészeti stílusa a Raška-iskolát követi, középponti kupolával és letisztult formákkal. Egyedülálló népi hagyománya a 'szántóvetők gyertyáinak' (Ratarske sveće) felajánlása: húsvétkor a környékbeli falvak két hatalmas, több tíz kilós viaszgyertyát adományoznak a kolostornak. A festői környezetben fekvő épületegyüttes részét képezi a kilenc Jugović-fivér tiszteletére emelt kút és kápolna is, amelynek vize a néphit szerint gyógyító erejű.",
      ro: "Mănăstirea Tronoša este un important lăcaș de cult ortodox situat în vestul Serbiei, lângă Loznica, în pitoreasca vale Jadar. Tradiția îi atribuie ctitoria regelui Ștefan Dragutin și soției sale, Ecaterina a Ungariei, în jurul anului 1317. După ce a fost dărâmată de otomani la sfârșitul secolului al XV-lea, biserica actuală a fost reconstruită în 1559, păstrând elemente ale școlii arhitecturale de la Raška. Mănăstirea ocupă un loc special în istoria culturii sârbe, fiind locul unde Vuk Stefanović Karadžić, reformatorul limbii sârbe, a primit primele sale învățături. Timp de secole, Tronoša a funcționat ca un centru vital pentru caligrafie și transcrierea manuscriselor religioase, contribuind la păstrarea literaturii creștine sub ocupația străină. Un obicei pascal unic, păstrat până astăzi, este cel al 'lumânărilor plugarilor' (Ratarske sveće), două lumânări uriașe din ceară curată oferite anual de satele vecine. Complexul monahal include și fântâna celor nouă frați Jugović, despre care legenda spune că au băut apă aici înainte de a pleca spre Bătălia de la Kosovo din 1389.",
      en: "Tronoša Monastery is a prominent Orthodox sanctuary located in western Serbia, near the town of Loznica in the Jadar Valley. Tradition holds that the monastery was founded around 1317 by King Stefan Dragutin and his wife Catherine of Hungary. After being destroyed by the Ottomans in the late 15th century, the current church was rebuilt in 1559 in the Raška architectural style. The monastery holds a unique place in Serbian cultural history as the site where Vuk Stefanović Karadžić, the great reformer of the Serbian language, received his early education in the 19th century. For centuries, Tronoša was a vital center for manuscript copying and transcription, helping preserve Christian literature during the Ottoman period. A notable local tradition involves the 'ploughmen's candles' (Ratarske sveće), massive beeswax candles donated annually on Maundy Thursday by local villagers. Surrounded by dense forests, the monastery complex also features a chapel and a fountain dedicated to the nine Jugović brothers, iconic heroes from Serbian epic poetry.",
      es: "El monasterio de Tronoša se encuentra cerca de Loznica, en el oeste de Serbia. Fue fundado originalmente a finales del siglo XIII por el rey Stefan Dragutin. El monasterio está íntimamente ligado a la historia de Vuk Karadžić, quien comenzó su educación aquí. La iglesia está dedicada a la Presentación de la Virgen María.",
      pt: "O mosteiro de Tronoša está localizado perto de Loznica, no oeste da Sérvia. Foi originalmente fundado no final do século XIII pelo rei Stefan Dragutin. O mosteiro está intimamente ligado à história de Vuk Karadžić, que iniciou aqui a sua educação. A igreja é dedicada à Apresentação da Virgem Maria.",
      fr: "Le monastère de Tronoša est situé près de Loznica, dans l'ouest de la Serbie. Il fut fondé à l'origine à la fin du XIIIe siècle par le roi Stefan Dragutin. Le monastère est étroitement lié à l'histoire de Vuk Karadžić, qui y commença son éducation. L'église est dédiée à la Présentation de la Vierge Marie.",
    },
    factsAdvanced: {
      de: ["Die heutige Klosterkirche wurde im Jahr 1559 nach dem Vorbild der Raška-Schule erbaut.", "Das Kloster beherbergt das Museum der frühen Ausbildung von Vuk Karadžić.", "Die 'Bauernkerzen' sind über 2 Meter hoch und wiegen jeweils etwa 50 Kilogramm.", "Während des Ersten Serbischen Aufstands diente das Kloster als Lazarett.", "Die Ikonostase der Kirche wurde im Jahr 1834 von Nikola Janković angefertigt.", "Das Kloster liegt am Fuße des Berges Cer, einem geschichtsträchtigen Ort Serbiens."],
      hu: ["A kolostor temploma a Szűzanya bemutatása (Vavedenje) ünnepének van szentelve.", "A 18. században az osztrák-török háborúk idején a kolostor súlyos károkat szenvedett.", "A 'szántóvetők gyertyáit' kizárólag természetes méhviaszból készítik a helyi falvakban.", "Vuk Karadžić 1797-ben érkezett a kolostorba, hogy írni és olvasni tanuljon a szerzetesektől.", "A kolostor melletti forrást a 14. századi Jugović-család legendás alakjaihoz kötik.", "Az épületegyüttes falait 1987-ben, a kolostor 670. évfordulóján teljesen felújították."],
      ro: ["Mănăstirea a fost un centru important pentru mișcarea de eliberare națională în secolul XIX.", "Biserica are un plan triconc, specific tradiției bizantine sârbești medievale.", "Tradiția lumânărilor uriașe datează din timpul ocupației otomane, ca simbol al credinței.", "În incinta mănăstirii se află un memorial dedicat eroilor din Bătălia de pe Muntele Cer.", "Tronoša este menționată în documentele rusești din secolul XVII ca loc de pelerinaj.", "Fântâna fraților Jugović a fost reconstruită în stil neobizantin în anul 1968."],
      en: ["The current church building dates back to 1559, following the Ottoman destruction.", "Vuk Karadžić, the linguist who created the modern Serbian alphabet, studied here in 1797.", "The ploughmen's candles are replaced every year and burn in front of the icons of Christ and Mary.", "The monastery was a significant military hospital during the 1804 Serbian Uprising.", "The frescoes inside the church depict scenes from the Old and New Testaments.", "Tronoša is located just 17 kilometers from Loznica, in the heart of the Jadar region."],
      es: ["La forma actual de la iglesia se completó hacia 1317.", "Famoso por la tradición de las Ratarske sveće (velas de los agricultores).", "Vuk Karadžić, reformador de la lengua serbia, asistió a la escuela aquí.", "El monasterio fue destruido por los otomanos y reconstruido en 1559.", "Situado en un pintoresco bosque cerca del pueblo de Korenita.", "Alberga una fuente dedicada a los legendarios hermanos Jugović."],
      pt: ["A forma atual da igreja foi concluída por volta de 1317.", "Famoso pela tradição das Ratarske sveće (velas dos agricultores).", "Vuk Karadžić, o reformador da língua sérvia, frequentou a escola aqui.", "O mosteiro foi destruído pelos otomanos e reconstruído em 1559.", "Situado numa floresta pitoresca perto da aldeia de Korenita.", "Abriga uma fonte dedicada aos lendários irmãos Jugović."],
      fr: ["La forme actuelle de l'église a été achevée vers 1317.", "Célèbre pour la tradition des Ratarske sveće (bougies des laboureurs).", "Vuk Karadžić, réformateur de la langue serbe, est allé à l'école ici.", "Le monastère fut détruit par les Ottomans et reconstruit en 1559.", "Situé dans une forêt pittoresque près du village de Korenita.", "Abrite une fontaine dédiée aux légendaires frères Jugović."],
    },
    image: "/poi-images/RS-014-tronosa.webp",
  },
  // RS-015 Južno-Backi
  // RS-016 Srednje-Banatski
  {
    id: "RS-016-carska-bara",
    type: "landmark",
    parent: "RS-016",
    coords: [20.3800, 45.2500],
    name: { de: "Carska Bara", hu: "Császár-tó", ro: "Carska Bara", en: "Carska Bara" },
    description: {
      de: "Ein bedeutendes Vogelschutzgebiet und Naturschutzgebiet im Banat.",
      hu: "Jelentős madárrezervátum és természetvédelmi terület a Bánátban.",
      ro: "O importantă rezervație de păsări și arie naturală protejată din Banat.",
      en: "A significant bird sanctuary and nature reserve in the Banat region.",
      es: "Una importante reserva de aves y área de conservación natural en el Banato.",
      pt: "Uma importante reserva de aves e área de conservação natural no Banato.",
      fr: "Une importante réserve ornithologique et zone de protection de la nature dans le Banat.",
    },
    facts: {
      de: ["Sumpflandschaft", "Seltene Vögel", "Naturschutzgebiet"],
      hu: ["Mocsaras vidék", "Ritka madarak", "Természetvédelmi terület"],
      ro: ["Peisaj mlăștinos", "Păsări rare", "Rezervație naturală"],
      en: ["Marshland", "Rare birds", "Nature reserve"],
      es: ["Paisaje pantanoso", "Aves raras", "Reserva natural"],
      pt: ["Paisagem pantanosa", "Aves raras", "Reserva natural"],
      fr: ["Paysage de marais", "Oiseaux rares", "Réserve naturelle"],
    }, image: "/poi-images/RS-016-carska-bara.webp",
    descriptionAdvanced: {
      de: "Carska Bara ist ein besonderes Naturreservat in der Region Banat in der Vojvodina, nahe der Mündung des Flusses Begej in die Theiß. Das Reservat umfasst eine Fläche von etwa 4.700 Hektar und besteht aus einem komplexen Mosaik aus Sümpfen, Seen, Schilfflächen und Weidenwäldern. Der Name 'Carska Bara' (Kaiserlicher Sumpf) erinnert an die Zeit der österreichisch-ungarischen Monarchie, als dieses Gebiet ein beliebtes Jagdrevier des kaiserlichen Hofes war. Heute ist das Gebiet als international bedeutendes Feuchtgebiet unter der Ramsar-Konvention geschützt. Es ist einer der wichtigsten ornithologischen Standorte in Europa, in dem über 240 Vogelherten registriert wurden, darunter seltene Arten wie der Reiher, der Kormoran und der Seeadler. Die Flora des Reservats ist ebenso vielfältig, mit ausgedehnten Teppichen aus weißen und gelben Seerosen. Besucher können das Reservat auf markierten Wegen oder im Rahmen von Bootstouren erkunden, die Einblicke in das ungestörte Ökosystem der pannonischen Tiefebene bieten. Carska Bara spielt eine entscheidende Rolle für den Naturschutz und die Erhaltung der Artenvielfalt in der gesamten Donauregion.",
      hu: "A Carska Bara (Császár-tó) egy különleges természetvédelmi terület a vajdasági Bánátban, a Béga és a Tisza folyók összefolyásának közelében. A mintegy 4700 hektáros rezervátum mocsarak, tavak, nádasok és ártéri erdők szövevényes hálózatából áll. Neve az osztrák-magyar monarchia idejéből ered, amikor a terület a császári udvar kedvelt vadászterülete volt. Ma a nemzetközi jelentőségű vizes élőhelyek védelméről szóló Ramsari Egyezmény oltalma alatt áll. Európa egyik legfontosabb madárrezervátuma, ahol több mint 240 madárfajt figyeltek meg, köztük olyan ritkaságokat, mint a különböző gémfélék, a kárókatona és a rétisas. A terület növényvilága is rendkívül gazdag, a vízfelszínt nyaranta fehér tündérrózsák és sárga vízitökök borítják. A látogatók gyalogos ösvényeken vagy sétahajókkal fedezhetik fel az érintetlen pannon ökoszisztémát. A rezervátum kulcsszerepet játszik a Duna-medence biológiai sokféleségének megőrzésében és a környezeti nevelésben.",
      ro: "Carska Bara, cunoscută și sub numele de 'Mlaștina Imperială', este o rezervație naturală specială situată în regiunea Banat din Voivodina, în apropiere de confluența râului Bega cu Tisa. Rezervația se întinde pe o suprafață de aproximativ 4.700 de hectare și reprezintă un mozaic complex de mlaștini, lacuri, stufărișuri și păduri de luncă. Denumirea sa provine din perioada Austro-Ungariei, când zona era domeniul preferat de vânătoare al curții imperiale de la Viena. În prezent, Carska Bara este protejată prin Convenția Ramsar ca zonă umedă de importanță internațională. Este unul dintre cele mai importante situri ornitologice din Europa, găzduind peste 240 de specii de păsări, inclusiv colonii rare de stârci, cormorani și vulturi codalb. Flora rezervației este la fel de spectaculoasă, cu suprafețe vaste acoperite de nuferi albi și galbeni. Turiștii pot explora rezervația prin intermediul tururilor cu barca pe canalele Begăi Vechi sau pe traseele de observare a păsărilor, oferind o incursiune unică în biodiversitatea originală a Câmpiei Panonice.",
      en: "Carska Bara, also known as the Imperial Wetland, is a special nature reserve located in the Banat region of Vojvodina, near the confluence of the Begej and Tisza rivers. Spanning approximately 4,700 hectares, the reserve is a complex mosaic of marshes, lakes, reed beds, and willow forests. Its name dates back to the Austro-Hungarian era when the area served as a favored hunting ground for the imperial court. Today, it is recognized as a wetland of international importance under the Ramsar Convention. It is one of Europe's premier bird-watching locations, with over 240 bird species recorded, including rare herons, cormorants, and the white-tailed eagle. The flora is equally diverse, featuring vast expanses of white and yellow water lilies on the water's surface. Visitors can explore the reserve via designated hiking trails or boat tours along the Old Begej channels, providing an intimate look at the undisturbed Pannonian ecosystem. Carska Bara is a cornerstone for regional conservation efforts and biodiversity preservation in the Danube basin.",
      es: "Carska Bara es una reserva natural destacada en la provincia de Voivodina. Comprende un mosaico de pantanos, lagos y carrizales cerca de la desembocadura del Begej en el Tisza. La reserva es un paraíso de aves reconocido internacionalmente con más de 240 especies registradas y sirve como refugio crucial para plantas raras.",
      pt: "Carska Bara é uma reserva natural proeminente na província da Voivodina. Compreende um mosaico de pântanos, lagos e caniçais perto da foz do rio Begej no rio Tisza. A reserva é um paraíso de aves reconhecido internacionalmente, com mais de 240 espécies registadas, e serve como um refúgio importante para plantas raras.",
      fr: "Carska Bara est une réserve naturelle importante dans la province de Voïvodine. Elle comprend une mosaïque de marais, de lacs et de roselières près de l'embouchure du Begej dans la Tisza. La réserve est un paradis ornithologique internationalement reconnu avec plus de 240 espèces recensées et sert de refuge crucial pour des plantes rares.",
    },
    factsAdvanced: {
      de: ["Das Reservat beherbergt alle acht in Europa vorkommenden Reiherarten.", "Carska Bara wurde im Jahr 1996 in die Liste der Ramsar-Feuchtgebiete aufgenommen.", "Einige Weidenbäume im Reservat sind schätzungsweise über 100 Jahre alt.", "Das Gebiet ist auch ein wichtiger Laichplatz für zahlreiche Fischarten aus der Theiß.", "Die durchschnittliche Wassertiefe in den Sümpfen beträgt etwa 1 bis 2 Meter.", "Das Reservat liegt nur etwa 15 Kilometer südlich der Stadt Zrenjanin."],
      hu: ["A rezervátum területén található Európa egyik legnagyobb szürke gém állománya.", "A terület 1996 óta élvez nemzetközi védelmet a Ramsari Egyezmény keretében.", "A Császár-tó környékén több mint 500 különböző növényfajt azonosítottak a kutatók.", "A rezervátum része az Ó-Béga folyómeder is, amely ma már nem hajózható.", "A madármegfigyelő tornyokból akár a ritka fekete gólya is látható a vonulási időszakban.", "A terület legrégebbi természetvédelmi része már 1955 óta védett."],
      ro: ["Rezervația Carska Bara găzduiește toate cele opt specii de stârci din Europa.", "Zona a fost declarată sit Ramsar de importanță internațională în martie 1996.", "Canalul Bega Veche traversează rezervația pe o lungime de aproximativ 10 kilometri.", "Sunt înregistrate peste 500 de specii de plante în diversele ecosisteme ale zonei.", "Vulturul codalb, cea mai mare pasăre de pradă din regiune, cuibărește aici în mod regulat.", "Rezervația este un punct important de oprire pentru păsările migratoare pe ruta nord-sud."],
      en: ["Carska Bara is home to all eight species of herons that live in Europe.", "The area was designated as a Ramsar site of international importance in 1996.", "There are over 240 recorded bird species, making up 75% of Serbia's total bird diversity.", "The reserve includes the Old Begej riverbed, which is a prime habitat for amphibians.", "White and yellow water lilies cover large portions of the water surface during summer.", "The reserve is located approximately 60 kilometers north of the capital city, Belgrade."],
      es: ["El área protegida abarca una superficie de unas 1.600 hectáreas.", "Fue designada sitio Ramsar para la protección de humedales en 1996.", "Alberga especies de aves raras como la garza imperial y la espátula.", "El río Begej fluye a través del corazón de la reserva.", "Se encuentra a unos 15 kilómetros al sur de la ciudad de Zrenjanin.", "Contiene diversos ecosistemas como bosques, prados y estepas."],
      pt: ["A área protegida abrange uma superfície de cerca de 1.600 hectares.", "Foi designada como sítio Ramsar para a proteção de zonas húmidas em 1996.", "Abriga espécies de aves raras, como a garça-imperial e o colhereiro.", "O rio Begej flui pelo coração da reserva.", "Localiza-se a cerca de 15 quilómetros ao sul da cidade de Zrenjanin.", "Contém diversos ecossistemas como florestas, prados e estepes."],
      fr: ["La zone protégée couvre une superficie d'environ 1 600 hectares.", "A été désignée site Ramsar pour la protection des zones humides en 1996.", "Abrite des espèces d'oiseaux rares comme le héron pourpré et la spatule.", "La rivière Begej coule au cœur de la réserve.", "Se trouve à environ 15 kilomètres au sud de la ville de Zrenjanin.", "Contient des écosystèmes diversifiés tels que des forêts, des prairies et des steppes."],
    },
  },
  // RS-017 Južno-Banatski
  {
    id: "RS-017-pancevo", "sights": {
      "de": [
            {
                  "name": "Pivara Vajfert",
                  "text": "Die älteste Brauerei auf dem Balkan, heute ein industrielles Kulturdenkmal in Pančevo.",
                  "category": "museum",
                  "coords": [
                        20.639724,
                        44.868703
                  ]
            },
            {
                  "name": "Narodni muzej Pančevo",
                  "text": "Dieses Museum in Pančevo beherbergt bedeutende Sammlungen zur lokalen Geschichte und Archäologie.",
                  "category": "museum",
                  "coords": [
                        20.640401,
                        44.871686
                  ]
            },
            {
                  "name": "Pančevački svetionici",
                  "text": "Zwei einzigartige Leuchttürme an der Mündung der Tamiš in die Donau bei Pančevo.",
                  "category": "landmark",
                  "coords": [
                        20.635072,
                        44.848675
                  ]
            },
            {
                  "name": "Nudistička plaža",
                  "text": "Ein ausgewiesener FKK-Strand in der Nähe von Pančevo für Naturisten.",
                  "category": "recreational",
                  "coords": [
                        20.623598,
                        44.855639
                  ]
            },
            {
                  "name": "Muzej starovremenskih motocikala Pančevo",
                  "text": "Ein Spezialmuseum in Pančevo, das eine Sammlung alter Motorräder ausstellt.",
                  "category": "museum",
                  "coords": [
                        20.636357,
                        44.876074
                  ]
            },
            {
                  "name": "Gradska plaža",
                  "text": "Der städtische Strand am Fluss Tamiš, ein beliebter Ort für Pančevos Einwohner.",
                  "category": "recreational",
                  "coords": [
                        20.63281,
                        44.870338
                  ]
            },
            {
                  "name": "Barutana",
                  "text": "Ein ehemaliges Pulvermagazin, das in einen Park und Kulturraum in Pančevo umgewandelt wurde.",
                  "category": "park",
                  "coords": [
                        20.65918,
                        44.86626
                  ]
            },
            {
                  "name": "Narodna bašta",
                  "text": "Der größte und älteste öffentliche Park in Pančevo, ideal für Spaziergänge.",
                  "category": "park",
                  "coords": [
                        20.655522,
                        44.864941
                  ]
            },
            {
                  "name": "Sveti Florijan",
                  "text": "Ein Denkmal für den Heiligen Florian, den Schutzpatron der Feuerwehrleute, in Pančevo.",
                  "category": "historical",
                  "coords": [
                        20.645721,
                        44.870179
                  ]
            },
            {
                  "name": "Galerija savremene umetnosti",
                  "text": "Eine Galerie in Pančevo, die sich auf zeitgenössische Kunst und Ausstellungen konzentriert.",
                  "category": "museum",
                  "coords": [
                        20.642065,
                        44.869939
                  ]
            },
            {
                  "name": "Spomenik osnivačima gimnazije",
                  "text": "Ein Denkmal in Pančevo zu Ehren der Gründer des örtlichen Gymnasiums.",
                  "category": "historical",
                  "coords": [
                        20.638906,
                        44.872266
                  ]
            },
            {
                  "name": "Kip Svetog Trojstva",
                  "text": "Eine religiöse Skulptur der Heiligen Dreifaltigkeit auf einem öffentlichen Platz in Pančevo.",
                  "category": "historical",
                  "coords": [
                        20.63819,
                        44.870319
                  ]
            },
            {
                  "name": "Spomenik streljanim rodoljubima iz Borče",
                  "text": "Ein Gedenkmal in Pančevo für die im Zweiten Weltkrieg hingerichteten Patrioten aus Borča.",
                  "category": "historical",
                  "coords": [
                        20.636683,
                        44.869633
                  ]
            },
            {
                  "name": "Nadgrobni spomenik borcima iz I svetskog rata i žrtvama fašističkog terora iz II svetskog rata",
                  "text": "Ein Denkmal in Pančevo für die Gefallenen beider Weltkriege.",
                  "category": "historical",
                  "coords": [
                        20.651962,
                        44.876759
                  ]
            },
            {
                  "name": "Spomenik Đorđu Vajfertu",
                  "text": "Die Grabstätte von George Weifert, dem berühmten Industriellen und Gründer der Brauerei.",
                  "category": "historical",
                  "coords": [
                        20.653581,
                        44.873524
                  ]
            },
            {
                  "name": "Dom Omladine „Apolo” Centar",
                  "text": "Ein lebendiges Jugendzentrum in Pančevo, das Konzerte und kulturelle Veranstaltungen ausrichtet.",
                  "category": "cultural",
                  "coords": [
                        20.643465,
                        44.869016
                  ]
            },
            {
                  "name": "Crkva Svetog Preobraženja",
                  "text": "Eine beeindruckende orthodoxe Kirche in Pančevo, bekannt für ihren hohen Glockenturm.",
                  "category": "religious",
                  "coords": [
                        20.631668,
                        44.877702
                  ]
            },
            {
                  "name": "Crkva Svete Ane",
                  "text": "Die katholische Kirche St. Anna ist ein wichtiges religiöses Gebäude in Pančevo.",
                  "category": "religious",
                  "coords": [
                        20.655348,
                        44.876765
                  ]
            },
            {
                  "name": "Peskana",
                  "text": "Peskana ist ein See in Pancevo, der einen malerischen Ort zum Spazierengehen oder Entspannen bietet.",
                  "category": "natural",
                  "coords": [
                        20.660821,
                        44.879618
                  ]
            },
            {
                  "name": "Toplana",
                  "text": "Топлана ist ein Spielplatz in Pancevo, der Raum für Kinder zum Spielen im Freien bietet.",
                  "category": "family",
                  "coords": [
                        20.644191,
                        44.861922
                  ]
            },
            {
                  "name": "Indoor Pool",
                  "text": "Diese Schwimmeinrichtung in Pancevo bietet Platz zum Schwimmen und zur Erholung.",
                  "category": "family",
                  "coords": [
                        20.660404,
                        44.86141
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Pivara Vajfert",
                  "text": "A Balkán legrégebbi sörfőzdéje, ma ipari műemlék Pančevóban.",
                  "category": "museum",
                  "coords": [
                        20.639724,
                        44.868703
                  ]
            },
            {
                  "name": "Narodni muzej Pančevo",
                  "text": "Ez a pančevói múzeum jelentős helytörténeti és régészeti gyűjteményeknek ad otthont.",
                  "category": "museum",
                  "coords": [
                        20.640401,
                        44.871686
                  ]
            },
            {
                  "name": "Pančevački svetionici",
                  "text": "Két egyedülálló világítótorony a Temes Dunába torkollásánál Pančevo közelében.",
                  "category": "landmark",
                  "coords": [
                        20.635072,
                        44.848675
                  ]
            },
            {
                  "name": "Nudistička plaža",
                  "text": "Kijelölt naturista strand Pančevo közelében.",
                  "category": "recreational",
                  "coords": [
                        20.623598,
                        44.855639
                  ]
            },
            {
                  "name": "Muzej starovremenskih motocikala Pančevo",
                  "text": "Speciális múzeum Pančevóban, amely régi motorkerékpárok gyűjteményét mutatja be.",
                  "category": "museum",
                  "coords": [
                        20.636357,
                        44.876074
                  ]
            },
            {
                  "name": "Gradska plaža",
                  "text": "A városi strand a Temes-folyón, Pančevo lakóinak kedvelt helye.",
                  "category": "recreational",
                  "coords": [
                        20.63281,
                        44.870338
                  ]
            },
            {
                  "name": "Barutana",
                  "text": "Egykori lőporraktár, amelyet parkká és kulturális térré alakítottak Pančevóban.",
                  "category": "park",
                  "coords": [
                        20.65918,
                        44.86626
                  ]
            },
            {
                  "name": "Narodna bašta",
                  "text": "Pančevo legnagyobb és legrégebbi nyilvános parkja, ideális sétákhoz.",
                  "category": "park",
                  "coords": [
                        20.655522,
                        44.864941
                  ]
            },
            {
                  "name": "Sveti Florijan",
                  "text": "Szent Flóriánnak, a tűzoltók védőszentjének emlékműve Pančevóban.",
                  "category": "historical",
                  "coords": [
                        20.645721,
                        44.870179
                  ]
            },
            {
                  "name": "Galerija savremene umetnosti",
                  "text": "Pančevói galéria, amely a kortárs művészetre és kiállításokra összpontosít.",
                  "category": "museum",
                  "coords": [
                        20.642065,
                        44.869939
                  ]
            },
            {
                  "name": "Spomenik osnivačima gimnazije",
                  "text": "Emlékmű Pančevóban a helyi gimnázium alapítóinak tiszteletére.",
                  "category": "historical",
                  "coords": [
                        20.638906,
                        44.872266
                  ]
            },
            {
                  "name": "Kip Svetog Trojstva",
                  "text": "A Szentháromság vallási szobra Pančevo egyik közterén.",
                  "category": "historical",
                  "coords": [
                        20.63819,
                        44.870319
                  ]
            },
            {
                  "name": "Spomenik streljanim rodoljubima iz Borče",
                  "text": "Emlékmű Pančevóban a második világháborúban kivégzett borčai patrióták emlékére.",
                  "category": "historical",
                  "coords": [
                        20.636683,
                        44.869633
                  ]
            },
            {
                  "name": "Nadgrobni spomenik borcima iz I svetskog rata i žrtvama fašističkog terora iz II svetskog rata",
                  "text": "Pančevói emlékmű mindkét világháború elesettjeinek emlékére.",
                  "category": "historical",
                  "coords": [
                        20.651962,
                        44.876759
                  ]
            },
            {
                  "name": "Spomenik Đorđu Vajfertu",
                  "text": "George Weifert, a híres iparos és sörfőzdealapító sírhelye.",
                  "category": "historical",
                  "coords": [
                        20.653581,
                        44.873524
                  ]
            },
            {
                  "name": "Dom Omladine „Apolo” Centar",
                  "text": "Pančevo nyüzsgő ifjúsági központja, amely koncerteknek és kulturális eseményeknek ad otthont.",
                  "category": "cultural",
                  "coords": [
                        20.643465,
                        44.869016
                  ]
            },
            {
                  "name": "Crkva Svetog Preobraženja",
                  "text": "Lenyűgöző ortodox templom Pančevóban, amely magas harangtornyáról ismert.",
                  "category": "religious",
                  "coords": [
                        20.631668,
                        44.877702
                  ]
            },
            {
                  "name": "Szent Anna, Szűz Mária édesanyja templom",
                  "text": "A Szent Anna katolikus templom Pančevo egyik fontos vallási épülete.",
                  "category": "religious",
                  "coords": [
                        20.655348,
                        44.876765
                  ]
            },
            {
                  "name": "Peskana",
                  "text": "A Peskana egy tó Pancsova városában, amely festői helyet kínál sétához vagy kikapcsolódáshoz.",
                  "category": "natural",
                  "coords": [
                        20.660821,
                        44.879618
                  ]
            },
            {
                  "name": "Toplana",
                  "text": "A Топлана egy játszótér Pancsova városában, amely helyet biztosít a gyerekeknek a szabadtéri játékhoz.",
                  "category": "family",
                  "coords": [
                        20.644191,
                        44.861922
                  ]
            },
            {
                  "name": "Indoor Pool",
                  "text": "Ez a Pancevo városában található úszólétesítmény lehetőséget nyújt az úszásra és a kikapcsolódásra.",
                  "category": "family",
                  "coords": [
                        20.660404,
                        44.86141
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Pivara Vajfert",
                  "text": "Cea mai veche berărie din Balcani, astăzi un monument cultural industrial în Pančevo.",
                  "category": "museum",
                  "coords": [
                        20.639724,
                        44.868703
                  ]
            },
            {
                  "name": "Narodni muzej Pančevo",
                  "text": "Acest muzeu din Pančevo găzduiește colecții importante de istorie locală și arheologie.",
                  "category": "museum",
                  "coords": [
                        20.640401,
                        44.871686
                  ]
            },
            {
                  "name": "Pančevački svetionici",
                  "text": "Două faruri unice la vărsarea râului Tamiș în Dunăre, lângă Pančevo.",
                  "category": "landmark",
                  "coords": [
                        20.635072,
                        44.848675
                  ]
            },
            {
                  "name": "Nudistička plaža",
                  "text": "O plajă de nudiști desemnată lângă Pančevo pentru naturiști.",
                  "category": "recreational",
                  "coords": [
                        20.623598,
                        44.855639
                  ]
            },
            {
                  "name": "Muzej starovremenskih motocikala Pančevo",
                  "text": "Un muzeu specializat din Pančevo care expune o colecție de motociclete vechi.",
                  "category": "museum",
                  "coords": [
                        20.636357,
                        44.876074
                  ]
            },
            {
                  "name": "Gradska plaža",
                  "text": "Plaja orașului de pe râul Tamiș, un loc popular pentru locuitorii din Pančevo.",
                  "category": "recreational",
                  "coords": [
                        20.63281,
                        44.870338
                  ]
            },
            {
                  "name": "Barutana",
                  "text": "O fostă magazie de praf de pușcă transformată în parc și spațiu cultural în Pančevo.",
                  "category": "park",
                  "coords": [
                        20.65918,
                        44.86626
                  ]
            },
            {
                  "name": "Narodna bašta",
                  "text": "Cel mai mare și mai vechi parc public din Pančevo, ideal pentru plimbări.",
                  "category": "park",
                  "coords": [
                        20.655522,
                        44.864941
                  ]
            },
            {
                  "name": "Sveti Florijan",
                  "text": "Un monument dedicat Sfântului Florian, patronul pompierilor, în Pančevo.",
                  "category": "historical",
                  "coords": [
                        20.645721,
                        44.870179
                  ]
            },
            {
                  "name": "Galerija savremene umetnosti",
                  "text": "O galerie din Pančevo care se concentrează pe artă contemporană și expoziții.",
                  "category": "museum",
                  "coords": [
                        20.642065,
                        44.869939
                  ]
            },
            {
                  "name": "Spomenik osnivačima gimnazije",
                  "text": "Un monument în Pančevo care onorează fondatorii gimnaziului local.",
                  "category": "historical",
                  "coords": [
                        20.638906,
                        44.872266
                  ]
            },
            {
                  "name": "Kip Svetog Trojstva",
                  "text": "O sculptură religioasă a Sfintei Treimi într-o piață publică din Pančevo.",
                  "category": "historical",
                  "coords": [
                        20.63819,
                        44.870319
                  ]
            },
            {
                  "name": "Spomenik streljanim rodoljubima iz Borče",
                  "text": "Un memorial din Pančevo pentru patrioții din Borča executați în al Doilea Război Mondial.",
                  "category": "historical",
                  "coords": [
                        20.636683,
                        44.869633
                  ]
            },
            {
                  "name": "Nadgrobni spomenik borcima iz I svetskog rata i žrtvama fašističkog terora iz II svetskog rata",
                  "text": "Un monument în Pančevo pentru cei căzuți în ambele războaie mondiale.",
                  "category": "historical",
                  "coords": [
                        20.651962,
                        44.876759
                  ]
            },
            {
                  "name": "Spomenik Đorđu Vajfertu",
                  "text": "Mormântul lui George Weifert, celebrul industriaș și fondator al berăriei.",
                  "category": "historical",
                  "coords": [
                        20.653581,
                        44.873524
                  ]
            },
            {
                  "name": "Dom Omladine „Apolo” Centar",
                  "text": "Un centru de tineret vibrant din Pančevo, care găzduiește concerte și evenimente culturale.",
                  "category": "cultural",
                  "coords": [
                        20.643465,
                        44.869016
                  ]
            },
            {
                  "name": "Crkva Svetog Preobraženja",
                  "text": "O biserică ortodoxă impresionantă din Pančevo, cunoscută pentru clopotnița sa înaltă.",
                  "category": "religious",
                  "coords": [
                        20.631668,
                        44.877702
                  ]
            },
            {
                  "name": "Crkva Svete Ane",
                  "text": "Biserica catolică Sfânta Ana este un edificiu religios important din Pančevo.",
                  "category": "religious",
                  "coords": [
                        20.655348,
                        44.876765
                  ]
            },
            {
                  "name": "Peskana",
                  "text": "Peskana este un lac în Pancevo, oferind un loc pitoresc pentru plimbare sau relaxare.",
                  "category": "natural",
                  "coords": [
                        20.660821,
                        44.879618
                  ]
            },
            {
                  "name": "Toplana",
                  "text": "Топлана este un teren de joacă în Pancevo, oferind spațiu pentru copii să se joace în aer liber.",
                  "category": "family",
                  "coords": [
                        20.644191,
                        44.861922
                  ]
            },
            {
                  "name": "Indoor Pool",
                  "text": "Această unitate de înot din Pancevo oferă un loc pentru înot și recreere.",
                  "category": "family",
                  "coords": [
                        20.660404,
                        44.86141
                  ]
            }
      ],
      "en": [
            {
                  "name": "Weifert Brewery",
                  "text": "The oldest brewery in the Balkans, now an industrial cultural monument in Pančevo.",
                  "category": "museum",
                  "coords": [
                        20.639724,
                        44.868703
                  ]
            },
            {
                  "name": "National Museum of Panchevo",
                  "text": "This museum in Pančevo houses significant local history and archaeology collections.",
                  "category": "museum",
                  "coords": [
                        20.640401,
                        44.871686
                  ]
            },
            {
                  "name": "Pancevo Lighthouses",
                  "text": "Unique twin lighthouses located at the confluence of the Tamiš and Danube rivers.",
                  "category": "landmark",
                  "coords": [
                        20.635072,
                        44.848675
                  ]
            },
            {
                  "name": "Nude beach",
                  "text": "A designated nude beach near Pančevo for naturists.",
                  "category": "recreational",
                  "coords": [
                        20.623598,
                        44.855639
                  ]
            },
            {
                  "name": "Muzej starovremenskih motocikala Pančevo",
                  "text": "A specialized museum in Pančevo exhibiting a collection of vintage motorcycles.",
                  "category": "museum",
                  "coords": [
                        20.636357,
                        44.876074
                  ]
            },
            {
                  "name": "Gradska plaža",
                  "text": "The city beach on the Tamiš River, a popular spot for Pančevo's residents.",
                  "category": "recreational",
                  "coords": [
                        20.63281,
                        44.870338
                  ]
            },
            {
                  "name": "Barutana",
                  "text": "A former gunpowder magazine transformed into a park and cultural space in Pančevo.",
                  "category": "park",
                  "coords": [
                        20.65918,
                        44.86626
                  ]
            },
            {
                  "name": "Narodna bašta",
                  "text": "The largest and oldest public park in Pančevo, ideal for long walks.",
                  "category": "park",
                  "coords": [
                        20.655522,
                        44.864941
                  ]
            },
            {
                  "name": "Sveti Florijan",
                  "text": "A monument to Saint Florian, the patron saint of firefighters, in Pančevo.",
                  "category": "historical",
                  "coords": [
                        20.645721,
                        44.870179
                  ]
            },
            {
                  "name": "Galerija savremene umetnosti",
                  "text": "A gallery in Pančevo focused on contemporary art and exhibitions.",
                  "category": "museum",
                  "coords": [
                        20.642065,
                        44.869939
                  ]
            },
            {
                  "name": "Spomenik osnivačima gimnazije",
                  "text": "A monument in Pančevo honoring the founders of the local gymnasium.",
                  "category": "historical",
                  "coords": [
                        20.638906,
                        44.872266
                  ]
            },
            {
                  "name": "Kip Svetog Trojstva",
                  "text": "A religious sculpture of the Holy Trinity located in a public square in Pančevo.",
                  "category": "historical",
                  "coords": [
                        20.63819,
                        44.870319
                  ]
            },
            {
                  "name": "Spomenik streljanim rodoljubima iz Borče",
                  "text": "A memorial in Pančevo for the patriots from Borča executed during World War II.",
                  "category": "historical",
                  "coords": [
                        20.636683,
                        44.869633
                  ]
            },
            {
                  "name": "Nadgrobni spomenik borcima iz I svetskog rata i žrtvama fašističkog terora iz II svetskog rata",
                  "text": "A monument in Pančevo commemorating the fallen soldiers of both World Wars.",
                  "category": "historical",
                  "coords": [
                        20.651962,
                        44.876759
                  ]
            },
            {
                  "name": "Gravestone of George Weifert",
                  "text": "The final resting place of George Weifert, the famous industrialist and brewery founder.",
                  "category": "historical",
                  "coords": [
                        20.653581,
                        44.873524
                  ]
            },
            {
                  "name": "Dom Omladine „Apolo” Centar",
                  "text": "A vibrant youth center in Pančevo that hosts concerts and cultural events.",
                  "category": "cultural",
                  "coords": [
                        20.643465,
                        44.869016
                  ]
            },
            {
                  "name": "Crkva Svetog Preobraženja",
                  "text": "An impressive Orthodox church in Pančevo, known for its high bell tower.",
                  "category": "religious",
                  "coords": [
                        20.631668,
                        44.877702
                  ]
            },
            {
                  "name": "Crkva Svete Ane",
                  "text": "The Catholic church of Saint Anne is a significant religious building in Pančevo.",
                  "category": "religious",
                  "coords": [
                        20.655348,
                        44.876765
                  ]
            },
            {
                  "name": "Peskana",
                  "text": "Peskana is a lake in Pancevo, offering a scenic spot for a walk or relaxation.",
                  "category": "natural",
                  "coords": [
                        20.660821,
                        44.879618
                  ]
            },
            {
                  "name": "Toplana",
                  "text": "Топлана is a playground in Pancevo providing space for children to play outdoors.",
                  "category": "family",
                  "coords": [
                        20.644191,
                        44.861922
                  ]
            },
            {
                  "name": "Indoor Pool",
                  "text": "This swimming facility in Pancevo offers a place for swimming and recreation.",
                  "category": "family",
                  "coords": [
                        20.660404,
                        44.86141
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-017",
    coords: [20.6400, 44.8708],
    name: { de: "Pančevo", hu: "Pancsova", ro: "Panciova", en: "Pančevo" },
    description: {
      de: "Eine Industriestadt am Zusammenfluss von Temesch und Donau, nahe bei Belgrad.",
      hu: "Ipari város a Temes és a Duna összefolyásánál, Belgrád közelében.",
      ro: "Un oraș industrial la confluența râului Timiș cu Dunărea, aproape de Belgrad.",
      en: "An industrial city at the confluence of the Tamiš and Danube rivers, near Belgrade.",
      es: "Una ciudad industrial en la confluencia de los ríos Tamiš y Danubio, cerca de Belgrado.",
      pt: "Uma cidade industrial na confluência dos rios Tamiš e Danúbio, perto de Belgrado.",
      fr: "Une ville industrielle au confluent de la Tamiš et du Danube, à proximité de Belgrade.",
    },
    facts: {
      de: ["Historische Leuchttürme", "Bedeutende Industrie", "Temesch-Ufer"],
      hu: ["Történelmi világítótornyok", "Jelentős ipar", "Temes-part"],
      ro: ["Faruri istorice", "Industrie importantă", "Malul râului Timiș"],
      en: ["Historical lighthouses", "Significant industry", "Tamiš riverbank"],
      es: ["Faros históricos", "Industria importante", "Ribera del Tamiš"],
      pt: ["Faróis históricos", "Indústria importante", "Margem do Tamiš"],
      fr: ["Phares historiques", "Industrie importante", "Rive de la Tamiš"],
    },
    descriptionAdvanced: {
      de: "Pančevo liegt am Zusammenfluss von Temesch und Donau im südlichen Banat, etwa 18 Kilometer nordöstlich von Belgrad. Die Stadt blickt auf eine lange Siedlungsgeschichte zurück, die bis in die Jungsteinzeit reicht, erlangte jedoch unter österreichisch-ungarischer Herrschaft als Grenzfestung strategische Bedeutung. Ein markantes Wahrzeichen ist die Brauerei Weifert, die 1722 gegründet wurde und als älteste Braustätte auf dem Balkan gilt. Im 19. und 20. Jahrhundert entwickelte sich Pančevo zu einem bedeutenden Industriezentrum, insbesondere in den Bereichen Ölraffinerie, Chemie und Flugzeugbau (Utva). Zu den kulturellen Schätzen gehören die Kirche der Heiligen Auferstehung mit ihren charakteristischen zwei Türmen sowie das Kloster Vojlovica aus dem 14. Jahrhundert. Heute ist die Stadt das administrative Zentrum des Bezirks Südbanat und fungiert als wichtiger Wirtschaftsknotenpunkt zwischen der Vojvodina und der serbischen Hauptstadt.",
      hu: "Pančevo, magyarul Pancsova, a Temes és a Duna összefolyásánál fekszik a Dél-Bánságban, mindössze 18 kilométerre északkeletre Belgrádtól. A város hosszú múltra tekint vissza, amely a neolitikumig nyúlik, de stratégiai jelentőségét az osztrák-magyar fennhatóság alatt, határmenti településként nyerte el. Híres ipari örökségéről, itt található a Balkán legrégebbi sörfőzdéje, amelyet 1722-ben alapítottak és később a Weifert család tulajdonába került. A 19. és 20. század folyamán a város jelentős ipari központtá vált, különösen az olajfinomítás, a vegyipar és a repülőgépgyártás (Utva) területén. Építészeti látnivalói közé tartozik a Szent Feltámadás templom jellegzetes két tornyával, valamint a 14. századi Vojlovica-kolostor. Napjainkban Pancsova a Dél-bánsági körzet székhelye, gazdasági és kulturális központ, amely szoros kapcsolatot ápol a szerb fővárossal.",
      ro: "Pančevo este situat la confluența râurilor Timiș și Dunăre în sudul Banatului, la aproximativ 18 kilometri nord-est de Belgrad. Orașul are o istorie lungă de așezare care datează din perioada neolitică, dar a dobândit o importanță strategică majoră sub dominația austro-ungară ca oraș de frontieră. Este renumit pentru moștenirea sa industrială, găzduind cea mai veche berărie din Balcani, fondată în 1722 de Abraham Keppisch și deținută ulterior de familia Weifert. În secolele al XIX-lea și al XX-lea, orașul s-a transformat într-un centru industrial major, în special în domeniile rafinării petrolului, industriei chimice și construcției de aeronave (Utva). Reperele arhitecturale includ Biserica Sfânta Înviere, cu cele două turnuri emblematice, și Mănăstirea Vojlovica, care datează din secolul al XIV-lea. Astăzi, Pančevo servește ca centru administrativ al districtului Banatul de Sud, fiind un nod economic vital în regiunea Voivodina.",
      en: "Pančevo is situated at the confluence of the Tamiš and Danube rivers in the southern Banat region, just 18 kilometers northeast of Belgrade. The city has a long history of settlement dating back to the Neolithic period, but it gained significant strategic importance during the Austro-Hungarian period as a border town. Pančevo is renowned for its industrial heritage, housing the oldest brewery in the Balkans, founded in 1722 and later owned by the famous Weifert family. Throughout the 19th and 20th centuries, the city transformed into a major industrial hub, particularly in the fields of oil refining, chemical production, and aircraft manufacturing (Utva). Architectural landmarks include the Church of the Holy Resurrection with its iconic twin bell towers and the nearby Vojlovica Monastery, which dates back to the late 14th century. Today, Pančevo serves as the administrative center of the South Banat District, balancing its heavy industrial identity with its role as a regional cultural and economic center.",
      es: "Pančevo se encuentra en el sur de Voivodina, en la desembocadura del Tamiš en el Danubio. La ciudad es un importante centro industrial con una larga historia como centro de comercio. Entre los lugares de interés se encuentran el monasterio de Vojlovica y edificios históricos en el centro. Pančevo también es conocida por su vibrante escena artística y cultural.",
      pt: "Pančevo situa-se no sul da Voivodina, na foz do rio Tamiš no Danúbio. A cidade é um importante centro industrial com uma longa história como praça comercial. Os pontos de interesse incluem o mosteiro de Vojlovica e edifícios históricos no centro. Pančevo também é conhecida pela sua vibrante cena artística e cultural.",
      fr: "Pančevo est située au sud de la Voïvodine, à l'embouchure de la Tamiš dans le Danube. La ville est un centre industriel important avec une longue histoire de place commerciale. Parmi les curiosités figurent le monastère de Vojlovica et des bâtiments historiques au centre. Pančevo est également connue pour sa scène artistique et culturelle dynamique.",
    },
    factsAdvanced: {
      de: ["Die Brauerei Weifert wurde 1722 als erste auf dem Balkan gegründet.", "Die Stadt liegt auf einer Höhe von etwa 77 Metern über dem Meeresspiegel.", "Pančevo wurde im Jahr 1153 erstmals in historischen Dokumenten erwähnt.", "Die Utva-Flugzeugfabrik produziert seit 1937 Luftfahrzeuge in der Stadt.", "Das Kloster Vojlovica beherbergt Fresken aus dem 15. und 16. Jahrhundert.", "Die Stadt erstreckt sich über eine Fläche von insgesamt 161 Quadratkilometern."],
      hu: ["A Weifert-sörfőzdét 1722-ben alapították, ez a legrégebbi a Balkánon.", "A város átlagos tengerszint feletti magassága 77 méter.", "Pancsovát először 1153-ban említik írásos források.", "Az Utva repülőgépgyár 1937 óta működik a városban.", "A Vojlovica-kolostorban 15. és 16. századi freskók láthatók.", "A város közigazgatási területe összesen 161 négyzetkilométer."],
      ro: ["Berăria Weifert a fost fondată în 1722, fiind prima de acest fel din Balcani.", "Orașul este situat la o altitudine de aproximativ 77 de metri.", "Pančevo a fost menționat pentru prima dată în documente în anul 1153.", "Fabrica de avioane Utva produce aeronave în oraș din anul 1937.", "Mănăstirea Vojlovica conține fresce valoroase din secolele XV și XVI.", "Suprafața totală a zonei urbane este de 161 de kilometri pătrați."],
      en: ["The Weifert Brewery was established in 1722, making it the oldest in the Balkans.", "The city sits at an average elevation of 77 meters above sea level.", "Pančevo was first mentioned in historical records in the year 1153.", "The Utva aircraft factory has been operating in the city since 1937.", "Vojlovica Monastery features original frescoes from the 15th and 16th centuries.", "The city municipality covers a total area of 161 square kilometers."],
      es: ["Uno de los asentamientos más antiguos de la región del Banato.", "Hogar de la cervecería Weifert, fundada en el año 1722.", "El monasterio de Vojlovica data de finales del siglo XIV.", "Se encuentra a solo 15 kilómetros al noreste de Belgrado.", "La Iglesia de la Asunción de María posee un famoso iconostasio.", "Conocida por su gran refinería de petróleo y plantas químicas."],
      pt: ["Um dos povoados mais antigos da região do Banato.", "Sede da cervejaria Weifert, fundada no ano de 1722.", "O mosteiro de Vojlovica data do final do século XIV.", "Localiza-se a apenas 15 quilómetros a nordeste de Belgrado.", "A Igreja da Assunção de Maria possui um famoso iconostásio.", "Conhecida pela sua grande refinaria de petróleo e fábricas químicas."],
      fr: ["L'un des plus anciens établissements de la région du Banat.", "Siège de la brasserie Weifert, fondée en 1722.", "Le monastère de Vojlovica date de la fin du XIVe siècle.", "Se trouve à seulement 15 kilomètres au nord-est de Belgrade.", "L'église de l'Assomption-de-la-Vierge possède une célèbre iconostase.", "Connue pour sa grande raffinerie de pétrole et ses usines chimiques."],
    },
    image: "/poi-images/RS-017-pancevo.webp",
  },
  {
    id: "RS-017-vrsac", "sights": {"de": [{"name": "Gradski muzej", "text": "Das Stadtmuseum in Vršac kuratiert und stellt Artefakte aus, welche die historische Entwicklung der Stadt widerspiegeln.", "category": "museum", "coords": [21.301824, 45.119337]}, {"name": "Narodno pozorište „Sterija”", "text": "Das Sterija-Nationaltheater ist ein Eckpfeiler der darstellenden Künste und kultureller Veranstaltungen in Vršac.", "category": "cultural", "coords": [21.297251, 45.119235]}, {"name": "Vršački zamak", "text": "Die Burg Vršac ist eine historische mittelalterliche Festung, die über der Stadt Vršac thront.", "category": "landmark", "coords": [21.325645, 45.122807]}, {"name": "Bore Kostić", "text": "Dieses Bore Kostic gewidmete Denkmal ist ein bemerkenswertes Wahrzeichen in Vršac.", "category": "historical", "coords": [21.298231, 45.11875]}, {"name": "Turban", "text": "Der Turban ist ein malerischer Aussichtspunkt, der einen Panoramablick über Vršac bietet.", "category": "natural", "coords": [21.331153, 45.125019]}, {"name": "Vidikovac Talpika", "text": "Vidikovac Talpika ist ein landschaftlich reizvoller Aussichtspunkt in der Stadt Vršac.", "category": "natural", "coords": [21.323676, 45.121672]}, {"name": "Kapela svetog Krsta", "text": "Die Heilig-Kreuz-Kapelle ist eine bemerkenswerte religiöse Sehenswürdigkeit in Vršac.", "category": "landmark", "coords": [21.32, 45.117434]}, {"name": "Saborna crkva Svetog Nikolaja", "text": "Die Kathedrale St. Nikolaus ist eine wichtige kulturelle und religiöse Sehenswürdigkeit in Vršac.", "category": "landmark", "coords": [21.295352, 45.119509]}, {"name": "Krst", "text": "Das Kreuz ist ein markantes öffentliches Denkmal in Vršac.", "category": "historical", "coords": [21.296316, 45.121257]}, {"name": "Crkva Uspenja Presvete Bogorodice", "text": "Die Kirche der Entschlafung der Muttergottes ist eine bedeutende serbisch-orthodoxe Kultstätte in Vršac.", "category": "religious", "coords": [21.28991, 45.117105]}, {"name": "Crkva Svetog Gerharda de Sangredo", "text": "Die Kirche des Heiligen Bischofs und Märtyrers Gerhard ist eine bemerkenswerte neugotische römisch-katholische Kultstätte in Vršac.", "category": "religious", "coords": [21.301701, 45.118145]}], "hu": [{"name": "Gradski muzej", "text": "A Versec Városi Múzeuma a város történelmi fejlődését tükröző tárgyakat gondozza és állítja ki.", "category": "museum", "coords": [21.301824, 45.119337]}, {"name": "Narodno pozorište „Sterija”", "text": "A Sterija Nemzeti Színház a drámaművészetek és a kulturális események sarokköve Versecen.", "category": "cultural", "coords": [21.297251, 45.119235]}, {"name": "Versec vára", "text": "A verseci vár egy történelmi középkori erődítmény Vršac városa felett.", "category": "landmark", "coords": [21.325645, 45.122807]}, {"name": "Bore Kostić", "text": "Ez a Bore Kosticnak szentelt műemlék Vršac egyik nevezetes tájékozódási pontja.", "category": "historical", "coords": [21.298231, 45.11875]}, {"name": "Turban", "text": "A Turban egy festői kilátó, ahonnan panorámás kilátás nyílik Vršac városára.", "category": "natural", "coords": [21.331153, 45.125019]}, {"name": "Vidikovac Talpika", "text": "A Vidikovac Talpika egy festői kilátó Vršac városában.", "category": "natural", "coords": [21.323676, 45.121672]}, {"name": "Szent Kereszt kápolna", "text": "A Szent Kereszt-kápolna egy figyelemre méltó vallási látványosság Vršac városában.", "category": "landmark", "coords": [21.32, 45.117434]}, {"name": "Saborna crkva Svetog Nikolaja", "text": "A Szent Miklós-székesegyház egy fontos kulturális és vallási látványosság Vršacban.", "category": "landmark", "coords": [21.295352, 45.119509]}, {"name": "Krst", "text": "A Kereszt egy kiemelkedő köztéri műemlék Vršacban.", "category": "historical", "coords": [21.296316, 45.121257]}, {"name": "Crkva Uspenja Presvete Bogorodice", "text": "Az Istenszülő elszenderedése templom egy kiemelkedő szerb ortodox istentiszteleti hely Vršacban.", "category": "religious", "coords": [21.28991, 45.117105]}, {"name": "Szent Gellért templom", "text": "A Szent Gellért Püspök és Vértanú templom egy jelentős neogótikus római katolikus istentiszteleti hely Vršacban.", "category": "religious", "coords": [21.301701, 45.118145]}], "ro": [{"name": "Gradski muzej", "text": "Muzeul Orașului din Vârșeț îngrijește și expune artefacte care reflectă dezvoltarea istorică a orașului.", "category": "museum", "coords": [21.301824, 45.119337]}, {"name": "Narodno pozorište „Sterija”", "text": "Teatrul Național Sterija este o piatră de temelie a artelor dramatice și a evenimentelor culturale din Vârșeț.", "category": "cultural", "coords": [21.297251, 45.119235]}, {"name": "Vršački zamak", "text": "Castelul Vârșeț este o fortăreață medievală istorică situată deasupra orașului Vršac.", "category": "landmark", "coords": [21.325645, 45.122807]}, {"name": "Bore Kostić", "text": "Acest monument dedicat lui Bore Kostic este un punct de reper notabil în Vršac.", "category": "historical", "coords": [21.298231, 45.11875]}, {"name": "Turban", "text": "Turban este un punct de belvedere pitoresc care oferă priveliști panoramice asupra orașului Vršac.", "category": "natural", "coords": [21.331153, 45.125019]}, {"name": "Vidikovac Talpika", "text": "Vidikovac Talpika este un punct de belvedere pitoresc situat în orașul Vršac.", "category": "natural", "coords": [21.323676, 45.121672]}, {"name": "Kapela svetog Krsta", "text": "Capela Sfintei Cruci este o atracție religioasă remarcabilă din Vršac.", "category": "landmark", "coords": [21.32, 45.117434]}, {"name": "Saborna crkva Svetog Nikolaja", "text": "Catedrala Sfântul Nicolae este o importantă atracție culturală și religioasă în Vršac.", "category": "landmark", "coords": [21.295352, 45.119509]}, {"name": "Krst", "text": "Crucea este un monument public proeminent situat în Vršac.", "category": "historical", "coords": [21.296316, 45.121257]}, {"name": "Crkva Uspenja Presvete Bogorodice", "text": "Biserica Adormirea Maicii Domnului este un important lăcaș de cult ortodox sârb din Vršac.", "category": "religious", "coords": [21.28991, 45.117105]}, {"name": "Crkva Svetog Gerharda de Sangredo", "text": "Biserica Sfântul Gerhard Episcop și Martir este un remarcabil lăcaș de cult romano-catolic neogotic din Vršac.", "category": "religious", "coords": [21.301701, 45.118145]}], "en": [{"name": "Gradski muzej", "text": "The City Museum in Vršac curates and exhibits artifacts reflecting the town's historical development.", "category": "museum", "coords": [21.301824, 45.119337]}, {"name": "Narodno pozorište „Sterija”", "text": "The Sterija National Theatre is a cornerstone of dramatic arts and cultural events in Vršac.", "category": "cultural", "coords": [21.297251, 45.119235]}, {"name": "Vršački zamak", "text": "The Vršac Castle is a historical medieval fortress attraction overlooking the city of Vršac.", "category": "landmark", "coords": [21.325645, 45.122807]}, {"name": "Bore Kostic", "text": "This monument dedicated to Bore Kostic is a notable landmark in Vršac.", "category": "historical", "coords": [21.298231, 45.11875]}, {"name": "Turban", "text": "The Turban is a scenic viewpoint offering panoramic sights over Vršac.", "category": "natural", "coords": [21.331153, 45.125019]}, {"name": "Vidikovac Talpika", "text": "Vidikovac Talpika is a scenic viewpoint located in the city of Vršac.", "category": "natural", "coords": [21.323676, 45.121672]}, {"name": "Kapela svetog Krsta", "text": "The Chapel of the Holy Cross is a notable religious attraction to visit in Vršac.", "category": "landmark", "coords": [21.32, 45.117434]}, {"name": "Saborna crkva Svetog Nikolaja", "text": "The Cathedral of St. Nicholas is an important cultural and religious attraction in Vršac.", "category": "landmark", "coords": [21.295352, 45.119509]}, {"name": "Krst", "text": "The Cross is a prominent public monument situated in Vršac.", "category": "historical", "coords": [21.296316, 45.121257]}, {"name": "Crkva Uspenja Presvete Bogorodice", "text": "The Church of the Dormition of the Mother of God is a prominent Serbian Orthodox place of worship in Vršac.", "category": "religious", "coords": [21.28991, 45.117105]}, {"name": "Church of Saint Gerhard the Bishop and Martyr", "text": "The Church of Saint Gerhard the Bishop and Martyr is a notable neo-Gothic Roman Catholic place of worship in Vršac.", "category": "religious", "coords": [21.301701, 45.118145]}]},
    type: "city",
    parent: "RS-017",
    coords: [21.3036, 45.1167],
    name: { de: "Vršac", hu: "Versec", ro: "Vârșeț", en: "Vršac" },
    description: {
      de: "Eine charmante Stadt am Fuße der Vršac-Berge, berühmt für ihren Weinbau.",
      hu: "Bájos város a Verseci-hegység lábánál, híres borászatáról.",
      ro: "Un oraș fermecător la poalele munților Vârșeț, faimos pentru viticultură.",
      en: "A charming city at the foot of the Vršac Mountains, famous for its viticulture.",
      es: "Una encantadora ciudad al pie de las montañas de Vršac, famosa por su viticultura.",
      pt: "Uma cidade encantadora no sopé das montanhas de Vršac, famosa pela sua viticultura.",
      fr: "Une ville charmante au pied des monts de Vršac, célèbre pour sa viticulture.",
    },
    facts: {
      de: ["Vršac-Turm", "Bischofspalast", "Große Weingüter"],
      hu: ["Verseci torony", "Püspöki palota", "Hatalmas borászatok"],
      ro: ["Turnul Vârșeț", "Palatul Episcopal", "Podgorii mari"],
      en: ["Vršac Tower", "Bishop's Palace", "Large wineries"],
      es: ["Torre de Vršac", "Palacio episcopal", "Grandes bodegas"],
      pt: ["Torre de Vršac", "Palácio episcopal", "Grandes vinícolas"],
      fr: ["Tour de Vršac", "Palais épiscopal", "Grands domaines viticoles"],
    }, image: "/poi-images/RS-017-vrsac.webp",
    descriptionAdvanced: {
      de: "Vršac liegt im Südosten der Vojvodina am Fuße der Vršac-Berge, nahe der rumänischen Grenze. Die Stadt ist eine der ältesten in der Region Banat und für ihre lange Tradition im Weinbau bekannt, die bis in die Römerzeit zurückreicht. Über der Stadt thront der Turm von Vršac (Vršacka kula), ein Überrest einer mittelalterlichen Festung aus dem 14. Jahrhundert, die vermutlich von Đurađ Branković errichtet wurde. Die Architektur im Stadtzentrum ist durch barocke und neoklassizistische Gebäude geprägt, darunter der Bischofspalast und das Rathaus. Vršac ist auch der Geburtsort des berühmten Dramatikers Jovan Sterija Popović, dessen Haus heute als Museum dient. Das milde Mikroklima und die fruchtbaren Hänge machen die Region zu einem der bedeutendsten Weinanbaugebiete Serbiens. Heute verbindet Vršac historische Eleganz mit moderner pharmazeutischer Industrie und Tourismus.",
      hu: "Vršac, magyarul Versec, a Vajdaság délkeleti részén, a Verseci-hegység lábánál, a román határ közelében fekszik. A város a Bánság egyik legrégebbi települése, amely híres évezredes szőlészeti és borászati hagyományairól, amelyek egészen a római korig nyúlnak vissza. A város felett magasodik a Verseci-torony, egy 14. századi középkori vár maradványa, amelyet valószínűleg Brankovics György építtetett. A városközpont építészetét barokk és neoklasszicista stílusú épületek határozzák meg, mint például a Püspöki Palota és a Városháza. Versec a híres drámaíró, Jovan Sterija Popović szülővárosa, akinek egykori háza ma múzeumként működik. Az enyhe mikroklíma és a termékeny domboldalak Szerbia egyik legfontosabb borvidékévé teszik a környéket. Versec ma a történelmi elegancia, a modern gyógyszeripar és a turizmus ötvözete.",
      ro: "Vârșeț este situat în sud-estul Voivodinei, la poalele Munților Vârșeț, aproape de granița cu România. Orașul este unul dintre cele mai vechi din regiunea Banatului și este renumit pentru tradiția sa milenară în viticultură, care datează încă din epoca romană. Deasupra orașului se înalță Turnul din Vârșeț (Vršacka kula), o rămășiță a unei fortărețe medievale din secolul al XIV-lea, construită probabil de Đurađ Branković. Arhitectura centrului orașului este marcată de clădiri baroce și neoclasice, printre care Palatul Episcopal și Primăria. Vârșeț este, de asemenea, locul de naștere al celebrului dramaturg Jovan Sterija Popović, a cărui casă servește astăzi ca muzeu. Microclimatul blând și pantele fertile fac din regiune una dintre cele mai importante zone viticole din Serbia. Astăzi, Vârșeț îmbină eleganța istorică cu industria farmaceutică modernă și turismul.",
      en: "Vršac is located in southeastern Vojvodina at the foot of the Vršac Mountains, near the border with Romania. As one of the oldest cities in the Banat region, it is famous for its long-standing tradition of viticulture, which dates back to Roman times. The city's skyline is dominated by the Vršac Tower (Vršacka kula), a 14th-century remnant of a medieval fortress likely built by Despot Đurađ Branković. The architectural character of the city center is defined by Baroque and Neoclassical buildings, such as the Bishop's Palace and the City Hall. Vršac is also the birthplace of the renowned playwright Jovan Sterija Popović, and his family home is now a dedicated museum. The mild microclimate and fertile slopes make the region one of Serbia's premier wine-producing areas. Modern Vršac is a blend of historical charm, a thriving pharmaceutical industry, and increasing prominence as a tourist destination.",
      es: "Vršac se encuentra en el sureste de Voivodina, al pie de las montañas de Vršac. La ciudad es famosa por su viticultura, que se remonta a la época romana. Sobre la ciudad se alza la torre de Vršac del siglo XV, resto de una antigua fortaleza. La arquitectura del centro de la ciudad se caracteriza por elementos barrocos y clasicistas.",
      pt: "Vršac situa-se no sudeste da Voivodina, no sopé das montanhas de Vršac. A cidade é famosa pela sua viticultura, que remonta à época romana. Sobre a cidade ergue-se a torre de Vršac do século XV, um vestígio de uma antiga fortaleza. A arquitetura no centro da cidade é caracterizada por elementos barrocos e classicistas.",
      fr: "Vršac est située au sud-est de la Voïvodine, au pied des monts de Vršac. La ville est célèbre pour sa viticulture, qui remonte à l'époque romaine. La tour de Vršac du XVe siècle, vestige d'une ancienne forteresse, domine la ville. L'architecture du centre-ville est marquée par des éléments baroques et classicistes.",
    },
    factsAdvanced: {
      de: ["Der Turm von Vršac steht auf einer Höhe von 399 Metern über dem Meeresspiegel.", "Die Vršac-Berge beherbergen den Gudurički vrh, den höchsten Gipfel der Vojvodina (641 m).", "Das erste Theaterhaus in Vršac wurde bereits 1793 eröffnet.", "Die Region verfügt über mehr als 2.000 Hektar Rebfläche.", "Der Bischofspalast wurde im Jahr 1750 im Barockstil erbaut.", "Die Stadt liegt nur 14 Kilometer von der Grenze zu Rumänien entfernt."],
      hu: ["A Verseci-torony 399 méteres tengerszint feletti magasságban található.", "A Verseci-hegységben van a Guduricai-csúcs, a Vajdaság legmagasabb pontja (641 m).", "A város első kőszínháza már 1793-ban megnyitotta kapuit.", "A régióban több mint 2000 hektáron termesztenek szőlőt.", "A Püspöki Palota 1750-ben épült barokk stílusban.", "A város mindössze 14 kilométerre fekszik a román határtól."],
      ro: ["Turnul din Vârșeț este situat la o altitudine de 399 de metri.", "Munții Vârșeț includ vârful Gudurički, cel mai înalt punct din Voivodina (641 m).", "Prima clădire de teatru din Vârșeț a fost deschisă în anul 1793.", "Regiunea deține peste 2.000 de hectare de plantații de viță-de-vie.", "Palatul Episcopal a fost construit în stil baroc în anul 1750.", "Orașul se află la o distanță de doar 14 kilometri de granița cu România."],
      en: ["The Vršac Tower is positioned at an elevation of 399 meters above sea level.", "The Vršac Mountains contain Gudurički vrh, the highest peak in Vojvodina (641 m).", "The first theater in Vršac began its performances in 1793.", "The surrounding wine region covers more than 2,000 hectares of vineyards.", "The Bishop's Palace was constructed in the Baroque style in 1750.", "The city is located only 14 kilometers away from the Romanian border."],
      es: ["Las montañas de Vršac alcanzan una altura de 641 metros en el pico Gudurica.", "Debido al viento Košava, la ciudad es uno de los lugares más ventosos de Serbia.", "Hogar del Vršac Vintage Festival, que celebra la vendimia.", "La iglesia católica de San Gerardo es un hito neogótico.", "Conocida como el lugar de nacimiento del dramaturgo Jovan Sterija Popović.", "Famosa por los extensos viñedos en las colinas circundantes."],
      pt: ["As montanhas de Vršac atingem uma altitude de 641 metros no pico Gudurica.", "Devido ao vento Košava, a cidade é um dos locais com mais vento da Sérvia.", "Sede do Vršac Vintage Festival, que celebra a vindima.", "A igreja católica de São Gerardo é um marco neogótico.", "Conhecida como o local de nascimento do dramaturgo Jovan Sterija Popović.", "Famosa pelos extensos vinhedos nas colinas circundantes."],
      fr: ["Les monts de Vršac atteignent une altitude de 641 mètres au pic de Gudurica.", "La ville est l'un des endroits les plus venteux de Serbie à cause du vent Košava.", "Siège du Vršac Vintage Festival, qui célèbre les vendanges.", "L'église catholique Saint-Gérard est un monument néogothique.", "Connue comme le lieu de naissance du dramaturge Jovan Sterija Popović.", "Célèbre pour ses vastes vignobles sur les collines environnantes."],
    },
  },
  // RS-018 Branicevski
  {
    id: "RS-018-pozarevac", "sights": {"de": [{"name": "Požarevački mir", "text": "Dieses Museum in Požarevac befasst sich mit dem historischen Friedensvertrag von Passarowitz.", "category": "museum", "coords": [21.199953, 44.623964]}, {"name": "Bambiland", "text": "Ein bekannter Freizeitpark für Familien in der Stadt Požarevac.", "category": "family", "coords": [21.1721, 44.619445]}, {"name": "Narodni muzej Požarevac", "text": "Das Nationalmuseum von Požarevac stellt bedeutende lokale historische und archäologische Funde aus.", "category": "museum", "coords": [21.186899, 44.621834]}, {"name": "Spomenik slobode i pobede nad fašizmom „Zvezda”", "text": "Ein Denkmal in Požarevac, das der Freiheit und dem Sieg über den Faschismus gewidmet ist.", "category": "historical", "coords": [21.203752, 44.613644]}, {"name": "Spomenik palim borcima Crvene armije 1944. godine", "text": "Ein Denkmal zur Ehre der im Jahr 1944 gefallenen Soldaten der Roten Armee.", "category": "historical", "coords": [21.199857, 44.612909]}, {"name": "Spomenik streljanim rodoljubima 1941-1944", "text": "Dieses Denkmal erinnert an die jugoslawischen Partisanen, die zwischen 1941 und 1944 hingerichtet wurden.", "category": "historical", "coords": [21.197876, 44.613379]}, {"name": "Spomenik Pokretu gorana", "text": "Ein Denkmal für die ökologische Goranen-Jugendbewegung in Požarevac.", "category": "historical", "coords": [21.202417, 44.613513]}], "hu": [{"name": "Požarevački mir", "text": "Ez a požarevaci múzeum a történelmi pozsareváci békével foglalkozik.", "category": "museum", "coords": [21.199953, 44.623964]}, {"name": "Bambiland", "text": "Népszerű családi vidámpark Požarevac városában.", "category": "family", "coords": [21.1721, 44.619445]}, {"name": "Narodni muzej Požarevac", "text": "A Požarevaci Nemzeti Múzeum jelentős helyi történelmi és régészeti leleteket mutat be.", "category": "museum", "coords": [21.186899, 44.621834]}, {"name": "Spomenik slobode i pobede nad fašizmom „Zvezda”", "text": "A szabadságnak és a fasizmus feletti győzelemnek szentelt emlékmű Požarevacon.", "category": "historical", "coords": [21.203752, 44.613644]}, {"name": "Spomenik palim borcima Crvene armije 1944. godine", "text": "Emlékmű az 1944-ben elesett Vörös Hadsereg katonáinak tiszteletére.", "category": "historical", "coords": [21.199857, 44.612909]}, {"name": "Spomenik streljanim rodoljubima 1941-1944", "text": "Ez az emlékmű az 1941 és 1944 között kivégzett jugoszláv partizánoknak állít emléket.", "category": "historical", "coords": [21.197876, 44.613379]}, {"name": "Spomenik Pokretu gorana", "text": "Emlékmű a požarevaci Goran-mozgalom (ökológiai ifjúsági mozgalom) tiszteletére.", "category": "historical", "coords": [21.202417, 44.613513]}], "ro": [{"name": "Požarevački mir", "text": "Acest muzeu din Požarevac este dedicat istoricului tratat de pace de la Passarowitz.", "category": "museum", "coords": [21.199953, 44.623964]}, {"name": "Bambiland", "text": "Un parc tematic popular pentru familii din orașul Požarevac.", "category": "family", "coords": [21.1721, 44.619445]}, {"name": "Narodni muzej Požarevac", "text": "Muzeul Național din Požarevac expune descoperiri istorice și arheologice locale importante.", "category": "museum", "coords": [21.186899, 44.621834]}, {"name": "Spomenik slobode i pobede nad fašizmom „Zvezda”", "text": "Un monument din Požarevac dedicat libertății și victoriei asupra fascismului.", "category": "historical", "coords": [21.203752, 44.613644]}, {"name": "Spomenik palim borcima Crvene armije 1944. godine", "text": "Un monument în onoarea soldaților Armatei Roșii căzuți în 1944.", "category": "historical", "coords": [21.199857, 44.612909]}, {"name": "Spomenik streljanim rodoljubima 1941-1944", "text": "Acest monument îi comemorează pe partizanii iugoslavi împușcați între 1941 și 1944.", "category": "historical", "coords": [21.197876, 44.613379]}, {"name": "Spomenik Pokretu gorana", "text": "Un monument dedicat mișcării ecologiste de tineret Goran din Požarevac.", "category": "historical", "coords": [21.202417, 44.613513]}], "en": [{"name": "Treaty of Passarowitz", "text": "This museum in Požarevac is dedicated to the historical Treaty of Passarowitz.", "category": "museum", "coords": [21.199953, 44.623964]}, {"name": "Bambiland", "text": "A popular family theme park in the city of Požarevac.", "category": "family", "coords": [21.1721, 44.619445]}, {"name": "Narodni muzej Požarevac", "text": "The National Museum of Požarevac exhibits significant local historical and archaeological finds.", "category": "museum", "coords": [21.186899, 44.621834]}, {"name": "Monument to freedom and victory over fascism \"Zvezda\"", "text": "A monument in Požarevac dedicated to freedom and the victory over fascism.", "category": "historical", "coords": [21.203752, 44.613644]}, {"name": "Monument to Fallen Soldiers of the Red Army in 1944", "text": "A monument honoring the Red Army soldiers who fell in 1944.", "category": "historical", "coords": [21.199857, 44.612909]}, {"name": "Monument to Yugoslav Partisans Shot in 1941-1944", "text": "This monument commemorates the Yugoslav partisans shot between 1941 and 1944.", "category": "historical", "coords": [21.197876, 44.613379]}, {"name": "Monument to the Pokret gorana (Gorans Movement / Youth Environmental Movement)", "text": "A monument dedicated to the Goran ecological youth movement in Požarevac.", "category": "historical", "coords": [21.202417, 44.613513]}]},
    type: "city",
    parent: "RS-018",
    coords: [21.1858, 44.6214],
    name: { de: "Požarevac", hu: "Pozsarevác", ro: "Požarevac", en: "Požarevac" },
    description: {
      de: "Eine Stadt mit reicher Geschichte, bekannt als Ort wichtiger Friedensverträge.",
      hu: "Gazdag történelmű város, fontos békeszerződések helyszíneként ismert.",
      ro: "Un oraș cu o istorie bogată, cunoscut ca locul unor importante tratate de pace.",
      en: "A city with a rich history, known as the site of important peace treaties.",
      es: "Una ciudad con una rica historia, conocida como el lugar de importantes tratados de paz.",
      pt: "Uma cidade com uma história rica, conhecida como o local de importantes tratados de paz.",
      fr: "Une ville riche en histoire, connue comme le lieu d'importants traités de paix.",
    },
    facts: {
      de: ["Friede von Passarowitz", "Ljubičevo-Pferdespiele", "Etno-Park Tulba"],
      hu: ["Pozsareváci béke", "Ljubičevói lovasjátékok", "Tulba etnopark"],
      ro: ["Pacea de la Passarowitz", "Jocurile de cai Ljubičevo", "Etno-parcul Tulba"],
      en: ["Peace of Passarowitz", "Ljubičevo Horse Games", "Tulba ethno-park"],
      es: ["Paz de Passarowitz", "Juegos hípicos de Ljubičevo", "Parque étnico Tulba"],
      pt: ["Paz de Passarowitz", "Jogos hípicos de Ljubičevo", "Parque étnico Tulba"],
      fr: ["Paix de Passarowitz", "Jeux équestres de Ljubičevo", "Parc ethno Tulba"],
    },
    descriptionAdvanced: {
      de: "Požarevac ist das administrative Zentrum des Bezirks Braničevo und liegt im Osten Serbiens zwischen den Flüssen Donau, Morava und Mlava. Die Stadt erlangte weltweite historische Bedeutung durch den Frieden von Passarowitz (Požarevac) im Jahr 1718, der den Krieg zwischen Österreich und dem Osmanischen Reich beendete. Požarevac ist eng mit der serbischen Dynastie der Obrenović verbunden, was sich im Čačalica-Park und zahlreichen Denkmälern widerspiegelt. Ein kulturelles Highlight ist die Galerie von Milena Pavlović-Barilli, einer weltberühmten surrealistischen Malerin, die hier geboren wurde. Unweit der Stadt befinden sich die Überreste der römischen Metropole Viminacium, die einen Einblick in die antike Geschichte der Region bietet. Die Stadt ist zudem für ihre jährlichen Ljubičevo-Reitspiele bekannt, eine Tradition, die bis ins Jahr 1964 zurückreicht. Heute ist Požarevac ein wichtiges Industrie- und Landwirtschaftszentrum Serbiens.",
      hu: "Požarevac, magyarul Pozsarevác, a Braničevo körzet közigazgatási központja Kelet-Szerbiában, a Duna, a Morava és a Mlava folyók között. A város 1718-ban tett szert világtörténelmi jelentőségre a pozsareváci béke aláírásával, amely véget vetett az osztrák-török háborúnak. A település szorosan kötődik az Obrenović-dinasztiához, aminek emlékeit a Čačalica-park és számos emlékmű őrzi. Kiemelkedő kulturális látnivaló Milena Pavlović-Barilli, a világhírű szürrealista festőnő galériája, aki a város szülöttje volt. A város közvetlen közelében találhatók Viminacium római metropolisz maradványai, amelyek bepillantást engednek a régió antik történelmébe. Pozsarevác híres az évente megrendezett ljubičevói lovasjátékokról is, amelynek hagyománya 1964-ig nyúlik vissza. Napjainkban a város Szerbia egyik meghatározó ipari és mezőgazdasági központja.",
      ro: "Požarevac este centrul administrativ al districtului Braničevo, situat în estul Serbiei, între râurile Dunărea, Morava și Mlava. Orașul a căpătat o importanță istorică mondială prin Tratatul de la Passarowitz (Požarevac) din 1718, care a pus capăt războiului dintre Imperiul Austriac și cel Otoman. Požarevac este strâns legat de dinastia sârbă Obrenović, legătură reflectată în parcul Čačalica și în numeroase monumente. Un punct de atracție culturală major este Galeria Milena Pavlović-Barilli, dedicată celebrei pictorițe suprarealiste născute aici. În apropierea orașului se află situl arheologic Viminacium, fosta capitală a provinciei romane Moesia Superior. Orașul este cunoscut și pentru Jocurile Ecvestre de la Ljubičevo, o tradiție care a început în anul 1964. Astăzi, Požarevac reprezintă un punct economic esențial, îmbinând industria cu agricultura dezvoltată din valea Moravei.",
      en: "Požarevac is the administrative heart of the Braničevo District, located in eastern Serbia between the Danube, Morava, and Mlava rivers. The city gained global historical recognition through the Treaty of Passarowitz in 1718, which concluded the conflict between the Austrian and Ottoman Empires. Požarevac shares a deep historical connection with the Obrenović dynasty, evident in the Čačalica Park and various local monuments. A significant cultural highlight is the gallery dedicated to Milena Pavlović-Barilli, a world-renowned surrealist painter who was born in the city. Just a short distance from the center lie the extensive remains of Viminacium, once a major Roman provincial capital. The city is also famous for hosting the annual Ljubičevo Equestrian Games, a traditional event established in 1964. Today, Požarevac is a key industrial and agricultural hub, supporting the regional economy through manufacturing and food production.",
      es: "Požarevac se encuentra en el este de Serbia, entre los ríos Danubio, Morava y Mlava. La ciudad adquirió importancia histórica gracias a la Paz de Passarowitz en 1718. Un destino conocido es la caballeriza Ljubičevo, donde se celebran juegos ecuestres anuales. Cerca se encuentran también las importantes ruinas romanas de Viminacium.",
      pt: "Požarevac situa-se no leste da Sérvia, entre os rios Danúbio, Morava e Mlava. A cidade adquiriu importância histórica através da Paz de Passarowitz em 1718. Um destino conhecido é a coudelaria Ljubičevo, onde se realizam jogos hípicos anuais. Nas proximidades encontram-se também as importantes ruínas romanas de Viminacium.",
      fr: "Požarevac est située à l'est de la Serbie, entre le Danube, la Morava et la Mlava. La ville a acquis une importance historique grâce à la paix de Passarowitz en 1718. Une destination connue est le haras de Ljubičevo, où se déroulent chaque année des jeux équestres. À proximité se trouvent également les importantes ruines romaines de Viminacium.",
    },
    factsAdvanced: {
      de: ["Der Frieden von Passarowitz wurde am 21. Juli 1718 unterzeichnet.", "Die Galerie Milena Pavlović-Barilli wurde im Jahr 1962 eröffnet.", "Das Nationalmuseum von Požarevac wurde bereits 1895 gegründet.", "Die Ljubičevo-Reitspiele finden jedes Jahr am ersten Septemberwochenende statt.", "Die Stadt liegt auf einer durchschnittlichen Höhe von 94 Metern.", "Das Gestüt Ljubičevo ist das älteste in Serbien, gegründet im Jahr 1858."],
      hu: ["A pozsareváci békét 1718. július 21-én írták alá.", "A Milena Pavlović-Barilli Galéria 1962-ben nyitotta meg kapuit.", "A Pozsareváci Nemzeti Múzeumot 1895-ben alapították.", "A ljubičevói lovasjátékokat minden év szeptember első hétvégéjén rendezik.", "A város átlagos tengerszint feletti magassága 94 méter.", "A ljubičevói ménes Szerbia legrégebbi állami ménese, 1858-ban alapították."],
      ro: ["Tratatul de la Passarowitz a fost semnat pe data de 21 iulie 1718.", "Galeria Milena Pavlović-Barilli a fost inaugurată în anul 1962.", "Muzeul Național din Požarevac a fost înființat în anul 1895.", "Jocurile Ecvestre de la Ljubičevo au loc anual în primul weekend din septembrie.", "Orașul este situat la o altitudine medie de 94 de metri.", "Herghelia Ljubičevo este cea mai veche din Serbia, fiind fondată în 1858."],
      en: ["The Treaty of Passarowitz was signed on July 21, 1718.", "The Milena Pavlović-Barilli Gallery was officially opened in 1962.", "The Požarevac National Museum was established as early as 1895.", "The Ljubičevo Equestrian Games are held annually on the first weekend of September.", "The city sits at an average elevation of 94 meters above sea level.", "Ljubičevo Stable is the oldest state-owned stud farm in Serbia, founded in 1858."],
      es: ["La Paz de Passarowitz se firmó aquí el 21 de julio de 1718.", "Hogar de la Galería Barili, dedicada a la pintora Milena Pavlović-Barili.", "Los juegos hípicos de Ljubičevo muestran habilidades ecuestres tradicionales serbias.", "Sirvió al príncipe Miloš Obrenović como segunda capital del país.", "Centro administrativo del distrito de Braničevo en el este de Serbia.", "La ciudad alberga el Museo Nacional con hallazgos arqueológicos."],
      pt: ["A Paz de Passarowitz foi assinada aqui em 21 de julho de 1718.", "Sede da Galeria Barili, dedicada à pintora Milena Pavlović-Barili.", "Os jogos hípicos de Ljubičevo mostram habilidades equestres tradicionais sérvias.", "Serviu o príncipe Miloš Obrenović como segunda capital do país.", "Centro administrativo do distrito de Braničevo, no leste da Sérvia.", "A cidade abriga o Museu Nacional com achados arqueológicos."],
      fr: ["La paix de Passarowitz y fut signée le 21 juillet 1718.", "Siège de la galerie Barili, dédiée à la peintre Milena Pavlović-Barili.", "Les jeux équestres de Ljubičevo présentent les arts équestres traditionnels serbes.", "Servit de seconde capitale du pays au prince Miloš Obrenović.", "Centre administratif du district de Braničevo à l'est de la Serbie.", "La ville abrite le Musée national avec des découvertes archéologiques."],
    },
    image: "/poi-images/RS-018-pozarevac.webp",
  },
  {
    id: "RS-018-viminacium", "sights": {
      "de": [
            {
                  "name": "Kuća Kapetana Todića",
                  "text": "Ein denkmalgeschütztes Gebäude und Denkmal in der Nähe der antiken Stätte Viminacium.",
                  "category": "historical",
                  "coords": [
                        21.190896,
                        44.740304
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kuća Kapetana Todića",
                  "text": "Műemléki épület Viminacium ókori lelőhelyének közelében.",
                  "category": "historical",
                  "coords": [
                        21.190896,
                        44.740304
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kuća Kapetana Todića",
                  "text": "O clădire protejată și monument în apropierea sitului antic Viminacium.",
                  "category": "historical",
                  "coords": [
                        21.190896,
                        44.740304
                  ]
            }
      ],
      "en": [
            {
                  "name": "Kuća Kapetana Todića",
                  "text": "A protected building and monument located near the ancient site of Viminacium.",
                  "category": "historical",
                  "coords": [
                        21.190896,
                        44.740304
                  ]
            }
      ]
},
    type: "historical",
    parent: "RS-018",
    coords: [21.1700, 44.7300],
    name: { de: "Viminacium", hu: "Viminacium", ro: "Viminacium", en: "Viminacium" },
    description: {
      de: "Eine bedeutende römische Stadt und Militärlager, die Hauptstadt der Provinz Moesia Superior.",
      hu: "Jelentős római város és katonai tábor, Moesia Superior tartomány fővárosa.",
      ro: "Un oraș roman important și tabără militară, capitala provinciei Moesia Superior.",
      en: "An important Roman city and military camp, the capital of the province Moesia Superior.",
      es: "Una importante ciudad romana y campamento militar, capital de la provincia de Moesia Superior.",
      pt: "Uma importante cidade romana e acampamento militar, capital da província de Moesia Superior.",
      fr: "Une importante ville romaine et camp militaire, capitale de la province de Mésie supérieure.",
    },
    facts: {
      de: ["Archäologischer Park", "Römische Gräber", "Mammut-Skelette gefunden"],
      hu: ["Régészeti park", "Római sírok", "Mammutcsontvázak lelethelye"],
      ro: ["Parc arheologic", "Morminte romane", "Schelete de mamut găsite"],
      en: ["Archaeological park", "Roman tombs", "Mammoth skeletons found"],
      es: ["Parque arqueológico", "Tumbas romanas", "Esqueletos de mamut hallados"],
      pt: ["Parque arqueológico", "Túmulos romanos", "Esqueletos de mamute encontrados"],
      fr: ["Parc archéologique", "Tombes romaines", "Squelettes de mammouth trouvés"],
    }, image: "/poi-images/RS-018-viminacium.webp",
    descriptionAdvanced: {
      de: "Viminacium war eine bedeutende römische Stadt und das Militärlager der Legio VII Claudia sowie die Hauptstadt der Provinz Moesia Superior. Die archäologische Stätte liegt in der Nähe des heutigen Kostolac, etwa 12 Kilometer von Požarevac entfernt. Zur Zeit seiner Blüte im 2. und 3. Jahrhundert n. Chr. war Viminacium eine Metropole mit schätzungsweise 40.000 Einwohnern und besaß den Status eines Municipiums und später einer Kolonie. Die Ausgrabungen haben beeindruckende Strukturen wie ein Amphitheater, öffentliche Bäder, ein Aquädukt und ausgedehnte Nekropolen mit über 14.000 Gräbern freigelegt. Einzigartig ist der Fund von Mammut-Skeletten, darunter das fast vollständig erhaltene Mammut 'Vika', das im dortigen Mammut-Park ausgestellt ist. Das heutige Viminacium ist ein hochmoderner archäologischer Park mit einem rekonstruierten römischen Domus. Es gilt als eines der wichtigsten Zeugnisse der römischen Herrschaft auf dem Balkan und zieht Besucher aus aller Welt an.",
      hu: "Viminacium az ókori Római Birodalom egyik jelentős városa, a Legio VII Claudia katonai tábora és Moesia Superior provincia fővárosa volt. A régészeti lelőhely a mai Kostolac közelében, Pozsareváctól mintegy 12 kilométerre található. Virágkorában, az i.sz. 2. és 3. században Viminacium egy 40 000 lakosú metropolisz volt, amely előbb municipium, majd colonia rangot kapott. Az ásatások során lenyűgöző építmények kerültek elő, többek között egy amfiteátrum, nyilvános fürdők, egy akvadukt és kiterjedt nekropoliszok több mint 14 000 sírral. Világszinten is egyedülálló lelet a területen talált több mamutcsontváz, köztük a szinte teljes épségben megmaradt 'Vika' nevű mamut, amelyet a helyi Mamut Parkban állítottak ki. A mai Viminacium egy modern régészeti park, rekonstruált római lakóházzal (Domus). A Balkán egyik legfontosabb római kori emlékhelyeként tartják számon.",
      ro: "Viminacium a fost un important oraș roman și tabără militară a Legiunii a VII-a Claudia, servind drept capitală a provinciei Moesia Superior. Situl arheologic este situat în apropierea actualului oraș Kostolac, la aproximativ 12 kilometri de Požarevac. În perioada sa de apogeu, în secolele II și III d.Hr., Viminacium era o metropolă cu o populație estimată la 40.000 de locuitori, deținând statutul de municipiu și ulterior de colonie. Săpăturile au scos la iveală structuri impresionante, cum ar fi un amfiteatru, băi publice, un apeduct și necropole vaste cu peste 14.000 de morminte. O descoperire unică în acest sit este cimitirul de mamuți, unde se află scheletul aproape complet al mamutului 'Vika'. Astăzi, Viminacium este un parc arheologic modern, dotat cu un Domus roman reconstruit și facilități pentru cercetare. Reprezintă una dintre cele mai semnificative dovezi ale prezenței romane în Balcani și pe cursul Dunării.",
      en: "Viminacium was a major Roman city and the military camp of the Legio VII Claudia, functioning as the capital of the Moesia Superior province. The archaeological site is located near present-day Kostolac, approximately 12 kilometers from Požarevac. During its peak in the 2nd and 3rd centuries AD, Viminacium was a thriving metropolis with an estimated population of 40,000, holding the status of a municipium and later a colony. Excavations have revealed remarkable structures, including an amphitheater, public baths, an extensive aqueduct, and necropolises containing over 14.000 tombs. A truly unique feature of the site is the discovery of mammoth skeletons, notably the nearly intact remains of 'Vika', housed in a dedicated Mammoth Park. Today, Viminacium operates as a state-of-the-art archaeological park featuring a reconstructed Roman Domus. It stands as one of the most important testimonies to Roman civilization in the Balkans.",
      es: "Viminacium fue una importante ciudad romana y un campamento militar cerca de la actual Kostolac. Como capital de la provincia de Moesia Superior, fue un centro estratégico en el limes del Danubio. Hoy, el sitio es conocido por sus termas bien conservadas, el anfiteatro y los mausoleos. También es espectacular el hallazgo de un esqueleto de mamut.",
      pt: "Viminacium foi uma importante cidade romana e um acampamento militar perto da atual Kostolac. Como capital da província de Moesia Superior, foi um centro estratégico no limes do Danúbio. Hoje, o local é conhecido pelas suas termas bem preservadas, o anfiteatro e mausoléus. Também é espetacular a descoberta de um esqueleto de mamute.",
      fr: "Viminacium était une importante ville romaine et un camp militaire près de l'actuelle Kostolac. En tant que capitale de la province de Mésie supérieure, elle était un centre stratégique sur le limes du Danube. Aujourd'hui, le site est connu pour ses thermes bien conservés, son amphithéâtre et ses mausolées. La découverte d'un squelette de mammouth est également spectaculaire.",
    },
    factsAdvanced: {
      de: ["Viminacium erhielt im Jahr 239 n. Chr. den Status einer Kolonie.", "Das Mammut-Skelett 'Vika' ist etwa 5 Millionen Jahre alt.", "Archäologen haben bisher mehr als 14.000 römische Gräber dokumentiert.", "Das Amphitheater bot Platz für rund 12.000 Zuschauer.", "Das römische Aquädukt von Viminacium war etwa 10 Kilometer lang.", "Die Stadt wurde im Jahr 441 n. Chr. von den Hunnen zerstört."],
      hu: ["Viminacium i.sz. 239-ben kapta meg a colonia rangot.", "A 'Vika' nevű mamut csontváza körülbelül 5 millió éves.", "A régészek eddig több mint 14 000 római kori sírt tártak fel.", "Az amfiteátrum befogadóképessége körülbelül 12 000 fő volt.", "Viminacium római vízvezetéke mintegy 10 kilométer hosszú volt.", "A várost i.sz. 441-ben a hunok rombolták le."],
      ro: ["Viminacium a primit statutul de colonie în anul 239 d.Hr.", "Scheletul mamutului 'Vika' are o vechime de aproximativ 5 milioane de ani.", "Arheologii au documentat până în prezent peste 14.000 de morminte romane.", "Amfiteatrul avea o capacitate de aproximativ 12.000 de spectatori.", "Apeductul roman care deservea orașul avea o lungime de circa 10 kilometri.", "Orașul a fost distrus de huni în anul 441 d.Hr."],
      en: ["Viminacium was granted the status of a colony in 239 AD.", "The mammoth skeleton 'Vika' is estimated to be 5 million years old.", "Archaeologists have uncovered more than 14,000 Roman-era graves at the site.", "The local amphitheater could accommodate roughly 12,000 spectators.", "The Roman aqueduct supplying the city was approximately 10 kilometers long.", "The city was significantly destroyed by the Huns in 441 AD."],
      es: ["Fundada en el siglo I d. C. como campamento de la Legio VII Claudia.", "Alcanzó el estatus de colonia romana en el año 239 d. C.", "Abarcaba una superficie de más de 450 hectáreas en su apogeo.", "El esqueleto de mamut Vika fue hallado en 2009 a 27 metros de profundidad.", "Alberga un moderno centro de investigación y un parque temático.", "Miles de tumbas romanas y frescos han sido excavados aquí."],
      pt: ["Fundada no século I d.C. como acampamento da Legio VII Claudia.", "Atingiu o estatuto de colónia romana no ano 239 d.C.", "Abrangeu uma área de mais de 450 hectares no seu apogeu.", "O esqueleto de mamute Vika foi encontrado em 2009 a 27 metros de profundidade.", "Abriga um moderno centro de investigação e um parque de aventuras.", "Milhares de túmulos romanos e frescos foram escavados aqui."],
      fr: ["Fondée au Ier siècle apr. J.-C. comme camp de la Legio VII Claudia.", "A atteint le statut de colonie romaine en 239 apr. J.-C.", "Couvrait une superficie de plus de 450 hectares à son apogée.", "Le squelette de mammouth Vika a été trouvé en 2009 à 27 mètres de profondeur.", "Abrite un centre de recherche moderne et un parc d'aventure.", "Des milliers de tombes romaines et de fresques y ont été exhumées."],
    },
  },
  // RS-019 Grad Beograd
  // RS-020 Podunavski
  {
    id: "RS-020-smederevo-city", "sights": {
      "de": [
            {
                  "name": "Provala",
                  "text": "Провала ist ein See in Smederevo, ideal um die natürliche Landschaft und frische Luft zu genießen.",
                  "category": "natural",
                  "coords": [
                        20.858769,
                        44.66798
                  ]
            },
            {
                  "name": "Šalinačka jezera",
                  "text": "Die Šalinac-Seen befinden sich in Smederevo und bieten eine ruhige Umgebung für einen Spaziergang.",
                  "category": "natural",
                  "coords": [
                        20.987383,
                        44.68081
                  ]
            },
            {
                  "name": "Basket Park",
                  "text": "Basket Park ist ein Spielplatz in Smederevo mit Einrichtungen für Kinderspiele und Aktivitäten.",
                  "category": "family",
                  "coords": [
                        20.913778,
                        44.664595
                  ]
            },
            {
                  "name": "Смедеревска тврђава",
                  "text": "Eine der größten mittelalterlichen Festungen Europas, gelegen am Ufer der Donau.",
                  "category": "castle",
                  "coords": [
                        20.927822,
                        44.669408
                  ]
            },
            {
                  "name": "Остаци хамама",
                  "text": "Ruinen eines historischen türkischen Bades aus der Zeit der osmanischen Herrschaft.",
                  "category": "historical",
                  "coords": [
                        20.927418,
                        44.670384
                  ]
            },
            {
                  "name": "Остаци цркве",
                  "text": "Überreste einer mittelalterlichen Kirche innerhalb des Festungskomplexes von Smederevo.",
                  "category": "historical",
                  "coords": [
                        20.929735,
                        44.668464
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Provala",
                  "text": "A Провала egy tó Szendrő városában, amely ideális a természetes táj és a friss levegő élvezetéhez.",
                  "category": "natural",
                  "coords": [
                        20.858769,
                        44.66798
                  ]
            },
            {
                  "name": "Šalinačka jezera",
                  "text": "A Šalinaci-tavak Szendrő városában találhatók, nyugodt környezetet biztosítva a sétához.",
                  "category": "natural",
                  "coords": [
                        20.987383,
                        44.68081
                  ]
            },
            {
                  "name": "Basket Park",
                  "text": "A Basket Park egy játszótér Szendrő városában, ahol játékok és tevékenységek várják a gyerekeket.",
                  "category": "family",
                  "coords": [
                        20.913778,
                        44.664595
                  ]
            },
            {
                  "name": "Szendrő vára",
                  "text": "Európa egyik legnagyobb középkori erődje, amely a Duna partján fekszik.",
                  "category": "castle",
                  "coords": [
                        20.927822,
                        44.669408
                  ]
            },
            {
                  "name": "Остаци хамама",
                  "text": "Török hódoltság idejéből származó történelmi törökfürdő romjai.",
                  "category": "historical",
                  "coords": [
                        20.927418,
                        44.670384
                  ]
            },
            {
                  "name": "Остаци цркве",
                  "text": "Egy középkori templom maradványai a szendrői erődkomplexumon belül.",
                  "category": "historical",
                  "coords": [
                        20.929735,
                        44.668464
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Provala",
                  "text": "Провала este un lac în Smederevo, ideal pentru a te bucura de peisajul natural și aerul curat.",
                  "category": "natural",
                  "coords": [
                        20.858769,
                        44.66798
                  ]
            },
            {
                  "name": "Šalinačka jezera",
                  "text": "Lacurile Šalinac sunt situate în Smederevo, oferind un mediu liniștit pentru o plimbare.",
                  "category": "natural",
                  "coords": [
                        20.987383,
                        44.68081
                  ]
            },
            {
                  "name": "Basket Park",
                  "text": "Basket Park este un teren de joacă în Smederevo, cu facilități pentru joacă și activități pentru copii.",
                  "category": "family",
                  "coords": [
                        20.913778,
                        44.664595
                  ]
            },
            {
                  "name": "Смедеревска тврђава",
                  "text": "Una dintre cele mai mari cetăți medievale din Europa, situată pe malul Dunării.",
                  "category": "castle",
                  "coords": [
                        20.927822,
                        44.669408
                  ]
            },
            {
                  "name": "Остаци хамама",
                  "text": "Ruinele unei băi turcești istorice din perioada dominației otomane.",
                  "category": "historical",
                  "coords": [
                        20.927418,
                        44.670384
                  ]
            },
            {
                  "name": "Остаци цркве",
                  "text": "Rămășițele unei biserici medievale din interiorul complexului cetății Smederevo.",
                  "category": "historical",
                  "coords": [
                        20.929735,
                        44.668464
                  ]
            }
      ],
      "en": [
            {
                  "name": "Provala",
                  "text": "Провала is a lake in Smederevo, ideal for enjoying the natural scenery and fresh air.",
                  "category": "natural",
                  "coords": [
                        20.858769,
                        44.66798
                  ]
            },
            {
                  "name": "Šalinac lakes",
                  "text": "Šalinac lakes are situated in Smederevo, providing a calm environment for a walk.",
                  "category": "natural",
                  "coords": [
                        20.987383,
                        44.68081
                  ]
            },
            {
                  "name": "Basket Park",
                  "text": "Basket Park is a playground in Smederevo with facilities for children's play and activities.",
                  "category": "family",
                  "coords": [
                        20.913778,
                        44.664595
                  ]
            },
            {
                  "name": "Smederevo Fortress",
                  "text": "One of the largest medieval fortresses in Europe, situated on the banks of the Danube.",
                  "category": "castle",
                  "coords": [
                        20.927822,
                        44.669408
                  ]
            },
            {
                  "name": "Hamam ruins",
                  "text": "Ruins of a historic Turkish bath dating back to the period of Ottoman rule.",
                  "category": "historical",
                  "coords": [
                        20.927418,
                        44.670384
                  ]
            },
            {
                  "name": "Church ruins",
                  "text": "Remains of a medieval church located within the Smederevo fortress complex.",
                  "category": "historical",
                  "coords": [
                        20.929735,
                        44.668464
                  ]
            }
      ]
},
    type: "city",
    parent: "RS-020",
    coords: [20.9300, 44.6628],
    name: { de: "Smederevo", hu: "Szendrő", ro: "Smederevo", en: "Smederevo" },
    description: {
      de: "Eine historische Stadt an der Donau, ehemalige Hauptstadt Serbiens im Mittelalter.",
      hu: "Történelmi város a Duna mentén, Szerbia egykori fővárosa a középkorban.",
      ro: "Un oraș istoric pe Dunăre, fostă capitală a Serbiei în Evul Mediu.",
      en: "A historical city on the Danube, former capital of Serbia in the Middle Ages.",
      es: "Una ciudad histórica a orillas del Danubio, antigua capital de Serbia en la Edad Media.",
      pt: "Uma cidade histórica no Danúbio, antiga capital da Sérvia na Idade Média.",
      fr: "Une ville historique sur le Danube, ancienne capitale de la Serbie au Moyen Âge.",
    },
    facts: {
      de: ["An der Donau", "Obstbaugebiet", "Großer Industriestandort"],
      hu: ["A Duna mentén", "Gyümölcstermesztő vidék", "Jelentős ipari központ"],
      ro: ["Pe malul Dunării", "Zonă pomicolă", "Centru industrial major"],
      en: ["On the Danube", "Fruit growing area", "Major industrial site"],
      es: ["A orillas del Danubio", "Zona frutícola", "Gran centro industrial"],
      pt: ["No rio Danúbio", "Região de fruticultura", "Grande centro industrial"],
      fr: ["Sur le Danube", "Région arboricole", "Grand site industriel"],
    },
    descriptionAdvanced: {
      de: "Smederevo liegt am rechten Donauufer, etwa 45 Kilometer flussabwärts von Belgrad, und ist bekannt für seine monumentale mittelalterliche Festung. Die Stadt wurde im 15. Jahrhundert zur Hauptstadt des serbischen Despotats, nachdem Belgrad an Ungarn zurückgegeben worden war. Die Festung von Smederevo, erbaut von Despot Đurađ Branković zwischen 1427 und 1430, ist eine der größten Flachlandfestungen Europas und ein herausragendes Beispiel mittelalterlicher Militärarchitektur. Mit ihren 25 massiven Türmen und der Dreiecksform diente sie als letztes Bollwerk gegen die osmanische Expansion. Neben ihrer historischen Bedeutung ist Smederevo ein wichtiges Zentrum des Weinbaus, berühmt für die einheimische Rebsorte 'Smederevka'. Das jährliche Festival 'Smederevska jesen' (Herbst von Smederevo) feiert die Weinlese und die reiche Geschichte der Stadt. Heute ist Smederevo ein bedeutendes Industriezentrum mit einem großen Stahlwerk und einem strategisch wichtigen Donauhafen.",
      hu: "Smederevo, magyarul Szendrő, a Duna jobb partján fekszik, mintegy 45 kilométerre Belgrádtól, és monumentális középkori váráról híres. A város a 15. században a Szerb Despotátus fővárosává vált, miután Belgrád visszakerült Magyarországhoz. A szendrői várat Brankovics György despota építtette 1427 és 1430 között; ez Európa egyik legnagyobb síkvidéki erődítménye és a középkori hadiépítészet kiemelkedő példája. 25 hatalmas tornyával és háromszögletű alaprajzával az oszmán terjeszkedés elleni utolsó bástyaként szolgált. Történelmi jelentősége mellett Szendrő a szőlőtermesztés fontos központja, híres az őshonos 'Smederevka' szőlőfajtáról. Az évente megrendezett 'Smederevska jesen' (Szendrői Ősz) fesztivál a szüretet és a város gazdag múltját ünnepli. Ma Szendrő jelentős ipari központ, nagy acélművel és stratégiai fontosságú dunai kikötővel.",
      ro: "Smederevo este situat pe malul drept al Dunării, la aproximativ 45 de kilometri în aval de Belgrad, fiind renumit pentru monumentala sa cetate medievală. Orașul a devenit capitala Despotatului Serbiei în secolul al XV-lea, după ce Belgradul a fost retrocedat Ungariei. Cetatea Smederevo, construită de despotul Đurađ Branković între 1427 și 1430, este una dintre cele mai mari fortificații de câmpie din Europa și un exemplu remarcabil de arhitectură militară medievală. Cu cele 25 de turnuri masive și forma sa triunghiulară, a servit ca ultim bastion împotriva expansiunii otomane. Pe lângă importanța sa istorică, Smederevo este un centru major al viticulturii, faimos pentru soiul de struguri autohton 'Smederevka'. Festivalul anual 'Toamna din Smederevo' celebrează recolta de vin și istoria bogată a orașului. În prezent, Smederevo este un centru industrial de importanță națională, găzduind un mare combinat siderurgic și un port dunărean strategic.",
      en: "Smederevo is situated on the right bank of the Danube, about 45 kilometers downstream from Belgrade, and is primarily known for its monumental medieval fortress. The city became the capital of the Serbian Despotate in the 15th century after Belgrade was returned to Hungary. Smederevo Fortress, built by Despot Đurađ Branković between 1427 and 1430, stands as one of the largest lowland fortifications in Europe and a masterpiece of medieval military engineering. Featuring 25 massive towers and a distinctive triangular layout, it served as the final major stronghold against Ottoman expansion. Beyond its historical prestige, Smederevo is a vital center for viticulture, famous for the indigenous 'Smederevka' white grape variety. The annual 'Smederevo Autumn' festival celebrates the harvest and the city's enduring historical legacy. Today, Smederevo is a significant industrial hub, home to a major steel mill and a strategically important Danube port.",
      es: "Smederevo se encuentra en la margen derecha del Danubio y es famosa por su enorme fortaleza medieval. Fue construida en el siglo XV por el déspota Đurađ Branković como nueva capital de Serbia. La fortaleza es considerada uno de los castillos de llanura más grandes de Europa. Hoy, la ciudad es un centro de la industria siderúrgica y la viticultura.",
      pt: "Smederevo situa-se na margem direita do Danúbio e é conhecida pela sua enorme fortaleza medieval. Foi construída no século XV pelo déspota Đurađ Branković como a nova capital da Sérvia. A fortaleza é considerada um dos maiores castelos de planície da Europa. Hoje, a cidade é um centro da indústria do aço e da viticultura.",
      fr: "Smederevo est située sur la rive droite du Danube et est connue pour son immense forteresse médiévale. Elle fut érigée au XVe siècle par le despote Đurađ Branković comme nouvelle capitale de la Serbie. La forteresse est considérée comme l'un des plus grands châteaux de plaine d'Europe. Aujourd'hui, la ville est un centre de l'industrie sidérurgique et de la viticulture.",
    },
    factsAdvanced: {
      de: ["Die Festung Smederevo umfasst eine Fläche von etwa 10 Hektar.", "Smederevo war von 1430 bis 1459 die Hauptstadt Serbiens.", "Die Festungsmauern sind an einigen Stellen bis zu 4 Meter dick.", "Das Stahlwerk von Smederevo wurde ursprünglich im Jahr 1913 gegründet.", "Die Stadt beherbergt eine alte Platane, die über 180 Jahre alt ist.", "Das Festival 'Smederevska jesen' findet seit 1888 regelmäßig statt."],
      hu: ["A szendrői vár területe körülbelül 10 hektárt foglal el.", "Szendrő 1430 és 1459 között volt Szerbia fővárosa.", "A várfalak vastagsága helyenként eléri a 4 métert.", "A szendrői acélművet eredetileg 1913-ban alapították.", "A városban található egy öreg platánfa, amely több mint 180 éves.", "A 'Szendrői Ősz' fesztivált 1888 óta rendezik meg rendszeresen."],
      ro: ["Cetatea Smederevo se întinde pe o suprafață de aproximativ 10 hectare.", "Smederevo a servit drept capitală a Serbiei între anii 1430 și 1459.", "Zidurile fortăreței au o grosime de până la 4 metri în anumite secțiuni.", "Combinatul siderurgic din Smederevo a fost fondat inițial în anul 1913.", "Orașul găzduiește un platan secular care are o vechime de peste 180 de ani.", "Festivalul 'Toamna din Smederevo' este organizat periodic încă din 1888."],
      en: ["The Smederevo Fortress covers an area of approximately 10 hectares.", "Smederevo functioned as the capital of Serbia from 1430 to 1459.", "The fortress walls reach a thickness of up to 4 meters in some parts.", "The Smederevo steelworks was originally established in 1913.", "The city is home to an ancient plane tree that is over 180 years old.", "The 'Smederevo Autumn' festival has been held since 1888."],
      es: ["La fortaleza de Smederevo cuenta con 25 torres macizas.", "Fue la última capital medieval de Serbia antes de la conquista.", "La fortaleza fue construida en solo dos años, de 1428 a 1430.", "Conocida por la variedad de uva blanca Smederevka y el vino homónimo.", "La iglesia principal en el centro de la ciudad está dedicada a San Jorge.", "Sede del gobierno serbio durante el Primer Levantamiento Serbio."],
      pt: ["A fortaleza de Smederevo possui 25 torres maciças.", "Foi a última capital medieval da Sérvia antes da conquista.", "A fortaleza foi construída em apenas dois anos, de 1428 a 1430.", "Conhecida pela casta de uva branca Smederevka e pelo vinho homónimo.", "A igreja principal no centro da cidade é dedicada a São Jorge.", "Sede do governo sérvio durante a Primeira Revolta Sérvia."],
      fr: ["La forteresse de Smederevo possède 25 tours massives.", "Fut la dernière capitale médiévale de la Serbie avant la conquête.", "La forteresse fut construite en seulement deux ans, de 1428 à 1430.", "Connue pour le cépage blanc Smederevka et le vin du même nom.", "L'église principale du centre-ville est dédiée à Saint Georges.", "Siège du gouvernement serbe pendant le premier soulèvement serbe."],
    },
    image: "/poi-images/RS-020-smederevo-city.webp",
  },
  // RS-021 Nišavski
  // RS-022 Pomoravski (Rasinski/South area) -> Kruševac
  {
    id: "RS-022-krusevac", "sights": {"de": [{"name": "Kruševačko pozorište", "text": "Das Theater von Kruševac ist ein lokaler Veranstaltungsort für darstellende Künste in Kruševac.", "category": "cultural", "coords": [21.328989, 43.580807]}, {"name": "Otvoreni bazeni Kruševac", "text": "Die Freibäder von Kruševac sind ein beliebter Wasserpark und Erholungsort in Kruševac.", "category": "family", "coords": [21.328923, 43.573785]}, {"name": "Narodni muzej Kruševac", "text": "Das Nationalmuseum ist eine wichtige Einrichtung, die die Geschichte und Kultur von Kruševac bewahrt.", "category": "museum", "coords": [21.321548, 43.583477]}, {"name": "Spomen park Slobodište", "text": "Der Gedenkpark Slobodište ist eine feierliche Gedenkstätte in Kruševac zu Ehren der Opfer des Zweiten Weltkriegs.", "category": "park", "coords": [21.331734, 43.562236]}, {"name": "Staro groblje", "text": "Der Alte Friedhof ist eine historische Sehenswürdigkeit und eine ruhige Ruhestätte in Kruševac.", "category": "landmark", "coords": [21.314075, 43.579984]}, {"name": "Galerija Plavo i Zlatno", "text": "Die Galerie Blau und Gold ist ein lokaler Kunstraum in Kruševac, der visuelle Ausstellungen zeigt.", "category": "museum", "coords": [21.32536, 43.580603]}, {"name": "Spomenik kosovskim junacima", "text": "Das Denkmal der Kosovo-Helden ist ein markantes Gedenkbauwerk in Kruševac.", "category": "historical", "coords": [21.32679, 43.582473]}], "hu": [{"name": "Kruševačko pozorište", "text": "A Kruševaci Színház egy helyi előadóművészeti központ Kruševac városában.", "category": "cultural", "coords": [21.328989, 43.580807]}, {"name": "Otvoreni bazeni Kruševac", "text": "A Kruševaci Nyitott Medencék egy népszerű vízipark és rekreációs terület Kruševacban.", "category": "family", "coords": [21.328923, 43.573785]}, {"name": "Narodni muzej Kruševac", "text": "A Nemzeti Múzeum egy fontos intézmény, amely Kruševac történelmét és kultúráját őrzi.", "category": "museum", "coords": [21.321548, 43.583477]}, {"name": "Spomen park Slobodište", "text": "A Slobodište Emlékpark egy ünnepélyes emlékkomplexum Kruševacban a második világháború áldozatainak tiszteletére.", "category": "park", "coords": [21.331734, 43.562236]}, {"name": "Staro groblje", "text": "A Régi temető egy történelmi látványosság és csendes nyughely Kruševacban.", "category": "landmark", "coords": [21.314075, 43.579984]}, {"name": "Galerija Plavo i Zlatno", "text": "A Kék és Arany Galéria egy helyi művészeti tér, amely vizuális kiállításokat mutat be Kruševacban.", "category": "museum", "coords": [21.32536, 43.580603]}, {"name": "Spomenik kosovskim junacima", "text": "A rigómezei hősök emlékműve egy nevezetes megemlékező építmény Kruševacban.", "category": "historical", "coords": [21.32679, 43.582473]}], "ro": [{"name": "Kruševačko pozorište", "text": "Teatrul Kruševac este o sală locală de spectacole situată în Kruševac.", "category": "cultural", "coords": [21.328989, 43.580807]}, {"name": "Otvoreni bazeni Kruševac", "text": "Piscinele Deschise Kruševac reprezintă un parc acvatic și o zonă de agrement populară în Kruševac.", "category": "family", "coords": [21.328923, 43.573785]}, {"name": "Narodni muzej Kruševac", "text": "Muzeul Național este o instituție importantă care păstrează istoria și cultura orașului Kruševac.", "category": "museum", "coords": [21.321548, 43.583477]}, {"name": "Spomen park Slobodište", "text": "Parcul Memorial Slobodište este un complex comemorativ solemn în Kruševac, onorând victimele celui de-al Doilea Război Mondial.", "category": "park", "coords": [21.331734, 43.562236]}, {"name": "Staro groblje", "text": "Vechiul Cimitir este o atracție istorică și un loc de odihnă liniștit situat în Kruševac.", "category": "landmark", "coords": [21.314075, 43.579984]}, {"name": "Galerija Plavo i Zlatno", "text": "Galeria Albastru și Aur este un spațiu de artă local care găzduiește expoziții vizuale în Kruševac.", "category": "museum", "coords": [21.32536, 43.580603]}, {"name": "Spomenik kosovskim junacima", "text": "Monumentul Eroilor din Kosovo este o structură comemorativă de referință situată în Kruševac.", "category": "historical", "coords": [21.32679, 43.582473]}], "en": [{"name": "Kruševačko pozorište", "text": "Kruševac Theatre is a local performing arts venue situated in Kruševac.", "category": "cultural", "coords": [21.328989, 43.580807]}, {"name": "Otvoreni bazeni Kruševac", "text": "Kruševac Open Pools is a popular water park and recreational area in Kruševac.", "category": "family", "coords": [21.328923, 43.573785]}, {"name": "National Museum", "text": "The National Museum is an important institution preserving the history and culture of Kruševac.", "category": "museum", "coords": [21.321548, 43.583477]}, {"name": "Spomen park Slobodište", "text": "Slobodište Memorial Park is a solemn commemorative complex in Kruševac honoring the victims of World War II.", "category": "park", "coords": [21.331734, 43.562236]}, {"name": "Staro groblje", "text": "The Old Cemetery is a historic attraction and quiet resting place located in Kruševac.", "category": "landmark", "coords": [21.314075, 43.579984]}, {"name": "Galerija Plavo i Zlatno", "text": "The Blue and Gold Gallery is a local art space showcasing visual exhibitions in Kruševac.", "category": "museum", "coords": [21.32536, 43.580603]}, {"name": "Monument to the Kosovo Heroes", "text": "The Monument to the Kosovo Heroes is a landmark commemorative structure situated in Kruševac.", "category": "historical", "coords": [21.32679, 43.582473]}]},
    type: "city",
    parent: "RS-022",
    coords: [21.3339, 43.5800],
    name: { de: "Kruševac", hu: "Kruševac", ro: "Kruševac", en: "Kruševac" },
    description: {
      de: "Die mittelalterliche Hauptstadt Serbiens zur Zeit des Fürsten Lazar.",
      hu: "Szerbia középkori fővárosa Lázár fejedelem idején.",
      ro: "Capitala medievală a Serbiei în timpul prințului Lazar.",
      en: "The medieval capital of Serbia during the time of Prince Lazar.",
      es: "La capital medieval de Serbia en tiempos del príncipe Lazar.",
      pt: "A capital medieval da Sérvia no tempo do príncipe Lazar.",
      fr: "La capitale médiévale de la Serbie à l'époque du prince Lazar.",
    },
    facts: {
      de: ["Lazar-Stadt (Lazarevac)", "Lazarica-Kirche", "Kosovo-Epos Verbindung"],
      hu: ["Lázár városa (Lazarevac)", "Lazarica-templom", "Kapcsolat a rigómezei éposszal"],
      ro: ["Orașul lui Lazar", "Biserica Lazarica", "Legătura cu epopeea Kosovo"],
      en: ["Lazar's City", "Lazarica Church", "Link to the Kosovo epic"],
      es: ["Ciudad de Lazar (Lazarevac)", "Iglesia Lazarica", "Vínculo con la epopeya de Kosovo"],
      pt: ["Cidade de Lazar (Lazarevac)", "Igreja Lazarica", "Ligação à epopeia do Kosovo"],
      fr: ["Cité de Lazar (Lazarevac)", "Église Lazarica", "Lien avec l'épopée du Kosovo"],
    },
    descriptionAdvanced: {
      de: "Kruševac liegt im Tal der Westlichen Morava und ist eine Stadt von enormer historischer Bedeutung für Serbien. Sie wurde 1371 von Fürst Lazar Hrebeljanović als seine Hauptstadt gegründet und diente als politisches und kulturelles Zentrum des mittelalterlichen Serbiens vor der schicksalhaften Schlacht auf dem Amselfeld. Das Herzstück der historischen Stätte ist die Kirche Lazarica, ein Meisterwerk der Morava-Schule, die zu Ehren der Geburt des Sohnes von Fürst Lazar, Stefan Lazarević, erbaut wurde. Von der einst mächtigen Festung sind heute nur noch Ruinen erhalten, darunter der Donjon-Turm. Die Stadt ist stolz auf ihr Nationalmuseum und das Denkmal für die Helden der Kosovo-Schlacht, das die nationale Identität symbolisiert. Kruševac hat sich im 20. Jahrhundert zu einem bedeutenden Industriezentrum für Chemie und Maschinenbau entwickelt. Die Kombination aus mittelalterlichem Erbe und moderner wirtschaftlicher Dynamik macht die Stadt zu einem wichtigen kulturellen Ziel in Zentralserbien.",
      hu: "Kruševac a Nyugati-Morava völgyében fekszik, és Szerbia számára hatalmas történelmi jelentőséggel bíró város. 1371-ben Lázár Hrebeljanović fejedelem alapította fővárosaként, és a középkori Szerbia politikai és kulturális központjaként szolgált a sorsfordító rigómezei csata előtt. A történelmi helyszín központi eleme a Lazarica-templom, a morva építészeti iskola remekműve, amelyet Lázár fejedelem fia, Stefan Lazarević születésének tiszteletére emeltek. Az egykori hatalmas erődből ma már csak romok maradtak, köztük a lakótorony maradványai. A város büszke Nemzeti Múzeumára és a rigómezei hősök emlékművére, amely a nemzeti identitást jelképezi. Kruševac a 20. században jelentős vegyipari és gépipari központtá fejlődött. A középkori örökség és a modern gazdasági dinamizmus ötvözete Közép-Szerbia egyik legfontosabb kulturális célpontjává teszi a várost.",
      ro: "Kruševac este situat în valea Moravei de Vest și este un oraș de o importanță istorică enormă pentru Serbia. A fost fondat în 1371 de către cneazul Lazăr Hrebeljanović ca și capitală a sa, servind drept centru politic și cultural al Serbiei medievale înainte de Bătălia de la Kosovo. Piesa centrală a sitului istoric este Biserica Lazarica, o capodoperă a școlii de arhitectură de pe Morava, construită în cinstea nașterii fiului lui Lazăr, Stefan Lazarević. Din fortăreața odinioară puternică au rămas astăzi doar ruine, inclusiv Turnul Donjon. Orașul se mândrește cu Muzeul Național și Monumentul Eroilor din Kosovo, care simbolizează identitatea națională sârbă. În secolul al XX-lea, Kruševac s-a dezvoltat ca un centru industrial major pentru industria chimică și constructoare de mașini. Combinația dintre moștenirea medievală și dinamismul economic modern face din oraș o destinație culturală esențială în centrul Serbiei.",
      en: "Kruševac is located in the West Morava valley and is a city of immense historical significance for Serbia. Founded in 1371 by Prince Lazar Hrebeljanović as his capital, it served as the political and cultural center of medieval Serbia prior to the pivotal Battle of Kosovo. The centerpiece of the city's historical complex is the Lazarica Church, a masterpiece of the Morava architectural school built to honor the birth of Lazar's son, Stefan Lazarević. Today, only ruins remain of the once-mighty fortress, including the prominent Donjon Tower. The city is also home to a distinguished National Museum and the Monument to the Heroes of Kosovo, which stands as a symbol of national identity. Throughout the 20th century, Kruševac evolved into a major industrial center, particularly in chemical and machinery production. This blend of medieval heritage and modern industrial strength makes Kruševac a key destination in central Serbia.",
      es: "Kruševac se encuentra en Serbia central y fue la capital del reino del príncipe Lazar en el siglo XIV. El corazón de la ciudad es el parque arqueológico con las ruinas de la ciudad de Lazar y la famosa iglesia Lazarica. La arquitectura de la iglesia es una obra maestra de la escuela de Morava. Hoy, Kruševac es un centro importante de la región de Rasina.",
      pt: "Kruševac situa-se na Sérvia central e foi a capital do reino do príncipe Lazar no século XIV. O coração da cidade é o parque arqueológico com as ruínas da cidade de Lazar e a famosa igreja Lazarica. A arquitetura da igreja é uma obra-prima da escola de Morava. Hoje, Kruševac é um centro importante da região de Rasina.",
      fr: "Kruševac est située en Serbie centrale et fut la capitale du royaume du prince Lazar au XIVe siècle. Le cœur de la ville est le parc archéologique avec les ruines de la cité de Lazar et la célèbre église Lazarica. L'architecture de l'église est un chef-d'œuvre de l'école de la Morava. Aujourd'hui, Kruševac est un centre important de la région de Rasina.",
    },
    factsAdvanced: {
      de: ["Kruševac wurde im Jahr 1371 erstmals als befestigte Stadt erwähnt.", "Die Kirche Lazarica wurde zwischen 1375 und 1378 erbaut.", "Das Denkmal für die Helden von Kosovo wurde 1904 enthüllt.", "Der Donjon-Turm der Festung ist etwa 20 Meter hoch.", "Die Stadt liegt auf einer Höhe von 137 Metern über dem Meeresspiegel.", "Das Nationalmuseum beherbergt über 22.000 Exponate zur Regionalgeschichte."],
      hu: ["Kruševacot 1371-ben említik először erődített városként.", "A Lazarica-templom 1375 és 1378 között épült.", "A rigómezei hősök emlékművét 1904-ben avatták fel.", "Az erőd lakótornya körülbelül 20 méter magas.", "A város tengerszint feletti magassága 137 méter.", "A Nemzeti Múzeum több mint 22 000 kiállítási tárgyat őriz."],
      ro: ["Kruševac a fost menționat pentru prima dată ca oraș fortificat în 1371.", "Biserica Lazarica a fost construită între anii 1375 și 1378.", "Monumentul Eroilor din Kosovo a fost dezvelit în anul 1904.", "Turnul Donjon al fortăreței are o înălțime de aproximativ 20 de metri.", "Orașul este situat la o altitudine de 137 de metri.", "Muzeul Național găzduiește peste 22.000 de exponate istorice."],
      en: ["Kruševac was first mentioned as a fortified city in the year 1371.", "The Lazarica Church was constructed between 1375 and 1378.", "The Monument to the Heroes of Kosovo was unveiled in 1904.", "The Donjon Tower of the fortress stands approximately 20 meters tall.", "The city sits at an elevation of 137 meters above sea level.", "The National Museum holds a collection of over 22,000 regional artifacts."],
      es: ["Fundada por el príncipe Lazar Hrebeljanović en el año 1371.", "La iglesia Lazarica fue construida en 1375 para celebrar el nacimiento de un hijo.", "El monumento a los héroes de Kosovo se encuentra en el centro de la ciudad.", "Sirvió como punto de partida para el ejército serbio antes de la batalla de Kosovo.", "Alberga un gran complejo industrial y químico.", "El museo de la ciudad conserva valiosos artefactos medievales."],
      pt: ["Fundada pelo príncipe Lazar Hrebeljanović no ano de 1371.", "A igreja Lazarica foi construída em 1375 para celebrar o nascimento de um filho.", "O monumento aos heróis do Kosovo situa-se no centro da cidade.", "Serviu como ponto de partida para o exército sérvio antes da Batalha do Kosovo.", "Abriga um grande complexo industrial e químico.", "O museu da cidade preserva valiosos artefactos medievais."],
      fr: ["Fondée par le prince Lazar Hrebeljanović en 1371.", "L'église Lazarica fut construite en 1375 pour célébrer la naissance d'un fils.", "Le monument aux héros du Kosovo se dresse au centre de la ville.", "Servit de point de départ à l'armée serbe avant la bataille de Kosovo Polje.", "Abrite un grand complexe industriel et chimique.", "Le musée de la ville conserve de précieux artefacts médiévaux."],
    },
    image: "/poi-images/RS-022-krusevac.webp",
  },
  {
    id: "RS-022-ljubostinja", "sights": {
      "de": [
            {
                  "name": "Kloster Ljubostinja",
                  "text": "Ein bedeutendes serbisch-orthodoxes Kloster aus dem 14. Jahrhundert in der Nähe von Trstenik.",
                  "category": "religious",
                  "coords": [
                        20.997936,
                        43.65173
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Манастир Љубостиња",
                  "text": "Jelentős 14. századi szerb ortodox kolostor Trstenik közelében.",
                  "category": "religious",
                  "coords": [
                        20.997936,
                        43.65173
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Манастир Љубостиња",
                  "text": "O mănăstire ortodoxă sârbă importantă din secolul al XIV-lea, situată lângă Trstenik.",
                  "category": "religious",
                  "coords": [
                        20.997936,
                        43.65173
                  ]
            }
      ],
      "en": [
            {
                  "name": "Ljubostinja Monastery",
                  "text": "A significant 14th-century Serbian Orthodox monastery located near Trstenik.",
                  "category": "religious",
                  "coords": [
                        20.997936,
                        43.65173
                  ]
            }
      ]
},
    type: "historical",
    parent: "RS-022",
    coords: [21.0333, 43.6500],
    name: { de: "Kloster Ljubostinja", hu: "Ljubostinja kolostor", ro: "Mănăstirea Ljubostinja", en: "Ljubostinja Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Frauenkloster, ein Meisterwerk der Morava-Schule.",
      hu: "Szerb ortodox női kolostor, a Morava-stílusú építészet remekműve.",
      ro: "O mănăstire ortodoxă sârbă de maici, o capodoperă a școlii de arhitectură Morava.",
      en: "A Serbian Orthodox nunnery, a masterpiece of the Morava school of architecture.",
      es: "Un monasterio ortodoxo serbio de mujeres, una obra maestra de la escuela de Morava.",
      pt: "Um mosteiro ortodoxo sérvio feminino, uma obra-prima da escola de Morava.",
      fr: "Un monastère orthodoxe serbe pour femmes, un chef-d'œuvre de l'école de la Morava.",
    },
    facts: {
      de: ["Gegründet von Fürstin Milica", "Reich verzierte Fenster", "Malerische Lage"],
      hu: ["Milica fejedelemasszony alapította", "Gazdagon díszített ablakok", "Festői környezet"],
      ro: ["Fondată de prințesa Milica", "Ferestre bogat decorate", "Locație pitorească"],
      en: ["Founded by Princess Milica", "Richly decorated windows", "Picturesque setting"],
      es: ["Fundado por la princesa Milica", "Ventanas ricamente decoradas", "Ubicación pintoresca"],
      pt: ["Fundado pela princesa Milica", "Janelas ricamente decoradas", "Localização pitoresca"],
      fr: ["Fondé par la princesse Milica", "Fenêtres richement décorées", "Emplacement pittoresque"],
    }, image: "/poi-images/RS-022-ljubostinja.webp",
    descriptionAdvanced: {
      de: "Das Kloster Ljubostinja liegt in der Nähe von Trstenik im Tal des Flüsschens Ljubostinja und ist eines der bedeutendsten Denkmäler der Morava-Schule. Es wurde 1388 von Fürstin Milica, der Witwe von Fürst Lazar, kurz vor der Schlacht auf dem Amselfeld gegründet. Nach der Schlacht wurde das Kloster zu einem Zufluchtsort für Witwen des serbischen Adels, und Milica selbst verbrachte dort ihre letzten Jahre als Nonne Jevgenija. Die Architektur des Klosters besticht durch ihre harmonischen Proportionen, die reichen Steinmetzarbeiten und die berühmten Rosettenfenster. Das Innere beherbergt wertvolle Fresken, darunter Porträts der herrschenden Familie Lazar und Milica sowie ihrer Söhne. Ljubostinja ist nicht nur ein Ort tiefer Spiritualität, sondern auch ein Zeugnis der kulturellen Blüte Serbiens am Ende des 14. Jahrhunderts. Heute ist es ein aktives Frauenkloster und ein beliebtes Ziel für Pilger und Kunsthistoriker gleichermaßen.",
      hu: "A Ljubostinja-kolostor Trstenik közelében, a Ljubostinja-patak völgyében található, és a morva építészeti iskola egyik legjelentősebb emléke. 1388-ban alapította Milica fejedelemasszony, Lázár fejedelem özvegye, közvetlenül a rigómezei csata előtt. A csata után a kolostor a szerb nemesi özvegyek menedékévé vált, és maga Milica is itt töltötte utolsó éveit Jevgenija néven apácaként. A kolostor építészete harmonikus arányaival, gazdag kőfaragványaival és híres rózsaablakaival nyűgözi le a látogatókat. A belső tér értékes freskókat őriz, köztük Lázár és Milica, valamint fiaik portréit. Ljubostinja nemcsak a mély spiritualitás helyszíne, hanem a 14. század végi szerb kulturális virágzás tanúja is. Ma aktív női kolostorként működik, amely zarándokok és művészettörténészek kedvelt célpontja egyaránt.",
      ro: "Mănăstirea Ljubostinja este situată lângă Trstenik, în valea râului Ljubostinja, fiind unul dintre cele mai importante monumente ale școlii de pe Morava. A fost fondată în 1388 de către cneaghina Milica, văduva cneazului Lazăr, cu puțin timp înainte de Bătălia de la Kosovo. După bătălie, mănăstirea a devenit un refugiu pentru văduvele nobilimii sârbe, iar Milica însăși și-a petrecut ultimii ani aici ca monahia Jevgenija. Arhitectura mănăstirii impresionează prin proporțiile armonioase, sculpturile bogate în piatră și faimoasele ferestre circulare (rozete). Interiorul adăpostește fresce valoroase, inclusiv portrete ale familiei ctitorice și ale fiilor lor. Ljubostinja nu este doar un loc de profundă spiritualitate, ci și o mărturie a înfloririi culturale a Serbiei de la sfârșitul secolului al XIV-lea. În prezent, este o mănăstire activă de maici și o destinație populară pentru pelerini.",
      en: "Ljubostinja Monastery is located near Trstenik in the small Ljubostinja river valley and stands as one of the most prominent examples of the Morava architectural school. Founded in 1388 by Princess Milica, the widow of Prince Lazar, the monastery was established shortly before the pivotal Battle of Kosovo. Following the battle, it became a sanctuary for the widows of the Serbian nobility, and Milica herself spent her final years there as a nun named Jevgenija. The monastery's architecture is celebrated for its harmonious proportions, intricate stone carvings, and distinctive rosette windows. Inside, the church preserves significant frescoes, including portraits of the ruling Lazar and Milica family and their sons. Ljubostinja is not only a site of deep spiritual importance but also a testament to the cultural flourishing of late 14th-century Serbia. Today, it continues to function as an active nunnery and attracts many pilgrims and art historians.",
      es: "El monasterio de Ljubostinja se encuentra cerca de Trstenik, en el valle del Morava occidental. Fue fundado a finales del siglo XIV por la princesa Milica y es un ejemplo destacado de la arquitectura de la escuela de Morava. El monasterio sirvió como refugio para las viudas tras la batalla de Kosovo. Los trabajos de cantería en las fachadas son conocidos internacionalmente.",
      pt: "O mosteiro de Ljubostinja está localizado perto de Trstenik, no vale do Morava Ocidental. Foi fundado no final do século XIV pela princesa Milica e é um exemplo notável da escola de Morava. O mosteiro serviu de refúgio para viúvas após a Batalha do Kosovo. O trabalho em pedra nas fachadas é reconhecido internacionalmente.",
      fr: "Le monastère de Ljubostinja est situé près de Trstenik, dans la vallée de la Morava occidentale. Fondé à la fin du XIVe siècle par la princesse Milica, il est un exemple exceptionnel de l'école de la Morava. Le monastère a servi de refuge aux veuves après la bataille de Kosovo Polje. Les sculptures sur pierre des façades sont internationalement renommées.",
    },
    factsAdvanced: {
      de: ["Das Kloster wurde vom Architekten Rade Borović (Rade Neimar) erbaut.", "Fürstin Milica wurde hier im Jahr 1405 beigesetzt.", "Die Kirche ist der Entschlafung der Gottesmutter gewidmet.", "Die berühmten Rosettenfenster zeigen komplexe florale Motive.", "Im Kloster wurde die 'Ljubostinja-Inschrift' von Nonne Jefimija verfasst.", "Das Gebäude überstand mehrere Brände während der osmanischen Zeit."],
      hu: ["A kolostort Rade Borović (Rade Neimar) építész tervezte.", "Milica fejedelemasszonyt 1405-ben itt helyezték örök nyugalomra.", "A templomot az Istenanya elszenderedésének szentelték.", "A híres rózsaablakok bonyolult virágmotívumokat ábrázolnak.", "Itt írta meg Jefimija apáca a híres 'Ljubostinjai feliratot'.", "Az épület több tűzvészt is túl élt az oszmán hódoltság idején."],
      ro: ["Mănăstirea a fost construită de arhitectul Rade Borović (Rade Neimar).", "Cneaghina Milica a fost înmormântată aici în anul 1405.", "Biserica mănăstirii este dedicată Adormirii Maicii Domnului.", "Faimoasele ferestre rozetă prezintă motive florale complexe.", "În mănăstire a fost scrisă faimoasa 'Inscripție de la Ljubostinja' de către monahia Jefimija.", "Clădirea a supraviețuit mai multor incendii în timpul perioadei otomane."],
      en: ["The monastery was designed and built by architect Rade Borović (Rade Neimar).", "Princess Milica was buried within the monastery in 1405.", "The main church is dedicated to the Dormition of the Mother of God.", "The celebrated rosette windows feature intricate floral stone carvings.", "The famous 'Ljubostinja Inscription' was composed here by the nun Jefimija.", "The structure survived several damaging fires during the Ottoman period."],
      es: ["Construido entre 1388 y 1405 por el maestro de obras Rade Borović.", "La princesa Milica está enterrada en la iglesia del monasterio.", "El nombre Ljubostinja significa aproximadamente 'lugar de amor'.", "Alberga el famoso sudario de Milica, bordado con hilos de oro.", "La iglesia está dedicada a la Dormición de la Madre de Dios.", "Uno de los monumentos mejor conservados de la arquitectura medieval serbia."],
      pt: ["Construído entre 1388 e 1405 pelo mestre de obras Rade Borović.", "A princesa Milica está sepultada na igreja do mosteiro.", "O nome Ljubostinja significa aproximadamente 'lugar de amor'.", "Abriga o famoso sudário de Milica, bordado com fios de ouro.", "A igreja é dedicada à Dormição da Mãe de Deus.", "Um dos monumentos mais bem preservados da arquitetura medieval sérvia."],
      fr: ["Construit entre 1388 et 1405 par le maître d'œuvre Rade Borović.", "La princesse Milica est enterrée dans l'église du monastère.", "Le nom Ljubostinja signifie approximativement 'lieu de l'amour'.", "Il abrite le célèbre linceul de Milica, brodé de fils d'or.", "L'église est dédiée à la Dormition de la Mère de Dieu.", "L'un des monuments les mieux conservés de l'architecture médiévale serbe."],
    },
  },
  // RS-023 Šumadijski
  // RS-024 Moravicki
  {
    id: "RS-024-ovcar-kablar", "sights": {
      "de": [
            {
                  "name": "Овчарско-кабларска клисура",
                  "text": "Ein Naturschutzgebiet, das aufgrund seiner zahlreichen Klöster als serbischer Heiliger Berg bekannt ist.",
                  "category": "natural",
                  "coords": [
                        20.189606,
                        43.908867
                  ]
            },
            {
                  "name": "Природњачки центар",
                  "text": "Ein Museum in der Ovčar-Kablar-Schlucht, das der regionalen Natur gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        20.187656,
                        43.900238
                  ]
            },
            {
                  "name": "Овчар",
                  "text": "Der höchste Berggipfel in der Ovčar-Kablar-Schlucht.",
                  "category": "landmark",
                  "coords": [
                        20.216064,
                        43.89664
                  ]
            },
            {
                  "name": "Црква Савиње",
                  "text": "Ein am Felsen gelegenes Gotteshaus in der Ovčar-Kablar-Schlucht.",
                  "category": "religious",
                  "coords": [
                        20.191583,
                        43.907607
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Овчарско-кабларска клисура",
                  "text": "Természetvédelmi terület, amely számos kolostora miatt szerb Szent Hegykén ismert.",
                  "category": "natural",
                  "coords": [
                        20.189606,
                        43.908867
                  ]
            },
            {
                  "name": "Природњачки центар",
                  "text": "A régió természetvilágának szentelt múzeum az Ovčar-Kablar-szurdokban.",
                  "category": "museum",
                  "coords": [
                        20.187656,
                        43.900238
                  ]
            },
            {
                  "name": "Овчар",
                  "text": "Az Ovčar-Kablar-szurdok legmagasabb hegycsúcsa.",
                  "category": "landmark",
                  "coords": [
                        20.216064,
                        43.89664
                  ]
            },
            {
                  "name": "Црква Савиње",
                  "text": "Sziklába épült templom az Ovčar-Kablar-szurdokban.",
                  "category": "religious",
                  "coords": [
                        20.191583,
                        43.907607
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Овчарско-кабларска клисура",
                  "text": "O rezervație naturală cunoscută sub numele de Muntele Sfânt al Serbiei datorită numeroaselor sale mănăstiri.",
                  "category": "natural",
                  "coords": [
                        20.189606,
                        43.908867
                  ]
            },
            {
                  "name": "Природњачки центар",
                  "text": "Un muzeu din defileul Ovčar-Kablar dedicat naturii regionale.",
                  "category": "museum",
                  "coords": [
                        20.187656,
                        43.900238
                  ]
            },
            {
                  "name": "Овчар",
                  "text": "Cel mai înalt vârf muntos din defileul Ovčar-Kablar.",
                  "category": "landmark",
                  "coords": [
                        20.216064,
                        43.89664
                  ]
            },
            {
                  "name": "Црква Савиње",
                  "text": "Lăcaș de cult situat în stâncă în defileul Ovčar-Kablar.",
                  "category": "religious",
                  "coords": [
                        20.191583,
                        43.907607
                  ]
            }
      ],
      "en": [
            {
                  "name": "Ovčar-Kablar Gorge",
                  "text": "A nature reserve known as the Serbian Holy Mountain due to its many monasteries.",
                  "category": "natural",
                  "coords": [
                        20.189606,
                        43.908867
                  ]
            },
            {
                  "name": "Natural History Centre",
                  "text": "A museum in the Ovčar-Kablar Gorge dedicated to regional nature.",
                  "category": "museum",
                  "coords": [
                        20.187656,
                        43.900238
                  ]
            },
            {
                  "name": "Ovčar",
                  "text": "The highest mountain peak in the Ovčar-Kablar Gorge.",
                  "category": "landmark",
                  "coords": [
                        20.216064,
                        43.89664
                  ]
            },
            {
                  "name": "Savinje Church",
                  "text": "A place of worship situated against the cliffs in the Ovčar-Kablar Gorge.",
                  "category": "religious",
                  "coords": [
                        20.191583,
                        43.907607
                  ]
            }
      ]
},
    type: "landmark",
    parent: "RS-024",
    coords: [20.1800, 43.9000],
    name: { de: "Ovčar-Kablar-Schlucht", hu: "Ovčar-Kablar-szurdok", ro: "Defileul Ovčar-Kablar", en: "Ovčar-Kablar Gorge" },
    description: {
      de: "Eine malerische Schlucht der Westmorava, auch 'Serbisches Heiliges Bergland' genannt.",
      hu: "A Nyugati-Morava festői szurdoka, amelyet 'szerb szent hegyvidéknek' is neveznek.",
      ro: "Un defileu pitoresc al Moravei de Vest, numit și 'Muntele Sfânt Sârbesc'.",
      en: "A picturesque gorge of the West Morava river, also called 'Serbian Holy Mountain'.",
      es: "Un desfiladero pintoresco del Morava occidental, también llamado las 'Montañas Sagradas de Serbia'.",
      pt: "Um desfiladeiro pitoresco do Morava Ocidental, também chamado de 'Montanhas Sagradas da Sérvia'.",
      fr: "Une gorge pittoresque de la Morava occidentale, également appelée les 'Montagnes sacrées serbes'.",
    },
    facts: {
      de: ["Zahlreiche Klöster", "Wellness-Zentrum", "Wanderwege"],
      hu: ["Számos kolostor", "Gyógyfürdő központ", "Túraútvonalak"],
      ro: ["Numeroase mănăstiri", "Centru de wellness", "Trasee de drumeție"],
      en: ["Numerous monasteries", "Wellness center", "Hiking trails"],
      es: ["Numerosos monasterios", "Centro de bienestar", "Rutas de senderismo"],
      pt: ["Numerosos mosteiros", "Centro de bem-estar", "Trilhos para caminhadas"],
      fr: ["Nombreux monastères", "Centre de bien-être", "Sentiers de randonnée"],
    }, image: "/poi-images/RS-024-ovcar-kablar.webp",
    descriptionAdvanced: {
      de: "Die Ovčar-Kablar-Schlucht liegt in Zentralserbien, wo sich der Fluss Westliche Morava zwischen den Bergen Ovčar und Kablar hindurchwindet. Diese spektakuläre Naturlandschaft ist nicht nur für ihre steilen Klippen und die charakteristischen Mäander bekannt, sondern auch als 'serbischer heiliger Berg'. In der Schlucht befinden sich zehn mittelalterliche Klöster, die während der osmanischen Herrschaft in der Abgeschiedenheit der Berge Schutz suchten. Die Region zeichnet sich durch eine enorme biologische Vielfalt mit zahlreichen geschützten Pflanzen- und Tierarten aus. Für Aktivurlauber bietet die Schlucht ein ausgedehntes Netz an Wanderwegen, die zu atemberaubenden Aussichtspunkten auf dem Gipfel des Kablar führen. Am Fuße der Berge liegt das Thermalbad Ovčar Banja, das für seine heilenden Quellen bekannt ist. Die Ovčar-Kablar-Schlucht ist somit eine einzigartige Kombination aus unberührter Natur, spirituellem Erbe und Erholungsmöglichkeiten.",
      hu: "Az Ovčar-Kablar-szurdok Közép-Szerbiában található, ahol a Nyugati-Morava folyó kanyarog az Ovčar és a Kablar hegyek között. Ez a látványos táj nemcsak meredek szikláiról és jellegzetes meandereiről (folyókanyarulatairól) ismert, hanem 'szerb Szent Hegykén' is emlegetik. A szurdokban tíz középkori kolostor bújik meg, amelyek az oszmán uralom idején a hegyek elszigeteltségében kerestek menedéket. A régiót hatalmas biológiai sokféleség jellemzi, számos védett növény- és állatfajjal. Az aktív pihenésre vágyók számára a szurdok kiterjedt túraútvonal-hálózatot kínál, amelyek a Kablar csúcsán lévő lélegzetelállító kilátópontokhoz vezetnek. A hegyek lábánál fekszik Ovčar Banja gyógyfürdője, amely gyógyhatású forrásairól híres. Az Ovčar-Kablar-szurdok így az érintetlen természet, a szellemi örökség és a kikapcsolódás egyedülálló kombinációja.",
      ro: "Defileul Ovčar-Kablar este situat în centrul Serbiei, acolo unde râul Morava de Vest străbate munții Ovčar și Kablar. Acest peisaj natural spectaculos nu este cunoscut doar pentru stâncile sale abrupte și meandrele caracteristice, ci și sub numele de 'Muntele Sfânt al Serbiei'. În interiorul defileului se află zece mănăstiri medievale care au căutat refugiu în izolarea munților în timpul dominației otomane. Regiunea se caracterizează printr-o biodiversitate enormă, cu numeroase specii de plante și animale protejate. Pentru turiștii activi, defileul oferă o rețea extinsă de trasee de drumeție care duc la puncte de belvedere uluitoare pe vârful Kablar. La poalele munților se află stațiunea balneară Ovčar Banja, cunoscută pentru izvoarele sale termale curative. Defileul Ovčar-Kablar reprezintă astfel o combinație unică de natură virgină, moștenire spirituală și oportunități de recreere.",
      en: "The Ovčar-Kablar Gorge is located in central Serbia, where the West Morava river carves a spectacular path between the Ovčar and Kablar mountains. This stunning natural landscape is famous not only for its steep cliffs and distinctive meanders but also as the 'Serbian Holy Mountain'. Hidden within the gorge are ten medieval monasteries that sought sanctuary in the isolation of the mountains during the Ottoman era. The region is characterized by exceptional biodiversity, hosting numerous protected plant and animal species. For active travelers, the gorge offers an extensive network of hiking trails leading to breathtaking viewpoints on the summit of Kablar. At the foot of the mountains lies the spa town of Ovčar Banja, renowned for its therapeutic thermal springs. The Ovčar-Kablar Gorge thus presents a unique combination of pristine nature, profound spiritual heritage, and diverse recreational opportunities.",
      es: "El desfiladero de Ovčar-Kablar es un fenómeno natural impresionante en el valle del Morava occidental. Las empinadas laderas de las montañas Ovčar y Kablar forman un profundo cañón con meandros fluviales. Debido a los diez monasterios medievales de la zona, a menudo se le conoce como el Athos serbio. La zona está protegida como un paisaje de importancia excepcional.",
      pt: "O desfiladeiro de Ovčar-Kablar é um fenómeno natural marcante no vale do Morava Ocidental. As encostas íngremes das montanhas Ovčar e Kablar formam um desfiladeiro profundo com meandros fluviais. Devido aos dez mosteiros medievais na área, é frequentemente chamado de o Athos sérvio. A área é protegida como uma paisagem de importância excecional.",
      fr: "La gorge d'Ovčar-Kablar est un phénomène naturel remarquable dans la vallée de la Morava occidentale. Les pentes abruptes des monts Ovčar et Kablar forment un canyon profond avec des méandres fluviaux. En raison des dix monastères médiévaux de la région, elle est souvent surnommée l'Athos serbe. La zone est protégée en tant que paysage d'importance exceptionnelle.",
    },
    factsAdvanced: {
      de: ["Die Schlucht erstreckt sich über eine Länge von etwa 20 Kilometern.", "Der Gipfel des Kablar liegt auf 889 Metern über dem Meeresspiegel.", "Die Westliche Morava bildet hier drei markante Flussschleifen.", "Es gibt über 150 dokumentierte Vogelarten in der Schlucht.", "Das Kloster Blagoveštenje wurde im Jahr 1602 erbaut.", "Das Wasser in Ovčar Banja hat eine konstante Temperatur von 35-38°C."],
      hu: ["A szurdok hossza körülbelül 20 kilométer.", "A Kablar-hegy csúcsa 889 méteres tengerszint feletti magasságban van.", "A Nyugati-Morava itt három jellegzetes folyókanyarulatot alkot.", "A szurdokban több mint 150 dokumentált madárfaj él.", "A Blagoveštenje-kolostort 1602-ben építették.", "Ovčar Banja gyógyvize állandó, 35-38°C-os hőmérsékletű."],
      ro: ["Defileul se întinde pe o lungime de aproximativ 20 de kilometri.", "Vârful Kablar are o altitudine de 889 de metri.", "Râul Morava de Vest formează aici trei meandre foarte pronunțate.", "În defileu au fost documentate peste 150 de specii de păsări.", "Mănăstirea Blagoveštenje a fost construită în anul 1602.", "Apa termală din Ovčar Banja are o temperatură constantă de 35-38°C."],
      en: ["The gorge extends for a total length of approximately 20 kilometers.", "The summit of Mount Kablar reaches an elevation of 889 meters.", "The West Morava river forms three distinct and sharp meanders here.", "More than 150 different bird species have been documented in the gorge.", "Blagoveštenje Monastery was constructed in the year 1602.", "The thermal waters in Ovčar Banja maintain a temperature of 35-38°C."],
      es: ["El río Morava occidental forma aquí meandros únicos.", "Alberga 10 monasterios activos, incluidos Blagoveštenje y Jovanje.", "El monte Ovčar alcanza una altura de 985 metros sobre el nivel del mar.", "Popular para el senderismo, el montañismo y el mirador de Kablar.", "Incluye el balneario termal Ovčar Banja dentro del desfiladero.", "Declarado bien de protección natural por el gobierno serbio en 1994."],
      pt: ["O rio Morava Ocidental forma aqui meandros únicos.", "Abriga 10 mosteiros ativos, incluindo Blagoveštenje e Jovanje.", "O monte Ovčar atinge uma altura de 985 metros acima do nível do mar.", "Popular para caminhadas, montanhismo e pelo miradouro de Kablar.", "Inclui a estância termal Ovčar Banja dentro do desfiladeiro.", "Declarado património natural pelo governo sérvio em 1994."],
      fr: ["La rivière Morava occidentale y forme des méandres uniques.", "Elle abrite 10 monastères actifs, dont Blagoveštenje et Jovanje.", "Le mont Ovčar culmine à 985 mètres d'altitude.", "Lieu prisé pour la randonnée, l'alpinisme et le point de vue de Kablar.", "Comprend la station thermale d'Ovčar Banja à l'intérieur de la gorge.", "Classée zone naturelle protégée par le gouvernement serbe en 1994."],
    },
  },
  // RS-025 Kolubarski
  {
    id: "RS-025-valjevo", "sights": {"de": [{"name": "Muselimov konak", "text": "Das älteste Gebäude in Valjevo beherbergt heute eine historische Museumsausstellung.", "category": "museum", "coords": [19.884943, 44.26953]}, {"name": "Srednjovekovno naselje", "text": "Eine archäologische Stätte in Valjevo, die Überreste einer mittelalterlichen Siedlung zeigt.", "category": "historical", "coords": [19.893207, 44.26492]}, {"name": "Centar za kulturu Valjevo", "text": "Ein wichtiges kulturelles Zentrum und Theatergebäude im Herzen von Valjevo.", "category": "cultural", "coords": [19.887562, 44.269352]}, {"name": "Poni selo", "text": "Ein kleiner Zoo in Valjevo, der besonders für Familien mit Kindern attraktiv ist.", "category": "family", "coords": [19.866258, 44.259529]}, {"name": "Ilovačića vodenica", "text": "Eine traditionelle historische Wassermühle am Fluss Kolubara in Valjevo.", "category": "landmark", "coords": [19.892995, 44.26079]}, {"name": "Markova stolica", "text": "Ein beliebter Aussichtspunkt in Valjevo, der einen weiten Blick über die Stadt bietet.", "category": "natural", "coords": [19.87799, 44.261546]}, {"name": "Vidikovac Popare", "text": "Dieser Aussichtspunkt bietet Besuchern ein Panorama der umliegenden Landschaft von Valjevo.", "category": "natural", "coords": [19.884175, 44.263996]}, {"name": "Brđani, Magdalenića šanac", "text": "Ein erhöhter Aussichtspunkt in Valjevo mit Blick auf die natürliche Umgebung.", "category": "natural", "coords": [19.871793, 44.276001]}, {"name": "Spomenik pilotu pukovniku Milenku Pavlovicu", "text": "Ein Denkmal für den serbischen Piloten Milenko Pavlović, der im Jahr 1999 fiel.", "category": "historical", "coords": [19.902389, 44.273649]}, {"name": "Spomenik Seca Knezova", "text": "Ein Denkmal in Valjevo, das an die historische 'Hinrichtung der Fürsten' erinnert.", "category": "historical", "coords": [19.886286, 44.269167]}, {"name": "Moderna galerija Valjevo", "text": "Die Moderne Galerie in Valjevo zeigt zeitgenössische Kunstwerke bekannter regionaler Künstler.", "category": "museum", "coords": [19.886236, 44.270119]}, {"name": "Art Studio Radovan Mića Trnavac", "text": "Ein Kunstatelier und eine Galerie in Valjevo, die dem Werk von Radovan Mića Trnavac gewidmet ist.", "category": "museum", "coords": [19.899481, 44.264385]}, {"name": "Kula Nenadovića", "text": "Ein historischer Turm in Valjevo, der Anfang des 19. Jahrhunderts zu Verteidigungszwecken erbaut wurde.", "category": "historical", "coords": [19.885369, 44.278102]}, {"name": "Crkva Svetog Đorđa", "text": "Eine bedeutende orthodoxe Kirche und ein architektonisches Wahrzeichen in Valjevo.", "category": "religious", "coords": [19.918754, 44.279578]}], "hu": [{"name": "Muselimov konak", "text": "Valjevo legrégebbi épülete, amely ma történelmi múzeumi kiállításnak ad otthont.", "category": "museum", "coords": [19.884943, 44.26953]}, {"name": "Srednjovekovno naselje", "text": "Régészeti lelőhely Valjevóban, amely egy középkori település maradványait mutatja be.", "category": "historical", "coords": [19.893207, 44.26492]}, {"name": "Centar za kulturu Valjevo", "text": "Fontos kulturális központ és színházépület Valjevo szívében.", "category": "cultural", "coords": [19.887562, 44.269352]}, {"name": "Poni selo", "text": "Kisméretű állatkert Valjevóban, amely különösen a gyermekes családok számára vonzó.", "category": "family", "coords": [19.866258, 44.259529]}, {"name": "Ilovačića vodenica", "text": "Hagyományos történelmi vízimalom a Kolubara-folyón Valjevóban.", "category": "landmark", "coords": [19.892995, 44.26079]}, {"name": "Markova stolica", "text": "Népszerű kilátóhely Valjevóban, amely széles kilátást nyújt a városra.", "category": "natural", "coords": [19.87799, 44.261546]}, {"name": "Vidikovac Popare", "text": "Ez a kilátóhely panorámás kilátást nyújt Valjevo környező tájára.", "category": "natural", "coords": [19.884175, 44.263996]}, {"name": "Brđani, Magdalenića šanac", "text": "Magasan fekvő kilátóhely Valjevóban, kilátással a természetes környezetre.", "category": "natural", "coords": [19.871793, 44.276001]}, {"name": "Spomenik pilotu pukovniku Milenku Pavlovicu", "text": "Emlékmű Milenko Pavlović szerb pilóta tiszteletére, aki 1999-ben esett el.", "category": "historical", "coords": [19.902389, 44.273649]}, {"name": "Spomenik Seca Knezova", "text": "Valjevói emlékmű, amely a történelmi 'fejedelmek kivégzésére' emlékeztet.", "category": "historical", "coords": [19.886286, 44.269167]}, {"name": "Moderna galerija Valjevo", "text": "A Valjevói Modern Galéria neves regionális művészek kortárs alkotásait mutatja be.", "category": "museum", "coords": [19.886236, 44.270119]}, {"name": "Art Studio Radovan Mića Trnavac", "text": "Művészeti stúdió és galéria Valjevóban, amelyet Radovan Mića Trnavac munkásságának szenteltek.", "category": "museum", "coords": [19.899481, 44.264385]}, {"name": "Kula Nenadovića", "text": "Történelmi torony Valjevóban, amely a 19. század elején épült védelmi célokból.", "category": "historical", "coords": [19.885369, 44.278102]}, {"name": "Crkva Svetog Đorđa", "text": "Jelentős ortodox templom és építészeti látnivaló Valjevo városában.", "category": "religious", "coords": [19.918754, 44.279578]}], "ro": [{"name": "Muselimov konak", "text": "Cea mai veche clădire din Valjevo, care găzduiește astăzi o expoziție muzeală istorică.", "category": "museum", "coords": [19.884943, 44.26953]}, {"name": "Srednjovekovno naselje", "text": "Un sit arheologic din Valjevo care prezintă vestigiile unei așezări medievale.", "category": "historical", "coords": [19.893207, 44.26492]}, {"name": "Centar za kulturu Valjevo", "text": "Un important centru cultural și clădire de teatru în inima orașului Valjevo.", "category": "cultural", "coords": [19.887562, 44.269352]}, {"name": "Poni selo", "text": "O mică grădină zoologică din Valjevo, atractivă în special pentru familiile cu copii.", "category": "family", "coords": [19.866258, 44.259529]}, {"name": "Ilovačića vodenica", "text": "O moară de apă istorică tradițională pe râul Kolubara din Valjevo.", "category": "landmark", "coords": [19.892995, 44.26079]}, {"name": "Markova stolica", "text": "Un punct de belvedere popular din Valjevo, care oferă o vedere largă asupra orașului.", "category": "natural", "coords": [19.87799, 44.261546]}, {"name": "Vidikovac Popare", "text": "Acest punct de belvedere oferă vizitatorilor o panoramă a peisajului înconjurător din Valjevo.", "category": "natural", "coords": [19.884175, 44.263996]}, {"name": "Brđani, Magdalenića šanac", "text": "Un punct de belvedere ridicat din Valjevo, cu vedere la mediul natural.", "category": "natural", "coords": [19.871793, 44.276001]}, {"name": "Spomenik pilotu pukovniku Milenku Pavlovicu", "text": "Un monument dedicat pilotului sârb Milenko Pavlović, căzut în anul 1999.", "category": "historical", "coords": [19.902389, 44.273649]}, {"name": "Spomenik Seca Knezova", "text": "Un monument din Valjevo care comemorează istorica 'execuție a cnezilor'.", "category": "historical", "coords": [19.886286, 44.269167]}, {"name": "Moderna galerija Valjevo", "text": "Galeria Modernă din Valjevo expune lucrări de artă contemporană ale unor artiști regionali renumiți.", "category": "museum", "coords": [19.886236, 44.270119]}, {"name": "Art Studio Radovan Mića Trnavac", "text": "Un studio de artă și o galerie din Valjevo dedicate operei lui Radovan Mića Trnavac.", "category": "museum", "coords": [19.899481, 44.264385]}, {"name": "Kula Nenadovića", "text": "Un turn istoric din Valjevo, construit la începutul secolului al XIX-lea în scopuri de apărare.", "category": "historical", "coords": [19.885369, 44.278102]}, {"name": "Crkva Svetog Đorđa", "text": "O biserică ortodoxă importantă și un reper arhitectural din Valjevo.", "category": "religious", "coords": [19.918754, 44.279578]}], "en": [{"name": "Muselimov konak", "text": "The oldest building in Valjevo, now housing a historical museum exhibit.", "category": "museum", "coords": [19.884943, 44.26953]}, {"name": "Srednjovekovno naselje", "text": "An archaeological site in Valjevo showcasing the remains of a medieval settlement.", "category": "historical", "coords": [19.893207, 44.26492]}, {"name": "Centar za kulturu Valjevo", "text": "An important cultural center and theatre building in the heart of Valjevo.", "category": "cultural", "coords": [19.887562, 44.269352]}, {"name": "Poni selo", "text": "A small zoo in Valjevo, especially attractive for families with children.", "category": "family", "coords": [19.866258, 44.259529]}, {"name": "Ilovačića vodenica", "text": "A traditional historical watermill on the Kolubara river in Valjevo.", "category": "landmark", "coords": [19.892995, 44.26079]}, {"name": "Markova stolica", "text": "A popular viewpoint in Valjevo offering a wide view over the city.", "category": "natural", "coords": [19.87799, 44.261546]}, {"name": "Vidikovac Popare", "text": "This viewpoint offers visitors a panorama of the surrounding landscape of Valjevo.", "category": "natural", "coords": [19.884175, 44.263996]}, {"name": "Brđani, Magdalenića šanac", "text": "An elevated viewpoint in Valjevo with views of the natural surroundings.", "category": "natural", "coords": [19.871793, 44.276001]}, {"name": "Spomenik pilotu pukovniku Milenku Pavlovicu", "text": "A monument dedicated to the Serbian pilot Milenko Pavlović, who fell in 1999.", "category": "historical", "coords": [19.902389, 44.273649]}, {"name": "Spomenik Seca Knezova", "text": "A monument in Valjevo commemorating the historical 'Slaughter of the Knezes'.", "category": "historical", "coords": [19.886286, 44.269167]}, {"name": "Moderna galerija Valjevo", "text": "The Modern Gallery in Valjevo showcases contemporary artworks by renowned regional artists.", "category": "museum", "coords": [19.886236, 44.270119]}, {"name": "Art Studio Radovan Mića Trnavac", "text": "An art studio and gallery in Valjevo dedicated to the work of Radovan Mića Trnavac.", "category": "museum", "coords": [19.899481, 44.264385]}, {"name": "Kula Nenadovića", "text": "A historical tower in Valjevo built in the early 19th century for defensive purposes.", "category": "historical", "coords": [19.885369, 44.278102]}, {"name": "Crkva Svetog Đorđa", "text": "An important Orthodox church and architectural landmark in Valjevo.", "category": "religious", "coords": [19.918754, 44.279578]}]},
    type: "city",
    parent: "RS-025",
    coords: [19.8900, 44.2700],
    name: { de: "Valjevo", hu: "Valjevo", ro: "Valjevo", en: "Valjevo" },
    description: {
      de: "Eine Stadt im Westen Serbiens, reich an Geschichte und kulturellem Erbe.",
      hu: "Nyugat-szerbiai város, gazdag történelemmel és kulturális örökséggel.",
      ro: "Un oraș în vestul Serbiei, bogat în istorie și moștenire culturală.",
      en: "A city in western Serbia, rich in history and cultural heritage.",
      es: "Una ciudad en el oeste de Serbia, rica en historia y patrimonio cultural.",
      pt: "Uma cidade no oeste da Sérvia, rica em história e património cultural.",
      fr: "Une ville de l'ouest de la Serbie, riche en histoire et en patrimoine culturel.",
    },
    facts: {
      de: ["Altstadt Tešnjar", "Nationalmuseum", "Kolubara-Fluss"],
      hu: ["Tešnjar óváros", "Nemzeti Múzeum", "Kolubara-folyó"],
      ro: ["Centrul vechi Tešnjar", "Muzeul Național", "Râul Kolubara"],
      en: ["Tešnjar old quarter", "National Museum", "Kolubara River"],
      es: ["Casco antiguo de Tešnjar", "Museo Nacional", "Río Kolubara"],
      pt: ["Centro histórico de Tešnjar", "Museu Nacional", "Rio Kolubara"],
      fr: ["Vieille ville de Tešnjar", "Musée national", "Rivière Kolubara"],
    },
    descriptionAdvanced: {
      de: "Valjevo liegt im Westen Serbiens am Ufer des Flusses Kolubara und ist eine Stadt mit reichem kulturellem Erbe und großer historischer Bedeutung. Ein Wahrzeichen der Stadt ist Tešnjar, ein altes Viertel am rechten Ufer der Kolubara, das eines der am besten erhaltenen Beispiele eines orientalisch geprägten Marktplatzes aus dem 19. Jahrhundert ist. Die Stadt spielte eine zentrale Rolle während der serbischen Aufstände gegen das Osmanische Reich, was durch Muselims Konak, das älteste Gebäude der Stadt, bezeugt wird. Das Nationalmuseum von Valjevo ist für seine innovativen Ausstellungen bekannt und wurde mehrfach ausgezeichnet. In der Nähe der Stadt befinden sich die bedeutenden Klöster Lelić und Ćelije sowie das malerische Dorf Brankovina. Die umliegenden Berge Maljen und Povlen bieten zahlreiche Möglichkeiten für Naturtourismus und Wandern. Valjevo verbindet erfolgreich den Charme vergangener Zeiten mit einer lebendigen modernen Kultur und Wirtschaft.",
      hu: "Valjevo Nyugat-Szerbiában, a Kolubara folyó partján fekszik; gazdag kulturális örökséggel és jelentős történelmi múlttal rendelkező város. A város egyik jelképe Tešnjar, a Kolubara jobb partján található régi negyed, amely a 19. századi orientális stílusú bazár egyik legjobb állapotban fennmaradt példája Szerbiában. A város központi szerepet játszott az oszmán uralom elleni szerb felkelésekben, aminek tanúja a Muselim-konak, a város legrégebbi épülete. A Valjevoi Nemzeti Múzeum innovatív kiállításairól híres, és több szakmai díjat is elnyert. A város közelében találhatók a jelentős Lelić- és Ćelije-kolostorok, valamint a festői Brankovina falu. A környező Maljen- és Povlen-hegységek számos lehetőséget kínálnak a természetjárásra és túrázásra. Valjevo sikeresen ötvözi a múlt báját a pezsgő modern kultúrával és gazdasággal.",
      ro: "Valjevo este situat în vestul Serbiei, pe malurile râului Kolubara, fiind un oraș cu o bogată moștenire culturală și o mare importanță istorică. Un punct de referință al orașului este Tešnjar, un cartier vechi situat pe malul drept al Kolubarei, care reprezintă unul dintre cele mai bine conservate exemple de bazar cu influențe orientale din secolul al XIX-lea. Orașul a jucat un rol central în timpul răscoalelor sârbe împotriva Imperiului Otoman, fapt atestat de Conacul lui Muselim, cea mai veche clădire din oraș. Muzeul Național din Valjevo este renumit pentru expozițiile sale inovatoare, fiind premiat de mai multe ori la nivel național. În apropierea orașului se află mănăstiri importante precum Lelić și Ćelije, dar și satul pitoresc Brankovina. Munții din jur, Maljen și Povlen, oferă numeroase oportunități pentru turismul montan și drumeții. Valjevo îmbină cu succes farmecul vremurilor trecute cu o cultură modernă vibrantă.",
      en: "Valjevo is located in western Serbia on the banks of the Kolubara river and is a city rich in cultural heritage and historical importance. One of the city's most famous landmarks is Tešnjar, an old quarter on the right bank of the Kolubara, which remains one of the best-preserved examples of a 19th-century Oriental-style bazaar. The city played a pivotal role during the Serbian uprisings against the Ottoman Empire, a history preserved in Muselim's Lodging, the oldest building in Valjevo. The National Museum of Valjevo is highly regarded for its innovative displays and has received multiple awards for its curation. Nearby attractions include the significant Lelić and Ćelije monasteries, as well as the historic village of Brankovina. The surrounding Maljen and Povlen mountains provide ample opportunities for nature tourism and hiking. Today, Valjevo successfully balances its historical charm with a dynamic modern economy and cultural scene.",
      es: "Valjevo se encuentra en el oeste de Serbia, a orillas del Gradac y el Kolubara. La ciudad es el centro administrativo del distrito de Kolubara y es conocida por su barrio histórico, Tešnjar. Este barrio en la orilla derecha conserva arquitectura de la época otomana. Valjevo es también un importante centro cultural con una historia comercial de larga tradición.",
      pt: "Valjevo situa-se no oeste da Sérvia, nas margens dos rios Gradac e Kolubara. A cidade é o centro administrativo do distrito de Kolubara e é conhecida pelo seu bairro histórico, Tešnjar. Este bairro na margem direita preserva a arquitetura da era otomana. Valjevo é também um importante centro cultural com uma história comercial de longa tradição.",
      fr: "Valjevo est située dans l'ouest de la Serbie, sur les rives des rivières Gradac et Kolubara. La ville est le centre administratif du district de Kolubara et est célèbre pour son quartier historique de Tešnjar. Ce quartier sur la rive droite conserve une architecture de l'époque ottomane. Valjevo est également un centre culturel important doté d'une longue tradition commerciale.",
    },
    factsAdvanced: {
      de: ["Valjevo wurde im Jahr 1393 erstmals schriftlich erwähnt.", "Das Tešnjar-Viertel umfasst etwa 30 gut erhaltene Gebäude aus dem 19. Jahrhundert.", "Das Muselim-Konak wurde im 18. Jahrhundert erbaut.", "Der Fluss Gradac bei Valjevo gilt als einer der saubersten Flüsse Europas.", "Die Stadt liegt auf einer Höhe von 185 Metern über dem Meeresspiegel.", "Das Nationalmuseum wurde 2012 zum besten Museum Serbiens gekürt."],
      hu: ["Valjevót 1393-ban említik először írásos források.", "A Tešnjar negyedben mintegy 30 jól konzervált 19. századi épület található.", "A Muselim-konak a 18. század végén épült.", "A Valjevo melletti Gradac-folyót Európa egyik legtisztább folyójaként tartják számon.", "A város tengerszint feletti magassága 185 méter.", "A Nemzeti Múzeum 2012-ben elnyerte az év legjobb szerbiai múzeuma címet."],
      ro: ["Valjevo a fost menționat pentru prima dată în scris în anul 1393.", "Cartierul Tešnjar cuprinde aproximativ 30 de clădiri bine conservate din secolul al XIX-lea.", "Conacul lui Muselim a fost construit la sfârșitul secolului al XVIII-lea.", "Râul Gradac, aflat lângă Valjevo, este considerat unul dintre cele mai curate din Europa.", "Orașul este situat la o altitudine de 185 de metri.", "Muzeul Național a fost desemnat cel mai bun muzeu din Serbia în anul 2012."],
      en: ["Valjevo was first mentioned in historical documents in 1393.", "The Tešnjar quarter contains about 30 well-preserved 19th-century structures.", "Muselim's Lodging was originally constructed in the late 18th century.", "The nearby Gradac River is recognized as one of the cleanest rivers in Europe.", "The city sits at an average elevation of 185 meters above sea level.", "The National Museum was awarded the title of Serbia's best museum in 2012."],
      es: ["La ciudad fue mencionada por primera vez en un documento en el año 1393.", "Valjevo se encuentra a una altura media de 185 metros.", "El río Gradac es considerado uno de los ríos más limpios de Europa.", "El barrio histórico de Tešnjar surgió en el siglo XVII.", "La ciudad tiene una población de unos 58.000 habitantes.", "El monte Povlen alcanza una altura de 1.347 metros en las cercanías."],
      pt: ["A cidade foi mencionada pela primeira vez num documento no ano 1393.", "Valjevo situa-se a uma altitude média de 185 metros.", "O rio Gradac é considerado um dos rios mais limpos da Europa.", "O bairro histórico de Tešnjar surgiu no século XVII.", "A cidade tem uma população de cerca de 58.000 habitantes.", "O monte Povlen atinge uma altitude de 1.347 metros nas proximidades."],
      fr: ["La ville a été mentionnée pour la première fois dans un document en 1393.", "Valjevo est située à une altitude moyenne de 185 mètres.", "La rivière Gradac est considérée comme l'une des plus propres d'Europe.", "Le quartier historique de Tešnjar a vu le jour au XVIIe siècle.", "La ville compte environ 58 000 habitants.", "Le mont Povlen culmine à 1 347 mètres à proximité."],
    },
    image: "/poi-images/RS-025-valjevo.webp",
  },
  {
    id: "RS-025-lelic",
    type: "historical",
    parent: "RS-025",
    coords: [19.8400, 44.2100],
    name: { de: "Kloster Lelić", hu: "Lelić kolostor", ro: "Mănăstirea Lelić", en: "Lelić Monastery" },
    description: {
      de: "Ein modernes, aber bedeutendes Kloster, dem Heiligen Nikolai Velimirović gewidmet.",
      hu: "Modern, de jelentős kolostor, amelyet Szent Nikolai Velimirovićnak szenteltek.",
      ro: "O mănăstire modernă, dar importantă, dedicată Sfântului Nikolai Velimirović.",
      en: "A modern but significant monastery dedicated to Saint Nikolai Velimirović.",
      es: "Un monasterio moderno pero significativo, dedicado a San Nikolai Velimirović.",
      pt: "Um mosteiro moderno mas significativo, dedicado a São Nikolai Velimirović.",
      fr: "Un monastère moderne mais important, dédié à Saint Nikolai Velimirović.",
    },
    facts: {
      de: ["Reliquien des Hl. Nikolai", "Einzigartige Architektur", "Pilgerstätte"],
      hu: ["Szent Nikolai ereklyéi", "Egyedi építészet", "Zarándokhely"],
      ro: ["Moaștele Sf. Nikolai", "Arhitectură unică", "Loc de pelerinaj"],
      en: ["Relics of St. Nikolai", "Unique architecture", "Pilgrimage site"],
      es: ["Reliquias de San Nikolai", "Arquitectura única", "Lugar de peregrinación"],
      pt: ["Relíquias de São Nikolai", "Arquitetura única", "Local de peregrinação"],
      fr: ["Reliques de St Nikolai", "Architecture unique", "Lieu de pèlerinage"],
    },
    descriptionAdvanced: {
      de: "Das Kloster Lelić liegt im gleichnamigen Dorf, etwa 11 Kilometer von Valjevo entfernt, an den Hängen des Povlen-Gebirges. Es ist eine der jüngsten, aber bedeutendsten Klosteranlagen Serbiens, gegründet im Jahr 1929 durch den Heiligen Bischof Nikolaj Velimirović und seinen Vater Dragomir. Die Architektur der Klosterkirche ist eine moderne Interpretation der Morava-Schule, kombiniert mit neobyzantinischen Elementen, und besticht durch ihre charakteristischen Kuppeln. Lelić ist ein bedeutender Wallfahrtsort, da hier die Reliquien des Heiligen Nikolaj Velimirović aufbewahrt werden, der 1991 aus den USA überführt wurde. Das Kloster beherbergt auch ein kleines Museum, das dem Leben und Werk dieses einflussreichen serbischen Theologen gewidmet ist. Die ruhige Umgebung und die spirituelle Atmosphäre machen Lelić zu einem Ort der Einkehr und Besinnung. Zusammen mit dem nahe gelegenen Kloster Ćelije bildet es ein wichtiges geistiges Zentrum in der Region Valjevo.",
      hu: "A Lelić-kolostor az azonos nevű faluban található, mintegy 11 kilométerre Valjevótól, a Povlen-hegység lejtőin. Ez Szerbia egyik legfiatalabb, de legjelentősebb kolostoregyüttese, amelyet 1929-ben alapított Szent Nikolaj Velimirović püspök és édesapja, Dragomir. A kolostortemplom építészete a morva iskola modern értelmezése, neobizánci elemekkel ötvözve, és jellegzetes kupoláival hívja fel magára a figyelmet. Lelić fontos zarándokhely, mivel itt őrzik Szent Nikolaj Velimirović ereklyéit, amelyeket 1991-ben szállítottak haza az Egyesült Államokból. A kolostorban egy kis múzeum is található, amely a befolyásos szerb teológus életét és munkásságát mutatja be. A nyugodt környezet és a spirituális légkör az elmélyülés és az elmélkedés helyszínévé teszi Lelićet. A közeli Ćelije-kolostorral együtt a valjevói régió fontos szellemi központját alkotja.",
      ro: "Mănăstirea Lelić este situată în satul cu același nume, la aproximativ 11 kilometri de Valjevo, pe pantele muntelui Povlen. Este unul dintre cele mai tinere, dar și cele mai importante ansambluri monahale din Serbia, fiind fondat în anul 1929 de către Sfântul Episcop Nikolaj Velimirović și tatăl său, Dragomir. Arhitectura bisericii mănăstirii este o interpretare modernă a școlii de pe Morava, combinată cu elemente neobizantine, evidențiindu-se prin cupolele sale caracteristice. Lelić este un loc de pelerinaj major, deoarece adăpostește moaștele Sfântului Nikolaj Velimirović, care au fost aduse aici din SUA în anul 1991. Mănăstirea include și un mic muzeu dedicat vieții și operei acestui influent teolog sârb. Cadrul natural liniștit și atmosfera spirituală fac din Lelić un loc de reculegere și reflecție. Împreună cu mănăstirea Ćelije din apropiere, formează un centru spiritual esențial în regiunea Valjevo.",
      en: "Lelić Monastery is situated in the village of the same name, about 11 kilometers from Valjevo on the slopes of Mount Povlen. Although it is one of Serbia's younger monastic complexes, established in 1929, it holds immense spiritual significance. It was founded by Saint Bishop Nikolaj Velimirović and his father, Dragomir. The architecture of the monastery church is a modern interpretation of the traditional Morava school, blended with Neo-Byzantine elements and featuring striking domes. Lelić is a major pilgrimage site because it houses the relics of Saint Nikolaj Velimirović, which were transferred here from the United States in 1991. The monastery grounds also include a small museum dedicated to the life and prolific theological works of the bishop. The peaceful environment and spiritual atmosphere make Lelić a sanctuary for contemplation. Alongside the nearby Ćelije Monastery, it forms the spiritual heart of the Valjevo region.",
      es: "El monasterio de Lelić se encuentra a unos 11 kilómetros de Valjevo, en el pueblo del mismo nombre. Fue construido en 1922 como una fundación del obispo Nikolaj Velimirović y su padre Dragomir. La arquitectura sigue el estilo serbio-bizantino y alberga las reliquias del obispo. Hoy es un importante lugar de peregrinación para la Iglesia Ortodoxa Serbia.",
      pt: "O mosteiro de Lelić situa-se a cerca de 11 quilómetros de Valjevo, na aldeia com o mesmo nome. Foi construído em 1922 como uma fundação do bispo Nikolaj Velimirović e do seu pai Dragomir. A arquitetura segue o estilo sérvio-bizantino e abriga as relíquias do bispo. Hoje, é um importante local de peregrinação para a Igreja Ortodoxa Sérvia.",
      fr: "Le monastère de Lelić est situé à environ 11 kilomètres de Valjevo, dans le village du même nom. Il a été érigé en 1922 en tant que fondation de l'évêque Nikolaj Velimirović et de son père Dragomir. L'architecture est de style serbo-byzantin et abrite les reliques de l'évêque. C'est aujourd'hui un important lieu de pèlerinage pour l'Église orthodoxe serbe.",
    },
    factsAdvanced: {
      de: ["Die Klosterkirche ist dem Heiligen Nikolaus von Myra gewidmet.", "Der Bau der Anlage begann im Jahr 1927.", "Bischof Nikolaj Velimirović wurde hier im Jahr 1881 geboren.", "Die Reliquien des Heiligen wurden am 12. Mai 1991 nach Lelić überführt.", "Die Ikonostase wurde von lokalen Meistern in traditioneller Weise gefertigt.", "Das Kloster wurde im Jahr 1996 offiziell zum Männerkloster erklärt."],
      hu: ["A kolostortemplomot Myrai Szent Miklósnak szentelték.", "Az épületegyüttes építése 1927-ben kezdődött.", "Nikolaj Velimirović püspök 1881-ben született ebben a faluban.", "A szent ereklyéit 1991. május 12-én szállították át Lelićbe.", "Az ikonosztázt helyi mesterek készítették hagyományos stílusban.", "A kolostort 1996-ban nyilvánították hivatalosan férfi kolostorrá."],
      ro: ["Biserica mănăstirii este dedicată Sfântului Nicolae din Mira.", "Construcția ansamblului a început în anul 1927.", "Episcopul Nikolaj Velimirović s-a născut aici în anul 1881.", "Moaștele sfântului au fost transferate la Lelić pe data de 12 mai 1991.", "Iconostasul a fost realizat de meșteri locali în stil tradițional.", "Mănăstirea a fost declarată oficial mănăstire de călugări în anul 1996."],
      en: ["The main monastery church is dedicated to Saint Nicholas of Myra.", "Construction of the monastic complex began in 1927.", "Bishop Nikolaj Velimirović was born in this village in 1881.", "The saint's relics were repatriated to Lelić on May 12, 1991.", "The iconostasis was crafted by local masters following traditional designs.", "The monastery was officially designated as a male monastery in 1996."],
      es: ["El monasterio fue consagrado oficialmente el 15 de junio de 1922.", "La iglesia está dedicada a San Nicolás de Mira.", "El obispo Nikolaj Velimirović nació en el pueblo de Lelić en 1881.", "Las reliquias del obispo fueron trasladadas aquí desde los EE. UU. en 1991.", "El monasterio se convirtió en un monasterio masculino en 1996.", "El iconostasio data de la época de la fundación del monasterio."],
      pt: ["O mosteiro foi oficialmente consagrado em 15 de junho de 1922.", "A igreja é dedicada a São Nicolau de Mira.", "O bispo Nikolaj Velimirović nasceu na aldeia de Lelić em 1881.", "As relíquias do bispo foram transferidas dos EUA para aqui em 1991.", "O mosteiro foi convertido num mosteiro masculino em 1996.", "A iconostase data da época da fundação do mosteiro."],
      fr: ["Le monastère a été officiellement consacré le 15 juin 1922.", "L'église est dédiée à Saint Nicolas de Myre.", "L'évêque Nikolaj Velimirović est né dans le village de Lelić en 1881.", "Les reliques de l'évêque ont été transférées des États-Unis ici en 1991.", "Le monastère a été transformé en monastère pour hommes en 1996.", "L'iconostase date de l'époque de la fondation du monastère."],
    },
    image: "/poi-images/RS-025-lelic.webp",
  }
];

export const serbiaAllPoi: POI[] = [
  serbiaCountry,
  ...serbiaRegions,
  ...serbiaCities,
  ...serbiaCulture,
  ...serbiaNature,
  ...serbiaRivers,
  ...serbiaDistrictPoi
];
