// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraAustriaHistorical } from "./poiExtraAustriaHistorical";
import { poiExtraAustriaIndustry } from "./poiExtraAustriaIndustry";
import { poiExtraAustriaLife } from "./poiExtraAustriaLife";
import { poiExtraAustriaNature } from "./poiExtraAustriaNature";
import { austriaCities } from "./poiExtraAustriaCities";

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
    de: "Österreich, offiziell die Republik Österreich, ist ein mitteleuropäischer Binnenstaat, der für seine atemberaubende Alpenlandschaft, seine tief verwurzelte imperiale Geschichte und seine weltweit führende Rolle in der klassischen Musik bekannt ist. Das Land grenzt an acht Nachbarstaaten – Deutschland, Tschechien, die Slowakei, Ungarn, Slowenien, Italien, die Schweiz und Liechtenstein – und fungiert seit Jahrhunderten als kulturelle und geografische Brücke zwischen West- und Osteuropa. Die Topografie Österreichs wird maßgeblich von den Alpen geprägt, die etwa 62 % der Landesfläche einnehmen und das Land zu einem der bedeutendsten Ziele für den Wintersport und den alpinen Sommertourismus weltweit machen. Von den vergletscherten Gipfeln der Hohen Tauern bis zu den sanften Weinbergen des Burgenlandes bietet Österreich eine landschaftliche Vielfalt, die ihresgleichen sucht. Die Hauptstadt Wien, einst das pulsierende Zentrum des mächtigen Habsburgerreiches, ist heute eine moderne Metropole, die regelmäßig als Stadt mit der höchsten Lebensqualität weltweit ausgezeichnet wird. Hier verschmelzen barocke Prachtbauten wie das Schloss Schönbrunn und die Hofburg mit einer lebendigen zeitgenössischen Kunstszene und der legendären Wiener Kaffeehauskultur, die zum immateriellen Kulturerbe der UNESCO gehört. Österreich ist jedoch weit mehr als nur seine Hauptstadt. Städte wie Salzburg, der Geburtsort Mozarts, Innsbruck, die Hauptstadt der Alpen, und Graz mit seiner mediterranen Renaissance-Altstadt bieten jeweils einzigartige kulturelle Identitäten. Die österreichische Geschichte ist untrennbar mit der Dynastie der Habsburger verbunden, die über 600 Jahre lang die Geschicke Europas mitbestimmten und ein monumentales architektonisches Erbe hinterließen. Kulinarisch ist das Land für Klassiker wie das Wiener Schnitzel, den Apfelstrudel und die Sachertorte berömht, wobei jede Region ihre eigenen Spezialitäten pflegt, vom steirischen Kürbiskernöl bis zum Tiroler Speck. Als moder...",
    hu: "Ausztria, hivatalos nevén az Osztrák Köztársaság, egy közép-európai szárazföldi ország, amely világszerte híres lélegzetelállító alpesi tájairól, mélyen gyökerező császári történelméről és a klasszikus zenében betöltött vezető szerepéről. Az ország nyolc szomszédos állammal határos – Németországgal, Csehországgal, Szlovákiával, Magyarországgal, Szlovéniával, Olaszországgal, Svájccal és Liechtensteinnel –, és évszázadok óta kulturális és földrajzi hídként szolgál Nyugat- és Kelet-Európa között. Ausztria domborzatát meghatározzák az Alpok, amely az ország területének mintegy 62%-át foglalja el, így a világ egyik legjelentősebb téli sport- és alpesi nyári turisztikai célpontjává teszi. A Magas-Tauern gleccseres csúcsaitól Burgenland szelíd szőlőskertjeiig Ausztria olyan táji sokszínűséget kínál, amely páratlan Európában. A főváros, Bécs, egykor a hatalmas Habsburg Birodalom lüktető központja volt, ma egy modern metropolisz, amelyet rendszeresen a világ legélhetőbb városának választanak. Itt a barokk pompás épületek, mint a Schönbrunni kastély és a Hofburg, harmonikusan ötvöződnek a vibráló kortárs művészeti élettel és a legendás bécsi kávéházi kultúrával, amely az UNESCO szellemi kulturális örökségének része. Ausztria azonban sokkal több, mint a fővárosa. Az olyan városok, mint Salzburg, Mozart szülőhelye, Innsbruck, az Alpok fővárosa, vagy Graz a maga mediterrán hangulatú reneszánsz óvárosával, mind egyedi kulturális identitást kínálnak. Az osztrák történelem elválaszthatatlanul összefonódott a Habsburg-dinasztiával, amely több mint 600 éven át meghatározta Európa sorsát, és monumentális építészeti örökséget hagyott hátra. Kulináris szempontból az ország olyan klasszikusokról híres, mint a bécsi szelet, az almás rétes és a Sacher-torta, miközben minden régiónak megvannak a maga specialitásai, a stájer tökmagolajtól a tiroli szalonnáig. Modern demokráciaként és az Európai Unió tagjaként Ausztriát politikai stabilitás, erős szociális piacgazdaság és magas szint...",
    ro: "Austria, oficial Republica Austria, este un stat fără ieșire la mare situat în Europa Centrală, renumit în întreaga lume pentru peisajele sale alpine uluitoare, istoria sa imperială profundă și rolul său de lider mondial în muzica clasică. Țara se învecinează cu opt state – Germania, Republica Cehă, Slovacia, Ungaria, Slovenia, Italia, Elveția și Liechtenstein – funcționând de secole ca o punte culturală și geografică între Europa de Vest și cea de Est. Topografia Austriei este dominată de Alpi, care ocupă aproximativ 62% din suprafața țării, făcând-o una dintre cele mai importante destinații pentru sporturile de iarnă și turismul alpin de vară la nivel global. De la vârfurile glaciare din Hohe Tauern până la podgoriile blânde din Burgenland, Austria oferă o diversitate peisagistică inegalabilă. Capitala Viena, odinioară centrul vibrant al puternicului Imperiu Habsburgic, este astăzi o metropolă modernă, desemnată regulat ca orașul cu cea mai înaltă calitate a vieții din lume. Aici, clădirile baroce magnifice, precum Palatul Schönbrunn și Hofburg, se îmbină cu o scenă artistică contemporană plină de viață și cu legendara cultură a cafenelelor vieneze, inclusă în patrimoniul cultural imaterial al UNESCO. Austria este însă mult mai mult decât capitala sa. Orașe precum Salzburg, locul de naștere al lui Mozart, Innsbruck, capitala Alpilor, și Graz, cu centrul său vechi renascentist cu influențe mediteraneene, oferă fiecare identități culturale unice. Istoria austriacă este inseparabil legată de dinastia Habsburgilor, care a modelat destinul Europei timp de peste 600 de ani și a lăsat în urmă o moștenire arhitecturală monumentală. Din punct de vedere culinar, țara este faimoasă pentru clasice precum șnițelul vienez, ștrudelul cu mere și tortul Sacher, fiecare regiune păstrându-și propriile specialități, de la uleiul de semințe de dovleac din Stiria până la slănina tiroleză. Ca democrație modernă și membră a Uniunii Europene, Austria se remarcă prin stabilitate p...",
    en: "Austria, officially the Republic of Austria, is a landlocked Central European country world-renowned for its breathtaking Alpine scenery, deep-rooted imperial history, and its leading global role in classical music. The country borders eight neighboring states—Germany, the Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein—and has served for centuries as a cultural and geographical bridge between Western and Eastern Europe. Austria's topography is significantly shaped by the Alps, which cover about 62% of the country's total area, making it one of the most important destinations for winter sports and Alpine summer tourism worldwide. From the glaciated peaks of the Hohe Tauern to the rolling vineyards of Burgenland, Austria offers a scenic diversity that is second to none. The capital, Vienna, once the pulsating center of the mighty Habsburg Empire, is today a modern metropolis regularly ranked as the city with the highest quality of life in the world. Here, magnificent Baroque buildings like Schönbrunn Palace and the Hofburg blend with a vibrant contemporary art scene and the legendary Viennese coffee house culture, which is part of UNESCO's intangible cultural heritage. However, Austria is much more than just its capital. Cities like Salzburg, the birthplace of Mozart; Innsbruck, the capital of the Alps; and Graz, with its Mediterranean-influenced Renaissance old town, each offer unique cultural identities. Austrian history is inextricably linked with the Habsburg dynasty, which shaped the fate of Europe for over 600 years and left behind a monumental architectural legacy. Culinarically, the country is famous for classics such as Wiener Schnitzel, Apple Strudel, and Sachertorte, with each region cultivating its own specialties, from Styrian pumpkin seed oil to Tyrolean speck. As a modern democracy and member of the European Union, Austria is characterized by political stability, a strong social market economy, and high envir..."
  },
  factsAdvanced: {
    de: [
      "Österreichs soziale Marktwirtschaft gehört zu den am höchsten entwickelten in der EU und kombiniert einen freien Markt mit einem starken sozialen Sicherheitsnetz.",
      "Das Bekenntnis zur Neutralität ist ein Eckpfeiler der österreichischen Außenpolitik und macht das Land zu einem wichtigen Zentrum für internationale Diplomatie.",
      "Erneuerbare Energien spielen eine riesige Rolle, wobei die Wasserkraft über 60 % der österreichischen Stromerzeugung ausmacht.",
      "Das Bildungssystem ist hoch angesehen, mit kostenloser öffentlicher Schulbildung und einem starken Schwerpunkt auf Berufsausbildung durch das duale Lehrlingssystem.",
      "Wien wurde in zahlreichen aufeinanderfolgenden Studien zur lebenswertesten Stadt der Welt gekürt, gelobt für seinen öffentlichen Nahverkehr, seine Sicherheit und seine Grünflächen."
    ],
    hu: [
        "Ausztria szociális piacgazdasága az EU egyik legfejlettebbje, erős szociális hálóval.",
        "Az ország semlegességi politikája nemzetközi diplomáciai központtá tette Bécset.",
        "A megújuló energiaforrások, különösen a vízenergia, a villamosenergia-termelés több mint 60%-át adják.",
        "Az oktatási rendszer nagy hangsúlyt fektet a duális szakképzésre, ami alacsonyan tartja a munkanélküliséget.",
        "Bécset rendszeresen a világ legélhetőbb városának választják kiváló tömegközlekedése és zöldterületei miatt."
      ],
    ro: ["Economia socială de piață a Austriei este una dintre cele mai dezvoltate din UE, combinând piața liberă cu o rețea de siguranță socială puternică.", "Angajamentul țării față de neutralitate este o piatră de temelie a politicii sale externe.", "Energia regenerabilă joacă un rol uriaș, hidroenergia reprezentând peste 60% din producția de energie electrică.", "Sistemul educațional pune un accent puternic pe formarea profesională duală, menținând șomajul la un nivel scăzut.", "Viena a fost desemnată cel mai bun oraș pentru a trăi din lume în numeroase sondaje."],
    en: [
      "Austria's social market economy is one of the most developed in the EU, combining a free market with a strong social safety net.",
      "The country's commitment to neutrality is a cornerstone of its foreign policy, allowing it to act as a hub for international diplomacy.",
      "Renewable energy plays a huge role, with hydropower accounting for over 60% of Austria's electricity production.",
      "The education system is highly regarded, with free and public schooling and a strong emphasis on vocational training through its dual-track apprenticeship system.",
      "Vienna has been named the world's most livable city in numerous consecutive surveys, praised for its public transport, safety, and green spaces."
    ]
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
    descriptionAdvanced: { 
        de: "Das Burgenland ist das östlichste und flachste Bundesland Österreichs, das erst 1921 Teil der Republik wurde. Es zeichnet sich durch ein pannonisches Klima mit rund 300 Sonnentagen im Jahr aus, was ideale Bedingungen für den Weinbau schafft. Das Landschaftsbild wird stark vom Neusiedler See dominiert, einem faszinierenden Steppensee, der ein Paradies für Wassersportler und ein bedeutendes Vogelschutzgebiet ist. Mit seinen idyllischen Weinbergen, historischen Burgen wie der Burg Forchtenstein und entspannenden Thermen bietet die Region eine einzigartige Mischung aus Natur, Kultur und Wellness. Die Hauptstadt Eisenstadt ist eng mit dem Komponisten Joseph Haydn verbunden, der lange Zeit im Dienste der Fürsten Esterházy stand.",
        hu: "Burgenland Ausztria legkeletibb, leglaposabb és egyben legfiatalabb tartománya, amely csak 1921-ben lett a köztársaság része. Pannon, már-már mediterrán éghajlat jellemzi, évi mintegy 300 napsütéses nappal, ami ideális feltételeket teremt a bortermeléshez. A tájat erősen meghatározza a Fertő-tó, egy lenyűgöző sztyeppei tó, amely a vízi sportok kedvelőinek paradicsoma és jelentős madárvédelmi terület. Idilli szőlőültetvényeivel, történelmi váraival és pihentető termálfürdőivel a régió a természet, a kultúra és a wellness egyedülálló keverékét kínálja. A bájos főváros, Kismarton (Eisenstadt) szorosan kötődik Joseph Haydn zeneszerző életéhez és munkásságához.",
        ro: "Burgenland este cel mai estic, mai plat și mai tânăr land federal al Austriei, devenit parte a republicii abia în 1921. Se caracterizează printr-un climat panonic, aproape mediteranean, care, cu aproximativ 300 de zile însorite pe an, creează condiții ideale pentru viticultură. Peisajul este puternic dominat de Lacul Neusiedl, un lac de stepă fascinant, care este un paradis pentru pasionații de sporturi nautice și o importantă zonă de protecție a păsărilor. Cu podgoriile sale idilice, castelele istorice și băile termale relaxante, regiunea oferă un amestec unic de natură, cultură și wellness. Capitala fermecătoare, Eisenstadt, este strâns legată de viața și opera compozitorului Joseph Haydn.",
        en: "Burgenland is the easternmost, flattest, and youngest federal state of Austria, having only become part of the republic in 1921. It is characterized by a Pannonian, almost Mediterranean climate, which, with around 300 days of sunshine per year, creates ideal conditions for viticulture. The landscape is strongly dominated by Lake Neusiedl, a fascinating steppe lake that is a paradise for water sports enthusiasts and an important bird sanctuary. With its idyllic vineyards, historic castles, and relaxing thermal spas, the region offers a unique blend of nature, culture, and wellness. The charming capital, Eisenstadt, is closely linked to the life and work of the composer Joseph Haydn." 
    },
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
    },
    factsAdvanced: {
        de: [
          "Das einzigartige pannonische Klima des Burgenlandes ist nicht nur ideal für den Weinbau, sondern auch für eine reiche Artenvielfalt, insbesondere im Nationalpark Neusiedler See-Seewinkel.",
          "Die Region verfügt über ein reiches multikulturelles Erbe mit bedeutenden kroatischen und ungarischen Minderheiten, die Dialekt, Küche und Traditionen beeinflussen.",
          "Historisch gesehen war das Burgenland Teil des Königreichs Ungarn innerhalb der Doppelmonarchie, bis es 1921 nach einer Volksabstimmung an Österreich abgetreten wurde.",
          "Es ist eine führende Region für erneuerbare Energien, insbesondere Windkraft, mit zahlreichen Windkraftanlagen, die die flache Landschaft prägen."
        ],
        hu: [
        "Burgenland az egyetlen osztrák tartomány, amely nagyrészt a Pannon-síkságon fekszik.",
        "A Fertő tó (Neusiedler See) Európa egyik legnagyobb sztyeppei tava és UNESCO Világörökség.",
        "Az Esterházy-család évszázadokon át meghatározta a régió történelmét és kultúráját.",
        "Itt évente közel 300 napsütéses nap van, ami Ausztria legnaposabb régiójává teszi."
      ],
        ro: ["Climatul panonic unic al Burgenlandului este ideal nu doar pentru viticultură, ci și pentru biodiversitate.", "Regiunea are o moștenire multiculturală bogată, cu minorități croate și maghiare care influențează tradițiile.", "Până în 1921, Burgenland a făcut parte din Regatul Ungariei, fiind cedat Austriei în urma unui plebiscit.", "Este o regiune de top pentru energia regenerabilă, în special energia eoliană, datorită peisajului său plat."],
        en: [
          "Burgenland's unique Pannonian climate is not only ideal for wine but also for a rich biodiversity, especially in the Neusiedler See-Seewinkel National Park.",
          "The region has a rich multicultural heritage, with significant Croatian and Hungarian minorities influencing its dialect, cuisine, and traditions.",
          "Historically, Burgenland was part of the Kingdom of Hungary within the Austro-Hungarian Empire until it was ceded to Austria in 1921 after a plebiscite.",
          "It is a leading region in renewable energy, particularly wind power, with numerous wind turbines dotting its flat landscape."
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
    descriptionAdvanced: { 
        de: "Kärnten ist das südlichste Bundesland Österreichs und grenzt an Italien und Slowenien, was ihm ein fast mediterranes Lebensgefühl verleiht. Die Region ist berühmt für ihre unzähligen, glasklaren und im Sommer angenehm warmen Badeseen, wie den Wörthersee, Millstätter See und Weißensee. Eingerahmt werden diese tiefblauen Gewässer von majestätischen Gebirgszügen, darunter die Hohen Tauern mit dem Großglockner. Die reiche Geschichte Kärntens spiegelt sich in zahlreichen Burgen, Schlössern und historischen Altstädten wie Klagenfurt und Villach wider. Es ist ein wahres Paradies für Wassersportler, Wanderer und Radfahrer, die eine Kombination aus alpiner Natur und südlicher Leichtigkeit suchen.",
        hu: "Karintia Ausztria legdélibb tartománya, amely Olaszországgal és Szlovéniával határos, ami szinte mediterrán életérzést kölcsönöz neki. A régió híres számtalan, kristálytiszta és nyáron kellemesen meleg vizű tavairól, mint például a Wörthersee, a Millstätter See és a Weißensee. Ezeket a mélykék vizeket fenséges hegyláncok keretezik, köztük a Magas-Tauern a Großglocknerrel. Karintia gazdag történelme számos várban, kastélyban és történelmi óvárosban, mint Klagenfurt és Villach, tükröződik. Valóságos paradicsom a vízi sportok, a túrázás és a kerékpározás kedvelőinek, akik az alpesi természet és a déli könnyedség kombinációját keresik.",
        ro: "Carintia este cel mai sudic land federal al Austriei și se învecinează cu Italia și Slovenia, ceea ce îi conferă o senzație aproape mediteraneană. Regiunea este faimoasă pentru nenumăratele sale lacuri de scăldat, cristaline și plăcut de calde vara, precum Wörthersee, Millstätter See și Weißensee. Aceste ape de un albastru profund sunt încadrate de lanțuri muntoase maiestuoase, inclusiv Hohe Tauern cu Grossglockner. Istoria bogată a Carintiei se reflectă în numeroase castele, palate și orașe vechi istorice, cum ar fi Klagenfurt și Villach. Este un adevărat paradis pentru pasionații de sporturi nautice, drumeții și ciclism, care caută o combinație de natură alpină și lejeritate sudică.",
        en: "Carinthia is the southernmost federal state of Austria, bordering Italy and Slovenia, which gives it an almost Mediterranean feel. The region is famous for its countless, crystal-clear and pleasantly warm bathing lakes in summer, such as Lake Wörthersee, Lake Millstatt, and Lake Weissensee. These deep blue waters are framed by majestic mountain ranges, including the Hohe Tauern with the Grossglockner. Carinthia's rich history is reflected in numerous castles, palaces, and historic old towns like Klagenfurt and Villach. It is a true paradise for water sports enthusiasts, hikers, and cyclists seeking a combination of alpine nature and southern ease."
    },
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
    },
    factsAdvanced: {
        de: [
          "Kärnten wird oft als 'Österreichische Riviera' bezeichnet, da es ein quasi-mediterranes Klima und warme Seen besitzt, die im Sommer bis zu 28 °C erreichen können.",
          "Die Region ist offiziell zweisprachig, wobei Deutsch und Slowenisch als Amtssprachen anerkannt sind, was ihre Geschichte und die Nähe zu Slowenien widerspiegelt.",
          "Das sagenhafte 'Wörthersee-Mandl' ist eine lokale Folklorefigur – ein kleines Männlein, das den See erschaffen haben soll, indem es aus Wut ein Fass zum Überlaufen brachte.",
          "Neben dem Tourismus ist der Hightech-Sektor ein wichtiger Teil der Kärntner Wirtschaft, mit einem Schwerpunkt auf Mikroelektronik und Maschinenbau."
        ],
        hu: [
        "Karintia területén több mint 1200 tó található, köztük a híres Wörthi-tó.",
        "A Großglockner, Ausztria legmagasabb csúcsa (3798 m) Karintia és Tirol határán fekszik.",
        "A tartomány két hivatalos nyelvvel rendelkezik bizonyos déli részein, ahol a szlovén kisebbség él.",
        "Villach és Klagenfurt a régió két legfontosabb gazdasági és kulturális központja."
      ],
        ro: ["Carintia este adesea numită 'Riviera Austriacă' datorită climatului său aproape mediteranean.", "Regiunea este oficial bilingvă, germana și slovena fiind recunoscute ca limbi oficiale.", "Legendarul 'Wörthersee-Mandl' este un personaj folcloric local care ar fi creat lacul Wörthersee.", "Pe lângă turism, sectorul de înaltă tehnologie este esențial pentru economia Carintiei."],
        en: [
          "Carinthia is often called the 'Austrian Riviera' due to its quasi-Mediterranean climate and the warm waters of its lakes, which can reach up to 28°C (82°F) in summer.",
          "The region is officially bilingual, with German and Slovenian both recognized as official languages, reflecting its history and proximity to Slovenia.",
          "The legendary 'Wörthersee-Mandl' is a local folklore figure, a small man who is said to have created the lake by plugging a spring out of anger.",
          "Besides tourism, the high-tech sector is a significant part of Carinthia's economy, with a focus on microelectronics and engineering."
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
    descriptionAdvanced: { 
        de: "Niederösterreich ist das flächenmäßig größte Bundesland und umschließt die Hauptstadt Wien. Es ist eine Region der Kontraste, von den sanften, weinbedeckten Hügeln des Weinviertels bis zu den alpinen Gipfeln des Mostviertels. Das Donautal, insbesondere die zum UNESCO-Welterbe zählende Wachau, prägt die Landschaft mit malerischen Dörfern, mächtigen Stiften wie Melk und endlosen Marillengärten. Als historisches Kernland Österreichs birgt es zahlreiche Schätze, darunter römische Ausgrabungen in Carnuntum und prachtvolle Schlösser. Die Landeshauptstadt St. Pölten verbindet charmante Barockarchitektur mit modernen Verwaltungsbauten.",
        hu: "Alsó-Ausztria Ausztria legnagyobb területű tartománya, amely teljesen körülveszi a fővárost, Bécset. A kontrasztok régiója, a Weinviertel szelíd, szőlővel borított dombjaitól a Mostviertel alpesi csúcsaiig. A Duna-völgy, különösen az UNESCO Világörökség részét képező Wachau, festői falvakkal, hatalmas apátságokkal, mint Melk, és végtelen sárgabarack-kertekkel formálja a tájat. Ausztria történelmi magjaként számos kincset rejt, köztük római kori ásatásokat Carnuntumban és pompás barokk kastélyokat. A tartományi főváros, St. Pölten a bájos barokk építészetet modern közigazgatási épületekkel ötvözi.",
        ro: "Austria Inferioară este cel mai mare land federal ca suprafață și înconjoară complet capitala Viena. Este o regiune a contrastelor, de la dealurile blânde acoperite cu viță de vie din Weinviertel până la vârfurile alpine din Mostviertel. Valea Dunării, în special Wachau, inclusă în Patrimoniul Mondial UNESCO, modelează peisajul cu sate pitorești, mănăstiri impunătoare precum Melk și grădini nesfârșite de caiși. Ca nucleu istoric al Austriei, adăpostește numeroase comori, inclusiv săpături romane la Carnuntum și palate baroce magnifice. Capitala landului, St. Pölten, combină arhitectura barocă fermecătoare cu clădiri administrative moderne.",
        en: "Lower Austria is the largest federal state by area and completely surrounds the capital, Vienna. It is a region of contrasts, from the gentle, vine-covered hills of the Weinviertel to the alpine peaks of the Mostviertel. The Danube Valley, especially the Wachau, a UNESCO World Heritage site, shapes the landscape with picturesque villages, mighty abbeys like Melk, and endless apricot orchards. As the historical heartland of Austria, it holds numerous treasures, including Roman excavations in Carnuntum and magnificent baroque palaces. The state capital, St. Pölten, combines charming baroque architecture with modern administrative buildings." 
    },
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
    },
    factsAdvanced: {
        de: [
          "Als flächengrößtes Bundesland Österreichs ist Niederösterreich in vier markante Viertel unterteilt: das Weinviertel, Waldviertel, Mostviertel und Industrieviertel, jedes mit einer einzigartigen Landschaft und Wirtschaft.",
          "Die Wachau ist nicht nur für Wein und Marillen berühmt, sondern auch als Schauplatz des mittelalterlichen Epos 'Nibelungenlied', in dem der Held Rüdiger von Bechelaren residierte.",
          "Das Bundesland hat eine reiche römische Geschichte; der Archäologische Park Carnuntum ist eine der wichtigsten Römerstätten Mitteleuropas und war einst eine Stadt mit 50.000 Einwohnern.",
          "Niederösterreich ist ein bedeutender landwirtschaftlicher Produzent, der Wien und große Teile des Landes mit Wein, Obst und Gemüse versorgt."
        ],
        hu: [
        "Alsó-Ausztria az ország legnagyobb területű és mezőgazdaságilag legjelentősebb tartománya.",
        "A Wachau-völgy a Duna mentén világhírű fehérborairól és UNESCO Világörökségi státuszáról ismert.",
        "Carnuntum egykori római légióstábora ma Ausztria legnagyobb régészeti parkja.",
        "Sankt Pölten Ausztria legfiatalabb tartományi fővárosa, amely 1986-ban kapta meg ezt a címet."
      ],
        ro: ["Austria Inferioară este împărțită în patru sferturi distincte: Weinviertel, Waldviertel, Mostviertel și Industrieviertel.", "Wachau este renumită pentru vin și ca decor al epopeii medievale 'Cântecul Nibelungilor'.", "Landul are o istorie romană bogată, Parcul Arheologic Carnuntum fiind unul dintre cele mai importante situri.", "Este un producător agricol major, aprovizionând Viena cu vin, fructe și legume."],
        en: [
          "As Austria's largest state by area, Lower Austria is divided into four distinct quarters (Viertel): Weinviertel, Waldviertel, Mostviertel, and Industrieviertel, each with a unique landscape and economy.",
          "The Wachau valley is not only famous for its wine and apricots but also for being the setting of the medieval epic 'Nibelungenlied', where the hero Rüdiger von Bechelaren resided.",
          "The state has a rich Roman history, with the archaeological park of Carnuntum being one of the most important Roman sites in Central Europe, once a city of 50,000 people.",
          "Lower Austria is a major agricultural producer, supplying Vienna and much of the country with wine, fruit, and vegetables."
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
    descriptionAdvanced: { 
        de: "Oberösterreich bietet eine faszinierende landschaftliche Vielfalt, die vom hügeligen Granit- und Gneishochland im Norden über das fruchtbare Alpenvorland bis zu den markanten Kalkalpen im Süden reicht. Die Region ist ein industrieller Motor Österreichs, besticht aber auch durch Naturjuwele wie den Nationalpark Kalkalpen. Ein besonderes Highlight ist das weltberühmte Salzkammergut mit Seen wie dem Attersee und Traunsee. Linz, die dynamische Landeshauptstadt an der Donau, hat sich von einer Industriestadt zu einem Zentrum für digitale Kunst gewandelt. Die historische Bedeutung zeigt sich in Städten wie Steyr und dem Weltkulturerbe-Ort Hallstatt.",
        hu: "Felső-Ausztria lenyűgöző táji sokszínűséget kínál, az északi dombos gránit- és gneisz-felföldtől a termékeny Alpokalján át a déli markáns Mészkő-Alpokig. A régió nemcsak Ausztria ipari motorja, hanem olyan természeti kincsekkel is büszkélkedhet, mint a Kalkalpen Nemzeti Park. Különleges fénypont a világhírű Salzkammergut, amelyet Felső-Ausztria Salzburggal és Stájerországgal oszt meg, és olyan mélykék tavakkal nyűgöz le, mint az Attersee és a Traunsee. Linz, a dinamikus tartományi főváros a Dunánál, sikeresen alakult át ipari városból a digitális művészet és a modern kultúra központjává. A régió történelmi jelentőségét olyan bájos városok is mutatják, mint Steyr és a festői világörökségi helyszín, Hallstatt.",
        ro: "Austria Superioară oferă o diversitate peisagistică fascinantă, de la platourile deluroase de granit și gnais din nord, prin prealpii fertili, până la proeminenții Alpi Calcaroși din sud. Regiunea nu este doar un motor industrial al Austriei, ci impresionează și prin bijuterii naturale neatinse, precum Parcul Național Kalkalpen. Un punct de atracție special este faimosul Salzkammergut, pe care Austria Superioară îl împarte cu Salzburg și Stiria, și care încântă cu lacuri de un albastru intens, precum Attersee și Traunsee. Linz, capitala dinamică de pe Dunăre, s-a transformat cu succes dintr-un oraș industrial într-un centru pentru artă digitală și cultură modernă. Importanța istorică a regiunii este evidentă și în orașe fermecătoare precum Steyr și situl pitoresc de patrimoniu mondial Hallstatt.",
        en: "Upper Austria offers a fascinating scenic diversity, ranging from the hilly granite and gneiss highlands in the north, across the fertile Alpine foothills, to the striking Limestone Alps in the south. The region is not only an industrial engine of Austria but also captivates with untouched natural jewels like the Kalkalpen National Park. A special highlight is the world-famous Salzkammergut, which Upper Austria shares with Salzburg and Styria, and which delights with deep blue lakes like Attersee and Traunsee. Linz, the dynamic state capital on the Danube, has successfully transformed from an industrial city into a center for digital art and modern culture. The historical significance of the region is also evident in charming towns like Steyr and the picturesque World Heritage site of Hallstatt."
    },
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
    },
    factsAdvanced: {
        de: [
          "Das Salzkammergut, das sich Oberösterreich mit Salzburg und der Steiermark teilt, verdankt seinen Namen dem Salzmonopol der Habsburger, das der Region jahrhundertelang immensen Reichtum brachte.",
          "Die Hauptstadt Linz wurde 2009 zur Kulturhauptstadt Europas ernannt und hat sich seitdem einen Ruf als Stadt der Medienkunst und Technologie erworben.",
          "Das Mühlviertel im Norden ist geprägt von seinen sanften Granithügeln und war einst ein Zentrum für traditionelle Textilproduktion, insbesondere die Leinenweberei.",
          "Die historische Stadt Steyr war vor der Gegenreformation, die den Katholizismus wiederherstellte, ein bedeutendes Zentrum der protestantischen Reformation in Österreich."
        ],
        hu: [
        "Felső-Ausztria adja Ausztria ipari termelésének mintegy negyedét, különösen Linz környékén.",
        "A Salzkammergut régió több mint 70 tavával népszerű nyári turisztikai célpont.",
        "A Hallstatt-Dachstein térség lenyűgöző sóbányáiról és alpesi tájairól ismert.",
        "A Kalkalpen Nemzeti Park Európa egyik legnagyobb egybefüggő erdőterületét védi."
      ],
        ro: ["Regiunea Salzkammergut își datorează numele monopolului de sare al habsburgilor.", "Capitala Linz a fost numită Capitală Culturală Europeană în 2009 și este un centru al artei media.", "Mühlviertel, cu dealurile sale de granit, a fost un centru pentru producția tradițională de textile.", "Orașul istoric Steyr a fost un centru important al Reformei Protestante în Austria."],
        en: [
          "The Salzkammergut region, shared with Salzburg and Styria, owes its name ('Salt Chamber Goods') to the Habsburg Empire's monopoly on salt mining, which brought immense wealth to the area for centuries.",
          "Linz, the capital, was designated a European Capital of Culture in 2009 and has since cultivated a reputation as a city of media arts and technology.",
          "The Mühlviertel in the north is characterized by its rolling granite hills and is a hub for traditional textile production, particularly linen weaving.",
          "The historic town of Steyr was a major center of the Protestant Reformation in Austria before the Counter-Reformation re-established Catholicism."
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
      de: "Das Bundesland Salzburg ist weltweit ein Synonym für musikalische Brillanz, atemberaubende Alpenpanoramen und barocke Pracht. Die gleichnamige Hauptstadt, Geburtsort von Wolfgang Amadeus Mozart, fasziniert mit ihrer UNESCO-geschützten Altstadt, mächtigen Festungen und den renommierten Salzburger Festspielen. Das Umland bietet eine dramatische Naturkulisse: Von den tiefen Gletschertälern des Nationalparks Hohe Tauern bis zu glitzernden Seen im Salzburger Seenland. Die Krimmler Wasserfälle sind die höchsten Europas. Im Winter verwandeln sich Regionen wie Saalbach und Zell am See in weltbekannte Ski-Mekkas. Die Geschichte des Landes ist untrennbar mit dem Salzabbau verbunden, der den Fürsterzbischöfen einst unermesslichen Reichtum bescherte.",
      hu: "Salzburg tartomány világszerte a zenei zsenialitás, a lélegzetelállító alpesi panorámák és a barokk pompa szinonimája. Az azonos nevű főváros, Wolfgang Amadeus Mozart szülőhelye, UNESCO által védett óvárosával, hatalmas erődítményeivel és a neves Salzburgi Ünnepi Játékokkal nyűgözi le a látogatókat. A környék drámai természeti kulisszát kínál: a Magas-Tauern Nemzeti Park mély gleccservölgyeitől a salzburgi tóvidék csillogó tavaiig. A Krimmli-vízesés Európa legmagasabb vízesése. Télen az olyan régiók, mint Saalbach és Zell am See, világhírű síparadicsomokká válnak. A tartomány történelme elválaszthatatlanul összefonódott a sóbányászattal, amely egykor mérhetetlen gazdagságot hozott a hercegérsekeknek.",
      ro: "Landul Salzburg este sinonim la nivel mondial cu excelența muzicală, panoramele alpine uluitoare și splendoarea barocă. Capitala omonimă, locul de naștere al lui Wolfgang Amadeus Mozart, fascinează cu centrul său vechi protejat de UNESCO, fortărețele impunătoare și renumitul Festival de la Salzburg. Împrejurimile oferă un decor natural dramatic: de la văile glaciare adânci ale Parcului Național Hohe Tauern până la lacurile strălucitoare din regiunea lacurilor salzburgheze. Cascadele Krimml sunt cele mai înalte din Europa. Iarna, regiuni precum Saalbach și Zell am See se transformă în mecca-uri ale schiului de renume mondial. Istoria landului este indisolubil legată de extracția sării, care a adus odinioară bogății imense principilor-arhiepiscopi.",
      en: "The state of Salzburg is a worldwide synonym for musical brilliance, breathtaking Alpine panoramas, and Baroque splendor. The eponymous capital, birthplace of Wolfgang Amadeus Mozart, fascinates with its UNESCO-protected old town, mighty fortresses, and the renowned Salzburg Festival. The surrounding area offers a dramatic natural backdrop: from the deep glacial valleys of the Hohe Tauern National Park to the glittering lakes of the Salzburg Lake District. The Krimml Waterfalls are the highest in Europe. In winter, regions like Saalbach and Zell am See transform into world-famous ski meccas. The state's history is inextricably linked to salt mining, which once brought immense wealth to the prince-archbishops."
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
        "Regiunea a servit drept decor pentru filmul clasic de la Hollywood \\\"Sunetul muzicii\\\".",
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
    },
    factsAdvanced: {
        de: [
          "Der Reichtum der Fürsterzbischöfe von Salzburg, die das Land jahrhundertelang als souveränes Fürstentum regierten, basierte hauptsächlich auf dem Abbau und Handel von Salz, oft auch 'weißes Gold' genannt.",
          "Die 'Sound of Music'-Touren sind eine große Touristenattraktion, obwohl viele Einheimische den Film nie gesehen haben, da er im Ausland berühmter ist als in Österreich selbst.",
          "Die Eisriesenwelt ist ein natürliches Kalkstein-Höhlensystem, dessen Eisformationen durch schmelzenden Schnee entstehen, der in die Höhle abfließt und im Winter gefriert.",
          "Die Salzburger Festspiele, 1920 von Max Reinhardt, Hugo von Hofmannsthal und Richard Strauss gegründet, sind eines der weltweit wichtigsten Festivals für Oper, Schauspiel und klassische Musik."
        ],
        hu: [
        "Salzburg városa Wolfgang Amadeus Mozart szülőhelye és a világ egyik zenei fővárosa.",
        "A Krimmli-vízesés, Európa leghatalmasabb vízesése, a tartomány déli részén található.",
        "A régió gazdagságát évszázadokon át a 'fehér arany', azaz a só bányászata biztosította.",
        "A Hohensalzburg vára Közép-Európa egyik legnagyobb, teljesen fennmaradt erődítménye."
      ],
        ro: ["Bogăția prinților-arhiepiscopi de Salzburg s-a bazat în principal pe extracția și comerțul cu sare.", "Tururile 'Sunetul Muzicii' atrag numeroși turiști internaționali.", "Eisriesenwelt este cel mai mare sistem de peșteri de gheață din lume.", "Festivalul de la Salzburg, fondat în 1920, este unul dintre cele mai importante festivaluri de muzică clasică."],
        en: [
          "The wealth of the Prince-Archbishops of Salzburg, who ruled the state as a sovereign principality for centuries, was primarily built on the mining and trade of salt, often called 'white gold'.",
          "'The Sound of Music' tours are a major tourist attraction, but many locals have never seen the movie, which is more famous abroad than in Austria itself.",
          "The Eisriesenwelt ice cave is a natural limestone cave system whose ice formations are created by melting snow that drains into the cave and freezes during winter, creating a dynamic, ever-changing environment.",
          "The Salzburg Festival, founded in 1920 by Max Reinhardt, Hugo von Hofmannsthal, and Richard Strauss, is one of the world's most important festivals for opera, drama, and classical music."
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
    descriptionAdvanced: { 
        de: "Die Steiermark wird oft als das 'Grüne Herz Österreichs' bezeichnet, da über die Hälfte ihrer Fläche bewaldet ist. Diese vielfältige Region erstreckt sich vom alpinen Norden mit dem Dachsteinmassiv und dem Nationalpark Gesäuse bis in den sanft hügeligen, von Wein- und Obstgärten geprägten Süden. Das steirische Thermenland bietet Entspannung auf höchstem Niveau. Graz, die Landeshauptstadt, vereint als UNESCO-City of Design historische Architektur mit modernem Design. Kulinarisch ist die Steiermark weltberühmt für ihr dunkles Kürbiskernöl, exzellente Weißweine und traditionelle Buschenschänken. Das Lipizzanergestüt Piber, Heimat der berühmten Pferde der Spanischen Hofreitschule, ist ein weiteres kulturelles Highlight.",
        hu: "Stájerországot gyakran 'Ausztria zöld szívének' nevezik, mivel területének több mint fele erdővel borított. Ez a változatos régió az alpesi északi résztől a Dachstein-masszívummal és a Gesäuse Nemzeti Parkkal egészen a déli, lankás, szőlő- és gyümölcsösökkel tarkított vidékig terjed. A stájer termálvidék a legmagasabb szintű kikapcsolódást kínálja. Graz, a tartományi főváros, az UNESCO Dizájn Városaként harmonikusan ötvözi a történelmi építészetet a modern dizájnnal. Kulináris szempontból Stájerország világhírű a sötét tökmagolajáról, a kiváló fehérborairól és a hagyományos borozóiról (Buschenschank). A piberi lipicai ménes, a híres spanyol lovasiskola lovainak otthona, egy másik kulturális fénypont.",
        ro: "Stiria este adesea denumită \\\"Inima Verde a Austriei\\\", deoarece mai mult de jumătate din suprafața sa este acoperită de păduri. Această regiune diversă se întinde de la nordul alpin cu masivul Dachstein și Parcul Național Gesäuse până la sudul deluros, caracterizat de podgorii și livezi. Regiunea termală a Stiriei oferă relaxare la cel mai înalt nivel. Graz, capitala landului, combină armonios arhitectura istorică cu designul modern ca Oraș al Designului UNESCO. Din punct de vedere culinar, Stiria este renumită la nivel mondial pentru uleiul său închis la culoare din semințe de dovleac, vinurile albe excelente și tavernele tradiționale (Buschenschank). Herghelia Lipizzaner de la Piber, casa faimoșilor cai ai Școlii Spaniole de Călărie, este un alt punct de atracție cultural.",
        en: "Styria is often called the 'Green Heart of Austria' as more than half of its area is forested. This diverse region extends from the alpine north with the Dachstein massif and the Gesäuse National Park to the gently hilly south, characterized by vineyards and orchards. The Styrian thermal region offers relaxation at the highest level. Graz, the state capital, harmoniously combines historical architecture with modern design as a UNESCO City of Design. Culinarily, Styria is world-famous for its dark pumpkin seed oil, excellent white wines, and traditional wine taverns (Buschenschank). The Piber Lipizzaner stud, home to the famous horses of the Spanish Riding School, is another cultural highlight."
    },
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
    },
    factsAdvanced: {
        de: [
          "Die Steiermark war einst ein Herzogtum des Heiligen Römischen Reiches und ihr historisches Gebiet war weitaus größer und schloss auch Teile des heutigen Sloweniens mit ein.",
          "Die Stadt Graz ist die Heimat von Arnold Schwarzenegger; das lokale Fußballstadion war nach ihm benannt, bis er nach einer politischen Kontroverse im Jahr 2005 um die Umbenennung bat.",
          "Die 'Buschenschanken' sind eine einzigartige steirische Tradition, bei der lokale Winzer ihren eigenen Wein und kalte Speisen ohne Restaurantlizenz direkt auf ihrem Hof verkaufen dürfen.",
          "Der Erzberg ist ein riesiger Eisen-Tagebau, der seit über 1.300 Jahren in Betrieb ist. Er ist auch Austragungsort des berühmten und extrem harten Motorradrennens 'Erzbergrodeo'."
        ],
        hu: [
        "Stájerországot több mint 60%-os erdőborítottsága miatt Ausztria zöld szívének is nevezik.",
        "A tartomány déli része a 'stájer Toszkána' néven ismert, híres borászatáról és tökmagolajáról.",
        "Graz óvárosa, a Várheggyel (Schlossberg) és az óratoronnyal az UNESCO Világörökség része.",
        "Piber falvában tenyésztik a bécsi Spanyol Lovasiskola híres lipicai lovait."
      ],
        ro: ["Stiria a fost cândva un ducat al Sfântului Imperiu Roman, cu un teritoriu istoric mult mai mare.", "Orașul Graz este orașul natal al lui Arnold Schwarzenegger.", "'Buschenschanken' sunt taverne tradiționale unde viticultorii își vând propriul vin.", "Erzberg este o mină uriașă de fier care funcționează de peste 1.300 de ani."],
        en: [
          "Styria was once a duchy of the Holy Roman Empire and its historical territory was much larger, including parts of modern-day Slovenia.",
          "The city of Graz is home to Arnold Schwarzenegger, and the local football stadium was named after him until he requested its renaming in 2005 following a political controversy.",
          "The 'Buschenschank' wine taverns are a unique Styrian tradition where local vintners can sell their own wine and cold food directly on their premises without a restaurant license.",
          "The Erzberg mine is a vast open-pit iron mine that has been in operation for over 1,300 years and is still a major source of iron ore. It hosts the famously tough 'Erzberg Rodeo' motorcycle race."
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
      de: "Tirol ist das Herz der österreichischen Alpen und wird geprägt von einer atemberaubenden, majestätischen Gebirgslandschaft mit über 500 Gipfeln, die die 3.000-Meter-Marke übersteigen. Es ist weltweit eines der beliebtesten Ziele für Wintersportler und Alpinisten. Innsbruck, die zweifache Olympia-Hauptstadt, bietet eine einzigartige Kombination aus urbanem Flair und unmittelbarer Nähe zu hochalpinen Pisten. Weltberühmte Skigebiete wie Kitzbühel und St. Anton am Arlberg ziehen Wintersportler aus aller Welt an. Im Sommer verwandelt sich Tirol in ein Wander- und Kletterparadies. Die Swarovski Kristallwelten in Wattens sind ein einzigartiges kulturelles Erlebnis.",
      hu: "Tirol az osztrák Alpok szíve, amelyet lélegzetelállító, fenséges hegyvidéki táj jellemez, több mint 500, 3000 métert meghaladó csúccsal. Világszerte a téli sportok kedvelőinek és az alpinistáknak egyik legkedveltebb célpontja. Innsbruck, a kétszeres olimpiai főváros, az urbánus hangulat és a magashegyi sípályák közelségének egyedülálló kombinációját kínálja. Olyan világhírű síterepek, mint Kitzbühel és St. Anton am Arlberg, a világ minden tájáról vonzzák a téli sportok szerelmeseit. Nyáron Tirol túrázó- és hegymászóparadicsommá változik. A wattensi Swarovski Kristályvilág egyedülálló kulturális élményt nyújt.",
      ro: "Tirolul este inima Alpilor austrieci și se caracterizează printr-un peisaj montan uluitor, maiestuos, cu peste 500 de vârfuri care depășesc 3.000 de metri. Este una dintre cele mai populare destinații la nivel mondial pentru pasionații de sporturi de iarnă și alpiniști. Innsbruck, de două ori capitală olimpică, oferă o combinație unică de fler urban și proximitate imediată cu pârtiile de mare altitudine. Stațiuni de schi de renume mondial, precum Kitzbühel și St. Anton am Arlberg, atrag pasionați de sporturi de iarnă din întreaga lume. Vara, Tirolul se transformă într-un paradis pentru drumeții și alpinism. Lumea de Cristal Swarovski din Wattens oferă o experiență culturală unică.",
      en: "Tyrol is the heart of the Austrian Alps, characterized by a breathtaking, majestic mountain landscape with over 500 peaks exceeding 3,000 meters. It is one of the most popular destinations worldwide for winter sports enthusiasts and alpinists. Innsbruck, the two-time Olympic capital, offers a unique combination of urban flair and immediate proximity to high-alpine slopes. World-famous ski resorts like Kitzbühel and St. Anton am Arlberg attract winter sports enthusiasts from all over the world. In summer, Tyrol transforms into a hiking and climbing paradise. The Swarovski Crystal Worlds in Wattens offer a unique cultural experience."
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
        "Valea Ötztal a devenit faimoasă în întreaga lume datorită descoperirii mumiei \\\"Ötzi\\\".",
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
    },
    factsAdvanced: {
        de: [
          "Die historische Region Tirol ist durch den Vertrag von Saint-Germain-en-Laye nach dem Ersten Weltkrieg zwischen Österreich (Nord- und Osttirol) und Italien (Südtirol und Trentino) geteilt.",
          "Ötzi, die gut erhaltene natürliche Gletschermumie eines Mannes, der um 3.300 v. Chr. lebte, wurde 1991 in den Ötztaler Alpen entdeckt und lieferte beispiellose Erkenntnisse über die Kupferzeit in Europa.",
          "Tirol hat einen eigenen, ausgeprägten Dialekt, der für andere Deutschsprachige schwer zu verstehen sein kann und die historische Isolation der Region widerspiegelt.",
          "Andreas Hofer, ein Tiroler Wirt, führte 1809 einen Bauernaufstand gegen Napoleons Truppen an und gilt bis heute als Nationalheld."
        ],
        hu: [
        "Tirol Ausztria leghegyesebb tartománya, területének nagy része magashegység.",
        "Innsbruck kétszer is rendezett téli olimpiai játékokat (1964 és 1976).",
        "Az Aranytető (Goldenes Dachl) I. Miksa császár idejéből származó híres innsbrucki jelkép.",
        "Tirol az európai téli turizmus egyik legfontosabb központja, évente milliók látogatják."
      ],
        ro: ["Regiunea istorică Tirol a fost împărțită între Austria și Italia după Primul Război Mondial.", "Ötzi, mumia de gheață a unui om din Epoca Cuprului, a fost descoperit în Alpii Ötztal în 1991.", "Tirolul are un dialect propriu distinct, greu de înțeles pentru alți vorbitori de germană.", "Andreas Hofer a condus o rebeliune țărănească împotriva trupelor lui Napoleon în 1809."],
        en: [
          "The historical region of Tyrol is divided between Austria (North and East Tyrol) and Italy (South Tyrol and Trentino) as a result of the Treaty of Saint-Germain-en-Laye after World War I.",
          "'Ötzi the Iceman', a well-preserved natural mummy of a man who lived around 3,300 BCE, was discovered in the Ötztal Alps in 1991, providing unprecedented insights into Chalcolithic Europe.",
          "Tyrol has its own distinct German dialect, which can be difficult for other German speakers to understand, reflecting the region's historical isolation.",
          "Andreas Hofer, a Tyrolean innkeeper, led a peasant rebellion against Napoleon's forces in 1809 and is considered a national hero."
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
    descriptionAdvanced: { 
        de: "Vorarlberg, das westlichste Bundesland, besticht durch landschaftliche Vielfalt vom Bodensee bis zu den Gletschern der Silvretta. Dialekt und Kultur unterscheiden sich deutlich vom Rest Österreichs. Das Rheintal ist eine hochinnovative Wirtschaftsregion, während der Bregenzerwald und das Montafon für Natur, moderne Holzarchitektur und Wintersport stehen. Bregenz am Bodensee zieht mit den Festspielen und der Seebühne Kulturliebhaber an. Das 'Ländle' ist zudem für seinen Bergkäse bekannt und gilt als Pionier für nachhaltiges Bauen, das traditionelles Handwerk mit modernem Design verbindet.",
        hu: "Vorarlberg, Ausztria legnyugatibb tartománya, a Bodeni-tótól a Silvretta gleccsereiig terjedő tájképi sokszínűségével nyűgöz le. A nyelvjárás és a kultúra jelentősen eltér Ausztria többi részétől. A Rajna-völgy egy rendkívül innovatív gazdasági régió, míg a Bregenzerwald és a Montafon a természetről, a modern faépítészetről és a téli sportokról ismert. A Bodeni-tó partján fekvő Bregenz a Festspiele-vel és a tavi színpaddal vonzza a kultúra kedvelőit. A 'Ländle' emellett híres hegyi sajtjáról, és a fenntartható építészet úttörőjének számít, amely a hagyományos kézművességet a modern dizájnnal ötvözi.",
        ro: "Vorarlberg, cel mai vestic land federal, impresionează prin diversitatea sa peisagistică, de la Lacul Constanța la ghețarii din Silvretta. Dialectul și cultura diferă semnificativ de restul Austriei. Valea Rinului este o regiune economică extrem de inovatoare, în timp ce Bregenzerwald și Montafon sunt cunoscute pentru natură, arhitectură modernă din lemn și sporturi de iarnă. Bregenz, pe malul Lacului Constanța, atrage iubitorii de cultură cu festivalul său și scena lacustră. 'Ländle' este, de asemenea, renumit pentru brânza sa de munte și este considerat un pionier în construcțiile durabile, combinând meșteșugul tradițional cu designul modern.",
        en: "Vorarlberg, the westernmost federal state, impresses with its scenic diversity from Lake Constance to the glaciers of the Silvretta. Dialect and culture differ significantly from the rest of Austria. The Rhine Valley is a highly innovative economic region, while the Bregenzerwald and Montafon are known for nature, modern wooden architecture, and winter sports. Bregenz on Lake Constance attracts culture lovers with its festival and lake stage. The 'Ländle' is also famous for its mountain cheese and is considered a pioneer in sustainable construction, combining traditional craftsmanship with modern design."
    },
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
        "Localnicii se referă adesea cu afecțiune la acest stat federal ca fiind \\\"Ländle\\\"."
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
    },
    factsAdvanced: {
        de: [
          "Der alemannische Dialekt Vorarlbergs macht das Bundesland kulturell und sprachlich seinen Nachbarn der Schweiz, Liechtenstein und dem deutschen Schwaben näher als dem Rest Österreichs, wo bairisch-österreichische Dialekte gesprochen werden.",
          "Die Region ist ein Vorreiter für nachhaltige und moderne Architektur, insbesondere im Umgang mit Holz. Die Bewegung der 'Vorarlberger Baukünstler' hat für ihre minimalistischen und umweltfreundlichen Designs internationale Anerkennung gefunden.",
          "Aufgrund seiner Lage westlich des Arlbergpasses war es historisch einfacher, mit der Schweiz und Deutschland zu handeln, was zu einer starken, unabhängigen und exportorientierten Wirtschaft führte.",
          "In einer Volksabstimmung 1919 stimmten über 80 % der Vorarlberger Bevölkerung für den Beitritt zur Schweiz, was jedoch am Widerstand der Alliierten und der Schweizer Regierung scheiterte."
        ],
        hu: [
        "Vorarlberg lakossága, ellentétben a többi osztrák tartománnyal, alemann dialektust beszél.",
        "A Bregenzerwald régió híres egyedi faművességéről és a modern faépítészetéről.",
        "A Bregenzer Festspiele fesztivált a Boden-tó vizén, egy lenyűgöző úszó színpadon tartják.",
        "A tartomány fejlett textilipara történelmi jelentőségű a régió gazdasági növekedésében."
      ],
        ro: ["Dialectul alemanic din Vorarlberg îl apropie cultural și lingvistic de Elveția și Liechtenstein.", "Regiunea este un pionier în arhitectura durabilă și modernă din lemn.", "Datorită locației sale, a avut istoric un comerț intens cu Elveția și Germania.", "Într-un plebiscit din 1919, 80% din populație a votat pentru aderarea la Elveția."],
        en: [
          "Vorarlberg's Alemannic dialect makes it culturally and linguistically closer to its neighbors Switzerland, Liechtenstein, and Germany's Swabia region than to the rest of Austria, which speaks Austro-Bavarian dialects.",
          "The region is a pioneer in sustainable and modern architecture, particularly using wood. The 'Vorarlberger Baukünstler' movement has gained international acclaim for its minimalist and eco-friendly designs.",
          "Due to its location west of the Arlberg mountain pass, it was historically easier to trade with Switzerland and Germany, leading to a strong, independent, and export-oriented economy.",
          "In a 1919 referendum, over 80% of Vorarlberg's population voted to join Switzerland, but this was blocked by the opposition of the Allied powers and the Swiss government."
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
      de: "Wien ist eine Stadt von unvergleichlicher historischer Tiefe und moderner Lebensqualität. Als ehemaliges Zentrum des Habsburgerreiches atmet jede Straße imperiale Geschichte. Die Stadt ist weltweit als Hauptstadt der klassischen Musik bekannt, ein Erbe von Genies wie Mozart, Beethoven und Strauss. Prachtvolle Bauten wie Schloss Schönbrunn und die Hofburg dominieren das Stadtbild. Der gotische Stephansdom thront über der Altstadt, die zum UNESCO-Weltkulturerbe gehört. Wien ist aber auch eine pulsierende Metropole, die regelmäßig Spitzenplätze in Rankings zur Lebensqualität belegt. Die legendäre Kaffeehauskultur, die zum immateriellen Kulturerbe zählt, bietet Raum für Entschleunigung.",
      hu: "Bécs páratlan történelmi mélységgel és modern életminőséggel rendelkező város. A Habsburg Birodalom egykori központjaként minden utca császári történelmet áraszt. A város a klasszikus zene világfővárosaként ismert, olyan zsenik örökségét ápolva, mint Mozart, Beethoven és Strauss. Olyan pompás épületek, mint a Schönbrunni kastély és a Hofburg, uralják a városképet. A gótikus Szent István-székesegyház az UNESCO Világörökség részét képező óváros fölé magasodik. Bécs ugyanakkor egy pezsgő metropolisz is, amely rendszeresen előkelő helyet foglal el az életminőségi rangsorokban. A legendás kávéházi kultúra, amely a szellemi kulturális örökség része, a lassulás helyszínét kínálja.",
      ro: "Viena este un oraș cu o profunzime istorică de neegalat și o calitate modernă a vieții. Ca fost centru al Imperiului Habsburgic, fiecare stradă respiră istorie imperială. Orașul este cunoscut la nivel mondial drept capitala muzicii clasice, o moștenire a unor genii precum Mozart, Beethoven și Strauss. Clădiri magnifice precum Palatul Schönbrunn și Hofburg domină peisajul urban. Catedrala gotică Sfântul Ștefan veghează asupra orașului vechi, inclus în Patrimoniul Mondial UNESCO. Dar Viena este și o metropolă vibrantă, clasată în mod regulat pe primele locuri în clasamentele privind calitatea vieții. Legendara cultură a cafenelelor, parte a patrimoniului cultural imaterial, oferă un spațiu pentru relaxare.",
      en: "Vienna is a city of unparalleled historical depth and modern quality of life. As the former center of the Habsburg Empire, every street breathes imperial history. The city is known worldwide as the capital of classical music, a legacy of geniuses like Mozart, Beethoven, and Strauss. Magnificent buildings such as Schönbrunn Palace and the Hofburg dominate the cityscape. The Gothic St. Stephen's Cathedral towers over the old town, a UNESCO World Heritage site. But Vienna is also a vibrant metropolis, regularly ranking at the top of quality of life surveys. The legendary coffee house culture, part of the intangible cultural heritage, offers a space for deceleration."
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
    },
    factsAdvanced: {
        de: [
          "Die Heurigen-Tradition umfasst den Besuch lokaler Weinschenken an den Stadträndern, um den jungen Wein der diesjährigen Ernte zu trinken – eine Praxis, die einzigartig für Wien ist.",
          "Wien war die Hauptstadt der österreichisch-ungarischen Doppelmonarchie und an der Wende zum 20. Jahrhundert ein führendes kulturelles Zentrum Europas, in dem Persönlichkeiten wie Sigmund Freud, Gustav Klimt und Ludwig Wittgenstein lebten.",
          "Die Stadt ist in 23 Bezirke unterteilt, die sich spiralförmig um den zentralen ersten Bezirk, das historische Herz der Stadt, anordnen.",
          "Die Ringstraße ist ein Prachtboulevard, der im 19. Jahrhundert die alten Stadtmauern ersetzte und von prunkvollen Bauten wie der Staatsoper, dem Parlament und dem Rathaus gesäumt ist.",
          "Das Rote Wien (1919–1934) bezeichnet jene Periode, als die Sozialdemokratische Partei die Stadt regierte und groß angelegte soziale Wohnbauprojekte (Gemeindebauten) umsetzte, die das Stadtbild bis heute prägen."
        ],
        hu: [
        "Bécs az egyetlen osztrák tartomány, amely egyben város is, az ország lakosságának egyötödével.",
        "A Schönbrunni kastély a Habsburgok nyári rezidenciája volt, 1441 szobával rendelkezik.",
        "Bécs egyike a világ négy ENSZ-központjának (New York, Genf és Nairobi mellett).",
        "A bécsi kávéházi kultúra hivatalosan is az UNESCO szellemi kulturális örökségének része."
      ],
        ro: ["Tradiția 'Heuriger' presupune vizitarea tavernelor locale pentru a degusta vinul tânăr.", "La începutul secolului XX, Viena a fost un centru cultural european pentru Sigmund Freud și alții.", "Orașul este împărțit în 23 de districte dispuse în spirală în jurul primului district central.", "Ringstraße este un bulevard magnific construit în secolul al XIX-lea în locul vechilor ziduri.", "'Viena Roșie' (1919-1934) a fost perioada de construire a marilor proiecte de locuințe sociale."],
        en: [
          "The 'Heuriger' tradition involves visiting local taverns on the outskirts of the city to drink young wine from the current year's harvest, a practice unique to Vienna.",
          "Vienna was the capital of the Austro-Hungarian Empire and a leading cultural center of Europe at the turn of the 20th century, home to figures like Sigmund Freud, Gustav Klimt, and Ludwig Wittgenstein.",
          "The city is divided into 23 districts ('Bezirke'), which spiral out from the central first district, the historic heart of the city.",
          "The 'Ringstrasse' is a grand boulevard that replaced the old city walls in the 19th century, lined with magnificent buildings like the State Opera, Parliament, and City Hall.",
          "Red Vienna (Rotes Wien) refers to the period between 1919 and 1934 when the Social Democratic Party governed the city and implemented large-scale social housing projects (Gemeindebauten), which still define the city's housing landscape."
        ]
    }
  }
];

export const austriaPois = [
  ...austriaRegions,
  ...austriaCities,
  ...poiExtraAustriaHistorical,
  ...poiExtraAustriaIndustry,
  ...poiExtraAustriaLife,
  ...poiExtraAustriaNature
];

export const austriaAllPoi = austriaPois;

