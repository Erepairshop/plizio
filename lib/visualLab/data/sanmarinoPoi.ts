// @ts-nocheck
import type { POI } from "../data/poi";
import { poiExtraSanmarinoCities } from "./poiExtraSanmarinoCities";
import { sanmarinoExtraHistory } from "./poiExtraSanmarinoHistory";
import { sanmarinoLandscapes } from "./poiExtraSanmarinoOther";

export const sanmarinoCountry: POI = {
  id: "country-sanmarino",
  type: "country",
  parent: "europe",
  coords: [12.4578, 43.9424],
  name: {
    de: "San Marino",
    hu: "San Marino",
    ro: "San Marino",
    en: "San Marino"
  },
  description: {
    de: "San Marino ist die älteste bestehende Republik der Welt und ein Zwergstaat, der vollständig von Italien umgeben ist.",
    hu: "San Marino a világ legrégebbi máig fennálló köztársasága, és egy törpeállam, amelyet teljesen körülvesz Olaszország.",
    ro: "San Marino este cea mai veche republică din lume și un microstat complet înconjurat de Italia.",
    en: "San Marino is the world's oldest surviving republic and a microstate entirely surrounded by Italy."
  },
  descriptionAdvanced: {
      de: "Der Zwergstaat San Marino, offiziell die Republik San Marino, gilt als die älteste bestehende Republik der Welt und ist vollständig von Italien umschlossen. Die Geschichte des Landes reicht bis ins Jahr 301 zurück, als der Legende nach der heilige Marinus auf dem Monte Titano eine christliche Gemeinschaft gründete, um der Christenverfolgung unter Kaiser Diokletian zu entgehen. Geprägt wird das Landschaftsbild durch den zerklüfteten Kalksteinrücken des Monte Titano, dessen drei Gipfel von den markanten Festungstürmen Guaita, Cesta und Montale gekrönt werden. Trotz seiner geringen Größe hat San Marino über Jahrhunderte hinweg seine Souveränität bewahrt, selbst während der napoleonischen Kriege und der italienischen Einigungsbewegung. Die politische Struktur ist einzigartig: Alle sechs Monate werden zwei Capitani Reggenti als Staatsoberhäupter gewählt, eine Tradition, die bis ins Jahr 1243 zurückreicht und Machtmissbrauch verhindern soll. Wirtschaftlich stützt sich das Land heute vor allem auf den Tourismus, den Finanzsektor und die Herstellung von Briefmarken und Münzen, während es zwar kein EU-Mitglied ist, aber dennoch den Euro als offizielle Währung verwendet. Die Altstadt von San Marino und der Monte Titano gehören seit 2008 zum UNESCO-Welterbe und ziehen jährlich Millionen von Besuchern an, die die mittelalterliche Architektur und den Panoramablick bis zur Adria bewundern.",
      hu: "San Marino, a világ legrégebbi köztársasága, egy különleges enklávé Olaszország szívében, az Appenninek északkeleti oldalán. Alapítása 301. szeptember 3-ára tehető, amikor a hagyomány szerint egy Marinus nevű kőfaragó a Titano-hegyen keresett menedéket a vallásüldözés elől, megvetve ezzel egy független közösség alapjait. Az ország jelképe a Titano-hegy három csúcsa, amelyeken a Guaita, a Cesta és a Montale erődök magasodnak, vigyázva a középkori hangulatú főváros biztonságát. San Marino történelme során többször is tanúbizonyságot tett szabadságszeretetéről: Napóleonnak nem fogadtak el területbővítési ajánlatot, Giuseppe Garibaldinak pedig menedéket nyújtottak az olasz egységtörekvések idején. Külpolitikai státusza rendhagyó, hiszen nem tagja az Európai Uniónak, mégis szoros gazdasági és vámuniós kapcsolatban áll szomszédjával. A san marinói alkotmány, amely az 1600-ban elfogadott törvénykönyvön alapul, a világ egyik legrégebbi írott alaptörvénye. A helyi gazdaságban a turizmus mellett jelentős szerepet játszik a minőségi kézműipar, a bortermelés és a gyűjtők körében világszerte keresett postabélyegek és emlékérmék kibocsátása. Az ország kilenc közigazgatási egységre, úgynevezett castellire oszlik, melyek közül a legnépesebb Dogana, bár a politikai központ továbbra is a hegytetőn fekvő San Marino város.",
      ro: "Republica San Marino reprezintă un caz fascinant de supraviețuire politică, fiind o enclavă situată pe versantul estic al Munților Apenini, înconjurată în totalitate de teritoriul italian. Fondată conform tradiției în anul 301 d.Hr. de către Sfântul Marin, o figură legendară venită din insula Rab, comunitatea a reușit să își păstreze autonomia de-a lungul secolelor, în ciuda numeroaselor conflicte europene. Centrul istoric al capitalei și Muntele Titano sunt incluse în patrimoniul mondial UNESCO, reflectând importanța acestui stat ca model de democrație timpurie. Cele trei turnuri fortificate care domină orizontul sunt simboluri ale rezistenței și independenței, fiind reprezentate inclusiv pe drapelul național. Sistemul de guvernământ este unul dintre cele mai vechi din lume, bazat pe Statutele din 1600, care prevăd alegerea semestrială a doi Căpitani Regenți, asigurând astfel un echilibru al puterii și o continuitate democratică rară. Deși suprafața sa este de doar aproximativ 61 de kilometri pătrați, San Marino dispune de o economie diversificată, unde sectorul serviciilor financiare și cel turistic coexistă cu tradiții agricole bine înrădăcinate, precum producția de ulei de măsline și vinuri locale. Statul este împărțit administrativ în nouă districte, numite Castelli, fiecare având propria identitate istorică și culturală, iar neutralitatea sa istorică a servit drept refugiu pentru mii de oameni în timpul unificării Italiei.",
      en: "San Marino, officially the Republic of San Marino, stands as a remarkable testament to democratic resilience, being the world's oldest surviving sovereign state and constitutional republic. Nestled on the northeastern slopes of the Apennine Mountains, this landlocked microstate is completely surrounded by Italy, yet it has maintained a distinct identity since its legendary founding in 301 AD by Saint Marinus. The core of the country is Monte Titano, a limestone crag that reaches an elevation of 739 meters and is famous for the Three Towers—Guaita, Cesta, and Montale—which have protected the capital for centuries. San Marino's political system is exceptionally unique, featuring a dual-head of state arrangement where two Captains Regent are elected every six months by the Grand and General Council, a practice designed to prevent the accumulation of power. Its legal framework is rooted in the Statutes of 1600, often cited as the oldest governing documents still in effect. Despite not being a member of the European Union, San Marino uses the Euro and participates in the Schengen Area's open borders through its relationship with Italy. The economy thrives on tourism, banking, and the export of ceramics, wine, and highly collectible postage stamps, while the nation remains a symbol of peace and neutrality, having provided refuge to thousands during the turbulent years of the Italian Risorgimento. Its UNESCO-listed historical center preserves a medieval street plan and architectural integrity that reflects its long-standing independence.",
    },
  facts: {
    de: [
      "San Marino ist die drittkleinste Nation Europas.",
      "Die Republik wurde der Legende nach im Jahr 301 gegründet.",
      "Das Land hat mehr Autos als Einwohner.",
      "Die Amtssprache ist Italienisch.",
      "Der Monte Titano und das historische Zentrum gehören zum UNESCO-Welterbe."
    ],
    hu: [
      "San Marino Európa harmadik legkisebb országa.",
      "A köztársaságot a legenda szerint 301-ben alapították.",
      "Az országnak több autója van, mint lakosa.",
      "A hivatalos nyelv az olasz.",
      "A Titano-hegy és a történelmi központ az UNESCO világörökség része."
    ],
    ro: [
      "San Marino este a treia cea mai mică națiune din Europa.",
      "Conform legendei, republica a fost fondată în anul 301.",
      "Țara are mai multe mașini decât locuitori.",
      "Limba oficială este italiana.",
      "Muntele Titano și centrul istoric fac parte din Patrimoniul Mondial UNESCO."
    ],
    en: [
      "San Marino is the third smallest nation in Europe.",
      "According to legend, the republic was founded in 301 AD.",
      "The country has more cars than residents.",
      "The official language is Italian.",
      "Mount Titano and the historic center are a UNESCO World Heritage site."
    ]
  },
  factsAdvanced: {
      de: ["Die Republik San Marino ist heute eine parlamentarische Demokratie.", "Sie besitzt keine eigene Armee im traditionellen Sinne.", "Das Land verwendet den Euro, ist aber kein Mitglied der EU.", "Die Fläche beträgt nur etwa 61 Quadratkilometer.", "San Marino hat eine der niedrigsten Arbeitslosenquoten weltweit.", "Der Regierungssitz wird von zwei Staatsoberhäuptern (Capitani Reggenti) geleitet."],
      hu: ["Az ország teljes területe mindössze 61,2 négyzetkilométert tesz ki.", "A legmagasabb pont a Titano-hegy, amely 739 méterrel magasodik a tenger fölé.", "A köztársaságot a hagyomány szerint 301. szeptember 3-án alapították.", "San Marino kilenc önkormányzati egységre, úgynevezett castellire oszlik.", "Lakossága körülbelül 34 000 fő, a népsűrűség pedig igen magas.", "A kormányzókapitányokat évente kétszer, áprilisban és októberben választják."],
      ro: ["Suprafața totală a micii republici este de aproximativ 61,2 kilometri pătrați.", "Cel mai înalt punct geografic este Muntele Titano, având 739 de metri.", "Statul a fost întemeiat oficial la data de 3 septembrie 301 d.Hr.", "Teritoriul este divizat în 9 unități administrative numite Castelli.", "Populația actuală este estimată la aproximativ 34.000 de locuitori.", "Cei doi Căpitani Regenți sunt aleși pentru un mandat de exact șase luni."],
      en: ["The total land area of the republic is approximately 61.2 square kilometers.", "Monte Titano marks the highest elevation in the country at 739 meters.", "San Marino was traditionally founded on September 3, 301 AD.", "The country is organized into nine municipalities known as Castelli.", "The resident population is roughly 34,000 people as of recent estimates.", "Two Captains Regent serve concurrently as heads of state for six-month terms."],
    },
  image: "/geo-images/sanmarino/country-sanmarino.webp"
};

export const sanmarinoRegions: POI[] = [
  {
    id: "SM-001",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4828, 43.9686],
    name: { de: "Serravalle", hu: "Serravalle", ro: "Serravalle", en: "Serravalle" },
    description: {
      de: "Die nördlichste und bevölkerungsreichste Gemeinde von San Marino.",
      hu: "San Marino legészakibb és legnépesebb községe.",
      ro: "Cea mai nordică și mai populată comună din San Marino.",
      en: "The northernmost and most populous municipality of San Marino."
    },
    descriptionAdvanced: {
      de: "Serravalle ist die größte und wirtschaftlich bedeutendste Gemeinde (Castello) der Republik San Marino. Sie liegt im äußersten Norden des Zwergstaates und grenzt direkt an die italienische Region Emilia-Romagna. Die Gemeinde hat sich im Laufe des 20. Jahrhunderts vom landwirtschaftlichen Hinterland zum industriellen und kommerziellen Motor der Republik entwickelt. Ein Großteil der Bevölkerung konzentriert sich auf die bevölkerungsreichen Ortsteile wie Dogana, der als wichtigster Grenzübergang zu Italien dient. Historisch gesehen wurde Serravalle im Jahr 1463 während der letzten territorialen Erweiterung von San Marino nach dem Sieg über die Malatesta von Rimini in die Republik eingegliedert. Das historische Zentrum von Serravalle bewahrt mit seiner mittelalterlichen Burg (Castello) und den Festungsanlagen noch immer Spuren dieser strategischen Bedeutung. Geografisch wird das Gebiet durch sanfte Hügel geprägt, die zum Fluss Ausa abfallen. In der modernen Ära hat sich Serravalle auch als das sportliche Zentrum von San Marino etabliert. Hier befindet sich das San Marino Stadium, das Nationalstadion der Republik, sowie das Multieventi Sport Domus, in dem zahlreiche internationale Wettkämpfe stattfinden. Die Wirtschaft der Gemeinde ist durch eine hohe Dichte an Industriebetrieben, Dienstleistungsunternehmen und großen Einkaufszentren geprägt, die viele Pendler aus der Umgebung anziehen. Trotz der starken Industrialisierung gibt es Bemühungen, Grünflächen wie den Parco Ausa zu erhalten, der als grüne Lunge für die dicht besiedelten Gebiete dient. Kulturell ist Serravalle ein Ort der Kontraste, wo moderne Architektur und geschäftiges Treiben auf alte Traditionen treffen, die besonders bei den lokalen Patronatsfesten gepflegt werden.",
      hu: "Serravalle San Marino legnépesebb és legészakibb községe (castello), amely a köztársaság gazdasági motorjaként funkcionál. A település közvetlenül az olaszországi Emilia-Romagna régióval határos, és itt található Dogana, az ország legforgalmasabb határátkelője és kapuja. A község területe mintegy 10,5 négyzetkilométer, de itt él a köztársaság lakosságának több mint egyharmada. Történelmileg Serravalle 1463-ban vált San Marino részévé, amikor II. Piusz pápa a Malatesta család elleni háború után a köztársaságnak adományozta a területet. A középkori várfalak és a kastély maradványai ma is emlékeztetnek a hely stratégiai fontosságára a rimini uraival vívott harcok idején. Gazdaságilag a község kiemelkedő: számos gyár, logisztikai központ és bevásárlóközpont települt ide az elmúlt évtizedekben, kihasználva a kedvező adózási feltételeket és a kiváló közúti összeköttetést Rimini városával. Serravalle emellett San Marino sportéletének központja is. Itt található a nemzeti stadion, a San Marino Stadium, amely a válogatott mérkőzéseinek és az országos atlétikai versenyeknek ad otthont. A település arculatát a modern lakónegyedek és az ipari zónák határozzák meg, de a dombvidéki jelleg megmaradt, szép kilátást nyújtva az Adriai-tenger felé. A közösségi élet fontos színhelye a Parco Ausa, amely szabadidős tevékenységek széles skáláját kínálja a helyieknek. A község oktatási szempontból is jelentős, több középiskola és szakképző intézmény működik itt. Serravalle lakói büszkék önálló identitásukra, miközben ők képviselik a köztársaság legmodernebb és legdinamikusabb arcát.",
      ro: "Serravalle este cel mai populat castello (municipiu) din Republica San Marino, situat la extremitatea nordică a țării, la granița cu provincia italiană Rimini. Această localitate reprezintă centrul economic și industrial al micii republici, având o structură urbană mult mai densă și mai modernă decât restul țării. Istoria orașului Serravalle este marcată de anul 1463, când a fost anexat republicii în urma conflictului cu familia Malatesta, fiind ultimul mare câștig teritorial al San Marino. Localitatea este împărțită în mai multe fracțiuni, cea mai importantă fiind Dogana, care acționează ca poartă principală de intrare în țară și sediu pentru numeroase instituții vamale și comerciale. Din punct de vedere geografic, teritoriul este colinar, fiind străbătut de valea râului Ausa, care oferă terenuri fertile pentru mica producție agricolă ce încă subzistă la periferie. Serravalle găzduiește cele mai importante facilități sportive ale țării, inclusiv Stadionul Național și complexul olimpic, fiind locul unde se desfășoară majoritatea evenimentelor internaționale de amploare. Economia locală este diversificată, incluzând fabrici de mobilă, ceramică și electronice, precum și o rețea vastă de retail care atrage vizitatori din întreaga regiune a Italiei. În ciuda caracterului său predominant urban, Serravalle a reușit să integreze spații verzi generoase, precum Parcul Ausa, care facilitează recreerea în aer liber. Arhitectura variază de la fortificațiile medievale bine conservate în nucleul istoric, până la sediile de bănci și complexe de apartamente de ultimă generație. Comunitatea locală este foarte activă, organizând numeroase evenimente culturale și tradiționale care subliniază spiritul de libertate și independență specific sammarinezilor.",
      en: "Serravalle is the largest and most populous municipality (castello) of the Republic of San Marino. Located at the northernmost point of the country, it serves as the primary gateway for visitors coming from the Italian city of Rimini. The parish is strategically positioned along the main highway connecting the coast to the historic capital on Mount Titano. Historically, Serravalle was an independent fiefdom of the Malatesta family until 1463, when it was ceded to San Marino by Papal decree, marking the last significant expansion of the republic's borders. The name itself, which translates to 'valley closer,' reflects its geographical position at the entrance of the Ausa Valley. Over the 20th century, Serravalle transformed into the industrial heart of the nation, hosting a wide array of manufacturing sectors, from high-tech electronics to traditional ceramics. The district of Dogana is the busiest commercial hub, filled with retail outlets and corporate offices. Serravalle is also the undisputed capital of Sammarinese sports; it is home to the San Marino Stadium, the Olympic Swimming Pool, and several indoor arenas. The urban landscape is characterized by a blend of functional industrial zones and expanding residential areas, but it still maintains pockets of greenery and historical sites, such as the ancient fortress towers. The local government has invested heavily in infrastructure, making Serravalle the best-connected part of the country. Despite its modern outlook, the inhabitants of Serravalle maintain a strong connection to their medieval roots, celebrating local festivals and preserving the historical integrity of the old town center.",
    },
    facts: {
      de: ["Größte Gemeinde des Landes.", "Wichtiges Industriezentrum.", "Beherbergt das Dorf Dogana."],
      hu: ["Az ország legnagyobb községe.", "Fontos ipari központ.", "Itt található Dogana faluja."],
      ro: ["Cea mai mare comună a țării.", "Important centru industrial.", "Găzduiește satul Dogana."],
      en: ["Largest municipality in the country.", "Important industrial center.", "Includes the village of Dogana."]
    },
    factsAdvanced: {
      de: ["Serravalle wurde im Jahr 1463 offiziell Teil der Republik San Marino.", "Mit über 11.000 Einwohnern ist es die bevölkerungsreichste Gemeinde des Landes.", "Das Castello umfasst eine Fläche von 10,53 Quadratkilometern.", "Der Ortsteil Dogana ist mit rund 7.000 Einwohnern der größte der Republik.", "Das San Marino Stadium in Serravalle bietet Platz für 6.664 Zuschauer.", "Serravalle grenzt an die italienischen Gemeinden Rimini, Coriano und Verucchio.", "Die Burg von Serravalle wurde bereits im Jahr 962 in historischen Dokumenten erwähnt.", "In der Gemeinde befindet sich das Multieventi Sport Domus, ein bedeutendes Sportzentrum."],
      hu: ["Serravalle San Marino legnépesebb castelloja, lakossága meghaladja a 11 000 főt.", "A község területe 10,53 km², ami San Marino területének közel 17%-a.", "A település 1463 óta tartozik a köztársasághoz.", "Itt található az ország nemzeti stadionja, a San Marino Stadium.", "A Dogana nevű városrész San Marino legfontosabb kereskedelmi és vámközpontja.", "A község címere egy vörös tornyot ábrázol, amely a védelmet szimbolizálja.", "Serravalle tengerszint feletti magassága 148 méter, ami az egyik legalacsonyabb az országban.", "A településen keresztül folyik az Ausa folyó, amely az Adriába torkollik."],
      ro: ["Populația orașului Serravalle este de aproximativ 11.000 de locuitori.", "Suprafața administrativă a castello-ului este de 10,53 km².", "Altitudinea medie a localității este de 148 de metri deasupra nivelului mării.", "Data de anexare la San Marino este 1463, sub pontificatul lui Pius al II-lea.", "Stadionul Național din Serravalle găzduiește meciurile echipei de fotbal a San Marino.", "Dogana, cea mai mare subdiviziune, are codul poștal SM-47891.", "Castelul medieval a fost deținut anterior de nobilii Malatesta din Rimini.", "Economia locală generează peste 40% din cifra de afaceri industrială a țării."],
      en: ["Serravalle is the most populous municipality in San Marino with over 11,000 residents.", "The municipality covers an area of 10.53 square kilometers.", "It was incorporated into the Republic of San Marino in 1463.", "The district of Dogana serves as the primary border crossing into Italy.", "The San Marino Stadium is the venue for the national football team.", "Serravalle is located at an average altitude of 148 meters above sea level.", "The local coat of arms features a red defensive tower on a blue and white shield.", "The Multieventi Sport Domus hosts international basketball and volleyball events."],
    },
  },
  {
    id: "SM-002",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4683, 43.9486],
    name: { de: "Domagnano", hu: "Domagnano", ro: "Domagnano", en: "Domagnano" },
    description: {
      de: "Eine Gemeinde im Osten San Marinos, bekannt für ihre landwirtschaftliche Bedeutung.",
      hu: "Község San Marino keleti részén, mezőgazdasági jelentőségéről ismert.",
      ro: "O comună în estul San Marino, cunoscută pentru importanța sa agricolă.",
      en: "A municipality in eastern San Marino, known for its agricultural importance."
    },
    descriptionAdvanced: {
      de: "Domagnano ist eine der neun Gemeinden (Castelli) der Republik San Marino und liegt strategisch günstig auf den Hügeln zwischen der Hauptstadt und der Grenze zu Italien. Das Gebiet ist seit der Antike besiedelt, was durch bedeutende archäologische Funde wie den berühmten 'Schatz von Domagnano' belegt wird. Dieser gotische Goldschmuck aus dem 5. Jahrhundert unterstreicht die historische Bedeutung der Region als Siedlungsplatz in der Völkerwanderungszeit. Geografisch erstreckt sich die Gemeinde über eine hügelige Landschaft, die weite Ausblicke auf das Meer und die umliegenden Berge bietet. Der Hauptort liegt am Fuße des Berges Montelupo, auf dessen Gipfel einst ein befestigter Turm stand, der der Beobachtung und Verteidigung diente. Domagnano hat sich in den letzten Jahrzehnten von einer rein ländlichen Gemeinde zu einem beliebten Wohngebiet entwickelt, das für seine hohe Lebensqualität und die Nähe zu den wirtschaftlichen Zentren der Republik geschätzt wird. Die Architektur ist eine Mischung aus traditionellen Steinhäusern und modernen Einfamilienhäusern, die sich harmonisch in die Landschaft einfügen. Die Kirche San Michele Arcangelo ist das religiöse Zentrum der Gemeinde und spiegelt die tiefe Verwurzelung der lokalen Bevölkerung im katholischen Glauben wider. Wirtschaftlich dominiert der Dienstleistungssektor und das Kleingewerbe, während die Landwirtschaft in den Randgebieten noch immer eine Rolle für den Eigenbedarf und die lokale Weinproduktion spielt. Die Gemeinde ist auch für ihre aktiven Vereine und Sportgemeinschaften bekannt, die das soziale Leben prägen. Trotz der modernen Entwicklung hat Domagnano seinen dörflichen Charme bewahrt, was durch die Pflege der historischen Plätze und die Erhaltung der natürlichen Wanderwege in der Umgebung unterstrichen wird.",
      hu: "Domagnano castello San Marino középső részén helyezkedik el, és a köztársaság egyik legrégebbi lakott területe. A község neve valószínűleg a latin 'Domenianus' névből származik, ami egykori római birtokokra utal. A település történelmi hírnevét leginkább az 1892-ben itt megtalált 'domagnanói kincs' alapozta meg. Ez az 5. századi gót ékszerlelet, amely egy előkelő hölgy sírjából került elő, ma a világ különböző nagy múzeumaiban látható, és a népvándorlás kori művészet egyik legfontosabb emléke. A község területe mintegy 6,6 négyzetkilométer, domborzatát lankás dombok és termékeny völgyek jellemzik. Központi része a Montelupo-hegy lábánál fekszik, amely stratégiai elhelyezkedése miatt a középkorban fontos megfigyelőpont volt a Rimini felől érkező támadások ellen. Domagnano ma a köztársaság egyik legkeresettebb lakóövezete, köszönhetően békés környezetének és a fővárostól való csekély távolságának. A község központja a Piazza Filippo da Sterpeto, ahol a helyi közélet zajlik. Az építészeti örökség részét képezi a Szent Mihály arkangyalnak szentelt templom, amely modern formájában is őrzi a hely szellemiségét. A helyi gazdaságban a kisvállalkozások és a szolgáltatások mellett a mezőgazdaság, különösen a szőlő- és olajbogyó-termesztés is jelen van. Domagnano büszke sporthagyományaira, labdarúgócsapata, az FC Domagnano az egyik legsikeresebb a sammarinesi bajnokságban. A község lakói nagy gondot fordítanak a hagyományok ápolására, amit a rendszeresen megrendezett kulturális események és a közösségi ünnepek is bizonyítanak.",
      ro: "Domagnano este un castello pitoresc din San Marino, situat pe un teren deluros care oferă una dintre cele mai frumoase panorame către Muntele Titano și coasta Adriaticii. Această parohie are o istorie extrem de bogată, fiind locuită încă din epoca romană. Faima sa internațională în cercurile arheologice provine de la 'Tezaurul de la Domagnano', un set spectaculos de bijuterii din aur și pietre prețioase aparținând epocii ostrogote, descoperit aici la sfârșitul secolului al XIX-lea. Astăzi, bijuteriile sunt dispersate în instituții de prestigiu, precum British Museum, reflectând importanța zonei în antichitatea târzie. Geografic, Domagnano se întinde pe o suprafață de 6,6 km², fiind dominat de dealul Montelupo, care a servit drept punct strategic de observație militară în perioada medievală. În perioada modernă, castello-ul s-a transformat într-o zonă rezidențială de elită, preferată pentru liniștea sa și calitatea aerului. Centrul localității a fost modernizat, păstrând totodată elemente din arhitectura tradițională din piatră. Biserica San Michele Arcangelo, cu turnul său clopotniță distinctiv, este un punct central de referință. Economia este bazată pe comerț local și servicii, dar tradiția agricolă rămâne vizibilă prin podgoriile care punctează peisajul rural. Domagnano este, de asemenea, cunoscut pentru viața sa socială vibrantă, având unul dintre cele mai active centre de tineret din republică. Infrastructura este bine dezvoltată, parohia fiind traversată de principala arteră rutieră a țării, facilitând accesul rapid către capitală și către Italia. Comunitatea locală păstrează vii tradițiile religioase și culinare, organizând festivaluri care celebrează produsele pământului și identitatea sammarineză.",
      en: "The municipality of Domagnano, one of the nine castelli of San Marino, occupies a central position in the republic's landscape. Its history is deeply rooted in antiquity, as evidenced by its Latin-derived name and significant archaeological findings. The most famous of these is the Treasure of Domagnano, a collection of 5th-century Ostrogothic jewelry found in 1892, which highlights the area's importance during the Migration Period. The landscape is dominated by rolling hills and small valleys, with the residential center nestled at the base of Mount Montelupo. This hill was historically crowned by a watchtower that provided early warnings of approaching forces from the Romagna plains. In recent decades, Domagnano has evolved from a small farming village into a highly desirable residential area, attracting families due to its peaceful atmosphere and modern amenities. The architectural character of the parish is a blend of post-war residential development and restored historic stone structures. The Church of Saint Michael the Archangel stands as a community landmark, rebuilt in the 20th century but maintaining a traditional spiritual atmosphere. The economy of the parish is largely supported by small-scale commerce and professional services, though winemaking and olive cultivation remain important cultural practices in the rural outskirts. Domagnano is also home to a successful local sports culture, particularly in football and cycling. The parish council (Giunta di Castello) actively promotes community engagement through cultural exhibitions and seasonal fairs. With its strategic location along the highway between the capital and the border, Domagnano offers a perfect balance between rural charm and urban accessibility.",
    },
    facts: {
      de: ["Berühmt für den Schatzfund von Domagnano.", "Bietet weite Ausblicke auf die Adria.", "Sitz der Burg Montelupo."],
      hu: ["Híres a domagnanói kincsleletről.", "Tágas kilátást nyújt az Adriai-tengerre.", "Itt volt Montelupo vára."],
      ro: ["Slăvită pentru descoperirea comorii din Domagnano.", "Oferă vederi largi spre Marea Adriatică.", "Sediul castelului Montelupo."],
      en: ["Famous for the Domagnano Treasure find.", "Offers wide views of the Adriatic Sea.", "Seat of the Montelupo castle."]
    },
    factsAdvanced: {
      de: ["Domagnano hat eine Fläche von 6,62 Quadratkilometern.", "Die Gemeinde liegt auf einer Höhe von 357 Metern über dem Meeresspiegel.", "Der 'Schatz von Domagnano' ist ein weltberühmter Fund gotischen Goldschmucks aus dem 5. Jahrhundert.", "Das Castello hat etwa 3.500 Einwohner.", "Domagnano grenzt an die italienische Gemeinde Coriano in der Provinz Rimini.", "Die Kirche San Michele Arcangelo wurde in ihrer heutigen Form im 20. Jahrhundert fertiggestellt.", "Der Berg Montelupo war ein strategischer Beobachtungspunkt gegen die Malatesta.", "Die Gemeinde ist in fünf Ortsteile (Curazie) unterteilt, darunter Cailungo und Fiorina."],
      hu: ["Domagnano területe 6,62 km², lakossága körülbelül 3500 fő.", "A 'domagnanói kincs' jelenleg a British Museum és a Louvre gyűjteményében is megtalálható.", "A község címere egy fehér farkast és egy hegyet ábrázol, utalva a Montelupo-hegyre.", "A település 357 méter magasan fekszik a tengerszint felett.", "Domagnano labdarúgócsapata nyolcszor nyerte meg a sammarinesi bajnokságot.", "A községben találták meg San Marino legfontosabb népvándorlás kori leleteit.", "A településen keresztül halad az országot átszelő főútvonal.", "A Montelupo név jelentése 'Farkas-hegy', amely a környék régi vadvilágára utal."],
      ro: ["Populația castello-ului Domagnano este de circa 3.500 de locuitori.", "Suprafața totală a municipiului este de 6,62 km².", "Tezaurul descoperit aici în 1892 conține piese de aur încrustate cu almandine.", "Localitatea se află la o altitudine de 357 de metri față de nivelul mării.", "Domagnano se învecinează cu castelele Serravalle, Borgo Maggiore și Faetano.", "Biserica parohială este dedicată Sfântului Arhanghel Mihail.", "Castello-ul include curaziile: Cailungo, Fiorina, Piandivello, Spaccio Giannoni și Torraccia.", "FC Domagnano a fost fondat în 1966 și este unul dintre cele mai vechi cluburi din țară."],
      en: ["Domagnano covers a total area of 6.62 square kilometers in central San Marino.", "The municipality is home to approximately 3,500 residents.", "The famous Treasure of Domagnano is considered a masterpiece of Ostrogothic art.", "The highest point in the parish is Mount Montelupo at 357 meters elevation.", "Domagnano was first mentioned in historical records in the year 1300.", "The municipal coat of arms displays a white wolf in front of a green hill.", "The parish serves as a major residential suburb for the capital city.", "Local agriculture still produces high-quality Sangiovese wine grapes."],
    }, image: "/poi-images/SM-002.webp"},
  {
    id: "SM-003",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.498, 43.928],
    name: { de: "Faetano", hu: "Faetano", ro: "Faetano", en: "Faetano" },
    description: {
      de: "Eine ruhige Gemeinde an der östlichen Grenze, geprägt von Natur und Landwirtschaft.",
      hu: "Csendes község a keleti határon, természet és mezőgazdaság jellemzi.",
      ro: "O comună liniștită la granița de est, caracterizată de natură și agricultură.",
      en: "A quiet municipality on the eastern border, characterized by nature and agriculture."
    },
    descriptionAdvanced: {
      de: "Faetano ist eine der ruhigsten und ländlichsten Gemeinden (Castello) der Republik San Marino. Sie liegt im Osten des Landes und grenzt direkt an die italienischen Provinzen Rimini und Pesaro-Urbino. Die Geschichte von Faetano ist besonders bedeutsam, da es neben Serravalle, Montegiardino und Fiorentino eines der vier Gebiete war, die im Jahr 1463 nach dem Krieg gegen die Malatesta zur Republik San Marino stießen. Dies war die letzte große territoriale Erweiterung der Republik, wodurch Faetano zu einem integralen Bestandteil der Unabhängigkeit San Marinos wurde. Geografisch wird die Gemeinde durch eine hügelige Landschaft geprägt, die vom Fluss Marano durchflossen wird. Ein markantes Merkmal ist der Lago di Faetano, ein künstlich angelegter kleiner See, der heute ein beliebtes Ziel für Sportfischer und Naturliebhaber ist. Die Architektur des Ortes ist sehr traditionell und wird von der Kirche San Paolo Apostolo dominiert, die Ende des 19. Jahrhunderts im neoklassizistischen Stil erbaut wurde. Faetano hat sich im Vergleich zu den nördlichen Gemeinden seinen ursprünglichen Charakter bewahrt, wobei die Landwirtschaft und die Viehzucht noch immer eine sichtbare Rolle spielen. In den letzten Jahren haben sich jedoch auch einige mittlere Industriebetriebe angesiedelt, die zur wirtschaftlichen Diversifizierung beitragen. Die Gemeinde ist bekannt für ihre enge soziale Gemeinschaft und die Pflege lokaler Bräuche. Für Wanderer bietet Faetano zahlreiche Wege, die durch unberührte Wälder und entlang von kleinen Bächen führen und so einen Einblick in die natürliche Schönheit der Republik abseits der touristischen Hauptpfade ermöglichen.",
      hu: "Faetano San Marino egyik legkisebb lakossággal rendelkező castelloja, amely a köztársaság keleti határán fekszik. A település neve az itt őshonos bükkfákra (laton: fagus) utal, ami jól mutatja a környék természetközeli jellegét. Történelmileg Faetano kulcsszerepet játszott San Marino területének végleges kialakulásában: 1463-ban, a Malatesta-család felett aratott győzelem után csatlakozott önként a köztársasághoz. Ez az esemény zárta le San Marino területi növekedését, és Faetano azóta is az állam hűséges része. A község területe 7,7 négyzetkilométer, tájképét a Marano-folyó völgye és a környező lankás dombok határozzák meg. Faetano központja egy csendes, meghitt falu, ahol az élet lassabb mederben folyik, mint a nyüzsgő fővárosban. A legfontosabb építészeti emlék a Szent Pál apostol templom, amelynek elegáns tornya messziről látható. A település egyik különlegessége a Faetanói-tó, egy mesterséges víztározó, amely a horgászok és a piknikezők kedvelt pihenőhelye. Gazdaságilag a község sokat köszönhet az iparnak is, itt található például a köztársaság egyik legrégebbi és legjelentősebb gyára, a kerámiaiparhoz kapcsolódó üzemek. A lakosság száma 1200 körül mozog, ami lehetővé teszi a szoros, családi jellegű közösségi kapcsolatok fenntartást. Faetano ideális úticél azoknak, akik San Marino csendesebb, autentikus arcát szeretnék megismerni, távol a nagy turisztikai központoktól. A helyi konyha a környék mezőgazdasági terményeire épül, a borok és a méz pedig különösen híresek a régióban.",
      ro: "Faetano este un castello situat la granița estică a Republicii San Marino, oferind un peisaj rural autentic și o liniște rar întâlnită în zonele mai urbanizate ale țării. Numele său derivă din cuvântul latin 'fagetum', indicând prezența pădurilor de fag care odinioară acopereau aceste dealuri. Din punct de vedere istoric, Faetano ocupă un loc special în memoria națională sammarineză, fiind una dintre ultimele localități care au aderat la republică în 1463, după capitularea lui Sigismondo Pandolfo Malatesta. Această aderare a fost un act de voință proprie a comunității, consolidând integritatea teritorială a micii națiuni. Geografic, parohia este străbătută de râul Marano, care marchează frontiera naturală cu Italia. O atracție deosebită este lacul Faetano, un luciu de apă artificial dedicat pescuitului sportiv, care a devenit un centru de recreere important pentru întreaga regiune. Arhitectura din Faetano este modestă dar plină de caracter, cu case vechi din piatră de râu și o piață centrală dominată de biserica San Paolo Apostolo, reconstruită în stil neoclasic. Deși este o zonă predominant agricolă, Faetano găzduiește sediul uneia dintre cele mai mari instituții bancare din țară, demonstrând un echilibru interesant între tradiție și modernitate financiară. Populația este redusă, numărând aproximativ 1.200 de locuitori, ceea ce permite menținerea unui sentiment puternic de identitate locală. Activitățile în aer liber, precum ciclismul și drumețiile, sunt foarte populare aici datorită terenului variat și a lipsei traficului intens. Gastronomia locală pune accent pe produse organice, parohia fiind cunoscută pentru livezile sale și pentru calitatea cerealelor cultivate în văile adiacente.",
      en: "The parish of Faetano is one of the quietest and most scenic municipalities of San Marino, located on the eastern edge of the republic. Its identity is closely tied to its natural environment, with the name originating from the Latin word for beech forests. Faetano holds a significant place in the national history as it was one of the four towns that voluntarily joined San Marino in 1463 after the defeat of the Malatesta of Rimini. This historic expansion finalized the sovereign borders that exist to this day. The geography of the parish is defined by the Marano River valley and a series of rolling hills that slope towards the Adriatic Sea. One of the unique features of the area is the Lake of Faetano, a man-made lake used for sport fishing and outdoor recreation, providing a peaceful escape for locals and visitors alike. The small town center is dominated by the neoclassical Church of Saint Paul the Apostle, which was designed by the architect Luigi Montagni in the late 19th century. While Faetano remains largely rural and dedicated to agriculture, it also hosts some of the country's most significant industrial and financial companies, including the headquarters of the Cassa di Risparmio di San Marino. With a population of just over 1,100 people, Faetano maintains a tight-knit community feel. The local Giunta di Castello works to preserve the traditional landscapes while improving infrastructure for residents. The parish is a favorite destination for cyclists and hikers who appreciate its uncrowded roads and panoramic trails. Culturally, Faetano is known for its annual folk festivals and its commitment to preserving the Sammarinese dialect and rural traditions.",
    },
    facts: {
      de: ["Wurde 1463 Teil der Republik.", "Beherbergt einen künstlichen See zum Angeln.", "Geprägt durch hügelige Landschaften."],
      hu: ["1463-ban vált a köztársaság részévé.", "Itt található egy mesterséges horgásztó.", "Dombos tájak jellemzik."],
      ro: ["A devenit parte a republicii în 1463.", "Găzduiește un lac artificial pentru pescuit.", "Caracterizată de peisaje deluroase."],
      en: ["Became part of the republic in 1463.", "Home to an artificial lake for fishing.", "Characterized by hilly landscapes."]
    },
    factsAdvanced: {
      de: ["Faetano trat der Republik San Marino offiziell im Jahr 1463 bei.", "Die Gemeinde umfasst eine Fläche von 7,75 Quadratkilometern.", "Der Lago di Faetano ist ein bekanntes Zentrum für Sportfischerei in der Region.", "Die Einwohnerzahl der Gemeinde liegt bei etwa 1.180 Personen.", "Die Kirche San Paolo Apostolo wurde im Jahr 1898 eingeweiht.", "Faetano grenzt an die italienischen Provinzen Rimini und Pesaro-Urbino.", "Der Name der Gemeinde leitet sich vom lateinischen Wort für Buche (fagus) ab.", "In Faetano befindet sich der Sitz der Ente Cassa di Faetano, einer wichtigen Stiftung."],
      hu: ["Faetano 1463 óta része San Marino köztársaságának.", "A község területe 7,75 km², lakossága pedig körülbelül 1180 fő.", "Itt található a köztársaság egyetlen tava, a mesterséges Faetanói-tó.", "A település címere egy arany színű bükkfát ábrázol kék mezőben.", "A Marano folyó jelenti a természetes határt Faetano és Olaszország között.", "Szent Pál apostol tiszteletére szentelt temploma 19. századi neoklasszicista épület.", "A község területe korábban a rimini Malatesta-család birtoka volt.", "Faetano San Marino egyik legfontosabb mezőgazdasági termelő körzete."],
      ro: ["Faetano a devenit parte a San Marino prin tratatul din 1463.", "Suprafața municipiului este de 7,75 km², fiind unul dintre cele mai verzi castele.", "Populația este de aproximativ 1.180 de locuitori.", "Lacul artificial Faetano este alimentat de izvoare locale și este folosit pentru pescuit.", "Biserica Sfântul Apostol Paul a fost proiectată de arhitectul Luigi Montagni.", "Faetano se învecinează cu localitățile italiene Coriano, Montescudo și Monte Colombo.", "Localitatea este sediul băncii Banca di San Marino, fondată în 1920.", "Altitudinea centrului localității este de 362 de metri deasupra nivelului mării."],
      en: ["Faetano has been part of the Republic of San Marino since the year 1463.", "The parish covers a land area of 7.75 square kilometers.", "The Lake of Faetano is a popular local spot for competitive sport fishing.", "The total population of Faetano is approximately 1,180 residents.", "The municipal shield features a golden beech tree on a blue background.", "The Marano River forms the border between Faetano and the Italian territory.", "The Parish Church of St. Paul the Apostle was completed in the late 1800s.", "Faetano is known for having a significant industrial presence despite its rural appearance."],
    }, image: "/poi-images/SM-003.webp"},
  {
    id: "SM-004",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.481, 43.908],
    name: { de: "Montegiardino", hu: "Montegiardino", ro: "Montegiardino", en: "Montegiardino" },
    description: {
      de: "Die kleinste Gemeinde San Marinos, bekannt für ihr gut erhaltenes mittelalterliches Zentrum.",
      hu: "San Marino legkisebb községe, jól megőrzött középkori központjáról ismert.",
      ro: "Cea mai mică comună din San Marino, cunoscută pentru centrul său medieval bine conservat.",
      en: "The smallest municipality in San Marino, known for its well-preserved medieval center."
    },
    descriptionAdvanced: {
      de: "Montegiardino ist eine der neun Gemeinden (Castelli) der Republik San Marino und zeichnet sich durch seine ruhige, fast dörfliche Atmosphäre sowie seine bedeutende historische Rolle aus. Mit einer Fläche von etwa 3,31 Quadratkilometern ist es flächenmäßig eines der kleineren Castelli, beherbergt jedoch einen wesentlichen Teil des akademischen Lebens der Republik, da sich hier Fachbereiche der Universität von San Marino befinden. Historisch gesehen kam Montegiardino im Jahr 1463 als Teil der territorialen Erweiterung zur Republik, nachdem es zuvor im Besitz der Familie Malatesta aus Rimini gestanden hatte. Diese Integration war ein entscheidender Moment für die Souveränität San Marinos, da sie die heutigen Grenzen festigte. Das Ortsbild ist geprägt von der Kirche San Lorenzo, die im 19. Jahrhundert auf den Fundamenten einer älteren Kultstätte errichtet wurde und heute als religiöses Zentrum der Gemeinschaft dient. Die Architektur im historischen Kern ist schlicht und bewahrt den mittelalterlichen Charakter, während die umliegenden Hügel eine malerische Kulisse bieten. Wirtschaftlich ist Montegiardino heute eine Mischung aus Wohngebiet und Bildungsstandort, wobei der Tourismus eher eine untergeordnete, aber wachsende Rolle spielt, da Reisende die Authentizität abseits der Haupttouristenströme suchen. Die Demografie ist stabil, wobei die Präsenz der Studenten während des Semesters für eine Belebung des sozialen Lebens sorgt. Geografisch liegt das Castello im südöstlichen Teil des Landes und grenzt direkt an die italienischen Gemeinden Montefeltro und Sassofeltrio an, was zu einem regen kulturellen Austausch führt. Die Flora und Fauna der Region sind typisch für den Apennin, mit sanften Erhebungen und fruchtbaren Böden, die früher intensiv landwirtschaftlich genutzt wurden. Montegiardino gilt heute als Rückzugsort für diejenigen, die die Hektik der größeren Zentren meiden möchten, ohne auf die Anbindung an die Infrastruktur der Republik zu verzichten.",
      hu: "Montegiardino a San Marino-i Köztársaság legkisebb lakossággal rendelkező castelloja, amely mégis óriási jelentőséggel bír az ország kulturális és oktatási életében. A mindössze 3,31 négyzetkilométeres terület az 1463-as háborúk idején került a köztársasághoz, amikor San Marino szövetségre lépett II. Piusz pápával a Malatesta család ellen. Ez a történelmi momentum véglegesítette a miniállam mai határait, Montegiardino pedig azóta a szabadság egyik bástyája. A település szívében található a San Lorenzo templom, amely neoklasszicista stílusával és elegáns belső terével a közösség vallási életének központja. Az oktatás terén a község kiemelkedik, hiszen itt kapott helyet a San Marino-i Egyetem Gazdasági és Technológiai Kara, ami fiatalos lendületet ad a középkori falaknak. A földrajzi elhelyezkedése különleges, hiszen a domborzati viszonyok lehetővé tették a teraszos mezőgazdaság kialakulását, bár ma már inkább a lakóövezeti funkció dominál. A község lakói híresek vendégszeretetükről és a helyi hagyományok ápolásáról, évente több kulturális fesztivált is rendeznek, amelyek a középkori gyökerekre építenek. A természet közelsége, a tiszta levegő és a környező olasz tartományokra (Emilia-Romagna és Marche) nyíló panoráma vonzóvá teszi a kirándulók számára. Gazdasági szempontból a kisvállalkozások és a szolgáltató szektor jellemző, de a mezőgazdaság, különösen a szőlő- és olajbogyó-termesztés, továbbra is jelen van a domboldalakon. Montegiardino sikeresen ötvözi a múlt örökségét a modern egyetemi város képével, így egyedülálló színfoltja a világ legrégebbi köztársaságának, ahol a nyugalom és a tudás kéz a kézben jár a történelmi falak között.",
      ro: "Montegiardino este o municipalitate situată în extremitatea sud-estică a Republicii San Marino, fiind cunoscută pentru farmecul său medieval și pentru rolul său de centru universitar. Cu o suprafață de aproximativ 3,31 km², este unul dintre cele mai mici castelli, dar istoria sa este vastă, fiind anexată republicii în 1463, în urma conflictului cu familia Malatesta. Acest moment a marcat ultima extindere teritorială majoră a statului sanmarinez, transformând Montegiardino dintr-o fortăreață de frontieră într-o parte integrantă a comunității naționale. Inima localității este dominată de biserica San Lorenzo, o structură impresionantă care atrage privirile prin arhitectura sa sobră, dar elegantă. Un aspect definitoriu al prezentului este prezența Departamentului de Economie și Tehnologie al Universității din San Marino, ceea ce conferă acestui loc o atmosferă vibrantă și intelectuală, rară pentru o comunitate atât de mică. Din punct de vedere geografic, regiunea este caracterizată de dealuri line și o vegetație bogată, specifică zonei sub-apeninice, oferind panorame superbe asupra văii Marano. Economia locală se bazează pe servicii legate de prezența studenților, dar păstrează și legături puternice cu agricultura tradițională, cultivarea viței-de-vie fiind o activitate străveche în aceste locuri. Demografic, Montegiardino este o comunitate strâns unită, unde tradițiile sunt păstrate cu sfințenie, iar evenimentele locale reunesc adesea toți locuitorii. Proximitatea față de granița cu Italia facilitează un schimb cultural și economic constant, localnicii navigând cu ușurință între identitatea lor sanmarineză și influențele din regiunile vecine. Vizitatorii care ajung aici sunt adesea surprinși de liniștea care domnește pe străzile înguste și de conservarea impecabilă a clădirilor istorice, transformând Montegiardino într-un muzeu viu al rezilienței și adaptabilității în fața trecerii timpului.",
      en: "Montegiardino stands as the smallest municipality by population in the Republic of San Marino, yet it carries a profound historical and academic weight. Covering an area of roughly 3.31 square kilometers, it was the last significant territorial acquisition of the Republic, added in 1463 following the defeat of Sigismondo Pandolfo Malatesta. This historical turning point solidified the national borders that remain to this day. The municipality is centered around the quaint village of Montegiardino, where the Church of San Lorenzo stands as a focal point. Built in the 19th century, the church reflects the community's long-standing religious devotion and serves as a gathering place for locals. Today, Montegiardino is perhaps best known as the seat of several departments of the University of San Marino, including Economics and Management. This academic presence injects a youthful energy into the otherwise quiet, medieval streets, creating a unique juxtaposition of ancient stone and modern thought. Geographically, the terrain is hilly and verdant, characterized by limestone outcrops and fertile soil that supported agricultural life for centuries. Economically, the region has shifted toward the service sector and education-related businesses, though small-scale farming of olives and grapes continues in the surrounding countryside. Its location in the southeastern part of the country offers breathtaking views of the Italian Montefeltro region, emphasizing the close ties between San Marino and its larger neighbor. The social fabric of Montegiardino is defined by a sense of belonging and a commitment to preserving the town's historical integrity. For travelers, it offers a serene alternative to the bustling capital, providing a glimpse into the authentic daily life of a San Marinese castle. The integration of its medieval heritage with a forward-looking educational focus makes Montegiardino a vital, though peaceful, part of the Republic's contemporary identity.",
    },
    facts: {
      de: ["Sitz der Universität von San Marino.", "Hatte früher eine strategische Festung.", "Sehr malerische, enge Gassen."],
      hu: ["A San Marinó-i Egyetem székhelye.", "Korábban stratégiai erődítménye volt.", "Nagyon festői, szűk utcák."],
      ro: ["Sediul Universității din San Marino.", "Avea în trecut o fortăreață strategică.", "Străduțe înguste foarte pitorești."],
      en: ["Seat of the University of San Marino.", "Formerly had a strategic fortress.", "Very picturesque, narrow streets."]
    },
    factsAdvanced: {
      de: ["Montegiardino umfasst eine Gesamtfläche von etwa 3,31 km².", "Das Castello wurde im Jahr 1463 offiziell Teil von San Marino.", "Es beherbergt den Fachbereich für Wirtschaft der Universität San Marino.", "Die Pfarrkirche San Lorenzo wurde im Jahr 1865 geweiht.", "Montegiardino grenzt an die italienische Region Marken.", "Es ist das bevölkerungsmäßig kleinste Castello der Republik.", "Die malatestianische Herrschaft endete hier nach der Belagerung von 1463.", "Die höchste Erhebung des Castellos liegt bei etwa 340 Metern über dem Meeresspiegel."],
      hu: ["Montegiardino területe 3,31 négyzetkilométer, amivel a kisebb egységek közé tartozik.", "1463-ban csatolták a köztársasághoz II. Piusz pápa jóváhagyásával.", "Itt működik a San Marino-i Egyetem Gazdasági és Technológiai Kara.", "A San Lorenzo templom építése a 19. század közepén fejeződött be.", "A község lakossága stabilan 1000 fő alatt mozog.", "A település címere három arany rózsát ábrázol kék mezőben.", "Közvetlen szomszédja az olaszországi Sassofeltrio község.", "A középkori várfalak maradványai ma is láthatóak a városközpontban."],
      ro: ["Suprafața totală a castello-ului Montegiardino este de 3,31 km².", "Anul 1463 reprezintă data integrării sale oficiale în Republica San Marino.", "Găzduiește Departamentul de Economie al Universității Naționale.", "Biserica parohială este dedicată Sfântului Laurențiu (San Lorenzo).", "Este singurul castello care nu are graniță cu orașul San Marino.", "Relieful este predominant deluros, atingând altitudini de peste 300 m.", "Populația locală este de aproximativ 900 de locuitori.", "A fost anterior o posesie strategică a familiei Malatesta din Rimini."],
      en: ["Montegiardino covers an area of 3.31 square kilometers.", "It was incorporated into San Marino in 1463, the last major expansion.", "The municipality is home to the University of San Marino's Economics Department.", "The current Church of San Lorenzo was completed in 1865.", "It is the least populated of the nine San Marinese municipalities.", "The coat of arms features three golden roses on a blue field.", "It borders the Italian provinces of Rimini and Pesaro e Urbino.", "The altitude of the main settlement is approximately 348 meters."],
    }, image: "/poi-images/SM-004.webp"},
  {
    id: "SM-005",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4578, 43.9103],
    name: { de: "Fiorentino", hu: "Fiorentino", ro: "Fiorentino", en: "Fiorentino" },
    description: {
      de: "Eine historische Gemeinde, die im 15. Jahrhundert eingegliedert wurde.",
      hu: "Történelmi község, amelyet a 15. században csatoltak a köztársasághoz.",
      ro: "O comună istorică anexată în secolul al XV-lea.",
      en: "A historic municipality annexed in the 15th century."
    },
    descriptionAdvanced: {
      de: "Fiorentino ist eines der neun Castelli der Republik San Marino und liegt im südlichen Teil des Landes, eingebettet in eine hügelige Landschaft, die reich an Geschichte und Legenden ist. Mit einer Fläche von etwa 6,57 Quadratkilometern gehört es zu den mittelgroßen Gemeinden der Republik und spielt eine wichtige Rolle als Bindeglied zwischen den städtischen Zentren und den ländlichen Gebieten an der Grenze zu Italien. Der Name 'Fiorentino' leitet sich vermutlich von der üppigen Vegetation und der Blumenpracht ab, die die Region in früheren Zeiten prägte. Historisch ist das Gebiet von großer Bedeutung, da es Schauplatz zahlreicher Konflikte war, insbesondere während der territorialen Ausdehnung San Marinos im 15. Jahrhundert. In Fiorentino befanden sich einst drei bedeutende Festungen: die Burg von Fiorentino, die Burg von Pennarossa und die Burg von Casole, von denen heute nur noch Ruinen zeugen. Die Burg von Fiorentino, auch als 'Castellaccio' bekannt, war einst ein strategisch wichtiger Punkt für die Malatesta, bevor sie 1463 von den San-Marinesen eingenommen wurde. Die heutige Pfarrkirche San Bartolomeo Apostolo ist das geistige Zentrum der Gemeinde und beherbergt wertvolle religiöse Kunstwerke. Wirtschaftlich hat sich Fiorentino in den letzten Jahrzehnten von einer rein landwirtschaftlich geprägten Zone zu einem Mischgebiet entwickelt, in dem auch kleine Industriebetriebe und Handwerksbetriebe ansässig sind. Dennoch bleibt die Landwirtschaft, insbesondere der Anbau von Getreide und Wein, ein wichtiger Bestandteil der lokalen Identität. Die Gemeinde grenzt an die italienischen Provinzen Rimini und Pesaro-Urbino, was sie zu einem wichtigen Transitpunkt macht. Fiorentino ist auch für seine Sportbegeisterung bekannt, insbesondere im Bereich Fußball, und verfügt über moderne Sportanlagen, die die Jugend der Region anziehen. Die Kombination aus historischem Erbe, natürlicher Schönheit und moderner Infrastruktur macht Fiorentino zu einem lebenswerten Ort, der stolz auf seine san-marinesischen Wurzeln blickt.",
      hu: "Fiorentino San Marino egyik legősibb múltra visszatekintő castelloja, amely a köztársaság déli részén terül el 6,57 négyzetkilométeren. A község neve – amely virágos kertet jelent – hűen tükrözi a táj szépségét és a domboldalak buja növényzetét. Történelmileg ez a terület volt a Malatesta és a Montefeltro családok közötti rivalizálás egyik legfontosabb színhelye, mígnem 1463-ban végleg San Marino részévé vált. A középkorban három hatalmas erődítmény is állt itt: a Fiorentino-i vár, a Pennarossa és a Casole, amelyek romjai ma is titokzatos hangulatot árasztanak és népszerűek a kirándulók körében. A Fiorentino-i várat, amelyet gyakran 'Castellaccio' néven emlegetnek, a san-marinoiak az 1463-as győzelem után lerombolták, hogy megakadályozzák az ellenség visszatérését. A vallási élet központja a Szent Bertalan apostol templom, amelynek harangtornya messziről látható és a település jelképe. Fiorentino ma egy dinamikusan fejlődő közösség, ahol a hagyományos mezőgazdaság – főleg a gabonatermesztés és a borászat – mellett megjelentek a modern ipari üzemek is, különösen a könnyűipar és az építőipar területén. A közlekedési szempontból is jelentős castello kaput nyit Olaszország felé, ami elősegíti a gazdasági kapcsolatok élénkülését. A helyi közösségi élet kiemelkedő eseményei a búcsúk és a sportrendezvények, a község futballcsapata pedig büszkén képviseli a települést a nemzeti bajnokságban. A természetjárók számára számos ösvény kínálkozik, amelyek átvezetnek a tölgyerdőkön és az egykori várak maradványaihoz repítenek vissza. Fiorentino tehát nem csupán egy közigazgatási egység, hanem egy olyan hely, ahol a történelem minden kőben ott él, miközben a lakók modern élete töretlenül fejlődik a miniállam szívében.",
      ro: "Fiorentino reprezintă o regiune istorică și administrativă de o importanță deosebită pentru Republica San Marino, situată în partea de sud a micii națiuni. Cu o întindere de 6,57 km², acest castello este un mozaic de peisaje naturale spectaculoase și vestigii arheologice care atestă o istorie zbuciumată. Denumirea sa evocă imaginea unor pământuri fertile și înfloritoare, o caracteristică pe care regiunea o păstrează și astăzi prin zonele sale verzi și terenurile agricole bine întreținute. În secolul al XV-lea, Fiorentino a fost centrul unor dispute teritoriale aprige între San Marino și familia Malatesta, fiind în cele din urmă anexat republicii în anul 1463. Ruinele vechilor fortărețe, precum cea din Fiorentino (cunoscută local sub numele de 'Castellaccio') sau Pennarossa, sunt martori tăcuți ai epocii feudale și oferă perspective fascinante asupra modului în care s-a apărat statul sanmarinez de-a lungul secolelor. Biserica San Bartolomeo Apostolo este edificiul religios principal, fiind un punct de reper cultural și social pentru locuitorii zonei. Economia locală a evoluat semnificativ, trecând de la o dependență totală de agricultură la o structură diversificată ce include mici fabrici și companii de servicii, beneficiind de conexiunile rutiere cu localitățile italiene învecinate, precum Monte Grimano Terme. Din punct de vedere demografic, Fiorentino a cunoscut o creștere constantă, atrăgând familii tinere datorită calității vieții și facilităților moderne de care dispune, inclusiv baze sportive de înalt nivel. Comunitatea este activă și implicată în păstrarea tradițiilor locale, organizând frecvent evenimente care celebrează istoria locului. Pentru turiști, Fiorentino oferă trasee de drumeție care îmbină natura cu istoria, fiind o destinație ideală pentru cei care doresc să descopere rădăcinile profunde ale celei mai vechi republici din lume.",
      en: "Fiorentino is one of the nine municipalities of the Republic of San Marino, situated in the southern part of the country and spanning an area of 6.57 square kilometers. Its name, likely derived from the 'flowering' nature of its fertile hills, reflects the lush agricultural landscape that defines the region. Historically, Fiorentino was a strategic frontier zone and was home to three major fortresses: the Castle of Fiorentino, Pennarossa, and Casole. These strongpoints were central to the conflicts between the Republic and the Malatesta family of Rimini. In 1463, during the final expansion of San Marino, Fiorentino was conquered and integrated into the national territory. Today, only the ruins of these castles remain, with the Castle of Fiorentino (known as 'Castellaccio') being a popular site for archaeological interest and hiking. The central settlement is clustered around the Church of Saint Bartholomew the Apostle, which serves as the religious and social heart of the municipality. While agriculture—specifically the cultivation of cereals, olives, and grapes—remains a pillar of local tradition, the area has modernized with the emergence of light industry and commercial activities. Its location makes it a vital link for cross-border traffic with the Italian regions of Marche and Emilia-Romagna. The community is also noted for its vibrant sporting life, boasting well-equipped facilities that host national football matches and youth tournaments. Demographically, Fiorentino is characterized by a stable and growing population of approximately 2,500 residents who enjoy a high quality of life within a scenic setting. The blend of medieval ruins, productive farmlands, and contemporary residential developments makes Fiorentino a quintessential example of how San Marino preserves its past while embracing the future. It remains a key component of the Republic's territorial integrity and cultural heritage.",
    },
    facts: {
      de: ["Bekannt für die Ruinen der Malatesta-Burg.", "Wichtig für den lokalen Weinbau.", "Bietet schöne Wanderwege."],
      hu: ["A Malatesta-vár romjairól ismert.", "Fontos a helyi bortermelés számára.", "Szép túraútvonalakat kínál."],
      ro: ["Cunoscută pentru ruinele castelului Malatesta.", "Importantă pentru viticultura locală.", "Oferă trasee frumoase de drumeție."],
      en: ["Known for the ruins of the Malatesta castle.", "Important for local viticulture.", "Offers beautiful hiking trails."]
    },
    factsAdvanced: {
      de: ["Fiorentino erstreckt sich über eine Fläche von 6,57 km².", "Die Gemeinde wurde im Jahr 1463 offiziell Teil von San Marino.", "Hier befanden sich einst drei bedeutende mittelalterliche Burgen.", "Die Pfarrkirche ist dem Apostel Bartholomäus gewidmet.", "Fiorentino grenzt an die italienische Gemeinde Monte Grimano Terme.", "Die Ruine 'Castellaccio' war einst eine Festung der Malatesta.", "Das Wappen zeigt drei rote Rosen auf goldenem Grund.", "Die Einwohnerzahl liegt bei etwa 2.500 Personen."],
      hu: ["Fiorentino területe 6,57 négyzetkilométer, ezzel közepes méretű castello.", "1463-ban került San Marino fennhatósága alá a Malatesta családtól.", "A középkorban három erődítmény (Fiorentino, Pennarossa, Casole) védte.", "A település védőszentje Szent Bertalan apostol.", "A címerben található három vörös rózsa a település nevére utal.", "Itt található a köztársaság egyik legmodernebb sportközpontja.", "A terület tengerszint feletti magassága átlagosan 490 méter.", "A község határos az olaszországi Pesaro és Urbino megyével."],
      ro: ["Fiorentino are o suprafață administrativă de 6,57 km².", "A fost cucerit și anexat de Republica San Marino în anul 1463.", "Găzduiește vestigiile arheologice ale fortăreței 'Castellaccio'.", "Biserica principală a fost reconstruită în stil neoclasic.", "Localitatea este cunoscută pentru echipa sa de fotbal, FC Fiorentino.", "Se învecinează direct cu municipalitățile Chiesanuova și Faetano.", "Economia este mixtă, îmbinând agricultura cu mica industrie.", "Altitudinea maximă în zonă ajunge la aproximativ 496 de metri."],
      en: ["Fiorentino covers a total land area of 6.57 square kilometers.", "It was officially annexed to the Republic in 1463.", "The municipality was once guarded by three separate castles.", "The patron saint of the community is Saint Bartholomew.", "The local population is approximately 2,560 residents.", "It borders the Italian municipalities of Montefeltro and Rimini.", "The coat of arms features three red roses, symbolizing its name.", "The ruins of Pennarossa castle are located within its boundaries."],
    }, image: "/poi-images/SM-005.webp"},
  {
    id: "SM-006",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.421, 43.904],
    name: { de: "Chiesanuova", hu: "Chiesanuova", ro: "Chiesanuova", en: "Chiesanuova" },
    description: {
      de: "Eine ruhige ländliche Gemeinde im Südwesten San Marinos.",
      hu: "Csendes vidéki község San Marino délnyugati részén.",
      ro: "O comună rurală liniştită în sud-vestul San Marino.",
      en: "A quiet rural municipality in the southwest of San Marino."
    },
    descriptionAdvanced: {
      de: "Chiesanuova ist ein Castello in der Republik San Marino, das im südwestlichen Teil des Landes liegt und durch seine ländliche Ruhe und historische Tiefe besticht. Mit einer Fläche von etwa 5,46 Quadratkilometern bietet die Gemeinde eine abwechslungsreiche Topografie, die von sanften Hügeln bis hin zu steileren Felsformationen reicht. Historisch war das Gebiet als 'Pennarossa' bekannt, benannt nach der alten Festung, die einst auf einem strategisch günstigen Hügel thronte. Im Jahr 1320 entschied sich die lokale Bevölkerung freiwillig, der Republik San Marino beizutreten, was Chiesanuova zu einem der ältesten Bestandteile des Staates macht. Der heutige Name 'Chiesanuova' bedeutet wörtlich 'Neue Kirche' und bezieht sich auf den Wiederaufbau des religiösen Zentrums im 16. Jahrhundert, als die alte Kirche von San Giovanni Battista ersetzt wurde. Die heutige Architektur des Ortes ist eine Mischung aus traditionellen Steinbauten und modernen Wohngebäuden, die sich harmonisch in die Landschaft einfügen. Die Pfarrkirche San Giovanni Battista, entworfen vom Architekten Gino Zani, ist ein markantes Beispiel für die san-marinesische Baukunst des 20. Jahrhunderts und beherbergt bedeutende religiöse Artefakte. Wirtschaftlich ist die Region stark von der Landwirtschaft und dem Handwerk geprägt, wobei in jüngster Zeit auch der Tourismus an Bedeutung gewonnen hat, insbesondere für Wanderer und Naturliebhaber. Die Gemeinde grenzt direkt an die italienischen Regionen Emilia-Romagna und Marken, was zu einer engen grenzüberschreitenden Zusammenarbeit führt. Chiesanuova ist zudem für sein kulturelles Engagement bekannt, wobei lokale Feste und sportliche Aktivitäten den Zusammenhalt der Gemeinschaft stärken. Die ruhige Atmosphäre macht es zu einem beliebten Wohnort für Menschen, die in den geschäftigeren Teilen der Republik arbeiten, aber die Natur suchen. Die Flora der Region ist reich an Eichen und Kastanien, und die Aussichtspunkte bieten einen weiten Blick über das italienische Hinterland bis hin zur Adriaküste bei klarem Wetter.",
      hu: "Chiesanuova San Marino egyik legnyugatibb fekvésű castelloja, amely 5,46 négyzetkilométeren terül el a köztársaság határvidékén. A település története szorosan összefonódik a középkori Pennarossa várával, amelyről a község korábban a nevét is kapta. Chiesanuova történelmi jelentőségét az adja, hogy lakói 1320-ban önként csatlakoztak San Marinóhoz, keresve a védelmet és a szabadságot, amit a köztársaság kínált. Mai neve, amely 'Új Templomot' jelent, a 16. századra vezethető vissza, amikor a régi Keresztelő Szent János templomot újjáépítették. A község központját a modern, mégis klasszikus jegyeket hordozó San Giovanni Battista templom uralja, amelyet a híres építész, Gino Zani tervezett a 20. század elején. Chiesanuova tájképe rendkívül változatos: a mély völgyek és a meredek mészkősziklák drámai hátteret biztosítanak a mindennapi élethez. Gazdasági szempontból a mezőgazdaság, ezen belül is az állattenyésztés és a takarmánytermesztés játszott hagyományosan nagy szerepet, de ma már a kisipar és a szolgáltatások is jelentősek. A község híres a sportéletéről, különösen a labdarúgás és a kerékpározás népszerű a helyiek körében, a festői utak pedig sok amatőr sportolót vonzanak Olaszországból is. A közösség összetartó erejét a hagyományos ünnepek, mint például a védőszent napja vagy a helyi gasztronómiai fesztiválok adják, ahol a san-marinoi konyha legjava kerül az asztalra. Chiesanuova az utóbbi években a fenntartható turizmus irányába nyitott, tanösvényeket és pihenőhelyeket alakítottak ki az erdős területeken. A település csendje és a természet közelsége miatt kedvelt lakóhely azok számára, akik elvágynak a városi zajtól, mégis közel akarnak maradni a főváros intézményeihez. Ez a castello tökéletes példája annak, hogyan maradhat fenn egy kis közösség évszázadokon át, megőrizve identitását a változó világban.",
      ro: "Chiesanuova este o municipalitate situată în partea de sud-vest a Republicii San Marino, acoperind o suprafață de 5,46 km². Istoria sa este fascinantă, fiind marcată de decizia voluntară a comunității de a se alătura republicii în anul 1320, o mișcare care a consolidat granițele de vest ale statului. În perioada medievală, zona era cunoscută sub numele de Pennarossa, o denumire care provenea de la castelul ce veghea asupra drumurilor comerciale dinspre Italia. Numele actual, care s-ar traduce prin 'Biserica Nouă', a apărut în secolul al XVI-lea, reflectând transformările religioase și arhitecturale ale localității. Piesa centrală a așezării este biserica San Giovanni Battista, o construcție remarcabilă realizată în stil romanic-gotic de către arhitectul Gino Zani, care a reușit să integreze perfect clădirea în peisajul deluros. Geografic, Chiesanuova oferă unele dintre cele mai spectaculoase priveliști din San Marino, relieful său fiind caracterizat de creste calcaroase și văi adânci unde flora locală este protejată cu atenție. Din punct de vedere economic, regiunea a păstrat o puternică tradiție agricolă, fiind renumită pentru produsele sale lactate și pentru cultivarea cerealelor. În ultimele decenii, infrastructura a fost modernizată, facilitând accesul către Rimini și alte centre urbane din Italia, ceea ce a transformat localitatea într-o zonă rezidențială căutată. Viața socială este activă, cu numeroase asociații culturale și sportive care mențin spiritul comunitar viu. Chiesanuova găzduiește, de asemenea, evenimente dedicate istoriei sale, reconstituirile medievale fiind o atracție pentru turiștii dornici să înțeleagă rădăcinile republicii. Localitatea reprezintă un echilibru perfect între conservarea patrimoniului istoric și adaptarea la cerințele moderne, oferind locuitorilor săi un standard ridicat de viață într-un cadru natural de excepție.",
      en: "Chiesanuova is a municipality located in the southwestern corner of the Republic of San Marino, covering an area of 5.46 square kilometers. Known historically as 'Pennarossa' after the ancient fortress that once stood on its craggy heights, the region has a unique place in national history. In 1320, the local population chose to voluntarily join the Republic of San Marino, seeking protection and political stability, a move that significantly expanded the country’s western frontier. The current name, meaning 'New Church,' dates back to the 16th century when a new religious edifice was constructed to replace the aging chapel of San Giovanni Battista. The architectural landscape of Chiesanuova is dominated by the modern Church of Saint John the Baptist, designed by the renowned architect Gino Zani in the early 20th century, which features a striking stone façade. Geographically, the area is characterized by rugged limestone formations and lush valleys, offering some of the most dramatic natural scenery in the Republic. Economically, Chiesanuova has maintained its rural roots, with farming and livestock rearing continuing to be important, though it has increasingly become a quiet residential area for those commuting to the capital or nearby Italian towns. The municipality borders the Italian regions of Emilia-Romagna and Marche, fostering a culture of cross-border exchange. Social life in Chiesanuova is tightly knit, centered around local festivals and sporting events, particularly football, with the local club 'S.S. Pennarossa' carrying the town's historical name. For visitors, the area offers excellent opportunities for outdoor activities like hiking and mountain biking, with trails leading to scenic overlooks that stretch toward the Adriatic Sea. Chiesanuova remains a symbol of voluntary integration and community strength, preserving its peaceful character while playing a vital role in the territorial fabric of San Marino.",
    },
    facts: {
      de: ["Bekannt für seine Kiefernwälder.", "Liegt an der Grenze zur italienischen Region Marken.", "Beliebt für Naturtourismus."],
      hu: ["Fenyőerdőiről ismert.", "Az olaszországi Marche régió határán fekszik.", "Népszerű a természetjárók körében."],
      ro: ["Cunoscută pentru pădurile sale de pini.", "Situată la graniţa cu regiunea italiană Marche.", "Populară pentru turismul de natură."],
      en: ["Known for its pine forests.", "Located on the border with the Italian Marche region.", "Popular for nature tourism."]
    },
    factsAdvanced: {
      de: ["Chiesanuova erstreckt sich über eine Fläche von 5,46 km².", "Die Gemeinde trat der Republik San Marino im Jahr 1320 bei.", "Der ursprüngliche Name der Region war Pennarossa.", "Die Pfarrkirche San Giovanni Battista wurde von Gino Zani entworfen.", "Das Wappen zeigt eine rote Feder auf goldenem Grund.", "Chiesanuova grenzt an die italienische Provinz Rimini.", "Die höchste Erhebung liegt auf dem Monte Cucco.", "Die Einwohnerzahl beträgt etwa 1.100 Personen."],
      hu: ["Chiesanuova területe 5,46 négyzetkilométer.", "A község 1320-ban csatlakozott önkéntesen San Marinóhoz.", "Korábbi neve Pennarossa volt, ami vörös tollat vagy sziklát jelent.", "A San Giovanni Battista templom a 20. század elején épült újjá.", "A település címere egy vörös tollat ábrázol.", "Közvetlenül határos az olaszországi San Leo városával.", "A gazdaságban meghatározó a mezőgazdaság és a kisipar.", "Itt található San Marino egyik legnyugatibb pontja."],
      ro: ["Chiesanuova are o suprafață de aproximativ 5,46 km².", "S-a alăturat Republicii San Marino în anul 1320.", "Biserica San Giovanni Battista este construită în stil romanic-gotic.", "Altitudinea medie a localității este de 450 metri.", "Stema oficială conține imaginea unei pene roșii.", "Se învecinează cu comunele italiene San Leo și Verucchio.", "Populația este de aproximativ 1.150 de locuitori.", "Echipa locală de fotbal se numește SS Pennarossa."],
      en: ["Chiesanuova spans a total area of 5.46 square kilometers.", "The municipality joined San Marino voluntarily in 1320.", "Its historical name, Pennarossa, refers to the local red rock.", "The Church of St. John the Baptist was rebuilt in the 1930s.", "The coat of arms depicts a red feather on a gold background.", "It borders the Italian provinces of Rimini and Pesaro e Urbino.", "The main settlement sits at an altitude of 450 meters.", "Agriculture and limestone quarrying were historically significant."],
    }, image: "/poi-images/SM-006.webp"},
  {
    id: "SM-008",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4181, 43.9458],
    name: { de: "Acquaviva", hu: "Acquaviva", ro: "Acquaviva", en: "Acquaviva" },
    description: {
      de: "Eine westliche Gemeinde, die für ihre natürlichen Quellen bekannt ist.",
      hu: "Nyugati község, amely természetes forrásairól ismert.",
      ro: "O comună vestică cunoscută pentru izvoarele sale naturale.",
      en: "A western municipality known for its natural springs."
    },
    descriptionAdvanced: {
      de: "Acquaviva ist eines der dynamischsten Castelli der Republik San Marino und liegt im Nordwesten des Landes an der Grenze zu Italien. Der Name 'Acquaviva' (lebendiges Wasser) leitet sich von den zahlreichen natürlichen Quellen ab, die am Fuße des Monte Cerreto entspringen und seit der Antike für die Region von entscheidender Bedeutung sind. Mit einer Fläche von 4,86 Quadratkilometern ist Acquaviva ein wichtiges wirtschaftliches und ökologisches Zentrum der Republik. Eine Legende besagt, dass der Heilige Marinus, der Gründer der Republik, hier an den Quellen Rast machte und eine christliche Gemeinschaft gründete, was dem Ort eine tiefe religiöse Bedeutung verleiht. Historisch gesehen war Acquaviva Schauplatz wichtiger diplomatischer Ereignisse, wie der Unterzeichnung des Abkommens von 1463, das die Grenzen der Republik festigte. Die heutige Pfarrkirche Sant'Andrea Apostolo ist ein architektonisches Highlight und wurde auf den Ruinen einer mittelalterlichen Kapelle errichtet. In den letzten Jahrzehnten hat sich Acquaviva zu einem bedeutenden Industriestandort entwickelt, insbesondere in der Zone Gualdicciolo, wo zahlreiche Unternehmen aus den Bereichen Elektronik, Mechanik und Dienstleistungen ansässig sind. Trotz dieser industriellen Entwicklung hat die Gemeinde ihren natürlichen Charme bewahrt. Der Parco di Monte Cerreto ist das größte Naturschutzgebiet San Marinos und bietet Wanderwege, Klettermöglichkeiten und Erholungszonen inmitten von Eichenwäldern. Geografisch ist die Region durch den Fluss San Marino geprägt, der die Grenze zu Italien markiert. Die Gemeinde ist auch für ihre Sportanlagen bekannt, insbesondere die Motocross-Strecke 'Baldasserona', die internationale Wettbewerbe anzieht. Die Bewohner von Acquaviva pflegen eine starke lokale Identität, die durch traditionelle Feste und eine aktive Bürgerbeteiligung zum Ausdruck kommt. Die Kombination aus historischer Tiefe, wirtschaftlicher Kraft und ökologischem Reichtum macht Acquaviva zu einem unverzichtbaren Teil der san-marinesischen Staatsgemeinschaft.",
      hu: "Acquaviva San Marino északnyugati részén elhelyezkedő castello, amely nevét – jelentése: élő víz – a Monte Cerreto lábánál feltörő bőséges forrásokról kapta. A 4,86 négyzetkilométeres terület a köztársaság egyik legfontosabb gazdasági motorja, köszönhetően az olasz határ mentén kialakult Gualdicciolo ipari övezetnek. A helyi legenda szerint Szent Marinusz itt keresztelte meg az első híveket és itt pihent meg útja során, ezért Acquaviva vallási szempontból is kiemelt helyszín. Történelmileg a település fontos diplomáciai szerepet játszott: 1463-ban itt került sor a Malatesta családdal vívott háború utáni határrendezésre. A Szent András apostol tiszteletére szentelt plébániatemplom a község spirituális központja, amely elegáns homlokzatával a környék dísze. Acquaviva tájképe kettős: egyrészt modern ipari és kereskedelmi létesítmények jellemzik, másrészt itt található a Monte Cerreto park, San Marino legnagyobb zöldterülete, amely gazdag élővilágnak ad otthont és népszerű a természetjárók körében. A területen folyik keresztül a San Marino-patak, amely festői völgyet vájt a mészkősziklák közé. A község híres a sport iránti elkötelezettségéről is, a Baldasserona motokrossz-pálya nemzetközi hírű és rangos versenyeknek ad otthont. Gazdaságilag az exportorientált könnyűipar dominál, de a helyi szolgáltatások is rohamosan fejlődnek. A lakosság száma az utóbbi években dinamikusan nőtt, ami modern infrastruktúrát és pezsgő közösségi életet eredményezett. Acquaviva polgárai büszkék hagyományaikra, évente megrendezik a források ünnepét, amely a település névadó elemét tiszteli meg. Ez a castello a tökéletes példája annak, hogyan fér meg egymás mellett a vallási örökség, az érintetlen természet és a 21. századi ipari fejlődés egy ilyen kis államban.",
      ro: "Acquaviva este o municipalitate vibrantă din nord-vestul Republicii San Marino, renumită pentru izvoarele sale naturale care i-au dat și numele (în traducere, 'Apă Vie'). Întinsă pe o suprafață de 4,86 km², această regiune îmbină armonios patrimoniul spiritual cu o activitate industrială intensă. Conform tradiției, Sfântul Marin s-a refugiat la izvoarele din Acquaviva în secolul al IV-lea, botezând primii creștini din zonă, fapt ce conferă localității o aură de sacralitate. Din punct de vedere istoric, Acquaviva a fost un punct strategic de frontieră, fiind martora negocierilor cruciale din 1463 care au stabilit actualele limite teritoriale ale republicii. Biserica Sant'Andrea Apostolo, situată în centrul localității, este un edificiu de o frumusețe aparte, păstrând elemente arhitecturale care amintesc de secolele de credință ale locuitorilor săi. Astăzi, regiunea este motorul economic al țării datorită zonei industriale Gualdicciolo, un hub tehnologic și comercial ce atrage numeroși lucrători și investiții. Cu toate acestea, mediul înconjurător este protejat cu strictețe, Parcul Monte Cerreto fiind o oază de biodiversitate unde stejarii și pinii mediteraneeni oferă un adăpost natural faunei locale. Relieful este variat, de la luncile râului San Marino până la versanții abrupți ai muntelui, oferind condiții excelente pentru sporturile în aer liber. Acquaviva găzduiește, de asemenea, circuitul de motocross Baldasserona, unul dintre cele mai importante din regiune. Comunitatea este dinamică, beneficiind de facilități educaționale și medicale moderne, ceea ce a dus la o creștere demografică constantă în ultimul deceniu. Sărbătorile locale sunt momente de mare bucurie, celebrând atât resursele de apă, cât și identitatea sanmarineză. Vizitatorii pot descoperi aici o față modernă a San Marino, fără a pierde contactul cu legendele fondatoare care au modelat destinul acestei mici, dar reziliente națiuni.",
      en: "Acquaviva is a prominent municipality in the northwestern part of the Republic of San Marino, covering 4.86 square kilometers. Its name, literally 'Living Water,' originates from the numerous natural springs at the foot of Monte Cerreto that have sustained the region since ancient times. Local lore claims that Saint Marinus, the Republic's founder, sought refuge near these springs and preached to the early inhabitants, imbuing the area with spiritual significance. Historically, Acquaviva was a vital frontier post and the site of key diplomatic meetings in 1463 that defined San Marino's modern boundaries. The central settlement features the Church of Saint Andrew the Apostle, a significant religious site that stands on the location of a 10th-century chapel. In modern times, Acquaviva has become the industrial heart of San Marino, particularly in the Gualdicciolo district, which hosts a wide range of manufacturing and service companies. Despite this industrial importance, the municipality remains a bastion of natural beauty. It is home to the Monte Cerreto Park, the largest woodland area in the country, providing extensive trails for hiking and recreation. Geographically, the terrain is marked by the San Marino stream and impressive limestone cliffs. The municipality is also a hub for motor sports, featuring the Baldasserona motocross track, which hosts international competitions. The population, numbering over 2,100, enjoys a blend of high-tech employment opportunities and a serene residential environment. Acquaviva's identity is a unique mix of ancient legend and cutting-edge productivity, making it a crucial component of San Marino's economic and cultural landscape. For those visiting, it offers a fascinating transition from the industrial borderlands to the tranquil heights of the Apennine foothills.",
    },
    facts: {
      de: ["Hier suchte der Heilige Marinus Zuflucht.", "Verfügt über einen modernen Motocross-Parcours.", "Reich an lokaler Flora."],
      hu: ["Szent Marinus itt keresett menedéket.", "Modern motocross pályával rendelkezik.", "Gazdag helyi flórával bír."],
      ro: ["Sfântul Marinus a căutat refugiu aici.", "Dispune de un circuit modern de motocross.", "Bogată în floră locală."],
      en: ["Saint Marinus sought refuge here.", "Features a modern motocross track.", "Rich in local flora."]
    },
    factsAdvanced: {
      de: ["Acquaviva hat eine Fläche von 4,86 km².", "Der Name bezieht sich auf die Quellen am Monte Cerreto.", "Gualdicciolo ist das wichtigste Industriegebiet der Gemeinde.", "Die Kirche Sant'Andrea Apostolo wurde 1894 umgebaut.", "Hier befindet sich der größte Naturpark San Marinos.", "Acquaviva grenzt an die italienischen Orte San Leo und Verucchio.", "Die Einwohnerzahl liegt bei rund 2.150 Personen.", "Die Motocross-Strecke Baldasserona ist international bekannt."],
      hu: ["Acquaviva területe 4,86 négyzetkilométer.", "Nevét a latin 'Aqua Viva' (élő víz) kifejezésből kapta.", "Itt található a köztársaság legnagyobb ipari övezete, Gualdicciolo.", "A Szent András templom alapjai a 10. századból származnak.", "A Monte Cerreto park területe több mint 20 hektár.", "Határos az olaszországi Emilia-Romagna régióval.", "A településen több mint 2100 lakos él.", "A címerben egy arany forrás látható kék mezőben."],
      ro: ["Acquaviva ocupă o suprafață de 4,86 km².", "Denumirea provine de la izvoarele abundente din regiune.", "Zona Gualdicciolo concentrează peste 30% din industria țării.", "Biserica principală este dedicată Sfântului Andrei.", "Găzduiește Parcul Natural Monte Cerreto.", "Se învecinează cu localitățile italiene Verucchio și San Leo.", "Populația este estimată la 2.100 de locuitori.", "Altitudinea centrului localității este de 412 metri."],
      en: ["Acquaviva covers an area of 4.86 square kilometers.", "The name refers to the fresh water springs in the area.", "Gualdicciolo is the primary industrial zone of the municipality.", "The Church of St. Andrew was built over a medieval structure.", "It contains the country's largest forest park, Monte Cerreto.", "The municipality borders the Italian region of Emilia-Romagna.", "The current population is approximately 2,140 residents.", "The Baldasserona track is a major venue for motocross events."],
    }, image: "/poi-images/SM-008.webp"},
  {
    id: "SM-009",
    type: "region",
    parent: "country-sanmarino",
    coords: [12.4419, 43.9406],
    name: { de: "Borgo Maggiore", hu: "Borgo Maggiore", ro: "Borgo Maggiore", en: "Borgo Maggiore" },
    description: {
      de: "Das wirtschaftliche Zentrum am Fuße des Monte Titano.",
      hu: "Gazdasági központ a Titano-hegy lábánál.",
      ro: "Centrul economic de la poalele Muntelui Titano.",
      en: "The economic center at the foot of Mount Titano."
    },
    descriptionAdvanced: {
      de: "Borgo Maggiore ist das wirtschaftliche und kommerzielle Herz der Republik San Marino und liegt direkt am Fuße des majestätischen Monte Titano. Mit einer Fläche von etwa 9,01 Quadratkilometern ist es eines der größten Castelli und dient als wichtigster Knotenpunkt zwischen der Hauptstadt San Marino (Stadt) und dem Rest des Landes sowie Italien. Historisch gesehen war Borgo Maggiore, früher bekannt als 'Mercatale', seit dem 12. Jahrhundert der Ort, an dem die großen Märkte und Messen stattfanden, was seinen Ruf als Handelszentrum begründete. Diese Tradition lebt bis heute in den wöchentlichen Märkten weiter, die auf der berühmten Piazza Grande abgehalten werden. Die UNESCO hat Borgo Maggiore zusammen mit dem historischen Zentrum von San Marino zum Weltkulturerbe erklärt, was die außergewöhnliche architektonische und historische Bedeutung des Ortes unterstreicht. Ein Wahrzeichen des Castellos ist der Glockenturm (Torre campanaria), der das Ortsbild dominiert und ein Symbol für die bürgerliche Freiheit ist. Eine Seilbahn (Funivia) verbindet Borgo Maggiore in wenigen Minuten mit dem Gipfel des Monte Titano, was sie zu einer der wichtigsten touristischen Attraktionen macht. Wirtschaftlich ist die Gemeinde durch eine hohe Dichte an Geschäften, Banken und Dienstleistungsunternehmen geprägt, was sie zum belebtesten Teil der Republik macht. Das staatliche Krankenhaus von San Marino befindet sich ebenfalls hier, was die zentrale Bedeutung der Gemeinde für die Infrastruktur unterstreicht. Geografisch bietet Borgo Maggiore beeindruckende Ausblicke auf die Festungskonstruktionen oberhalb und die Adria-Ebene unterhalb. Die Gemeinde beherbergt auch wichtige kulturelle Einrichtungen wie das Staatsarchiv. Trotz der intensiven kommerziellen Nutzung gibt es Wohngebiete, die eine hohe Lebensqualität bieten, sowie Sportanlagen wie das nationale Fußballstadion. Borgo Maggiore ist nicht nur ein Ort des Handels, sondern ein lebendiges Beispiel für die Kontinuität san-marinesischer Traditionen in einer modernen Welt.",
      hu: "Borgo Maggiore San Marino második legnépesebb castelloja és a köztársaság legfontosabb gazdasági és kereskedelmi központja. A 9,01 négyzetkilométeres terület közvetlenül a Monte Titano lábánál fekszik, és évszázadok óta a miniállam 'piacaként' (Mercatale) ismerik. A történelmi városmag 2008 óta az UNESCO Világörökség része, ami hűen tükrözi építészeti és kulturális értékét. A Piazza Grande, a település központi tere, ma is a heti vásárok helyszíne, ahol a helyi termelők kínálják portékáikat, megőrizve a 12. századi hagyományokat. Borgo Maggiore jelképe az elegáns óratorony, amely messziről útba igazítja az utazót. A település egyik legérdekesebb látványossága a kötélpálya (Funivia), amely alig két perc alatt juttatja fel a látogatókat a hegytetőn lévő fővárosba, lenyűgöző panorámát kínálva az Adriai-tenger felé. Gazdasági szempontból Borgo Maggiore megkerülhetetlen: itt koncentrálódik a legtöbb bank, iroda és kereskedelmi egység, valamint itt található a köztársaság központi kórháza is. A közlekedés központja is ez a castello, hiszen az Olaszország felől érkező főút itt válik el a belső utaktól. A sport szerelmesei számára a San Marino Stadium nyújt élményeket, amely a nemzeti válogatott otthona. A község lakói híresek pragmatizmusukról és kereskedővénájukról, ugyanakkor mélyen tisztelik a történelmi múltat, amelyet a szűk utcák és a középkori boltívek őriznek. Borgo Maggiore lüktetése adja a köztársaság életenergiáját, összekötve a hegycsúcson trónoló múltat a völgyben fejlődő modern jelennel. Az idelátogatók számára ez a castello kínálja a legteljesebb képet San Marino mindennapjairól, ahol a történelem nem múzeumi tárgy, hanem a mindennapi élet élő díszlete.",
      ro: "Borgo Maggiore reprezintă centrul vital al activității economice și comerciale din San Marino, fiind situat strategic la poalele Muntelui Titano. Cu o suprafață de 9,01 km², acest castello este a doua cea mai populată municipalitate a țării și joacă rolul de punct de legătură între capitală și zonele joase ale republicii. Cunoscut în trecut sub numele de 'Mercatale' (locul pieței), Borgo Maggiore a fost inima schimburilor comerciale încă din secolul al XII-lea, tradiție care se păstrează și astăzi prin târgurile săptămânale din Piazza Grande. Împreună cu centrul istoric al orașului San Marino, Borgo Maggiore este inclus în patrimoniul mondial UNESCO, recunoaștere ce atestă valoarea sa universală excepțională. Arhitectura locală este dominată de Turnul cu Ceas și de arcadele vechi care adăposteau odinioară negustorii. Un element tehnologic și turistic esențial este telecabina (Funivia), care face legătura rapidă cu vârful muntelui, oferind pasagerilor o vedere panoramică de neuitat asupra întregii regiuni. Economia locală este extrem de diversificată, găzduind sedii de bănci, companii de asigurări și numeroase unități de retail, fiind considerat principalul district de afaceri al națiunii. De asemenea, infrastructura socială este de prim rang, incluzând spitalul de stat și principalele instituții de învățământ secundar. Din punct de vedere geografic, Borgo Maggiore se întinde pe versanții inferiori ai muntelui, oferind un amestec de zone urbane dens populate și spații verzi relaxante. Comunitatea este una dintre cele mai cosmopolite din San Marino, participând activ la viața politică și culturală a republicii. Evenimentele culturale organizate aici, de la concerte în aer liber la expoziții de artă, atrag vizitatori din întreaga peninsulă italică. Borgo Maggiore nu este doar un loc de tranzit, ci o destinație în sine, unde spiritul antreprenorial sanmarinez se îmbină perfect cu respectul pentru istoria milenară a statului.",
      en: "Borgo Maggiore is the economic engine and commercial hub of the Republic of San Marino, situated at the base of Mount Titano. Spanning approximately 9.01 square kilometers, it is the second-largest municipality by population and serves as the vital link between the capital city and the rest of the country. Historically known as 'Mercatale,' the town has been the site of major markets and fairs since the 12th century, establishing its reputation as a center of trade. This legacy is preserved today in the weekly markets held in the Piazza Grande, the town's historic square. In 2008, Borgo Maggiore was inscribed as a UNESCO World Heritage site alongside the City of San Marino, recognizing its exceptional medieval and Renaissance architecture. The most iconic landmark is the Clock Tower (Torre campanaria), which overlooks the bustling streets. A cable car (Funivia) connects Borgo Maggiore to the summit of Mount Titano in just minutes, making it a primary entry point for tourists heading to the historic towers. Economically, the municipality is home to the largest concentration of financial institutions, shops, and services in the Republic, as well as the State Hospital. Geographically, it occupies a strategic position where the mountain's steep slopes meet the rolling hills leading to the Adriatic coast. The community is vibrant and diverse, hosting national sporting events at the San Marino Stadium and maintaining a rich cultural life with numerous theaters and archives. Borgo Maggiore represents the modern face of San Marino—busy, productive, and well-connected—while remaining deeply rooted in the centuries-old traditions of its marketplace origins. It is a place where history is lived through daily commerce and where the grandeur of the mountain is perfectly complemented by the vitality of the valley below.",
    },
    facts: {
      de: ["Wichtigster Marktplatz seit Jahrhunderten.", "Talstation der Seilbahn.", "Historisches Zentrum unter Denkmalschutz."],
      hu: ["Évszázadok óta a legfontosabb piactér.", "A drótkötélpálya völgyállomása.", "Műemlékvédelmi történelmi központ."],
      ro: ["Cea mai importantă piaţă de secole.", "Staţia de bază a telecabinei.", "Centru istoric protejat."],
      en: ["Most important marketplace for centuries.", "Lower station of the cable car.", "Protected historic center."]
    },
    factsAdvanced: {
      de: ["Borgo Maggiore umfasst eine Fläche von 9,01 km².", "Der historische Marktplatz wurde bereits im 12. Jahrhundert erwähnt.", "Die Gemeinde gehört zum UNESCO-Weltkulturerbe.", "Die Seilbahn zum Monte Titano wurde 1959 eröffnet.", "Hier befindet sich das nationale Fußballstadion (San Marino Stadium).", "Borgo Maggiore ist Sitz des staatlichen Krankenhauses.", "Die Piazza Grande ist der zentrale Platz der Gemeinde.", "Die Einwohnerzahl liegt bei über 6.600 Personen."],
      hu: ["Borgo Maggiore területe 9,01 négyzetkilométer.", "A középkorban 'Mercatale' néven volt ismert, mint kereskedelmi központ.", "2008 óta az UNESCO Világörökség részét képezi.", "A Funivia (kötélpálya) hossza körülbelül 338 méter.", "Itt található a köztársaság központi kórháza (Ospedale di Stato).", "A település óratornya a 19. század végén épült.", "A San Marino Stadium 6600 néző befogadására alkalmas.", "A község címere egy kék alapon álló várkastélyt ábrázol."],
      ro: ["Borgo Maggiore ocupă o suprafață de 9,01 km².", "Este considerat centrul comercial istoric al republicii.", "Telecabina transportă anual peste 400.000 de turiști.", "Localitatea găzduiește Arhivele de Stat ale San Marino.", "Biserica Beata Vergine della Consolazione a fost proiectată de Giovanni Michelucci.", "Este al doilea castello ca număr de locuitori după Serravalle.", "Se învecinează direct cu Serravalle, Domagnano și Faetano.", "Altitudinea în Piazza Grande este de 525 metri."],
      en: ["Borgo Maggiore spans a total area of 9.01 square kilometers.", "It was historically named 'Mercatale' due to its market function.", "The municipality has been a UNESCO World Heritage site since 2008.", "The cable car to the capital takes approximately 2 minutes.", "It is the home of San Marino’s main hospital and medical center.", "The Clock Tower was designed by architect Francesco Azzurri.", "The municipality is the key transport hub for the entire country.", "The population is approximately 6,640 residents."],
    },
  }
];

export const sanmarinoCities: POI[] = [
  {
    id: "city-san-marino", "sights": {
      "de": [
            {
                  "name": "Museo Armi Moderne",
                  "text": "Ein Museum in San Marino, das eine umfangreiche Sammlung moderner Waffen zeigt.",
                  "category": "museum",
                  "coords": [
                        12.446959,
                        43.936655
                  ]
            },
            {
                  "name": "Museo delle Armi Antiche",
                  "text": "Dieses Museum präsentiert historische Waffen und Rüstungen aus verschiedenen Epochen.",
                  "category": "museum",
                  "coords": [
                        12.451417,
                        43.932533
                  ]
            },
            {
                  "name": "Museo della Tortura",
                  "text": "Ein Museum, das historische Folterinstrumente und deren Geschichte dokumentiert.",
                  "category": "museum",
                  "coords": [
                        12.446905,
                        43.935249
                  ]
            },
            {
                  "name": "Castello della Guaita",
                  "text": "Die älteste der drei Festungen auf dem Monte Titano in San Marino.",
                  "category": "castle",
                  "coords": [
                        12.449286,
                        43.935224
                  ]
            },
            {
                  "name": "Torre del Montale",
                  "text": "Der dritte und kleinste der drei Türme auf dem Monte Titano.",
                  "category": "castle",
                  "coords": [
                        12.452474,
                        43.92999
                  ]
            },
            {
                  "name": "Serbatoio da plastilina",
                  "text": "Eine kuriose lokale Attraktion in San Marino.",
                  "category": "landmark",
                  "coords": [
                        12.450535,
                        43.933568
                  ]
            },
            {
                  "name": "Rovine di un fortilizio medievale",
                  "text": "Ruinen einer mittelalterlichen Befestigungsanlage in San Marino.",
                  "category": "historical",
                  "coords": [
                        12.4478,
                        43.911381
                  ]
            },
            {
                  "name": "Cavallo",
                  "text": "Ein Denkmal in der Stadt San Marino.",
                  "category": "historical",
                  "coords": [
                        12.448703,
                        43.931899
                  ]
            },
            {
                  "name": "L’elettromotrice \"AB-03\"",
                  "text": "Ein historischer Triebwagen, der als lokale Attraktion ausgestellt ist.",
                  "category": "landmark",
                  "coords": [
                        12.45034,
                        43.930147
                  ]
            },
            {
                  "name": "Kursaal Sala Congressi",
                  "text": "Ein Kultur- und Kongresszentrum in San Marino.",
                  "category": "cultural",
                  "coords": [
                        12.452055,
                        43.928347
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Museo Armi Moderne",
                  "text": "San Marinó-i múzeum, amely modern fegyverek gazdag gyűjteményét mutatja be.",
                  "category": "museum",
                  "coords": [
                        12.446959,
                        43.936655
                  ]
            },
            {
                  "name": "Museo delle Armi Antiche",
                  "text": "Ez a múzeum különböző korszakokból származó történelmi fegyvereket és páncélokat mutat be.",
                  "category": "museum",
                  "coords": [
                        12.451417,
                        43.932533
                  ]
            },
            {
                  "name": "Museo della Tortura",
                  "text": "Történelmi kínzóeszközöket és azok történetét dokumentáló múzeum.",
                  "category": "museum",
                  "coords": [
                        12.446905,
                        43.935249
                  ]
            },
            {
                  "name": "Castello della Guaita",
                  "text": "San Marino három hegytetői erődítménye közül a legrégebbi.",
                  "category": "castle",
                  "coords": [
                        12.449286,
                        43.935224
                  ]
            },
            {
                  "name": "Torre del Montale",
                  "text": "A Monte Titano három tornya közül a harmadik és egyben legkisebb.",
                  "category": "castle",
                  "coords": [
                        12.452474,
                        43.92999
                  ]
            },
            {
                  "name": "Serbatoio da plastilina",
                  "text": "Különleges helyi látnivaló San Marinóban.",
                  "category": "landmark",
                  "coords": [
                        12.450535,
                        43.933568
                  ]
            },
            {
                  "name": "Rovine di un fortilizio medievale",
                  "text": "Egy középkori erődítmény maradványai San Marinóban.",
                  "category": "historical",
                  "coords": [
                        12.4478,
                        43.911381
                  ]
            },
            {
                  "name": "Cavallo",
                  "text": "Egy emlékmű San Marino városában.",
                  "category": "historical",
                  "coords": [
                        12.448703,
                        43.931899
                  ]
            },
            {
                  "name": "L’elettromotrice \"AB-03\"",
                  "text": "Egy történelmi motorkocsi, amely helyi látványosságként van kiállítva.",
                  "category": "landmark",
                  "coords": [
                        12.45034,
                        43.930147
                  ]
            },
            {
                  "name": "Kursaal Sala Congressi",
                  "text": "Kulturális és kongresszusi központ San Marinóban.",
                  "category": "cultural",
                  "coords": [
                        12.452055,
                        43.928347
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Museo Armi Moderne",
                  "text": "Un muzeu din San Marino care expune o colecție vastă de arme moderne.",
                  "category": "museum",
                  "coords": [
                        12.446959,
                        43.936655
                  ]
            },
            {
                  "name": "Museo delle Armi Antiche",
                  "text": "Acest muzeu prezintă arme și armuri istorice din diferite epoci.",
                  "category": "museum",
                  "coords": [
                        12.451417,
                        43.932533
                  ]
            },
            {
                  "name": "Museo della Tortura",
                  "text": "Un muzeu care documentează instrumente de tortură istorice și contextul lor.",
                  "category": "museum",
                  "coords": [
                        12.446905,
                        43.935249
                  ]
            },
            {
                  "name": "Castello della Guaita",
                  "text": "Cea mai veche dintre cele trei fortărețe situate pe Muntele Titano din San Marino.",
                  "category": "castle",
                  "coords": [
                        12.449286,
                        43.935224
                  ]
            },
            {
                  "name": "Torre del Montale",
                  "text": "Al treilea și cel mai mic dintre cele trei turnuri de pe Muntele Titano.",
                  "category": "castle",
                  "coords": [
                        12.452474,
                        43.92999
                  ]
            },
            {
                  "name": "Serbatoio da plastilina",
                  "text": "O atracție locală curioasă din San Marino.",
                  "category": "landmark",
                  "coords": [
                        12.450535,
                        43.933568
                  ]
            },
            {
                  "name": "Rovine di un fortilizio medievale",
                  "text": "Ruinele unei fortificații medievale din San Marino.",
                  "category": "historical",
                  "coords": [
                        12.4478,
                        43.911381
                  ]
            },
            {
                  "name": "Cavallo",
                  "text": "Un monument în orașul San Marino.",
                  "category": "historical",
                  "coords": [
                        12.448703,
                        43.931899
                  ]
            },
            {
                  "name": "L’elettromotrice \"AB-03\"",
                  "text": "Un automotor istoric expus ca atracție locală.",
                  "category": "landmark",
                  "coords": [
                        12.45034,
                        43.930147
                  ]
            },
            {
                  "name": "Kursaal Sala Congressi",
                  "text": "Un centru cultural și de congrese din San Marino.",
                  "category": "cultural",
                  "coords": [
                        12.452055,
                        43.928347
                  ]
            }
      ],
      "en": [
            {
                  "name": "Museo Armi Moderne",
                  "text": "A museum in San Marino displaying an extensive collection of modern weapons.",
                  "category": "museum",
                  "coords": [
                        12.446959,
                        43.936655
                  ]
            },
            {
                  "name": "Sammarinese Museum of Ancient Arms",
                  "text": "This museum presents historical weapons and armor from various eras.",
                  "category": "museum",
                  "coords": [
                        12.451417,
                        43.932533
                  ]
            },
            {
                  "name": "Museo della Tortura",
                  "text": "A museum documenting historical torture instruments and their history.",
                  "category": "museum",
                  "coords": [
                        12.446905,
                        43.935249
                  ]
            },
            {
                  "name": "Guaita Castle",
                  "text": "The oldest of the three fortresses on Monte Titano in San Marino.",
                  "category": "castle",
                  "coords": [
                        12.449286,
                        43.935224
                  ]
            },
            {
                  "name": "Torre del Montale",
                  "text": "The third and smallest of the three towers on Monte Titano.",
                  "category": "castle",
                  "coords": [
                        12.452474,
                        43.92999
                  ]
            },
            {
                  "name": "Tank from plasticine",
                  "text": "A curious local attraction in San Marino.",
                  "category": "landmark",
                  "coords": [
                        12.450535,
                        43.933568
                  ]
            },
            {
                  "name": "Rovine di un fortilizio medievale",
                  "text": "Ruins of a medieval fortification in San Marino.",
                  "category": "historical",
                  "coords": [
                        12.4478,
                        43.911381
                  ]
            },
            {
                  "name": "Cavallo",
                  "text": "A monument located in the city of San Marino.",
                  "category": "historical",
                  "coords": [
                        12.448703,
                        43.931899
                  ]
            },
            {
                  "name": "L’elettromotrice \"AB-03\"",
                  "text": "A historical railcar displayed as a local attraction.",
                  "category": "landmark",
                  "coords": [
                        12.45034,
                        43.930147
                  ]
            },
            {
                  "name": "Kursaal Sala Congressi",
                  "text": "An arts and congress centre in San Marino.",
                  "category": "cultural",
                  "coords": [
                        12.452055,
                        43.928347
                  ]
            }
      ]
},
    type: "city",
    parent: "SM-007",
    coords: [12.4464, 43.9317],
    name: {
      de: "Stadt San Marino",
      hu: "San Marino város",
      ro: "Orașul San Marino",
      en: "City of San Marino"
    },
    description: {
      de: "Die Hauptstadt liegt auf dem Monte Titano und ist bekannt für ihre mittelalterlichen Festungsmauern und engen Kopfsteinpflasterstraßen.",
      hu: "A főváros a Titano-hegyen fekszik, és híres középkori várfalairól, valamint szűk macskaköves utcáiról.",
      ro: "Capitala este situată pe Muntele Titano și este cunoscută pentru zidurile sale medievale și străduțele înguste pietruite.",
      en: "The capital is located on Mount Titano and is known for its medieval fortresses and narrow cobblestone streets.",
      es: "La capital está situada en el monte Titano y es conocida por sus murallas medievales y sus estrechas calles empedradas.",
      pt: "A capital está situada no Monte Titano e é conhecida pelas suas muralhas medievais e ruas estreitas de paralelepípedos.",
      fr: "La capitale est située sur le mont Titano et est connue pour ses remparts médiévaux et ses étroites ruelles pavées.",
    },
    descriptionAdvanced: {
      de: "Die Stadt San Marino ist die Hauptstadt der gleichnamigen Republik, der ältesten bestehenden Republik der Welt, und liegt spektakulär an den Hängen des Monte Titano. Gegründet wurde die Siedlung laut Überlieferung im Jahr 301 n. Chr. durch den heiligen Marinus, der vor der Christenverfolgung unter Kaiser Diokletian floh. Die historische Altstadt ist von massiven mittelalterlichen Mauern umgeben und bewahrt ihren ursprünglichen Charakter durch enge Gassen und historische Gebäude aus Stein. Im Jahr 2008 wurde die Stadt zusammen mit dem Monte Titano in die Liste des UNESCO-Welterbes aufgenommen, da sie ein außergewöhnliches Zeugnis einer freien mittelalterlichen Kommune darstellt. Zu den wichtigsten Sehenswürdigkeiten gehören die drei Befestigungstürme, der Palazzo Pubblico und die Basilika von San Marino. Trotz ihrer geringen Größe von etwa 7 Quadratkilometern zieht die Stadt jährlich Millionen von Touristen an. Das Stadtbild bietet atemberaubende Panoramablicke über die Region Emilia-Romagna bis hin zur Adriaküste.",
      hu: "San Marino városa az azonos nevű köztársaság fővárosa, amely a világ legrégebbi, ma is fennálló köztársasága, és a Monte Titano északnyugati oldalán fekszik. A települést a legenda szerint 301-ben alapította Szent Marinus kőfaragó, aki a Diocletianus császár alatti keresztényüldözés elől menekült ide. A történelmi városmagot masszív középkori várfalak veszik körül, és szűk, meredek utcái mentén számos faragott kőépület maradt fenn épségben. 2008-ban a várost és a Monte Titanót az UNESCO a Világörökség részévé nyilvánította, mint a független városállami fejlődés kivételes példáját. A város politikai központja a Piazza della Libertà, ahol a Palazzo Pubblico épülete áll. San Marino nemcsak történelmi jelentősége, hanem lenyűgöző panorámája miatt is népszerű, ahonnan tiszta időben az Adria partja is látható. Az autóforgalom elől nagyrészt elzárt óváros hűen őrzi a középkori szabadság szellemét és építészeti örökségét.",
      ro: "Oraşul San Marino este capitala Republicii San Marino, cea mai veche republică din lume încă existentă, fiind situat pe versanţii vestici ai Muntelui Titano. Conform tradiţiei, aşezarea a fost fondată în anul 301 d.Hr. de către Sfântul Marinus, un tăietor în piatră care căuta refugiu în faţa persecuţiilor creştine ale împăratului Diocleţian. Centrul istoric este fortificat cu ziduri medievale impunătoare şi păstrează o structură urbană autentică, caracterizată prin străduţe înguste şi clădiri monumentale din piatră. În anul 2008, oraşul şi Muntele Titano au fost incluse în patrimoniul mondial UNESCO ca mărturie a continuităţii unei comunităţi libere încă din Evul Mediu. Principalele repere includ cele trei turnuri de apărare, Palazzo Pubblico şi Basilica San Marino, care adăposteşte moaştele sfântului fondator. Deşi are o populaţie de aproximativ 4.000 de locuitori, oraşul este un centru turistic şi comercial vibrant, oferind panorame spectaculoase asupra regiunii înconjurătoare şi a coastei adriatice.",
      en: "The City of San Marino is the capital of the Republic of San Marino, the world's oldest surviving republic, dramatically perched on the slopes of Monte Titano. According to tradition, the settlement was founded in 301 AD by Saint Marinus, a stonemason seeking refuge from the Christian persecutions of Emperor Diocletian. The historic center is enclosed by massive medieval walls and retains its authentic character with narrow winding streets and ancient stone buildings. In 2008, the city and Monte Titano were inscribed as a UNESCO World Heritage site, recognized as an exceptional example of a free medieval commune. Key landmarks include the three defensive towers, the Palazzo Pubblico, and the Basilica di San Marino, which holds the relics of the patron saint. Despite its small population of around 4,000, the city attracts millions of visitors annually for its rich history and stunning views. Its elevated position offers panoramic vistas stretching across the Emilia-Romagna region to the Adriatic coast.",
      es: "La ciudad de San Marino es una joya arquitectónica que se alza sobre el paisaje y cautiva a los viajeros con su encanto medieval.",
      pt: "A cidade de San Marino é uma joia arquitetónica que se ergue sobre a paisagem e encanta os viajantes com o seu charme medieval.",
      fr: "La ville de Saint-Marin est un joyau architectural qui domine le paysage et enchante les voyageurs par son charme médiéval.",
    },
    facts: {
      de: [
        "Die Altstadt ist UNESCO-Welterbe.",
        "Der Palazzo Pubblico ist der Sitz der Regierung.",
        "Es gibt zahlreiche zollfreie Geschäfte.",
        "Die Stadt bietet spektakuläre Ausblicke bis zur Adria."
      ],
      hu: [
        "Az óváros UNESCO világörökség.",
        "A Palazzo Pubblico a kormány székhelye.",
        "Számos vámmentes üzlet található itt.",
        "Látványos kilátás nyílik egészen az Adriai-tengerig."
      ],
      ro: [
        "Centrul vechi este în Patrimoniul Mondial UNESCO.",
        "Palazzo Pubblico este sediul guvernului.",
        "Există numeroase magazine duty-free.",
        "Orașul oferă vederi spectaculoase până la Marea Adriatică."
      ],
      en: [
        "The old town is a UNESCO World Heritage site.",
        "The Palazzo Pubblico is the seat of government.",
        "There are numerous duty-free shops.",
        "The city offers spectacular views all the way to the Adriatic Sea."
      ],
      es: ["El casco antiguo es Patrimonio de la Humanidad por la UNESCO.", "El Palazzo Pubblico es la sede del gobierno.", "Hay numerosas tiendas libres de impuestos.", "La ciudad ofrece vistas espectaculares hasta el mar Adriático."],
      pt: ["O centro histórico é Património Mundial da UNESCO.", "O Palazzo Pubblico é a sede do governo.", "Existem inúmeras lojas isentas de impostos.", "A cidade oferece vistas espetaculares até ao Mar Adriático."],
      fr: ["La vieille ville est classée au patrimoine mondial de l'UNESCO.", "Le Palazzo Pubblico est le siège du gouvernement.", "On y trouve de nombreuses boutiques hors taxes.", "La ville offre des vues spectaculaires jusqu'à la mer Adriatique."],
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 301 n. Chr.", "Hauptstadt der ältesten Republik", "UNESCO-Welterbe seit 2008", "Liegt auf einer Höhe von 749 m", "Umgeben von drei Verteidigungsmauern", "Bevölkerung ca. 4.000 Einwohner"],
      hu: ["Alapítási éve 301. szeptember 3.", "A világ legrégebbi köztársaságának fővárosa", "2008 óta UNESCO Világörökségi helyszín", "Tengerszint feletti magassága 749 méter", "Várfalai a 11-14. század között épültek", "Lakossága körülbelül 4000 fő"],
      ro: ["Fondat la 3 septembrie 301 d.Hr.", "Capitala celei mai vechi republici", "Inclus în patrimoniul UNESCO din 2008", "Altitudinea maximă de 749 metri", "Sediul Guvernului în Palazzo Pubblico", "Populaţie de aproximativ 4.000 locuitori"],
      en: ["Founded on September 3, 301 AD", "Capital of the world's oldest republic", "UNESCO World Heritage site since 2008", "Located at an altitude of 749 meters", "Enclosed by three layers of defensive walls", "Home to approximately 4,000 residents"],
      es: ["Toda la zona de la ciudad está bajo estricta protección de monumentos.", "Se celebran regularmente festividades estatales en la ciudad.", "Las calles estrechas suelen ser solo peatonales.", "Hay una gran variedad de pequeñas tiendas de artesanía.", "La ciudad ofrece una excelente visión de la historia de la Edad Media.", "Una visita al atardecer es especialmente recomendable."],
      pt: ["Toda a área da cidade está sob rigorosa proteção de monumentos.", "Realizam-se regularmente celebrações estatais na cidade.", "As ruas estreitas são maioritariamente acessíveis apenas a peões.", "Existe uma variedade de pequenas lojas de artesanato.", "A cidade oferece uma excelente perspetiva da história da Idade Média.", "Uma visita ao pôr do sol é particularmente recomendável."],
      fr: ["L'ensemble du territoire urbain est soumis à une protection stricte des monuments historiques.", "Des cérémonies officielles y sont régulièrement organisées.", "Les ruelles étroites sont pour la plupart réservées aux piétons.", "Il existe une multitude de petites boutiques d'artisanat d'art.", "La ville offre un excellent aperçu de l'histoire du Moyen Âge.", "Une visite au coucher du soleil est particulièrement recommandée."],
    },
    image: "/geo-images/sanmarino/city-san-marino.webp"
  },
];

export const sanmarinoCulture: POI[] = [
  {
    id: "cult-guaita",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4485, 43.9360],
    name: {
      de: "Guaita (Erster Turm)",
      hu: "Guaita (Első Torony)",
      ro: "Guaita (Primul Turn)",
      en: "Guaita (First Tower)"
    },
    description: {
      de: "Der Guaita ist der älteste und größte der drei Türme auf dem Monte Titano, der im 11. Jahrhundert erbaut wurde.",
      hu: "A Guaita a Titano-hegy három tornya közül a legrégebbi és a legnagyobb, a 11. században épült.",
      ro: "Guaita este cel mai vechi și cel mai mare dintre cele drei turnuri de pe Muntele Titano, construit în secolul al XI-lea.",
      en: "The Guaita is the oldest and largest of the three towers on Mount Titano, built in the 11th century.",
      es: "El Guaita es la más antigua y grande de las tres torres del Monte Titano, construida en el siglo XI.",
      pt: "O Guaita é a mais antiga e maior das três torres do Monte Titano, construída no século XI.",
      fr: "La Guaita est la plus ancienne et la plus grande des trois tours du mont Titano, construite au XIe siècle.",
    },
    descriptionAdvanced: {
      de: "Der Guaita-Turm, auch bekannt als Prima Torre, ist der älteste und größte der drei Verteidigungstürme auf dem Monte Titano in San Marino. Er wurde im 11. Jahrhundert erbaut und diente jahrhundertelang als strategischer Wachposten und Zufluchtsort für die Bewohner der Stadt. Die Festung zeichnet sich durch einen fünfeckigen Grundriss aus und wurde ohne Fundamente direkt auf dem Felsen errichtet. Im Inneren befinden sich eine kleine Kapelle, die der heiligen Barbara gewidmet ist, sowie Glockentürme, die früher zur Warnung vor feindlichen Angriffen genutzt wurden. Bis zum Jahr 1970 diente der Turm auch als Gefängnis, was ihm eine zusätzliche historische Bedeutung verleiht. Der Guaita ist über einen Panoramaweg mit den anderen beiden Türmen verbunden und bietet einen weiten Blick über das Land. Er ist ein markantes Symbol für die Unabhängigkeit San Marinos und ein wesentlicher Bestandteil des UNESCO-Welterbes. Die massive Steinarchitektur spiegelt die militärische Baukunst des Mittelalters wider.",
      hu: "A Guaita-torony, más néven az Első Torony (Prima Torre), a Monte Titano három híres erődítménye közül a legrégebbi és a legnagyobb. A 11. században épült, és évszázadokon át stratégiai védelmi pontként, valamint a lakosság menedékhelyeként szolgált támadások idején. Az erőd ötszögletű alaprajzzal rendelkezik, és különlegessége, hogy közvetlenül a sziklára építették, alapozás nélkül. A belső udvarban található egy kis kápolna, amelyet Szent Borbálának szenteltek, valamint egy harangtorony, amely egykor veszély esetén riasztotta a várost. Érdekesség, hogy a torony 1970-ig börtönként is funkcionált, ma pedig múzeumként látogatható. A Guaita egy látványos gyalogúton, a Passo delle Streghe-n keresztül kapcsolódik a többi toronyhoz. San Marino címerében is szerepel, mint a nemzeti szabadság és függetlenség jelképe. A robusztus kőfalakról lenyűgöző kilátás nyílik az Appenninek vonulataira és az Adriai-tengerre.",
      ro: "Turnul Guaita, cunoscut şi sub numele de Prima Torre, este cel mai vechi şi cel mai impunător dintre cele trei fortificaţii de pe Muntele Titano din San Marino. Construit în secolul al XI-lea, turnul a servit timp de secole ca punct strategic de apărare şi refugiu pentru locuitorii oraşului în perioade de asediu. Fortăreaţa are un plan pentagonal şi este ridicată direct pe stâncă, fără fundaţii clasice, demonstrând măiestria constructorilor medievali. În interior se află o capelă dedicată Sfintei Barbara şi un turn cu clopot care era utilizat pentru a anunţa urgenţele sau atacurile iminente. Până în anul 1970, anumite zone ale turnului au fost utilizate ca închisoare de stat. Guaita este legat de celelalte turnuri prin drumul de strajă, oferind vizitatorilor o perspectivă unică asupra arhitecturii militare a epocii. Turnul este un simbol central al suveranităţii statului, fiind reprezentat pe drapelul şi stema naţională a Republicii San Marino.",
      en: "Guaita Tower, also known as the First Tower (Prima Torre), is the oldest and largest of the three defensive towers on Monte Titano in San Marino. Built in the 11th century, it served for centuries as a strategic watchtower and a refuge for the citizens during times of conflict. The fortress features a pentagonal plan and was constructed directly onto the rock surface without foundations. Inside, visitors can find a small chapel dedicated to Saint Barbara and a bell tower that was once used to signal emergencies to the community. Historically, the tower functioned as a state prison until as recently as 1970. Guaita is connected to the other towers by a scenic ridge path, providing breathtaking views of the surrounding countryside. It remains a powerful symbol of San Marino's enduring independence and is prominently featured on the nation's coat of arms and flag. The massive stone walls stand as a testament to medieval military architecture.",
      es: "Como la estructura defensiva más antigua de San Marino, el Guaita se alza orgulloso sobre el Monte Titano y es hoy una visita obligada para cualquier turista.",
      pt: "Como a estrutura defensiva mais antiga de San Marino, o Guaita ergue-se orgulhosamente no Monte Titano e é hoje uma paragem obrigatória para qualquer visitante.",
      fr: "En tant que plus ancien ouvrage défensif de Saint-Marin, la Guaita trône fièrement sur le mont Titano et constitue aujourd'hui un passage obligé pour tout visiteur.",
    },
    facts: {
      de: [
        "Der Turm diente lange Zeit als Gefängnis.",
        "Er wurde auf einer festen Felsbasis ohne Fundament errichtet.",
        "Das Gebäude wurde mehrfach restauriert, zuletzt im 20. Jahrhundert.",
        "Er ist auf der san-marinesischen 5-Cent-Münze abgebildet."
      ],
      hu: [
        "A torony sokáig börtönként szolgált.",
        "Szilárd sziklaalapra épült alapozás nélkül.",
        "Az épületet többször felújították, legutóbb a 20. században.",
        "A san marinói 5 centes érmén is szerepel."
      ],
      ro: [
        "Turnul a servit mult timp ca închisoare.",
        "A fost construit pe o bază de stâncă solidă fără fundație.",
        "Clădirea a fost restaurată de mai multe ori, cel mai recent în secolul XX.",
        "Este reprezentat pe moneda de 5 cenți din San Marino."
      ],
      en: [
        "The tower served as a prison for a long time.",
        "It was built on a solid rock base with no foundation.",
        "The building has been restored several times, most recently in the 20th century.",
        "It is depicted on the Sammarinese 5-cent coin."
      ],
      es: ["La torre sirvió como prisión durante mucho tiempo.", "Fue construida sobre una base de roca sólida sin cimientos.", "El edificio ha sido restaurado varias veces, la última en el siglo XX.", "Aparece en la moneda de 5 céntimos de San Marino."],
      pt: ["A torre serviu como prisão durante muito tempo.", "Foi construída sobre uma base rochosa sólida, sem fundações.", "O edifício foi restaurado várias vezes, a última no século XX.", "Está representada na moeda de 5 cêntimos de San Marino."],
      fr: ["La tour a longtemps servi de prison.", "Elle a été érigée sur une base rocheuse solide sans fondations.", "Le bâtiment a été restauré à plusieurs reprises, la dernière fois au XXe siècle.", "Elle est représentée sur la pièce de 5 centimes de Saint-Marin."],
    },
    factsAdvanced: {
      de: ["Bau im 11. Jahrhundert begonnen", "Ältester der drei Türme", "Gefängnisnutzung bis 1970", "Fünfeckiger Grundriss", "Kapelle der heiligen Barbara im Inneren", "Bestandteil des UNESCO-Welterbes"],
      hu: ["A 11. században épült", "San Marino legrégebbi erődítménye", "1970-ig börtönként működött", "Ötszögletű alaprajz jellemzi", "Szent Borbála-kápolna található benne", "Szerepel a köztársaság címerében"],
      ro: ["Construit în secolul al XI-lea", "Cea mai veche dintre cele trei turnuri", "Utilizat ca închisoare până în 1970", "Plan arhitectural pentagonal", "Găzduieşte Capela Sfintei Barbara", "Inclus în patrimoniul mondial UNESCO"],
      en: ["Built in the 11th century", "Oldest of the three towers", "Used as a prison until 1970", "Features a pentagonal layout", "Contains the Chapel of Saint Barbara", "Featured on the national coat of arms"],
      es: ["La estructura original tiene más de 900 años.", "Desde arriba se ofrece una de las mejores vistas de todo el país.", "La solución arquitectónica sin cimientos es una obra maestra de la época.", "El Guaita es el símbolo más fuerte de la independencia nacional.", "La historia defensiva está documentada por hallazgos arqueológicos.", "La estructura ha sobrevivido a numerosos ataques."],
      pt: ["A estrutura tem mais de 900 anos.", "Do topo, oferece-se uma das melhores vistas de todo o país.", "A solução arquitetónica sem fundações é uma obra-prima da época.", "O Guaita é o símbolo mais forte da independência nacional.", "A história da defesa é comprovada por achados arqueológicos.", "A estrutura sobreviveu a inúmeros ataques."],
      fr: ["La structure du bâtiment a plus de 900 ans.", "D'en haut, on profite de l'une des meilleures vues sur tout le pays.", "La solution architecturale sans fondations est un chef-d'œuvre de l'époque.", "La Guaita est le symbole le plus fort de l'indépendance nationale.", "L'histoire défensive est attestée par des découvertes archéologiques.", "L'édifice a survécu à de nombreuses attaques."],
    },
    image: "/geo-images/sanmarino/cult-guaita.webp"
  },
  {
    id: "cult-cesta",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4490, 43.9320],
    name: {
      de: "Cesta (Zweiter Turm)",
      hu: "Cesta (Második Torony)",
      ro: "Cesta (Al doilea Turn)",
      en: "Cesta (Second Tower)"
    },
    description: {
      de: "Der Cesta-Turm steht auf dem höchsten Punkt des Monte Titano und beherbergt das Museum für alte Waffen.",
      hu: "A Cesta-torony a Titano-hegy legmagasabb pontján áll, és a régi fegyverek múzeumának ad otthont.",
      ro: "Turnul Cesta stă pe cel mai înalt punct al Muntelui Titano și găzduiește Muzeul Armelor Antice.",
      en: "The Cesta tower stands on the highest peak of Mount Titano and houses the Museum of Ancient Arms.",
      es: "La torre Cesta se encuentra en el punto más alto del monte Titano y alberga el Museo de Armas Antiguas.",
      pt: "A torre Cesta situa-se no ponto mais alto do Monte Titano e alberga o Museu de Armas Antigas.",
      fr: "La tour Cesta se dresse sur le point le plus élevé du mont Titano et abrite le musée des armes anciennes.",
    },
    descriptionAdvanced: {
      de: "Der Cesta-Turm, auch bekannt als Seconda Torre, thront auf dem höchsten Gipfel des Monte Titano, der Fratta, in einer Höhe von 756 Metern. Er wurde im 13. Jahrhundert auf den Überresten eines antiken römischen Kastells errichtet und war ein wesentlicher Bestandteil der zweiten Verteidigungslinie San Marinos. Der Turm hat einen fünfeckigen Grundriss und wurde im Laufe der Jahrhunderte mehrfach restauriert, zuletzt in den 1920er Jahren, um seinen mittelalterlichen Glanz zu bewahren. Seit 1956 beherbergt die Festung das Museum für Alte Waffen, das eine beeindruckende Sammlung von über 1.500 Exponaten umfasst, darunter Rüstungen, Schwerter und frühe Feuerwaffen. Die Lage auf dem höchsten Punkt bietet den spektakulärsten Rundumblick über die gesamte Republik und das Umland. Der Cesta-Turm ist über den berühmten \"Hexenpass\" (Passo delle Streghe) mit dem Guaita-Turm verbunden. Er ist nicht nur ein militärhistorisches Denkmal, sondern auch ein architektonisches Juwel, das die strategische Bedeutung des Monte Titano unterstreicht.",
      hu: "A Cesta-torony, más néven a Második Torony (Seconda Torre), a Monte Titano legmagasabb pontján, a 756 méter magas Fratta-csúcson található. A 13. században épült egy korábbi római erőd maradványaira, és San Marino második védelmi vonalának kulcsfontosságú eleme volt. Az ötszögletű alaprajzú épületet az évszázadok során többször megerősítették, mai formáját jórészt az 1920-as évek nagy restaurálása során nyerte el. 1956 óta itt működik a Régi Fegyverek Múzeuma, amely több mint 1500 kiállítási tárgyat, köztük páncélokat, kardokat és korai tűzfegyvereket mutat be a középkortól a 19. századig. Elhelyezkedése miatt innen nyílik a legteljesebb panoráma a köztársaság területére és az Adriai-tengerre. A toronyhoz vezető látványos Passo delle Streghe (Boszorkányok hágója) az egyik legnépszerűbb sétaútvonal a látogatók körében. A Cesta-torony méltóságteljes sziluettje elengedhetetlen része San Marino látképének és történelmi identitásának.",
      ro: "Turnul Cesta, denumit şi Seconda Torre, este situat pe cel mai înalt vârf al Muntelui Titano, numit Fratta, la o altitudine de 756 metri. Edificiul a fost ridicat în secolul al XIII-lea pe fundaţiile unei foste fortăreţe romane, devenind un punct esenţial al celei de-a doua centuri de fortificaţii a oraşului. Turnul are o formă pentagonală şi a suferit diverse transformări arhitecturale, fiind restaurat extensiv în anul 1924 pentru a-şi recupera aspectul medieval original. Din anul 1956, fortăreaţa găzduieşte Muzeul de Arme Vechi, care expune o colecţie impresionantă de peste 1.500 de piese, de la armuri şi spade până la arme de foc timpurii. Fiind situat la cota maximă a muntelui, turnul oferă cea mai vastă panoramă asupra întregii republici şi a coastei italiene din depărtare. Accesul se face prin drumul pitoresc Passo delle Streghe, care leagă primele două turnuri. Turnul Cesta rămâne o dovadă vie a capacităţii defensive şi a bogăţiei istorice a micii enclave italiene.",
      en: "Cesta Tower, also known as the Second Tower (Seconda Torre), is located on the highest peak of Monte Titano, known as Fratta, at an altitude of 756 meters. Constructed in the 13th century atop the ruins of an ancient Roman fortress, it formed a vital part of San Marino's second defensive wall system. The tower features a pentagonal layout and underwent significant restoration in the 1920s to preserve its medieval aesthetic. Since 1956, the fortress has housed the Museum of Ancient Arms, showcasing an extensive collection of over 1,500 artifacts, including armor, swords, and early firearms dating from the Middle Ages to the 19th century. Its position at the mountain's highest point offers the most spectacular 360-degree views of the republic and the distant Adriatic coast. Cesta is connected to the Guaita Tower via the scenic \"Passo delle Streghe\" (Path of the Witches). It stands as a remarkable historical monument, highlighting the strategic military importance of Monte Titano throughout the centuries.",
      es: "Esta torre no es solo un hito arquitectónico, sino que ofrece con el museo de armas un emocionante viaje en el tiempo a la Edad Media militar.",
      pt: "Esta torre não é apenas um destaque arquitetónico, mas oferece, com o museu de armas, uma viagem emocionante no tempo até à Idade Média militar.",
      fr: "Cette tour n'est pas seulement un monument architectural, elle propose aussi, avec son musée des armes, un voyage passionnant dans le temps du Moyen Âge militaire.",
    },
    facts: {
      de: [
        "Er wurde im 13. Jahrhundert auf den Überresten einer älteren römischen Festung erbaut.",
        "Das Museum enthält über 500 Waffen aus dem Mittelalter.",
        "Der Turm bietet einen der besten Panoramablicke.",
        "Er wird auf der san-marinesischen 1-Cent-Münze dargestellt."
      ],
      hu: [
        "A 13. században épült egy régebbi római erőd romjain.",
        "A múzeumban több mint 500 középkori fegyver található.",
        "A toronyból nyílik az egyik legjobb panoráma.",
        "A san marinói 1 centes érmén ábrázolják."
      ],
      ro: [
        "A fost construit în secolul al XIII-lea pe rămășițele unui vechi fort roman.",
        "Muzeul conține peste 500 de arme din Evul Mediu.",
        "Turnul oferă una dintre cele mai bune vederi panoramice.",
        "Este reprezentat pe moneda de 1 cent din San Marino."
      ],
      en: [
        "It was built in the 13th century on the remains of an older Roman fort.",
        "The museum contains over 500 weapons dating back to the Middle Ages.",
        "The tower offers one of the best panoramic views.",
        "It is depicted on the Sammarinese 1-cent coin."
      ],
      es: ["Fue construida en el siglo XIII sobre los restos de una antigua fortaleza romana.", "El museo contiene más de 500 armas de la Edad Media.", "La torre ofrece una de las mejores vistas panorámicas.", "Aparece representada en la moneda de 1 céntimo de San Marino."],
      pt: ["Foi construída no século XIII sobre os restos de uma antiga fortaleza romana.", "O museu contém mais de 500 armas da Idade Média.", "A torre oferece uma das melhores vistas panorâmicas.", "É representada na moeda de 1 cêntimo de San Marino."],
      fr: ["Elle a été construite au XIIIe siècle sur les vestiges d'une ancienne forteresse romaine.", "Le musée contient plus de 500 armes du Moyen Âge.", "La tour offre l'une des meilleures vues panoramiques.", "Elle est représentée sur la pièce de 1 centime de Saint-Marin."],
    },
    factsAdvanced: {
      de: ["Bau im 13. Jahrhundert auf römischen Ruinen", "Höchster Punkt San Marinos (756 m)", "Museum für Alte Waffen seit 1956 eröffnet", "Über 1.500 historische Waffen ausgestellt", "Fünfeckiger Grundriss der Anlage", "Liegt auf dem Gipfel der Fratta"],
      hu: ["A 13. században épült római alapokra", "756 méteres magasságban található", "Régi Fegyverek Múzeuma található benne", "A múzeum 1956-ban nyílt meg", "Több mint 1500 fegyvert mutat be", "A Monte Titano legmagasabb pontja"],
      ro: ["Ridicată în secolul al XIII-lea", "Situată la cota maximă de 756 metri", "Găzduieşte Muzeul de Arme Vechi din 1956", "Colecţie de peste 1.500 de exponate", "Construită pe ruinele unui castru roman", "Punctul culminant al Muntelui Titano"],
      en: ["Built in the 13th century on Roman ruins", "Highest point in San Marino (756m)", "Houses the Museum of Ancient Arms", "Museum opened to the public in 1956", "Exhibits over 1,500 historic weapons", "Located on the Fratta summit"],
      es: ["El museo ha sido ampliado y modernizado sistemáticamente.", "La colección de armas es una de las más importantes de su tipo en la región.", "La vista desde el punto más alto es conocida mucho más allá del monte Titano.", "Los orígenes romanos subrayan la profundidad histórica del lugar.", "El edificio es un ejemplo perfecto de la tecnología defensiva medieval.", "Cesta es un punto importante de identidad cultural."],
      pt: ["O museu foi sistematicamente ampliado e modernizado.", "A coleção de armas é uma das mais importantes do seu género na região.", "A vista do ponto mais alto é conhecida muito para além do Monte Titano.", "As origens romanas sublinham a profundidade histórica do local.", "O edifício é um exemplo perfeito da tecnologia defensiva medieval.", "Cesta é um importante ponto de identificação cultural."],
      fr: ["Le musée a été systématiquement agrandi et modernisé.", "La collection d'armes est l'une des plus importantes du genre dans la région.", "La vue depuis le point culminant est célèbre bien au-delà du mont Titano.", "Les origines romaines soulignent la profondeur historique du site.", "L'édifice est un exemple parfait de la technique de défense médiévale.", "Cesta est un point de repère culturel majeur."],
    },
    image: "/geo-images/sanmarino/cult-cesta.webp"
  },
  {
    id: "cult-montale",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4498, 43.9295],
    name: {
      de: "Montale (Dritter Turm)",
      hu: "Montale (Harmadik Torony)",
      ro: "Montale (Al treilea Turn)",
      en: "Montale (Third Tower)"
    },
    description: {
      de: "Der Montale ist der kleinste der drei Türme. Im Gegensatz zu den anderen ist er nicht für die Öffentlichkeit zugänglich.",
      hu: "A Montale a legkisebb a három torony közül. A többivel ellentétben ez nem látogatható a nagyközönség számára.",
      ro: "Montale este cel mai mic dintre cele trei turnuri. Spre deosebire de celelalte, nu este deschis publicului.",
      en: "The Montale is the smallest of the three towers. Unlike the others, it is not open to the public.",
      es: "El Montale es la más pequeña de las tres torres. A diferencia de las otras, no está abierta al público.",
      pt: "O Montale é a mais pequena das três torres. Ao contrário das outras, não está aberta ao público.",
      fr: "La Montale est la plus petite des trois tours. Contrairement aux autres, elle n'est pas ouverte au public.",
    },
    descriptionAdvanced: {
      de: "Der Montale-Turm, die Terza Torre, ist der kleinste und abgelegenste der drei Verteidigungstürme von San Marino. Er wurde im 14. Jahrhundert erbaut, um die Verteidigungslinie auf dem Monte Titano zu vervollständigen und vor Angriffen der Malatesta aus der benachbarten Region Rimini zu warnen. Im Gegensatz zu den anderen beiden Türmen ist der Montale nicht für die Öffentlichkeit zugänglich und besitzt keinen begehbaren Innenbereich, außer einem tiefen Verlies. Dieses acht Meter tiefe Verlies, bekannt als \"Il Fondo della Torre\", wurde in der Vergangenheit als Gefängnis genutzt. Der Turm hat einen schlanken, quadratischen Grundriss und steht isoliert am östlichen Ende des Bergrückens. Trotz seiner bescheidenen Größe spielte er eine entscheidende Rolle als Ausguck, da er einen weiten Blick über das Tal ermöglichte. Umgeben von dichtem Wald, bietet die Umgebung des Turms eine ruhige Atmosphäre für Wanderer. Der Montale ist ein integraler Bestandteil des UNESCO-Welterbes und vervollständigt das ikonische Bild der drei Gipfel von San Marino.",
      hu: "A Montale-torony, San Marino harmadik tornya (Terza Torre), a Monte Titano három erődítménye közül a legkisebb és legelszigeteltebb. A 14. században épült azzal a céllal, hogy teljessé tegye a védelmi hálózatot, és figyelmeztesse a várost a szomszédos Rimini urai, a Malatesták felől érkező fenyegetésekre. A másik két toronytól eltérően a Montale belseje nem látogatható a nagyközönség számára, csak a külső falai és a környező park tekinthető meg. Az épület egyetlen bejárata több méter magasan található, belsejében pedig egy nyolc méter mély, börtönként használt verem található, amelyet \"Il Fondo della Torre\" néven ismernek. Négyszögletű, karcsú sziluettje távolabb esik a város központjától, sűrű növényzettel körülvett területen. Stratégiai jelentősége őrtoronyként kiemelkedő volt, hiszen innen nyílt a legjobb rálátás az ellenséges mozgásokra. A Montale a köztársaság címerében a harmadik tollat szimbolizálja az ikonikus tornyok felett, és fontos részét képezi az UNESCO Világörökségi védelemnek.",
      ro: "Turnul Montale, cunoscut ca Terza Torre, este cea mai mică şi izolată dintre cele trei fortificaţii emblematice ale Republicii San Marino de pe Muntele Titano. Construit în secolul al XIV-lea, acesta a avut un rol strategic esenţial în sistemul defensiv, fiind destinat monitorizării mişcărilor trupelor familiei rivale Malatesta din Rimini. Spre deosebire de Guaita şi Cesta, Montale nu dispune de un interior amenajat pentru vizitare, fiind o structură masivă cu o singură intrare situată la înălţime. În interior se află o groapă adâncă de opt metri, denumită \"Il Fondo della Torre\", care servea în trecut drept închisoare. Turnul are o formă patrulateră zveltă şi este situat la extremitatea estică a crestei muntoase, fiind înconjurat de o vegetaţie bogată. Deşi accesul în interior este restricţionat, zona din jur este populară printre turişti pentru linişte şi priveliştile panoramice asupra văii. Montale completează triada defensivă reprezentată pe stema naţională, simbolizând rezistenţa istorică a micii enclave.",
      en: "Montale Tower, the Third Tower (Terza Torre), is the smallest and most secluded of the three defensive structures on Monte Titano in San Marino. Built in the 14th century, its primary purpose was to complete the defensive line and watch for potential threats from the rival Malatesta family in nearby Rimini. Unlike the other two towers, the interior of Montale is not open to the public and it features a single high-level entrance for security. Inside, there is an eight-meter-deep pit known as \"Il Fondo della Torre,\" which was historically used as a prison. The tower has a slender, quadrilateral plan and stands isolated on the easternmost ridge of the mountain. Despite its modest size, it played a crucial role as a lookout post, offering extensive visibility over the surrounding valleys. Surrounded by lush forest, the area around the tower provides a peaceful retreat for hikers. Montale is an essential component of the UNESCO World Heritage site and completes the iconic image of San Marino's three peaks.",
      es: "El Montale es una pequeña y misteriosa fortaleza que fascina sobre todo por su ubicación estratégica y su naturaleza cerrada.",
      pt: "O Montale é uma pequena e misteriosa fortaleza que fascina sobretudo pela sua localização estratégica e natureza isolada.",
      fr: "La Montale est une petite forteresse mystérieuse qui fascine avant tout par sa situation stratégique et sa nature close.",
    },
    facts: {
      de: [
        "Er wurde im 14. Jahrhundert erbaut.",
        "Der Turm hat nur einen einzigen Eingang, der 7 Meter über dem Boden liegt.",
        "Er wurde gebaut, um sich gegen die Malatesta-Familie zu verteidigen.",
        "Er ist auf der san-marinesischen 2-Cent-Münze zu sehen."
      ],
      hu: [
        "A 14. században épült.",
        "A toronynak csak egyetlen bejárata van, amely 7 méterre van a földtől.",
        "A Malatesta család elleni védekezés céljából épült.",
        "A san marinói 2 centes érmén látható."
      ],
      ro: [
        "A fost construit în secolul al XIV-lea.",
        "Turnul are o singură intrare, care se află la 7 metri deasupra solului.",
        "A fost construit pentru a se apăra împotriva familiei Malatesta.",
        "Se poate vedea pe moneda de 2 cenți din San Marino."
      ],
      en: [
        "It was built in the 14th century.",
        "The tower has only one entrance, which is 7 meters above the ground.",
        "It was built to defend against the Malatesta family.",
        "It is seen on the Sammarinese 2-cent coin."
      ],
      es: ["Fue construida en el siglo XIV.", "La torre tiene una única entrada situada a 7 metros del suelo.", "Se construyó para defenderse de la familia Malatesta.", "Aparece en la moneda de 2 céntimos de San Marino."],
      pt: ["Foi construída no século XIV.", "A torre tem apenas uma entrada, situada a 7 metros do solo.", "Foi construída para defesa contra a família Malatesta.", "Está representada na moeda de 2 cêntimos de San Marino."],
      fr: ["Elle a été construite au XIVe siècle.", "La tour ne possède qu'une seule entrée, située à 7 mètres du sol.", "Elle a été bâtie pour se défendre contre la famille Malatesta.", "Elle figure sur la pièce de 2 centimes de Saint-Marin."],
    },
    factsAdvanced: {
      de: ["Bauzeit im 14. Jahrhundert", "Kleinster der drei Türme", "Besitzt ein 8 m tiefes Verlies", "Nicht für die Öffentlichkeit zugänglich", "Diente als Ausguck gegen die Malatesta", "Quadratischer Grundriss der Festung"],
      hu: ["A 14. században épült", "San Marino legkisebb tornya", "8 méter mély börtönverem van benne", "Belső tere nem látogatható", "Négyszögletű alaprajzú épület", "Az UNESCO Világörökség része"],
      ro: ["Construit în secolul al XIV-lea", "Cea mai mică dintre cele trei turnuri", "Include o închisoare adâncă de 8 metri", "Interiorul nu este deschis publicului", "Rol de observaţie împotriva Malatesta", "Plan arhitectural patrulater"],
      en: ["Built during the 14th century", "Smallest of the three towers", "Contains an 8-meter deep prison pit", "Internal access is restricted to the public", "Watchtower against the Malatesta family", "Slender quadrilateral architectural plan"],
      es: ["La torre servía como un importante punto de vigilancia.", "El aislamiento servía para garantizar la seguridad.", "Montale fue concebido como un lugar de retiro.", "La construcción arquitectónica es única.", "Su historia está estrechamente ligada a la independencia.", "El lugar se interpreta hoy a menudo como una estatua de guardián silencioso."],
      pt: ["A torre servia como um importante posto de vigia.", "O isolamento servia para garantir a segurança.", "Montale foi concebido como um local de refúgio.", "A construção arquitetónica é única.", "A história está estreitamente ligada à independência.", "O local é hoje frequentemente interpretado como uma estátua de um guardião silencioso."],
      fr: ["La tour servait d'important poste de guet.", "L'isolement était au service de la sécurité.", "Montale a été conçu comme un lieu de repli.", "La construction architecturale est unique.", "L'histoire est étroitement liée à l'indépendance.", "Le lieu est aujourd'hui souvent interprété comme une statue de gardien silencieux."],
    },
    image: "/geo-images/sanmarino/cult-montale.webp"
  },
  {
    id: "cult-palazzo-pubblico",
    type: "landmark",
    parent: "SM-007",
    coords: [12.4466, 43.9366],
    name: {
      de: "Palazzo Pubblico",
      hu: "Palazzo Pubblico",
      ro: "Palazzo Pubblico",
      en: "Palazzo Pubblico"
    },
    description: {
      de: "Das Rathaus von San Marino und das offizielle Regierungsgebäude, in dem Zeremonien und Staatstreffen stattfinden.",
      hu: "San Marino városházája és a hivatalos kormányépület, ahol ceremóniákat és állami találkozókat tartanak.",
      ro: "Primăria oraşului San Marino şi clădirea oficială a guvernului, unde au loc ceremoniile şi întâlnirile de stat.",
      en: "The town hall of San Marino and official Government Building, where ceremonies and state meetings are held.",
      es: "El ayuntamiento de San Marino y el edificio oficial del gobierno donde se celebran ceremonias y reuniones de Estado.",
      pt: "Os paços do concelho de San Marino e o edifício oficial do governo onde se realizam cerimónias e reuniões de Estado.",
      fr: "L'hôtel de ville de Saint-Marin et le bâtiment officiel du gouvernement, où se déroulent les cérémonies et les réunions d'État.",
    },
    descriptionAdvanced: {
      de: "Der Palazzo Pubblico ist das Regierungsgebäude der Republik San Marino und befindet sich am Piața della Libertà im historischen Zentrum der Stadt. Das heutige Gebäude wurde zwischen 1884 und 1894 nach den Plänen des römischen Architekten Francesco Azzurri im neugotischen Stil errichtet. Er steht an der Stelle des antiken \"Domus Magna Communis\", dem ursprünglichen Sitz der Gemeinde aus dem 14. Jahrhundert. Die Fassade ist mit den Wappen der neun Gemeinden (Castelli) der Republik geschmückt und wird von einem markanten Glockenturm gekrönt. Im Inneren befindet sich der prunkvolle Ratssaal (Sala del Consiglio), in dem die 60 Mitglieder des Großen und Allgemeinen Rats tagen. Ein bemerkenswertes Kunstwerk im Saal ist das große Wandgemälde von Emilio Retrosi, das die Inthronisierung des heiligen Marinus darstellt. Der Palazzo ist das politische Herz des Landes und dient als Kulisse für offizielle Staatsbesuche und Zeremonien, wie die Amtseinführung der Capitani Reggenti. Vor dem Gebäude steht die berühmte Freiheitsstatue, ein Geschenk der Gräfin Otilia Heyroth Wagener aus dem Jahr 1876.",
      hu: "A Palazzo Pubblico San Marino köztársasági palotája és városháza, amely a történelmi városközpontban, a Piazza della Libertà téren emelkedik. A jelenlegi épületet 1884 és 1894 között emelték Francesco Azzurri római építész tervei alapján, neogótikus stílusban. Az épület a középkori Domus Magna Communis helyén áll, amely a 14. századtól kezdve szolgált a közösség központjaként. Homlokzatát a köztársaság kilenc körzetének (Castelli) címerei díszítik, óratornya pedig a város egyik legfőbb jellegzetessége. Az épület belsejében található a Nagytanács terme (Sala del Consiglio), ahol a 60 tagú törvényhozó testület ülésezik; itt látható Emilio Retrosi nagyszabású freskója, amely Szent Marinust ábrázolja hívei körében. A Palazzo Pubblico a politikai élet központja, itt zajlik a félévente esedékes régenskapitányok (Capitani Reggenti) beiktatási ceremóniája is. A palota előtt áll a Szabadság-szobor (Statua della Libertà), amelyet 1876-ban adományozott a városnak Otilia Heyroth Wagener grófnő.",
      ro: "Palazzo Pubblico este sediul central al guvernului Republicii San Marino, fiind situat în Piaţa Libertăţii din inima centrului istoric. Edificiul actual a fost construit între anii 1884 şi 1894 după proiectul arhitectului roman Francesco Azzurri, adoptând un stil neogotic rafinat. Clădirea a fost ridicată pe locul vechii \"Domus Magna Communis\", sediul original al comunităţii datând din secolul al XIV-lea. Faţada este decorată cu stemele celor nouă castele (districte) ale republicii şi este dominată de un turn cu ceas spectaculos. În interior se află Sala Consiliului Mare şi General, unde cei 60 de parlamentari se reunesc pentru a decide legile statului, decorată cu o frescă monumentală de Emilio Retrosi care îl înfăţişează pe Sfântul Marinus. Palatul este centrul simbolic al suveranităţii sammarineze, fiind locul unde au loc ceremoniile de învestire a Căpitanilor Regenţi de două ori pe an. În faţa palatului străjuieşte Statuia Libertăţii, un simbol al valorilor democratice ale celei mai vechi republici din lume.",
      en: "The Palazzo Pubblico is the official seat of the government of the Republic of San Marino, located on Piazza della Libertà in the historic city center. The current building was constructed between 1884 and 1894 following the designs of Roman architect Francesco Azzurri in a refined Neo-Gothic style. It stands on the site of the ancient \"Domus Magna Communis,\" the original community hall dating back to the 14th century. The facade is adorned with the coats of arms of the republic's nine municipalities (Castelli) and is crowned by a distinctive clock tower. Inside, the Great and General Council Chamber (Sala del Consiglio) serves as the meeting place for the 60 members of parliament, featuring a monumental fresco by Emilio Retrosi depicting Saint Marinus. The Palazzo is the political heart of the nation, hosting official state visits and the biannual inauguration ceremonies of the Captains Regent. In front of the palace stands the Statue of Liberty, donated by Countess Otilia Heyroth Wagener in 1876 as a tribute to the republic's democratic traditions.",
      es: "El Palazzo Pubblico es el corazón político de San Marino y destaca por su estilo neogótico que combina poder y tradición.",
      pt: "O Palazzo Pubblico é o coração político de San Marino e impressiona pelo seu estilo neogótico que une poder e tradição.",
      fr: "Le Palazzo Pubblico est le cœur politique de Saint-Marin et séduit par son style néogothique qui allie puissance et tradition.",
    },
    facts: {
      de: [
        "Entworfen vom römischen Architekten Francesco Azzurri im späten 19. Jahrhundert.",
        "Der gotische Baustil ähnelt dem Palazzo Vecchio in Florenz.",
        "Vor dem Gebäude befindet sich die Piazza della Libertà.",
        "Hier findet die Wachablösung statt."
      ],
      hu: [
        "Francesco Azzurri római építész tervezte a 19. század végén.",
        "A gótikus építészeti stílus a firenzei Palazzo Vecchio-ra hasonlít.",
        "Az épület előtt található a Piazza della Libertà.",
        "Itt tartják az őrségváltást."
      ],
      ro: [
        "Proiectat de arhitectul roman Francesco Azzurri la sfârşitul secolului al XIX-lea.",
        "Stilul arhitectural gotic seamănă cu Palazzo Vecchio din Florenţa.",
        "În faţa clădirii se află Piazza della Libertà.",
        "Aici are loc schimbarea gărzii."
      ],
      en: [
        "Designed by Roman architect Francesco Azzurri in the late 19th century.",
        "The gothic architectural style resembles the Palazzo Vecchio in Florence.",
        "In front of the building is the Piazza della Libertà.",
        "The changing of the guard takes place here."
      ],
      es: ["Diseñado por el arquitecto romano Francesco Azzurri a finales del siglo XIX.", "El estilo gótico se asemeja al Palazzo Vecchio de Florencia.", "Frente al edificio se encuentra la Piazza della Libertà.", "Aquí tiene lugar el cambio de guardia."],
      pt: ["Projetado pelo arquiteto romano Francesco Azzurri no final do século XIX.", "O estilo arquitetónico gótico assemelha-se ao Palazzo Vecchio de Florença.", "Em frente ao edifício encontra-se a Piazza della Libertà.", "Aqui realiza-se o render da guarda."],
      fr: ["Conçu par l'architecte romain Francesco Azzurri à la fin du XIXe siècle.", "Le style gothique ressemble à celui du Palazzo Vecchio à Florence.", "La Piazza della Libertà se trouve devant le bâtiment.", "C'est ici qu'a lieu la relève de la garde."],
    },
    factsAdvanced: {
      de: ["Inauguration am 30. September 1894", "Entworfen vom Architekten Francesco Azzurri", "Sitz des Großen und Allgemeinen Rats", "Erbaut auf der Domus Magna Communis", "Fassade mit Wappen der neun Gemeinden", "Amtseinführung der Capitani Reggenti hier"],
      hu: ["1894. szeptember 30-án avatták fel", "Francesco Azzurri római építész tervezte", "A 60 tagú Nagytanács székhelye", "Neogótikus stílusban épült", "Kilenc körzet címere díszíti a falát", "Itt iktatják be a régenskapitányokat"],
      ro: ["Inaugurat la 30 septembrie 1894", "Proiectat de arhitectul Francesco Azzurri", "Sediul Consiliului Mare şi General", "Construit în stil neogotic", "Adăposteşte o frescă de Emilio Retrosi", "Locul ceremoniilor pentru Căpitanii Regenţi"],
      en: ["Inaugurated on September 30, 1894", "Designed by architect Francesco Azzurri", "Seat of the Great and General Council", "Built in the Neo-Gothic style", "Features coats of arms of the 9 municipalities", "Host of the Captains Regent inauguration"],
      es: ["El edificio sirve tanto de ayuntamiento como de sede del parlamento.", "El estilo neogótico fue un homenaje a la tradición florentina.", "La Piazza della Libertà es el punto central de encuentro para los actos estatales.", "El cambio de guardia es un espectáculo muy popular entre los turistas.", "El Palazzo es un símbolo de la estabilidad del país.", "En su interior se encuentran suntuosas salas para invitados de Estado."],
      pt: ["O edifício serve tanto como câmara municipal como sede do parlamento.", "O estilo neogótico foi uma homenagem à tradição florentina.", "A Piazza della Libertà é o ponto de encontro central para atos oficiais de Estado.", "O render da guarda é um espetáculo muito popular entre os turistas.", "O Palazzo é um símbolo da estabilidade do país.", "No interior encontram-se salas luxuosas para convidados de Estado."],
      fr: ["Le bâtiment sert à la fois d'hôtel de ville et de siège du Parlement.", "Le style néogothique était un hommage à la tradition florentine.", "La Piazza della Libertà est le lieu de rassemblement central pour les actes d'État.", "La relève de la garde est un spectacle très apprécié des touristes.", "Le Palazzo est un symbole de la stabilité du pays.", "L'intérieur abrite de somptueuses salles pour les hôtes d'État."],
    },
    image: "/geo-images/sanmarino/cult-palazzo-pubblico.webp"
  },
  {
    id: "cult-basilica-di-san-marino",
    type: "historical",
    parent: "SM-007",
    coords: [12.4463, 43.9372],
    name: {
      de: "Basilica di San Marino",
      hu: "San Marino-bazilika",
      ro: "Bazilica San Marino",
      en: "Basilica di San Marino"
    },
    description: {
      de: "Die Hauptkirche der Republik San Marino, die dem Heiligen Marinus, dem Gründer und Schutzpatron, gewidmet ist.",
      hu: "A San Marino Köztársaság fő temploma, amelyet a szerzetes és alapító Szent Marinusznak szenteltek.",
      ro: "Principala biserică din Republica San Marino, dedicată Sfântului Marinus, fondatorul şi patronul spiritual.",
      en: "The main church of the Republic of San Marino, dedicated to Saint Marinus, the founder and patron saint.",
      es: "La iglesia principal de la República de San Marino, dedicada a San Marino, fundador y santo patrón.",
      pt: "A igreja principal da República de San Marino, dedicada a São Marinho, o fundador e santo padroeiro.",
      fr: "La principale église de la République de Saint-Marin, dédiée à Saint Marin, le fondateur et saint patron.",
    },
    descriptionAdvanced: {
      de: "Die Basilika von San Marino ist das wichtigste religiöse Gebäude der Republik und dient als Konkathedrale der Diözese San Marino-Montefeltro. Das heutige klassizistische Bauwerk wurde zwischen 1826 und 1838 an der Stelle einer antiken romanischen Pieve aus dem 4. Jahrhundert errichtet, die abgerissen wurde. Entworfen wurde die Kirche von dem Architekten Antonio Serra aus Bologna. Die beeindruckende Fassade verfügt über einen Portikus mit acht korinthischen Säulen und trägt die lateinische Inschrift \"DIVO MARINO PATRONO ET LIBERTATIS AUCTORI\". Im Inneren beherbergt die Basilika in einer prächtigen Urne unter dem Hauptaltar die Reliquien des heiligen Marinus, des Gründers der Republik. Das Innere besteht aus drei Schiffen und ist mit bedeutenden Statuen und Gemälden geschmückt, darunter eine Statue des heiligen Marinus von Adamo Tadolini. Die Basilika spielt eine zentrale Rolle im spirituellen und staatlichen Leben des Landes, insbesondere während der Feierlichkeiten am 3. September. Die schlichte Eleganz des Neoklassizismus verleiht dem sakralen Raum eine feierliche und erhabene Atmosphäre.",
      hu: "A San Marino-bazilika a köztársaság legfontosabb katolikus temploma, amely egyben a San Marino-Montefeltro egyházmegye társszékesegyháza. A jelenlegi klasszicista épületet 1826 és 1838 között emelték egy korábbi, 4. századi román stílusú plébániatemplom helyén, amelyet állapota miatt le kellett bontani. A templom tervezője a bolognai Antonio Serra volt. A homlokzatot nyolc korinthoszi oszlopból álló monumentális portikusz díszíti, felette pedig a \"DIVO MARINO PATRONO ET LIBERTATIS AUCTORI\" (Szent Marinusnak, a szabadság pártfogójának és alapítójának) felirat olvasható. A bazilika legfőbb kincse a főoltár alatt elhelyezett ereklyetartó, amely a köztársaság alapítója, Szent Marinus hamvait őrzi. A belső tér háromhajós elrendezésű, fehér márványoszlopokkal és neves szobrokkal, köztük Adamo Tadolini Szent Marinus-alkotásával. A bazilika központi helyszíne a nemzeti ünnepeknek, különösen a szeptember 3-i alapítási évfordulónak. Az épület a hit és a politikai szabadság összefonódásának szimbóluma San Marinóban.",
      ro: "Basilica San Marino este principalul lăcaş de cult catolic din republică şi co-catedrală a Diecezei de San Marino-Montefeltro. Edificiul actual, construit în stil neoclasic între anii 1826 şi 1838, a fost ridicat pe locul unei vechi biserici romanice din secolul al IV-lea, care a fost demolată pentru a face loc noii structuri. Proiectul a fost realizat de arhitectul Antonio Serra din Bologna. Faţada impresionantă este precedată de un portic susţinut de opt coloane corintice şi poartă inscripţia latină dedicată Sfântului Marinus, ctitorul libertăţii. În interiorul basilicii, sub altarul principal, se află o urnă preţioasă care conţine moaştele Sfântului Marinus, descoperite în timpul săpăturilor. Interiorul este structurat pe trei nave şi este decorat cu statui de mare valoare, printre care se numără cea a sfântului patron realizată de Adamo Tadolini. Basilica este centrul ceremoniilor religioase de stat, fiind locul unde se oficiază liturghii solemne în prezenţa Căpitanilor Regenţi la sărbătorile naţionale.",
      en: "The Basilica di San Marino is the primary Catholic place of worship in the republic and serves as the co-cathedral of the Diocese of San Marino-Montefeltro. This Neoclassical structure was built between 1826 and 1838 on the site of an ancient 4th-century Romanesque parish church that was demolished to accommodate the new building. The design was the work of Bolognese architect Antonio Serra. The grand facade features a portico supported by eight Corinthian columns and bears the Latin inscription \"DIVO MARINO PATRONO ET LIBERTATIS AUCTORI,\" honoring Saint Marinus as the patron and founder of liberty. Inside the basilica, underneath the high altar, lies a sacred urn containing the relics of Saint Marinus, discovered during the excavation of the old church. The interior is divided into three naves and is decorated with significant artworks, including a prominent statue of Saint Marinus by Adamo Tadolini. The basilica remains the heart of spiritual and civic life in San Marino, especially during the annual national festival on September 3rd.",
      es: "Como centro espiritual de San Marino, la basílica no solo es impresionante desde el punto de vista arquitectónico, sino también un lugar de profunda veneración nacional por el patrón.",
      pt: "Como centro espiritual de San Marino, a basílica não é apenas arquitetonicamente impressionante, mas também um local de profunda veneração nacional pelo padroeiro.",
      fr: "En tant que centre spirituel de Saint-Marin, la basilique n'est pas seulement impressionnante sur le plan architectural, elle est aussi un lieu de profonde dévotion nationale envers le saint patron.",
    },
    facts: {
      de: [
        "Erbaut im 19. Jahrhundert im neoklassizistischen Stil.",
        "Unter dem Altar ruhen die Reliquien des Heiligen Marinus.",
        "Sie ersetzt eine ältere Kirche aus dem 4. Jahrhundert.",
        "Die Kirche ziert die san-marinesische 10-Cent-Münze."
      ],
      hu: [
        "A 19. században épült neoklasszicista stílusban.",
        "Az oltár alatt nyugszanak Szent Marinus ereklyéi.",
        "Egy régebbi, 4. századi templom helyére épült.",
        "A templom díszíti a san marinói 10 centes érmét."
      ],
      ro: [
        "Construită în secolul al XIX-lea în stil neoclasic.",
        "Moaştele Sfântului Marinus se odihnesc sub altar.",
        "Înlocuieşte o biserică mai veche din secolul al IV-lea.",
        "Biserica decorează moneda de 10 cenţi din San Marino."
      ],
      en: [
        "Built in the 19th century in the neoclassical style.",
        "The relics of Saint Marinus rest under the altar.",
        "It replaces an older church from the 4th century.",
        "The church adorns the Sammarinese 10-cent coin."
      ],
      es: ["Construida en el siglo XIX en estilo neoclásico.", "Bajo el altar descansan las reliquias de San Marino.", "Sustituye a una iglesia más antigua del siglo IV.", "La iglesia adorna la moneda de 10 céntimos de San Marino."],
      pt: ["Construída no século XIX em estilo neoclássico.", "Sob o altar repousam as relíquias de São Marinho.", "Substitui uma igreja mais antiga do século IV.", "A igreja decora a moeda de 10 cêntimos de San Marino."],
      fr: ["Construite au XIXe siècle dans un style néoclassique.", "Les reliques de Saint Marin reposent sous l'autel.", "Elle remplace une église plus ancienne du IVe siècle.", "L'église orne la pièce de 10 centimes de Saint-Marin."],
    },
    factsAdvanced: {
      de: ["Bauzeit von 1826 bis 1838", "Entwurf vom Architekten Antonio Serra", "Klassizistischer Architekturstil", "Beherbergt Reliquien des hl. Marinus", "Acht korinthische Säulen an der Front", "Steht auf einer antiken Kirche aus dem 4. Jh."],
      hu: ["1826 és 1838 között épült", "Antonio Serra bolognai építész tervezte", "Stílusa tiszta klasszicizmus", "Szent Marinus ereklyéit őrzi", "Nyolc korinthoszi oszlop díszíti a portikuszt", "Háromhajós belső térrel rendelkezik"],
      ro: ["Construită între anii 1826 şi 1838", "Arhitectul proiectant: Antonio Serra", "Stil arhitectural neoclasic", "Adăposteşte moaştele Sfântului Marinus", "Faţadă cu opt coloane corintice", "Situată în Piaţa Domus Plebis"],
      en: ["Built between 1826 and 1838", "Designed by architect Antonio Serra", "Neoclassical architectural style", "Holds the relics of Saint Marinus", "Fronted by 8 Corinthian columns", "Built on the site of a 4th-century church"],
      es: ["El edificio refleja el orgullo de la joven república.", "La arquitectura neoclásica subraya la armonía y el orden.", "Las reliquias son veneradas por toda la población.", "La iglesia también sirve como lugar para ceremonias oficiales.", "La historia de la basílica está estrechamente ligada a la del país.", "Es un ejemplo sobresaliente de arquitectura sacra."],
      pt: ["O edifício reflete o orgulho da jovem república.", "A arquitetura neoclássica realça a harmonia e a ordem.", "As relíquias são veneradas por toda a população.", "A igreja serve também como local para cerimónias oficiais.", "A história da basílica está estreitamente ligada à do país.", "É um exemplo notável de arquitetura sacra."],
      fr: ["L'édifice reflète la fierté de la jeune République.", "L'architecture néoclassique souligne l'harmonie et l'ordre.", "Les reliques sont vénérées par toute la population.", "L'église sert également de lieu pour les cérémonies officielles.", "L'histoire de la basilique est étroitement liée à celle du pays.", "C'est un exemple remarquable d'architecture sacrée."],
    },
    image: "/geo-images/sanmarino/cult-basilica-di-san-marino.webp"
  },
  {
    id: "cult-chiesa-fiorentino",
    type: "landmark",
    parent: "SM-005",
    coords: [12.455, 43.912],
    name: {
      de: "Kirche San Giovanni Battista",
      hu: "Keresztelő Szent János-templom",
      ro: "Biserica Sfântul Ioan Botezătorul",
      en: "Church of Saint John the Baptist"
    },
    description: {
      de: "Die wichtigste Kirche in Fiorentino, bekannt für ihre Architektur.",
      hu: "Fiorentino legfontosabb temploma, építészetéről ismert.",
      ro: "Principala biserică din Fiorentino, cunoscută pentru arhitectura sa.",
      en: "The main church in Fiorentino, known for its architecture.",
      es: "La iglesia más importante de Fiorentino, conocida por su arquitectura.",
      pt: "A igreja mais importante de Fiorentino, conhecida pela sua arquitetura.",
      fr: "La plus importante église de Fiorentino, connue pour son architecture.",
    },
    descriptionAdvanced: {
      de: "Die Kirche San Giovanni Battista in Fiorentino ist das wichtigste religiöse Gebäude der Gemeinde (Castello) Fiorentino in San Marino. Die heutige Kirche wurde zwischen 1937 und 1940 auf den Überresten einer wesentlich älteren sakralen Stätte errichtet, die vermutlich auf das 5. Jahrhundert zurückgeht. Der Entwurf stammt von dem bekannten sammarinesischen Architekten Gino Zani, der das Gebäude in einem historisierenden Stil mit romanischen und gotischen Elementen gestaltete. Die Fassade besteht aus hellem lokalem Stein und zeichnet sich durch ein elegantes Portal und eine Fensterrose aus. Fiorentino war historisch eine wichtige Festung der Malatesta-Familie, bevor sie 1463 endgültig Teil der Republik San Marino wurde. Im Inneren der Kirche befinden sich wertvolle sakrale Kunstwerke und eine ruhige, andächtige Atmosphäre. Die Kirche ist Johannes dem Täufer gewidmet, der als Schutzpatron der Gemeinde verehrt wird. Die Architektur fügt sich harmonisch in die hügelige Landschaft der Region ein und zeugt vom kulturellen Erbe der lokalen Gemeinschaft im 20. Jahrhundert.",
      hu: "A fiorentinói Keresztelő Szent János-templom (Chiesa di San Giovanni Battista) a San Marinó-i Fiorentino körzet legjelentősebb hitéleti központja. A jelenlegi templomot 1937 és 1940 között építették Gino Zani neves helyi építész tervei alapján, egy jóval korábbi, valószínűleg 5. századi szakrális épület alapjaira. Az épület stílusa a román és a gótika jegyeit ötvözi, ami méltóságteljes megjelenést kölcsönöz az egyházközség központjának. Homlokzata világos színű, helyi mészkőből készült, amelyet egy díszes rózsaablak tesz hangsúlyossá. Fiorentino történelmileg fontos stratégiai pont volt, korábban a rimini Malatesta család fennhatósága alá tartozott, mielőtt 1463-ban végleg San Marino része lett volna. A templom belső tere letisztult, és több értékes vallási műalkotásnak ad otthont. A névadó Keresztelő Szent János tisztelete mélyen gyökerezik a helyi közösségben, ünnepeit ma is hagyományos keretek között tartják. Az épület harmonikusan illeszkedik a település dombvidéki környezetébe, tükrözve a sammarineszi építészeti hagyományok továbbélését.",
      ro: "Biserica Sfântul Ioan Botezătorul din Fiorentino este principalul edificiu religios al castelului (districtului) Fiorentino din Republica San Marino. Actuala construcţie a fost ridicată între anii 1937 şi 1940 pe locul unei structuri mult mai vechi, ale cărei origini par să urce până în secolul al V-lea d.Hr. Proiectul a fost semnat de arhitectul Gino Zani, care a ales o abordare eclectică ce îmbină armonios elemente ale stilului romanic cu influenţe gotice. Faţada este realizată din piatră locală de culoare deschisă, fiind decorată cu o rozetă elegantă deasupra portalului principal. Fiorentino a fost istoric o fortăreaţă a familiei Malatesta din Rimini, fiind anexată definitiv republicii în anul 1463 după un asediu prelungit. Interiorul bisericii păstrează o atmosferă de reculegere, adăpostind obiecte de cult valoroase şi picturi religioase. Dedicată Sfântului Ioan Botezătorul, biserica reprezintă un reper identitar important pentru locuitorii zonei, integrându-se perfect în peisajul colinar specific sudului micii republici.",
      en: "The Church of Saint John the Baptist in Fiorentino is the most important religious building in the municipality (Castello) of Fiorentino in San Marino. The current church was built between 1937 and 1940 on the ruins of a much older sacred site, believed to date back to the 5th century. It was designed by the renowned Sammarinese architect Gino Zani, who employed a historicist style blending Romanesque and Gothic architectural elements. The facade is constructed from light-colored local stone and features an elegant portal and a rose window. Fiorentino was historically a significant stronghold belonging to the Malatesta family of Rimini before it was definitively annexed by the Republic of San Marino in 1463. Inside the church, visitors can find precious religious artifacts and a serene atmosphere for prayer. Dedicated to Saint John the Baptist, the patron saint of the municipality, the church serves as a vital community hub. Its design harmoniously fits into the rolling landscape of the region, testifying to the architectural continuity of the 20th century.",
      es: "Esta iglesia es el centro espiritual de Fiorentino y un maravilloso ejemplo de arquitectura sacra moderna que combina tradición y espíritu contemporáneo.",
      pt: "Esta igreja é o centro espiritual de Fiorentino e um maravilhoso exemplo de arquitetura sacra moderna, que une a tradição ao espírito da época.",
      fr: "Cette église est le centre spirituel de Fiorentino et un magnifique exemple d'architecture sacrée moderne, alliant tradition et esprit du temps.",
    },
    facts: {
      de: ["Im 20. Jahrhundert wiederaufgebaut.", "Zentrum des religiösen Lebens in Fiorentino.", "Schlichte, elegante Fassade."],
      hu: ["A 20. században építették újjá.", "Fiorentino vallási életének központja.", "Egyszerű, elegáns homlokzat."],
      ro: ["Reconstruită în secolul XX.", "Centrul vieţii religioase din Fiorentino.", "Faţadă simplă şi elegantă."],
      en: ["Rebuilt in the 20th century.", "Center of religious life in Fiorentino.", "Simple, elegant facade."],
      es: ["Reconstruida en el siglo XX.", "Centro de la vida religiosa en Fiorentino.", "Fachada sencilla y elegante."],
      pt: ["Reconstruída no século XX.", "Centro da vida religiosa em Fiorentino.", "Fachada simples e elegante."],
      fr: ["Reconstruite au XXe siècle.", "Centre de la vie religieuse à Fiorentino.", "Façade sobre et élégante."],
    },
    factsAdvanced: {
      de: ["Bauzeit von 1937 bis 1940", "Entwurf vom Architekten Gino Zani", "Gegenüber älteren Ruinen aus dem 5. Jh.", "Stilmischung aus Romanik und Gotik", "Fiorentino kam 1463 zu San Marino", "Gewidmet Johannes dem Täufer"],
      hu: ["1937 és 1940 között építették", "Gino Zani építész tervezte", "5. századi keresztény alapokra épült", "Román és gótikus stílusjegyek ötvözete", "Fiorentino 1463-ban lett a köztársaság része", "Keresztelő Szent Jánosnak szentelték"],
      ro: ["Construită între 1937 şi 1940", "Proiectată de arhitectul Gino Zani", "Ridicată pe fundaţii din secolul al V-lea", "Stil arhitectural romanic-gotic", "Fiorentino a fost anexat în 1463", "Dedicată Sfântului Ioan Botezătorul"],
      en: ["Built between 1937 and 1940", "Designed by architect Gino Zani", "Built over 5th-century ruins", "Combines Romanesque and Gothic styles", "Fiorentino joined San Marino in 1463", "Dedicated to St. John the Baptist"],
      es: ["La iglesia es el punto de referencia para las festividades religiosas locales.", "El diseño moderno refleja el desarrollo de Fiorentino.", "Alberga numerosos tesoros artísticos.", "La fachada transmite calma y estabilidad.", "La construcción es un ejemplo del cambio cultural del siglo XX.", "La comunidad se identifica fuertemente con este edificio."],
      pt: ["A igreja é o ponto de ancoragem para as festas religiosas locais.", "O design moderno reflete o desenvolvimento de Fiorentino.", "Abriga inúmeros tesouros artísticos.", "A fachada irradia tranquilidade e permanência.", "A construção é um exemplo da mudança cultural do século XX.", "A comunidade identifica-se fortemente com esta estrutura."],
      fr: ["L'église est le point d'ancrage des fêtes religieuses locales.", "Le design moderne reflète le développement de Fiorentino.", "Elle abrite de nombreux trésors artistiques.", "La façade dégage un sentiment de calme et de permanence.", "Le bâtiment est un exemple du changement culturel du XXe siècle.", "La communauté s'identifie fortement à cet édifice."],
    },
    image: "/poi-images/cult-chiesa-fiorentino.webp",
  }
];

export const sanmarinoNature: POI[] = [
  {
    id: "nat-monte-titano",
    type: "mountain",
    parent: "SM-007",
    coords: [12.45, 43.9314],
    name: {
      de: "Monte Titano",
      hu: "Titano-hegy",
      ro: "Muntele Titano",
      en: "Mount Titano"
    },
    description: {
      de: "Der Monte Titano ist der höchste Berg in San Marino und das markanteste geographische Merkmal des Landes.",
      hu: "A Titano-hegy San Marino legmagasabb hegye, és az ország legjellegzetesebb földrajzi formája.",
      ro: "Muntele Titano este cel mai înalt munte din San Marino și cea mai distinctă caracteristică geografică a țării.",
      en: "Mount Titano is the highest mountain in San Marino and the most distinctive geographical feature of the country.",
      es: "El Monte Titano es la montaña más alta de San Marino y la característica geográfica más distintiva del país.",
      pt: "O Monte Titano é a montanha mais alta de San Marino e a característica geográfica mais marcante do país.",
      fr: "Le mont Titano est la plus haute montagne de Saint-Marin et la caractéristique géographique la plus marquante du pays.",
    },
    descriptionAdvanced: {
      de: "Der Monte Titano ist mit 739 Metern der höchste Gipfel der Republik San Marino und bildet das geologische Herzstück des Kleinstaates. Das Kalksteinmassiv gehört zum Apennin-Gebirge und wurde im Jahr 2008 zusammen mit dem historischen Stadtzentrum von San Marino in die Liste des UNESCO-Weltkulturerbes aufgenommen. Markant sind die drei Festungstürme Guaita, Cesta und Montale, die auf den drei Gipfeln des Berges thronen und seit dem 11. Jahrhundert die Verteidigungsfähigkeit der ältesten Republik der Welt symbolisieren. Die geologische Formation besteht hauptsächlich aus Kalkarenit, einem Sedimentgestein, das reich an marinen Fossilien aus dem Miozän ist. Von den Kammwegen aus bietet sich ein weiter Panoramablick über die italienische Region Emilia-Romagna bis hin zur Adriaküste. Der Berg ist nicht nur ein Symbol der Freiheit, sondern auch ein wichtiges ökologisches Refugium für seltene Pflanzenarten und Greifvögel.",
      hu: "A Monte Titano San Marino legmagasabb pontja, egy 739 méter magas mészkőtömb, amely az ország jelképévé vált. Az Appenninek részét képező hegygerincen helyezkedik el a főváros történelmi központja, amelyet 2008-ban az UNESCO a Világörökség részévé nyilvánított. A hegy három jellegzetes csúcsán magasodnak a köztársaság védelmi bástyái: a Guaita, a Cesta és a Montale tornyok, melyek közül a legkorábbi a 11. századból származik. Geológiailag a hegy főleg miocén kori meszes homokkőből épül fel, amelyben számos tengeri fosszília maradványa fedezhető fel. A sziklafalak meredeken szakadnak le a környező völgyek felé, lenyűgöző kilátást nyújtva az Adriai-tengerre és az olaszországi Romagna vidékére. A hegy nemcsak stratégiai és történelmi jelentőséggel bír, hanem változatos flórája és faunája miatt természetvédelmi szempontból is kiemelkedő jelentőségű terület.",
      ro: "Muntele Titano este cel mai înalt punct din Republica San Marino, având o altitudine de 739 de metri deasupra nivelului mării. Acest masiv calcaros face parte din Munții Apenini și reprezintă nucleul istoric al statului, fiind inclus în Patrimoniul Mondial UNESCO în anul 2008. Pe cele trei creste ale sale sunt amplasate cele trei turnuri celebre – Guaita, Cesta și Montale – care au servit drept puncte de observație și apărare începând cu secolul al XI-lea. Geologia muntelui este fascinantă, fiind compus în principal din calcarenit de San Marino, o rocă sedimentară formată în perioada miocenului care conține numeroase fosile marine. Versanții abrupți oferă o panoramă spectaculoasă asupra regiunii italiene Emilia-Romagna și a coastei Mării Adriatice. Dincolo de importanța sa politică și istorică, muntele este un habitat natural protejat, adăpostind specii endemice de plante și diverse păsări de pradă care cuibăresc pe stâncile sale.",
      en: "Mount Titano is the highest peak in San Marino, reaching an elevation of 739 meters and serving as the republic's primary geographical landmark. This limestone massif is part of the Apennine Mountains and was inscribed on the UNESCO World Heritage list in 2008, together with San Marino's historic center. The mountain is famously crowned by three towers—Guaita, Cesta, and Montale—which represent the strategic fortifications built between the 11th and 14th centuries to protect the world's oldest republic. Geologically, the formation consists of San Marino calcarenite, a sedimentary rock rich in Miocene marine fossils. Its vertical cliffs offer commanding views of the Italian Romagna region and the Adriatic coast. Mount Titano is not only a symbol of national identity and sovereignty but also a crucial ecological site, hosting various bird species and Mediterranean flora within its rugged terrain.",
      es: "El Monte Titano es más que una montaña; es el fundamento de la independencia sanmarinense y ofrece un escenario impresionante para cada visitante.",
      pt: "O Monte Titano é mais do que apenas uma montanha; é o alicerce da independência de San Marino e oferece um cenário deslumbrante para todos os visitantes.",
      fr: "Le mont Titano est bien plus qu'une montagne ; il est le fondement de l'indépendance de Saint-Marin et offre un décor époustouflant à chaque visiteur.",
    },
    facts: {
      de: [
        "Der Berg hat drei markante Gipfel, auf denen jeweils ein Turm steht.",
        "Die höchste Erhebung erreicht 739 Meter über dem Meeresspiegel.",
        "Zusammen mit dem historischen Stadtzentrum bildet er ein UNESCO-Welterbe.",
        "Der Berg ist umgeben von einer reichen Flora und Fauna."
      ],
      hu: [
        "A hegynek három jellegzetes csúcsa van, mindegyiken egy toronnyal.",
        "A legmagasabb pontja 739 méterrel a tengerszint felett található.",
        "A történelmi városközponttal együtt UNESCO világörökségi helyszín.",
        "A hegyet gazdag növény- és állatvilág veszi körül."
      ],
      ro: [
        "Muntele are trei vârfuri distincte, fiecare cu un turn deasupra.",
        "Cea mai înaltă altitudine ajunge la 739 de metri deasupra nivelului mării.",
        "Împreună cu centrul istoric, formează un sit al Patrimoniului Mondial UNESCO.",
        "Muntele este înconjurat de o floră și o faună bogată."
      ],
      en: [
        "The mountain has three distinct peaks, each topped with a tower.",
        "The highest elevation reaches 739 meters above sea level.",
        "Together with the historic city center, it forms a UNESCO World Heritage site.",
        "The mountain is surrounded by a rich flora and fauna."
      ],
      es: ["La montaña tiene tres picos distintivos, cada uno con una torre.", "El punto más alto alcanza los 739 metros sobre el nivel del mar.", "Junto con el centro histórico, forma parte del Patrimonio de la Humanidad de la UNESCO.", "La montaña está rodeada de una rica flora y fauna."],
      pt: ["A montanha tem três picos marcantes, cada um com uma torre.", "O ponto mais alto atinge 739 metros acima do nível do mar.", "Juntamente com o centro histórico, constitui um Património Mundial da UNESCO.", "A montanha é rodeada por uma rica flora e fauna."],
      fr: ["La montagne possède trois sommets distincts, sur chacun desquels se dresse une tour.", "Le point culminant atteint 739 mètres au-dessus du niveau de la mer.", "Avec le centre historique, il forme un site du patrimoine mondial de l'UNESCO.", "La montagne est entourée d'une flore et d'une faune riches."],
    },
    factsAdvanced: {
      de: ["Höchster Punkt San Marinos mit 739 m Höhe", "UNESCO-Weltkulturerbe seit dem Jahr 2008", "Drei Festungstürme aus dem 11. bis 14. Jahrhundert", "Geologische Formation aus miozänem Kalkarenit", "Heimat des Wanderfalken (Falco peregrinus)", "Panoramablick bis zur kroatischen Küste möglich"],
      hu: ["San Marino legmagasabb pontja, 739 méter", "2008 óta az UNESCO Világörökség része", "Három torony: Guaita, Cesta és Montale", "Miocén kori tengeri fosszíliákban gazdag kőzet", "A vándorsólyom fészkelőhelye a sziklákon", "Tiszta időben az Adriai-tenger túlsó partja is látható"],
      ro: ["Punctul culminant al statului San Marino la 739 m", "Inclus în lista UNESCO în anul 2008", "Găzduiește trei turnuri fortificate medievale", "Format din rocă sedimentară numită calcarenit", "Habitat important pentru șoimul călător", "Oferă vizibilitate până la coasta dalmată în zile senine"],
      en: ["Highest peak in San Marino at 739 meters", "Inscribed as a UNESCO World Heritage site in 2008", "Features three iconic medieval defense towers", "Composed of limestone dating back to the Miocene", "Nesting site for the Peregrine Falcon", "Views extend to the Adriatic Sea and Mount Carpegna"],
      es: ["La geología de la montaña es una parte esencial del patrimonio cultural.", "Las tres torres sirven como puntos de navegación.", "La flora de la montaña es asombrosa por su diversidad.", "El Monte Titano es el corazón del turismo sanmarinense.", "El ecosistema está estrictamente protegido.", "Las vistas cambian drásticamente con cada estación."],
      pt: ["A geologia da montanha é uma parte essencial do património cultural.", "As três torres servem como pontos de navegação.", "A flora da montanha é surpreendente na sua diversidade.", "O Monte Titano é o coração do turismo de San Marino.", "O ecossistema é estritamente protegido.", "As vistas mudam drasticamente com cada estação."],
      fr: ["La géologie de la montagne est une partie essentielle de l'héritage culturel.", "Les trois tours servent de points de navigation.", "La flore de la montagne est étonnante par sa diversité.", "Le mont Titano est le cœur du tourisme de Saint-Marin.", "L'écosystème est strictement protégé.", "Les vues changent radicalement au fil des saisons."],
    },
    image: "/geo-images/sanmarino/nat-monte-titano.webp"
  },
  {
    id: "nat-parco-ausa",
    type: "landmark",
    parent: "SM-001",
    coords: [12.4781, 43.9664],
    name: {
      de: "Ausa-Park",
      hu: "Ausa Park",
      ro: "Parcul Ausa",
      en: "Ausa Park"
    },
    description: {
      de: "Ein beliebter städtischer Park in Dogana (Serravalle), ideal für Erholung und Spaziergänge.",
      hu: "Népszerű városi park Doganában (Serravalle), ideális pihenésre és sétákra.",
      ro: "Un parc urban popular în Dogana (Serravalle), ideal pentru recreere și plimbări.",
      en: "A popular urban park in Dogana (Serravalle), ideal for recreation and walks.",
      es: "Un popular parque urbano en Dogana (Serravalle), ideal para el descanso y los paseos.",
      pt: "Um popular parque urbano em Dogana (Serravalle), ideal para relaxar e caminhar.",
      fr: "Un parc urbain populaire à Dogana (Serravalle), idéal pour la détente et les promenades.",
    },
    descriptionAdvanced: {
      de: "Der Parco Ausa ist die größte Grünanlage in der Republik San Marino und befindet sich im Castello von Serravalle, nahe dem Ortsteil Dogana. Der Park erstreckt sich entlang des gleichnamigen Wasserlaufs Ausa, der eine wichtige Rolle im lokalen Entwässerungssystem spielt. Die Gestaltung des Parks kombiniert naturbelassene Zonen mit gepflegten Freizeitflächen, die für die Anwohner und Besucher von hoher Erholungsqualität sind. Historisch gesehen war das Gebiet einst Sumpfland, das im 20. Jahrhundert systematisch trockengelegt und in einen Volkspark umgewandelt wurde. Heute beherbergt das Areal zahlreiche Baumarten, darunter Platanen und Weiden, sowie Sportanlagen und Spielplätze. Die Nähe zur italienischen Grenze macht den Park zu einem wichtigen ökologischen Korridor zwischen dem Binnenstaat und der Adriaküste. Er dient als Austragungsort für lokale Feste und sportliche Wettkämpfe, was seine soziale Bedeutung unterstreicht.",
      hu: "A Parco Ausa San Marino legnagyobb kiterjedésű közparkja, amely Serravalle önkormányzatában, Dogana közelében található. A park az azonos nevű Ausa-patak mentén húzódik, amely a köztársaság egyik legfontosabb vízfolyása. A terület rehabilitációja során a korábbi mocsaras részeket lecsapolták, és egy modern, rekreációs célokat szolgáló zöldövezetet hoztak létre a 20. század második felében. A park gazdag növényvilággal rendelkezik, ahol platánfák, füzek és fenyőfélék alkotnak árnyas ligeteket a sétányok mentén. Számos sportpálya, játszótér és kerékpárút várja a látogatókat, így a helyi közösség egyik legnépszerűbb találkozóhelye. Az olasz határ közelsége miatt a park fontos szerepet tölt be a két ország közötti ökológiai kapcsolat fenntartásában is. A Parco Ausa gyakran ad otthont kulturális eseményeknek, koncerteknek és sportrendezvényeknek, különösen a nyári időszakban.",
      ro: "Parcul Ausa este cel mai mare spațiu verde public din Republica San Marino, situat în castello Serravalle, în apropierea localității Dogana. Parcul se întinde de-a lungul cursului pârâului Ausa, fiind rezultatul unui amplu proiect de regenerare urbană desfășurat în a doua jumătate a secolului al XX-lea. Anterior, zona era un teren mlăștinos, însă astăzi a fost transformată într-o oază de relaxare cu alei pietonale, piste pentru biciclete și zone de agrement. Vegetația parcului este diversă, incluzând numeroase specii de arbori ornamentali precum platani, sălcii și pini care oferă umbră și răcoare. Parcul dispune de numeroase facilități sportive și locuri de joacă pentru copii, fiind principalul loc de întâlnire pentru locuitorii din cea mai populată zonă a țării. Datorită poziției sale strategice lângă granița cu Italia, parcul facilitează tranzitul ecologic și reprezintă un plămân verde esențial pentru conurbația transfrontalieră.",
      en: "Ausa Park is the largest urban park in the Republic of San Marino, located in the municipality of Serravalle near the border town of Dogana. The park stretches along the banks of the Ausa stream, which serves as a vital natural watercourse in the northern part of the country. Historically, this area was characterized by marshy terrain before being reclaimed and developed into a public recreational space during the mid-20th century. Today, the park features a variety of tree species, including sycamores, willows, and pines, interspersed with jogging tracks and sports facilities. It serves as a crucial green lung for the densely populated Serravalle region, providing space for outdoor activities and community events. Its proximity to the Italian border makes it a significant ecological corridor. Ausa Park is frequently used for local festivals and sporting competitions, making it a hub of social and recreational life in San Marino.",
      es: "El Parque Ausa ofrece un refugio verde en la zona industrial de Serravalle y promueve activamente el deporte y la recreación para todas las generaciones.",
      pt: "O Parque Ausa oferece um refúgio verde na Serravalle de cariz industrial e promove ativamente o desporto e o lazer para todas as gerações.",
      fr: "Le parc Ausa offre un refuge de verdure dans la zone industrielle de Serravalle et favorise activement le sport et la détente pour toutes les générations.",
    },
    facts: {
      de: ["Der Park bietet viele Sport- und Freizeiteinrichtungen."],
      hu: ["A park számos sport- és szabadidős létesítményt kínál."],
      ro: ["Parcul oferă multe facilităţi sportive şi de agrement."],
      en: ["The park offers many sports and recreational facilities."],
      es: ["El parque ofrece muchas instalaciones deportivas y recreativas."],
      pt: ["O parque oferece muitas instalações desportivas e de lazer."],
      fr: ["Le parc propose de nombreuses installations sportives et de loisirs."],
    },
    factsAdvanced: {
      de: ["Größter öffentlicher Park der Republik San Marino", "Liegt im Castello von Serravalle nahe Dogana", "Benannt nach dem Bach Ausa, der dort fließt", "Ehemaliges Sumpfgebiet, im 20. Jh. rekultiviert", "Besitzt ein ausgedehntes Netz an Radwegen", "Veranstaltungsort für das jährliche 'Festa dell'Amicizia'"],
      hu: ["San Marino legnagyobb kiterjedésű közparkja", "Serravalle önkormányzatában található", "Az Ausa-patak mentén helyezkedik el", "A 20. században csapolták le a mocsarakat", "Számos ingyenes sportpálya és játszótér üzemel itt", "Fontos ökológiai folyosó az olasz határnál"],
      ro: ["Cea mai mare zonă verde din San Marino", "Amplasat în districtul Serravalle, lângă Dogana", "Urmează cursul pârâului cu același nume", "Zonă recuperată dintr-o veche mlaștină", "Include facilități pentru fitness în aer liber", "Gazda principală a evenimentelor sociale locale"],
      en: ["Largest public park in the Republic of San Marino", "Located in the Serravalle castle district", "Centered around the historic Ausa stream", "Reclaimed from marshland in the mid-1900s", "Features extensive pedestrian and bicycle paths", "Hosts various national celebrations and concerts"],
      es: ["La infraestructura se amplía continuamente.", "El parque es un importante punto de encuentro para las familias locales.", "Las zonas verdes son muy valiosas en Serravalle.", "El parque es ideal para el jogging y actividades de tiempo libre.", "Contribuye a la calidad de vida en la zona industrial.", "Las instalaciones están muy bien cuidadas."],
      pt: ["A infraestrutura é continuamente expandida.", "O parque é um importante ponto de encontro para as famílias locais.", "As áreas verdes são muito valiosas em Serravalle.", "O parque é ideal para jogging e atividades de lazer.", "Contribui para a qualidade de vida na zona industrial.", "O complexo é muito bem cuidado."],
      fr: ["L'infrastructure est continuellement étendue.", "Le parc est un lieu de rencontre important pour les familles locales.", "Les espaces verts sont très précieux à Serravalle.", "Le parc est idéal pour le jogging et les activités de loisirs.", "Il contribue à la qualité de vie dans la zone industrielle.", "Le site est très bien entretenu."],
    },
    image: "/geo-images/sanmarino/nat-parco-ausa.webp"
  },
  {
    id: "nat-sentiero-rupe",
    type: "landmark",
    parent: "SM-009",
    coords: [12.4430, 43.9350],
    name: {
      de: "Rupe-Wanderweg",
      hu: "Rupe túraútvonal",
      ro: "Traseul Rupe",
      en: "Rupe Trail"
    },
    description: {
      de: "Ein malerischer Wanderweg entlang der Felsklippen des Monte Titano, der Borgo Maggiore mit der Hauptstadt verbindet.",
      hu: "Festői túraútvonal a Titano-hegy sziklái mentén, amely Borgo Maggiorét köti össze a fővárossal.",
      ro: "Un traseu pitoresc de-a lungul stâncilor Muntelui Titano, care leagă Borgo Maggiore de capitală.",
      en: "A scenic hiking trail along the cliffs of Mount Titano, connecting Borgo Maggiore with the capital.",
      es: "Un pintoresco sendero a lo largo de los acantilados del Monte Titano que conecta Borgo Maggiore con la capital.",
      pt: "Um trilho pitoresco ao longo das falésias do Monte Titano que liga Borgo Maggiore à capital.",
      fr: "Un sentier de randonnée pittoresque le long des falaises du mont Titano, reliant Borgo Maggiore à la capitale.",
    },
    descriptionAdvanced: {
      de: "Der Sentiero della Rupe ist einer der spektakulärsten Wanderwege in San Marino und führt entlang der steilen Klippen des Monte Titano. Der Pfad verbindet den Ort Borgo Maggiore mit dem historischen Zentrum von San Marino Stadt und bietet dabei einzigartige Einblicke in die geologischen Schichten des Berges. Der Weg verläuft teilweise durch dichte Steineichenwälder und führt an historischen Verteidigungsanlagen und alten Höhlen vorbei, die einst als Schutzräume dienten. Auf einer Länge von etwa 4 Kilometern erleben Wanderer den Kontrast zwischen der unberührten Natur der Felswände und der mittelalterlichen Architektur der darüber liegenden Türme. Geologisch gesehen bietet der Pfad die beste Möglichkeit, den Kalkarenit von San Marino aus nächster Nähe zu betrachten, der reich an Fossilien ist. Der Weg wurde in den letzten Jahren umfassend gesichert und markiert, um Touristen den Zugang zur natürlichen Schönheit des UNESCO-Welterbes zu ermöglichen.",
      hu: "A Sentiero della Rupe San Marino egyik leglátványosabb túraútvonala, amely a Monte Titano meredek sziklafalai mentén húzódik. Az ösvény összeköti Borgo Maggiore települését San Marino történelmi belvárosával, miközben lenyűgöző rálátást biztosít a hegy geológiai szerkezetére. Az út sűrű magyaltölgy erdőkön keresztül vezet, elhaladva régi védelmi falak és természetes barlangok mellett, amelyek a történelem során többször szolgáltak óvóhelyként. A nagyjából 4 kilométer hosszú szakasz bemutatja a hegy északi oldalának vadságát, éles kontrasztban állva a hegytetőn lévő elegáns tornyokkal. A túrázók itt testközelből figyelhetik meg a vidékre jellemző meszes homokkő rétegeket, amelyek gazdagok miocén kori tengeri maradványokban. Az ösvényt az elmúlt években modernizálták és biztonságossá tették, így ma már az UNESCO Világörökség részét képező terület egyik legfontosabb ökoturisztikai attrakciója.",
      ro: "Sentiero della Rupe este unul dintre cele mai spectaculoase trasee de drumeție din San Marino, șerpuind de-a lungul stâncilor abrupte ale Muntelui Titano. Poteca face legătura între localitatea Borgo Maggiore și centrul istoric al orașului San Marino, oferind perspective unice asupra straturilor geologice ale masivului. Traseul traversează păduri dese de stejar și trece pe lângă vechi ziduri de apărare și peșteri naturale care au servit drept adăpost de-a lungul secolelor. Cu o lungime de aproximativ 4 kilometri, acest drum evidențiază contrastul dintre natura sălbatică a pereților stâncoși și arhitectura medievală a turnurilor situate pe culme. Din punct de vedere geologic, traseul permite observarea directă a calcarenitului de San Marino, o rocă bogată în fosile marine. Recent, poteca a fost reamenajată cu parapete de siguranță și panouri informative, devenind o destinație esențială pentru turiștii interesați de ecoturism și istoria naturală a micului stat.",
      en: "The Sentiero della Rupe is one of the most scenic hiking trails in San Marino, tracing the rugged cliffs of Mount Titano. This path connects the lower town of Borgo Maggiore with the historic capital city, offering unparalleled views of the mountain's geological formations. The trail meanders through dense holm oak forests and passes by ancient defensive walls and natural caves that have historically provided shelter. Spanning approximately 4 kilometers, it showcases the wild northern face of the mountain, contrasting with the manicured medieval towers above. Geologically, the trail provides an up-close look at the fossil-rich calcarenite of San Marino, dating back to the Miocene epoch. In recent years, the path has been significantly upgraded with safety barriers and informational signs, establishing it as a premier destination for hikers exploring the natural beauty of this UNESCO World Heritage site.",
      es: "El sendero Rupe es un paraíso para los aventureros y ofrece formaciones rocosas dramáticas junto con vistas espectaculares de la región.",
      pt: "O trilho Rupe é um paraíso para aventureiros e oferece formações rochosas dramáticas combinadas com vistas espetaculares sobre a região.",
      fr: "Le sentier Rupe est un paradis pour les aventuriers, offrant des formations rocheuses spectaculaires alliées à des vues imprenables sur la région.",
    },
    facts: {
      de: ["Der Weg führt durch dichte Wälder und bietet steile Felswände."],
      hu: ["Az út sűrű erdőkön halad keresztül és meredek sziklafalakat kínál."],
      ro: ["Traseul trece prin păduri dese și oferă pereți abrupți de stâncă."],
      en: ["The trail passes through dense forests and features steep cliff faces."],
      es: ["El camino atraviesa densos bosques y presenta paredes de roca escarpadas."],
      pt: ["O caminho atravessa florestas densas e apresenta paredes rochosas íngremes."],
      fr: ["Le chemin traverse des forêts denses et présente des parois rocheuses abruptes."],
    },
    factsAdvanced: {
      de: ["Länge von ca. 4 Kilometern als Rundweg", "Verbindet Borgo Maggiore mit der Stadt San Marino", "Führt durch seltene Steineichenwälder (Quercus ilex)", "Passiert historische Höhlen und Felsspalten", "Bietet Blick auf den Bergkamm des Apennin", "Teil des UNESCO-Welterbegebiets Monte Titano"],
      hu: ["Körülbelül 4 kilométer hosszú körút", "Borgo Maggiore és a főváros között halad", "Ritka magyaltölgy erdőkön vezet keresztül", "Történelmi barlangok és sziklák mentén halad", "Kiváló kilátás nyílik az Appenninek vonulataira", "Az UNESCO Világörökség védett övezetéhez tartozik"],
      ro: ["Lungime de aproximativ 4 kilometri", "Leagă Borgo Maggiore de orașul San Marino", "Traversează păduri de stejar mediteranean", "Include pasaje pe lângă peșteri istorice", "Oferă vederi panoramice spre Munții Apenini", "Integrat în zona de protecție UNESCO"],
      en: ["Approximately 4 kilometers long loop trail", "Connects Borgo Maggiore with San Marino City", "Passes through rare holm oak forests", "Features ancient rock shelters and crevices", "Offers views of the Apennine mountain range", "Located within the UNESCO World Heritage buffer zone"],
      es: ["El camino es un punto destacado para los amantes del senderismo.", "Se experimenta la naturaleza y la historia de primera mano.", "El sendero está excelentemente señalizado.", "En algunos tramos, el camino es exigente.", "La combinación de bosque y roca es única.", "La conexión de los lugares a través de esta senda es una tradición milenaria."],
      pt: ["O caminho é um destaque para os amantes de caminhadas.", "Vivencia-se a natureza e a história de perto.", "O trilho está excelentemente sinalizado.", "Em algumas secções, o caminho é exigente.", "A combinação de floresta e rocha é única.", "A ligação das localidades através deste caminho é uma tradição secular."],
      fr: ["Le sentier est un moment fort pour les amateurs de randonnée.", "On y découvre la nature et l'histoire au plus près.", "Le sentier est parfaitement balisé.", "Le parcours est exigeant sur certains tronçons.", "La combinaison de forêt et de roche est unique.", "La liaison entre les localités par ce sentier est une tradition séculaire."],
    },
    image: "/geo-images/sanmarino/nat-sentiero-rupe.webp"
  },
  {
    id: "nat-lago-faetano",
    type: "landmark",
    parent: "SM-003",
    coords: [12.508, 43.931],
    name: {
      de: "See von Faetano",
      hu: "Faetanói-tó",
      ro: "Lacul Faetano",
      en: "Faetano Lake"
    },
    description: {
      de: "Ein künstlicher See in der Gemeinde Faetano, beliebt zum Sportfischen.",
      hu: "Mesterséges tó Faetano községben, népszerű a sporthorgászok körében.",
      ro: "Un lac artificial în comuna Faetano, popular pentru pescuitul sportiv.",
      en: "An artificial lake in the municipality of Faetano, popular for sport fishing.",
      es: "Un lago artificial en el municipio de Faetano, popular para la pesca deportiva.",
      pt: "Um lago artificial no município de Faetano, popular para a pesca desportiva.",
      fr: "Un lac artificiel dans la commune de Faetano, populaire pour la pêche sportive.",
    },
    descriptionAdvanced: {
      de: "Der Lago di Faetano ist ein künstlich angelegter See in der Gemeinde Faetano im Osten der Republik San Marino. Er wurde im Jahr 1968 geschaffen, um den Bürgern Raum für Freizeitaktivitäten und Sportfischerei zu bieten. Der See wird durch das Wasser des Marano-Baches gespeist, der die Grenze zwischen San Marino und Italien markiert. Mit einer Fläche von etwa 0,6 Hektar ist er das größte stehende Gewässer des Kleinstaates und ein wichtiges lokales Ökosystem für Amphibien und Wasservögel. Die Umgebung des Sees ist mit Weiden und Pappeln bepflanzt, die in den Sommermonaten Schatten spenden. In den Gewässern leben verschiedene Fischarten wie Forellen, Karpfen und Barsche, was den See zu einem beliebten Ziel für Angler aus der gesamten Region macht. Der Ort dient auch als Erholungsgebiet mit Picknickplätzen und Wanderwegen, die in die sanfte Hügellandschaft des Castello von Faetano führen.",
      hu: "A Lago di Faetano egy mesterségesen létrehozott tó San Marino keleti részén, Faetano önkormányzatában. A tavat 1968-ban alakították ki azzal a céllal, hogy a lakosság számára rekreációs területet és sporthorgászati lehetőséget biztosítsanak. Vízutánpótlását a Marano-patak szolgáltatja, amely egyben San Marino és Olaszország természetes határvonalát is jelenti. Közel 0,6 hektáros vízfelületével ez az apró állam legnagyobb állóvize, amely fontos élőhelyet biztosít kétéltűeknek és vízimadaraknak. A tó partját fűzfák és nyárfák szegélyezik, kellemes környezetet biztosítva a pihenésre vágyóknak. A vízben rendszeresen telepítenek pisztrángot, pontyot és sügért, így a helyi horgászegyesületek központjaként is funkcionál. A környék népszerű kirándulóhely, ahol piknikezőhelyek és jól jelzett gyalogutak várják a látogatókat Faetano dombos vidékén.",
      ro: "Lacul Faetano este un lac artificial situat în estul Republicii San Marino, în districtul (castello) cu același nume. A fost creat în anul 1968 pentru a oferi locuitorilor o zonă de agrement și un spațiu dedicat pescuitului sportiv. Lacul este alimentat de apele pârâului Marano, care marchează granița naturală dintre San Marino și Italia. Cu o suprafață de aproximativ 0,6 hectare, acesta reprezintă cea mai mare întindere de apă stătătoare din țară și un micro-ecosistem vital pentru amfibieni și păsări de apă. Malurile sunt umbrite de sălcii și plopi, creând un cadru natural relaxant. În apele lacului pot fi găsite specii de pești precum păstrăvul, crapul și bibanul, fiind o destinație preferată pentru pescarii locali. Zona este dotată cu spații pentru picnic și trasee care fac legătura cu dealurile din jur, facilitând explorarea peisajului rural sanmarinez.",
      en: "Lake Faetano is an artificial lake located in the eastern municipality of Faetano in the Republic of San Marino. Established in 1968, the lake was designed to provide a recreational area and a dedicated site for sport fishing. It is fed by the Marano stream, which forms part of the natural border between San Marino and Italy. Covering an area of about 0.6 hectares, it is the largest body of standing water in the microstate and serves as a vital local ecosystem for amphibians and aquatic birds. The lakeside is lined with willows and poplars, offering shade for visitors during the summer months. The waters are stocked with fish species such as trout, carp, and perch, making it a popular spot for local angling clubs. The surrounding area features picnic facilities and hiking trails that lead into the scenic rolling hills of the Faetano district.",
      es: "Este lago es un oasis de tranquilidad en Faetano, que no solo atrae a pescadores, sino que también ofrece un paisaje apacible a todos los visitantes.",
      pt: "Este lago é um oásis de tranquilidade em Faetano, que não só atrai pescadores, mas também oferece uma paisagem serena a todos os visitantes.",
      fr: "Ce lac est une oasis de calme à Faetano, qui attire non seulement les pêcheurs, mais offre également un paysage paisible à tous les visiteurs.",
    },
    facts: {
      de: ["Ruhiger Ort für Picknicks.", "Regelmäßige Angelwettbewerbe.", "Kleine Oase der Ruhe."],
      hu: ["Nyugodt hely piknikezéshez.", "Rendszeres horgászversenyek.", "A nyugalom kis oázisa."],
      ro: ["Loc liniştit pentru picnicuri.", "Competiţii regulate de pescuit.", "Mică oază de linişte."],
      en: ["Quiet spot for picnics.", "Regular fishing competitions.", "Small oasis of peace."],
      es: ["Lugar tranquilo para picnics.", "Competiciones de pesca regulares.", "Pequeño oasis de paz."],
      pt: ["Local tranquilo para piqueniques.", "Competições de pesca regulares.", "Pequeno oásis de paz."],
      fr: ["Lieu calme pour les pique-niques.", "Compétitions de pêche régulières.", "Petite oasis de paix."],
    },
    factsAdvanced: {
      de: ["Künstlich angelegter See, Baujahr 1968", "Größtes stehendes Gewässer in San Marino", "Gespeist durch den Bach Marano", "Zentrum für lokale Sportfischerei (Forellen, Karpfen)", "Fläche von etwa 6.000 Quadratmetern", "Befindet sich im östlichen Castello von Faetano"],
      hu: ["1968-ban létrehozott mesterséges tó", "San Marino legnagyobb állóvize", "A Marano-patak táplálja vízzel", "A helyi sporthorgászat központja", "Felszíne körülbelül 0,6 hektár (6000 m2)", "Faetano önkormányzatának területén fekszik"],
      ro: ["Lac artificial creat în anul 1968", "Cea mai mare acumulare de apă din San Marino", "Alimentat de pârâul de frontieră Marano", "Locație principală pentru pescuitul sportiv", "Suprafață totală de aproximativ 0,6 hectare", "Situat în districtul estic Faetano"],
      en: ["Artificial lake established in 1968", "Largest standing water body in San Marino", "Fed by the Marano stream border watercourse", "Hub for local sport fishing (trout and carp)", "Surface area of approximately 0.6 hectares", "Located within the Faetano castle district"],
      es: ["El agua se mantiene ecológicamente.", "Las instalaciones son muy adecuadas para familias.", "La tranquilidad contribuye a la relajación.", "La cultura de la pesca es una parte esencial de la vida social local.", "El paisaje está diseñado de forma muy armoniosa.", "Un hermoso lugar para la observación de la naturaleza."],
      pt: ["A água é tratada ecologicamente.", "O complexo é muito adequado para famílias.", "A tranquilidadade contribui para o relaxamento.", "A cultura da pesca é uma parte essencial da vida social local.", "A paisagem está harmoniosamente planeada.", "Um belo local para observação da natureza."],
      fr: ["L'eau est entretenue de manière écologique.", "Le site est très bien adapté aux familles.", "Le calme contribue à la détente.", "La culture de la pêche est une part essentielle de la vie sociale locale.", "Le paysage est aménagé de façon très harmonieuse.", "Un bel endroit pour l'observation de la nature."],
    }, image: "/poi-images/nat-lago-faetano.webp"},
  {
    id: "nat-pineta-chiesanuova",
    type: "landmark",
    parent: "SM-006",
    coords: [12.415, 43.902],
    name: {
      de: "Kiefernwald von Chiesanuova",
      hu: "Chiesanuovai fenyőerdő",
      ro: "Pădurea de pini Chiesanuova",
      en: "Chiesanuova Pine Forest"
    },
    description: {
      de: "Ein geschütztes Waldgebiet, das ideal zum Wandern und Entspannen ist.",
      hu: "Védett erdős terület, amely ideális túrázáshoz és kikapcsolódáshoz.",
      ro: "O zonă forestieră protejată, ideală pentru drumeţii şi relaxare.",
      en: "A protected forested area ideal for hiking and relaxation.",
      es: "Una zona forestal protegida, ideal para el senderismo y el relax.",
      pt: "Uma área florestal protegida, ideal para caminhadas e relaxamento.",
      fr: "Une zone forestière protégée, idéale pour la randonnée et la détente.",
    },
    descriptionAdvanced: {
      de: "Die Pineta di Chiesanuova ist ein ausgedehntes Waldgebiet im Südwesten der Republik San Marino, das vor allem für seine dichten Bestände an Schwarzkiefern bekannt ist. Der Wald erstreckt sich auf den Hügeln rund um das Castello von Chiesanuova und liegt in einer Höhe von über 500 Metern über dem Meeresspiegel. Die Aufforstung wurde Mitte des 20. Jahrhunderts durchgeführt, um die Bodenerosion zu verhindern und ein lokales Mikroklima zu schaffen. Heute dient die Pineta als wichtiges Erholungsgebiet mit zahlreichen Wanderwegen, die durch die kühle und schattige Umgebung führen. Der Wald beherbergt eine Vielzahl von Singvögeln und Kleinsäugern wie Eichhörnchen und Igel. Die Nähe zum Monte Cucco macht das Gebiet zu einem idealen Ausgangspunkt für anspruchsvollere Touren in das Hinterland von San Marino. Aufgrund der Höhenlage bietet der Wald auch an heißen Sommertagen eine angenehme Frische und ist ein beliebtes Ziel für Naturfreunde.",
      hu: "A Pineta di Chiesanuova San Marino délnyugati részén elhelyezkedő kiterjedt fenyőerdő, amely főként sűrű feketefenyő állományairól ismert. Az erdő Chiesanuova önkormányzatának dombjain terül el, több mint 500 méteres tengerszint feletti magasságban. A területet a 20. század közepén fásították be szisztematikusan a talajerózió megakadályozása és a helyi mikroklíma javítása érdekében. Napjainkban a fenyves fontos rekreációs övezet, ahol számos gondozott gyalogút vezet keresztül a hűvös, árnyas környezeten. Az erdő gazdag énekesmadarakban és kisebb emlősökben, például mókusokban és sünökben. A Monte Cucco közelsége miatt a terület ideális kiindulópont a San Marino belső vidékeit felfedező túrákhoz. Magas fekvésének köszönhetően a fenyves a legforróbb nyári napokon is felfrissülést nyújt, ezért a természetjárók és a sportolni vágyók körében igen népszerű úti cél.",
      ro: "Pineta di Chiesanuova este o zonă forestieră extinsă situată în sud-vestul Republicii San Marino, renumită pentru densitatea pinilor negri care o compun. Pădurea se întinde pe dealurile din jurul districtului Chiesanuova, la o altitudine de peste 500 de metri peste nivelul mării. Proiectul de reîmpădurire a fost demarat la mijlocul secolului al XX-lea pentru a combate eroziunea solului și pentru a îmbunătăți microclimatul local. Astăzi, Pineta servește drept o zonă importantă de agrement, având numeroase poteci marcate care traversează mediul răcoros și umbrit. Pădurea adăpostește o varietate de păsări cântătoare și mamifere mici, precum veverițele și aricii. Proximitatea față de muntele Cucco face din această zonă un punct de plecare ideal pentru drumeții mai lungi în regiunile rurale ale țării. Datorită altitudinii sale, pădurea oferă o temperatură plăcută chiar și în zilele caniculare de vară, fiind o destinație preferată de iubitorii de natură.",
      en: "The Chiesanuova Pine Forest (Pineta di Chiesanuova) is a vast woodland area in the southwestern part of San Marino, primarily known for its dense stands of Austrian pines. The forest blankets the hills surrounding the Chiesanuova district, situated at an altitude exceeding 500 meters above sea level. This forested area was established through systematic reforestation efforts in the mid-20th century to prevent soil erosion and improve the local microclimate. Today, it serves as a premier recreational site, featuring numerous well-maintained trails that lead through the cool, shaded environment. The forest is home to various songbirds and small mammals, such as squirrels and hedgehogs. Its location near Mount Cucco makes it an ideal starting point for more extensive treks into San Marino's rural interior. Due to its elevation, the forest remains pleasantly cool during the hot summer months, making it a popular destination for nature enthusiasts and hikers.",
      es: "Este bosque de pinos es una joya natural en Chiesanuova que proporciona una sombra fresca, especialmente en verano, e invita al descanso.",
      pt: "Este pinhal é uma joia natural em Chiesanuova que, especialmente no verão, oferece uma sombra fresca e convida ao relaxamento.",
      fr: "Cette pinède est un joyau naturel de Chiesanuova qui offre une ombre fraîche, surtout en été, et invite à la détente.",
    },
    facts: {
      de: ["Heimat vieler lokaler Vogelarten.", "Bietet kühle Schatten im Sommer.", "Gut markierte Wanderwege."],
      hu: ["Számos helyi madárfaj otthona.", "Hűvös árnyékot nyújt nyáron.", "Jól jelzett túraútvonalak."],
      ro: ["Adăposteşte multe specii locale de păsări.", "Oferă umbră răcoroasă vara.", "Trasee de drumeţie bine marcate."],
      en: ["Home to many local bird species.", "Offers cool shade in summer.", "Well-marked hiking trails."],
      es: ["Hogar de muchas especies de aves locales.", "Ofrece sombra fresca en verano.", "Senderos bien señalizados."],
      pt: ["Habitat de muitas espécies de aves locais.", "Oferece sombra fresca no verão.", "Trilhos bem sinalizados."],
      fr: ["Refuge de nombreuses espèces d'oiseaux locales.", "Offre une ombre fraîche en été.", "Sentiers de randonnée bien balisés."],
    },
    factsAdvanced: {
      de: ["Dichter Schwarzkiefernbestand (Pinus nigra)", "Liegt in einer Höhe von über 500 Metern", "Gepflanzt in den 1950er Jahren zur Erosionskontrolle", "Beherbergt Fitnesspfade und Erholungszonen", "Angrenzend an das italienische Grenzgebiet", "Wichtiges Habitat für Spechte und Singvögel"],
      hu: ["Sűrű feketefenyő állomány jellemzi", "Több mint 500 méterrel a tengerszint felett fekszik", "Az 1950-es években ültették erózióvédelem céljából", "Karbantartott erdei tornapályák találhatók itt", "Közvetlenül határos az olasz területekkel", "Harkályok és énekesmadarak fontos élőhelye"],
      ro: ["Pădure densă compusă din pini negri", "Situată la o altitudine de peste 500 m", "Plantată în anii '50 pentru prevenirea eroziunii", "Dispune de trasee pentru fitness în aer liber", "Se învecinează direct cu teritoriul italian", "Habitat esențial pentru ciocănitori și păsări mici"],
      en: ["Densely populated by Austrian pines (Pinus nigra)", "Located at an altitude above 500 meters", "Reforested in the 1950s for erosion control", "Features outdoor fitness trails and rest areas", "Borders the Italian territory of the Marche region", "Significant habitat for woodpeckers and songbirds"],
      es: ["El bosque es un hábitat importante para la fauna local.", "Los senderos bien señalizados son ideales para cualquier excursionista.", "El bosque es un factor esencial para la calidad del aire.", "La tranquilidad es un gran valor en el mundo moderno.", "Los pinos confieren al bosque una fragancia especial.", "Es un excelente ejemplo de medidas de protección forestal."],
      pt: ["A floresta é um habitat importante para a fauna local.", "Os caminhos bem sinalizados são ideais para qualquer caminhante.", "A floresta é um fator essencial para a qualidade do ar.", "A tranquilidade é um grande trunfo no mundo moderno.", "Os pinheiros conferem à floresta um aroma especial.", "É um excelente exemplo de medidas de proteção florestal."],
      fr: ["La forêt est un habitat important pour la faune locale.", "Les sentiers bien balisés sont idéaux pour tous les randonneurs.", "La forêt est un facteur essentiel de la qualité de l'air.", "Le calme est un bien précieux dans le monde moderne.", "Les pins confèrent à la forêt un parfum particulier.", "C'est un excellent exemple de mesures de protection des forêts."],
    }, image: "/poi-images/nat-pineta-chiesanuova.webp"},
  {
    id: "nat-rupe-baldasserona",
    type: "landmark",
    parent: "SM-008",
    coords: [12.425, 43.948],
    name: {
      de: "Rupe della Baldasserona",
      hu: "Baldasserona-szikla",
      ro: "Stânca Baldasserona",
      en: "Baldasserona Cliff"
    },
    description: {
      de: "Ein historisch bedeutender Felsen, an dem der Heilige Marinus laut Überlieferung lebte.",
      hu: "Történelmileg jelentős szikla, ahol a hagyomány szerint Szent Marinus élt.",
      ro: "O stâncă de importanţă istorică unde, conform tradiţiei, a trăit Sfântul Marinus.",
      en: "A historically significant cliff where Saint Marinus is said to have lived.",
      es: "Una roca de importancia histórica donde, según la tradición, vivió San Marino.",
      pt: "Uma rocha de importância histórica onde, segundo a tradição, viveu São Marinho.",
      fr: "Un rocher d'importance historique où, selon la tradition, vécut Saint Marin.",
    },
    descriptionAdvanced: {
      de: "Die Rupe di Baldasserona ist eine markante Felswand unterhalb des Ortes Borgo Maggiore in San Marino. Dieser etwa 200 Meter hohe Abgrund ist eng mit der Gründungslegende der Republik verbunden, da sich hier eine Höhle befinden soll, in der der heilige Marinus im Jahr 301 n. Chr. Zuflucht suchte. Geologisch gesehen besteht die Klippe aus dem charakteristischen Kalkarenit des Monte Titano, der durch Verwitterung bizarre Formationen und zahlreiche kleine Kavernen gebildet hat. Der Bereich ist heute als archäologische und religiöse Stätte von großer Bedeutung, da in den Felsspalten Spuren antiker Siedlungen gefunden wurden. Wanderwege führen unterhalb der Wand entlang und bieten eine beeindruckende Perspektive auf die vertikalen Felsmassen, die die Oberstadt von der Unterstadt trennen. Die Rupe ist auch ein wichtiger ökologischer Standort für seltene Felsenpflanzen und dient als Nistplatz für Greifvögel. Die Kombination aus mythologischer Bedeutung und geologischer Dramatik macht sie zu einem einzigartigen Punkt in der san-marinesischen Landschaft.",
      hu: "A Rupe di Baldasserona egy monumentális sziklafal, amely Borgo Maggiore települése alatt található San Marinóban. Ez a mintegy 200 méter magas szakadék szorosan összefonódik a köztársaság alapításának legendájával, ugyanis a hagyomány szerint itt található az a barlang, ahol Szent Marinus 301-ben menedéket lelt. Geológiai szempontból a szikla a Monte Titano jellegzetes meszes homokkőzetéből épül fel, amely az erózió hatására bizarr formákat és számos kisebb üreget öltött. A terület ma kiemelkedő régészeti és vallási helyszín, mivel a sziklahasadékokban ókori települések nyomait is felfedezték. A sziklafal tövében vezető ösvények lenyűgöző kilátást nyújtanak a függőleges kőtömegekre, amelyek természetes választóvonalat képeznek az alsó és felső városrészek között. A Rupe különleges sziklalakó növények élőhelye és ragadozó madarak kedvelt fészkelőhelye. A mitológiai háttér és a drámai geológiai látvány San Marino egyik legkülönlegesebb pontjává teszi.",
      ro: "Rupe di Baldasserona este o faleză stâncoasă impunătoare situată sub localitatea Borgo Maggiore în San Marino. Acest perete abrupt, cu o înălțime de aproximativ 200 de metri, este strâns legat de legenda fondării republicii, deoarece tradiția indică aici existența peșterii unde Sfântul Marinus s-a refugiat în anul 301 d.Hr. Din punct de vedere geologic, stânca este formată din calcarenitul caracteristic Muntelui Titano, prezentând formațiuni bizare și numeroase mici cavități rezultate în urma eroziunii. Zona are o mare importanță arheologică și religioasă, în crăpăturile stâncii fiind descoperite urme ale unor așezări antice. Traseele de drumeție care trec pe la baza falezei oferă o perspectivă impresionantă asupra maselor verticale de piatră care separă orașul de jos de cel de sus. Rupe este, de asemenea, un sit ecologic important pentru plante rupicole rare și servește drept loc de cuibărit pentru păsările de pradă. Mixul de semnificație mitologică și dramatism geologic o transformă într-un reper unic în peisajul sanmarinez.",
      en: "The Baldasserona Cliff (Rupe di Baldasserona) is a striking vertical rock face located beneath the town of Borgo Maggiore in San Marino. This precipice, standing approximately 200 meters high, is deeply entwined with the republic's founding legend, as it is said to contain the cave where Saint Marinus sought refuge in 301 AD. Geologically, the cliff is composed of the characteristic San Marino calcarenite, which has been sculpted by weathering into bizarre shapes and numerous small caverns. The area holds significant archaeological and religious value, with traces of ancient settlements found within its rocky crevices. Hiking paths running along the base of the cliff offer an imposing perspective on the massive stone walls that divide the lower and upper sectors of the state. The cliff is also a vital ecological site for rare rock-dwelling plants and serves as a nesting ground for birds of prey. Its combination of mythological heritage and geological drama makes it a unique feature of the San Marinese landscape.",
      es: "La Rupe della Baldasserona es un punto de referencia espiritual y geológico que ilustra la profunda conexión de San Marino con su fundador Marino.",
      pt: "A Rupe della Baldasserona é um ponto de referência espiritual e geológico que ilustra a profunda ligação de San Marino ao seu fundador Marinho.",
      fr: "La Rupe della Baldasserona est un point d'ancrage spirituel et géologique qui illustre le lien profond de Saint-Marin avec son fondateur Marin.",
    },
    facts: {
      de: ["Religiöser Wallfahrtsort.", "Beeindruckende geologische Formation.", "Bietet Blick auf das Marecchia-Tal."],
      hu: ["Vallási zarándokhely.", "Lenyűgöző geológiai képződmény.", "Kilátást nyújt a Marecchia-völgyre."],
      ro: ["Loc de pelerinaj religios.", "Formaţiune geologică impresionantă.", "Oferă vedere spre Valea Marecchia."],
      en: ["Religious pilgrimage site.", "Impressive geological formation.", "Offers views of the Marecchia Valley."],
      es: ["Lugar de peregrinación religiosa.", "Impresionante formación geológica.", "Ofrece vistas al valle del Marecchia."],
      pt: ["Local de peregrinação religiosa.", "Impressionante formação geológica.", "Oferece vista sobre o vale do Marecchia."],
      fr: ["Lieu de pèlerinage religieux.", "Impressionnante formation géologique.", "Offre une vue sur la vallée de la Marecchia."],
    },
    factsAdvanced: {
      de: ["Felswand mit ca. 200 Metern Höhe", "Legendärer Zufluchtsort des Heiligen Marinus (301 n. Chr.)", "Geologische Formation aus San-Marino-Kalkarenit", "Archäologische Fundstätte antiker Siedlungsspuren", "Befindet sich direkt unterhalb von Borgo Maggiore", "Nistplatz für Turmfalken und andere Raubvögel"],
      hu: ["Körülbelül 200 méter magas sziklafal", "Szent Marinus legendás menedékhelye (i.sz. 301)", "San Marino-i meszes homokkőből épül fel", "Ókori települések nyomait őrző régészeti helyszín", "Közvetlenül Borgo Maggiore alatt fekszik", "Vörös vércsék és más ragadozók fészkelőhelye"],
      ro: ["Perete stâncos de aproximativ 200 de metri", "Refugiul legendar al Sfântului Marinus (anul 301)", "Compusă din calcarenit specific Muntelui Titano", "Sit arheologic cu vestigii ale unor locuințe antice", "Situată imediat sub Borgo Maggiore", "Loc de cuibărit pentru vânturei și șoimi"],
      en: ["Rock cliff approximately 200 meters high", "Legendary refuge of Saint Marinus in 301 AD", "Formed from the unique San Marino calcarenite", "Archaeological site with traces of ancient dwellings", "Positioned directly below Borgo Maggiore", "Nesting site for kestrels and other birds of prey"],
      es: ["El lugar respira historia y espiritualidad.", "Las formaciones geológicas atraen a científicos.", "La vista del valle es una experiencia inolvidable.", "Para los lugareños, es un lugar de meditación.", "Su importancia para la historia fundacional es inmensa.", "La roca es un monumento natural protegido."],
      pt: ["O local respira história e espiritualidade.", "As formações geológicas atraem cientistas.", "A vista para o vale é uma experiência inesquecível.", "Para os habitantes locais, é um lugar de meditação.", "A importância para a história da fundação é imensa.", "A rocha é um monumento natural protegido."],
      fr: ["Le lieu respire l'histoire et la spiritualité.", "Les formations géologiques attirent les scientifiques.", "La vue sur la vallée est une expérience inoubliable.", "Pour les habitants, c'est un lieu de méditation.", "L'importance pour l'histoire de la fondation est immense.", "Le rocher est un monument naturel protégé."],
    },
    image: "/poi-images/nat-rupe-baldasserona.webp",
  }
];

export const sanmarinoAllPoi: POI[] = [sanmarinoCountry,
  ...sanmarinoRegions,
  ...sanmarinoCities,
  ...sanmarinoCulture,
  ...sanmarinoNature, ...poiExtraSanmarinoCities, ...sanmarinoExtraHistory, ...sanmarinoLandscapes];

