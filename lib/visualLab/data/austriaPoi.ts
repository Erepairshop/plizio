import type { POI } from "./poi";
import { poiExtraAustriaHistorical } from "./poiExtraAustriaHistorical";
import { poiExtraAustriaIndustry } from "./poiExtraAustriaIndustry";
import { poiExtraAustriaLife } from "./poiExtraAustriaLife";
import { poiExtraAustriaNature } from "./poiExtraAustriaNature";

export const austriaCountry: POI = {
  id: "AT",
  type: "country",
  parent: "EUROPE",
  coords: [13.3333, 47.3333],
  name: { de: "Österreich", hu: "Ausztria", ro: "Austria", en: "Austria" },
  image: "/geo-images/austria/austria.webp",
  description: {
    de: "Österreich ist ein mitteleuropäischer Binnenstaat, bekannt für seine Alpenlandschaft, imperiale Geschichte und klassische Musik.",
    hu: "Ausztria egy közép-európai ország, amely alpesi tájairól, császári történelméről és klasszikus zenéjéről híres.",
    ro: "Austria este un stat din Europa Centrală, renumit pentru peisajele sale alpine, istoria imperială și muzica clasică.",
    en: "Austria is a Central European country known for its Alpine scenery, imperial history, and classical music."
  },
  descriptionAdvanced: {
    de: "Österreich, offiziell die Republik Österreich, ist ein mitteleuropäischer Binnenstaat, der für seine atemberaubende Alpenlandschaft, seine tief verwurzelte imperiale Geschichte und seine weltweit führende Rolle in der klassischen Musik bekannt ist. Das Land grenzt an acht Nachbarstaaten – Deutschland, Tschechien, die Slowakei, Ungarn, Slowenien, Italien, die Schweiz und Liechtenstein – und fungiert seit Jahrhunderten als kulturelle und geografische Brücke zwischen West- und Osteuropa. Die Topografie Österreichs wird maßgeblich von den Alpen geprägt, die etwa 62 % der Landesfläche einnehmen und das Land zu einem der bedeutendsten Ziele für den Wintersport und den alpinen Sommertourismus weltweit machen. Von den vergletscherten Gipfeln der Hohen Tauern bis zu den sanften Weinbergen des Burgenlandes bietet Österreich eine landschaftliche Vielfalt, die ihresgleichen sucht. Die Hauptstadt Wien, einst das pulsierende Zentrum des mächtigen Habsburgerreiches, ist heute eine moderne Metropole, die regelmäßig als Stadt mit der höchsten Lebensqualität weltweit ausgezeichnet wird. Hier verschmelzen barocke Prachtbauten wie das Schloss Schönbrunn und die Hofburg mit einer lebendigen zeitgenössischen Kunstszene und der legendären Wiener Kaffeehauskultur, die zum immateriellen Kulturerbe der UNESCO gehört. Österreich ist jedoch weit mehr als nur seine Hauptstadt. Städte wie Salzburg, der Geburtsort Mozarts, Innsbruck, die Hauptstadt der Alpen, und Graz mit seiner mediterranen Renaissance-Altstadt bieten jeweils einzigartige kulturelle Identitäten. Die österreichische Geschichte ist untrennbar mit der Dynastie der Habsburger verbunden, die über 600 Jahre lang die Geschicke Europas mitbestimmten und ein monumentales architektonisches Erbe hinterließen. Kulinarisch ist das Land für Klassiker wie das Wiener Schnitzel, den Apfelstrudel und die Sachertorte berömht, wobei jede Region ihre eigenen Spezialitäten pflegt, vom steirischen Kürbiskernöl bis zum Tiroler Speck. Als moderne Demokratie und Mitglied der Europäischen Union zeichnet sich Österreich durch politische Stabilität, eine starke soziale Marktwirtschaft und ein hohes Umweltbewusstsein aus. Die Bewahrung der Natur, insbesondere in den zahlreichen Nationalparks wie dem Nationalpark Hohe Tauern oder dem Nationalpark Kalkalpen, hat oberste Priorität. Für Reisende bietet Österreich eine perfekte Infrastruktur, die es ermöglicht, sowohl die kulturellen Schätze in den Städten als auch die unberührten Naturräume in den Bergen sicher und komfortabel zu erkunden. Ob man auf den Spuren der Kaiser wandelt, die Salzburger Festspiele besucht oder die Freiheit auf den Skipisten von St. Anton und Kitzbühel genießt – Österreich verkörpert eine Lebensart, die Tradition und Moderne harmonisch vereint. Die kulturelle Bedeutung Österreichs erstreckt sich auch auf die Literatur, die Philosophie und die Wissenschaft, wobei Namen wie Sigmund Freud, Stefan Zweig und Ludwig Wittgenstein das globale Denken maßgeblich beeinflusst haben. Heute präsentiert sich das Land als weltoffene Nation, die stolz auf ihr Erbe ist, während sie gleichzeitig innovative Wege in den Bereichen Technologie und Nachhaltigkeit beschreitet. Die österreichische Gastfreundschaft, oft als 'Gemütlichkeit' bezeichnet, ist ein zentraler Aspekt des sozialen Gefüges und macht den Aufenthalt für Besucher aus aller Welt zu einem unvergesslichen Erlebnis. Von den Donauauen bis zu den höchsten Gipfeln der Zentralalpen lädt Österreich dazu ein, die Harmonie zwischen Mensch und Natur in einer der sichersten und wohlhabendsten Regionen der Welt zu entdecken.",
    hu: "Ausztria, hivatalos nevén az Osztrák Köztársaság, egy közép-európai szárazföldi ország, amely világszerte híres lélegzetelállító alpesi tájairól, mélyen gyökerező császári történelméről és a klasszikus zenében betöltött vezető szerepéről. Az ország nyolc szomszédos állammal határos – Németországgal, Csehországgal, Szlovákiával, Magyarországgal, Szlovéniával, Olaszországgal, Svájccal és Liechtensteinnel –, és évszázadok óta kulturális és földrajzi hídként szolgál Nyugat- és Kelet-Európa között. Ausztria domborzatát meghatározzák az Alpok, amely az ország területének mintegy 62%-át foglalja el, így a világ egyik legjelentősebb téli sport- és alpesi nyári turisztikai célpontjává teszi. A Magas-Tauern gleccseres csúcsaitól Burgenland szelíd szőlőskertjeiig Ausztria olyan táji sokszínűséget kínál, amely páratlan Európában. A főváros, Bécs, egykor a hatalmas Habsburg Birodalom lüktető központja volt, ma egy modern metropolisz, amelyet rendszeresen a világ legélhetőbb városának választanak. Itt a barokk pompás épületek, mint a Schönbrunni kastély és a Hofburg, harmonikusan ötvöződnek a vibráló kortárs művészeti élettel és a legendás bécsi kávéházi kultúrával, amely az UNESCO szellemi kulturális örökségének része. Ausztria azonban sokkal több, mint a fővárosa. Az olyan városok, mint Salzburg, Mozart szülőhelye, Innsbruck, az Alpok fővárosa, vagy Graz a maga mediterrán hangulatú reneszánsz óvárosával, mind egyedi kulturális identitást kínálnak. Az osztrák történelem elválaszthatatlanul összefonódott a Habsburg-dinasztiával, amely több mint 600 éven át meghatározta Európa sorsát, és monumentális építészeti örökséget hagyott hátra. Kulináris szempontból az ország olyan klasszikusokról híres, mint a bécsi szelet, az almás rétes és a Sacher-torta, miközben minden régiónak megvannak a maga specialitásai, a stájer tökmagolajtól a tiroli szalonnáig. Modern demokráciaként és az Európai Unió tagjaként Ausztriát politikai stabilitás, erős szociális piacgazdaság és magas szintű környezettudatosság jellemzi. A természet megőrzése, különösen a számos nemzeti parkban, mint például a Magas-Tauern vagy a Kalkalpen Nemzeti Park, kiemelt prioritást élvez. Az utazók számára Ausztria tökéletes infrastruktúrát kínál, amely lehetővé teszi mind a városok kulturális kincseinek, mind a hegyek érintetlen természetének biztonságos és kényelmes felfedezését. Akár a császárok nyomában jár az ember, akár a Salzburgi Ünnepi Játékokat látogatja meg, vagy a szabadságot élvezi St. Anton és Kitzbühel sípályáin – Ausztria olyan életmódot képvisel, amelyben a hagyomány és a modernitás tökéletes összhangban él egymással. Az ország kulturális hatása messze túlmutat a zenén; az irodalom, a filozófia és a tudomány területén is maradandót alkotott olyan nevek révén, mint Sigmund Freud, Stefan Zweig vagy Ludwig Wittgenstein. Ma Ausztria egy nyitott, modern nemzet, amely büszke történelmi örökségére, miközben élen jár a technológiai innovációkban és a fenntartható fejlődésben. Az osztrák vendégszeretet, amelyet gyakran a 'Gemütlichkeit' szóval jellemeznek, a társadalmi élet központi eleme, és minden látogató számára felejthetetlenné teszi az itt tartózkodást. A Duna ártereitől a Központi-Alpok legmagasabb csúcsaiig Ausztria arra hívja az utazókat, hogy fedezzék fel az ember és a természet közötti harmóniát a világ egyik legbiztonságosabb és leggazdagabb országában.",
    ro: "Austria, oficial Republica Austria, este un stat fără ieșire la mare situat în Europa Centrală, renumit în întreaga lume pentru peisajele sale alpine uluitoare, istoria sa imperială profundă și rolul său de lider mondial în muzica clasică. Țara se învecinează cu opt state – Germania, Republica Cehă, Slovacia, Ungaria, Slovenia, Italia, Elveția și Liechtenstein – funcționând de secole ca o punte culturală și geografică între Europa de Vest și cea de Est. Topografia Austriei este dominată de Alpi, care ocupă aproximativ 62% din suprafața țării, făcând-o una dintre cele mai importante destinații pentru sporturile de iarnă și turismul alpin de vară la nivel global. De la vârfurile glaciare din Hohe Tauern până la podgoriile blânde din Burgenland, Austria oferă o diversitate peisagistică inegalabilă. Capitala Viena, odinioară centrul vibrant al puternicului Imperiu Habsburgic, este astăzi o metropolă modernă, desemnată regulat ca orașul cu cea mai înaltă calitate a vieții din lume. Aici, clădirile baroce magnifice, precum Palatul Schönbrunn și Hofburg, se îmbină cu o scenă artistică contemporană plină de viață și cu legendara cultură a cafenelelor vieneze, inclusă în patrimoniul cultural imaterial al UNESCO. Austria este însă mult mai mult decât capitala sa. Orașe precum Salzburg, locul de naștere al lui Mozart, Innsbruck, capitala Alpilor, și Graz, cu centrul său vechi renascentist cu influențe mediteraneene, oferă fiecare identități culturale unice. Istoria austriacă este inseparabil legată de dinastia Habsburgilor, care a modelat destinul Europei timp de peste 600 de ani și a lăsat în urmă o moștenire arhitecturală monumentală. Din punct de vedere culinar, țara este faimoasă pentru clasice precum șnițelul vienez, ștrudelul cu mere și tortul Sacher, fiecare regiune păstrându-și propriile specialități, de la uleiul de semințe de dovleac din Stiria până la slănina tiroleză. Ca democrație modernă și membră a Uniunii Europene, Austria se remarcă prin stabilitate politică, o economie socială de piață puternică și o conștiință ecologică ridicată. Conservarea naturii, în special în numeroasele parcuri naționale precum Parcul Național Hohe Tauern sau Parcul Național Kalkalpen, este o prioritate absolută. Pentru călători, Austria oferă o infrastructură perfectă, care permite explorarea atât a comorilor culturale din orașe, cât și a naturii neatinse din munți, în siguranță și confort. Fie că pășiți pe urmele împăraților, vizitați Festivalul de la Salzburg sau vă bucurați de libertatea pe pârtiile de schi din St. Anton și Kitzbühel, Austria întruchipează un stil de viață care îmbină armonios tradiția și modernitatea. Importanța culturală a Austriei se extinde și asupra literaturii, filozofiei și științei, nume precum Sigmund Freud, Stefan Zweig și Ludwig Wittgenstein influențând decisiv gândirea globală. Astăzi, țara se prezintă ca o națiune cosmopolită, mândră de moștenirea sa, în timp ce urmează căi inovatoare în domeniile tehnologiei și sustenabilității. Ospitalitatea austriacă, adesea descrisă prin termenul 'Gemütlichkeit', este un aspect central al structurii sociale și face ca șederea vizitatorilor din întreaga lume să fie o experiență de neuitat. De la luncile Dunării până la cele mai înalte vârfuri ale Alpilor Centrali, Austria invită călătorii să descopere armonia dintre om și natură într-una dintre cele mai sigure și prospere regiuni ale lumii.",
    en: "Austria, officially the Republic of Austria, is a landlocked Central European country world-renowned for its breathtaking Alpine scenery, deep-rooted imperial history, and its leading global role in classical music. The country borders eight neighboring states—Germany, the Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein—and has served for centuries as a cultural and geographical bridge between Western and Eastern Europe. Austria's topography is significantly shaped by the Alps, which cover about 62% of the country's total area, making it one of the most important destinations for winter sports and Alpine summer tourism worldwide. From the glaciated peaks of the Hohe Tauern to the rolling vineyards of Burgenland, Austria offers a scenic diversity that is second to none. The capital, Vienna, once the pulsating center of the mighty Habsburg Empire, is today a modern metropolis regularly ranked as the city with the highest quality of life in the world. Here, magnificent Baroque buildings like Schönbrunn Palace and the Hofburg blend with a vibrant contemporary art scene and the legendary Viennese coffee house culture, which is part of UNESCO's intangible cultural heritage. However, Austria is much more than just its capital. Cities like Salzburg, the birthplace of Mozart; Innsbruck, the capital of the Alps; and Graz, with its Mediterranean-influenced Renaissance old town, each offer unique cultural identities. Austrian history is inextricably linked with the Habsburg dynasty, which shaped the fate of Europe for over 600 years and left behind a monumental architectural legacy. Culinarically, the country is famous for classics such as Wiener Schnitzel, Apple Strudel, and Sachertorte, with each region cultivating its own specialties, from Styrian pumpkin seed oil to Tyrolean speck. As a modern democracy and member of the European Union, Austria is characterized by political stability, a strong social market economy, and high environmental awareness. The preservation of nature, especially in the numerous national parks such as Hohe Tauern National Park or Kalkalpen National Park, is a top priority. For travelers, Austria offers a perfect infrastructure that allows for the safe and comfortable exploration of both cultural treasures in the cities and untouched nature in the mountains. Whether walking in the footsteps of emperors, visiting the Salzburg Festival, or enjoying the freedom on the ski slopes of St. Anton and Kitzbühel, Austria embodies a way of life that harmoniously combines tradition and modernity. The cultural significance of Austria also extends to literature, philosophy, and science, with names like Sigmund Freud, Stefan Zweig, and Ludwig Wittgenstein having significantly influenced global thought. Today, the country presents itself as a cosmopolitan nation, proud of its heritage while simultaneously pursuing innovative paths in the fields of technology and sustainability. Austrian hospitality, often referred to as 'Gemütlichkeit,' is a central aspect of the social fabric and makes the stay for visitors from all over the world an unforgettable experience. From the Danube floodplains to the highest peaks of the Central Alps, Austria invites travelers to discover the harmony between man and nature in one of the safest and most prosperous regions in the world."
  },
  facts: {
    de: [
      "Wien ist die Bundeshauptstadt und das kulturelle Zentrum des Landes.",
      "Die Alpen bedecken rund 62 % der gesamten Landesfläche Österreichs.",
      "Österreich ist die Heimat weltberühmter Komponisten wie Mozart und Strauss.",
      "Der Großglockner ist mit 3.798 Metern der höchste Berg des Landes.",
      "Die Flagge Österreichs gehört zu den ältesten Nationalfahnen der Welt.",
      "Das Land besteht aus neun eigenständigen Bundesländern mit eigener Kultur.",
      "Die Wiener Kaffeehauskultur ist Teil des immateriellen UNESCO-Kulturerbes.",
      "Österreich ist seit 1955 völkerrechtlich zur immerwährenden Neutralität verpflichtet.",
      "Der Tiergarten Schönbrunn in Wien ist der älteste noch bestehende Zoo der Welt.",
      "Rund ein Viertel der Bevölkerung lebt im Großraum der Hauptstadt Wien."
    ],
    hu: [
      "Bécs a szövetségi főváros és az ország kulturális központja.",
      "Az Alpok Ausztria teljes területének mintegy 62%-át borítják.",
      "Ausztria olyan világhírű zeneszerzők hazája, mint Mozart és Strauss.",
      "A Großglockner 3798 méterével az ország legmagasabb hegycsúcsa.",
      "Az osztrák zászló a világ egyik legrégebbi nemzeti lobogója.",
      "Az ország kilenc önálló szövetségi tartományból áll, saját kultúrával.",
      "A bécsi kávéházi kultúra az UNESCO szellemi kulturális örökségének része.",
      "Ausztria 1955 óta nemzetközileg elismert örökös semlegességet fogadott.",
      "A bécsi Schönbrunni Állatkert a világ legrégebbi, ma is működő állatkertje.",
      "A lakosság mintegy negyede Bécs és környékének vonzáskörzetében él."
    ],
    ro: [
      "Viena este capitala federală și centrul cultural al țării.",
      "Alpii acoperă aproximativ 62% din suprafața totală a Austriei.",
      "Austria este patria unor compozitori celebri precum Mozart și Strauss.",
      "Grossglockner este cel mai înalt munte din țară, având 3.798 de metri.",
      "Steagul Austriei este unul dintre cele mai vechi steaguri naționale din lume.",
      "Țara este formată din nouă state federale independente, cu culturi proprii.",
      "Cultura cafenelelor vieneze face parte din patrimoniul imaterial UNESCO.",
      "Austria este obligată prin dreptul internațional la neutralitate perpetuă din 1955.",
      "Grădina Zoologică Schönbrunn din Viena este cea mai veche din lume.",
      "Aproximativ un sfert din populație trăiește în zona metropolitană a Vienei."
    ],
    en: [
      "Vienna is the federal capital and the cultural heart of the country.",
      "The Alps cover approximately 62% of Austria's total land area.",
      "Austria is the home of world-famous composers like Mozart and Strauss.",
      "The Grossglockner is the highest mountain in the country at 3,798 meters.",
      "The Austrian flag is one of the oldest national flags in the world.",
      "The country consists of nine independent federal states with unique cultures.",
      "Viennese coffee house culture is part of UNESCO's intangible cultural heritage.",
      "Austria has been committed to perpetual neutrality under international law since 1955.",
      "Schönbrunn Zoo in Vienna is the oldest continuously operating zoo in the world.",
      "About a quarter of the population lives in the greater Vienna metropolitan area."
    ]
  }
};

export const austriaRegions: POI[] = [
  {
    id: "AT-1", type: "region", parent: "AT", coords: [16.5333, 47.8333],
    name: { de: "Burgenland", hu: "Burgenland", ro: "Burgenland", en: "Burgenland" },
    image: "/geo-images/austria/burgenland.webp",
    description: {
      de: "Das Burgenland ist das östlichste Bundesland Österreichs, bekannt für den Neusiedler See, Weinbau und sein sonniges pannonisches Klima.",
      hu: "Burgenland Ausztria legkeletibb tartománya, amely a Fertő tóról, borászatáról és napos pannon klímájáról ismert.",
      ro: "Burgenland este cel mai estic stat federal al Austriei, cunoscut pentru lacul Neusiedl, viticultură și climatul său panonic însorit.",
      en: "Burgenland is Austria's easternmost federal state, known for Lake Neusiedl, viticulture, and its sunny Pannonian climate."
    },
    descriptionAdvanced: { de: "Das Burgenland ist das östlichste, flachste und jüngste Bundesland Österreichs, das erst 1921 Teil der Republik wurde. Es zeichnet sich durch ein pannonisches, fast mediterranes Klima aus, das mit rund 300 Sonnentagen im Jahr ideale Bedingungen für den Weinbau schafft. Das Landschaftsbild wird stark vom Neusiedler See dominiert, einem faszinierenden Steppensee, der ein Paradies für Wassersportler und ein bedeutendes Vogelschutzgebiet ist. Mit seinen idyllischen Weinbergen, historischen Burgen und entspannenden Thermen bietet die Region eine einzigartige Mischung aus Natur, Kultur und Wellness. Eisenstadt, die charmante Hauptstadt, ist eng mit dem Leben und Wirken des Komponisten Joseph Haydn verbunden. Die Region ist zudem bekannt für ihre reiche kulinarische Tradition, die stark von ungarischen Einflüssen geprägt ist, was sich in Gerichten wie dem Pannonischen Fischsuppe oder verschiedenen Wildspezialitäten widerspiegelt. Die sanften Hügel des Südburgenlandes laden zu ausgiebigen Radtouren und Wanderungen ein, während die zahlreichen Burgen wie die Burg Forchtenstein oder die Burg Güssing von der bewegten Grenzgeschichte des Landes erzählen. Das Burgenland ist auch ein Zentrum der modernen Architektur und Kunst, was sich in innovativen Weingütern und zeitgenössischen Ausstellungen zeigt. Für Erholungssuchende bieten die Thermen in Lutzmannsburg, Stegersbach und Bad Tatzmannsdorf erstklassige Wellness-Erlebnisse in einer entspannten Atmosphäre. Die Gastfreundschaft der Burgenländer und die hohe Qualität der regionalen Produkte, insbesondere der Rotweine aus dem Blaufränkischland, machen jeden Besuch zu einem Genuss für alle Sinne. Ob man die Stille der Natur im Nationalpark Neusiedler See-Seewinkel sucht oder die kulturellen Highlights der Opernfestspiele St. Margarethen genießt – das Burgenland überrascht mit seiner Vielfalt und seinem ganz eigenen, entschleunigten Lebensrhythmus.", hu: "Burgenland Ausztria legkeletibb, leglaposabb és legfiatalabb tartománya, amely csak 1921-ben lett a köztársaság része. Pannon, szinte mediterrán éghajlat jellemzi, amely évi mintegy 300 napsütéses nappal ideális feltételeket teremt a szőlőtermesztéshez. A tájképet erősen meghatározza a Fertő tó, egy lenyűgöző sztyepptó, amely a vízi sportok szerelmeseinek paradicsoma és jelentős madárvédelmi terület. Idilli szőlőültetvényeivel, történelmi váraival és pihentető termálfürdőivel a régió a természet, a kultúra és a wellness egyedülálló keverékét kínálja. Kismarton (Eisenstadt), a bájos főváros szorosan kapcsolódik Joseph Haydn zeneszerző életéhez és munkásságához. A régió híres gazdag kulináris hagyományairól is, amelyeket erősen befolyásolt a magyar konyha, ami olyan ételekben mutatkozik meg, mint a pannon halászlé vagy a különböző vadhús-specialitások. Dél-Burgenland szelíd dombjai hosszú kerékpártúrákra és túrákra hívogatnak, míg a számos vár, mint például Fraknó vára (Forchtenstein) vagy Németújvár (Güssing) vára, az ország mozgalmas határmenti történelméről mesél. Burgenland a modern építészet és művészet központja is, ami az innovatív borászatokban és a kortárs kiállításokban is megmutatkozik. A pihenni vágyók számára Locsmánd (Lutzmannsburg), Szentelek (Stegersbach) és Tarcsafürdő (Bad Tatzmannsdorf) termálfürdői első osztályú wellness-élményeket kínálnak nyugodt légkörben. A burgenlandiak vendégszeretete és a regionális termékek kiváló minősége, különösen a kékfrankos vidékéről származó vörösborok, minden látogatást az érzékek élvezetévé tesznek. Akár a természet csendjét keresi valaki a Fertő–Hanság Nemzeti Parkban, akár a Szentmargitbányai (St. Margarethen) Operafesztivál kulturális fénypontjait élvezi – Burgenland meglep sokszínűségével és sajátos, lelassult életritmusával.", ro: "Burgenland este cel mai estic, plat și tânăr stat federal al Austriei, devenind parte a republicii abia în 1921. Se caracterizează printr-o climă panonică, aproape mediteraneană, care, cu aproximativ 300 de zile cu soare pe an, creează condiții ideale pentru viticultură. Peisajul este puternic dominat de Lacul Neusiedl, un fascinant lac de stepă care este un paradis pentru pasionații de sporturi nautice și un important sanctuar de păsări. Cu podgoriile sale idilice, castelele istorice și băile termale relaxante, regiunea oferă un amestec unic de natură, cultură și wellness. Eisenstadt, fermecătoarea capitală, este strâns legată de viața și opera compozitorului Joseph Haydn. Regiunea este, de asemenea, cunoscută pentru bogata sa tradiție culinară, puternic influențată de gastronomia maghiară, lucru reflectat în preparate precum supa de pește panonică sau diverse specialități din vânat. Dealurile blânde din sudul Burgenlandului invită la plimbări lungi cu bicicleta și drumeții, în timp ce numeroasele castele, precum Castelul Forchtenstein sau Castelul Güssing, povestesc despre istoria agitată de frontieră a țării. Burgenland este, de asemenea, un centru al arhitecturii și artei moderne, vizibil în cramele inovatoare și expozițiile contemporane. Pentru cei care caută relaxare, băile termale din Lutzmannsburg, Stegersbach și Bad Tatzmannsdorf oferă experiențe de wellness de primă clasă într-o atmosferă relaxată. Ospitalitatea locuitorilor din Burgenland și calitatea înaltă a produselor regionale, în special vinurile roșii din regiunea Blaufränkischland, fac din fiecare vizită o plăcere pentru toate simțurile. Fie că căutați liniștea naturii în Parcul Național Neusiedler See-Seewinkel sau vă bucurați de momentele culturale de la Festivalul de Operă din St. Margarethen, Burgenland surprinde prin diversitatea sa și prin propriul ritm de viață relaxat.", en: "Burgenland is the easternmost, flattest, and youngest federal state of Austria, having only become part of the republic in 1921. It is characterized by a Pannonian, almost Mediterranean climate which, with around 300 days of sunshine a year, creates ideal conditions for viticulture. The landscape is heavily dominated by Lake Neusiedl, a fascinating steppe lake that is a paradise for water sports enthusiasts and an important bird sanctuary. With its idyllic vineyards, historic castles, and relaxing thermal baths, the region offers a unique blend of nature, culture, and wellness. Eisenstadt, the charming capital, is closely associated with the life and work of the composer Joseph Haydn. The region is also known for its rich culinary tradition, heavily influenced by Hungarian cuisine, which is reflected in dishes such as Pannonian fish soup or various game specialties. The rolling hills of Southern Burgenland invite extensive cycling tours and hikes, while the numerous castles such as Forchtenstein Castle or Güssing Castle tell of the country's turbulent border history. Burgenland is also a center of modern architecture and art, as seen in innovative wineries and contemporary exhibitions. For those seeking relaxation, the thermal baths in Lutzmannsburg, Stegersbach, and Bad Tatzmannsdorf offer first-class wellness experiences in a relaxed atmosphere. The hospitality of the people of Burgenland and the high quality of regional products, especially the red wines from the Blaufränkischland, make every visit a treat for all senses. Whether you are looking for the silence of nature in the Neusiedler See-Seewinkel National Park or enjoying the cultural highlights of the St. Margarethen Opera Festival, Burgenland surprises with its diversity and its very own, decelerated rhythm of life." },
    facts: {
      de: [
        "Das Burgenland grenzt an Ungarn, die Slowakei und Slowenien.",
        "Eisenstadt ist die Landeshauptstadt und Haydn-Stadt.",
        "Es ist das Bundesland mit den meisten Sonnentagen in Österreich.",
        "Der Neusiedler See ist der größte See Österreichs und UNESCO-Welterbe.",
        "Das Land ist berühmt für seine erstklassigen Rot- und Süßweine.",
        "Schloss Esterházy ist ein bedeutendes kulturelles Zentrum der Region.",
        "Es gibt eine bedeutende burgenlandkroatische Minderheit im Land.",
        "Der Nationalpark Neusiedler See-Seewinkel schützt seltene Vogelarten.",
        "Die Burg Forchtenstein thront imposant auf einem Vulkanfelsen.",
        "Thermenorte wie Stegersbach ziehen jährlich viele Wellness-Gäste an."
      ],
      hu: [
        "Burgenland Magyarországgal, Szlovákiával és Szlovéniával határos.",
        "A tartomány fővárosa Kismarton (Eisenstadt), Haydn városa.",
        "Ez a legtöbb napsütéses nappal rendelkező tartomány Ausztriában.",
        "A Fertő tó Ausztria legnagyobb tava és UNESCO Világörökség.",
        "A tartomány híres kiváló minőségű vörös- és édesborairól.",
        "Az Esterházy-kastély a régió jelentős kulturális központja.",
        "Jelentős burgenlandi horvát kisebbség él a tartományban.",
        "A Fertő–Hanság Nemzeti Park ritka madárfajokat védelmez.",
        "Fraknó vára (Forchtenstein) impozánsan magasodik egy vulkáni sziklán.",
        "Az olyan termálvárosok, mint Szentelek, sok wellness-vendéget vonzanak."
      ],
      ro: [
        "Burgenland se învecinează cu Ungaria, Slovacia și Slovenia.",
        "Eisenstadt este capitala statului și orașul lui Haydn.",
        "Este statul federal cu cele mai multe zile însorite din Austria.",
        "Lacul Neusiedl este cel mai mare lac din Austria și sit UNESCO.",
        "Statul este faimos pentru vinurile sale roșii și dulci de primă clasă.",
        "Palatul Esterházy este un important centru cultural al regiunii.",
        "Există o minoritate croată semnificativă în Burgenland.",
        "Parcul Național Neusiedler See-Seewinkel protejează specii rare de păsări.",
        "Castelul Forchtenstein se înalță impunător pe o stâncă vulcanică.",
        "Stațiunile termale precum Stegersbach atrag anual mulți turiști."
      ],
      en: [
        "Burgenland borders Hungary, Slovakia, and Slovenia.",
        "Eisenstadt is the state capital and known as the Haydn City.",
        "It is the federal state with the most days of sunshine in Austria.",
        "Lake Neusiedl is Austria's largest lake and a UNESCO World Heritage site.",
        "The state is famous for its first-class red and sweet wines.",
        "Esterházy Palace is a significant cultural center of the region.",
        "There is a significant Burgenland Croatian minority in the state.",
        "The Neusiedler See-Seewinkel National Park protects rare bird species.",
        "Forchtenstein Castle sits imposingly on a volcanic rock.",
        "Thermal spa towns like Stegersbach attract many wellness guests annually."
      ]
    }
  },
  {
    id: "AT-2", type: "region", parent: "AT", coords: [14.3053, 46.6247],
    name: { de: "Kärnten", hu: "Karintia", ro: "Carintia", en: "Carinthia" },
    image: "/geo-images/austria/carinthia.webp",
    description: {
      de: "Kärnten ist das südlichste Bundesland Österreichs, berühmt für seine zahlreichen warmen Badeseen und die beeindruckenden Gipfel der Hohen Tauern.",
      hu: "Karintia Ausztria legdélibb tartománya, amely számos meleg vizű taváról és a Magas-Tauern lenyűgöző hegycsúcsairól híres.",
      ro: "Carintia este cel mai sudic stat federal al Austriei, renumit pentru numeroasele sale lacuri calde și vârfurile impresionante ale munților Hohe Tauern.",
      en: "Carinthia is Austria's southernmost federal state, famous for its numerous warm swimming lakes and the impressive peaks of the Hohe Tauern."
    },
    descriptionAdvanced: { de: "Kärnten ist das südlichste Bundesland Österreichs und grenzt an Italien und Slowenien, was ihm ein fast schon mediterranes Lebensgefühl verleiht. Die Region ist berühmt für ihre unzähligen, glasklaren und im Sommer angenehm warmen Badeseen, wie den Wörthersee, Millstätter See und Weißensee. Eingerahmt werden diese tiefblauen Gewässer von majestätischen Gebirgszügen, darunter die Hohen Tauern mit dem Großglockner. Die reiche Geschichte Kärntens spiegelt sich in zahlreichen Burgen, Schlössern und historischen Altstädten wie Klagenfurt und Villach wider. Es ist ein wahres Paradies für Wassersportler, Wanderer, Radfahrer und alle, die eine Kombination aus alpiner Natur und südlicher Leichtigkeit suchen. Die besondere Lage am Schnittpunkt der germanischen, slawischen und romanischen Kulturkreise hat eine vielfältige Kulturlandschaft und eine eigenständige kulinarische Tradition hervorgebracht, die für Spezialitäten wie die Kärntner Kasnudeln berühmt ist. Im Winter verwandeln sich die Berge in erstklassige Skigebiete wie Bad Kleinkirchheim und Nassfeld, die sonnenverwöhnte Pisten und gemütliche Almhütten bieten. Die Hauptstadt Klagenfurt bezaubert Besucher mit ihrer Renaissance-Architektur und dem legendären Lindwurm-Denkmal, während der nahegelegene Park Minimundus die Welt im Miniaturformat zeigt. Naturliebhaber können das Biosphärenreservat Nockberge erkunden oder eine Panoramafahrt auf der Großglockner Hochalpenstraße unternehmen, die atemberaubende Ausblicke auf den höchsten Gipfel Österreichs bietet. Die herzliche Gastfreundschaft der Kärntner und die entspannte Atmosphäre an den Seeufern machen das Bundesland zu einem erstklassigen Ziel für Familien und Aktivurlauber gleichermaßen. Ob man im türkisfarbenen Wasser des Faaker Sees schwimmt, durch die schroffen Karawanken wandert oder ein Glas regionalen Wein in einem sonnigen Weinberg genießt – Kärnten bietet eine perfekte Mischung aus Abenteuer und Erholung unter der südlichen Sonne.", hu: "Karintia Ausztria legdélibb tartománya, amely Olaszországgal és Szlovéniával határos, ami szinte mediterrán életérzést kölcsönöz neki. A régió híres számtalan, kristálytiszta és nyáron kellemesen meleg fürdőtaváról, mint a Wörthersee, a Millstätter See és a Weißensee. Ezeket a mélykék vizeket fenséges hegyvonulatok keretezik, köztük a Magas-Tauern a Großglocknerrel. Karintia gazdag történelme számos várban, kastélyban és történelmi óvárosban tükröződik, mint például Klagenfurt és Villach. Igazi paradicsom a vízi sportok szerelmeseinek, túrázóknak, kerékpárosoknak és mindazoknak, akik az alpesi természet és a déli könnyedség kombinációját keresik. A germán, szláv és román kultúrkörök találkozásánál fekvő régió egyedülálló kulturális tájat és sajátos kulináris hagyományokat hozott létre, amely olyan különlegességekről híres, mint a karintiai sajtos tészta (Kasnudeln). Télen a hegyek első osztályú síközpontokká alakulnak, mint Bad Kleinkirchheim és Nassfeld, amelyek napsütötte lejtőket és hangulatos alpesi hüttéket kínálnak. A főváros, Klagenfurt, reneszánsz építészetével és a legendás Lindwurm-szoborral bűvöli el a látogatókat, míg a közeli Minimundus parkban a világot láthatjuk kicsiben. A természet kedvelői felfedezhetik a Nockberge Bioszféra-rezervátumot, vagy végighajthatnak a Großglockner Alpesi Úton, amely lélegzetelállító kilátást nyújt Ausztria legmagasabb csúcsára. A karintiaiak szívélyes vendégszeretete és a tópartok nyugodt légköre a tartományt a családok és az aktív utazók elsőszámú célpontjává teszi. Akár a Faaker See türkizkék vizében úszik valaki, akár a Karavankák sziklás vonulatai között túrázik, vagy egy pohár helyi bort élvez egy napsütötte szőlőskertben, Karintia a kaland és a pihenés tökéletes keverékét kínálja a déli nap alatt.", ro: "Carintia este cel mai sudic stat al Austriei și se învecinează cu Italia și Slovenia, ceea ce îi conferă o atmosferă aproape mediteraneană. Regiunea este renumită pentru nenumăratele sale lacuri de înot cristaline și plăcut de calde vara, cum ar fi Wörthersee, Millstätter See și Weissensee. Aceste ape de un albastru intens sunt încadrate de lanțuri muntoase maiestuoase, inclusiv Hohe Tauern cu muntele Grossglockner. Istoria bogată a Carintiei este reflectată în numeroase castele, palate și orașe vechi istorice precum Klagenfurt și Villach. Este un adevărat paradis pentru iubitorii de sporturi nautice, drumeții, bicicliști și oricine caută o combinație de natură alpină și lejeritate sudică. Poziția unică a regiunii la intersecția culturilor germanice, slave și romanice a creat un peisaj cultural divers și o tradiție culinară distinctivă, faimoasă pentru specialități precum Kasnudeln din Carintia. Iarna, munții se transformă în stațiuni de schi de top, precum Bad Kleinkirchheim și Nassfeld, oferind pârtii însorite și cabane alpine primitoare. Capitala, Klagenfurt, farmecă vizitatorii cu arhitectura sa renascentistă și legendara statuie Lindwurm, în timp ce parcul Minimundus din apropiere permite oaspeților să vadă lumea în miniatură. Iubitorii de natură pot explora Rezervația Biosferei Nockberge sau pot face o plimbare pitorească pe drumul alpin Grossglockner, care oferă vederi uluitoare asupra celui mai înalt vârf din Austria. Ospitalitatea caldă a carintienilor și atmosfera relaxată de pe malul lacurilor fac din acest stat o destinație de primă clasă atât pentru familii, cât și pentru călătorii activi. Fie că înotați în apele turcoaz ale lacului Faaker See, faceți drumeții prin masivul Karawanks sau savurați un pahar de vin regional într-o podgorie însorită, Carintia oferă un amestec perfect de aventură și relaxare sub soarele sudic.", en: "Carinthia is the southernmost federal state of Austria and borders Italy and Slovenia, which gives it an almost Mediterranean way of life. The region is famous for its countless crystal-clear bathing lakes that are pleasantly warm in summer, such as Lake Wörthersee, Lake Millstatt, and Lake Weissensee. These deep blue waters are framed by majestic mountain ranges, including the Hohe Tauern with the Grossglockner. Carinthia's rich history is reflected in numerous castles, palaces, and historic old towns like Klagenfurt and Villach. It is a true paradise for water sports enthusiasts, hikers, cyclists, and anyone looking for a combination of Alpine nature and southern lightness. The region's unique position at the intersection of Germanic, Slavic, and Romance cultures has created a diverse cultural landscape and a distinctive culinary tradition, famous for specialties like Carinthian Kasnudeln. In winter, the mountains transform into top-tier ski resorts like Bad Kleinkirchheim and Nassfeld, offering sun-drenched slopes and cozy Alpine huts. The capital, Klagenfurt, charms visitors with its Renaissance architecture and the legendary Lindwurm statue, while the nearby Minimundus park allows guests to see the world in miniature. Nature lovers can explore the Nockberge Biosphere Reserve or take a scenic drive along the Grossglockner High Alpine Road, which offers breathtaking views of Austria's highest peak. The warm hospitality of the Carinthians and the relaxed atmosphere at the lakesides make the state a premier destination for families and active travelers alike. Whether you are swimming in the turquoise waters of the Faaker See, hiking through the rugged Karawanks, or enjoying a glass of regional wine in a sunny vineyard, Carinthia offers a perfect blend of adventure and relaxation under the southern sun." },
    facts: {
      de: [
        "Klagenfurt am Wörthersee ist die Landeshauptstadt Kärntens.",
        "Der Wörthersee ist der größte und bekannteste See des Bundeslandes.",
        "Es gibt über 1.200 stehende Gewässer in der gesamten Region.",
        "Der Großglockner, Österreichs höchster Berg, liegt an der Grenze zu Tirol.",
        "Burg Hochosterwitz gilt als eines der beeindruckendsten Wahrzeichen.",
        "Der Villacher Kirchtag ist das größte Brauchtumsfest in ganz Österreich.",
        "Die slowenische Volksgruppe ist eine historisch gewachsene Minderheit.",
        "Der Weißensee bietet im Winter die größte Natureisfläche Europas.",
        "Nockberge und Hohe Tauern sind bedeutende National- und Biosphärenparks.",
        "Kärntner Kasnudeln sind die bekannteste kulinarische Spezialität der Region."
      ],
      hu: [
        "Klagenfurt am Wörthersee Karintia tartományi fővárosa.",
        "A Wörthersee a tartomány legnagyobb és legismertebb tava.",
        "A régióban összesen több mint 1200 állóvíz található.",
        "A Großglockner, Ausztria legmagasabb hegye, a tiroli határon fekszik.",
        "A Hochosterwitz vára a tartomány egyik leglenyűgözőbb jelképe.",
        "A Villacher Kirchtag Ausztria legnagyobb hagyományőrző fesztiválja.",
        "A szlovén népcsoport történelmileg kialakult kisebbség a régióban.",
        "A Weißensee télen Európa legnagyobb természetes jégfelületét kínálja.",
        "A Nockberge és a Magas-Tauern jelentős nemzeti és bioszféraparkok.",
        "A karintiai sajtos tészta (Kasnudeln) a régió legismertebb étele."
      ],
      ro: [
        "Klagenfurt am Wörthersee este capitala statului Carintia.",
        "Wörthersee este cel mai mare și mai cunoscut lac din acest stat federal.",
        "Există peste 1.200 de ape stătătoare în întreaga regiune.",
        "Grossglockner, cel mai înalt munte din Austria, se află la granița cu Tirol.",
        "Castelul Hochosterwitz este considerat unul dintre cele mai impresionante repere.",
        "Villacher Kirchtag este cel mai mare festival de tradiții din toată Austria.",
        "Grupul etnic sloven este o minoritate istorică în regiune.",
        "Lacul Weissensee oferă iarna cea mai mare suprafață de gheață naturală din Europa.",
        "Nockberge și Hohe Tauern sunt parcuri naționale și biosfere importante.",
        "Kasnudeln din Carintia este cea mai cunoscută specialitate culinară a regiunii."
      ],
      en: [
        "Klagenfurt am Wörthersee is the state capital of Carinthia.",
        "Lake Wörthersee is the largest and most famous lake in the federal state.",
        "There are over 1,200 standing bodies of water throughout the region.",
        "The Grossglockner, Austria's highest mountain, is on the border with Tyrol.",
        "Hochosterwitz Castle is considered one of the most impressive landmarks.",
        "The Villacher Kirchtag is the largest traditional festival in all of Austria.",
        "The Slovenian ethnic group is a historically established minority in the region.",
        "Lake Weissensee offers Europe's largest natural ice surface in winter.",
        "Nockberge and Hohe Tauern are significant national and biosphere parks.",
        "Carinthian Kasnudeln (cheese noodles) is the region's most famous culinary specialty."
      ]
    }
  },
  {
    id: "AT-3", type: "region", parent: "AT", coords: [15.6333, 48.2],
    name: { de: "Niederösterreich", hu: "Alsó-Ausztria", ro: "Austria Inferioară", en: "Lower Austria" },
    image: "/geo-images/austria/lower-austria.webp",
    description: {
      de: "Niederösterreich ist das flächenmäßig größte Bundesland Österreichs, geprägt von der Donau, weiten Weinvierteln und den Ausläufern der Alpen.",
      hu: "Alsó-Ausztria Ausztria legnagyobb területű tartománya, amelyet a Duna, kiterjedt borvidékek és az Alpok nyúlványai határoznak meg.",
      ro: "Austria Inferioară este cel mai mare stat federal al Austriei ca suprafață, caracterizat de Dunăre, regiuni viticole vaste și poalele Alpilor.",
      en: "Lower Austria is Austria's largest federal state by area, characterized by the Danube, vast wine regions, and the foothills of the Alps."
    },
    descriptionAdvanced: { de: "Niederösterreich ist das flächenmäßig größte Bundesland Österreichs und umschließt die Bundeshauptstadt Wien vollständig. Es ist eine Region voller Kontraste, von den sanften, weinbedeckten Hügeln des Weinviertels bis zu den alpinen Gipfeln des Mostviertels. Das Donautal, insbesondere die zum UNESCO-Welterbe zählende Wachau, prägt das Landschaftsbild mit malerischen Dörfern, mächtigen Stiften wie Melk und endlosen Marillengärten. Als historisches Kernland Österreichs birgt es zahlreiche Schätze, darunter römische Ausgrabungen in Carnuntum und prachtvolle Schlösser aus der Barockzeit. Die Hauptstadt St. Pölten verbindet charmante Barockarchitektur mit modernen kulturellen und administrativen Gebäuden. Das Bundesland ist zudem ein bedeutendes Agrar- und Industriezentrum, bekannt für seine hochwertigen Weine und die traditionelle Mostkultur im Mostviertel. Outdoor-Begeisterte können ein weitläufiges Netz an Radwegen entlang der Donau genießen oder im Wienerwald und der Rax-Schneeberg-Gruppe wandern, die das erste hochalpine Gelände in der Nähe der Hauptstadt bietet. Der reiche Kulturkalender Niederösterreichs umfasst Veranstaltungen wie das Grafenegg Festival und zahlreiche Weinfeste, die die tief verwurzelten Traditionen der Region widerspiegeln. Die Nähe zu Wien macht es zu einem idealen Ziel für Tagesausflüge, doch seine vielfältigen Landschaften und die historische Tiefe rechtfertigen einen weitaus längeren Aufenthalt. Von den mystischen Wäldern des Waldviertels bis zu den sonnigen Weinbergen der Thermenregion bietet Niederösterreich ein authentisches österreichisches Erlebnis, das Geschichte, Natur und kulinarische Exzellenz auf einzigartige Weise verbindet.", hu: "Alsó-Ausztria Ausztria területre legnagyobb tartománya, amely teljesen körülveszi a szövetségi fővárost, Bécset. Ez a kontrasztok régiója, a Weinviertel szelíd, szőlővel borított dombjaitól a Mostviertel alpesi csúcsaiig. A Duna völgye, különösen az UNESCO Világörökség részét képező Wachau, festői falvakkal, olyan hatalmas apátságokkal, mint Melk, és végtelen sárgabarackosokkal határozza meg a tájképet. Ausztria történelmi magterületeként számos kincset rejt, köztük római kori ásatásokat Carnuntumban és pompás barokk kastélyokat. A főváros, St. Pölten, ötvözi a bájos barokk építészetet a modern kulturális és adminisztratív épületekkel. A tartomány egyben jelentős mezőgazdasági és ipari központ is, amely kiváló minőségű borairól és a Mostviertel hagyományos almabor-kultúrájáról ismert. A természet kedvelői élvezhetik a Duna menti kiterjedt kerékpárút-hálózatot, vagy túrázhatnak a Bécsi-erdőben és a Rax-Schneeberg csoportban, amely a fővároshoz közeli első magashegyi terepet kínálja. Alsó-Ausztria gazdag kulturális naptárában olyan események szerepelnek, mint a Grafenegg Fesztivál és számos borral kapcsolatos ünnepség, amelyek a régió mélyen gyökerező hagyományait mutatják be. Bécs közelsége ideális célponttá teszi egynapos kirándulásokhoz, de változatos tájai és történelmi mélysége sokkal hosszabb tartózkodást is indokolnak. A Waldviertel titokzatos erdőitől a Thermenregion napsütötte szőlőskertjeiig Alsó-Ausztria autentikus osztrák élményt kínál, amely egyedülálló módon ötvözi a történelmet, a természetet és a kulináris kiválóságot.", ro: "Austria Inferioară este cel mai mare stat din Austria ca suprafață și înconjoară complet capitala federală Viena. Este o regiune plină de contraste, de la dealurile blânde, acoperite de vii ale regiunii Weinviertel până la vârfurile alpine din Mostviertel. Valea Dunării, în special regiunea Wachau, inclusă în patrimoniul UNESCO, modelează peisajul cu sate pitorești, mănăstiri puternice precum Melk și livezi nesfârșite de caise. Fiind inima istorică a Austriei, deține numeroase comori, inclusiv excavații romane la Carnuntum și palate magnifice din perioada barocă. Capitala St. Pölten combină arhitectura barocă fermecătoare cu clădiri culturale și administrative moderne. Statul este, de asemenea, un important centru agricol și industrial, cunoscut pentru vinurile sale de înaltă calitate și cultura tradițională a cidrului în Mostviertel. Pasionații de activități în aer liber se pot bucura de o rețea vastă de piste de biciclete de-a lungul Dunării sau pot face drumeții în Pădurea Vieneză și în grupul Rax-Schneeberg, care oferă primul teren înalt alpin lângă capitală. Calendarul cultural bogat al Austriei Inferioare include evenimente precum Festivalul Grafenegg și diverse sărbători legate de vin, care pun în valoare tradițiile profunde ale regiunii. Proximitatea față de Viena o face o destinație ideală pentru excursii de o zi, totuși peisajele sale diverse și profunzimea istorică justifică un sejur mult mai lung. De la pădurile misterioase din Waldviertel până la podgoriile însorite din Thermenregion, Austria Inferioară oferă o experiență austriacă autentică, care îmbină istoria, natura și excelența culinară într-un mod unic.", en: "Lower Austria is the largest federal state in Austria by area and completely surrounds the federal capital, Vienna. It is a region full of contrasts, from the gentle, vine-covered hills of the Weinviertel to the Alpine peaks of the Mostviertel. The Danube Valley, especially the Wachau, which is a UNESCO World Heritage site, shapes the landscape with picturesque villages, mighty abbeys like Melk, and endless apricot orchards. As the historical core of Austria, it holds numerous treasures, including Roman excavations in Carnuntum and magnificent Baroque palaces. The capital, St. Pölten, combines charming Baroque architecture with modern cultural and administrative buildings. The state is also a major agricultural and industrial hub, known for its high-quality wines and traditional cider culture in the Mostviertel. Outdoor enthusiasts can enjoy a vast network of cycling paths along the Danube or hike in the Vienna Woods and the Rax-Schneeberg group, which offers the first high-alpine terrain near the capital. Lower Austria's rich cultural calendar includes events like the Grafenegg Festival and various wine-related celebrations that showcase the region's deep-rooted traditions. The proximity to Vienna makes it an ideal destination for day trips, yet its diverse landscapes and historical depth warrant a much longer stay. From the mysterious forests of the Waldviertel to the sunny vineyards of the Thermenregion, Lower Austria offers an authentic Austrian experience that blends history, nature, and culinary excellence in a unique way." },
    facts: {
      de: [
        "St. Pölten ist seit 1986 die Landeshauptstadt von Niederösterreich.",
        "Es ist das flächenmäßig größte Bundesland der Republik Österreich.",
        "Die Wachau ist ein weltberühmtes Weinbaugebiet und UNESCO-Welterbe.",
        "Das Stift Melk gilt als eines der schönsten Barockensembles Europas.",
        "Carnuntum war in der Antike eine bedeutende römische Provinzhauptstadt.",
        "Niederösterreich umschließt die Bundeshauptstadt Wien vollständig.",
        "Der Schneeberg ist mit 2.076 Metern der höchste Berg des Bundeslandes.",
        "Die Region ist berühmt für ihre Marillenblüte und den Qualitätsweinbau.",
        "Der Nationalpark Thayatal schützt eine einzigartige Canyon-Landschaft.",
        "Zahlreiche Marchfeldschlösser zeugen von der imperialen Vergangenheit."
      ],
      hu: [
        "St. Pölten 1986 óta Alsó-Ausztria tartományi fővárosa.",
        "Ez az Osztrák Köztársaság területileg legnagyobb tartománya.",
        "A Wachau világhírű borvidék és az UNESCO Világörökség része.",
        "A melki apátság Európa egyik legszebb barokk épületegyüttese.",
        "Carnuntum az ókorban jelentős római tartományi főváros volt.",
        "Alsó-Ausztria tartomány teljesen körülöleli a fővárost, Bécset.",
        "A Schneeberg 2076 méterével a tartomány legmagasabb hegycsúcsa.",
        "A régió híres a barackvirágzásról és a minőségi bortermelésről.",
        "A Thayatal Nemzeti Park egyedülálló kanyonvölgyet védelmez.",
        "Számos marchfeldi kastély tanúskodik a császári múltról."
      ],
      ro: [
        "St. Pölten este capitala statului Austria Inferioară din anul 1986.",
        "Este cel mai mare stat federal ca suprafață din Republica Austria.",
        "Wachau este o regiune viticolă faimoasă și sit al patrimoniului UNESCO.",
        "Abația Melk este considerată unul dintre cele mai frumoase ansambluri baroce.",
        "Carnuntum a fost o importantă capitală de provincie romană în antichitate.",
        "Austria Inferioară înconjoară complet capitala federală, Viena.",
        "Schneeberg este cel mai înalt munte din stat, având 2.076 de metri.",
        "Regiunea este celebră pentru înflorirea caisilor și viticultura de calitate.",
        "Parcul Național Thayatal protejează un peisaj de canion unic.",
        "Numeroase palate din Marchfeld stau mărturie trecutului imperial."
      ],
      en: [
        "St. Pölten has been the state capital of Lower Austria since 1986.",
        "It is the largest federal state by land area in the Republic of Austria.",
        "The Wachau is a world-famous wine region and a UNESCO World Heritage site.",
        "Melk Abbey is considered one of Europe's most beautiful Baroque ensembles.",
        "Carnuntum was a significant Roman provincial capital in ancient times.",
        "Lower Austria completely surrounds the federal capital city of Vienna.",
        "The Schneeberg is the state's highest mountain at 2,076 meters.",
        "The region is famous for its apricot blossoms and high-quality winemaking.",
        "The Thayatal National Park protects a unique river canyon landscape.",
        "Numerous Marchfeld palaces bear witness to the region's imperial past."
      ]
    }
  },
  {
    id: "AT-4", type: "region", parent: "AT", coords: [14.2861, 48.3069],
    name: { de: "Oberösterreich", hu: "Felső-Ausztria", ro: "Austria Superioară", en: "Upper Austria" },
    image: "/geo-images/austria/upper-austria.webp",
    description: {
      de: "Oberösterreich ist ein vielseitiges Bundesland, das von der industriellen Stärke von Linz, dem malerischen Salzkammergut und dem hügeligen Mühlviertel geprägt ist.",
      hu: "Felső-Ausztria egy sokszínű tartomány, amelyet Linz ipari ereje, a festői Salzkammergut és a dombos Mühlviertel határoz meg.",
      ro: "Austria Superioară este un stat federal versatil, caracterizat de puterea industrială a orașului Linz, pitoreasca regiune Salzkammergut și zona deluroasă Mühlviertel.",
      en: "Upper Austria is a versatile federal state characterized by the industrial strength of Linz, the picturesque Salzkammergut, and the hilly Mühlviertel."
    },
    descriptionAdvanced: { de: "Oberösterreich bietet eine faszinierende landschaftliche Vielfalt, die vom hügeligen Granit- und Gneishochland im Norden über das fruchtbare Alpenvorland bis hin zu den markanten Kalkalpen im Süden reicht. Die Region ist nicht nur ein industrieller Motor Österreichs, sondern besticht auch durch unberührte Naturjuwele wie den Nationalpark Kalkalpen. Ein besonderes Highlight ist das weltberühmte Salzkammergut, das Oberösterreich sich mit Salzburg und der Steiermark teilt und mit tiefblauen Seen wie dem Attersee und Traunsee begeistert. Linz, die dynamische Landeshauptstadt an der Donau, hat sich erfolgreich von einer Industriestadt zu einem Zentrum für digitale Kunst und moderne Kultur gewandelt. Die historische Bedeutung der Region zeigt sich auch in charmanten Städten wie Steyr und dem malerischen Weltkulturerbe-Ort Hallstatt. Oberösterreich ist führend in den Bereichen erneuerbare Energien und nachhaltige Technologien, was seinen zukunftsorientierten Geist widerspiegelt. Besucher können die historischen Salzbergwerke erkunden, die der Region einst ihren Reichtum bescherten, oder die lebendige kulinarische Szene genießen, die von der traditionellen Linzer Torte bis hin zu herzhaften regionalen Spezialitäten reicht. Der Donauradweg, einer der beliebtesten Radwege Europas, schlängelt sich durch das Bundesland und bietet herrliche Ausblicke auf das Flusstal sowie seine zahlreichen Burgen und Klöster. Im Süden bilden die schroffen Gipfel des Dachsteinmassivs eine dramatische Kulisse für ganzjährige Outdoor-Aktivitäten, vom Skifahren und Snowboarden im Winter bis hin zum Klettern und Paragleiten im Sommer. Die Mischung aus industrieller Innovation, kulturellem Reichtum und natürlicher Schönheit macht Oberösterreich zu einem facettenreichen Reiseziel, das für jeden Reisenden etwas zu bieten hat. Ob man das Ars Electronica Festival in Linz besucht, in den Thermalwässern von Bad Ischl entspannt oder durch die dichten Wälder des Mühlviertels wandert – Oberösterreich lädt dazu ein, seinen einzigartigen Charme und seine Gastfreundschaft zu entdecken.", hu: "Felső-Ausztria lenyűgöző táji sokszínűséget kínál, amely az északi dombos gránit- és gneisz-fennsíktól a termékeny Alpokalján át egészen a déli, markáns Mészkő-Alpokig terjed. A régió nemcsak Ausztria ipari motorja, hanem olyan érintetlen természeti gyöngyszemekkel is büszkélkedhet, mint a Kalkalpen Nemzeti Park. Különleges fénypont a világhírű Salzkammergut, amelyen Felső-Ausztria Salzburggal és Stájerországgal osztozik, és amely olyan mélykék tavakkal nyűgözi le a látogatókat, mint az Attersee és a Traunsee. Linz, a dinamikus tartományi főváros a Duna partján, sikeresen alakult át iparvárosból a digitális művészet és a modern kultúra központjává. A régió történelmi jelentősége olyan bájos városokban is megmutatkozik, mint Steyr és a festői világörökségi helyszín, Hallstatt. Felső-Ausztria vezető szerepet tölt be a megújuló energia és a fenntartható technológiák területén, ami tükrözi előremutató szellemiségét. A látogatók felfedezhetik a történelmi sóbányákat, amelyek egykor a régió gazdagságát adták, vagy élvezhetik a vibráló kulináris életet, amely a hagyományos Linzer tortától a kiadós regionális specialitásokig terjed. A Duna menti kerékpárút, Európa egyik legnépszerűbb biciklis útvonala, kanyarog át a tartományon, lenyűgöző kilátást nyújtva a folyóvölgyre, annak számos várára és kolostorára. Délen a Dachstein-masszívum sziklás csúcsai drámai hátteret biztosítanak az egész éves szabadtéri tevékenységekhez, a téli síeléstől és snowboardozástól a nyári sziklamászásig és siklóernyőzésig. Az ipari innováció, a kulturális gazdagság és a természeti szépség keveréke Felső-Ausztriát sokszínű úti céllá teszi, amely minden utazó számára kínál valamit. Akár a linzi Ars Electronica Fesztiválon vesz részt valaki, akár Bad Ischl termálvizeiben pihen, vagy a Mühlviertel sűrű erdőiben túrázik, Felső-Ausztria felfedezésre hívja egyedülálló bájával és vendégszeretetével.", ro: "Austria Superioară oferă o diversitate peisagistică fascinantă, care se întinde de la zonele muntoase deluroase de granit și gnais din nord, peste poalele fertile ale Alpilor, până la remarcabilii Alpi Calcaroși din sud. Regiunea nu este doar un motor industrial al Austriei, ci captivează și prin bijuterii naturale neatinse, precum Parcul Național Kalkalpen. O atracție deosebită este faimoasa regiune Salzkammergut, pe care Austria Superioară o împarte cu Salzburg și Stiria, și care încântă cu lacuri de un albastru intens, precum Attersee și Traunsee. Linz, dinamica capitală a statului pe Dunăre, s-a transformat cu succes dintr-un oraș industrial într-un centru de artă digitală și cultură modernă. Importanța istorică a regiunii este evidentă și în orașe fermecătoare precum Steyr și pitorescul sit al patrimoniului mondial Hallstatt. Austria Superioară este un lider în domeniul energiei regenerabile și al tehnologiei durabile, reflectând spiritul său orientat spre viitor. Vizitatorii pot explora minele de sare istorice care au adus bogăție regiunii sau se pot bucura de scena culinară vibrantă, care variază de la tradiționalul tort Linzer la specialități regionale consistente. Traseul de biciclete de-a lungul Dunării, unul dintre cele mai populare din Europa, șerpuiește prin stat, oferind vederi uluitoare asupra văii râului și a numeroaselor sale castele și mănăstiri. În sud, vârfurile abrupte ale masivului Dachstein oferă un cadru dramatic pentru activități în aer liber pe tot parcursul anului, de la schi și snowboarding iarna, la alpinism și parapantă vara. Amestecul de inovație industrială, bogăție culturală și frumusețe naturală face din Austria Superioară o destinație multifațetată care oferă ceva pentru fiecare călător. Fie că participați la Festivalul Ars Electronica din Linz, vă relaxați în apele termale din Bad Ischl sau faceți drumeții prin pădurile dese din Mühlviertel, Austria Superioară vă invită să îi descoperiți farmecul unic și ospitalitatea.", en: "Upper Austria offers a fascinating landscape diversity ranging from the hilly granite and gneiss highlands in the north across the fertile Alpine foothills to the striking Limestone Alps in the south. The region is not only an industrial engine of Austria but also captivates with untouched natural jewels such as the Kalkalpen National Park. A special highlight is the world-famous Salzkammergut region, which Upper Austria shares with Salzburg and Styria, and which delights with deep blue lakes like the Attersee and Traunsee. Linz, the dynamic state capital on the Danube, has successfully transformed from an industrial city into a center for digital art and modern culture. The historical significance of the region is also evident in charming towns like Steyr and the picturesque World Heritage site of Hallstatt. Upper Austria is a leader in renewable energy and sustainable technology, reflecting its forward-thinking spirit. Visitors can explore the historic salt mines that gave the region its wealth or enjoy the vibrant culinary scene, which ranges from the traditional Linzer Torte to hearty regional specialties. The Danube Cycle Path, one of Europe's most popular bike routes, winds through the state, offering stunning views of the river valley and its many castles and monasteries. In the south, the rugged peaks of the Dachstein massif provide a dramatic backdrop for year-round outdoor activities, from skiing and snowboarding in winter to climbing and paragliding in summer. The blend of industrial innovation, cultural richness, and natural beauty makes Upper Austria a multifaceted destination that offers something for every traveler. Whether you are attending the Ars Electronica Festival in Linz, relaxing in the thermal waters of Bad Ischl, or hiking through the dense forests of the Mühlviertel, Upper Austria invites you to discover its unique charm and hospitality." },
    facts: {
      de: [
        "Linz ist die Landeshauptstadt und ein bedeutendes Zentrum für digitale Kunst.",
        "Das Salzkammergut mit seinen 76 Seen liegt zu einem großen Teil in Oberösterreich.",
        "Der Attersee ist der flächenmäßig größte ganz in Österreich liegende See.",
        "Der Nationalpark Kalkalpen schützt das größte zusammenhängende Waldgebiet des Landes.",
        "Steyr gilt als eine der am besten erhaltenen Altstädte im deutschsprachigen Raum.",
        "Der Hohe Dachstein ist mit 2.995 Metern der höchste Gipfel des Bundeslandes.",
        "Das Ars Electronica Center in Linz ist ein weltweit einzigartiges Museum der Zukunft.",
        "Hallstatt ist Teil des UNESCO-Welterbes und weltberühmt für seine Salzgewinnung.",
        "Die Linzer Torte gilt als das älteste namentlich bekannte Tortenrezept der Welt.",
        "Oberösterreich ist das wirtschaftlich stärkste Industriebundesland Österreichs."
      ],
      hu: [
        "Linz a tartományi főváros és a digitális művészetek jelentős központja.",
        "A 76 tavat számláló Salzkammergut nagy része Felső-Ausztriában található.",
        "Az Attersee a legnagyobb olyan tó, amely teljes egészében Ausztriában fekszik.",
        "A Kalkalpen Nemzeti Park az ország legnagyobb egybefüggő erdőterületét védi.",
        "Steyr óvárosa az egyik legjobb állapotban fennmaradt a német nyelvterületen.",
        "A Hoher Dachstein 2995 méterével a tartomány legmagasabb hegycsúcsa.",
        "A linzi Ars Electronica Center a jövő világszerte egyedülálló múzeuma.",
        "Hallstatt az UNESCO Világörökség része és sóbányászatáról világhírű.",
        "A Linzer tortát a világ legrégebbi, név szerint ismert tortareceptjének tartják.",
        "Felső-Ausztria Ausztria gazdaságilag legerősebb ipari tartománya."
      ],
      ro: [
        "Linz este capitala statului și un centru important pentru arta digitală.",
        "Regiunea Salzkammergut, cu cele 76 de lacuri ale sale, se află în mare parte aici.",
        "Attersee este cel mai mare lac situat în întregime pe teritoriul Austriei.",
        "Parcul Național Kalkalpen protejează cea mai mare zonă forestieră contiguă din țară.",
        "Steyr este considerat unul dintre cele mai bine conservate orașe vechi din spațiul germanic.",
        "Hoher Dachstein este cel mai înalt vârf din stat, având 2.995 de metri.",
        "Ars Electronica Center din Linz este un muzeu al viitorului unic în lume.",
        "Hallstatt face parte din patrimoniul UNESCO și este faimos pentru extracția sării.",
        "Torta Linzer este considerată cea mai veche rețetă de tort cunoscută după nume.",
        "Austria Superioară este cel mai puternic stat industrial din punct de vedere economic."
      ],
      en: [
        "Linz is the state capital and a significant center for digital art.",
        "A large part of the Salzkammergut region with its 76 lakes is in Upper Austria.",
        "Lake Attersee is the largest lake located entirely within Austria.",
        "The Kalkalpen National Park protects the country's largest contiguous forest area.",
        "Steyr is considered one of the best-preserved old towns in the German-speaking world.",
        "The Hoher Dachstein is the state's highest peak at 2,995 meters.",
        "The Ars Electronica Center in Linz is a globally unique museum of the future.",
        "Hallstatt is a UNESCO World Heritage site and world-famous for its salt mining.",
        "The Linzer Torte is considered the oldest cake recipe in the world known by name.",
        "Upper Austria is the economically strongest industrial federal state in Austria."
      ]
    }
  },
  {
    id: "AT-5", type: "region", parent: "AT", coords: [13.055, 47.8095],
    name: { de: "Salzburg", hu: "Salzburg", ro: "Salzburg", en: "Salzburg" },
    image: "/geo-images/austria/salzburg.webp",
    description: {
      de: "Das Land Salzburg ist weltberühmt für die Barockstadt Salzburg, die Mozart-Festspiele und die spektakuläre Bergwelt der Hohen Tauern.",
      hu: "Salzburg tartomány világhírű Salzburg barokk városáról, a Mozart-ünnepi játékokról és a Magas-Tauern látványos hegyvidékéről.",
      ro: "Statul Salzburg este faimos în întreaga lume pentru orașul baroc Salzburg, Festivalul Mozart și lumea montană spectaculoasă a munților Hohe Tauern.",
      en: "Salzburg state is world-famous for the Baroque city of Salzburg, the Mozart Festival, and the spectacular mountain world of the Hohe Tauern."
    },
    descriptionAdvanced: {
      de: "Das Bundesland Salzburg ist weltweit ein Synonym für musikalische Brillanz, atemberaubende Alpenpanoramen und barocke Pracht. Die gleichnamige Hauptstadt, Geburtsort von Wolfgang Amadeus Mozart, fasziniert mit ihrer UNESCO-geschützten Altstadt, mächtigen Festungen und den renommierten Salzburger Festspielen. Das Umland bietet eine dramatische Naturkulisse: Von den tiefen Gletschertälern des Nationalparks Hohe Tauern bis zu glitzernden Seen im Salzburger Seenland. Krimml beeindruckt mit den höchsten Wasserfällen Europas, während der Großglockner die Grenze nach Süden bewacht. Im Winter verwandeln sich Regionen wie Flachau, Saalbach und Zell am See in weltbekannte Ski-Mekkas, die Schneesicherheit und perfekten Pistenspaß garantieren. Die Geschichte des Landes ist untrennbar mit dem Salzabbau verbunden, der den Fürsterzbischöfen einst unermesslichen Reichtum bescherte und den Bau der prächtigen Residenzen und Kirchen ermöglichte. Heute ist Salzburg ein modernes Zentrum für Tourismus, Sport und Kultur, das Besucher aus aller Welt anzieht. Die kulinarische Vielfalt reicht von herzhaften Almschmankerln bis hin zur weltberühmten Mozartkugel. Naturliebhaber können die Eisriesenwelt in Werfen, die größte Eishöhle der Erde, erkunden oder auf den zahlreichen Wanderwegen die unberührte Bergwelt genießen. Die Salzburger Gastfreundschaft und die hohe Lebensqualität machen das Bundesland zu einem der begehrtesten Reiseziele in Europa. Ob man auf den Spuren von 'The Sound of Music' wandelt, die Stille der Bergseen genießt oder die kulturelle Tiefe der Festspiele erlebt – Salzburg bietet eine einzigartige Mischung aus Tradition und Weltoffenheit, die jeden Aufenthalt unvergesslich macht.",
      hu: "Salzburg tartomány világszerte a zenei zsenialitás, a lélegzetelállító alpesi panorámák és a barokk pompa szinonimája. Az azonos nevű főváros, Wolfgang Amadeus Mozart szülőhelye, UNESCO által védett óvárosával, hatalmas erődítményeivel és a neves Salzburgi Ünnepi Játékokkal nyűgözi le a látogatókat. A környék drámai természeti kulisszát kínál: a Magas-Tauern Nemzeti Park mély gleccservölgyeitől a salzburgi tóvidék csillogó tavaiig. Krimml Európa legmagasabb vízeséseivel nyűgöz le, míg a Großglockner a déli határt őrzi. Télen az olyan régiók, mint Flachau, Saalbach és Zell am See, világhírű síparadicsomokká válnak, amelyek hóbiztosak és tökéletes szórakozást garantálnak a lejtőkön. A tartomány történelme elválaszthatatlanul összefonódott a sóbányászattal, amely egykor mérhetetlen gazdagságot hozott a hercegérsekeknek, és lehetővé tette a pompás rezidenciák és templomok felépítését. Ma Salzburg a turizmus, a sport és a kultúra modern központja, amely a világ minden tájáról vonzza a látogatókat. A kulináris kínálat a kiadós alpesi finomságoktól a világhírű Mozart-golyóig terjed. A természet kedvelői felfedezhetik a werfeni Eisriesenweltet, a Föld legnagyobb jégbarlangját, vagy élvezhetik az érintetlen hegyi világot a számos túraútvonalon. A salzburgi vendégszeretet és a magas életminőség Európa egyik legkeresettebb úti céljává teszi a tartományv. Akár 'A muzsika hangja' nyomában jár valaki, akár a hegyi tavak csendjét élvezi, vagy az Ünnepi Játékok kulturális mélységét tapasztalja meg – Salzburg a hagyomány és a nyitottság egyedülálló keverékét kínálja, amely minden látogatást felejthetetlenné tesz.",
      ro: "Statul federal Salzburg este un sinonim global pentru strălucirea muzicală, panoramele alpine uluitoare și splendoarea barocă. Capitala cu același nume, locul de naștere al lui Wolfgang Amadeus Mozart, fascinează prin orașul său vechi protejat de UNESCO, fortărețele puternice și renumitul Festival de la Salzburg. Zona înconjurătoare oferă un decor natural dramatic: de la văile glaciare adânci ale Parcului Național Hohe Tauern până la lacurile strălucitoare din Districtul Lacurilor Salzburg. Krimml impresionează cu cele mai înalte cascade din Europa, în timp ce Grossglockner păzește granița spre sud. Iarna, regiuni precum Flachau, Saalbach și Zell am See se transformă în mecca-uri de schi de renume mondial care garantează zăpadă sigură și distracție perfectă pe pârtii. Istoria statului este inseparabil legată de extracția sării, care a adus odinioară bogății imense prinților-arhiepiscopi și a permis construirea palatelor și bisericilor magnifice. Astăzi, Salzburg este un centru modern pentru turism, sport și cultură, care atrage vizitatori din întreaga lume. Diversitatea culinară variază de la delicatese alpine consistente până la faimoasele bomboane Mozartkugel. Iubitorii de natură pot explora Eisriesenwelt din Werfen, cea mai mare peșteră de gheață din lume, sau se pot bucura de lumea montană neatinsă pe numeroasele trasee de drumeție. Ospitalitatea salzburgheză și calitatea înaltă a vieții fac din acest stat federal una dintre cele mai căutate destinații de călătorie din Europa. Fie că pășiți pe urmele filmului 'Sunetul muzicii', vă bucurați de liniștea lacurilor montane sau experimentați profunzimea culturală a festivalului – Salzburg oferă un amestec unic de tradiție și cosmopolitism care face fiecare ședere de neuitat.",
      en: "The federal state of Salzburg is synonymous worldwide with musical brilliance, breathtaking Alpine panoramas, and Baroque splendor. The capital of the same name, birthplace of Wolfgang Amadeus Mozart, fascinates with its UNESCO-protected old town, mighty fortresses, and the renowned Salzburg Festival. The surrounding area offers a dramatic natural backdrop: from the deep glacier valleys of the Hohe Tauern National Park to the glittering lakes in the Salzburg Lake District. Krimml impresses with the highest waterfalls in Europe, while the Grossglockner guards the border to the south. In winter, regions like Flachau, Saalbach, and Zell am See transform into world-famous ski meccas that guarantee reliable snow and perfect slope fun. The history of the province is inextricably linked to salt mining, which once brought immense wealth to the Prince-Archbishops and enabled the construction of magnificent residences and churches. Today, Salzburg is a modern center for tourism, sports, and culture, attracting visitors from all over the world. The culinary diversity ranges from hearty Alpine specialties to the world-famous Mozartkugel. Nature lovers can explore the Eisriesenwelt in Werfen, the largest ice cave on Earth, or enjoy the pristine mountain world on numerous hiking trails. Salzburg's hospitality and high quality of life make the province one of the most sought-after travel destinations in Europe. Whether you are following the traces of 'The Sound of Music,' enjoying the silence of the mountain lakes, or experiencing the cultural depth of the Festival—Salzburg offers a unique blend of tradition and cosmopolitanism that makes every stay unforgettable."
    },
    facts: {
      de: [
        "Salzburg-Stadt ist die Geburtsstadt von Wolfgang Amadeus Mozart.",
        "Die historische Altstadt von Salzburg ist ein UNESCO-Weltkulturerbe.",
        "Die Krimmler Wasserfälle sind mit 380 Metern die höchsten in Österreich.",
        "Die Region diente als Kulisse für den Hollywood-Klassiker 'The Sound of Music'.",
        "Die Festung Hohensalzburg ist das weithin sichtbare Wahrzeichen der Hauptstadt.",
        "Der Nationalpark Hohe Tauern ist das größte Naturschutzgebiet der Alpen.",
        "Der historische Salzabbau (z. B. in Hallein) gab dem Bundesland seinen Namen.",
        "Zell am See-Kaprun ist ein international bedeutendes Zentrum für den Wintersport.",
        "Die Großglockner Hochalpenstraße beginnt auf Salzburger Seite in der Gemeinde Fusch.",
        "Die Eisriesenwelt in Werfen gilt als die größte Eishöhle der gesamten Erde."
      ],
      hu: [
        "Salzburg városa Wolfgang Amadeus Mozart szülőhelye.",
        "Salzburg történelmi óvárosa az UNESCO Világörökség része.",
        "A Krimmli-vízesés 380 méteres magasságával Ausztria legmagasabb vízesése.",
        "A régió szolgált a 'A muzsika hangja' című hollywoodi klasszikus forgatási helyszínéül.",
        "A Hohensalzburg vára a főváros messziről látható jelképe.",
        "A Magas-Tauern Nemzeti Park az Alpok legnagyobb természetvédelmi területe.",
        "A történelmi sóbányászat (pl. Halleinben) adta a tartomány nevét.",
        "Zell am See-Kaprun nemzetközileg jelentős téli sportközpont.",
        "A Großglockner Alpesi Út salzburgi oldalon Fusch községben kezdődik.",
        "A werfeni Eisriesenwelt a Föld legnagyobb jégbarlangjaként ismert."
      ],
      ro: [
        "Orașul Salzburg este locul de naștere al lui Wolfgang Amadeus Mozart.",
        "Centrul istoric al orașului Salzburg este inclus în patrimoniul mondial UNESCO.",
        "Cascadele Krimml sunt cele mai înalte din Austria, având o înălțime de 380 de metri.",
        "Regiunea a servit drept decor pentru filmul clasic de la Hollywood „Sunetul muzicii”.",
        "Fortăreața Hohensalzburg este simbolul vizibil de la distanță al capitalei.",
        "Parcul Național Hohe Tauern este cea mai mare rezervație naturală din Alpi.",
        "Exploatarea istorică a sării (de ex. în Hallein) a dat numele acestui stat federal.",
        "Zell am See-Kaprun este un centru de importanță internațională pentru sporturile de iarnă.",
        "Drumul Alpin Grossglockner începe pe partea Salzburgului în comuna Fusch.",
        "Eisriesenwelt din Werfen este considerată cea mai mare peșteră de gheață de pe întreg pământul."
      ],
      en: [
        "The city of Salzburg is the birthplace of Wolfgang Amadeus Mozart.",
        "The historic old town of Salzburg is a UNESCO World Heritage site.",
        "The Krimml Waterfalls are the highest in Austria at 380 meters.",
        "The region served as the backdrop for the Hollywood classic 'The Sound of Music'.",
        "The Hohensalzburg Fortress is the widely visible landmark of the capital.",
        "The Hohe Tauern National Park is the largest nature reserve in the Alps.",
        "Historical salt mining (e.g., in Hallein) gave the federal state its name.",
        "Zell am See-Kaprun is an internationally significant center for winter sports.",
        "The Grossglockner High Alpine Road begins on the Salzburg side in the village of Fusch.",
        "The Eisriesenwelt in Werfen is considered the largest ice cave on the entire Earth."
      ]
    }
  },
  {
    id: "AT-6", type: "region", parent: "AT", coords: [15.4395, 47.0707],
    name: { de: "Steiermark", hu: "Stájerország", ro: "Stiria", en: "Styria" },
    image: "/geo-images/austria/styria.webp",
    description: {
      de: "Die Steiermark, das 'Grüne Herz Österreichs', ist bekannt für ihre dichten Wälder, den Weinbau im Süden und das beeindruckende Dachsteinmassiv.",
      hu: "Stájerország, Ausztria 'zöld szíve', sűrű erdőiről, déli borvidékeiről és a lenyűgöző Dachstein-masszívumról ismert.",
      ro: "Stiria, 'inima verde a Austriei', este cunoscută pentru pădurile sale dese, viticultura din sud și impresionantul masiv Dachstein.",
      en: "Styria, the 'Green Heart of Austria', is known for its dense forests, viticulture in the south, and the impressive Dachstein massif."
    },
    descriptionAdvanced: { de: "Die Steiermark wird wegen ihrer ausgedehnten Wälder, die über die Hälfte der Landesfläche bedecken, oft als das 'Grüne Herz Österreichs' bezeichnet. Diese vielfältige Region erstreckt sich vom markanten alpinen Norden mit dem Dachsteinmassiv und dem Nationalpark Gesäuse bis in den sanft hügeligen, von Wein- und Obstgärten geprägten Süden. Das steirische Thermenland bietet Entspannung auf höchstem Niveau und speist sich aus heißen, heilenden Quellen. Graz, die Landeshauptstadt, vereint als UNESCO-City of Design historische Renaissance- und Barockarchitektur harmonisch mit modernem Design. Kulinarisch ist die Steiermark weltberühmt für ihr dunkles, nussiges Kürbiskernöl, exzellente Weißweine und traditionelle Buschenschänken. Die Region ist zudem ein Zentrum für Hochtechnologie und Innovation, insbesondere in der Automobilindustrie und im Bereich der Umwelttechnik. Besucher können die historische Riegersburg erkunden, die auf einem erloschenen Vulkan thront, oder die weltweit größte Klosterbibliothek im Stift Admont besichtigen. Im Süden begeistert die 'Steirische Toskana' mit ihren malerischen Hügeln und exzellenten kulinarischen Angeboten, während der Norden endlose Möglichkeiten zum Bergsteigen, Skifahren und Wildwasserpaddeln bietet. Das Lipizzanergestüt Piber, in dem die berühmten Pferde der Spanischen Hofreitschule in Wien gezüchtet werden, ist ein weiteres kulturelles Highlight des Bundeslandes. Die einzigartige Mischung aus alpiner Urwüchsigkeit und mediterranem Flair macht die Steiermark zu einem vielseitigen Ziel für Naturliebhaber, Kulturinteressierte und Genießer gleichermaßen. Ob man durch das wilde Gesäuse wandert, in den Thermen von Bad Blumau entspannt oder ein Glas Sauvignon Blanc in einem sonnigen Weinberg genießt – die Steiermark empfängt ihre Gäste mit authentischem Charme und herzlicher Gastfreundschaft.", hu: "Stájerországot kiterjedt erdői miatt, amelyek a tartomány területének több mint felét borítják, gyakran 'Ausztria zöld szívének' nevezik. Ez a változatos régió az északi markáns alpesi tájaktól – a Dachstein-hegységgel és a Gesäuse Nemzeti Parkkal – egészen a déli, szőlő- és gyümölcsöskertekkel tarkított szelíd dombvidékig terjed. A stájer termálvidék a legmagasabb szintű pihenést kínálja, és forró, gyógyító forrásokból táplálkozik. A tartomány fővárosa, Graz, mint az UNESCO Design Városa, harmonikusan ötvözi a történelmi reneszánsz és barokk építészetet a modern dizájnnal. Kulináris szempontból Stájerország világhírű a sötét, diós ízű tökmagolajáról, kiváló fehérborairól és a hagyományos borozókról (Buschenschank). A régió egyben a csúcstechnológiai ipar és az innováció központja is, különösen az autóipar és a környezetvédelmi technológiák területén. A látogatók felfedezhetik a történelmi Riegersburg várát, amely egy kialudt vulkán tetején trónol, vagy meglátogathatják a világ legnagyobb kolostori könyvtárát az admonti apátságban. Délen a 'stájer Toszkána' festői dombjaival és kiváló kulináris kínálatával nyűgözi le a látogatókat, míg az északi rész végtelen lehetőségeket kínál hegymászásra, síelésre és vadvízi evezésre. A piberi lipicai ménes, ahol a bécsi Spanyol Lovasiskola híres lovait tenyésztik, a tartomány másik kulturális fénypontja. Stájerország az alpesi vadság és a mediterrán hangulat egyedülálló keverékét kínálja, így sokoldalú úti cél a természetbarátok, a kultúra iránt érdeklődők és az ínyencek számára egyaránt. Akár a vad Gesäuse-n keresztül túrázik valaki, akár Bad Blumau termálvizeiben pihen, vagy egy pohár Sauvignon Blanc-t élvez egy napsütötte szőlőskertben, Stájerország autentikus bájjal és szívélyes vendégszeretettel várja vendégeit.", ro: "Stiria este adesea denumită 'Inima verde a Austriei' datorită pădurilor sale întinse, care acoperă peste jumătate din suprafața statului. Această regiune diversă se întinde de la nordul alpin proeminent, cu masivul Dachstein și Parcul Național Gesäuse, până la sudul cu dealuri blânde, caracterizat de podgorii și livezi. Regiunea termală din Stiria oferă relaxare la cel mai înalt nivel și este alimentată de izvoare fierbinți și vindecătoare. Graz, capitala statului, ca Oraș UNESCO al Designului, combină armonios arhitectura istorică renascentistă și barocă cu designul modern. Din punct de vedere culinar, Stiria este renumită în întreaga lume pentru uleiul său de semințe de dovleac închis la culoare, vinurile albe excelente și tavernele tradiționale (Buschenschank). Regiunea este, de asemenea, un centru pentru industria de înaltă tehnologie și inovație, în special în sectoarele auto și al tehnologiilor verzi. Vizitatorii pot explora castelul istoric Riegersburg, cocoțat pe un vulcan adormit, sau pot vizita cea mai mare bibliotecă monahală din lume la Abația Admont. În sud, 'Toscana Stiriei' încântă prin dealurile sale pitorești și ofertele culinare excelente, în timp ce nordul oferă oportunități nesfârșite pentru alpinism, schi și rafting pe ape repezi. Herghelia de lipițani Piber, unde sunt crescuți faimoșii cai ai Școlii Spaniole de Echitație din Viena, este un alt punct de atracție culturală al provinciei. Amestecul unic de rigoare alpină și fler mediteranean face din Stiria o destinație versatilă pentru iubitorii de natură, pasionații de cultură și gurmanzi deopotrivă. Fie că faceți drumeții prin sălbaticul Gesäuse, vă relaxați în apele termale din Bad Blumau sau savurați un pahar de Sauvignon Blanc într-o podgorie însorită, Stiria vă întâmpină cu farmecul său autentic și ospitalitatea caldă.", en: "Styria is often referred to as the 'Green Heart of Austria' due to its extensive forests, which cover over half of the state's area. This diverse region stretches from the striking Alpine north with the Dachstein massif and the Gesäuse National Park to the gently rolling south, characterized by vineyards and orchards. The Styrian thermal spa region offers relaxation at the highest level and is fed by hot, healing springs. Graz, the state capital, as a UNESCO City of Design, harmoniously combines historical Renaissance and Baroque architecture with modern design. Culinarily, Styria is world-famous for its dark, nutty pumpkin seed oil, excellent white wines, and traditional wine taverns (Buschenschänken). The region is also a center for high-tech industry and innovation, particularly in the automotive and green technology sectors. Visitors can explore the historic Riegersburg Castle, perched on a dormant volcano, or visit the world's largest monastic library in Admont Abbey. In the south, the 'Styrian Tuscany' delights with its picturesque hills and excellent culinary offerings, while the north provides endless opportunities for mountaineering, skiing, and white-water rafting. The Lipizzaner Stud Piber, where the famous horses of the Spanish Riding School in Vienna are bred, is another cultural highlight of the province. Styria's unique blend of Alpine ruggedness and Mediterranean flair makes it a versatile destination for nature lovers, culture enthusiasts, and gourmets alike. Whether you are hiking through the wild Gesäuse, relaxing in the thermal waters of Bad Blumau, or enjoying a glass of Sauvignon Blanc in a sunny vineyard, Styria welcomes you with its authentic charm and warm hospitality." },
    facts: {
      de: [
        "Graz ist die Landeshauptstadt und die zweitgrößte Stadt Österreichs.",
        "Über 60 % der Landesfläche sind bewaldet, was ihr den Namen 'Grünes Herz' gab.",
        "Der Dachstein ist mit 2.995 Metern der höchste Berg der Steiermark.",
        "Das 'Steirische Kürbiskernöl' ist ein weltweit geschütztes regionales Produkt.",
        "Die Südsteiermark wird aufgrund ihrer Hügellandschaft oft als 'Steirische Toskana' bezeichnet.",
        "Das Lipizzanergestüt Piber ist die Heimat der berühmten weißen Hengste.",
        "Die Riegersburg gilt als eine der besterhaltenen und stärksten Festungen Europas.",
        "Mariazell ist der bedeutendste Marienwallfahrtsort in Mitteleuropa.",
        "Der Nationalpark Gesäuse besticht durch steile Felswände und wilde Flüsse.",
        "Schladming ist ein weltbekannter Austragungsort für alpine Ski-Weltmeisterschaften."
      ],
      hu: [
        "Graz a tartományi főváros és Ausztria második legnagyobb városa.",
        "A terület több mint 60%-át erdő borítja, ezért hívják az ország 'zöld szívének'.",
        "A Dachstein 2995 méterével Stájerország legmagasabb hegycsúcsa.",
        "A 'stájer tökmagolaj' világszerte védett regionális termék.",
        "Dél-Stájerországot dombos tájai miatt gyakran 'stájer Toszkánának' nevezik.",
        "A piberi lipicai ménes a híres fehér lovak származási helye.",
        "A Riegersburg Európa egyik legjobb állapotban fennmaradt és legerősebb erődje.",
        "Mariazell Közép-Európa legjelentősebb Mária-kegyhelye.",
        "A Gesäuse Nemzeti Park meredek sziklafalaival és vadvizeivel nyűgöz le.",
        "Schladming az alpesi sí-világbajnokságok világhírű helyszíne."
      ],
      ro: [
        "Graz este capitala statului și al doilea oraș ca mărime din Austria.",
        "Peste 60% din suprafața statului este împădurită, de unde și numele de 'Inima Verde'.",
        "Dachstein este cel mai înalt munte din Stiria, având 2.995 de metri.",
        "Uleiul de semințe de dovleac din Stiria este un produs regional protejat la nivel mondial.",
        "Stiria de Sud este adesea numită 'Toscana Stiriei' datorită peisajului său deluros.",
        "Herghelia Piber este locul de origine al faimoșilor cai lipițani albi.",
        "Riegersburg este considerată una dintre cele mai bine conservate și puternice cetăți din Europa.",
        "Mariazell este cel mai important loc de pelerinaj marian din Europa Centrală.",
        "Parcul Național Gesäuse impresionează prin pereții stâncoși abrupți și râurile sălbatice.",
        "Schladming este o locație de renume mondial pentru campionatele de schi alpin."
      ],
      en: [
        "Graz is the state capital and the second-largest city in Austria.",
        "Over 60% of the state's area is forested, earning it the name 'Green Heart'.",
        "The Dachstein is the highest mountain in Styria at 2,995 meters.",
        "Styrian pumpkin seed oil is a globally protected regional product.",
        "Southern Styria is often called the 'Styrian Tuscany' due to its hilly landscape.",
        "The Piber Lipizzaner Stud is the home of the famous white stallions.",
        "Riegersburg is considered one of the best-preserved and strongest fortresses in Europe.",
        "Mariazell is the most significant Marian pilgrimage site in Central Europe.",
        "The Gesäuse National Park captivates with steep rock faces and wild rivers.",
        "Schladming is a world-famous venue for Alpine Ski World Championships."
      ]
    }
  },
  {
    id: "AT-7", type: "region", parent: "AT", coords: [11.3945, 47.2692],
    name: { de: "Tirol", hu: "Tirol", ro: "Tirol", en: "Tyrol" },
    image: "/geo-images/austria/tyrol.webp",
    description: {
      de: "Tirol ist das Herz der Alpen, weltbekannt für seine spektakulären Hochgebirgslandschaften, erstklassigen Skigebiete und die Landeshauptstadt Innsbruck.",
      hu: "Tirol az Alpok szíve, amely világszerte híres látványos magashegyi tájairól, első osztályú síközpontjairól és tartományi fővárosáról, Innsbruckról.",
      ro: "Tirol este inima Alpilor, renumit în întreaga lume pentru peisajele sale montane spectaculoase, stațiunile de schi de top și capitala Innsbruck.",
      en: "Tyrol is the heart of the Alps, world-renowned for its spectacular high mountain landscapes, top-tier ski resorts, and the state capital Innsbruck."
    },
    descriptionAdvanced: {
      de: "Tirol ist das Herz der österreichischen Alpen und wird geprägt von einer atemberaubenden, majestätischen Gebirgslandschaft mit über 500 Gipfeln, die die 3.000-Meter-Marke übersteigen. Es ist weltweit eines der beliebtesten Ziele für Wintersportler, Alpinisten und Naturfreunde. Die Region teilt sich in das größere Nordtirol und das durch Südtirol (Italien) abgetrennte Osttirol. Innsbruck, die zweifache Olympia-Hauptstadt, bietet eine einzigartige Kombination aus urbanem Flair, historischen Sehenswürdigkeiten wie dem Goldenen Dachl und unmittelbarer Nähe zu hochalpinen Pisten. Abseits der lebhaften Täler bewahren malerische Seitentäler wie das Zillertal, das Ötztal und das Pitztal alte Traditionen und authentische Tiroler Gastfreundschaft. Die Region beheimatet weltberühmte Skigebiete wie Kitzbühel, St. Anton am Arlberg und Ischgl, die mit modernster Infrastruktur und legendärem Après-Ski überzeugen. Im Sommer verwandelt sich Tirol in ein Wander- und Kletterparadies mit kristallklaren Bergseen und saftigen Almwiesen. Die Swarovski Kristallwelten in Wattens bieten ein einzigartiges kulturelles Erlebnis, das Kunst und Design in einer glitzernden unterirdischen Welt vereint. Das kulinarische Erbe Tirols ist reich an herzhaften Gerichten wie Tiroler Gröstl und Speckknödeln, die oft in urigen Almhütten mit Panoramablick genossen werden. Die tief verwurzelten Bräuche des Landes, von der traditionellen Volksmusik bis hin zu den farbenfrohen Almabtriebsfesten, sind ein lebendiger Teil des täglichen Lebens. Ob man den Gipfel des Großglockners bezwingt, die mittelalterlichen Gassen von Hall in Tirol erkundet oder einfach in einem erstklassigen Wellnesshotel entspannt – Tirol bietet ein unvergleichliches alpines Erlebnis, das lange in Erinnerung bleibt.",
      hu: "Tirol az osztrák Alpok szíve, amelyet lélegzetelállító, fenséges hegyvidéki táj jellemez, ahol több mint 500 hegycsúcs haladja meg a 3000 méteres magasságot. A téli sportok szerelmeseinek, az alpinistáknak és a természetbarátoknak világszerte az egyik legkedveltebb úti célja. A régió a nagyobb Észak-Tirolra és a Dél-Tirol (Olaszország) által elválasztott Kelet-Tirolra oszlik. Innsbruck, a kétszeres olimpiai főváros, az urbánus hangulat, az olyan történelmi látnivalók, mint az Aranytető (Goldenes Dachl), és a magashegyi sípályák közvetlen közelségének egyedülálló kombinációját kínálja. A nyüzsgő völgyektől távol az olyan festői mellékvölgyek, mint a Zillertal, az Ötztal és a Pitztal, megőrizték a régi hagyományokat és az autentikus tiroli vendéglátást. A régió olyan világhírű síközpontoknak ad otthont, mint Kitzbühel, St. Anton am Arlberg és Ischgl, amelyek a legmodernebb infrastruktúrával és legendás après-ski élettel várják a látogatókat. Nyáron Tirol túrázó- és hegymászóparadicsommá alakul, kristálytiszta hegyi tavakkal és buja alpesi legelőkkel. A wattensi Swarovski Kristályvilág egyedülálló kulturális élményt nyújt, ahol a művészet és a dizájn találkozik egy csillogó földalatti világban. Tirol kulináris öröksége gazdag olyan kiadós ételekben, mint a tiroli Gröstl és a szalonnás gombóc, amelyeket gyakran rusztikus hegyi hüttékben, panorámás kilátás mellett fogyasztanak el. A tartomány mélyen gyökerező szokásai, a hagyományos népzenétől a színes Almabtrieb (tehénlehajtás) fesztiválokig, a mindennapi élet szerves részét képezik. Akár a Großglockner csúcsát hódítja meg valaki, akár Hall in Tirol középkori utcáit fedezi fel, vagy egyszerűen csak pihen egy világszínvonalú wellness szállodában, Tirol páratlan alpesi élményt nyújt, amely örökre emlékezetes marad.",
      ro: "Tirolul este inima Alpilor austrieci și se caracterizează printr-un peisaj montan uluitor și maiestuos, cu peste 500 de vârfuri care depășesc pragul de 3.000 de metri. Este una dintre cele mai populare destinații din lume pentru pasionații de sporturi de iarnă, alpiniști și iubitorii de natură. Regiunea este împărțită în Tirolul de Nord (mai mare) și Tirolul de Est, care este separat de Tirolul de Sud (Italia). Innsbruck, de două ori capitală olimpică, oferă o combinație unică de fler urban, atracții istorice precum Acoperișul de Aur și proximitatea imediată a pârtiilor înalte alpine. Departe de văile pline de viață, văile laterale pitorești precum Zillertal, Ötztal și Pitztal păstrează tradițiile vechi și ospitalitatea autentică tiroleză. Regiunea găzduiește stațiuni de schi de renume mondial precum Kitzbühel, St. Anton am Arlberg și Ischgl, care oferă infrastructură de ultimă generație și legendarul après-ski. Vara, Tirolul se transformă într-un paradis pentru drumeții și alpinism, cu lacuri montane cristaline și pășuni alpine luxuriante. Lumea de Cristal Swarovski din Wattens oferă o experiență culturală unică, îmbinând arta și designul într-o lume subterană strălucitoare. Moștenirea culinară a Tirolului este bogată în mâncăruri consistente precum Tiroler Gröstl și Speckknödel, savurate adesea în cabane montane rustice cu vederi panoramice. Obiceiurile profund înrădăcinate ale statului, de la muzica populară tradițională la festivalurile colorate Almabtrieb, sunt o parte vitală a vieții de zi cu zi. Fie că cuceriți vârful Grossglockner, explorați străzile medievale din Hall in Tirol sau pur și simplu vă relaxați într-un hotel de wellness de clasă mondială, Tirolul oferă o experiență alpină de neegalat care rămâne cu tine pentru totdeauna.",
      en: "Tyrol is the heart of the Austrian Alps and is characterized by a breathtaking, majestic mountain landscape with over 500 peaks exceeding the 3,000-meter mark. It is one of the most popular destinations worldwide for winter sports enthusiasts, alpinists, and nature lovers. The region is divided into the larger North Tyrol and East Tyrol, which is separated by South Tyrol (Italy). Innsbruck, the two-time Olympic capital, offers a unique combination of urban flair, historical sights like the Golden Roof, and immediate proximity to high-alpine slopes. Away from the bustling valleys, picturesque side valleys such as the Zillertal, the Ötztal, and the Pitztal preserve old traditions and authentic Tyrolean hospitality. The region is home to world-famous ski resorts like Kitzbühel, St. Anton am Arlberg, and Ischgl, which offer state-of-the-art infrastructure and legendary après-ski. In summer, Tyrol transforms into a hiking and climbing paradise, with crystal-clear mountain lakes and lush Alpine pastures. The Swarovski Crystal Worlds in Wattens provide a unique cultural experience, blending art and design in a sparkling subterranean world. Tyrol's culinary heritage is rich with hearty dishes like Tiroler Gröstl and Speckknödel, often enjoyed in rustic mountain huts with panoramic views. The state's deep-rooted customs, from traditional folk music to the colorful Almabtrieb festivals, are a vital part of daily life. Whether you are conquering the summit of the Grossglockner, exploring the medieval streets of Hall in Tirol, or simply relaxing in a world-class wellness hotel, Tyrol offers an unparalleled Alpine experience that stays with you forever."
    },
    facts: {
      de: [
        "Innsbruck ist die Landeshauptstadt und Austragungsort zweier Olympischer Winterspiele.",
        "Mehr als 500 Berggipfel in Tirol sind über 3.000 Meter hoch.",
        "Die Region ist ein globales Zentrum für den Ski- und Snowboardsport.",
        "Kitzbühel ist berühmt für das Hahnenkammrennen auf der Streif.",
        "Die Swarovski Kristallwelten in Wattens sind eine der meistbesuchten Attraktionen.",
        "Tirol besteht geografisch aus Nordtirol und dem kleineren Osttirol.",
        "Die Zugspitze, Deutschlands höchster Berg, grenzt direkt an Tirol.",
        "Traditionen wie der Almabtrieb werden hier intensiv und stolz gepflegt.",
        "Das Ötztal wurde weltweit bekannt durch den Fund der Gletschermumie 'Ötzi'.",
        "Beliebte Gerichte sind Tiroler Gröstl, Speckknödel und Kaiserschmarrn."
      ],
      hu: [
        "Innsbruck a tartományi főváros és két téli olimpia házigazdája.",
        "Tirolban több mint 500 hegycsúcs magasabb 3000 méternél.",
        "A régió a sí- és snowboard sportok egyik globális központja.",
        "Kitzbühel híres a Streif pályán megrendezett Hahnenkamm-versenyről.",
        "A wattensi Swarovski Kristályvilág az egyik leglátogatottabb nevezetesség.",
        "Tirol földrajzilag Észak-Tirolból és a kisebb Kelet-Tirolból áll.",
        "A Zugspitze, Németország legmagasabb hegye, közvetlenül Tirollal határos.",
        "Az olyan hagyományokat, mint az Almabtrieb, itt intenzíven és büszkén ápolják.",
        "Az Ötztal a gleccsermúmia, 'Ötzi' megtalálása révén vált világszerte ismertté.",
        "Kedvelt ételek a tiroli Gröstl, a szalonnás gombóc és a császármorzsa."
      ],
      ro: [
        "Innsbruck este capitala statului și a găzduit două Jocuri Olimpice de Iarnă.",
        "Peste 500 de vârfuri muntoase din Tirol au o înălțime de peste 3.000 de metri.",
        "Regiunea este un centru global pentru sporturile de schi și snowboarding.",
        "Kitzbühel este renumit pentru cursa Hahnenkamm de pe pârtia Streif.",
        "Lumea de Cristal Swarovski din Wattens este una dintre cele mai vizitate atracții.",
        "Tirolul constă geografic din Tirolul de Nord și Tirolul de Est, mai mic.",
        "Zugspitze, cel mai înalt munte din Germania, se învecinează direct cu Tirolul.",
        "Tradiții precum Almabtrieb sunt menținute aici cu intensitate și mândrie.",
        "Valea Ötztal a devenit faimoasă în întreaga lume datorită descoperirii mumiei „Ötzi”.",
        "Mâncărurile populare includ Tiroler Gröstl, găluște cu șuncă și Kaiserschmarrn.",
        "Tirolul este o destinație de top pentru wellness și relaxare alpină."
      ],
      en: [
        "Innsbruck is the state capital and host of two Winter Olympic Games.",
        "More than 500 mountain peaks in Tyrol are over 3,000 meters high.",
        "The region is a global center for skiing and snowboarding sports.",
        "Kitzbühel is famous for the Hahnenkamm race on the Streif slope.",
        "The Swarovski Crystal Worlds in Wattens are one of the most visited attractions.",
        "Tyrol geographically consists of North Tyrol and the smaller East Tyrol.",
        "The Zugspitze, Germany's highest mountain, directly borders Tyrol.",
        "Traditions like the Almabtrieb are maintained here with intensity and pride.",
        "The Ötztal became world-famous due to the discovery of the glacier mummy 'Ötzi'.",
        "Popular dishes include Tiroler Gröstl, bacon dumplings, and Kaiserschmarrn."
      ]
    }
  },
  {
    id: "AT-8", type: "region", parent: "AT", coords: [9.7438, 47.5014],
    name: { de: "Vorarlberg", hu: "Vorarlberg", ro: "Vorarlberg", en: "Vorarlberg" },
    image: "/geo-images/austria/vorarlberg.webp",
    description: {
      de: "Vorarlberg ist das westlichste Bundesland Österreichs, bekannt für seine innovative moderne Architektur, den Bodensee und erstklassige Skigebiete wie den Arlberg.",
      hu: "Vorarlberg Ausztria legnyugatibb tartománya, amely innovatív modern építészetéről, a Bodeni-tóról és olyan első osztályú síközpontjairól ismert, mint az Arlberg.",
      ro: "Vorarlberg este cel mai vestic stat federal al Austriei, cunoscut pentru arhitectura sa modernă inovatoare, lacul Constanța și stațiunile de schi de top precum Arlberg.",
      en: "Vorarlberg is Austria's westernmost federal state, known for its innovative modern architecture, Lake Constance, and top-tier ski resorts like the Arlberg."
    },
    descriptionAdvanced: { de: "Vorarlberg, das westlichste und zweitkleinste Bundesland Österreichs, besticht durch eine landschaftliche Vielfalt auf kleinstem Raum – vom Bodensee bis zu den Gletschern der Silvretta. Dialekt und Kultur unterscheiden sich deutlich vom Rest Österreichs und weisen eine starke alemannische Verwandtschaft zur benachbarten Schweiz auf. Das Rheintal ist eine dicht besiedelte, hochinnovative Wirtschaftsregion, während der Bregenzerwald und das Montafon für unberührte Natur, moderne Holzarchitektur und exzellenten Wintersport stehen. Bregenz, die Landeshauptstadt am Bodensee, zieht mit den Bregenzer Festspielen und der spektakulären Seebühne jeden Sommer internationale Kulturliebhaber an. Zudem ist das 'Ländle' für seinen hervorragenden Bergkäse und eine ausgeprägte Innovationsfreude bekannt. Die Region gilt als Pionier für nachhaltiges Bauen und verbindet traditionelles Handwerk mit zeitgenössischem Design. Besucher können eine breite Palette an Outdoor-Aktivitäten genießen, vom Segeln auf dem Bodensee bis hin zu hochalpinen Wanderungen im Rätikon-Massiv. Die kulinarische Szene ist geprägt von hochwertigen regionalen Produkten, wobei die 'KäseStrasse Bregenzerwald' ein Highlight für Feinschmecker darstellt. Vorarlbergs einzigartige Lage im Dreiländereck zu Deutschland, der Schweiz und Liechtenstein hat eine weltoffene Einstellung und einen starken Gemeinschaftssinn gefördert. Ob man eine Oper unter dem Sternenhimmel in Bregenz besucht, die landschaftliche Schönheit des Kleinwalsertals erkundet oder in der Weltklasse-Region Arlberg Ski fährt – Vorarlberg bietet ein hochwertiges Erlebnis, das natürliche Schönheit mit kultureller Raffinesse verbindet. Dank effizienter öffentlicher Verkehrsmittel und gut markierter Wege lässt sich dieses alpine Juwel hervorragend auf nachhaltige Weise erkunden.", hu: "Vorarlberg, Ausztria legnyugatibb és második legkisebb tartománya lenyűgöző táji sokszínűséggel büszkélkedhet kis területen – a Bóden-tótól a Silvretta gleccsereiig. A dialektus és a kultúra jelentősen különbözik Ausztria többi részétől, és erős alemann rokonságot mutat a szomszédos Svájccal. A Rajna-völgy egy sűrűn lakott, rendkívül innovatív gazdasági régió, míg a Bregenzerwald és a Montafon az érintetlen természetről, a modern faépítészetről és a kiváló téli sportokról híres. Bregenz, a Bóden-tó partján fekvő főváros, a Bregenzer Festspiele (Bregenzi Ünnepi Játékok) és a látványos tavi színpad révén minden nyáron vonzza a nemzetközi kultúrakedvelőket. Emellett a 'Ländle' (a tartomány beceneve) kiváló hegyi sajtjairól és kifejezett innovációs kedvéről is ismert. A régió úttörő a fenntartható építészet területén, ahol a hagyományos kézművesség ötvöződik a kortárs dizájnnal. A látogatók a szabadtéri tevékenységek széles skáláját élvezhetik, a Bóden-tavi vitorlázástól a Rätikon-masszívum magashegyi túráiig. A kulináris életet a kiváló minőségű regionális termékek jellemzik, a 'KäseStrasse Bregenzerwald' (Bregenzerwaldi Sajtút) pedig igazi csemege az ínyenceknek. Vorarlberg egyedülálló fekvése Németország, Svájc és Liechtenstein határán kozmopolita szemléletet és erős közösségi szellemet alakított ki. Akár egy csillagos égbolt alatti operán vesz részt valaki Bregenzben, akár a Kleinwalsertal festői szépségét fedezi fel, vagy az Arlberg világszínvonalú régiójában síel – Vorarlberg magas színvonalú élményt kínál, amely ötvözi a természeti szépséget a kulturális kifinomultsággal. Hatékony tömegközlekedése és jól jelzett ösvényei lehetővé teszik ezen alpesi gyöngyszem fenntartható felfedezését.", ro: "Vorarlberg, cel mai vestic și al doilea cel mai mic stat federal al Austriei, impresionează prin diversitatea sa peisagistică într-un spațiu foarte mic – de la Lacul Constanța până la ghețarii din Silvretta. Dialectul și cultura diferă semnificativ de restul Austriei, prezentând o puternică afinitate alemanică cu Elveția vecină. Valea Rinului este o regiune economică dens populată, extrem de inovatoare, în timp ce Bregenzerwald și Montafon sunt sinonime cu natura neatinsă, arhitectura modernă din lemn și sporturile de iarnă excelente. Bregenz, capitala statului situată pe Lacul Constanța, atrage iubitorii de cultură internaționali în fiecare vară cu Festivalul de la Bregenz și spectaculoasa scenă plutitoare. În plus, „Ländle” este cunoscut pentru brânza sa montană remarcabilă și spiritul său inovator. Regiunea este un pionier în arhitectura durabilă, îmbinând măiestria tradițională cu designul contemporan. Vizitatorii se pot bucura de o gamă largă de activități în aer liber, de la navigație pe Lacul Constanța până la drumeții montane înalte în masivul Rätikon. Scena culinară este caracterizată de produse regionale de înaltă calitate, „KäseStrasse Bregenzerwald” fiind un punct de atracție pentru gurmanzi. Poziția unică a Vorarlbergului la granița cu Germania, Elveția și Liechtenstein a favorizat o perspectivă cosmopolită și un puternic simț al comunității. Fie că asistați la o operă sub stele în Bregenz, explorați frumusețea pitorească a văii Kleinwalsertal sau schiați în regiunea de clasă mondială Arlberg, Vorarlberg oferă o experiență de înaltă calitate care combină frumusețea naturală cu sofisticarea culturală. Transportul public eficient și traseele bine marcate facilitează explorarea acestei bijuterii alpine într-un mod durabil.", en: "Vorarlberg, the westernmost and second smallest federal state of Austria, impresses with its landscape diversity in a very small area – from Lake Constance to the glaciers of the Silvretta. The dialect and culture differ significantly from the rest of Austria, showing a strong Alemannic affinity to neighboring Switzerland. The Rhine Valley is a densely populated, highly innovative economic region, while the Bregenzerwald and Montafon stand for untouched nature, modern wooden architecture, and excellent winter sports. Bregenz, the state capital on Lake Constance, attracts international culture lovers every summer with the Bregenz Festival and its spectacular floating stage. In addition, the 'Ländle' is known for its outstanding mountain cheese and a pronounced spirit of innovation. The region is a pioneer in sustainable architecture, blending traditional craftsmanship with contemporary design. Visitors can enjoy a wide range of outdoor activities, from sailing on Lake Constance to high-alpine hiking in the Rätikon massif. The culinary scene is characterized by high-quality regional products, with the 'KäseStrasse Bregenzerwald' being a highlight for foodies. Vorarlberg's unique position at the border of Germany, Switzerland, and Liechtenstein has fostered a cosmopolitan outlook and a strong sense of community. Whether you are attending an opera under the stars in Bregenz, exploring the scenic beauty of the Kleinwalsertal, or skiing in the world-class Arlberg region, Vorarlberg offers a high-quality experience that combines natural beauty with cultural sophistication. Its efficient public transport and well-marked trails make it easy to explore this Alpine gem in a sustainable way." },
    facts: {
      de: [
        "Bregenz ist die Landeshauptstadt und liegt malerisch am Ufer des Bodensees.",
        "Die Bevölkerung spricht alemannische Dialekte, die eng mit der Schweiz verwandt sind.",
        "Der Piz Buin ist mit 3.312 Metern der höchste Berg Vorarlbergs.",
        "Die Region ist weltweit bekannt für ihre moderne und nachhaltige Holzarchitektur.",
        "Die Bregenzer Festspiele verfügen über die größte Seebühne der Welt.",
        "Das Montafon und der Arlberg zählen zu den exklusivsten Skiregionen der Alpen.",
        "Vorarlberg ist eine der wohlhabendsten und am stärksten industrialisierten Regionen Europas.",
        "Das Bundesland teilt sich den Bodensee mit Deutschland und der Schweiz.",
        "Der Bregenzerwälder Bergkäse ist eine europaweit geschützte kulinarische Spezialität.",
        "Von den Einheimischen wird das Bundesland oft liebevoll als 'Ländle' bezeichnet."
      ],
      hu: [
        "Bregenz a tartományi főváros, amely festői környezetben, a Bóden-tó partján fekszik.",
        "A lakosság alemann dialektusokat beszél, amelyek szoros rokonságban állnak a svájci némettel.",
        "A Piz Buin 3312 méteres magasságával Vorarlberg legmagasabb hegye.",
        "A régió világszerte ismert modern és fenntartható faépítészetéről.",
        "A Bregenzi Ünnepi Játékok a világ legnagyobb tavi színpadával rendelkeznek.",
        "A Montafon és az Arlberg az Alpok legexkluzívabb sírégiói közé tartozik.",
        "Vorarlberg Európa egyik leggazdagabb és leginkább iparosodott régiója.",
        "A tartomány a Bóden-tavon Németországgal és Svájccal osztozik.",
        "A Bregenzerwald-i hegyi sajt egész Európában védett kulináris különlegesség.",
        "A helyiek a tartományt gyakran csak 'Ländle'-nek (kis tartomány) nevezik."
      ],
      ro: [
        "Bregenz este capitala statului, situată pitoresc pe malul Lacului Constanța.",
        "Populația vorbește dialecte alemanice, strâns înrudite cu cele din Elveția.",
        "Piz Buin este cel mai înalt munte din Vorarlberg, având 3.312 metri.",
        "Regiunea este cunoscută la nivel mondial pentru arhitectura sa modernă și durabilă din lemn.",
        "Festivalul de la Bregenz deține cea mai mare scenă lacustră din lume.",
        "Montafon și Arlberg se numără printre cele mai exclusive regiuni de schi din Alpi.",
        "Vorarlberg este una dintre cele mai prospere și industrializate regiuni din Europa.",
        "Statul federal împarte Lacul Constanța cu Germania și Elveția.",
        "Brânza de munte Bregenzerwald este o specialitate culinară protejată la nivel european.",
        "Localnicii se referă adesea cu afecțiune la acest stat federal ca fiind „Ländle”."
      ],
      en: [
        "Bregenz is the state capital, picturesquely located on the shores of Lake Constance.",
        "The population speaks Alemannic dialects that are closely related to those in Switzerland.",
        "The Piz Buin is the highest mountain in Vorarlberg at 3,312 meters.",
        "The region is world-renowned for its modern and sustainable wooden architecture.",
        "The Bregenz Festival features the largest floating stage in the world.",
        "The Montafon and the Arlberg are among the most exclusive ski regions in the Alps.",
        "Vorarlberg is one of the wealthiest and most industrialized regions in Europe.",
        "The federal state shares Lake Constance with Germany and Switzerland.",
        "The Bregenzerwald mountain cheese is a culinary specialty protected throughout Europe.",
        "Locals often affectionately refer to the federal state as the 'Ländle'."
      ]
    }
  },
  {
    id: "AT-9", type: "region", parent: "AT", coords: [16.3738, 48.2082],
    name: { de: "Wien", hu: "Bécs", ro: "Viena", en: "Vienna" },
    image: "/geo-images/austria/vienna.webp",
    description: {
      de: "Wien, die Bundeshauptstadt Österreichs, ist eine Weltmetropole der Musik und Kultur, bekannt für ihre imperiale Architektur und die berühmte Kaffeehauskultur.",
      hu: "Bécs, Ausztria szövetségi fővárosa, a zene és a kultúra világmetropolisa, amely császári építészetéről és híres kávéházi kultúrájáról ismert.",
      ro: "Viena, capitala federală a Austriei, este o metropolă mondială a muzicii și culturii, cunoscută pentru arhitectura sa imperială și faimoasa cultură a cafenelelor.",
      en: "Vienna, the federal capital of Austria, is a world metropolis of music and culture, known for its imperial architecture and famous coffee house culture."
    },
    descriptionAdvanced: {
      de: "Wien, die Bundeshauptstadt Österreichs, ist eine Stadt von unvergleichlicher historischer Tiefe, kultureller Eleganz und moderner Lebensqualität. Als ehemaliges Zentrum des mächtigen Habsburgerreiches atmet jede Straße und jeder Platz die imperiale Geschichte, die Europa über Jahrhunderte prägte. Die Stadt ist weltweit als Welthauptstadt der klassischen Musik bekannt, ein Erbe, das durch Genies wie Mozart, Beethoven, Haydn und Strauß begründet wurde und heute in der Wiener Staatsoper sowie im Musikverein weiterlebt. Das architektonische Stadtbild wird von prachtvollen Barockbauten wie dem Schloss Schönbrunn, der kaiserlichen Sommerresidenz, und der Hofburg, dem winterlichen Machtzentrum, dominiert. Der Stephansdom, das gotische Wahrzeichen im Herzen der Stadt, thront über den verwinkelten Gassen der Altstadt, die zum UNESCO-Weltkulturerbe gehört. Doch Wien ist weit mehr als ein Freilichtmuseum. Es ist eine pulsierende Metropole, die regelmäßig Spitzenplätze in internationalen Rankings zur Lebensqualität belegt. Die legendäre Wiener Kaffeehauskultur, die zum immateriellen Kulturerbe der UNESCO zählt, bietet einen Raum der Entschleunigung und des intellektuellen Austauschs, während die traditionellen Heurigen in den Weinbaugebieten am Stadtrand für gesellige Gemütlichkeit stehen. Die Stadt beherbergt zudem bedeutende internationale Organisationen wie die Vereinten Nationen und die OPEC, was ihren Status als weltoffene Drehscheibe unterstreicht. Kunstliebhaber finden in den zahlreichen Museen, vom Kunsthistorischen Museum bis zum modernen MuseumsQuartier, Schätze von Weltrang, darunter Gustav Klimts berühmtes Gemälde 'Der Kuss' im Belvedere. Die grüne Lunge der Stadt, der Prater mit seinem historischen Riesenrad, und die weitläufigen Donauinseln bieten Raum für Erholung und Sport mitten im urbanen Raum. Kulinarisch ist Wien für Klassiker wie das Wiener Schnitzel, den Tafelspitz und die Sachertorte berühmt, wobei die Gastronomie heute auch innovative internationale Einflüsse integriert. Die perfekte Infrastruktur, die Sicherheit und die Sauberkeit machen Wien zu einem idealen Ziel für Reisende aus aller Welt. Ob man auf den Spuren von Kaiserin Sisi wandelt, eine Fahrt im Fiaker genießt oder die avantgardistische Kunstszene erkundet – Wien verzaubert durch seine einzigartige Mischung aus nostalgischem Charme und zukunftsorientierter Dynamik. Es ist eine Stadt, die ihre Traditionen stolz bewahrt, während sie gleichzeitig mutig neue Wege in Architektur, Technologie und sozialem Miteinander beschreitet. Ein Besuch in Wien ist eine Reise durch die Zeit, die den Geist bereichert und die Sinne verwöhnt.",
      hu: "Bécs, Ausztria szövetségi fővárosa, a páratlan történelmi mélység, a kulturális elegancia és a modern életminőség városa. A hatalmas Habsburg Birodalom egykori központjaként minden utca és minden tér a császári történelmet árasztja, amely évszázadokon át meghatározta Európa sorsát. A város világszerte a klasszikus zene fővárosaként ismert, olyan zsenik öröksége révén, mint Mozart, Beethoven, Haydn és Strauss, amely ma is tovább él a Bécsi Állami Operaházban és a Musikverein falai között. A város építészeti arculatát olyan pompás barokk épületek uralják, mint a Schönbrunni kastély, a császári nyári rezidencia, és a Hofburg, a téli hatalmi központ. A Szent István-dóm, a város szívében található gótikus jelkép, az óváros kanyargós utcái fölé magasodik, amely az UNESCO Világörökség része. Bécs azonban sokkal több, mint egy szabadtéri múzeum. Ez egy vibráló metropolisz, amely rendszeresen az első helyen végez a nemzetközi életminőségi rangsorokban. A legendás bécsi kávéházi kultúra, amely az UNESCO szellemi kulturális örökségének része, a lassítás és az intellektuális eszmecsere terét kínálja, míg a város szélén található hagyományos Heurigerek (borozók) a barátságos vendégszeretetet képviselik. A város emellett olyan jelentős nemzetközi szervezeteknek ad otthont, mint az ENSZ és az OPEC, ami hangsúlyozza kozmopolita szerepét. A művészetkedvelők a számos múzeumban, a Szépművészeti Múzeumtól a modern MuseumsQuartierig, világraszóló kincseket találnak, köztük Gustav Klimt híres 'A csók' című festményét a Belvedere palotában. A város zöld tüdeje, a Práter a történelmi óriáskerékkel, valamint a kiterjedt Duna-sziget kikapcsolódást és sportolási lehetőséget kínál az urbánus tér közepén. Kulináris szempontból Bécs olyan klasszikusokról híres, mint a bécsi szelet, a táfelspicc és a Sacher-torta, miközben a gasztronómia ma már innovatív nemzetközi hatásokat is befogad. A tökéletes infrastruktúra, a biztonság és a tisztaság Bécset ideális célponttá teszi a világ minden tájáról érkező utazók számára. Akár Sisi császárné nyomában jár az ember, akár egy fiákerutazást élvez, vagy az avantgárd művészeti életet fedezi fel – Bécs elvarázsol a nosztalgikus báj és a jövőorientált dinamizmus egyedülálló keverékével. Ez egy olyan város, amely büszkén őrzi hagyományait, miközben bátran jár új utakat az építészetben, a technológiában és a társadalmi együttélésben. Egy bécsi látogatás utazás az időben, amely gazdagítja a szellemet és kényezteti az érzékeket.",
      ro: "Viena, capitala federală a Austriei, este un oraș cu o profunzime istorică inegalabilă, eleganță culturală și o calitate modernă a vieții. Ca fost centru al puternicului Imperiu Habsburgic, fiecare stradă și fiecare piață emană istoria imperială care a modelat Europa timp de secole. Orașul este cunoscut în întreaga lume ca fiind capitala mondială a muzicii clasice, o moștenire stabilită de genii precum Mozart, Beethoven, Haydn și Strauss, care continuă să trăiască astăzi la Opera de Stat din Viena și la Musikverein. Peisajul arhitectural este dominat de clădiri baroce magnifice, cum ar fi Palatul Schönbrunn, reședința imperială de vară, și Hofburg, centrul de putere pe timp de iarnă. Catedrala Sfântul Ștefan, simbolul gotic din inima orașului, veghează asupra străzilor întortocheate ale centrului vechi, inclus în patrimoniul mondial UNESCO. Totuși, Viena este mult mai mult decât un muzeu în aer liber. Este o metropolă vibrantă care ocupă în mod regulat primele locuri în clasamentele internaționale privind calitatea vieții. Legendara cultură a cafenelelor vieneze, inclusă în patrimoniul cultural imaterial al UNESCO, oferă un spațiu de relaxare și schimb intelectual, în timp ce tavernele tradiționale Heurigen din zonele viticole de la marginea orașului reprezintă ospitalitatea convivială. Orașul găzduiește, de asemenea, organizații internaționale importante, precum Națiunile Unite și OPEC, subliniind statutul său de hub cosmopolit. Iubitorii de artă găsesc în numeroasele muzee, de la Muzeul de Istorie a Artei până la modernul MuseumsQuartier, comori de talie mondială, inclusiv faimosul tablou „Sărutul” de Gustav Klimt la Belvedere. Plămânul verde al orașului, Praterul cu roata sa istorică, și insulele extinse de pe Dunăre oferă spațiu pentru recreere și sport chiar în mijlocul spațiului urban. Din punct de vedere culinar, Viena este faimoasă pentru clasice precum șnițelul vienez, Tafelspitz și tortul Sacher, gastronomia de astăzi integrând și influențe internaționale inovatoare. Infrastructura perfectă, siguranța și curățenia fac din Viena o destinație ideală pentru călătorii din întreaga lume. Fie că pășiți pe urmele împărătesei Sisi, vă bucurați de o plimbare cu trăsura (Fiaker) sau explorați scena artistică avangardistă – Viena încântă prin amestecul său unic de farmec nostalgic și dinamism orientat spre viitor. Este un oraș care își păstrează cu mândrie tradițiile, în timp ce urmează cu îndrăzneală căi noi în arhitectură, tehnologie și coexistență socială. O vizită la Viena este o călătorie în timp care îmbogățește spiritul și răsfață simțurile.",
      en: "Vienna, the federal capital of Austria, is a city of unparalleled historical depth, cultural elegance, and modern quality of life. As the former center of the mighty Habsburg Empire, every street and every square breathes the imperial history that shaped Europe for centuries. The city is known worldwide as the world capital of classical music, a legacy established by geniuses such as Mozart, Beethoven, Haydn, and Strauss, which lives on today in the Vienna State Opera and the Musikverein. The architectural cityscape is dominated by magnificent Baroque buildings such as Schönbrunn Palace, the imperial summer residence, and the Hofburg, the winter center of power. St. Stephen's Cathedral, the Gothic landmark in the heart of the city, towers over the winding alleys of the old town, which is a UNESCO World Heritage site. However, Vienna is much more than an open-air museum. It is a vibrant metropolis that regularly takes top spots in international quality of life rankings. The legendary Viennese coffee house culture, part of UNESCO's intangible cultural heritage, offers a space for deceleration and intellectual exchange, while the traditional Heurigen in the wine-growing areas on the outskirts stand for convivial hospitality. The city also hosts significant international organizations such as the United Nations and OPEC, underlining its status as a cosmopolitan hub. Art lovers find world-class treasures in the numerous museums, from the Kunsthistorisches Museum to the modern MuseumsQuartier, including Gustav Klimt's famous painting 'The Kiss' at the Belvedere. The city's green lung, the Prater with its historic Giant Ferris Wheel, and the extensive Danube islands offer space for recreation and sports right in the urban area. Culinarily, Vienna is famous for classics such as Wiener Schnitzel, Tafelspitz, and Sachertorte, with today's gastronomy also integrating innovative international influences. The perfect infrastructure, safety, and cleanliness make Vienna an ideal destination for travelers from all over the world. Whether walking in the footsteps of Empress Sisi, enjoying a ride in a Fiaker (horse-drawn carriage), or exploring the avant-garde art scene—Vienna enchants with its unique blend of nostalgic charm and forward-looking dynamism. It is a city that proudly preserves its traditions while boldly pursuing new paths in architecture, technology, and social coexistence. A visit to Vienna is a journey through time that enriches the spirit and pampers the senses."
    },
    facts: {
      de: [
        "Wien ist sowohl die Bundeshauptstadt als auch ein eigenes Bundesland Österreichs.",
        "Die historische Altstadt und das Schloss Schönbrunn sind UNESCO-Weltkulturerbe.",
        "Wien gilt als die Welthauptstadt der Musik, geprägt von Mozart und Beethoven.",
        "Der Tiergarten Schönbrunn ist der älteste noch bestehende Zoo der Welt.",
        "Die Wiener Kaffeehauskultur gehört zum immateriellen Kulturerbe der UNESCO.",
        "Wien wird regelmäßig als Stadt mit der höchsten Lebensqualität weltweit ausgezeichnet.",
        "Das Wiener Riesenrad im Prater ist eines der bekanntesten Wahrzeichen der Stadt.",
        "Die Stadt ist einer der vier offiziellen Amtssitze der Vereinten Nationen.",
        "Wien ist die einzige Millionenstadt weltweit mit nennenswertem Weinbau im Stadtgebiet.",
        "Die Spanische Hofreitschule pflegt die klassische Reitkunst auf höchstem Niveau."
      ],
      hu: [
        "Bécs egyszerre szövetségi főváros és önálló tartomány Ausztriában.",
        "A történelmi óváros és a Schönbrunni kastély az UNESCO Világörökség része.",
        "Bécs a zene világfővárosa, Mozart és Beethoven munkássága határozta meg.",
        "A Schönbrunni Állatkert a világ legrégebbi, ma is működő állatkertje.",
        "A bécsi kávéházi kultúra az UNESCO szellemi kulturális örökségének része.",
        "Bécset rendszeresen a világ legélhetőbb városának választják meg.",
        "A Práterben található óriáskerék a város egyik legismertebb jelképe.",
        "A város az ENSZ négy hivatalos székhelyének egyike a világon.",
        "Bécs az egyetlen világváros, ahol jelentős szőlőtermesztés folyik a városhatáron belül.",
        "A Spanyol Lovasiskola a klasszikus lovaglóművészetet ápolja a legmagasabb szinten."
      ],
      ro: [
        "Viena este atât capitala federală, cât și un stat federal propriu al Austriei.",
        "Centrul istoric și Palatul Schönbrunn sunt situri ale patrimoniului mondial UNESCO.",
        "Viena este considerată capitala mondială a muzicii, marcată de Mozart și Beethoven.",
        "Grădina Zoologică Schönbrunn este cea mai veche grădină zoologică din lume.",
        "Cultura cafenelelor vieneze aparține patrimoniului cultural imaterial al UNESCO.",
        "Viena este desemnată regulat orașul cu cea mai înaltă calitate a vieții din lume.",
        "Roata Mare din Prater este unul dintre cele mai cunoscute repere ale orașului.",
        "Orașul este unul dintre cele patru sedii oficiale ale Organizației Națiunilor Unite.",
        "Viena este singura metropolă din lume cu viticultură semnificativă în intravilan.",
        "Școala Spaniolă de Călărie menține arta ecvestră clasică la cel mai înalt nivel."
      ],
      en: [
        "Vienna is both the federal capital and an independent federal state of Austria.",
        "The historic old town and Schönbrunn Palace are UNESCO World Heritage sites.",
        "Vienna is considered the world capital of music, shaped by Mozart and Beethoven.",
        "Schönbrunn Zoo is the oldest continuously operating zoo in the world.",
        "Viennese coffee house culture is part of UNESCO's intangible cultural heritage.",
        "Vienna is regularly ranked as the city with the highest quality of life worldwide.",
        "The Giant Ferris Wheel in the Prater is one of the city's most famous landmarks.",
        "The city is one of the four official headquarters of the United Nations.",
        "Vienna is the only major city worldwide with significant viticulture within city limits.",
        "The Spanish Riding School cultivates classical horsemanship at the highest level."
      ]
    }
  },
  {
    id: "at-tulln-an-der-donau",
    type: "city",
    parent: "AT",
    coords: [16.0589, 48.3284],
    name: { de: "Tulln an der Donau", hu: "Tulln a Duna partján", ro: "Tulln pe Dunăre", en: "Tulln an der Danube" },
    image: "/geo-images/austria/tulln-an-der-donau.webp",
    description: {
      de: "Tulln an der Donau ist eine lebendige Stadt in Niederösterreich mit starkem Bezug zum Fluss, zu Gärten und zur regionalen Landwirtschaft. Die Donaulage macht den Ort seit Jahrhunderten zu einem wichtigen Handels- und Verkehrspunkt. Heute verbindet Tulln eine gepflegte Altstadt mit modernen Messe-, Schul- und Freizeitangeboten. Für SEO rund um Donau-Radweg, Gartenstadt und Ausflüge ins Tullnerfeld ist der Name besonders stark.",
      hu: "Tulln a Duna partján egy élénk alsó-ausztriai város, amely erősen kötődik a folyóhoz, a kertekhez és a helyi mezőgazdasághoz. A Duna menti fekvés évszázadok óta fontos kereskedelmi és közlekedési ponttá teszi. Ma Tulln rendezett óvárost, modern vásári és iskolai kínálatot, valamint sok szabadidős lehetőséget ötvöz. A Duna-kerékpárút, a kertváros és a Tullnerfeld kirándulásai szempontjából kifejezetten erős keresési célpont.",
      ro: "Tulln pe Dunăre este un oraș viu din Austria Inferioară, legat puternic de fluviu, de grădini și de agricultura regională. Așezarea de pe Dunăre a făcut locul, de secole, un punct important de comerț și transport. Astăzi, Tulln combină un centru vechi îngrijit cu oferte moderne de târguri, școli și timp liber. Pentru căutări SEO despre pista de biciclete de pe Dunăre, orașul-grădină și excursiile în Tullnerfeld, numele are o putere mare.",
      en: "Tulln an der Danube is a lively town in Lower Austria with a strong connection to the river, gardens, and regional agriculture. Its Danube location has made it an important trade and transport point for centuries. Today, Tulln combines a tidy old town with modern fair, school, and leisure offerings. It is a strong SEO target for Danube cycle routes, garden tourism, and day trips into the Tullnerfeld."
    },
    facts: {
      de: ["Liegt direkt an der Donau in Niederösterreich.", "Gilt als Garten- und Messestadt mit starkem Freizeitprofil.", "Der Donauradweg führt durch das Stadtgebiet.", "Tulln ist ein wichtiges Zentrum des Tullnerfelds.", "Der Ort verbindet Landwirtschaft, Handel und Stadttourismus."],
      hu: ["Közvetlenül a Dunánál fekszik Alsó-Ausztriában.", "Kert- és vásárvárosként ismert, erős szabadidős kínálattal.", "A Duna-kerékpárút áthalad a városon.", "Tulln a Tullnerfeld fontos központja.", "A település a mezőgazdaságot, a kereskedelmet és a városi turizmust köti össze."],
      ro: ["Se află direct pe Dunăre, în Austria Inferioară.", "Este cunoscut ca oraș al grădinilor și al târgurilor.", "Ruta ciclistă de pe Dunăre trece prin oraș.", "Tulln este un centru important al Tullnerfeldului.", "Localitatea combină agricultura, comerțul și turismul urban."],
      en: ["Located directly on the Danube in Lower Austria.", "Known as a garden and fair town with a strong leisure profile.", "The Danube cycle path runs through the city.", "Tulln is an important center of the Tullnerfeld region.", "The town links agriculture, trade, and city tourism."]
    },
  },
  {
    id: "at-neunkirchen-niederoesterreich",
    type: "city",
    parent: "AT",
    coords: [16.0808, 47.7279],
    name: { de: "Neunkirchen", hu: "Neunkirchen", ro: "Neunkirchen", en: "Neunkirchen" },
    image: "/geo-images/austria/neunkirchen-niederoesterreich.webp",
    description: {
      de: "Neunkirchen ist ein traditionsreicher Bezirkshauptort am Rand der Buckligen Welt und nahe der Semmeringregion. Die Stadt verbindet das ruhige Leben im Wiener Becken mit kurzen Wegen in die alpinen Vorberge. Historische Plätze, Einkaufsmöglichkeiten und eine solide lokale Wirtschaft prägen das Stadtbild. Als Suchbegriff funktioniert Neunkirchen stark für Niederösterreich, Semmering und Ausflüge in die Südregion.",
      hu: "Neunkirchen hagyományos járási székhely a Bucklige Welt peremén és a Semmering-régió közelében. A város a bécsi medence nyugodt életét az alpesi előhegyek közelségével ötvözi. A városképet történelmi terek, bevásárlási lehetőségek és stabil helyi gazdaság határozza meg. Keresési kifejezésként Neunkirchen jól működik Alsó-Ausztria, a Semmering és a déli kirándulások témájában.",
      ro: "Neunkirchen este un centru districtual cu tradiție, aflat la marginea regiunii Bucklige Welt și aproape de zona Semmering. Orașul combină viața liniștită din bazinul Vienei cu acces rapid la poalele alpine. Piețe istorice, opțiuni de cumpărături și o economie locală solidă definesc imaginea orașului. Ca termen SEO, Neunkirchen funcționează bine pentru Austria Inferioară, Semmering și excursiile spre sud.",
      en: "Neunkirchen is a traditional district town on the edge of the Bucklige Welt and close to the Semmering region. The town combines the calm life of the Vienna Basin with quick access to the Alpine foothills. Historic squares, shopping options, and a solid local economy shape the urban profile. As a search term, Neunkirchen works well for Lower Austria, Semmering, and southern day trips."
    },
    facts: {
      de: ["Bezirkshauptstadt im südlichen Niederösterreich.", "Nahe an der Semmeringbahn und an alpinen Ausflugszielen.", "Wichtiger Standort für Handel und Dienstleistungen.", "Das Umland öffnet den Zugang zur Buckligen Welt.", "Die Stadt ist gut per Bahn und Straße angebunden."],
      hu: ["Dél-alsó-ausztriai járási székhely.", "Közel van a Semmering-vasúthoz és az alpesi kirándulóhelyekhez.", "Fontos kereskedelmi és szolgáltató központ.", "A környék kaput nyit a Bucklige Welt felé.", "A város vasúton és közúton is jól elérhető."],
      ro: ["Este reședința districtului din sudul Austriei Inferioare.", "Se află aproape de calea ferată Semmering și de destinații alpine.", "Un centru important pentru comerț și servicii.", "Împrejurimile deschid accesul spre Bucklige Welt.", "Orașul este bine conectat prin tren și șosea."],
      en: ["District capital in southern Lower Austria.", "Close to the Semmering Railway and Alpine excursion areas.", "An important center for trade and services.", "The surrounding area opens access to the Bucklige Welt region.", "The town is well connected by rail and road."]
    },
  },
  {
    id: "at-hollabrunn",
    type: "city",
    parent: "AT",
    coords: [16.0743, 48.5636],
    name: { de: "Hollabrunn", hu: "Hollabrunn", ro: "Hollabrunn", en: "Hollabrunn" },
    image: "/geo-images/austria/hollabrunn.webp",
    description: {
      de: "Hollabrunn liegt im Weinviertel und steht für Weinbau, offene Landschaften und ein ruhiges Kleinstadtgefühl. Die Stadt ist ein wichtiger regionaler Mittelpunkt für Schulen, Märkte und medizinische Versorgung. Rund um Hollabrunn prägen Kellergassen und Weingärten das typische nordöstliche Niederösterreich-Bild. Für Reisen, Genuss und Weinregion-SEO ist Hollabrunn ein klarer Treffer.",
      hu: "Hollabrunn a Weinviertelben fekszik, és a borászatot, a nyílt tájat és a nyugodt kisvárosi hangulatot képviseli. A város fontos regionális központ az iskolák, a piacok és az egészségügyi ellátás számára. Hollabrunn körül pincesorok és szőlőskertek formálják Északkelet-Alsó-Ausztria jellegzetes arculatát. Utazási, gasztronómiai és borvidéki SEO-szempontból Hollabrunn nagyon erős név.",
      ro: "Hollabrunn se află în Weinviertel și înseamnă viticultură, peisaje deschise și atmosfera liniștită a unui oraș mic. Orașul este un centru regional important pentru școli, piețe și servicii medicale. În jurul lui Hollabrunn, aleile de crame și viile conturează imaginea tipică a nord-estului Austriei Inferioare. Pentru turism, gastronomie și SEO despre regiuni viticole, Hollabrunn este o alegere foarte bună.",
      en: "Hollabrunn sits in the Weinviertel and stands for wine growing, open landscapes, and a calm small-town feel. The town is an important regional hub for schools, markets, and medical care. Around Hollabrunn, cellar lanes and vineyards define the classic look of northeastern Lower Austria. For travel, food, and wine-region SEO, Hollabrunn is a strong match."
    },
    facts: {
      de: ["Liegt im Weinviertel in Niederösterreich.", "Bekannt für Weinbau und Kellergassen.", "Ist ein regionales Schul- und Versorgungszentrum.", "Die Landschaft ist von Ackerbau und Reben geprägt.", "Guter Ausgangspunkt für Radtouren durch das Weinviertel."],
      hu: ["A Weinviertelben, Alsó-Ausztriában található.", "A bortermelésről és a pincesorokról ismert.", "Regionális iskolai és ellátó központ.", "A tájat szántóföldek és szőlők határozzák meg.", "Jó kiindulópont a Weinviertel kerékpáros túráihoz."],
      ro: ["Se află în Weinviertel, în Austria Inferioară.", "Este cunoscut pentru vinificație și cramele de tip Kellergasse.", "Este un centru regional pentru școli și servicii.", "Peisajul este dominat de câmpuri și viță-de-vie.", "Punct bun de plecare pentru tururi cu bicicleta în Weinviertel."],
      en: ["Located in the Weinviertel of Lower Austria.", "Known for wine production and cellar lanes.", "A regional hub for schools and services.", "The landscape is shaped by fields and vineyards.", "A good starting point for cycling tours through the Weinviertel."]
    },
  },
  {
    id: "at-zwettl-niederoesterreich",
    type: "city",
    parent: "AT",
    coords: [15.1671, 48.6048],
    name: { de: "Zwettl", hu: "Zwettl", ro: "Zwettl", en: "Zwettl" },
    image: "/geo-images/austria/zwettl.webp",
    description: {
      de: "Zwettl ist das Herz des Waldviertels und verbindet Klostertradition, Granitlandschaft und regionale Genusskultur. Die Stadt ist für ihre ruhige Lage am Flusslauf der Kamp und für ihre historischen Fassaden bekannt. Besucher entdecken hier ein authentisches Niederösterreich abseits der großen Touristenströme. Als SEO-Ort für Waldviertel, Kloster und Bierkultur hat Zwettl eine starke, klare Identität.",
      hu: "Zwettl a Waldviertel központja, ahol a kolostori hagyomány, a gránittáj és a helyi gasztronómia találkozik. A város a Kamp folyó menti nyugodt fekvéséről és történelmi homlokzatairól ismert. A látogatók itt a nagy turistaforgalomtól távoli, hiteles Alsó-Ausztriát fedezhetik fel. Waldviertel, kolostor és sörkultúra SEO-szavakhoz Zwettl erős és jól felismerhető név.",
      ro: "Zwettl este inima regiunii Waldviertel și combină tradiția monastică, peisajul de granit și cultura gustului local. Orașul este cunoscut pentru poziția liniștită de-a lungul râului Kamp și pentru fațadele sale istorice. Vizitatorii descoperă aici o Austria Inferioară autentică, departe de marile fluxuri turistice. Ca termen SEO pentru Waldviertel, mănăstire și cultura berii, Zwettl are o identitate puternică.",
      en: "Zwettl is the heart of the Waldviertel and combines monastic tradition, granite landscapes, and local food culture. The town is known for its quiet setting along the Kamp River and for its historic facades. Visitors discover an authentic Lower Austria here, away from the big tourist crowds. For Waldviertel, monastery, and beer-culture SEO, Zwettl has a strong identity."
    },
    facts: {
      de: ["Gilt als Zentrum des Waldviertels.", "Lage am Fluss Kamp prägt das Stadtbild.", "Historische Bausubstanz trifft auf ruhige Kleinstadtstruktur.", "Die Region ist bekannt für Granit und Wälder.", "Zwettl steht stark für Genuss, Kloster und Naturausflüge."],
      hu: ["A Waldviertel központjának számít.", "A Kamp folyó fekvése meghatározza a városképet.", "A történelmi épületek nyugodt kisvárosi szerkezettel találkoznak.", "A régió gránitról és erdőkről ismert.", "Zwettl erősen kötődik a gasztronómiához, a kolostorokhoz és a természetjáráshoz."],
      ro: ["Este considerat centrul regiunii Waldviertel.", "Așezarea pe râul Kamp definește imaginea orașului.", "Clădirile istorice se îmbină cu structura liniștită de oraș mic.", "Regiunea este cunoscută pentru granit și păduri.", "Zwettl este asociat cu gastronomia, mănăstirile și excursiile în natură."],
      en: ["Considered the center of the Waldviertel.", "Its position on the Kamp River shapes the cityscape.", "Historic buildings meet a calm small-town structure.", "The region is known for granite and forests.", "Zwettl is strongly linked to food, monasteries, and nature trips."]
    },
  },
  {
    id: "at-bischofshofen",
    type: "city",
    parent: "AT",
    coords: [13.2163, 47.4177],
    name: { de: "Bischofshofen", hu: "Bischofshofen", ro: "Bischofshofen", en: "Bischofshofen" },
    image: "/geo-images/austria/bischofshofen.webp",
    description: {
      de: "Bischofshofen ist ein bedeutender Ort im Pongau und steht für alpinen Verkehr, Wintersport und Salzach-Tal-Atmosphäre. Die Stadt ist als Etappe der Vierschanzentournee international bekannt und zieht jedes Jahr Wintersportfans an. Rund um den Ort treffen Bahn, Bundesstraße und Bergwelt aufeinander, was Bischofshofen auch wirtschaftlich wichtig macht. Für Reise-SEO in Salzburg und für Skisprung-Themen ist der Ort besonders stark.",
      hu: "Bischofshofen a Pongau egyik fontos települése, amely az alpesi közlekedést, a téli sportokat és a Salzach-völgyi hangulatot képviseli. A város a Négysáncverseny egyik állomásaként nemzetközileg is ismert, és minden évben sok síugrásrajongót vonz. A település körül vasút, főút és hegyvidék találkozik, ami gazdaságilag is fontossá teszi. Salzburgi utazási SEO-ban és síugrás témában Bischofshofen különösen erős név.",
      ro: "Bischofshofen este o localitate importantă din Pongau și reprezintă transportul alpin, sporturile de iarnă și atmosfera văii Salzach. Orașul este cunoscut internațional ca etapă a Turneului Celor Patru Trambuline și atrage în fiecare an fani ai săriturilor cu schiurile. În jurul localității se întâlnesc calea ferată, drumul principal și lumea montană, ceea ce îi conferă și importanță economică. Pentru SEO de călătorie în Salzburg și pentru subiecte de sărituri cu schiurile, Bischofshofen este foarte puternic.",
      en: "Bischofshofen is an important town in the Pongau and stands for Alpine transport, winter sports, and the Salzach Valley atmosphere. The town is internationally known as a stop on the Four Hills Tournament and draws ski-jumping fans every year. Rail, road, and mountain scenery meet here, which also makes Bischofshofen economically important. For Salzburg travel SEO and ski-jumping topics, the town is especially strong."
    },
    facts: {
      de: ["Liegt im Pongau im Bundesland Salzburg.", "Ist international als Station der Vierschanzentournee bekannt.", "Der Bahnhof ist ein wichtiger Knoten im Salzachtal.", "Die Lage verbindet Tourismus, Sport und Verkehr.", "Das Umland führt direkt in die Hohen Tauern."],
      hu: ["A salzburgi Pongau régióban található.", "Nemzetközileg ismert a Négysáncverseny állomásaként.", "Az állomás fontos csomópont a Salzach-völgyben.", "A fekvése a turizmust, a sportot és a közlekedést köti össze.", "A környék közvetlenül a Hohe Tauern felé vezet."],
      ro: ["Se află în Pongau, în landul Salzburg.", "Este cunoscut internațional ca etapă a Turneului Celor Patru Trambuline.", "Gara este un nod important în valea Salzach.", "Așezarea leagă turismul, sportul și transportul.", "Împrejurimile duc direct spre Hohe Tauern."],
      en: ["Located in the Pongau region of Salzburg.", "Known internationally as a stop on the Four Hills Tournament.", "The station is an important hub in the Salzach Valley.", "Its location connects tourism, sport, and transport.", "The surrounding area leads directly into the Hohe Tauern."]
    },
  },
  {
    id: "at-gmunden",
    type: "city",
    parent: "AT",
    coords: [13.8019, 47.9192],
    name: { de: "Gmunden", hu: "Gmunden", ro: "Gmunden", en: "Gmunden" },
    image: "/geo-images/austria/gmunden.webp",
    description: {
      de: "Gmunden am Traunsee ist eine der elegantesten Städte im Salzkammergut und ein Paradebeispiel für österreichische Seen-SEO. Der Ort verbindet kaiserliche Sommerfrische, Keramiktradition und eine spektakuläre Seelage mit Blick auf den Traunstein. Schlösser, Uferpromenade und Bootsverkehr geben Gmunden eine sehr fotogene, touristisch starke Identität. Wer nach Traunsee, Salzkammergut oder Seeurlaub in Oberösterreich sucht, landet schnell bei Gmunden.",
      hu: "A Traunsee partján fekvő Gmunden a Salzkammergut egyik legelegánsabb városa, és az osztrák tóparti SEO mintapéldája. A település a császári nyaralóhangulatot, a kerámiatradíciót és a látványos tóparti fekvést ötvözi, a Traunsteinre nyíló kilátással. Kastélyok, sétány és hajóforgalom adják Gmunden nagyon fotogén és turisztikailag erős arculatát. Aki Traunsee, Salzkammergut vagy oberösterreichi tóparti pihenés után keres, gyorsan Gmundenhez jut.",
      ro: "Gmunden, pe malul lacului Traunsee, este unul dintre cele mai elegante orașe din Salzkammergut și un exemplu perfect de SEO austriac pentru lacuri. Localitatea combină atmosfera de vară imperială, tradiția ceramicii și poziția spectaculoasă pe malul apei, cu vedere spre Traunstein. Castelele, promenada și traficul de bărci îi dau lui Gmunden o identitate foarte fotogenică și puternic turistică. Cine caută Traunsee, Salzkammergut sau vacanță la lac în Austria Superioară ajunge rapid la Gmunden.",
      en: "Gmunden on Lake Traunsee is one of the most elegant towns in the Salzkammergut and a textbook case of Austrian lake SEO. The town combines imperial summer-resort flair, ceramics tradition, and a dramatic lakeside setting with views of the Traunstein. Castles, the promenade, and boat traffic give Gmunden a highly photogenic and tourist-friendly identity. Anyone searching for Traunsee, the Salzkammergut, or a lake holiday in Upper Austria quickly ends up at Gmunden."
    },
    facts: {
      de: ["Liegt direkt am Traunsee im Salzkammergut.", "Bekannt für die Gmundner Keramik.", "Schloss Orth ist ein Wahrzeichen am Seeufer.", "Der Traunstein prägt die Silhouette der Stadt.", "Gmunden ist ein klassisches Ziel für Seen- und Kulturtourismus."],
      hu: ["Közvetlenül a Traunsee partján fekszik, a Salzkammergutban.", "A Gmundner Keramikról ismert.", "A Schloss Orth a tópart egyik jelképe.", "A Traunstein meghatározza a város sziluettjét.", "Gmunden klasszikus célpont a tóparti és kulturális turizmushoz."],
      ro: ["Se află direct pe lacul Traunsee, în Salzkammergut.", "Este cunoscut pentru ceramica Gmundner.", "Castelul Orth este un simbol de pe malul lacului.", "Traunstein domină silueta orașului.", "Gmunden este o destinație clasică pentru turism de lac și cultură."],
      en: ["Located directly on Lake Traunsee in the Salzkammergut.", "Known for Gmunden ceramics.", "Schloss Orth is a landmark on the lakeshore.", "The Traunstein mountain shapes the town's skyline.", "Gmunden is a classic destination for lake and culture tourism."]
    },
  },
  {
    id: "at-amstetten",
    type: "city",
    parent: "AT",
    coords: [14.8723, 48.1227],
    name: { de: "Amstetten", hu: "Amstetten", ro: "Amstetten", en: "Amstetten" },
    image: "/geo-images/austria/amstetten.webp",
    description: {
      de: "Amstetten ist ein wichtiger Knotenpunkt im Mostviertel und steht für Mobilität, Wirtschaft und kurze Wege zwischen Donau und Alpenrand. Die Stadt ist als Verkehrs- und Dienstleistungsstandort bekannt und hat eine starke regionale Ausstrahlung. Im Umfeld liegen Obstgärten, Hügelland und zahlreiche Ziele für Tagesausflüge. Für Niederösterreich-SEO, Mostviertel und Bahnverbindungen ist Amstetten ein sehr nützlicher Ort.",
      hu: "Amstetten a Mostviertel fontos csomópontja, és a mobilitást, a gazdaságot valamint a Duna és az Alpok pereme közötti gyors kapcsolódást képviseli. A város közlekedési és szolgáltató központként ismert, erős regionális kisugárzással. A környéken gyümölcsösök, dombvidék és sok egynapos kirándulási célpont található. Alsó-Ausztria SEO, Mostviertel és vasúti kapcsolatok esetében Amstetten nagyon hasznos név.",
      ro: "Amstetten este un nod important în Mostviertel și reprezintă mobilitatea, economia și legăturile scurte între Dunăre și poalele Alpilor. Orașul este cunoscut ca centru de transport și servicii, având o influență regională puternică. În jur se află livezi, zone colinare și numeroase destinații pentru excursii de o zi. Pentru SEO despre Austria Inferioară, Mostviertel și conexiuni feroviare, Amstetten este un nume foarte util.",
      en: "Amstetten is an important hub in the Mostviertel and stands for mobility, business, and short links between the Danube and the Alpine foothills. The town is known as a transport and service center with strong regional influence. The surrounding area features orchards, rolling hills, and many day-trip destinations. For Lower Austria SEO, the Mostviertel, and rail connections, Amstetten is a very useful name."
    },
    facts: {
      de: ["Wichtiger Verkehrsknoten im Mostviertel.", "Liegt zwischen Donau und Alpenvorland.", "Region ist stark von Obstbau und Landwirtschaft geprägt.", "Amstetten hat eine hohe Bedeutung für Pendler und Handel.", "Guter Ausgangspunkt für Ausflüge in das hügelige Mostviertel."],
      hu: ["Fontos közlekedési csomópont a Mostviertelben.", "A Duna és az Alpok előtere között fekszik.", "A régiót erősen jellemzi a gyümölcstermesztés és a mezőgazdaság.", "Amstetten fontos a ingázók és a kereskedelem számára.", "Jó kiindulópont a dombos Mostviertelbe tett kirándulásokhoz."],
      ro: ["Un nod de transport important în Mostviertel.", "Se află între Dunăre și poalele Alpilor.", "Regiunea este puternic influențată de pomicultură și agricultură.", "Amstetten are o importanță mare pentru navetiști și comerț.", "Punct bun de plecare pentru excursii în Mostviertelul colinar."],
      en: ["A major transport hub in the Mostviertel.", "Located between the Danube and the Alpine foothills.", "The region is strongly shaped by fruit growing and agriculture.", "Amstetten matters greatly for commuters and trade.", "A good base for trips into the hilly Mostviertel."]
    },
  },
  {
    id: "at-spittal-an-der-drau",
    type: "city",
    parent: "AT",
    coords: [13.4929, 46.7908],
    name: { de: "Spittal an der Drau", hu: "Spittal an der Drau", ro: "Spittal an der Drau", en: "Spittal an der Drau" },
    image: "/geo-images/austria/spittal-an-der-drau.webp",
    description: {
      de: "Spittal an der Drau ist das urbane Zentrum des Oberkärntner Lurngaus und ein beliebter Ausgangspunkt für Seen und Berge. Die Stadt liegt an der Drau und verbindet Handel, Tourismus und Alltagsleben in einer kompakten Form. Mit der Nähe zum Millstätter See und zu den Nockbergen besitzt sie eine starke Freizeit- und Urlaubsposition. Für Kärnten-SEO, Drau und Bergseen ist Spittal an der Drau ein sehr passender Ort.",
      hu: "Spittal an der Drau Felső-Karintia városi központja és kedvelt kiindulópont a tavakhoz és a hegyekhez. A város a Drau folyó mentén fekszik, és a kereskedelmet, a turizmust és a mindennapi életet kompakt formában köti össze. A Millstätter See és a Nockberge közelsége erős szabadidős és üdülési pozíciót ad neki. Karintia SEO-ban, a Drau és a hegyi tavak témájában Spittal an der Drau nagyon jó választás.",
      ro: "Spittal an der Drau este centrul urban al nordului Carintiei și un punct de plecare popular pentru lacuri și munți. Orașul se află pe râul Drau și combină comerțul, turismul și viața de zi cu zi într-o formă compactă. Prin apropierea de Millstätter See și Nockberge, are o poziție puternică pentru timp liber și vacanțe. Pentru SEO despre Carintia, Drau și lacuri montane, Spittal an der Drau este foarte potrivit.",
      en: "Spittal an der Drau is the urban center of Upper Carinthia and a popular starting point for lakes and mountains. The town sits on the Drau River and combines trade, tourism, and daily life in a compact form. Its closeness to Lake Millstatt and the Nockberge gives it a strong leisure and holiday position. For Carinthia SEO, the Drau, and mountain lakes, Spittal an der Drau is a very good fit."
    },
    facts: {
      de: ["Liegt an der Drau in Oberkärnten.", "Wichtiger Ausgangspunkt Richtung Millstätter See.", "Das Stadtleben verbindet Handel und Tourismus.", "Die Nockberge sind schnell erreichbar.", "Spittal ist ein regionaler Knoten im Drautal."],
      hu: ["A karintiai Drau mentén fekszik.", "Fontos kiindulópont a Millstätter See felé.", "A városi élet a kereskedelmet és a turizmust ötvözi.", "A Nockberge gyorsan elérhető.", "Spittal regionális csomópont a Drau-völgyben."],
      ro: ["Se află pe râul Drau, în Carintia de Sus.", "Este un punct de plecare important spre Millstätter See.", "Viața urbană combină comerțul și turismul.", "Nockberge este ușor accesibil.", "Spittal este un nod regional în valea Drau."],
      en: ["Located on the Drau River in Upper Carinthia.", "An important starting point toward Lake Millstatt.", "Urban life combines trade and tourism.", "The Nockberge are quickly reachable.", "Spittal is a regional node in the Drau Valley."]
    },
  },
  {
    id: "at-telfs",
    type: "city",
    parent: "AT",
    coords: [11.0661, 47.3070],
    name: { de: "Telfs", hu: "Telfs", ro: "Telfs", en: "Telfs" },
    image: "/geo-images/austria/telfs.webp",
    description: {
      de: "Telfs liegt im Tiroler Inntal und ist einer der wichtigsten Orte zwischen Innsbruck und dem Oberland. Die Marktgemeinde verbindet Wirtschaft, Verkehr und Wohnqualität mit einem klar alpinen Umfeld. Durch die Nähe zu Seefeld, der Mieminger Kette und dem Inntal ist Telfs für Freizeit und Reisen sehr attraktiv. Als Suchbegriff ist Telfs stark für Tirol, Inntal und alpines Alltagsleben.",
      hu: "Telfs a tiroli Inn-völgyben fekszik, és Innsbruck és az Oberland között az egyik legfontosabb település. A mezőváros a gazdaságot, a közlekedést és a lakhatási minőséget ötvözi egyértelműen alpesi környezetben. Seefeld, a Miemingi-hegység és az Inn-völgy közelsége miatt Telfs a szabadidő és az utazás szempontjából is vonzó. Keresőkifejezésként Telfs erős Tirol, Inn-völgy és alpesi mindennapok témában.",
      ro: "Telfs se află în valea Inn din Tirol și este una dintre cele mai importante localități între Innsbruck și Oberland. Comuna de piață combină economia, transportul și calitatea locuirii într-un cadru clar alpin. Datorită apropierii de Seefeld, lanțul Mieming și valea Inn, Telfs este foarte atractiv pentru timp liber și călătorii. Ca termen de căutare, Telfs este puternic pentru Tirol, valea Inn și viața alpină de zi cu zi.",
      en: "Telfs sits in the Tyrolean Inn Valley and is one of the key places between Innsbruck and the Oberland. The market town combines business, transport, and quality of life in a distinctly Alpine setting. Because of its proximity to Seefeld, the Mieming Range, and the Inn Valley, Telfs is attractive for leisure and travel. As a search term, Telfs is strong for Tyrol, the Inn Valley, and Alpine everyday life."
    },
    facts: {
      de: ["Liegt im Inntal westlich von Innsbruck.", "Marktgemeinde mit starkem Wirtschafts- und Wohnstandort.", "Nahe an Seefeld und den Tiroler Alpen.", "Der Ort profitiert von guter Straßen- und Bahnverbindung.", "Beliebt für Alltagsurlaub zwischen Berg und Tal."],
      hu: ["Innsbrucktól nyugatra, az Inn-völgyben található.", "Mezőváros erős gazdasági és lakóövezeti szereppel.", "Közel van Seefeldhez és a tiroli Alpokhoz.", "A település jó közúti és vasúti kapcsolatokkal rendelkezik.", "Népszerű a hegy és völgy közti mindennapi pihenéshez."],
      ro: ["Se află în valea Inn, la vest de Innsbruck.", "Comuna de piață are un rol puternic economic și rezidențial.", "Aproape de Seefeld și de Alpii tirolezi.", "Localitatea beneficiază de legături bune rutiere și feroviare.", "Populară pentru escapade între munte și vale."],
      en: ["Located in the Inn Valley west of Innsbruck.", "A market town with a strong business and residential role.", "Close to Seefeld and the Tyrolean Alps.", "The town benefits from good road and rail links.", "Popular for everyday leisure between mountains and valley."]
    },
  },
  {
    id: "at-worgl",
    type: "city",
    parent: "AT",
    coords: [12.0598, 47.4895],
    name: { de: "Wörgl", hu: "Wörgl", ro: "Wörgl", en: "Wörgl" },
    image: "/geo-images/austria/worgl.webp",
    description: {
      de: "Wörgl ist ein wichtiger Verkehrsknoten im Tiroler Unterland und verbindet das Inntal mit dem Brixental und dem Kaisergebirge. Die Stadt ist wirtschaftlich lebendig, von Handel und Pendlerverkehr geprägt und für ihre zentrale Lage bekannt. Gleichzeitig bietet Wörgl schnellen Zugang zu Bergen, Tälern und Wintersportorten. Für Tirol-SEO, Bahnverkehr und alpine Anreise ist Wörgl ein sehr starkes Stichwort.",
      hu: "Wörgl a tiroli Unterland fontos közlekedési csomópontja, amely összeköti az Inn-völgyet a Brixentallel és a Kaisergebirgével. A város gazdaságilag élénk, a kereskedelem és az ingázó forgalom határozza meg, és központi fekvéséről ismert. Ugyanakkor Wörgl gyors hozzáférést ad a hegyekhez, völgyekhez és téli sporthelyekhez. Tirol SEO, vasúti közlekedés és alpesi érkezés témában Wörgl nagyon erős kulcsszó.",
      ro: "Wörgl este un nod de transport important în Tirolul de Jos și leagă valea Inn de Brixental și de masivul Kaisergebirge. Orașul este economic dinamic, marcat de comerț și navetiști, și este cunoscut pentru poziția sa centrală. În același timp, Wörgl oferă acces rapid la munți, văi și stațiuni de iarnă. Pentru SEO despre Tirol, transport feroviar și sosire alpină, Wörgl este un termen foarte puternic.",
      en: "Wörgl is a major transport hub in Lower Tyrol, linking the Inn Valley with the Brixental and the Kaiser Mountains. The town is economically lively, shaped by trade and commuter traffic, and is known for its central location. At the same time, Wörgl offers quick access to mountains, valleys, and winter sports resorts. For Tyrol SEO, rail travel, and Alpine arrivals, Wörgl is a very strong keyword."
    },
    facts: {
      de: ["Wichtiger Verkehrsknoten im Tiroler Unterland.", "Verbindet das Inntal mit dem Brixental.", "Stark von Handel und Pendlerverkehr geprägt.", "Guter Ausgangspunkt für Ski- und Bergtouren.", "Zentrale Lage zwischen Kufstein und Kitzbühel."],
      hu: ["Fontos közlekedési csomópont a tiroli Unterlandban.", "Összeköti az Inn-völgyet a Brixentallel.", "Erősen meghatározza a kereskedelem és az ingázó forgalom.", "Jó kiindulópont sí- és hegyi túrákhoz.", "Központi fekvés Kufstein és Kitzbühel között."],
      ro: ["Un nod de transport important în Tirolul de Jos.", "Leagă valea Inn de Brixental.", "Puternic influențat de comerț și navetism.", "Punct bun de plecare pentru schi și drumeții montane.", "Poziție centrală între Kufstein și Kitzbühel."],
      en: ["An important transport hub in Lower Tyrol.", "Connects the Inn Valley with the Brixental.", "Strongly shaped by trade and commuter traffic.", "A good starting point for ski and mountain trips.", "Central location between Kufstein and Kitzbühel."]
    }
  }
];

export const austriaCities: POI[] = [
  {
    id: "AT-Wien", type: "city", parent: "AT-9", coords: [16.3738, 48.2082],
    name: { de: "Wien", hu: "Bécs", ro: "Viena", en: "Vienna" },
    image: "/geo-images/austria/vienna.webp",
    description: {
      de: "Wien ist die Hauptstadt Österreichs und ein weltweites Zentrum für Musik, Kunst und imperiale Geschichte.",
      hu: "Bécs Ausztria fővárosa, a zene, a művészet és a császári történelem világszintű központja.",
      ro: "Viena este capitala Austriei și un centru mondial pentru muzică, artă și istorie imperială.",
      en: "Vienna is the capital of Austria and a global center for music, art, and imperial history."
    },
    descriptionAdvanced: {
      de: "Wien, die bevölkerungsreichste Großstadt Österreichs und zugleich ein eigenes Bundesland, gilt als eine der bedeutendsten Metropolen Europas mit einer Lebensqualität, die weltweit regelmäßig Spitzenplätze einnimmt. Als historische Residenz der Habsburger-Dynastie ist das Stadtbild geprägt von prachtvollen Boulevards wie der Ringstraße, majestätischen Palästen wie Schönbrunn und dem Belvedere sowie weitläufigen Parkanlagen, die zum Verweilen einladen. Wien ist ein globales Zentrum für Kunst, Musik und Theater; die Klänge von Mozart, Beethoven und Strauss hallen noch heute in den prächtigen Konzertsälen wie dem Musikverein und der Staatsoper wider. Doch die Stadt ist weit mehr als ein Denkmal ihrer imperialen Vergangenheit. Sie beherbergt eine lebendige, moderne Kulturszene, erstklassige Universitäten und eine hochmoderne Infrastruktur, die sie zu einem attraktiven Standort für internationale Organisationen wie die UNO und die OSZE macht. Die einzigartige Wiener Kaffeehauskultur, die zum immateriellen Kulturerbe der UNESCO gehört, bietet einen Raum für intellektuellen Austausch und gemütliche Entschleunigung inmitten des urbanen Trubels. Kulinarisch verführt Wien mit Klassikern wie dem Wiener Schnitzel und der Sachertorte, während die Heurigen in den Weinbaugebieten am Stadtrand für authentische Geselligkeit stehen. Die Stadt an der Donau verbindet auf faszinierende Weise nostalgischen Charme mit innovativer Stadtentwicklung und einer grünen Seele, die sich in Gebieten wie dem Prater und der Donauinsel zeigt. Wer Wien besucht, begibt sich auf eine Reise durch die Jahrhunderte, von der gotischen Pracht des Stephansdoms bis zur avantgardistischen Architektur des MuseumsQuartiers. Es ist eine Stadt, die inspiriert, begeistert und ihre Besucher mit einer Mischung aus kaiserlichem Glanz und moderner Weltoffenheit empfängt.",
      hu: "Bécs Ausztria legnépesebb nagyvárosa, egyben önálló szövetségi tartomány, amely Európa egyik legjelentősebb metropoliszaként ismert, és rendszeresen a világ legélhetőbb városai között szerepel. A Habsburg-dinasztia történelmi székhelyeként a városképet olyan pompás sugárutak határozzák meg, mint a Ringstraße, fenséges paloták, mint a Schönbrunn és a Belvedere, valamint kiterjedt parkok, amelyek kikapcsolódást nyújtanak a lakóknak és a látogatóknak egyaránt. Bécs a művészet, a zene és a színház globális központja; Mozart, Beethoven és Strauss dallamai ma is felcsendülnek az olyan patinás koncerttermekben, mint a Musikverein vagy az Állami Operaház. Azonban a város sokkal több, mint császári múltjának emlékműve. Vibráló, modern kulturális élettel, kiváló egyetemekkel és korszerű infrastruktúrával rendelkezik, ami vonzóvá teszi az olyan nemzetközi szervezetek számára is, mint az ENSZ vagy az EBESZ. A legendás bécsi kávéházi kultúra, amely az UNESCO szellemi kulturális örökségének része, teret ad az intellektuális párbeszédnek és a nyugodt pihenésnek a városi forgatagban. Kulináris szempontból Bécs olyan klasszikusokkal csábít, mint a bécsi szelet és a Sacher-torta, míg a város szélén található borozók (Heuriger) autentikus közösségi élményt kínálnak. A Duna-parti metropolisz lenyűgöző módon ötvözi a nosztalgikus bájt az innovatív városfejlesztéssel és a zöld szemlélettel, amely olyan területeken mutatkozik meg, mint a Práter vagy a Duna-sziget. Aki Bécsbe látogat, évszázadokon átívelő utazáson vesz részt, a Szent István-dóm gótikus pompájától a MuseumsQuartier avantgárd építészetéig. Ez a város inspirál, lenyűgöz, és a császári ragyogás valamint a modern nyitottság egyedülálló keverékével fogadja látogatóit.",
      ro: "Viena, cea mai populată metropolă din Austria și, în același timp, un stat federal propriu, este considerată una dintre cele mai importante metropole ale Europei, cu o calitate a vieții care ocupă în mod regulat primele locuri la nivel mondial. Ca reședință istorică a dinastiei Habsburgilor, peisajul urban este marcat de bulevarde magnifice precum Ringstraße, palate maiestuoase precum Schönbrunn și Belvedere, precum și parcuri întinse care invită la relaxare. Viena este un centru global pentru artă, muzică și teatru; sunetele lui Mozart, Beethoven și Strauss răsună și astăzi în sălile de concerte grandioase, cum ar fi Musikverein și Opera de Stat. Totuși, orașul este mult mai mult decât un monument al trecutului său imperial. Acesta găzduiește o scenă culturală modernă și vibrantă, universități de primă clasă și o infrastructură de ultimă generație, care îl fac un sediu atractiv pentru organizații internaționale precum ONU și OSCE. Legendara cultură a cafenelelor vieneze, inclusă în patrimoniul cultural imaterial al UNESCO, oferă un spațiu pentru schimburi intelectuale și relaxare în mijlocul agitației urbane. Din punct de vedere culinar, Viena seduce cu clasice precum șnițelul vienez și tortul Sacher, în timp ce tavernele Heurigen din zonele viticole de la marginea orașului oferă o convivialitate autentică. Orașul de pe Dunăre îmbină într-un mod fascinant farmecul nostalgic cu dezvoltarea urbană inovatoare și un suflet verde, vizibil în zone precum Prater și Insula Dunării. Cine vizitează Viena pornește într-o călătorie prin secole, de la splendoarea gotică a Catedralei Sfântul Ștefan până la arhitectura avangardistă din MuseumsQuartier. Este un oraș care inspiră, încântă și își întâmpină vizitatorii cu un amestec de strălucire imperială și deschidere modernă către lume.",
      en: "Vienna, the most populous city in Austria and a federal state in its own right, is considered one of Europe's most important metropolises, consistently ranking at the top of global quality of life surveys. As the historical residence of the Habsburg dynasty, the cityscape is defined by magnificent boulevards like the Ringstraße, majestic palaces such as Schönbrunn and Belvedere, and extensive parklands that invite relaxation. Vienna is a global hub for art, music, and theater; the melodies of Mozart, Beethoven, and Strauss still resonate today in grand concert halls like the Musikverein and the State Opera. Yet the city is much more than a monument to its imperial past. It hosts a vibrant, modern cultural scene, world-class universities, and state-of-the-art infrastructure, making it an attractive location for international organizations such as the UN and OSCE. The legendary Viennese coffee house culture, part of UNESCO's intangible cultural heritage, provides a space for intellectual exchange and leisurely deceleration amidst the urban bustle. Culinarily, Vienna entices with classics like Wiener Schnitzel and Sachertorte, while the Heurigen wine taverns on the city's outskirts offer authentic conviviality. The city on the Danube fascinatingly combines nostalgic charm with innovative urban development and a green soul, evident in areas like the Prater and the Danube Island. Visitors to Vienna embark on a journey through the centuries, from the Gothic splendor of St. Stephen's Cathedral to the avant-garde architecture of the MuseumsQuartier. It is a city that inspires, delights, and welcomes its visitors with a blend of imperial brilliance and modern cosmopolitanism."
    },
    facts: { de: ["Wien liegt an den Ufern der Donau.","Die Ringstraße umgibt die historische Innere Stadt.","Der Stephansdom ist das Wahrzeichen im Herzen der Stadt.","Das MuseumsQuartier ist eines der größten Kulturareale der Welt.","Die Stadt besitzt ein exzellentes öffentliches Verkehrsnetz.","Der Naschmarkt bietet kulinarische Spezialitäten aus aller Welt.","Der Donauturm bietet einen Panoramablick über die gesamte Stadt.","Zahlreiche internationale Organisationen haben hier ihren Sitz.","Der Wiener Zentralfriedhof beherbergt Ehrengräber vieler Berühmtheiten.","Verfügt über ausgedehnte Naherholungsgebiete wie die Donauinsel."], hu: ["Bécs a Duna partján fekszik.","A Ringstraße (Ring) veszi körül a történelmi belvárost.","A Szent István-dóm a város szívének jelképe.","A MuseumsQuartier a világ egyik legnagyobb kulturális negyede.","A város kiváló tömegközlekedési hálózattal rendelkezik.","A Naschmarkt a világ minden tájáról származó kulináris különlegességeket kínál.","A Duna-torony (Donauturm) panorámás kilátást nyújt az egész városra.","Számos nemzetközi szervezet székhelye található itt.","A bécsi Központi Temető számos híresség díszsírhelyét rejti.","Kiterjedt rekreációs övezetekkel rendelkezik, mint például a Duna-sziget (Donauinsel)."], ro: ["Viena este situată pe malurile Dunării.","Bulevardul Ringstrasse înconjoară orașul istoric Inner Stadt.","Catedrala Sf. Ștefan este simbolul din inima orașului.","MuseumsQuartier este una dintre cele mai mari zone culturale din lume.","Orașul are o rețea excelentă de transport public.","Piața Naschmarkt oferă specialități culinare din întreaga lume.","Turnul Dunării oferă o vedere panoramică asupra întregului oraș.","Numeroase organizații internaționale au sediul aici.","Cimitirul Central din Viena găzduiește mormintele de onoare ale multor celebrități.","Are zone extinse de recreere, cum ar fi Insula Dunării."], en: ["Vienna is located on the banks of the Danube River.","The Ringstrasse boulevard surrounds the historic Inner City.","St. Stephen's Cathedral is the landmark in the heart of the city.","The MuseumsQuartier is one of the largest cultural districts in the world.","The city has an excellent public transportation network.","The Naschmarkt offers culinary specialties from all over the world.","The Danube Tower provides a panoramic view over the entire city.","Numerous international organizations are headquartered here.","The Vienna Central Cemetery houses the graves of honor of many celebrities.","Has extensive local recreation areas such as the Danube Island."] }
  },
  {
    id: "AT-Graz", type: "city", parent: "AT-6", coords: [15.4395, 47.0707],
    name: { de: "Graz", hu: "Graz", ro: "Graz", en: "Graz" },
    image: "/geo-images/austria/graz.webp",
    description: {
      de: "Graz ist die zweitgrößte Stadt Österreichs, bekannt für ihre gut erhaltene Altstadt und als UNESCO-City of Design.",
      hu: "Graz Ausztria második legnagyobb városa, amely jól megőrzött óvárosáról és UNESCO Design Város címéről ismert.",
      ro: "Graz este al doilea oraș ca mărime din Austria, cunoscut pentru centrul său vechi bine conservat și ca Oraș UNESCO al Designului.",
      en: "Graz is the second-largest city in Austria, known for its well-preserved old town and as a UNESCO City of Design."
    },
    descriptionAdvanced: { de: "Graz, die charmante Hauptstadt der Steiermark, ist die zweitgrößte Stadt Österreichs und bekannt für ihr fast mediterranes Flair. Das historische Zentrum der Stadt ist eines der besterhaltenen Mitteleuropas und wurde gemeinsam mit dem Schloss Eggenberg zum UNESCO-Weltkulturerbe erklärt. Ein prägendes Wahrzeichen ist der Grazer Uhrturm, der majestätisch auf dem bewaldeten Schlossberg thront und einen fantastischen Blick über die roten Ziegeldächer bietet. Als Universitätsstadt versprüht Graz eine junge, dynamische Energie, die sich in innovativer Architektur, wie dem Kunsthaus Graz, und einer lebendigen Kulturszene zeigt. Die Stadt trägt zudem stolz den Titel 'UNESCO City of Design' sowie 'GenussHauptstadt', was ihre exzellente lokale Gastronomie unterstreicht.", hu: "Graz, Stájerország bájos fővárosa, Ausztria második legnagyobb városa, és szinte mediterrán hangulatáról ismert. A város történelmi központja Közép-Európa egyik legjobb állapotban fennmaradt óvárosa, amelyet az Eggenberg-kastéllyal együtt az UNESCO Világörökség részévé nyilvánítottak. Meghatározó jelképe a grazi óratorony, amely fenségesen trónol az erdős Schlossberg (Várhegy) tetején, és fantasztikus kilátást nyújt a piros cseréptetőkre. Egyetemvárosként Graz fiatalos, dinamikus energiát sugároz, ami az innovatív építészetben – mint például a grazi Kunsthaus – és az élénk kulturális életben is megmutatkozik. A város büszkén viseli az 'UNESCO Design Városa' és az 'Élvezetek Fővárosa' címet is, amely kiváló helyi gasztronómiáját hangsúlyozza.", ro: "Graz, fermecătoarea capitală a Stiriei, este al doilea oraș ca mărime din Austria și este cunoscut pentru atmosfera sa aproape mediteraneană. Centrul istoric al orașului este unul dintre cele mai bine conservate din Europa Centrală și a fost declarat Patrimoniu Mondial UNESCO împreună cu Palatul Eggenberg. Un punct de reper definitoriu este Turnul cu Ceas din Graz, care se înalță maiestuos pe dealul împădurit Schlossberg, oferind o priveliște fantastică asupra acoperișurilor din țiglă roșie. Fiind un oraș universitar, Graz emană o energie tânără, dinamică, care se reflectă în arhitectura sa inovatoare, precum Kunsthaus Graz, și într-o scenă culturală vibrantă. De asemenea, orașul poartă cu mândrie titlul de „Oraș UNESCO al Designului” și „Capitală a Deliciilor”, subliniind excelenta sa gastronomie locală.", en: "Graz, the charming capital of Styria, is the second-largest city in Austria and is known for its almost Mediterranean flair. The historical center of the city is one of the best-preserved in Central Europe and was declared a UNESCO World Heritage site along with Eggenberg Palace. A defining landmark is the Graz Clock Tower, which sits majestically on the wooded Schlossberg hill, offering a fantastic view over the red tile roofs. As a university city, Graz exudes a young, dynamic energy that is reflected in innovative architecture, such as the Kunsthaus Graz, and a vibrant cultural scene. The city also proudly bears the titles of 'UNESCO City of Design' and 'Capital of Delight', highlighting its excellent local gastronomy." },
    facts: { de: ["Graz liegt an der Mur im Südosten Österreichs.","Ist die Heimat von vier Universitäten mit vielen Studierenden.","Der Uhrturm auf dem Schlossberg hat vertauschte Zeiger (groß für Stunden).","Das Kunsthaus, ein Museum zeitgenössischer Kunst, wird oft 'Friendly Alien' genannt.","Die Grazer Altstadt ist geprägt von Gotik, Renaissance und Barock.","Die Murinsel, ein schwimmendes Kunstwerk, entstand für das Kulturhauptstadtjahr 2003.","Das Zeughaus in Graz ist die weltweit größte erhaltene historische Waffenkammer.","Arnold Schwarzenegger verbrachte seine Jugend in der Nähe (Thal).","Graz hat eine starke Technologie- und Automobilindustrie.","Berühmt für regionale Produkte wie Käferbohnen und Vulkanland-Schinken."], hu: ["Graz a Mura folyó partján fekszik, Ausztria délkeleti részén.","Négy egyetem otthona, így jelentős diákpopulációval rendelkezik.","A Schlossbergen található óratorony mutatói fel vannak cserélve (a nagy mutatja az órát).","A kortárs művészeti múzeumot, a Kunsthaust gyakran 'Barátságos Idegennek' is nevezik.","A grazi óvárost a gótika, a reneszánsz és a barokk stílusok határozzák meg.","A Murainsel (Mura-sziget) egy úszó műalkotás, amely a 2003-as Kulturális Főváros évre épült.","A grazi Zeughaus a világ legnagyobb épségben fennmaradt történelmi fegyvertára.","Arnold Schwarzenegger a közelben (Thal) töltötte fiatalkorát.","Graz erős technológiai és autóiparral rendelkezik.","Híres a regionális termékeiről, mint a tűzbab és a Vulkanland-sonka."], ro: ["Graz este situat pe râul Mur în sud-estul Austriei.","Găzduiește patru universități cu o populație studențească mare.","Turnul cu Ceas de pe Schlossberg are brațele inversate (cel mare pentru ore).","Kunsthaus, un muzeu de artă contemporană, este adesea numit „Extraterestrul Prietenos”.","Orașul vechi din Graz este caracterizat de arhitectura gotică, renascentistă și barocă.","Insula Mur, o operă de artă plutitoare, a fost creată pentru anul Capitalei Culturale în 2003.","Armuraria din Graz (Zeughaus) este cea mai mare armurărie istorică păstrată din lume.","Arnold Schwarzenegger și-a petrecut tinerețea în apropiere (Thal).","Graz are o puternică industrie tehnologică și auto.","Renumit pentru produse regionale, cum ar fi fasolea stacojie și șunca Vulkanland."], en: ["Graz is located on the Mur River in southeastern Austria.","It is home to four universities with a large student population.","The Clock Tower on the Schlossberg has swapped hands (the large one for hours).","The Kunsthaus, a museum of contemporary art, is often called the 'Friendly Alien'.","The Graz Old Town is characterized by Gothic, Renaissance, and Baroque architecture.","The Murinsel, a floating work of art, was created for the Capital of Culture year in 2003.","The Graz Armory (Zeughaus) is the world's largest preserved historical armory.","Arnold Schwarzenegger spent his youth nearby (Thal).","Graz has a strong technology and automotive industry.","Famous for regional products like scarlet runner beans and Vulkanland ham."] }
  },
  {
    id: "AT-Linz", type: "city", parent: "AT-4", coords: [14.2861, 48.3069],
    name: { de: "Linz", hu: "Linz", ro: "Linz", en: "Linz" },
    image: "/geo-images/austria/linz.webp",
    description: {
      de: "Linz ist die drittgrößte Stadt Österreichs, bekannt für ihre industrielle Geschichte, moderne Medienkunst und die berühmte Linzer Torte.",
      hu: "Linz Ausztria harmadik legnagyobb városa, amely ipari múltjáról, modern médiaművészetéről és a híres Linzer tortáról ismert.",
      ro: "Linz este al treilea oraș ca mărime din Austria, cunoscut pentru istoria sa industrială, arta media modernă și faimoasa Torta Linzer.",
      en: "Linz is the third-largest city in Austria, known for its industrial history, modern media arts, and the famous Linzer Torte."
    },
    descriptionAdvanced: { de: "Linz, die drittgrößte Stadt Österreichs und Hauptstadt von Oberösterreich, hat sich erfolgreich von einer klassischen Schwerindustriestadt zu einer modernen, zukunftsorientierten Technologiemetropole gewandelt. Die Stadt an der Donau fasziniert mit einer perfekten Symbiose aus historischem Charme und avantgardistischer Innovation. Während der barocke Hauptplatz und der Mariendom die Vergangenheit ehren, stehen das Ars Electronica Center und das Lentos Kunstmuseum für digitale Kunst und Zukunftstechnologien. Linz war 2009 Kulturhauptstadt Europas und trägt den Titel UNESCO City of Media Arts. Die malerische Lage an der Donau, kombiniert mit einer lebhaften Kreativszene und der weltbekannten Linzer Torte, macht die Stadt zu einem äußerst spannenden Ziel.", hu: "Linz, Ausztria harmadik legnagyobb városa és Felső-Ausztria fővárosa sikeresen alakult át klasszikus nehézipari városból egy modern, jövőorientált technológiai metropolisszá. A Duna-parti város a történelmi báj és az avantgárd innováció tökéletes szimbiózisával nyűgözi le a látogatókat. Míg a barokk főtér és a Mária-dóm a múlt előtt tiszteleg, az Ars Electronica Center és a Lentos Művészeti Múzeum a digitális művészetet és a jövő technológiáit képviseli. Linz 2009-ben Európa Kulturális Fővárosa volt, és az UNESCO médiaművészeti városa címet is viseli. Festői fekvése a Duna mentén, párosulva az élénk kreatív élettel és a világhírű Linzer tortával, rendkívül izgalmas célponttá teszi a várost.", ro: "Linz, al treilea oraș ca mărime din Austria și capitala Austriei Superioare, s-a transformat cu succes dintr-un oraș industrial greu clasic într-o metropolă tehnologică modernă, orientată spre viitor. Orașul de pe Dunăre fascinează cu o simbioză perfectă de farmec istoric și inovație avangardistă. În timp ce piața principală în stil baroc și Noua Catedrală (Mariendom) onorează trecutul, Ars Electronica Center și Muzeul de Artă Lentos reprezintă arta digitală și tehnologiile viitorului. Linz a fost Capitală Culturală Europeană în 2009 și poartă titlul de Oraș UNESCO al Artelor Media. Locația sa pitorească pe Dunăre, combinată cu o scenă creativă plină de viață și faimoasa Torta Linzer, fac din oraș o destinație extrem de captivantă.", en: "Linz, the third-largest city in Austria and the capital of Upper Austria, has successfully transformed from a classic heavy industry town into a modern, future-oriented technology metropolis. The city on the Danube fascinates with a perfect symbiosis of historical charm and avant-garde innovation. While the Baroque main square and the New Cathedral (Mariendom) honor the past, the Ars Electronica Center and the Lentos Art Museum represent digital art and future technologies. Linz was the European Capital of Culture in 2009 and holds the title of UNESCO City of Media Arts. Its picturesque location on the Danube, combined with a lively creative scene and the world-famous Linzer Torte, makes the city an extremely exciting destination." },
    facts: { de: ["Linz liegt zentral im oberösterreichischen Donautal.","Der Mariendom ist die größte Kirche Österreichs nach Fassungsvermögen.","Voestalpine ist ein weltweit führender Stahl- und Technologiekonzern mit Sitz in Linz.","Das Ars Electronica Festival ist ein weltweites Treffen für Medienkunst.","Pöstlingberg bietet mit der steilsten Adhäsionsbahn Europas einen tollen Ausblick.","Das Brucknerhaus ist ein Zentrum für hochkarätige Konzerte.","Ist eine der wirtschaftlich stärksten Städte Österreichs.","Der Linzer Hauptplatz ist einer der größten umbauten Plätze Europas.","Die Linzer Torte wird oft als ältestes Tortenrezept der Welt bezeichnet.","Das Mural Harbor Projekt schmückt den Hafen mit riesigen Graffiti-Kunstwerken."], hu: ["Linz központilag, a felső-ausztriai Duna-völgyben helyezkedik el.","A Mária-dóm (Mariendom) befogadóképességét tekintve Ausztria legnagyobb temploma.","A Voestalpine egy világvezető acél- és technológiai konszern, amelynek székhelye Linzben van.","Az Ars Electronica Fesztivál a médiaművészet globális találkozója.","A Pöstlingberg-re Európa legmeredekebb adhéziós vasútja vezet fel, nagyszerű kilátást nyújtva.","A Brucknerhaus rangos koncertek központja.","Ausztria egyik gazdaságilag legerősebb városa.","A linzi főtér Európa egyik legnagyobb zárt tere.","A Linzer tortát gyakran a világ legrégebbi tortareceptjeként tartják számon.","A Mural Harbor projekt hatalmas graffiti műalkotásokkal díszíti a kikötőt."], ro: ["Linz este situat central în Valea Dunării din Austria Superioară.","Noua Catedrală (Mariendom) este cea mai mare biserică din Austria după capacitate.","Voestalpine este un grup mondial de tehnologie și oțel cu sediul în Linz.","Festivalul Ars Electronica este o adunare globală pentru artele media.","Pöstlingberg oferă vederi minunate și are cea mai abruptă cale ferată de aderență din Europa.","Brucknerhaus este un centru pentru concerte de clasă superioară.","Este unul dintre cele mai puternice orașe din Austria din punct de vedere economic.","Piața principală din Linz este una dintre cele mai mari piețe închise din Europa.","Torta Linzer este adesea considerată cea mai veche rețetă de tort din lume.","Proiectul Mural Harbor decorează portul cu opere de artă graffiti uriașe."], en: ["Linz is centrally located in the Upper Austrian Danube Valley.","The New Cathedral (Mariendom) is the largest church in Austria by capacity.","Voestalpine is a global leading steel and technology group based in Linz.","The Ars Electronica Festival is a worldwide gathering for media arts.","Pöstlingberg offers great views and has the steepest adhesion railway in Europe.","The Brucknerhaus is a center for high-class concerts.","It is one of the most economically powerful cities in Austria.","The Linz Main Square is one of the largest enclosed squares in Europe.","The Linzer Torte is often referred to as the oldest cake recipe in the world.","The Mural Harbor project decorates the port with massive graffiti artworks."] }
  },
  {
    id: "AT-SalzburgCity", type: "city", parent: "AT-5", coords: [13.055, 47.8095],
    name: { de: "Salzburg", hu: "Salzburg", ro: "Salzburg", en: "Salzburg" },
    image: "/geo-images/austria/salzburg.webp",
    description: {
      de: "Salzburg ist die Geburtsstadt Mozarts, bekannt für ihre barocke Altstadt, die Festung Hohensalzburg und die weltberühmten Salzburger Festspiele.",
      hu: "Salzburg Mozart szülővárosa, amely barokk óvárosáról, Hohensalzburg váráról és a világhírű Salzburgi Ünnepi Játékokról ismert.",
      ro: "Salzburg este orașul natal al lui Mozart, cunoscut pentru centrul său vechi baroc, cetatea Hohensalzburg și faimosul Festival de la Salzburg.",
      en: "Salzburg is the birthplace of Mozart, known for its Baroque old town, Hohensalzburg Fortress, and the world-famous Salzburg Festival."
    },
    descriptionAdvanced: { de: "Die Stadt Salzburg, malerisch an der Salzach gelegen, ist ein architektonisches Juwel von Weltrang und stolzer Geburtsort von Wolfgang Amadeus Mozart. Das historische Zentrum mit seinen engen Gassen, weiten Plätzen und barocken Meisterwerken, gekrönt von der imposanten Festung Hohensalzburg, ist UNESCO-Weltkulturerbe. Als 'Rom des Nordens' gepriesen, strahlt die Stadt mit ihren zahlreichen Kirchen und Schlössern wie Mirabell und Hellbrunn eine unvergleichliche Eleganz aus. Jeden Sommer verwandelt sich Salzburg durch die Salzburger Festspiele in die globale Hauptstadt der klassischen Musik und Darstellenden Kunst. Neben Hochkultur lockt die Stadt auch als Schauplatz des Hollywood-Klassikers 'The Sound of Music' jährlich Millionen Besucher an.", hu: "Salzburg városa, amely festői környezetben fekszik a Salzach folyó partján, egy világszínvonalú építészeti ékszerdoboz és Wolfgang Amadeus Mozart büszke szülőhelye. Szűk utcákkal, tágas terekkel és barokk mesterművekkel teli történelmi központja, amelyet az impozáns Hohensalzburg vára koronáz meg, az UNESCO Világörökség része. Az 'Észak Rómájaként' is emlegetett város számtalan templomával és olyan kastélyaival, mint a Mirabell és a Hellbrunn, páratlan eleganciát sugároz. A Salzburgi Ünnepi Játékoknak köszönhetően a város minden nyáron a klasszikus zene és az előadóművészetek globális fővárosává alakul át. A magas kultúra mellett a város 'A muzsika hangja' című hollywoodi klasszikus forgatási helyszíneként is évente több millió látogatót vonz.", ro: "Orașul Salzburg, situat pitoresc pe râul Salzach, este o bijuterie arhitecturală de clasă mondială și mândrul loc de naștere al lui Wolfgang Amadeus Mozart. Centrul său istoric, cu străzile sale înguste, piețele largi și capodoperele baroce, încoronat de impunătoarea Fortăreață Hohensalzburg, este un sit al Patrimoniului Mondial UNESCO. Lăudat drept „Roma Nordului”, orașul emană o eleganță incomparabilă prin numeroasele sale biserici și palate, precum Mirabell și Hellbrunn. În fiecare vară, Festivalul de la Salzburg transformă orașul în capitala globală a muzicii clasice și a artelor spectacolului. Pe lângă cultura înaltă, orașul atrage, de asemenea, milioane de vizitatori anual ca decor pentru clasicul de la Hollywood „Sunetul muzicii”.", en: "The city of Salzburg, picturesquely situated on the Salzach River, is a world-class architectural jewel and the proud birthplace of Wolfgang Amadeus Mozart. Its historic center, with its narrow streets, sweeping squares, and Baroque masterpieces, crowned by the imposing Hohensalzburg Fortress, is a UNESCO World Heritage site. Praised as the 'Rome of the North', the city exudes an incomparable elegance with its numerous churches and palaces, such as Mirabell and Hellbrunn. Every summer, the Salzburg Festival transforms the city into the global capital of classical music and performing arts. In addition to high culture, the city also attracts millions of visitors annually as the setting for the Hollywood classic 'The Sound of Music'." },
    facts: { de: ["Salzburg wurde stark vom Reichtum des historischen Salzhandels geprägt.","Mozarts Geburtshaus in der Getreidegasse ist heute ein beliebtes Museum.","Die Festung Hohensalzburg ist eine der größten Burganlagen Europas.","Schloss Hellbrunn ist berühmt für seine einzigartigen manieristischen Wasserspiele.","Der Salzburger Dom ist das bedeutendste sakrale Bauwerk der Stadt.","Die Salzburger Festspiele wurden 1920 von Max Reinhardt und Hugo von Hofmannsthal gegründet.","Die Original-Salzburger Mozartkugel wurde 1890 von Paul Fürst kreiert.","Der Kapuzinerberg und der Mönchsberg bieten tolle Aussichtspunkte über die Stadt.","Red Bull wurde in der Nähe von Salzburg gegründet (Fuschl am See).","Das historische Zentrum ist seit 1996 UNESCO-Weltkulturerbe."], hu: ["Salzburgot erősen meghatározta a történelmi sókereskedelem gazdagsága.","Mozart szülőháza a Getreidegassén ma népszerű múzeum.","A Hohensalzburg vára Európa egyik legnagyobb erődítménye.","A Hellbrunni kastély híres egyedülálló manierista vízijátékairól.","A salzburgi dóm a város legjelentősebb szakrális építménye.","A Salzburgi Ünnepi Játékokat 1920-ban alapította Max Reinhardt és Hugo von Hofmannsthal.","Az eredeti salzburgi Mozart-golyót 1890-ben Paul Fürst alkotta meg.","A Kapuzinerberg és a Mönchsberg nagyszerű kilátópontokat kínál a város felett.","A Red Bull vállalatot Salzburg közelében (Fuschl am See) alapították.","A történelmi központ 1996 óta az UNESCO Világörökség része."], ro: ["Salzburgul a fost puternic influențat de bogăția comerțului istoric cu sare.","Casa natală a lui Mozart de pe Getreidegasse este acum un muzeu popular.","Fortăreața Hohensalzburg este una dintre cele mai mari din Europa.","Palatul Hellbrunn este faimos pentru jocurile sale de apă manieriste unice.","Catedrala din Salzburg este cea mai importantă clădire sacră a orașului.","Festivalul de la Salzburg a fost fondat în 1920 de Max Reinhardt și Hugo von Hofmannsthal.","Originala bomboană Mozart (Mozartkugel) a fost creată de Paul Fürst în 1890.","Muntele Kapuzinerberg și Mönchsberg oferă puncte de belvedere grozave asupra orașului.","Red Bull a fost fondată în apropiere de Salzburg (Fuschl am See).","Centrul istoric face parte din Patrimoniul Mondial UNESCO din 1996."], en: ["Salzburg was strongly shaped by the wealth of the historical salt trade.","Mozart's birthplace in the Getreidegasse is now a popular museum.","The Hohensalzburg Fortress is one of the largest castles in Europe.","Hellbrunn Palace is famous for its unique Mannerist trick fountains.","The Salzburg Cathedral is the city's most important sacred building.","The Salzburg Festival was founded in 1920 by Max Reinhardt and Hugo von Hofmannsthal.","The original Salzburg Mozartkugel was created by Paul Fürst in 1890.","The Kapuzinerberg and Mönchsberg hills offer great viewpoints over the city.","Red Bull was founded near Salzburg (in Fuschl am See).","The historical center has been a UNESCO World Heritage site since 1996."] }
  },
  {
    id: "AT-Innsbruck", type: "city", parent: "AT-7", coords: [11.3945, 47.2692],
    name: { de: "Innsbruck", hu: "Innsbruck", ro: "Innsbruck", en: "Innsbruck" },
    image: "/geo-images/austria/innsbruck.webp",
    description: {
      de: "Innsbruck ist die Hauptstadt von Tirol und bekannt als 'Hauptstadt der Alpen', die kaiserliche Geschichte mit spektakulärem Bergsport verbindet.",
      hu: "Innsbruck Tirol fővárosa, az 'Alpok fővárosaként' ismert, amely a császári történelmet látványos hegyi sportokkal ötvözi.",
      ro: "Innsbruck este capitala Tirolului și este cunoscut drept „Capitala Alpilor”, îmbinând istoria imperială cu sporturile montane spectaculoase.",
      en: "Innsbruck is the capital of Tyrol and known as the 'Capital of the Alps', blending imperial history with spectacular mountain sports."
    },
    descriptionAdvanced: { de: "Innsbruck, die charmante 'Hauptstadt der Alpen', fasziniert mit einer weltweit einzigartigen Mischung aus reicher kaiserlicher Geschichte und spektakulärer alpiner Bergwelt. Die Nordkette erhebt sich majestätisch direkt hinter den historischen Gassen der Altstadt und ist dank der von Zaha Hadid entworfenen Hungerburgbahn in wenigen Minuten erreichbar. Die Stadt war eine bevorzugte Residenz von Kaiser Maximilian I., der das berühmte 'Goldene Dachl' als Symbol seiner Macht errichten ließ. Als zweifacher Austragungsort der Olympischen Winterspiele atmet Innsbruck sportlichen Pioniergeist und ist ein Paradies für Skifahrer, Mountainbiker und Kletterer. Gleichzeitig sorgen die lebendige Universitätskultur und die barocken Paläste für ein urbanes, elegantes Flair.", hu: "Innsbruck, az Alpok bájos fővárosa, a gazdag császári történelem és a látványos alpesi hegyvidék világszerte egyedülálló keverékével nyűgözi le a látogatókat. A Nordkette fenségesen emelkedik az óváros történelmi utcái mögött, és a Zaha Hadid által tervezett Hungerburgbahn (sikló) jóvoltából percek alatt elérhető. A város I. Miksa császár kedvelt rezidenciája volt, aki hatalma szimbólumaként építtette a híres 'Aranytetőt' (Goldenes Dachl). A téli olimpiai játékok kétszeres helyszíneként Innsbruck sportos úttörő szellemet áraszt, és a síelők, hegyikerékpárosok és hegymászók paradicsoma. Ugyanakkor az élénk egyetemi kultúra és a barokk paloták urbánus, elegáns hangulatot biztosítanak.", ro: "Innsbruck, fermecătoarea „Capitală a Alpilor”, fascinează cu un amestec unic la nivel mondial de istorie imperială bogată și un peisaj montan alpin spectaculos. Lanțul muntos Nordkette se înalță maiestuos chiar în spatele străzilor istorice ale orașului vechi și poate fi atins în câteva minute datorită funicularului Hungerburgbahn, proiectat de Zaha Hadid. Orașul a fost o reședință preferată a Împăratului Maximilian I, care a construit faimosul „Acoperiș de Aur” ca simbol al puterii sale. Ca gazdă de două ori a Jocurilor Olimpice de Iarnă, Innsbruck respiră un spirit de pionierat sportiv și este un paradis pentru schiori, bicicliști montani și alpiniști. În același timp, cultura universitară vibrantă și palatele baroce asigură un fler urban și elegant.", en: "Innsbruck, the charming 'Capital of the Alps', fascinates with a globally unique blend of rich imperial history and a spectacular Alpine mountain setting. The Nordkette mountain range rises majestically right behind the historic streets of the old town and can be reached in minutes thanks to the Hungerburgbahn funicular designed by Zaha Hadid. The city was a favored residence of Emperor Maximilian I, who had the famous 'Golden Roof' built as a symbol of his power. As a two-time host of the Winter Olympics, Innsbruck exudes a sporting pioneering spirit and is a paradise for skiers, mountain bikers, and climbers. At the same time, the vibrant university culture and Baroque palaces provide an urban, elegant flair." },
    facts: { de: ["Innsbruck liegt im breiten Inntal, flankiert von hohen Gebirgen.","Das Goldene Dachl ist mit 2.657 feuervergoldeten Kupferschindeln bedeckt.","War 1964 und 1976 Gastgeber der Olympischen Winterspiele.","Die Bergiselschanze ist ein Austragungsort der Vierschanzentournee.","Die Hofkirche beherbergt das monumentale Grabmal Kaiser Maximilians I.","Das Schloss Ambras zählt zu den bedeutendsten Sehenswürdigkeiten Tirols.","Die Alpenzoo Innsbruck ist der höchstgelegene Zoo Europas.","Das Tiroler Landesmuseum Ferdinandeum zeigt regionale Kunst und Geschichte.","Die Leopold-Franzens-Universität wurde 1669 gegründet.","Die Stadt ist bekannt für den starken Föhnwind, der das Klima beeinflusst."], hu: ["Innsbruck a széles Inn-völgyben fekszik, magas hegyekkel övezve.","Az Aranytetőt 2657 tűziaranyozott réz zsindely fedi.","1964-ben és 1976-ban a téli olimpia házigazdája volt.","A Bergisel-sánc a Négysáncverseny egyik helyszíne.","A Hofkirche ad otthont I. Miksa császár monumentális síremlékének.","Az Ambras-kastély Tirol egyik legfontosabb látnivalója.","Az innsbrucki Alpenzoo Európa legmagasabban fekvő állatkertje.","A Tiroli Tartományi Múzeum (Ferdinandeum) regionális művészetet és történelmet mutat be.","A Leopold-Franzens Egyetemet 1669-ben alapították.","A város ismert az erős főn szélről, amely jelentősen befolyásolja az éghajlatot."], ro: ["Innsbruck este situat în valea largă a râului Inn, flancată de munți înalți.","Acoperișul de Aur este acoperit cu 2.657 de șindrile de cupru aurit.","A găzduit Jocurile Olimpice de Iarnă în 1964 și 1976.","Trambulina Bergisel este una dintre locațiile Turneului celor Patru Trambuline.","Biserica Hofkirche găzduiește mormântul monumental al Împăratului Maximilian I.","Palatul Ambras este unul dintre cele mai importante obiective turistice din Tirol.","Alpenzoo Innsbruck este grădina zoologică situată la cea mai mare altitudine din Europa.","Muzeul de Stat Tirolez Ferdinandeum prezintă artă și istorie regională.","Universitatea Leopold-Franzens a fost fondată în 1669.","Orașul este cunoscut pentru vântul puternic Foehn, care influențează clima."], en: ["Innsbruck is located in the broad Inn Valley, flanked by high mountains.","The Golden Roof is covered with 2,657 fire-gilded copper shingles.","Hosted the Winter Olympics in 1964 and 1976.","The Bergisel Ski Jump is a venue for the Four Hills Tournament.","The Hofkirche houses the monumental tomb of Emperor Maximilian I.","Ambras Castle is one of the most important sights in Tyrol.","The Alpenzoo Innsbruck is the highest-altitude zoo in Europe.","The Tyrolean State Museum Ferdinandeum showcases regional art and history.","The Leopold-Franzens University was founded in 1669.","The city is known for the strong Foehn wind, which influences the climate."] }
  },
  {
    id: "AT-Klagenfurt", type: "city", parent: "AT-2", coords: [14.3053, 46.6247],
    name: { de: "Klagenfurt", hu: "Klagenfurt", ro: "Klagenfurt", en: "Klagenfurt" },
    image: "/geo-images/austria/klagenfurt.webp",
    description: { de: "Klagenfurt am Wörthersee, die Hauptstadt Kärntens, gilt als die charmante Renaissance-Perle des österreichischen Südens. Die Altstadt wird von wunderschön restaurierten Palazzi und malerischen Innenhöfen geprägt, die von italienischen Baumeistern im 16. Jahrhundert entworfen wurden. Das Wahrzeichen der Stadt, der mächtige steinerne Lindwurm, bewacht den weitläufigen Neuen Platz. Was Klagenfurt besonders attraktiv macht, ist seine unmittelbare Nähe zum türkisfarbenen Wörthersee, der im Sommer mit seinem warmen Wasser fast karibisches Flair verströmt. Hier verschmelzen urbane Kultur, sportliche Aktivität und entspanntes Badeleben zu einer perfekten Symbiose.", hu: "Klagenfurt am Wörthersee, Karintia fővárosa, az osztrák délvidék bájos reneszánsz gyöngyszemének számít. Az óvárost gyönyörűen felújított palazzók és festői belső udvarok jellemzik, amelyeket olasz építőmesterek terveztek a 16. században. A város jelképe, a hatalmas kőből faragott Lindwurm (sárkány) őrzi a tágas Új Teret (Neuer Platz). Ami Klagenfurtot különösen vonzóvá teszi, az a türkizkék Wörthersee (wörthi-tó) közvetlen közelsége, amely nyáron meleg vizével szinte karibi hangulatot áraszt. Itt az urbánus kultúra, a sporttevékenységek és a pihentető fürdőélet tökéletes szimbiózissá olvad össze.", ro: "Klagenfurt am Wörthersee, capitala Carintiei, este considerată fermecătoarea perlă renascentistă a sudului austriac. Orașul vechi este caracterizat de palate frumos restaurate și curți pitorești, care au fost proiectate de maeștrii constructori italieni în secolul al XVI-lea. Simbolul orașului, masivul balaur din piatră (Lindwurm), păzește piața spațioasă Neuer Platz. Ceea ce face din Klagenfurt un oraș deosebit de atractiv este proximitatea sa imediată față de apele turcoaz ale lacului Wörthersee, care emană o atmosferă aproape caraibiană vara cu apa sa caldă. Aici, cultura urbană, activitățile sportive și relaxarea la plajă se contopesc într-o simbioză perfectă.", en: "Klagenfurt am Wörthersee, the capital of Carinthia, is considered the charming Renaissance pearl of the Austrian south. The old town is characterized by beautifully restored palazzi and picturesque courtyards, which were designed by Italian master builders in the 16th century. The city's landmark, the massive stone Lindwurm (dragon), guards the spacious Neuer Platz. What makes Klagenfurt particularly attractive is its immediate proximity to the turquoise waters of Lake Wörthersee, which exudes an almost Caribbean flair in summer with its warm water. Here, urban culture, sporting activities, and relaxed beach life merge into a perfect symbiosis." },
    facts: { de: ["Klagenfurt ist die sechstgrößte Stadt Österreichs.","Der Legende nach entstand die Stadt auf einem trockengelegten Sumpf, in dem ein Lindwurm lebte.","Minimundus in Klagenfurt zeigt über 150 Miniaturmodelle berühmter Bauwerke weltweit.","Der Wörthersee ist einer der wärmsten Alpenseen.","Europapark ist eine große Freizeitanlage direkt am Seeufer.","Das Landhaus Klagenfurt besitzt einen prachtvollen Wappensaal.","Der Ironman Austria findet jährlich in und um Klagenfurt statt.","Gustav Mahler komponierte in einem Häuschen am nahen Seeufer.","Die Universität Klagenfurt ist ein wichtiges Bildungszentrum im Alpen-Adria-Raum.","Der Lendkanal verbindet das Stadtzentrum direkt mit dem Wörthersee."], hu: ["Klagenfurt Ausztria hatodik legnagyobb városa.","A legenda szerint a város egy kiszárított mocsárra épült, amelyben egy sárkány (Lindwurm) élt.","A klagenfurti Minimundus több mint 150 híres épület makettjét mutatja be a világ minden tájáról.","A Wörthersee az egyik legmelegebb alpesi tó.","Az Europapark egy nagy szabadidőpark közvetlenül a tóparton.","A klagenfurti Landhaus pompás címerteremmel rendelkezik.","Az Ironman Austria versenyt évente Klagenfurtban és környékén rendezik meg.","Gustav Mahler a közeli tóparton lévő házikóban komponált.","A Klagenfurti Egyetem fontos oktatási központ az Alpok-Adria térségben.","A Lend-csatorna közvetlenül összeköti a városközpontot a Wörthersee-vel."], ro: ["Klagenfurt este al șaselea oraș ca mărime din Austria.","Conform legendei, orașul a fost construit pe o mlaștină drenată, unde trăia un balaur (Lindwurm).","Minimundus din Klagenfurt expune peste 150 de modele în miniatură ale unor clădiri celebre din întreaga lume.","Wörthersee este unul dintre cele mai calde lacuri alpine.","Europapark este o mare zonă de agrement situată chiar pe malul lacului.","Landhaus Klagenfurt are o Sală a blazoanelor (Wappensaal) magnifică.","Ironman Austria are loc anual în și în jurul orașului Klagenfurt.","Gustav Mahler a compus într-o mică locuință de pe țărmul lacului din apropiere.","Universitatea din Klagenfurt este un important centru educațional din regiunea Alpi-Adriatică.","Canalul Lend leagă direct centrul orașului de lacul Wörthersee."], en: ["Klagenfurt is the sixth-largest city in Austria.","According to legend, the city was built on a drained swamp where a dragon (Lindwurm) lived.","Minimundus in Klagenfurt displays over 150 miniature models of famous buildings worldwide.","Lake Wörthersee is one of the warmest Alpine lakes.","Europapark is a large recreational area right on the lakeshore.","The Landhaus Klagenfurt features a magnificent Hall of Arms (Wappensaal).","Ironman Austria takes place annually in and around Klagenfurt.","Gustav Mahler composed in a small cottage on the nearby lakeshore.","The University of Klagenfurt is an important educational center in the Alps-Adriatic region.","The Lend Canal directly connects the city center with Lake Wörthersee."] }
  },
  {
    id: "AT-Bregenz", type: "city", parent: "AT-8", coords: [9.7438, 47.5014],
    name: { de: "Bregenz", hu: "Bregenz", ro: "Bregenz", en: "Bregenz" },
    image: "/geo-images/austria/bregenz.webp",
    description: { de: "Bregenz, die idyllische Hauptstadt Vorarlbergs, fasziniert durch ihre unvergleichliche Lage direkt an den Ufern des Bodensees und am Fuße des markanten Pfänder-Massivs. Die Stadt ist international berühmt für die Bregenzer Festspiele, deren spektakuläre Seebühne jeden Sommer hochkarätige Operninszenierungen in atemberaubender Kulisse bietet. Die historische Oberstadt versprüht mit ihren mittelalterlichen Gassen und dem Martinsturm einen ruhigen, antiken Charme, der im spannenden Kontrast zur modernen Architektur des Kunsthauses Bregenz am Ufer steht. Mit exzellenten Rad- und Wanderwegen rund um den See und auf den Hausberg ist Bregenz ein Paradies für Kultur- und Naturfreunde gleichermaßen.", hu: "Bregenz, Vorarlberg idilli fővárosa, lenyűgöző fekvésével varázsolja el a látogatókat közvetlenül a Bóden-tó partján, a markáns Pfänder-hegység lábánál. A város nemzetközileg híres a Bregenzer Festspiele (Bregenzi Ünnepi Játékok) révén, amelynek látványos tavi színpada minden nyáron magas színvonalú operaelőadásokat kínál lélegzetelállító kulisszák között. A történelmi Felsőváros (Oberstadt) középkori sikátoraival és a Márton-toronnyal (Martinsturm) csendes, antik bájt sugároz, ami izgalmas kontrasztban áll a tóparti Kunsthaus Bregenz modern építészetével. A tó körüli és a helyi hegyre vezető kiváló kerékpár- és túraútvonalakkal Bregenz a kultúra és a természet szerelmeseinek egyaránt paradicsoma.", ro: "Bregenz, idilica capitală a Vorarlbergului, fascinează prin locația sa incomparabilă chiar pe malul Lacului Constanța și la poalele masivului Pfänder. Orașul este renumit la nivel internațional pentru Festivalul de la Bregenz, a cărui spectaculoasă scenă lacustră oferă în fiecare vară producții de operă de top într-un decor uluitor. Orașul de Sus istoric (Oberstadt), cu străzile sale medievale și Turnul Sf. Martin (Martinsturm), emană un farmec liniștit, antic, care contrastează captivant cu arhitectura modernă a Kunsthaus Bregenz de pe mal. Cu trasee excelente pentru biciclete și drumeții în jurul lacului și pe muntele local, Bregenz este un paradis deopotrivă pentru iubitorii de cultură și de natură.", en: "Bregenz, the idyllic capital of Vorarlberg, fascinates with its incomparable location right on the shores of Lake Constance and at the foot of the striking Pfänder massif. The city is internationally famous for the Bregenz Festival, whose spectacular floating stage offers top-class opera productions in a breathtaking setting every summer. The historic Upper Town (Oberstadt) exudes a quiet, antique charm with its medieval alleys and the Martin's Tower (Martinsturm), which stands in exciting contrast to the modern architecture of the Kunsthaus Bregenz on the shore. With excellent cycling and hiking trails around the lake and on the local mountain, Bregenz is a paradise for culture and nature lovers alike." },
    facts: { de: ["Bregenz besitzt den wichtigsten österreichischen Hafen am Bodensee.","Der Pfänder (1.064 m) ist der Hausberg der Stadt, erreichbar per Seilbahn.","Die Seebühne ist die weltweit größte ihrer Art.","Der Martinsturm mit seiner barocken Zwiebelkuppel ist das Wahrzeichen der Stadt.","Das Kunsthaus Bregenz (KUB) ist ein Architektur-Highlight von Peter Zumthor.","Die Stadtgrenze reicht direkt an das benachbarte Deutschland (Lindau).","Die Uferpromenade ist eine der schönsten Flaniermeilen am Bodensee.","Die Siedlung wurde ursprünglich von Kelten (Brigantion) und Römern (Brigantium) gegründet.","Vorarlberg Museum dokumentiert die Kunst und Geschichte der Region.","Bietet einen idealen Ausgangspunkt für Schiffsausflüge im Dreiländereck."], hu: ["Bregenzben található a legfontosabb osztrák kikötő a Bóden-tavon.","A Pfänder (1064 m) a város helyi hegye, amely felvonóval érhető el.","A tavi színpad a világon a legnagyobb a maga nemében.","A barokk hagymakupolás Márton-torony a város jelképe.","A Kunsthaus Bregenz (KUB) Peter Zumthor egyik kiemelkedő építészeti alkotása.","A városhatár közvetlenül a szomszédos Németországig (Lindau) ér.","A parti sétány a Bóden-tó egyik legszebb sétatere.","A települést eredetileg a kelták (Brigantion) és a rómaiak (Brigantium) alapították.","A Vorarlberg Museum a régió művészetét és történelmét dokumentálja.","Ideális kiindulópont hajókirándulásokhoz a hármashatár régióban."], ro: ["Bregenz are cel mai important port austriac de pe Lacul Constanța.","Pfänder (1.064 m) este muntele local al orașului, accesibil cu telecabina.","Scena de pe lac este cea mai mare de acest gen din lume.","Turnul Sf. Martin cu cupola sa barocă în formă de ceapă este simbolul orașului.","Kunsthaus Bregenz (KUB) este un punct culminant arhitectural realizat de Peter Zumthor.","Limita orașului ajunge direct în Germania vecină (Lindau).","Promenada de pe malul lacului este una dintre cele mai frumoase zone de plimbare de pe Lacul Constanța.","Așezarea a fost fondată inițial de celți (Brigantion) și romani (Brigantium).","Muzeul Vorarlberg documentează arta și istoria regiunii.","Oferă un punct de plecare ideal pentru excursii cu barca în regiunea de frontieră trinațională."], en: ["Bregenz has the most important Austrian port on Lake Constance.","The Pfänder (1,064 m) is the city's local mountain, accessible by cable car.","The floating stage is the world's largest of its kind.","The St. Martin's Tower with its Baroque onion dome is the city's landmark.","The Kunsthaus Bregenz (KUB) is an architectural highlight by Peter Zumthor.","The city border reaches directly to neighboring Germany (Lindau).","The lakeside promenade is one of the most beautiful strolling areas on Lake Constance.","The settlement was originally founded by Celts (Brigantion) and Romans (Brigantium).","The Vorarlberg Museum documents the art and history of the region.","Offers an ideal starting point for boat trips in the tri-border region."] }
  },
  {
    id: "AT-Eisenstadt", type: "city", parent: "AT-1", coords: [16.5333, 47.8333],
    name: { de: "Eisenstadt", hu: "Kismarton", ro: "Eisenstadt", en: "Eisenstadt" },
    image: "/geo-images/austria/eisenstadt.webp",
    description: { de: "Eisenstadt, die idyllische Landeshauptstadt des Burgenlandes, ist eine Stadt von historischer Eleganz und tief verwurzelter musikalischer Tradition. Sie liegt eingebettet in die sanften Hügel am Fuße des Leithagebirges und ist untrennbar mit dem Erbe der mächtigen Fürstenfamilie Esterházy verbunden. Das prachtvolle Schloss Esterházy dominiert das Stadtbild und beherbergt den weltberühmten Haydnsaal, der für seine herausragende Akustik bekannt ist. Hier wirkte Joseph Haydn über vier Jahrzehnte als Kapellmeister und prägte die klassische Musik maßgeblich. Neben der reichen Kulturgeschichte zieht Eisenstadt auch mit seinen nahegelegenen, exzellenten Weinbaugebieten und charmanten Fußgängerzonen Genießer aus aller Welt an.", hu: "Kismarton (Eisenstadt), Burgenland idilli fővárosa, a történelmi elegancia és a mélyen gyökerező zenei hagyományok városa. A Lajta-hegység (Leithagebirge) lábánál, szelíd dombok között fekszik, és elválaszthatatlanul összefonódott a hatalmas Esterházy hercegi család örökségével. A pompás Esterházy-kastély uralja a városképet, és itt található a világhírű Haydn-terem, amely kiemelkedő akusztikájáról ismert. Joseph Haydn több mint négy évtizeden át dolgozott itt karmesterként, és jelentősen alakította a klasszikus zenét. A gazdag kultúrtörténet mellett Kismarton a közeli, kiváló borvidékeivel és hangulatos sétálóutcáival is vonzza a világ minden tájáról érkező ínyenceket.", ro: "Eisenstadt, capitala idilică a Burgenlandului, este un oraș de o eleganță istorică și o tradiție muzicală adânc înrădăcinată. Este situat între dealurile blânde de la poalele Munților Leitha și este indisolubil legat de moștenirea puternicei familii nobiliare Esterházy. Magnificul Palat Esterházy domină peisajul orașului și găzduiește faimoasa Sală Haydn (Haydnsaal), renumită pentru acustica sa remarcabilă. Joseph Haydn a lucrat aici ca director muzical (Kapellmeister) timp de peste patru decenii și a influențat semnificativ muzica clasică. Pe lângă bogata sa istorie culturală, Eisenstadt atrage, de asemenea, cunoscători din întreaga lume, prin podgoriile sale excelente din apropiere și zonele pietonale fermecătoare.", en: "Eisenstadt, the idyllic capital of Burgenland, is a city of historical elegance and deep-rooted musical tradition. It is nestled in the rolling hills at the foot of the Leitha Mountains and is inextricably linked to the legacy of the powerful Esterházy princely family. The magnificent Esterházy Palace dominates the cityscape and houses the world-famous Haydn Hall (Haydnsaal), known for its outstanding acoustics. Joseph Haydn worked here as Kapellmeister for over four decades and significantly shaped classical music. In addition to its rich cultural history, Eisenstadt also attracts connoisseurs from all over the world with its nearby excellent wine-growing areas and charming pedestrian zones." },
    facts: { de: ["Eisenstadt ist mit rund 15.000 Einwohnern die kleinste Landeshauptstadt Österreichs.","Joseph Haydn verbrachte einen Großteil seines Lebens und Schaffens hier.","Das Haydn-Haus ist heute ein Museum über sein Leben.","Schloss Esterházy gilt als eines der schönsten Barockschlösser Österreichs.","Die Bergkirche (Haydnkirche) beherbergt das kunstvolle Haydn-Mausoleum.","Das Jüdische Museum dokumentiert die reiche Geschichte der einstigen jüdischen Gemeinde.","Die Stadt liegt inmitten des bedeutenden burgenländischen Weinbaugebietes.","Der Schlosspark Esterházy ist ein weitläufiger, wunderschöner Landschaftsgarten.","Wurde 1925 zum Sitz der burgenländischen Landesregierung bestimmt.","Der Kalvarienberg neben der Bergkirche ist ein beeindruckendes barockes Kunstwerk."], hu: ["Kismarton mintegy 15 000 lakosával Ausztria legkisebb tartományi fővárosa.","Joseph Haydn itt töltötte élete és alkotómunkája nagy részét.","A Haydn-ház ma egy, az életét bemutató múzeum.","Az Esterházy-kastély Ausztria egyik legszebb barokk kastélyának számít.","A Hegyi templom (Haydn-templom) ad otthont a díszes Haydn-mauzóleumnak.","A Zsidó Múzeum az egykori zsidó közösség gazdag történelmét dokumentálja.","A város a jelentős burgenlandi borvidék szívében található.","Az Esterházy-kastélypark egy kiterjedt, gyönyörű tájkert.","1925-ben jelölték ki a burgenlandi tartományi kormányzat székhelyének.","A Hegyi templom melletti Kálvária-hegy lenyűgöző barokk műalkotás."], ro: ["Cu aproximativ 15.000 de locuitori, Eisenstadt este cea mai mică capitală de stat din Austria.","Joseph Haydn și-a petrecut mare parte din viață și a lucrat aici.","Casa Haydn este astăzi un muzeu dedicat vieții sale.","Palatul Esterházy este considerat unul dintre cele mai frumoase palate baroce din Austria.","Biserica de pe Munte (Haydnkirche) găzduiește mausoleul elaborat al lui Haydn.","Muzeul Evreiesc documentează istoria bogată a fostei comunități evreiești.","Orașul este situat în inima importantei regiuni viticole Burgenland.","Parcul Palatului Esterházy este o grădină peisagistică vastă și frumoasă.","A fost desemnat sediul guvernului statului Burgenland în 1925.","Muntele Calvarului de lângă Biserica de pe Munte este o operă de artă barocă impresionantă."], en: ["With around 15,000 inhabitants, Eisenstadt is the smallest state capital in Austria.","Joseph Haydn spent a large part of his life and work here.","The Haydn House is today a museum about his life.","Esterházy Palace is considered one of the most beautiful Baroque palaces in Austria.","The Bergkirche (Haydn Church) houses the ornate Haydn Mausoleum.","The Jewish Museum documents the rich history of the former Jewish community.","The city is located in the middle of the important Burgenland wine-growing region.","The Esterházy Palace Park is a vast, beautiful landscape garden.","Was designated the seat of the Burgenland state government in 1925.","The Calvary mountain next to the Bergkirche is an impressive piece of Baroque art."] }
  },
  {
    id: "AT-StPolten", type: "city", parent: "AT-3", coords: [15.6333, 48.2],
    name: { de: "St. Pölten", hu: "St. Pölten", ro: "St. Pölten", en: "St. Pölten" },
    image: "/geo-images/austria/st-p-lten.webp",
    description: { de: "St. Pölten, die charmante Hauptstadt Niederösterreichs, blickt auf eine faszinierende Geschichte als eine der ältesten Städte Österreichs zurück. Gleichzeitig ist sie die jüngste Landeshauptstadt, da sie diesen Titel erst 1986 von Wien übernahm. Die Stadt präsentiert einen spannenden architektonischen Mix: Während die historische Altstadt mit prachtvollen barocken Bauwerken, romantischen Plätzen und einem eindrucksvollen Dom glänzt, symbolisiert das Regierungsviertel mit seiner modernen, avantgardistischen Architektur den Aufbruch in die Zukunft. Eingebettet in das fruchtbare Alpenvorland und nah an der Wachau gelegen, ist St. Pölten ein aufstrebendes kulturelles Zentrum, das durch das renommierte Festspielhaus und eine lebendige Veranstaltungsszene bereichert wird.", hu: "St. Pölten, Alsó-Ausztria bájos fővárosa, Ausztria egyik legrégebbi városaként lenyűgöző történelemre tekinthet vissza. Ugyanakkor ez a legfiatalabb tartományi főváros is, hiszen ezt a címet csak 1986-ban vette át Bécstől. A város izgalmas építészeti keveréket mutat be: míg a történelmi óváros pompás barokk épületekkel, romantikus terekkel és egy lenyűgöző dóm épületével büszkélkedhet, addig a kormányzati negyed modern, avantgárd építészetével a jövőbe való indulást szimbolizálja. A termékeny Alpokalján, a Wachau közelében fekvő St. Pölten egy feltörekvő kulturális központ, amelyet a híres Festspielhaus (Fesztiválpalota) és az élénk rendezvényi élet is gazdagít.", ro: "St. Pölten, fermecătoarea capitală a Austriei Inferioare, are o istorie fascinantă fiind unul dintre cele mai vechi orașe din Austria. În același timp, este cea mai tânără capitală de stat, preluând acest titlu de la Viena abia în 1986. Orașul prezintă un mix arhitectural captivant: în timp ce centrul istoric strălucește cu clădiri baroce magnifice, piețe romantice și o catedrală impresionantă, cartierul guvernamental, cu arhitectura sa modernă, de avangardă, simbolizează un salt spre viitor. Situat la poalele fertile ale Alpilor și aproape de regiunea Wachau, St. Pölten este un centru cultural în plină ascensiune, îmbogățit de renumita Festspielhaus (Sala de Festivaluri) și de o scenă de evenimente vibrantă.", en: "St. Pölten, the charming capital of Lower Austria, looks back on a fascinating history as one of the oldest cities in Austria. At the same time, it is the youngest state capital, having only taken over this title from Vienna in 1986. The city presents an exciting architectural mix: while the historic old town shines with magnificent Baroque buildings, romantic squares, and an impressive cathedral, the government district, with its modern, avant-garde architecture, symbolizes a leap into the future. Nestled in the fertile Alpine foothills and located close to the Wachau, St. Pölten is an emerging cultural center, enriched by the renowned Festspielhaus and a vibrant events scene." },
    facts: { de: ["St. Pölten erhielt das Stadtrecht bereits im Jahr 1159.","Die Stadt wurde 1986 nach einer Volksbefragung zur Landeshauptstadt gewählt.","Das moderne Landhausviertel wurde vom Architekten Ernst Hoffmann entworfen.","Der St. Pöltner Dom ist eine ehemalige Augustiner-Chorherren-Stiftskirche.","Jakob Prandtauer, ein berühmter Architekt, prägte das barocke Stadtbild stark.","Das Festspielhaus St. Pölten ist ein bedeutendes Zentrum für zeitgenössischen Tanz.","Der Klangturm bietet als Aussichtsplattform einen weiten Blick über die Stadt.","Die Traisen, ein Nebenfluss der Donau, fließt direkt durch die Stadt.","Das Frequency Festival, eines der größten Musikfestivals Österreichs, findet hier statt.","Zahlreiche Badeseen, wie die Viehofner Seen, bieten Naherholung."], hu: ["St. Pölten már 1159-ben városi rangot kapott.","A várost 1986-ban, egy népszavazást követően választották tartományi fővárossá.","A modern kormányzati negyedet (Landhausviertel) Ernst Hoffmann építész tervezte.","A st. pölteni dóm egykori ágoston-rendi kanonoki apátsági templom.","Jakob Prandtauer híres építész erősen rányomta bélyegét a barokk városképre.","A Festspielhaus St. Pölten a kortárs táncművészet jelentős központja.","A Klangturm (Hangtorony) kilátóként széles panorámát nyújt a város felett.","A Traisen, a Duna egyik mellékfolyója közvetlenül átszeli a várost.","Itt rendezik meg a Frequency Fesztivált, Ausztria egyik legnagyobb zenei fesztiválját.","Számos fürdőtó, mint például a Viehofner tavak kínálnak kikapcsolódási lehetőséget."], ro: ["St. Pölten a primit drepturile de oraș încă din 1159.","Orașul a fost ales capitală a statului în 1986, în urma unui referendum.","Modernul cartier guvernamental (Landhausviertel) a fost proiectat de arhitectul Ernst Hoffmann.","Catedrala din St. Pölten este o fostă biserică a colegiului canonicilor augustinieni.","Jakob Prandtauer, un arhitect celebru, a influențat puternic peisajul urban baroc.","Festspielhaus St. Pölten este un centru important pentru dansul contemporan.","Klangturm (Turnul Sunetului) oferă o vedere panoramică largă asupra orașului, servind ca platformă de observare.","Traisen, un afluent al Dunării, curge direct prin oraș.","Festivalul Frequency, unul dintre cele mai mari festivaluri de muzică din Austria, are loc aici.","Numeroase lacuri de înot, precum Viehofner Seen, oferă recreere locală."], en: ["St. Pölten received its town charter as early as 1159.","The city was chosen as the state capital in 1986 following a referendum.","The modern government district (Landhausviertel) was designed by architect Ernst Hoffmann.","The St. Pölten Cathedral is a former Augustinian canons collegiate church.","Jakob Prandtauer, a famous architect, strongly influenced the Baroque cityscape.","The Festspielhaus St. Pölten is an important center for contemporary dance.","The Klangturm (Sound Tower) serves as an observation deck offering a wide view over the city.","The Traisen, a tributary of the Danube, flows right through the city.","The Frequency Festival, one of Austria's largest music festivals, takes place here.","Numerous bathing lakes, such as the Viehofner Seen, offer local recreation."] }
  },
  {
    id: "AT-Schoenbrunn", type: "landmark", parent: "AT-9", coords: [16.3122, 48.1848],
    name: { de: "Schloss Schönbrunn", hu: "Schönbrunni kastély", ro: "Palatul Schönbrunn", en: "Schönbrunn Palace" },
    image: "/geo-images/austria/sch-nbrunn-palace.webp",
    description: {"de":"Schloss Schönbrunn in Wien ist das größte Schloss Österreichs und eines der bedeutendsten Kulturgüter des Landes. Als ehemalige kaiserliche Sommerresidenz der Habsburger, insbesondere unter Kaiserin Maria Theresia, erstrahlt das barocke Meisterwerk in seinem charakteristischen 'Schönbrunner Gelb'. Der riesige, symmetrisch angelegte Schlosspark mit der majestätischen Gloriette, den kunstvollen Brunnen und den römischen Ruinen lädt zum Flanieren ein. Schönbrunn ist seit 1996 UNESCO-Weltkulturerbe und zieht jährlich Millionen von Besuchern an. Auf dem weitläufigen Gelände befindet sich zudem der Tiergarten Schönbrunn, der älteste noch bestehende Zoo der Welt.","hu":"A bécsi Schönbrunni kastély Ausztria legnagyobb kastélya és az ország egyik legjelentősebb kulturális értéke. A Habsburgok, különösen Mária Terézia császárnő egykori császári nyári rezidenciájaként a barokk mestermű a jellegzetes 'Schönbrunn-sárga' színben pompázik. A hatalmas, szimmetrikusan kialakított kastélypark a fenséges Gloriette-tel, a művészi szökőkutakkal és a római romokkal sétára csábít. Schönbrunn 1996 óta az UNESCO világörökség része, és évente több millió látogatót vonz. A kiterjedt területen található továbbá a Schönbrunni Állatkert is, amely a világ legrégebbi, ma is működő állatkertje.","ro":"Palatul Schönbrunn din Viena este cel mai mare palat din Austria și unul dintre cele mai importante bunuri culturale ale țării. Ca fostă reședință imperială de vară a Habsburgilor, în special sub împărăteasa Maria Tereza, capodopera barocă strălucește în caracteristicul său „galben de Schönbrunn”. Imensul parc al palatului, amenajat simetric, cu maiestuoasa Gloriette, fântânile artistice și ruinele romane te invită la plimbare. Schönbrunn face parte din Patrimoniul Mondial UNESCO din 1996 și atrage anual milioane de vizitatori. Pe terenul extins se află și Grădina Zoologică Schönbrunn, cea mai veche grădină zoologică existentă din lume.","en":"Schönbrunn Palace in Vienna is the largest palace in Austria and one of the country's most important cultural assets. As the former imperial summer residence of the Habsburgs, especially under Empress Maria Theresa, the Baroque masterpiece shines in its characteristic 'Schönbrunn Yellow'. The huge, symmetrically landscaped palace park with the majestic Gloriette, artistic fountains, and Roman ruins invites visitors to stroll. Schönbrunn has been a UNESCO World Heritage site since 1996 and attracts millions of visitors annually. The extensive grounds also house the Schönbrunn Zoo, the oldest existing zoo in the world."}, facts: {"de":["Schönbrunn hat insgesamt beeindruckende 1.441 Zimmer.","Kaiser Franz Joseph I. wurde hier geboren und starb auch im Schloss.","Die Gloriette bietet einen fantastischen Blick über Wien.","Im Spiegelsaal musizierte der sechsjährige Wolfgang Amadeus Mozart.","Teil des Komplexes ist das Palmenhaus und das Wüstenhaus.","Der Tiergarten Schönbrunn ist der älteste Zoo der Welt (gegründet 1752).","Der Schlosspark ist der größte Park in Wien.","Der Schlossname geht auf einen schönen Brunnen ('schöner Brunnen') zurück.","Wurde im Zweiten Weltkrieg durch Bomben stark beschädigt, aber originalgetreu restauriert.","In der Wagenburg werden prunkvolle imperiale Kutschen ausgestellt."],"hu":["Schönbrunn összesen lenyűgöző 1441 szobával rendelkezik.","Ferenc József császár itt született, és a kastélyban is halt meg.","A Gloriette fantasztikus kilátást nyújt Bécsre.","A Tükörteremben zenélt a hatéves Wolfgang Amadeus Mozart.","A komplexum része a Pálmaház és a Sivatagi ház is.","A Schönbrunni Állatkert a világ legrégebbi állatkertje (1752-ben alapították).","A kastélypark Bécs legnagyobb parkja.","A kastély neve egy szép kútból ('schöner Brunnen') ered.","A második világháborúban bombák súlyosan megrongálták, de hűen helyreállították.","A Wagenburgban pompás császári hintókat állítanak ki."],"ro":["Schönbrunn are un număr impresionant de 1.441 de camere.","Împăratul Franz Joseph I s-a născut și a murit în acest palat.","Gloriette oferă o priveliște fantastică asupra Vienei.","Wolfgang Amadeus Mozart, la vârsta de șase ani, a cântat în Sala Oglinzilor.","Casa Palmierilor (Palmenhaus) și Casa Deșertului (Wüstenhaus) fac parte din complex.","Grădina Zoologică Schönbrunn este cea mai veche din lume (fondată în 1752).","Parcul palatului este cel mai mare parc din Viena.","Numele palatului provine de la o fântână frumoasă („schöner Brunnen”).","A fost grav avariat de bombe în al Doilea Război Mondial, dar a fost restaurat fidel.","În Wagenburg sunt expuse trăsuri imperiale magnifice."],"en":["Schönbrunn has an impressive total of 1,441 rooms.","Emperor Franz Joseph I was born and died in the palace.","The Gloriette offers a fantastic view over Vienna.","The six-year-old Wolfgang Amadeus Mozart performed in the Hall of Mirrors.","The Palm House and the Desert House are part of the complex.","The Schönbrunn Zoo is the oldest zoo in the world (founded in 1752).","The palace park is the largest park in Vienna.","The palace's name goes back to a beautiful well ('schöner Brunnen').","Was heavily damaged by bombs in World War II but faithfully restored.","The Wagenburg exhibits magnificent imperial carriages."]}
  },
  {
    id: "AT-Hofburg", type: "landmark", parent: "AT-9", coords: [16.3653, 48.2065],
    name: { de: "Hofburg", hu: "Hofburg", ro: "Hofburg", en: "Hofburg Palace" },
    image: "/geo-images/austria/hofburg-palace.webp",
    description: {"de":"Die Hofburg im Herzen Wiens war über sechs Jahrhunderte lang die Hauptresidenz und das Machtzentrum der mächtigen Habsburger-Dynastie. Heute beherbergt der weitläufige Palastkomplex den Amtssitz des österreichischen Bundespräsidenten sowie zahlreiche Museen und kulturelle Institutionen. Die riesige Anlage, die laufend erweitert wurde, spiegelt verschiedene Architekturstile von der Gotik bis zum Historismus wider. Besucher können die kaiserlichen Appartements von Kaiser Franz Joseph und Kaiserin Sisi, das faszinierende Sisi-Museum und die weltberühmte Spanische Hofreitschule besichtigen. Die Hofburg ist ein unverzichtbares Monument der österreichischen Geschichte und Kultur.","hu":"A bécsi Hofburg több mint hat évszázadon át a hatalmas Habsburg-dinasztia fő rezidenciája és hatalmi központja volt. Ma a kiterjedt palotakomplexum az osztrák szövetségi elnök hivatalának, valamint számos múzeumnak és kulturális intézménynek ad otthont. A folyamatosan bővített hatalmas létesítmény a gótikától a historizmusig különböző építészeti stílusokat tükröz. A látogatók megtekinthetik Ferenc József császár és Sisi császárné császári lakosztályait, a lenyűgöző Sisi Múzeumot és a világhírű Spanyol Lovasiskolát. A Hofburg az osztrák történelem és kultúra kihagyhatatlan műemléke.","ro":"Hofburg, situat în inima Vienei, a fost timp de peste șase secole reședința principală și centrul de putere al puternicei dinastii de Habsburg. Astăzi, vastul complex de palate găzduiește reședința oficială a președintelui federal austriac, precum și numeroase muzee și instituții culturale. Imensul complex, care a fost extins în mod continuu, reflectă diverse stiluri arhitecturale, de la gotic la istoricism. Vizitatorii pot explora apartamentele imperiale ale Împăratului Franz Joseph și ale Împărătesei Sisi, fascinantul Muzeu Sisi și faimoasa Școală Spaniolă de Călărie. Hofburg este un monument indispensabil al istoriei și culturii austriece.","en":"The Hofburg in the heart of Vienna was the main residence and center of power of the mighty Habsburg dynasty for over six centuries. Today, the extensive palace complex houses the official residence of the Austrian Federal President, as well as numerous museums and cultural institutions. The huge complex, which was continuously expanded, reflects various architectural styles from Gothic to Historicism. Visitors can explore the imperial apartments of Emperor Franz Joseph and Empress Sisi, the fascinating Sisi Museum, and the world-famous Spanish Riding School. The Hofburg is an indispensable monument to Austrian history and culture."}, facts: {"de":["Mit rund 2.600 Räumen ist die Hofburg einer der größten Palastkomplexe Europas.","Beherbergt die Schatzkammer mit der Krone des Heiligen Römischen Reiches.","In der Spanischen Hofreitschule treten die berühmten Lipizzaner auf.","Die Österreichische Nationalbibliothek in der Neuen Burg hat einen prachtvollen Prunksaal.","Das Sisi-Museum zeigt persönliche Gegenstände der Kaiserin Elisabeth.","Die Heldenplatz-Fassade in der Neuen Burg ist historisch bedeutsam.","Die Burgkapelle ist die älteste erhaltene Kirche der Hofburg.","War das Zentrum des österreichisch-ungarischen Reiches.","Hier hat der österreichische Bundespräsident seinen offiziellen Amtssitz.","Der Komplex wurde über mehr als 700 Jahre kontinuierlich ausgebaut."],"hu":["Mintegy 2600 szobájával a Hofburg Európa egyik legnagyobb palotakomplexuma.","Itt található a Kincstár a Német-római Birodalom koronájával.","A Spanyol Lovasiskolában lépnek fel a híres lipicai lovak.","A Neue Burgban található Osztrák Nemzeti Könyvtárnak pompás díszterme van.","A Sisi Múzeum Erzsébet császárné személyes tárgyait mutatja be.","A Neue Burg Hősök tere (Heldenplatz) felőli homlokzata történelmi jelentőségű.","A Várkápolna (Burgkapelle) a Hofburg legrégebbi fennmaradt temploma.","Az Osztrák-Magyar Monarchia központja volt.","Itt van az osztrák szövetségi elnök hivatalos székhelye.","A komplexumot több mint 700 éven keresztül folyamatosan bővítették."],"ro":["Cu aproximativ 2.600 de camere, Hofburg este unul dintre cele mai mari complexe de palate din Europa.","Găzduiește Trezoreria (Schatzkammer) cu Coroana Sfântului Imperiu Roman.","Celebrii cai lipițani concertează la Școala Spaniolă de Călărie.","Biblioteca Națională a Austriei din Neue Burg are o Sală de Stat (Prunksaal) magnifică.","Muzeul Sisi expune obiecte personale ale Împărătesei Elisabeta.","Fațada către Heldenplatz (Piața Eroilor) din Neue Burg are o semnificație istorică.","Capela Palatului este cea mai veche biserică păstrată din Hofburg.","A fost centrul Imperiului Austro-Ungar.","Președintele federal austriac are aici reședința oficială.","Complexul a fost extins în mod continuu pe parcursul a peste 700 de ani."],"en":["With around 2,600 rooms, the Hofburg is one of the largest palace complexes in Europe.","Houses the Imperial Treasury with the Crown of the Holy Roman Empire.","The famous Lipizzaner horses perform in the Spanish Riding School.","The Austrian National Library in the Neue Burg has a magnificent State Hall (Prunksaal).","The Sisi Museum displays personal items of Empress Elisabeth.","The Heldenplatz facade in the Neue Burg is historically significant.","The Palace Chapel is the oldest preserved church in the Hofburg.","Was the center of the Austro-Hungarian Empire.","The Austrian Federal President has his official residence here.","The complex was continuously expanded over more than 700 years."]}
  },
  {
    id: "AT-Stephansdom", type: "landmark", parent: "AT-9", coords: [16.3731, 48.2085],
    name: { de: "Stephansdom", hu: "Szent István-székesegyház", ro: "Catedrala Sfântul Ștefan", en: "St. Stephen's Cathedral" },
    image: "/geo-images/austria/st-stephen-s-cathedral.webp",
    description: {"de":"Der Stephansdom, von den Wienern liebevoll 'Steffl' genannt, ist das wichtigste Wahrzeichen Wiens und das bedeutendste gotische Bauwerk Österreichs. Mit seinem 136 Meter hohen Südturm überragt er das historische Stadtzentrum und prägt die Silhouette der Stadt. Das farbenprächtige Dach des Doms, das aus fast einer Viertelmillion glasierter Dachziegel besteht und den kaiserlichen Doppeladler zeigt, ist weltberühmt. Im Inneren beeindruckt die Kathedrale durch kunstvolle Altäre, tiefe Katakomben und eine tief spirituelle Atmosphäre. Als Sitz des Erzbischofs von Wien ist der Stephansdom seit Jahrhunderten das religiöse Zentrum des Landes.","hu":"A bécsiek által szeretetteljesen 'Steffl'-nek nevezett Szent István-dóm (Stephansdom) Bécs legfontosabb jelképe és Ausztria legjelentősebb gótikus épülete. 136 méter magas déli tornyával a történelmi városközpont fölé magasodik, és meghatározza a város sziluettjét. A dóm színpompás teteje, amely közel negyedmillió mázas tetőcserépből áll, és a császári kétfejű sast ábrázolja, világhírű. A katedrális belseje művészi oltárokkal, mély katakombákkal és mélyen spirituális légkörrel nyűgözi le a látogatókat. Bécs érsekének székhelyeként a Szent István-dóm évszázadok óta az ország vallási központja.","ro":"Catedrala Sf. Ștefan (Stephansdom), numită cu afecțiune „Steffl” de către vienezi, este cel mai important simbol al Vienei și cea mai semnificativă clădire gotică din Austria. Cu Turnul său de Sud de 136 de metri înălțime, domină centrul istoric al orașului și definește silueta acestuia. Acoperișul colorat al catedralei, format din aproape un sfert de milion de țigle smălțuite care înfățișează vulturul imperial cu două capete, este renumit în întreaga lume. În interior, catedrala impresionează prin altare artistice, catacombe adânci și o atmosferă profund spirituală. Ca sediu al Arhiepiscopului Vienei, Catedrala Sf. Ștefan a fost centrul religios al țării timp de secole.","en":"St. Stephen's Cathedral (Stephansdom), affectionately called 'Steffl' by the Viennese, is Vienna's most important landmark and Austria's most significant Gothic building. With its 136-meter-high South Tower, it towers over the historic city center and shapes the city's skyline. The colorful roof of the cathedral, consisting of almost a quarter of a million glazed roof tiles and depicting the imperial double-headed eagle, is world-famous. Inside, the cathedral impresses with its ornate altars, deep catacombs, and a profoundly spiritual atmosphere. As the seat of the Archbishop of Vienna, St. Stephen's Cathedral has been the religious center of the country for centuries."}, facts: {"de":["Der Südturm ('Steffl') ist exakt 136,4 Meter hoch.","Im Nordturm hängt die Pummerin, Österreichs größte Glocke.","Das farbige Dachdekor besteht aus über 230.000 Ziegeln.","In den Katakomben ruhen die Innereien vieler Habsburger Kaiser.","Der Bau des heutigen gotischen Doms begann im 14. Jahrhundert.","Wolfgang Amadeus Mozart heiratete in dieser Kathedrale.","Der Dom wurde beim Stadtbrand 1945 schwer beschädigt und rasch wieder aufgebaut.","Es führen genau 343 Stufen hinauf in die Türmerstube des Südturms.","Der Dom ist dem heiligen Stephanus, dem ersten christlichen Märtyrer, geweiht.","Er ist das geografische Zentrum der Stadt Wien."],"hu":["A déli torony ('Steffl') pontosan 136,4 méter magas.","Az északi toronyban lóg a Pummerin, Ausztria legnagyobb harangja.","A színes tetődíszítés több mint 230 000 cserépből áll.","A katakombákban számos Habsburg császár belső szervei nyugszanak.","A mai gótikus dóm építése a 14. században kezdődött.","Wolfgang Amadeus Mozart ebben a katedrálisban kötött házasságot.","A dóm az 1945-ös városi tűzvészben súlyosan megsérült, de gyorsan újjáépítették.","Pontosan 343 lépcsőfok vezet fel a déli torony őrszobájába.","A dómot Szent Istvánnak, az első keresztény vértanúnak szentelték.","A dóm Bécs városának földrajzi központja."],"ro":["Turnul de Sud („Steffl”) are exact 136,4 metri înălțime.","În Turnul de Nord se află Pummerin, cel mai mare clopot din Austria.","Decorul colorat al acoperișului este format din peste 230.000 de țigle.","Măruntaiele multor împărați habsburgici se odihnesc în catacombe.","Construcția actualei catedrale gotice a început în secolul al XIV-lea.","Wolfgang Amadeus Mozart s-a căsătorit în această catedrală.","Catedrala a fost grav avariată în incendiul orașului din 1945 și reconstruită rapid.","Există exact 343 de trepte care duc la camera paznicului din Turnul de Sud.","Catedrala este dedicată Sfântului Ștefan, primul martir creștin.","Este centrul geografic al orașului Viena."],"en":["The South Tower ('Steffl') is exactly 136.4 meters high.","The North Tower houses the Pummerin, Austria's largest bell.","The colorful roof decor consists of over 230,000 tiles.","The entrails of many Habsburg emperors rest in the catacombs.","Construction of the current Gothic cathedral began in the 14th century.","Wolfgang Amadeus Mozart was married in this cathedral.","The cathedral was severely damaged in the 1945 city fire and quickly rebuilt.","There are exactly 343 steps leading up to the watchman's room in the South Tower.","The cathedral is dedicated to Saint Stephen, the first Christian martyr.","It marks the geographical center of the city of Vienna."]}
  },
  {
    id: "AT-Mozarthaus", type: "landmark", parent: "AT-5", coords: [13.0444, 47.8005],
    name: { de: "Mozarts Geburtshaus", hu: "Mozart szülőháza", ro: "Casa natală a lui Mozart", en: "Mozart's Birthplace" },
    image: "/geo-images/austria/mozart-s-birthplace.webp",
    description: {"de":"Das Mozarthaus in der Salzburger Getreidegasse 9 ist der weltberühmte Ort, an dem am 27. Januar 1756 das musikalische Genie Wolfgang Amadeus Mozart das Licht der Welt erblickte. Die Familie Mozart lebte in einer Wohnung im dritten Stock dieses bürgerlichen Hauses. Heute ist das historische Gebäude ein Magnet für Klassikfans und beherbergt ein faszinierendes Museum, das Einblicke in Mozarts frühe Jahre bietet. Originale Urkunden, historische Instrumente, Familienporträts und Alltagsgegenstände dokumentieren die außergewöhnliche Kindheit des Wunderkindes und das Leben seiner Familie im 18. Jahrhundert.","hu":"A salzburgi Getreidegasse 9. szám alatt található Mozart-ház az a világhírű hely, ahol 1756. január 27-én a zenei zseni, Wolfgang Amadeus Mozart meglátta a napvilágot. A Mozart család ennek a polgári háznak a harmadik emeleti lakásában élt. Ma a történelmi épület a komolyzene rajongóinak mágneseként szolgál, és egy lenyűgöző múzeumnak ad otthont, amely bepillantást enged Mozart korai éveibe. Eredeti oklevelek, történelmi hangszerek, családi portrék és mindennapi tárgyak dokumentálják a csodagyerek rendkívüli gyermekkorát és családjának 18. századi életét.","ro":"Casa Mozart, situată la numărul 9 pe Getreidegasse în Salzburg, este locul faimos în întreaga lume unde s-a născut geniul muzical Wolfgang Amadeus Mozart pe 27 ianuarie 1756. Familia Mozart a locuit într-un apartament la etajul al treilea al acestei case burgheze. Astăzi, clădirea istorică este un magnet pentru fanii muzicii clasice și găzduiește un muzeu fascinant care oferă o perspectivă asupra primilor ani ai lui Mozart. Documente originale, instrumente istorice, portrete de familie și obiecte de zi cu zi documentează copilăria extraordinară a copilului minune și viața familiei sale în secolul al XVIII-lea.","en":"The Mozart House at Getreidegasse 9 in Salzburg is the world-famous place where the musical genius Wolfgang Amadeus Mozart was born on January 27, 1756. The Mozart family lived in an apartment on the third floor of this bourgeois house. Today, the historical building is a magnet for classical music fans and houses a fascinating museum offering insights into Mozart's early years. Original documents, historical instruments, family portraits, and everyday objects document the extraordinary childhood of the child prodigy and his family's life in the 18th century."}, facts: {"de":["Wolfgang Amadeus Mozart wurde hier 1756 geboren.","Die Familie Mozart lebte 26 Jahre lang im 3. Stock des Hauses.","Das Museum zeigt Mozarts Kindergeige und sein Clavichord.","Das Gebäude selbst existierte bereits im 12. Jahrhundert.","Die Ausstellung beleuchtet das Leben in Salzburg im 18. Jahrhundert.","Zählt zu den meistbesuchten Museen in ganz Österreich.","Wird von der Internationalen Stiftung Mozarteum betreut.","Das Haus zeichnet sich durch seine historische gelbe Fassade aus.","Mozarts Schwester, 'Nannerl', wuchs hier ebenfalls auf.","Das berühmte unvollendete Mozart-Portrait von Joseph Lange ist hier zu sehen."],"hu":["Itt született Wolfgang Amadeus Mozart 1756-ban.","A Mozart család 26 évig élt a ház 3. emeletén.","A múzeum bemutatja Mozart gyermekhegedűjét és klavikordját.","Maga az épület már a 12. században is létezett.","A kiállítás a 18. századi salzburgi életet mutatja be.","Egész Ausztria leglátogatottabb múzeumai közé tartozik.","A Nemzetközi Mozarteum Alapítvány gondozza.","A ház jellegzetes sárga történelmi homlokzatáról ismerhető fel.","Mozart nővére, 'Nannerl' is itt nőtt fel.","Joseph Lange híres, befejezetlen Mozart-portréja itt látható."],"ro":["Wolfgang Amadeus Mozart s-a născut aici în 1756.","Familia Mozart a locuit la etajul 3 al casei timp de 26 de ani.","Muzeul expune vioara de copil și clavicordul lui Mozart.","Clădirea în sine exista deja în secolul al XII-lea.","Expoziția ilustrează viața în Salzburg în secolul al XVIII-lea.","Este printre cele mai vizitate muzee din toată Austria.","Este gestionat de Fundația Internațională Mozarteum.","Casa se remarcă prin fațada sa istorică galbenă.","Sora lui Mozart, „Nannerl”, a crescut și ea aici.","Celebrul portret neterminat al lui Mozart, realizat de Joseph Lange, poate fi văzut aici."],"en":["Wolfgang Amadeus Mozart was born here in 1756.","The Mozart family lived on the 3rd floor of the house for 26 years.","The museum displays Mozart's childhood violin and clavichord.","The building itself existed as early as the 12th century.","The exhibition highlights life in Salzburg in the 18th century.","It is one of the most visited museums in all of Austria.","Maintained by the International Mozarteum Foundation.","The house is notable for its historic yellow facade.","Mozart's sister, 'Nannerl', also grew up here.","Joseph Lange's famous unfinished portrait of Mozart is on display here."]}
  },
  {
    id: "AT-Mirabell", type: "landmark", parent: "AT-5", coords: [13.0416, 47.8055],
    name: { de: "Schloss Mirabell", hu: "Mirabell-kastély", ro: "Palatul Mirabell", en: "Mirabell Palace" },
    image: "/geo-images/austria/mirabell-palace.webp",
    description: {"de":"Schloss Mirabell ist ein Meisterwerk barocker Baukunst in Salzburg, das 1606 vom Fürsterzbischof Wolf Dietrich von Raitenau für seine Geliebte Salome Alt erbaut wurde. Es besticht durch seine prächtige Marmortreppe, den reich verzierten Marmorsaal – einen der schönsten Trauungssäle der Welt – und seine elegante Architektur. Der weitläufige, symmetrische Mirabellgarten, der das Schloss umgibt, bietet kunstvolle Blumenbeete, den Pegasusbrunnen und eine beeindruckende Blickachse hinauf zur Festung Hohensalzburg. Weltweite Berühmtheit erlangten das Schloss und der Garten auch als einer der Hauptdrehorte des Hollywood-Musicals 'The Sound of Music'.","hu":"A Mirabell-kastély a barokk építészet egyik salzburgi remekműve, amelyet 1606-ban Wolf Dietrich von Raitenau hercegérsek építtetett szeretőjének, Salome Alt-nak. Lenyűgöző pompás márványlépcsőjével, gazdagon díszített Márványtermével – amely a világ egyik legszebb esküvői terme – és elegáns építészetével. A kastélyt körülvevő kiterjedt, szimmetrikus Mirabell-kert (Mirabellgarten) művészi virágágyásokat, a Pegazus-kutat és egy lenyűgöző látengelyt kínál, amely egyenesen a Hohensalzburg várára néz. A kastély és a kert világhírnevet szerzett 'A muzsika hangja' (The Sound of Music) című hollywoodi musical egyik fő forgatási helyszíneként is.","ro":"Palatul Mirabell este o capodoperă a arhitecturii baroce din Salzburg, construit în 1606 de prințul-arhiepiscop Wolf Dietrich von Raitenau pentru iubita sa, Salome Alt. Impresionează prin magnifica sa scară de marmură, Sala de Marmură bogat decorată – una dintre cele mai frumoase săli de nunți din lume – și arhitectura sa elegantă. Grădina Mirabell vastă, simetrică, care înconjoară palatul, oferă paturi de flori artistice, Fântâna Pegasus și o axă vizuală impresionantă către Fortăreața Hohensalzburg. Palatul și grădina au câștigat faimă mondială și ca una dintre principalele locații de filmare pentru musicalul de la Hollywood „Sunetul muzicii”.","en":"Mirabell Palace is a masterpiece of Baroque architecture in Salzburg, built in 1606 by Prince-Archbishop Wolf Dietrich von Raitenau for his mistress Salome Alt. It impresses with its magnificent marble staircase, the richly decorated Marble Hall – one of the most beautiful wedding halls in the world – and its elegant architecture. The extensive, symmetrical Mirabell Garden surrounding the palace features ornate flower beds, the Pegasus Fountain, and an impressive visual axis looking up to the Hohensalzburg Fortress. The palace and garden also gained worldwide fame as one of the main filming locations for the Hollywood musical 'The Sound of Music'."}, facts: {"de":["Das Schloss trug ursprünglich den Namen Schloss Altenau.","Im Marmorsaal haben schon Wolfgang Amadeus Mozart und sein Vater musiziert.","Der Mirabellgarten wurde 1690 von Erzbischof Johann Ernst von Thun umgestaltet.","Der Zwergelgarten im Park beherbergt groteske Marmorzwerge aus dem 18. Jahrhundert.","Die Marmortreppe ist von Engeln des Bildhauers Georg Raphael Donner verziert.","Heute beherbergt das Schloss die Büros des Salzburger Bürgermeisters.","Ist ein beliebter Drehort, unter anderem für 'The Sound of Music' (Lied 'Do-Re-Mi').","Das Heckentheater im Garten ist eines der ältesten erhaltenen Naturtheater nördlich der Alpen.","Bietet einen der schönsten Panoramablicke auf den Salzburger Dom und die Festung.","Die gesamte Anlage gehört zum UNESCO-Weltkulturerbe der Salzburger Altstadt."],"hu":["A kastélyt eredetileg Altenau kastélynak (Schloss Altenau) hívták.","A Márványteremben egykor Wolfgang Amadeus Mozart és édesapja is zenélt.","A Mirabell-kertet 1690-ben Johann Ernst von Thun érsek alakíttatta át.","A parkban található Törpekert (Zwergelgarten) 18. századi groteszk márványtörpéket rejt.","A márványlépcsőt Georg Raphael Donner szobrászművész angyalai díszítik.","Ma a kastély ad otthont a salzburgi polgármester hivatalának.","Kedvelt forgatási helyszín, többek között 'A muzsika hangja' ('Do-Re-Mi' dal) itt forgott.","A kertben található sövényszínház az egyik legrégebbi fennmaradt természeti színház az Alpoktól északra.","Az egyik legszebb panorámás kilátást nyújtja a salzburgi dómra és a várra.","Az egész komplexum a salzburgi óváros UNESCO világörökségének része."],"ro":["Palatul a fost numit inițial Palatul Altenau.","Wolfgang Amadeus Mozart și tatăl său au cântat odată în Sala de Marmură.","Grădina Mirabell a fost reproiectată în 1690 de arhiepiscopul Johann Ernst von Thun.","Grădina Piticilor (Zwergelgarten) din parc adăpostește pitici grotești din marmură din secolul al XVIII-lea.","Scara de marmură este decorată cu îngeri de sculptorul Georg Raphael Donner.","Astăzi, palatul găzduiește birourile primarului din Salzburg.","Este o locație de filmare populară, inclusiv pentru „Sunetul muzicii” (cântecul „Do-Re-Mi”).","Teatrul de gard viu din grădină este unul dintre cele mai vechi teatre naturale păstrate la nord de Alpi.","Oferă una dintre cele mai frumoase priveliști panoramice asupra Catedralei și Fortăreței din Salzburg.","Întregul complex face parte din Patrimoniul Mondial UNESCO al orașului vechi din Salzburg."],"en":["The palace was originally named Altenau Palace.","Wolfgang Amadeus Mozart and his father once performed in the Marble Hall.","The Mirabell Garden was redesigned in 1690 by Archbishop Johann Ernst von Thun.","The Dwarf Garden in the park houses grotesque 18th-century marble dwarfs.","The marble staircase is decorated with angels by the sculptor Georg Raphael Donner.","Today, the palace houses the offices of the Mayor of Salzburg.","It is a popular filming location, including for 'The Sound of Music' (song 'Do-Re-Mi').","The hedge theater in the garden is one of the oldest preserved natural theaters north of the Alps.","Offers one of the most beautiful panoramic views of the Salzburg Cathedral and Fortress.","The entire complex is part of the UNESCO World Heritage site of the historic center of Salzburg."]}
  },
  {
    id: "AT-Grossglockner", type: "mountain", parent: "AT", coords: [12.6936, 47.0742],
    name: { de: "Großglockner", hu: "Großglockner", ro: "Grossglockner", en: "Grossglockner" },
    image: "/geo-images/austria/grossglockner.webp",
    description: {"de":"Der Großglockner, an der Grenze zwischen Kärnten und Tirol gelegen, ist mit 3.798 Metern der höchste Berg Österreichs und das majestätische Kronjuwel der Hohen Tauern. Sein markanter pyramidenförmiger Gipfel und die Pasterze, der größte Gletscher der Ostalpen, bilden eine atemberaubende, hochalpine Kulisse. Der Berg ist nicht nur ein Paradies für erfahrene Alpinisten und Kletterer, sondern dank der berühmten Großglockner Hochalpenstraße auch für Ausflügler zugänglich, die das faszinierende Alpenpanorama hautnah erleben möchten. Die einzigartige Flora und Fauna rund um den Großglockner ist streng geschützt und bietet Heimat für Steinböcke, Murmeltiere und majestätische Steinadler.","hu":"A Karintia és Tirol határán fekvő Großglockner 3798 méterével Ausztria legmagasabb hegye, és a Magas-Tauern fenséges koronaékszere. Markáns, piramis alakú csúcsa és a Pasterze – a Keleti-Alpok legnagyobb gleccsere – lélegzetelállító magashegyi kulisszát alkotnak. A hegy nemcsak a tapasztalt alpinisták és hegymászók paradicsoma, hanem a híres Großglockner Magasalpesi Útnak (Hochalpenstraße) köszönhetően a kirándulók számára is elérhető, akik testközelből szeretnék megtapasztalni a lenyűgöző alpesi panorámát. A Großglockner körüli egyedülálló növény- és állatvilág szigorúan védett, kőszáli kecskéknek, mormotáknak és fenséges szirti sasoknak ad otthont.","ro":"Grossglockner, situat la granița dintre Carintia și Tirol, este cel mai înalt munte din Austria, având 3.798 de metri, și bijuteria maiestuoasă a lanțului Hohe Tauern. Vârful său distinctiv, în formă de piramidă, și Pasterze, cel mai mare ghețar din Alpii Orientali, formează un fundal alpin de înaltă altitudine, uluitor. Muntele nu este doar un paradis pentru alpiniștii și cățărătorii experimentați, ci este și accesibil turiștilor datorită renumitului Drum Alpin Grossglockner (Hochalpenstraße), care permite vizitatorilor să experimenteze de aproape panorama alpină fascinantă. Flora și fauna unice din jurul Grossglockner sunt strict protejate și oferă un habitat pentru ibecși, marmote și acvile de munte maiestuoase.","en":"The Grossglockner, located on the border between Carinthia and Tyrol, is the highest mountain in Austria at 3,798 meters and the majestic crown jewel of the Hohe Tauern. Its striking pyramid-shaped peak and the Pasterze, the largest glacier in the Eastern Alps, form a breathtaking high-alpine backdrop. The mountain is not only a paradise for experienced alpinists and climbers but is also accessible to excursionists thanks to the famous Grossglockner High Alpine Road, allowing visitors to experience the fascinating alpine panorama up close. The unique flora and fauna around the Grossglockner is strictly protected and provides a habitat for ibexes, marmots, and majestic golden eagles."}, facts: {"de":["Der Großglockner ist mit 3.798 m der höchste Berg Österreichs.","An seinem Fuß liegt die Pasterze, der größte Gletscher Österreichs.","Die Erstbesteigung erfolgte am 28. Juli 1800 durch eine Expedition um Fürstbischof Salm-Reifferscheidt.","Die Grenze zwischen Kärnten und Tirol verläuft direkt über den Gipfel.","Die Großglockner Hochalpenstraße macht ihn für Millionen von Touristen erreichbar.","Liegt im Zentrum des Nationalparks Hohe Tauern.","Besteht hauptsächlich aus Prasinit, einem harten, grünlichen Gestein.","Das berühmte Gipfelkreuz aus Eisen wiegt 300 Kilo und wurde 1880 aufgestellt.","Gilt als einer der prominentesten Berge in den Ostalpen.","Wird jährlich von rund 5.000 Bergsteigern bezwungen."],"hu":["A Großglockner 3798 méterével Ausztria legmagasabb hegye.","Lábánál fekszik a Pasterze, Ausztria legnagyobb gleccsere.","Az első sikeres megmászása 1800. július 28-án történt egy Salm-Reifferscheidt hercegérsek vezette expedíció során.","Karintia és Tirol határa közvetlenül a csúcson halad át.","A Großglockner Magasalpesi Út turisták milliói számára teszi elérhetővé.","A Magas-Tauern Nemzeti Park közepén található.","Főként prazinitból, egy kemény, zöldes kőzetből áll.","A híres vas csúcskereszt 300 kilót nyom, és 1880-ban állították fel.","A Keleti-Alpok egyik legjelentősebb hegyének számít.","Évente mintegy 5000 hegymászó hódítja meg."],"ro":["Grossglockner este cel mai înalt munte din Austria, având 3.798 m.","La baza sa se află Pasterze, cel mai mare ghețar din Austria.","Prima ascensiune a avut loc pe 28 iulie 1800 de către o expediție condusă de Prințul-Episcop Salm-Reifferscheidt.","Granița dintre Carintia și Tirol trece direct peste vârf.","Drumul Alpin Grossglockner îl face accesibil pentru milioane de turiști.","Situat în centrul Parcului Național Hohe Tauern.","Constă în principal din prazinit, o rocă dură, verzuie.","Faimoasa cruce de vârf din fier cântărește 300 de kilograme și a fost ridicată în 1880.","Considerat unul dintre cei mai proeminenți munți din Alpii Orientali.","Este cucerit anual de aproximativ 5.000 de alpiniști."],"en":["The Grossglockner is Austria's highest mountain at 3,798 m.","At its foot lies the Pasterze, Austria's largest glacier.","The first ascent took place on July 28, 1800, by an expedition led by Prince-Bishop Salm-Reifferscheidt.","The border between Carinthia and Tyrol runs directly over the peak.","The Grossglockner High Alpine Road makes it accessible to millions of tourists.","Located in the center of the Hohe Tauern National Park.","Consists mainly of prasinite, a hard, greenish rock.","The famous iron summit cross weighs 300 kilos and was erected in 1880.","Considered one of the most prominent mountains in the Eastern Alps.","Is summited by around 5,000 mountaineers annually."]}
  },
  {
    id: "AT-Zillertal", type: "landmark", parent: "AT-7", coords: [11.8797, 47.2344],
    name: { de: "Zillertal", hu: "Zillertal", ro: "Valea Ziller", en: "Zillertal" },
    image: "/geo-images/austria/zillertal.webp",
    description: {"de":"Das Zillertal in Tirol ist eines der bekanntesten und lebhaftesten Alpentäler Europas, das sich als ultimatives Ziel für Aktivurlauber etabliert hat. Umgeben von den majestätischen Dreitausendern der Zillertaler Alpen, bietet das Tal das ganze Jahr über herausragende Freizeitmöglichkeiten. Im Winter locken die Zillertal Arena, Mayrhofen und der Hintertuxer Gletscher – Österreichs einziges Ganzjahresskigebiet – mit Hunderten von Pistenkilometern. Im Sommer verwandelt sich die Region in ein riesiges Netzwerk aus Wander- und Mountainbikewegen. Zudem ist das Zillertal weltberühmt für seine tief verwurzelte Volksmusiktradition und traditionelle Feste.","hu":"A tiroli Zillertal (Ziller-völgy) Európa egyik legismertebb és legélénkebb alpesi völgye, amely az aktív nyaralók végső célpontjaként vonult be a köztudatba. A Zillertali-Alpok fenséges, 3000 méter feletti csúcsaival körülvett völgy egész évben kiváló szabadidős lehetőségeket kínál. Télen a Zillertal Arena, Mayrhofen és a Hintertux-gleccser – Ausztria egyetlen egész évben nyitva tartó síterepe – több száz kilométernyi sípályával csábít. Nyáron a régió a túra- és hegyikerékpár-útvonalak hatalmas hálózatává alakul át. Ezenkívül a Zillertal világhírű mélyen gyökerező népzenei hagyományairól és hagyományos ünnepeiről.","ro":"Valea Zillertal din Tirol este una dintre cele mai faimoase și mai pline de viață văi alpine din Europa, care s-a impus ca destinație supremă pentru vacanțele active. Înconjurată de vârfurile maiestuoase de peste 3.000 de metri ale Alpilor Zillertal, valea oferă oportunități de agrement remarcabile pe tot parcursul anului. Iarna, Zillertal Arena, Mayrhofen și Ghețarul Hintertux – singura zonă de schi deschisă tot anul din Austria – atrag cu sute de kilometri de pârtii. Vara, regiunea se transformă într-o vastă rețea de trasee pentru drumeții și ciclism montan. În plus, Zillertal este renumită în întreaga lume pentru tradiția sa de muzică populară adânc înrădăcinată și festivalurile tradiționale.","en":"The Zillertal in Tyrol is one of the most famous and lively Alpine valleys in Europe, which has established itself as the ultimate destination for active holidaymakers. Surrounded by the majestic three-thousanders of the Zillertal Alps, the valley offers outstanding recreational opportunities all year round. In winter, the Zillertal Arena, Mayrhofen, and the Hintertux Glacier – Austria's only year-round ski area – attract with hundreds of kilometers of slopes. In summer, the region transforms into a vast network of hiking and mountain biking trails. In addition, the Zillertal is world-famous for its deep-rooted folk music tradition and traditional festivals."}, facts: {"de":["Das Zillertal ist das größte Seitental des Inntals in Tirol.","Der Hintertuxer Gletscher ermöglicht Skifahren an 365 Tagen im Jahr.","Das weltbekannte Weihnachtslied 'Stille Nacht, heilige Nacht' wurde von Zillertaler Sängern in die Welt getragen.","Die Zillertalbahn, eine historische Schmalspurbahn, verkehrt im Tal.","Beherbergt den Naturpark Zillertaler Alpen, ein streng geschütztes Gebiet.","Beliebte Wintersportzentren sind Mayrhofen und Zell am Ziller.","Die Harpfnerwand ist ein berühmtes Kletterziel für Alpinisten.","Das Tal hat eine starke Tradition der alpenländischen Volksmusik (z.B. Zillertaler Schürzenjäger).","Ein bekanntes kulinarisches Produkt ist der Zillertaler Graukäse.","Zahlreiche Speicherseen zur Stromgewinnung (z.B. Schlegeisspeicher) prägen die Landschaft."],"hu":["A Zillertal az Inn-völgy legnagyobb mellékvölgye Tirolban.","A Hintertux-gleccser az év 365 napján kínál síelési lehetőséget.","A világszerte ismert 'Csendes éj' című karácsonyi dalt zillertali énekesek tették híressé a világon.","A völgyben közlekedik a Zillertalbahn, egy történelmi keskeny nyomtávú vasút.","Itt található a Zillertali-Alpok Natúrpark, egy szigorúan védett terület.","Népszerű téli sportközpontjai Mayrhofen és Zell am Ziller.","A Harpfnerwand híres mászóhely az alpinisták körében.","A völgynek erős alpesi népzenei hagyománya van (pl. Zillertaler Schürzenjäger).","Egyik ismert kulináris terméke a Zillertaler Graukäse (szürkesajt).","A tájat számos, áramtermelést szolgáló víztározó (pl. Schlegeisspeicher) jellemzi."],"ro":["Zillertal este cea mai mare vale laterală a Văii Inn din Tirol.","Ghețarul Hintertux permite schiatul în 365 de zile pe an.","Cunoscutul colind de Crăciun „Stille Nacht” (Noapte de vis) a fost răspândit în lume de cântăreți din Zillertal.","Zillertalbahn, o cale ferată istorică cu ecartament îngust, funcționează în vale.","Găzduiește Parcul Natural Alpii Zillertal, o zonă strict protejată.","Centre populare pentru sporturi de iarnă sunt Mayrhofen și Zell am Ziller.","Harpfnerwand este o destinație celebră de escaladă pentru alpiniști.","Valea are o tradiție puternică de muzică populară alpină (de ex. Zillertaler Schürzenjäger).","Un produs culinar bine-cunoscut este brânza Zillertaler Graukäse.","Peisajul este caracterizat de numeroase lacuri de acumulare pentru generarea de energie electrică (de ex. Schlegeisspeicher)."],"en":["The Zillertal is the largest side valley of the Inn Valley in Tyrol.","The Hintertux Glacier allows for skiing 365 days a year.","The world-famous Christmas carol 'Silent Night' was spread to the world by Zillertal singers.","The Zillertalbahn, a historic narrow-gauge railway, operates in the valley.","Houses the Zillertal Alps Nature Park, a strictly protected area.","Popular winter sports centers include Mayrhofen and Zell am Ziller.","The Harpfnerwand is a famous climbing destination for alpinists.","The valley has a strong tradition of Alpine folk music (e.g., Zillertaler Schürzenjäger).","A well-known culinary product is the Zillertaler Graukäse (grey cheese).","Numerous reservoirs for power generation (e.g., Schlegeisspeicher) characterize the landscape."]}
  },
  {
    id: "AT-Kitzbuehel", type: "city", parent: "AT-7", coords: [12.3925, 47.4461],
    name: { de: "Kitzbühel", hu: "Kitzbühel", ro: "Kitzbühel", en: "Kitzbühel" },
    image: "/geo-images/austria/kitzb-hel.webp",
    description: {"de":"Kitzbühel in Tirol ist zweifellos einer der exklusivsten und prestigeträchtigsten Wintersportorte der Alpen. Weltweite Berühmtheit erlangt die Stadt alljährlich durch das legendäre Hahnenkammrennen, bei dem sich Skirennläufer die furchteinflößende 'Streif' hinabstürzen. Das charmante mittelalterliche Stadtzentrum mit seinen farbenfrohen Häusern, edlen Boutiquen und exzellenten Restaurants zieht ein internationales Jetset-Publikum an. Doch auch im Sommer ist 'Kitz', eingebettet zwischen dem Wilden Kaiser und dem Kitzbüheler Horn, ein Naturparadies für Wanderer, Mountainbiker und Golfer, das luxuriösen Lebensstil mit authentischer Tiroler Tradition verbindet.","hu":"A tiroli Kitzbühel kétségtelenül az Alpok egyik legexkluzívabb és legrangosabb téli sportközpontja. A város minden évben a legendás Hahnenkamm-verseny révén szerez világhírnevet, ahol a sízők a félelmetes 'Streif' nevű pályán száguldanak le. A bájos középkori városközpont színes házaival, elegáns butikjaival és kiváló éttermeivel nemzetközi jet-set közönséget vonz. Azonban nyáron is, a Wilder Kaiser és a Kitzbüheler Horn közé beékelődve, 'Kitz' egy természeti paradicsom a túrázók, hegyikerékpárosok és golfozók számára, amely a luxus életmódot az autentikus tiroli hagyományokkal ötvözi.","ro":"Kitzbühel, situat în Tirol, este, fără îndoială, una dintre cele mai exclusiviste și prestigioase stațiuni de sporturi de iarnă din Alpi. Orașul câștigă faimă la nivel mondial în fiecare an prin legendara cursă Hahnenkamm, unde schiorii se avântă pe terifianta pârtie „Streif”. Fermecătorul centru medieval al orașului, cu casele sale colorate, buticurile de lux și restaurantele excelente, atrage un public internațional din înalta societate. Cu toate acestea, și vara, „Kitz”, situat între Wilder Kaiser și Kitzbüheler Horn, este un paradis natural pentru drumeți, cicliști montani și jucători de golf, combinând un stil de viață luxos cu tradiția tiroleză autentică.","en":"Kitzbühel in Tyrol is undoubtedly one of the most exclusive and prestigious winter sports resorts in the Alps. The town gains worldwide fame every year through the legendary Hahnenkamm race, where ski racers hurl themselves down the terrifying 'Streif' piste. The charming medieval town center with its colorful houses, fine boutiques, and excellent restaurants attracts an international jet-set crowd. However, even in summer, 'Kitz', nestled between the Wilder Kaiser and the Kitzbüheler Horn, is a natural paradise for hikers, mountain bikers, and golfers, combining a luxurious lifestyle with authentic Tyrolean tradition."}, facts: {"de":["Das Hahnenkammrennen auf der Streif gilt als eines der schwersten Skirennen der Welt.","Die Altstadt Kitzbühels ist über 700 Jahre alt.","Ist ein bekannter Treffpunkt der internationalen High Society.","Die Region bietet 233 km abwechslungsreiche Skipisten.","Das Kitzbüheler Horn ist ein markanter Berggipfel und beliebtes Ausflugsziel.","Der Schwarzsee nahe der Stadt ist ein beliebter warmer Moorsee.","Der österreichische Skistar Toni Sailer stammt aus Kitzbühel.","Die Stadt ist auch ein Zentrum für Tennisturniere (Generali Open).","Verfügt über mehrere hochkarätige Golfplätze inmitten der Berge.","Wird liebevoll einfach 'Kitz' genannt."],"hu":["A Streifen rendezett Hahnenkamm-versenyt a világ egyik legnehezebb síversenyének tartják.","Kitzbühel óvárosa több mint 700 éves.","A nemzetközi felső tízezer (High Society) ismert találkozóhelye.","A régió 233 km változatos sípályát kínál.","A Kitzbüheler Horn egy markáns hegycsúcs és népszerű kirándulóhely.","A város közelében lévő Schwarzsee (Fekete-tó) egy kedvelt, meleg vizű láptó.","Toni Sailer osztrák síbajnok Kitzbühelből származik.","A város tenisztornák központja is (Generali Open).","Több rangos golfpályával is rendelkezik a hegyek között.","Szeretetteljesen egyszerűen csak 'Kitz'-nek hívják."],"ro":["Cursa Hahnenkamm de pe pârtia Streif este considerată una dintre cele mai dificile curse de schi din lume.","Orașul vechi din Kitzbühel are o vechime de peste 700 de ani.","Este un loc de întâlnire binecunoscut pentru înalta societate internațională.","Regiunea oferă 233 km de pârtii de schi variate.","Kitzbüheler Horn este un vârf montan proeminent și o destinație populară pentru excursii.","Lacul Schwarzsee de lângă oraș este un lac de mlaștină popular și cald.","Starul austriac al schiului Toni Sailer este din Kitzbühel.","Orașul este, de asemenea, un centru pentru turnee de tenis (Generali Open).","Dispune de mai multe terenuri de golf de top în mijlocul munților.","Este adesea numit cu afecțiune pur și simplu 'Kitz'."],"en":["The Hahnenkamm race on the Streif is considered one of the toughest ski races in the world.","The old town of Kitzbühel is over 700 years old.","It is a well-known meeting place for international high society.","The region offers 233 km of varied ski slopes.","The Kitzbüheler Horn is a prominent mountain peak and popular excursion destination.","The Schwarzsee near the town is a popular warm moor lake.","The Austrian ski star Toni Sailer hails from Kitzbühel.","The town is also a center for tennis tournaments (Generali Open).","Features several top-class golf courses amidst the mountains.","Is affectionately referred to simply as 'Kitz'."]}
  },
  {
    id: "AT-Wachau", type: "region", parent: "AT-3", coords: [15.4206, 48.3883],
    name: { de: "Wachau", hu: "Wachau", ro: "Valea Wachau", en: "Wachau Valley" },
    image: "/geo-images/austria/wachau-valley.webp",
    description: {"de":"Die Wachau, ein malerischer Abschnitt des Donautals in Niederösterreich, ist eine Synthese aus beeindruckender Natur und reicher Geschichte, die zum UNESCO-Weltkulturerbe zählt. Auf einer Länge von rund 36 Kilometern zwischen Melk und Krems schlängelt sich die Donau vorbei an steilen, sonnenverwöhnten Steinterrassen, auf denen weltklasse Rieslinge und Grüne Veltliner gedeihen. Die Landschaft ist übersät mit mittelalterlichen Burgruinen wie Dürnstein, romantischen Winzerdörfern und prachtvollen Klöstern. Besonders im Frühling, wenn Tausende von Marillenbäumen in voller Blüte stehen, oder zur Weinlese im Herbst, entfaltet die Wachau ihren unvergleichlich romantischen Charme.","hu":"A Wachau, a Duna-völgy festői szakasza Alsó-Ausztriában, a lenyűgöző természet és a gazdag történelem szintézise, amely az UNESCO világörökség része. Melk és Krems között mintegy 36 kilométeren kanyarog a Duna a meredek, napsütötte kőteraszok mentén, ahol világszínvonalú rizlingek és zöld veltelinik teremnek. A tájat középkori várromok – mint Dürnstein –, romantikus borászfalvak és pompás kolostorok tarkítják. A Wachau különösen tavasszal, amikor sárgabarackfák ezrei virágoznak, vagy ősszel, a szüret idején bontakoztatja ki páratlanul romantikus báját.","ro":"Wachau, o secțiune pitorească a Văii Dunării din Austria Inferioară, este o sinteză a naturii impresionante și a istoriei bogate, fiind inclusă în Patrimoniul Mondial UNESCO. Pe o lungime de aproximativ 36 de kilometri între Melk și Krems, Dunărea șerpuiește pe lângă terase de piatră abrupte, sărutate de soare, pe care prosperă vinuri Riesling și Grüner Veltliner de clasă mondială. Peisajul este presărat cu ruine de castele medievale, precum Dürnstein, sate romantice de viticultori și mănăstiri magnifice. Wachau își dezvăluie farmecul romantic incomparabil, mai ales primăvara, când mii de caiși sunt în plină floare, sau în timpul recoltei de struguri din toamnă.","en":"The Wachau, a picturesque section of the Danube Valley in Lower Austria, is a synthesis of impressive nature and rich history, making it a UNESCO World Heritage site. Over a length of about 36 kilometers between Melk and Krems, the Danube meanders past steep, sun-kissed stone terraces where world-class Rieslings and Grüner Veltliners thrive. The landscape is dotted with medieval castle ruins like Dürnstein, romantic wine-growing villages, and magnificent monasteries. The Wachau unfolds its incomparably romantic charm especially in spring when thousands of apricot trees are in full bloom, or during the grape harvest in autumn."}, facts: {"de":["Das Flusstal der Wachau gehört seit 2000 zum UNESCO-Weltkulturerbe.","König Richard Löwenherz wurde 1192 in der Burg Dürnstein gefangen gehalten.","Bekannt für den Anbau von exzellentem Grünen Veltliner und Riesling.","Die Wachauer Marille ist eine geschützte und gefeierte regionale Spezialität.","Der Donauradweg führt direkt durch die malerische Landschaft.","Die Region wird oft mit Donauschiffen, Ausflugsdampfern, erkundet.","Die Stifte Melk und Göttweig rahmen die Wachau im Westen und Osten ein.","Die Venus von Willendorf, eine 29.500 Jahre alte Figur, wurde hier gefunden.","Traditionelle Heurige laden zum Verkosten des lokalen Weins ein.","Die steilen Steinterrassen wurden über Jahrhunderte mühsam von Hand angelegt."],"hu":["A Wachau folyóvölgye 2000 óta az UNESCO világörökség része.","Oroszlánszívű Richárd királyt 1192-ben a dürnsteini várban tartották fogva.","Kiváló Zöld veltelini és Rizling termesztéséről ismert.","A wachaui sárgabarack védett és ünnepelt regionális specialitás.","A Duna menti kerékpárút (Donauradweg) közvetlenül a festői tájon halad keresztül.","A régiót gyakran dunai sétahajókkal fedezik fel.","A melki és a göttweigi apátság keretezi a Wachaut nyugaton és keleten.","A 29 500 éves Willendorfi Vénusz szobrocskát is itt találták meg.","Hagyományos Heurigerek (borozók) hívogatnak a helyi borok kóstolására.","A meredek kőteraszokat évszázadok alatt, fáradságos kézi munkával építették."],"ro":["Valea râului Wachau face parte din Patrimoniul Mondial UNESCO din anul 2000.","Regele Richard Inimă de Leu a fost ținut prizonier în Castelul Dürnstein în 1192.","Renumită pentru cultivarea vinurilor excelente Grüner Veltliner și Riesling.","Caisa de Wachau este o specialitate regională protejată și celebrată.","Pista de biciclete a Dunării (Donauradweg) trece direct prin peisajul pitoresc.","Regiunea este adesea explorată cu vapoare de croazieră pe Dunăre.","Abațiile Melk și Göttweig încadrează regiunea Wachau la vest și la est.","Venus din Willendorf, o figurină veche de 29.500 de ani, a fost găsită aici.","Tavernele tradiționale Heurigen invită la degustarea vinului local.","Terasele abrupte de piatră au fost construite manual cu mult efort pe parcursul secolelor."],"en":["The river valley of the Wachau has been a UNESCO World Heritage site since 2000.","King Richard the Lionheart was held prisoner in Dürnstein Castle in 1192.","Known for cultivating excellent Grüner Veltliner and Riesling wines.","The Wachau apricot is a protected and celebrated regional specialty.","The Danube Cycle Path (Donauradweg) leads right through the picturesque landscape.","The region is often explored by Danube cruise ships.","The abbeys of Melk and Göttweig frame the Wachau in the west and east.","The Venus of Willendorf, a 29,500-year-old figurine, was found here.","Traditional Heurigen (wine taverns) invite visitors to taste the local wine.","The steep stone terraces were painstakingly built by hand over centuries."]}
  },
  {
    id: "AT-Hallstatt", type: "city", parent: "AT-4", coords: [13.6493, 47.5622],
    name: { de: "Hallstatt", hu: "Hallstatt", ro: "Hallstatt", en: "Hallstatt" },
    image: "/geo-images/austria/hallstatt.webp",
    description: {
      de: "Hallstatt ist ein weltberühmtes Dorf am Hallstätter See, bekannt für seine malerischen Holzhäuser und das älteste Salzbergwerk der Welt.",
      hu: "Hallstatt egy világhírű falu a Hallstatti-tó partján, amely festői faházairól és a világ legrégebbi sóbányájáról ismert.",
      ro: "Hallstatt este un sat faimos în întreaga lume pe malul lacului Hallstatt, cunoscut pentru casele sale pitorești din lemn și cea mai veche mină de sare din lume.",
      en: "Hallstatt is a world-famous village on Lake Hallstatt, known for its picturesque wooden houses and the world's oldest salt mine."
    },
    descriptionAdvanced: {"de":"Hallstatt, spektakulär zwischen dem Ufer des tiefblauen Hallstätter Sees und den steilen Hängen des Dachsteinmassivs eingeklemmt, gilt als eines der schönsten See-Dörfer der Welt. Die malerischen, an den Berghang gebauten Holzhäuser aus dem 16. Jahrhundert bilden ein Postkartenidyll, das Touristen aus aller Welt anzieht – und sogar einen detailgetreuen Nachbau in China inspirierte. Doch Hallstatt ist nicht nur optisch ein Juwel, sondern auch historisch einzigartig: Der hier liegende Salzbergbau ist der älteste der Welt und Namensgeber der 'Hallstattzeit', einer Epoche der frühen Eisenzeit. Die Region um Hallstatt und den Dachstein ist aufgrund dieser außergewöhnlichen Symbiose aus Natur und Geschichte UNESCO-Welterbe.","hu":"A mélykék Hallstatti-tó partja és a Dachstein-masszívum meredek lejtői közé látványosan beékelődött Hallstatt a világ egyik legszebb tóparti falvaként ismert. A hegyoldalba épített festői, 16. századi faházak képeslapra illő idillt alkotnak, amely a világ minden tájáról vonzza a turistákat – olyannyira, hogy Kínában még egy méretarányos másolat is épült róla. Hallstatt azonban nemcsak vizuális ékszer, hanem történelmileg is egyedülálló: az itteni sóbánya a világ legrégebbi sóbányája, és a kora vaskor egyik korszakának, a 'Hallstatti kultúrának' a névadója. A Hallstatt és a Dachstein körüli régió a természet és a történelem e rendkívüli szimbiózisa miatt UNESCO világörökség.","ro":"Hallstatt, spectaculos prins între malul lacului albastru adânc Hallstatt și versanții abrupți ai masivului Dachstein, este considerat unul dintre cele mai frumoase sate lacustre din lume. Casele pitorești din lemn din secolul al XVI-lea, construite pe versantul muntelui, formează o idilă de carte poștală care atrage turiști din întreaga lume – și a inspirat chiar o replică detaliată în China. Dar Hallstatt nu este doar o bijuterie vizuală, ci și unic din punct de vedere istoric: mina de sare situată aici este cea mai veche din lume și a dat numele „Epocii Hallstatt”, o eră a epocii timpurii a fierului. Regiunea din jurul Hallstattului și a muntelui Dachstein este inclusă în Patrimoniul Mondial UNESCO datorită acestei simbioze extraordinare între natură și istorie.","en":"Hallstatt, spectacularly wedged between the shore of the deep blue Lake Hallstatt and the steep slopes of the Dachstein massif, is considered one of the most beautiful lakeside villages in the world. The picturesque 16th-century wooden houses built onto the mountainside form a postcard idyll that attracts tourists from all over the world – and even inspired a detailed replica in China. But Hallstatt is not only a visual jewel, it is also historically unique: the salt mine located here is the oldest in the world and the namesake of the 'Hallstatt culture', an era of the early Iron Age. The region around Hallstatt and the Dachstein is a UNESCO World Heritage site due to this extraordinary symbiosis of nature and history."}, facts: {"de":["Hallstatt besitzt das älteste Salzbergwerk der Welt (über 7.000 Jahre alt).","Namensgeber für die 'Hallstattzeit', eine Epoche der frühen europäischen Eisenzeit.","Die Region Hallstatt-Dachstein/Salzkammergut ist UNESCO-Weltkulturerbe.","Das pittoreske Dorf wurde in der chinesischen Provinz Guangdong maßstabsgetreu nachgebaut.","Im Beinhaus (Karner) der Michaelskapelle lagern hunderte bemalte Schädel.","Der Hallstätter Skywalk bietet eine Aussichtsplattform 360 Meter über dem Dorf.","Der Ort war bis Ende des 19. Jahrhunderts nur per Boot oder über schmale Saumpfade erreichbar.","Zählt aufgrund des massiven Tagestourismus zu den Symbolen für 'Overtourism'.","Der Marktplatz ist das Herzstück, umgeben von efeuumrankten Häusern.","Funde in prähistorischen Gräberfeldern zeugen vom frühen Reichtum durch den Salzhandel."],"hu":["Hallstattban található a világ legrégebbi, több mint 7000 éves sóbányája.","A korai európai vaskor egy korszakának, a 'Hallstatti kultúrának' névadója.","A Hallstatt-Dachstein/Salzkammergut régió UNESCO világörökség.","A festői falut a kínai Guangdong tartományban méretarányosan újraépítették.","A Mihály-kápolna csontházában (Karner) több száz festett koponya található.","A Hallstatti Skywalk egy kilátóplatform 360 méterrel a falu felett.","A település a 19. század végéig csak csónakkal vagy keskeny ösvényeken volt megközelíthető.","A hatalmas napi turizmus miatt a 'túlturizmus' (overtourism) egyik szimbólumává vált.","A piactér a falu szíve, amelyet borostyánnal befuttatott házak vesznek körül.","A történelem előtti temetőkben feltárt leletek a sókereskedelemből származó korai gazdagságról tanúskodnak."],"ro":["Hallstatt are cea mai veche mină de sare din lume (peste 7.000 de ani).","A dat numele 'Culturii Hallstatt', o eră a epocii europene timpurii a fierului.","Regiunea Hallstatt-Dachstein/Salzkammergut face parte din Patrimoniul Mondial UNESCO.","Satul pitoresc a fost reprodus la scară în provincia chineză Guangdong.","Osuarul (Karner) din Capela Sf. Mihail adăpostește sute de cranii pictate.","Hallstatt Skywalk oferă o platformă de observare la 360 de metri deasupra satului.","Până la sfârșitul secolului al XIX-lea, orașul a putut fi accesat doar cu barca sau pe poteci înguste.","Datorită turismului de o zi masiv, este considerat un simbol al „supraturismului” (overtourism).","Piața centrală este inima locului, înconjurată de case acoperite cu iederă.","Descoperirile din cimitirele preistorice atestă bogăția timpurie rezultată din comerțul cu sare."],"en":["Hallstatt has the oldest salt mine in the world (over 7,000 years old).","Namesake for the 'Hallstatt culture', an era of the early European Iron Age.","The Hallstatt-Dachstein/Salzkammergut region is a UNESCO World Heritage site.","The picturesque village was built as a full-scale replica in the Chinese province of Guangdong.","The Charnel House (Bone House) in St. Michael's Chapel stores hundreds of painted skulls.","The Hallstatt Skywalk offers an observation platform 360 meters above the village.","Until the late 19th century, the village could only be reached by boat or narrow mountain trails.","Due to massive day tourism, it is considered one of the symbols of 'overtourism'.","The market square is the heart of the village, surrounded by ivy-clad houses.","Finds in prehistoric burial grounds bear witness to the early wealth from the salt trade."]}
  },
  {
    id: "AT-Wolfgangsee", type: "lake", parent: "AT-5", coords: [13.435, 47.7472],
    name: { de: "Wolfgangsee", hu: "Wolfgangsee", ro: "Lacul Wolfgang", en: "Lake Wolfgang" },
    image: "/geo-images/austria/lake-wolfgang.webp",
    description: {"de":"Der Wolfgangsee ist eines der schillerndsten Naturjuwele im Salzkammergut und fasziniert mit seinem glasklaren, tiefblauen Wasser, das im Sommer eine hervorragende Trinkwasserqualität erreicht. Eingerahmt von majestätischen Bergen wie dem Schafberg und dem Zwölferhorn, ist der See ein Paradies für Segler, Surfer und Schwimmer. Internationale Bekanntheit erlangte die Region durch die Operette 'Im Weißen Rössl' am Wolfgangsee, die den charmanten Ort St. Wolfgang in den Fokus rückte. Zudem ist St. Wolfgang seit Jahrhunderten ein bedeutender Wallfahrtsort mit einer prächtigen Kirche. Die Schafbergbahn, eine nostalgische Zahnradbahn, bringt Besucher steil hinauf, um den atemberaubenden Panoramablick auf die Seenkulisse zu genießen.","hu":"A Wolfgangsee (Wolfgang-tó) a Salzkammergut egyik legragyogóbb természeti gyöngyszeme, amely kristálytiszta, mélykék vizével nyűgöz le; vize nyáron kiváló ivóvíz-minőséget ér el. Olyan fenséges hegyekkel körülvéve, mint a Schafberg és a Zwölferhorn, a tó a vitorlázók, szörfösök és úszók paradicsoma. A régió nemzetközi ismertségét a 'Fehér Ló fogadó' (Im Weißen Rössl) című operett hozta meg, amely a bájos St. Wolfgang településre irányította a figyelmet. Ráadásul St. Wolfgang évszázadok óta jelentős zarándokhely, egy pompás templommal. A Schafbergbahn, egy nosztalgikus fogaskerekű vasút meredeken viszi fel a látogatókat, hogy élvezhessék a tóvidékre nyíló lélegzetelállító panorámát.","ro":"Wolfgangsee (Lacul Wolfgang) este una dintre cele mai strălucitoare bijuterii naturale din Salzkammergut și fascinează cu apa sa cristalină, de un albastru intens, care atinge vara o calitate excelentă de apă potabilă. Încadrat de munți maiestuoși, precum Schafberg și Zwölferhorn, lacul este un paradis pentru marinari, surferi și înotători. Regiunea a câștigat faimă internațională prin opereta „La Calul Bălan” (Im Weißen Rössl) de la Wolfgangsee, care a adus în centrul atenției fermecătorul oraș St. Wolfgang. În plus, St. Wolfgang este de secole un loc de pelerinaj important, având o biserică magnifică. Schafbergbahn, o cale ferată cu cremalieră nostalgică, transportă vizitatorii pe pante abrupte pentru a se bucura de vederea panoramică uluitoare a peisajului lacustru.","en":"The Wolfgangsee (Lake Wolfgang) is one of the most dazzling natural jewels in the Salzkammergut and fascinates with its crystal-clear, deep blue water, which achieves excellent drinking water quality in summer. Framed by majestic mountains such as the Schafberg and the Zwölferhorn, the lake is a paradise for sailors, surfers, and swimmers. The region gained international fame through the operetta 'The White Horse Inn' (Im Weißen Rössl) at the Wolfgangsee, which brought the charming town of St. Wolfgang into focus. In addition, St. Wolfgang has been an important place of pilgrimage with a magnificent church for centuries. The Schafbergbahn, a nostalgic cog railway, takes visitors steeply up to enjoy the breathtaking panoramic view of the lake scenery."}, facts: {"de":["Der See teilt sich auf die Bundesländer Salzburg und Oberösterreich auf.","Im Sommer erwärmt sich das klare Wasser auf bis zu 24°C.","Das Hotel 'Im Weißen Rössl' in St. Wolfgang ist weltberühmt aus Film und Theater.","Die Pfarrkirche St. Wolfgang beherbergt den berühmten Pacher-Altar aus dem 15. Jahrhundert.","Die Schafbergbahn ist die steilste Zahnradbahn Österreichs (seit 1893).","St. Gilgen, ein weiterer Ort am See, war der Wohnort von Mozarts Mutter.","Der Wolfgangsee ist ein beliebtes Revier für Taucher und Segler.","Die Falkensteinwand fällt direkt in den See ab und ist ein spektakuläres Klettergebiet.","Im Advent verbindet eine Schifffahrt die romantischen Weihnachtsmärkte der Seegemeinden.","Kaiser Franz Joseph urlaubte oft in der nahegelegenen Region."],"hu":["A tó Salzburg és Felső-Ausztria tartományok között oszlik meg.","Nyáron a tiszta víz akár 24°C-ra is felmelegszik.","A St. Wolfgang-i 'Im Weißen Rössl' (Fehér Ló fogadó) szálloda világhírű filmekből és színházból.","A St. Wolfgang-i plébániatemplomban található a híres, 15. századi Pacher-oltár.","A Schafbergbahn Ausztria legmeredekebb fogaskerekű vasútja (1893 óta).","St. Gilgen, a tó egy másik települése, Mozart édesanyjának lakóhelye volt.","A Wolfgangsee a búvárok és a vitorlázók kedvelt területe.","A Falkensteinwand nevű sziklafal egyenesen a tóba szakad le, és látványos mászóhely.","Advent idején hajójáratok kötik össze a tóparti települések romantikus karácsonyi vásárait.","Ferenc József császár gyakran nyaralt a közeli régióban."],"ro":["Lacul este împărțit între landurile Salzburg și Austria Superioară.","Vara, apa limpede se încălzește până la 24°C.","Hotelul „Im Weißen Rössl” (La Calul Bălan) din St. Wolfgang este renumit mondial din filme și teatru.","Biserica parohială St. Wolfgang găzduiește celebrul altar Pacher din secolul al XV-lea.","Schafbergbahn este cea mai abruptă cale ferată cu cremalieră din Austria (din 1893).","St. Gilgen, un alt oraș de pe malul lacului, a fost reședința mamei lui Mozart.","Wolfgangsee este o zonă populară pentru scafandri și marinari.","Faleza Falkensteinwand coboară abrupt direct în lac și este o zonă de escaladă spectaculoasă.","În perioada Adventului, feriboturile conectează piețele de Crăciun romantice ale comunităților de pe lac.","Împăratul Franz Joseph își petrecea adesea vacanțele în regiunea din apropiere."],"en":["The lake is divided between the federal states of Salzburg and Upper Austria.","In summer, the clear water warms up to 24°C.","The hotel 'Im Weißen Rössl' (The White Horse Inn) in St. Wolfgang is world-famous from film and theater.","The St. Wolfgang parish church houses the famous 15th-century Pacher Altar.","The Schafbergbahn is the steepest cog railway in Austria (since 1893).","St. Gilgen, another town on the lake, was the residence of Mozart's mother.","The Wolfgangsee is a popular area for divers and sailors.","The Falkensteinwand cliff drops directly into the lake and is a spectacular climbing area.","During Advent, boat trips connect the romantic Christmas markets of the lake communities.","Emperor Franz Joseph often vacationed in the nearby region."]}
  },
  {
    id: "AT-NeusiedlerSee", type: "lake", parent: "AT-1", coords: [16.7725, 47.8183],
    name: { de: "Neusiedler See", hu: "Fertő tó", ro: "Lacul Neusiedl", en: "Lake Neusiedl" },
    image: "/geo-images/austria/lake-neusiedl.webp",
    description: {"de":"Der Neusiedler See im Burgenland ist ein faszinierendes Naturphänomen und der größte See Österreichs. Als extrem flacher Steppensee, der fast vollständig von einem dichten Schilfgürtel umgeben ist, bietet er einen Lebensraum von unschätzbarem ökologischem Wert. Der Nationalpark Neusiedler See-Seewinkel schützt Hunderte von seltenen Vogelarten und macht die Region zu einem Paradies für Vogelbeobachter. Gleichzeitig sind die stetigen Winde ideal für Segler und Kitesurfer, während das milde pannonische Klima die umliegenden Weinberge gedeihen lässt. Das Zusammenspiel aus intakter Natur, erstklassigen Weinen und der Nähe zu Ungarn verleiht dem See seinen unverwechselbaren Charakter als UNESCO-Welterbestätte.","hu":"A burgenlandi Fertő tó (Neusiedler See) egy lenyűgöző természeti jelenség és Ausztria legnagyobb tava. Rendkívül sekély sztyepptóként, amelyet szinte teljesen sűrű nádas vesz körül, felbecsülhetetlen ökológiai értékű élőhelyet kínál. A Fertő-Hanság (Neusiedler See-Seewinkel) Nemzeti Park több száz ritka madárfajt véd, és a régiót a madármegfigyelők paradicsomává teszi. Ugyanakkor a folyamatos szelek ideálisak a vitorlázók és a kiteszörfösök számára, míg az enyhe pannon éghajlat a környező szőlőültetvényeket virágoztatja fel. Az érintetlen természet, az első osztályú borok és a Magyarországhoz való közelség egyedülálló karaktert kölcsönöz a tónak, mint UNESCO világörökségi helyszínnek.","ro":"Lacul Neusiedl (Neusiedler See) din Burgenland este un fenomen natural fascinant și cel mai mare lac din Austria. Fiind un lac de stepă extrem de plat, care este aproape complet înconjurat de o centură de stuf dens, oferă un habitat cu o valoare ecologică inestimabilă. Parcul Național Neusiedler See-Seewinkel protejează sute de specii rare de păsări și transformă regiunea într-un paradis pentru observatorii de păsări. În același timp, vânturile constante sunt ideale pentru marinari și iubitorii de kitesurfing, în timp ce clima blândă panonică face ca podgoriile din jur să prospere. Interacțiunea dintre natura intactă, vinurile de primă clasă și proximitatea de Ungaria conferă lacului caracterul său inconfundabil ca sit al Patrimoniului Mondial UNESCO.","en":"Lake Neusiedl (Neusiedler See) in Burgenland is a fascinating natural phenomenon and the largest lake in Austria. As an extremely shallow steppe lake that is almost completely surrounded by a dense reed belt, it offers a habitat of inestimable ecological value. The Neusiedler See-Seewinkel National Park protects hundreds of rare bird species and makes the region a paradise for bird watchers. At the same time, the constant winds are ideal for sailors and kite surfers, while the mild Pannonian climate allows the surrounding vineyards to thrive. The interaction of intact nature, first-class wines, and its proximity to Hungary gives the lake its unmistakable character as a UNESCO World Heritage site."}, facts: {"de":["Der See teilt sich Österreich mit Ungarn (dort Fertő tó genannt).","Die durchschnittliche Wassertiefe beträgt lediglich rund 1 Meter.","Die Kulturlandschaft Fertő/Neusiedler See ist UNESCO-Welterbe.","Beherbergt den Nationalpark Neusiedler See-Seewinkel.","Der riesige Schilfgürtel ist nach dem Donaudelta der zweitgrößte Europas.","Der See hat keinen natürlichen Abfluss.","Im Winter ist er bei Frost oft die größte Eislauffläche Mitteleuropas.","Podersdorf und Rust (Heimat der Störche) sind bekannte Orte am Ufer.","Ein wichtiges Rastgebiet für Zugvögel zwischen Europa und Afrika.","Rund um den See wachsen exzellente Weine, besonders Süßweine."],"hu":["A tavon Ausztria Magyarországgal osztozik (Fertő tó néven).","Az átlagos vízmélység mindössze körülbelül 1 méter.","A Fertő-táj (Fertő/Neusiedler See) UNESCO világörökség.","Itt található a Fertő-Hanság (Neusiedler See-Seewinkel) Nemzeti Park.","A hatalmas nádas a Duna-delta után Európa második legnagyobbja.","A tónak nincs természetes lefolyása.","Télen, fagy esetén gyakran Közép-Európa legnagyobb korcsolyapályája.","Podersdorf (Pátfalu) és Rust (Rusztt – a gólyák hazája) híres tóparti települések.","Fontos pihenőhely az Európa és Afrika között vonuló madarak számára.","A tó körül kiváló borok, különösen édes borok teremnek."],"ro":["Lacul este împărțit între Austria și Ungaria (unde este numit Fertő tó).","Adâncimea medie a apei este de doar aproximativ 1 metru.","Peisajul cultural Fertő/Neusiedler See este un sit al Patrimoniului Mondial UNESCO.","Găzduiește Parcul Național Neusiedler See-Seewinkel.","Imensa centură de stuf este a doua ca mărime din Europa, după Delta Dunării.","Lacul nu are nicio scurgere naturală.","Iarna, când îngheață, este adesea cel mai mare patinoar din Europa Centrală.","Podersdorf și Rust (patria berzelor) sunt orașe binecunoscute pe țărm.","Un important popas pentru păsările migratoare între Europa și Africa.","În jurul lacului se produc vinuri excelente, în special vinuri dulci."],"en":["Austria shares the lake with Hungary (where it is called Fertő tó).","The average water depth is only about 1 meter.","The Fertő/Neusiedler See Cultural Landscape is a UNESCO World Heritage site.","Houses the Neusiedler See-Seewinkel National Park.","The huge reed belt is the second largest in Europe after the Danube Delta.","The lake has no natural outflow.","In winter, when frozen, it is often the largest ice-skating rink in Central Europe.","Podersdorf and Rust (home of the storks) are well-known towns on the shore.","An important resting area for migratory birds between Europe and Africa.","Excellent wines, especially sweet wines, are grown around the lake."]}
  },
  {
    id: "AT-Melk", type: "landmark", parent: "AT-3", coords: [15.3314, 48.2289],
    name: { de: "Stift Melk", hu: "Melki apátság", ro: "Abația Melk", en: "Melk Abbey" },
    image: "/geo-images/austria/melk-abbey.webp",
    description: {
      de: "Das Stift Melk ist ein barockes Meisterwerk auf einem Felsen über der Donau, bekannt für seine prächtige Bibliothek und die goldene Stiftskirche.",
      hu: "A melki apátság egy barokk mestermű a Duna feletti sziklán, amely pompás könyvtáráról és aranyozott apátsági templomáról ismert.",
      ro: "Abația Melk este o capodoperă barocă pe o stâncă deasupra Dunării, cunoscută pentru biblioteca sa magnifică și biserica aurită a abației.",
      en: "Melk Abbey is a Baroque masterpiece on a rock above the Danube, known for its magnificent library and golden abbey church."
    },
    descriptionAdvanced: {"de":"Das Stift Melk ist ein triumphales Meisterwerk des Hochbarocks und krönt eindrucksvoll einen Felsen direkt über der Donau am Tor zur Wachau in Niederösterreich. Als aktives Benediktinerkloster blickt es auf eine über 900-jährige geistliche Tradition zurück. Die leuchtend gelbe Fassade, die kunstvolle Stiftskirche mit ihren meisterhaften Fresken und die atemberaubende Stiftsbibliothek, die Zehntausende von unschätzbar wertvollen Bänden birgt, rauben den Besuchern den Atem. Das Stift war und ist ein Zentrum von Religion, Kultur und Bildung. Durch Umberto Ecos weltberühmten Roman 'Der Name der Rose', in dem die Figur des Adson von Melk auftritt, erlangte das Stift auch literarische Unsterblichkeit.","hu":"A melki apátság (Stift Melk) az érett barokk diadalmas mesterműve, amely lenyűgözően koronázza meg a Duna fölötti sziklát a Wachau kapujában, Alsó-Ausztriában. Aktív bencés kolostorként több mint 900 éves szellemi hagyományra tekint vissza. Ragyogó sárga homlokzata, a díszes apátsági templom mesteri freskóival, valamint a lélegzetelállító apátsági könyvtár, amely több tízezer felbecsülhetetlen értékű kötetet rejt, elállítja a látogatók lélegzetét. Az apátság a vallás, a kultúra és az oktatás központja volt és maradt. Umberto Eco 'A rózsa neve' című világhírű regénye révén, amelyben megjelenik Melki Adso alakja, az apátság irodalmi halhatatlanságot is nyert.","ro":"Abația Melk (Stift Melk) este o capodoperă triumfală a barocului târziu și încoronează impresionant o stâncă aflată chiar deasupra Dunării, la poarta de intrare în regiunea Wachau din Austria Inferioară. Ca mănăstire benedictină activă, are o tradiție spirituală de peste 900 de ani. Fațada sa galbenă strălucitoare, biserica ornamentată a abației cu frescele sale magistrale și biblioteca uluitoare, care găzduiește zeci de mii de volume de o valoare inestimabilă, îți taie respirația. Abația a fost și rămâne un centru de religie, cultură și educație. Prin romanul de renume mondial al lui Umberto Eco, „Numele trandafirului”, care îl prezintă pe personajul Adso din Melk, abația a dobândit, de asemenea, imortalitate literară.","en":"Melk Abbey (Stift Melk) is a triumphant masterpiece of the High Baroque and impressively crowns a rock directly above the Danube at the gateway to the Wachau in Lower Austria. As an active Benedictine monastery, it looks back on a spiritual tradition spanning over 900 years. The bright yellow facade, the ornate abbey church with its masterful frescoes, and the breathtaking abbey library, which holds tens of thousands of invaluable volumes, take visitors' breath away. The abbey was and is a center of religion, culture, and education. Through Umberto Eco's world-famous novel 'The Name of the Rose', which features the character Adso of Melk, the abbey also achieved literary immortality."}, facts: {"de":["Das Stift Melk ist das größte Benediktinerkloster in Österreich.","Es wurde im frühen 18. Jahrhundert vom Architekten Jakob Prandtauer völlig neu im Barockstil erbaut.","Die Stiftsbibliothek umfasst über 100.000 Bände, darunter viele unersetzliche Handschriften.","Ist eng mit der Entstehung des Staates Österreich (Ostarrichi) verbunden.","Die Hauptachse des Gebäudes misst stolze 320 Meter.","Es beherbergt das älteste noch bestehende Gymnasium Österreichs (gegründet 1140).","Die Stiftskirche gilt als einer der schönsten Barockbauten der Welt.","Ist ein markanter Teil der UNESCO-Welterbelandschaft Wachau.","Umberto Eco nannte einen Protagonisten in 'Der Name der Rose' Adson von Melk.","Der Stiftspark mit seinem barocken Pavillon lädt zum Entspannen ein."],"hu":["A melki apátság Ausztria legnagyobb bencés kolostora.","A 18. század elején Jakob Prandtauer építész teljesen újjáépítette barokk stílusban.","Az apátsági könyvtár több mint 100 000 kötetet, köztük sok pótolhatatlan kéziratot tartalmaz.","Szorosan kapcsolódik az osztrák állam (Ostarrichi) kialakulásához.","Az épület főtengelye figyelemre méltó, 320 méter hosszú.","Itt működik Ausztria legrégebbi, ma is fennálló gimnáziuma (1140-ben alapították).","Az apátsági templomot a világ egyik legszebb barokk épületének tartják.","A Wachau UNESCO világörökségi tájának kiemelkedő része.","Umberto Eco 'A rózsa neve' című művének egyik főszereplőjét Melki Adsónak nevezte el.","Az apátsági park barokk pavilonjával kikapcsolódásra hívogat."],"ro":["Abația Melk este cea mai mare mănăstire benedictină din Austria.","A fost complet reconstruită în stil baroc la începutul secolului al XVIII-lea de către arhitectul Jakob Prandtauer.","Biblioteca abației conține peste 100.000 de volume, inclusiv multe manuscrise de neînlocuit.","Este strâns legată de crearea statului austriac (Ostarrichi).","Axa principală a clădirii măsoară o lungime impresionantă de 320 de metri.","Găzduiește cel mai vechi gimnaziu din Austria (fondat în 1140).","Biserica abației este considerată una dintre cele mai frumoase clădiri baroce din lume.","Este o parte proeminentă a peisajului Wachau, inclus în Patrimoniul Mondial UNESCO.","Umberto Eco a numit un protagonist din „Numele trandafirului” Adso din Melk.","Parcul abației cu pavilionul său baroc te invită la relaxare."],"en":["Melk Abbey is the largest Benedictine monastery in Austria.","It was completely rebuilt in the Baroque style in the early 18th century by architect Jakob Prandtauer.","The abbey library contains over 100,000 volumes, including many irreplaceable manuscripts.","It is closely linked to the creation of the state of Austria (Ostarrichi).","The main axis of the building measures an impressive 320 meters.","It houses the oldest still existing grammar school in Austria (founded in 1140).","The abbey church is considered one of the most beautiful Baroque buildings in the world.","It is a prominent part of the UNESCO World Heritage landscape of the Wachau.","Umberto Eco named a protagonist in 'The Name of the Rose' Adso of Melk.","The abbey park with its Baroque pavilion invites visitors to relax."]}
  },
  {
    id: "AT-Heiligenblut", type: "city", parent: "AT-2", coords: [12.8394, 47.04],
    name: { de: "Heiligenblut", hu: "Heiligenblut", ro: "Heiligenblut", en: "Heiligenblut" },
    image: "/geo-images/austria/heiligenblut.webp",
    description: {"de":"Heiligenblut am Großglockner ist eines der malerischsten und bekanntesten Bergdörfer Österreichs, gelegen auf knapp 1.300 Metern Seehöhe im Nationalpark Hohe Tauern. Das unangefochtene Wahrzeichen des Ortes ist die gotische Pfarrkirche St. Vinzenz mit ihrem spitzen, markanten Turm, die sich malerisch vor der gewaltigen Kulisse des Großglockners erhebt. Der Legende nach wird in der Kirche ein Fläschchen mit dem Blut Christi aufbewahrt, was den Ort seit Jahrhunderten zu einem bedeutenden Wallfahrtsziel macht. Heiligenblut ist auch der traditionelle Ausgangspunkt für Fahrten auf der berühmten Großglockner Hochalpenstraße und lockt im Winter Skifahrer sowie im Sommer passionierte Bergsteiger an.","hu":"Heiligenblut am Großglockner Ausztria egyik legfestőibb és legismertebb hegyi faluja, amely közel 1300 méteres tengerszint feletti magasságban, a Magas-Tauern Nemzeti Parkban fekszik. A település vitathatatlan jelképe a gótikus Szent Vince plébániatemplom a maga hegyes, markáns tornyával, amely festőien emelkedik ki a Großglockner hatalmas kulisszája előtt. A legenda szerint a templomban Krisztus vérének egy fioláját őrzik, ami a helyet évszázadok óta jelentős zarándokhellyé teszi. Heiligenblut emellett a híres Großglockner Magasalpesi Út (Hochalpenstraße) hagyományos kiindulópontja, télen síelőket, nyáron pedig szenvedélyes hegymászókat vonz.","ro":"Heiligenblut am Großglockner este unul dintre cele mai pitorești și renumite sate de munte din Austria, situat la o altitudine de aproape 1.300 de metri în Parcul Național Hohe Tauern. Simbolul de necontestat al locului este biserica parohială gotică Sf. Vincențiu, cu turnul său ascuțit și distinctiv, care se înalță pitoresc pe fundalul masiv al muntelui Grossglockner. Conform legendei, în biserică este păstrată o fiolă cu sângele lui Hristos, ceea ce a făcut din acest loc o destinație importantă de pelerinaj de secole. Heiligenblut este, de asemenea, punctul tradițional de plecare pentru călătoriile pe faimosul Drum Alpin Grossglockner (Hochalpenstraße) și atrage schiori iarna, precum și alpiniști pasionați vara.","en":"Heiligenblut am Großglockner is one of the most picturesque and well-known mountain villages in Austria, situated at an altitude of almost 1,300 meters in the Hohe Tauern National Park. The undisputed landmark of the village is the Gothic parish church of St. Vincent with its striking pointed tower, which rises picturesquely against the massive backdrop of the Grossglockner. According to legend, a vial of the blood of Christ is kept in the church, making the place an important pilgrimage destination for centuries. Heiligenblut is also the traditional starting point for journeys on the famous Grossglockner High Alpine Road and attracts skiers in winter as well as passionate mountaineers in summer."}, facts: {"de":["Das berühmte Fotomotiv zeigt die Kirche mit dem Großglockner im Hintergrund.","Der Ortsname leitet sich von der Legende um das 'Heilige Blut' ab.","Der dänische Ritter Briccius soll die Reliquie im Jahr 914 hierher gebracht haben.","Die hochalpine Landschaft ist streng geschützt (Nationalpark Hohe Tauern).","In der Nähe befanden sich historische Goldminen, in denen Tauerngold abgebaut wurde.","Ein Paradies für Freerider und Tourengeher im Winter.","Der hochgelegene Friedhof der Bergsteiger erinnert an Verunglückte.","Das Alpendorf hat seinen ursprünglichen Charakter weitgehend bewahrt.","Traditionen wie das Sternsingen zum Jahreswechsel werden hier intensiv gepflegt.","Die Wallfahrtskirche St. Vinzenz stammt aus dem 15. Jahrhundert."],"hu":["A híres fotómotívum a templomot ábrázolja a Großglocknerrel a háttérben.","A település neve a 'Szent Vér' körüli legendából ered.","A legenda szerint Briccius dán lovag hozta ide az ereklyét 914-ben.","A magashegyi táj szigorúan védett (Magas-Tauern Nemzeti Park).","A közelben történelmi aranybányák voltak, ahol tauern-aranyat bányásztak.","A freeriderek (szabadstílusú síelők) és a sítúrázók paradicsoma télen.","A magasan fekvő hegymászótemető a balesetet szenvedettekre emlékeztet.","Az alpesi falu nagyrészt megőrizte eredeti karakterét.","Az olyan hagyományokat, mint az újévi csillagének (Sternsingen), intenzíven ápolják.","A Szent Vince zarándoktemplom a 15. századból származik."],"ro":["Celebrul motiv fotografic arată biserica cu Grossglockner în fundal.","Numele orașului derivă din legenda despre „Sângele Sfânt” (Heiliges Blut).","Cavalerul danez Briccius se spune că a adus relicva aici în anul 914.","Peisajul alpin înalt este strict protejat (Parcul Național Hohe Tauern).","În apropiere existau mine de aur istorice unde se extrăgea „Tauerngold”.","Un paradis pentru freerideri și schiori de tură pe timp de iarnă.","Cimitirul alpiniștilor, situat la mare altitudine, îi comemorează pe cei care au pierit.","Satul alpin și-a păstrat în mare parte caracterul original.","Tradiții precum colindatul cu steaua (Sternsingen) la cumpăna dintre ani sunt intens menținute.","Biserica de pelerinaj Sf. Vincențiu datează din secolul al XV-lea."],"en":["The famous photo motif shows the church with the Grossglockner in the background.","The town's name derives from the legend of the 'Holy Blood' (Heiliges Blut).","The Danish knight Briccius is said to have brought the relic here in 914.","The high alpine landscape is strictly protected (Hohe Tauern National Park).","Historic gold mines where 'Tauerngold' was mined were located nearby.","A paradise for freeriders and ski tourers in winter.","The high-altitude mountaineers' cemetery commemorates those who perished.","The alpine village has largely preserved its original character.","Traditions such as star singing (Sternsingen) at the turn of the year are intensely maintained.","The pilgrimage church of St. Vincent dates back to the 15th century."]}
  },
  {
    id: "AT-Semmering", type: "landmark", parent: "AT-3", coords: [15.83, 47.6433],
    name: { de: "Semmeringbahn", hu: "Semmeringi vasút", ro: "Calea ferată Semmering", en: "Semmering Railway" },
    image: "/geo-images/austria/semmering-railway.webp",
    description: {"de":"Die Semmeringbahn, die Niederösterreich mit der Steiermark verbindet, ist nicht nur eine wichtige Verkehrsader, sondern ein Meisterwerk der Ingenieurskunst aus der Mitte des 19. Jahrhunderts. Unter der Leitung von Carl Ritter von Ghega erbaut, war sie die erste normalspurige Gebirgsbahn Europas, die sich harmonisch in die schroffe, alpine Landschaft einfügt. Mit ihren 14 Tunneln, 16 Viadukten und unzähligen Brücken, die aus Millionen von Ziegeln und Steinquadern errichtet wurden, revolutionierte sie das Reisen. Wegen ihrer überragenden architektonischen Bedeutung und landschaftlichen Schönheit wurde die Semmeringbahn 1998 als erste Bahnlinie der Welt in die Liste der UNESCO-Weltkulturerbestätten aufgenommen.","hu":"A Semmering-vasút, amely Alsó-Ausztriát köti össze Stájerországgal, nemcsak egy fontos közlekedési ütőér, hanem a 19. század közepének mérnöki mesterműve is. A Carl Ritter von Ghega vezetésével épült vasút volt Európa első normál nyomtávú hegyi vasútja, amely harmonikusan illeszkedik a zord, alpesi tájba. 14 alagútjával, 16 viaduktjával és számtalan hídjával, amelyeket több millió téglából és kőtömbből építettek, forradalmasította az utazást. Kiemelkedő építészeti jelentősége és táji szépsége miatt a Semmering-vasutat 1998-ban, a világon első vasútvonalként felvették az UNESCO világörökségi listájára.","ro":"Calea ferată Semmering (Semmeringbahn), care leagă Austria Inferioară de Stiria, nu este doar o arteră de transport importantă, ci și o capodoperă a ingineriei de la mijlocul secolului al XIX-lea. Construită sub conducerea lui Carl Ritter von Ghega, a fost prima cale ferată montană cu ecartament normal din Europa care s-a integrat armonios în peisajul alpin accidentat. Cu cele 14 tuneluri, 16 viaducte și nenumăratele poduri construite din milioane de cărămizi și blocuri de piatră, a revoluționat călătoriile. Datorită importanței sale arhitecturale remarcabile și a frumuseții pitorești, Calea ferată Semmering a fost inclusă pe lista Patrimoniului Mondial UNESCO în 1998, fiind prima linie de cale ferată din lume care a primit această onoare.","en":"The Semmering Railway (Semmeringbahn), which connects Lower Austria with Styria, is not only an important transport artery but a masterpiece of engineering from the mid-19th century. Built under the direction of Carl Ritter von Ghega, it was the first standard-gauge mountain railway in Europe to blend harmoniously into the rugged alpine landscape. With its 14 tunnels, 16 viaducts, and countless bridges built from millions of bricks and stone blocks, it revolutionized travel. Due to its outstanding architectural significance and scenic beauty, the Semmering Railway was added to the UNESCO World Heritage list in 1998 as the first railway line in the world to receive this honor."}, facts: {"de":["Erbaut zwischen 1848 und 1854 von Carl Ritter von Ghega.","Überwindet einen Höhenunterschied von rund 460 Metern.","Das berühmte 'Zwanzig-Schilling-Motto' zierte einst die 20-Schilling-Banknote.","Gilt als die erste Gebirgsbahn Europas in Normalspur.","Die historische Bahntrasse führt über 16 Viadukte und durch 14 Tunnel.","Entlang der Strecke entstand die berühmte Semmering-Villenarchitektur.","Ein begleitender Bahnwanderweg bietet tolle Aussichten auf die Viadukte.","Wurde komplett ohne Stahlkonstruktionen, nur aus Stein und Ziegeln, erbaut.","Der höchste Punkt liegt im Scheiteltunnel auf 895 Metern Seehöhe.","Ermöglichte die Entwicklung des Semmerings zu einem mondänen Luftkurort."],"hu":["Carl Ritter von Ghega építtette 1848 és 1854 között.","Körülbelül 460 méteres szintkülönbséget küzd le.","A híres viadukt egykor a 20 schillinges bankjegyet díszítette.","Európa első normál nyomtávú hegyi vasútjának tartják.","A történelmi vasútvonal 16 viadukton és 14 alagúton halad át.","A vonal mentén alakult ki a híres semmeringi villaépítészet.","Egy kísérő vasúti túraútvonal nagyszerű kilátást nyújt a viaduktokra.","Teljesen acélszerkezetek nélkül, kizárólag kőből és téglából épült.","A legmagasabb pontja az alagút tetőpontján, 895 méteres magasságban van.","Lehetővé tette Semmering divatos magaslati üdülőhellyé válását."],"ro":["Construită între 1848 și 1854 de Carl Ritter von Ghega.","Depășește o diferență de altitudine de aproximativ 460 de metri.","Celebrul viaduct a decorat odată bancnota de 20 de șilingi austrieci.","Considerată prima cale ferată montană cu ecartament normal din Europa.","Traseul istoric al căii ferate trece peste 16 viaducte și prin 14 tuneluri.","De-a lungul rutei s-a dezvoltat celebra arhitectură a vilelor din Semmering.","Un traseu de drumeții adiacent oferă vederi minunate asupra viaductelor.","A fost construită complet fără structuri de oțel, doar din piatră și cărămidă.","Cel mai înalt punct se află în tunelul principal (Scheiteltunnel) la 895 de metri.","A permis dezvoltarea Semmeringului într-o stațiune climatică la modă."],"en":["Built between 1848 and 1854 by Carl Ritter von Ghega.","Overcomes an altitude difference of approximately 460 meters.","The famous viaduct once adorned the 20 Austrian Schilling banknote.","Considered the first standard-gauge mountain railway in Europe.","The historic railway line crosses 16 viaducts and passes through 14 tunnels.","The famous Semmering villa architecture developed along the route.","An accompanying railway hiking trail offers great views of the viaducts.","Was built completely without steel structures, using only stone and brick.","The highest point is in the summit tunnel at 895 meters above sea level.","Enabled the development of the Semmering into a fashionable climatic spa resort."]}
  },
  {
    id: "AT-Grossalpenstrasse", type: "landmark", parent: "AT-5", coords: [12.8122, 47.1128],
    name: { de: "Großglockner Hochalpenstraße", hu: "Großglockner Alpesi Út", ro: "Drumul alpin Grossglockner", en: "Grossglockner High Alpine Road" },
    image: "/geo-images/austria/grossglockner-high-alpine-road.webp",
    description: {"de":"Die Großglockner Hochalpenstraße ist nicht nur die berühmteste Alpenstraße Österreichs, sondern auch ein architektonisches Wunderwerk, das in den 1930er Jahren inmitten spektakulärer Hochgebirgslandschaften errichtet wurde. Die 48 Kilometer lange Panoramastraße windet sich mit 36 Kehren bis auf eine Höhe von über 2.500 Metern. Sie verbindet die Bundesländer Salzburg und Kärnten und führt direkt ins Herz des Nationalparks Hohe Tauern. Der Höhepunkt der Fahrt ist die Kaiser-Franz-Josefs-Höhe, von der aus Besucher einen atemberaubenden Blick auf den höchsten Berg Österreichs, den Großglockner, und den langsam schwindenden Pasterzengletscher haben. Die Route vereint unberührte Natur, fahrerischen Anspruch und tiefe historische Bedeutung.","hu":"A Großglockner Magasalpesi Út (Hochalpenstraße) nemcsak Ausztria leghíresebb alpesi útja, hanem egy építészeti csoda is, amelyet az 1930-as években építettek lenyűgöző magashegyi tájak közepette. A 48 kilométer hosszú panorámaút 36 hajtűkanyarral kanyarog fel több mint 2500 méteres magasságba. Salzburg és Karintia tartományokat köti össze, és egyenesen a Magas-Tauern Nemzeti Park szívébe vezet. Az utazás fénypontja a Ferenc József-magaslat (Kaiser-Franz-Josefs-Höhe), ahonnan a látogatók lélegzetelállító kilátást élvezhetnek Ausztria legmagasabb hegyére, a Großglocknerre és a lassan eltűnő Pasterze-gleccserre. Az útvonal ötvözi az érintetlen természetet, a vezetéstechnikai kihívást és a mély történelmi jelentőséget.","ro":"Drumul Alpin Grossglockner (Großglockner Hochalpenstraße) nu este doar cel mai faimos drum alpin din Austria, ci și o minune arhitecturală construită în anii 1930 în mijlocul unor peisaje montane spectaculoase. Drumul panoramic lung de 48 de kilometri șerpuiește prin 36 de curbe în ac de păr până la o altitudine de peste 2.500 de metri. Leagă landurile Salzburg și Carintia, ducând direct în inima Parcului Național Hohe Tauern. Punctul culminant al călătoriei este Kaiser-Franz-Josefs-Höhe, de unde vizitatorii au o vedere uluitoare asupra celui mai înalt munte din Austria, Grossglockner, și a ghețarului Pasterze, care se retrage încet. Traseul combină natura neatinsă, provocarea de a conduce și o profundă semnificație istorică.","en":"The Grossglockner High Alpine Road (Großglockner Hochalpenstraße) is not only Austria's most famous alpine road but also an architectural marvel built in the 1930s amidst spectacular high mountain landscapes. The 48-kilometer-long panoramic road winds its way through 36 hairpin bends up to an altitude of over 2,500 meters. It connects the federal states of Salzburg and Carinthia and leads directly into the heart of the Hohe Tauern National Park. The highlight of the journey is the Kaiser-Franz-Josefs-Höhe, from where visitors have a breathtaking view of Austria's highest mountain, the Grossglockner, and the slowly retreating Pasterze glacier. The route combines untouched nature, driving challenge, and deep historical significance."}, facts: {"de":["Wurde zwischen 1930 und 1935 in einer ingenieurtechnischen Meisterleistung erbaut.","Der höchste Punkt der Passstraße ist das Hochtor auf 2.504 Metern Seehöhe.","Die Strecke ist 48 km lang und verfügt über 36 spektakuläre Kehren.","Die Straße ist wegen Schnee in der Regel nur von Mai bis Oktober passierbar.","Ein beliebtes Ziel für Auto- und Motorradfahrer aus ganz Europa.","Entlang der Strecke leben zutrauliche Murmeltiere, die von Touristen beobachtet werden.","Das Befahren der Hochalpenstraße ist mautpflichtig.","Die Straße diente in den 1930ern auch als großes Arbeitsbeschaffungsprogramm.","Dutzende Ausstellungen und Info-Points entlang der Route erklären die Alpenwelt.","Gehört zu den meistbesuchten Sehenswürdigkeiten Österreichs."],"hu":["1930 és 1935 között épült egy mérnöki mestermű keretében.","A hágóút legmagasabb pontja a Hochtor, 2504 méteres magasságban.","A szakasz 48 km hosszú és 36 látványos hajtűkanyarral rendelkezik.","Az út a hó miatt általában csak májustól októberig járható.","Kedvelt célpont az autó- és motorversenyzők körében egész Európából.","Az út mentén szelíd mormoták élnek, amelyeket a turisták is megfigyelhetnek.","A magasalpesi út használata díjköteles (Maut).","Az út az 1930-as években egy nagy munkahelyteremtő programként is szolgált.","Az útvonal mentén tucatnyi kiállítás és információs pont mutatja be az alpesi világot.","Ausztria leglátogatottabb nevezetességei közé tartozik."],"ro":["A fost construit între 1930 și 1935 într-o realizare inginerească magistrală.","Cel mai înalt punct al trecătoarei este Hochtor la 2.504 metri deasupra nivelului mării.","Traseul are o lungime de 48 km și are 36 de curbe spectaculoase.","Drumul este de obicei deschis doar din mai până în octombrie din cauza zăpezii.","O destinație populară pentru șoferii de mașini și motociclete din toată Europa.","Marmotele prietenoase, care pot fi observate de turiști, trăiesc de-a lungul rutei.","Folosirea Drumului Alpin presupune plata unei taxe de drum.","În anii 1930, drumul a servit și ca un mare program de creare a locurilor de muncă.","Zeci de expoziții și puncte de informare de-a lungul rutei explică lumea alpină.","Este una dintre cele mai vizitate atracții turistice din Austria."],"en":["Built between 1930 and 1935 in a masterful feat of engineering.","The highest point of the mountain pass is the Hochtor at 2,504 meters above sea level.","The route is 48 km long and features 36 spectacular hairpin bends.","The road is usually only passable from May to October due to snow.","A popular destination for car and motorcycle drivers from all over Europe.","Tame marmots, which can be observed by tourists, live along the route.","Driving on the High Alpine Road is subject to a toll.","In the 1930s, the road also served as a major job creation program.","Dozens of exhibitions and info points along the route explain the alpine world.","It is one of the most visited tourist attractions in Austria."]}
  },
  {
    id: "AT-Hohensalzburg", type: "landmark", parent: "AT-5", coords: [13.0475, 47.7949],
    name: { de: "Festung Hohensalzburg", hu: "Hohensalzburg vára", ro: "Cetatea Hohensalzburg", en: "Hohensalzburg Fortress" },
    image: "/geo-images/austria/hohensalzburg.webp",
    description: {"de":"Die Festung Hohensalzburg ist das weithin sichtbare Wahrzeichen der Mozartstadt Salzburg und thront majestätisch auf dem Festungsberg hoch über den Dächern der barocken Altstadt. Sie ist eine der größten und am besten erhaltenen mittelalterlichen Burganlagen in ganz Europa. Der Bau begann bereits im Jahr 1077 durch Erzbischof Gebhard und wurde über Jahrhunderte hinweg zu einer uneinnehmbaren Wehranlage ausgebaut – die Festung wurde tatsächlich nie von Feinden eingenommen. Heute können Besucher die prächtigen Fürstenzimmer mit ihren kunstvollen Holzschnitzereien, die alte Folterkammer und das beeindruckende Burgmuseum erkunden. Den Höhepunkt bildet jedoch der fantastische Panoramablick auf die Stadt und die umliegende Alpenwelt.","hu":"A Hohensalzburg vára a Mozart-város, Salzburg messziről látható jelképe, amely fenségesen trónol a Festungsbergen (Várhegyen), magasan a barokk óváros tetői felett. Ez Európa egyik legnagyobb és legjobb állapotban fennmaradt középkori erődítménye. Építését még 1077-ben kezdte Gebhard érsek, és az évszázadok során bevehetetlen védelmi rendszerré bővítették – a várat valójában soha nem foglalták el az ellenségek. Ma a látogatók felfedezhetik a pompás hercegi szobákat a maguk művészi fafaragásaival, a régi kínzókamrát és a lenyűgöző vármúzeumot. A fénypontot azonban a városra és a környező alpesi világra nyíló fantasztikus panoráma jelenti.","ro":"Fortăreața Hohensalzburg este un simbol vizibil de departe al orașului lui Mozart, Salzburg, așezată maiestuos pe dealul Festungsberg, deasupra acoperișurilor centrului vechi în stil baroc. Este una dintre cele mai mari și mai bine conservate fortărețe medievale din întreaga Europă. Construcția a început în 1077 sub Arhiepiscopul Gebhard și a fost extinsă de-a lungul secolelor într-o structură defensivă inexpugnabilă – fortăreața nu a fost de fapt niciodată cucerită de inamici. Astăzi, vizitatorii pot explora magnificele camere ale prinților cu sculpturile lor elaborate în lemn, vechea cameră de tortură și impresionantul muzeu al fortăreței. Cu toate acestea, punctul culminant este vederea panoramică fantastică a orașului și a munților Alpi din jur.","en":"The Hohensalzburg Fortress is the widely visible landmark of the city of Mozart, Salzburg, sitting majestically on the Festungsberg hill high above the roofs of the Baroque old town. It is one of the largest and best-preserved medieval castle complexes in all of Europe. Construction began in 1077 by Archbishop Gebhard and it was expanded over centuries into an impregnable defensive structure – the fortress was in fact never conquered by enemies. Today, visitors can explore the magnificent Princes' Chambers with their elaborate wood carvings, the old torture chamber, and the impressive castle museum. The highlight, however, is the fantastic panoramic view of the city and the surrounding Alps."}, facts: {"de":["Mit rund 7.000 Quadratmetern umbauter Fläche eine der größten Burgen Europas.","Die Burganlage wurde im Laufe von 900 Jahren nie erfolgreich belagert.","Ein alter, mechanischer Aufzug zur Materialversorgung (Reißzug) stammt aus 1495.","Die prächtigen 'Fürstenzimmer' (Goldene Stube) weisen reichlich spätgotisches Schnitzwerk auf.","Besitzt den 'Salzburger Stier', eine berühmte, laute historische Orgelwalze.","Wurde im 19. Jahrhundert als Kaserne und Gefängnis genutzt.","Die Festungsbahn, eine Standseilbahn aus dem Jahr 1892, bringt Besucher bequem nach oben.","Erzbischof Leonhard von Keutschach gab der Burg um 1500 ihr heutiges Erscheinungsbild.","Sein Wappen, die 'Salzburger Rübe', ist überall auf der Burg zu finden.","Ganzjährig Veranstaltungsort für die hochkarätigen Festungskonzerte."],"hu":["Mintegy 7000 négyzetméteres beépített területével Európa egyik legnagyobb vára.","Az erődöt 900 év alatt soha nem ostromolták meg sikeresen.","Egy régi, anyagellátást szolgáló mechanikus felvonó (Reißzug) 1495-ből származik.","A pompás 'Hercegi szobák' (Arany szoba) gazdag késő gótikus faragványokkal rendelkeznek.","Itt található a 'Salzburgi bika' (Salzburger Stier), egy híres, hangos történelmi orgonahenger.","A 19. században laktanyaként és börtönként használták.","A Festungsbahn, egy 1892-ből származó sikló, kényelmesen felviszi a látogatókat.","Leonhard von Keutschach érsek 1500 körül adta a vár jelenlegi arculatát.","Címere, a 'Salzburgi répa', mindenhol megtalálható a várban.","Egész évben rangos várkoncertek (Festungskonzerte) helyszíne."],"ro":["Cu aproximativ 7.000 de metri pătrați de suprafață construită, este unul dintre cele mai mari castele din Europa.","Fortăreața nu a fost niciodată asediată cu succes pe parcursul a 900 de ani.","Un lift mecanic vechi pentru alimentarea cu materiale (Reisszug) datează din 1495.","Magnificele 'Camere ale Prinților' (Goldene Stube) au sculpturi abundente în stil gotic târziu.","Deține „Taurul de Salzburg”, o orgă mecanică istorică faimoasă și zgomotoasă.","A fost folosită ca o cazarmă și închisoare în secolul al XIX-lea.","Funicularul fortăreței (Festungsbahn), datând din 1892, aduce vizitatorii confortabil în vârf.","Arhiepiscopul Leonhard von Keutschach a dat castelului înfățișarea actuală în jurul anului 1500.","Stema sa, „Ridichea de Salzburg”, poate fi găsită peste tot în castel.","Loc de desfășurare pe tot parcursul anului pentru concertele de top de la fortăreață."],"en":["With around 7,000 square meters of built area, it is one of the largest castles in Europe.","The fortress was never successfully besieged over the course of 900 years.","An old, mechanical lift for material supply (Reisszug) dates back to 1495.","The magnificent 'Princes' Chambers' (Goldene Stube) feature abundant late Gothic carvings.","Features the 'Salzburg Bull', a famous, loud historical mechanical organ.","Was used as a barracks and prison in the 19th century.","The fortress funicular (Festungsbahn), dating from 1892, brings visitors comfortably to the top.","Archbishop Leonhard von Keutschach gave the castle its current appearance around 1500.","His coat of arms, the 'Salzburg Turnip', can be found all over the castle.","A year-round venue for high-class fortress concerts."]}
  },
  {
    id: "AT-Belvedere", type: "landmark", parent: "AT-9", coords: [16.3808, 48.1915],
    name: { de: "Schloss Belvedere", hu: "Belvedere kastély", ro: "Palatul Belvedere", en: "Belvedere Palace" },
    image: "/geo-images/austria/belvedere.webp",
    description: {"de":"Schloss Belvedere in Wien ist eine der prächtigsten barocken Schlossanlagen Europas und besteht aus zwei Gebäuden – dem Oberen und Unteren Belvedere. Errichtet im frühen 18. Jahrhundert vom genialen Barockarchitekten Johann Lukas von Hildebrandt, diente es ursprünglich als prunkvolle Sommerresidenz für den gefeierten Feldherrn Prinz Eugen von Savoyen. Die beiden Schösser sind durch einen herrlichen, symmetrisch angelegten Barockgarten mit Wasserspielen und Skulpturen verbunden. Heute beherbergt das Belvedere die bedeutendste Sammlung österreichischer Kunst, darunter die weltgrößte Gustav Klimt-Sammlung mit seinem berühmtesten goldenen Meisterwerk 'Der Kuss'.","hu":"A bécsi Belvedere kastély Európa egyik legpompásabb barokk kastélyegyüttese, amely két épületből – a Felső és az Alsó Belvedere-ből – áll. A kora 18. században Johann Lukas von Hildebrandt zseniális barokk építész által emelt épület eredetileg az ünnepelt hadvezér, Savoyai Jenő herceg fényűző nyári rezidenciájaként szolgált. A két kastélyt egy csodálatos, szimmetrikusan kialakított, szökőkutakkal és szobrokkal díszített barokk kert köti össze. Ma a Belvedere ad otthont az osztrák művészet legjelentősebb gyűjteményének, beleértve a világ legnagyobb Gustav Klimt-gyűjteményét is, amelynek része a leghíresebb arany mesterműve, 'A csók' is.","ro":"Palatul Belvedere din Viena este unul dintre cele mai magnifice complexe de palate baroce din Europa și este format din două clădiri – Belvedere Superior și Inferior. Construit la începutul secolului al XVIII-lea de genialul arhitect baroc Johann Lukas von Hildebrandt, a servit inițial ca o reședință de vară somptuoasă pentru celebrul comandant militar, Prințul Eugen de Savoia. Cele două palate sunt conectate printr-o grădină barocă splendidă, simetric amenajată, cu fântâni arteziene și sculpturi. Astăzi, Belvedere găzduiește cea mai importantă colecție de artă austriacă, inclusiv cea mai mare colecție Gustav Klimt din lume, având faimoasa sa capodoperă de aur, „Sărutul”.","en":"Belvedere Palace in Vienna is one of the most magnificent Baroque palace complexes in Europe and consists of two buildings – the Upper and Lower Belvedere. Built in the early 18th century by the brilliant Baroque architect Johann Lukas von Hildebrandt, it originally served as a sumptuous summer residence for the celebrated military commander Prince Eugene of Savoy. The two palaces are connected by a splendid, symmetrically landscaped Baroque garden with water features and sculptures. Today, the Belvedere houses the most important collection of Austrian art, including the world's largest Gustav Klimt collection with his famous golden masterpiece 'The Kiss'."}, facts: {"de":["Das Schlossensemble wurde für den Feldherrn Prinz Eugen von Savoyen errichtet.","Es besteht aus zwei Schlössern: dem Oberen und dem Unteren Belvedere.","Das Obere Belvedere beherbergt das Originalbild 'Der Kuss' von Gustav Klimt.","Hier wurde 1955 der historische Österreichische Staatsvertrag unterzeichnet.","Die Gärten zwischen den Schlössern zählen zu den bedeutendsten historischen Anlagen Europas.","Anton Bruckner starb im sogenannten Kustodenstöckl im Schlossgarten.","Das Gebäude beeindruckt durch aufwändige Deckenfresken und einen prächtigen Marmorsaal.","Zählt neben Schönbrunn zu den meistbesuchten Sehenswürdigkeiten in Wien.","Die Orangerie und der Prunkstall ergänzen das prachtvolle Areal.","Das Wort Belvedere stammt aus dem Italienischen und bedeutet 'schöne Aussicht'."],"hu":["A kastélyegyüttest Savoyai Jenő herceg hadvezér számára építették.","Két kastélyból áll: a Felső és az Alsó Belvedere-ből.","A Felső Belvedere ad otthont Gustav Klimt 'A csók' című eredeti festményének.","Itt írták alá 1955-ben a történelmi Osztrák Államszerződést.","A kastélyok közötti kertek Európa legjelentősebb történelmi parkjai közé tartoznak.","Anton Bruckner zeneszerző a kastélykert úgynevezett Kustodenstöckl-jében hunyt el.","Az épület lenyűgöző mennyezetfreskókkal és egy pompás Márványteremmel rendelkezik.","Schönbrunn mellett Bécs egyik leglátogatottabb nevezetessége.","A pálmaház (Orangerie) és a díszistálló teszi teljessé a pompás területet.","A Belvedere szó az olaszból származik, és 'szép kilátást' jelent."],"ro":["Complexul de palate a fost construit pentru comandantul Prințul Eugen de Savoia.","Este format din două palate: Belvedere Superior și Belvedere Inferior.","Belvedere Superior găzduiește pictura originală 'Sărutul' de Gustav Klimt.","Tratatul istoric de stat austriac a fost semnat aici în 1955.","Grădinile dintre palate sunt printre cele mai importante peisaje istorice din Europa.","Compozitorul Anton Bruckner a murit în așa-numitul Kustodenstöckl din grădina palatului.","Clădirea impresionează prin fresce elaborate pe tavan și o magnifică Sală de Marmură.","Alături de Schönbrunn, este una dintre cele mai vizitate atracții din Viena.","Oranjeria și grajdurile palatului completează zona magnifică.","Cuvântul Belvedere provine din italiană și înseamnă „vedere frumoasă”."],"en":["The palace ensemble was built for the military commander Prince Eugene of Savoy.","It consists of two palaces: the Upper and the Lower Belvedere.","The Upper Belvedere houses the original painting 'The Kiss' by Gustav Klimt.","The historic Austrian State Treaty was signed here in 1955.","The gardens between the palaces are among the most important historical landscapes in Europe.","The composer Anton Bruckner died in the so-called Kustodenstöckl in the palace garden.","The building impresses with elaborate ceiling frescoes and a magnificent Marble Hall.","Alongside Schönbrunn, it is one of the most visited attractions in Vienna.","The Orangery and the Palace Stables complete the magnificent area.","The word Belvedere comes from Italian and means 'beautiful view'."]}
  },
  {
    id: "AT-Hohenwerfen", type: "landmark", parent: "AT-5", coords: [13.1883, 47.4831],
    name: { de: "Burg Hohenwerfen", hu: "Hohenwerfen vára", ro: "Castelul Hohenwerfen", en: "Hohenwerfen Castle" },
    image: "/geo-images/austria/hohenwerfen.webp",
    description: {"de":"Die mächtige Burg Hohenwerfen erhebt sich dramatisch auf einem 155 Meter hohen, steilen Felskegel hoch über dem Salzachtal und ist umgeben von der eindrucksvollen Gebirgskulisse des Tennengebirges. Sie wurde im 11. Jahrhundert – zeitgleich mit der Festung Hohensalzburg – von den Salzburger Erzbischöfen als strategisches Bollwerk errichtet. Die Trutzburg besticht durch ihre wuchtigen Mauern, Verliese und Rüstkammern, die Besucher zurück ins raue Mittelalter versetzen. Heute ist Burg Hohenwerfen nicht nur als historisches Denkmal berühmt, sondern auch für den historischen Landesfalkenhof, wo täglich spektakuläre Flugvorführungen mit Greifvögeln wie Adlern, Falken und Geiern stattfinden.","hu":"A hatalmas Hohenwerfen vára drámaian emelkedik egy 155 méter magas, meredek sziklakúpon a Salzach völgye felett, a Tennengebirge (Tennen-hegység) lenyűgöző hegyi kulisszájával övezve. A 11. században – a Hohensalzburgi várral egy időben – építették a salzburgi érsekek stratégiai védőbástyaként. A védővár masszív falaival, tömlöceivel és fegyvertáraival nyűgöz le, amelyek visszarepítik a látogatókat a zord középkorba. Ma a Hohenwerfen vára nemcsak történelmi műemlékként híres, hanem a történelmi tartományi solymászközpontról is, ahol naponta tartanak látványos röpröptetéseket ragadozó madarakkal, például sasokkal, sólymokkal és keselyűkkel.","ro":"Impozantul Castel Hohenwerfen se înalță dramatic pe un con stâncos abrupt de 155 de metri înălțime, deasupra văii Salzach, fiind înconjurat de fundalul muntos impresionant al Munților Tennengebirge. A fost construit în secolul al XI-lea – în același timp cu Fortăreața Hohensalzburg – de către arhiepiscopii de Salzburg ca un bastion strategic. Castelul defensiv impresionează prin zidurile sale masive, temnițele și armurăriile sale, care transportă vizitatorii înapoi în asprul Ev Mediu. Astăzi, Castelul Hohenwerfen nu este renumit doar ca monument istoric, ci și pentru Centrul Istoric de Șoimărit de Stat, unde au loc zilnic demonstrații spectaculoase de zbor cu păsări de pradă precum vulturi, șoimi și vulturi pleșuvi.","en":"The mighty Hohenwerfen Castle rises dramatically on a 155-meter-high, steep rocky cone high above the Salzach Valley and is surrounded by the impressive mountain backdrop of the Tennengebirge. It was built in the 11th century – at the same time as the Hohensalzburg Fortress – by the Archbishops of Salzburg as a strategic bulwark. The defensive castle impresses with its massive walls, dungeons, and armories, transporting visitors back to the harsh Middle Ages. Today, Hohenwerfen Castle is famous not only as a historical monument but also for the historic State Falconry Center, where spectacular flight demonstrations with birds of prey such as eagles, falcons, and vultures take place daily."}, facts: {"de":["Erbaut im Jahr 1077 durch Erzbischof Gebhard von Salzburg.","Diente in ihrer Geschichte als stark befestigtes Gefängnis für hochrangige Persönlichkeiten.","Der historische Landesfalkenhof auf der Burg zeigt traditionelle Greifvogel-Flugvorführungen.","War ein zentraler Drehort für den Hollywood-Film 'Agenten sterben einsam' (1968) mit Clint Eastwood.","Eine moderne Standseilbahn erleichtert heute den Aufstieg zur Burg.","Die Glocke im Glockenturm stammt aus dem Jahr 1568.","Wurde während der Bauernkriege im 16. Jahrhundert stark beschädigt und danach verstärkt.","Besitzt ein eigenes Waffenmuseum mit Waffen und Rüstungen aus verschiedenen Epochen.","Die finsteren Verliese können im Rahmen einer Burgführung besichtigt werden.","Bietet einen grandiosen Rundumblick auf das Tennengebirge und das Hagengebirge."],"hu":["1077-ben építtette Gebhard salzburgi érsek.","Történelme során erősen megerősített börtönként szolgált magas rangú személyiségek számára.","A várban található történelmi tartományi solymászközpont hagyományos ragadozómadár-röpröptetéseket mutat be.","A 'Kémek a Sasfészekben' (1968) című, Clint Eastwood főszereplésével készült hollywoodi film egyik központi forgatási helyszíne volt.","Ma egy modern sikló könnyíti meg a várba való feljutást.","A harangtoronyban lévő harang 1568-ból származik.","A 16. századi parasztháborúk során súlyosan megsérült, majd ezt követően megerősítették.","Saját fegyvermúzeummal rendelkezik, amely különböző korszakokból származó fegyvereket és páncélokat mutat be.","A sötét tömlöcök egy várvezetés keretében megtekinthetők.","Pazar panorámát nyújt a Tennen-hegységre és a Hagen-hegységre."],"ro":["Construit în 1077 de către Arhiepiscopul Gebhard de Salzburg.","A servit de-a lungul istoriei sale ca o închisoare puternic fortificată pentru personalități de rang înalt.","Centrul istoric de șoimărit de stat din castel prezintă demonstrații tradiționale de zbor cu păsări de pradă.","A fost o locație centrală de filmare pentru filmul de la Hollywood „Acolo unde se avântă vulturii” (1968) cu Clint Eastwood.","Un funicular modern face astăzi urcarea la castel mult mai ușoară.","Clopotul din clopotniță datează din 1568.","A fost grav avariat în timpul Războiului Țărănesc German din secolul al XVI-lea și apoi întărit.","Are un propriu muzeu de arme cu arme și armuri din diferite epoci.","Temnițele întunecate pot fi vizitate în timpul unui tur ghidat al castelului.","Oferă o vedere panoramică magnifică asupra Munților Tennengebirge și Hagengebirge."],"en":["Built in 1077 by Archbishop Gebhard of Salzburg.","Served throughout its history as a heavily fortified prison for high-ranking personalities.","The historic State Falconry Center at the castle showcases traditional birds of prey flight demonstrations.","Was a central filming location for the Hollywood movie 'Where Eagles Dare' (1968) starring Clint Eastwood.","A modern funicular railway makes the ascent to the castle much easier today.","The bell in the bell tower dates from 1568.","Was heavily damaged during the German Peasants' War in the 16th century and subsequently reinforced.","Has its own weapons museum featuring weapons and armor from different eras.","The dark dungeons can be visited as part of a guided castle tour.","Offers a magnificent panoramic view of the Tennengebirge and Hagengebirge mountains."]}
  },
  {
    id: "AT-Eggenberg", type: "landmark", parent: "AT-6", coords: [15.3908, 47.0736],
    name: { de: "Schloss Eggenberg", hu: "Eggenberg-kastély", ro: "Castelul Eggenberg", en: "Eggenberg Palace" },
    image: "/geo-images/austria/eggenberg.webp",
    description: {"de":"Schloss Eggenberg, am westlichen Stadtrand von Graz gelegen, ist die prunkvollste barocke Schlossanlage der Steiermark und wurde als komplexes allegorisches Kunstwerk konzipiert. Der Erbauer, Fürst Hans Ulrich von Eggenberg, ließ das Schloss im 17. Jahrhundert nach astronomischen und kalendarischen Vorgaben erbauen: 365 Fenster, 31 Räume pro Stockwerk, 24 Prunkräume und 4 Ecktürme symbolisieren die Zeit, die Jahreszeiten und das Universum. Im Inneren zeugt der glanzvolle Planetensaal von diesem Streben nach kosmischer Harmonie. Der weitläufige englische Landschaftsgarten, in dem freilaufende Pfauen spazieren, und das architektonische Meisterwerk machten das Schloss 2010 zur Erweiterung des Grazer UNESCO-Welterbes.","hu":"Az Eggenberg-kastély, amely Graz nyugati szélén fekszik, Stájerország legpompásabb barokk kastélyegyüttese, és komplex allegorikus műalkotásként tervezték. Építtetője, Hans Ulrich von Eggenberg herceg a 17. században csillagászati és naptári előírások szerint emeltette a kastélyt: a 365 ablak, emeletenként 31 szoba, 24 díszterem és a 4 saroktorony az időt, az évszakokat és a világegyetemet szimbolizálja. Belül a ragyogó Bolygóterem (Planetensaal) tanúskodik erről a kozmikus harmóniára való törekvésről. A kiterjedt angol tájkert, amelyben szabadon kószáló pávák sétálnak, és az építészeti mestermű 2010-ben a grazi UNESCO világörökség kibővítésévé tette a kastélyt.","ro":"Palatul Eggenberg, situat la periferia vestică a orașului Graz, este cel mai magnific complex de palate baroce din Stiria și a fost conceput ca o lucrare de artă alegorică complexă. Constructorul său, Prințul Hans Ulrich von Eggenberg, a pus să se construiască palatul în secolul al XVII-lea conform specificațiilor astronomice și calendaristice: 365 de ferestre, 31 de camere pe etaj, 24 de camere de stat și 4 turnuri de colț simbolizează timpul, anotimpurile și universul. În interior, strălucitoarea Sală a Planetelor (Planetensaal) mărturisește această străduință pentru armonie cosmică. Grădina peisagistică englezească vastă, unde păunii se plimbă liberi, și capodopera arhitecturală au făcut ca palatul să fie adăugat la situl Patrimoniului Mondial UNESCO din Graz în 2010.","en":"Eggenberg Palace, located on the western outskirts of Graz, is the most magnificent Baroque palace complex in Styria and was designed as a complex allegorical work of art. Its builder, Prince Hans Ulrich von Eggenberg, had the palace constructed in the 17th century according to astronomical and calendrical specifications: 365 windows, 31 rooms per floor, 24 state rooms, and 4 corner towers symbolize time, the seasons, and the universe. Inside, the brilliant Planet Hall (Planetensaal) testifies to this striving for cosmic harmony. The expansive English landscape garden, where freely roaming peacocks stroll, and the architectural masterpiece led to the palace being added to the Graz UNESCO World Heritage site in 2010."}, facts: {"de":["Die Architektur des Schlosses ist ein exakter architektonischer Kalender.","Besitzt genau 365 Fenster, die die Tage eines Jahres repräsentieren.","Die 24 Prunkräume stehen für die Stunden eines Tages.","Im Inneren befindet sich die berühmte Alte Galerie mit europäischer Kunst aus fünf Jahrhunderten.","Gehört seit 2010 zum UNESCO-Weltkulturerbe der Stadt Graz.","Der Planetensaal ist das Herzstück und zeigt kunstvolle Gemälde der Sternzeichen und Planeten.","In den historischen Räumen gibt es keinen elektrischen Strom; sie werden nur durch Kerzenlicht erhellt.","Der weitläufige Park ist bekannt für seine freilaufenden farbenprächtigen Pfauen.","Beherbergt ein Archäologiemuseum und ein sehenswertes Münzkabinett.","Der Schlossbau wurde während des Dreißigjährigen Krieges als Zeichen des Friedens vollendet."],"hu":["A kastély építészete egy pontos építészeti naptár.","Pontosan 365 ablaka van, amelyek az év napjait jelképezik.","A 24 díszterem a nap óráit szimbolizálja.","Belsejében található a híres Régi Képtár (Alte Galerie), amely öt évszázad európai művészetét mutatja be.","2010 óta a grazi UNESCO világörökség része.","A Bolygóterem a kastély szíve, amely az állatövi jegyek és bolygók művészi festményeit mutatja be.","A történelmi termekben nincs áram; azokat csak gyertyafénnyel világítják meg.","A kiterjedt park a szabadon kószáló, színpompás páváiról is ismert.","Egy régészeti múzeumnak és egy látványos éremgyűjteménynek ad otthont.","A kastély építését a harmincéves háború alatt, a béke jeleként fejezték be."],"ro":["Arhitectura palatului este un calendar arhitectural exact.","Are exact 365 de ferestre, reprezentând zilele unui an.","Cele 24 de camere de stat simbolizează orele unei zile.","În interior se află faimoasa Vechea Galerie (Alte Galerie) cu artă europeană din cinci secole.","Face parte din Patrimoniul Mondial UNESCO al orașului Graz din 2010.","Sala Planetelor este piesa centrală și prezintă picturi elaborate ale semnelor zodiacale și ale planetelor.","Nu există energie electrică în camerele istorice; acestea sunt iluminate doar la lumina lumânărilor.","Parcul vast este cunoscut pentru păunii săi colorați care se plimbă liberi.","Găzduiește un muzeu de arheologie și un cabinet numismatic demn de văzut.","Construcția palatului a fost finalizată în timpul Războiului de Treizeci de Ani ca un semn al păcii."],"en":["The architecture of the palace is an exact architectural calendar.","It has exactly 365 windows, representing the days of a year.","The 24 state rooms symbolize the hours of a day.","Inside is the famous Old Gallery (Alte Galerie) with European art from five centuries.","Has been part of the UNESCO World Heritage site of Graz since 2010.","The Planet Hall is the centerpiece and features elaborate paintings of the zodiac signs and planets.","There is no electricity in the historical rooms; they are illuminated only by candlelight.","The vast park is known for its brightly colored free-roaming peacocks.","Houses an archaeology museum and a noteworthy coin cabinet.","The construction of the palace was completed during the Thirty Years' War as a sign of peace."]}
  },
  {
    id: "AT-Hochosterwitz", type: "landmark", parent: "AT-2", coords: [14.4522, 46.7567],
    name: { de: "Burg Hochosterwitz", hu: "Hochosterwitz vára", ro: "Castelul Hochosterwitz", en: "Hochosterwitz Castle" },
    image: "/geo-images/austria/hochosterwitz.webp",
    description: {"de":"Die Burg Hochosterwitz ist Kärntens beeindruckendstes historisches Wahrzeichen und gilt als eines der schönsten Burgensembles Europas. Die Festung thront majestätisch auf einem steil abfallenden, 150 Meter hohen Dolomitfelsen und sieht aus wie einem Märchenbuch entsprungen. Weltweit einzigartig ist der geniale, spiralförmige Aufstieg, der durch 14 hintereinander gestaffelte, befestigte Burgtore führt. Diese ausgeklügelte Verteidigungsanlage machte die Burg so uneinnehmbar, dass sie in ihrer jahrhundertelangen Geschichte kein einziges Mal erobert wurde. Im Inneren präsentiert ein Museum Rüstungen, Waffen und Bilder aus der Geschichte der Familie Khevenhüller, in deren Besitz sich die Burg seit über 400 Jahren befindet.","hu":"A Hochosterwitz vára Karintia leglenyűgözőbb történelmi jelképe, és Európa egyik legszebb váregyüttesének tartják. Az erőd fenségesen trónol egy 150 méter magas, meredek dolomitsziklán, és úgy néz ki, mintha egy mesekönyvből lépett volna elő. Világviszonylatban is egyedülálló a zseniális, spirál alakú feljáró, amely 14, egymás mögött elhelyezkedő, megerősített várkapun vezet keresztül. Ez a kifinomult védelmi rendszer tette a várat olyan bevehetetlenné, hogy évszázados története során egyszer sem tudták bevenni. Belsejében egy múzeum mutat be páncélokat, fegyvereket és képeket a Khevenhüller család történetéből, akiknek több mint 400 éve a birtokában van a vár.","ro":"Castelul Hochosterwitz este cel mai impresionant reper istoric al Carintiei și este considerat unul dintre cele mai frumoase ansambluri de castele din Europa. Fortăreața este așezată maiestuos pe o stâncă de dolomit abruptă de 150 de metri înălțime și arată ca și cum ar fi ieșit dintr-o carte de povești. Unică în lume este ascensiunea ingenioasă, în formă de spirală, care trece prin 14 porți fortificate succesive. Acest sistem de apărare sofisticat a făcut castelul atât de inexpugnabil, încât nu a fost niciodată cucerit în istoria sa de secole. În interior, un muzeu prezintă armuri, arme și imagini din istoria familiei Khevenhüller, care deține castelul de peste 400 de ani.","en":"Hochosterwitz Castle is Carinthia's most impressive historical landmark and is considered one of the most beautiful castle ensembles in Europe. The fortress sits majestically on a 150-meter-high, steep dolomite rock and looks like it stepped right out of a fairy tale book. Unique in the world is the ingenious, spiral ascent that leads through 14 staggered, fortified castle gates. This sophisticated defense system made the castle so impregnable that it was never conquered once in its centuries-long history. Inside, a museum presents armor, weapons, and pictures from the history of the Khevenhüller family, who have owned the castle for over 400 years."}, facts: {"de":["Die Burg ist weltweit berühmt für ihren Aufstieg durch 14 gesicherte Burgtore.","Sie wurde auf einem 150 Meter hohen, alleinstehenden Kalksteinfelsen erbaut.","Seit dem Jahr 1571 befindet sich die Burg durchgehend im Besitz der Adelsfamilie Khevenhüller.","Aufgrund ihrer genialen Architektur wurde die Burg niemals von Feinden (z.B. den Türken) eingenommen.","Ein moderner, schräger Schrägaufzug ermöglicht heute auch einen barrierefreien Zugang.","Ein Burgmuseum zeigt historische Waffen, Rüstungen (darunter eine riesige Rüstung für einen 2,25m großen Burghauptmann) und Gemälde.","Urkundlich wurde die Anlage erstmals im Jahr 860 erwähnt.","Die Burgkapelle im Haupthof wird noch heute für Trauungen genutzt.","Angeblich diente die Burg als Inspiration für das Disney-Schloss in 'Schneewittchen'.","Die Rüstkammer enthält Kanonen und Hiebwaffen aus dem 16. Jahrhundert."],"hu":["A vár világszerte híres a 14 megerősített várkapun átvezető feljárójáról.","Egy 150 méter magas, magányosan álló mészkősziklára épült.","A vár 1571 óta folyamatosan a Khevenhüller nemesi család birtokában van.","Zseniális építészetének köszönhetően a várat soha nem vették be az ellenségek (pl. a törökök).","Ma egy modern, ferde sikló teszi lehetővé az akadálymentes bejutást is.","A vármúzeum történelmi fegyvereket, páncélokat (köztük egy hatalmas páncélt egy 2,25 m magas várkapitány számára) és festményeket mutat be.","Az építményt oklevelekben először a 860. évben említik.","A főudvarban található várkápolnát ma is használják esküvőkre.","Állítólag ez a vár szolgált inspirációul a Disney 'Hófehérke' kastélyához.","A fegyvertár a 16. századból származó ágyúkat és szálfegyvereket rejt."],"ro":["Castelul este renumit în întreaga lume pentru ascensiunea sa prin 14 porți de castel securizate.","A fost construit pe o stâncă de calcar izolată, înaltă de 150 de metri.","Din anul 1571, castelul a fost în mod continuu în posesia familiei nobiliare Khevenhüller.","Datorită arhitecturii sale ingenioase, castelul nu a fost niciodată luat de inamici (de ex., otomanii).","Un funicular modern înclinat permite astăzi și un acces fără bariere.","Un muzeu al castelului expune arme istorice, armuri (inclusiv o armură uriașă pentru un căpitan de castel înalt de 2,25 m) și picturi.","Complexul a fost menționat pentru prima dată în documente în anul 860.","Capela castelului din curtea principală este folosită și astăzi pentru nunți.","Se presupune că acest castel a servit drept inspirație pentru Castelul Disney din „Albă ca Zăpada”.","Armurăria conține tunuri și arme albe din secolul al XVI-lea."],"en":["The castle is world-famous for its ascent through 14 secured castle gates.","It was built on a 150-meter-high, isolated limestone rock.","Since 1571, the castle has been continuously owned by the Khevenhüller noble family.","Due to its ingenious architecture, the castle was never taken by enemies (e.g., the Turks).","A modern, inclined funicular railway now also allows barrier-free access.","A castle museum exhibits historical weapons, armor (including a giant armor for a 2.25m tall castle captain), and paintings.","The complex was first mentioned in documents in the year 860.","The castle chapel in the main courtyard is still used for weddings today.","Supposedly, the castle served as inspiration for the Disney castle in 'Snow White'.","The armory contains cannons and bladed weapons from the 16th century."]}
  },
  {
    id: "AT-Ambras", type: "landmark", parent: "AT-7", coords: [11.4319, 47.2561],
    name: { de: "Schloss Ambras", hu: "Ambras kastély", ro: "Castelul Ambras", en: "Ambras Castle" },
    image: "/geo-images/austria/ambras.webp",
    description: {"de":"Schloss Ambras liegt malerisch eingebettet auf einer Anhöhe über Innsbruck in Tirol und ist ein kulturelles Erbe der europäischen Renaissance. Der Tiroler Landesfürst, Erzherzog Ferdinand II., ließ im 16. Jahrhundert eine mittelalterliche Burg in dieses prächtige Schloss für seine bürgerliche Frau Philippine Welser umbauen. Ferdinand war ein leidenschaftlicher Sammler und gründete hier das erste Museum der Welt. Seine einzigartigen Kunst-, Wunder- und Rüstkammern können Besucher noch heute am originalen Standort bestaunen. Der atemberaubende Spanische Saal, verziert mit herrlichen Fresken und einer meisterhaften Holzdecke, gehört zu den bedeutendsten und schönsten Renaissancesälen Europas.","hu":"Az Ambras-kastély festőien helyezkedik el egy magaslaton a tiroli Innsbruck felett, és az európai reneszánsz fontos kulturális öröksége. II. Ferdinánd osztrák főherceg a 16. században alakíttatott át egy középkori várat erre a pompás kastélyra polgári származású felesége, Philippine Welser számára. Ferdinánd szenvedélyes gyűjtő volt, és itt alapította meg a világ első múzeumát. Egyedülálló Művészeti és Csodakamráit, valamint Fegyvertárát a látogatók ma is megcsodálhatják az eredeti helyszínen. A lélegzetelállító Spanyol Terem, amelyet gyönyörű freskók és egy mesteri famennyezet díszít, Európa egyik legjelentősebb és legszebb reneszánsz terme.","ro":"Palatul Ambras este situat pitoresc pe un deal deasupra orașului Innsbruck din Tirol și reprezintă o moștenire culturală a Renașterii europene. Conducătorul tirolez, Arhiducele Ferdinand al II-lea, a transformat un castel medieval în acest palat magnific în secolul al XVI-lea pentru soția sa de rând, Philippine Welser. Ferdinand a fost un colecționar pasionat și a fondat aici primul muzeu din lume. Unicele sale Camere de Artă și Curiozități (Kunst- und Wunderkammer), precum și Armurăria sa, pot fi admirate și astăzi în locația lor originală. Uluitoarea Sală Spaniolă, decorată cu fresce superbe și un tavan magistral din lemn, este una dintre cele mai importante și frumoase săli renascentiste din Europa.","en":"Ambras Castle is picturesquely situated on a hill above Innsbruck in Tyrol and is a cultural heritage of the European Renaissance. The Tyrolean ruler, Archduke Ferdinand II, had a medieval castle converted into this magnificent palace in the 16th century for his commoner wife Philippine Welser. Ferdinand was a passionate collector and founded the world's first museum here. His unique Chambers of Art and Wonders (Kunst- und Wunderkammer) and his Armory can still be marveled at by visitors today in their original location. The breathtaking Spanish Hall, decorated with superb frescoes and a masterful wooden ceiling, is one of the most important and beautiful Renaissance halls in Europe."}, facts: {"de":["Gilt dank der Sammlungen Ferdinands II. als das älteste Museum der Welt.","Die Kunst- und Wunderkammer enthält skurrile Objekte wie Korallen, Exotica und wissenschaftliche Instrumente.","Der prächtige 'Spanische Saal' wird für hochkarätige klassische Konzerte genutzt.","Das Schloss wurde von Erzherzog Ferdinand II. für seine nicht standesgemäße Frau Philippine Welser umgebaut.","In der Rüstkammer sind prunkvolle Turnier- und Prunkrüstungen bedeutender Herrscher ausgestellt.","Im oberen Schloss ist eine Portraitgalerie der Habsburger von Albrecht Dürer bis Diego Velázquez zu sehen.","Der weitläufige Schlosspark im Stil eines englischen Landschaftsgartens beherbergt freilaufende Pfauen.","Eine Kuriosität der Sammlung ist das 'Portrait eines Haarmenschen' (Petrus Gonsalvus).","Schloss Ambras gehört heute verwaltungstechnisch zum Kunsthistorischen Museum Wien.","Das Badeschloss der Philippine Welser ist ein selten erhaltenes Zeugnis der Renaissance-Badekultur."],"hu":["II. Ferdinánd gyűjteményeinek köszönhetően a világ legrégebbi múzeumának tartják.","A Művészeti és Csodakamra olyan bizarr tárgyakat rejt, mint korallok, egzotikumok és tudományos eszközök.","A pompás 'Spanyol Termet' rangos klasszikus koncertek rendezésére használják.","A kastélyt II. Ferdinánd főherceg rangon aluli felesége, Philippine Welser számára alakíttatta át.","A fegyvertárban jelentős uralkodók pompás lovagi torna- és díszpáncéljait állítják ki.","A felső kastélyban a Habsburgok portrégalériája látható, Albrecht Dürertől Diego Velázquezig.","A kiterjedt, angol tájkert stílusú kastélyparkban szabadon kószáló pávák élnek.","A gyűjtemény egyik érdekessége egy 'szőrös ember' (Petrus Gonsalvus) portréja.","Az Ambras-kastély ma közigazgatásilag a bécsi Művészettörténeti Múzeumhoz (KHM) tartozik.","Philippine Welser fürdőkastélya a reneszánsz fürdőkultúra ritka, fennmaradt emléke."],"ro":["Este considerat cel mai vechi muzeu din lume datorită colecțiilor lui Ferdinand al II-lea.","Camera de Artă și Curiozități conține obiecte bizare, cum ar fi corali, exotice și instrumente științifice.","Magnifica „Sală Spaniolă” este folosită pentru concerte clasice de înaltă clasă.","Palatul a fost reconstruit de Arhiducele Ferdinand al II-lea pentru soția sa de rang inferior, Philippine Welser.","În armurărie sunt expuse armuri magnifice de turnir și de paradă ale unor conducători importanți.","În palatul superior poate fi văzută o galerie de portrete ale Habsburgilor, de la Albrecht Dürer la Diego Velázquez.","Parcul vast al palatului, în stilul unei grădini peisagistice englezești, adăpostește păuni care se plimbă liberi.","O curiozitate a colecției este „Portretul unui om păros” (Petrus Gonsalvus).","Astăzi, Palatul Ambras face parte din punct de vedere administrativ din Muzeul de Istorie a Artei (KHM) din Viena.","Palatul de baie al Philippinei Welser este o mărturie rară, conservată, a culturii băilor din Renaștere."],"en":["Considered the oldest museum in the world thanks to the collections of Ferdinand II.","The Chamber of Art and Wonders contains bizarre objects such as corals, exotica, and scientific instruments.","The magnificent 'Spanish Hall' is used for top-class classical concerts.","The palace was rebuilt by Archduke Ferdinand II for his non-royal wife, Philippine Welser.","Magnificent tournament and parade armor of important rulers is exhibited in the armory.","A portrait gallery of the Habsburgs from Albrecht Dürer to Diego Velázquez can be seen in the upper palace.","The extensive palace park in the style of an English landscape garden is home to free-roaming peacocks.","A curiosity of the collection is the 'Portrait of a Hairy Man' (Petrus Gonsalvus).","Today, Ambras Castle belongs administratively to the Kunsthistorisches Museum (KHM) Vienna.","Philippine Welser's bathhouse is a rarely preserved testament to Renaissance bathing culture."]}
  },
  {
    id: "AT-Krimml", type: "landmark", parent: "AT-5", coords: [12.1694, 47.2100],
    name: { de: "Krimmler Wasserfälle", hu: "Krimmli vízesés", ro: "Cascada Krimml", en: "Krimml Waterfalls" },
    image: "/geo-images/austria/krimml.webp",
    description: {"de":"Die Krimmler Wasserfälle im Bundesland Salzburg sind mit einer beeindruckenden Fallhöhe von 380 Metern die höchsten Wasserfälle Österreichs und gehören zu den fünthöchsten der Welt. Eingebettet in die unberührte Natur des Nationalparks Hohe Tauern, stürzen die gigantischen Wassermassen in drei gewaltigen Stufen tosend ins Tal. Der feine Sprühnebel, der dabei entsteht, bietet nicht nur ein spektakuläres visuelles Erlebnis mit zahlreichen Regenbögen, sondern hat auch medizinisch nachgewiesene heilende Eigenschaften, insbesondere für Asthmatiker und Allergiker. Ein gut ausgebauter Wasserfallweg ermöglicht es Besuchern, hautnah an die tosenden Wassermassen heranzutreten und die rohe Kraft der Natur zu spüren.","hu":"A Salzburg tartományban található Krimmli-vízesés lenyűgöző, 380 méteres esésmagasságával Ausztria legmagasabb vízesése, és a világ öt legmagasabb vízesésének egyike. A Magas-Tauern Nemzeti Park érintetlen természetébe ágyazva a gigantikus víztömegek három hatalmas lépcsőben zuhannak dübörögve a völgybe. A keletkező finom vízpermet nemcsak látványos vizuális élményt nyújt a számtalan szivárvánnyal, hanem orvosilag bizonyított gyógyító hatása is van, különösen asztmások és allergiások számára. Egy jól kiépített túraútvonal (Wasserfallweg) lehetővé teszi a látogatók számára, hogy testközelből is megtapasztalhassák a dübörgő víztömeget és a természet nyers erejét.","ro":"Cascadele Krimml din landul Salzburg sunt, cu o înălțime impresionantă de 380 de metri, cele mai înalte cascade din Austria și se numără printre primele cinci ca înălțime din lume. Înglobate în natura neatinsă a Parcului Național Hohe Tauern, masele gigantice de apă se prăvălesc cu zgomot în vale în trei trepte masive. Ceața fină care este creată oferă nu numai o experiență vizuală spectaculoasă cu numeroase curcubee, dar are și proprietăți vindecătoare dovedite medical, în special pentru astmatici și cei care suferă de alergii. Un traseu bine amenajat de-a lungul cascadei permite vizitatorilor să se apropie de masele de apă învolburate și să simtă forța brută a naturii.","en":"The Krimml Waterfalls in the federal state of Salzburg are, with an impressive drop of 380 meters, the highest waterfalls in Austria and among the five highest in the world. Nestled in the pristine nature of the Hohe Tauern National Park, the gigantic water masses plunge roaringly into the valley in three massive tiers. The fine spray created in the process not only offers a spectacular visual experience with numerous rainbows but also has medically proven healing properties, especially for asthmatics and allergy sufferers. A well-developed waterfall trail allows visitors to get up close to the roaring water masses and feel the raw power of nature."}, facts: {"de":["Mit 380 Metern sind die Krimmler Wasserfälle die höchsten Österreichs.","Das Wasser stürzt in drei mächtigen Kaskaden in die Tiefe.","Liegen im Herzen des Nationalparks Hohe Tauern.","Die Wasserfälle werden vom Schmelzwasser des Krimmler Kees-Gletschers gespeist.","Über 400.000 Besucher kommen jährlich zu diesem Naturdenkmal.","Der Sprühnebel der Fälle hat nachweislich heilende Wirkung auf Atemwegserkrankungen.","Der Alpenverein hat bereits 1879 einen sicheren Besichtigungsweg entlang der Fälle erbaut.","Der höchste Wasserdurchfluss wird in den frühen Sommermonaten erreicht.","Neben den Fällen befindet sich die interaktive Ausstellung 'WasserWelten'.","Die Fälle waren eines der ersten Naturschutzgebiete Österreichs."],"hu":["A 380 méteres esésű Krimmli-vízesés a legmagasabb Ausztriában.","A víz három hatalmas lépcsőben, kaszkádszerűen zuhan a mélybe.","A Magas-Tauern Nemzeti Park szívében található.","A vízeséseket a Krimmler Kees gleccser olvadékvize táplálja.","Évente több mint 400 000 látogató keresi fel ezt a természeti emléket.","A vízesések vízpermete bizonyítottan gyógyító hatással van a légúti megbetegedésekre.","Az Osztrák Alpesi Klub már 1879-ben kiépített egy biztonságos látogatói utat a vízesések mentén.","A legnagyobb vízhozamot a kora nyári hónapokban érik el.","A vízesések mellett található az interaktív 'WasserWelten' (Vízivilág) kiállítás.","A vízesések Ausztria első természetvédelmi területei közé tartoztak."],"ro":["La 380 de metri, Cascadele Krimml sunt cele mai înalte din Austria.","Apa se prăvălește în jos în trei cascade masive.","Sunt situate în inima Parcului Național Hohe Tauern.","Cascadele sunt alimentate de apa de topire de la ghețarul Krimmler Kees.","Peste 400.000 de vizitatori vin anual la acest monument al naturii.","Ceața de la cascade s-a dovedit a avea un efect curativ asupra bolilor respiratorii.","Clubul Alpin a construit un traseu de vizitare sigur de-a lungul cascadelor încă din 1879.","Cel mai mare debit de apă este atins în primele luni de vară.","Lângă cascade se află expoziția interactivă „WasserWelten” (Lumile Apei).","Cascadele au fost una dintre primele rezervații naturale din Austria."],"en":["At 380 meters, the Krimml Waterfalls are the highest in Austria.","The water plunges down in three massive cascades.","Located in the heart of the Hohe Tauern National Park.","The waterfalls are fed by the meltwater of the Krimmler Kees glacier.","Over 400,000 visitors come to this natural monument every year.","The spray from the falls has been proven to have a healing effect on respiratory diseases.","The Alpine Club built a safe viewing path along the falls as early as 1879.","The highest water flow is reached in the early summer months.","Next to the falls is the interactive exhibition 'WasserWelten' (Water Worlds).","The falls were one of the first nature reserves in Austria."]}
  },
  {
    id: "AT-HallstaetterSee", type: "lake", parent: "AT-4", coords: [13.6631, 47.5786],
    name: { de: "Hallstätter See", hu: "Hallstatti-tó", ro: "Lacul Hallstätter", en: "Lake Hallstatt" },
    image: "/geo-images/austria/hallstatt.webp",
    description: {"de":"Der Hallstätter See im Salzkammergut ist ein Naturjuwel von dramatischer Schönheit, der wie ein dunkler Fjord tief zwischen die steilen Felswände des Dachsteinmassivs eingebettet ist. Das unberührte, tiefblaue Wasser spiegelt die umliegenden Alpengipfel und das weltberühmte Uferdorf Hallstatt wider. Durch seine Isolation und die schwer zugänglichen Steilufer hat sich die Gegend eine fast mystische Aura bewahrt. Der See diente jahrhundertelang als einziger Transportweg für das in Hallstatt abgebaute „weiße Gold“ (Salz). Heute zieht der See Besucher aus der ganzen Welt an, die bei einer romantischen Fahrt mit einer traditionellen Salzzille oder bei einer Tauchexpedition im glasklaren Wasser die Ruhe und Erhabenheit dieser UNESCO-Welterberegion suchen.","hu":"A Salzkammergutban található Hallstatti-tó (Hallstätter See) drámai szépségű természeti ékszerdoboz, amely sötét fjordként ékelődik a Dachstein-masszívum meredek sziklafalai közé. Az érintetlen, mélykék víz tükrözi a környező alpesi csúcsokat és a világhírű parti falut, Hallstattot. Elszigeteltsége és a nehezen megközelíthető meredek partok miatt a környék szinte misztikus aurát őrzött meg. A tó évszázadokon át az egyetlen szállítási útvonalként szolgált a Hallstattban bányászott „fehér arany” (a só) számára. Ma a tó a világ minden tájáról vonzza azokat a látogatókat, akik egy hagyományos sószállító ladikkal (Zille) tett romantikus utazás vagy a kristálytiszta vízben való búvárkodás során keresik ennek az UNESCO világörökségi régiónak a nyugalmát és fenségességét.","ro":"Lacul Hallstatt (Hallstätter See) din Salzkammergut este o bijuterie naturală de o frumusețe dramatică, încorporată ca un fiord întunecat adânc între pereții stâncoși abrupți ai masivului Dachstein. Apa virgină, de un albastru intens, reflectă vârfurile alpine din jur și satul de renume mondial de pe malul său, Hallstatt. Datorită izolării sale și a țărmurilor abrupte greu accesibile, zona a păstrat o aură aproape mistică. Timp de secole, lacul a servit drept singura cale de transport pentru „aurul alb” (sarea) extras în Hallstatt. Astăzi, lacul atrage vizitatori din întreaga lume care caută liniștea și măreția acestei regiuni aflate în Patrimoniul Mondial UNESCO într-o excursie romantică cu o barcă tradițională de sare (Zille) sau o expediție de scufundări în apele cristaline.","en":"Lake Hallstatt (Hallstätter See) in the Salzkammergut is a natural jewel of dramatic beauty, embedded like a dark fjord deep between the steep rock faces of the Dachstein massif. The pristine, deep blue water reflects the surrounding alpine peaks and the world-famous shore village of Hallstatt. Due to its isolation and the hard-to-reach steep shores, the area has retained an almost mystical aura. For centuries, the lake served as the only transport route for the 'white gold' (salt) mined in Hallstatt. Today, the lake attracts visitors from all over the world who seek the tranquility and majesty of this UNESCO World Heritage region on a romantic trip with a traditional salt punt (Zille) or a diving expedition in the crystal-clear water."}, facts: {"de":["Der See ist an seiner tiefsten Stelle beachtliche 125 Meter tief.","Zählt zum Kern der UNESCO-Welterberegion Hallstatt-Dachstein/Salzkammergut.","Das Ostufer ist naturbelassen und wurde nie von einer Straße durchschnitten.","Traditionelle Boote auf dem See heißen 'Zillen' oder 'Plätten'.","Der See friert im Winter nur extrem selten komplett zu.","War jahrhundertelang der einzige Weg, das Salz abzutransportieren.","Ein beliebter Panoramaweg umrundet teilweise den See.","Bekannt für hervorragende Fischgründe (Seesaibling, Reinanke).","Jedes Jahr findet an Fronleichnam eine beeindruckende Seeprozession statt.","Die kleine Halbinsel bei Obertraun ist ein beliebtes Freibad."],"hu":["A tó a legmélyebb pontján jelentős, 125 méter mély.","A Hallstatt-Dachstein/Salzkammergut UNESCO világörökségi régió magjához tartozik.","A keleti part érintetlen, soha nem vágták át úttal.","A tavon közlekedő hagyományos csónakokat 'Zillen'-nek vagy 'Plätten'-nek hívják.","A tó télen csak rendkívül ritkán fagy be teljesen.","Évszázadokon át az egyetlen útvonal volt a só elszállítására.","Egy népszerű panorámaút részben körbeöleli a tavat.","Kiváló horgászhelyeiről (tavi szaibling, marena) is ismert.","Minden évben Úrnapján egy lenyűgöző tavi körmenetet tartanak.","Az Obertraun melletti kis félsziget kedvelt szabadtéri fürdőhely."],"ro":["Lacul are o adâncime considerabilă de 125 de metri în cel mai adânc punct al său.","Face parte din nucleul regiunii Hallstatt-Dachstein/Salzkammergut din Patrimoniul Mondial UNESCO.","Malul estic este natural și nu a fost tăiat niciodată de vreun drum.","Bărcile tradiționale de pe lac se numesc „Zillen” sau „Plätten”.","Este extrem de rar ca lacul să înghețe complet iarna.","Timp de secole a fost singura cale de a transporta sarea departe.","Un traseu panoramic popular înconjoară parțial lacul.","Cunoscut pentru zonele excelente de pescuit (păstrăv arctic, coregon).","În fiecare an, de Corpus Christi, are loc o impresionantă procesiune pe lac.","Mica peninsulă de lângă Obertraun este o zonă populară de înot în aer liber."],"en":["The lake is a considerable 125 meters deep at its deepest point.","Part of the core of the UNESCO World Heritage region Hallstatt-Dachstein/Salzkammergut.","The eastern shore is natural and has never been cut through by a road.","Traditional boats on the lake are called 'Zillen' or 'Plätten'.","It is extremely rare for the lake to freeze completely in winter.","For centuries, it was the only route to transport the salt away.","A popular panoramic path partially circles the lake.","Known for excellent fishing grounds (Arctic char, whitefish).","Every year on Corpus Christi, an impressive lake procession takes place.","The small peninsula near Obertraun is a popular outdoor swimming area."]}
  },
  {
    id: "AT-Dachstein", type: "mountain", parent: "AT-6", coords: [13.6108, 47.4675],
    name: { de: "Dachstein", hu: "Dachstein", ro: "Dachstein", en: "Dachstein" },
    image: "/geo-images/austria/dachstein.webp",
    description: {"de":"Der Dachstein ist der höchste Berg der Bundesländer Steiermark und Oberösterreich und zweifellos eines der imposantesten Massive der Nördlichen Kalkalpen. Mit seinen bis zu 2.995 Metern Höhe überragt er majestätisch das Ennstal und das Salzkammergut. Der Berg ist für seine spektakulären Eishöhlen, wie die riesige Dachstein-Rieseneishöhle, und sein faszinierendes Gletscherplateau berühmt, das das ganze Jahr über Wintersport und Gletscherwanderungen ermöglicht. Nervenkitzel pur bieten der 'Skywalk' – ein gläserner Balkon, der über eine 250 Meter senkrecht abfallende Felswand ragt – und die Hängebrücke mit der 'Treppe ins Nichts'. Das gesamte Massiv ist Teil des UNESCO-Welterbes.","hu":"A Dachstein Stájerország és Felső-Ausztria legmagasabb hegye, és kétségtelenül az Északi-Mészkőalpok egyik legimpozánsabb masszívuma. Akár 2995 méteres magasságával fenségesen magasodik az Enns völgye és a Salzkammergut fölé. A hegy híres látványos jégbarlangjairól, mint a hatalmas Dachsteini Óriásjégbarlang, és lenyűgöző gleccserplatójáról, amely egész évben lehetőséget biztosít a téli sportokra és a gleccsertúrákra. Tiszta izgalmat kínál a 'Skywalk' – egy üveg erkély, amely egy 250 méteres függőleges sziklafal fölé nyúlik – és a függőhíd a 'Semmibe vezető lépcsővel' (Treppe ins Nichts). A teljes masszívum az UNESCO világörökség része.","ro":"Dachstein este cel mai înalt munte din landurile Stiria și Austria Superioară și este, fără îndoială, unul dintre cele mai impunătoare masive din Alpii Calcaroși Nordici. Cu o înălțime de până la 2.995 de metri, domină maiestuos valea Ennstal și Salzkammergut. Muntele este faimos pentru peșterile sale spectaculoase de gheață, cum ar fi uriașa Peșteră de Gheață Dachstein, și platoul său glaciar fascinant, care permite sporturi de iarnă și drumeții pe ghețar pe tot parcursul anului. 'Skywalk' – un balcon de sticlă care iese în afară peste o stâncă verticală de 250 de metri – și podul suspendat cu 'Scara către Nicăieri' (Treppe ins Nichts) oferă emoții pure. Întregul masiv face parte din Patrimoniul Mondial UNESCO.","en":"The Dachstein is the highest mountain in the federal states of Styria and Upper Austria and undoubtedly one of the most imposing massifs in the Northern Limestone Alps. Reaching heights of up to 2,995 meters, it majestically towers over the Ennstal valley and the Salzkammergut. The mountain is famous for its spectacular ice caves, such as the huge Dachstein Giant Ice Cave, and its fascinating glacier plateau, which allows for winter sports and glacier hikes all year round. Pure thrills are offered by the 'Skywalk' – a glass balcony protruding over a 250-meter vertical rock face – and the suspension bridge with the 'Stairway to Nothingness' (Treppe ins Nichts). The entire massif is part of the UNESCO World Heritage site."}, facts: {"de":["Der Hohe Dachstein ist mit 2.995 m der höchste Gipfel des Massivs.","Der Dachsteingletscher ist der östlichste Gletscher der Alpen.","Der 'Dachstein Skywalk' bietet eine schwindelerregende Aussichtsplattform mit Glasboden.","Die Dachstein-Rieseneishöhle ist eine der größten Eishöhlen der Welt.","Im Eispalast tief im Inneren des Gletschers werden kunstvolle Eisskulpturen ausgestellt.","Mit der Südwandbahn, einer modernen Gondel ohne Stützen, erreicht man den Gletscher.","Die Hängebrücke und die 'Treppe ins Nichts' sind nichts für schwache Nerven.","Ist ein Dorado für Kletterer, mit der berühmten, steilen 'Dachstein-Südwand'.","Es befinden sich spektakuläre Klettersteige (Via Ferrata) am Berg.","Fossilien beweisen, dass die Kalksteinspitzen einst der Grund eines Urmeeres waren."],"hu":["A Hoher Dachstein a masszívum legmagasabb csúcsa a maga 2995 méterével.","A Dachstein-gleccser az Alpok legkeletibb gleccsere.","A 'Dachstein Skywalk' egy szédítő kilátóplatform üvegpadlóval.","A Dachsteini Óriásjégbarlang a világ egyik legnagyobb jégbarlangja.","A gleccser mélyén található Jégpalotában (Eispalast) művészi jégszobrokat állítanak ki.","A gleccser a Südwandbahn (Déli-fal felvonó) nevű modern, oszlopok nélküli drótkötélpályával érhető el.","A függőhíd és a 'Semmibe vezető lépcső' nem a gyenge idegzetűeknek való.","Valóságos Eldorádó a hegymászók számára a híres, meredek Dachstein-délifallal ('Dachstein-Südwand').","Látványos via ferraták (Klettersteigek) találhatók a hegyen.","A kövületek bizonyítják, hogy a mészkőcsúcsok egykor egy ősóceán fenekét képezték."],"ro":["Hoher Dachstein este cel mai înalt vârf al masivului, având 2.995 m.","Ghețarul Dachstein este cel mai estic ghețar din Alpi.","Dachstein Skywalk oferă o platformă de observare amețitoare cu podea de sticlă.","Peștera Uriașă de Gheață Dachstein este una dintre cele mai mari peșteri de gheață din lume.","Sculpturi de gheață elaborate sunt expuse în Palatul de Gheață (Eispalast) aflat adânc în interiorul ghețarului.","Ghețarul este atins cu Südwandbahn, o telegondolă modernă fără piloni de sprijin.","Podul suspendat și „Scara către Nicăieri” nu sunt pentru cei slabi de inimă.","Este un Eldorado pentru alpiniști, având faimosul și abruptul „Perete Sudic Dachstein”.","Pe munte există rute de via ferrata (Klettersteig) spectaculoase.","Fosilele dovedesc că vârfurile de calcar au fost odată fundul unui ocean primordial."],"en":["The Hoher Dachstein is the highest peak of the massif at 2,995 m.","The Dachstein Glacier is the easternmost glacier in the Alps.","The 'Dachstein Skywalk' offers a dizzying observation platform with a glass floor.","The Dachstein Giant Ice Cave is one of the largest ice caves in the world.","Elaborate ice sculptures are exhibited in the Ice Palace (Eispalast) deep inside the glacier.","The glacier is reached via the Südwandbahn, a modern gondola with no support pillars.","The suspension bridge and the 'Stairway to Nothingness' are not for the faint of heart.","It is an El Dorado for climbers, featuring the famous, steep 'Dachstein South Face'.","Spectacular via ferrata (Klettersteig) routes are located on the mountain.","Fossils prove that the limestone peaks were once the bottom of a primordial ocean."]}
  },
  {
    id: "AT-HoheTauern", type: "region", parent: "AT", coords: [12.6667, 47.1167],
    name: { de: "Nationalpark Hohe Tauern", hu: "Hohe Tauern Nemzeti Park", ro: "Parcul Național Hohe Tauern", en: "Hohe Tauern National Park" },
    image: "/geo-images/austria/hohe-tauern.webp",
    description: {"de":"Der Nationalpark Hohe Tauern ist das größte Schutzgebiet der Alpen und eine der spektakulärsten Hochgebirgslandschaften Europas. Er erstreckt sich über die Bundesländer Kärnten, Salzburg und Tirol und schützt eine gewaltige Fläche unberührter Natur. Das Herzstück des Nationalparks bildet der Großglockner, Österreichs höchster Berg, sowie der mächtige Pasterzengletscher und die tosenden Krimmler Wasserfälle. Diese raue Wildnis bietet einen sicheren Lebensraum für seltene alpine Tierarten wie Steinböcke, Gämsen, Bartgeier und Murmeltiere. Über 300 Berggipfel mit mehr als 3.000 Metern Höhe und zahllose tiefblaue Bergseen machen die Region zu einem wahren Eldorado für Wanderer, Bergsteiger und Naturliebhaber.","hu":"A Magas-Tauern Nemzeti Park (Nationalpark Hohe Tauern) az Alpok legnagyobb védett területe és Európa egyik leglátványosabb magashegyi tája. Karintia, Salzburg és Tirol tartományokon ível át, és az érintetlen természet hatalmas területét védi. A nemzeti park szívét a Großglockner, Ausztria legmagasabb hegye, valamint a hatalmas Pasterze-gleccser és a dübörgő Krimmli-vízesés alkotja. Ez a zord vadon biztonságos élőhelyet kínál olyan ritka alpesi állatfajoknak, mint a kőszáli kecske, a zerge, a szakállas saskeselyű és a mormota. Több mint 300, 3000 méternél magasabb hegycsúcs és számtalan mélykék hegyi tó teszi a régiót a túrázók, hegymászók és természetkedvelők valóságos Eldorádójává.","ro":"Parcul Național Hohe Tauern este cea mai mare arie protejată din Alpi și unul dintre cele mai spectaculoase peisaje montane înalte din Europa. Se întinde pe landurile Carintia, Salzburg și Tirol și protejează o zonă vastă de natură neatinsă. Inima parcului național este formată din Grossglockner, cel mai înalt munte din Austria, precum și din masivul ghețar Pasterze și tumultuoasele cascade Krimml. Această sălbăticie aspră oferă un habitat sigur pentru specii rare de animale alpine, cum ar fi ibecși, capre negre, zăgani și marmote. Peste 300 de vârfuri muntoase de peste 3.000 de metri înălțime și nenumărate lacuri de munte de un albastru profund fac din regiune un adevărat Eldorado pentru drumeți, alpiniști și iubitori de natură.","en":"The Hohe Tauern National Park is the largest protected area in the Alps and one of the most spectacular high mountain landscapes in Europe. It stretches across the federal states of Carinthia, Salzburg, and Tyrol, protecting a vast area of untouched nature. The heart of the national park is formed by the Grossglockner, Austria's highest mountain, as well as the mighty Pasterze glacier and the roaring Krimml Waterfalls. This rugged wilderness provides a safe habitat for rare alpine animal species such as ibexes, chamois, bearded vultures, and marmots. Over 300 mountain peaks exceeding 3,000 meters in height and countless deep blue mountain lakes make the region a true El Dorado for hikers, mountaineers, and nature lovers."}, facts: {"de":["Der Nationalpark wurde 1981 als erster Nationalpark Österreichs gegründet.","Mit über 1.800 Quadratkilometern ist es das größte Naturschutzgebiet Mitteleuropas.","Rund ein Drittel aller Pflanzenarten Österreichs kommen hier vor.","Beherbergt den Großvenediger (3.666 m), den vierthöchsten Berg Österreichs.","Das Nationalparkzentrum in Mittersill bietet interaktive Ausstellungen zur Alpenwelt.","Ein wichtiges Rückzugsgebiet für den einst fast ausgerotteten Bartgeier.","Die Region umfasst 266 Berggipfel, die die 3.000-Meter-Grenze überschreiten.","Das 'Haus der Könige' in Heiligenblut informiert über die majestätischen Steinadler.","Zahlreiche Hütten und Biwaks des Alpenvereins ermöglichen mehrtägige Trekkingtouren.","Der Gletscherlehrweg Pasterze dokumentiert den dramatischen Gletscherschwund."],"hu":["A nemzeti parkot 1981-ben alapították, mint Ausztria első nemzeti parkját.","Több mint 1800 négyzetkilométeres területével Közép-Európa legnagyobb természetvédelmi területe.","Ausztria összes növényfajának mintegy harmada megtalálható itt.","Itt emelkedik a Großvenediger (3666 m), Ausztria negyedik legmagasabb hegye.","A mittersilli Nemzeti Park Központ interaktív kiállításokat kínál az alpesi világról.","Fontos menedékhelye az egykor majdnem kiirtott szakállas saskeselyűnek.","A régióban 266 olyan hegycsúcs található, amely meghaladja a 3000 méteres határt.","A heiligenbluti 'Királyok háza' (Haus der Könige) a fenséges szirti sasokról nyújt tájékoztatást.","Az Alpesi Klub (Alpenverein) számos kunyhója és bivakja teszi lehetővé a többnapos túrázást.","A Pasterze-gleccser tanösvény dokumentálja a drámai gleccserolvadást."],"ro":["Parcul național a fost fondat în 1981, fiind primul parc național din Austria.","Cu peste 1.800 de kilometri pătrați, este cea mai mare rezervație naturală din Europa Centrală.","Aproximativ o treime din toate speciile de plante din Austria pot fi găsite aici.","Găzduiește Grossvenediger (3.666 m), al patrulea cel mai înalt munte din Austria.","Centrul Parcului Național din Mittersill oferă expoziții interactive despre lumea alpină.","O zonă de refugiu importantă pentru zăganul, care fusese odată aproape exterminat.","Regiunea cuprinde 266 de vârfuri muntoase care depășesc bariera de 3.000 de metri.","„Casa Regilor” (Haus der Könige) din Heiligenblut oferă informații despre maiestuoasele acvile de munte.","Numeroase cabane și bivuacuri ale Clubului Alpin permit excursii de trekking de mai multe zile.","Traseul educațional al ghețarului Pasterze documentează topirea dramatică a ghețarului."],"en":["The national park was founded in 1981 as Austria's first national park.","With over 1,800 square kilometers, it is the largest nature reserve in Central Europe.","Around one third of all plant species in Austria can be found here.","Home to the Grossvenediger (3,666 m), Austria's fourth-highest mountain.","The National Park Center in Mittersill offers interactive exhibitions on the alpine world.","An important refuge area for the bearded vulture, which was once almost exterminated.","The region encompasses 266 mountain peaks that exceed the 3,000-meter mark.","The 'House of Kings' in Heiligenblut provides information about the majestic golden eagles.","Numerous Alpine Club huts and bivouacs allow for multi-day trekking tours.","The Pasterze Glacier educational trail documents the dramatic glacial retreat."]}
  },
  {
    id: "AT-Staatsoper", type: "landmark", parent: "AT-9", coords: [16.3691, 48.2031],
    name: { de: "Wiener Staatsoper", hu: "Bécsi Állami Operaház", ro: "Opera de Stat din Viena", en: "Vienna State Opera" },
    image: "/geo-images/austria/vienna.webp",
    description: {"de":"Die Wiener Staatsoper, prachtvoll an der Ringstraße gelegen, ist eines der international bedeutendsten und berühmtesten Opernhäuser der Welt. Das prächtige Gebäude im Stil der Neorenaissance wurde 1869 mit Mozarts 'Don Giovanni' feierlich eröffnet. Nach schweren Zerstörungen im Zweiten Weltkrieg wurde das Haus originalgetreu wieder aufgebaut und symbolisiert heute wie kein anderes den musikalischen Weltruf Wiens. Die Staatsoper besticht durch ein riesiges Repertoire, ein hochkarätiges Ensemble und das weltweit gefeierte Wiener Staatsopernorchester, aus dessen Reihen sich die Wiener Philharmoniker rekrutieren. Einmal im Jahr verwandelt sich der ehrwürdige Zuschauerraum beim weltbekannten Wiener Opernball in den elegantesten Ballsaal der Welt.","hu":"A bécsi Ringstraße mentén pompázatosan elhelyezkedő Bécsi Állami Operaház (Wiener Staatsoper) a világ egyik nemzetközileg legjelentősebb és leghíresebb operaháza. A neoreneszánsz stílusú pompás épületet 1869-ben Mozart 'Don Giovanni'-jával nyitották meg ünnepélyesen. A második világháború súlyos pusztításai után az épületet hűen az eredetihez építették újjá, és ma minden másnál jobban szimbolizálja Bécs zenei világhírnevét. Az Állami Operaház hatalmas repertoárral, magas színvonalú társulattal és a világszerte ünnepelt Bécsi Állami Operaház Zenekarával büszkélkedhet, amelynek soraiból a Bécsi Filharmonikusok is kikerülnek. Évente egyszer a tiszteletre méltó nézőtér a világhírű Bécsi Operabál idején a világ legelegánsabb báltermévé változik át.","ro":"Opera de Stat din Viena (Wiener Staatsoper), situată magnific pe bulevardul Ringstrasse, este una dintre cele mai importante și renumite opere la nivel internațional din lume. Clădirea magnifică în stil neorenascentist a fost deschisă oficial în 1869 cu „Don Giovanni” de Mozart. După distrugeri severe în al Doilea Război Mondial, clădirea a fost reconstruită fidel și astăzi simbolizează reputația muzicală mondială a Vienei ca nicio alta. Opera de Stat impresionează cu un repertoriu uriaș, un ansamblu de top și apreciata orchestră a Operei de Stat din Viena, din rândurile căreia sunt recrutați membrii Filarmonicii din Viena. O dată pe an, venerabilul auditorium este transformat în cea mai elegantă sală de bal din lume în timpul faimosului Bal al Operei din Viena.","en":"The Vienna State Opera (Wiener Staatsoper), magnificently located on the Ringstrasse boulevard, is one of the most internationally significant and famous opera houses in the world. The magnificent neo-Renaissance building was officially opened in 1869 with Mozart's 'Don Giovanni'. After severe destruction in World War II, the building was faithfully rebuilt and today symbolizes Vienna's global musical reputation like no other. The State Opera impresses with a huge repertoire, a top-class ensemble, and the world-acclaimed Vienna State Opera Orchestra, from whose ranks the Vienna Philharmonic is recruited. Once a year, the venerable auditorium is transformed into the most elegant ballroom in the world during the world-famous Vienna Opera Ball."}, facts: {"de":["Das Gebäude wurde von den Architekten August Sicard von Sicardsburg und Eduard van der Nüll entworfen.","Anfangs als 'K.K. Hof-Operntheater' bezeichnet.","Bietet mit über 60 verschiedenen Opern- und Ballettwerken pro Saison das größte Repertoire weltweit.","Die Bühne hat eine riesige Fläche von 1.500 Quadratmetern.","Fast jeden Tag im Jahr findet hier eine andere Aufführung statt (A-stagione-Betrieb).","Viele Vorstellungen werden im April, Mai und Juni live auf eine Leinwand vor der Oper ('Oper live am Platz') übertragen.","Herbert von Karajan und Gustav Mahler waren berühmte Direktoren des Hauses.","Die Feststiege und das Schwind-Foyer blieben bei den Bombenangriffen 1945 unversehrt.","Es gibt über 2.200 Steh- und Sitzplätze im Zuschauerraum.","Der Wiener Opernball lockt alljährlich Prominenz aus Politik, Wirtschaft und Kultur an."],"hu":["Az épületet August Sicard von Sicardsburg és Eduard van der Nüll építészek tervezték.","Kezdetben 'Császári és Királyi Udvari Operaszínház' (K.K. Hof-Operntheater) néven ismerték.","Szezononként több mint 60 különböző opera- és balettművel a világ legnagyobb repertoárját kínálja.","A színpad hatalmas, 1500 négyzetméteres területtel rendelkezik.","Az év majdnem minden napján más előadást tartanak (stagione-rendszer).","Áprilisban, májusban és júniusban számos előadást élőben közvetítenek az opera előtti tér kivetítőjén ('Oper live am Platz').","Herbert von Karajan és Gustav Mahler az intézmény híres igazgatói voltak.","A Díszlépcsőház és a Schwind-Foyer sértetlen maradt az 1945-ös bombázások során.","A nézőtéren több mint 2200 álló- és ülőhely található.","A Bécsi Operabál minden évben a politika, a gazdaság és a kultúra kiválóságait vonzza."],"ro":["Clădirea a fost proiectată de arhitecții August Sicard von Sicardsburg și Eduard van der Nüll.","Numită inițial 'Teatrul de Operă al Curții Imperiale și Regale' (K.K. Hof-Operntheater).","Oferă cel mai mare repertoriu din lume, cu peste 60 de lucrări diferite de operă și balet pe stagiune.","Scena are o suprafață uriașă de 1.500 de metri pătrați.","În aproape fiecare zi a anului are loc o reprezentație diferită (sistem stagione).","Multe spectacole sunt transmise live pe un ecran în fața operei ('Oper live am Platz') în aprilie, mai și iunie.","Herbert von Karajan și Gustav Mahler au fost directori celebri ai instituției.","Scara Mare (Feststiege) și Foaierul Schwind au rămas intacte în timpul bombardamentelor din 1945.","Există peste 2.200 de locuri pe scaune și în picioare în auditorium.","Balul Operei din Viena atrage anual celebrități din politică, afaceri și cultură."],"en":["The building was designed by architects August Sicard von Sicardsburg and Eduard van der Nüll.","Initially referred to as the 'Imperial and Royal Court Opera Theater' (K.K. Hof-Operntheater).","Offers the largest repertoire worldwide with over 60 different opera and ballet works per season.","The stage has a huge area of 1,500 square meters.","A different performance takes place here almost every day of the year (stagione system).","Many performances are broadcast live on a screen in front of the opera ('Oper live am Platz') in April, May, and June.","Herbert von Karajan and Gustav Mahler were famous directors of the house.","The Grand Staircase and the Schwind Foyer remained intact during the bombings in 1945.","There are over 2,200 standing and seating places in the auditorium.","The Vienna Opera Ball attracts celebrities from politics, business, and culture every year."]}
  },
  {
    id: "AT-Albertina", type: "landmark", parent: "AT-9", coords: [16.3683, 48.2047],
    name: { de: "Albertina", hu: "Albertina", ro: "Albertina", en: "Albertina" },
    image: "/geo-images/austria/albertina.webp",
    description: {"de":"Die Albertina im Herzen Wiens, unmittelbar neben der Hofburg gelegen, ist eines der bedeutendsten Kunstmuseen der Welt. Sie residiert in einem prachtvollen Palais, das einst dem Habsburger Erzherzog Albrecht gehörte, der auch der Namensgeber des Museums ist. Die Albertina beherbergt eine der größten und wertvollsten grafischen Sammlungen der Welt mit Meisterwerken wie Albrecht Dürers 'Feldhase' und Dürers 'Betende Hände'. Neben der historischen Grafischen Sammlung präsentiert das Museum dauerhaft herausragende Werke der Klassischen Moderne und der zeitgenössischen Kunst, darunter Gemälde von Monet, Picasso und Batliner. Die prunkvollen, original ausgestatteten Habsburger Prunkräume im Inneren des Palastes vermitteln zudem authentisches imperiales Flair.","hu":"A bécsi Albertina, amely közvetlenül a Hofburg mellett, a város szívében található, a világ egyik legjelentősebb művészeti múzeuma. Egy pompás palotában működik, amely egykor a Habsburg Albrecht főherceg tulajdona volt; róla kapta nevét is a múzeum. Az Albertina ad otthont a világ egyik legnagyobb és legértékesebb grafikai gyűjteményének, olyan mesterművekkel, mint Albrecht Dürer 'Mezei nyúl' és 'Imádkozó kezek' című alkotásai. A történelmi Grafikai Gyűjtemény mellett a múzeum folyamatosan bemutatja a klasszikus modernizmus és a kortárs művészet kiemelkedő alkotásait is, köztük Monet, Picasso és a Batliner-gyűjtemény festményeit. A palota belsejében lévő pompás, eredeti bútorzatú Habsburg dísztermek ráadásul autentikus császári hangulatot árasztanak.","ro":"Albertina, situată în inima Vienei, chiar lângă Hofburg, este unul dintre cele mai importante muzee de artă din lume. Are sediul într-un palat magnific care a aparținut odată Arhiducelui habsburgic Albrecht, care este și omonimul muzeului. Albertina găzduiește una dintre cele mai mari și mai valoroase colecții de artă grafică din lume, cu capodopere precum „Iepurele de câmp” și „Mâinile în rugăciune” ale lui Albrecht Dürer. Pe lângă istorica Colecție de Artă Grafică, muzeul prezintă permanent lucrări remarcabile ale modernismului clasic și ale artei contemporane, inclusiv picturi de Monet, Picasso și din colecția Batliner. De asemenea, camerele de stat magnifice, mobilate original, din interiorul palatului, transmit o atmosferă imperială autentică.","en":"The Albertina in the heart of Vienna, located right next to the Hofburg, is one of the most important art museums in the world. It resides in a magnificent palace that once belonged to the Habsburg Archduke Albrecht, who is also the museum's namesake. The Albertina houses one of the largest and most valuable graphic art collections in the world, featuring masterpieces such as Albrecht Dürer's 'Young Hare' and 'Praying Hands'. In addition to the historical Graphic Art Collection, the museum permanently presents outstanding works of classical modernism and contemporary art, including paintings by Monet, Picasso, and from the Batliner collection. Furthermore, the magnificent, originally furnished Habsburg state rooms inside the palace convey an authentic imperial flair."}, facts: {"de":["Gegründet 1776 von Herzog Albert von Sachsen-Teschen.","Die Grafische Sammlung umfasst über eine Million Druckgrafiken und 60.000 Zeichnungen.","Das markante 'Soravia Wing' ist ein modernes Flugdach am Eingang, entworfen von Hans Hollein.","Die 20 prunkvoll restaurierten Habsburger-Räume zeigen Möbel aus der Zeit des Klassizismus.","Die ständige Ausstellung 'Monet bis Picasso' basiert auf der Sammlung Batliner.","Zu den grafischen Highlights zählen Werke von Michelangelo, Rembrandt und Rubens.","Das Museum verfügt über ein erstklassiges Restaurant-Café (Do & Co Albertina).","Die Albertina modern im Künstlerhaus widmet sich zeitgenössischer Kunst.","Albrecht Dürers berühmter 'Feldhase' wird aus Konservierungsgründen nur selten im Original gezeigt.","Steht auf einer der letzten erhaltenen Bastionen der Wiener Stadtmauer."],"hu":["Albert Szász–Tescheni herceg alapította 1776-ban.","A Grafikai Gyűjtemény több mint egymillió nyomatot és 60 000 rajzot foglal magában.","A bejáratnál lévő markáns 'Soravia Wing' egy Hans Hollein által tervezett modern 'repülőtető'.","A 20 pompásan felújított Habsburg-terem a klasszicizmus korából származó bútorokat mutat be.","A 'Monet-tól Picassóig' című állandó kiállítás a Batliner-gyűjteményen alapul.","A grafikai fénypontok közé tartoznak Michelangelo, Rembrandt és Rubens művei.","A múzeum egy első osztályú étterem-kávézóval (Do & Co Albertina) is rendelkezik.","A Künstlerhausban található 'Albertina modern' a kortárs művészetnek szenteli magát.","Albrecht Dürer híres 'Mezei nyúl' című alkotását állagmegóvási okokból csak ritkán mutatják be eredetiben.","A bécsi városfal egyik utolsó fennmaradt bástyáján áll."],"ro":["Fondată în 1776 de Ducele Albert de Saxa-Teschen.","Colecția de artă grafică cuprinde peste un milion de gravuri și 60.000 de desene.","Izbitorul „Soravia Wing” (Aripa Soravia) este un acoperiș zburător modern de la intrare, proiectat de Hans Hollein.","Cele 20 de camere de stat habsburgice, restaurate somptuos, prezintă mobilier din epoca neoclasică.","Expoziția permanentă „De la Monet la Picasso” are la bază colecția Batliner.","Atracțiile grafice includ lucrări de Michelangelo, Rembrandt și Rubens.","Muzeul dispune de un restaurant-cafenea de primă clasă (Do & Co Albertina).","„Albertina modern” din clădirea Künstlerhaus este dedicată artei contemporane.","Faimosul „Iepure de câmp” al lui Albrecht Dürer este rar arătat în original din motive de conservare.","Se află pe unul dintre ultimele bastioane păstrate ale zidului orașului Viena."],"en":["Founded in 1776 by Duke Albert of Saxony-Teschen.","The Graphic Art Collection comprises over one million prints and 60,000 drawings.","The striking 'Soravia Wing' is a modern flying roof at the entrance, designed by Hans Hollein.","The 20 sumptuously restored Habsburg state rooms show furniture from the Neoclassical period.","The permanent exhibition 'Monet to Picasso' is based on the Batliner collection.","Graphic highlights include works by Michelangelo, Rembrandt, and Rubens.","The museum features a first-class restaurant-cafe (Do & Co Albertina).","The 'Albertina modern' in the Künstlerhaus is dedicated to contemporary art.","Albrecht Dürer's famous 'Young Hare' is rarely shown in the original for conservation reasons.","Stands on one of the last preserved bastions of the Vienna city wall."]}
  },
  {
    id: "AT-KHM", type: "landmark", parent: "AT-9", coords: [16.3617, 48.2036],
    name: { de: "Kunsthistorisches Museum", hu: "Szépművészeti Múzeum", ro: "Muzeul de Istorie a Artei", en: "Kunsthistorisches Museum" },
    image: "/geo-images/austria/khm.webp",
    description: {"de":"Das Kunsthistorische Museum (KHM) in Wien ist eines der prachtvollsten und bedeutendsten Museen der Welt, das von Kaiser Franz Joseph I. erbaut wurde, um die gigantischen kaiserlichen Sammlungen der Habsburger der Öffentlichkeit zu präsentieren. Das monumentale Neorenaissance-Gebäude am Maria-Theresien-Platz beeindruckt bereits beim Betreten mit seinem atemberaubenden, reich verzierten Treppenhaus und Gemälden von Gustav Klimt. Die Gemäldegalerie des Museums ist legendär und beherbergt die weltgrößte Sammlung von Werken Pieter Bruegels des Člteren, darunter 'Der Turmbau zu Babel'. Ebenso von Weltrang sind die Kunstkammer mit der berühmten goldenen 'Saliera' von Benvenuto Cellini sowie die ägyptisch-orientalische und die Antikensammlung.","hu":"A bécsi Művészettörténeti Múzeum (KHM) a világ egyik legpompásabb és legjelentősebb múzeuma, amelyet I. Ferenc József császár építtetett, hogy a Habsburgok gigantikus császári gyűjteményeit a nyilvánosság elé tárja. A Mária Terézia téren álló monumentális neoreneszánsz épület már belépéskor lenyűgöző a gazdagon díszített, lélegzetelállító lépcsőházával és Gustav Klimt festményeivel. A múzeum Képtára legendás, és a világ legnagyobb Pieter Bruegel (az idősebb) gyűjteményének ad otthont, köztük a 'Bábel tornya' című műnek. Ugyancsak világszínvonalú a Művészeti Kamara (Kunstkammer) Benvenuto Cellini híres arany 'Salierá'-jával (sótartó), valamint az egyiptomi-orientális és az antik gyűjtemény.","ro":"Muzeul de Istorie a Artei (Kunsthistorisches Museum - KHM) din Viena este unul dintre cele mai magnifice și importante muzee din lume, construit de Împăratul Franz Joseph I pentru a prezenta publicului giganticele colecții imperiale ale Habsburgilor. Monumentala clădire în stil neorenascentist din Piața Maria Tereza impresionează încă de la intrare prin scara sa uluitoare, bogat decorată, și picturile de Gustav Klimt. Galeria de picturi a muzeului este legendară și găzduiește cea mai mare colecție din lume de lucrări ale lui Pieter Bruegel cel Bătrân, inclusiv „Turnul Babel”. La fel de renumite pe plan mondial sunt Camera de Artă (Kunstkammer) cu faimoasa „Saliera” (solniță) de aur realizată de Benvenuto Cellini, precum și colecțiile egipteano-orientale și de antichități.","en":"The Kunsthistorisches Museum (KHM - Museum of Art History) in Vienna is one of the most magnificent and important museums in the world, built by Emperor Franz Joseph I to present the gigantic imperial collections of the Habsburgs to the public. The monumental neo-Renaissance building on Maria-Theresien-Platz impresses upon entering with its breathtaking, richly decorated staircase and paintings by Gustav Klimt. The museum's Picture Gallery is legendary and houses the world's largest collection of works by Pieter Bruegel the Elder, including 'The Tower of Babel'. Equally world-class are the Kunstkammer (Chamber of Art and Wonders) with the famous golden 'Saliera' (salt cellar) by Benvenuto Cellini, as well as the Egyptian-Oriental and Antiquities collections."}, facts: {"de":["Eröffnet im Jahr 1891, entworfen von Gottfried Semper und Karl Freiherr von Hasenauer.","Steht exakt symmetrisch gegenüber seinem architektonischen Zwilling, dem Naturhistorischen Museum.","Beherbergt Meisterwerke von Tizian, Veronese, Tintoretto, Rubens und Velázquez.","Die 'Saliera' ist ein unschätzbar wertvolles Salzfass und wurde 2003 gestohlen, aber 2006 wiedergefunden.","Das Treppenhaus wird von einem monumentalen Deckengemälde von Mihály Munkácsy bekrönt.","Die Kunstkammer zeigt Objekte der 'Habsburger Wunderkammern'.","Die Münzkabinett-Sammlung gehört zu den fünf größten und bedeutendsten der Welt.","Kaiser Rudolf II. und Erzherzog Leopold Wilhelm trugen massiv zum Grundstock der Sammlung bei.","Im atemberaubenden Kuppelsaal befindet sich ein exquisites Museums-Café.","Gehört mit über 1,5 Millionen Besuchern pro Jahr zu den wichtigsten Kulturinstitutionen Österreichs."],"hu":["1891-ben nyitotta meg kapuit, Gottfried Semper és Karl Freiherr von Hasenauer tervei alapján.","Pontosan szimmetrikusan áll építészeti ikertestvérével, a Természettudományi Múzeummal szemben.","Olyan mesterek alkotásait őrzi, mint Tiziano, Veronese, Tintoretto, Rubens és Velázquez.","A 'Saliera' egy felbecsülhetetlen értékű sótartó, amelyet 2003-ban elloptak, de 2006-ban előkerült.","A lépcsőházat Munkácsy Mihály monumentális mennyezetfreskója koronázza meg.","A Művészeti Kamara (Kunstkammer) a 'Habsburg csodakamrák' tárgyait mutatja be.","Az éremgyűjtemény a világ öt legnagyobb és legjelentősebb gyűjteménye közé tartozik.","II. Rudolf császár és Lipót Vilmos főherceg hatalmas mértékben hozzájárult a gyűjtemény alapjaihoz.","A lélegzetelállító kupolacsarnokban egy exkluzív múzeumi kávézó található.","Évi több mint 1,5 millió látogatójával Ausztria legfontosabb kulturális intézményei közé tartozik."],"ro":["Deschis în 1891, proiectat de Gottfried Semper și Karl Freiherr von Hasenauer.","Stă exact simetric față de geamănul său arhitectural, Muzeul de Istorie Naturală.","Găzduiește capodopere de Tițian, Veronese, Tintoretto, Rubens și Velázquez.","„Saliera” este o solniță inestimabilă care a fost furată în 2003, dar recuperată în 2006.","Casa scărilor este încoronată de o pictură monumentală pe tavan realizată de Mihály Munkácsy.","Kunstkammer prezintă obiecte din „Camerele de curiozități ale Habsburgilor”.","Colecția Cabinetului de Monede este una dintre cele mai mari și mai importante cinci din lume.","Împăratul Rudolf al II-lea și Arhiducele Leopold Wilhelm au contribuit masiv la fondarea colecției.","Există o cafenea de muzeu rafinată în uluitoarea Sală cu Cupolă.","Cu peste 1,5 milioane de vizitatori pe an, este una dintre cele mai importante instituții culturale din Austria."],"en":["Opened in 1891, designed by Gottfried Semper and Karl Freiherr von Hasenauer.","Stands exactly symmetrical opposite its architectural twin, the Natural History Museum.","Houses masterpieces by Titian, Veronese, Tintoretto, Rubens, and Velázquez.","The 'Saliera' is an invaluable salt cellar that was stolen in 2003 but recovered in 2006.","The staircase is crowned by a monumental ceiling painting by Mihály Munkácsy.","The Kunstkammer displays objects from the 'Habsburg Chambers of Wonders'.","The Coin Cabinet collection is one of the five largest and most important in the world.","Emperor Rudolf II and Archduke Leopold Wilhelm contributed massively to the foundation of the collection.","There is an exquisite museum café in the breathtaking Cupola Hall.","With over 1.5 million visitors a year, it is one of Austria's most important cultural institutions."]}
  },
  {
    id: "AT-Prater", type: "landmark", parent: "AT-9", coords: [16.3958, 48.2167],
    name: { de: "Wiener Prater", hu: "Práter", ro: "Prater", en: "Prater" },
    image: "/geo-images/austria/prater.webp",
    description: {"de":"Der Wiener Prater ist eine faszinierende Mischung aus einem riesigen naturnahen Erholungsgebiet und dem berühmten Vergnügungspark, dem 'Wurstelprater'. Das Herzstück und Wahrzeichen Wiens ist das weithin sichtbare Riesenrad, das 1897 zur Feier des 50. Thronjubiläums von Kaiser Franz Joseph erbaut wurde und unvergessliche Ausblicke über die Stadt bietet. Während der Wurstelprater mit über 250 Attraktionen – von nostalgischen Geisterbahnen bis zu hochmodernen Achterbahnen – Spaß und Nervenkitzel verspricht, bietet der 'Grüne Prater' endlose Alleen, Wiesen und Wälder zum Joggen, Radfahren und Entspannen. Kulinarisch lockt der Prater mit dem berühmten Schweizerhaus und seinem originalen Prater-Stelzen (Eisbein).","hu":"A bécsi Práter (Wiener Prater) egy hatalmas, természethez közeli rekreációs terület és a híres vidámpark, a 'Wurstelprater' lenyűgöző keveréke. A park szíve és Bécs messziről látható jelképe az Óriáskerék (Riesenrad), amelyet 1897-ben Ferenc József császár trónra lépésének 50. évfordulója alkalmából építettek, és felejthetetlen kilátást nyújt a városra. Míg a Wurstelprater több mint 250 attrakcióval – a nosztalgikus szellemvasutaktól a legmodernebb hullámvasutakig – szórakozást és izgalmat ígér, addig a 'Zöld Práter' végtelen fasorokat, réteket és erdőket kínál kocogáshoz, kerékpározáshoz és pihenéshez. Kulináris szempontból a Práter a híres Schweizerhaus vendéglővel és az ottani eredeti Práter-csülökkel (Stelze) csalogat.","ro":"Praterul vienez (Wiener Prater) este un amestec fascinant între o zonă vastă de recreere naturală și faimosul parc de distracții, 'Wurstelprater'. Piesa centrală și simbolul Vienei este Marea Roată (Riesenrad), vizibilă de departe, care a fost construită în 1897 pentru a sărbători a 50-a aniversare a urcării pe tron a Împăratului Franz Joseph și oferă vederi de neuitat asupra orașului. În timp ce Wurstelprater promite distracție și emoții cu peste 250 de atracții – de la trenuri fantomă nostalgice la montagne ruse ultramoderne – 'Praterul Verde' oferă alei nesfârșite, pajiști și păduri pentru jogging, ciclism și relaxare. Din punct de vedere culinar, Praterul atrage cu faimosul restaurant Schweizerhaus și ciolanul său original de porc (Stelze) la grătar.","en":"The Vienna Prater (Wiener Prater) is a fascinating mix of a huge near-natural recreation area and the famous amusement park, the 'Wurstelprater'. The centerpiece and landmark of Vienna is the widely visible Giant Ferris Wheel (Riesenrad), which was built in 1897 to celebrate the 50th jubilee of Emperor Franz Joseph and offers unforgettable views over the city. While the Wurstelprater promises fun and thrills with over 250 attractions – from nostalgic ghost trains to ultra-modern roller coasters – the 'Green Prater' offers endless avenues, meadows, and forests for jogging, cycling, and relaxing. Culinarily, the Prater entices with the famous Schweizerhaus restaurant and its original roasted pork knuckle (Stelze)."}, facts: {"de":["Das Wiener Riesenrad spielte eine Hauptrolle im Film noir-Klassiker 'Der dritte Mann'.","Der Prater war ursprünglich ein kaiserliches Jagdrevier und wurde 1766 für die Öffentlichkeit freigegeben.","Die vier Kilometer lange Hauptallee (Prater Hauptallee) ist gesäumt von Kastanienbäumen.","Im Prater fand 1873 die Wiener Weltausstellung statt.","Der Vergnügungspark (Wurstelprater) kostet keinen Eintritt; bezahlt wird pro Fahrgeschäft.","Die Liliputbahn ist eine Miniatur-Schmalspurbahn, die auf 4 km Länge durch den Park fährt.","Das Madame Tussauds Wachsfigurenkabinett hat hier eine Wiener Niederlassung.","Das Riesenrad hat heute nur noch 15 Waggons (statt ursprünglich 30, die im 2. Weltkrieg verbrannten).","Der 'Grüne Prater' ist fast doppelt so groß wie der Central Park in New York.","Das Ernst-Happel-Stadion, Österreichs größtes Fußballstadion, liegt ebenfalls im Prater."],"hu":["A bécsi Óriáskerék főszerepet játszott 'A harmadik ember' című klasszikus film noirban.","A Práter eredetileg császári vadászterület volt, amelyet 1766-ban nyitottak meg a nagyközönség előtt.","A négy kilométer hosszú fő sétányt (Prater Hauptallee) gesztenyefák szegélyezik.","1873-ban a Práterben rendezték meg a bécsi világkiállítást.","A vidámparkba (Wurstelprater) nincs belépődíj; az egyes attrakciókért kell fizetni.","A Liliputbahn egy miniatűr keskeny nyomtávú vasút, amely 4 km hosszan kanyarog a parkon keresztül.","A Madame Tussauds viaszmúzeumnak is van itt egy bécsi fiókja.","Az Óriáskeréknek ma már csak 15 kocsija van (az eredeti 30 helyett, amelyek a 2. világháborúban elégtek).","A 'Zöld Práter' majdnem kétszer akkora, mint a New York-i Central Park.","Az Ernst Happel Stadion, Ausztria legnagyobb futballstadionja szintén a Práterben található."],"ro":["Marea Roată din Viena a jucat un rol principal în filmul clasic noir „Al treilea om” (The Third Man).","Praterul a fost inițial un teren imperial de vânătoare și a fost deschis publicului în 1766.","Aleea principală (Prater Hauptallee), lungă de patru kilometri, este mărginită de castani.","Expoziția Universală de la Viena din 1873 a avut loc în Prater.","Parcul de distracții (Wurstelprater) nu percepe taxă de intrare; se plătește pentru fiecare atracție.","Liliputbahn este o cale ferată miniaturală cu ecartament îngust care traversează parcul pe o distanță de 4 km.","Muzeul de ceară Madame Tussauds are o filială vieneză aici.","Marea Roată are astăzi doar 15 vagoane (în loc de cele 30 originale, care au ars în al Doilea Război Mondial).","„Praterul Verde” este de aproape două ori mai mare decât Central Park din New York.","Stadionul Ernst Happel, cel mai mare stadion de fotbal din Austria, este, de asemenea, situat în Prater."],"en":["The Vienna Giant Ferris Wheel played a starring role in the classic film noir 'The Third Man'.","The Prater was originally an imperial hunting ground and was opened to the public in 1766.","The four-kilometer-long main avenue (Prater Hauptallee) is lined with chestnut trees.","The Vienna World's Fair was held in the Prater in 1873.","The amusement park (Wurstelprater) does not charge an entrance fee; you pay per ride.","The Liliputbahn is a miniature narrow-gauge railway that runs through the park for 4 km.","The Madame Tussauds wax museum has a Viennese branch here.","The Giant Ferris Wheel today only has 15 wagons (instead of the original 30, which burned down in WWII).","The 'Green Prater' is almost twice the size of Central Park in New York.","The Ernst Happel Stadium, Austria's largest football stadium, is also located in the Prater."]}
  },
  {
    id: "AT-SchoenbrunnZoo", type: "landmark", parent: "AT-9", coords: [16.3028, 48.1822],
    name: { de: "Tiergarten Schönbrunn", hu: "Schönbrunni Állatkert", ro: "Grădina Zoologică Schönbrunn", en: "Schönbrunn Zoo" },
    image: "/geo-images/austria/schoenbrunn-zoo.webp",
    description: {"de":"Der Tiergarten Schönbrunn in Wien ist der älteste noch bestehende Zoo der Welt und wurde 1752 vom Habsburger Kaiser Franz I. Stephan, dem Ehemann Maria Theresias, gegründet. Eingebettet in das barocke UNESCO-Weltkulturerbe des Schlossparks Schönbrunn, verbindet der Zoo auf einzigartige Weise imperiale Architektur, wie den historischen achteckigen Kaiserpavillon, mit modernster, artgerechter Tierhaltung. Er ist berühmt für seine Zuchterfolge und wurde mehrfach als 'Bester Zoo Europas' ausgezeichnet. Der unumstrittene Publikumsmagnet des Tiergartens sind die Großen Pandas; Schönbrunn gehört zu den wenigen Zoos weltweit, in denen Pandas auf natürliche Weise Nachwuchs zeugen. Weitere Highlights sind das Polarium, das imposante Regenwaldhaus und die Elefantenanlage.","hu":"A bécsi Schönbrunni Állatkert a világ legrégebbi, ma is működő állatkertje, amelyet 1752-ben alapított I. (Habsburg) Ferenc István császár, Mária Terézia férje. A Schönbrunni kastélypark barokk UNESCO világörökségébe ágyazva az állatkert egyedülálló módon ötvözi a császári építészetet – mint például a történelmi nyolcszögletű Császári pavilont – a legmodernebb, fajoknak megfelelő állattartással. Híres tenyésztési sikereiről, és többször is elnyerte az 'Európa Legjobb Állatkertje' címet. A kert vitathatatlan közönségkedvencei az óriáspandák; Schönbrunn azon kevés állatkertek egyike a világon, ahol a pandák természetes úton szaporodnak. További fénypontok közé tartozik a Polárium, az impozáns Esőerdőház és az elefántkifutó.","ro":"Grădina Zoologică Schönbrunn (Tiergarten Schönbrunn) din Viena este cea mai veche grădină zoologică existentă din lume, fiind fondată în 1752 de împăratul habsburgic Francisc I Ștefan, soțul Mariei Tereza. Amplasată în Patrimoniul Mondial baroc UNESCO al Parcului Palatului Schönbrunn, grădina zoologică combină într-un mod unic arhitectura imperială, cum ar fi Pavilionul Imperial istoric octogonal, cu creșterea și îngrijirea modernă a animalelor, adaptată speciei. Este renumită pentru succesele sale în reproducere și a fost numită de mai multe ori „Cea mai bună grădină zoologică din Europa”. Principalul punct de atracție pentru public îl reprezintă urșii panda uriași; Schönbrunn este una dintre puținele grădini zoologice din lume unde urșii panda se reproduc natural. Alte puncte de interes includ Polarium, impunătoarea Casă a Pădurii Tropicale și incinta elefanților.","en":"The Schönbrunn Zoo (Tiergarten Schönbrunn) in Vienna is the oldest existing zoo in the world, founded in 1752 by the Habsburg Emperor Francis I Stephan, the husband of Maria Theresa. Nestled in the Baroque UNESCO World Heritage site of the Schönbrunn Palace Park, the zoo uniquely combines imperial architecture, such as the historical octagonal Imperial Pavilion, with state-of-the-art, species-appropriate animal husbandry. It is famous for its breeding successes and has repeatedly been named 'Europe's Best Zoo'. The undisputed crowd-pullers of the zoo are the Giant Pandas; Schönbrunn is one of the few zoos worldwide where pandas reproduce naturally. Other highlights include the Polarium, the imposing Rainforest House, and the elephant enclosure."}, facts: {"de":["Der Tiergarten wurde 1752 als kaiserliche Menagerie gegründet.","Die ursprünglichen barocken Tierlogen sind sternförmig um den Frühstückspavillon angelegt.","Schönbrunn wurde bereits sechs Mal zum 'Besten Zoo Europas' gewählt.","Die Großen Pandas sind eine Leihgabe aus China und haben hier mehrfach Nachwuchs bekommen (z.B. Fu Long, Fu Bao).","Beherbergt über 700 verschiedene Tierarten und ca. 8.500 Tiere.","Das 2002 eröffnete Regenwaldhaus simuliert ein authentisches Dschungelklima.","1906 wurde hier weltweit der erste in Menschenobhut gezeugte afrikanische Elefant geboren.","Das 'ORANG.erie' Gehege verbindet historische Glashausarchitektur mit Affengehegen.","Verfügt über ein Tiroler Bauernhof-Areal zur Erhaltung seltener Nutztierrassen.","Das historische Ambiente und alte Bäume verleihen dem Zoo eine parkähnliche Atmosphäre."],"hu":["Az állatkertet 1752-ben császári menazsériaként alapították.","Az eredeti barokk állatketrecek csillag alakban helyezkednek el a Reggeliző pavilon körül.","Schönbrunnt már hatszor választották meg 'Európa Legjobb Állatkertjének'.","Az óriáspandák Kínából kapott kölcsönállatok, és már többször is született itt bocsuk (pl. Fu Long, Fu Bao).","Több mint 700 különböző állatfajnak és mintegy 8500 állatnak ad otthont.","A 2002-ben megnyitott Esőerdőház autentikus dzsungelklímát szimulál.","1906-ban itt született a világon az első, emberi gondozásban fogant afrikai elefánt.","Az 'ORANG.erie' kifutó a történelmi üvegházépítészetet ötvözi a majomkifutókkal.","Rendelkezik egy tiroli parasztudvarral (Tirolerhof) a ritka haszonállatfajták megőrzése érdekében.","A történelmi környezet és az öreg fák parkszerű hangulatot kölcsönöznek az állatkertnek."],"ro":["Grădina zoologică a fost fondată în 1752 ca o menajerie imperială.","Cuștile de animale baroce originale sunt așezate în formă de stea în jurul Pavilionului de Mic Dejun.","Schönbrunn a fost votat „Cea mai bună grădină zoologică din Europa” de șase ori.","Urșii panda uriași sunt împrumutați din China și au avut aici pui de mai multe ori (de ex., Fu Long, Fu Bao).","Găzduiește peste 700 de specii diferite de animale și aproximativ 8.500 de animale.","Casa Pădurii Tropicale, deschisă în 2002, simulează un climat autentic de junglă.","În 1906, aici s-a născut primul elefant african conceput în captivitate din lume.","Incinta „ORANG.erie” combină arhitectura istorică a serei cu habitatele maimuțelor.","Are o zonă de fermă tiroleză (Tirolerhof) dedicată conservării raselor rare de animale de fermă.","Ambianța istorică și copacii bătrâni conferă grădinii zoologice o atmosferă de parc."],"en":["The zoo was founded in 1752 as an imperial menagerie.","The original Baroque animal enclosures are laid out in a star shape around the Breakfast Pavilion.","Schönbrunn has been voted 'Europe's Best Zoo' six times.","The Giant Pandas are on loan from China and have had offspring here several times (e.g., Fu Long, Fu Bao).","Houses over 700 different animal species and approx. 8,500 animals.","The Rainforest House, opened in 2002, simulates an authentic jungle climate.","In 1906, the world's first African elephant conceived in human care was born here.","The 'ORANG.erie' enclosure combines historical glasshouse architecture with monkey habitats.","Features a Tyrolean farmhouse area (Tirolerhof) dedicated to preserving rare farm animal breeds.","The historical ambiance and old trees give the zoo a park-like atmosphere."]}
  },
  {
    id: "AT-Hundertwasser", type: "landmark", parent: "AT-9", coords: [16.3941, 48.2075],
    name: { de: "Hundertwasserhaus", hu: "Hundertwasser-ház", ro: "Hundertwasserhaus", en: "Hundertwasser House" },
    image: "/geo-images/austria/hundertwasser.webp",
    description: {"de":"Das Hundertwasserhaus im 3. Wiener Gemeindebezirk ist ein farbenfrohes und unkonventionelles Architekturprojekt, das die Regeln der modernen Baukunst auf den Kopf stellt. Entworfen vom berühmten österreichischen Künstler Friedensreich Hundertwasser, verzichtet das Gebäude fast vollständig auf gerade Linien. Stattdessen dominieren wellige Böden, asymmetrische Formen, bunte Fassaden und eine reiche Bepflanzung, die aus den Fenstern und auf den Dächern wächst. Hundertwasser wollte mit dem Haus eine Symbiose aus Mensch und Natur in der urbanen Architektur schaffen. Da es sich um ein reguläres städtisches Wohnhaus handelt, kann es zwar nicht von innen besichtigt werden, ist aber dennoch eines der meistfotografierten und faszinierendsten Fotomotive der österreichischen Hauptstadt.","hu":"A bécsi 3. kerületben található Hundertwasser-ház egy színpompás és rendhagyó építészeti projekt, amely feje tetejére állítja a modern építészet szabályait. A híres osztrák művész, Friedensreich Hundertwasser által tervezett épület szinte teljesen nélkülözi az egyenes vonalakat. Ehelyett hullámos padlók, aszimmetrikus formák, színes homlokzatok és gazdag növényzet dominál, amely az ablakokból és a tetőkön nő. Hundertwasser az épülettel az ember és a természet szimbiózisát akarta megteremteni az urbánus építészetben. Mivel ez egy hagyományos városi lakóház, belülről nem látogatható, mégis az osztrák főváros egyik legtöbbet fényképezett és leglenyűgözőbb látványossága.","ro":"Casa Hundertwasser din al 3-lea district al Vienei este un proiect arhitectural colorat și neconvențional care întoarce pe dos regulile arhitecturii moderne. Proiectată de faimosul artist austriac Friedensreich Hundertwasser, clădirea renunță aproape complet la liniile drepte. În schimb, domină podelele ondulate, formele asimetrice, fațadele viu colorate și o plantație bogată care crește din ferestre și pe acoperișuri. Hundertwasser a dorit să creeze o simbioză între om și natură în arhitectura urbană cu această casă. Deoarece este o clădire rezidențială municipală obișnuită, nu poate fi vizitată în interior, dar rămâne totuși unul dintre cele mai fotografiate și fascinante motive foto din capitala Austriei.","en":"The Hundertwasser House in Vienna's 3rd district is a colorful and unconventional architectural project that turns the rules of modern building upside down. Designed by the famous Austrian artist Friedensreich Hundertwasser, the building almost entirely dispenses with straight lines. Instead, wavy floors, asymmetrical shapes, brightly colored facades, and rich vegetation growing from the windows and on the roofs dominate. With this house, Hundertwasser wanted to create a symbiosis of humans and nature in urban architecture. Since it is a regular municipal residential building, it cannot be visited inside, but it remains one of the most photographed and fascinating photo motifs in the Austrian capital."}, facts: {"de":["Entworfen von Friedensreich Hundertwasser, gemeinsam mit dem Architekten Josef Krawina.","Erbaut zwischen 1983 und 1985 als Wohnhaus der Gemeinde Wien.","Das Haus beheimatet 52 Wohnungen und 4 Geschäftslokale.","Es gibt auf dem Haus über 200 Bäume und Sträucher.","Hundertwasser nahm für die Gestaltung kein Honorar an.","Jeder Bewohner durfte die Fassade um sein Fenster herum selbst bemalen.","Die Dächer sind mit Erde bedeckt und üppig bepflanzt ('Baummieter').","Gegenüber befindet sich das Hundertwasser Village, ein kleines Einkaufszentrum im selben Stil.","Nicht weit entfernt liegt das Kunst Haus Wien, in dem das Museum Hundertwasser untergebracht ist.","Das Konzept richtet sich gegen den strengen Rationalismus in der Architektur."],"hu":["Friedensreich Hundertwasser tervezte Josef Krawina építésszel közösen.","1983 és 1985 között épült Bécs városának lakóházaként.","A házban 52 lakás és 4 üzlethelyiség található.","A házon több mint 200 fa és cserje található.","Hundertwasser nem fogadott el tiszteletdíjat a tervezésért.","Minden lakó maga festhette ki a homlokzatot a saját ablaka körül.","A tetőket föld borítja és buján be vannak ültetve növényekkel ('Fabérlők').","Vele szemben található a Hundertwasser Village, egy kis bevásárlóközpont ugyanebben a stílusban.","Nincs messze a Kunst Haus Wien, amely a Hundertwasser Múzeumnak ad otthont.","A koncepció az építészet szigorú racionalizmusa ellen irányul."],"ro":["Proiectată de Friedensreich Hundertwasser, împreună cu arhitectul Josef Krawina.","Construită între 1983 și 1985 ca o clădire rezidențială a municipalității Vienei.","Casa găzduiește 52 de apartamente și 4 spații comerciale.","Există peste 200 de arbori și arbuști pe casă.","Hundertwasser nu a acceptat niciun onorariu pentru design.","Fiecărui locuitor i s-a permis să își picteze singur fațada din jurul ferestrei.","Acoperișurile sunt acoperite cu pământ și bogat plantate („chiriași arbori”).","Vis-a-vis se află Hundertwasser Village, un mic centru comercial în același stil.","Nu departe este Kunst Haus Wien, care găzduiește Muzeul Hundertwasser.","Conceptul este îndreptat împotriva raționalismului strict din arhitectură."],"en":["Designed by Friedensreich Hundertwasser, together with architect Josef Krawina.","Built between 1983 and 1985 as a residential building of the Municipality of Vienna.","The house accommodates 52 apartments and 4 commercial spaces.","There are over 200 trees and shrubs on the house.","Hundertwasser did not accept a fee for the design.","Each resident was allowed to paint the facade around their own window.","The roofs are covered with soil and lushly planted ('tree tenants').","Opposite is the Hundertwasser Village, a small shopping center in the same style.","Not far away is the Kunst Haus Wien, which houses the Museum Hundertwasser.","The concept is directed against the strict rationalism in architecture."]}
  },
  {
    id: "AT-Klosterneuburg", type: "landmark", parent: "AT-3", coords: [16.3267, 48.3075],
    name: { de: "Stift Klosterneuburg", hu: "Klosterneuburgi apátság", ro: "Abația Klosterneuburg", en: "Klosterneuburg Monastery" },
    image: "/geo-images/austria/klosterneuburg.webp",
    description: {"de":"Das Stift Klosterneuburg, malerisch nördlich von Wien direkt an der Donau gelegen, ist eines der bedeutendsten religiösen, kulturellen und historischen Zentren Österreichs. Das Augustiner-Chorherrenstift wurde im frühen 12. Jahrhundert vom Babenberger Markgrafen Leopold III. gegründet, dem Landespatron von Österreich. Im 18. Jahrhundert hatte Kaiser Karl VI. den kühnen Plan, das Stift zu einem gigantischen 'Österreichischen Escorial' auszubauen, das Kloster und Kaiserresidenz vereinen sollte. Obwohl der Plan unvollendet blieb, zeugen die majestätischen barocken Kaisertrakte von diesem Vorhaben. Das berühmteste Kunstwerk des Stifts ist der unbezahlbare Verduner Altar. Das Stift besitzt zudem das älteste und eines der größten Weingüter Österreichs.","hu":"A Bécstől északra, festőien közvetlenül a Duna partján fekvő Klosterneuburgi apátság (Stift Klosterneuburg) Ausztria egyik legjelentősebb vallási, kulturális és történelmi központja. Az ágoston-rendi kanonoki apátságot a 12. század elején alapította III. Lipót babenbergi őrgróf, Ausztria védőszentje. A 18. században VI. Károly császárnak az a merész terve támadt, hogy az apátságot egy gigantikus 'Osztrák Escoriallá' bővíti, amely kolostorként és császári rezidenciaként is szolgálna. Bár a terv befejezetlen maradt, a fenséges barokk császári szárnyak tanúskodnak erről az elképzelésről. Az apátság leghíresebb műalkotása a felbecsülhetetlen értékű verduni oltár. Az apátság emellett Ausztria legrégebbi és egyik legnagyobb borászatával rendelkezik.","ro":"Abația Klosterneuburg (Stift Klosterneuburg), situată pitoresc la nord de Viena, chiar pe malul Dunării, este unul dintre cele mai importante centre religioase, culturale și istorice din Austria. Abația canonicilor augustinieni a fost fondată la începutul secolului al XII-lea de margraful Babenberg Leopold al III-lea, sfântul patron al Austriei. În secolul al XVIII-lea, Împăratul Carol al VI-lea a avut planul îndrăzneț de a extinde abația într-un gigant „Escorial austriac”, care să combine mănăstirea și reședința imperială. Deși planul a rămas neterminat, aripile imperiale baroce maiestuoase stau mărturie a acestui proiect. Cea mai faimoasă operă de artă a abației este Altarul de la Verdun, de o valoare inestimabilă. Abația deține, de asemenea, cea mai veche și una dintre cele mai mari podgorii din Austria.","en":"Klosterneuburg Abbey (Stift Klosterneuburg), picturesquely situated north of Vienna right on the Danube, is one of the most important religious, cultural, and historical centers in Austria. The Augustinian Canons abbey was founded in the early 12th century by the Babenberg Margrave Leopold III, the patron saint of Austria. In the 18th century, Emperor Charles VI had the bold plan to expand the abbey into a gigantic 'Austrian Escorial', which would combine monastery and imperial residence. Although the plan remained unfinished, the majestic Baroque imperial wings bear witness to this undertaking. The most famous artwork of the abbey is the priceless Verdun Altar. The abbey also owns the oldest and one of the largest wineries in Austria."}, facts: {"de":["Gegründet im Jahr 1114 von Leopold III., dem Heiligen.","Der Verduner Altar (1181) aus Emailtafeln ist eines der wichtigsten Kunstwerke des Mittelalters.","Auf den barocken Kuppeln befinden sich der österreichische Erzherzogshut und die Kaiserkrone aus Kupfer.","Das Stiftsweingut ist das älteste Weingut Österreichs (seit der Gründung aktiv).","Der 'Österreichische Escorial' von Karl VI. blieb wegen der hohen Kosten unvollendet.","Die Schatzkammer birgt den Österreichischen Erzherzogshut (die Heilige Krone Österreichs).","Die Stiftsbibliothek umfasst rund 300.000 Bände, darunter viele Inkunabeln.","Legende: Ein im Wind wehender Schleier von Leopolds Frau Agnes bestimmte den Bauort.","Klosterneuburg war ein Zentrum der Babenberger-Herrschaft vor Wien.","Alljährlich zu Leopoldi (15. Nov.) findet hier das traditionelle 'Fasslrutschen' (Fassrutschen) statt."],"hu":["1114-ben alapította III. (Szent) Lipót.","A zománctáblákból álló verduni oltár (1181) a középkor egyik legfontosabb műalkotása.","A barokk kupolákon rézből készült osztrák főhercegi korona (Erzherzogshut) és császári korona található.","Az apátsági borászat Ausztria legrégebbi borászata (az alapítás óta működik).","VI. Károly 'Osztrák Escorialja' a magas költségek miatt befejezetlen maradt.","A kincstárban őrzik az osztrák főhercegi koronát (Ausztria Szent Koronáját).","Az apátsági könyvtár mintegy 300 000 kötetet, köztük számos ősnyomtatványt tartalmaz.","A legenda szerint Lipót felesége, Ágnes szélben szálló fátyla határozta meg az építés helyét.","Klosterneuburg a Babenbergek uralmának központja volt Bécs előtt.","Minden évben a Lipót-napi (nov. 15.) ünnepségeken kerül sor a hagyományos 'Fasslrutschen'-re (hordón csúszásra)."],"ro":["Fondată în anul 1114 de Leopold al III-lea cel Sfânt.","Altarul de la Verdun (1181), realizat din plăci emailate, este una dintre cele mai importante opere de artă ale Evului Mediu.","Domurile baroce sunt încununate de Pălăria Arhiducală a Austriei și Coroana Imperială din cupru.","Podgoria abației este cea mai veche podgorie din Austria (activă de la fondare).","„Escorialul Austriac” al lui Carol al VI-lea a rămas neterminat din cauza costurilor ridicate.","Trezoreria găzduiește Pălăria Arhiducală a Austriei (Coroana Sfântă a Austriei).","Biblioteca abației conține aproximativ 300.000 de volume, inclusiv multe incunabule.","Legendă: Un văl al soției lui Leopold, Agnes, purtat de vânt, a determinat locul construcției.","Klosterneuburg a fost un centru al stăpânirii Babenberg înainte de Viena.","În fiecare an de Leopoldi (15 nov.), aici are loc tradiționalul 'Fasslrutschen' (alunecarea pe butoi)."],"en":["Founded in the year 1114 by Leopold III, the Holy.","The Verdun Altar (1181) made of enamel plaques is one of the most important artworks of the Middle Ages.","The Baroque domes are topped with the Austrian Archducal Hat and the Imperial Crown made of copper.","The abbey winery is the oldest winery in Austria (active since its foundation).","Charles VI's 'Austrian Escorial' remained unfinished due to the high costs.","The Treasury houses the Austrian Archducal Hat (the Holy Crown of Austria).","The abbey library contains around 300,000 volumes, including many incunabula.","Legend: A veil of Leopold's wife Agnes blowing in the wind determined the building site.","Klosterneuburg was a center of Babenberg rule before Vienna.","Every year on Leopoldi (Nov. 15), the traditional 'Fasslrutschen' (barrel sliding) takes place here."]}
  },
  {
    id: "AT-Achensee", type: "lake", parent: "AT-7", coords: [11.7083, 47.4333],
    name: { de: "Achensee", hu: "Achensee", ro: "Lacul Achen", en: "Achensee" },
    image: "/geo-images/austria/achensee.webp",
    description: {"de":"Der Achensee, oft auch liebevoll das 'Tiroler Meer' genannt, ist der größte See Tirols und ein atemberaubendes Naturparadies im Herzen der Alpen. Kristallklares, smaragdgrünes Wasser schmiegt sich malerisch zwischen die schroffen Felsen des Karwendelgebirges und die sanfteren Hänge des Rofangebirges. Diese fjordartige Landschaft macht den Achensee zu einem begehrten Ziel für Segler, Surfer und Kitesurfer, die die exzellenten Windverhältnisse schätzen. Aber auch Wanderer und Mountainbiker finden hier unzählige Routen mit spektakulären Ausblicken. Nostalgiker erfreuen sich an der historischen Achenseebahn, einer dampfbetriebenen Zahnradbahn, die Besucher seit über 130 Jahren vom Inntal direkt an das Ufer des Sees bringt.","hu":"Az Achensee (Achen-tó), amelyet gyakran szeretettel 'Tiroli tengernek' is neveznek, Tirol legnagyobb tava és egy lélegzetelállító természeti paradicsom az Alpok szívében. A kristálytiszta, smaragdzöld víz festőien simul a Karwendel-hegység zord sziklái és a Rofan-hegység szelídebb lejtői közé. Ez a fjordszerű táj teszi az Achenseet a vitorlázók, szörfösök és kiteszörfösök kedvelt célpontjává, akik nagyra értékelik a kiváló szélviszonyokat. De a túrázók és a hegyikerékpárosok is számtalan, látványos kilátást nyújtó útvonalat találhatnak itt. A nosztalgia kedvelői a történelmi Achenseebahn-nak, egy gőzüzemű fogaskerekű vasútnak örülhetnek, amely több mint 130 éve szállítja a látogatókat az Inn völgyéből egyenesen a tó partjára.","ro":"Achensee (Lacul Achen), adesea numit cu afecțiune „Marea Tirolului”, este cel mai mare lac din Tirol și un paradis natural uluitor în inima Alpilor. Apa cristalină, de un verde smarald, se cuibărește pitoresc între stâncile accidentate ale munților Karwendel și pantele mai blânde ale munților Rofan. Acest peisaj asemănător unui fiord face din Achensee o destinație căutată pentru marinari, surferi și kitesurferi, care apreciază condițiile excelente de vânt. Dar și drumeții și bicicliștii montani găsesc aici nenumărate trasee cu priveliști spectaculoase. Nostalgicii se pot bucura de istorica Achenseebahn, o cale ferată cu cremalieră acționată cu abur, care aduce vizitatorii din valea Innului direct pe malul lacului de peste 130 de ani.","en":"The Achensee, often affectionately called the 'Tyrolean Sea', is the largest lake in Tyrol and a breathtaking natural paradise in the heart of the Alps. Crystal-clear, emerald-green water nestles picturesquely between the rugged rocks of the Karwendel mountains and the gentler slopes of the Rofan mountains. This fjord-like landscape makes the Achensee a sought-after destination for sailors, surfers, and kite surfers who appreciate the excellent wind conditions. But hikers and mountain bikers also find countless routes with spectacular views here. Nostalgics delight in the historic Achenseebahn, a steam-powered cog railway that has been bringing visitors from the Inn Valley directly to the shore of the lake for over 130 years."}, facts: {"de":["Der Achensee ist der größte und tiefste See im Bundesland Tirol.","Wegen seiner thermischen Winde ist er ein Hotspot für Segler und Windsurfer.","Die Achenseebahn ist eine der ältesten Dampf-Zahnradbahnen der Welt (eröffnet 1889).","Die Achenseeschifffahrt befördert seit 1887 Passagiere über den See.","Das Wassergebirge Karwendel grenzt direkt an das westliche Ufer.","Das Tiroler Steinöl, ein traditionelles Heilmittel, wird in der Region abgebaut.","Der See friert im Winter oft nicht zu, bietet aber tolle Langlauf-Loipen am Ufer.","Die Wasserqualität ist extrem hoch (Trinkwasserqualität), das Wasser ist jedoch recht kühl.","Gilt als beliebtes Trainingszentrum für Paraglider.","In Pertisau am See verbrachte Kaiser Maximilian I. oft seine Jagdaufenthalte."],"hu":["Az Achensee Tirol tartomány legnagyobb és legmélyebb tava.","Termikus szeleinek köszönhetően a vitorlázók és szörfösök fellegvára.","Az Achenseebahn a világ egyik legrégebbi gőzüzemű fogaskerekű vasútja (1889-ben nyílt meg).","Az Achensee-i hajózás 1887 óta szállít utasokat a tavon.","A Karwendel-hegység közvetlenül a nyugati parttal határos.","A régióban bányásszák a tiroli kőolajat (Steinöl), amely egy hagyományos gyógyír.","A tó télen gyakran nem fagy be, de a partján nagyszerű sífutópályák találhatók.","A vízminőség rendkívül magas (ivóvíz minőségű), de a víz meglehetősen hűvös.","A siklóernyősök kedvelt edzőközpontjának számít.","I. Miksa császár gyakran töltötte vadászatkörútjait a tóparti Pertisauban."],"ro":["Achensee este cel mai mare și cel mai adânc lac din landul Tirol.","Datorită vânturilor sale termice, este un punct de atracție pentru marinari și windsurferi.","Achenseebahn este una dintre cele mai vechi căi ferate cu cremalieră cu abur din lume (deschisă în 1889).","Transportul maritim de pe Achensee transportă pasageri peste lac din 1887.","Munții Karwendel se învecinează direct cu malul vestic.","Uleiul de piatră tirolez (Steinöl), un remediu tradițional, este extras în regiune.","Adesea lacul nu îngheață iarna, dar oferă trasee excelente de schi fond pe mal.","Calitatea apei este extrem de ridicată (calitate de apă potabilă), dar apa este destul de rece.","Este considerat un centru popular de antrenament pentru parapantiști.","Împăratul Maximilian I își petrecea adesea vacanțele de vânătoare în Pertisau, pe lac."],"en":["The Achensee is the largest and deepest lake in the state of Tyrol.","Because of its thermal winds, it is a hotspot for sailors and windsurfers.","The Achenseebahn is one of the oldest steam cog railways in the world (opened 1889).","Achensee shipping has been transporting passengers across the lake since 1887.","The Karwendel mountains border directly on the western shore.","Tyrolean stone oil (Steinöl), a traditional remedy, is mined in the region.","The lake often does not freeze in winter but offers great cross-country skiing trails on the shore.","The water quality is extremely high (drinking water quality), but the water is quite cool.","Considered a popular training center for paragliders.","Emperor Maximilian I often spent his hunting trips in Pertisau on the lake."]}
  },
  {
    id: "AT-Pyramidenkogel", type: "landmark", parent: "AT-2", coords: [14.1453, 46.6092],
    name: { de: "Pyramidenkogel", hu: "Pyramidenkogel", ro: "Pyramidenkogel", en: "Pyramidenkogel" },
    image: "/geo-images/austria/pyramidenkogel.webp",
    description: {"de":"Der Pyramidenkogel ist ein bewaldeter Berggrat in Kärnten südlich des Wörthersees, der sich jedoch vor allem durch ein atemberaubendes Bauwerk auszeichnet: Den Aussichtsturm Pyramidenkogel. Dieser 100 Meter hohe Holzturm, der 2013 neu errichtet wurde, ist der höchste aus Holz errichtete Aussichtsturm der Welt. Seine geschwungene, spiralförmige Architektur ist ein meisterhafter Blickfang und fügt sich elegant in die Landschaft ein. Von seinen zahlreichen Aussichtsplattformen bietet der Turm einen spektakulären 360-Grad-Panoramablick über die Kärntner Seenplatte, insbesondere auf den türkisblauen Wörthersee und die majestätischen Berggipfel der Karawanken. Für den Rückweg nach unten können Abenteuerlustige die höchste überdachte Gebäude-Rutsche Europas nutzen.","hu":"A Pyramidenkogel egy erdős hegyhát Karintiában, a Wörthersee-től (Wörthi-tó) délre, amely azonban leginkább egy lélegzetelállító építményről híres: a Pyramidenkogel kilátótoronyról. Ez a 100 méter magas, 2013-ban újjáépített fatorony a világ legmagasabb fából készült kilátótornya. Ívelt, spirál alakú építészete mesteri látványosság, és elegánsan illeszkedik a tájba. Számos kilátóplatformjáról a torony látványos, 360 fokos panorámát nyújt a karintiai tóvidékre, különösen a türkizkék Wörthersee-re és a Karavankák fenséges hegycsúcsaira. A lefelé vezető úton a kalandvágyók Európa legmagasabb fedett épületcsúszdáját használhatják.","ro":"Pyramidenkogel este o creastă muntoasă împădurită în Carintia, la sud de Wörthersee, dar este cunoscută cel mai mult pentru o structură uluitoare: Turnul de Observare Pyramidenkogel. Acest turn de lemn, înalt de 100 de metri, reconstruit în 2013, este cel mai înalt turn de observare din lemn din lume. Arhitectura sa curbată, în formă de spirală, atrage atenția cu măiestrie și se integrează elegant în peisaj. Din numeroasele sale platforme de observare, turnul oferă o vedere panoramică spectaculoasă la 360 de grade asupra districtului lacurilor din Carintia, în special asupra lacului Wörthersee de un albastru turcoaz și a vârfurilor maiestuoase ale munților Karawanken. Pentru coborâre, aventurierii pot folosi cel mai înalt tobogan interior dintr-o clădire din Europa.","en":"The Pyramidenkogel is a wooded mountain ridge in Carinthia south of Lake Wörthersee, which is most notable for a breathtaking structure: The Pyramidenkogel Observation Tower. This 100-meter-high wooden tower, newly built in 2013, is the highest wooden observation tower in the world. Its curved, spiral architecture is a masterful eye-catcher and blends elegantly into the landscape. From its numerous observation platforms, the tower offers a spectacular 360-degree panoramic view over the Carinthian lake district, in particular the turquoise-blue Wörthersee and the majestic mountain peaks of the Karawanken. For the way down, the adventurous can use Europe's highest covered building slide."}, facts: {"de":["Der Aussichtsturm ist exakt 100 Meter hoch und damit der höchste Holzturm der Welt.","Die geschwungene Struktur besteht aus 16 mächtigen Brettschichtholz-Stützen.","Die Röhrenrutsche ist 120 Meter lang und überwindet 52 Höhenmeter.","Anstelle von Stufen kann auch ein gläserner Panoramaaufzug genutzt werden.","Zusätzlich gibt es die Möglichkeit, mit einem 'Flying Fox' (Zipline) vom Turm zu gleiten.","Der aktuelle Turm ersetzte 2013 eine ältere, kleinere Betonstruktur aus den 1960er Jahren.","Drei frei begehbare Aussichtsplattformen bieten Rundumblicke auf Kärnten.","Das Gewicht der verbauten Holz- und Stahlkonstruktion beträgt rund 800 Tonnen.","Der Berg selbst (Pyramidenkogel) ist 851 Meter hoch.","Der Turm ist eine der beliebtesten und modernsten Touristenattraktionen Südösterreichs."],"hu":["A kilátótorony pontosan 100 méter magas, ezzel a világ legmagasabb fatornya.","Az ívelt szerkezet 16 hatalmas rétegelt lemez oszlopból áll.","A csőcsúszda 120 méter hosszú, és 52 méteres szintkülönbséget küzd le.","Lépcsők helyett egy üveges panorámalift is használható.","Ezen kívül lehetőség van 'Flying Fox'-szal (drótkötélpályával) lecsúszni a toronyból.","A jelenlegi torony 2013-ban egy régebbi, kisebb, 1960-as évekbeli betonszerkezetet váltott le.","Három, szabadon bejárható kilátóplatform nyújt körpanorámát Karintiára.","A beépített fa- és acélszerkezet súlya mintegy 800 tonna.","Maga a hegy (Pyramidenkogel) 851 méter magas.","A torony Dél-Ausztria egyik legnépszerűbb és legmodernebb turisztikai látványossága."],"ro":["Turnul de observare are exact 100 de metri înălțime, fiind cel mai înalt turn de lemn din lume.","Structura curbată constă din 16 suporturi masive din lemn stratificat încleiat.","Toboganul tubular are o lungime de 120 de metri și depășește o diferență de altitudine de 52 de metri.","În loc de trepte se poate folosi și un lift panoramic de sticlă.","În plus, există opțiunea de a aluneca de pe turn cu un „Flying Fox” (tiroliană).","Turnul actual a înlocuit o structură de beton mai veche și mai mică din anii 1960 în 2013.","Trei platforme de observare liber accesibile oferă vederi panoramice asupra Carintiei.","Greutatea structurii din lemn și oțel construite este de aproximativ 800 de tone.","Muntele în sine (Pyramidenkogel) are o înălțime de 851 de metri.","Turnul este una dintre cele mai populare și moderne atracții turistice din sudul Austriei."],"en":["The observation tower is exactly 100 meters high, making it the highest wooden tower in the world.","The curved structure consists of 16 massive glulam supports.","The tube slide is 120 meters long and overcomes an altitude difference of 52 meters.","Instead of stairs, a glass panoramic elevator can also be used.","In addition, there is the option of gliding down from the tower using a 'Flying Fox' (zipline).","The current tower replaced an older, smaller concrete structure from the 1960s in 2013.","Three freely accessible observation platforms offer all-round views of Carinthia.","The weight of the built-in wood and steel structure is around 800 tons.","The mountain itself (Pyramidenkogel) is 851 meters high.","The tower is one of the most popular and modern tourist attractions in southern Austria."]}
  },
  {
    id: "AT-Arlberg", type: "landmark", parent: "AT-7", coords: [10.2114, 47.1294],
    name: { de: "Arlberg", hu: "Arlberg", ro: "Arlberg", en: "Arlberg" },
    image: "/geo-images/austria/arlberg.webp",
    description: {"de":"Der Arlberg, die natürliche Gebirgsgrenze zwischen den Bundesländern Tirol und Vorarlberg, ist ein weltweiter Mythos im alpinen Wintersport und gilt als die 'Wiege des alpinen Skilaufs'. Berühmte, mondäne Skidörfer wie St. Anton, Lech, Zürs und St. Christoph bilden zusammen mit Ski Arlberg das größte zusammenhängende Skigebiet Österreichs und eines der fünf größten der Welt. Über 300 Pistenkilometer und beispiellose Tiefschneehänge locken High Society, Könige und passionierte Freerider gleichermaßen an. Neben seinem Ruf als Skiparadies mit exzellenter Gastronomie und legendärem Après-Ski ist der Arlberg-Pass seit Jahrhunderten auch eine historisch bedeutsame Verkehrsverbindung zwischen West- und Zentraleuropa.","hu":"Az Arlberg, a Tirol és Vorarlberg tartományok közötti természetes hegyi határ, az alpesi téli sportok világszerte ismert mítosza, és az 'alpesi síelés bölcsőjének' tartják. Olyan híres, elegáns sífalvak, mint St. Anton, Lech, Zürs és St. Christoph alkotják együtt a Ski Arlberget, Ausztria legnagyobb összefüggő síterepét, és a világ öt legnagyobb síterepének egyikét. Több mint 300 kilométernyi sípálya és páratlan mélyhósí-lejtők vonzzák a felső tízezert, a királyokat és a szenvedélyes freeridereket egyaránt. A kiváló gasztronómiával és legendás après-ski (sízés utáni szórakozás) lehetőségekkel rendelkező síparadicsom hírneve mellett az Arlberg-hágó évszázadok óta történelmileg jelentős közlekedési kapcsolat Nyugat- és Közép-Európa között.","ro":"Arlberg, granița montană naturală dintre landurile Tirol și Vorarlberg, este un mit global în sporturile de iarnă alpine și este considerat „leagănul schiului alpin”. Sate de schi faimoase și sofisticate precum St. Anton, Lech, Zürs și St. Christoph formează împreună Ski Arlberg, cea mai mare zonă de schi contiguă din Austria și una dintre cele mai mari cinci din lume. Peste 300 de kilometri de pârtii și pante de zăpadă adâncă de neegalat atrag înalta societate, regalitatea și freeriderii pasionați în egală măsură. Pe lângă reputația sa de paradis al schiului cu o gastronomie excelentă și un legendar après-ski, Pasul Arlberg a fost și o conexiune de transport importantă istoric între vestul și centrul Europei de secole.","en":"The Arlberg, the natural mountain border between the federal states of Tyrol and Vorarlberg, is a global myth in alpine winter sports and is considered the 'cradle of alpine skiing'. Famous, sophisticated ski villages like St. Anton, Lech, Zürs, and St. Christoph together form Ski Arlberg, the largest contiguous ski area in Austria and one of the five largest in the world. Over 300 kilometers of slopes and unparalleled deep snow slopes attract high society, royalty, and passionate freeriders alike. In addition to its reputation as a ski paradise with excellent gastronomy and legendary après-ski, the Arlberg Pass has also been a historically significant transport connection between Western and Central Europe for centuries."}, facts: {"de":["Gilt als 'Wiege des alpinen Skilaufs' (der erste Skiclub wurde hier 1901 gegründet).","Ski Arlberg ist mit 302 Pistenkilometern das größte Skigebiet in Österreich.","Der Arlberg-Straßentunnel (knapp 14 km) ist der längste Straßentunnel Österreichs.","Lech und Zürs sind traditionelle Urlaubsorte des internationalen Jetsets und des Adels.","Hannes Schneider aus St. Anton revolutionierte mit der 'Arlberg-Technik' das Skifahren.","Der 'Weiße Ring' in Lech ist ein legendäres Skirennen und eine beliebte Skirunde.","Die Valluga (2.811 m) ist der höchste Berg im Arlberg-Skigebiet.","St. Christoph am Arlberg war einst ein Hospiz zur Rettung von Reisenden aus dem Schnee.","Der Arlberg-Eisenbahntunnel wurde bereits 1884 eröffnet.","Das Skigebiet ist berühmt für seine gigantischen Off-Piste- und Heliskiing-Möglichkeiten."],"hu":["Az 'alpesi síelés bölcsőjének' tartják (az első síklubot itt alapították 1901-ben).","A Ski Arlberg 302 kilométernyi pályájával a legnagyobb síterep Ausztriában.","Az Arlberg-közúti alagút (közel 14 km) Ausztria leghosszabb közúti alagútja.","Lech és Zürs a nemzetközi jet-set és a nemesség hagyományos üdülőhelyei.","A St. Anton-i Hannes Schneider az 'Arlberg-technikával' forradalmasította a síelést.","A lechi 'Fehér Gyűrű' (Der Weiße Ring) egy legendás síverseny és kedvelt sítúra.","A Valluga (2811 m) az Arlberg-síterep legmagasabb hegye.","St. Christoph am Arlberg egykor menedékház volt a hóban rekedt utazók megmentésére.","Az Arlberg-vasúti alagutat már 1884-ben megnyitották.","A síterep híres hatalmas off-piste (pályán kívüli) és heliskiing lehetőségeiről."],"ro":["Considerat „leagănul schiului alpin” (primul club de schi a fost fondat aici în 1901).","Ski Arlberg este cea mai mare zonă de schi din Austria, cu 302 km de pârtii.","Tunelul rutier Arlberg (aproape 14 km) este cel mai lung tunel rutier din Austria.","Lech și Zürs sunt destinații tradiționale de vacanță pentru înalta societate internațională și nobilime.","Hannes Schneider din St. Anton a revoluționat schiatul cu „Tehnica Arlberg”.","„Inelul Alb” (Der Weiße Ring) din Lech este o cursă legendară de schi și un circuit popular de schi.","Valluga (2.811 m) este cel mai înalt munte din zona de schi Arlberg.","St. Christoph am Arlberg a fost cândva un ospiciu pentru a salva călătorii din zăpadă.","Tunelul feroviar Arlberg a fost deschis încă din 1884.","Zona de schi este renumită pentru oportunitățile sale gigantice de schi off-piste și heliski."],"en":["Considered the 'cradle of alpine skiing' (the first ski club was founded here in 1901).","Ski Arlberg is the largest ski area in Austria with 302 km of slopes.","The Arlberg Road Tunnel (almost 14 km) is the longest road tunnel in Austria.","Lech and Zürs are traditional holiday destinations for the international jet set and nobility.","Hannes Schneider from St. Anton revolutionized skiing with the 'Arlberg technique'.","The 'White Ring' (Der Weiße Ring) in Lech is a legendary ski race and popular ski circuit.","The Valluga (2,811 m) is the highest mountain in the Arlberg ski area.","St. Christoph am Arlberg was once a hospice to rescue travelers from the snow.","The Arlberg Railway Tunnel was opened as early as 1884.","The ski area is famous for its gigantic off-piste and heliskiing opportunities."]}
  }
,
  {
    "id": "at-villach",
    "type": "city",
    "parent": "AT-2",
    "coords": [
      13.847,
      46.6103
    ],
    "name": {
      "de": "Villach",
      "hu": "Villach",
      "ro": "Villach",
      "en": "Villach"
    },
    "image": "/geo-images/austria/villach.webp",
    "description": {
      "de": "Villach ist die siebtgrößte Stadt Österreichs und ein wichtiger Verkehrsknotenpunkt in Kärnten. Die Stadt liegt an der Drau und ist von malerischen Bergen und Seen umgeben. Bekannt ist Villach auch für seinen traditionellen Villacher Kirchtag und den Fasching. Die historische Altstadt lädt mit ihren charmanten Gassen zum Verweilen ein.",
      "hu": "Villach Ausztria hetedik legnagyobb városa és Karintia fontos közlekedési csomópontja. A város a Dráva partján fekszik, festői hegyek és tavak ölelésében. Villach híres hagyományos búcsújáról és farsangi karneváljáról. A történelmi óváros hangulatos utcái sétára csábítanak.",
      "ro": "Villach este al șaptelea oraș ca mărime din Austria și un important nod de transport în Carintia. Orașul este situat pe râul Drava și este înconjurat de munți și lacuri pitorești. Villach este cunoscut și pentru tradiționalul său Kirchtag și carnaval. Centrul istoric al orașului te invită să te relaxezi pe străzile sale fermecătoare.",
      "en": "Villach is the seventh largest city in Austria and an important transport hub in Carinthia. The city is located on the Drava river and is surrounded by picturesque mountains and lakes. Villach is also known for its traditional Villach Kirchtag and its carnival. The historic old town with its charming streets invites you to linger."
    },
    "facts": {
      "de": [
        "Villach ist die zweitgrößte Stadt in Kärnten.",
        "Die Stadt liegt an der Einmündung der Gail in die Drau.",
        "Der Villacher Kirchtag ist Österreichs größtes Brauchtumsfest.",
        "Villach hat eine reiche römische und mittelalterliche Geschichte.",
        "Die nahegelegene Burgruine Landskron ist ein beliebtes Ausflugsziel.",
        "Villach ist ein wichtiger Knotenpunkt im Alpen-Adria-Raum."
      ],
      "hu": [
        "Villach Karintia második legnagyobb városa.",
        "A város a Gail és a Dráva folyók összefolyásánál fekszik.",
        "A villachi búcsú (Kirchtag) Ausztria legnagyobb hagyományőrző ünnepe.",
        "Villach gazdag római és középkori történelemmel rendelkezik.",
        "A közeli Landskron várrom kedvelt kirándulóhely.",
        "Villach fontos csomópont az Alpok-Adria régióban."
      ],
      "ro": [
        "Villach este al doilea oraș ca mărime din Carintia.",
        "Orașul este situat la confluența râurilor Gail și Drava.",
        "Kirchtag-ul din Villach este cel mai mare festival folcloric din Austria.",
        "Villach are o bogată istorie romană și medievală.",
        "Ruinele castelului Landskron din apropiere reprezintă o destinație populară.",
        "Villach este un nod important în regiunea Alpi-Adriatica."
      ],
      "en": [
        "Villach is the second largest city in Carinthia.",
        "The city is located at the confluence of the Gail and Drava rivers.",
        "The Villach Kirchtag is Austria's largest traditional festival.",
        "Villach has a rich Roman and medieval history.",
        "The nearby Landskron Castle ruins are a popular destination.",
        "Villach is an important hub in the Alps-Adriatic region."
      ]
    },
  },
  {
    "id": "at-wiener-neustadt",
    "type": "city",
    "parent": "AT-3",
    "coords": [
      16.2444,
      47.8144
    ],
    "name": {
      "de": "Wiener Neustadt",
      "hu": "Bécsújhely",
      "ro": "Wiener Neustadt",
      "en": "Wiener Neustadt"
    },
    "image": "/geo-images/austria/wiener-neustadt.webp",
    "description": {
      "de": "Wiener Neustadt ist eine bedeutende Stadt in Niederösterreich, südlich von Wien gelegen. Sie wurde im späten 12. Jahrhundert gegründet und diente oft als Residenz der Habsburger. Die Theresianische Militärakademie, eine der ältesten Militärakademien der Welt, hat hier ihren Sitz. Die Stadt verbindet heute historische Architektur mit moderner Industrie und Bildung.",
      "hu": "Bécsújhely (Wiener Neustadt) egy jelentős város Alsó-Ausztriában, Bécstől délre. A 12. század végén alapították, és gyakran szolgált a Habsburgok rezidenciájaként. Itt található a Theresianum Katonai Akadémia, a világ egyik legrégebbi katonai akadémiája. A város ma a történelmi építészetet ötvözi a modern iparral és oktatással.",
      "ro": "Wiener Neustadt este un oraș important din Austria Inferioară, situat la sud de Viena. A fost fondat la sfârșitul secolului al XII-lea și a servit adesea ca reședință a Habsburgilor. Academia Militară Tereziană, una dintre cele mai vechi academii militare din lume, este situată aici. Astăzi, orașul combină arhitectura istorică cu industria și educația modernă.",
      "en": "Wiener Neustadt is an important city in Lower Austria, located south of Vienna. It was founded in the late 12th century and often served as a residence for the Habsburgs. The Theresian Military Academy, one of the oldest military academies in the world, is located here. Today, the city combines historic architecture with modern industry and education."
    },
    "facts": {
      "de": [
        "Wiener Neustadt wurde 1194 vom Babenberger-Herzog Leopold V. gegründet.",
        "Ein Teil des Lösegelds für Richard Löwenherz wurde zur Finanzierung der Stadtgründung verwendet.",
        "Kaiser Friedrich III. und Maximilian I. residierten oft in der Stadt.",
        "Die Burg Wiener Neustadt beherbergt die Theresianische Militärakademie.",
        "Die Stadt wurde im Zweiten Weltkrieg durch Bombenangriffe stark zerstört.",
        "Heute ist Wiener Neustadt ein wichtiges Zentrum für Luftfahrt und Technologie."
      ],
      "hu": [
        "Bécsújhelyet 1194-ben alapította V. Lipót Babenberg herceg.",
        "Oroszlánszívű Richárd váltságdíjának egy részét a városalapítás finanszírozására fordították.",
        "III. Frigyes és I. Miksa császárok gyakran tartózkodtak a városban.",
        "A bécsújhelyi vár ad otthont a Theresianum Katonai Akadémiának.",
        "A várost a második világháborúban bombatámadások súlyosan elpusztították.",
        "Ma Bécsújhely a repülés és a technológia fontos központja."
      ],
      "ro": [
        "Wiener Neustadt a fost fondat în 1194 de ducele Babenberg Leopold al V-lea.",
        "O parte din răscumpărarea pentru Richard Inimă de Leu a fost folosită pentru a finanța fondarea orașului.",
        "Împărații Frederic al III-lea și Maximilian I au locuit frecvent în oraș.",
        "Castelul Wiener Neustadt găzduiește Academia Militară Tereziană.",
        "Orașul a fost puternic distrus de bombardamente în al Doilea Război Mondial.",
        "Astăzi, Wiener Neustadt este un centru important pentru aviație și tehnologie."
      ],
      "en": [
        "Wiener Neustadt was founded in 1194 by the Babenberg Duke Leopold V.",
        "Part of the ransom for Richard the Lionheart was used to finance the city's foundation.",
        "Emperors Frederick III and Maximilian I often resided in the city.",
        "Wiener Neustadt Castle houses the Theresian Military Academy.",
        "The city was heavily destroyed by bombing during World War II.",
        "Today, Wiener Neustadt is an important center for aviation and technology."
      ]
    },
  },
  {
    "id": "at-krems",
    "type": "city",
    "parent": "AT-3",
    "coords": [
      15.61,
      48.4088
    ],
    "name": {
      "de": "Krems an der Donau",
      "hu": "Krems an der Donau",
      "ro": "Krems an der Donau",
      "en": "Krems an der Donau"
    },
    "image": "/geo-images/austria/krems.webp",
    "description": {
      "de": "Krems an der Donau ist die fünftgrößte Stadt Niederösterreichs und liegt am östlichen Rand der Wachau. Die Stadt hat eine über 1000-jährige Geschichte und ist für ihren Weinbau und ihre historische Altstadt berühmt. Das Steiner Tor ist das Wahrzeichen von Krems und das einzig erhaltene Stadttor. Die Donau-Universität Krems zieht viele internationale Studierende an.",
      "hu": "Krems an der Donau Alsó-Ausztria ötödik legnagyobb városa, a Wachau keleti szélén fekszik. A város több mint 1000 éves történelemmel rendelkezik, híres borászatáról és történelmi óvárosáról. A Steiner Tor Krems jelképe és az egyetlen fennmaradt városkapu. A Kremsi Duna Egyetem sok nemzetközi hallgatót vonz.",
      "ro": "Krems an der Donau este al cincilea oraș ca mărime din Austria Inferioară și se află la marginea estică a regiunii Wachau. Orașul are o istorie de peste 1000 de ani și este faimos pentru viticultura sa și centrul istoric. Steiner Tor este simbolul orașului Krems și singura poartă a orașului care s-a păstrat. Universitatea Dunării din Krems atrage mulți studenți internaționali.",
      "en": "Krems an der Donau is the fifth largest city in Lower Austria and is located on the eastern edge of the Wachau valley. The city has a history of over 1,000 years and is famous for its viticulture and historic old town. The Steiner Tor is the landmark of Krems and the only surviving city gate. The Danube University Krems attracts many international students."
    },
    "facts": {
      "de": [
        "Krems wurde im Jahr 995 erstmals urkundlich erwähnt.",
        "Die Stadt bildet zusammen mit Stein an der Donau eine Doppelstadt.",
        "Die historische Altstadt gehört zum UNESCO-Welterbe der Wachau.",
        "Krems ist ein bedeutendes Zentrum für den österreichischen Weinbau.",
        "Das Karikaturmuseum Krems ist das einzige Museum seiner Art in Österreich.",
        "Die Donau-Universität Krems ist auf Weiterbildung spezialisiert."
      ],
      "hu": [
        "Krems nevét 995-ben említik először írásos dokumentumok.",
        "A város Stein an der Donau-val egy ikervárost alkot.",
        "A történelmi óváros a Wachau részeként az UNESCO Világörökség része.",
        "Krems az osztrák borászat jelentős központja.",
        "A Kremsi Karikatúramúzeum az egyetlen ilyen jellegű múzeum Ausztriában.",
        "A Kremsi Duna Egyetem a továbbképzésre specializálódott."
      ],
      "ro": [
        "Krems a fost menționat pentru prima dată într-un document în anul 995.",
        "Orașul formează un oraș dublu împreună cu Stein an der Donau.",
        "Centrul istoric face parte din patrimoniul mondial UNESCO al regiunii Wachau.",
        "Krems este un centru important pentru viticultura austriacă.",
        "Muzeul de Caricatură din Krems este singurul de acest fel din Austria.",
        "Universitatea Dunării din Krems este specializată în formare continuă."
      ],
      "en": [
        "Krems was first mentioned in a document in the year 995.",
        "The city forms a twin city together with Stein an der Donau.",
        "The historic old town is part of the UNESCO World Heritage of the Wachau.",
        "Krems is a major center for Austrian viticulture.",
        "The Caricature Museum Krems is the only museum of its kind in Austria.",
        "The Danube University Krems specializes in continuing education."
      ]
    },
  },
  {
    "id": "at-wels",
    "type": "city",
    "parent": "AT-4",
    "coords": [
      14.0275,
      48.1575
    ],
    "name": {
      "de": "Wels",
      "hu": "Wels",
      "ro": "Wels",
      "en": "Wels"
    },
    "image": "/geo-images/austria/wels.webp",
    "description": {
      "de": "Wels ist die achtgrößte Stadt Österreichs und die zweitgrößte Stadt in Oberösterreich. Die Stadt liegt an der Traun und hat eine bedeutende Rolle als Messestadt und Industriezentrum. Wels hat eine lange Geschichte, die bis in die Römerzeit zurückreicht, als sie als Ovilava bekannt war. Die Welser Burg und der historische Stadtplatz sind beliebte Sehenswürdigkeiten.",
      "hu": "Wels Ausztria nyolcadik és Felső-Ausztria második legnagyobb városa. A város a Traun folyó partján fekszik, és fontos szerepet játszik mint vásárváros és ipari központ. Wels hosszú, a római korig visszanyúló történelemmel rendelkezik, amikor Ovilava néven ismerték. A welsi vár és a történelmi főtér kedvelt látványosságok.",
      "ro": "Wels este al optulea oraș ca mărime din Austria și al doilea oraș ca mărime din Austria Superioară. Orașul este situat pe râul Traun și are un rol important ca oraș al târgurilor și centru industrial. Wels are o istorie lungă care datează din epoca romană, când era cunoscut sub numele de Ovilava. Castelul Wels și piața istorică a orașului sunt atracții populare.",
      "en": "Wels is the eighth largest city in Austria and the second largest city in Upper Austria. The city is located on the Traun river and plays an important role as a trade fair city and industrial center. Wels has a long history dating back to Roman times when it was known as Ovilava. The Wels Castle and the historic town square are popular sights."
    },
    "facts": {
      "de": [
        "Wels war unter den Römern als Ovilava eine wichtige Stadt.",
        "Kaiser Maximilian I. starb 1519 in der Welser Burg.",
        "Die Messe Wels ist eine der größten und wichtigsten in Österreich.",
        "Der Ledererturm ist das einzig erhaltene Stadttor von Wels.",
        "Die Stadtkrone von Wels ist ein bedeutendes architektonisches Merkmal der Altstadt.",
        "Wels ist ein wichtiger Standort für die Lebensmittel- und Maschinenbauindustrie."
      ],
      "hu": [
        "Wels Ovilava néven fontos város volt a rómaiak idején.",
        "I. Miksa császár a welsi várban halt meg 1519-ben.",
        "A Welsi Vásár az egyik legnagyobb és legfontosabb Ausztriában.",
        "A Ledererturm (Bőrműves-torony) az egyetlen fennmaradt welsi városkapu.",
        "A welsi városháza és az óváros építészete különleges értékű.",
        "Wels az élelmiszer- és gépipar fontos központja."
      ],
      "ro": [
        "Wels a fost un oraș important sub romani, cunoscut sub numele de Ovilava.",
        "Împăratul Maximilian I a murit în Castelul Wels în 1519.",
        "Târgul de la Wels este unul dintre cele mai mari și mai importante din Austria.",
        "Turnul Lederer este singura poartă a orașului Wels care s-a păstrat.",
        "Arhitectura orașului vechi este o trăsătură caracteristică importantă a orașului Wels.",
        "Wels este o locație importantă pentru industria alimentară și ingineria mecanică."
      ],
      "en": [
        "Wels was an important city under the Romans, known as Ovilava.",
        "Emperor Maximilian I died in the Wels Castle in 1519.",
        "The Wels Trade Fair is one of the largest and most important in Austria.",
        "The Lederer Tower is the only surviving city gate of Wels.",
        "The historical architecture of the old town is a significant feature of Wels.",
        "Wels is an important location for the food and mechanical engineering industries."
      ]
    },
  },
  {
    "id": "at-dornbirn",
    "type": "city",
    "parent": "AT-8",
    "coords": [
      9.7431,
      47.4143
    ],
    "name": {
      "de": "Dornbirn",
      "hu": "Dornbirn",
      "ro": "Dornbirn",
      "en": "Dornbirn"
    },
    "image": "/geo-images/austria/dornbirn.webp",
    "description": {
      "de": "Dornbirn ist die bevölkerungsreichste Stadt im österreichischen Bundesland Vorarlberg und der wichtigste wirtschaftliche Knotenpunkt der Region. Die Stadt liegt im Vorarlberger Rheintal und ist für ihre Textilindustrie-Geschichte bekannt. Heute besticht Dornbirn durch eine moderne Architektur und die Nähe zur Natur, etwa der Rappenlochschlucht. Das Karren-Seilbahn bietet einen spektakulären Blick über das Rheintal bis zum Bodensee.",
      "hu": "Dornbirn az osztrák Vorarlberg tartomány legnépesebb városa és a régió legfontosabb gazdasági központja. A város a Vorarlbergi Rajna-völgyben fekszik, és híres textilipari történelméről. Ma Dornbirn modern építészetével és a természet, például a Rappenloch-szurdok közelségével hódít. A Karren felvonó látványos kilátást kínál a Rajna-völgyön át egészen a Bóden-tóig.",
      "ro": "Dornbirn este cel mai populat oraș din statul austriac Vorarlberg și cel mai important nod economic al regiunii. Orașul este situat în valea Rinului din Vorarlberg și este cunoscut pentru istoria sa în industria textilă. Astăzi, Dornbirn impresionează prin arhitectura modernă și apropierea de natură, cum ar fi defileul Rappenloch. Telecabina Karren oferă o priveliște spectaculoasă peste valea Rinului până la Lacul Constanța.",
      "en": "Dornbirn is the most populous city in the Austrian state of Vorarlberg and the region's most important economic hub. The city is located in the Vorarlberg Rhine Valley and is known for its textile industry history. Today, Dornbirn impresses with its modern architecture and its proximity to nature, such as the Rappenloch Gorge. The Karren cable car offers a spectacular view across the Rhine Valley to Lake Constance."
    },
    "facts": {
      "de": [
        "Dornbirn hat mehr Einwohner als die Landeshauptstadt Bregenz.",
        "Die Stadt war im 19. Jahrhundert das Zentrum der Vorarlberger Textilindustrie.",
        "Das Inatura Museum ist eines der modernsten Naturmuseen Europas.",
        "Die Rappenlochschlucht ist eine der größten Schluchten der Ostalpen.",
        "Der Hausberg Karren ist ein beliebtes Ausflugsziel mit Panoramarestaurant.",
        "Dornbirn beherbergt die Fachhochschule Vorarlberg."
      ],
      "hu": [
        "Dornbirnnek több lakosa van, mint a tartományi fővárosnak, Bregenznek.",
        "A 19. században a város a vorarlbergi textilipar központja volt.",
        "Az Inatura Múzeum Európa egyik legmodernebb természettudományi múzeuma.",
        "A Rappenloch-szurdok a Keleti-Alpok egyik legnagyobb szurdoka.",
        "A Karren hegy kedvelt kirándulóhely, panorámaétteremmel.",
        "Dornbirn ad otthont a Vorarlbergi Szakfőiskolának."
      ],
      "ro": [
        "Dornbirn are mai mulți locuitori decât capitala statului, Bregenz.",
        "În secolul al XIX-lea, orașul a fost centrul industriei textile din Vorarlberg.",
        "Muzeul Inatura este unul dintre cele mai moderne muzee ale naturii din Europa.",
        "Defileul Rappenloch este unul dintre cele mai mari defileuri din Alpii Orientali.",
        "Muntele Karren este o destinație populară, cu un restaurant panoramic.",
        "Dornbirn găzduiește Universitatea de Științe Aplicate din Vorarlberg."
      ],
      "en": [
        "Dornbirn has more inhabitants than the state capital Bregenz.",
        "In the 19th century, the city was the center of the Vorarlberg textile industry.",
        "The Inatura Museum is one of the most modern nature museums in Europe.",
        "The Rappenloch Gorge is one of the largest gorges in the Eastern Alps.",
        "The Karren mountain is a popular destination with a panoramic restaurant.",
        "Dornbirn is home to the Vorarlberg University of Applied Sciences."
      ]
    },
  },
  {
    "id": "at-steyr",
    "type": "city",
    "parent": "AT-4",
    "coords": [
      14.4167,
      48.05
    ],
    "name": {
      "de": "Steyr",
      "hu": "Steyr",
      "ro": "Steyr",
      "en": "Steyr"
    },
    "image": "/geo-images/austria/steyr.webp",
    "description": {
      "de": "Steyr ist eine historische Stadt in Oberösterreich und liegt am Zusammenfluss von Enns und Steyr. Sie war jahrhundertelang das Zentrum der österreichischen Eisenindustrie, was der Stadt großen Reichtum brachte. Der malerische Stadtplatz von Steyr gehört zu den am besten erhaltenen Altstadtensembles im deutschsprachigen Raum. Zudem wird Steyr oft als die \"Christkindlstadt\" bezeichnet, da sich hier das Postamt Christkindl befindet.",
      "hu": "Steyr történelmi város Felső-Ausztriában, az Enns és a Steyr folyók összefolyásánál fekszik. Évszázadokon át az osztrák vasipar központja volt, ami nagy gazdagságot hozott a városnak. Steyr festői főtere a német nyelvterület egyik legjobb állapotban fennmaradt óvárosi együttese. Steyrt gyakran \"Christkindlstadt\"-nak, a Jézuska városának is nevezik, mivel itt található a Christkindl postahivatal.",
      "ro": "Steyr este un oraș istoric din Austria Superioară, situat la confluența râurilor Enns și Steyr. Timp de secole, a fost centrul industriei siderurgice austriece, ceea ce a adus o mare bogăție orașului. Piața pitorească a orașului Steyr este unul dintre cele mai bine conservate ansambluri vechi ale orașului din țările de limbă germană. Steyr este adesea denumit \"orașul Christkindl\", deoarece aici se află oficiul poștal Christkindl.",
      "en": "Steyr is a historic city in Upper Austria, located at the confluence of the Enns and Steyr rivers. For centuries, it was the center of the Austrian iron industry, which brought great wealth to the city. The picturesque town square of Steyr is one of the best-preserved old town ensembles in the German-speaking world. In addition, Steyr is often referred to as the \"Christkindlstadt\" (Christ Child City), as the Christkindl post office is located here."
    },
    "facts": {
      "de": [
        "Steyr war ein wichtiger Standort für die Waffen- und Fahrzeugproduktion.",
        "Das Bummerlhaus am Stadtplatz ist ein Meisterwerk der Gotik.",
        "Schloss Lamberg thront majestätisch über dem Zusammenfluss von Enns und Steyr.",
        "Der Komponist Anton Bruckner verbrachte oft Zeit in Steyr.",
        "Das Postamt Christkindl beantwortet jährlich rund 2 Millionen Briefe von Kindern.",
        "Die Steyrer Altstadt besitzt über 100 historische Gebäude."
      ],
      "hu": [
        "Steyr fontos fegyver- és járműgyártó központ volt.",
        "A főtéren található Bummerlhaus a gótika egyik remekműve.",
        "A Lamberg-kastély fenségesen magasodik az Enns és a Steyr összefolyása fölé.",
        "Anton Bruckner zeneszerző gyakran töltött időt Steyrben.",
        "A Christkindl postahivatal évente mintegy 2 millió gyermeklevélre válaszol.",
        "A steyri óvárosban több mint 100 történelmi épület található."
      ],
      "ro": [
        "Steyr a fost o locație importantă pentru producția de arme și vehicule.",
        "Bummerlhaus din piața orașului este o capodoperă a arhitecturii gotice.",
        "Castelul Lamberg tronează maiestuos deasupra confluenței râurilor Enns și Steyr.",
        "Compozitorul Anton Bruckner petrecea adesea timp în Steyr.",
        "Oficiul poștal Christkindl răspunde la aproximativ 2 milioane de scrisori de la copii în fiecare an.",
        "Orașul vechi Steyr are peste 100 de clădiri istorice."
      ],
      "en": [
        "Steyr was an important location for weapon and vehicle production.",
        "The Bummerlhaus on the town square is a masterpiece of Gothic architecture.",
        "Lamberg Castle sits majestically above the confluence of the Enns and Steyr rivers.",
        "The composer Anton Bruckner often spent time in Steyr.",
        "The Christkindl post office answers around 2 million letters from children annually.",
        "The Steyr old town has over 100 historic buildings."
      ]
    },
  },
  {
    "id": "at-feldkirch",
    "type": "city",
    "parent": "AT-8",
    "coords": [
      9.5986,
      47.2375
    ],
    "name": {
      "de": "Feldkirch",
      "hu": "Feldkirch",
      "ro": "Feldkirch",
      "en": "Feldkirch"
    },
    "image": "/geo-images/austria/feldkirch.webp",
    "description": {
      "de": "Feldkirch ist die am weitesten westlich gelegene Gemeinde in Österreich und grenzt an Liechtenstein und die Schweiz. Die Stadt ist für ihre hervorragend erhaltene mittelalterliche Altstadt bekannt. Die Schattenburg dominiert das Stadtbild und war einst der Sitz der Grafen von Montfort. Feldkirch ist heute ein wichtiges Bildungs- und Kulturzentrum in Vorarlberg.",
      "hu": "Feldkirch Ausztria legnyugatibb fekvésű települése, Liechtenstein és Svájc határán fekszik. A város kiválóan fennmaradt középkori óvárosáról ismert. A Schattenburg uralja a városképet, és egykor a Montfort grófok székhelye volt. Feldkirch ma fontos oktatási és kulturális központ Vorarlbergben.",
      "ro": "Feldkirch este cea mai vestică municipalitate din Austria și se învecinează cu Liechtenstein și Elveția. Orașul este cunoscut pentru orașul său vechi medieval excelent conservat. Castelul Schattenburg domină peisajul urban și a fost cândva sediul conților de Montfort. Astăzi, Feldkirch este un important centru educațional și cultural din Vorarlberg.",
      "en": "Feldkirch is the westernmost municipality in Austria and borders Liechtenstein and Switzerland. The city is known for its excellently preserved medieval old town. The Schattenburg Castle dominates the cityscape and was once the seat of the Counts of Montfort. Today, Feldkirch is an important educational and cultural center in Vorarlberg."
    },
    "facts": {
      "de": [
        "Die Schattenburg ist eine der am besten erhaltenen Burgen Mitteleuropas.",
        "Feldkirch erhielt 1218 das Stadtrecht von Hugo I. von Montfort.",
        "Das Katzenturm genannte Bauwerk ist ein Teil der ehemaligen Stadtbefestigung.",
        "In Feldkirch findet jährlich das bekannte Poolbar-Festival statt.",
        "Der Schriftsteller James Joyce verbrachte einige Zeit in Feldkirch.",
        "Die Stadt liegt am Fluss Ill, kurz bevor dieser in den Rhein mündet."
      ],
      "hu": [
        "A Schattenburg Közép-Európa egyik legjobb állapotban fennmaradt vára.",
        "Feldkirch 1218-ban kapott városi rangot I. Hugo von Montforttól.",
        "A Macskatoronynak (Katzenturm) nevezett építmény a korábbi városfal része.",
        "Feldkirchben évente megrendezik az ismert Poolbar-Fesztivált.",
        "James Joyce író rövid időt töltött Feldkirchben.",
        "A város az Ill folyó partján fekszik, röviddel azelőtt, hogy a Rajnába ömlik."
      ],
      "ro": [
        "Castelul Schattenburg este unul dintre cele mai bine conservate castele din Europa Centrală.",
        "Feldkirch a primit drepturile de oraș în 1218 de la Hugo I de Montfort.",
        "Structura cunoscută sub numele de Katzenturm (Turnul Pisicilor) face parte din fostele fortificații ale orașului.",
        "Renumitul festival Poolbar are loc anual în Feldkirch.",
        "Scriitorul James Joyce a petrecut ceva timp la Feldkirch.",
        "Orașul este situat pe râul Ill, cu puțin timp înainte ca acesta să se verse în Rin."
      ],
      "en": [
        "Schattenburg Castle is one of the best-preserved castles in Central Europe.",
        "Feldkirch received city rights in 1218 from Hugo I of Montfort.",
        "The structure known as the Katzenturm (Cat Tower) is part of the former city fortifications.",
        "The renowned Poolbar Festival takes place annually in Feldkirch.",
        "The writer James Joyce spent some time in Feldkirch.",
        "The city is located on the river Ill, shortly before it flows into the Rhine."
      ]
    },
  },
  {
    "id": "at-leoben",
    "type": "city",
    "parent": "AT-6",
    "coords": [
      15.0942,
      47.38
    ],
    "name": {
      "de": "Leoben",
      "hu": "Leoben",
      "ro": "Leoben",
      "en": "Leoben"
    },
    "image": "/geo-images/austria/leoben.webp",
    "description": {
      "de": "Leoben ist die zweitgrößte Stadt in der Steiermark und liegt im Zentrum des österreichischen Bergbau- und Hüttenwesens. Die Montanuniversität Leoben prägt die Stadt maßgeblich und verleiht ihr ein junges, studentisches Flair. Leoben ist auch als Sitz der Gösser Brauerei bekannt, einem der traditionsreichsten Bierproduzenten Österreichs. Der mittelalterliche Hauptplatz zählt zu den schönsten in der Region.",
      "hu": "Leoben Stájerország második legnagyobb városa, és az osztrák bányászat és kohászat központjában fekszik. A Leobeni Bányászati Egyetem meghatározza a várost, és fiatalos, diákos hangulatot kölcsönöz neki. Leoben a Gösser sörgyár székhelyeként is ismert, amely Ausztria egyik legnagyobb múltú sörgyártója. A középkori főtér a régió egyik legszebbje.",
      "ro": "Leoben este al doilea oraș ca mărime din Stiria și este situat în centrul industriei miniere și metalurgice din Austria. Universitatea de Minerit din Leoben are o influență majoră asupra orașului, dându-i o atmosferă tânără, studențească. Leoben este cunoscut și ca sediul fabricii de bere Gösser, unul dintre cei mai tradiționali producători de bere din Austria. Piața principală medievală este una dintre cele mai frumoase din regiune.",
      "en": "Leoben is the second largest city in Styria and is located in the center of the Austrian mining and metallurgical industry. The University of Leoben has a major influence on the city, giving it a young, student atmosphere. Leoben is also known as the seat of the Gösser brewery, one of Austria's most traditional beer producers. The medieval main square is one of the most beautiful in the region."
    },
    "facts": {
      "de": [
        "Leoben ist das wirtschaftliche Zentrum der Obersteiermark.",
        "Die Montanuniversität Leoben wurde 1840 gegründet.",
        "Der Schwammerlturm ist das Wahrzeichen von Leoben und verdankt seinen Namen der pilzförmigen Haube.",
        "Das Stift Göss in Leoben ist das älteste Kloster der Steiermark.",
        "In Leoben wurde 1797 der Vorfrieden von Leoben zwischen Napoleon und Österreich geschlossen.",
        "Die Stadt liegt in einer Schleife der Mur."
      ],
      "hu": [
        "Leoben Felső-Stájerország gazdasági központja.",
        "A Leobeni Bányászati Egyetemet 1840-ben alapították.",
        "A Gombatorony (Schwammerlturm) Leoben jelképe, nevét gomba alakú tetőzetéről kapta.",
        "A leobeni Göss-apátság Stájerország legrégebbi kolostora.",
        "Leobenben kötötték meg a leobeni előzetes békét Napóleon és Ausztria között 1797-ben.",
        "A város a Mura folyó egy kanyarulatában fekszik."
      ],
      "ro": [
        "Leoben este centrul economic al Stiriei Superioare.",
        "Universitatea din Leoben a fost fondată în 1840.",
        "Turnul Schwammerlturm este simbolul orașului Leoben, numit astfel datorită acoperișului său în formă de ciupercă.",
        "Mănăstirea Göss din Leoben este cea mai veche mănăstire din Stiria.",
        "Tratatul preliminar de la Leoben a fost semnat între Napoleon și Austria aici în 1797.",
        "Orașul este situat într-o buclă a râului Mur."
      ],
      "en": [
        "Leoben is the economic center of Upper Styria.",
        "The Montanuniversität Leoben (University of Mining) was founded in 1840.",
        "The Schwammerlturm is the landmark of Leoben and owes its name to its mushroom-shaped dome.",
        "Göss Abbey in Leoben is the oldest monastery in Styria.",
        "The Preliminary Peace of Leoben was concluded here between Napoleon and Austria in 1797.",
        "The city is situated in a loop of the Mur river."
      ]
    },
  },
  {
    "id": "at-wolfsberg",
    "type": "city",
    "parent": "AT-2",
    "coords": [
      14.8333,
      46.8333
    ],
    "name": {
      "de": "Wolfsberg",
      "hu": "Wolfsberg",
      "ro": "Wolfsberg",
      "en": "Wolfsberg"
    },
    "image": "/geo-images/austria/wolfsberg.webp",
    "description": {
      "de": "Wolfsberg ist die drittgrößte Stadt Kärntens und das Zentrum des Lavanttals. Das Lavanttal, oft als das \"Paradies Kärntens\" bezeichnet, ist bekannt für seinen Obstbau und die sanfte Hügellandschaft. Hoch über der Stadt thront das prächtige Schloss Wolfsberg, das dem Ort ein markantes Profil verleiht. Wolfsberg hat eine charmante Altstadt mit gut erhaltenen Bürgerhäusern.",
      "hu": "Wolfsberg Karintia harmadik legnagyobb városa és a Lavanttal központja. A Lavanttal, amelyet gyakran \"Karintia paradicsomaként\" is emlegetnek, gyümölcstermesztéséről és szelíd dombvidékéről ismert. A város felett magasan trónol a pompás Wolfsberg-kastély, amely jellegzetes arculatot ad a településnek. Wolfsbergnek hangulatos óvárosa van, jó állapotban fennmaradt polgárházakkal.",
      "ro": "Wolfsberg este al treilea oraș ca mărime din Carintia și centrul văii Lavant. Valea Lavant, adesea numită „Paradisul Carintiei”, este cunoscută pentru pomicultura și peisajul său deluros și blând. Deasupra orașului se înalță magnificul Castel Wolfsberg, care conferă locului un profil izbitor. Wolfsberg are un oraș vechi fermecător cu case burgheze bine conservate.",
      "en": "Wolfsberg is the third largest city in Carinthia and the center of the Lavant Valley. The Lavant Valley, often referred to as the \"Paradise of Carinthia\", is known for its fruit growing and gentle hilly landscape. High above the city sits the magnificent Wolfsberg Castle, giving the town a striking profile. Wolfsberg has a charming old town with well-preserved townhouses."
    },
    "facts": {
      "de": [
        "Wolfsberg wurde 1178 erstmals urkundlich erwähnt.",
        "Schloss Wolfsberg wurde im 19. Jahrhundert im Tudor-Stil umgebaut.",
        "Die Stadt ist der wichtigste Wirtschaftsstandort im Lavanttal.",
        "Das Lavanttal ist berühmt für seinen Most und die Obstkultur.",
        "Die Koralpe östlich von Wolfsberg ist ein beliebtes Wander- und Skigebiet.",
        "Der Fluss Lavant fließt direkt durch das Stadtzentrum."
      ],
      "hu": [
        "Wolfsberget először 1178-ban említik írásos források.",
        "A Wolfsberg-kastélyt a 19. században Tudor-stílusban átépítették.",
        "A város a Lavanttal legfontosabb gazdasági központja.",
        "A Lavanttal híres a mustjáról és gyümölcskultúrájáról.",
        "A Wolfsbergtől keletre fekvő Koralpe kedvelt túra- és síterep.",
        "A Lavant folyó egyenesen a városközponton folyik keresztül."
      ],
      "ro": [
        "Wolfsberg a fost menționat pentru prima dată într-un document în 1178.",
        "Castelul Wolfsberg a fost reconstruit în secolul al XIX-lea în stil Tudor.",
        "Orașul este cea mai importantă locație economică din valea Lavant.",
        "Valea Lavant este renumită pentru cidrul său de mere și cultura fructelor.",
        "Muntele Koralpe de la est de Wolfsberg este o zonă populară pentru drumeții și schi.",
        "Râul Lavant curge direct prin centrul orașului."
      ],
      "en": [
        "Wolfsberg was first mentioned in a document in 1178.",
        "Wolfsberg Castle was rebuilt in the 19th century in the Tudor style.",
        "The city is the most important economic location in the Lavant Valley.",
        "The Lavant Valley is famous for its cider and fruit culture.",
        "The Koralpe mountain east of Wolfsberg is a popular hiking and skiing area.",
        "The river Lavant flows directly through the city center."
      ]
    },
  },
  {
    "id": "at-lienz",
    "type": "city",
    "parent": "AT-7",
    "coords": [
      12.76,
      46.8297
    ],
    "name": {
      "de": "Lienz",
      "hu": "Lienz",
      "ro": "Lienz",
      "en": "Lienz"
    },
    "image": "/geo-images/austria/lienz.webp",
    "description": {
      "de": "Lienz ist die Hauptstadt und das wirtschaftliche Zentrum von Osttirol. Sie liegt an der Einmündung der Isel in die Drau und wird auch die 'Sonnenstadt' genannt, weil sie mit über 2.000 Sonnenstunden pro Jahr glänzt. Vor der Kulisse der Lienzer Dolomiten bietet die Stadt ein unvergleichliches Alpenpanorama. Das Schloss Bruck, auf einem Hügel über der Stadt, beherbergt Kunstwerke des Osttiroler Malers Albin Egger-Lienz.",
      "hu": "Lienz Kelet-Tirol fővárosa és gazdasági központja. Az Isel és a Dráva összefolyásánál fekszik, és 'Napvárosnak' is nevezik, mivel évente több mint 2000 napsütéses órával büszkélkedhet. A Lienzi-Dolomitok kulisszája előtt a város páratlan alpesi panorámát kínál. A város feletti dombon álló Bruck kastély Albin Egger-Lienz kelet-tiroli festő műveinek ad otthont.",
      "ro": "Lienz este capitala și centrul economic al Tirolului de Est. Este situat la confluența râurilor Isel și Drava și este numit și „Orașul Soarelui” deoarece strălucește cu peste 2.000 de ore de soare pe an. Pe fundalul Dolomiților Lienz, orașul oferă o panoramă alpină incomparabilă. Castelul Bruck, situat pe un deal deasupra orașului, găzduiește lucrări de artă ale pictorului tirolez de est Albin Egger-Lienz.",
      "en": "Lienz is the capital and economic center of East Tyrol. It is located at the confluence of the Isel and Drava rivers and is also called the 'Sun City' because it boasts over 2,000 hours of sunshine per year. Against the backdrop of the Lienz Dolomites, the city offers an incomparable Alpine panorama. Bruck Castle, on a hill above the city, houses artworks by the East Tyrolean painter Albin Egger-Lienz."
    },
    "facts": {
      "de": [
        "Lienz ist die einzige Stadt in Osttirol.",
        "Die Stadt hat ein mediterran anmutendes Klima und viele Palmen im Zentrum.",
        "In der Nähe befindet sich die römische Ausgrabungsstätte Aguntum.",
        "Das Schloss Bruck wurde im 13. Jahrhundert von den Grafen von Görz erbaut.",
        "Lienz ist ein idealer Ausgangspunkt für Touren in den Nationalpark Hohe Tauern.",
        "Die Lienzer Dolomiten sind nicht geologisch mit den Südtiroler Dolomiten verwandt."
      ],
      "hu": [
        "Lienz az egyetlen város Kelet-Tirolban.",
        "A város mediterrán hangulatú klímával és sok pálmafával rendelkezik a központban.",
        "A közelben található az Aguntum nevű római kori ásatás.",
        "A Bruck kastélyt a 13. században építtették a görzi grófok.",
        "Lienz ideális kiindulópont a Magas-Tauern Nemzeti Parkba tett túrákhoz.",
        "A Lienzi-Dolomitok geológiailag nem rokonai a dél-tiroli Dolomitoknak."
      ],
      "ro": [
        "Lienz este singurul oraș din Tirolul de Est.",
        "Orașul are o climă de tip mediteranean și mulți palmieri în centru.",
        "În apropiere se află situl de excavare roman Aguntum.",
        "Castelul Bruck a fost construit în secolul al XIII-lea de conții de Gorizia.",
        "Lienz este un punct de plecare ideal pentru excursii în Parcul Național Hohe Tauern.",
        "Dolomiții din Lienz nu sunt înrudiți geologic cu Dolomiții din Tirolul de Sud."
      ],
      "en": [
        "Lienz is the only city in East Tyrol.",
        "The city has a Mediterranean-like climate and many palm trees in its center.",
        "Nearby is the Roman excavation site of Aguntum.",
        "Bruck Castle was built in the 13th century by the Counts of Gorizia.",
        "Lienz is an ideal starting point for tours into the Hohe Tauern National Park.",
        "The Lienz Dolomites are not geologically related to the South Tyrolean Dolomites."
      ]
    },
  },
  {
    "id": "at-zell-am-see",
    "type": "lake",
    "parent": "AT-5",
    "coords": [
      12.7929,
      47.3249
    ],
    "name": {
      "de": "Zell am See",
      "hu": "Zell am See",
      "ro": "Zell am See",
      "en": "Zell am See"
    },
    "image": "/geo-images/austria/zell-am-see.webp",
    "description": {
      "de": "Zell am See ist eine malerische Stadt im Salzburger Land, die am Ufer des Zeller Sees liegt. Die Kombination aus kristallklarem See, schneebedeckten Bergen und dem nahegelegenen Kitzsteinhorn-Gletscher macht den Ort ganzjährig zu einem beliebten Reiseziel. Im Winter zieht das Skigebiet Schmittenhöhe Wintersportler an, während im Sommer Schwimmen und Bootfahren im See locken. Die historische Altstadt lädt zum Flanieren und Genießen ein.",
      "hu": "Zell am See egy festői város Salzburg tartományban, a Zeller See (Zelli-tó) partján. A kristálytiszta tó, a hófedte hegyek és a közeli Kitzsteinhorn-gleccser kombinációja egész évben népszerű utazási célponttá teszi. Télen a Schmittenhöhe síterep vonzza a téli sportok szerelmeseit, míg nyáron a tóban való úszás és csónakázás csábít. A történelmi óváros sétára és kikapcsolódásra hívogat.",
      "ro": "Zell am See este un oraș pitoresc din statul Salzburg, situat pe malul lacului Zell. Combinația dintre lacul limpede, munții acoperiți de zăpadă și ghețarul din apropiere Kitzsteinhorn face din acest loc o destinație populară pe tot parcursul anului. Iarna, zona de schi Schmittenhöhe atrage iubitorii sporturilor de iarnă, în timp ce vara înotul și plimbările cu barca pe lac sunt atracțiile principale. Orașul istoric vechi vă invită la plimbare și relaxare.",
      "en": "Zell am See is a picturesque town in the state of Salzburg, located on the shores of Lake Zell. The combination of the crystal-clear lake, snow-capped mountains and the nearby Kitzsteinhorn glacier makes the place a popular travel destination year-round. In winter, the Schmittenhöhe ski area attracts winter sports enthusiasts, while in summer, swimming and boating in the lake are the main draws. The historic old town invites you to stroll and relax."
    },
    "facts": {
      "de": [
        "Der Zeller See hat Trinkwasserqualität.",
        "Zell am See und Kaprun bilden zusammen eine der wichtigsten Tourismusregionen Österreichs.",
        "Die Schmittenhöhe gilt als Österreichs schönster Aussichtsberg.",
        "Der Ort wurde bereits in der Bronzezeit besiedelt.",
        "Im Sommer finden regelmäßig eindrucksvolle Wasserspiele am See statt.",
        "Zell am See hat einen eigenen kleinen Flugplatz für Segel- und Motorflieger."
      ],
      "hu": [
        "A Zeller See vize ivóvíz minőségű.",
        "Zell am See és Kaprun együtt Ausztria egyik legfontosabb turisztikai régióját alkotja.",
        "A Schmittenhöhe-t tartják Ausztria legszebb kilátóhegyének.",
        "A település már a bronzkorban is lakott volt.",
        "Nyáron rendszeresen látványos fényjátékos szökőkút-műsorokat tartanak a tavon.",
        "Zell am See saját kis repülőtérrel rendelkezik vitorlázó- és motoros repülők számára."
      ],
      "ro": [
        "Lacul Zell are calitatea apei potabile.",
        "Zell am See și Kaprun formează împreună una dintre cele mai importante regiuni turistice din Austria.",
        "Schmittenhöhe este considerat cel mai frumos munte de panoramă din Austria.",
        "Așezarea a fost locuită încă din Epoca Bronzului.",
        "Vara au loc în mod regulat spectacole impresionante cu apă pe lac.",
        "Zell am See are propriul său mic aerodrom pentru planoare și avioane cu motor."
      ],
      "en": [
        "Lake Zell has drinking water quality.",
        "Zell am See and Kaprun together form one of Austria's most important tourism regions.",
        "The Schmittenhöhe is considered Austria's most beautiful panoramic mountain.",
        "The settlement was inhabited as early as the Bronze Age.",
        "In summer, impressive water shows take place regularly on the lake.",
        "Zell am See has its own small airfield for gliders and motorized aircraft."
      ]
    },
  },
  {
    "id": "at-worthersee",
    "type": "lake",
    "parent": "AT-2",
    "coords": [
      14.15,
      46.6167
    ],
    "name": {
      "de": "Wörthersee",
      "hu": "Wörthersee",
      "ro": "Wörthersee",
      "en": "Lake Wörthersee"
    },
    "image": "/geo-images/austria/worthersee.webp",
    "description": {
      "de": "Der Wörthersee ist der größte und wohl bekannteste See Kärntens. Wegen seines türkisblauen, im Sommer angenehm warmen Wassers ist er ein Magnet für Badegäste und Prominenz. Die Architektur am Ufer wird durch die charakteristische Wörthersee-Architektur des 19. Jahrhunderts geprägt. Orte wie Velden, Pörtschach und Maria Wörth liegen direkt am See und sind berühmt für ihr mondänes Flair.",
      "hu": "A Wörthersee (Wörthi-tó) Karintia legnagyobb és legismertebb tava. Türkizkék, nyáron kellemesen meleg vizének köszönhetően mágnesként vonzza a fürdőzőket és a hírességeket. A part menti építészetet a 19. századi jellegzetes Wörthersee-i építészet határozza meg. Olyan települések, mint Velden, Pörtschach és Maria Wörth közvetlenül a tó partján fekszenek, és híresek elegáns hangulatukról.",
      "ro": "Lacul Wörthersee este cel mai mare și probabil cel mai faimos lac din Carintia. Datorită apei sale de un albastru turcoaz, care este plăcut de caldă vara, este un magnet pentru înotători și celebrități. Arhitectura de pe mal este caracterizată de arhitectura specifică Wörthersee din secolul al XIX-lea. Locuri precum Velden, Pörtschach și Maria Wörth sunt situate direct pe lac și sunt renumite pentru aerul lor sofisticat.",
      "en": "Lake Wörthersee is the largest and arguably the most famous lake in Carinthia. Because of its turquoise-blue water, which is pleasantly warm in summer, it is a magnet for bathers and celebrities. The architecture on the shore is characterized by the distinctive Wörthersee architecture of the 19th century. Places like Velden, Pörtschach, and Maria Wörth are situated directly on the lake and are famous for their sophisticated flair."
    },
    "facts": {
      "de": [
        "Der Wörthersee kann im Sommer Wassertemperaturen bis zu 27 Grad Celsius erreichen.",
        "Er ist fast 17 Kilometer lang und bis zu 1,6 Kilometer breit.",
        "Das Schlosshotel Velden ist ein bekanntes Luxushotel am Westufer.",
        "In Maria Wörth befindet sich eine malerische Wallfahrtskirche auf einer Halbinsel.",
        "Jährlich findet am Wörthersee das größte GTI-Treffen Europas statt (bis 2022).",
        "Die Wörthersee-Schifffahrt hat eine lange Tradition und verbindet die Uferorte."
      ],
      "hu": [
        "A Wörthersee vízhőmérséklete nyáron elérheti a 27 Celsius-fokot is.",
        "Majdnem 17 kilométer hosszú és akár 1,6 kilométer széles is lehet.",
        "A veldeni Schlosshotel egy ismert luxusszálloda a nyugati parton.",
        "Maria Wörth egy festői zarándoktemplomnak ad otthont egy félszigeten.",
        "Évente a Wörtherseenél tartották Európa legnagyobb GTI találkozóját (2022-ig).",
        "A wörtherseei hajózás hosszú hagyományokkal rendelkezik, és összeköti a parti településeket."
      ],
      "ro": [
        "Lacul Wörthersee poate atinge temperaturi ale apei de până la 27 de grade Celsius vara.",
        "Are aproape 17 kilometri lungime și până la 1,6 kilometri lățime.",
        "Schlosshotel Velden este un hotel de lux bine-cunoscut pe malul de vest.",
        "În Maria Wörth există o biserică pitorească de pelerinaj pe o peninsulă.",
        "Cea mai mare întâlnire GTI din Europa a avut loc anual la Wörthersee (până în 2022).",
        "Navigația pe Wörthersee are o tradiție lungă și leagă orașele de coastă."
      ],
      "en": [
        "Lake Wörthersee can reach water temperatures of up to 27 degrees Celsius in summer.",
        "It is almost 17 kilometers long and up to 1.6 kilometers wide.",
        "The Schlosshotel Velden is a well-known luxury hotel on the western shore.",
        "In Maria Wörth, there is a picturesque pilgrimage church on a peninsula.",
        "The largest GTI meeting in Europe took place annually at Lake Wörthersee (until 2022).",
        "Wörthersee passenger shipping has a long tradition and connects the coastal towns."
      ]
    },
  },
  {
    "id": "at-kitzsteinhorn",
    "type": "mountain",
    "parent": "AT-5",
    "coords": [
      12.687,
      47.1886
    ],
    "name": {
      "de": "Kitzsteinhorn",
      "hu": "Kitzsteinhorn",
      "ro": "Kitzsteinhorn",
      "en": "Kitzsteinhorn"
    },
    "image": "/geo-images/austria/kitzsteinhorn.webp",
    "description": {
      "de": "Das Kitzsteinhorn ist ein Berg in den Hohen Tauern und beherbergt das erste Gletscherskigebiet Österreichs. Mit der Seilbahn gelangt man auf über 3.000 Meter Höhe zur Gipfelwelt 3000, wo man einen spektakulären Blick auf den Nationalpark Hohe Tauern hat. Selbst im Sommer liegt hier Schnee, was das Gebiet zu einem einzigartigen Erlebnis macht. Das Kitzsteinhorn gilt als Mythos und bietet erstklassige Wintersportbedingungen fast das ganze Jahr über.",
      "hu": "A Kitzsteinhorn a Magas-Tauern egy hegye, és itt található Ausztria első gleccserek síterepe. A felvonóval több mint 3000 méteres magasságba lehet eljutni a Gipfelwelt 3000 (Csúcsvilág 3000) kilátóhoz, ahonnan látványos kilátás nyílik a Magas-Tauern Nemzeti Parkra. Itt még nyáron is van hó, ami egyedülálló élménnyé teszi a területet. A Kitzsteinhorn legendás hegynek számít, és szinte egész évben első osztályú téli sportolási feltételeket kínál.",
      "ro": "Kitzsteinhorn este un munte din Hohe Tauern și găzduiește prima zonă de schi pe ghețar din Austria. Telecabina vă duce la peste 3.000 de metri altitudine până la Gipfelwelt 3000, unde aveți o vedere spectaculoasă asupra Parcului Național Hohe Tauern. Chiar și vara este zăpadă aici, ceea ce face din zonă o experiență unică. Kitzsteinhorn este considerat un mit și oferă condiții de primă clasă pentru sporturile de iarnă aproape tot timpul anului.",
      "en": "The Kitzsteinhorn is a mountain in the Hohe Tauern and is home to Austria's first glacier ski area. The cable car takes you to an altitude of over 3,000 meters to the Gipfelwelt 3000, where you have a spectacular view of the Hohe Tauern National Park. Even in summer, there is snow here, making the area a unique experience. The Kitzsteinhorn is considered a myth and offers first-class winter sports conditions almost all year round."
    },
    "facts": {
      "de": [
        "Der Gipfel des Kitzsteinhorns liegt auf 3.203 Metern Höhe.",
        "Die Gipfelwelt 3000 ist der höchste für jedermann bequem erreichbare Punkt im Salzburger Land.",
        "Der Gletscher ermöglicht fast ganzjährigen Skibetrieb.",
        "Ein 360 Meter langer Stollen führt zur Panoramaplattform Nationalpark Gallery.",
        "1965 wurde die erste Seilbahn auf das Kitzsteinhorn eröffnet.",
        "Das Ice Camp am Kitzsteinhorn bietet Iglus aus Eis und Schnee."
      ],
      "hu": [
        "A Kitzsteinhorn csúcsa 3203 méter magas.",
        "A Gipfelwelt 3000 Salzburg tartomány legmagasabb, bárki számára könnyen megközelíthető pontja.",
        "A gleccser szinte egész évben lehetővé teszi a síelést.",
        "Egy 360 méter hosszú alagút vezet a Nationalpark Gallery panorámaplatformhoz.",
        "1965-ben nyílt meg az első felvonó a Kitzsteinhornra.",
        "A Kitzsteinhornon található Ice Camp jégből és hóból készült iglukat kínál."
      ],
      "ro": [
        "Vârful Kitzsteinhorn se află la o altitudine de 3.203 metri.",
        "Gipfelwelt 3000 este cel mai înalt punct din regiunea Salzburg ușor accesibil pentru oricine.",
        "Ghețarul permite practicarea schiului aproape tot anul.",
        "Un tunel lung de 360 de metri duce la platforma panoramică Nationalpark Gallery.",
        "În 1965 a fost deschisă prima telecabină spre Kitzsteinhorn.",
        "Ice Camp de pe Kitzsteinhorn oferă igluuri din gheață și zăpadă."
      ],
      "en": [
        "The summit of the Kitzsteinhorn is at an altitude of 3,203 meters.",
        "Gipfelwelt 3000 is the highest point in the Salzburg region easily accessible to everyone.",
        "The glacier allows almost year-round skiing.",
        "A 360-meter-long tunnel leads to the Nationalpark Gallery panorama platform.",
        "In 1965, the first cable car to the Kitzsteinhorn was opened.",
        "The Ice Camp on the Kitzsteinhorn offers igloos made of ice and snow."
      ]
    },
  },
  {
    "id": "at-nockberge",
    "type": "mountain",
    "parent": "AT-2",
    "coords": [
      13.95,
      46.8833
    ],
    "name": {
      "de": "Biosphärenpark Nockberge",
      "hu": "Nockberge Bioszférapark",
      "ro": "Parcul Biosferei Nockberge",
      "en": "Nockberge Biosphere Reserve"
    },
    "image": "/geo-images/austria/nockberge.webp",
    "description": {
      "de": "Der Biosphärenpark Nockberge in Kärnten ist bekannt für seine sanften, runden Kuppen (Nocken), die sich von den schroffen Gipfeln anderer Alpenregionen deutlich abheben. Er bietet ein einzigartiges Naturerlebnis mit seltenen Pflanzen und Tieren sowie weiten Almen. Die Nockalmstraße ist eine der schönsten Panoramastraßen Österreichs und windet sich durch diese herrliche Bergwelt. Die Region ist ideal für entspannte Wanderungen und Naturbeobachtungen.",
      "hu": "A karintiai Nockberge Bioszférapark ismert szelíd, kerekded hegyhátairól (Nocken), amelyek élesen elütnek más alpesi régiók zord csúcsaitól. Egyedülálló természeti élményt kínál ritka növény- és állatvilágával, valamint tágas alpesi legelőivel. A Nockalmstraße Ausztria egyik legszebb panorámaútja, amely ezen a csodálatos hegyvidéken kanyarog keresztül. A régió ideális pihentető túrákhoz és természetmegfigyeléshez.",
      "ro": "Parcul Biosferei Nockberge din Carintia este cunoscut pentru culmile sale blânde și rotunde (Nocken), care contrastează puternic cu vârfurile accidentate din alte regiuni alpine. Oferă o experiență unică a naturii cu plante și animale rare, precum și pășuni alpine vaste. Nockalmstraße este unul dintre cele mai frumoase drumuri panoramice din Austria, șerpuind prin acest magnific peisaj montan. Regiunea este ideală pentru drumeții relaxante și observarea naturii.",
      "en": "The Nockberge Biosphere Reserve in Carinthia is known for its gentle, rounded mountain tops (Nocken), which contrast sharply with the rugged peaks of other Alpine regions. It offers a unique nature experience with rare plants and animals as well as vast Alpine pastures. The Nockalm Road is one of the most beautiful panoramic roads in Austria, winding through this magnificent mountain landscape. The region is ideal for relaxing hikes and nature observation."
    },
    "facts": {
      "de": [
        "Die Nockberge bestehen vorwiegend aus Schiefergestein, was ihre runde Form erklärt.",
        "Die Nockalmstraße ist 34 Kilometer lang und hat 52 Kehren.",
        "Der Park ist seit 2012 als UNESCO-Biosphärenpark anerkannt.",
        "In den Nockbergen wächst der Speik, eine stark duftende Baldrianart.",
        "Thermalquellen in der Region wie in Bad Kleinkirchheim sind seit Jahrhunderten beliebt.",
        "Das Karlbad ist das älteste Bauernbad Österreichs und liegt in den Nockbergen."
      ],
      "hu": [
        "A Nockberge főleg palakőzetből áll, ami megmagyarázza a hegyek kerekded formáját.",
        "A Nockalmstraße 34 kilométer hosszú és 52 hajtűkanyarral rendelkezik.",
        "A park 2012 óta UNESCO Bioszféraparkként van elismerve.",
        "A Nockbergében terem a speik, egy erősen illatozó macskagyökérféle.",
        "A régió hőforrásai, mint a Bad Kleinkirchheim-iek, évszázadok óta népszerűek.",
        "A Karlbad Ausztria legrégebbi parasztfürdője, amely a Nockbergében található."
      ],
      "ro": [
        "Munții Nockberge constau în principal din roci de șist, ceea ce explică forma lor rotundă.",
        "Drumul Nockalm are o lungime de 34 de kilometri și are 52 de curbe în ac de păr.",
        "Parcul a fost recunoscut ca o rezervație a biosferei UNESCO din 2012.",
        "Valeriana celtică (Speik), cu un miros puternic, crește în Nockberge.",
        "Izvoarele termale din regiune, precum cele din Bad Kleinkirchheim, sunt populare de secole.",
        "Karlbad este cel mai vechi spa tradițional din Austria și se află în Nockberge."
      ],
      "en": [
        "The Nockberge consist mainly of slate rock, which explains their round shape.",
        "The Nockalm Road is 34 kilometers long and has 52 hairpin bends.",
        "The park has been recognized as a UNESCO Biosphere Reserve since 2012.",
        "Valeriana celtica (Speik), a strongly scented valerian plant, grows in the Nockberge.",
        "Thermal springs in the region, such as those in Bad Kleinkirchheim, have been popular for centuries.",
        "The Karlbad is the oldest traditional spa in Austria and is located in the Nockberge."
      ]
    },
  },
  {
    "id": "at-kalkalpen-np",
    "type": "mountain",
    "parent": "AT-4",
    "coords": [
      14.3,
      47.8
    ],
    "name": {
      "de": "Nationalpark Kalkalpen",
      "hu": "Kalkalpen Nemzeti Park",
      "ro": "Parcul Național Kalkalpen",
      "en": "Kalkalpen National Park"
    },
    "image": "/geo-images/austria/kalkalpen-np.webp",
    "description": {
      "de": "Der Nationalpark Kalkalpen in Oberösterreich schützt das größte zusammenhängende Waldgebiet Österreichs. Er besticht durch tiefe Schluchten, unberührte Gebirgsbäche und ausgedehnte Buchenwälder, die zum UNESCO-Weltnaturerbe zählen. Das Gebiet ist ein Rückzugsort für seltene Tierarten wie den Luchs. Wanderer und Radfahrer finden hier ein riesiges Wegenetz in einer der wildesten Landschaften der Alpen.",
      "hu": "A felső-ausztriai Kalkalpen (Mészkő-Alpok) Nemzeti Park Ausztria legnagyobb egybefüggő erdőterületét védi. Lenyűgöző mély szurdokaival, érintetlen hegyi patakjaival és hatalmas bükkerdeivel, amelyek az UNESCO Természeti Világörökség részét képezik. A terület olyan ritka állatfajok menedéke, mint például az eurázsiai hiúz. A túrázók és kerékpárosok hatalmas úthálózatot találnak itt az Alpok egyik legvadabb táján.",
      "ro": "Parcul Național Kalkalpen din Austria Superioară protejează cea mai mare zonă forestieră contiguă din Austria. Impresionează cu defileele adânci, pâraiele de munte virgine și pădurile extinse de fagi care fac parte din Patrimoniul Natural Mondial UNESCO. Zona este un refugiu pentru specii de animale rare, precum râsul. Drumeții și bicicliștii vor găsi aici o rețea imensă de trasee în unul dintre cele mai sălbatice peisaje din Alpi.",
      "en": "The Kalkalpen National Park in Upper Austria protects the largest contiguous forest area in Austria. It impresses with its deep gorges, pristine mountain streams, and extensive beech forests, which are part of the UNESCO World Natural Heritage. The area is a refuge for rare animal species such as the lynx. Hikers and cyclists will find a huge network of trails here in one of the wildest landscapes of the Alps."
    },
    "facts": {
      "de": [
        "Der Nationalpark umfasst das Sengsengebirge und das Reichraminger Hintergebirge.",
        "Vier Fünftel der Nationalparkfläche sind von Wald bedeckt.",
        "Die Buchenwälder im Park gehören zum UNESCO-Welterbe der alten Buchenwälder.",
        "Im Park leben über 30 Säugetierarten und rund 80 Brutvogelarten.",
        "Der Luchs ist seit Ende der 1990er Jahre hier wieder heimisch.",
        "Das Nationalparkzentrum befindet sich in Molln."
      ],
      "hu": [
        "A nemzeti park magában foglalja a Sengsen-hegységet és a Reichramingi Hintergebirgét.",
        "A nemzeti park területének négyötödét erdő borítja.",
        "A park bükkerdei az ősbükkösök UNESCO Világörökségének részei.",
        "A parkban több mint 30 emlősfaj és mintegy 80 költő madárfaj él.",
        "A hiúz az 1990-es évek vége óta ismét honos itt.",
        "A Nemzeti Park Látogatóközpontja Mollnban található."
      ],
      "ro": [
        "Parcul național include Munții Sengsen și Reichraminger Hintergebirge.",
        "Patru cincimi din suprafața parcului național sunt acoperite de păduri.",
        "Pădurile de fag din parc fac parte din Patrimoniul Mondial UNESCO al pădurilor primare de fag.",
        "Peste 30 de specii de mamifere și aproximativ 80 de specii de păsări cuibăritoare trăiesc în parc.",
        "Râsul a devenit din nou o specie nativă aici de la sfârșitul anilor 1990.",
        "Centrul parcului național este situat în Molln."
      ],
      "en": [
        "The national park includes the Sengsen Mountains and the Reichraminger Hintergebirge.",
        "Four-fifths of the national park area is covered by forest.",
        "The beech forests in the park belong to the UNESCO World Heritage of primeval beech forests.",
        "Over 30 mammal species and about 80 breeding bird species live in the park.",
        "The lynx has been native here again since the late 1990s.",
        "The national park center is located in Molln."
      ]
    },
  },
  {
    "id": "at-gesauze",
    "type": "mountain",
    "parent": "AT-6",
    "coords": [
      14.65,
      47.5833
    ],
    "name": {
      "de": "Nationalpark Gesäuse",
      "hu": "Gesäuse Nemzeti Park",
      "ro": "Parcul Național Gesäuse",
      "en": "Gesäuse National Park"
    },
    "image": "/geo-images/austria/gesauze.webp",
    "description": {
      "de": "Das Gesäuse in der Steiermark ist bekannt für seine schroffen Kalkgipfel, die steil über dem tosenden Fluss Enns aufragen. Der Nationalpark Gesäuse schützt dieses einzigartige Durchbruchstal, das bei Wildwassersportlern und Kletterern gleichermaßen beliebt ist. Das Motto des Parks lautet 'Wildes Wasser, steiler Fels', was die Landschaft perfekt beschreibt. Es ist der jüngste und drittgrößte Nationalpark Österreichs.",
      "hu": "A stájerországi Gesäuse vad mészkőcsúcsairól ismert, amelyek meredeken emelkednek a dübörgő Enns folyó fölé. A Gesäuse Nemzeti Park ezt az egyedülálló áttöréses völgyet védi, amely egyaránt népszerű a vadvízi evezősök és a sziklamászók körében. A park mottója: 'Vad víz, meredek szikla', ami tökéletesen leírja a tájat. Ez Ausztria legfiatalabb és harmadik legnagyobb nemzeti parkja.",
      "ro": "Gesäuse din Stiria este cunoscut pentru vârfurile sale abrupte de calcar care se ridică deasupra râului tumultuos Enns. Parcul Național Gesäuse protejează această vale unică, care este populară în rândul pasionaților de sporturi de apă albă și alpiniștilor deopotrivă. Deviza parcului este „Apă sălbatică, stâncă abruptă”, care descrie perfect peisajul. Este cel mai tânăr și al treilea cel mai mare parc național din Austria.",
      "en": "The Gesäuse in Styria is known for its rugged limestone peaks rising steeply above the roaring Enns river. The Gesäuse National Park protects this unique gorge valley, which is popular with whitewater sports enthusiasts and rock climbers alike. The park's motto is 'Wild water, steep rock', which perfectly describes the landscape. It is the youngest and third largest national park in Austria."
    },
    "facts": {
      "de": [
        "Der Name 'Gesäuse' stammt vom lauten Rauschen (Sausen) des Flusses Enns.",
        "Der Nationalpark wurde im Jahr 2002 gegründet.",
        "Die Hochtor-Gruppe bildet mit über 2.300 Metern die höchsten Erhebungen im Park.",
        "Das Gesäuse gilt als eine der Wiegen des alpinen Klettersports.",
        "Der Park weist eine der höchsten Endemiten-Dichten in den Alpen auf (nur hier vorkommende Arten).",
        "Der Weidendom ist das lebende Besucherzentrum des Nationalparks."
      ],
      "hu": [
        "A 'Gesäuse' név az Enns folyó hangos zúgásából (Sausen) származik.",
        "A nemzeti parkot 2002-ben alapították.",
        "A Hochtor-csoport alkotja a park legmagasabb pontjait, több mint 2300 méterrel.",
        "A Gesäuse az alpesi sziklamászás egyik bölcsőjének számít.",
        "A park az Alpok egyik legnagyobb endemikus fajok sűrűségével rendelkezik (csak itt előforduló fajok).",
        "A Fűzfakupola (Weidendom) a nemzeti park élő látogatóközpontja."
      ],
      "ro": [
        "Numele „Gesäuse” provine de la vuietul puternic (Sausen) al râului Enns.",
        "Parcul național a fost înființat în 2002.",
        "Grupul Hochtor formează cele mai înalte vârfuri din parc la peste 2.300 de metri.",
        "Gesäuse este considerat unul dintre leagănele alpinismului.",
        "Parcul are una dintre cele mai mari densități de specii endemice din Alpi (specii care apar doar aici).",
        "Domul de Salcie (Weidendom) este centrul viu al vizitatorilor parcului național."
      ],
      "en": [
        "The name 'Gesäuse' comes from the loud roaring (Sausen) of the Enns river.",
        "The national park was founded in 2002.",
        "The Hochtor group forms the highest elevations in the park at over 2,300 meters.",
        "The Gesäuse is considered one of the cradles of Alpine rock climbing.",
        "The park has one of the highest densities of endemics in the Alps (species found only here).",
        "The Willow Dome (Weidendom) is the living visitor center of the national park."
      ]
    },
  },
  {
    "id": "at-thayatal-np",
    "type": "landmark",
    "parent": "AT-3",
    "coords": [
      15.8833,
      48.8333
    ],
    "name": {
      "de": "Nationalpark Thayatal",
      "hu": "Thayatal Nemzeti Park",
      "ro": "Parcul Național Thayatal",
      "en": "Thayatal National Park"
    },
    "image": "/geo-images/austria/thayatal-np.webp",
    "description": {
      "de": "Der Nationalpark Thayatal in Niederösterreich ist der kleinste Nationalpark Österreichs und grenzt an den tschechischen Národní park Podyjí. Er schützt das malerische, tief eingeschnittene Tal der Thaya, das mit seiner unglaublichen Artenvielfalt begeistert. Die Landschaft zeichnet sich durch dichte Wälder, steile Felswände und bunte Wiesen aus. Die Ruine Kaja im Park ist ein eindrucksvolles Zeugnis des Mittelalters.",
      "hu": "Az alsó-ausztriai Thayatal Nemzeti Park Ausztria legkisebb nemzeti parkja, és a cseh Národní park Podyjí-vel határos. A Thaya folyó festői, mélyen bevágott völgyét védi, amely hihetetlen fajgazdagságával varázsolja el a látogatókat. A tájat sűrű erdők, meredek sziklafalak és színes rétek jellemzik. A parkban található Kaja várrom a középkor lenyűgöző emléke.",
      "ro": "Parcul Național Thayatal din Austria Inferioară este cel mai mic parc național din Austria și se învecinează cu Parcul Național Podyjí din Cehia. Protejează valea pitorească și adâncă a râului Thaya, care impresionează prin biodiversitatea sa incredibilă. Peisajul este caracterizat de păduri dense, stânci abrupte și pajiști colorate. Ruinele castelului Kaja din parc sunt o mărturie impresionantă a Evului Mediu.",
      "en": "The Thayatal National Park in Lower Austria is the smallest national park in Austria and borders the Czech Národní park Podyjí. It protects the picturesque, deeply cut valley of the Thaya river, which impresses with its incredible biodiversity. The landscape is characterized by dense forests, steep rock faces and colorful meadows. The Kaja castle ruins in the park are an impressive testament to the Middle Ages."
    },
    "facts": {
      "de": [
        "Der Nationalpark Thayatal ist mit rund 1.330 Hektar der kleinste in Österreich.",
        "Das Thayatal ist ein klassisches Durchbruchstal mit vielen Flussschleifen.",
        "Im Park leben sehr seltene Wildkatzen, die als heimliche Jäger gelten.",
        "Die Smaragdeidechse ist eines der markantesten Tiere in der Region.",
        "Die Grenze zwischen Österreich und Tschechien verläuft oft direkt in der Mitte der Thaya.",
        "Der Park wurde im Jahr 2000 feierlich eröffnet."
      ],
      "hu": [
        "A Thayatal Nemzeti Park a maga mintegy 1330 hektárjával a legkisebb Ausztriában.",
        "A Thayatal egy klasszikus áttöréses völgy sok folyókanyarulattal.",
        "A parkban nagyon ritka vadmacskák élnek, amelyeket rejtőzködő vadászoknak tartanak.",
        "A zöld gyík az egyik legjellegzetesebb állat a régióban.",
        "Ausztria és Csehország határa gyakran közvetlenül a Thaya közepén húzódik.",
        "A parkot 2000-ben nyitották meg ünnepélyesen."
      ],
      "ro": [
        "Cu o suprafață de aproximativ 1.330 de hectare, Parcul Național Thayatal este cel mai mic din Austria.",
        "Valea Thaya este o vale de defileu clasică cu multe coturi de râu.",
        "Pisicile sălbatice foarte rare, considerate vânători ascunși, trăiesc în parc.",
        "Șopârla de smarald este unul dintre cele mai distinctive animale din regiune.",
        "Granița dintre Austria și Cehia se află adesea direct în mijlocul râului Thaya.",
        "Parcul a fost deschis oficial în anul 2000."
      ],
      "en": [
        "At around 1,330 hectares, the Thayatal National Park is the smallest in Austria.",
        "The Thaya Valley is a classic gorge valley with many river meanders.",
        "Very rare wildcats, considered elusive hunters, live in the park.",
        "The emerald lizard is one of the most distinctive animals in the region.",
        "The border between Austria and the Czech Republic often runs directly down the middle of the Thaya.",
        "The park was officially opened in the year 2000."
      ]
    },
  },
  {
    "id": "at-oetztal",
    "type": "mountain",
    "parent": "AT-7",
    "coords": [
      10.9,
      47
    ],
    "name": {
      "de": "Ötztal",
      "hu": "Ötztal",
      "ro": "Valea Ötz",
      "en": "Ötztal"
    },
    "image": "/geo-images/austria/oetztal.webp",
    "description": {
      "de": "Das Ötztal in Tirol ist das längste Seitental des Inntals und umgeben von majestätischen Dreitausendern. Bekannt ist das Tal für seine erstklassigen Wintersportorte wie Sölden und Obergurgl. Im Sommer ist das Ötztal ein Paradies für Wanderer, Kletterer und Mountainbiker. Berühmtheit erlangte das Tal 1991 durch den Fund der Gletschermumie 'Ötzi' am Tisenjoch.",
      "hu": "A tiroli Ötztal az Inn völgyének leghosszabb mellékvölgye, fenséges háromezres hegyekkel körülvéve. A völgy olyan első osztályú téli sportközpontjairól ismert, mint Sölden és Obergurgl. Nyáron az Ötztal a túrázók, hegymászók és hegyikerékpárosok paradicsoma. A völgy 1991-ben szerzett hírnevet, amikor a Tisenjochon megtalálták az 'Ötzi' nevű gleccsermúmiát.",
      "ro": "Valea Ötz (Ötztal) din Tirol este cea mai lungă vale laterală a văii Innului și este înconjurată de munți maiestuoși de 3.000 de metri. Valea este cunoscută pentru stațiunile sale de sporturi de iarnă de primă clasă, precum Sölden și Obergurgl. Vara, Ötztal este un paradis pentru drumeții, alpiniști și cicliștii de munte. Valea a câștigat faimă în 1991, odată cu descoperirea mumiei de pe ghețar „Ötzi” la Tisenjoch.",
      "en": "The Ötztal in Tyrol is the longest side valley of the Inn Valley and is surrounded by majestic 3,000-meter peaks. The valley is known for its first-class winter sports resorts such as Sölden and Obergurgl. In summer, the Ötztal is a paradise for hikers, climbers, and mountain bikers. The valley gained fame in 1991 with the discovery of the glacier mummy 'Ötzi' at the Tisenjoch."
    },
    "facts": {
      "de": [
        "Das Ötztal ist rund 65 Kilometer lang.",
        "Der Stuibenfall im Ötztal ist mit 159 Metern der höchste Wasserfall Tirols.",
        "Der Fundort der Gletschermumie Ötzi liegt knapp an der Grenze zu Italien.",
        "Die Ötztaler Gletscherstraße ist eine der höchsten asphaltierten Straßen der Alpen.",
        "Sölden ist einer der bekanntesten und größten Wintersportorte Europas.",
        "Der höchste Berg Tirols, die Wildspitze (3.768 m), liegt in den Ötztaler Alpen."
      ],
      "hu": [
        "Az Ötztal mintegy 65 kilométer hosszú.",
        "Az Ötztalban található Stuibenfall 159 méterével Tirol legmagasabb vízesése.",
        "Ötzi, a gleccsermúmia megtalálásának helye közvetlenül az olasz határ közelében található.",
        "Az Ötztaler Gletscherstraße az Alpok egyik legmagasabban fekvő aszfaltozott útja.",
        "Sölden Európa egyik legismertebb és legnagyobb téli sportközpontja.",
        "Tirol legmagasabb hegye, a Wildspitze (3768 m) az Ötztal-Alpokban található."
      ],
      "ro": [
        "Valea Ötztal are aproximativ 65 de kilometri lungime.",
        "Cascada Stuibenfall din Ötztal este cea mai înaltă cascadă din Tirol, cu o înălțime de 159 de metri.",
        "Locul descoperirii mumiei de gheață Ötzi se află chiar la granița cu Italia.",
        "Ötztaler Gletscherstraße este unul dintre cele mai înalte drumuri asfaltate din Alpi.",
        "Sölden este una dintre cele mai cunoscute și mai mari stațiuni de sporturi de iarnă din Europa.",
        "Cel mai înalt munte din Tirol, Wildspitze (3.768 m), este situat în Alpii Ötztal."
      ],
      "en": [
        "The Ötztal is about 65 kilometers long.",
        "The Stuibenfall waterfall in the Ötztal is the highest waterfall in Tyrol at 159 meters.",
        "The site where the glacier mummy Ötzi was found is right on the border with Italy.",
        "The Ötztal Glacier Road is one of the highest paved roads in the Alps.",
        "Sölden is one of the most famous and largest winter sports resorts in Europe.",
        "The highest mountain in Tyrol, the Wildspitze (3,768 m), is located in the Ötztal Alps."
      ]
    },
  },
  {
    "id": "at-eisriesenwelt",
    "type": "landmark",
    "parent": "AT-5",
    "coords": [
      13.1908,
      47.5031
    ],
    "name": {
      "de": "Eisriesenwelt Werfen",
      "hu": "Eisriesenwelt jégbarlang",
      "ro": "Peștera de Gheață Eisriesenwelt",
      "en": "Eisriesenwelt Ice Cave"
    },
    "image": "/geo-images/austria/eisriesenwelt.webp",
    "description": {
      "de": "Die Eisriesenwelt in Werfen ist die größte Eishöhle der Welt. Das Höhlensystem im Tennengebirge erstreckt sich über eine Gesamtlänge von rund 42 Kilometern. Die fantastischen Eisformationen entstehen im Frühjahr, wenn Schmelzwasser in die eiskalte Höhle sickert und dort gefriert. Besucher können dieses eisige Naturwunder im Rahmen von geführten Touren mit Grubenlampen erkunden.",
      "hu": "A werfeni Eisriesenwelt a világ legnagyobb jégbarlangja. A Tennengebirge hegységben lévő barlangrendszer teljes hossza mintegy 42 kilométer. A fantasztikus jégképződmények tavasszal keletkeznek, amikor az olvadékvíz beszivárog a jéghideg barlangba és ott megfagy. A látogatók bányászlámpás vezetett túrákon fedezhetik fel ezt a fagyos természeti csodát.",
      "ro": "Eisriesenwelt din Werfen este cea mai mare peșteră de gheață din lume. Sistemul de peșteri din Munții Tennengebirge se întinde pe o lungime totală de aproximativ 42 de kilometri. Formațiunile fantastice de gheață se creează primăvara, când apa topită se infiltrează în peștera înghețată și îngheață acolo. Vizitatorii pot explora această minune de gheață a naturii în tururi ghidate, cu lămpi de miner.",
      "en": "The Eisriesenwelt in Werfen is the largest ice cave in the world. The cave system in the Tennengebirge mountain range extends over a total length of around 42 kilometers. The fantastic ice formations are created in spring when meltwater seeps into the freezing cave and freezes there. Visitors can explore this icy natural wonder on guided tours with miner's lamps."
    },
    "facts": {
      "de": [
        "Die Eisriesenwelt gilt mit 42 km als das größte Eishöhlensystem der Erde.",
        "Das Höhlenportal liegt auf einer Höhe von 1.641 Metern.",
        "Die Höhle wurde 1879 vom Naturforscher Anton Posselt entdeckt.",
        "Im Inneren der Höhle herrschen auch im Sommer Temperaturen unter 0 Grad.",
        "Die Besucher bewältigen bei der Tour im Inneren der Höhle 700 Stufen.",
        "Die Höhle ist nur von Mai bis Oktober für die Öffentlichkeit zugänglich."
      ],
      "hu": [
        "A 42 km hosszú Eisriesenwelt a Föld legnagyobb jégbarlangrendszere.",
        "A barlang bejárata 1641 méteres magasságban található.",
        "A barlangot 1879-ben fedezte fel Anton Posselt természettudós.",
        "A barlang belsejében még nyáron is 0 fok alatti hőmérséklet uralkodik.",
        "A látogatók a barlang belsejében tett túra során 700 lépcsőfokot másznak meg.",
        "A barlang csak májustól októberig látogatható a nagyközönség számára."
      ],
      "ro": [
        "Cu o lungime de 42 km, Eisriesenwelt este considerat cel mai mare sistem de peșteri de gheață de pe Pământ.",
        "Portalul peșterii este situat la o altitudine de 1.641 metri.",
        "Peștera a fost descoperită în 1879 de naturalistul Anton Posselt.",
        "În interiorul peșterii, temperaturile sunt sub 0 grade chiar și vara.",
        "Vizitatorii urcă 700 de trepte în timpul turului din interiorul peșterii.",
        "Peștera este deschisă publicului doar din mai până în octombrie."
      ],
      "en": [
        "At 42 km, the Eisriesenwelt is considered the largest ice cave system on Earth.",
        "The cave portal is located at an altitude of 1,641 meters.",
        "The cave was discovered in 1879 by the naturalist Anton Posselt.",
        "Inside the cave, temperatures are below 0 degrees even in summer.",
        "Visitors climb 700 steps during the tour inside the cave.",
        "The cave is only open to the public from May to October."
      ]
    },
  },
  {
    "id": "at-donau-auen-np",
    "type": "landmark",
    "parent": "AT-3",
    "coords": [
      16.6667,
      48.1333
    ],
    "name": {
      "de": "Nationalpark Donau-Auen",
      "hu": "Donau-Auen Nemzeti Park",
      "ro": "Parcul Național Donau-Auen",
      "en": "Danube-Auen National Park"
    },
    "image": "/geo-images/austria/donau-auen-np.webp",
    "description": {
      "de": "Der Nationalpark Donau-Auen erstreckt sich zwischen Wien und Bratislava und bewahrt eine der letzten großen unverbauten Flussauenlandschaften Mitteleuropas. Die Auwälder werden von der Dynamik der Donau geprägt und verändern durch Hochwasser und Trockenperioden ständig ihr Gesicht. Das Gebiet ist Lebensraum für zahlreiche bedrohte Tier- und Pflanzenarten, darunter der Seeadler. Besucher können die Auen bei Bootsfahrten oder Wanderungen erkunden.",
      "hu": "A Donau-Auen Nemzeti Park Bécs és Pozsony között húzódik, és Közép-Európa egyik utolsó nagy, szabályozatlan folyami ártéri táját őrzi. Az ártéri erdőket a Duna dinamikája alakítja, és arculatukat az áradások és aszályok folyamatosan változtatják. A terület számos veszélyeztetett állat- és növényfaj, köztük a rétisas élőhelye. A látogatók hajókirándulásokon vagy gyalogtúrákon fedezhetik fel az árteret.",
      "ro": "Parcul Național Donau-Auen se întinde între Viena și Bratislava și păstrează unul dintre ultimele peisaje mari de câmpie inundabilă a unui râu nereglat din Europa Centrală. Pădurile luncilor inundabile sunt modelate de dinamica Dunării și își schimbă constant aspectul din cauza inundațiilor și a secetei. Zona este un habitat pentru numeroase specii de animale și plante pe cale de dispariție, inclusiv vulturul cu coadă albă. Vizitatorii pot explora câmpiile inundabile în excursii cu barca sau drumeții.",
      "en": "The Danube-Auen National Park stretches between Vienna and Bratislava and preserves one of the last large, unregulated river floodplain landscapes in Central Europe. The floodplain forests are shaped by the dynamics of the Danube and are constantly changing their appearance due to floods and dry periods. The area is a habitat for numerous endangered animal and plant species, including the white-tailed eagle. Visitors can explore the floodplains on boat trips or hikes."
    },
    "facts": {
      "de": [
        "Die Donau-Auen sind die größte naturnahe Flussauenlandschaft Mitteleuropas.",
        "Der Park wurde 1996 gegründet, nachdem der Bau eines Kraftwerks bei Hainburg verhindert wurde.",
        "Im Park sind über 800 höhere Pflanzenarten und hunderte Vogelarten heimisch.",
        "Der Eisvogel ist das Symboltier des Nationalparks Donau-Auen.",
        "Europäische Sumpfschildkröten finden hier einen ihrer letzten Rückzugsorte in Österreich.",
        "Das Schloss Orth ist das Besucherzentrum (nationalpark-zentrum) der Donau-Auen."
      ],
      "hu": [
        "A Donau-Auen Közép-Európa legnagyobb, természetközeli állapotban lévő folyami ártéri tája.",
        "A parkot 1996-ban alapították, miután megakadályozták egy hainburgi erőmű építését.",
        "A parkban több mint 800 magasabb rendű növényfaj és több száz madárfaj él.",
        "A jégmadár a Donau-Auen Nemzeti Park szimbólumállata.",
        "Az európai mocsáriteknősök itt találják meg utolsó menedékeik egyikét Ausztriában.",
        "Az Orthi kastély ad otthont a Donau-Auen Látogatóközpontnak."
      ],
      "ro": [
        "Donau-Auen este cel mai mare peisaj de câmpie inundabilă naturală din Europa Centrală.",
        "Parcul a fost fondat în 1996 după ce a fost împiedicată construirea unei centrale electrice la Hainburg.",
        "Peste 800 de specii de plante superioare și sute de specii de păsări sunt native în parc.",
        "Pescărușul albastru este animalul simbol al Parcului Național Donau-Auen.",
        "Țestoasele de baltă europene își găsesc aici unul dintre ultimele refugii din Austria.",
        "Castelul Orth este centrul de vizitatori al parcului Donau-Auen."
      ],
      "en": [
        "The Donau-Auen is the largest near-natural river floodplain landscape in Central Europe.",
        "The park was founded in 1996 after the construction of a power plant near Hainburg was prevented.",
        "Over 800 higher plant species and hundreds of bird species are native to the park.",
        "The kingfisher is the symbol animal of the Danube-Auen National Park.",
        "European pond turtles find one of their last refuges in Austria here.",
        "Orth Castle is the visitor center of the Donau-Auen."
      ]
    },
  },
  {
    "id": "at-gottweig-abbey",
    "type": "historical",
    "parent": "AT-3",
    "coords": [
      15.6167,
      48.3667
    ],
    "name": {
      "de": "Stift Göttweig",
      "hu": "Göttweigi apátság",
      "ro": "Abația Göttweig",
      "en": "Göttweig Abbey"
    },
    "image": "/geo-images/austria/gottweig-abbey.webp",
    "description": {
      "de": "Das Stift Göttweig ist ein Benediktinerkloster auf einem Hügel südlich von Krems in Niederösterreich. Aufgrund seiner exponierten Lage und prächtigen Architektur wird es oft als das 'Österreichische Montecassino' bezeichnet. Das Stift gehört zusammen mit der Kulturlandschaft Wachau zum UNESCO-Welterbe. Besonders beeindruckend ist die monumentale Kaiserstiege im Inneren des Klosters, eines der schönsten barocken Treppenhäuser Europas.",
      "hu": "A Göttweigi apátság egy bencés kolostor Alsó-Ausztriában, a Krems-től délre fekvő hegyen. Kiemelkedő fekvése és pompás építészete miatt gyakran 'Osztrák Montecassino'-nak is nevezik. Az apátság a wachaui kultúrtájjal együtt az UNESCO Világörökség része. Különösen lenyűgöző a kolostor belsejében található monumentális Császárlépcső, amely Európa egyik legszebb barokk lépcsőháza.",
      "ro": "Abația Göttweig este o mănăstire benedictină pe un deal la sud de Krems, în Austria Inferioară. Datorită locației sale expuse și arhitecturii magnifice, este adesea denumită „Montecassino austriac”. Abația, împreună cu peisajul cultural Wachau, face parte din Patrimoniul Mondial UNESCO. Deosebit de impresionantă este scara imperială monumentală din interiorul mănăstirii, una dintre cele mai frumoase scări baroce din Europa.",
      "en": "Göttweig Abbey is a Benedictine monastery on a hill south of Krems in Lower Austria. Due to its exposed location and magnificent architecture, it is often referred to as the 'Austrian Montecassino'. The abbey, together with the Wachau cultural landscape, is a UNESCO World Heritage Site. Particularly impressive is the monumental Imperial Staircase inside the monastery, one of the most beautiful baroque staircases in Europe."
    },
    "facts": {
      "de": [
        "Das Stift Göttweig wurde 1083 vom Bischof Altmann von Passau gegründet.",
        "Nach einem Brand 1718 wurde das Stift im Barockstil unter Johann Lukas von Hildebrandt neu erbaut.",
        "Das Deckenfresko über der Kaiserstiege wurde von Paul Troger gemalt.",
        "Göttweig ist auch ein bedeutendes Weingut mit einer langen Weinbautradition.",
        "In der Stiftsbibliothek befinden sich rund 150.000 Bände.",
        "Das Kloster überblickt das Donautal und den östlichen Rand der Wachau."
      ],
      "hu": [
        "A Göttweigi apátságot 1083-ban alapította Altmann passaui püspök.",
        "Egy 1718-as tűzvész után a kolostort barokk stílusban építették újjá Johann Lukas von Hildebrandt vezetésével.",
        "A Császárlépcső feletti mennyezetfreskót Paul Troger festette.",
        "Göttweig hosszú borászati hagyományokkal rendelkező, jelentős borbirtok is egyben.",
        "A kolostor könyvtárában mintegy 150 000 kötet található.",
        "A kolostorból kilátás nyílik a Duna-völgyre és a Wachau keleti szélére."
      ],
      "ro": [
        "Abația Göttweig a fost fondată în 1083 de episcopul Altmann din Passau.",
        "După un incendiu în 1718, abația a fost reconstruită în stil baroc sub conducerea lui Johann Lukas von Hildebrandt.",
        "Fresca de pe tavanul deasupra Scării Imperiale a fost pictată de Paul Troger.",
        "Göttweig este, de asemenea, o cramă importantă, cu o lungă tradiție viticolă.",
        "Biblioteca mănăstirii conține în jur de 150.000 de volume.",
        "Mănăstirea are vedere la Valea Dunării și la marginea estică a regiunii Wachau."
      ],
      "en": [
        "Göttweig Abbey was founded in 1083 by Bishop Altmann of Passau.",
        "After a fire in 1718, the abbey was rebuilt in Baroque style under Johann Lukas von Hildebrandt.",
        "The ceiling fresco above the Imperial Staircase was painted by Paul Troger.",
        "Göttweig is also an important winery with a long viticultural tradition.",
        "The abbey library contains around 150,000 volumes.",
        "The monastery overlooks the Danube Valley and the eastern edge of the Wachau."
      ]
    },
  },
  {
    "id": "at-stift-admont",
    "type": "historical",
    "parent": "AT-6",
    "coords": [
      14.46,
      47.575
    ],
    "name": {
      "de": "Stift Admont",
      "hu": "Admonti apátság",
      "ro": "Abația Admont",
      "en": "Admont Abbey"
    },
    "image": "/geo-images/austria/stift-admont.webp",
    "description": {
      "de": "Das Stift Admont in der Steiermark ist das älteste bestehende Kloster in der Region und weltweit bekannt für seine atemberaubende Stiftsbibliothek. Sie ist die größte klösterliche Bibliothek der Welt und ein Meisterwerk des Spätbarock. Die prachtvollen Deckenfresken und die kunstvollen Schnitzereien machen sie zu einem architektonischen Juwel. Darüber hinaus beherbergt das Stift bedeutende Sammlungen von Kunst und Naturgeschichte.",
      "hu": "A stájerországi Admonti apátság a régió legrégebbi fennmaradt kolostora, és világszerte ismert lélegzetelállító könyvtáráról. Ez a világ legnagyobb kolostori könyvtára, a késő barokk mesterműve. A pompás mennyezeti freskók és a művészi fafaragások igazi építészeti ékszerdobozzá teszik. Emellett az apátság jelentős művészeti és természettudományi gyűjteményeknek ad otthont.",
      "ro": "Abația Admont din Stiria este cea mai veche mănăstire existentă din regiune și este cunoscută în întreaga lume pentru biblioteca sa uluitoare. Este cea mai mare bibliotecă monahală din lume și o capodoperă a barocului târziu. Frescele magnifice de pe tavan și sculpturile ornamentate o transformă într-o bijuterie arhitecturală. În plus, mănăstirea găzduiește colecții importante de artă și istorie naturală.",
      "en": "Admont Abbey in Styria is the oldest existing monastery in the region and is known worldwide for its breathtaking abbey library. It is the largest monastic library in the world and a masterpiece of the Late Baroque. The magnificent ceiling frescoes and ornate carvings make it an architectural jewel. In addition, the abbey houses important collections of art and natural history."
    },
    "facts": {
      "de": [
        "Das Stift Admont wurde im Jahr 1074 gegründet.",
        "Die Stiftsbibliothek ist 70 Meter lang, 14 Meter breit und 13 Meter hoch.",
        "Die Bibliothek beherbergt rund 70.000 Bände, der gesamte Stiftsbestand umfasst 200.000 Bände.",
        "Die Deckenfresken der Bibliothek wurden von Bartolomeo Altomonte geschaffen.",
        "Vier überlebensgroße Holzskulpturen in der Bibliothek stellen die 'Vier letzten Dinge' dar (Tod, Gericht, Hölle, Himmel).",
        "Ein verheerender Brand im Jahr 1865 zerstörte fast das gesamte Kloster, verschonte jedoch die Bibliothek."
      ],
      "hu": [
        "Az Admonti apátságot 1074-ben alapították.",
        "A kolostori könyvtár 70 méter hosszú, 14 méter széles és 13 méter magas.",
        "A könyvtár mintegy 70 000 kötetnek ad otthont, a teljes apátsági állomány 200 000 kötet.",
        "A könyvtár mennyezetfreskóit Bartolomeo Altomonte készítette.",
        "A könyvtárban található négy életnagyságnál nagyobb faszobor az 'utolsó négy dolgot' ábrázolja (Halál, Ítélet, Pokol, Mennyország).",
        "Egy 1865-ös pusztító tűzvész szinte az egész kolostort elpusztította, de a könyvtárat megkímélte."
      ],
      "ro": [
        "Abația Admont a fost fondată în anul 1074.",
        "Biblioteca mănăstirii are 70 de metri lungime, 14 metri lățime și 13 metri înălțime.",
        "Biblioteca găzduiește în jur de 70.000 de volume, fondul întregii abații cuprinzând 200.000 de volume.",
        "Frescele de pe tavanul bibliotecii au fost create de Bartolomeo Altomonte.",
        "Patru sculpturi de lemn în mărime naturală din bibliotecă reprezintă cele „Patru Ultime Lucruri” (Moartea, Judecata, Iadul, Raiul).",
        "Un incendiu devastator din 1865 a distrus aproape întreaga mănăstire, dar a cruțat biblioteca."
      ],
      "en": [
        "Admont Abbey was founded in the year 1074.",
        "The abbey library is 70 meters long, 14 meters wide and 13 meters high.",
        "The library houses around 70,000 volumes, the entire abbey collection comprises 200,000 volumes.",
        "The ceiling frescoes of the library were created by Bartolomeo Altomonte.",
        "Four larger-than-life wooden sculptures in the library represent the 'Four Last Things' (Death, Judgment, Hell, Heaven).",
        "A devastating fire in 1865 destroyed almost the entire monastery but spared the library."
      ]
    },
  },
  {
    "id": "at-salzburg-festival",
    "type": "landmark",
    "parent": "AT-5",
    "coords": [
      13.043,
      47.7972
    ],
    "name": {
      "de": "Salzburger Festspiele",
      "hu": "Salzburgi Ünnepi Játékok",
      "ro": "Festivalul de la Salzburg",
      "en": "Salzburg Festival"
    },
    "image": "/geo-images/austria/salzburg-festival.webp",
    "description": {
      "de": "Die Salzburger Festspiele sind das weltweit bedeutendste Festival der klassischen Musik und darstellenden Kunst. Seit über 100 Jahren verwandeln sie die Mozartstadt Salzburg jeden Sommer in die Kulturhauptstadt der Welt. Mit Aufführungen von Opern, Schauspielen und Konzerten auf höchstem künstlerischen Niveau ziehen sie das internationale Publikum an. Das Stück 'Jedermann' von Hugo von Hofmannsthal auf dem Domplatz ist das Herzstück des Festivals.",
      "hu": "A Salzburgi Ünnepi Játékok a klasszikus zene és előadóművészet világának legjelentősebb fesztiválja. Több mint 100 éve minden nyáron a világ kulturális fővárosává változtatják Mozart városát, Salzburgot. A legmagasabb művészi színvonalú opera-, színházi és koncertelőadásokkal vonzzák a nemzetközi közönséget. Hugo von Hofmannsthal 'Akárki' (Jedermann) című darabja a Dóm téren a fesztivál szíve.",
      "ro": "Festivalul de la Salzburg este cel mai important festival de muzică clasică și artele spectacolului din lume. De peste 100 de ani, au transformat în fiecare vară orașul lui Mozart, Salzburg, în capitala culturală a lumii. Atrag publicul internațional cu spectacole de operă, teatru și concerte la cel mai înalt nivel artistic. Piesa „Jedermann” de Hugo von Hofmannsthal din Piața Catedralei este inima festivalului.",
      "en": "The Salzburg Festival is the world's most important festival of classical music and performing arts. For over 100 years, they have transformed the city of Mozart, Salzburg, into the cultural capital of the world every summer. They attract an international audience with opera, drama and concert performances at the highest artistic level. The play 'Jedermann' (Everyman) by Hugo von Hofmannsthal on the Cathedral Square is the heart of the festival."
    },
    "facts": {
      "de": [
        "Die Festspiele wurden 1920 von Max Reinhardt, Hugo von Hofmannsthal und Richard Strauss gegründet.",
        "Das Festspielhaus-Ensemble in Salzburg umfasst das Große Festspielhaus, das Haus für Mozart und die Felsenreitschule.",
        "Der 'Jedermann' wird traditionell unter freiem Himmel auf dem Domplatz aufgeführt.",
        "Über 250.000 Besucher aus aller Welt kommen jährlich zu den Salzburger Festspielen.",
        "Das Festival dauert in der Regel fünf Wochen von Mitte Juli bis Ende August.",
        "Herbert von Karajan prägte die Festspiele in der Nachkriegszeit als Dirigent maßgeblich."
      ],
      "hu": [
        "A fesztivált 1920-ban alapította Max Reinhardt, Hugo von Hofmannsthal és Richard Strauss.",
        "A salzburgi Fesztiválpalota-együttes magában foglalja a Nagy Fesztiválpalotát, a Haus für Mozartot és a Felsenreitschulét.",
        "A 'Jedermann' című darabot hagyományosan a szabad ég alatt, a Dóm téren adják elő.",
        "Évente több mint 250 000 látogató érkezik a világ minden tájáról a Salzburgi Ünnepi Játékokra.",
        "A fesztivál általában öt hétig tart július közepétől augusztus végéig.",
        "Herbert von Karajan karmesterként döntően meghatározta az Ünnepi Játékokat a háború utáni időszakban."
      ],
      "ro": [
        "Festivalul a fost fondat în 1920 de Max Reinhardt, Hugo von Hofmannsthal și Richard Strauss.",
        "Ansamblul Festspielhaus din Salzburg include Grosses Festspielhaus, Haus für Mozart și Felsenreitschule.",
        "„Jedermann” se desfășoară în mod tradițional în aer liber în Piața Catedralei.",
        "Peste 250.000 de vizitatori din întreaga lume vin anual la Festivalul de la Salzburg.",
        "Festivalul durează de obicei cinci săptămâni, de la jumătatea lunii iulie până la sfârșitul lunii august.",
        "Herbert von Karajan, ca dirijor, a avut o influență majoră asupra festivalului în perioada postbelică."
      ],
      "en": [
        "The festival was founded in 1920 by Max Reinhardt, Hugo von Hofmannsthal and Richard Strauss.",
        "The Festspielhaus ensemble in Salzburg includes the Grosses Festspielhaus, the Haus für Mozart and the Felsenreitschule.",
        "The play 'Jedermann' is traditionally performed outdoors on the Cathedral Square.",
        "Over 250,000 visitors from all over the world come to the Salzburg Festival every year.",
        "The festival usually lasts five weeks from mid-July to the end of August.",
        "Herbert von Karajan had a major influence on the festival as a conductor in the post-war period."
      ]
    },
  },
  {
    "id": "at-minimundus",
    "type": "kid-landmark",
    "parent": "AT-2",
    "coords": [
      14.2797,
      46.6281
    ],
    "name": {
      "de": "Minimundus",
      "hu": "Minimundus",
      "ro": "Minimundus",
      "en": "Minimundus"
    },
    "image": "/geo-images/austria/minimundus.webp",
    "description": {
      "de": "Minimundus in Klagenfurt am Wörthersee ist ein beliebter Miniaturpark und wird oft als die 'kleine Welt am Wörthersee' bezeichnet. Hier können Besucher an einem einzigen Tag um die ganze Welt reisen. Der Park zeigt über 150 detailgetreue Modelle von berühmten Gebäuden, Schiffen und Zügen aus mehr als 40 Ländern im Maßstab 1:25. Es ist ein lehrreiches und faszinierendes Erlebnis für die ganze Familie.",
      "hu": "A klagenfurti Wörthersee partján található Minimundus egy népszerű miniatűrpark, amelyet gyakran 'kis világnak a Wörtherseenél' is neveznek. Itt a látogatók egyetlen nap alatt körbeutazhatják az egész világot. A parkban több mint 40 ország híres épületeinek, hajóinak és vonatainak több mint 150 részlethű, 1:25 méretarányú makettje látható. Tanulságos és lenyűgöző élmény az egész család számára.",
      "ro": "Minimundus din Klagenfurt pe Lacul Wörthersee este un parc miniatural popular și este adesea menționat ca „mica lume de pe Wörthersee”. Aici, vizitatorii pot călători în jurul lumii într-o singură zi. Parcul are peste 150 de modele detaliate ale clădirilor, navelor și trenurilor faimoase din peste 40 de țări la o scară de 1:25. Este o experiență educativă și fascinantă pentru întreaga familie.",
      "en": "Minimundus in Klagenfurt am Wörthersee is a popular miniature park and is often referred to as the 'little world on Lake Wörthersee'. Here visitors can travel around the world in a single day. The park features over 150 detailed models of famous buildings, ships and trains from more than 40 countries at a scale of 1:25. It is an educational and fascinating experience for the whole family."
    },
    "facts": {
      "de": [
        "Alle Modelle im Minimundus sind im einheitlichen Maßstab 1:25 gebaut.",
        "Der Miniaturpark wurde 1958 eröffnet.",
        "Viele der Modelle wurden aus den Originalmaterialien der echten Gebäude gefertigt (z. B. Marmor, Sandstein).",
        "Der Nettoerlös des Minimundus geht an die Hilfsorganisation 'Rettet das Kind'.",
        "Das größte Modell im Park ist der Petersdom aus Rom.",
        "Auf dem Gelände fahren auch Modellzüge, die jährlich rund 5.000 Kilometer zurücklegen."
      ],
      "hu": [
        "A Minimundus minden makettje egységes, 1:25-ös méretarányban készült.",
        "A miniatűrparkot 1958-ban nyitották meg.",
        "A makettek közül sokat a valódi épületek eredeti anyagaiból (pl. márvány, homokkő) készítettek.",
        "A Minimundus nettó bevétele a 'Mentsük meg a gyermekeket' ('Rettet das Kind') segélyszervezethez kerül.",
        "A park legnagyobb makettje a római Szent Péter-bazilika.",
        "A területen modellvonatok is közlekednek, amelyek évente mintegy 5000 kilométert tesznek meg."
      ],
      "ro": [
        "Toate modelele din Minimundus sunt construite la o scară uniformă de 1:25.",
        "Parcul în miniatură a fost deschis în 1958.",
        "Multe dintre modele au fost realizate folosind materialele originale ale clădirilor reale (de exemplu, marmură, gresie).",
        "Veniturile nete de la Minimundus merg către organizația de asistență „Rettet das Kind” (Salvați Copilul).",
        "Cel mai mare model din parc este Bazilica Sfântul Petru din Roma.",
        "În parc circulă și trenuri în miniatură care parcurg aproximativ 5.000 de kilometri anual."
      ],
      "en": [
        "All models in Minimundus are built to a uniform scale of 1:25.",
        "The miniature park was opened in 1958.",
        "Many of the models were made from the original materials of the real buildings (e.g., marble, sandstone).",
        "The net proceeds from Minimundus go to the aid organization 'Rettet das Kind' (Save the Child).",
        "The largest model in the park is St. Peter's Basilica from Rome.",
        "Model trains also run on the grounds, covering around 5,000 kilometers annually."
      ]
    },
  },
  {
    "id": "at-schladming-dachstein",
    "type": "mountain",
    "parent": "AT-6",
    "coords": [
      13.6889,
      47.3944
    ],
    "name": {
      "de": "Schladming-Dachstein",
      "hu": "Schladming-Dachstein",
      "ro": "Schladming-Dachstein",
      "en": "Schladming-Dachstein"
    },
    "image": "/geo-images/austria/schladming-dachstein.webp",
    "description": {
      "de": "Die Urlaubsregion Schladming-Dachstein in der Steiermark zählt zu den führenden Alpendestinationen Österreichs. Sie ist weltweit bekannt für die alpine Ski-Weltmeisterschaft und die berühmte 4-Berge-Skischaukel. Im Sommer verwandelt sich die Region in ein Wanderparadies mit saftigen Almwiesen, kristallklaren Bergseen und markanten Gipfeln. Der imposante Dachstein-Gletscher krönt das Panorama und lockt mit spektakulären Attraktionen.",
      "hu": "A stájerországi Schladming-Dachstein üdülőrégió Ausztria vezető alpesi úti céljai közé tartozik. Világszerte ismert az alpesisí-világbajnokságról és a híres 4 hegyet összekötő síhintáról (4-Berge-Skischaukel). Nyáron a régió túrázóparadicsommá változik, buja alpesi rétekkel, kristálytiszta hegyi tavakkal és lenyűgöző hegycsúcsokkal. Az impozáns Dachstein-gleccser koronázza meg a panorámát, és látványos attrakciókkal vonzza a látogatókat.",
      "ro": "Regiunea de vacanță Schladming-Dachstein din Stiria este una dintre cele mai importante destinații alpine din Austria. Este cunoscut în întreaga lume pentru Campionatul Mondial de Schi Alpin și faimosul leagăn de schi pe 4 munți. Vara, regiunea se transformă într-un paradis pentru drumeții, cu pajiști alpine luxuriante, lacuri de munte cristaline și vârfuri de munte uimitoare. Impunătorul ghețar Dachstein încoronează panorama și atrage cu atracții spectaculoase.",
      "en": "The Schladming-Dachstein holiday region in Styria is one of the leading Alpine destinations in Austria. It is known worldwide for the Alpine World Ski Championships and the famous 4-Mountain Ski Swing. In summer, the region transforms into a hiking paradise with lush Alpine meadows, crystal-clear mountain lakes, and striking mountain peaks. The imposing Dachstein glacier crowns the panorama and attracts visitors with spectacular attractions."
    },
    "facts": {
      "de": [
        "Die 4-Berge-Skischaukel verbindet die Berge Hauser Kaibling, Planai, Hochwurzen und Reiteralm ohne Unterbrechung.",
        "Schladming trug bereits mehrmals die Alpine Skiweltmeisterschaft aus (zuletzt 2013).",
        "Das berühmte 'Nightrace', ein Nachtslalom der Herren auf der Planai, zieht jährlich bis zu 50.000 Fans an.",
        "Am Dachstein-Gletscher befindet sich der 'Sky Walk', eine spektakuläre gläserne Aussichtsplattform.",
        "Der Hohe Dachstein ist mit 2.995 Metern der höchste Berg der Steiermark.",
        "Die Region umfasst auch die 'Treppe ins Nichts' und den Eispalast am Gletscher."
      ],
      "hu": [
        "A 4 hegyes síhinta (4-Berge-Skischaukel) megszakítás nélkül köti össze a Hauser Kaibling, a Planai, a Hochwurzen és a Reiteralm hegyeket.",
        "Schladming már többször is rendezett alpesisí-világbajnokságot (legutóbb 2013-ban).",
        "A híres 'Nightrace', egy éjszakai férfi műlesiklás a Planain, évente akár 50 000 rajongót is vonz.",
        "A Dachstein-gleccseren található a 'Sky Walk', egy látványos üveg kilátóplatform.",
        "A Hoher Dachstein 2995 méteres magasságával Stájerország legmagasabb hegye.",
        "A régióhoz tartozik a 'Semmibe vezető lépcső' és a jégpalota is a gleccseren."
      ],
      "ro": [
        "Leagănul de schi cu 4 munți leagă munții Hauser Kaibling, Planai, Hochwurzen și Reiteralm fără întrerupere.",
        "Schladming a găzduit deja Campionatele Mondiale de Schi Alpin de mai multe ori (cel mai recent în 2013).",
        "Renumita „Nightrace”, un slalom de noapte masculin pe Planai, atrage până la 50.000 de fani în fiecare an.",
        "Pe ghețarul Dachstein se află „Sky Walk”, o platformă spectaculoasă de observare din sticlă.",
        "Muntele Hoher Dachstein, la 2.995 de metri, este cel mai înalt munte din Stiria.",
        "Regiunea include, de asemenea, „Scara spre Nimic” și Palatul de Gheață de pe ghețar."
      ],
      "en": [
        "The 4-Mountain Ski Swing connects the Hauser Kaibling, Planai, Hochwurzen and Reiteralm mountains without interruption.",
        "Schladming has already hosted the Alpine World Ski Championships several times (most recently in 2013).",
        "The famous 'Nightrace', a men's night slalom on the Planai, attracts up to 50,000 fans every year.",
        "The 'Sky Walk', a spectacular glass observation platform, is located on the Dachstein glacier.",
        "The Hoher Dachstein is the highest mountain in Styria at 2,995 meters.",
        "The region also includes the 'Stairway to Nothingness' and the Ice Palace on the glacier."
      ]
    },
  },
  {
    "id": "at-kitzbuhel-ski",
    "type": "landmark",
    "parent": "AT-7",
    "coords": [
      12.3906,
      47.447
    ],
    "name": {
      "de": "Kitzbühel & Hahnenkamm",
      "hu": "Kitzbühel és a Hahnenkamm",
      "ro": "Kitzbühel și Hahnenkamm",
      "en": "Kitzbühel & Hahnenkamm"
    },
    "image": "/geo-images/austria/kitzbuhel-ski.webp",
    "description": {
      "de": "Kitzbühel in Tirol ist einer der exklusivsten und bekanntesten Wintersportorte der Welt. Der malerische Ort mit seinem mittelalterlichen Stadtkern zieht Prominenz und Skibegeisterte gleichermaßen an. Weltruhm erlangte Kitzbühel vor allem durch das legendäre Hahnenkammrennen mit der gefürchteten 'Streif'-Abfahrt. Aber auch abseits der Pisten bietet Kitzbühel mit Luxusboutiquen, Haubenrestaurants und einer traumhaften Natur ein unvergleichliches Erlebnis.",
      "hu": "A tiroli Kitzbühel a világ egyik legexkluzívabb és legismertebb téli sportközpontja. A festői település középkori városmagjával a hírességeket és a síelés szerelmeseit egyaránt vonzza. Kitzbühel világhírnevét elsősorban a legendás Hahnenkamm-versenynek és a rettegett 'Streif' lesiklópályának köszönheti. Kitzbühel azonban a lejtőkön kívül is páratlan élményt nyújt luxusbutikjaival, díjnyertes éttermeivel és álomszép természetével.",
      "ro": "Kitzbühel din Tirol este una dintre cele mai exclusiviste și cunoscute stațiuni de sporturi de iarnă din lume. Orașul pitoresc cu centrul său medieval atrage deopotrivă vedete și pasionați de schi. Kitzbühel a câștigat faimă mondială în principal datorită legendarei curse Hahnenkamm și temutei pârtii „Streif”. Dar, chiar și departe de pârtii, Kitzbühel oferă o experiență de neegalat cu buticuri de lux, restaurante premiate și natură de vis.",
      "en": "Kitzbühel in Tyrol is one of the most exclusive and famous winter sports resorts in the world. The picturesque town with its medieval core attracts celebrities and ski enthusiasts alike. Kitzbühel gained world fame primarily through the legendary Hahnenkamm race and the dreaded 'Streif' downhill run. But even away from the slopes, Kitzbühel offers an unparalleled experience with luxury boutiques, award-winning restaurants and wonderful nature."
    },
    "facts": {
      "de": [
        "Die Streif gilt als die schwierigste und gefährlichste Abfahrtsstrecke der Welt.",
        "Beim Hahnenkammrennen erreichen die Skirennläufer auf der Zielschusskante Geschwindigkeiten bis zu 140 km/h.",
        "Der Mausefalle-Sprung auf der Streif führt zu Flügen von bis zu 80 Metern Länge.",
        "Kitzbühel war Austragungsort unzähliger Weltcuprennen im alpinen Skisport.",
        "Das Kitzbüheler Horn ist ein weiterer bekannter Skiberg in der Region.",
        "Im Sommer findet in Kitzbühel das Generali Open, ein ATP-Tennisturnier, statt."
      ],
      "hu": [
        "A Streif a világ legnehezebb és legveszélyesebb lesiklópályája.",
        "A Hahnenkamm-versenyen a sízők a cél előtti egyenesben akár a 140 km/h-s sebességet is elérik.",
        "A Streifen található 'Egérfogó' (Mausefalle) ugratónál akár 80 métert is repülhetnek a versenyzők.",
        "Kitzbühel számtalan alpesisí-világkupa futamnak adott otthont.",
        "A Kitzbüheler Horn egy másik ismert síhegy a régióban.",
        "Nyáron Kitzbühelben rendezik a Generali Open ATP-teniszbajnokságot."
      ],
      "ro": [
        "Pârtia Streif este considerată cea mai dificilă și periculoasă pârtie de coborâre din lume.",
        "În timpul cursei Hahnenkamm, schiorii ating viteze de până la 140 km/h la finalul coborârii.",
        "Săritura „Cursă de Șoareci” (Mausefalle) de pe Streif duce la zboruri de până la 80 de metri lungime.",
        "Kitzbühel a găzduit nenumărate curse de Cupă Mondială la schi alpin.",
        "Kitzbüheler Horn este un alt munte de schi bine-cunoscut din regiune.",
        "Vara, turneul de tenis ATP Generali Open are loc în Kitzbühel."
      ],
      "en": [
        "The Streif is considered the most difficult and dangerous downhill ski run in the world.",
        "During the Hahnenkamm race, skiers reach speeds of up to 140 km/h on the final schuss.",
        "The Mausefalle (Mousetrap) jump on the Streif results in flights of up to 80 meters in length.",
        "Kitzbühel has hosted countless Alpine Ski World Cup races.",
        "The Kitzbüheler Horn is another well-known ski mountain in the region.",
        "In summer, the Generali Open, an ATP tennis tournament, takes place in Kitzbühel."
      ]
    },
  },
  {
    "id": "at-mozarteum-salzburg",
    "type": "landmark",
    "parent": "AT-5",
    "coords": [
      13.0506,
      47.8014
    ],
    "name": {
      "de": "Stiftung Mozarteum",
      "hu": "Mozarteum Alapítvány",
      "ro": "Fundația Mozarteum",
      "en": "Mozarteum Foundation"
    },
    "image": "/geo-images/austria/mozarteum-salzburg.webp",
    "description": {
      "de": "Die Internationale Stiftung Mozarteum in Salzburg hat es sich zur Aufgabe gemacht, das Erbe Wolfgang Amadeus Mozarts zu bewahren. Sie betreibt Mozarts Geburtshaus und das Mozart-Wohnhaus als Museen, die zu den meistbesuchten Sehenswürdigkeiten Österreichs zählen. Zudem verwahrt die Stiftung eine unschätzbare Sammlung an Autographen, Instrumenten und Briefen des genialen Komponisten. Jedes Jahr im Januar veranstaltet das Mozarteum die Mozartwoche, ein renommiertes Klassikfestival.",
      "hu": "A salzburgi Nemzetközi Mozarteum Alapítvány célja Wolfgang Amadeus Mozart örökségének megőrzése. Az alapítvány működteti Mozart szülőházát és lakóházát múzeumként, amelyek Ausztria leglátogatottabb nevezetességei közé tartoznak. Ezenkívül az alapítvány a zseniális zeneszerző kéziratainak, hangszereinek és leveleinek felbecsülhetetlen értékű gyűjteményét őrzi. A Mozarteum minden év januárjában megrendezi a Mozart-hetet, egy neves klasszikus zenei fesztivált.",
      "ro": "Fundația Internațională Mozarteum din Salzburg are misiunea de a păstra moștenirea lui Wolfgang Amadeus Mozart. Administrează locul de naștere al lui Mozart și reședința Mozart ca muzee, care sunt printre cele mai vizitate atracții din Austria. În plus, fundația deține o colecție neprețuită de autografe, instrumente și scrisori ale genialului compozitor. În fiecare an, în luna ianuarie, Mozarteum organizează Săptămâna Mozart, un festival renumit de muzică clasică.",
      "en": "The International Mozarteum Foundation in Salzburg has set itself the task of preserving the legacy of Wolfgang Amadeus Mozart. It operates Mozart's Birthplace and the Mozart Residence as museums, which are among the most visited sights in Austria. In addition, the foundation holds an invaluable collection of autographs, instruments, and letters of the brilliant composer. Every year in January, the Mozarteum organizes the Mozart Week, a renowned classical music festival."
    },
    "facts": {
      "de": [
        "Die Stiftung Mozarteum wurde 1880 von Bürgern der Stadt Salzburg gegründet.",
        "In Mozarts Geburtshaus in der Getreidegasse kam er 1756 zur Welt.",
        "Das Archiv der Stiftung beherbergt über die Hälfte aller weltweit bekannten Mozart-Dokumente.",
        "Zu den Originalinstrumenten in der Sammlung gehören Mozarts Konzertflügel und seine Violine.",
        "Die Stiftung gibt auch die 'Neue Mozart-Ausgabe' heraus, die wissenschaftlich fundierte Gesamtausgabe seiner Werke.",
        "Das Gebäude der Stiftung Mozarteum besitzt zwei prachtvolle Konzertsäle."
      ],
      "hu": [
        "A Mozarteum Alapítványt 1880-ban alapították Salzburg város polgárai.",
        "Mozart 1756-ban született a Getreidegassén található szülőházában.",
        "Az alapítvány archívuma őrzi az összes világszerte ismert Mozart-dokumentum több mint felét.",
        "A gyűjtemény eredeti hangszerei közé tartozik Mozart koncertzongorája és hegedűje.",
        "Az alapítvány adja ki az 'Új Mozart-kiadást' is, amely műveinek tudományosan megalapozott összkiadása.",
        "A Mozarteum Alapítvány épülete két pompás koncertteremmel rendelkezik."
      ],
      "ro": [
        "Fundația Mozarteum a fost fondată în 1880 de cetățenii din Salzburg.",
        "Mozart s-a născut în 1756 în locul său de naștere din Getreidegasse.",
        "Arhiva fundației găzduiește mai mult de jumătate din toate documentele Mozart cunoscute la nivel mondial.",
        "Instrumentele originale din colecție includ pianul de concert al lui Mozart și vioara sa.",
        "De asemenea, fundația publică „Noua ediție Mozart”, o ediție completă fundamentată științific a lucrărilor sale.",
        "Clădirea Fundației Mozarteum are două săli de concerte magnifice."
      ],
      "en": [
        "The Mozarteum Foundation was founded in 1880 by citizens of the city of Salzburg.",
        "Mozart was born in 1756 in his birthplace in the Getreidegasse.",
        "The foundation's archive houses over half of all known Mozart documents worldwide.",
        "Original instruments in the collection include Mozart's concert grand piano and his violin.",
        "The foundation also publishes the 'New Mozart Edition', the scientifically based complete edition of his works.",
        "The Mozarteum Foundation building has two magnificent concert halls."
      ]
    },
  },
  {
    "id": "at-riegersburg",
    "type": "historical",
    "parent": "AT-6",
    "coords": [
      15.9333,
      46.8833
    ],
    "name": {
      "de": "Riegersburg",
      "hu": "Riegersburg",
      "ro": "Castelul Riegersburg",
      "en": "Riegersburg Castle"
    },
    "image": "/geo-images/austria/riegersburg.webp",
    "description": {
      "de": "Die Riegersburg thront majestätisch auf einem 482 Meter hohen Basaltfelsen eines erloschenen Vulkans in der Südoststeiermark. Sie galt jahrhundertelang als die stärkste Festung der Christenheit und konnte niemals erobert werden. Heute ist die imposante Burg ein beliebtes Ausflugsziel mit mehreren Museen, darunter ein Hexenmuseum. Der Aufstieg kann entweder zu Fuß über historische Burgtore oder bequem per Schrägaufzug erfolgen.",
      "hu": "A Riegersburg fenségesen trónol egy kialudt vulkán 482 méter magas bazaltszikláján Délkelet-Stájerországban. Évszázadokon át a kereszténység legerősebb erődítményének számított, és soha nem tudták elfoglalni. Ma az impozáns vár népszerű kirándulóhely több múzeummal, köztük egy boszorkánymúzeummal. A feljutás történhet gyalog a történelmi várkapukon keresztül, vagy kényelmesen siklóval.",
      "ro": "Castelul Riegersburg stă maiestuos pe o stâncă de bazalt de 482 de metri înălțime a unui vulcan stins din sud-estul Stiriei. Timp de secole a fost considerată cea mai puternică fortăreață din creștinătate și nu a putut fi cucerită niciodată. Astăzi, impunătorul castel este o destinație populară, cu mai multe muzee, inclusiv un muzeu al vrăjitoarelor. Urcarea se poate face fie pe jos prin porțile istorice ale castelului, fie confortabil cu un lift înclinat.",
      "en": "Riegersburg Castle sits majestically on a 482-meter-high basalt rock of an extinct volcano in southeastern Styria. For centuries it was considered the strongest fortress in Christendom and could never be conquered. Today, the imposing castle is a popular excursion destination with several museums, including a witch museum. The ascent can be done either on foot through historic castle gates or comfortably via an inclined elevator."
    },
    "facts": {
      "de": [
        "Die Burg wurde im 11. Jahrhundert erstmals urkundlich erwähnt.",
        "Sie besitzt eine 3 Kilometer lange Wehrmauer mit elf Basteien und sieben Toren.",
        "Die Riegersburg gehört seit 1822 der Fürstenfamilie Liechtenstein.",
        "Das Hexenmuseum in der Burg thematisiert die dunkle Zeit der Hexenprozesse in der Steiermark im 17. Jahrhundert.",
        "Unter der Burg gibt es eine Greifvogelwarte, die spektakuläre Flugschauen anbietet.",
        "Die Burg trotzte sowohl den Türken- als auch den Kuruzzen-Einfällen."
      ],
      "hu": [
        "A várat először a 11. században említik írásos emlékek.",
        "3 kilométer hosszú védőfallal rendelkezik, tizenegy bástyával és hét kapuval.",
        "A Riegersburg 1822 óta a Liechtenstein hercegi család tulajdona.",
        "A várban található boszorkánymúzeum a 17. századi stájerországi boszorkányperek sötét időszakát dolgozza fel.",
        "A vár alatt található egy ragadozómadár-állomás, amely látványos röptetéseket kínál.",
        "A vár dacolt a török és a kuruc betörésekkel is."
      ],
      "ro": [
        "Castelul a fost menționat pentru prima dată într-un document din secolul al XI-lea.",
        "Are un zid de apărare de 3 kilometri lungime cu unsprezece bastioane și șapte porți.",
        "Riegersburg aparține familiei princiare de Liechtenstein din 1822.",
        "Muzeul vrăjitoarelor din castel explorează vremurile întunecate ale proceselor de vrăjitoare din Stiria secolului al XVII-lea.",
        "Sub castel există un sanctuar de păsări de pradă care oferă spectacole de zbor spectaculoase.",
        "Castelul a sfidat atât invaziile turcești, cât și pe cele ale curuților."
      ],
      "en": [
        "The castle was first mentioned in a document in the 11th century.",
        "It has a 3-kilometer-long defensive wall with eleven bastions and seven gates.",
        "Riegersburg has belonged to the princely family of Liechtenstein since 1822.",
        "The witch museum in the castle explores the dark times of the witch trials in Styria in the 17th century.",
        "Below the castle there is a bird of prey sanctuary that offers spectacular flight shows.",
        "The castle defied both the Turkish and the Kuruc invasions."
      ]
    },
  },
  {
    "id": "at-kufstein-fortress",
    "type": "historical",
    "parent": "AT-7",
    "coords": [
      12.1667,
      47.5833
    ],
    "name": {
      "de": "Festung Kufstein",
      "hu": "Kufsteini vár",
      "ro": "Fortăreața Kufstein",
      "en": "Kufstein Fortress"
    },
    "image": "/geo-images/austria/kufstein-fortress.webp",
    "description": {
      "de": "Die Festung Kufstein ist das Wahrzeichen der Stadt Kufstein in Tirol und thront weithin sichtbar auf einem Hügel über dem Fluss Inn. Jahrhundertelang war sie ein heiß umkämpftes Grenzbastion zwischen Bayern und Tirol. Heute ist sie ein faszinierendes Geschichtserlebnis und dient als Kulisse für zahlreiche kulturelle Veranstaltungen. Ein besonderes Highlight ist die Heldenorgel, die größte Freiluftorgel der Welt, deren Klang täglich über die Stadt schallt.",
      "hu": "A Kufsteini vár a tiroli Kufstein város jelképe, és messziről láthatóan magasodik egy dombon az Inn folyó felett. Évszázadokon át hevesen vitatott határerődítmény volt Bajorország és Tirol között. Ma lenyűgöző történelmi élményt nyújt, és számos kulturális rendezvény helyszínéül szolgál. Különleges látványossága a Hősök orgonája, a világ legnagyobb szabadtéri orgonája, amelynek hangja naponta csendül fel a város felett.",
      "ro": "Fortăreața Kufstein este simbolul orașului Kufstein din Tirol și tronează vizibil de departe pe un deal deasupra râului Inn. Timp de secole a fost un bastion de graniță aprig disputat între Bavaria și Tirol. Astăzi este o experiență istorică fascinantă și servește ca fundal pentru numeroase evenimente culturale. Un punct de atracție deosebit este Orga Eroilor (Heldenorgel), cea mai mare orgă în aer liber din lume, al cărei sunet răsună în oraș în fiecare zi.",
      "en": "Kufstein Fortress is the landmark of the city of Kufstein in Tyrol and towers visibly from afar on a hill above the river Inn. For centuries it was a hotly contested border bastion between Bavaria and Tyrol. Today it is a fascinating historical experience and serves as a backdrop for numerous cultural events. A special highlight is the Heroes' Organ (Heldenorgel), the world's largest outdoor organ, whose sound echoes across the city every day."
    },
    "facts": {
      "de": [
        "Die Festung wurde im 13. Jahrhundert erstmals urkundlich als Eigentum der Bischöfe von Regensburg erwähnt.",
        "Kaiser Maximilian I. ließ die Festung im 16. Jahrhundert mit dem runden 'Kaiserturm' massiv ausbauen.",
        "Im Kaiserturm befand sich ein gefürchtetes Staatsgefängnis, insbesondere für ungarische Dissidenten im 19. Jahrhundert.",
        "Die Heldenorgel hat 4.948 Pfeifen und wird täglich um 12 Uhr gespielt.",
        "Eine moderne Panoramabahn ermöglicht einen bequemen Aufstieg zur Festung.",
        "Die Festungsarena mit Überdachung ist ein beliebter Ort für Konzerte und Operetten."
      ],
      "hu": [
        "A várat először a 13. században említik írásban, mint a regensburgi püspökök tulajdonát.",
        "I. Miksa császár a 16. században jelentősen kibővíttette az erődöt a kerek 'Császártoronnyal'.",
        "A Császártoronyban egy rettegett állami börtön működött, különösen magyar disszidensek számára a 19. században.",
        "A Hősök orgonája 4948 síppal rendelkezik, és minden nap 12 órakor szólal meg.",
        "Egy modern panorámafelvonó teszi lehetővé a kényelmes feljutást a várba.",
        "A fedett aréna a várban kedvelt helyszíne koncerteknek és operetteknek."
      ],
      "ro": [
        "Fortăreața a fost menționată pentru prima dată într-un document din secolul al XIII-lea ca proprietate a episcopilor de Regensburg.",
        "Împăratul Maximilian I a extins masiv fortăreața în secolul al XVI-lea cu „Turnul Împăratului” (Kaiserturm) rotund.",
        "În Kaiserturm a existat o temută închisoare de stat, în special pentru dizidenții maghiari în secolul al XIX-lea.",
        "Orga Eroilor are 4.948 de tuburi și este cântată zilnic la ora 12.",
        "O telegondolă panoramică modernă permite o ascensiune confortabilă spre fortăreață.",
        "Arena acoperită a fortăreței este un loc popular pentru concerte și operete."
      ],
      "en": [
        "The fortress was first mentioned in a document in the 13th century as the property of the Bishops of Regensburg.",
        "Emperor Maximilian I had the fortress massively expanded in the 16th century with the round 'Emperor's Tower' (Kaiserturm).",
        "The Kaiserturm housed a dreaded state prison, especially for Hungarian dissidents in the 19th century.",
        "The Heroes' Organ has 4,948 pipes and is played daily at 12 noon.",
        "A modern panorama funicular allows for a comfortable ascent to the fortress.",
        "The roofed fortress arena is a popular venue for concerts and operettas."
      ]
    },
  },
  {
    "id": "at-kreuzenstein",
    "type": "historical",
    "parent": "AT-3",
    "coords": [
      16.3167,
      48.3833
    ],
    "name": {
      "de": "Burg Kreuzenstein",
      "hu": "Kreuzenstein vára",
      "ro": "Castelul Kreuzenstein",
      "en": "Kreuzenstein Castle"
    },
    "image": "/geo-images/austria/kreuzenstein.webp",
    "description": {
      "de": "Die Burg Kreuzenstein nahe Wien ist eine beeindruckende Schauburg, die im 19. Jahrhundert auf den Resten einer mittelalterlichen Burgruine erbaut wurde. Der Polarforscher Graf Nepomuk Wilczek ließ sie als idealisierte Ritterburg rekonstruieren, wobei er architektonische Elemente aus ganz Europa zusammentrug. Heute begeistert die Burg mit einer umfassenden Waffensammlung, einer historischen Rüstkammer und originalen mittelalterlichen Möbeln. Sie diente bereits mehrfach als Kulisse für internationale Filmproduktionen.",
      "hu": "A Bécshez közeli Kreuzenstein vára egy lenyűgöző látványvár, amelyet a 19. században építettek egy középkori várrom romjain. Nepomuk Wilczek gróf, sarkkutató építtette újjá idealizált lovagvárként, egész Európából összegyűjtött építészeti elemek felhasználásával. Ma a vár átfogó fegyvergyűjteménnyel, történelmi fegyvertárral és eredeti középkori bútorokkal nyűgözi le a látogatókat. Már többször is szolgált nemzetközi filmprodukciók forgatási helyszínéül.",
      "ro": "Castelul Kreuzenstein de lângă Viena este un castel spectaculos impresionant care a fost construit în secolul al XIX-lea pe rămășițele unui castel medieval în ruină. Exploratorul polar contele Nepomuk Wilczek l-a reconstruit ca un castel al cavalerilor idealizat, adunând elemente arhitecturale din toată Europa. Astăzi, castelul impresionează printr-o colecție cuprinzătoare de arme, un depozit de arme istoric și mobilier medieval original. A servit de câteva ori ca fundal pentru producții internaționale de film.",
      "en": "Kreuzenstein Castle near Vienna is an impressive show castle that was built in the 19th century on the remains of a ruined medieval castle. The polar explorer Count Nepomuk Wilczek had it reconstructed as an idealized knight's castle, gathering architectural elements from all over Europe. Today, the castle impresses with a comprehensive collection of weapons, an historical armory, and original medieval furniture. It has already served as a backdrop for international film productions on several occasions."
    },
    "facts": {
      "de": [
        "Die ursprüngliche Burg Kreuzenstein wurde während des Dreißigjährigen Krieges 1645 von schwedischen Truppen zerstört.",
        "Der Wiederaufbau der Burg dauerte von 1874 bis 1906.",
        "Die Burg wurde aus vielen originalen mittelalterlichen Bauteilen aus ganz Europa zusammengesetzt (sogenannte Spolien).",
        "Auf der Burg befindet sich eine der größten privaten Rüstkammern Europas.",
        "Die Adlerwarte Kreuzenstein bietet spektakuläre Freiflugvorführungen von Greifvögeln.",
        "Filme wie 'Die drei Musketiere' (1993) und 'Der letzte Tempelritter' mit Nicolas Cage wurden hier gedreht."
      ],
      "hu": [
        "Az eredeti Kreuzenstein várát a harmincéves háború alatt, 1645-ben a svéd csapatok pusztították el.",
        "A vár újjáépítése 1874-től 1906-ig tartott.",
        "A várat számos eredeti középkori építőelemből, egész Európából származó darabokból állították össze (ún. spóliák).",
        "A várban található Európa egyik legnagyobb magán fegyvertára.",
        "A Kreuzenstein Sasfészek látványos ragadozómadár-röptetéseket kínál.",
        "Itt forgatták többek között 'A három testőr' (1993) és a Nicolas Cage főszereplésével készült 'Boszorkányvadászat' (Der letzte Tempelritter) című filmeket."
      ],
      "ro": [
        "Castelul original Kreuzenstein a fost distrus de trupele suedeze în 1645 în timpul Războiului de Treizeci de Ani.",
        "Reconstrucția castelului a durat din 1874 până în 1906.",
        "Castelul a fost asamblat din multe componente medievale originale din toată Europa (așa-numitele spolii).",
        "Castelul găzduiește unul dintre cele mai mari depozite private de arme din Europa.",
        "Sanctuarul de vulturi Kreuzenstein oferă demonstrații spectaculoase de zbor liber ale păsărilor de pradă.",
        "Aici au fost filmate filme precum „Cei trei mușchetari” (1993) și „Anotimpul vrăjitoarei” cu Nicolas Cage."
      ],
      "en": [
        "The original Kreuzenstein Castle was destroyed by Swedish troops in 1645 during the Thirty Years' War.",
        "The reconstruction of the castle lasted from 1874 to 1906.",
        "The castle was assembled from many original medieval building components from all over Europe (so-called spolia).",
        "The castle houses one of the largest private armories in Europe.",
        "The Kreuzenstein eagle sanctuary offers spectacular free-flight demonstrations of birds of prey.",
        "Movies like 'The Three Musketeers' (1993) and 'Season of the Witch' starring Nicolas Cage were filmed here."
      ]
    }
  }
  ,
  {
    id: "at-historic-centre-vienna",
    type: "historical",
    parent: "AT",
    coords: [16.3738, 48.2082],
    name: { de: "Historisches Zentrum von Wien", hu: "Bécs történelmi központja", ro: "Centrul istoric al Vienei", en: "Historic Centre of Vienna" },
    image: "/geo-images/austria/historic-centre-vienna.webp",
    description: {
      de: "Das historische Zentrum von Wien bündelt Kaisertradition, Barockarchitektur und UNESCO-Flair auf engem Raum. Zwischen Stephansdom, Hofburg und Ringstraße zeigt sich die Stadt von ihrer repräsentativsten Seite. Jahrhunderte alter Handel, Musik und Hofkultur prägen hier bis heute die Atmosphäre. Für Suchanfragen zu Wien, UNESCO und Altstadt ist dieses Ziel besonders stark.",
      hu: "Bécs történelmi központja egy szűk területen sűríti össze a császári hagyományt, a barokk építészetet és az UNESCO-hangulatot. A Stephansdom, a Hofburg és a Ringstraße között a város a legreprezentatívabb arcát mutatja. Az évszázados kereskedelem, zene és udvari kultúra ma is meghatározza a hangulatot. A Bécs, UNESCO és óváros keresésekhez ez a célpont különösen erős.",
      ro: "Centrul istoric al Vienei reunește într-un spațiu compact tradiția imperială, arhitectura barocă și atmosfera UNESCO. Între Stephansdom, Hofburg și Ringstraße, orașul își arată cea mai reprezentativă față. Comerțul, muzica și cultura de curte veche de secole încă definesc atmosfera locului. Pentru căutări despre Viena, UNESCO și centrul vechi, această destinație este foarte puternică.",
      en: "The Historic Centre of Vienna brings imperial tradition, Baroque architecture, and UNESCO atmosphere together in a compact area. Between St. Stephen's Cathedral, the Hofburg, and the Ringstrasse, the city shows its most representative side. Centuries of trade, music, and court culture still define the atmosphere today. For searches about Vienna, UNESCO, and the old town, this destination is especially strong."
    },
    facts: {
      de: ["Teil des UNESCO-Welterbes Altstadt von Wien.", "Hier liegen Stephansdom, Hofburg und Ringstraße dicht beieinander.", "Die historische Innenstadt erzählt die Habsburger- und Musikgeschichte.", "Der Bereich ist ein Kerngebiet des Wiener Städtetourismus.", "Viele Besucher starten hier ihre Wien-Erkundung."],
      hu: ["Az UNESCO-világörökség része, Bécs óvárosával együtt.", "Itt található egymáshoz közel a Stephansdom, a Hofburg és a Ringstraße.", "A történelmi belváros a Habsburgok és a zene történetét meséli el.", "A terület a bécsi városi turizmus egyik magterülete.", "Sok látogató innen kezdi Bécs felfedezését."],
      ro: ["Face parte din patrimoniul UNESCO al centrului vechi al Vienei.", "Aici se află foarte aproape Stephansdom, Hofburg și Ringstraße.", "Centrul istoric povestește despre Habsburgi și istoria muzicii.", "Zona este un nucleu al turismului urban vienez.", "Mulți vizitatori își încep explorarea Vienei de aici."],
      en: ["Part of the UNESCO World Heritage old town of Vienna.", "St. Stephen's Cathedral, the Hofburg, and the Ringstrasse lie close together here.", "The historic center tells the story of the Habsburgs and music history.", "The area is a core zone of Vienna's city tourism.", "Many visitors start exploring Vienna here."]
    },
  },
  {
    id: "at-aspern-essling-battlefield",
    type: "historical",
    parent: "AT",
    coords: [16.4938, 48.2270],
    name: { de: "Schlachtfeld Aspern-Essling", hu: "Aspern-Essling csatamező", ro: "Câmpul de luptă Aspern-Essling", en: "Aspern-Essling Battlefield" },
    image: "/geo-images/austria/aspern-essling-battlefield.webp",
    description: {
      de: "Das Schlachtfeld Aspern-Essling erinnert an eine der berühmtesten Auseinandersetzungen der napoleonischen Zeit in Österreich. 1809 stoppte hier das österreichische Heer unter Erzherzog Karl erstmals Napoleons Vormarsch bei Wien. Die Donau-Inseln und das flache Gelände machen die militärische Dimension bis heute gut nachvollziehbar. Als historischer SEO-Ort verbindet Aspern-Essling Kriegsgeschichte, Wien-Nähe und Erinnerungskultur.",
      hu: "Az Aspern-Essling csatamező Ausztria napóleoni korszakának egyik leghíresebb ütközetére emlékeztet. 1809-ben itt állította meg először az osztrák hadsereg Károly főherceg vezetésével Napóleon bécsi előrenyomulását. A Duna-szigetek és a sík terep ma is jól érzékeltetik a katonai helyzetet. Történelmi SEO-helyként Aspern-Essling a hadtörténelmet, Bécs közelségét és az emlékezetkultúrát köti össze.",
      ro: "Câmpul de luptă Aspern-Essling amintește de una dintre cele mai cunoscute confruntări ale epocii napoleoniene din Austria. În 1809, armata austriacă condusă de arhiducele Karl a oprit aici pentru prima dată înaintarea lui Napoleon spre Viena. Insulele Dunării și terenul plat fac și astăzi ușor de înțeles dimensiunea militară a locului. Ca loc SEO istoric, Aspern-Essling leagă istoria războiului, apropierea de Viena și cultura memoriei.",
      en: "The Aspern-Essling Battlefield recalls one of the most famous clashes of Austria's Napoleonic era. In 1809, the Austrian army under Archduke Charles stopped Napoleon's advance toward Vienna here for the first time. The Danube islands and flat terrain still make the military scale easy to understand today. As a historical SEO spot, Aspern-Essling connects war history, proximity to Vienna, and remembrance culture."
    },
    facts: {
      de: ["Ort der Schlacht von Aspern und Essling 1809.", "Erster großer Rückschlag Napoleons gegen Österreich.", "Eng verbunden mit Erzherzog Karl und der Donauübergangsgeschichte.", "Das Gelände liegt heute nahe den Wiener Donau-Auen.", "Wichtig für militärgeschichtliche Bildungsangebote."],
      hu: ["Az 1809-es aspern-esslingi csata helyszíne.", "Napóleon első nagy osztrák vereségeinek egyike.", "Szorosan kapcsolódik Károly főherceghez és a dunai átkelés történetéhez.", "A terület ma a bécsi Duna-ártér közelében fekszik.", "Fontos a hadtörténeti oktatási programok számára."],
      ro: ["Locul bătăliei de la Aspern și Essling din 1809.", "Una dintre primele mari înfrângeri ale lui Napoleon în fața Austriei.", "Legat strâns de arhiducele Karl și de istoria trecerii Dunării.", "Zona se află astăzi aproape de luncile Dunării din Viena.", "Important pentru programe educaționale de istorie militară."],
      en: ["Site of the 1809 Battle of Aspern and Essling.", "One of Napoleon's first major setbacks against Austria.", "Closely linked to Archduke Charles and the history of crossing the Danube.", "The area lies today near Vienna's Danube floodplains.", "Important for military history education programs."]
    },
  },
  {
    id: "at-mauthausen-memorial",
    type: "historical",
    parent: "AT",
    coords: [14.5163, 48.2580],
    name: { de: "Mauthausen-Gedenkstätte", hu: "Mauthausen-emlékhely", ro: "Memorialul Mauthausen", en: "Mauthausen Memorial" },
    image: "/geo-images/austria/mauthausen-memorial.webp",
    description: {
      de: "Die Mauthausen-Gedenkstätte ist einer der wichtigsten Orte des Erinnerns in Österreich und Europa. Auf dem ehemaligen Lagergelände wird heute die Geschichte von Verfolgung, Zwangsarbeit und Befreiung eindringlich vermittelt. Der Ort liegt nahe der Donau und nutzt die historische Topografie für eine klare, respektvolle Vermittlung. Als historischer Suchbegriff steht Mauthausen für Gedenken, Bildung und Verantwortung.",
      hu: "A Mauthausen-emlékhely Ausztria és Európa egyik legfontosabb emlékező helye. Az egykori tábor területén ma megrázó módon mutatják be az üldöztetés, a kényszermunka és a felszabadítás történetét. A hely a Duna közelében fekszik, és a történelmi topográfiát jól használja a tiszteletteljes bemutatásra. Történelmi keresőkifejezésként Mauthausen az emlékezetet, az oktatást és a felelősséget jelenti.",
      ro: "Memorialul Mauthausen este unul dintre cele mai importante locuri ale memoriei din Austria și Europa. Pe fosta zonă a lagărului, istoria persecuției, a muncii forțate și a eliberării este transmisă astăzi într-un mod puternic și clar. Locul se află aproape de Dunăre și folosește topografia istorică pentru o prezentare respectuoasă. Ca termen de căutare istoric, Mauthausen înseamnă comemorare, educație și responsabilitate.",
      en: "The Mauthausen Memorial is one of the most important places of remembrance in Austria and Europe. On the former camp grounds, the history of persecution, forced labor, and liberation is presented in a powerful and clear way today. The site lies near the Danube and uses its historic topography for respectful interpretation. As a historical search term, Mauthausen stands for remembrance, education, and responsibility."
    },
    facts: {
      de: ["Gedenkstätte auf dem Gelände des ehemaligen KZ Mauthausen.", "Liegt nahe der Donau in Oberösterreich.", "Die Steinbruchgeschichte ist Teil der Dokumentation vor Ort.", "Internationaler Lernort für Erinnerungskultur.", "Ein zentraler Ort gegen das Vergessen."],
      hu: ["Az egykori mauthauseni koncentrációs tábor területén áll.", "Felső-Ausztriában, a Duna közelében található.", "A kőbánya-történet a helyszíni bemutatás része.", "Nemzetközi tanulóhely az emlékezetkultúrához.", "Központi hely a feledés elleni emlékezésben."],
      ro: ["Memorial pe terenul fostului lagăr de la Mauthausen.", "Se află în Austria Superioară, aproape de Dunăre.", "Istoria carierei face parte din prezentarea de la fața locului.", "Loc internațional de învățare pentru cultura memoriei.", "Un loc central în lupta împotriva uitării."],
      en: ["Memorial on the grounds of the former Mauthausen concentration camp.", "Located in Upper Austria near the Danube.", "The quarry history is part of the on-site interpretation.", "An international learning site for remembrance culture.", "A central place against forgetting."]
    },
  },
  {
    id: "at-burg-seebenstein",
    type: "historical",
    parent: "AT",
    coords: [16.1297, 47.6829],
    name: { de: "Burg Seebenstein", hu: "Seebenstein vára", ro: "Castelul Seebenstein", en: "Seebenstein Castle" },
    image: "/geo-images/austria/burg-seebenstein.webp",
    description: {
      de: "Die Burg Seebenstein erhebt sich markant über dem Wiener Alpenvorland und ist ein klassisches Ziel für Burgen-SEO in Niederösterreich. Die mittelalterliche Anlage wirkt durch ihre Lage auf dem Felsen besonders wehrhaft und fotogen. Heute begeistert sie mit Geschichte, Aussicht und einer typischen Burgatmosphäre im Süden des Landes. Für Suchanfragen zu Burgen, Ausflügen und Semmering-Nähe ist Seebenstein sehr geeignet.",
      hu: "Seebenstein vára látványosan emelkedik a bécsi Alpok előtere fölé, és klasszikus osztrák vár-SEO célpont Alsó-Ausztriában. A középkori erőd a sziklára épített fekvésének köszönhetően különösen védett és fotogén. Ma történelmével, kilátásával és a dél-ausztriai várhangulattal vonzza a látogatókat. Várakra, kirándulásokra és Semmering-közeli keresésekre Seebenstein kiváló.",
      ro: "Castelul Seebenstein se ridică spectaculos deasupra zonei alpine din jurul Vienei și este o destinație clasică pentru SEO despre castele în Austria Inferioară. Fortificația medievală pare deosebit de defensivă și fotogenică datorită poziției sale pe stâncă. Astăzi impresionează prin istorie, panoramă și atmosfera tipică de castel din sudul țării. Pentru căutări despre castele, excursii și apropierea de Semmering, Seebenstein este foarte potrivit.",
      en: "Seebenstein Castle rises prominently above the Vienna Alpine foothills and is a classic castle SEO target in Lower Austria. The medieval fortress looks especially defensive and photogenic thanks to its rock-top position. Today it draws visitors with its history, views, and classic castle atmosphere in the south of the country. For searches about castles, day trips, and Semmering proximity, Seebenstein is very suitable."
    },
    facts: {
      de: ["Liegt im südlichen Niederösterreich.", "Fotogen auf einem Felsen über dem Ort.", "Beliebtes Ziel für Burgen- und Wanderfans.", "Die Nähe zum Semmering erhöht den Ausflugswert.", "Typisches Beispiel für eine kleine, wehrhafte Höhenburg."],
      hu: ["Dél-Alsó-Ausztriában található.", "A település fölötti sziklán nagyon fotogén.", "Népszerű célpont vár- és túrarajongóknak.", "A Semmering közelsége növeli a kirándulási értéket.", "Tipikus példája a kis, erős hegyi várnak."],
      ro: ["Se află în sudul Austriei Inferioare.", "Foarte fotogenic pe o stâncă deasupra localității.", "Destinație populară pentru fani ai castelelor și drumețiilor.", "Apropierea de Semmering crește valoarea de excursie.", "Exemplu tipic de mic castel fortificat de înălțime."],
      en: ["Located in southern Lower Austria.", "Highly photogenic on a rock above the town.", "A popular destination for castle and hiking fans.", "Its proximity to Semmering increases its day-trip appeal.", "A classic example of a small fortified hill castle."]
    },
  },
  {
    id: "at-burg-aggstein",
    type: "historical",
    parent: "AT",
    coords: [15.4369, 48.3094],
    name: { de: "Burg Aggstein", hu: "Aggstein vára", ro: "Castelul Aggstein", en: "Aggstein Castle" },
    image: "/geo-images/austria/burg-aggstein.webp",
    description: {
      de: "Burg Aggstein ist eine der eindrucksvollsten Ruinen in der Wachau und ein Magnet für Mittelalter- und Donautourismus. Hoch über dem Fluss thront die Anlage auf einem Felsrücken und bietet ein starkes Panorama über das UNESCO-Land. Die Burg erzählt Geschichten von Rittertum, Kontrolle der Handelswege und spektakulärer Ruinenromantik. Für historische Suchbegriffe rund um Wachau und Donauschifffahrt ist Aggstein ein Top-Name.",
      hu: "Aggstein vára a Wachau egyik leglátványosabb romja, és vonzza a középkor- és Duna-turizmust. Magasan a folyó fölött, egy sziklagerincen áll, és erős panorámát ad az UNESCO-tájra. A vár lovagokról, kereskedelmi útvonalak ellenőrzéséről és látványos romromantikáról mesél. A Wachau és a dunai hajózás történelmi kereséseiben Aggstein top név.",
      ro: "Castelul Aggstein este una dintre cele mai impresionante ruine din Wachau și un magnet pentru turismul medieval și de pe Dunăre. Deasupra fluviului, fortăreața tronează pe o creastă stâncoasă și oferă o panoramă puternică asupra peisajului UNESCO. Castelul povestește despre cavalerism, controlul rutelor comerciale și romantismul spectaculos al ruinelor. Pentru căutări istorice despre Wachau și croaziere pe Dunăre, Aggstein este un nume de top.",
      en: "Aggstein Castle is one of the most impressive ruins in the Wachau and a magnet for medieval and Danube tourism. High above the river, the fortress sits on a rocky ridge and offers a strong panorama over the UNESCO landscape. The castle tells stories of knighthood, control of trade routes, and dramatic ruin romance. For historical searches around the Wachau and Danube cruising, Aggstein is a top name."
    },
    facts: {
      de: ["Liegt in der Wachau über der Donau.", "Eine der bekanntesten Burgruinen Niederösterreichs.", "Starker Bezug zu Handel, Kontrolle und Rittergeschichten.", "Beliebtes Fotomotiv für Donaureisen.", "Wichtig für Mittelalter- und Burgenmarketing."],
      hu: ["A Wachau felett, a Duna fölött található.", "Alsó-Ausztria egyik legismertebb várromja.", "Erős kapcsolat a kereskedelemmel, az ellenőrzéssel és a lovag-történetekkel.", "Népszerű fotótéma a dunai utazásoknál.", "Fontos a középkor- és városmarketingben."],
      ro: ["Se află în Wachau, deasupra Dunării.", "Una dintre cele mai cunoscute ruine de castel din Austria Inferioară.", "Legătură puternică cu comerțul, controlul și poveștile cavalerilor.", "Subiect foto popular pentru călătoriile pe Dunăre.", "Important pentru marketingul medieval și al castelelor."],
      en: ["Located in the Wachau above the Danube.", "One of Lower Austria's best-known castle ruins.", "Strongly linked to trade, control, and knight stories.", "A popular photo motif for Danube trips.", "Important for medieval and castle-themed marketing."]
    },
  },
  {
    id: "at-burg-golling",
    type: "historical",
    parent: "AT",
    coords: [13.1599, 47.6009],
    name: { de: "Burg Golling", hu: "Golling vára", ro: "Castelul Golling", en: "Golling Castle" },
    image: "/geo-images/austria/burg-golling.webp",
    description: {
      de: "Burg Golling bewacht das Tor zum Tennengau und ist ein schönes Beispiel für eine alpine Höhenburg in Salzburg. Die Anlage liegt markant über dem Ort Golling und gibt dem Tal einen historischen Mittelpunkt. Heute ist die Burg ein attraktives Ziel für Kultur, Aussicht und regionale Geschichtserzählung. Wer nach Salzburg, Burgen und Ausflugsideen im Tennengau sucht, findet hier ein starkes Ziel.",
      hu: "Golling vára a Tennengau kapuját őrzi, és szép példája a salzburgi alpesi hegyi várnak. Az erőd látványosan emelkedik Golling fölé, és történelmi központot ad a völgynek. Ma a vár kulturális, kilátó- és helytörténeti célpontként vonzó. Aki Salzburg, várak és Tennengau-kirándulások után keres, itt erős találatot kap.",
      ro: "Castelul Golling păzește poarta spre Tennengau și este un exemplu frumos de castel montan alpin din Salzburg. Fortificația se ridică spectaculos deasupra localității Golling și oferă văii un centru istoric. Astăzi, castelul este o destinație atractivă pentru cultură, panoramă și istorie regională. Pentru căutări despre Salzburg, castele și excursii în Tennengau, acesta este un punct foarte bun.",
      en: "Golling Castle guards the gateway to the Tennengau and is a fine example of an Alpine hill castle in Salzburg. The fortress stands prominently above Golling and gives the valley a historic focal point. Today the castle is an attractive destination for culture, views, and regional history. For searches about Salzburg, castles, and Tennengau day trips, this is a strong spot."
    },
    facts: {
      de: ["Wichtige Höhenburg im Tennengau.", "Liegt über dem Ort Golling an der Salzach.", "Starker Bezug zu alpiner Regionalgeschichte.", "Beliebtes Ziel für Aussicht und Kultur.", "Gut kombinierbar mit den Salzburger Ausflugsrouten."],
      hu: ["Fontos hegyi vár a Tennengauban.", "Golling fölött, a Salzach felett fekszik.", "Erős kapcsolat az alpesi helytörténettel.", "Népszerű kilátó- és kulturális célpont.", "Jól kombinálható a salzburgi kirándulóútvonalakkal."],
      ro: ["Castel important de înălțime în Tennengau.", "Se află deasupra localității Golling, pe Salzach.", "Legătură puternică cu istoria regională alpină.", "Destinație populară pentru panoramă și cultură.", "Ușor de combinat cu rutele de excursii din Salzburg."],
      en: ["An important hill castle in the Tennengau.", "Located above Golling on the Salzach River.", "Strongly linked to Alpine regional history.", "A popular destination for views and culture.", "Easy to combine with Salzburg excursion routes."]
    },
  },
  {
    id: "at-burg-heidenreichstein",
    type: "historical",
    parent: "AT",
    coords: [15.1228, 48.8641],
    name: { de: "Burg Heidenreichstein", hu: "Heidenreichstein vára", ro: "Castelul Heidenreichstein", en: "Heidenreichstein Castle" },
    image: "/geo-images/austria/burg-heidenreichstein.webp",
    description: {
      de: "Burg Heidenreichstein ist eine der bekanntesten Wasserburgen Österreichs und ein Musterbeispiel für das Waldviertel. Das Schloss und seine Gräben zeigen, wie eng Verteidigung, Wasser und regionale Baukunst zusammenhängen. Besucher erleben hier ein authentisches Burgenbild mit starkem Fotofaktor und viel Historie. Für Waldviertel-, Burg- und Niederösterreich-SEO ist Heidenreichstein ideal.",
      hu: "Heidenreichstein vára Ausztria egyik legismertebb vízi vára és a Waldviertel mintapéldája. A kastély és az árkok jól mutatják, mennyire összefonódik a védelem, a víz és a helyi építészet. A látogatók itt hiteles várképet kapnak erős fotóértékkel és sok történelemmel. Waldviertel-, vár- és Alsó-Ausztria SEO-hoz Heidenreichstein ideális.",
      ro: "Castelul Heidenreichstein este unul dintre cele mai cunoscute castele cu apă din Austria și un exemplu tipic pentru Waldviertel. Castelul și șanțurile sale arată cât de strâns sunt legate apărarea, apa și arhitectura regională. Vizitatorii primesc aici o imagine autentică de castel, cu mult potențial foto și multă istorie. Pentru SEO despre Waldviertel, castele și Austria Inferioară, Heidenreichstein este ideal.",
      en: "Heidenreichstein Castle is one of Austria's best-known moated castles and a model example of the Waldviertel. The castle and its moats show how defense, water, and regional building tradition are tightly linked. Visitors get an authentic castle experience here with strong photo appeal and plenty of history. For Waldviertel, castle, and Lower Austria SEO, Heidenreichstein is ideal."
    },
    facts: {
      de: ["Eine der bekanntesten Wasserburgen Österreichs.", "Liegt im nördlichen Waldviertel.", "Die Gräben sind ein markantes Teil des Ensembles.", "Das Schloss prägt den historischen Ortskern.", "Stark für Familien- und Kulturbesuche."],
      hu: ["Ausztria egyik legismertebb vízi vára.", "Az északi Waldviertelben található.", "Az árkok az együttes meghatározó elemei.", "A kastély formálja a történelmi központot.", "Erős célpont családi és kulturális látogatásokhoz."],
      ro: ["Unul dintre cele mai cunoscute castele cu apă din Austria.", "Se află în nordul regiunii Waldviertel.", "Șanțurile sunt o parte definitorie a ansamblului.", "Castelul marchează centrul istoric al localității.", "Puternic pentru vizite de familie și culturale."],
      en: ["One of Austria's best-known moated castles.", "Located in the northern Waldviertel.", "The moats are a defining part of the ensemble.", "The castle shapes the historic center of the town.", "Strong for family and cultural visits."]
    },
  },
  {
    id: "at-burg-oberkapfenberg",
    type: "historical",
    parent: "AT",
    coords: [15.2996, 47.4466],
    name: { de: "Burg Oberkapfenberg", hu: "Oberkapfenberg vára", ro: "Castelul Oberkapfenberg", en: "Oberkapfenberg Castle" },
    image: "/geo-images/austria/burg-oberkapfenberg.webp",
    description: {
      de: "Burg Oberkapfenberg wacht über das Mürztal und ist ein eindrucksvoller historischer Blickfang in der Steiermark. Die Höhenlage macht die Burg zu einem markanten Orientierungspunkt zwischen Stadt, Tal und Bergland. Heute ist die Anlage ein beliebtes Ziel für Mittelalter-Feeling, Veranstaltungen und Panoramablicke. Für historisches Tourismus-SEO in der Obersteiermark ist sie besonders attraktiv.",
      hu: "Oberkapfenberg vára őrzi a Mürztalt, és lenyűgöző történelmi látványosság Stájerországban. A magas fekvés miatt a vár kiemelkedő tájékozódási pont a város, a völgy és a hegyvidék között. Ma a vár kedvelt helyszín középkori hangulathoz, rendezvényekhez és panorámához. Felső-stájerországi történelmi turizmus SEO-hoz különösen vonzó.",
      ro: "Castelul Oberkapfenberg veghează asupra văii Mürz și este un punct de reper istoric impresionant în Stiria. Poziția înaltă face din castel un reper clar între oraș, vale și munți. Astăzi, ansamblul este o destinație populară pentru atmosferă medievală, evenimente și panorame. Pentru SEO despre turism istoric în Stiria Superioară, este deosebit de atractiv.",
      en: "Oberkapfenberg Castle watches over the Mürz Valley and is an impressive historic landmark in Styria. Its elevated position makes it a clear reference point between town, valley, and mountains. Today the complex is a popular destination for medieval atmosphere, events, and panoramic views. For historical tourism SEO in Upper Styria, it is especially attractive."
    },
    facts: {
      de: ["Liegt über Kapfenberg im Mürztal.", "Markanter historischer Punkt in der Obersteiermark.", "Beliebt für Mittelalter-Events und Aussichten.", "Verbindet Stadtgeschichte mit Burgromantik.", "Starkes Ausflugsziel für Kulturreisende."],
      hu: ["Kapfenberg fölött, a Mürztalban fekszik.", "Jellegzetes történelmi pont Felső-Stájerországban.", "Népszerű középkori eseményekhez és kilátásokhoz.", "A várostörténetet várromantikával köti össze.", "Erős kirándulóhely kulturális utazóknak."],
      ro: ["Se află deasupra orașului Kapfenberg, în valea Mürz.", "Un punct istoric marcant în Stiria Superioară.", "Popular pentru evenimente medievale și priveliști.", "Leagă istoria orașului de romantismul castelului.", "Destinație puternică pentru călătorii culturali."],
      en: ["Located above Kapfenberg in the Mürz Valley.", "A striking historic point in Upper Styria.", "Popular for medieval events and views.", "Connects city history with castle romance.", "A strong excursion spot for cultural travelers."]
    }
  }
  ,
  {
    id: "at-kahlenberg",
    type: "mountain",
    parent: "AT",
    coords: [16.3119, 48.2739],
    name: { de: "Kahlenberg", hu: "Kahlenberg", ro: "Kahlenberg", en: "Kahlenberg" },
    image: "/geo-images/austria/kahlenberg.webp",
    description: {
      de: "Der Kahlenberg über Wien ist ein berühmter Aussichtspunkt und ein starkes Natur-SEO-Ziel in der Hauptstadtregion. Der Hügel verbindet Wald, Panorama und Stadtgeschichte auf engem Raum. Von hier aus öffnet sich ein weiter Blick über Wien, die Donau und den Wienerwald. Für Wien-Besuche, Aussichtspunkte und Donau-Panorama ist der Kahlenberg ein sehr bekannter Name.",
      hu: "A Bécs fölé magasodó Kahlenberg híres kilátópont és erős természetes SEO-célpont a fővárosi régióban. A domb kis területen köti össze az erdőt, a panorámát és a várostörténetet. Innen széles kilátás nyílik Bécsre, a Dunára és a Bécsi-erdőre. Bécsi látogatásokhoz, kilátóhelyekhez és Duna-panorámához a Kahlenberg nagyon ismert név.",
      ro: "Kahlenberg, deasupra Vienei, este un punct de belvedere celebru și un obiectiv SEO natural puternic în regiunea capitalei. Colina combină pădurea, panorama și istoria orașului într-un spațiu compact. De aici se deschide o vedere largă asupra Vienei, Dunării și Pădurii Vieneze. Pentru vizite la Viena, puncte panoramice și priveliști asupra Dunării, Kahlenberg este un nume foarte cunoscut.",
      en: "The Kahlenberg above Vienna is a famous viewpoint and a strong natural SEO target in the capital region. The hill combines forest, panorama, and city history in one compact place. From here you get a wide view over Vienna, the Danube, and the Vienna Woods. For Vienna visits, viewpoints, and Danube panoramas, Kahlenberg is a very well-known name."
    },
    facts: {
      de: ["Bekannter Aussichtspunkt über Wien.", "Liegt am Rand des Wienerwaldes.", "Wichtiger Ort für Panoramablicke auf Donau und Stadt.", "Beliebt bei Wanderern und Städtereisenden.", "Stark mit der Wiener Ausflugskultur verbunden."],
      hu: ["Bécs egyik legismertebb kilátópontja.", "A Bécsi-erdő peremén található.", "Fontos hely a Duna és a város panorámájához.", "Népszerű a túrázók és városi utazók körében.", "Erősen kapcsolódik a bécsi kirándulókultúrához."],
      ro: ["Punct de belvedere cunoscut deasupra Vienei.", "Se află la marginea Pădurii Vieneze.", "Loc important pentru panorama asupra Dunării și orașului.", "Popular printre drumeți și turiști urbani.", "Puternic legat de cultura excursiilor vieneze."],
      en: ["A well-known viewpoint above Vienna.", "Located on the edge of the Vienna Woods.", "Important for panoramic views of the Danube and city.", "Popular with hikers and city travelers.", "Strongly tied to Vienna's excursion culture."]
    },
  },
  {
    id: "at-gerlitzen",
    type: "mountain",
    parent: "AT",
    coords: [13.8327, 46.7161],
    name: { de: "Gerlitzen", hu: "Gerlitzen", ro: "Gerlitzen", en: "Gerlitzen" },
    image: "/geo-images/austria/gerlitzen.webp",
    description: {
      de: "Die Gerlitzen ist ein markanter Aussichts- und Skiberg über dem Ossiacher See in Kärnten. Der Berg verbindet Sommerwanderungen, Wintersport und weite Blicke über Seen und Alpen. Durch Seilbahnen und gepflegte Infrastruktur ist er für Familien wie Aktivurlauber attraktiv. Für Kärnten, Seeurlaub und Bergpanoramen ist die Gerlitzen ein starkes Suchziel.",
      hu: "A Gerlitzen látványos kilátó- és síhegy a karintiai Ossiacher See fölött. A hegy a nyári túrákat, a téli sportokat és a tavakra és Alpokra nyíló széles kilátást köti össze. Felvonók és rendezett infrastruktúra miatt családok és aktív utazók számára is vonzó. Karintia, tóparti pihenés és hegyi panorámák keresésében a Gerlitzen erős célpont.",
      ro: "Gerlitzen este un munte spectaculos de belvedere și schi deasupra lacului Ossiacher See, în Carintia. Muntele combină drumețiile de vară, sporturile de iarnă și priveliștile largi asupra lacurilor și Alpilor. Datorită telecabinelor și infrastructurii bine puse la punct, este atractiv pentru familii și turiști activi. Pentru Carintia, vacanțe la lac și panorame montane, Gerlitzen este un obiectiv de căutare puternic.",
      en: "The Gerlitzen is a striking viewpoint and ski mountain above Lake Ossiach in Carinthia. The mountain combines summer hiking, winter sports, and wide views over lakes and the Alps. Cable cars and solid infrastructure make it attractive for families and active travelers alike. For Carinthia, lake holidays, and mountain panoramas, Gerlitzen is a strong search target."
    },
    facts: {
      de: ["Liegt über dem Ossiacher See in Kärnten.", "Beliebt für Wandern, Paragleiten und Skifahren.", "Seilbahnen erschließen den Berg komfortabel.", "Bietet weite Blicke auf Seen und Gebirge.", "Starker Urlaubsberg für Sommer und Winter."],
      hu: ["A karintiai Ossiacher See fölött fekszik.", "Népszerű túrázásra, siklóernyőzésre és síelésre.", "A felvonók kényelmesen feltárják a hegyet.", "Széles kilátást ad tavakra és hegyekre.", "Erős nyári és téli üdülőhegy."],
      ro: ["Se află deasupra lacului Ossiacher See, în Carintia.", "Popular pentru drumeții, parapantă și schi.", "Telecabinele fac muntele ușor accesibil.", "Oferă priveliști largi asupra lacurilor și munților.", "Munte de vacanță puternic pentru vară și iarnă."],
      en: ["Located above Lake Ossiach in Carinthia.", "Popular for hiking, paragliding, and skiing.", "Cable cars make the mountain easy to access.", "Offers wide views over lakes and mountains.", "A strong holiday mountain for both summer and winter."]
    },
  },
  {
    id: "at-rax",
    type: "mountain",
    parent: "AT",
    coords: [15.7246, 47.7107],
    name: { de: "Rax", hu: "Rax", ro: "Rax", en: "Rax" },
    image: "/geo-images/austria/rax.webp",
    description: {
      de: "Die Rax ist ein klassisches alpines Plateau in Niederösterreich und eine Ikone für Wandern und Klettersteige. Ihr Hochplateau bietet weite, offene Landschaften und ein sehr eigenes Berggefühl. Seit den frühen Kur- und Bergtourismuszeiten gilt die Rax als beliebtes Ziel für Erholung und Sport. Für Natur-SEO in den Wiener Alpen ist die Rax ein besonders starker Name.",
      hu: "A Rax klasszikus alpesi fennsík Alsó-Ausztriában, és a túrázás, valamint a via ferrata egyik ikonja. A magas fennsík tágas, nyílt tájat és nagyon sajátos hegyi hangulatot kínál. A korai üdülő- és hegymászóturizmus óta a Rax kedvelt pihenő- és sportcélpont. A Bécsi-Alpok természetes SEO-jában a Rax különösen erős név.",
      ro: "Rax este un platou alpin clasic în Austria Inferioară și o icoană pentru drumeții și trasee de via ferrata. Platoul său înalt oferă peisaje largi, deschise și un sentiment montan aparte. Încă din primele vremuri ale turismului montan, Rax a fost o destinație preferată pentru relaxare și sport. Pentru SEO natural în Alpii Vienezi, Rax este un nume deosebit de puternic.",
      en: "The Rax is a classic Alpine plateau in Lower Austria and an icon for hiking and via ferrata routes. Its high plateau offers wide, open landscapes and a very distinct mountain feeling. Since the early spa and mountain tourism days, the Rax has been a favorite for relaxation and sports. For natural SEO in the Vienna Alps, Rax is a particularly strong name."
    },
    facts: {
      de: ["Bekanntes Hochplateau in den Wiener Alpen.", "Berühmt für Wanderwege und Berggasthöfe.", "Die Raxalpe ist ein Klassiker des alpinen Tourismus.", "Von Niederösterreich aus schnell erreichbar.", "Stark für Natur- und Bergsport-Suchen."],
      hu: ["Ismert magas fennsík a Bécsi-Alpokban.", "Híres túraútvonalairól és hegyi fogadóiról.", "A Raxalpe az alpesi turizmus klasszikusa.", "Alsó-Ausztriából gyorsan elérhető.", "Erős kulcsszó természet- és hegyisport-keresésekhez."],
      ro: ["Platou înalt cunoscut în Alpii Vienezi.", "Faimos pentru trasee și cabane montane.", "Raxalpe este un clasic al turismului alpin.", "Ușor de ajuns din Austria Inferioară.", "Termen puternic pentru căutări despre natură și sport montan."],
      en: ["A well-known high plateau in the Vienna Alps.", "Famous for hiking trails and mountain inns.", "The Raxalpe is a classic of Alpine tourism.", "Quickly accessible from Lower Austria.", "A strong keyword for nature and mountain-sports searches."]
    },
  },
  {
    id: "at-stuhleck",
    type: "mountain",
    parent: "AT",
    coords: [15.8596, 47.6062],
    name: { de: "Stuhleck", hu: "Stuhleck", ro: "Stuhleck", en: "Stuhleck" },
    image: "/geo-images/austria/stuhleck.webp",
    description: {
      de: "Das Stuhleck ist ein bekannter Wintersportberg in den Wiener Alpen und ein wichtiges Ziel für Ski-SEO in Österreich. Im Winter locken Pisten, Lifte und familienfreundliche Angebote, im Sommer Wanderrouten und Bergblicke. Die Lage zwischen Steiermark und Niederösterreich macht den Berg zusätzlich spannend für Tagesgäste. Wer nach Skigebieten, Wiener Alpen und winterlichen Ausflügen sucht, landet häufig beim Stuhleck.",
      hu: "A Stuhleck a Bécsi-Alpok ismert téli sporthegye, és fontos osztrák sí-SEO célpont. Télen pályák, liftek és családbarát ajánlatok vonzzák a látogatókat, nyáron túraútvonalak és hegyi kilátások. A stájer és alsó-ausztriai határ közelsége külön érdekessé teszi egynapos vendégek számára. Aki síterepeket, Bécsi-Alpokat és téli kirándulásokat keres, gyakran a Stuhlecknél köt ki.",
      ro: "Stuhleck este un munte de iarnă bine cunoscut în Alpii Vienezi și o destinație importantă pentru SEO despre schi în Austria. Iarna atrag pârtiile, instalațiile și ofertele pentru familii, iar vara traseele de drumeție și priveliștile montane. Poziția dintre Stiria și Austria Inferioară îl face și mai interesant pentru excursioniștii de o zi. Cine caută domenii schiabile, Alpii Vienezi și excursii de iarnă ajunge des la Stuhleck.",
      en: "Stuhleck is a well-known winter sports mountain in the Vienna Alps and an important Austrian ski SEO target. In winter, slopes, lifts, and family-friendly offers attract visitors; in summer, hiking routes and mountain views do the job. Its location between Styria and Lower Austria makes it especially interesting for day-trippers. Anyone searching for ski areas, the Vienna Alps, and winter excursions often ends up at Stuhleck."
    },
    facts: {
      de: ["Bekanntes Skigebiet in den Wiener Alpen.", "Gut für Familien und Tagesgäste.", "Im Sommer auch ein Wanderberg.", "Liegt an der Grenze zwischen Steiermark und Niederösterreich.", "Starkes Thema für Wintersport-SEO."],
      hu: ["Ismert síterület a Bécsi-Alpokban.", "Jó családoknak és egynapos vendégeknek.", "Nyáron túrahegyként is működik.", "Stájerország és Alsó-Ausztria határán fekszik.", "Erős téli sport SEO-téma."],
      ro: ["Domeniu schiabil cunoscut în Alpii Vienezi.", "Bun pentru familii și excursioniști de o zi.", "Vara funcționează și ca munte de drumeție.", "Se află la granița dintre Stiria și Austria Inferioară.", "Temă puternică pentru SEO de sporturi de iarnă."],
      en: ["A well-known ski area in the Vienna Alps.", "Good for families and day visitors.", "Also a hiking mountain in summer.", "Located on the border between Styria and Lower Austria.", "A strong winter-sports SEO topic."]
    },
  },
  {
    id: "at-faaker-see",
    type: "lake",
    parent: "AT",
    coords: [13.9069, 46.5714],
    name: { de: "Faaker See", hu: "Faaki-tó", ro: "Lacul Faak", en: "Lake Faak" },
    image: "/geo-images/austria/faaker-see.webp",
    description: {
      de: "Der Faaker See gehört zu den farbintensivsten Seen Kärntens und steht für türkisfarbenes Wasser, Sommerurlaub und Badequalität. Seine Lage im Süden des Landes macht ihn zu einem starken Ziel für Seeurlaub-SEO. Rundherum verbinden sich Radwege, Camping, Wassersport und Alpenkulisse zu einem sehr klaren Tourismusprofil. Der Faaker See ist besonders beliebt bei Familien, Aktivurlaubern und Badegästen.",
      hu: "A Faaker See Karintia egyik legszínpompásabb tava, türkiz vízzel, nyári üdüléssel és kiváló fürdőminőséggel. Az ország déli részén fekvő helyzete miatt erős célpont a tóparti nyaralás SEO-jában. A környéken kerékpárutak, kempingek, vízi sportok és alpesi háttér alkotnak nagyon tiszta turisztikai profilt. A Faaki-tó különösen népszerű családok, aktív utazók és fürdővendégek körében.",
      ro: "Lacul Faak este unul dintre cele mai colorate lacuri din Carintia și înseamnă apă turcoaz, vacanță de vară și calitate bună pentru înot. Poziția sa în sudul țării îl face o țintă puternică pentru SEO despre vacanțe la lac. În jurul lui se îmbină pistele de bicicletă, campingul, sporturile nautice și cadrul alpin într-un profil turistic foarte clar. Faaker See este deosebit de popular printre familii, turiști activi și iubitorii de înot.",
      en: "Lake Faak is one of Carinthia's most colorful lakes and stands for turquoise water, summer holidays, and excellent bathing quality. Its position in the south of the country makes it a strong target for lake-holiday SEO. Around it, cycle paths, camping, water sports, and Alpine scenery create a very clear tourism profile. Lake Faak is especially popular with families, active travelers, and swimmers."
    },
    facts: {
      de: ["Türkisfarbener See in Kärnten.", "Beliebt für Baden, SUP und Camping.", "Die Bergkulisse macht den See besonders fotogen.", "Starker Urlaubsort im südlichen Österreich.", "Gut kombinierbar mit Villach und dem Faaker Seefest."],
      hu: ["Türkizszínű tó Karintiában.", "Népszerű fürdésre, SUP-ra és kempingezésre.", "A hegyi háttér különösen fotogénné teszi.", "Erős üdülőhely Dél-Ausztriában.", "Jól kombinálható Villachcsal és a Faaker See fesztivállal."],
      ro: ["Lac turcoaz în Carintia.", "Popular pentru înot, SUP și camping.", "Cadrul montan îl face foarte fotogenic.", "Destinație puternică de vacanță în sudul Austriei.", "Ușor de combinat cu Villach și festivalul de la Faaker See."],
      en: ["A turquoise lake in Carinthia.", "Popular for swimming, SUP, and camping.", "The mountain backdrop makes it especially photogenic.", "A strong holiday location in southern Austria.", "Easy to combine with Villach and the Faaker See festival."]
    },
  },
  {
    id: "at-klopeiner-see",
    type: "lake",
    parent: "AT",
    coords: [14.5890, 46.6060],
    name: { de: "Klopeiner See", hu: "Klopeini-tó", ro: "Lacul Klopein", en: "Lake Klopein" },
    image: "/geo-images/austria/klopeiner-see.webp",
    description: {
      de: "Der Klopeiner See gilt als einer der wärmsten Badeseen Österreichs und ist ein Klassiker für Sommerurlaub in Kärnten. Das klare Wasser, die gute Infrastruktur und die sanfte Landschaft machen den Ort sehr familienfreundlich. Rund um den See spielen Wellness, Baden und leichte Freizeitaktivitäten die Hauptrolle. Für Suchanfragen zu Badeseen, Kärnten und warmem Wasser ist der Klopeiner See ideal.",
      hu: "A Klopeiner See Ausztria egyik legmelegebb fürdőtava, és klasszikus karintiai nyári üdülőhely. A tiszta víz, a jó infrastruktúra és a lágy táj nagyon családbaráttá teszi. A tó körül a wellness, a fürdés és a könnyű szabadidős tevékenységek dominálnak. Fürdőtavakra, Karintiára és meleg vízre keresve a Klopeini-tó ideális.",
      ro: "Lacul Klopeiner See este considerat unul dintre cele mai calde lacuri de înot din Austria și un clasic al vacanțelor de vară în Carintia. Apa limpede, infrastructura bună și peisajul blând îl fac foarte prietenos pentru familii. În jurul lacului domină wellness-ul, înotul și activitățile ușoare de recreere. Pentru căutări despre lacuri de baie, Carintia și apă caldă, Klopeiner See este ideal.",
      en: "Lake Klopein is considered one of Austria's warmest bathing lakes and is a classic Carinthian summer holiday spot. Clear water, good infrastructure, and a gentle landscape make it very family-friendly. Around the lake, wellness, swimming, and easy leisure activities take the lead. For searches about bathing lakes, Carinthia, and warm water, Lake Klopein is ideal."
    },
    facts: {
      de: ["Einer der wärmsten Badeseen Österreichs.", "Liegt in Südkärnten.", "Stark für Familienurlaub und Wellness.", "Das Wasser ist im Sommer besonders angenehm.", "Beliebtes Ziel für ruhige Seeferien."],
      hu: ["Ausztria egyik legmelegebb fürdőtava.", "Dél-Karintiában található.", "Erős családi és wellness célpont.", "A víz nyáron különösen kellemes.", "Népszerű nyugodt tóparti nyaralásokhoz."],
      ro: ["Unul dintre cele mai calde lacuri de baie din Austria.", "Se află în sudul Carintiei.", "Destinație puternică pentru vacanțe de familie și wellness.", "Apa este deosebit de plăcută vara.", "Popular pentru concedii liniștite la lac."],
      en: ["One of Austria's warmest bathing lakes.", "Located in southern Carinthia.", "Strong for family holidays and wellness.", "The water is especially pleasant in summer.", "Popular for calm lake holidays."]
    },
  },
  {
    id: "at-pielach-river",
    type: "river",
    parent: "AT",
    coords: [15.3968, 48.1547],
    name: { de: "Pielach", hu: "Pielach", ro: "Pielach", en: "Pielach" },
    image: "/geo-images/austria/pielach.webp",
    description: {
      de: "Die Pielach ist ein wichtiger Fluss in Niederösterreich und prägt das Pielachtal mit seinen ruhigen Landschaften und Ortskernen. Der Fluss ist eng mit Natur, Radwegen und dem regionalen Leben verbunden. Entlang der Pielach entstehen starke SEO-Themen für Talwanderungen, Ausflüge und Flusslandschaften. Für die Region Mostviertel ist die Pielach ein sehr passender geographischer Anker.",
      hu: "A Pielach fontos folyó Alsó-Ausztriában, és meghatározza a Pielach-völgy nyugodt tájait és településmagjait. A folyó szorosan kapcsolódik a természethez, a kerékpárutakhoz és a helyi élethez. A Pielach mentén erős SEO-témák születnek völgyi túrákra, kirándulásokra és folyóparti tájakra. A Mostviertel régió számára a Pielach nagyon jó földrajzi kapaszkodó.",
      ro: "Pielach este un râu important din Austria Inferioară și definește valea Pielach prin peisaje liniștite și centre locale. Râul este strâns legat de natură, piste de bicicletă și viața regională. De-a lungul Pielach apar teme SEO puternice pentru drumeții în vale, excursii și peisaje de râu. Pentru regiunea Mostviertel, Pielach este o ancoră geografică foarte potrivită.",
      en: "The Pielach is an important river in Lower Austria and shapes the Pielach Valley with its calm landscapes and village centers. The river is closely tied to nature, cycle paths, and regional life. Along the Pielach, strong SEO themes emerge for valley hikes, excursions, and river landscapes. For the Mostviertel region, the Pielach is a very fitting geographic anchor."
    },
    facts: {
      de: ["Fluss im Mostviertel von Niederösterreich.", "Prägt das Pielachtal mit seinen Ortschaften.", "Beliebt für Rad- und Wanderrouten.", "Wichtiger Teil der regionalen Landschaftsstruktur.", "Stark mit Naturtourismus verbunden."],
      hu: ["A Mostviertelben, Alsó-Ausztriában folyik.", "Formálja a Pielach-völgy településeit.", "Népszerű kerékpár- és túraútvonalaknál.", "Fontos része a regionális tájszerkezetnek.", "Erősen kapcsolódik a természet turizmusához."],
      ro: ["Râu din Mostviertel, în Austria Inferioară.", "Modelează valea Pielach și așezările ei.", "Popular pentru trasee de bicicletă și drumeție.", "Parte importantă a structurii regionale a peisajului.", "Strâns legat de turismul în natură."],
      en: ["A river in the Mostviertel of Lower Austria.", "Shapes the Pielach Valley and its settlements.", "Popular for cycling and hiking routes.", "An important part of the regional landscape structure.", "Strongly linked to nature tourism."]
    },
  },
  {
    id: "at-moell-river",
    type: "river",
    parent: "AT",
    coords: [12.8796, 46.9854],
    name: { de: "Möll", hu: "Möll", ro: "Möll", en: "Möll River" },
    image: "/geo-images/austria/moell-river.webp",
    description: {
      de: "Die Möll ist ein alpiner Fluss in Kärnten und steht für glasklares Wasser, enge Täler und Kraft der Bergnatur. Ihr Verlauf verbindet Gletscherregionen mit Siedlungsräumen und touristischen Tälern. Für Natur-SEO in Kärnten ist die Möll stark, weil sie Berge, Wasser und Bewegung zusammenbringt. Wanderer, Radfahrer und Naturreisende finden hier eine sehr klare Alpenlandschaft.",
      hu: "A Möll karintiai alpesi folyó, amely kristálytiszta vizet, szűk völgyeket és a hegyi természet erejét képviseli. Folyása gleccservidékeket köt össze lakott területekkel és turisztikai völgyekkel. Karintiai természet SEO-ban a Möll erős, mert egyesíti a hegyet, a vizet és a mozgást. Túrázók, kerékpárosok és természetjárók nagyon tiszta alpesi tájat találnak itt.",
      ro: "Möll este un râu alpin din Carintia și înseamnă apă limpede, văi înguste și forța naturii montane. Cursul său leagă zonele glaciare de spațiile locuite și de văile turistice. Pentru SEO despre natură în Carintia, Möll este puternic, fiindcă aduce împreună muntele, apa și mișcarea. Drumeții, bicicliștii și iubitorii de natură găsesc aici un peisaj alpin foarte clar.",
      en: "The Möll is an Alpine river in Carinthia and stands for crystal-clear water, narrow valleys, and the power of mountain nature. Its course links glacier regions with settlements and tourist valleys. For Carinthia nature SEO, the Möll is strong because it brings mountain, water, and movement together. Hikers, cyclists, and nature travelers find a very clear Alpine landscape here."
    },
    facts: {
      de: ["Alpiner Fluss in Kärnten.", "Verläuft durch enge Bergtäler.", "Wichtig für Natur- und Aktivtourismus.", "Starker Bezug zu Gletscher- und Alpenlandschaften.", "Typisch für das wasserreiche Kärnten."],
      hu: ["Karintiai alpesi folyó.", "Szűk hegyi völgyeken halad át.", "Fontos a természet- és aktív turizmus számára.", "Erős kapcsolat a gleccser- és alpesi tájakkal.", "Jellemző a vízben gazdag Karintiára."],
      ro: ["Râu alpin din Carintia.", "Curge prin văi montane înguste.", "Important pentru turismul activ și de natură.", "Legat puternic de peisaje glaciare și alpine.", "Tipic pentru Carintia bogată în apă."],
      en: ["An Alpine river in Carinthia.", "Runs through narrow mountain valleys.", "Important for nature and active tourism.", "Strongly linked to glacier and Alpine landscapes.", "Typical of water-rich Carinthia."]
    }
  }
  ,
  {
    id: "at-secession-building",
    type: "landmark",
    parent: "AT",
    coords: [16.3604, 48.2008],
    name: { de: "Wiener Secessionsgebäude", hu: "Bécsi Szecesszió Háza", ro: "Clădirea Secession din Viena", en: "Vienna Secession Building" },
    image: "/geo-images/austria/secession-building.webp",
    description: {
      de: "Das Wiener Secessionsgebäude ist ein Ikonenbau der Moderne und ein starkes Ziel für Architektur-SEO in Österreich. Mit seiner goldenen Kuppel und der klaren Formensprache steht es für den künstlerischen Aufbruch um 1900. Das Gebäude zeigt, wie eng Wien mit Jugendstil, Design und Ausstellungskultur verbunden ist. Für Suchanfragen zu Kunst, Architektur und Wien ist die Secession ein sehr markanter Name.",
      hu: "A bécsi Secession épülete a modernitás ikonikus alkotása és erős osztrák építészeti SEO-célpont. Arany kupolájával és tiszta formanyelvével az 1900 körüli művészeti megújulást képviseli. Az épület jól mutatja, mennyire szorosan kapcsolódik Bécs a szecesszióhoz, a dizájnhoz és a kiállításkultúrához. Művészetre, építészetre és Bécsre keresve a Secession nagyon jellegzetes név.",
      ro: "Clădirea Secession din Viena este o icoană a modernității și un obiectiv puternic pentru SEO despre arhitectură în Austria. Cu cupola sa aurie și limbajul său formal clar, reprezintă avântul artistic din jurul anului 1900. Clădirea arată cât de strâns legată este Viena de Jugendstil, design și cultura expozițiilor. Pentru căutări despre artă, arhitectură și Viena, Secession este un nume foarte distinct.",
      en: "The Vienna Secession Building is an icon of modernism and a strong architecture SEO target in Austria. With its golden dome and clear design language, it represents the artistic break around 1900. The building shows how closely Vienna is tied to Art Nouveau, design, and exhibition culture. For searches about art, architecture, and Vienna, the Secession is a very distinctive name."
    },
    facts: {
      de: ["Ikonisches Jugendstilgebäude in Wien.", "Symbol der Secessionsbewegung um 1900.", "Berühmt für den goldenen Lorbeerkuppel-Entwurf.", "Beliebtes Fotomotiv nahe Karlsplatz.", "Wichtig für Architektur- und Kunsttourismus."],
      hu: ["Ikonikus szecessziós épület Bécsben.", "A 1900 körüli szecessziós mozgalom jelképe.", "Híres az arany babérkupoláról.", "Népszerű fotótéma a Karlsplatz közelében.", "Fontos az építészeti és művészeti turizmus számára."],
      ro: ["Clădire iconică Art Nouveau în Viena.", "Simbol al mișcării Secession de la 1900.", "Celebră pentru cupola aurie cu frunze de laur.", "Motiv foto popular lângă Karlsplatz.", "Importantă pentru turismul de arhitectură și artă."],
      en: ["An iconic Art Nouveau building in Vienna.", "A symbol of the Secession movement around 1900.", "Famous for its golden laurel-dome design.", "A popular photo spot near Karlsplatz.", "Important for architecture and art tourism."]
    },
  },
  {
    id: "at-karlskirche",
    type: "landmark",
    parent: "AT",
    coords: [16.3708, 48.1987],
    name: { de: "Karlskirche", hu: "Károly-templom", ro: "Biserica Sfântul Carol", en: "Karlskirche" },
    image: "/geo-images/austria/karlskirche.webp",
    description: {
      de: "Die Karlskirche zählt zu den berühmtesten Barockkirchen Europas und ist ein Kernmotiv für Wien-SEO. Ihre monumentale Kuppel, die Säulen und die Lage am Karlsplatz machen sie unverwechselbar. Die Kirche zeigt die spirituelle und architektonische Pracht des habsburgischen Wien. Für Besucher, die nach Kirchen, Barock und Wien suchen, ist sie ein starker Fixpunkt.",
      hu: "A Karlskirche Európa egyik leghíresebb barokk temploma, és Bécs SEO-jának kulcseleme. Monumentális kupolája, oszlopai és a Karlsplatzon elfoglalt helye összetéveszthetetlenné teszik. A templom a Habsburg Bécs spirituális és építészeti pompáját mutatja meg. Aki templomokra, barokkra és Bécsre keres, ezt a helyet gyakran megtalálja.",
      ro: "Karlskirche este una dintre cele mai faimoase biserici baroce din Europa și un element-cheie pentru SEO despre Viena. Cupola monumentală, coloanele și poziția de la Karlsplatz o fac inconfundabilă. Biserica arată splendoarea spirituală și arhitecturală a Vienei habsburgice. Pentru cei care caută biserici, baroc și Viena, este un reper foarte puternic.",
      en: "Karlskirche is one of Europe's most famous Baroque churches and a core Vienna SEO landmark. Its monumental dome, columns, and Karlsplatz location make it unmistakable. The church shows the spiritual and architectural splendor of Habsburg Vienna. For visitors searching for churches, Baroque, and Vienna, it is a strong anchor point."
    },
    facts: {
      de: ["Berühmte Barockkirche in Wien.", "Steht am Karlsplatz im Zentrum.", "Die Kuppel ist von weitem sichtbar.", "Beliebtes Motiv für Architektur-SEO.", "Gehört zu den ikonischen Wien-Symbolen."],
      hu: ["Híres barokk templom Bécsben.", "A Karlsplatzon áll, a központban.", "Kupolája messziről látható.", "Népszerű építészeti SEO-téma.", "Bécs ikonikus szimbólumai közé tartozik."],
      ro: ["Biserică barocă celebră în Viena.", "Se află în Karlsplatz, în centru.", "Cupola este vizibilă de departe.", "Motiv popular pentru SEO de arhitectură.", "Face parte dintre simbolurile iconice ale Vienei."],
      en: ["A famous Baroque church in Vienna.", "Stands at Karlsplatz in the city center.", "The dome is visible from far away.", "A popular architecture SEO subject.", "One of Vienna's iconic symbols."]
    },
  },
  {
    id: "at-burgtheater",
    type: "landmark",
    parent: "AT",
    coords: [16.3614, 48.2102],
    name: { de: "Burgtheater", hu: "Burgtheater", ro: "Burgtheater", en: "Burgtheater" },
    image: "/geo-images/austria/burgtheater.webp",
    description: {
      de: "Das Burgtheater ist das wichtigste deutschsprachige Sprechtheater und ein kulturelles Aushängeschild Wiens. Die prachtvolle Fassade am Ring macht das Gebäude zu einem der bekanntesten Landmarken der Stadt. Im Inneren treffen Bühnenkunst, Tradition und moderne Inszenierung aufeinander. Für Kultur-, Theater- und Wien-SEO ist das Burgtheater ein absoluter Schlüsselort.",
      hu: "A Burgtheater a legfontosabb német nyelvű prózai színház, és Bécs kulturális névjegye. Pompás homlokzata a Ringen a város egyik legismertebb nevezetességévé teszi. Belül a színjátszás, a hagyomány és a modern rendezés találkozik. Kultúra-, színház- és Bécs-SEO szempontból a Burgtheater abszolút kulcshely.",
      ro: "Burgtheater este cel mai important teatru de limbă germană și o carte de vizită culturală a Vienei. Fațada sa impunătoare de pe Ring îl face unul dintre cele mai cunoscute repere ale orașului. În interior se întâlnesc arta scenică, tradiția și montarea modernă. Pentru SEO despre cultură, teatru și Viena, Burgtheater este un loc-cheie absolut.",
      en: "The Burgtheater is the most important German-language spoken theater and a cultural calling card of Vienna. Its grand facade on the Ring makes it one of the city's most recognizable landmarks. Inside, stagecraft, tradition, and modern productions meet. For culture, theater, and Vienna SEO, the Burgtheater is an absolute key site."
    },
    facts: {
      de: ["Nationalbühne Österreichs mit langer Tradition.", "Liegt an der Wiener Ringstraße.", "Berühmt für Schauspiel und Ensemblekultur.", "Die Fassade ist ein klassischer Wiener Blickfang.", "Wichtig für Kultur- und Städtereisen."],
      hu: ["Ausztria nemzeti színháza hosszú hagyománnyal.", "A bécsi Ringstraße mentén áll.", "Híres a prózai színházról és az ensemble-kultúráról.", "Homlokzata klasszikus bécsi látványosság.", "Fontos a kulturális és városi utazásokhoz."],
      ro: ["Teatrul național al Austriei, cu tradiție îndelungată.", "Se află pe Ringstrasse din Viena.", "Celebru pentru teatru și cultura de ansamblu.", "Fațada este un magnet vizual vienez.", "Important pentru turismul cultural și urban."],
      en: ["Austria's national theater with a long tradition.", "Located on Vienna's Ringstrasse.", "Famous for spoken theater and ensemble culture.", "The facade is a classic Vienna eye-catcher.", "Important for cultural and city travel."]
    },
  },
  {
    id: "at-austrian-parliament",
    type: "landmark",
    parent: "AT",
    coords: [16.3583, 48.2084],
    name: { de: "Österreichisches Parlament", hu: "Osztrák Parlament", ro: "Parlamentul Austriei", en: "Austrian Parliament" },
    image: "/geo-images/austria/austrian-parliament.webp",
    description: {
      de: "Das österreichische Parlament am Ring steht für Demokratie, Geschichte und monumentale Staatsarchitektur. Das Gebäude ist einer der prägnantesten politischen Orte in Wien und ein starkes Landmark für Stadtbesuche. Die klassizistische Wirkung und die Lage am Zentrum der Hauptstadt machen es sehr sichtbar. Für Politik-, Wien- und Architektur-SEO ist das Parlament ein zentraler Begriff.",
      hu: "A Ring menti osztrák parlament a demokráciát, a történelmet és a monumentális állami építészetet képviseli. Az épület Bécs egyik legjellegzetesebb politikai helyszíne és erős városi landmark. Klasszicista hatása és a főváros központi fekvése nagyon láthatóvá teszi. Politika-, Bécs- és építészeti SEO-ban a parlament központi kifejezés.",
      ro: "Parlamentul austriac de pe Ring reprezintă democrația, istoria și arhitectura monumentală de stat. Clădirea este unul dintre cele mai pregnante locuri politice din Viena și un landmark puternic pentru vizitatori. Efectul clasicist și poziția centrală o fac foarte vizibilă. Pentru SEO despre politică, Viena și arhitectură, parlamentul este un termen central.",
      en: "The Austrian Parliament on the Ring stands for democracy, history, and monumental state architecture. The building is one of Vienna's most distinctive political places and a strong city landmark. Its classical effect and central capital location make it highly visible. For politics, Vienna, and architecture SEO, the parliament is a core term."
    },
    facts: {
      de: ["Wichtiger Parlamentsbau an der Ringstraße.", "Starkes Symbol der österreichischen Demokratie.", "Ein klassizistisches Wahrzeichen Wiens.", "Der Vorplatz ist ein beliebter Fotopunkt.", "Häufiges Suchziel für Politik- und Stadtinteresse."],
      hu: ["Fontos parlamenti épület a Ringstraße mentén.", "Az osztrák demokrácia erős szimbóluma.", "Bécs klasszicista jelképei közé tartozik.", "Az előtér népszerű fotópont.", "Gyakori keresési cél a politika és város iránt érdeklődőknek."],
      ro: ["Clădire parlamentară importantă pe Ringstrasse.", "Simbol puternic al democrației austriece.", "Un reper clasicist al Vienei.", "Esplanada este un punct foto popular.", "Țintă frecventă pentru cei interesați de politică și oraș."],
      en: ["An important parliamentary building on the Ringstrasse.", "A strong symbol of Austrian democracy.", "A classical landmark of Vienna.", "The forecourt is a popular photo spot.", "A frequent search target for politics and city interest."]
    },
  },
  {
    id: "at-vienna-city-hall",
    type: "landmark",
    parent: "AT",
    coords: [16.3578, 48.2109],
    name: { de: "Wiener Rathaus", hu: "Bécsi Városháza", ro: "Primăria Vienei", en: "Vienna City Hall" },
    image: "/geo-images/austria/vienna-city-hall.webp",
    description: {
      de: "Das Wiener Rathaus ist ein neugotisches Monument und ein starkes Stadtmarkenzeichen an der Ringstraße. Es dient nicht nur der Verwaltung, sondern auch großen Veranstaltungen und dem berühmten Christkindlmarkt. Mit seinen Türmen und dem weiten Vorplatz prägt es das Stadtbild der Hauptstadt massiv. Für Wien-SEO, Veranstaltungen und Architektur ist das Rathaus ein Top-Begriff.",
      hu: "A bécsi városháza neogótikus monumentum és erős városi jelkép a Ringstraße mentén. Nemcsak hivatal, hanem nagy rendezvények és a híres karácsonyi vásár helyszíne is. Tornyaival és tágas előterével erősen meghatározza a főváros arculatát. Bécs-SEO-ban, rendezvényeknél és építészetnél a városháza top kifejezés.",
      ro: "Primăria Vienei este un monument neogotic și un semn urban puternic pe Ringstrasse. Nu este doar sediu administrativ, ci și loc pentru evenimente mari și faimosul târg de Crăciun. Cu turnurile și piața largă, marchează puternic imaginea capitalei. Pentru SEO despre Viena, evenimente și arhitectură, primăria este un termen de top.",
      en: "Vienna City Hall is a neo-Gothic monument and a strong city marker on the Ringstrasse. It is not only an administrative building but also a venue for major events and the famous Christmas market. With its towers and broad forecourt, it strongly shapes the capital's image. For Vienna SEO, events, and architecture, the City Hall is a top term."
    },
    facts: {
      de: ["Neugotisches Wahrzeichen an der Ringstraße.", "Sitz der Wiener Stadtverwaltung.", "Berühmt für den Christkindlmarkt vor dem Haus.", "Großer Platz für Feste und Veranstaltungen.", "Ein Muss für Architektur- und Wien-Fans."],
      hu: ["Neogótikus jelkép a Ringstraße mentén.", "A bécsi városháza székhelye.", "Híres az épület előtti karácsonyi vásárról.", "Nagy tér ünnepségekhez és rendezvényekhez.", "Kötelező látnivaló építészet- és Bécs-rajongóknak."],
      ro: ["Reper neogotic pe Ringstrasse.", "Sediul administrației orașului Viena.", "Celebră pentru târgul de Crăciun din față.", "Piață mare pentru sărbători și evenimente.", "O oprire obligatorie pentru fanii arhitecturii și Vienei."],
      en: ["A neo-Gothic landmark on the Ringstrasse.", "Seat of Vienna's city administration.", "Famous for the Christmas market in front.", "A large square for celebrations and events.", "A must-see for architecture and Vienna fans."]
    },
  },
  {
    id: "at-museumquartier",
    type: "landmark",
    parent: "AT",
    coords: [16.3598, 48.2040],
    name: { de: "MuseumsQuartier", hu: "Múzeumi Negyed", ro: "MuseumsQuartier", en: "MuseumsQuartier" },
    image: "/geo-images/austria/museumquartier.webp",
    description: {
      de: "Das MuseumsQuartier gehört zu den größten Kulturarealen Europas und ist ein Magnet für moderne Wien-Besuche. Es verbindet Museen, Höfe, Cafés und öffentliche Räume zu einem lebendigen Kulturcampus. Die Mischung aus historischer Hülle und zeitgenössischer Nutzung macht das Areal besonders attraktiv. Für Kunst-, Museum- und Städtereise-SEO ist das MuseumsQuartier ein Top-Name.",
      hu: "A MuseumsQuartier Európa egyik legnagyobb kulturális területe, és a modern bécsi látogatások mágneses pontja. Múzeumokat, udvarokat, kávézókat és köztereket köt össze egy élő kulturális campusszá. A történelmi keret és a kortárs használat keveréke különösen vonzóvá teszi. Művészet-, múzeum- és városlátogatási SEO-ban a MuseumsQuartier top név.",
      ro: "MuseumsQuartier este una dintre cele mai mari zone culturale din Europa și un magnet pentru vizitele moderne în Viena. Leagă muzee, curți, cafenele și spații publice într-un campus cultural viu. Amestecul dintre învelișul istoric și utilizarea contemporană îl face deosebit de atractiv. Pentru SEO despre artă, muzee și city break, MuseumsQuartier este un nume de top.",
      en: "The MuseumsQuartier is one of Europe's largest cultural areas and a magnet for modern Vienna visits. It combines museums, courtyards, cafes, and public spaces into a lively cultural campus. The mix of historic shell and contemporary use makes the area especially attractive. For art, museums, and city-break SEO, MuseumsQuartier is a top name."
    },
    facts: {
      de: ["Eines der größten Kulturareale Europas.", "Liegt direkt im Zentrum von Wien.", "Verbindet Museen, Innenhöfe und Cafés.", "Beliebt für Kunst, Design und Urbanität.", "Starker Tourismusmagnet das ganze Jahr."],
      hu: ["Európa egyik legnagyobb kulturális területe.", "Közvetlenül Bécs központjában található.", "Múzeumokat, udvarokat és kávézókat köt össze.", "Népszerű művészetre, dizájnra és városi hangulatra.", "Egész évben erős turisztikai vonzerő."],
      ro: ["Una dintre cele mai mari zone culturale din Europa.", "Situată chiar în centrul Vienei.", "Leagă muzee, curți interioare și cafenele.", "Populară pentru artă, design și urbanitate.", "Magnet turistic puternic tot timpul anului."],
      en: ["One of the largest cultural areas in Europe.", "Located right in central Vienna.", "Combines museums, courtyards, and cafes.", "Popular for art, design, and urban atmosphere.", "A strong tourism magnet all year round."]
    },
  },
  {
    id: "at-haus-der-musik",
    type: "landmark",
    parent: "AT",
    coords: [16.3730, 48.2079],
    name: { de: "Haus der Musik", hu: "A Zene Háza", ro: "Casa Muzicii", en: "House of Music" },
    image: "/geo-images/austria/haus-der-musik.webp",
    description: {
      de: "Das Haus der Musik in Wien verbindet Museum, Klangexperiment und Musikgeschichte auf moderne Weise. Es ist ein beliebter Ort für Familien, Schulgruppen und alle, die Musik als Erlebnis suchen. Die zentrale Lage zwischen Altstadt und Ring macht es zusätzlich attraktiv. Für Wien-, Mozart- und Musik-SEO ist das Haus der Musik sehr stark.",
      hu: "A bécsi Zene Háza modern módon kapcsolja össze a múzeumot, a hangkísérleteket és a zenetörténetet. Népszerű hely családok, iskolai csoportok és mindazok számára, akik élményként keresik a zenét. Az óváros és a Ring közötti központi fekvése tovább növeli vonzerejét. Bécs-, Mozart- és zene-SEO-ban a Zene Háza nagyon erős.",
      ro: "Casa Muzicii din Viena combină muzeul, experimentele sonore și istoria muzicii într-un mod modern. Este un loc popular pentru familii, grupuri școlare și toți cei care caută muzica drept experiență. Poziția centrală între centrul vechi și Ring îi crește atractivitatea. Pentru SEO despre Viena, Mozart și muzică, Casa Muzicii este foarte puternică.",
      en: "The House of Music in Vienna combines museum, sound experiments, and music history in a modern way. It is a popular place for families, school groups, and anyone looking to experience music. Its central location between the old town and the Ring adds to its appeal. For Vienna, Mozart, and music SEO, the House of Music is very strong."
    },
    facts: {
      de: ["Interaktives Musikmuseum in Wien.", "Beliebt bei Familien und Schulklassen.", "Zentral zwischen Altstadt und Ring gelegen.", "Verknüpft Klang, Bildung und Erlebnis.", "Stark für Musik- und Mozart-Suchen."],
      hu: ["Interaktív zenei múzeum Bécsben.", "Népszerű családok és iskolai osztályok körében.", "Központi fekvés az óváros és a Ring között.", "Összeköti a hangot, az oktatást és az élményt.", "Erős zene- és Mozart-keresésekhez."],
      ro: ["Muzeu interactiv al muzicii în Viena.", "Popular printre familii și clase școlare.", "Situat central între centrul vechi și Ring.", "Leagă sunetul, educația și experiența.", "Puternic pentru căutări despre muzică și Mozart."],
      en: ["An interactive music museum in Vienna.", "Popular with families and school groups.", "Centrally located between the old town and the Ring.", "Combines sound, education, and experience.", "Strong for music and Mozart searches."]
    },
  },
  {
    id: "at-ankeruhr",
    type: "landmark",
    parent: "AT",
    coords: [16.3734, 48.2087],
    name: { de: "Ankeruhr", hu: "Anker-óra", ro: "Ceasul Anker", en: "Anker Clock" },
    image: "/geo-images/austria/ankeruhr.webp",
    description: {
      de: "Die Ankeruhr ist eine der bekanntesten Uhren Wiens und ein kleines, aber sehr markantes Stadtzeichen. Mit ihren historischen Figuren und dem täglichen Stundenspiel zieht sie Besucher aus aller Welt an. Die Uhr verbindet Jugendstil, Technik und erzählerische Stadtgeschichte auf engem Raum. Für Wien-SEO und historische Stadtrundgänge ist die Ankeruhr ein starker Begriff.",
      hu: "Az Anker-óra Bécs egyik legismertebb órája és egy kicsi, de nagyon jellegzetes városi jel. Történelmi alakjaival és napi órajátékával a világ minden tájáról vonzza a látogatókat. Az óra kis területen köti össze a szecessziót, a technikát és a történetmesélő várostörténetet. Bécs-SEO-hoz és történelmi városi sétákhoz az Anker-óra erős kulcsszó.",
      ro: "Ceasul Anker este unul dintre cele mai cunoscute ceasuri din Viena și un semn urban mic, dar foarte distinctiv. Cu figurile sale istorice și spectacolul zilnic al orei, atrage vizitatori din toată lumea. Ceasul combină Jugendstil, tehnologia și povestea orașului într-un spațiu compact. Pentru SEO despre Viena și plimbări istorice în oraș, ceasul Anker este un termen puternic.",
      en: "The Anker Clock is one of Vienna's best-known clocks and a small but very distinctive city marker. With its historical figures and daily hour show, it attracts visitors from all over the world. The clock combines Art Nouveau, technology, and storytelling city history in one compact place. For Vienna SEO and historic city walks, the Anker Clock is a strong term."
    },
    facts: {
      de: ["Berühmte Kunstuhr in Wien.", "Bekannt für das tägliche Stundenspiel.", "Liegt im Zentrum der Altstadt.", "Beliebter Treffpunkt für Stadtrundgänge.", "Starkes Motiv für Uhr- und Wien-Suchen."],
      hu: ["Híres művészi óra Bécsben.", "A napi órajátékáról ismert.", "Az óváros központjában található.", "Népszerű találkozóhely városi sétákhoz.", "Erős téma óra- és Bécs-keresésekhez."],
      ro: ["Ceas artistic celebru în Viena.", "Cunoscut pentru spectacolul zilnic al orei.", "Situat în centrul centrului vechi.", "Punct popular de întâlnire pentru tururi urbane.", "Motiv puternic pentru căutări despre ceasuri și Viena."],
      en: ["A famous artistic clock in Vienna.", "Known for its daily hour show.", "Located in the center of the old town.", "A popular meeting point for city walks.", "A strong motif for clock and Vienna searches."]
    }
  }
  ,
  {
    id: "at-port-of-vienna",
    type: "port",
    parent: "AT",
    coords: [16.4600, 48.1605],
    name: { de: "Hafen Wien", hu: "Bécsi kikötő", ro: "Portul Viena", en: "Port of Vienna" },
    image: "/geo-images/austria/port-of-vienna.webp",
    description: {
      de: "Der Hafen Wien ist ein zentraler Logistikstandort an der Donau und verbindet Binnenverkehr mit internationalem Güteraustausch. Der Hafen zeigt, wie wichtig die Wasserstraße für moderne Versorgung und Wirtschaft in Österreich bleibt. Mit Containerumschlag, Lagerflächen und trimodaler Anbindung ist er ein starker Wirtschaftsanker. Für SEO zu Wien, Donauhafen und Logistik ist der Hafen Wien sehr relevant.",
      hu: "A Bécsi kikötő a Duna egyik központi logisztikai helyszíne, amely a belföldi forgalmat a nemzetközi árucsereforgalommal köti össze. A kikötő megmutatja, mennyire fontos ma is a vízi út Ausztria ellátásában és gazdaságában. Konténerkezeléssel, raktárakkal és trimodális kapcsolattal erős gazdasági támaszpont. Bécs, dunai kikötő és logisztika SEO-ra a Hafen Wien nagyon releváns.",
      ro: "Portul Viena este un nod logistic central pe Dunăre și leagă transportul intern de schimburile internaționale de mărfuri. Portul arată cât de importantă rămâne astăzi calea navigabilă pentru aprovizionarea și economia Austriei. Cu manipulare de containere, spații de depozitare și conexiune trimodală, este o ancoră economică puternică. Pentru SEO despre Viena, portul de pe Dunăre și logistică, Portul Viena este foarte relevant.",
      en: "The Port of Vienna is a central logistics location on the Danube and connects inland traffic with international freight exchange. The port shows how important the waterway remains for modern supply and business in Austria. With container handling, storage space, and trimodal access, it is a strong economic anchor. For SEO about Vienna, Danube ports, and logistics, the Port of Vienna is highly relevant."
    },
    facts: {
      de: ["Wichtiger Donauhafen in Wien.", "Verbindet Schiff, Bahn und Straße.", "Zentral für Warenumschlag und Lagerlogistik.", "Starker Standort für die Hauptstadtwirtschaft.", "Relevant für Binnenhafen- und Logistik-SEO."],
      hu: ["Fontos dunai kikötő Bécsben.", "Összeköti a hajót, a vasutat és a közutat.", "Kulcsfontosságú az árumozgatás és a raktárlogisztika számára.", "Erős helyszín a fővárosi gazdaságban.", "Releváns belföldi kikötő és logisztikai SEO-ra."],
      ro: ["Port important pe Dunăre în Viena.", "Leagă nava, trenul și șoseaua.", "Central pentru manipularea mărfurilor și depozitare.", "Loc puternic pentru economia capitalei.", "Relevant pentru SEO despre porturi interioare și logistică."],
      en: ["An important Danube port in Vienna.", "Connects ship, rail, and road.", "Central for cargo handling and warehouse logistics.", "A strong site for the capital's economy.", "Relevant for inland port and logistics SEO."]
    },
  },
  {
    id: "at-port-of-linz",
    type: "port",
    parent: "AT",
    coords: [14.3009, 48.3160],
    name: { de: "Hafen Linz", hu: "Linz kikötő", ro: "Portul Linz", en: "Port of Linz" },
    image: "/geo-images/austria/port-of-linz.webp",
    description: {
      de: "Der Hafen Linz ist ein bedeutender Donauhafen und ein zentrales Glied der oberösterreichischen Industrie- und Lieferketten.",
      hu: "A Linzi kikötő jelentős dunai kikötő és Felső-Ausztria ipari és ellátási láncának központi láncszeme.",
      ro: "Portul Linz este un port important pe Dunăre și o verigă centrală a lanțurilor industriale și de aprovizionare din Austria Superioară.",
      en: "The Port of Linz is an important Danube port and a central link in Upper Austria's industrial and supply chains."
    },
    descriptionAdvanced: {
      de: "Der Hafen Linz ist ein bedeutender Donauhafen und ein zentrales Glied der oberösterreichischen Industrie- und Lieferketten. Seine Lage am Strom macht ihn zu einem idealen Standort für Umschlag, Lagerung und regionale Verteilung. Der Hafen passt hervorragend zu Linz als Stadt der Produktion, des Handels und der Technik. Für Donau-, Hafen- und Industrielogistik-SEO ist der Hafen Linz ein starker Begriff.",
      hu: "A Linzi kikötő jelentős dunai kikötő és Felső-Ausztria ipari és ellátási láncának központi láncszeme. A folyóparti fekvés ideális helyszínt ad az átrakodáshoz, tároláshoz és regionális elosztáshoz. A kikötő kiválóan illik Linzhez, mint termelési, kereskedelmi és technológiai városhoz. Duna-, kikötő- és ipari logisztikai SEO-ban a Linz kikötő erős kifejezés.",
      ro: "Portul Linz este un port important pe Dunăre și o verigă centrală a lanțurilor industriale și de aprovizionare din Austria Superioară. Poziția pe fluviu îl face ideal pentru transbordare, depozitare și distribuție regională. Portul se potrivește perfect cu Linz ca oraș al producției, comerțului și tehnologiei. Pentru SEO despre Dunăre, porturi și logistică industrială, Portul Linz este un termen puternic.",
      en: "The Port of Linz is an important Danube port and a central link in Upper Austria's industrial and supply chains. Its position on the river makes it ideal for transshipment, storage, and regional distribution. The port fits Linz perfectly as a city of production, trade, and technology. For Danube, port, and industrial logistics SEO, the Port of Linz is a strong term."
    },
    facts: {
      de: ["Wichtiger Donauhafen in Oberösterreich.", "Eng mit Industrie und Logistik verknüpft.", "Idealer Knoten für Binnenwasserstraße und Verteilung.", "Passt zur Wirtschaftskraft von Linz.", "Starkes Thema für Hafen- und Standort-SEO."],
      hu: ["Fontos dunai kikötő Felső-Ausztriában.", "Szorosan kapcsolódik az iparhoz és a logisztikához.", "Ideális csomópont a belvízi út és az elosztás számára.", "Illik Linz gazdasági erejéhez.", "Erős téma kikötői és telephely SEO-hoz."],
      ro: ["Port important pe Dunăre, în Austria Superioară.", "Legat strâns de industrie și logistică.", "Nod ideal pentru calea navigabilă interioară și distribuție.", "Se potrivește cu forța economică a orașului Linz.", "Temă puternică pentru SEO despre porturi și locații."],
      en: ["An important Danube port in Upper Austria.", "Closely linked to industry and logistics.", "An ideal node for inland waterway and distribution.", "Fits Linz's economic strength.", "A strong topic for port and location SEO."]
    },
  },
  {
    id: "at-omv-schwechat-refinery",
    type: "industry",
    parent: "AT",
    coords: [16.4735, 48.1186],
    name: { de: "OMV Raffinerie Schwechat", hu: "OMV schwechati finomító", ro: "Rafinăria OMV Schwechat", en: "OMV Schwechat Refinery" },
    image: "/geo-images/austria/omv-schwechat-refinery.webp",
    description: {
      de: "Die OMV Raffinerie in Schwechat ist eines der wichtigsten Industrie- und Energiezentren Österreichs.",
      hu: "A schwechati OMV finomító Ausztria egyik legfontosabb ipari és energetikai központja.",
      ro: "Rafinăria OMV din Schwechat este unul dintre cele mai importante centre industriale și energetice ale Austriei.",
      en: "The OMV refinery in Schwechat is one of Austria's most important industrial and energy centers."
    },
    descriptionAdvanced: {
      de: "Die OMV Raffinerie in Schwechat ist eines der wichtigsten Industrie- und Energiezentren Österreichs. Der Standort bei Wien zeigt die Verbindung von Mobilität, Treibstoffversorgung und moderner Chemieproduktion. Durch die Nähe zum Hauptstadtgebiet hat er eine enorme strategische Bedeutung für den Wirtschaftsraum Ostösterreich. Für Industrie-, Energie- und Schwechat-SEO ist die Raffinerie ein sehr relevanter Begriff.",
      hu: "A schwechati OMV finomító Ausztria egyik legfontosabb ipari és energetikai központja. A Bécs melletti telephely megmutatja a mobilitás, az üzemanyag-ellátás és a modern vegyipar kapcsolatát. A fővárosi térség közelsége miatt óriási stratégiai jelentősége van Kelet-Ausztria gazdaságában. Ipari, energetikai és Schwechat SEO-ban a finomító nagyon releváns kifejezés.",
      ro: "Rafinăria OMV din Schwechat este unul dintre cele mai importante centre industriale și energetice ale Austriei. Locația de lângă Viena arată legătura dintre mobilitate, aprovizionarea cu combustibil și producția chimică modernă. Datorită apropierii de zona capitalei, are o importanță strategică enormă pentru economia Austriei de Est. Pentru SEO despre industrie, energie și Schwechat, rafinăria este un termen foarte relevant.",
      en: "The OMV refinery in Schwechat is one of Austria's most important industrial and energy centers. The site near Vienna shows the connection between mobility, fuel supply, and modern chemical production. Because of its proximity to the capital region, it has enormous strategic importance for eastern Austria's economy. For industry, energy, and Schwechat SEO, the refinery is a very relevant term."
    },
    facts: {
      de: ["Eines der wichtigsten Energiezentren Österreichs.", "Liegt bei Schwechat nahe Wien.", "Versorgt einen großen Teil des Landes mit Treibstoffen.", "Wichtiger Standort für Chemie und Raffinerietechnik.", "Starkes Thema für Energie- und Industrie-SEO."],
      hu: ["Ausztria egyik legfontosabb energetikai központja.", "Schwechatan, Bécs közelében található.", "Az ország nagy részét üzemanyaggal látja el.", "Fontos helyszín a vegyipar és a finomítástechnika számára.", "Erős energia- és ipari SEO-téma."],
      ro: ["Unul dintre cele mai importante centre energetice ale Austriei.", "Se află la Schwechat, lângă Viena.", "Aprovizionează cu combustibili o mare parte din țară.", "Loc important pentru chimie și tehnologia rafinării.", "Temă puternică pentru SEO despre energie și industrie."],
      en: ["One of Austria's most important energy centers.", "Located in Schwechat near Vienna.", "Supplies a large share of the country with fuel.", "An important site for chemicals and refinery technology.", "A strong topic for energy and industrial SEO."]
    },
  },
  {
    id: "at-voestalpine-linz",
    type: "industry",
    parent: "AT",
    coords: [14.3178, 48.2901],
    name: { de: "voestalpine Linz", hu: "voestalpine Linz", ro: "voestalpine Linz", en: "voestalpine Linz" },
    image: "/geo-images/austria/voestalpine-linz.webp",
    description: {
      de: "voestalpine in Linz ist das Symbol für österreichische Stahl- und Hochtechnologieproduktion.",
      hu: "A linzi voestalpine az osztrák acél- és csúcstechnológiai termelés szimbóluma.",
      ro: "voestalpine din Linz este simbolul producției austriece de oțel și tehnologie avansată.",
      en: "voestalpine in Linz is the symbol of Austrian steel and high-tech production."
    },
    descriptionAdvanced: {
      de: "voestalpine in Linz ist das Symbol für österreichische Stahl- und Hochtechnologieproduktion. Der Standort steht für industrielle Stärke, internationale Lieferketten und moderne Werkstoffentwicklung. Als Teil des Linzer Wirtschaftsraums prägt er die Identität der Stadt weit über die Region hinaus. Für Industrie-, Stahl- und Linz-SEO ist voestalpine ein Schlüsselbegriff.",
      hu: "A linzi voestalpine az osztrák acél- és csúcstechnológiai termelés szimbóluma. A telephely az ipari erőt, a nemzetközi ellátási láncokat és a modern anyagfejlesztést képviseli. A linzi gazdasági térség részeként a város identitását messze a régión túl is formálja. Ipari, acél- és Linz-SEO-ban a voestalpine kulcsszó.",
      ro: "voestalpine din Linz este simbolul producției austriece de oțel și tehnologie avansată. Locația reprezintă puterea industrială, lanțurile internaționale de aprovizionare și dezvoltarea materialelor moderne. Ca parte a spațiului economic din Linz, modelează identitatea orașului mult dincolo de regiune. Pentru SEO despre industrie, oțel și Linz, voestalpine este un termen-cheie.",
      en: "voestalpine in Linz is the symbol of Austrian steel and high-tech production. The site stands for industrial strength, international supply chains, and modern materials development. As part of Linz's economic area, it shapes the city's identity far beyond the region. For industry, steel, and Linz SEO, voestalpine is a key term."
    },
    facts: {
      de: ["Steht für Stahl und Hightech in Österreich.", "Prägt den Wirtschaftsraum Linz stark.", "International eng in Lieferketten eingebunden.", "Wichtiger Arbeitgeber und Innovationsstandort.", "Starkes SEO-Thema für Industriegeschichte."],
      hu: ["Az osztrák acél és high-tech jelképe.", "Erősen formálja a linzi gazdasági teret.", "Nemzetközileg szorosan be van kötve az ellátási láncokba.", "Fontos munkaadó és innovációs helyszín.", "Erős SEO-téma az ipartörténetben."],
      ro: ["Simbol al oțelului și tehnologiei avansate în Austria.", "Modelează puternic spațiul economic din Linz.", "Foarte bine integrat în lanțurile internaționale de aprovizionare.", "Angajator important și loc de inovare.", "Temă SEO puternică pentru istoria industriei."],
      en: ["A symbol of steel and high-tech in Austria.", "Strongly shapes Linz's economic area.", "Closely integrated into international supply chains.", "An important employer and innovation site.", "A strong SEO topic for industrial history."]
    },
  },
  {
    id: "at-wachau-vineyards",
    type: "agriculture",
    parent: "AT",
    coords: [15.4560, 48.3660],
    name: { de: "Wachauer Weingärten", hu: "Wachaui szőlőskertek", ro: "Vii din Wachau", en: "Wachau Vineyards" },
    image: "/geo-images/austria/wachau-vineyards.webp",
    description: {
      de: "Die Wachauer Weingärten gehören zu den bekanntesten Agrarlandschaften Österreichs und prägen das UNESCO-Tal entlang der Donau.",
      hu: "A Wachau szőlőskertjei Ausztria legismertebb agrártájai közé tartoznak, és az UNESCO-völgyet formálják a Duna mentén.",
      ro: "Vilele din Wachau se numără printre cele mai cunoscute peisaje agricole ale Austriei și conturează valea UNESCO de-a lungul Dunării.",
      en: "The Wachau vineyards are among Austria's best-known agricultural landscapes and shape the UNESCO valley along the Danube."
    },
    descriptionAdvanced: {
      de: "Die Wachauer Weingärten gehören zu den bekanntesten Agrarlandschaften Österreichs und prägen das UNESCO-Tal entlang der Donau. Terrassen, Trockenmauern und Rebsorten wie Grüner Veltliner und Riesling bestimmen das Bild. Die Kombination aus Weinbau, Kulturlandschaft und Flussurlaub macht die Region international attraktiv. Für Landwirtschafts-SEO, Wachau und Genussreisen ist dieses Thema besonders stark.",
      hu: "A Wachau szőlőskertjei Ausztria legismertebb agrártájai közé tartoznak, és az UNESCO-völgyet formálják a Duna mentén. Teraszok, szárazkőfalak és olyan fajták, mint a Grüner Veltliner és a Riesling adják az arculatot. A borászat, a kultúrtáj és a folyóparti pihenés kombinációja nemzetközileg is vonzóvá teszi a régiót. Mezőgazdasági SEO, Wachau és gasztro-utazás témában ez különösen erős.",
      ro: "Vilele din Wachau se numără printre cele mai cunoscute peisaje agricole ale Austriei și conturează valea UNESCO de-a lungul Dunării. Terasele, zidurile de piatră uscată și soiuri precum Grüner Veltliner și Riesling definesc imaginea. Combinația dintre viticultură, peisaj cultural și vacanțe pe malul fluviului face regiunea atractivă la nivel internațional. Pentru SEO despre agricultură, Wachau și călătorii gastronomice, tema este foarte puternică.",
      en: "The Wachau vineyards are among Austria's best-known agricultural landscapes and shape the UNESCO valley along the Danube. Terraces, dry-stone walls, and grape varieties like Grüner Veltliner and Riesling define the scenery. The mix of winegrowing, cultural landscape, and river holidays makes the region internationally attractive. For agriculture SEO, the Wachau, and food travel, this topic is especially strong."
    },
    facts: {
      de: ["Teil der UNESCO-Welterbelandschaft Wachau.", "Berühmt für Grüner Veltliner und Riesling.", "Terrassenweinbau prägt die Hänge an der Donau.", "Wichtiger Baustein der niederösterreichischen Genusskultur.", "Starkes Thema für Wein- und Agrartourismus."],
      hu: ["A Wachau UNESCO-világörökségi tájának része.", "A Grüner Veltliner és a Riesling miatt híres.", "A teraszos szőlőművelés formálja a Duna menti lejtőket.", "Az alsó-ausztriai gasztronómiai kultúra fontos eleme.", "Erős téma a bor- és agrárturizmusban."],
      ro: ["Parte a peisajului UNESCO Wachau.", "Celebru pentru Grüner Veltliner și Riesling.", "Viticultura pe terase modelează pantele de pe Dunăre.", "O piesă importantă a culturii gastronomice din Austria Inferioară.", "Temă puternică pentru turismul viticol și agricol."],
      en: ["Part of the UNESCO landscape of the Wachau.", "Famous for Grüner Veltliner and Riesling.", "Terraced viticulture shapes the Danube slopes.", "An important part of Lower Austria's food culture.", "A strong topic for wine and agricultural tourism."]
    },
  },
  {
    id: "at-marchfeld-vegetables",
    type: "agriculture",
    parent: "AT",
    coords: [16.7500, 48.2500],
    name: { de: "Marchfeld Gemüse", hu: "Marchfeldi zöldségtermesztés", ro: "Legume din Marchfeld", en: "Marchfeld Vegetables" },
    image: "/geo-images/austria/marchfeld-vegetables.webp",
    description: {
      de: "Das Marchfeld ist einer der wichtigsten Gemüse- und Ackerbauräume Österreichs und steht für landwirtschaftliche Produktivität auf hohem Niveau.",
      hu: "A Marchfeld Ausztria egyik legfontosabb zöldség- és szántóföldi területe, amely magas szintű mezőgazdasági teljesítményt képvisel.",
      ro: "Marchfeld este una dintre cele mai importante zone de legumicultură și culturi de câmp din Austria și reprezintă productivitate agricolă la nivel înalt.",
      en: "Marchfeld is one of Austria's most important vegetable and field-crop regions and stands for high-level agricultural productivity."
    },
    descriptionAdvanced: {
      de: "Das Marchfeld ist einer der wichtigsten Gemüse- und Ackerbauräume Österreichs und steht für landwirtschaftliche Produktivität auf hohem Niveau. Die weiten Felder östlich von Wien liefern ein starkes Bild für moderne Agrarlandschaft und regionale Versorgung. Spargel, Zwiebeln und andere Feldfrüchte prägen die Marke der Region. Für Landwirtschafts-, Wien- und Niederösterreich-SEO ist das Marchfeld ein sehr brauchbarer Begriff.",
      hu: "A Marchfeld Ausztria egyik legfontosabb zöldség- és szántóföldi területe, amely magas szintű mezőgazdasági teljesítményt képvisel. A Bécstől keletre fekvő hatalmas mezők erős képet adnak a modern agrártájról és a regionális ellátásról. A spárga, a hagyma és más szántóföldi termények formálják a térség márkáját. Mezőgazdasági, bécsi és alsó-ausztriai SEO-hoz a Marchfeld nagyon hasznos kifejezés.",
      ro: "Marchfeld este una dintre cele mai importante zone de legumicultură și culturi de câmp din Austria și reprezintă productivitate agricolă la nivel înalt. Câmpurile întinse la est de Viena oferă o imagine puternică a peisajului agricol modern și a aprovizionării regionale. Sparanghelul, ceapa și alte culturi de câmp definesc marca regiunii. Pentru SEO despre agricultură, Viena și Austria Inferioară, Marchfeld este un termen foarte util.",
      en: "Marchfeld is one of Austria's most important vegetable and field-crop regions and stands for high-level agricultural productivity. The wide fields east of Vienna create a strong image of modern farm landscapes and regional supply. Asparagus, onions, and other field crops define the region's brand. For agriculture, Vienna, and Lower Austria SEO, Marchfeld is a very useful term."
    },
    facts: {
      de: ["Wichtiges Gemüseanbaugebiet östlich von Wien.", "Bekannt für Spargel, Zwiebeln und Feldfrüchte.", "Starke Verbindung zwischen Landwirtschaft und Stadtversorgung.", "Die offene Ebene prägt das Landschaftsbild.", "Bedeutend für regionale Agrar-SEO."],
      hu: ["Fontos zöldségtermesztő terület Bécstől keletre.", "Híres a spárgáról, a hagymáról és a szántóföldi terményekről.", "Erős kapcsolat a mezőgazdaság és a városi ellátás között.", "A nyílt síkság meghatározza a tájképet.", "Jelentős a regionális agrár SEO számára."],
      ro: ["Zonă importantă de legumicultură la est de Viena.", "Cunoscută pentru sparanghel, ceapă și culturi de câmp.", "Legătură puternică între agricultură și aprovizionarea orașelor.", "Câmpia deschisă definește peisajul.", "Importantă pentru SEO agricol regional."],
      en: ["An important vegetable-growing area east of Vienna.", "Known for asparagus, onions, and field crops.", "A strong link between agriculture and urban supply.", "The open plain defines the landscape.", "Important for regional agriculture SEO."]
    }
  }
];

export const austriaAllPoi: POI[] = [austriaCountry,
  ...austriaRegions,
  ...austriaCities, ...poiExtraAustriaHistorical, ...poiExtraAustriaIndustry, ...poiExtraAustriaLife, ...poiExtraAustriaNature];
