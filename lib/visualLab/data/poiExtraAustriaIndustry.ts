
import type { POI } from "./poi";

export const poiExtraAustriaIndustry: POI[] = [
  {
    id: "industry-voestalpine-stahlwelt-extra",
    type: "industry",
    parent: "AT-4",
    coords: [14.333, 48.283],
    name: { de: "voestalpine Stahlwelt", hu: "voestalpine Acélvilág", ro: "voestalpine Lumea Oțelului", en: "voestalpine Steel World" },
    description: {
      de: "Ein Erlebnis- und Ausstellungszentrum in Linz, das die Welt der Stahlerzeugung des internationalen Technologiekonzerns voestalpine präsentiert.",
      hu: "Élmény- és kiállítási központ Linzben, amely bemutatja a nemzetközi technológiai konszern, a voestalpine acélgyártásának világát.",
      ro: "Un centru de experiență și expoziție în Linz, care prezintă lumea producției de oțel a grupului tehnologic internațional voestalpine.",
      en: "An experience and exhibition center in Linz that presents the world of steel production of the international technology group voestalpine."
    },
    facts: {
      de: ["Interaktive Ausstellung über die Herstellung und Anwendung von Stahl.", "Werkstouren ermöglichen einen Blick in das aktive Stahlwerk.", "Einer der größten Industriestandorte Österreichs."],
      hu: ["Interaktív kiállítás az acél gyártásáról és felhasználásáról.", "Üzemlátogatások lehetővé teszik a betekintést a működő acélműbe.", "Ausztria egyik legnagyobb ipari telephelye."],
      ro: ["Expoziție interactivă despre producția și aplicarea oțelului.", "Tururile uzinei permit o privire în oțelăria activă.", "Unul dintre cele mai mari situri industriale din Austria."],
      en: ["Interactive exhibition on the production and application of steel.", "Plant tours allow a glimpse into the active steelworks.", "One of the largest industrial sites in Austria."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "A voestalpine Stahlwelt (Acélvilág) egy egyedülálló élményközpont Linzben, a voestalpine acélművek hatalmas, 5,2 négyzetkilométeres területén. A kiállítás interaktív és multimédiás eszközökkel mutatja be az acél lenyűgöző világát, a gyártás folyamatát a nyersanyagtól a késztermékig, valamint az acél sokoldalú felhasználását a mindennapi életben. A látogatók megismerhetik a legmodernebb acéltechnológiákat, és megérthetik, hogyan válik a vasércből csúcstechnológiás termék, például autókarosszéria vagy vasúti sín. A kiállítás mellett a Stahlwelt üzemi túrákat is kínál, ahol a látogatók egy speciálisan átalakított buszról, testközelből figyelhetik meg a működő kohókat és acélműveket, megtapasztalva a gyártás monumentalitását. Az Acélvilág bepillantást enged Ausztria egyik legfontosabb ipari vállalatának kulisszái mögé, összekötve a technológiát, az innovációt és az emberi teljesítményt.",
      ro: "voestalpine Stahlwelt (Lumea Oțelului) este un centru de experiență unic în Linz, pe vastul sit de 5,2 kilometri pătrați al oțelăriei voestalpine. Expoziția utilizează instrumente interactive și multimedia pentru a prezenta lumea fascinantă a oțelului, de la materii prime la produse finite și aplicațiile sale versatile. Vizitatorii pot învăța despre cele mai recente tehnologii ale oțelului și pot înțelege cum minereul de fier devine un produs de înaltă tehnologie, cum ar fi caroseriile de mașini. Pe lângă expoziție, Stahlwelt oferă tururi ale uzinei unde vizitatorii pot observa furnalele și oțelăriile active dintr-un autobuz special modificat, experimentând monumentalitatea producției. Lumea Oțelului oferă o privire în spatele scenei uneia dintre cele mai importante companii industriale din Austria. Tehnologie K9 - Inovații în industrie.",
      en: "voestalpine Stahlwelt (Steel World) is a unique experience center in Linz, located on the vast 5.2-square-kilometer site of the voestalpine steelworks. The exhibition uses interactive and multimedia tools to present the fascinating world of steel, from raw materials to finished products and its versatile applications. Visitors can learn about the latest steel technologies and understand how iron ore becomes a high-tech product like a car body. In addition to the exhibition, Stahlwelt offers plant tours where visitors can observe the active blast furnaces and steel mills from a specially modified bus, experiencing the monumentality of production. Steel World offers a behind-the-scenes look at one of Austria's most important industrial companies. Technology Grade 9 - Innovations in Industry."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A voestalpine a világ egyik vezető acél- és technológiai konszernje.",
        "A linzi üzem Ausztria legnagyobb ipari telephelye.",
        "A Stahlwelt kiállítási épülete egy óriási olvasztótégelyt szimbolizál.",
        "Az üzemi túra során a látogatók láthatják a 110 méter magas kohót.",
        "A voestalpine fejlesztette ki a phs-ultraform® technológiát, amely ultra-erős és könnyű acél alkatrészek gyártását teszi lehetővé az autóipar számára.",
        "A linzi acélmű évente körülbelül 6 millió tonna acélt termel.",
        "A kiállítás egyik fénypontja egy nanoszkóp, amellyel az acél szerkezetébe lehet bepillantani.",
        "A cégcsoport világszerte mintegy 52 000 embert foglalkoztat."
      ],
      ro: [
        "voestalpine este unul dintre cele mai importante grupuri de oțel și tehnologie din lume.",
        "Uzina din Linz este cel mai mare sit industrial din Austria.",
        "Clădirea expozițională Stahlwelt simbolizează un creuzet gigantic.",
        "În timpul turului uzinei, vizitatorii pot vedea furnalul de 110 metri înălțime.",
        "voestalpine a dezvoltat tehnologia phs-ultraform® pentru componente auto ultra-rezistente și ușoare.",
        "Oțelăria din Linz produce anual aproximativ 6 milioane de tone de oțel.",
        "Un punct culminant al expoziției este un nanoscop care permite vizualizarea structurii oțelului.",
        "Grupul de companii are aproximativ 52.000 de angajați în întreaga lume."
      ],
      en: [
        "voestalpine is one of the world's leading steel and technology groups.",
        "The Linz plant is the largest industrial site in Austria.",
        "The Stahlwelt exhibition building symbolizes a giant crucible.",
        "During the plant tour, visitors can see the 110-meter-high blast furnace.",
        "voestalpine developed the phs-ultraform® technology for ultra-strong and lightweight automotive components.",
        "The Linz steelworks produces about 6 million tons of steel annually.",
        "A highlight of the exhibition is a nanoscope that allows a view into the structure of steel.",
        "The group employs approximately 52,000 people worldwide."
      ]
    }
  },
  {
    id: "industry-red-bull-ring-extra",
    type: "industry",
    parent: "AT-6",
    coords: [14.764, 47.220],
    name: { de: "Red Bull Ring", hu: "Red Bull Ring", ro: "Red Bull Ring", en: "Red Bull Ring" },
    description: {
      de: "Eine international bekannte Motorsport-Rennstrecke in Spielberg, Steiermark, die Formel-1- und MotoGP-Rennen ausrichtet.",
      hu: "Nemzetközileg ismert motorsport versenypálya Spielbergben, Stájerországban, amely Forma-1-es és MotoGP-versenyeknek ad otthont.",
      ro: "Un circuit de curse de motorsport de renume internațional în Spielberg, Stiria, care găzduiește curse de Formula 1 și MotoGP.",
      en: "An internationally known motorsport racetrack in Spielberg, Styria, which hosts Formula 1 and MotoGP races."
    },
    facts: {
      de: ["Im Besitz des Energy-Drink-Herstellers Red Bull.", "Bietet Fahrerlebnisse und Rennstreckentrainings für die Öffentlichkeit an.", "Der 'Bulle von Spielberg' ist eine riesige Stahlskulptur."],
      hu: ["A Red Bull energiaital-gyártó tulajdonában van.", "Vezetési élményeket és versenypálya-tréningeket kínál a nagyközönségnek.", "A 'spielbergi bika' egy hatalmas acélszobor."],
      ro: ["Deținut de producătorul de băuturi energizante Red Bull.", "Oferă experiențe de condus și antrenamente pe circuit pentru public.", "'Taurul din Spielberg' este o sculptură gigantică din oțel."],
      en: ["Owned by the energy drink manufacturer Red Bull.", "Offers driving experiences and racetrack training for the public.", "The 'Bull of Spielberg' is a giant steel sculpture."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Red Bull Ring, a stájerországi Spielbergben található modern versenypálya, a motorsportok osztrák szentélye. Az eredetileg Österreichring néven ismert pályát a Red Bull alapítója, Dietrich Mateschitz vásárolta meg és építtette újjá, majd 2011-ben nyitotta meg újra. A pálya azóta ismét a nemzetközi motorsport elitjének ad otthont, többek között a Formula–1 Osztrák Nagydíjnak és a MotoGP-nek. A Red Bull Ring különlegessége a környező dombos tájba való beágyazottsága, ami jelentős szintkülönbségeket és izgalmas, belátható kanyarkombinációkat eredményez. A pálya közepén egy 18 méter magas, 68 tonnás acélbika-szobor, a 'spielbergi bika' áll, amely a Red Bull márka erejét szimbolizálja. A versenypálya nemcsak a profi versenyzők számára nyitott; a 'Projekt Spielberg' keretében a nagyközönség is kipróbálhatja magát különböző versenyautók volánja mögött, vezetési tréningeken vehet részt, vagy gokartozhat a szomszédos pályán.",
      ro: "Red Bull Ring din Spielberg, Stiria, este sanctuarul austriac al sporturilor cu motor. Cunoscut inițial ca Österreichring, circuitul a fost achiziționat și reconstruit de fondatorul Red Bull, Dietrich Mateschitz, redeschizându-se în 2011. De atunci, circuitul a găzduit din nou elita sporturilor cu motor internaționale, inclusiv Marele Premiu al Austriei de Formula 1 și MotoGP. Caracteristica specială a Red Bull Ring este integrarea sa în peisajul deluros înconjurător. În centrul circuitului se află o sculptură de taur din oțel de 18 metri înălțime, 'taurul din Spielberg'. Circuitul este deschis și publicului, care poate participa la antrenamente de condus sau la karting. Sport și Tehnologie K9 - Ingineria curselor auto.",
      en: "The Red Bull Ring in Spielberg, Styria, is the Austrian sanctuary of motorsports. Originally known as the Österreichring, the track was purchased and rebuilt by Red Bull founder Dietrich Mateschitz, reopening in 2011. Since then, the circuit has once again hosted the international motorsport elite, including the Formula 1 Austrian Grand Prix and the MotoGP. The special feature of the Red Bull Ring is its integration into the surrounding hilly landscape. In the center of the circuit stands an 18-meter-high, 68-ton steel bull sculpture, the 'Bull of Spielberg'. The track is also open to the public, who can participate in driving training or karting. Sports & Technology Grade 9 - Auto Racing Engineering."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A pálya hossza 4,318 kilométer, és 10 kanyarból áll.",
        "Az eredeti Österreichring 1969 és 1987 között adott otthont a Formula–1-es nagydíjnak.",
        "A pálya a nagy szintkülönbségek miatt az egyik leggyorsabb a versenynaptárban.",
        "A Red Bull Ring mellett egy off-road pálya és egy vezetéstechnikai centrum is található.",
        "A 'voestalpine wing', egy modern, szárnyat formázó épület, a pálya egyik építészeti jellegzetessége.",
        "A legmagasabb és legalacsonyabb pont közötti szintkülönbség 65 méter.",
        "A 'spielbergi bika' szobrát Clemens Neugebauer és Martin Kölbl tervezték.",
        "A pálya évente több százezer látogatót vonz a különböző versenyekre és rendezvényekre."
      ],
      ro: [
        "Circuitul are o lungime de 4,318 kilometri și 10 viraje.",
        "Österreichring-ul original a găzduit Marele Premiu de Formula 1 între 1969 și 1987.",
        "Datorită diferențelor mari de nivel, circuitul este unul dintre cele mai rapide din calendar.",
        "Lângă Red Bull Ring există și un circuit de off-road și un centru de antrenament pentru șoferi.",
        "'voestalpine wing', o clădire modernă în formă de aripă, este o caracteristică arhitecturală a circuitului.",
        "Diferența de nivel între punctul cel mai înalt și cel mai jos este de 65 de metri.",
        "Statuia 'taurului din Spielberg' a fost proiectată de Clemens Neugebauer și Martin Kölbl.",
        "Circuitul atrage anual sute de mii de vizitatori la diverse curse și evenimente."
      ],
      en: [
        "The track is 4.318 kilometers long and has 10 turns.",
        "The original Österreichring hosted the Formula 1 Grand Prix between 1969 and 1987.",
        "Due to its significant changes in elevation, the circuit is one of the fastest in the calendar.",
        "Next to the Red Bull Ring, there is an off-road track and a driver training center.",
        "The 'voestalpine wing', a modern, wing-shaped building, is an architectural feature of the circuit.",
        "The difference in altitude between the highest and lowest points is 65 meters.",
        "The 'Bull of Spielberg' statue was designed by Clemens Neugebauer and Martin Kölbl.",
        "The track attracts hundreds of thousands of visitors annually for various races and events."
      ]
    }
  },
  {
    id: "agriculture-südsteirische-weinstrasse-extra",
    type: "agriculture",
    parent: "AT-6",
    coords: [15.53, 46.69],
    name: { de: "Südsteirische Weinstraße", hu: "Dél-Stájer borút", ro: "Drumul Vinului din Stiria de Sud", en: "South Styrian Wine Road" },
    description: {
      de: "Eine der bekanntesten Weinrouten Österreichs, berühmt für ihre malerischen Weinberge, Klapotetz-Windmühlen und exzellenten Sauvignon Blanc.",
      hu: "Ausztria egyik legismertebb borútja, híres festői szőlőültetvényeiről, klapotetz-szélmalmairól és kiváló Sauvignon Blanc borairól.",
      ro: "Unul dintre cele mai cunoscute trasee viticole din Austria, renumit pentru podgoriile sale pitorești, morile de vânt Klapotetz și excelentul Sauvignon Blanc.",
      en: "One of Austria's most famous wine routes, renowned for its picturesque vineyards, Klapotetz windmills, and excellent Sauvignon Blanc."
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Dél-Stájer borút (Südsteirische Weinstraße) Ausztria egyik legfestőibb és legismertebb borvidéki útvonala, amelyet gyakran 'stájer Toszkánának' is neveznek. Az út a szlovén határ mentén kanyarog Ehrenhausen és Leutschach között, meredek domboldalakon, végtelennek tűnő szőlősorok között. A táj jellegzetes elemei a 'klapotetz'-ek, a madárijesztőként funkcionáló, csattogó hangot adó faszerkezetek. A régió elsősorban a friss, ropogós fehérborairól híres, különösen a Sauvignon Blanc-ról, a Welschrieslingről (olaszrizling) és a Muskatellerről (muskotály). Az út mentén számtalan 'Buschenschank' található. Ezek olyan családi borozók, ahol a gazdák a saját termelésű boraikat és hideg, helyi alapanyagokból készült ételeket (Brettljause) kínálnak. A Dél-Stájer borút nemcsak gasztronómiai élmény, hanem egyben egy utazás egy lenyűgöző, békés és vendégszerető tájon keresztül, amely minden évszakban más arcát mutatja.",
      ro: "Drumul Vinului din Stiria de Sud (Südsteirische Weinstraße) este una dintre cele mai pitorești și renumite rute viticole din Austria, adesea numită 'Toscana Stiriană'. Drumul șerpuiește de-a lungul graniței cu Slovenia, printre dealuri abrupte acoperite cu rânduri nesfârșite de viță de vie. Elementele caracteristice ale peisajului sunt 'klapotetz'-urile, structuri de lemn care scot un sunet de clopot pentru a speria păsările. Regiunea este renumită pentru vinurile sale albe proaspete, în special Sauvignon Blanc. De-a lungul drumului se găsesc numeroase 'Buschenschänken', taverne familiale unde fermierii își oferă propriile vinuri și mâncăruri reci locale. Drumul Vinului din Stiria de Sud nu este doar o experiență gastronomică, ci și o călătorie printr-un peisaj uimitor și primitor. Agricultură K7 - Viticultură.",
      en: "The South Styrian Wine Road (Südsteirische Weinstraße) is one of Austria's most picturesque and renowned wine routes, often called the 'Styrian Tuscany'. The road winds along the Slovenian border, among steep hills covered with endless rows of vines. Characteristic features of the landscape are the 'klapotetz', wooden structures that make a clattering sound to scare away birds. The region is famous for its fresh, crisp white wines, especially Sauvignon Blanc. Along the road, there are numerous 'Buschenschänken', family-run taverns where farmers offer their own wines and cold local dishes. The South Styrian Wine Road is not just a gastronomic experience, but also a journey through a stunning and welcoming landscape. Agriculture Grade 7 - Viticulture."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A borút hossza körülbelül 25 kilométer, de a mellékutakkal együtt több mint 70 km-t is be lehet járni.",
        "A 'klapotetz' hagyományosan hat-nyolc különböző fafajtából készül.",
        "A 'Buschenschank' intézménye II. József császár 1784-es rendeletén alapul, amely megengedte a gazdáknak, hogy saját termékeiket kimérjék.",
        "A régióban található a világ legnagyobb, működőképes szőlőprése Gamlitzban.",
        "A Sauvignon Blanc szőlőfajta a dél-stájer borvidék zászlóshajója.",
        "A 'Herzerlstraße' (Szívecskés út) egy szív alakú útkanyarulat a szőlőültetvények között, amely népszerű fotótéma.",
        "A régióban a szüretet 'Welsch' vagy 'Weinlese' néven emlegetik, és gyakran fesztiválokkal ünneplik.",
        "A borút mentén számos gyalogos és kerékpáros túraútvonal is található."
      ],
      ro: [
        "Drumul vinului are o lungime de aproximativ 25 de kilometri, dar cu drumurile secundare se poate parcurge peste 70 km.",
        "'Klapotetz' este fabricat în mod tradițional din șase până la opt tipuri diferite de lemn.",
        "Instituția 'Buschenschank' se bazează pe un decret din 1784 al împăratului Iosif al II-lea.",
        "În regiune se află cea mai mare presă de struguri funcțională din lume, în Gamlitz.",
        "Strugurii Sauvignon Blanc sunt soiul emblematic al regiunii viticole din Stiria de Sud.",
        "'Herzerlstraße' (Drumul Inimii) este o curbă în formă de inimă printre podgorii, un subiect popular pentru fotografii.",
        "Recoltarea strugurilor în regiune este adesea celebrată cu festivaluri.",
        "De-a lungul drumului vinului există numeroase trasee de drumeții și ciclism."
      ],
      en: [
        "The wine road is about 25 kilometers long, but with the side roads, you can travel over 70 km.",
        "A 'klapotetz' is traditionally made from six to eight different types of wood.",
        "The 'Buschenschank' institution is based on a 1784 decree by Emperor Joseph II.",
        "The region is home to the world's largest functioning wine press in Gamlitz.",
        "Sauvignon Blanc grapes are the flagship variety of the South Styrian wine region.",
        "The 'Herzerlstraße' (Heart Road) is a heart-shaped bend in the road among the vineyards, a popular photo spot.",
        "The grape harvest in the region is often celebrated with festivals.",
        "There are numerous hiking and cycling trails along the wine road."
      ]
    }
  },
  {
    id: "industry-swarovski-kristallwelten-extra",
    type: "industry",
    parent: "AT-7",
    coords: [11.89, 47.30],
    name: { de: "Swarovski Kristallwelten", hu: "Swarovski Kristályvilágok", ro: "Lumea de Cristal Swarovski", en: "Swarovski Crystal Worlds" },
    description: {
      de: "Ein Museum und eine Erlebniswelt in Wattens, Tirol, die die Welt des Kristallglasherstellers Swarovski feiert.",
      hu: "Múzeum és élményvilág Wattensben, Tirolban, amely a Swarovski kristályüveg-gyártó világát ünnepli.",
      ro: "Un muzeu și o lume a experiențelor în Wattens, Tirol, care celebrează lumea producătorului de sticlă de cristal Swarovski.",
      en: "A museum and world of experience in Wattens, Tyrol, that celebrates the world of crystal glass manufacturer Swarovski."
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Swarovski Kristályvilágok (Kristallwelten) egy varázslatos múzeum és élménypark a tiroli Wattensben, a Swarovski cég központjában. A látványosságot 1995-ben, a cég 100. évfordulójára hozták létre André Heller multimédia-művész tervei alapján. A Kristályvilágok bejárata egy hatalmas, fűvel borított óriás feje, amelynek szemei kristályból vannak, és a szájából vízesés zúdul alá. Az 'Óriás' belsejében 18 'Csodakamra' (Wunderkammer) található, amelyeket neves nemzetközi művészek, mint például Brian Eno, Tord Boontje, Niki de Saint Phalle és Yayoi Kusama terveztek. Mindegyik terem a kristály témáját dolgozza fel egyedi és lenyűgöző módon, a fénnyel, hanggal és illúzióval játszva. A parkban egy hatalmas kristályfelhő, egy labirintus és egy játszótér is várja a látogatókat. A Kristályvilágok Ausztria egyik leglátogatottabb turisztikai attrakciója, amely a művészet, a kultúra és a szórakozás egyedülálló keverékét kínálja.",
      ro: "Lumea de Cristal Swarovski (Kristallwelten) este un muzeu magic și un parc tematic în Wattens, Tirol, sediul central al companiei Swarovski. Atracția a fost creată în 1995 pentru a 100-a aniversare a companiei. Intrarea în Lumea de Cristal este un cap uriaș acoperit de iarbă, cu ochi de cristal și o cascadă care țâșnește din gură. În interiorul 'Uriașului' se află 18 'Camere ale Minunilor', proiectate de artiști internaționali de renume precum Brian Eno și Yayoi Kusama. Fiecare cameră explorează tema cristalului într-un mod unic, jucându-se cu lumina, sunetul și iluzia. Parcul include, de asemenea, un nor de cristal masiv și un labirint. Este una dintre cele mai vizitate atracții turistice din Austria. Artă și Design K8 - Instalații artistice.",
      en: "Swarovski Crystal Worlds (Kristallwelten) is a magical museum and theme park in Wattens, Tyrol, the headquarters of the Swarovski company. The attraction was created in 1995 for the company's 100th anniversary. The entrance to Crystal Worlds is a giant, grass-covered head with crystal eyes and a waterfall gushing from its mouth. Inside the 'Giant' are 18 'Chambers of Wonder', designed by renowned international artists like Brian Eno and Yayoi Kusama. Each room explores the theme of crystal in a unique way, playing with light, sound, and illusion. The park also includes a massive crystal cloud and a labyrinth. It is one of Austria's most visited tourist attractions. Art & Design Grade 8 - Art Installations."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Kristályvilágokat a Swarovski cég 100. évfordulója alkalmából nyitották meg 1995-ben.",
        "Az 'Óriás' fejét André Heller osztrák művész tervezte.",
        "A 'Kristályfelhő' (Kristallwolke) több mint 800 000 kézzel elhelyezett Swarovski kristályból áll.",
        "A parkban található egy római kori villa maradványai is.",
        "A 'Silent Light' csodakamrában egy kristályfa áll, és mesterséges hó esik, -10°C-os hőmérséklet mellett.",
        "A múzeum évente több mint 700 000 látogatót vonz.",
        "A Swarovski céget 1895-ben alapította Daniel Swarovski, aki feltalálta a kristályok precíziós csiszolására szolgáló gépet.",
        "A Kristályvilágok boltja a világ legnagyobb Swarovski üzlete."
      ],
      ro: [
        "Lumea de Cristal a fost deschisă în 1995 pentru a 100-a aniversare a companiei Swarovski.",
        "Capul 'Uriașului' a fost proiectat de artistul austriac André Heller.",
        "'Norul de Cristal' este format din peste 800.000 de cristale Swarovski plasate manual.",
        "În parc se găsesc și ruinele unei vile romane.",
        "În camera minunilor 'Silent Light' se află un copac de cristal și ninge artificial, la o temperatură de -10°C.",
        "Muzeul atrage peste 700.000 de vizitatori anual.",
        "Compania Swarovski a fost fondată în 1895 de Daniel Swarovski, inventatorul unei mașini de tăiat cu precizie cristalele.",
        "Magazinul Lumea de Cristal este cel mai mare magazin Swarovski din lume."
      ],
      en: [
        "Crystal Worlds was opened in 1995 to mark the 100th anniversary of the Swarovski company.",
        "The 'Giant's' head was designed by the Austrian artist André Heller.",
        "The 'Crystal Cloud' consists of over 800,000 hand-mounted Swarovski crystals.",
        "The park also contains the remains of a Roman villa.",
        "In the 'Silent Light' chamber of wonder, a crystal tree stands and artificial snow falls at a temperature of -10°C.",
        "The museum attracts more than 700,000 visitors annually.",
        "The Swarovski company was founded in 1895 by Daniel Swarovski, the inventor of a machine for precision-cutting crystals.",
        "The Crystal Worlds store is the largest Swarovski shop in the world."
      ]
    }
  },
  {
    id: "industry-zillertal-bier-extra",
    type: "industry",
    parent: "AT-7",
    coords: [11.87, 47.29],
    name: { de: "Zillertal Bier", hu: "Zillertal Sör", ro: "Berea Zillertal", en: "Zillertal Beer" },
    description: {
      de: "Die älteste Privatbrauerei Tirols in Zell am Ziller, die seit über 500 Jahren Bier braut.",
      hu: "Tirol legrégebbi magán sörfőzdéje Zell am Zillerben, amely több mint 500 éve főz sört.",
      ro: "Cea mai veche berărie privată din Tirol, în Zell am Ziller, care produce bere de peste 500 de ani.",
      en: "The oldest private brewery in Tyrol, in Zell am Ziller, which has been brewing beer for over 500 years."
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Zillertal Bier, Tirol legrégebbi magánsörfőzdéje, több mint 500 éves múltra tekint vissza. A Zell am Zillerben található családi vállalkozás 1500 óta főz sört, generációról generációra adva tovább a tudást és a hagyományokat. A sörfőzde büszke a helyi alapanyagok használatára: a sörfőzéshez a Zillertali-Alpokból származó, kristálytiszta forrásvizet és helyi termesztésű árpát használnak. A modern 'BrauKunstHaus' látogatóközpont egy interaktív utazásra invitálja a vendégeket a sör világába. A multimédiás kiállítás bemutatja a sörfőzés folyamatát, a régió sörözési kultúráját és a Zillertal természeti sokféleségét. A túra természetesen sörkóstolóval zárul, ahol a látogatók megízlelhetik a különböző sörkülönlegességeket, a hagyományos Zillertal Pils-től a kézműves sörökig. A Zillertal Bier egy élő példája annak, hogyan lehet a több évszázados hagyományt a legmodernebb technológiával ötvözni.",
      ro: "Zillertal Bier, cea mai veche berărie privată din Tirol, are o istorie de peste 500 de ani. Afacerea de familie din Zell am Ziller produce bere din 1500, transmițând cunoștințele din generație în generație. Berăria se mândrește cu utilizarea ingredientelor locale: apă de izvor cristalină din Alpii Zillertal și orz cultivat local. Centrul modern pentru vizitatori 'BrauKunstHaus' invită oaspeții într-o călătorie interactivă în lumea berii. Expoziția multimedia prezintă procesul de fabricare a berii și cultura berii din regiune. Turul se încheie cu o degustare de bere, unde vizitatorii pot gusta diverse specialități. Zillertal Bier este un exemplu viu al modului în care tradiția poate fi combinată cu tehnologia de ultimă oră. Chimie K8 - Procese de fermentare.",
      en: "Zillertal Bier, Tyrol's oldest private brewery, has a history of over 500 years. The family business in Zell am Ziller has been brewing beer since 1500, passing down knowledge from generation to generation. The brewery prides itself on using local ingredients: crystal-clear spring water from the Zillertal Alps and locally grown barley. The modern 'BrauKunstHaus' visitor center invites guests on an interactive journey into the world of beer. The multimedia exhibition presents the brewing process and the region's beer culture. The tour ends with a beer tasting, where visitors can taste various specialties. Zillertal Bier is a living example of how tradition can be combined with state-of-the-art technology. Chemistry Grade 8 - Fermentation Processes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A sörfőzdét először 1500-ban említik egy innsbrucki adóívben.",
        "A sörfőzde a mai napig családi tulajdonban van.",
        "A 'BrauKunstHaus' 2020-ban nyílt meg, és a legmodernebb sörélményközpontok egyike Ausztriában.",
        "A 'Gauder Fest', Ausztria legrégebbi népünnepélye, szorosan kötődik a sörfőzdéhez; itt főzik a különleges 'Gauder Bock' sört.",
        "A sörfőzde évente körülbelül 80 000 hektoliter sört termel.",
        "A kiállítás részeként egy 360 fokos mozi is bemutatja a Zillertal szépségeit.",
        "A 'Tyroler Imperial Zwickl' egy szűretlen, természetes sörspecialitás.",
        "A sörfőzde elkötelezett a fenntarthatóság mellett, és a legmodernebb energiatakarékos technológiákat alkalmazza."
      ],
      ro: [
        "Berăria este menționată pentru prima dată într-un registru fiscal din Innsbruck în 1500.",
        "Berăria este încă o afacere de familie.",
        "'BrauKunstHaus' a fost deschis în 2020 și este unul dintre cele mai moderne centre de experiență a berii din Austria.",
        "'Gauder Fest', cel mai vechi festival popular din Austria, este strâns legat de berărie; aici se produce berea specială 'Gauder Bock'.",
        "Berăria produce anual aproximativ 80.000 de hectolitri de bere.",
        "Expoziția include un cinematograf 360 de grade care prezintă frumusețile din Zillertal.",
        "'Tyroler Imperial Zwickl' este o specialitate de bere nefiltrată, naturală.",
        "Berăria este angajată în sustenabilitate și utilizează cele mai noi tehnologii de economisire a energiei."
      ],
      en: [
        "The brewery was first mentioned in an Innsbruck tax register in 1500.",
        "The brewery is still a family-run business today.",
        "'BrauKunstHaus' opened in 2020 and is one of the most modern beer experience centers in Austria.",
        "'Gauder Fest', Austria's oldest folk festival, is closely linked to the brewery; the special 'Gauder Bock' beer is brewed here.",
        "The brewery produces about 80,000 hectoliters of beer annually.",
        "The exhibition includes a 360-degree cinema showcasing the beauties of the Zillertal.",
        "'Tyroler Imperial Zwickl' is an unfiltered, natural beer specialty.",
        "The brewery is committed to sustainability and uses the latest energy-saving technologies."
      ]
    }
  }
];
