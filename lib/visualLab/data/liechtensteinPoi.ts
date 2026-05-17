// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraLiechtensteinCities } from "./poiExtraLiechtensteinCities";
import { poiExtraLiechtensteinHistory } from "./poiExtraLiechtensteinHistory";
import { poiExtraLiechtensteinOther } from "./poiExtraLiechtensteinOther";

export const liechtensteinCountry: POI = {
  id: "country-liechtenstein",
  type: "country",
  parent: "europe",
  coords: [9.5554, 47.1660],
  name: {
    de: "Liechtenstein",
    hu: "Liechtenstein",
    ro: "Liechtenstein",
    en: "Liechtenstein"
  },
  description: {
    de: "Ein kleiner, wohlhabender Fürstentum in den Alpen, bekannt für mittelalterliche Burgen, alpine Landschaften und ein wichtiges Finanzzentrum.",
    hu: "Egy apró, gazdag hercegség az Alpokban, amely középkori várairól, alpesi tájairól és pénzügyi központjáról ismert.",
    ro: "Un mic și prosper principat în Alpi, cunoscut pentru castelele medievale, peisajele alpine și ca un important centru financiar.",
    en: "A tiny, wealthy principality in the Alps, known for its medieval castles, alpine landscapes, and as a major financial center."
  }, image: "/poi-images/country-liechtenstein.webp"};

export const liechtensteinRegions: POI[] = [
  {
    id: "LI-001",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1000],
    name: { de: "Triesen", hu: "Triesen", ro: "Triesen", en: "Triesen" }, image: "/poi-images/LI-001.webp",
    description: {
      de: "Triesen ist die drittgrößte Gemeinde Liechtensteins und bietet historische Kirchen und malerische Bergaussichten.",
      hu: "Triesen Liechtenstein harmadik legnagyobb önkormányzata, történelmi templomokkal és festői hegyi kilátással.",
      ro: "Triesen este a treia cea mai mare municipalitate din Liechtenstein, având biserici istorice și vederi pitorești la munte.",
      en: "Triesen is the third largest municipality in Liechtenstein, featuring historic churches and scenic mountain views."
    },
    facts: {
      de: ["Liegt im Süden des Landes.", "Beherbergt eine bemerkenswerte Weberei aus dem 19. Jahrhundert.", "Bietet hervorragende Wanderwege in die Alpen."],
      hu: ["Az ország déli részén található.", "Itt található egy figyelemre méltó 19. századi szövőmalom.", "Kiváló túraútvonalakat kínál az Alpok felé."],
      ro: ["Situat în sudul țării.", "Găzduiește o moară de țesut notabilă din secolul al XIX-lea.", "Oferă trasee excelente de drumeții spre Alpi."],
      en: ["Located in the south of the country.", "It is home to a notable weaving mill from the 19th century.", "Offers excellent hiking trails towards the Alps."]
    }
  },
  {
    id: "LI-002",
    type: "region",
    parent: "LI-ALL",
    coords: [9.4833, 47.1666],
    name: { de: "Schaan", hu: "Schaan", ro: "Schaan", en: "Schaan" }, image: "/poi-images/LI-002.webp",
    description: {
      de: "Schaan ist die bevölkerungsreichste Gemeinde Liechtensteins und ein wichtiges industrielles und wirtschaftliches Zentrum.",
      hu: "Schaan Liechtenstein legnépesebb önkormányzata, amely fontos ipari és gazdasági központként működik.",
      ro: "Schaan este cea mai populată municipalitate din Liechtenstein, acționând ca un important centru industrial și economic.",
      en: "Schaan is the largest municipality of Liechtenstein by population, acting as an important industrial and economic hub."
    },
    facts: {
      de: ["Liegt zentral im Land, nördlich von Vaduz.", "Heimat großer internationaler Unternehmen.", "Weist archäologische Stätten aus der Römerzeit auf."],
      hu: ["Központilag helyezkedik el az országban, Vaduztól északra.", "Nagy nemzetközi vállalatok otthona.", "A római korból származó régészeti lelőhelyekkel is rendelkezik."],
      ro: ["Este situat central în țară, la nord de Vaduz.", "Găzduiește mari companii internaționale.", "Are situri arheologice din epoca romană."],
      en: ["It is located centrally in the country, just north of Vaduz.", "Home to major international companies.", "Features archaeological sites from the Roman era."]
    }
  },
  {
    id: "LI-003",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1166],
    name: { de: "Triesenberg", hu: "Triesenberg", ro: "Triesenberg", en: "Triesenberg" }, image: "/poi-images/LI-003.webp",
    description: {
      de: "Triesenberg ist die höchstgelegene Gemeinde in Liechtenstein, bekannt für ihre ausgeprägte Walserkultur und Panoramablicke.",
      hu: "Triesenberg Liechtenstein legmagasabban fekvő önkormányzata, amely különleges walser kultúrájáról és panorámás kilátásairól ismert.",
      ro: "Triesenberg este cea mai înaltă municipalitate din Liechtenstein, cunoscută pentru cultura sa distinctă Walser și vederile panoramice.",
      en: "Triesenberg is the highest municipality in Liechtenstein, known for its distinct Walser culture and panoramic views."
    },
    facts: {
      de: ["Im 14. Jahrhundert von Walser Einwanderern besiedelt.", "Liegt auf einer Höhe von über 800 Metern.", "Der lokale Dialekt unterscheidet sich stark vom Rest des Landes."],
      hu: ["A 14. században walser bevándorlók telepítették be.", "Több mint 800 méteres tengerszint feletti magasságban fekszik.", "A helyi dialektus jelentősen eltér az ország többi részétől."],
      ro: ["Așezată de migranții Walser în secolul al XIV-lea.", "Situată la o altitudine de peste 800 de metri.", "Dialectul local diferă semnificativ de restul țării."],
      en: ["Settled by Walser migrants in the 14th century.", "Located at an altitude of over 800 meters.", "The local dialect differs significantly from the rest of the country."]
    }
  },
  {
    id: "LI-004",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5000, 47.0666],
    name: { de: "Balzers", hu: "Balzers", ro: "Balzers", en: "Balzers" }, image: "/poi-images/LI-004.webp",
    description: {
      de: "Balzers ist ein malerisches Dorf im Süden Liechtensteins, berühmt für die markante Burg Gutenberg.",
      hu: "Balzers egy festői falu Dél-Liechtensteinben, amely híres a kiemelkedő Gutenberg-várról.",
      ro: "Balzers este un sat pitoresc în sudul Liechtensteinului, faimos pentru remarcabilul Castel Gutenberg.",
      en: "Balzers is a picturesque village in southern Liechtenstein, famous for the prominent Gutenberg Castle."
    },
    facts: {
      de: ["Die Burg Gutenberg thront stolz auf einem felsigen Hügel im Dorfzentrum.", "Zur Gemeinde gehört auch das Dorf Mäls.", "Hat eine starke landwirtschaftliche Tradition."],
      hu: ["A Gutenberg-vár büszkén áll egy sziklás dombon a falu központjában.", "Az önkormányzathoz tartozik Mäls falu is.", "Erős mezőgazdasági hagyományokkal rendelkezik."],
      ro: ["Castelul Gutenberg se înalță mândru pe un deal stâncos în centrul satului.", "Municipalitatea include și satul Mäls.", "Are o puternică tradiție agricolă."],
      en: ["Gutenberg Castle stands proudly on a rocky hill in the village center.", "The municipality includes the village of Mäls.", "It has a strong agricultural tradition."]
    }
  },
  {
    id: "LI-005",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5444, 47.1855],
    name: { de: "Planken", hu: "Planken", ro: "Planken", en: "Planken" }, image: "/poi-images/LI-005.webp",
    description: {
      de: "Planken ist die kleinste Gemeinde in Liechtenstein und bietet einen ruhigen Rückzugsort mit herrlichem Blick auf das Rheintal.",
      hu: "Planken Liechtenstein legkisebb önkormányzata, amely csendes menedéket kínál lenyűgöző kilátással a Rajna-völgyre.",
      ro: "Planken este cea mai mică municipalitate din Liechtenstein, oferind o retragere liniștită cu vederi uimitoare asupra Văii Rinului.",
      en: "Planken is the smallest municipality in Liechtenstein, offering a quiet retreat with stunning views of the Rhine Valley."
    },
    facts: {
      de: ["Hat eine Bevölkerung von weniger als 500 Einwohnern.", "Liegt am Westhang des Drei-Schwestern-Massivs.", "Der Name leitet sich von einem lateinischen Wort ab, das 'Lichtung' bedeutet."],
      hu: ["Lakossága kevesebb mint 500 fő.", "A Drei Schwestern-hegység nyugati lejtőjén található.", "Nevét egy latin szóból kapta, ami 'tisztást' jelent."],
      ro: ["Are o populație de sub 500 de locuitori.", "Situat pe versantul vestic al masivului Drei Schwestern.", "Numele provine de la un cuvânt latin care înseamnă 'luminiș'."],
      en: ["It has a population of less than 500 residents.", "Located on the western slope of the Drei Schwestern massif.", "It is named after a Latin word meaning 'clearing'."]
    }
  },
  {
    id: "LI-006",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5166, 47.2000],
    name: { de: "Eschen", hu: "Eschen", ro: "Eschen", en: "Eschen" }, image: "/poi-images/LI-006.webp",
    description: {
      de: "Eschen ist der Hauptort des liechtensteinischen Unterlandes und bietet eine Mischung aus moderner Industrie und historischen Stätten.",
      hu: "Eschen a liechtensteini Unterland fő önkormányzata, a modern ipar és történelmi helyszínek keverékével.",
      ro: "Eschen este principala municipalitate din Unterlandul Liechtensteinului, cu un amestec de industrie modernă și situri istorice.",
      en: "Eschen is the principal municipality of the Liechtenstein Unterland, featuring a mix of modern industry and historical sites."
    },
    facts: {
      de: ["Es ist die größte Gemeinde im nördlichen Teil des Landes.", "Das Pfrundhaus ist ein bekanntes historisches Gebäude hier.", "Gilt oft als das wirtschaftliche Zentrum des Unterlandes."],
      hu: ["Az ország északi részének legnagyobb közössége.", "A Pfrundhaus egy jól ismert történelmi épület itt.", "Gyakran az Unterland gazdasági központjának tekintik."],
      ro: ["Este cea mai mare comunitate din partea de nord a țării.", "Pfrundhaus este o clădire istorică bine cunoscută aici.", "Considerat adesea centrul economic al Unterlandului."],
      en: ["It is the largest community in the northern part of the country.", "The Pfrundhaus is a well-known historical building here.", "Often considered the economic center of the Unterland."]
    }
  },
  {
    id: "LI-007",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2166],
    name: { de: "Mauren", hu: "Mauren", ro: "Mauren", en: "Mauren" }, image: "/poi-images/LI-007.webp",
    description: {
      de: "Mauren ist eine Gemeinde im Unterland, bekannt für ihre reiche Geschichte und das wunderschöne Vogelparadies Birka.",
      hu: "Mauren egy önkormányzat az Unterland régióban, gazdag történelméről és a gyönyörű Birka Madárparadicsomról ismert.",
      ro: "Mauren este o municipalitate în regiunea Unterland, cunoscută pentru istoria sa bogată și frumosul Paradis al Păsărilor Birka.",
      en: "Mauren is a municipality in the Unterland region, known for its rich history and the beautiful Birka Bird Sanctuary."
    },
    facts: {
      de: ["Erstmals im 12. Jahrhundert urkundlich erwähnt.", "Umfasst auch das Dorf Schaanwald.", "Verfügt über ein Denkmal für Peter Kaiser, einen berühmten lokalen Historiker."],
      hu: ["Először a 12. században említik oklevelekben.", "Magában foglalja Schaanwald falut.", "Emlékművet állítottak Peter Kaisernek, a híres helyi történésznek."],
      ro: ["Menționat pentru prima dată în documente în secolul al XII-lea.", "Include și satul Schaanwald.", "Are un memorial dedicat lui Peter Kaiser, un faimos istoric local."],
      en: ["First mentioned in documents in the 12th century.", "Includes the village of Schaanwald.", "Features a memorial dedicated to Peter Kaiser, a famous local historian."]
    }
  },
  {
    id: "LI-008",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5472, 47.2333],
    name: { de: "Schellenberg", hu: "Schellenberg", ro: "Schellenberg", en: "Schellenberg" }, image: "/poi-images/LI-008.webp"},
  {
    id: "LI-009",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2333],
    name: { de: "Ruggell", hu: "Ruggell", ro: "Ruggell", en: "Ruggell" }, image: "/poi-images/LI-009.webp"},
  {
    id: "LI-010",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5210, 47.1410],
    name: { de: "Vaduz", hu: "Vaduz", ro: "Vaduz", en: "Vaduz" }, image: "/poi-images/LI-010.webp"},
  {
    id: "LI-011",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5083, 47.2183],
    name: { de: "Gamprin", hu: "Gamprin", ro: "Gamprin", en: "Gamprin" }, image: "/poi-images/LI-011.webp"}
];

export const liechtensteinCities: POI[] = [
];

export const liechtensteinCulture: POI[] = [
  {
    id: "li-cult-vaduz-castle",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5240, 47.1394],
    name: {
      de: "Schloss Vaduz",
      hu: "Vaduz vára",
      ro: "Castelul Vaduz",
      en: "Vaduz Castle"
    },
    descriptionAdvanced: {
      de: "Schloss Vaduz thront auf einer Felsterrasse über der Hauptstadt Liechtensteins und ist die offizielle Residenz des Fürstenhauses. Die ältesten Teile der Burganlage stammen aus dem 12. Jahrhundert, während spätere Erweiterungen den Charakter einer repräsentativen Festung prägten. Da das Schloss privat bewohnt wird, ist es für die Öffentlichkeit meist nur von außen als markantes Wahrzeichen des Landes erlebbar.",
      hu: "A vaduzi vár egy sziklateraszon magasodik Liechtenstein fővárosa fölé, és a fejedelmi család hivatalos rezidenciája. Az erődítmény legrégebbi részei a 12. századból származnak, míg a későbbi bővítések reprezentatív erőd jelleget kölcsönöztek neki. Mivel a vár magánlakosztályként szolgál, a nagyközönség számára többnyire csak kívülről, az ország jelképeként tekinthető meg.",
      ro: "Castelul Vaduz tronează pe o terasă stâncoasă deasupra capitalei Liechtensteinului și este reședința oficială a casei princiare. Cele mai vechi părți ale complexului datează din secolul al XII-lea, în timp ce extinderile ulterioare i-au conferit caracterul unei fortărețe reprezentative. Deoarece castelul este locuit privat, acesta este accesibil publicului de obicei doar din exterior, ca simbol al țării.",
      en: "Vaduz Castle perched on a rocky terrace overlooking the capital of Liechtenstein and serves as the official residence of the Princely Family. The oldest parts of the fortress date back to the 12th century, while later expansions shaped its character as a representative stronghold. As the castle is a private residence, it is generally experienced by the public only from the outside as a prominent national landmark.",
    },
    factsAdvanced: {
      de: ["Bau der Kernburg im 12. Jahrhundert", "Ständiger Wohnsitz der Fürstenfamilie seit 1939", "Liegt etwa 120 Meter über der Stadt Vaduz", "Der Bergfried hat eine Mauerdicke von bis zu 4 Metern", "Im Schwabenkrieg 1499 teilweise zerstört", "Erweiterung unter Fürst Johann II. von 1905 bis 1912"],
      hu: ["A központi vár a 12. században épült", "A fejedelmi család állandó lakhelye 1939 óta", "Körülbelül 120 méterrel Vaduz városa felett fekszik", "Az öregtorony falvastagsága eléri a 4 métert", "A sváb háborúban, 1499-ben részben elpusztult", "II. János fejedelem idején, 1905-1912 között bővítették"],
      ro: ["Construcția nucleului castelului în secolul al XII-lea", "Reședința permanentă a familiei princiare din 1939", "Situat la aproximativ 120 de metri deasupra orașului Vaduz", "Turnul principal are ziduri cu o grosime de până la 4 metri", "Distrus parțial în Războiul Șvab din 1499", "Extins sub prințul Johann al II-lea între 1905 și 1912"],
      en: ["Construction of the core castle in the 12th century", "Permanent residence of the Princely Family since 1939", "Located approximately 120 meters above Vaduz", "The keep has walls up to 4 meters thick", "Partially destroyed during the Swabian War in 1499", "Expanded under Prince Johann II from 1905 to 1912"],
    },
    image: "/poi-images/li-cult-vaduz-castle.webp",
  },
  {
    id: "li-cult-gutenberg-castle",
    type: "landmark",
    parent: "LI-004",
    coords: [9.5008, 47.0633],
    name: {
      de: "Burg Gutenberg",
      hu: "Gutenberg-vár",
      ro: "Castelul Gutenberg",
      en: "Gutenberg Castle"
    }, image: "/poi-images/li-cult-gutenberg-castle.webp",
    descriptionAdvanced: {
      de: "Burg Gutenberg erhebt sich auf einem freistehenden Felshügel in Balzers, der südlichsten Gemeinde Liechtensteins. Die hochmittelalterliche Anlage ist eine der wenigen vollständig erhaltenen Burgen des Landes und blickt auf eine Siedlungsgeschichte zurück, die bis in die Jungsteinzeit reicht. Heute dient die restaurierte Burg als kulturelles Zentrum für Ausstellungen und Veranstaltungen in einer beeindruckenden alpinen Kulisse.",
      hu: "A Gutenberg-vár egy különálló szikladombon emelkedik Balzersben, Liechtenstein legdélebbi községében. A késő középkori épületegyüttes az ország kevés teljesen épségben maradt várának egyike, és olyan településtörténetre tekint vissza, amely egészen az újkőkorig nyúlik vissza. Ma a restaurált vár kulturális központként szolgál kiállításoknak és rendezvényeknek az Alpok lenyűgöző díszletei között.",
      ro: "Castelul Gutenberg se ridică pe un deal stâncos izolat în Balzers, cea mai sudică comună din Liechtenstein. Complexul medieval este unul dintre puținele castele complet conservate din țară și are o istorie de locuire care datează din epoca neolitică. Astăzi, castelul restaurat servește drept centru cultural pentru expoziții și evenimente într-un cadru alpin impresionant.",
      en: "Gutenberg Castle rises on a free-standing rocky hill in Balzers, the southernmost municipality of Liechtenstein. The high medieval complex is one of the few fully preserved castles in the country and boasts a settlement history dating back to the Neolithic period. Today, the restored castle serves as a cultural hub for exhibitions and events set against a stunning alpine backdrop.",
    },
    factsAdvanced: {
      de: ["Bau der Burganlage um das Jahr 1100", "Liegt auf einem etwa 70 Meter hohen Felshügel", "Seit 1979 im Besitz des Staates Liechtenstein", "Archäologische Funde aus der Jungsteinzeit vor Ort", "Umfassende Restaurierung zwischen 1905 und 1910", "Verfügt über eine Kapelle und einen Rosengarten"],
      hu: ["A vár építése 1100 körül kezdődött", "Egy körülbelül 70 méter magas szikladombon áll", "1979 óta Liechtenstein állam tulajdonában van", "Területén újkőkori régészeti leleteket tártak fel", "Átfogó restaurálása 1905 és 1910 között történt", "Saját kápolnával és rózsakerttel rendelkezik"],
      ro: ["Construcția castelului în jurul anului 1100", "Situat pe un deal stâncos înalt de aproximativ 70 de metri", "În proprietatea statului Liechtenstein din 1979", "Descoperiri arheologice din neolitic la fața locului", "Restaurare amplă între anii 1905 și 1910", "Dispune de o capelă și o grădină de trandafiri"],
      en: ["Construction of the castle complex around 1100", "Situated on a rocky hill approximately 70 meters high", "Owned by the State of Liechtenstein since 1979", "Archaeological finds on-site date to the Neolithic era", "Extensively restored between 1905 and 1910", "Features a chapel and a rose garden"],
    },
  },
  {
    id: "li-cult-kunstmuseum",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5222, 47.1400],
    name: {
      de: "Kunstmuseum Liechtenstein",
      hu: "Liechtensteini Művészeti Múzeum",
      ro: "Muzeul de Artă Liechtenstein",
      en: "Kunstmuseum Liechtenstein"
    }, image: "/poi-images/li-cult-kunstmuseum.webp",
    descriptionAdvanced: {
      de: "Das Kunstmuseum Liechtenstein in Vaduz ist ein staatliches Museum für moderne und zeitgenössische Kunst. Der markante schwarze Kubus aus Basaltstein wurde von den Schweizer Architekten Morger, Degelo und Kerez entworfen und im Jahr 2000 eröffnet. Die Sammlung umfasst internationale Kunst von der klassischen Moderne bis zur Gegenwart, wobei ein besonderer Fokus auf Installationen und Skulpturen liegt.",
      hu: "A vaduzi Kunstmuseum Liechtenstein egy állami modern és kortárs művészeti múzeum. A bazaltkőből készült, jellegzetes fekete kockát svájci építészek (Morger, Degelo és Kerez) tervezték, és 2000-ben nyitották meg. A gyűjtemény nemzetközi műalkotásokat tartalmaz a klasszikus moderntől a jelenkorig, különös hangsúlyt fektetve az installációkra és a szobrokra.",
      ro: "Kunstmuseum Liechtenstein din Vaduz este un muzeu de stat dedicat artei moderne și contemporane. Cubul negru distinctiv din piatră de bazalt a fost proiectat de arhitecții elvețieni Morger, Degelo și Kerez și inaugurat în anul 2000. Colecția cuprinde artă internațională de la modernismul clasic până în prezent, cu un accent deosebit pe instalații și sculpturi.",
      en: "The Kunstmuseum Liechtenstein in Vaduz is a state museum for modern and contemporary art. Its striking black basalt cube design was created by Swiss architects Morger, Degelo, and Kerez, and opened in 2000. The collection features international artworks ranging from classic modernism to the present day, with a special emphasis on installations and sculptures.",
    },
    factsAdvanced: {
      de: ["Eröffnung des Museumsneubaus im Jahr 2000", "Fassade besteht aus schwarzem Basaltstein und Flusskies", "Beinhaltet die staatliche Kunstsammlung Liechtensteins", "Ausstellungsfläche von rund 1.750 Quadratmetern", "Spezialisiert auf Arte Povera und Konzeptkunst", "Erweiterung durch den Hilti Art Foundation Bau 2015"],
      hu: ["A múzeum új épületét 2000-ben adták át", "Homlokzata fekete bazaltból és folyami kavicsból készült", "Itt őrzik Liechtenstein állami művészeti gyűjteményét", "Kiállítótere körülbelül 1750 négyzetméter", "Az Arte Povera és a konceptuális művészetre szakosodott", "A Hilti Art Foundation épületével bővült 2015-ben"],
      ro: ["Inaugurarea noii clădiri a muzeului în anul 2000", "Fațada este realizată din bazalt negru și pietriș de râu", "Găzduiește colecția de artă a statului Liechtenstein", "Suprafață de expoziție de aproximativ 1.750 m²", "Specializat în Arte Povera și artă conceptuală", "Extins cu clădirea Fundației de Artă Hilti în 2015"],
      en: ["Opening of the new museum building in 2000", "Facade made of black basalt and river gravel", "Houses the state art collection of Liechtenstein", "Exhibition space of approximately 1,750 square meters", "Specializes in Arte Povera and conceptual art", "Expanded by the Hilti Art Foundation building in 2015"],
    },
  },
  {
    id: "li-cult-landesmuseum",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5225, 47.1388],
    name: {
      de: "Liechtensteinisches Landesmuseum",
      hu: "Liechtensteini Nemzeti Múzeum",
      ro: "Muzeul Național Liechtenstein",
      en: "Liechtenstein National Museum"
    }, image: "/poi-images/li-cult-landesmuseum.webp",
    descriptionAdvanced: {
      de: "Das Liechtensteinische Landesmuseum in Vaduz präsentiert die umfassende Geschichte, Kultur und Naturkunde des Fürstentums. Es ist in einem historischen Gebäude untergebracht, das einst als fürstliche Taverne und Regierungssitz diente. In über 40 Ausstellungsräumen werden Exponate von der Archäologie über das Mittelalter bis hin zur modernen liechtensteinischen Identität und Naturwelt gezeigt.",
      hu: "A vaduzi Liechtensteinisches Landesmuseum a fejedelemség átfogó történelmét, kultúráját és természettudományát mutatja be. A múzeum egy történelmi épületben kapott helyet, amely egykor fejedelmi fogadóként és kormányzati székhelyként szolgált. Több mint 40 kiállítóteremben tekinthetők meg a leletek a régészettől a középkoron át a modern liechtensteini identitásig és élővilágig.",
      ro: "Muzeul Național din Liechtenstein, situat în Vaduz, prezintă istoria cuprinzătoare, cultura și științele naturale ale principatului. Este găzduit într-o clădire istorică ce a servit odinioară drept tavernă princiară și sediu al guvernului. În peste 40 de săli de expoziție sunt prezentate exponate de la arheologie și Evul Mediu până la identitatea modernă și natura locală.",
      en: "The Liechtenstein National Museum in Vaduz showcases the comprehensive history, culture, and natural science of the principality. It is housed in a historic building that once served as a princely tavern and government seat. Across more than 40 exhibition rooms, it features exhibits ranging from archaeology and the Middle Ages to modern Liechtenstein identity and the natural world.",
    },
    factsAdvanced: {
      de: ["Gründung des Museums im Jahr 1954", "Hauptgebäude stammt ursprünglich aus dem Jahr 1438", "Umfasst 42 verschiedene Ausstellungsräume", "Beherbergt eine bedeutende Sammlung orthodoxer Ikonen", "Zeigt Funde aus der römischen Siedlungszeit", "Verfügt über eine Abteilung zur alpinen Flora und Fauna"],
      hu: ["A múzeumot 1954-ben alapították", "A főépület eredetileg 1438-ból származik", "Összesen 42 különböző kiállítóteremmel rendelkezik", "Jelentős ortodox ikon-gyűjteménynek ad helyet", "Római kori településmaradványokat mutat be", "Külön részlege van az alpesi flórának és faunának"],
      ro: ["Fondarea muzeului în anul 1954", "Clădirea principală datează original din 1438", "Cuprinde 42 de săli de expoziție diferite", "Găzduiește o colecție importantă de icoane ortodoxe", "Expune vestigii din perioada așezărilor romane", "Deține o secție dedicată florei și faunei alpine"],
      en: ["Foundation of the museum in 1954", "Main building dates originally from 1438", "Includes 42 different exhibition rooms", "Houses a significant collection of Orthodox icons", "Displays finds from the Roman settlement period", "Features a section on alpine flora and fauna"],
    },
  },
  {
    id: "li-cult-red-house",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5208, 47.1466],
    name: {
      de: "Rotes Haus",
      hu: "Vörös Ház",
      ro: "Casa Roșie",
      en: "Red House"
    }, image: "/poi-images/li-cult-red-house.webp",
    descriptionAdvanced: {
      de: "Das Rote Haus ist ein spätmittelalterliches Treppengiebelhaus im Vaduzer Ortsteil Mitteldorf, das seinen Namen der markanten roten Fassade verdankt. Es wurde ursprünglich im 15. Jahrhundert erbaut, wobei der heutige Wohnturm auf das Jahr 1848 zurückgeht, als er unter der Leitung von Egon Rheinberger renoviert wurde. Das Gebäude befindet sich inmitten des Weinbergs Abtswingert, der einst zum Kloster St. Johann im Thurtal gehörte und heute noch für den Weinbau genutzt wird. Seit 1848 ist das Anwesen im Besitz der Familie Rheinberger, die eng mit der Kulturgeschichte Liechtensteins verbunden ist. Die Architektur vereint mittelalterliche Strukturen mit historistischen Elementen des 19. Jahrhunderts und prägt das Stadtbild von Vaduz maßgeblich. Besonders charakteristisch sind der markante Turm und der angebaute Torkel, in dem sich eine historische Weinpresse befindet. Heute gilt das Rote Haus als eines der am häufigsten fotografierten Gebäude des Fürstentums und symbolisiert die Verbindung von Tradition und Weinbaukultur.",
      hu: "A Vörös Ház (Rotes Haus) Vaduz egyik legjelentősebb középkori műemléke, amely a Mitteldorf negyedben található, és jellegzetes színéről kapta a nevét. Az épület eredeti részei a 15. századból származnak, de mai, lépcsőzetes oromzatú formáját az 1848-as felújítás során nyerte el, amelyet Egon Rheinberger vezetett. A ház az Abtswingert szőlőskert közepén áll, amely egykor a thurtali Szent János-kolostorhoz tartozott, és ma is aktív bortermelés folyik itt. 1848 óta az ingatlan a Rheinberger család tulajdonában van, amely Liechtenstein kulturális életének egyik meghatározó dinasztiája. Az épületegyüttes magában foglal egy lakótornyot, egy lakóházat és egy borprést (Torkel), amely a helyi borászati hagyományokat őrzi. A Vörös Ház nemcsak építészeti ritkaság, hanem a liechtensteini táj és történelem szerves része, amely a szőlőművelés évszázados folytonosságát reprezentálja. Különleges tornya és vörösre festett falai miatt Vaduz egyik legtöbbet fényképezett nevezetessége.",
      ro: "Casa Roșie (Rotes Haus) este o clădire medievală târzie situată în cartierul Mitteldorf din Vaduz, renumită pentru fațada sa de un roșu aprins. Structura originală datează din secolul al XV-lea, însă turnul actual cu fronton în trepte a fost finalizat în 1848 sub supravegherea arhitectului Egon Rheinberger. Edificiul este amplasat strategic în mijlocul podgoriei Abtswingert, un domeniu viticol care a aparținut în trecut mănăstirii Sfântul Ioan din Thurtal. Din anul 1848, proprietatea se află în posesia familiei Rheinberger, o familie cu o influență majoră asupra vieții culturale din Liechtenstein. Arhitectura îmbină elemente defensive medievale cu stilul istoricist al secolului al XIX-lea, oferind o perspectivă asupra evoluției locuințelor nobiliare. Ansamblul include și un dispozitiv istoric de presare a strugurilor, subliniind importanța viticulturii pentru economia locală. Astăzi, Casa Roșie rămâne un simbol vizual al capitalei și un punct de referință pentru turiștii care doresc să descopere istoria autentică a principatului.",
      en: "The Red House (Rotes Haus) is a late medieval stepped-gable building located in the Mitteldorf district of Vaduz, named for its distinctive deep red facade. While its origins date back to the 15th century, the current residential tower reached its final form in 1848 during a renovation led by Egon Rheinberger. The building is situated in the heart of the Abtswingert vineyard, a historic plot that once belonged to the Monastery of St. Johann in the Thur Valley. Since 1848, the property has been owned by the Rheinberger family, who have played a significant role in Liechtenstein's cultural history. The architectural complex combines medieval structural elements with 19th-century historicism, making it a prominent landmark in the capital's cityscape. It features a characteristic tower and an attached 'Torkel' or wine press, reflecting the long-standing tradition of viticulture in the region. Today, the Red House is one of the most photographed buildings in the principality, symbolizing the enduring link between history and winemaking.",
    },
    factsAdvanced: {
      de: ["Das Gebäude wurde ursprünglich im 15. Jahrhundert als Teil eines Klosters errichtet.", "Der heutige markante Wohnturm wurde im Jahr 1848 fertiggestellt.", "Das Anwesen ist seit 1848 ununterbrochen im Besitz der Familie Rheinberger.", "Der umliegende Weinberg Abtswingert zählt zu den ältesten des Landes.", "Die rote Farbe der Fassade wurde erst im 19. Jahrhundert zum Namensgeber.", "Im Inneren befindet sich eine historische Weinpresse aus dem Mittelalter."],
      hu: ["Az épület eredetileg a 15. században épült egy kolostor részeként.", "A mai jellegzetes lakótornyot 1848-ban fejezték be.", "Az ingatlan 1848 óta megszakítás nélkül a Rheinberger család tulajdona.", "A házat körülvevő Abtswingert szőlőskert az ország egyik legrégebbi kertje.", "A homlokzat vörös színe csak a 19. században vált az épület névadójává.", "Az épület belsejében egy középkori eredetű borprés található."],
      ro: ["Clădirea a fost construită inițial în secolul al XV-lea ca parte a unei mănăstiri.", "Turnul rezidențial distinctiv de astăzi a fost finalizat în anul 1848.", "Proprietatea aparține familiei Rheinberger fără întrerupere din 1848.", "Podgoria Abtswingert care înconjoară casa este una dintre cele mai vechi din țară.", "Culoarea roșie a fațadei a devenit eponimă abia în secolul al XIX-lea.", "În interior se află o presă de struguri istorică din perioada medievală."],
      en: ["The building was originally constructed in the 15th century as part of a monastery.", "The current prominent residential tower was completed in 1848.", "The property has been owned by the Rheinberger family continuously since 1848.", "The surrounding Abtswingert vineyard is among the oldest in the country.", "The red color of the facade became the building's namesake in the 19th century.", "The interior houses a historical wine press dating back to medieval times."],
    },
  },
  {
    id: "li-cult-walser-museum",
    type: "landmark",
    parent: "LI-003",
    coords: [9.5319, 47.1186],
    name: {
      de: "Walsermuseum",
      hu: "Walser Múzeum",
      ro: "Muzeul Walser",
      en: "Walser Museum"
    }, image: "/poi-images/li-cult-walser-museum.webp",
    descriptionAdvanced: {
      de: "Das Walser Heimatmuseum in Triesenberg widmet sich der Geschichte, Kultur und den Traditionen der Walser, die im 13. Jahrhundert aus dem Wallis einwanderten. Das Museum wurde 1961 gegründet und befindet sich im Dorfzentrum, wo es Einblicke in die Lebensweise der Bergbauern über mehrere Jahrhunderte hinweg bietet. Die Ausstellung umfasst eine Vielzahl von Exponaten, darunter historische landwirtschaftliche Geräte, handgefertigte Möbel und Trachten der Triesenberger Bevölkerung. Ein besonderes Highlight ist die Multimediashow, die die beschwerliche Besiedlung der Hochlagen und den Kampf gegen die Naturgewalten dokumentiert. Zum Museum gehört auch das 'Walserhaus', ein originalgetreu erhaltenes Wohnhaus aus dem Jahr 1850, das die einfache und zweckmäßige Architektur der damaligen Zeit zeigt. Es dient nicht nur als Ausstellungsraum, sondern auch als Forschungsstätte für die Walser Dialekte und die lokale Genealogie. Durch regelmäßige Sonderausstellungen bleibt das Museum ein lebendiger Ort der Vermittlung zwischen Vergangenheit und Gegenwart.",
      hu: "A triesenbergi Walser Helytörténeti Múzeum a 13. században Wallis kantonból bevándorolt walser népcsoport történelmét, kultúráját és hagyományait mutatja be. Az 1961-ben alapított intézmény a falu központjában található, és részletes betekintést nyújt a hegyi parasztok több évszázados életmódjába. A kiállítás számos tárgyi emléket őriz, többek között régi mezőgazdasági eszközöket, kézzel készített bútorokat és a triesenbergi lakosság népviseleteit. Különleges látnivaló a multimédiás bemutató, amely a magashegyi területek nehézkes betelepítését és a természeti erőkkel vívott küzdelmet dokumentálja. A múzeumhoz tartozik a 'Walserhaus' is, egy 1850-ből származó, eredeti állapotában megőrzött lakóház, amely a korszak egyszerű és célszerű építészetét szemlélteti. Az intézmény nemcsak kiállítótérként, hanem a walser dialektusok és a helyi családtörténet kutatóhelyeként is funkcionál. Rendszeres időszaki kiállításaival a múzeum a múlt és a jelen közötti párbeszéd élő helyszíne marad.",
      ro: "Muzeul Walser din Triesenberg este dedicat istoriei, culturii și tradițiilor populației Walser, care a imigrat din cantonul Valais în secolul al XIII-lea. Fondat în 1961, muzeul este situat în centrul satului și oferă o perspectivă detaliată asupra modului de viață al fermierilor montani de-a lungul mai multor secole. Expoziția cuprinde o varietate de exponate, inclusiv unelte agricole istorice, mobilier lucrat manual și costume populare specifice populației din Triesenberg. Un punct de atracție deosebit este spectacolul multimedia care documentează colonizarea dificilă a regiunilor înalte și lupta constantă împotriva forțelor naturii. Din complexul muzeal face parte și 'Walserhaus', o casă de locuit păstrată fidel din anul 1850, care exemplifică arhitectura simplă și funcțională a acelei epoci. Instituția servește nu doar ca spațiu expozițional, ci și ca centru de cercetare pentru dialectele Walser și genealogia locală. Prin expozițiile temporare regulate, muzeul rămâne un loc viu de mediere între trecutul istoric și prezentul modern.",
      en: "The Walser Museum in Triesenberg is dedicated to the history, culture, and traditions of the Walser people, who migrated from the Valais region in the 13th century. Established in 1961, the museum is located in the village center and offers profound insights into the alpine farming lifestyle across several centuries. The exhibition features a wide array of artifacts, including historical agricultural tools, handcrafted furniture, and traditional costumes of the Triesenberg community. A major highlight is the multimedia presentation documenting the challenging settlement of high-altitude areas and the struggle against natural forces. The museum complex also includes the 'Walserhaus', a faithfully preserved residential house from 1850 that showcases the simple and practical architecture of the period. Beyond its role as an exhibition space, it serves as a research center for Walser dialects and local genealogy. Through regular special exhibitions, the museum remains a vibrant cultural hub connecting the community's past with its present.",
    },
    factsAdvanced: {
      de: ["Das Museum wurde im Jahr 1961 zur Bewahrung der Walser Kultur eröffnet.", "Die Walser wanderten ursprünglich im 13. Jahrhundert in die Region ein.", "Zum Ensemble gehört ein über 400 Jahre altes, begehbares Walserhaus.", "Die Ausstellung zeigt eine Multimediashow über das harte Leben in den Bergen.", "Es beherbergt eine umfangreiche Sammlung lokaler Trachten und Bräuche.", "Das Museum befindet sich auf etwa 880 Metern über dem Meeresspiegel."],
      hu: ["A múzeumot 1961-ben nyitották meg a walser kultúra megőrzése érdekében.", "A walserek eredetileg a 13. században vándoroltak be a régióba.", "Az együtteshez tartozik egy több mint 400 éves, bejárható walser ház.", "A kiállítás multimédiás show-t mutat be a kemény hegyi életről.", "Helyi népviseletek és népszokások gazdag gyűjteményének ad otthont.", "A múzeum körülbelül 880 méteres tengerszint feletti magasságban található."],
      ro: ["Muzeul a fost deschis în anul 1961 pentru conservarea culturii Walser.", "Populația Walser a imigrat inițial în regiune în secolul al XIII-lea.", "Ansamblul include o casă Walser vizitabilă, veche de peste 400 de ani.", "Expoziția prezintă un spectacol multimedia despre viața dură la munte.", "Găzduiește o colecție vastă de costume populare și obiceiuri locale.", "Muzeul este situat la o altitudine de aproximativ 880 de metri peste nivelul mării."],
      en: ["The museum was opened in 1961 to preserve Walser culture.", "The Walser people originally migrated to the region in the 13th century.", "The complex includes a walkable Walser house that is over 400 years old.", "The exhibition features a multimedia show about the harsh mountain life.", "It houses an extensive collection of local costumes and customs.", "The museum is situated at an elevation of approximately 880 meters above sea level."],
    },
  },
  {
    id: "li-cult-st-florin",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5225, 47.1378],
    name: {
      de: "Kathedrale St. Florin",
      hu: "Szent Florin-katedrális",
      ro: "Catedrala Sfântul Florin",
      en: "St. Florin Cathedral"
    }, image: "/poi-images/li-cult-st-florin.webp",
    descriptionAdvanced: {
      de: "Die Kathedrale St. Florin in Vaduz ist die bedeutendste römisch-katholische Kirche Liechtensteins und Sitz des Erzbistums Vaduz. Das neugotische Bauwerk wurde zwischen 1869 und 1873 nach den Plänen des renommierten Wiener Architekten Friedrich von Schmidt errichtet, der auch das Wiener Rathaus entwarf. Ursprünglich als Pfarrkirche erbaut, wurde sie im Jahr 1997 von Papst Johannes Paul II. in den Rang einer Kathedrale erhoben. Die Fassade ist durch den hohen Westturm und die Verwendung von lokalem Kalkstein geprägt, was dem Gebäude ein monumentales Erscheinungsbild verleiht. Im Inneren finden sich kunstvolle Glasmalereien und die Fürstliche Grablege, in der Mitglieder der regierenden Familie Liechtenstein ihre letzte Ruhe finden. Besonders hervorzuheben ist die Orgel der Firma Rheinberger, die regelmäßig für hochkarätige Konzerte genutzt wird. Die Kathedrale bildet das geistliche Zentrum des Landes und ist ein zentrales Element des Vaduzer Regierungsviertels.",
      hu: "A vaduzi Szent Flórián-székesegyház Liechtenstein legfontosabb római katolikus temploma és a Vaduzi Érsekség székhelye. A neogótikus épület 1869 és 1873 között épült a neves bécsi építész, Friedrich von Schmidt tervei alapján, aki a bécsi városházát is tervezte. Eredetileg plébániatemplomnak épült, de 1997-ben II. János Pál pápa katedrálisi rangra emelte az egyházmegye megalapításakor. A homlokzatot a magas nyugati torony és a helyi mészkő használata jellemzi, ami monumentális megjelenést kölcsönöz az épületnek. Odabent művészi üvegablakok és a hercegi sírbolt található, ahol a Liechtenstein uralkodócsalád tagjai nyugszanak. Külön említést érdemel a Rheinberger cég által készített orgona, amelyet rendszeresen használnak rangos koncertekhez. A katedrális az ország szellemi központja, és a vaduzi kormányzati negyed egyik meghatározó építészeti eleme.",
      ro: "Catedrala Sfântul Florin din Vaduz este cea mai importantă biserică romano-catolică din Liechtenstein și sediul Arhiepiscopiei de Vaduz. Edificiul neogotic a fost construit între 1869 și 1873 după planurile renumitului arhitect vienez Friedrich von Schmidt, care a proiectat și Primăria din Viena. Inițial construită ca biserică parohială, a fost ridicată la rangul de catedrală în anul 1997 de către Papa Ioan Paul al II-lea. Fațada este dominată de turnul vestic înalt și de utilizarea calcarului local, ceea ce conferă clădirii un aspect monumental. În interior se regăsesc vitralii artistice și Cripta Princiară, unde membrii familiei domnitoare de Liechtenstein își găsesc odihna veșnică. Un element deosebit este orga fabricată de firma Rheinberger, utilizată frecvent pentru concerte de înaltă ținută. Catedrala reprezintă centrul spiritual al țării și este un element central al cartierului guvernamental din Vaduz.",
      en: "St. Florin Cathedral in Vaduz is the preeminent Roman Catholic church in Liechtenstein and the seat of the Archdiocese of Vaduz. This neo-Gothic structure was built between 1869 and 1873 based on plans by the renowned Viennese architect Friedrich von Schmidt, who also designed the Vienna City Hall. Originally constructed as a parish church, it was elevated to the status of a cathedral in 1997 by Pope John Paul II. The facade is characterized by its tall western tower and the use of local limestone, giving the building a monumental presence. Inside, visitors can find exquisite stained-glass windows and the Princely Burial Vault, the final resting place for members of the ruling House of Liechtenstein. Of particular note is the organ by the Rheinberger company, which is frequently used for high-profile concerts. The cathedral serves as the spiritual heart of the nation and is a central feature of the Vaduz government district.",
    },
    factsAdvanced: {
      de: ["Die Kirche wurde zwischen 1869 und 1873 im neugotischen Stil errichtet.", "Architekt war Friedrich von Schmidt, der auch den Stephansdom restaurierte.", "Seit 1997 ist die Kirche Sitz des neu geschaffenen Erzbistums Vaduz.", "In der angeschlossenen Gruft sind Fürst Franz Josef II. und seine Frau begraben.", "Der Patron der Kathedrale, der Heilige Florin, stammt aus dem 7. Jahrhundert.", "Die Orgel wurde 1873 von der Firma Steinmeyer gebaut und später renoviert."],
      hu: ["A templom 1869 és 1873 között épült neogótikus stílusban.", "Az építész Friedrich von Schmidt volt, aki a bécsi Stephansdomot is restaurálta.", "1997 óta a templom az újonnan létrehozott Vaduzi Érsekség székhelye.", "A kapcsolódó kriptában nyugszik II. Ferenc József herceg és felesége.", "A székesegyház védőszentje, Szent Flórián, a 7. században élt.", "Az orgonát 1873-ban a Steinmeyer cég építette, később többször felújították."],
      ro: ["Biserica a fost construită între 1869 și 1873 în stil neogotic.", "Arhitectul a fost Friedrich von Schmidt, care a restaurat și Domul Sf. Ștefan.", "Din 1997, biserica este sediul nou-înființatei Arhiepiscopii de Vaduz.", "În cripta atașată sunt înmormântați Prințul Franz Josef al II-lea și soția sa.", "Patronul catedralei, Sfântul Florin, provine din secolul al VII-lea.", "Orga a fost construită în 1873 de firma Steinmeyer și renovată ulterior."],
      en: ["The church was constructed between 1869 and 1873 in the neo-Gothic style.", "The architect was Friedrich von Schmidt, who also restored St. Stephen's Cathedral.", "Since 1997, the church has been the seat of the newly created Archdiocese of Vaduz.", "Prince Franz Josef II and his wife are buried in the adjacent princely vault.", "The cathedral's patron, Saint Florin, dates back to the 7th century.", "The organ was built in 1873 by the Steinmeyer company and later renovated."],
    },
  },
  {
    id: "li-cult-stamp-museum",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5222, 47.1394],
    name: {
      de: "Postmuseum",
      hu: "Bélyegmúzeum",
      ro: "Muzeul Poștal",
      en: "Postage Stamp Museum"
    }, image: "/poi-images/li-cult-stamp-museum.webp",
    descriptionAdvanced: {
      de: "Das Postmuseum des Fürstentums Liechtenstein in Vaduz dokumentiert die reiche philatelistische Geschichte des Landes seit der Herausgabe der ersten Briefmarken im Jahr 1912. Es wurde 1930 gegründet und ist heute Teil des Liechtensteinischen Landesmuseums, untergebracht im sogenannten Engländerbau im Zentrum von Vaduz. Die Sammlung umfasst nahezu alle jemals in Liechtenstein erschienenen Postwertzeichen, die für ihre hohe künstlerische Qualität und feine Drucktechnik weltbekannt sind. Besucher können historische Entwürfe, Druckplatten und Werkzeuge bewundern, die den Entstehungsprozess einer Briefmarke veranschaulichen. Ein besonderes Augenmerk liegt auf der Darstellung der Postgeschichte, von der Zeit der Botenpost bis hin zum modernen Dienstleistungswesen. Das Museum ist ein Magnet für Philatelisten aus aller Welt und unterstreicht die Bedeutung der Briefmarkenausgabe als kulturelle Botschafter des Kleinstaates. Der Eintritt ist traditionell frei, was den Zugang zu diesem spezialisierten Kulturerbe für ein breites Publikum ermöglicht.",
      hu: "A vaduzi Liechtensteini Bélyegmúzeum (Postmuseum) az ország gazdag filatéliai történetét dokumentálja az első postabélyegek 1912-es kiadása óta. Az 1930-ban alapított intézmény ma a Liechtensteini Nemzeti Múzeum része, és a városközpontban található úgynevezett 'Engländerbau' épületében kapott helyet. A gyűjtemény szinte minden Liechtensteinben valaha megjelent bélyeget tartalmaz, amelyek művészi minőségükről és finom nyomdatechnikájukról világszerte ismertek. A látogatók megtekinthetik a történelmi terveket, nyomólemezeket és eszközöket, amelyek szemléltetik a bélyegek születésének folyamatát. Különös figyelmet fordítanak a postatörténet bemutatására, a futárposták korszakától a modern szolgáltatásokig. A múzeum a világ minden tájáról vonzza a bélyeggyűjtőket, és hangsúlyozza a bélyegkiadás jelentőségét, mint a törpeállam kulturális nagykövetét. A belépés hagyományosan ingyenes, ami széles közönség számára teszi lehetővé e speciális kulturális örökség megismerését.",
      ro: "Muzeul Poștei din Principatul Liechtenstein, situat în Vaduz, documentează bogata istorie filatelică a țării încă de la emiterea primelor timbre în anul 1912. Fondat în 1930, muzeul este astăzi parte a Muzeului Național din Liechtenstein și este găzduit în clădirea 'Engländerbau' din centrul capitalei. Colecția cuprinde aproape toate mărcile poștale emise vreodată în Liechtenstein, renumite la nivel mondial pentru calitatea lor artistică ridicată și tehnica fină de imprimare. Vizitatorii pot admira schițe istorice, plăci de imprimare și instrumente care ilustrează procesul de creație a unui timbru. O atenție deosebită este acordată prezentării istoriei poștale, de la epoca curierilor pedestri până la serviciile moderne de astăzi. Muzeul reprezintă un magnet pentru filateliștii din întreaga lume și subliniază importanța emisiunilor poștale ca ambasadori culturali ai micului stat. Intrarea este în mod tradițional gratuită, facilitând accesul publicului larg la acest patrimoniu cultural specializat.",
      en: "The Postage Stamp Museum of the Principality of Liechtenstein in Vaduz documents the nation's rich philatelic history since the issuance of its first stamps in 1912. Established in 1930, the museum is now part of the Liechtenstein National Museum and is housed in the 'Engländerbau' building in central Vaduz. The collection features nearly every postage stamp ever issued by Liechtenstein, which are world-renowned for their exceptional artistic quality and fine printing techniques. Visitors can admire historical sketches, printing plates, and tools that illustrate the intricate process of stamp production. Special emphasis is placed on depicting postal history, ranging from the era of messenger posts to modern delivery services. The museum is a major attraction for philatelists worldwide and highlights the significance of stamp issuance as a cultural ambassador for the small state. Entry is traditionally free, providing broad access to this specialized cultural heritage for residents and tourists alike.",
    },
    factsAdvanced: {
      de: ["Das Museum wurde im Jahr 1930 gegründet und 1936 der Öffentlichkeit zugänglich gemacht.", "Liechtenstein gab seine ersten eigenen Briefmarken im Jahr 1912 heraus.", "Die Sammlung ist seit 2002 im Engländerbau im Zentrum von Vaduz untergebracht.", "Es zeigt seltene Entwürfe berühmter Künstler wie Koloman Moser.", "Das Museum ist Teil des Liechtensteinischen Landesmuseums.", "Der Eintritt in das Postmuseum ist für alle Besucher kostenlos."],
      hu: ["A múzeumot 1930-ban alapították, és 1936-ban nyitották meg a nagyközönség előtt.", "Liechtenstein 1912-ben bocsátotta ki az első saját postabélyegeit.", "A gyűjtemény 2002 óta a vaduzi Engländerbau épületében található.", "Híres művészek, például Koloman Moser ritka terveit is bemutatja.", "A múzeum szervezetileg a Liechtensteini Nemzeti Múzeum része.", "A Bélyegmúzeumba a belépés minden látogató számára ingyenes."],
      ro: ["Muzeul a fost fondat în 1930 și deschis publicului în anul 1936.", "Liechtenstein a emis primele sale timbre poștale proprii în anul 1912.", "Colecția este găzduită în clădirea Engländerbau din centrul Vaduzului din 2002.", "Prezintă schițe rare ale unor artiști celebri precum Koloman Moser.", "Muzeul este o secție a Muzeului Național din Liechtenstein.", "Intrarea în Muzeul Poștei este gratuită pentru toți vizitatorii."],
      en: ["The museum was founded in 1930 and opened to the public in 1936.", "Liechtenstein issued its first own postage stamps in the year 1912.", "Since 2002, the collection has been housed in the Engländerbau in central Vaduz.", "It displays rare designs by famous artists such as Koloman Moser.", "The museum is administratively part of the Liechtenstein National Museum.", "Admission to the Postage Stamp Museum is free for all visitors."],
    },
  },
  {
    id: "li-cult-treasure-chamber",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5220, 47.1390],
    name: {
      de: "Schatzkammer",
      hu: "Kincstár",
      ro: "Camera Tezaurului",
      en: "Treasure Chamber"
    }, image: "/poi-images/li-cult-treasure-chamber.webp",
    descriptionAdvanced: {
      de: "Die Schatzkammer des Fürstentums Liechtenstein in Vaduz ist ein weltweit einzigartiges Museum, das Kostbarkeiten aus dem Besitz der Fürstenfamilie und des Staates zeigt. Die im Jahr 2015 eröffnete Ausstellung befindet sich im Engländerbau und besticht durch ein modernes Sicherheits- und Präsentationskonzept. Zu den bedeutendsten Exponaten gehören Repliken der liechtensteinischen Fürstenkrone sowie wertvolle Prunkwaffen und historische Staatsgeschenke. Ein besonderes Highlight sind die originalen Mondgesteine der Apollo-Missionen 11 und 17, die dem Land als Dank für die Beteiligung liechtensteinischer Industrie an den Raumfahrtprogrammen überreicht wurden. Ebenfalls zu bewundern sind kunstvolle Fabergé-Eier, darunter das berühmte 'Apfelblüten-Ei', das durch seine filigrane Handwerkskunst besticht. Die Schatzkammer vermittelt einen tiefen Einblick in die über 300-jährige Geschichte des Hauses Liechtenstein und dessen internationale Verbindungen. Die dunkle, atmosphärische Gestaltung des Raumes rückt die strahlenden Exponate in den Mittelpunkt und schafft ein exklusives Erlebnis.",
      hu: "A Liechtensteini Hercegség Kincstára (Schatzkammer) Vaduzban egy világszerte egyedülálló múzeum, amely a hercegi család és az állam tulajdonában lévő értéktárgyakat mutatja be. A 2015-ben megnyílt kiállítás az Engländerbau épületében található, és modern biztonsági és prezentációs koncepcióval rendelkezik. A legjelentősebb kiállítási tárgyak közé tartoznak a liechtensteini hercegi korona másolatai, valamint értékes díszfegyverek és történelmi állami ajándékok. Különleges látnivalót jelentenek az Apollo-11 és Apollo-17 küldetésekből származó eredeti holdkőzetek, amelyeket az országnak adományoztak köszönetképpen a liechtensteini ipar űrhajózási programokban való részvételéért. Szintén megcsodálhatók a művészi Fabergé-tojások, köztük a híres 'Almavirág-tojás', amely finom kézműves kidolgozásával nyűgözi le a látogatókat. A kincstár mély betekintést nyújt a Liechtenstein-ház több mint 300 éves történetébe és nemzetközi kapcsolataiba. A terem sötét, hangulatos kialakítása a ragyogó kiállítási tárgyakat helyezi a középpontba.",
      ro: "Camera Tezaurului din Principatul Liechtenstein, situată în Vaduz, este un muzeu unic în lume care expune obiecte de preț din posesia familiei princiare și a statului. Expoziția, deschisă în anul 2015, se află în clădirea Engländerbau și impresionează printr-un concept modern de securitate și prezentare. Printre cele mai importante exponate se numără replici ale coroanei princiare din Liechtenstein, precum și arme de paradă valoroase și cadouri diplomatice istorice. Un punct de atracție deosebit îl reprezintă fragmentele originale de rocă lunară din misiunile Apollo 11 și 17, oferite țării ca semn de recunoștință pentru participarea industriei din Liechtenstein la programele spațiale. De asemenea, pot fi admirate ouă Fabergé artistice, inclusiv celebrul 'Ou cu flori de măr', care se remarcă prin măiestria filigranată. Tezaurul oferă o perspectivă profundă asupra istoriei de peste 300 de ani a Casei de Liechtenstein și a legăturilor sale internaționale. Designul întunecat și atmosferic al spațiului pune în valoare exponatele strălucitoare, creând o experiență exclusivistă.",
      en: "The Treasure Chamber of the Principality of Liechtenstein in Vaduz is a globally unique museum showcasing precious items from the collections of the Princely Family and the state. Opened in 2015, the exhibition is located in the 'Engländerbau' and features a state-of-the-art security and presentation concept. Among the most significant exhibits are replicas of the Liechtenstein Princely Crown, as well as valuable ceremonial weapons and historical state gifts. A major highlight is the collection of original moon rocks from the Apollo 11 and Apollo 17 missions, presented to the country in gratitude for the involvement of Liechtenstein's industry in the space programs. Visitors can also admire artistic Fabergé eggs, including the famous 'Apple Blossom Egg,' renowned for its intricate craftsmanship. The Treasure Chamber provides a deep insight into the 300-year history of the House of Liechtenstein and its international connections. The dark, atmospheric design of the gallery focuses all attention on the brilliant exhibits, creating an exclusive and immersive experience.",
    },
    factsAdvanced: {
      de: ["Die Schatzkammer wurde am 31. März 2015 offiziell eröffnet.", "Sie zeigt echte Mondgesteine der NASA-Missionen Apollo 11 und 17.", "Zu sehen ist eine exakte Kopie der fürstlichen Krone von 1626.", "Die Sammlung umfasst seltene Fabergé-Eier aus der Sammlung Adulf Peter Goop.", "Das Museum nutzt ein hochmodernes Lichtkonzept zur Schonung der Exponate.", "Es befindet sich im ersten Stock des Engländerbaus im Zentrum von Vaduz."],
      hu: ["A Kincstárat hivatalosan 2015. március 31-én nyitották meg.", "Az Apollo-11 és 17 NASA-missziókból származó valódi holdkőzeteket mutat be.", "Látható az 1626-os hercegi korona pontos másolata is.", "A gyűjtemény ritka Fabergé-tojásokat tartalmaz az Adulf Peter Goop kollekcióból.", "A múzeum korszerű világítási koncepciót alkalmaz a tárgyak védelme érdekében.", "Az intézmény a vaduzi Engländerbau első emeletén található."],
      ro: ["Camera Tezaurului a fost inaugurată oficial pe 31 martie 2015.", "Expune roci lunare veritabile din misiunile NASA Apollo 11 și 17.", "Poate fi văzută o replică exactă a coroanei princiare din anul 1626.", "Colecția include ouă Fabergé rare din donația Adulf Peter Goop.", "Muzeul folosește un concept de iluminare ultra-modern pentru protejarea exponatelor.", "Este situată la primul etaj al clădirii Engländerbau din centrul Vaduzului."],
      en: ["The Treasure Chamber was officially opened on March 31, 2015.", "It displays authentic moon rocks from the NASA Apollo 11 and 17 missions.", "An exact replica of the 1626 Princely Crown is on display.", "The collection includes rare Fabergé eggs from the Adulf Peter Goop collection.", "The museum employs a high-tech lighting concept to preserve the delicate exhibits.", "It is located on the first floor of the Engländerbau in the heart of Vaduz."],
    },
  },
  {
    id: "li-cult-parliament",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5228, 47.1383],
    name: {
      de: "Landtagsgebäude",
      hu: "Parlament (Landtag)",
      ro: "Clădirea Parlamentului",
      en: "Parliament Building"
    }, image: "/poi-images/li-cult-parliament.webp",
    descriptionAdvanced: {
      de: "Das Landtagsgebäude des Fürstentums Liechtenstein in Vaduz ist ein architektonisches Meisterwerk der Moderne, das im Jahr 2008 eröffnet wurde. Entworfen vom deutschen Architekten Hansjörg Göritz, besticht der Bau durch seine reduzierte Formensprache und die Verwendung von rund einer Million ockerfarbener Klinkerziegel. Das Ensemble besteht aus drei Gebäudeteilen: dem 'Hohen Haus' mit dem Plenarsaal, dem 'Verbindungshaus' und dem 'Langen Haus' für die Büros der Abgeordneten. Besonders markant ist das steile Walmdach des Hohen Hauses, das eine Brücke zur traditionellen Architektur der Region schlägt. Der Plenarsaal im Inneren ist komplett mit Ziegeln ausgekleidet und vermittelt durch seine Akustik und Lichtführung eine feierliche Atmosphäre. Das Gebäude befindet sich auf dem Peter-Kaiser-Platz, direkt neben dem Regierungsgebäude, und bildet zusammen mit diesem das politische Zentrum des Landes. Die offene Gestaltung des Platzes und die Integration in den Stadtraum symbolisieren die Bürgernähe des liechtensteinischen Staates.",
      hu: "A Liechtensteini Hercegség parlamenti épülete (Landtagsgebäude) Vaduzban a modern építészet mesterműve, amelyet 2008-ban adtak át. A német építész, Hansjörg Göritz által tervezett épület letisztult formavilágával és mintegy egymillió okkersárga klinkertégla felhasználásával tűnik ki. Az együttes három részből áll: a plenáris ülésteremnek helyet adó 'Magas Házból', az összekötő épületből és a képviselői irodákat befogadó 'Hosszú Házból'. Különösen jellegzetes a Magas Ház meredek kontytetője, amely hidat ver a régió hagyományos építészete felé. A belső ülésterem teljes egészében téglával burkolt, akusztikája és fényviszonyai ünnepélyes hangulatot árasztanak. Az épület a Peter-Kaiser-Platzon található, közvetlenül a kormányzati épület mellett, amellyel együtt alkotja az ország politikai központját. A tér nyitott kialakítása és a városi térbe való integrálása a liechtensteini állam polgárközpontúságát szimbolizálja.",
      ro: "Clădirea Parlamentului din Principatul Liechtenstein, situată în Vaduz, este o capodoperă a arhitecturii moderne, inaugurată în anul 2008. Proiectată de arhitectul german Hansjörg Göritz, construcția impresionează prin limbajul formelor reduse și utilizarea a aproximativ un milion de cărămizi klinker de culoare ocru. Ansamblul este format din trei părți: 'Casa Înaltă' cu sala plenară, 'Casa de Legătură' și 'Casa Lungă' pentru birourile deputaților. Deosebit de marcant este acoperișul abrupt al Casei Înalte, care face trimitere la arhitectura tradițională a regiunii. Sala plenară de la interior este complet placată cu cărămidă, oferind o atmosferă solemnă prin acustica și gestionarea luminii naturale. Clădirea se află în Piața Peter Kaiser, imediat lângă sediul Guvernului, formând împreună centrul politic al țării. Designul deschis al pieței și integrarea sa în spațiul urban simbolizează proximitatea statului față de cetățenii săi.",
      en: "The Parliament Building of the Principality of Liechtenstein in Vaduz is a masterpiece of modern architecture, inaugurated in 2008. Designed by German architect Hansjörg Göritz, the structure stands out for its minimalist design language and the use of approximately one million ochre-colored clinker bricks. The complex consists of three main parts: the 'High House' containing the plenary chamber, the 'Connecting House,' and the 'Long House' for parliamentary offices. A particularly striking feature is the High House's steep hipped roof, which creates a visual bridge to the region's traditional architecture. The interior plenary chamber is entirely lined with bricks, creating a solemn atmosphere through its unique acoustics and natural lighting. Located on Peter-Kaiser-Platz directly adjacent to the Government Building, it forms the political heart of the nation. The open design of the square and its integration into the urban environment symbolize the transparency and accessibility of the Liechtenstein state.",
    },
    factsAdvanced: {
      de: ["Das Gebäude wurde nach einer Bauzeit von drei Jahren im Februar 2008 eröffnet.", "Für den Bau wurden genau 1.018.000 ockerfarbene Klinkerziegel verwendet.", "Der Entwurf stammt vom Münchener Architekten Hansjörg Göritz.", "Das 'Hohe Haus' ist 19 Meter hoch und beherbergt den Plenarsaal.", "Das Parlament besteht aus insgesamt 25 Abgeordneten des Volkes.", "Die Gesamtkosten für den Neubau beliefen sich auf etwa 42,2 Millionen Franken."],
      hu: ["Az épületet három évig tartó építkezés után 2008 februárjában adták át.", "Az építéshez pontosan 1 018 000 darab okkersárga klinkertéglát használtak fel.", "A terveket a müncheni Hansjörg Göritz építész készítette.", "A 'Magas Ház' 19 méter magas, és itt található a plenáris ülésterem.", "A liechtensteini parlament összesen 25 népképviselőből áll.", "Az új épület teljes költsége körülbelül 42,2 millió svájci frank volt."],
      ro: ["Clădirea a fost inaugurată în februarie 2008, după trei ani de construcție.", "Pentru construcție au fost folosite exact 1.018.000 de cărămizi klinker.", "Proiectul a fost realizat de arhitectul din München, Hansjörg Göritz.", "'Casa Înaltă' are o înălțime de 19 metri și găzduiește sala plenară.", "Parlamentul este format dintr-un număr total de 25 de deputați ai poporului.", "Costurile totale pentru noua construcție s-au ridicat la circa 42,2 milioane franci."],
      en: ["The building was opened in February 2008 after three years of construction.", "Exactly 1,018,000 ochre-colored clinker bricks were used for the construction.", "The design was created by the Munich-based architect Hansjörg Göritz.", "The 'High House' stands 19 meters tall and houses the plenary chamber.", "The Liechtenstein Parliament consists of a total of 25 elected deputies.", "The total cost for the new building amounted to approximately 42.2 million francs."],
    },
  },
  {
    id: "li-cult-old-rhine-bridge",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5133, 47.1344],
    name: {
      de: "Alte Rheinbrücke",
      hu: "Régi Rajna-híd",
      ro: "Vechiul Pod peste Rin",
      en: "Old Rhine Bridge"
    }, image: "/poi-images/li-cult-old-rhine-bridge.webp",
    descriptionAdvanced: {
      de: "Die Alte Rheinbrücke zwischen Vaduz und Sevelen ist die letzte noch erhaltene Holzbrücke, die den Alpenrhein überquert. Das 135 Meter lange Bauwerk wurde im Jahr 1901 errichtet und ruht auf fünf Betonpfeilern, die den starken Strömungen des Flusses standhalten. Ursprünglich für den Wagenverkehr konzipiert, ist die Brücke heute ausschließlich Fußgängern und Radfahrern vorbehalten und dient als wichtiger Grenzübergang zwischen Liechtenstein und der Schweiz. Die Konstruktion besteht aus einem gedeckten hölzernen Fachwerk, das nach dem Howeschen System errichtet wurde, was für die damalige Zeit eine technische Meisterleistung darstellte. Im Laufe des 20. Jahrhunderts wurde die Brücke mehrfach renoviert, um ihre statische Sicherheit und den Erhalt der historischen Bausubstanz zu gewährleisten. Die Fahrt über die Brücke bietet einen malerischen Blick auf das Schloss Vaduz und die umliegende Bergwelt des Rheintals. Als technisches Denkmal erinnert sie an die Zeit vor dem Bau moderner Betonbrücken und ist ein Symbol für die enge Verbindung der Nachbargemeinden.",
      hu: "A Vaduz és Sevelen közötti Régi Rajna-híd az utolsó épségben maradt fahíd, amely az Alpok-Rajnán átível. A 135 méter hosszú építmény 1901-ben készült el, és öt betonpilléren nyugszik, amelyek ellenállnak a folyó erős sodrásának. Eredetileg szekérforgalomra tervezték, de ma már kizárólag gyalogosok és kerékpárosok használhatják, fontos határátkelőként szolgálva Liechtenstein és Svájc között. A szerkezet egy fedett fa rácsos tartóból áll, amelyet a Howe-rendszer szerint építettek, ami a maga korában technikai bravúrnak számított. A 20. század folyamán a hidat többször felújították, hogy biztosítsák statikai stabilitását és a történelmi építőanyag megőrzését. A hídon való áthaladás festői kilátást nyújt a vaduzi várra és a Rajna-völgy környező hegyvidékére. Technikai műemlékként a modern betonhidak építése előtti korszakra emlékeztet, és a szomszédos települések közötti szoros kapcsolat szimbóluma.",
      ro: "Podul Vechi peste Rin (Alte Rheinbrücke) situat între Vaduz și Sevelen este ultimul pod de lemn care mai traversează Rinul Alpin în această regiune. Structura lungă de 135 de metri a fost ridicată în anul 1901 și se sprijină pe cinci piloni de beton capabili să reziste curenților puternici ai fluviului. Proiectat inițial pentru traficul cu trăsuri, podul este astăzi rezervat exclusiv pietonilor și bicicliștilor, servind ca punct de trecere a frontierei între Liechtenstein și Elveția. Construcția constă dintr-o grindă cu zăbrele din lemn acoperită, realizată după sistemul Howe, o realizare tehnică remarcabilă pentru începutul secolului al XX-lea. De-a lungul timpului, podul a fost renovat de mai multe ori pentru a-i asigura siguranța statică și conservarea substanței istorice. Traversarea podului oferă o vedere pitorească asupra Castelului Vaduz și a munților din valea Rinului. Ca monument tehnic, acesta amintește de perioada de dinaintea podurilor moderne din beton și simbolizează legătura strânsă dintre comunitățile vecine.",
      en: "The Old Rhine Bridge connecting Vaduz and Sevelen is the last remaining wooden bridge crossing the Alpine Rhine. This 135-meter-long structure was built in 1901 and rests on five concrete pillars designed to withstand the river's strong currents. Originally intended for horse-drawn carriages, the bridge is now exclusively reserved for pedestrians and cyclists, serving as a vital border crossing between Liechtenstein and Switzerland. The construction features a covered wooden truss framework built according to the Howe system, which was a significant technical feat at the time. Throughout the 20th century, the bridge underwent several renovations to ensure its structural integrity and preserve the historic fabric. Crossing the bridge offers a picturesque view of Vaduz Castle and the surrounding mountain ranges of the Rhine Valley. As a technical monument, it serves as a reminder of the era before modern concrete bridges and symbolizes the close ties between the neighboring cross-border communities.",
    },
    factsAdvanced: {
      de: ["Die Brücke hat eine Gesamtlänge von 135 Metern über den Rhein.", "Sie wurde im Jahr 1901 erbaut und ersetzte eine Brücke von 1870.", "Die Brücke ist die letzte gedeckte Holzbrücke über den Alpenrhein.", "Seit dem Jahr 1975 ist sie für den motorisierten Verkehr gesperrt.", "Sie verbindet die Gemeinden Vaduz (Liechtenstein) und Sevelen (Schweiz).", "Die Konstruktion basiert auf dem stabilen Howe-Fachwerk-System."],
      hu: ["A híd teljes hossza 135 méter a Rajna felett.", "1901-ben épült, egy korábbi, 1870-es hidat felváltva.", "Ez az utolsó fedett fahíd az Alpok-Rajna felett.", "1975 óta le van zárva a gépjárműforgalom előtt.", "Vaduz (Liechtenstein) és Sevelen (Svájc) településeket köti össze.", "A szerkezet a stabil Howe-féle rácsos tartórendszeren alapul."],
      ro: ["Podul are o lungime totală de 135 de metri peste Rin.", "A fost construit în anul 1901, înlocuind un pod din 1870.", "Este ultimul pod de lemn acoperit peste Rinul Alpin.", "Din anul 1975, acesta este închis pentru traficul motorizat.", "Conectează localitățile Vaduz (Liechtenstein) și Sevelen (Elveția).", "Construcția se bazează pe sistemul stabil de grinzi cu zăbrele Howe."],
      en: ["The bridge has a total length of 135 meters across the Rhine.", "It was built in 1901, replacing an earlier bridge from 1870.", "It is the last covered wooden bridge over the Alpine Rhine.", "Since 1975, it has been closed to motorized vehicle traffic.", "It connects the municipalities of Vaduz (Liechtenstein) and Sevelen (Switzerland).", "The construction is based on the sturdy Howe truss system."],
    },
  },
  {
    id: "li-poi-triesen-marienkapelle",
    type: "landmark",
    parent: "LI-001",
    coords: [9.5290, 47.1060],
    name: { de: "St. Mamerten Kapelle", hu: "Szent Mamerten kápolna", ro: "Capela Sf. Mamert", en: "St. Mamertus Chapel" },
    description: {
      de: "Eine der ältesten Sakralbauten des Landes mit wunderschöner Aussicht.",
      hu: "Az ország egyik legrégebbi szakrális építménye, gyönyörű kilátással.",
      ro: "Una dintre cele mai vechi clădiri sacre din țară, cu o priveliște minunată.",
      en: "One of the oldest sacred buildings in the country with a beautiful view."
    },
    facts: {
      de: ["Baujahr ca. 9. Jahrhundert", "Romanischer Stil", "Patronat des Hl. Mamertus"],
      hu: ["Kb. 9. századi építés", "Román stílus", "Szent Mamertus pártfogása"],
      ro: ["Construită în sec. IX", "Stil romanic", "Patronajul Sf. Mamert"],
      en: ["Built around 9th century", "Romanesque style", "Patronage of St. Mamertus"]
    }, image: "/poi-images/li-poi-triesen-marienkapelle.webp",
    descriptionAdvanced: {
      de: "Die Kapelle St. Mamerten in Triesen gilt als die älteste erhaltene Kirche des Fürstentums Liechtenstein und ist ein bedeutendes Zeugnis frühmittelalterlicher Sakralarchitektur. Archäologische Grabungen belegen, dass die ersten Strukturen bereits im 9. oder 10. Jahrhundert entstanden sind, wobei das heutige Erscheinungsbild stark durch Erweiterungen im 15. Jahrhundert geprägt wurde. Besonders bemerkenswert sind die gut erhaltenen Fresken im Chorraum, die biblische Szenen und Heiligenfiguren aus der Zeit um 1480 darstellen. Die Kapelle befindet sich in leicht erhöhter Lage über dem alten Dorfkern von Triesen und bietet einen weiten Blick über das Rheintal. Im Inneren herrscht eine schlichte, andächtige Atmosphäre, die durch den spätgotischen Altar und die massiven Steinmauern verstärkt wird. St. Mamerten wird auch heute noch für Gottesdienste, Trauungen und kulturelle Veranstaltungen genutzt. Die sorgfältige Restaurierung in den 1960er Jahren hat dazu beigetragen, die historische Authentizität dieses bedeutenden Baudenkmals zu bewahren.",
      hu: "A trieseni Szent Mamertus-kápolna (St. Mamerten) Liechtenstein legidősebb épségben maradt templomának számít, és a korai középkori szakrális építészet kiemelkedő emléke. A régészeti feltárások igazolják, hogy az első építmények már a 9. vagy 10. században létrejöttek, bár a mai megjelenést jelentősen meghatározzák a 15. századi bővítések. Különösen figyelemre méltóak a szentélyben található, jó állapotban megmaradt freskók, amelyek bibliai jeleneteket és szenteket ábrázolnak 1480 környékéről. A kápolna Triesen régi falumagja felett, enyhén emelkedett helyen fekszik, és pazar kilátást nyújt a Rajna-völgyre. Belül egyszerű, áhítatos hangulat uralkodik, amelyet a késő gótikus oltár és a masszív kőfalak erősítenek. Szent Mamertust ma is használják istentiszteletekre, esküvőkre és kulturális eseményekre. Az 1960-as években végzett gondos restaurálás hozzájárult e jelentős műemlék történelmi hitelességének megőrzéséhez.",
      ro: "Capela Sfântul Mamertus din Triesen este considerată cea mai veche biserică păstrată din Principatul Liechtenstein și reprezintă un monument important al arhitecturii sacrale medievale timpurii. Săpăturile arheologice atestă faptul că primele structuri au apărut deja în secolul al IX-lea sau al X-lea, aspectul actual fiind puternic influențat de extinderile din secolul al XV-lea. Deosebit de remarcabile sunt frescele bine conservate din zona corului, care înfățișează scene biblice și figuri de sfinți datând din jurul anului 1480. Capela este situată pe o poziție ușor elevată deasupra nucleului vechi al satului Triesen, oferind o panoramă largă asupra văii Rinului. În interior domină o atmosferă simplă și evlavioasă, accentuată de altarul gotic târziu și de zidurile masive din piatră. Sfântul Mamertus este utilizat și astăzi pentru slujbe religioase, cununii și evenimente culturale. Restaurarea atentă din anii 1960 a contribuit la păstrarea autenticității istorice a acestui edificiu de patrimoniu.",
      en: "St. Mamertus Chapel in Triesen is considered the oldest preserved church in the Principality of Liechtenstein and serves as a significant example of early medieval sacred architecture. Archaeological excavations show that the initial structures date back to the 9th or 10th century, while the current appearance was largely shaped by expansions in the 15th century. Particularly noteworthy are the well-preserved frescoes in the choir, depicting biblical scenes and saints from around 1480. The chapel is located on a slightly elevated site above the historic village center of Triesen, offering a broad view of the Rhine Valley. The interior is characterized by a simple, prayerful atmosphere, enhanced by the late Gothic altar and massive stone walls. St. Mamertus is still used today for worship services, weddings, and cultural events. The meticulous restoration carried out in the 1960s was instrumental in preserving the historical authenticity of this important landmark.",
    },
    factsAdvanced: {
      de: ["Die Kapelle ist dem Heiligen Mamertus geweiht, einem Bischof aus dem 5. Jahrhundert.", "Teile der Fundamente lassen sich bis in das 9. Jahrhundert zurückverfolgen.", "Die bedeutenden Wandmalereien im Chor entstanden um das Jahr 1480.", "Der Kirchturm ist mit typischen spätgotischen Schallfenstern ausgestattet.", "In den 1960er Jahren fand eine umfassende archäologische Untersuchung statt.", "Die Kapelle steht unter staatlichem Denkmalschutz und ist ein Wahrzeichen von Triesen."],
      hu: ["A kápolnát Szent Mamertusnak, egy 5. századi püspöknek szentelték.", "Az alapok egyes részei egészen a 9. századig vezethetők vissza.", "A szentély jelentős falfestményei 1480 körül készültek.", "A templomtorony jellegzetes késő gótikus harangablakokkal rendelkezik.", "Az 1960-as években átfogó régészeti vizsgálatot végeztek az épületben.", "A kápolna állami műemlékvédelem alatt áll, és Triesen egyik jelképe."],
      ro: ["Capela este dedicată Sfântului Mamertus, un episcop din secolul al V-lea.", "Părți ale fundației pot fi urmărite până în secolul al IX-lea.", "Picturile murale importante din cor au fost realizate în jurul anului 1480.", "Turnul bisericii este dotat cu ferestre de sunet tipice stilului gotic târziu.", "În anii 1960 a avut loc o investigație arheologică cuprinzătoare.", "Capela este protejată de stat ca monument istoric și este un simbol al localității Triesen."],
      en: ["The chapel is dedicated to Saint Mamertus, a bishop from the 5th century.", "Parts of the foundations can be traced back as far as the 9th century.", "The significant wall paintings in the choir were created around 1480.", "The church tower features typical late Gothic sound windows.", "A comprehensive archaeological investigation took place in the 1960s.", "The chapel is under state protection as a monument and is a landmark of Triesen."],
    },
  },
  {
    id: "li-poi-schaan-st-peter",
    type: "landmark",
    parent: "LI-002",
    coords: [9.4830, 47.1700],
    name: { de: "St. Peter Kirche", hu: "Szent Péter templom", ro: "Biserica Sf. Petru", en: "St. Peter's Church" },
    description: {
      de: "Die älteste Kirche Liechtensteins, erbaut auf römischen Fundamenten.",
      hu: "Liechtenstein legrégebbi temploma, római alapokra épült.",
      ro: "Cea mai veche biserică din Liechtenstein, construită pe fundații romane.",
      en: "The oldest church in Liechtenstein, built on Roman foundations."
    },
    facts: {
      de: ["Spätantike Ursprünge", "Römische Ausgrabungen", "Bedeutendes Denkmal"],
      hu: ["Késő antik eredet", "Római kori ásatások", "Jelentős műemlék"],
      ro: ["Origini antice târzii", "Săpături romane", "Monument important"],
      en: ["Late antique origins", "Roman excavations", "Significant monument"]
    }, image: "/poi-images/li-poi-schaan-st-peter.webp",
    descriptionAdvanced: {
      de: "Die Ausgrabungen der alten Kirche St. Peter in Schaan gehören zu den bedeutendsten archäologischen Stätten Liechtensteins und dokumentieren eine fast 1500-jährige Kirchengeschichte. An der Stelle der heutigen Friedhofskapelle befand sich ursprünglich eine frühchristliche Kirche aus dem 5. Jahrhundert, deren Taufbecken (Baptisterium) noch heute besichtigt werden kann. Im Laufe der Jahrhunderte folgten mehrere Neubauten und Erweiterungen, darunter eine karolingische Saalkirche und später ein romanischer sowie gotischer Bau. Die Reste der Grundmauern vermitteln einen eindrucksvollen Einblick in die Entwicklung der sakralen Architektur im Alpenraum. Besonders hervorzuheben ist das gut erhaltene achteckige Taufbecken, das eines der ältesten seiner Art nördlich der Alpen darstellt. Die Anlage ist heute als Freilichtmuseum gestaltet und informiert Besucher über die Christianisierung der Region. Die benachbarte Kapelle St. Peter bewahrt zudem wertvolle Kunstschätze und dient als Ort der Ruhe und Besinnung im geschäftigen Zentrum von Schaan.",
      hu: "A schaani Szent Péter-templom (St. Peter) ásatásai Liechtenstein legjelentősebb régészeti lelőhelyei közé tartoznak, és csaknem 1500 éves egyháztörténetet dokumentálnak. A mai temetőkápolna helyén eredetileg egy 5. századi korai keresztény templom állt, amelynek keresztelőmedencéje (baptisterium) ma is megtekinthető. Az évszázadok során több új épület és bővítés követte egymást, köztük egy karoling-kori teremtemplom, majd később román és gótikus építmények. Az alapfalak maradványai lenyűgöző betekintést nyújtanak a szakrális építészet fejlődésébe az alpesi régióban. Külön kiemelendő a jó állapotban fennmaradt nyolcszögletű keresztelőmedence, amely az egyik legrégebbi ilyen jellegű emlék az Alpoktól északra. A terület ma szabadtéri múzeumként működik, és tájékoztatja a látogatókat a régió keresztény hitre téréséről. A szomszédos Szent Péter-kápolna értékes műkincseket őriz, és a nyugalom helyszíneként szolgál Schaan forgalmas központjában.",
      ro: "Săpăturile arheologice de la vechea biserică Sfântul Petru din Schaan reprezintă unul dintre cele mai importante situri istorice din Liechtenstein, documentând aproape 1500 de ani de istorie creștină. Pe locul actualei capele a cimitirului s-a aflat inițial o biserică paleocreștină din secolul al V-lea, al cărei baptisteriu (bazin de botez) poate fi vizitat și astăzi. De-a lungul secolelor, au urmat mai multe construcții și extinderi, inclusiv o biserică sală carolingiană și, ulterior, structuri în stil romanic și gotic. Resturile zidurilor de fundație oferă o imagine impresionantă asupra evoluției arhitecturii sacrale în spațiul alpin. De menționat în mod special este bazinul de botez octogonal bine conservat, care reprezintă unul dintre cele mai vechi de acest tip de la nord de Alpi. Situl este amenajat astăzi ca un muzeu în aer liber, informând vizitatorii despre procesul de creștinare a regiunii. Capela Sfântul Petru adiacentă păstrează, de asemenea, comori artistice valoroase și servește ca loc de reculegere în centrul localității Schaan.",
      en: "The excavations of the old St. Peter's Church in Schaan are among the most significant archaeological sites in Liechtenstein, documenting nearly 1,500 years of ecclesiastical history. On the site of the current cemetery chapel, an early Christian church from the 5th century once stood, and its original baptistery can still be seen today. Over the centuries, several new buildings and expansions followed, including a Carolingian hall church and later Romanesque and Gothic structures. The remains of the foundations provide an impressive look into the evolution of sacred architecture in the Alpine region. Of particular note is the well-preserved octagonal baptismal font, which is one of the oldest of its kind north of the Alps. The site is now organized as an open-air museum, informing visitors about the Christianization of the region. The adjacent St. Peter's Chapel also houses valuable art treasures and serves as a place of quiet reflection in the busy center of Schaan.",
    },
    factsAdvanced: {
      de: ["Die erste Kirche an diesem Ort wurde bereits im 5. Jahrhundert errichtet.", "Das achteckige Taufbecken stammt aus der Zeit der frühen Christianisierung.", "Archäologische Grabungen zwischen 1950 und 1960 legten die Fundamente frei.", "Die heutige Kapelle wurde über den Ruinen der Vorgängerbauten errichtet.", "Es sind insgesamt fünf verschiedene Bauphasen nachweisbar.", "Die Anlage zählt zu den bedeutendsten römischen und frühmittelalterlichen Stätten des Landes."],
      hu: ["Az első templomot ezen a helyen már az 5. században felépítették.", "A nyolcszögletű keresztelőmedence a korai kereszténység idejéből származik.", "Az 1950 és 1960 közötti régészeti ásatások tárták fel az alapokat.", "A mai kápolna a korábbi épületek romjai fölé épült.", "Összesen öt különböző építési fázis mutatható ki a helyszínen.", "A terület az ország legjelentősebb római és kora középkori lelőhelyei közé tartozik."],
      ro: ["Prima biserică din acest loc a fost construită încă din secolul al V-lea.", "Bazinul de botez octogonal datează din perioada creștinării timpurii.", "Săpăturile arheologice între 1950 și 1960 au scos la lumină fundațiile.", "Capela actuală a fost ridicată peste ruinele construcțiilor anterioare.", "Sunt identificate în total cinci faze de construcție diferite.", "Situl face parte din cele mai importante vestigii romane și medievale timpurii din țară."],
      en: ["The first church on this site was constructed as early as the 5th century.", "The octagonal baptismal font dates from the era of early Christianization.", "Archaeological excavations between 1950 and 1960 revealed the foundations.", "The current chapel was built over the ruins of its predecessors.", "A total of five distinct construction phases can be identified.", "The site is one of the country's most significant Roman and early medieval locations."],
    },
  },
  {
    id: "li-poi-eschen-pfruendhaus",
    type: "landmark",
    parent: "LI-006",
    coords: [9.5230, 47.2110],
    name: { de: "Pfrundhaus Eschen", hu: "Escheni plébániaház", ro: "Casa Parohială Eschen", en: "Pfrundhaus Eschen" },
    description: {
      de: "Ein historisches Gebäude, das heute als Kulturzentrum und Museum dient.",
      hu: "Történelmi épület, amely ma kulturális központként és múzeumként szolgál.",
      ro: "O clădire istorică ce servește astăzi drept centru cultural și muzeu.",
      en: "A historic building that now serves as a cultural center and museum."
    },
    facts: {
      de: ["Mittelalterlicher Kern", "Kulturelle Veranstaltungen", "Restauriertes Baudenkmal"],
      hu: ["Középkori mag", "Kulturális rendezvények", "Restaurált műemlék"],
      ro: ["Nucleu medieval", "Evenimente culturale", "Monument restaurat"],
      en: ["Medieval core", "Cultural events", "Restored monument"]
    }, image: "/poi-images/li-poi-eschen-pfruendhaus.webp",
    descriptionAdvanced: {
      de: "Das Pfrundhaus in Eschen ist eines der historisch bedeutendsten Profanbauten im Unterland des Fürstentums Liechtenstein. Das Gebäude wurde ursprünglich im 14. Jahrhundert erwähnt und diente über Jahrhunderte hinweg als Wohnhaus für den Inhaber der kirchlichen Pfründe, also den lokalen Pfarrer. Die heutige Bausubstanz geht weitgehend auf einen Neubau im Jahr 1772 zurück, der im barocken Stil mit markantem Mansarddach ausgeführt wurde. Nach einer wechselvollen Geschichte als Schulhaus und Armenhaus wurde das Gebäude in den 1970er Jahren umfassend renoviert und vor dem Verfall gerettet. Heute beherbergt das Pfrundhaus kulturelle Einrichtungen und dient als Begegnungsstätte für die Gemeinde Eschen. Die Architektur ist geprägt durch symmetrische Fensterreihen und ein massives Mauerwerk, das dem Haus ein herrschaftliches Aussehen verleiht. Es ist ein hervorragendes Beispiel für die ländliche Verwaltungs- und Wohnarchitektur des 18. Jahrhunderts in der Region und steht unter Denkmalschutz.",
      hu: "Az escheni Pfrundhaus Liechtenstein északi részének (Unterland) egyik legjelentősebb történelmi világi épülete. Az épületet eredetileg a 14. században említik először, és évszázadokon át a helyi plébános lakóhelyéül szolgált. A mai épületállomány nagyrészt egy 1772-es újjáépítésre nyúlik vissza, amely barokk stílusban, jellegzetes mansard-tetővel készült. Miután az épület iskola- és szegényházként is működött, az 1970-es években átfogóan felújították, megmentve az enyészettől. Ma a Pfrundhaus kulturális intézményeknek ad otthont, és Eschen közösségi találkozóhelyeként szolgál. Az építészetet szimmetrikus ablaksorok és masszív falazat jellemzi, ami méltóságteljes megjelenést kölcsönöz a háznak. Kiváló példája a 18. századi vidéki igazgatási és lakóépítészetnek a régióban, és műemléki védelem alatt áll.",
      ro: "Casa Pfrundhaus din Eschen este una dintre cele mai importante clădiri civile din punct de vedere istoric din regiunea Unterland a Principatului Liechtenstein. Clădirea a fost menționată inițial în secolul al XIV-lea și a servit timp de secole ca locuință pentru deținătorul beneficiului ecleziastic, adică preotul local. Structura actuală datează în mare parte de la o reconstrucție din anul 1772, realizată în stil baroc cu un acoperiș mansardat distinctiv. După o istorie zbuciumată ca școală și azil pentru săraci, clădirea a fost renovată integral în anii 1970 și salvată de la ruină. Astăzi, Pfrundhaus găzduiește instituții culturale și servește drept loc de întâlnire pentru comunitatea din Eschen. Arhitectura este definită prin rânduri simetrice de ferestre și o zidărie masivă, care oferă casei un aspect impunător. Este un exemplu remarcabil de arhitectură administrativă și rezidențială rurală din secolul al XVIII-lea în regiune și este protejată ca monument istoric.",
      en: "The Pfrundhaus in Eschen is one of the most historically significant secular buildings in the Unterland region of Liechtenstein. Originally mentioned in the 14th century, the building served for centuries as a residence for the local priest. The current structure largely dates back to a reconstruction in 1772, executed in the Baroque style with a distinctive mansard roof. After a varied history as a schoolhouse and a home for the poor, the building was extensively renovated in the 1970s, saving it from decay. Today, the Pfrundhaus houses cultural facilities and serves as a community meeting place for the municipality of Eschen. The architecture is characterized by symmetrical rows of windows and massive masonry, giving the house a grand, dignified appearance. It is an excellent example of 18th-century rural administrative and residential architecture in the region and is a protected historical monument.",
    },
    factsAdvanced: {
      de: ["Das Gebäude wurde im Jahr 1772 in seiner heutigen Barockform neu errichtet.", "Es diente ursprünglich als Wohnsitz für den Inhaber der kirchlichen Pfründe.", "Im 19. Jahrhundert wurde das Haus zeitweise als Dorfschule genutzt.", "Das markante Mansarddach ist typisch für die Architektur des späten 18. Jahrhunderts.", "In den Jahren 1972 bis 1974 wurde das Gebäude grundlegend saniert.", "Das Pfrundhaus ist eines der ältesten erhaltenen Steinhäuser in der Gemeinde Eschen."],
      hu: ["Az épületet 1772-ben építették újjá mai barokk formájában.", "Eredetileg az egyházi javadalmas (plébános) lakóhelyeként szolgált.", "A 19. században az épület egy ideig falusi iskolaként is működött.", "A jellegzetes mansard-tető a 18. század végi építészet tipikus eleme.", "1972 és 1974 között az épületet alapjaiban újították fel.", "A Pfrundhaus Eschen község egyik legrégebbi fennmaradt kőháza."],
      ro: ["Clădirea a fost reconstruită în forma sa barocă actuală în anul 1772.", "A servit inițial ca reședință pentru beneficiarul pfründei bisericești.", "În secolul al XIX-lea, casa a fost folosită o perioadă ca școală sătească.", "Acoperișul mansardat este tipic pentru arhitectura de la sfârșitul secolului al XVIII-lea.", "Între anii 1972 și 1974, edificiul a fost supus unei renovări fundamentale.", "Pfrundhaus este una dintre cele mai vechi case de piatră păstrate din comuna Eschen."],
      en: ["The building was rebuilt in its current Baroque form in 1772.", "It originally served as a residence for the holder of the ecclesiastical benefice.", "In the 19th century, the house was temporarily used as a village school.", "The striking mansard roof is typical of late 18th-century architecture.", "The building underwent a major renovation between 1972 and 1974.", "The Pfrundhaus is one of the oldest surviving stone houses in the municipality of Eschen."],
    },
  },
  {
    id: "li-poi-schellenberg-obere-burg",
    type: "landmark",
    parent: "LI-008",
    coords: [9.5470, 47.2380],
    name: { de: "Burgruine Obere Burg", hu: "Felső-vár romjai", ro: "Ruinele Castelului de Sus", en: "Upper Castle Ruins" },
    description: {
      de: "Die größeren der beiden Burgruinen in Schellenberg, frei zugänglich für Besucher.",
      hu: "A két schellenbergi várrom közül a nagyobbik, szabadon látogatható.",
      ro: "Cea mai mare dintre cele două ruine de castel din Schellenberg, accesibilă vizitatorilor.",
      en: "The larger of the two castle ruins in Schellenberg, freely accessible to visitors."
    },
    facts: {
      de: ["Erbaut um 1200", "Größte Ruine im Land", "Strategische Lage"],
      hu: ["1200 körül épült", "Az ország legnagyobb romvára", "Stratégiai elhelyezkedés"],
      ro: ["Construit în jurul anului 1200", "Cea mai mare ruină din țară", "Poziție strategică"],
      en: ["Built around 1200", "Largest ruins in the country", "Strategic location"]
    }, image: "/poi-images/li-poi-schellenberg-obere-burg.webp",
    descriptionAdvanced: {
      de: "Die Obere Burg Schellenberg, auch als Burg Neu-Schellenberg bekannt, ist die größere der beiden mittelalterlichen Festungsruinen in der Gemeinde Schellenberg im Fürstentum Liechtenstein. Sie wurde um das Jahr 1200 auf einem markanten Felsrücken errichtet, um die strategisch wichtige Straße entlang des Rheintals zu kontrollieren. Die erste urkundliche Erwähnung datiert auf das Jahr 1317, als die Anlage im Besitz der Herren von Schellenberg war. Im Laufe des 16. Jahrhunderts verlor die Burg ihre militärische Bedeutung und verfiel allmählich zur Ruine, nachdem sie nicht mehr bewohnt wurde. Heute ist die Anlage Eigentum des Fürstenhauses und wird von der Historischen Gesellschaft Liechtensteins betreut, die zwischen 1960 und 1964 umfangreiche Konservierungsarbeiten durchführte. Die Ruine umfasst die Reste eines massiven Bergfrieds, der Kernburg sowie einer weitläufigen Vorburg und bietet Besuchern einen umfassenden Einblick in die mittelalterliche Wehrarchitektur der Region.",
      hu: "A felső-schellenbergi várrom, más néven Neu-Schellenberg, a két középkori erődítmény közül a nagyobbik a liechtensteini Schellenberg községben. A várat 1200 körül építették egy kiemelkedő sziklaháton, hogy ellenőrizzék a Rajna-völgy mentén haladó stratégiai fontosságú utat. Első írásos említése 1317-ből származik, amikor a Schellenberg család birtokában volt az erődítmény. A 16. század folyamán a vár elvesztette katonai jelentőségét, elhagyták, és fokozatosan romhalmazzá vált. Napjainkban a romok a hercegi család tulajdonában vannak, és a Liechtensteini Történelmi Társaság gondozza őket, amely 1960 és 1964 között jelentős állagmegóvási munkálatokat végzett a helyszínen. A látogatható romok magukban foglalják a hatalmas öregtorony maradványait, a belső várat és a kiterjedt külső védműveket, lenyűgöző panorámát nyújtva a környező völgyekre.",
      ro: "Ruinele Cetății de Sus din Schellenberg, cunoscută și sub numele de Neu-Schellenberg, reprezintă cea mai mare dintre cele două fortificații medievale din comuna Schellenberg, Liechtenstein. Castelul a fost ridicat în jurul anului 1200 pe o creastă stâncoasă proeminentă, având scopul strategic de a monitoriza rutele comerciale de-a lungul văii Rinului. Prima atestare documentară a sitului datează din anul 1317, perioadă în care fortăreața aparținea familiei nobiliare Schellenberg. În secolul al XVI-lea, castelul și-a pierdut importanța militară, fiind abandonat și transformându-se treptat într-o ruină. În prezent, situl este proprietatea Casei Princiare și este administrat de Societatea Istorică din Liechtenstein, care a realizat lucrări ample de conservare între anii 1960 și 1964. Structura păstrează resturile unui donjon masiv, ale curții interioare și ale fortificațiilor exterioare, fiind un obiectiv istoric major.",
      en: "The Upper Castle Ruins of Schellenberg, also known as Neu-Schellenberg, is the larger of the two medieval fortress ruins located in the municipality of Schellenberg, Liechtenstein. Constructed around the year 1200 on a prominent rocky ridge, the castle was designed to control the strategically important road through the Rhine Valley. The first documentary evidence of the site dates back to 1317, when it was held by the Lords of Schellenberg. By the 16th century, the castle had lost its military significance and gradually fell into decay after being abandoned as a residence. Today, the ruins are owned by the Princely House and managed by the Historical Society of Liechtenstein, which conducted extensive conservation work between 1960 and 1964. The site features the remains of a massive keep, the inner bailey, and an extensive outer ward, providing visitors with a detailed look at regional medieval military architecture.",
    },
    factsAdvanced: {
      de: ["Bauzeit um 1200", "Erste urkundliche Erwähnung im Jahr 1317", "Schenkung an den Historischen Verein im Jahr 1956", "Umfassende Restaurierung zwischen 1960 und 1964", "Lage auf 630 Metern über dem Meeresspiegel", "Größte mittelalterliche Burganlage in Liechtenstein"],
      hu: ["Az építés ideje 1200 körülre tehető", "Első írásos említése 1317-ben történt", "1956-ban adományozták a Történelmi Társaságnak", "1960 és 1964 között végeztek rajta restaurálást", "630 méteres tengerszint feletti magasságban fekszik", "Liechtenstein legnagyobb középkori várkomplexuma"],
      ro: ["Construită în jurul anului 1200", "Prima mențiune documentară în anul 1317", "Donată Societății Istorice în anul 1956", "Restaurare majoră între anii 1960 și 1964", "Situată la o altitudine de 630 de metri", "Cea mai mare fortificație medievală din Liechtenstein"],
      en: ["Built around the year 1200", "First mentioned in documents in 1317", "Donated to the Historical Society in 1956", "Extensively restored between 1960 and 1964", "Located at an altitude of 630 meters", "Largest medieval castle complex in Liechtenstein"],
    },
  },
  {
    id: "li-poi-schellenberg-untere-burg",
    type: "landmark",
    parent: "LI-008",
    coords: [9.5590, 47.2430],
    name: { de: "Burgruine Untere Burg", hu: "Alsó-vár romjai", ro: "Ruinele Castelului de Jos", en: "Lower Castle Ruins" },
    description: {
      de: "Eine kleinere, aber historisch bedeutende Burgruine am Nordhang des Eschnerbergs.",
      hu: "Kisebb, de történelmileg jelentős várrom az Eschnerberg északi lejtőjén.",
      ro: "O ruină de castel mai mică, dar semnificativă istoric, pe versantul nordic al muntelui Eschnerberg.",
      en: "A smaller but historically significant castle ruin on the northern slope of the Eschnerberg."
    },
    facts: {
      de: ["Erbaut um 1250", "Geringere Mauerreste", "Historisches Denkmal"],
      hu: ["1250 körül épült", "Kisebb falmaradványok", "Történelmi emlékhely"],
      ro: ["Construit în jurul anului 1250", "Resturi de ziduri reduse", "Monument istoric"],
      en: ["Built around 1250", "Minor wall remains", "Historical monument"]
    }, image: "/poi-images/li-poi-schellenberg-untere-burg.webp",
    descriptionAdvanced: {
      de: "Die Untere Burg Schellenberg, oft als Alt-Schellenberg bezeichnet, ist die kleinere der beiden Burgruinen in der Gemeinde Schellenberg. Sie wurde vermutlich um das Jahr 1250 errichtet, also etwa 50 Jahre nach der Oberen Burg, und diente ebenfalls der Herrschaftssicherung in diesem Gebiet. Urkundlich wurde sie erstmals im Jahr 1317 gemeinsam mit der Oberen Burg erwähnt. Aufgrund ihrer Lage und Bauweise wird vermutet, dass sie weniger als Verteidigungsanlage, sondern primär als herrschaftlicher Wohnsitz konzipiert war. Bereits um 1550 galt die Burg als verlassen und dem Verfall preisgegeben. Seit 1956 befindet sich die Ruine im Besitz der Historischen Gesellschaft Liechtensteins, die den Erhalt der verbliebenen Mauerreste sichert. Die Anlage zeichnet sich durch ihre kompakte Form aus, wobei die Grundmauern des rechteckigen Wohnbaus und Teile der Ringmauer noch heute gut erkennbar sind.",
      hu: "Az alsó-schellenbergi várruha, amelyet gyakran Alt-Schellenbergnek is neveznek, a kisebbik a két várrom közül Schellenberg községben. Valószínűleg 1250 körül építették, körülbelül 50 évvel a Felső Vár után, és szintén a terület feletti uralom biztosítását szolgálta. Oklevélben először 1317-ben említették a Felső Várral együtt. Elhelyezkedése és építési módja alapján feltételezik, hogy kevésbé volt védelmi jellegű, inkább főúri lakóhelyként funkcionált. 1550 körül már elhagyottnak és pusztulónak tekintették. 1956 óta a rom a Liechtensteini Történelmi Társaság tulajdonában van, amely biztosítja a fennmaradó falfelületek megőrzését. Az építményt kompakt forma jellemzi, a téglalap alapú lakóépület alapfalai és a várfal részei ma is jól kivehetőek a látogatók számára.",
      ro: "Ruinele Cetății de Jos din Schellenberg, numită adesea Alt-Schellenberg, constituie cea mai mică dintre cele două fortificații medievale din această localitate. Se estimează că a fost construită în jurul anului 1250, la aproximativ 50 de ani după Cetatea de Sus, având rolul de a consolida autoritatea nobiliară în regiune. Prima mențiune documentară datează tot din anul 1317, într-un document comun cu Cetatea de Sus. Datorită poziției sale și a stilului arhitectural, istoricii consideră că structura a servit mai degrabă ca reședință nobiliară decât ca avanpost defensiv major. Încă din anul 1550, castelul a fost considerat abandonat, intrând într-un proces accelerat de degradare. Din 1956, ruinele aparțin Societății Istorice din Liechtenstein, care monitorizează conservarea zidurilor rămase, inclusiv a fundațiilor dreptunghiulare ale clădirii principale.",
      en: "The Lower Castle Ruins of Schellenberg, frequently referred to as Alt-Schellenberg, is the smaller of the two castle ruins in the municipality of Schellenberg. It was likely built around 1250, approximately 50 years after the Upper Castle, and served to secure the lordship's influence in the area. The first documented mention of the castle occurred in 1317, alongside the Upper Castle. Given its location and construction style, it is believed that the site was intended more as a noble residence than a major defensive fortification. By 1550, the castle was already considered abandoned and falling into ruin. Since 1956, the ruins have been owned by the Historical Society of Liechtenstein, which ensures the preservation of the remaining masonry. The layout is characterized by its compact form, with the foundations of the rectangular residential building and parts of the curtain wall still clearly visible today.",
    },
    factsAdvanced: {
      de: ["Bauzeit um 1250", "Erste urkundliche Erwähnung im Jahr 1317", "Um 1550 bereits als verlassen dokumentiert", "Anlagengröße von etwa 50 mal 20 Metern", "Eigentum der Historischen Gesellschaft seit 1956", "Lage auf ca. 600 Metern Höhe"],
      hu: ["Az építés ideje 1250 körülre tehető", "Első írásos említése 1317-ben történt", "1550-ben már elhagyottként jegyezték fel", "Az építmény mérete kb. 50-szer 20 méter", "1956 óta a Történelmi Társaság tulajdona", "Körülbelül 600 méteres magasságban található"],
      ro: ["Construită în jurul anului 1250", "Prima mențiune documentară în anul 1317", "Documentată ca abandonată în jurul anului 1550", "Dimensiunile sitului sunt de aproximativ 50 pe 20 metri", "Proprietate a Societății Istorice din 1956", "Situată la o altitudine de circa 600 de metri"],
      en: ["Built around the year 1250", "First mentioned in documents in 1317", "Documented as abandoned by 1550", "Site dimensions are approximately 50 by 20 meters", "Owned by the Historical Society since 1956", "Located at an elevation of roughly 600 meters"],
    },
  }
];

export const liechtensteinNature: POI[] = [
  {
    id: "li-nat-grauspitz",
    type: "landmark",
    parent: "LI-001",
    coords: [9.5800, 47.0544],
    name: {
      de: "Vorder Grauspitz",
      hu: "Grauspitz",
      ro: "Grauspitz",
      en: "Grauspitz"
    },
    descriptionAdvanced: {
      de: "Der Grauspitz, genauer gesagt der Vorder Grauspitz, ist mit einer Höhe von 2599 Metern der höchste Berg des Fürstentums Liechtenstein. Er liegt in der Rätikon-Kette der Alpen, direkt an der Grenze zwischen Liechtenstein und dem Schweizer Kanton Graubünden. Der Gipfel besteht primär aus Kalkstein und gehört zur Schesaplana-Gruppe. Trotz seines Status als höchster Punkt des Landes ist der Grauspitz touristisch weniger erschlossen als benachbarte Gipfel, da kein offiziell markierter Wanderweg direkt zum Gipfel führt. Der Aufstieg erfordert daher alpine Erfahrung und Trittsicherheit im weglosen Gelände. Von der Spitze aus bietet sich ein beeindruckender Blick über das Rheintal sowie die umliegenden Gipfel der Schweizer und österreichischen Alpen. Der Berg markiert die natürliche südliche Grenze des Landes und ist ein Symbol für die alpine Geografie Liechtensteins.",
      hu: "A Grauspitz, pontosabban a Vorder Grauspitz, 2599 méteres magasságával a Liechtensteini Hercegség legmagasabb hegye. Az Alpok Rätikon-vonulatában található, közvetlenül Liechtenstein és a svájci Graubünden kanton határán. A csúcs főként mészkőből épül fel, és a Schesaplana-csoporthoz tartozik. Annak ellenére, hogy az ország legmagasabb pontja, a Grauspitz turisztikailag kevésbé kiépített, mint a szomszédos csúcsok, mivel nem vezet hozzá hivatalosan jelzett túraútvonal. A megmászása ezért alpesi tapasztalatot és biztos lépést igényel jelöletlen terepen. A csúcsról lenyűgöző kilátás nyílik a Rajna-völgyre, valamint a svájci és osztrák Alpok környező csúcsaira. A hegy az ország természetes déli határát jelöli, és Liechtenstein alpesi földrajzának egyik legfontosabb szimbóluma.",
      ro: "Grauspitz, mai exact Vorder Grauspitz, este cel mai înalt vârf din Principatul Liechtenstein, având o altitudine de 2599 de metri. Acesta face parte din lanțul muntos Rätikon al Alpilor, fiind situat exact pe granița dintre Liechtenstein și cantonul elvețian Graubünden. Vârful este compus în principal din calcar și aparține grupului Schesaplana. În ciuda statutului său de cel mai înalt punct al țării, Grauspitz este mai puțin dezvoltat din punct de vedere turistic față de vârfurile vecine, deoarece nu există trasee oficiale marcate care să ducă direct la vârf. Escaladarea sa necesită experiență alpină și abilități de navigare pe teren accidentat fără poteci. De pe vârf, se deschide o panoramă impresionantă asupra văii Rinului și a culmilor învecinate din Alpii elvețieni și austrieci, marcând granița naturală sudică a țării.",
      en: "Grauspitz, specifically Vorder Grauspitz, is the highest mountain in the Principality of Liechtenstein, standing at an elevation of 2,599 meters. It is located within the Rätikon range of the Alps, situated directly on the border between Liechtenstein and the Swiss canton of Graubünden. The summit is primarily composed of limestone and belongs to the Schesaplana group. Despite its status as the nation's highest point, Grauspitz is less developed for tourism than neighboring peaks, as there is no officially marked hiking trail leading directly to the summit. Consequently, the ascent requires alpine experience and surefootedness in unmarked terrain. From the top, climbers are rewarded with an impressive view over the Rhine Valley and the surrounding peaks of the Swiss and Austrian Alps. The mountain marks the natural southern border of the country and serves as a key symbol of Liechtenstein's alpine geography.",
    },
    factsAdvanced: {
      de: ["Höchster Berg Liechtensteins mit 2599 Metern", "Gehört zur Gebirgsgruppe des Rätikon", "Liegt auf der Grenze zwischen Liechtenstein und der Schweiz", "Besteht geologisch vorwiegend aus Kalkstein", "Kein offiziell markierter Wanderweg zum Gipfel", "Zählt zur Schesaplana-Gruppe der Ostalpen"],
      hu: ["Liechtenstein legmagasabb hegye 2599 méterrel", "A Rätikon hegységcsoporthoz tartozik", "Liechtenstein és Svájc határán fekszik", "Geológiailag túlnyomórészt mészkőből épül fel", "Nincs hivatalosan jelzett túraútvonal a csúcsra", "A Keleti-Alpok Schesaplana-csoportjának része"],
      ro: ["Cel mai înalt munte din Liechtenstein, cu 2599 m", "Face parte din grupul muntos Rätikon", "Situat pe granița dintre Liechtenstein și Elveția", "Compoziție geologică predominant din calcar", "Nu există trasee turistice marcate spre vârf", "Aparține grupului Schesaplana din Alpii Orientali"],
      en: ["Highest peak in Liechtenstein at 2,599 meters", "Part of the Rätikon mountain range", "Located on the border between Liechtenstein and Switzerland", "Geologically composed mainly of limestone", "No officially marked hiking trail to the summit", "Member of the Schesaplana group in the Eastern Alps"],
    },
    image: "/poi-images/li-nat-grauspitz.webp",
  },
  {
    id: "li-nat-naafkopf",
    type: "landmark",
    parent: "LI-003",
    coords: [9.6055, 47.0608],
    name: {
      de: "Naafkopf",
      hu: "Naafkopf",
      ro: "Naafkopf",
      en: "Naafkopf"
    }, image: "/poi-images/li-nat-naafkopf.webp",
    descriptionAdvanced: {
      de: "Der Naafkopf ist ein markanter Berggipfel im Rätikon, der eine Höhe von 2570 Metern erreicht. Seine besondere Bedeutung liegt in seiner Lage als Dreiländereck zwischen dem Fürstentum Liechtenstein, Österreich (Vorarlberg) und der Schweiz (Graubünden). Der Berg besitzt drei Grate, die jeweils in eines der drei Länder führen, was ihn zu einem geografisch einzigartigen Punkt in den Alpen macht. Der Gipfel ist ein beliebtes Ziel für Bergsteiger und Wanderer, wobei der Normalweg über die nahegelegene Pfälzerhütte führt, die sich auf 2108 Metern am Fuße des Berges befindet. Die erste dokumentierte Vermessung des Gipfels fand Mitte des 19. Jahrhunderts statt. Die Aussicht vom Gipfel umfasst das Saminatal, das Montafon und weite Teile der Graubündner Alpen, was den Naafkopf zu einem der meistbesuchten Aussichtspunkte der Region macht.",
      hu: "A Naafkopf a Rätikon hegység egyik jellegzetes hegycsúcsa, amely 2570 méteres magasságot ér el. Különleges jelentőségét az adja, hogy ez a pont Liechtenstein, Ausztria (Vorarlberg) és Svájc (Graubünden) hármashatára. A hegynek három gerince van, amelyek mindegyike a három ország egyikébe vezet, így földrajzilag egyedülálló pont az Alpokban. A csúcs a hegymászók és túrázók kedvelt célpontja, a leggyakoribb útvonal a közeli Pfälzerhüttén keresztül vezet, amely 2108 méteres magasságban található a hegy lábánál. A csúcs első dokumentált felmérésére a 19. század közepén került sor. A csúcsról nyíló kilátás magában foglalja a Samina-völgyet, a Montafont és a Graubündeni Alpok nagy részét, ami a Naafkopfot a régió egyik leglátogatottabb kilátópontjává teszi.",
      ro: "Naafkopf este un vârf montan proeminent din Rätikon, atingând o altitudine de 2570 de metri. Importanța sa deosebită constă în locația sa strategică, servind ca punct de frontieră triplu între Principatul Liechtenstein, Austria (Vorarlberg) și Elveția (Graubünden). Muntele are trei creste care se ramifică spre fiecare dintre cele trei țări, făcându-l un punct geografic unic în Alpi. Vârful este o destinație populară pentru alpiniști și turiști, ruta standard trecând pe lângă cabana Pfälzerhütte, situată la 2108 metri la baza muntelui. Prima măsurătoare documentată a vârfului a avut loc la mijlocul secolului al XIX-lea. Panorama de pe vârf cuprinde valea Samina, regiunea Montafon și zone întinse din Alpii din Graubünden, ceea ce face din Naafkopf unul dintre cele mai apreciate puncte de observație din regiune.",
      en: "Naafkopf is a prominent mountain peak in the Rätikon range, reaching an elevation of 2,570 meters. Its primary significance lies in its location as a tripoint (Dreiländereck) between the Principality of Liechtenstein, Austria (Vorarlberg), and Switzerland (Graubünden). The mountain features three ridges, each leading into one of the three respective countries, making it a geographically unique point in the Alps. The summit is a popular destination for mountaineers and hikers, with the standard route passing through the nearby Pfälzerhütte mountain hut, located at 2,108 meters at the base of the mountain. The first documented survey of the peak took place in the mid-19th century. The view from the summit encompasses the Samina Valley, the Montafon region, and large portions of the Graubünden Alps, making Naafkopf one of the most visited vantage points in the area.",
    },
    factsAdvanced: {
      de: ["Gipfelhöhe von 2570 Metern", "Dreiländereck (Liechtenstein, Österreich, Schweiz)", "Lage in der Rätikon-Gebirgsgruppe", "Zustieg meist über die Pfälzerhütte (2108 m)", "Besitzt drei markante Grate", "Wichtiger Vermessungspunkt seit dem 19. Jahrhundert"],
      hu: ["A csúcs magassága 2570 méter", "Hármashatár (Liechtenstein, Ausztria, Svájc)", "A Rätikon hegységcsoportban található", "Megközelítése többnyire a Pfälzerhüttén (2108 m) át történik", "Három jellegzetes gerinccel rendelkezik", "Fontos mérési pont a 19. század óta"],
      ro: ["Altitudinea vârfului este de 2570 de metri", "Punct de frontieră triplu (LI, AT, CH)", "Situat în grupul muntos Rätikon", "Accesul se face de obicei prin Pfälzerhütte (2108 m)", "Dispune de trei creste proeminente", "Punct de măsurare important din secolul al XIX-lea"],
      en: ["Summit elevation of 2,570 meters", "Tripoint of Liechtenstein, Austria, and Switzerland", "Located in the Rätikon mountain group", "Access typically via Pfälzerhütte hut (2,108 m)", "Features three distinct ridges", "Important surveying point since the 19th century"],
    },
  },
  {
    id: "li-nat-falknis",
    type: "landmark",
    parent: "LI-004",
    coords: [9.5658, 47.0513],
    name: {
      de: "Falknis",
      hu: "Falknis",
      ro: "Falknis",
      en: "Falknis"
    }, image: "/poi-images/li-nat-falknis.webp",
    descriptionAdvanced: {
      de: "Der Falknis ist ein 2562 Meter hoher Berg im Rätikon, der sich an der Grenze zwischen Liechtenstein und der Schweiz erhebt. Er ist vor allem durch seine markante Erscheinung über dem Rheintal bekannt und ein Wahrzeichen für die Gemeinde Balzers im Süden Liechtensteins. Der Berg besteht vorwiegend aus Kalkstein der Kreidezeit und ist durch seine schroffen Felswände geprägt. Besonders bekannt wurde der Falknis durch die Erwähnung im Roman 'Heidi' von Johanna Spyri, was ihm überregionale Bekanntheit verschaffte. Wanderwege führen von der liechtensteinischen Seite sowie von Maienfeld in der Schweiz zum Gipfel, wobei die Fläscher Seen ein beliebtes Etappenziel darstellen. Die Flora am Falknis ist typisch alpin und beherbergt seltene Pflanzenarten sowie Steinwildbestände. Von der Spitze aus bietet sich ein weitreichender Ausblick bis zum Bodensee und tief in die Bündner Herrschaft.",
      hu: "A Falknis egy 2562 méter magas hegy a Rätikon hegységben, amely Liechtenstein és Svájc határán emelkedik. Elsősorban a Rajna-völgy feletti jellegzetes megjelenéséről ismert, és a dél-liechtensteini Balzers község jelképe. A hegy főként a kréta korból származó mészkőből épül fel, és meredek sziklafalai jellemzik. A Falknis különösen Johanna Spyri 'Heidi' című regényében való említése révén vált ismertté, ami nemzetközi hírnevet hozott neki. Túraútvonalak vezetnek a liechtensteini oldalról és a svájci Maienfeldből is a csúcsra, miközben a Fläscher-tavak kedvelt megállóhelyek. A Falknis flórája tipikus alpesi, ritka növényfajoknak és kőszáli kecske állományoknak ad otthont. A csúcsról messzire el lehet látni, egészen a Bodeni-tóig és mélyen a Bündner Herrschaft területére.",
      ro: "Falknis este un munte cu o înălțime de 2562 de metri situat în Rätikon, ridicându-se la granița dintre Liechtenstein și Elveția. Este cunoscut în special pentru prezența sa impunătoare deasupra văii Rinului, fiind un punct de reper pentru comuna Balzers din sudul Liechtensteinului. Muntele este compus în principal din calcar cretacic și este caracterizat de pereți stâncoși abrupți. Falknis a devenit cunoscut la nivel internațional datorită menționării sale în romanul 'Heidi' de Johanna Spyri. Traseele de drumeție pornesc atât din partea liechtensteiniană, cât și din Maienfeld, Elveția, lacurile Fläscher fiind o etapă populară a traseului. Flora de pe Falknis este tipic alpină, adăpostind specii rare de plante și populații de capre negre. De pe vârf, panorama se extinde până la Lacul Constance și adânc în regiunea Bündner Herrschaft.",
      en: "Falknis is a 2,562-meter-high mountain in the Rätikon range, rising on the border between Liechtenstein and Switzerland. It is best known for its striking appearance overlooking the Rhine Valley and serves as a landmark for the municipality of Balzers in southern Liechtenstein. The mountain is primarily composed of Cretaceous limestone and is characterized by its rugged rock faces. Falknis gained international fame through its mention in Johanna Spyri's novel 'Heidi,' which brought regional recognition to the peak. Hiking trails lead to the summit from both the Liechtenstein side and Maienfeld in Switzerland, with the Fläscher Lakes serving as a popular stop along the way. The flora on Falknis is typically alpine, hosting rare plant species and populations of alpine ibex. From the summit, the expansive view stretches as far as Lake Constance and deep into the Bündner Herrschaft region.",
    },
    factsAdvanced: {
      de: ["Gipfelhöhe von 2562 Metern", "Grenzberg zwischen Liechtenstein und der Schweiz", "Literarische Erwähnung im Roman 'Heidi'", "Geologische Zusammensetzung aus Kreidekalk", "Beliebtes Wanderziel von Balzers und Maienfeld", "Vorkommen von Steinböcken in den Gipfelregionen"],
      hu: ["A csúcs magassága 2562 méter", "Határhegy Liechtenstein és Svájc között", "Irodalmi említés a 'Heidi' című regényben", "Kréta kori mészkőből álló geológiai felépítés", "Kedvelt túracélpont Balzers és Maienfeld felől", "Kőszáli kecskék előfordulása a csúcsrégiókban"],
      ro: ["Înălțimea vârfului este de 2562 de metri", "Munte de frontieră între Liechtenstein și Elveția", "Menționat literar în romanul 'Heidi'", "Compoziție geologică din calcar cretacic", "Destinație de drumeție populară din Balzers și Maienfeld", "Prezența caprelor negre în regiunile înalte"],
      en: ["Summit elevation of 2,562 meters", "Border mountain between Liechtenstein and Switzerland", "Literarily mentioned in the novel 'Heidi'", "Geological composition of Cretaceous limestone", "Popular hiking destination from Balzers and Maienfeld", "Presence of alpine ibex in the summit regions"],
    },
  },
  {
    id: "li-nat-drei-schwestern",
    type: "landmark",
    parent: "LI-002",
    coords: [9.5750, 47.1736],
    name: {
      de: "Drei Schwestern",
      hu: "Három Nővér (Drei Schwestern)",
      ro: "Trei Surori (Drei Schwestern)",
      en: "Drei Schwestern (Three Sisters)"
    }, image: "/poi-images/li-nat-drei-schwestern.webp",
    descriptionAdvanced: {
      de: "Die Drei Schwestern sind eine markante Berggruppe im Rätikon, deren höchster Gipfel 2053 Meter erreicht. Sie liegen an der Grenze zwischen dem Fürstentum Liechtenstein und Österreich (Vorarlberg) oberhalb der Stadt Feldkirch. Der Name geht auf eine Sage zurück, nach der drei Schwestern wegen des Beerensammelns am Sonntag zu Stein erstarrten. Die Gruppe besteht aus den Gipfeln Große Schwester (2053 m), Mittlere Schwester (2052 m) und Wolkenstein (2048 m). Die Berge bestehen überwiegend aus Hauptdolomit, was zu ihrer schroffen und zackigen Form führt. Der Drei-Schwestern-Steig ist ein berühmter, teilweise versicherter Wanderweg, der spektakuläre Tiefblicke und Aussichten auf die Schweizer Alpen und den Bodensee bietet. Er ist eng mit dem Fürstensteig verbunden und bildet einen der klassischen Höhenwege Liechtensteins, der Trittsicherheit und Schwindelfreiheit erfordert.",
      hu: "A Drei Schwestern (Három Nővér) egy jellegzetes hegycsoport a Rätikon hegységben, amelynek legmagasabb csúcsa 2053 méter. Liechtenstein és Ausztria (Vorarlberg) határán található, Feldkirch városa felett. A név egy legendára vezethető vissza, amely szerint három nővér, akik vasárnap bogyókat gyűjtöttek, kővé dermedt. A csoport a Große Schwester (2053 m), a Mittlere Schwester (2052 m) és a Wolkenstein (2048 m) csúcsokból áll. A hegyek túlnyomórészt fődolomitból épülnek fel, ami a meredek és csipkés formájukat eredményezi. A Drei-Schwestern-Steig egy híres, részben biztosított túraútvonal, amely látványos kilátást nyújt a svájci Alpokra és a Bodeni-tóra. Szorosan kapcsolódik a Fürstensteig útvonalhoz, és Liechtenstein egyik klasszikus magaslati útja, amely biztos lépést és szédülésmentességet igényel.",
      ro: "Drei Schwestern (Cele Trei Surori) reprezintă un grup montan proeminent din Rätikon, al cărui cel mai înalt vârf atinge 2053 de metri. Acestea sunt situate pe granița dintre Principatul Liechtenstein și Austria (Vorarlberg), deasupra orașului Feldkirch. Numele provine dintr-o legendă locală conform căreia trei surori au fost pietrificate pentru că au cules fructe de pădure duminica. Grupul este format din vârfurile Große Schwester (2053 m), Mittlere Schwester (2052 m) și Wolkenstein (2048 m). Munții sunt compuși în principal din dolomită, ceea ce le conferă o formă abruptă și zimțată. Traseul Drei-Schwestern-Steig este o potecă celebră de drumeție, parțial asigurată, care oferă vederi spectaculoase spre Alpii elvețieni și Lacul Constance. Este strâns legat de traseul Fürstensteig și constituie una dintre rutele clasice de creastă din Liechtenstein, necesitând experiență montană.",
      en: "The Drei Schwestern (Three Sisters) are a prominent mountain group in the Rätikon range, with the highest peak reaching 2,053 meters. They are located on the border between the Principality of Liechtenstein and Austria (Vorarlberg), overlooking the town of Feldkirch. The name originates from a legend according to which three sisters were turned to stone for picking berries on a Sunday. The group consists of the peaks Große Schwester (2,053 m), Mittlere Schwester (2,052 m), and Wolkenstein (2,048 m). The mountains are predominantly composed of Hauptdolomit, which accounts for their rugged and jagged appearance. The Drei-Schwestern-Steig is a famous, partially secured hiking trail that offers spectacular views of the Swiss Alps and Lake Constance. It is closely linked to the Fürstensteig trail and represents one of Liechtenstein's classic high-altitude routes, requiring surefootedness and a head for heights.",
    },
    factsAdvanced: {
      de: ["Höchster Gipfel der Gruppe: 2053 Meter", "Grenzgebirge zwischen Liechtenstein und Österreich", "Geologische Formation aus Hauptdolomit", "Namensgebung nach einer regionalen Steinsage", "Teil des klassischen Drei-Schwestern-Steigs", "Drei Hauptgipfel: Große, Mittlere und Wolkenstein"],
      hu: ["A csoport legmagasabb csúcsa: 2053 méter", "Határhegység Liechtenstein és Ausztria között", "Geológiai formáció fődolomitból", "Névadás egy helyi legenda alapján", "A klasszikus Drei-Schwestern-Steig része", "Három fő csúcs: Große, Mittlere és Wolkenstein"],
      ro: ["Cel mai înalt vârf al grupului: 2053 metri", "Munți de frontieră între Liechtenstein și Austria", "Formațiune geologică din dolomită", "Numele provine dintr-o legendă regională", "Face parte din traseul celebru Drei-Schwestern-Steig", "Trei vârfuri principale: Große, Mittlere și Wolkenstein"],
      en: ["Highest peak of the group: 2,053 meters", "Border mountains between Liechtenstein and Austria", "Geological formation of Hauptdolomit", "Named after a regional stone legend", "Part of the classic Drei-Schwestern-Steig trail", "Three main peaks: Große, Mittlere, and Wolkenstein"],
    },
  },
  {
    id: "li-nat-sareiserjoch",
    type: "landmark",
    parent: "LI-003",
    coords: [9.6166, 47.0988],
    name: {
      de: "Sareiserjoch",
      hu: "Sareiserjoch",
      ro: "Sareiserjoch",
      en: "Sareiserjoch"
    }, image: "/poi-images/li-nat-sareiserjoch.webp",
    descriptionAdvanced: {
      de: "Das Sareiserjoch liegt auf einer Höhe von rund 2000 Metern über dem Bergdorf Malbun im Osten Liechtensteins. Es ist ein zentraler Übergang und Aussichtspunkt im Rätikon, der die Verbindung zwischen dem Malbuntal und dem Gamperdonatal in Österreich markiert. Das Joch ist durch eine Sesselbahn von Malbun aus erschlossen, die Besucher zum Bergrestaurant Sareis bringt. Von hier aus startet der berühmte Fürstin-Gina-Weg, ein Panoramawanderweg, der über den Augstenberg zur Pfälzerhütte führt. Das Sareiserjoch bietet einen weiten Blick über das Saminatal und die umliegenden Liechtensteiner Berggipfel. Im Winter ist das Gebiet ein wichtiger Teil des Skigebiets Malbun, während es im Sommer als Ausgangspunkt für zahlreiche alpine Wanderungen dient. Die exponierte Lage macht es zu einem idealen Ort für die Beobachtung alpiner Greifvögel und der lokalen Flora.",
      hu: "A Sareiserjoch körülbelül 2000 méteres magasságban található Malbun hegyi falu felett, Kelet-Liechtensteinben. A Rätikon hegység egyik központi átjárója és kilátópontja, amely összeköti a liechtensteini Malbun-völgyet az ausztriai Gamperdona-völggyel. A hágó Malbunból ülőlift segítségével érhető el, amely a látogatókat a Sareis hegyi étteremhez szállítja. Innen indul a híres Gina hercegnő-út (Fürstin-Gina-Weg), egy panoráma-túraútvonal, amely az Augstenberg-csúcson keresztül a Pfälzerhüttéhez vezet. A Sareiserjoch széles kilátást nyújt a Samina-völgyre és a környező liechtensteini hegycsúcsokra. Télen a terület a malbuni síközpont fontos része, nyáron pedig számos alpesi túra kiindulópontjaként szolgál. Exponált fekvése miatt ideális hely az alpesi ragadozó madarak és a helyi flóra megfigyelésére.",
      ro: "Sareiserjoch este situat la o altitudine de aproximativ 2000 de metri deasupra satului montan Malbun, în estul Liechtensteinului. Este o trecătoare centrală și un punct de observație în Rätikon, marcând legătura dintre valea Malbun și valea Gamperdona din Austria. Trecătoarea este accesibilă printr-un telescaun din Malbun, care transportă vizitatorii la restaurantul montan Sareis. De aici începe celebrul traseu 'Fürstin-Gina-Weg', o potecă panoramică ce duce peste vârful Augstenberg către cabana Pfälzerhütte. Sareiserjoch oferă o priveliște vastă asupra văii Samina și a vârfurilor muntoase învecinate din Liechtenstein. În timpul iernii, zona este o parte importantă a domeniului schiabil Malbun, în timp ce vara servește ca punct de plecare pentru numeroase drumeții alpine. Poziția sa expusă o face un loc ideal pentru observarea păsărilor de pradă alpine.",
      en: "Sareiserjoch is located at an elevation of approximately 2,000 meters above the mountain village of Malbun in eastern Liechtenstein. It serves as a central pass and vantage point in the Rätikon range, marking the connection between the Malbun Valley and the Gamperdona Valley in Austria. The pass is accessible via a chairlift from Malbun, which brings visitors to the Sareis mountain restaurant. This point marks the start of the famous Princess Gina Trail (Fürstin-Gina-Weg), a panoramic hiking route that leads over Augstenberg to the Pfälzerhütte hut. Sareiserjoch offers an expansive view over the Samina Valley and the surrounding peaks of Liechtenstein. In winter, the area is a vital part of the Malbun ski resort, while in summer, it serves as a starting point for numerous alpine hikes. Its exposed location makes it an ideal spot for observing alpine birds of prey and local flora.",
    },
    factsAdvanced: {
      de: ["Höhenlage von ca. 2000 Metern", "Erreichbar mit der Sesselbahn von Malbun", "Startpunkt des Fürstin-Gina-Wegs", "Übergang nach Vorarlberg, Österreich", "Lage im Zentrum des Rätikon-Gebirges", "Wichtiger Aussichtspunkt für das Saminatal"],
      hu: ["Kb. 2000 méteres tengerszint feletti magasság", "Malbunból ülőlifttel érhető el", "A Fürstin-Gina-Weg kiindulópontja", "Átjáró az osztrák Vorarlberg felé", "A Rätikon-hegység központjában található", "Fontos kilátópont a Samina-völgyre"],
      ro: ["Altitudine de aproximativ 2000 de metri", "Accesibil cu telescaunul din Malbun", "Punct de plecare pentru traseul Fürstin-Gina-Weg", "Pas de trecere către Vorarlberg, Austria", "Situat în centrul munților Rätikon", "Punct de observație important pentru valea Samina"],
      en: ["Elevation of approximately 2,000 meters", "Accessible by chairlift from Malbun", "Starting point of the Princess Gina Trail", "Pass connection to Vorarlberg, Austria", "Located in the center of the Rätikon range", "Key vantage point for the Samina Valley"],
    },
  },
  {
    id: "li-nat-samina",
    type: "landmark",
    parent: "LI-003",
    coords: [9.5666, 47.1333],
    name: {
      de: "Samina (Fluss)",
      hu: "Samina-folyó",
      ro: "Râul Samina",
      en: "Samina River"
    }, image: "/poi-images/li-nat-samina.webp",
    descriptionAdvanced: {
      de: "Die Samina ist mit einer Gesamtlänge von rund 17 Kilometern der zweitlängste Fluss des Fürstentums Liechtenstein. Sie entspringt in den Gebirgsregionen des Rätikon und durchfließt das wildromantische Saminatal, bevor sie bei Frastanz in Österreich in die Ill mündet. Rund 12 Kilometer ihres Laufs befinden sich auf liechtensteinischem Staatsgebiet. Der Fluss ist ökologisch von großer Bedeutung, da er weite Strecken in einem naturnahen Zustand zurücklegt und Lebensraum für zahlreiche seltene Tier- und Pflanzenarten bietet. Die Wasserkraft der Samina wird intensiv genutzt, insbesondere durch das 1947 in Betrieb genommene Samina-Kraftwerk, das einen wesentlichen Beitrag zur Energieversorgung des Landes leistet. Trotz der energetischen Nutzung wurden Schutzmaßnahmen ergriffen, um den ökologischen Wert des Flusslaufs zu erhalten. Das Saminatal selbst ist unbesiedelt und gilt als eines der wichtigsten Naherholungsgebiete für Wanderer und Naturliebhaber.",
      hu: "A Samina összesen mintegy 17 kilométeres hosszával a Liechtensteini Hercegség második leghosszabb folyója. A Rätikon hegység régióiban ered, és a vadregényes Samina-völgyön folyik keresztül, mielőtt az ausztriai Frastanznál az Ill folyóba torkollna. Futásának körülbelül 12 kilométere fekszik liechtensteini államterületen. A folyó ökológiailag nagy jelentőségű, mivel hosszú szakaszokon természetközeli állapotban maradt fenn, és számos ritka állat- és növényfajnak nyújt élőhelyet. A Samina vízi erejét intenzíven hasznosítják, különösen az 1947-ben üzembe helyezett Samina-erőmű révén, amely jelentősen hozzájárul az ország energiaellátásához. Az energiatermelés ellenére védelmi intézkedéseket hoztak a folyó ökológiai értékének megőrzése érdekében. Maga a Samina-völgy lakatlan, és a túrázók és természetbarátok egyik legfontosabb pihenőövezetének számít.",
      ro: "Samina este al doilea cel mai lung râu din Principatul Liechtenstein, având o lungime totală de aproximativ 17 kilometri. Acesta izvorăște în regiunile montane din Rätikon și traversează valea sălbatică Samina înainte de a se vărsa în râul Ill, lângă Frastanz, în Austria. Aproximativ 12 kilometri din cursul său se află pe teritoriul statului Liechtenstein. Râul este de o importanță ecologică majoră, deoarece parcurge distanțe mari într-o stare naturală, oferind habitat pentru numeroase specii rare de floră și faună. Energia hidroelectrică a Samininei este utilizată intens, în special prin centrala Samina, pusă în funcțiune în 1947, care contribuie semnificativ la aprovizionarea cu energie a țării. În ciuda utilizării energetice, au fost luate măsuri de protecție pentru a păstra valoarea ecologică a cursului apei. Valea Samina este nelocuită și este considerată una dintre cele mai importante zone de recreere pentru drumeții.",
      en: "The Samina is the second-longest river in the Principality of Liechtenstein, with a total length of approximately 17 kilometers. It originates in the mountain regions of the Rätikon and flows through the wild and romantic Samina Valley before emptying into the Ill River near Frastanz in Austria. About 12 kilometers of its course lie within Liechtenstein territory. The river is of great ecological significance, as it covers long stretches in a near-natural state, providing a habitat for numerous rare animal and plant species. The water power of the Samina is utilized extensively, particularly by the Samina power plant, which went into operation in 1947 and makes a substantial contribution to the country's energy supply. Despite this hydroelectric use, conservation measures have been implemented to preserve the river's ecological value. The Samina Valley itself is uninhabited and is regarded as one of the most important recreational areas for hikers and nature lovers.",
    },
    factsAdvanced: {
      de: ["Zweitlängster Fluss Liechtensteins (17 km)", "Quelle im Rätikon-Gebirge", "Mündung in die Ill bei Frastanz", "Rund 12 km Fließstrecke in Liechtenstein", "Nutzung durch das Samina-Kraftwerk (seit 1947)", "Unbesiedeltes Tal mit hoher ökologischer Qualität"],
      hu: ["Liechtenstein második leghosszabb folyója (17 km)", "Forrása a Rätikon-hegységben található", "Torkolata az Ill folyóba Frastanznál", "Körülbelül 12 km-es szakasz Liechtensteinben", "A Samina-erőmű hasznosítja (1947 óta)", "Lakatlan völgy magas ökológiai minőséggel"],
      ro: ["Al doilea cel mai lung râu din Liechtenstein (17 km)", "Izvorăște în munții Rätikon", "Se varsă în râul Ill lângă Frastanz", "Circa 12 km din curs se află în Liechtenstein", "Utilizat de centrala hidroelectrică Samina (din 1947)", "Valea este nelocuită și are o valoare ecologică ridicată"],
      en: ["Second-longest river in Liechtenstein (17 km)", "Source located in the Rätikon mountains", "Empties into the Ill River near Frastanz", "Approximately 12 km of its course in Liechtenstein", "Powered by the Samina power plant since 1947", "Uninhabited valley with high ecological quality"],
    },
  },
  {
    id: "li-nat-rhine",
    type: "landmark",
    parent: "LI-ALL",
    coords: [9.4880, 47.1600],
    name: {
      de: "Alpenrhein",
      hu: "Alpesi Rajna",
      ro: "Rinul Alpin",
      en: "Alpine Rhine"
    }, image: "/poi-images/li-nat-rhine.webp",
    descriptionAdvanced: {
      de: "Der Alpenrhein bildet auf einer Länge von rund 27 Kilometern die westliche Staatsgrenze zwischen dem Fürstentum Liechtenstein und der Schweiz. Er ist die lebenswichtige Hauptader des Rheintals und prägt maßgeblich die Geografie und Geschichte des Landes. Historisch war der Fluss berüchtigt für seine verheerenden Hochwasser, was im 19. und 20. Jahrhundert zu umfangreichen Regulierungsarbeiten und dem Bau von stabilen Schutzdämmen, den sogenannten Wuhren, führte. Heute ist der Rhein ein beidseitig von Deichen eingefasster Kanal, der jedoch durch ökologische Aufwertungsprojekte schrittweise renaturiert werden soll. Er dient als wichtiges Grundwasserreservoir und bietet auf seinen Dämmen beliebte Rad- und Wanderwege. Mehrere Brücken, darunter die historische Holzbrücke zwischen Sevelen und Vaduz, verbinden Liechtenstein mit den Schweizer Nachbargemeinden. Der Fluss ist zudem ein bedeutender Korridor für Zugvögel und ein zentrales Element im regionalen Hochwasserschutzkonzept.",
      hu: "Az Alpenrhein (Alpesi Rajna) körülbelül 27 kilométer hosszúságban alkotja a nyugati államhatárt Liechtenstein és Svájc között. Ez a Rajna-völgy létfontosságú főere, amely döntően meghatározza az ország földrajzát és történelmét. Történelmileg a folyó hírhedt volt pusztító árvizeiről, ami a 19. és 20. században kiterjedt szabályozási munkálatokhoz és stabil védőgátak, úgynevezett 'Wuhren'-ek építéséhez vezetett. Ma a Rajna mindkét oldalon gátakkal határolt csatorna, amelyet azonban ökológiai projektek keretében fokozatosan szeretnének természetközelibbé tenni. Fontos talajvíz-rezervoárként szolgál, gátjain pedig kedvelt kerékpár- és túraútvonalak találhatók. Számos híd, köztük a Sevelen és Vaduz közötti történelmi fahíd köti össze Liechtensteint a svájci szomszédos településekkel. A folyó emellett a költöző madarak jelentős folyosója és a regionális árvízvédelmi koncepció központi eleme.",
      ro: "Rinul Alpin (Alpenrhein) formează, pe o lungime de aproximativ 27 de kilometri, granița de vest dintre Principatul Liechtenstein și Elveția. Acesta reprezintă principala arteră vitală a văii Rinului, modelând semnificativ geografia și istoria țării. Din punct de vedere istoric, râul era renumit pentru inundațiile sale devastatoare, ceea ce a dus la lucrări extinse de regularizare în secolele al XIX-lea și al XX-lea și la construcția unor diguri de protecție stabile, numite 'Wuhren'. Astăzi, Rinul este un canal flancat de diguri pe ambele părți, dar există proiecte de reamenajare ecologică pentru renaturarea sa treptată. Servește ca un rezervor important de apă subterană, iar digurile sale oferă trasee populare pentru ciclism și drumeție. Mai multe poduri, inclusiv podul istoric din lemn dintre Sevelen și Vaduz, conectează Liechtenstein de comunele elvețiene vecine. Fluviul este, de asemenea, un coridor important pentru păsările migratoare.",
      en: "The Alpine Rhine forms the western national border between the Principality of Liechtenstein and Switzerland over a distance of approximately 27 kilometers. It is the vital main artery of the Rhine Valley and significantly shapes the geography and history of the country. Historically, the river was notorious for its devastating floods, which led to extensive regulation work in the 19th and 20th centuries and the construction of stable protective embankments known as 'Wuhren.' Today, the Rhine is a channel enclosed by dikes on both sides, though ecological enhancement projects aim to gradually renature its course. It serves as an important groundwater reservoir, and its dikes provide popular routes for cycling and hiking. Several bridges, including the historic wooden bridge between Sevelen and Vaduz, connect Liechtenstein with neighboring Swiss municipalities. The river is also a significant corridor for migratory birds and a central element in the regional flood protection strategy.",
    },
    factsAdvanced: {
      de: ["Bildet 27 km der liechtensteinischen Westgrenze", "Regulierung und Dammbau seit dem 19. Jahrhundert", "Wichtigstes Entwässerungssystem des Landes", "Standort der historischen Holzbrücke Vaduz-Sevelen", "Teil des internationalen Einzugsgebiets des Rheins", "Bedeutendes Grundwasserreservoir für die Region"],
      hu: ["27 km hosszan alkotja Liechtenstein nyugati határát", "A 19. század óta szabályozzák és gátakat építenek", "Az ország legfontosabb vízelvezető rendszere", "A vaduzi-seveleni történelmi fahíd helyszíne", "A Rajna nemzetközi vízgyűjtő területének része", "A régió jelentős talajvízkészlete"],
      ro: ["Formează 27 km din granița de vest a Liechtensteinului", "Regularizat prin diguri începând cu secolul al XIX-lea", "Cel mai important sistem de drenaj al țării", "Locația podului istoric din lemn Vaduz-Sevelen", "Parte a bazinului hidrografic internațional al Rinului", "Rezervor important de apă subterană pentru regiune"],
      en: ["Forms 27 km of Liechtenstein's western border", "Regulated with dikes since the 19th century", "Most important drainage system in the country", "Location of the historic wooden bridge Vaduz-Sevelen", "Part of the international Rhine catchment area", "Significant groundwater reservoir for the region"],
    },
  },
  {
    id: "li-nat-steg-reservoir",
    type: "landmark",
    parent: "LI-003",
    coords: [9.5744, 47.1130],
    name: {
      de: "Stausee Steg (Gänglesee)",
      hu: "Steg-víztározó (Gänglesee)",
      ro: "Lacul de acumulare Steg",
      en: "Steg Reservoir (Gänglesee)"
    }, image: "/poi-images/li-nat-steg-reservoir.webp",
    descriptionAdvanced: {
      de: "Das Reservoir in Steg, bestehend aus dem Stausee Steg und dem direkt angrenzenden Gänglesee, liegt auf einer Höhe von etwa 1300 Metern in der Gemeinde Triesenberg. Der Stausee wurde primär für die Wasserkraftnutzung angelegt und speist das Samina-Kraftwerk im Tal. Er sammelt das Wasser der Malbun- und Valorschbäche, bevor es durch einen Druckstollen geleitet wird. Der benachbarte Gänglesee hingegen dient heute primär als Naherholungsgebiet und Naturbadesee, der besonders im Sommer bei Familien beliebt ist. Die Seenlandschaft ist von einer beeindruckenden alpinen Kulisse umgeben und bildet das Zentrum des malerischen Weilers Steg. Neben der energetischen Bedeutung bietet das Areal zahlreiche Freizeitmöglichkeiten wie Wandern, Grillen und im Winter Langlaufen auf der nahegelegenen Loipe. Die Wasserqualität der Seen ist exzellent und spiegelt die Reinheit der alpinen Zuflüsse wider.",
      hu: "A stegi tározó, amely a Steg-víztározóból és a közvetlenül mellette fekvő Gänglesee-ből áll, körülbelül 1300 méteres magasságban található Triesenberg községben. A víztározót elsősorban vízenergia-hasznosítás céljából hozták létre, és a völgyben lévő Samina-erőművet táplálja. Itt gyűjtik össze a Malbun- és Valorsch-patakok vizét, mielőtt egy nyomóalagúton keresztül elvezetnék. A szomszédos Gänglesee ezzel szemben ma már elsősorban pihenőhelyként és természetes fürdőtóként szolgál, amely különösen nyáron népszerű a családok körében. A tavakat lenyűgöző alpesi díszlet veszi körül, és a festői Steg falucska központját alkotják. Az energetikai jelentőség mellett a terület számos szabadidős lehetőséget kínál, mint például a túrázás, a grillezés, télen pedig a közeli pályán történő sífutás. A tavak vízminősége kiváló, ami tükrözi az alpesi befolyók tisztaságát.",
      ro: "Rezervorul din Steg, format din lacul de acumulare Steg și lacul Gänglesee situat imediat lângă acesta, se află la o altitudine de aproximativ 1300 de metri în comuna Triesenberg. Lacul de acumulare a fost creat în principal pentru utilizarea energiei hidroelectrice, alimentând centrala Samina din vale. Acesta colectează apele pârâurilor Malbun și Valorsch înainte ca acestea să fie direcționate printr-un tunel de presiune. În schimb, lacul învecinat Gänglesee servește astăzi în principal ca zonă de recreere și lac natural pentru înot, fiind deosebit de popular în rândul familiilor în timpul verii. Peisajul lacustru este înconjurat de un decor alpin impresionant și constituie centrul cătunului pitoresc Steg. Pe lângă importanța energetică, zona oferă numeroase oportunități de petrecere a timpului liber, cum ar fi drumețiile și schiul fond în timpul iernii. Calitatea apei este excelentă, reflectând puritatea afluenților alpini.",
      en: "The Steg Reservoir, consisting of the Steg artificial lake and the directly adjacent Gänglesee, is situated at an altitude of approximately 1,300 meters in the municipality of Triesenberg. The reservoir was primarily created for hydroelectric power generation, supplying the Samina power plant in the valley below. It collects water from the Malbun and Valorsch streams before it is channeled through a pressure tunnel. In contrast, the neighboring Gänglesee serves today mainly as a recreational area and natural swimming lake, particularly popular with families during the summer months. The lake landscape is framed by an impressive alpine backdrop and forms the heart of the picturesque hamlet of Steg. Beyond its energy-related importance, the area offers numerous leisure opportunities such as hiking, picnicking, and cross-country skiing in winter on the nearby trails. The water quality of the lakes is excellent, reflecting the purity of their alpine inflows.",
    },
    factsAdvanced: {
      de: ["Lage auf rund 1300 Metern Seehöhe", "Speist das Samina-Kraftwerk im Tal", "Besteht aus Stausee und Badesee (Gänglesee)", "Zentrum des Erholungsgebietes Steg", "Sammelt Wasser aus Malbun- und Valorschbach", "Beliebtes Revier für Hobbyfischer und Wanderer"],
      hu: ["Kb. 1300 méteres tengerszint feletti magasság", "A völgyben lévő Samina-erőművet táplálja", "Egy víztározóból és egy fürdőtóból (Gänglesee) áll", "A stegi üdülőövezet központja", "A Malbun- és Valorsch-patakok vizét gyűjti össze", "Kedvelt hely a horgászok és túrázók számára"],
      ro: ["Situat la aproximativ 1300 de metri altitudine", "Alimentează centrala hidroelectrică Samina", "Format dintr-un lac de acumulare și lacul Gänglesee", "Centrul zonei de recreere Steg", "Colectează apa din pârâurile Malbun și Valorsch", "Zonă populară pentru pescari amatori și turiști"],
      en: ["Located at around 1,300 meters above sea level", "Supplies the Samina power plant in the valley", "Consists of a reservoir and a swimming lake (Gänglesee)", "Heart of the Steg recreation area", "Collects water from the Malbun and Valorsch streams", "Popular spot for hobby fishers and hikers"],
    },
  },
    {
    id: "li-poi-planken-gafadura",
    type: "landmark",
    parent: "LI-005",
    coords: [9.5700, 47.1820],
    name: { de: "Gafadurahütte", hu: "Gafadura-menedékház", ro: "Cabana Gafadura", en: "Gafadura Hut" },
    description: {
      de: "Eine bewirtschaftete Alpenvereinshütte auf 1428 m Höhe, beliebt bei Wanderern.",
      hu: "Egy 1428 m magasságban fekvő, üzemeltetett alpesi menedékház, népszerű a túrázók körében.",
      ro: "O cabană montană administrată, situată la 1428 m altitudine, populară printar drumeți.",
      en: "A managed alpine hut at 1428m altitude, popular among hikers."
    },
    facts: {
      de: ["Eigentum des Alpenvereins", "Ehemaliges Jagdschloss", "Panoramablick auf das Rheintal"],
      hu: ["Az Alpesi Egyesület tulajdona", "Egykori vadászkastély", "Panoráma a Rajna-völgyre"],
      ro: ["Proprietate a Clubului Alpin", "Fost conac de vânătoare", "Panoramă asupra văii Rinului"],
      en: ["Owned by the Alpine Club", "Former hunting lodge", "Panoramic view of the Rhine Valley"]
    }, image: "/poi-images/li-poi-planken-gafadura.webp",
    descriptionAdvanced: {
      de: "Die Gafadurahütte ist eine alpine Schutzhütte des Liechtensteiner Alpenvereins (LAV) und liegt auf 1428 Metern Höhe oberhalb der Gemeinde Planken. Ursprünglich diente das Gebäude als fürstliches Jagdhaus, bevor es im Jahr 1968 für den Bergsport umgebaut und eingeweiht wurde. Die Hütte befindet sich an den Westhängen der Drei Schwestern, einem markanten Gebirgsmassiv an der Grenze zwischen Liechtenstein und Österreich. Wanderer erreichen die Hütte von Planken aus über einen gut ausgebauten Forstweg in etwa eineinhalb Stunden. Von der Terrasse bietet sich ein umfassender Blick über das Rheintal bis hin zu den Schweizer Alpen. Die Hütte ist ein wichtiger Stützpunkt für anspruchsvollere Touren zum Gipfel der Drei Schwestern oder entlang des Fürstensteigs. Sie bietet in der Sommersaison Bewirtschaftung sowie Übernachtungsmöglichkeiten in Matratzenlagern für Bergsteiger an.",
      hu: "A Gafadura-menedékház a Liechtensteini Alpesi Egyesület (LAV) hegyi szállása, amely 1428 méteres magasságban található Planken község felett. Az épület eredetileg hercegi vadászházként szolgált, mielőtt 1968-ban átalakították és megnyitották a hegymászók számára. A menedékház a Drei Schwestern (Három Nővér) hegymasszívum nyugati lejtőjén fekszik, amely Liechtenstein és Ausztria határán magasodik. A látogatók Plankenből egy jól kiépített erdészeti úton, körülbelül másfél órás sétával érhetik el a helyszínt. A teraszról lenyűgöző kilátás nyílik a Rajna-völgyre és a svájci Alpok távoli csúcsaira. A ház fontos bázis a Három Nővér csúcsára vagy a Fürstensteig útvonalra induló tapasztaltabb túrázók számára. A nyári szezonban üzemelő szállás matracos alvóhelyeket és helyi ételeket kínál a pihenni vágyóknak.",
      ro: "Cabana Gafadura este un refugiu montan administrat de Clubul Alpin din Liechtenstein (LAV), situat la o altitudine de 1428 de metri deasupra comunei Planken. Clădirea a servit inițial drept casă de vânătoare princiară, fiind transformată și inaugurată ca cabană montană în anul 1968. Refugiul este amplasat pe versanții vestici ai masivului Drei Schwestern, un grup muntos distinctiv la granița dintre Liechtenstein și Austria. Drumeții pot ajunge la cabană pornind din Planken pe un drum forestier bine întreținut, într-o ascensiune de aproximativ o oră și jumătate. De pe terasa cabanei se deschide o panoramă vastă asupra văii Rinului și a Alpilor Elvețieni. Cabana reprezintă un punct strategic pentru ascensiunile mai dificile către vârful Drei Schwestern sau pe traseul Fürstensteig. În sezonul estival, oferă servicii de masă și cazare în regim de refugiu pentru alpiniști.",
      en: "The Gafadura Hut is an Alpine mountain refuge operated by the Liechtenstein Alpine Club (LAV), located at an elevation of 1428 meters above the municipality of Planken. Originally used as a princely hunting lodge, the building was renovated and inaugurated for mountaineers in 1968. The hut is situated on the western slopes of the Drei Schwestern (Three Sisters) massif, a prominent mountain range on the border between Liechtenstein and Austria. Hikers can reach the hut from Planken via a well-maintained forest road in about 90 minutes. From its terrace, visitors enjoy a sweeping view over the Rhine Valley across to the Swiss Alps. The hut serves as an essential base for more challenging treks to the summit of the Three Sisters or along the famous Fürstensteig path. During the summer season, it provides catering and overnight accommodation in dormitory style for climbers.",
    },
    factsAdvanced: {
      de: ["Die Hütte liegt auf einer Höhe von 1428 Metern über dem Meer.", "Das Gebäude wurde im Jahr 1968 als Berghütte eröffnet.", "Die Gafadurahütte wird vom Liechtensteiner Alpenverein betrieben.", "Ursprünglich diente das Bauwerk als privates Jagdhaus der Fürsten.", "Die Hütte bietet Schlafplätze für insgesamt 42 Personen an.", "Der Aufstieg von Planken dauert zu Fuß etwa 1,5 Stunden."],
      hu: ["A menedékház 1428 méteres tengerszint feletti magasságban fekszik.", "Az épületet 1968-ban nyitották meg a hegyi turizmus számára.", "A szállást a Liechtensteini Alpesi Egyesület (LAV) üzemelteti.", "Eredetileg a liechtensteini hercegi család vadászháza volt.", "A menedékház összesen 42 fő részére kínál hálóhelyet.", "A gyalogos túra Plankenből körülbelül 1,5 órát vesz igénybe."],
      ro: ["Cabana se află la o altitudine de 1428 de metri.", "Inaugurarea oficială ca refugiu montan a avut loc în anul 1968.", "Este gestionată direct de Clubul Alpin din Liechtenstein.", "Clădirea a fost la origine o cabană de vânătoare a familiei princiare.", "Refugiul dispune de o capacitate totală de 42 de locuri de dormit.", "Traseul de urcare din Planken necesită aproximativ 90 de minute."],
      en: ["The hut is positioned at an altitude of 1428 meters.", "It was officially opened as a mountain refuge in 1968.", "The facility is managed by the Liechtenstein Alpine Club.", "The building was originally a hunting lodge for the Princely House.", "The hut provides dormitory accommodation for up to 42 guests.", "The hike up from Planken takes approximately 1.5 hours."],
    },
  },
  {
    id: "li-poi-mauren-birka",
    type: "landmark",
    parent: "LI-007",
    coords: [9.5450, 47.2160],
    name: { de: "Vogelparadies Birka", hu: "Birka madárparadicsom", ro: "Paradisul Păsărilor Birka", en: "Birka Bird Sanctuary" },
    description: {
      de: "Ein wunderschönes Naturschutzgebiet und Park für Vogelliebhaber in Mauren.",
      hu: "Gyönyörű természetvédelmi terület és park a madárbarátok számára Maurenben.",
      ro: "O rezervație naturală frumoasă și un parc pentru iubitorii de păsări în Mauren.",
      en: "A beautiful nature reserve and park for bird lovers in Mauren."
    },
    facts: {
      de: ["Seltene Vogelarten", "Naturlehrpfad", "Beliebtes Ausflugsziel"],
      hu: ["Ritka madárfajok", "Tanösvény", "Népszerű kirándulóhely"],
      ro: ["Specii rare de păsări", "Traseu educativ", "Destinație populară"],
      en: ["Rare bird species", "Nature trail", "Popular excursion destination"]
    }, image: "/poi-images/li-poi-mauren-birka.webp",
    descriptionAdvanced: {
      de: "Das Vogelparadies Birka ist ein bedeutendes Naturschutzgebiet und Freizeitareal in der Gemeinde Mauren, das sich dem Schutz einheimischer und exotischer Vogelarten widmet. Es wurde im Jahr 1971 vom Ornithologischen Verein Mauren gegründet und umfasst ein weitläufiges Gelände mit Weihern, Hecken und Waldstücken. Die Anlage dient als wichtiger Rückzugsort für bedrohte Vogelarten und bietet gleichzeitig Bildungsangebote für die Öffentlichkeit. Besucher können auf einem Naturlehrpfad Informationen über die lokale Flora und Fauna erhalten, während Kinder einen integrierten Spielplatz nutzen können. Ein zentrales Element ist das Vereinshaus, in dem regelmäßig Ausstellungen und Informationsveranstaltungen stattfinden. Das Areal leistet einen wesentlichen Beitrag zur Biodiversität im Liechtensteiner Unterland und ist ein beliebtes Ziel für Familien und Naturbeobachter. Die Pflege der Biotope erfolgt durch ehrenamtliche Arbeit und wird durch die Gemeinde unterstützt.",
      hu: "A Birka madárparadicsom egy jelentős természetvédelmi terület és szabadidős központ Mauren községben, amely a hazai és egzotikus madárfajok védelmére összpontosít. A területet 1971-ben alapította a Maureni Madártani Egyesület, és egy tágas, tavakkal, sövényekkel és erdős részekkel tagolt területet foglal magában. A létesítmény fontos menedékhely a veszélyeztetett madárfajok számára, miközben oktatási lehetőségeket is kínál a nyilvánosság számára. A látogatók egy tanösvényen keresztül ismerhetik meg a helyi növény- és állatvilágot, a gyermekeket pedig játszótér várja. Központi eleme az egyesületi ház, ahol rendszeresen tartanak kiállításokat és tájékoztató rendezvényeket. A terület jelentősen hozzájárul a liechtensteini Unterland biodiverzitásához, és kedvelt célpontja a családoknak és a természetkedvelőknek. A biotópok fenntartását önkéntes munkával és önkormányzati támogatással végzik.",
      ro: "Paradisul păsărilor Birka este o importantă rezervație naturală și zonă de agrement din comuna Mauren, dedicată protejării speciilor de păsări indigene și exotice. Rezervația a fost fondată în anul 1971 de către Societatea Ornitologică din Mauren și cuprinde un teren vast cu iazuri, garduri vii și porțiuni de pădure. Zona servește ca un refugiu esențial pentru speciile de păsări amenințate și oferă, în același timp, programe educaționale pentru publicul larg. Vizitatorii pot parcurge un traseu didactic pentru a afla informații despre flora și fauna locală, existând și un loc de joacă integrat pentru copii. Un element central este sediul asociației, unde sunt organizate periodic expoziții și evenimente informative. Aria contribuie semnificativ la menținerea biodiversității în regiunea Unterland din Liechtenstein, fiind o destinație populară pentru familii. Întreținerea biotopurilor se realizează prin muncă voluntară, cu sprijinul autorităților locale.",
      en: "The Birka Bird Sanctuary is a significant nature conservation area and recreational site in the municipality of Mauren, dedicated to the protection of native and exotic bird species. Founded in 1971 by the Mauren Ornithological Society, the site covers an extensive area featuring ponds, hedges, and woodland sections. The facility serves as a vital refuge for endangered bird species while providing educational opportunities for the general public. Visitors can explore a nature trail to learn about local flora and fauna, and an integrated playground is available for children. A central feature of the sanctuary is the society's clubhouse, which hosts regular exhibitions and informational events. The area makes a substantial contribution to biodiversity in Liechtenstein's Unterland region and is a popular destination for families and nature enthusiasts. The maintenance of the various biotopes is carried out through volunteer work with municipal support.",
    },
    factsAdvanced: {
      de: ["Das Vogelparadies Birka wurde im Jahr 1971 offiziell gegründet.", "Es wird vom Ornithologischen Verein Mauren betreut.", "Das Areal umfasst verschiedene Biotope wie Weiher und Hecken.", "Ein Naturlehrpfad informiert über die heimische Tierwelt.", "In der Anlage sind sowohl einheimische als auch exotische Vögel zu sehen.", "Das Projekt wird durch die Gemeinde Mauren finanziell unterstützt."],
      hu: ["A Birka madárparadicsomot 1971-ben alapították meg.", "A terület gondozását a Maureni Madártani Egyesület végzi.", "A terület különféle biotópokat, például tavakat és sövényeket foglal magában.", "Egy tanösvény nyújt tájékoztatást a helyi állatvilágról.", "A létesítményben hazai és egzotikus madárfajok egyaránt megtekinthetők.", "A projekt Mauren község önkormányzatának támogatásával működik."],
      ro: ["Rezervația Birka a fost înființată oficial în anul 1971.", "Administrarea este asigurată de Societatea Ornitologică din Mauren.", "Zona include biotopuri diverse, precum iazuri și garduri vii.", "Un traseu educativ oferă informații detaliate despre fauna locală.", "În rezervație pot fi observate atât păsări indigene, cât și exotice.", "Proiectul beneficiază de sprijin financiar din partea comunei Mauren."],
      en: ["The Birka Bird Sanctuary was officially established in 1971.", "It is managed by the Mauren Ornithological Society.", "The area features diverse biotopes including ponds and hedges.", "A nature trail provides information about local wildlife.", "The sanctuary displays both indigenous and exotic bird species.", "The project is financially supported by the municipality of Mauren."],
    },
  },
  {
    id: "li-poi-gamprin-grossabunt",
    type: "landmark",
    parent: "LI-011",
    coords: [9.5050, 47.2210],
    name: { de: "Grossabunt Freizeitsee", hu: "Grossabunt szabadidős tó", ro: "Lacul de agrement Grossabunt", en: "Grossabunt Leisure Lake" },
    description: {
      de: "Der einzige Badesee Liechtensteins mit ökologischer Wasseraufbereitung.",
      hu: "Liechtenstein egyetlen fürdőtava ökológiai víztisztítással.",
      ro: "Singurul lac pentru înot din Liechtenstein, cu epurare ecologică a apei.",
      en: "The only swimming lake in Liechtenstein with ecological water treatment."
    },
    facts: {
      de: ["Solarbeheizt", "Kein Chlor", "Sportanlagen vorhanden"],
      hu: ["Napenergiával fűtött", "Klórmentes", "Sportpályák a közelben"],
      ro: ["Încălzit solar", "Fără clor", "Facilități sportive disponibile"],
      en: ["Solar heated", "No chlorine", "Sports facilities available"]
    },
    descriptionAdvanced: {
      de: "Die Freizeitanlage Grossabunt in der Gemeinde Gamprin ist ein modernes Naherholungsgebiet, dessen zentrales Element ein künstlich angelegter Badesee ist. Das Projekt wurde ursprünglich in den 1990er Jahren konzipiert und im Jahr 2011 nach einer umfassenden Erweiterung und Neugestaltung wiedereröffnet. Der See erfüllt eine Doppelfunktion: Er dient als attraktiver Freizeitort für Schwimmer und gleichzeitig als ökologischer Wasserspeicher zur Kühlung industrieller Anlagen in der Umgebung. Die Wasserqualität wird durch natürliche Regenerationszonen und moderne Filtertechnik auf hohem Niveau gehalten. Das Areal umfasst rund 5000 Quadratmeter und bietet neben dem See auch Spielplätze, Grillstellen und Liegewiesen. Besonders hervorzuheben ist die architektonische Gestaltung der Funktionsgebäude, die sich harmonisch in die flache Rheinlandschaft einfügen. Die Anlage ist für die Öffentlichkeit frei zugänglich und gilt als Vorzeigeprojekt für die Verbindung von Ökologie, Technik und Freizeitnutzung.",
      hu: "A Gamprin községben található Grossabunt szabadidős központ egy modern pihenőövezet, amelynek központi eleme egy mesterségesen kialakított fürdőtó. A projektet eredetileg az 1990-es években tervezték, majd 2011-ben, egy átfogó bővítés és újratervezés után nyitották meg újra. A tó kettős funkciót tölt be: vonzó szabadidős helyszín az úszók számára, ugyanakkor ökológiai víztározóként is szolgál a környékbeli ipari létesítmények hűtéséhez. A vízminőséget természetes regenerációs zónák és modern szűrőtechnológia tartja magas szinten. A terület körülbelül 5000 négyzetmétert tesz ki, és a tavon kívül játszótereket, grillhelyeket és napozópázsitokat kínál. Külön említést érdemel a kiszolgáló épületek építészeti megoldása, amely harmonikusan illeszkedik a Rajna menti sík tájba. A létesítmény ingyenesen látogatható, és az ökológia, a technika és a szabadidő ötvözésének példaértékű projektje.",
      ro: "Complexul de agrement Grossabunt din comuna Gamprin este o zonă modernă de recreere, având ca element central un lac artificial amenajat pentru înot. Proiectul a fost conceput inițial în anii 1990 și redeschis în anul 2011 după o extindere și modernizare substanțială. Lacul îndeplinește o funcție dublă: servește ca loc atractiv pentru înotători și, în același timp, funcționează ca rezervor de apă ecologic pentru răcirea instalațiilor industriale din vecinătate. Calitatea apei este menținută la standarde ridicate prin zone de regenerare naturală și tehnologii moderne de filtrare. Întregul complex acoperă aproximativ 5000 de metri pătrați și include, pe lângă lac, locuri de joacă, spații pentru grătar și zone de plajă cu iarbă. Arhitectura clădirilor utilitare este remarcabilă, fiind integrată armonios în peisajul de câmpie al văii Rinului. Accesul în complex este gratuit pentru public, fiind considerat un proiect model pentru combinarea ecologiei, tehnologiei și utilității sociale.",
      en: "The Grossabunt Leisure Lake in the municipality of Gamprin is a modern local recreation area centered around a man-made swimming lake. Originally conceived in the 1990s, the project was reopened in 2011 following extensive expansion and redesign. The lake fulfills a dual role: it serves as an attractive leisure spot for swimmers and functions as an ecological water reservoir for cooling industrial facilities in the surrounding area. Water quality is maintained at a high standard through natural regeneration zones and advanced filtration technology. The entire area covers about 5000 square meters and offers playgrounds, barbecue spots, and sunbathing lawns in addition to the lake itself. The architectural design of the service buildings is particularly noteworthy, blending seamlessly into the flat landscape of the Rhine valley. The facility is freely accessible to the public and is regarded as a flagship project combining ecology, technology, and recreation.",
    },
    factsAdvanced: {
      de: ["Die Anlage wurde im Jahr 2011 nach einer Neugestaltung wiedereröffnet.", "Das gesamte Areal umfasst eine Fläche von zirka 5000 Quadratmetern.", "Der See dient auch als Kühlwasserspeicher für die lokale Industrie.", "Die Wasseraufbereitung erfolgt ohne chemische Zusätze.", "Grossabunt liegt in der Gemeinde Gamprin im Liechtensteiner Unterland.", "Der Eintritt zur Freizeitanlage ist für alle Besucher kostenlos."],
      hu: ["A létesítményt 2004-ben tervezett átalakítás után 2011-ben nyitották meg.", "A teljes pihenőövezet területe körülbelül 5000 négyzetméter.", "A tó hűtővíztározóként is funkcionál a helyi ipar számára.", "A víz tisztítása kémiai adalékanyagok nélkül történik.", "Grossabunt Gamprin községben, Liechtenstein északi részén található.", "A szabadidős központ látogatása mindenki számára ingyenes."],
      ro: ["Complexul a fost redeschis în forma sa actuală în anul 2011.", "Întreaga zonă de agrement ocupă o suprafață de circa 5000 mp.", "Lacul este utilizat și ca rezervor de apă pentru răcire industrială.", "Tratarea apei se realizează prin metode biologice, fără chimicale.", "Grossabunt este situat în comuna Gamprin din regiunea Unterland.", "Accesul în incinta complexului este gratuit pentru toți vizitatorii."],
      en: ["The facility was reopened in 2011 following a major redesign.", "The entire recreation area covers a surface of about 5000 square meters.", "The lake also serves as a cooling water reservoir for local industry.", "Water treatment is performed using natural biological processes.", "Grossabunt is located in the municipality of Gamprin.", "Admission to the leisure area is free of charge for all visitors."],
    },
    image: "/poi-images/li-poi-gamprin-grossabunt.webp",
  }
];

export const liechtensteinAllPoi: POI[] = [...liechtensteinRegions,
  ...liechtensteinCities,
  ...liechtensteinCulture,
  ...liechtensteinNature, ...poiExtraLiechtensteinCities, ...poiExtraLiechtensteinHistory, ...poiExtraLiechtensteinOther];

