// @ts-nocheck
import type { POI } from "./poi";

export const austriaCities: POI[] = [
  {
    id: "at-tulln-an-der-donau",
    type: "city",
    parent: "AT-3",
    coords: [16.0589, 48.3284],
    name: { de: "Tulln an der Donau", hu: "Tulln a Duna partján", ro: "Tulln pe Dunăre", en: "Tulln an der Danube" },
    image: "/geo-images/austria/tulln-an-der-donau.webp",
    description: {
      de: "Tulln an der Donau ist eine lebendige Stadt in Niederösterreich mit starkem Bezug zum Fluss, zu Gärten und zur regionalen Landwirtschaft.",
      hu: "Tulln a Duna partján egy élénk alsó-ausztriai város, amely erősen kötődik a folyóhoz, a kertekhez és a helyi mezőgazdasághoz.",
      ro: "Tulln pe Dunăre este un oraș viu din Austria Inferioară, legat puternic de fluviu, de grădini și de agricultura regională.",
      en: "Tulln an der Danube is a lively town in Lower Austria with a strong connection to the river, gardens, and regional agriculture."
    },
    descriptionAdvanced: {
        de: "Tulln an der Donau, oft als die 'Blumenstadt' oder 'Gartenstadt' Österreichs bezeichnet, blickt auf eine beeindruckende Geschichte bis in die Römerzeit zurück, als das Kastell Comagena hier zur Sicherung der Donaugrenze errichtet wurde. Heute ist die Stadt vor allem durch die 'Garten Tulln', die erste ökologische Gartenschau Europas, international bekannt, die jährlich unzählige Gartenfreunde anzieht. Darüber hinaus bietet die weite Donaulände einen großzügigen Naherholungsraum, der stark vom Donauradweg frequentiert wird. Kulturell hat sich Tulln als Geburtsstadt des expressionistischen Malers Egon Schiele einen Namen gemacht, dem ein eigenes, hochmodernes Museum im ehemaligen Gefängnisbau gewidmet ist. Die Symbiose aus Natur, Kunst und einer florierenden Messekultur macht Tulln zu einem der attraktivsten Zentren Niederösterreichs. Sachkunde K6 — Landwirtschaft und regionale Messekultur.",
        hu: "Tulln an der Donau, gyakran a 'Rózsák városaként' emlegetve, Alsó-Ausztria egyik legrégebbi és legvirágzóbb települése. A Duna partján fekvő város története a római korig nyúlik vissza, amikor a Comagena lovastábor a Duna-limes védelmét szolgálta. Ma Tulln elsősorban Európa egyik legjelentősebb kertészeti kiállításáról és a tágas zöldterületekről ismert. A város Egon Schiele híres festőművész szülőhelye, akinek életét és munkásságát a helyi Schiele Múzeum mutatja be beletartozva a kortárs osztrák művészet elemzésébe. Földrajz K5 – osztrák városok és Duna menti települések.",
        ro: "Tulln an der Donau, adesea numit 'Orașul Grădinilor' al Austriei, are o istorie impresionantă care datează din epoca romană, când castrul Comagena a fost construit aici pentru a asigura granița dunăreană. Astăzi, orașul este renumit pe plan internațional pentru 'Garten Tulln', prima expoziție ecologică de grădini din Europa, care atrage anual nenumărați pasionați de botanică. În plus, promenada extinsă de-a lungul Dunării oferă o zonă de agrement generoasă, frecventată intens de bicicliști pe faimoasa pistă de ciclism a Dunării. Din punct de vedere cultural, Tulln s-a remarcat ca locul de naștere al pictorului expresionist Egon Schiele, căruia îi este dedicat un muzeu modern. Simbioza dintre natură, artă și cultura înfloritoare a târgurilor face din Tulln unul dintre cele mai atractive centre din Austria Inferioară.",
        en: "Tulln an der Donau, often called the 'City of Gardens,' is a historic town in Lower Austria with roots stretching back to Roman times, when it was known as the cavalry fort Comagena. Today, it is renowned for its vibrant horticultural scene, hosting the important 'Garten Tulln,' a permanent ecological garden show, and a major trade fair. The city's identity is deeply intertwined with the Danube River, with its extensive waterfront promenade (Donaulände) serving as a central recreational area for locals and a key stop on the popular Danube Cycle Path. It's also the birthplace of the famous Austrian expressionist painter Egon Schiele, whose life and work are honored in a dedicated museum."
    },
    facts: {
      de: ["Liegt direkt an der Donau in Niederösterreich.", "Gilt als Garten- und Messestadt mit starkem Freizeitprofil.", "Der Donauradweg führt durch das Stadtgebiet.", "Tulln ist ein wichtiges Zentrum des Tullnerfelds.", "Der Ort verbindet Landwirtschaft, Handel und Stadttourismus."],
      hu: ["Közvetlenül a Dunánál fekszik Alsó-Ausztriában.", "Kert- és vásárvárosként ismert, erős szabadidős kínálattal.", "A Duna-kerékpárút áthalad a városon.", "Tulln a Tullnerfeld fontos központja.", "A település a mezőgazdaságot, a kereskedelmet és a városi turizmust köti össze."],
      ro: ["Se află direct pe Dunăre, în Austria Inferioară.", "Este cunoscut ca oraș al grădinilor și al târgurilor.", "Ruta ciclistă de pe Dunăre trece prin oraș.", "Tulln este un centru important al Tullnerfeldului.", "Localitatea combină agricultura, comerțul și turismul urban."],
      en: ["Located directly on the Danube in Lower Austria.", "Known as a garden and fair town with a strong leisure profile.", "The Danube cycle path runs through the city.", "Tulln is an important center of the Tullnerfeld region.", "The town links agriculture, trade, and city tourism."]
    },
    factsAdvanced: {
        de: [
            "Das römische Reiterkastell Comagena bildete einst einen wichtigen Stützpunkt des Donaulimes.",
            "Tulln ist der Geburtsort des weltberühmten expressionistischen Malers Egon Schiele.",
            "Die 'Garten Tulln' ist Europas erste und bisher einzige rein ökologische Gartenschau.",
            "Ein imposanter Nibelungenbrunnen an der Donaulände erinnert an den Empfang Kriemhilds durch König Etzel.",
            "Die Stadt ist eine der wichtigsten Drehscheiben für Blumen- und Pflanzengroßmessen in Österreich."
        ],
        hu: [
        "Tulln az ókori Comagena római erőd helyén épült, a limest védte.",
        "A városban található az Egon Schiele Múzeum, a híres expresszionista festő emlékére.",
        "Tulln a 'Rózsák városa' nevet kapta a hatalmas virágparkok és kertek miatt.",
        "A város fontos Duna menti kikötő és kerékpáros csomópont a Donauradweg útvonalon."
      ],
        ro: ["Fostul castru roman Comagena a fost odinioară o bază importantă pentru Limesul Dunărean.", "Tulln este locul de naștere al celebrului pictor expresionist Egon Schiele.", "'Garten Tulln' este prima și singura expoziție de grădini din Europa complet ecologică.", "Orașul găzduiește importante târguri anuale dedicate florilor și plantelor."],
        en: [
            "The Roman fort Comagena, located here, was part of the Danubian Limes frontier.",
            "It is the birthplace of the renowned Expressionist painter Egon Schiele.",
            "Garten Tulln is Europe's first and only ecological garden show.",
            "The town is a major hub for flower and plant nurseries in Austria.",
            "The 'Nibelungen-Brunnen' fountain commemorates a scene from the epic poem 'Nibelungenlied' that supposedly took place in Tulln."
        ]
    }
  },
  {
    id: "at-neunkirchen-niederoesterreich",
    type: "city",
    parent: "AT-3",
    coords: [16.0808, 47.7279],
    name: { de: "Neunkirchen", hu: "Neunkirchen", ro: "Neunkirchen", en: "Neunkirchen" },
    image: "/geo-images/austria/neunkirchen-niederoesterreich.webp",
    description: {
      de: "Neunkirchen ist ein traditionsreicher Bezirkshauptort am Rand der Buckligen Welt und nahe der Semmeringregion.",
      hu: "Neunkirchen hagyományos járási székhely a Bucklige Welt peremén és a Semmering-régió közelében.",
      ro: "Neunkirchen este un centru districtual cu tradiție, aflat la marginea regiunii Bucklige Welt și aproape de zona Semmering.",
      en: "Neunkirchen is a traditional district town on the edge of the Bucklige Welt and close to the Semmering region."
    },
    descriptionAdvanced: {
        de: "Neunkirchen fungiert als lebendiges administratives und wirtschaftliches Zentrum im südlichen Niederösterreich. Eingebettet in das weite Schwarzatal an der Grenze zur Thermenlinie, florierte die Stadt besonders während der Industrialisierung des 19. Jahrhunderts durch Textil- und Metallverarbeitungsbetriebe. Der großzügige Hauptplatz mit der markanten Dreifaltigkeitssäule zeugt noch heute vom bürgerlichen Wohlstand vergangener Tage. Durch seine geografische Lage ist Neunkirchen das perfekte Sprungbrett in die Alpen: Im Westen ragen die mächtigen Gipfel von Schneeberg und Rax auf, während im Osten das sanft hügelige Gebiet der Buckligen Welt beginnt. Diese Brückenfunktion macht Neunkirchen sowohl für Pendler in Richtung Wien als auch für Naturtouristen äußerst attraktiv. Geografie K8 — Industrialisierung und Strukturwandel.",
        hu: "Neunkirchen Alsó-Ausztria déli részén, a Steinfeld régióban található fontos történelmi és ipari központ. A város gazdasági fejlődése a 19. században lendült fel, amikor textilgyárak, fémmegmunkáló üzemek és papírgyárak sora épült a régióban, részben az elérhető vízi energia miatt. Történelme azonban jóval régebbre, egészen a római korig nyúlik vissza, a középkorban pedig jelentős piaccá vált. Ma Neunkirchen élénk járási székhely, amely megőrizte történelmi főterének és plébániatemplomának középkori karakterét, miközben modern infrastruktúrát kínál. Történelem K6 – iparosodás Ausztriában.",
        ro: "Neunkirchen funcționează ca un centru administrativ și economic vibrant în sudul Austriei Inferioare. Situat în valea largă Schwarzatal, la granița cu linia termală, orașul a înflorit în timpul industrializării din secolul al XIX-lea prin companiile de textile și prelucrarea metalelor. Piața principală spațioasă, cu coloana impresionantă a Trinității, stă mărturie prosperității civice din trecut. Datorită locației sale geografice, Neunkirchen este punctul de plecare perfect către Alpi: la vest se înalță vârfurile impunătoare Schneeberg și Rax. Această funcție de punte face din Neunkirchen o atracție majoră atât pentru navetiștii spre Viena, cât și pentru turiștii naturii.",
        en: "Neunkirchen is the administrative and economic center of its district in southern Lower Austria, situated in a wide basin at the confluence of the Schwarza and Sierning rivers. Its history is tied to the industrialization of the 19th century, particularly in textiles and metalworking. The town serves as a crucial gateway to the surrounding regions: the hilly Bucklige Welt to the east and the Semmering-Rax-Schneeberg mountain area to the west. This strategic location makes it both a residential town for commuters working in Vienna and a starting point for exploring the nearby Alpine landscapes."
    },
    facts: {
      de: ["Bezirkshauptstadt im südlichen Niederösterreich.", "Nahe an der Semmeringbahn und an alpinen Ausflugszielen.", "Wichtiger Standort für Handel und Dienstleistungen.", "Das Umland öffnet den Zugang zur Buckligen Welt.", "Die Stadt ist gut per Bahn und Straße angebunden."],
      hu: ["Dél-alsó-ausztriai járási székhely.", "Közel van a Semmering-vasúthoz és az alpesi kirándulóhelyekhez.", "Fontos kereskedelmi és szolgáltató központ.", "A környék kaput nyit a Bucklige Welt felé.", "A város vasúton és közúton is jól elérhető."],
      ro: ["Este reședința districtului din sudul Austriei Inferioare.", "Se află aproape de calea ferată Semmering și de destinații alpine.", "Un centru important pentru comerț și servicii.", "Împrejurimile deschid accesul spre Bucklige Welt.", "Orașul este bine conectat prin tren și șosea."],
      en: ["District capital in southern Lower Austria.", "Close to the Semmering Railway and Alpine excursion areas.", "An important center for trade and services.", "The surrounding area opens access to the Bucklige Welt region.", "The town is well connected by rail and road."]
    },
    factsAdvanced: {
        de: [
            "Der Name 'Neunkirchen' bedeutet vermutlich 'neue Kirche', obwohl sein exakter etymologischer Ursprung oft diskutiert wird.",
            "Die Stadt liegt an der geologischen Bruchzone der Thermenlinie, ähnlich wie nahegelegene bekannte Kurorte.",
            "Der Holzplatz in der Innenstadt war früher das historische Zentrum des lokalen Holzhandels aus den umgebenden Wäldern.",
            "Neunkirchen hat sich nach dem Rückgang der Schwerindustrie erfolgreich als modernes Bildungs- und Dienstleistungszentrum etabliert."
        ],
        hu: [
        "Neunkirchen nevét az itteni 'Új templomról' kapta, amelyet 1094-ben említenek először.",
        "A 19. században fontos textilipari központtá vált Alsó-Ausztriában.",
        "A város főtere Ausztria egyik legnagyobb, szabályos téglalap alakú történelmi piaca.",
        "A Schwarza folyó biztosította a vízi energiát a korai gyárak számára."
      ],
        ro: ["Numele 'Neunkirchen' înseamnă 'noua biserică', deși originea sa exactă este încă dezbătută.", "Orașul este situat pe zona de falie geologică a liniei termale, la fel ca renumitele stațiuni balneare din apropiere.", "În centrul orașului a funcționat un vechi târg istoric de lemn din pădurile înconjurătoare.", "După declinul industriei grele, Neunkirchen a devenit un centru modern de servicii."],
        en: [
            "The name 'Neunkirchen' means 'nine churches,' though the origin of the name is debated.",
            "It lies on the 'Thermenlinie' tectonic fault line, similar to nearby spa towns.",
            "The main square is one of the largest and most geometrically unique in Lower Austria.",
            "It was a significant center for the textile industry in the 19th and 20th centuries.",
            "The town acts as an important educational center for the surrounding rural region."
        ]
    }
  },
  {
    id: "at-hollabrunn",
    type: "city",
    parent: "AT-3",
    coords: [16.0743, 48.5636],
    name: { de: "Hollabrunn", hu: "Hollabrunn", ro: "Hollabrunn", en: "Hollabrunn" },
    image: "/geo-images/austria/hollabrunn.webp",
    description: {
      de: "Hollabrunn liegt im Weinviertel und steht für Weinbau, offene Landschaften und ein ruhiges Kleinstadtgefühl.",
      hu: "Hollabrunn a Weinviertelben fekszik, és a borászatot, a nyílt tájat és a nyugodt kisvárosi hangulatot képviseli.",
      ro: "Hollabrunn se află în Weinviertel și înseamnă viticultură, peisaje deschise și atmosfera liniștită a unui oraș mic.",
      en: "Hollabrunn sits in the Weinviertel and stands for wine growing, open landscapes, and a calm small-town feel."
    },
    descriptionAdvanced: {
        de: "Eingebettet in die sanften Hügel des westlichen Weinviertels, gilt Hollabrunn als die unangefochtene Schul- und Verwaltungsstadt der Region. Ihr Charakter ist maßgeblich vom traditionellen Weinbau geprägt, was sich in den zahllosen malerischen Kellergassen widerspiegelt, die sich netzartig in den umliegenden Lössboden graben. Die Stadt profitiert von einer lebendigen Studenten- und Schülerkultur, die für eine dynamische Atmosphäre in den sonst eher ruhigen Gassen sorgt. Historisch war die Region stark von agrarischen Wirtschaftsstrukturen abhängig, doch heute positioniert sich Hollabrunn als moderne Wohnstadt mit idealer Anbindung an die Bundeshauptstadt Wien. Wer die Seele des niederösterreichischen Weinviertels samt seinen fruchtigen Weißweinen entdecken möchte, findet in Hollabrunn den perfekten Ausgangspunkt. Geschichte K7 — Landwirtschaftliche Entwicklung im ländlichen Raum.",
        hu: "Hollabrunn Alsó-Ausztria Weinviertel régiójának egyik legfontosabb városa, amely a térség oktatási, gazdasági és kulturális központja. A település nevét valószínűleg a bodzáról (Holler) és a forrásokról (Brunn) kapta, történelme során pedig mindig is fontos megállóhely volt a Bécsből északra tartó kereskedelmi utakon. A város kiemelkedik egyedülálló, 19. századi 'Kellergasse' (pinceutca) építészetével, amely a régió borászati hagyományait tükrözi. A Szent Ulrik plébániatemplom és a történelmi belváros a hagyományos osztrák vidéki élet hangulatát árasztja. Földrajz K5 – osztrák borvidékek és települések.",
        ro: "Amplasat printre dealurile blânde din vestul regiunii Weinviertel, Hollabrunn este orașul școlar și administrativ de necontestat al regiunii. Caracterul său este puternic modelat de viticultura tradițională, care se reflectă în nenumăratele străzi pitorești cu pivnițe care pătrund în solul de loess. Orașul beneficiază de o cultură studențească vibrantă, care asigură o atmosferă dinamică pe străduțele sale, altfel liniștite. Din punct de vedere istoric, regiunea a depins de structurile economice agrare, dar astăzi Hollabrunn se poziționează ca un oraș rezidențial modern, cu conexiuni ideale către capitala federală Viena. Pentru a descoperi inima regiunii Weinviertel și vinurile sale albe fructate, Hollabrunn este punctul de plecare perfect.",
        en: "Hollabrunn is the principal town of the western Weinviertel, Austria's largest wine-growing region. The town is surrounded by rolling hills and vast agricultural landscapes, characterized by vineyards, fields, and picturesque cellar lanes ('Kellergassen'). As a 'school town,' it has a high density of educational institutions, attracting students from across the region. Its history is deeply rooted in agriculture and wine, which continue to shape its economy and cultural life. Hollabrunn offers a tranquil atmosphere while serving as the commercial and administrative hub for the district."
    },
    facts: {
      de: ["Liegt im Weinviertel in Niederösterreich.", "Bekannt für Weinbau und Kellergassen.", "Ist ein regionales Schul- und Versorgungszentrum.", "Die Landschaft ist von Ackerbau und Reben geprägt.", "Guter Ausgangspunkt für Radtouren durch das Weinviertel."],
      hu: ["A Weinviertelben, Alsó-Ausztriában található.", "A bortermelésről és a pincesorokról ismert.", "Regionális iskolai és ellátó központ.", "A tájat szántóföldek és szőlők határozzák meg.", "Jó kiindulópont a Weinviertel kerékpáros túráihoz."],
      ro: ["Se află în Weinviertel, în Austria Inferioară.", "Este cunoscut pentru vinificație și cramele de tip Kellergasse.", "Este un centru regional pentru școli și servicii.", "Peisajul este dominat de câmpuri și viță-de-vie.", "Punct bun de plecare pentru tururi cu bicicleta în Weinviertel."],
      en: ["Located in the Weinviertel of Lower Austria.", "Known for wine production and cellar lanes.", "A regional hub for schools and services.", "The landscape is shaped by fields and vineyards.", "A good starting point for cycling tours through the Weinviertel."]
    },
    factsAdvanced: {
        de: [
            "Das Umland von Hollabrunn ist eines der Hauptanbaugebiete für den charakteristischen Grünen Veltliner.",
            "Die typischen 'Kellergassen' sind kulturhistorisch einzigartige Röhrensysteme, die tief in den Lösssand gegraben wurden.",
            "Die Stadt liegt direkt am Jakobsweg Weinviertel, einer beliebten Pilgerroute in Österreich.",
            "Das Stadtmuseum in der historischen 'Alten Hofmühle' bewahrt wertvolle ur- und frühgeschichtliche Funde auf.",
            "Als sogenannte 'Schulstadt' pendeln täglich Tausende von Jugendlichen aus dem gesamten Bezirk hierher."
        ],
        hu: [
        "Hollabrunn a Weinviertel régió oktatási központja, számos iskolával és intézménnyel.",
        "A város a 19. századi napóleoni háborúk során csaták színhelye volt.",
        "Hollabrunn híres a 'Kellergasse'-ról, ami a hagyományos borospincék utcája.",
        "A település fontos megálló volt a Bécsből Prágába tartó történelmi útvonalon."
      ],
        ro: ["Zona din jurul Hollabrunn este una dintre principalele regiuni de cultivare a faimosului Grüner Veltliner.", "'Kellergassen' tipice sunt sisteme unice de tunele săpate adânc în nisipul de loess.", "Orașul este situat direct pe traseul pelerinilor Jakobsweg Weinviertel.", "Ca 'oraș școlar', mii de tineri fac naveta aici zilnic din întregul district."],
        en: [
            "The region around Hollabrunn is one of Austria's most significant wine-producing areas, especially for Grüner Veltliner.",
            "The town lies on the historic 'Jakobsweg Weinviertel' pilgrimage route.",
            "Its 'Kellergassen' are unique cultural heritage sites, rows of wine cellars dug into loess soil.",
            "The town's museum 'Alte Hofmühle' showcases regional history and archaeology.",
            "Hollabrunn is an important transportation hub connecting Vienna with the northern parts of Lower Austria and the Czech Republic."
        ]
    }
  },
  {
    id: "at-zwettl-niederoesterreich",
    type: "city",
    parent: "AT-3",
    coords: [15.1671, 48.6048],
    name: { de: "Zwettl", hu: "Zwettl", ro: "Zwettl", en: "Zwettl" },
    image: "/geo-images/austria/zwettl.webp",
    description: {
      de: "Zwettl ist das Herz des Waldviertels und verbindet Klostertradition, Granitlandschaft und regionale Genusskultur.",
      hu: "Zwettl a Waldviertel központja, ahol a kolostori hagyomány, a gránittáj és a helyi gasztronómia találkozik.",
      ro: "Zwettl este inima regiunii Waldviertel și combină tradiția monastică, peisajul de granit și cultura gustului local.",
      en: "Zwettl is the heart of the Waldviertel and combines monastic tradition, granite landscapes, and local food culture."
    },
    descriptionAdvanced: {
        de: "Als pulsierendes Zentrum des rauen, naturbelassenen Waldviertels thront die Stadt Zwettl malerisch am Zusammenfluss von Kamp und Zwettl. Ihre Identität ist eng mit dem unweit gelegenen Stift Zwettl verknüpft, das seit seiner Gründung im Jahr 1138 als spiritueller und wirtschaftlicher Motor der Region dient. Das Stadtbild mit seinen gut erhaltenen Wehrmauern und barocken Bürgerhäusern spiegelt eine lange, wohlhabende Handelsgeschichte wider. Landschaftlich wird die Umgebung durch dichte Nadelwälder, ausgedehnte Teichlandschaften für die traditionelle Karpfenzucht und riesige, von der Erosion geformte Granitblöcke dominiert. Auch in kulinarischer Hinsicht hat sich Zwettl einen Namen gemacht, insbesondere durch die weithin bekannte Brauerei und den florierenden Anbau von Waldviertler Graumohn. Geografie K9 — Kulturlandschaften und monastisches Erbe.",
        hu: "Zwettl az alsó-ausztriai Waldviertel egyik festői központja, amely a Kamp folyó völgyében fekszik. A város neve szláv eredetű, és a térség kora középkori betelepülésének emlékét őrzi. Zwettl történelmi városfalai, bástyái és a régi polgárházak a mai napig kiválóan fennmaradtak, így a település megőrizte egyedülálló középkori báját. A város gazdasági és kulturális fejlődésében meghatározó szerepet játszott a közeli Zwettli apátság, amelyet a 12. században alapítottak a ciszterci szerzetesek. Történelem K5 – középkori városok és kolostorok Közép-Európában.",
        ro: "Ca un centru pulsatoriu al regiunii naturale și aspre Waldviertel, orașul Zwettl se înalță pitoresc la confluența râurilor Kamp și Zwettl. Identitatea sa este strâns legată de Abația Zwettl din apropiere, care a servit drept motor spiritual și economic al regiunii de la înființarea sa în 1138. Peisajul urban, cu zidurile sale defensive bine conservate și casele orășenești în stil baroc, reflectă o istorie comercială lungă și prosperă. Peisajul înconjurător este dominat de păduri dense de conifere, iazuri extinse pentru creșterea tradițională a crapului și blocuri uriașe de granit. Zwettl și-a făcut un nume și în domeniul culinar, mai ales prin faimoasa fabrică de bere locală și cultivarea macului cenușiu de Waldviertel.",
        en: "Zwettl is the geographic and economic heart of the Waldviertel, a region in northern Lower Austria known for its rugged granite plateaus, dense forests, and mystical atmosphere. The town is situated at the confluence of the Kamp and Zwettl rivers, a location that has shaped its development. Its identity is profoundly linked to the nearby Cistercian Abbey of Zwettl, founded in 1138, which has been a spiritual, cultural, and economic center for centuries. The region is also famous for its poppy seed cultivation and a brewing tradition that dates back to the Middle Ages, with the local Zwettler Brewery being a key institution."
    },
    facts: {
      de: ["Gilt als Zentrum des Waldviertels.", "Lage am Fluss Kamp prägt das Stadtbild.", "Historische Bausubstanz trifft auf ruhige Kleinstadtstruktur.", "Die Region ist bekannt für Granit und Wälder.", "Zwettl steht stark für Genuss, Kloster und Naturausflüge."],
      hu: ["A Waldviertel központjának számít.", "A Kamp folyó fekvése meghatározza a városképet.", "A történelmi épületek nyugodt kisvárosi szerkezettel találkoznak.", "A régió gránitról és erdőkről ismert.", "Zwettl erősen kötődik a gasztronómiához, a kolostorokhoz és a természetjáráshoz."],
      ro: ["Este considerat centrul regiunii Waldviertel.", "Așezarea pe râul Kamp definește imaginea orașului.", "Clădirile istorice se îmbină cu structura liniștită de oraș mic.", "Regiunea este cunoscută pentru granit și păduri.", "Zwettl este asociat cu gastronomia, mănăstirile și excursiile în natură."],
      en: ["Considered the center of the Waldviertel.", "Its position on the Kamp River shapes the cityscape.", "Historic buildings meet a calm small-town structure.", "The region is known for granite and forests.", "Zwettl is strongly linked to food, monasteries, and nature trips."]
    },
    factsAdvanced: {
        de: [
            "Das Zisterzienserstift Zwettl beherbergt einen der schönsten romanischen Kreuzgänge Europas.",
            "Die Waldviertler Granitblöcke (Wackelsteine) sind geologische Überbleibsel gigantischer urzeitlicher Gebirge.",
            "Der Hauptplatz wird durch den farbenfrohen, organisch geformten Hundertwasserbrunnen architektonisch bereichert.",
            "Zwettl ist ein Zentrum der österreichischen Mohnproduktion, die hier in traditionellen Mohnmühlen verarbeitet wird.",
            "Das einflussreiche Adelsgeschlecht der Kuenringer prägte im Hochmittelalter die gesamte strategische Entwicklung der Stadt."
        ],
        hu: [
        "Zwettl városa a 13. század elején kapott városi kiváltságokat a Babenbergektől.",
        "A városfal és a védművek egy része a mai napig épségben megmaradt.",
        "A név szláv eredetű ('Svetla'), ami világos irtást vagy tisztást jelent.",
        "Zwettl a Waldviertel egyik legfontosabb kereskedelmi és sörfőző központja."
      ],
        ro: ["Abația cisterciană Zwettl găzduiește una dintre cele mai frumoase mănăstiri în stil romanic din Europa.", "Blocurile de granit din Waldviertel sunt vestigii geologice ale munților preistorici uriași.", "Piața principală este îmbogățită arhitectural de fântâna organică colorată Hundertwasser.", "Zwettl este un centru al producției austriece de mac, procesat aici în morile tradiționale."],
        en: [
            "The Cistercian Abbey of Zwettl is one of the most important and best-preserved monasteries in Austria.",
            "The Waldviertel region is known for its large granite boulders, often found in mystical formations.",
            "Zwettl is a center for carp and poppy seed production, key ingredients in local cuisine.",
            "The artist Friedensreich Hundertwasser designed a fountain in the town's main square.",
            "The 'Kuenringer' noble family, powerful medieval rulers, had a significant presence in Zwettl."
        ]
    }
  },
  {
    id: "at-bischofshofen",
    type: "city",
    parent: "AT-5",
    coords: [13.2163, 47.4177],
    name: { de: "Bischofshofen", hu: "Bischofshofen", ro: "Bischofshofen", en: "Bischofshofen" },
    image: "/geo-images/austria/bischofshofen.webp",
    description: {
      de: "Bischofshofen ist ein bedeutender Ort im Pongau und steht für alpinen Verkehr, Wintersport und Salzach-Tal-Atmosphäre.",
      hu: "Bischofshofen a Pongau egyik fontos települése, amely az alpesi közlekedést, a téli sportokat és a Salzach-völgyi hangulatot képviseli.",
      ro: "Bischofshofen este o localitate importantă din Pongau și reprezintă transportul alpin, sporturile de iarnă și atmosfera văii Salzach.",
      en: "Bischofshofen is an important town in the Pongau and stands for Alpine transport, winter sports, and the Salzach Valley atmosphere."
    },
    descriptionAdvanced: {
        de: "Bischofshofen fungiert im Salzburger Bezirk Pongau als unverzichtbarer Knotenpunkt, in dem sich alpine Verkehrsrouten des Schienen- und Straßennetzes bündeln. Über seine Rolle als Wirtschaftsstandort hinaus erlangte die Stadt vor allem als Austragungsort des traditionellen Finales der Vierschanzentournee an jedem 6. Januar weltweite Bekanntheit, wenn sich Tausende Skisprungfans an der Paul-Außerleitner-Schanze versammeln. Der Name der Stadt, der im Mittelalter wurzelt, weist auf ihre Historie als Verwaltungshof der Salzburger Fürsterzbischöfe hin. Gelegen im malerischen Salzachtal, rahmen schroffe Berggipfel und das massive Tennengebirge das Stadtbild ein. Für Touristen bildet Bischofshofen das perfekte Basislager, um sowohl Skigebiete im Winter als auch ausgedehnte Wanderwege im Sommer zu erkunden. Geografie K7 — Alpeninfrastruktur und Wintersportzentren.",
        hu: "Bischofshofen egy történelmi és sport szempontból is kiemelkedő város Salzburg tartományban, a Salzach völgyében. Története mélyen gyökerezik, hiszen egy 8. századi kolostoralapításra vezethető vissza, és nevét is onnan kapta, hogy a Chiemsee-i püspökség birtoka volt. A város ma világszerte ismert sporteseményéről, hiszen itt rendezik meg minden évben a híres Négysáncverseny utolsó állomását a Paul-Ausserleitner-sáncon. Bischofshofen lenyűgöző alpesi környezete és az UNESCO Geopark Erz der Alpen közelsége miatt a túrázók és a történelemkedvelők kedvelt célpontja. Földrajz K6 – alpesi sportok és domborzat.",
        ro: "Bischofshofen acționează ca un nod indispensabil în districtul Pongau din Salzburg, unde converg rutele de transport alpin feroviar și rutier. Dincolo de rolul său ca locație de afaceri, orașul a câștigat faimă mondială în principal ca gazdă a finalei tradiționale a Turneului celor Patru Trambuline în fiecare an, pe 6 ianuarie, când mii de fani se adună la trambulina Paul-Außerleitner. Numele orașului, cu rădăcini în Evul Mediu, indică istoria sa ca o curte administrativă a prinților-arhiepiscopi de Salzburg. Situat în pitoreasca vale Salzach, peisajul orașului este înconjurat de vârfuri muntoase abrupte. Pentru turiști, Bischofshofen este tabăra de bază perfectă pentru explorarea zonelor de schi.",
        en: "Bischofshofen is a key town in the Pongau district of Salzburg, primarily known as a major railway hub and a center for winter sports. Its most significant claim to fame is hosting the final event of the prestigious Four Hills Tournament ('Vierschanzentournee') in ski jumping every January, which attracts thousands of spectators. Located in the wide Salzach Valley, it is surrounded by the impressive peaks of the Northern Limestone Alps. Its name, meaning 'Bishop's Court,' points to its medieval origins as an administrative center for the Archbishops of Salzburg. Today, it's a bustling town that blends industry, transport, and tourism."
    },
    facts: {
      de: ["Liegt im Pongau im Bundesland Salzburg.", "Ist international als Station der Vierschanzentournee bekannt.", "Der Bahnhof ist ein wichtiger Knoten im Salzachtal.", "Die Lage verbindet Tourismus, Sport und Verkehr.", "Das Umland führt direkt in die Hohen Tauern."],
      hu: ["A salzburgi Pongau régióban található.", "Nemzetközileg ismert a Négysáncverseny állomásaként.", "Az állomás fontos csomópont a Salzach-völgyben.", "A fekvése a turizmust, a sportot és a közlekedést köti össze.", "A környék közvetlenül a Hohe Tauern felé vezet."],
      ro: ["Se află în Pongau, în landul Salzburg.", "Este cunoscut internațional ca etapă a Turneului Celor Patru Trambuline.", "Gara este un nod important în valea Salzach.", "Așezarea leagă turismul, sportul și transportul.", "Împrejurimile duc direct spre Hohe Tauern."],
      en: ["Located in the Pongau region of Salzburg.", "Known internationally as a stop on the Four Hills Tournament.", "The station is an important hub in the Salzach Valley.", "Its location connects tourism, sport, and transport.", "The surrounding area leads directly into the Hohe Tauern."]
    },
    factsAdvanced: {
        de: [
            "Die Paul-Außerleitner-Schanze ist eine der größten und traditionsreichsten Skisprungschanzen im Weltcup-Kalender.",
            "Der Bahnhof dient als wichtiges Drehkreuz für Intercity- und Regionalzüge zwischen Salzburg, Innsbruck und Villach.",
            "Ein historischer Kupfersteig rund um den Ort zeugt vom bedeutenden Kupferbergbau, der das Salzachtal vor Jahrhunderten prägte.",
            "Bischofshofen ist der Startpunkt zu den Attraktionen des nahegelegenen Hochkönigs und der Eisriesenwelt Werfen."
        ],
        hu: [
        "Bischofshofen ad otthont a híres Négysáncverseny síugró turné utolsó állomásának.",
        "A települést a 8. században alapították a bajor szerzetesek, mint 'Cella Maximiliana'.",
        "A város nevét onnan kapta, hogy a chiemsee-i püspökök fontos birtokközpontja volt.",
        "A közeli 'Erz der Alpen' Geopark a régió rézbányászatának évezredes múltját őrzi."
      ],
        ro: ["Trambulina Paul-Außerleitner este una dintre cele mai mari și tradiționale trambuline din calendarul Cupei Mondiale.", "Gara servește ca un hub major pentru trenurile interurbane și regionale între Salzburg, Innsbruck și Villach.", "Traseul istoric al cuprului din jurul orașului este o dovadă a exploatării masive a cuprului din secolele trecute.", "Bischofshofen este punctul de plecare către atracțiile din masivul Hochkönig și Eisriesenwelt Werfen."],
        en: [
            "It hosts the final, decisive event of the annual Four Hills Ski Jumping Tournament.",
            "The town's train station is a major intersection for lines connecting Salzburg, Innsbruck, and Villach.",
            "The 'Kupfersteig' hiking trail recalls the region's history of copper mining.",
            "The Bischofshofen 'Buam' are local folk figures associated with the town's traditions.",
            "It is home to the ruins of 'Burg Werfen', a medieval castle overlooking the valley."
        ]
    }
  },
  {
    id: "at-gmunden",
    type: "city",
    parent: "AT-4",
    coords: [13.8019, 47.9192],
    name: { de: "Gmunden", hu: "Gmunden", ro: "Gmunden", en: "Gmunden" },
    image: "/geo-images/austria/gmunden.webp",
    description: {
      de: "Gmunden am Traunsee ist eine der elegantesten Städte im Salzkammergut und ein Paradebeispiel für österreichische Seen-SEO.",
      hu: "A Traunsee partján fekvő Gmunden a Salzkammergut egyik legelegánsabb városa, és az osztrák tóparti SEO mintapéldája.",
      ro: "Gmunden, pe malul lacului Traunsee, este unul dintre cele mai elegante orașe din Salzkammergut și un exemplu perfect de SEO austriac pentru lacuri.",
      en: "Gmunden on Lake Traunsee is one of the most elegant towns in the Salzkammergut and a textbook case of Austrian lake SEO."
    },
    descriptionAdvanced: {
        de: "Gmunden gilt als das Tor zum Salzkammergut und bezaubert mit seinem einzigartigen architektonischen Mix aus prachtvollen Gründerzeitvillen und engen Altstadtgassen. Die Stadt am Nordufer des tiefblauen Traunsees erlangte im 19. Jahrhundert als noble Sommerfrische der österreichisch-ungarischen Aristokratie und des Bürgertums ihre bis heute spürbare Eleganz. Gmunden ist zudem ein Synonym für österreichische Handwerkskunst: Die weltbekannte 'Gmundner Keramik' mit ihrem grün-geflammten Dekor hat hier ihren Ursprung und wird bis heute in großen Manufakturen produziert. Ein absolutes Postkartenmotiv bildet das idyllisch auf einer winzigen Insel thronende Seeschloss Orth, das eine unvergleichliche Kulisse vor dem schroffen Felsmassiv des Traunsteins bietet. Heute ist die Stadt ein elitärer Ort für Segler, Kulturfreunde und Sommerurlauber. Geschichte K8 — Tourismusgeschichte der Habsburgerzeit.",
        hu: "Gmunden egy festői szépségű város Felső-Ausztriában, a Traunsee partján fekszik, és a Salzkammergut egyik kulturális központja. A település történelme szorosan összefonódik a sókereskedelemmel, amely a középkortól kezdve gazdagságot biztosított az itt élők számára. Gmunden különösen híres az egyedi zöld-fehér lángolt kerámiájáról, a 'Gmundner Keramik'-ről, amely Ausztria-szerte ismert kézműves termék. A város egyik leghíresebb látványossága az Ort-kastély, amely egy apró szigeten áll a tóban, és számtalan legenda, valamint televíziós sorozat helyszíne. Történelem K5 – kézművesség és sókereskedelem a Salzkammergutban.",
        ro: "Gmunden este considerată poarta către Salzkammergut și captivează prin amestecul său arhitectural unic de vile magnifice și străzi înguste. Orașul de pe malul nordic al lacului albastru profund Traunsee și-a câștigat eleganța palpabilă în secolul al XIX-lea, ca o stațiune de vară nobilă pentru aristocrația și burghezia austro-ungară. Gmunden este, de asemenea, sinonim cu meșteșugul austriac: ceramica 'Gmundner Keramik', celebră la nivel mondial, cu decorul său verde flambat, își are originile aici. Un motiv clasic de carte poștală este castelul idilic Seeschloss Orth, așezat pe o mică insulă. Astăzi, orașul este un loc de elită pentru iubitorii de navigație, prietenii culturii și turiștii de vară.",
        en: "Gmunden, idyllically situated on the northern shore of Lake Traunsee, is a sophisticated spa and cultural town in the heart of the Salzkammergut. For centuries, it served as a center for the salt trade, but it was its transformation into a fashionable summer resort for the Viennese aristocracy in the 19th century that defined its elegant character. The town is famous for its distinctive green-flamed Gmundner Keramik pottery and the iconic Seeschloss Orth, a castle on a tiny island in the lake. The imposing Traunstein mountain provides a dramatic backdrop, making Gmunden a quintessential example of an Austrian lakeside paradise."
    },
    facts: {
      de: ["Liegt direkt am Traunsee im Salzkammergut.", "Bekannt für die Gmundner Keramik.", "Schloss Orth ist ein Wahrzeichen am Seeufer.", "Der Traunstein prägt die Silhouette der Stadt.", "Gmunden ist ein klassisches Ziel für Seen- und Kulturtourismus."],
      hu: ["Közvetlenül a Traunsee partján fekszik, a Salzkammergutban.", "A Gmundner Keramikról ismert.", "A Schloss Orth a tópart egyik jelképe.", "A Traunstein meghatározza a város sziluettjét.", "Gmunden klasszikus célpont a tóparti és kulturális turizmushoz."],
      ro: ["Se află direct pe lacul Traunsee, în Salzkammergut.", "Este cunoscut pentru ceramica Gmundner.", "Castelul Orth este un simbol de pe malul lacului.", "Traunstein domină silueta orașului.", "Gmunden este o destinație clasică pentru turism de lac și cultură."],
      en: ["Located on Lake Traunsee in the Salzkammergut.", "Known for Gmunden ceramics.", "Schloss Orth is a landmark on the lakeshore.", "The Traunstein mountain shapes the town's skyline.", "Gmunden is a classic destination for lake and culture tourism."]
    },
    factsAdvanced: {
        de: [
            "Das romantische Seeschloss Orth wurde in den späten 1990er Jahren durch eine gleichnamige erfolgreiche Fernsehserie europaweit populär.",
            "Die Traunseebahn verbindet den Bahnhof Gmunden mit dem Stadtzentrum und gilt als eine der kürzesten Straßenbahnlinien der Welt.",
            "Der historische Reichtum Gmundens gründete ursprünglich auf dem florierenden Salzhandel aus dem tiefen Salzkammergut.",
            "Die markante grün-geflammte Gmundner Keramik wird seit dem 17. Jahrhundert kontinuierlich am Seeufer produziert.",
            "Der gewaltige Traunstein wird wegen seiner steilen Flanken oft als der 'Wächter des Salzkammergutes' bezeichnet."
        ],
        hu: [
        "Gmunden a Salzkammergut egyik fővárosa és a történelmi sókereskedelem központja.",
        "Világhírű a lángolt mintájú 'Gmundner Keramik', amelyet több mint 300 éve gyártanak.",
        "A tóban álló Seeschloss Ort Ausztria egyik legtöbbet fotózott vízi kastélya.",
        "A Traunsee Európa legmélyebb teljesen ausztriai tava a maga 191 méteres mélységével."
      ],
        ro: ["Romanticul Seeschloss Orth a devenit popular în întreaga Europă prin serialul de televiziune de succes cu același nume.", "Linia de tramvai Traunsee leagă gara de centrul orașului, fiind una dintre cele mai scurte linii din lume.", "Bogăția istorică a orașului s-a bazat inițial pe comerțul înfloritor cu sare din Salzkammergut.", "Distinctiva ceramică verde Gmundner Keramik a fost produsă continuu de secole pe malul lacului."],
        en: [
            "Gmunden was the filming location for the popular Austrian TV series 'Schlosshotel Orth'.",
            "It operates one of the world's shortest and steepest tram lines.",
            "The town's history and wealth were built on the salt trade, controlled from Gmunden for centuries.",
            "Gmundner Keramik, with its unique 'green-flamed' design, has been produced here since the 17th century.",
            "The Traunstein mountain is often called the 'Guardian of the Salzkammergut'."
        ]
    }
  },
  {
    id: "at-amstetten",
    type: "city",
    parent: "AT-3",
    coords: [14.8723, 48.1227],
    name: { de: "Amstetten", hu: "Amstetten", ro: "Amstetten", en: "Amstetten" },
    image: "/geo-images/austria/amstetten.webp",
    description: {
      de: "Amstetten ist ein wichtiger Knotenpunkt im Mostviertel und steht für Mobilität, Wirtschaft und kurze Wege zwischen Donau und Alpenrand.",
      hu: "Amstetten a Mostviertel fontos csomópontja, és a mobilitást, a gazdaságot valamint a Duna és az Alpok pereme közötti gyors kapcsolódást képviseli.",
      ro: "Amstetten este un nod important în Mostviertel și reprezintă mobilitatea, economia și legăturile scurte între Dunăre și poalele Alpilor.",
      en: "Amstetten is an important hub in the Mostviertel and stands for mobility, business, and short links between the Danube and the Alpine foothills."
    },
    descriptionAdvanced: {
        de: "Eingebettet zwischen den fruchtbaren Ebenen des Donautals im Norden und den hügeligen Ausläufern der Voralpen im Süden, hat sich Amstetten als wichtiges Verkehrs- und Wirtschaftszentrum in Niederösterreichs Mostviertel etabliert. Seine zentrale Position an der hochfrequentierten Westbahnstrecke und der Autobahn A1 macht die Stadt zu einem essentiellen Knotenpunkt, der Wien mit den westlichen Bundesländern verknüpft. Das landwirtschaftliche Umland ist namensgebend für das Viertel: Tausende alte Apfel- und Birnbäume prägen hier die Landschaft und liefern den Rohstoff für den traditionellen vergorenen 'Most'. Trotz ihres überwiegend industriell-modernen Stadtbilds bewahrt Amstetten durch regelmäßige Brauchtumsmärkte und als Tor zur Eisenstraße eine enge Verbindung zur Geschichte der Region. Sachkunde K8 — Wirtschaftsgeografie und Logistik.",
        hu: "Amstetten az alsó-ausztriai Mostviertel régió gazdasági, oktatási és közlekedési csomópontja. A város stratégiai elhelyezkedése az Ybbs folyó partján és az egykori római útvonalak mentén már az ókorban fontossá tette a térséget. Bár történelme gazdag, Amstetten ma elsősorban modern arculatáról, fejlett iparáról és jelentős vasúti csomópontjáról ismert, amely összeköti Bécset Linz-cel és Nyugat-Európával. A város környékét kiterjedt alma- és körteültetvények borítják, amelyek a Mostviertel híres almaborának (Most) alapanyagát adják. Földrajz K6 – közlekedési csomópontok és mezőgazdaság Ausztriában.",
        ro: "Amplasat între câmpiile fertile ale Văii Dunării la nord și poalele deluroase ale Pre-Alpilor la sud, Amstetten s-a impus ca un important centru de transport și afaceri în regiunea Mostviertel. Poziția sa centrală pe linia aglomerată Westbahn și autostrada A1 face din oraș un nod esențial care leagă Viena de statele din vest. Zona agricolă din jur dă numele regiunii: mii de meri și peri bătrâni domină peisajul și oferă materia primă pentru tradiționalul must fermentat. În ciuda aspectului său urban preponderent industrial-modern, Amstetten păstrează o legătură strânsă cu istoria regiunii prin piețe de meșteșuguri regulate și ca poartă către faimosul 'Drum al Fierului'.",
        en: "Amstetten is a vital commercial and transport hub in the Mostviertel region of Lower Austria. Strategically located on the Westbahn railway line and the A1 motorway, it connects Vienna with Linz and the western states. The town is the administrative center of its district and serves a large rural area dominated by agriculture, particularly the cultivation of pears and apples used to make 'Most' (perry and cider), which gives the region its name. While primarily a modern service and industrial town, it offers easy access to both the Danube River valley to the north and the pre-Alpine hills to the south."
    },
    facts: {
      de: ["Wichtiger Verkehrsknoten im Mostviertel.", "Liegt zwischen Donau und Alpenvorland.", "Region ist stark von Obstbau und Landwirtschaft geprägt.", "Amstetten hat eine hohe Bedeutung für Pendler und Handel.", "Guter Ausgangspunkt für Ausflüge in das hügelige Mostviertel."],
      hu: ["Fontos közlekedési csomópont a Mostviertelben.", "A Duna és az Alpok előtere között fekszik.", "A régiót erősen jellemzi a gyümölcstermesztés és a mezőgazdaság.", "Amstetten fontos a ingázók és a kereskedelem számára.", "Jó kiindulópont a dombos Mostviertelbe tett kirándulásokhoz."],
      ro: ["Un nod de transport important în Mostviertel.", "Se află între Dunăre și poalele Alpilor.", "Regiunea este puternic influențată de pomicultură și agricultură.", "Amstetten are o importanță mare pentru navetiști și comerț.", "Punct bun de plecare pentru excursii în Mostviertelul colinar."],
      en: ["A major transport hub in the Mostviertel.", "Located between the Danube and the Alpine foothills.", "The region is strongly shaped by fruit growing and agriculture.", "Amstetten matters greatly for commuters and trade.", "A good base for trips into the hilly Mostviertel."]
    },
    factsAdvanced: {
        de: [
            "Das umliegende Mostviertel erhielt seinen Namen durch die jahrhundertelange Produktion von vergorenem Obstmost.",
            "Als bedeutende 'Schulstadt' zieht Amstetten täglich hunderte Schülerinnen und Schüler in seine weiterführenden Schulen.",
            "Der Hauptbahnhof ist ein integraler Taktgeber im österreichischen Hochgeschwindigkeitsnetz der ÖBB.",
            "Die Stadt markiert den nordwestlichen Startpunkt der Eisenstraße, einer alten Industrieregion, die von der Eisenverarbeitung lebte."
        ],
        hu: [
        "Amstetten az osztrák Nyugati Vasútvonal (Westbahn) egyik legfontosabb csomópontja.",
        "A város a történelmi római limes és a birodalmi utak kereszteződésében épült.",
        "Amstetten a Mostviertel központja, amely híres a hagyományos almaborról (Most).",
        "A város ipari fejlődését a 19. századi vasútépítés gyorsította fel drasztikusan."
      ],
        ro: ["Regiunea înconjurătoare Mostviertel și-a primit numele de la secolele de producție a mustului fermentat de fructe.", "Ca un important 'oraș școlar', Amstetten atrage zilnic sute de elevi în școlile sale.", "Gara principală este un element de bază integrat în rețeaua austriacă de mare viteză ÖBB.", "Orașul marchează punctul de plecare nord-vestic al Drumului Fierului, o veche regiune industrială."],
        en: [
            "The Mostviertel region is named after 'Most', the local fermented pear or apple cider.",
            "Amstetten is a major 'Schulstadt' (school town) with numerous primary, secondary, and vocational schools.",
            "It lies on the main Westbahn railway, a key artery of Austrian transport.",
            "The town's economy is diverse, with a mix of industry, commerce, and services.",
            "It serves as the gateway to the 'Eisenstraße' (Iron Road), a historic industrial region."
        ]
    }
  },
  {
    id: "at-spittal-an-der-drau",
    type: "city",
    parent: "AT-2",
    coords: [13.4929, 46.7908],
    name: { de: "Spittal an der Drau", hu: "Spittal an der Drau", ro: "Spittal an der Drau", en: "Spittal an der Drau" },
    image: "/geo-images/austria/spittal-an-der-drau.webp",
    description: {
      de: "Spittal an der Drau ist das urbane Zentrum des Oberkärntner Lurngaus und ein beliebter Ausgangspunkt für Seen und Berge.",
      hu: "Spittal an der Drau Felső-Karintia városi központja és kedvelt kiindulópont a tavakhoz és a hegyekhez.",
      ro: "Spittal an der Drau este centrul urban al nordului Carintiei și un punct de plecare popular pentru lacuri și munți.",
      en: "Spittal an der Drau is the urban center of Upper Carinthia and a popular starting point for lakes and mountains."
    },
    descriptionAdvanced: {
        de: "Gelegen im weiten Drautal, fungiert Spittal an der Drau als das pulsierende urbane Zentrum Oberkärntens. Die Stadt hat es meisterhaft verstanden, ihren historischen Kern mit den Anforderungen einer modernen Bezirks- und Schulstadt zu vereinen. Ihr architektonisches Juwel ist das Schloss Porcia, das als einer der vollendetsten Renaissancebauten nördlich der Alpen gilt und im Sommer die bekannten Komödienspiele beheimatet. Spittals Geografie bietet Touristen immense Vorteile: Die Ufer des malerischen Millstätter Sees liegen praktisch direkt vor der Haustür, während im Norden die Gebirgszüge der Nockberge und der Hohen Tauern zu alpinen Exkursionen einladen. Durch den Zusammenfluss von Lieser und Drau direkt im Stadtgebiet herrscht hier zudem ein ganz besonders angenehmes, leicht alpines Kleinklima. Kunst K8 — Renaissance-Architektur in Europa.",
        hu: "Spittal an der Drau egy történelmi jelentőségű város Karintia nyugati részén, a Dráva és a Lieser folyók találkozásánál. A várost 1191-ben alapították, amikor a helyi grófok egy ispotályt (Spittl) hoztak létre a zarándokok és utazók számára, amelyről a település a nevét is kapta. A város legkiemelkedőbb látványossága a Porcia-kastély, amely az Alpoktól északra épült egyik legszebb reneszánsz palota, és ma múzeumként, illetve színházi fesztiválok helyszíneként szolgál. Spittal egyben a felső-karintiai régió kulturális és oktatási központja, közel a gyönyörű Millstatti-tóhoz. Történelem K6 – reneszánsz építészet és zarándokutak Közép-Európában.",
        ro: "Situat în vasta vale Drautal, Spittal an der Drau funcționează ca centrul urban pulsatoriu al Carintiei Superioare. Orașul a reușit cu măiestrie să combine nucleul său istoric cu cerințele unui oraș modern și administrativ. Bijuteria sa arhitecturală este Schloss Porcia, considerată una dintre cele mai perfecte clădiri renascentiste de la nord de Alpi, care găzduiește cunoscutele festivaluri de comedie pe timpul verii. Geografia orașului oferă turiștilor beneficii imense: țărmurile pitorescului lac Millstätter See sunt practic la ușa sa, în timp ce la nord, lanțurile muntoase Nockberge și Hohe Tauern invită la excursii alpine. Confluența râurilor Lieser și Drau oferă un microclimat deosebit de plăcut.",
        en: "Spittal an der Drau is the urban heart of Upper Carinthia, situated in the broad Drau Valley. It serves as the region's main administrative, educational, and commercial center. The town's most famous landmark is Schloss Porcia, considered one of the most beautiful Renaissance castles in Austria, which hosts an annual festival for classical comedies. Spittal is a popular base for tourists exploring the surrounding area, including the nearby Lake Millstatt (Millstätter See) and the mountains of the Hohe Tauern National Park and the Nockberge Biosphere Reserve. It's a town that successfully combines its historical heritage with a modern, lively atmosphere."
    },
    facts: {
      de: ["Liegt an der Drau in Oberkärnten.", "Wichtiger Ausgangspunkt Richtung Millstätter See.", "Das Stadtleben verbindet Handel und Tourismus.", "Die Nockberge sind schnell erreichbar.", "Spittal ist ein regionaler Knoten im Drautal."],
      hu: ["A karintiai Drau mentén fekszik.", "Fontos kiindulópont a Millstätter See felé.", "A városi élet a kereskedelmet és a turizmust ötvözi.", "A Nockberge gyorsan elérhető.", "Spittal regionális csomópont a Drau-völgyben."],
      ro: ["Se află pe râul Drau, în Carintia de Sus.", "Este un punct de plecare important spre Millstätter See.", "Viața urbană combină comerțul și turismul.", "Nockberge este ușor accesibil.", "Spittal este un nod regional în valea Drau."],
      en: ["Located on the Drau River in Upper Carinthia.", "An important starting point toward Lake Millstatt.", "Urban life combines trade and tourism.", "The Nockberge are quickly reachable.", "Spittal is a regional node in the Drau Valley."]
    },
    factsAdvanced: {
        de: [
            "Das Stadtzentrum wird vom beeindruckenden Schloss Porcia, einem Meisterwerk italienischer Renaissancearchitektur, dominiert.",
            "Die Stadt bildet das westliche Tor zum Millstätter See, einem der wärmsten Badeseen im gesamten Alpenraum.",
            "Der Hausberg Goldeck ist nicht nur ein beliebtes Skigebiet, sondern verfügt auch über die längste schwarze Talabfahrt der Alpen.",
            "Die alljährlich stattfindenden 'Komödienspiele Porcia' sind ein fixes Sommer-Highlight im österreichischen Kultursommer."
        ],
        hu: [
        "Spittal egy 12. században alapított zarándok-kórházról (Spital) kapta a nevét.",
        "A reneszánsz Porcia-kastély az itáliai paloták mintájára épült a 16. században.",
        "A város fontos csomópont Karintiában, közel a Millstätter See-hez.",
        "Minden nyáron a Porcia-kastély ad otthont a híres vígjáték-színházi fesztiválnak."
      ],
        ro: ["Centrul orașului este dominat de impresionantul Schloss Porcia, o capodoperă a arhitecturii renascentiste italiene.", "Orașul formează poarta de vest către Millstätter See, unul dintre cele mai calde lacuri de înot din Alpi.", "Muntele local Goldeck oferă nu doar un domeniu schiabil popular, ci și cea mai lungă pârtie neagră din Alpi.", "Festivalul anual de comedie 'Komödienspiele Porcia' este un punct de atracție fix în vara culturală austriacă."],
        en: [
            "Schloss Porcia is a magnificent Renaissance palace and the town's main landmark.",
            "It is the gateway to Lake Millstatt, one of Carinthia's most popular lakes.",
            "The 'Goldeck' mountain is Spittal's local peak, popular for skiing and hiking.",
            "It hosts the 'Komödienspiele Porcia', a long-running summer theatre festival.",
            "The town lies at the intersection of the Drau and Lieser river valleys."
        ]
    }
  },
  {
    id: "at-telfs",
    type: "city",
    parent: "AT-7",
    coords: [11.0661, 47.3070],
    name: { de: "Telfs", hu: "Telfs", ro: "Telfs", en: "Telfs" },
    image: "/geo-images/austria/telfs.webp",
    description: {
      de: "Telfs liegt im Tiroler Inntal und ist einer der wichtigsten Orte zwischen Innsbruck und dem Oberland.",
      hu: "Telfs a tiroli Inn-völgyben fekszik, és Innsbruck és az Oberland között az egyik legfontosabb település.",
      ro: "Telfs se află în valea Inn din Tirol și este una dintre cele mai importante localități între Innsbruck și Oberland.",
      en: "Telfs sits in the Tyrolean Inn Valley and is one of the key places between Innsbruck and the Oberland."
    },
    descriptionAdvanced: {
        de: "Als drittgrößte Gemeinde Tirols breitet sich Telfs im weiten, sonnenverwöhnten Talkessel des Oberinntals aus, direkt zu Füßen des markanten Felsmassivs der Hohen Munde. Einst stark von der Textilindustrie geprägt, hat sich die Marktgemeinde erfolgreich zu einem dynamischen, modernen Wirtschafts- und Handelsstandort entwickelt. Trotz dieses wirtschaftlichen Wachstums hält Telfs tief verwurzelte Traditionen aufrecht: Alle fünf Jahre befindet sich der Ort im Ausnahmezustand, wenn das 'Telfer Schleicherlaufen' stattfindet, ein farbenprächtiger, mystischer Fasnachtsbrauch, der von der UNESCO in die Liste des immateriellen Kulturerbes aufgenommen wurde. Durch seine exzellente Verkehrsanbindung und die unmittelbare Nähe zur Seefelder Hochplateau-Region kombiniert Telfs mühelos städtische Annehmlichkeiten mit alpinem Naturerleben. Geografie K6 — Besiedelung von Alpentälern.",
        hu: "Telfs a harmadik legnagyobb település Tirol tartományban, Innsbrucktól mintegy 27 kilométerre nyugatra, az Inn folyó völgyében fekszik. A város ipari és gazdasági fejlődése a textilipar 19. századi fellendülésének köszönhető, bár az utóbbi évtizedekben a fémipar és a turizmus vette át a vezető szerepet. Telfs lenyűgöző alpesi panorámával rendelkezik, hiszen közvetlenül a Mieminger Kette magashegység lábánál található. Kulturális szempontból híres a kétévente megrendezett Schleicherlaufen farsangi felvonulásról, amely a régió egyik legfontosabb népszokása. Történelem K5 – alpesi népszokások és tiroli ipar.",
        ro: "Fiind a treia cea mai mare municipalitate din Tirol, Telfs se întinde în bazinul vast și însorit al văii Oberinntal, direct la poalele masivului stâncos Hohe Munde. Dominată odinioară puternic de industria textilă, comuna și-a dezvoltat cu succes un statut de locație dinamică pentru afaceri și comerț. În ciuda acestei creșteri economice, Telfs menține tradiții adânc înrădăcinate: la fiecare cinci ani, orașul se află într-o stare de grație când are loc 'Telfer Schleicherlaufen', un obicei fascinant de carnaval mistic inclus pe lista patrimoniului cultural imaterial al UNESCO. Datorită conexiunilor excelente de transport și a apropierii de regiunea de platou Seefeld, Telfs combină fără efort confortul urban cu natura alpină.",
        en: "Telfs is a large and bustling market town in the Upper Inn Valley of Tyrol, west of Innsbruck. With its significant population and economic activity, it functions as the central hub for the surrounding region. It lies in a wide, sunny basin at the foot of the imposing Hohe Munde mountain. Telfs has a long tradition of folk plays and customs, including the 'Telfer Schleicherlaufen,' a carnival procession held every five years that is part of UNESCO's intangible cultural heritage. While it has a strong industrial and commercial base, its proximity to major ski resorts and hiking areas also makes it a convenient base for tourists."
    },
    facts: {
      de: ["Liegt im Inntal westlich von Innsbruck.", "Marktgemeinde mit starkem Wirtschafts- und Wohnstandort.", "Nahe an Seefeld und den Tiroler Alpen.", "Der Ort profitiert von guter Straßen- und Bahnverbindung.", "Beliebt für Alltagsurlaub zwischen Berg und Tal."],
      hu: ["Innsbrucktól nyugatra, az Inn-völgyben található.", "Mezőváros erős gazdasági és lakóövezeti szereppel.", "Közel van Seefeldhez és a tiroli Alpokhoz.", "A település jó közúti és vasúti kapcsolatokkal rendelkezik.", "Népszerű a hegy és völgy közti mindennapi pihenéshez."],
      ro: ["Se află în valea Inn, la vest de Innsbruck.", "Comuna de piață are un rol puternic economic și rezidențial.", "Aproape de Seefeld și de Alpii tirolezi.", "Localitatea beneficiază de legături bune rutiere și feroviare.", "Populară pentru escapade între munte și vale."],
      en: ["Located in the Inn Valley west of Innsbruck.", "A market town with a strong business and residential role.", "Close to Seefeld and the Tyrolean Alps.", "The town benefits from good road and rail links.", "Popular for everyday leisure between mountains and valley."]
    },
    factsAdvanced: {
        de: [
            "Das 'Telfer Schleicherlaufen' ist einer der prachtvollsten Fasnachtsbräuche der Alpenregion und zieht alle fünf Jahre Massen an.",
            "Nach Einwohnerzahlen gemessen ist Telfs nach Innsbruck und Kufstein die drittgrößte Ansiedlung des Bundeslandes Tirol.",
            "Die Hohe Munde, ein steil aufragender Berg, bietet eine unverwechselbare und fotogene Kulisse hinter den Häusern des Ortes.",
            "Im Jahr 1976 fanden in der nahen Region von Telfs Teile der Olympischen Winterspiele von Innsbruck statt."
        ],
        hu: [
        "Telfs Tirol harmadik legnépesebb települése Innsbruck és Kufstein után.",
        "A város a 19. században fontos alpesi textilipari és fonodai központ volt.",
        "Híres az UNESCO szellemi örökség részét képező Schleicherlaufen farsangi karneválról.",
        "A város fölé magasodik a 2662 méteres Hohe Munde impozáns mészkőcsúcsa."
      ],
        ro: ["Carnavalul 'Telfer Schleicherlaufen' este una dintre cele mai magnifice tradiții din regiunea alpină.", "Măsurat după populație, Telfs este a treia cea mai mare așezare din statul Tirol.", "Muntele Hohe Munde oferă un fundal distinctiv și fotogenic în spatele caselor din oraș.", "În 1976, regiunea Telfs a găzduit părți ale Jocurilor Olimpice de Iarnă de la Innsbruck."],
        en: [
            "The 'Telfer Schleicherlaufen' is a famous carnival parade and a UNESCO Intangible Cultural Heritage.",
            "It is the third-largest municipality in Tyrol by population.",
            "The Hohe Munde mountain provides a striking backdrop to the town.",
            "Its location in the wide Inn Valley basin gives it a sunnier climate than many other Tyrolean towns.",
            "Telfs hosted events during the 1964 and 1976 Innsbruck Winter Olympics."
        ]
    }
  },
  {
    id: "at-worgl",
    type: "city",
    parent: "AT-7",
    coords: [12.0598, 47.4895],
    name: { de: "Wörgl", hu: "Wörgl", ro: "Wörgl", en: "Wörgl" },
    image: "/geo-images/austria/worgl.webp",
    description: {
      de: "Wörgl ist ein wichtiger Verkehrsknoten im Tiroler Unterland und verbindet das Inntal mit dem Brixental und dem Kaisergebirge.",
      hu: "Wörgl a tiroli Unterland fontos közlekedési csomópontja, amely összeköti az Inn-völgyet a Brixentallel és a Kaisergebirgével.",
      ro: "Wörgl este un nod de transport important în Tirolul de Jos și leagă valea Inn de Brixental și de masivul Kaisergebirge.",
      en: "Wörgl is a major transport hub in Lower Tyrol, linking the Inn Valley with the Brixental and the Kaiser Mountains."
    },
    descriptionAdvanced: {
        de: "Geografisch geschickt platziert am Schnittpunkt des breiten Inntals mit dem abzweigenden Brixental, fungiert Wörgl heute als die unbestrittene Einkaufs- und Verkehrsmetropole des Tiroler Unterlands. Seine exzellente infrastrukturelle Anbindung durch Schiene und Straße hat ein rapides Wachstum zur modernen Einkaufsstadt ermöglicht. Wirtschaftshistoriker kennen die Stadt jedoch weltweit aus einem anderen Grund: In den 1930er Jahren führte Wörgl im sogenannten 'Wunder von Wörgl' eine revolutionäre Regionalwährung (Freigeld) ein, die die Folgen der Weltwirtschaftskrise lokal besiegte und die Arbeitslosigkeit dramatisch senkte, bis das Experiment staatlich gestoppt wurde. Obwohl das Stadtbild stark modernisiert ist, nutzen Touristen Wörgl heute besonders gerne als zentralen Sprungbrett-Ort für Ausflüge in die riesige 'SkiWelt Wilder Kaiser-Brixental' sowie zu den Gipfeln der Kitzbüheler Alpen. Geschichte K9 — Die Weltwirtschaftskrise und das Wunder von Wörgl.",
        hu: "Wörgl egy dinamikus és jelentős közlekedési csomópont Tirol tartományban, az Inn folyó völgyében. A település történelme a római korig vezethető vissza, ám igazán ismertté a 20. században vált egy különleges gazdasági kísérlet révén. 1932-ben, a nagy gazdasági világválság idején Wörgl bevezette a 'wörgli csodaként' ismert saját helyi fizetőeszközt, amely sikeresen csökkentette a munkanélküliséget és élénkítette a helyi gazdaságot. Ma a város a Kitzbüheli-Alpok kapuja, egyben fontos vasúti átszállóhely Ausztria, Németország és Olaszország között. Történelem K7 – gazdasági válságok és innovációk a 20. században.",
        ro: "Așezat geografic strategic la intersecția văii largi a Innului cu ramificația Brixental, Wörgl funcționează astăzi ca metropolă necontestată de cumpărături și transport a regiunii Tiroler Unterland. Conexiunile sale excelente de infrastructură prin căi ferate și rutiere au permis o creștere rapidă într-un oraș modern. Istoricii economici, însă, cunosc orașul pentru un cu totul alt motiv: în anii 1930, Wörgl a introdus o monedă regională revoluționară, Freigeld, în așa-numitul 'Miracol din Wörgl', care a învins la nivel local consecințele Marii Depresiuni. Deși peisajul urban este puternic modernizat, turiștii folosesc astăzi Wörgl ca o rampă centrală pentru excursii în zona de schi SkiWelt Wilder Kaiser.",
        en: "Wörgl is a major commercial center and one of the most important transportation hubs in Tyrol. Situated in the Lower Inn Valley, it lies at the strategic junction where the Brixental valley branches off towards Kitzbühel and the SkiWelt Wilder Kaiser area. This location has made it a critical node for both rail and road traffic. In the 1930s, Wörgl gained international fame for the 'Miracle of Wörgl,' an economic experiment where the town issued its own local currency to combat the Great Depression, resulting in a dramatic reduction in unemployment. Today, it is known as one of Tyrol's busiest shopping towns."
    },
    facts: {
      de: ["Wichtiger Verkehrsknoten im Tiroler Unterland.", "Verbindet das Inntal mit dem Brixental.", "Stark von Handel und Pendlerverkehr geprägt.", "Guter Ausgangspunkt für Ski- und Bergtouren.", "Zentrale Lage zwischen Kufstein und Kitzbühel."],
      hu: ["Fontos közlekedési csomópont a tiroli Unterlandban.", "Összeköti az Inn-völgyet a Brixentallel.", "Erősen meghatározza a kereskedelem és az ingázó forgalom.", "Jó kiindulópont sí- és hegyi túrákhoz.", "Központi fekvés Kufstein és Kitzbühel között."],
      ro: ["Un nod de transport important în Tirolul de Jos.", "Leagă valea Inn de Brixental.", "Puternic influențat de comerț și navetism.", "Punct bun de plecare pentru schi și drumeții montane.", "Poziție centrală între Kufstein și Kitzbühel."],
      en: ["An important transport hub in Lower Tyrol.", "Connects the Inn Valley with the Brixental.", "Strongly shaped by trade and commuter traffic.", "A good starting point for ski and mountain trips.", "Central location between Kufstein and Kitzbühel."]
    },
    factsAdvanced: {
        de: [
            "Das weltweit beachtete 'Freigeld'-Experiment von Bürgermeister Michael Unterguggenberger im Jahr 1932 brachte der Stadt den Beinamen 'Ort des Wunders von Wörgl'.",
            "Der Wörgler Hauptbahnhof ist eine der wichtigsten Weichen im Schienennetz der Westbahn-Route Richtung Brenner.",
            "Wörgl verfügt über die längste und dichteste Einkaufsstraße im gesamten Tiroler Unterland.",
            "Die unmittelbare Nähe zu den Liftanlagen der SkiWelt macht die Stadt zu einem perfekten Knotenpunkt für Wintertouristen."
        ],
        hu: [
        "Wörgl világhírűvé vált az 1932-es helyi pénzkísérletről, a 'wörgli csodáról'.",
        "A város fontos vasúti és autópálya csomópont az Inn völgyében.",
        "A római korban egy fontos település volt az Inn mentén haladó útvonalon.",
        "A város turisztikai kapuként szolgál a népszerű Kitzbüheli-Alpokhoz és a SkiWelt régióhoz."
      ],
        ro: ["Experimentul mondial de succes cu banii liberi 'Freigeld' din 1932 i-a adus orașului porecla de 'Miracolul de la Wörgl'.", "Gara principală Wörgl este unul dintre cele mai importante noduri din rețeaua feroviară către Brenner.", "Orașul are cea mai lungă și densă stradă comercială din întregul Tiroler Unterland.", "Proximitatea imediată de instalațiile SkiWelt face din oraș un punct perfect pentru turismul de iarnă."],
        en: [
            "Famous for the 'Miracle of Wörgl,' a 1930s economic experiment with a local currency.",
            "It is a key railway junction connecting the main Inn Valley line with a branch to the Kitzbühel Alps.",
            "Wörgl has one of the highest densities of shops and retail space per capita in Tyrol.",
            "It serves as the gateway to the massive SkiWelt Wilder Kaiser-Brixental ski area.",
            "The town's central location makes it a hub for commuters in Lower Tyrol."
        ]
    }
  }
];
